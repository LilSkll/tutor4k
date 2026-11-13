import type { InterfaceLanguage } from "@/types";

/**
 * Pedagogical feedback lead-ins keyed by RKI grammar topic slug.
 * Cyrillic forms in bank explanations remain learning material; these
 * strings are the interface-language meta-explanation.
 */
export const RUSSIAN_TOPIC_FEEDBACK: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  "ru-a1-alphabet-phonetics": {
    en: "Check the greeting register (ты vs вы) and the Cyrillic spelling.",
    es: "Revisa el registro del saludo (ты frente a вы) y la ortografía cirílica.",
    de: "Prüfe die Anrede (ты vs. вы) und die kyrillische Schreibweise.",
  },
  "ru-a1-identity-eto": {
    en: "Use Меня зовут… / Я из… / Это… — Russian usually omits «to be» in the present.",
    es: "Usa Меня зовут… / Я из… / Это… — en presente el ruso suele omitir «ser/estar».",
    de: "Verwende Меня зовут… / Я из… / Это… — im Präsens fehlt «sein» oft.",
  },
  "ru-a1-noun-gender": {
    en: "Match мой / моя / моё to the noun’s gender (m. / f. / n.).",
    es: "Haz coincidir мой / моя / моё con el género del sustantivo (m. / f. / n.).",
    de: "Passe мой / моя / моё an das Genus des Substantivs an (m. / f. / n.).",
  },
  "ru-a1-present-tense": {
    en: "Use the present-tense ending that matches the subject (я / ты / он…).",
    es: "Usa la desinencia de presente que corresponde al sujeto (я / ты / он…).",
    de: "Verwende die Präsensendung, die zum Subjekt passt (я / ты / он…).",
  },
  "ru-a1-accusative": {
    en: "Accusative answers кого? / что?. Feminine -а/-я → -у/-ю; masculine animate adds -а/-я; inanimate masculine stays nominative-like.",
    es: "El acusativo responde a кого? / что?. Femenino -а/-я → -у/-ю; masculino animado añade -а/-я; inanimado masculino coincide con el nominativo.",
    de: "Akkusativ antwortet auf кого? / что?. Feminin -а/-я → -у/-ю; maskulin belebt + -а/-я; unbelebt maskulin wie Nominativ.",
  },
  "ru-a1-prepositional": {
    en: "After в / на for location, use the prepositional case (often -е; -ия/-ие → -ии).",
    es: "Tras в / на de lugar, usa el caso preposicional (a menudo -е; -ия/-ие → -ии).",
    de: "Nach в / на für Ort steht der Präpositiv (oft -е; -ия/-ие → -ии).",
  },
  "ru-a1-numbers-time": {
    en: "For clock time use в + number + час(а/ов). Ask Во сколько…?",
    es: "Para la hora usa в + número + час(а/ов). Pregunta Во сколько…?",
    de: "Für die Uhrzeit: в + Zahl + час(а/ов). Frage: Во сколько…?",
  },
  "ru-a2-past-tense": {
    en: "Past tense agrees in gender/number: -л / -ла / -ло / -ли (был / была / было / были).",
    es: "El pasado concuerda en género/número: -л / -ла / -ло / -ли (был / была / было / были).",
    de: "Vergangenheit nach Genus/Numerus: -л / -ла / -ло / -ли (был / была / было / были).",
  },
  "ru-a2-future": {
    en: "Imperfective future: буду + infinitive. Perfective future: one conjugated form (прочитаю).",
    es: "Futuro imperfectivo: буду + infinitivo. Futuro perfectivo: una forma conjugada (прочитаю).",
    de: "Imperfektives Futur: буду + Infinitiv. Perfektives Futur: eine Form (прочитаю).",
  },
  "ru-a2-genitive": {
    en: "After нет / много / мало use the genitive (нет книги, много студентов).",
    es: "Tras нет / много / мало usa el genitivo (нет книги, много студентов).",
    de: "Nach нет / много / мало steht der Genitiv (нет книги, много студентов).",
  },
  "ru-a2-dative": {
    en: "Dative answers кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
    es: "El dativo responde a кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
    de: "Dativ auf кому?/чему?: мне нравится…, звонить другу, помочь студентам.",
  },
  "ru-a2-instrumental": {
    en: "Instrumental: работать врачом, писать ручкой, жить с другом (с + instrumental).",
    es: "Instrumental: работать врачом, писать ручкой, жить с другом (с + instrumental).",
    de: "Instrumental: работать врачом, писать ручкой, жить с другом (с + Instrumental).",
  },
  "ru-a2-aspect-intro": {
    en: "Imperfective = process/habit; perfective = result/one completed event.",
    es: "Imperfectivo = proceso/hábito; perfectivo = resultado/evento completado.",
    de: "Imperfektiv = Prozess/Gewohnheit; perfektiv = Resultat/ein abgeschlossenes Ereignis.",
  },
  "ru-a2-motion-basic": {
    en: "иду/еду for one trip now; хожу/езжу for habit. Foot vs transport matters.",
    es: "иду/еду = un viaje ahora; хожу/езжу = hábito. Pie vs transporte importa.",
    de: "иду/еду = einmalige Fahrt jetzt; хожу/езжу = Gewohnheit. Zu Fuß vs. Verkehrsmittel.",
  },
  "ru-b1-cases-system": {
    en: "Choose the case for the construction (нет + gen., нравиться + dat., с + instr., etc.).",
    es: "Elige el caso según la construcción (нет + gen., нравиться + dat., с + instr., etc.).",
    de: "Wähle den Kasus zur Konstruktion (нет + Gen., нравиться + Dat., с + Instr. usw.).",
  },
  "ru-b1-aspect-tenses": {
    en: "In past/future, aspect still marks process vs result (долго готовился / уже подготовился).",
    es: "En pasado/futuro el aspecto sigue marcando proceso vs resultado (долго готовился / уже подготовился).",
    de: "In Vergangenheit/Futur markiert Aspekt weiter Prozess vs. Resultat (долго готовился / уже подготовился).",
  },
  "ru-b1-motion-prefixes": {
    en: "Prefix shows direction/result: при- arrival, у- departure, по- start, во- into.",
    es: "El prefijo marca dirección/resultado: при- llegada, у- partida, по- inicio, во- hacia dentro.",
    de: "Präfix zeigt Richtung/Resultat: при- Ankunft, у- Weggang, по- Beginn, во- hinein.",
  },
  "ru-b1-complex-sentences": {
    en: "Link clauses with потому что (reason), чтобы (purpose), если (condition), который (relative).",
    es: "Une oraciones con потому что (causa), чтобы (fin), если (condición), который (relativo).",
    de: "Verbinde Sätze mit потому что (Grund), чтобы (Zweck), если (Bedingung), который (Relativ).",
  },
  "ru-b1-text-cohesion": {
    en: "Order the story with сначала → потом/затем → наконец/в итоге.",
    es: "Ordena el relato con сначала → потом/затем → наконец/в итоге.",
    de: "Ordne die Erzählung mit сначала → потом/затем → наконец/в итоге.",
  },
  "ru-b1-argumentation": {
    en: "Use campus formulas: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
    es: "Usa fórmulas del campus: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
    de: "Nutze Campusformeln: по-моему, согласен/согласна, можно задать вопрос?, объясните ещё раз.",
  },
  "ru-b2-participles": {
    en: "Active participles name the doer (читающий, прочитавший); passive ones name the object (прочитанный / прочитана).",
    es: "El participio activo nombra a quien actúa (читающий, прочитавший); el pasivo, al objeto (прочитанный / прочитана).",
    de: "Aktive Partizipien nennen den Täter (читающий, прочитавший); passive das Objekt (прочитанный / прочитана).",
  },
  "ru-b2-gerunds": {
    en: "Imperfective gerund = while (читая); perfective = after (прочитав). The subject stays the same.",
    es: "Gerundio imperfectivo = mientras (читая); perfectivo = después (прочитав). El sujeto es el mismo.",
    de: "Imperfektives Adverbialpartizip = während (читая); perfektives = danach (прочитав). Dasselbe Subjekt.",
  },
  "ru-b2-passive": {
    en: "A finished result uses the short participle (написана); a process uses imperfective -ся (пишется).",
    es: "El resultado usa el participio breve (написана); el proceso, el imperfectivo en -ся (пишется).",
    de: "Das Ergebnis steht im Kurzpartizip (написана); der Prozess im imperfektiven -ся (пишется).",
  },
  "ru-b2-reported-speech": {
    en: "Statements take что; wh-questions keep the question word; yes/no questions use ли after the verb.",
    es: "El aviso lleva что; la pregunta con palabra interrogativa la conserva; sí/no lleva ли tras el verbo.",
    de: "Aussagen mit что; W-Fragen behalten das Fragewort; Ja/Nein-Fragen setzen ли nach dem Verb.",
  },
  "ru-b2-conditionals": {
    en: "A real future uses если + future in both clauses; если бы takes the past form plus бы; чтобы is purpose.",
    es: "El futuro real lleva если + futuro en ambas partes; если бы usa forma de pasado y бы; чтобы es la finalidad.",
    de: "Reale Zukunft: если + Futur in beiden Teilen; если бы mit Vergangenheitsform und бы; чтобы ist der Zweck.",
  },
  "ru-b2-formal-register": {
    en: "In an application use Прошу + infinitive, в связи с + instrumental, and no chat particles.",
    es: "En la solicitud: Прошу + infinitivo, в связи с + instrumental, sin partículas de chat.",
    de: "Im Antrag: Прошу + Infinitiv, в связи с + Instrumental, ohne Gesprächspartikeln.",
  },
  "ru-c1-aspect-nuance": {
    en: "Ask which question aspect answers: experience (читал), completion (прочитал), or a ban (не открывайте).",
    es: "Pregunta qué resuelve el aspecto: experiencia (читал), término (прочитал) o prohibición (не открывайте).",
    de: "Frage, was der Aspekt klärt: Erfahrung (читал), Abschluss (прочитал) oder Verbot (не открывайте).",
  },
  "ru-c1-idioms": {
    en: "Keep the fixed frame: иметь в виду + accusative; речь идёт о + prepositional; внимание на.",
    es: "Conserva el marco: иметь в виду + acusativo; речь идёт о + preposicional; внимание на.",
    de: "Rahmen behalten: иметь в виду + Akkusativ; речь идёт о + Präpositiv; внимание на.",
  },
  "ru-c1-advanced-argumentation": {
    en: "Name the thesis, add хотя / несмотря на as a limit, and close with таким образом.",
    es: "Enuncia la tesis, marca el límite con хотя / несмотря на y cierra con таким образом.",
    de: "These nennen, die Grenze mit хотя / несмотря на markieren und mit таким образом schließen.",
  },
  "ru-c1-media-discourse": {
    en: "Give the source (по данным, согласно + dative). Якобы means the claim is not confirmed.",
    es: "Da la fuente (по данным, согласно + dativo). Якобы marca que el dato no está confirmado.",
    de: "Quelle nennen (по данным, согласно + Dativ). Якобы heißt: die Angabe ist nicht bestätigt.",
  },
  "ru-c2-registers": {
    en: "Keep one register for the whole sentence: щас and куча stay colloquial; в настоящее время stays official.",
    es: "Un solo registro en toda la frase: щас y куча son coloquiales; в настоящее время es oficial.",
    de: "Ein Register für den ganzen Satz: щас und куча bleiben umgangssprachlich; в настоящее время bleibt amtlich.",
  },
  "ru-c2-literary": {
    en: "Comment with a quotation: imperfective background (горела), comparison (словно), or a naming sentence (Ночь.).",
    es: "Comenta con cita: fondo imperfectivo (горела), comparación (словно) o frase nominal (Ночь.).",
    de: "Mit Zitat kommentieren: imperfektiver Hintergrund (горела), Vergleich (словно) oder Nominativsatz (Ночь.).",
  },
  "ru-c2-professional": {
    en: "Hedge a real limit (представляется, что; нельзя утверждать, что) and disagree with a reason.",
    es: "Marca un límite real (представляется, что; нельзя утверждать, что) y discrepa con un motivo.",
    de: "Eine echte Grenze markieren (представляется, что; нельзя утверждать, что) und mit Grund widersprechen.",
  },
  "ru-c2-pragmatics": {
    en: "же contrasts, ведь gives a shared reason, -то picks the topic; new information tends to come last.",
    es: "же contrasta, ведь da una razón compartida, -то señala el tema; lo nuevo suele ir al final.",
    de: "же kontrastiert, ведь gibt einen gemeinsamen Grund, -то hebt das Thema; Neues steht eher am Ende.",
  },
  "ru-a1-classroom-survival": {
    en: "Можно and нельзя take an infinitive. To a lecturer use the вы form and пожалуйста.",
    es: "Можно y нельзя van con infinitivo. Al profesor: forma de вы y пожалуйста.",
    de: "Можно und нельзя mit Infinitiv. Zur Lehrperson: вы-Form und пожалуйста.",
  },
  "ru-a2-services-invitations": {
    en: "Хотел бы / хотела бы plus infinitive. A refusal starts with к сожалению.",
    es: "Хотел бы / хотела бы más infinitivo. El rechazo empieza por к сожалению.",
    de: "Хотел бы / хотела бы plus Infinitiv. Eine Absage beginnt mit к сожалению.",
  },
  "ru-b1-government-verbs": {
    en: "Learn the verb with its case: зависеть от, готовиться к, надеяться на, гордиться plus instrumental.",
    es: "Aprenda el verbo con su caso: зависеть от, готовиться к, надеяться на, гордиться con instrumental.",
    de: "Lernen Sie das Verb mit dem Kasus: зависеть от, готовиться к, надеяться на, гордиться mit Instrumental.",
  },
  "ru-b1-participle-preview": {
    en: "Который is the safe choice. A short participle replaces only a simple relative.",
    es: "Который es la opción segura. Un participio corto solo sustituye un relativo simple.",
    de: "Который bleibt sicher. Ein kurzes Partizip ersetzt nur einen einfachen Relativsatz.",
  },
  "ru-b1-opinion-structures": {
    en: "Frame the view, then agree with с plus instrumental or disagree with потому что.",
    es: "Enmarque la opinión; acuerdo con с más instrumental, o desacuerdo con потому что.",
    de: "Rahmen nennen; Zustimmung mit с plus Instrumental oder Widerspruch mit потому что.",
  },
  "ru-b2-syntax-complexity": {
    en: "Each subordinate clause gets its own conjunction and a comma. Do not stack two что.",
    es: "Cada subordinada lleva su conjunción y su coma. No apile dos что.",
    de: "Jeder Nebensatz hat seine Konjunktion und ein Komma. Nicht zwei что stapeln.",
  },
  "ru-b2-written-discourse": {
    en: "One microtheme per paragraph. After однако, keep the subject (он).",
    es: "Una microtema por párrafo. Tras однако, conserve el sujeto (он).",
    de: "Ein Mikrothema pro Absatz. Nach однако das Subjekt behalten (он).",
  },
  "ru-c1-critique-review": {
    en: "A concession limits the judgment. Вместе с тем does not erase the strength.",
    es: "La concesión limita el juicio. Вместе с тем no borra el punto fuerte.",
    de: "Die Einräumung begrenzt das Urteil. Вместе с тем löscht die Stärke nicht.",
  },
  "ru-c1-academic-writing": {
    en: "Цель names an action. Таким образом closes only a claim you already showed.",
    es: "Цель nombra una acción. Таким образом cierra solo una tesis ya mostrada.",
    de: "Цель nennt eine Handlung. Таким образом schließt nur eine schon gezeigte These.",
  },
};

const FORMULA_LEAD: Record<Exclude<InterfaceLanguage, "ru">, string> = {
  en: "Form:",
  es: "Forma:",
  de: "Form:",
};

/** Keep Cyrillic learning forms / → formulas; drop RU prose. */
export function extractRussianLearningFragment(explanation: string): string {
  const trimmed = explanation.trim();
  if (!trimmed) return "";

  // Prefer arrow / equals formulas (often contain target forms).
  if (/[→+]|=/.test(trimmed)) {
    const parts = trimmed
      .split(/(?<=[.!?…])\s+/)
      .map((s) => s.trim())
      .filter((s) => s && (/[→+]|=/.test(s) || /[A-Za-z]/.test(s)));
    if (parts.length) return parts.join(" ");
    return trimmed;
  }

  // Keep short quoted Russian answers, drop long Russian prose.
  const quoted = trimmed.match(/[«"]([^»"]+)[»"]/g);
  if (quoted?.length) return quoted.join(" ");

  // Latin-only teaching note — keep.
  if (!/[\u0400-\u04FF]/.test(trimmed)) return trimmed;

  return "";
}

export function localizeRussianExerciseExplanation(
  explanation: string,
  language: InterfaceLanguage,
  grammarTopic?: string | null,
): string | null {
  if (language === "ru") return null; // caller keeps authored RU

  const topicLead =
    (grammarTopic &&
      RUSSIAN_TOPIC_FEEDBACK[grammarTopic]?.[language]) ||
    null;
  const fragment = extractRussianLearningFragment(explanation);

  if (topicLead && fragment) {
    return `${topicLead} ${FORMULA_LEAD[language]} ${fragment}`.trim();
  }
  if (topicLead) return topicLead;
  if (fragment) {
    return `${FORMULA_LEAD[language]} ${fragment}`.trim();
  }
  return null;
}
