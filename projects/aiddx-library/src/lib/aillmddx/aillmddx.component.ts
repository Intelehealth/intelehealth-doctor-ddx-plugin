import { Component } from '@angular/core';
import { DiagnosisService } from '../../../../../src/app/services/diagnosis.service';

@Component({
  selector: 'app-aillmddx',
  templateUrl: './aillmddx.component.html',
  styleUrls: ['./aillmddx.component.scss']
})


export class AillmddxComponent {
  selectedDiagnosis: string[] = [];
  constructor(private diagnosisService: DiagnosisService) { }
  isLoading = false;
  conclusion: string = `Acne vulgaris is the most likely diagnosis based on the patient's age, the location and characteristics of the rash, and the presence of clear discharge. However, further questioning about the specific appearance of the lesions (e.g., comedones, papules, pustules) and any associated itching or burning would help confirm the diagnosis. If the rash doesn't respond to standard acne treatment, allergic contact dermatitis should be reconsidered. Given the rural setting, access to specialized dermatological care might be limited, so initial management with readily available topical treatments for acne would be appropriate.`;
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
    {
      title: 'Relevant medical history',
      items: [
        'Have you had similar rashes before?',
        'Do you have any other skin conditions?'
      ]
    },
    {
      title: 'Specific risk factors for rural Indian context',
      items: [
        'Do you work in agriculture or come into frequent contact with animals?',
        'Do you use any traditional herbal remedies on your skin?',
        'What is your access to clean water and sanitation like?'
      ]
    },
    {
      title: 'Pertinent physical examination points needed',
      items: [
        'Closer inspection of the lesions with good lighting to assess for comedones, papules, pustules, scaling, or other characteristic features.',
        'Examination of other areas of the skin for similar lesions.'
      ]
    }
  ];
  diagnosisList = [
    { name: 'Acne vulgaris', score: 80 },
    { name: 'Allergic contact dermatitis', score: 60 },
    { name: 'Seborrheic dermatitis', score: 32 },
    { name: 'Fungal infection (Tinea faciei)', score: 20 },
    { name: 'Impetigo', score: 12 }
  ];
  selectedDiagnoses: string[] = [];
  rationaleList = [] 


  ngOnInit() {
    this.diagnosisService.selectedDiagnoses$.subscribe((diagnoses) => {
      this.selectedDiagnosis = diagnoses;
    });
  }


  onTryAgain() {
    this.isLoading = true;
    setTimeout(() => {
      this.rationaleList = [
        {
          name: 'Acne vulgaris',
          score: 80,
          description: "This is a highly probable diagnosis given the patient's age (21), the presence of multiple, transient lesions on the face, and the smooth surface of the rash. Acne is extremely common in this age group and often presents with comedones, papules, and pustules. The clear skin discharge mentioned could be sebum or a small amount of serous fluid from inflamed lesions. Acne is prevalent worldwide, including rural India."
        },
        {
          name: 'Allergic contact dermatitis',
          score: 60,
          description: "This is a possibility given the transient nature of the rash. Contact with plants, cosmetics, or other allergens could be the cause. The clear discharge could be serous fluid from vesicles. However, the patient denies exposure to irritants, which makes this less likely. In rural India, contact with various plants and traditional remedies could be a source of allergens."
        },
        {
          name: 'Seborrheic dermatitis',
          score: 32,
          description: "This condition can also present with facial rashes, often with a greasy or scaly appearance. However, the description of the rash as smooth and the lack of mention of scaling makes this less likely. Seborrheic dermatitis is relatively common across different settings, including rural areas."
        }
      ];
      this.isLoading = false;
    }, 1000);
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
    this.diagnosisService.setDiagnoses([...this.selectedDiagnoses]);
  }
}
