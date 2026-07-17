"use client";

import * as React from "react";
import { useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmail, signUpWithEmail } from "@/server/actions/auth";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [pending, startTransition] = useTransition();
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = React.useState(false);

  const action = (formData: FormData) => {
    startTransition(() => {
      if (mode === "signin") {
        if (redirect) formData.append("redirect", redirect);
        signInWithEmail(formData);
      } else {
        signUpWithEmail(formData);
      }
    });
  };

  return (
    <form action={action} className="space-y-4">
      {mode === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Твоё имя"
            required
            autoComplete="name"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="твой@email.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
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
            Я принимаю{" "}
            <Link href="/terms" className="text-primary hover:underline" target="_blank">
              Пользовательское соглашение
            </Link>
          </ConsentCheckbox>
          <ConsentCheckbox
            id="acceptPrivacy"
            name="acceptPrivacy"
            required
            checked={acceptPrivacy}
            onChange={setAcceptPrivacy}
          >
            Я принимаю{" "}
            <Link href="/privacy" className="text-primary hover:underline" target="_blank">
              Политику конфиденциальности
            </Link>
          </ConsentCheckbox>
          <ConsentCheckbox id="marketingConsent" name="marketingConsent">
            Хочу получать новости о продукте и обучении (необязательно)
          </ConsentCheckbox>
        </div>
      )}

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={
          pending ||
          (mode === "signup" && (!acceptTerms || !acceptPrivacy))
        }
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {mode === "signin" ? "Войти" : "Создать аккаунт"}
      </Button>
    </form>
  );
}
