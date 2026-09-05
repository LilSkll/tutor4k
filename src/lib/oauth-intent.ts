import type { NextResponse } from "next/server";
import type { UserRole } from "@/types";

/** Short-lived cookie: role + consent chosen before Google OAuth redirect. */
export const OAUTH_INTENT_COOKIE = "swp_oauth_intent";
const MAX_AGE_SEC = 10 * 60;

export type OAuthIntent = {
  mode: "signin" | "signup";
  role: "student" | "teacher";
  teacherConfirm: boolean;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  marketingConsent: boolean;
  /** Safe in-app path after login (optional). */
  next: string | null;
};

export function encodeOAuthIntent(intent: OAuthIntent): string {
  return Buffer.from(JSON.stringify(intent), "utf8").toString("base64url");
}

export function decodeOAuthIntent(raw: string | undefined | null): OAuthIntent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(
      Buffer.from(raw, "base64url").toString("utf8"),
    ) as Partial<OAuthIntent>;
    if (parsed.mode !== "signin" && parsed.mode !== "signup") return null;
    const role: "student" | "teacher" =
      parsed.role === "teacher" ? "teacher" : "student";
    const next =
      typeof parsed.next === "string" &&
      parsed.next.startsWith("/") &&
      !parsed.next.startsWith("//")
        ? parsed.next
        : null;
    return {
      mode: parsed.mode,
      role,
      teacherConfirm: Boolean(parsed.teacherConfirm),
      acceptTerms: Boolean(parsed.acceptTerms),
      acceptPrivacy: Boolean(parsed.acceptPrivacy),
      marketingConsent: Boolean(parsed.marketingConsent),
      next,
    };
  } catch {
    return null;
  }
}

export function setOAuthIntentCookie(
  res: NextResponse,
  intent: OAuthIntent,
): void {
  res.cookies.set(OAUTH_INTENT_COOKIE, encodeOAuthIntent(intent), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SEC,
  });
}

export function clearOAuthIntentCookie(res: NextResponse): void {
  res.cookies.set(OAUTH_INTENT_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/** Teacher Studio only if signup + teacher + confirm checkbox. */
export function resolveOAuthSignupRole(intent: OAuthIntent): UserRole {
  if (
    intent.mode === "signup" &&
    intent.role === "teacher" &&
    intent.teacherConfirm
  ) {
    return "teacher";
  }
  return "student";
}
