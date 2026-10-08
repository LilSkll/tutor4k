import {
  localDateKey,
  parseLocalDateKey,
  shiftDateKey,
} from "@/lib/local-date";

/**
 * Single seasonal switch for Spanish with Pavel.
 * Flip `FORCE_OFF` or adjust the window to retire an event without deleting UI.
 */

export type SeasonalThemeType = "halloween" | "none";

export type SeasonalTheme = {
  enabled: boolean;
  type: SeasonalThemeType;
};

/** Hard kill-switch — set true to disable Halloween without code search. */
const FORCE_OFF = false;

/** Inclusive local-calendar window (autumn → Día de Muertos). */
const HALLOWEEN_START = "10-01"; // MM-DD
const HALLOWEEN_END = "11-02";

function monthDay(isoDate: string): string {
  return isoDate.slice(5, 10);
}

function inInclusiveMonthDayWindow(
  md: string,
  start: string,
  end: string,
): boolean {
  if (start <= end) return md >= start && md <= end;
  // Wrap across year (unused for Halloween, kept for safety)
  return md >= start || md <= end;
}

export function isHalloweenSeason(date = new Date()): boolean {
  if (FORCE_OFF) return false;
  const key = localDateKey(date);
  return inInclusiveMonthDayWindow(
    monthDay(key),
    HALLOWEEN_START,
    HALLOWEEN_END,
  );
}

/** Prefer browser/local cookie date when available on the server. */
export function isHalloweenSeasonOn(dateKey: string | null | undefined): boolean {
  if (FORCE_OFF) return false;
  const key = parseLocalDateKey(dateKey) ?? localDateKey();
  return inInclusiveMonthDayWindow(
    monthDay(key),
    HALLOWEEN_START,
    HALLOWEEN_END,
  );
}

export function getSeasonalTheme(date = new Date()): SeasonalTheme {
  if (isHalloweenSeason(date)) {
    return { enabled: true, type: "halloween" };
  }
  return { enabled: false, type: "none" };
}

export const HALLOWEEN_EGG_ID = "seasonal-halloween-pumpkin-streak";
export const HALLOWEEN_DAILY_STREAK_TARGET = 5;

/** How many consecutive calendar days ending at `todayKey` are present in `dates`. */
export function countConsecutiveSeasonalDays(
  dates: Iterable<string>,
  todayKey: string,
  target = HALLOWEEN_DAILY_STREAK_TARGET,
): number {
  const set = dates instanceof Set ? dates : new Set(dates);
  let consecutive = 0;
  for (let i = 0; i < target; i++) {
    if (!set.has(shiftDateKey(todayKey, -i))) break;
    consecutive += 1;
  }
  return consecutive;
}
