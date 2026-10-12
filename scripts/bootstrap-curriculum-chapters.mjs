#!/usr/bin/env node
/**
 * Bootstrap 15 curriculum chapters (grammar topics that were reference-only),
 * their story JSON files, and curated exercise banks.
 *
 * Run: node scripts/bootstrap-curriculum-chapters.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @type {Array<{slug:string,grammarTopic:string,number:number,level:string,title:string,titleEs:string,location:string,icon:string,summary:string,vocabTopic:string,exerciseTypes:string[],estimatedMinutes:number,prereqChapter:string,story:{ru:string,en:string,es:string,de:string},exercises:object[]}>} */
const CHAPTERS = [
  {
    slug: "chapter-31-verbos-frecuentes",
    grammarTopic: "a1-verbos-frecuentes",
    number: 10,
    level: "A1",
    title: "Карта частых глаголов",
    titleEs: "El Mapa de los Verbos",
    location: "Картографическая комната",
    icon: "🗺️",
    summary: "Частые неправильные глаголы: ir, tener, hacer, poder, querer, decir.",
    vocabTopic: "a1-verbos-basicos",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "sentence_building"],
    estimatedMinutes: 9,
    prereqChapter: "chapter-20-preguntas",
    story: {
      ru: "В картографической комнате академии висит карта — не стран, а глаголов. Каждый маршрут начинается с ir, tener или hacer. Гиппогриф просит назвать форму, прежде чем открыть следующую дорогу.",
      en: "In the academy's map room hangs a chart — not of countries, but of verbs. Every route starts with ir, tener, or hacer. The hippogriff asks for the right form before opening the next path.",
      es: "En la sala de mapas cuelga un plano — no de países, sino de verbos. Cada ruta empieza con ir, tener o hacer. El hipogrifo pide la forma correcta antes de abrir el siguiente camino.",
      de: "Im Kartenzimmer hängt eine Karte — nicht von Ländern, sondern von Verben. Jede Route beginnt mit ir, tener oder hacer. Der Hippogriff verlangt die richtige Form, bevor der nächste Weg öffnet.",
    },
    exercises: [
      { type: "multiple_choice", question: "Yo ___ al mercado los sábados.", instruction: "Выберите форму ir", options: ["voy", "vas", "va", "van"], answer: "voy", explanation: "Yo → voy (ir — неправильный глагол).", grammarTopic: "verbos-frecuentes" },
      { type: "fill_blank", question: "¿Qué ___ hacer hoy?", instruction: "Поставьте querer (tú)", answer: "quieres", acceptableAnswers: ["Quieres"], explanation: "Querer: yo quiero, tú quieres, él quiere.", grammarTopic: "verbos-frecuentes" },
      { type: "multiple_choice", question: "No ___ decir la verdad.", instruction: "Выберите poder (yo)", options: ["puedo", "puede", "podemos", "pueden"], answer: "puedo", explanation: "Yo no puedo — poder o→ue в настоящем.", grammarTopic: "verbos-frecuentes" },
      { type: "translation", question: "У меня есть два брата.", instruction: "Переведите с tener", answer: "Tengo dos hermanos", acceptableAnswers: ["tengo dos hermanos"], explanation: "Tener для «у меня есть»: Tengo dos hermanos.", grammarTopic: "verbos-frecuentes" },
      { type: "fill_blank", question: "Ella ___ la comida en casa.", instruction: "Поставьте hacer (ella)", answer: "hace", acceptableAnswers: ["Hace"], explanation: "Hacer: yo hago, tú haces, él/ella hace.", grammarTopic: "verbos-frecuentes" },
      { type: "sentence_building", question: "¿ / Qué / dices / tú / ?", options: ["¿", "Qué", "dices", "tú", "?"], answer: "¿Qué dices tú?", instruction: "Соберите вопрос «Что ты говоришь?»", explanation: "Decir: yo digo, tú dices. ¿Qué dices?", grammarTopic: "verbos-frecuentes" },
    ],
  },
  {
    slug: "chapter-32-pronombre-se",
    grammarTopic: "b1-pronombre-se",
    number: 19,
    level: "B1",
    title: "Зеркальный зал",
    titleEs: "La Sala de los Espejos",
    location: "Зеркальный зал Севильи",
    icon: "🪞",
    summary: "Местоимение se — пять значений: возвратное, взаимное, безличное, пассивное, «случайно».",
    vocabTopic: "b1-sociedad",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-13-condicional",
    story: {
      ru: "В зеркальном зале каждое отражение повторяет se — se levanta, se abraza, se habla. Гиппогриф просит отличить возвратное от безличного, прежде чем выйти из лабиринта.",
      en: "In the hall of mirrors every reflection repeats se — se levanta, se abraza, se habla. The hippogriff asks you to tell reflexive from impersonal before you leave the maze.",
      es: "En la sala de espejos cada reflejo repite se — se levanta, se abraza, se habla. El hipogrifo pide distinguir reflexivo de impersonal antes de salir del laberinto.",
      de: "Im Spiegelsaal wiederholt jedes Bild se — se levanta, se abraza, se habla. Der Hippogriff verlangt, Reflexiv und unpersönlich zu unterscheiden.",
    },
    exercises: [
      { type: "multiple_choice", question: "___ habla español en esta región.", instruction: "Вставьте нужное слово в начало", options: ["Se", "Me", "Te", "Le"], answer: "Se", explanation: "Se habla español — «здесь говорят по-испански».", grammarTopic: "pronombre-se" },
      { type: "fill_blank", question: "María ___ levanta a las siete.", instruction: "Вставьте пропущенное слово", answer: "se", acceptableAnswers: ["Se"], explanation: "María se levanta — встаёт (действие на себя).", grammarTopic: "pronombre-se" },
      { type: "multiple_choice", question: "«Se me rompió el vaso» выражает…", instruction: "Что передаёт эта конструкция?", options: ["случайность", "приказ", "будущее", "сравнение"], answer: "случайность", explanation: "Se me rompió — «у меня разбился» (не специально).", grammarTopic: "pronombre-se" },
      { type: "translation", question: "Здесь продаются книги.", instruction: "Переведите на испанский", answer: "Se venden libros aquí", acceptableAnswers: ["se venden libros aquí", "Aquí se venden libros"], explanation: "Se venden libros — «книги продаются».", grammarTopic: "pronombre-se" },
      { type: "error_correction", question: "Se vende casas en el centro.", instruction: "Исправьте согласование", answer: "Se venden casas en el centro.", acceptableAnswers: ["Se venden casas en el centro"], explanation: "Casas — мн.ч. → se venden.", grammarTopic: "pronombre-se" },
      { type: "fill_blank", question: "Ana y Luis ___ ven cada día.", instruction: "Вставьте пропущенное слово", answer: "se", acceptableAnswers: ["Se"], explanation: "Se ven = видят друг друга.", grammarTopic: "pronombre-se" },
      { type: "translation", question: "Она встаёт в семь часов.", instruction: "Переведите на испанский", answer: "Se levanta a las siete", acceptableAnswers: ["Ella se levanta a las siete"], explanation: "Levantarse → se levanta.", grammarTopic: "pronombre-se" },
      { type: "translation", question: "Я забыл имя (случайно).", instruction: "Переведите на испанский", answer: "Se me olvidó el nombre", acceptableAnswers: ["Se me olvidó el nombre."], explanation: "Se me olvidó — «у меня забылось».", grammarTopic: "pronombre-se" },
      { type: "sentence_building", question: "Se / habla / español / aquí", options: ["Se", "habla", "español", "aquí"], answer: "Se habla español aquí", acceptableAnswers: ["Se habla español aquí."], explanation: "Безличное: Se habla…", grammarTopic: "pronombre-se" },
      { type: "sentence_building", question: "Se / me / cayó / el / vaso", options: ["Se", "me", "cayó", "el", "vaso"], answer: "Se me cayó el vaso", acceptableAnswers: ["Se me cayó el vaso."], explanation: "Случайно выпал: Se me cayó…", grammarTopic: "pronombre-se" },
    ],
  },
  {
    slug: "chapter-33-relativos",
    grammarTopic: "b1-relativos",
    number: 20,
    level: "B1",
    title: "Нити истории",
    titleEs: "Los Hilos de la Historia",
    location: "Архив рассказов",
    icon: "🧵",
    summary: "Относительные местоимения: que, quien, lo que, cuyo, donde — связка двух фраз.",
    vocabTopic: "b1-educacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "sentence_building"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-32-pronombre-se",
    story: {
      ru: "В архиве каждая история — две фразы, связанные ниткой que. Архивариус учит: quien для людей, lo que для идей, donde для мест.",
      en: "In the archive every tale is two sentences tied by que. The keeper teaches: quien for people, lo que for ideas, donde for places.",
      es: "En el archivo cada historia son dos frases unidas por que. El archivero enseña: quien para personas, lo que para ideas, donde para lugares.",
      de: "Im Archiv ist jede Geschichte zwei Sätze, verbunden durch que. Der Archivar lehrt: quien für Personen, lo que für Ideen, donde für Orte.",
    },
    exercises: [
      { type: "multiple_choice", question: "La mujer ___ habla es mi profesora.", instruction: "Относительное местоимение", options: ["que", "quien", "cuyo", "donde"], answer: "que", explanation: "Que — универсальное относительное местоимение.", grammarTopic: "relativos" },
      { type: "fill_blank", question: "El chico ___ padre es médico estudia mucho.", instruction: "Притяжательное относительное", answer: "cuyo", acceptableAnswers: ["Cuyo"], explanation: "Cuyo = чей (cuyo padre).", grammarTopic: "relativos" },
      { type: "multiple_choice", question: "___ me gusta es la libertad.", instruction: "Lo que / que", options: ["Lo que", "La que", "El que", "Donde"], answer: "Lo que", explanation: "Lo que = «то, что» (абстрактное).", grammarTopic: "relativos" },
      { type: "translation", question: "Это дом, где я вырос.", instruction: "Переведите с donde", answer: "Es la casa donde crecí", acceptableAnswers: ["es la casa donde crecí"], explanation: "Donde = где (относительное).", grammarTopic: "relativos" },
      { type: "sentence_building", question: "El / libro / que / leí / es / interesante", options: ["El", "libro", "que", "leí", "es", "interesante"], answer: "El libro que leí es interesante", instruction: "Соберите фразу с que", explanation: "El libro que leí — «книга, которую я прочитал».", grammarTopic: "relativos" },
      { type: "fill_blank", question: "Conozco a alguien ___ sabe ruso.", instruction: "Quien / que", answer: "que", acceptableAnswers: ["Que", "quien", "Quien"], explanation: "После alguien часто que; quien тоже возможен для людей.", grammarTopic: "relativos" },
    ],
  },
  {
    slug: "chapter-34-pluscuamperfecto",
    grammarTopic: "b1-pluscuamperfecto",
    number: 21,
    level: "B1",
    title: "Два слоя прошлого",
    titleEs: "Dos Capas del Pasado",
    location: "Часовая башня",
    icon: "⏳",
    summary: "Pluscuamperfecto — «уже было до того»: había comido, cuando llegaste.",
    vocabTopic: "b1-educacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-33-relativos",
    story: {
      ru: "На часовой башне два циферблата: один — «когда ты пришёл», другой — «что уже случилось раньше». Отвечать можно только в pluscuamperfecto.",
      en: "The clock tower has two faces: one for when you arrived, one for what had already happened. Answer only in the pluscuamperfecto.",
      es: "La torre tiene dos esferas: una para cuando llegaste, otra para lo que ya había pasado. Responde solo en pluscuamperfecto.",
      de: "Der Uhrturm hat zwei Zifferblätter: wann du kamst, und was schon passiert war. Antworte nur im Pluscuamperfecto.",
    },
    exercises: [
      { type: "multiple_choice", question: "Cuando llegué, ya ___ (comer).", instruction: "Pluscuamperfecto", options: ["había comido", "he comido", "comí", "comía"], answer: "había comido", explanation: "Действие раньше другого в прошлом → había + participio.", grammarTopic: "pluscuamperfecto" },
      { type: "fill_blank", question: "Ya ___ (salir) cuando llamaste.", instruction: "Salir → participio", answer: "había salido", acceptableAnswers: ["Había salido"], explanation: "Salir → salido: había salido.", grammarTopic: "pluscuamperfecto" },
      { type: "translation", question: "Она уже прочитала книгу, когда я пришёл.", instruction: "Pluscuamperfecto", answer: "Ya había leído el libro cuando llegué", acceptableAnswers: ["ya había leído el libro cuando llegué"], explanation: "Había leído — «уже прочитала (до того)».", grammarTopic: "pluscuamperfecto" },
      { type: "error_correction", question: "Cuando llegué, ya he comido.", instruction: "Исправьте время", answer: "Cuando llegué, ya había comido.", acceptableAnswers: ["Cuando llegué, ya había comido"], explanation: "Оба события в прошлом → pluscuamperfecto, не perfecto.", grammarTopic: "pluscuamperfecto" },
      { type: "multiple_choice", question: "Pluscuamperfecto = ___ + participio", instruction: "Формула", options: ["había/habías/había…", "he/has/ha…", "hube/hubiste…", "habré/habrás…"], answer: "había/habías/había…", explanation: "Imperfecto de haber + participio.", grammarTopic: "pluscuamperfecto" },
      { type: "fill_blank", question: "Nunca ___ (ver) esa película antes de ayer.", instruction: "Ver → participio", answer: "había visto", acceptableAnswers: ["Había visto"], explanation: "Ver → visto: había visto.", grammarTopic: "pluscuamperfecto" },
    ],
  },
  {
    slug: "chapter-35-subjuntivo-imperfecto",
    grammarTopic: "b1-subjuntivo-imperfecto",
    number: 22,
    level: "B1",
    title: "Если бы в прошлом",
    titleEs: "Si en el Pasado",
    location: "Сад «что могло быть»",
    icon: "🌿",
    summary: "Imperfecto de Subjuntivo — «если бы» и желания в прошлом: si tuviera, quería que vinieras.",
    vocabTopic: "b1-opiniones",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-34-pluscuamperfecto",
    story: {
      ru: "В саду растут ветви «если бы»: каждый лист — si + subjuntivo imperfecto. Садовник шепчет: quería que…, ojalá…, si tuviera…",
      en: "In the garden grow branches of what-if: every leaf is si + imperfect subjunctive. The gardener whispers: quería que…, ojalá…, si tuviera…",
      es: "En el jardín crecen ramas del «si hubiera»: cada hoja es si + subjuntivo imperfecto. El jardinero susurra: quería que…, ojalá…, si tuviera…",
      de: "Im Garten wachsen «wenn ich hätte»-Zweige: si + Imperfekt Subjuntivo. Der Gärtner flüstert: quería que…, ojalá…, si tuviera….",
    },
    exercises: [
      { type: "multiple_choice", question: "Si ___ (tener) dinero, viajaría.", instruction: "Subjuntivo imperfecto", options: ["tuviera", "tengo", "tendré", "tuve"], answer: "tuviera", explanation: "Si + subj. imperf. + condicional: нереальное условие.", grammarTopic: "subjuntivo-imperfecto" },
      { type: "fill_blank", question: "Quería que ___ (venir) a la fiesta.", instruction: "Venir → subjuntivo", answer: "vinieras", acceptableAnswers: ["Vinieras", "viniese"], explanation: "Quería que + subjuntivo: vinieras/viniese.", grammarTopic: "subjuntivo-imperfecto" },
      { type: "translation", question: "Если бы я знал, я бы позвонил.", instruction: "Si + subj. + condicional", answer: "Si lo supiera, llamaría", acceptableAnswers: ["si lo supiera, llamaría"], explanation: "Si lo supiera, llamaría — классическая пара.", grammarTopic: "subjuntivo-imperfecto" },
      { type: "error_correction", question: "Si tengo tiempo, iría.", instruction: "Исправьте si-клаузу", answer: "Si tuviera tiempo, iría.", acceptableAnswers: ["Si tuviera tiempo, iría"], explanation: "Нереальное условие → subjuntivo imperfecto.", grammarTopic: "subjuntivo-imperfecto" },
      { type: "multiple_choice", question: "Ojalá ___ (lluvia) mañana.", instruction: "Ojalá + subjuntivo", options: ["llueva", "llueve", "llovió", "lloverá"], answer: "llueva", explanation: "Ojalá + subjuntivo (presente или imperfecto).", grammarTopic: "subjuntivo-imperfecto" },
      { type: "fill_blank", question: "Si ___ (ser) más joven, correría más.", instruction: "Ser → subj. imperf.", answer: "fuera", acceptableAnswers: ["Fuera", "fuese"], explanation: "Ser → fuera/fuese en subjuntivo imperfecto.", grammarTopic: "subjuntivo-imperfecto" },
    ],
  },
  {
    slug: "chapter-36-pronombres-objetos",
    grammarTopic: "b1-pronombres-objetos",
    number: 23,
    level: "B1",
    title: "Маленькие слова",
    titleEs: "Las Palabras Pequeñas",
    location: "Лингвистическая мастерская",
    icon: "🔤",
    summary: "Прямое и косвенное дополнение: lo/la = «это», le = «ему/ей», se lo (не le lo).",
    vocabTopic: "b1-medios",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-35-subjuntivo-imperfecto",
    story: {
      ru: "В мастерской слова-lo, la, le, se — крошечные, но меняют смысл целых фраз. Мастер учит: se lo, никогда le lo.",
      en: "In the workshop lo, la, le, se are tiny but reshape whole sentences. The master teaches: se lo, never le lo.",
      es: "En el taller lo, la, le, se son pequeños pero cambian frases enteras. El maestro enseña: se lo, nunca le lo.",
      de: "In der Werkstatt sind lo, la, le, se winzig, aber formen ganze Sätze. Meisterregel: se lo, nie le lo.",
    },
    exercises: [
      { type: "multiple_choice", question: "¿Ves el libro? — Sí, ___ veo.", instruction: "OD lo/la", options: ["lo", "le", "se", "la"], answer: "lo", explanation: "El libro (м.р.) → lo veo.", grammarTopic: "pronombres-objetos" },
      { type: "fill_blank", question: "Le doy el regalo → ___ doy el regalo.", instruction: "Замените le + OD", answer: "Se lo", acceptableAnswers: ["se lo", "Se lo doy"], explanation: "Le + lo → se lo (не le lo).", grammarTopic: "pronombres-objetos" },
      { type: "translation", question: "Я её вижу каждый день.", instruction: "OD местоимение", answer: "La veo cada día", acceptableAnswers: ["la veo cada día"], explanation: "La = её (прямое дополнение).", grammarTopic: "pronombres-objetos" },
      { type: "error_correction", question: "Le lo digo la verdad.", instruction: "Исправьте местоимения", answer: "Se lo digo.", acceptableAnswers: ["Se lo digo", "Se lo digo la verdad."], explanation: "Le lo → se lo.", grammarTopic: "pronombres-objetos" },
      { type: "multiple_choice", question: "¿___ escribes a María?", instruction: "OI le", options: ["Le", "Lo", "La", "Se"], answer: "Le", explanation: "A María → le escribes (косвенное).", grammarTopic: "pronombres-objetos" },
      { type: "fill_blank", question: "No ___ (entender) — habla más despacio.", instruction: "OD «это»", answer: "lo", acceptableAnswers: ["Lo"], explanation: "No lo entiendo — «не понимаю (это)».", grammarTopic: "pronombres-objetos" },
    ],
  },
  {
    slug: "chapter-37-adverbios",
    grammarTopic: "b1-adverbios",
    number: 24,
    level: "B1",
    title: "Оттенки речи",
    titleEs: "Matices del Habla",
    location: "Палитра слов",
    icon: "🎨",
    summary: "Наречия: rápidamente (-mente), muy vs mucho; quizás + subjuntivo.",
    vocabTopic: "b1-sociedad",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "sentence_building"],
    estimatedMinutes: 9,
    prereqChapter: "chapter-36-pronombres-objetos",
    story: {
      ru: "На палитре — не цвета, а наречия: rápidamente, lentamente, probablemente. Художник учит: muy + прилагательное, mucho + глагол.",
      en: "On the palette — not colors but adverbs: rápidamente, lentamente, probablemente. The painter teaches: muy + adjective, mucho + verb.",
      es: "En la paleta — no colores sino adverbios: rápidamente, lentamente, probablemente. El pintor enseña: muy + adjetivo, mucho + verbo.",
      de: "Auf der Palette — Adverbien: rápidamente, lentamente. Regel: muy + Adjektiv, mucho + Verb.",
    },
    exercises: [
      { type: "multiple_choice", question: "Habla muy ___.", instruction: "Muy + adjetivo", options: ["rápido", "rápidamente", "mucho", "muy"], answer: "rápido", explanation: "Muy + прилагательное (rápido), не наречие.", grammarTopic: "adverbios" },
      { type: "fill_blank", question: "Corre ___ (lento).", instruction: "-mente от lento", answer: "lentamente", acceptableAnswers: ["Lentamente"], explanation: "Lento → lentamente (-mente).", grammarTopic: "adverbios" },
      { type: "multiple_choice", question: "Quizás ___ (llover) mañana.", instruction: "Quizás + subjuntivo", options: ["llueva", "llueve", "llovió", "lloverá"], answer: "llueva", explanation: "Quizás + subjuntivo.", grammarTopic: "adverbios" },
      { type: "translation", question: "Он работает много.", instruction: "Mucho + глагол", answer: "Trabaja mucho", acceptableAnswers: ["trabaja mucho"], explanation: "Mucho с глаголом — «много (делает)».", grammarTopic: "adverbios" },
      { type: "sentence_building", question: "Es / una / persona / muy / amable", options: ["Es", "una", "persona", "muy", "amable"], answer: "Es una persona muy amable", instruction: "Соберите фразу с muy", explanation: "Muy amable — «очень добрый».", grammarTopic: "adverbios" },
      { type: "fill_blank", question: "___ (probable) llegará tarde.", instruction: "Наречие «вероятно»", answer: "Probablemente", acceptableAnswers: ["probablemente"], explanation: "Probable → probablemente.", grammarTopic: "adverbios" },
    ],
  },
  {
    slug: "chapter-38-subjuntivo-compuestos",
    grammarTopic: "b2-subjuntivo-compuestos",
    number: 23,
    level: "B2",
    title: "Субъунктив в совершенном",
    titleEs: "Subjuntivo Compuesto",
    location: "Зал времени",
    icon: "⌛",
    summary: "Subjuntivo compuesto — haya hablado, hubiera hablado (то же правило, другое время).",
    vocabTopic: "b2-argumentacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 11,
    prereqChapter: "chapter-15-voz-pasiva",
    story: {
      ru: "В зале времени subjuntivo уже завершён: haya hablado, hubiera ido. Страж просит выбрать форму, когда одно действие предшествует другому в субъективной реальности.",
      en: "In the hall of time the subjunctive is already complete: haya hablado, hubiera ido. Choose the form when one action precedes another in subjective reality.",
      es: "En la sala del tiempo el subjuntivo ya está compuesto: haya hablado, hubiera ido. Elige la forma cuando una acción precede a otra.",
      de: "Im Zeitsaal ist der Subjuntivo compuesto: haya hablado, hubiera ido.",
    },
    exercises: [
      { type: "multiple_choice", question: "Es posible que ya ___ (terminar).", instruction: "Subjuntivo perfecto", options: ["haya terminado", "hube terminado", "terminara", "terminó"], answer: "haya terminado", explanation: "Es posible que + presente de subj. compuesto.", grammarTopic: "subjuntivo-compuestos" },
      { type: "fill_blank", question: "Si ___ (haber + ir), no estaríamos aquí.", instruction: "Plusc. de subj.", answer: "hubiera ido", acceptableAnswers: ["Hubiera ido", "hubiese ido"], explanation: "Si hubiera ido — нереальное в прошлом.", grammarTopic: "subjuntivo-compuestos" },
      { type: "translation", question: "Сомневаюсь, что он уже приехал.", instruction: "Subj. compuesto", answer: "Dudo que haya llegado", acceptableAnswers: ["dudo que haya llegado"], explanation: "Dudo que + haya + participio.", grammarTopic: "subjuntivo-compuestos" },
      { type: "error_correction", question: "Es posible que ya terminó.", instruction: "После es posible que", answer: "Es posible que ya haya terminado.", acceptableAnswers: ["Es posible que ya haya terminado"], explanation: "Триггер subjuntivo → haya terminado.", grammarTopic: "subjuntivo-compuestos" },
      { type: "multiple_choice", question: "Subjuntivo compuesto = ___ + participio", instruction: "Формула", options: ["haya/hayas…", "había/habías…", "he/has…", "hubo/hubiste…"], answer: "haya/hayas…", explanation: "Presente de subjuntivo de haber + participio.", grammarTopic: "subjuntivo-compuestos" },
      { type: "fill_blank", question: "Ojalá ___ (haber + ver) la exposición.", instruction: "Subj. pluscuamperfecto", answer: "hubiera visto", acceptableAnswers: ["Hubiera visto", "hubiese visto"], explanation: "Ojalá hubiera visto — сожаление о прошлом.", grammarTopic: "subjuntivo-compuestos" },
    ],
  },
  {
    slug: "chapter-39-condicionales-compuestos",
    grammarTopic: "b2-condicionales-compuestos",
    number: 24,
    level: "B2",
    title: "Три мира «если»",
    titleEs: "Tres Mundos del Si",
    location: "Развилка судеб",
    icon: "🔀",
    summary: "Condicional compuesto — habría ido; три типа si: real, irreal, irreal в прошлом.",
    vocabTopic: "b2-ciencia",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 11,
    prereqChapter: "chapter-38-subjuntivo-compuestos",
    story: {
      ru: "На развилке три дороги «si»: реальная, воображаемая и та, что уже не вернуть. Третья требует hubiera + condicional compuesto.",
      en: "At the fork three si-roads: real, imaginary, and the one you cannot undo. The third needs hubiera + condicional compuesto.",
      es: "En la encrucijada tres caminos «si»: real, irreal y el que ya no se deshace. El tercero pide hubiera + condicional compuesto.",
      de: "An der Gabelung drei si-Wege; der dritte braucht hubiera + Condicional compuesto.",
    },
    exercises: [
      { type: "multiple_choice", question: "Si hubiera sabido, ___ (ir).", instruction: "Condicional compuesto", options: ["habría ido", "iría", "fui", "haya ido"], answer: "habría ido", explanation: "Si hubiera + condicional compuesto — прошлое, которое не случилось.", grammarTopic: "condicionales-compuestos" },
      { type: "fill_blank", question: "___ (haber + estudiar) más, habría aprobado.", instruction: "Si + pluscuam. + cond. comp.", answer: "Si hubiera estudiado", acceptableAnswers: ["Si hubiera estudiado", "Si hubiese estudiado"], explanation: "Si hubiera estudiado, habría aprobado.", grammarTopic: "condicionales-compuestos" },
      { type: "translation", question: "Если бы ты позвонил, я бы приехал.", instruction: "Irreal presente", answer: "Si llamaras, vendría", acceptableAnswers: ["si llamaras, vendría", "Si llamases, vendría"], explanation: "Si + imperf. subj. + condicional.", grammarTopic: "condicionales-compuestos" },
      { type: "error_correction", question: "Si hubiera sabido, iría.", instruction: "Согласуйте времена", answer: "Si hubiera sabido, habría ido.", acceptableAnswers: ["Si hubiera sabido, habría ido"], explanation: "Hubiera → habría (cond. compuesto).", grammarTopic: "condicionales-compuestos" },
      { type: "multiple_choice", question: "Si llueve, ___ en casa.", instruction: "Si real", options: ["me quedo", "me quedaría", "me hubiera quedado", "me quedara"], answer: "me quedo", explanation: "Реальное условие → indicativo presente.", grammarTopic: "condicionales-compuestos" },
      { type: "fill_blank", question: "Habríamos ganado si ___ (haber + jugar) mejor.", instruction: "Cond. compuesto", answer: "hubiéramos jugado", acceptableAnswers: ["Hubiéramos jugado", "hubiésemos jugado"], explanation: "Si hubiéramos jugado…", grammarTopic: "condicionales-compuestos" },
    ],
  },
  {
    slug: "chapter-40-relativos-avanzado",
    grammarTopic: "b2-relativos-avanzado",
    number: 25,
    level: "B2",
    title: "Формальные нити",
    titleEs: "Hilos Formales",
    location: "Салон Salamanca",
    icon: "📚",
    summary: "Продвинутые относительные: el cual, lo que, adonde — для формального регистра.",
    vocabTopic: "b2-argumentacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "sentence_building"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-39-condicionales-compuestos",
    story: {
      ru: "В академическом салоне говорят el cual и adonde — не que и donde. Секретарь принимает только формальный регистр.",
      en: "In the academic salon they say el cual and adonde — not que and donde. The secretary accepts only formal register.",
      es: "En el salón académico dicen el cual y adonde — no que y donde. La secretaria solo acepta registro formal.",
      de: "Im Salon heißt es el cual und adonde — formelles Register.",
    },
    exercises: [
      { type: "multiple_choice", question: "La propuesta, ___ firmó el director, es clara.", instruction: "El cual", options: ["la cual", "que", "donde", "cuyo"], answer: "la cual", explanation: "El/la cual — формальное относительное.", grammarTopic: "relativos-avanzado" },
      { type: "fill_blank", question: "La ciudad ___ nací es pequeña.", instruction: "Adonde / donde", answer: "donde", acceptableAnswers: ["Donde", "adonde"], explanation: "Donde/adonde nací — место рождения.", grammarTopic: "relativos-avanzado" },
      { type: "translation", question: "То, что сказал преподаватель, важно.", instruction: "Lo que", answer: "Lo que dijo el profesor es importante", acceptableAnswers: ["lo que dijo el profesor es importante"], explanation: "Lo que = «то, что».", grammarTopic: "relativos-avanzado" },
      { type: "sentence_building", question: "El / informe / del / cual / hablamos / es / largo", options: ["El", "informe", "del", "cual", "hablamos", "es", "largo"], answer: "El informe del cual hablamos es largo", instruction: "Соберите с del cual", explanation: "Del cual — формальная связка.", grammarTopic: "relativos-avanzado" },
      { type: "multiple_choice", question: "«El cual» чаще в…", instruction: "Регистр", options: ["формальном тексте", "SMS", "детской речи", "слэнге"], answer: "формальном тексте", explanation: "El cual — письменный/формальный стиль.", grammarTopic: "relativos-avanzado" },
      { type: "fill_blank", question: "No entendí ___ dijiste.", instruction: "Lo que", answer: "lo que", acceptableAnswers: ["Lo que"], explanation: "Lo que dijiste — «то, что ты сказал».", grammarTopic: "relativos-avanzado" },
    ],
  },
  {
    slug: "chapter-41-conectores-discursivos",
    grammarTopic: "b2-conectores",
    number: 26,
    level: "B2",
    title: "Мосты между мыслями",
    titleEs: "Puentes entre Ideas",
    location: "Мост Salamanca",
    icon: "🌉",
    summary: "Связки текста: sin embargo, por consiguiente, en primer lugar — структура абзаца.",
    vocabTopic: "b2-argumentacion",
    exerciseTypes: ["multiple_choice", "fill_blank", "sentence_building", "translation"],
    estimatedMinutes: 10,
    prereqChapter: "chapter-40-relativos-avanzado",
    story: {
      ru: "Мост между башнями держится на коннекторах: en primer lugar, no obstante, en definitiva. Без них мысль проваливается в пропасть.",
      en: "The bridge between towers stands on connectors: en primer lugar, no obstante, en definitiva. Without them thought falls into the abyss.",
      es: "El puente se sostiene con conectores: en primer lugar, no obstante, en definitiva. Sin ellos la idea cae al vacío.",
      de: "Die Brücke steht auf Konnektoren: en primer lugar, no obstante, en definitiva.",
    },
    exercises: [
      { type: "multiple_choice", question: "Estudio mucho; ___, apruebo.", instruction: "Причина → следствие", options: ["por consiguiente", "sin embargo", "aunque", "mientras"], answer: "por consiguiente", explanation: "Por consiguiente — «следовательно».", grammarTopic: "conectores" },
      { type: "fill_blank", question: "___, no estoy de acuerdo.", instruction: "Противопоставление", answer: "Sin embargo", acceptableAnswers: ["sin embargo", "No obstante"], explanation: "Sin embargo / no obstante — «однако».", grammarTopic: "conectores" },
      { type: "multiple_choice", question: "___ lugar, debemos definir el problema.", instruction: "Структура текста", options: ["En primer", "En definitiva", "Por tanto", "A pesar de"], answer: "En primer", explanation: "En primer lugar — первый пункт.", grammarTopic: "conectores" },
      { type: "translation", question: "В итоге, решение было правильным.", instruction: "En definitiva / en suma", answer: "En definitiva, la decisión fue correcta", acceptableAnswers: ["en definitiva, la decisión fue correcta", "En suma, la decisión fue correcta"], explanation: "En definitiva — «в итоге».", grammarTopic: "conectores" },
      { type: "sentence_building", question: "No / obstante / / el / plan / es / viable", options: ["No", "obstante", ",", "el", "plan", "es", "viable"], answer: "No obstante, el plan es viable", instruction: "Соберите с no obstante", explanation: "No obstante + запятая.", grammarTopic: "conectores" },
      { type: "fill_blank", question: "___ de todo, gracias por venir.", instruction: "Начало речи", answer: "Ante", acceptableAnswers: ["Ante"], explanation: "Ante todo — «прежде всего».", grammarTopic: "conectores" },
    ],
  },
  {
    slug: "chapter-42-subjuntivo-avanzado",
    grammarTopic: "c1-subjuntivo-avanzado",
    number: 27,
    level: "C1",
    title: "Спорные случаи subjuntivo",
    titleEs: "Subjuntivo: Casos Dudosos",
    location: "Зал дебатов",
    icon: "⚖️",
    summary: "Спорные случаи subjuntivo: aunque, donde, como — факт или гипотеза.",
    vocabTopic: "c1-lenguaje-formal",
    exerciseTypes: ["multiple_choice", "fill_blank", "error_correction", "translation"],
    estimatedMinutes: 12,
    prereqChapter: "chapter-17-dele",
    story: {
      ru: "В зале дебатов aunque может требовать indicativo или subjuntivo — всё зависит от того, факт это или уступка. Судья ждёт правильного выбора.",
      en: "In the debate hall aunque may take indicative or subjunctive — fact or concession. The judge waits for the right choice.",
      es: "En el salón aunque puede llevar indicativo o subjuntivo — hecho o concesión. El juez espera la elección correcta.",
      de: "Im Debattensaal: aunque + Indikativ oder Subjuntivo — Fakt oder Konzession.",
    },
    exercises: [
      { type: "multiple_choice", question: "Aunque ___ (llover), salimos.", instruction: "Известный факт", options: ["llueve", "llueva", "llovió", "lloviera"], answer: "llueve", explanation: "Aunque + indicativo — известный/реальный факт.", grammarTopic: "subjuntivo-avanzado" },
      { type: "fill_blank", question: "Aunque ___ (tener) dinero, no lo haría.", instruction: "Гипотеза", answer: "tuviera", acceptableAnswers: ["Tuviera", "tuviese"], explanation: "Aunque + subjuntivo — гипотетическое уступление.", grammarTopic: "subjuntivo-avanzado" },
      { type: "error_correction", question: "Busco un sitio donde hay silencio.", instruction: "Indicativo vs subj.", answer: "Busco un sitio donde haya silencio.", acceptableAnswers: ["Busco un sitio donde haya silencio"], explanation: "Antecedente no definido → subjuntivo.", grammarTopic: "subjuntivo-avanzado" },
      { type: "translation", question: "Как ни странно, он согласился.", instruction: "Por + adj + que + subj.", answer: "Por extraño que parezca, aceptó", acceptableAnswers: ["por extraño que parezca, aceptó"], explanation: "Por extraño que parezca + subjuntivo.", grammarTopic: "subjuntivo-avanzado" },
      { type: "multiple_choice", question: "Hazlo como ___ (decir).", instruction: "Como + indicativo", options: ["digo", "diga", "dijera", "diré"], answer: "digo", explanation: "Como + indicativo — «как я говорю» (способ).", grammarTopic: "subjuntivo-avanzado" },
      { type: "fill_blank", question: "Donde ___ (haber) humo, hay fuego.", instruction: "Пословица", answer: "hay", acceptableAnswers: ["Hay"], explanation: "Donde hay — indicativo (общая истина).", grammarTopic: "subjuntivo-avanzado" },
    ],
  },
  {
    slug: "chapter-43-indirecto-avanzado",
    grammarTopic: "c1-indirecto-avanzado",
    number: 28,
    level: "C1",
    title: "Полная сетка передачи речи",
    titleEs: "Estilo Indirecto Completo",
    location: "Архив протоколов",
    icon: "📋",
    summary: "Полная сетка estilo indirecto: все сдвиги времён, subjuntivo, указатели hoy → aquel día.",
    vocabTopic: "c1-lenguaje-formal",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 12,
    prereqChapter: "chapter-42-subjuntivo-avanzado",
    story: {
      ru: "В архиве каждая реплика переписана в estilo indirecto: hoy → aquel día, mañana → al día siguiente. Ошибка в сдвиге — и протокол недействителен.",
      en: "In the archive every line is rewritten in reported speech: hoy → aquel día, mañana → al día siguiente. One shift wrong and the record is void.",
      es: "En el archivo cada frase está en estilo indirecto: hoy → aquel día, mañana → al día siguiente.",
      de: "Im Archiv: jede Zeile in indirekter Rede — hoy → aquel día.",
    },
    exercises: [
      { type: "multiple_choice", question: "Dijo: «Vengo mañana» → Dijo que ___ al día siguiente.", instruction: "Сдвиг указателя", options: ["vendría", "viene", "vino", "venga"], answer: "vendría", explanation: "Mañana → al día siguiente + condicional.", grammarTopic: "indirecto-avanzado" },
      { type: "fill_blank", question: "Dijo: «Estoy aquí» → Dijo que ___ allí.", instruction: "Está → estaba", answer: "estaba", acceptableAnswers: ["Estaba"], explanation: "Presente → imperfecto en estilo indirecto.", grammarTopic: "indirecto-avanzado" },
      { type: "translation", question: "Он сказал, что уже поел.", instruction: "Plusc. en indirecto", answer: "Dijo que ya había comido", acceptableAnswers: ["dijo que ya había comido"], explanation: "Perfecto → pluscuamperfecto.", grammarTopic: "indirecto-avanzado" },
      { type: "error_correction", question: "Dijo que viene mañana.", instruction: "Исправьте сдвиг", answer: "Dijo que vendría al día siguiente.", acceptableAnswers: ["Dijo que vendría al día siguiente"], explanation: "После dijo — сдвиг времён и указателей.", grammarTopic: "indirecto-avanzado" },
      { type: "multiple_choice", question: "Pidió que ___ (callar).", instruction: "Subjuntivo en indirecto", options: ["callara", "calló", "calla", "callaría"], answer: "callara", explanation: "Pedir que + subjuntivo.", grammarTopic: "indirecto-avanzado" },
      { type: "fill_blank", question: "«Hoy no puedo» → Dijo que ___ aquel día no podía.", instruction: "Hoy → aquel día", answer: "aquel", acceptableAnswers: ["Aquel"], explanation: "Hoy → aquel día en estilo indirecto.", grammarTopic: "indirecto-avanzado" },
    ],
  },
  {
    slug: "chapter-44-pronombres-avanzado",
    grammarTopic: "c1-pronombres-avanzado",
    number: 29,
    level: "C1",
    title: "Lo bueno de todo",
    titleEs: "Lo Bueno de Todo",
    location: "Лингвистический музей",
    icon: "🏛️",
    summary: "Продвинутые местоимения: lo bueno, a María la veo, leísmo / laísmo.",
    vocabTopic: "c1-expresiones-idiomaticas",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 11,
    prereqChapter: "chapter-43-indirecto-avanzado",
    story: {
      ru: "В музее экспонируют lo bueno, lo difícil, lo importante — нейтральное «то, что…». Гид объясняет, почему a María la veo, а не le veo.",
      en: "The museum exhibits lo bueno, lo difícil, lo importante. The guide explains why a María la veo, not le veo.",
      es: "El museo expone lo bueno, lo difícil, lo importante. El guía explica a María la veo.",
      de: "Im Museum: lo bueno, lo difícil — und warum a María la veo.",
    },
    exercises: [
      { type: "multiple_choice", question: "___ bueno es que llegaste.", instruction: "Lo + adjetivo", options: ["Lo", "El", "La", "Le"], answer: "Lo", explanation: "Lo bueno = «хорошая сторона / то хорошее, что…».", grammarTopic: "pronombres-avanzado" },
      { type: "fill_blank", question: "A María ___ veo cada día.", instruction: "OD + a + имя", answer: "la", acceptableAnswers: ["La"], explanation: "A María la veo — ударение на OD.", grammarTopic: "pronombres-avanzado" },
      { type: "translation", question: "Самое сложное — начать.", instruction: "Lo + adjetivo", answer: "Lo difícil es empezar", acceptableAnswers: ["lo difícil es empezar"], explanation: "Lo difícil es… — «самое сложное — …».", grammarTopic: "pronombres-avanzado" },
      { type: "error_correction", question: "A la ciudad le visitamos.", instruction: "Laísmo", answer: "Visitamos la ciudad.", acceptableAnswers: ["Visitamos la ciudad", "La visitamos."], explanation: "Visitar — прямое дополнение → la, не le.", grammarTopic: "pronombres-avanzado" },
      { type: "multiple_choice", question: "Leísmo — это…", instruction: "Региональная особенность", options: ["le вместо lo для OD", "lo вместо le", "se вместо le", "удвоение местоимений"], answer: "le вместо lo для OD", explanation: "Leísmo: le vi вместо lo vi (в некоторых регионах).", grammarTopic: "pronombres-avanzado" },
      { type: "fill_blank", question: "___ importante es participar.", instruction: "Lo + adj.", answer: "Lo", acceptableAnswers: ["lo"], explanation: "Lo importante es…", grammarTopic: "pronombres-avanzado" },
    ],
  },
  {
    slug: "chapter-45-ser-estar-matices",
    grammarTopic: "c1-ser-estar-avanzado",
    number: 30,
    level: "C1",
    title: "Два «быть» снова",
    titleEs: "Ser y Estar Otra Vez",
    location: "Зал зеркал смысла",
    icon: "🪞",
    summary: "Ser vs estar в сложных парах: es listo vs está listo — смысл меняется.",
    vocabTopic: "c1-conceptos-abstractos",
    exerciseTypes: ["multiple_choice", "fill_blank", "translation", "error_correction"],
    estimatedMinutes: 11,
    prereqChapter: "chapter-44-pronombres-avanzado",
    story: {
      ru: "В зале два зеркала: в одном es listo — «он умный», в другом está listo — «он готов». Одно слово, два мира.",
      en: "Two mirrors: es listo — he is clever; está listo — he is ready. One word, two worlds.",
      es: "Dos espejos: es listo — es inteligente; está listo — está preparado. Una palabra, dos mundos.",
      de: "Zwei Spiegel: es listo vs. está listo — zwei Welten.",
    },
    exercises: [
      { type: "multiple_choice", question: "Juan ___ listo (inteligente).", instruction: "Ser vs estar", options: ["es", "está", "era", "estaba"], answer: "es", explanation: "Es listo — умный по характеру (ser).", grammarTopic: "ser-estar-avanzado" },
      { type: "fill_blank", question: "Juan ___ listo (preparado).", instruction: "Ser vs estar", answer: "está", acceptableAnswers: ["Está"], explanation: "Está listo — готов (estar).", grammarTopic: "ser-estar-avanzado" },
      { type: "translation", question: "Она злая (характер).", instruction: "Ser", answer: "Es mala", acceptableAnswers: ["es mala"], explanation: "Характер → ser: es mala.", grammarTopic: "ser-estar-avanzado" },
      { type: "error_correction", question: "La sopa es fría — está fría (temp.).", instruction: "Еда: ser/estar", answer: "La sopa está fría.", acceptableAnswers: ["La sopa está fría"], explanation: "Температура еды → está fría.", grammarTopic: "ser-estar-avanzado" },
      { type: "multiple_choice", question: "Es aburrido vs Está aburrido — разница…", instruction: "Пары ser/estar", options: ["скучный vs скучает", "устал vs усталость", "высокий vs высоко", "богатый vs богат"], answer: "скучный vs скучает", explanation: "Es aburrido — «он скучный»; está aburrido — «ему скучно».", grammarTopic: "ser-estar-avanzado" },
      { type: "fill_blank", question: "La fiesta ___ divertida (в целом).", instruction: "Ser", answer: "es", acceptableAnswers: ["Es"], explanation: "Оценка события в целом → ser.", grammarTopic: "ser-estar-avanzado" },
    ],
  },
];

// --- Write story JSON files ---
const storiesDir = path.join(root, "src/config/chapter-stories/data");
for (const ch of CHAPTERS) {
  const storyPath = path.join(storiesDir, `${ch.slug}.json`);
  fs.writeFileSync(storyPath, JSON.stringify(ch.story, null, 2) + "\n");
  console.log("story:", ch.slug);
}

// --- Write exercise supplement TS ---
const exerciseLines = CHAPTERS.map((ch) => {
  const exJson = JSON.stringify(ch.exercises, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");
  return `  "${ch.slug}": ${exJson},`;
}).join("\n\n");

const supplementTs = `// Auto-generated by scripts/bootstrap-curriculum-chapters.mjs — do not edit by hand.
import type { ExerciseDraft } from "@/config/chapter-exercises";

export const CURRICULUM_CHAPTER_EXERCISES: Record<string, ExerciseDraft[]> = {
${exerciseLines}
};
`;

fs.writeFileSync(
  path.join(root, "src/config/chapter-exercises-curriculum.ts"),
  supplementTs,
);
console.log("wrote chapter-exercises-curriculum.ts");

// --- Emit chapter block for manual paste reference ---
const chapterBlocks = CHAPTERS.map((ch) => {
  const types = ch.exerciseTypes.map((t) => `"${t}"`).join(", ");
  return `  {
    slug: "${ch.slug}",
    number: ${ch.number},
    title: "${ch.title}",
    titleEs: "${ch.titleEs}",
    level: "${ch.level}",
    location: "${ch.location}",
    icon: "${ch.icon}",
    summary: "${ch.summary.replace(/"/g, '\\"')}",
    grammarTopic: "${ch.grammarTopic}",
    vocabTopic: "${ch.vocabTopic}",
    exerciseTypes: [${types}],
    prereqChapter: "${ch.prereqChapter}",
    estimatedMinutes: ${ch.estimatedMinutes},
  }`;
}).join(",\n");

fs.writeFileSync(
  path.join(root, "scripts/.bootstrap-chapters-snippet.ts.txt"),
  chapterBlocks,
);
console.log("wrote scripts/.bootstrap-chapters-snippet.ts.txt");
console.log("Done. Patch chapters.ts manually or via follow-up script.");
