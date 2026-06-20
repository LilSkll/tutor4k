// =====================================================================
// Domain types for the AI Spanish Tutor application.
// =====================================================================

/** CEFR proficiency levels. */
export type Level = "A1" | "A2" | "B1" | "B2" | "C1";

/** Onboarding "I don't know my level" placeholder. */
export type LevelOrUnknown = Level | "UNKNOWN";

/** User learning goal. */
export type Goal =
  | "TRAVEL"
  | "WORK"
  | "RELOCATION"
  | "UNIVERSITY"
  | "DELE"
  | "GENERAL";

/** Interface language for the app. */
export type InterfaceLanguage = "ru" | "en" | "es";

/** Conversation message role. */
export type MessageRole = "user" | "assistant" | "system";

/** Single chat message. */
export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

/** Full conversation thread (local + persisted). */
export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

/** User profile (mirrors Supabase `profiles` table). */
export interface Profile {
  id: string;
  email: string;
  name: string;
  level: Level | null;
  goal: Goal | null;
  interface_language: InterfaceLanguage;
  daily_goal_minutes: number;
  onboarded: boolean;
  streak: number;
  last_active_date: string | null;
  created_at: string;
}

/** Learning progress row (mirrors `learning_progress`). */
export interface LearningProgress {
  id: string;
  user_id: string;
  topic: string;
  level: Level;
  score: number;
  status: "not_started" | "in_progress" | "completed";
  created_at: string;
}

/** Vocabulary entry (mirrors `vocabulary`). */
export interface VocabularyWord {
  id: string;
  user_id: string;
  word: string;
  translation: string;
  example: string;
  level: Level;
  created_at: string;
}

/** Exercise history row (mirrors `exercises_history`). */
export interface ExerciseHistory {
  id: string;
  user_id: string;
  exercise: string;
  exercise_type: ExerciseType;
  level: Level;
  user_answer: string;
  correct: boolean;
  feedback: string;
  created_at: string;
}

// ----- Exercises -----------------------------------------------------

export type ExerciseType =
  | "multiple_choice"
  | "fill_blank"
  | "translation"
  | "error_correction"
  | "sentence_building";

/** Generated exercise (returned by AI). */
export interface Exercise {
  id: string;
  type: ExerciseType;
  level: Level;
  question: string;
  /** Translation hint / instruction (for translation exercises). */
  instruction?: string;
  /** Options for multiple choice / sentence building. */
  options?: string[];
  /** Correct answer. */
  answer: string;
  /** Alternative accepted answers. */
  acceptableAnswers?: string[];
  /** Grammar/lexical topic this exercise trains. */
  topic: string;
  /** Short explanation shown after answering. */
  explanation: string;
}

// ----- AI Orchestrator -----------------------------------------------

/** Provider-agnostic response returned by the orchestrator. */
export interface AIResponse {
  content: string;
  provider: "groq" | "gemini";
  model: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
  };
  /** True when domain guard refused an off-topic question. */
  refused?: boolean;
}

export interface AIMessage {
  role: MessageRole;
  content: string;
}

/** Options passed to generateAIResponse(). */
export interface AIGenerateOptions {
  messages: AIMessage[];
  level?: Level | null;
  temperature?: number;
  maxTokens?: number;
  /** Skip the domain guard (used internally for structured output). */
  skipGuard?: boolean;
}

// ----- Grammar reference ---------------------------------------------

export interface GrammarTopic {
  slug: string;
  title: string;
  titleEs: string;
  level: Level;
  category: string;
  summary: string;
  /** Markdown reference content. */
  content: string;
}

// ----- Streak / daily stats ------------------------------------------

export interface DailyActivity {
  date: string; // YYYY-MM-DD
  lessonsCompleted: number;
  minutesStudied: number;
}
