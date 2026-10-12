import { describe, expect, it } from "vitest";
import { isStreakGap } from "@/lib/streak-gap";

describe("isStreakGap", () => {
  it("is false for today or yesterday", () => {
    expect(
      isStreakGap({ lastActiveDate: "2026-10-08", today: "2026-10-08" }),
    ).toBe(false);
    expect(
      isStreakGap({ lastActiveDate: "2026-10-07", today: "2026-10-08" }),
    ).toBe(false);
  });

  it("is true when last active is older than yesterday", () => {
    expect(
      isStreakGap({ lastActiveDate: "2026-10-05", today: "2026-10-08" }),
    ).toBe(true);
  });

  it("is false without a last date", () => {
    expect(isStreakGap({ lastActiveDate: null, today: "2026-10-08" })).toBe(
      false,
    );
  });
});
