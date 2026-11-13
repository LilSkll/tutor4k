import type { InterfaceLanguage, StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type L1 = Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>;

const choose = "Выберите правильный вариант";
const fill = "Вставьте пропущенное слово";
const tr = "Переведите на немецкий";
const fix = "Исправьте ошибку — напишите предложение целиком";
const build = "Соберите предложение";

/**
 * MC prompts keep the German frame and add a Russian task line so the learner
 * can read the question without already knowing German meta-language.
 * EN/ES/DE UIs get questionTranslations; prepareExercisesForInterface swaps the stem.
 * Fill-blank keeps the German stem and stores an L1 gloss.
 * Sentence-building stores a meaning gloss.
 */
function mc(
  question: string,
  options: string[],
  answer: string,
  explanation: string,
  l1?: L1,
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
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "translation",
    question,
    instruction: tr,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
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

/** German A2 — chapters 11–18. */
export const GERMAN_A2_EXERCISES: Record<string, Draft[]> = {
  "de-ch11-dativ": [
    mc(
      "Ich helfe ___ Mann. Какая форма? (кому)",
      ["den", "dem", "der", "des"],
      "dem",
      "helfen требует дательный: dem Mann.",
      {
        en: "Ich helfe ___ Mann. Which form? (to whom)",
        es: "Ich helfe ___ Mann. ¿Qué forma? (a quién)",
        de: "Ich helfe ___ Mann. Welche Form? (wem)",
      },
    ),
    mc(
      "Das Buch gehört ___. Какая форма «мне»?",
      ["mich", "mir", "ich", "mein"],
      "mir",
      "gehören + дательный: mir.",
      {
        en: "Das Buch gehört ___. Which form of “me”?",
        es: "Das Buch gehört ___. ¿Qué forma de «yo»?",
        de: "Das Buch gehört ___. Welche Form von „mir“?",
      },
    ),
    mc(
      "Wir danken ___ Lehrerin. Какая форма? (дательный)",
      ["die", "der", "den", "eine"],
      "der",
      "die Lehrerin → дательный der Lehrerin.",
      {
        en: "Wir danken ___ Lehrerin. Which form? (dative)",
        es: "Wir danken ___ Lehrerin. ¿Qué forma? (dativo)",
        de: "Wir danken ___ Lehrerin. Welche Form? (Dativ)",
      },
    ),
    mc(
      "Er gibt ___ Kind einen Ball. Какая форма? (кому)",
      ["das", "den", "dem", "des"],
      "dem",
      "geben: кому — дательный dem Kind, что — винительный.",
      {
        en: "Er gibt ___ Kind einen Ball. Which form? (to whom)",
        es: "Er gibt ___ Kind einen Ball. ¿Qué forma? (a quién)",
        de: "Er gibt ___ Kind einen Ball. Welche Form? (wem)",
      },
    ),
    fb("Kannst du ___ helfen?", "mir", "Местоимение «мне» в дативе: mir.", {
      ru: "Можешь мне помочь? Kannst du … helfen?",
      en: "Can you help me? Kannst du … helfen?",
      es: "¿Puedes ayudarme? Kannst du … helfen?",
    }),
    fb("Die Tasche gehört ___ Frau.", "der", "die Frau → der Frau.", {
      ru: "Сумка принадлежит женщине. Die Tasche gehört … Frau.",
      en: "The bag belongs to the woman. Die Tasche gehört … Frau.",
      es: "El bolso pertenece a la mujer. Die Tasche gehört … Frau.",
    }),
    fb("Ich danke ___. (вам, вежливо)", "Ihnen", "Вежливое «вам» — Ihnen.", {
      ru: "Я благодарю вас (вежливо). Ich danke …",
      en: "I thank you (formal). Ich danke …",
      es: "Le doy las gracias (formal). Ich danke …",
    }),
    fb("Sie hilft ___ Freund. (её)", "ihrem", "Притяжательное в дативе мужского рода: ihrem Freund.", {
      ru: "Она помогает её другу. Sie hilft … Freund.",
      en: "She helps her friend. Sie hilft … Freund.",
      es: "Ella ayuda a su amigo. Sie hilft … Freund.",
    }),
    tl("Я помогаю другу.", "Ich helfe dem Freund", "helfen + дательный.", ["Ich helfe einem Freund", "Ich helfe meinem Freund"]),
    tl("Книга принадлежит мне.", "Das Buch gehört mir", "gehören + mir."),
    tl("Мы благодарим учительницу.", "Wir danken der Lehrerin", "danken + дательный der Lehrerin.", ["Wir danken unserer Lehrerin"]),
    tl("Она даёт ребёнку яблоко.", "Sie gibt dem Kind einen Apfel", "dem Kind — кому, einen Apfel — что.", ["Sie gibt einem Kind einen Apfel"]),
    ec("Ich helfe den Mann.", "Ich helfe dem Mann.", "После helfe нужен дательный dem, не винительный den."),
    ec("Das Buch gehört mich.", "Das Buch gehört mir.", "gehören управляет дативом mir, не mich."),
    ec("Wir danken die Lehrerin.", "Wir danken der Lehrerin.", "danken + der Lehrerin."),
    ec("Er gibt das Kind einen Ball.", "Er gibt dem Kind einen Ball.", "Адресат стоит в дативе: dem Kind."),
    sb(["Ich", "helfe", "dem", "Mann"], "helfen + dem.", {
      ru: "Я помогаю мужчине",
      en: "I am helping the man",
      es: "Ayudo al hombre",
    }),
    sb(["Das", "Buch", "gehört", "mir"], "gehören + mir.", {
      ru: "Книга принадлежит мне",
      en: "The book belongs to me",
      es: "El libro me pertenece",
    }),
    sb(["Wir", "danken", "der", "Lehrerin"], "danken + der.", {
      ru: "Мы благодарим учительницу",
      en: "We thank the teacher",
      es: "Agradecemos a la profesora",
    }),
    sb(["Sie", "gibt", "dem", "Kind", "einen", "Apfel"], "Сначала дательный, потом винительный.", {
      ru: "Она даёт ребёнку яблоко",
      en: "She gives the child an apple",
      es: "Ella le da una manzana al niño",
    }),
  ],

  "de-ch12-wechsel": [
    mc(
      "Ich gehe in ___ Küche. Какая форма? (куда)",
      ["der", "die", "dem", "den"],
      "die",
      "Направление внутрь: in + винительный, die Küche.",
      {
        en: "Ich gehe in ___ Küche. Which form? (where to)",
        es: "Ich gehe in ___ Küche. ¿Qué forma? (adónde)",
        de: "Ich gehe in ___ Küche. Welche Form? (wohin)",
      },
    ),
    mc(
      "Das Bild hängt an ___ Wand. Какая форма? (где)",
      ["die", "der", "das", "den"],
      "der",
      "Место без движения: an + дательный, der Wand.",
      {
        en: "Das Bild hängt an ___ Wand. Which form? (where)",
        es: "Das Bild hängt an ___ Wand. ¿Qué forma? (dónde)",
        de: "Das Bild hängt an ___ Wand. Welche Form? (wo)",
      },
    ),
    mc(
      "Wir fahren in ___ Park. Какая форма? (куда)",
      ["dem", "den", "der", "des"],
      "den",
      "in + винительный мужского рода: in den Park.",
      {
        en: "Wir fahren in ___ Park. Which form? (where to)",
        es: "Wir fahren in ___ Park. ¿Qué forma? (adónde)",
        de: "Wir fahren in ___ Park. Welche Form? (wohin)",
      },
    ),
    mc(
      "Das Buch liegt auf ___ Tisch. Какая форма? (где)",
      ["den", "dem", "der", "das"],
      "dem",
      "liegen — место: auf + дательный dem Tisch.",
      {
        en: "Das Buch liegt auf ___ Tisch. Which form? (where)",
        es: "Das Buch liegt auf ___ Tisch. ¿Qué forma? (dónde)",
        de: "Das Buch liegt auf ___ Tisch. Welche Form? (wo)",
      },
    ),
    fb("Sie stellt die Tasse auf ___ Tisch. (куда)", "den", "Куда ставят: auf + винительный den Tisch.", {
      ru: "Она ставит чашку на стол (куда). Sie stellt die Tasse auf … Tisch.",
      en: "She puts the cup on the table (where to). Sie stellt die Tasse auf … Tisch.",
      es: "Pone la taza sobre la mesa (adónde). Sie stellt die Tasse auf … Tisch.",
    }),
    fb("Er wohnt in ___ Stadt.", "der", "wohnen — место: in der Stadt.", {
      ru: "Он живёт в городе (где). Er wohnt in … Stadt.",
      en: "He lives in the city (where). Er wohnt in … Stadt.",
      es: "Vive en la ciudad (dónde). Er wohnt in … Stadt.",
    }),
    fb("Der Hund liegt unter ___ Bett.", "dem", "liegen — место: unter dem Bett.", {
      ru: "Собака лежит под кроватью. Der Hund liegt unter … Bett.",
      en: "The dog is lying under the bed. Der Hund liegt unter … Bett.",
      es: "El perro está bajo la cama. Der Hund liegt unter … Bett.",
    }),
    fb("Die Lampe steht neben ___ Fenster. (где)", "dem", "neben + дательный, если предмет уже стоит: dem Fenster.", {
      ru: "Лампа стоит у окна (где). Die Lampe steht neben … Fenster.",
      en: "The lamp stands by the window (where). Die Lampe steht neben … Fenster.",
      es: "La lámpara está junto a la ventana (dónde). Die Lampe steht neben … Fenster.",
    }),
    tl("Я иду на кухню.", "Ich gehe in die Küche", "Направление: in + винительный."),
    tl("Книга лежит на столе.", "Das Buch liegt auf dem Tisch", "Место: auf + дательный."),
    tl("Картина висит на стене.", "Das Bild hängt an der Wand", "hängen о положении: an + дательный."),
    tl("Мы едем в парк.", "Wir fahren in den Park", "Направление, der Park → in den Park."),
    ec("Ich gehe in der Küche.", "Ich gehe in die Küche.", "gehen показывает направление: винительный die, не дательный der."),
    ec("Das Buch liegt auf den Tisch.", "Das Buch liegt auf dem Tisch.", "liegen — где, не куда: дательный dem."),
    ec("Wir fahren in dem Park.", "Wir fahren in den Park.", "fahren сюда — направление: in den Park."),
    ec("Das Bild hängt an die Wand.", "Das Bild hängt an der Wand.", "Картина уже висит: дательный an der Wand."),
    sb(["Ich", "gehe", "in", "die", "Küche"], "Направление: in die Küche.", {
      ru: "Я иду на кухню",
      en: "I am going into the kitchen",
      es: "Voy a la cocina",
    }),
    sb(["Das", "Buch", "liegt", "auf", "dem", "Tisch"], "Место: auf dem Tisch.", {
      ru: "Книга лежит на столе",
      en: "The book is lying on the table",
      es: "El libro está sobre la mesa",
    }),
    sb(["Wir", "fahren", "in", "den", "Park"], "Направление: in den Park.", {
      ru: "Мы едем в парк",
      en: "We are driving to the park",
      es: "Vamos al parque",
    }),
    sb(["Das", "Bild", "hängt", "an", "der", "Wand"], "Место: an der Wand.", {
      ru: "Картина висит на стене",
      en: "The picture is hanging on the wall",
      es: "El cuadro cuelga en la pared",
    }),
  ],

  "de-ch13-perfekt": [
    mc(
      "Ich ___ gestern Pizza gegessen. Какая форма вспомогательного?",
      ["bin", "habe", "ist", "hat"],
      "habe",
      "essen образует перфект с haben.",
      {
        en: "Ich ___ gestern Pizza gegessen. Which auxiliary?",
        es: "Ich ___ gestern Pizza gegessen. ¿Qué auxiliar?",
        de: "Ich ___ gestern Pizza gegessen. Welches Hilfsverb?",
      },
    ),
    mc(
      "Sie ___ nach Berlin gefahren. Какая форма? (перемещение)",
      ["hat", "ist", "habe", "bin"],
      "ist",
      "fahren с перемещением: sein.",
      {
        en: "Sie ___ nach Berlin gefahren. Which form? (change of place)",
        es: "Sie ___ nach Berlin gefahren. ¿Qué forma? (desplazamiento)",
        de: "Sie ___ nach Berlin gefahren. Welche Form? (Ortswechsel)",
      },
    ),
    mc(
      "Wir ___ einen Film gesehen. Какая форма вспомогательного?",
      ["sind", "haben", "ist", "seid"],
      "haben",
      "sehen → haben gesehen.",
      {
        en: "Wir ___ einen Film gesehen. Which auxiliary?",
        es: "Wir ___ einen Film gesehen. ¿Qué auxiliar?",
        de: "Wir ___ einen Film gesehen. Welches Hilfsverb?",
      },
    ),
    mc(
      "Er ___ um acht gekommen. Какая форма?",
      ["hat", "ist", "habe", "war"],
      "ist",
      "kommen → sein gekommen.",
      {
        en: "Er ___ um acht gekommen. Which form?",
        es: "Er ___ um acht gekommen. ¿Qué forma?",
        de: "Er ___ um acht gekommen. Welche Form?",
      },
    ),
    fb("Hast du das Buch ___?", "gelesen", "lesen → gelesen.", {
      ru: "Ты прочитал книгу? Hast du das Buch …?",
      en: "Have you read the book? Hast du das Buch …?",
      es: "¿Has leído el libro? Hast du das Buch …?",
    }),
    fb("Ich bin spät ___.", "aufgestanden", "aufstehen → ist aufgestanden.", {
      ru: "Я поздно встал. Ich bin spät …",
      en: "I got up late. Ich bin spät …",
      es: "Me levanté tarde. Ich bin spät …",
    }),
    fb("Sie hat Deutsch ___.", "gelernt", "Слабый глагол: ge + основа + t.", {
      ru: "Она учила немецкий. Sie hat Deutsch …",
      en: "She studied German. Sie hat Deutsch …",
      es: "Ella estudió alemán. Sie hat Deutsch …",
    }),
    fb("Wir sind zu Hause ___.", "geblieben", "bleiben → sein geblieben.", {
      ru: "Мы остались дома. Wir sind zu Hause …",
      en: "We stayed at home. Wir sind zu Hause …",
      es: "Nos quedamos en casa. Wir sind zu Hause …",
    }),
    tl("Я вчера ел пиццу.", "Ich habe gestern Pizza gegessen", "haben + Partizip в конце.", ["Gestern habe ich Pizza gegessen"]),
    tl("Она поехала в Берлин.", "Sie ist nach Berlin gefahren", "Перемещение: sein + gefahren."),
    tl("Мы посмотрели фильм.", "Wir haben einen Film gesehen", "sehen → haben gesehen.", ["Wir haben den Film gesehen"]),
    tl("Он пришёл в восемь.", "Er ist um acht gekommen", "kommen → sein gekommen.", ["Er ist um 8 gekommen", "Er ist um acht Uhr gekommen"]),
    ec("Ich bin Pizza gegessen.", "Ich habe Pizza gegessen.", "essen — с haben, не с sein."),
    ec("Sie hat nach Hause gegangen.", "Sie ist nach Hause gegangen.", "gehen — с sein."),
    ec("Wir haben gesehen den Film.", "Wir haben den Film gesehen.", "Причастие стоит в конце."),
    ec("Er ist gekommen um acht.", "Er ist um acht gekommen.", "Обстоятельство стоит перед причастием."),
    sb(["Ich", "habe", "Pizza", "gegessen"], "haben + gegessen.", {
      ru: "Я ел пиццу",
      en: "I ate pizza",
      es: "Comí pizza",
    }),
    sb(["Sie", "ist", "nach", "Berlin", "gefahren"], "sein + gefahren.", {
      ru: "Она поехала в Берлин",
      en: "She went to Berlin",
      es: "Ella fue a Berlín",
    }),
    sb(["Wir", "haben", "einen", "Film", "gesehen"], "Причастие в конце.", {
      ru: "Мы посмотрели фильм",
      en: "We watched a film",
      es: "Vimos una película",
    }),
    sb(["Er", "ist", "um", "acht", "gekommen"], "sein + gekommen.", {
      ru: "Он пришёл в восемь",
      en: "He arrived at eight",
      es: "Llegó a las ocho",
    }),
  ],

  "de-ch14-praeteritum": [
    mc(
      "Ich ___ gestern müde. Какая форма sein в прошедшем?",
      ["war", "hatte", "bin", "wäre"],
      "war",
      "Прошедшее sein: ich war. wäre здесь не вариант претерита.",
      {
        en: "Ich ___ gestern müde. Which past form of sein?",
        es: "Ich ___ gestern müde. ¿Qué forma pasada de sein?",
        de: "Ich ___ gestern müde. Welche Vergangenheitsform von sein?",
      },
    ),
    mc(
      "Sie ___ keine Zeit. Какая форма haben в прошедшем?",
      ["war", "hatte", "ist", "hat"],
      "hatte",
      "Прошедшее haben: sie hatte.",
      {
        en: "Sie ___ keine Zeit. Which past form of haben?",
        es: "Sie ___ keine Zeit. ¿Qué forma pasada de haben?",
        de: "Sie ___ keine Zeit. Welche Vergangenheitsform von haben?",
      },
    ),
    mc(
      "Wir ___ nicht kommen. Какая форма können в претерите?",
      ["konnte", "konnten", "können", "kann"],
      "konnten",
      "Претерит können, wir: konnten.",
      {
        en: "Wir ___ nicht kommen. Which preterite of können?",
        es: "Wir ___ nicht kommen. ¿Qué pretérito de können?",
        de: "Wir ___ nicht kommen. Welches Präteritum von können?",
      },
    ),
    mc(
      "Er ___ früher Arzt. Какая форма? (кем он был)",
      ["war", "hatte", "ist", "wollte"],
      "war",
      "Кем он был: war.",
      {
        en: "Er ___ früher Arzt. Which form? (what he was)",
        es: "Er ___ früher Arzt. ¿Qué forma? (qué era)",
        de: "Er ___ früher Arzt. Welche Form? (was er war)",
      },
    ),
    fb("___ du schon in Wien?", "Warst", "du warst.", {
      ru: "Ты уже был в Вене? … du schon in Wien?",
      en: "Have you already been to Vienna? … du schon in Wien?",
      es: "¿Ya has estado en Viena? … du schon in Wien?",
    }),
    fb("Ich ___ als Kind viel lesen.", "wollte", "Претерит wollen: ich wollte + инфинитив.", {
      ru: "В детстве я хотел много читать. Ich … als Kind viel lesen.",
      en: "As a child I wanted to read a lot. Ich … als Kind viel lesen.",
      es: "De niño quería leer mucho. Ich … als Kind viel lesen.",
    }),
    fb("Sie ___ nicht allein bleiben.", "durfte", "Претерит dürfen: sie durfte.", {
      ru: "Ей нельзя было оставаться одной. Sie … nicht allein bleiben.",
      en: "She was not allowed to stay alone. Sie … nicht allein bleiben.",
      es: "No le estaba permitido quedarse sola. Sie … nicht allein bleiben.",
    }),
    fb("Wir ___ ein kleines Haus.", "hatten", "wir hatten.", {
      ru: "У нас был маленький дом. Wir … ein kleines Haus.",
      en: "We had a small house. Wir … ein kleines Haus.",
      es: "Teníamos una casa pequeña. Wir … ein kleines Haus.",
    }),
    tl("Раньше я был студентом.", "Früher war ich Student", "war в претерите; Früher занимает первое место.", ["Früher war ich ein Student"]),
    tl("У неё не было времени.", "Sie hatte keine Zeit", "hatte + keine Zeit."),
    tl("Мы не могли прийти.", "Wir konnten nicht kommen", "konnten + инфинитив, nicht перед инфинитивом."),
    tl("Он хотел кофе.", "Er wollte einen Kaffee", "Претерит wollen.", ["Er wollte Kaffee"]),
    ec("Ich war habe keine Zeit.", "Ich hatte keine Zeit.", "Прошедшее haben — hatte, без war."),
    ec("Sie hatte müde.", "Sie war müde.", "Состояние — war, не hatte."),
    ec("Wir konnte nicht kommen.", "Wir konnten nicht kommen.", "wir → konnten."),
    ec("Er war ein Buch.", "Er hatte ein Buch.", "Обладание в прошлом: hatte."),
    sb(["Früher", "war", "ich", "Student"], "V2: Früher war ich.", {
      ru: "Раньше я был студентом",
      en: "I used to be a student",
      es: "Antes era estudiante",
    }),
    sb(["Sie", "hatte", "keine", "Zeit"], "hatte keine Zeit.", {
      ru: "У неё не было времени",
      en: "She had no time",
      es: "Ella no tenía tiempo",
    }),
    sb(["Wir", "konnten", "nicht", "kommen"], "Инфинитив в конце.", {
      ru: "Мы не могли прийти",
      en: "We could not come",
      es: "No pudimos venir",
    }),
    sb(["Er", "wollte", "einen", "Kaffee"], "wollte + винительный.", {
      ru: "Он хотел кофе",
      en: "He wanted a coffee",
      es: "Quería un café",
    }),
  ],

  "de-ch15-reflexive": [
    mc(
      "Ich freue ___ auf das Wochenende. Какое возвратное?",
      ["mich", "mir", "dich", "sich"],
      "mich",
      "ich freue mich.",
      {
        en: "Ich freue ___ auf das Wochenende. Which reflexive?",
        es: "Ich freue ___ auf das Wochenende. ¿Qué reflexivo?",
        de: "Ich freue ___ auf das Wochenende. Welches Reflexivpronomen?",
      },
    ),
    mc(
      "Er wäscht ___ die Hände. Какая форма? (себе)",
      ["ihn", "sich", "ihm", "mich"],
      "sich",
      "Части тела: дативное sich + винительный die Hände.",
      {
        en: "Er wäscht ___ die Hände. Which form? (himself)",
        es: "Er wäscht ___ die Hände. ¿Qué forma? (a sí mismo)",
        de: "Er wäscht ___ die Hände. Welche Form? (sich)",
      },
    ),
    mc(
      "Wir setzen ___. Какое возвратное?",
      ["uns", "euch", "sich", "mir"],
      "uns",
      "wir setzen uns.",
      {
        en: "Wir setzen ___. Which reflexive?",
        es: "Wir setzen ___. ¿Qué reflexivo?",
        de: "Wir setzen ___. Welches Reflexivpronomen?",
      },
    ),
    mc(
      "Freust du ___? Какое возвратное?",
      ["dich", "dir", "sich", "mich"],
      "dich",
      "du freust dich.",
      {
        en: "Freust du ___? Which reflexive?",
        es: "Freust du ___? ¿Qué reflexivo?",
        de: "Freust du ___? Welches Reflexivpronomen?",
      },
    ),
    fb("Sie interessiert ___ für Musik.", "sich", "sich interessieren für.", {
      ru: "Она интересуется музыкой. Sie interessiert … für Musik.",
      en: "She is interested in music. Sie interessiert … für Musik.",
      es: "Le interesa la música. Sie interessiert … für Musik.",
    }),
    fb("Ich kaufe ___ ein Buch.", "mir", "Покупка для себя: дативное mir.", {
      ru: "Я покупаю себе книгу. Ich kaufe … ein Buch.",
      en: "I am buying myself a book. Ich kaufe … ein Buch.",
      es: "Me compro un libro. Ich kaufe … ein Buch.",
    }),
    fb("Erinnerst du ___ an den Film?", "dich", "sich erinnern an: du … dich.", {
      ru: "Ты помнишь фильм? Erinnerst du … an den Film?",
      en: "Do you remember the film? Erinnerst du … an den Film?",
      es: "¿Recuerdas la película? Erinnerst du … an den Film?",
    }),
    fb("Die Kinder freuen ___.", "sich", "sie freuen sich.", {
      ru: "Дети радуются. Die Kinder freuen …",
      en: "The children are glad. Die Kinder freuen …",
      es: "Los niños se alegran. Die Kinder freuen …",
    }),
    tl("Я радуюсь выходным.", "Ich freue mich auf das Wochenende", "sich freuen auf + винительный."),
    tl("Он моет руки.", "Er wäscht sich die Hände", "Возвратное в дативе + часть тела в винительном."),
    tl("Мы садимся.", "Wir setzen uns", "sich setzen: wir setzen uns."),
    tl("Она интересуется музыкой.", "Sie interessiert sich für Musik", "sich interessieren für + винительный."),
    ec("Ich freue sich auf dich.", "Ich freue mich auf dich.", "С ich возвратное местоимение — mich."),
    ec("Er wäscht ihn die Hände.", "Er wäscht sich die Hände.", "Свои руки: sich, не ihn."),
    ec("Wir setzen euch.", "Wir setzen uns.", "wir → uns."),
    ec("Sie interessiert für Musik.", "Sie interessiert sich für Musik.", "Без sich глагол interessieren здесь неполный."),
    sb(["Ich", "freue", "mich", "auf", "morgen"], "mich + auf.", {
      ru: "Я радуюсь завтрашнему дню",
      en: "I am looking forward to tomorrow",
      es: "Me alegro por mañana",
    }),
    sb(["Er", "wäscht", "sich", "die", "Hände"], "sich die Hände.", {
      ru: "Он моет руки",
      en: "He washes his hands",
      es: "Se lava las manos",
    }),
    sb(["Wir", "setzen", "uns"], "wir setzen uns.", {
      ru: "Мы садимся",
      en: "We sit down",
      es: "Nos sentamos",
    }),
    sb(["Sie", "interessiert", "sich", "für", "Musik"], "sich für Musik.", {
      ru: "Она интересуется музыкой",
      en: "She is interested in music",
      es: "Se interesa por la música",
    }),
  ],

  "de-ch16-imperative-comp": [
    mc(
      "___ bitte leise! Какая форма императива? (du, sein)",
      ["Bist", "Sei", "Sind", "Seid"],
      "Sei",
      "Императив sein для du: Sei.",
      {
        en: "___ bitte leise! Which imperative? (du, sein)",
        es: "___ bitte leise! ¿Qué imperativo? (du, sein)",
        de: "___ bitte leise! Welcher Imperativ? (du, sein)",
      },
    ),
    mc(
      "Berlin ist größer ___ Bonn. Какое слово сравнения?",
      ["als", "wie", "dass", "wann"],
      "als",
      "Сравнительная степень + als.",
      {
        en: "Berlin ist größer ___ Bonn. Which comparison word?",
        es: "Berlin ist größer ___ Bonn. ¿Qué palabra de comparación?",
        de: "Berlin ist größer ___ Bonn. Welches Vergleichswort?",
      },
    ),
    mc(
      "___ Sie bitte mit! Какая форма? (вежливо)",
      ["Komm", "Kommt", "Kommen", "Kommst"],
      "Kommen",
      "Вежливый императив: инфинитив + Sie.",
      {
        en: "___ Sie bitte mit! Which form? (formal)",
        es: "___ Sie bitte mit! ¿Qué forma? (formal)",
        de: "___ Sie bitte mit! Welche Form? (höflich)",
      },
    ),
    mc(
      "Das ist die ___ Stadt. Какая степень? (schön)",
      ["schöne", "schönste", "schön", "schönen"],
      "schönste",
      "Превосходная степень с артиклем: die schönste.",
      {
        en: "Das ist die ___ Stadt. Which degree? (schön)",
        es: "Das ist die ___ Stadt. ¿Qué grado? (schön)",
        de: "Das ist die ___ Stadt. Welcher Grad? (schön)",
      },
    ),
    fb("___ das Buch! (du, lesen)", "Lies", "lesen в императиве du: Lies.", {
      ru: "Прочитай книгу! (du, lesen) … das Buch!",
      en: "Read the book! (du, lesen) … das Buch!",
      es: "¡Lee el libro! (du, lesen) … das Buch!",
    }),
    fb("___ bitte hier! (ihr, warten)", "Wartet", "ihr: основа + t.", {
      ru: "Подождите, пожалуйста, здесь! (ihr) … bitte hier!",
      en: "Please wait here! (ihr) … bitte hier!",
      es: "¡Esperad aquí, por favor! (ihr) … bitte hier!",
    }),
    fb("Dieser Film ist ___ als der andere. (interessant)", "interessanter", "Двусложное прилагательное: основа + -er.", {
      ru: "Этот фильм интереснее другого. Dieser Film ist … als der andere.",
      en: "This film is more interesting than the other. Dieser Film ist … als der andere.",
      es: "Esta película es más interesante que la otra. Dieser Film ist … als der andere.",
    }),
    fb("Sie ist am ___. (schnell)", "schnellsten", "am + основа + -sten.", {
      ru: "Она самая быстрая. Sie ist am …",
      en: "She is the fastest. Sie ist am …",
      es: "Ella es la más rápida. Sie ist am …",
    }),
    tl("Открой окно!", "Öffne das Fenster!", "Императив du от öffnen сохраняет -e.", ["Mach das Fenster auf", "Öffne bitte das Fenster"]),
    tl("Берлин больше Бонна.", "Berlin ist größer als Bonn", "Сравнительная степень + als."),
    tl("Пожалуйста, подождите.", "Warten Sie bitte", "Вежливая просьба: инфинитив + Sie.", ["Bitte warten Sie"]),
    tl("Это самый красивый город.", "Das ist die schönste Stadt", "die Stadt — женский род, die schönste."),
    ec("Du sei leise!", "Sei leise!", "В императиве du местоимение не ставится перед глаголом."),
    ec("Berlin ist mehr groß als Bonn.", "Berlin ist größer als Bonn.", "Односложное groß → größer, не mehr groß."),
    ec("Lernen bitte die Wörter! (форма Sie)", "Lernen Sie bitte die Wörter!", "Вежливый императив: инфинитив + Sie."),
    ec("Tom ist so groß als Paul.", "Tom ist so groß wie Paul.", "Равенство: so + прилагательное + wie."),
    sb(["Sei", "bitte", "leise"], "Императив du: Sei.", {
      ru: "Пожалуйста, тише",
      en: "Please be quiet",
      es: "Por favor, silencio",
    }),
    sb(["Berlin", "ist", "größer", "als", "Bonn"], "größer als.", {
      ru: "Берлин больше Бонна",
      en: "Berlin is bigger than Bonn",
      es: "Berlín es más grande que Bonn",
    }),
    sb(["Warten", "Sie", "bitte"], "Вежливый императив.", {
      ru: "Пожалуйста, подождите",
      en: "Please wait",
      es: "Espere, por favor",
    }),
    sb(["Das", "ist", "die", "schönste", "Stadt"], "Превосходная степень с die.", {
      ru: "Это самый красивый город",
      en: "This is the most beautiful city",
      es: "Esta es la ciudad más bonita",
    }),
  ],

  "de-ch17-adj-declension": [
    mc(
      "der ___ Tag (schön). Какое окончание?",
      ["schöne", "schöner", "schönes", "schönen"],
      "schöne",
      "После der в именительном — слабое окончание -e.",
      {
        en: "der ___ Tag (schön). Which ending?",
        es: "der ___ Tag (schön). ¿Qué desinencia?",
        de: "der ___ Tag (schön). Welche Endung?",
      },
    ),
    mc(
      "ein ___ Mann (nett). Какое окончание?",
      ["nette", "netter", "nettes", "netten"],
      "netter",
      "После ein, мужской род именительный: -er.",
      {
        en: "ein ___ Mann (nett). Which ending?",
        es: "ein ___ Mann (nett). ¿Qué desinencia?",
        de: "ein ___ Mann (nett). Welche Endung?",
      },
    ),
    mc(
      "Ich trinke ___ Wasser. Какая форма? (kalt, без артикля)",
      ["kalter", "kalte", "kaltes", "kalten"],
      "kaltes",
      "Средний род без артикля: -es.",
      {
        en: "Ich trinke ___ Wasser. Which form? (kalt, no article)",
        es: "Ich trinke ___ Wasser. ¿Qué forma? (kalt, sin artículo)",
        de: "Ich trinke ___ Wasser. Welche Form? (kalt, ohne Artikel)",
      },
    ),
    mc(
      "den ___ Film (neu). Какое окончание?",
      ["neue", "neuer", "neues", "neuen"],
      "neuen",
      "После den — окончание -en.",
      {
        en: "den ___ Film (neu). Which ending?",
        es: "den ___ Film (neu). ¿Qué desinencia?",
        de: "den ___ Film (neu). Welche Endung?",
      },
    ),
    fb("Das ist eine ___ Idee. (gut)", "gute", "eine + женский род: -e.", {
      ru: "Это хорошая идея. Das ist eine … Idee.",
      en: "This is a good idea. Das ist eine … Idee.",
      es: "Esta es una buena idea. Das ist eine … Idee.",
    }),
    fb("Wir sehen einen ___ Hund. (klein)", "kleinen", "einen + мужской род: -en.", {
      ru: "Мы видим маленькую собаку. Wir sehen einen … Hund.",
      en: "We see a small dog. Wir sehen einen … Hund.",
      es: "Vemos un perro pequeño. Wir sehen einen … Hund.",
    }),
    fb("___ Brot schmeckt gut. (frisch, без артикля)", "Frisches", "das Brot без артикля: -es.", {
      ru: "Свежий хлеб вкусный (без артикля). … Brot schmeckt gut.",
      en: "Fresh bread tastes good (no article). … Brot schmeckt gut.",
      es: "El pan fresco está rico (sin artículo). … Brot schmeckt gut.",
    }),
    fb("Die ___ Lampe ist neu. (alt)", "alte", "die + именительный: -e.", {
      ru: "Старая лампа новая? Нет: прилагательное к лампе. Die … Lampe ist neu.",
      en: "The old lamp is new. Die … Lampe ist neu.",
      es: "La lámpara vieja es nueva. Die … Lampe ist neu.",
    }),
    tl("Это хороший день.", "Das ist ein guter Tag", "ein + мужской род: guter."),
    tl("Я вижу маленький дом.", "Ich sehe ein kleines Haus", "ein + средний род в винительном: kleines.", ["Ich sehe das kleine Haus"]),
    tl("Холодная вода вкусная.", "Kaltes Wasser ist lecker", "Без артикля, средний род: kaltes Wasser.", ["Das kalte Wasser ist lecker"]),
    tl("Новый фильм интересный.", "Der neue Film ist interessant", "der + слабое -e."),
    ec("Der gut Tag beginnt.", "Der gute Tag beginnt.", "После der нужно окончание -e."),
    ec("Ein kleine Kind spielt.", "Ein kleines Kind spielt.", "Средний род после ein: kleines."),
    ec("Ich sehe einen klein Hund.", "Ich sehe einen kleinen Hund.", "После einen окончание -en."),
    ec("Das ist eine guter Idee.", "Das ist eine gute Idee.", "eine + женский род: gute, не guter."),
    sb(["Das", "ist", "ein", "guter", "Tag"], "Смешанное склонение: guter.", {
      ru: "Это хороший день",
      en: "This is a good day",
      es: "Este es un buen día",
    }),
    sb(["Ich", "sehe", "ein", "kleines", "Haus"], "kleines Haus.", {
      ru: "Я вижу маленький дом",
      en: "I see a small house",
      es: "Veo una casa pequeña",
    }),
    sb(["Der", "neue", "Film", "ist", "interessant"], "der neue Film.", {
      ru: "Новый фильм интересный",
      en: "The new film is interesting",
      es: "La película nueva es interesante",
    }),
    sb(["Wir", "trinken", "kaltes", "Wasser"], "Сильное окончание без артикля.", {
      ru: "Мы пьём холодную воду",
      en: "We drink cold water",
      es: "Bebemos agua fría",
    }),
  ],

  "de-ch18-subordinates": [
    mc(
      "Ich bleibe hier, ___ ich müde bin. Какой союз? (причина)",
      ["weil", "dass", "ob", "und"],
      "weil",
      "Причина: weil, глагол в конце.",
      {
        en: "Ich bleibe hier, ___ ich müde bin. Which conjunction? (reason)",
        es: "Ich bleibe hier, ___ ich müde bin. ¿Qué conjunción? (causa)",
        de: "Ich bleibe hier, ___ ich müde bin. Welche Konjunktion? (Grund)",
      },
    ),
    mc(
      "Ich glaube, ___ das richtig ist. Какой союз?",
      ["weil", "dass", "denn", "oder"],
      "dass",
      "dass вводит содержание; глагол в конце.",
      {
        en: "Ich glaube, ___ das richtig ist. Which conjunction?",
        es: "Ich glaube, ___ das richtig ist. ¿Qué conjunción?",
        de: "Ich glaube, ___ das richtig ist. Welche Konjunktion?",
      },
    ),
    mc(
      "___ es regnet, nehme ich den Bus. Какое слово? (если)",
      ["Dass", "Wenn", "Denn", "Und"],
      "Wenn",
      "Условие: wenn в начале, в главном глагол сразу после запятой.",
      {
        en: "___ es regnet, nehme ich den Bus. Which word? (if)",
        es: "___ es regnet, nehme ich den Bus. ¿Qué palabra? (si)",
        de: "___ es regnet, nehme ich den Bus. Welches Wort? (wenn)",
      },
    ),
    mc(
      "Ich lerne Deutsch, ___ in Berlin zu arbeiten. Какое слово цели?",
      ["um", "dass", "weil", "ohne"],
      "um",
      "Одна и та же подлежащая и цель: um … zu.",
      {
        en: "Ich lerne Deutsch, ___ in Berlin zu arbeiten. Which purpose word?",
        es: "Ich lerne Deutsch, ___ in Berlin zu arbeiten. ¿Qué palabra de finalidad?",
        de: "Ich lerne Deutsch, ___ in Berlin zu arbeiten. Welches Zweckwort?",
      },
    ),
    fb("Sie sagt, ___ sie keine Zeit hat.", "dass", "dass + глагол в конце.", {
      ru: "Она говорит, что у неё нет времени. Sie sagt, … sie keine Zeit hat.",
      en: "She says that she has no time. Sie sagt, … sie keine Zeit hat.",
      es: "Dice que no tiene tiempo. Sie sagt, … sie keine Zeit hat.",
    }),
    fb("Wir lernen, ___ der Kurs nützlich ist.", "weil", "weil вводит причину.", {
      ru: "Мы учимся, потому что курс полезен. Wir lernen, … der Kurs nützlich ist.",
      en: "We study because the course is useful. Wir lernen, … der Kurs nützlich ist.",
      es: "Estudiamos porque el curso es útil. Wir lernen, … der Kurs nützlich ist.",
    }),
    fb("Ich hoffe, dich bald ___ sehen.", "zu", "zu стоит прямо перед инфинитивом.", {
      ru: "Надеюсь скоро тебя увидеть. Ich hoffe, dich bald … sehen.",
      en: "I hope to see you soon. Ich hoffe, dich bald … sehen.",
      es: "Espero verte pronto. Ich hoffe, dich bald … sehen.",
    }),
    fb("Wenn ich Zeit ___, komme ich.", "habe", "В придаточном с wenn глагол в конце: habe.", {
      ru: "Если будет время, я приду. Wenn ich Zeit …, komme ich.",
      en: "If I have time, I will come. Wenn ich Zeit …, komme ich.",
      es: "Si tengo tiempo, vengo. Wenn ich Zeit …, komme ich.",
    }),
    tl("Я остаюсь дома, потому что я устал.", "Ich bleibe zu Hause, weil ich müde bin", "weil отправляет глагол в конец.", ["Ich bleibe zuhause, weil ich müde bin"]),
    tl("Я знаю, что он придёт.", "Ich weiß, dass er kommt", "dass + личная форма в конце.", ["Ich weiß, dass er kommen wird"]),
    tl("Если идёт дождь, я беру автобус.", "Wenn es regnet, nehme ich den Bus", "После придаточного главное начинается с глагола.", ["Wenn es regnet, nehme ich einen Bus"]),
    tl("Я пытаюсь уснуть.", "Ich versuche zu schlafen", "zu + инфинитив после versuchen."),
    ec("Ich bleibe hier, weil ich bin müde.", "Ich bleibe hier, weil ich müde bin.", "После weil глагол стоит последним."),
    ec("Ich weiß, dass er kommt morgen.", "Ich weiß, dass er morgen kommt.", "Завтра не после глагола: глагол замыкает dass-придаточное."),
    ec("Wenn es regnet, ich nehme den Bus.", "Wenn es regnet, nehme ich den Bus.", "Главное предложение после wenn начинается с глагола."),
    ec("Ich versuche zu schlafen jetzt.", "Ich versuche jetzt zu schlafen.", "jetzt стоит перед zu + инфинитив."),
    sb(["Ich", "bleibe", "zu", "Hause", "weil", "ich", "müde", "bin"], "Глагол bin замыкает придаточное.", {
      ru: "Я остаюсь дома, потому что устал",
      en: "I stay at home because I am tired",
      es: "Me quedo en casa porque estoy cansado",
    }),
    sb(["Ich", "weiß", "dass", "er", "morgen", "kommt"], "kommt в конце.", {
      ru: "Я знаю, что он придёт завтра",
      en: "I know that he is coming tomorrow",
      es: "Sé que viene mañana",
    }),
    sb(["Wenn", "es", "regnet", "nehme", "ich", "den", "Bus"], "В главном nehme стоит сразу после запятой.", {
      ru: "Если идёт дождь, я еду на автобусе",
      en: "If it rains, I take the bus",
      es: "Si llueve, tomo el autobús",
    }),
    sb(["Ich", "versuche", "jetzt", "zu", "schlafen"], "zu перед инфинитивом.", {
      ru: "Я сейчас пытаюсь уснуть",
      en: "I am trying to sleep now",
      es: "Ahora intento dormir",
    }),
  ],
};
