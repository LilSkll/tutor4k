import { getGrammarTopicTitle } from "@/lib/grammar-display";
import { toGrammarTopicMeta } from "@/lib/grammar-topic-meta";
import { getVocabTopicTitle } from "@/lib/vocab-display";
import type { CourseConfig, InterfaceLanguage } from "@/types";

/**
 * Resolve a grammar/vocab topic key (often a raw slug from the learning
 * profile) to a localized student-facing label.
 */
export function resolveCourseTopicLabel(
  topicKey: string | null | undefined,
  course: Pick<CourseConfig, "getGrammarTopic" | "getGrammar" | "getVocab">,
  language: InterfaceLanguage,
  courseId: string,
): string | null {
  const raw = topicKey?.trim();
  if (!raw) return null;

  // Legacy learning-profile notes — never surface as topic titles.
  if (/^(completed chapter|needs review)\s*:/i.test(raw)) {
    return null;
  }

  const grammar =
    course.getGrammarTopic(raw) ??
    course.getGrammar().find((t) => t.slug === raw);
  if (grammar) {
    return getGrammarTopicTitle(toGrammarTopicMeta(grammar), language);
  }

  const vocab = course
    .getVocab()
    .find((t) => t.slug === raw || t.topic === raw || t.topicEn === raw);
  if (vocab) {
    return getVocabTopicTitle(vocab, language, courseId);
  }

  // Unknown machine slugs — hide rather than show English-ish leftovers in RU/ES/DE UI.
  if (/^eng-|^chapter-|^a\d-|^b\d-|^c\d-/.test(raw)) {
    if (language === "en") {
      return raw
        .replace(/^eng-/, "")
        .replace(/^chapter-\d+-/, "")
        .replace(/-/g, " ");
    }
    return null;
  }

  // Bare Latin slug leftovers look crooked outside EN UI.
  if (language !== "en" && /^[a-z0-9]+(?:-[a-z0-9]+)+$/i.test(raw)) {
    return null;
  }

  return raw;
}
