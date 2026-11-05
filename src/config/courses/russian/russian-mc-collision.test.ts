import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { answersMatch, normalizeAnswer } from "@/lib/normalize-answer";

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

const HOTFIX_IDS = [
  "russian:ru-ch3-noun-gender:multiple_choice:02",
  "russian:ru-ch3-noun-gender:multiple_choice:08",
  "russian:ru-ch3-noun-gender:multiple_choice:11",
  "russian:ru-ch6-university-day:multiple_choice:14",
  "russian:ru-ch7-prepositional:multiple_choice:04",
] as const;

describe("Russian A1 MC — no ambiguous answers after normalization", () => {
  it("has exactly one option matching the answer for every A1 MC item", async () => {
    const ru = await getCourse("russian");
    const collisions: string[] = [];

    for (const slug of A1_SLUGS) {
      for (const ex of ru.getExercises(slug)) {
        if (ex.type !== "multiple_choice" || !ex.options?.length) continue;
        const hits = ex.options.filter((o) => answersMatch(o, [ex.answer]));
        if (hits.length !== 1) {
          collisions.push(
            `${ex.id} hits=${hits.length} answer=${JSON.stringify(ex.answer)} opts=${JSON.stringify(ex.options)} norms=${JSON.stringify(ex.options.map(normalizeAnswer))}`,
          );
        }
      }
    }

    expect(collisions, collisions.join("\n")).toEqual([]);
  });

  it("keeps previously failing hotfix items unambiguous", async () => {
    const ru = await getCourse("russian");
    const byId = new Map(
      A1_SLUGS.flatMap((slug) => ru.getExercises(slug)).map((ex) => [ex.id, ex]),
    );

    for (const id of HOTFIX_IDS) {
      const ex = byId.get(id);
      expect(ex, id).toBeTruthy();
      const hits = (ex!.options ?? []).filter((o) =>
        answersMatch(o, [ex!.answer]),
      );
      expect(hits, id).toHaveLength(1);
    }

    // Explicit letter-identity checks on the gender items.
    expect(
      answersMatch("Мой", ["Моя", "Моё", "Мои"]),
    ).toBe(false);
    expect(answersMatch("мой", ["мои"])).toBe(false);
    expect(answersMatch("аудитории", ["аудиторий"])).toBe(false);
  });
});
