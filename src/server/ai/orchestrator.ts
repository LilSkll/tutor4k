import type {
  AIGenerateOptions,
  AIResponse,
  AIMessage,
  InterfaceLanguage,
  Level,
} from "@/types";
import {
  buildSystemPrompt,
  isOffTopic,
  OFF_TOPIC_REFUSALS,
} from "@/server/ai/spanish-tutor-system-prompt";
import {
  FatalAIError,
  GeminiProvider,
  GroqProvider,
  type AIProvider,
  type ProviderCallOptions,
} from "@/server/ai/providers";

// =====================================================================
// AI Orchestrator
// ---------------------------------------------------------------------
// Responsibilities:
//   1. Domain guard — refuse off-topic questions before any model call.
//   2. Provider chain — try Groq first, fall back to Gemini.
//   3. Retry — exponential backoff for transient errors.
//   4. Normalized output — every code path returns a single AIResponse.
// =====================================================================

const MAX_RETRIES = 2;
const INITIAL_BACKOFF_MS = 500;

/**
 * Build the provider chain from environment variables.
 * Groq is the primary model; Gemini is the fallback.
 */
function buildProviderChain(): AIProvider[] {
  // Collect ALL available Groq keys (GROQ_API_KEY, GROQ_API_KEY_2, ...) for
  // round-robin load balancing. Three keys ≈ 3× the free-tier rate limit.
  const groqKeys = [
    process.env.GROQ_API_KEY,
    process.env.GROQ_API_KEY_2,
    process.env.GROQ_API_KEY_3,
  ].filter(Boolean) as string[];

  const groq = new GroqProvider(
    groqKeys,
    process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  );
  const gemini = new GeminiProvider(
    process.env.GEMINI_API_KEY ?? "",
    process.env.GEMINI_MODEL || "gemini-1.5-flash",
  );
  return [groq, gemini].filter((p) => p.isAvailable());
}

/** Sleep helper for backoff. */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Run a single provider with retry on transient errors.
 * Fatal errors propagate immediately.
 */
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

      if (err instanceof FatalAIError) {
        // Don't retry auth / bad-request errors.
        throw err;
      }

      if (attempt < MAX_RETRIES) {
        const backoff = INITIAL_BACKOFF_MS * 2 ** attempt;
        // Add small jitter (±20%).
        const jitter = backoff * (0.8 + Math.random() * 0.4);
        await sleep(jitter);
        continue;
      }
    }
  }

  throw lastError ?? new Error(`Provider ${provider.name} failed`);
}

/**
 * Main entry point: generate a tutor response.
 *
 * Flow:
 *   1. (unless skipGuard) refuse off-topic questions.
 *   2. Inject the Spanish-tutor system prompt.
 *   3. Try providers in order; retry transient errors; fall back.
 *   4. On total failure, return a graceful offline message.
 */
export async function generateAIResponse(
  options: AIGenerateOptions & {
    language?: InterfaceLanguage;
    userName?: string | null;
    retrievedContext?: string | null;
  },
): Promise<AIResponse> {
  const {
    messages,
    level,
    temperature,
    maxTokens,
    skipGuard = false,
    language = "ru",
    userName,
    retrievedContext,
  } = options;

  // --- 1. Domain guard -------------------------------------------------
  const lastUserMessage = [...messages]
    .reverse()
    .find((m) => m.role === "user");

  if (!skipGuard && lastUserMessage && isOffTopic(lastUserMessage.content)) {
    return {
      content: OFF_TOPIC_REFUSALS[language],
      provider: "groq",
      model: "guard",
      refused: true,
    };
  }

  // --- 2. System prompt ------------------------------------------------
  const systemPrompt = buildSystemPrompt({
    level,
    language,
    userName,
    retrievedContext,
  });

  const providerOptions: ProviderCallOptions = {
    messages,
    temperature,
    maxTokens,
    systemPrompt,
  };

  // --- 3. Provider chain with fallback ---------------------------------
  const chain = buildProviderChain();

  if (chain.length === 0) {
    return {
      content:
        language === "ru"
          ? "⚠️ ИИ-сервис не настроен. Укажите GROQ_API_KEY или GEMINI_API_KEY в переменных окружения."
          : language === "es"
            ? "⚠️ El servicio de IA no está configurado. Define GROQ_API_KEY o GEMINI_API_KEY en las variables de entorno."
            : "⚠️ AI service is not configured. Set GROQ_API_KEY or GEMINI_API_KEY in the environment variables.",
      provider: "groq",
      model: "none",
    };
  }

  const errors: string[] = [];

  for (const provider of chain) {
    try {
      const response = await callWithRetry(provider, providerOptions);
      return response;
    } catch (err) {
      errors.push(`${provider.name}: ${(err as Error).message}`);
      // Continue to next provider.
    }
  }

  // --- 4. All providers failed ----------------------------------------
  const fallbackMessage =
    language === "ru"
      ? "😔 Извините, я не смог обработать ваш запрос. Попробуйте ещё раз через минуту."
      : language === "es"
        ? "😔 Lo siento, no pude procesar tu solicitud. Inténtalo de nuevo en un minuto."
        : "😔 Sorry, I couldn't process your request. Please try again in a minute.";

  console.error("[orchestrator] All providers failed:", errors);

  return {
    content: fallbackMessage,
    provider: chain[0].name,
    model: "unavailable",
  };
}

/**
 * Low-level structured generation: ask the model to return JSON only.
 * Used by the exercises service. Always uses skipGuard because the
 * caller controls the prompt.
 */
export async function generateStructuredJSON<T>(
  messages: AIMessage[],
  opts?: {
    level?: Level | null;
    temperature?: number;
    language?: InterfaceLanguage;
    retrievedContext?: string | null;
  },
): Promise<T> {
  const response = await generateAIResponse({
    messages,
    level: opts?.level,
    temperature: opts?.temperature ?? 0.5,
    maxTokens: 1500,
    skipGuard: true,
    language: opts?.language,
    retrievedContext: opts?.retrievedContext,
  });

  // Extract the first JSON object from the response.
  const jsonMatch = response.content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Model did not return valid JSON");
  }
  return JSON.parse(jsonMatch[0]) as T;
}
