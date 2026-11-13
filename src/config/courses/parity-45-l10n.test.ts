import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import {
  getChapterSummary,
  getChapterTargetTitle,
  getChapterTitle,
} from "@/lib/chapter-display";
import { prepareExercisesForInterface } from "@/lib/exercise-localize";
import { getChapterVocabPreview } from "@/lib/chapter-vocab";
import { getWordGloss } from "@/lib/vocab-display";
import { buildEnglishPrompt } from "@/server/ai/prompts/english";
import { buildGermanPrompt } from "@/server/ai/prompts/german";
import { buildRussianPrompt } from "@/server/ai/prompts/russian";

const CYRILLIC = /[\u0400-\u04FF]/;
const UI = ["ru", "en", "es", "de"] as const;

/** Chapters added to bring each course to 45. Older banks stay untouched. */
const EXPANSION: Record<"english" | "german" | "russian", string[]> = {
  english: [
    "eng-ch26-articles",
    "eng-ch27-possessives",
    "eng-ch28-countable",
    "eng-ch29-pp-intro",
    "eng-ch30-conditionals-review",
    "eng-ch31-reported-speech",
    "eng-ch32-relative-clauses",
    "eng-ch33-passive-advanced",
    "eng-ch34-modals-deduction",
    "eng-ch35-ielts-informal",
    "eng-ch36-ielts-formal",
    "eng-ch37-cambridge-letter",
    "eng-ch38-ielts-task1",
    "eng-ch39-ielts-essay",
    "eng-ch40-ielts-cohesion",
    "eng-ch41-cambridge-essay",
    "eng-ch42-ielts-opinion",
    "eng-ch43-register-shift",
    "eng-ch44-figurative-precision",
    "eng-ch45-discourse-mastery",
  ],
  german: [
    "de-ch37-genitiv-usage",
    "de-ch38-connectors-advanced",
    "de-ch39-text-types",
    "de-ch40-stilmittel",
    "de-ch41-wissenschaftssprache",
    "de-ch42-nuancen-modal",
    "de-ch43-informationsstruktur",
    "de-ch44-literarisch-kultur",
    "de-ch45-pragmatic-mastery",
  ],
  russian: [
    "ru-ch37-classroom-survival",
    "ru-ch38-services-invitations",
    "ru-ch39-government-verbs",
    "ru-ch40-participle-preview",
    "ru-ch41-opinion-structures",
    "ru-ch42-syntax-complexity",
    "ru-ch43-written-discourse",
    "ru-ch44-critique-review",
    "ru-ch45-academic-writing",
  ],
};

describe("45-chapter expansion locale parity", () => {
  it("titles, translation drills, and vocab glosses cover every new chapter", async () => {
    for (const courseId of ["english", "german", "russian"] as const) {
      const course = await getCourse(courseId);
      expect(course.getChapters()).toHaveLength(45);

      for (const slug of EXPANSION[courseId]) {
        const chapter = course.getChapter(slug);
        expect(chapter, slug).toBeTruthy();

        for (const lang of UI) {
          const title = getChapterTitle(chapter!, lang);
          const summary = getChapterSummary(chapter!, lang);
          expect(title.trim().length, `${slug} title@${lang}`).toBeGreaterThan(0);
          expect(summary.trim().length, `${slug} summary@${lang}`).toBeGreaterThan(0);
          if (lang !== "ru") {
            expect(title, `${slug} title@${lang}`).not.toMatch(CYRILLIC);
          }
        }

        if (courseId === "russian") {
          expect(getChapterTargetTitle(chapter!, "russian"), slug).toMatch(
            CYRILLIC,
          );
        }

        const bank = course.getExercises(slug);
        for (const lang of UI) {
          const tr = prepareExercisesForInterface(bank, lang, courseId).filter(
            (exercise) => exercise.type === "translation",
          );
          expect(tr.length, `${slug} TR@${lang}`).toBeGreaterThanOrEqual(1);
          if (lang !== "ru") {
            for (const exercise of tr) {
              expect(exercise.question, `${exercise.id}@${lang}`).not.toMatch(
                CYRILLIC,
              );
            }
          }
        }

        const preview = await getChapterVocabPreview(
          courseId,
          slug,
          chapter!.vocabTopic,
          "en",
        );
        expect(preview.words.length, `${slug} vocab`).toBeGreaterThan(0);
        for (const word of preview.words) {
          for (const lang of ["en", "es", "de"] as const) {
            expect(
              getWordGloss(word, lang, courseId).trim().length,
              `${slug} ${word.word}@${lang}`,
            ).toBeGreaterThan(0);
          }
        }
      }
    }
  }, 120_000);

  it("keeps a C2 level line in tutor prompts for courses that teach C2", () => {
    const c2 = "C2" as const;
    expect(buildEnglishPrompt({ level: c2, interfaceLanguage: "en" })).toMatch(
      /C2: figurative precision/,
    );
    expect(buildRussianPrompt({ level: c2, interfaceLanguage: "en" })).toMatch(
      /C2: один факт/,
    );
    expect(buildGermanPrompt({ level: c2, interfaceLanguage: "en" })).toMatch(
      /C2: modal-verb nuance/,
    );
  });

  it("spot-checks Spanish chapter titles in en/es/de", async () => {
    const course = await getCourse("spanish");
    const chapters = course.getChapters();
    expect(chapters.length).toBe(45);
    for (const chapter of chapters) {
      for (const lang of ["en", "es", "de"] as const) {
        const title = getChapterTitle(chapter, lang);
        expect(title.trim().length, `${chapter.slug}@${lang}`).toBeGreaterThan(0);
        expect(title, `${chapter.slug}@${lang}`).not.toMatch(CYRILLIC);
      }
    }
  });
});
