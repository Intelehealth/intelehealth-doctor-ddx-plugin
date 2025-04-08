import { Component, Input } from '@angular/core';
import { AiddxService } from '../../services/aiddx.service';
import { dummyPayload } from '../token';

@Component({
  selector: 'app-aillmddx',
  templateUrl: './aillmddx.component.html',
  styleUrls: ['./aillmddx.component.scss']
})
export class AillmddxComponent {
  @Input() patientInfo: any;
  @Input() visit: any;
  selectedDiagnosis: string[] = [];
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
  selectedDiagnoses: string[] = [];

  constructor(
    private ddxSvc: AiddxService,
  ) { }

  ngOnInit() {
    this.getAIDiagnosis();
  }

  getAIDiagnosis() {
    const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit);
    console.log(payload);
    this.isLoading = true;
    this.ddxSvc.getAIDiagnosis(dummyPayload).subscribe({
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


  onDiagnosisChange(event: any) {
    if (!event) {
      this.selectedDiagnoses = [];
    } else if (Array.isArray(event)) {
      this.selectedDiagnoses = [...event];
    } else {
      const index = this.selectedDiagnosis.indexOf(event);
      if (index > -1) {
        this.selectedDiagnoses.splice(index, 1);
      } else {
        this.selectedDiagnoses.push(event);
      }
    }
  }
}
