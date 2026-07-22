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
  "chapter-18-genero-numero": {
    en: {
      title: "Gender and Number",
      summary: "Masculine/feminine and singular/plural agreement.",
      location: "Manuscript Hall",
    },
    es: {
      title: "Género y Número",
      summary: "Género masculino/femenino y singular/plural.",
      location: "Sala de manuscritos",
    },
    de: {
      title: "Genus und Numerus",
      summary: "Maskulin/Feminin und Singular/Plural.",
      location: "Manuskriptsaal",
    },
  },
  "chapter-19-preposiciones": {
    en: {
      title: "City Map",
      summary: "Place prepositions: en, a, de, entre, detrás…",
      location: "Toledo Square",
    },
    es: {
      title: "El Mapa de la Ciudad",
      summary: "Preposiciones de lugar: en, a, de, entre, detrás…",
      location: "Plaza de Toledo",
    },
    de: {
      title: "Stadtplan",
      summary: "Lokalpräpositionen: en, a, de, entre, detrás…",
      location: "Plaza de Toledo",
    },
  },
  "chapter-20-preguntas": {
    en: {
      title: "Hippogriff Questions",
      summary: "Question words: qué, quién, dónde, cuándo, cómo, por qué.",
      location: "Academy Courtyard",
    },
    es: {
      title: "Las Preguntas del Hipogrifo",
      summary: "Palabras interrogativas: qué, quién, dónde, cuándo, cómo, por qué.",
      location: "Patio de la academia",
    },
    de: {
      title: "Fragen des Hippogreifen",
      summary: "Fragewörter: qué, quién, dónde, cuándo, cómo, por qué.",
      location: "Akademiehof",
    },
  },
  "chapter-21-comparativos": {
    en: {
      title: "Square Contest",
      summary: "Comparatives and superlatives: más… que, el más…",
      location: "Plaza Mayor",
    },
    es: {
      title: "El Torneo de la Plaza",
      summary: "Comparativos y superlativos: más… que, el más…",
      location: "Plaza Mayor",
    },
    de: {
      title: "Wettkampf auf dem Platz",
      summary: "Komparativ und Superlativ: más… que, el más…",
      location: "Plaza Mayor",
    },
  },
  "chapter-22-futuro": {
    en: {
      title: "The Prophecy",
      summary: "Simple future — plans and predictions.",
      location: "Observatory",
    },
    es: {
      title: "La Profecía",
      summary: "Futuro simple — planes y predicciones.",
      location: "Observatorio",
    },
    de: {
      title: "Die Prophezeiung",
      summary: "Futuro simple — Pläne und Vorhersagen.",
      location: "Observatorium",
    },
  },
};

/**
 * Interface-language overrides for English journey chapters.
 * Source Chapter.title / summary / location stay English.
 */
export const ENGLISH_CHAPTER_LOCALE: Record<
  string,
  Partial<Record<"ru" | "es" | "de", ChapterLocale>>
> = {
  "eng-ch1-first-steps": {
    ru: {
      title: "Первые шаги",
      summary: "be (am/is/are), приветствия, личная информация.",
      location: "Лондон",
    },
    es: {
      title: "Los Primeros Pasos",
      summary: "be (am/is/are), saludos, información personal.",
      location: "Londres",
    },
    de: {
      title: "Erste Schritte",
      summary: "be (am/is/are), Begrüßungen, persönliche Angaben.",
      location: "London",
    },
  },
  "eng-ch2-routines": {
    ru: {
      title: "Ежедневная рутина",
      summary: "Present simple, наречия частоты, повседневные дела.",
      location: "Оксфорд",
    },
    es: {
      title: "La Rutina Diaria",
      summary: "Present simple, adverbios de frecuencia, actividades diarias.",
      location: "Oxford",
    },
    de: {
      title: "Alltagsroutinen",
      summary: "Present Simple, Häufigkeitsadverbien, Alltagstätigkeiten.",
      location: "Oxford",
    },
  },
  "eng-ch17-questions": {
    ru: {
      title: "Спроси гида",
      summary: "Wh-вопросы: what, who, where, when, why, how.",
      location: "Бат",
    },
    es: {
      title: "Pregunta al Guía",
      summary: "Preguntas Wh-: what, who, where, when, why, how.",
      location: "Bath",
    },
    de: {
      title: "Frag den Guide",
      summary: "W-Fragen: what, who, where, when, why, how.",
      location: "Bath",
    },
  },
  "eng-ch3-around-town": {
    ru: {
      title: "По городу",
      summary: "there is / there are, some/any и места в городе.",
      location: "Кембридж",
    },
    es: {
      title: "Por la Ciudad",
      summary: "there is / there are, some/any y lugares de la ciudad.",
      location: "Cambridge",
    },
    de: {
      title: "In der Stadt",
      summary: "there is / there are, some/any und Orte in der Stadt.",
      location: "Cambridge",
    },
  },
  "eng-ch18-can": {
    ru: {
      title: "Я могу это сделать",
      summary: "can / can't — умение, разрешение и просьбы.",
      location: "Брайтон",
    },
    es: {
      title: "Puedo Hacerlo",
      summary: "can / can't — habilidad, permiso y peticiones.",
      location: "Brighton",
    },
    de: {
      title: "Ich kann das",
      summary: "can / can't — Fähigkeit, Erlaubnis und Bitten.",
      location: "Brighton",
    },
  },
  "eng-ch19-prepositions": {
    ru: {
      title: "Найди путь",
      summary: "Предлоги места: in, on, at, under, between, next to.",
      location: "Бристоль",
    },
    es: {
      title: "Encuentra el Camino",
      summary: "Preposiciones de lugar: in, on, at, under, between, next to.",
      location: "Bristol",
    },
    de: {
      title: "Finde den Weg",
      summary: "Ortspräpositionen: in, on, at, under, between, next to.",
      location: "Bristol",
    },
  },
  "eng-ch4-past-stories": {
    ru: {
      title: "Истории прошлого",
      summary: "Past simple (правильные и неправильные), вопросы, глаголы путешествий.",
      location: "Йорк",
    },
    es: {
      title: "Historias del Pasado",
      summary: "Past simple (regulares e irregulares), preguntas, verbos de viaje.",
      location: "York",
    },
    de: {
      title: "Geschichten der Vergangenheit",
      summary: "Past Simple (regelmäßig & unregelmäßig), Fragen, Reiseverben.",
      location: "York",
    },
  },
  "eng-ch5-choices": {
    ru: {
      title: "Правильный выбор",
      summary: "Сравнительная и превосходная степень.",
      location: "Эдинбург",
    },
    es: {
      title: "La Elección Correcta",
      summary: "Comparativos y superlativos.",
      location: "Edimburgo",
    },
    de: {
      title: "Die richtige Wahl",
      summary: "Komparativ und Superlativ.",
      location: "Edinburgh",
    },
  },
  "eng-ch20-going-to": {
    ru: {
      title: "Планы вперёд",
      summary: "be going to — намерения и ближайшее будущее.",
      location: "Глазго",
    },
    es: {
      title: "Planes por Delante",
      summary: "be going to — intenciones y planes cercanos.",
      location: "Glasgow",
    },
    de: {
      title: "Pläne voraus",
      summary: "be going to — Absichten und nahe Zukunft.",
      location: "Glasgow",
    },
  },
  "eng-ch6-experiences": {
    ru: {
      title: "Глобальный опыт",
      summary: "Present perfect, ever/never, жизненный опыт.",
      location: "Манчестер",
    },
    es: {
      title: "Experiencias Globales",
      summary: "Present perfect, ever/never, experiencias de vida.",
      location: "Manchester",
    },
    de: {
      title: "Globale Erfahrungen",
      summary: "Present Perfect, ever/never, Lebenserfahrung.",
      location: "Manchester",
    },
  },
  "eng-ch21-quantifiers": {
    ru: {
      title: "Сколько?",
      summary: "some, any, much, many, a lot of — исчисляемые и неисчисляемые.",
      location: "Лидс",
    },
    es: {
      title: "¿Cuánto?",
      summary: "some, any, much, many, a lot of — contables e incontables.",
      location: "Leeds",
    },
    de: {
      title: "Wie viel?",
      summary: "some, any, much, many, a lot of — zählbar und unzählbar.",
      location: "Leeds",
    },
  },
  "eng-ch7-future-plans": {
    ru: {
      title: "Строим планы",
      summary: "will / won't и первый условный.",
      location: "Дублин",
    },
    es: {
      title: "Haciendo Planes",
      summary: "will / won't y el primer condicional.",
      location: "Dublín",
    },
    de: {
      title: "Pläne schmieden",
      summary: "will / won't und First Conditional.",
      location: "Dublin",
    },
  },
  "eng-ch22-modals": {
    ru: {
      title: "Правила дороги",
      summary: "should, must, have to — совет и обязанность.",
      location: "Белфаст",
    },
    es: {
      title: "Las Reglas del Camino",
      summary: "should, must, have to — consejo y obligación.",
      location: "Belfast",
    },
    de: {
      title: "Regeln der Straße",
      summary: "should, must, have to — Rat und Pflicht.",
      location: "Belfast",
    },
  },
  "eng-ch8-storytelling": {
    ru: {
      title: "Расскажи историю",
      summary: "Past continuous, used to, past perfect — повествовательные времена.",
      location: "Кардифф",
    },
    es: {
      title: "Cuéntame una Historia",
      summary: "Past continuous, used to, past perfect — tiempos narrativos.",
      location: "Cardiff",
    },
    de: {
      title: "Erzähl mir eine Geschichte",
      summary: "Past Continuous, used to, Past Perfect — Erzählzeiten.",
      location: "Cardiff",
    },
  },
  "eng-ch9-real-world": {
    ru: {
      title: "Реальный мир",
      summary: "Present perfect continuous, for/since, изменения в жизни.",
      location: "Ливерпуль",
    },
    es: {
      title: "El Mundo Real",
      summary: "Present perfect continuous, for/since, cambios de vida.",
      location: "Liverpool",
    },
    de: {
      title: "Die echte Welt",
      summary: "Present Perfect Continuous, for/since, Lebensveränderungen.",
      location: "Liverpool",
    },
  },
  "eng-ch10-what-if": {
    ru: {
      title: "А что если?",
      summary: "Второй и третий условный, wish/if only, гипотезы.",
      location: "Нью-Йорк",
    },
    es: {
      title: "¿Y si...?",
      summary: "Segundo y tercer condicional, wish/if only, hipótesis.",
      location: "Nueva York",
    },
    de: {
      title: "Was wäre wenn?",
      summary: "Zweiter und dritter Conditional, wish/if only, Hypothesen.",
      location: "New York",
    },
  },
  "eng-ch11-passive": {
    ru: {
      title: "Страдательный залог",
      summary: "Passive (все времена), have something done, процессы.",
      location: "Бостон",
    },
    es: {
      title: "La Voz Pasiva",
      summary: "Passive (todos los tiempos), have something done, procesos.",
      location: "Boston",
    },
    de: {
      title: "Das Passiv",
      summary: "Passiv (alle Zeiten), have something done, Prozesse.",
      location: "Boston",
    },
  },
  "eng-ch12-beyond-borders": {
    ru: {
      title: "За границами",
      summary: "Косвенная речь, относительные придаточные, квантификаторы.",
      location: "Сан-Франциско",
    },
    es: {
      title: "Más Allá de las Fronteras",
      summary: "Estilo indirecto, oraciones de relativo, cuantificadores.",
      location: "San Francisco",
    },
    de: {
      title: "Über Grenzen hinaus",
      summary: "Indirekte Rede, Relativsätze, Quantoren.",
      location: "San Francisco",
    },
  },
  "eng-ch13-advanced-structures": {
    ru: {
      title: "Продвинутые структуры",
      summary: "Инверсия, эмфаза, cleft-предложения.",
      location: "Чикаго",
    },
    es: {
      title: "Estructuras Avanzadas",
      summary: "Inversión, estructuras enfáticas, cleft sentences.",
      location: "Chicago",
    },
    de: {
      title: "Fortgeschrittene Strukturen",
      summary: "Inversion, emphatische Strukturen, Cleft-Sätze.",
      location: "Chicago",
    },
  },
  "eng-ch14-art-language": {
    ru: {
      title: "Искусство языка",
      summary: "Substitution, ellipsis, fronting, усилительные наречия.",
      location: "Торонто",
    },
    es: {
      title: "El Arte del Idioma",
      summary: "Sustitución, elipsis, fronting, adverbios intensificadores.",
      location: "Toronto",
    },
    de: {
      title: "Die Kunst der Sprache",
      summary: "Substitution, Ellipsis, Fronting, verstärkende Adverbien.",
      location: "Toronto",
    },
  },
  "eng-ch15-mastery": {
    ru: {
      title: "Мастерство",
      summary: "Смешанные условные, продвинутый пассив, регистр, литература.",
      location: "Сидней",
    },
    es: {
      title: "Maestría",
      summary: "Condicionales mixtos, pasivas avanzadas, registro, literatura.",
      location: "Sídney",
    },
    de: {
      title: "Meisterschaft",
      summary: "Gemischte Conditionals, fortgeschrittenes Passiv, Register, Literatur.",
      location: "Sydney",
    },
  },
  "eng-ch16-ielts": {
    ru: {
      title: "Финальный вызов",
      summary: "Полный обзор + подготовка к IELTS.",
      location: "Замок IELTS",
    },
    es: {
      title: "El Desafío Final",
      summary: "Repaso integral + preparación IELTS.",
      location: "Castillo IELTS",
    },
    de: {
      title: "Die finale Herausforderung",
      summary: "Gesamtwiederholung + IELTS-Vorbereitung.",
      location: "IELTS-Burg",
    },
  },
};

function getChapterLocale(
  slug: string,
  interfaceLanguage: InterfaceLanguage,
): ChapterLocale | undefined {
  const spanish = SPANISH_CHAPTER_LOCALE[slug]?.[
    interfaceLanguage as "en" | "es" | "de"
  ];
  if (spanish) return spanish;
  return ENGLISH_CHAPTER_LOCALE[slug]?.[
    interfaceLanguage as "ru" | "es" | "de"
  ];
}

export function getChapterTitle(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = getChapterLocale(chapter.slug, interfaceLanguage);
  if (loc?.title) return loc.title;

  if (interfaceLanguage === "es") return chapter.titleEs || chapter.title;

  // Spanish source titles are Russian; English source titles are English.
  return chapter.title;
}

export function getChapterSummary(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = getChapterLocale(chapter.slug, interfaceLanguage);
  if (loc?.summary) return loc.summary;
  return chapter.summary;
}

export function getChapterLocation(
  chapter: Chapter,
  interfaceLanguage: InterfaceLanguage,
): string {
  const loc = getChapterLocale(chapter.slug, interfaceLanguage);
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

/**
 * True when every ancestor in the prereq chain is completed.
 * Prevents skipping inserted mid-journey chapters (e.g. eng-ch17…22).
 */
export function hasCompletedPrereqChain(
  chapter: { slug: string; prereqChapter?: string },
  chaptersBySlug: Map<string, { slug: string; prereqChapter?: string }>,
  completedSlugs: Set<string>,
): boolean {
  let slug = chapter.prereqChapter;
  const seen = new Set<string>();
  while (slug) {
    if (seen.has(slug)) break;
    seen.add(slug);
    if (!completedSlugs.has(slug)) return false;
    slug = chaptersBySlug.get(slug)?.prereqChapter;
  }
  return true;
}

/** Infer course id from chapter slug when DB course_id is missing. */
export function inferCourseIdFromChapterSlug(slug: string): string {
  if (slug.startsWith("eng-")) return "english";
  if (slug.startsWith("ru-") || slug.startsWith("rus-")) return "russian";
  return "spanish";
}
