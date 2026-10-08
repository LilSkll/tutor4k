"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Flame,
  Loader2,
  MessageSquare,
  Sparkles,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Markdown } from "@/components/shared/markdown";
import { BackLink } from "@/components/shared/back-link";
import { StreakStampCard } from "@/components/shared/streak-stamp-card";
import { DialogueSpeakRepeat } from "@/components/daily/dialogue-speak-repeat";
import { QuestionWithGloss } from "@/components/exercises/question-with-gloss";
import { ExerciseFreeTextBlock } from "@/components/exercises/exercise-free-text-block";
import { SentenceBuildingBlock } from "@/components/exercises/sentence-building-block";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { gradeStaticExerciseLocally } from "@/lib/exercise-check-client";
import { localizeExerciseInstruction } from "@/lib/exercise-localize";
import { runExclusive, startTutorAbort } from "@/lib/tutor-fetch";
import { cn } from "@/lib/utils";
import {
  completeDailySessionAction,
  type DailySessionPlan,
} from "@/server/actions/daily-session";
import { localDateKey } from "@/lib/local-date";
import {
  canUseSpeechSynthesis,
  pickSpeechPayload,
  speakText,
  warmSpeechVoices,
} from "@/lib/speak-text";
import { plainTutorText } from "@/lib/plain-tutor-text";
import {
  isExactStreakMilestone,
  streakRewardKey,
} from "@/lib/streak-reward";
import type { StaticExercise } from "@/types";

type Phase = "review" | "practice" | "dialogue" | "done";

type DailySessionRunnerProps = {
  plan: DailySessionPlan;
};

export function DailySessionRunner({ plan }: DailySessionRunnerProps) {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const hasReview = plan.reviewExercises.length > 0;
  const [phase, setPhase] = React.useState<Phase>(
    hasReview ? "review" : "practice",
  );
  const [exercises, setExercises] = React.useState<StaticExercise[]>(
    hasReview ? plan.reviewExercises : plan.practiceExercises,
  );
  const [currentExerciseIdx, setCurrentExerciseIdx] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null,
  );
  const [result, setResult] = React.useState<{
    correct: boolean;
    feedback: string;
  } | null>(null);
  const [score, setScore] = React.useState(0);
  const [exercisesCompleted, setExercisesCompleted] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [dialogueResponse, setDialogueResponse] = React.useState<string | null>(
    null,
  );
  const [dialogueInput, setDialogueInput] = React.useState("");
  const [finishError, setFinishError] = React.useState<string | null>(null);
  const [doneStreak, setDoneStreak] = React.useState<number | null>(null);
  const [doneMinutesToday, setDoneMinutesToday] = React.useState<number | null>(
    null,
  );
  const [doneMinutesYesterday, setDoneMinutesYesterday] = React.useState<
    number | null
  >(null);
  const [doneMinutesCredited, setDoneMinutesCredited] = React.useState<
    number | null
  >(null);
  /** Last wrong answer this session — shown once on Done (UI language wrapper). */
  const [microMemory, setMicroMemory] = React.useState<{
    wrong: string;
    right: string;
  } | null>(null);
  const [speechSupported, setSpeechSupported] = React.useState(false);
  const [speaking, setSpeaking] = React.useState(false);
  const askInFlight = React.useRef(false);
  const speechStopRef = React.useRef<(() => void) | null>(null);
  const sessionStartedAt = React.useRef(Date.now());
  const finishOnceRef = React.useRef(false);

  /** Honest band for the ritual: elapsed wall time, clamped 2–12. */
  const estimateSessionMinutes = () => {
    const elapsed = Math.round(
      (Date.now() - sessionStartedAt.current) / 60_000,
    );
    if (elapsed <= 0) return 4;
    return Math.max(2, Math.min(12, elapsed));
  };

  const dailyCreditKey = () => `st_daily_credit_${localDateKey()}`;

  const rememberMistake = (wrong: string, right: string) => {
    const w = wrong.trim();
    const r = right.trim();
    if (!w || !r) return;
    setMicroMemory({ wrong: w, right: r });
  };

  React.useEffect(() => {
    setSpeechSupported(canUseSpeechSynthesis());
    warmSpeechVoices();
    return () => {
      speechStopRef.current?.();
      speechStopRef.current = null;
    };
  }, []);

  const phaseOrder: Phase[] = hasReview
    ? ["review", "practice", "dialogue", "done"]
    : ["practice", "dialogue", "done"];
  const phaseIndex = Math.max(0, phaseOrder.indexOf(phase));
  const stepLabel = t("daily.stepOf", {
    current: phaseIndex + 1,
    total: phaseOrder.length,
  });

  const beginPractice = () => {
    setExercises(plan.practiceExercises);
    setCurrentExerciseIdx(0);
    setUserAnswer("");
    setSelectedOption(null);
    setResult(null);
    setPhase("practice");
  };

  const checkAnswer = async () => {
    const ex = exercises[currentExerciseIdx];
    if (!ex || loading || result) return;
    const answer = (selectedOption ?? userAnswer).trim();
    if (!answer) return;

    const local = gradeStaticExerciseLocally(ex, answer, language);
    const needsSoftCheck =
      !local.correct &&
      (ex.type === "translation" || ex.type === "error_correction");

    if (!needsSoftCheck) {
      setResult(local);
      setExercisesCompleted((n) => n + 1);
      if (local.correct) {
        setScore((s) => s + 1);
      } else {
        rememberMistake(answer, ex.answer);
      }
      void fetch("/api/exercises/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise: {
            type: ex.type,
            level: plan.level,
            question: ex.question,
            instruction: ex.instruction,
            options: ex.options,
            answer: ex.answer,
            acceptableAnswers: ex.acceptableAnswers,
            topic: plan.topicTitle,
            explanation: ex.explanation,
            staticSource: true,
            exerciseId: ex.id,
            chapterSlug: plan.chapterSlug,
          },
          userAnswer: answer,
          level: plan.level,
        }),
      }).catch(() => {});
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/exercises/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise: {
            type: ex.type,
            level: plan.level,
            question: ex.question,
            instruction: ex.instruction,
            options: ex.options,
            answer: ex.answer,
            acceptableAnswers: ex.acceptableAnswers,
            topic: plan.topicTitle,
            explanation: ex.explanation,
            staticSource: true,
            exerciseId: ex.id,
            chapterSlug: plan.chapterSlug,
          },
          userAnswer: answer,
          level: plan.level,
        }),
      });
      const data = res.ok
        ? ((await res.json()) as { correct: boolean; feedback: string })
        : local;
      setResult(data);
      setExercisesCompleted((n) => n + 1);
      if (data.correct) {
        setScore((s) => s + 1);
      } else {
        rememberMistake(answer, ex.answer);
      }
    } catch {
      setResult(local);
      setExercisesCompleted((n) => n + 1);
      if (!local.correct) rememberMistake(answer, ex.answer);
    } finally {
      setLoading(false);
    }
  };

  const afterBlock = () => {
    if (phase === "review") {
      beginPractice();
      return;
    }
    setPhase("dialogue");
  };

  const nextExercise = () => {
    if (currentExerciseIdx + 1 < exercises.length) {
      setCurrentExerciseIdx((i) => i + 1);
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
    } else {
      afterBlock();
    }
  };

  const askTutor = async () => {
    const question =
      dialogueInput.trim() ||
      t("lesson.defaultQuestion", { topic: plan.topicTitle });
    if (loading) return;
    await runExclusive(askInFlight, async () => {
      const abort = startTutorAbort();
      setLoading(true);
      setDialogueResponse(null);
      try {
        const res = await fetch("/api/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: abort.signal,
          body: JSON.stringify({
            messages: [{ role: "user", content: question }],
            interfaceLanguage: language,
            courseId: plan.courseId,
            grammarTopicSlug: plan.grammarTopicSlug,
          }),
        });
        if (!res.ok) throw new Error("Failed");
        const data = (await res.json()) as { content?: string };
        setDialogueResponse(data.content?.trim() || t("lesson.tutorError"));
      } catch {
        setDialogueResponse(t("lesson.tutorError"));
      } finally {
        abort.clear();
        setLoading(false);
      }
    });
  };

  const finishSession = async () => {
    if (loading || finishOnceRef.current) return;
    finishOnceRef.current = true;
    setLoading(true);
    setFinishError(null);
    try {
      let minutes = estimateSessionMinutes();
      try {
        if (typeof window !== "undefined" && localStorage.getItem(dailyCreditKey())) {
          // Already credited the Daily ritual today — don't stack another 8+.
          minutes = 0;
        }
      } catch {
        // private mode / blocked storage — still credit once this mount
      }
      const result = await completeDailySessionAction({
        minutes,
        localDate: localDateKey(),
      });
      if (result.error) {
        finishOnceRef.current = false;
        setFinishError(result.error);
        return;
      }
      const credited = result.minutesCredited ?? minutes;
      if (credited > 0) {
        try {
          localStorage.setItem(dailyCreditKey(), String(credited));
        } catch {
          // ignore
        }
      }
      setDoneMinutesCredited(credited);
      setDoneStreak(result.streak ?? null);
      setDoneMinutesToday(result.minutesToday ?? null);
      setDoneMinutesYesterday(result.minutesYesterday ?? null);
      setPhase("done");
    } catch {
      finishOnceRef.current = false;
      setFinishError(t("daily.finishError"));
    } finally {
      setLoading(false);
    }
  };

  if (phase === "done") {
    const milestoneKey =
      doneStreak != null && isExactStreakMilestone(doneStreak)
        ? streakRewardKey(doneStreak)
        : null;

    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink href="/dashboard" />
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-5xl mb-3">
              <Sparkles className="h-12 w-12 mx-auto" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {t("daily.doneTitle")}
            </h1>
            <p className="text-white/85 text-sm sm:text-base">
              {t("daily.doneSubtitle", { chapter: plan.chapterTitle })}
            </p>
          </div>
          <CardContent className="p-6 space-y-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                {t("daily.summaryScore", {
                  score,
                  total: exercisesCompleted,
                })}
              </li>
              <li>
                {doneMinutesCredited != null && doneMinutesCredited > 0
                  ? t("daily.summaryMinutes", {
                      minutes: doneMinutesCredited,
                    })
                  : t("daily.summaryMinutesAlready")}
              </li>
              {doneMinutesToday != null ? (
                <li>
                  {t("daily.summaryMinutesToday", {
                    minutes: doneMinutesToday,
                  })}
                </li>
              ) : null}
              {doneMinutesYesterday != null ? (
                <li>
                  {t("daily.summaryMinutesYesterday", {
                    minutes: doneMinutesYesterday,
                  })}
                </li>
              ) : null}
              {doneStreak != null && doneStreak > 0 ? (
                <li className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
                  <Flame className="h-3.5 w-3.5 shrink-0" />
                  {t("daily.summaryStreak", { streak: doneStreak })}
                </li>
              ) : null}
              {milestoneKey ? (
                <li className="font-medium text-foreground">
                  {t(milestoneKey)}
                </li>
              ) : null}
              {plan.recommendationLabel ? (
                <li>
                  {t("daily.summaryFocus", {
                    topic: plan.recommendationLabel,
                  })}
                </li>
              ) : null}
              {plan.strengthLabel && plan.recommendationLabel ? (
                <li>
                  {t("daily.balanceLine", {
                    strong: plan.strengthLabel,
                    weak: plan.recommendationLabel,
                  })}
                </li>
              ) : null}
            </ul>
            {microMemory ? (
              <div className="rounded-xl border bg-muted/40 p-3 space-y-1">
                <p className="meta-label">{t("daily.memoryLabel")}</p>
                <p className="text-sm text-foreground">
                  {t("daily.memoryLine", {
                    wrong: microMemory.wrong,
                    right: microMemory.right,
                  })}
                </p>
              </div>
            ) : exercisesCompleted > 0 && score === exercisesCompleted ? (
              <p className="text-sm text-muted-foreground">
                {t("daily.memoryPerfect")}
              </p>
            ) : null}
            {doneStreak != null ? (
              <StreakStampCard streak={doneStreak} />
            ) : null}
            <div className="space-y-2">
              <p className="meta-label">{t("daily.nextStepLabel")}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="gradient" className="w-full" asChild>
                  <Link href={`/chapters/${plan.chapterSlug}`}>
                    <ArrowRight className="h-4 w-4" />
                    {t("daily.nextStepChapter")}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard">{t("daily.backDashboard")}</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "dialogue") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink href="/dashboard" />
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <MessageSquare className="h-5 w-5 text-primary shrink-0" />
            <h2 className="text-xl font-bold truncate">
              {t("daily.dialogueTitle")}
            </h2>
          </div>
          <Badge variant="secondary">{stepLabel}</Badge>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-base text-muted-foreground">
              {t("daily.dialoguePrompt", { topic: plan.topicTitle })}
            </p>
            <p className="text-sm text-muted-foreground rounded-lg border border-dashed bg-muted/30 px-3 py-2">
              {t("daily.speakWhere")}
            </p>
            <Input
              value={dialogueInput}
              onChange={(e) => setDialogueInput(e.target.value)}
              placeholder={t("lesson.dialoguePlaceholder")}
              onKeyDown={(e) => {
                if (e.key === "Enter") void askTutor();
              }}
            />
            <Button
              variant="secondary"
              className="w-full"
              disabled={loading}
              onClick={() => {
                setDialogueInput(
                  t("lesson.defaultQuestion", { topic: plan.topicTitle }),
                );
              }}
            >
              {t("lesson.dialogueSuggested")}
            </Button>
            <Button
              variant="gradient"
              className="w-full"
              onClick={() => void askTutor()}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MessageSquare className="h-4 w-4" />
              )}
              {loading ? t("lesson.thinking") : t("lesson.askTutor")}
            </Button>
            {dialogueResponse ? (
              <div className="rounded-xl border-2 border-primary/25 bg-card p-4 space-y-3 shadow-soft">
                <p className="text-sm font-semibold tracking-tight">
                  {t("daily.tutorReplyLabel")}
                </p>
                <Markdown content={dialogueResponse} />
                {speechSupported ? (
                  <Button
                    type="button"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      if (speaking) {
                        speechStopRef.current?.();
                        return;
                      }
                      // Quoted L2 examples → course voice (pronunciation);
                      // otherwise full reply in the interface language.
                      const payload = pickSpeechPayload(
                        dialogueResponse,
                        language,
                        plan.courseId,
                      );
                      const handle = speakText(
                        payload.text,
                        payload.langTag,
                        () => {
                          setSpeaking(false);
                          speechStopRef.current = null;
                        },
                        payload.fallbackLangTag,
                      );
                      if (!handle) return;
                      speechStopRef.current = handle.stop;
                      setSpeaking(true);
                    }}
                  >
                    <Volume2 className="h-5 w-5" />
                    {speaking
                      ? t("daily.stopSpeaking")
                      : t("daily.listenReply")}
                  </Button>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    {t("daily.speechUnsupported")}
                  </p>
                )}
                <DialogueSpeakRepeat />
                <p className="text-xs text-muted-foreground">
                  {t("daily.speakHint")}
                </p>
              </div>
            ) : null}
            {finishError ? (
              <p className="text-sm text-destructive text-center">
                {finishError}
              </p>
            ) : null}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => void finishSession()}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )}
              {t("daily.finish")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const ex = exercises[currentExerciseIdx];
  if (!ex) {
    // Empty review → jump to practice; empty practice → dialogue CTA.
    if (phase === "review") {
      return (
        <div className="max-w-2xl mx-auto py-6 space-y-4 text-center">
          <Button variant="gradient" onClick={beginPractice}>
            {t("daily.continuePractice")}
          </Button>
        </div>
      );
    }
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-4 text-center">
        <p className="text-muted-foreground">{t("daily.emptyPractice")}</p>
        <Button variant="gradient" onClick={() => setPhase("dialogue")}>
          {t("daily.continueDialogue")}
        </Button>
      </div>
    );
  }

  const hasMcOptions =
    ex.type === "multiple_choice" &&
    Array.isArray(ex.options) &&
    ex.options.length > 0;
  const hasSbOptions =
    ex.type === "sentence_building" &&
    Array.isArray(ex.options) &&
    ex.options.length > 0;

  const phaseTitle =
    phase === "review" ? t("daily.reviewTitle") : t("daily.practiceTitle");

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      <BackLink href="/dashboard" />
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="meta-label mb-1">{stepLabel}</p>
          <h2 className="text-xl font-bold truncate">{phaseTitle}</h2>
          <p className="text-sm text-muted-foreground truncate">
            {plan.chapterTitle}
          </p>
        </div>
        <Badge variant="level">{plan.level}</Badge>
      </div>

      {phase === "review" && plan.recommendationLabel ? (
        <p className="text-sm text-muted-foreground">
          {t("daily.reviewHint", { topic: plan.recommendationLabel })}
        </p>
      ) : null}

      {phase === "review" && plan.practiceExercises.length > 0 ? (
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={beginPractice}
        >
          {t("daily.skipReview")}
        </Button>
      ) : null}

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        {t("lesson.exerciseOf", {
          current: currentExerciseIdx + 1,
          total: exercises.length,
          score,
        })}
      </div>

      {!result ? (
        <Card>
          <CardContent className="p-6 space-y-4">
            {!hasMcOptions &&
            !hasSbOptions &&
            (ex.type === "fill_blank" ||
              ex.type === "translation" ||
              ex.type === "error_correction") ? (
              <>
                <div className="rounded-lg bg-muted/50 p-4">
                  <QuestionWithGloss
                    exercise={ex}
                    interfaceLanguage={language}
                  />
                </div>
                <ExerciseFreeTextBlock
                  exercise={ex}
                  courseId={plan.courseId}
                  interfaceLanguage={language}
                  value={userAnswer}
                  onChange={setUserAnswer}
                  onSubmit={checkAnswer}
                  taskLabel={t("lesson.taskLabel")}
                />
              </>
            ) : (
              <>
                {(ex.instruction || hasMcOptions || hasSbOptions) && (
                  <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold text-primary">
                        {t("lesson.taskLabel")}
                      </span>
                      {localizeExerciseInstruction(ex, language)}
                    </p>
                  </div>
                )}
                {ex.type !== "sentence_building" ? (
                  <div className="rounded-lg bg-muted/50 p-4">
                    <QuestionWithGloss
                      exercise={ex}
                      interfaceLanguage={language}
                    />
                  </div>
                ) : null}
                {hasSbOptions ? (
                  <SentenceBuildingBlock
                    key={ex.id ?? currentExerciseIdx}
                    options={ex.options!}
                    answer={ex.answer}
                    onAnswerChange={setUserAnswer}
                    hint={t("exercises.sentenceBuildingHint")}
                    removeLastLabel={t("exercises.removeLastWord")}
                    wordsPlacedLabel={t("exercises.wordsPlaced", {
                      count: userAnswer.trim()
                        ? userAnswer.trim().split(/\s+/).length
                        : 0,
                      total: ex.options!.length,
                    })}
                  />
                ) : hasMcOptions ? (
                  <div className="grid gap-2">
                    {ex.options!.map((opt, i) => (
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
                    placeholder={t("lesson.answerPlaceholder")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") void checkAnswer();
                    }}
                    autoFocus
                  />
                )}
              </>
            )}
            <Button
              variant="gradient"
              className="w-full"
              onClick={() => void checkAnswer()}
              disabled={
                loading ||
                (hasMcOptions
                  ? !selectedOption
                  : hasSbOptions
                    ? !userAnswer.trim()
                    : !userAnswer.trim())
              }
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )}
              {t("lesson.check")}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card
          className={
            result.correct
              ? "border-emerald-500/40 bg-emerald-500/5"
              : "border-destructive/40 bg-destructive/5"
          }
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              {result.correct ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : (
                <Check className="h-5 w-5 text-destructive" />
              )}
              <p className="font-semibold">
                {result.correct
                  ? t("lesson.correct")
                  : t("lesson.incorrect")}
              </p>
            </div>
            {!result.correct ? (
              <p className="text-sm font-medium">
                {t("lesson.correctAnswer", { answer: ex.answer })}
              </p>
            ) : null}
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {plainTutorText(result.feedback)}
            </p>
            <Button
              variant="gradient"
              className="w-full"
              onClick={nextExercise}
            >
              <ArrowRight className="h-4 w-4" />
              {currentExerciseIdx + 1 < exercises.length
                ? t("lesson.nextExercise")
                : phase === "review"
                  ? t("daily.continuePractice")
                  : t("daily.continueDialogue")}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
