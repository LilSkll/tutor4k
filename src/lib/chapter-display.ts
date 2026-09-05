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
      summary: "Expressions with tener (hambre, frío, sueño) and body-related states.",
      location: "Toledo",
    },
    es: {
      title: "El Mercado de Toledo",
      summary: "Expresiones con tener (hambre, frío, sueño) y estados del cuerpo.",
      location: "Toledo",
    },
    de: {
      title: "Markt von Toledo",
      summary: "Wendungen mit tener (hambre, frío, sueño) und Körperzustände.",
      location: "Toledo",
    },
  },
  "chapter-6-cuerpo": {
    en: {
      title: "The Healer",
      summary: "Verb gustar with food and likes — me gusta el café.",
      location: "Toledo Pharmacy",
    },
    es: {
      title: "El Curandero",
      summary: "Verbo gustar con comida y gustos — me gusta el café.",
      location: "Farmacia de Toledo",
    },
    de: {
      title: "Der Heiler",
      summary: "Verb gustar mit Essen und Vorlieben — me gusta el café.",
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
  "chapter-23-cronicas": {
    en: {
      title: "The Wanderer's Chronicles",
      summary: "DELE: contrasting past tenses — indefinido, imperfecto, perfecto, pluscuamperfecto.",
      location: "Seville Archive",
    },
    es: {
      title: "Las Crónicas del Viajero",
      summary: "DELE: contraste de pasados — indefinido, imperfecto, perfecto, pluscuamperfecto.",
      location: "Archivo de Sevilla",
    },
    de: {
      title: "Die Chroniken des Wanderers",
      summary: "DELE: Kontrast der Vergangenheitszeiten — indefinido, imperfecto, perfecto, pluscuamperfecto.",
      location: "Archiv von Sevilla",
    },
  },
  "chapter-24-carta": {
    en: {
      title: "A Letter to the Hippogriff",
      summary: "DELE: formal and informal letters — greetings, requests, sign-offs.",
      location: "Seville Post House",
    },
    es: {
      title: "La Carta al Hipogrifo",
      summary: "DELE: carta formal e informal — saludos, peticiones, despedidas.",
      location: "Casa de Correos de Sevilla",
    },
    de: {
      title: "Ein Brief an den Hippogreif",
      summary: "DELE: formeller und informeller Brief — Anreden, Bitten, Grußformeln.",
      location: "Posthaus von Sevilla",
    },
  },
  "chapter-25-conectores": {
    en: {
      title: "The Bridge of Arguments",
      summary: "DELE: essay connectors — text structure, opinions with indicativo/subjuntivo.",
      location: "University of Salamanca",
    },
    es: {
      title: "El Puente de los Argumentos",
      summary: "DELE: conectores para la redacción — estructura, opinión con indicativo/subjuntivo.",
      location: "Universidad de Salamanca",
    },
    de: {
      title: "Die Brücke der Argumente",
      summary: "DELE: Konnektoren für den Aufsatz — Textstruktur, Meinung mit indicativo/subjuntivo.",
      location: "Universität Salamanca",
    },
  },
  "chapter-26-voz-plaza": {
    en: {
      title: "The Voice of the Square",
      summary: "DELE: the speaking paper — describing photos, hypotheses, agreeing and disagreeing.",
      location: "Plaza de España",
    },
    es: {
      title: "La Voz de la Plaza",
      summary: "DELE: expresión oral — describir fotos, hipótesis, acuerdo y desacuerdo.",
      location: "Plaza de España",
    },
    de: {
      title: "Die Stimme des Platzes",
      summary: "DELE: mündlicher Teil — Fotobeschreibung, Hypothesen, Zustimmung und Widerspruch.",
      location: "Plaza de España",
    },
  },
  "chapter-27-hendidas": {
    en: {
      title: "The Labyrinth of Mirrors",
      summary: "Cleft sentences: «Fue Juan quien…», «Lo que necesito es…».",
      location: "The Alhambra",
    },
    es: {
      title: "El Laberinto de los Espejos",
      summary: "Oraciones hendidas: «Fue Juan quien…», «Lo que necesito es…».",
      location: "La Alhambra",
    },
    de: {
      title: "Das Spiegellabyrinth",
      summary: "Spaltsätze: «Fue Juan quien…», «Lo que necesito es…».",
      location: "Die Alhambra",
    },
  },
  "chapter-28-conjetura": {
    en: {
      title: "The Whisper of Rumors",
      summary: "Futuro de conjetura and condicional de rumor: guesses and unconfirmed reports.",
      location: "Newspaper Office, Madrid",
    },
    es: {
      title: "El Susurro de los Rumores",
      summary: "Futuro de conjetura y condicional de rumor: suposiciones e información no confirmada.",
      location: "Redacción del periódico, Madrid",
    },
    de: {
      title: "Das Flüstern der Gerüchte",
      summary: "Futuro de conjetura und condicional de rumor: Vermutungen und unbestätigte Meldungen.",
      location: "Zeitungsredaktion, Madrid",
    },
  },
  "chapter-29-culto": {
    en: {
      title: "The Academic's Quill",
      summary: "Formal style: participio absoluto, nominalization, formal connectors.",
      location: "The Royal Academy",
    },
    es: {
      title: "La Pluma del Académico",
      summary: "Estilo culto: participio absoluto, nominalización, conectores cultos.",
      location: "La Real Academia",
    },
    de: {
      title: "Die Feder des Akademikers",
      summary: "Gehobener Stil: participio absoluto, Nominalisierung, gehobene Konnektoren.",
      location: "Die Königliche Akademie",
    },
  },
  "chapter-30-ironia": {
    en: {
      title: "The Masks of Irony",
      summary: "Irony, sarcasm and register switching: from the bar to the ministry.",
      location: "Cervantes Theatre",
    },
    es: {
      title: "Las Máscaras de la Ironía",
      summary: "Ironía, sarcasmo y cambio de registro: del bar al ministerio.",
      location: "Teatro Cervantes",
    },
    de: {
      title: "Die Masken der Ironie",
      summary: "Ironie, Sarkasmus und Registerwechsel: von der Bar bis ins Ministerium.",
      location: "Cervantes-Theater",
    },
  },
  "chapter-31-verbos-frecuentes": {
    en: {
      title: "Map of Frequent Verbs",
      summary: "High-frequency irregulars: ir, tener, hacer, poder, querer, decir.",
      location: "Cartography Room",
    },
    es: {
      title: "El Mapa de los Verbos",
      summary: "Verbos irregulares frecuentes: ir, tener, hacer, poder, querer, decir.",
      location: "Sala de cartografía",
    },
    de: {
      title: "Karte der häufigen Verben",
      summary: "Häufige unregelmäßige Verben: ir, tener, hacer, poder, querer, decir.",
      location: "Kartographie-Raum",
    },
  },
  "chapter-32-pronombre-se": {
    en: {
      title: "Hall of Mirrors",
      summary: "The pronoun se — five uses: reflexive, reciprocal, impersonal, passive, accidental.",
      location: "Mirror Hall, Seville",
    },
    es: {
      title: "La Sala de los Espejos",
      summary: "El pronombre se — cinco valores: reflexivo, recíproco, impersonal, pasivo, accidental.",
      location: "Sala de los espejos, Sevilla",
    },
    de: {
      title: "Spiegelsaal",
      summary: "Das Pronomen se — fünf Werte: reflexiv, reziprok, unpersönlich, passiv, zufällig.",
      location: "Spiegelsaal, Sevilla",
    },
  },
  "chapter-33-relativos": {
    en: {
      title: "Threads of the Story",
      summary: "Relative pronouns: que, quien, lo que, cuyo, donde — linking two clauses.",
      location: "Archive of Tales",
    },
    es: {
      title: "Los Hilos de la Historia",
      summary: "Pronombres relativos: que, quien, lo que, cuyo, donde — unir dos frases.",
      location: "Archivo de relatos",
    },
    de: {
      title: "Fäden der Geschichte",
      summary: "Relativpronomen: que, quien, lo que, cuyo, donde — zwei Sätze verbinden.",
      location: "Erzählarchiv",
    },
  },
  "chapter-34-pluscuamperfecto": {
    en: {
      title: "Two Layers of the Past",
      summary: "Pluscuamperfecto — already done before: había comido when you arrived.",
      location: "Clock Tower",
    },
    es: {
      title: "Dos Capas del Pasado",
      summary: "Pluscuamperfecto — ya había pasado: había comido cuando llegaste.",
      location: "Torre del reloj",
    },
    de: {
      title: "Zwei Schichten der Vergangenheit",
      summary: "Pluscuamperfecto — schon vorher geschehen: había comido, als du ankamst.",
      location: "Uhrturm",
    },
  },
  "chapter-35-subjuntivo-imperfecto": {
    en: {
      title: "If It Were in the Past",
      summary: "Imperfecto de subjuntivo — wishes and unreal past: si tuviera, quería que vinieras.",
      location: "Garden of What Might Have Been",
    },
    es: {
      title: "Si en el Pasado",
      summary: "Imperfecto de subjuntivo — deseos e irreal pasado: si tuviera, quería que vinieras.",
      location: "Jardín de lo que pudo ser",
    },
    de: {
      title: "Wenn es in der Vergangenheit wäre",
      summary: "Imperfecto de subjuntivo — Wünsche und Irrealis: si tuviera, quería que vinieras.",
      location: "Garten des Möglichen",
    },
  },
  "chapter-36-pronombres-objetos": {
    en: {
      title: "Little Words",
      summary: "Direct and indirect objects: lo/la = it, le = him/her, se lo (not le lo).",
      location: "Linguistics Workshop",
    },
    es: {
      title: "Las Palabras Pequeñas",
      summary: "Complemento directo e indirecto: lo/la, le, se lo (no le lo).",
      location: "Taller lingüístico",
    },
    de: {
      title: "Kleine Wörter",
      summary: "Direktes und indirektes Objekt: lo/la, le, se lo (nicht le lo).",
      location: "Sprachwerkstatt",
    },
  },
  "chapter-37-adverbios": {
    en: {
      title: "Shades of Speech",
      summary: "Adverbs: rápidamente (-mente), muy vs mucho; quizás + subjunctive.",
      location: "Palette of Words",
    },
    es: {
      title: "Matices del Habla",
      summary: "Adverbios: rápidamente (-mente), muy vs mucho; quizás + subjuntivo.",
      location: "Paleta de palabras",
    },
    de: {
      title: "Nuancen der Rede",
      summary: "Adverbien: rápidamente (-mente), muy vs mucho; quizás + Subjuntivo.",
      location: "Wortpalette",
    },
  },
  "chapter-38-subjuntivo-compuestos": {
    en: {
      title: "Compound Subjunctive",
      summary: "Subjuntivo compuesto — haya hablado, hubiera hablado (same rule, different tense).",
      location: "Hall of Time",
    },
    es: {
      title: "Subjuntivo Compuesto",
      summary: "Subjuntivo compuesto — haya hablado, hubiera hablado (misma regla, otro tiempo).",
      location: "Sala del tiempo",
    },
    de: {
      title: "Zusammengesetzter Subjuntivo",
      summary: "Subjuntivo compuesto — haya hablado, hubiera hablado (gleiche Regel, andere Zeit).",
      location: "Zeithalle",
    },
  },
  "chapter-39-condicionales-compuestos": {
    en: {
      title: "Three Worlds of If",
      summary: "Condicional compuesto — habría ido; three si types: real, unreal, unreal past.",
      location: "Fork of Fates",
    },
    es: {
      title: "Tres Mundos del Si",
      summary: "Condicional compuesto — habría ido; tres tipos de si: real, irreal, irreal pasado.",
      location: "Bifurcación de destinos",
    },
    de: {
      title: "Drei Welten des Wenn",
      summary: "Condicional compuesto — habría ido; drei si-Typen: real, irreal, irreal Vergangenheit.",
      location: "Schicksalsspaltung",
    },
  },
  "chapter-40-relativos-avanzado": {
    en: {
      title: "Formal Threads",
      summary: "Advanced relatives: el cual, lo que, adonde — for formal register.",
      location: "Salamanca Salon",
    },
    es: {
      title: "Hilos Formales",
      summary: "Relativos avanzados: el cual, lo que, adonde — registro formal.",
      location: "Salón de Salamanca",
    },
    de: {
      title: "Formelle Fäden",
      summary: "Fortgeschrittene Relativa: el cual, lo que, adonde — formelles Register.",
      location: "Salon Salamanca",
    },
  },
  "chapter-41-conectores-discursivos": {
    en: {
      title: "Bridges Between Ideas",
      summary: "Discourse connectors B2+: sin embargo, por lo tanto; some require subjunctive.",
      location: "Salamanca Bridge",
    },
    es: {
      title: "Puentes entre Ideas",
      summary: "Conectores discursivos B2+: sin embargo, por lo tanto; algunos con subjuntivo.",
      location: "Puente de Salamanca",
    },
    de: {
      title: "Brücken zwischen Gedanken",
      summary: "Diskurskonnektoren B2+: sin embargo, por lo tanto; manche mit Subjuntivo.",
      location: "Salamanca-Brücke",
    },
  },
  "chapter-42-subjuntivo-avanzado": {
    en: {
      title: "Tricky Subjunctive Cases",
      summary: "Borderline subjunctive: aunque, donde, como — fact vs hypothesis.",
      location: "Debate Hall",
    },
    es: {
      title: "Subjuntivo: Casos Dudosos",
      summary: "Casos dudosos del subjuntivo: aunque, donde, como — hecho o hipótesis.",
      location: "Sala de debates",
    },
    de: {
      title: "Strittige Subjuntivo-Fälle",
      summary: "Grenzfälle: aunque, donde, como — Fakt oder Hypothese.",
      location: "Debattenhalle",
    },
  },
  "chapter-43-indirecto-avanzado": {
    en: {
      title: "Full Reported-Speech Grid",
      summary: "Complete estilo indirecto: all tense shifts, subjunctive, hoy → aquel día.",
      location: "Protocol Archive",
    },
    es: {
      title: "Estilo Indirecto Completo",
      summary: "Estilo indirecto completo: todos los cambios de tiempo, subjuntivo, hoy → aquel día.",
      location: "Archivo de protocolos",
    },
    de: {
      title: "Vollständiges indirektes Sprechen",
      summary: "Vollständiges estilo indirecto: alle Zeitverschiebungen, Subjuntivo, hoy → aquel día.",
      location: "Protokollarchiv",
    },
  },
  "chapter-44-pronombres-avanzado": {
    en: {
      title: "The Good of It All",
      summary: "Advanced pronouns: lo bueno, a María la veo, leísmo / laísmo.",
      location: "Linguistics Museum",
    },
    es: {
      title: "Lo Bueno de Todo",
      summary: "Pronombres avanzados: lo bueno, a María la veo, leísmo / laísmo.",
      location: "Museo lingüístico",
    },
    de: {
      title: "Das Gute an allem",
      summary: "Fortgeschrittene Pronomen: lo bueno, a María la veo, leísmo / laísmo.",
      location: "Linguistik-Museum",
    },
  },
  "chapter-45-ser-estar-matices": {
    en: {
      title: "Two Be’s Again",
      summary: "Ser vs estar in hard pairs: es listo vs está listo — meaning flips.",
      location: "Hall of Meaning Mirrors",
    },
    es: {
      title: "Ser y Estar Otra Vez",
      summary: "Ser vs estar en pares difíciles: es listo vs está listo — cambia el sentido.",
      location: "Sala de espejos del sentido",
    },
    de: {
      title: "Zwei ‚sein‘ noch einmal",
      summary: "Ser vs estar in schwierigen Paaren: es listo vs está listo — Bedeutung kippt.",
      location: "Halle der Bedeutungsspiegel",
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
  "eng-ch23-spotlight": {
    ru: {
      title: "В свете прожекторов",
      summary: "Cleft sentences, эмфатическое do, fronting — выделение как у носителей.",
      location: "Бродвей, Нью-Йорк",
    },
    es: {
      title: "En el Centro de Atención",
      summary: "Cleft sentences, do enfático, fronting — el énfasis como un nativo.",
      location: "Broadway, Nueva York",
    },
    de: {
      title: "Im Rampenlicht",
      summary: "Cleft sentences, emphatisches do, fronting — Betonung wie ein Muttersprachler.",
      location: "Broadway, New York",
    },
  },
  "eng-ch24-unspoken": {
    ru: {
      title: "Несказанные слова",
      summary: "Эллипсис и замещение: so do I, I hope so, if not.",
      location: "Дублин",
    },
    es: {
      title: "Las Palabras No Dichas",
      summary: "Elipsis y sustitución: so do I, I hope so, if not.",
      location: "Dublín",
    },
    de: {
      title: "Die unausgesprochenen Worte",
      summary: "Ellipse und Substitution: so do I, I hope so, if not.",
      location: "Dublin",
    },
  },
  "eng-ch25-between-lines": {
    ru: {
      title: "Между строк",
      summary: "Хеджирование, британский understatement, вежливое несогласие.",
      location: "Вестминстер, Лондон",
    },
    es: {
      title: "Entre Líneas",
      summary: "Hedging, understatement británico, desacuerdo cortés.",
      location: "Westminster, Londres",
    },
    de: {
      title: "Zwischen den Zeilen",
      summary: "Hedging, britisches Understatement, höflicher Widerspruch.",
      location: "Westminster, London",
    },
  },

  "eng-ch26-articles": {
    ru: {
      title: "Врата артиклей",
      summary: "a/an/the и нулевой артикль — первые ворота после Лондона.",
      location: "Британский музей, Лондон",
    },
    es: {
      title: "La Puerta de los Artículos",
      summary: "a/an/the y artículo cero — la primera puerta tras Londres.",
      location: "Museo Británico, Londres",
    },
    de: {
      title: "Das Artikeltor",
      summary: "a/an/the und Nullartikel — das erste Tor nach London.",
      location: "British Museum, London",
    },
  },
  "eng-ch27-possessives": {
    ru: {
      title: "Чьё это?",
      summary: "my/your/his и саксонский генитив: Anna's bag.",
      location: "Ковент-Гарден, Лондон",
    },
    es: {
      title: "¿Qué es Tuyo?",
      summary: "my/your/his y genitivo sajón: Anna's bag.",
      location: "Covent Garden, Londres",
    },
    de: {
      title: "Wessen ist das?",
      summary: "my/your/his und sächsischer Genitiv: Anna's bag.",
      location: "Covent Garden, London",
    },
  },
  "eng-ch28-countable": {
    ru: {
      title: "Счётное или нет?",
      summary: "Исчисляемые и неисчисляемые; much/many, a few/a little.",
      location: "Рынок Эдинбурга",
    },
    es: {
      title: "¿Contable o No?",
      summary: "Contables e incontables; much/many, a few/a little.",
      location: "Mercado de Edimburgo",
    },
    de: {
      title: "Zählbar oder nicht?",
      summary: "Zählbar und unzählbar; much/many, a few/a little.",
      location: "Edinburgh Market",
    },
  },
  "eng-ch29-pp-intro": {
    ru: {
      title: "Ты когда-нибудь…?",
      summary: "Present perfect: have/has + V3, ever/never, just/already/yet.",
      location: "Собор Глазго",
    },
    es: {
      title: "¿Alguna Vez Has…?",
      summary: "Present perfect: have/has + V3, ever/never, just/already/yet.",
      location: "Catedral de Glasgow",
    },
    de: {
      title: "Hast du jemals…?",
      summary: "Present Perfect: have/has + V3, ever/never, just/already/yet.",
      location: "Glasgow Cathedral",
    },
  },
  "eng-ch30-conditionals-review": {
    ru: {
      title: "Если и когда",
      summary: "Нулевой, первый и второй условный — реальное и гипотетическое.",
      location: "Дублинский замок",
    },
    es: {
      title: "Si y Cuándo",
      summary: "Condicionales 0, 1 y 2 — real e hipotético.",
      location: "Castillo de Dublín",
    },
    de: {
      title: "Wenn und falls",
      summary: "Konditionalsätze 0, 1 und 2 — real und hypothetisch.",
      location: "Dublin Castle",
    },
  },
  "eng-ch31-reported-speech": {
    ru: {
      title: "Что они сказали",
      summary: "Косвенная речь: say/tell, сдвиг времён, вопросы и просьбы.",
      location: "Доки Ливерпуля",
    },
    es: {
      title: "Lo Que Dijeron",
      summary: "Estilo indirecto: say/tell, backshift, preguntas y peticiones.",
      location: "Muelles de Liverpool",
    },
    de: {
      title: "Was sie sagten",
      summary: "Indirekte Rede: say/tell, Tempusverschiebung, Fragen und Bitten.",
      location: "Liverpool Docks",
    },
  },
  "eng-ch32-relative-clauses": {
    ru: {
      title: "Кто, который, что",
      summary: "Определительные относительные придаточные: who, which, that, whose.",
      location: "Кардифф-Бей",
    },
    es: {
      title: "Quién, Cuál, Que",
      summary: "Oraciones de relativo definitorias: who, which, that, whose.",
      location: "Bahía de Cardiff",
    },
    de: {
      title: "Wer, welcher, that",
      summary: "Bestimmende Relativsätze: who, which, that, whose.",
      location: "Cardiff Bay",
    },
  },
  "eng-ch33-passive-advanced": {
    ru: {
      title: "Сделано и готово",
      summary: "Пассив во всех временах; have/get something done.",
      location: "Гавань Бостона",
    },
    es: {
      title: "Hecho y Terminado",
      summary: "Pasiva en todos los tiempos; have/get something done.",
      location: "Puerto de Boston",
    },
    de: {
      title: "Erledigt und fertig",
      summary: "Passiv in allen Zeiten; have/get something done.",
      location: "Boston Harbour",
    },
  },
  "eng-ch34-modals-deduction": {
    ru: {
      title: "Должно быть правда",
      summary: "Модальные выводы: must/might/can't; must have / might have / can't have.",
      location: "Сиднейская гавань",
    },
    es: {
      title: "Debe Ser Verdad",
      summary: "Modales de deducción: must/might/can't; must have / might have / can't have.",
      location: "Puerto de Sídney",
    },
    de: {
      title: "Muss wahr sein",
      summary: "Modalverben der Schlussfolgerung: must/might/can't; must/might/can't have.",
      location: "Sydney Harbour",
    },
  },
  "eng-ch35-ielts-informal": {
    ru: {
      title: "Письмо другу",
      summary: "IELTS GT неформальное письмо: приветствие, пункты, сокращения, концовка.",
      location: "Почта Мельбурна",
    },
    es: {
      title: "Escribe a un Amigo",
      summary: "Carta informal IELTS GT: saludo, viñetas, contracciones, cierre.",
      location: "Correo de Melbourne",
    },
    de: {
      title: "Schreib an einen Freund",
      summary: "IELTS GT informeller Brief: Anrede, Stichpunkte, Kurzformen, Schluss.",
      location: "Melbourne Post Office",
    },
  },
  "eng-ch36-ielts-formal": {
    ru: {
      title: "Формальная жалоба",
      summary: "IELTS GT формальное письмо: цель, пункты, Yours faithfully/sincerely.",
      location: "Сити-центр Окленда",
    },
    es: {
      title: "Una Queja Formal",
      summary: "Carta formal IELTS GT: propósito, viñetas, Yours faithfully/sincerely.",
      location: "Centro cívico de Auckland",
    },
    de: {
      title: "Formelle Beschwerde",
      summary: "IELTS GT formeller Brief: Zweck, Stichpunkte, Yours faithfully/sincerely.",
      location: "Auckland Civic Centre",
    },
  },
  "eng-ch37-cambridge-letter": {
    ru: {
      title: "Письмо Cambridge",
      summary: "Cambridge B2 письмо/email: полуформальный тон, структура, покрытие пунктов.",
      location: "Посольство в Веллингтоне",
    },
    es: {
      title: "Correo Cambridge",
      summary: "Carta/email Cambridge B2: tono semiformal, estructura, viñetas.",
      location: "Embajada en Wellington",
    },
    de: {
      title: "Cambridge-E-Mail",
      summary: "Cambridge B2 Brief/E-Mail: halbformeller Ton, Aufbau, Stichpunkte.",
      location: "Wellington Embassy",
    },
  },
  "eng-ch38-ielts-task1": {
    ru: {
      title: "Отчёт по данным",
      summary: "IELTS Academic Task 1: overview, тренды, сравнения, без мнения.",
      location: "Дата-центр Ванкувера",
    },
    es: {
      title: "El Informe de Datos",
      summary: "IELTS Academic Task 1: overview, tendencias, comparaciones, sin opinión.",
      location: "Centro de datos de Vancouver",
    },
    de: {
      title: "Der Datenbericht",
      summary: "IELTS Academic Task 1: Overview, Trends, Vergleiche, ohne Meinung.",
      location: "Vancouver Data Centre",
    },
  },
  "eng-ch39-ielts-essay": {
    ru: {
      title: "Архитектура эссе",
      summary: "Структура IELTS Task 2: введение, тело, заключение, тезис.",
      location: "Университетский зал Торонто",
    },
    es: {
      title: "Arquitectura del Ensayo",
      summary: "Estructura IELTS Task 2: intro, cuerpo, conclusión, tesis.",
      location: "Aula de la Universidad de Toronto",
    },
    de: {
      title: "Essay-Architektur",
      summary: "IELTS Task-2-Struktur: Intro, Hauptteil, Schluss, These.",
      location: "Toronto University Hall",
    },
  },
  "eng-ch40-ielts-cohesion": {
    ru: {
      title: "Связи между идеями",
      summary: "Когезия: however, furthermore, on the other hand, referencing.",
      location: "Библиотека Монреаля",
    },
    es: {
      title: "Enlaces entre Ideas",
      summary: "Cohesión: however, furthermore, on the other hand, referencing.",
      location: "Biblioteca de Montreal",
    },
    de: {
      title: "Verbindungen zwischen Ideen",
      summary: "Kohäsion: however, furthermore, on the other hand, referencing.",
      location: "Montreal Library",
    },
  },
  "eng-ch41-cambridge-essay": {
    ru: {
      title: "Эссе или статья?",
      summary: "Cambridge C1 essay vs article: аудитория, заголовок, регистр, формат.",
      location: "Парламент Оттавы",
    },
    es: {
      title: "¿Ensayo o Artículo?",
      summary: "Cambridge C1 essay vs article: audiencia, título, registro, formato.",
      location: "Parlamento de Ottawa",
    },
    de: {
      title: "Essay oder Artikel?",
      summary: "Cambridge C1 Essay vs Artikel: Publikum, Titel, Register, Format.",
      location: "Ottawa Parliament",
    },
  },
  "eng-ch42-ielts-opinion": {
    ru: {
      title: "Выскажи мнение",
      summary: "Язык мнения: I believe, it seems, arguably, to what extent.",
      location: "Экзаменационный зал Сингапура",
    },
    es: {
      title: "Expresa tu Opinión",
      summary: "Lenguaje de opinión: I believe, it seems, arguably, to what extent.",
      location: "Sala de examen de Singapur",
    },
    de: {
      title: "Äußere deine Meinung",
      summary: "Meinungssprache: I believe, it seems, arguably, to what extent.",
      location: "Singapore Exam Hall",
    },
  },
  "eng-ch43-register-shift": {
    ru: {
      title: "Смена регистра",
      summary: "Сдвиг регистра: formal ↔ informal, ловушки экзамена, единый тон.",
      location: "Замок IELTS",
    },
    es: {
      title: "Cambia el Registro",
      summary: "Cambio de registro: formal ↔ informal, trampas del examen, tono coherente.",
      location: "Castillo IELTS",
    },
    de: {
      title: "Registerwechsel",
      summary: "Registerwechsel: formal ↔ informal, Prüfungsfallen, einheitlicher Ton.",
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

/**
 * Title in the course target language (shown as italic subtitle).
 * Spanish course → titleEs; English course → English title (never Spanish leftovers).
 */
export function getChapterTargetTitle(
  chapter: Chapter,
  courseId?: string | null,
): string {
  const id =
    courseId ??
    (chapter.slug.startsWith("eng-")
      ? "english"
      : chapter.slug.startsWith("ru-") || chapter.slug.startsWith("rus-")
        ? "russian"
        : "spanish");
  if (id === "english") {
    // Prefer non-Spanish titleEs if data was fixed; else canonical English title.
    const te = chapter.titleEs?.trim() ?? "";
    if (te && !looksLikeSpanishChapterTitle(te)) return te;
    return chapter.title;
  }
  return chapter.titleEs || chapter.title;
}

function looksLikeSpanishChapterTitle(s: string): boolean {
  // Heuristic for leftover Spanish titles on English chapters.
  return (
    /\b(Los|Las|El|La|Un|Una|Por|Para|Qué|Quién|Si|Más|Del|De|En)\b/.test(s) ||
    /[¿¡]/.test(s)
  );
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
    if (seen.has(slug)) return false;
    seen.add(slug);
    if (!completedSlugs.has(slug)) return false;
    slug = chaptersBySlug.get(slug)?.prereqChapter;
  }
  return true;
}

/**
 * Slugs before the first chapter at `level` in curriculum order.
 * Used to credit prior bands when the learner picks A2+ at onboarding.
 */
export function getPriorChapterSlugsForLevel(
  chapters: { slug: string; level: string }[],
  level: string,
): string[] {
  const idx = chapters.findIndex((c) => c.level === level);
  if (idx <= 0) return [];
  return chapters.slice(0, idx).map((c) => c.slug);
}

/** Infer course id from chapter slug when DB course_id is missing. */
export function inferCourseIdFromChapterSlug(slug: string): string {
  if (slug.startsWith("eng-")) return "english";
  if (slug.startsWith("ru-") || slug.startsWith("rus-")) return "russian";
  return "spanish";
}
