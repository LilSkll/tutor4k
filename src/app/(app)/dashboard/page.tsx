import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Flame,
  Globe,
  MapPin,
  MessageSquare,
  Play,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/shared/progress-ring";
import { StatCard } from "@/components/shared/stat-card";
import { MascotTip } from "@/components/shared/mascot-tip";
import { getCurrentProfile, getChapterProgress } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { toRoman } from "@/config/chapters";
import { translate } from "@/lib/i18n";
import { getWordGloss } from "@/lib/vocab-display";
import {
  countCompletedForCourse,
  getChapterLocation,
  getChapterSummary,
  getChapterTitle,
} from "@/lib/chapter-display";

export default async function DashboardPage() {
  const [profile, progress] = await Promise.all([
    getCurrentProfile(),
    getChapterProgress(),
  ]);

  const lang = profile?.interface_language ?? "ru";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, lang, vars);

  const courseId = profile?.active_course_id ?? "spanish";
  const course = await getCourse(courseId);
  const CHAPTERS = course.getChapters();
  const vocabTopics = course.getVocab();

  const courseChapterSlugs = CHAPTERS.map((c) => c.slug);
  const completedSlugs = new Set(
    progress
      .filter((p) => p.status === "completed")
      .map((p) => p.chapter_slug)
      .filter(Boolean),
  );

  const userLevel = profile?.level;
  let currentChapter = CHAPTERS[0];
  if (userLevel) {
    const firstForLevel = CHAPTERS.find((c) => c.level === userLevel);
    if (firstForLevel) currentChapter = firstForLevel;
  }

  const startIndex = CHAPTERS.findIndex((c) => c.slug === currentChapter.slug);
  for (let i = startIndex; i < CHAPTERS.length; i++) {
    if (!completedSlugs.has(CHAPTERS[i].slug)) {
      currentChapter = CHAPTERS[i];
      break;
    }
  }

  const nextChapter = course.getNextChapter(currentChapter.slug);
  const totalCompleted = countCompletedForCourse(
    completedSlugs,
    courseChapterSlugs,
  );
  const totalChapters = CHAPTERS.length;
  const courseProgressPct =
    totalChapters > 0
      ? Math.min(100, Math.round((totalCompleted / totalChapters) * 100))
      : 0;
  const streak = profile?.streak ?? 0;
  const dailyGoal = profile?.daily_goal_minutes ?? 15;
  const courseLabel = `${course.flag} ${course.titleNative}`;

  // Stable "word of the day" from course vocab (no AI).
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  const flatWords = vocabTopics.flatMap((topic) => topic.words);
  const wordOfDay =
    flatWords.length > 0
      ? flatWords[dayIndex % flatWords.length]
      : null;
  const gloss = wordOfDay
    ? getWordGloss(wordOfDay, lang, courseId) || wordOfDay.translation || ""
    : "";

  const greeting = profile?.name
    ? t("dashboard.greetingNamed", { name: profile.name })
    : t("dashboard.greeting");

  const motivation =
    streak > 0
      ? t("dashboard.motivationStreak", { streak })
      : t("dashboard.motivationStart");

  return (
    <div className="page-container space-y-6 md:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="meta-label">{courseLabel}</p>
        <h1 className="page-title">{greeting}</h1>
        <p className="text-sm text-muted-foreground">
          {t("dashboard.hubSubtitle")}
        </p>
      </div>

      <MascotTip message={motivation} />

      {/* Today's lesson */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="section-title">{t("dashboard.todaysLesson")}</h2>
          <Badge variant="level">{currentChapter.level}</Badge>
        </div>

        <Card className="relative overflow-hidden shadow-elevated">
          <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-5 sm:p-7 text-white">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-4xl backdrop-blur-sm">
                {currentChapter.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/70 uppercase tracking-wide mb-1">
                  {t("dashboard.chapterLabel", {
                    number: toRoman(currentChapter.number),
                    level: currentChapter.level,
                  })}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold truncate">
                  {getChapterTitle(currentChapter, lang)}
                </h3>
                <p className="text-white/75 text-sm italic truncate">
                  {currentChapter.titleEs}
                </p>
                <p className="text-white/70 text-sm mt-2 line-clamp-2">
                  {getChapterSummary(currentChapter, lang)}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70 mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {getChapterLocation(currentChapter, lang)}
                  </span>
                  <span>
                    {t("lesson.minutes", {
                      minutes: currentChapter.estimatedMinutes,
                    })}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-5">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-soft"
                    asChild
                  >
                    <Link href={`/chapters/${currentChapter.slug}`}>
                      <Play className="h-4 w-4" />
                      {t("dashboard.continueLearning")}
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto text-white hover:bg-white/15 hover:text-white"
                    asChild
                  >
                    <Link href="/tutor">
                      <MessageSquare className="h-4 w-4" />
                      {t("dashboard.quickTutor")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          label={t("dashboard.currentStreak")}
          value={
            <span className="flex items-center gap-1.5 text-orange-500">
              <Flame className="h-6 w-6" />
              {streak}
            </span>
          }
          footnote={t("dashboard.streakDays")}
        />
        <StatCard
          label={t("dashboard.currentLevel")}
          value={profile?.level ?? "A1"}
          footnote={t("dashboard.levelLabel")}
        />
        <StatCard
          label={t("dashboard.dailyGoal")}
          value={
            <span className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {dailyGoal}
            </span>
          }
          footnote={t("dashboard.minutesGoal", { n: dailyGoal })}
        />
        <div className="rounded-2xl bg-card shadow-soft p-4 flex items-center gap-3 col-span-2 lg:col-span-1">
          <ProgressRing
            value={totalCompleted}
            max={totalChapters || 1}
            size={56}
            strokeWidth={5}
            indicatorClassName="stroke-orange-500"
          >
            <span className="text-xs font-bold tabular-nums">
              {courseProgressPct}%
            </span>
          </ProgressRing>
          <div className="min-w-0">
            <p className="meta-label mb-0.5">{t("dashboard.weeklyProgress")}</p>
            <p className="text-sm font-semibold tabular-nums">
              {totalCompleted}/{totalChapters}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {t("dashboard.chaptersDone")}
            </p>
          </div>
        </div>
      </section>

      {/* Course progress bar */}
      <Card>
        <CardContent className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="section-title">{t("dashboard.languageProgress")}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {courseLabel}
              </p>
            </div>
            <span className="text-sm font-semibold tabular-nums text-primary">
              {courseProgressPct}%
            </span>
          </div>
          <Progress value={courseProgressPct} />
        </CardContent>
      </Card>

      {/* Quick actions + word of day */}
      <section className="grid gap-3 md:grid-cols-2">
        {wordOfDay && (
          <Card className="card-hover">
            <CardContent className="p-4 sm:p-5">
              <p className="meta-label mb-2">{t("dashboard.wordOfDay")}</p>
              <div className="flex items-start gap-3">
                <Image
                  src="/hippogriff-icon.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xl font-bold tracking-tight truncate">
                    {wordOfDay.word}
                  </p>
                  <p className="text-sm text-muted-foreground">{gloss}</p>
                  {wordOfDay.example && (
                    <p className="text-xs text-muted-foreground/80 mt-1 italic line-clamp-2">
                      {wordOfDay.example}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="card-hover">
          <CardContent className="p-4 sm:p-5 space-y-3">
            <p className="meta-label">{t("dashboard.upcoming")}</p>
            {nextChapter ? (
              <Link
                href={`/chapters/${nextChapter.slug}`}
                className="flex items-center gap-3 group"
              >
                <span className="text-3xl">{nextChapter.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate group-hover:text-primary transition-colors">
                    {getChapterTitle(nextChapter, lang)}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {nextChapter.titleEs} · {nextChapter.level}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : (
              <p className="text-sm text-muted-foreground">
                {t("dashboard.final")}
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Shortcuts */}
      <section className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/courses"
          className="flex items-center justify-between rounded-2xl bg-card shadow-soft p-4 card-hover"
        >
          <div className="min-w-0">
            <h3 className="font-semibold text-sm">
              {t("dashboard.languagesTitle")}
            </h3>
            <p className="text-xs text-muted-foreground truncate">
              {t("dashboard.languagesDesc", { course: courseLabel })}
            </p>
          </div>
          <Globe className="h-5 w-5 text-muted-foreground shrink-0" />
        </Link>
        <Link
          href="/chapters"
          className="flex items-center justify-between rounded-2xl bg-card shadow-soft p-4 card-hover"
        >
          <div className="min-w-0">
            <h3 className="font-semibold text-sm">
              {t("dashboard.journeyMap")}
            </h3>
            <p className="text-xs text-muted-foreground truncate">
              {t("dashboard.journeyDesc", {
                completed: totalCompleted,
                total: totalChapters,
                next: nextChapter
                  ? getChapterTitle(nextChapter, lang)
                  : t("dashboard.final"),
              })}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
        </Link>
      </section>

      <p className="text-center text-xs text-muted-foreground/60 pb-2">
        {t("dashboard.developer")}
      </p>
    </div>
  );
}
