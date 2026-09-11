import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class AiddxService {
    private http;
    private env?;
    private configService?;
    constructor(http: HttpClient, env?: any, configService?: any);
    getAIDiagnosis(casehistory: any, visitUuid: string, prescriptionShared?: boolean): import("rxjs").Observable<Object>;
    getVisitSummaryJson(visit: any): any | null;
    isJsonVisitSummaryEnabled(override?: boolean): boolean;
    resolveVisitSummaryJson(visit: any, override?: boolean): any | null;
    getDDxPayload(patientInfo: any, visit: any, notes?: string, visitSummaryJson?: any): any;
    getDataToExtract(patientInfo: any, visit: any): {};
    flatten(obj?: {}, parentKey?: string): {};
    formatAge(birthdate: any, age: any): string;
    formatText(text: string): string;
    markdownit(txt: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiddxService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiddxService>;
}
