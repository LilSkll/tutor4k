import { track as vercelTrack } from "@vercel/analytics";

// =====================================================================
// Vercel Web Analytics helpers
// ---------------------------------------------------------------------
// Pageviews are scrubbed of PII in <VercelAnalytics beforeSend>.
// Product events use track() with non-PII properties only.
// =====================================================================

/** Query keys that may carry auth tokens, emails, or other PII. */
const SENSITIVE_QUERY_KEYS = new Set([
  "code",
  "token",
  "access_token",
  "refresh_token",
  "id_token",
  "provider_token",
  "email",
  "error_description",
  "state",
  "nonce",
  "password",
  "hash",
  "otp",
  "magic_link",
  "confirmation_url",
]);

/**
 * Strip sensitive query params and hash fragments from a full URL
 * before it is sent to Vercel Analytics.
 */
export function scrubAnalyticsUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (
        SENSITIVE_QUERY_KEYS.has(key.toLowerCase()) ||
        /token|email|password|secret|auth/i.test(key)
      ) {
        url.searchParams.delete(key);
      }
    }
    return url.toString();
  } catch {
    // Relative / malformed — drop query + hash as a safe fallback.
    return rawUrl.split("#")[0].split("?")[0] ?? rawUrl;
  }
}

export type AnalyticsEvent =
  | "chapter_complete"
  | "easter_egg_found"
  | "dele_round_start"
  | "journey_reset";

/** Fire a custom event. Never pass emails, names, or tokens as properties. */
export function trackEvent(
  name: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | null>,
): void {
  try {
    vercelTrack(name, properties);
  } catch {
    // Analytics must never break the product UI.
  }
}
