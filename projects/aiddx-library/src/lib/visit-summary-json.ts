export const ADULTINITIAL_ENCOUNTER = 'ADULTINITIAL';
export const JSON_VISIT_SUMMARY_CONCEPT = 'JSON Format Visit Summary';
export const JSON_VISIT_SUMMARY_CONFIG_KEY = 'json_format_visit_summary';

export const JSON_VISIT_SUMMARY_DDX_CONFIG_KEY = 'json_format_visit_summary_ddx';
export const JSON_VISIT_SUMMARY_TTX_CONFIG_KEY = 'json_format_visit_summary_ttx';

export type JsonVisitSummaryKind = 'ddx' | 'ttx';

export function isJsonVisitSummaryEnabled(
  configService: any,
  override?: boolean,
  kind?: JsonVisitSummaryKind
): boolean {
  if (override !== undefined && override !== null) {
    return !!override;
  }
  const llm = configService?.ai_llm;
  if (!llm?.[JSON_VISIT_SUMMARY_CONFIG_KEY]) {
    return false;
  }
  if (!kind) {
    return true;
  }
  const childKey = kind === 'ddx' ? JSON_VISIT_SUMMARY_DDX_CONFIG_KEY : JSON_VISIT_SUMMARY_TTX_CONFIG_KEY;
  return !!llm[childKey];
}

export function getEncounterByType(visit: any, encounterType: string): any {
  const encounters = Array.isArray(visit?.encounters) ? visit.encounters : [];
  return (
    encounters.find((e: any) => e?.encounterType?.display === encounterType) ||
    encounters.find((e: any) => typeof e?.display === 'string' && e.display.startsWith(encounterType)) ||
    null
  );
}

export function findObsByConcept(encounter: any, conceptName: string): any {
  const obs = Array.isArray(encounter?.obs) ? encounter.obs : [];
  return (
    obs.find((o: any) => typeof o?.concept?.display === 'string' && o.concept.display.trim() === conceptName) ||
    obs.find((o: any) => typeof o?.display === 'string' && o.display.trim().startsWith(`${conceptName}:`)) ||
    null
  );
}

export function getObsRawValue(obs: any, conceptName: string): string | null {
  const value = obs?.value;
  if (typeof value === 'string' && value.trim()) {
    return value.trim();
  }
  if (value && typeof value === 'object') {
    return null;
  }
  const display = obs?.display;
  if (typeof display === 'string') {
    const prefix = `${conceptName}:`;
    const trimmed = display.trim();
    if (trimmed.startsWith(prefix)) {
      const raw = trimmed.slice(prefix.length).trim();
      if (raw) {
        return raw;
      }
    }
  }
  return null;
}

export function getVisitSummaryJson(visit: any): any | null {
  const encounter = getEncounterByType(visit, ADULTINITIAL_ENCOUNTER);
  if (!encounter) {
    return null;
  }

  const obs = findObsByConcept(encounter, JSON_VISIT_SUMMARY_CONCEPT);
  if (!obs) {
    return null;
  }

  const raw = getObsRawValue(obs, JSON_VISIT_SUMMARY_CONCEPT);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    return parsed;
  } catch (err) {
    console.warn(
      `[aiddx-library] Could not parse "${JSON_VISIT_SUMMARY_CONCEPT}" for visit ${visit?.uuid}`,
      err
    );
    return null;
  }
}
