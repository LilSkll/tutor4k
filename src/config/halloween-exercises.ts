import { seededShuffle } from "@/lib/exercise-bank";
import { HALLOWEEN_EXERCISES_ENGLISH } from "@/config/halloween-exercises-english";
import type { StaticExercise } from "@/types";

/**
 * Small seasonal Spanish exercise pool (~16 items).
 * Merged into Daily practice only while Halloween season is on.
 * Goes through the same localize / quality paths as chapter banks.
 */
export const HALLOWEEN_EXERCISES: StaticExercise[] = [
  {
    id: "spanish:halloween:translation:01",
    type: "translation",
    question: "Призрак в старом доме.",
    questionTranslations: {
      en: "The ghost is in the old house.",
      // ES UI: English L1 (Spanish≈answer would spoil translate_to_es).
      es: "The ghost is in the old house.",
      de: "Der Geist ist im alten Haus.",
    },
    instruction: "Переведите на испанский",
    instructionKey: "translate_to_es",
    answer: "El fantasma en la casa vieja",
    acceptableAnswers: [
      "Un fantasma en la casa vieja",
      "El fantasma está en la casa vieja",
    ],
    explanation: "fantasma = призрак.",
    grammarTopic: "a1-ser-estar",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:translation:02",
    type: "translation",
    question: "Ведьма летает ночью.",
    questionTranslations: {
      en: "The witch flies at night.",
      es: "The witch flies at night.",
      de: "Die Hexe fliegt nachts.",
    },
    instruction: "Переведите на испанский",
    instructionKey: "translate_to_es",
    answer: "La bruja vuela de noche",
    acceptableAnswers: ["La bruja vuela por la noche"],
    explanation: "bruja = ведьма; volar = летать.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:translation:03",
    type: "translation",
    question: "Мне страшно.",
    questionTranslations: {
      en: "I am scared.",
      es: "I am scared.",
      de: "Ich habe Angst.",
    },
    instruction: "Переведите на испанский",
    instructionKey: "translate_to_es",
    answer: "Tengo miedo",
    acceptableAnswers: ["Me da miedo", "Estoy asustado", "Estoy asustada"],
    explanation: "tener miedo / dar miedo.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:translation:04",
    type: "translation",
    question: "Тыква у двери большая.",
    questionTranslations: {
      en: "The pumpkin by the door is big.",
      es: "The pumpkin by the door is big.",
      de: "Der Kürbis an der Tür ist groß.",
    },
    instruction: "Переведите на испанский",
    instructionKey: "translate_to_es",
    answer: "La calabaza en la puerta es grande",
    acceptableAnswers: [
      "La calabaza de la puerta es grande",
      "Hay una calabaza grande en la puerta",
    ],
    explanation: "calabaza = тыква.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:fill_blank:01",
    type: "fill_blank",
    question: "El ___ vive en el castillo oscuro. (vampiro)",
    instruction: "Заполните пропуск",
    answer: "vampiro",
    explanation: "vampiro = вампир.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:fill_blank:02",
    type: "fill_blank",
    question: "Los niños llevan un ___ en Halloween. (disfraz)",
    instruction: "Заполните пропуск",
    answer: "disfraz",
    explanation: "disfraz = костюм.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:fill_blank:03",
    type: "fill_blank",
    question: "La casa ___ da miedo. (embrujada)",
    instruction: "Заполните пропуск",
    answer: "embrujada",
    acceptableAnswers: ["encantada"],
    explanation: "embrujado/a = заколдованный.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:multiple_choice:01",
    type: "multiple_choice",
    question: "¿Cuál es el lugar de los muertos?",
    instruction: "Выберите правильный вариант",
    options: ["el cementerio", "la biblioteca", "el mercado", "la estación"],
    answer: "el cementerio",
    explanation: "cementerio = кладбище.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:multiple_choice:02",
    type: "multiple_choice",
    question: "¿Qué es un monstruo?",
    instruction: "Выберите правильный вариант",
    options: [
      "una criatura enorme y fea",
      "un profesor",
      "un amigo",
      "un parque",
    ],
    answer: "una criatura enorme y fea",
    explanation: "monstruo = монстр.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:multiple_choice:03",
    type: "multiple_choice",
    question: "¿Cuál es correcto?",
    instruction: "Выберите правильный вариант",
    options: [
      "La bruja vuela",
      "El bruja vuela",
      "La bruja volar",
      "Bruja la vuela",
    ],
    answer: "La bruja vuela",
    explanation: "bruja — женский род: la bruja.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:error_correction:01",
    type: "error_correction",
    question: "El fantasma están en la cocina.",
    instruction: "Исправьте ошибку",
    answer: "El fantasma está en la cocina.",
    acceptableAnswers: ["El fantasma esta en la cocina."],
    explanation: "Место → estar.",
    grammarTopic: "a1-ser-estar",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:error_correction:02",
    type: "error_correction",
    question: "Los niños tiene miedo.",
    instruction: "Исправьте ошибку",
    answer: "Los niños tienen miedo.",
    explanation: "ellos/ellas → tienen.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:sentence_building:01",
    type: "sentence_building",
    question: "El / monstruo / es / muy / grande",
    instruction: "Составьте предложение",
    instructionKey: "build_sentence",
    options: ["El", "monstruo", "es", "muy", "grande"],
    answer: "El monstruo es muy grande",
    explanation: "ser + прилагательное.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:sentence_building:02",
    type: "sentence_building",
    question: "Me / da / miedo / la / noche",
    instruction: "Составьте предложение",
    instructionKey: "build_sentence",
    options: ["Me", "da", "miedo", "la", "noche"],
    answer: "Me da miedo la noche",
    explanation: "dar miedo = пугать / быть страшным.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:translation:05",
    type: "translation",
    question: "Не бойся — это только костюм.",
    questionTranslations: {
      en: "Don't be afraid — it's only a costume.",
      es: "Don't be afraid — it's only a costume.",
      de: "Hab keine Angst — es ist nur ein Kostüm.",
    },
    instruction: "Переведите на испанский",
    instructionKey: "translate_to_es",
    answer: "No tengas miedo — es solo un disfraz",
    acceptableAnswers: [
      "No tengas miedo, es solo un disfraz",
      "No tengas miedo: es solo un disfraz",
      "No te asustes, es solo un disfraz",
    ],
    explanation: "disfraz = костюм; no tengas miedo.",
    vocabTopic: "a2-halloween",
  },
  {
    id: "spanish:halloween:fill_blank:04",
    type: "fill_blank",
    question: "De noche oímos un ruido en el ___. (cementerio)",
    instruction: "Заполните пропуск",
    answer: "cementerio",
    explanation: "cementerio = кладбище.",
    vocabTopic: "a2-halloween",
  },
];

/** Seasonal pool for the active course (empty = no mix). */
export function getHalloweenExercisesForCourse(
  courseId: string,
): StaticExercise[] {
  if (courseId === "spanish") return HALLOWEEN_EXERCISES;
  if (courseId === "english") return HALLOWEEN_EXERCISES_ENGLISH;
  return [];
}

/** Slot Halloween items into Daily practice (keep total length). */
export function mixHalloweenPractice(
  practice: StaticExercise[],
  seed: string,
  count = 2,
  pool: StaticExercise[] = HALLOWEEN_EXERCISES,
): StaticExercise[] {
  if (practice.length === 0 || count <= 0 || pool.length === 0) return practice;
  const picks = seededShuffle(pool, `${seed}:hw`).slice(
    0,
    Math.min(count, pool.length),
  );
  if (picks.length === 0) return practice;
  const keep = practice.slice(0, Math.max(0, practice.length - picks.length));
  return [...picks, ...keep];
}
