/**
 * Lightweight AI operation observability.
 * Logs structured metrics only — never prompts, answers, emails, or API keys.
 */

export type AiOperation =
  | "tutor"
  | "tutor_cache"
  | "exercise_check"
  | "exercise_generate"
  | "teacher_coach"
  | "writing_assist"
  | "structured_json"
  | "other";

export type AiMetricEvent = {
  op: AiOperation;
  provider?: string;
  model?: string;
  ok: boolean;
  latencyMs: number;
  /** Estimated USD cost when token usage is known; else omitted. */
  costUsd?: number;
  promptTokens?: number;
  completionTokens?: number;
  errorCode?: string;
  courseId?: string;
};

/** Rough public list prices (USD / 1M tokens). Update when providers change. */
const PRICE_PER_MTOK: Record<
  string,
  { in: number; out: number }
> = {
  // Groq Llama 3.3 70B (approx; free tier often $0 — still track usage)
  "llama-3.3-70b-versatile": { in: 0.59, out: 0.79 },
  "deepseek-v4-flash": { in: 0.14, out: 0.28 },
  "deepseek-chat": { in: 0.14, out: 0.28 },
  "gemini-1.5-flash": { in: 0.075, out: 0.3 },
  "gemini-2.0-flash": { in: 0.1, out: 0.4 },
};

export function estimateCostUsd(input: {
  model?: string;
  promptTokens?: number;
  completionTokens?: number;
}): number | undefined {
  const model = input.model ?? "";
  const price = PRICE_PER_MTOK[model];
  if (!price) return undefined;
  const pin = input.promptTokens ?? 0;
  const pout = input.completionTokens ?? 0;
  if (pin <= 0 && pout <= 0) return undefined;
  return (pin * price.in + pout * price.out) / 1_000_000;
}

function sanitizeErrorCode(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  // Keep short status-ish codes; strip URLs / key-looking fragments.
  const status = msg.match(/\b([45]\d\d)\b/)?.[1];
  if (status) return `http_${status}`;
  if (/rate.?limit|429/i.test(msg)) return "rate_limit";
  if (/timeout|ETIMEDOUT|ABORT/i.test(msg)) return "timeout";
  if (/empty content/i.test(msg)) return "empty_content";
  if (/not configured|API key/i.test(msg)) return "not_configured";
  if (/JSON/i.test(msg)) return "invalid_json";
  return "provider_error";
}

/** Emit one metric line (stdout) + optional Sentry breadcrumb. */
export function recordAiMetric(event: AiMetricEvent): void {
  const payload = {
    type: "ai_metric",
    ts: new Date().toISOString(),
    op: event.op,
    provider: event.provider ?? null,
    model: event.model ?? null,
    ok: event.ok,
    latency_ms: Math.round(event.latencyMs),
    cost_usd:
      event.costUsd != null
        ? Number(event.costUsd.toFixed(6))
        : null,
    prompt_tokens: event.promptTokens ?? null,
    completion_tokens: event.completionTokens ?? null,
    error_code: event.errorCode ?? null,
    course_id: event.courseId ?? null,
  };

  if (event.ok) {
    console.info("[ai_metric]", JSON.stringify(payload));
  } else {
    console.warn("[ai_metric]", JSON.stringify(payload));
  }

  // Soft dependency — Sentry may be absent.
  void import("@sentry/nextjs")
    .then((Sentry) => {
      if (!Sentry?.addBreadcrumb) return;
      Sentry.addBreadcrumb({
        category: "ai",
        level: event.ok ? "info" : "warning",
        message: `ai:${event.op}`,
        data: payload,
      });
      if (!event.ok) {
        Sentry.captureMessage(`ai_op_failed:${event.op}`, {
          level: "warning",
          tags: {
            ai_op: event.op,
            ai_provider: event.provider ?? "none",
            ai_error: event.errorCode ?? "unknown",
          },
          extra: payload,
        });
      }
    })
    .catch(() => {
      /* Sentry not installed / not initialized */
    });
}

export async function withAiMetric<T>(
  meta: {
    op: AiOperation;
    courseId?: string;
    provider?: string;
    model?: string;
  },
  run: () => Promise<T>,
  extract?: (result: T) => {
    provider?: string;
    model?: string;
    promptTokens?: number;
    completionTokens?: number;
  },
): Promise<T> {
  const started = Date.now();
  try {
    const result = await run();
    const usage = extract?.(result);
    const promptTokens = usage?.promptTokens;
    const completionTokens = usage?.completionTokens;
    const model = usage?.model ?? meta.model;
    recordAiMetric({
      op: meta.op,
      provider: usage?.provider ?? meta.provider,
      model,
      ok: true,
      latencyMs: Date.now() - started,
      promptTokens,
      completionTokens,
      costUsd: estimateCostUsd({ model, promptTokens, completionTokens }),
      courseId: meta.courseId,
    });
    return result;
  } catch (err) {
    recordAiMetric({
      op: meta.op,
      provider: meta.provider,
      model: meta.model,
      ok: false,
      latencyMs: Date.now() - started,
      errorCode: sanitizeErrorCode(err),
      courseId: meta.courseId,
    });
    throw err;
  }
}
