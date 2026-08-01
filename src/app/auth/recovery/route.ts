import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

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

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(
        `${origin}/forgot-password?error=${encodeURIComponent(
          "Не удалось подтвердить ссылку. Запроси сброс пароля ещё раз.",
        )}`,
      );
    }
    return NextResponse.redirect(resetUrl);
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
    return NextResponse.redirect(resetUrl);
  }

  // Implicit / hash-based links sometimes hit this path without query params;
  // the reset page client can still pick up the session from the hash.
  return NextResponse.redirect(resetUrl);
}
