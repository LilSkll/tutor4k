import type { Level } from "@/types";

/**
 * Persistent student learning model (per course).
 * Stored in profiles.learning_profile JSONB — evidence + confidence, not chat logs.
 */

export type SkillBand = Level;

/** Evidence-backed skill node (grammar topic, vocab topic, etc.). */
export interface SkillEvidence {
  /** 0–100 confidence (after forgetting curve when loaded). */
  confidence: number;
  lastPracticed: string | null;
  correctAnswers: number;
  wrongAnswers: number;
  commonMistakes: string[];
}

/** Structured recommendation — AI turns this into natural interface-language text. */
export type LearningRecommendationReason =
  | "low_confidence"
  | "recent_mistakes"
  | "stale_topic"
  | "forgetting"
  | "consolidate_strength"
  | "new_topic";

export interface LearningRecommendation {
  type: "grammar" | "vocabulary";
  topic: string;
  priority: number;
  reason: LearningRecommendationReason;
  confidence?: number;
  certainty?: number;
}

export interface StudentCourseProfile {
  grammar: Record<string, SkillEvidence>;
  vocabulary: Record<string, SkillEvidence>;
  skills: {
    listening: SkillBand | null;
    reading: SkillBand | null;
    writing: SkillBand | null;
    speaking: SkillBand | null;
  };
  weaknesses: string[];
  strengths: string[];
  preferences: {
    likesExplanations: boolean;
    likesExamples: boolean;
    likesExercises: boolean;
    needsRepetition: boolean;
  };
  /** Structured recommendations (source of truth). */
  recommendations: LearningRecommendation[];
  /**
   * @deprecated Derived display strings for older prompt paths.
   * Prefer `recommendations`.
   */
  lastRecommendations: string[];
  updatedAt: string;
}

/** Root blob on profiles.learning_profile — keyed by courseId. */
export interface StudentLearningProfileStore {
  version: 1;
  courses: Record<string, StudentCourseProfile>;
}

export type ProfileUpdateSignal = {
  courseId: string;
  grammarTopic?: string | null;
  vocabTopic?: string | null;
  correct?: boolean;
  mistakeNote?: string | null;
  prefersExplanations?: boolean;
  prefersExamples?: boolean;
  prefersExercises?: boolean;
  needsRepetition?: boolean;
  addStrength?: string | null;
  addWeakness?: string | null;
  recommendations?: string[] | null;
  exposureOnly?: boolean;
  skillHints?: Partial<StudentCourseProfile["skills"]> | null;
};

/** How a lesson should adapt for this student. */
export type LessonFlowMode =
  | "mastered_short" // short theory, more practice
  | "standard"
  | "supportive"; // full theory first, then practice, then reinforce

export interface LessonAdaptation {
  mode: LessonFlowMode;
  chapterConfidence: number | null;
  chapterCertainty: number;
  needsRevision: boolean;
  revisionTopics: LearningRecommendation[];
  theoryFirst: boolean;
  practiceEmphasis: boolean;
  shortTheory: boolean;
}
