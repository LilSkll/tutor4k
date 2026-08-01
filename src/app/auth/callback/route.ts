import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import {
  sessionLooksLikeRecovery,
  setRecoveryCookie,
} from "@/lib/auth-recovery";
import { homePathForRole } from "@/lib/roles";
import type { UserRole } from "@/types";

/**
 * Supabase Auth redirect target (email confirm / password recovery).
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

  const supabase = await createSupabaseServerClient();

  const redirectTo = (path: string, markRecovery = false) => {
    const res = NextResponse.redirect(`${origin}${path}`);
    if (markRecovery) setRecoveryCookie(res);
    return res;
  };

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return redirectTo(
        `/login?error=${encodeURIComponent("Не удалось подтвердить ссылку. Запроси сброс пароля ещё раз.")}`,
      );
    }

    const { data } = await supabase.auth.getSession();
    const isRecovery =
      type === "recovery" || sessionLooksLikeRecovery(data.session);

    if (isRecovery) {
      return redirectTo("/auth/reset-password", true);
    }

    if (nextParam?.startsWith("/") && !nextParam.startsWith("//")) {
      return redirectTo(nextParam);
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();
    let role: UserRole = "student";
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();
      role = ((profile as { role?: UserRole } | null)?.role ??
        "student") as UserRole;
    }
    return redirectTo(homePathForRole(role));
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
    `/login?error=${encodeURIComponent("Некорректная ссылка восстановления.")}`,
  );
}
