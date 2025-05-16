import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import markdownit from 'markdown-it';
import * as i1 from '@angular/common/http';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

const DIAGNOSIS_SERVICE = new InjectionToken('DIAGNOSIS_SERVICE');
const CONFIG_SERVICE = new InjectionToken('CONFIG_SERVICE');
const ENVIRONMENT = new InjectionToken('ENVIRONMENT');
const dummyPayload = "Gender: Male\n\n\u00a0 Age: 21 years\n\n\u00a0 Chief_complaint: ► **Skin disorder** :\n\u00a0• Type of the skin lesion - Skin rash.\n\u00a0• Site - Face.\n\u00a0• No. of lesions - Multiple lesions.\n\u00a0• Duration - 1 महिने.\n\u00a0• Progression - Transient.\n\u00a0• Exposure to irritants/offending agents - No.\n\u00a0• Prior treatment sought - None.\n\u00a0► **Associated symptoms** :\n\u00a0• Patient reports -\n\u00a0Skin discharge - Clear.\n\u00a0• Patient denies -\n\u00a0Painful skin lesion, Skin bruises, Nose bleed, Gum bleeding, Abdominal pain,\n\u00a0Fever, Itchy skin, Runny nose, Joint pain, Dandruff, Sensitive to the sun\n\n\u00a0 Physical_examination: **General exams:**\n\u00a0• Eyes: Jaundice-no jaundice seen, [picture taken].\n\u00a0• Eyes: Pallor-normal pallor, [picture taken].\n\u00a0• Arm-Pinch skin* - pinch test normal.\n\u00a0• Nail abnormality-nails normal, [picture taken].\n\u00a0• Nail anemia-Nails are not pale, [picture taken].\n\u00a0• Ankle-no pedal oedema.\n\u00a0**Any Location:**\n\u00a0• Skin Rash:-rash seen, 5. surface is smooth. rash not present on palms and\n\u00a0soles. no eschar. , [picture taken].\n\n\u00a0 Patient_medical_history: • Allergies - No known allergies.\n\u00a0• Alcohol use - No.\n\u00a0• Smoking history - Patient denied/has no h/o smoking.\n\u00a0• Drug history - No recent medication.\n\n\u00a0 Family_history: -\n\n\u00a0 Vitals:-\n\n\u00a0Sbp: 102.0\n\n\u00a0 Dbp: 83.0\n\n\u00a0 Pulse: 86.0\n\n\u00a0 Temperature: 37.0 'C\n\n\u00a0 Weight: 46.0 Kg\n\n\u00a0 Height: 156.0 cm\n\n\u00a0 RR: 21.0\n\n\u00a0 SPO2: 99.0\n\n\u00a0 HB: Null\n\n\u00a0 Sugar_random: Null\n\n\u00a0 Blood_group: Null\n\n\u00a0 Sugar_pp: Null\n\n\u00a0 Sugar_after_meal: Null";
const response = {
    "conclusion": "Based on the patient's age, the location and description of the rash, and the absence of other symptoms, acne vulgaris is the most likely diagnosis. Rosacea and seborrheic dermatitis are also possible, but less likely. Contact dermatitis and tinea facialis are less likely due to the lack of specific features. Further evaluation, such as a skin examination and potentially a skin scraping, may be necessary to confirm the diagnosis and determine the appropriate treatment.",
    "result": [
        {
            "diagnosis": "Acne Vulgaris (High)",
            "likelihood": "High",
            "rationale": "*Clinical Relevance and Features:The patient is a 21 year old male presenting with a skin rash on the face for one month. The description of multiple lesions and clear discharge is consistent with acne. The absence of pain, itching, or other systemic symptoms further supports this diagnosis. *Relevance to Rural India:Acne is a common skin condition worldwide, affecting adolescents and young adults. While not directly related to the rural Indian context, access to dermatological care and specific treatments might be limited, leading to delayed or inappropriate management. *Clinical Relevance:Acne vulgaris is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It is most common in adolescents and young adults, and it can cause pimples, blackheads, and whiteheads."
        },
        {
            "diagnosis": "Rosacea (Moderate)",
            "likelihood": "Moderate",
            "rationale": "*Clinical Relevance and Features:Rosacea can present with facial redness, small visible blood vessels, and sometimes papules and pustules. The patient's age and the location of the rash on the face are consistent with rosacea. The absence of itching argues against other common skin conditions. *Relevance to Rural India:Rosacea is less common than acne but can occur in individuals with fair skin. Environmental factors like sun exposure, which is common in rural India, can exacerbate rosacea. *Clinical Relevance:Rosacea is a chronic skin condition that causes redness, small bumps, and visible blood vessels on the face. It is more common in women than men, and it typically affects people between the ages of 30 and 50."
        },
        {
            "diagnosis": "Seborrheic Dermatitis (Moderate)",
            "likelihood": "Moderate",
            "rationale": "*Clinical Relevance and Features:Seborrheic dermatitis can cause a rash on the face, particularly in areas with sebaceous glands. While the patient denies dandruff, seborrheic dermatitis can sometimes present without significant scalp involvement. *Relevance to Rural India:Seborrheic dermatitis is a common skin condition that can be exacerbated by factors like stress and poor hygiene. *Clinical Relevance:Seborrheic dermatitis is a common skin condition that causes scaly, flaky, itchy skin. It is most common on the scalp, face, and chest."
        },
        {
            "diagnosis": "Contact Dermatitis (Low)",
            "likelihood": "Low",
            "rationale": "*Lack of Fit Reasoning:Although the patient denies exposure to irritants, it's possible they are unaware of a specific trigger. However, the transient nature of the rash and the absence of itching make contact dermatitis less likely. *Clinical Relevance:Contact dermatitis is a skin condition that occurs when the skin comes into contact with an irritant or allergen. The symptoms of contact dermatitis include redness, itching, and blistering."
        },
        {
            "diagnosis": "Tinea Facialis (Low)",
            "likelihood": "Low",
            "rationale": "*Lack of Fit Reasoning:Tinea facialis (ringworm of the face) is a fungal infection that typically presents with a more circular, scaly rash. The description of the rash as \"smooth\" and the absence of itching make this diagnosis less likely. *Clinical Relevance:Tinea facialis is a fungal infection of the face that causes a red, scaly rash. It is more common in people who live in warm, humid climates."
        }
    ]
};

class AiddxService {
    http;
    env;
    constructor(http, env) {
        this.http = http;
        this.env = env;
        if (!this.env) {
            console.warn("ENVIRONMENT is not provided!");
        }
    }
    getAIDiagnosis(casehistory) {
        return this.http.post(`${this.env.base}/ddx`, { casehistory });
    }
    getDDxPayload(patientInfo, visit, notes) {
        const data = this.getDataToExtract(patientInfo, visit);
        const get = (key, fallback = "Null") => data[key] || fallback;
        const adultinitial = get("vst.encounters")?.ADULTINITIAL || [];
        const complaint = adultinitial.find((a) => a?.concept?.display?.includes?.("COMPLAINT"));
        const phyExam = adultinitial.find((a) => a?.concept?.display?.includes?.("PHYSICAL EXAMINATION"));
        const famHist = adultinitial.find((a) => a?.concept?.display?.includes?.("FAMILY HISTORY"));
        const medHist = adultinitial.find((a) => a?.concept?.display?.includes?.("MEDICAL HISTORY"));
        const vitals = get("vst.encounters")?.Vitals || [];
        const vitalPayload = `\nVitals: \n${vitals
            .map((v) => `${v?.concept?.display}: ${v?.value}`)
            .join("\n")}`;
        const payload = `Gender: ${get("pi.person.gender", "Not specified")}
Age: ${get("pi.person.age", "Not specified")}

Chief_complaint: ${this.formatText(complaint?.value || "")}

Physical_examination: ${this.formatText(phyExam?.value || "")}

Family_history: ${this.formatText(famHist?.value || "")}

Medical_history: ${this.formatText(medHist?.value || "")}

${vitals?.length ? vitalPayload : ""}

${notes ? `Notes: ${notes}` : ""}`;
        return payload;
    }
    getDataToExtract(patientInfo, visit) {
        const data = {
            ...this.flatten(patientInfo, "pi"),
            ...this.flatten(visit, "vst"),
        };
        return data;
    }
    flatten(obj = {}, parentKey = "") {
        let flatData = {};
        for (const [key, value] of Object.entries(obj)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (Array.isArray(value)) {
                if (key === "encounters") {
                    let attr = {};
                    value.forEach((item, index) => {
                        attr[item?.encounterType?.display] = item?.obs;
                    });
                    flatData[newKey] = attr;
                }
            }
            else if (typeof value === "object" && value !== null) {
                const nestedFlat = this.flatten(value, newKey);
                flatData = { ...flatData, ...nestedFlat };
            }
            else {
                flatData[newKey] = value;
            }
        }
        return flatData;
    }
    formatText(text) {
        if (!text)
            return "";
        return text
            .replace(/<br\/>/g, "\n")
            .replace(/<b>/g, "**")
            .replace(/<\/b>/g, "**")
            .replace(/►/g, "")
            .trim();
    }
    markdownit(txt) {
        const md = markdownit();
        let formattedText = txt.map(obj => {
            return Object.entries(obj).map(([key, value]) => `**${key}**: ${value}`).join("\n");
        }).join("\n\n");
        return md.renderInline(formattedText);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, deps: [{ token: i1.HttpClient }, { token: ENVIRONMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ENVIRONMENT]
                }] }]; } });

// import { dummyPayload, response } from '../token';
class AillmddxComponent {
    ddxSvc;
    patientInfo;
    visit;
    existingDiagnosis = [];
    diagnosisSelected = new EventEmitter();
    notes;
    isLoading = false;
    hasError = false;
    noData = false;
    insufficientData = false;
    conclusion = '';
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
    diagnosisList = [];
    furtherQuestionsList = [];
    selectedDiagnosis = [];
    constructor(ddxSvc) {
        this.ddxSvc = ddxSvc;
    }
    ngOnInit() { }
    getAIDiagnosis(notes) {
        const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit, notes);
        this.isLoading = true;
        this.diagnosisList = [];
        this.furtherQuestionsList = [];
        this.ddxSvc.getAIDiagnosis(payload).subscribe({
            next: (data) => {
                if (data?.conclusion)
                    this.conclusion = data?.conclusion;
                if (data.result.data.result.length > 0) {
                    this.noData = false;
                    this.diagnosisList = data.result.data.result.map(v => {
                        return {
                            ...v,
                            diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, ''),
                            rationale: this.ddxSvc.markdownit(v?.rationale)
                        };
                    });
                }
                else {
                    this.noData = true;
                }
                if (data.result.data.further_questions.length > 0) {
                    this.furtherQuestionsList = data.result.data.further_questions.map(q => {
                        const key = Object.keys(q)[0];
                        return q[key];
                    });
                }
            },
            error: (err) => {
                this.hasError = true;
                this.isLoading = false;
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
    getAIDiagnosisWithRetry(notes) {
        const MAX_RETRIES = 3;
        let retryCount = 0;
        const payload = this.ddxSvc.getDDxPayload(this.patientInfo, this.visit, notes);
        const attemptDiagnosis = () => {
            this.isLoading = true;
            this.diagnosisList = [];
            this.furtherQuestionsList = [];
            this.ddxSvc.getAIDiagnosis(payload).subscribe({
                next: (data) => {
                    if (data?.conclusion)
                        this.conclusion = data?.conclusion;
                    if (data.result.data.result.length > 0) {
                        this.noData = false;
                        this.diagnosisList = data.result.data.result.map(v => {
                            return {
                                ...v,
                                diagnosis: v?.diagnosis?.replace(/\s*\(.*?\)\s*/g, ''),
                                rationale: this.ddxSvc.markdownit(v?.rationale)
                            };
                        });
                    }
                    else {
                        this.noData = true;
                    }
                    if (data.result.data.further_questions.length > 0) {
                        this.furtherQuestionsList = data.result.data.further_questions.map(q => {
                            const key = Object.keys(q)[0];
                            return q[key];
                        });
                    }
                    this.isLoading = false;
                },
                error: (err) => {
                    retryCount++;
                    if (retryCount < MAX_RETRIES) {
                        console.log(`Retry attempt ${retryCount} for getAIDiagnosis`);
                        setTimeout(() => {
                            attemptDiagnosis();
                        }, 1000);
                    }
                    else {
                        this.hasError = true;
                        this.isLoading = false;
                        console.error('Failed to get AI diagnosis after 3 attempts:', err);
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
        this.getAIDiagnosis(this.notes);
    }
    onAIDiagnosisChange(event) {
        if (!event) {
            this.selectedDiagnosis = [];
        }
        else if (Array.isArray(event)) {
            this.selectedDiagnosis = [...event];
        }
        else {
            const index = this.selectedDiagnosis.indexOf(event);
            if (index > -1) {
                this.selectedDiagnosis = this.selectedDiagnosis.filter(d => d !== event);
            }
            else {
                this.selectedDiagnosis = [...this.selectedDiagnosis, event];
            }
        }
        this.diagnosisSelected.emit([...this.selectedDiagnosis]);
    }
    isDiagnosisExists(diagnosis) {
        return this.existingDiagnosis.some(d => d.diagnosisName === diagnosis);
    }
    isDiagnosisSelected(diagnosis) {
        return this.selectedDiagnosis.includes(diagnosis) || this.existingDiagnosis.some(d => d?.diagnosisName === diagnosis);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmddxComponent, deps: [{ token: AiddxService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: AillmddxComponent, selector: "app-aillmddx", inputs: { patientInfo: "patientInfo", visit: "visit", existingDiagnosis: "existingDiagnosis", notes: "notes" }, outputs: { diagnosisSelected: "diagnosisSelected" }, ngImport: i0, template: "<ng-container *ngIf=\"!diagnosisList.length\">\r\n    <div class=\"d-flex justify-content-center mt-2\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n            <ng-container *ngIf=\"!isLoading && (hasError || noData)\">\r\n                <div class=\"text-danger\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon mr-2\" />\r\n                    <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span>\r\n                    <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span>\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-3\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"diagnosisList.length\" class=\"mt-2\">\r\n    <p class=\"note-con ml-2\">\r\n        <span class=\"note-label\">Note:</span>\r\n        This information is AI generated. Please rely on your medical judgement while referring to it.\r\n    </p>\r\n    <div class=\"intel-accordion-title\">\r\n        <h6 class=\"mt-1 ml-2 diffrential-diagnosis\">Differential Diagnosis</h6>\r\n    </div>\r\n    <div class=\"intel-accordion-title\">\r\n        <p class=\"text-muted mb-3 diagnosis-list ml-2\">\r\n            Select the diagnosis based on your medical judgement.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"diagnosis-container p-3\">\r\n        <div *ngFor=\"let diagnosis of diagnosisList\" \r\n             class=\"d-flex align-items-center mb-2\"\r\n             [class.disabled-diagnosis]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n            <input type=\"checkbox\" class=\"custom-checkbox me-2\"\r\n                [checked]=\"isDiagnosisSelected(diagnosis.diagnosis)\"\r\n                [disabled]=\"isDiagnosisExists(diagnosis.diagnosis)\"\r\n                (change)=\"onAIDiagnosisChange(diagnosis.diagnosis)\">\r\n            <label class=\"fw-bold\" [class.text-muted]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n                {{ diagnosis.diagnosis }}\r\n                <span class=\"text-muted ms-2\">(likely {{ diagnosis.likelihood }})</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"rationale-container\">\r\n        <h5 class=\"fw-bold rationale\">Rationale</h5>\r\n        <div *ngFor=\"let rationale of diagnosisList; let i = index\" class=\"rationale-item p-3 mb-2\">\r\n            <h3 class=\"fw-bold\">\r\n                {{ i + 1 }}. {{ rationale.diagnosis }}\r\n                <span class=\"text-muted small\">(likely {{ rationale.likelihood }})</span>\r\n            </h3>\r\n            <p class=\"rationale-description\" [innerHTML]=\"rationale.rationale\"></p>\r\n        </div>\r\n    </div>\r\n\r\n</ng-container>\r\n\r\n<div *ngIf=\"conclusion\" class=\"conclusion-card\">\r\n    <div class=\"conclusion-header\">\r\n        <h2>Conclusion</h2>\r\n    </div>\r\n    <div class=\"conclusion-body\">\r\n        <p>{{ conclusion }}</p>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:18px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{background:#f8f9fa;border-radius:4px;padding:12px 16px;margin:16px 0;font-size:14px;line-height:20px;color:#212529}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]" }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]" }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AillmddxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-aillmddx', template: "<ng-container *ngIf=\"!diagnosisList.length\">\r\n    <div class=\"d-flex justify-content-center mt-2\">\r\n        <div class=\"erorr-container alert text-center p-4 d-flex flex-column align-items-center\">\r\n            <ng-container *ngIf=\"!isLoading && (hasError || noData)\">\r\n                <div class=\"text-danger\">\r\n                    <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                    <img src=\"assets/images/login/interneticon.png\" alt=\"Warning\" class=\"warning-icon mr-2\" />\r\n                    <span *ngIf=\"hasError\" class=\"ms-2\">An unexpected issue occurred</span>\r\n                    <span *ngIf=\"noData\" class=\"ms-2\">The input provided does not have enough clinical details for an AI-assistant assessment.</span>\r\n                </div>\r\n                <button *ngIf=\"!noData\" type=\"button\" class=\"try-again-btn mt-3\" (click)=\"onTryAgain()\">\r\n                    {{'Try again'|translate}}\r\n                </button>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"isLoading\" class=\"stats-loading\">\r\n                <div class=\"eins\"></div>\r\n                <div class=\"zwei\"></div>\r\n                <div class=\"drei\"></div>\r\n            </button>\r\n\r\n            <div *ngIf=\"isLoading\" class=\"mt-3\">\r\n                <i class=\"bi bi-exclamation-triangle-fill\"></i>\r\n                <span class=\"ms-2 loading-text\">Please wait while the results are being generated.</span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"diagnosisList.length\" class=\"mt-2\">\r\n    <p class=\"note-con ml-2\">\r\n        <span class=\"note-label\">Note:</span>\r\n        This information is AI generated. Please rely on your medical judgement while referring to it.\r\n    </p>\r\n    <div class=\"intel-accordion-title\">\r\n        <h6 class=\"mt-1 ml-2 diffrential-diagnosis\">Differential Diagnosis</h6>\r\n    </div>\r\n    <div class=\"intel-accordion-title\">\r\n        <p class=\"text-muted mb-3 diagnosis-list ml-2\">\r\n            Select the diagnosis based on your medical judgement.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"diagnosis-container p-3\">\r\n        <div *ngFor=\"let diagnosis of diagnosisList\" \r\n             class=\"d-flex align-items-center mb-2\"\r\n             [class.disabled-diagnosis]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n            <input type=\"checkbox\" class=\"custom-checkbox me-2\"\r\n                [checked]=\"isDiagnosisSelected(diagnosis.diagnosis)\"\r\n                [disabled]=\"isDiagnosisExists(diagnosis.diagnosis)\"\r\n                (change)=\"onAIDiagnosisChange(diagnosis.diagnosis)\">\r\n            <label class=\"fw-bold\" [class.text-muted]=\"isDiagnosisExists(diagnosis.diagnosis)\">\r\n                {{ diagnosis.diagnosis }}\r\n                <span class=\"text-muted ms-2\">(likely {{ diagnosis.likelihood }})</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"rationale-container\">\r\n        <h5 class=\"fw-bold rationale\">Rationale</h5>\r\n        <div *ngFor=\"let rationale of diagnosisList; let i = index\" class=\"rationale-item p-3 mb-2\">\r\n            <h3 class=\"fw-bold\">\r\n                {{ i + 1 }}. {{ rationale.diagnosis }}\r\n                <span class=\"text-muted small\">(likely {{ rationale.likelihood }})</span>\r\n            </h3>\r\n            <p class=\"rationale-description\" [innerHTML]=\"rationale.rationale\"></p>\r\n        </div>\r\n    </div>\r\n\r\n</ng-container>\r\n\r\n<div *ngIf=\"conclusion\" class=\"conclusion-card\">\r\n    <div class=\"conclusion-header\">\r\n        <h2>Conclusion</h2>\r\n    </div>\r\n    <div class=\"conclusion-body\">\r\n        <p>{{ conclusion }}</p>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"furtherQuestionsList.length\" class=\"rationale-container\">\r\n    <h2 class=\"fw-bold\">Further questions</h2>\r\n    <div *ngFor=\"let question of furtherQuestionsList; let i = index\" class=\"fq-item\">\r\n        <li>{{ question }}</li>\r\n    </div>\r\n</div>", styles: ["@charset \"UTF-8\";.try-again-btn{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.diffrential-diagnosis{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.diagnosis-list{font-weight:400;font-size:14px;line-height:21px;letter-spacing:0%}.diagnosis-container{background-color:#faf7fc;border-radius:10px;padding:15px}.custom-checkbox{appearance:none;width:18px;height:18px;border:1px solid #B0ADBE;border-radius:4px;position:relative;cursor:pointer;background-color:transparent;margin-right:10px;margin-bottom:9px}.custom-checkbox:checked{background-color:#0fd197}.custom-checkbox:checked:after{content:\"\\2713\";font-size:14px;font-weight:700;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.rationale-container{background-color:#faf7fc;border-radius:10px;padding:15px}.rationale-container h2{font-size:16px;font-weight:700;line-height:24px;color:#101828}.rationale-container .fq-item{margin-left:20px}.rationale-item{border-bottom:1.5px solid rgba(178,175,190,.2)}.rationale{font-weight:700;font-size:16px;line-height:24px;letter-spacing:0%}.rationale-description{font-weight:400;font-size:16px;line-height:24px;letter-spacing:0%;margin-left:13px}.stats-loading{padding:6px 24px;background:var(--color-lightGray);border-radius:8px;border:none;outline:none;font-family:DM Sans;font-weight:700;font-size:14px;line-height:150%;color:var(--color-darkBlue)}.stats-loading div{background:#0060ff;display:inline-block;height:8px;width:8px;border-radius:100%;animation:bouncedelay 1.4s infinite ease-in-out;animation-fill-mode:both}.stats-loading div.eins{animation-delay:-.32s}.stats-loading div.zwei{animation-delay:-.16s}@keyframes bouncedelay{0%,80%,to{transform:scale(0);opacity:0}40%{transform:scale(1);opacity:100}}.loading-text{font-weight:400;font-size:12px;line-height:18px;color:#7f7b92}.conclusion-card{background:#fff;border-radius:10px;margin:20px 0;box-shadow:0 1px 3px #1018281a,0 1px 2px #1018280f}.conclusion-card .conclusion-header{padding:16px 24px;border-bottom:1px solid #EAECF0}.conclusion-card .conclusion-header h2{font-size:16px;font-weight:700;line-height:24px;margin:0;color:#101828}.conclusion-card .conclusion-body{padding:24px}.conclusion-card .conclusion-body p{margin:0;font-size:14px;line-height:20px;color:#344054;font-weight:400}.note-con{background:#f8f9fa;border-radius:4px;padding:12px 16px;margin:16px 0;font-size:14px;line-height:20px;color:#212529}.note-con .note-label{font-weight:600;margin-right:4px;color:#dc3545}.disabled-diagnosis{opacity:.7;cursor:not-allowed}.disabled-diagnosis .custom-checkbox{cursor:not-allowed}.disabled-diagnosis .text-muted{opacity:.7}.warning-icon{height:50px;width:50px}.erorr-container{height:150px;background-color:#faf7fc;border-radius:10px;width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: AiddxService }]; }, propDecorators: { patientInfo: [{
                type: Input
            }], visit: [{
                type: Input
            }], existingDiagnosis: [{
                type: Input
            }], diagnosisSelected: [{
                type: Output
            }], notes: [{
                type: Input
            }] } });

class AiddxLibraryModule {
    static forRoot(config) {
        return {
            ngModule: AiddxLibraryModule,
            providers: [
                { provide: ENVIRONMENT, useValue: config.environment },
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, declarations: [AillmddxComponent], imports: [CommonModule,
            TranslateModule], exports: [AillmddxComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, providers: [
            { provide: ENVIRONMENT, useValue: {} },
            AiddxService
        ], imports: [CommonModule,
            TranslateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AillmddxComponent
                    ],
                    imports: [
                        CommonModule,
                        TranslateModule
                    ],
                    exports: [
                        AillmddxComponent
                    ],
                    providers: [
                        { provide: ENVIRONMENT, useValue: {} },
                        AiddxService
                    ]
                }]
        }] });

/*
 * Public API Surface of aiddx-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AiddxLibraryModule, AiddxService, AillmddxComponent, CONFIG_SERVICE, DIAGNOSIS_SERVICE, ENVIRONMENT, dummyPayload, response };
//# sourceMappingURL=aiddx-library.mjs.map
