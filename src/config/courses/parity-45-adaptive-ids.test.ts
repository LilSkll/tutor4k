import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";

/**
 * Pin first adaptive ids for pre-expansion chapters.
 * IDs are `{course}:{chapterSlug}:{type}:{nn}` and must not shift when
 * new chapters or reading items are appended after the bank.
 */
const PINNED: Array<{
  courseId: string;
  slug: string;
  /** First few ids that must remain stable for student history. */
  firstIds: string[];
}> = [
  // Spanish — never expanded in the 45-parity pass
  {
    courseId: "spanish",
    slug: "chapter-1-despertar",
    firstIds: [
      "spanish:chapter-1-despertar:multiple_choice:01",
    ],
  },
  // English — chapters before eng-ch44
  {
    courseId: "english",
    slug: "eng-ch1-first-steps",
    firstIds: ["english:eng-ch1-first-steps:multiple_choice:01"],
  },
  {
    courseId: "english",
    slug: "eng-ch25-between-lines",
    firstIds: ["english:eng-ch25-between-lines:multiple_choice:01"],
  },
  // Russian — original A1 + frozen B2–C2 slugs
  {
    courseId: "russian",
    slug: "ru-ch1-alphabet-greetings",
    firstIds: ["russian:ru-ch1-alphabet-greetings:multiple_choice:01"],
  },
  {
    courseId: "russian",
    slug: "ru-ch23-participles",
    firstIds: ["russian:ru-ch23-participles:multiple_choice:01"],
  },
  {
    courseId: "russian",
    slug: "ru-ch36-pragmatic-mastery",
    firstIds: ["russian:ru-ch36-pragmatic-mastery:multiple_choice:01"],
  },
  // German — original A1–C1 slugs (de-ch1…36)
  {
    courseId: "german",
    slug: "de-ch1-alphabet-greetings",
    firstIds: ["german:de-ch1-alphabet-greetings:multiple_choice:01"],
  },
  {
    courseId: "german",
    slug: "de-ch26-verb-prep",
    firstIds: ["german:de-ch26-verb-prep:multiple_choice:01"],
  },
  {
    courseId: "german",
    slug: "de-ch36-text-pragmatics",
    firstIds: ["german:de-ch36-text-pragmatics:multiple_choice:01"],
  },
];

const FROZEN_RU_B2_C2 = Array.from(
  { length: 14 },
  (_, i) => 23 + i,
);

describe("45-parity adaptive id stability", () => {
  it("keeps first bank ids stable on pre-expansion chapters", async () => {
    for (const row of PINNED) {
      const course = await getCourse(row.courseId);
      const bank = course.getExercises(row.slug);
      expect(bank.length, row.slug).toBeGreaterThan(0);
      for (const id of row.firstIds) {
        expect(
          bank.some((e) => e.id === id),
          `${row.slug} missing ${id}`,
        ).toBe(true);
      }
      // Reading (if any) is appended — first MC must still be :01
      const firstMc = bank.find((e) => e.type === "multiple_choice");
      expect(firstMc?.id).toBe(
        `${row.courseId}:${row.slug}:multiple_choice:01`,
      );
    }
  });

  it("keeps frozen Russian B2–C2 banks at exactly 40 with stable type:01 ids", async () => {
    const course = await getCourse("russian");
    for (const n of FROZEN_RU_B2_C2) {
      const ch = course
        .getChapters()
        .find((c) => c.slug.startsWith(`ru-ch${n}-`));
      expect(ch, `ru-ch${n}-*`).toBeTruthy();
      const bank = course.getExercises(ch!.slug);
      expect(bank.length, ch!.slug).toBe(40);
      for (const type of [
        "multiple_choice",
        "fill_blank",
        "translation",
        "error_correction",
        "sentence_building",
      ] as const) {
        expect(
          bank.some((e) => e.id === `russian:${ch!.slug}:${type}:01`),
          `${ch!.slug} ${type}:01`,
        ).toBe(true);
      }
    }
  });

  it("does not reuse old chapter slugs for expansion chapters", async () => {
    const expansionSlugs = new Set([
      "eng-ch44-figurative-precision",
      "eng-ch45-discourse-mastery",
      "ru-ch37-classroom-survival",
      "ru-ch38-services-invitations",
      "ru-ch39-government-verbs",
      "ru-ch40-participle-preview",
      "ru-ch41-opinion-structures",
      "ru-ch42-syntax-complexity",
      "ru-ch43-written-discourse",
      "ru-ch44-critique-review",
      "ru-ch45-academic-writing",
      "de-ch37-genitiv-usage",
      "de-ch38-connectors-advanced",
      "de-ch39-text-types",
      "de-ch40-stilmittel",
      "de-ch41-wissenschaftssprache",
      "de-ch42-nuancen-modal",
      "de-ch43-informationsstruktur",
      "de-ch44-literarisch-kultur",
      "de-ch45-pragmatic-mastery",
    ]);
    for (const courseId of ["english", "russian", "german"] as const) {
      const course = await getCourse(courseId);
      const slugs = course.getChapters().map((c) => c.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
      for (const slug of expansionSlugs) {
        if (!slug.startsWith(courseId === "english" ? "eng-" : courseId === "russian" ? "ru-" : "de-")) {
          continue;
        }
        expect(slugs).toContain(slug);
        const bank = course.getExercises(slug);
        expect(bank.every((e) => e.id.startsWith(`${courseId}:${slug}:`))).toBe(
          true,
        );
      }
    }
  });
});
