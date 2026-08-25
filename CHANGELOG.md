# Changelog

Versions are published as orphan branches (`vX.Y.Z`) holding the built library,
and consumed as `github:Intelehealth/intelehealth-doctor-ddx-plugin#vX.Y.Z`.
See `aiddx-library-dev.md` for the publish procedure.

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
