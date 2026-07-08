import type { Chapter, Level } from "@/types";

// =====================================================================
// Curriculum — chapters as a learning journey
// ---------------------------------------------------------------------
// Each chapter is a 7-10 minute lesson tied to a grammar topic and
// optional vocabulary topic. Chapters are ordered and gated: completing
// one unlocks the next. The journey is themed as a travel adventure
// through the Spanish-speaking world.
// =====================================================================

export const CHAPTERS: Chapter[] = [
  {
    slug: "chapter-1-despertar",
    number: 1,
    title: "Пробуждение",
    titleEs: "El Despertar",
    level: "A1",
    location: "Академия",
    icon: "🌅",
    summary: "Первые шаги: приветствия, знакомство, глагол ser.",
    grammarTopic: "a1-ser-estar",
    vocabTopic: "a1-familia",
    exerciseTypes: ["multiple_choice", "fill_blank"],
    estimatedMinutes: 8,
  },
  {
    slug: "chapter-2-primer-dialogo",
    number: 2,
    title: "Первый разговор",
    titleEs: "El Primer Diálogo",
    level: "A1",
    location: "Лес",
    icon: "🌲",
    summary: "Настоящее время: спряжение глаголов, базовые фразы.",
    grammarTopic: "a1-presente",
    vocabTopic: "a1-verbos-basicos",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-1-despertar",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-3-biblioteca",
    number: 3,
    title: "Тайны библиотеки",
    titleEs: "Los Secretos de la Biblioteca",
    level: "A1",
    location: "Древняя библиотека",
    icon: "📚",
    summary: "Артикли, род и число существительных.",
    grammarTopic: "a1-articulos",
    vocabTopic: "a1-casa",
    exerciseTypes: ["multiple_choice", "fill_blank"],
    prereqChapter: "chapter-2-primer-dialogo",
    estimatedMinutes: 8,
  },
  {
    slug: "chapter-4-numeros-tiempo",
    number: 4,
    title: "Ход времени",
    titleEs: "El Ritmo del Tiempo",
    level: "A1",
    location: "Городские часы",
    icon: "🕐",
    summary: "Числа, дни недели, время, предлоги места.",
    grammarTopic: "a1-numeros-1-100",
    vocabTopic: "a1-numeros-tiempo",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-3-biblioteca",
    estimatedMinutes: 9,
  },
  {
    slug: "chapter-5-mercado",
    number: 5,
    title: "Рынок Толедо",
    titleEs: "El Mercado de Toledo",
    level: "A1",
    location: "Толедо",
    icon: "🛒",
    summary: "Глагол tener, выражения с tener, покупки, цвета.",
    grammarTopic: "a1-tener-expressions",
    vocabTopic: "a1-colores",
    exerciseTypes: ["multiple_choice", "fill_blank", "sentence_building"],
    prereqChapter: "chapter-4-numeros-tiempo",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-6-cuerpo",
    number: 6,
    title: "Целитель",
    titleEs: "El Curandero",
    level: "A1",
    location: "Аптека Толедо",
    icon: "🌿",
    summary: "Тело и здоровье, глагол gustar, описание людей.",
    grammarTopic: "a1-gustar",
    vocabTopic: "a1-cuerpo",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-5-mercado",
    estimatedMinutes: 9,
  },
  {
    slug: "chapter-7-pasado-perfecto",
    number: 7,
    title: "Воспоминания",
    titleEs: "Los Recuerdos",
    level: "A2",
    location: "Древняя библиотека",
    icon: "💭",
    summary: "Pretérito Perfecto — что ты сделал к настоящему моменту.",
    grammarTopic: "a2-preterito-perfecto",
    vocabTopic: "a2-viajes",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-6-cuerpo",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-8-pasado-indefinido",
    number: 8,
    title: "Испытание Толедо",
    titleEs: "La Prueba de Toledo",
    level: "A2",
    location: "Замок Толедо",
    icon: "⚔️",
    summary: "Pretérito Indefinido — факты прошлого, приключения.",
    grammarTopic: "a2-preterito-indefinido",
    vocabTopic: "a2-trabajo",
    exerciseTypes: ["multiple_choice", "fill_blank", "error_correction"],
    prereqChapter: "chapter-7-pasado-perfecto",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-9-imperfecto",
    number: 9,
    title: "Туман прошлого",
    titleEs: "La Niebla del Pasado",
    level: "A2",
    location: "Туманный лес",
    icon: "🌫️",
    summary: "Pretérito Imperfecto — описание фона, привычки прошлого.",
    grammarTopic: "a2-imperfecto",
    vocabTopic: "a2-clima",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-8-pasado-indefinido",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-10-por-para",
    number: 10,
    title: "Перекрёсток Мадрида",
    titleEs: "El Cruce de Madrid",
    level: "A2",
    location: "Мадрид",
    icon: "🚇",
    summary: "Por vs Para, сравнительная степень, futuro simple.",
    grammarTopic: "a2-por-para",
    vocabTopic: "a2-compras",
    exerciseTypes: ["multiple_choice", "fill_blank", "sentence_building"],
    prereqChapter: "chapter-9-imperfecto",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-11-subjuntivo",
    number: 11,
    title: "Сердце города",
    titleEs: "El Corazón de la Ciudad",
    level: "B1",
    location: "Пуэрта-дель-Соль",
    icon: "❤️",
    summary: "Subjuntivo presente — желания, сомнения, эмоции.",
    grammarTopic: "b1-subjuntivo",
    vocabTopic: "b1-emociones",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-10-por-para",
    estimatedMinutes: 12,
  },
  {
    slug: "chapter-12-imperativo",
    number: 12,
    title: "Приказ командира",
    titleEs: "La Orden del Comandante",
    level: "B1",
    location: "Военная академия",
    icon: "🎖️",
    summary: "Imperativo — приказы, просьбы, советы.",
    grammarTopic: "b1-imperativo",
    vocabTopic: "b1-opiniones",
    exerciseTypes: ["multiple_choice", "fill_blank", "error_correction"],
    prereqChapter: "chapter-11-subjuntivo",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-13-condicional",
    number: 13,
    title: "Если бы...",
    titleEs: "Si Pudiera...",
    level: "B1",
    location: "Сады Севильи",
    icon: "🌹",
    summary: "Condicional simple — вежливость, гипотезы, нереальные условия.",
    grammarTopic: "b1-condicional",
    vocabTopic: "b1-sociedad",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-12-imperativo",
    estimatedMinutes: 10,
  },
  {
    slug: "chapter-14-estilo-indirecto",
    number: 14,
    title: "Сплетни Барселоны",
    titleEs: "Los Cotilleos de Barcelona",
    level: "B2",
    location: "Барселона",
    icon: "🗣️",
    summary: "Estilo indirecto — косвенная речь, передача чужих слов.",
    grammarTopic: "b2-estilo-indirecto",
    vocabTopic: "b2-argumentacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "error_correction"],
    prereqChapter: "chapter-13-condicional",
    estimatedMinutes: 12,
  },
  {
    slug: "chapter-15-voz-pasiva",
    number: 15,
    title: "Тайны Готического квартала",
    titleEs: "Misterios del Barrio Gótico",
    level: "B2",
    location: "Готический квартал",
    icon: "🏛️",
    summary: "Voz pasiva — пассивный залог, формальный регистр.",
    grammarTopic: "b2-voz-pasiva",
    vocabTopic: "b2-ciencia",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation"],
    prereqChapter: "chapter-14-estilo-indirecto",
    estimatedMinutes: 12,
  },
  {
    slug: "chapter-16-perifrasis",
    number: 16,
    title: "Мастер слова",
    titleEs: "El Maestro de las Palabras",
    level: "C1",
    location: "Литературный салон",
    icon: "✒️",
    summary: "Perífrasis verbales и matices estilísticos — тонкие оттенки.",
    grammarTopic: "c1-perifrasis-verbales",
    vocabTopic: "c1-expresiones-idiomaticas",
    exerciseTypes: ["multiple_choice", "fill_blank", "error_correction", "translation"],
    prereqChapter: "chapter-15-voz-pasiva",
    estimatedMinutes: 15,
  },
  {
    slug: "chapter-17-dele",
    number: 17,
    title: "Замок DELE",
    titleEs: "El Castillo DELE",
    level: "C1",
    location: "Замок DELE",
    icon: "🏰",
    summary: "Финал: подготовка к экзамену DELE, комплексная практика.",
    grammarTopic: "c1-matices-estilisticos",
    vocabTopic: "c1-lenguaje-formal",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction", "sentence_building"],
    prereqChapter: "chapter-16-perifrasis",
    estimatedMinutes: 15,
  },
];

// ---------- Helpers --------------------------------------------------

/** Get a chapter by slug. */
export function getChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

/** Get the first chapter (entry point). */
export function getFirstChapter(): Chapter {
  return CHAPTERS[0];
}

/**
 * Get the first chapter for a given CEFR level.
 * Used during onboarding — a B2 user starts at the B2 chapter, not A1.
 */
export function getFirstChapterForLevel(level: Level): Chapter {
  const ch = CHAPTERS.find((c) => c.level === level);
  return ch ?? CHAPTERS[0];
}

/**
 * Get the slug of the first chapter for a level (for redirects).
 */
export function getFirstChapterSlugForLevel(level: Level | null): string {
  if (!level) return CHAPTERS[0].slug;
  const ch = CHAPTERS.find((c) => c.level === level);
  return ch?.slug ?? CHAPTERS[0].slug;
}

/** Get the next chapter after a given slug. */
export function getNextChapter(slug: string): Chapter | undefined {
  const idx = CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx < 0 || idx + 1 >= CHAPTERS.length) return undefined;
  return CHAPTERS[idx + 1];
}

/** Get all chapters for a given level. */
export function getChaptersByLevel(level: Chapter["level"]): Chapter[] {
  return CHAPTERS.filter((c) => c.level === level);
}

/** Roman numeral for display (I, II, III...). */
export function toRoman(num: number): string {
  const romans: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let result = "";
  let n = num;
  for (const [val, sym] of romans) {
    while (n >= val) {
      result += sym;
      n -= val;
    }
  }
  return result;
}
