import { afterEach, describe, expect, it, vi } from "vitest";
import {
  TUTOR_FETCH_MS,
  isAbortError,
  runExclusive,
  startTutorAbort,
} from "@/lib/tutor-fetch";

describe("timeout", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("aborts the tutor request after 25s", async () => {
    vi.useFakeTimers();
    const { signal, clear } = startTutorAbort();
    expect(signal.aborted).toBe(false);
    await vi.advanceTimersByTimeAsync(TUTOR_FETCH_MS);
    expect(signal.aborted).toBe(true);
    clear();
  });

  it("does not abort if cleared before the timeout", async () => {
    vi.useFakeTimers();
    const { signal, clear } = startTutorAbort();
    clear();
    await vi.advanceTimersByTimeAsync(TUTOR_FETCH_MS);
    expect(signal.aborted).toBe(false);
  });
});

describe("повторная отправка", () => {
  it("runs only the first in-flight request", async () => {
    const flag = { current: false };
    let runs = 0;
    const slow = async () => {
      await new Promise((r) => setTimeout(r, 20));
      runs += 1;
      return runs;
    };

    const first = runExclusive(flag, slow);
    const second = runExclusive(flag, slow);
    const [a, b] = await Promise.all([first, second]);

    expect(a).toBe(1);
    expect(b).toBeUndefined();
    expect(runs).toBe(1);
  });

  it("allows a second request after the first finishes", async () => {
    const flag = { current: false };
    await runExclusive(flag, async () => "one");
    const again = await runExclusive(flag, async () => "two");
    expect(again).toBe("two");
  });
});

describe("isAbortError", () => {
  it("treats AbortError and an already-aborted signal as abort", () => {
    const ac = new AbortController();
    ac.abort();
    const err = new Error("aborted");
    err.name = "AbortError";
    expect(isAbortError(err)).toBe(true);
    expect(isAbortError(new Error("fail"), ac.signal)).toBe(true);
    expect(isAbortError(new Error("fail"))).toBe(false);
  });
});
