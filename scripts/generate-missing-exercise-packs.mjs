#!/usr/bin/env node
/**
 * Expand exercise packs for chapters that only have curated seeds (~5 items)
 * to ~20 items per type. Preserves existing pack chapters.
 *
 * Run: npx tsx scripts/generate-missing-exercise-packs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chapterFromSeeds, exerciseToSeed } from "./exercise-pack-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Keep hand-authored packs from regenerate-*-packs.mjs (quality seeds).
const SPANISH_KEEP = new Set([
  "chapter-1-despertar",
  ...Array.from({ length: 21 }, (_, i) => {
    const n = i + 2;
    const names = [
      "chapter-2-primer-dialogo",
      "chapter-3-biblioteca",
      "chapter-4-numeros-tiempo",
      "chapter-5-mercado",
      "chapter-6-cuerpo",
      "chapter-7-pasado-perfecto",
      "chapter-8-pasado-indefinido",
      "chapter-9-imperfecto",
      "chapter-10-por-para",
      "chapter-11-subjuntivo",
      "chapter-12-imperativo",
      "chapter-13-condicional",
      "chapter-14-estilo-indirecto",
      "chapter-15-voz-pasiva",
      "chapter-16-perifrasis",
      "chapter-17-dele",
      "chapter-18-genero-numero",
      "chapter-19-preposiciones",
      "chapter-20-preguntas",
      "chapter-21-comparativos",
      "chapter-22-futuro",
    ];
    return names[i];
  }),
]);

const ENGLISH_KEEP = new Set([
  "eng-ch1-first-steps",
  "eng-ch2-routines",
  "eng-ch17-questions",
  "eng-ch3-around-town",
  "eng-ch18-can",
  "eng-ch19-prepositions",
  "eng-ch4-past-stories",
  "eng-ch5-choices",
  "eng-ch20-going-to",
  "eng-ch6-experiences",
  "eng-ch21-quantifiers",
  "eng-ch7-future-plans",
  "eng-ch22-modals",
  "eng-ch8-storytelling",
  "eng-ch9-real-world",
  "eng-ch10-what-if",
  "eng-ch11-passive",
  "eng-ch12-beyond-borders",
  "eng-ch16-ielts",
]);

/** Rebuild packs from fresh seeds (new curated sentence_building, grammar topic fix). */
const FORCE_REGENERATE = new Set([
  "chapter-1-despertar",
  "chapter-2-primer-dialogo",
  "chapter-3-biblioteca",
  "chapter-4-numeros-tiempo",
  "chapter-5-mercado",
  "chapter-6-cuerpo",
  "chapter-7-pasado-perfecto",
  "chapter-8-pasado-indefinido",
  "chapter-9-imperfecto",
  "chapter-10-por-para",
  "chapter-11-subjuntivo",
  "chapter-12-imperativo",
  "chapter-13-condicional",
  "chapter-20-preguntas",
  "chapter-21-comparativos",
  "chapter-22-futuro",
  "chapter-31-verbos-frecuentes",
  "chapter-32-pronombre-se",
  "chapter-33-relativos",
  "chapter-34-pluscuamperfecto",
  "chapter-35-subjuntivo-imperfecto",
  "chapter-36-pronombres-objetos",
  "chapter-37-adverbios",
  "chapter-23-cronicas",
  "chapter-24-carta",
  "chapter-14-estilo-indirecto",
  "chapter-15-voz-pasiva",
  "chapter-38-subjuntivo-compuestos",
  "chapter-39-condicionales-compuestos",
  "chapter-40-relativos-avanzado",
  "chapter-41-conectores-discursivos",
  "chapter-25-conectores",
  "chapter-26-voz-plaza",
  "chapter-16-perifrasis",
  "chapter-17-dele",
  "chapter-42-subjuntivo-avanzado",
  "chapter-43-indirecto-avanzado",
  "chapter-44-pronombres-avanzado",
  "chapter-45-ser-estar-matices",
  "eng-ch13-advanced-structures",
  "eng-ch14-art-language",
  "eng-ch15-mastery",
  "eng-ch16-ielts",
  "eng-ch41-cambridge-essay",
  "eng-ch42-ielts-opinion",
  "eng-ch43-register-shift",
  "eng-ch23-spotlight",
  "eng-ch24-unspoken",
  "eng-ch25-between-lines",
  "chapter-27-hendidas",
  "chapter-28-conjetura",
  "chapter-29-culto",
  "chapter-30-ironia",
  "eng-ch27-possessives",
  "eng-ch32-relative-clauses",
  "eng-ch35-ielts-informal",
  "eng-ch36-ielts-formal",
  "eng-ch37-cambridge-letter",
  "eng-ch38-ielts-task1",
  "eng-ch39-ielts-essay",
  "eng-ch40-ielts-cohesion",
  "eng-ch4-past-stories",
  "eng-ch5-choices",
  "eng-ch6-experiences",
  "eng-ch7-future-plans",
  "eng-ch8-storytelling",
  "eng-ch9-real-world",
  "eng-ch10-what-if",
  "eng-ch11-passive",
  "eng-ch12-beyond-borders",
  "eng-ch20-going-to",
  "eng-ch21-quantifiers",
  "eng-ch22-modals",
  "eng-ch26-articles",
]);
const root = path.join(__dirname, "..");

const DEFAULT_TARGET = 20;
const THICK_TR_EC_TARGET = 30;

const ENGLISH_C2_THICK = new Set([
  "eng-ch23-spotlight",
  "eng-ch24-unspoken",
  "eng-ch25-between-lines",
]);

const ENGLISH_C1_EXAM_THICK = new Set([
  "eng-ch13-advanced-structures",
  "eng-ch14-art-language",
  "eng-ch15-mastery",
  "eng-ch16-ielts",
  "eng-ch35-ielts-informal",
  "eng-ch36-ielts-formal",
  "eng-ch37-cambridge-letter",
  "eng-ch38-ielts-task1",
  "eng-ch39-ielts-essay",
  "eng-ch40-ielts-cohesion",
  "eng-ch41-cambridge-essay",
  "eng-ch42-ielts-opinion",
  "eng-ch43-register-shift",
]);

const SPANISH_C2_THICK = new Set([
  "chapter-27-hendidas",
  "chapter-28-conjetura",
  "chapter-29-culto",
  "chapter-30-ironia",
]);

const SPANISH_C1_THICK = new Set([
  "chapter-16-perifrasis",
  "chapter-17-dele",
  "chapter-42-subjuntivo-avanzado",
  "chapter-43-indirecto-avanzado",
  "chapter-44-pronombres-avanzado",
  "chapter-45-ser-estar-matices",
]);

function isThickTrEcChapter(slug) {
  return (
    ENGLISH_C2_THICK.has(slug) ||
    ENGLISH_C1_EXAM_THICK.has(slug) ||
    SPANISH_C2_THICK.has(slug) ||
    SPANISH_C1_THICK.has(slug)
  );
}

function targetForType(slug, type) {
  if (
    isThickTrEcChapter(slug) &&
    (type === "translation" || type === "error_correction")
  ) {
    return THICK_TR_EC_TARGET;
  }
  return DEFAULT_TARGET;
}

function draftToPackItem(ex, grammarTopic) {
  return {
    type: ex.type,
    question: ex.question,
    ...(ex.options ? { options: ex.options } : {}),
    answer: ex.answer,
    ...(ex.acceptableAnswers?.length
      ? { acceptableAnswers: ex.acceptableAnswers }
      : {}),
    instruction: ex.instruction,
    explanation: ex.explanation,
    grammarTopic: ex.grammarTopic ?? grammarTopic,
  };
}

async function loadModules() {
  const { CHAPTERS } = await import("../src/config/chapters.ts");
  const { CHAPTER_EXERCISES } = await import("../src/config/chapter-exercises.ts");
  const { CURRICULUM_CHAPTER_EXERCISES } = await import(
    "../src/config/chapter-exercises-curriculum.ts"
  );
  const { SPANISH_CURATED_SUPPLEMENTS } = await import(
    "../src/config/exercise-seeds/spanish-curated-supplements.ts"
  );
  const { ENGLISH_CURATED_SUPPLEMENTS } = await import(
    "../src/config/exercise-seeds/english-curated-supplements.ts"
  );
  const { ENGLISH_CHAPTERS } = await import("../src/config/courses/english/chapters.ts");
  const { ENGLISH_EXERCISES } = await import("../src/config/courses/english/exercises.ts");
  const { ENGLISH_CURRICULUM_CHAPTER_EXERCISES } = await import(
    "../src/config/courses/english/chapter-exercises-curriculum.ts"
  );
  return {
    CHAPTERS,
    CHAPTER_EXERCISES,
    CURRICULUM_CHAPTER_EXERCISES,
    SPANISH_CURATED_SUPPLEMENTS,
    ENGLISH_CHAPTERS,
    ENGLISH_EXERCISES,
    ENGLISH_CURRICULUM_CHAPTER_EXERCISES,
    ENGLISH_CURATED_SUPPLEMENTS,
  };
}

function curatedForSpanish(
  slug,
  CHAPTER_EXERCISES,
  CURRICULUM_CHAPTER_EXERCISES,
  SPANISH_CURATED_SUPPLEMENTS,
) {
  return [
    ...(CHAPTER_EXERCISES[slug] ?? []),
    ...(CURRICULUM_CHAPTER_EXERCISES[slug] ?? []),
    ...(SPANISH_CURATED_SUPPLEMENTS[slug] ?? []),
  ];
}

function curatedForEnglish(
  slug,
  ENGLISH_EXERCISES,
  ENGLISH_CURRICULUM_CHAPTER_EXERCISES,
  ENGLISH_CURATED_SUPPLEMENTS,
) {
  return [
    ...(ENGLISH_EXERCISES[slug] ?? []),
    ...(ENGLISH_CURRICULUM_CHAPTER_EXERCISES[slug] ?? []),
    ...(ENGLISH_CURATED_SUPPLEMENTS[slug] ?? []),
  ];
}

function buildPackFromCurated(curated, grammarTopic, topicLabel, lang, slug) {
  const byType = {
    multiple_choice: [],
    fill_blank: [],
    translation: [],
    error_correction: [],
    sentence_building: [],
  };
  const seen = new Set();

  for (const ex of curated) {
    if (!byType[ex.type]) continue;
    const key = `${ex.type}|${ex.question.trim().toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    byType[ex.type].push(draftToPackItem(ex, grammarTopic));
  }

  const maxTarget = Math.max(
    DEFAULT_TARGET,
    ...Object.keys(byType).map((t) => targetForType(slug, t)),
    ...Object.values(byType).map((arr) => arr.length),
  );

  const seeds = curated
    .map((ex) => exerciseToSeed(ex, lang))
    .filter(Boolean);
  if (seeds.length === 0 && Object.values(byType).every((a) => a.length === 0)) {
    return null;
  }

  const templated =
    seeds.length > 0
      ? chapterFromSeeds(
          grammarTopic ?? "review",
          topicLabel,
          seeds,
          lang,
          maxTarget,
        )
      : null;

  for (const type of Object.keys(byType)) {
    const target = targetForType(slug, type);
    if (byType[type].length >= target) {
      byType[type] = byType[type].slice(0, target);
      continue;
    }
    for (const ex of templated?.[type] ?? []) {
      if (byType[type].length >= target) break;
      const key = `${ex.type}|${ex.question.trim().toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      byType[type].push(ex);
    }
  }

  return byType;
}

function mergePack(existing, generated, slug, force = false) {
  if (!generated) return existing;
  if (!existing || force) return generated;

  const types = Object.keys(generated);
  const thin = types.some(
    (t) => (existing[t]?.length ?? 0) < targetForType(slug, t),
  );
  if (thin) return generated;

  const out = { ...existing };
  for (const type of types) {
    const target = targetForType(slug, type);
    const have = existing[type]?.length ?? 0;
    if (have >= target) continue;
    const need = target - have;
    const seen = new Set(
      (existing[type] ?? []).map(
        (e) => `${e.type}|${e.question.trim().toLowerCase()}`,
      ),
    );
    const add = [];
    for (const ex of generated[type] ?? []) {
      if (add.length >= need) break;
      if (!ex?.question?.trim()) continue;
      const key = `${ex.type}|${ex.question.trim().toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);
      add.push(ex);
    }
    out[type] = [...(existing[type] ?? []), ...add];
  }
  return out;
}

async function main() {
  const {
    CHAPTERS,
    CHAPTER_EXERCISES,
    ENGLISH_CHAPTERS,
    ENGLISH_EXERCISES,
    ENGLISH_CURRICULUM_CHAPTER_EXERCISES,
    CURRICULUM_CHAPTER_EXERCISES,
    SPANISH_CURATED_SUPPLEMENTS,
    ENGLISH_CURATED_SUPPLEMENTS,
  } = await loadModules();

  const spanishPath = path.join(
    root,
    "src/config/exercise-banks/data/spanish-packs.json",
  );
  const englishPath = path.join(
    root,
    "src/config/exercise-banks/data/english-packs.json",
  );

  const spanishPacks = JSON.parse(fs.readFileSync(spanishPath, "utf8"));
  const englishPacks = JSON.parse(fs.readFileSync(englishPath, "utf8"));

  let spanishAdded = 0;
  let englishAdded = 0;

  for (const ch of CHAPTERS) {
    const curated = curatedForSpanish(
      ch.slug,
      CHAPTER_EXERCISES,
      CURRICULUM_CHAPTER_EXERCISES,
      SPANISH_CURATED_SUPPLEMENTS,
    );
    if (curated.length === 0) continue;

    const generated = buildPackFromCurated(
      curated,
      ch.grammarTopic,
      ch.titleEs || ch.title,
      "spanish",
      ch.slug,
    );
    if (!generated) continue;

    const before = JSON.stringify(spanishPacks[ch.slug] ?? {});
    spanishPacks[ch.slug] = mergePack(
      spanishPacks[ch.slug],
      generated,
      ch.slug,
      !SPANISH_KEEP.has(ch.slug) || FORCE_REGENERATE.has(ch.slug),
    );
    const after = JSON.stringify(spanishPacks[ch.slug] ?? {});
    if (before !== after) spanishAdded++;
  }

  for (const ch of ENGLISH_CHAPTERS) {
    const curated = curatedForEnglish(
      ch.slug,
      ENGLISH_EXERCISES,
      ENGLISH_CURRICULUM_CHAPTER_EXERCISES,
      ENGLISH_CURATED_SUPPLEMENTS,
    );
    if (curated.length === 0) continue;

    const generated = buildPackFromCurated(
      curated,
      ch.grammarTopic,
      ch.titleEs || ch.title,
      "english",
      ch.slug,
    );
    if (!generated) continue;

    const before = JSON.stringify(englishPacks[ch.slug] ?? {});
    englishPacks[ch.slug] = mergePack(
      englishPacks[ch.slug],
      generated,
      ch.slug,
      !ENGLISH_KEEP.has(ch.slug) || FORCE_REGENERATE.has(ch.slug),
    );
    const after = JSON.stringify(englishPacks[ch.slug] ?? {});
    if (before !== after) englishAdded++;
  }

  fs.writeFileSync(spanishPath, JSON.stringify(spanishPacks));
  fs.writeFileSync(englishPath, JSON.stringify(englishPacks));

  console.log("Spanish pack chapters:", Object.keys(spanishPacks).length, `(updated ${spanishAdded})`);
  console.log("English pack chapters:", Object.keys(englishPacks).length, `(updated ${englishAdded})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
