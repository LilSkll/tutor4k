import type { InterfaceLanguage, StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type L1 = Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>;

const choose = "Выберите правильный вариант";
const fill = "Вставьте пропущенное слово";
const tr = "Переведите на немецкий";
const fix = "Исправьте ошибку — напишите предложение целиком";
const build = "Соберите предложение";

/**
 * A1 MC prompts are authored in Russian (L1) so absolute beginners can solve
 * the first chapter drills without already knowing German. EN/ES/DE UIs get
 * questionTranslations; prepareExercisesForInterface swaps the stem.
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

/** German A1 — chapters 1–10. Original drills; topics stamped in getGermanExercises. */
export const GERMAN_A1_EXERCISES: Record<string, Draft[]> = {
  "de-ch1-alphabet-greetings": [
    mc(
      "Как вежливо поздороваться с преподавательницей утром?",
      ["Guten Morgen", "Tschüss", "Danke", "Bitte"],
      "Guten Morgen",
      "Утром в формальной ситуации — Guten Morgen.",
      {
        en: "How do you politely greet a female teacher in the morning?",
        es: "¿Cómo se saluda educadamente a la profesora por la mañana?",
        de: "Wie begrüßt man die Lehrerin am Morgen höflich?",
      },
    ),
    mc(
      "Друг заходит в кафе. Что сказать?",
      ["Auf Wiedersehen", "Gute Nacht", "Hallo", "Bitte"],
      "Hallo",
      "С другом достаточно Hallo.",
      {
        en: "A friend walks into the café. What do you say?",
        es: "Un amigo entra en el café. ¿Qué dices?",
        de: "Ein Freund kommt ins Café. Was sagst du?",
      },
    ),
    mc(
      "Какой знак читается как ss?",
      ["ä", "ö", "ü", "ß"],
      "ß",
      "ß (Eszett) читается как ss: Straße.",
      {
        en: "Which character sounds like ss?",
        es: "¿Qué signo suena como ss?",
        de: "Welches Zeichen klingt wie ss?",
      },
    ),
    mc(
      "Что отвечают на Danke?",
      ["Bitte", "Hallo", "Tschüss", "Morgen"],
      "Bitte",
      "На спасибо отвечают Bitte.",
      {
        en: "What do you say after Danke?",
        es: "¿Qué se responde después de Danke?",
        de: "Was sagt man nach Danke?",
      },
    ),
    fb(
      "___ Morgen, Frau Keller!",
      "Guten",
      "Morgen — мужской род: Guten Morgen.",
      {
        ru: "Утреннее приветствие: … Morgen, Frau Keller!",
        en: "Morning greeting: … Morgen, Frau Keller!",
        es: "Saludo de la mañana: … Morgen, Frau Keller!",
        de: "Morgengruß: … Morgen, Frau Keller!",
      },
    ),
    fb(
      "Auf ___!",
      "Wiedersehen",
      "Формальное прощание: Auf Wiedersehen.",
      {
        ru: "Формальное прощание: Auf …!",
        en: "Formal goodbye: Auf …!",
        es: "Despedida formal: Auf …!",
        de: "Formeller Abschied: Auf …!",
      },
    ),
    fb(
      "— Danke! — ___ schön.",
      "Bitte",
      "Bitte schön — вежливый ответ на благодарность.",
      {
        ru: "Ответ на «спасибо»: — Danke! — … schön.",
        en: "Reply to thank you: — Danke! — … schön.",
        es: "Respuesta a «gracias»: — Danke! — … schön.",
        de: "Antwort auf Danke: — Danke! — … schön.",
      },
    ),
    fb(
      "Vor dem Schlafen: Gute ___!",
      "Nacht",
      "Nacht — женский род: Gute Nacht.",
      {
        ru: "Перед сном: Gute …!",
        en: "Before sleep: Gute …!",
        es: "Antes de dormir: Gute …!",
        de: "Vor dem Schlafen: Gute …!",
      },
    ),
    tl("Доброе утро.", "Guten Morgen", "Утреннее приветствие — Guten Morgen."),
    tl("Добрый день.", "Guten Tag", "Дневное приветствие — Guten Tag."),
    tl(
      "До свидания.",
      "Auf Wiedersehen",
      "Формальное прощание пишется в два слова.",
    ),
    tl("Большое спасибо.", "Vielen Dank", "Vielen Dank = большое спасибо.", [
      "Danke schön",
      "Danke sehr",
    ]),
    ec(
      "Gute Morgen, Frau Keller!",
      "Guten Morgen, Frau Keller!",
      "Morgen мужского рода: Guten, не Gute.",
    ),
    ec(
      "Aufwiedersehen!",
      "Auf Wiedersehen!",
      "Auf Wiedersehen пишется раздельно.",
    ),
    ec("Guten Nacht!", "Gute Nacht!", "Nacht женского рода: Gute Nacht."),
    ec(
      "Tschüss, Frau Berg!",
      "Auf Wiedersehen, Frau Berg!",
      "Преподавателю не говорят Tschüss: Auf Wiedersehen.",
    ),
    sb(["Guten", "Morgen"], "Утреннее приветствие: Guten Morgen.", {
      ru: "Доброе утро",
      en: "Good morning",
      es: "Buenos días",
      de: "Morgengruß",
    }),
    sb(["Auf", "Wiedersehen"], "Формальное прощание в два слова.", {
      ru: "До свидания (формально)",
      en: "Goodbye (formal)",
      es: "Adiós (formal)",
      de: "Formeller Abschied",
    }),
    sb(["Ich", "heiße", "Lea"], "Ich heiße + имя — формула знакомства.", {
      ru: "Меня зовут Леа",
      en: "My name is Lea",
      es: "Me llamo Lea",
      de: "Ich heiße Lea",
    }),
    sb(["Guten", "Abend"], "Вечернее приветствие: Guten Abend.", {
      ru: "Добрый вечер",
      en: "Good evening",
      es: "Buenas tardes / Buenas noches (saludo)",
      de: "Abendgruß",
    }),
  ],

  "de-ch2-sein-haben": [
    mc(
      "Ich ___ aus Berlin. Какая форма sein?",
      ["bin", "bist", "ist", "sind"],
      "bin",
      "ich → bin.",
      {
        en: "Ich ___ aus Berlin. Which form of sein?",
        es: "Ich ___ aus Berlin. ¿Qué forma de sein?",
        de: "Ich ___ aus Berlin. Welche Form von sein?",
      },
    ),
    mc(
      "Du ___ ein Handy. Какая форма haben?",
      ["habe", "hast", "hat", "haben"],
      "hast",
      "du → hast.",
      {
        en: "Du ___ ein Handy. Which form of haben?",
        es: "Du ___ ein Handy. ¿Qué forma de haben?",
        de: "Du ___ ein Handy. Welche Form von haben?",
      },
    ),
    mc(
      "Sie ___ müde. (она) Какая форма sein?",
      ["bin", "bist", "ist", "sind"],
      "ist",
      "sie (она) → ist.",
      {
        en: "Sie ___ müde. (she) Which form of sein?",
        es: "Sie ___ müde. (ella) ¿Qué forma de sein?",
        de: "Sie ___ müde. (sie = sie) Welche Form von sein?",
      },
    ),
    mc(
      "Wir ___ zwei Bücher. Какая форма haben?",
      ["habe", "hast", "hat", "haben"],
      "haben",
      "wir → haben.",
      {
        en: "Wir ___ zwei Bücher. Which form of haben?",
        es: "Wir ___ zwei Bücher. ¿Qué forma de haben?",
        de: "Wir ___ zwei Bücher. Welche Form von haben?",
      },
    ),
    fb("Ich ___ Anna.", "bin", "Имя после sein: Ich bin Anna.", {
      ru: "Имя: Ich … Anna.",
      en: "Name: Ich … Anna.",
      es: "Nombre: Ich … Anna.",
    }),
    fb("Er ___ ein Auto.", "hat", "er → hat.", {
      ru: "Он: Er … ein Auto.",
      en: "He: Er … ein Auto.",
      es: "Él: Er … ein Auto.",
    }),
    fb("Ihr ___ aus Wien.", "seid", "ihr (вы, несколько человек) → seid.", {
      ru: "Вы (мн.): Ihr … aus Wien.",
      en: "You (plural): Ihr … aus Wien.",
      es: "Vosotros: Ihr … aus Wien.",
    }),
    fb("Sie ___ Zeit. (они)", "haben", "sie (они) → haben.", {
      ru: "Они: Sie … Zeit.",
      en: "They: Sie … Zeit.",
      es: "Ellos: Sie … Zeit.",
    }),
    tl("Я студент.", "Ich bin Student", "Профессия после sein обычно без артикля.", [
      "Ich bin ein Student",
    ]),
    tl(
      "У меня есть книга.",
      "Ich habe ein Buch",
      "«У меня есть» = Ich habe + вин. падеж.",
    ),
    tl(
      "Она из Берлина.",
      "Sie ist aus Berlin",
      "Происхождение: sein + aus + город.",
      ["Sie kommt aus Berlin"],
    ),
    tl("Мы устали.", "Wir sind müde", "Состояние: sein + прилагательное."),
    ec("Ich bin habe ein Auto.", "Ich habe ein Auto.", "Обладание — haben, без sein."),
    ec("Sie bist müde.", "Sie ist müde.", "sie (она) → ist, не bist."),
    ec("Wir ist aus München.", "Wir sind aus München.", "wir → sind."),
    ec("Er haben ein Buch.", "Er hat ein Buch.", "er → hat."),
    sb(["Ich", "bin", "Student"], "Ich bin + роль без обязательного артикля.", {
      ru: "Я студент",
      en: "I am a student",
      es: "Soy estudiante",
    }),
    sb(["Sie", "hat", "ein", "Buch"], "sie (она) + hat.", {
      ru: "У неё есть книга",
      en: "She has a book",
      es: "Ella tiene un libro",
    }),
    sb(["Wir", "sind", "aus", "München"], "wir sind aus + город.", {
      ru: "Мы из Мюнхена",
      en: "We are from Munich",
      es: "Somos de Múnich",
    }),
    sb(["Hast", "du", "Zeit"], "Вопрос с haben: глагол на первом месте.", {
      ru: "У тебя есть время?",
      en: "Do you have time?",
      es: "¿Tienes tiempo?",
    }),
  ],

  "de-ch3-articles-gender": [
    mc(
      "___ Tisch ist neu. Какой артикль? (стол — муж. род)",
      ["Der", "Die", "Das", "Den"],
      "Der",
      "der Tisch — мужской род, именительный.",
      {
        en: "___ Tisch ist neu. Which article? (table is masculine)",
        es: "___ Tisch ist neu. ¿Qué artículo? (Tisch = masculino)",
        de: "___ Tisch ist neu. Welcher Artikel? (Tisch = maskulin)",
      },
    ),
    mc(
      "___ Lampe ist klein. Какой артикль? (лампа — жен. род)",
      ["Der", "Die", "Das", "Ein"],
      "Die",
      "die Lampe — женский род.",
      {
        en: "___ Lampe ist klein. Which article? (lamp is feminine)",
        es: "___ Lampe ist klein. ¿Qué artículo? (lámpara = femenino)",
        de: "___ Lampe ist klein. Welcher Artikel? (Lampe = feminin)",
      },
    ),
    mc(
      "Das ist ___ Buch. Какой артикль? (книга — ср. род)",
      ["ein", "eine", "einen", "der"],
      "ein",
      "das Buch — средний род: ein Buch.",
      {
        en: "Das ist ___ Buch. Which article? (book is neuter)",
        es: "Das ist ___ Buch. ¿Qué artículo? (libro = neutro)",
        de: "Das ist ___ Buch. Welcher Artikel? (Buch = neutrum)",
      },
    ),
    mc(
      "___ Frau ist Lehrerin. Какой артикль?",
      ["Der", "Die", "Das", "Ein"],
      "Die",
      "die Frau — женский род.",
      {
        en: "___ Frau ist Lehrerin. Which article?",
        es: "___ Frau ist Lehrerin. ¿Qué artículo?",
        de: "___ Frau ist Lehrerin. Welcher Artikel?",
      },
    ),
    fb("___ Stuhl ist braun.", "Der", "der Stuhl — мужской род.", {
      ru: "Стул (муж. род): … Stuhl ist braun.",
      en: "Chair (masculine): … Stuhl ist braun.",
      es: "Silla → Stuhl (masculino en alemán): … Stuhl ist braun.",
    }),
    fb("Das ist ___ Tasche.", "eine", "die Tasche — женский род: eine Tasche.", {
      ru: "Сумка (жен. род): Das ist … Tasche.",
      en: "Bag (feminine): Das ist … Tasche.",
      es: "Bolso (femenino): Das ist … Tasche.",
    }),
    fb("___ Fenster ist offen.", "Das", "das Fenster — средний род.", {
      ru: "Окно (ср. род): … Fenster ist offen.",
      en: "Window (neuter): … Fenster ist offen.",
      es: "Ventana → Fenster (neutro en alemán): … Fenster ist offen.",
    }),
    fb("___ Mann ist Arzt.", "Der", "der Mann — мужской род.", {
      ru: "Мужчина: … Mann ist Arzt.",
      en: "Man: … Mann ist Arzt.",
      es: "Hombre: … Mann ist Arzt.",
    }),
    tl("Это стол.", "Das ist ein Tisch", "Новый предмет мужского рода: ein Tisch.", [
      "Das ist der Tisch",
    ]),
    tl(
      "Книга новая. (das Buch)",
      "Das Buch ist neu",
      "das Buch — средний род; не die.",
    ),
    tl("Это лампа.", "Das ist eine Lampe", "die Lampe — eine Lampe."),
    tl("Мужчина — врач.", "Der Mann ist Arzt", "der Mann; профессия без артикля.", [
      "Der Mann ist ein Arzt",
    ]),
    ec("Die Tisch ist groß.", "Der Tisch ist groß.", "Tisch — мужской род: der."),
    ec("Der Lampe ist neu.", "Die Lampe ist neu.", "Lampe — женский род: die."),
    ec("Das ist eine Buch.", "Das ist ein Buch.", "Buch — средний род: ein, не eine."),
    ec("Ein Frau kommt.", "Eine Frau kommt.", "Frau — женский род: eine."),
    sb(["Der", "Tisch", "ist", "neu"], "Именительный мужского рода: der Tisch.", {
      ru: "Стол новый",
      en: "The table is new",
      es: "La mesa es nueva",
    }),
    sb(["Das", "ist", "eine", "Lampe"], "Неопределённый артикль женского рода: eine.", {
      ru: "Это лампа",
      en: "This is a lamp",
      es: "Esto es una lámpara",
    }),
    sb(["Das", "Buch", "ist", "klein"], "Средний род: das Buch.", {
      ru: "Книга маленькая",
      en: "The book is small",
      es: "El libro es pequeño",
    }),
    sb(["Die", "Frau", "ist", "hier"], "Женский род: die Frau.", {
      ru: "Женщина здесь",
      en: "The woman is here",
      es: "La mujer está aquí",
    }),
  ],

  "de-ch4-praesens": [
    mc(
      "Er ___ Deutsch. (sprechen) Какая форма?",
      ["spreche", "spricht", "sprechen", "sprichst"],
      "spricht",
      "er spricht: смена гласной e → i.",
      {
        en: "Er ___ Deutsch. (sprechen) Which form?",
        es: "Er ___ Deutsch. (sprechen) ¿Qué forma?",
        de: "Er ___ Deutsch. (sprechen) Welche Form?",
      },
    ),
    mc(
      "Ich ___ nach Hause. (gehen) Какая форма?",
      ["gehe", "geht", "gehen", "gehst"],
      "gehe",
      "ich gehe.",
      {
        en: "Ich ___ nach Hause. (gehen) Which form?",
        es: "Ich ___ nach Hause. (gehen) ¿Qué forma?",
        de: "Ich ___ nach Hause. (gehen) Welche Form?",
      },
    ),
    mc(
      "Du ___ Pizza. (essen) Какая форма?",
      ["esse", "isst", "essen", "esst"],
      "isst",
      "du isst: e → i и удвоение s.",
      {
        en: "Du ___ Pizza. (essen) Which form?",
        es: "Du ___ Pizza. (essen) ¿Qué forma?",
        de: "Du ___ Pizza. (essen) Welche Form?",
      },
    ),
    mc(
      "Wir ___ jeden Tag. (arbeiten) Какая форма?",
      ["arbeitet", "arbeite", "arbeiten", "arbeitest"],
      "arbeiten",
      "wir → форма как инфинитив.",
      {
        en: "Wir ___ jeden Tag. (arbeiten) Which form?",
        es: "Wir ___ jeden Tag. (arbeiten) ¿Qué forma?",
        de: "Wir ___ jeden Tag. (arbeiten) Welche Form?",
      },
    ),
    fb("Sie ___ in München. (wohnen, она)", "wohnt", "sie wohnt: основа + t.", {
      ru: "Она живёт: Sie … in München.",
      en: "She lives: Sie … in München.",
      es: "Ella vive: Sie … in München.",
    }),
    fb("Ihr ___ Deutsch. (lernen)", "lernt", "ihr lernt.", {
      ru: "Вы учите: Ihr … Deutsch.",
      en: "You (pl.) learn: Ihr … Deutsch.",
      es: "Vosotros aprendéis: Ihr … Deutsch.",
    }),
    fb("Er ___ mit dem Bus. (fahren)", "fährt", "er fährt: a → ä.", {
      ru: "Он едет: Er … mit dem Bus.",
      en: "He goes (by bus): Er … mit dem Bus.",
      es: "Él va: Er … mit dem Bus.",
    }),
    fb("Ich ___ Kaffee. (trinken)", "trinke", "ich trinke.", {
      ru: "Я пью: Ich … Kaffee.",
      en: "I drink: Ich … Kaffee.",
      es: "Yo bebo: Ich … Kaffee.",
    }),
    tl("Я учу немецкий.", "Ich lerne Deutsch", "Название языка с заглавной: Deutsch."),
    tl(
      "Он едет на работу.",
      "Er fährt zur Arbeit",
      "fahren меняет a → ä; zur = zu der.",
      ["Er fährt zu der Arbeit"],
    ),
    tl("Мы едим пиццу.", "Wir essen Pizza", "wir essen — без изменения гласной.", [
      "Wir essen eine Pizza",
    ]),
    tl(
      "Ты говоришь по-немецки?",
      "Sprichst du Deutsch?",
      "Вопрос: глагол, потом du. sprechen → sprichst.",
    ),
    ec("Er geh nach Hause.", "Er geht nach Hause.", "er geht: в конце -t."),
    ec("Ich spricht Deutsch.", "Ich spreche Deutsch.", "ich spreche, без смены гласной."),
    ec("Sie wohne in Berlin.", "Sie wohnt in Berlin.", "sie wohnt."),
    ec("Wir arbeitet heute.", "Wir arbeiten heute.", "wir arbeiten, не форма er."),
    sb(["Ich", "lerne", "Deutsch"], "Ich lerne Deutsch.", {
      ru: "Я учу немецкий",
      en: "I am learning German",
      es: "Estoy aprendiendo alemán",
    }),
    sb(["Er", "spricht", "langsam"], "er spricht.", {
      ru: "Он говорит медленно",
      en: "He speaks slowly",
      es: "Él habla despacio",
    }),
    sb(["Wir", "essen", "Pizza"], "wir essen.", {
      ru: "Мы едим пиццу",
      en: "We eat pizza",
      es: "Comemos pizza",
    }),
    sb(["Fährst", "du", "nach", "Hause"], "Вопрос: Fährst du …? a → ä.", {
      ru: "Ты едешь домой?",
      en: "Are you going home?",
      es: "¿Vas a casa?",
    }),
  ],

  "de-ch5-akkusativ": [
    mc(
      "Ich kaufe ___ Apfel. Какой артикль в винительном? (Apfel — муж. род)",
      ["ein", "eine", "einen", "einem"],
      "einen",
      "der Apfel → винительный einen.",
      {
        en: "Ich kaufe ___ Apfel. Accusative article? (Apfel is masculine)",
        es: "Ich kaufe ___ Apfel. ¿Artículo en acusativo? (Apfel = masculino)",
        de: "Ich kaufe ___ Apfel. Welcher Akkusativ-Artikel? (Apfel = maskulin)",
      },
    ),
    mc(
      "Sie sieht ___ Film. Какой артикль в винительном?",
      ["der", "den", "dem", "des"],
      "den",
      "der Film → винительный den.",
      {
        en: "Sie sieht ___ Film. Accusative article?",
        es: "Sie sieht ___ Film. ¿Artículo en acusativo?",
        de: "Sie sieht ___ Film. Welcher Akkusativ-Artikel?",
      },
    ),
    mc(
      "Wir haben ___ Katze. Какой артикль?",
      ["ein", "eine", "einen", "der"],
      "eine",
      "die Katze: винительный eine, как именительный.",
      {
        en: "Wir haben ___ Katze. Which article?",
        es: "Wir haben ___ Katze. ¿Qué artículo?",
        de: "Wir haben ___ Katze. Welcher Artikel?",
      },
    ),
    mc(
      "Er kauft ___ Buch. Какой артикль?",
      ["ein", "eine", "einen", "den"],
      "ein",
      "das Buch: винительный ein, как именительный.",
      {
        en: "Er kauft ___ Buch. Which article?",
        es: "Er kauft ___ Buch. ¿Qué artículo?",
        de: "Er kauft ___ Buch. Welcher Artikel?",
      },
    ),
    fb("Ich sehe ___ Mann.", "den", "der Mann → den Mann.", {
      ru: "Я вижу мужчину: Ich sehe … Mann.",
      en: "I see the man: Ich sehe … Mann.",
      es: "Veo al hombre: Ich sehe … Mann.",
    }),
    fb("Hast du ___ Tasche?", "eine", "die Tasche → eine Tasche.", {
      ru: "У тебя есть сумка?: Hast du … Tasche?",
      en: "Do you have a bag?: Hast du … Tasche?",
      es: "¿Tienes un bolso?: Hast du … Tasche?",
    }),
    fb("Ich kaufe ___ Salat.", "einen", "der Salat → einen Salat.", {
      ru: "Я покупаю салат: Ich kaufe … Salat.",
      en: "I buy a salad: Ich kaufe … Salat.",
      es: "Compro una ensalada: Ich kaufe … Salat.",
    }),
    fb("Wir sehen ___ Frau.", "die", "die Frau не меняется в винительном.", {
      ru: "Мы видим женщину: Wir sehen … Frau.",
      en: "We see the woman: Wir sehen … Frau.",
      es: "Vemos a la mujer: Wir sehen … Frau.",
    }),
    tl("Я покупаю яблоко.", "Ich kaufe einen Apfel", "der Apfel → einen Apfel."),
    tl("Она видит фильм.", "Sie sieht den Film", "Определённый предмет мужского рода: den.", [
      "Sie sieht einen Film",
    ]),
    tl(
      "У нас есть кошка.",
      "Wir haben eine Katze",
      "haben + винительный, женский род eine.",
    ),
    tl("Он покупает книгу. (das Buch)", "Er kauft ein Buch", "das Buch → ein Buch."),
    ec("Ich kaufe ein Apfel.", "Ich kaufe einen Apfel.", "Мужской род в винительном: einen."),
    ec("Sie sieht der Film.", "Sie sieht den Film.", "После sieht нужен винительный den."),
    ec("Wir haben ein Katze.", "Wir haben eine Katze.", "Katze женского рода: eine."),
    ec("Ich habe den Buch.", "Ich habe das Buch.", "Buch среднего рода: das, не den."),
    sb(["Ich", "kaufe", "einen", "Apfel"], "kaufen + винительный einen.", {
      ru: "Я покупаю яблоко",
      en: "I buy an apple",
      es: "Compro una manzana",
    }),
    sb(["Sie", "sieht", "den", "Film"], "sehen + den.", {
      ru: "Она смотрит фильм",
      en: "She sees the film",
      es: "Ella ve la película",
    }),
    sb(["Wir", "haben", "eine", "Katze"], "haben + eine.", {
      ru: "У нас есть кошка",
      en: "We have a cat",
      es: "Tenemos un gato",
    }),
    sb(["Er", "kauft", "ein", "Buch"], "kaufen + ein для среднего рода.", {
      ru: "Он покупает книгу",
      en: "He buys a book",
      es: "Él compra un libro",
    }),
  ],

  "de-ch6-questions-v2": [
    mc(
      "___ wohnst du? Какое вопросительное слово? (где)",
      ["Wo", "Wer", "Was", "Wie"],
      "Wo",
      "Wo спрашивает о месте.",
      {
        en: "___ wohnst du? Which question word? (where)",
        es: "___ wohnst du? ¿Qué interrogativo? (dónde)",
        de: "___ wohnst du? Welches Fragewort? (Ort)",
      },
    ),
    mc(
      "___ du Zeit? Какая форма в общем вопросе?",
      ["Habe", "Hast", "Hat", "Haben"],
      "Hast",
      "Общий вопрос: глагол на первом месте.",
      {
        en: "___ du Zeit? Which form in a yes/no question?",
        es: "___ du Zeit? ¿Qué forma en pregunta sí/no?",
        de: "___ du Zeit? Welche Form in der Ja/Nein-Frage?",
      },
    ),
    mc(
      "Heute ___ ich Deutsch. Глагол на каком месте? Выберите форму.",
      ["lerne", "lernst", "lernt", "lernen"],
      "lerne",
      "В главном предложении глагол стоит на втором месте.",
      {
        en: "Heute ___ ich Deutsch. Verb in second position — which form?",
        es: "Heute ___ ich Deutsch. Verbo en 2ª posición — ¿qué forma?",
        de: "Heute ___ ich Deutsch. Verb auf Position 2 — welche Form?",
      },
    ),
    mc(
      "___ heißt du? Как спросить имя?",
      ["Wie", "Wo", "Wer", "Was"],
      "Wie",
      "Wie heißt du? — как тебя зовут.",
      {
        en: "___ heißt du? How do you ask someone's name?",
        es: "___ heißt du? ¿Cómo se pregunta el nombre?",
        de: "___ heißt du? Wie fragt man nach dem Namen?",
      },
    ),
    fb("___ kommst du? (откуда)", "Woher", "Woher = откуда.", {
      ru: "Откуда ты?: … kommst du?",
      en: "Where from?: … kommst du?",
      es: "¿De dónde?: … kommst du?",
    }),
    fb("___ ist der Bahnhof?", "Wo", "Wo = где.", {
      ru: "Где вокзал?: … ist der Bahnhof?",
      en: "Where is the station?: … ist der Bahnhof?",
      es: "¿Dónde está la estación?: … ist der Bahnhof?",
    }),
    fb("Morgen ___ wir nach Wien.", "fahren", "Morgen занимает первое место, глагол — второе: fahren wir.", {
      ru: "Завтра мы едем в Вену: Morgen … wir nach Wien.",
      en: "Tomorrow we go to Vienna: Morgen … wir nach Wien.",
      es: "Mañana vamos a Viena: Morgen … wir nach Wien.",
    }),
    fb("___ du Spanisch? (вопрос, sprechen)", "Sprichst", "Общий вопрос начинается с глагола.", {
      ru: "Ты говоришь по-испански?: … du Spanisch?",
      en: "Do you speak Spanish?: … du Spanisch?",
      es: "¿Hablas español?: … du Spanisch?",
    }),
    tl("Где ты живёшь?", "Wo wohnst du?", "W-вопрос: Wo + глагол + du."),
    tl(
      "Ты говоришь по-немецки?",
      "Sprichst du Deutsch?",
      "Общий вопрос без вопросительного слова: глагол первый.",
    ),
    tl(
      "Сегодня я учу немецкий.",
      "Heute lerne ich Deutsch",
      "Heute на первом месте, lerne на втором.",
      ["Ich lerne heute Deutsch"],
    ),
    tl("Как тебя зовут?", "Wie heißt du?", "ты = du: Wie heißt du?"),
    ec("Wo du wohnst?", "Wo wohnst du?", "После Wo сразу глагол, потом подлежащее."),
    ec(
      "Heute ich gehe ins Kino.",
      "Heute gehe ich ins Kino.",
      "Глагол не может стоять третьим: Heute gehe ich.",
    ),
    ec("Was du machst heute?", "Was machst du heute?", "Was + глагол + подлежащее."),
    ec("Kommen du aus Wien?", "Kommst du aus Wien?", "du → kommst, и глагол стоит первым."),
    sb(["Wo", "wohnst", "du"], "Wo wohnst du?", {
      ru: "Где ты живёшь?",
      en: "Where do you live?",
      es: "¿Dónde vives?",
    }),
    sb(["Heute", "lerne", "ich", "Deutsch"], "Порядок V2: Heute lerne ich.", {
      ru: "Сегодня я учу немецкий",
      en: "Today I learn German",
      es: "Hoy aprendo alemán",
    }),
    sb(["Hast", "du", "Zeit"], "Общий вопрос: Hast du Zeit?", {
      ru: "У тебя есть время?",
      en: "Do you have time?",
      es: "¿Tienes tiempo?",
    }),
    sb(["Wie", "heißt", "sie"], "Wie heißt sie?", {
      ru: "Как её зовут?",
      en: "What is her name?",
      es: "¿Cómo se llama ella?",
    }),
  ],

  "de-ch7-possessives-plurals": [
    mc(
      "___ Bruder wohnt in Köln. (мой) Какое притяжательное?",
      ["Mein", "Meine", "Meinen", "Meiner"],
      "Mein",
      "der Bruder: mein без окончания.",
      {
        en: "___ Bruder wohnt in Köln. (my) Which possessive?",
        es: "___ Bruder wohnt in Köln. (mi) ¿Qué posesivo?",
        de: "___ Bruder wohnt in Köln. (mein) Welches Possessiv?",
      },
    ),
    mc(
      "Das ist ___ Schwester. (твоя)",
      ["dein", "deine", "deinen", "deiner"],
      "deine",
      "die Schwester: deine.",
      {
        en: "Das ist ___ Schwester. (your, feminine noun)",
        es: "Das ist ___ Schwester. (tu, sustantivo femenino)",
        de: "Das ist ___ Schwester. (dein, Femininum)",
      },
    ),
    mc(
      "Zwei ___ liegen hier. (книга) Какое множественное число?",
      ["Buch", "Buchs", "Bücher", "Büchern"],
      "Bücher",
      "das Buch → die Bücher.",
      {
        en: "Zwei ___ liegen hier. (book) Which plural?",
        es: "Zwei ___ liegen hier. (libro) ¿Qué plural?",
        de: "Zwei ___ liegen hier. (Buch) Welcher Plural?",
      },
    ),
    mc(
      "___ Eltern sind nett. (наши)",
      ["Unser", "Unsere", "Unseren", "Unserem"],
      "Unsere",
      "die Eltern — множественное число: unsere.",
      {
        en: "___ Eltern sind nett. (our)",
        es: "___ Eltern sind nett. (nuestros)",
        de: "___ Eltern sind nett. (unser)",
      },
    ),
    fb("Das ist ___ Auto. (его)", "sein", "das Auto — средний род: sein Auto.", {
      ru: "Это его машина: Das ist … Auto.",
      en: "This is his car: Das ist … Auto.",
      es: "Este es su coche: Das ist … Auto.",
    }),
    fb("___ Kinder spielen. (её)", "Ihre", "die Kinder: ihre Kinder.", {
      ru: "Её дети играют: … Kinder spielen.",
      en: "Her children play: … Kinder spielen.",
      es: "Sus hijos juegan: … Kinder spielen.",
    }),
    fb("Die ___ sind neu. (лампа, мн. ч.)", "Lampen", "die Lampe → die Lampen.", {
      ru: "Лампы новые: Die … sind neu.",
      en: "The lamps are new: Die … sind neu.",
      es: "Las lámparas son nuevas: Die … sind neu.",
    }),
    fb("___ Tasche ist rot. (моя)", "Meine", "die Tasche: meine Tasche.", {
      ru: "Моя сумка красная: … Tasche ist rot.",
      en: "My bag is red: … Tasche ist rot.",
      es: "Mi bolso es rojo: … Tasche ist rot.",
    }),
    tl("Это мой брат.", "Das ist mein Bruder", "Мужской род: mein Bruder."),
    tl("Наша квартира маленькая.", "Unsere Wohnung ist klein", "die Wohnung: unsere."),
    tl("У неё две сестры.", "Sie hat zwei Schwestern", "die Schwester → die Schwestern."),
    tl("Его книга новая. (das Buch)", "Sein Buch ist neu", "das Buch: sein Buch; не die."),
    ec("Das ist meine Bruder.", "Das ist mein Bruder.", "Bruder мужского рода: mein, не meine."),
    ec("Sein Schwester heißt Lea.", "Seine Schwester heißt Lea.", "Schwester женского рода: seine."),
    ec("Unsere Kind ist klein.", "Unser Kind ist klein.", "das Kind — средний род единственного числа: unser."),
    ec("Zwei Buch liegen hier.", "Zwei Bücher liegen hier.", "После числительного нужна форма множественного числа Bücher."),
    sb(["Das", "ist", "mein", "Bruder"], "mein + существительное мужского рода.", {
      ru: "Это мой брат",
      en: "This is my brother",
      es: "Este es mi hermano",
    }),
    sb(["Unsere", "Wohnung", "ist", "klein"], "unsere + женский род.", {
      ru: "Наша квартира маленькая",
      en: "Our apartment is small",
      es: "Nuestro piso es pequeño",
    }),
    sb(["Sie", "hat", "zwei", "Schwestern"], "Множественное число: Schwestern.", {
      ru: "У неё две сестры",
      en: "She has two sisters",
      es: "Ella tiene dos hermanas",
    }),
    sb(["Sein", "Buch", "ist", "neu"], "sein + средний род.", {
      ru: "Его книга новая",
      en: "His book is new",
      es: "Su libro es nuevo",
    }),
  ],

  "de-ch8-modals": [
    mc(
      "Ich ___ schwimmen. Какой модальный глагол? (уметь)",
      ["kann", "kannst", "können", "könnt"],
      "kann",
      "ich kann; после модального глагола инфинитив в конце.",
      {
        en: "Ich ___ schwimmen. Which modal? (can / be able to)",
        es: "Ich ___ schwimmen. ¿Qué modal? (poder / saber)",
        de: "Ich ___ schwimmen. Welches Modalverb? (können)",
      },
    ),
    mc(
      "Du ___ hier nicht rauchen. Запрет — какая форма?",
      ["darf", "darfst", "dürfen", "muss"],
      "darfst",
      "Запрет для du: darfst nicht.",
      {
        en: "Du ___ hier nicht rauchen. Prohibition — which form?",
        es: "Du ___ hier nicht rauchen. Prohibición — ¿qué forma?",
        de: "Du ___ hier nicht rauchen. Verbot — welche Form?",
      },
    ),
    mc(
      "Wir ___ jetzt gehen. (долженствовать)",
      ["muss", "musst", "müssen", "müsst"],
      "müssen",
      "wir müssen.",
      {
        en: "Wir ___ jetzt gehen. (must / have to)",
        es: "Wir ___ jetzt gehen. (deber)",
        de: "Wir ___ jetzt gehen. (müssen)",
      },
    ),
    mc(
      "Er ___ Musik. (нравиться)",
      ["mag", "magst", "mögen", "mögt"],
      "mag",
      "er mag = ему нравится.",
      {
        en: "Er ___ Musik. (like)",
        es: "Er ___ Musik. (gustar)",
        de: "Er ___ Musik. (mögen)",
      },
    ),
    fb("Sie ___ gut kochen. (она)", "kann", "sie kann.", {
      ru: "Она умеет хорошо готовить: Sie … gut kochen.",
      en: "She can cook well: Sie … gut kochen.",
      es: "Ella sabe cocinar bien: Sie … gut kochen.",
    }),
    fb("Ihr ___ leise sein.", "sollt", "ihr sollt = вам следует.", {
      ru: "Вам следует быть тише: Ihr … leise sein.",
      en: "You (pl.) should be quiet: Ihr … leise sein.",
      es: "Debéis estar callados: Ihr … leise sein.",
    }),
    fb("___ du mir helfen?", "Kannst", "Вопрос: Kannst du …?", {
      ru: "Ты можешь мне помочь?: … du mir helfen?",
      en: "Can you help me?: … du mir helfen?",
      es: "¿Puedes ayudarme?: … du mir helfen?",
    }),
    fb("Ich ___ keinen Fisch.", "mag", "mögen + винительный: Ich mag keinen Fisch.", {
      ru: "Мне не нравится рыба: Ich … keinen Fisch.",
      en: "I don't like fish: Ich … keinen Fisch.",
      es: "No me gusta el pescado: Ich … keinen Fisch.",
    }),
    tl("Я умею плавать.", "Ich kann schwimmen", "können + инфинитив в конце."),
    tl("Ты должен учиться.", "Du musst lernen", "müssen выражает обязанность; без zu."),
    tl(
      "Мы хотим пить кофе.",
      "Wir wollen Kaffee trinken",
      "wollen + инфинитив.",
      ["Wir wollen einen Kaffee trinken"],
    ),
    tl(
      "Ему нельзя курить здесь.",
      "Er darf hier nicht rauchen",
      "dürfen nicht = запрещено. nicht стоит перед инфинитивом.",
      ["Er darf nicht hier rauchen"],
    ),
    ec("Ich kann schwimme.", "Ich kann schwimmen.", "После модального глагола нужен инфинитив, не личная форма."),
    ec("Du musst zu lernen.", "Du musst lernen.", "Между müssen и инфинитивом нет zu."),
    ec("Wir dürfen gehen jetzt.", "Wir dürfen jetzt gehen.", "Инфинитив стоит в самом конце."),
    ec("Sie kann gut Deutsch.", "Sie kann gut Deutsch sprechen.", "Модальному глаголу нужен инфинитив sprechen."),
    sb(["Ich", "kann", "schwimmen"], "kann + инфинитив.", {
      ru: "Я умею плавать",
      en: "I can swim",
      es: "Sé nadar",
    }),
    sb(["Du", "musst", "lernen"], "musst + инфинитив без zu.", {
      ru: "Ты должен учиться",
      en: "You must study",
      es: "Debes estudiar",
    }),
    sb(["Er", "darf", "nicht", "rauchen"], "nicht перед инфинитивом.", {
      ru: "Ему нельзя курить",
      en: "He is not allowed to smoke",
      es: "No puede fumar",
    }),
    sb(["Wir", "wollen", "Kaffee", "trinken"], "Инфинитив trinken в конце.", {
      ru: "Мы хотим пить кофе",
      en: "We want to drink coffee",
      es: "Queremos beber café",
    }),
  ],

  "de-ch9-separable": [
    mc(
      "Ich stehe um sieben ___. Отделяемая приставка aufstehen?",
      ["auf", "an", "ein", "mit"],
      "auf",
      "aufstehen: приставка auf уходит в конец.",
      {
        en: "Ich stehe um sieben ___. Separable prefix of aufstehen?",
        es: "Ich stehe um sieben ___. ¿Prefijo separable de aufstehen?",
        de: "Ich stehe um sieben ___. Trennbare Vorsilbe von aufstehen?",
      },
    ),
    mc(
      "Der Zug kommt um neun ___. Отделяемая приставка ankommen?",
      ["auf", "an", "ein", "ab"],
      "an",
      "ankommen → kommt … an.",
      {
        en: "Der Zug kommt um neun ___. Separable prefix of ankommen?",
        es: "Der Zug kommt um neun ___. ¿Prefijo separable de ankommen?",
        de: "Der Zug kommt um neun ___. Trennbare Vorsilbe von ankommen?",
      },
    ),
    mc(
      "Wir kaufen im Supermarkt ___. Отделяемая приставка einkaufen?",
      ["auf", "an", "ein", "fern"],
      "ein",
      "einkaufen → kaufen … ein.",
      {
        en: "Wir kaufen im Supermarkt ___. Separable prefix of einkaufen?",
        es: "Wir kaufen im Supermarkt ___. ¿Prefijo separable de einkaufen?",
        de: "Wir kaufen im Supermarkt ___. Trennbare Vorsilbe von einkaufen?",
      },
    ),
    mc(
      "Sie ruft ihre Mutter ___. Отделяемая приставка anrufen?",
      ["an", "auf", "ein", "mit"],
      "an",
      "anrufen → ruft … an.",
      {
        en: "Sie ruft ihre Mutter ___. Separable prefix of anrufen?",
        es: "Sie ruft ihre Mutter ___. ¿Prefijo separable de anrufen?",
        de: "Sie ruft ihre Mutter ___. Trennbare Vorsilbe von anrufen?",
      },
    ),
    fb("___ du morgen mit?", "Kommst", "mitkommen в вопросе: Kommst du mit?", {
      ru: "Ты идёшь с нами завтра?: … du morgen mit?",
      en: "Are you coming along tomorrow?: … du morgen mit?",
      es: "¿Vienes mañana?: … du morgen mit?",
    }),
    fb("Der Film fängt um acht ___.", "an", "anfangen → fängt … an.", {
      ru: "Фильм начинается в восемь: Der Film fängt um acht ….",
      en: "The film starts at eight: Der Film fängt um acht ….",
      es: "La película empieza a las ocho: Der Film fängt um acht ….",
    }),
    fb("Ich sehe abends ___.", "fern", "fernsehen → sehe … fern.", {
      ru: "Вечером я смотрю ТВ: Ich sehe abends ….",
      en: "In the evening I watch TV: Ich sehe abends ….",
      es: "Por la noche veo la tele: Ich sehe abends ….",
    }),
    fb("Er steht früh ___.", "auf", "aufstehen → steht … auf.", {
      ru: "Он встаёт рано: Er steht früh ….",
      en: "He gets up early: Er steht früh ….",
      es: "Se levanta temprano: Er steht früh ….",
    }),
    tl(
      "Я встаю в семь.",
      "Ich stehe um sieben auf",
      "Приставка auf в конце.",
      ["Ich stehe um 7 auf", "Ich stehe um sieben Uhr auf"],
    ),
    tl(
      "Поезд прибывает в девять.",
      "Der Zug kommt um neun an",
      "ankommen: kommt … an.",
      ["Der Zug kommt um 9 an", "Der Zug kommt um neun Uhr an"],
    ),
    tl(
      "Мы ходим за покупками.",
      "Wir kaufen ein",
      "einkaufen в презенсе разделяется.",
      ["Wir gehen einkaufen"],
    ),
    tl(
      "Она звонит маме.",
      "Sie ruft ihre Mutter an",
      "anrufen + винительный, приставка в конце.",
      ["Sie ruft ihre Mama an"],
    ),
    ec("Ich aufstehe um sieben.", "Ich stehe um sieben auf.", "В главном предложении приставка отделяется."),
    ec("Der Zug ankommt bald.", "Der Zug kommt bald an.", "ankommen → kommt … an."),
    ec("Wir einkaufen heute.", "Wir kaufen heute ein.", "einkaufen → kaufen … ein."),
    ec("Sie anruft mich.", "Sie ruft mich an.", "anrufen → ruft … an."),
    sb(["Ich", "stehe", "um", "sieben", "auf"], "Время между глаголом и приставкой.", {
      ru: "Я встаю в семь",
      en: "I get up at seven",
      es: "Me levanto a las siete",
    }),
    sb(["Der", "Zug", "kommt", "an"], "kommt an.", {
      ru: "Поезд прибывает",
      en: "The train arrives",
      es: "El tren llega",
    }),
    sb(["Wir", "kaufen", "heute", "ein"], "heute перед отделяемой приставкой.", {
      ru: "Сегодня мы идём за покупками",
      en: "Today we go shopping",
      es: "Hoy hacemos la compra",
    }),
    sb(["Sie", "ruft", "mich", "an"], "Дополнение перед приставкой an.", {
      ru: "Она мне звонит",
      en: "She calls me",
      es: "Ella me llama",
    }),
  ],

  "de-ch10-negation-time": [
    mc(
      "Ich habe ___ Zeit. Отрицание существительного?",
      ["nicht", "kein", "keine", "keinen"],
      "keine",
      "die Zeit: нет + существительное без артикля → keine.",
      {
        en: "Ich habe ___ Zeit. Noun negation?",
        es: "Ich habe ___ Zeit. ¿Negación del sustantivo?",
        de: "Ich habe ___ Zeit. Negation des Nomens?",
      },
    ),
    mc(
      "Das Buch ist ___ teuer. Отрицание прилагательного?",
      ["nicht", "kein", "keine", "keinen"],
      "nicht",
      "Прилагательное отрицается через nicht.",
      {
        en: "Das Buch ist ___ teuer. Adjective negation?",
        es: "Das Buch ist ___ teuer. ¿Negación del adjetivo?",
        de: "Das Buch ist ___ teuer. Negation des Adjektivs?",
      },
    ),
    mc(
      "Es ist ___ Uhr. (3) Который час — какое числительное?",
      ["drei", "dritte", "dreißig", "dreizehn"],
      "drei",
      "В ответе о времени — количественное числительное drei.",
      {
        en: "Es ist ___ Uhr. (3) Which numeral for the time?",
        es: "Es ist ___ Uhr. (3) ¿Qué numeral para la hora?",
        de: "Es ist ___ Uhr. (3) Welche Zahlwortform?",
      },
    ),
    mc(
      "Der Kurs ist ___ Montag. Предлог дня недели?",
      ["am", "um", "im", "an"],
      "am",
      "День недели: am Montag. um — для часов.",
      {
        en: "Der Kurs ist ___ Montag. Preposition for weekdays?",
        es: "Der Kurs ist ___ Montag. ¿Preposición para el día?",
        de: "Der Kurs ist ___ Montag. Präposition für Wochentage?",
      },
    ),
    fb("Sie hat ___ Auto.", "kein", "das Auto: kein Auto.", {
      ru: "У неё нет машины: Sie hat … Auto.",
      en: "She has no car: Sie hat … Auto.",
      es: "No tiene coche: Sie hat … Auto.",
    }),
    fb("Ich arbeite am Sonntag ___.", "nicht", "Отрицание глагола: nicht в конце этой фразы.", {
      ru: "Я не работаю в воскресенье: Ich arbeite am Sonntag ….",
      en: "I don't work on Sunday: Ich arbeite am Sonntag ….",
      es: "No trabajo el domingo: Ich arbeite am Sonntag ….",
    }),
    fb("8:30 — Es ist halb ___.", "neun", "halb neun = 8:30, половина до девяти.", {
      ru: "8:30 — «половина …»: Es ist halb ….",
      en: "8:30 — half to …: Es ist halb ….",
      es: "8:30 — y media hacia …: Es ist halb ….",
    }),
    fb("Der Kurs ist ___ Dienstag.", "am", "am + день недели.", {
      ru: "Курс во вторник: Der Kurs ist … Dienstag.",
      en: "The course is on Tuesday: Der Kurs ist … Dienstag.",
      es: "El curso es el martes: Der Kurs ist … Dienstag.",
    }),
    tl("У меня нет машины.", "Ich habe kein Auto", "Отрицание неопределённого существительного: kein."),
    tl(
      "Сейчас три часа.",
      "Es ist drei Uhr",
      "Uhr после числительного не меняется.",
      ["Es ist 3 Uhr", "Jetzt ist es drei Uhr", "Jetzt ist es 3 Uhr"],
    ),
    tl(
      "Я не работаю в воскресенье.",
      "Ich arbeite nicht am Sonntag",
      "nicht отрицает обстоятельство времени.",
      ["Ich arbeite am Sonntag nicht", "Am Sonntag arbeite ich nicht"],
    ),
    tl(
      "Курс в понедельник.",
      "Der Kurs ist am Montag",
      "am Montag.",
      ["Am Montag ist der Kurs"],
    ),
    ec("Ich habe nicht Auto.", "Ich habe kein Auto.", "Перед существительным без артикля — kein, не nicht."),
    ec("Es ist drei Uhren.", "Es ist drei Uhr.", "В обозначении времени Uhr остаётся в единственном числе."),
    ec("Sie ist kein müde.", "Sie ist nicht müde.", "Прилагательное: nicht müde."),
    ec("Der Kurs ist um Montag.", "Der Kurs ist am Montag.", "День недели требует am, um ставят перед часами."),
    sb(["Ich", "habe", "kein", "Auto"], "kein + существительное среднего рода.", {
      ru: "У меня нет машины",
      en: "I don't have a car",
      es: "No tengo coche",
    }),
    sb(["Es", "ist", "drei", "Uhr"], "Es ist drei Uhr.", {
      ru: "Сейчас три часа",
      en: "It is three o'clock",
      es: "Son las tres",
    }),
    sb(["Ich", "arbeite", "nicht", "am", "Sonntag"], "nicht перед обстоятельством.", {
      ru: "Я не работаю в воскресенье",
      en: "I don't work on Sunday",
      es: "No trabajo el domingo",
    }),
    sb(["Der", "Kurs", "ist", "am", "Montag"], "am Montag.", {
      ru: "Курс в понедельник",
      en: "The course is on Monday",
      es: "El curso es el lunes",
    }),
  ],
};
