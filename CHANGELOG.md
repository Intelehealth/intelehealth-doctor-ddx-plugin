# Changelog

Versions are published as orphan branches (`vX.Y.Z`) holding the built library,
and consumed as `github:Intelehealth/intelehealth-doctor-ddx-plugin#vX.Y.Z`.
See `aiddx-library-dev.md` for the publish procedure.

## v1.4.1

### Added

- **JSON Format Visit Summary support, behind an admin flag.** When the
  `JSON Format Visit Summary` obs (concept
  `1f770363-262e-4d01-b1df-3eb164d575ef`) is present on the visit's
  `ADULTINITIAL` encounter, its parsed JSON is sent as the DDx `casehistory` /
  TTx `case` instead of the derived free-text payload. For DDx, `notes` is
  appended as an extra top-level key.
- New shared module `lib/visit-summary-json.ts` (exported from the public API):
  `getVisitSummaryJson`, `getEncounterByType`, `findObsByConcept`,
  `getObsRawValue`, `isJsonVisitSummaryEnabled`, plus the
  `JSON_VISIT_SUMMARY_CONCEPT` / `JSON_VISIT_SUMMARY_CONFIG_KEY` constants.
  Reads `obs.value`, falling back to stripping the `"<concept>: "` prefix off
  `obs.display`. Returns `null` — never throws — when the obs is absent, the
  encounter is missing, `visit` is undefined, `encounters` is not an array, the
  value is blank, or the JSON parses to a non-object. Malformed JSON logs one
  warning naming the visit uuid.
- `AiddxService` / `AiTxService` gained `getVisitSummaryJson(visit)`,
  `isJsonVisitSummaryEnabled(override?)` and
  `resolveVisitSummaryJson(visit, override?)`.
- All six components accept `@Input() useJsonVisitSummary?: boolean` as an
  optional override and expose `visitSummaryJson`.

### Requires configuration

The `CONFIG_SERVICE` injection token — previously declared but never wired — is
now consumed by both services to read
`configService.ai_llm['json_format_visit_summary']`. The host app must provide
it, e.g. `{ provide: CONFIG_SERVICE, useExisting: AppConfigService }`. Without a
provider the flag reads `false` and the legacy string payload is used, so
existing consumers are unaffected.

Note the library module's own `{ provide: ENVIRONMENT, useValue: {} }` default
shadows root providers; a component that re-provides `ENVIRONMENT` must
re-provide `CONFIG_SERVICE` alongside it. No default `CONFIG_SERVICE` provider
is declared in the module, deliberately, to avoid the same shadowing.

### ⚠️ Backend must support the JSON body before the flag is enabled

`ai-middleware` currently types DDx `casehistory` and TTx `case` as `str` and
validates for literal `Age:`, `Weight (kg):` and `Gender:` key-value pairs. Sending
the object returns 422 (`Input should be a valid string`). Leave
`json_format_visit_summary` disabled until the middleware accepts a structured
body.

### Fixed

- `aillmtx-test` passed the whole `visit` object where `getAITTx` expects
  `visitUuid`, so AI test suggestions failed the middleware's UUID validation on
  every visit — silently, since the error was swallowed into `hasError`. Now
  passes `this.visit.uuid`, matching the other five panels.
- `AillmddxComponent` resolves the visit summary in `ngOnChanges` rather than
  `ngOnInit`, so it is correct when `visit` is bound asynchronously.

### Changed

- `getDDxPayload(patientInfo, visit, notes?, visitSummaryJson?)` and
  `getTxPayload(patientInfo, visit, visitSummaryJson?)` take a new optional
  trailing argument. Both are backward compatible: omitted, the services consult
  `CONFIG_SERVICE`; with no provider, behaviour is unchanged.

## v1.4.0

- Diagnosis ranking logic in `AillmddxComponent`.
- `/ddx` and `/ttxv1` routed via `environment.mindmapURL` (portal wrapper).

## v1.3.8

### Requires a backend change

`/ddx` and `/ttxv1` now go through the portal's authenticated wrapper
(`environment.mindmapURL`) instead of calling ai-middleware directly on
`environment.base`. The portal must expose `POST /api/ddx` and `POST /api/ttxv1`
before this version is deployed, otherwise both calls 404.

`/ddxfinal` and `/ttxfinal` are unchanged and still use `environment.base`.

### Fixed

- Report-issue note was never sent. `FormsModule` was missing from
  `AiddxLibraryModule`, so `[(ngModel)]` on the note textarea silently no-op'd
  and the note was dropped before leaving the browser. This only failed at
  runtime, so the build never caught it.
- Checkbox squashed out of square when the adjacent suggestion text was long.
  `.custom-checkbox` had a fixed size but no `flex-shrink: 0`, so a growing flex
  sibling compressed its width. Fixed in all six panels (`aillmddx`, medication,
  advice, test, referral, follow-up).

### Changed

- `@angular/forms` added to `peerDependencies`.

## v1.3.7

- Hide empty medication detail bullets when a field is missing.

## v1.3.6

- Report-an-AI-issue entry points; suggest treatment from the medication empty state.
- Medication empty-state layout and per-card flag positioning.

## v1.3.5

- Emit `rationaleOpened` when the Ayu detailed report is expanded.
