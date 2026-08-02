import { NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
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
import { sessionNeedsMfa } from "@/lib/auth-mfa";
import type { UserRole } from "@/types";

type CookieToSet = {
  name: string;
  value: string;
  options?: CookieOptions;
};

/**
 * Supabase Auth redirect target (email confirm / password recovery / OAuth).
 * Session cookies from exchangeCodeForSession MUST be copied onto the
 * redirect response — otherwise Google login looks successful but
 * the next request has no session.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams, origin } = url;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const nextParam = searchParams.get("next");
  const oauthError = searchParams.get("error");
  const oauthErrorDesc = searchParams.get("error_description");

  const jar = await cookies();
  const oauthIntent = decodeOAuthIntent(jar.get(OAUTH_INTENT_COOKIE)?.value);

  const pendingCookies: CookieToSet[] = [];

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return jar.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          pendingCookies.push(...cookiesToSet);
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              jar.set(name, value, options),
            );
          } catch {
            // Route Handler redirect response will carry cookies below.
          }
        },
      },
    },
  );

  const redirectTo = (path: string, markRecovery = false) => {
    const res = NextResponse.redirect(`${origin}${path}`);
    for (const { name, value, options } of pendingCookies) {
      res.cookies.set(name, value, options);
    }
    if (markRecovery) setRecoveryCookie(res);
    clearOAuthIntentCookie(res);
    return res;
  };

  if (oauthError) {
    const msg =
      oauthErrorDesc?.replace(/\+/g, " ") ||
      "Вход через провайдера отменён или отклонён.";
    return redirectTo(`/login?error=${encodeURIComponent(msg)}`);
  }

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("[auth/callback] exchangeCodeForSession:", error.message);
      return redirectTo(
        `/login?error=${encodeURIComponent(
          "Не удалось завершить вход. Попробуйте ещё раз (или войдите по email).",
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

    if (await sessionNeedsMfa(supabase)) {
      return redirectTo("/auth/mfa");
    }

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
