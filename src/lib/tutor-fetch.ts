export const TUTOR_FETCH_MS = 25_000;

/** Claim a one-at-a-time lock. False if a request is already in flight. */
export function claimInFlight(flag: { current: boolean }): boolean {
  if (flag.current) return false;
  flag.current = true;
  return true;
}

export function releaseInFlight(flag: { current: boolean }): void {
  flag.current = false;
}

export async function runExclusive<T>(
  flag: { current: boolean },
  fn: () => Promise<T>,
): Promise<T | undefined> {
  if (!claimInFlight(flag)) return undefined;
  try {
    return await fn();
  } finally {
    releaseInFlight(flag);
  }
}

export function startTutorAbort(ms: number = TUTOR_FETCH_MS): {
  signal: AbortSignal;
  clear: () => void;
} {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), ms);
  return {
    signal: ac.signal,
    clear() {
      clearTimeout(timer);
    },
  };
}

export function isAbortError(err: unknown, signal?: AbortSignal): boolean {
  if (signal?.aborted) return true;
  return (
    typeof err === "object" &&
    err !== null &&
    "name" in err &&
    (err as { name: string }).name === "AbortError"
  );
}
