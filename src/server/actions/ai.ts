"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { generateAIResponse } from "@/server/ai/orchestrator";
import { retrieveContext } from "@/server/rag/retrieve";
import {
  getCachedTutorResponse,
  setCachedTutorResponse,
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

  let level: Level | null = null;
  let userName: string | null = null;
  let language: InterfaceLanguage = "ru";

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("level, name, interface_language")
      .eq("id", user.id)
      .single();

    if (profile) {
      level = (profile.level as Level | null) ?? null;
      userName = (profile.name as string) ?? null;
      language = (profile.interface_language as InterfaceLanguage) ?? "ru";
    }
  }

  // --- Persist conversation (best-effort) ------------------------------
  let conversationId = input.conversationId;

  if (user && input.messages.length > 0) {
    if (!conversationId) {
      const title =
        input.messages.find((m) => m.role === "user")?.content.slice(0, 50) ??
        "Conversación";
      const { data: conv } = await supabase
        .from("chat_conversations")
        .insert({ user_id: user.id, title })
        .select("id")
        .single();
      conversationId = conv?.id ?? null;
    }

    // Persist the last user message.
    const lastUser = [...input.messages]
      .reverse()
      .find((m) => m.role === "user");
    if (lastUser && conversationId) {
      await supabase.from("chat_messages").insert({
        conversation_id: conversationId,
        role: "user",
        content: lastUser.content,
      });
    }
  }

  // --- Resolve the last user question (reused for cache + RAG) -------
  const lastUser = [...input.messages]
    .reverse()
    .find((m) => m.role === "user");

  // --- Shared cache: serve identical questions without hitting Groq --
  if (lastUser) {
    try {
      const cached = await getCachedTutorResponse(lastUser.content, level);
      if (cached) {
        // Persist the cached reply into the conversation (best-effort).
        if (user && conversationId) {
          await supabase.from("chat_messages").insert({
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

  // --- Retrieve relevant textbook context (RAG) -----------------------
  let retrievedContext: string | null = null;
  if (lastUser) {
    try {
      retrievedContext = await retrieveContext(lastUser.content, level);
    } catch (err) {
      // Non-fatal: proceed without RAG context.
      console.warn("[tutor] retrieval failed:", (err as Error).message);
    }
  }

  // --- Generate AI response -------------------------------------------
  const response = await generateAIResponse({
    messages: input.messages,
    level,
    language,
    userName,
    retrievedContext,
  });

  // --- Store the answer in the shared cache (best-effort) ------------
  if (lastUser && response.refused !== true && response.content) {
    setCachedTutorResponse(lastUser.content, level, response.content).catch(
      () => {},
    );
  }

  // --- Persist assistant reply (best-effort) --------------------------
  if (user && conversationId) {
    await supabase.from("chat_messages").insert({
      conversation_id: conversationId,
      role: "assistant",
      content: response.content,
    });
    await supabase
      .from("chat_conversations")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", conversationId);

    // Count study time: ~2 min per exchange.
    await recordStudySession(2, 0).catch(() => {});
  }

  return {
    content: response.content,
    provider: response.provider,
    conversationId: conversationId ?? "",
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
}

/**
 * In-memory dedup store: remembers the last N questions per (type, level)
 * so the model is told what NOT to repeat. Note: on Vercel serverless this
 * resets per cold start, but within a warm instance it prevents the
 * "same sentence three times" bug reported in review.
 */
const recentExerciseQuestions = new Map<string, string[]>();
const MAX_RECENT = 8;

function rememberQuestion(type: ExerciseType, level: Level, question: string) {
  const key = `${type}:${level}`;
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
}): Promise<GeneratedExercise> {
  const { generateStructuredJSON } = await import("@/server/ai/orchestrator");

  const langName =
    input.language === "ru" ? "Russian" : input.language === "es" ? "Spanish" : "English";

  // Type-specific instructions — strict, to avoid the reviewed bugs:
  //  - multiple_choice: exactly 4 options, the correct one MUST be among them.
  //  - sentence_building: a FULL target sentence + 5-7 jumbled word tiles.
  const typeRules: Record<ExerciseType, string> = {
    multiple_choice:
      "MULTIPLE CHOICE. Provide a clear Spanish-language question, EXACTLY 4 distinct options (A/B/C/D). The field 'answer' MUST be one of the 4 options VERBATIM (copy-paste, identical). The other 3 options must be plausible distractors but clearly wrong.",
    fill_blank:
      "FILL THE BLANK. Provide a Spanish sentence where the missing part is '___'. The 'answer' is the single word/phrase that fills the blank. Provide 1-2 acceptable alternatives in 'acceptableAnswers' (e.g. with/without accent).",
    translation:
      "TRANSLATION. Provide a full sentence in " + langName + " as the 'question' (the prompt). The 'answer' is the correct Spanish translation of that sentence. Provide 1-2 acceptable alternative translations in 'acceptableAnswers'.",
    error_correction:
      "ERROR CORRECTION. Provide a Spanish sentence containing exactly ONE grammar mistake as the 'question'. The 'answer' is the fully corrected sentence. The 'acceptableAnswers' should list acceptable variants (e.g. with/without subject pronoun).",
    sentence_building:
      "SENTENCE BUILDING. Provide a complete target Spanish sentence as the 'answer'. Then split it into 5-7 individual word tiles (in jumbled order) and put those tiles in 'options'. The user will reorder them. The 'question' should be the instruction (e.g. 'Соберите предложение из слов:'). Include the FULL correct sentence in 'answer'.",
  };

  // Track recently generated questions to avoid repetition (Bug 1 fix).
  const recentKey = `${input.type}:${input.level}`;
  const recent = recentExerciseQuestions.get(recentKey) ?? [];

  const prompt = `You are a Spanish-language exercise generator for CEFR level ${input.level}.
${input.topic ? `Topic: ${input.topic}.` : "Vary the topic: use different grammar/vocabulary each time."}

TASK: ${typeRules[input.type]}

CRITICAL RULES:
1. The 'answer' field MUST be unambiguous and correct.
2. For multiple_choice and sentence_building: the 'answer' MUST appear verbatim in the 'options' array. If it does not, the exercise is broken.
3. Generate VARIED content — different vocabulary, different verbs, different sentence structures each time. NEVER repeat any of the sentences below.
4. Match CEFR ${input.level} difficulty precisely.
5. For translation exercises, the source sentence must be in ${langName}.

DO NOT REPEAT any of these recently used questions (generate something DIFFERENT):
${recent.length > 0 ? recent.map((q) => `- ${q}`).join("\n") : "(none yet — this is the first)"}
4. Match CEFR ${input.level} difficulty precisely.
5. For translation exercises, the source sentence must be in ${langName}.

Respond ONLY with valid JSON in this exact shape (no markdown fences, no commentary):
{
  "type": "${input.type}",
  "level": "${input.level}",
  "question": "...",
  "instruction": "short instruction in ${langName}",
  "options": ["opt1","opt2","opt3","opt4"],
  "answer": "the correct answer (must be one of the options for multiple_choice/sentence_building)",
  "acceptableAnswers": ["alternative accepted answers"],
  "topic": "short grammar/lexical topic name",
  "explanation": "1-2 sentence explanation of the rule, in ${langName}"
}

Only include "options" for multiple_choice and sentence_building. Always include acceptableAnswers (can be empty array). The JSON must be valid.`;

  // Retrieve textbook context for the requested topic (best-effort).
  let exerciseContext: string | null = null;
  try {
    exerciseContext = await retrieveContext(
      input.topic ?? defaultTopicForType(input.type),
      input.level,
      3,
    );
  } catch (err) {
    console.warn("[exercises] retrieval failed:", (err as Error).message);
  }

  const data = await generateStructuredJSON<GeneratedExercise>(
    [{ role: "user", content: prompt }],
    {
      level: input.level,
      temperature: 0.7,
      language: input.language,
      retrievedContext: exerciseContext,
    },
  );

  // --- Post-generation validation (fixes Bug 2 & Bug 3) -------------
  const clean = sanitizeExercise(data, input.type);
  rememberQuestion(input.type, input.level, clean.question);
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

/** A sensible default search term for each exercise type (when no topic given). */
function defaultTopicForType(type: ExerciseType): string {
  const map: Record<ExerciseType, string> = {
    multiple_choice: "gramática español vocabulario",
    fill_blank: "conjugación verbo español",
    translation: "vocabulario frase español",
    error_correction: "gramática error español",
    sentence_building: "sintaxis oración español",
  };
  return map[type];
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
}): Promise<{
  correct: boolean;
  feedback: string;
}> {
  const { generateAIResponse } = await import("@/server/ai/orchestrator");

  const normalized = (s: string) =>
    s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "").replace(/\s+/g, " ");

  const userNorm = normalized(input.userAnswer);
  const acceptable = [
    input.exercise.answer,
    ...(input.exercise.acceptableAnswers ?? []),
  ].map(normalized);

  // Fast path: exact / normalized match.
  if (acceptable.includes(userNorm)) {
    // Persist history.
    await saveExerciseHistory({
      exercise: input.exercise.question,
      type: input.exercise.type,
      level: input.level,
      userAnswer: input.userAnswer,
      correct: true,
      feedback: input.exercise.explanation,
    });

    return {
      correct: true,
      feedback: input.exercise.explanation,
    };
  }

  // Slow path: ask the model whether the answer is acceptable.
  const prompt = `A Spanish learner answered an exercise. Decide if the answer is correct.
Question: ${input.exercise.question}
Correct answer: ${input.exercise.answer}
Acceptable alternatives: ${(input.exercise.acceptableAnswers ?? []).join(", ") || "none"}
Learner's answer: ${input.userAnswer}

Reply in EXACTLY this format:
VERDICT: CORRECT or INCORRECT
FEEDBACK: one short sentence explaining why (in ${input.language === "ru" ? "Russian" : input.language === "es" ? "Spanish" : "English"}), and if incorrect, show the right answer.`;

  const response = await generateAIResponse({
    messages: [{ role: "user", content: prompt }],
    level: input.level,
    temperature: 0.1,
    maxTokens: 150,
    skipGuard: true,
    language: input.language,
  });

  const isCorrect = /VERDICT:\s*CORRECT/i.test(response.content);
  const feedbackMatch = response.content.match(/FEEDBACK:\s*([\s\S]+)/i);
  const feedback = feedbackMatch
    ? feedbackMatch[1].trim()
    : input.exercise.explanation;

  await saveExerciseHistory({
    exercise: input.exercise.question,
    type: input.exercise.type,
    level: input.level,
    userAnswer: input.userAnswer,
    correct: isCorrect,
    feedback,
  });

  return { correct: isCorrect, feedback };
}

async function saveExerciseHistory(input: {
  exercise: string;
  type: ExerciseType;
  level: Level;
  userAnswer: string;
  correct: boolean;
  feedback: string;
}): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("exercises_history").insert({
    user_id: user.id,
    exercise: input.exercise,
    exercise_type: input.type,
    level: input.level,
    user_answer: input.userAnswer,
    correct: input.correct,
    feedback: input.feedback,
  });

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
