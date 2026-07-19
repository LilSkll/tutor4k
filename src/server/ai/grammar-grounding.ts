import type { CourseConfig, GrammarTopic, InterfaceLanguage } from "@/types";

/**
 * Match a learner question to an official course grammar article and
 * return it as grounding so the tutor copies verified conjugations
 * instead of inventing forms.
 */
export function resolveGrammarGrounding(input: {
  course: CourseConfig;
  query: string;
  interfaceLanguage?: InterfaceLanguage;
}): string | null {
  const topics = input.course.getGrammar?.() ?? [];
  if (topics.length === 0) return null;

  const q = normalize(input.query);
  if (q.length < 2) return null;

  let best: { topic: GrammarTopic; score: number } | null = null;

  for (const topic of topics) {
    const score = scoreTopic(topic, q);
    if (score <= 0) continue;
    if (!best || score > best.score) best = { topic, score };
  }

  // Require a clear hit (title / slug / key term), not a weak partial.
  if (!best || best.score < 6) return null;

  const content = pickContent(best.topic, input.interfaceLanguage);
  if (!content.trim()) return null;

  const clipped = content.length > 3500 ? `${content.slice(0, 3500).trim()}…` : content;

  return `# OFFICIAL COURSE GRAMMAR (COPY FORMS EXACTLY — DO NOT INVENT)
Topic: ${best.topic.titleEs || best.topic.title} (${best.topic.slug})
When you draw conjugation tables, use ONLY the forms from this article.
Never mix moods (e.g. do not put subjuntivo endings in an imperativo afirmativo table).
vosotros affirmative imperative of -ar verbs ends in **-ad** (hablad), NOT habléis / habláis.

${clipped}`;
}

/** True when the user is asking to explain a grammar label — skip FAQ cache. */
export function isGrammarExplainQuery(query: string): boolean {
  const q = normalize(query);
  if (
    /^(объясни|обьясни|расскажи|разбери|поясни|explain|explica|what is|what's|что такое|что это)(\s|$)/i.test(
      q,
    )
  ) {
    return true;
  }
  // Bare mood / tense labels pasted from the course UI.
  return /^(imperativo|subjuntivo|indicativo|condicional|pret[eé]rito|imperfecto|gerundio|infinitivo|ser\s*\/?\s*estar|por\s*\/?\s*para)(\s|$)/i.test(
    q,
  );
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,:;]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreTopic(topic: GrammarTopic, q: string): number {
  let score = 0;
  const slug = normalize(topic.slug.replace(/-/g, " "));
  const title = normalize(topic.title);
  const titleEs = normalize(topic.titleEs || "");
  const category = normalize(topic.category || "");

  if (titleEs && (q.includes(titleEs) || titleEs.includes(q))) score += 10;
  if (title && (q.includes(title) || title.includes(q))) score += 8;

  const slugToken = slug.replace(/^(a1|a2|b1|b2|c1)\s+/, "");
  if (slugToken.length >= 4 && q.includes(slugToken)) score += 9;

  // Token overlap for multi-word titles ("ser estar", "por para").
  for (const token of `${titleEs} ${title} ${slugToken}`.split(/\s+/)) {
    if (token.length < 4) continue;
    if (q.includes(token)) score += 3;
  }

  if (category && q.includes(category)) score += 1;

  // Strong aliases for common learner wording.
  const aliases: Record<string, string[]> = {
    imperativo: ["повелительн", "imperative", "команд"],
    subjuntivo: ["сослагат", "субхунтив", "subjunctive", "субъюнктив"],
    indicativo: ["изъявительн", "indicative"],
    condicional: ["условн", "conditional"],
    "ser estar": ["ser/estar", "ser y estar"],
    "por para": ["por/para", "por y para"],
  };
  for (const [key, list] of Object.entries(aliases)) {
    if (!slug.includes(key) && !titleEs.includes(key)) continue;
    if (list.some((a) => q.includes(a))) score += 6;
  }

  return score;
}

function pickContent(
  topic: GrammarTopic,
  lang?: InterfaceLanguage,
): string {
  // Prefer target-language article (forms are authoritative there),
  // fall back to whatever is on the topic.
  if (lang === "es" && topic.content) return topic.content;
  return topic.content || "";
}
