import { describe, expect, it } from "vitest";
import { getAvailableCourseIds, getCourse } from "@/config/courses";
import {
  getTranslationSourceLabel,
  hasCyrillicText,
  isExerciseUsableForLanguage,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import { STUDENT_DICTS } from "@/lib/i18n/student-dicts";
import {
  getVocabTopicAltairSrc,
  VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE,
} from "@/lib/vocab-altair";
import { resolveCourseTopicLabel } from "@/lib/course-topic-label";
import type { InterfaceLanguage } from "@/types";

const UI: InterfaceLanguage[] = ["ru", "en", "es", "de"];

describe("platform localization × translation × vocabulary audit", () => {
  it("keeps dialogue placeholders topic-parameterized with no Spanish me gusta leakage", () => {
    for (const lang of UI) {
      const tmpl = STUDENT_DICTS[lang]["lesson.dialoguePlaceholder"];
      expect(tmpl, lang).toContain("{topic}");
      expect(tmpl.toLowerCase(), lang).not.toMatch(/me gusta/);
      expect(tmpl.toLowerCase(), lang).not.toMatch(/me gustan/);
    }
  });

  it("resolves Altair paths only from the known asset set for any course vocab slug", async () => {
    for (const courseId of getAvailableCourseIds()) {
      const pack = VOCAB_TOPIC_ALTAIR_ASSETS_BY_COURSE[courseId] ?? [];
      const allowed = new Set(pack);
      expect(allowed.size, courseId).toBeGreaterThan(5);
      const course = await getCourse(courseId);
      for (const topic of course.getVocab()) {
        const src = getVocabTopicAltairSrc(topic.slug, courseId);
        expect(allowed.has(src), `${courseId}/${topic.slug} → ${src}`).toBe(true);
        expect(src).toMatch(/^\/altair\//);
      }
    }
  });

  it("Russian course × all UI locales: TR L1 never equals Russian answer; instructions match UI", async () => {
    const course = await getCourse("russian");
    const chapters = course.getChapters();
    expect(chapters).toHaveLength(45);

    for (const lang of UI) {
      let usableTr = 0;
      for (const ch of chapters) {
        const bank = course.getExercises(ch.slug).filter((e) => e.type === "translation");
        const prepared = prepareExercisesForInterface(bank, lang, "russian");
        usableTr += prepared.length;
        for (const ex of prepared) {
          expect(hasCyrillicText(ex.answer), ex.id).toBe(true);
          expect(hasCyrillicText(ex.question), `${ex.id}@${lang} Cyrillic L1`).toBe(
            false,
          );
          if (lang === "ru") {
            expect(ex.instruction).toMatch(/Переведите|переведите/i);
          } else if (lang === "en") {
            expect(ex.instruction).not.toMatch(/Переведите/);
          } else if (lang === "es") {
            expect(ex.instruction).toMatch(/Traduce|traduce/i);
            expect(ex.question).not.toMatch(
              /^(Bye|Hello|Goodbye|Hi|Thank you|Please|How are you)\b/i,
            );
          } else if (lang === "de") {
            expect(ex.instruction).toMatch(/Übersetz|übersetz/i);
            expect(ex.question).not.toMatch(
              /^(Bye|Hello|Goodbye|Hi|Thank you|Please|How are you)\b/i,
            );
          }
        }
      }
      expect(usableTr, `russian@${lang}`).toBeGreaterThan(200);
    }
  });

  it("every available course × UI locale: bank TR items are filtered before show; prepared prompts are not Cyrillic target leaks", async () => {
    for (const courseId of getAvailableCourseIds()) {
      const course = await getCourse(courseId);
      for (const lang of UI) {
        for (const ch of course.getChapters().slice(0, 3)) {
          const bank = course.getExercises(ch.slug);
          const trBank = bank.filter((e) => e.type === "translation");
          const prepared = prepareExercisesForInterface(bank, lang, courseId).filter(
            (e) => e.type === "translation",
          );
          // Every prepared TR was usable against the original bank stem.
          const usableCount = trBank.filter((e) =>
            isExerciseUsableForLanguage(e, lang, courseId),
          ).length;
          expect(prepared.length, `${courseId}/${ch.slug}@${lang}`).toBe(usableCount);

          for (const ex of prepared) {
            // Target-language answers must not appear as the L1 prompt for TR.
            if (courseId === "russian") {
              expect(hasCyrillicText(ex.question), ex.id).toBe(false);
            }
            if (courseId === "english" && lang === "en") {
              expect(getTranslationSourceLabel(ex, lang, courseId)).toBeNull();
            }
          }
        }
      }
    }
  });

  it("chapter grammar topic labels never inject Spanish gustar into Russian course", async () => {
    const course = await getCourse("russian");
    for (const ch of course.getChapters()) {
      for (const lang of UI) {
        const label =
          resolveCourseTopicLabel(ch.grammarTopic, course, lang, "russian") ?? "";
        expect(label.toLowerCase()).not.toMatch(/me gusta/);
        expect(label.toLowerCase()).not.toMatch(/me gustan/);
      }
    }
  });
});
