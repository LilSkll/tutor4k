import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { withGrammarLevelFrame } from "@/config/grammar-level-frames";
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

  const lang = input.interfaceLanguage;
  const staticContent =
    lang === "ru" ? null : getStaticGrammarContent(topic.slug, lang);
  const body = staticContent?.trim() ? staticContent : topic.content;
  const source = staticContent?.trim()
    ? ("static" as const)
    : ("native" as const);

  return {
    content: withGrammarLevelFrame(topic.slug, lang, body),
    source,
  };
}
