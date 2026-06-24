"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BookOpen,
  Flame,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { LEVELS, STREAK_REWARDS } from "@/config/app";
import { GRAMMAR_TOPICS } from "@/config/grammar";

// Client fetcher: pulls profile + activity stats in one go.
async function fetchDashboard(): Promise<{
  profile: {
    name: string;
    level: string | null;
    streak: number;
    daily_goal_minutes: number;
  };
  lessonsToday: number;
  minutesToday: number;
  totalLessons: number;
  vocabularyCount: number;
}> {
  const res = await fetch("/api/dashboard", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load dashboard");
  return res.json();
}

export function DashboardDataLoader() {
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    staleTime: 30_000,
  });

  if (isLoading || !data) {
    return (
      <div className="space-y-6">
        <div className="h-24 rounded-xl bg-muted animate-pulse" />
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const { profile, lessonsToday, minutesToday, totalLessons, vocabularyCount } =
    data;
  const dailyGoal = profile.daily_goal_minutes || 15;
  const dailyProgress = Math.min(100, Math.round((minutesToday / dailyGoal) * 100));
  const streakReward =
    STREAK_REWARDS[profile.streak as keyof typeof STREAK_REWARDS];

  // Recommended next topics based on level.
  const levelTopics = profile.level
    ? GRAMMAR_TOPICS.filter((tp) => tp.level === profile.level)
    : GRAMMAR_TOPICS.slice(0, 3);
  const recommended = levelTopics.slice(0, 3);

  const hour = new Date().getHours();
  const greetingKey =
    hour < 12 ? "dashboard.greetingMorning" : hour < 20 ? "dashboard.greetingDay" : "dashboard.greetingEvening";
  const greeting = t(greetingKey);

  return (
    <>
      {/* Hero greeting */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white">
        <div className="absolute -right-10 -top-10 opacity-10">
          <GraduationCap className="h-48 w-48" />
        </div>
        <CardContent className="relative p-6 md:p-8">
          <p className="text-white/80 text-sm">
            {greeting}, {profile.name || ""} 👋
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-3">
            {t("dashboard.subtitle")}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/tutor">
                <MessageSquare className="h-4 w-4" />
                {t("dashboard.askTutor")}
              </Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/exercises">
                <Target className="h-4 w-4" />
                {t("dashboard.practiceNow")}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Level */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>{t("dashboard.currentLevel")}</CardDescription>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold gradient-text">
              {profile.level ?? "—"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {LEVELS.find((l) => l.value === profile.level)?.description ??
                t("dashboard.noLevel")}
            </p>
          </CardContent>
        </Card>

        {/* Lessons */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>{t("dashboard.lessonsCompleted")}</CardDescription>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalLessons}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("common.today")}: {lessonsToday}
            </p>
          </CardContent>
        </Card>

        {/* Streak */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>{t("dashboard.currentStreak")}</CardDescription>
              <Flame className="h-4 w-4 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">{profile.streak}</span>
              <span className="text-sm text-muted-foreground">
                {t("common.streak")}
              </span>
            </div>
            {streakReward && (
              <p className="text-xs text-orange-500 font-medium mt-1">
                {streakReward}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Daily goal */}
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>{t("dashboard.dailyGoal")}</CardDescription>
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold">{minutesToday}</span>
              <span className="text-sm text-muted-foreground">
                / {dailyGoal} {t("common.minutes")}
              </span>
            </div>
            <Progress value={dailyProgress} indicatorClassName="bg-gradient-to-r from-primary to-orange-500" />
          </CardContent>
        </Card>
      </div>

      {/* Recommendations + quick actions */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">
                {t("dashboard.recommendedTopics")}
              </CardTitle>
            </div>
            <CardDescription>
              {t("dashboard.aiRecommendations")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {recommended.map((topic) => (
              <Link
                key={topic.slug}
                href={`/grammar?topic=${topic.slug}`}
                className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{topic.titleEs}</p>
                    <p className="text-xs text-muted-foreground">{topic.summary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="level">{topic.level}</Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Vocabulary snapshot */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("dashboard.vocabTitle")}</CardTitle>
            <CardDescription>{t("dashboard.vocabDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold gradient-text mb-3">
              {vocabularyCount}
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/vocabulary">
                {t("dashboard.vocabBtn")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
