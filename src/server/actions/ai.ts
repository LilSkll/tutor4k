"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { generateAIResponse } from "@/server/ai/orchestrator";
import { retrieveContext } from "@/server/rag/retrieve";
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

  // --- Retrieve relevant textbook context (RAG) -----------------------
  let retrievedContext: string | null = null;
  const lastUser = [...input.messages]
    .reverse()
    .find((m) => m.role === "user");
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

export async function generateExercise(input: {
  type: ExerciseType;
  level: Level;
  topic?: string;
  language?: InterfaceLanguage;
}): Promise<GeneratedExercise> {
  const { generateStructuredJSON } = await import("@/server/ai/orchestrator");

  const typeDescriptions: Record<ExerciseType, string> = {
    multiple_choice:
      "Multiple choice: provide a question, 4 options (one correct), and the correct answer.",
    fill_blank:
      "Fill in the blank: provide a Spanish sentence with '___' as the blank, the correct word to fill in, and 1-2 acceptable alternatives.",
    translation:
      "Translation: provide a sentence in the learner's interface language and its Spanish translation as the answer.",
    error_correction:
      "Error correction: provide a Spanish sentence containing ONE grammar error. The answer is the corrected sentence.",
    sentence_building:
      "Provide 5-6 jumbled words; the answer is the correct Spanish sentence they form.",
  };

  const langName =
    input.language === "ru" ? "Russian" : input.language === "es" ? "Spanish" : "English";

  const prompt = `You are a Spanish language exercise generator for CEFR level ${input.level}.
Create ONE ${typeDescriptions[input.type]}
${input.topic ? `Topic: ${input.topic}.` : ""}
For translation exercises, the source sentence must be in ${langName}.

Respond ONLY with valid JSON in this exact shape (no markdown, no commentary):
{
  "type": "${input.type}",
  "level": "${input.level}",
  "question": "...",
  "instruction": "short instruction in ${langName}",
  "options": ["opt1","opt2","opt3","opt4"],
  "answer": "the correct answer",
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

  return data;
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
