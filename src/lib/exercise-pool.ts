import type { ExerciseType, Level, StaticExercise } from "@/types";
import { getCourse } from "@/config/courses";

export type PooledExercise = StaticExercise & {
  level: Level;
  topic: string;
  courseId: string;
  /** When true, wrong answers use stored explanation — no AI check. */
  staticSource: true;
};

const recentKeys = new Map<string, string[]>();
const MAX_RECENT = 12;

function poolKey(courseId: string, type: ExerciseType, level: Level): string {
  return `${courseId}:${type}:${level}`;
}

function rememberPick(key: string, question: string) {
  const list = recentKeys.get(key) ?? [];
  list.push(question.trim().toLowerCase());
  while (list.length > MAX_RECENT) list.shift();
  recentKeys.set(key, list);
}

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
        staticSource: true,
      });
    }
  }

  return pool;
}

/** Pick a random static exercise matching course, type, and level. */
export async function pickStaticExercise(input: {
  courseId: string;
  type: ExerciseType;
  level: Level;
  topic?: string;
}): Promise<PooledExercise | null> {
  const pool = await getExercisePool(input.courseId);
  const key = poolKey(input.courseId, input.type, input.level);
  const recent = new Set(recentKeys.get(key) ?? []);

  let candidates = pool.filter(
    (ex) => ex.type === input.type && ex.level === input.level,
  );

  if (input.topic) {
    const topicLower = input.topic.toLowerCase();
    const topicMatches = candidates.filter((ex) =>
      ex.topic.toLowerCase().includes(topicLower),
    );
    if (topicMatches.length > 0) candidates = topicMatches;
  }

  candidates = candidates.filter(
    (ex) => !recent.has(ex.question.trim().toLowerCase()),
  );

  if (candidates.length === 0) {
    // Relax dedup if we've exhausted the pool.
    candidates = pool.filter(
      (ex) => ex.type === input.type && ex.level === input.level,
    );
  }

  if (candidates.length === 0) return null;

  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  rememberPick(key, picked.question);
  return picked;
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
  const acceptable = [exercise.answer, ...(exercise.acceptableAnswers ?? [])].map(
    norm,
  );

  const correct = acceptable.includes(userNorm);
  return {
    correct,
    feedback: exercise.explanation,
  };
}
