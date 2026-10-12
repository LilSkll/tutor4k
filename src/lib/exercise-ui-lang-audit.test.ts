import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { attachQuestionGlossesToMany } from "@/lib/exercise-gloss-attach";
import {
  detectPromptSourceLang,
  hasCyrillicText,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import type { InterfaceLanguage, StaticExercise } from "@/types";

const UI_LANGS: InterfaceLanguage[] = ["ru", "en", "es", "de"];
const CYRILLIC = /[\u0400-\u04FF]/;

async function sampleBank(
  courseId: "spanish" | "english",
  chapterLimit = 25,
): Promise<StaticExercise[]> {
  const course = await getCourse(courseId);
  const out: StaticExercise[] = [];
  for (const ch of course.getChapters().slice(0, chapterLimit)) {
    out.push(...course.getExercises(ch.slug));
  }
  return attachQuestionGlossesToMany(out);
}

describe("UI × course language audit (no client-scaring leaks)", () => {
  it("Spanish course: non-TR stay on target; TR L1 matches UI rules", async () => {
    const bank = await sampleBank("spanish", 25);
    expect(bank.length).toBeGreaterThan(50);

    for (const lang of UI_LANGS) {
      const prepared = prepareExercisesForInterface(bank, lang, "spanish");
      expect(prepared.length, `spanish×${lang} empty`).toBeGreaterThan(0);

      for (const ex of prepared) {
        if (ex.type !== "translation") {
          if (lang !== "ru") {
            expect(ex.question, `${ex.id} non-TR Q`).not.toMatch(CYRILLIC);
          }
          if (lang !== "ru") {
            expect(ex.instruction ?? "", `${ex.id} instruction`).not.toMatch(
              CYRILLIC,
            );
          }
          continue;
        }

        if (lang === "ru") {
          expect(ex.question, `${ex.id} TR RU`).toMatch(CYRILLIC);
          continue;
        }

        expect(ex.question, `${ex.id} TR ${lang}`).not.toMatch(CYRILLIC);
        const source = detectPromptSourceLang(ex.question);

        if (lang === "en") {
          // Must be English L1 — never leftover Russian; Spanish target as L1 is wrong.
          expect(source, `${ex.id} EN L1 got ${source}: ${ex.question}`).toBe(
            "en",
          );
        }
        if (lang === "es") {
          // ES L1, or EN/DE spoiler fallback when ES == answer.
          expect(
            source === "es" || source === "en" || source === "de",
            `${ex.id} ES UI source=${source}: ${ex.question}`,
          ).toBe(true);
          expect(
            ex.question.trim().toLowerCase() ===
              (ex.answer ?? "").trim().toLowerCase(),
            `${ex.id} spoiler`,
          ).toBe(false);
        }
        if (lang === "de") {
          expect(
            source === "de" || source === "en",
            `${ex.id} DE UI source=${source}: ${ex.question}`,
          ).toBe(true);
        }
      }
    }
  }, 60_000);

  it("English course: never foreign L1 on EN UI; ES/DE UI get matching L1", async () => {
    const bank = await sampleBank("english", 25);
    expect(bank.length).toBeGreaterThan(50);

    for (const lang of UI_LANGS) {
      const prepared = prepareExercisesForInterface(bank, lang, "english");
      expect(prepared.length, `english×${lang} empty`).toBeGreaterThan(0);

      for (const ex of prepared) {
        if (ex.type !== "translation") {
          expect(ex.question, `${ex.id} non-TR`).not.toMatch(CYRILLIC);
          if (lang !== "ru") {
            expect(ex.instruction ?? "", `${ex.id} instr`).not.toMatch(CYRILLIC);
          }
          continue;
        }

        if (lang === "ru") {
          expect(ex.question).toMatch(CYRILLIC);
          continue;
        }

        expect(hasCyrillicText(ex.question), `${ex.id} Cyrillic`).toBe(false);
        const source = detectPromptSourceLang(ex.question);

        // Critical client-facing leaks
        if (lang === "en") {
          expect(
            source,
            `${ex.id} EN UI foreign L1=${source}: ${ex.question}`,
          ).toBe("en");
        }
        if (lang === "es") {
          expect(source, `${ex.id} ES got RU`).not.toBe("ru");
          expect(source, `${ex.id} ES got DE`).not.toBe("de");
          // Prefer Spanish; EN only if somehow spoiler-fallback (shouldn't on EN course)
          expect(
            source === "es" || source === "en",
            `${ex.id} ES L1=${source}: ${ex.question}`,
          ).toBe(true);
        }
        if (lang === "de") {
          expect(source, `${ex.id} DE got RU`).not.toBe("ru");
          expect(source, `${ex.id} DE got ES`).not.toBe("es");
          expect(
            source === "de" || source === "en",
            `${ex.id} DE L1=${source}: ${ex.question}`,
          ).toBe(true);
        }
      }
    }
  }, 60_000);

  it("does not keep Spanish/German instructions on EN UI", async () => {
    const { localizeExerciseInstruction } = await import(
      "@/lib/exercise-localize"
    );
    const esInstr = localizeExerciseInstruction(
      {
        type: "fill_blank",
        question: "I ___ home",
        answer: "go",
        instruction: "Elige la forma correcta del verbo",
      },
      "en",
    );
    expect(detectPromptSourceLang(esInstr)).toBe("en");
    expect(esInstr).not.toMatch(/Elige|forma correcta/i);

    const deInstr = localizeExerciseInstruction(
      {
        type: "fill_blank",
        question: "I ___ home",
        answer: "go",
        instruction: "Setze das Verb in die richtige Form",
      },
      "en",
    );
    expect(detectPromptSourceLang(deInstr)).toBe("en");
    expect(deInstr).not.toMatch(/Setze|richtige/i);
  });
});
