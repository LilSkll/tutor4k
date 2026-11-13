/**
 * UI-language titles and summaries for DaF chapter cards.
 * German chapter source fields stay on Chapter; this map is the
 * explanation language (ru / en / es / de).
 */
export const GERMAN_CHAPTER_LOCALE: Record<
  string,
  Partial<Record<"ru" | "en" | "es" | "de", { title: string; summary: string }>>
> = {
  "de-ch1-alphabet-greetings": {
    ru: {
      title: "Алфавит и приветствия",
      summary:
        "Немецкий алфавит, звуки ä/ö/ü/ß, приветствие и прощание, вежливое Sie и разговорное du.",
    },
    en: {
      title: "Alphabet and greetings",
      summary:
        "German alphabet, key sounds (ä/ö/ü/ß), hello and goodbye, formal Sie vs informal du.",
    },
    es: {
      title: "Alfabeto y saludos",
      summary:
        "Alfabeto alemán, sonidos ä/ö/ü/ß, hola y adiós, Sie formal frente a du informal.",
    },
    de: {
      title: "Alphabet und Begrüßungen",
      summary:
        "Deutsches Alphabet, Laute ä/ö/ü/ß, Hallo und Tschüss, höfliches Sie und lockeres du.",
    },
  },
  "de-ch2-sein-haben": {
    ru: {
      title: "Ich bin — ich habe",
      summary:
        "Личные местоимения; sein и haben в настоящем: кто вы и что у вас есть.",
    },
    en: {
      title: "I am — I have",
      summary:
        "Personal pronouns; sein and haben in the present: who you are and what you have.",
    },
    es: {
      title: "Yo soy — yo tengo",
      summary:
        "Pronombres personales; sein y haben en presente: quién eres y qué tienes.",
    },
    de: {
      title: "Ich bin — ich habe",
      summary:
        "Personalpronomen; sein und haben im Präsens: wer man ist und was man hat.",
    },
  },
  "de-ch3-articles-gender": {
    ru: {
      title: "Der, die, das",
      summary:
        "Грамматический род; определённый и неопределённый артикль в номинативе.",
    },
    en: {
      title: "Der, die, das",
      summary:
        "Grammatical gender; definite and indefinite articles in the nominative.",
    },
    es: {
      title: "Der, die, das",
      summary:
        "Género gramatical; artículos definido e indefinido en nominativo.",
    },
    de: {
      title: "Der, die, das",
      summary:
        "Genus; bestimmter und unbestimmter Artikel im Nominativ.",
    },
  },
  "de-ch4-praesens": {
    ru: {
      title: "Что ты делаешь?",
      summary:
        "Präsens: слабые глаголы, чередование гласной, gehen, fahren, essen.",
    },
    en: {
      title: "What are you doing?",
      summary:
        "Present tense: regular verbs, stem-changing verbs, gehen, fahren, essen.",
    },
    es: {
      title: "¿Qué haces?",
      summary:
        "Präsens: verbos regulares, cambio de raíz, gehen, fahren, essen.",
    },
    de: {
      title: "Was machst du?",
      summary:
        "Präsens: regelmäßige Verben, Vokalwechsel, gehen, fahren, essen.",
    },
  },
  "de-ch5-akkusativ": {
    ru: {
      title: "Кого или что?",
      summary:
        "Аккузатив: den/einen, die/eine, das/ein; прямое дополнение после haben, sehen, kaufen.",
    },
    en: {
      title: "Whom or what?",
      summary:
        "Accusative: den/einen, die/eine, das/ein; direct objects after haben, sehen, kaufen.",
    },
    es: {
      title: "¿A quién o qué?",
      summary:
        "Acusativo: den/einen, die/eine, das/ein; objeto directo tras haben, sehen, kaufen.",
    },
    de: {
      title: "Wen oder was?",
      summary:
        "Akkusativ: den/einen, die/eine, das/ein; direktes Objekt nach haben, sehen, kaufen.",
    },
  },
  "de-ch6-questions-v2": {
    ru: {
      title: "Как задать вопрос",
      summary:
        "Вопросы да/нет и W-вопросы; глагол на втором месте (V2) в главном предложении.",
    },
    en: {
      title: "Asking questions",
      summary:
        "Yes/no and W-questions; verb-second (V2) word order in main clauses.",
    },
    es: {
      title: "Hacer preguntas",
      summary:
        "Preguntas de sí/no y con W; verbo en segunda posición (V2) en la oración principal.",
    },
    de: {
      title: "Fragen stellen",
      summary:
        "Ja/nein-Fragen und W-Fragen; Verbzweitstellung (V2) im Hauptsatz.",
    },
  },
  "de-ch7-possessives-plurals": {
    ru: {
      title: "Мой, твой, наш",
      summary:
        "Притяжательные местоимения и основные способы образования множественного числа.",
    },
    en: {
      title: "My, your, our",
      summary: "Possessive determiners and the main patterns of noun plurals.",
    },
    es: {
      title: "Mi, tu, nuestro",
      summary:
        "Posesivos y los modelos básicos del plural de los sustantivos.",
    },
    de: {
      title: "Mein, deine, unsere",
      summary:
        "Possessivartikel und die wichtigsten Pluralformen der Nomen.",
    },
  },
  "de-ch8-modals": {
    ru: {
      title: "Мочь и должен",
      summary:
        "Модальные können, müssen, wollen, dürfen, sollen, mögen: инфинитив в конце фразы.",
    },
    en: {
      title: "Can and must",
      summary:
        "Modal verbs können, müssen, wollen, dürfen, sollen, mögen; infinitive at the end.",
    },
    es: {
      title: "Poder y deber",
      summary:
        "Verbos modales können, müssen, wollen, dürfen, sollen, mögen; infinitivo al final.",
    },
    de: {
      title: "Können und müssen",
      summary:
        "Modalverben können, müssen, wollen, dürfen, sollen, mögen; Infinitiv am Satzende.",
    },
  },
  "de-ch9-separable": {
    ru: {
      title: "Вставать и приезжать",
      summary:
        "Отделяемые приставки: в главном предложении приставка уходит в конец.",
    },
    en: {
      title: "Getting up and arriving",
      summary:
        "Separable-prefix verbs: the particle goes to the end of a main clause.",
    },
    es: {
      title: "Levantarse y llegar",
      summary:
        "Verbos separables: la partícula va al final de la oración principal.",
    },
    de: {
      title: "Aufstehen und ankommen",
      summary:
        "Trennbare Verben: die Partikel steht am Ende des Hauptsatzes.",
    },
  },
  "de-ch10-negation-time": {
    ru: {
      title: "Время и быт",
      summary:
        "Числа, часы, даты; отрицание nicht и kein; базовые предлоги времени.",
    },
    en: {
      title: "Time and everyday life",
      summary:
        "Numbers, clock time, dates; negation with nicht and kein; basic time prepositions.",
    },
    es: {
      title: "Tiempo y vida cotidiana",
      summary:
        "Números, la hora, fechas; negación con nicht y kein; preposiciones básicas de tiempo.",
    },
    de: {
      title: "Zeit und Alltag",
      summary:
        "Zahlen, Uhrzeit, Datum; Verneinung mit nicht und kein; zeitliche Präpositionen.",
    },
  },
  "de-ch11-dativ": {
    ru: {
      title: "Кому?",
      summary:
        "Датив: dem/einem, der/einer; глаголы helfen, danken, gehören и предлоги с Dativ.",
    },
    en: {
      title: "To whom?",
      summary:
        "Dative: dem/einem, der/einer; helfen, danken, gehören and dative prepositions.",
    },
    es: {
      title: "¿A quién?",
      summary:
        "Dativo: dem/einem, der/einer; helfen, danken, gehören y preposiciones de dativo.",
    },
    de: {
      title: "Wem?",
      summary:
        "Dativ: dem/einem, der/einer; helfen, danken, gehören und Dativpräpositionen.",
    },
  },
  "de-ch12-wechsel": {
    ru: {
      title: "В город — в городе",
      summary:
        "Предлоги двух падежей: аккузатив на вопрос «куда», датив на вопрос «где».",
    },
    en: {
      title: "Into town — in town",
      summary:
        "Two-way prepositions: accusative for direction, dative for location.",
    },
    es: {
      title: "A la ciudad — en la ciudad",
      summary:
        "Preposiciones de doble régimen: acusativo para la dirección, dativo para el lugar.",
    },
    de: {
      title: "In die Stadt — in der Stadt",
      summary:
        "Wechselpräpositionen: Akkusativ auf wohin, Dativ auf wo.",
    },
  },
  "de-ch13-perfekt": {
    ru: {
      title: "Что ты сделал?",
      summary:
        "Perfekt с haben и sein; Partizip II слабых, сильных и приставочных глаголов.",
    },
    en: {
      title: "What have you done?",
      summary:
        "Perfekt with haben or sein; past participles of weak, strong, and prefix verbs.",
    },
    es: {
      title: "¿Qué has hecho?",
      summary:
        "Perfekt con haben o sein; participios de verbos débiles, fuertes y con prefijo.",
    },
    de: {
      title: "Was hast du gemacht?",
      summary:
        "Perfekt mit haben oder sein; Partizip II schwacher, starker und präfigierter Verben.",
    },
  },
  "de-ch14-praeteritum": {
    ru: {
      title: "Раньше было…",
      summary:
        "Präteritum глаголов sein, haben и модальных; прошедшее в коротком рассказе.",
    },
    en: {
      title: "It used to be…",
      summary:
        "Präteritum of sein, haben, and the common modals; narrative past in short texts.",
    },
    es: {
      title: "Antes era…",
      summary:
        "Präteritum de sein, haben y los modales habituales; pasado narrativo en textos breves.",
    },
    de: {
      title: "Früher war …",
      summary:
        "Präteritum von sein, haben und den Modalverben; Erzählvergangenheit in kurzen Texten.",
    },
  },
  "de-ch15-reflexive": {
    ru: {
      title: "Радоваться",
      summary:
        "Возвратные глаголы: sich в аккузативе и дативе, быт и чувства.",
    },
    en: {
      title: "Being glad",
      summary:
        "Reflexive verbs with accusative and dative pronouns; daily care and feelings.",
    },
    es: {
      title: "Alegrarse",
      summary:
        "Verbos reflexivos con pronombre en acusativo y dativo; cuidado diario y sentimientos.",
    },
    de: {
      title: "Sich freuen",
      summary:
        "Reflexive Verben mit Akkusativ und Dativ; Alltag und Gefühle.",
    },
  },
  "de-ch16-imperative-comp": {
    ru: {
      title: "Сделай это!",
      summary:
        "Императив du/ihr/Sie и степени сравнения прилагательных.",
    },
    en: {
      title: "Do that!",
      summary:
        "Imperative for du, ihr, and Sie; comparative and superlative of adjectives.",
    },
    es: {
      title: "¡Haz eso!",
      summary:
        "Imperativo de du, ihr y Sie; comparativo y superlativo de los adjetivos.",
    },
    de: {
      title: "Mach das!",
      summary:
        "Imperativ für du, ihr und Sie; Komparativ und Superlativ der Adjektive.",
    },
  },
  "de-ch17-adj-declension": {
    ru: {
      title: "Хороший день",
      summary:
        "Первый обзор окончаний прилагательных: после der, после ein и без артикля.",
    },
    en: {
      title: "A beautiful day",
      summary:
        "A first overview of adjective endings after der, after ein, and with no article.",
    },
    es: {
      title: "Un día bonito",
      summary:
        "Primera visión de las terminaciones del adjetivo: tras der, tras ein y sin artículo.",
    },
    de: {
      title: "Ein schöner Tag",
      summary:
        "Adjektivendungen im Überblick: nach der, nach ein und ohne Artikel.",
    },
  },
  "de-ch18-subordinates": {
    ru: {
      title: "Weil и dass",
      summary:
        "Придаточные с weil, dass, wenn: глагол в конце; инфинитив с zu.",
    },
    en: {
      title: "Because and that",
      summary:
        "Subordinate clauses with weil, dass, wenn; verb-final order; zu + infinitive.",
    },
    es: {
      title: "Weil y dass",
      summary:
        "Oraciones subordinadas con weil, dass, wenn; verbo al final; infinitivo con zu.",
    },
    de: {
      title: "Weil und dass",
      summary:
        "Nebensätze mit weil, dass, wenn; Verb am Ende; Infinitiv mit zu.",
    },
  },
  "de-ch19-case-system": {
    ru: {
      title: "Система падежей",
      summary:
        "Номинатив, аккузатив, датив и генитив: артикли и местоимения в одной системе.",
    },
    en: {
      title: "The case system",
      summary:
        "Nominative, accusative, dative, and genitive: articles and pronouns in one system.",
    },
    es: {
      title: "El sistema de casos",
      summary:
        "Nominativo, acusativo, dativo y genitivo: artículos y pronombres en un solo sistema.",
    },
    de: {
      title: "Fälle im Überblick",
      summary:
        "Nominativ, Akkusativ, Dativ, Genitiv: Artikel und Pronomen in einem System.",
    },
  },
  "de-ch20-adj-endings": {
    ru: {
      title: "Окончания прилагательных",
      summary:
        "Слабое, смешанное и сильное склонение прилагательных во всех основных падежах.",
    },
    en: {
      title: "Adjective endings",
      summary:
        "Adjective declension after a definite article, an indefinite article, and no article.",
    },
    es: {
      title: "Terminaciones del adjetivo",
      summary:
        "Declinación del adjetivo con artículo definido, indefinido y sin artículo.",
    },
    de: {
      title: "Adjektivendungen",
      summary:
        "Schwache, gemischte und starke Adjektivdeklination in den vier Fällen.",
    },
  },
  "de-ch21-relative": {
    ru: {
      title: "Человек, который…",
      summary:
        "Относительные придаточные: der/die/das и падеж относительного местоимения.",
    },
    en: {
      title: "The man who…",
      summary:
        "Relative clauses with der/die/das and case agreement of the relative pronoun.",
    },
    es: {
      title: "El hombre que…",
      summary:
        "Oraciones de relativo con der/die/das y el caso del pronombre relativo.",
    },
    de: {
      title: "Der Mann, der …",
      summary:
        "Relativsätze mit der/die/das; Kasus des Relativpronomens nach seiner Rolle.",
    },
  },
  "de-ch22-pluperfect-futur": {
    ru: {
      title: "До и после",
      summary:
        "Plusquamperfekt для более раннего прошлого; Futur I с werden для плана и прогноза.",
    },
    en: {
      title: "Before and after",
      summary:
        "Plusquamperfekt for an earlier past; Futur I with werden for plans and predictions.",
    },
    es: {
      title: "Antes y después",
      summary:
        "Plusquamperfekt para un pasado anterior; Futur I con werden para planes y predicciones.",
    },
    de: {
      title: "Bevor und danach",
      summary:
        "Plusquamperfekt für die Vorvergangenheit; Futur I mit werden für Plan und Prognose.",
    },
  },
  "de-ch23-passive": {
    ru: {
      title: "Это делается",
      summary:
        "Пассив процесса: werden + Partizip II в настоящем и в Perfekt (worden).",
    },
    en: {
      title: "It is being done",
      summary:
        "Process passive with werden + Partizip II; present and Perfekt passive (worden).",
    },
    es: {
      title: "Se está haciendo",
      summary:
        "Pasiva de proceso: werden + Partizip II; presente y Perfekt de la pasiva (worden).",
    },
    de: {
      title: "Es wird gemacht",
      summary:
        "Vorgangspassiv mit werden + Partizip II; Präsens und Perfekt (worden).",
    },
  },
  "de-ch24-konjunktiv-ii": {
    ru: {
      title: "Если бы я мог…",
      summary:
        "Konjunktiv II: вежливая просьба, желание и нереальное условие с wenn.",
    },
    en: {
      title: "If I could…",
      summary:
        "Konjunktiv II for polite requests, wishes, and unreal conditions with wenn.",
    },
    es: {
      title: "Si pudiera…",
      summary:
        "Konjunktiv II: peticiones corteses, deseos y condiciones irreales con wenn.",
    },
    de: {
      title: "Wenn ich könnte …",
      summary:
        "Konjunktiv II: höfliche Bitten, Wünsche und irreale Bedingungen mit wenn.",
    },
  },
  "de-ch25-connectors": {
    ru: {
      title: "Сложные предложения",
      summary:
        "Союзы obwohl, damit, während, bevor и три типа связок: порядок слов меняется вместе с ними.",
    },
    en: {
      title: "Complex sentences",
      summary:
        "Connectors such as obwohl, damit, während, bevor; three linker types and their word order.",
    },
    es: {
      title: "Oraciones complejas",
      summary:
        "Conectores obwohl, damit, während, bevor; tres tipos de nexo y su orden de palabras.",
    },
    de: {
      title: "Komplexe Sätze",
      summary:
        "Konnektoren obwohl, damit, während, bevor; drei Verbindungstypen und ihre Wortstellung.",
    },
  },
  "de-ch26-verb-prep": {
    ru: {
      title: "Ждать чего-то",
      summary:
        "Глагол с фиксированным предлогом, da-/wo-; косвенный вопрос с ob и W-словом.",
    },
    en: {
      title: "Waiting for…",
      summary:
        "Verb–preposition patterns and da-/wo- compounds; indirect questions with ob and W-words.",
    },
    es: {
      title: "Esperar a…",
      summary:
        "Verbo con preposición fija y compuestos da-/wo-; preguntas indirectas con ob y partículas W.",
    },
    de: {
      title: "Warten auf …",
      summary:
        "Verben mit fester Präposition, da-/wo-; indirekte Fragen mit ob und W-Wort.",
    },
  },
  "de-ch27-advanced-passive": {
    ru: {
      title: "Пассив шире",
      summary:
        "Пассив с модальным глаголом, пассив состояния (sein + Partizip II) и безличное es wird.",
    },
    en: {
      title: "Extended passive",
      summary:
        "Passive with modal verbs, Zustandspassiv with sein, and impersonal es wird…",
    },
    es: {
      title: "Pasiva ampliada",
      summary:
        "Pasiva con verbos modales, pasiva de estado (sein + participio) y el impersonal es wird…",
    },
    de: {
      title: "Passiv erweitert",
      summary:
        "Passiv mit Modalverb, Zustandspassiv mit sein und unpersönliches es wird …",
    },
  },
  "de-ch28-konjunktiv-reported": {
    ru: {
      title: "Говорят, что он…",
      summary:
        "Konjunktiv I в косвенной речи и замена на Konjunktiv II, когда формы совпадают.",
    },
    en: {
      title: "They say he is…",
      summary:
        "Konjunktiv I for reported speech, and Konjunktiv II when the form matches the indicative.",
    },
    es: {
      title: "Dicen que es…",
      summary:
        "Konjunktiv I en el estilo indirecto y Konjunktiv II cuando la forma coincide con el indicativo.",
    },
    de: {
      title: "Man sagt, er sei …",
      summary:
        "Konjunktiv I in der indirekten Rede; Konjunktiv II, wenn die Form mit dem Indikativ zusammenfällt.",
    },
  },
  "de-ch29-participial": {
    ru: {
      title: "Причастные обороты",
      summary:
        "Распространённое определение с Partizip I и II; сжатая замена относительного придаточного.",
    },
    en: {
      title: "Participial constructions",
      summary:
        "Extended attributive participles and denser relative structures in written German.",
    },
    es: {
      title: "Construcciones de participio",
      summary:
        "Participios atributivos extendidos y relativas más densas en el alemán escrito.",
    },
    de: {
      title: "Partizipialkonstruktionen",
      summary:
        "Erweiterte Partizipialattribute und dichtere Relativstrukturen in geschriebenem Deutsch.",
    },
  },
  "de-ch30-nominalization": {
    ru: {
      title: "Номинальный стиль",
      summary:
        "Номинализация вместо глагола: плотные именные группы официального немецкого.",
    },
    en: {
      title: "Nominal style",
      summary:
        "Nominalization versus verbal style; compact noun phrases in formal German.",
    },
    es: {
      title: "Estilo nominal",
      summary:
        "Nominalización frente al estilo verbal; sintagmas nominales compactos en el alemán formal.",
    },
    de: {
      title: "Nominalstil",
      summary:
        "Nominalisierung statt Verbalsatz; kompakte Nominalgruppen im formellen Deutsch.",
    },
  },
  "de-ch31-academic-pro": {
    ru: {
      title: "Работа и учёба",
      summary:
        "Учебный и деловой регистр: письмо, резюме и короткая презентация.",
    },
    en: {
      title: "Work and study",
      summary:
        "Academic and professional German: emails, CVs, and short presentations.",
    },
    es: {
      title: "Trabajo y estudios",
      summary:
        "Alemán académico y profesional: correos, currículum y presentaciones breves.",
    },
    de: {
      title: "Beruf und Studium",
      summary:
        "Wissenschaftliches und berufliches Deutsch: E-Mail, Lebenslauf, kurze Präsentation.",
    },
  },
  "de-ch32-register": {
    ru: {
      title: "Стиль и регистр",
      summary:
        "Разговорный и письменный немецкий: обращение, выбор слова и порядок слов.",
    },
    en: {
      title: "Style and register",
      summary:
        "Formal and informal German; how address, word choice, and word order shift together.",
    },
    es: {
      title: "Estilo y registro",
      summary:
        "Alemán formal e informal; tratamiento, léxico y orden de palabras cambian juntos.",
    },
    de: {
      title: "Stil und Register",
      summary:
        "Gesprochenes und geschriebenes Deutsch: Anrede, Wortwahl und Wortstellung.",
    },
  },
  "de-ch33-reported-advanced": {
    ru: {
      title: "Косвенная речь",
      summary:
        "Сложный пересказ: времена Konjunktiv, вопросы, побуждение и дистанция источника.",
    },
    en: {
      title: "Mastering reported speech",
      summary:
        "Multi-clause Konjunktiv I/II: questions, commands, and source distance in press style.",
    },
    es: {
      title: "Dominar el estilo indirecto",
      summary:
        "Konjunktiv I/II en varias oraciones: preguntas, órdenes y distancia de la fuente.",
    },
    de: {
      title: "Indirekte Rede meistern",
      summary:
        "Konjunktiv I/II über mehrere Sätze: Fragen, Aufforderungen und Distanz zur Quelle.",
    },
  },
  "de-ch34-particles-idioms": {
    ru: {
      title: "Частицы и идиомы",
      summary:
        "Модальные частицы doch, ja, eben, halt и устойчивые выражения, которые не собираются по частям.",
    },
    en: {
      title: "Particles and idioms",
      summary:
        "Modal particles (doch, ja, eben, halt) plus idioms and fixed collocations.",
    },
    es: {
      title: "Partículas y modismos",
      summary:
        "Partículas modales (doch, ja, eben, halt), modismos y colocaciones fijas.",
    },
    de: {
      title: "Partikeln und Idiome",
      summary:
        "Modalpartikeln (doch, ja, eben, halt) sowie Idiome und feste Wendungen.",
    },
  },
  "de-ch35-argumentation": {
    ru: {
      title: "Аргументация",
      summary:
        "Письменный аргумент: уступка, контраргумент и формулы административного немецкого.",
    },
    en: {
      title: "Argumentation",
      summary:
        "Written argument: concession, counterpoint, and administrative German formulas.",
    },
    es: {
      title: "Argumentar",
      summary:
        "Argumentación escrita: concesión, réplica y fórmulas del alemán administrativo.",
    },
    de: {
      title: "Argumentieren",
      summary:
        "Schriftliche Argumentation: Einräumung, Einwand und Formeln der Verwaltungssprache.",
    },
  },
  "de-ch36-text-pragmatics": {
    ru: {
      title: "Как устроен текст",
      summary:
        "Тема и рема, первое место в предложении, связность и то, что текст считает известным.",
    },
    en: {
      title: "Understanding texts",
      summary:
        "Information structure, the Vorfeld, cohesion, and what a text treats as already known.",
    },
    es: {
      title: "Comprender textos",
      summary:
        "Estructura de la información, el Vorfeld, la cohesión y lo que el texto da por sabido.",
    },
    de: {
      title: "Texte verstehen",
      summary:
        "Informationsstruktur, Vorfeld, Kohäsion und das, was der Text als bekannt voraussetzt.",
    },
  },
  "de-ch37-genitiv-usage": {
    ru: {
      title: "Генитив в письменной речи",
      summary:
        "Генитив в официальном тексте: des/der, слабые существительные и предлоги wegen, trotz, aufgrund.",
    },
    en: {
      title: "Genitive in formal writing",
      summary:
        "Genitive in formal German: des/der, n-nouns, and prepositions such as wegen, trotz, and aufgrund.",
    },
    es: {
      title: "Genitivo en el alemán formal",
      summary:
        "Genitivo en textos formales: des/der, sustantivos débiles y preposiciones como wegen, trotz y aufgrund.",
    },
    de: {
      title: "Genitiv im Text",
      summary:
        "Genitiv in formellen Texten: des/der, n-Deklination und Präpositionen wie wegen, trotz, aufgrund.",
    },
  },
  "de-ch38-connectors-advanced": {
    ru: {
      title: "Связки продвинутого уровня",
      summary:
        "Наречные связки trotzdem, jedoch, folglich и пара zum einen … zum anderen: глагол остаётся вторым.",
    },
    en: {
      title: "Advanced connectors",
      summary:
        "Adverbial connectors trotzdem, jedoch, folglich, and zum einen … zum anderen: the verb stays second.",
    },
    es: {
      title: "Conectores avanzados",
      summary:
        "Conectores adverbiales trotzdem, jedoch, folglich y zum einen … zum anderen: el verbo sigue en segunda posición.",
    },
    de: {
      title: "Konnektoren, weitergeführt",
      summary:
        "Adverbiale Konnektoren trotzdem, jedoch, folglich und zum einen … zum anderen: das Verb bleibt an zweiter Stelle.",
    },
  },
  "de-ch39-text-types": {
    ru: {
      title: "Типы текста",
      summary:
        "Короткий отчёт без оценки, комментарий с тезисом и компактная заявка.",
    },
    en: {
      title: "Text types",
      summary:
        "A factual report, a commentary built on a thesis, and a short application.",
    },
    es: {
      title: "Tipos de texto",
      summary:
        "Informe factual, comentario con tesis y solicitud breve.",
    },
    de: {
      title: "Textsorten",
      summary:
        "Sachlicher Bericht, Kommentar mit These und kurze Bewerbung.",
    },
  },
  "de-ch40-stilmittel": {
    ru: {
      title: "Стилистические приёмы",
      summary:
        "Ирония, преуменьшение, литота и метафора: когда словарь врёт, а контекст нет.",
    },
    en: {
      title: "Stylistic devices",
      summary:
        "Irony, understatement, litotes, and metaphor: when the dictionary is not the meaning.",
    },
    es: {
      title: "Recursos estilísticos",
      summary:
        "Ironía, atenuación, lítote y metáfora: cuando el diccionario no dice el sentido.",
    },
    de: {
      title: "Stilmittel",
      summary:
        "Ironie, Untertreibung, Litotes und Metapher: wann das Wörterbuch nicht reicht.",
    },
  },
  "de-ch41-wissenschaftssprache": {
    ru: {
      title: "Язык науки",
      summary:
        "Функциональные глагольные сочетания и замены пассива с werden.",
    },
    en: {
      title: "Academic German",
      summary:
        "Light-verb patterns and ways to avoid the werden-passive.",
    },
    es: {
      title: "Lenguaje académico",
      summary:
        "Combinaciones verbo-nominales y alternativas a la pasiva con werden.",
    },
    de: {
      title: "Wissenschaftssprache",
      summary:
        "Funktionsverbgefüge und Alternativen zum werden-Passiv.",
    },
  },
  "de-ch42-nuancen-modal": {
    ru: {
      title: "Нюансы модальных глаголов",
      summary:
        "Вывод по улике и долг по правилу; soll как слух и will как чужое заявление.",
    },
    en: {
      title: "Modal-verb nuances",
      summary:
        "Inference from evidence versus obligation; soll as hearsay and will as a claim.",
    },
    es: {
      title: "Matices de los verbos modales",
      summary:
        "Inferencia frente a obligación; soll como rumor y will como afirmación ajena.",
    },
    de: {
      title: "Modalverb-Nuancen",
      summary:
        "Schluss aus einem Indiz oder Pflicht aus einer Regel; soll als Hörensagen, will als Behauptung.",
    },
  },
  "de-ch43-informationsstruktur": {
    ru: {
      title: "Тема, рема и фокус",
      summary:
        "Одно место перед глаголом и частицы nur, sogar, ausgerechnet: что именно утверждается.",
    },
    en: {
      title: "Topic, comment, and focus",
      summary:
        "One constituent before the verb, and how nur, sogar, and ausgerechnet change the claim.",
    },
    es: {
      title: "Tema, rema y foco",
      summary:
        "Un solo miembro antes del verbo y cómo nur, sogar y ausgerechnet cambian lo afirmado.",
    },
    de: {
      title: "Informationsstruktur",
      summary:
        "Ein Satzglied im Vorfeld und wie nur, sogar und ausgerechnet die Aussage verschieben.",
    },
  },
  "de-ch44-literarisch-kultur": {
    ru: {
      title: "Литературные и культурные тексты",
      summary:
        "Рассказчик и автор, мотив, символ и толкование, которое текст оставляет открытым.",
    },
    en: {
      title: "Literary and cultural texts",
      summary:
        "Narrator versus author, motif, symbol, and an interpretation the text leaves open.",
    },
    es: {
      title: "Textos literarios y culturales",
      summary:
        "Narrador frente a autor, motivo, símbolo y una interpretación que el texto deja abierta.",
    },
    de: {
      title: "Literarisch und kulturell lesen",
      summary:
        "Erzähler und Autor, Motiv, Symbol und eine Deutung, die der Text offenlässt.",
    },
  },
  "de-ch45-pragmatic-mastery": {
    ru: {
      title: "Прагматическое мастерство",
      summary:
        "Смена регистра, намёк вместо прямой просьбы и ступени, на которых просьба становится явной.",
    },
    en: {
      title: "Pragmatic mastery",
      summary:
        "Register shift, a hint instead of a direct request, and the steps that make a request explicit.",
    },
    es: {
      title: "Dominio pragmático",
      summary:
        "Cambio de registro, un indicio en lugar de un pedido directo y los pasos que lo hacen explícito.",
    },
    de: {
      title: "Pragmatische Meisterschaft",
      summary:
        "Registerwechsel, Andeutung statt direkter Bitte und die Stufen, auf denen die Bitte deutlich wird.",
    },
  },
};
