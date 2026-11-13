import { describe, expect, it } from "vitest";
import {
  getTranslationSourceLabel,
  isExerciseUsableForLanguage,
  localizeTranslationQuestion,
  prepareExercisesForInterface,
} from "@/lib/exercise-localize";
import type { StaticExercise } from "@/types";

const sample: StaticExercise = {
  id: "test:1",
  type: "translation",
  question: "Я студент.",
  answer: "Soy estudiante",
  instruction: "Переведите",
  explanation: "ser",
};

describe("translation localization", () => {
  it("keeps RU prompts for Russian UI", () => {
    expect(isExerciseUsableForLanguage(sample, "ru")).toBe(true);
    expect(localizeTranslationQuestion(sample, "ru")).toBe("Я студент.");
  });

  it("localizes prompts for EN/DE/ES on A1-A2 bank items", () => {
    for (const lang of ["en", "de", "es"] as const) {
      expect(isExerciseUsableForLanguage(sample, lang, "spanish")).toBe(true);
      const q = localizeTranslationQuestion(sample, lang, "spanish");
      // Spanish-course ES UI uses English L1 when Spanish would equal the answer.
      expect(q).not.toMatch(/[\u0400-\u04FF]/);
      expect(q.length).toBeGreaterThan(3);
    }
  });

  it("prepareExercisesForInterface swaps translation question", () => {
    const [ex] = prepareExercisesForInterface([sample], "en", "spanish");
    expect(ex.question).toBe("I am a student.");
  });

  it("does not inject Spanish into English-course TR for EN UI", () => {
    const enCourse: StaticExercise = {
      ...sample,
      answer: "I am a student",
      questionTranslations: { es: "Soy estudiante" },
    };
    expect(isExerciseUsableForLanguage(enCourse, "en", "english")).toBe(false);
    expect(
      prepareExercisesForInterface([enCourse], "en", "english"),
    ).toHaveLength(0);
  });

  it("filters already-Spanish TR stems on English course + EN UI", () => {
    const spanishStem: StaticExercise = {
      ...sample,
      id: "es-stem",
      question: "La calabaza junto a la puerta es grande.",
      answer: "The pumpkin by the door is big",
      questionTranslations: { es: "La calabaza junto a la puerta es grande." },
    };
    expect(isExerciseUsableForLanguage(spanishStem, "en", "english")).toBe(
      false,
    );
    expect(
      prepareExercisesForInterface([spanishStem], "en", "english"),
    ).toHaveLength(0);
  });

  it("uses Spanish L1 for English-course TR when UI is Spanish", () => {
    const enCourse: StaticExercise = {
      ...sample,
      answer: "I am a student",
      questionTranslations: { es: "Soy estudiante" },
    };
    expect(isExerciseUsableForLanguage(enCourse, "es", "english")).toBe(true);
    const kept = localizeTranslationQuestion(enCourse, "es", "english");
    expect(kept).toBe("Soy estudiante");
  });

  it("keeps non-TR questions in the course target language across UI langs", () => {
    const fill: StaticExercise = {
      id: "fb1",
      type: "fill_blank",
      question: "She ___ to school every day.",
      answer: "goes",
      instruction: "Present simple",
      explanation: "3rd person -s",
    };
    for (const lang of ["ru", "en", "es", "de"] as const) {
      const [ex] = prepareExercisesForInterface([fill], lang, "english");
      // Question stays English (course target); only instruction follows UI.
      expect(ex.question).toBe("She ___ to school every day.");
    }
    expect(
      prepareExercisesForInterface([fill], "ru", "english")[0]!.instruction,
    ).toMatch(/[\u0400-\u04FF]/);
    expect(
      prepareExercisesForInterface([fill], "en", "english")[0]!.instruction,
    ).not.toMatch(/[\u0400-\u04FF]/);
  });

  it("swaps Cyrillic-authored German MC stems for non-RU UI via questionTranslations", () => {
    const mc: StaticExercise = {
      id: "de-mc1",
      type: "multiple_choice",
      question: "Какой знак читается как ss?",
      options: ["ä", "ö", "ü", "ß"],
      answer: "ß",
      instruction: "Выберите правильный вариант",
      explanation: "ß = ss",
      questionTranslations: {
        en: "Which character sounds like ss?",
        es: "¿Qué signo suena como ss?",
        de: "Welches Zeichen klingt wie ss?",
      },
    };
    expect(isExerciseUsableForLanguage(mc, "ru", "german")).toBe(true);
    expect(isExerciseUsableForLanguage(mc, "en", "german")).toBe(true);
    expect(prepareExercisesForInterface([mc], "ru", "german")[0]!.question).toBe(
      "Какой знак читается как ss?",
    );
    expect(prepareExercisesForInterface([mc], "en", "german")[0]!.question).toBe(
      "Which character sounds like ss?",
    );
    const noMap: StaticExercise = {
      ...mc,
      id: "de-mc-bare",
      questionTranslations: undefined,
    };
    expect(isExerciseUsableForLanguage(noMap, "en", "german")).toBe(false);
  });

  it("matrix: TR L1 follows UI; never third language on English×EN", () => {
    const spanishTr = sample;
    const englishTr: StaticExercise = {
      ...sample,
      id: "en-tr",
      answer: "I am a student",
      questionTranslations: {
        es: "Soy estudiante",
        de: "Ich bin Student.",
      },
    };

    // Spanish course
    expect(localizeTranslationQuestion(spanishTr, "ru", "spanish")).toMatch(
      /[\u0400-\u04FF]/,
    );
    expect(localizeTranslationQuestion(spanishTr, "en", "spanish")).toBe(
      "I am a student.",
    );
    expect(
      localizeTranslationQuestion(spanishTr, "es", "spanish"),
    ).not.toMatch(/[\u0400-\u04FF]/);
    expect(
      localizeTranslationQuestion(spanishTr, "de", "spanish"),
    ).not.toMatch(/[\u0400-\u04FF]/);

    // English course
    expect(localizeTranslationQuestion(englishTr, "ru", "english")).toMatch(
      /[\u0400-\u04FF]/,
    );
    expect(isExerciseUsableForLanguage(englishTr, "en", "english")).toBe(false);
    expect(localizeTranslationQuestion(englishTr, "es", "english")).toBe(
      "Soy estudiante",
    );
    expect(localizeTranslationQuestion(englishTr, "de", "english")).toBe(
      "Ich bin Student.",
    );
  });

  it("localizes English L1 TR stems for Russian course on ES/DE UI", () => {
    const ruTr: StaticExercise = {
      id: "ru-tr-en",
      type: "translation",
      question: "Bye (to a friend)",
      answer: "Пока",
      instruction: "Переведите на русский",
      explanation: "Пока.",
      questionTranslations: {
        es: "Adiós (a un amigo)",
        de: "Tschüss (zu einem Freund)",
      },
    };
    expect(localizeTranslationQuestion(ruTr, "en", "russian")).toBe(
      "Bye (to a friend)",
    );
    expect(localizeTranslationQuestion(ruTr, "es", "russian")).toBe(
      "Adiós (a un amigo)",
    );
    expect(localizeTranslationQuestion(ruTr, "de", "russian")).toBe(
      "Tschüss (zu einem Freund)",
    );
    const [esEx] = prepareExercisesForInterface([ruTr], "es", "russian");
    expect(esEx.question).toBe("Adiós (a un amigo)");
    expect(esEx.instruction).toMatch(/Traduce|traduce/i);
  });

  it("replaces spoiler grammar-tag instructions", () => {
    const [ex] = prepareExercisesForInterface(
      [
        {
          ...sample,
          id: "se1",
          type: "fill_blank",
          question: "Ana y Luis ___ ven cada día.",
          answer: "se",
          instruction: "Взаимное se",
        },
      ],
      "ru",
    );
    expect(ex.instruction).toBe(
      "Впишите одно пропущенное слово или форму глагола",
    );
  });

  it("replaces Latin pack tags on EN UI", () => {
    const [ex] = prepareExercisesForInterface(
      [
        {
          ...sample,
          id: "subj1",
          type: "fill_blank",
          question: "Me alegra que ___ venido.",
          answer: "hayas",
          instruction: "Subj. compuesto",
        },
      ],
      "en",
    );
    expect(ex.instruction).toBe(
      "Type the single missing word or verb form",
    );
    expect(ex.instruction).not.toBe("Subj. compuesto");
  });

  it("uses reported-speech prompt for quote rewrites", async () => {
    const { localizeExerciseInstruction, isReportedSpeechRewrite } =
      await import("@/lib/exercise-localize");
    const item = {
      type: "error_correction" as const,
      question: 'Miguel respondió: "No puedo ir."',
      answer: "Miguel respondió que no podía ir.",
      instruction: "Modal → imperfecto",
    };
    expect(isReportedSpeechRewrite(item)).toBe(true);
    expect(localizeExerciseInstruction(item, "ru")).toMatch(/косвенную/i);
  });

  it("detects English reported speech and reported questions", async () => {
    const { isReportedSpeechRewrite, localizeExerciseInstruction } =
      await import("@/lib/exercise-localize");
    const said = {
      type: "error_correction" as const,
      question: 'She said: "I am tired."',
      answer: "She said (that) she was tired.",
      instruction: "Tense backshift",
    };
    expect(isReportedSpeechRewrite(said)).toBe(true);
    expect(localizeExerciseInstruction(said, "en")).toMatch(/reported speech/i);
    expect(localizeExerciseInstruction(said, "ru")).toMatch(/косвенную/i);

    const asked = {
      type: "error_correction" as const,
      question: 'They asked: "Where is the station?"',
      answer: "They asked where the station was.",
      instruction: "Reported question",
    };
    expect(isReportedSpeechRewrite(asked)).toBe(true);
    expect(localizeExerciseInstruction(asked, "ru")).toMatch(/косвенную/i);
  });

  it("honors rewriteMode and instructionKey", async () => {
    const { isReportedSpeechRewrite, localizeExerciseInstruction } =
      await import("@/lib/exercise-localize");
    expect(
      isReportedSpeechRewrite({
        type: "error_correction",
        question: "Yo soy estudiante",
        answer: "Yo soy estudiante",
        rewriteMode: "reported_speech",
      }),
    ).toBe(true);
    expect(
      localizeExerciseInstruction(
        {
          type: "multiple_choice",
          question: "Voy ___ casa",
          answer: "a",
          instruction: "Выберите por или para",
          instructionKey: "por_para",
        },
        "en",
      ),
    ).toMatch(/por or para/i);
  });

  it("does not remap English-course translate instructions to Spanish", async () => {
    const { localizeExerciseInstruction } = await import(
      "@/lib/exercise-localize"
    );
    const eng = {
      type: "translation" as const,
      question: "Я студент.",
      answer: "I am a student",
      instruction: "Translate to English",
    };
    expect(localizeExerciseInstruction(eng, "ru")).toMatch(/английск/i);
    // Already localized once (as in lesson UI after prepareExercisesForInterface)
    const secondPass = {
      ...eng,
      instruction: localizeExerciseInstruction(eng, "ru"),
    };
    expect(localizeExerciseInstruction(secondPass, "ru")).not.toMatch(
      /испанск/i,
    );
  });

  it("upgrades vague fill prompts when an infinitive cue is present", async () => {
    const { localizeExerciseInstruction } = await import(
      "@/lib/exercise-localize"
    );
    const blank = {
      type: "fill_blank" as const,
      question: "Ayer yo ___ (ir) al cine.",
      answer: "fui",
      instruction: "Заполните пропуск",
    };
    expect(localizeExerciseInstruction(blank, "ru")).toMatch(/форму/i);
    expect(localizeExerciseInstruction(blank, "en")).toMatch(/correct form/i);
  });
});

describe("getTranslationSourceLabel", () => {
  const tr = (
    question: string,
  ): Pick<import("@/types").StaticExercise, "question" | "type"> => ({
    type: "translation",
    question,
  });

  it("returns null for English course + EN UI (no third-language label)", () => {
    expect(
      getTranslationSourceLabel(tr("Hola"), "en", "english"),
    ).toBeNull();
  });

  it("labels EN source when UI is not English (non–English-course)", () => {
    expect(getTranslationSourceLabel(tr("Hello"), "ru", "russian")).toBe(
      "Источник: английский",
    );
    expect(getTranslationSourceLabel(tr("Hello"), "es", "russian")).toBe(
      "Origen: inglés",
    );
    expect(getTranslationSourceLabel(tr("Hello"), "de", "russian")).toBe(
      "Quelle: Englisch",
    );
  });

  it("labels RU/ES/DE sources in the learner UI language", () => {
    expect(getTranslationSourceLabel(tr("Я студент"), "en", "spanish")).toBe(
      "Source: Russian",
    );
    expect(
      getTranslationSourceLabel(tr("Elige la opción correcta"), "en", "spanish"),
    ).toBe("Source: Spanish");
    expect(
      getTranslationSourceLabel(
        tr("Wähle die richtige Option aus der Liste"),
        "es",
        "russian",
      ),
    ).toBe("Origen: alemán");
  });
});

describe("orderEarlyLevelPractice", () => {
  it("interleaves phrase types first for A1", async () => {
    const { orderEarlyLevelPractice } = await import("@/lib/exercise-bank");
    const bank: StaticExercise[] = [
      {
        ...sample,
        id: "1",
        type: "multiple_choice",
        question: "A ___",
        answer: "one",
      },
      {
        ...sample,
        id: "2",
        type: "sentence_building",
        question: "B / C",
        answer: "B C",
        options: ["B", "C"],
      },
      {
        ...sample,
        id: "3",
        type: "translation",
        question: "Привет",
        answer: "Hello",
      },
      {
        ...sample,
        id: "4",
        type: "fill_blank",
        question: "D ___",
        answer: "two",
      },
    ];
    const ordered = orderEarlyLevelPractice(bank, "A1");
    expect(ordered[0].type).toBe("sentence_building");
    expect(ordered[1].type).toBe("translation");
  });
});
