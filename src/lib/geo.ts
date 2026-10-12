import { headers } from "next/headers";

/**
 * Best-effort client country (ISO 3166-1 alpha-2).
 * On Vercel: `x-vercel-ip-country`. Cloudflare: `cf-ipcountry`.
 * Local / missing header → null (treat as non-RU so Google stays available in dev).
 *
 * Not legal advice — product gating only.
 */
export async function getRequestCountryCode(): Promise<string | null> {
  const h = await headers();
  const raw =
    h.get("x-vercel-ip-country") ||
    h.get("cf-ipcountry") ||
    h.get("x-country-code");
  const code = raw?.trim().toUpperCase() || null;
  if (!code || code === "XX" || code === "T1") return null;
  return code;
}

/** Google / Apple IdP entry should not be offered to RU traffic. */
export function isSocialOAuthAllowedForCountry(
  countryCode: string | null,
): boolean {
  if (process.env.FORCE_HIDE_SOCIAL_OAUTH === "1") return false;
  if (process.env.FORCE_SHOW_SOCIAL_OAUTH === "1") return true;
  if (!countryCode) return true;
  return countryCode !== "RU";
}
