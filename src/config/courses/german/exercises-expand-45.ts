import type { InterfaceLanguage, StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type L1 = Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>;

const choose = "Выберите правильный вариант";
const fill = "Вставьте пропущенное слово";
const tr = "Переведите на немецкий";
const fix = "Исправьте ошибку — напишите предложение целиком";
const build = "Соберите предложение";

/**
 * Chapters 37–45 keep a German stem with no Cyrillic so every UI locale can
 * use the bank before a swap. The Russian task lives in questionTranslations.ru;
 * en/es/de are the other interface prompts. Fill-blank keeps the German stem
 * plus an L1 gloss. Sentence-building stores a meaning gloss.
 */
function mc(
  question: string,
  options: string[],
  answer: string,
  explanation: string,
  l1?: L1 & { ru?: string },
): Draft {
  return {
    type: "multiple_choice",
    question,
    instruction: choose,
    options,
    answer,
    explanation,
    ...(l1 ? { questionTranslations: l1 } : {}),
  };
}

/** German stem + optional L1 gloss of what the prompt means. */
function fb(
  question: string,
  answer: string,
  explanation: string,
  gloss?: L1 & { ru?: string },
  acceptableAnswers?: string[],
): Draft {
  const { ru, ...rest } = gloss ?? {};
  const qt =
    gloss == null
      ? undefined
      : {
          ...(ru ? { ru } : {}),
          ...rest,
        };
  return {
    type: "fill_blank",
    question,
    instruction: fill,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
    ...(qt && Object.keys(qt).length > 0
      ? { questionTranslations: qt }
      : {}),
  };
}

function tl(
  question: string,
  answer: string,
  explanation: string,
  l1: { en: string; es: string; de: string },
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "translation",
    question,
    instruction: tr,
    answer,
    explanation,
    questionTranslations: l1,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
  };
}

function ec(
  question: string,
  answer: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "error_correction",
    question,
    instruction: fix,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
    rewriteMode: "grammar_fix",
  };
}

function sb(
  words: string[],
  explanation: string,
  meaning?: L1 & { ru?: string },
  acceptableAnswers?: string[],
): Draft {
  const { ru, ...rest } = meaning ?? {};
  const qt =
    meaning == null
      ? undefined
      : {
          ...(ru ? { ru } : {}),
          ...rest,
        };
  return {
    type: "sentence_building",
    question: [...words].reverse().join(" / "),
    instruction: build,
    options: words,
    answer: words.join(" "),
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
    ...(qt && Object.keys(qt).length > 0
      ? { questionTranslations: qt }
      : {}),
  };
}

/** New DaF chapters 37–45. Old chapter banks stay in exercises-b2c1.ts. */
export const GERMAN_EXPAND_45_EXERCISES: Record<string, Draft[]> = {
  "de-ch37-genitiv-usage": [
    mc("Wegen ___ Regens bleibt der Zug stehen. Welche Form? (Genitiv)", ["des", "dem", "den", "die"], "des", "wegen в письменном тексте + генитив: des Regens.", { ru: "Wegen ___ Regens bleibt der Zug stehen. Какая форма? (генитив)", en: "Wegen ___ Regens bleibt der Zug stehen. Which form? (genitive)", es: "Wegen ___ Regens bleibt der Zug stehen. ¿Qué forma? (genitivo)", de: "Wegen ___ Regens bleibt der Zug stehen. Welche Form? (Genitiv)" }),
    mc("Das Büro des ___ ist klein. Welche Form? (der Student)", ["Studenten", "Student", "Studentes", "Studentens"], "Studenten", "Слабое существительное: des Studenten, не des Students.", { ru: "Das Büro des ___ ist klein. Какая форма? (der Student)", en: "Das Büro des ___ ist klein. Which form? (der Student)", es: "Das Büro des ___ ist klein. ¿Qué forma? (der Student)", de: "Das Büro des ___ ist klein. Welche Form? (der Student)" }),
    mc("Innerhalb ___ Monats kommt die Antwort. Welche Form? (Genitiv)", ["eines", "einem", "einen", "einer"], "eines", "innerhalb + генитив: eines Monats.", { ru: "Innerhalb ___ Monats kommt die Antwort. Какая форма? (генитив)", en: "Innerhalb ___ Monats kommt die Antwort. Which form? (genitive)", es: "Innerhalb ___ Monats kommt die Antwort. ¿Qué forma? (genitivo)", de: "Innerhalb ___ Monats kommt die Antwort. Welche Form? (Genitiv)" }),
    mc("Aufgrund ___ Daten ändern wir den Plan. Welche Form? (Plural)", ["der", "des", "den", "die"], "der", "Daten — множественное число, генитив der Daten.", { ru: "Aufgrund ___ Daten ändern wir den Plan. Какая форма? (мн. ч.)", en: "Aufgrund ___ Daten ändern wir den Plan. Which form? (plural)", es: "Aufgrund ___ Daten ändern wir den Plan. ¿Qué forma? (plural)", de: "Aufgrund ___ Daten ändern wir den Plan. Welche Form? (Plural)" }),
    fb("Das ist das Haus ___ Vaters.", "des", "Мужской род: des + -s.", { ru: "Это дом отца. Das ist das Haus … Vaters.", en: "This is the father's house. Das ist das Haus … Vaters.", es: "Esta es la casa del padre. Das ist das Haus … Vaters." }),
    fb("Trotz ___ Lärms arbeitet er.", "des", "Lärm мужской: des Lärms.", { ru: "Несмотря на шум, он работает. Trotz … Lärms arbeitet er.", en: "Despite the noise, he works. Trotz … Lärms arbeitet er.", es: "A pesar del ruido, trabaja. Trotz … Lärms arbeitet er." }),
    fb("Statt ___ Briefes kam eine Karte.", "des", "statt + генитив: des Briefes.", { ru: "Вместо письма пришла открытка. Statt … Briefes kam eine Karte.", en: "A card came instead of the letter. Statt … Briefes kam eine Karte.", es: "En lugar de la carta llegó una postal. Statt … Briefes kam eine Karte." }),
    fb("Mangels ___ Beweises bleibt die Frage offen.", "eines", "mangels + генитив: eines Beweises.", { ru: "За недостатком доказательства вопрос открыт. Mangels … Beweises bleibt die Frage offen.", en: "For lack of proof the question stays open. Mangels … Beweises bleibt die Frage offen.", es: "A falta de prueba, la pregunta sigue abierta. Mangels … Beweises bleibt die Frage offen." }),
    tl(
      "Из-за дождя поезд опаздывает.",
      "Wegen des Regens hat der Zug Verspätung",
      "wegen + генитив, не датив.",
      { en: "The train is delayed because of the rain.", es: "El tren llega tarde por la lluvia.", de: "Der Zug kommt später, weil es regnet." },
      ["Der Zug hat wegen des Regens Verspätung"],
    ),
    tl(
      "Это дом отца.",
      "Das ist das Haus des Vaters",
      "des Vaters: мужской род, окончание -s.",
      { en: "This is the father's house.", es: "Esta es la casa del padre.", de: "Das Haus gehört dem Vater." },
    ),
    tl(
      "Вместо письма пришла открытка.",
      "Statt des Briefes kam eine Karte",
      "statt + генитив des Briefes.",
      { en: "A card came instead of the letter.", es: "En lugar de la carta llegó una postal.", de: "Eine Karte kam, kein Brief." },
      ["Anstelle des Briefes kam eine Karte"],
    ),
    tl(
      "На основании данных мы меняем план.",
      "Aufgrund der Daten ändern wir den Plan",
      "aufgrund + генитив множественного числа der Daten.",
      { en: "We are changing the plan on the basis of the data.", es: "Cambiamos el plan a partir de los datos.", de: "Die Zahlen führen zu einem anderen Plan." },
    ),
    ec("Wegen dem Regen hat der Zug Verspätung.", "Wegen des Regens hat der Zug Verspätung.", "В письме wegen требует генитив: des Regens."),
    ec("Das ist das Haus dem Vater.", "Das ist das Haus des Vaters.", "Чей дом: генитив des Vaters."),
    ec("Innerhalb einem Monat kommt die Antwort.", "Innerhalb eines Monats kommt die Antwort.", "innerhalb + генитив eines Monats."),
    ec("Trotz der Lärm arbeitet er.", "Trotz des Lärms arbeitet er.", "Lärm мужской: des Lärms, не der Lärm."),
    sb(["Wegen", "des", "Regens", "hat", "der", "Zug", "Verspätung"], "wegen des Regens, глагол auf втором месте.", { ru: "Из-за дождя поезд опаздывает", en: "The train is delayed because of the rain", es: "El tren llega tarde por la lluvia" }),
    sb(["Das", "ist", "das", "Haus", "des", "Vaters"], "des Vaters.", { ru: "Это дом отца", en: "This is the father's house", es: "Esta es la casa del padre" }),
    sb(["Aufgrund", "der", "Daten", "ändern", "wir", "den", "Plan"], "der Daten — генитив множественного числа.", { ru: "На основании данных мы меняем план", en: "We are changing the plan on the basis of the data", es: "Cambiamos el plan a partir de los datos" }),
    sb(["Statt", "des", "Briefes", "kam", "eine", "Karte"], "statt des Briefes.", { ru: "Вместо письма пришла открытка", en: "A card came instead of the letter", es: "En lugar de la carta llegó una postal" }),
  ],

  "de-ch38-connectors-advanced": [
    mc("Er ist müde, ___ arbeitet er weiter. Welches Wort? (trotzdem)", ["trotzdem", "obwohl", "weil", "dass"], "trotzdem", "trotzdem — наречие: глагол сразу после него. obwohl уводил бы глагол в конец.", { ru: "Er ist müde, ___ arbeitet er weiter. Какое слово? (тем не менее)", en: "Er ist müde, ___ arbeitet er weiter. Which word? (nevertheless)", es: "Er ist müde, ___ arbeitet er weiter. ¿Qué palabra? (sin embargo)", de: "Er ist müde, ___ arbeitet er weiter. Welches Wort? (trotzdem)" }),
    mc("Es fehlen Belege, ___ ist die These schwach. Welches Wort? (folglich)", ["folglich", "obwohl", "weil", "wenn"], "folglich", "folglich вводит следствие и стоит перед глаголом.", { ru: "Es fehlen Belege, ___ ist die These schwach. Какое слово? (следовательно)", en: "Es fehlen Belege, ___ ist die These schwach. Which word? (consequently)", es: "Es fehlen Belege, ___ ist die These schwach. ¿Qué palabra? (por tanto)", de: "Es fehlen Belege, ___ ist die These schwach. Welches Wort? (folglich)" }),
    mc("Sie kommt. ___ bittet sie um Zeit. Welches Wort? (jedoch)", ["Jedoch", "Obwohl", "Dass", "Weil"], "Jedoch", "Jedoch на первом месте, bittet на втором.", { ru: "Sie kommt. ___ bittet sie um Zeit. Какое слово? (однако)", en: "Sie kommt. ___ bittet sie um Zeit. Which word? (however)", es: "Sie kommt. ___ bittet sie um Zeit. ¿Qué palabra? (sin embargo)", de: "Sie kommt. ___ bittet sie um Zeit. Welches Wort? (jedoch)" }),
    mc("___ ist der Plan teuer, zum anderen ist er nötig. Welche Hälfte eröffnet das Paar?", ["Zum einen", "Obwohl", "Weil", "Dass"], "Zum einen", "Пара zum einen … zum anderen, обе части с глаголом на втором месте.", { ru: "___ ist der Plan teuer, zum anderen ist er nötig. Какая первая половина пары?", en: "___ ist der Plan teuer, zum anderen ist er nötig. Which is the first half of the pair?", es: "___ ist der Plan teuer, zum anderen ist er nötig. ¿Cuál es la primera parte del par?", de: "___ ist der Plan teuer, zum anderen ist er nötig. Welche Hälfte eröffnet das Paar?" }),
    fb("Er ist müde. ___ arbeitet er.", "Trotzdem", "Новое главное предложение: Trotzdem arbeitet er.", { ru: "Он устал. Тем не менее он работает. … arbeitet er.", en: "He is tired. Nevertheless he works. … arbeitet er.", es: "Está cansado. Sin embargo trabaja. … arbeitet er." }),
    fb("Die Belege fehlen. ___ ist die These schwach.", "Folglich", "Следствие: Folglich ist …", { ru: "Доказательств нет. Следовательно, тезис слаб. … ist die These schwach.", en: "The evidence is missing. So the thesis is weak. … ist die These schwach.", es: "Faltan las pruebas. Por tanto, la tesis es débil. … ist die These schwach." }),
    fb("Der Preis sinkt. Die Qualität sinkt ___.", "hingegen", "hingegen в середине: контраст.", { ru: "Цена падает. Качество, напротив, тоже падает. Die Qualität sinkt …", en: "The price falls. The quality, by contrast, also falls. Die Qualität sinkt …", es: "El precio baja. La calidad, en cambio, también baja. Die Qualität sinkt …" }),
    fb("___ fehlt Personal, zum anderen steigt die Nachfrage.", "Zum einen", "Первая половина пары.", { ru: "С одной стороны не хватает людей, с другой растёт спрос. … fehlt Personal.", en: "On the one hand staff is missing; on the other demand rises. … fehlt Personal.", es: "Por un lado falta personal; por otro sube la demanda. … fehlt Personal." }),
    tl(
      "Он устал, тем не менее он работает.",
      "Er ist müde, trotzdem arbeitet er",
      "trotzdem не подчиняет глагол.",
      { en: "He is tired; nevertheless he works.", es: "Está cansado; sin embargo trabaja.", de: "Er arbeitet, auch wenn er müde ist." },
    ),
    tl(
      "Доказательств нет, следовательно, тезис слаб.",
      "Es gibt keine Belege, folglich ist die These schwach",
      "folglich + спрягаемый глагол сразу за ним.",
      { en: "There is no evidence, so the thesis is weak.", es: "No hay pruebas, así que la tesis es débil.", de: "Ohne Belege bleibt die These schwach." },
    ),
    tl(
      "С одной стороны план дорогой, с другой — он нужен.",
      "Zum einen ist der Plan teuer, zum anderen ist er nötig",
      "Обе связки занимают первое место.",
      { en: "On the one hand the plan is expensive, on the other it is necessary.", es: "Por un lado el plan es caro, por otro es necesario.", de: "Der Plan kostet viel, gebraucht wird er aber." },
    ),
    tl(
      "Она согласна, однако просит время.",
      "Sie ist einverstanden, jedoch bittet sie um Zeit",
      "jedoch открывает второе главное предложение.",
      { en: "She agrees, but she asks for time.", es: "Está de acuerdo, pero pide tiempo.", de: "Sie sagt ja und braucht noch Zeit." },
      ["Sie ist einverstanden, sie bittet jedoch um Zeit"],
    ),
    ec("Trotzdem er müde ist, arbeitet er.", "Er ist müde, trotzdem arbeitet er.", "trotzdem не союз. Глагол стоит сразу после него."),
    ec("Folglich die These ist schwach.", "Folglich ist die These schwach.", "После folglich сразу глагол."),
    ec("Zum einen der Plan ist teuer.", "Zum einen ist der Plan teuer.", "Глагол — второй член, сразу после zum einen."),
    ec("Jedoch er kommt später.", "Jedoch kommt er später.", "V2: kommt перед подлежащим."),
    sb(["Trotzdem", "arbeitet", "er", "weiter"], "Глагол сразу после trotzdem.", { ru: "Тем не менее он работает дальше", en: "Nevertheless he keeps working", es: "Sin embargo sigue trabajando" }),
    sb(["Folglich", "ist", "die", "These", "schwach"], "folglich ist.", { ru: "Следовательно, тезис слаб", en: "Consequently the thesis is weak", es: "Por tanto, la tesis es débil" }),
    sb(["Zum", "einen", "ist", "der", "Plan", "teuer"], "Zum einen ist.", { ru: "С одной стороны план дорогой", en: "On the one hand the plan is expensive", es: "Por un lado el plan es caro" }),
    sb(["Jedoch", "kommt", "sie", "später"], "Jedoch kommt sie.", { ru: "Однако она придёт позже", en: "However she is coming later", es: "Sin embargo ella llega más tarde" }),
  ],

  "de-ch39-text-types": [
    mc("Welcher Text bewertet und argumentiert?", ["der Kommentar", "der Bericht", "die Bewerbung", "der Lebenslauf"], "der Kommentar", "Комментарий занимает позицию. Отчёт держит факты, заявка просит место, жизнеописание перечисляет этапы.", { ru: "Какой текст оценивает и аргументирует?", en: "Which text evaluates and argues?", es: "¿Qué texto valora y argumenta?", de: "Welcher Text bewertet und argumentiert?" }),
    mc("Ein Bericht soll vor allem ___ bleiben. Wie soll ein Bericht bleiben?", ["sachlich", "ironisch", "wertend", "privat"], "sachlich", "В отчёте нет оценки. Wertend — это уже комментарий.", { ru: "Ein Bericht soll vor allem ___ bleiben. Каким должен оставаться отчёт?", en: "Ein Bericht soll vor allem ___ bleiben. What should a report stay?", es: "Ein Bericht soll vor allem ___ bleiben. ¿Cómo debe seguir un informe?", de: "Ein Bericht soll vor allem ___ bleiben. Wie soll ein Bericht bleiben?" }),
    mc("Mit freundlichen Grüßen steht am ___. Wo?", ["Schluss", "Betreff", "Anfang der Fakten", "Rand"], "Schluss", "Формула закрывает заявку, не открывает её.", { ru: "Mit freundlichen Grüßen стоит ___. Где?", en: "Mit freundlichen Grüßen stands at the ___. Where?", es: "Mit freundlichen Grüßen está en el ___. ¿Dónde?", de: "Mit freundlichen Grüßen steht am ___. Wo?" }),
    mc("Womit beginnt ein kurzer Kommentar?", ["mit einer These", "mit der Grußformel", "mit dem Lebenslauf", "mit einer Pointe ohne Thema"], "mit einer These", "Тезис — первое движение комментария.", { ru: "С чего начинается короткий комментарий?", en: "What does a short commentary begin with?", es: "¿Con qué empieza un comentario breve?", de: "Womit beginnt ein kurzer Kommentar?" }),
    fb("Der ___ nennt Fakten ohne persönliche Note.", "Bericht", "Отчёт: факты, без оценки.", { ru: "Отчёт называет факты без личной оценки. Der … nennt Fakten.", en: "The report states facts without a personal note. Der … nennt Fakten.", es: "El informe da hechos sin nota personal. Der … nennt Fakten." }),
    fb("Im ___ steht die These meist am Anfang.", "Kommentar", "Комментарий открывается тезисом.", { ru: "В комментарии тезис обычно в начале. Im … steht die These.", en: "In a commentary the thesis is usually at the start. Im … steht die These.", es: "En el comentario la tesis suele ir al principio. Im … steht die These." }),
    fb("___: Bewerbung um ein Praktikum", "Betreff", "Строка темы в заявке.", { ru: "Тема: заявка на практику. …: Bewerbung um ein Praktikum", en: "Subject: application for an internship. …: Bewerbung um ein Praktikum", es: "Asunto: solicitud de prácticas. …: Bewerbung um ein Praktikum" }),
    fb("Die ___ ordnet den Text in Einleitung, Hauptteil und Schluss.", "Gliederung", "Gliederung — план хода текста.", { ru: "План делит текст на вступление, основную часть и заключение. Die … ordnet den Text.", en: "The outline orders the text into opening, body, and close. Die … ordnet den Text.", es: "El esquema ordena el texto en introducción, cuerpo y cierre. Die … ordnet den Text." }),
    tl(
      "В отчёте только факты, без оценки.",
      "Im Bericht stehen nur Fakten, ohne Bewertung",
      "Bericht не оценивает.",
      { en: "The report has only facts, with no evaluation.", es: "El informe solo tiene hechos, sin valoración.", de: "Der Text bleibt bei dem, was geschehen ist." },
    ),
    tl(
      "Комментарий начинается с тезиса.",
      "Der Kommentar beginnt mit einer These",
      "These открывает комментарий.",
      { en: "The commentary begins with a thesis.", es: "El comentario empieza con una tesis.", de: "Zuerst steht die Behauptung." },
    ),
    tl(
      "Тема письма: заявка на практику.",
      "Betreff: Bewerbung um ein Praktikum",
      "Betreff называет повод, не приветствие.",
      { en: "Subject: application for an internship.", es: "Asunto: solicitud de prácticas.", de: "In der Betreffzeile steht der Anlass." },
    ),
    tl(
      "В конце кратко сформулируйте вывод.",
      "Formulieren Sie am Schluss das Ergebnis kurz",
      "Schluss держит вывод, не новый сюжет.",
      { en: "At the end, state the conclusion briefly.", es: "Al final, formule la conclusión brevemente.", de: "Der letzte Satz nennt das Resultat in Kürze." },
    ),
    ec("Der Bericht finden das schlecht.", "Der Bericht nennt die Fakten.", "Отчёт не оценивает, и глагол согласуется: nennt."),
    ec("Der Kommentar nennt nur Fakten und keine These.", "Der Kommentar beginnt mit einer These.", "Комментарий оценивает и открывается тезисом. Одни факты без оценки — это отчёт."),
    ec("Betreff: Hallo zusammen.", "Betreff: Bewerbung um ein Praktikum.", "В теме заявки — повод, не приветствие."),
    ec("Am Schluss stehen zum ersten Mal die neuen Fakten.", "Am Schluss steht das Ergebnis.", "Новые факты не приберегают для последней строки."),
    sb(["Der", "Bericht", "nennt", "nur", "die", "Fakten"], "Отчёт называет факты.", { ru: "Отчёт называет только факты", en: "The report states only the facts", es: "El informe nombra solo los hechos" }),
    sb(["Der", "Kommentar", "beginnt", "mit", "einer", "These"], "Тезис в начале.", { ru: "Комментарий начинается с тезиса", en: "The commentary begins with a thesis", es: "El comentario empieza con una tesis" }),
    sb(["Am", "Schluss", "steht", "das", "Ergebnis"], "Вывод в конце.", { ru: "В конце стоит вывод", en: "The result stands at the end", es: "Al final está el resultado" }),
    sb(["Der", "Betreff", "nennt", "die", "Stelle"], "Тема письма называет должность.", { ru: "Тема письма называет должность", en: "The subject line names the position", es: "El asunto nombra el puesto" }),
  ],

  "de-ch40-stilmittel": [
    mc("„Nicht unerheblich“ ist eine ___. Welches Stilmittel?", ["Litotes", "Anrede", "Frage", "Liste"], "Litotes", "Отрицание противоположного усиливает: это существенно.", { ru: "«Nicht unerheblich» — это ___. Какой приём?", en: "“Nicht unerheblich” is a ___. Which device?", es: "«Nicht unerheblich» es una ___. ¿Qué recurso?", de: "„Nicht unerheblich“ ist eine ___. Welches Stilmittel?" }),
    mc("„Der sogenannte Experte“ markiert ___. Was genau?", ["Distanz", "ein Kompliment", "einen Befehl", "den Genitiv"], "Distanz", "sogenannt снимает согласие автора с титулом.", { ru: "«Der sogenannte Experte» отмечает ___. Что именно?", en: "“Der sogenannte Experte” marks ___. What exactly?", es: "«Der sogenannte Experte» marca ___. ¿Qué exactamente?", de: "„Der sogenannte Experte“ markiert ___. Was genau?" }),
    mc("„ein Meer von Anträgen“ ist eine ___. Welches Stilmittel?", ["Metapher", "Adresse", "Zahl", "Präposition"], "Metapher", "Моря нет: перенос признака «очень много».", { ru: "«ein Meer von Anträgen» — это ___. Какой приём?", en: "“ein Meer von Anträgen” is a ___. Which device?", es: "«ein Meer von Anträgen» es una ___. ¿Qué recurso?", de: "„ein Meer von Anträgen“ ist eine ___. Welches Stilmittel?" }),
    mc("Ironie nennt oft das ___ des Gemeinten.", ["Gegenteil", "Datum", "Passiv", "Alphabet"], "Gegenteil", "Буквальная похвала при плохом результате — ирония.", { ru: "Ирония часто называет ___ сказанного.", en: "Irony often names the ___ of what is meant.", es: "La ironía suele nombrar lo ___ de lo que se quiere decir.", de: "Ironie nennt oft das ___ des Gemeinten." }),
    fb("Er war nicht ___ höflich.", "gerade", "nicht gerade сдвигает оценку вниз.", { ru: "Он был не то чтобы вежлив. Er war nicht … höflich.", en: "He was not exactly polite. Er war nicht … höflich.", es: "No fue precisamente amable. Er war nicht … höflich." }),
    fb("Das Ergebnis ist nicht ___.", "unerheblich", "Литота: nicht unerheblich значит «существенно».", { ru: "Результат не незначителен. Das Ergebnis ist nicht …", en: "The result is not insignificant. Das Ergebnis ist nicht …", es: "El resultado no es insignificante. Das Ergebnis ist nicht …" }),
    fb("Die ___ sitzt im letzten Satz.", "Pointe", "Удар, который перечитывает начало.", { ru: "Пуант сидит в последнем предложении. Die … sitzt im letzten Satz.", en: "The punchline sits in the last sentence. Die … sitzt im letzten Satz.", es: "La punta está en la última frase. Die … sitzt im letzten Satz." }),
    fb("Der Ausdruck ist ___: man kann ihn doppelt lesen.", "doppeldeutig", "Два чтения сразу.", { ru: "Выражение двусмысленно: его можно прочитать двояко. Der Ausdruck ist …", en: "The expression is ambiguous: it can be read two ways. Der Ausdruck ist …", es: "La expresión es ambigua: se puede leer de dos modos. Der Ausdruck ist …" }),
    tl(
      "Это совсем не плохо.",
      "Das ist gar nicht schlecht",
      "Преуменьшение: в строгой шкале это похвала.",
      { en: "That is not bad at all.", es: "Eso no está nada mal.", de: "Das kann sich sehen lassen." },
    ),
    tl(
      "Так называемый эксперт ошибся.",
      "Der sogenannte Experte hat sich geirrt",
      "sogenannt держит дистанцию, не комплимент.",
      { en: "The so-called expert was wrong.", es: "El llamado experto se equivocó.", de: "Der Mann mit diesem Titel lag falsch." },
    ),
    tl(
      "Он был не то чтобы вежлив.",
      "Er war nicht gerade höflich",
      "nicht gerade höflich = скорее невежлив.",
      { en: "He was not exactly polite.", es: "No fue precisamente amable.", de: "Höflichkeit war das nicht." },
    ),
    tl(
      "Это довольно существенно.",
      "Das ist nicht unerheblich",
      "Литота: nicht + отрицательное прилагательное.",
      { en: "That is not insignificant.", es: "Eso no es insignificante.", de: "Das wiegt durchaus." },
    ),
    ec("Nicht unerheblich bedeutet völlig unwichtig.", "Nicht unerheblich bedeutet durchaus wichtig.", "Литота усиливает: отрицание противоположного значит «существенно».", ["Nicht unerheblich bedeutet wesentlich.", "Nicht unerheblich heißt, dass es wichtig ist."]),
    ec("Der sogenannte der Experte irrt.", "Der sogenannte Experte irrt.", "Один артикль: der sogenannte Experte."),
    ec("Nicht gerade höflich bedeutet sehr höflich.", "Nicht gerade höflich bedeutet eher unhöflich.", "nicht gerade тянет оценку вниз."),
    ec("Ein Meer von Anträgen ist wörtlich ein Meer.", "Ein Meer von Anträgen ist nicht wörtlich gemeint.", "Метафора переносит «очень много». Моря в этой фразе нет.", ["Ein Meer von Anträgen ist eine Metapher."]),
    sb(["Das", "ist", "nicht", "gerade", "höflich"], "nicht gerade höflich.", { ru: "Это не то чтобы вежливо", en: "That is not exactly polite", es: "Eso no es precisamente amable" }),
    sb(["Der", "sogenannte", "Experte", "irrt"], "Дистанция через sogenannt.", { ru: "Так называемый эксперт ошибается", en: "The so-called expert is wrong", es: "El llamado experto se equivoca" }),
    sb(["Das", "ist", "eine", "klare", "Untertreibung"], "eine Untertreibung.", { ru: "Это явное преуменьшение", en: "That is a clear understatement", es: "Eso es una clara atenuación" }),
    sb(["Die", "Metapher", "ist", "nicht", "wörtlich"], "Метафору не читают буквально.", { ru: "Метафору не читают буквально", en: "The metaphor is not literal", es: "La metáfora no es literal" }),
  ],

  "de-ch41-wissenschaftssprache": [
    mc("„in Betracht ziehen“ bedeutet hier ___. Welcher Sinn?", ["erwägen", "vergessen", "bezahlen", "grüßen"], "erwägen", "Смысл несёт Betracht, не свободный перевод ziehen.", { ru: "«in Betracht ziehen» здесь значит ___. Какой смысл?", en: "“in Betracht ziehen” means ___ here. Which sense?", es: "«in Betracht ziehen» significa ___ aquí. ¿Qué sentido?", de: "„in Betracht ziehen“ bedeutet hier ___. Welcher Sinn?" }),
    mc("„Das Problem lässt sich lösen“ nennt eine ___. Was genau?", ["Möglichkeit", "Pflicht zur Zahlung", "Anrede", "Uhrzeit"], "Möglichkeit", "sich lassen + инфинитив = можно.", { ru: "«Das Problem lässt sich lösen» называет ___. Что именно?", en: "“Das Problem lässt sich lösen” names a ___. What exactly?", es: "«Das Problem lässt sich lösen» nombra una ___. ¿Qué exactamente?", de: "„Das Problem lässt sich lösen“ nennt eine ___. Was genau?" }),
    mc("„Der Antrag ist bis Freitag einzureichen“ nennt eine ___. Was genau?", ["Aufgabe", "reine Vermutung", "Ironie", "Begrüßung"], "Aufgabe", "sein + zu в инструкции = надлежит.", { ru: "«Der Antrag ist bis Freitag einzureichen» называет ___. Что именно?", en: "“Der Antrag ist bis Freitag einzureichen” names a ___. What exactly?", es: "«Der Antrag ist bis Freitag einzureichen» nombra una ___. ¿Qué exactamente?", de: "„Der Antrag ist bis Freitag einzureichen“ nennt eine ___. Was genau?" }),
    mc("Im Funktionsverbgefüge trägt das ___ die Bedeutung.", ["Nomen", "Komma", "Datum", "du"], "Nomen", "Глагол служебный, существительное держит смысл.", { ru: "В Funktionsverbgefüge смысл несёт ___.", en: "In a Funktionsverbgefüge the meaning is carried by the ___.", es: "En un Funktionsverbgefüge el sentido lo lleva el ___.", de: "Im Funktionsverbgefüge trägt das ___ die Bedeutung." }),
    fb("Wir ziehen den Vorschlag in ___.", "Betracht", "Фиксированная форма: in Betracht, не in Betrachtung.", { ru: "Мы принимаем предложение во внимание. Wir ziehen den Vorschlag in …", en: "We take the proposal into consideration. Wir ziehen den Vorschlag in …", es: "Tenemos en cuenta la propuesta. Wir ziehen den Vorschlag in …" }),
    fb("Die Daten stellen die These in ___.", "Frage", "in Frage stellen, без лишнего артикля.", { ru: "Данные ставят тезис под сомнение. Die Daten stellen die These in …", en: "The data call the thesis into question. Die Daten stellen die These in …", es: "Los datos ponen la tesis en duda. Die Daten stellen die These in …" }),
    fb("Die Studie bringt den Zweifel zum ___.", "Ausdruck", "zum Ausdruck bringen.", { ru: "Исследование выражает сомнение. Die Studie bringt den Zweifel zum …", en: "The study expresses the doubt. Die Studie bringt den Zweifel zum …", es: "El estudio expresa la duda. Die Studie bringt den Zweifel zum …" }),
    fb("Das Problem ___ sich lösen.", "lässt", "lässt sich + инфинитив без zu.", { ru: "Проблему можно решить. Das Problem … sich lösen.", en: "The problem can be solved. Das Problem … sich lösen.", es: "El problema se puede resolver. Das Problem … sich lösen." }),
    tl(
      "Мы принимаем предложение во внимание.",
      "Wir ziehen den Vorschlag in Betracht",
      "Вся связка in Betracht ziehen.",
      { en: "We are taking the proposal into consideration.", es: "Tenemos en cuenta la propuesta.", de: "Wir erwägen den Vorschlag." },
    ),
    tl(
      "Проблему можно решить.",
      "Das Problem lässt sich lösen",
      "Возможность: sich lassen, без zu.",
      { en: "The problem can be solved.", es: "El problema se puede resolver.", de: "Eine Lösung ist möglich." },
    ),
    tl(
      "Данные ставят тезис под сомнение.",
      "Die Daten stellen die These in Frage",
      "in Frage stellen.",
      { en: "The data call the thesis into question.", es: "Los datos ponen la tesis en duda.", de: "Die Zahlen machen die These zweifelhaft." },
    ),
    tl(
      "Исследование выражает сомнение.",
      "Die Untersuchung bringt Zweifel zum Ausdruck",
      "zum Ausdruck bringen.",
      { en: "The study expresses doubt.", es: "El estudio expresa dudas.", de: "Die Untersuchung sagt, dass etwas unsicher ist." },
    ),
    ec("Wir ziehen den Vorschlag in Betrachtung.", "Wir ziehen den Vorschlag in Betracht.", "Нет -ung: in Betracht."),
    ec("Das Problem lässt sich zu lösen.", "Das Problem lässt sich lösen.", "После sich lassen инфинитив без zu."),
    ec("Die Daten stellen die These in der Frage.", "Die Daten stellen die These in Frage.", "Без артикля: in Frage."),
    ec("Das Problem ist lösen.", "Das Problem ist zu lösen.", "sein + zu + инфинитив."),
    sb(["Wir", "ziehen", "den", "Vorschlag", "in", "Betracht"], "in Betracht в конце группы.", { ru: "Мы принимаем предложение во внимание", en: "We take the proposal into consideration", es: "Tenemos en cuenta la propuesta" }),
    sb(["Das", "Problem", "lässt", "sich", "lösen"], "lässt sich lösen.", { ru: "Проблему можно решить", en: "The problem can be solved", es: "El problema se puede resolver" }),
    sb(["Die", "Daten", "stellen", "die", "These", "in", "Frage"], "in Frage stellen.", { ru: "Данные ставят тезис под сомнение", en: "The data call the thesis into question", es: "Los datos ponen la tesis en duda" }),
    sb(["Die", "Untersuchung", "bringt", "Zweifel", "zum", "Ausdruck"], "zum Ausdruck.", { ru: "Исследование выражает сомнение", en: "The study expresses doubt", es: "El estudio expresa dudas" }),
  ],

  "de-ch42-nuancen-modal": [
    mc("Die Lampe ist aus. Er ___ schon weg sein. Welches Modalverb? (Schluss aus einem Indiz)", ["muss", "darf", "soll", "will"], "muss", "Свет погашен — улика, не приказ и не слух: эпистемический muss.", { ru: "Die Lampe ist aus. Er ___ schon weg sein. Какой модальный? (вывод по улике)", en: "Die Lampe ist aus. Er ___ schon weg sein. Which modal? (inference from a clue)", es: "Die Lampe ist aus. Er ___ schon weg sein. ¿Qué modal? (deducción por una pista)", de: "Die Lampe ist aus. Er ___ schon weg sein. Welches Modalverb? (Schluss aus einem Indiz)" }),
    mc("Die Kollegen erzählen es nur. Sie ___ reich sein. Welches Modalverb? (Hörensagen)", ["soll", "muss", "darf", "will"], "soll", "Чужой рассказ без своей улики — слух: soll, не вывод muss.", { ru: "Die Kollegen erzählen es nur. Sie ___ reich sein. Какой модальный? (слух)", en: "Die Kollegen erzählen es nur. Sie ___ reich sein. Which modal? (hearsay)", es: "Die Kollegen erzählen es nur. Sie ___ reich sein. ¿Qué modal? (rumor)", de: "Die Kollegen erzählen es nur. Sie ___ reich sein. Welches Modalverb? (Hörensagen)" }),
    mc("Das ___ stimmen, sicher bin ich nicht. Welche vorsichtige Form?", ["dürfte", "muss", "soll", "darf"], "dürfte", "Неуверенность не держит сильный muss. Осторожный вывод — dürfte.", { ru: "Das ___ stimmen, sicher bin ich nicht. Какая осторожная форма?", en: "Das ___ stimmen, sicher bin ich nicht. Which cautious form?", es: "Das ___ stimmen, sicher bin ich nicht. ¿Qué forma cautelosa?", de: "Das ___ stimmen, sicher bin ich nicht. Welche vorsichtige Form?" }),
    mc("Die Regel ist klar. Du ___ bleiben. Welche Form der Pflicht?", ["musst", "dürftest", "willst", "magst"], "musst", "Правило и адресат: деонтический долг, форма du musst.", { ru: "Die Regel ist klar. Du ___ bleiben. Какая форма долга?", en: "Die Regel ist klar. Du ___ bleiben. Which form of obligation?", es: "Die Regel ist klar. Du ___ bleiben. ¿Qué forma de obligación?", de: "Die Regel ist klar. Du ___ bleiben. Welche Form der Pflicht?" }),
    fb("Er ___ das nicht gewusst haben, behauptet er.", "will", "will + перфектный инфинитив = его заявление, не желание.", { ru: "Он утверждает, что не знал этого. Er … das nicht gewusst haben.", en: "He claims he did not know that. Er … das nicht gewusst haben.", es: "Afirma que no lo sabía. Er … das nicht gewusst haben." }),
    fb("Das ___ stimmen, aber es hilft uns nicht.", "mag", "mag открывает уступку. Желание или долг здесь ни при чём.", { ru: "Это, может, и верно, но нам не помогает. Das … stimmen.", en: "That may be true, but it does not help us. Das … stimmen.", es: "Eso puede ser cierto, pero no nos ayuda. Das … stimmen." }),
    fb("Sie ___ krank sein, sagt man.", "soll", "Слух: soll + инфинитив.", { ru: "Говорят, она больна. Sie … krank sein.", en: "She is said to be ill. Sie … krank sein.", es: "Dicen que está enferma. Sie … krank sein." }),
    fb("Sein Mantel hängt hier. Er ___ noch im Haus sein.", "muss", "Наблюдение → эпистемический muss.", { ru: "Его пальто висит здесь. Он, должно быть, ещё в доме. Er … noch im Haus sein.", en: "His coat is hanging here. He must still be in the house. Er … noch im Haus sein.", es: "Su abrigo cuelga aquí. Debe de seguir en la casa. Er … noch im Haus sein." }),
    tl(
      "Он, должно быть, уже ушёл.",
      "Er muss schon weg sein",
      "Эпистемический muss: вывод, не приказ.",
      { en: "He must already be gone.", es: "Debe de haberse ido ya.", de: "Alles spricht dafür, dass er nicht mehr da ist." },
    ),
    tl(
      "Говорят, она богата.",
      "Sie soll reich sein",
      "soll = чужой слух.",
      { en: "She is said to be rich.", es: "Dicen que es rica.", de: "Das behaupten andere über sie." },
    ),
    tl(
      "Это, пожалуй, верно.",
      "Das dürfte stimmen",
      "dürfte мягче, чем muss.",
      { en: "That is probably right.", es: "Eso probablemente sea cierto.", de: "Viel spricht dafür, ganz sicher ist es nicht." },
    ),
    tl(
      "Ты обязан остаться.",
      "Du musst bleiben",
      "Деонтический muss: долг, не догадка.",
      { en: "You have to stay.", es: "Tienes que quedarte.", de: "Bleiben ist für dich Pflicht." },
    ),
    ec("Die Lampe ist aus. Er muss bleiben.", "Die Lampe ist aus. Er muss schon weg sein.", "Лампа — улика. muss значит «он, должно быть, уже ушёл», а не «он обязан остаться».", ["Die Lampe ist aus, also muss er schon weg sein."]),
    ec("Man erzählt es nur. Sie muss reich sein.", "Man erzählt es nur. Sie soll reich sein.", "Чужой рассказ без улики — soll. muss требовал бы собственного наблюдения."),
    ec("Er möchte das nicht gewusst haben.", "Er will das nicht gewusst haben.", "möchte было бы желанием. will с перфектным инфинитивом — заявление, что он не знал.", ["Er will es nicht gewusst haben."]),
    ec("Das muss stimmen, obwohl ich ganz unsicher bin.", "Das dürfte stimmen, obwohl ich nicht sicher bin.", "При открытой неуверенности нужен dürfte. muss утверждает вывод слишком жёстко.", ["Das dürfte stimmen."]),
    sb(["Er", "muss", "schon", "weg", "sein"], "Эпистемический вывод.", { ru: "Он, должно быть, уже ушёл", en: "He must already be gone", es: "Debe de haberse ido ya" }),
    sb(["Sie", "soll", "reich", "sein"], "soll как слух.", { ru: "Говорят, она богата", en: "She is said to be rich", es: "Dicen que es rica" }),
    sb(["Das", "dürfte", "stimmen"], "Осторожная вероятность.", { ru: "Это, пожалуй, верно", en: "That is probably right", es: "Eso probablemente sea cierto" }),
    sb(["Du", "musst", "hier", "bleiben"], "Деонтический долг.", { ru: "Ты обязан остаться здесь", en: "You have to stay here", es: "Tienes que quedarte aquí" }),
  ],

  "de-ch43-informationsstruktur": [
    mc("Nur Anna hat angerufen. Der Fokus liegt auf ___.", ["Anna", "dem Verb allein", "der Uhrzeit", "der Anrede"], "Anna", "nur стоит прямо перед Анной.", { ru: "Nur Anna hat angerufen. Фокус на ___.", en: "Nur Anna hat angerufen. The focus is on ___.", es: "Nur Anna hat angerufen. El foco está en ___.", de: "Nur Anna hat angerufen. Der Fokus liegt auf ___." }),
    mc("Anna hat nur angerufen. Der Fokus liegt auf ___.", ["angerufen", "Anna als einziger Person", "dem Datum", "dem Artikel"], "angerufen", "nur перед причастием выделяет действие, не лицо.", { ru: "Anna hat nur angerufen. Фокус на ___.", en: "Anna hat nur angerufen. The focus is on ___.", es: "Anna hat nur angerufen. El foco está en ___.", de: "Anna hat nur angerufen. Der Fokus liegt auf ___." }),
    mc("Im Vorfeld eines Hauptsatzes steht ___.", ["ein Satzglied", "der ganze Aufsatz", "drei finite Verben", "kein Wort"], "ein Satzglied", "Перед глаголом ровно одно составляющее.", { ru: "В Vorfeld главного предложения стоит ___.", en: "In the Vorfeld of a main clause there is ___.", es: "En el Vorfeld de una oración principal hay ___.", de: "Im Vorfeld eines Hauptsatzes steht ___." }),
    mc("Die neue Information steht meist ___.", ["am Ende", "immer allein im Vorfeld", "vor dem ersten Artikel", "im Gruß"], "am Ende", "Рема тяготеет к концу фразы.", { ru: "Новая информация обычно стоит ___.", en: "New information usually stands ___.", es: "La información nueva suele estar ___.", de: "Die neue Information steht meist ___." }),
    fb("___ mag ich nicht, München schon.", "Berlin", "Берлин — контрастная тема в Vorfeld.", { ru: "Берлин мне не нравится, Мюнхен — да. … mag ich nicht, München schon.", en: "Berlin I do not like; Munich I do. … mag ich nicht, München schon.", es: "Berlín no me gusta; Múnich sí. … mag ich nicht, München schon." }),
    fb("___ er kam zu spät, nicht seine Kollegin.", "Ausgerechnet", "ausgerechnet перед неожиданным фокусом.", { ru: "Именно он опоздал, не его коллега. … er kam zu spät.", en: "He, of all people, was late, not his colleague. … er kam zu spät.", es: "Precisamente él llegó tarde, no su colega. … er kam zu spät." }),
    fb("Gestern ___ sie angerufen.", "hat", "Время в Vorfeld, глагол сразу за ним.", { ru: "Вчера она позвонила. Gestern … sie angerufen.", en: "She called yesterday. Gestern … sie angerufen.", es: "Ayer llamó ella. Gestern … sie angerufen." }),
    fb("Anna hat ___ angerufen, sie ist nicht gekommen.", "nur", "nur перед причастием: только позвонила.", { ru: "Анна только позвонила, она не пришла. Anna hat … angerufen.", en: "Anna only called; she did not come. Anna hat … angerufen.", es: "Anna solo llamó; no vino. Anna hat … angerufen." }),
    tl(
      "Берлин мне не нравится.",
      "Berlin mag ich nicht",
      "Берлин в Vorfeld: тема для сравнения.",
      { en: "Berlin, I don't like.", es: "Berlín no me gusta.", de: "Berlin gefällt mir nicht." },
      ["Ich mag Berlin nicht"],
    ),
    tl(
      "Только Анна позвонила.",
      "Nur Anna hat angerufen",
      "Фокус на Анне: другие не звонили.",
      { en: "Only Anna called.", es: "Solo llamó Anna.", de: "Der Anruf kam von Anna und von niemand sonst." },
    ),
    tl(
      "Именно он опоздал.",
      "Ausgerechnet er kam zu spät",
      "ausgerechnet маркирует неожиданное лицо.",
      { en: "He, of all people, was late.", es: "Precisamente él llegó tarde.", de: "Er kam zu spät, und niemand hat damit gerechnet." },
    ),
    tl(
      "Вчера она позвонила.",
      "Gestern hat sie angerufen",
      "Время занимает Vorfeld, hat на втором месте.",
      { en: "She called yesterday.", es: "Ayer llamó ella.", de: "Der Anruf war am Vortag." },
    ),
    ec("Nur hat Anna angerufen.", "Nur Anna hat angerufen.", "Если фокус — Анна, nur стоит перед Анной."),
    ec("Berlin ich mag nicht.", "Berlin mag ich nicht.", "После Vorfeld сразу глагол."),
    ec("Gestern sie hat angerufen.", "Gestern hat sie angerufen.", "В Vorfeld только время, не время плюс подлежащее."),
    ec("Ausgerechnet kam er zu spät.", "Ausgerechnet er kam zu spät.", "Неожидан фокус — лицо, частица перед er."),
    sb(["Berlin", "mag", "ich", "nicht"], "Тема Berlin, глагол mag.", { ru: "Берлин мне не нравится", en: "Berlin, I do not like", es: "Berlín no me gusta" }),
    sb(["Nur", "Anna", "hat", "angerufen"], "Фокус на Анне.", { ru: "Только Анна позвонила", en: "Only Anna called", es: "Solo llamó Anna" }),
    sb(["Ausgerechnet", "er", "kam", "zu", "spät"], "ausgerechnet er.", { ru: "Именно он опоздал", en: "He, of all people, was late", es: "Precisamente él llegó tarde" }),
    sb(["Gestern", "hat", "sie", "angerufen"], "Gestern hat.", { ru: "Вчера она позвонила", en: "She called yesterday", es: "Ayer llamó ella" }),
  ],

  "de-ch44-literarisch-kultur": [
    mc("Der Erzähler ist ___.", ["nicht automatisch der Autor", "immer dieselbe Person wie der Autor", "nur die Biografie des Autors", "ein Beweis für das gelebte Leben"], "nicht automatisch der Autor", "Ich в тексте — роль, не паспорт автора.", { ru: "Рассказчик — это ___.", en: "The narrator is ___.", es: "El narrador es ___.", de: "Der Erzähler ist ___." }),
    mc("Ein Motiv ist ___.", ["ein wiederkehrendes Element", "ein einmaliges Wort", "die einmalige Erwähnung eines Gegenstands", "der erste Satz und sonst nichts"], "ein wiederkehrendes Element", "Мотив узнают по возвращению, не по одному слову.", { ru: "Мотив — это ___.", en: "A motif is ___.", es: "Un motivo es ___.", de: "Ein Motiv ist ___." }),
    mc("Ein Symbol meint ___.", ["mehr als den Gegenstand", "nur den sichtbaren Gegenstand", "genau das, was man anfassen kann", "weniger als den Gegenstand"], "mehr als den Gegenstand", "Перенос сверх буквального предмета.", { ru: "Символ значит ___.", en: "A symbol means ___.", es: "Un símbolo significa ___.", de: "Ein Symbol meint ___." }),
    mc("Eine offene Deutung lässt ___.", ["mehrere Lesarten zu", "nur eine Lesart zu", "keine zweite Lesart zu", "die Biografie als einzigen Beweis zu"], "mehrere Lesarten zu", "Текст может удержать два чтения, если оба опираются на слова.", { ru: "Открытое толкование допускает ___.", en: "An open interpretation allows ___.", es: "Una interpretación abierta admite ___.", de: "Eine offene Deutung lässt ___." }),
    fb("Der ___ spricht, nicht unbedingt der Autor.", "Erzähler", "Голос текста ≠ биография.", { ru: "Говорит рассказчик, не обязательно автор. Der … spricht.", en: "The narrator speaks, not necessarily the author. Der … spricht.", es: "Habla el narrador, no necesariamente el autor. Der … spricht." }),
    fb("Das ___ kehrt im Text wieder.", "Motiv", "Повтор со сдвигом.", { ru: "Мотив возвращается в тексте. Das … kehrt im Text wieder.", en: "The motif returns in the text. Das … kehrt im Text wieder.", es: "El motivo vuelve en el texto. Das … kehrt im Text wieder." }),
    fb("Der Text lässt die ___ offen.", "Deutung", "Открытое толкование называют прямо.", { ru: "Текст оставляет толкование открытым. Der Text lässt die … offen.", en: "The text leaves the interpretation open. Der Text lässt die … offen.", es: "El texto deja abierta la interpretación. Der Text lässt die … offen." }),
    fb("Die Aussage bleibt ___.", "mehrdeutig", "Оба чтения опираются на текст.", { ru: "Высказывание остаётся многозначным. Die Aussage bleibt …", en: "The statement stays ambiguous. Die Aussage bleibt …", es: "La afirmación sigue siendo ambigua. Die Aussage bleibt …" }),
    tl(
      "Рассказчик — это не автор.",
      "Der Erzähler ist nicht der Autor",
      "Голос и человек, написавший текст, расходятся.",
      { en: "The narrator is not the author.", es: "El narrador no es el autor.", de: "Wer «ich» sagt, hat das Buch nicht unbedingt selbst geschrieben." },
    ),
    tl(
      "Мотив снова появляется в конце.",
      "Das Motiv kehrt am Ende wieder",
      "Мотив — возврат, не одно упоминание.",
      { en: "The motif returns at the end.", es: "El motivo vuelve al final.", de: "Dasselbe Element kommt am Schluss noch einmal." },
    ),
    tl(
      "Текст оставляет толкование открытым.",
      "Der Text lässt die Deutung offen",
      "Открытость — формулировка читателя, не дефект.",
      { en: "The text leaves the interpretation open.", es: "El texto deja abierta la interpretación.", de: "Zwei Lesarten bleiben möglich." },
    ),
    tl(
      "Символ значит больше, чем предмет.",
      "Das Symbol meint mehr als den Gegenstand",
      "Назовите перенос, не сюжет, которого нет в тексте.",
      { en: "The symbol means more than the object.", es: "El símbolo significa más que el objeto.", de: "Der Gegenstand steht für etwas Weiteres." },
    ),
    ec("Der Autor ist immer der Erzähler.", "Der Erzähler ist nicht immer der Autor.", "Ich-голос не доказывает автобиографию."),
    ec("Ein Symbol meint nur den Gegenstand.", "Ein Symbol meint mehr als den Gegenstand.", "Символ шире буквальной вещи."),
    ec("Ein Motiv steht nur einmal im Text.", "Ein Motiv kehrt im Text wieder.", "Мотив узнают по возвращению, а не по одному упоминанию."),
    ec("Der Text lässt keine Lesart zu, sonst ist er falsch.", "Der Text kann mehrere Lesarten offenlassen.", "Два опоры в тексте — не ошибка автора."),
    sb(["Der", "Erzähler", "ist", "nicht", "der", "Autor"], "Голос и автор различны.", { ru: "Рассказчик — это не автор", en: "The narrator is not the author", es: "El narrador no es el autor" }),
    sb(["Das", "Motiv", "kehrt", "am", "Ende", "wieder"], "Возврат мотива.", { ru: "Мотив снова появляется в конце", en: "The motif returns at the end", es: "El motivo vuelve al final" }),
    sb(["Der", "Text", "lässt", "die", "Deutung", "offen"], "lässt die Deutung offen.", { ru: "Текст оставляет толкование открытым", en: "The text leaves the interpretation open", es: "El texto deja abierta la interpretación" }),
    sb(["Das", "Symbol", "meint", "mehr", "als", "den", "Gegenstand"], "Больше, чем предмет.", { ru: "Символ значит больше, чем предмет", en: "The symbol means more than the object", es: "El símbolo significa más que el objeto" }),
  ],

  "de-ch45-pragmatic-mastery": [
    mc("„Es zieht“ kann in diesem Zimmer heißen:", ["Bitte mach das Fenster zu", "Hier ist es nur kalt, mehr nicht", "Der Wetterbericht für morgen", "Das Fenster ist schon zu"], "Bitte mach das Fenster zu", "Импликатура: ждут действия, не справки о сквозняке.", { ru: "«Es zieht» в этой комнате может значить:", en: "In this room, “Es zieht” can mean:", es: "En esta habitación, «Es zieht» puede significar:", de: "„Es zieht“ kann in diesem Zimmer heißen:" }),
    mc("Ein Registerwechsel ändert ___.", ["Anrede, Ton und Wortwahl zusammen", "nur die Anrede Sie", "nur ein einzelnes bitte", "nur die Länge der Unterschrift"], "Anrede, Ton und Wortwahl zusammen", "Регистр — пакет. Одно Sie или одно bitte его не держат.", { ru: "Смена регистра меняет ___.", en: "A change of register changes ___.", es: "Un cambio de registro cambia ___.", de: "Ein Registerwechsel ändert ___." }),
    mc("„Das ist nicht ganz klar“ schwächt ___ ab.", ["die Kritik", "die Behauptung bis zum Widerspruch", "nur die Anrede", "den Fakt selbst auf null"], "die Kritik", "Смягчение сохраняет претензию и лицо. Оно не отменяет факт.", { ru: "«Das ist nicht ganz klar» смягчает ___.", en: "“Das ist nicht ganz klar” softens ___.", es: "«Das ist nicht ganz klar» atenúa ___.", de: "„Das ist nicht ganz klar“ schwächt ___ ab." }),
    mc("Wenn der höfliche Hinweis nichts tut, folgt ___.", ["eine deutlichere Bitte", "sofort ein Befehl auf du", "noch einmal nur Es zieht", "ein Sprung in die Beleidigung"], "eine deutlichere Bitte", "Эскалация по ступеням: от намёка к явной просьбе, не к приказу и не к оскорблению.", { ru: "Если вежливый намёк не действует, следует ___.", en: "If the polite hint does nothing, what follows is ___.", es: "Si la indirecta cortés no surte efecto, sigue ___.", de: "Wenn der höfliche Hinweis nichts tut, folgt ___." }),
    fb("Wenn es Ihnen ___ ist, schreibe ich kurz.", "recht", "wenn es Ihnen recht ist — выход для адресата.", { ru: "Если вам удобно, я напишу коротко. Wenn es Ihnen … ist.", en: "If it is all right with you, I will keep this short. Wenn es Ihnen … ist.", es: "Si le parece bien, escribo breve. Wenn es Ihnen … ist." }),
    fb("Ich fasse mich ___.", "kurz", "Обещание не занять много времени.", { ru: "Я буду краток. Ich fasse mich …", en: "I will be brief. Ich fasse mich …", es: "Seré breve. Ich fasse mich …" }),
    fb("Könnten ___ das Fenster schließen?", "Sie", "Письменный регистр: Sie, не du.", { ru: "Не могли бы вы закрыть окно? Könnten … das Fenster schließen?", en: "Could you close the window? Könnten … das Fenster schließen?", es: "¿Podría cerrar la ventana? Könnten … das Fenster schließen?" }),
    fb("Unter Freunden sagt man ___, nicht Sie.", "du", "Близкий регистр держит du последовательно.", { ru: "Между друзьями говорят du, не Sie. Unter Freunden sagt man …", en: "Among friends one says du, not Sie. Unter Freunden sagt man …", es: "Entre amigos se dice du, no Sie. Unter Freunden sagt man …" }),
    tl(
      "Если вам удобно, я напишу коротко.",
      "Wenn es Ihnen recht ist, schreibe ich kurz",
      "Датив Ihnen и выход для собеседника.",
      { en: "If it is all right with you, I will keep this short.", es: "Si le parece bien, escribo breve.", de: "Ich bleibe bei wenigen Sätzen, sofern das passt." },
    ),
    tl(
      "Здесь дует.",
      "Es zieht",
      "В комнате с окном это просьба, не прогноз.",
      { en: "There is a draft.", es: "Hay corriente.", de: "Die Luft kommt hier durch." },
    ),
    tl(
      "Не могли бы вы, пожалуйста, закрыть окно?",
      "Könnten Sie bitte das Fenster schließen",
      "Sie + Konjunktiv II + bitte: письменная просьба.",
      { en: "Could you please close the window?", es: "¿Podría cerrar la ventana, por favor?", de: "Wären Sie so gut, das Fenster zu schließen?" },
    ),
    tl(
      "Я буду краток.",
      "Ich fasse mich kurz",
      "Ход вежливости, не содержание дела.",
      { en: "I will be brief.", es: "Seré breve.", de: "Es folgen nur wenige Sätze." },
    ),
    ec("Wenn es Sie recht ist, schreibe ich kurz.", "Wenn es Ihnen recht ist, schreibe ich kurz.", "После es ist нужен датив: Ihnen."),
    ec("Sehr geehrte Frau Berg, mach mal das Fenster zu.", "Sehr geehrte Frau Berg, könnten Sie bitte das Fenster schließen?", "Обращение на Sie не держит du, mal и короткий приказ. Просьба остаётся в письменном регистре.", ["Sehr geehrte Frau Berg, könnten Sie das Fenster bitte schließen?"]),
    ec("Sehr geehrte Frau Berg, was geht ab?", "Sehr geehrte Frau Berg, ich melde mich kurz.", "Sie-обращение не сочетается с was geht ab."),
    ec("Ich fasse mich kurzlich.", "Ich fasse mich kurz.", "Устойчиво: sich kurz fassen."),
    sb(["Wenn", "es", "Ihnen", "recht", "ist", "schreibe", "ich", "kurz"], "Ihnen recht ist.", { ru: "Если вам удобно, я напишу коротко", en: "If it is all right with you, I will keep this short", es: "Si le parece bien, escribo breve" }),
    sb(["Könnten", "Sie", "das", "Fenster", "schließen"], "Письменная просьба.", { ru: "Не могли бы вы закрыть окно", en: "Could you close the window", es: "¿Podría cerrar la ventana?" }),
    sb(["Ich", "fasse", "mich", "kurz"], "Обещание краткости.", { ru: "Я буду краток", en: "I will be brief", es: "Seré breve" }),
    sb(["Es", "zieht", "hier", "etwas"], "Намёк на сквозняк.", { ru: "Здесь немного дует", en: "There is a bit of a draft here", es: "Aquí hay un poco de corriente" }),
  ],
};
