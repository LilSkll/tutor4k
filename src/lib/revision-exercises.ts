import type { StaticExercise } from "@/types";

function revisionStemKey(ex: StaticExercise): string {
  const filled =
    ex.type === "multiple_choice" || ex.type === "fill_blank"
      ? /___+/.test(ex.question)
        ? ex.question.replace(/___+/g, ex.answer)
        : ex.question
      : ex.answer || ex.question;
  return filled
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

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

  const tryTake = (ex: StaticExercise) => {
    if (picked.length >= count) return;
    const q = ex.question.trim().toLowerCase();
    const stem = revisionStemKey(ex);
    if (usedQuestions.has(q)) return;
    if (stem && usedStems.has(stem)) return;
    usedQuestions.add(q);
    if (stem) usedStems.add(stem);
    picked.push(ex);
  };

  for (const ex of preferredPool) tryTake(ex);
  for (const ex of otherPool) tryTake(ex);

  return picked;
}
