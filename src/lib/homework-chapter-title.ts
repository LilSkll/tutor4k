import { getChapter } from "@/config/chapters";
import { getEngChapter } from "@/config/courses/english/chapters";
import { getChapterTitle } from "@/lib/chapter-display";
import type { InterfaceLanguage } from "@/types";

/** Resolve a display title for homework chapter links (client-safe). */
export function resolveHomeworkChapterTitle(
  courseId: string,
  slug: string,
  interfaceLanguage: InterfaceLanguage,
): string {
  const chapter =
    courseId === "english" ? getEngChapter(slug) : getChapter(slug);
  if (!chapter) return slug;
  return getChapterTitle(chapter, interfaceLanguage);
}
