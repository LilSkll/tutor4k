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

/** German B2–C1 — chapters 27–36. */
export const GERMAN_B2C1_EXERCISES: Record<string, Draft[]> = {
  "de-ch27-advanced-passive": [
    mc(
      "Das Formular muss heute ___ werden. Какая форма?",
      ["ausgefüllt", "ausfüllen", "auszufüllen", "ausfüllte"],
      "ausgefüllt",
      "Модальный пассив: Partizip II + werden.",
      {
        en: "Das Formular muss heute ___ werden. Which form?",
        es: "Das Formular muss heute ___ werden. ¿Qué forma?",
        de: "Das Formular muss heute ___ werden. Welche Form?",
      },
    ),
    mc(
      "Die Tür ___ geschlossen. Какая форма? (состояние, она уже закрыта)",
      ["ist", "wird", "war", "hat"],
      "ist",
      "Zustandspassiv: sein + Partizip II, если важен результат.",
      {
        en: "Die Tür ___ geschlossen. Which form? (state: it is already shut)",
        es: "Die Tür ___ geschlossen. ¿Qué forma? (estado: ya está cerrada)",
        de: "Die Tür ___ geschlossen. Welche Form? (Zustand: sie ist schon zu)",
      },
    ),
    mc(
      "Es ___ hier nicht geraucht. Какая форма безличного пассива?",
      ["wird", "ist", "hat", "sei"],
      "wird",
      "Безличный пассив процесса: es wird … Partizip.",
      {
        en: "Es ___ hier nicht geraucht. Which impersonal passive?",
        es: "Es ___ hier nicht geraucht. ¿Qué pasiva impersonal?",
        de: "Es ___ hier nicht geraucht. Welches unpersönliche Passiv?",
      },
    ),
    mc(
      "Das Problem kann schnell ___ werden. Какая форма?",
      ["gelöst", "lösen", "zu lösen", "löste"],
      "gelöst",
      "können + Partizip + werden.",
      {
        en: "Das Problem kann schnell ___ werden. Which form?",
        es: "Das Problem kann schnell ___ werden. ¿Qué forma?",
        de: "Das Problem kann schnell ___ werden. Welche Form?",
      },
    ),
    fb("Der Bericht muss noch ___ werden.", "geschrieben", "schreiben → geschrieben werden.", {
      ru: "Отчёт ещё нужно написать. Der Bericht muss noch … werden.",
      en: "The report still has to be written. Der Bericht muss noch … werden.",
      es: "El informe aún debe escribirse. Der Bericht muss noch … werden.",
    }),
    fb("Das Fenster ___ geöffnet. Jemand hat es vor einer Stunde geöffnet, jetzt ist es offen.", "ist", "Уже открыто как состояние: ist geöffnet.", {
      ru: "Окно открыто (состояние, не процесс). Das Fenster … geöffnet.",
      en: "The window is open (a state, not a process). Das Fenster … geöffnet.",
      es: "La ventana está abierta (estado, no proceso). Das Fenster … geöffnet.",
    }),
    fb("Darüber muss noch ___ werden.", "gesprochen", "Безличное дополнение: gesprochen werden.", {
      ru: "Об этом ещё нужно поговорить. Darüber muss noch … werden.",
      en: "That still has to be discussed. Darüber muss noch … werden.",
      es: "De eso aún hay que hablar. Darüber muss noch … werden.",
    }),
    fb("Die Regel kann nicht ___ werden.", "geändert", "ändern → geändert.", {
      ru: "Правило нельзя изменить. Die Regel kann nicht … werden.",
      en: "The rule cannot be changed. Die Regel kann nicht … werden.",
      es: "La regla no se puede cambiar. Die Regel kann nicht … werden.",
    }),
    tl("Формуляр нужно заполнить.", "Das Formular muss ausgefüllt werden", "müssen + Partizip II + werden."),
    tl("Дверь закрыта.", "Die Tür ist geschlossen", "Состояние, не процесс: sein + Partizip."),
    tl("Здесь нельзя курить.", "Hier darf nicht geraucht werden", "Запрет в пассиве: darf nicht + Partizip + werden.", ["Es darf hier nicht geraucht werden"]),
    tl("Проблему можно быстро решить.", "Das Problem kann schnell gelöst werden", "können + Partizip + werden, инфинитив в конце."),
    ec("Das Formular muss ausfüllen werden.", "Das Formular muss ausgefüllt werden.", "Перед werden стоит Partizip II."),
    ec("Das Fenster ist öffnen.", "Das Fenster ist geöffnet.", "Zustandspassiv требует причастие geöffnet."),
    ec("Es wird hier rauchen nicht.", "Es wird hier nicht geraucht.", "Не личная форма, а причастие; nicht перед ним."),
    ec("Das Problem kann gelöst werden schnell.", "Das Problem kann schnell gelöst werden.", "werden замыкает группу."),
    sb(["Das", "Formular", "muss", "ausgefüllt", "werden"], "Модальный пассив.", {
      ru: "Формуляр нужно заполнить",
      en: "The form has to be filled in",
      es: "El formulario debe rellenarse",
    }),
    sb(["Die", "Tür", "ist", "geschlossen"], "Zustandspassiv.", {
      ru: "Дверь закрыта",
      en: "The door is closed",
      es: "La puerta está cerrada",
    }),
    sb(["Es", "wird", "hier", "nicht", "geraucht"], "Безличный пассив.", {
      ru: "Здесь не курят",
      en: "There is no smoking here",
      es: "Aquí no se fuma",
    }),
    sb(["Das", "Problem", "kann", "schnell", "gelöst", "werden"], "kann … werden.", {
      ru: "Проблему можно быстро решить",
      en: "The problem can be solved quickly",
      es: "El problema se puede resolver rápido",
    }),
  ],

  "de-ch28-konjunktiv-reported": [
    mc(
      "Er sagt, er ___ krank. Какая форма косвенной речи?",
      ["sei", "ist", "war", "bin"],
      "sei",
      "Konjunktiv I от sein: er sei.",
      {
        en: "Er sagt, er ___ krank. Which reported-speech form?",
        es: "Er sagt, er ___ krank. ¿Qué forma de estilo indirecto?",
        de: "Er sagt, er ___ krank. Welche Form der indirekten Rede?",
      },
    ),
    mc(
      "Sie meint, sie ___ keine Zeit. Какая форма?",
      ["habe", "hat", "hatte", "ist"],
      "habe",
      "Konjunktiv I от haben для sie (она): habe.",
      {
        en: "Sie meint, sie ___ keine Zeit. Which form?",
        es: "Sie meint, sie ___ keine Zeit. ¿Qué forma?",
        de: "Sie meint, sie ___ keine Zeit. Welche Form?",
      },
    ),
    mc(
      "Man sagt, das ___ teuer. Какая форма косвенной речи?",
      ["sei", "ist", "wäre", "hat"],
      "sei",
      "Косвенная речь: das sei. wäre — другая форма и здесь не нужна.",
      {
        en: "Man sagt, das ___ teuer. Which reported-speech form?",
        es: "Man sagt, das ___ teuer. ¿Qué forma de estilo indirecto?",
        de: "Man sagt, das ___ teuer. Welche Form der indirekten Rede?",
      },
    ),
    mc(
      "Die Zeitung schreibt, er ___ kommen. Какая форма?",
      ["werde", "wird", "wurde", "ist"],
      "werde",
      "Konjunktiv I от werden: er werde. wurde в список не как двойник.",
      {
        en: "Die Zeitung schreibt, er ___ kommen. Which form?",
        es: "Die Zeitung schreibt, er ___ kommen. ¿Qué forma?",
        de: "Die Zeitung schreibt, er ___ kommen. Welche Form?",
      },
    ),
    fb("Er behauptet, er ___ das nicht gewusst.", "habe", "Перфект в косвенной речи: habe + Partizip.", {
      ru: "Он утверждает, что не знал этого. Er behauptet, er … das nicht gewusst.",
      en: "He claims he did not know that. Er behauptet, er … das nicht gewusst.",
      es: "Afirma que no lo sabía. Er behauptet, er … das nicht gewusst.",
    }),
    fb("Sie sagen, sie ___ einverstanden.", "seien", "sie (они): Konjunktiv I seien, потому что sind совпало бы с индикативом.", {
      ru: "Они говорят, что согласны. Sie sagen, sie … einverstanden.",
      en: "They say they agree. Sie sagen, sie … einverstanden.",
      es: "Dicen que están de acuerdo. Sie sagen, sie … einverstanden.",
    }),
    fb("Er erzählt, er ___ uns helfen.", "könne", "Konjunktiv I от können: er könne.", {
      ru: "Он рассказывает, что может нам помочь. Er erzählt, er … uns helfen.",
      en: "He says he can help us. Er erzählt, er … uns helfen.",
      es: "Cuenta que puede ayudarnos. Er erzählt, er … uns helfen.",
    }),
    fb("Laut Bericht ___ die Lage ernst.", "sei", "sei после вводной группы.", {
      ru: "По сообщению, ситуация серьёзная. Laut Bericht … die Lage ernst.",
      en: "According to the report, the situation is serious. Laut Bericht … die Lage ernst.",
      es: "Según el informe, la situación es grave. Laut Bericht … die Lage ernst.",
    }),
    tl("Он говорит, что болен.", "Er sagt, er sei krank", "В косвенной речи ist заменяется на sei.", ["Er sagt, dass er krank sei"]),
    tl("Она считает, что у неё нет времени.", "Sie meint, sie habe keine Zeit", "habe вместо hat."),
    tl("Говорят, что это дорого.", "Man sagt, das sei teuer", "man sagt + Konjunktiv I."),
    tl("Газета пишет, что он придёт.", "Die Zeitung schreibt, er werde kommen", "werde + инфинитив вместо футурума изъявительного наклонения."),
    ec("Er sagt, er ist krank.", "Er sagt, er sei krank.", "Косвенная речь в письменном стиле: sei, не ist."),
    ec("Sie meint, sie hat keine Zeit.", "Sie meint, sie habe keine Zeit.", "hat → habe."),
    ec("Man sagt, das ist teuer.", "Man sagt, das sei teuer.", "ist → sei."),
    ec("Die Zeitung schreibt, er kommt bald.", "Die Zeitung schreibt, er werde bald kommen.", "Будущее в косвенной речи: werde + инфинитив. Настоящее kommt можно передать и как komme.", ["Die Zeitung schreibt, er komme bald."]),
    sb(["Er", "sagt", "er", "sei", "krank"], "er sei krank.", {
      ru: "Он говорит, что болен",
      en: "He says he is ill",
      es: "Dice que está enfermo",
    }),
    sb(["Sie", "meint", "sie", "habe", "keine", "Zeit"], "habe keine Zeit.", {
      ru: "Она считает, что у неё нет времени",
      en: "She thinks she has no time",
      es: "Cree que no tiene tiempo",
    }),
    sb(["Man", "sagt", "das", "sei", "teuer"], "das sei teuer.", {
      ru: "Говорят, что это дорого",
      en: "People say that is expensive",
      es: "Dicen que eso es caro",
    }),
    sb(["Die", "Zeitung", "schreibt", "er", "werde", "kommen"], "werde kommen.", {
      ru: "Газета пишет, что он придёт",
      en: "The newspaper writes that he will come",
      es: "El periódico escribe que vendrá",
    }),
  ],

  "de-ch29-participial": [
    mc(
      "der gestern ___ Brief (ankommen). Какая форма определения?",
      ["angekommene", "angekommen", "ankommende", "ankommen"],
      "angekommene",
      "Причастие перед существительным получает окончание: der angekommene Brief.",
      {
        en: "der gestern ___ Brief (ankommen). Which modifier?",
        es: "der gestern ___ Brief (ankommen). ¿Qué forma de atributo?",
        de: "der gestern ___ Brief (ankommen). Welche Attributform?",
      },
    ),
    mc(
      "ein schnell ___ Problem (wachsen). Какая форма?",
      ["wachsendes", "wachsend", "wachsende", "gewachsenes"],
      "wachsendes",
      "Партицип I + окончание среднего рода после ein: wachsendes.",
      {
        en: "ein schnell ___ Problem (wachsen). Which form?",
        es: "ein schnell ___ Problem (wachsen). ¿Qué forma?",
        de: "ein schnell ___ Problem (wachsen). Welche Form?",
      },
    ),
    mc(
      "die von allen ___ Regel (akzeptieren). Какая форма?",
      ["akzeptierte", "akzeptiert", "akzeptierten", "akzeptierende"],
      "akzeptierte",
      "die + именительный единственного числа: -e.",
      {
        en: "die von allen ___ Regel (akzeptieren). Which form?",
        es: "die von allen ___ Regel (akzeptieren). ¿Qué forma?",
        de: "die von allen ___ Regel (akzeptieren). Welche Form?",
      },
    ),
    mc(
      "Что значит распространённое определение «der seit Jahren bekannte Autor»?",
      ["Der Autor ist seit Jahren bekannt", "Der Autor kennt die Jahre", "Die Jahre sind unbekannt", "Der Autor kommt seit Jahren"],
      "Der Autor ist seit Jahren bekannt",
      "Распространённое определение сжимает относительное предложение.",
      {
        en: "What does the extended modifier “der seit Jahren bekannte Autor” mean?",
        es: "¿Qué significa el atributo extendido «der seit Jahren bekannte Autor»?",
        de: "Was bedeutet der seit Jahren bekannte Autor?",
      },
    ),
    fb("die von den Studenten ___ Bücher (lesen)", "gelesenen", "Множественное число после die: -en.", {
      ru: "Книги, прочитанные студентами. die von den Studenten … Bücher.",
      en: "The books read by the students. die von den Studenten … Bücher.",
      es: "Los libros leídos por los estudiantes. die von den Studenten … Bücher.",
    }),
    fb("der von der Jury ___ Film (prämieren)", "prämierte", "der Film, именительный: -e.", {
      ru: "Фильм, отмеченный жюри. der von der Jury … Film.",
      en: "The film awarded by the jury. der von der Jury … Film.",
      es: "La película premiada por el jurado. der von der Jury … Film.",
    }),
    fb("ein neu ___ Museum (eröffnen)", "eröffnetes", "ein + средний род: eröffnetes.", {
      ru: "Недавно открытый музей. ein neu … Museum.",
      en: "A newly opened museum. ein neu … Museum.",
      es: "Un museo recién inaugurado. ein neu … Museum.",
    }),
    fb("die am Fenster ___ Frau (sitzen)", "sitzende", "Партицип I: sitzend + -e.", {
      ru: "Женщина, сидящая у окна. die am Fenster … Frau.",
      en: "The woman sitting by the window. die am Fenster … Frau.",
      es: "La mujer sentada junto a la ventana. die am Fenster … Frau.",
    }),
    tl("Письмо, пришедшее вчера, важное.", "Der gestern angekommene Brief ist wichtig", "Причастие с окончанием стоит перед существительным."),
    tl("Фильм, отмеченный жюри, короткий.", "Der von der Jury prämierte Film ist kurz", "von-группа стоит между артиклем и причастием."),
    tl("Это быстро растущая проблема.", "Das ist ein schnell wachsendes Problem", "Партицип I с окончанием -es."),
    tl("Книги, прочитанные студентами.", "die von den Studenten gelesenen Bücher", "Дательный агенса между артиклем и причастием.", ["Die von den Studenten gelesenen Bücher liegen hier"]),
    ec("Der gestern angekommen Brief ist wichtig.", "Der gestern angekommene Brief ist wichtig.", "В роли определения причастию нужно окончание -e."),
    ec("Ein schnell wachsend Problem.", "Ein schnell wachsendes Problem.", "Средний род после ein: wachsendes."),
    ec("Die von allen akzeptieren Regel gilt noch.", "Die von allen akzeptierte Regel gilt noch.", "Нужно причастие akzeptierte, не инфинитив."),
    ec("Der von der Jury prämieren Film ist kurz.", "Der von der Jury prämierte Film ist kurz.", "prämierte согласуется с der Film."),
    sb(["Der", "gestern", "angekommene", "Brief", "ist", "wichtig"], "Определение между der и Brief.", {
      ru: "Письмо, пришедшее вчера, важное",
      en: "The letter that arrived yesterday is important",
      es: "La carta llegada ayer es importante",
    }),
    sb(["Der", "von", "der", "Jury", "prämierte", "Film", "ist", "kurz"], "Распространённое определение.", {
      ru: "Фильм, отмеченный жюри, короткий",
      en: "The film awarded by the jury is short",
      es: "La película premiada por el jurado es corta",
    }),
    sb(["Das", "ist", "ein", "schnell", "wachsendes", "Problem"], "wachsendes Problem.", {
      ru: "Это быстро растущая проблема",
      en: "This is a rapidly growing problem",
      es: "Este es un problema que crece rápido",
    }),
    sb(["Die", "von", "den", "Studenten", "gelesenen", "Bücher"], "gelesenen Bücher.", {
      ru: "Книги, прочитанные студентами",
      en: "The books read by the students",
      es: "Los libros leídos por los estudiantes",
    }),
  ],

  "de-ch30-nominalization": [
    mc(
      "Sie verbessert den Text. Какая именная группа соответствует глаголу?",
      ["die Verbesserung des Textes", "das Verbessern den Text", "die verbessert des Textes", "der Text verbessert"],
      "die Verbesserung des Textes",
      "Глагол verbessern → существительное die Verbesserung + генитив.",
      {
        en: "Sie verbessert den Text. Which noun phrase matches the verb?",
        es: "Sie verbessert den Text. ¿Qué grupo nominal corresponde al verbo?",
        de: "Sie verbessert den Text. Welche Nominalgruppe entspricht dem Verb?",
      },
    ),
    mc(
      "weil es regnet — какой именной вариант?",
      ["wegen des Regens", "wegen es regnet", "weil des Regens", "trotz regnen"],
      "wegen des Regens",
      "Причина в именном стиле: wegen + генитив.",
      {
        en: "weil es regnet — which nominal version?",
        es: "weil es regnet — ¿qué versión nominal?",
        de: "weil es regnet — welche nominale Variante?",
      },
    ),
    mc(
      "bevor man beginnt. Какой именной вариант?",
      ["vor dem Beginn", "vor beginnen", "bevor dem Beginn", "nach der Beginn"],
      "vor dem Beginn",
      "bevor + клауза → vor + дательный существительного.",
      {
        en: "bevor man beginnt. Which nominal version?",
        es: "bevor man beginnt. ¿Qué versión nominal?",
        de: "bevor man beginnt. Welche nominale Variante?",
      },
    ),
    mc(
      "Какая формулировка принадлежит именному стилю?",
      ["nach der Prüfung des Antrags", "nachdem man den Antrag prüft", "weil der Antrag geprüft wird", "bevor sie prüfen"],
      "nach der Prüfung des Antrags",
      "Предлог + отглагольное существительное вместо придаточного.",
      {
        en: "Which wording belongs to nominal style?",
        es: "¿Qué formulación pertenece al estilo nominal?",
        de: "Welche Formulierung gehört zum Nominalstil?",
      },
    ),
    fb("Wegen der ___ des Plans warten wir.", "Änderung", "ändern → die Änderung.", {
      ru: "Из-за изменения плана мы ждём. Wegen der … des Plans warten wir.",
      en: "Because of the change to the plan, we wait. Wegen der … des Plans warten wir.",
      es: "Por el cambio del plan, esperamos. Wegen der … des Plans warten wir.",
    }),
    fb("Die ___ des Projekts dauert lange.", "Durchführung", "durchführen → die Durchführung.", {
      ru: "Проведение проекта занимает много времени. Die … des Projekts dauert lange.",
      en: "Carrying out the project takes a long time. Die … des Projekts dauert lange.",
      es: "La realización del proyecto lleva mucho tiempo. Die … des Projekts dauert lange.",
    }),
    fb("Nach ___ der Daten entscheiden wir.", "Prüfung", "nach + дательный die Prüfung.", {
      ru: "После проверки данных мы решаем. Nach … der Daten entscheiden wir.",
      en: "After checking the data, we decide. Nach … der Daten entscheiden wir.",
      es: "Tras revisar los datos, decidimos. Nach … der Daten entscheiden wir.",
    }),
    fb("Die ___ des Problems ist klar.", "Lösung", "lösen → die Lösung.", {
      ru: "Решение проблемы ясно. Die … des Problems ist klar.",
      en: "The solution to the problem is clear. Die … des Problems ist klar.",
      es: "La solución del problema está clara. Die … des Problems ist klar.",
    }),
    tl("После проверки заявки.", "Nach der Prüfung des Antrags", "Именной стиль: предлог + существительное + генитив."),
    tl("Из-за изменения плана.", "Wegen der Änderung des Plans", "wegen + генитив die Änderung."),
    tl("Решение проблемы важно.", "Die Lösung des Problems ist wichtig", "lösen → die Lösung + генитив."),
    tl("Проведение проекта занимает много времени.", "Die Durchführung des Projekts dauert lange", "durchführen → die Durchführung."),
    ec("Wegen der ändern des Plans warten wir.", "Wegen der Änderung des Plans warten wir.", "Нужно существительное Änderung, не инфинитив."),
    ec("Die lösen des Problems ist wichtig.", "Die Lösung des Problems ist wichtig.", "lösen → die Lösung."),
    ec("Nach der prüfen des Antrags.", "Nach der Prüfung des Antrags.", "prüfen → die Prüfung."),
    ec("Die durchführen des Projekts dauert lange.", "Die Durchführung des Projekts dauert lange.", "durchführen → die Durchführung."),
    sb(["Nach", "der", "Prüfung", "des", "Antrags"], "Именная группа вместо nachdem-придаточного.", {
      ru: "После проверки заявки",
      en: "After the review of the application",
      es: "Tras la revisión de la solicitud",
    }),
    sb(["Wegen", "der", "Änderung", "des", "Plans"], "wegen + генитив.", {
      ru: "Из-за изменения плана",
      en: "Because of the change to the plan",
      es: "Por el cambio del plan",
    }),
    sb(["Die", "Lösung", "des", "Problems", "ist", "wichtig"], "die Lösung des Problems.", {
      ru: "Решение проблемы важно",
      en: "The solution to the problem is important",
      es: "La solución del problema es importante",
    }),
    sb(["Die", "Durchführung", "des", "Projekts", "dauert", "lange"], "die Durchführung.", {
      ru: "Проведение проекта занимает много времени",
      en: "Carrying out the project takes a long time",
      es: "La realización del proyecto lleva mucho tiempo",
    }),
  ],

  "de-ch31-academic-pro": [
    mc(
      "Как начать письмо, если имя адресата неизвестно?",
      ["Sehr geehrte Damen und Herren", "Hallo zusammen", "Liebe Leute", "Hi Team"],
      "Sehr geehrte Damen und Herren",
      "Нейтральное деловое обращение.",
      {
        en: "How do you open a letter when you do not know the addressee's name?",
        es: "¿Cómo se empieza una carta si no se conoce el nombre del destinatario?",
        de: "Wie beginnt man einen Brief, wenn der Name unbekannt ist?",
      },
    ),
    mc(
      "Какая стандартная концовка делового письма?",
      ["Mit freundlichen Grüßen", "Tschüss", "Bis dann", "Liebe Grüße, dein"],
      "Mit freundlichen Grüßen",
      "Mit freundlichen Grüßen — нейтрально-формальное закрытие.",
      {
        en: "Which is the standard close of a business letter?",
        es: "¿Cuál es el cierre estándar de una carta formal?",
        de: "Welcher Schluss ist im Geschäftsbrief üblich?",
      },
    ),
    mc(
      "Ich bewerbe mich ___ die Stelle. Какой предлог?",
      ["um", "für", "auf", "nach"],
      "um",
      "sich bewerben um + винительный.",
      {
        en: "Ich bewerbe mich ___ die Stelle. Which preposition?",
        es: "Ich bewerbe mich ___ die Stelle. ¿Qué preposición?",
        de: "Ich bewerbe mich ___ die Stelle. Welche Präposition?",
      },
    ),
    mc(
      "Как сообщить о вложении?",
      ["Im Anhang", "Im Text oben", "Ohne Datei", "Am Telefon"],
      "Im Anhang",
      "im Anhang = во вложении.",
      {
        en: "How do you mention an attachment?",
        es: "¿Cómo se indica un archivo adjunto?",
        de: "Wie nennt man den Anhang?",
      },
    ),
    fb("___ geehrte Damen und Herren,", "Sehr", "Фиксированное начало: Sehr geehrte …", {
      ru: "Уважаемые дамы и господа. … geehrte Damen und Herren,",
      en: "Dear Sir or Madam. … geehrte Damen und Herren,",
      es: "Estimados señores. … geehrte Damen und Herren,",
    }),
    fb("Die Unterlagen sende ich ___.", "anbei", "anbei = при сём, во вложении.", {
      ru: "Документы высылаю при сём. Die Unterlagen sende ich …",
      en: "I am sending the documents enclosed. Die Unterlagen sende ich …",
      es: "Envío los documentos adjuntos. Die Unterlagen sende ich …",
    }),
    fb("Wer ist ___ für das Praktikum?", "zuständig", "zuständig für = ответственный за.", {
      ru: "Кто отвечает за практику? Wer ist … für das Praktikum?",
      en: "Who is responsible for the internship? Wer ist … für das Praktikum?",
      es: "¿Quién es responsable de las prácticas? Wer ist … für das Praktikum?",
    }),
    fb("Mit freundlichen ___.", "Grüßen", "Концовка: Mit freundlichen Grüßen.", {
      ru: "С уважением. Mit freundlichen …",
      en: "Yours sincerely. Mit freundlichen …",
      es: "Atentamente. Mit freundlichen …",
    }),
    tl("Уважаемые дамы и господа.", "Sehr geehrte Damen und Herren", "Стандартное обращение без имени."),
    tl("Я претендую на эту должность.", "Ich bewerbe mich um diese Stelle", "sich bewerben um, не für."),
    tl("Документы во вложении.", "Die Unterlagen sind im Anhang", "im Anhang.", ["Die Unterlagen sende ich anbei"]),
    tl("С уважением.", "Mit freundlichen Grüßen", "Нейтральная деловая концовка."),
    ec("Hallo Herr Schmidt, ich will die Stelle.", "Sehr geehrter Herr Schmidt, ich bewerbe mich um die Stelle.", "Деловое письмо: обращение Sehr geehrter и глагол sich bewerben um."),
    ec("Ich bewerbe mich für die Stelle.", "Ich bewerbe mich um die Stelle.", "Устойчивое управление: um die Stelle."),
    ec("Mit freundlich Grüßen", "Mit freundlichen Grüßen", "Прилагательное стоит в нужной форме: freundlichen."),
    ec("Die Unterlagen sind im Anhangs.", "Die Unterlagen sind im Anhang.", "Anhang не получает лишнее -s после im."),
    sb(["Sehr", "geehrte", "Damen", "und", "Herren"], "Обращение без имени.", {
      ru: "Уважаемые дамы и господа",
      en: "Dear Sir or Madam",
      es: "Estimados señores",
    }),
    sb(["Ich", "bewerbe", "mich", "um", "diese", "Stelle"], "bewerben um.", {
      ru: "Я претендую на эту должность",
      en: "I am applying for this position",
      es: "Solicito este puesto",
    }),
    sb(["Die", "Unterlagen", "sind", "im", "Anhang"], "im Anhang.", {
      ru: "Документы во вложении",
      en: "The documents are attached",
      es: "Los documentos van en el anexo",
    }),
    sb(["Mit", "freundlichen", "Grüßen"], "Деловая концовка.", {
      ru: "С уважением",
      en: "Yours sincerely",
      es: "Atentamente",
    }),
  ],

  "de-ch32-register": [
    mc(
      "Деловой синоним глагола bekommen:",
      ["erhalten", "kriegen", "holen", "nehmen"],
      "erhalten",
      "В письме и отчёте уместнее erhalten.",
      {
        en: "A business synonym of bekommen:",
        es: "Un sinónimo formal de bekommen:",
        de: "Ein formales Synonym von bekommen:",
      },
    ),
    mc(
      "Какая реплика уместна другу в чате?",
      ["Kannst du mir den Link schicken?", "Wir bitten um Übersendung des Links", "Sehr geehrter Freund", "Hiermit teilen wir mit"],
      "Kannst du mir den Link schicken?",
      "Чат допускает du и разговорный глагол schicken.",
      {
        en: "Which line fits a friend in chat?",
        es: "¿Qué frase encaja con un amigo en el chat?",
        de: "Welche Formulierung passt an einen Freund im Chat?",
      },
    ),
    mc(
      "Формальный глагол вместо brauchen:",
      ["benötigen", "wollen", "kriegen", "machen"],
      "benötigen",
      "benötigen — канцелярски-нейтральный регистр.",
      {
        en: "A formal verb instead of brauchen:",
        es: "Un verbo formal en lugar de brauchen:",
        de: "Ein formelles Verb statt brauchen:",
      },
    ),
    mc(
      "Слово Tschüss стилистически …",
      ["umgangssprachlich", "gerichtssprachlich", "wissenschaftlich", "vertraglich"],
      "umgangssprachlich",
      "Tschüss gehört der Umgangssprache und schließt keinen Geschäftsbrief.",
      {
        en: "The word Tschüss is stylistically …",
        es: "La palabra Tschüss es estilísticamente …",
        de: "Das Wort Tschüss ist stilistisch …",
      },
    ),
    fb("Wir haben Ihr Schreiben ___.", "erhalten", "Перфект формального erhalten.", {
      ru: "Мы получили ваше письмо. Wir haben Ihr Schreiben …",
      en: "We have received your letter. Wir haben Ihr Schreiben …",
      es: "Hemos recibido su escrito. Wir haben Ihr Schreiben …",
    }),
    fb("Ich ___ Sie um Rückmeldung. (höflich, Sie)", "bitte", "bitten um = просить.", {
      ru: "Прошу вас об ответе (вежливо). Ich … Sie um Rückmeldung.",
      en: "I ask you for a reply (polite). Ich … Sie um Rückmeldung.",
      es: "Le pido una respuesta (cortés). Ich … Sie um Rückmeldung.",
    }),
    fb("___ du Zeit? (an einen Freund)", "Hast", "Разговорное du: Hast du Zeit?", {
      ru: "Другу: есть время? … du Zeit?",
      en: "To a friend: do you have time? … du Zeit?",
      es: "A un amigo: ¿tienes tiempo? … du Zeit?",
    }),
    fb("Die Daten ___ eine weitere Analyse.", "benötigen", "В отчёте: benötigen.", {
      ru: "Данным нужен ещё анализ. Die Daten … eine weitere Analyse.",
      en: "The data need further analysis. Die Daten … eine weitere Analyse.",
      es: "Los datos necesitan otro análisis. Die Daten … eine weitere Analyse.",
    }),
    tl("Мы получили ваше письмо.", "Wir haben Ihr Schreiben erhalten", "В деловом регистре: Ihr Schreiben и erhalten."),
    tl("Можешь скинуть ссылку?", "Kannst du mir den Link schicken?", "Дружеский регистр: du + können."),
    tl("Просим обратную связь.", "Wir bitten um Rückmeldung", "Деловая формула bitten um."),
    tl("Данным нужен дополнительный анализ.", "Die Daten benötigen eine weitere Analyse", "benötigen в письменном регистре.", ["Die Daten erfordern eine weitere Analyse"]),
    ec("Ich kriege Ihr Paket morgen.", "Ich erhalte Ihr Paket morgen.", "В деловом письме kriegen заменяют на erhalten."),
    ec("Sehr geehrte Frau Lang, kannst du mir helfen?", "Sehr geehrte Frau Lang, können Sie mir helfen?", "После вежливого обращения нужна форма Sie."),
    ec("Wir brauchen Ihre Unterlagen asap.", "Wir benötigen Ihre Unterlagen bald.", "asap и brauchen выбиваются из делового регистра.", ["Wir benötigen Ihre Unterlagen zeitnah"]),
    ec("Mit freundlichen Grüßen, dein Tom", "Mit freundlichen Grüßen, Tom Weber", "В подписи клиенту не ставят dein."),
    sb(["Wir", "haben", "Ihr", "Schreiben", "erhalten"], "Формальный перфект.", {
      ru: "Мы получили ваше письмо",
      en: "We have received your letter",
      es: "Hemos recibido su escrito",
    }),
    sb(["Kannst", "du", "mir", "den", "Link", "schicken"], "Разговорная просьба.", {
      ru: "Можешь скинуть мне ссылку",
      en: "Can you send me the link",
      es: "¿Puedes enviarme el enlace?",
    }),
    sb(["Wir", "bitten", "um", "Rückmeldung"], "bitten um.", {
      ru: "Просим обратную связь",
      en: "We ask for a reply",
      es: "Pedimos una respuesta",
    }),
    sb(["Die", "Daten", "benötigen", "eine", "Analyse"], "benötigen в отчёте.", {
      ru: "Данным нужен анализ",
      en: "The data need an analysis",
      es: "Los datos necesitan un análisis",
    }),
  ],

  "de-ch33-reported-advanced": [
    mc(
      "Er sagte, der Vertrag ___ unterzeichnet worden. Какая форма?",
      ["sei", "ist", "war", "hat"],
      "sei",
      "Пассив в косвенной речи: sei … worden.",
      {
        en: "Er sagte, der Vertrag ___ unterzeichnet worden. Which form?",
        es: "Er sagte, der Vertrag ___ unterzeichnet worden. ¿Qué forma?",
        de: "Er sagte, der Vertrag ___ unterzeichnet worden. Welche Form?",
      },
    ),
    mc(
      "Sie fragte, ___ er kommen könne. Какое слово косвенного вопроса?",
      ["ob", "dass", "weil", "denn"],
      "ob",
      "Косвенный вопрос без вопросительного слова: ob.",
      {
        en: "Sie fragte, ___ er kommen könne. Which word for the indirect question?",
        es: "Sie fragte, ___ er kommen könne. ¿Qué palabra para la pregunta indirecta?",
        de: "Sie fragte, ___ er kommen könne. Welches Wort der indirekten Frage?",
      },
    ),
    mc(
      "Er fügte hinzu, man ___ das prüfen. Какая форма?",
      ["werde", "wird", "wurde", "ist"],
      "werde",
      "Konjunktiv I: man werde + инфинитив.",
      {
        en: "Er fügte hinzu, man ___ das prüfen. Which form?",
        es: "Er fügte hinzu, man ___ das prüfen. ¿Qué forma?",
        de: "Er fügte hinzu, man ___ das prüfen. Welche Form?",
      },
    ),
    mc(
      "Die Sprecherin betonte, es ___ keine Alternative. Какая форма?",
      ["gebe", "gibt", "gab", "ist"],
      "gebe",
      "Konjunktiv I от geben: es gebe.",
      {
        en: "Die Sprecherin betonte, es ___ keine Alternative. Which form?",
        es: "Die Sprecherin betonte, es ___ keine Alternative. ¿Qué forma?",
        de: "Die Sprecherin betonte, es ___ keine Alternative. Welche Form?",
      },
    ),
    fb("Er erklärte, die Lage ___ ernst.", "sei", "sei вместо ist.", {
      ru: "Он заявил, что ситуация серьёзная. Er erklärte, die Lage … ernst.",
      en: "He explained that the situation was serious. Er erklärte, die Lage … ernst.",
      es: "Explicó que la situación era grave. Er erklärte, die Lage … ernst.",
    }),
    fb("Sie wollte wissen, warum niemand etwas gesagt ___.", "habe", "Перфект косвенной речи: gesagt habe.", {
      ru: "Она хотела знать, почему никто ничего не сказал. … gesagt …",
      en: "She wanted to know why nobody had said anything. … gesagt …",
      es: "Quería saber por qué nadie había dicho nada. … gesagt …",
    }),
    fb("Man berichtete, der Plan ___ geändert worden.", "sei", "sei geändert worden.", {
      ru: "Сообщили, что план изменён. Man berichtete, der Plan … geändert worden.",
      en: "It was reported that the plan had been changed. Man berichtete, der Plan … geändert worden.",
      es: "Informaron de que el plan había sido cambiado. Man berichtete, der Plan … geändert worden.",
    }),
    fb("Er meinte, es ___ keinen anderen Weg.", "gebe", "es gebe.", {
      ru: "Он считал, что другого пути нет. Er meinte, es … keinen anderen Weg.",
      en: "He thought there was no other way. Er meinte, es … keinen anderen Weg.",
      es: "Opinaba que no había otro camino. Er meinte, es … keinen anderen Weg.",
    }),
    tl("Министр заявил, что ситуация серьёзная и что действовать будут быстро.", "Der Minister erklärte, die Lage sei ernst und man werde schnell handeln", "Две клаузы в Konjunktiv I."),
    tl("Она спросила, пришёл ли он и почему никто ничего не сказал.", "Sie fragte, ob er gekommen sei und warum niemand etwas gesagt habe", "ob и warum, оба глагола в конце своих частей."),
    tl("Сообщили, что договор подписан.", "Es hieß, der Vertrag sei unterzeichnet worden", "Пресс-формула es hieß + пассив в Konjunktiv."),
    tl("Он добавил, что альтернативы нет.", "Er fügte hinzu, es gebe keine Alternative", "gebe вместо gibt."),
    ec("Er sagte, der Vertrag ist unterzeichnet worden.", "Er sagte, der Vertrag sei unterzeichnet worden.", "В косвенной речи ist → sei."),
    ec("Sie fragte, ob ist er gekommen.", "Sie fragte, ob er gekommen sei.", "Косвенный вопрос: ob + причастие + sei в конце."),
    ec("Man berichtete, der Plan wurde geändert.", "Man berichtete, der Plan sei geändert worden.", "Претеритный пассив в передаче речи становится sei … worden."),
    ec("Er meinte, es gibt keine Alternative.", "Er meinte, es gebe keine Alternative.", "gibt → gebe."),
    sb(["Er", "sagte", "der", "Vertrag", "sei", "unterzeichnet", "worden"], "sei unterzeichnet worden.", {
      ru: "Он сказал, что договор подписан",
      en: "He said the contract had been signed",
      es: "Dijo que el contrato había sido firmado",
    }),
    sb(["Sie", "fragte", "ob", "er", "gekommen", "sei"], "sei в конце.", {
      ru: "Она спросила, пришёл ли он",
      en: "She asked whether he had come",
      es: "Preguntó si había venido",
    }),
    sb(["Es", "hieß", "der", "Vertrag", "sei", "unterzeichnet", "worden"], "es hieß + Konjunktiv.", {
      ru: "Сообщили, что договор подписан",
      en: "It was said the contract had been signed",
      es: "Se dijo que el contrato había sido firmado",
    }),
    sb(["Er", "fügte", "hinzu", "es", "gebe", "keine", "Alternative"], "hinzufügen разделяется: fügte … hinzu.", {
      ru: "Он добавил, что альтернативы нет",
      en: "He added that there was no alternative",
      es: "Añadió que no había alternativa",
    }),
  ],

  "de-ch34-particles-idioms": [
    mc(
      "Du weißt ___ Bescheid. Какая частица? (и так известно обоим)",
      ["ja", "mal", "halt", "bitte"],
      "ja",
      "ja отмечает общее знание, не просит о действии.",
      {
        en: "Du weißt ___ Bescheid. Which particle? (both already know)",
        es: "Du weißt ___ Bescheid. ¿Qué partícula? (ambos ya lo saben)",
        de: "Du weißt ___ Bescheid. Welche Partikel? (beide wissen es schon)",
      },
    ),
    mc(
      "Kommt er nicht? — ___! Какое слово? (на самом деле придёт)",
      ["Doch", "Nein", "Ja", "Eben"],
      "Doch",
      "Doch возражает отрицательному ожиданию.",
      {
        en: "Kommt er nicht? — ___! Which word? (he actually will come)",
        es: "Kommt er nicht? — ___! ¿Qué palabra? (en realidad sí viene)",
        de: "Kommt er nicht? — ___! Welches Wort? (er kommt doch)",
      },
    ),
    mc(
      "Da kann man nichts machen. Das ist ___ so. Какая частица?",
      ["eben", "mal", "doch", "bitte"],
      "eben",
      "eben передаёт смирение: так уж сложилось.",
      {
        en: "Da kann man nichts machen. Das ist ___ so. Which particle?",
        es: "Da kann man nichts machen. Das ist ___ so. ¿Qué partícula?",
        de: "Da kann man nichts machen. Das ist ___ so. Welche Partikel?",
      },
    ),
    mc(
      "Какой идиомой желают удачи?",
      ["die Daumen drücken", "den Nagel treffen", "ins Wort fallen", "auf der Leitung stehen"],
      "die Daumen drücken",
      "jemandem die Daumen drücken = держать кулаки.",
      {
        en: "Which idiom wishes someone luck?",
        es: "¿Con qué expresión se desea suerte?",
        de: "Mit welcher Redewendung wünscht man Glück?",
      },
    ),
    fb("Komm ___ her!", "mal", "mal смягчает побуждение.", {
      ru: "Подойди-ка! Komm … her!",
      en: "Come here a moment. Komm … her!",
      es: "Ven un momento. Komm … her!",
    }),
    fb("Ich drücke dir die ___.", "Daumen", "Устойчиво множественное число: die Daumen.", {
      ru: "Я держу за тебя кулаки. Ich drücke dir die …",
      en: "I am keeping my fingers crossed for you. Ich drücke dir die …",
      es: "Te cruzo los dedos. Ich drücke dir die …",
    }),
    fb("Sie hat den Nagel auf den ___ getroffen.", "Kopf", "den Nagel auf den Kopf treffen = попасть в точку.", {
      ru: "Она попала в самую точку. Sie hat den Nagel auf den … getroffen.",
      en: "She hit the nail on the head. Sie hat den Nagel auf den … getroffen.",
      es: "Dio en el clavo. Sie hat den Nagel auf den … getroffen.",
    }),
    fb("Das habe ich dir ___ gesagt!", "doch", "doch напоминает о том, что собеседник уже слышал.", {
      ru: "Я же тебе это говорил! Das habe ich dir … gesagt!",
      en: "I did tell you that! Das habe ich dir … gesagt!",
      es: "¡Si ya te lo dije! Das habe ich dir … gesagt!",
    }),
    tl("Я держу за тебя кулаки.", "Ich drücke dir die Daumen", "Дательный адресата + die Daumen."),
    tl("Это же ясно.", "Das ist doch klar", "doch делает вывод очевидным для обоих."),
    tl("Подойди-ка.", "Komm mal her", "mal смягчает императив."),
    tl("Так уж оно и есть.", "Das ist eben so", "eben = ничего не поделаешь.", ["Das ist halt so"]),
    ec("Ich drücke dir den Daumen.", "Ich drücke dir die Daumen.", "Идиома требует множественное число die Daumen."),
    ec("Das ist klar doch.", "Das ist doch klar.", "Частица doch стоит перед ударным словом klar."),
    ec("Komm her mal.", "Komm mal her.", "mal стоит между глаголом и наречием her."),
    ec("Sie hat den Kopf auf den Nagel getroffen.", "Sie hat den Nagel auf den Kopf getroffen.", "Порядок идиомы: Nagel auf den Kopf."),
    sb(["Ich", "drücke", "dir", "die", "Daumen"], "die Daumen.", {
      ru: "Я держу за тебя кулаки",
      en: "I am keeping my fingers crossed for you",
      es: "Te cruzo los dedos",
    }),
    sb(["Das", "ist", "doch", "klar"], "doch klar.", {
      ru: "Это же ясно",
      en: "That is obvious",
      es: "Eso está claro",
    }),
    sb(["Komm", "mal", "her"], "mal смягчает Komm.", {
      ru: "Подойди-ка",
      en: "Come here a moment",
      es: "Ven un momento",
    }),
    sb(["Das", "ist", "eben", "so"], "eben so.", {
      ru: "Так уж оно и есть",
      en: "That is just how it is",
      es: "Así son las cosas",
    }),
  ],

  "de-ch35-argumentation": [
    mc(
      "Zwar ist der Plan teuer, ___ er spart Zeit. Какое слово?",
      ["aber", "obwohl", "damit", "bevor"],
      "aber",
      "zwar … aber: уступка в двух главных предложениях.",
      {
        en: "Zwar ist der Plan teuer, ___ er spart Zeit. Which word?",
        es: "Zwar ist der Plan teuer, ___ er spart Zeit. ¿Qué palabra?",
        de: "Zwar ist der Plan teuer, ___ er spart Zeit. Welches Wort?",
      },
    ),
    mc(
      "Формальное «по моему мнению»:",
      ["meines Erachtens", "ich denke mal", "keine Ahnung", "total klar"],
      "meines Erachtens",
      "meines Erachtens — академический маркер позиции.",
      {
        en: "A formal “in my opinion”:",
        es: "Un «en mi opinión» formal:",
        de: "Ein formelles „meines Erachtens“:",
      },
    ),
    mc(
      "Какой коннектор вводит следствие?",
      ["folglich", "obwohl", "bevor", "damit"],
      "folglich",
      "folglich = следовательно, дальше порядок V2.",
      {
        en: "Which connector introduces a consequence?",
        es: "¿Qué conector introduce una consecuencia?",
        de: "Welcher Konnektor leitet eine Folge ein?",
      },
    ),
    mc(
      "Einerseits … ___. Какое второе слово пары?",
      ["andererseits", "obwohl", "damit", "bevor"],
      "andererseits",
      "Парный контраст: einerseits … andererseits.",
      {
        en: "Einerseits … ___. Which word completes the pair?",
        es: "Einerseits … ___. ¿Qué palabra completa el par?",
        de: "Einerseits … ___. Welches Wort schließt das Paar?",
      },
    ),
    fb("Einerseits ist der Plan teuer, ___ spart er Zeit.", "andererseits", "Вторая часть тоже главное предложение: andererseits spart er.", {
      ru: "С одной стороны план дорогой, с другой он экономит время. … spart er Zeit.",
      en: "On the one hand the plan is expensive; on the other it saves time. … spart er Zeit.",
      es: "Por un lado el plan es caro; por otro ahorra tiempo. … spart er Zeit.",
    }),
    fb("___ Erachtens fehlt ein Beleg.", "Meines", "Фиксированный генитив: Meines Erachtens.", {
      ru: "По моему мнению, не хватает доказательства. … Erachtens fehlt ein Beleg.",
      en: "In my view, a piece of evidence is missing. … Erachtens fehlt ein Beleg.",
      es: "A mi juicio, falta una prueba. … Erachtens fehlt ein Beleg.",
    }),
    fb(
      "Der Text ist lang, ___ bleibt er unklar.",
      "dennoch",
      "dennoch ставится в начало и сохраняет V2.",
      {
        ru: "Текст длинный, и всё же он остаётся неясным. Der Text ist lang, … bleibt er unklar.",
        en: "The text is long, yet it stays unclear. Der Text ist lang, … bleibt er unklar.",
        es: "El texto es largo y, sin embargo, sigue siendo poco claro. Der Text ist lang, … bleibt er unklar.",
      },
      ["gleichwohl"],
    ),
    fb("___ lässt sich nicht bestreiten, dass Lücken bleiben.", "Es", "Безличное es lässt sich … = можно утверждать / нельзя отрицать.", {
      ru: "Нельзя отрицать, что пробелы остаются. … lässt sich nicht bestreiten, dass Lücken bleiben.",
      en: "It cannot be denied that gaps remain. … lässt sich nicht bestreiten, dass Lücken bleiben.",
      es: "No se puede negar que quedan lagunas. … lässt sich nicht bestreiten, dass Lücken bleiben.",
    }),
    tl("С одной стороны, план дорогой, с другой — он экономит время.", "Einerseits ist der Plan teuer, andererseits spart er Zeit", "Оба компонента — главные предложения с V2."),
    tl("По моему мнению, не хватает доказательства.", "Meines Erachtens fehlt ein Beleg", "Meines Erachtens не изменяется."),
    tl("Следовательно, вывод остаётся предварительным.", "Folglich bleibt das Fazit vorläufig", "folglich в первой позиции, глагол во второй."),
    tl("Нельзя отрицать, что данные неполные.", "Es lässt sich nicht bestreiten, dass die Daten lückenhaft sind", "dass отправляет глагол в конец."),
    ec("Einerseits ist der Plan teuer, aber andererseits er spart Zeit.", "Einerseits ist der Plan teuer, andererseits spart er Zeit.", "После andererseits глагол стоит сразу: spart er."),
    ec("Meine Erachtens fehlt ein Beleg.", "Meines Erachtens fehlt ein Beleg.", "Форма генитива: Meines, не Meine."),
    ec("Folglich das Fazit bleibt vorläufig.", "Folglich bleibt das Fazit vorläufig.", "folglich занимает первое место, bleibt — второе."),
    ec("Es lässt sich nicht bestreiten, dass die Daten sind lückenhaft.", "Es lässt sich nicht bestreiten, dass die Daten lückenhaft sind.", "В dass-придаточном глагол последний."),
    sb(["Einerseits", "ist", "der", "Plan", "teuer", "andererseits", "spart", "er", "Zeit"], "Парная аргументация.", {
      ru: "С одной стороны план дорогой, с другой он экономит время",
      en: "On the one hand the plan is expensive; on the other it saves time",
      es: "Por un lado el plan es caro; por otro ahorra tiempo",
    }),
    sb(["Meines", "Erachtens", "fehlt", "ein", "Beleg"], "Meines Erachtens.", {
      ru: "По моему мнению, не хватает доказательства",
      en: "In my view, a piece of evidence is missing",
      es: "A mi juicio, falta una prueba",
    }),
    sb(["Folglich", "bleibt", "das", "Fazit", "vorläufig"], "V2 после folglich.", {
      ru: "Следовательно, вывод остаётся предварительным",
      en: "Consequently, the conclusion stays provisional",
      es: "Por tanto, la conclusión sigue siendo provisional",
    }),
    sb(["Es", "lässt", "sich", "nicht", "bestreiten"], "es lässt sich nicht bestreiten.", {
      ru: "Нельзя отрицать",
      en: "It cannot be denied",
      es: "No se puede negar",
    }),
  ],

  "de-ch36-text-pragmatics": [
    mc(
      "Кто-то говорит в душной комнате: Es zieht ein bisschen. Что это прежде всего?",
      ["eine Bitte, das Fenster zu schließen", "ein Wetterbericht", "ein Themenwechsel", "eine Preisfrage"],
      "eine Bitte, das Fenster zu schließen",
      "Es zieht работает как намёк закрыть окно, а не как сводка погоды.",
      {
        en: "Someone says in a stuffy room: Es zieht ein bisschen. What is that above all?",
        es: "Alguien dice en una sala cargada: Es zieht ein bisschen. ¿Qué es eso sobre todo?",
        de: "Jemand sagt im stickigen Raum: Es zieht ein bisschen. Was ist das vor allem?",
      },
    ),
    mc(
      "Könnten Sie das wiederholen? На уроке это прежде всего …",
      ["eine Bitte", "ein Fähigkeitstest", "eine Ablehnung", "ein Gruß"],
      "eine Bitte",
      "Konjunktiv II здесь вежливое побуждение, не проверка умения.",
      {
        en: "Könnten Sie das wiederholen? In class this is above all …",
        es: "Könnten Sie das wiederholen? En clase esto es sobre todo …",
        de: "Könnten Sie das wiederholen? In der Stunde ist das vor allem …",
      },
    ),
    mc(
      "Nicht Anna hat den Text geschrieben, sondern ___. Кто в контрасте?",
      ["Ben", "gestern", "vielleicht", "den Text"],
      "Ben",
      "sondern вводит контрастный фокус, того же типа, что и Anna.",
      {
        en: "Nicht Anna hat den Text geschrieben, sondern ___. Who is the contrast?",
        es: "Nicht Anna hat den Text geschrieben, sondern ___. ¿Quién es el contraste?",
        de: "Nicht Anna hat den Text geschrieben, sondern ___. Wer steht im Kontrast?",
      },
    ),
    mc(
      "После извинения руководительница говорит только: Schon gut. Что она этим делает?",
      ["Sie beendet das Thema", "Sie verlangt einen langen Bericht", "Sie setzt eine neue Frist", "Sie bestreitet den Vorfall"],
      "Sie beendet das Thema",
      "Schon gut останавливает дальнейшие извинения.",
      {
        en: "After an apology the chair only says: Schon gut. What does she do with that?",
        es: "Tras una disculpa la directora solo dice: Schon gut. ¿Qué hace con eso?",
        de: "Nach einer Entschuldigung sagt die Leiterin nur: Schon gut. Was tut sie damit?",
      },
    ),
    fb("Nicht der Preis ist das Problem, ___ die Frist.", "sondern", "Контрастный фокус: nicht …, sondern …", {
      ru: "Не цена проблема, а срок. Nicht der Preis ist das Problem, … die Frist.",
      en: "The price is not the problem, but the deadline. Nicht der Preis ist das Problem, … die Frist.",
      es: "El precio no es el problema, sino el plazo. Nicht der Preis ist das Problem, … die Frist.",
    }),
    fb("Es zieht. В этом диалоге реплика работает как ___.", "Hinweis", "Прагматическая функция — намёк, не прогноз.", {
      ru: "Es zieht. В диалоге реплика работает как намёк. …",
      en: "Es zieht. In this dialogue the line works as a hint.",
      es: "Es zieht. En este diálogo la frase funciona como una indirecta.",
    }),
    fb("В начале предложения часто стоит уже ___ информация.", "bekannte", "Тема, известная из контекста, часто занимает первое место.", {
      ru: "В начале предложения часто стоит уже известная информация.",
      en: "Information that is already known often stands at the start of the sentence.",
      es: "Al principio de la frase suele estar la información ya conocida.",
    }),
    fb(
      "Hast du einen Stift? На уроке это обычно ___.",
      "Bitte",
      "Вопрос о наличии ручки — просьба дать её.",
      {
        ru: "Hast du einen Stift? На уроке это обычно просьба.",
        en: "Hast du einen Stift? In class this is usually a request.",
        es: "Hast du einen Stift? En clase esto suele ser una petición.",
      },
      ["Aufforderung"],
    ),
    tl("Не цена проблема, а срок.", "Nicht der Preis ist das Problem, sondern die Frist", "Отрицаемый элемент вынесен в фокус перед глаголом."),
    tl("Не могли бы вы закрыть окно?", "Könnten Sie das Fenster schließen?", "Вежливая просьба, не вопрос о способности."),
    tl("Не Анна написала текст, а Бен.", "Nicht Anna hat den Text geschrieben, sondern Ben", "nicht + фокус, sondern + контраст."),
    tl("Ладно, оставим это.", "Schon gut, lassen wir das", "Schon gut закрывает тему извинения или спора."),
    ec("Nicht der Preis ist das Problem, aber die Frist.", "Nicht der Preis ist das Problem, sondern die Frist.", "После отрицаемого фокуса контраст вводится через sondern."),
    ec("Könnten Sie das Fenster zu schließen?", "Könnten Sie das Fenster schließen?", "После Könnten нет zu."),
    ec("Nicht Anna hat den Text geschrieben, aber Ben.", "Nicht Anna hat den Text geschrieben, sondern Ben.", "После вынесенного отрицания контраст вводится через sondern."),
    ec("Können Sie das Fenster schließen können?", "Könnten Sie das Fenster schließen?", "Один модальный глагол, вежливая форма Könnten."),
    sb(["Nicht", "der", "Preis", "ist", "das", "Problem", "sondern", "die", "Frist"], "nicht … sondern.", {
      ru: "Не цена проблема, а срок",
      en: "The problem is not the price but the deadline",
      es: "El problema no es el precio, sino el plazo",
    }),
    sb(["Könnten", "Sie", "das", "Fenster", "schließen"], "Вежливая просьба.", {
      ru: "Не могли бы вы закрыть окно",
      en: "Could you close the window",
      es: "¿Podría cerrar la ventana?",
    }),
    sb(["Nicht", "Anna", "hat", "den", "Text", "geschrieben", "sondern", "Ben"], "Фокус на имени.", {
      ru: "Не Анна написала текст, а Бен",
      en: "Anna did not write the text; Ben did",
      es: "No escribió el texto Anna, sino Ben",
    }),
    sb(["Schon", "gut", "lassen", "wir", "das"], "Закрытие темы.", {
      ru: "Ладно, оставим это",
      en: "All right, let us leave it",
      es: "Está bien, dejémoslo",
    }),
  ],
};
