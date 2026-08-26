import type { InterfaceLanguage } from "@/types";
import { ENGLISH_LEVEL_FRAMES } from "@/config/grammar-level-frames-en";

type I18n = Record<InterfaceLanguage, string>;

export type GrammarPair = {
  left: string;
  right: string;
  diff: I18n;
};

export type GrammarLevelFrame = {
  here: I18n;
  later: I18n;
  pairs: GrammarPair[];
};

const L = {
  here: {
    ru: "На этом уровне",
    en: "At this level",
    es: "En este nivel",
    de: "Auf dieser Stufe",
  },
  later: {
    ru: "Позже в курсе",
    en: "Later in the course",
    es: "Más adelante en el curso",
    de: "Später im Kurs",
  },
  pairs: {
    ru: "Сравни примеры",
    en: "Compare the examples",
    es: "Compara los ejemplos",
    de: "Beispiele vergleichen",
  },
} as const;

function t(ru: string, en: string, es: string, de: string): I18n {
  return { ru, en, es, de };
}

function p(
  left: string,
  right: string,
  ru: string,
  en: string,
  es: string,
  de: string,
): GrammarPair {
  return { left, right, diff: t(ru, en, es, de) };
}

/** CEFR boundary + contrast pairs for each grammar slug (Spanish + English courses). */
const SPANISH_LEVEL_FRAMES: Record<string, GrammarLevelFrame> = {
  // ----- Spanish A1 -------------------------------------------------
  "a1-ser-estar": {
    here: t(
      "Два глагола «быть»: ser (кто ты) и estar (как ты сейчас). Таблица soy / estoy.",
      "Two verbs for “to be”: ser (who you are) and estar (how you are now).",
      "Dos verbos «ser / estar»: quién eres (ser) y cómo estás ahora (estar).",
      "zwei «sein» — wer du bist vs. wie du dich fühlst.",
    ),
    later: t(
      "es listo vs está listo и другие тонкие пары — тема «Ser/Estar: тонкости».",
      "es listo vs está listo — “Ser/Estar: nuances”.",
      "es listo vs está listo — «Ser/Estar: matices».",
      "es listo vs está listo — «Ser/Estar: Feinheiten».",
    ),
    pairs: [
      p("Soy profesor.", "Estoy cansado.", "кто ты / профессия", "who you are / job", "quién eres / profesión", "wer du bist / Beruf"),
      p("Soy de Moscú.", "Estoy en Madrid.", "откуда ты vs где ты сейчас", "where you’re from vs where you are now", "de dónde eres vs dónde estás", "woher vs. wo du jetzt bist"),
      p("Es la una.", "Son las tres.", "«час» всегда через ser", "clock time always uses ser", "la hora siempre con ser", "Uhrzeit immer mit ser"),
    ],
  },
  "a1-presente": {
    here: t(
      "-ar / -er / -ir, лица включая vosotros (`habláis`), базовые неправильные.",
      "-ar / -er / -ir, persons including vosotros (`habláis`), core irregulars.",
      "-ar / -er / -ir, personas con vosotros (`habláis`), irregulares base.",
      "-ar / -er / -ir, Personen inkl. vosotros (`habláis`).",
    ),
    later: t(
      "прошедшие; B1: subjuntivo (hablo ≠ hable).",
      "past tenses; B1: subjunctive (hablo ≠ hable).",
      "pasados; B1: subjuntivo (hablo ≠ hable).",
      "Vergangenheit; B1: Subjuntivo (hablo ≠ hable).",
    ),
    pairs: [
      p("Hablo español.", "Hablo inglés.", "одно лицо, разные языки — одно окончание -o", "same person, different languages — same -o ending", "misma persona, distinto idioma — misma -o", "gleiche Person, andere Sprache — dieselbe -o"),
      p("Habláis vosotros.", "Hablan ustedes.", "вы в Испании vs вы в Америке", "you (Spain) vs you (Latin America)", "vosotros (España) vs ustedes (América)", "vosotros (Spanien) vs. ustedes (Lateinamerika)"),
    ],
  },
  "a1-articulos": {
    here: t(
      "Артикли el/la и un/una; особый случай el agua; без артикля с профессией после ser (Soy profesora).",
      "Articles el/la and un/una; special case el agua; no article with jobs after ser (Soy profesora).",
      "Artículos el/la y un/una; caso el agua; sin artículo con profesión tras ser (Soy profesora).",
      "el/la vs un/una; el agua (betontes a), nicht *el abuela. Nullartikel bei Berufen nach ser — kurz.",
    ),
    later: t(
      "Род слова подробно — «Род и число».",
      "Noun gender in full — “Gender and number”.",
      "El género en detalle — «Género y número».",
      "Genus ausführlich — «Genus und Numerus».",
    ),
    pairs: [
      p("el agua fría", "la abuela", "agua с ударным a → el; abuela → la", "agua with stressed a → el; abuela → la", "agua con a tónica → el; abuela → la", "agua mit betontem a → el; abuela → la"),
      p("el libro", "un libro", "этот / известный vs какой-то", "this/known vs some", "este/conocido vs alguno", "dieser/bekannt vs. irgendein"),
      p("Soy profesora.", "La profesora es Ana.", "профессия без артикля vs конкретный человек", "job with no article vs a specific person", "profesión sin artículo vs persona concreta", "Beruf ohne Artikel vs. konkrete Person"),
    ],
  },
  "a1-genero-numero": {
    here: t(
      "-o/-a, plural -s/-es, problema/mano, согласование прилагательного.",
      "-o/-a, plural -s/-es, problema/mano, adjective agreement.",
      "-o/-a, plural, problema/mano, concordancia del adjetivo.",
      "-o/-a, Plural, problema/mano, Adjektivkongruenz.",
    ),
    later: t(
      "el agua — уже в артиклях; не повторяем исключение как новое правило.",
      "el agua is already in Articles — not a new rule here.",
      "el agua ya está en Artículos.",
      "el agua steht schon bei den Artikeln.",
    ),
    pairs: [
      p("el problema", "la mano", "на -a, но мужской / на -o, но женский", "ends in -a but masculine / -o but feminine", "termina en -a pero es masculino / -o pero femenino", "endet auf -a, aber maskulin / -o, aber feminin"),
      p("casas blancas", "libros rojos", "прилагательное повторяет род и число", "the adjective matches gender and number", "el adjetivo copia género y número", "das Adjektiv übernimmt Genus und Numerus"),
    ],
  },
  "a1-numeros-1-100": {
    here: t(
      "1–100, дни, месяцы, час (`es la una` / `son las dos`).",
      "1–100, days, months, telling the time.",
      "1–100, días, meses, la hora.",
      "1–100, Tage, Monate, Uhrzeit.",
    ),
    later: t(
      "Порядковые (primero) и даты полностью — ближе к A2 лексике.",
      "Ordinals (primero) and full dates sit nearer A2 vocab.",
      "Ordinales (primero) y fechas completas → A2.",
      "Ordinalia (primero) und volle Daten → A2.",
    ),
    pairs: [
      p("el lunes", "los lunes", "в этот понедельник vs по понедельникам", "this Monday vs on Mondays", "este lunes vs los lunes", "diesen Montag vs. montags"),
      p("Es la una.", "Son las dos.", "один час — es; дальше — son", "one o’clock — es; after that — son", "la una — es; después — son", "1 Uhr — es; danach — son"),
    ],
  },
  "a1-preposiciones-lugar": {
    here: t(
      "en vs a (где vs куда), al / del, sobre / debajo / entre.",
      "en vs a (where vs where to), al / del, sobre / debajo / entre.",
      "en vs a (dónde vs adónde), al / del.",
      "en vs a (wo vs. wohin), al / del.",
    ),
    later: t(
      "por vs para — A2. Не мешаем «для/за» с местом.",
      "por vs para is A2. Don’t mix “for/because” with place.",
      "por vs para es A2.",
      "por vs para ist A2.",
    ),
    pairs: [
      p("Estoy en Madrid.", "Voy a Madrid.", "где нахожусь vs куда иду", "where I am vs where I’m going", "dónde estoy vs adónde voy", "wo ich bin vs. wohin ich gehe"),
      p("Voy al parque.", "Vengo del parque.", "в парк (a+el) / из парка (de+el)", "to the park (a+el) / from the park (de+el)", "al parque / del parque", "in den Park / aus dem Park"),
    ],
  },
  "a1-gustar": {
    here: t(
      "me/te/le + gusta/gustan. Нравится вещь, не «я нравлюсь».",
      "me/te/le + gusta/gustan. The thing is liked — you are not the verb subject.",
      "me/te/le + gusta/gustan. Gusta la cosa, no «yo».",
      "me/te/le + gusta/gustan. Die Sache gefällt — du bist nicht das Subjekt.",
    ),
    later: t(
      "se и объектные lo/la. Не путать me gusta с me lo da.",
      "se and object lo/la. Don’t mix me gusta with me lo da.",
      "se y lo/la. No mezclar me gusta con me lo da.",
      "se und lo/la. Nicht mit me lo da mischen.",
    ),
    pairs: [
      p("Me gusta el café.", "Me gustan los libros.", "одна вещь vs несколько", "one thing vs several", "una cosa vs varias", "eine Sache vs. mehrere"),
      p("Me gusta nadar.", "Me gusta que vengas.", "инфинитив (A1) vs que… (B1)", "infinitive (A1) vs que… (B1)", "infinitivo (A1) vs que… (B1)", "Infinitiv (A1) vs. que… (B1)"),
    ],
  },
  "a1-tener-expressions": {
    here: t(
      "состояния через tener (hambre, frío, años) — не estar / not «I am hunger».",
      "states with tener (hambre, frío, años) — not estar.",
      "estados con tener — no estar.",
      "Zustände mit tener — nicht estar.",
    ),
    later: t(
      "estar + прилагательное (cansado) уже в ser/estar; не дублируем.",
      "estar + adjective is already in ser/estar.",
      "estar + adjetivo ya está en ser/estar.",
      "estar + Adjektiv steht schon bei ser/estar.",
    ),
    pairs: [
      p("Tengo hambre.", "Estoy hambriento.", "так говорят vs редко / дословно", "natural vs rare / word-for-word", "lo natural vs raro / calcado", "natürlich vs. selten / wörtlich"),
      p("Tengo 20 años.", "Soy 20.", "возраст — tener, не ser", "age uses tener, not ser", "edad con tener, no ser", "Alter mit tener, nicht ser"),
      p("Tengo frío.", "Estoy frío.", "мне холодно vs я холодный (о человеке/предмете)", "I feel cold vs I am a cold person/object", "tengo frío vs estoy frío", "mir ist kalt vs. ich bin kalt"),
    ],
  },
  "a1-preguntas": {
    here: t(
      "¿qué / quién / dónde / cuándo / por qué / cómo?; qué vs cuál.",
      "¿qué / quién / dónde…?; qué vs cuál.",
      "¿qué / quién / dónde…?; qué vs cuál.",
      "¿qué / quién / dónde…?; qué vs cuál.",
    ),
    later: t(
      "Как тебя зовут = ¿Cómo te llamas?, не ¿Cómo eres? (это «какой ты»).",
      "What’s your name is ¿Cómo te llamas?, not ¿Cómo eres?",
      "El nombre es ¿Cómo te llamas?, no ¿Cómo eres?",
      "Name: ¿Cómo te llamas?, nicht ¿Cómo eres?",
    ),
    pairs: [
      p("¿Cómo te llamas?", "¿Cómo eres?", "как зовут vs какой ты", "what’s your name vs what are you like", "cómo te llamas vs cómo eres", "wie heißt du vs. wie bist du"),
      p("¿Qué libro?", "¿Cuál de los dos?", "что вообще vs какой из известных", "what in general vs which of these", "qué en general vs cuál de estos", "was allgemein vs. welches von diesen"),
    ],
  },
  "a1-verbos-frecuentes": {
    here: t(
      "ir, tener, hacer, poder, querer в presente — список для речи каждый день.",
      "ir, tener, hacer, poder, querer in the present — daily irregulars.",
      "ir, tener, hacer, poder, querer en presente.",
      "ir, tener, hacer, poder, querer im Präsens.",
    ),
    later: t(
      "Их прошедшие (fui, tuve, hice) — A2 Indefinido, не учим здесь наизусть целиком.",
      "Their pasts (fui, tuve, hice) are A2 Indefinido.",
      "Sus pasados (fui, tuve, hice) son A2 Indefinido.",
      "Ihre Vergangenheit (fui, tuve, hice) ist A2 Indefinido.",
    ),
    pairs: [
      p("Voy al cine.", "Fui al cine.", "сейчас / обычно vs вчера", "now / usually vs yesterday", "ahora / habitual vs ayer", "jetzt / gewöhnlich vs. gestern"),
      p("Puedo ir.", "Quiero ir.", "могу vs хочу", "can vs want", "puedo vs quiero", "kann vs. will"),
    ],
  },

  // ----- Spanish A2 -------------------------------------------------
  "a2-preterito-perfecto": {
    here: t(
      "he + participio; связь с сейчас (hoy, ya, esta semana).",
      "he + participle; still connected to now (hoy, ya, esta semana).",
      "he + participio; aún ligado al ahora.",
      "he + Partizip; noch mit dem Jetzt verbunden.",
    ),
    later: t(
      "ayer / en 2018 → Indefinido. Контраст четырёх времён целиком — тема DELE, не эта.",
      "ayer / en 2018 → Indefinido. The four-past exam contrast is the DELE topic.",
      "ayer / en 2018 → Indefinido. El contraste de cuatro es el tema DELE.",
      "ayer / en 2018 → Indefinido. Der Vier-Zeiten-Kontrast ist das DELE-Thema.",
    ),
    pairs: [
      p("He comido hoy.", "Comí ayer.", "ещё связано с сейчас vs уже закончилось вчера", "still linked to now vs finished yesterday", "aún ligado al ahora vs ayer cerrado", "noch mit dem Jetzt verbunden vs. gestern abgeschlossen"),
      p("Ya he llegado.", "Llegué a las 3.", "уже пришёл (важно сейчас) vs пришёл в 3 (факт)", "I’m here now vs I arrived at 3 (a fact)", "ya estoy aquí vs llegué a las 3", "ich bin jetzt da vs. ich kam um 3"),
    ],
  },
  "a2-preterito-indefinido": {
    here: t(
      "закрытый факт (ayer, en 2018); `hablasteis`; fui = ser и ir.",
      "closed fact (ayer, en 2018); `hablasteis`; fui = ser and ir.",
      "hecho cerrado; `hablasteis`; fui = ser e ir.",
      "abgeschlossene Tatsache; `hablasteis`; fui = ser und ir.",
    ),
    later: t(
      "Фон / привычка → Imperfecto (следующая тема). Не смешиваем таблицы.",
      "Background / habit → Imperfecto (next topic).",
      "Fondo / hábito → Imperfecto (tema siguiente).",
      "Hintergrund / Gewohnheit → Imperfecto.",
    ),
    pairs: [
      p("Ayer llovió.", "Llovía mucho.", "разовый факт vs фон / как было", "one-off fact vs background / how it was", "hecho puntual vs fondo", "einmaliges Ereignis vs. Hintergrund"),
      p("Fui profesor.", "Fui a Madrid.", "fui = «был» и «пошёл» — одна форма", "fui = “I was” and “I went” — same form", "fui = «fui» de ser y de ir", "fui = «ich war» und «ich ging»"),
    ],
  },
  "a2-imperfecto": {
    here: t(
      "фон, привычка, описание, «когда мне было 10».",
      "background, habit, description, “when I was 10”.",
      "fondo, hábito, descripción, «cuando tenía 10».",
      "Hintergrund, Gewohnheit, Beschreibung, «als ich 10 war».",
    ),
    later: t(
      "Смысловые пары conocía/conocí на экзамене — DELE «контраст прошедших».",
      "Meaning pairs conocía/conocí for the exam — DELE past-contrast topic.",
      "Pares conocía/conocí en examen — tema DELE.",
      "Paare conocía/conocí in der Prüfung — DELE-Thema.",
    ),
    pairs: [
      p("Leía cuando llamaste.", "Llamaste mientras leía.", "фон / процесс + разовое событие", "background / ongoing + one-off event", "fondo / proceso + evento puntual", "Hintergrund / Verlauf + einmaliges Ereignis"),
      p("Era las tres.", "Eran las tres.", "ошибка: era las… → правильно eran las…", "wrong: era las… → correct eran las…", "error: era las… → correcto eran las…", "Falsch: era las… → richtig eran las…"),
    ],
  },
  "a2-por-para": {
    here: t(
      "para = цель / для кого / к сроку; por = причина / путь / цена / por la mañana.",
      "para = purpose / recipient / deadline; por = cause / route / price / por la mañana.",
      "para = fin / destinatario; por = causa / camino / precio.",
      "para = Ziel / Empfänger; por = Grund / Weg / Preis.",
    ),
    later: t(
      "Voy a Madrid (не *para). Длительность: durante, не *por dos horas.",
      "Voy a Madrid (not *para). Duration: durante, not *por dos horas.",
      "Voy a Madrid (no *para). Duración: durante.",
      "Voy a Madrid (nicht *para). Dauer: durante.",
    ),
    pairs: [
      p("Estudio para aprender.", "Estudio por la mañana.", "цель / для чего vs время суток", "purpose vs time of day", "fin / para qué vs momento del día", "Ziel / wozu vs. Tageszeit"),
      p("El avión sale para Madrid.", "Voy a Madrid.", "самолёт «на Мадрид» vs я еду в Мадрид", "plane “to Madrid” vs I go to Madrid", "el avión sale para Madrid vs voy a Madrid", "Flugzeug «nach Madrid» vs. ich fahre nach Madrid"),
      p("Estudié durante dos horas.", "Lo hice por ti.", "сколько длилось (durante) vs ради кого (por)", "how long (durante) vs for whose sake (por)", "durante cuánto vs por ti", "wie lange (durante) vs. für dich (por)"),
    ],
  },
  "a2-comparativos": {
    here: t(
      "más/menos/tan…como, el más, mejor/peor/mayor.",
      "más/menos/tan…como, el más, mejor/peor/mayor.",
      "más/menos/tan…como, el más, mejor/peor/mayor.",
      "más/menos/tan…como, el más, mejor/peor/mayor.",
    ),
    later: t(
      "cuanto más… tanto más и книжные сравнительные — C1.",
      "cuanto más… tanto más and literary comparatives — C1.",
      "cuanto más… tanto más — C1.",
      "cuanto más… tanto más — C1.",
    ),
    pairs: [
      p("más alta que", "tan alta como", "больше / меньше vs такой же", "more/less vs the same as", "más/menos vs tan…como", "mehr/weniger vs. genauso"),
      p("mayor que yo", "más grande que la mesa", "старше (возраст) vs больше размером", "older (age) vs bigger in size", "mayor (edad) vs más grande (tamaño)", "älter vs. größer"),
    ],
  },
  "a2-futuro-simple": {
    here: t(
      "будущее-план/прогноз: hablaré, tendré. ir a + inf уже знакомо.",
      "future plan/prediction: hablaré, tendré. ir a + inf is already known.",
      "futuro plan/predicción: hablaré. ir a + inf ya se conoce.",
      "Zukunft Plan/Prognose: hablaré. ir a + inf kennt ihr schon.",
    ),
    later: t(
      "Serán las diez ≈ «наверное» — это C2 «догадка и слухи», не A2.",
      "Serán las diez ≈ “probably” is C2 conjecture — not A2.",
      "Serán las diez ≈ «probablemente» es C2, no A2.",
      "Serán las diez ≈ «wahrscheinlich» ist C2, nicht A2.",
    ),
    pairs: [
      p("Voy a comer.", "Comeré más tarde.", "вот-вот / план рядом vs будущее вообще", "about to / near plan vs future in general", "intención cercana vs futuro en general", "nahe Absicht vs. Zukunft allgemein"),
      p("Mañana lloverá.", "Serán las diez.", "прогноз погоды vs «наверное сейчас…» (C2)", "weather forecast vs “it’s probably…” (C2)", "pronóstico vs «probablemente…» (C2)", "Wetterprognose vs. «wahrscheinlich…» (C2)"),
    ],
  },

  // ----- Spanish B1 -------------------------------------------------
  "b1-subjuntivo": {
    here: t(
      "настоящее subjuntivo. Не факт, а желание/сомнение: quiero que vengas.",
      "present subjunctive. Not a fact — want/doubt: quiero que vengas.",
      "presente de subjuntivo. No es un hecho: quiero que vengas.",
      "Präsens Subjuntivo. Kein Fakt: quiero que vengas.",
    ),
    later: t(
      "Imperfecto de subjuntivo (tuviera) — следующая отдельная тема. Не мешаем в одну таблицу.",
      "Imperfect subjunctive (tuviera) is the next topic — not this table.",
      "Imperfecto de subjuntivo (tuviera) es el tema siguiente.",
      "Imperfekt Subjuntivo (tuviera) ist das nächste Thema.",
    ),
    pairs: [
      p("Sé que vienes.", "Quiero que vengas.", "факт (изъявительное) / желание (сослагательное)", "fact (indicative) / wish (subjunctive)", "hecho (indicativo) / deseo (subjuntivo)", "Fakt (Indikativ) / Wunsch (Subjuntivo)"),
      p("Creo que es fácil.", "No creo que sea fácil.", "«думаю, что…» vs «не думаю, что…» (меняется форма)", "“I think that…” vs “I don’t think that…” (form changes)", "creo que… vs no creo que…", "ich glaube, dass… vs. ich glaube nicht, dass…"),
    ],
  },
  "b1-imperativo": {
    here: t(
      "habla / no hables. Утверд. vosotros = `hablad` / `vivid`. Отрицание = subjuntivo (`no habléis`).",
      "habla / no hables. Affirmative vosotros = `hablad` / `vivid`. Negative = subjunctive.",
      "habla / no hables. Vosotros afirmativo = `hablad`. Negativo = subjuntivo.",
      "habla / no hables. Vosotros bejaht = `hablad`. Verneint = Subjuntivo.",
    ),
    later: t(
      "Не путать hablad (приказ) с habláis (настоящее) и habléis (запрет / сослагательное).",
      "Don’t mix hablad (command) with habláis (present) and habléis (don’t / subjunctive).",
      "No mezclar hablad (orden) con habláis (presente) y habléis (prohibición).",
      "Nicht hablad (Befehl) mit habláis (Präsens) und habléis (Verbot) mischen.",
    ),
    pairs: [
      p("¡Habla!", "¡No hables!", "положительный приказ ≠ запрет", "positive command ≠ prohibition", "orden afirmativa ≠ prohibición", "positiver Befehl ≠ Verbot"),
      p("¡Hablad!", "¡No habléis!", "vosotros: делайте! vs не делайте!", "vosotros: do it! vs don’t do it!", "vosotros: ¡haced! vs ¡no hagáis!", "vosotros: tut es! vs. tut es nicht!"),
    ],
  },
  "b1-condicional": {
    here: t(
      "«я бы»: podría, me gustaría. Те же основы, что Futuro (tendr-, har-).",
      "“I would”: podría, me gustaría. Same stems as Future.",
      "«yo haría»: podría, me gustaría. Las mismas raíces que el Futuro.",
      "«ich würde»: podría, me gustaría. Dieselben Stämme wie Futuro.",
    ),
    later: t(
      "Три типа «если» (реально / если бы / в прошлом) целиком — B2 Condicional compuesto.",
      "The three if-types (real / if only / past) in full are B2 compound conditionals.",
      "Los tres «si» (real / hipotético / pasado) completos son B2.",
      "Die drei «si»-Typen (real / irreal / Vergangenheit) vollständig sind B2.",
    ),
    pairs: [
      p("Te llamaré.", "Te llamaría.", "сделаю vs сделал бы / вежливо", "I will vs I would / polite", "haré vs haría / cortesía", "ich werde vs. ich würde / höflich"),
      p("Si puedo, voy.", "Si pudiera, iría.", "если реально могу vs если бы мог", "if I really can vs if I could", "si puedo de verdad vs si pudiera", "wenn ich wirklich kann vs. wenn ich könnte"),
    ],
  },
  "b1-pronombre-se": {
    here: t(
      "одно se: «моет себя», «друг друга», «здесь говорят», «у меня выпал» (se me cayó).",
      "one se: “washes himself”, “each other”, “people say here”, “it fell on me” (se me cayó).",
      "un se: «se lava», «uno a otro», «aquí se habla», «se me cayó».",
      "ein se: «wäscht sich», «einander», «hier spricht man», «es ist mir runtergefallen».",
    ),
    later: t(
      "se habla как обычная речь vs fue escrito — тема пассива B2.",
      "se habla as everyday style vs fue escrito — B2 passive voice.",
      "se habla (estilo natural) vs fue escrito — pasiva B2.",
      "se habla (Alltag) vs fue escrito — Passiv B2.",
    ),
    pairs: [
      p("María se lava.", "Se habla español aquí.", "моет себя vs «здесь говорят»", "washes herself vs “people speak Spanish here”", "se lava vs «aquí se habla»", "wäscht sich vs. «hier spricht man»"),
      p("Se me cayó el vaso.", "Yo tiré el vaso.", "само выпало vs я уронил специально", "it fell by accident vs I dropped it on purpose", "se cayó solo vs yo lo tiré", "es ist mir runtergefallen vs. ich habe es absichtlich fallen lassen"),
      p("Ana y Luis se ven.", "Ana se ve en el espejo.", "друг друга vs себя в зеркале", "each other vs herself in the mirror", "uno a otro vs ella misma en el espejo", "einander vs. sich selbst im Spiegel"),
    ],
  },
  "b1-relativos": {
    here: t(
      "que почти всегда; quien — люди; el que / la que; cuyo — чей.",
      "que almost always; quien for people; el que; cuyo = whose.",
      "que casi siempre; quien para personas; cuyo = cuyo.",
      "que fast immer; quien für Personen; cuyo = dessen.",
    ),
    later: t(
      "el cual, lo que формальные — B2 «сложные относительные».",
      "Formal el cual, lo que — B2 advanced relatives.",
      "el cual, lo que formales — B2.",
      "Formelles el cual, lo que — B2.",
    ),
    pairs: [
      p("el libro que leí", "el hombre que vino", "про вещь и про человека чаще всего que", "for things and people, que is usually fine", "cosa y persona: normalmente que", "Ding und Person: meist que"),
      p("el tema del que hablamos", "el tema de que hablamos", "правильно del que — не голое de que", "use del que — not bare de que", "del que, no *de que", "del que, nicht bloßes de que"),
    ],
  },
  "b1-pluscuamperfecto": {
    here: t(
      "había + participio — раньше другого прошлого.",
      "había + participle — before another past.",
      "había + participio — antes de otro pasado.",
      "había + Partizip — vor einer anderen Vergangenheit.",
    ),
    later: t(
      "Не путать с he comido (сейчас) и с hubiera comido (subj B2).",
      "Not he comido (now) and not hubiera comido (subj B2).",
      "No es he comido ni hubiera comido (B2).",
      "Nicht he comido und nicht hubiera comido (B2).",
    ),
    pairs: [
      p("Cuando llegué, se había ido.", "Cuando llegué, se fue.", "уже ушёл vs ушёл в тот момент", "already gone vs left then", "ya se había ido vs se fue entonces", "schon weg vs. ging dann"),
    ],
  },
  "b1-subjuntivo-imperfecto": {
    here: t(
      "tuviera от ellos indefinido (tuvieron), не от futuro (*tendriera).",
      "tuviera from ellos indefinido (tuvieron), not from future (*tendriera).",
      "tuviera desde ellos indefinido, no desde el futuro.",
      "tuviera aus ellos Indefinido, nicht aus dem Futur.",
    ),
    later: t(
      "hubiera + participio — B2 subjuntivo compuestos.",
      "hubiera + participle is B2 compound subjunctive.",
      "hubiera + participio es B2.",
      "hubiera + Partizip ist B2.",
    ),
    pairs: [
      p("Quiero que vengas.", "Quería que vinieras.", "хочу, чтобы… сейчас vs хотел, чтобы… тогда", "I want you to… now vs I wanted you to… then", "quiero que… ahora vs quería que… entonces", "ich will, dass… jetzt vs. ich wollte, dass… damals"),
      p("Si tengo tiempo, voy.", "Si tuviera tiempo, iría.", "если реально vs если бы", "if it’s real vs if only", "si es real vs si fuera", "wenn es real ist vs. wenn es so wäre"),
    ],
  },
  "b1-pronombres-objetos": {
    here: t(
      "lo/la = что; le = кому; se lo, не *le lo.",
      "lo/la = what; le = to whom; se lo, not *le lo.",
      "lo/la = qué; le = a quién; se lo, no *le lo.",
      "lo/la = was; le = wem; se lo, nicht *le lo.",
    ),
    later: t(
      "leísmo и дублирование a María la veo — C1 местоимения.",
      "leísmo and a María la veo doubling — C1 pronouns.",
      "leísmo y duplicación — C1.",
      "leísmo und Verdopplung — C1.",
    ),
    pairs: [
      p("Lo veo.", "Le hablo.", "что вижу vs кому говорю", "what I see vs who I speak to", "qué veo vs a quién hablo", "was ich sehe vs. mit wem ich spreche"),
      p("Se lo doy.", "Le lo doy.", "правильно se lo vs ошибка le lo", "correct se lo vs wrong le lo", "se lo correcto vs *le lo", "richtig se lo vs. falsch le lo"),
    ],
  },
  "b1-adverbios": {
    here: t(
      "-mente (ударение остаётся на прилагательном: fácilmente); muy vs mucho.",
      "-mente (stress stays on the adjective: fácilmente); muy vs mucho.",
      "-mente (el acento sigue en el adjetivo); muy vs mucho.",
      "-mente (Akzent bleibt auf dem Adjektiv); muy vs mucho.",
    ),
    later: t(
      "quizás + subjuntivo — отсылка к теме subjuntivo, не новая система.",
      "quizás + subjunctive points back to the subjunctive topic.",
      "quizás + subjuntivo remite al tema de subjuntivo.",
      "quizás + Subjuntivo verweist auf das Subjuntivo-Thema.",
    ),
    pairs: [
      p("muy rápido", "corre mucho", "muy + признак vs mucho + глагол/существительное", "muy + adjective vs mucho + verb/noun", "muy + adjetivo vs mucho + verbo/nombre", "muy + Adjektiv vs. mucho + Verb/Nomen"),
      p("fácilmente", "facilmente", "ударение остаётся: fácilmente", "the stress stays: fácilmente", "el acento se mantiene: fácilmente", "der Akzent bleibt: fácilmente"),
    ],
  },
  "dele-contraste-pasados": {
    here: t(
      "DELE B1: выбор времени в задании, не новое спряжение.",
      "DELE B1: choosing the tense in a task — not new conjugations.",
      "DELE B1: elegir el tiempo, no conjugar de nuevo.",
      "DELE B1: Zeit wählen, nicht neu konjugieren.",
    ),
    later: t(
      "Таблицы he / fui / era / había — темы A2–B1 выше. Здесь только шпаргалка экзамена.",
      "Tables live in A2–B1 topics above. Here: exam cheat-sheet only.",
      "Las tablas están en A2–B1. Aquí solo la chuleta del examen.",
      "Tabellen stehen in A2–B1. Hier nur der Prüfungsspitzenzettel.",
    ),
    pairs: [
      p("Conocía a Juan.", "Conocí a Juan.", "уже знал vs познакомился тогда", "already knew vs met then", "ya conocía vs conocí entonces", "kannte schon vs. lernte damals kennen"),
      p("He visto esta mañana.", "Vi ayer.", "в Испании «сегодня утром» vs вчера (закрытый день)", "Spain: this morning vs yesterday (closed day)", "España: esta mañana vs ayer", "Spanien: heute Morgen vs. gestern"),
    ],
  },
  "dele-carta-formal": {
    here: t(
      "DELE письмо B1–B2: формулы регистра. Грамматика (condicional, usted) уже была.",
      "DELE letters B1–B2: register formulas. The grammar is already known.",
      "DELE carta B1–B2: fórmulas de registro.",
      "DELE Brief B1–B2: Registerformeln.",
    ),
    later: t(
      "Эссе с коннекторами — отдельная DELE-тема B2, не письмо.",
      "The essay with connectors is the other DELE B2 topic — not this letter.",
      "El ensayo con conectores es otro tema DELE B2.",
      "Der Aufsatz mit Konnektoren ist das andere DELE-B2-Thema.",
    ),
    pairs: [
      p("Estimado señor:", "¡Hola, Ana!", "официально vs по-свойски", "formal vs casual", "formal vs informal", "formell vs. locker"),
      p("Le agradecería que enviara…", "¿Puedes mandarme…?", "вежливо коллеге vs другу", "polite to a colleague vs to a friend", "cortés con un colega vs con un amigo", "höflich zum Kollegen vs. zum Freund"),
    ],
  },

  // ----- Spanish B2 -------------------------------------------------
  "b2-estilo-indirecto": {
    here: t(
      "dijo que vendría. Сдвиг только после прошедшего reporting verb.",
      "dijo que vendría. Backshift only after a past reporting verb.",
      "dijo que vendría. Retroceso solo tras verbo pasado.",
      "dijo que vendría. Verschiebung nur nach past reporting verb.",
    ),
    later: t(
      "Полная таблица hoy→aquel día и вопросы — C1 косвенная речь.",
      "Full hoy→aquel día tables and questions — C1 reported speech.",
      "Tabla hoy→aquel día — C1.",
      "Tabelle hoy→aquel día — C1.",
    ),
    pairs: [
      p("Dice que viene.", "Dijo que venía / vendría.", "говорит «придёт» vs сказал «придёт/пришёл бы»", "says “he’s coming” vs said it with a tense shift", "dice «viene» vs dijo con cambio de tiempo", "sagt «er kommt» vs. sagte mit Zeitverschiebung"),
    ],
  },
  "b2-voz-pasiva": {
    here: t(
      "fue escrito (событие) vs está cerrado (состояние) vs se habla (живое).",
      "fue escrito (event) vs está cerrado (state) vs se habla (typical).",
      "fue escrito vs está cerrado vs se habla.",
      "fue escrito vs está cerrado vs se habla.",
    ),
    later: t(
      "Не *es escrito por Cervantes для факта прошлого — нужно fue.",
      "Not *es escrito por Cervantes for a past event — use fue.",
      "No *es escrito por Cervantes: fue escrito.",
      "Nicht *es escrito: fue escrito.",
    ),
    pairs: [
      p("Fue escrito por Cervantes.", "Está escrito en español.", "что сделали (fue escrito) vs в каком виде сейчас (está escrito)", "what was done vs how it is now", "qué se hizo vs cómo está ahora", "was getan wurde vs. wie es jetzt ist"),
      p("Se habla español.", "El español es hablado por millones.", "так обычно говорят vs тяжёлый книжный пассив", "how people usually say it vs heavy written passive", "lo natural vs pasiva culta pesada", "so sagt man vs. schweres schriftliches Passiv"),
    ],
  },
  "b2-subjuntivo-compuestos": {
    here: t(
      "haya / hubiera + participio — те же кнопки, что B1, плюс «уже случилось».",
      "haya / hubiera + participle — same triggers as B1, plus “already happened”.",
      "haya / hubiera + participio.",
      "haya / hubiera + Partizip.",
    ),
    later: t(
      "Образование presente/imperfecto subjuntivo не повторяем — темы B1.",
      "Don’t re-teach present/imperfect subjunctive formation — B1 topics.",
      "No repetir la formación — temas B1.",
      "Bildung nicht wiederholen — B1-Themen.",
    ),
    pairs: [
      p("Quiero que vengas.", "Me alegro de que hayas venido.", "ещё не случилось vs уже случилось", "not yet happened vs already happened", "aún no ocurrió vs ya ocurrió", "noch nicht passiert vs. schon passiert"),
    ],
  },
  "b2-condicionales-compuestos": {
    here: t(
      "три si — llueve / lloviera / hubiera llovido + хвост.",
      "three si — llueve / lloviera / hubiera llovido + matching tail.",
      "tres si — llueve / lloviera / hubiera llovido.",
      "drei si — llueve / lloviera / hubiera llovido.",
    ),
    later: t(
      "Смешанные (если бы тогда → сейчас бы) — оттенок C1, не обязательны в этой таблице.",
      "Mixed (if then → would now) is a C1 nuance, not required in this table.",
      "Mixtos (pasado→presente) son matiz C1.",
      "Gemischte (dann→jetzt) sind C1-Nuance.",
    ),
    pairs: [
      p("Si llueve, me quedo.", "Si lloviera, me quedaría.", "если реально vs если бы сейчас", "if it’s real vs if it were now", "si es real vs si fuera ahora", "wenn es real ist vs. wenn es jetzt so wäre"),
      p("Si hubiera llovido, me habría quedado.", "Si lloviera, me habría quedado.", "оба в прошлом vs смешанное условие", "both in the past vs a mixed condition", "ambos en el pasado vs mixto", "beide in der Vergangenheit vs. gemischt"),
    ],
  },
  "b2-relativos-avanzado": {
    here: t(
      "el cual, lo que, cuyo в формальном письме — без новой глагольной системы.",
      "el cual, lo que, cuyo in formal writing — no new verb system.",
      "el cual, lo que, cuyo en registro formal.",
      "el cual, lo que, cuyo im formellen Register.",
    ),
    later: t(
      "que / quien базовые — тема B1 относительные.",
      "Basic que / quien is the B1 relative topic.",
      "que / quien básicos — tema B1.",
      "Grundlegendes que / quien — B1-Thema.",
    ),
    pairs: [
      p("lo que necesito", "el que necesito", "«то, что…» (идея) vs «тот, который…»", "“what / that which…” vs “the one who/which…”", "lo que (idea) vs el que (concreto)", "lo que (Idee) vs. el que (konkret)"),
    ],
  },
  "b2-conectores": {
    here: t(
      "словарь связок для текста (sin embargo, por lo tanto) + какие тянут subjuntivo.",
      "linker vocabulary (sin embargo, por lo tanto) + which ones take subjunctive.",
      "inventario de conectores + cuáles llevan subjuntivo.",
      "Konnektor-Wortschatz + welche den Subjuntivo brauchen.",
    ),
    later: t(
      "Скелет эссе DELE (4 абзаца, объём слов) — тема «DELE: коннекторы для эссе», не этот список.",
      "The DELE essay skeleton (4 paragraphs, word count) is the DELE connectors topic.",
      "El esqueleto DELE es el otro tema DELE.",
      "Das DELE-Gerüst ist das andere DELE-Thema.",
    ),
    pairs: [
      p("pero", "sin embargo", "в речи vs в письме", "in speech vs in writing", "en la habla vs por escrito", "mündlich vs. schriftlich"),
      p("Estudia para que aprenda.", "Estudia para aprender.", "другое лицо → para que… / то же лицо → para + инфинитив", "different person → para que… / same person → para + infinitive", "otra persona → para que… / la misma → para + inf", "andere Person → para que… / dieselbe → para + Inf."),
    ],
  },
  "dele-conectores-redaccion": {
    here: t(
      "DELE B2 сочинение: скелет, объём, где в мнении subjuntivo. Список связок уже в теме B2.",
      "DELE B2 essay: skeleton, word count, where opinion takes subjunctive. Linker list is the B2 topic.",
      "DELE B2 ensayo: esqueleto y volumen. La lista está en el tema B2.",
      "DELE B2 Aufsatz: Gerüst und Umfang. Die Liste steht im B2-Thema.",
    ),
    later: t(
      "Не учим заново sin embargo — только как вставить в абзац экзамена.",
      "Don’t re-learn sin embargo — only how it sits in an exam paragraph.",
      "No reaprender sin embargo — solo cómo va en el párrafo.",
      "sin embargo nicht neu lernen — nur im Prüfungsabsatz platzieren.",
    ),
    pairs: [
      p("Creo que es útil.", "No creo que sea útil.", "«думаю, что…» vs «не думаю, что…»", "“I think that…” vs “I don’t think that…”", "creo que… vs no creo que…", "ich glaube, dass… vs. ich glaube nicht, dass…"),
      p("De ahí que sea…", "Por lo tanto es…", "De ahí que… почти всегда сослагательное", "De ahí que… almost always takes subjunctive", "De ahí que… casi siempre subjuntivo", "De ahí que… fast immer Subjuntivo"),
    ],
  },
  "dele-expresion-oral": {
    here: t(
      "DELE устно B2: фото, гипотезы, согласие. Futuro de conjetura как живая речь.",
      "DELE speaking B2: photo, hypotheses, agreement. Conjecture future as live speech.",
      "DELE oral B2: foto, hipótesis, acuerdo.",
      "DELE mündlich B2: Foto, Hypothesen, Zustimmung.",
    ),
    later: t(
      "Полная теория «наверное» — C2 догадка; здесь только фразы для монолога.",
      "Full “probably” theory is C2 conjecture; here only monologue phrases.",
      "La teoría completa es C2; aquí frases para el monólogo.",
      "Die volle Theorie ist C2; hier nur Monolog-Phrasen.",
    ),
    pairs: [
      p("Es su madre.", "Será su madre.", "уверен vs «наверное…» по фото", "sure vs “probably…” about the photo", "seguro vs «probablemente…» en la foto", "sicher vs. «wahrscheinlich…» zum Foto"),
      p("Estoy de acuerdo.", "No creo que sea así.", "согласен vs не согласен (меняется форма)", "I agree vs I disagree (form changes)", "de acuerdo vs no estoy de acuerdo", "einverstanden vs. nicht einverstanden"),
    ],
  },

  // ----- Spanish C1 -------------------------------------------------
  "c1-perifrasis-verbales": {
    here: t(
      "acabar de, llevar + gerundio, deber vs deber de — готовые связки, не новые времена.",
      "acabar de, llevar + gerund, deber vs deber de — set phrases, not new tenses.",
      "perífrasis hechas, no tiempos nuevos.",
      "fertige Perífrasis, keine neuen Zeiten.",
    ),
    later: t(
      "ir a + inf уже A2. Не начинаем с Voy a как «новую C1».",
      "ir a + inf is already A2. Don’t present Voy a as new C1.",
      "ir a + inf ya es A2.",
      "ir a + inf ist schon A2.",
    ),
    pairs: [
      p("Acabo de llegar.", "Llevo dos horas esperando.", "только что vs уже столько жду", "just now vs I’ve been waiting this long", "acabo de vs llevo… esperando", "gerade eben vs. ich warte schon so lange"),
      p("Debe estudiar.", "Debe de ser tarde.", "должен (обязанность) vs наверное", "must (duty) vs probably", "debe (obligación) vs debe de (probabilidad)", "muss (Pflicht) vs. wahrscheinlich"),
    ],
  },
  "c1-matices-estilisticos": {
    here: t(
      "уместность и регистр (tú/usted, вежливость). Не спряжение.",
      "appropriateness and register (tú/usted, politeness). Not conjugation.",
      "adecuación y registro. No conjugación.",
      "Angemessenheit und Register. Keine Konjugation.",
    ),
    later: t(
      "aunque llueve/llueva — тема «Subjuntivo: тонкие случаи». Три si — тема B2.",
      "aunque llueve/llueva is “Advanced subjunctive”. Three si-clauses are B2.",
      "aunque llueve/llueva — subjuntivo avanzado. Tres si — B2.",
      "aunque llueve/llueva — Subjuntivo fein. Drei si — B2.",
    ),
    pairs: [
      p("¿Puedes abrir?", "¿Te importaría abrir?", "прямо vs мягче / вежливее", "direct vs softer / more polite", "directo vs más cortés", "direkt vs. höflicher"),
      p("¿Qué tal?", "¿Cómo está usted?", "на «ты» vs на «вы»", "tú vs usted", "tú vs usted", "du vs. Sie"),
    ],
  },
  "c1-subjuntivo-avanzado": {
    here: t(
      "aunque / donde / como / busco a alguien que — факт vs гипотеза.",
      "aunque / donde / como / busco a alguien que — fact vs hypothesis.",
      "aunque / donde / como — hecho vs hipótesis.",
      "aunque / donde / como — Fakt vs. Hypothese.",
    ),
    later: t(
      "Образование hable / hablara — B1. Не повторяем таблицы.",
      "Formation of hable / hablara is B1. No tables again.",
      "La formación es B1. Sin tablas otra vez.",
      "Die Bildung ist B1. Keine Tabellen nochmal.",
    ),
    pairs: [
      p("Aunque llueve, salgo.", "Aunque llueva, saldré.", "хотя идёт дождь (факт) vs даже если пойдёт", "although it’s raining (fact) vs even if it rains", "aunque llueve (hecho) vs aunque llueva", "obwohl es regnet vs. selbst wenn es regnet"),
      p("Busco a alguien que habla ruso.", "Busco a alguien que hable ruso.", "знаю, что такой есть vs ищу кого угодно", "I know such a person exists vs I’m looking for anyone", "sé que existe vs busco a cualquiera", "ich weiß, dass es so jemanden gibt vs. ich suche irgendwen"),
    ],
  },
  "c1-indirecto-avanzado": {
    here: t(
      "полная таблица сдвига + hoy → aquel día, вопросы и приказы.",
      "full backshift table + hoy → aquel día, questions and commands.",
      "tabla completa + hoy → aquel día.",
      "volle Verschiebungstabelle + hoy → aquel día.",
    ),
    later: t(
      "Базовый dijo que + сдвиг — B2 estilo indirecto.",
      "Basic dijo que + shift is B2 reported speech.",
      "El dijo que básico es B2.",
      "Das einfache dijo que ist B2.",
    ),
    pairs: [
      p("Hoy vengo.", "Dijo que aquel día venía.", "«сегодня» при пересказе → «в тот день»", "“today” becomes “that day” when retelling", "«hoy» al contar → «aquel día»", "«heute» beim Erzählen → «an jenem Tag»"),
    ],
  },
  "c1-pronombres-avanzado": {
    here: t(
      "lo bueno; a María la veo; leísmo vs норма lo.",
      "lo bueno; a María la veo; leísmo vs standard lo.",
      "lo bueno; duplicación; leísmo vs lo.",
      "lo bueno; Verdopplung; leísmo vs lo.",
    ),
    later: t(
      "lo/le/se lo базовые — B1 безударные местоимения.",
      "Basic lo/le/se lo is B1 object pronouns.",
      "lo/le/se lo básicos — B1.",
      "Grundlegendes lo/le/se lo — B1.",
    ),
    pairs: [
      p("La veo a María.", "Le veo a María.", "норма (ж.р. lo/la) vs leísmo", "standard vs leísmo", "norma vs leísmo", "Norm vs. Leísmo"),
    ],
  },
  "c1-ser-estar-avanzado": {
    here: t(
      "пары смысла (es listo / está listo), без таблиц soy/estoy.",
      "meaning pairs (es listo / está listo), no soy/estoy tables.",
      "pares de sentido, sin tablas soy/estoy.",
      "Bedeutungspaare, keine soy/estoy-Tabellen.",
    ),
    later: t(
      "Кто ты vs как сейчас — тема A1 ser/estar.",
      "Who you are vs how you are now is A1 ser/estar.",
      "Quién eres vs cómo estás es A1.",
      "Wer du bist vs. wie du bist ist A1.",
    ),
    pairs: [
      p("Es listo.", "Está listo.", "умный vs готов", "clever vs ready", "inteligente vs preparado", "klug vs. fertig"),
      p("Es aburrido.", "Está aburrido.", "скучный (какой) vs ему скучно", "boring vs bored", "aburrido de carácter vs ahora", "langweilig vs. gelangweilt"),
      p("El pan es rico.", "El pan está fresco.", "качество сорта vs состояние сейчас", "inherent quality vs state now", "cualidad vs estado", "Eigenschaft vs. Zustand"),
    ],
  },

  // ----- Spanish C2 -------------------------------------------------
  "c2-ironia-registry": {
    here: t(
      "ирония и переключение регистра. Формы известны.",
      "irony and register-switching. Forms are known.",
      "ironía y cambio de registro. Las formas ya se saben.",
      "Ironie und Registerwechsel. Formen sind bekannt.",
    ),
    later: t(
      "tú/usted таблицы — C1 регистр. Здесь прагматика.",
      "tú/usted tables are C1 register. Here: pragmatics.",
      "tú/usted es C1. Aquí pragmática.",
      "tú/usted ist C1. Hier Pragmatik.",
    ),
    pairs: [
      p("¡Qué bien!", "¡Qué bien…! (ironia)", "буквально vs наоборот", "literal vs ironic", "literal vs irónico", "wörtlich vs. ironisch"),
    ],
  },
  "c2-oraciones-hendidas": {
    here: t(
      "fue Juan quien… / lo que necesito es… — фокус, не новое время.",
      "fue Juan quien… / lo que necesito es… — focus, not a new tense.",
      "hendidas — foco, no tiempo nuevo.",
      "Spaltsätze — Fokus, keine neue Zeit.",
    ),
    later: t(
      "lo que как относительное — B2. Здесь эмфаза.",
      "lo que as a relative is B2. Here: emphasis.",
      "lo que relativo es B2. Aquí énfasis.",
      "lo que als Relativ ist B2. Hier Emphase.",
    ),
    pairs: [
      p("Juan lo hizo.", "Fue Juan quien lo hizo.", "нейтрально vs фокус на Juan", "neutral vs focus on Juan", "neutro vs foco", "neutral vs. Fokus auf Juan"),
    ],
  },
  "c2-conjetura-rumor": {
    here: t(
      "serán ≈ наверное; habría ≈ по слухам. Не будущее-план A2.",
      "serán ≈ probably; habría ≈ rumor. Not A2 future-as-plan.",
      "serán ≈ probablemente; habría ≈ rumor. No el futuro-plan A2.",
      "serán ≈ wahrscheinlich; habría ≈ Gerücht. Nicht A2-Zukunftsplan.",
    ),
    later: t(
      "hablaré завтра — A2 Futuro simple.",
      "hablaré tomorrow is A2 simple future.",
      "hablaré mañana es A2.",
      "hablaré morgen ist A2.",
    ),
    pairs: [
      p("Mañana serán las diez cuando llegue.", "Serán las diez (ahora).", "завтра к десяти vs «сейчас, наверное, десять»", "tomorrow by ten vs “it’s probably ten now”", "mañana a las diez vs «ahora serán las diez»", "morgen um zehn vs. «es sind wohl zehn»"),
      p("Habrá mil personas.", "Habría mil personas.", "полагаю vs «говорят / якобы»", "I guess vs “they say / allegedly”", "supongo vs «se dice / habría…»", "ich vermute vs. «man sagt / angeblich»"),
    ],
  },
  "c2-estilo-culto": {
    here: t(
      "C2 письменный: terminada la reunión…, номинализация. Не для чата.",
      "C2 written: terminada la reunión…, nominalisation. Not for chat.",
      "C2 escrito: absolutas y nominalización. No para el chat.",
      "C2 schriftlich: Absolutkonstruktionen. Nicht fürs Chat.",
    ),
    later: t(
      "Обычные придаточные когда — B1. Здесь сжатый книжный стиль.",
      "Ordinary when-clauses are B1. Here: compressed written style.",
      "Las subordinadas normales son B1.",
      "Normale Nebensätze sind B1.",
    ),
    pairs: [
      p("Cuando terminó la reunión, nos fuimos.", "Terminada la reunión, nos fuimos.", "как в речи vs коротко «по-книжному»", "as in speech vs short “bookish” style", "como se habla vs estilo culto breve", "wie man spricht vs. knapper Bildungston"),
    ],
  },
};

export const GRAMMAR_LEVEL_FRAMES: Record<string, GrammarLevelFrame> = {
  ...SPANISH_LEVEL_FRAMES,
  ...ENGLISH_LEVEL_FRAMES,
};

const PAIR_HEAD: I18n = {
  ru: "В чём разница",
  en: "What's the difference",
  es: "En qué se diferencian",
  de: "Worin liegt der Unterschied",
};

export function renderGrammarLevelFrame(
  slug: string,
  lang: InterfaceLanguage,
): string | null {
  const frame = GRAMMAR_LEVEL_FRAMES[slug];
  if (!frame) return null;
  const rows = frame.pairs
    .map(
      (pair) =>
        `| \`${pair.left}\` | \`${pair.right}\` | ${pair.diff[lang]} |`,
    )
    .join("\n");
  return `## ${L.pairs[lang]}

> **${L.here[lang]}:** ${frame.here[lang]}
> **${L.later[lang]}:** ${frame.later[lang]}

| | | ${PAIR_HEAD[lang]} |
|---|---|---|
${rows}
`;
}

/** Append CEFR boundary + pairs after the article so «Путь» and ## rules stay first. */
export function withGrammarLevelFrame(
  slug: string,
  lang: InterfaceLanguage,
  body: string,
): string {
  const block = renderGrammarLevelFrame(slug, lang);
  if (!block) return body;
  if (body.includes(`## ${L.pairs[lang]}`)) return body;
  return `${body.trim()}\n\n${block}`;
}
