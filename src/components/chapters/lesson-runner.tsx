"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
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
import { getGrammarTopicTitle } from "@/lib/grammar-display";
import {
  getChapterAchievementBullets,
  getChapterLocation,
  getChapterSummary,
  getChapterTitle,
} from "@/lib/chapter-display";
import { translate } from "@/lib/i18n";
import { getLessonAdaptationAction } from "@/server/actions/learning-profile";
import type { GrammarTopic, StaticExercise } from "@/types";
import type { LessonAdaptation } from "@/types/learning-profile";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/types";

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
  grammarNativeContent: string;
  grammarTopic?: GrammarTopic | null;
  exercises: StaticExercise[];
  nextChapterSlug: string | null;
  nextChapterTitle?: string | null;
  nextChapterSummary?: string | null;
  targetLanguage: string;
}

/** Soft truncate for mastered chapters — keep intro + first section. */
function shortenTheoryMarkdown(content: string): string {
  const byHeading = content.split(/\n(?=##\s)/);
  if (byHeading.length > 1) {
    return byHeading.slice(0, 2).join("\n").trim();
  }
  if (content.length <= 900) return content;
  return `${content.slice(0, 900).trim()}…`;
}

export function LessonRunner({
  chapter,
  courseId,
  userName,
  grammarTopicSlug,
  grammarNativeContent,
  grammarTopic,
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

  const grammarTitle = grammarTopic
    ? getGrammarTopicTitle(grammarTopic, language)
    : getChapterTitle(chapter, language);

  const chapterDisplayTitle = getChapterTitle(chapter, language);
  const chapterDisplaySummary = getChapterSummary(chapter, language);
  const chapterDisplayLocation = getChapterLocation(chapter, language);

  const {
    content: grammarContent,
    loading: grammarLoading,
    error: grammarError,
  } = useLocalizedGrammarArticle(
    grammarTopicSlug,
    courseId,
    grammarNativeContent,
  );

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
  const [wordsLearned, setWordsLearned] = React.useState(0);
  const [adaptation, setAdaptation] = React.useState<LessonAdaptation | null>(
    null,
  );
  const [revisionExercises, setRevisionExercises] = React.useState<
    StaticExercise[]
  >([]);
  const [practiceKind, setPracticeKind] =
    React.useState<PracticeKind>("main");

  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const data = await getLessonAdaptationAction({
          courseId,
          grammarTopic: grammarTopicSlug,
          vocabTopic: chapter.vocabTopic ?? null,
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
  }, [courseId, grammarTopicSlug, chapter.vocabTopic]);

  const mainPracticeSet = React.useMemo(() => {
    if (presetExercises.length === 0) return [];
    // Mastered → more practice (repeat bank once if short).
    if (
      adaptation?.practiceEmphasis &&
      adaptation.mode === "mastered_short" &&
      presetExercises.length < 5
    ) {
      return [...presetExercises, ...presetExercises.slice(0, 2)];
    }
    return presetExercises;
  }, [presetExercises, adaptation]);

  const reinforceSet = React.useMemo(() => {
    if (adaptation?.mode !== "supportive") return [];
    return presetExercises.slice(0, Math.min(2, presetExercises.length));
  }, [adaptation, presetExercises]);

  const theoryMarkdown = React.useMemo(() => {
    if (!grammarContent) return null;
    if (adaptation?.shortTheory) return shortenTheoryMarkdown(grammarContent);
    return grammarContent;
  }, [grammarContent, adaptation?.shortTheory]);

  const beginMainLesson = () => {
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

  const generateExercises = () => {
    if (mainPracticeSet.length > 0) {
      setExercises(mainPracticeSet);
      setCurrentExerciseIdx(0);
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
      setPracticeKind("main");
      setPhase("practice");
    } else {
      setPhase("dialogue");
    }
  };

  const checkAnswer = () => {
    const ex = exercises[currentExerciseIdx];
    if (!ex) return;
    const answer = (selectedOption ?? userAnswer).trim();
    if (!answer) return;

    const norm = (s: string) =>
      s.trim().toLowerCase().replace(/[¿?¡!.,]/g, "").replace(/\s+/g, " ");

    const userNorm = norm(answer);
    const acceptable = [ex.answer, ...(ex.acceptableAnswers ?? [])].map(norm);
    const isCorrect = acceptable.includes(userNorm);

    setResult({
      correct: isCorrect,
      feedback: ex.explanation,
    });
    setExercisesCompleted((n) => n + 1);
    if (isCorrect) setScore((s) => s + 1);
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
      t("lesson.defaultQuestion", { topic: grammarTitle });
    setLoading(true);
    setDialogueResponse(null);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: question }] }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setDialogueResponse(data.content);
    } catch {
      setDialogueResponse(t("lesson.tutorError"));
    } finally {
      setLoading(false);
    }
  };

  const finishChapter = async () => {
    setLoading(true);
    try {
      const estWords = chapter.vocabTopic ? 5 + Math.floor(Math.random() * 5) : 3;
      setWordsLearned(estWords);

      await fetch("/api/chapters/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chapterSlug: chapter.slug,
          score,
          wordsLearned: estWords,
          exercisesCompleted,
        }),
      });

      setPhase("summary");
    } catch {
      setPhase("summary");
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
      ? t("lesson.introMastered", { topic: grammarTitle })
      : adaptation?.mode === "supportive"
        ? t("lesson.introSupportive", { topic: grammarTitle })
        : t("lesson.introMessage", { topic: grammarTitle });

  const renderPractice = (kind: PracticeKind) => {
    if (exercises.length === 0) return null;
    const ex = exercises[currentExerciseIdx];
    const hasOptions = ex.options && ex.options.length > 0;
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
              {ex.instruction && (
                <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">{t("lesson.taskLabel")}</span>
                    {ex.instruction}
                  </p>
                </div>
              )}
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-lg font-medium">{ex.question}</p>
              </div>
              {hasOptions ? (
                <div className="grid gap-2">
                  {ex.options!.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedOption(opt)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border-2 p-3 text-left transition-all",
                        selectedOption === opt ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
                      )}
                    >
                      <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        selectedOption === opt ? "bg-primary text-primary-foreground" : "bg-muted")}>
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
                  onKeyDown={(e) => { if (e.key === "Enter") checkAnswer(); }}
                  autoFocus
                />
              )}
              <Button variant="gradient" className="w-full" onClick={checkAnswer}
                disabled={hasOptions ? !selectedOption : !userAnswer.trim()}>
                <Check className="h-4 w-4" />
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
            <p className="text-white/80 italic">{chapter.titleEs}</p>
            <p className="text-white/70 text-sm mt-3">{chapterDisplaySummary}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4" />
              📍 {chapterDisplayLocation} · {t("lesson.minutes", { minutes: chapter.estimatedMinutes })}
            </div>
          </div>
          <CardContent className="p-6 text-center">
            <p className="text-base text-muted-foreground mb-6">
              <span className="text-2xl">🦅</span> {introGreeting} {introBody}
            </p>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">
              {adaptation?.shortTheory
                ? t("lesson.quickReview")
                : t("lesson.newTopic")}
            </h2>
          </div>
          <Badge variant="level">{chapterDisplayTitle}</Badge>
        </div>
        {adaptation?.shortTheory && (
          <p className="text-sm text-muted-foreground">
            {t("lesson.shortTheoryNote")}
          </p>
        )}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="level">{chapter.level}</Badge>
              <span className="text-sm text-muted-foreground">{grammarTitle}</span>
            </div>
            {grammarLoading ? (
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse text-primary" />
                {t("grammar.loadingArticle")}
              </p>
            ) : grammarError ? (
              <p className="text-sm text-destructive">{grammarError}</p>
            ) : theoryMarkdown ? (
              <Markdown content={theoryMarkdown} />
            ) : null}
          </CardContent>
        </Card>
        <div className="flex justify-end gap-2">
          {adaptation?.mode === "mastered_short" && mainPracticeSet.length > 0 && (
            <Button variant="outline" onClick={generateExercises}>
              {t("lesson.skipToPractice")}
            </Button>
          )}
          <Button variant="gradient" onClick={generateExercises}>
            <ArrowRight className="h-4 w-4" />
            {t("lesson.goToPractice")}
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "dialogue") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
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
              {t("lesson.dialoguePrompt", { topic: grammarTitle })}
            </p>
            <Input
              value={dialogueInput}
              onChange={(e) => setDialogueInput(e.target.value)}
              placeholder={t("lesson.dialoguePlaceholder")}
              onKeyDown={(e) => { if (e.key === "Enter") askTutor(); }}
            />
            <Button variant="gradient" className="w-full" onClick={askTutor} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageSquare className="h-4 w-4" />}
              {loading ? t("lesson.thinking") : t("lesson.askTutor")}
            </Button>
            {dialogueResponse && (
              <div className="rounded-lg border bg-card p-4">
                <Markdown content={dialogueResponse} />
              </div>
            )}
            <Button variant="outline" className="w-full" onClick={finishChapter} disabled={loading}>
              <Check className="h-4 w-4" />
              {t("lesson.finishChapter")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "summary") {
    const achievements = getChapterAchievementBullets(
      chapter,
      language,
      grammarTitle,
    );

    return (
      <div className="max-w-2xl mx-auto py-6">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-2">
              {t("lesson.chapterComplete", { number: chapter.number })}
            </h1>
            <p className="text-white/80">
              {chapterDisplayTitle} — {chapter.titleEs}
            </p>
          </div>
          <CardContent className="p-6 space-y-4">
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

            {(exercisesCompleted > 0 || score > 0 || wordsLearned > 0) && (
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
                  {wordsLearned > 0 && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />{" "}
                      {t("lesson.learnedWords", { count: wordsLearned })}
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
                name: userName || t("lesson.friend"),
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
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
