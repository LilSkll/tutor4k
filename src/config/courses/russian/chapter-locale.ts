import type { InterfaceLanguage } from "@/types";

export type RussianChapterLocale = {
  title: string;
  summary: string;
  location: string;
};

/**
 * UI-language overrides for RKI chapter cards (summary / location / title).
 * Russian source fields stay on Chapter; this map is explanation language only.
 */
export const RUSSIAN_CHAPTER_LOCALE: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, RussianChapterLocale>>
> = {
  "ru-ch1-alphabet-greetings": {
    en: {
      title: "Alphabet and greetings",
      summary:
        "In this topic: how to read Russian and how to greet people at university. Cyrillic, hard sounds, and ты/вы.",
      location: "Moscow",
    },
    es: {
      title: "Alfabeto y saludos",
      summary:
        "En este tema: cómo leer en ruso y cómo saludar en la universidad. Cirílico, sonidos difíciles y ты/вы.",
      location: "Moscú",
    },
    de: {
      title: "Alphabet und Begrüßungen",
      summary:
        "In diesem Thema: Russisch lesen und an der Uni begrüßen. Kyrillisch, schwierige Laute und ты/вы.",
      location: "Moskau",
    },
  },
  "ru-ch2-introduce-yourself": {
    en: {
      title: "Introducing yourself",
      summary:
        "Say your name, ask others’, say where you are from; кто это / что это in your group.",
      location: "MSU, Moscow",
    },
    es: {
      title: "Presentarse",
      summary:
        "Decir el nombre, preguntar el de otros, decir de dónde eres; кто это / что это en el grupo.",
      location: "MGU, Moscú",
    },
    de: {
      title: "Sich vorstellen",
      summary:
        "Namen sagen und fragen, Herkunft nennen; кто это / что это in der Gruppe.",
      location: "MGU, Moskau",
    },
  },
  "ru-ch3-noun-gender": {
    en: {
      title: "Noun gender",
      summary:
        "Мой учебник / моя тетрадь / моё окно — gender through classroom objects.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Género de los sustantivos",
      summary:
        "Мой учебник / моя тетрадь / моё окно — el género a través de objetos del aula.",
      location: "San Petersburgo",
    },
    de: {
      title: "Genus der Substantive",
      summary:
        "Мой учебник / моя тетрадь / моё окно — Genus über Gegenstände im Hörsaal.",
      location: "Sankt Petersburg",
    },
  },
  "ru-ch4-present-tense": {
    en: {
      title: "Present tense",
      summary: "Present-tense conjugation; я читаю, он работает.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Presente",
      summary: "Conjugación en presente; я читаю, он работает.",
      location: "San Petersburgo",
    },
    de: {
      title: "Präsens",
      summary: "Konjugation im Präsens; я читаю, он работает.",
      location: "Sankt Petersburg",
    },
  },
  "ru-ch5-accusative": {
    en: {
      title: "Accusative case",
      summary: "Кого? Что? — direct objects after action verbs.",
      location: "Kazan",
    },
    es: {
      title: "Caso acusativo",
      summary: "¿Кого? ¿Что? — complemento directo tras verbos de acción.",
      location: "Kazán",
    },
    de: {
      title: "Akkusativ",
      summary: "Кого? Что? — direktes Objekt nach Handlungsverben.",
      location: "Kasan",
    },
  },
  "ru-ch6-university-day": {
    en: {
      title: "A day at university",
      summary:
        "Timetable, classroom, addressing a teacher — consolidating A1.",
      location: "Kazan",
    },
    es: {
      title: "Un día en la universidad",
      summary:
        "Horario, aula, dirigirse al profesor — consolidación de A1.",
      location: "Kazán",
    },
    de: {
      title: "Ein Tag an der Uni",
      summary:
        "Stundenplan, Hörsaal, Anrede an Dozierende — Festigung von A1.",
      location: "Kasan",
    },
  },
  "ru-ch7-prepositional": {
    en: {
      title: "Prepositional case",
      summary: "Где? О ком? О чём? — в / на + prepositional case.",
      location: "Nizhny Novgorod",
    },
    es: {
      title: "Caso preposicional",
      summary: "¿Где? ¿О ком? ¿О чём? — в / на + caso preposicional.",
      location: "Nizhni Nóvgorod",
    },
    de: {
      title: "Präpositiv",
      summary: "Где? О ком? О чём? — в / на + Präpositiv.",
      location: "Nischni Nowgorod",
    },
  },
  "ru-ch8-numbers-time": {
    en: {
      title: "Numbers and time",
      summary: "Numerals, telling the time, «во сколько?» — everyday dialogues.",
      location: "Nizhny Novgorod",
    },
    es: {
      title: "Números y la hora",
      summary: "Numerales, la hora, «во сколько?» — diálogos cotidianos.",
      location: "Nizhni Nóvgorod",
    },
    de: {
      title: "Zahlen und Uhrzeit",
      summary: "Zahlwörter, Uhrzeit, «во сколько?» — Alltagsdialoge.",
      location: "Nischni Nowgorod",
    },
  },
  // A2–B1: titles/summaries localized for UI; full grammar articles later.
  "ru-ch9-past-tense": {
    en: {
      title: "Past tense",
      summary: "Был / была / было / были; talking about yesterday.",
      location: "Yekaterinburg",
    },
    es: {
      title: "Pasado",
      summary: "Был / была / было / были; hablar de ayer.",
      location: "Ekaterimburgo",
    },
    de: {
      title: "Vergangenheit",
      summary: "Был / была / было / были; über gestern sprechen.",
      location: "Jekaterinburg",
    },
  },
  "ru-ch10-future": {
    en: {
      title: "Future tense",
      summary: "Simple and compound future for plans and schedules.",
      location: "Yekaterinburg",
    },
    es: {
      title: "Futuro",
      summary: "Futuro simple y compuesto para planes y horarios.",
      location: "Ekaterimburgo",
    },
    de: {
      title: "Futur",
      summary: "Einfaches und zusammengesetztes Futur für Pläne.",
      location: "Jekaterinburg",
    },
  },
  "ru-ch11-genitive": {
    en: {
      title: "Genitive case",
      summary: "Possession, quantity, negation with нет.",
      location: "Novosibirsk",
    },
    es: {
      title: "Caso genitivo",
      summary: "Posesión, cantidad, negación con нет.",
      location: "Novosibirsk",
    },
    de: {
      title: "Genitiv",
      summary: "Besitz, Menge, Verneinung mit нет.",
      location: "Nowosibirsk",
    },
  },
  "ru-ch12-dative": {
    en: {
      title: "Dative case",
      summary: "Indirect object: кому? чему? — giving, helping, liking.",
      location: "Novosibirsk",
    },
    es: {
      title: "Caso dativo",
      summary: "Complemento indirecto: кому? чему? — dar, ayudar, gustar.",
      location: "Novosibirsk",
    },
    de: {
      title: "Dativ",
      summary: "Indirektes Objekt: кому? чему? — geben, helfen, gefallen.",
      location: "Nowosibirsk",
    },
  },
  "ru-ch13-instrumental": {
    en: {
      title: "Instrumental case",
      summary: "Means and company: кем? чем? — with / by means of.",
      location: "Vladivostok",
    },
    es: {
      title: "Caso instrumental",
      summary: "Medio y compañía: кем? чем? — con / mediante.",
      location: "Vladivostok",
    },
    de: {
      title: "Instrumental",
      summary: "Mittel und Begleitung: кем? чем? — mit / mittels.",
      location: "Wladiwostok",
    },
  },
  "ru-ch14-aspect-intro": {
    en: {
      title: "Aspect introduction",
      summary: "Imperfective vs perfective — process vs result at A2.",
      location: "Vladivostok",
    },
    es: {
      title: "Introducción al aspecto",
      summary: "Imperfectivo vs perfectivo — proceso vs resultado en A2.",
      location: "Vladivostok",
    },
    de: {
      title: "Aspekt-Einführung",
      summary: "Imperfektiv vs. perfektiv — Prozess vs. Ergebnis auf A2.",
      location: "Wladiwostok",
    },
  },
  "ru-ch15-motion-basic": {
    en: {
      title: "Basic motion verbs",
      summary: "Идти / ходить, ехать / ездить — unidirectional vs multidirectional.",
      location: "Sochi",
    },
    es: {
      title: "Verbos de movimiento básicos",
      summary: "Идти / ходить, ехать / ездить — unidireccional vs multidireccional.",
      location: "Sochi",
    },
    de: {
      title: "Grundlegende Bewegungsverben",
      summary: "Идти / ходить, ехать / ездить — uni- vs. multidirektional.",
      location: "Sotschi",
    },
  },
  "ru-ch16-dorm-shops": {
    en: {
      title: "Dorm and shops",
      summary: "Everyday campus and shopping phrases with known cases.",
      location: "Sochi",
    },
    es: {
      title: "Residencia y tiendas",
      summary: "Frases cotidianas del campus y de compras con casos conocidos.",
      location: "Sochi",
    },
    de: {
      title: "Wohnheim und Läden",
      summary: "Alltagsphrasen auf dem Campus und beim Einkaufen.",
      location: "Sotschi",
    },
  },
  "ru-ch17-cases-review": {
    en: {
      title: "Cases review",
      summary: "All six cases in short communicative contexts.",
      location: "Kaliningrad",
    },
    es: {
      title: "Repaso de casos",
      summary: "Los seis casos en contextos comunicativos breves.",
      location: "Kaliningrado",
    },
    de: {
      title: "Kasus-Wiederholung",
      summary: "Alle sechs Kasus in kurzen kommunikativen Kontexten.",
      location: "Kaliningrad",
    },
  },
  "ru-ch18-aspect-system": {
    en: {
      title: "Aspect system",
      summary: "Choosing aspect in narration and instructions (B1).",
      location: "Kaliningrad",
    },
    es: {
      title: "Sistema aspectual",
      summary: "Elegir el aspecto en narración e instrucciones (B1).",
      location: "Kaliningrado",
    },
    de: {
      title: "Aspektsystem",
      summary: "Aspektwahl in Erzählung und Anweisungen (B1).",
      location: "Kaliningrad",
    },
  },
  "ru-ch19-motion-prefixes": {
    en: {
      title: "Motion with prefixes",
      summary: "Prefix + motion verb: arrival, departure, crossing.",
      location: "Yaroslavl",
    },
    es: {
      title: "Movimiento con prefijos",
      summary: "Prefijo + verbo de movimiento: llegada, salida, cruce.",
      location: "Yaroslavl",
    },
    de: {
      title: "Bewegung mit Präfixen",
      summary: "Präfix + Bewegungsverb: Ankunft, Abfahrt, Überqueren.",
      location: "Jaroslawl",
    },
  },
  "ru-ch20-complex-sentences": {
    en: {
      title: "Complex sentences",
      summary: "Connectors: потому что, чтобы, хотя, если.",
      location: "Yaroslavl",
    },
    es: {
      title: "Oraciones complejas",
      summary: "Conectores: потому что, чтобы, хотя, если.",
      location: "Yaroslavl",
    },
    de: {
      title: "Komplexe Sätze",
      summary: "Konnektoren: потому что, чтобы, хотя, если.",
      location: "Jaroslawl",
    },
  },
  "ru-ch21-narration-cohesion": {
    en: {
      title: "Narration and cohesion",
      summary: "Linking devices for longer stories and reports.",
      location: "Pskov",
    },
    es: {
      title: "Narración y cohesión",
      summary: "Marcadores para relatos e informes más largos.",
      location: "Pskov",
    },
    de: {
      title: "Erzählung und Kohäsion",
      summary: "Verknüpfungsmittel für längere Erzählungen und Berichte.",
      location: "Pskow",
    },
  },
  "ru-ch22-academic-social": {
    en: {
      title: "Academic and social talk",
      summary: "Register for faculty office hours and informal campus talk.",
      location: "Pskov",
    },
    es: {
      title: "Habla académica y social",
      summary: "Registro en despacho y en el campus informal.",
      location: "Pskov",
    },
    de: {
      title: "Akademisch und sozial",
      summary: "Register in der Sprechstunde und im informellen Campusgespräch.",
      location: "Pskow",
    },
  },
};
