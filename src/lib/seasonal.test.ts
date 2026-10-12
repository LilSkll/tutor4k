import { describe, expect, it } from "vitest";
import {
  countConsecutiveSeasonalDays,
  isHalloweenSeasonOn,
} from "@/lib/seasonal";

describe("isHalloweenSeasonOn", () => {
  it("is active through October", () => {
    expect(isHalloweenSeasonOn("2026-10-01")).toBe(true);
    expect(isHalloweenSeasonOn("2026-10-10")).toBe(true);
    expect(isHalloweenSeasonOn("2026-10-31")).toBe(true);
  });

  it("includes early November Día de Muertos window", () => {
    expect(isHalloweenSeasonOn("2026-11-01")).toBe(true);
    expect(isHalloweenSeasonOn("2026-11-02")).toBe(true);
  });

  it("is off outside the window", () => {
    expect(isHalloweenSeasonOn("2026-09-30")).toBe(false);
    expect(isHalloweenSeasonOn("2026-11-03")).toBe(false);
    expect(isHalloweenSeasonOn("2026-12-25")).toBe(false);
  });
});

describe("countConsecutiveSeasonalDays", () => {
  it("counts a full 5-day Daily streak", () => {
    const dates = [
      "2026-10-27",
      "2026-10-28",
      "2026-10-29",
      "2026-10-30",
      "2026-10-31",
    ];
    expect(countConsecutiveSeasonalDays(dates, "2026-10-31")).toBe(5);
  });

  it("stops at a gap", () => {
    const dates = ["2026-10-29", "2026-10-31"];
    expect(countConsecutiveSeasonalDays(dates, "2026-10-31")).toBe(1);
  });
});
