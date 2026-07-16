// =====================================================================
// Domain types for the multi-language learning platform.
// =====================================================================

/** CEFR proficiency levels. */
export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
/** Extended CEFR level including C2 for advanced vocabulary entries. */
export type VocabLevel = Level | "C2";

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
export type InterfaceLanguage = "ru" | "en" | "es" | "de";

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
  active_course_id: string | null;
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

/** Provider label as returned by sendTutorMessage (includes cache hit). */
export type TutorProvider = "groq" | "gemini" | "cache";

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
  /** Language for explanations, feedback, and hints. */
  interfaceLanguage?: InterfaceLanguage;
  /** @deprecated Use interfaceLanguage. Kept for backward compatibility. */
  language?: InterfaceLanguage;
  userName?: string | null;
  retrievedContext?: string | null;
  courseId?: string | null;
  /** Markdown TeacherContext block from buildTeacherContext(). */
  learnerContext?: string | null;
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

// ----- Chapters / Learning Journey -----------------------------------

export interface Chapter {
  slug: string;
  number: number;          // 1, 2, 3...
  title: string;           // «Пробуждение»
  titleEs: string;         // «El Despertar»
  level: Level;
  location: string;        // «Академия» (для карты путешествия)
  icon: string;            // emoji
  summary: string;
  /** Slug из GRAMMAR_TOPICS для привязки грамматического материала. */
  grammarTopic: string;
  /** Slug из VOCAB_TOPICS (опционально). */
  vocabTopic?: string;
  /** Типы упражнений для этой главы. */
  exerciseTypes: ExerciseType[];
  /** Slug предыдущей главы (для разблокировки). */
  prereqChapter?: string;
  /** Ориентировочное время прохождения (минуты). */
  estimatedMinutes: number;
}

export interface ChapterProgress {
  id: string;
  user_id: string;
  chapter_slug: string;
  status: "not_started" | "in_progress" | "completed";
  score: number;
  started_at: string | null;
  completed_at: string | null;
  words_learned: number;
  exercises_completed: number;
  created_at: string;
}

// ----- Multi-Course Architecture -------------------------------------

/** A language course (Spanish, English, Russian, etc.). */
export interface Course {
  id: string;                    // "spanish", "english", etc.
  languageCode: string;          // "es", "en", "ru"
  title: string;                 // "Испанский язык"
  titleNative: string;           // "Español"
  flag: string;                  // "🇪🇸"
  description: string;
  promptId: string;              // links to prompts/registry
  isActive: boolean;
  createdAt?: string;
}

/** Story world for a course — locations, narrative theme. */
export interface StoryWorld {
  theme: string;                 // "Путешествие по Испании"
  locations: string[];           // ["Академия", "Толедо", "Мадрид", ...]
}

/** Keywords for domain guard (per-course). */
export interface CourseKeywords {
  /** Words that indicate the query is about this language. */
  onTopic: string[];
  /** Words that indicate the query is NOT about this language. */
  offTopic: string[];
  /** Greeting patterns to let through. */
  greetings: string[];
}

/** Level guide text per CEFR level for a specific course. */
export type LevelGuide = Record<Level, string>;

/**
 * Full course configuration — loaded by the course registry.
 * Contains all content getters and metadata.
 */
export interface CourseConfig {
  // Metadata
  id: string;
  languageCode: string;
  title: string;
  titleNative: string;
  flag: string;
  description: string;
  promptId: string;
  storyWorld: StoryWorld;
  keywords: CourseKeywords;
  levelGuide: LevelGuide;
  textbookNames: string;
  examName?: string;

  // Content getters (lazy-loaded)
  getChapters: () => Chapter[];
  getChapter: (slug: string) => Chapter | undefined;
  getNextChapter: (slug: string) => Chapter | undefined;
  getGrammar: () => GrammarTopic[];
  getGrammarTopic: (slug: string) => GrammarTopic | undefined;
  getVocab: () => VocabTopic[];
  getExercises: (chapterSlug: string) => StaticExercise[];

  // Prompt builder
  buildPrompt: (options: {
    level?: Level | null;
    interfaceLanguage?: InterfaceLanguage;
    userName?: string | null;
    retrievedContext?: string | null;
    learnerContext?: string | null;
  }) => string;
}

// Re-export types that were locally defined in config files
export interface VocabTopic {
  slug: string;
  level: Level;
  topic: string;
  topicEs: string;
  /** English UI title (English course topics). */
  topicEn?: string;
  icon: string;
  /** Linked course chapter slug (multi-course vocabulary). */
  chapterSlug?: string;
  words: VocabWord[];
}

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "phrase"
  | "preposition"
  | "conjunction"
  | "pronoun"
  | "determiner"
  | "modal";

export type WordFrequency = "core" | "common" | "uncommon" | "advanced";

export interface VocabWord {
  word: string;
  translation: string;
  /** Optional glosses per interface language. */
  translations?: Partial<Record<InterfaceLanguage, string>>;
  /** Primary example sentence (backward compatible). */
  example: string;
  transcription?: string;
  partOfSpeech?: PartOfSpeech;
  examples?: string[];
  commonMistakes?: string[];
  synonyms?: string[];
  frequency?: WordFrequency;
  level?: VocabLevel;
  tags?: string[];
  chapterSlug?: string;
}

export interface StaticExercise {
  type: "multiple_choice" | "fill_blank" | "translation";
  question: string;
  instruction: string;
  options?: string[];
  answer: string;
  acceptableAnswers?: string[];
  explanation: string;
}
