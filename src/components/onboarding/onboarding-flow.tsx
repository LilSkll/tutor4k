"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
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
import { useUIStore } from "@/stores";
import { completeOnboarding } from "@/server/actions/auth";
import {
  DAILY_GOAL_OPTIONS,
  GOALS,
  INTERFACE_LANGUAGES,
  LEVELS,
} from "@/config/app";
import type {
  Goal,
  InterfaceLanguage,
  Level,
  LevelOrUnknown,
} from "@/types";
import { translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 5;

export function OnboardingFlow({ error }: { error?: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const setLang = useUIStore((s) => s.setInterfaceLanguage);
  const [step, setStep] = useState(0);

  // Form state
  const [language, setLanguage] = useState<InterfaceLanguage>("ru");
  const [name, setName] = useState("");
  const [level, setLevel] = useState<LevelOrUnknown | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [dailyGoal, setDailyGoal] = useState(15);

  const t = (key: string) => translate(key, language);

  const canContinue = () => {
    switch (step) {
      case 0:
        return true; // language
      case 1:
        return name.trim().length > 0;
      case 2:
        return level !== null;
      case 3:
        return goal !== null;
      case 4:
        return dailyGoal > 0;
      default:
        return false;
    }
  };

  const handleFinish = () => {
    startTransition(() => {
      completeOnboarding({
        name: name.trim(),
        level: level === "UNKNOWN" ? "UNKNOWN" : (level as Level),
        goal: goal as Goal,
        interfaceLanguage: language,
        dailyGoalMinutes: dailyGoal,
      });
      setLang(language);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-lg">
        {/* Progress dots */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === step
                  ? "w-8 bg-primary"
                  : i < step
                    ? "w-1.5 bg-primary"
                    : "w-1.5 bg-muted",
              )}
            />
          ))}
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white font-bold text-2xl">
              Ñ
            </div>
            <CardTitle className="text-2xl gradient-text">
              {t("onboarding.welcome")}
            </CardTitle>
            <CardDescription>{t("onboarding.subtitle")}</CardDescription>
            <p className="text-xs text-muted-foreground">
              {t("onboarding.step")} {step + 1} {t("onboarding.of")} {TOTAL_STEPS}
            </p>
          </CardHeader>

          <CardContent className="space-y-4 min-h-[220px]">
            {error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            {/* Step 0: language */}
            {step === 0 && (
              <div className="space-y-3 animate-fade-in">
                <Label>{t("onboarding.language")}</Label>
                <div className="grid grid-cols-3 gap-2">
                  {INTERFACE_LANGUAGES.map((lang) => (
                    <button
                      key={lang.value}
                      type="button"
                      onClick={() => setLanguage(lang.value)}
                      className={cn(
                        "flex flex-col items-center gap-1 rounded-xl border-2 p-4 transition-all",
                        language === lang.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: name */}
            {step === 1 && (
              <div className="space-y-3 animate-fade-in">
                <Label htmlFor="onb-name">{t("onboarding.name")}</Label>
                <Input
                  id="onb-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("onboarding.namePlaceholder")}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && canContinue()) setStep((s) => s + 1);
                  }}
                />
              </div>
            )}

            {/* Step 2: level */}
            {step === 2 && (
              <div className="space-y-2 animate-fade-in">
                <Label>{t("onboarding.level")}</Label>
                <div className="grid grid-cols-2 gap-2">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl.value}
                      type="button"
                      onClick={() => setLevel(lvl.value)}
                      className={cn(
                        "flex flex-col items-start rounded-xl border-2 p-3 transition-all text-left",
                        level === lvl.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className="font-bold text-lg text-primary">
                        {lvl.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {lvl.description}
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setLevel("UNKNOWN")}
                    className={cn(
                      "flex items-center justify-center rounded-xl border-2 p-3 transition-all col-span-2",
                      level === "UNKNOWN"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <span className="text-sm font-medium">
                      🤷 {t("onboarding.levelUnknown")}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: goal */}
            {step === 3 && (
              <div className="space-y-2 animate-fade-in">
                <Label>{t("onboarding.goal")}</Label>
                <div className="grid grid-cols-2 gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setGoal(g.value)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border-2 p-3 transition-all text-left",
                        goal === g.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className="text-xl">{g.emoji}</span>
                      <span className="text-sm font-medium">{g.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: daily goal */}
            {step === 4 && (
              <div className="space-y-3 animate-fade-in">
                <Label>{t("onboarding.dailyGoal")}</Label>
                <div className="grid grid-cols-5 gap-2">
                  {DAILY_GOAL_OPTIONS.map((min) => (
                    <button
                      key={min}
                      type="button"
                      onClick={() => setDailyGoal(min)}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-xl border-2 py-4 transition-all",
                        dailyGoal === min
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className="font-bold text-lg">{min}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {t("common.minutes")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0 || pending}
          >
            <ArrowLeft className="h-4 w-4" />
            {t("common.back")}
          </Button>

          {step < TOTAL_STEPS - 1 ? (
            <Button
              variant="gradient"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canContinue() || pending}
            >
              {t("common.continue")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="gradient"
              onClick={handleFinish}
              disabled={!canContinue() || pending}
            >
              {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )}
              {t("onboarding.finish")}
            </Button>
          )}
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 block mx-auto text-xs text-muted-foreground hover:text-foreground"
        >
          {language === "ru"
            ? "Пропустить пока"
            : language === "es"
              ? "Saltar por ahora"
              : "Skip for now"}
        </button>
      </div>
    </div>
  );
}
