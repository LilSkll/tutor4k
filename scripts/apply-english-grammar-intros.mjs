#!/usr/bin/env node
/**
 * Add clear «Before this topic» intros to English grammar files.
 * Run: node scripts/apply-english-grammar-intros.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../src/config/courses/english");

/** @type {Record<string, string>} */
const CORE_INTROS = {
  "eng-a1-be":
    "> **Перед этой темой:** это **первая** грамматическая тема курса. **В этой теме:** глагол **be** — am, is, are.",
  "eng-a1-present-simple":
    "> **Перед этой темой:** вы знаете **be** и **артикли / притяжательные**. **В этой теме:** **Present Simple** — рутины и факты.",
  "eng-a1-questions":
    "> **Перед этой темой:** вы умеете **Present Simple**. **В этой теме:** вопросительные слова и порядок слов в вопросе.",
  "eng-a1-there-is-are":
    "> **Перед этой темой:** вы знаете **вопросы** и **Present Simple**. **В этой теме:** **there is / there are** — «есть / имеется».",
  "eng-a1-can":
    "> **Перед этой темой:** вы знаете **there is/are**. **В этой теме:** **can / can't** — умение, разрешение, просьба.",
  "eng-a1-prepositions":
    "> **Перед этой темой:** вы знаете **can**. **В этой теме:** предлоги места — in, on, at, under, next to.",
  "eng-a2-past-simple":
    "> **Перед этой темой:** вы завершили **A1**. **В этой теме:** **Past Simple** — законченные действия в прошлом.",
  "eng-a2-comparatives":
    "> **Перед этой темой:** вы знаете **Past Simple**. **В этой теме:** сравнения — more… than, the most…, better/worse.",
  "eng-a2-going-to":
    "> **Перед этой темой:** вы прошли **countable/uncountable** и вводный **Present Perfect**. **В этой теме:** **be going to** — ближайшие планы.",
  "eng-a2-present-perfect":
    "> **Перед этой темой:** вы знаете **going to** и форму **have + V3**. **В этой теме:** **Present Perfect** — опыт и результат «к настоящему».",
  "eng-a2-quantifiers":
    "> **Перед этой темой:** вы знаете **Present Perfect**. **В этой теме:** **some/any, much/many, a lot of** — с исчисляемыми и неисчисляемыми.",
  "eng-b1-future-conditional":
    "> **Перед этой темой:** вы завершили **A2**. **В этой теме:** **will** и **первый тип условных** (If + Present, will…).",
  "eng-b1-modals":
    "> **Перед этой темой:** вы знаете **zero / 1st / 2nd conditionals**. **В этой теме:** **should, must, have to** — совет и обязанность.",
  "eng-b1-narrative":
    "> **Перед этой темой:** вы знаете **модальные**. **В этой теме:** **Past Continuous, used to, Past Perfect** — рассказ о прошлом.",
  "eng-b1-perfect-continuous":
    "> **Перед этой темой:** вы знаете **narrative tenses**. **В этой теме:** **Present Perfect Continuous** — for/since, «сколько уже…».",
  "eng-b2-conditionals":
    "> **Перед этой темой:** вы прошли **reported speech** и **relative clauses**. **В этой теме:** **2nd/3rd conditional**, wish / if only.",
  "eng-b2-passive":
    "> **Перед этой темой:** вы знаете **условные**. **В этой теме:** **Passive voice** — be + V3 во всех временах.",
  "eng-b2-reported-clauses":
    "> **Перед этой темой:** вы прошли **passive advanced**. **В этой теме:** **reported speech + relative clauses** на уровне B2.",
  "eng-c1-inversion":
    "> **Перед этой темой:** вы прошли блок **IELTS writing**. **В этой теме:** **инверсия** — Never have I…, Not only…",
  "eng-c1-discourse":
    "> **Перед этой темой:** вы знаете **инверсию**. **В этой теме:** **discourse markers**, substitution, ellipsis.",
  "eng-c1-mixed-conditionals":
    "> **Перед этой темой:** вы знаете **discourse**. **В этой теме:** **mixed conditionals** — прошлое ↔ настоящее.",
  "eng-c1-review":
    "> **Перед этой темой:** вы прошли **C1 structures**. **В этой теме:** **сводка IELTS** — повтор ключевых структур.",
  "eng-c2-cleft-emphasis":
    "> **Перед этой темой:** вы прошли **IELTS review**. **В этой теме:** **cleft sentences** — It was John who…, What I need is…",
  "eng-c2-ellipsis-substitution":
    "> **Перед этой темой:** вы знаете **cleft emphasis**. **В этой теме:** **ellipsis & substitution** — So do I, I hope so.",
  "eng-c2-hedging-nuance":
    "> **Перед этой темой:** вы знаете **ellipsis**. **В этой теме:** **hedging** — arguably, I was wondering if…, British understatement.",
};

/** @type {Record<string, string>} */
const EXTRA_INTROS = {
  "eng-a1-articles-basics":
    "> **Перед этой темой:** вы знаете **be (am/is/are)**. **В этой теме:** **a / an / the** и zero article — первый выбор перед существительным.",
  "eng-a1-possessives":
    "> **Перед этой темой:** вы знаете **артикли**. **В этой теме:** **my/your/his** и **'s** — чьё это?",
  "eng-a1-can-ability":
    "> **Перед этой темой:** вы прошли главу **can**. **В этой теме:** справочник — умение, разрешение, просьба (та же форма, три смысла).",
  "eng-a2-countable":
    "> **Перед этой темой:** вы знаете **comparatives**. **В этой теме:** **countable vs uncountable** — many/much, a few/a little.",
  "eng-a2-present-perfect-intro":
    "> **Перед этой темой:** вы знаете **countable/uncountable**. **В этой теме:** вводный **Present Perfect** — have/has + V3, ever/never, just/already/yet.",
  "eng-b1-conditionals-review":
    "> **Перед этой темой:** вы знаете **will / 1st conditional**. **В этой теме:** **zero, 1st, 2nd** — законы, реальное и гипотетическое будущее.",
  "eng-b1-reported-speech":
    "> **Перед этой темой:** вы знаете **Present Perfect Continuous**. **В этой теме:** **reported speech** — say/tell, сдвиг времён, вопросы и просьбы.",
  "eng-b1-relative-clauses":
    "> **Перед этой темой:** вы знаете **reported speech**. **В этой теме:** **who / which / that / whose** — определяющие придаточные.",
  "eng-b2-passive-advanced":
    "> **Перед этой темой:** вы знаете **passive (база)**. **В этой теме:** пассив во **всех временах** + **have something done**.",
  "eng-b2-modals-deduction":
    "> **Перед этой темой:** вы прошли **B2 reported clauses**. **В этой теме:** **must/might/can't** — логический вывод о настоящем и прошлом.",
};

/** @type {Record<string, string>} */
const EXAM_INTROS = {
  "eng-ielts-letter-informal":
    "> **Перед этой темой:** вы знаете **modals of deduction**. **В этой теме:** **IELTS GT Task 1** — неформальное письмо другу (~150 слов, 3 bullets).",
  "eng-ielts-letter-formal":
    "> **Перед этой темой:** вы знаете **informal letter**. **В этой теме:** **формальное письмо** — Yours faithfully/sincerely, purpose в первом абзаце.",
  "eng-cambridge-letter-email":
    "> **Перед этой темой:** вы знаете **IELTS formal letter**. **В этой теме:** **Cambridge B2** — letter/email, три регистра под адресата.",
  "eng-ielts-task1-report":
    "> **Перед этой темой:** вы знаете **Cambridge letter/email**. **В этой теме:** **IELTS Academic Task 1** — overview + тренды, без мнения.",
  "eng-ielts-essay-structure":
    "> **Перед этой темой:** вы знаете **Task 1 report**. **В этой теме:** **Task 2** — 4 абзаца, тип вопроса, thesis, ≥250 слов.",
  "eng-ielts-essay-cohesion":
    "> **Перед этой темой:** вы знаете **essay structure**. **В этой теме:** **cohesion** — линкеры по функции, referencing, единство абзаца.",
  "eng-cambridge-essay-article":
    "> **Перед этой темой:** вы знаете **cohesion**. **В этой теме:** **essay vs article** — тон, заголовок, notes Cambridge.",
  "eng-ielts-opinion-language":
    "> **Перед этой темой:** вы знаете **essay vs article**. **В этой теме:** **язык мнения** — сила утверждения, hedge, уступка + контратака.",
  "eng-cbe-register-shift":
    "> **Перед этой темой:** вы знаете **opinion language**. **В этой теме:** **register shift** — informal / neutral / formal от greeting до sign-off.",
};

/**
 * @param {string} filePath
 * @param {Record<string, string>} intros
 */
function applyIntros(filePath, intros) {
  let src = fs.readFileSync(filePath, "utf8");
  let count = 0;

  for (const [slug, intro] of Object.entries(intros)) {
    const re = new RegExp(
      `(slug: "${slug}"[\\s\\S]*?content: \`)([\\s\\S]*?)(\`,\\s*\\n  \\})`,
    );
    const m = re.exec(src);
    if (!m) {
      console.warn("skip:", path.basename(filePath), slug);
      continue;
    }
    let body = m[2];
    if (
      body.startsWith("> **Перед этой темой:**") ||
      body.startsWith("> **Before this topic:**")
    ) {
      body = body.replace(
        /^> \*\*(?:Перед этой темой|Before this topic):\*\*[^\n]+\n\n/,
        "",
      );
    }
    src = src.replace(re, `$1${intro}\n\n${body}$3`);
    count++;
    console.log("applied:", path.basename(filePath), slug);
  }

  fs.writeFileSync(filePath, src);
  return count;
}

const total =
  applyIntros(path.join(root, "grammar.ts"), CORE_INTROS) +
  applyIntros(path.join(root, "grammar-extra.ts"), EXTRA_INTROS) +
  applyIntros(path.join(root, "grammar-exam-writing.ts"), EXAM_INTROS);

console.log(`Done. ${total} intros applied.`);
