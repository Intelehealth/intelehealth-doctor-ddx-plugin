import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AiTxService } from '../../services/aitx.service';
import * as i0 from "@angular/core";
export declare class AillmtxMedicationComponent implements OnInit, OnChanges {
    private TxService;
    patientInfo: any;
    visit: any;
    existingMedication: any[];
    medicationSelected: EventEmitter<string[]>;
    diagnosisName: string;
    notesss: string;
    patientAllergies: string;
    patientCurrentMedications: string;
    allergyDataStatus: 'empty' | 'present';
    isLoading: boolean;
    hasError: boolean;
    noData: boolean;
    insufficientData: boolean;
    conclusion: string;
    medicationList: any;
    furtherQuestionsList: any;
    selectedMedicine: any[];
    loggedError: string;
    reminderMessages: string[];
    constructor(TxService: AiTxService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Update reminder messages based on allergy and medication data
     */
    updateReminderMessage(): void;
    getAIMedical(diagnosis?: string): void;
    getAIMedicalWithRetry(diagnosis: any): void;
    onTryAgain(): void;
    onAIMedicineChange(event: any): void;
    isMedicineExists(medicine: string): boolean;
    isMedicineSelected(medicine: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AillmtxMedicationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AillmtxMedicationComponent, "lib-aillmtx-medication", never, { "patientInfo": "patientInfo"; "visit": "visit"; "existingMedication": "existingMedication"; "diagnosisName": "diagnosisName"; "notesss": "notesss"; "patientAllergies": "patientAllergies"; "patientCurrentMedications": "patientCurrentMedications"; "allergyDataStatus": "allergyDataStatus"; }, { "medicationSelected": "medicationSelected"; }, never, never, false>;
}
