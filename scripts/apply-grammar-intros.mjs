/**
 * Apply clear grammar topic summaries and intro blocks (RU / EN / ES).
 * Run: node scripts/apply-grammar-intros.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configDir = path.join(__dirname, "../src/config");

/** @type {Record<string, { ruSummary: string; ruIntro: string; enIntro: string; esIntro: string; enSummary: string; esSummary: string }>} */
const TOPICS = {
  "a1-articulos": {
    ruSummary:
      "Артикли el, la, un, una: конкретная вещь или «какая-то»; особый случай — el agua (не la abuela).",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **ser/estar** и **настоящее время** (hablo, soy). **В этой теме:** артикли перед существительным — **el, la, un, una** — и когда какой ставить.",
    enIntro:
      "> **Before this topic:** you already know **ser/estar** and the **present tense** (hablo, soy). **In this topic:** articles before nouns — **el, la, un, una** — and when to use each.",
    esIntro:
      "> **Antes de este tema:** ya conoces **ser/estar** y el **presente** (hablo, soy). **En este tema:** los artículos delante del sustantivo — **el, la, un, una** — y cuándo usar cada uno.",
    enSummary:
      "Definite and indefinite articles (el/la vs un/una); special case: el agua.",
    esSummary:
      "Artículos definidos e indefinidos (el/la vs un/una); caso especial: el agua.",
  },
  "a1-ser-estar": {
    ruSummary:
      "Первая тема: приветствия и два глагола «быть» — ser (кто ты) и estar (как ты сейчас).",
    ruIntro:
      "> **Перед этой темой:** это **первая** грамматическая тема курса. **В этой теме:** с нуля — местоимения (yo, tú) и два глагола «быть»: **ser** и **estar**.",
    enIntro:
      "> **Before this topic:** this is the **first** grammar topic in the course. **In this topic:** we start from zero — pronouns (yo, tú) and two verbs for “to be”: **ser** and **estar**.",
    esIntro:
      "> **Antes de este tema:** este es el **primer** tema de gramática del curso. **En este tema:** empezamos desde cero — pronombres (yo, tú) y dos verbos «ser / estar».",
    enSummary:
      "First topic: greetings and two verbs for “to be” — ser (who you are) and estar (how you are now).",
    esSummary:
      "Primer tema: saludos y dos verbos «ser / estar» — quién eres (ser) y cómo estás ahora (estar).",
  },
  "a1-presente": {
    ruSummary:
      "Настоящее время: три группы глаголов (-ar / -er / -ir) и как меняется окончание.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **soy** и **estoy**. **В этой теме:** как строить любое действие в настоящем времени — hablo, como, vivo.",
    enIntro:
      "> **Before this topic:** you already know **soy** and **estoy**. **In this topic:** how to build any action in the present tense — hablo, como, vivo.",
    esIntro:
      "> **Antes de este tema:** ya conoces **soy** y **estoy**. **En este tema:** cómo construir cualquier acción en presente — hablo, como, vivo.",
    enSummary:
      "Present tense: three verb groups (-ar / -er / -ir) and how the ending changes.",
    esSummary:
      "Presente de indicativo: tres grupos de verbos (-ar / -er / -ir) y cómo cambia la terminación.",
  },
  "a1-genero-numero": {
    ruSummary:
      "Род и число существительных: мужской/женский, один/много; исключения problema, mano, agua.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **el, la, un, una**. **В этой теме:** почему la casa, но el problema — и почему нельзя сказать *el abuela*.",
    enIntro:
      "> **Before this topic:** you already know **el, la, un, una**. **In this topic:** noun gender and number — why la casa but el problema, and why not *el abuela*.",
    esIntro:
      "> **Antes de este tema:** ya conoces **el, la, un, una**. **En este tema:** género y número — por qué la casa, pero el problema, y por qué no *el abuela*.",
    enSummary:
      "Noun gender and number; exceptions like problema, mano, and el agua.",
    esSummary:
      "Género y número del sustantivo; excepciones como problema, mano y el agua.",
  },
  "a1-numeros-1-100": {
    ruSummary:
      "Числа 1–100, дни недели, месяцы и как сказать время: es la una, son las dos.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **el, la** и род существительных. **В этой теме:** числа, дни недели и как сказать время (**la una**, **las dos**).",
    enIntro:
      "> **Before this topic:** you already know **el, la** and noun gender. **In this topic:** numbers, days of the week, and telling the time (**la una**, **las dos**).",
    esIntro:
      "> **Antes de este tema:** ya conoces **el, la** y el género. **En este tema:** números, días de la semana y la hora (**la una**, **las dos**).",
    enSummary:
      "Numbers 1–100, days, months, and telling the time (es la una / son las dos).",
    esSummary:
      "Números 1–100, días, meses y la hora (es la una / son las dos).",
  },
  "a1-preposiciones-lugar": {
    ruSummary:
      "Предлоги места: en, a, de, sobre, debajo, delante — где что находится.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **числа, дни недели и время**. **В этой теме:** предлоги места — en, a, de, sobre, debajo — и **estar** для «где?».",
    enIntro:
      "> **Before this topic:** you already know **numbers, days, and telling the time**. **In this topic:** prepositions of place — en, a, de, sobre, debajo — and **estar** for location.",
    esIntro:
      "> **Antes de este tema:** ya conoces **números, días y la hora**. **En este tema:** preposiciones de lugar — en, a, de, sobre, debajo — y **estar** para «¿dónde?».",
    enSummary:
      "Prepositions of place: en, a, de, sobre, debajo, delante — where something is.",
    esSummary:
      "Preposiciones de lugar: en, a, de, sobre, debajo, delante — dónde está algo.",
  },
  "a1-gustar": {
    ruSummary:
      "Глагол gustar: «мне нравится кофе» = me gusta el café, а не «я нравлюсь кофе».",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **tener hambre / frío / sueño** и другие выражения с **tener**. **В этой теме:** глагол **gustar** — «мне нравится» строится иначе, чем в русском.",
    enIntro:
      "> **Before this topic:** you already know **tener hambre / frío / sueño** and other **tener** expressions. **In this topic:** **gustar** — “I like” works differently from English.",
    esIntro:
      "> **Antes de este tema:** ya conoces **tener hambre / frío / sueño** y otras expresiones con **tener**. **En este tema:** **gustar** — «me gusta el café», no «yo gusto el café».",
    enSummary:
      "Verb gustar: “I like coffee” = me gusta el café — the thing liked is the subject.",
    esSummary:
      "Verbo gustar: «me gusta el café» — la cosa que gusta es el sujeto, no la persona.",
  },
  "a1-tener-expressions": {
    ruSummary:
      "Выражения с tener: tener hambre, frío, sueño, razón — «у меня голод», не через estar.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **предлоги места** (en, a, de) и **ser / estar**. **В этой теме:** состояния через **tener** — hambre, frío, sueño, razón.",
    enIntro:
      "> **Before this topic:** you already know **prepositions of place** (en, a, de) and **ser / estar**. **In this topic:** states with **tener** — hambre, frío, sueño, razón.",
    esIntro:
      "> **Antes de este tema:** ya conoces **preposiciones de lugar** (en, a, de) y **ser / estar**. **En este tema:** estados con **tener** — hambre, frío, sueño, razón.",
    enSummary:
      "Expressions with tener: hunger, cold, sleepiness, being right — not with estar.",
    esSummary:
      "Expresiones con tener: hambre, frío, sueño, razón — no con estar.",
  },
  "a1-preguntas": {
    ruSummary:
      "Вопросительные слова: qué, quién, dónde, cuándo, cómo, por qué и знаки ¿…?",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете **gustar** (me gusta…) и базовые вопросы из темы ser/estar (¿Cómo estás?). **В этой теме:** остальные вопросительные слова и **¿?** в письме.",
    enIntro:
      "> **Before this topic:** you already know **gustar** (me gusta…) and basic questions from ser/estar (¿Cómo estás?). **In this topic:** other question words and **¿?** in writing.",
    esIntro:
      "> **Antes de este tema:** ya conoces **gustar** (me gusta…) y preguntas básicas de ser/estar (¿Cómo estás?). **En este tema:** otras interrogativas y **¿?** en la escritura.",
    enSummary:
      "Question words — qué, quién, dónde, cuándo, cómo, por qué — and ¿…? in writing.",
    esSummary:
      "Palabras interrogativas — qué, quién, dónde, cuándo, cómo, por qué — y ¿…? escrito.",
  },
  "a1-verbos-frecuentes": {
    ruSummary:
      "Частые неправильные глаголы: ir, tener, hacer, poder, querer, decir.",
    ruIntro:
      "> **Перед этой темой:** вы прошли **вопросы** (qué, dónde, ¿…?). **В этой теме:** частые неправильные глаголы — ir, tener, hacer, poder, querer, decir.",
    enIntro:
      "> **Before this topic:** you have covered **questions** (qué, dónde, ¿…?). **In this topic:** frequent irregular verbs — ir, tener, hacer, poder, querer, decir.",
    esIntro:
      "> **Antes de este tema:** ya viste las **preguntas** (qué, dónde, ¿…?). **En este tema:** verbos irregulares frecuentes — ir, tener, hacer, poder, querer, decir.",
    enSummary:
      "Essential irregular verbs in the present: ir, tener, hacer, poder, querer, decir.",
    esSummary:
      "Verbos irregulares esenciales en presente: ir, tener, hacer, poder, querer, decir.",
  },
  "a2-preterito-perfecto": {
    ruSummary:
      "Pretérito Perfecto — прошлое, связанное с «сейчас»: he comido, has ido.",
    ruIntro:
      "> **Перед этой темой:** вы завершили **A1** (включая **частые глаголы**). **В этой теме:** **Pretérito Perfecto** — прошлое, связанное с настоящим: he comido, has ido.",
    enIntro:
      "> **Before this topic:** you have finished **A1** (including **frequent verbs**). **In this topic:** **Pretérito Perfecto** — past linked to now: he comido, has ido.",
    esIntro:
      "> **Antes de este tema:** ya terminaste **A1** (incluidos **verbos frecuentes**). **En este tema:** **Pretérito Perfecto** — pasado ligado al presente: he comido, has ido.",
    enSummary:
      "Pretérito Perfecto — past actions still connected to the present: he comido.",
    esSummary:
      "Pretérito Perfecto — pasado aún ligado al presente: he comido, has ido.",
  },
  "a2-preterito-indefinido": {
    ruSummary:
      "Pretérito Indefinido — законченный факт в прошлом: ayer fui, en 2018 viajé.",
    ruIntro:
      "> **Перед этой темой:** **Perfecto** (he comido) — когда период ещё «открыт». **В этой теме:** **Indefinido** — законченный факт: ayer fui, en 2018 viajé.",
    enIntro:
      "> **Before this topic:** **Perfecto** (he comido) is when the time frame is still open. **In this topic:** **Indefinido** — a finished past fact: ayer fui, en 2018 viajé.",
    esIntro:
      "> **Antes de este tema:** el **Perfecto** (he comido) es cuando el periodo sigue abierto. **En este tema:** **Indefinido** — hecho cerrado del pasado: ayer fui, en 2018 viajé.",
    enSummary:
      "Pretérito Indefinido — a completed action at a specific past moment: ayer fui.",
    esSummary:
      "Pretérito Indefinido — acción completada en un momento concreto: ayer fui.",
  },
  "a2-imperfecto": {
    ruSummary:
      "Pretérito Imperfecto — фон прошлого: привычки, описания, «когда я был ребёнком».",
    ruIntro:
      "> **Перед этой темой:** **Indefinido** (ayer fui) — отдельное событие. **В этой теме:** **Imperfecto** — фон прошлого: привычки, описания, «когда я был ребёнком».",
    enIntro:
      "> **Before this topic:** **Indefinido** (ayer fui) is a single event. **In this topic:** **Imperfecto** — background in the past: habits, descriptions, “when I was a child”.",
    esIntro:
      "> **Antes de este tema:** el **Indefinido** (ayer fui) es un suceso puntual. **En este tema:** **Imperfecto** — fondo del pasado: hábitos, descripciones, «cuando era niño».",
    enSummary:
      "Pretérito Imperfecto — habits, descriptions, and ongoing background in the past.",
    esSummary:
      "Pretérito Imperfecto — hábitos, descripciones y fondo continuo en el pasado.",
  },
  "a2-por-para": {
    ruSummary:
      "Para — цель и «для кого»; por — причина, маршрут, цена, время суток.",
    ruIntro:
      "> **Перед этой темой:** вы уже используете **a, de, en**. **В этой теме:** два частых предлога **para** и **por** — цель, причина, цена, маршрут.",
    enIntro:
      "> **Before this topic:** you already use **a, de, en**. **In this topic:** the two key prepositions **para** and **por** — purpose, reason, price, route.",
    esIntro:
      "> **Antes de este tema:** ya usas **a, de, en**. **En este tema:** **para** y **por** — finalidad, causa, precio, ruta.",
    enSummary:
      "Para = purpose / for whom; por = reason, route, price, time of day.",
    esSummary:
      "Para = finalidad / para quién; por = causa, ruta, precio, momento del día.",
  },
  "a2-comparativos": {
    ruSummary:
      "Сравнения: más… que, menos… que, tan… como, el más…; mejor, peor, mayor.",
    ruIntro:
      "> **Перед этой темой:** прилагательные согласуются с родом (blanca, rojos). **В этой теме:** сравнения — más… que, tan… como, el más…",
    enIntro:
      "> **Before this topic:** adjectives agree in gender (blanca, rojos). **In this topic:** comparisons — más… que, tan… como, el más…",
    esIntro:
      "> **Antes de este tema:** los adjetivos concuerdan (blanca, rojos). **En este tema:** comparaciones — más… que, tan… como, el más…",
    enSummary:
      "Comparatives and superlatives: más/menos, tan…como, el más…; mejor, peor.",
    esSummary:
      "Comparativos y superlativos: más/menos, tan…como, el más…; mejor, peor.",
  },
  "a2-futuro-simple": {
    ruSummary:
      "Futuro simple — будущее одним словом: hablaré, tendré (не только ir a + infinitivo).",
    ruIntro:
      "> **Перед этой темой:** «скоро сделаю» через **ir a + infinitivo** (voy a comer). **В этой теме:** **Futuro simple** одним словом — hablaré, tendré.",
    enIntro:
      "> **Before this topic:** near future with **ir a + infinitive** (voy a comer). **In this topic:** **simple future** in one word — hablaré, tendré.",
    esIntro:
      "> **Antes de este tema:** futuro próximo con **ir a + infinitivo** (voy a comer). **En este tema:** **futuro simple** en una palabra — hablaré, tendré.",
    enSummary:
      "Simple future tense: hablaré, tendré — not only ir a + infinitive.",
    esSummary:
      "Futuro simple: hablaré, tendré — no solo ir a + infinitivo.",
  },
  "b1-subjuntivo": {
    ruSummary:
      "Presente de Subjuntivo — желание, сомнение, эмоция: quiero que vengas.",
    ruIntro:
      "> **Перед этой темой:** основные времена описывают **факты**. **В этой теме:** **subjuntivo** — когда говорим о желании, сомнении или эмоции (quiero que vengas).",
    enIntro:
      "> **Before this topic:** main tenses describe **facts**. **In this topic:** **subjunctive** — for wishes, doubt, or emotion (quiero que vengas).",
    esIntro:
      "> **Antes de este tema:** los tiempos principales describen **hechos**. **En este tema:** **subjuntivo** — deseos, dudas o emociones (quiero que vengas).",
    enSummary:
      "Present subjunctive — for wishes, doubt, and emotions: quiero que vengas.",
    esSummary:
      "Subjuntivo presente — deseos, dudas y emociones: quiero que vengas.",
  },
  "b1-imperativo": {
    ruSummary:
      "Imperativo — приказы и просьбы: habla, no hables, venga.",
    ruIntro:
      "> **Перед этой темой:** вы уже знаете формы **subjuntivo** (hable, comas). **В этой теме:** **Imperativo** — приказы и просьбы: habla, no hables.",
    enIntro:
      "> **Before this topic:** you already know **subjunctive** forms (hable, comas). **In this topic:** **Imperativo** — commands and requests: habla, no hables.",
    esIntro:
      "> **Antes de este tema:** ya conoces el **subjuntivo** (hable, comas). **En este tema:** **Imperativo** — órdenes y peticiones: habla, no hables.",
    enSummary:
      "Imperative — commands and requests: habla / no hables.",
    esSummary:
      "Imperativo — órdenes y peticiones: habla / no hables.",
  },
  "b1-condicional": {
    ruSummary:
      "Condicional — «я бы» и вежливые просьбы: hablaría, podría, me gustaría.",
    ruIntro:
      "> **Перед этой темой:** вы уже строите **Futuro** (hablaré, tendré). **В этой теме:** **Condicional** — «я бы» и вежливые просьбы: hablaría, podría.",
    enIntro:
      "> **Before this topic:** you already build **Futuro** (hablaré, tendré). **In this topic:** **Condicional** — “I would” and polite requests: hablaría, podría.",
    esIntro:
      "> **Antes de este tema:** ya formas el **Futuro** (hablaré, tendré). **En este tema:** **Condicional** — «yo haría» y peticiones corteses: hablaría, podría.",
    enSummary:
      "Conditional — polite requests and hypotheticals: podría, me gustaría.",
    esSummary:
      "Condicional — peticiones corteses e hipótesis: podría, me gustaría.",
  },
  "b1-pronombre-se": {
    ruSummary:
      "Местоимение se — пять значений: возвратное, взаимное, безличное, пассивное, «случайно».",
    ruIntro:
      "> **Перед этой темой:** вы знаете **Condicional** (hablaría, podría). **В этой теме:** местоимение **se** — перед главой «Voz pasiva»; por/para уже были в A2.",
    enIntro:
      "> **Before this topic:** you know the **Condicional** (hablaría, podría). **In this topic:** the pronoun **se** — before the “Passive voice” chapter; por/para was covered in A2.",
    esIntro:
      "> **Antes de este tema:** ya conoces el **Condicional** (hablaría, podría). **En este tema:** el pronombre **se** — antes del capítulo «Voz pasiva»; por/para ya viste en A2.",
    enSummary:
      "Pronoun se — reflexive, reciprocal, impersonal, passive, and accidental uses.",
    esSummary:
      "Pronombre se — reflexivo, recíproco, impersonal, pasivo y uso accidental.",
  },
  "b1-relativos": {
    ruSummary:
      "Относительные местоимения: que, quien, lo que, cuyo, donde — связка двух фраз.",
    ruIntro:
      "> **Перед этой темой:** вы уже строите сложные предложения. **В этой теме:** слова-связки **que, quien, donde, cuyo** — чтобы соединить две фразы.",
    enIntro:
      "> **Before this topic:** you already build complex sentences. **In this topic:** linking words **que, quien, donde, cuyo** to connect two clauses.",
    esIntro:
      "> **Antes de este tema:** ya construyes oraciones complejas. **En este tema:** conectores **que, quien, donde, cuyo** para unir dos frases.",
    enSummary:
      "Relative pronouns — que, quien, lo que, cuyo, donde — to link clauses.",
    esSummary:
      "Pronombres relativos — que, quien, lo que, cuyo, donde — para unir oraciones.",
  },
  "b1-pluscuamperfecto": {
    ruSummary:
      "Pluscuamperfecto — «уже было до того»: había comido, cuando llegaste.",
    ruIntro:
      "> **Перед этой темой:** вы знаете **haber + participio** из Perfecto (he comido). **В этой теме:** **Pluscuamperfecto** — haber в Imperfecto: había comido.",
    enIntro:
      "> **Before this topic:** you know **haber + participle** from Perfecto (he comido). **In this topic:** **Pluscuamperfecto** — haber in the imperfect: había comido.",
    esIntro:
      "> **Antes de este tema:** ya conoces **haber + participio** del Perfecto (he comido). **En este tema:** **Pluscuamperfecto** — haber en imperfecto: había comido.",
    enSummary:
      "Pluperfect — an action before another past action: había comido when you arrived.",
    esSummary:
      "Pluscuamperfecto — acción anterior a otra en el pasado: había comido cuando llegaste.",
  },
  "b1-subjuntivo-imperfecto": {
    ruSummary:
      "Imperfecto de Subjuntivo — «если бы» и желания в прошлом: si tuviera, quería que vinieras.",
    ruIntro:
      "> **Перед этой темой:** вы уже используете **subjuntivo** настоящего (quiera que vengas). **В этой теме:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.",
    enIntro:
      "> **Before this topic:** you already use present **subjunctive** (quiera que vengas). **In this topic:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.",
    esIntro:
      "> **Antes de este tema:** ya usas el **subjuntivo** presente (quiera que vengas). **En este tema:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.",
    enSummary:
      "Imperfect subjunctive — unreal conditions and past wishes: si tuviera…",
    esSummary:
      "Subjuntivo imperfecto — condiciones irreales y deseos en pasado: si tuviera…",
  },
  "b1-pronombres-objetos": {
    ruSummary:
      "Прямое и косвенное дополнение: lo/la = «это», le = «ему/ей», se lo (не le lo).",
    ruIntro:
      "> **Перед этой темой:** вы знаете **me / te / le** из gustar. **В этой теме:** **lo, la, le** — прямое и косвенное дополнение: lo veo, le doy, se lo digo.",
    enIntro:
      "> **Before this topic:** you know **me / te / le** from gustar. **In this topic:** **lo, la, le** — direct and indirect objects: lo veo, le doy, se lo digo.",
    esIntro:
      "> **Antes de este tema:** ya conoces **me / te / le** del gustar. **En este tema:** **lo, la, le** — complemento directo e indirecto: lo veo, le doy, se lo digo.",
    enSummary:
      "Object pronouns — lo/la (it/them), le (to him/her), se lo (not le lo).",
    esSummary:
      "Pronombres de objeto — lo/la, le, se lo (no le lo).",
  },
  "b1-adverbios": {
    ruSummary:
      "Наречия: rápidamente (-mente), muy vs mucho; quizás + subjuntivo.",
    ruIntro:
      "> **Перед этой темой:** вы согласовываете прилагательные (rápida, fácil). **В этой теме:** наречия — «как?» — часто **-mente**: rápidamente, fácilmente.",
    enIntro:
      "> **Before this topic:** you agree adjectives (rápida, fácil). **In this topic:** adverbs — “how?” — often **-mente**: rápidamente, fácilmente.",
    esIntro:
      "> **Antes de este tema:** ya concuerdas adjetivos (rápida, fácil). **En este tema:** adverbios — «¿cómo?» — a menudo **-mente**: rápidamente.",
    enSummary:
      "Adverbs — often -mente; muy vs mucho; quizás with subjunctive.",
    esSummary:
      "Adverbios — a menudo -mente; muy vs mucho; quizás con subjuntivo.",
  },
  "b2-estilo-indirecto": {
    ruSummary:
      "Estilo indirecto — передача чужих слов: dijo que vendría; сдвиг времён после прошедшего.",
    ruIntro:
      "> **Перед этой темой:** вы прошли **DELE-письмо** (condicional, формальный регистр). **В этой теме:** **estilo indirecto** — как пересказать чужие слова: dijo que vendría.",
    enIntro:
      "> **Before this topic:** you have covered **DELE letter writing** (condicional, formal register). **In this topic:** **reported speech** — how to relay someone else’s words: dijo que vendría.",
    esIntro:
      "> **Antes de este tema:** ya viste la **carta DELE** (condicional, registro formal). **En este tema:** **estilo indirecto** — transmitir palabras ajenas: dijo que vendría.",
    enSummary:
      "Reported speech — dijo que vendría; tense backshift after a past reporting verb.",
    esSummary:
      "Estilo indirecto — dijo que vendría; cambio de tiempos tras verbo en pasado.",
  },
  "b2-voz-pasiva": {
    ruSummary:
      "Voz pasiva — fue escrito; pasiva refleja — se habla español; estado — está cerrada.",
    ruIntro:
      "> **Перед этой темой:** вы прошли **estilo indirecto** и главу **Местоимение se**. **В этой теме:** **voz pasiva** — ser + participio и **se** pasiva (se habla, se venden).",
    enIntro:
      "> **Before this topic:** you have covered **reported speech** and the **SE pronoun** chapter. **In this topic:** **passive voice** — ser + participle and **se** passive (se habla, se venden).",
    esIntro:
      "> **Antes de este tema:** ya viste **estilo indirecto** y el capítulo del **pronombre se**. **En este tema:** **voz pasiva** — ser + participio y **se** pasiva (se habla, se venden).",
    enSummary:
      "Passive voice — fue escrito vs natural se habla; states with estar.",
    esSummary:
      "Voz pasiva — fue escrito vs se habla; estados con estar.",
  },
  "b2-subjuntivo-compuestos": {
    ruSummary:
      "Subjuntivo compuesto — haya hablado, hubiera hablado (то же правило, другое время).",
    ruIntro:
      "> **Перед этой темой:** правило **subjuntivo** вы уже знаете. **В этой теме:** составные формы — **haya hablado**, **hubiera hablado**.",
    enIntro:
      "> **Before this topic:** you already know the **subjunctive** rule. **In this topic:** compound forms — **haya hablado**, **hubiera hablado**.",
    esIntro:
      "> **Antes de este tema:** ya conoces la regla del **subjuntivo**. **En este tema:** formas compuestas — **haya hablado**, **hubiera hablado**.",
    enSummary:
      "Compound subjunctive — haya hablado, hubiera hablado; same rule, different time.",
    esSummary:
      "Subjuntivo compuesto — haya hablado, hubiera hablado; misma regla, otro tiempo.",
  },
  "b2-condicionales-compuestos": {
    ruSummary:
      "Condicional compuesto — habría ido; три типа si: real, irreal, irreal в прошлом.",
    ruIntro:
      "> **Перед этой темой:** вы знаете **si tuviera, saldría**. **В этой теме:** хвост в прошлом — **habría** + participio — и сводка трёх типов **si**.",
    enIntro:
      "> **Before this topic:** you know **si tuviera, saldría**. **In this topic:** past result — **habría** + participle — plus a summary of three **si** types.",
    esIntro:
      "> **Antes de este tema:** ya conoces **si tuviera, saldría**. **En este tema:** resultado en pasado — **habría** + participio — y resumen de tres tipos de **si**.",
    enSummary:
      "Conditional perfect — habría ido; three si types with matching verb forms.",
    esSummary:
      "Condicional compuesto — habría ido; tres tipos de si con sus formas.",
  },
  "b2-relativos-avanzado": {
    ruSummary:
      "Продвинутые относительные: el cual, lo que, adonde — для формального регистра.",
    ruIntro:
      "> **Перед этой темой:** вы используете **que, quien, cuyo**. **В этой теме:** более формальные формы — **el cual, lo que, adonde**.",
    enIntro:
      "> **Before this topic:** you use **que, quien, cuyo**. **In this topic:** more formal forms — **el cual, lo que, adonde**.",
    esIntro:
      "> **Antes de este tema:** ya usas **que, quien, cuyo**. **En este tema:** formas más formales — **el cual, lo que, adonde**.",
    enSummary:
      "Advanced relatives — el cual, lo que, adonde — for formal register.",
    esSummary:
      "Relativos avanzados — el cual, lo que, adonde — registro formal.",
  },
  "b2-conectores": {
    ruSummary:
      "Связки для текста B2+: sin embargo, por lo tanto; часть требует subjuntivo.",
    ruIntro:
      "> **Перед этой темой:** porque и pero хватает до B1. **В этой теме:** связки для письменной речи — sin embargo, por lo tanto, para que…",
    enIntro:
      "> **Before this topic:** porque and pero are enough until B1. **In this topic:** linkers for writing — sin embargo, por lo tanto, para que…",
    esIntro:
      "> **Antes de este tema:** hasta B1 bastan porque y pero. **En este tema:** conectores de escritura — sin embargo, por lo tanto, para que…",
    enSummary:
      "Discourse connectors — sin embargo, por lo tanto; some trigger subjunctive.",
    esSummary:
      "Conectores discursivos — sin embargo, por lo tanto; algunos piden subjuntivo.",
  },
  "c1-perifrasis-verbales": {
    ruSummary:
      "Перифразы: acabar de, llevar + gerundio, deber de — готовые глагольные связки.",
    ruIntro:
      "> **Перед этой темой:** вы знаете **ir a + inf** и **estar + -ando** с A1–A2. **В этой теме:** каталог перифраз — acabar de, llevar + gerundio, deber vs deber de.",
    enIntro:
      "> **Before this topic:** you know **ir a + inf** and **estar + -ando** from A1–A2. **In this topic:** a catalogue of periphrases — acabar de, llevar + gerundio, deber vs deber de.",
    esIntro:
      "> **Antes de este tema:** ya conoces **ir a + inf** y **estar + -ando** desde A1–A2. **En este tema:** catálogo de perífrasis — acabar de, llevar + gerundio, deber vs deber de.",
    enSummary:
      "Verbal periphrases — acabar de, llevar + gerundio; trap: deber vs deber de.",
    esSummary:
      "Perífrasis verbales — acabar de, llevar + gerundio; trampa: deber vs deber de.",
  },
  "c1-matices-estilisticos": {
    ruSummary:
      "Регистр и вежливость: tú / usted, формулы просьбы — не новая грамматика, а уместность.",
    ruIntro:
      "> **Перед этой темой:** все основные формы вам знакомы. **В этой теме:** **регистр и вежливость** — когда tú, когда usted, как смягчить просьбу.",
    enIntro:
      "> **Before this topic:** all main forms are familiar. **In this topic:** **register and politeness** — when tú vs usted, how to soften a request.",
    esIntro:
      "> **Antes de este tema:** ya conoces las formas principales. **En este tema:** **registro y cortesía** — cuándo tú o usted, cómo suavizar una petición.",
    enSummary:
      "Style and register — politeness, tú vs usted; choosing the right tone.",
    esSummary:
      "Matices de estilo — cortesía, tú vs usted; elegir el tono adecuado.",
  },
  "c1-subjuntivo-avanzado": {
    ruSummary:
      "Спорные случаи subjuntivo: aunque, donde, como — факт или гипотеза.",
    ruIntro:
      "> **Перед этой темой:** вы уже ставите **subjuntivo** в типичных случаях. **В этой теме:** спорные точки — aunque, donde, como: indicativo или subjuntivo?",
    enIntro:
      "> **Before this topic:** you already use **subjunctive** in typical cases. **In this topic:** borderline cases — aunque, donde, como: indicative or subjunctive?",
    esIntro:
      "> **Antes de este tema:** ya usas el **subjuntivo** en casos típicos. **En este tema:** casos dudosos — aunque, donde, como: ¿indicativo o subjuntivo?",
    enSummary:
      "Advanced subjunctive — aunque, donde, como: fact → indicative, hypothesis → subjunctive.",
    esSummary:
      "Subjuntivo avanzado — aunque, donde, como: hecho → indicativo, hipótesis → subjuntivo.",
  },
  "c1-indirecto-avanzado": {
    ruSummary:
      "Полная сетка estilo indirecto: все сдвиги времён, subjuntivo, указатели hoy → aquel día.",
    ruIntro:
      "> **Перед этой темой:** вы знаете схему **dijo que + сдвиг** с B2. **В этой теме:** полная таблица — все времена, subjuntivo, указатели времени и места.",
    enIntro:
      "> **Before this topic:** you know the B2 **dijo que + shift** pattern. **In this topic:** the full grid — all tenses, subjunctive, time and place markers.",
    esIntro:
      "> **Antes de este tema:** ya conoces **dijo que + cambio de tiempo** de B2. **En este tema:** tabla completa — todos los tiempos, subjuntivo, marcadores.",
    enSummary:
      "Full reported-speech grid — all backshifts, subjunctive, hoy → aquel día.",
    esSummary:
      "Estilo indirecto completo — todos los cambios, subjuntivo, hoy → aquel día.",
  },
  "c1-pronombres-avanzado": {
    ruSummary:
      "Продвинутые местоимения: lo bueno, a María la veo, leísmo / laísmo.",
    ruIntro:
      "> **Перед этой темой:** **lo, le, se lo** уже в повседневной речи. **В этой теме:** абстрактное **lo**, обязательное удвоение **a + местоимение**, leísmo / laísmo.",
    enIntro:
      "> **Before this topic:** **lo, le, se lo** are already in daily use. **In this topic:** abstract **lo**, obligatory **a + pronoun** doubling, leísmo / laísmo.",
    esIntro:
      "> **Antes de este tema:** **lo, le, se lo** ya están en el uso diario. **En este tema:** **lo** abstracto, duplicación **a + pronombre**, leísmo / laísmo.",
    enSummary:
      "Advanced pronouns — lo bueno, a María la veo; leísmo vs standard usage.",
    esSummary:
      "Pronombres avanzados — lo bueno, a María la veo; leísmo vs norma.",
  },
  "c1-ser-estar-avanzado": {
    ruSummary:
      "Ser vs estar в сложных парах: es listo vs está listo — смысл меняется.",
    ruIntro:
      "> **Перед этой темой:** базовый **ser / estar** вы знаете с A1. **В этой теме:** пары, где выбор глагола **меняет смысл** — es listo vs está listo.",
    enIntro:
      "> **Before this topic:** basic **ser / estar** from A1 is in place. **In this topic:** pairs where the verb choice **changes the meaning** — es listo vs está listo.",
    esIntro:
      "> **Antes de este tema:** el **ser / estar** básico de A1 ya lo tienes. **En este tema:** pares donde la elección **cambia el sentido** — es listo vs está listo.",
    enSummary:
      "Advanced ser vs estar — pairs where the wrong verb changes the meaning.",
    esSummary:
      "Ser vs estar avanzado — pares donde el verbo equivocado cambia el sentido.",
  },
  "c2-ironia-registry": {
    ruSummary:
      "Ирония, сарказм и смена регистра — формы известны, важна уместность.",
    ruIntro:
      "> **Перед этой темой:** наклонения и регистр с C1. **В этой теме:** **как звучит** фраза — ирония, дистанция, смена регистра.",
    enIntro:
      "> **Before this topic:** moods and register from C1. **In this topic:** **how a phrase sounds** — irony, distance, register shifts.",
    esIntro:
      "> **Antes de este tema:** modos y registro desde C1. **En este tema:** **cómo suena** la frase — ironía, distancia, cambio de registro.",
    enSummary:
      "Irony, sarcasm, and register — forms are known; appropriateness matters.",
    esSummary:
      "Ironía, sarcasmo y registro — las formas se conocen; importa la adecuación.",
  },
  "c2-oraciones-hendidas": {
    ruSummary:
      "Oraciones hendidas — fue Juan quien…, lo que necesito es… — выделение важного.",
    ruIntro:
      "> **Перед этой темой:** **que / lo que** вы связываете с B1. **В этой теме:** **oraciones hendidas** — fue Juan quien…, lo que necesito es… — чтобы выделить главное.",
    enIntro:
      "> **Before this topic:** you link clauses with **que / lo que** since B1. **In this topic:** **cleft sentences** — fue Juan quien…, lo que necesito es… — to highlight what matters.",
    esIntro:
      "> **Antes de este tema:** ya enlazas con **que / lo que** desde B1. **En este tema:** **oraciones hendidas** — fue Juan quien…, lo que necesito es… — para destacar lo importante.",
    enSummary:
      "Cleft sentences — fue Juan quien…, lo que necesito es… — for emphasis.",
    esSummary:
      "Oraciones hendidas — fue Juan quien…, lo que necesito es… — para enfatizar.",
  },
  "c2-conjetura-rumor": {
    ruSummary:
      "Futuro de conjetura — Serán las diez (≈ наверное десять); condicional de rumor — habría mil.",
    ruIntro:
      "> **Перед этой темой:** **Futuro** и **Condicional** как план и «я бы» вы знаете. **В этой теме:** те же формы для **догадки и слухов** — Serán las diez, habría mil personas.",
    enIntro:
      "> **Before this topic:** **Futuro** and **Condicional** as plan and “I would” are done. **In this topic:** the same forms for **guesses and hearsay** — Serán las diez, habría mil personas.",
    esIntro:
      "> **Antes de este tema:** ya usas **Futuro** y **Condicional** como plan y «yo haría». **En este tema:** las mismas formas para **conjura y rumor** — Serán las diez, habría mil personas.",
    enSummary:
      "Futuro de conjetura and condicional de rumor — probably / reportedly, not plans.",
    esSummary:
      "Futuro de conjetura y condicional de rumor — probabilidad / rumor, no planes.",
  },
  "c2-estilo-culto": {
    ruSummary:
      "Книжный стиль: participio absoluto (Terminada la reunión…), номинализация.",
    ruIntro:
      "> **Перед этой темой:** **participio** и **gerundio** из времён. **В этой теме:** **письменный регистр** — participio absoluto, сжатие придаточных.",
    enIntro:
      "> **Before this topic:** **participle** and **gerund** from the tenses. **In this topic:** **written register** — absolute participle, compressing clauses.",
    esIntro:
      "> **Antes de este tema:** **participio** y **gerundio** de los tiempos verbales. **En este tema:** **registro escrito** — participio absoluto, compresión de oraciones.",
    enSummary:
      "Literary style — absolute participle, nominalization; not for everyday chat.",
    esSummary:
      "Estilo culto — participio absoluto, nominalización; no para chat cotidiano.",
  },
  "dele-contraste-pasados": {
    ruSummary:
      "DELE: как выбрать Perfecto, Indefinido или Imperfecto; Pluscuamperfecto — в главе «Два слоя прошлого».",
    ruIntro:
      "> **Перед этой темой:** в **A2** и **B1** вы прошли все прошедшие, включая **Pluscuamperfecto**. **В этой теме:** **DELE-сводка** — как выбрать прошедшее на экзамене.",
    enIntro:
      "> **Before this topic:** in **A2** and **B1** you covered all past tenses, including **Pluscuamperfecto**. **In this topic:** **DELE overview** — picking the right past tense.",
    esIntro:
      "> **Antes de este tema:** en **A2** y **B1** ya viste todos los pasados, incluido **Pluscamperfecto**. **En este tema:** **resumen DELE** — elegir el pasado en el examen.",
    enSummary:
      "DELE past-tense contrast — Perfecto vs Indefinido vs Imperfecto; Pluscuamperfecto in chapter journey.",
    esSummary:
      "Contraste DELE — Perfecto vs Indefinido vs Imperfecto; Pluscuamperfecto en el recorrido.",
  },
  "dele-carta-formal": {
    ruSummary:
      "DELE письмо: обращения, вежливые просьбы, прощания — готовые формулы.",
    ruIntro:
      "> **Перед этой темой:** **condicional** (podría, quisiera) и формальное **usted** вы знаете. **В этой теме:** **DELE письмо** — готовые формулы обращений и просьб.",
    enIntro:
      "> **Before this topic:** **condicional** (podría, quisiera) and formal **usted** are in place. **In this topic:** **DELE letter writing** — ready-made openings and polite requests.",
    esIntro:
      "> **Antes de este tema:** ya dominas **condicional** (podría, quisiera) y **usted** formal. **En este tema:** **carta DELE** — fórmulas de saludo y peticiones corteses.",
    enSummary:
      "DELE formal letter — openings, polite requests, closings; condicional and register.",
    esSummary:
      "Carta formal DELE — saludos, peticiones corteses, despedidas; condicional y registro.",
  },
  "dele-conectores-redaccion": {
    ruSummary:
      "DELE сочинение: скелет абзацев (en primer lugar…) + мнение с subjuntivo.",
    ruIntro:
      "> **Перед этой темой:** вы прошли **voz pasiva** и главу **Коннекторы**. **В этой теме:** **DELE-сочинение** — структура текста и связки (en primer lugar, sin embargo…).",
    enIntro:
      "> **Before this topic:** you have covered **passive voice** and the **Connectors** chapter. **In this topic:** **DELE essay** — text structure and linkers (en primer lugar, sin embargo…).",
    esIntro:
      "> **Antes de este tema:** ya viste **voz pasiva** y el capítulo **Conectores**. **En este tema:** **redacción DELE** — estructura y conectores (en primer lugar, sin embargo…).",
    enSummary:
      "DELE essay — en primer lugar, no obstante, en definitiva; opinion with subjunctive.",
    esSummary:
      "Redacción DELE — en primer lugar, no obstante, en definitiva; opinión con subjuntivo.",
  },
  "dele-expresion-oral": {
    ruSummary:
      "DELE устная часть: описание фото, гипотезы, мнение, согласие — живая речь.",
    ruIntro:
      "> **Перед этой темой:** вы прошли **DELE-сочинение**. **В этой теме:** **DELE устно** — фото, мнение, согласие; гипотезы (Serán las diez…) разберём подробнее в C2 «Conjetura».",
    enIntro:
      "> **Before this topic:** you have covered **DELE essay writing**. **In this topic:** **DELE speaking** — photos, opinions, agreeing; full conjecture theory (Serán las diez…) comes in C2 “Conjetura”.",
    esIntro:
      "> **Antes de este tema:** ya viste la **redacción DELE**. **En este tema:** **expresión oral DELE** — fotos, opinión, acuerdo; conjetura (Serán las diez…) en detalle en C2 «Conjetura».",
    enSummary:
      "DELE speaking — describing photos, hypotheses, opinions, agreeing/disagreeing.",
    esSummary:
      "Expresión oral DELE — describir fotos, hipótesis, opinión, acuerdo/desacuerdo.",
  },
};

function patchGrammarTs(content) {
  let updated = content;
  for (const [slug, t] of Object.entries(TOPICS)) {
    const re = new RegExp(
      `(slug: "${slug}"[\\s\\S]*?summary: ")([^"]*)("[\\s\\S]*?content: \`)(> \\*\\*(?:Перед этой темой|Путь):\\*\\*[^\\n]+)`,
    );
    const next = updated.replace(re, `$1${t.ruSummary}$3${t.ruIntro}`);
    if (next === updated) console.warn(`grammar.ts: skip intro ${slug}`);
    updated = next;
  }
  return updated;
}

function patchSpanishContent(content) {
  let updated = content;
  for (const [slug, t] of Object.entries(TOPICS)) {
    const enRe = new RegExp(
      `("${slug}": \\{\\s*en: \`)(> \\*\\*(?:Before this topic|Path):\\*\\*[^\\n]+)`,
    );
    const esRe = new RegExp(
      `("${slug}": \\{[\\s\\S]*?es: \`)(> \\*\\*(?:Antes de este tema|Recorrido):\\*\\*[^\\n]+)`,
    );
    const enNext = updated.replace(enRe, `$1${t.enIntro}`);
    if (enNext === updated) console.warn(`grammar-content-spanish.ts: skip en ${slug}`);
    updated = enNext;
    const esNext = updated.replace(esRe, `$1${t.esIntro}`);
    if (esNext === updated) console.warn(`grammar-content-spanish.ts: skip es ${slug}`);
    updated = esNext;
  }
  return updated;
}

function patchLocalizations(content) {
  let updated = content;
  for (const [slug, t] of Object.entries(TOPICS)) {
    const enRe = new RegExp(
      `("${slug}": \\{[\\s\\S]*?"en": \\{[\\s\\S]*?"summary": ")([^"]*)(")`,
    );
    const esRe = new RegExp(
      `("${slug}": \\{[\\s\\S]*?"es": \\{[\\s\\S]*?"summary": ")([^"]*)(")`,
    );
    const enNext = updated.replace(enRe, `$1${t.enSummary}$3`);
    if (enNext === updated) console.warn(`grammar-localizations.ts: skip en summary ${slug}`);
    updated = enNext;
    const esNext = updated.replace(esRe, `$1${t.esSummary}$3`);
    if (esNext === updated) console.warn(`grammar-localizations.ts: skip es summary ${slug}`);
    updated = esNext;
  }
  return updated;
}

const grammarPath = path.join(configDir, "grammar.ts");
const spanishPath = path.join(configDir, "grammar-content-spanish.ts");
const locPath = path.join(configDir, "grammar-localizations.ts");

fs.writeFileSync(grammarPath, patchGrammarTs(fs.readFileSync(grammarPath, "utf8")));
fs.writeFileSync(spanishPath, patchSpanishContent(fs.readFileSync(spanishPath, "utf8")));
fs.writeFileSync(locPath, patchLocalizations(fs.readFileSync(locPath, "utf8")));

function patchChapters(content) {
  return content.replace(
    /(\{\s*\n\s*slug: "[^"]+",[\s\S]*?summary: ")([^"]*)("[\s\S]*?grammarTopic: "([^"]+)")/g,
    (full, before, _oldSummary, after, grammarTopic) => {
      const t = TOPICS[grammarTopic];
      if (!t) return full;
      return `${before}${t.ruSummary}${after}`;
    },
  );
}

function patchDeLocalizations(content) {
  let updated = content;
  for (const [slug, t] of Object.entries(TOPICS)) {
    const re = new RegExp(`("${slug}": \\{[\\s\\S]*?summary:\\s*\\n\\s*")([^"]*)(")`);
    updated = updated.replace(re, `$1${t.enSummary}$3`);
  }
  return updated;
}

const chaptersPath = path.join(configDir, "chapters.ts");
const deLocPath = path.join(configDir, "grammar-localizations-de.ts");
fs.writeFileSync(chaptersPath, patchChapters(fs.readFileSync(chaptersPath, "utf8")));
if (fs.existsSync(deLocPath)) {
  fs.writeFileSync(deLocPath, patchDeLocalizations(fs.readFileSync(deLocPath, "utf8")));
}

console.log(`Applied intros for ${Object.keys(TOPICS).length} topics.`);
