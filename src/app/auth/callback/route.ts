import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

/**
 * Supabase Auth redirect target (email confirm / password recovery).
 * Supports PKCE `?code=` and older `?token_hash=&type=` links.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams, origin } = url;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const nextParam = searchParams.get("next");

  // Password recovery → set-new-password form. Explicit ?next= still wins.
  // Prefer /auth/recovery as redirectTo from reset emails; this callback
  // still routes recovery sessions correctly for older links.
  let destination =
    nextParam?.startsWith("/")
      ? nextParam
      : type === "recovery"
        ? "/auth/reset-password"
        : "/dashboard";

  const supabase = await createSupabaseServerClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      if (!nextParam) {
        const { data } = await supabase.auth.getSession();
        const amr = (data.session as { amr?: { method?: string }[] } | null)
          ?.amr;
        const isRecovery = Array.isArray(amr)
          ? amr.some((a) => a?.method === "recovery")
          : false;
        if (isRecovery || type === "recovery") {
          destination = "/auth/reset-password";
        } else {
          // Role-aware home (teacher → Studio, student → dashboard).
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (user) {
            const { data: profile } = await supabase
              .from("profiles")
              .select("role")
              .eq("id", user.id)
              .maybeSingle();
            const role = (profile as { role?: string } | null)?.role;
            if (role === "teacher" || role === "school_admin") {
              destination = "/teacher/dashboard";
            }
          }
        }
      }
      return NextResponse.redirect(`${origin}${destination}`);
    }
    return NextResponse.redirect(
      `${origin}/login?error=${encodeURIComponent("Не удалось подтвердить ссылку. Запроси сброс пароля ещё раз.")}`,
    );
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type: type as "recovery" | "signup" | "invite" | "magiclink" | "email",
      token_hash: tokenHash,
    });
    if (!error) {
      if (type === "recovery") destination = "/auth/reset-password";
      return NextResponse.redirect(`${origin}${destination}`);
    }
    return NextResponse.redirect(
      `${origin}/login?error=${encodeURIComponent("Ссылка устарела или уже использована.")}`,
    );
  }

  return NextResponse.redirect(
    `${origin}/login?error=${encodeURIComponent("Некорректная ссылка восстановления.")}`,
  );
}
