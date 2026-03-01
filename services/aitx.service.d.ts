import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AiTxService {
    private http;
    private env?;
    private lastDiagnosis;
    private lastPrescriptionShared;
    private cachedResponse;
    constructor(http: HttpClient, env?: any);
    getAITTx(casehistory: any, diagnosis: any, visitUuid: string, prescriptionShared?: boolean): Observable<any>;
    getTxPayload(patientInfo: any, visit: any): string;
    getDataToExtract(patientInfo: any, visit: any): {};
    flatten(obj?: {}, parentKey?: string): {};
    formatText(text: string): string;
    markdownit(txt: any): any;
    clearCache(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiTxService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiTxService>;
}
