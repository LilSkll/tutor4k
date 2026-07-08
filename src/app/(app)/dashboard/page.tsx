import Link from "next/link";
import { ArrowRight, Flame, MapPin, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCurrentProfile, getChapterProgress } from "@/server/actions/data";
import { CHAPTERS, toRoman, getNextChapter, getFirstChapterForLevel } from "@/config/chapters";

export default async function DashboardPage() {
  const [profile, progress] = await Promise.all([
    getCurrentProfile(),
    getChapterProgress(),
  ]);

  // Find current chapter: first not-completed, starting from user's level.
  const completedSlugs = new Set(
    progress.filter((p) => p.status === "completed").map((p) => p.chapter_slug),
  );

  // If user has a level, start searching from the first chapter of that level.
  // If no progress at all, start them at their level's first chapter.
  const userLevel = profile?.level;
  let currentChapter = userLevel ? getFirstChapterForLevel(userLevel) : CHAPTERS[0];

  // But if they have completed chapters, find the first incomplete one
  // after their starting point.
  const startIndex = CHAPTERS.findIndex((c) => c.slug === currentChapter.slug);
  for (let i = startIndex; i < CHAPTERS.length; i++) {
    if (!completedSlugs.has(CHAPTERS[i].slug)) {
      currentChapter = CHAPTERS[i];
      break;
    }
  }

  const totalCompleted = completedSlugs.size;
  const totalChapters = CHAPTERS.length;
  const streak = profile?.streak ?? 0;

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      {/* Main card: Continue learning */}
      <Card className="relative overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-6 md:p-8 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <p className="text-white/80 text-sm mb-1">
                {profile?.name ? `Привет, ${profile.name}! 👋` : "Привет! 👋"}
              </p>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{currentChapter.icon}</span>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wide">
                    Глава {toRoman(currentChapter.number)} · {currentChapter.level}
                  </p>
                  <h1 className="text-2xl font-bold">{currentChapter.title}</h1>
                  <p className="text-white/70 text-sm italic">{currentChapter.titleEs}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">{currentChapter.summary}</p>
              <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {currentChapter.location}
                </span>
                <span>·</span>
                <span>~{currentChapter.estimatedMinutes} мин</span>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <Link href={`/chapters/${currentChapter.slug}`}>
                  <Play className="h-4 w-4" />
                  Продолжить обучение
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick stats row */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-orange-500">
              <Flame className="h-5 w-5" />
              {streak}
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">дней подряд</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold gradient-text">
              {totalCompleted}/{totalChapters}
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">глав пройдено</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {profile?.level ?? "A1"}
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">уровень</p>
          </CardContent>
        </Card>
      </div>

      {/* Journey map link */}
      <Card className="card-hover">
        <CardContent className="p-4">
          <Link href="/chapters" className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">🗺️ Карта путешествия</h3>
              <p className="text-xs text-muted-foreground">
                Пройдено {totalCompleted} из {totalChapters} глав · следующая: {getNextChapter(currentChapter.slug)?.title ?? "финал"}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </CardContent>
      </Card>

      {/* Developer credit */}
      <p className="text-center text-xs text-muted-foreground/70 pb-4">
        Разработчик — Драгунов Павел
      </p>
    </div>
  );
}
