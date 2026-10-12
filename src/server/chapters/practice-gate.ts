/**
 * How many real exercise_progress rows are required before a chapter
 * may be marked complete. Empty banks skip the gate (content-only chapters)
 * but never trust client-reported exercise counts.
 */
export function requiredPracticeCount(
  bankSize: number,
  sessionSize: number,
): number {
  if (!Number.isFinite(bankSize) || bankSize <= 0) return 0;
  if (!Number.isFinite(sessionSize) || sessionSize <= 0) return 0;
  return Math.min(Math.floor(sessionSize), Math.floor(bankSize));
}
