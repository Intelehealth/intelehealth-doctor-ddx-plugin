import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AiddxService } from '../../services/aiddx.service';
// import { dummyPayload, response } from '../token';

@Component({
  selector: 'app-aillmddx',
  templateUrl: './aillmddx.component.html',
  styleUrls: ['./aillmddx.component.scss']
})
export class AillmddxComponent {
  @Input() patientInfo: any;
  @Input() visit: any;
  @Input() existingDiagnosis: any[] = [];
  @Output() diagnosisSelected = new EventEmitter<string[]>();
  isLoading = false;
  hasError = false;
  noData = false;
  insufficientData = false;
  conclusion: string = '';
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
  diagnosisList: any = []
  selectedDiagnosis: string[] = [];

  constructor(
    private ddxSvc: AiddxService,
  ) { }

  ngOnInit() {
    this.getAIDiagnosis();
  }

  getAIDiagnosis() {
    const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit);
    this.isLoading = true;
    this.ddxSvc.getAIDiagnosis(payload).subscribe({
      next: (data: any) => {
        if(data?.conclusion) this.conclusion = data?.conclusion;
        if (data.result.length > 0) {
          this.noData = false;
          this.diagnosisList = data.result.map(v => ({ ...v, diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, '') }));
        } else {
          this.noData = true;
        }
      },
      error: (err: any) => {
        this.hasError = true;
        this.isLoading = false;
        console.log('err: ', err);
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


  onTryAgain() {
    this.getAIDiagnosis();
  }


  onAIDiagnosisChange(event: any) {
    if (!event) {
      this.selectedDiagnosis = [];
    } else if (Array.isArray(event)) {
      this.selectedDiagnosis = [...event];
    } else {
      const index = this.selectedDiagnosis.indexOf(event);
      if (index > -1) {
        this.selectedDiagnosis = this.selectedDiagnosis.filter(d => d !== event);
      } else {
        this.selectedDiagnosis = [...this.selectedDiagnosis, event];
      }
    }
    this.diagnosisSelected.emit([...this.selectedDiagnosis]);
  }

  isDiagnosisExists(diagnosis: string): boolean {
    return this.existingDiagnosis.some(d => d.diagnosisName === diagnosis);
  }
}
