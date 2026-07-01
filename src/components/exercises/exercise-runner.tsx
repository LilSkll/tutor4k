"use client";

import * as React from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useExerciseSessionStore } from "@/stores";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { EXERCISE_TYPES, LEVELS } from "@/config/app";
import { cn } from "@/lib/utils";
import type { ExerciseType, Level } from "@/types";
import { toast } from "sonner";

interface GeneratedExercise {
  type: ExerciseType;
  level: Level;
  question: string;
  instruction?: string;
  options?: string[];
  answer: string;
  acceptableAnswers?: string[];
  topic: string;
  explanation: string;
}

type Phase = "config" | "loading" | "answering" | "result";

export function ExerciseRunner({
  userLevel,
}: {
  userLevel: Level | null;
}) {
  const [type, setType] = React.useState<ExerciseType>("multiple_choice");
  const [level, setLevel] = React.useState<Level>(userLevel ?? "A1");
  const [exercise, setExercise] = React.useState<GeneratedExercise | null>(null);
  const [phase, setPhase] = React.useState<Phase>("config");
  const [userAnswer, setUserAnswer] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<{
    correct: boolean;
    feedback: string;
  } | null>(null);

  const incrementScore = useExerciseSessionStore((s) => s.incrementScore);
  const incrementAttempted = useExerciseSessionStore((s) => s.incrementAttempted);
  const score = useExerciseSessionStore((s) => s.currentScore);
  const attempted = useExerciseSessionStore((s) => s.totalAttempted);
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const generate = async () => {
    setPhase("loading");
    setUserAnswer("");
    setSelectedOption(null);
    setResult(null);
    try {
      const res = await fetch("/api/exercises/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, level }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = (await res.json()) as GeneratedExercise;
      setExercise(data);
      setPhase("answering");
    } catch {
      toast.error(t("exercises.toastGenerateFail"));
      setPhase("config");
    }
  };

  const check = async (answer: string) => {
    if (!exercise || !answer.trim()) return;
    setPhase("loading");
    try {
      const res = await fetch("/api/exercises/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise,
          userAnswer: answer,
          level,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = (await res.json()) as { correct: boolean; feedback: string };
      setResult(data);
      setPhase("result");
      incrementAttempted();
      if (data.correct) {
        incrementScore();
        toast.success(t("exercises.toastCorrect"));
      } else {
        toast.error(t("exercises.toastIncorrect"));
      }
    } catch {
      toast.error(t("exercises.toastCheckFail"));
      setPhase("answering");
    }
  };

  const next = () => {
    setExercise(null);
    setResult(null);
    setUserAnswer("");
    setSelectedOption(null);
    generate();
  };

  return (
    <div className="space-y-6">
      {/* Session score */}
      {attempted > 0 && (
        <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
          <CardContent className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t("exercises.scoreHits")}</span>
                <span className="text-2xl font-bold text-success">{score}</span>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t("exercises.scoreAttempts")}</span>
                <span className="text-2xl font-bold">{attempted}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold gradient-text">
                {Math.round((score / attempted) * 100)}%
              </div>
              <p className="text-[10px] text-muted-foreground">{t("exercises.scoreAccuracy")}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Configuration */}
      {phase === "config" && (
        <div className="space-y-6">
          {/* Type selection */}
          <div>
            <h3 className="font-semibold mb-3">{t("exercises.typeLabel")}</h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {EXERCISE_TYPES.map((exType) => (
                <button
                  key={exType.value}
                  onClick={() => setType(exType.value)}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all",
                    type === exType.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <span className="text-xl">{exType.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{exType.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {exType.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Level selection */}
          <div>
            <h3 className="font-semibold mb-3">{t("exercises.levelLabel")}</h3>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.value}
                  onClick={() => setLevel(lvl.value)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold border transition-all",
                    level === lvl.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <Button variant="gradient" size="lg" onClick={generate} className="w-full">
            <Sparkles className="h-4 w-4" />
            {t("exercises.generateBtn")}
          </Button>
        </div>
      )}

      {/* Loading */}
      {phase === "loading" && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
            <p className="text-sm text-muted-foreground">
              {exercise ? t("exercises.checking") : t("exercises.generating")}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Answering */}
      {phase === "answering" && exercise && (
        <ExerciseCard
          key={`${exercise.type}-${exercise.question}`}
          exercise={exercise}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onCheck={() => check(selectedOption ?? userAnswer)}
          t={t}
        />
      )}

      {/* Result */}
      {phase === "result" && exercise && result && (
        <ResultCard
          exercise={exercise}
          userAnswer={selectedOption ?? userAnswer}
          result={result}
          onNext={next}
          t={t}
        />
      )}
    </div>
  );
}

function ExerciseCard({
  exercise,
  userAnswer,
  setUserAnswer,
  selectedOption,
  setSelectedOption,
  onCheck,
  t,
}: {
  exercise: GeneratedExercise;
  userAnswer: string;
  setUserAnswer: (v: string) => void;
  selectedOption: string | null;
  setSelectedOption: (v: string) => void;
  onCheck: () => void;
  t: (key: string) => string;
}) {
  const isSentenceBuilding = exercise.type === "sentence_building";
  const isMultipleChoice = exercise.type === "multiple_choice";
  const hasOptions =
    (isMultipleChoice || isSentenceBuilding) &&
    exercise.options &&
    exercise.options.length > 0;

  // --- Sentence building state -------------------------------------
  // Track the order in which the user clicks the word tiles.
  const [wordOrder, setWordOrder] = React.useState<number[]>([]);
  const options = exercise.options ?? [];

  // When a tile is clicked, append its index to the order.
  const addWord = (idx: number) => {
    if (wordOrder.includes(idx)) return;
    const next = [...wordOrder, idx];
    setWordOrder(next);
    setUserAnswer(next.map((i) => options[i]).join(" "));
  };
  // Remove the last placed tile (undo).
  const removeLastWord = () => {
    const next = wordOrder.slice(0, -1);
    setWordOrder(next);
    setUserAnswer(next.map((i) => options[i]).join(" "));
  };
  // Click on a placed word removes it and everything after.
  const removeWordAt = (pos: number) => {
    const next = wordOrder.slice(0, pos);
    setWordOrder(next);
    setUserAnswer(next.map((i) => options[i]).join(" "));
  };

  return (
    <Card className="animate-fade-in">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="level">{exercise.level}</Badge>
          <span className="text-xs text-muted-foreground">{exercise.topic}</span>
        </div>

        {exercise.instruction && (
          <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-primary">📋 Задание: </span>
              {exercise.instruction}
            </p>
          </div>
        )}

        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-lg font-medium">{exercise.question}</p>
        </div>

        {isSentenceBuilding && hasOptions ? (
          <div className="space-y-3">
            {/* Build area: the sentence being assembled */}
            <div className="min-h-[60px] rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-3 flex flex-wrap gap-2 items-center">
              {wordOrder.length === 0 ? (
                <span className="text-sm text-muted-foreground italic">
                  Нажимай на слова ниже, чтобы собрать предложение
                </span>
              ) : (
                wordOrder.map((optIdx, pos) => (
                  <button
                    key={pos}
                    onClick={() => removeWordAt(pos)}
                    className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    {options[optIdx]}
                  </button>
                ))
              )}
            </div>
            {/* Word tiles pool */}
            <div className="flex flex-wrap gap-2">
              {options.map((opt, i) => {
                const used = wordOrder.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => addWord(i)}
                    disabled={used}
                    className={cn(
                      "rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all",
                      used
                        ? "opacity-30 border-muted bg-muted cursor-not-allowed"
                        : "border-primary/40 bg-card hover:border-primary hover:bg-primary/10 cursor-pointer",
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={removeLastWord}
                disabled={wordOrder.length === 0}
                className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-40"
              >
                ← Убрать последнее
              </button>
              {wordOrder.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  Собрано слов: {wordOrder.length}/{options.length}
                </span>
              )}
            </div>
          </div>
        ) : isMultipleChoice && hasOptions ? (
          <div className="grid gap-2">
            {exercise.options!.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(opt)}
                className={cn(
                  "flex items-center gap-3 rounded-lg border-2 p-3 text-left transition-all",
                  selectedOption === opt
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50",
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    selectedOption === opt
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm">{opt}</span>
              </button>
            ))}
          </div>
        ) : (
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder={t("exercises.answerPlaceholder")}
            onKeyDown={(e) => {
              if (e.key === "Enter") onCheck();
            }}
            autoFocus
          />
        )}

        <Button
          variant="gradient"
          className="w-full"
          onClick={onCheck}
          disabled={isMultipleChoice ? !selectedOption : !userAnswer.trim()}
        >
          <Check className="h-4 w-4" />
          {t("exercises.check")}
        </Button>
      </CardContent>
    </Card>
  );
}

function ResultCard({
  exercise,
  userAnswer,
  result,
  onNext,
  t,
}: {
  exercise: GeneratedExercise;
  userAnswer: string;
  result: { correct: boolean; feedback: string };
  onNext: () => void;
  t: (key: string) => string;
}) {
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-6 space-y-4">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg p-4",
            result.correct
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive",
          )}
        >
          {result.correct ? (
            <CheckCircle2 className="h-6 w-6 shrink-0" />
          ) : (
            <XCircle className="h-6 w-6 shrink-0" />
          )}
          <div>
            <p className="font-semibold">
              {result.correct ? t("exercises.resultCorrect") : t("exercises.resultIncorrect")}
            </p>
            <p className="text-xs opacity-90">{t("exercises.yourAnswerLabel")} {userAnswer}</p>
          </div>
        </div>

        {!result.correct && (
          <div className="rounded-lg border bg-muted/50 p-4">
            <p className="text-xs text-muted-foreground mb-1">
              {t("exercises.correctAnswerLabel")}
            </p>
            <p className="font-semibold text-foreground">{exercise.answer}</p>
          </div>
        )}

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-xs font-semibold text-primary mb-1">{t("exercises.explanationLabel")}</p>
          <p className="text-sm text-foreground">{result.feedback}</p>
        </div>

        <Button variant="gradient" className="w-full" onClick={onNext}>
          {t("exercises.nextExerciseBtn")}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
