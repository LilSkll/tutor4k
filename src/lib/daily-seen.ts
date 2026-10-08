/**
 * Client-side memory of Daily exercise ids so reopening the ritual
 * the same day does not serve the identical first five again.
 */

export type DailySeenState = {
  date: string;
  chapterSlug: string;
  ids: string[];
  run: number;
};

const STORAGE_KEY = "st_daily_seen_v1";
const MAX_IDS = 48;

export function readDailySeen(
  date: string,
  chapterSlug: string,
): DailySeenState {
  const empty: DailySeenState = {
    date,
    chapterSlug,
    ids: [],
    run: 0,
  };
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<DailySeenState>;
    if (
      parsed.date !== date ||
      parsed.chapterSlug !== chapterSlug ||
      !Array.isArray(parsed.ids)
    ) {
      return empty;
    }
    return {
      date,
      chapterSlug,
      ids: parsed.ids.filter((id): id is string => typeof id === "string"),
      run: Math.max(0, Number(parsed.run) || 0),
    };
  } catch {
    return empty;
  }
}

/** Increment run and append newly served exercise ids (FIFO cap). */
export function rememberDailySeen(
  date: string,
  chapterSlug: string,
  newIds: string[],
  prev: DailySeenState,
): DailySeenState {
  const merged = [
    ...newIds.filter(Boolean),
    ...prev.ids.filter((id) => !newIds.includes(id)),
  ].slice(0, MAX_IDS);
  const next: DailySeenState = {
    date,
    chapterSlug,
    ids: merged,
    run: prev.run + 1,
  };
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // private mode
    }
  }
  return next;
}

/** When the bank is exhausted, drop history so we can cycle again. */
export function clearDailySeen(date: string, chapterSlug: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date, chapterSlug, ids: [], run: 0 } satisfies DailySeenState),
    );
  } catch {
    // ignore
  }
}
