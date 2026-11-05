import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { withGrammarLevelFrame } from "@/config/grammar-level-frames";
import type { InterfaceLanguage, Level } from "@/types";

const MISSING_TRANSLATION: Record<
  Exclude<InterfaceLanguage, "ru">,
  string
> = {
  en: `> **Translation unavailable**
>
> A full pedagogical explanation for this topic is not yet available in English.
> Use **Ask the tutor** for an explanation in your interface language.
> Russian example sentences and forms remain the learning material and stay in Russian.`,
  es: `> **Traducción no disponible**
>
> Aún no hay una explicación pedagógica completa de este tema en español.
> Usa **Preguntar al tutor** para una explicación en el idioma de la interfaz.
> Los ejemplos y formas en ruso son el material de estudio y se mantienen en ruso.`,
  de: `> **Übersetzung nicht verfügbar**
>
> Eine vollständige didaktische Erklärung zu diesem Thema liegt noch nicht auf Deutsch vor.
> Nutzen Sie **Tutor fragen** für eine Erklärung in Ihrer Oberflächensprache.
> Russische Beispielsätze und Formen bleiben Lernstoff und bleiben auf Russisch.`,
};

export type GrammarArticleSource = "native" | "static" | "missing";

export async function getLocalizedGrammarArticle(input: {
  slug: string;
  courseId: string;
  interfaceLanguage: InterfaceLanguage;
  level?: Level | null;
  refresh?: boolean;
}): Promise<{ content: string; source: GrammarArticleSource }> {
  void input.refresh;

  const course = await getCourse(input.courseId);
  const topic = course.getGrammarTopic(input.slug);

  if (!topic) {
    throw new Error("Grammar topic not found");
  }

  const lang = input.interfaceLanguage;

  // Russian course: never silently serve RU meta-text as a non-RU localization.
  if (input.courseId === "russian") {
    if (lang === "ru") {
      return {
        content: withGrammarLevelFrame(topic.slug, lang, topic.content),
        source: "native",
      };
    }
    const staticContent = getStaticGrammarContent(topic.slug, lang);
    if (staticContent?.trim()) {
      return {
        content: withGrammarLevelFrame(topic.slug, lang, staticContent),
        source: "static",
      };
    }
    return {
      content: MISSING_TRANSLATION[lang],
      source: "missing",
    };
  }

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
