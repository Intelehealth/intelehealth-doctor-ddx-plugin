import { Inject, Injectable, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CONFIG_SERVICE, ENVIRONMENT, SOCKET_SERVICE } from "../lib/token";
import markdownit from "markdown-it";
import { Observable, of, throwError } from "rxjs";
import { catchError, switchMap, take, timeout } from "rxjs/operators";
import { getVisitSummaryJson, isJsonVisitSummaryEnabled } from "../lib/visit-summary-json";

const AI_DDX_PRECOMPUTE_CONFIG_KEY = "ai_ddx_precompute";
const AI_DDX_STATUS_EVENT = "ai_ddx_status";
const AI_DDX_WAIT_TIMEOUT_MS = 5 * 60 * 1000;
const AI_DDX_AUTO_RETRY_STATUSES = ["failed", "not_found"];

@Injectable({
  providedIn: "root",
})
export class AiddxService {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(ENVIRONMENT) private env?: any,
    @Optional() @Inject(CONFIG_SERVICE) private configService?: any,
    @Optional() @Inject(SOCKET_SERVICE) private socketService?: any
  ) {
    if (!this.env) {
      console.warn("ENVIRONMENT is not provided!");
    }
  }

  isPrecomputeEnabled(): boolean {
    return this.configService?.ai_llm?.[AI_DDX_PRECOMPUTE_CONFIG_KEY] !== false;
  }

  usesPrecompute(prescriptionShared: boolean = false): boolean {
    return !prescriptionShared && this.isPrecomputeEnabled();
  }

  getAIDiagnosis(casehistory: any, visitUuid: string, prescriptionShared: boolean = false) {
    if (prescriptionShared) {
      return this.http.post(`${this.env.mindmapURL}/ddxfinal`, { casehistory, visitUuid });
    }
    if (!this.isPrecomputeEnabled()) {
      return this.http.post(`${this.env.mindmapURL}/ddx`, { casehistory, visitUuid });
    }
    return this.fetchStoredDiagnosis(visitUuid).pipe(
      catchError((err: any) => (this.isRetryable(err) ? of({ status: "retry" }) : throwError(err))),
      switchMap((res: any) => {
        if (res?.status === "retry") {
          return this.retryAIDiagnosis(visitUuid);
        }
        return this.isPending(res) ? this.waitForStoredDiagnosis(visitUuid, res) : of(res);
      })
    );
  }

  private isRetryable(err: any): boolean {
    return err?.status === 404 && AI_DDX_AUTO_RETRY_STATUSES.includes(err?.error?.status);
  }

  retryAIDiagnosis(visitUuid: string): Observable<any> {
    return this.http.post(`${this.env.mindmapURL}/ai-ddx/${visitUuid}/retry`, {}).pipe(
      switchMap((res: any) => this.waitForStoredDiagnosis(visitUuid, res))
    );
  }

  private fetchStoredDiagnosis(visitUuid: string): Observable<any> {
    return this.http.get(`${this.env.mindmapURL}/ai-ddx/${visitUuid}`);
  }

  private isPending(res: any): boolean {
    return res?.status === "pending" || res?.status === "processing";
  }

  private waitForStoredDiagnosis(visitUuid: string, pendingResponse: any): Observable<any> {
    const pendingError = { status: 202, pending: true, error: pendingResponse };
    if (!this.socketService?.socket && this.socketService?.initSocket) {
      this.socketService.initSocket();
    }
    const socket = this.socketService?.socket;
    if (!socket) {
      return throwError(pendingError);
    }
    return this.statusEvents(socket, visitUuid).pipe(
      take(1),
      timeout(AI_DDX_WAIT_TIMEOUT_MS),
      catchError((err: any) => throwError(err?.name === "TimeoutError" ? pendingError : err)),
      switchMap(() => this.fetchStoredDiagnosis(visitUuid)),
      switchMap((res: any) => (this.isPending(res) ? throwError(pendingError) : of(res)))
    );
  }

  private statusEvents(socket: any, visitUuid: string): Observable<any> {
    return new Observable<any>((observer) => {
      const onStatus = (data: any) => {
        if (data?.visitUuid === visitUuid) {
          observer.next(data);
        }
      };
      const watch = () => socket.emit("ai_ddx_watch", { visitUuid });
      socket.on(AI_DDX_STATUS_EVENT, onStatus);
      socket.on("connect", watch);
      watch();
      return () => {
        socket.off(AI_DDX_STATUS_EVENT, onStatus);
        socket.off("connect", watch);
        socket.emit("ai_ddx_unwatch", { visitUuid });
      };
    });
  }

  getVisitSummaryJson(visit: any): any | null {
    return getVisitSummaryJson(visit);
  }

  isJsonVisitSummaryEnabled(override?: boolean): boolean {
    return isJsonVisitSummaryEnabled(this.configService, override);
  }

  resolveVisitSummaryJson(visit: any, override?: boolean): any | null {
    return this.isJsonVisitSummaryEnabled(override) ? getVisitSummaryJson(visit) : null;
  }

  getDDxPayload(patientInfo: any, visit: any, notes?: string, visitSummaryJson?: any) {
    const data = this.getDataToExtract(patientInfo, visit);
    const summaryJson = visitSummaryJson !== undefined ? visitSummaryJson : this.resolveVisitSummaryJson(visit);
    const get = (key, fallback = "Null") => data[key] || fallback;

    const adultinitial = get("vst.encounters")?.ADULTINITIAL || [];
    const complaint = adultinitial.find((a) =>
      a?.concept?.display?.includes?.("COMPLAINT")
    );
    const phyExam = adultinitial.find((a) =>
      a?.concept?.display?.includes?.("PHYSICAL EXAMINATION")
    );
    const famHist = adultinitial.find((a) =>
      a?.concept?.display?.includes?.("FAMILY HISTORY")
    );
    const medHist = adultinitial.find((a) =>
      a?.concept?.display?.includes?.("MEDICAL HISTORY")
    );

    const vitals = get("vst.encounters")?.Vitals || [];
    const vitalPayload = `\nVitals: \n${vitals
      .map((v) => `${v?.concept?.display}: ${v?.value}`)
      .join("\n")}`;

    if (summaryJson) {
      return notes ? { ...summaryJson, notes } : summaryJson;
    }

    const payload = `Gender: ${get("pi.person.gender", "Not specified")}
Age: ${this.formatAge(data["pi.person.birthdate"], data["pi.person.age"])}

Chief_complaint: ${this.formatText(complaint?.value || "")}

Physical_examination: ${this.formatText(phyExam?.value || "")}

Family_history: ${this.formatText(famHist?.value || "")}

Medical_history: ${this.formatText(medHist?.value || "")}

${vitals?.length ? vitalPayload : ""}

${notes ? `Notes: ${notes}` : ""}`;

    return payload;
  }

  getDataToExtract(patientInfo: any, visit: any) {
    const data = {
      ...this.flatten(patientInfo, "pi"),
      ...this.flatten(visit, "vst"),
    };
    return data;
  }

  flatten(obj = {}, parentKey = "") {
    let flatData = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (Array.isArray(value)) {
        if (key === "encounters") {
          let attr = {};
          value.forEach((item, index) => {
            attr[item?.encounterType?.display] = item?.obs;
          });
          flatData[newKey] = attr;
        }
      } else if (typeof value === "object" && value !== null) {
        const nestedFlat = this.flatten(value, newKey);
        flatData = { ...flatData, ...nestedFlat };
      } else {
        flatData[newKey] = value;
      }
    }

    return flatData;
  }

  formatAge(birthdate: any, age: any): string {
    if (birthdate) {
      const dob = new Date(birthdate);
      if (!isNaN(dob.getTime())) {
        const now = new Date();
        const days = Math.max(0, Math.floor((now.getTime() - dob.getTime()) / 86400000));
        // 0-28 days: days only
        if (days <= 28) return `${days} day${days === 1 ? "" : "s"}`;
        let months = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
        if (now.getDate() < dob.getDate()) months--;
        if (months < 0) months = 0;
        // 29 days - 23 months: months only
        if (months < 24) return `${months} month${months === 1 ? "" : "s"}`;
        const years = Math.floor(months / 12);
        const remMonths = months % 12;
        // 18+ years: years only
        if (years >= 18) return `${years} years`;
        // 2-17 years: years and months
        return remMonths > 0
          ? `${years} years ${remMonths} month${remMonths === 1 ? "" : "s"}`
          : `${years} years`;
      }
    }
    if (age !== undefined && age !== null && age !== "" && Number(age) > 0) {
      return `${age} year${Number(age) === 1 ? "" : "s"}`;
    }
    return "Not specified";
  }

  formatText(text: string): string {
    if (!text) return "";

    return text
      .replace(/<br\/>/g, "\n")
      .replace(/<b>/g, "**")
      .replace(/<\/b>/g, "**")
      .replace(/►/g, "")
      .trim();
  }

  markdownit(txt: any) {
    const md = markdownit();
    let formattedText = txt.map(obj => {
      return Object.entries(obj).map(([key, value]) => `**${key}**: ${value}`).join("\n");
    }).join("\n\n");
    return md.renderInline(formattedText);
  }
}
