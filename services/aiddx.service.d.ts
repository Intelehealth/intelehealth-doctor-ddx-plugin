import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class AiddxService {
    private http;
    private env?;
    constructor(http: HttpClient, env?: any);
    getAIDiagnosis(casehistory: any): import("rxjs").Observable<Object>;
    getDDxPayload(patientInfo: any, visit: any): string;
    getDataToExtract(patientInfo: any, visit: any): {};
    flatten(obj?: {}, parentKey?: string): {};
    formatText(text: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiddxService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiddxService>;
}
