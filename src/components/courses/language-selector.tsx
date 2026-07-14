"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Check, Globe, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUIStore } from "@/stores";
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
  isActive: boolean;
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
  const [switching, setSwitching] = React.useState<string | null>(null);

  const handleSelect = async (courseId: string) => {
    if (courseId === activeCourseId) return;
    setSwitching(courseId);
    try {
      // Update profile on server.
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activeCourseId: courseId }),
      });
      if (!res.ok) throw new Error("Failed");

      // Update local store.
      setActiveCourseId(courseId);
      toast.success("Курс изменён");
      router.refresh();
    } catch {
      toast.error("Не удалось сменить курс");
    } finally {
      setSwitching(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Выбор языка</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            className={cn(
              "card-hover cursor-pointer relative overflow-hidden",
              course.isActive && "ring-2 ring-primary/40 shadow-md",
            )}
            onClick={() => handleSelect(course.id)}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <span className="text-4xl">{course.flag}</span>
                {course.isActive ? (
                  <Badge variant="success">
                    <Check className="h-3 w-3 mr-1" />
                    Активный
                  </Badge>
                ) : switching === course.id ? (
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                ) : null}
              </div>
              <h3 className="font-semibold text-lg">{course.titleNative}</h3>
              <p className="text-sm text-muted-foreground">{course.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{course.description}</p>
              {course.completedChapters > 0 && (
                <p className="text-xs text-primary mt-2">
                  Пройдено глав: {course.completedChapters}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
