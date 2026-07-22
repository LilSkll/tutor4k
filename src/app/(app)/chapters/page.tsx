import Link from "next/link";
import { Check, Lock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCurrentProfile, getChapterProgress } from "@/server/actions/data";
import { getCourse } from "@/config/courses";
import { toRoman } from "@/config/chapters";
import { translate } from "@/lib/i18n";
import {
  countCompletedForCourse,
  getChapterLocation,
  getChapterTitle,
  hasCompletedPrereqChain,
} from "@/lib/chapter-display";
import { cn } from "@/lib/utils";

export default async function ChaptersMapPage() {
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
  const courseSlugs = CHAPTERS.map((c) => c.slug);
  const chaptersBySlug = new Map(CHAPTERS.map((c) => [c.slug, c]));

  const statusMap = new Map<string, "completed" | "in_progress" | "locked">();
  const completedSlugs = new Set<string>();

  for (const p of progress) {
    if (p.chapter_slug && courseSlugs.includes(p.chapter_slug)) {
      statusMap.set(p.chapter_slug, p.status as "completed" | "in_progress");
      if (p.status === "completed") completedSlugs.add(p.chapter_slug);
    }
  }

  for (const ch of CHAPTERS) {
    if (statusMap.get(ch.slug) === "completed") continue;
    if (!hasCompletedPrereqChain(ch, chaptersBySlug, completedSlugs)) {
      statusMap.set(ch.slug, "locked");
    } else if (!statusMap.has(ch.slug)) {
      statusMap.set(ch.slug, "in_progress");
    }
  }

  const completedCount = countCompletedForCourse(completedSlugs, courseSlugs);

  return (
    <div className="page-container max-w-2xl space-y-6">
      <div>
        <h1 className="page-title">{t("chapters.title")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("chapters.subtitle", {
            flag: course.flag,
            course: course.titleNative,
            completed: completedCount,
            total: CHAPTERS.length,
          })}
        </p>
      </div>

      <div className="space-y-3">
        {CHAPTERS.map((chapter, idx) => {
          const status = statusMap.get(chapter.slug) ?? "locked";
          const isCompleted = status === "completed";
          const isCurrent = status === "in_progress";
          const isLocked = status === "locked";
          const title = getChapterTitle(chapter, lang);

          return (
            <div key={chapter.slug}>
              {idx > 0 && (
                <div className="flex justify-center py-1">
                  <div
                    className={cn(
                      "w-0.5 h-6 rounded-full",
                      isLocked ? "bg-muted" : "bg-primary/30",
                    )}
                  />
                </div>
              )}

              <Card
                className={cn(
                  "transition-all overflow-hidden",
                  isLocked && "opacity-50",
                  isCurrent && "ring-2 ring-primary/40 shadow-md",
                )}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl",
                        isCompleted && "bg-success/15",
                        isCurrent && "bg-primary/10",
                        isLocked && "bg-muted",
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-6 w-6 text-success" />
                      ) : isLocked ? (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        chapter.icon
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          {toRoman(chapter.number)}
                        </span>
                        <Badge variant="level" className="shrink-0">
                          {chapter.level}
                        </Badge>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                            {t("chapters.current")}
                          </span>
                        )}
                      </div>
                      <h3
                        className={cn(
                          "font-semibold",
                          isLocked && "text-muted-foreground",
                        )}
                      >
                        {title}
                      </h3>
                      {chapter.titleEs !== title && (
                        <p className="text-xs text-muted-foreground italic mb-1">
                          {chapter.titleEs}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {getChapterLocation(chapter, lang)} ·{" "}
                        {t("lesson.minutes", {
                          minutes: chapter.estimatedMinutes,
                        })}
                      </p>
                    </div>

                    {!isLocked && (
                      <Button
                        size="sm"
                        variant={isCurrent ? "gradient" : "outline"}
                        asChild
                      >
                        <Link href={`/chapters/${chapter.slug}`}>
                          {isCompleted
                            ? t("chapters.retry")
                            : t("chapters.open")}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
