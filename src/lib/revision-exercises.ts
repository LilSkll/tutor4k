import type { StaticExercise } from "@/types";
import { exerciseStemKey } from "@/lib/exercise-bank";

function shuffleInPlace<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = items[i]!;
    items[i] = items[j]!;
    items[j] = tmp;
  }
  return items;
}

/**
 * Pick up to `count` revision exercises from completed chapters.
 * Prefers chapters matching weak/stale topics when provided, then fills from
 * the rest of completed chapters. Always randomizes so users do not memorize
 * the same warm-up every lesson.
 */
export function pickRandomRevisionExercises(input: {
  poolByChapter: Map<string, StaticExercise[]>;
  completedSlugs: string[];
  preferredSlugs?: string[];
  excludeChapterSlug?: string;
  count?: number;
}): StaticExercise[] {
  const count = input.count ?? 3;
  if (count <= 0 || input.completedSlugs.length === 0) return [];

  const preferred = new Set(
    (input.preferredSlugs ?? []).filter((s) =>
      input.completedSlugs.includes(s),
    ),
  );
  const orderedSlugs = [
    ...input.completedSlugs.filter((s) => preferred.has(s)),
    ...shuffleInPlace(
      input.completedSlugs.filter(
        (s) => s !== input.excludeChapterSlug && !preferred.has(s),
      ),
    ),
  ].filter((s) => s !== input.excludeChapterSlug);

  const preferredPool: StaticExercise[] = [];
  const otherPool: StaticExercise[] = [];
  for (const slug of orderedSlugs) {
    const items = input.poolByChapter.get(slug) ?? [];
    if (preferred.has(slug)) preferredPool.push(...items);
    else otherPool.push(...items);
  }

  shuffleInPlace(preferredPool);
  shuffleInPlace(otherPool);

  const picked: StaticExercise[] = [];
  const usedStems = new Set<string>();
  const usedQuestions = new Set<string>();
  const usedTypes = new Set<string>();

  const tryTake = (ex: StaticExercise, preferNewType: boolean) => {
    if (picked.length >= count) return;
    if (preferNewType && usedTypes.has(ex.type) && usedTypes.size < count) {
      return;
    }
    const q = ex.question.trim().toLowerCase();
    const stem = exerciseStemKey(ex);
    if (usedQuestions.has(q)) return;
    if (stem && usedStems.has(stem)) return;
    usedQuestions.add(q);
    if (stem) usedStems.add(stem);
    usedTypes.add(ex.type);
    picked.push(ex);
  };

  // First pass: prefer distinct exercise types so warm-ups are not 3× SB.
  for (const ex of preferredPool) tryTake(ex, true);
  for (const ex of otherPool) tryTake(ex, true);
  for (const ex of preferredPool) tryTake(ex, false);
  for (const ex of otherPool) tryTake(ex, false);

  return picked;
}
