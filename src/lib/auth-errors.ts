/**
 * Auth error codes for URL redirects. Login/signup UI localizes via auth dicts.
 * Keep codes stable — they appear in ?error= query strings.
 */

export const AUTH_ERROR_CODES = [
  "auth.error.genericMail",
  "auth.error.smtp500",
  "auth.error.emailNotAuthorized",
  "auth.error.redirectNotAllowed",
  "auth.error.smtp",
  "auth.error.emailRateLimit",
  "auth.error.rateLimit",
  "auth.error.alreadyRegistered",
  "auth.error.alreadyRegisteredAlt",
  "auth.error.invalidCredentials",
  "auth.error.emailNotConfirmed",
  "auth.error.weakPassword",
  "auth.error.shortPassword",
  "auth.error.samePassword",
  "auth.error.expiredToken",
  "auth.error.emailPasswordRequired",
  "auth.error.unknown",
] as const;

export type AuthErrorCode = (typeof AUTH_ERROR_CODES)[number];

const CODE_SET = new Set<string>(AUTH_ERROR_CODES);

export function isAuthErrorCode(value: string | undefined | null): value is AuthErrorCode {
  return Boolean(value && CODE_SET.has(value));
}

function extractAuthErrorMessage(error: unknown): string {
  if (!error) return "";
  if (typeof error === "string") return error;

  const e = error as {
    message?: unknown;
    code?: unknown;
    status?: unknown;
    error_description?: unknown;
    msg?: unknown;
  };

  if (typeof e.message === "string" && e.message.trim() && e.message !== "{}") {
    return e.message;
  }
  if (e.message && typeof e.message === "object") {
    try {
      const nested = JSON.stringify(e.message);
      if (nested && nested !== "{}") return nested;
    } catch {
      // ignore
    }
  }
  if (typeof e.error_description === "string" && e.error_description.trim()) {
    return e.error_description;
  }
  if (typeof e.msg === "string" && e.msg.trim()) return e.msg;
  if (typeof e.code === "string" && e.code) {
    return e.status ? `${e.code} (${e.status})` : e.code;
  }
  try {
    const raw = JSON.stringify(error);
    if (raw && raw !== "{}") return raw;
  } catch {
    // ignore
  }
  return "";
}

/**
 * Map Supabase / network auth failures to stable i18n keys (not localized prose).
 */
export function friendlyAuthErrorCode(errorOrMessage: unknown): AuthErrorCode {
  const message = extractAuthErrorMessage(errorOrMessage);
  const m = message.toLowerCase();

  if (!m) return "auth.error.genericMail";
  if (
    m.includes("authretryablefetcherror") ||
    m.includes('"status":500') ||
    m.includes('"status": 500') ||
    (typeof errorOrMessage === "object" &&
      errorOrMessage !== null &&
      (errorOrMessage as { status?: number }).status === 500)
  ) {
    return "auth.error.smtp500";
  }
  if (m.includes("not authorized") || m.includes("email address not authorized")) {
    return "auth.error.emailNotAuthorized";
  }
  if (m.includes("redirect") && (m.includes("allow") || m.includes("not"))) {
    return "auth.error.redirectNotAllowed";
  }
  if (m.includes("smtp") || m.includes("error sending") || m.includes("mail")) {
    return "auth.error.smtp";
  }
  if (m.includes("rate limit") && m.includes("email")) {
    return "auth.error.emailRateLimit";
  }
  if (m.includes("rate limit")) return "auth.error.rateLimit";
  if (m.includes("already") && m.includes("registered")) {
    return "auth.error.alreadyRegistered";
  }
  if (m.includes("already been registered")) {
    return "auth.error.alreadyRegisteredAlt";
  }
  if (m.includes("invalid login") || m.includes("invalid credentials")) {
    return "auth.error.invalidCredentials";
  }
  if (m.includes("email not confirmed")) return "auth.error.emailNotConfirmed";
  if (m.includes("password") && (m.includes("weak") || m.includes("short"))) {
    return "auth.error.weakPassword";
  }
  if (m.includes("password should be")) return "auth.error.shortPassword";
  if (m.includes("same password") || m.includes("different from the old")) {
    return "auth.error.samePassword";
  }
  if (m.includes("expired") || m.includes("otp") || m.includes("token")) {
    return "auth.error.expiredToken";
  }
  return "auth.error.unknown";
}
