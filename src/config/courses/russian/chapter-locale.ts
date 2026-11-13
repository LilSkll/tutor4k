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
  "ru-ch23-participles": {
    en: {
      title: "Participles",
      summary:
        "Active and passive participles as modifiers, with the participial phrase.",
      location: "Veliky Novgorod",
    },
    es: {
      title: "Participios",
      summary:
        "Participios activos y pasivos como modificadores, con el giro participial.",
      location: "Veliki Nóvgorod",
    },
    de: {
      title: "Partizipien",
      summary:
        "Aktive und passive Partizipien als Attribute, mit dem Partizipialsatz.",
      location: "Weliki Nowgorod",
    },
  },
  "ru-ch24-gerunds": {
    en: {
      title: "Gerunds",
      summary:
        "Imperfective and perfective gerunds: simultaneous action, prior action, one subject.",
      location: "Veliky Novgorod",
    },
    es: {
      title: "Gerundios",
      summary:
        "Gerundios imperfectivos y perfectivos: simultaneidad, anterioridad y un solo sujeto.",
      location: "Veliki Nóvgorod",
    },
    de: {
      title: "Adverbialpartizipien",
      summary:
        "Imperfektive und perfektive Adverbialpartizipien: gleichzeitig, vorher, ein Subjekt.",
      location: "Weliki Nowgorod",
    },
  },
  "ru-ch25-passive": {
    en: {
      title: "Passive voice",
      summary:
        "Short participles for a result and imperfective -ся for a process.",
      location: "Tver",
    },
    es: {
      title: "Voz pasiva",
      summary:
        "Participios breves para el resultado y -ся imperfectivo para el proceso.",
      location: "Tver",
    },
    de: {
      title: "Passiv",
      summary:
        "Kurzpartizipien für das Ergebnis und imperfektives -ся für den Prozess.",
      location: "Twer",
    },
  },
  "ru-ch26-reported-speech": {
    en: {
      title: "Reported speech",
      summary:
        "Reports, questions, and requests: сказал, что; спросил, где / ли; попросил.",
      location: "Tver",
    },
    es: {
      title: "Estilo indirecto",
      summary:
        "Avisos, preguntas y peticiones: сказал, что; спросил, где / ли; попросил.",
      location: "Tver",
    },
    de: {
      title: "Indirekte Rede",
      summary:
        "Mitteilung, Frage und Bitte: сказал, что; спросил, где / ли; попросил.",
      location: "Twer",
    },
  },
  "ru-ch27-conditionals": {
    en: {
      title: "Conditionals",
      summary:
        "A real если, a counterfactual если бы, and purpose with чтобы.",
      location: "Vladimir",
    },
    es: {
      title: "Condicionales",
      summary:
        "Condición real con если, irreal con если бы y finalidad con чтобы.",
      location: "Vladímir",
    },
    de: {
      title: "Konditionalgefüge",
      summary:
        "Reales если, irreales если бы und Zweck mit чтобы.",
      location: "Wladimir",
    },
  },
  "ru-ch28-formal-register": {
    en: {
      title: "Formal register",
      summary:
        "An application and a short official note: formulas, passive, no chat particles.",
      location: "Vladimir",
    },
    es: {
      title: "Registro formal",
      summary:
        "Solicitud y nota oficial: fórmulas, pasiva y sin partículas de chat.",
      location: "Vladímir",
    },
    de: {
      title: "Amtlicher Stil",
      summary:
        "Antrag und kurze Dienstnotiz: Formeln, Passiv, ohne Gesprächspartikeln.",
      location: "Wladimir",
    },
  },
  "ru-ch29-aspect-nuance": {
    en: {
      title: "Aspect nuance",
      summary:
        "General experience, a cancelled result, attempt versus success, warning versus ban.",
      location: "Moscow",
    },
    es: {
      title: "Matices del aspecto",
      summary:
        "Experiencia general, resultado anulado, intento frente a éxito, aviso frente a prohibición.",
      location: "Moscú",
    },
    de: {
      title: "Aspektnuancen",
      summary:
        "Allgemeine Erfahrung, aufgehobenes Resultat, Versuch gegen Erfolg, Warnung gegen Verbot.",
      location: "Moskau",
    },
  },
  "ru-ch30-idioms": {
    en: {
      title: "Set phrases",
      summary:
        "Fixed academic and everyday phrases, with their government kept intact.",
      location: "Moscow",
    },
    es: {
      title: "Expresiones fijas",
      summary:
        "Giros académicos y cotidianos fijos, con su régimen intacto.",
      location: "Moscú",
    },
    de: {
      title: "Feste Wendungen",
      summary:
        "Feste akademische und alltägliche Wendungen, mit ihrer Rektion.",
      location: "Moskau",
    },
  },
  "ru-ch31-advanced-argumentation": {
    en: {
      title: "Extended argument",
      summary:
        "Thesis, concession, counterargument, and conclusion in an essay or talk.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Argumentación extensa",
      summary:
        "Tesis, concesión, contraargumento y conclusión en un ensayo o una exposición.",
      location: "San Petersburgo",
    },
    de: {
      title: "Ausführliche Argumentation",
      summary:
        "These, Einräumung, Gegenargument und Schluss in Essay oder Vortrag.",
      location: "Sankt Petersburg",
    },
  },
  "ru-ch32-media-discourse": {
    en: {
      title: "Media language",
      summary:
        "Source, impersonal reporting, якобы, and the gap between headline and body.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Lenguaje de los medios",
      summary:
        "Fuente, informe impersonal, якобы y la distancia entre titular y cuerpo.",
      location: "San Petersburgo",
    },
    de: {
      title: "Mediensprache",
      summary:
        "Quelle, unpersönlicher Bericht, якобы und der Abstand von Schlagzeile und Text.",
      location: "Sankt Petersburg",
    },
  },
  "ru-ch33-registers": {
    en: {
      title: "Stylistic registers",
      summary:
        "The same fact in colloquial, neutral, and official wording.",
      location: "Kazan",
    },
    es: {
      title: "Registros estilísticos",
      summary:
        "El mismo hecho en registro coloquial, neutro y oficial.",
      location: "Kazán",
    },
    de: {
      title: "Stilregister",
      summary:
        "Derselbe Sachverhalt umgangssprachlich, neutral und amtlich.",
      location: "Kasan",
    },
  },
  "ru-ch34-literary-culture": {
    en: {
      title: "Literary commentary",
      summary:
        "Background, comparison, and naming sentences in a short cultural fragment.",
      location: "Kazan",
    },
    es: {
      title: "Comentario literario",
      summary:
        "Fondo, comparación y frases nominales en un fragmento cultural breve.",
      location: "Kazán",
    },
    de: {
      title: "Literarischer Kommentar",
      summary:
        "Hintergrund, Vergleich und Nominativsätze in einem kurzen kulturellen Fragment.",
      location: "Kasan",
    },
  },
  "ru-ch35-professional-academic": {
    en: {
      title: "Professional speech",
      summary:
        "A short paper talk, a hedged conclusion, and polite disagreement.",
      location: "Nizhny Novgorod",
    },
    es: {
      title: "Habla profesional",
      summary:
        "Una exposición breve, una conclusión con límite y un desacuerdo cortés.",
      location: "Nizhni Nóvgorod",
    },
    de: {
      title: "Fachsprache",
      summary:
        "Ein kurzer Vortrag, ein begrenzter Schluss und höflicher Widerspruch.",
      location: "Nischni Nowgorod",
    },
  },
  "ru-ch36-pragmatic-mastery": {
    en: {
      title: "Pragmatic nuance",
      summary:
        "Particles and word order: what is contrasted, assumed, or new.",
      location: "Moscow",
    },
    es: {
      title: "Matiz pragmático",
      summary:
        "Partículas y orden: qué se contrasta, qué se da por sabido y qué es nuevo.",
      location: "Moscú",
    },
    de: {
      title: "Pragmatische Nuance",
      summary:
        "Partikeln und Wortstellung: Kontrast, gemeinsame Gründe und neuer Fokus.",
      location: "Moskau",
    },
  },
  "ru-ch37-classroom-survival": {
    en: {
      title: "Classroom survival",
      summary:
        "Permission and bans in class, and polite requests to a lecturer.",
      location: "Nizhny Novgorod",
    },
    es: {
      title: "Supervivencia en el aula",
      summary:
        "Permiso y prohibición en clase, y peticiones corteses al profesor.",
      location: "Nizhni Nóvgorod",
    },
    de: {
      title: "Sätze für den Hörsaal",
      summary:
        "Erlaubnis und Verbot in der Stunde und höfliche Bitten an die Lehrperson.",
      location: "Nischni Nowgorod",
    },
  },
  "ru-ch38-services-invitations": {
    en: {
      title: "Services and invitations",
      summary:
        "Book an appointment, move a meeting, and answer an invitation.",
      location: "Sochi",
    },
    es: {
      title: "Servicios e invitaciones",
      summary:
        "Pedir cita, aplazar una reunión y responder a una invitación.",
      location: "Sochi",
    },
    de: {
      title: "Dienste und Einladungen",
      summary:
        "Einen Termin machen, ein Treffen verschieben und auf eine Einladung antworten.",
      location: "Sotschi",
    },
  },
  "ru-ch39-government-verbs": {
    en: {
      title: "Verb government",
      summary:
        "Contrast drills: the case that belongs to each verb.",
      location: "Pskov",
    },
    es: {
      title: "Régimen verbal",
      summary: "Contrastes: el caso que pertenece a cada verbo.",
      location: "Pskov",
    },
    de: {
      title: "Rektion",
      summary: "Kontraste: der Kasus, der zu jedem Verb gehört.",
      location: "Pskow",
    },
  },
  "ru-ch40-participle-preview": {
    en: {
      title: "A relative and a short participle",
      summary:
        "A bridge toward B2: the relative stays safe, and a short participle replaces a simple one.",
      location: "Pskov",
    },
    es: {
      title: "Un relativo y un participio corto",
      summary:
        "Un puente hacia B2: el relativo sigue siendo seguro y el participio corto sustituye un relativo simple.",
      location: "Pskov",
    },
    de: {
      title: "Ein Relativsatz und ein kurzes Partizip",
      summary:
        "Eine Brücke zu B2: das Relativpronomen bleibt sicher, ein kurzes Partizip ersetzt nur einen einfachen Relativsatz.",
      location: "Pskow",
    },
  },
  "ru-ch41-opinion-structures": {
    en: {
      title: "Opinion and agreement",
      summary:
        "Frame a view, agree, or disagree and give a reason.",
      location: "Pskov",
    },
    es: {
      title: "Opinión y acuerdo",
      summary:
        "Enmarque una opinión, muestre acuerdo o discrepe con un motivo.",
      location: "Pskov",
    },
    de: {
      title: "Meinung und Zustimmung",
      summary:
        "Eine Meinung rahmen, zustimmen oder mit einem Grund widersprechen.",
      location: "Pskow",
    },
  },
  "ru-ch42-syntax-complexity": {
    en: {
      title: "Several subordinate clauses",
      summary:
        "One main clause and two subordinates, each with its own conjunction.",
      location: "Vladimir",
    },
    es: {
      title: "Varias subordinadas",
      summary:
        "Una principal y dos subordinadas, cada una con su conjunción.",
      location: "Vladímir",
    },
    de: {
      title: "Mehrere Nebensätze",
      summary:
        "Ein Hauptsatz und zwei Nebensätze, jeder mit eigener Konjunktion.",
      location: "Wladimir",
    },
  },
  "ru-ch43-written-discourse": {
    en: {
      title: "Paragraph cohesion",
      summary:
        "One microtheme per paragraph, one linker, and no third repetition.",
      location: "Vladimir",
    },
    es: {
      title: "Cohesión del párrafo",
      summary:
        "Una microtema por párrafo, un nexo y sin una tercera repetición.",
      location: "Vladímir",
    },
    de: {
      title: "Absatzkohäsion",
      summary:
        "Ein Mikrothema pro Absatz, ein Verknüpfungswort und keine dritte Wiederholung.",
      location: "Wladimir",
    },
  },
  "ru-ch44-critique-review": {
    en: {
      title: "Review and concession",
      summary:
        "A strength, a limit, and a concession that does not erase the judgment.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Reseña y concesión",
      summary:
        "Un punto fuerte, un límite y una concesión que no borra el juicio.",
      location: "San Petersburgo",
    },
    de: {
      title: "Rezension und Einräumung",
      summary:
        "Eine Stärke, eine Grenze und eine Einräumung, die das Urteil nicht löscht.",
      location: "Sankt Petersburg",
    },
  },
  "ru-ch45-academic-writing": {
    en: {
      title: "Academic writing",
      summary:
        "Frames for a short paper: aim, method, border, and a conclusion.",
      location: "Saint Petersburg",
    },
    es: {
      title: "Escritura académica",
      summary:
        "Marcos de un trabajo breve: objetivo, método, límite y conclusión.",
      location: "San Petersburgo",
    },
    de: {
      title: "Akademisches Schreiben",
      summary:
        "Rahmen einer kurzen Arbeit: Ziel, Methode, Grenze und Schluss.",
      location: "Sankt Petersburg",
    },
  },
};
