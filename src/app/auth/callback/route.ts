import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import {
  sessionLooksLikeRecovery,
  setRecoveryCookie,
} from "@/lib/auth-recovery";
import {
  clearOAuthIntentCookie,
  decodeOAuthIntent,
  OAUTH_INTENT_COOKIE,
  resolveOAuthSignupRole,
} from "@/lib/oauth-intent";
import { resolvePostLoginPath } from "@/lib/roles";
import type { UserRole } from "@/types";

/**
 * Supabase Auth redirect target (email confirm / password recovery / OAuth).
 * Supports PKCE `?code=` and older `?token_hash=&type=` links.
 * Recovery always wins over ?next= (teachers must reach the new-password form).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams, origin } = url;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const nextParam = searchParams.get("next");
  const jar = await cookies();
  const oauthIntent = decodeOAuthIntent(jar.get(OAUTH_INTENT_COOKIE)?.value);

  const supabase = await createSupabaseServerClient();

  const redirectTo = (path: string, markRecovery = false) => {
    const res = NextResponse.redirect(`${origin}${path}`);
    if (markRecovery) setRecoveryCookie(res);
    clearOAuthIntentCookie(res);
    return res;
  };

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return redirectTo(
        `/login?error=${encodeURIComponent(
          "Не удалось войти. Попробуйте ещё раз или используйте email.",
        )}`,
      );
    }

    const { data } = await supabase.auth.getSession();
    const isRecovery =
      type === "recovery" || sessionLooksLikeRecovery(data.session);

    if (isRecovery) {
      return redirectTo("/auth/reset-password", true);
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let role: UserRole = "student";
    if (user) {
      // Apply signup choices from Google/Apple flow (role + legal consent).
      if (oauthIntent?.mode === "signup") {
        const now = new Date().toISOString();
        const signupRole = resolveOAuthSignupRole(oauthIntent);
        if (oauthIntent.acceptTerms && oauthIntent.acceptPrivacy) {
          await supabase
            .from("profiles")
            .update({
              role: signupRole,
              ...(signupRole === "teacher" ? { onboarded: true } : {}),
              terms_accepted_at: now,
              privacy_accepted_at: now,
              marketing_consent: oauthIntent.marketingConsent,
              marketing_consent_at: oauthIntent.marketingConsent ? now : null,
            })
            .eq("id", user.id);
        }
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();
      role = ((profile as { role?: UserRole } | null)?.role ??
        "student") as UserRole;
    }

    const preferredNext =
      oauthIntent?.next ??
      (nextParam?.startsWith("/") && !nextParam.startsWith("//")
        ? nextParam
        : null);

    return redirectTo(resolvePostLoginPath(role, preferredNext));
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type: type as "recovery" | "signup" | "invite" | "magiclink" | "email",
      token_hash: tokenHash,
    });
    if (error) {
      return redirectTo(
        `/login?error=${encodeURIComponent("Ссылка устарела или уже использована.")}`,
      );
    }
    if (type === "recovery") {
      return redirectTo("/auth/reset-password", true);
    }
    if (nextParam?.startsWith("/") && !nextParam.startsWith("//")) {
      return redirectTo(nextParam);
    }
    return redirectTo("/dashboard");
  }

  return redirectTo(
    `/login?error=${encodeURIComponent("Некорректная ссылка входа.")}`,
  );
}
