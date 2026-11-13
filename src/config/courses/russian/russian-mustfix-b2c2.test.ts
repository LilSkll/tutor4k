import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { getChapterStory } from "@/config/chapter-stories";
import { getStaticGrammarContent } from "@/config/grammar-content-localizations";
import { answersMatch } from "@/lib/normalize-answer";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { RUSSIAN_INSTRUCTION_I18N } from "@/config/courses/russian/instruction-i18n";
import { lookupRussianQuestionGloss } from "@/config/courses/russian/question-glosses";
import type { InterfaceLanguage } from "@/types";

const UI_NON_RU: InterfaceLanguage[] = ["en", "es", "de"];

const M1_OMAR = "russian:ru-ch26-reported-speech:error_correction:01";
const M1_ANNA = "russian:ru-ch26-reported-speech:error_correction:02";
const M2_MEDIA = "russian:ru-ch32-media-discourse:error_correction:01";

const CH34_FRAGMENT_MARKERS = [
  "серым полотном",
  "тихий, усталый коридор",
  "словно кто-то только что вышел",
  "закрыл окно",
  "дорога домой",
  "чужая перчатка",
  "зал опустел",
] as const;

describe("RKI B2–C2 MUST-FIX regressions (M1–M3)", () => {
  it("M1: Omar/Anna EC stems quote direct speech so «я» cannot mean another speaker", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch26-reported-speech");
    const omar = bank.find((e) => e.id === M1_OMAR);
    const anna = bank.find((e) => e.id === M1_ANNA);
    expect(omar, M1_OMAR).toBeTruthy();
    expect(anna, M1_ANNA).toBeTruthy();

    expect(omar!.question).toMatch(/Омар сказал: «Я уже сдал черновик»/);
    expect(omar!.question).toMatch(/Пересказ: Омар сказал, что я уже сдал черновик/);
    expect(anna!.question).toMatch(/Анна сообщила: «Завтра я приду на консультацию»/);
    expect(anna!.question).toMatch(/Пересказ: Анна сообщила, что завтра я приду/);

    // Positive: person shift after quoting Omar about himself.
    expect(
      answersMatch("Омар сказал, что он уже сдал черновик.", [
        omar!.answer,
        ...(omar!.acceptableAnswers ?? []),
      ]),
    ).toBe(true);
    expect(
      answersMatch(
        "Омар сказал: «Я уже сдал черновик». Пересказ: Омар сказал, что он уже сдал черновик.",
        [omar!.answer, ...(omar!.acceptableAnswers ?? [])],
      ),
    ).toBe(true);

    // Negative: bare first person in the retelling is still wrong for this objective.
    expect(
      answersMatch("Омар сказал, что я уже сдал черновик.", [
        omar!.answer,
        ...(omar!.acceptableAnswers ?? []),
      ]),
    ).toBe(false);

    expect(
      answersMatch("Анна сообщила, что завтра она придёт на консультацию.", [
        anna!.answer,
        ...(anna!.acceptableAnswers ?? []),
      ]),
    ).toBe(true);
    expect(
      answersMatch("Анна сообщила, что завтра я приду на консультацию.", [
        anna!.answer,
        ...(anna!.acceptableAnswers ?? []),
      ]),
    ).toBe(false);

    // Do not teach a blanket “я always changes” rule in the explanation.
    expect(omar!.explanation).toMatch(/не обязано меняться всегда|не «всегда»/i);
  });

  it("M2: media EC removes contradictory «хотя» after «опроверг»", async () => {
    const course = await getCourse("russian");
    const ex = course
      .getExercises("ru-ch32-media-discourse")
      .find((e) => e.id === M2_MEDIA);
    expect(ex, M2_MEDIA).toBeTruthy();
    expect(ex!.question).toMatch(/подтвердил слух/);
    expect(ex!.question).toMatch(/хотя/);

    const keys = [ex!.answer, ...(ex!.acceptableAnswers ?? [])];
    expect(answersMatch(ex!.answer, keys)).toBe(true);
    expect(ex!.answer).toMatch(/опроверг/);
    expect(ex!.answer).not.toMatch(/хотя/);
    for (const alt of ex!.acceptableAnswers ?? []) {
      expect(alt).toMatch(/опроверг/);
      expect(alt).not.toMatch(/хотя/);
    }

    // Positive alternatives with coherent linkers.
    expect(
      answersMatch(
        "Официальный представитель опроверг слух о закрытии программы: в том же абзаце слух назван ложным.",
        keys,
      ),
    ).toBe(true);

    // Negative: old contradictory key must not pass.
    expect(
      answersMatch(
        "Официальный представитель опроверг слух о закрытии программы, хотя в том же абзаце слух назван ложным.",
        keys,
      ),
    ).toBe(false);
  });

  it("M3: chapter 34 keeps 40 items / 5×8 types and embeds a literary fragment", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch34-literary-culture");
    expect(bank).toHaveLength(40);

    const byType: Record<string, number> = {};
    const ids = new Set<string>();
    for (const ex of bank) {
      byType[ex.type] = (byType[ex.type] ?? 0) + 1;
      expect(ids.has(ex.id!)).toBe(false);
      ids.add(ex.id!);
      expect(ex.id).toMatch(/^russian:ru-ch34-literary-culture:/);
    }
    expect(byType).toEqual({
      multiple_choice: 8,
      fill_blank: 8,
      translation: 8,
      error_correction: 8,
      sentence_building: 8,
    });

    const blob = bank.map((e) => e.question + "\n" + e.answer).join("\n");
    for (const marker of CH34_FRAGMENT_MARKERS) {
      expect(blob, marker).toMatch(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    }

    // Interpretation beyond metalanguage labels.
    const interpMc = bank.find(
      (e) => e.id === "russian:ru-ch34-literary-culture:multiple_choice:08",
    );
    expect(interpMc?.answer).toMatch(/предположение повествователя/);
    const interpEc = bank.find(
      (e) => e.id === "russian:ru-ch34-literary-culture:error_correction:08",
    );
    expect(interpEc?.answer).toMatch(/предположение повествователя/);
    expect(
      answersMatch(
        "Во фрагменте: «словно кто-то только что вышел» — это доказанный факт биографии героя.",
        [interpEc!.answer, ...(interpEc!.acceptableAnswers ?? [])],
      ),
    ).toBe(false);
  });

  it("M3: fragment appears in grammar articles, story, and localized instructions", async () => {
    const course = await getCourse("russian");
    const topic = course.getGrammarTopic("ru-c2-literary");
    expect(topic?.content).toMatch(/серым полотном/);
    expect(topic?.content).toMatch(/чужая перчатка/);

    for (const lang of UI_NON_RU) {
      const article = getStaticGrammarContent("ru-c2-literary", lang);
      expect(article, lang).toMatch(/серым полотном/);
      expect(article, lang).toMatch(/чужая перчатка/);
    }

    for (const lang of ["ru", ...UI_NON_RU] as InterfaceLanguage[]) {
      const story = await getChapterStory("ru-ch34-literary-culture", lang);
      expect(story?.trim().length, lang).toBeGreaterThan(80);
      expect(story, lang).toMatch(/серым полотном|Альтаир|Altair/);
    }

    const bank = course.getExercises("ru-ch34-literary-culture");
    for (const ex of bank) {
      const instr = ex.instruction?.trim() ?? "";
      if (!instr) continue;
      const row = RUSSIAN_INSTRUCTION_I18N[instr];
      expect(row?.en && row?.es && row?.de, instr).toBeTruthy();
    }

    for (const lang of UI_NON_RU) {
      const prepared = prepareExercisesForInterface(bank, lang, "russian");
      expect(prepared).toHaveLength(40);
      for (const ex of prepared) {
        if (ex.type === "error_correction" || ex.type === "translation") continue;
        const gloss = lookupRussianQuestionGloss(ex.question, lang);
        expect(gloss?.trim().length, `${ex.id}@${lang}`).toBeGreaterThan(10);
        // Hints must not print the keyed literary term as a whole word when it is the answer.
        if (ex.answer && /метафора|эпитет|подтекст|кульминация|лейтмотив|аллюзия|развязка|повествователь/.test(ex.answer)) {
          const term = ex.answer.replace(/[!.?]+$/g, "").toLowerCase();
          if (term.length >= 4 && gloss) {
            const re = new RegExp(
              `(^|[^\\p{L}\\p{M}])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[^\\p{L}\\p{M}]|$)`,
              "iu",
            );
            expect(re.test(gloss.toLowerCase()), `${ex.id} gloss spoils ${term}`).toBe(
              false,
            );
          }
        }
      }
    }
  });

  it("stability: A1–B1 banks untouched in size; B2–C2 chapter counts stay 40", async () => {
    const course = await getCourse("russian");
    expect(course.getChapters()).toHaveLength(45);
    expect(course.getGrammar()).toHaveLength(43);

    const frozenForty = [
      "ru-ch23-participles",
      "ru-ch24-gerunds",
      "ru-ch25-passive",
      "ru-ch26-reported-speech",
      "ru-ch27-conditionals",
      "ru-ch28-formal-register",
      "ru-ch29-aspect-nuance",
      "ru-ch30-idioms",
      "ru-ch31-advanced-argumentation",
      "ru-ch32-media-discourse",
      "ru-ch33-registers",
      "ru-ch34-literary-culture",
      "ru-ch35-professional-academic",
      "ru-ch36-pragmatic-mastery",
    ];
    for (const slug of frozenForty) {
      expect(course.getExercises(slug).length, slug).toBe(40);
    }

    // Spot-check A1/B1 totals still present (architecture freeze).
    expect(course.getExercises("ru-ch1-alphabet-greetings").length).toBeGreaterThanOrEqual(50);
    expect(course.getExercises("ru-ch22-academic-social").length).toBe(40);
  });
});
