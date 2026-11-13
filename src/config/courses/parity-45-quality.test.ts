import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { normalizeStem } from "@/config/exercise-banks/helpers";

/**
 * 45-chapter expansion banks (English 44–45, Russian 37–45, German 37–45).
 * German chapter 42 is stored as de-ch42-nuancen-modal.
 */
const EXPANSION = [
  { courseId: "english", slug: "eng-ch44-figurative-precision", level: "C2" },
  { courseId: "english", slug: "eng-ch45-discourse-mastery", level: "C2" },
  { courseId: "russian", slug: "ru-ch37-classroom-survival", level: "A1" },
  { courseId: "russian", slug: "ru-ch38-services-invitations", level: "A2" },
  { courseId: "russian", slug: "ru-ch39-government-verbs", level: "B1" },
  { courseId: "russian", slug: "ru-ch40-participle-preview", level: "B1" },
  { courseId: "russian", slug: "ru-ch41-opinion-structures", level: "B1" },
  { courseId: "russian", slug: "ru-ch42-syntax-complexity", level: "B2" },
  { courseId: "russian", slug: "ru-ch43-written-discourse", level: "B2" },
  { courseId: "russian", slug: "ru-ch44-critique-review", level: "C1" },
  { courseId: "russian", slug: "ru-ch45-academic-writing", level: "C1" },
  { courseId: "german", slug: "de-ch37-genitiv-usage", level: "B1" },
  { courseId: "german", slug: "de-ch38-connectors-advanced", level: "B2" },
  { courseId: "german", slug: "de-ch39-text-types", level: "B2" },
  { courseId: "german", slug: "de-ch40-stilmittel", level: "C1" },
  { courseId: "german", slug: "de-ch41-wissenschaftssprache", level: "C1" },
  { courseId: "german", slug: "de-ch42-nuancen-modal", level: "C2" },
  { courseId: "german", slug: "de-ch43-informationsstruktur", level: "C2" },
  { courseId: "german", slug: "de-ch44-literarisch-kultur", level: "C2" },
  { courseId: "german", slug: "de-ch45-pragmatic-mastery", level: "C2" },
] as const;

const TYPES = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
] as const;

function tokens(stem: string): Set<string> {
  return new Set(stem.split(" ").filter((token) => token.length > 1));
}

/** True when two normalized stems are the same task with trivial wording drift. */
function nearDuplicate(a: string, b: string): boolean {
  if (a === b) return true;
  const left = tokens(a);
  const right = tokens(b);
  if (left.size === 0 || right.size === 0) return false;
  let shared = 0;
  for (const token of left) if (right.has(token)) shared += 1;
  const union = left.size + right.size - shared;
  return shared / union >= 0.82;
}

function distinctStems(questions: string[]): string[] {
  const kept: string[] = [];
  for (const stem of questions.map(normalizeStem).filter(Boolean)) {
    if (kept.some((existing) => nearDuplicate(existing, stem))) continue;
    kept.push(stem);
  }
  return kept;
}

describe("45-parity expansion quality", () => {
  it("keeps each new chapter at the claimed level with a real bank", async () => {
    const courses = new Map<string, Awaited<ReturnType<typeof getCourse>>>();
    for (const row of EXPANSION) {
      if (!courses.has(row.courseId)) {
        courses.set(row.courseId, await getCourse(row.courseId));
      }
      const course = courses.get(row.courseId)!;
      const chapter = course.getChapter(row.slug);
      expect(chapter, row.slug).toBeTruthy();
      expect(chapter!.level, row.slug).toBe(row.level);

      const grammar = course.getGrammarTopic(chapter!.grammarTopic);
      expect(grammar, `${row.slug} grammar ${chapter!.grammarTopic}`).toBeTruthy();
      expect(grammar!.level, row.slug).toBe(row.level);

      const vocab = course.getVocab().find((topic) => topic.slug === chapter!.vocabTopic);
      expect(vocab, `${row.slug} vocab ${chapter!.vocabTopic}`).toBeTruthy();
      expect(vocab!.words.length, row.slug).toBeGreaterThanOrEqual(12);
      expect(vocab!.level, row.slug).toBe(row.level);

      const exercises = course.getExercises(row.slug);
      expect(exercises.length, row.slug).toBeGreaterThanOrEqual(20);
      const types = new Set(exercises.map((exercise) => exercise.type));
      for (const type of TYPES) {
        expect(types.has(type), `${row.slug} missing ${type}`).toBe(true);
      }
      for (const exercise of exercises) {
        expect(exercise.grammarTopic, exercise.id).toBe(chapter!.grammarTopic);
      }
      const stems = distinctStems(exercises.map((exercise) => exercise.question));
      expect(stems.length, row.slug).toBeGreaterThanOrEqual(3);
    }
  });
});
