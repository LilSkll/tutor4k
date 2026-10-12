/**
 * Lightweight in-process sliding-window rate limiter.
 * Fine for a single Node/Vercel isolate; for multi-region deploy
 * pair with Redis/Upstash later — this still stops casual abuse.
 */

type Bucket = { timestamps: number[] };

const buckets = new Map<string, Bucket>();

const MAX_KEYS = 20_000;

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; remaining: 0; retryAfterSec: number };

export function checkRateLimit(
  key: string,
  opts: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - opts.windowMs;
  let bucket = buckets.get(key);
  if (!bucket) {
    bucket = { timestamps: [] };
    buckets.set(key, bucket);
  }

  bucket.timestamps = bucket.timestamps.filter((t) => t > windowStart);

  if (bucket.timestamps.length >= opts.limit) {
    const oldest = bucket.timestamps[0] ?? now;
    const retryAfterSec = Math.max(
      1,
      Math.ceil((oldest + opts.windowMs - now) / 1000),
    );
    return { ok: false, remaining: 0, retryAfterSec };
  }

  bucket.timestamps.push(now);

  if (buckets.size > MAX_KEYS) {
    // Drop oldest ~10% of keys (simple GC under flood).
    let i = 0;
    for (const k of buckets.keys()) {
      buckets.delete(k);
      if (++i >= Math.floor(MAX_KEYS * 0.1)) break;
    }
  }

  return {
    ok: true,
    remaining: Math.max(0, opts.limit - bucket.timestamps.length),
  };
}

export function rateLimitResponse(retryAfterSec: number): Response {
  return new Response(
    JSON.stringify({
      error: "Too many requests. Please slow down.",
      retryAfterSec,
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfterSec),
      },
    },
  );
}
