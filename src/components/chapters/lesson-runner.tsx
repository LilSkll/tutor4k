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
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Markdown } from "@/components/shared/markdown";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/types";
import { toast } from "sonner";

// =====================================================================
// Lesson Runner — the guided learning flow
// Phases: intro → theory → practice → dialogue → summary
// =====================================================================

type Phase = "intro" | "theory" | "practice" | "dialogue" | "summary";

interface ExerciseData {
  question: string;
  instruction?: string;
  options?: string[];
  answer: string;
  acceptableAnswers?: string[];
  explanation: string;
  topic: string;
}

interface LessonRunnerProps {
  chapter: Chapter;
  userName: string;
  grammarContent: string;
  grammarTitle: string;
}

export function LessonRunner({
  chapter,
  userName,
  grammarContent,
  grammarTitle,
}: LessonRunnerProps) {
  const router = useRouter();
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [loading, setLoading] = React.useState(false);
  const [exercises, setExercises] = React.useState<ExerciseData[]>([]);
  const [currentExerciseIdx, setCurrentExerciseIdx] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<{ correct: boolean; feedback: string } | null>(null);
  const [score, setScore] = React.useState(0);
  const [exercisesCompleted, setExercisesCompleted] = React.useState(0);
  const [dialogueResponse, setDialogueResponse] = React.useState<string | null>(null);
  const [dialogueInput, setDialogueInput] = React.useState("");
  const [wordsLearned, setWordsLearned] = React.useState(0);

  // --- Exercise generation for the practice phase -------------------
  const generateExercises = async () => {
    setLoading(true);
    try {
      const generated: ExerciseData[] = [];
      const types = chapter.exerciseTypes;
      for (let i = 0; i < 3; i++) {
        const type = types[i % types.length];
        const res = await fetch("/api/exercises/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, level: chapter.level, topic: grammarTitle }),
        });
        if (!res.ok) throw new Error("Failed");
        generated.push(await res.json());
      }
      setExercises(generated);
      setCurrentExerciseIdx(0);
      setPhase("practice");
    } catch {
      toast.error("Не удалось загрузить упражнения.");
      setPhase("theory");
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async () => {
    const ex = exercises[currentExerciseIdx];
    if (!ex) return;
    const answer = selectedOption ?? userAnswer;
    if (!answer.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/exercises/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exercise: ex, userAnswer: answer, level: chapter.level }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setResult(data);
      setExercisesCompleted((n) => n + 1);
      if (data.correct) setScore((s) => s + 1);
    } catch {
      toast.error("Не удалось проверить ответ.");
    } finally {
      setLoading(false);
    }
  };

  const nextExercise = () => {
    if (currentExerciseIdx + 1 < exercises.length) {
      setCurrentExerciseIdx((i) => i + 1);
      setUserAnswer("");
      setSelectedOption(null);
      setResult(null);
    } else {
      setPhase("dialogue");
    }
  };

  const askTutor = async () => {
    const question = dialogueInput.trim() || `Explícame brevemente: ${grammarTitle}. Dame un ejemplo.`;
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
      setDialogueResponse("⚠️ Не удалось связаться с репетитором.");
    } finally {
      setLoading(false);
    }
  };

  const finishChapter = async () => {
    setLoading(true);
    try {
      const estWords = chapter.vocabTopic ? 5 + Math.floor(Math.random() * 5) : 3;
      setWordsLearned(estWords);

      // Record completion via API.
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
      // Even if save fails, show summary so user can continue.
      setPhase("summary");
    } finally {
      setLoading(false);
    }
  };

  const goToNextChapter = () => {
    // Static import to avoid dynamic import issues on Vercel.
    import("@/config/chapters").then(({ getNextChapter }) => {
      const next = getNextChapter(chapter.slug);
      if (next) {
        router.push(`/chapters/${next.slug}`);
      } else {
        router.push("/dashboard");
      }
    });
  };

  // =====================================================================
  // RENDER
  // =====================================================================

  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">{chapter.icon}</div>
            <Badge className="bg-white/20 text-white border-0 mb-2">
              Глава {chapter.number} · {chapter.level}
            </Badge>
            <h1 className="text-3xl font-bold mb-1">{chapter.title}</h1>
            <p className="text-white/80 italic">{chapter.titleEs}</p>
            <p className="text-white/70 text-sm mt-3">{chapter.summary}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4" />
              📍 {chapter.location} · ~{chapter.estimatedMinutes} мин
            </div>
          </div>
          <CardContent className="p-6 text-center">
            <p className="text-base text-muted-foreground mb-6">
              <span className="text-2xl">🦅</span> Привет{userName ? `, ${userName}` : ""}! Я твой наставник. Сегодня мы изучим тему «{grammarTitle}». Готов начать?
            </p>
            <Button variant="gradient" size="lg" onClick={() => setPhase("theory")}>
              <BookOpen className="h-4 w-4" />
              Начать обучение
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "theory") {
    return (
      <div className="max-w-3xl mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Новая тема</h2>
          </div>
          <Badge variant="level">{chapter.titleEs}</Badge>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="level">{chapter.level}</Badge>
              <span className="text-sm text-muted-foreground">{grammarTitle}</span>
            </div>
            <Markdown content={grammarContent} />
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Button variant="gradient" onClick={generateExercises} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            {loading ? "Готовлю упражнения..." : "Перейти к практике"}
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "practice" && exercises.length > 0) {
    const ex = exercises[currentExerciseIdx];
    const hasOptions = ex.options && ex.options.length > 0;
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Практика</h2>
          </div>
          <Badge variant="level">{chapter.titleEs}</Badge>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Упражнение {currentExerciseIdx + 1} из {exercises.length} · Очки: {score}
        </div>

        {!result ? (
          <Card>
            <CardContent className="p-6 space-y-4">
              {ex.instruction && (
                <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">📋 Задание: </span>
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
                  placeholder="Напиши свой ответ..."
                  onKeyDown={(e) => { if (e.key === "Enter") checkAnswer(); }}
                  autoFocus
                />
              )}
              <Button variant="gradient" className="w-full" onClick={checkAnswer}
                disabled={loading || (hasOptions ? !selectedOption : !userAnswer.trim())}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                Проверить
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
                  <p className="font-semibold">{result.correct ? "¡Верно!" : "Неверно"}</p>
                  {!result.correct && <p className="text-xs opacity-90 mt-1">Правильный ответ: {ex.answer}</p>}
                </div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-xs font-semibold text-primary mb-1">📖 Объяснение</p>
                <p className="text-sm">{result.feedback}</p>
              </div>
              <Button variant="gradient" className="w-full" onClick={nextExercise}>
                {currentExerciseIdx + 1 < exercises.length ? "Следующее упражнение" : "Перейти к диалогу"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  if (phase === "dialogue") {
    return (
      <div className="max-w-2xl mx-auto py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Диалог с наставником</h2>
          </div>
          <Badge variant="level">{chapter.titleEs}</Badge>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <p className="text-base text-muted-foreground">
              <span className="text-2xl">🦅</span> Задай мне вопрос по теме «{grammarTitle}» — или нажми кнопку, и я дам пример.
            </p>
            <Input
              value={dialogueInput}
              onChange={(e) => setDialogueInput(e.target.value)}
              placeholder="Например: «В чём разница между ser и estar?»"
              onKeyDown={(e) => { if (e.key === "Enter") askTutor(); }}
            />
            <Button variant="gradient" className="w-full" onClick={askTutor} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageSquare className="h-4 w-4" />}
              {loading ? "Думаю..." : "Спросить репетитора"}
            </Button>
            {dialogueResponse && (
              <div className="rounded-lg border bg-card p-4">
                <Markdown content={dialogueResponse} />
              </div>
            )}
            <Button variant="outline" className="w-full" onClick={finishChapter} disabled={loading}>
              <Check className="h-4 w-4" />
              Завершить главу
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "summary") {
    return (
      <div className="max-w-2xl mx-auto py-6">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-8 text-white text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-2">Глава {chapter.number} пройдена!</h1>
            <p className="text-white/80">{chapter.title} — {chapter.titleEs}</p>
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="rounded-lg bg-muted/30 p-4 space-y-2">
              <p className="font-semibold text-sm mb-2">Сегодня ты:</p>
              <ul className="text-sm space-y-1.5">
                {exercisesCompleted > 0 && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" /> выполнил {exercisesCompleted} упражнений
                  </li>
                )}
                {score > 0 && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" /> правильно ответил на {score} из {exercisesCompleted}
                  </li>
                )}
                {wordsLearned > 0 && (
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" /> выучил {wordsLearned} новых слов
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> занимался ~{chapter.estimatedMinutes} минут
                </li>
              </ul>
            </div>
            <p className="text-base text-muted-foreground text-center">
              <span className="text-2xl">🦅</span> «Отличная работа, {userName || "друг"}! Ты продвинулся вперёд.»
            </p>
            <Button variant="gradient" size="lg" className="w-full" onClick={goToNextChapter}>
              <ArrowRight className="h-4 w-4" />
              Открыть следующую главу
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
