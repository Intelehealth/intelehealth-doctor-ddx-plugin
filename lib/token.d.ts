import { InjectionToken } from '@angular/core';
export declare const DIAGNOSIS_SERVICE: InjectionToken<any>;
export declare const CONFIG_SERVICE: InjectionToken<any>;
export declare const ENVIRONMENT: InjectionToken<any>;
export declare const dummyPayload = "Gender: Male\n\n\u00A0 Age: 21 years\n\n\u00A0 Chief_complaint: \u25BA **Skin disorder** :\n\u00A0\u2022 Type of the skin lesion - Skin rash.\n\u00A0\u2022 Site - Face.\n\u00A0\u2022 No. of lesions - Multiple lesions.\n\u00A0\u2022 Duration - 1 \u092E\u0939\u093F\u0928\u0947.\n\u00A0\u2022 Progression - Transient.\n\u00A0\u2022 Exposure to irritants/offending agents - No.\n\u00A0\u2022 Prior treatment sought - None.\n\u00A0\u25BA **Associated symptoms** :\n\u00A0\u2022 Patient reports -\n\u00A0Skin discharge - Clear.\n\u00A0\u2022 Patient denies -\n\u00A0Painful skin lesion, Skin bruises, Nose bleed, Gum bleeding, Abdominal pain,\n\u00A0Fever, Itchy skin, Runny nose, Joint pain, Dandruff, Sensitive to the sun\n\n\u00A0 Physical_examination: **General exams:**\n\u00A0\u2022 Eyes: Jaundice-no jaundice seen, [picture taken].\n\u00A0\u2022 Eyes: Pallor-normal pallor, [picture taken].\n\u00A0\u2022 Arm-Pinch skin* - pinch test normal.\n\u00A0\u2022 Nail abnormality-nails normal, [picture taken].\n\u00A0\u2022 Nail anemia-Nails are not pale, [picture taken].\n\u00A0\u2022 Ankle-no pedal oedema.\n\u00A0**Any Location:**\n\u00A0\u2022 Skin Rash:-rash seen, 5. surface is smooth. rash not present on palms and\n\u00A0soles. no eschar. , [picture taken].\n\n\u00A0 Patient_medical_history: \u2022 Allergies - No known allergies.\n\u00A0\u2022 Alcohol use - No.\n\u00A0\u2022 Smoking history - Patient denied/has no h/o smoking.\n\u00A0\u2022 Drug history - No recent medication.\n\n\u00A0 Family_history: -\n\n\u00A0 Vitals:-\n\n\u00A0Sbp: 102.0\n\n\u00A0 Dbp: 83.0\n\n\u00A0 Pulse: 86.0\n\n\u00A0 Temperature: 37.0 'C\n\n\u00A0 Weight: 46.0 Kg\n\n\u00A0 Height: 156.0 cm\n\n\u00A0 RR: 21.0\n\n\u00A0 SPO2: 99.0\n\n\u00A0 HB: Null\n\n\u00A0 Sugar_random: Null\n\n\u00A0 Blood_group: Null\n\n\u00A0 Sugar_pp: Null\n\n\u00A0 Sugar_after_meal: Null";
export declare const response: {
    conclusion: string;
    result: {
        diagnosis: string;
        likelihood: string;
        rationale: string;
    }[];
};
