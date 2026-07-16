"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Globe, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface CourseItem {
  id: string;
  languageCode: string;
  title: string;
  titleNative: string;
  flag: string;
  description: string;
  completedChapters: number;
  totalChapters: number;
  grammarCount: number;
  vocabCount: number;
  difficulty: string;
  isActive: boolean;
  /** False for stub courses with no curriculum yet. */
  contentReady: boolean;
}

export function LanguageSelector({
  courses,
  activeCourseId,
}: {
  courses: CourseItem[];
  activeCourseId: string;
}) {
  const router = useRouter();
  const setActiveCourseId = useUIStore((s) => s.setActiveCourseId);
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);
  const [switching, setSwitching] = React.useState<string | null>(null);

  const handleSelect = async (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course && !course.contentReady) {
      toast.error(t("courses.comingSoonToast"));
      return;
    }
    if (courseId === activeCourseId) {
      router.push("/dashboard");
      return;
    }
    setSwitching(courseId);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activeCourseId: courseId }),
      });
      if (!res.ok) throw new Error("Failed");

      setActiveCourseId(courseId);
      toast.success(t("courses.toastSuccess"));
      router.refresh();
    } catch {
      toast.error(t("courses.toastFail"));
    } finally {
      setSwitching(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <Globe className="h-6 w-6 text-primary" />
          <h1 className="page-title">{t("courses.title")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{t("courses.subtitle")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => {
          const pct =
            course.totalChapters > 0
              ? Math.round(
                  (course.completedChapters / course.totalChapters) * 100,
                )
              : 0;
          const busy = switching === course.id;

          return (
            <Card
              key={course.id}
              className={cn(
                "relative overflow-hidden transition-all duration-200",
                course.isActive
                  ? "ring-2 ring-primary/50 shadow-elevated"
                  : "shadow-soft hover:shadow-elevated hover:-translate-y-0.5",
              )}
            >
              {course.isActive && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-rose-500" />
              )}

              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-3xl"
                      aria-hidden
                    >
                      {course.flag}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-lg font-bold tracking-tight truncate">
                        {course.titleNative}
                      </h2>
                      <p className="text-sm text-muted-foreground truncate">
                        {course.title}
                      </p>
                    </div>
                  </div>
                  {course.isActive ? (
                    <Badge variant="success" className="shrink-0">
                      <Check className="h-3 w-3 mr-1" />
                      {t("courses.active")}
                    </Badge>
                  ) : null}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <Metric
                    label={t("courses.chapters")}
                    value={String(course.totalChapters)}
                  />
                  <Metric
                    label={t("courses.grammar")}
                    value={String(course.grammarCount)}
                  />
                  <Metric
                    label={t("courses.vocabulary")}
                    value={String(course.vocabCount)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      {t("courses.progress")}
                    </span>
                    <span className="font-semibold tabular-nums">{pct}%</span>
                  </div>
                  <Progress value={pct} />
                  <p className="text-[11px] text-muted-foreground">
                    {t("courses.difficulty")}: {course.difficulty}
                  </p>
                </div>

                <Button
                  variant={course.isActive ? "gradient" : "outline"}
                  className="w-full"
                  size="lg"
                  disabled={busy || !course.contentReady}
                  onClick={() => handleSelect(course.id)}
                >
                  {busy ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                  {!course.contentReady
                    ? t("courses.comingSoon")
                    : course.isActive
                      ? t("courses.continue")
                      : t("courses.select")}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/60 px-2.5 py-2 text-center">
      <p className="text-sm font-bold tabular-nums">{value}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
        {label}
      </p>
    </div>
  );
}
