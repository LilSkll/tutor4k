import type {
  ExerciseType,
  GrammarLevel,
  InterfaceLanguage,
  StaticExercise,
} from "@/types";
import { getCourse } from "@/config/courses";
import { getChapterTargetTitle } from "@/lib/chapter-display";
import { isExerciseUsableForLanguage } from "@/lib/exercise-localize";
import { answersMatch } from "@/lib/normalize-answer";
import { getCourseLearningProfile } from "@/server/learning/student-profile";
import { getExerciseProgressMap } from "@/server/learning/exercise-progress";
import { prepareExerciseForSession } from "@/lib/exercise-options";
import {
  filterPoolByLevel,
  filterPoolByTypeLevel,
  pickAdaptiveFromCandidates,
  scoreBankExercise,
  type RankedBankItem,
} from "@/server/learning/adaptive-exercise";

export type PooledExercise = StaticExercise & {
  level: GrammarLevel;
  topic: string;
  courseId: string;
  chapterSlug: string;
  grammarTopic?: string;
  vocabTopic?: string;
  /** When true, wrong answers use stored explanation — no AI check. */
  staticSource: true;
};

/** In-memory pool cache — rebuilt once per warm server instance per course. */
const poolCache = new Map<string, Promise<PooledExercise[]>>();

async function buildExercisePool(courseId: string): Promise<PooledExercise[]> {
  const course = await getCourse(courseId);
  const pool: PooledExercise[] = [];

  for (const chapter of course.getChapters()) {
    const exercises = course.getExercises(chapter.slug);
    for (const ex of exercises) {
      pool.push({
        ...ex,
        level: chapter.level,
        topic: getChapterTargetTitle(chapter, courseId),
        courseId,
        chapterSlug: chapter.slug,
        grammarTopic: chapter.grammarTopic,
        vocabTopic: chapter.vocabTopic,
        staticSource: true,
      });
    }
  }

  return pool;
}

/** Aggregate all chapter-bound static exercises for a course. */
export async function getExercisePool(
  courseId: string,
): Promise<PooledExercise[]> {
  let pending = poolCache.get(courseId);
  if (!pending) {
    pending = buildExercisePool(courseId);
    poolCache.set(courseId, pending);
  }
  return pending;
}

type PickInput = {
  courseId: string;
  type: ExerciseType;
  level: GrammarLevel;
  /** When true, pick any exercise type at the given level. */
  mixed?: boolean;
  topic?: string;
  preferredChapterSlugs?: string[];
  /**
   * Hard filter: only these chapter banks (journey-unlocked).
   * When set, level relaxation stays inside this set.
   */
  allowedChapterSlugs?: string[];
  /** Skip ids already used in this session (continue rounds). */
  excludeIds?: string[];
  /** Drop items unusable in this interface language (e.g. RU prompts). */
  interfaceLanguage?: InterfaceLanguage;
};

async function loadRankedCandidates(
  input: PickInput,
  opts?: { relaxLevel?: boolean },
): Promise<RankedBankItem[]> {
  const pool = await getExercisePool(input.courseId);
  const allowed =
    input.allowedChapterSlugs && input.allowedChapterSlugs.length > 0
      ? new Set(input.allowedChapterSlugs)
      : null;

  const inAllowed = (ex: { chapterSlug: string }) =>
    !allowed || allowed.has(ex.chapterSlug);

  let candidates = input.mixed
    ? filterPoolByLevel(pool, input.level)
    : filterPoolByTypeLevel(pool, input.type, input.level);
  candidates = candidates.filter(inAllowed);

  if (opts?.relaxLevel) {
    // Relax exercise *type* only — never the requested CEFR band.
    // (Crossing levels made A1 journey users get A1 when they picked C1.)
    const sameLevel = filterPoolByLevel(pool, input.level).filter(inAllowed);
    if (sameLevel.length > candidates.length) candidates = sameLevel;
  }

  if (input.interfaceLanguage && input.interfaceLanguage !== "ru") {
    const usable = candidates.filter((ex) =>
      isExerciseUsableForLanguage(ex, input.interfaceLanguage!),
    );
    if (usable.length > 0) candidates = usable;
  }

  if (candidates.length === 0) return [];

  if (input.excludeIds && input.excludeIds.length > 0) {
    const exclude = new Set(input.excludeIds);
    const fresh = candidates.filter((ex) => !exclude.has(ex.id));
    // If everything in-session was seen, allow repeats rather than empty.
    if (fresh.length > 0) candidates = fresh;
  }

  if (input.preferredChapterSlugs && input.preferredChapterSlugs.length > 0) {
    const preferred = new Set(input.preferredChapterSlugs);
    const fromCurriculum = candidates.filter((ex) =>
      preferred.has(ex.chapterSlug),
    );
    if (fromCurriculum.length > 0) candidates = fromCurriculum;
  }

  if (input.topic) {
    const topicLower = input.topic.toLowerCase();
    const topicMatches = candidates.filter(
      (ex) =>
        ex.topic.toLowerCase().includes(topicLower) ||
        (ex.grammarTopic?.toLowerCase().includes(topicLower) ?? false) ||
        (ex.vocabTopic?.toLowerCase().includes(topicLower) ?? false) ||
        topicLower.includes(ex.grammarTopic?.toLowerCase() ?? "___"),
    );
    if (topicMatches.length > 0) candidates = topicMatches;
  }

  let profile = null;
  let progressMap = new Map();
  try {
    profile = await getCourseLearningProfile(input.courseId);
    progressMap = await getExerciseProgressMap(input.courseId);
  } catch {
    // Non-fatal — score without profile.
  }

  return candidates.map((exercise) => ({
    exercise,
    score: scoreBankExercise({
      exercise,
      profile,
      progress: progressMap.get(exercise.id) ?? null,
      preferredChapterSlugs: input.preferredChapterSlugs,
    }),
  }));
}

/**
 * Adaptive pick from the permanent bank using Learning Profile + progress.
 * Never calls AI.
 */
export async function pickStaticExercise(
  input: PickInput,
): Promise<PooledExercise | null> {
  const ranked = await loadRankedCandidates(input);
  if (ranked.length === 0) return null;
  const picked = pickAdaptiveFromCandidates(ranked);
  const chosen = picked ?? ranked[0]?.exercise;
  if (!chosen) return null;
  return prepareExerciseForSession({ ...chosen, staticSource: true as const });
}

/**
 * Pick a session batch (default 5) without replacement within the batch.
 * Never calls AI — bank only.
 */
export async function pickStaticExercises(
  input: PickInput & { count: number },
): Promise<PooledExercise[]> {
  const count = Math.max(1, Math.min(20, input.count));
  let ranked = await loadRankedCandidates(input);
  if (ranked.length < count) {
    ranked = await loadRankedCandidates(input, { relaxLevel: true });
  }
  const results: PooledExercise[] = [];

  for (let i = 0; i < count && ranked.length > 0; i++) {
    const picked = pickAdaptiveFromCandidates(ranked);
    const chosen = picked ?? ranked[0]?.exercise;
    if (!chosen) break;
    results.push(
      prepareExerciseForSession({ ...chosen, staticSource: true as const }),
    );
    ranked = ranked.filter((r) => r.exercise.id !== chosen.id);
  }

  return results;
}

/** Local answer check for static exercises (no AI). */
export function checkStaticExerciseAnswer(
  exercise: Pick<
    StaticExercise,
    "answer" | "acceptableAnswers" | "explanation"
  >,
  userAnswer: string,
): { correct: boolean; feedback: string } {
  const correct = answersMatch(userAnswer, [
    exercise.answer,
    ...(exercise.acceptableAnswers ?? []),
  ]);
  return {
    correct,
    feedback: exercise.explanation,
  };
}
