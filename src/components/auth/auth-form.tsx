"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmail, signUpWithEmail } from "@/server/actions/auth";
import { Loader2 } from "lucide-react";

interface AuthFormProps {
  mode: "signin" | "signup";
  redirect?: string;
}

export function AuthForm({ mode, redirect }: AuthFormProps) {
  const [pending, startTransition] = useTransition();

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
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
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
          placeholder="tu@email.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
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

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={pending}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {mode === "signin" ? "Iniciar sesión" : "Crear cuenta"}
      </Button>
    </form>
  );
}
