import { EventEmitter } from '@angular/core';
import { AiddxService } from '../../services/aiddx.service';
import * as i0 from "@angular/core";
export declare class AillmddxComponent {
    private ddxSvc;
    patientInfo: any;
    visit: any;
    existingDiagnosis: any[];
    diagnosisSelected: EventEmitter<string[]>;
    notes: string;
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
    getAIDiagnosis(notes?: string): void;
    getAIDiagnosisWithRetry(notes?: string): void;
    onTryAgain(): void;
    onAIDiagnosisChange(event: any): void;
    isDiagnosisExists(diagnosis: string): boolean;
    isDiagnosisSelected(diagnosis: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AillmddxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AillmddxComponent, "app-aillmddx", never, { "patientInfo": "patientInfo"; "visit": "visit"; "existingDiagnosis": "existingDiagnosis"; "notes": "notes"; }, { "diagnosisSelected": "diagnosisSelected"; }, never, never, false>;
}
