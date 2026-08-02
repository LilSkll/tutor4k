import { NextRequest, NextResponse } from "next/server";
import {
  setOAuthIntentCookie,
  type OAuthIntent,
} from "@/lib/oauth-intent";

/**
 * Stores signup/login choices before redirecting to Google/Apple.
 * Consumed once by /auth/callback after PKCE exchange.
 */
export async function POST(req: NextRequest) {
  let body: Partial<OAuthIntent>;
  try {
    body = (await req.json()) as Partial<OAuthIntent>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const mode = body.mode === "signup" ? "signup" : "signin";
  const role = body.role === "teacher" ? "teacher" : "student";
  const next =
    typeof body.next === "string" &&
    body.next.startsWith("/") &&
    !body.next.startsWith("//")
      ? body.next
      : null;

  if (mode === "signup") {
    if (!body.acceptTerms || !body.acceptPrivacy) {
      return NextResponse.json(
        { error: "consent_required" },
        { status: 400 },
      );
    }
    if (role === "teacher" && !body.teacherConfirm) {
      return NextResponse.json(
        { error: "teacher_confirm_required" },
        { status: 400 },
      );
    }
  }

  const intent: OAuthIntent = {
    mode,
    role,
    teacherConfirm: Boolean(body.teacherConfirm),
    acceptTerms: Boolean(body.acceptTerms),
    acceptPrivacy: Boolean(body.acceptPrivacy),
    marketingConsent: Boolean(body.marketingConsent),
    next,
  };

  const res = NextResponse.json({ ok: true });
  setOAuthIntentCookie(res, intent);
  return res;
}
