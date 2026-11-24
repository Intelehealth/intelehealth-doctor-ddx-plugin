import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AiTxService {
    private http;
    private env?;
    private configService?;
    private lastDiagnosis;
    private lastPrescriptionShared;
    private cachedResponse;
    constructor(http: HttpClient, env?: any, configService?: any);
    getAITTx(casehistory: any, diagnosis: any, visitUuid: string, prescriptionShared?: boolean): Observable<any>;
    getVisitSummaryJson(visit: any): any | null;
    isJsonVisitSummaryEnabled(override?: boolean): boolean;
    resolveVisitSummaryJson(visit: any, override?: boolean): any | null;
    getTxPayload(patientInfo: any, visit: any, visitSummaryJson?: any): any;
    getDataToExtract(patientInfo: any, visit: any): {};
    flatten(obj?: {}, parentKey?: string): {};
    formatAge(birthdate: any, age: any): string;
    formatText(text: string): string;
    markdownit(txt: any): any;
    clearCache(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiTxService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiTxService>;
}
