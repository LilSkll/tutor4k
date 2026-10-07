import { previousDateKey } from "@/lib/local-date";

/**
 * True when the student last studied before yesterday — streak will reset
 * on the next session, but profile.streak still holds the old value.
 */
export function isStreakGap(input: {
  lastActiveDate: string | null | undefined;
  today: string;
}): boolean {
  const last = input.lastActiveDate?.trim();
  if (!last) return false;
  if (last === input.today) return false;
  if (last === previousDateKey(input.today)) return false;
  return last < input.today;
}
