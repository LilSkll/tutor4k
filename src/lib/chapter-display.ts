import type { Chapter, InterfaceLanguage } from "@/types";

type ChapterLocale = {
  title: string;
  summary: string;
  location: string;
};

/**
 * Interface-language overrides for Spanish adventure chapters.
 * Russian = Chapter.title / Chapter.summary / Chapter.location (source).
 * Spanish = Chapter.titleEs for title; location often already Spanish-ish.
 */
export const SPANISH_CHAPTER_LOCALE: Record<
  string,
  Partial<Record<"en" | "es" | "de", ChapterLocale>>
> = {
  "chapter-1-despertar": {
    en: {
      title: "Awakening",
      summary: "First steps: greetings, introductions, the verb ser.",
      location: "The Academy",
    },
    es: {
      title: "El Despertar",
      summary: "Primeros pasos: saludos, presentaciones, verbo ser.",
      location: "La Academia",
    },
    de: {
      title: "Das Erwachen",
      summary: "Erste Schritte: Begrüßungen, Kennenlernen, Verb ser.",
      location: "Die Akademie",
    },
  },
  "chapter-2-primer-dialogo": {
    en: {
      title: "First Conversation",
      summary: "Present tense: conjugations and basic phrases.",
      location: "The Forest",
    },
    es: {
      title: "El Primer Diálogo",
      summary: "Presente: conjugación y frases básicas.",
      location: "El Bosque",
    },
    de: {
      title: "Das erste Gespräch",
      summary: "Präsens: Konjugation und grundlegende Phrasen.",
      location: "Der Wald",
    },
  },
  "chapter-3-biblioteca": {
    en: {
      title: "Secrets of the Library",
      summary: "Articles, gender and number of nouns.",
      location: "Ancient Library",
    },
    es: {
      title: "Los Secretos de la Biblioteca",
      summary: "Artículos, género y número de los sustantivos.",
      location: "Biblioteca Antigua",
    },
    de: {
      title: "Geheimnisse der Bibliothek",
      summary: "Artikel, Geschlecht und Zahl der Substantive.",
      location: "Alte Bibliothek",
    },
  },
  "chapter-4-numeros-tiempo": {
    en: {
      title: "The Rhythm of Time",
      summary: "Numbers, days of the week, time, place prepositions.",
      location: "City Clock",
    },
    es: {
      title: "El Ritmo del Tiempo",
      summary: "Números, días de la semana, la hora, preposiciones de lugar.",
      location: "Reloj de la ciudad",
    },
    de: {
      title: "Der Rhythmus der Zeit",
      summary: "Zahlen, Wochentage, Uhrzeit, Ortspräpositionen.",
      location: "Stadtuhr",
    },
  },
  "chapter-5-mercado": {
    en: {
      title: "Toledo Market",
      summary: "Verb tener, expressions with tener, shopping, colors.",
      location: "Toledo",
    },
    es: {
      title: "El Mercado de Toledo",
      summary: "Verbo tener, expresiones con tener, compras, colores.",
      location: "Toledo",
    },
    de: {
      title: "Markt von Toledo",
      summary: "Verb tener, Wendungen mit tener, Einkaufen, Farben.",
      location: "Toledo",
    },
  },
  "chapter-6-cuerpo": {
    en: {
      title: "The Healer",
      summary: "Body and health, verb gustar, describing people.",
      location: "Toledo Pharmacy",
    },
    es: {
      title: "El Curandero",
      summary: "Cuerpo y salud, verbo gustar, describir personas.",
      location: "Farmacia de Toledo",
    },
    de: {
      title: "Der Heiler",
      summary: "Körper und Gesundheit, Verb gustar, Personen beschreiben.",
      location: "Apotheke Toledo",
    },
  },
  "chapter-7-pasado-perfecto": {
    en: {
      title: "Memories",
      summary: "Pretérito Perfecto — what you have done up to now.",
      location: "Ancient Library",
    },
    es: {
      title: "Los Recuerdos",
      summary: "Pretérito Perfecto — lo que has hecho hasta ahora.",
      location: "Biblioteca Antigua",
    },
    de: {
      title: "Erinnerungen",
      summary: "Pretérito Perfecto — was du bisher getan hast.",
      location: "Alte Bibliothek",
    },
  },
  "chapter-8-pasado-indefinido": {
    en: {
      title: "The Toledo Trial",
      summary: "Pretérito Indefinido — past facts and adventures.",
      location: "Toledo Castle",
    },
    es: {
      title: "La Prueba de Toledo",
      summary: "Pretérito Indefinido — hechos del pasado y aventuras.",
      location: "Castillo de Toledo",
    },
    de: {
      title: "Die Prüfung von Toledo",
      summary: "Pretérito Indefinido — Fakten der Vergangenheit.",
      location: "Burg Toledo",
    },
  },
  "chapter-9-imperfecto": {
    en: {
      title: "Fog of the Past",
      summary: "Pretérito Imperfecto — background and past habits.",
      location: "Misty Forest",
    },
    es: {
      title: "La Niebla del Pasado",
      summary: "Pretérito Imperfecto — trasfondo y hábitos del pasado.",
      location: "Bosque Brumoso",
    },
    de: {
      title: "Nebel der Vergangenheit",
      summary: "Pretérito Imperfecto — Hintergrund und Gewohnheiten.",
      location: "Nebliger Wald",
    },
  },
  "chapter-10-por-para": {
    en: {
      title: "Madrid Crossroads",
      summary: "Por vs Para, comparatives, futuro simple.",
      location: "Madrid",
    },
    es: {
      title: "El Cruce de Madrid",
      summary: "Por vs Para, comparativos, futuro simple.",
      location: "Madrid",
    },
    de: {
      title: "Kreuzung Madrid",
      summary: "Por vs Para, Komparativ, Futuro Simple.",
      location: "Madrid",
    },
  },
  "chapter-11-subjuntivo": {
    en: {
      title: "Heart of the City",
      summary: "Subjuntivo presente — wishes, doubts, emotions.",
      location: "Puerta del Sol",
    },
    es: {
      title: "El Corazón de la Ciudad",
      summary: "Subjuntivo presente — deseos, dudas, emociones.",
      location: "Puerta del Sol",
    },
    de: {
      title: "Herz der Stadt",
      summary: "Subjuntivo presente — Wünsche, Zweifel, Emotionen.",
      location: "Puerta del Sol",
    },
  },
  "chapter-12-imperativo": {
    en: {
      title: "The Commander's Order",
      summary: "Imperativo — commands, requests, advice.",
      location: "Military Academy",
    },
    es: {
      title: "La Orden del Comandante",
      summary: "Imperativo — órdenes, peticiones, consejos.",
      location: "Academia Militar",
    },
    de: {
      title: "Der Befehl des Kommandanten",
      summary: "Imperativo — Befehle, Bitten, Ratschläge.",
      location: "Militärakademie",
    },
  },
  "chapter-13-condicional": {
    en: {
      title: "If I Could...",
      summary: "Condicional simple — politeness, hypotheses, unreal conditions.",
      location: "Seville Gardens",
    },
    es: {
      title: "Si Pudiera...",
      summary: "Condicional simple — cortesía, hipótesis, condiciones irreales.",
      location: "Jardines de Sevilla",
    },
    de: {
      title: "Wenn ich könnte...",
      summary: "Condicional simple — Höflichkeit und Hypothesen.",
      location: "Gärten von Sevilla",
    },
  },
  "chapter-14-estilo-indirecto": {
    en: {
      title: "Barcelona Gossip",
      summary: "Estilo indirecto — reported speech.",
      location: "Barcelona",
    },
    es: {
      title: "Los Cotilleos de Barcelona",
      summary: "Estilo indirecto — reproducir lo que otros dijeron.",
      location: "Barcelona",
    },
    de: {
      title: "Gerüchte aus Barcelona",
      summary: "Estilo indirecto — indirekte Rede.",
      location: "Barcelona",
    },
  },
  "chapter-15-voz-pasiva": {
    en: {
      title: "Gothic Quarter Mysteries",
      summary: "Voz pasiva — passive voice and formal register.",
      location: "Gothic Quarter",
    },
    es: {
      title: "Misterios del Barrio Gótico",
      summary: "Voz pasiva — pasiva y registro formal.",
      location: "Barrio Gótico",
    },
    de: {
      title: "Geheimnisse des Gotischen Viertels",
      summary: "Voz pasiva — Passiv und formeller Stil.",
      location: "Gotisches Viertel",
    },
  },
  "chapter-16-perifrasis": {
    en: {
      title: "Master of Words",
      summary: "Perífrasis verbales and stylistic nuances.",
      location: "Literary Salon",
    },
    es: {
      title: "El Maestro de las Palabras",
      summary: "Perífrasis verbales y matices estilísticos.",
      location: "Salón Literario",
    },
    de: {
      title: "Meister der Worte",
      summary: "Perífrasis verbales und stilistische Nuancen.",
      location: "Literarischer Salon",
    },
  },
  "chapter-17-dele": {
    en: {
      title: "Castle DELE",
      summary: "Finale: DELE exam prep and comprehensive practice.",
      location: "Castle DELE",
    },
    es: {
      title: "El Castillo DELE",
      summary: "Final: preparación DELE y práctica integral.",
      location: "Castillo DELE",
    },
    de: {
      title: "Die DELE-Burg",
      summary: "Finale: DELE-Vorbereitung und Gesamtübung.",
      location: "Burg DELE",
    },
  },
};

export function getChapterTitle(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (interfaceLanguage === "ru") return chapter.title;

  const loc = SPANISH_CHAPTER_LOCALE[chapter.slug]?.[interfaceLanguage];
  if (loc?.title) return loc.title;

  if (interfaceLanguage === "es") return chapter.titleEs || chapter.title;

  // English-course chapters already store English in `title`.
  return chapter.title;
}

export function getChapterSummary(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (interfaceLanguage === "ru") return chapter.summary;
  const loc = SPANISH_CHAPTER_LOCALE[chapter.slug]?.[interfaceLanguage];
  if (loc?.summary) return loc.summary;
  // For English course (or missing locale), source summary may already be English.
  return chapter.summary;
}

export function getChapterLocation(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  if (interfaceLanguage === "ru") return chapter.location;
  const loc = SPANISH_CHAPTER_LOCALE[chapter.slug]?.[interfaceLanguage];
  if (loc?.location) return loc.location;
  return chapter.location;
}

/**
 * Turn a chapter summary into short "today you learned" bullets.
 * Uses existing summary text only — no invented skills.
 */
export function getChapterAchievementBullets(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
  grammarTitle?: string | null,
): string[] {
  const bullets: string[] = [];
  if (grammarTitle?.trim()) {
    bullets.push(grammarTitle.trim());
  }

  const summary = getChapterSummary(chapter, interfaceLanguage);
  // Drop leading labels like "First steps:" then split on commas / semicolons.
  const body = summary.replace(/^[^:]+:\s*/u, "").trim();
  const parts = body
    .split(/[,;•·|/]/u)
    .map((p) => p.trim())
    .filter((p) => p.length > 2 && p.length < 80);

  for (const part of parts) {
    if (!bullets.some((b) => b.toLowerCase() === part.toLowerCase())) {
      bullets.push(part);
    }
    if (bullets.length >= 5) break;
  }

  if (bullets.length === 0 && summary.trim()) {
    bullets.push(summary.trim());
  }

  return bullets.slice(0, 5);
}

/** Count completed progress rows that belong to a given course's chapters. */
export function countCompletedForCourse(
  completedSlugs: Iterable<string>,
  courseChapterSlugs: string[],
): number {
  const courseSet = new Set(courseChapterSlugs);
  let n = 0;
  for (const slug of completedSlugs) {
    if (courseSet.has(slug)) n += 1;
  }
  return n;
}

/** Infer course id from chapter slug when DB course_id is missing. */
export function inferCourseIdFromChapterSlug(slug: string): string {
  if (slug.startsWith("eng-")) return "english";
  if (slug.startsWith("ru-") || slug.startsWith("rus-")) return "russian";
  return "spanish";
}
