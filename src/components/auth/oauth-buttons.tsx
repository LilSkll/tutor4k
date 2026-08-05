"use client";

import * as React from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { translate } from "@/lib/i18n/auth";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { InterfaceLanguage } from "@/types";

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

export function OAuthButtons({
  mode,
  role,
  teacherConfirm,
  acceptTerms,
  acceptPrivacy,
  marketingConsent,
  redirect,
  disabled,
  allowSocialOAuth = true,
  language: languageProp,
}: {
  mode: "signin" | "signup";
  role: "student" | "teacher";
  teacherConfirm: boolean;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  marketingConsent: boolean;
  redirect?: string;
  disabled?: boolean;
  /** When false (e.g. RU geo), hide Google entirely. */
  allowSocialOAuth?: boolean;
  /** Prefer server/parent language to avoid Zustand on auth TTI path. */
  language?: InterfaceLanguage;
}) {
  const storeLanguage = useInterfaceLanguage(languageProp);
  const language = languageProp ?? storeLanguage;
  const t = (key: string) => translate(key, language);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  if (!allowSocialOAuth) {
    return (
      <p className="text-xs text-muted-foreground text-center leading-relaxed pt-1">
        {t("auth.oauthRuUnavailable")}
      </p>
    );
  }

  const signupBlocked =
    mode === "signup" &&
    (!acceptTerms ||
      !acceptPrivacy ||
      (role === "teacher" && !teacherConfirm));

  const startGoogle = async () => {
    setError(null);
    if (signupBlocked) {
      setError(
        role === "teacher" && !teacherConfirm
          ? t("auth.oauthNeedTeacher")
          : t("auth.oauthNeedConsent"),
      );
      return;
    }

    setBusy(true);
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
          throw new Error(t("auth.oauthNeedConsent"));
        }
        if (data.error === "teacher_confirm_required") {
          throw new Error(t("auth.oauthNeedTeacher"));
        }
        if (data.error === "social_oauth_unavailable") {
          throw new Error(t("auth.oauthRuUnavailable"));
        }
        throw new Error(t("auth.oauthStartFail"));
      }

      const origin = window.location.origin;
      const redirectTo = `${origin}/auth/callback`;
      const supabase = createSupabaseBrowserClient();
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          skipBrowserRedirect: true,
          queryParams: { access_type: "online", prompt: "select_account" },
        },
      });
      if (oauthError || !data.url) {
        throw new Error(t("auth.oauthGoogleUnavailable"));
      }
      window.location.assign(data.url);
    } catch (err) {
      setBusy(false);
      setError((err as Error).message || t("auth.oauthGenericError"));
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t("auth.or")}
          </span>
        </div>
      </div>

      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        disabled={disabled || busy || signupBlocked}
        pending={busy}
        onClick={() => void startGoogle()}
      >
        {busy ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="h-4 w-4" />
        )}
        {t("auth.continueGoogle")}
      </Button>
    </div>
  );
}
