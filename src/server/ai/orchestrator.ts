import type {
  AIGenerateOptions,
  AIResponse,
  AIMessage,
  InterfaceLanguage,
  Level,
} from "@/types";
import {
  FatalAIError,
  DeepSeekProvider,
  GeminiProvider,
  GroqProvider,
  type AIProvider,
  type ProviderCallOptions,
} from "@/server/ai/providers";
import { getCourse } from "@/config/courses";
import { isOffTopicForCourse } from "@/server/ai/prompts/domain-guard";
import { getOffTopicRefusal } from "@/server/ai/prompts/refusals";
import { scrubSpanishImperativoLeaks } from "@/server/ai/scrub-conjugation-leaks";
import { scrubScriptLeaks } from "@/server/ai/scrub-script-leaks";
import { getInterfaceLanguageName } from "@/server/ai/prompts/interface-language";
import {
  estimateCostUsd,
  recordAiMetric,
  type AiOperation,
} from "@/lib/ai-metrics";

// =====================================================================
// AI Orchestrator
// ---------------------------------------------------------------------
// 1. Domain guard — course-specific keywords from CourseConfig.
// 2. System prompt — CourseConfig.buildPrompt() per active course.
// 3. Provider chain — Groq first, Gemini fallback.
// =====================================================================

const MAX_RETRIES = 2;
const INITIAL_BACKOFF_MS = 500;

function buildProviderChain(): AIProvider[] {
  const groqKeys = [
    process.env.GROQ_API_KEY,
    process.env.GROQ_API_KEY_2,
    process.env.GROQ_API_KEY_3,
  ].filter(Boolean) as string[];

  // Groq (free/fast) → DeepSeek (paid reliable) → Gemini (optional).
  const groq = new GroqProvider(
    groqKeys,
    process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  );
  const deepseek = new DeepSeekProvider(
    process.env.DEEPSEEK_API_KEY ?? "",
    process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
  );
  const gemini = new GeminiProvider(
    process.env.GEMINI_API_KEY ?? "",
    process.env.GEMINI_MODEL || "gemini-1.5-flash",
  );
  return [groq, deepseek, gemini].filter((p) => p.isAvailable());
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callWithRetry(
  provider: AIProvider,
  options: ProviderCallOptions,
): Promise<AIResponse> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await provider.complete(options);
    } catch (err) {
      lastError = err as Error;
      if (err instanceof FatalAIError) throw err;
      if (attempt < MAX_RETRIES) {
        const backoff = INITIAL_BACKOFF_MS * 2 ** attempt;
        const jitter = backoff * (0.8 + Math.random() * 0.4);
        await sleep(jitter);
      }
    }
  }

  throw lastError ?? new Error(`Provider ${provider.name} failed`);
}

async function buildSystemPromptForCourse(
  courseId: string,
  options: {
    level?: Level | null;
    interfaceLanguage?: InterfaceLanguage;
    userName?: string | null;
    retrievedContext?: string | null;
    learnerContext?: string | null;
  },
): Promise<string> {
  const course = await getCourse(courseId);
  return course.buildPrompt({
    level: options.level,
    interfaceLanguage: options.interfaceLanguage,
    userName: options.userName,
    retrievedContext: options.retrievedContext,
    learnerContext: options.learnerContext,
  });
}

export async function generateAIResponse(
  options: AIGenerateOptions,
): Promise<AIResponse> {
  const {
    messages,
    level,
    temperature,
    maxTokens,
    skipGuard = false,
    interfaceLanguage,
    language,
    userName,
    retrievedContext,
    learnerContext,
    courseId = "spanish",
    groundedToLesson = false,
    metricOp = "tutor",
  } = options;

  const resolvedLanguage: InterfaceLanguage =
    interfaceLanguage ?? language ?? "ru";

  const course = await getCourse(courseId);

  // Build TeacherContext before every personalized reply (unless caller supplied one).
  let resolvedLearnerContext = learnerContext ?? null;
  if (learnerContext === undefined) {
    try {
      const { buildTeacherContext } = await import(
        "@/server/ai/learner-context"
      );
      const teacher = await buildTeacherContext({
        courseId: courseId ?? "spanish",
        interfaceLanguage: resolvedLanguage,
        level: level ?? null,
      });
      resolvedLearnerContext = teacher.promptBlock;
    } catch (err) {
      console.warn(
        "[orchestrator] TeacherContext failed:",
        (err as Error).message,
      );
      resolvedLearnerContext = null;
    }
  }

  const lastUserMessage = [...messages]
    .reverse()
    .find((m) => m.role === "user");
  const lastAssistantMessage = [...messages]
    .reverse()
    .find((m) => m.role === "assistant");

  if (
    !skipGuard &&
    lastUserMessage &&
    isOffTopicForCourse(lastUserMessage.content, course.keywords, {
      priorAssistantContent: lastAssistantMessage?.content ?? null,
      groundedToLesson,
    })
  ) {
    recordAiMetric({
      op: metricOp,
      provider: "guard",
      model: "guard",
      ok: true,
      latencyMs: 0,
      courseId: courseId ?? undefined,
    });
    return {
      content: getOffTopicRefusal(course.titleNative, resolvedLanguage),
      provider: "groq",
      model: "guard",
      refused: true,
    };
  }

  const systemPrompt = await buildSystemPromptForCourse(courseId ?? "spanish", {
    level,
    interfaceLanguage: resolvedLanguage,
    userName,
    retrievedContext,
    learnerContext: resolvedLearnerContext,
  });

  const providerOptions: ProviderCallOptions = {
    messages,
    temperature,
    maxTokens,
    systemPrompt,
  };

  const chain = buildProviderChain();

  if (chain.length === 0) {
    return {
      content:
        resolvedLanguage === "ru"
          ? "⚠️ ИИ-сервис не настроен. Укажите GROQ_API_KEY или DEEPSEEK_API_KEY в переменных окружения."
          : resolvedLanguage === "es"
            ? "⚠️ El servicio de IA no está configurado. Define GROQ_API_KEY o DEEPSEEK_API_KEY en las variables de entorno."
            : resolvedLanguage === "de"
              ? "⚠️ KI-Dienst ist nicht konfiguriert. Setze GROQ_API_KEY oder DEEPSEEK_API_KEY in den Umgebungsvariablen."
              : "⚠️ AI service is not configured. Set GROQ_API_KEY or DEEPSEEK_API_KEY in the environment variables.",
      provider: "groq",
      model: "none",
    };
  }

  const errors: string[] = [];
  const started = Date.now();
  const op: AiOperation = metricOp;

  for (const provider of chain) {
    const attemptStarted = Date.now();
    try {
      const result = await callWithRetry(provider, providerOptions);
      let content = scrubScriptLeaks(result.content, resolvedLanguage);
      if (courseId === "spanish") {
        content = scrubSpanishImperativoLeaks(content);
      }
      const promptTokens = result.usage?.promptTokens;
      const completionTokens = result.usage?.completionTokens;
      recordAiMetric({
        op,
        provider: result.provider,
        model: result.model,
        ok: true,
        latencyMs: Date.now() - started,
        promptTokens,
        completionTokens,
        costUsd: estimateCostUsd({
          model: result.model,
          promptTokens,
          completionTokens,
        }),
        courseId: courseId ?? undefined,
      });
      return {
        ...result,
        content,
      };
    } catch (err) {
      errors.push(`${provider.name}: ${(err as Error).message}`);
      const status = err instanceof Error ? err.message.match(/\b([45]\d\d)\b/)?.[1] : undefined;
      recordAiMetric({
        op,
        provider: provider.name,
        model: "unavailable",
        ok: false,
        latencyMs: Date.now() - attemptStarted,
        errorCode: status ? `http_${status}` : "provider_error",
        courseId: courseId ?? undefined,
      });
    }
  }

  const fallbackMessage =
    resolvedLanguage === "ru"
      ? "😔 Извините, я не смог обработать ваш запрос. Попробуйте ещё раз через минуту."
      : resolvedLanguage === "es"
        ? "😔 Lo siento, no pude procesar tu solicitud. Inténtalo de nuevo en un minuto."
        : resolvedLanguage === "de"
          ? "😔 Entschuldigung, ich konnte deine Anfrage nicht verarbeiten. Bitte versuche es in einer Minute erneut."
          : "😔 Sorry, I couldn't process your request. Please try again in a minute.";

  console.error("[orchestrator] All providers failed:", errors);
  recordAiMetric({
    op,
    provider: chain[0]?.name,
    model: "unavailable",
    ok: false,
    latencyMs: Date.now() - started,
    errorCode: "all_providers_failed",
    courseId: courseId ?? undefined,
  });

  return {
    content: fallbackMessage,
    provider: chain[0].name,
    model: "unavailable",
  };
}

/**
 * Call the provider chain with an explicit system prompt (Teacher Studio coach, etc.).
 * Does not attach the student tutor course prompt or domain guard.
 */
export async function generateWithSystemPrompt(options: {
  systemPrompt: string;
  messages: AIMessage[];
  temperature?: number;
  maxTokens?: number;
  interfaceLanguage?: InterfaceLanguage;
}): Promise<AIResponse> {
  const resolvedLanguage: InterfaceLanguage =
    options.interfaceLanguage ?? "en";
  const languageLock = `\n\nLANGUAGE LOCK: Write the entire reply in ${getInterfaceLanguageName(resolvedLanguage)}. Do not switch language.`;
  const providerOptions: ProviderCallOptions = {
    messages: options.messages,
    temperature: options.temperature ?? 0.4,
    maxTokens: options.maxTokens ?? 1200,
    systemPrompt: `${options.systemPrompt}${languageLock}`,
  };

  const chain = buildProviderChain();
  if (chain.length === 0) {
    return {
      content:
        resolvedLanguage === "ru"
          ? "⚠️ ИИ-сервис не настроен."
          : resolvedLanguage === "es"
            ? "⚠️ El servicio de IA no está configurado."
            : resolvedLanguage === "de"
              ? "⚠️ KI-Dienst ist nicht konfiguriert."
              : "⚠️ AI service is not configured.",
      provider: "groq",
      model: "none",
    };
  }

  const errors: string[] = [];
  const started = Date.now();
  for (const provider of chain) {
    try {
      const result = await callWithRetry(provider, providerOptions);
      const promptTokens = result.usage?.promptTokens;
      const completionTokens = result.usage?.completionTokens;
      recordAiMetric({
        op: "teacher_coach",
        provider: result.provider,
        model: result.model,
        ok: true,
        latencyMs: Date.now() - started,
        promptTokens,
        completionTokens,
        costUsd: estimateCostUsd({
          model: result.model,
          promptTokens,
          completionTokens,
        }),
      });
      return {
        ...result,
        content: scrubScriptLeaks(result.content, resolvedLanguage),
      };
    } catch (err) {
      errors.push(`${provider.name}: ${(err as Error).message}`);
    }
  }

  console.error("[orchestrator] custom system prompt failed:", errors);
  recordAiMetric({
    op: "teacher_coach",
    provider: chain[0]?.name,
    model: "unavailable",
    ok: false,
    latencyMs: Date.now() - started,
    errorCode: "all_providers_failed",
  });
  return {
    content:
      resolvedLanguage === "ru"
        ? "Не удалось сгенерировать анализ. Попробуйте позже."
        : resolvedLanguage === "es"
          ? "No se pudo generar el análisis. Inténtalo más tarde."
          : resolvedLanguage === "de"
            ? "Analyse konnte nicht erstellt werden. Bitte später erneut versuchen."
            : "Could not generate the analysis. Please try again later.",
    provider: chain[0]!.name,
    model: "unavailable",
  };
}

export async function generateStructuredJSON<T>(
  messages: AIMessage[],
  opts?: {
    level?: Level | null;
    temperature?: number;
    interfaceLanguage?: InterfaceLanguage;
    /** @deprecated Use interfaceLanguage. */
    language?: InterfaceLanguage;
    retrievedContext?: string | null;
    learnerContext?: string | null;
    courseId?: string | null;
    metricOp?: AIGenerateOptions["metricOp"];
  },
): Promise<T> {
  const response = await generateAIResponse({
    messages,
    level: opts?.level,
    temperature: opts?.temperature ?? 0.5,
    maxTokens: 1500,
    skipGuard: true,
    interfaceLanguage: opts?.interfaceLanguage ?? opts?.language,
    retrievedContext: opts?.retrievedContext,
    learnerContext: opts?.learnerContext,
    courseId: opts?.courseId ?? "spanish",
    metricOp: opts?.metricOp ?? "structured_json",
  });

  const jsonMatch = response.content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Model did not return valid JSON");
  }
  return JSON.parse(jsonMatch[0]) as T;
}
