import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AiddxLibraryModule, AiddxService, ENVIRONMENT } from 'aiddx-library';
import { isFeaturePresent } from 'src/app/utils/utility-functions';
import { environment } from 'src/environments/environment';
import { AppConfigService } from 'src/app/services/app-config.service';
import { EncounterModel } from 'src/app/model/model';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    NgSelectModule,
    TranslateModule,
    AiddxLibraryModule
  ],
  providers: [
    AiddxService,
    { provide: ENVIRONMENT, useValue: environment }
  ]
})
export class DiagnosisComponent implements OnInit {
  @Input() visit: any;
  @Input() patientInfo: any;
  @Input() isMCCUser: boolean = false;
  @Input() isVisitNoteProvider: boolean = false;
  @Input() visitEnded:  EncounterModel | string;

  diagnosisForm: FormGroup;
  diagnosisSecondaryForm: FormGroup;
  existingDiagnosis: any[] = [];
  addMoreDiagnosis: boolean = true;
  diagnosis$: Observable<any>;
  selectedDiagnoses: string[] = [];

  constructor(
    private fb: FormBuilder,
    public appConfigService: AppConfigService,
  ) {
    this.initializeForms();
  }

  ngOnInit() {
    // Initialize component
  }

  private initializeForms() {
    this.diagnosisForm = this.fb.group({
      diagnosisName: ['', Validators.required],
      diagnosisType: ['Primary', Validators.required],
      diagnosisStatus: ['Provisional', Validators.required]
    });

    this.diagnosisSecondaryForm = this.fb.group({
      diagnosis: [''],
      type: ['Provisional'],
      tnm: [''],
      otherStaging: ['']
    });
  }

  onKeyUp(event: any) {
    // Implement search logic
  }

  onDiagnosisChange(event: any) {
    if (!event) {
      this.selectedDiagnoses = [];
    } else {
      this.selectedDiagnoses.push(event);
    }
  }

  removeDiagnosis(diagnosis: string) {
    this.selectedDiagnoses = this.selectedDiagnoses.filter(d => d !== diagnosis);
  }

  toggleDiagnosis() {
    this.addMoreDiagnosis = !this.addMoreDiagnosis;
    if (!this.addMoreDiagnosis) {
      this.diagnosisForm.reset({
        diagnosisType: 'Primary',
        diagnosisStatus: 'Provisional'
      });
    }
  }

  saveDiagnosis() {
    // Implement save logic
  }

  deleteDiagnosis(index: number, uuid: string) {
    // Implement delete logic
  }

  autoGrowTextZone(event: any) {
    const element = event.target;
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
  }

  isFeatureAvailable(featureName: string): boolean {
    return isFeaturePresent(featureName);
  }
}
