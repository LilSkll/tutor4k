import { afterEach, describe, expect, it } from "vitest";
import { checkMemoryRateLimit } from "./rate-limit";

afterEach(() => {
  // Isolate buckets between tests by using unique keys.
});

describe("checkMemoryRateLimit", () => {
  it("allows up to the limit then blocks", () => {
    const key = `test:${Date.now()}:${Math.random()}`;
    const opts = { limit: 2, windowMs: 60_000 };
    expect(checkMemoryRateLimit(key, opts).ok).toBe(true);
    expect(checkMemoryRateLimit(key, opts).ok).toBe(true);
    const blocked = checkMemoryRateLimit(key, opts);
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.retryAfterSec).toBeGreaterThan(0);
  });
});
