import {
  EASTER_EGGS,
  RARITY_ROLL,
  type EasterEggDef,
  type EggRarity,
} from "@/config/journey/easter-eggs";

function pickWeighted<T extends { weight: number }>(items: T[]): T | null {
  const total = items.reduce((s, i) => s + Math.max(0, i.weight), 0);
  if (total <= 0) return null;
  let r = Math.random() * total;
  for (const item of items) {
    r -= Math.max(0, item.weight);
    if (r <= 0) return item;
  }
  return items[items.length - 1] ?? null;
}

function rollRarity(): EggRarity | "none" {
  const picked = pickWeighted(RARITY_ROLL);
  return picked?.rarity ?? "none";
}

export type EggRollContext = {
  courseId: string;
  chapterSlug: string;
  /** 0–100 */
  scorePercent: number;
  exercisesCompleted: number;
  /** Chapter was already completed before this finish. */
  isReplay: boolean;
  /** Egg ids the user already owns for this course. */
  ownedEggIds: Set<string>;
};

/**
 * Decide which easter egg (if any) to award on chapter complete.
 * Prefer chapter-tied eggs; never award duplicates.
 */
export function rollEasterEgg(ctx: EggRollContext): EasterEggDef | null {
  const { courseId, chapterSlug, scorePercent, exercisesCompleted, isReplay, ownedEggIds } =
    ctx;

  // Guaranteed epic for a perfect first-time (or replay) run with practice.
  if (
    exercisesCompleted > 0 &&
    scorePercent >= 100 &&
    !ownedEggIds.has("trigger-perfect-run")
  ) {
    return EASTER_EGGS.find((e) => e.id === "trigger-perfect-run") ?? null;
  }

  // Replay: chance at echo egg before normal roll.
  if (isReplay && !ownedEggIds.has("trigger-replay-echo") && Math.random() < 0.45) {
    return EASTER_EGGS.find((e) => e.id === "trigger-replay-echo") ?? null;
  }

  const rarity = rollRarity();
  if (rarity === "none") return null;

  const eligible = EASTER_EGGS.filter((egg) => {
    if (egg.weight <= 0) return false;
    if (ownedEggIds.has(egg.id)) return false;
    if (egg.courseIds && !egg.courseIds.includes(courseId)) return false;
    if (egg.rarity !== rarity) return false;
    // Chapter-tied eggs only when on that chapter; globals always ok.
    if (egg.chapterSlug && egg.chapterSlug !== chapterSlug) return false;
    return true;
  });

  // Soft boost: if chapter has a tied egg of this rarity, prefer it.
  const chapterTied = eligible.filter((e) => e.chapterSlug === chapterSlug);
  const pool = chapterTied.length > 0 ? chapterTied : eligible;
  return pickWeighted(pool);
}
