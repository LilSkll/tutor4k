/**
 * Rate limiting for expensive API routes.
 *
 * Prefer Upstash Redis (shared across Vercel isolates). When
 * UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are unset or Redis
 * errors, fall back to an in-process sliding window.
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; remaining: 0; retryAfterSec: number };

type Bucket = { timestamps: number[] };

const memoryBuckets = new Map<string, Bucket>();
const MAX_KEYS = 20_000;
const upstashLimiters = new Map<string, Ratelimit>();

let redis: Redis | null | undefined;

function getRedis(): Redis | null {
  if (redis !== undefined) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) {
    redis = null;
    return redis;
  }
  try {
    redis = new Redis({ url, token });
  } catch (err) {
    console.warn("[rate-limit] Redis init failed:", (err as Error).message);
    redis = null;
  }
  return redis;
}

function getUpstashLimiter(limit: number, windowMs: number): Ratelimit | null {
  const client = getRedis();
  if (!client) return null;
  const key = `${limit}:${windowMs}`;
  let limiter = upstashLimiters.get(key);
  if (!limiter) {
    const windowSec = Math.max(1, Math.ceil(windowMs / 1000));
    limiter = new Ratelimit({
      redis: client,
      limiter: Ratelimit.slidingWindow(limit, `${windowSec} s`),
      prefix: "swp:rl",
      analytics: false,
    });
    upstashLimiters.set(key, limiter);
  }
  return limiter;
}

/** In-process fallback (single isolate only). */
export function checkMemoryRateLimit(
  key: string,
  opts: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - opts.windowMs;
  let bucket = memoryBuckets.get(key);
  if (!bucket) {
    bucket = { timestamps: [] };
    memoryBuckets.set(key, bucket);
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

  if (memoryBuckets.size > MAX_KEYS) {
    let i = 0;
    for (const k of memoryBuckets.keys()) {
      memoryBuckets.delete(k);
      if (++i >= Math.floor(MAX_KEYS * 0.1)) break;
    }
  }

  return {
    ok: true,
    remaining: Math.max(0, opts.limit - bucket.timestamps.length),
  };
}

export async function checkRateLimit(
  key: string,
  opts: { limit: number; windowMs: number },
): Promise<RateLimitResult> {
  const limiter = getUpstashLimiter(opts.limit, opts.windowMs);
  if (limiter) {
    try {
      const result = await limiter.limit(key);
      if (!result.success) {
        const retryAfterSec = Math.max(
          1,
          Math.ceil((result.reset - Date.now()) / 1000),
        );
        return { ok: false, remaining: 0, retryAfterSec };
      }
      return { ok: true, remaining: result.remaining };
    } catch (err) {
      console.warn(
        "[rate-limit] Upstash error, using memory fallback:",
        (err as Error).message,
      );
    }
  }

  return checkMemoryRateLimit(key, opts);
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
