import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { lookupRussianQuestionGloss } from "@/config/courses/russian/question-glosses";
import type { InterfaceLanguage } from "@/types";

const UI_NON_RU: Exclude<InterfaceLanguage, "ru">[] = ["en", "es", "de"];
const A1_SLUGS = [
  "ru-ch1-alphabet-greetings",
  "ru-ch2-introduce-yourself",
  "ru-ch3-noun-gender",
  "ru-ch4-present-tense",
  "ru-ch5-accusative",
  "ru-ch6-university-day",
  "ru-ch7-prepositional",
  "ru-ch8-numbers-time",
] as const;

describe("RKI A1 pedagogical comprehension support", () => {
  it("audits all 680 A1 exercises and attaches en/es/de glosses for Cyrillic prompts", async () => {
    const course = await getCourse("russian");
    let total = 0;
    let cyrillicNonTr = 0;
    let missingGloss = 0;
    const gaps: string[] = [];

    for (const slug of A1_SLUGS) {
      const bank = course.getExercises(slug);
      total += bank.length;
      const withGloss = attachQuestionGlossesToMany(bank);

      for (const ex of withGloss) {
        if (ex.type === "translation") continue;
        if (!/[\u0400-\u04FF]/.test(ex.question)) continue;
        cyrillicNonTr += 1;
        for (const lang of UI_NON_RU) {
          const g = ex.questionTranslations?.[lang]?.trim();
          if (!g) {
            missingGloss += 1;
            gaps.push(`${ex.id ?? ex.question}@${lang}`);
          } else {
            // Must not equal the Russian question (no silent RU fallback).
            expect(g, `${ex.question}@${lang}`).not.toBe(ex.question);
          }
        }
      }
    }

    // 680 curated A1 items + appended reading-passage extras (stable IDs after base bank).
    expect(total).toBeGreaterThanOrEqual(680);
    expect(total).toBeLessThanOrEqual(690);
    expect(cyrillicNonTr).toBeGreaterThan(500);
    expect(missingGloss, gaps.slice(0, 15).join(" | ")).toBe(0);
  });

  it("explains «Пока!» register without revealing the answer", () => {
    const q = "Где уместно сказать «Пока!»?";
    const en = lookupRussianQuestionGloss(q, "en");
    const es = lookupRussianQuestionGloss(q, "es");
    const de = lookupRussianQuestionGloss(q, "de");
    expect(en).toMatch(/Пока/);
    expect(en).toMatch(/informal goodbye|see you/i);
    expect(es).toMatch(/Пока/);
    expect(es).toMatch(/informal|adiós|hasta luego/i);
    expect(de).toMatch(/Пока/);
    expect(de).toMatch(/Tschüss|lockeres|informal/i);
    // Must list situations without crowning the friend option.
    for (const g of [en, es, de]) {
      expect(g).not.toMatch(/correct answer|respuesta correcta|richtige Antwort/i);
      expect(g!.toLowerCase()).not.toMatch(
        /only with (a )?friend|solo con (un )?amigo|nur bei einem freund/,
      );
    }
  });

  it("frames Ь/Ъ as soft/hard signs and treats «в группе» as a set phrase", () => {
    const soft = lookupRussianQuestionGloss("Буква Ь — это…", "en");
    const hard = lookupRussianQuestionGloss("Буква Ъ нужна, чтобы…", "en");
    const group = lookupRussianQuestionGloss("Мы в одной ___.", "en");
    expect(soft).toMatch(/soft sign/i);
    expect(hard).toMatch(/hard sign/i);
    expect(group).toMatch(/set phrase|в группе/i);
    expect(group).toMatch(/do not need the full case|case system/i);
    // Soft-sign blank must not name ь as the only letter.
    const blank = lookupRussianQuestionGloss(
      "Буква ___ показывает мягкость согласной (день).",
      "en",
    );
    expect(blank).toBeTruthy();
    expect(blank!.toLowerCase()).not.toMatch(/\bsoft sign \(ь\)\b|\btype ь\b/);
  });

  it("keeps answers and options unchanged after gloss attach", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch1-alphabet-greetings");
    const target = bank.find((e) => e.question.includes("Пока"));
    expect(target).toBeTruthy();
    expect(target!.options).toEqual([
      "с преподавателем",
      "с новым соседом в общежитии",
      "с другом",
      "на экзамене",
    ]);
    const [glossed] = attachQuestionGlossesToMany([target!]);
    expect(glossed.answer).toBe(target!.answer);
    expect(glossed.options).toEqual(target!.options);
    expect(glossed.question).toBe(target!.question);
  });

  it("localizes instructions for non-RU UI without Cyrillic meta", async () => {
    const course = await getCourse("russian");
    for (const slug of A1_SLUGS) {
      const prepared = prepareExercisesForInterface(
        course.getExercises(slug).slice(0, 25),
        "en",
        "russian",
      );
      for (const ex of prepared) {
        expect(ex.instruction, ex.id).not.toMatch(
          /Выберите|Заполните|Переведите|Исправьте|Составьте|Неформальное|Вежливость/,
        );
      }
    }
  });

  it("rejects fill-blank instructions that print the lemma/answer (Вставьте: …)", async () => {
    const course = await getCourse("russian");
    const spoilers: string[] = [];
    for (const ch of course.getChapters()) {
      for (const ex of course.getExercises(ch.slug)) {
        if (ex.type !== "fill_blank") continue;
        const inst = (ex.instruction ?? "").trim();
        if (/^Вставьте:\s*/iu.test(inst)) {
          spoilers.push(`${ch.slug}: ${ex.question} | ${inst}`);
        }
        // Dictionary-form cue belongs in the stem, not as a free open blank.
        if (/^Я перевожу ___\.?$/u.test(ex.question.trim())) {
          spoilers.push(`${ch.slug}: open blank ${ex.question}`);
        }
      }
    }
    expect(spoilers, spoilers.slice(0, 8).join(" | ")).toEqual([]);
  });

  it("attaches pedagogical glosses for A2 Cyrillic prompts", async () => {
    const course = await getCourse("russian");
    const a2 = course.getExercises("ru-ch9-past-tense");
    expect(a2.length).toBeGreaterThanOrEqual(35);
    const withGloss = attachQuestionGlossesToMany(
      a2.filter((e) => e.type !== "translation").slice(0, 12),
    );
    for (const ex of withGloss) {
      if (!/[\u0400-\u04FF]/.test(ex.question)) continue;
      expect(ex.questionTranslations?.en?.trim().length, ex.question).toBeGreaterThan(
        8,
      );
    }
  });
});

