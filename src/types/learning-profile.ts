import type { Level } from "@/types";

/**
 * Persistent student learning model (per course).
 * Stored in profiles.learning_profile JSONB — evidence + confidence, not chat logs.
 */

export type SkillBand = Level;

/** Evidence-backed skill node (grammar topic, vocab topic, etc.). */
export interface SkillEvidence {
  /** 0–100 confidence. */
  confidence: number;
  lastPracticed: string | null;
  correctAnswers: number;
  wrongAnswers: number;
  commonMistakes: string[];
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
  /** Human-readable recommendation lines (interface-language agnostic keys later). */
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
  /** Grammar topic slug, e.g. a1-presente */
  grammarTopic?: string | null;
  /** Vocabulary topic slug */
  vocabTopic?: string | null;
  correct?: boolean;
  /** Short mistake note when incorrect */
  mistakeNote?: string | null;
  /** Soft preference hints from interaction style */
  prefersExplanations?: boolean;
  prefersExamples?: boolean;
  prefersExercises?: boolean;
  needsRepetition?: boolean;
  /** Add strength / weakness labels */
  addStrength?: string | null;
  addWeakness?: string | null;
  /** Replace recommendation list (optional) */
  recommendations?: string[] | null;
  /** Soft exposure from tutor chat (tiny +1), not a scored attempt */
  exposureOnly?: boolean;
  /** CEFR band hints for skills */
  skillHints?: Partial<StudentCourseProfile["skills"]> | null;
};
