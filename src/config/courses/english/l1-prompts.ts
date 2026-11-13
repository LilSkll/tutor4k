import type { InterfaceLanguage, StaticExercise } from "@/types";

const CYR = /[\u0400-\u04FF]/;

type Cue = { ru: string; en: string; es: string; de: string };

type Practice = Pick<
  StaticExercise,
  "type" | "question" | "instruction" | "grammarTopic" | "answer"
> & {
  questionTranslations?: Partial<Record<InterfaceLanguage, string>>;
};

const BE: Cue = {
  ru: "Какая форма глагола be?",
  en: "Which form of be?",
  es: "¿Qué forma de be?",
  de: "Welche Form von be?",
};
const VERB: Cue = {
  ru: "Какая форма глагола?",
  en: "Which verb form?",
  es: "¿Qué forma verbal?",
  de: "Welche Verbform?",
};
const ART: Cue = {
  ru: "Какой артикль?",
  en: "Which article?",
  es: "¿Qué artículo?",
  de: "Welcher Artikel?",
};
const POSS: Cue = {
  ru: "Какое притяжательное?",
  en: "Which possessive?",
  es: "¿Qué posesivo?",
  de: "Welches Possessiv?",
};
const THERE: Cue = {
  ru: "there is или there are?",
  en: "there is or there are?",
  es: "¿there is o there are?",
  de: "there is oder there are?",
};
const CAN: Cue = {
  ru: "Как строится оборот с can?",
  en: "Which form with can?",
  es: "¿Qué forma con can?",
  de: "Welche Form mit can?",
};
const PREP: Cue = {
  ru: "Какой предлог?",
  en: "Which preposition?",
  es: "¿Qué preposición?",
  de: "Welche Präposition?",
};
const WH: Cue = {
  ru: "Какое вопросительное слово?",
  en: "Which question word?",
  es: "¿Qué palabra interrogativa?",
  de: "Welches Fragewort?",
};
const QFORM: Cue = {
  ru: "Какая форма вопроса?",
  en: "Which question form?",
  es: "¿Qué forma de pregunta?",
  de: "Welche Frageform?",
};
const PAST: Cue = {
  ru: "Какая форма Past Simple?",
  en: "Which past simple form?",
  es: "¿Qué forma del past simple?",
  de: "Welche Form des Past Simple?",
};
const COMP: Cue = {
  ru: "Какая степень сравнения?",
  en: "Which comparison form?",
  es: "¿Qué grado de comparación?",
  de: "Welche Vergleichsform?",
};
const GOING: Cue = {
  ru: "Какая форма going to?",
  en: "Which going-to form?",
  es: "¿Qué forma de going to?",
  de: "Welche Form von going to?",
};
const PERF: Cue = {
  ru: "Какая форма Present Perfect?",
  en: "Which present perfect form?",
  es: "¿Qué forma del present perfect?",
  de: "Welche Form des Present Perfect?",
};
const QUANT: Cue = {
  ru: "Какое слово количества?",
  en: "Which quantifier?",
  es: "¿Qué cuantificador?",
  de: "Welcher Mengenausdruck?",
};
const COUNT: Cue = {
  ru: "Исчисляемое или неисчисляемое?",
  en: "Countable or uncountable?",
  es: "¿Contable o incontable?",
  de: "Zählbar oder unzählbar?",
};
const FUT: Cue = {
  ru: "Какая форма will или первого условного?",
  en: "Which will or first-conditional form?",
  es: "¿Qué forma de will o del primer condicional?",
  de: "Welche Form von will oder vom ersten Konditional?",
};
const COND: Cue = {
  ru: "Какая форма условного предложения?",
  en: "Which conditional form?",
  es: "¿Qué forma condicional?",
  de: "Welche Konditionalform?",
};
const MODAL: Cue = {
  ru: "Какой модальный глагол?",
  en: "Which modal?",
  es: "¿Qué modal?",
  de: "Welches Modalverb?",
};
const NARR: Cue = {
  ru: "Какое время для рассказа?",
  en: "Which narrative tense?",
  es: "¿Qué tiempo narrativo?",
  de: "Welche Erzählzeit?",
};
const PPC: Cue = {
  ru: "Какая форма Present Perfect Continuous?",
  en: "Which present perfect continuous form?",
  es: "¿Qué forma del present perfect continuous?",
  de: "Welche Form des Present Perfect Continuous?",
};
const FOR_SINCE: Cue = {
  ru: "for или since?",
  en: "for or since?",
  es: "¿for o since?",
  de: "for oder since?",
};
const PASS: Cue = {
  ru: "Какая форма пассива?",
  en: "Which passive form?",
  es: "¿Qué forma pasiva?",
  de: "Welche Passivform?",
};
const REP: Cue = {
  ru: "Какая форма косвенной речи?",
  en: "Which reported-speech form?",
  es: "¿Qué forma del estilo indirecto?",
  de: "Welche Form der indirekten Rede?",
};
const REL: Cue = {
  ru: "Какое относительное местоимение?",
  en: "Which relative pronoun?",
  es: "¿Qué relativo?",
  de: "Welches Relativpronomen?",
};
const DED: Cue = {
  ru: "Какой модал предположения?",
  en: "Which modal of deduction?",
  es: "¿Qué modal de deducción?",
  de: "Welches Modal der Vermutung?",
};
const INV: Cue = {
  ru: "Какая форма инверсии?",
  en: "Which inversion form?",
  es: "¿Qué forma de inversión?",
  de: "Welche Inversionsform?",
};
const CLEFT: Cue = {
  ru: "Какая эмфатическая конструкция?",
  en: "Which emphatic structure?",
  es: "¿Qué estructura enfática?",
  de: "Welche Hervorhebungsstruktur?",
};
const ELL: Cue = {
  ru: "Какая замена или эллипсис?",
  en: "Which substitution or ellipsis?",
  es: "¿Qué sustitución o elipsis?",
  de: "Welche Ersetzung oder Ellipse?",
};
const HEDGE: Cue = {
  ru: "Какое смягчение?",
  en: "Which hedge?",
  es: "¿Qué atenuación?",
  de: "Welche Abschwächung?",
};
const DISC: Cue = {
  ru: "Какой маркер связи?",
  en: "Which discourse marker?",
  es: "¿Qué marcador discursivo?",
  de: "Welcher Diskursmarker?",
};
const REG: Cue = {
  ru: "Какой регистр уместен?",
  en: "Which register fits?",
  es: "¿Qué registro encaja?",
  de: "Welches Register passt?",
};
const FIG: Cue = {
  ru: "Какой троп?",
  en: "Which figure of speech?",
  es: "¿Qué figura retórica?",
  de: "Welche Stilfigur?",
};
const WRITE: Cue = {
  ru: "Какой оборот уместен в этом тексте?",
  en: "Which phrase fits this text?",
  es: "¿Qué fórmula encaja en este texto?",
  de: "Welche Wendung passt in diesen Text?",
};
const ADV: Cue = {
  ru: "Какое наречие?",
  en: "Which adverb?",
  es: "¿Qué adverbio?",
  de: "Welches Adverb?",
};
const AUX: Cue = {
  ru: "Какой вспомогательный глагол?",
  en: "Which auxiliary?",
  es: "¿Qué auxiliar?",
  de: "Welches Hilfsverb?",
};
const V3: Cue = {
  ru: "Какая форма V3?",
  en: "Which past participle?",
  es: "¿Qué participio?",
  de: "Welches Partizip?",
};
const FALLBACK: Cue = {
  ru: "Какой вариант верен?",
  en: "Which option is correct?",
  es: "¿Qué opción es correcta?",
  de: "Welche Variante ist richtig?",
};
const FILL: Cue = {
  ru: "Вставьте пропуск.",
  en: "Fill in the gap.",
  es: "Completa el hueco.",
  de: "Setze die Lücke ein.",
};

const TOPIC: Record<string, Cue> = {
  "a1-be": BE,
  "a1-present-simple": VERB,
  "a1-questions": WH,
  "a1-there-is-are": THERE,
  "a1-can": CAN,
  "a1-prepositions": PREP,
  "a1-articles-basics": ART,
  "articles-basics": ART,
  "a1-possessives": POSS,
  "a2-possessives": POSS,
  possessives: POSS,
  "a2-past-simple": PAST,
  "a2-comparatives": COMP,
  "a2-going-to": GOING,
  "a2-present-perfect": PERF,
  "a2-present-perfect-intro": PERF,
  "b1-present-perfect-intro": PERF,
  "present-perfect-intro": PERF,
  "a2-quantifiers": QUANT,
  "a2-countable-uncountable": COUNT,
  "a2-countable": COUNT,
  countable: COUNT,
  "b1-future-conditional": FUT,
  "b1-conditionals-review": COND,
  "conditionals-review": COND,
  "b1-modals": MODAL,
  "b1-narrative": NARR,
  "b1-perfect-continuous": PPC,
  "b1-reported-speech": REP,
  "reported-speech": REP,
  "b1-relative-clauses": REL,
  "relative-clauses": REL,
  "b2-conditionals": COND,
  "b2-passive": PASS,
  "b2-passive-advanced": PASS,
  "passive-advanced": PASS,
  "b2-reported-clauses": REP,
  "b2-modals-deduction": DED,
  "modals-deduction": DED,
  "c1-inversion": INV,
  "c1-discourse": DISC,
  "c1-mixed-conditionals": COND,
  "c1-review": CLEFT,
  "c2-cleft-emphasis": CLEFT,
  "c2-ellipsis-substitution": ELL,
  "c2-hedging-nuance": HEDGE,
  "c2-figurative-precision": FIG,
  "c2-discourse-mastery": DISC,
  "ielts-essay-cohesion": DISC,
  "ielts-essay-structure": WRITE,
  "ielts-letter-informal": WRITE,
  "ielts-letter-formal": WRITE,
  "cambridge-letter-email": WRITE,
  "ielts-task1-report": WRITE,
  "cbe-register-shift": REG,
  "register-shift": REG,
  "cambridge-essay-article": WRITE,
  "ielts-opinion-language": HEDGE,
};

const INSTRUCTION_RULES: Array<{ re: RegExp; cue: Cue }> = [
  { re: /for or since/i, cue: FOR_SINCE },
  { re: /some or any|much or many|much \/ many|quantif/i, cue: QUANT },
  { re: /uncountable|несчёт|countable/i, cue: COUNT },
  { re: /form of be|глагол be/i, cue: BE },
  { re: /there is|is or are|singular\/plural/i, cue: THERE },
  { re: /^(choose|fill|complete|add).*\barticles?\b|артикль/i, cue: ART },
  { re: /possessive|its or it's|притяжат/i, cue: POSS },
  { re: /in \/ on \/ at|preposition/i, cue: PREP },
  { re: /passive|have something done|causative/i, cue: PASS },
  { re: /past perfect|past continuous|used to/i, cue: NARR },
  { re: /past simple/i, cue: PAST },
  { re: /comparative|superlative/i, cue: COMP },
  { re: /going to/i, cue: GOING },
  { re: /present perfect continuous|how long have/i, cue: PPC },
  { re: /present perfect|ever or never|choose v3|\bv3\b/i, cue: PERF },
  { re: /first conditional|future with will|won't/i, cue: FUT },
  { re: /conditional|wish \+/i, cue: COND },
  { re: /reported|say or tell/i, cue: REP },
  { re: /relative/i, cue: REL },
  { re: /deduction|can't have|must or should|mustn't|modal/i, cue: MODAL },
  { re: /adverb/i, cue: ADV },
  { re: /auxiliary|am \/ is \/ are/i, cue: AUX },
  { re: /question word|where \/ when|why \/ what|ask about a person/i, cue: WH },
  { re: /question form|question with/i, cue: QFORM },
  { re: /\bcan\b|ability/i, cue: CAN },
  { re: /present simple|3rd person|verb form|negative present|correct form of have/i, cue: VERB },
  { re: /inversion|hardly|emphatic/i, cue: INV },
  { re: /cleft/i, cue: CLEFT },
  { re: /ellipsis|substitution|so\/not/i, cue: ELL },
  { re: /hedg|understatement|distancing|polite disagreement|opinion/i, cue: HEDGE },
  { re: /discourse|connector|concession|purpose marker|consequence|linker|cohesion/i, cue: DISC },
  { re: /register|sign-off|opening|closing|formal|informal/i, cue: REG },
  { re: /figure of speech|metaphor|simile|idiom/i, cue: FIG },
  { re: /task 1|overview|trend|thesis|article|letter|essay/i, cue: WRITE },
];

function topicKey(raw: string | undefined): string {
  return (raw ?? "")
    .trim()
    .toLowerCase()
    .replace(/^eng-/, "");
}

function matchInstruction(instruction: string): Cue | null {
  const text = instruction.trim();
  if (!text) return null;
  for (const rule of INSTRUCTION_RULES) {
    if (rule.re.test(text)) return rule.cue;
  }
  return null;
}

function resolveCue(ex: Practice, kind: "mc" | "fb"): Cue {
  return (
    matchInstruction(ex.instruction ?? "") ??
    TOPIC[topicKey(ex.grammarTopic)] ??
    (kind === "fb" ? FILL : FALLBACK)
  );
}

function latinPrefix(question: string): string {
  const idx = question.search(CYR);
  if (idx < 0) return question.trim();
  return question
    .slice(0, idx)
    .replace(/[\s(]+$/g, "")
    .trim();
}

function mapMissing(
  qt: Partial<Record<InterfaceLanguage, string>>,
  lang: "en" | "es" | "de",
  value: string,
): void {
  const current = qt[lang]?.trim() ?? "";
  if (!current || CYR.test(current)) qt[lang] = value;
}

function joinStem(stem: string, cue: string): string {
  const s = stem.trim();
  if (!s) return cue;
  if (s.includes(cue)) return s;
  return `${s} ${cue}`;
}

/**
 * RU UI can read the task without already knowing English.
 * MC: English stem (the drill) plus a Russian question; EN/ES/DE maps swap
 * the cue so other UIs never see Cyrillic.
 * FB: English stem stays (quality gate rejects Cyrillic blanks); ru gloss
 * states the task.
 * Applied after bank expand so adaptive ids stay on the same items.
 */
export function applyEnglishPracticeL1<T extends Practice>(ex: T): T {
  if (ex.type !== "multiple_choice" && ex.type !== "fill_blank") return ex;

  const q = ex.question?.trim() ?? "";
  if (!q) return ex;
  const qt: Partial<Record<InterfaceLanguage, string>> = {
    ...(ex.questionTranslations ?? {}),
  };

  if (ex.type === "fill_blank") {
    if (qt.ru?.trim() && CYR.test(qt.ru)) return ex;
    const cue = resolveCue(ex, "fb");
    const label = cue.ru.replace(/[?？]\s*$/u, "");
    return {
      ...ex,
      questionTranslations: { ...qt, ru: `${label}: ${q}` },
    };
  }

  if (CYR.test(q)) {
    const stem = latinPrefix(q);
    const cue = resolveCue(ex, "mc");
    mapMissing(qt, "en", stem ? joinStem(stem, cue.en) : cue.en);
    mapMissing(qt, "es", stem ? joinStem(stem, cue.es) : cue.es);
    mapMissing(qt, "de", stem ? joinStem(stem, cue.de) : cue.de);
    return { ...ex, questionTranslations: qt };
  }

  const ruGloss = qt.ru?.trim() ?? "";
  const answer = ex.answer?.trim() ?? "";
  const glossSpoils =
    Boolean(answer) &&
    answer.length > 2 &&
    ruGloss.toLowerCase().includes(answer.toLowerCase());
  if (
    !q.includes("___") &&
    ruGloss &&
    CYR.test(ruGloss) &&
    !ruGloss.includes("___") &&
    !glossSpoils
  ) {
    mapMissing(qt, "en", q);
    const cue = resolveCue(ex, "mc");
    mapMissing(qt, "es", joinStem(q, cue.es));
    mapMissing(qt, "de", joinStem(q, cue.de));
    delete qt.ru;
    return { ...ex, question: ruGloss, questionTranslations: qt };
  }

  const cue = resolveCue(ex, "mc");
  mapMissing(qt, "en", joinStem(q, cue.en));
  mapMissing(qt, "es", joinStem(q, cue.es));
  mapMissing(qt, "de", joinStem(q, cue.de));
  return {
    ...ex,
    question: joinStem(q, cue.ru),
    questionTranslations: qt,
  };
}
