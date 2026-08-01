import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { setRecoveryCookie } from "@/lib/auth-recovery";

/**
 * Dedicated password-recovery redirect target.
 * Always lands on /auth/reset-password after exchanging the code —
 * teachers must not be bounced to Teacher Studio first.
 *
 * Add this exact URL to Supabase → Authentication → URL Configuration
 * Redirect URLs: https://your-domain/auth/recovery
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams, origin } = url;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  const supabase = await createSupabaseServerClient();
  const resetUrl = `${origin}/auth/reset-password`;

  const redirectReset = () => {
    const res = NextResponse.redirect(resetUrl);
    setRecoveryCookie(res);
    return res;
  };

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(
        `${origin}/forgot-password?error=${encodeURIComponent(
          "Не удалось подтвердить ссылку. Запроси сброс пароля ещё раз.",
        )}`,
      );
    }
    return redirectReset();
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type: type as "recovery" | "signup" | "invite" | "magiclink" | "email",
      token_hash: tokenHash,
    });
    if (error) {
      return NextResponse.redirect(
        `${origin}/forgot-password?error=${encodeURIComponent(
          "Ссылка устарела или уже использована.",
        )}`,
      );
    }
    return redirectReset();
  }

  // Implicit / hash-based links — reset page may hydrate session from hash.
  return redirectReset();
}
