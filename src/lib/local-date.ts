/**
 * Calendar date helpers in the runtime's local timezone.
 * Prefer these over `toISOString().slice(0, 10)` (UTC), which shifts the
 * day for anyone east of UTC in the evening/early morning.
 */

/** YYYY-MM-DD for the given instant in local time. */
export function localDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Shift a calendar day (noon anchor avoids DST edge cases). */
export function shiftLocalDateKey(offsetDays: number, from = new Date()): string {
  const d = new Date(from);
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + offsetDays);
  return localDateKey(d);
}

/** Accept only YYYY-MM-DD; otherwise null. */
export function parseLocalDateKey(raw: string | null | undefined): string | null {
  if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  return raw;
}

/** Shift a YYYY-MM-DD key by `offsetDays` (noon anchor avoids DST edges). */
export function shiftDateKey(key: string, offsetDays: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y!, (m ?? 1) - 1, d ?? 1, 12, 0, 0, 0);
  dt.setDate(dt.getDate() + offsetDays);
  return localDateKey(dt);
}

/** Previous calendar day for a YYYY-MM-DD key. */
export function previousDateKey(key: string): string {
  return shiftDateKey(key, -1);
}
