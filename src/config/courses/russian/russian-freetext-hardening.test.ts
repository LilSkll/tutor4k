import { describe, expect, it } from "vitest";
import { getCourse } from "@/config/courses";
import { answersMatch } from "@/lib/normalize-answer";
import type { StaticExercise } from "@/types";

const A2_B1_SLUGS = [
  "ru-ch9-past-tense",
  "ru-ch10-future",
  "ru-ch11-genitive",
  "ru-ch12-dative",
  "ru-ch13-instrumental",
  "ru-ch14-aspect-intro",
  "ru-ch15-motion-basic",
  "ru-ch16-dorm-shops",
  "ru-ch17-cases-review",
  "ru-ch18-aspect-system",
  "ru-ch19-motion-prefixes",
  "ru-ch20-complex-sentences",
  "ru-ch21-narration-cohesion",
  "ru-ch22-academic-social",
] as const;

type Regression = {
  idHint: string;
  userOk: string;
  userBad: string;
};

/** High-value false-negative / false-positive pairs from the free-text audit. */
const FREE_TEXT_REGRESSIONS: Regression[] = [
  {
    idHint: "We were at the café.",
    userOk: "В кафе мы были",
    userBad: "Мы был в кафе",
  },
  {
    idHint: "In the evening I was at home. (female)",
    userOk: "Я была дома вечером",
    userBad: "Вечером я был дома",
  },
  {
    idHint: "Anna is writing to her sister.",
    userOk: "Анна пишет своей сестре",
    userBad: "Анна пишет сестру",
  },
  {
    idHint: "There is no pharmacy near the dorm.",
    userOk: "Рядом с общежитием нет аптеки",
    userBad: "Около общежития нет аптека",
  },
  {
    idHint: "The coordinator helps foreign students fill out the form.",
    userOk: "Координатор помогает иностранным студентам заполнить анкету",
    userBad: "Куратор помогает иностранным студентам заполнить анкету",
  },
  {
    idHint: "I am waiting for my colleague, not for a certificate.",
    userOk: "Я жду свою коллегу, а не справку",
    userBad: "Я жду коллега, а не справка",
  },
  {
    idHint: "I will prepare for the seminar every evening.",
    userOk: "Каждый вечер я буду готовиться к семинару",
    userBad: "Каждый вечер я подготовлюсь к семинару",
  },
  {
    idHint: "After class I will go to the dean's office. (on foot)",
    userOk: "Я пойду в деканат после пары",
    userBad: "После пары я поеду в деканат",
  },
  {
    idHint: "She left the consultation early. (on foot)",
    userOk: "Она ушла с консультации рано",
    userBad: "Она уехала с консультации рано",
  },
  {
    idHint: "I stayed in the library because there was no light in the dorm.",
    userOk: "Я осталась в библиотеке, так как в общежитии не было света",
    userBad: "Я остался в библиотеке, чтобы в общежитии не было света",
  },
  {
    idHint: "They returned the form, so I am rewriting it today.",
    userOk: "Анкету вернули, так что я переписываю ее сегодня",
    userBad: "Анкету вернули, потому что я переписываю её сегодня",
  },
  {
    idHint: "Гид не приехал, музей закрыли. Сначала экскурсию отменили.",
    userOk: "Гид не приехал, музей закрыли. В результате экскурсию отменили.",
    userBad: "Гид не приехал, музей закрыли. Наконец экскурсию отменили.",
  },
  {
    idHint: "I disagree with the grade because one step is missing in the calculation.",
    userOk: "Я не согласна с оценкой, так как в расчете пропущен один шаг",
    userBad: "Я не согласен с оценкой, чтобы в расчёте пропущен один шаг",
  },
  {
    idHint: "___, этот пример не доказывает тезис, а только иллюстрирует его.",
    userOk: "По-моему",
    userBad: "По моему",
  },
];

function acceptableList(ex: StaticExercise): string[] {
  return [ex.answer, ...(ex.acceptableAnswers ?? [])];
}

function findByQuestion(
  banks: StaticExercise[][],
  question: string,
): StaticExercise | undefined {
  for (const bank of banks) {
    const hit = bank.find((e) => e.question === question);
    if (hit) return hit;
  }
  return undefined;
}

describe("RKI A2–B1 free-text hardening", () => {
  it("reviews all free-text A2–B1 items and keeps keys non-empty", async () => {
    const course = await getCourse("russian");
    const counts = {
      fill_blank: 0,
      translation: 0,
      error_correction: 0,
      sentence_building: 0,
    };
    for (const slug of A2_B1_SLUGS) {
      for (const ex of course.getExercises(slug)) {
        if (!(ex.type in counts)) continue;
        counts[ex.type as keyof typeof counts] += 1;
        expect(ex.answer.trim().length, ex.id).toBeGreaterThan(0);
        for (const a of ex.acceptableAnswers ?? []) {
          expect(a.trim().length, `${ex.id}:${a}`).toBeGreaterThan(0);
        }
      }
    }
    expect(counts).toEqual({
      fill_blank: 112,
      translation: 112,
      error_correction: 112,
      sentence_building: 112,
    });
  });

  it("accepts justified variants and rejects near-miss incorrect forms", async () => {
    const course = await getCourse("russian");
    const banks = A2_B1_SLUGS.map((slug) => course.getExercises(slug));

    for (const row of FREE_TEXT_REGRESSIONS) {
      const ex = findByQuestion(banks, row.idHint);
      expect(ex, `missing exercise: ${row.idHint}`).toBeTruthy();
      const list = acceptableList(ex!);
      expect(
        answersMatch(row.userOk, list),
        `should accept «${row.userOk}» for ${row.idHint}`,
      ).toBe(true);
      expect(
        answersMatch(row.userBad, list),
        `should reject «${row.userBad}» for ${row.idHint}`,
      ).toBe(false);
    }
  });

  it("rejects spaced «По моему» against hyphenated opinion frame", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch22-academic-social");
    const fill = bank.find(
      (e) =>
        e.type === "fill_blank" &&
        e.question.startsWith("___, этот пример не доказывает"),
    );
    expect(fill?.answer).toBe("По-моему");
    const list = acceptableList(fill!);
    expect(answersMatch("По-моему", list)).toBe(true);
    expect(answersMatch("по-моему", list)).toBe(true);
    expect(answersMatch("По моему", list)).toBe(false);
    expect(list.some((a) => /^по моему$/i.test(a))).toBe(false);
  });

  it("does not accept куратор as coordinator translation", async () => {
    const course = await getCourse("russian");
    const bank = course.getExercises("ru-ch17-cases-review");
    const ex = bank.find((e) =>
      e.question.includes("coordinator helps foreign students"),
    );
    expect(ex).toBeTruthy();
    const list = acceptableList(ex!);
    expect(list.some((a) => /куратор/i.test(a))).toBe(false);
    expect(
      answersMatch(
        "Координатор помогает иностранным студентам заполнить анкету",
        list,
      ),
    ).toBe(true);
  });
});
