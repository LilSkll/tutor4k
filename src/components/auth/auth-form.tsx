"use client";

import * as React from "react";
import { useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmail, signUpWithEmail } from "@/server/actions/auth";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { AlertTriangle, GraduationCap, Loader2, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";

interface AuthFormProps {
  mode: "signin" | "signup";
  redirect?: string;
}

function ConsentCheckbox({
  id,
  name,
  required,
  checked,
  onChange,
  children,
}: {
  id: string;
  name: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground leading-snug"
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary",
        )}
      />
      <span>{children}</span>
    </label>
  );
}

export function AuthForm({ mode, redirect }: AuthFormProps) {
  const language = useInterfaceLanguage();
  const t = (key: string) => translate(key, language);
  const [pending, startTransition] = useTransition();
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = React.useState(false);
  const [marketingConsent, setMarketingConsent] = React.useState(false);
  const [role, setRole] = React.useState<"student" | "teacher">("student");
  const [teacherConfirm, setTeacherConfirm] = React.useState(false);

  const action = (formData: FormData) => {
    startTransition(() => {
      if (mode === "signin") {
        if (redirect) formData.append("redirect", redirect);
        signInWithEmail(formData);
      } else {
        formData.set("role", role);
        signUpWithEmail(formData);
      }
    });
  };

  const canSubmitSignup =
    acceptTerms &&
    acceptPrivacy &&
    (role === "student" || teacherConfirm);

  return (
    <form action={action} className="space-y-4">
      {mode === "signup" && (
        <div className="space-y-2">
          <Label>{t("auth.accountType")}</Label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setRole("student");
                setTeacherConfirm(false);
              }}
              className={cn(
                "rounded-xl border-2 p-3 text-left transition-all",
                role === "student"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40",
              )}
            >
              <GraduationCap className="h-5 w-5 text-primary mb-1.5" />
              <p className="text-sm font-semibold">{t("auth.roleStudent")}</p>
              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                {t("auth.roleStudentDesc")}
              </p>
            </button>
            <button
              type="button"
              onClick={() => setRole("teacher")}
              className={cn(
                "rounded-xl border-2 p-3 text-left transition-all",
                role === "teacher"
                  ? "border-amber-500 bg-amber-500/5"
                  : "border-border hover:border-amber-500/40",
              )}
            >
              <Users className="h-5 w-5 text-amber-600 mb-1.5" />
              <p className="text-sm font-semibold">{t("auth.roleTeacher")}</p>
              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                {t("auth.roleTeacherDesc")}
              </p>
            </button>
          </div>
          <input type="hidden" name="role" value={role} />

          {role === "teacher" && (
            <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 space-y-3">
              <div className="flex gap-2 text-amber-900 dark:text-amber-100">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs leading-relaxed">
                  <p className="font-semibold text-sm">
                    {t("auth.teacherWarningTitle")}
                  </p>
                  <p>{t("auth.teacherWarning1")}</p>
                  <p>{t("auth.teacherWarning2")}</p>
                </div>
              </div>
              <ConsentCheckbox
                id="teacherConfirm"
                name="teacherConfirm"
                required
                checked={teacherConfirm}
                onChange={setTeacherConfirm}
              >
                {t("auth.teacherConfirm")}
              </ConsentCheckbox>
            </div>
          )}
        </div>
      )}

      {mode === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="name">{t("auth.name")}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t("auth.namePlaceholder")}
            required
            autoComplete="name"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">{t("auth.email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          required
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="password">{t("auth.password")}</Label>
          {mode === "signin" && (
            <Link
              href="/forgot-password"
              className="text-xs text-primary font-medium hover:underline"
            >
              {t("auth.forgotPassword")}
            </Link>
          )}
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder={t("auth.passwordPlaceholder")}
          required
          minLength={6}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
        />
      </div>

      {mode === "signup" && (
        <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
          <ConsentCheckbox
            id="acceptTerms"
            name="acceptTerms"
            required
            checked={acceptTerms}
            onChange={setAcceptTerms}
          >
            {t("auth.acceptTerms")}{" "}
            <Link
              href="/terms"
              className="text-primary hover:underline"
              target="_blank"
            >
              {t("auth.termsLink")}
            </Link>
          </ConsentCheckbox>
          <ConsentCheckbox
            id="acceptPrivacy"
            name="acceptPrivacy"
            required
            checked={acceptPrivacy}
            onChange={setAcceptPrivacy}
          >
            {t("auth.acceptPrivacy")}{" "}
            <Link
              href="/privacy"
              className="text-primary hover:underline"
              target="_blank"
            >
              {t("auth.privacyLink")}
            </Link>
          </ConsentCheckbox>
          <ConsentCheckbox
            id="marketingConsent"
            name="marketingConsent"
            checked={marketingConsent}
            onChange={setMarketingConsent}
          >
            {t("auth.marketingConsent")}
          </ConsentCheckbox>
        </div>
      )}

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        pending={pending}
        disabled={mode === "signup" && !canSubmitSignup}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {mode === "signin"
          ? t("auth.signIn")
          : role === "teacher"
            ? t("auth.createTeacher")
            : t("auth.createStudent")}
      </Button>

      <OAuthButtons
        mode={mode}
        role={role}
        teacherConfirm={teacherConfirm}
        acceptTerms={mode === "signin" ? true : acceptTerms}
        acceptPrivacy={mode === "signin" ? true : acceptPrivacy}
        marketingConsent={marketingConsent}
        redirect={redirect}
        disabled={pending}
      />
    </form>
  );
}
