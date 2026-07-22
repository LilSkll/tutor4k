// =====================================================================
// Pre-authored exercises per chapter (permanent adaptive bank)
// ---------------------------------------------------------------------
// Static exercises — zero AI generation. Adaptive Intelligence picks
// items; AI only explains mistakes after answers.
// Drafts may omit `id` — getChapterExercises assigns stable ids.
// Target depth: ~20 of each type per chapter (grow over time).
// =====================================================================

import type { StaticExercise } from "@/types";
import { withExerciseIds } from "@/lib/exercise-bank";
import { expandSpanishChapterBank } from "@/config/exercise-banks/spanish-expand";

/** Draft bank item before id assignment. */
export type ExerciseDraft = Omit<StaticExercise, "id"> & { id?: string };

export type { StaticExercise };

export const CHAPTER_EXERCISES: Record<string, ExerciseDraft[]> = {
  // ===== Chapter 1: ser/estar ======================================
  "chapter-1-despertar": [
    {
      type: "multiple_choice",
      question: "¿Cómo ___ tú? (ser/estar)",
      instruction: "Выберите правильный глагол для знакомства",
      options: ["eres", "estás", "soy", "es"],
      answer: "eres",
      explanation: "Для знакомства «Кто ты?» используется ser: ¿Cómo eres? / ¿Cómo estás? — для состояния.",
    },
    {
      type: "fill_blank",
      question: "Yo ___ estudiante. (ser)",
      instruction: "Поставьте глагол ser в правильной форме",
      answer: "soy",
      acceptableAnswers: ["Soy"],
      explanation: "Yo → soy. Профессия — постоянная характеристика, поэтому ser.",
    },
    {
      type: "multiple_choice",
      question: "Mi hermano ___ cansado hoy.",
      instruction: "Выберите глагол для временного состояния",
      options: ["es", "está", "ser", "eres"],
      answer: "está",
      explanation: "«Устал сегодня» — временное состояние → estar: está cansado.",
    },
    {
      type: "translation",
      question: "Я из России.",
      instruction: "Переведите на испанский (используйте ser)",
      answer: "Soy de Rusia",
      acceptableAnswers: ["soy de Rusia", "Soy de rusia", "soy de rusia"],
      explanation: "Происхождение: ser + de + страна. Soy de Rusia.",
    },
    {
      type: "multiple_choice",
      question: "Nosotros ___ muy felices.",
      instruction: "Выберите форму estar для «мы»",
      options: ["somos", "estamos", "están", "son"],
      answer: "estamos",
      explanation: "Чувства/эмоции → estar. Nosotros → estamos.",
    },
  ],

  // ===== Chapter 2: presente =======================================
  "chapter-2-primer-dialogo": [
    {
      type: "fill_blank",
      question: "Yo ___ (hablar) español todos los días.",
      instruction: "Спрягите глагол hablar в presente",
      answer: "hablo",
      acceptableAnswers: ["Hablo"],
      explanation: "Глагол -ar, yo → hablo. Регулярное спряжение.",
    },
    {
      type: "multiple_choice",
      question: "Ella ___ (comer) una manzana.",
      instruction: "Выберите форму comer для ella",
      options: ["como", "comes", "come", "comemos"],
      answer: "come",
      explanation: "Глагол -er, él/ella/usted → come.",
    },
    {
      type: "fill_blank",
      question: "Nosotros ___ (vivir) en Madrid.",
      instruction: "Поставьте vivir в правильную форму",
      answer: "vivimos",
      acceptableAnswers: ["Vivimos"],
      explanation: "Глагол -ir, nosotros → vivimos.",
    },
    {
      type: "translation",
      question: "Они работают в офисе.",
      instruction: "Переведите на испанский",
      answer: "Ellos trabajan en una oficina",
      acceptableAnswers: ["Trabajan en una oficina", "trabajan en una oficina", "Ellos trabajan en una oficina"],
      explanation: "Ellos → trabajan (-ar). trabajar = работать.",
    },
    {
      type: "multiple_choice",
      question: "¿Qué ___ (hacer) tú los fines de semana?",
      instruction: "Выберите неправильную форму hacer для tú",
      options: ["haces", "hago", "hace", "hacéis"],
      answer: "haces",
      explanation: "Tú → haces. Hacer неправильный: yo hago, tú haces, él hace.",
    },
  ],

  // ===== Chapter 3: artículos ======================================
  "chapter-3-biblioteca": [
    {
      type: "multiple_choice",
      question: "___ libro está en la mesa.",
      instruction: "Выберите определённый артикль (м.р., ед.ч.)",
      options: ["El", "La", "Un", "Una"],
      answer: "El",
      explanation: "Libro — м.р., ед.ч., конкретный → el libro.",
    },
    {
      type: "fill_blank",
      question: "Compro ___ pan en la panadería.",
      instruction: "Вставьте артикль (неопределённый не используется с неисчисляемыми)",
      answer: "",
      acceptableAnswers: ["el", ""],
      explanation: "С неисчисляемыми (pan) обычно используется el или нулевой артикль: compro pan.",
    },
    {
      type: "multiple_choice",
      question: "Vivo en ___ casa bonita.",
      instruction: "Выберите неопределённый артикль (ж.р., ед.ч.)",
      options: ["un", "una", "el", "la"],
      answer: "una",
      explanation: "Casa — ж.р., ед.ч., неопределённая → una casa.",
    },
    {
      type: "translation",
      question: "Девочки играют в парке.",
      instruction: "Переведите (мн.ч., ж.р.)",
      answer: "Las niñas juegan en el parque",
      acceptableAnswers: ["las niñas juegan en el parque", "Las niñas juegan en el parque"],
      explanation: "Las niñas (ж.р., мн.ч.) + el parque (м.р.)",
    },
    {
      type: "multiple_choice",
      question: "Bebo ___ agua fría.",
      instruction: "Какой артикль перед agua?",
      options: ["la", "el", "un", "las"],
      answer: "el",
      explanation: "Слова ж.р. на ударное a-/ha- → el: el agua, el águila.",
    },
  ],

  // ===== Chapter 4: números/tiempo =================================
  "chapter-4-numeros-tiempo": [
    {
      type: "fill_blank",
      question: "Tengo ___ años. (25)",
      instruction: "Напишите число прописью",
      answer: "veinticinco",
      acceptableAnswers: ["Veinticinco"],
      explanation: "25 → veinticinco. Числа 21-29 пишутся слитно.",
    },
    {
      type: "multiple_choice",
      question: "¿Qué día es después del lunes?",
      instruction: "Какой день идёт после понедельника?",
      options: ["martes", "miércoles", "domingo", "viernes"],
      answer: "martes",
      explanation: "Понедельник → вторник: lunes → martes.",
    },
    {
      type: "translation",
      question: "Сейчас три часа дня.",
      instruction: "Переведите время на испанский",
      answer: "Son las tres de la tarde",
      acceptableAnswers: ["son las tres", "Son las tres", "son las tres de la tarde"],
      explanation: "С 2:00 → son las + часы. После полудня → de la tarde.",
    },
    {
      type: "multiple_choice",
      question: "El ___ es el primer día de la semana.",
      instruction: "Какой день первый?",
      options: ["lunes", "domingo", "sábado", "viernes"],
      answer: "lunes",
      explanation: "В испанском календаре неделя начинается с lunes (понедельник).",
    },
    {
      type: "fill_blank",
      question: "Hay ___ días en una semana. (7)",
      instruction: "Напишите число прописью",
      answer: "siete",
      acceptableAnswers: ["Siete"],
      explanation: "7 → siete.",
    },
  ],

  // ===== Chapter 5: tener expressions ==============================
  "chapter-5-mercado": [
    {
      type: "fill_blank",
      question: "___ hambre. (Yo, tener)",
      instruction: "Поставьте tener в правильную форму для «я голоден»",
      answer: "Tengo",
      acceptableAnswers: ["tengo"],
      explanation: "Tener hambre = быть голодным. Yo → tengo.",
    },
    {
      type: "multiple_choice",
      question: "¿De qué color es la hierba?",
      instruction: "Выберите цвет травы",
      options: ["verde", "rojo", "azul", "amarillo"],
      answer: "verde",
      explanation: "La hierba es verde (трава зелёная).",
    },
    {
      type: "fill_blank",
      question: "Tienes ___ (suerte) de viajar.",
      instruction: "Какое выражение с tener подходит?",
      answer: "suerte",
      acceptableAnswers: ["Suerte"],
      explanation: "Tener suerte = быть удачливым.",
    },
    {
      type: "translation",
      question: "Мне холодно.",
      instruction: "Используйте выражение с tener",
      answer: "Tengo frío",
      acceptableAnswers: ["tengo frío", "Tengo frio"],
      explanation: "Tener frío = мёрзнуть. Tener + существительное для состояния.",
    },
    {
      type: "multiple_choice",
      question: "¿Cuánto cuesta este libro? — Cuesta ___ euros. (15)",
      instruction: "Выберите правильное число",
      options: ["quince", "cinco", "cincuenta", "diez"],
      answer: "quince",
      explanation: "15 → quince.",
    },
  ],

  // ===== Chapter 6: gustar =========================================
  "chapter-6-cuerpo": [
    {
      type: "multiple_choice",
      question: "Me ___ el café.",
      instruction: "Выберите форму gustar для ед.ч.",
      options: ["gusta", "gustan", "gusto", "gustas"],
      answer: "gusta",
      explanation: "El café (ед.ч.) → gusta. Me gusta el café = мне нравится кофе.",
    },
    {
      type: "fill_blank",
      question: "Me ___ los libros. (gustar, мн.ч.)",
      instruction: "Поставьте gustar для множественного числа",
      answer: "gustan",
      acceptableAnswers: ["Gustan"],
      explanation: "Los libros (мн.ч.) → gustan. Me gustan los libros.",
    },
    {
      type: "multiple_choice",
      question: "Cuando estoy enfermo, voy al ___.",
      instruction: "Куда идут когда болеют?",
      options: ["médico", "profesor", "parque", "banco"],
      answer: "médico",
      explanation: "El médico = врач. Voy al médico cuando estoy enfermo.",
    },
    {
      type: "translation",
      question: "Мне нравится испанский.",
      instruction: "Используйте gustar",
      answer: "Me gusta el español",
      acceptableAnswers: ["me gusta el español"],
      explanation: "El español (ед.ч.) → me gusta.",
    },
    {
      type: "fill_blank",
      question: "Me duele la ___ (голова).",
      instruction: "Какое слово означает «голова»?",
      answer: "cabeza",
      acceptableAnswers: ["Cabeza"],
      explanation: "La cabeza = голова. Me duele la cabeza = у меня болит голова.",
    },
  ],

  // ===== Chapter 18: género y número ==============================
  "chapter-18-genero-numero": [
    {
      type: "multiple_choice",
      question: "___ casa es grande. (артикль)",
      instruction: "Выберите артикль для casa",
      options: ["La", "El", "Los", "Unos"],
      answer: "La",
      explanation: "Casa — женский род → la casa.",
    },
    {
      type: "fill_blank",
      question: "Los ___ (libro, мн.ч.)",
      instruction: "Поставьте существительное во множественное число",
      answer: "libros",
      acceptableAnswers: ["Libros"],
      explanation: "libro → libros (−o → −os).",
    },
    {
      type: "error_correction",
      question: "El mesa es roja.",
      instruction: "Исправьте род артикля",
      answer: "La mesa es roja.",
      acceptableAnswers: ["la mesa es roja"],
      explanation: "Mesa — женский род → la mesa.",
    },
    {
      type: "translation",
      question: "Белые дома",
      instruction: "Согласуйте род и число",
      answer: "Las casas blancas",
      acceptableAnswers: ["las casas blancas"],
      explanation: "casa (ж.р. мн.) → las casas blancas.",
    },
  ],

  // ===== Chapter 19: preposiciones de lugar =======================
  "chapter-19-preposiciones": [
    {
      type: "multiple_choice",
      question: "El libro está ___ la mesa.",
      instruction: "Выберите предлог места",
      options: ["en", "a", "de", "por"],
      answer: "en",
      explanation: "en = в/на (местонахождение).",
    },
    {
      type: "fill_blank",
      question: "Voy ___ Madrid.",
      instruction: "Предлог направления",
      answer: "a",
      acceptableAnswers: ["A"],
      explanation: "a + город = направление: voy a Madrid.",
    },
    {
      type: "multiple_choice",
      question: "El gato está ___ el sofá.",
      instruction: "«под»",
      options: ["debajo de", "encima de", "delante de", "entre"],
      answer: "debajo de",
      explanation: "debajo de = под.",
    },
    {
      type: "translation",
      question: "Ключи на столе.",
      instruction: "Используйте en",
      answer: "Las llaves están en la mesa",
      acceptableAnswers: ["las llaves están en la mesa", "Las llaves estan en la mesa"],
      explanation: "estar en = находиться на/в.",
    },
  ],

  // ===== Chapter 20: preguntas ====================================
  "chapter-20-preguntas": [
    {
      type: "multiple_choice",
      question: "___ te llamas?",
      instruction: "Как тебя зовут?",
      options: ["Cómo", "Qué", "Quién", "Dónde"],
      answer: "Cómo",
      explanation: "¿Cómo te llamas? = Как тебя зовут?",
    },
    {
      type: "fill_blank",
      question: "¿___ vives? (где)",
      instruction: "Вопросительное слово",
      answer: "Dónde",
      acceptableAnswers: ["dónde", "Donde", "donde"],
      explanation: "¿Dónde? = где?",
    },
    {
      type: "multiple_choice",
      question: "¿___ es tu profesor?",
      instruction: "Кто?",
      options: ["Quién", "Qué", "Cuándo", "Cuál"],
      answer: "Quién",
      explanation: "¿Quién? = кто?",
    },
    {
      type: "translation",
      question: "Почему ты изучаешь испанский?",
      instruction: "Используйте ¿por qué?",
      answer: "¿Por qué estudias español?",
      acceptableAnswers: ["por qué estudias español", "¿Por que estudias español?"],
      explanation: "¿Por qué? = почему?",
    },
  ],

  // ===== Chapter 21: comparativos =================================
  "chapter-21-comparativos": [
    {
      type: "multiple_choice",
      question: "Madrid es ___ grande ___ Toledo.",
      instruction: "Сравнение «больше чем»",
      options: ["más / que", "más / de", "tan / que", "muy / que"],
      answer: "más / que",
      explanation: "más + прилагательное + que.",
    },
    {
      type: "fill_blank",
      question: "Ana es ___ alta ___ María. (такая же)",
      instruction: "Равная степень",
      answer: "tan",
      acceptableAnswers: ["Tan"],
      explanation: "tan + adj + como = такая же… как.",
    },
    {
      type: "translation",
      question: "Это самый большой город.",
      instruction: "Превосходная степень",
      answer: "Es la ciudad más grande",
      acceptableAnswers: ["es la ciudad más grande", "Es el ciudad más grande"],
      explanation: "el/la más + adj.",
    },
    {
      type: "error_correction",
      question: "Juan es más alto de Pedro.",
      instruction: "Исправьте предлог сравнения",
      answer: "Juan es más alto que Pedro.",
      acceptableAnswers: ["juan es más alto que pedro"],
      explanation: "Сравнение с que, не de (кроме чисел).",
    },
  ],

  // ===== Chapter 22: futuro simple ================================
  "chapter-22-futuro": [
    {
      type: "fill_blank",
      question: "Mañana ___ (hablar) con ella. (yo)",
      instruction: "Futuro simple",
      answer: "hablaré",
      acceptableAnswers: ["Hablare", "hablaré"],
      explanation: "yo → infinitivo + é: hablaré.",
    },
    {
      type: "multiple_choice",
      question: "Ellos ___ mañana.",
      instruction: "venir в будущем",
      options: ["vendrán", "vienen", "vinieron", "venían"],
      answer: "vendrán",
      explanation: "venir → vendrán (неправильный корень).",
    },
    {
      type: "translation",
      question: "Мы поедем в Испанию.",
      instruction: "Futuro de ir",
      answer: "Iremos a España",
      acceptableAnswers: ["iremos a españa", "Nosotros iremos a España"],
      explanation: "ir → iremos.",
    },
    {
      type: "multiple_choice",
      question: "¿Qué ___ tú el próximo año?",
      instruction: "hacer в будущем",
      options: ["harás", "haces", "hiciste", "hacías"],
      answer: "harás",
      explanation: "hacer → harás.",
    },
  ],

  // ===== Chapter 7: pretérito perfecto ============================
  "chapter-7-pasado-perfecto": [
    {
      type: "fill_blank",
      question: "Hoy ___ (comer) pizza. (yo)",
      instruction: "Поставьте в pretérito perfecto",
      answer: "he comido",
      acceptableAnswers: ["He comido"],
      explanation: "haber (he) + comido. Pretérito perfecto для сегодняшнего действия.",
    },
    {
      type: "multiple_choice",
      question: "¿Has ___ en España? (estar)",
      instruction: "Выберите participio для estar",
      options: ["estado", "estando", "esté", "estuvo"],
      answer: "estado",
      explanation: "Participio estar → estado. ¿Has estado en España?",
    },
    {
      type: "fill_blank",
      question: "Ella ___ (escribir) un correo.",
      instruction: "Поставьте escribir в perfecto",
      answer: "ha escrito",
      acceptableAnswers: ["Ha escrito"],
      explanation: "haber (ha) + escrito. Escribir → escrito (неправильный).",
    },
    {
      type: "translation",
      question: "Я уже поел.",
      instruction: "Используйте pretérito perfecto + ya",
      answer: "Ya he comido",
      acceptableAnswers: ["ya he comido", "He comido ya"],
      explanation: "Ya + haber + participio. Ya he comido.",
    },
    {
      type: "multiple_choice",
      question: "Hoy hemos ___ mucho.",
      instruction: "Выберите participio для trabajar",
      options: ["trabajado", "trabajando", "trabajo", "trabajé"],
      answer: "trabajado",
      explanation: "Trabajar → trabajado. Hemos trabajado = мы поработали.",
    },
  ],

  // ===== Chapter 8: pretérito indefinido ==========================
  "chapter-8-pasado-indefinido": [
    {
      type: "fill_blank",
      question: "Ayer ___ (ir) al cine. (yo)",
      instruction: "Поставьте ir в indefinido",
      answer: "fui",
      acceptableAnswers: ["Fui"],
      explanation: "Ir → fui (indefinido, yo). Полностью неправильный.",
    },
    {
      type: "multiple_choice",
      question: "El año pasado ___ en Barcelona. (vivir, yo)",
      instruction: "Выберите форму vivir в indefinido",
      options: ["viví", "vivía", "he vivido", "vivo"],
      answer: "viví",
      explanation: "Vivir в indefinido, yo → viví. «В прошлом году» = конкретный момент.",
    },
    {
      type: "translation",
      question: "Вчера я купил книгу.",
      instruction: "Используйте pretérito indefinido",
      answer: "Ayer compré un libro",
      acceptableAnswers: ["ayer compré un libro", "Compré un libro ayer"],
      explanation: "Comprar → compré (yo, indefinido). Ayer = маркер indefinido.",
    },
    {
      type: "fill_blank",
      question: "¿___ (tú) al partido ayer? (ir)",
      instruction: "Поставьте вопрос с ir в indefinido",
      answer: "Fuiste",
      acceptableAnswers: ["fuiste"],
      explanation: "Ir → fuiste (tú, indefinido).",
    },
    {
      type: "multiple_choice",
      question: "Hace dos años ellos ___ a Japón.",
      instruction: "Выберите форму",
      options: ["fueron", "iban", "van", "han ido"],
      answer: "fueron",
      explanation: "«Два года назад» = конкретный момент → indefinido: fueron.",
    },
  ],

  // ===== Chapter 9: imperfecto =====================================
  "chapter-9-imperfecto": [
    {
      type: "fill_blank",
      question: "Cuando era niño, ___ (jugar) al fútbol.",
      instruction: "Поставьте jugar в imperfecto",
      answer: "jugaba",
      acceptableAnswers: ["Jugaba"],
      explanation: "Привычное действие в прошлом → imperfecto: jugaba.",
    },
    {
      type: "multiple_choice",
      question: "Hacía sol y los pájaros ___.",
      instruction: "Выберите описание фона в прошлом",
      options: ["cantaban", "cantaron", "han cantado", "cantan"],
      answer: "cantaban",
      explanation: "Описание фона → imperfecto: cantaban.",
    },
    {
      type: "translation",
      question: "Когда я был маленьким, я жил в Москве.",
      instruction: "Используйте imperfecto для описания",
      answer: "Cuando era pequeño, vivía en Moscú",
      acceptableAnswers: ["cuando era pequeño vivía en Moscú", "Cuando era niño vivía en Moscú"],
      explanation: "Описание прошлого → era (ser, imperfecto) + vivía (vivir, imperfecto).",
    },
    {
      type: "fill_blank",
      question: "Todos los días ___ (comer) a las dos.",
      instruction: "Привычка в прошлом — какое время?",
      answer: "comía",
      acceptableAnswers: ["Comía", "comíamos"],
      explanation: "Привычное действие в прошлом → imperfecto: comía.",
    },
    {
      type: "multiple_choice",
      question: "¿Cómo ___ tu abuela?",
      instruction: "Описание внешности в прошлом",
      options: ["era", "fue", "es", "ha sido"],
      answer: "era",
      explanation: "Описание характеристики в прошлом → imperfecto: era.",
    },
  ],

  // ===== Chapter 10: por/para ======================================
  "chapter-10-por-para": [
    {
      type: "multiple_choice",
      question: "Estudio español ___ viajar.",
      instruction: "Выберите предлог цели",
      options: ["para", "por", "en", "de"],
      answer: "para",
      explanation: "Цель → para. Estudio para viajar = учусь чтобы путешествовать.",
    },
    {
      type: "fill_blank",
      question: "Caminamos ___ el parque.",
      instruction: "Какой предлог места/пути?",
      answer: "por",
      acceptableAnswers: ["Por"],
      explanation: "Движение через место → por. Por el parque = по парку.",
    },
    {
      type: "translation",
      question: "Это подарок для тебя.",
      instruction: "Используйте para",
      answer: "Es un regalo para ti",
      acceptableAnswers: ["es un regalo para ti"],
      explanation: "Получатель → para. Regalo para ti = подарок для тебя.",
    },
    {
      type: "multiple_choice",
      question: "Lo compré ___ 10 euros.",
      instruction: "Выберите предлог цены/обмена",
      options: ["por", "para", "con", "de"],
      answer: "por",
      explanation: "Обмен/цена → por. Por 10 euros = за 10 евро.",
    },
    {
      type: "fill_blank",
      question: "___ favor, ayúdame.",
      instruction: "Какое устойчивое выражение?",
      answer: "Por",
      acceptableAnswers: ["por"],
      explanation: "Por favor = пожалуйста. Устойчивое выражение.",
    },
  ],

  // ===== Chapter 11: subjuntivo presente ==========================
  "chapter-11-subjuntivo": [
    {
      type: "fill_blank",
      question: "Quiero que tú ___ (hablar).",
      instruction: "Поставьте hablar в subjuntivo",
      answer: "hables",
      acceptableAnswers: ["Hables"],
      explanation: "Después de «quiero que» → subjuntivo. Hablar → hables (tú).",
    },
    {
      type: "multiple_choice",
      question: "Espero que él ___ pronto.",
      instruction: "Выберите subjuntivo для venir",
      options: ["venga", "viene", "vendrá", "vino"],
      answer: "venga",
      explanation: "После esperar que → subjuntivo. Venir → venga.",
    },
    {
      type: "fill_blank",
      question: "Dudo que ___ (ser) verdad.",
      instruction: "Сомнение → какое наклонение?",
      answer: "sea",
      acceptableAnswers: ["Sea"],
      explanation: "Dudar que → subjuntivo. Ser → sea.",
    },
    {
      type: "translation",
      question: "Я хочу, чтобы ты пришёл.",
      instruction: "Используйте subjuntivo",
      answer: "Quiero que vengas",
      acceptableAnswers: ["quiero que vengas"],
      explanation: "Querer que + subjuntivo. Venir → vengas (tú).",
    },
    {
      type: "multiple_choice",
      question: "Ojalá ___ buen tiempo mañana.",
      instruction: "Выберите форму",
      options: ["haga", "hace", "hará", "hizo"],
      answer: "haga",
      explanation: "Ojalá → siempre subjuntivo. Hacer → haga.",
    },
  ],

  // ===== Chapter 12: imperativo ====================================
  "chapter-12-imperativo": [
    {
      type: "fill_blank",
      question: "¡___ (comer) la fruta! (tú)",
      instruction: "Поставьте в утвердительное повелительное (tú)",
      answer: "Come",
      acceptableAnswers: ["come"],
      explanation: "Tú afirmativo: comer → come.",
    },
    {
      type: "multiple_choice",
      question: "¡No ___ eso! (tú, decir)",
      instruction: "Выберите отрицательное повелительное",
      options: ["digas", "di", "dices", "dijiste"],
      answer: "digas",
      explanation: "Отрицательное → subjuntivo: decir → no digas.",
    },
    {
      type: "translation",
      question: "Скажи мне правду! (tú)",
      instruction: "Используйте утвердительное повелительное",
      answer: "¡Dime la verdad!",
      acceptableAnswers: ["dime la verdad", "¡Dime la verdad!"],
      explanation: "Decir → di + me = dime. Di + me = dime.",
    },
    {
      type: "fill_blank",
      question: "¡___ (hacer) los deberes! (tú)",
      instruction: "Утвердительное повелительное от hacer",
      answer: "Haz",
      acceptableAnswers: ["haz"],
      explanation: "Hacer → haz (tú, imperativo). Неправильная форма.",
    },
    {
      type: "multiple_choice",
      question: "¡___ usted, por favor! (sentarse)",
      instruction: "Вежливое повелительное для usted",
      options: ["siéntese", "siéntate", "sienta", "sentarse"],
      answer: "siéntese",
      explanation: "Usted → subjuntivo: sentarse → siéntese.",
    },
  ],

  // ===== Chapter 13: condicional ===================================
  "chapter-13-condicional": [
    {
      type: "fill_blank",
      question: "Me ___ (gustar) un café. (вежливо)",
      instruction: "Поставьте в condicional для вежливости",
      answer: "gustaría",
      acceptableAnswers: ["Gustaría"],
      explanation: "Condicional для вежливости: gustar → gustaría.",
    },
    {
      type: "multiple_choice",
      question: "Si tuviera dinero, ___ un coche.",
      instruction: "Выберите condicional",
      options: ["compraría", "compro", "compré", "compra"],
      answer: "compraría",
      explanation: "Si + subjuntivo + condicional: compraría.",
    },
    {
      type: "translation",
      question: "Я бы хотел путешествовать.",
      instruction: "Используйте condicional",
      answer: "Me gustaría viajar",
      acceptableAnswers: ["me gustaría viajar"],
      explanation: "Gustar → gustaría. Me gustaría = мне бы хотелось.",
    },
    {
      type: "fill_blank",
      question: "¿Podría ___ (ayudar)me?",
      instruction: "Вежливая просьба через condicional",
      answer: "ayudar",
      acceptableAnswers: ["ayudar"],
      explanation: "Podría + infinitivo. ¿Podría ayudarme? = Не могли бы вы помочь?",
    },
    {
      type: "multiple_choice",
      question: "Yo que tú, lo ___ diferente.",
      instruction: "Совет — какое наклонение?",
      options: ["haría", "hago", "hice", "haga"],
      answer: "haría",
      explanation: "«На твоём месте» → condicional: haría.",
    },
  ],

  // ===== Chapters 14-17 (advanced) — simplified ====================
  "chapter-14-estilo-indirecto": [
    {
      type: "multiple_choice",
      question: "Él dijo que ___ cansado.",
      instruction: "Косвенная речь — выберите время",
      options: ["estaba", "está", "estará", "esté"],
      answer: "estaba",
      explanation: "После dijo (прошедшее) presente → imperfecto: está → estaba.",
    },
    {
      type: "fill_blank",
      question: "María dice que ___ (venir) mañana.",
      instruction: "Косвенная речь после presente",
      answer: "vendrá",
      acceptableAnswers: ["vendrá", "viene"],
      explanation: "После dice (presente) время не меняется: viene / vendrá.",
    },
    {
      type: "translation",
      question: "Он сказал, что придёт завтра.",
      instruction: "Косвенная речь в прошедшем",
      answer: "Dijo que vendría mañana",
      acceptableAnswers: ["dijo que vendría mañana", "Dijo que iba a venir mañana"],
      explanation: "Futuro → condicional в косвенной речи: vendrá → vendría.",
    },
    {
      type: "fill_blank",
      question: "Me preguntó ___ estaba cansado.",
      instruction: "Какое слово для косвенного вопроса?",
      answer: "si",
      acceptableAnswers: ["Si"],
      explanation: "Косвенный вопрос «ли» → si. Me preguntó si... = Он спросил, ... ли.",
    },
    {
      type: "multiple_choice",
      question: "Dijo: \"Hoy llego tarde.\" → Dijo que ___ tarde.",
      instruction: "Преобразуйте в косвенную речь",
      options: ["llegaba", "llega", "llegará", "llegue"],
      answer: "llegaba",
      explanation: "Presente → imperfecto в косвенной (после прошедшего): llego → llegaba.",
    },
  ],

  "chapter-15-voz-pasiva": [
    {
      type: "multiple_choice",
      question: "El libro ___ escrito por Cervantes.",
      instruction: "Выберите форму пассива",
      options: ["fue", "es", "está", "fue siendo"],
      answer: "fue",
      explanation: "Ser + participio: fue escrito. Прошедшее → fue.",
    },
    {
      type: "fill_blank",
      question: "___ habla español aquí. (пассив с se)",
      instruction: "Какая конструкция для «здесь говорят»?",
      answer: "Se",
      acceptableAnswers: ["se"],
      explanation: "Pasiva refleja: se habla = «говорят» (без указания кем).",
    },
    {
      type: "translation",
      question: "Письмо отправлено.",
      instruction: "Используйте ser + participio",
      answer: "La carta es enviada",
      acceptableAnswers: ["la carta es enviada", "La carta ha sido enviada"],
      explanation: "Ser + participio: es enviada.",
    },
    {
      type: "multiple_choice",
      question: "Se ___ coches en esta fábrica.",
      instruction: "Выберите форму pasiva refleja",
      options: ["venden", "vende", "vendieron", "vendían"],
      answer: "venden",
      explanation: "Pasiva refleje с мн.ч.: se venden coches = «продаются машины».",
    },
    {
      type: "fill_blank",
      question: "El museo ___ (construir) en 1990.",
      instruction: "Пассив в прошедшем",
      answer: "fue construido",
      acceptableAnswers: ["Fue construido"],
      explanation: "Ser (fue) + participio (construido).",
    },
  ],

  "chapter-16-perifrasis": [
    {
      type: "fill_blank",
      question: "Voy ___ (estudiar) español.",
      instruction: "Какая перифраза для ближайшего будущего?",
      answer: "a estudiar",
      acceptableAnswers: ["a estudiar"],
      explanation: "Ir a + infinitivo = собираться сделать. Voy a estudiar.",
    },
    {
      type: "multiple_choice",
      question: "Tengo que ___ más.",
      instruction: "Какая перифраза долженствования?",
      options: ["estudiar", "estudiando", "estudié", "estudio"],
      answer: "estudiar",
      explanation: "Tener que + infinitivo = должен. Tengo que estudiar.",
    },
    {
      type: "translation",
      question: "Я только что пришёл.",
      instruction: "Используйте acabar de",
      answer: "Acabo de llegar",
      acceptableAnswers: ["acabo de llegar"],
      explanation: "Acabar de + infinitivo = только что. Acabo de llegar.",
    },
    {
      type: "fill_blank",
      question: "Sigo ___ (aprender) cada día.",
      instruction: "Перифраза продолжения",
      answer: "aprendiendo",
      acceptableAnswers: ["Aprendiendo"],
      explanation: "Seguir + gerundio = продолжать. Sigo aprendiendo.",
    },
    {
      type: "multiple_choice",
      question: "Llevo ___ dos horas.",
      instruction: "Выберите форму для длительности",
      options: ["estudiando", "estudiar", "estudié", "estudio"],
      answer: "estudiando",
      explanation: "Llevar + gerundio = длительность. Llevo estudiando dos horas.",
    },
  ],

  "chapter-17-dele": [
    {
      type: "multiple_choice",
      question: "Si ___ estudiado, habría aprobado.",
      instruction: "Выберите pluscuamperfecto subjuntivo",
      options: ["hubiera", "he", "había", "habría"],
      answer: "hubiera",
      explanation: "Si + pluscuamperfecto subjuntivo + condicional compuesto: hubiera.",
    },
    {
      type: "fill_blank",
      question: "Por mucho que ___, no lo conseguiré. (intentar)",
      instruction: "Concessive clause — какое наклонение?",
      answer: "intente",
      acceptableAnswers: ["Intente"],
      explanation: "Por mucho que + subjuntivo: intente (гипотетично).",
    },
    {
      type: "translation",
      question: "Как бы то ни было, я поеду.",
      instruction: "Используйте subjuntivo",
      answer: "Sea como sea, iré",
      acceptableAnswers: ["sea como sea iré", "Sea como sea, voy a ir"],
      explanation: "Sea como sea = как бы то ни было. Устойчивое выражение с subjuntivo.",
    },
    {
      type: "fill_blank",
      question: "Estoy cansado de ___ (esperar).",
      instruction: "Перифраза состояния",
      answer: "esperar",
      acceptableAnswers: ["esperar"],
      explanation: "Estar cansado de + infinitivo = устать от чего-то.",
    },
    {
      type: "multiple_choice",
      question: "No creo que ___ razón.",
      instruction: "Отрицание мнения — какое наклонение?",
      options: ["tenga", "tiene", "tendrá", "tenía"],
      answer: "tenga",
      explanation: "No creer que → subjuntivo: tenga.",
    },
  ],
};

/** Get exercises for a chapter slug (ids assigned, bank expanded). */
export function getChapterExercises(chapterSlug: string): StaticExercise[] {
  const curated = CHAPTER_EXERCISES[chapterSlug] ?? [];
  const expanded = expandSpanishChapterBank(chapterSlug, curated);
  return withExerciseIds("spanish", chapterSlug, expanded);
}
