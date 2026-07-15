import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import type { GrammarTopic, InterfaceLanguage, Level } from "@/types";

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

  throw new Error(
    `No static grammar article for ${input.slug} (${input.interfaceLanguage})`,
  );
}
