import Link from "next/link";
import { Check, Lock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CHAPTERS, toRoman } from "@/config/chapters";
import { getChapterProgress } from "@/server/actions/data";
import { cn } from "@/lib/utils";

export default async function ChaptersMapPage() {
  const progress = await getChapterProgress();

  // Build a status map.
  const statusMap = new Map<string, "completed" | "in_progress" | "locked">();
  const completedSlugs = new Set<string>();

  for (const p of progress) {
    if (p.chapter_slug) {
      statusMap.set(p.chapter_slug, p.status as "completed" | "in_progress");
      if (p.status === "completed") completedSlugs.add(p.chapter_slug);
    }
  }

  // Determine lock state: a chapter is locked if its prereq isn't completed.
  for (const ch of CHAPTERS) {
    if (statusMap.get(ch.slug) === "completed") continue;
    if (ch.prereqChapter && !completedSlugs.has(ch.prereqChapter)) {
      statusMap.set(ch.slug, "locked");
    } else if (!statusMap.has(ch.slug)) {
      statusMap.set(ch.slug, "in_progress"); // available but not started
    }
  }

  const completedCount = completedSlugs.size;

  return (
    <div className="container max-w-2xl py-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Карта путешествия</h1>
        <p className="text-sm text-muted-foreground">
          Пройдено {completedCount} из {CHAPTERS.length} глав
        </p>
      </div>

      <div className="space-y-3">
        {CHAPTERS.map((chapter, idx) => {
          const status = statusMap.get(chapter.slug) ?? "locked";
          const isCompleted = status === "completed";
          const isCurrent = status === "in_progress";
          const isLocked = status === "locked";

          return (
            <div key={chapter.slug}>
              {/* Connector line */}
              {idx > 0 && (
                <div className="flex justify-center py-1">
                  <div className={cn(
                    "w-0.5 h-6 rounded-full",
                    isLocked ? "bg-muted" : "bg-primary/30",
                  )} />
                </div>
              )}

              <Card className={cn(
                "transition-all overflow-hidden",
                isLocked && "opacity-50",
                isCurrent && "ring-2 ring-primary/40 shadow-md",
              )}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Status icon / emoji */}
                    <div className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl",
                      isCompleted && "bg-success/15",
                      isCurrent && "bg-primary/10",
                      isLocked && "bg-muted",
                    )}>
                      {isCompleted ? (
                        <Check className="h-6 w-6 text-success" />
                      ) : isLocked ? (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        chapter.icon
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          {toRoman(chapter.number)}
                        </span>
                        <Badge variant="level" className="shrink-0">{chapter.level}</Badge>
                        {isCurrent && (
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                            Текущая
                          </span>
                        )}
                      </div>
                      <h3 className={cn("font-semibold", isLocked && "text-muted-foreground")}>
                        {chapter.title}
                      </h3>
                      <p className="text-xs text-muted-foreground italic mb-1">{chapter.titleEs}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {chapter.location} · ~{chapter.estimatedMinutes} мин
                      </p>
                    </div>

                    {/* Action */}
                    {!isLocked && (
                      <Button
                        size="sm"
                        variant={isCurrent ? "gradient" : "outline"}
                        asChild
                      >
                        <Link href={`/chapters/${chapter.slug}`}>
                          {isCompleted ? "Повторить" : "Открыть"}
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
