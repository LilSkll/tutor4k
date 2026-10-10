import type { DailyActivityRow } from "@/server/actions/data";
import { shiftLocalDateKey } from "@/lib/local-date";

export type WeeklyActivitySummary = {
  activeDays: number;
  minutes: number;
  lessons: number;
};

/** Sum activity over the last `days` calendar days (including today). */
export function summarizeRecentActivity(
  rows: DailyActivityRow[],
  days = 7,
): WeeklyActivitySummary {
  const sinceKey = shiftLocalDateKey(-(days - 1));

  let activeDays = 0;
  let minutes = 0;
  let lessons = 0;

  for (const row of rows) {
    if (row.activity_date < sinceKey) continue;
    if (row.minutes_studied > 0 || row.lessons_completed > 0) {
      activeDays += 1;
    }
    minutes += row.minutes_studied;
    lessons += row.lessons_completed;
  }

  return { activeDays, minutes, lessons };
}
