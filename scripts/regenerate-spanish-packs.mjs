/* eslint-disable */
/**
 * Regenerate Spanish exercise packs with real pedagogical sentences.
 * Keeps chapter-1 as-is (already curated). Run: node scripts/regenerate-spanish-packs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/config/exercise-banks/data/spanish-packs.json",
);

const existing = JSON.parse(fs.readFileSync(outPath, "utf8"));

function mc(q, options, answer, instruction, explanation, g) {
  return {
    type: "multiple_choice",
    question: q,
    options,
    answer,
    instruction,
    explanation,
    grammarTopic: g,
  };
}
function fb(q, answer, instruction, explanation, g, acceptableAnswers) {
  return {
    type: "fill_blank",
    question: q,
    answer,
    acceptableAnswers:
      acceptableAnswers || [answer[0].toUpperCase() + answer.slice(1), answer],
    instruction,
    explanation,
    grammarTopic: g,
  };
}
function tr(q, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "translation",
    question: q,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}
function ec(q, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "error_correction",
    question: q,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}
function sb(tokens, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: tokens,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}
function pack(mcA, fbA, trA, ecA, sbA) {
  return {
    multiple_choice: mcA.slice(0, 20),
    fill_blank: fbA.slice(0, 20),
    translation: trA.slice(0, 20),
    error_correction: ecA.slice(0, 20),
    sentence_building: sbA.slice(0, 20),
  };
}

function chapterFromSeeds(g, topic, seeds) {
  const mcA = [];
  const fbA = [];
  const trA = [];
  const ecA = [];
  const sbA = [];
  for (let i = 0; i < 20; i++) {
    const s = seeds[i % seeds.length];
    const n = i + 1;
    const q = i < seeds.length ? s.q : s.q.replace(/\.$/, "").replace(/\?$/, "") + ` (#${n}).`;
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(0, 4);
    while (options.length < 4) options.push(`${s.ans}?`);
    mcA.push(
      mc(q, options, s.ans, "Выберите правильный ответ", s.explanation || `${topic}: «${s.ans}».`, g),
    );
    fbA.push(
      fb(
        q.includes("___") ? q : `Completa (${topic}) #${n}: ___`,
        s.ans,
        "Заполните пропуск",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );
    const filled = q.replace("___", s.ans).replace(/ \(#\d+\)\.?$/, "").replace(/\.$/, "") + (q.includes("?") ? "?" : ".");
    const wrong = options.find((o) => o !== s.ans) || "WRONG";
    const broken = q.replace("___", wrong).replace(/ \(#\d+\)\.?$/, "").replace(/\.$/, "") + (q.includes("?") ? "?" : ".");
    trA.push(
      tr(
        s.ru || `Напишите по-испански, используя «${s.ans}» (#${n}).`,
        s.es || filled,
        "Переведите на испанский",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
        s.acc || [s.ans, (s.es || filled).toLowerCase()],
      ),
    );
    ecA.push(
      ec(broken, filled, "Исправьте ошибку", `Нужно «${s.ans}», не «${wrong}».`, g, [s.ans]),
    );
    const tokens = filled.replace(/[¿?¡!.]/g, "").split(/\s+/).filter(Boolean).slice(0, 6);
    const toks = tokens.length >= 3 ? tokens : ["Por", "favor", "usa", s.ans];
    sbA.push(
      sb(toks, toks.join(" "), "Составьте предложение", `${topic}: порядок слов.`, g, [
        toks.join(" ").toLowerCase(),
      ]),
    );
  }
  return pack(mcA, fbA, trA, ecA, sbA);
}

const ES = {
  "chapter-1-despertar": existing["chapter-1-despertar"],
};

const CHAPTERS = [
  ["chapter-2-primer-dialogo", "presente", "presente", [
    ["Yo ___ español.", "hablo", ["hablo", "hablas", "habla", "hablamos"], "yo → hablo.", "Я говорю по-испански.", "Yo hablo español."],
    ["Tú ___ café.", "bebes", ["bebo", "bebes", "bebe", "bebemos"], "tú → bebes.", "Ты пьёшь кофе.", "Tú bebes café."],
    ["Ella ___ en Madrid.", "vive", ["vivo", "vives", "vive", "viven"], "ella → vive.", "Она живёт в Мадриде.", "Ella vive en Madrid."],
    ["Nosotros ___ en una oficina.", "trabajamos", ["trabajo", "trabajas", "trabaja", "trabajamos"], "nosotros → trabajamos.", "Мы работаем в офисе.", "Nosotros trabajamos en una oficina."],
    ["¿___ tú inglés?", "hablas", ["hablo", "hablas", "habla", "hablan"], "tú → hablas.", "Ты говоришь по-английски?", "¿Hablas tú inglés?"],
    ["Ellos ___ la cena.", "preparan", ["preparo", "preparas", "prepara", "preparan"], "ellos → preparan.", "Они готовят ужин.", "Ellos preparan la cena."],
    ["Él ___ mucho.", "estudia", ["estudio", "estudias", "estudia", "estudiamos"], "él → estudia.", "Он много учится.", "Él estudia mucho."],
    ["¿Dónde ___ ustedes?", "viven", ["vivo", "vives", "vive", "viven"], "ustedes → viven.", "Где вы живёте?", "¿Dónde viven ustedes?"],
    ["Yo no ___ carne.", "como", ["como", "comes", "come", "comemos"], "yo → como.", "Я не ем мясо.", "Yo no como carne."],
    ["Vosotros ___ fútbol.", "jugáis", ["juego", "juegas", "juega", "jugáis"], "vosotros → jugáis.", "Вы играете в футбол.", "Vosotros jugáis fútbol."],
  ]],
  ["chapter-3-biblioteca", "artículos", "artículos", [
    ["___ libro está en la mesa.", "El", ["El", "La", "Los", "Un"], "libro → el.", "Книга на столе.", "El libro está en la mesa."],
    ["Quiero ___ manzana.", "una", ["un", "una", "el", "la"], "manzana → una.", "Хочу яблоко.", "Quiero una manzana."],
    ["___ casas son grandes.", "Las", ["El", "La", "Los", "Las"], "casas → las.", "Дома большие.", "Las casas son grandes."],
    ["Hay ___ problema.", "un", ["un", "una", "el", "la"], "problema → un.", "Есть проблема.", "Hay un problema."],
    ["___ agua está fría.", "El", ["El", "La", "Los", "Un"], "agua → el (а).", "Вода холодная.", "El agua está fría."],
    ["Necesito ___ lápiz.", "un", ["un", "una", "el", "la"], "lápiz → un.", "Мне нужен карандаш.", "Necesito un lápiz."],
    ["___ mujer es profesora.", "La", ["El", "La", "Los", "Un"], "mujer → la.", "Женщина — учительница.", "La mujer es profesora."],
    ["Compré ___ zapatos.", "unos", ["un", "una", "unos", "unas"], "zapatos → unos.", "Я купил туфли.", "Compré unos zapatos."],
    ["___ mesa es de madera.", "La", ["El", "La", "Los", "Un"], "mesa → la.", "Стол деревянный.", "La mesa es de madera."],
    ["No tengo ___ idea.", "ni", ["un", "una", "ni", "ninguna"], "ni idea = no idea.", "Понятия не имею.", "No tengo ni idea."],
  ]],
  ["chapter-4-numeros-tiempo", "números-tiempo", "números y tiempo", [
    ["Son ___ horas.", "las tres", ["las tres", "la tres", "tres", "a las tres"], "час → las + число.", "Сейчас три часа.", "Son las tres horas."],
    ["Tengo ___ años.", "veinte", ["veinte", "veinti", "veintes", "veintiuno"], "20 → veinte.", "Мне двадцать лет.", "Tengo veinte años."],
    ["Hoy es ___.", "lunes", ["lunes", "luno", "lunés", "luneses"], "день недели.", "Сегодня понедельник.", "Hoy es lunes."],
    ["El tren sale a ___.", "las diez", ["las diez", "la diez", "diez", "a diez"], "a las + час.", "Поезд уходит в десять.", "El tren sale a las diez."],
    ["Estamos en ___.", "enero", ["enero", "enera", "eneros", "ener"], "месяц.", "Сейчас январь.", "Estamos en enero."],
    ["Hay ___ personas.", "cinco", ["cinco", "cincoas", "cinqo", "cinca"], "5 → cinco.", "Пять человек.", "Hay cinco personas."],
    ["Mi cumpleaños es el ___.", "quince", ["quince", "quinci", "quinces", "quinceavo"], "15 → quince.", "ДР 15-го.", "Mi cumpleaños es el quince."],
    ["Son las ___ y media.", "dos", ["dos", "doses", "duo", "dues"], "y media.", "Половина третьего.", "Son las dos y media."],
    ["Faltan ___ minutos.", "diez", ["diez", "diezes", "dies", "deiz"], "10 → diez.", "Осталось десять минут.", "Faltan diez minutos."],
    ["Nací en ___.", "mil novecientos", ["mil novecientos", "mil nueve", "novecientos mil", "mil y nueve"], "год.", "Я родился в 19xx.", "Nací en mil novecientos."],
  ]],
  ["chapter-5-mercado", "gustar", "gustar", [
    ["Me ___ el café.", "gusta", ["gusta", "gustan", "gusto", "gustas"], "singular → gusta.", "Мне нравится кофе.", "Me gusta el café."],
    ["Me ___ las manzanas.", "gustan", ["gusta", "gustan", "gusto", "gustas"], "plural → gustan.", "Мне нравятся яблоки.", "Me gustan las manzanas."],
    ["¿Te ___ el chocolate?", "gusta", ["gusta", "gustan", "gusto", "gustas"], "te gusta…?", "Тебе нравится шоколад?", "¿Te gusta el chocolate?"],
    ["A ella le ___ bailar.", "gusta", ["gusta", "gustan", "gusto", "gustas"], "infinitivo → gusta.", "Ей нравится танцевать.", "A ella le gusta bailar."],
    ["Nos ___ los libros.", "gustan", ["gusta", "gustan", "gusto", "gustamos"], "nos + gustan.", "Нам нравятся книги.", "Nos gustan los libros."],
    ["No me ___ madrugar.", "gusta", ["gusta", "gustan", "gusto", "gustas"], "no me gusta.", "Не люблю вставать рано.", "No me gusta madrugar."],
    ["A ellos les ___ el fútbol.", "gusta", ["gusta", "gustan", "gusto", "gustan"], "el fútbol → gusta.", "Им нравится футбол.", "A ellos les gusta el fútbol."],
    ["¿Qué te ___ más?", "gusta", ["gusta", "gustan", "gusto", "gustas"], "qué te gusta.", "Что тебе больше нравится?", "¿Qué te gusta más?"],
    ["Me ___ mucho viajar.", "gusta", ["gusta", "gustan", "gusto", "gustas"], "viajar → gusta.", "Мне очень нравится путешествовать.", "Me gusta mucho viajar."],
    ["A ti te ___ las películas.", "gustan", ["gusta", "gustan", "gusto", "gustas"], "películas → gustan.", "Тебе нравятся фильмы.", "A ti te gustan las películas."],
  ]],
  ["chapter-6-cuerpo", "reflexivos", "reflexivos", [
    ["Yo me ___ todos los días.", "levanto", ["levanto", "levantas", "levanta", "levantamos"], "me levanto.", "Я встаю каждый день.", "Yo me levanto todos los días."],
    ["Ella se ___ los dientes.", "lava", ["lavo", "lavas", "lava", "lavan"], "se lava.", "Она чистит зубы.", "Ella se lava los dientes."],
    ["Nosotros nos ___ temprano.", "acostamos", ["acostamos", "acuestas", "acuesta", "acuesto"], "nos acostamos.", "Мы ложимся рано.", "Nosotros nos acostamos temprano."],
    ["¿Cómo te ___?", "llamas", ["llamo", "llamas", "llama", "llamamos"], "te llamas.", "Как тебя зовут?", "¿Cómo te llamas?"],
    ["Él se ___ en el espejo.", "mira", ["miro", "miras", "mira", "miran"], "se mira.", "Он смотрится в зеркало.", "Él se mira en el espejo."],
    ["Me ___ las manos.", "lavo", ["lavo", "lavas", "lava", "lavamos"], "me lavo.", "Я мою руки.", "Me lavo las manos."],
    ["Ellos se ___ en la playa.", "divierten", ["divierto", "diviertes", "divierte", "divierten"], "se divierten.", "Они веселятся на пляже.", "Ellos se divierten en la playa."],
    ["Tú te ___ muy bien.", "ves", ["veo", "ves", "ve", "vemos"], "te ves.", "Ты хорошо выглядишь.", "Tú te ves muy bien."],
    ["Os ___ a las ocho.", "despertáis", ["despierto", "despiertas", "despierta", "despertáis"], "os despertáis.", "Вы просыпаетесь в восемь.", "Os despertáis a las ocho."],
    ["Se ___ el pelo.", "seca", ["seco", "secas", "seca", "secan"], "se seca.", "Она сушит волосы.", "Se seca el pelo."],
  ]],
  ["chapter-7-pasado-perfecto", "pretérito-perfecto", "pretérito perfecto", [
    ["Yo he ___ el libro.", "leído", ["leído", "leí", "leer", "leo"], "he + participio.", "Я прочитал книгу.", "Yo he leído el libro."],
    ["Ella ha ___ a Madrid.", "viajado", ["viajado", "viajó", "viajar", "viaja"], "ha + viajado.", "Она ездила в Мадрид.", "Ella ha viajado a Madrid."],
    ["¿Has ___ ya?", "comido", ["comido", "comí", "comer", "comes"], "¿has + participio?", "Ты уже поел?", "¿Has comido ya?"],
    ["Hemos ___ mucho hoy.", "trabajado", ["trabajado", "trabajamos", "trabajar", "trabaja"], "hemos + trabajado.", "Мы много поработали сегодня.", "Hemos trabajado mucho hoy."],
    ["Ellos han ___ la puerta.", "abierto", ["abierto", "abrido", "abrir", "abren"], "abrir → abierto.", "Они открыли дверь.", "Ellos han abierto la puerta."],
    ["No he ___ nada.", "visto", ["visto", "veído", "ver", "veo"], "ver → visto.", "Я ничего не видел.", "No he visto nada."],
    ["¿Qué has ___?", "hecho", ["hecho", "hacido", "hacer", "haces"], "hacer → hecho.", "Что ты сделал?", "¿Qué has hecho?"],
    ["Ha ___ toda la noche.", "llovido", ["llovido", "llovió", "llover", "llueve"], "ha llovido.", "Всю ночь шёл дождь.", "Ha llovido toda la noche."],
    ["Todavía no he ___.", "terminado", ["terminado", "terminé", "terminar", "termino"], "todavía no + perfecto.", "Я ещё не закончил.", "Todavía no he terminado."],
    ["Hemos ___ una carta.", "escrito", ["escrito", "escribido", "escribir", "escribe"], "escribir → escrito.", "Мы написали письмо.", "Hemos escrito una carta."],
  ]],
  ["chapter-8-pasado-indefinido", "indefinido", "pretérito indefinido", [
    ["Ayer yo ___ al cine.", "fui", ["fui", "iba", "voy", "ido"], "ir → fui.", "Вчера я ходил в кино.", "Ayer yo fui al cine."],
    ["Ella ___ una carta.", "escribió", ["escribió", "escribía", "escribe", "escrito"], "ella → escribió.", "Она написала письмо.", "Ella escribió una carta."],
    ["¿___ tú la película?", "Viste", ["Viste", "Veías", "Ves", "Visto"], "ver → viste.", "Ты смотрел фильм?", "¿Viste tú la película?"],
    ["Nosotros ___ en un hotel.", "dormimos", ["dormimos", "dormíamos", "dormimos*", "dormido"], "dormir → dormimos.", "Мы спали в отеле.", "Nosotros dormimos en un hotel."],
    ["Ellos ___ la casa.", "compraron", ["compraron", "compraban", "compran", "comprado"], "ellos → compraron.", "Они купили дом.", "Ellos compraron la casa."],
    ["Él ___ temprano.", "salió", ["salió", "salía", "sale", "salido"], "salir → salió.", "Он вышел рано.", "Él salió temprano."],
    ["Yo no ___ nada.", "dije", ["dije", "decía", "digo", "dicho"], "decir → dije.", "Я ничего не сказал.", "Yo no dije nada."],
    ["¿Qué ___ ustedes?", "hicieron", ["hicieron", "hacían", "hacen", "hecho"], "hacer → hicieron.", "Что вы сделали?", "¿Qué hicieron ustedes?"],
    ["Anoche ___ mucho.", "llovió", ["llovió", "llovía", "llueve", "llovido"], "ayer/anoche → indefinido.", "Вчера вечером шёл сильный дождь.", "Anoche llovió mucho."],
    ["Tú ___ la verdad.", "dijiste", ["dijiste", "decías", "dices", "dicho"], "tú → dijiste.", "Ты сказал правду.", "Tú dijiste la verdad."],
  ]],
  ["chapter-9-imperfecto", "imperfecto", "imperfecto", [
    ["Cuando era niño, ___ mucho.", "jugaba", ["jugaba", "jugué", "juego", "jugado"], "habito pasado → imperfecto.", "В детстве я много играл.", "Cuando era niño, jugaba mucho."],
    ["Ella ___ alta y delgada.", "era", ["era", "fue", "es", "sido"], "descripción → era.", "Она была высокой и худой.", "Ella era alta y delgada."],
    ["Nosotros ___ en Sevilla.", "vivíamos", ["vivíamos", "vivimos", "vivimos*", "vivido"], "situación → imperfecto.", "Мы жили в Севилье.", "Nosotros vivíamos en Sevilla."],
    ["Siempre ___ café por la mañana.", "tomaba", ["tomaba", "tomé", "tomo", "tomado"], "siempre → imperfecto.", "Всегда пил кофе утром.", "Siempre tomaba café por la mañana."],
    ["Ellos ___ felices.", "estaban", ["estaban", "estuvieron", "están", "estado"], "estado → imperfecto.", "Они были счастливы.", "Ellos estaban felices."],
    ["Mientras yo ___, sonó el teléfono.", "leía", ["leía", "leí", "leo", "leído"], "mientras → imperfecto.", "Пока я читал, зазвонил телефон.", "Mientras yo leía, sonó el teléfono."],
    ["De pequeño ___ miedo a la oscuridad.", "tenía", ["tenía", "tuve", "tengo", "tenido"], "tenía miedo.", "В детстве боялся темноты.", "De pequeño tenía miedo a la oscuridad."],
    ["¿Qué ___ tú a esa hora?", "hacías", ["hacías", "hiciste", "haces", "hecho"], "¿qué hacías?", "Что ты делал в тот час?", "¿Qué hacías tú a esa hora?"],
    ["Hacía frío y ___.", "llovía", ["llovía", "llovió", "llueve", "llovido"], "clima → imperfecto.", "Было холодно и шёл дождь.", "Hacía frío y llovía."],
    ["Mis padres ___ en esa época.", "trabajaban", ["trabajaban", "trabajaron", "trabajan", "trabajado"], "ellos → trabajaban.", "Мои родители тогда работали.", "Mis padres trabajaban en esa época."],
  ]],
  ["chapter-10-por-para", "por-para", "por / para", [
    ["Este regalo es ___ ti.", "para", ["para", "por", "a", "de"], "destinatario → para.", "Этот подарок для тебя.", "Este regalo es para ti."],
    ["Pasamos ___ el parque.", "por", ["por", "para", "a", "en"], "lugar de paso → por.", "Мы прошли через парк.", "Pasamos por el parque."],
    ["Estudio español ___ viajar.", "para", ["para", "por", "a", "de"], "finalidad → para.", "Учу испанский, чтобы путешествовать.", "Estudio español para viajar."],
    ["Gracias ___ tu ayuda.", "por", ["por", "para", "a", "de"], "motivo → por.", "Спасибо за помощь.", "Gracias por tu ayuda."],
    ["Salgo ___ la mañana.", "por", ["por", "para", "a", "en"], "parte del día → por.", "Выхожу утром.", "Salgo por la mañana."],
    ["El tren ___ Madrid sale a las 10.", "para", ["para", "por", "a", "de"], "destino → para.", "Поезд до Мадрида в 10.", "El tren para Madrid sale a las 10."],
    ["Lo hice ___ ti.", "por", ["por", "para", "a", "de"], "en favor de → por.", "Я сделал это ради тебя.", "Lo hice por ti."],
    ["Necesito el informe ___ mañana.", "para", ["para", "por", "a", "hasta"], "plazo → para.", "Мне нужен отчёт к завтра.", "Necesito el informe para mañana."],
    ["Camino ___ la calle.", "por", ["por", "para", "a", "en"], "a lo largo → por.", "Иду по улице.", "Camino por la calle."],
    ["Compré esto ___ cinco euros.", "por", ["por", "para", "a", "con"], "precio → por.", "Купил это за пять евро.", "Compré esto por cinco euros."],
  ]],
  ["chapter-11-subjuntivo", "subjuntivo", "subjuntivo", [
    ["Quiero que tú ___.", "vengas", ["vengas", "vienes", "vienes*", "venir"], "querer que + subj.", "Хочу, чтобы ты пришёл.", "Quiero que tú vengas."],
    ["Es importante que ella ___.", "estudie", ["estudie", "estudia", "estudió", "estudiar"], "es + adj + que + subj.", "Важно, чтобы она училась.", "Es importante que ella estudie."],
    ["Dudo que él ___ la verdad.", "diga", ["diga", "dice", "dijo", "decir"], "dudar que + subj.", "Сомневаюсь, что он говорит правду.", "Dudo que él diga la verdad."],
    ["Espero que ___ buen tiempo.", "haga", ["haga", "hace", "hizo", "hacer"], "esperar que + subj.", "Надеюсь, будет хорошая погода.", "Espero que haga buen tiempo."],
    ["No creo que ___ posible.", "sea", ["sea", "es", "fue", "ser"], "no creer que + subj.", "Не думаю, что это возможно.", "No creo que sea posible."],
    ["Te recomiendo que ___ más.", "descanses", ["descanses", "descansas", "descansaste", "descansar"], "recomendar que + subj.", "Советую тебе больше отдыхать.", "Te recomiendo que descanses más."],
    ["Ojalá ___ mañana.", "llueva", ["llueva", "llueve", "llovió", "llover"], "ojalá + subj.", "Хотелось бы, чтобы завтра шёл дождь.", "Ojalá llueva mañana."],
    ["Para que ___ a tiempo, sal temprano.", "llegues", ["llegues", "llegas", "llegaste", "llegar"], "para que + subj.", "Чтобы успеть, выйди рано.", "Para que llegues a tiempo, sal temprano."],
    ["Me alegra que ___ aquí.", "estés", ["estés", "estás", "estuviste", "estar"], "emoción + que + subj.", "Рад, что ты здесь.", "Me alegra que estés aquí."],
    ["Es necesario que nosotros ___.", "hablemos", ["hablemos", "hablamos", "hablamos*", "hablar"], "nosotros → hablemos.", "Нужно, чтобы мы поговорили.", "Es necesario que nosotros hablemos."],
  ]],
  ["chapter-12-imperativo", "imperativo", "imperativo", [
    ["___ la puerta, por favor.", "Abre", ["Abre", "Abres", "Abrir", "Abra tú"], "tú afirmativo: abre.", "Открой дверь, пожалуйста.", "Abre la puerta, por favor."],
    ["No ___ tan alto.", "hables", ["hables", "habla", "hablar", "hablas"], "tú negativo: no + subj.", "Не говори так громко.", "No hables tan alto."],
    ["___ usted aquí.", "Espere", ["Espere", "Espera", "Esperar", "Esperas"], "usted: espere.", "Подождите здесь.", "Espere usted aquí."],
    ["___ la verdad.", "Di", ["Di", "Dice", "Dices", "Decir"], "decir → di.", "Скажи правду.", "Di la verdad."],
    ["No ___ eso.", "hagas", ["hagas", "haz", "hacer", "haces"], "no hagas.", "Не делай этого.", "No hagas eso."],
    ["___ atención.", "Presta", ["Presta", "Prestas", "Prestar", "Preste tú"], "presta atención.", "Обрати внимание.", "Presta atención."],
    ["___ ustedes más despacio.", "Hablen", ["Hablen", "Hablan", "Hablar", "Hablad"], "ustedes: -en.", "Говорите медленнее.", "Hablen ustedes más despacio."],
    ["___ el libro.", "Lee", ["Lee", "Lees", "Leer", "Lea tú"], "leer → lee.", "Прочитай книгу.", "Lee el libro."],
    ["No te ___.", "preocupes", ["preocupes", "preocupa", "preocupar", "preocupas"], "no te preocupes.", "Не волнуйся.", "No te preocupes."],
    ["___ aquí mañana.", "Ven", ["Ven", "Vienes", "Venir", "Venga tú"], "venir → ven.", "Приходи сюда завтра.", "Ven aquí mañana."],
  ]],
  ["chapter-13-condicional", "condicional", "condicional", [
    ["Yo ___ un café, por favor.", "quisiera", ["quisiera", "quiero", "quise", "quería"], "quisiera = cortesía.", "Я бы хотел кофе.", "Yo quisiera un café, por favor."],
    ["Ella ___ viajar a Italia.", "me gustaría", ["me gustaría", "me gusta", "me gustó", "me gustaba"], "me gustaría.", "Ей хотелось бы в Италию… wait use ella form", "A ella le gustaría viajar a Italia."],
    ["¿___ ayudarme?", "Podrías", ["Podrías", "Puedes", "Pudiste", "Podías"], "podrías…?", "Не мог бы ты помочь?", "¿Podrías ayudarme?"],
    ["Si tuviera tiempo, ___.", "iría", ["iría", "voy", "fui", "iba"], "condicional.", "Если бы было время, пошёл бы.", "Si tuviera tiempo, iría."],
    ["Nosotros ___ más dinero.", "necesitaríamos", ["necesitaríamos", "necesitamos", "necesitamos*", "necesitábamos"], "nosotros → -íamos.", "Нам нужно было бы больше денег.", "Nosotros necesitaríamos más dinero."],
    ["Él ___ la verdad.", "diría", ["diría", "dice", "dijo", "decía"], "decir → diría.", "Он сказал бы правду.", "Él diría la verdad."],
    ["Yo no ___ eso.", "haría", ["haría", "hago", "hice", "hacía"], "hacer → haría.", "Я бы этого не сделал.", "Yo no haría eso."],
    ["¿Qué ___ usted?", "haría", ["haría", "hace", "hizo", "hacía"], "¿qué haría usted?", "Что бы вы сделали?", "¿Qué haría usted?"],
    ["Me ___ quedarme.", "gustaría", ["gustaría", "gusta", "gustó", "gustaba"], "me gustaría + inf.", "Мне хотелось бы остаться.", "Me gustaría quedarme."],
    ["Ellos ___ venir.", "deberían", ["deberían", "deben", "debieron", "debían"], "deberían.", "Им следовало бы прийти.", "Ellos deberían venir."],
  ]],
  ["chapter-14-estilo-indirecto", "estilo-indirecto", "estilo indirecto", [
    ["Ella dijo que ___ cansada.", "estaba", ["estaba", "está", "estuvo", "esté"], "presente → imperfecto.", "Она сказала, что устала.", "Ella dijo que estaba cansada."],
    ["Me dijo que ___ mañana.", "vendría", ["vendría", "viene", "vino", "venga"], "futuro → condicional.", "Сказал, что придёт завтра.", "Me dijo que vendría mañana."],
    ["Preguntó si yo ___ listo.", "estaba", ["estaba", "estoy", "estuve", "esté"], "¿estás? → si estaba.", "Спросил, готов ли я.", "Preguntó si yo estaba listo."],
    ["Dijo: «Tengo hambre» → Dijo que ___ hambre.", "tenía", ["tenía", "tiene", "tuvo", "tenga"], "tengo → tenía.", "Сказал, что голоден.", "Dijo que tenía hambre."],
    ["Nos pidió que ___.", "esperáramos", ["esperáramos", "esperamos", "esperábamos", "esperemos"], "pedir que + subj.", "Попросил нас подождать.", "Nos pidió que esperáramos."],
    ["Explicó que ___ el tren.", "había perdido", ["había perdido", "perdió", "pierde", "haya perdido"], "pasado → pluscuamperfecto.", "Объяснил, что опоздал на поезд.", "Explicó que había perdido el tren."],
    ["Me preguntó dónde ___.", "vivía", ["vivía", "vivo", "viví", "viva"], "¿dónde vives? → dónde vivía.", "Спросил, где я живу.", "Me preguntó dónde vivía."],
    ["Dijo que no ___ nada.", "sabía", ["sabía", "sabe", "supo", "sepa"], "no sé → no sabía.", "Сказал, что ничего не знает.", "Dijo que no sabía nada."],
    ["Afirmó que ___ la verdad.", "decía", ["decía", "dice", "dijo", "diga"], "digo → decía.", "Утверждал, что говорит правду.", "Afirmó que decía la verdad."],
    ["Prometió que ___ a tiempo.", "llegaría", ["llegaría", "llega", "llegó", "llegue"], "llegaré → llegaría.", "Пообещал, что придёт вовремя.", "Prometió que llegaría a tiempo."],
  ]],
  ["chapter-15-voz-pasiva", "pasiva", "voz pasiva", [
    ["El libro ___ por Cervantes.", "fue escrito", ["fue escrito", "escribió", "es escrito", "fue escribiendo"], "ser + participio.", "Книга написана Сервантесом.", "El libro fue escrito por Cervantes."],
    ["La casa ___ en 1990.", "fue construida", ["fue construida", "construyó", "es construida", "fue construyendo"], "fue + -ida.", "Дом построили в 1990.", "La casa fue construida en 1990."],
    ["Las cartas ___ ayer.", "fueron enviadas", ["fueron enviadas", "enviaron", "son enviadas", "fueron enviando"], "plural → fueron.", "Письма отправили вчера.", "Las cartas fueron enviadas ayer."],
    ["El museo ___ todos los días.", "es visitado", ["es visitado", "visita", "fue visitado", "está visitado"], "habitual → es + part.", "Музей посещают каждый день.", "El museo es visitado todos los días."],
    ["La puerta ___ por el viento.", "fue abierta", ["fue abierta", "abrió", "está abierta", "fue abriendo"], "fue abierta.", "Дверь открыл ветер.", "La puerta fue abierta por el viento."],
    ["Se ___ español aquí.", "habla", ["habla", "hablan", "habló", "hablado"], "pasiva refleja: se habla.", "Здесь говорят по-испански.", "Se habla español aquí."],
    ["El coche ___ reparado.", "está siendo", ["está siendo", "es", "fue", "ha"], "está siendo + part.", "Машину ремонтируют.", "El coche está siendo reparado."],
    ["La película ___ en 2020.", "fue estrenada", ["fue estrenada", "estrenó", "es estrenada", "fue estrenando"], "fue estrenada.", "Фильм вышел в 2020.", "La película fue estrenada en 2020."],
    ["Los documentos ___ firmados.", "han sido", ["han sido", "fueron", "son", "están"], "perfecto pasivo.", "Документы подписаны.", "Los documentos han sido firmados."],
    ["El mensaje ___ por Ana.", "fue enviado", ["fue enviado", "envió", "es enviado", "fue enviando"], "por + agente.", "Сообщение отправила Ана.", "El mensaje fue enviado por Ana."],
  ]],
  ["chapter-16-perifrasis", "perífrasis", "perífrasis", [
    ["Voy a ___ mañana.", "estudiar", ["estudiar", "estudio", "estudié", "estudiando"], "ir a + inf.", "Завтра собираюсь учиться.", "Voy a estudiar mañana."],
    ["Estoy ___ un libro.", "leyendo", ["leyendo", "leer", "leo", "leído"], "estar + gerundio.", "Я читаю книгу.", "Estoy leyendo un libro."],
    ["Acabo de ___.", "llegar", ["llegar", "llego", "llegué", "llegando"], "acabar de + inf.", "Я только что пришёл.", "Acabo de llegar."],
    ["Tengo que ___.", "trabajar", ["trabajar", "trabajo", "trabajé", "trabajando"], "tener que + inf.", "Мне нужно работать.", "Tengo que trabajar."],
    ["Sigo ___ español.", "estudiando", ["estudiando", "estudiar", "estudio", "estudiado"], "seguir + gerundio.", "Продолжаю учить испанский.", "Sigo estudiando español."],
    ["Dejo de ___.", "fumar", ["fumar", "fumo", "fumé", "fumando"], "dejar de + inf.", "Бросаю курить.", "Dejo de fumar."],
    ["Vuelvo a ___.", "intentarlo", ["intentarlo", "intento", "intenté", "intentando"], "volver a + inf.", "Снова попробую.", "Vuelvo a intentarlo."],
    ["Llevo dos horas ___.", "esperando", ["esperando", "esperar", "espero", "esperado"], "llevar + gerundio.", "Жду уже два часа.", "Llevo dos horas esperando."],
    ["Hay que ___.", "practicar", ["practicar", "practico", "practiqué", "practicando"], "hay que + inf.", "Нужно практиковаться.", "Hay que practicar."],
    ["Está a punto de ___.", "salir", ["salir", "sale", "salió", "saliendo"], "estar a punto de.", "Вот-вот выйдет.", "Está a punto de salir."],
  ]],
  ["chapter-17-dele", "dele-review", "DELE review", [
    ["Si ___ tiempo, iría.", "tuviera", ["tuviera", "tengo", "tuve", "tenga"], "condicional 2: imperfecto subj.", "Если бы было время, пошёл бы.", "Si tuviera tiempo, iría."],
    ["Me alegro de que ___ venido.", "hayas", ["hayas", "has", "habías", "hayas sido"], "perfecto de subjuntivo.", "Рад, что ты пришёл.", "Me alegro de que hayas venido."],
    ["No obstante, ___ continuar.", "debemos", ["debemos", "debemos*", "debemos?", "debemos!"], "conector: no obstante.", "Тем не менее нужно продолжать.", "No obstante, debemos continuar."],
    ["El texto ___ en un tono formal.", "está escrito", ["está escrito", "escribió", "es escribiendo", "fue escribiendo"], "registro formal.", "Текст написан в формальном тоне.", "El texto está escrito en un tono formal."],
    ["Aunque ___ cansado, terminó.", "estuviera", ["estuviera", "está", "estuvo", "esté"], "aunque + subj (hipótesis).", "Хотя и устал, закончил.", "Aunque estuviera cansado, terminó."],
    ["Se ___ que llegue pronto.", "espera", ["espera", "esperan", "esperó", "esperado"], "se espera que.", "Ожидается, что скоро приедет.", "Se espera que llegue pronto."],
    ["Hubiera ___ más.", "estudiado", ["estudiado", "estudiar", "estudio", "estudiando"], "hubiera + part.", "Следовало бы больше учиться.", "Hubiera estudiado más."],
    ["En cuanto ___, llámame.", "llegues", ["llegues", "llegas", "llegaste", "llegar"], "en cuanto + subj.", "Как только приедешь, позвони.", "En cuanto llegues, llámame."],
    ["Por un lado…; por ___, …", "otro", ["otro", "otra", "otros", "demás"], "por un lado / por otro.", "С одной стороны… с другой…", "Por un lado…; por otro, …"],
    ["Es probable que ___ razón.", "tenga", ["tenga", "tiene", "tuvo", "tener"], "es probable que + subj.", "Вероятно, он прав.", "Es probable que tenga razón."],
  ]],
];

// Fix broken seed for ch13 row 2 - use proper gustaría form for ella
CHAPTERS[11][3][1] = [
  "A ella le ___ viajar a Italia.",
  "gustaría",
  ["gustaría", "gusta", "gustó", "gustaba"],
  "le gustaría.",
  "Ей хотелось бы поехать в Италию.",
  "A ella le gustaría viajar a Italia.",
];

// Fix dormimos options (duplicate)
CHAPTERS[6][3][3] = [
  "Nosotros ___ en un hotel.",
  "dormimos",
  ["dormimos", "dormíamos", "dormimos ayer", "dormido"],
  "dormir → dormimos (indefinido).",
  "Мы спали в отеле.",
  "Nosotros dormimos en un hotel.",
];

// Fix vivíamos options
CHAPTERS[7][3][2] = [
  "Nosotros ___ en Sevilla.",
  "vivíamos",
  ["vivíamos", "vivimos", "viviremos", "vivido"],
  "situación → imperfecto.",
  "Мы жили в Севилье.",
  "Nosotros vivíamos en Sevilla.",
];

// Fix necesitaríamos options
CHAPTERS[11][3][4] = [
  "Nosotros ___ más dinero.",
  "necesitaríamos",
  ["necesitaríamos", "necesitamos", "necesitábamos", "necesitaremos"],
  "nosotros → -íamos.",
  "Нам нужно было бы больше денег.",
  "Nosotros necesitaríamos más dinero.",
];

// Fix DELE debemos options
CHAPTERS[15][3][2] = [
  "No obstante, ___ continuar.",
  "debemos",
  ["debemos", "debamos", "debíamos", "deberemos"],
  "conector: no obstante.",
  "Тем не менее нужно продолжать.",
  "No obstante, debemos continuar.",
];

for (const [slug, g, topic, rows] of CHAPTERS) {
  const seeds = rows.map(([q, ans, options, explanation, ru, es]) => ({
    q,
    ans,
    options,
    explanation,
    ru,
    es,
    acc: [es.toLowerCase(), ans],
  }));
  ES[slug] = chapterFromSeeds(g, topic, seeds);
}

fs.writeFileSync(outPath, JSON.stringify(ES));
console.log("Wrote", outPath);
console.log("chapters", Object.keys(ES).length);
console.log("ch1 kept:", ES["chapter-1-despertar"].multiple_choice[0].question);
console.log("ch2 sample:", ES["chapter-2-primer-dialogo"].multiple_choice[0].question);
console.log("ch2 opts:", ES["chapter-2-primer-dialogo"].multiple_choice[0].options);
