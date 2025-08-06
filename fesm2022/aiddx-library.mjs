import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import markdownit from 'markdown-it';
import * as i1 from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import * as i2 from '@angular/material/dialog';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i5 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';

const DIAGNOSIS_SERVICE = new InjectionToken('DIAGNOSIS_SERVICE');
const CONFIG_SERVICE = new InjectionToken('CONFIG_SERVICE');
const ENVIRONMENT = new InjectionToken('ENVIRONMENT');
const dummyPayload = "Gender: Male\n\n\u00a0 Age: 21 years\n\n\u00a0 Chief_complaint: ► **Skin disorder** :\n\u00a0• Type of the skin lesion - Skin rash.\n\u00a0• Site - Face.\n\u00a0• No. of lesions - Multiple lesions.\n\u00a0• Duration - 1 महिने.\n\u00a0• Progression - Transient.\n\u00a0• Exposure to irritants/offending agents - No.\n\u00a0• Prior treatment sought - None.\n\u00a0► **Associated symptoms** :\n\u00a0• Patient reports -\n\u00a0Skin discharge - Clear.\n\u00a0• Patient denies -\n\u00a0Painful skin lesion, Skin bruises, Nose bleed, Gum bleeding, Abdominal pain,\n\u00a0Fever, Itchy skin, Runny nose, Joint pain, Dandruff, Sensitive to the sun\n\n\u00a0 Physical_examination: **General exams:**\n\u00a0• Eyes: Jaundice-no jaundice seen, [picture taken].\n\u00a0• Eyes: Pallor-normal pallor, [picture taken].\n\u00a0• Arm-Pinch skin* - pinch test normal.\n\u00a0• Nail abnormality-nails normal, [picture taken].\n\u00a0• Nail anemia-Nails are not pale, [picture taken].\n\u00a0• Ankle-no pedal oedema.\n\u00a0**Any Location:**\n\u00a0• Skin Rash:-rash seen, 5. surface is smooth. rash not present on palms and\n\u00a0soles. no eschar. , [picture taken].\n\n\u00a0 Patient_medical_history: • Allergies - No known allergies.\n\u00a0• Alcohol use - No.\n\u00a0• Smoking history - Patient denied/has no h/o smoking.\n\u00a0• Drug history - No recent medication.\n\n\u00a0 Family_history: -\n\n\u00a0 Vitals:-\n\n\u00a0Sbp: 102.0\n\n\u00a0 Dbp: 83.0\n\n\u00a0 Pulse: 86.0\n\n\u00a0 Temperature: 37.0 'C\n\n\u00a0 Weight: 46.0 Kg\n\n\u00a0 Height: 156.0 cm\n\n\u00a0 RR: 21.0\n\n\u00a0 SPO2: 99.0\n\n\u00a0 HB: Null\n\n\u00a0 Sugar_random: Null\n\n\u00a0 Blood_group: Null\n\n\u00a0 Sugar_pp: Null\n\n\u00a0 Sugar_after_meal: Null";
const response = {
    "conclusion": "Based on the patient's age, the location and description of the rash, and the absence of other symptoms, acne vulgaris is the most likely diagnosis. Rosacea and seborrheic dermatitis are also possible, but less likely. Contact dermatitis and tinea facialis are less likely due to the lack of specific features. Further evaluation, such as a skin examination and potentially a skin scraping, may be necessary to confirm the diagnosis and determine the appropriate treatment.",
    "result": [
        {
            "diagnosis": "Acne Vulgaris (High)",
            "likelihood": "High",
            "rationale": "*Clinical Relevance and Features:The patient is a 21 year old male presenting with a skin rash on the face for one month. The description of multiple lesions and clear discharge is consistent with acne. The absence of pain, itching, or other systemic symptoms further supports this diagnosis. *Relevance to Rural India:Acne is a common skin condition worldwide, affecting adolescents and young adults. While not directly related to the rural Indian context, access to dermatological care and specific treatments might be limited, leading to delayed or inappropriate management. *Clinical Relevance:Acne vulgaris is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It is most common in adolescents and young adults, and it can cause pimples, blackheads, and whiteheads."
        },
        {
            "diagnosis": "Rosacea (Moderate)",
            "likelihood": "Moderate",
            "rationale": "*Clinical Relevance and Features:Rosacea can present with facial redness, small visible blood vessels, and sometimes papules and pustules. The patient's age and the location of the rash on the face are consistent with rosacea. The absence of itching argues against other common skin conditions. *Relevance to Rural India:Rosacea is less common than acne but can occur in individuals with fair skin. Environmental factors like sun exposure, which is common in rural India, can exacerbate rosacea. *Clinical Relevance:Rosacea is a chronic skin condition that causes redness, small bumps, and visible blood vessels on the face. It is more common in women than men, and it typically affects people between the ages of 30 and 50."
        },
        {
            "diagnosis": "Seborrheic Dermatitis (Moderate)",
            "likelihood": "Moderate",
            "rationale": "*Clinical Relevance and Features:Seborrheic dermatitis can cause a rash on the face, particularly in areas with sebaceous glands. While the patient denies dandruff, seborrheic dermatitis can sometimes present without significant scalp involvement. *Relevance to Rural India:Seborrheic dermatitis is a common skin condition that can be exacerbated by factors like stress and poor hygiene. *Clinical Relevance:Seborrheic dermatitis is a common skin condition that causes scaly, flaky, itchy skin. It is most common on the scalp, face, and chest."
        },
        {
            "diagnosis": "Contact Dermatitis (Low)",
            "likelihood": "Low",
            "rationale": "*Lack of Fit Reasoning:Although the patient denies exposure to irritants, it's possible they are unaware of a specific trigger. However, the transient nature of the rash and the absence of itching make contact dermatitis less likely. *Clinical Relevance:Contact dermatitis is a skin condition that occurs when the skin comes into contact with an irritant or allergen. The symptoms of contact dermatitis include redness, itching, and blistering."
        },
        {
            "diagnosis": "Tinea Facialis (Low)",
            "likelihood": "Low",
            "rationale": "*Lack of Fit Reasoning:Tinea facialis (ringworm of the face) is a fungal infection that typically presents with a more circular, scaly rash. The description of the rash as \"smooth\" and the absence of itching make this diagnosis less likely. *Clinical Relevance:Tinea facialis is a fungal infection of the face that causes a red, scaly rash. It is more common in people who live in warm, humid climates."
        }
    ]
};

class AiddxService {
    http;
    env;
    constructor(http, env) {
        this.http = http;
        this.env = env;
        if (!this.env) {
            console.warn("ENVIRONMENT is not provided!");
        }
    }
    getAIDiagnosis(casehistory, visitUuid) {
        return this.http.post(`${this.env.base}/ddx`, { casehistory, visitUuid });
    }
    getDDxPayload(patientInfo, visit, notes) {
        const data = this.getDataToExtract(patientInfo, visit);
        const get = (key, fallback = "Null") => data[key] || fallback;
        const adultinitial = get("vst.encounters")?.ADULTINITIAL || [];
        const complaint = adultinitial.find((a) => a?.concept?.display?.includes?.("COMPLAINT"));
        const phyExam = adultinitial.find((a) => a?.concept?.display?.includes?.("PHYSICAL EXAMINATION"));
        const famHist = adultinitial.find((a) => a?.concept?.display?.includes?.("FAMILY HISTORY"));
        const medHist = adultinitial.find((a) => a?.concept?.display?.includes?.("MEDICAL HISTORY"));
        const vitals = get("vst.encounters")?.Vitals || [];
        const vitalPayload = `\nVitals: \n${vitals
            .map((v) => `${v?.concept?.display}: ${v?.value}`)
            .join("\n")}`;
        const payload = `Gender: ${get("pi.person.gender", "Not specified")}
Age: ${get("pi.person.age", "Not specified")}

Chief_complaint: ${this.formatText(complaint?.value || "")}

Physical_examination: ${this.formatText(phyExam?.value || "")}

Family_history: ${this.formatText(famHist?.value || "")}

Medical_history: ${this.formatText(medHist?.value || "")}

${vitals?.length ? vitalPayload : ""}

${notes ? `Notes: ${notes}` : ""}`;
        return payload;
    }
    getDataToExtract(patientInfo, visit) {
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
            }
            else if (typeof value === "object" && value !== null) {
                const nestedFlat = this.flatten(value, newKey);
                flatData = { ...flatData, ...nestedFlat };
            }
            else {
                flatData[newKey] = value;
            }
        }
        return flatData;
    }
    formatText(text) {
        if (!text)
            return "";
        return text
            .replace(/<br\/>/g, "\n")
            .replace(/<b>/g, "**")
            .replace(/<\/b>/g, "**")
            .replace(/►/g, "")
            .trim();
    }
    markdownit(txt) {
        const md = markdownit();
        let formattedText = txt.map(obj => {
            return Object.entries(obj).map(([key, value]) => `**${key}**: ${value}`).join("\n");
        }).join("\n\n");
        return md.renderInline(formattedText);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, deps: [{ token: i1.HttpClient }, { token: ENVIRONMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ENVIRONMENT]
                }] }]; } });

class AiTxService {
    http;
    env;
    lastDiagnosis = null;
    cachedResponse = null;
    constructor(http, env) {
        this.http = http;
        this.env = env;
        if (!this.env) {
            console.warn("ENVIRONMENT is not provided!");
        }
    }
    getAITTx(casehistory, diagnosis, visitUuid) {
        if (diagnosis !== this.lastDiagnosis || !this.cachedResponse) {
            this.lastDiagnosis = diagnosis;
            this.cachedResponse = this.http.post(`${this.env.base}/ttxv1`, { diagnosis, case: casehistory, visitUuid }).pipe(shareReplay(1));
        }
        return this.cachedResponse;
    }
    getTxPayload(patientInfo, visit) {
        const data = this.getDataToExtract(patientInfo, visit);
        const get = (key, fallback = "Null") => data[key] || fallback;
        const adultinitial = get("vst.encounters")?.ADULTINITIAL || [];
        const complaint = adultinitial.find((a) => a?.concept?.display?.includes?.("COMPLAINT"));
        const phyExam = adultinitial.find((a) => a?.concept?.display?.includes?.("PHYSICAL EXAMINATION"));
        const famHist = adultinitial.find((a) => a?.concept?.display?.includes?.("FAMILY HISTORY"));
        const medHist = adultinitial.find((a) => a?.concept?.display?.includes?.("MEDICAL HISTORY"));
        const vitals = get("vst.encounters")?.Vitals || [];
        const vitalPayload = `\nVitals: \n${vitals
            .map((v) => `${v?.concept?.display}: ${v?.value}`)
            .join("\n")}`;
        const payload = `Gender: ${get("pi.person.gender", "Not specified")}
Age: ${get("pi.person.age", "Not specified")}

Chief_complaint: ${this.formatText(complaint?.value || "")}

Physical_examination: ${this.formatText(phyExam?.value || "")}

Family_history: ${this.formatText(famHist?.value || "")}

Medical_history: ${this.formatText(medHist?.value || "")}

${vitals?.length ? vitalPayload : ""}`;
        return payload;
    }
    getDataToExtract(patientInfo, visit) {
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
            }
            else if (typeof value === "object" && value !== null) {
                const nestedFlat = this.flatten(value, newKey);
                flatData = { ...flatData, ...nestedFlat };
            }
            else {
                flatData[newKey] = value;
            }
        }
        return flatData;
    }
    formatText(text) {
        if (!text)
            return "";
        return text
            .replace(/<br\/>/g, "\n")
            .replace(/<b>/g, "**")
            .replace(/<\/b>/g, "**")
            .replace(/►/g, "")
            .trim();
    }
    markdownit(txt) {
        const md = markdownit();
        let formattedText;
        if (typeof txt === 'string') {
            formattedText = txt;
        }
        else if (Array.isArray(txt)) {
            formattedText = txt.map(obj => {
                return Object.entries(obj).map(([key, value]) => `**${key}**: ${value}`).join("\n");
            }).join("\n\n");
        }
        else {
            // Fallback for unexpected input
            formattedText = String(txt);
        }
        return md.renderInline(formattedText);
    }
    clearCache() {
        this.lastDiagnosis = null;
        this.cachedResponse = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiTxService, deps: [{ token: i1.HttpClient }, { token: ENVIRONMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiTxService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiTxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ENVIRONMENT]
                }] }]; } });

// import { dummyPayload, response } from '../token';
class AillmddxComponent {
    ddxSvc;
    dialog;
    patientInfo;
    visit;
    existingDiagnosis = [];
    diagnosisSelected = new EventEmitter();
    furtherQuestionsListReceived = new EventEmitter();
    diagnosisReceived = new EventEmitter();
    notes;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    isActive = false;
    conclusion = '';
    menuContent = '';
    diagnosisName = [];
    questions = [
        {
            title: 'Key symptoms and their characteristics',
            items: [
                'Can you describe the rash in more detail?',
                'Are there any blackheads or whiteheads?',
                'Does the rash itch or burn? Does it get worse after sweating or sun exposure?',
                'When you say the rash is transient, how long does it last before disappearing?',
                'Does it reappear in the same location?'
            ]
        },
    ];
    diagnosisList = [];
    furtherQuestionsList = [];
    selectedDiagnosis = [];
    constructor(ddxSvc, dialog) {
        this.ddxSvc = ddxSvc;
        this.dialog = dialog;
    }
    ngOnInit() { }
    getAIDiagnosis(notes) {
        const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit, notes);
        this.isLoading = true;
        this.diagnosisList = [];
        this.furtherQuestionsList = [];
        this.ddxSvc.getAIDiagnosis(payload, this.visit.uuid).subscribe({
            next: (data) => {
                if (data?.conclusion)
                    this.conclusion = data?.conclusion;
                if (data?.result?.data?.result?.length > 0) {
                    this.noData = false;
                    this.diagnosisList = data.result.data.result.map(v => {
                        return {
                            ...v,
                            diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, ''),
                            rationale: this.ddxSvc.markdownit(v?.rationale)
                        };
                    });
                    this.diagnosisReceived.emit(this.diagnosisList);
                }
                else {
                    this.noData = true;
                }
                if (data?.result?.data?.further_questions?.length > 0) {
                    this.furtherQuestionsList = data.result.data.further_questions.map(q => {
                        const key = Object.keys(q)[0];
                        return q[key];
                    });
                    this.furtherQuestionsListReceived.emit(this.furtherQuestionsList);
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
        // setTimeout(() => {
        //   if (response.result.length > 0) {
        //     this.noData = false;
        //     this.conclusion = response?.conclusion;
        //     this.diagnosisList = response.result.map(v => ({ ...v, diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, '') }));
        //   } else {
        //     this.noData = true;
        //   }
        //   this.isLoading = false;
        // }, 3000);
    }
    getAIDiagnosisWithRetry(notes) {
        const MAX_RETRIES = 3;
        let retryCount = 0;
        const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit, notes);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.diagnosisList = [];
            this.furtherQuestionsList = [];
            this.ddxSvc.getAIDiagnosis(payload, this.visit.uuid).subscribe({
                next: (data) => {
                    if (data?.conclusion)
                        this.conclusion = data?.conclusion;
                    if (data?.result?.data?.result?.length > 0) {
                        this.noData = false;
                        this.diagnosisList = data.result.data.result.map(v => {
                            return {
                                ...v,
                                diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, ''),
                                // rationale: this.ddxSvc.markdownit(v?.rationale)
                                rationale: v?.rationale
                            };
                        });
                        console.log(this.diagnosisList);
                        this.diagnosisReceived.emit(this.diagnosisList);
                        if (data?.result?.data?.further_questions?.length > 0) {
                            this.furtherQuestionsList = data.result.data.further_questions.map(q => {
                                const key = Object.keys(q)[0];
                                return q[key];
                            });
                            this.furtherQuestionsListReceived.emit(this.furtherQuestionsList);
                        }
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAIDiagnosis`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.isLoading = false;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        this.getAIDiagnosis(this.notes);
    }
    onAIDiagnosisChange(event) {
        if (!event) {
            this.selectedDiagnosis = [];
        }
        else if (Array.isArray(event)) {
            this.selectedDiagnosis = [...event];
        }
        else {
            const index = this.selectedDiagnosis.indexOf(event);
            if (index > -1) {
                this.selectedDiagnosis = this.selectedDiagnosis.filter(d => d !== event);
            }
            else {
                this.selectedDiagnosis = [...this.selectedDiagnosis, event];
            }
        }
        this.diagnosisSelected.emit([...this.selectedDiagnosis]);
    }
    isDiagnosisExists(diagnosis) {
        return this.existingDiagnosis.some(d => d.diagnosisName === diagnosis);
    }
    isDiagnosisSelected(diagnosis) {
        return this.selectedDiagnosis.includes(diagnosis) || this.existingDiagnosis.some(d => d?.diagnosisName === diagnosis);
    }
    setMenuContent(title, likelihood, item) {
        this.menuContent = item.flatMap(obj => Object.entries(obj).map(([key, value]) => ({ key, value })));
        this.diagnosisName = [title, likelihood];
        return;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmddxComponent, deps: [{ token: AiddxService }, { token: i2.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmddxComponent, selector: "app-aillmddx", inputs: { patientInfo: "patientInfo", visit: "visit", existingDiagnosis: "existingDiagnosis", notes: "notes" }, outputs: { diagnosisSelected: "diagnosisSelected", furtherQuestionsListReceived: "furtherQuestionsListReceived", diagnosisReceived: "diagnosisReceived" }, ngImport: i0, template: "<ng-container *ngIf=\"!diagnosisList.length\">\r\n  <div class=\"d-flex justify-content-center mt-3\">\r\n    <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n      <ng-container *ngIf=\"!isLoading && (hasError || noData)\">\r\n        <div class=\"text-danger\" [ngStyle]=\"{ 'margin-top': hasError ? '15px' : '40px' }\">\r\n          <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /></span>\r\n          <span *ngIf=\"hasError\" class=\"ml-2\">No suggestions at this moment</span>\r\n          <span *ngIf=\"noData\" class=\"ml-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span>\r\n        </div>\r\n        <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-3\" (click)=\"onTryAgain()\">{{'Try again'|translate}}</button>\r\n      </ng-container>\r\n\r\n      <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n        <div class=\"eins\"></div>\r\n        <div class=\"zwei\"></div>\r\n        <div class=\"drei\"></div>\r\n      </button>\r\n\r\n      <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n        <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n        <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div class=\"intel-expansion-con mt-3\">\r\n  <mat-expansion-panel [expanded]=\"true\" class=\"ayu-report-panel\" *ngIf=\"diagnosisList.length\">\r\n    <mat-expansion-panel-header class=\"custom-header\">\r\n      <mat-panel-title>\r\n        <div class=\"intel-accordion-title\">\r\n          <img src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" />\r\n          <h6 class=\"mb-0 ml-2\">{{ \"Ayu's Detailed Report\" | translate }}</h6>\r\n        </div>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <!-- <div class=\"mat-elevation-z8\"> -->\r\n    <ng-container class=\"mt-2\">\r\n      <div class=\"ayu-report-container\">\r\n        <!-- Left: Rationale -->\r\n        <div class=\"left-section\">\r\n          <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account for all relevant factors; please use your own judgement before acting.\r\n          </div>\r\n          <div class=\"header\">\r\n            <h2> Rationale </h2>\r\n          </div>\r\n          <div class=\"diagnosis-box\">\r\n            <div *ngFor=\"let rationale of diagnosisList; let i = index\"\r\n             [ngClass]=\"{ 'rationale-item': i < diagnosisList.length-1 }\" class=\" mb-2\">\r\n              <div>\r\n                <h4><span style=\"font-weight: bold;\">{{ rationale.diagnosis }}</span>\r\n                  <span class=\"text-muted ms-2\"> ({{ rationale.likelihood }} likely)</span>\r\n                </h4>\r\n                <ul>\r\n                  <li *ngFor=\"let point of rationale.summarised_rationale; let i = index\">\r\n                      {{point}}\r\n                  </li>\r\n                </ul>   \r\n                <button \r\n                  class=\"read-more\" \r\n                  [ngbTooltip]=\"tipContent\" \r\n                  [placement]=\"i === 0 ? 'bottom' : 'top'\"\r\n                  [ngClass]=\"{ 'active-btn': isActive && selectedIndex === i }\"\r\n                  (mouseenter)=\"setMenuContent(rationale.diagnosis, rationale.likelihood, rationale.rationale);\"\r\n                >\r\n                  Read more\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Right: Conclusion and Questions -->\r\n        <div class=\"right-section\">\r\n          <div class=\"report-box\">\r\n            <h3 style=\"font-weight: bold;\">Conclusion</h3>\r\n            {{conclusion}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template #tipContent>\r\n        <div class=\"tooltip-container\">\r\n          <div class=\"tooltip-box\">\r\n            <div class=\"tooltip-header\">\r\n              <strong>{{diagnosisName[0]}}</strong>\r\n              <span class=\"text-muted ms-2\">({{diagnosisName[1]}} likely)</span>\r\n            </div>\r\n            <ul class=\"bullet-points\">\r\n              <li *ngFor=\"let item of menuContent\">\r\n                <p><strong>{{ item.key }}:</strong> {{ item.value }}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ng-container>\r\n  </mat-expansion-panel>\r\n</div>\r\n\r\n\r\n<!-- <div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div> -->\r\n<!-- <div class=\"diagnosis-container p-3\">\r\n      <div *ngFor=\"let diagnosis of diagnosisList\" \r\n          class=\"d-flex align-items-center mb-2\"\r\n          [class.disabled-diagnosis]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n          <input type=\"checkbox\" class=\"custom-checkbox me-2\"\r\n              [checked]=\"isDiagnosisSelected(diagnosis.diagnosis)\"\r\n              [disabled]=\"isDiagnosisExists(diagnosis.diagnosis)\"\r\n              (change)=\"onAIDiagnosisChange(diagnosis.diagnosis)\">\r\n          <label class=\"fw-bold\" [class.text-muted]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n              {{ diagnosis.diagnosis }}\r\n              <span class=\"text-muted ms-2\">(likely {{ diagnosis.likelihood }})</span>\r\n          </label>\r\n      </div>\r\n  </div> -->\r\n\r\n<!-- <div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div> -->", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:18px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted,.text-muted{opacity:.7;font-size:12px;color:#868e96}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.ayu-report-panel{background-color:#f9fffc!important;border:1px solid #B5F2DF;padding:20px;margin:auto}.ayu-report-container{margin:auto;display:flex;gap:20px}.left-section{flex:2;border-radius:10px;margin-bottom:-42px}.right-section{flex:1;border-radius:10px;display:flex;flex-direction:column;gap:20px}.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.header h2{font-weight:700;margin:0}.warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.diagnosis-box h4{margin:0}.diagnosis-box p{margin:4px 0;font-size:14px}.diagnosis-box ul{padding-left:25px}.diagnosis-box li{word-break:break-word;width:520px}.read-more{font-size:12px;cursor:pointer;text-align:right;border:1px solid #B5F2DF;background:#fff;float:right;border-radius:4px;padding:0 7px;color:gray;transition:all .2s ease;position:relative;bottom:32px}.read-more:hover{background:#b5f2df;color:gray;border-color:#0fd197}.report-box{background:radial-gradient(50% 50% at 50% 50%,#ccfff00f,#0dd4980f);border:1px solid #75DEBE;border-radius:10px;padding:16px 20px}.report-box h3{margin-top:0;margin-bottom:10px;font-size:18px}.report-box ul{padding-left:20px;margin:0}.report-box li{margin-bottom:10px;font-size:14px}.question-box{background-color:#fff;border:1px solid #d3f9d8;border-radius:10px;padding:16px 20px}.question-header{display:flex;justify-content:space-between;font-size:16px;margin-bottom:10px}.question-list{padding-left:20px;margin:0;font-size:14px}.question-list li{margin-bottom:8px}::ng-deep .mat-menu-content:not(:empty){padding:0!important}.active-btn{border:1px solid #B5F2DF;background:#b5f2df}.intel-expansion-con ::ng-deep .mat-expansion-panel{box-shadow:none!important;border-radius:12px!important;margin-bottom:0;overflow:visible!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-header{height:20px!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-header.mat-expanded{height:20px!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-body{padding:16px 24px}.intel-expansion-con ::ng-deep .mat-expansion-panel-content .mat-expansion-panel-body{padding:0;margin-top:20px!important;position:relative;border-top:0}.intel-expansion-con ::ng-deep .mat-expansion-panel-content .mat-expansion-panel-body:after{display:none!important}::ng-deep .tooltip.show{opacity:1!important;z-index:9999!important;filter:drop-shadow(0px 2px 6px rgba(0,0,0,.15))}::ng-deep .tooltip-inner{max-width:400px!important;width:400px!important;padding:16px!important;background:#e6fff3!important;text-align:left!important;border-radius:8px!important;margin-left:-322px!important;margin-top:-1px!important}::ng-deep .bs-tooltip-top{padding:8px 0!important}::ng-deep .bs-tooltip-top .arrow{left:40px!important;top:auto!important;bottom:5px!important}::ng-deep .bs-tooltip-top .arrow:before{border-width:10px 10px 0 10px!important;border-style:solid;border-color:#E6FFF3 transparent transparent transparent!important;content:\"\"!important;background:transparent!important}::ng-deep .bs-tooltip-bottom{padding:8px 0!important}::ng-deep .bs-tooltip-bottom .arrow{left:auto!important;right:40px!important;top:5px!important}::ng-deep .bs-tooltip-bottom .arrow:before{border-width:0 10px 10px 10px!important;border-style:solid;border-color:transparent transparent #E6FFF3 transparent!important;content:\"\"!important;background:transparent!important}.tooltip-container{width:100%;box-sizing:border-box}.tooltip-container .tooltip-box{width:100%}.tooltip-container .tooltip-box .tooltip-header{display:flex;align-items:baseline;gap:8px;margin-bottom:16px;flex-wrap:wrap;width:100%}.tooltip-container .tooltip-box .tooltip-header strong{font-size:16px;font-weight:600;color:#000;word-break:break-word}.tooltip-container .tooltip-box .tooltip-header .status{font-size:14px;color:gray;font-weight:400;word-break:break-word}.tooltip-container .tooltip-box .bullet-points{list-style-type:disc!important;padding-left:24px;margin:0;color:#000;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li{margin-bottom:12px;color:#000;display:list-item!important;width:100%;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li:last-child{margin-bottom:0}.tooltip-container .tooltip-box .bullet-points li p{margin:0;font-size:14px;line-height:1.6;color:#000;display:block;word-break:break-word;white-space:normal;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li p strong{color:#000;font-weight:600;margin-right:4px}.space{margin-top:40px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]" }, { kind: "component", type: i4.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i4.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i4.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i5.NgbTooltip, selector: "[ngbTooltip]", inputs: ["animation", "autoClose", "placement", "triggers", "container", "disableTooltip", "tooltipClass", "openDelay", "closeDelay", "ngbTooltip"], outputs: ["shown", "hidden"], exportAs: ["ngbTooltip"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmddxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-aillmddx', template: "<ng-container *ngIf=\"!diagnosisList.length\">\r\n  <div class=\"d-flex justify-content-center mt-3\">\r\n    <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n      <ng-container *ngIf=\"!isLoading && (hasError || noData)\">\r\n        <div class=\"text-danger\" [ngStyle]=\"{ 'margin-top': hasError ? '15px' : '40px' }\">\r\n          <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /></span>\r\n          <span *ngIf=\"hasError\" class=\"ml-2\">No suggestions at this moment</span>\r\n          <span *ngIf=\"noData\" class=\"ml-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span>\r\n        </div>\r\n        <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-3\" (click)=\"onTryAgain()\">{{'Try again'|translate}}</button>\r\n      </ng-container>\r\n\r\n      <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n        <div class=\"eins\"></div>\r\n        <div class=\"zwei\"></div>\r\n        <div class=\"drei\"></div>\r\n      </button>\r\n\r\n      <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n        <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n        <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div class=\"intel-expansion-con mt-3\">\r\n  <mat-expansion-panel [expanded]=\"true\" class=\"ayu-report-panel\" *ngIf=\"diagnosisList.length\">\r\n    <mat-expansion-panel-header class=\"custom-header\">\r\n      <mat-panel-title>\r\n        <div class=\"intel-accordion-title\">\r\n          <img src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" />\r\n          <h6 class=\"mb-0 ml-2\">{{ \"Ayu's Detailed Report\" | translate }}</h6>\r\n        </div>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <!-- <div class=\"mat-elevation-z8\"> -->\r\n    <ng-container class=\"mt-2\">\r\n      <div class=\"ayu-report-container\">\r\n        <!-- Left: Rationale -->\r\n        <div class=\"left-section\">\r\n          <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account for all relevant factors; please use your own judgement before acting.\r\n          </div>\r\n          <div class=\"header\">\r\n            <h2> Rationale </h2>\r\n          </div>\r\n          <div class=\"diagnosis-box\">\r\n            <div *ngFor=\"let rationale of diagnosisList; let i = index\"\r\n             [ngClass]=\"{ 'rationale-item': i < diagnosisList.length-1 }\" class=\" mb-2\">\r\n              <div>\r\n                <h4><span style=\"font-weight: bold;\">{{ rationale.diagnosis }}</span>\r\n                  <span class=\"text-muted ms-2\"> ({{ rationale.likelihood }} likely)</span>\r\n                </h4>\r\n                <ul>\r\n                  <li *ngFor=\"let point of rationale.summarised_rationale; let i = index\">\r\n                      {{point}}\r\n                  </li>\r\n                </ul>   \r\n                <button \r\n                  class=\"read-more\" \r\n                  [ngbTooltip]=\"tipContent\" \r\n                  [placement]=\"i === 0 ? 'bottom' : 'top'\"\r\n                  [ngClass]=\"{ 'active-btn': isActive && selectedIndex === i }\"\r\n                  (mouseenter)=\"setMenuContent(rationale.diagnosis, rationale.likelihood, rationale.rationale);\"\r\n                >\r\n                  Read more\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Right: Conclusion and Questions -->\r\n        <div class=\"right-section\">\r\n          <div class=\"report-box\">\r\n            <h3 style=\"font-weight: bold;\">Conclusion</h3>\r\n            {{conclusion}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template #tipContent>\r\n        <div class=\"tooltip-container\">\r\n          <div class=\"tooltip-box\">\r\n            <div class=\"tooltip-header\">\r\n              <strong>{{diagnosisName[0]}}</strong>\r\n              <span class=\"text-muted ms-2\">({{diagnosisName[1]}} likely)</span>\r\n            </div>\r\n            <ul class=\"bullet-points\">\r\n              <li *ngFor=\"let item of menuContent\">\r\n                <p><strong>{{ item.key }}:</strong> {{ item.value }}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ng-container>\r\n  </mat-expansion-panel>\r\n</div>\r\n\r\n\r\n<!-- <div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div> -->\r\n<!-- <div class=\"diagnosis-container p-3\">\r\n      <div *ngFor=\"let diagnosis of diagnosisList\" \r\n          class=\"d-flex align-items-center mb-2\"\r\n          [class.disabled-diagnosis]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n          <input type=\"checkbox\" class=\"custom-checkbox me-2\"\r\n              [checked]=\"isDiagnosisSelected(diagnosis.diagnosis)\"\r\n              [disabled]=\"isDiagnosisExists(diagnosis.diagnosis)\"\r\n              (change)=\"onAIDiagnosisChange(diagnosis.diagnosis)\">\r\n          <label class=\"fw-bold\" [class.text-muted]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n              {{ diagnosis.diagnosis }}\r\n              <span class=\"text-muted ms-2\">(likely {{ diagnosis.likelihood }})</span>\r\n          </label>\r\n      </div>\r\n  </div> -->\r\n\r\n<!-- <div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div> -->", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:18px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted,.text-muted{opacity:.7;font-size:12px;color:#868e96}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.ayu-report-panel{background-color:#f9fffc!important;border:1px solid #B5F2DF;padding:20px;margin:auto}.ayu-report-container{margin:auto;display:flex;gap:20px}.left-section{flex:2;border-radius:10px;margin-bottom:-42px}.right-section{flex:1;border-radius:10px;display:flex;flex-direction:column;gap:20px}.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.header h2{font-weight:700;margin:0}.warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.diagnosis-box h4{margin:0}.diagnosis-box p{margin:4px 0;font-size:14px}.diagnosis-box ul{padding-left:25px}.diagnosis-box li{word-break:break-word;width:520px}.read-more{font-size:12px;cursor:pointer;text-align:right;border:1px solid #B5F2DF;background:#fff;float:right;border-radius:4px;padding:0 7px;color:gray;transition:all .2s ease;position:relative;bottom:32px}.read-more:hover{background:#b5f2df;color:gray;border-color:#0fd197}.report-box{background:radial-gradient(50% 50% at 50% 50%,#ccfff00f,#0dd4980f);border:1px solid #75DEBE;border-radius:10px;padding:16px 20px}.report-box h3{margin-top:0;margin-bottom:10px;font-size:18px}.report-box ul{padding-left:20px;margin:0}.report-box li{margin-bottom:10px;font-size:14px}.question-box{background-color:#fff;border:1px solid #d3f9d8;border-radius:10px;padding:16px 20px}.question-header{display:flex;justify-content:space-between;font-size:16px;margin-bottom:10px}.question-list{padding-left:20px;margin:0;font-size:14px}.question-list li{margin-bottom:8px}::ng-deep .mat-menu-content:not(:empty){padding:0!important}.active-btn{border:1px solid #B5F2DF;background:#b5f2df}.intel-expansion-con ::ng-deep .mat-expansion-panel{box-shadow:none!important;border-radius:12px!important;margin-bottom:0;overflow:visible!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-header{height:20px!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-header.mat-expanded{height:20px!important}.intel-expansion-con ::ng-deep .mat-expansion-panel-body{padding:16px 24px}.intel-expansion-con ::ng-deep .mat-expansion-panel-content .mat-expansion-panel-body{padding:0;margin-top:20px!important;position:relative;border-top:0}.intel-expansion-con ::ng-deep .mat-expansion-panel-content .mat-expansion-panel-body:after{display:none!important}::ng-deep .tooltip.show{opacity:1!important;z-index:9999!important;filter:drop-shadow(0px 2px 6px rgba(0,0,0,.15))}::ng-deep .tooltip-inner{max-width:400px!important;width:400px!important;padding:16px!important;background:#e6fff3!important;text-align:left!important;border-radius:8px!important;margin-left:-322px!important;margin-top:-1px!important}::ng-deep .bs-tooltip-top{padding:8px 0!important}::ng-deep .bs-tooltip-top .arrow{left:40px!important;top:auto!important;bottom:5px!important}::ng-deep .bs-tooltip-top .arrow:before{border-width:10px 10px 0 10px!important;border-style:solid;border-color:#E6FFF3 transparent transparent transparent!important;content:\"\"!important;background:transparent!important}::ng-deep .bs-tooltip-bottom{padding:8px 0!important}::ng-deep .bs-tooltip-bottom .arrow{left:auto!important;right:40px!important;top:5px!important}::ng-deep .bs-tooltip-bottom .arrow:before{border-width:0 10px 10px 10px!important;border-style:solid;border-color:transparent transparent #E6FFF3 transparent!important;content:\"\"!important;background:transparent!important}.tooltip-container{width:100%;box-sizing:border-box}.tooltip-container .tooltip-box{width:100%}.tooltip-container .tooltip-box .tooltip-header{display:flex;align-items:baseline;gap:8px;margin-bottom:16px;flex-wrap:wrap;width:100%}.tooltip-container .tooltip-box .tooltip-header strong{font-size:16px;font-weight:600;color:#000;word-break:break-word}.tooltip-container .tooltip-box .tooltip-header .status{font-size:14px;color:gray;font-weight:400;word-break:break-word}.tooltip-container .tooltip-box .bullet-points{list-style-type:disc!important;padding-left:24px;margin:0;color:#000;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li{margin-bottom:12px;color:#000;display:list-item!important;width:100%;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li:last-child{margin-bottom:0}.tooltip-container .tooltip-box .bullet-points li p{margin:0;font-size:14px;line-height:1.6;color:#000;display:block;word-break:break-word;white-space:normal;box-sizing:border-box}.tooltip-container .tooltip-box .bullet-points li p strong{color:#000;font-weight:600;margin-right:4px}.space{margin-top:40px}\n"] }]
        }], ctorParameters: function () { return [{ type: AiddxService }, { type: i2.MatDialog }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingDiagnosis: [{
                type: Input
            }], diagnosisSelected: [{
                type: Output
            }], furtherQuestionsListReceived: [{
                type: Output
            }], diagnosisReceived: [{
                type: Output
            }], notes: [{
                type: Input
            }] } });

class AillmtxMedicationComponent {
    TxService;
    patientInfo;
    visit;
    existingMedication = [];
    medicationSelected = new EventEmitter();
    diagnosisName;
    notesss;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
    medicationList = [];
    furtherQuestionsList = [];
    selectedMedicine = [];
    loggedError;
    constructor(TxService) {
        this.TxService = TxService;
    }
    ngOnInit() { }
    getAIMedical(diagnosis) {
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        this.isLoading = true;
        this.medicationList = [];
        this.furtherQuestionsList = [];
        this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
            next: (data) => {
                if (data.result.data.result.length > 0) {
                    this.noData = false;
                    this.medicationList = data.result.data.result.map(v => {
                        return {
                            ...v,
                        };
                    });
                }
                else {
                    this.noData = true;
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
    getAIMedicalWithRetry(diagnosis) {
        const MAX_RETRIES = 1;
        let retryCount = 0;
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.medicationList = [];
            this.furtherQuestionsList = [];
            this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
                next: (data) => {
                    if (data.result.data.success && data.result.data.medications.length > 0) {
                        this.noData = false;
                        this.medicationList = data.result.data.medications.map(v => {
                            return {
                                ...v,
                            };
                        });
                    }
                    else if (!data.data.success) {
                        this.hasError = true;
                        this.loggedError = data.data?.error;
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAITX`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.isLoading = false;
                        this.loggedError = err;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        this.getAIMedicalWithRetry(this.diagnosisName);
    }
    onAIMedicineChange(event) {
        if (!event) {
            this.selectedMedicine = [];
        }
        else if (Array.isArray(event)) {
            this.selectedMedicine = [...event];
        }
        else {
            const index = this.selectedMedicine.findIndex(m => m.name === event.name);
            if (index > -1) {
                this.selectedMedicine = this.selectedMedicine.filter(m => m.name !== event.name);
            }
            else {
                const medicineData = {
                    name: event.name,
                    dosage: event.dosage,
                    frequency: event.frequency,
                    duration: event.duration,
                    duration_unit: event.duration_unit,
                    instructions: event.instructions,
                    uuid: event.uuid,
                    likelihood: event.likelihood
                };
                this.selectedMedicine = [...this.selectedMedicine, medicineData];
            }
        }
        this.medicationSelected.emit(this.selectedMedicine);
    }
    isMedicineExists(medicine) {
        return this.existingMedication.some(d => d.drug === medicine);
    }
    isMedicineSelected(medicine) {
        return this.selectedMedicine.some(m => m.name === medicine.name) || this.existingMedication.some(d => d.drug === medicine.name);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxMedicationComponent, deps: [{ token: AiTxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmtxMedicationComponent, selector: "lib-aillmtx-medication", inputs: { patientInfo: "patientInfo", visit: "visit", existingMedication: "existingMedication", diagnosisName: "diagnosisName", notesss: "notesss" }, outputs: { medicationSelected: "medicationSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!medicationList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Medicines suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                     <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                     <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                     <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"medicationList.length || (!isLoading && (hasError && noData))\">\r\n\r\n     <!-- Reminder -->\r\n  <div *ngIf=\"medicationList.length\" class=\"reminder-alert mt-3\">\r\n     <span class=\"reminder-msg\"><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> Reminder: </span>\r\n     <span class=\"reminder\">Patient is allergic to iboprofen. Please prescribe accordingly.</span>\r\n  </div>\r\n\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n             <img class=\"mr-2\"  src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested medication\r\n        </div>\r\n\r\n        <div class=\"warning mt-2\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n\r\n        <div *ngIf=\"medicationList.length\" class=\"med-scroll-wrapper\" [ngClass]=\"{ 'scroll-enabled': medicationList.length > 6 }\">\r\n        <div class=\"med-grid\">\r\n            <div *ngFor=\"let medicine of medicationList\" class=\"med-card\">\r\n                <div class=\"med-header\">\r\n                    <label class=\"checkbox-label\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': medicine.selected }\" class=\"custom-checkbox me-2\"  [(ngModel)]=\"medicine.selected\"  [checked]=\"isMedicineSelected(medicine)\"\r\n                         [disabled]=\"isMedicineExists(medicine.name)\" (change)=\"onAIMedicineChange(medicine)\" />\r\n                        <span class=\"med-name\"  [class.text-muted]=\"isMedicineExists(medicine.name)\">{{ medicine.name }}</span>\r\n                    </label>\r\n                    <span class=\"med-severity\"  [class.text-muted]=\"isMedicineExists(medicine.name)\">({{ medicine.confidence ? (medicine.confidence.charAt(0).toUpperCase() + medicine.confidence.slice(1).toLowerCase()) : '' }})</span>\r\n                </div>\r\n                <ul class=\"med-details\" [class.text-muted]=\"isMedicineExists(medicine.name)\">\r\n                    <li>{{ medicine.dosage }}</li>\r\n                    <li>{{ medicine.frequency }}</li>\r\n                    <li>{{ medicine.duration }} {{medicine.duration_unit}}</li>\r\n                    <li>{{ medicine.instructions }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No medicines are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:16px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-top:3px;margin-right:9px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.reminder-msg{font-size:14px;font-weight:700}.reminder{font-weight:500;font-size:14px;color:#1b163a}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.med-card{background:#fff;padding:12px 16px;border-radius:6px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:175px;color:#1b163a}.med-severity{font-family:DM Sans;font-weight:400;font-size:12px;color:#7f7b92;white-space:nowrap}.med-details{font-family:DM Sans;font-weight:400;font-size:14px;padding-left:35px}.selected-med{background-color:#0fd197;color:#fff}.reminder-alert{color:#ff475d;background-color:#fff;border:1px solid #F0EFF2;padding:16px;font-size:14px;border-radius:12px}.warning{margin-right:8px}.med-scroll-wrapper{max-height:unset;overflow-y:unset}.med-scroll-wrapper.scroll-enabled{max-height:400px;overflow-y:auto;padding-right:4px;border:1px solid #ccc;border-radius:6px}.med-scroll-wrapper.scroll-enabled::-webkit-scrollbar{width:6px}.med-scroll-wrapper.scroll-enabled::-webkit-scrollbar-thumb{background-color:#bbb;border-radius:4px}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxMedicationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-aillmtx-medication', template: "<ng-container *ngIf=\"!medicationList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Medicines suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                     <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                     <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                     <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"medicationList.length || (!isLoading && (hasError && noData))\">\r\n\r\n     <!-- Reminder -->\r\n  <div *ngIf=\"medicationList.length\" class=\"reminder-alert mt-3\">\r\n     <span class=\"reminder-msg\"><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> Reminder: </span>\r\n     <span class=\"reminder\">Patient is allergic to iboprofen. Please prescribe accordingly.</span>\r\n  </div>\r\n\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n             <img class=\"mr-2\"  src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested medication\r\n        </div>\r\n\r\n        <div class=\"warning mt-2\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n\r\n        <div *ngIf=\"medicationList.length\" class=\"med-scroll-wrapper\" [ngClass]=\"{ 'scroll-enabled': medicationList.length > 6 }\">\r\n        <div class=\"med-grid\">\r\n            <div *ngFor=\"let medicine of medicationList\" class=\"med-card\">\r\n                <div class=\"med-header\">\r\n                    <label class=\"checkbox-label\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': medicine.selected }\" class=\"custom-checkbox me-2\"  [(ngModel)]=\"medicine.selected\"  [checked]=\"isMedicineSelected(medicine)\"\r\n                         [disabled]=\"isMedicineExists(medicine.name)\" (change)=\"onAIMedicineChange(medicine)\" />\r\n                        <span class=\"med-name\"  [class.text-muted]=\"isMedicineExists(medicine.name)\">{{ medicine.name }}</span>\r\n                    </label>\r\n                    <span class=\"med-severity\"  [class.text-muted]=\"isMedicineExists(medicine.name)\">({{ medicine.confidence ? (medicine.confidence.charAt(0).toUpperCase() + medicine.confidence.slice(1).toLowerCase()) : '' }})</span>\r\n                </div>\r\n                <ul class=\"med-details\" [class.text-muted]=\"isMedicineExists(medicine.name)\">\r\n                    <li>{{ medicine.dosage }}</li>\r\n                    <li>{{ medicine.frequency }}</li>\r\n                    <li>{{ medicine.duration }} {{medicine.duration_unit}}</li>\r\n                    <li>{{ medicine.instructions }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No medicines are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:16px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-top:3px;margin-right:9px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.reminder-msg{font-size:14px;font-weight:700}.reminder{font-weight:500;font-size:14px;color:#1b163a}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.med-card{background:#fff;padding:12px 16px;border-radius:6px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:175px;color:#1b163a}.med-severity{font-family:DM Sans;font-weight:400;font-size:12px;color:#7f7b92;white-space:nowrap}.med-details{font-family:DM Sans;font-weight:400;font-size:14px;padding-left:35px}.selected-med{background-color:#0fd197;color:#fff}.reminder-alert{color:#ff475d;background-color:#fff;border:1px solid #F0EFF2;padding:16px;font-size:14px;border-radius:12px}.warning{margin-right:8px}.med-scroll-wrapper{max-height:unset;overflow-y:unset}.med-scroll-wrapper.scroll-enabled{max-height:400px;overflow-y:auto;padding-right:4px;border:1px solid #ccc;border-radius:6px}.med-scroll-wrapper.scroll-enabled::-webkit-scrollbar{width:6px}.med-scroll-wrapper.scroll-enabled::-webkit-scrollbar-thumb{background-color:#bbb;border-radius:4px}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: AiTxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingMedication: [{
                type: Input
            }], medicationSelected: [{
                type: Output
            }], diagnosisName: [{
                type: Input
            }], notesss: [{
                type: Input
            }] } });

class AillmtxAdviceComponent {
    TxService;
    patientInfo;
    visit;
    existingAdvice = [];
    adviceSelected = new EventEmitter();
    diagnosisName;
    notesss;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
    adviceList = [];
    furtherQuestionsList = [];
    selectedAdvice = [];
    loggedError;
    constructor(TxService) {
        this.TxService = TxService;
    }
    ngOnInit() { }
    getAIAdvice(diagnosis) {
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        this.isLoading = true;
        this.adviceList = [];
        this.furtherQuestionsList = [];
        this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
            next: (data) => {
                if (data.result.data.result.length > 0) {
                    this.noData = false;
                    this.adviceList = data.result.data.result.map(v => {
                        return {
                            ...v,
                        };
                    });
                }
                else {
                    this.noData = true;
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
    getAIAdviceWithRetry(diagnosis) {
        const MAX_RETRIES = 1;
        let retryCount = 0;
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.adviceList = [];
            this.furtherQuestionsList = [];
            this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
                next: (data) => {
                    if (data.result.data.success && data.result.data.medical_advice.length > 0) {
                        this.noData = false;
                        this.adviceList = data.result.data.medical_advice.map(v => {
                            return {
                                v
                            };
                        });
                    }
                    else if (!data.data.success) {
                        this.hasError = true;
                        this.loggedError = data.data?.error;
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAITX`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.loggedError = err;
                        this.isLoading = false;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        console.log(this.diagnosisName, "Retrying AI Follow Up");
        this.getAIAdviceWithRetry(this.diagnosisName);
    }
    onAIAdviceChange(advice) {
        if (!advice) {
            this.selectedAdvice = [];
        }
        else if (Array.isArray(advice)) {
            this.selectedAdvice = [...advice];
        }
        else {
            if (typeof advice === 'string') {
                this.selectedAdvice = this.selectedAdvice.filter(a => a !== advice);
            }
            else {
                const index = this.selectedAdvice.indexOf(advice.v);
                if (index > -1) {
                    this.selectedAdvice = this.selectedAdvice.filter(a => a !== advice.v);
                }
                else {
                    this.selectedAdvice = [...this.selectedAdvice, advice.v];
                }
            }
        }
        this.adviceSelected.emit([...this.selectedAdvice]);
    }
    isAdviceExists(advice) {
        return this.existingAdvice.some(a => a.value === advice);
    }
    isAdviceSelected(advice) {
        return this.selectedAdvice.includes(advice.v) || this.existingAdvice.some(a => a.value === advice.v);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxAdviceComponent, deps: [{ token: AiTxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmtxAdviceComponent, selector: "lib-aillmtx-advice", inputs: { patientInfo: "patientInfo", visit: "visit", existingAdvice: "existingAdvice", diagnosisName: "diagnosisName", notesss: "notesss" }, outputs: { adviceSelected: "adviceSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!adviceList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Advices\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                    <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"adviceList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested advice\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"adviceList.length\" class=\"advice-container\">\r\n            <div  *ngFor=\"let advice of adviceList\" class=\"advice-card\">\r\n                <div class=\"advice-content\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': advice.selected }\" class=\"custom-checkbox me-2\"  [(ngModel)]=\"advice.selected\"  [checked]=\"isAdviceSelected(advice)\"\r\n                       [disabled]=\"isAdviceExists(advice.v)\" (change)=\"onAIAdviceChange(advice)\"/>\r\n                        <div class=\"med-name\"[class.text-muted]=\"isAdviceExists(advice.v)\">{{ advice.v }}</div>\r\n                </div>\r\n            </div>\r\n       </div>\r\n         <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No advice are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container,.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}.med-card{background:#fff;padding:7px 14px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-card .input{margin:0!important}.med-header{display:flex}.checkbox-label{display:flex;align-items:center;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.selected-med{background-color:#0fd197;color:#fff}.advice-container{display:flex;flex-wrap:wrap;gap:16px}.advice-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.advice-content{display:flex;align-items:center;gap:14px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxAdviceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-aillmtx-advice', template: "<ng-container *ngIf=\"!adviceList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Advices\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                    <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"adviceList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested advice\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"adviceList.length\" class=\"advice-container\">\r\n            <div  *ngFor=\"let advice of adviceList\" class=\"advice-card\">\r\n                <div class=\"advice-content\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': advice.selected }\" class=\"custom-checkbox me-2\"  [(ngModel)]=\"advice.selected\"  [checked]=\"isAdviceSelected(advice)\"\r\n                       [disabled]=\"isAdviceExists(advice.v)\" (change)=\"onAIAdviceChange(advice)\"/>\r\n                        <div class=\"med-name\"[class.text-muted]=\"isAdviceExists(advice.v)\">{{ advice.v }}</div>\r\n                </div>\r\n            </div>\r\n       </div>\r\n         <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No advice are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container,.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}.med-card{background:#fff;padding:7px 14px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-card .input{margin:0!important}.med-header{display:flex}.checkbox-label{display:flex;align-items:center;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.selected-med{background-color:#0fd197;color:#fff}.advice-container{display:flex;flex-wrap:wrap;gap:16px}.advice-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.advice-content{display:flex;align-items:center;gap:14px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: AiTxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingAdvice: [{
                type: Input
            }], adviceSelected: [{
                type: Output
            }], diagnosisName: [{
                type: Input
            }], notesss: [{
                type: Input
            }] } });

class AillmtxTestComponent {
    TxService;
    patientInfo;
    visit;
    existingTest = [];
    testSelected = new EventEmitter();
    diagnosisName;
    notesss;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
    testList = [];
    furtherQuestionsList = [];
    selectedTest = [];
    loggedError;
    constructor(TxService) {
        this.TxService = TxService;
    }
    ngOnInit() { }
    getAITest(diagnosis) {
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        this.isLoading = true;
        this.testList = [];
        this.furtherQuestionsList = [];
        this.TxService.getAITTx(payload, diagnosis, this.visit).subscribe({
            next: (data) => {
                if (data.result.data.result.length > 0) {
                    this.noData = false;
                    this.testList = data.result.data.result.map(v => {
                        return {
                            ...v,
                        };
                    });
                }
                else {
                    this.noData = true;
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
    getAITestWithRetry(diagnosis) {
        const MAX_RETRIES = 1;
        let retryCount = 0;
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.testList = [];
            this.furtherQuestionsList = [];
            this.TxService.getAITTx(payload, diagnosis, this.visit).subscribe({
                next: (data) => {
                    if (data.result.data.success && data.result.data.tests_to_be_done.length > 0) {
                        this.noData = false;
                        this.testList = data.result.data.tests_to_be_done.map(v => {
                            return {
                                ...v,
                                rationale: this.TxService.markdownit(v?.rationale)
                            };
                        });
                    }
                    else if (!data.data.success) {
                        this.hasError = true;
                        this.loggedError = data.data?.error;
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAITX`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.isLoading = false;
                        this.loggedError = err;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        this.getAITestWithRetry(this.diagnosisName);
    }
    onAITestChange(test) {
        if (!test) {
            this.selectedTest = [];
        }
        else if (Array.isArray(test)) {
            this.selectedTest = test.map(t => t.test_name || t);
        }
        else {
            const testName = test.test_name || test;
            if (this.selectedTest.includes(testName)) {
                this.selectedTest = this.selectedTest.filter(t => t !== testName);
            }
            else {
                this.selectedTest = [...this.selectedTest, testName];
            }
        }
        this.testSelected.emit([...this.selectedTest]);
    }
    isTestExists(test) {
        return this.existingTest.some(a => a.value === test);
    }
    isTestSelected(test) {
        const testName = test.test_name || test;
        return this.selectedTest.includes(testName) || this.existingTest.some(a => a.value === testName);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxTestComponent, deps: [{ token: AiTxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmtxTestComponent, selector: "lib-aillmtx-test", inputs: { patientInfo: "patientInfo", visit: "visit", existingTest: "existingTest", diagnosisName: "diagnosisName", notesss: "notesss" }, outputs: { testSelected: "testSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!testList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Tests\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                   <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"testList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested investigations\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"testList.length\"  class=\"advice-container\">\r\n            <div *ngFor=\"let test of testList\" class=\"advice-card\">\r\n                <div class=\"advice-content\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': test.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"test.selected\" [checked]=\"isTestSelected(test)\"\r\n                            [disabled]=\"isTestExists(test.test_name)\" (change)=\"onAITestChange(test)\" />\r\n                        <span class=\"med-name\" [class.text-muted]=\"isTestExists(test.test_name)\"> {{ test.test_name\r\n                            }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No tests are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border-width:1px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}.med-card{background:#fff;padding:10px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;align-items:center;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.selected-med{background-color:#0fd197;color:#fff}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}.advice-content{display:flex;align-items:center;gap:14px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.advice-container{display:flex;flex-wrap:wrap;gap:16px}.advice-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.advice-content{display:flex;align-items:center;gap:12px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxTestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-aillmtx-test', template: "<ng-container *ngIf=\"!testList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Tests\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                   <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"testList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested investigations\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"testList.length\"  class=\"advice-container\">\r\n            <div *ngFor=\"let test of testList\" class=\"advice-card\">\r\n                <div class=\"advice-content\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': test.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"test.selected\" [checked]=\"isTestSelected(test)\"\r\n                            [disabled]=\"isTestExists(test.test_name)\" (change)=\"onAITestChange(test)\" />\r\n                        <span class=\"med-name\" [class.text-muted]=\"isTestExists(test.test_name)\"> {{ test.test_name\r\n                            }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No tests are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border-width:1px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}.med-card{background:#fff;padding:10px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;align-items:center;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.selected-med{background-color:#0fd197;color:#fff}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}.advice-content{display:flex;align-items:center;gap:14px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.advice-container{display:flex;flex-wrap:wrap;gap:16px}.advice-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.advice-content{display:flex;align-items:center;gap:12px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: AiTxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingTest: [{
                type: Input
            }], testSelected: [{
                type: Output
            }], diagnosisName: [{
                type: Input
            }], notesss: [{
                type: Input
            }] } });

class AillmtxFollowupComponent {
    TxService;
    patientInfo;
    visit;
    existingFollowUp = [];
    followUpSelected = new EventEmitter();
    diagnosisName;
    notesss;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
    followUpList = [];
    furtherQuestionsList = [];
    selectedFollowUp = [];
    loggedError;
    constructor(TxService) {
        this.TxService = TxService;
    }
    ngOnInit() { }
    getAIFollowUp(diagnosis) {
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        this.isLoading = true;
        this.followUpList = [];
        this.furtherQuestionsList = [];
        this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
            next: (data) => {
                if (data.result.data.result.length > 0) {
                    this.noData = false;
                    this.followUpList = data.result.data.result.map(v => {
                        return {
                            ...v,
                        };
                    });
                }
                else {
                    this.noData = true;
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
    getAIFollowUpWithRetry(diagnosis) {
        const MAX_RETRIES = 1;
        let retryCount = 0;
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.followUpList = [];
            this.furtherQuestionsList = [];
            this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
                next: (data) => {
                    if (data.result.data.success && data.result.data.follow_up.length > 0 && data.result.data.follow_up[0]?.follow_up_duration) {
                        this.noData = false;
                        this.followUpList = data.result.data.follow_up.map(v => {
                            return {
                                ...v,
                            };
                        });
                    }
                    else if (!data.data.success) {
                        this.hasError = true;
                        this.loggedError = data.data?.error;
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAITX`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.isLoading = false;
                        this.loggedError = err;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        console.log(this.diagnosisName, "Retrying AI Follow Up");
        this.getAIFollowUpWithRetry(this.diagnosisName);
    }
    onAIFollowUpChange(event) {
        if (!event) {
            this.selectedFollowUp = [];
        }
        else if (Array.isArray(event)) {
            this.selectedFollowUp = [...event];
        }
        else {
            const index = this.selectedFollowUp.findIndex(f => f.reason_for_follow_up === event.reason_for_follow_up);
            if (index > -1) {
                this.selectedFollowUp = this.selectedFollowUp.filter(f => f.reason_for_follow_up !== event.reason_for_follow_up);
            }
            else {
                const followUpData = {
                    reason_for_follow_up: event.reason_for_follow_up,
                    follow_up_duration: event.follow_up_duration,
                    follow_up_required: event.follow_up_required,
                };
                this.selectedFollowUp = [...this.selectedFollowUp, followUpData];
            }
        }
        this.followUpSelected.emit(this.selectedFollowUp);
    }
    isFollowUpExists(followup) {
        return this.existingFollowUp.some(f => f.followUpReason === followup);
    }
    isFollowUpSelected(followup) {
        return this.selectedFollowUp.some(f => f.reason_for_follow_up === followup.reason_for_follow_up) || this.existingFollowUp.some(f => f.followUpReason === followup.reason_for_follow_up);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxFollowupComponent, deps: [{ token: AiTxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmtxFollowupComponent, selector: "lib-aillmtx-followup", inputs: { patientInfo: "patientInfo", visit: "visit", existingFollowUp: "existingFollowUp", diagnosisName: "diagnosisName", notesss: "notesss" }, outputs: { followUpSelected: "followUpSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!followUpList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Follow-up\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                    <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                </div> \r\n                    <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                        {{'Try again'|translate}}\r\n                    </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"followUpList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested follow-up\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"followUpList.length\">\r\n            <div *ngFor=\"let followup of followUpList\" class=\"med-card\">\r\n                <div>\r\n                    <label class=\"checkbox-label\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': followup.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"followup.selected\"\r\n                            [checked]=\"isFollowUpSelected(followup)\"\r\n                            [disabled]=\"isFollowUpExists(followup.reason_for_follow_up)\"\r\n                            (change)=\"onAIFollowUpChange(followup)\">\r\n                        <span class=\"med-name\" [class.text-muted]=\"isFollowUpExists(followup.reason_for_follow_up)\">{{\r\n                            followup.follow_up_duration }}</span>\r\n                    </label>\r\n                </div>\r\n                <ul class=\"med-details\" [class.text-muted]=\"isFollowUpExists(followup.reason_for_follow_up)\">\r\n                    <li>{{ followup.reason_for_follow_up }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n     <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No follow-up are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.med-card{background:#fff;padding:12px 16px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.med-details{font-family:DM Sans;font-weight:400;font-size:14px;margin-bottom:0;padding-left:35px}.selected-med{background-color:#0fd197;color:#fff}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxFollowupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-aillmtx-followup', template: "<ng-container *ngIf=\"!followUpList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3 mb-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Follow-up\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                    <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                </div> \r\n                    <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                        {{'Try again'|translate}}\r\n                    </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"followUpList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested follow-up\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"followUpList.length\">\r\n            <div *ngFor=\"let followup of followUpList\" class=\"med-card\">\r\n                <div>\r\n                    <label class=\"checkbox-label\">\r\n                        <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': followup.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"followup.selected\"\r\n                            [checked]=\"isFollowUpSelected(followup)\"\r\n                            [disabled]=\"isFollowUpExists(followup.reason_for_follow_up)\"\r\n                            (change)=\"onAIFollowUpChange(followup)\">\r\n                        <span class=\"med-name\" [class.text-muted]=\"isFollowUpExists(followup.reason_for_follow_up)\">{{\r\n                            followup.follow_up_duration }}</span>\r\n                    </label>\r\n                </div>\r\n                <ul class=\"med-details\" [class.text-muted]=\"isFollowUpExists(followup.reason_for_follow_up)\">\r\n                    <li>{{ followup.reason_for_follow_up }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n     <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No follow-up are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.med-card{background:#fff;padding:12px 16px;border-radius:12px;box-shadow:0 0 4px #00000014;border:1px solid rgba(178,175,190,.2)}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;gap:8px}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.med-details{font-family:DM Sans;font-weight:400;font-size:14px;margin-bottom:0;padding-left:35px}.selected-med{background-color:#0fd197;color:#fff}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: AiTxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingFollowUp: [{
                type: Input
            }], followUpSelected: [{
                type: Output
            }], diagnosisName: [{
                type: Input
            }], notesss: [{
                type: Input
            }] } });

class AillmtxReferralComponent {
    TxService;
    patientInfo;
    visit;
    existingReferral = [];
    referralSelected = new EventEmitter();
    diagnosisName;
    notesss;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
    referralList = [];
    furtherQuestionsList = [];
    selectedReferral = [];
    loggedError;
    constructor(TxService) {
        this.TxService = TxService;
    }
    ngOnInit() { }
    getAIReferral(diagnosis) {
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        this.isLoading = true;
        this.referralList = [];
        this.furtherQuestionsList = [];
        this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
            next: (data) => {
                if (data?.result?.referral?.length > 0) {
                    console.log("data?.result?.referral?.length", data?.result?.referral);
                    this.noData = false;
                    this.referralList = data.result.referral.map((v) => {
                        return {
                            ...v,
                        };
                    });
                }
                else {
                    this.noData = true;
                }
            },
            error: (err) => {
                console.error('Error in getAIReferral:', err);
                this.hasError = true;
                this.isLoading = false;
                this.noData = true;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
    getAIReferralWithRetry(diagnosis) {
        const MAX_RETRIES = 1;
        let retryCount = 0;
        const payload = this.TxService.getTxPayload(this.patientInfo, this.visit);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.referralList = [];
            this.furtherQuestionsList = [];
            this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
                next: (data) => {
                    if (data.result.data.success && data?.result?.data.referral?.length > 0 && data?.result?.data.referral[0]?.referral_to) {
                        this.noData = false;
                        this.referralList = data.result.data.referral.map((v) => {
                            return {
                                ...v,
                            };
                        });
                    }
                    else if (!data.data.success) {
                        this.hasError = true;
                        this.loggedError = data.data?.error;
                    }
                    else {
                        this.noData = true;
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAITX`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        console.error('Failed to get AI referral after 3 attempts:', err);
                        this.hasError = true;
                        this.isLoading = false;
                        this.loggedError = err;
                    }
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        };
        attemptDiagnosis();
    }
    onTryAgain() {
        console.log(this.diagnosisName, "Retrying AI getAIReferralWithRetry");
        this.getAIReferralWithRetry(this.diagnosisName);
    }
    onAIReferralChange(event) {
        if (!event) {
            this.selectedReferral = [];
        }
        else if (Array.isArray(event)) {
            this.selectedReferral = [...event];
        }
        else {
            const index = this.selectedReferral.findIndex(r => r.referral_to === event.referral_to);
            if (index > -1) {
                this.selectedReferral = this.selectedReferral.filter(r => r.referral_to !== event.referral_to);
            }
            else {
                const referralData = {
                    referral_facility: event.referral_facility,
                    referral_required: event.referral_required,
                    referral_to: event.referral_to,
                    remark: event.remark
                };
                this.selectedReferral = [...this.selectedReferral, referralData];
            }
        }
        this.referralSelected.emit(this.selectedReferral);
    }
    isReferralExists(referral) {
        return this.existingReferral.some(d => d.speciality === referral);
    }
    isReferralSelected(referral) {
        return this.selectedReferral.some(r => r.referral_to === referral.referral_to) || this.existingReferral.some(d => d.speciality === referral.referral_to);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxReferralComponent, deps: [{ token: AiTxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmtxReferralComponent, selector: "lib-aillmtx-referral", inputs: { patientInfo: "patientInfo", visit: "visit", existingReferral: "existingReferral", diagnosisName: "diagnosisName", notesss: "notesss" }, outputs: { referralSelected: "referralSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!referralList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Referral\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                   <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"referralList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested referrals\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"referralList.length\">\r\n            <div *ngFor=\"let refer of referralList\" class=\"med-card\">\r\n                <div class=\"checkbox-label\">\r\n                         <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': refer.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"refer.selected\"\r\n                            [checked]=\"isReferralSelected(refer)\" [disabled]=\"isReferralExists(refer.referral_to)\"\r\n                            (change)=\"onAIReferralChange(refer)\">\r\n                        <span class=\"med-name\" [class.text-muted]=\"isReferralExists(refer.referral_to)\">\r\n                            {{ refer.referral_to }}, {{ refer.referral_facility }}, {{ refer.remark }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No referrals are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n  \r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:flex;flex-wrap:wrap;gap:16px}.med-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;align-items:center;gap:12px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.selected-med{background-color:#0fd197;color:#fff}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]" }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmtxReferralComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-aillmtx-referral', template: "<ng-container *ngIf=\"!referralList.length && (hasError || !noData)\">\r\n    <div class=\"d-flex justify-content-center mt-3\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n\r\n            <div *ngIf=\"!hasError && !isLoading\" class=\"no-data-container text-center\">\r\n                <div class=\"conclusion-header d-flex flex-column align-items-center\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill text-danger mb-2\" style=\"font-size: 2rem;\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon\" />\r\n                    <h3 class=\"text-danger\">No diagnosis Provided</h3>\r\n                    <p class=\"text-muted\">Please add the required diagnosis details to fetch AI-assisted Referral\r\n                        suggestions.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"!isLoading && hasError\">\r\n                <div *ngIf=\"!isLoading && hasError\" class=\"text-danger txt-position\">\r\n                   <span><img class=\"mb-1\" src=\"assets/svgs/alert-triangle.svg\" alt=\"\" /> </span>\r\n                    <span *ngIf=\"!loggedError\" class=\"ml-2\">No suggestions at this moment</span>\r\n                    <span *ngIf=\"loggedError\" class=\"ml-2\">{{ loggedError }}</span>\r\n                    <!-- <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span> -->\r\n                    <!-- <span *ngIf=\"noData\" class=\"ms-2\">No suggestions at this moment</span> -->\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-5\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"referralList.length || (!isLoading && (hasError && noData))\" class=\"mt-2\">\r\n    <div class=\"mt-3 mb-3 ayu-suggestion-container p-3 border border-gray-300 bg-green-50\">\r\n        <div class=\"mb-2 flex items-center ayu-header\">\r\n            <img class=\"mr-2\" src=\"assets/svgs/ayu-ddx.svg\" alt=\"\" /> Ayu suggested referrals\r\n        </div>\r\n        <div class=\"warning\">\r\n            <img class=\"mb-1 mr-2\" src=\"assets/svgs/info-ddx.svg\" alt=\"\" />\r\n            This AI-generated suggestion is intended to support\u2014not replace\u2014your clinical judgement and may not account\r\n            for all relevant factors; please use your own judgement before acting.\r\n        </div>\r\n        <div *ngIf=\"referralList.length\">\r\n            <div *ngFor=\"let refer of referralList\" class=\"med-card\">\r\n                <div class=\"checkbox-label\">\r\n                         <input type=\"checkbox\" [ngClass]=\"{ 'selected-med': refer.selected }\"\r\n                            class=\"custom-checkbox me-2\" [(ngModel)]=\"refer.selected\"\r\n                            [checked]=\"isReferralSelected(refer)\" [disabled]=\"isReferralExists(refer.referral_to)\"\r\n                            (change)=\"onAIReferralChange(refer)\">\r\n                        <span class=\"med-name\" [class.text-muted]=\"isReferralExists(refer.referral_to)\">\r\n                            {{ refer.referral_to }}, {{ refer.referral_facility }}, {{ refer.remark }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"textalign\" *ngIf=\"!isLoading && !hasError && noData\">\r\n        <span>No referrals are recommended based on the information provided.</span>\r\n    </div>\r\n    </div>\r\n  \r\n</ng-container>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;background-color:var(--color-darkBlue);color:#fff}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:16px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}.alert{background:#fff;border:1px solid rgba(178,175,190,.2);border-radius:8px;margin-bottom:0}.alert-icon{position:relative;bottom:2px;right:6px}.text-reminder{color:#dc3545!important;font-size:15px;font-weight:700}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{border-radius:4px;font-size:14px;line-height:20px;color:#6c757d}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}.txt-position{position:relative;top:24px}.conclusion-header{position:relative;bottom:16px}.ayu-suggestion-container{background-color:#f9fffc;border:1px solid #B5F2DF!important;border-radius:12px}.ayu-suggestion-container .ayu-header{font-size:16px;color:#1b163a;font-weight:700}.ayu-suggestion-container .warning{background-color:#fff7f3;border:.8px solid rgba(255,71,93,.0784313725);padding:10px;border-radius:8px;font-size:12px;margin-bottom:14px}.med-grid{display:flex;flex-wrap:wrap;gap:16px}.med-card{flex:1 1 30%;min-height:100%;display:flex;align-items:center;border:1px solid rgba(178,175,190,.2);border-radius:12px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000000d}.med-header{display:flex;justify-content:space-between}.checkbox-label{display:flex;align-items:center;gap:12px;font-size:14px;line-height:1.5;color:#1b163a;text-align:left}.med-name{font-family:DM Sans;font-weight:500;font-size:14px;line-height:150%;letter-spacing:0%;word-break:break-word;width:100%;color:#1b163a}.selected-med{background-color:#0fd197;color:#fff}.textalign{text-align:center;color:#7f7b92;margin-top:15px}@media (max-width: 768px){.erorr-container{height:180px;background-color:#faf7fc;border-radius:10px;width:100%}}\n"] }]
        }], ctorParameters: function () { return [{ type: AiTxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingReferral: [{
                type: Input
            }], referralSelected: [{
                type: Output
            }], diagnosisName: [{
                type: Input
            }], notesss: [{
                type: Input
            }] } });

class AiddxLibraryModule {
    static forRoot(config) {
        return {
            ngModule: AiddxLibraryModule,
            providers: [
                { provide: ENVIRONMENT, useValue: config.environment },
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, declarations: [AillmddxComponent,
            AillmtxMedicationComponent,
            AillmtxAdviceComponent,
            AillmtxTestComponent,
            AillmtxFollowupComponent,
            AillmtxReferralComponent], imports: [CommonModule,
            TranslateModule,
            MatMenuModule,
            MatExpansionModule,
            NgbTooltipModule], exports: [AillmddxComponent,
            AillmtxMedicationComponent,
            AillmtxAdviceComponent,
            AillmtxTestComponent,
            AillmtxFollowupComponent,
            AillmtxReferralComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, providers: [
            { provide: ENVIRONMENT, useValue: {} },
            AiddxService,
            AiTxService
        ], imports: [CommonModule,
            TranslateModule,
            MatMenuModule,
            MatExpansionModule,
            NgbTooltipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AillmddxComponent,
                        AillmtxMedicationComponent,
                        AillmtxAdviceComponent,
                        AillmtxTestComponent,
                        AillmtxFollowupComponent,
                        AillmtxReferralComponent,
                    ],
                    imports: [
                        CommonModule,
                        TranslateModule,
                        MatMenuModule,
                        MatExpansionModule,
                        NgbTooltipModule
                    ],
                    exports: [
                        AillmddxComponent,
                        AillmtxMedicationComponent,
                        AillmtxAdviceComponent,
                        AillmtxTestComponent,
                        AillmtxFollowupComponent,
                        AillmtxReferralComponent
                    ],
                    providers: [
                        { provide: ENVIRONMENT, useValue: {} },
                        AiddxService,
                        AiTxService
                    ]
                }]
        }] });

/*
 * Public API Surface of aiddx-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AiTxService, AiddxLibraryModule, AiddxService, AillmddxComponent, AillmtxAdviceComponent, AillmtxFollowupComponent, AillmtxMedicationComponent, AillmtxReferralComponent, AillmtxTestComponent, CONFIG_SERVICE, DIAGNOSIS_SERVICE, ENVIRONMENT, dummyPayload, response };
//# sourceMappingURL=aiddx-library.mjs.map
