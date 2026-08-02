"use client";

import * as React from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Provider = "google" | "apple";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.7 14.5 2.7 12 2.7 6.9 2.7 2.7 6.9 2.7 12S6.9 21.3 12 21.3c5.2 0 8.6-3.6 8.6-8.7 0-.6-.1-1-.1-1.4H12z"
      />
      <path
        fill="#34A853"
        d="M3.9 7.5l3 2.2C7.7 7.5 9.7 6.2 12 6.2c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.7 14.5 2.7 12 2.7 8.3 2.7 5.1 4.8 3.9 7.5z"
      />
      <path
        fill="#4A90E2"
        d="M12 21.3c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-3.6 0-4.9-2.4-5.1-3.6l-3 2.3c1.2 2.6 4.3 4.8 8.1 4.8z"
      />
      <path
        fill="#FBBC05"
        d="M3.9 16.5c-.5-.9-.8-2-.8-3.1s.3-2.2.8-3.1l3 2.3c-.1.4-.2.8-.2 1.2s.1.8.2 1.2l-3 1.5z"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.2 2.6 2.1 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.2-3.6zM14.4 6.3c.6-.7 1-1.7.9-2.7-1 .1-2.1.6-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1 0 2-.6 2.7-1.4z" />
    </svg>
  );
}

export function OAuthButtons({
  mode,
  role,
  teacherConfirm,
  acceptTerms,
  acceptPrivacy,
  marketingConsent,
  redirect,
  disabled,
}: {
  mode: "signin" | "signup";
  role: "student" | "teacher";
  teacherConfirm: boolean;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  marketingConsent: boolean;
  redirect?: string;
  disabled?: boolean;
}) {
  const [busy, setBusy] = React.useState<Provider | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const signupBlocked =
    mode === "signup" &&
    (!acceptTerms ||
      !acceptPrivacy ||
      (role === "teacher" && !teacherConfirm));

  const startOAuth = async (provider: Provider) => {
    setError(null);
    if (signupBlocked) {
      setError(
        role === "teacher" && !teacherConfirm
          ? "Подтвердите, что регистрируетесь как преподаватель."
          : "Примите Пользовательское соглашение и Политику конфиденциальности.",
      );
      return;
    }

    setBusy(provider);
    try {
      const intentRes = await fetch("/api/auth/oauth-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          role,
          teacherConfirm,
          acceptTerms,
          acceptPrivacy,
          marketingConsent,
          next: redirect ?? null,
        }),
      });
      if (!intentRes.ok) {
        const data = (await intentRes.json().catch(() => ({}))) as {
          error?: string;
        };
        if (data.error === "consent_required") {
          throw new Error(
            "Примите Пользовательское соглашение и Политику конфиденциальности.",
          );
        }
        if (data.error === "teacher_confirm_required") {
          throw new Error(
            "Подтвердите, что регистрируетесь как преподаватель.",
          );
        }
        throw new Error("Не удалось начать вход. Попробуйте ещё раз.");
      }

      const origin = window.location.origin;
      const redirectTo = `${origin}/auth/callback`;
      const supabase = createSupabaseBrowserClient();
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
          skipBrowserRedirect: true,
          queryParams:
            provider === "google"
              ? { access_type: "online", prompt: "select_account" }
              : undefined,
        },
      });
      if (oauthError || !data.url) {
        throw new Error(
          oauthError?.message ||
            "Провайдер входа недоступен. Проверьте настройки в Supabase.",
        );
      }
      window.location.assign(data.url);
    } catch (err) {
      setBusy(null);
      setError((err as Error).message || "Ошибка входа");
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">или</span>
        </div>
      </div>

      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        disabled={disabled || busy !== null || signupBlocked}
        onClick={() => void startOAuth("google")}
      >
        {busy === "google" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="h-4 w-4" />
        )}
        Продолжить с Google
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        disabled={disabled || busy !== null || signupBlocked}
        onClick={() => void startOAuth("apple")}
      >
        {busy === "apple" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <AppleIcon className="h-4 w-4" />
        )}
        Продолжить с Apple
      </Button>
    </div>
  );
}
