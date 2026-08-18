import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import type { InterfaceLanguage, Level } from "@/types";

export async function getLocalizedGrammarArticle(input: {
  slug: string;
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  level?: Level | null;
  refresh?: boolean;
}): Promise<{ content: string; source: "native" | "static" }> {
  void input.refresh;

  const course = await getCourse(input.courseId);
  const topic = course.getGrammarTopic(input.slug);

  if (!topic) {
    throw new Error("Grammar topic not found");
  }

  if (input.interfaceLanguage === "ru") {
    return { content: topic.content, source: "native" };
  }

  const staticContent = getStaticGrammarContent(
    input.slug,
    input.interfaceLanguage,
  );
  if (staticContent) {
    return { content: staticContent, source: "static" };
  }

  // Extra English / IELTS topics are still RU-only. Serve the source article
  // instead of a 500 so the explorer stays usable until those banks are filled.
  return { content: topic.content, source: "native" };
}
