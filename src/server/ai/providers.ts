import type { AIMessage, AIResponse } from "@/types";

// =====================================================================
// Provider adapters
// ---------------------------------------------------------------------
// Each provider implements the same interface: given messages + options,
// return a normalized AIResponse. The orchestrator then handles retry and
// fallback across providers.
// =====================================================================

export interface ProviderCallOptions {
  messages: AIMessage[];
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
}

export interface AIProvider {
  readonly name: "groq" | "gemini";
  /** Returns true if this provider is configured (has API key). */
  isAvailable(): boolean;
  /** Send the completion request. Throws on transport / API error. */
  complete(options: ProviderCallOptions): Promise<AIResponse>;
}

// ----- Errors --------------------------------------------------------

/** Retryable error (network, 429, 5xx). */
export class RetryableAIError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "RetryableAIError";
  }
}

/** Fatal error (auth, bad request) — do not retry. */
export class FatalAIError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "FatalAIError";
  }
}

function classifyStatus(status: number | undefined): boolean {
  // Retry on 429 (rate limit), 408 (timeout), 5xx (server).
  if (status === undefined) return true; // network error
  return status === 429 || status === 408 || status >= 500;
}

// ----- Groq adapter --------------------------------------------------

export class GroqProvider implements AIProvider {
  readonly name = "groq" as const;

  constructor(
    private readonly apiKey: string,
    private readonly model = "llama-3.3-70b-versatile",
  ) {}

  isAvailable(): boolean {
    return Boolean(this.apiKey);
  }

  async complete(options: ProviderCallOptions): Promise<AIResponse> {
    if (!this.isAvailable()) {
      throw new FatalAIError("Groq API key not configured");
    }

    const messages = [
      ...(options.systemPrompt
        ? [{ role: "system", content: options.systemPrompt }]
        : []),
      ...options.messages,
    ];

    let res: Response;
    try {
      res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 1024,
        }),
      });
    } catch (err) {
      throw new RetryableAIError(
        `Groq network error: ${(err as Error).message}`,
      );
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const err = new Error(`Groq ${res.status}: ${text.slice(0, 200)}`);
      if (classifyStatus(res.status)) {
        throw new RetryableAIError(err.message, res.status);
      }
      throw new FatalAIError(err.message, res.status);
    }

    const data = await res.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "";
    if (!content) {
      throw new RetryableAIError("Groq returned empty content");
    }

    return {
      content,
      provider: "groq",
      model: this.model,
      usage: {
        promptTokens: data?.usage?.prompt_tokens,
        completionTokens: data?.usage?.completion_tokens,
      },
    };
  }
}

// ----- Gemini adapter ------------------------------------------------

export class GeminiProvider implements AIProvider {
  readonly name = "gemini" as const;

  constructor(
    private readonly apiKey: string,
    private readonly model = "gemini-1.5-flash",
  ) {}

  isAvailable(): boolean {
    return Boolean(this.apiKey);
  }

  async complete(options: ProviderCallOptions): Promise<AIResponse> {
    if (!this.isAvailable()) {
      throw new FatalAIError("Gemini API key not configured");
    }

    // Gemini expects `contents` with alternating user/model roles.
    const systemInstruction = options.systemPrompt
      ? { parts: [{ text: options.systemPrompt }] }
      : undefined;

    const contents = options.messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          ...(systemInstruction ? { systemInstruction } : {}),
          generationConfig: {
            temperature: options.temperature ?? 0.7,
            maxOutputTokens: options.maxTokens ?? 1024,
          },
        }),
      });
    } catch (err) {
      throw new RetryableAIError(
        `Gemini network error: ${(err as Error).message}`,
      );
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const err = new Error(`Gemini ${res.status}: ${text.slice(0, 200)}`);
      if (classifyStatus(res.status)) {
        throw new RetryableAIError(err.message, res.status);
      }
      throw new FatalAIError(err.message, res.status);
    }

    const data = await res.json();
    const content: string =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p.text ?? "")
        .join("") ?? "";

    if (!content) {
      throw new RetryableAIError("Gemini returned empty content");
    }

    return {
      content,
      provider: "gemini",
      model: this.model,
      usage: {
        promptTokens: data?.usageMetadata?.promptTokenCount,
        completionTokens: data?.usageMetadata?.candidatesTokenCount,
      },
    };
  }
}
