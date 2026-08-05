"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";

const OAuthButtons = dynamic(
  () =>
    import("@/components/auth/oauth-buttons").then((m) => m.OAuthButtons),
  {
    ssr: false,
    loading: () => (
      <div className="h-11 animate-pulse rounded-md bg-muted/40" aria-hidden />
    ),
  },
);

type FormSnapshot = {
  role: "student" | "teacher";
  teacherConfirm: boolean;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  marketingConsent: boolean;
};

function readFormSnapshot(): FormSnapshot {
  const form = document.getElementById("auth-form") as HTMLFormElement | null;
  if (!form) {
    return {
      role: "student",
      teacherConfirm: false,
      acceptTerms: true,
      acceptPrivacy: true,
      marketingConsent: false,
    };
  }
  const fd = new FormData(form);
  const role = String(fd.get("role") ?? "student").toLowerCase();
  return {
    role: role === "teacher" ? "teacher" : "student",
    teacherConfirm: fd.get("teacherConfirm") === "on",
    acceptTerms: fd.get("acceptTerms") === "on",
    acceptPrivacy: fd.get("acceptPrivacy") === "on",
    marketingConsent: fd.get("marketingConsent") === "on",
  };
}

/**
 * Deferred OAuth client island — not on the email/password TTI path.
 * Loads after idle so progressive RSC form stays interactive first.
 */
export function OAuthIsland({
  mode,
  redirect,
  allowSocialOAuth,
  language,
}: {
  mode: "signin" | "signup";
  redirect?: string;
  allowSocialOAuth: boolean;
  language: InterfaceLanguage;
}) {
  const t = (key: string) => translate(key, language);
  const [snap, setSnap] = React.useState<FormSnapshot>({
    role: "student",
    teacherConfirm: false,
    acceptTerms: mode === "signin",
    acceptPrivacy: mode === "signin",
    marketingConsent: false,
  });
  const [loadOauth, setLoadOauth] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const start = () => {
      if (!cancelled) setLoadOauth(true);
    };

    const ric = (
      window as Window & {
        requestIdleCallback?: (
          cb: () => void,
          opts?: { timeout: number },
        ) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;

    if (typeof ric === "function") {
      const cancel = (
        window as Window & { cancelIdleCallback?: (id: number) => void }
      ).cancelIdleCallback;
      const id = ric(start, { timeout: 2500 });
      return () => {
        cancelled = true;
        cancel?.(id);
      };
    }

    const timer = window.setTimeout(start, 1);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  React.useEffect(() => {
    if (!loadOauth) return;
    const form = document.getElementById("auth-form");
    const sync = () => setSnap(readFormSnapshot());
    sync();
    form?.addEventListener("change", sync);
    form?.addEventListener("input", sync);
    return () => {
      form?.removeEventListener("change", sync);
      form?.removeEventListener("input", sync);
    };
  }, [loadOauth]);

  if (!allowSocialOAuth) {
    return (
      <p className="text-center text-xs text-muted-foreground">
        {t("auth.oauthRuUnavailable")}
      </p>
    );
  }

  if (!loadOauth) {
    return (
      <div className="h-11 animate-pulse rounded-md bg-muted/40" aria-hidden />
    );
  }

  return (
    <OAuthButtons
      mode={mode}
      role={snap.role}
      teacherConfirm={snap.teacherConfirm}
      acceptTerms={mode === "signin" ? true : snap.acceptTerms}
      acceptPrivacy={mode === "signin" ? true : snap.acceptPrivacy}
      marketingConsent={snap.marketingConsent}
      redirect={redirect}
      allowSocialOAuth
      language={language}
    />
  );
}
