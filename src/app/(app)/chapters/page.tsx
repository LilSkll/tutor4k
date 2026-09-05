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
  getChapterTargetTitle,
  getChapterTitle,
  hasCompletedPrereqChain,
} from "@/lib/chapter-display";
import { ResetProgressButton } from "@/components/chapters/reset-progress-button";
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

  const statusMap = new Map<
    string,
    "completed" | "in_progress" | "available" | "locked"
  >();
  const completedSlugs = new Set<string>();

  for (const p of progress) {
    if (p.chapter_slug && courseSlugs.includes(p.chapter_slug)) {
      if (p.status === "completed") {
        statusMap.set(p.chapter_slug, "completed");
        completedSlugs.add(p.chapter_slug);
      } else if (p.status === "in_progress") {
        statusMap.set(p.chapter_slug, "in_progress");
      }
    }
  }

  for (const ch of CHAPTERS) {
    if (statusMap.get(ch.slug) === "completed") continue;
    if (!hasCompletedPrereqChain(ch, chaptersBySlug, completedSlugs)) {
      statusMap.set(ch.slug, "locked");
    } else if (!statusMap.has(ch.slug)) {
      statusMap.set(ch.slug, "available");
    }
  }

  // Exactly one "current": first unlocked incomplete in curriculum order.
  let currentSlug: string | null = null;
  for (const ch of CHAPTERS) {
    const st = statusMap.get(ch.slug);
    if (st === "completed" || st === "locked") continue;
    currentSlug = ch.slug;
    break;
  }
  for (const ch of CHAPTERS) {
    const st = statusMap.get(ch.slug);
    if (st === "completed" || st === "locked") continue;
    statusMap.set(ch.slug, ch.slug === currentSlug ? "in_progress" : "available");
  }

  const completedCount = countCompletedForCourse(completedSlugs, courseSlugs);
  const hasAnyProgress =
    completedCount > 0 ||
    progress.some(
      (p) => p.chapter_slug && courseSlugs.includes(p.chapter_slug),
    );

  return (
    <div className="page-container max-w-2xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
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
        {hasAnyProgress && (
          <ResetProgressButton courseTitle={course.titleNative} />
        )}
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
                        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl",
                        isCompleted && "bg-success/15",
                        isCurrent && "bg-primary/10",
                        isLocked && "bg-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "leading-none",
                          isLocked && "opacity-45 grayscale",
                          isCompleted && "opacity-70",
                        )}
                        aria-hidden
                      >
                        {chapter.icon}
                      </span>
                      {isCompleted && (
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border">
                          <Check className="h-3 w-3 text-success" />
                        </span>
                      )}
                      {isLocked && (
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border">
                          <Lock className="h-3 w-3 text-muted-foreground" />
                        </span>
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
                      {getChapterTargetTitle(chapter, courseId) !== title && (
                        <p className="text-xs text-muted-foreground italic mb-1">
                          {getChapterTargetTitle(chapter, courseId)}
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
