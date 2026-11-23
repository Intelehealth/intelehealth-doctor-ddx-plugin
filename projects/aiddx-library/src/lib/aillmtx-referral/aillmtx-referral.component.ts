import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AiTxService } from '../../services/aitx.service';
import { normalizeReferral, referralKey, referralMatchesExisting } from '../ttx-suggestions';

@Component({
  selector: 'lib-aillmtx-referral',
  templateUrl: './aillmtx-referral.component.html',
  styleUrls: ['./aillmtx-referral.component.scss']
})
export class AillmtxReferralComponent {
  @Input() patientInfo: any;
  @Input() visit: any;
  @Input() useJsonVisitSummary?: boolean;
  public visitSummaryJson: any = null;
  @Input() existingReferral: any[] = [];
  @Output() referralSelected = new EventEmitter<string[]>();
  @Input() diagnosisName: string;
  @Input() notesss: string;
  isLoading = false;
  hasError = false;
  noData = false;
  insufficientData = false;
  conclusion: string = '';
  referralList: any = []
  furtherQuestionsList: any = []
  selectedReferral: any[] = [];
  loggedError: string;
  
  constructor(
    private TxService: AiTxService,
  ) { }

  ngOnInit() {}

  public getAIReferral(diagnosis?: string) {
    const payload = this.TxService.getTxPayload(this.patientInfo, this.visit, this.resolveVisitSummaryJson());
    this.isLoading = true;
    this.referralList = [];
    this.furtherQuestionsList = [];
    this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
      next: (data: any) => {
        if (data?.result?.referral?.length > 0) {
           console.log("data?.result?.referral?.length", data?.result?.referral)
          this.noData = false;
          this.referralList = data.result.referral.map((v: any) => {
            return {
              ...v,
            }
          });
        } else {
          this.noData = true;
        }
      },
      error: (err: any) => {
        console.error('Error in getAIReferral:', err);
        this.hasError = true;
        this.isLoading = false;
        this.noData = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  public resolveVisitSummaryJson(): any {
    this.visitSummaryJson = this.TxService.resolveVisitSummaryJson(this.visit, this.useJsonVisitSummary);
    return this.visitSummaryJson;
  }

  public getAIReferralWithRetry(diagnosis: any) {    
    const MAX_RETRIES = 1;
    let retryCount = 0;
    const payload = this.TxService.getTxPayload(this.patientInfo, this.visit, this.resolveVisitSummaryJson());

    const attemptDiagnosis = () => {
      this.isLoading = true;
      this.referralList = [];
      this.furtherQuestionsList = [];
      this.TxService.getAITTx(payload, diagnosis, this.visit.uuid).subscribe({
        next: (data: any) => {
          const res = data?.result?.data;
          const items = res?.success ? normalizeReferral(res.referral) : [];
          if (items.length > 0) {
            this.noData = false;
            this.referralList = items.map((v: any) => {
              return {
                ...v,
              }
            });
           } else if (!res || !res.success) {
              this.hasError = true;
              this.loggedError = res?.error;
          } else {
            this.noData = true;
          }
          this.isLoading = false;
        },
        error: (err: any) => {
          retryCount++;
          if (retryCount < MAX_RETRIES) {
            console.log(`Retry attempt ${retryCount} for getAITX`);
            setTimeout(() => {
              attemptDiagnosis();
            }, 1000);
          } else {
            console.error('Failed to get AI referral after 3 attempts:', err);
            this.hasError = true;
            this.isLoading = false;
            this.loggedError = err;
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    };

    attemptDiagnosis();
  }

  onTryAgain() {
    console.log(this.diagnosisName, "Retrying AI getAIReferralWithRetry");
    this.getAIReferralWithRetry(this.diagnosisName);
  }

  onAIReferralChange(event: any) {
    if (!event) {
      this.selectedReferral = [];
    } else if (Array.isArray(event)) {
      this.selectedReferral = [...event];
    } else {
      const index = this.selectedReferral.findIndex(r => referralKey(r) === referralKey(event));
      if (index > -1) {
        this.selectedReferral = this.selectedReferral.filter(r => referralKey(r) !== referralKey(event));
      } else {
        const referralData = {
          referral_facility: event.referral_facility,
          referral_required: event.referral_required,
          referral_to: event.referral_to,
          remark: event.remark
        };
        this.selectedReferral = [...this.selectedReferral, referralData];
      }
    }
    this.referralSelected.emit(this.selectedReferral);
  }

  referralLabel(referral: any): string {
    return [referral?.referral_to, referral?.referral_facility, referral?.remark].filter(p => !!p).join(', ');
  }

  isReferralExists(referral: any): boolean {
    return this.existingReferral.some(d => referralMatchesExisting(referral, d));
  }

  isReferralSelected(referral): boolean {
    return this.selectedReferral.some(r => referralKey(r) === referralKey(referral)) || this.isReferralExists(referral);
  }
}
