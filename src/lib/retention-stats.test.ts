import { describe, expect, it } from "vitest";
import { summarizeRecentActivity } from "@/lib/retention-stats";

describe("summarizeRecentActivity", () => {
  it("sums minutes and active days within the window", () => {
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const d = (offset: number) => {
      const x = new Date(today);
      x.setDate(x.getDate() + offset);
      return x.toISOString().slice(0, 10);
    };

    const summary = summarizeRecentActivity(
      [
        { activity_date: d(0), minutes_studied: 8, lessons_completed: 1 },
        { activity_date: d(-2), minutes_studied: 10, lessons_completed: 1 },
        { activity_date: d(-10), minutes_studied: 50, lessons_completed: 3 },
      ],
      7,
    );

    expect(summary.activeDays).toBe(2);
    expect(summary.minutes).toBe(18);
    expect(summary.lessons).toBe(2);
  });
});
