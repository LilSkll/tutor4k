import type { InterfaceLanguage } from "@/types";
import { getCourse } from "@/config/courses";
import { getGrammarTopicTitle } from "@/lib/grammar-display";
import { toGrammarTopicMeta } from "@/lib/grammar-topic-meta";

/** Resolve a grammar/vocab topic key to a localized teacher-facing label. */
export async function resolveTeacherTopicLabel(
  topicKey: string,
  courseId: string,
  lang: InterfaceLanguage,
): Promise<string> {
  const raw = topicKey.trim();
  if (!raw) return raw;
  try {
    const course = await getCourse(courseId === "english" ? "english" : "spanish");
    const grammar = course.getGrammar().find((t) => t.slug === raw);
    if (grammar) {
      return getGrammarTopicTitle(toGrammarTopicMeta(grammar), lang);
    }
    // Vocab topics may use chapter/vocab slugs — fall back to humanized key.
  } catch {
    // ignore
  }
  if (/^eng-|^a\d-|^b\d-|^c\d-|^chapter-/.test(raw)) {
    return raw
      .replace(/^eng-/, "")
      .replace(/^chapter-\d+-/, "")
      .replace(/-/g, " ");
  }
  return raw;
}

export async function resolveTeacherTopicLabels(
  keys: string[],
  courseId: string,
  lang: InterfaceLanguage,
): Promise<Map<string, string>> {
  const out = new Map<string, string>();
  await Promise.all(
    keys.map(async (k) => {
      out.set(k, await resolveTeacherTopicLabel(k, courseId, lang));
    }),
  );
  return out;
}
