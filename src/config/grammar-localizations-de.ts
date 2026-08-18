import type { InterfaceLanguage } from "@/types";
import type { GrammarLocaleFields } from "@/config/grammar-localizations";

/** German UI overlays for grammar titles / summaries / categories. */
export const DE_GRAMMAR_CATEGORY: Record<string, string> = {
  Determinantes: "Bestimmungswörter",
  Глаголы: "Verben",
  Существительные: "Substantive",
  Лексика: "Wortschatz",
  Предлоги: "Präpositionen",
  Синтаксис: "Syntax",
  "Прошедшие времена": "Vergangenheitszeiten",
  Прилагательные: "Adjektive",
  "Будущее время": "Zukunft",
  Наклонения: "Modi",
  Местоимения: "Pronomen",
  Наречия: "Adverbien",
  Стилистика: "Stilistik",
  // English-course category keys (stored in Russian on topics)
  Времена: "Zeiten",
  Конструкции: "Konstruktionen",
  Модальные: "Modalverben",
  "Времена / Условия": "Zeiten / Konditionale",
  Условия: "Konditionale",
  Залог: "Genus Verbi",
  Дискурс: "Diskurs",
  "Условия / Залог": "Konditionale / Genus Verbi",
  "Подготовка к экзамену": "Prüfungsvorbereitung",
  "Подготовка к DELE": "DELE-Vorbereitung",
  Определители: "Bestimmungswörter",
  Артикли: "Artikel",
  Условные: "Konditionale",
  Речь: "Rede",
  "Сложное предложение": "Komplexe Sätze",
  "Письмо / IELTS": "Schreiben / IELTS",
  "Письмо / Cambridge": "Schreiben / Cambridge",
  "Стиль / Exam": "Stil / Prüfung",
};

export const DE_GRAMMAR_TOPIC: Record<string, GrammarLocaleFields> = {
  "a1-articulos": {
    title: "Artikel",
    summary:
      "el/la/los/las und un/una: bekannt vs irgendein; Ausnahme el agua (nicht la abuela).",
  },
  "a1-ser-estar": {
    title: "Ser / Estar",
    summary:
      "Erstes Thema: Begrüßung und zwei Verben für „sein“ — wer du bist vs. wie du dich fühlst.",
  },
  "a1-presente": {
    title: "Präsens (Indikativ)",
    summary: "Präsens: drei Verb-Familien (-ar / -er / -ir) und warum die Endung wechselt.",
  },
  "a1-genero-numero": {
    title: "Genus und Numerus",
    summary:
      "Maskulin/feminin und eins/viele; Ausnahmen problema, mano, agua vs abuela.",
  },
  "a1-numeros-1-100": {
    title: "Zahlen, Tage und Uhrzeit",
    summary: "Zahlen 1–100, Wochentage, Monate und Uhrzeit.",
  },
  "a1-preposiciones-lugar": {
    title: "Ortspräpositionen",
    summary: "en, a, de, sobre, debajo, delante — wo sich etwas befindet.",
  },
  "a1-gustar": {
    title: "Verb Gustar",
    summary:
      "Das besondere Verb „gefallen“ — konjugiert nach dem Gefallenen, nicht nach der Person.",
  },
  "a1-tener-expressions": {
    title: "Ausdrücke mit Tener",
    summary: "tener hambre/frío/sueño/razón — häufige Zustandsausdrücke.",
  },
  "a1-preguntas": {
    title: "Fragesätze",
    summary: "¿Qué? ¿Cómo? ¿Dónde? — Fragewörter und ihr Gebrauch.",
  },
  "a1-verbos-frecuentes": {
    title: "Häufige Verben",
    summary: "ir, tener, hacer, poder, querer, decir — wichtige Unregelmäßige.",
  },
  "a2-preterito-perfecto": {
    title: "Pretérito Perfecto",
    summary: "Abgeschlossene Handlung mit Bezug zur Gegenwart.",
  },
  "a2-preterito-indefinido": {
    title: "Pretérito Indefinido",
    summary: "Abgeschlossene Handlung zu einem bestimmten Zeitpunkt in der Vergangenheit.",
  },
  "a2-imperfecto": {
    title: "Pretérito Imperfecto",
    summary:
      "Hintergrund in der Vergangenheit: Gewohnheiten, Beschreibungen, andauernde Handlungen.",
  },
  "a2-por-para": {
    title: "Por vs Para",
    summary: "Zwei Präpositionen für „für/durch“ — eine Kernschwierigkeit im Spanischen.",
  },
  "a2-comparativos": {
    title: "Komparativ und Superlativ",
    summary: "más/menos, tan…como und el más… — Vergleichsformen.",
  },
  "a2-futuro-simple": {
    title: "Futuro Simple",
    summary: "Einfache Zukunft: Pläne, Vorhersagen, Versprechen.",
  },
  "b1-subjuntivo": {
    title: "Subjuntivo (Präsens)",
    summary: "Konjunktiv für Wünsche, Zweifel und Emotionen.",
  },
  "b1-imperativo": {
    title: "Imperativo",
    summary: "Befehle, Bitten und Ratschläge.",
  },
  "b1-condicional": {
    title: "Condicional Simple",
    summary: "Höfliche Bitten, Hypothesen und Wünsche.",
  },
  "b1-preposiciones-por-para-2": {
    title: "Pronomen SE",
    summary: "Unpersönliches se, Passiv-se, reziprokes se — mehrere Verwendungen.",
  },
  "b1-relativos": {
    title: "Relativpronomen",
    summary: "que, quien, el que, cuyo, donde — komplexe Sätze verbinden.",
  },
  "b1-pluscuamperfecto": {
    title: "Pluscuamperfecto",
    summary: "Eine Handlung, die vor einer anderen Vergangenheit lag.",
  },
  "b1-subjuntivo-imperfecto": {
    title: "Imperfecto de Subjuntivo",
    summary:
      "Konjunktiv in Vergangenheit/Irrealis: Hypothesen und irreale Bedingungen.",
  },
  "b1-pronombres-objetos": {
    title: "Objektpronomen",
    summary: "Direktes und indirektes Objekt: me, te, lo, le, se — wann welches.",
  },
  "b1-adverbios": {
    title: "Adverbien",
    summary: "Adverbien auf -mente, Zeit, Ort, Art und Weise sowie Zweifel.",
  },
  "b2-estilo-indirecto": {
    title: "Indirekte Rede",
    summary: "Indirekte Rede: Worte und Gedanken anderer wiedergeben.",
  },
  "b2-voz-pasiva": {
    title: "Passiv",
    summary: "Passiv und die natürliche Alternative — pasiva refleja.",
  },
  "b2-subjuntivo-compuestos": {
    title: "Zusammengesetzter Subjuntivo",
    summary: "Perfecto und Pluscuamperfecto im Konjunktiv.",
  },
  "b2-condicionales-compuestos": {
    title: "Zusammengesetztes Condicional",
    summary: "Konditional Perfekt: habría + Partizip.",
  },
  "b2-relativos-avanzado": {
    title: "Erweiterte Relativsätze",
    summary: "lo que, el cual, donde, como, cuando — fortgeschrittene Verknüpfung.",
  },
  "b2-conectores": {
    title: "Diskursmarker",
    summary: "además, sin embargo, por lo tanto — logische Konnektoren.",
  },
  "c1-perifrasis-verbales": {
    title: "Verbale Periphrasen",
    summary: "Komplexe Verbgefüge: Notwendigkeit, Beginn, Ende.",
  },
  "c1-matices-estilisticos": {
    title: "Stilistische Nuancen",
    summary: "Feine Bedeutungen: Register, Höflichkeit, Modalität.",
  },
  "c1-subjuntivo-avanzado": {
    title: "Fortgeschrittener Subjuntivo",
    summary: "Zweifelhafte und feste Fälle: aunque, donde, como, Relativsätze.",
  },
  "c1-indirecto-avanzado": {
    title: "Erweiterte indirekte Rede",
    summary: "Vollständiges Zeitenrückverschiebungssystem + Fragen und Befehle.",
  },
  "c1-pronombres-avanzado": {
    title: "Erweiterte Pronomen",
    summary: "lo + Adjektiv, Verdopplung, leísmo, Reduplikation — Feinheiten.",
  },
  "c1-ser-estar-avanzado": {
    title: "Ser/Estar: fortgeschritten",
    summary: "Bedeutungsverschiebungen bei Adjektiven, feste Wendungen, Grenzfälle.",
  },
  "c2-ironia-registry": {
    title: "Ironie und Register (C2)",
    summary: "Ironischer Subjuntivo, formelles/informelles Register, Rhetorik.",
  },

  // English course
  "eng-a1-be": {
    title: "Verb be (am/is/are)",
    summary: "Das Verb „to be“ im Präsens: am, is, are.",
  },
  "eng-a1-present-simple": {
    title: "Present Simple",
    summary: "Simple Present: Routinen, Fakten, regelmäßige Handlungen.",
  },
  "eng-a1-there-is-are": {
    title: "There is / There are",
    summary: "Existenz und Ort: there is (Singular), there are (Plural).",
  },
  "eng-a1-can": {
    title: "Can / Can't",
    summary: "Modalverb can: Fähigkeit und Möglichkeit.",
  },
  "eng-a1-questions": {
    title: "W-Fragen",
    summary: "What, who, where, when, why, how.",
  },
  "eng-a1-prepositions": {
    title: "Ortspräpositionen",
    summary: "in, on, at, under, between, next to.",
  },
  "eng-a2-past-simple": {
    title: "Past Simple",
    summary: "Simple Past: regelmäßige und unregelmäßige Verben.",
  },
  "eng-a2-comparatives": {
    title: "Komparativ & Superlativ",
    summary: "Komparativ und Superlativ der Adjektive.",
  },
  "eng-a2-present-perfect": {
    title: "Present Perfect",
    summary: "Vergangenheit mit Gegenwartsbezug: Erfahrung und Ergebnis.",
  },
  "eng-a2-going-to": {
    title: "Going to",
    summary: "be going to für Pläne und Absichten.",
  },
  "eng-a2-quantifiers": {
    title: "Some / Any / Much / Many",
    summary: "Quantoren bei zählbaren und unzählbaren Nomen.",
  },
  "eng-b1-future-conditional": {
    title: "Zukunft & First Conditional",
    summary: "will/won't und First Conditional.",
  },
  "eng-b1-modals": {
    title: "Should / Must / Have to",
    summary: "Rat und Pflicht: should, must, have to.",
  },
  "eng-b1-narrative": {
    title: "Erzählzeiten",
    summary: "Past Continuous, used to, Past Perfect — Geschichten erzählen.",
  },
  "eng-b1-perfect-continuous": {
    title: "Present Perfect Continuous",
    summary: "have/has been + V-ing: Dauer einer Handlung.",
  },
  "eng-b2-conditionals": {
    title: "Second & Third Conditional",
    summary: "Irreale Bedingungen: Gegenwart (2.) und Vergangenheit (3.).",
  },
  "eng-b2-passive": {
    title: "Passiv",
    summary: "Passiv in allen Zeiten; have something done.",
  },
  "eng-b2-reported-clauses": {
    title: "Indirekte Rede & Relativsätze",
    summary: "Indirekte Rede und Relativpronomen.",
  },
  "eng-c1-inversion": {
    title: "Inversion & Emphase",
    summary: "Inversion zur Betonung, Cleft Sentences, emphatisches do/does.",
  },
  "eng-c1-discourse": {
    title: "Diskurs: Substitution, Ellipsis, Fronting",
    summary: "Fortgeschrittene Kohäsionsmittel in Sprache und Schrift.",
  },
  "eng-c1-mixed-conditionals": {
    title: "Gemischte Konditionale & erweitertes Passiv",
    summary: "Mixed Conditionals und fortgeschrittene Passivformen.",
  },
  "eng-c1-review": {
    title: "Gesamtrepetition + IELTS",
    summary: "Vollständige Wiederholung aller Themen plus IELTS-Fähigkeiten.",
  },
  "c2-oraciones-hendidas": {
    title: "Emphase: Spaltsätze",
    summary:
      "Oraciones hendidas: «Fue Juan quien…», «Lo que necesito es…» — Fokus und Hervorhebung.",
  },
  "c2-conjetura-rumor": {
    title: "Vermutung und Gerüchte: futuro y condicional",
    summary:
      "«Serán las diez» — wohl zehn Uhr. «Habría mil personas» — Berichten zufolge etwa tausend.",
  },
  "c2-estilo-culto": {
    title: "Gehobener Stil: absolute Konstruktionen",
    summary:
      "Participio absoluto («Terminada la reunión…»), gerundio absoluto, Nominalisierung — Schriftregister.",
  },
  "dele-contraste-pasados": {
    title: "DELE: Kontrast der Vergangenheitszeiten",
    summary:
      "Indefinido vs. Imperfecto vs. Perfecto vs. Pluscuamperfecto — Falle Nr. 1 im DELE.",
  },
  "dele-carta-formal": {
    title: "DELE: formeller und informeller Brief",
    summary:
      "Briefformeln für die Expresión escrita: Anreden, höfliche Bitten, Grußformeln.",
  },
  "dele-conectores-redaccion": {
    title: "DELE: Konnektoren für den Aufsatz",
    summary:
      "Aufsatzgerüst: en primer lugar, no obstante, en definitiva + Meinung mit indicativo/subjuntivo.",
  },
  "dele-expresion-oral": {
    title: "DELE: mündlicher Teil",
    summary:
      "Fotobeschreibung, Hypothesen (futuro de conjetura), Meinung, Zustimmung/Widerspruch, Füllwörter.",
  },
  "eng-c2-cleft-emphasis": {
    title: "Cleft Sentences und Emphase",
    summary:
      "It was John who…, What I need is…, emphatisches do — Hervorhebung und Fokus.",
  },
  "eng-c2-ellipsis-substitution": {
    title: "Ellipse und Substitution",
    summary: "So do I, I hope so, if not — wie Muttersprachler Wiederholungen vermeiden.",
  },
  "eng-c2-hedging-nuance": {
    title: "Hedging und Understatement",
    summary:
      "It could be argued…, not entirely convinced, britisches Understatement und höfliche Kritik.",
  },
  "eng-a1-articles-basics": {
    title: "Artikel a/an/the",
    summary: "a/an vs the vs Nullartikel; nach dem Laut wählen, nicht nach dem Buchstaben.",
  },
  "eng-a1-possessives": {
    title: "Possessiva my/your und 's",
    summary: "my/your/his… und sächsischer Genitiv. its ≠ it's.",
  },
  "eng-a1-can-ability": {
    title: "Can / can't — Können und Erlaubnis",
    summary: "I can swim; Can I…?; Can you help? Infinitiv ohne to.",
  },
  "eng-a2-countable": {
    title: "Zählbar und unzählbar",
    summary: "many/much, a few/a little, some/any; advice und information ohne -s.",
  },
  "eng-a2-present-perfect-intro": {
    title: "Present Perfect: just/already/yet",
    summary: "have + V3 für Erfahrung mit Jetzt; yesterday bleibt Past Simple.",
  },
  "eng-b1-conditionals-review": {
    title: "Konditionale 0 / 1 / 2",
    summary: "If + present; if + present → will; if + past → would. If I were you.",
  },
  "eng-b1-reported-speech": {
    title: "Indirekte Rede (Basis)",
    summary: "say/tell und Zeitverschiebung; Fragen ohne do.",
  },
  "eng-b1-relative-clauses": {
    title: "Relativsätze who/which/that",
    summary: "Defining ohne Kommas; whose; that als Objekt kann weg.",
  },
  "eng-b2-passive-advanced": {
    title: "Passiv in allen Zeiten",
    summary: "be + V3; have/get something done für Dienstleistungen.",
  },
  "eng-b2-modals-deduction": {
    title: "Modalverben der Schlussfolgerung",
    summary: "must/might/can't für Sicherheit; must have left in der Vergangenheit.",
  },
  "eng-ielts-letter-informal": {
    title: "IELTS GT: informeller Brief",
    summary: "Freundschaftsbrief: 4 Blöcke, ~150 Wörter, drei Bullets, informelles Register.",
  },
  "eng-ielts-letter-formal": {
    title: "IELTS GT: formeller Brief",
    summary: "Beschwerde/Anfrage: Yours faithfully vs sincerely, 5 Blöcke, ~150 Wörter.",
  },
  "eng-ielts-essay-structure": {
    title: "IELTS Academic: Essay-Struktur",
    summary: "Task 2: 4 Absätze, 250+ Wörter, Fragetyp treffen, keine neuen Ideen im Schluss.",
  },
  "eng-ielts-essay-cohesion": {
    title: "IELTS: Kohäsion",
    summary: "Linker nach Funktion, Referencing, eine Idee pro Absatz.",
  },
  "eng-ielts-task1-report": {
    title: "IELTS Academic Task 1: Grafiken",
    summary: "Paraphrase, Overview, Kernmerkmale; Trendsprache; ~150 Wörter; nicht spekulieren.",
  },
  "eng-cambridge-letter-email": {
    title: "Cambridge B2 First: Brief und E-Mail",
    summary: "Informell / formell / semi-formell, Layout und CA-Kriterium.",
  },
  "eng-cambridge-essay-article": {
    title: "Cambridge: Essay vs Article",
    summary: "Verschiedene Genres: These vs Hook; alle Notes; Wortzahlen B2/C1.",
  },
  "eng-ielts-opinion-language": {
    title: "Meinungs- und Argumentationssprache",
    summary: "Stärke der Behauptung, Hedging, Konzession + Gegenangriff.",
  },
  "eng-cbe-register-shift": {
    title: "Register: vom Chat zum Formalen",
    summary: "Informell / neutral / formell; WhatsApp-Test; Anrede und Schluss müssen zusammenpassen.",
  },
};

export function getDeTopicFields(
  slug: string,
): GrammarLocaleFields | undefined {
  return DE_GRAMMAR_TOPIC[slug];
}

export function getDeCategory(category: string): string | undefined {
  return DE_GRAMMAR_CATEGORY[category];
}

/** Merge helper for typed locale maps. */
export function withDeLocale<T extends Partial<Record<InterfaceLanguage, GrammarLocaleFields>>>(
  slug: string,
  existing?: T,
): T {
  const de = DE_GRAMMAR_TOPIC[slug];
  if (!de) return (existing ?? {}) as T;
  return { ...(existing ?? {}), de } as T;
}
