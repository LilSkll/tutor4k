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
  readonly name: "groq" | "deepseek" | "gemini";
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

// ----- Groq adapter (multi-key round-robin) ------------------------

export class GroqProvider implements AIProvider {
  readonly name = "groq" as const;

  private readonly apiKeys: string[];
  private keyIndex = 0;

  constructor(
    apiKeys: string | string[],
    private readonly model = "llama-3.3-70b-versatile",
  ) {
    this.apiKeys = Array.isArray(apiKeys)
      ? apiKeys.filter(Boolean)
      : apiKeys
        ? [apiKeys]
        : [];
  }

  isAvailable(): boolean {
    return this.apiKeys.length > 0;
  }

  /** Pick the next key (round-robin) for load balancing. */
  private nextKey(): string {
    const key = this.apiKeys[this.keyIndex % this.apiKeys.length];
    this.keyIndex++;
    return key;
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

    // Try every key in turn. If a key hits 429 (rate limit) we rotate to
    // the next one immediately; only after all keys fail do we throw.
    let lastError: Error | undefined;

    for (let attempt = 0; attempt < this.apiKeys.length; attempt++) {
      const apiKey = this.nextKey();

      let res: Response;
      try {
        res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: this.model,
            messages,
            temperature: options.temperature ?? 0.7,
            max_tokens: options.maxTokens ?? 1024,
          }),
        });
      } catch (err) {
        lastError = new RetryableAIError(
          `Groq network error: ${(err as Error).message}`,
        );
        continue; // try next key
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        const errMsg = `Groq ${res.status}: ${text.slice(0, 200)}`;

        // Rate limit or server error → rotate to the next key.
        if (res.status === 429 || res.status >= 500) {
          lastError = new RetryableAIError(errMsg, res.status);
          continue; // try the next key before giving up
        }

        // Fatal (auth, bad request) → don't try other keys, they'd fail too.
        throw new FatalAIError(errMsg, res.status);
      }

      const data = await res.json();
      const content: string = data?.choices?.[0]?.message?.content ?? "";
      if (!content) {
        lastError = new RetryableAIError("Groq returned empty content");
        continue;
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

    // All keys exhausted.
    throw (
      lastError ??
      new RetryableAIError("All Groq API keys exhausted")
    );
  }
}

// ----- DeepSeek adapter (OpenAI-compatible) -------------------------

export class DeepSeekProvider implements AIProvider {
  readonly name = "deepseek" as const;

  constructor(
    private readonly apiKey: string,
    private readonly model = "deepseek-v4-flash",
  ) {}

  isAvailable(): boolean {
    return Boolean(this.apiKey);
  }

  async complete(options: ProviderCallOptions): Promise<AIResponse> {
    if (!this.isAvailable()) {
      throw new FatalAIError("DeepSeek API key not configured");
    }

    const messages = [
      ...(options.systemPrompt
        ? [{ role: "system", content: options.systemPrompt }]
        : []),
      ...options.messages,
    ];

    let res: Response;
    try {
      res = await fetch("https://api.deepseek.com/chat/completions", {
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
          // Tutor replies need `content`, not chain-of-thought.
          // Thinking is on by default for v4-flash and can exhaust max_tokens.
          thinking: { type: "disabled" },
        }),
      });
    } catch (err) {
      throw new RetryableAIError(
        `DeepSeek network error: ${(err as Error).message}`,
      );
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const errMsg = `DeepSeek ${res.status}: ${text.slice(0, 200)}`;
      if (classifyStatus(res.status)) {
        throw new RetryableAIError(errMsg, res.status);
      }
      throw new FatalAIError(errMsg, res.status);
    }

    const data = await res.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "";
    if (!content) {
      throw new RetryableAIError("DeepSeek returned empty content");
    }

    return {
      content,
      provider: "deepseek",
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
