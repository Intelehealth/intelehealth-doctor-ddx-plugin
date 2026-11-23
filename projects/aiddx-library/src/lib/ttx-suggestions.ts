export function splitSentences(text: any): string[] {
  if (typeof text !== 'string') {
    return [];
  }
  const parts: string[] = [];
  let current = '';
  const input = text.trim();
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    current += ch;
    if ((ch === '.' || ch === '!' || ch === '?') && i + 1 < input.length && /\s/.test(input[i + 1])) {
      parts.push(current.trim());
      current = '';
    }
  }
  parts.push(current.trim());
  return parts.filter(p => p.length > 0);
}

export function normalizeAdvice(raw: any): any[] {
  if (Array.isArray(raw)) {
    return raw.map(v => (typeof v === 'string' ? { v } : v));
  }
  return splitSentences(raw).map(v => ({ v }));
}

export function normalizeTests(raw: any): any[] {
  if (Array.isArray(raw)) {
    return raw.map(t => (typeof t === 'string' ? { test_name: t } : t));
  }
  return splitSentences(raw).map(test_name => ({ test_name }));
}

export function normalizeFollowUp(raw: any): any[] {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw !== 'string' || !raw.trim()) {
    return [];
  }
  const text = raw.trim();
  const match = text.match(/(\d+)\s*(day|week|month)s?/i);
  return [{
    follow_up_required: true,
    follow_up_duration: match ? match[0] : text,
    reason_for_follow_up: text,
    duration_parsed: !!match
  }];
}

export function normalizeReferral(raw: any): any[] {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw !== 'string' || !raw.trim()) {
    return [];
  }
  return [{ referral_to: '', referral_facility: '', priority: 'Elective', remark: raw.trim() }];
}

export function referralKey(referral: any): string {
  return referral?.referral_to || referral?.remark || '';
}

export function referralMatchesExisting(referral: any, existing: any): boolean {
  if (referral?.referral_to) {
    return existing?.speciality === referral.referral_to;
  }
  return !!referral?.remark && existing?.reason === referral.remark;
}
