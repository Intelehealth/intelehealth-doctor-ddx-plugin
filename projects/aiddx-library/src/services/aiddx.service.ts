import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../lib/token';

@Injectable({
  providedIn: 'root'
})
export class AiddxService {

  constructor(
    private http: HttpClient,
    @Optional() @Inject(ENVIRONMENT) private env?: any,
  ) {
    if (!this.env) {
      console.warn('ENVIRONMENT is not provided!');
    }
  }

  getAIDiagnosis(casehistory: any) {
    return this.http.post(`${this.env.base}/ddx`, { casehistory });
  }

  getDDxPayload(patientInfo: any, visit: any) {
    const data = this.getDataToExtract(patientInfo, visit);
    const get = (key, fallback = "Null") => data[key] || fallback;

    console.log('patientInfo: ', patientInfo);
    console.log('visit: ', visit);
    console.log('========================');
    console.log('data: ', data);
    const adultinitial = get('vst.encounters')?.ADULTINITIAL || [];
    const complaint = adultinitial.find(a => a?.concept?.display?.includes?.('COMPLAINT'));
    const phyExam = adultinitial.find(a => a?.concept?.display?.includes?.('PHYSICAL EXAMINATION'));
    const famHist = adultinitial.find(a => a?.concept?.display?.includes?.('FAMILY HISTORY'));
    const medHist = adultinitial.find(a => a?.concept?.display?.includes?.('MEDICAL HISTORY'));

    const vitals = get('vst.encounters')?.Vitals || [];
    const vitalPayload = `\nVitals: \n${vitals.map(v => `${v?.concept?.display}: ${v?.value}`).join('\n')}`;

    const payload = `Gender: ${get("pi.person.gender", "Not specified")}
Age: ${get("pi.person.age", "Not specified")}

Chief_complaint: ${this.formatText(complaint?.value || '')}

Physical_examination: ${this.formatText(phyExam?.value || '')}

Family_history: ${this.formatText(famHist?.value || '')}

Medical_history: ${this.formatText(medHist?.value || '')}

${vitals?.length ? vitalPayload : ''}`;

    return payload;
  }

  getDataToExtract(patientInfo: any, visit: any) {
    delete patientInfo?.person?.preferredAddress;
    delete patientInfo?.person?.preferredName;
    const data = {
      ...this.flatten(patientInfo, 'pi'),
      ...this.flatten(visit, 'vst'),
    };
    return data;
  }


  flatten(obj = {}, parentKey = '') {
    let flatData = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (Array.isArray(value)) {
        if (key === 'encounters') {
          let attr = {};
          value.forEach((item, index) => {
            attr[item?.encounterType?.display] = item?.obs;
          });
          console.log(attr);
          flatData[newKey] = attr;
        }
      } else if (typeof value === 'object' && value !== null) {
        const nestedFlat = this.flatten(value, newKey);
        flatData = { ...flatData, ...nestedFlat };
      } else {
        flatData[newKey] = value;
      }
    }

    return flatData;
  }

  formatText(text: string): string {
    if (!text) return '';

    return text
      .replace(/<br\/>/g, '\n')
      .replace(/<b>/g, '**')
      .replace(/<\/b>/g, '**')
      .replace(/►/g, '')
      .trim();
  }

}

