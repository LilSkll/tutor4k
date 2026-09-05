"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Markdown } from "@/components/shared/markdown";
import { useLocalizedGrammarArticle } from "@/hooks/use-localized-grammar-article";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";
import { SESSION_EXERCISES, pickUniqueStemBatch } from "@/lib/exercise-bank";
import { gradeStaticExerciseLocally } from "@/lib/exercise-check-client";
import { scorePercent } from "@/lib/normalize-answer";
import { trackEvent } from "@/lib/analytics";
import { getLessonAdaptationAction } from "@/server/actions/learning-profile";
import type { StaticExercise } from "@/types";
import type { LessonAdaptation } from "@/types/learning-profile";
import { BackLink } from "@/components/shared/back-link";
import { QuestionWithGloss } from "@/components/exercises/question-with-gloss";
import { ExerciseFreeTextBlock } from "@/components/exercises/exercise-free-text-block";
import { SentenceBuildingBlock } from "@/components/exercises/sentence-building-block";
import { localizeExerciseInstruction } from "@/lib/exercise-localize";
import { getChapterTargetTitle } from "@/lib/chapter-display";
import { ChapterExerciseTypeGuide } from "@/components/chapters/chapter-exercise-type-guide";
import { CompletionCertificateCard } from "@/components/journey/completion-certificate-card";
import { EasterEggReveal } from "@/components/journey/easter-egg-reveal";
import type { ChapterCompleteRewards } from "@/lib/journey/types";
import {
  grammarTheoryPagesFromMarkdown,
} from "@/lib/grammar-markdown";
import { cn } from "@/lib/utils";
import { runExclusive, startTutorAbort } from "@/lib/tutor-fetch";
import type { Chapter } from "@/types";
import Link from "next/link";

type Phase =
  | "intro"
  | "revision"
  | "theory"
  | "practice"
  | "reinforce"
  | "dialogue"
  | "summary";

type PracticeKind = "revision" | "main" | "reinforce";

interface LessonRunnerProps {
  chapter: Chapter;
  courseId: string;
  userName: string;
  grammarTopicSlug: string;
  /** Localized grammar topic title (server-prepared). */
  grammarTitle: string | null;
  /** Localized story from the server (avoids shipping the full stories bank). */
  chapterStory: string | null;
  chapterDisplayTitle: string;
  chapterDisplaySummary: string;
  chapterDisplayLocation: string;
  achievementBullets: string[];
  exercises: StaticExercise[];
  nextChapterSlug: string | null;
  nextChapterTitle?: string | null;
  nextChapterSummary?: string | null;
  targetLanguage: string;
}

/** Soft truncate for mastered chapters — keep intro + first section. */
export function LessonRunner({
  chapter,
  courseId,
  userName,
  grammarTopicSlug,
  grammarTitle,
  chapterStory,
  chapterDisplayTitle,
  chapterDisplaySummary,
  chapterDisplayLocation,
  achievementBullets,
  exercises: presetExercises,
  nextChapterSlug,
  nextChapterTitle = null,
  nextChapterSummary = null,
  targetLanguage,
}: LessonRunnerProps) {
  const router = useRouter();
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, { targetLanguage, ...vars });

  const displayGrammarTitle = grammarTitle ?? chapterDisplayTitle;
  const targetTitle = getChapterTargetTitle(chapter, courseId);

  const {
    content: grammarContent,
    loading: grammarLoading,
    error: grammarError,
  } = useLocalizedGrammarArticle(grammarTopicSlug, courseId);

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [loading, setLoading] = React.useState(false);
  const [exercises, setExercises] = React.useState<StaticExercise[]>([]);
  const [currentExerciseIdx, setCurrentExerciseIdx] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<{ correct: boolean; feedback: string } | null>(null);
  const [score, setScore] = React.useState(0);
  const [exercisesCompleted, setExercisesCompleted] = React.useState(0);
  const [dialogueResponse, setDialogueResponse] = React.useState<string | null>(null);
  const [dialogueInput, setDialogueInput] = React.useState("");
  const askInFlight = React.useRef(false);
  const [adaptation, setAdaptation] = React.useState<LessonAdaptation | null>(
    null,
  );
  const [revisionExercises, setRevisionExercises] = React.useState<
    StaticExercise[]
  >([]);
  const [practiceKind, setPracticeKind] =
    React.useState<PracticeKind>("main");
  /** Cursor into the chapter bank for successive rounds of SESSION_EXERCISES. */
  const [bankCursor, setBankCursor] = React.useState(0);
  const [theoryPageIdx, setTheoryPageIdx] = React.useState(0);
  /** Wrong answers in this lesson — feed reinforce, not the first bank items. */
  const [failedExerciseIds, setFailedExerciseIds] = React.useState<string[]>(
    [],
  );
  const [finishError, setFinishError] = React.useState<string | null>(null);
  const [rewards, setRewards] = React.useState<ChapterCompleteRewards | null>(
    null,
  );
  const [summaryName, setSummaryName] = React.useState(userName);

  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const data = await getLessonAdaptationAction({
          courseId,
          grammarTopic: grammarTopicSlug,
          vocabTopic: chapter.vocabTopic ?? null,
          chapterSlug: chapter.slug,
        });
        if (cancelled) return;
        setAdaptation(data.adaptation);
        setRevisionExercises(data.revisionExercises);
      } catch {
        // Non-fatal — lesson uses standard flow.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [courseId, grammarTopicSlug, chapter.vocabTopic, chapter.slug, language]);

  const chapterBank = React.useMemo(() => {
    if (presetExercises.length === 0) return [];
    // Never pad by cloning the same stems — short banks just run fewer items.
    return presetExercises;
  }, [presetExercises]);

  const exerciseCountByType = React.useMemo(() => {
    const counts: Partial<Record<import("@/types").ExerciseType, number>> = {};
    for (const ex of presetExercises) {
      counts[ex.type] = (counts[ex.type] ?? 0) + 1;
    }
    return counts;
  }, [presetExercises]);

  const reinforceSet = React.useMemo(() => {
    if (adaptation?.mode !== "supportive") return [];
    const byId = new Map(chapterBank.map((ex) => [ex.id, ex]));
    const failed = failedExerciseIds
      .map((id) => byId.get(id))
      .filter((ex): ex is StaticExercise => Boolean(ex));
    const failedIds = new Set(failed.map((ex) => ex.id));
    const unseen = chapterBank.filter((ex) => !failedIds.has(ex.id));
    const pick = [...failed, ...unseen].slice(0, Math.min(2, chapterBank.length));
    return pick;
  }, [adaptation, chapterBank, failedExerciseIds]);

  const bankRemaining = Math.max(0, chapterBank.length - bankCursor);

  /** Require a full session round when the bank can supply one. */
  const minPracticeToFinish =
    chapterBank.length === 0
      ? 0
      : Math.min(SESSION_EXERCISES, chapterBank.length);

  const practiceGateMet = exercisesCompleted >= minPracticeToFinish;

  const theoryPages = React.useMemo(() => {
    const pages = grammarTheoryPagesFromMarkdown(grammarContent ?? "");
    if (adaptation?.shortTheory && pages.length > 1) {
      return pages.slice(0, 1);
    }
    return pages;
  }, [grammarContent, adaptation?.shortTheory]);

  const theoryMarkdown = theoryPages[theoryPageIdx] ?? theoryPages[0] ?? "";
  const theoryPageCount = theoryPages.length;
  const isLastTheoryPage =
    theoryPageCount === 0 || theoryPageIdx >= theoryPageCount - 1;

  React.useEffect(() => {
    setTheoryPageIdx(0);
  }, [grammarContent]);

  const beginMainLesson = () => {
    setTheoryPageIdx(0);
    setPhase("theory");
  };

  const startLesson = () => {
    if (adaptation?.needsRevision && revisionExercises.length > 0) {
      setExercises(revisionExercises.slice(0, 3));
      setCurrentExerciseIdx(0);
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
      setPracticeKind("revision");
      setPhase("revision");
      return;
    }
    beginMainLesson();
  };

  const startBankRound = (fromCursor: number, kind: PracticeKind) => {
    const { batch, nextCursor } = pickUniqueStemBatch(
      chapterBank,
      fromCursor,
      SESSION_EXERCISES,
    );
    if (batch.length === 0) {
      setPhase("dialogue");
      return;
    }
    setBankCursor(nextCursor);
    setExercises(batch);
    setCurrentExerciseIdx(0);
    setUserAnswer("");
    setSelectedOption(null);
    setResult(null);
    setPracticeKind(kind);
    setPhase(kind === "reinforce" ? "reinforce" : "practice");
  };

  const generateExercises = () => {
    if (chapterBank.length > 0) {
      startBankRound(0, "main");
    } else {
      setPhase("dialogue");
    }
  };

  const continueBankPractice = () => {
    startBankRound(bankCursor, "main");
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
      } else if (ex.id) {
        setFailedExerciseIds((ids) =>
          ids.includes(ex.id) ? ids : [...ids, ex.id],
        );
      }

      void fetch("/api/exercises/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise: {
            type: ex.type,
            level: chapter.level,
            question: ex.question,
            instruction: ex.instruction,
            options: ex.options,
            answer: ex.answer,
            acceptableAnswers: ex.acceptableAnswers,
            topic: targetTitle,
            explanation: ex.explanation,
            staticSource: true,
            exerciseId: ex.id,
            chapterSlug: chapter.slug,
          },
          userAnswer: answer,
          level: chapter.level,
        }),
      }).catch(() => {
        // Local grade already shown; server sync is best-effort.
      });
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
            level: chapter.level,
            question: ex.question,
            instruction: ex.instruction,
            options: ex.options,
            answer: ex.answer,
            acceptableAnswers: ex.acceptableAnswers,
            topic: targetTitle,
            explanation: ex.explanation,
            staticSource: true,
            exerciseId: ex.id,
            chapterSlug: chapter.slug,
          },
          userAnswer: answer,
          level: chapter.level,
        }),
      });
      const data = res.ok
        ? ((await res.json()) as { correct: boolean; feedback: string })
        : local;
      setResult(data);
      setExercisesCompleted((n) => n + 1);
      if (data.correct) {
        setScore((s) => s + 1);
      } else if (ex.id) {
        setFailedExerciseIds((ids) =>
          ids.includes(ex.id) ? ids : [...ids, ex.id],
        );
      }
    } catch {
      setResult(local);
      setExercisesCompleted((n) => n + 1);
      if (ex.id) {
        setFailedExerciseIds((ids) =>
          ids.includes(ex.id) ? ids : [...ids, ex.id],
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const afterPracticeBlock = () => {
    if (practiceKind === "revision") {
      beginMainLesson();
      return;
    }
    if (practiceKind === "main" && reinforceSet.length > 0) {
      setExercises(reinforceSet);
      setCurrentExerciseIdx(0);
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
      setPracticeKind("reinforce");
      setPhase("reinforce");
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
      afterPracticeBlock();
    }
  };

  const askTutor = async () => {
    const question =
      dialogueInput.trim() ||
      t("lesson.defaultQuestion", { topic: displayGrammarTitle });
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
            courseId,
            grammarTopicSlug: grammarTopicSlug,
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

  const finishChapter = async () => {
    if (loading) return;
    if (!practiceGateMet) {
      setFinishError(
        t("lesson.finishNeedPractice", { count: minPracticeToFinish }),
      );
      return;
    }
    setLoading(true);
    setFinishError(null);
    try {
      const percent = scorePercent(score, exercisesCompleted);

      const res = await fetch("/api/chapters/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chapterSlug: chapter.slug,
          score: percent,
          wordsLearned: 0,
          exercisesCompleted,
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setFinishError(body?.error || t("lesson.finishError"));
        return;
      }

      const data = (await res.json()) as {
        rewards?: ChapterCompleteRewards | null;
        userName?: string;
      };
      if (data.rewards) setRewards(data.rewards);
      if (data.userName) setSummaryName(data.userName);

      trackEvent("chapter_complete", {
        chapter: chapter.slug,
        level: chapter.level,
        course: courseId,
        score: percent,
      });
      if (data.rewards?.egg) {
        trackEvent("easter_egg_found", {
          rarity: data.rewards.egg.rarity,
          course: courseId,
        });
      }

      setPhase("summary");
      router.refresh();
    } catch {
      setFinishError(t("lesson.finishError"));
    } finally {
      setLoading(false);
    }
  };

  const goToNextChapter = () => {
    if (nextChapterSlug) {
      router.push(`/chapters/${nextChapterSlug}`);
    } else {
      router.push("/dashboard");
    }
  };

  const introGreeting = userName
    ? t("lesson.greetingNamed", { name: userName })
    : t("lesson.greeting");

  const introBody =
    adaptation?.mode === "mastered_short"
      ? t("lesson.introMastered", { topic: displayGrammarTitle })
      : adaptation?.mode === "supportive"
        ? t("lesson.introSupportive", { topic: displayGrammarTitle })
        : t("lesson.introMessage", { topic: displayGrammarTitle });

  const renderPractice = (kind: PracticeKind) => {
    if (exercises.length === 0) return null;
    const ex = exercises[currentExerciseIdx];
    const isSentenceBuilding = ex.type === "sentence_building";
    const isMultipleChoice = ex.type === "multiple_choice";
    const hasMcOptions =
      isMultipleChoice && ex.options && ex.options.length > 0;
    const hasSbOptions =
      isSentenceBuilding && ex.options && ex.options.length > 0;
    const titleKey =
      kind === "revision"
        ? "lesson.revisionTitle"
        : kind === "reinforce"
          ? "lesson.reinforceTitle"
          : "lesson.practice";
    const nextLabel =
      currentExerciseIdx + 1 < exercises.length
        ? t("lesson.nextExercise")
        : kind === "revision"
          ? t("lesson.goToTheory")
          : kind === "reinforce"
            ? t("lesson.goToDialogue")
            : reinforceSet.length > 0 && kind === "main"
              ? t("lesson.goToReinforce")
              : t("lesson.goToDialogue");

    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink
          href={`/chapters?courseId=${encodeURIComponent(courseId)}`}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">{t(titleKey)}</h2>
          </div>
          <Badge variant="level">{chapterDisplayTitle}</Badge>
        </div>
        {kind === "revision" && (
          <p className="text-sm text-muted-foreground text-center">
            {t("lesson.revisionIntro")}
          </p>
        )}
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
                    courseId={courseId}
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
                        if (e.key === "Enter") checkAnswer();
                      }}
                      autoFocus
                    />
                  )}
                </>
              )}
              <Button
                variant="gradient"
                className="w-full"
                onClick={checkAnswer}
                disabled={
                  loading ||
                  (hasMcOptions
                    ? !selectedOption
                    : hasSbOptions
                      ? !userAnswer.trim()
                      : !userAnswer.trim())
                }
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                {t("lesson.check")}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className={cn(
                "flex items-center gap-3 rounded-lg p-4",
                result.correct ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
              )}>
                {result.correct ? <CheckCircle2 className="h-6 w-6 shrink-0" /> : <Sparkles className="h-6 w-6 shrink-0" />}
                <div>
                  <p className="font-semibold">{result.correct ? t("lesson.correct") : t("lesson.incorrect")}</p>
                  {!result.correct && (
                    <p className="text-xs opacity-90 mt-1">
                      {t("lesson.correctAnswer", { answer: ex.answer })}
                    </p>
                  )}
                </div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-xs font-semibold text-primary mb-1">{t("lesson.explanation")}</p>
                <p className="text-sm">{result.feedback}</p>
              </div>
              <Button variant="gradient" className="w-full" onClick={nextExercise}>
                {nextLabel}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink
          href={`/chapters?courseId=${encodeURIComponent(courseId)}`}
        />
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">{chapter.icon}</div>
            <Badge className="bg-white/20 text-white border-0 mb-2">
              {t("lesson.chapterBadge", {
                number: chapter.number,
                level: chapter.level,
              })}
            </Badge>
            <h1 className="text-3xl font-bold mb-1">{chapterDisplayTitle}</h1>
            {targetTitle !== chapterDisplayTitle && (
              <p className="text-white/80 italic">{targetTitle}</p>
            )}
            <p className="text-white/70 text-sm mt-3">{chapterDisplaySummary}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4" />
              📍 {chapterDisplayLocation} · {t("lesson.minutes", { minutes: chapter.estimatedMinutes })}
            </div>
          </div>
          <CardContent className="p-6 text-center">
            {chapterStory && (
              <div className="mb-6 rounded-xl border border-primary/15 bg-primary/5 px-5 py-4 text-left">
                <p className="text-sm leading-relaxed text-foreground/85 italic">
                  <span className="mr-1.5 not-italic">📜</span>
                  {chapterStory}
                </p>
              </div>
            )}
            <p className="text-base text-muted-foreground mb-6">
              <span className="text-2xl">🦅</span> {introGreeting} {introBody}
            </p>
            {chapter.exerciseTypes?.length ? (
              <div className="mb-6 text-left">
                <ChapterExerciseTypeGuide
                  exerciseTypes={chapter.exerciseTypes}
                  exerciseCountByType={exerciseCountByType}
                  language={language}
                />
              </div>
            ) : null}
            {adaptation?.needsRevision && revisionExercises.length > 0 && (
              <p className="text-sm text-muted-foreground mb-4">
                {t("lesson.revisionHint")}
              </p>
            )}
            <Button variant="gradient" size="lg" onClick={startLesson}>
              <BookOpen className="h-4 w-4" />
              {adaptation?.needsRevision && revisionExercises.length > 0
                ? t("lesson.startWithRevision")
                : t("lesson.startBtn")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "revision") return renderPractice("revision");
  if (phase === "practice") return renderPractice("main");
  if (phase === "reinforce") return renderPractice("reinforce");

  if (phase === "theory") {
    return (
      <div className="max-w-3xl mx-auto py-6 space-y-6">
        <BackLink
          href={`/chapters?courseId=${encodeURIComponent(courseId)}`}
        />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="h-5 w-5 shrink-0 text-primary" />
            <h2 className="text-xl font-bold truncate">{t("lesson.newTopic")}</h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {theoryPageCount > 1 && (
              <span className="text-xs text-muted-foreground tabular-nums">
                {t("lesson.theoryPage", {
                  current: theoryPageIdx + 1,
                  total: theoryPageCount,
                })}
              </span>
            )}
            <Badge variant="level">{chapterDisplayTitle}</Badge>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="level">{chapter.level}</Badge>
              <span className="text-sm text-muted-foreground">{displayGrammarTitle}</span>
            </div>
            {grammarLoading ? (
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse text-primary" />
                {t("grammar.loadingArticle")}
              </p>
            ) : grammarError ? (
              <p className="text-sm text-destructive">{grammarError}</p>
            ) : theoryMarkdown ? (
              <>
                {adaptation?.shortTheory && (
                  <p className="text-sm text-muted-foreground mb-4 rounded-lg border border-primary/15 bg-primary/5 px-3 py-2">
                    {t("lesson.shortTheoryNote")}
                  </p>
                )}
                <Markdown content={theoryMarkdown} />
              </>
            ) : null}
            {isLastTheoryPage && chapter.exerciseTypes?.length ? (
              <div className="mt-6 pt-6 border-t border-border">
                <ChapterExerciseTypeGuide
                  exerciseTypes={chapter.exerciseTypes}
                  exerciseCountByType={exerciseCountByType}
                  language={language}
                />
              </div>
            ) : null}
          </CardContent>
        </Card>
        {theoryPageCount > 1 && (
          <div className="flex items-center justify-center gap-1.5">
            {theoryPages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={t("lesson.theoryPage", {
                  current: i + 1,
                  total: theoryPageCount,
                })}
                onClick={() => setTheoryPageIdx(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === theoryPageIdx
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
              />
            ))}
          </div>
        )}
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex gap-2">
            {theoryPageCount > 1 && (
              <Button
                variant="outline"
                disabled={theoryPageIdx === 0}
                onClick={() => setTheoryPageIdx((i) => Math.max(0, i - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
                {t("common.back")}
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 ml-auto">
            {(adaptation?.shortTheory ||
              adaptation?.mode === "mastered_short") &&
              chapterBank.length > 0 && (
              <Button variant="outline" onClick={generateExercises}>
                {t("lesson.skipToPractice")}
              </Button>
            )}
            {!isLastTheoryPage ? (
              <Button
                variant="gradient"
                onClick={() =>
                  setTheoryPageIdx((i) =>
                    Math.min(theoryPageCount - 1, i + 1),
                  )
                }
              >
                {t("lesson.nextRule")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button variant="gradient" onClick={generateExercises}>
                <ArrowRight className="h-4 w-4" />
                {t("lesson.goToPractice")}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "dialogue") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink
          href={`/chapters?courseId=${encodeURIComponent(courseId)}`}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">{t("lesson.dialogueTitle")}</h2>
          </div>
          <Badge variant="level">{chapterDisplayTitle}</Badge>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-base text-muted-foreground">
              <span className="text-2xl">🦅</span>{" "}
              {t("lesson.dialoguePrompt", { topic: displayGrammarTitle })}
            </p>
            <Input
              value={dialogueInput}
              onChange={(e) => setDialogueInput(e.target.value)}
              placeholder={t("lesson.dialoguePlaceholder")}
              onKeyDown={(e) => { if (e.key === "Enter") askTutor(); }}
            />
            <Button
              variant="secondary"
              className="w-full"
              disabled={loading}
              onClick={() => {
                setDialogueInput(
                  t("lesson.defaultQuestion", { topic: displayGrammarTitle }),
                );
              }}
            >
              {t("lesson.dialogueSuggested")}
            </Button>
            <Button variant="gradient" className="w-full" onClick={askTutor} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageSquare className="h-4 w-4" />}
              {loading ? t("lesson.thinking") : t("lesson.askTutor")}
            </Button>
            {dialogueResponse && (
              <div className="rounded-lg border bg-card p-4">
                <Markdown content={dialogueResponse} />
              </div>
            )}
            {bankRemaining > 0 && (
              <Button
                variant={practiceGateMet ? "secondary" : "gradient"}
                className="w-full"
                onClick={continueBankPractice}
              >
                <Sparkles className="h-4 w-4" />
                {t("lesson.moreFromBank", {
                  count: Math.min(SESSION_EXERCISES, bankRemaining),
                })}
              </Button>
            )}
            {finishError && (
              <p className="text-sm text-destructive text-center">{finishError}</p>
            )}
            {!practiceGateMet && minPracticeToFinish > 0 && (
              <p className="text-sm text-muted-foreground text-center">
                {t("lesson.finishNeedPractice", { count: minPracticeToFinish })}
              </p>
            )}
            <Button
              variant="outline"
              className="w-full"
              onClick={finishChapter}
              disabled={loading || !practiceGateMet}
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
              {finishError ? t("lesson.retryFinish") : t("lesson.finishChapter")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "summary") {
    const achievements = achievementBullets;

    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <BackLink
          href={`/chapters?courseId=${encodeURIComponent(courseId)}`}
        />
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-2">
              {t("lesson.chapterComplete", { number: chapter.number })}
            </h1>
            <p className="text-white/80">
              {targetTitle !== chapterDisplayTitle
                ? `${chapterDisplayTitle} — ${targetTitle}`
                : chapterDisplayTitle}
            </p>
          </div>
          <CardContent className="p-6 space-y-4">
            {rewards?.egg ? <EasterEggReveal egg={rewards.egg} /> : null}

            <CompletionCertificateCard
              userName={summaryName || userName}
              achievement={t("journey.chapterLine", {
                number: chapter.number,
                title: chapterDisplayTitle,
              })}
              level={chapter.level}
              courseId={courseId}
              downloadStem={`chapter-${chapter.number}`}
            />

            {rewards?.levelCert ? (
              <div className="space-y-2">
                {rewards.levelCert.isNew ? (
                  <p className="text-center text-sm font-medium text-emerald-700">
                    {t("journey.levelCertUnlocked")}
                  </p>
                ) : null}
                <CompletionCertificateCard
                  userName={summaryName || userName}
                  achievement={t("journey.levelCertAchievement", {
                    level: rewards.levelCert.level,
                  })}
                  level={rewards.levelCert.level}
                  courseId={courseId}
                  downloadStem={`level-${rewards.levelCert.level}`}
                />
              </div>
            ) : null}

            {rewards?.courseCert?.isNew ? (
              <div className="space-y-2">
                <p className="text-center text-sm font-medium text-amber-800">
                  {t("journey.courseCertTitle")}
                </p>
                <CompletionCertificateCard
                  userName={summaryName || userName}
                  achievement={t("journey.courseCertAchievement")}
                  level={chapter.level}
                  courseId={courseId}
                  downloadStem={`course-${courseId}`}
                />
              </div>
            ) : null}

            <div className="rounded-lg bg-muted/30 p-4 space-y-2">
              <p className="font-semibold text-sm mb-2">
                {t("lesson.todayYouLearned")}
              </p>
              <ul className="text-sm space-y-1.5">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(exercisesCompleted > 0 || score > 0) && (
              <div className="rounded-lg border border-border/60 p-4 space-y-2">
                <p className="font-semibold text-sm mb-1">
                  {t("lesson.statsHeading")}
                </p>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  {exercisesCompleted > 0 && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />{" "}
                      {t("lesson.didExercises", { count: exercisesCompleted })}
                    </li>
                  )}
                  {score > 0 && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />{" "}
                      {t("lesson.correctScore", {
                        score,
                        total: exercisesCompleted,
                      })}
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />{" "}
                    {t("lesson.studiedMinutes", {
                      minutes: chapter.estimatedMinutes,
                    })}
                  </li>
                </ul>
              </div>
            )}

            {nextChapterTitle && (
              <p className="text-sm text-muted-foreground leading-relaxed text-center px-1">
                {nextChapterSummary
                  ? t("lesson.nextMatters", {
                      title: nextChapterTitle,
                      reason: nextChapterSummary,
                    })
                  : t("lesson.nextMattersShort", { title: nextChapterTitle })}
              </p>
            )}

            <p className="text-base text-muted-foreground text-center">
              <span className="text-2xl">🦅</span>{" "}
              {t("lesson.mentorQuote", {
                name: summaryName || userName || t("lesson.friend"),
              })}
            </p>
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              onClick={goToNextChapter}
            >
              <ArrowRight className="h-4 w-4" />
              {t("lesson.openNext")}
            </Button>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/journey">{t("journey.openPassport")}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
