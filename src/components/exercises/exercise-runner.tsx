"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useExerciseSessionStore } from "@/stores";
import { EXERCISE_TYPES, PRACTICE_LEVELS } from "@/config/app";
import { SESSION_EXERCISES } from "@/lib/exercise-bank";
import { parseHomeworkExerciseSearchParams } from "@/lib/homework-exercise-link";
import { formatSessionTutorSummary } from "@/lib/tutor-feedback";
import { useInterfaceLanguage, useActiveCourseId } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { getCourseTitle } from "@/config/courses";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { QuestionWithGloss } from "@/components/exercises/question-with-gloss";
import type {
  ExerciseType,
  GrammarLevel,
  InterfaceLanguage,
  Level,
} from "@/types";
import { toast } from "sonner";

interface GeneratedExercise {
  type: ExerciseType;
  level: GrammarLevel;
  question: string;
  questionTranslations?: Partial<Record<InterfaceLanguage, string>>;
  instruction?: string;
  options?: string[];
  answer: string;
  acceptableAnswers?: string[];
  topic: string;
  explanation: string;
  staticSource?: boolean;
  exerciseId?: string;
  chapterSlug?: string;
}

type AttemptRecord = {
  exercise: GeneratedExercise;
  userAnswer: string;
  correct: boolean;
  feedback: string;
};

type Phase = "config" | "loading" | "answering" | "result" | "summary";

type ExerciseTypeParam = ExerciseType | "mixed";

const VALID_LEVELS = new Set<GrammarLevel>(PRACTICE_LEVELS.map((l) => l.value));

function resolveLevelParam(raw: string | null, fallback: GrammarLevel): GrammarLevel {
  if (raw && VALID_LEVELS.has(raw as GrammarLevel)) return raw as GrammarLevel;
  return fallback;
}

function resolveTypeParam(raw: string | null): ExerciseTypeParam {
  if (raw === "mixed") return "mixed";
  if (raw && EXERCISE_TYPES.some((t) => t.value === raw)) {
    return raw as ExerciseType;
  }
  return "multiple_choice";
}

export function ExerciseRunner({
  userLevel,
  interfaceLanguage: serverLanguage,
  activeCourseId: serverCourseId,
}: {
  userLevel: Level | null;
  interfaceLanguage?: InterfaceLanguage;
  activeCourseId?: string | null;
}) {
  const searchParams = useSearchParams();
  const homeworkParams = React.useMemo(
    () => parseHomeworkExerciseSearchParams(searchParams),
    [searchParams],
  );

  const defaultLevel = userLevel ?? "A1";
  const [type, setType] = React.useState<ExerciseType>("multiple_choice");
  const [exerciseTypeParam, setExerciseTypeParam] =
    React.useState<ExerciseTypeParam>("multiple_choice");
  const [level, setLevel] = React.useState<GrammarLevel>(defaultLevel);
  const [sessionSize, setSessionSize] = React.useState(SESSION_EXERCISES);
  const [homeworkAssignmentId, setHomeworkAssignmentId] = React.useState<
    string | null
  >(null);
  const [homeworkCompleted, setHomeworkCompleted] = React.useState(false);
  const [markingHomework, setMarkingHomework] = React.useState(false);
  const homeworkAutoStarted = React.useRef(false);
  const [deleMode, setDeleMode] = React.useState(false);
  const [queue, setQueue] = React.useState<GeneratedExercise[]>([]);
  const [queueIdx, setQueueIdx] = React.useState(0);
  const [seenIds, setSeenIds] = React.useState<string[]>([]);
  const [roundAttempts, setRoundAttempts] = React.useState<AttemptRecord[]>([]);
  const [sessionSummary, setSessionSummary] = React.useState<string | null>(null);
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
  const language = useInterfaceLanguage(serverLanguage);
  const activeCourseId = useActiveCourseId(serverCourseId);
  const targetLanguage = getCourseTitle(activeCourseId);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const exercise = queue[queueIdx] ?? null;
  const isHomeworkMode = Boolean(homeworkAssignmentId);
  const generateType: ExerciseTypeParam = exerciseTypeParam;

  type RoundConfig = {
    type: ExerciseTypeParam;
    level: GrammarLevel;
    count: number;
    exam?: boolean;
  };

  const startRound = React.useCallback(
    async (excludeIds: string[], override?: Partial<RoundConfig>) => {
      const roundType = override?.type ?? exerciseTypeParam;
      const roundLevel = override?.level ?? level;
      const roundCount = override?.count ?? sessionSize;
      const roundDele = override?.exam ?? deleMode;

      setPhase("loading");
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
      setRoundAttempts([]);
      setSessionSummary(null);
      try {
        const res = await fetch("/api/exercises/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: roundType,
            level: roundLevel,
            count: roundCount,
            excludeIds,
            ...(roundDele &&
            activeCourseId === "spanish" &&
            roundType !== "mixed"
              ? { exam: "DELE" as const }
              : {}),
          }),
        });
        if (!res.ok) throw new Error("Failed");
        const data = (await res.json()) as { exercises: GeneratedExercise[] };
        if (!data.exercises?.length) throw new Error("Empty");
        setQueue(data.exercises);
        setQueueIdx(0);
        const newIds = data.exercises
          .map((ex) => ex.exerciseId)
          .filter((id): id is string => Boolean(id));
        setSeenIds((prev) => [...prev, ...newIds]);
        if (roundDele && activeCourseId === "spanish") {
          trackEvent("dele_round_start", {
            type: roundType === "mixed" ? "mixed" : roundType,
            level: roundLevel,
            count: data.exercises.length,
          });
        }
        setPhase("answering");
      } catch {
        toast.error(t("exercises.toastGenerateFail"));
        setPhase("config");
      }
    },
    [
      exerciseTypeParam,
      level,
      sessionSize,
      deleMode,
      activeCourseId,
      t,
    ],
  );

  React.useEffect(() => {
    const resolvedType = resolveTypeParam(homeworkParams.type);
    const resolvedLevel = resolveLevelParam(homeworkParams.level, defaultLevel);
    const count = homeworkParams.count ?? SESSION_EXERCISES;

    setExerciseTypeParam(resolvedType);
    if (resolvedType !== "mixed") setType(resolvedType);
    setLevel(resolvedLevel);
    setSessionSize(count);
    setHomeworkAssignmentId(homeworkParams.assignmentId);
    if (homeworkParams.exam) setDeleMode(true);

    if (homeworkAutoStarted.current) return;
    if (
      !homeworkParams.assignmentId &&
      !homeworkParams.type &&
      !homeworkParams.level
    ) {
      return;
    }
    homeworkAutoStarted.current = true;
    void startRound([], {
      type: resolvedType,
      level: resolvedLevel,
      count,
      exam: homeworkParams.exam,
    });
  }, [homeworkParams, defaultLevel, startRound]);

  const generate = () => {
    setSeenIds([]);
    void startRound([]);
  };

  const markHomeworkComplete = async () => {
    if (!homeworkAssignmentId || markingHomework || homeworkCompleted) return;
    setMarkingHomework(true);
    try {
      const res = await fetch(
        `/api/student/homework/${homeworkAssignmentId}/complete`,
        { method: "POST" },
      );
      if (!res.ok) throw new Error("fail");
      setHomeworkCompleted(true);
      window.dispatchEvent(new Event("homework:changed"));
      toast.success(t("homework.completed"));
    } catch {
      toast.error(t("homework.completeFail"));
    } finally {
      setMarkingHomework(false);
    }
  };

  const continueRound = () => {
    void startRound(seenIds);
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
      setRoundAttempts((prev) => [
        ...prev,
        {
          exercise,
          userAnswer: answer,
          correct: data.correct,
          feedback: data.feedback,
        },
      ]);
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
    const nextIdx = queueIdx + 1;
    if (nextIdx < queue.length) {
      setQueueIdx(nextIdx);
      setResult(null);
      setUserAnswer("");
      setSelectedOption(null);
      setPhase("answering");
      return;
    }

    const correctCount = roundAttempts.filter((a) => a.correct).length;
    const mistakes = roundAttempts
      .filter((a) => !a.correct)
      .map((a) => ({
        question: a.exercise.question,
        userAnswer: a.userAnswer,
        correctAnswer: a.exercise.answer,
        explanation: a.exercise.explanation,
      }));
    setSessionSummary(
      formatSessionTutorSummary({
        language,
        correctCount,
        total: roundAttempts.length || queue.length,
        mistakes,
      }),
    );
    setPhase("summary");
  };

  const backToConfig = () => {
    setQueue([]);
    setQueueIdx(0);
    setSeenIds([]);
    setRoundAttempts([]);
    setSessionSummary(null);
    setResult(null);
    if (isHomeworkMode) {
      void startRound([]);
      return;
    }
    setPhase("config");
  };

  const homeworkTypeLabel =
    generateType === "mixed"
      ? t("exercises.type.mixed.label")
      : t(`exercises.type.${generateType}.label`);

  return (
    <div className="space-y-6">
      {isHomeworkMode && (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="py-4 space-y-2">
            <p className="text-sm font-semibold text-primary">
              {t("exercises.homeworkBannerTitle")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("exercises.homeworkBannerDesc", {
                count: sessionSize,
                level,
                type: homeworkTypeLabel,
              })}
            </p>
            <Link
              href="/homework"
              className="text-xs text-primary hover:underline"
            >
              {t("exercises.homeworkBackLink")}
            </Link>
          </CardContent>
        </Card>
      )}
      {phase !== "config" && !isHomeworkMode && (
        <button
          type="button"
          onClick={backToConfig}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← {t("common.back")}
        </button>
      )}
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

      {phase === "config" && isHomeworkMode && (
        <Card>
          <CardContent className="py-6 space-y-3 text-center">
            <p className="text-sm text-muted-foreground">
              {t("exercises.homeworkLoadFail")}
            </p>
            <Button variant="gradient" onClick={generate}>
              {t("exercises.homeworkRetryBtn")}
            </Button>
          </CardContent>
        </Card>
      )}

      {phase === "config" && !isHomeworkMode && (
        <div className="space-y-6">
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
                    <p className="text-sm font-medium">{t(exType.labelKey)}</p>
                    <p className="text-xs text-muted-foreground">
                      {t(exType.descriptionKey, { targetLanguage })}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">{t("exercises.levelLabel")}</h3>
            <div className="flex flex-wrap gap-2">
              {PRACTICE_LEVELS.map((lvl) => (
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
                  {lvl.value}
                </button>
              ))}
              {activeCourseId === "spanish" && (
                <button
                  onClick={() => setDeleMode((v) => !v)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold border transition-all",
                    deleMode
                      ? "bg-amber-500 text-white border-amber-500"
                      : "border-amber-400/60 text-amber-600 hover:border-amber-500",
                  )}
                >
                  🎓 DELE
                </button>
              )}
            </div>
            {deleMode && activeCourseId === "spanish" && (
              <p className="mt-2 text-xs text-muted-foreground">
                {t("exercises.deleHint")}
              </p>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            {t("exercises.sessionHint", { count: sessionSize })}
          </p>

          <Button variant="gradient" size="lg" onClick={generate} className="w-full">
            <Sparkles className="h-4 w-4" />
            {t("exercises.startRoundBtn", { count: sessionSize })}
          </Button>
        </div>
      )}

      {phase === "loading" && (
        <Card>
          <CardContent className="space-y-4 py-8" aria-busy="true">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin text-primary shrink-0" />
              <span>
                {exercise ? t("exercises.checking") : t("exercises.generating")}
              </span>
            </div>
            <div className="h-10 w-full rounded-lg bg-muted/60 animate-pulse" />
            <div className="h-24 w-full rounded-xl bg-muted/60 animate-pulse" />
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="h-11 rounded-xl bg-muted/50 animate-pulse" />
              <div className="h-11 rounded-xl bg-muted/50 animate-pulse" />
            </div>
          </CardContent>
        </Card>
      )}

      {phase === "answering" && exercise && (
        <>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {t("exercises.roundProgress", {
                current: queueIdx + 1,
                total: queue.length,
              })}
            </span>
            <Badge variant="level">{level}</Badge>
          </div>
          <ExerciseCard
            key={`${exercise.exerciseId ?? exercise.question}-${queueIdx}`}
            exercise={exercise}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onCheck={() => check(selectedOption ?? userAnswer)}
            t={t}
          />
        </>
      )}

      {phase === "result" && exercise && result && (
        <ResultCard
          exercise={exercise}
          userAnswer={selectedOption ?? userAnswer}
          result={result}
          onNext={next}
          isLast={queueIdx + 1 >= queue.length}
          t={t}
        />
      )}

      {phase === "summary" && sessionSummary && (
        <Card className="animate-fade-in">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
              <div>
                <p className="font-semibold">{t("exercises.roundDoneTitle")}</p>
                <p className="text-xs text-muted-foreground">
                  {t("exercises.roundDoneDesc", {
                    correct: roundAttempts.filter((a) => a.correct).length,
                    total: roundAttempts.length,
                  })}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 whitespace-pre-wrap">
              <p className="text-xs font-semibold text-primary mb-2">
                {t("exercises.tutorSummaryLabel")}
              </p>
              <p className="text-sm text-foreground">{sessionSummary}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Button variant="gradient" onClick={continueRound}>
                {t("exercises.continueRoundBtn", { count: sessionSize })}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {isHomeworkMode && !homeworkCompleted ? (
                <Button
                  variant="outline"
                  onClick={() => void markHomeworkComplete()}
                  disabled={markingHomework}
                >
                  {markingHomework ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Check className="h-4 w-4" />
                  )}
                  {t("homework.markDone")}
                </Button>
              ) : (
                <Button variant="outline" onClick={backToConfig}>
                  <RotateCcw className="h-4 w-4" />
                  {isHomeworkMode
                    ? t("exercises.homeworkRetryBtn")
                    : t("exercises.changeSettingsBtn")}
                </Button>
              )}
            </div>
            {isHomeworkMode && homeworkCompleted && (
              <p className="text-sm text-success">{t("homework.completed")}</p>
            )}
          </CardContent>
        </Card>
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
  t: (key: string, vars?: Record<string, string | number>) => string;
}) {
  const isSentenceBuilding = exercise.type === "sentence_building";
  const isMultipleChoice = exercise.type === "multiple_choice";
  const hasOptions =
    (isMultipleChoice || isSentenceBuilding) &&
    exercise.options &&
    exercise.options.length > 0;

  const [wordOrder, setWordOrder] = React.useState<number[]>([]);
  const options = exercise.options ?? [];

  const addWord = (idx: number) => {
    if (wordOrder.includes(idx)) return;
    const next = [...wordOrder, idx];
    setWordOrder(next);
    setUserAnswer(next.map((i) => options[i]).join(" "));
  };
  const removeLastWord = () => {
    const next = wordOrder.slice(0, -1);
    setWordOrder(next);
    setUserAnswer(next.map((i) => options[i]).join(" "));
  };
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
              <span className="font-semibold text-primary">{t("exercises.taskLabel")} </span>
              {exercise.instruction}
            </p>
          </div>
        )}

        <div className="rounded-lg bg-muted/50 p-4">
          <QuestionWithGloss exercise={exercise} />
        </div>

        {isSentenceBuilding && hasOptions ? (
          <div className="space-y-3">
            <div className="min-h-[60px] rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-3 flex flex-wrap gap-2 items-center">
              {wordOrder.length === 0 ? (
                <span className="text-sm text-muted-foreground italic">
                  {t("exercises.sentenceBuildingHint")}
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
                {t("exercises.removeLastWord")}
              </button>
              {wordOrder.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  {t("exercises.wordsPlaced", {
                    count: wordOrder.length,
                    total: options.length,
                  })}
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
  isLast,
  t,
}: {
  exercise: GeneratedExercise;
  userAnswer: string;
  result: { correct: boolean; feedback: string };
  onNext: () => void;
  isLast: boolean;
  t: (key: string, vars?: Record<string, string | number>) => string;
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
          {isLast ? t("exercises.seeRoundSummaryBtn") : t("exercises.nextExerciseBtn")}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
