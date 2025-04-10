import { EventEmitter } from '@angular/core';
import { AiddxService } from '../../services/aiddx.service';
import * as i0 from "@angular/core";
export declare class AillmddxComponent {
    private ddxSvc;
    patientInfo: any;
    visit: any;
    existingDiagnosis: any[];
    diagnosisSelected: EventEmitter<string[]>;
    isLoading: boolean;
    hasError: boolean;
    noData: boolean;
    insufficientData: boolean;
    conclusion: string;
    questions: {
        title: string;
        items: string[];
    }[];
    diagnosisList: any;
    selectedDiagnosis: string[];
    constructor(ddxSvc: AiddxService);
    ngOnInit(): void;
    getAIDiagnosis(): void;
    onTryAgain(): void;
    onAIDiagnosisChange(event: any): void;
    isDiagnosisExists(diagnosis: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AillmddxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AillmddxComponent, "app-aillmddx", never, { "patientInfo": "patientInfo"; "visit": "visit"; "existingDiagnosis": "existingDiagnosis"; }, { "diagnosisSelected": "diagnosisSelected"; }, never, never, false>;
}
