import { STREAK_REWARDS } from "@/config/app";

const MILESTONES = [100, 30, 14, 7, 3] as const;

/** i18n key for the highest unlocked streak milestone, or null. */
export function streakRewardKey(streak: number): string | null {
  if (streak < 3) return null;
  const hit = MILESTONES.find((n) => streak >= n);
  return hit ? STREAK_REWARDS[hit] : null;
}

/** True when today's streak lands exactly on a celebration milestone. */
export function isExactStreakMilestone(streak: number): boolean {
  return (MILESTONES as readonly number[]).includes(streak);
}
