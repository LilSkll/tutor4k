"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { generateAIResponse } from "@/server/ai/orchestrator";
import { getCourse } from "@/config/courses";
import {
  buildExerciseCheckPrompt,
  buildExerciseGenerationPrompt,
  defaultTopicForType,
} from "@/server/ai/prompts/exercise";
import { retrieveContext } from "@/server/rag/retrieve";
import { retrieveVocabularyContext } from "@/server/rag/vocabulary-context";
import {
  getCachedTutorResponse,
  setCachedTutorResponse,
  shouldUseSharedTutorCache,
} from "@/server/rag/tutor-cache";
import type {
  AIMessage,
  ExerciseHistory,
  ExerciseType,
  InterfaceLanguage,
  Level,
} from "@/types";
import { recordStudySession } from "@/server/actions/data";

// =====================================================================
// AI Tutor chat — server action (streamed back to client in one payload)
// =====================================================================

export async function sendTutorMessage(input: {
  messages: AIMessage[];
  conversationId?: string | null;
}): Promise<{
  content: string;
  provider: string;
  conversationId: string;
}> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Use the service-role client for DB writes when available (RLS-safe,
  // so chat history + progress never get silently dropped).
  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  const writeClient = admin ?? supabase;

  let level: Level | null = null;
  let userName: string | null = null;
  let language: InterfaceLanguage = "ru";
  let courseId: string | null = null;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("level, name, interface_language, active_course_id")
      .eq("id", user.id)
      .single();

    if (profile) {
      level = (profile.level as Level | null) ?? null;
      userName = (profile.name as string) ?? null;
      language = (profile.interface_language as InterfaceLanguage) ?? "ru";
      courseId = (profile.active_course_id as string) ?? "spanish";
    }
  }

  const resolvedCourseId = courseId ?? "spanish";

  // TeacherContext — real curriculum memory for every reply.
  let learnerPromptBlock: string | null | undefined = undefined;
  let profileGrammarTopic: string | null = null;
  let profileVocabTopic: string | null = null;
  try {
    const { buildTeacherContext } = await import(
      "@/server/ai/learner-context"
    );
    const teacher = await buildTeacherContext({
      courseId: resolvedCourseId,
      interfaceLanguage: language,
      level,
    });
    learnerPromptBlock = teacher.promptBlock;
    profileGrammarTopic = teacher.currentChapterObj?.grammarTopic ?? null;
    profileVocabTopic = teacher.currentChapterObj?.vocabTopic ?? null;
  } catch (err) {
    console.warn("[tutor] TeacherContext failed:", (err as Error).message);
    learnerPromptBlock = null;
  }

  // --- Persist conversation (best-effort) ------------------------------
  let conversationId = input.conversationId;

  if (user && input.messages.length > 0) {
    if (!conversationId) {
      const title =
        input.messages.find((m) => m.role === "user")?.content.slice(0, 50) ??
        "Chat";
      const { data: conv } = await supabase
        .from("chat_conversations")
        .insert({
          user_id: user.id,
          title,
          course_id: resolvedCourseId,
        })
        .select("id")
        .single();
      conversationId = conv?.id ?? null;
    }

    // Persist the last user message.
    const lastUserMsg = [...input.messages]
      .reverse()
      .find((m) => m.role === "user");
    if (lastUserMsg && conversationId) {
      await writeClient.from("chat_messages").insert({
        conversation_id: conversationId,
        role: "user",
        content: lastUserMsg.content,
      });
    }
  }

  // --- Resolve the last user question (reused for cache + RAG) -------
  const lastUser = [...input.messages]
    .reverse()
    .find((m) => m.role === "user");

  // --- Domain guard FIRST (before cache) -----------------------------
  // Prevents a bad cached answer (e.g. ChatGPT explanation) from leaking.
  if (lastUser) {
    try {
      const course = await getCourse(resolvedCourseId);
      const { isOffTopicForCourse } = await import(
        "@/server/ai/prompts/domain-guard"
      );
      const { getOffTopicRefusal } = await import(
        "@/server/ai/prompts/refusals"
      );
      const lastAssistant = [...input.messages]
        .reverse()
        .find((m) => m.role === "assistant");
      if (
        isOffTopicForCourse(lastUser.content, course.keywords, {
          priorAssistantContent: lastAssistant?.content ?? null,
        })
      ) {
        const refusal = getOffTopicRefusal(course.titleNative, language);
        if (shouldUseSharedTutorCache(input.messages)) {
          // Overwrite any previous mistaken cache entry for this question.
          setCachedTutorResponse(
            lastUser.content,
            level,
            refusal,
            resolvedCourseId,
            language,
          ).catch(() => {});
        }
        if (user && conversationId) {
          await writeClient.from("chat_messages").insert({
            conversation_id: conversationId,
            role: "assistant",
            content: refusal,
          });
        }
        return {
          content: refusal,
          provider: "guard",
          conversationId: conversationId ?? "",
        };
      }
    } catch {
      // Non-fatal — orchestrator guard still applies.
    }
  }

  // --- Shared cross-user cache (FAQ) — save LLM tokens -----------------
  // Skip for grammar explains: stale wrong conjugations must not stick.
  let skipFaqCache = false;
  if (lastUser) {
    try {
      const { isGrammarExplainQuery } = await import(
        "@/server/ai/grammar-grounding"
      );
      skipFaqCache = isGrammarExplainQuery(lastUser.content);
    } catch {
      skipFaqCache = false;
    }
  }
  if (lastUser && shouldUseSharedTutorCache(input.messages) && !skipFaqCache) {
    try {
      const cached = await getCachedTutorResponse(
        lastUser.content,
        level,
        resolvedCourseId,
        language,
      );
      if (cached) {
        if (user && conversationId) {
          await writeClient.from("chat_messages").insert({
            conversation_id: conversationId,
            role: "assistant",
            content: cached,
          });
          await supabase
            .from("chat_conversations")
            .update({ updated_at: new Date().toISOString() })
            .eq("id", conversationId);
          await recordStudySession(2, 0).catch(() => {});
        }
        return {
          content: cached,
          provider: "cache",
          conversationId: conversationId ?? "",
        };
      }
    } catch {
      // Non-fatal: fall through to the normal RAG + Groq path.
    }
  }

  // --- Retrieve relevant textbook + course vocabulary context -----------
  let retrievedContext: string | null = null;
  let grammarGrounding: string | null = null;
  const explainQuery = Boolean(lastUser && skipFaqCache);
  if (lastUser) {
    try {
      const course = await getCourse(resolvedCourseId);
      const { resolveGrammarGrounding } = await import(
        "@/server/ai/grammar-grounding"
      );
      grammarGrounding = resolveGrammarGrounding({
        course,
        query: lastUser.content,
        interfaceLanguage: language,
      });

      // Grammar explains: prefer the static article only (smaller prompt,
      // reliable when providers rate-limit). Skip heavy textbook RAG.
      if (explainQuery && grammarGrounding) {
        retrievedContext = grammarGrounding;
      } else {
        const textbookContext = await retrieveContext(
          lastUser.content,
          level,
          5,
          resolvedCourseId,
        );
        const vocabContext = retrieveVocabularyContext(
          lastUser.content,
          course.getVocab(),
          level,
        );
        retrievedContext = [grammarGrounding, textbookContext, vocabContext]
          .filter(Boolean)
          .join("\n\n");
        if (!retrievedContext) retrievedContext = null;
      }
    } catch (err) {
      console.warn("[tutor] retrieval failed:", (err as Error).message);
    }
  }

  // --- Generate AI response (course-aware via prompt registry) --------
  let response = await generateAIResponse({
    messages: input.messages,
    level,
    interfaceLanguage: language,
    userName,
    retrievedContext,
    // Leaner context on explain turns → fewer token / provider failures.
    learnerContext: explainQuery ? null : learnerPromptBlock,
    courseId: resolvedCourseId,
  });

  // Provider outage: still answer Explain: … from the static rule bank.
  if (
    lastUser &&
    grammarGrounding &&
    (response.content.startsWith("😔") || response.content.startsWith("⚠️"))
  ) {
    const { formatStaticGrammarTutorReply } = await import(
      "@/server/ai/grammar-grounding"
    );
    response = {
      ...response,
      content: formatStaticGrammarTutorReply({
        groundingBlock: grammarGrounding,
        interfaceLanguage: language,
      }),
      provider: "static-grammar",
      model: "course-bank",
    };
  }
  // --- Store in shared cache for other users (best-effort) ------------
  // Do NOT cache grammar-explain / grounded answers (conjugations stay fresh).
  if (
    lastUser &&
    response.content &&
    shouldUseSharedTutorCache(input.messages) &&
    !skipFaqCache &&
    !grammarGrounding
  ) {
    setCachedTutorResponse(
      lastUser.content,
      level,
      response.content,
      resolvedCourseId,
      language,
    ).catch(() => {});
  }

  // --- Persist assistant reply (best-effort) --------------------------
  if (user && conversationId) {
    await writeClient.from("chat_messages").insert({
      conversation_id: conversationId,
      role: "assistant",
      content: response.content,
    });
    await writeClient
      .from("chat_conversations")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", conversationId);

    // Count study time: ~2 min per exchange.
    await recordStudySession(2, 0).catch(() => {});
  }

  // --- Silent Student Learning Profile update (never shown to user) ---
  if (
    user &&
    lastUser &&
    response.refused !== true &&
    !response.content.startsWith("⚠️") &&
    !response.content.startsWith("😔")
  ) {
    try {
      const { recordTutorTurnInProfile } = await import(
        "@/server/learning/student-profile"
      );
      await recordTutorTurnInProfile({
        courseId: resolvedCourseId,
        userMessage: lastUser.content,
        grammarTopic: profileGrammarTopic,
        vocabTopic: profileVocabTopic,
      });
    } catch (err) {
      console.warn(
        "[tutor] learning profile update failed:",
        (err as Error).message,
      );
    }
  }

  return {
    content: response.content,
    provider: response.provider,
    conversationId: conversationId ?? "",
  };
}

/**
 * Personalized session opening for a new tutor chat (empty thread).
 * Built from TeacherContext only — no invented memory.
 */
export async function getTutorSessionOpening(): Promise<{
  opening: string;
  recommendedNextTopic: string;
  currentChapter: string | null;
  fingerprint: string;
}> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let level: Level | null = null;
  let language: InterfaceLanguage = "ru";
  let courseId = "spanish";

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("level, interface_language, active_course_id")
      .eq("id", user.id)
      .maybeSingle();
    if (profile) {
      level = (profile.level as Level | null) ?? null;
      language = (profile.interface_language as InterfaceLanguage) ?? "ru";
      courseId = (profile.active_course_id as string) ?? "spanish";
    }
  }

  const { buildTeacherContext } = await import("@/server/ai/learner-context");
  const teacher = await buildTeacherContext({
    courseId,
    interfaceLanguage: language,
    level,
  });

  return {
    opening: teacher.sessionOpening,
    recommendedNextTopic: teacher.recommendedNextTopic,
    currentChapter: teacher.currentChapter,
    fingerprint: teacher.fingerprint,
  };
}

// =====================================================================
// Exercises — generate + check
// =====================================================================

export interface GeneratedExercise {
  type: ExerciseType;
  level: Level;
  question: string;
  instruction?: string;
  options?: string[];
  answer: string;
  acceptableAnswers?: string[];
  topic: string;
  explanation: string;
  /** Pre-authored bank item — skip AI generation and checking. */
  staticSource?: boolean;
  /** Stable bank id for adaptive progress tracking. */
  exerciseId?: string;
  chapterSlug?: string;
}

/**
 * In-memory dedup store: remembers the last N questions per (type, level)
 * so the model is told what NOT to repeat. Note: on Vercel serverless this
 * resets per cold start, but within a warm instance it prevents the
 * "same sentence three times" bug reported in review.
 */
const recentExerciseQuestions = new Map<string, string[]>();
const MAX_RECENT = 8;

function rememberQuestion(
  type: ExerciseType,
  level: Level,
  question: string,
  courseId: string,
) {
  const key = `${courseId}:${type}:${level}`;
  const list = recentExerciseQuestions.get(key) ?? [];
  // Keep only the question text (normalized) for comparison.
  const norm = question.trim().toLowerCase();
  list.push(norm);
  while (list.length > MAX_RECENT) list.shift();
  recentExerciseQuestions.set(key, list);
}

export async function generateExercise(input: {
  type: ExerciseType;
  level: Level;
  topic?: string;
  language?: InterfaceLanguage;
  courseId?: string;
}): Promise<GeneratedExercise> {
  const { generateStructuredJSON } = await import("@/server/ai/orchestrator");
  const courseId = input.courseId ?? "spanish";
  const course = await getCourse(courseId);

  let curriculumHint: string | undefined;
  let learnerPromptBlock: string | null | undefined = undefined;
  let resolvedTopic = input.topic;

  try {
    const { buildTeacherContext } = await import(
      "@/server/ai/learner-context"
    );
    const teacher = await buildTeacherContext({
      courseId,
      interfaceLanguage: input.language ?? "ru",
      level: input.level,
    });
    curriculumHint = teacher.exerciseTopicHint;
    learnerPromptBlock = teacher.promptBlock;
    if (!resolvedTopic) resolvedTopic = teacher.exerciseTopicHint;
  } catch (err) {
    console.warn("[exercises] TeacherContext failed:", (err as Error).message);
  }

  const recentKey = `${courseId}:${input.type}:${input.level}`;
  const recent = recentExerciseQuestions.get(recentKey) ?? [];

  const prompt = buildExerciseGenerationPrompt({
    type: input.type,
    level: input.level,
    course,
    topic: resolvedTopic,
    language: input.language,
    recentQuestions: recent,
    curriculumHint,
  });

  let exerciseContext: string | null = null;
  try {
    const ragQuery =
      resolvedTopic ?? defaultTopicForType(input.type, courseId);
    const ragContext = await retrieveContext(
      ragQuery,
      input.level,
      3,
      courseId,
    );
    const vocabContext = retrieveVocabularyContext(
      ragQuery,
      course.getVocab(),
      input.level,
    );
    exerciseContext = [ragContext, vocabContext].filter(Boolean).join("\n\n") || null;
  } catch (err) {
    console.warn("[exercises] retrieval failed:", (err as Error).message);
  }

  const data = await generateStructuredJSON<GeneratedExercise>(
    [{ role: "user", content: prompt }],
    {
      level: input.level,
      temperature: 0.7,
      interfaceLanguage: input.language,
      retrievedContext: exerciseContext,
      learnerContext: learnerPromptBlock,
      courseId,
    },
  );

  const clean = sanitizeExercise(data, input.type);
  rememberQuestion(input.type, input.level, clean.question, courseId);
  return clean;
}

/**
 * Validate / repair a freshly generated exercise so it is always solvable:
 *  - multiple_choice: the correct answer MUST be among the options.
 *  - sentence_building: the correct sentence MUST be reconstructable from
 *    the word tiles (we replace options with the actual words of the answer).
 *  - Remove duplicate options; ensure at least 4 distinct options.
 */
function sanitizeExercise(
  ex: GeneratedExercise,
  type: ExerciseType,
): GeneratedExercise {
  const answer = (ex.answer ?? "").trim();

  // Multiple choice: guarantee the answer is among the options.
  if (type === "multiple_choice" && ex.options && ex.options.length > 0) {
    const opts = ex.options.map((o) => o.trim());
    const norm = (s: string) =>
      s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "");
    const exists = opts.some((o) => norm(o) === norm(answer));
    if (!exists) {
      // Force-insert the correct answer, replacing a random wrong option.
      const idx = Math.floor(Math.random() * opts.length);
      opts[idx] = answer;
    }
    // Deduplicate (case-insensitive) while preserving the correct one.
    const seen = new Set<string>();
    const deduped: string[] = [];
    for (const o of opts) {
      const key = norm(o);
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(o);
      }
    }
    ex.options = deduped.length >= 2 ? deduped : opts;
    // Shuffle so the answer isn't always first.
    ex.options = shuffle(ex.options);
    ex.answer = answer;
  }

  // Sentence building: the options MUST be the individual words of the
  // correct sentence, jumbled. The model sometimes returned unrelated
  // options or the full sentence as a single option.
  if (type === "sentence_building" && answer) {
    const words = answer.split(/\s+/).filter(Boolean);
    // Keep punctuation attached to words (remove leading punctuation tiles).
    if (words.length >= 3) {
      ex.options = shuffle(words);
    } else if (ex.options && ex.options.length > 0) {
      // Fallback: treat as multiple_choice-style.
    }
    ex.answer = answer;
  }

  return ex;
}

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Check a learner's answer against the correct one.
 * Uses the model for tolerance (accents, capitalization, word order)
 * but falls back to a strict comparison.
 */
export async function checkExerciseAnswer(input: {
  exercise: GeneratedExercise;
  userAnswer: string;
  level: Level;
  language?: InterfaceLanguage;
  courseId?: string;
}): Promise<{
  correct: boolean;
  feedback: string;
}> {
  const { generateAIResponse } = await import("@/server/ai/orchestrator");
  const courseId = input.courseId ?? "spanish";
  const course = await getCourse(courseId);

  const normalized = (s: string) =>
    s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "").replace(/\s+/g, " ");

  const userNorm = normalized(input.userAnswer);
  const acceptable = [
    input.exercise.answer,
    ...(input.exercise.acceptableAnswers ?? []),
  ].map(normalized);

  // Fast path: exact / normalized match.
  if (acceptable.includes(userNorm)) {
    const feedback = input.exercise.staticSource
      ? (await import("@/lib/tutor-feedback")).formatBankTutorFeedback({
          language: input.language,
          correct: true,
          explanation: input.exercise.explanation,
        })
      : input.exercise.explanation;

    await saveExerciseHistory({
      exercise: input.exercise.question,
      exerciseId: input.exercise.exerciseId,
      courseId,
      type: input.exercise.type,
      level: input.level,
      userAnswer: input.userAnswer,
      correct: true,
      feedback,
    });
    await recordExerciseProfileUpdate({
      courseId,
      topic: input.exercise.topic,
      correct: true,
      feedback,
    });
    if (input.exercise.exerciseId) {
      const { recordExerciseAttempt } = await import(
        "@/server/learning/exercise-progress"
      );
      await recordExerciseAttempt({
        courseId,
        exerciseId: input.exercise.exerciseId,
        correct: true,
      });
    }

    return {
      correct: true,
      feedback,
    };
  }

  // Static bank exercises: use stored explanation framed as tutor feedback.
  if (input.exercise.staticSource) {
    const feedback = (
      await import("@/lib/tutor-feedback")
    ).formatBankTutorFeedback({
      language: input.language,
      correct: false,
      explanation: input.exercise.explanation,
    });

    await saveExerciseHistory({
      exercise: input.exercise.question,
      exerciseId: input.exercise.exerciseId,
      courseId,
      type: input.exercise.type,
      level: input.level,
      userAnswer: input.userAnswer,
      correct: false,
      feedback,
    });
    await recordExerciseProfileUpdate({
      courseId,
      topic: input.exercise.topic,
      correct: false,
      feedback,
    });
    if (input.exercise.exerciseId) {
      const { recordExerciseAttempt } = await import(
        "@/server/learning/exercise-progress"
      );
      await recordExerciseAttempt({
        courseId,
        exerciseId: input.exercise.exerciseId,
        correct: false,
      });
    }

    return {
      correct: false,
      feedback,
    };
  }

  const prompt = buildExerciseCheckPrompt({
    exercise: input.exercise,
    userAnswer: input.userAnswer,
    course,
    language: input.language,
  });

  const response = await generateAIResponse({
    messages: [{ role: "user", content: prompt }],
    level: input.level,
    temperature: 0.1,
    maxTokens: 150,
    skipGuard: true,
    interfaceLanguage: input.language,
    courseId,
  });

  const isCorrect = /VERDICT:\s*CORRECT/i.test(response.content);
  const feedbackMatch = response.content.match(/FEEDBACK:\s*([\s\S]+)/i);
  const feedback = feedbackMatch
    ? feedbackMatch[1].trim()
    : input.exercise.explanation;

  await saveExerciseHistory({
    exercise: input.exercise.question,
    exerciseId: input.exercise.exerciseId,
    courseId,
    type: input.exercise.type,
    level: input.level,
    userAnswer: input.userAnswer,
    correct: isCorrect,
    feedback,
  });
  await recordExerciseProfileUpdate({
    courseId,
    topic: input.exercise.topic,
    correct: isCorrect,
    feedback,
  });
  if (input.exercise.exerciseId) {
    const { recordExerciseAttempt } = await import(
      "@/server/learning/exercise-progress"
    );
    await recordExerciseAttempt({
      courseId,
      exerciseId: input.exercise.exerciseId,
      correct: isCorrect,
    });
  }

  return { correct: isCorrect, feedback };
}

/** Silent learning-profile update after an exercise attempt. */
async function recordExerciseProfileUpdate(input: {
  courseId: string;
  topic?: string;
  correct: boolean;
  feedback: string;
}): Promise<void> {
  try {
    const {
      resolveTopicsForCourse,
      updateStudentLearningProfile,
    } = await import("@/server/learning/student-profile");
    const topics = await resolveTopicsForCourse(input.courseId, input.topic);
    await updateStudentLearningProfile({
      courseId: input.courseId,
      grammarTopic: topics.grammarTopic,
      vocabTopic: topics.vocabTopic,
      correct: input.correct,
      mistakeNote: input.correct
        ? null
        : input.feedback.slice(0, 80) || "exercise mistake",
      prefersExercises: true,
      needsRepetition: !input.correct,
    });
  } catch (err) {
    console.warn(
      "[exercises] learning profile update failed:",
      (err as Error).message,
    );
  }
}

async function saveExerciseHistory(input: {
  exercise: string;
  exerciseId?: string;
  courseId?: string;
  type: ExerciseType;
  level: Level;
  userAnswer: string;
  correct: boolean;
  feedback: string;
}): Promise<void> {
  const userClient = await createSupabaseServerClient();
  const {
    data: { user },
  } = await userClient.auth.getUser();

  if (!user) return;

  // Use the service-role client for writes when available (RLS-safe).
  const { createSupabaseAdminClient } = await import("@/lib/supabase-admin");
  const admin = createSupabaseAdminClient();
  const writeClient = admin ?? userClient;

  const row: Record<string, unknown> = {
    user_id: user.id,
    exercise: input.exercise,
    exercise_type: input.type,
    level: input.level,
    user_answer: input.userAnswer,
    correct: input.correct,
    feedback: input.feedback,
  };
  if (input.exerciseId) row.exercise_id = input.exerciseId;
  if (input.courseId) row.course_id = input.courseId;

  const { error } = await writeClient.from("exercises_history").insert(row);

  if (error) {
    console.error("[saveExerciseHistory] insert error:", error.message);
  }

  await recordStudySession(3, 1).catch(() => {});
}

export async function getExerciseHistoryRows(): Promise<ExerciseHistory[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];
  const { data } = await supabase
    .from("exercises_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  return (data ?? []) as unknown as ExerciseHistory[];
}
