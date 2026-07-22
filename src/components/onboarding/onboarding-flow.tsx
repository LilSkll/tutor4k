"use client";

import { useState, useTransition } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { completeOnboarding } from "@/server/actions/auth";
import { LEVELS } from "@/config/app";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import type { Level, LevelOrUnknown } from "@/types";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 2;

export function OnboardingFlow({ error }: { error?: string }) {
  const [pending, startTransition] = useTransition();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [level, setLevel] = useState<LevelOrUnknown>("A1");
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const canContinue = () => {
    if (step === 0) return name.trim().length > 0;
    return true; // level always has a default
  };

  const handleFinish = () => {
    startTransition(() => {
      completeOnboarding({
        name: name.trim(),
        level: level === "UNKNOWN" ? "UNKNOWN" : (level as Level),
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-lg">
        {/* Progress dots */}
        <div className="mb-8 flex items-center justify-center gap-3">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === step ? "w-10 bg-primary" : i < step ? "w-1.5 bg-primary" : "w-1.5 bg-muted",
              )}
            />
          ))}
        </div>

        <Card className="border-0 shadow-xl">
          {/* Step 0: Name */}
          {step === 0 && (
            <>
              <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-center rounded-t-xl">
                <img
                  src="/hippogriff-icon.png"
                  alt=""
                  className="mx-auto mb-4 h-16 w-16 rounded-2xl shadow-lg"
                />
                <h2 className="text-2xl font-bold text-white">{t("onboarding.welcome")}</h2>
                <p className="text-white/80 text-sm mt-1">
                  {t("onboarding.subtitle")}
                </p>
              </div>
              <CardContent className="p-6 space-y-4">
                {error && (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
                    {error}
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("onboarding.name")}
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("onboarding.namePlaceholder")}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && canContinue()) setStep(1);
                    }}
                    className="text-lg h-12"
                  />
                </div>
                <Button
                  variant="gradient"
                  className="w-full h-12"
                  onClick={() => setStep(1)}
                  disabled={!canContinue()}
                >
                  {t("common.continue")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </>
          )}

          {/* Step 1: Level */}
          {step === 1 && (
            <>
              <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-6 text-center rounded-t-xl">
                <h2 className="text-xl font-bold text-white">
                  {t("onboarding.level")}
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  {t("onboarding.levelHint")}
                </p>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl.value}
                      type="button"
                      onClick={() => setLevel(lvl.value)}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all",
                        level === lvl.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className="font-bold text-2xl text-primary">{lvl.value}</span>
                      <span className="text-xs text-muted-foreground mt-1">{t(lvl.descriptionKey)}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setLevel("UNKNOWN")}
                  className={cn(
                    "w-full flex items-center justify-center rounded-xl border-2 p-3 transition-all text-sm",
                    level === "UNKNOWN"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {t("onboarding.levelUnknownBtn")}
                </button>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(0)}
                    disabled={pending}
                  >
                    {t("common.back")}
                  </Button>
                  <Button
                    variant="gradient"
                    className="flex-1"
                    onClick={handleFinish}
                    disabled={pending}
                  >
                    {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {t("onboarding.finish")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  {t("onboarding.unlockHint")}
                </p>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
