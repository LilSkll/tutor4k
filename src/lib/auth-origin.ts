/**
 * Public origins allowed for auth email / OAuth redirects.
 * Must stay in sync with Supabase → Authentication → URL Configuration.
 */

const BUILTIN_AUTH_ORIGINS = [
  "https://spanishwithpavel.com",
  "https://www.spanishwithpavel.com",
  "https://spanishwithpavel.vercel.app",
  // Legacy Vercel alias (older docs / bookmarks).
  "https://spanish-tutor-psi.vercel.app",
] as const;

function normalizeOrigin(raw: string): string {
  return raw.trim().replace(/\/$/, "");
}

/** Origins from env (comma-separated) plus built-in production hosts. */
export function trustedAuthOrigins(): string[] {
  const fromEnv = (process.env.NEXT_PUBLIC_AUTH_ORIGINS ?? "")
    .split(",")
    .map(normalizeOrigin)
    .filter(Boolean);
  const merged = new Set<string>([...BUILTIN_AUTH_ORIGINS, ...fromEnv]);
  return [...merged];
}

export function isTrustedAuthOrigin(origin: string): boolean {
  const o = normalizeOrigin(origin);
  if (trustedAuthOrigins().includes(o)) return true;
  try {
    const { hostname, protocol } = new URL(o);
    if (protocol !== "http:" && protocol !== "https:") return false;
    if (hostname === "localhost" || hostname.endsWith(".localhost")) return true;
    // Vercel preview deployments for this project (PR previews).
    if (
      hostname.endsWith(".vercel.app") &&
      (hostname.startsWith("spanishwithpavel") ||
        hostname.startsWith("spanish-tutor") ||
        hostname.includes("spanish-tutor") ||
        hostname.includes("spanishwithpavel"))
    ) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

/**
 * Prefer the host the user is on so cookies match (.com vs vercel.app).
 * Falls back to SITE_URL / first trusted origin.
 */
export async function resolveAuthOrigin(): Promise<string> {
  const emailOverride = process.env.NEXT_PUBLIC_AUTH_EMAIL_ORIGIN?.replace(
    /\/$/,
    "",
  );
  if (emailOverride) return emailOverride;

  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    const hostHeader = h.get("x-forwarded-host") ?? h.get("host");
    const host = hostHeader?.split(",")[0]?.trim();
    if (host) {
      const protoHeader = h.get("x-forwarded-proto") ?? "https";
      const proto = protoHeader.split(",")[0]?.trim() || "https";
      const origin = `${proto}://${host}`;
      if (isTrustedAuthOrigin(origin)) return origin;
    }
  } catch {
    // ignore (non-request context)
  }

  const trusted = trustedAuthOrigins();
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv && isTrustedAuthOrigin(fromEnv)) return fromEnv;
  if (fromEnv) return fromEnv;
  if (trusted[0]) return trusted[0];
  return "http://localhost:3000";
}
