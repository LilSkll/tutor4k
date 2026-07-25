import type { CourseConfig, GrammarTopic, InterfaceLanguage } from "@/types";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { getGrammarTopicTitle } from "@/lib/grammar-display";

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

  const lang = input.interfaceLanguage ?? "ru";
  const content = pickContent(best.topic, lang);
  if (!content.trim()) return null;

  const clipped = content.length > 3500 ? `${content.slice(0, 3500).trim()}…` : content;
  const iface =
    lang === "ru"
      ? "Russian"
      : lang === "es"
        ? "Spanish"
        : lang === "de"
          ? "German"
          : "English";

  const topicTitle = getGrammarTopicTitle(best.topic, lang);

  return `# OFFICIAL COURSE GRAMMAR (COPY FORMS EXACTLY — DO NOT INVENT)
Topic: ${topicTitle} (${best.topic.slug})
Student interface language: ${iface} (${lang}).
Teach and explain ONLY in ${iface}. Do NOT insert glosses from other interface languages (no Russian if interface is English, etc.).
Never insert Chinese/Japanese/Korean characters into explanations.
When you draw conjugation tables, use ONLY the forms from this article.
Never mix moods (e.g. do not put subjuntivo endings in an imperativo afirmativo table).
HARD LOCK — vosotros:
- Imperativo **afirmativo**: habl**ad**, com**ed**, viv**id** (NEVER habléis / habláis / comáis / viváis).
- Imperativo **negativo**: no habl**éis**, no com**áis**, no viv**áis**.
- Presente indicativo: habl**áis** / com**éis** / viv**ís**.
When stating the answer key, list ONLY correct forms. If the student made mistakes, do not praise as fully correct.

${clipped}`;
}

/** Prefer localized static article; fall back to native topic.content (RU). */
function pickContent(
  topic: GrammarTopic,
  lang: InterfaceLanguage,
): string {
  const localized = getStaticGrammarContent(topic.slug, lang);
  if (localized?.trim()) return localized;
  if (lang === "ru" && topic.content?.trim()) return topic.content;
  // Last resort: native content may be Russian — caller still forbids mixing languages in the reply.
  return topic.content || "";
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
  return /^(imperativo|subjuntivo|indicativo|condicional|pret[eé]rito|imperfecto|gerundio|infinitivo|ser\s*\/?\s*estar|por\s*\/?\s*para|narrative tenses|present simple|past simple|present perfect|passive voice|second.*conditional|third.*conditional)(\s|$)/i.test(
    q,
  );
}

/**
 * Build a tutor-facing reply from a static grammar article when the LLM
 * providers are unavailable — keeps Explain: … working offline of Groq/Gemini.
 */
export function formatStaticGrammarTutorReply(input: {
  groundingBlock: string;
  interfaceLanguage?: InterfaceLanguage;
}): string {
  const lang = input.interfaceLanguage ?? "ru";
  // Strip the internal meta header; keep the article body.
  const body = input.groundingBlock
    .replace(/^# OFFICIAL COURSE GRAMMAR[\s\S]*?\n\n/, "")
    .trim();

  const intros: Record<InterfaceLanguage, string> = {
    ru: "Вот правило по теме — разберём по шагам:\n\n",
    en: "Here’s the rule for this topic — step by step:\n\n",
    es: "Aquí tienes la regla del tema — paso a paso:\n\n",
    de: "Hier ist die Regel zu diesem Thema — Schritt für Schritt:\n\n",
  };
  const outros: Record<InterfaceLanguage, string> = {
    ru: "\n\nЕсли хочешь, составь своё предложение по этому правилу — проверю.",
    en: "\n\nIf you want, write your own example with this rule — I’ll check it.",
    es: "\n\nSi quieres, escribe tu propio ejemplo con esta regla — lo reviso.",
    de: "\n\nWenn du magst, schreib ein eigenes Beispiel zu dieser Regel — ich prüfe es.",
  };

  return `${intros[lang] ?? intros.en}${body}${outros[lang] ?? outros.en}`;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/&/g, " ")
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
    narrative: ["narrative tenses", "повествовательн"],
  };
  for (const [key, list] of Object.entries(aliases)) {
    if (
      !slug.includes(key) &&
      !titleEs.includes(key) &&
      !title.includes(key) &&
      !slug.includes(key.replace(/\s+/g, " "))
    ) {
      continue;
    }
    if (list.some((a) => q.includes(a)) || q.includes(key)) score += 6;
  }

  // English course slug tokens
  if (slug.includes("narrative") && q.includes("narrative")) score += 10;
  if (slug.includes("present perfect") && q.includes("present perfect"))
    score += 10;
  if (
    slug.includes("conditionals") &&
    (q.includes("conditional") || q.includes("conditionals"))
  ) {
    score += 10;
  }
  if (
    slug.includes("b2 conditionals") &&
    (q.includes("second") || q.includes("third"))
  ) {
    score += 6;
  }

  return score;
}

/** Compact lock injected whenever the turn mentions Imperativo / commands. */
export function spanishImperativoQuickLock(): string {
  return `# SPANISH IMPERATIVO — HARD LOCK (copy exactly)
AFIRMATIVO: tú habla/come/vive · usted hable/coma/viva · nosotros hablemos/comamos/vivamos · vosotros **hablad/comed/vivid** · ustedes hablen/coman/vivan
NEGATIVO (= subjuntivo): no hables/comas/vivas · no hable/coma/viva · no hablemos/comamos/vivamos · no **habléis/comáis/viváis** · no hablen/coman/vivan
NEVER list habléis/habláis/comáis as affirmative vosotros. NEVER list hables as usted Imperativo (that is tú subjuntivo / negativo).
Feedback: if the student has mistakes, do not open with full praise — correct clearly, then show the clean paradigm.`;
}

export function queryMentionsImperativo(query: string): boolean {
  const q = normalize(query);
  return (
    q.includes("imperativ") ||
    q.includes("повелительн") ||
    /\b(hablad|comed|vivid|hableis|hablais|comais)\b/.test(q) ||
    (q.includes("vosotros") &&
      (q.includes("habl") || q.includes("com") || q.includes("viv")))
  );
}
