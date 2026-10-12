import type { GrammarLevel, Level } from "@/types";

const USER_LEVELS: readonly Level[] = ["A1", "A2", "B1", "B2", "C1"];

/**
 * Map any CEFR / chapter band onto `user_level` (DB enum A1–C1, plus C2 after migration).
 * Until `user-level-c2-migration.sql` is applied, C2 must be stored as C1.
 * Prefer passing through C2 when the enum already includes it — use
 * `toUserLevel` for writes that must never fail on missing enum values.
 */
export function toUserLevel(
  level: GrammarLevel | Level | string | null | undefined,
): Level {
  if (level === "A1" || level === "A2" || level === "B1" || level === "B2" || level === "C1") {
    return level;
  }
  // C2 chapters / practice: profile + progress enums historically capped at C1.
  if (level === "C2") return "C1";
  return "A1";
}

export function isUserLevel(value: unknown): value is Level {
  return typeof value === "string" && (USER_LEVELS as readonly string[]).includes(value);
}
