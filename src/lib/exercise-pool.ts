import type { ExerciseType, Level, StaticExercise } from "@/types";
import { getCourse } from "@/config/courses";
import { getCourseLearningProfile } from "@/server/learning/student-profile";
import { getExerciseProgressMap } from "@/server/learning/exercise-progress";
import {
  filterPoolByTypeLevel,
  pickAdaptiveFromCandidates,
  scoreBankExercise,
  type RankedBankItem,
} from "@/server/learning/adaptive-exercise";

export type PooledExercise = StaticExercise & {
  level: Level;
  topic: string;
  courseId: string;
  chapterSlug: string;
  grammarTopic?: string;
  vocabTopic?: string;
  /** When true, wrong answers use stored explanation — no AI check. */
  staticSource: true;
};

/** Aggregate all chapter-bound static exercises for a course. */
export async function getExercisePool(
  courseId: string,
): Promise<PooledExercise[]> {
  const course = await getCourse(courseId);
  const pool: PooledExercise[] = [];

  for (const chapter of course.getChapters()) {
    const exercises = course.getExercises(chapter.slug);
    for (const ex of exercises) {
      pool.push({
        ...ex,
        level: chapter.level,
        topic: chapter.titleEs || chapter.title,
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

/**
 * Adaptive pick from the permanent bank using Learning Profile + progress.
 * Never calls AI.
 */
export async function pickStaticExercise(input: {
  courseId: string;
  type: ExerciseType;
  level: Level;
  topic?: string;
  preferredChapterSlugs?: string[];
}): Promise<PooledExercise | null> {
  const pool = await getExercisePool(input.courseId);
  let candidates = filterPoolByTypeLevel(pool, input.type, input.level);

  if (candidates.length === 0) return null;

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

  const ranked: RankedBankItem[] = candidates.map((exercise) => ({
    exercise,
    score: scoreBankExercise({
      exercise,
      profile,
      progress: progressMap.get(exercise.id) ?? null,
      preferredChapterSlugs: input.preferredChapterSlugs,
    }),
  }));

  const picked = pickAdaptiveFromCandidates(ranked);
  const chosen = picked ?? candidates[0];
  if (!chosen) return null;
  return { ...chosen, staticSource: true as const };
}

/** Local answer check for static exercises (no AI). */
export function checkStaticExerciseAnswer(
  exercise: Pick<
    StaticExercise,
    "answer" | "acceptableAnswers" | "explanation"
  >,
  userAnswer: string,
): { correct: boolean; feedback: string } {
  const norm = (s: string) =>
    s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "").replace(/\s+/g, " ");

  const userNorm = norm(userAnswer);
  const acceptable = [
    exercise.answer,
    ...(exercise.acceptableAnswers ?? []),
  ].map(norm);

  const correct = acceptable.includes(userNorm);
  return {
    correct,
    feedback: exercise.explanation,
  };
}
