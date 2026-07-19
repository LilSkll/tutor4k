import {
  daysSincePracticed,
  getTopicPracticeScore,
} from "@/server/learning/adaptive";
import type {
  ExerciseProgress,
  ExerciseType,
  Level,
  StaticExercise,
} from "@/types";
import type { StudentCourseProfile } from "@/types/learning-profile";

export type RankedBankItem = {
  exercise: StaticExercise & {
    level: Level;
    topic: string;
    courseId: string;
    chapterSlug: string;
    grammarTopic?: string;
    vocabTopic?: string;
  };
  score: number;
};

/**
 * Score a bank item for adaptive selection (higher = more urgent).
 * Uses Learning Profile + per-exercise progress — no AI.
 */
export function scoreBankExercise(input: {
  exercise: RankedBankItem["exercise"];
  profile: StudentCourseProfile | null;
  progress: ExerciseProgress | null;
  preferredChapterSlugs?: string[];
}): number {
  const { exercise, profile, progress } = input;

  // Mastered items deprioritized hard.
  if (progress?.mastered) return -1;

  let score = 0.35; // baseline for unseen / new

  if (progress) {
    const failRate =
      progress.timesSeen > 0
        ? progress.timesWrong / progress.timesSeen
        : 0;
    score += failRate * 0.4;
    // Unseen / rarely seen preferred over overplayed.
    if (progress.timesSeen === 0) score += 0.25;
    else if (progress.timesSeen === 1) score += 0.12;
    else if (progress.timesSeen >= 5 && failRate < 0.2) score -= 0.2;

    const days = daysSincePracticed(progress.lastSeen);
    if (days >= 14) score += 0.18;
    else if (days >= 7) score += 0.1;
  } else {
    score += 0.28; // never practiced
  }

  if (profile) {
    const topicScore = getTopicPracticeScore(
      profile,
      exercise.grammarTopic ?? null,
      exercise.vocabTopic ?? null,
    );
    score += topicScore * 0.35;

    // Soft boost when chapter grammar slug appears in weaknesses.
    const g = exercise.grammarTopic?.toLowerCase() ?? "";
    if (
      g &&
      profile.weaknesses.some((w) => w.toLowerCase().includes(g))
    ) {
      score += 0.12;
    }
  }

  if (input.preferredChapterSlugs?.length) {
    const idx = input.preferredChapterSlugs.indexOf(exercise.chapterSlug);
    if (idx === 0) score += 0.15;
    else if (idx > 0 && idx < 3) score += 0.08;
    else if (idx === -1) score -= 0.05;
  }

  return score;
}

/**
 * Pick one adaptive exercise from candidates (deterministic shuffle by score).
 */
export function pickAdaptiveFromCandidates(
  ranked: RankedBankItem[],
): RankedBankItem["exercise"] | null {
  const viable = ranked
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score);

  if (viable.length === 0) return null;

  // Soft random among top band to avoid identical loops.
  const top = viable[0].score;
  const band = viable.filter((r) => top - r.score <= 0.08).slice(0, 8);
  const pick = band[Math.floor(Math.random() * band.length)] ?? viable[0];
  return pick.exercise;
}

const LEVEL_NEIGHBORS: Record<Level, Level[]> = {
  A1: ["A1", "A2"],
  A2: ["A2", "A1", "B1"],
  B1: ["B1", "A2", "B2"],
  B2: ["B2", "B1", "C1"],
  C1: ["C1", "B2"],
};

export function filterPoolByTypeLevel(
  pool: RankedBankItem["exercise"][],
  type: ExerciseType,
  level: Level,
): RankedBankItem["exercise"][] {
  const byType = pool.filter((ex) => ex.type === type);
  const atLevel = byType.filter((ex) => ex.level === level);
  if (atLevel.length > 0) return atLevel;

  const neighbors = new Set(LEVEL_NEIGHBORS[level] ?? [level]);
  const near = byType.filter((ex) => neighbors.has(ex.level));
  if (near.length > 0) return near;

  return byType;
}
