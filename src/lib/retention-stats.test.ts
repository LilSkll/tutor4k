import { describe, expect, it } from "vitest";
import { localDateKey, shiftLocalDateKey } from "@/lib/local-date";
import { summarizeRecentActivity } from "@/lib/retention-stats";

describe("summarizeRecentActivity", () => {
  it("sums minutes and active days within the window", () => {
    const summary = summarizeRecentActivity(
      [
        {
          activity_date: localDateKey(),
          minutes_studied: 8,
          lessons_completed: 1,
        },
        {
          activity_date: shiftLocalDateKey(-2),
          minutes_studied: 10,
          lessons_completed: 1,
        },
        {
          activity_date: shiftLocalDateKey(-10),
          minutes_studied: 50,
          lessons_completed: 3,
        },
      ],
      7,
    );

    expect(summary.activeDays).toBe(2);
    expect(summary.minutes).toBe(18);
    expect(summary.lessons).toBe(2);
  });
});
