import { describe, expect, it } from "vitest";
import {
  isExactStreakMilestone,
  streakRewardKey,
} from "@/lib/streak-reward";

describe("streakRewardKey", () => {
  it("returns null below 3", () => {
    expect(streakRewardKey(0)).toBeNull();
    expect(streakRewardKey(2)).toBeNull();
  });

  it("picks the highest unlocked milestone", () => {
    expect(streakRewardKey(3)).toBe("streak.reward.3");
    expect(streakRewardKey(7)).toBe("streak.reward.7");
    expect(streakRewardKey(10)).toBe("streak.reward.7");
    expect(streakRewardKey(30)).toBe("streak.reward.30");
  });
});

describe("isExactStreakMilestone", () => {
  it("matches only exact thresholds", () => {
    expect(isExactStreakMilestone(7)).toBe(true);
    expect(isExactStreakMilestone(8)).toBe(false);
  });
});
