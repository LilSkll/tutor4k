import { NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { setRecoveryCookie } from "@/lib/auth-recovery";

type CookieToSet = {
  name: string;
  value: string;
  options?: CookieOptions;
};

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

  const jar = await cookies();
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
            // Cookies go on the redirect response below.
          }
        },
      },
    },
  );

  const redirectReset = () => {
    const res = NextResponse.redirect(`${origin}/auth/reset-password`);
    for (const { name, value, options } of pendingCookies) {
      res.cookies.set(name, value, options);
    }
    setRecoveryCookie(res);
    return res;
  };

  const redirectError = (msg: string) => {
    const res = NextResponse.redirect(
      `${origin}/forgot-password?error=${encodeURIComponent(msg)}`,
    );
    for (const { name, value, options } of pendingCookies) {
      res.cookies.set(name, value, options);
    }
    return res;
  };

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("[auth/recovery] exchangeCodeForSession:", error.message);
      return redirectError(
        "Не удалось подтвердить ссылку. Запроси сброс пароля ещё раз.",
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
      return redirectError("Ссылка устарела или уже использована.");
    }
    return redirectReset();
  }

  // Implicit / hash-based links — reset page may hydrate session from hash.
  return redirectReset();
}
