export declare const ADULTINITIAL_ENCOUNTER = "ADULTINITIAL";
export declare const JSON_VISIT_SUMMARY_CONCEPT = "JSON Format Visit Summary";
export declare const JSON_VISIT_SUMMARY_CONFIG_KEY = "json_format_visit_summary";
export declare function isJsonVisitSummaryEnabled(configService: any, override?: boolean): boolean;
export declare function getEncounterByType(visit: any, encounterType: string): any;
export declare function findObsByConcept(encounter: any, conceptName: string): any;
export declare function getObsRawValue(obs: any, conceptName: string): string | null;
export declare function getVisitSummaryJson(visit: any): any | null;
