import { GRAMMAR_TOPICS } from "../src/config/grammar";
import { ENGLISH_GRAMMAR } from "../src/config/courses/english/grammar";
import { getStaticGrammarContent } from "../src/config/grammar-content-localizations";
import {
  getGrammarCategory,
  getGrammarSummary,
  getGrammarTopicTitle,
} from "../src/lib/grammar-display";

const langs = ["ru", "en", "es", "de"] as const;

let failed = 0;

function check(label: string, ok: boolean) {
  if (!ok) {
    failed++;
    console.log("FAIL", label);
  }
}

console.log("=== Article coverage ===");
for (const lang of ["en", "es", "de"] as const) {
  for (const t of GRAMMAR_TOPICS) {
    check(
      `ES ${lang} article ${t.slug}`,
      Boolean(getStaticGrammarContent(t.slug, lang)),
    );
  }
  for (const t of ENGLISH_GRAMMAR) {
    check(
      `EN ${lang} article ${t.slug}`,
      Boolean(getStaticGrammarContent(t.slug, lang)),
    );
  }
}

console.log("=== Titles/summaries (no Cyrillic leak for en/es/de) ===");
for (const lang of langs) {
  if (lang === "ru") continue;
  for (const t of [...GRAMMAR_TOPICS, ...ENGLISH_GRAMMAR]) {
    const title = getGrammarTopicTitle(t, lang);
    const summary = getGrammarSummary(t, lang);
    const cat = getGrammarCategory(t, lang);
    const cyr = /[\u0400-\u04FF]/;
    check(`${lang} title ${t.slug}`, Boolean(title) && !cyr.test(title));
    check(`${lang} summary ${t.slug}`, Boolean(summary) && !cyr.test(summary));
    check(`${lang} category ${t.slug}`, Boolean(cat) && !cyr.test(cat));
  }
}

console.log("=== Conjugation anchors across locales ===");
const anchors: Record<string, string[]> = {
  "b1-imperativo": ["hablad", "vivid", "habléis"],
  "b2-subjuntivo-compuestos": ["hayáis", "hubierais"],
  "a2-imperfecto": ["erais", "ibais", "veíais"],
  "a2-preterito-indefinido": ["fuisteis", "hablasteis"],
  "a1-presente": ["habláis"],
  "b1-subjuntivo": ["habléis"],
};

for (const [slug, needles] of Object.entries(anchors)) {
  const ru = GRAMMAR_TOPICS.find((t) => t.slug === slug)?.content ?? "";
  for (const needle of needles) {
    check(`RU ${slug} has ${needle}`, ru.includes(needle));
  }
  for (const lang of ["en", "es", "de"] as const) {
    const body = getStaticGrammarContent(slug, lang) ?? "";
    for (const needle of needles) {
      check(`${lang} ${slug} has ${needle}`, body.includes(needle));
    }
  }
}

console.log(failed === 0 ? "ALL PASSED" : `FAILED ${failed}`);
process.exit(failed === 0 ? 0 : 1);
