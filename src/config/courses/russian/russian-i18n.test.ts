import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { getLocalizedGrammarArticle } from "@/server/grammar/localize-content";
import {
  getChapterSummary,
  getChapterTitle,
  getChapterLocation,
} from "@/lib/chapter-display";
import {
  getExampleTranslation,
  getWordGloss,
} from "@/lib/vocab-display";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { buildRussianPrompt } from "@/server/ai/prompts/russian";
import { RUSSIAN_VOCAB_GLOSS } from "@/config/courses/russian/vocabulary/glosses";
import type { InterfaceLanguage } from "@/types";

const UI_NON_RU: Exclude<InterfaceLanguage, "ru">[] = ["en", "es", "de"];
const A1_GRAMMAR = [
  "ru-a1-alphabet-phonetics",
  "ru-a1-identity-eto",
  "ru-a1-noun-gender",
  "ru-a1-present-tense",
  "ru-a1-accusative",
  "ru-a1-prepositional",
  "ru-a1-numbers-time",
] as const;

const A2_GRAMMAR = [
  "ru-a2-past-tense",
  "ru-a2-future",
  "ru-a2-genitive",
  "ru-a2-dative",
  "ru-a2-instrumental",
  "ru-a2-aspect-intro",
  "ru-a2-motion-basic",
] as const;

const CYRILLIC_META =
  /\b(В этой теме|Зачем это|Главные модели|Типичные ошибки|Перед этой темой)\b/;

describe("RKI multilingual localization (A1)", () => {
  it("provides full static grammar articles for all A1 topics × en/es/de", () => {
    for (const slug of A1_GRAMMAR) {
      for (const lang of UI_NON_RU) {
        const content = getStaticGrammarContent(slug, lang);
        expect(content?.trim().length, `${slug}@${lang}`).toBeGreaterThan(400);
        expect(content, `${slug}@${lang}`).not.toMatch(CYRILLIC_META);
        // Learning material stays Cyrillic.
        expect(content, `${slug}@${lang}`).toMatch(/[\u0400-\u04FF]/);
      }
    }
  });

  it("provides full static grammar articles for all A2 topics × en/es/de", () => {
    for (const slug of A2_GRAMMAR) {
      for (const lang of UI_NON_RU) {
        const content = getStaticGrammarContent(slug, lang);
        expect(content?.trim().length, `${slug}@${lang}`).toBeGreaterThan(400);
        expect(content, `${slug}@${lang}`).not.toMatch(CYRILLIC_META);
        expect(content, `${slug}@${lang}`).toMatch(/[\u0400-\u04FF]/);
        expect(content, `${slug}@${lang}`).toMatch(/^## /m);
      }
    }
  });

  it("provides full static grammar articles for all B1 topics × en/es/de", () => {
    const B1_GRAMMAR = [
      "ru-b1-cases-system",
      "ru-b1-aspect-tenses",
      "ru-b1-motion-prefixes",
      "ru-b1-complex-sentences",
      "ru-b1-text-cohesion",
      "ru-b1-argumentation",
    ] as const;
    for (const slug of B1_GRAMMAR) {
      for (const lang of UI_NON_RU) {
        const content = getStaticGrammarContent(slug, lang);
        expect(content?.trim().length, `${slug}@${lang}`).toBeGreaterThan(400);
        expect(content, `${slug}@${lang}`).not.toMatch(CYRILLIC_META);
        expect(content, `${slug}@${lang}`).toMatch(/[\u0400-\u04FF]/);
        expect(content, `${slug}@${lang}`).toMatch(/^## /m);
      }
    }
  });

  it("serves static B1 articles for en UI (no silent RU fallback)", async () => {
    const article = await getLocalizedGrammarArticle({
      slug: "ru-b1-cases-system",
      courseId: "russian",
      interfaceLanguage: "en",
    });
    expect(article.source).toBe("static");
    expect(article.content).toMatch(/case|Case/i);
    expect(article.content).not.toMatch(CYRILLIC_META);
  });

  it("serves native Russian articles only for ru UI", async () => {
    const article = await getLocalizedGrammarArticle({
      slug: "ru-a1-accusative",
      courseId: "russian",
      interfaceLanguage: "ru",
    });
    expect(article.source).toBe("native");
    expect(article.content).toMatch(/Винительн|кого\?|что\?/i);
  });

  it("localizes A1 chapter titles/summaries for en/es/de without RU meta", async () => {
    const course = await getCourse("russian");
    const a1 = course.getChapters().filter((c) => c.level === "A1");
    expect(a1.length).toBe(8);

    for (const ch of a1) {
      for (const lang of UI_NON_RU) {
        const title = getChapterTitle(ch, lang);
        const summary = getChapterSummary(ch, lang);
        const location = getChapterLocation(ch, lang);
        expect(title.trim().length, `${ch.slug} title@${lang}`).toBeGreaterThan(
          2,
        );
        expect(summary.trim().length, `${ch.slug} summary@${lang}`).toBeGreaterThan(
          10,
        );
        expect(location.trim().length, `${ch.slug} loc@${lang}`).toBeGreaterThan(
          2,
        );
        // Summaries must not be the Russian source card text.
        expect(summary, `${ch.slug}@${lang}`).not.toBe(ch.summary);
        expect(summary, `${ch.slug}@${lang}`).not.toMatch(
          /В этой теме:|Кириллица и трудные/,
        );
      }
    }
  });

  it("covers A1 vocab lemmas with en/es/de glosses", async () => {
    const course = await getCourse("russian");
    const a1Only = course
      .getVocab()
      .flatMap((t) => t.words)
      .filter((w) => {
        const n = parseInt(w.chapterSlug?.match(/ru-ch(\d+)/)?.[1] ?? "99", 10);
        return n <= 8;
      });

    expect(a1Only.length).toBeGreaterThan(80);

    let missing = 0;
    const gaps: string[] = [];
    for (const word of a1Only) {
      for (const lang of UI_NON_RU) {
        const gloss = getWordGloss(word, lang, "russian");
        if (!gloss.trim()) {
          missing += 1;
          gaps.push(`${word.word}@${lang}`);
        } else {
          expect(gloss, `${word.word}@${lang}`).not.toMatch(/[\u0400-\u04FF]/);
        }
      }
    }
    expect(missing, gaps.slice(0, 20).join(", ")).toBe(0);
  });

  it("translates primary A1 examples for en/es/de", async () => {
    const course = await getCourse("russian");
    const chapters = course.getChapters().filter((c) => c.number <= 8);
    let checked = 0;
    let missing = 0;
    for (const ch of chapters) {
      const words = course
        .getVocab()
        .flatMap((t) => t.words)
        .filter((w) => w.chapterSlug === ch.slug);
      for (const word of words) {
        const ex = word.example?.trim();
        if (!ex) continue;
        checked += 1;
        for (const lang of UI_NON_RU) {
          const tr = getExampleTranslation(ex, lang, "russian");
          if (!tr) missing += 1;
          else expect(tr).not.toMatch(/^[\u0400-\u04FF]/);
        }
      }
    }
    expect(checked).toBeGreaterThan(50);
    // Allow a small gap for secondary examples not in the primary map.
    expect(missing / (checked * 3)).toBeLessThan(0.15);
  });

  it("localizes exercise instructions and feedback across A1 chapters", async () => {
    const course = await getCourse("russian");
    for (const ch of course.getChapters().filter((c) => c.number <= 8)) {
      const bank = course.getExercises(ch.slug);
      expect(bank.length, ch.slug).toBeGreaterThan(20);

      for (const lang of UI_NON_RU) {
        const prepared = prepareExercisesForInterface(bank, lang, "russian");
        expect(prepared.length, `${ch.slug}@${lang}`).toBeGreaterThan(10);

        for (const ex of prepared.slice(0, 30)) {
          expect(ex.instruction, ex.id).not.toMatch(
            /Выберите|Заполните|Переведите|Исправьте|Составьте/,
          );
          // Feedback must not be raw Russian methodological prose.
          expect(ex.explanation ?? "", ex.id).not.toMatch(
            /^(В этой теме|Зачем это|Правило:)/,
          );
          // Target stems stay Cyrillic (except pure L1 translation prompts).
          if (ex.type !== "translation") {
            expect(ex.question + ex.answer, ex.id).toMatch(/[\u0400-\u04FF]/);
          }
        }
      }
    }
  });

  it("localizes exercise instructions across all 560 A2–B1 items × en/es/de", async () => {
    const course = await getCourse("russian");
    const a2b1 = course.getChapters().filter((c) => c.number >= 9 && c.number <= 22);
    expect(a2b1).toHaveLength(14);

    const byTypeLocale: Record<string, Record<string, number>> = {
      en: {},
      es: {},
      de: {},
    };
    let total = 0;
    const ruMeta =
      /Выберите|Заполните|Переведите|Исправьте|Составьте|Соберите|Впишите|Добавьте|Уберите|Краткая форма|Родительный|Дательный|Творительный|Прошедшее|Будущее/;

    for (const ch of a2b1) {
      const bank = course.getExercises(ch.slug);
      expect(bank.length, ch.slug).toBe(40);
      total += bank.length;

      for (const lang of UI_NON_RU) {
        const prepared = prepareExercisesForInterface(bank, lang, "russian");
        // All 40 must remain usable (EN L1 stems kept when ES/DE maps absent).
        expect(prepared.length, `${ch.slug}@${lang}`).toBe(40);

        for (const ex of prepared) {
          byTypeLocale[lang]![ex.type] =
            (byTypeLocale[lang]![ex.type] ?? 0) + 1;
          expect(ex.instruction?.trim().length, `${ex.id}@${lang}`).toBeGreaterThan(8);
          // No silent Russian meta-instruction for non-RU UI.
          expect(ex.instruction, `${ex.id}@${lang}`).not.toMatch(ruMeta);
          // Instruction must not equal the keyed answer (spoiler).
          const instr = (ex.instruction ?? "").toLowerCase();
          const ans = (ex.answer ?? "").toLowerCase();
          if (ans.length >= 4 && /[\u0400-\u04FF]/.test(ans)) {
            expect(instr.includes(ans), `${ex.id} spoils answer in instruction`).toBe(
              false,
            );
          }
          // Learning target stays Cyrillic except L1 translation prompts.
          if (ex.type !== "translation") {
            expect(ex.question + ex.answer, ex.id).toMatch(/[\u0400-\u04FF]/);
          }
          // Feedback is not a silent raw Russian article header.
          expect(ex.explanation ?? "", ex.id).not.toMatch(CYRILLIC_META);
        }
      }
    }

    expect(total).toBe(560);
    for (const lang of UI_NON_RU) {
      expect(byTypeLocale[lang]).toMatchObject({
        multiple_choice: 112,
        fill_blank: 112,
        translation: 112,
        error_correction: 112,
        sentence_building: 112,
      });
    }
  });

  it("keeps Russian instructions on RU UI for A2–B1 without English fallback", async () => {
    const course = await getCourse("russian");
    const sample = [
      "ru-ch9-past-tense",
      "ru-ch16-dorm-shops",
      "ru-ch22-academic-social",
    ] as const;
    for (const slug of sample) {
      const prepared = prepareExercisesForInterface(
        course.getExercises(slug),
        "ru",
        "russian",
      );
      for (const ex of prepared) {
        expect(ex.instruction, ex.id).toMatch(/[\u0400-\u04FF]/);
        expect(ex.instruction, ex.id).not.toMatch(
          /Choose one correct|Type the single missing|Translate the phrase|Find the mistake|Tap the words below/,
        );
      }
    }
  });

  it("switches the same grammar object across locales without changing slug", async () => {
    const slug = "ru-a1-accusative";
    const byLang: Record<string, string> = {};
    for (const lang of ["ru", ...UI_NON_RU] as InterfaceLanguage[]) {
      const article = await getLocalizedGrammarArticle({
        slug,
        courseId: "russian",
        interfaceLanguage: lang,
      });
      byLang[lang] = article.content;
      expect(article.content.length).toBeGreaterThan(100);
    }
    expect(byLang.en).not.toEqual(byLang.ru);
    expect(byLang.es).not.toEqual(byLang.en);
    expect(byLang.de).not.toEqual(byLang.es);
    expect(byLang.en).toMatch(/accusative|Accusative/i);
    expect(byLang.es).toMatch(/acusativ/i);
    expect(byLang.de).toMatch(/Akkusativ|akkusativ/i);
  });

  it("AI tutor prompt binds explanations to each interface language", () => {
    for (const lang of UI_NON_RU) {
      const prompt = buildRussianPrompt({
        level: "A1",
        interfaceLanguage: lang,
        userName: "Alex",
      });
      expect(prompt).toMatch(/LANGUAGE OF YOUR RESPONSE/i);
      if (lang === "en") expect(prompt).toMatch(/English/);
      if (lang === "es") expect(prompt).toMatch(/Spanish|español|Español/i);
      if (lang === "de") expect(prompt).toMatch(/German|Deutsch/i);
      expect(prompt).toMatch(/Russian/);
    }
  });

  it("reports gloss map sizes for coverage table", () => {
    for (const lang of UI_NON_RU) {
      expect(Object.keys(RUSSIAN_VOCAB_GLOSS[lang] ?? {}).length).toBeGreaterThan(
        100,
      );
    }
  });

  it("keeps chapter titles/summaries intact after story restore", async () => {
    const course = await getCourse("russian");
    const ch1 = course.getChapter("ru-ch1-alphabet-greetings");
    expect(ch1?.title).toMatch(/Алфавит/);
    expect(ch1?.grammarTopic).toBe("ru-a1-alphabet-phonetics");
    expect(ch1?.vocabTopic).toBe("ru-a1-greetings");
  });
});
