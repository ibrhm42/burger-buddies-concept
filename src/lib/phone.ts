const PAKISTANI_MOBILE = /^923\d{9}$/;

export function normalizePakistaniPhone(value: string) {
  const compact = value.trim().replace(/[\s\-()]/g, "").replace(/^\+/, "");
  let digits = compact;

  if (/^03\d{9}$/.test(digits)) digits = `92${digits.slice(1)}`;
  if (/^3\d{9}$/.test(digits)) digits = `92${digits}`;

  return PAKISTANI_MOBILE.test(digits) ? `+${digits}` : null;
}
