import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { answersMatch, answersMatchFlexible } from "@/lib/normalize-answer";
import { RUSSIAN_EXERCISES } from "@/config/courses/russian/exercises";
import { RUSSIAN_TR_L1 } from "@/config/courses/russian/translation-l1";

/** Collect translation stems and count TR items per chapter (IDs depend on stable order). */
function russianTranslationSnapshot() {
  const stems = new Set<string>();
  const perChapter: Record<string, number> = {};
  let total = 0;
  for (const [slug, drafts] of Object.entries(RUSSIAN_EXERCISES)) {
    let n = 0;
    for (const ex of drafts) {
      if (ex.type !== "translation") continue;
      total++;
      n++;
      stems.add(ex.question.trim());
    }
    perChapter[slug] = n;
  }
  return { total, stems, perChapter };
}

describe("Russian translation acceptableAnswers + TR L1 cache", () => {
  it("matches every English TR stem to RUSSIAN_TR_L1 and keeps pool size stable", () => {
    const { total, stems } = russianTranslationSnapshot();
    expect(total).toBe(396);
    expect(stems.size).toBe(393);

    const cacheKeys = new Set(Object.keys(RUSSIAN_TR_L1));
    expect(cacheKeys.size).toBe(393);

    for (const stem of stems) {
      expect(RUSSIAN_TR_L1[stem], `missing L1 for: ${stem}`).toBeTruthy();
    }
    for (const key of cacheKeys) {
      expect(stems.has(key), `stale L1 key: ${key}`).toBe(true);
    }
  });

  it("keeps per-chapter translation counts unchanged", () => {
    const { perChapter } = russianTranslationSnapshot();
    const expected: Record<string, number> = {
      "ru-ch1-alphabet-greetings": 12,
      "ru-ch2-introduce-yourself": 12,
      "ru-ch3-noun-gender": 12,
      "ru-ch4-present-tense": 20,
      "ru-ch5-accusative": 20,
      "ru-ch6-university-day": 20,
      "ru-ch7-prepositional": 20,
      "ru-ch8-numbers-time": 20,
      "ru-ch9-past-tense": 8,
      "ru-ch10-future": 8,
      "ru-ch11-genitive": 8,
      "ru-ch12-dative": 8,
      "ru-ch13-instrumental": 8,
      "ru-ch14-aspect-intro": 8,
      "ru-ch15-motion-basic": 8,
      "ru-ch16-dorm-shops": 8,
      "ru-ch17-cases-review": 8,
      "ru-ch18-aspect-system": 8,
      "ru-ch19-motion-prefixes": 8,
      "ru-ch20-complex-sentences": 8,
      "ru-ch21-narration-cohesion": 8,
      "ru-ch22-academic-social": 8,
      "ru-ch23-participles": 8,
      "ru-ch24-gerunds": 8,
      "ru-ch25-passive": 8,
      "ru-ch26-reported-speech": 8,
      "ru-ch27-conditionals": 8,
      "ru-ch28-formal-register": 8,
      "ru-ch29-aspect-nuance": 8,
      "ru-ch30-idioms": 8,
      "ru-ch31-advanced-argumentation": 8,
      "ru-ch32-media-discourse": 8,
      "ru-ch33-registers": 8,
      "ru-ch34-literary-culture": 8,
      "ru-ch35-professional-academic": 8,
      "ru-ch36-pragmatic-mastery": 8,
      "ru-ch37-classroom-survival": 4,
      "ru-ch38-services-invitations": 4,
      "ru-ch39-government-verbs": 4,
      "ru-ch40-participle-preview": 4,
      "ru-ch41-opinion-structures": 4,
      "ru-ch42-syntax-complexity": 4,
      "ru-ch43-written-discourse": 4,
      "ru-ch44-critique-review": 4,
      "ru-ch45-academic-writing": 4,
    };
    expect(perChapter).toEqual(expected);
  });

  it("accepts natural variants (flexible) for sample TR items", async () => {
    const course = await getCourse("russian");
    const findTr = (stem: string) => {
      for (const ch of course.getChapters()) {
        const hit = course
          .getExercises(ch.slug)
          .find((e) => e.type === "translation" && e.question === stem);
        if (hit) return hit;
      }
      throw new Error(`TR not found: ${stem}`);
    };

    const goodbye = findTr("Goodbye");
    const altsG = [goodbye.answer, ...(goodbye.acceptableAnswers ?? [])];
    expect(answersMatchFlexible("до свидания", altsG)).toBe(true);
    expect(answersMatchFlexible("Пока", altsG)).toBe(true);

    const friend = findTr("Bye (to a friend)");
    const altsF = [friend.answer, ...(friend.acceptableAnswers ?? [])];
    expect(answersMatchFlexible("пока", altsF)).toBe(true);
    expect(answersMatch("до свидания", altsF)).toBe(false);

    const dorm = findTr("We live in a dormitory.");
    const altsD = [dorm.answer, ...(dorm.acceptableAnswers ?? [])];
    expect(answersMatchFlexible("Живем в общежитии", altsD)).toBe(true);

    const leit = findTr(
      "The road returns in the wheels, on the platform, and in the steps: it is a leitmotif.",
    );
    const altsL = [leit.answer, ...(leit.acceptableAnswers ?? [])];
    expect(
      answersMatchFlexible(
        "Дорога возвращается в шуме колес на перроне и в шагах: это лейтмотив",
        altsL,
      ),
    ).toBe(true);
  });

  it("rejects clearly wrong translations for canonical stems", async () => {
    const course = await getCourse("russian");
    const goodbye = course
      .getExercises("ru-ch1-alphabet-greetings")
      .find((e) => e.type === "translation" && e.question === "Goodbye")!;
    const alts = [goodbye.answer, ...(goodbye.acceptableAnswers ?? [])];
    expect(answersMatchFlexible("здравствуйте", alts)).toBe(false);

    const kuda = course
      .getExercises("ru-ch15-motion-basic")
      .find(
        (e) =>
          e.type === "translation" &&
          e.question === "Where are you going? (informal, on foot, now)",
      )!;
    const altsK = [kuda.answer, ...(kuda.acceptableAnswers ?? [])];
    expect(answersMatchFlexible("Где ты?", altsK)).toBe(false);
  });

  it("accepts and rejects B2/C1 translation variants added for natural alternates", async () => {
    const course = await getCourse("russian");

    const illness = course
      .getExercises("ru-ch28-formal-register")
      .find(
        (e) =>
          e.type === "translation" &&
          e.question ===
            "Due to illness I request permission to miss the practical class on 12 November.",
      )!;
    const altsIllness = [illness.answer, ...(illness.acceptableAnswers ?? [])];
    expect(
      answersMatchFlexible(
        "Поскольку я болею, прошу разрешить мне пропустить практику 12 ноября",
        altsIllness,
      ),
    ).toBe(true);
    expect(
      answersMatchFlexible(
        "Я здоров, прошу разрешить мне пропустить практику 12 ноября",
        altsIllness,
      ),
    ).toBe(false);

    const thesisHonesty = course
      .getExercises("ru-ch31-advanced-argumentation")
      .find(
        (e) =>
          e.type === "translation" &&
          e.question ===
            "It appears that a narrow thesis is more honest here than a broad one.",
      )!;
    const altsThesis = [thesisHonesty.answer, ...(thesisHonesty.acceptableAnswers ?? [])];
    expect(
      answersMatchFlexible(
        "Представляется, что здесь узкий тезис честнее широкого",
        altsThesis,
      ),
    ).toBe(true);
    expect(
      answersMatchFlexible(
        "Представляется, что здесь широкий тезис честнее узкого",
        altsThesis,
      ),
    ).toBe(false);
  });
});
