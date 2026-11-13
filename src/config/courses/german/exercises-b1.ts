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

/** German B1 — chapters 19–26. */
export const GERMAN_B1_EXERCISES: Record<string, Draft[]> = {
  "de-ch19-case-system": [
    mc(
      "Wegen ___ Regens bleiben wir zu Hause. Какая форма? (генитив)",
      ["dem", "den", "des", "der"],
      "des",
      "wegen в письменной норме требует генитив: des Regens.",
      {
        en: "Wegen ___ Regens bleiben wir zu Hause. Which form? (genitive)",
        es: "Wegen ___ Regens bleiben wir zu Hause. ¿Qué forma? (genitivo)",
        de: "Wegen ___ Regens bleiben wir zu Hause. Welche Form? (Genitiv)",
      },
    ),
    mc(
      "Ich sehe ___ Lehrer im Flur. Какая форма? (винительный)",
      ["der", "den", "dem", "des"],
      "den",
      "sehen + винительный: den Lehrer.",
      {
        en: "Ich sehe ___ Lehrer im Flur. Which form? (accusative)",
        es: "Ich sehe ___ Lehrer im Flur. ¿Qué forma? (acusativo)",
        de: "Ich sehe ___ Lehrer im Flur. Welche Form? (Akkusativ)",
      },
    ),
    mc(
      "Das ist das Büro ___ Chefs. Какая форма? (чей)",
      ["dem", "den", "des", "die"],
      "des",
      "Принадлежность: генитив des Chefs.",
      {
        en: "Das ist das Büro ___ Chefs. Which form? (whose)",
        es: "Das ist das Büro ___ Chefs. ¿Qué forma? (de quién)",
        de: "Das ist das Büro ___ Chefs. Welche Form? (wessen)",
      },
    ),
    mc(
      "Sie hilft ___ Kollegen. Какая форма? (дательный)",
      ["den", "der", "dem", "des"],
      "dem",
      "helfen + дательный dem Kollegen.",
      {
        en: "Sie hilft ___ Kollegen. Which form? (dative)",
        es: "Sie hilft ___ Kollegen. ¿Qué forma? (dativo)",
        de: "Sie hilft ___ Kollegen. Welche Form? (Dativ)",
      },
    ),
    fb("Die Tasche ___ Studentin ist rot.", "der", "Генитив женского рода: der Studentin.", {
      ru: "Сумка студентки красная. Die Tasche … Studentin ist rot.",
      en: "The student's bag is red. Die Tasche … Studentin ist rot.",
      es: "El bolso de la estudiante es rojo. Die Tasche … Studentin ist rot.",
    }),
    fb("Trotz ___ Lärms arbeiten wir.", "des", "trotz + генитив: des Lärms.", {
      ru: "Несмотря на шум, мы работаем. Trotz … Lärms arbeiten wir.",
      en: "Despite the noise, we work. Trotz … Lärms arbeiten wir.",
      es: "A pesar del ruido, trabajamos. Trotz … Lärms arbeiten wir.",
    }),
    fb("Kennst du ___ Mann dort?", "den", "kennen + винительный den.", {
      ru: "Ты знаешь того мужчину? Kennst du … Mann dort?",
      en: "Do you know that man? Kennst du … Mann dort?",
      es: "¿Conoces a ese hombre? Kennst du … Mann dort?",
    }),
    fb("Wir danken ___ Eltern.", "den", "Дательный множественного числа: den Eltern.", {
      ru: "Мы благодарим родителей. Wir danken … Eltern.",
      en: "We thank the parents. Wir danken … Eltern.",
      es: "Agradecemos a los padres. Wir danken … Eltern.",
    }),
    tl("Это машина начальника.", "Das ist das Auto des Chefs", "Генитив мужского рода: des Chefs."),
    tl("Из-за дождя мы остаёмся дома.", "Wegen des Regens bleiben wir zu Hause", "wegen + генитив, существительное с -s.", ["Wegen des Regens bleiben wir zuhause"]),
    tl("Я вижу учителя.", "Ich sehe den Lehrer", "Винительный мужского рода: den Lehrer."),
    tl("Мы благодарим родителей.", "Wir danken den Eltern", "danken + дательный множественного числа."),
    ec("Wegen dem Regen bleiben wir zu Hause.", "Wegen des Regens bleiben wir zu Hause.", "Нормативный wegen требует генитив des Regens."),
    ec("Ich sehe der Lehrer.", "Ich sehe den Lehrer.", "sehen требует винительный den."),
    ec("Das Buch des Frau liegt hier.", "Das Buch der Frau liegt hier.", "Генитив женского рода: der Frau, без -s у существительного."),
    ec("Sie hilft den Kind.", "Sie hilft dem Kind.", "Единственное число среднего рода в дативе: dem Kind."),
    sb(["Wegen", "des", "Regens", "bleiben", "wir"], "Генитив после wegen; глагол на втором месте.", {
      ru: "Из-за дождя мы остаёмся",
      en: "Because of the rain we stay",
      es: "Por la lluvia nos quedamos",
    }),
    sb(["Das", "ist", "das", "Auto", "des", "Chefs"], "des Chefs.", {
      ru: "Это машина начальника",
      en: "This is the boss's car",
      es: "Este es el coche del jefe",
    }),
    sb(["Ich", "sehe", "den", "Lehrer"], "Винительный den.", {
      ru: "Я вижу учителя",
      en: "I see the teacher",
      es: "Veo al profesor",
    }),
    sb(["Wir", "danken", "den", "Eltern"], "Дательный множественного числа.", {
      ru: "Мы благодарим родителей",
      en: "We thank the parents",
      es: "Agradecemos a los padres",
    }),
  ],

  "de-ch20-adj-endings": [
    mc(
      "mit dem ___ Freund (neu). Какое окончание?",
      ["neue", "neuer", "neuen", "neuem"],
      "neuen",
      "После dem слабое окончание -en.",
      {
        en: "mit dem ___ Freund (neu). Which ending?",
        es: "mit dem ___ Freund (neu). ¿Qué desinencia?",
        de: "mit dem ___ Freund (neu). Welche Endung?",
      },
    ),
    mc(
      "ein ___ Kind (klein). Какое окончание?",
      ["kleiner", "kleine", "kleines", "kleinen"],
      "kleines",
      "ein + средний род: kleines.",
      {
        en: "ein ___ Kind (klein). Which ending?",
        es: "ein ___ Kind (klein). ¿Qué desinencia?",
        de: "ein ___ Kind (klein). Welche Endung?",
      },
    ),
    mc(
      "___ Kaffee schmeckt gut. Какая форма? (heiß, без артикля)",
      ["Heißer", "Heiße", "Heißes", "Heißen"],
      "Heißer",
      "Мужской род без артикля, именительный: -er.",
      {
        en: "___ Kaffee schmeckt gut. Which form? (heiß, no article)",
        es: "___ Kaffee schmeckt gut. ¿Qué forma? (heiß, sin artículo)",
        de: "___ Kaffee schmeckt gut. Welche Form? (heiß, ohne Artikel)",
      },
    ),
    mc(
      "trotz des ___ Wetters (schlecht). Какое окончание?",
      ["schlechte", "schlechter", "schlechtes", "schlechten"],
      "schlechten",
      "После des слабое -en: des schlechten Wetters.",
      {
        en: "trotz des ___ Wetters (schlecht). Which ending?",
        es: "trotz des ___ Wetters (schlecht). ¿Qué desinencia?",
        de: "trotz des ___ Wetters (schlecht). Welche Endung?",
      },
    ),
    fb("Ich sehe den ___ Film. (neu)", "neuen", "den + -en.", {
      ru: "Я вижу новый фильм. Ich sehe den … Film.",
      en: "I see the new film. Ich sehe den … Film.",
      es: "Veo la película nueva. Ich sehe den … Film.",
    }),
    fb("Das ist eine ___ Idee. (gut)", "gute", "eine + женский род: -e.", {
      ru: "Это хорошая идея. Das ist eine … Idee.",
      en: "This is a good idea. Das ist eine … Idee.",
      es: "Esta es una buena idea. Das ist eine … Idee.",
    }),
    fb("Wir trinken ___ Wasser. (kalt, ohne Artikel)", "kaltes", "Средний род без артикля: -es.", {
      ru: "Мы пьём холодную воду (без артикля). Wir trinken … Wasser.",
      en: "We drink cold water (no article). Wir trinken … Wasser.",
      es: "Bebemos agua fría (sin artículo). Wir trinken … Wasser.",
    }),
    fb("Die Meinung des ___ Kollegen ist wichtig. (nett)", "netten", "После des слабое окончание -en: des netten Kollegen.", {
      ru: "Мнение приятного коллеги важно. Die Meinung des … Kollegen ist wichtig.",
      en: "The nice colleague's opinion matters. Die Meinung des … Kollegen ist wichtig.",
      es: "La opinión del colega amable es importante. Die Meinung des … Kollegen ist wichtig.",
    }),
    tl("Новый фильм захватывающий.", "Der neue Film ist spannend", "der + слабое -e."),
    tl("Я вижу маленького ребёнка.", "Ich sehe ein kleines Kind", "Винительный среднего рода после ein: kleines."),
    tl("У нас хорошая идея.", "Wir haben eine gute Idee", "eine gute Idee."),
    tl("Несмотря на плохую погоду.", "Trotz des schlechten Wetters", "Генитив: des + прилагательное на -en + Wetters."),
    ec("Der neu Film ist spannend.", "Der neue Film ist spannend.", "После der прилагательному нужно -e."),
    ec("Ich sehe ein kleiner Kind.", "Ich sehe ein kleines Kind.", "Средний род: kleines, не kleiner."),
    ec("Wir haben eine guten Idee.", "Wir haben eine gute Idee.", "eine + именительный/винительный женского рода: gute."),
    ec("Trotz des schlecht Wetters.", "Trotz des schlechten Wetters.", "Между des и существительным стоит полная форма schlechten."),
    sb(["Der", "neue", "Film", "ist", "spannend"], "Слабое склонение после der.", {
      ru: "Новый фильм захватывающий",
      en: "The new film is exciting",
      es: "La película nueva es emocionante",
    }),
    sb(["Ich", "sehe", "ein", "kleines", "Kind"], "Смешанное склонение, средний род.", {
      ru: "Я вижу маленького ребёнка",
      en: "I see a small child",
      es: "Veo a un niño pequeño",
    }),
    sb(["Wir", "haben", "eine", "gute", "Idee"], "eine gute Idee.", {
      ru: "У нас хорошая идея",
      en: "We have a good idea",
      es: "Tenemos una buena idea",
    }),
    sb(["Trotz", "des", "schlechten", "Wetters"], "Генитив с прилагательным.", {
      ru: "Несмотря на плохую погоду",
      en: "Despite the bad weather",
      es: "A pesar del mal tiempo",
    }),
  ],

  "de-ch21-relative": [
    mc(
      "Der Mann, ___ hier wohnt, ist Arzt. Какое относительное? (подлежащее)",
      ["der", "den", "dem", "dessen"],
      "der",
      "Подлежащее придаточного — мужской род: der.",
      {
        en: "Der Mann, ___ hier wohnt, ist Arzt. Which relative? (subject)",
        es: "Der Mann, ___ hier wohnt, ist Arzt. ¿Qué relativo? (sujeto)",
        de: "Der Mann, ___ hier wohnt, ist Arzt. Welches Relativpronomen? (Subjekt)",
      },
    ),
    mc(
      "Die Frau, ___ ich sehe, ist neu. Какое относительное? (винительный)",
      ["der", "die", "den", "deren"],
      "die",
      "Винительный женского рода совпадает с именительным: die.",
      {
        en: "Die Frau, ___ ich sehe, ist neu. Which relative? (accusative)",
        es: "Die Frau, ___ ich sehe, ist neu. ¿Qué relativo? (acusativo)",
        de: "Die Frau, ___ ich sehe, ist neu. Welches Relativpronomen? (Akkusativ)",
      },
    ),
    mc(
      "Das Kind, ___ ich helfe, lacht. Какое относительное? (дательный)",
      ["das", "dem", "den", "dessen"],
      "dem",
      "helfen требует дательный: dem.",
      {
        en: "Das Kind, ___ ich helfe, lacht. Which relative? (dative)",
        es: "Das Kind, ___ ich helfe, lacht. ¿Qué relativo? (dativo)",
        de: "Das Kind, ___ ich helfe, lacht. Welches Relativpronomen? (Dativ)",
      },
    ),
    mc(
      "Der Film, ___ wir sehen, ist lang. Какое относительное?",
      ["der", "den", "dem", "des"],
      "den",
      "sehen + винительный мужского рода: den.",
      {
        en: "Der Film, ___ wir sehen, ist lang. Which relative?",
        es: "Der Film, ___ wir sehen, ist lang. ¿Qué relativo?",
        de: "Der Film, ___ wir sehen, ist lang. Welches Relativpronomen?",
      },
    ),
    fb("Die Stadt, in ___ ich wohne, ist klein.", "der", "die Stadt, место: in der.", {
      ru: "Город, в котором я живу, маленький. Die Stadt, in … ich wohne, ist klein.",
      en: "The city I live in is small. Die Stadt, in … ich wohne, ist klein.",
      es: "La ciudad en la que vivo es pequeña. Die Stadt, in … ich wohne, ist klein.",
    }),
    fb("Der Kollege, mit ___ ich arbeite, ist nett.", "dem", "mit + дательный: mit dem.", {
      ru: "Коллега, с которым я работаю, приятный. Der Kollege, mit … ich arbeite, ist nett.",
      en: "The colleague I work with is nice. Der Kollege, mit … ich arbeite, ist nett.",
      es: "El colega con el que trabajo es amable. Der Kollege, mit … ich arbeite, ist nett.",
    }),
    fb("Das Buch, ___ auf dem Tisch liegt, gehört mir.", "das", "Подлежащее среднего рода: das.", {
      ru: "Книга, которая лежит на столе, моя. Das Buch, … auf dem Tisch liegt, gehört mir.",
      en: "The book that is on the table is mine. Das Buch, … auf dem Tisch liegt, gehört mir.",
      es: "El libro que está sobre la mesa es mío. Das Buch, … auf dem Tisch liegt, gehört mir.",
    }),
    fb("Der Mann, ___ Auto hier steht, ist Arzt.", "dessen", "Генитив мужского рода: dessen Auto.", {
      ru: "Мужчина, чья машина стоит здесь, — врач. Der Mann, … Auto hier steht, ist Arzt.",
      en: "The man whose car is here is a doctor. Der Mann, … Auto hier steht, ist Arzt.",
      es: "El hombre cuyo coche está aquí es médico. Der Mann, … Auto hier steht, ist Arzt.",
    }),
    tl("Мужчина, который здесь живёт, — врач.", "Der Mann, der hier wohnt, ist Arzt", "der — подлежащее, глагол придаточного в конце."),
    tl("Фильм, который мы смотрим, длинный.", "Der Film, den wir sehen, ist lang", "den — винительный мужского рода."),
    tl("Женщина, которой я помогаю, — учительница.", "Die Frau, der ich helfe, ist Lehrerin", "Женский род в дативе: der, не die."),
    tl("Книга, которая лежит на столе, моя.", "Das Buch, das auf dem Tisch liegt, gehört mir", "das — подлежащее, liegt в конце придаточного."),
    ec("Der Mann, den hier wohnt, ist Arzt.", "Der Mann, der hier wohnt, ist Arzt.", "Если «который» — подлежащее, нужен der, не den."),
    ec("Der Film, der wir sehen, ist lang.", "Der Film, den wir sehen, ist lang.", "wir — подлежащее, фильм — дополнение: den."),
    ec("Die Frau, die ich helfe, ist nett.", "Die Frau, der ich helfe, ist nett.", "helfen требует дательный der."),
    ec("Das Buch, das liegt auf dem Tisch, ist neu.", "Das Buch, das auf dem Tisch liegt, ist neu.", "В относительном придаточном глагол стоит в конце."),
    sb(["Der", "Mann", "der", "hier", "wohnt", "ist", "Arzt"], "Относительное der и глагол wohnt в конце придаточного.", {
      ru: "Мужчина, который здесь живёт, — врач",
      en: "The man who lives here is a doctor",
      es: "El hombre que vive aquí es médico",
    }),
    sb(["Der", "Film", "den", "wir", "sehen", "ist", "lang"], "den wir sehen.", {
      ru: "Фильм, который мы смотрим, длинный",
      en: "The film we are watching is long",
      es: "La película que vemos es larga",
    }),
    sb(["Die", "Frau", "der", "ich", "helfe", "ist", "Lehrerin"], "Дательное der.", {
      ru: "Женщина, которой я помогаю, — учительница",
      en: "The woman I help is a teacher",
      es: "La mujer a la que ayudo es profesora",
    }),
    sb(["Das", "Buch", "das", "auf", "dem", "Tisch", "liegt", "gehört", "mir"], "liegt замыкает придаточное.", {
      ru: "Книга, которая лежит на столе, моя",
      en: "The book on the table is mine",
      es: "El libro que está sobre la mesa es mío",
    }),
  ],

  "de-ch22-pluperfect-futur": [
    mc(
      "Nachdem sie gegessen ___, ging sie. Какая форма? (плюсквамперфект)",
      ["hat", "hatte", "ist", "war"],
      "hatte",
      "Предшествование в прошлом: плюсквамперфект с hatte.",
      {
        en: "Nachdem sie gegessen ___, ging sie. Which form? (pluperfect)",
        es: "Nachdem sie gegessen ___, ging sie. ¿Qué forma? (pluscuamperfecto)",
        de: "Nachdem sie gegessen ___, ging sie. Welche Form? (Plusquamperfekt)",
      },
    ),
    mc(
      "Morgen ___ ich anrufen. Какая форма футурума?",
      ["werde", "wird", "werden", "wurde"],
      "werde",
      "Футурум: ich werde + инфинитив. wurde сюда не входит.",
      {
        en: "Morgen ___ ich anrufen. Which future form?",
        es: "Morgen ___ ich anrufen. ¿Qué forma de futuro?",
        de: "Morgen ___ ich anrufen. Welche Futurform?",
      },
    ),
    mc(
      "Er ___ schon gegangen, als ich kam. Какая форма?",
      ["hatte", "war", "ist", "hat"],
      "war",
      "gehen образует плюсквамперфект с war.",
      {
        en: "Er ___ schon gegangen, als ich kam. Which form?",
        es: "Er ___ schon gegangen, als ich kam. ¿Qué forma?",
        de: "Er ___ schon gegangen, als ich kam. Welche Form?",
      },
    ),
    mc(
      "Wir ___ das später machen. Какая форма?",
      ["werden", "wird", "werde", "wurden"],
      "werden",
      "wir werden + инфинитив.",
      {
        en: "Wir ___ das später machen. Which form?",
        es: "Wir ___ das später machen. ¿Qué forma?",
        de: "Wir ___ das später machen. Welche Form?",
      },
    ),
    fb("Ich ___ dich morgen besuchen.", "werde", "ich werde.", {
      ru: "Завтра я тебя навещу. Ich … dich morgen besuchen.",
      en: "I will visit you tomorrow. Ich … dich morgen besuchen.",
      es: "Mañana te visitaré. Ich … dich morgen besuchen.",
    }),
    fb("Nachdem er angekommen ___, rief er an.", "war", "ankommen → war angekommen.", {
      ru: "После того как он приехал, он позвонил. Nachdem er angekommen …, rief er an.",
      en: "After he had arrived, he called. Nachdem er angekommen …, rief er an.",
      es: "Después de llegar, llamó. Nachdem er angekommen …, rief er an.",
    }),
    fb("Sie ___ die Prüfung bestehen.", "wird", "Прогноз: sie wird + инфинитив.", {
      ru: "Она сдаст экзамен. Sie … die Prüfung bestehen.",
      en: "She will pass the exam. Sie … die Prüfung bestehen.",
      es: "Aprobará el examen. Sie … die Prüfung bestehen.",
    }),
    fb("Wir hatten schon ___, bevor du kamst.", "gegessen", "Плюсквамперфект: hatten + Partizip.", {
      ru: "Мы уже поели, прежде чем ты пришёл. Wir hatten schon …, bevor du kamst.",
      en: "We had already eaten before you came. Wir hatten schon …, bevor du kamst.",
      es: "Ya habíamos comido antes de que llegaras. Wir hatten schon …, bevor du kamst.",
    }),
    tl("Завтра я позвоню.", "Ich werde morgen anrufen", "werden + инфинитив в конце.", ["Morgen werde ich anrufen"]),
    tl("После того как она поела, она ушла.", "Nachdem sie gegessen hatte, ging sie", "Nachdem + плюсквамперфект, главное в претерите."),
    tl("Он уже ушёл, когда я пришёл.", "Er war schon gegangen, als ich kam", "Более раннее действие: war gegangen."),
    tl("Мы сделаем это позже.", "Wir werden das später machen", "Футурум: werden + инфинитив в конце."),
    ec("Ich werde morgen anrufen dich.", "Ich werde dich morgen anrufen.", "Инфинитив замыкает клаузу с werden."),
    ec("Nachdem sie gegessen hat, ging sie.", "Nachdem sie gegessen hatte, ging sie.", "Перед претеритом ging нужно плюсквамперфект hatte, не перфект hat."),
    ec("Er hatte schon gegangen.", "Er war schon gegangen.", "gehen — с sein: war gegangen."),
    ec("Wir werden das machen später.", "Wir werden das später machen.", "später стоит перед инфинитивом."),
    sb(["Ich", "werde", "dich", "morgen", "anrufen"], "Инфинитив в конце.", {
      ru: "Завтра я тебе позвоню",
      en: "I will call you tomorrow",
      es: "Mañana te llamaré",
    }),
    sb(["Nachdem", "sie", "gegessen", "hatte", "ging", "sie"], "hatte замыкает придаточное, ging открывает главное.", {
      ru: "После того как она поела, она ушла",
      en: "After she had eaten, she left",
      es: "Después de comer, se fue",
    }),
    sb(["Er", "war", "schon", "gegangen"], "war gegangen.", {
      ru: "Он уже ушёл",
      en: "He had already left",
      es: "Ya se había ido",
    }),
    sb(["Wir", "werden", "das", "später", "machen"], "später перед machen.", {
      ru: "Мы сделаем это позже",
      en: "We will do that later",
      es: "Lo haremos más tarde",
    }),
  ],

  "de-ch23-passive": [
    mc(
      "Das Haus ___ gerade gebaut. Какая форма пассива? (сейчас)",
      ["wird", "wurde", "ist", "hat"],
      "wird",
      "Презенс пассива: wird + Partizip II.",
      {
        en: "Das Haus ___ gerade gebaut. Which passive? (now)",
        es: "Das Haus ___ gerade gebaut. ¿Qué pasiva? (ahora)",
        de: "Das Haus ___ gerade gebaut. Welches Passiv? (jetzt)",
      },
    ),
    mc(
      "Der Brief ___ gestern geschrieben. Какая форма? (вчера)",
      ["wird", "wurde", "worden", "war"],
      "wurde",
      "Претерит пассива: wurde + Partizip.",
      {
        en: "Der Brief ___ gestern geschrieben. Which form? (yesterday)",
        es: "Der Brief ___ gestern geschrieben. ¿Qué forma? (ayer)",
        de: "Der Brief ___ gestern geschrieben. Welche Form? (gestern)",
      },
    ),
    mc(
      "Die Tür ist geöffnet ___. Какое слово завершает перфект пассива?",
      ["worden", "geworden", "wird", "wurde"],
      "worden",
      "Перфект пассива заканчивается на worden, не geworden.",
      {
        en: "Die Tür ist geöffnet ___. Which word ends the passive perfect?",
        es: "Die Tür ist geöffnet ___. ¿Qué palabra cierra el perfecto pasivo?",
        de: "Die Tür ist geöffnet ___. Welches Wort schließt das Passiv-Perfekt?",
      },
    ),
    mc(
      "Das Essen wird von der Köchin ___. Какая форма?",
      ["kocht", "gekocht", "kochen", "kochte"],
      "gekocht",
      "Пассив: werden + Partizip II.",
      {
        en: "Das Essen wird von der Köchin ___. Which form?",
        es: "Das Essen wird von der Köchin ___. ¿Qué forma?",
        de: "Das Essen wird von der Köchin ___. Welche Form?",
      },
    ),
    fb("Hier ___ Deutsch gesprochen.", "wird", "Безличный презенс пассива: wird gesprochen.", {
      ru: "Здесь говорят по-немецки. Hier … Deutsch gesprochen.",
      en: "German is spoken here. Hier … Deutsch gesprochen.",
      es: "Aquí se habla alemán. Hier … Deutsch gesprochen.",
    }),
    fb("Die Rechnung wurde ___.", "bezahlt", "bezahlen → bezahlt.", {
      ru: "Счёт оплатили. Die Rechnung wurde …",
      en: "The bill was paid. Die Rechnung wurde …",
      es: "La cuenta fue pagada. Die Rechnung wurde …",
    }),
    fb("Das Fenster ist ___ worden.", "geöffnet", "Partizip II стоит перед worden.", {
      ru: "Окно уже открыли. Das Fenster ist … worden.",
      en: "The window has been opened. Das Fenster ist … worden.",
      es: "La ventana ha sido abierta. Das Fenster ist … worden.",
    }),
    fb("Der Text wird von den Studenten ___.", "gelesen", "lesen → gelesen.", {
      ru: "Текст читают студенты. Der Text wird von den Studenten …",
      en: "The text is read by the students. Der Text wird von den Studenten …",
      es: "El texto es leído por los estudiantes. Der Text wird von den Studenten …",
    }),
    tl("Дом сейчас строят.", "Das Haus wird gebaut", "Процесс в презенсе: wird + Partizip.", ["Das Haus wird gerade gebaut"]),
    tl("Письмо написали вчера.", "Der Brief wurde gestern geschrieben", "Претерит пассива."),
    tl("Здесь говорят по-немецки.", "Hier wird Deutsch gesprochen", "Безличный пассив."),
    tl("Окно уже открыли.", "Das Fenster ist geöffnet worden", "Перфект пассива: ist + Partizip + worden.", ["Das Fenster wurde geöffnet"]),
    ec("Das Haus wird bauen.", "Das Haus wird gebaut.", "Пассив требует Partizip II, не инфинитив."),
    ec("Der Brief wurde geschrieben gestern.", "Der Brief wurde gestern geschrieben.", "Partizip стоит в конце."),
    ec("Die Tür ist geöffnet geworden.", "Die Tür ist geöffnet worden.", "В перфекте пассива вспомогательный werden даёт worden."),
    ec("Hier wird Deutsch sprechen.", "Hier wird Deutsch gesprochen.", "Нужно причастие gesprochen."),
    sb(["Das", "Haus", "wird", "gebaut"], "wird gebaut.", {
      ru: "Дом строят",
      en: "The house is being built",
      es: "La casa se está construyendo",
    }),
    sb(["Der", "Brief", "wurde", "gestern", "geschrieben"], "wurde … geschrieben.", {
      ru: "Письмо написали вчера",
      en: "The letter was written yesterday",
      es: "La carta se escribió ayer",
    }),
    sb(["Hier", "wird", "Deutsch", "gesprochen"], "Безличный пассив.", {
      ru: "Здесь говорят по-немецки",
      en: "German is spoken here",
      es: "Aquí se habla alemán",
    }),
    sb(["Die", "Tür", "ist", "geöffnet", "worden"], "ist … worden.", {
      ru: "Дверь уже открыли",
      en: "The door has been opened",
      es: "La puerta ha sido abierta",
    }),
  ],

  "de-ch24-konjunktiv-ii": [
    mc(
      "Wenn ich Zeit ___, käme ich. Какая форма? (нереальное условие)",
      ["hätte", "hat", "habe", "bin"],
      "hätte",
      "Нереальное условие в настоящем: hätte. Форма hatte в этот список не входит.",
      {
        en: "Wenn ich Zeit ___, käme ich. Which form? (unreal condition)",
        es: "Wenn ich Zeit ___, käme ich. ¿Qué forma? (condición irreal)",
        de: "Wenn ich Zeit ___, käme ich. Welche Form? (irreale Bedingung)",
      },
    ),
    mc(
      "Ich ___ das nicht sagen. Какая форма würde?",
      ["würde", "wird", "werde", "wäre"],
      "würde",
      "würde + инфинитив. Претерит wurde здесь не вариант.",
      {
        en: "Ich ___ das nicht sagen. Which form of würde?",
        es: "Ich ___ das nicht sagen. ¿Qué forma de würde?",
        de: "Ich ___ das nicht sagen. Welche Form von würde?",
      },
    ),
    mc(
      "___ Sie mir bitte helfen? Какая вежливая форма?",
      ["Können", "Könnten", "Kann", "Könnt"],
      "Könnten",
      "Вежливая просьба: Könnten Sie …?",
      {
        en: "___ Sie mir bitte helfen? Which polite form?",
        es: "___ Sie mir bitte helfen? ¿Qué forma de cortesía?",
        de: "___ Sie mir bitte helfen? Welche Höflichkeitsform?",
      },
    ),
    mc(
      "Wenn ich du ___, würde ich warten. Какая форма?",
      ["wäre", "war", "bin", "ist"],
      "wäre",
      "Нереальное сравнение: wäre, не war.",
      {
        en: "Wenn ich du ___, würde ich warten. Which form?",
        es: "Wenn ich du ___, würde ich warten. ¿Qué forma?",
        de: "Wenn ich du ___, würde ich warten. Welche Form?",
      },
    ),
    fb("Ich ___ gern in Wien wohnen.", "würde", "Желание: würde + инфинитив.", {
      ru: "Я бы охотно жил в Вене. Ich … gern in Wien wohnen.",
      en: "I would like to live in Vienna. Ich … gern in Wien wohnen.",
      es: "Me gustaría vivir en Viena. Ich … gern in Wien wohnen.",
    }),
    fb("Wenn wir reich ___, reisten wir.", "wären", "wir wären.", {
      ru: "Если бы мы были богаты, мы бы путешествовали. Wenn wir reich …, reisten wir.",
      en: "If we were rich, we would travel. Wenn wir reich …, reisten wir.",
      es: "Si fuéramos ricos, viajaríamos. Wenn wir reich …, reisten wir.",
    }),
    fb("Ich ___ gern einen Tee.", "hätte", "Вежливое желание: Ich hätte gern.", {
      ru: "Я бы хотел чай. Ich … gern einen Tee.",
      en: "I would like a tea. Ich … gern einen Tee.",
      es: "Querría un té. Ich … gern einen Tee.",
    }),
    fb("An deiner Stelle ___ ich absagen.", "würde", "würde ich + инфинитив.", {
      ru: "На твоём месте я бы отказался. An deiner Stelle … ich absagen.",
      en: "In your place I would cancel. An deiner Stelle … ich absagen.",
      es: "En tu lugar, cancelaría. An deiner Stelle … ich absagen.",
    }),
    tl("Если бы у меня было время, я бы пришёл.", "Wenn ich Zeit hätte, würde ich kommen", "hätte в придаточном, würde + инфинитив в главном.", ["Wenn ich Zeit hätte, käme ich"]),
    tl("Я бы хотел кофе.", "Ich hätte gern einen Kaffee", "Вежливое hätte gern.", ["Ich hätte gerne einen Kaffee"]),
    tl("Не могли бы вы мне помочь?", "Könnten Sie mir bitte helfen?", "Könnten Sie + инфинитив."),
    tl("На твоём месте я бы подождал.", "An deiner Stelle würde ich warten", "würde + инфинитив."),
    ec("Wenn ich Zeit habe, käme ich.", "Wenn ich Zeit hätte, käme ich.", "Нереальное условие требует hätte, не изъявительное habe."),
    ec("Ich würde gern zu reisen.", "Ich würde gern reisen.", "После würde нет zu."),
    ec("Können Sie mir bitte helfen?", "Könnten Sie mir bitte helfen?", "Для вежливой просьбы нужна форма Könnten."),
    ec("Wenn ich du bin, warte ich.", "Wenn ich du wäre, würde ich warten.", "Нереальное условие: wäre и würde.", ["Wenn ich du wäre, wartete ich."]),
    sb(["Wenn", "ich", "Zeit", "hätte", "käme", "ich"], "Глагол hätte замыкает wenn-придаточное.", {
      ru: "Если бы у меня было время, я бы пришёл",
      en: "If I had time, I would come",
      es: "Si tuviera tiempo, vendría",
    }),
    sb(["Ich", "hätte", "gern", "einen", "Kaffee"], "hätte gern.", {
      ru: "Я бы хотел кофе",
      en: "I would like a coffee",
      es: "Querría un café",
    }),
    sb(["Könnten", "Sie", "mir", "bitte", "helfen"], "Вежливый Konjunktiv II.", {
      ru: "Не могли бы вы мне помочь",
      en: "Could you please help me",
      es: "¿Podría ayudarme, por favor?",
    }),
    sb(["An", "deiner", "Stelle", "würde", "ich", "warten"], "würde ich warten.", {
      ru: "На твоём месте я бы подождал",
      en: "In your place I would wait",
      es: "En tu lugar, esperaría",
    }),
  ],

  "de-ch25-connectors": [
    mc(
      "Ich gehe spazieren, ___ es regnet. Какой союз? (хотя)",
      ["obwohl", "damit", "bevor", "und"],
      "obwohl",
      "Уступка: obwohl, глагол в конце.",
      {
        en: "Ich gehe spazieren, ___ es regnet. Which conjunction? (although)",
        es: "Ich gehe spazieren, ___ es regnet. ¿Qué conjunción? (aunque)",
        de: "Ich gehe spazieren, ___ es regnet. Welche Konjunktion? (obwohl)",
      },
    ),
    mc(
      "Sie lernt viel, ___ sie die Prüfung besteht. Какой союз? (чтобы)",
      ["obwohl", "damit", "während", "denn"],
      "damit",
      "Цель при разных подлежащих: damit.",
      {
        en: "Sie lernt viel, ___ sie die Prüfung besteht. Which conjunction? (so that)",
        es: "Sie lernt viel, ___ sie die Prüfung besteht. ¿Qué conjunción? (para que)",
        de: "Sie lernt viel, ___ sie die Prüfung besteht. Welche Konjunktion? (damit)",
      },
    ),
    mc(
      "___ ich koche, hört er Musik. Какое слово? (пока)",
      ["Obwohl", "Während", "Damit", "Bevor"],
      "Während",
      "Одновременность: während.",
      {
        en: "___ ich koche, hört er Musik. Which word? (while)",
        es: "___ ich koche, hört er Musik. ¿Qué palabra? (mientras)",
        de: "___ ich koche, hört er Musik. Welches Wort? (während)",
      },
    ),
    mc(
      "Ruf mich an, ___ du kommst. Какой союз? (прежде чем)",
      ["nachdem", "bevor", "obwohl", "damit"],
      "bevor",
      "bevor + глагол в конце.",
      {
        en: "Ruf mich an, ___ du kommst. Which conjunction? (before)",
        es: "Ruf mich an, ___ du kommst. ¿Qué conjunción? (antes de que)",
        de: "Ruf mich an, ___ du kommst. Welche Konjunktion? (bevor)",
      },
    ),
    fb("Er kommt nicht, ___ er Zeit hat.", "obwohl", "Вопреки ожиданию: obwohl.", {
      ru: "Он не приходит, хотя у него есть время. Er kommt nicht, … er Zeit hat.",
      en: "He is not coming, although he has time. Er kommt nicht, … er Zeit hat.",
      es: "No viene, aunque tiene tiempo. Er kommt nicht, … er Zeit hat.",
    }),
    fb("Ich schreibe es auf, ___ ich es nicht vergesse.", "damit", "Цель: damit + личная форма в конце.", {
      ru: "Я записываю, чтобы не забыть. Ich schreibe es auf, … ich es nicht vergesse.",
      en: "I write it down so that I do not forget. Ich schreibe es auf, … ich es nicht vergesse.",
      es: "Lo apunto para no olvidarlo. Ich schreibe es auf, … ich es nicht vergesse.",
    }),
    fb("Wir warten, ___ der Film beginnt.", "bevor", "bevor der Film beginnt.", {
      ru: "Мы ждём, прежде чем начнётся фильм. Wir warten, … der Film beginnt.",
      en: "We wait before the film starts. Wir warten, … der Film beginnt.",
      es: "Esperamos antes de que empiece la película. Wir warten, … der Film beginnt.",
    }),
    fb("___ sie arbeitet, schläft das Kind.", "Während", "während открывает придаточное.", {
      ru: "Пока она работает, ребёнок спит. … sie arbeitet, schläft das Kind.",
      en: "While she works, the child sleeps. … sie arbeitet, schläft das Kind.",
      es: "Mientras ella trabaja, el niño duerme. … sie arbeitet, schläft das Kind.",
    }),
    tl("Я иду гулять, хотя идёт дождь.", "Ich gehe spazieren, obwohl es regnet", "obwohl + глагол в конце."),
    tl("Она много учится, чтобы сдать экзамен.", "Sie lernt viel, damit sie die Prüfung besteht", "Разные подлежащие: damit, не um … zu."),
    tl("Позвони мне, прежде чем придёшь.", "Ruf mich an, bevor du kommst", "bevor + личная форма в конце."),
    tl("Пока я готовлю, он слушает музыку.", "Während ich koche, hört er Musik", "После während-придаточного главное начинается с глагола."),
    ec("Ich gehe spazieren, obwohl regnet es.", "Ich gehe spazieren, obwohl es regnet.", "В obwohl-придаточном глагол последний."),
    ec("Sie lernt, damit sie besteht die Prüfung.", "Sie lernt, damit sie die Prüfung besteht.", "besteht замыкает придаточное."),
    ec("Ruf mich an, bevor du kommst an.", "Ruf mich an, bevor du kommst.", "Отделяемая приставка в придаточном не отделяется: kommst."),
    ec("Während ich koche, er hört Musik.", "Während ich koche, hört er Musik.", "Главное предложение соблюдает порядок V2: hört er."),
    sb(["Ich", "gehe", "spazieren", "obwohl", "es", "regnet"], "regnet в конце.", {
      ru: "Я иду гулять, хотя идёт дождь",
      en: "I go for a walk even though it is raining",
      es: "Salgo a pasear aunque llueve",
    }),
    sb(["Sie", "lernt", "damit", "sie", "die", "Prüfung", "besteht"], "besteht в конце.", {
      ru: "Она учится, чтобы сдать экзамен",
      en: "She studies so that she passes the exam",
      es: "Estudia para aprobar el examen",
    }),
    sb(["Ruf", "mich", "an", "bevor", "du", "kommst"], "В главном an отдельно, в придаточном kommst слитно.", {
      ru: "Позвони мне, прежде чем придёшь",
      en: "Call me before you come",
      es: "Llámame antes de venir",
    }),
    sb(["Während", "ich", "koche", "hört", "er", "Musik"], "hört стоит сразу после запятой.", {
      ru: "Пока я готовлю, он слушает музыку",
      en: "While I cook, he listens to music",
      es: "Mientras cocino, él escucha música",
    }),
  ],

  "de-ch26-verb-prep": [
    mc(
      "Ich warte ___ den Bus. Какой предлог?",
      ["auf", "für", "an", "über"],
      "auf",
      "warten auf + винительный.",
      {
        en: "Ich warte ___ den Bus. Which preposition?",
        es: "Ich warte ___ den Bus. ¿Qué preposición?",
        de: "Ich warte ___ den Bus. Welche Präposition?",
      },
    ),
    mc(
      "Denkst du ___ den Termin? Какой предлог?",
      ["an", "auf", "über", "mit"],
      "an",
      "denken an + винительный.",
      {
        en: "Denkst du ___ den Termin? Which preposition?",
        es: "Denkst du ___ den Termin? ¿Qué preposición?",
        de: "Denkst du ___ den Termin? Welche Präposition?",
      },
    ),
    mc(
      "Ich weiß nicht, ___ er kommt. Какое слово? (ли)",
      ["ob", "dass", "weil", "denn"],
      "ob",
      "Косвенный общий вопрос: ob, глагол в конце.",
      {
        en: "Ich weiß nicht, ___ er kommt. Which word? (whether)",
        es: "Ich weiß nicht, ___ er kommt. ¿Qué palabra? (si)",
        de: "Ich weiß nicht, ___ er kommt. Welches Wort? (ob)",
      },
    ),
    mc(
      "Das hängt ___ dem Wetter ab. Какой предлог?",
      ["von", "auf", "an", "für"],
      "von",
      "abhängen von + дательный.",
      {
        en: "Das hängt ___ dem Wetter ab. Which preposition?",
        es: "Das hängt ___ dem Wetter ab. ¿Qué preposición?",
        de: "Das hängt ___ dem Wetter ab. Welche Präposition?",
      },
    ),
    fb("Sie spricht ___ ihrem Chef.", "mit", "sprechen mit + дательный.", {
      ru: "Она говорит с начальником. Sie spricht … ihrem Chef.",
      en: "She speaks with her boss. Sie spricht … ihrem Chef.",
      es: "Habla con su jefe. Sie spricht … ihrem Chef.",
    }),
    fb("Wir interessieren uns ___ Kunst.", "für", "sich interessieren für.", {
      ru: "Мы интересуемся искусством. Wir interessieren uns … Kunst.",
      en: "We are interested in art. Wir interessieren uns … Kunst.",
      es: "Nos interesamos por el arte. Wir interessieren uns … Kunst.",
    }),
    fb("Sag mir, ___ der Zug abfährt.", "wann", "Косвенный вопрос: wann + глагол в конце.", {
      ru: "Скажи, когда отходит поезд. Sag mir, … der Zug abfährt.",
      en: "Tell me when the train leaves. Sag mir, … der Zug abfährt.",
      es: "Dime cuándo sale el tren. Sag mir, … der Zug abfährt.",
    }),
    fb("Er fragt ___ dem Preis.", "nach", "fragen nach + дательный.", {
      ru: "Он спрашивает о цене. Er fragt … dem Preis.",
      en: "He asks about the price. Er fragt … dem Preis.",
      es: "Pregunta por el precio. Er fragt … dem Preis.",
    }),
    tl("Я жду автобус.", "Ich warte auf den Bus", "warten auf + винительный, не für."),
    tl("Я не знаю, придёт ли он.", "Ich weiß nicht, ob er kommt", "ob вместо ли, глагол в конце."),
    tl("Это зависит от погоды.", "Das hängt vom Wetter ab", "abhängen von; приставка ab в конце.", ["Das hängt von dem Wetter ab"]),
    tl("Она говорит с начальником.", "Sie spricht mit ihrem Chef", "sprechen mit + дательный."),
    ec("Ich warte für den Bus.", "Ich warte auf den Bus.", "Управление warten — auf, не für."),
    ec("Ich weiß nicht, ob kommt er.", "Ich weiß nicht, ob er kommt.", "В косвенном вопросе глагол стоит в конце."),
    ec("Das hängt von das Wetter ab.", "Das hängt von dem Wetter ab.", "von требует дательный dem.", ["Das hängt vom Wetter ab"]),
    ec("Denkst du über den Termin?", "Denkst du an den Termin?", "denken an, не über, когда речь о том, что у тебя на уме."),
    sb(["Ich", "warte", "auf", "den", "Bus"], "warten auf.", {
      ru: "Я жду автобус",
      en: "I am waiting for the bus",
      es: "Espero el autobús",
    }),
    sb(["Ich", "weiß", "nicht", "ob", "er", "kommt"], "kommt в конце.", {
      ru: "Я не знаю, придёт ли он",
      en: "I do not know whether he is coming",
      es: "No sé si viene",
    }),
    sb(["Das", "hängt", "vom", "Wetter", "ab"], "Приставка ab в конце.", {
      ru: "Это зависит от погоды",
      en: "That depends on the weather",
      es: "Eso depende del tiempo",
    }),
    sb(["Sie", "spricht", "mit", "ihrem", "Chef"], "sprechen mit.", {
      ru: "Она говорит со своим начальником",
      en: "She speaks with her boss",
      es: "Habla con su jefe",
    }),
  ],
};
