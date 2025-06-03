import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class AiTxService {
    private http;
    private env?;
    constructor(http: HttpClient, env?: any);
    getAITTx(casehistory: any, diagnosis: any): import("rxjs").Observable<Object>;
    getTxPayload(patientInfo: any, visit: any): string;
    getDataToExtract(patientInfo: any, visit: any): {};
    flatten(obj?: {}, parentKey?: string): {};
    formatText(text: string): string;
    markdownit(txt: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiTxService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiTxService>;
}
