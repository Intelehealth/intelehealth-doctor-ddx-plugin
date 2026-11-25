import { AiddxService } from './aiddx.service';
import { AiTxService } from './aitx.service';
import {
  JSON_VISIT_SUMMARY_CONFIG_KEY,
  JSON_VISIT_SUMMARY_DDX_CONFIG_KEY,
  JSON_VISIT_SUMMARY_TTX_CONFIG_KEY,
  isJsonVisitSummaryEnabled,
} from '../lib/visit-summary-json';

const SUMMARY = { complaint: 'cough', age: 30 };

const visitWith = (withObs: boolean) => ({
  uuid: 'v1',
  encounters: [
    {
      encounterType: { display: 'ADULTINITIAL' },
      obs: withObs ? [{ concept: { display: 'JSON Format Visit Summary' }, value: JSON.stringify(SUMMARY) }] : [],
    },
  ],
});

const cfg = (parent: boolean, ddx: boolean, ttx: boolean) => ({
  ai_llm: {
    [JSON_VISIT_SUMMARY_CONFIG_KEY]: parent,
    [JSON_VISIT_SUMMARY_DDX_CONFIG_KEY]: ddx,
    [JSON_VISIT_SUMMARY_TTX_CONFIG_KEY]: ttx,
  },
});

const patient = { person: { age: 30, gender: 'M', display: 'P' } };

describe('isJsonVisitSummaryEnabled', () => {
  it('parent only when no kind', () => {
    expect(isJsonVisitSummaryEnabled(cfg(true, false, false))).toBeTrue();
    expect(isJsonVisitSummaryEnabled(cfg(false, true, true))).toBeFalse();
  });
  it('requires parent and child per kind', () => {
    for (const parent of [true, false]) {
      for (const ddx of [true, false]) {
        for (const ttx of [true, false]) {
          expect(isJsonVisitSummaryEnabled(cfg(parent, ddx, ttx), undefined, 'ddx')).toBe(parent && ddx);
          expect(isJsonVisitSummaryEnabled(cfg(parent, ddx, ttx), undefined, 'ttx')).toBe(parent && ttx);
        }
      }
    }
  });
  it('override wins', () => {
    expect(isJsonVisitSummaryEnabled(cfg(false, false, false), true, 'ddx')).toBeTrue();
    expect(isJsonVisitSummaryEnabled(cfg(true, true, true), false, 'ttx')).toBeFalse();
  });
  it('handles missing config', () => {
    expect(isJsonVisitSummaryEnabled(undefined, undefined, 'ddx')).toBeFalse();
  });
});

describe('DDx payload flag resolution', () => {
  const make = (c: any) => new AiddxService({} as any, {}, c);
  it('parent off, child on -> string', () => {
    const s = make(cfg(false, true, true));
    expect(typeof s.getDDxPayload(patient, visitWith(true))).toBe('string');
  });
  it('parent on, child off -> string', () => {
    const s = make(cfg(true, false, true));
    expect(typeof s.getDDxPayload(patient, visitWith(true))).toBe('string');
  });
  it('both on, obs present -> JSON, with notes', () => {
    const s = make(cfg(true, true, false));
    const plain = s.getDDxPayload(patient, visitWith(true));
    expect(typeof plain).toBe('string');
    expect(JSON.parse(plain)).toEqual(SUMMARY);
    expect('notes' in JSON.parse(plain)).toBeFalse();
    const withNotes = s.getDDxPayload(patient, visitWith(true), 'n');
    expect(typeof withNotes).toBe('string');
    expect(JSON.parse(withNotes)).toEqual({ ...SUMMARY, notes: 'n' });
  });
  it('both on, obs missing -> string', () => {
    const s = make(cfg(true, true, true));
    expect(typeof s.getDDxPayload(patient, visitWith(false))).toBe('string');
  });
  it('override wins', () => {
    const on = make(cfg(false, false, false));
    expect(on.resolveVisitSummaryJson(visitWith(true), true)).toEqual(SUMMARY);
    const off = make(cfg(true, true, true));
    expect(off.resolveVisitSummaryJson(visitWith(true), false)).toBeNull();
  });
});

describe('TTx payload flag resolution', () => {
  const make = (c: any) => new AiTxService({} as any, {}, c);
  it('parent off, child on -> string', () => {
    const s = make(cfg(false, true, true));
    expect(typeof s.getTxPayload(patient, visitWith(true))).toBe('string');
  });
  it('parent on, child off -> string', () => {
    const s = make(cfg(true, true, false));
    expect(typeof s.getTxPayload(patient, visitWith(true))).toBe('string');
  });
  it('both on, obs present -> JSON', () => {
    const s = make(cfg(true, false, true));
    const out = s.getTxPayload(patient, visitWith(true));
    expect(typeof out).toBe('string');
    expect(JSON.parse(out)).toEqual(SUMMARY);
  });
  it('both on, obs missing -> string', () => {
    const s = make(cfg(true, true, true));
    expect(typeof s.getTxPayload(patient, visitWith(false))).toBe('string');
  });
  it('override wins', () => {
    const on = make(cfg(false, false, false));
    expect(on.resolveVisitSummaryJson(visitWith(true), true)).toEqual(SUMMARY);
    const off = make(cfg(true, true, true));
    expect(off.resolveVisitSummaryJson(visitWith(true), false)).toBeNull();
  });
});
