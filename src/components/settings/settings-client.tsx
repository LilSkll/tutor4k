"use client";

import * as React from "react";
import { useTransition } from "react";
import { Loader2, LogOut, Moon, Palette, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  DAILY_GOAL_OPTIONS,
  GOALS,
  INTERFACE_LANGUAGES,
  LEVELS,
} from "@/config/app";
import { updateProfile, signOut } from "@/server/actions/auth";
import { useUIStore } from "@/stores";
import type { Goal, InterfaceLanguage, Level, Profile } from "@/types";
import { cn } from "@/lib/utils";

export function SettingsClient({ profile }: { profile: Profile }) {
  const { theme, setTheme } = useTheme();
  const setLang = useUIStore((s) => s.setInterfaceLanguage);
  const [pending, startTransition] = useTransition();

  const [name, setName] = React.useState(profile.name);
  const [level, setLevel] = React.useState<Level | "">(profile.level ?? "");
  const [goal, setGoal] = React.useState<Goal | "">(profile.goal ?? "");
  const [language, setLanguage] = React.useState<InterfaceLanguage>(
    profile.interface_language,
  );
  const [dailyGoal, setDailyGoal] = React.useState(
    profile.daily_goal_minutes ?? 15,
  );

  const save = () => {
    startTransition(async () => {
      const res = await updateProfile({
        name,
        level: (level || undefined) as Level | undefined,
        goal: (goal || undefined) as Goal | undefined,
        interfaceLanguage: language,
        dailyGoalMinutes: dailyGoal,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        setLang(language);
        toast.success("Perfil actualizado ✓");
      }
    });
  };

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Ajustes</h1>
        <p className="text-sm text-muted-foreground">
          Gestiona tu perfil y preferencias
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Perfil
          </CardTitle>
          <CardDescription>Tu información personal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nivel</Label>
              <Select
                value={level || "none"}
                onValueChange={(v) => setLevel(v === "none" ? "" : (v as Level))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sin nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Sin nivel</SelectItem>
                  {LEVELS.map((lvl) => (
                    <SelectItem key={lvl.value} value={lvl.value}>
                      {lvl.label} — {lvl.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Objetivo</Label>
              <Select
                value={goal || "none"}
                onValueChange={(v) => setGoal(v === "none" ? "" : (v as Goal))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sin objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Sin objetivo</SelectItem>
                  {GOALS.map((g) => (
                    <SelectItem key={g.value} value={g.value}>
                      {g.emoji} {g.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            Preferencias
          </CardTitle>
          <CardDescription>Idioma y meta diaria</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Idioma de la interfaz</Label>
            <div className="grid grid-cols-3 gap-2">
              {INTERFACE_LANGUAGES.map((lang) => (
                <button
                  key={lang.value}
                  type="button"
                  onClick={() => setLanguage(lang.value)}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all",
                    language === lang.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-xs font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Meta diaria (minutos)</Label>
            <div className="grid grid-cols-5 gap-2">
              {DAILY_GOAL_OPTIONS.map((min) => (
                <button
                  key={min}
                  type="button"
                  onClick={() => setDailyGoal(min)}
                  className={cn(
                    "rounded-lg border-2 py-2 text-sm font-bold transition-all",
                    dailyGoal === min
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {min}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            {theme === "dark" ? (
              <Moon className="h-4 w-4 text-primary" />
            ) : (
              <Sun className="h-4 w-4 text-primary" />
            )}
            Apariencia
          </CardTitle>
          <CardDescription>Tema de la aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "light", label: "Claro", icon: Sun },
              { value: "dark", label: "Oscuro", icon: Moon },
              { value: "system", label: "Sistema", icon: Palette },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTheme(opt.value)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all",
                  theme === opt.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50",
                )}
              >
                <opt.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2">
        <Button
          variant="gradient"
          onClick={save}
          disabled={pending}
          className="flex-1"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          Guardar cambios
        </Button>
        <form action={() => startTransition(() => signOut())}>
          <Button type="submit" variant="outline" disabled={pending}>
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Button>
        </form>
      </div>

      <Separator />
      <p className="text-center text-xs text-muted-foreground pb-4">
        SpanishTutor © {new Date().getFullYear()} · Hecho con Next.js, Supabase,
        Groq & Gemini
      </p>
    </div>
  );
}
