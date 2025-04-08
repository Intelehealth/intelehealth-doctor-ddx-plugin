import { InjectionToken } from '@angular/core';

export const DIAGNOSIS_SERVICE = new InjectionToken<any>('DIAGNOSIS_SERVICE');
export const CONFIG_SERVICE = new InjectionToken<any>('CONFIG_SERVICE');
export const ENVIRONMENT = new InjectionToken<any>('ENVIRONMENT');

export const dummyPayload = "Gender: Male\n\n\u00a0 Age: 21 years\n\n\u00a0 Chief_complaint: ► **Skin disorder** :\n\u00a0• Type of the skin lesion - Skin rash.\n\u00a0• Site - Face.\n\u00a0• No. of lesions - Multiple lesions.\n\u00a0• Duration - 1 महिने.\n\u00a0• Progression - Transient.\n\u00a0• Exposure to irritants/offending agents - No.\n\u00a0• Prior treatment sought - None.\n\u00a0► **Associated symptoms** :\n\u00a0• Patient reports -\n\u00a0Skin discharge - Clear.\n\u00a0• Patient denies -\n\u00a0Painful skin lesion, Skin bruises, Nose bleed, Gum bleeding, Abdominal pain,\n\u00a0Fever, Itchy skin, Runny nose, Joint pain, Dandruff, Sensitive to the sun\n\n\u00a0 Physical_examination: **General exams:**\n\u00a0• Eyes: Jaundice-no jaundice seen, [picture taken].\n\u00a0• Eyes: Pallor-normal pallor, [picture taken].\n\u00a0• Arm-Pinch skin* - pinch test normal.\n\u00a0• Nail abnormality-nails normal, [picture taken].\n\u00a0• Nail anemia-Nails are not pale, [picture taken].\n\u00a0• Ankle-no pedal oedema.\n\u00a0**Any Location:**\n\u00a0• Skin Rash:-rash seen, 5. surface is smooth. rash not present on palms and\n\u00a0soles. no eschar. , [picture taken].\n\n\u00a0 Patient_medical_history: • Allergies - No known allergies.\n\u00a0• Alcohol use - No.\n\u00a0• Smoking history - Patient denied/has no h/o smoking.\n\u00a0• Drug history - No recent medication.\n\n\u00a0 Family_history: -\n\n\u00a0 Vitals:-\n\n\u00a0Sbp: 102.0\n\n\u00a0 Dbp: 83.0\n\n\u00a0 Pulse: 86.0\n\n\u00a0 Temperature: 37.0 'C\n\n\u00a0 Weight: 46.0 Kg\n\n\u00a0 Height: 156.0 cm\n\n\u00a0 RR: 21.0\n\n\u00a0 SPO2: 99.0\n\n\u00a0 HB: Null\n\n\u00a0 Sugar_random: Null\n\n\u00a0 Blood_group: Null\n\n\u00a0 Sugar_pp: Null\n\n\u00a0 Sugar_after_meal: Null"


export const response = {
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
}

