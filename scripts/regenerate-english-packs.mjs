/* eslint-disable */
/**
 * Regenerate English exercise packs with real pedagogical sentences.
 * Run: node scripts/regenerate-english-packs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-packs.json",
);

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

const EN = {};
const g1 = "eng-a1-be";

EN["eng-ch1-first-steps"] = pack(
  [
    mc("I ___ a teacher.", ["am", "is", "are", "be"], "am", "Choose the correct form of be", "I → am.", g1),
    mc("She ___ from London.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "She → is.", g1),
    mc("They ___ happy.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "They → are.", g1),
    mc("___ you a student?", ["Am", "Is", "Are", "Be"], "Are", "Choose the question form", "You → Are you…?", g1),
    mc("He ___ my brother.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "He → is.", g1),
    mc("We ___ in the park.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "We → are.", g1),
    mc("It ___ cold today.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "It → is.", g1),
    mc("You ___ very kind.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "You → are.", g1),
    mc("My name ___ Pavel.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "My name → is.", g1),
    mc("___ she from Spain?", ["Am", "Is", "Are", "Be"], "Is", "Choose the question form", "She → Is she…?", g1),
    mc("I ___ not hungry.", ["am", "is", "are", "be"], "am", "Choose the correct form of be", "I → am not.", g1),
    mc("The books ___ on the table.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "Plural → are.", g1),
    mc("This ___ my bag.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "This → is.", g1),
    mc("___ they ready?", ["Am", "Is", "Are", "Be"], "Are", "Choose the question form", "They → Are they…?", g1),
    mc("We ___ friends.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "We → are.", g1),
    mc("The weather ___ nice.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "Weather → is.", g1),
    mc("You and I ___ late.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "You and I → are.", g1),
    mc("___ I next?", ["Am", "Is", "Are", "Be"], "Am", "Choose the question form", "I → Am I…?", g1),
    mc("Her parents ___ doctors.", ["am", "is", "are", "be"], "are", "Choose the correct form of be", "Parents → are.", g1),
    mc("That ___ interesting.", ["am", "is", "are", "be"], "is", "Choose the correct form of be", "That → is.", g1),
  ],
  [
    fb("I ___ (be) a student.", "am", "Fill in the correct form of be", "I → am.", g1),
    fb("She ___ (be) from Moscow.", "is", "Fill in the correct form of be", "She → is.", g1),
    fb("They ___ (be) at home.", "are", "Fill in the correct form of be", "They → are.", g1),
    fb("We ___ (be) tired.", "are", "Fill in the correct form of be", "We → are.", g1),
    fb("He ___ (be) a doctor.", "is", "Fill in the correct form of be", "He → is.", g1),
    fb("It ___ (be) a book.", "is", "Fill in the correct form of be", "It → is.", g1),
    fb("You ___ (be) my friend.", "are", "Fill in the correct form of be", "You → are.", g1),
    fb("___ (be) you OK?", "Are", "Question form of be", "You → Are…?", g1, ["Are", "are"]),
    fb("My sister ___ (be) 20.", "is", "Fill in the correct form of be", "Sister → is.", g1),
    fb("The children ___ (be) outside.", "are", "Fill in the correct form of be", "Children → are.", g1),
    fb("I ___ (be) not sure.", "am", "Fill in the correct form of be", "I → am.", g1),
    fb("This city ___ (be) big.", "is", "Fill in the correct form of be", "City → is.", g1),
    fb("___ (be) he your teacher?", "Is", "Question form of be", "He → Is…?", g1, ["Is", "is"]),
    fb("Our house ___ (be) old.", "is", "Fill in the correct form of be", "House → is.", g1),
    fb("You ___ (be) welcome.", "are", "Fill in the correct form of be", "You → are.", g1),
    fb("These shoes ___ (be) new.", "are", "Fill in the correct form of be", "These → are.", g1),
    fb("___ (be) we late?", "Are", "Question form of be", "We → Are…?", g1, ["Are", "are"]),
    fb("The cat ___ (be) black.", "is", "Fill in the correct form of be", "Cat → is.", g1),
    fb("I ___ (be) from Russia.", "am", "Fill in the correct form of be", "I → am.", g1),
    fb("Her eyes ___ (be) blue.", "are", "Fill in the correct form of be", "Eyes → are.", g1),
  ],
  [
    tr("Я студент.", "I am a student", "Translate to English", "I am + a + noun.", g1, ["I'm a student", "i am a student"]),
    tr("Она из Лондона.", "She is from London", "Translate to English", "She is from…", g1, ["She's from London", "she is from London"]),
    tr("Они счастливы.", "They are happy", "Translate to English", "They are + adjective.", g1, ["they're happy", "they are happy"]),
    tr("Мы друзья.", "We are friends", "Translate to English", "We are + noun.", g1, ["we're friends", "we are friends"]),
    tr("Ты учитель?", "Are you a teacher?", "Translate to English", "Are you…?", g1, ["are you a teacher"]),
    tr("Он мой брат.", "He is my brother", "Translate to English", "He is…", g1, ["He's my brother", "he is my brother"]),
    tr("Это книга.", "It is a book", "Translate to English", "It is a…", g1, ["It's a book", "This is a book", "this is a book"]),
    tr("Я не голоден.", "I am not hungry", "Translate to English", "I am not…", g1, ["I'm not hungry", "i am not hungry"]),
    tr("Она дома?", "Is she at home?", "Translate to English", "Is she…?", g1, ["is she at home", "Is she home?"]),
    tr("Мы в парке.", "We are in the park", "Translate to English", "We are in…", g1, ["we're in the park", "we are in the park"]),
    tr("Его имя Том.", "His name is Tom", "Translate to English", "His name is…", g1, ["his name is Tom"]),
    tr("Вы готовы?", "Are you ready?", "Translate to English", "Are you…?", g1, ["are you ready"]),
    tr("Погода хорошая.", "The weather is nice", "Translate to English", "The weather is…", g1, ["the weather is nice", "The weather is good"]),
    tr("Они врачи.", "They are doctors", "Translate to English", "They are + plural noun.", g1, ["they're doctors", "they are doctors"]),
    tr("Я из России.", "I am from Russia", "Translate to English", "I am from…", g1, ["I'm from Russia", "i am from Russia"]),
    tr("Это интересно.", "It is interesting", "Translate to English", "It is + adjective.", g1, ["It's interesting", "This is interesting"]),
    tr("Мы не устали.", "We are not tired", "Translate to English", "We are not…", g1, ["we're not tired", "We aren't tired"]),
    tr("Она моя сестра.", "She is my sister", "Translate to English", "She is…", g1, ["She's my sister", "she is my sister"]),
    tr("Книги на столе.", "The books are on the table", "Translate to English", "Plural → are.", g1, ["the books are on the table"]),
    tr("Ты очень добрый.", "You are very kind", "Translate to English", "You are…", g1, ["you're very kind", "you are very kind"]),
  ],
  [
    ec("I is a teacher.", "I am a teacher", "Correct the mistake", "I → am, not is.", g1, ["i am a teacher"]),
    ec("She are from London.", "She is from London", "Correct the mistake", "She → is.", g1, ["she is from London"]),
    ec("They is happy.", "They are happy", "Correct the mistake", "They → are.", g1, ["they are happy"]),
    ec("Is you a student?", "Are you a student?", "Correct the mistake", "You → Are you…?", g1, ["are you a student?"]),
    ec("He am my brother.", "He is my brother", "Correct the mistake", "He → is.", g1, ["he is my brother"]),
    ec("We is in the park.", "We are in the park", "Correct the mistake", "We → are.", g1, ["we are in the park"]),
    ec("It are cold today.", "It is cold today", "Correct the mistake", "It → is.", g1, ["it is cold today"]),
    ec("You is very kind.", "You are very kind", "Correct the mistake", "You → are.", g1, ["you are very kind"]),
    ec("My name am Pavel.", "My name is Pavel", "Correct the mistake", "My name → is.", g1, ["my name is Pavel"]),
    ec("Are she from Spain?", "Is she from Spain?", "Correct the mistake", "She → Is she…?", g1, ["is she from Spain?"]),
    ec("I are not hungry.", "I am not hungry", "Correct the mistake", "I → am.", g1, ["I'm not hungry", "i am not hungry"]),
    ec("The books is on the table.", "The books are on the table", "Correct the mistake", "Plural → are.", g1, ["the books are on the table"]),
    ec("This are my bag.", "This is my bag", "Correct the mistake", "This → is.", g1, ["this is my bag"]),
    ec("Is they ready?", "Are they ready?", "Correct the mistake", "They → Are they…?", g1, ["are they ready?"]),
    ec("We is friends.", "We are friends", "Correct the mistake", "We → are.", g1, ["we are friends"]),
    ec("The weather are nice.", "The weather is nice", "Correct the mistake", "Weather → is.", g1, ["the weather is nice"]),
    ec("Am you next?", "Are you next?", "Correct the mistake", "You → Are you…?", g1, ["are you next?"]),
    ec("Her parents is doctors.", "Her parents are doctors", "Correct the mistake", "Parents → are.", g1, ["her parents are doctors"]),
    ec("That are interesting.", "That is interesting", "Correct the mistake", "That → is.", g1, ["that is interesting"]),
    ec("You and I is late.", "You and I are late", "Correct the mistake", "You and I → are.", g1, ["you and i are late"]),
  ],
  [
    sb(["I", "am", "a", "teacher"], "I am a teacher", "Build the sentence", "Subject + be + complement.", g1),
    sb(["She", "is", "from", "London"], "She is from London", "Build the sentence", "Subject + is + from…", g1),
    sb(["They", "are", "happy"], "They are happy", "Build the sentence", "They + are + adjective.", g1),
    sb(["Are", "you", "a", "student"], "Are you a student", "Build the sentence", "Question: Are + subject…", g1, ["Are you a student?"]),
    sb(["He", "is", "my", "brother"], "He is my brother", "Build the sentence", "He + is…", g1),
    sb(["We", "are", "in", "the", "park"], "We are in the park", "Build the sentence", "We + are + place.", g1),
    sb(["It", "is", "cold", "today"], "It is cold today", "Build the sentence", "It + is…", g1),
    sb(["You", "are", "very", "kind"], "You are very kind", "Build the sentence", "You + are…", g1),
    sb(["My", "name", "is", "Pavel"], "My name is Pavel", "Build the sentence", "My name is…", g1),
    sb(["Is", "she", "from", "Spain"], "Is she from Spain", "Build the sentence", "Is + she…", g1, ["Is she from Spain?"]),
    sb(["I", "am", "not", "hungry"], "I am not hungry", "Build the sentence", "I am not…", g1),
    sb(["The", "books", "are", "on", "the", "table"], "The books are on the table", "Build the sentence", "Plural + are.", g1),
    sb(["This", "is", "my", "bag"], "This is my bag", "Build the sentence", "This + is…", g1),
    sb(["Are", "they", "ready"], "Are they ready", "Build the sentence", "Are + they…", g1, ["Are they ready?"]),
    sb(["We", "are", "friends"], "We are friends", "Build the sentence", "We + are…", g1),
    sb(["The", "weather", "is", "nice"], "The weather is nice", "Build the sentence", "Weather + is…", g1),
    sb(["Am", "I", "next"], "Am I next", "Build the sentence", "Am + I…", g1, ["Am I next?"]),
    sb(["Her", "parents", "are", "doctors"], "Her parents are doctors", "Build the sentence", "Parents + are…", g1),
    sb(["That", "is", "interesting"], "That is interesting", "Build the sentence", "That + is…", g1),
    sb(["I", "am", "from", "Russia"], "I am from Russia", "Build the sentence", "I am from…", g1),
  ],
);

function chapterFromSeeds(g, topic, seeds) {
  const mcA = [];
  const fbA = [];
  const trA = [];
  const ecA = [];
  const sbA = [];
  for (let i = 0; i < 20; i++) {
    const s = seeds[i % seeds.length];
    const n = i + 1;
    const q = i < seeds.length ? s.q : s.q.replace(/\.$/, "") + ` (${n}).`;
    const opts = s.options || [s.ans, "—", "—", "—"];
    // ensure 4 unique-ish options
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(0, 4);
    while (options.length < 4) options.push(`${s.ans}?`);
    mcA.push(
      mc(q, options, s.ans, "Choose the correct answer", s.explanation || `${topic}: “${s.ans}”.`, g),
    );
    fbA.push(
      fb(
        q.includes("___") ? q : `Complete (${topic}) #${n}: ___`,
        s.ans,
        "Fill in the blank",
        s.explanation || `${topic}: “${s.ans}”.`,
        g,
      ),
    );
    const filled = q.replace("___", s.ans).replace(` (${n}).`, ".");
    const wrong = options.find((o) => o !== s.ans) || "WRONG";
    const broken = q.replace("___", wrong).replace(` (${n}).`, ".");
    const fullEn = s.en || filled;
    const trAcc = (s.acc || [])
      .filter((a) => typeof a === "string" && a.trim().length > 0)
      .filter((a) => a.trim().toLowerCase() !== s.ans.trim().toLowerCase() || a.includes(" "));
    // Never accept the blank token alone as a full translation/correction.
    const safeTrAcc = [
      ...new Set([
        fullEn,
        fullEn.toLowerCase(),
        fullEn.replace(/[.?!,]/g, ""),
        ...trAcc.filter((a) => a.trim().split(/\s+/).length >= 2 || a.length > s.ans.length + 2),
      ]),
    ];
    trA.push(
      tr(
        s.ru || `Write in English using “${s.ans}” (#${n}).`,
        fullEn,
        "Translate to English",
        s.explanation || `${topic}: “${s.ans}”.`,
        g,
        safeTrAcc,
      ),
    );
    ecA.push(
      ec(broken, filled, "Correct the mistake", `Use “${s.ans}”, not “${wrong}”.`, g, [
        filled,
        filled.toLowerCase(),
      ]),
    );
    // Keep the full sentence — truncating at 6 tokens produced broken answers ("… than a").
    const tokens = filled.replace(/[.?!,]/g, "").split(/\s+/).filter(Boolean);
    const toks = tokens.length >= 3 ? tokens : ["Please", "use", s.ans, "here"];
    sbA.push(
      sb(toks, toks.join(" "), "Build the sentence", `${topic}: word order.`, g, [
        toks.join(" ").toLowerCase(),
      ]),
    );
  }
  return pack(mcA, fbA, trA, ecA, sbA);
}

EN["eng-ch2-routines"] = chapterFromSeeds("eng-a1-present-simple", "present simple", [
  { q: "He ___ in a bank.", ans: "works", options: ["work", "works", "working", "worked"], explanation: "He → works (-s).", ru: "Он работает в банке.", en: "He works in a bank." },
  { q: "I ___ like coffee.", ans: "don't", options: ["don't", "doesn't", "isn't", "not"], explanation: "I → don't.", ru: "Я не люблю кофе.", en: "I don't like coffee.", acc: ["I do not like coffee", "i don't like coffee", "I don't like coffee"] },
  { q: "She ___ to school by bus.", ans: "goes", options: ["go", "goes", "going", "gone"], explanation: "She → goes.", ru: "Она ездит в школу на автобусе.", en: "She goes to school by bus." },
  { q: "___ you play tennis?", ans: "Do", options: ["Do", "Does", "Is", "Are"], explanation: "You → Do you…?", ru: "Ты играешь в теннис?", en: "Do you play tennis?" },
  { q: "They ___ English every day.", ans: "study", options: ["study", "studies", "studying", "studied"], explanation: "They → study.", ru: "Они учат английский каждый день.", en: "They study English every day." },
  { q: "My brother ___ TV in the evening.", ans: "watches", options: ["watch", "watches", "watching", "watched"], explanation: "He → watches.", ru: "Мой брат смотрит телевизор вечером.", en: "My brother watches TV in the evening." },
  { q: "We ___ dinner at 7.", ans: "have", options: ["have", "has", "having", "had"], explanation: "We → have.", ru: "Мы ужинаем в 7.", en: "We have dinner at 7." },
  { q: "___ she work here?", ans: "Does", options: ["Do", "Does", "Is", "Are"], explanation: "She → Does she…?", ru: "Она работает здесь?", en: "Does she work here?" },
  { q: "It ___ a lot in autumn.", ans: "rains", options: ["rain", "rains", "raining", "rained"], explanation: "It → rains.", ru: "Осенью часто идёт дождь.", en: "It rains a lot in autumn." },
  { q: "You ___ very fast.", ans: "walk", options: ["walk", "walks", "walking", "walked"], explanation: "You → walk.", ru: "Ты ходишь очень быстро.", en: "You walk very fast." },
  { q: "The shop ___ at 9.", ans: "opens", options: ["open", "opens", "opening", "opened"], explanation: "It → opens.", ru: "Магазин открывается в 9.", en: "The shop opens at 9." },
  { q: "I ___ to music every morning.", ans: "listen", options: ["listen", "listens", "listening", "listened"], explanation: "I → listen.", ru: "Я слушаю музыку каждое утро.", en: "I listen to music every morning." },
  { q: "She ___ not eat meat.", ans: "does", options: ["do", "does", "is", "are"], explanation: "She → does not.", ru: "Она не ест мясо.", en: "She does not eat meat.", acc: ["She doesn't eat meat", "she does not eat meat"] },
  { q: "___ they live in London?", ans: "Do", options: ["Do", "Does", "Is", "Are"], explanation: "They → Do they…?", ru: "Они живут в Лондоне?", en: "Do they live in London?" },
  { q: "He ___ breakfast at home.", ans: "has", options: ["have", "has", "having", "had"], explanation: "He → has.", ru: "Он завтракает дома.", en: "He has breakfast at home." },
  { q: "Cats ___ milk.", ans: "like", options: ["like", "likes", "liking", "liked"], explanation: "Plural → like.", ru: "Кошки любят молоко.", en: "Cats like milk." },
  { q: "The sun ___ in the east.", ans: "rises", options: ["rise", "rises", "rising", "rose"], explanation: "It → rises.", ru: "Солнце встаёт на востоке.", en: "The sun rises in the east." },
  { q: "We ___ to the gym on Mondays.", ans: "go", options: ["go", "goes", "going", "went"], explanation: "We → go.", ru: "Мы ходим в зал по понедельникам.", en: "We go to the gym on Mondays." },
  { q: "___ it snow in winter?", ans: "Does", options: ["Do", "Does", "Is", "Are"], explanation: "It → Does it…?", ru: "Зимой идёт снег?", en: "Does it snow in winter?" },
  { q: "My parents ___ in Moscow.", ans: "live", options: ["live", "lives", "living", "lived"], explanation: "They → live.", ru: "Мои родители живут в Москве.", en: "My parents live in Moscow." },
]);

const MORE = [
  {
    slug: "eng-ch17-questions",
    g: "eng-a1-questions",
    topic: "wh- questions",
    seeds: [
      { q: "___ is your name?", ans: "What", options: ["What", "Where", "When", "Why"], explanation: "What asks for information.", ru: "Как тебя зовут?", en: "What is your name?" },
      { q: "___ do you live?", ans: "Where", options: ["What", "Where", "When", "Who"], explanation: "Where = place.", ru: "Где ты живёшь?", en: "Where do you live?" },
      { q: "___ are you late?", ans: "Why", options: ["What", "Where", "Why", "Who"], explanation: "Why = reason.", ru: "Почему ты опоздал?", en: "Why are you late?" },
      { q: "___ is she?", ans: "Who", options: ["Who", "What", "Where", "When"], explanation: "Who = people.", ru: "Кто она?", en: "Who is she?" },
      { q: "___ old are you?", ans: "How", options: ["How", "What", "When", "Where"], explanation: "How old…?", ru: "Сколько тебе лет?", en: "How old are you?" },
      { q: "___ is the class?", ans: "When", options: ["When", "What", "Who", "Why"], explanation: "When = time.", ru: "Когда занятие?", en: "When is the class?" },
      { q: "___ many books do you have?", ans: "How", options: ["How", "What", "Which", "Where"], explanation: "How many + countable.", ru: "Сколько у тебя книг?", en: "How many books do you have?" },
      { q: "___ do you work?", ans: "Where", options: ["Where", "What", "Who", "Why"], explanation: "Where do you…?", ru: "Где ты работаешь?", en: "Where do you work?" },
      { q: "___ is your favourite colour?", ans: "What", options: ["What", "Who", "Where", "When"], explanation: "What is…?", ru: "Какой твой любимый цвет?", en: "What is your favourite colour?" },
      { q: "___ called you?", ans: "Who", options: ["Who", "What", "Where", "When"], explanation: "Who as subject.", ru: "Кто тебе звонил?", en: "Who called you?" },
      { q: "___ are you from?", ans: "Where", options: ["Where", "What", "When", "Why"], explanation: "Where are you from?", ru: "Откуда ты?", en: "Where are you from?" },
      { q: "___ is your birthday?", ans: "When", options: ["When", "What", "Where", "Who"], explanation: "When = date/time.", ru: "Когда у тебя день рождения?", en: "When is your birthday?" },
      { q: "___ do you study English?", ans: "Why", options: ["Why", "Who", "What", "Where"], explanation: "Why do you…?", ru: "Почему ты учишь английский?", en: "Why do you study English?" },
      { q: "___ much is this?", ans: "How", options: ["How", "What", "When", "Where"], explanation: "How much = price.", ru: "Сколько это стоит?", en: "How much is this?" },
      { q: "___ time is it?", ans: "What", options: ["What", "When", "How", "Where"], explanation: "What time…?", ru: "Который час?", en: "What time is it?" },
      { q: "___ is the nearest station?", ans: "Where", options: ["Where", "What", "When", "Who"], explanation: "Where is…?", ru: "Где ближайшая станция?", en: "Where is the nearest station?" },
      { q: "___ do you get to work?", ans: "How", options: ["How", "What", "Who", "When"], explanation: "How = manner.", ru: "Как ты добираешься на работу?", en: "How do you get to work?" },
      { q: "___ wrote this book?", ans: "Who", options: ["Who", "What", "Where", "When"], explanation: "Who = author.", ru: "Кто написал эту книгу?", en: "Who wrote this book?" },
      { q: "___ does the film start?", ans: "When", options: ["When", "What", "Where", "Why"], explanation: "When does…?", ru: "Когда начинается фильм?", en: "When does the film start?" },
      { q: "___ is the weather like?", ans: "What", options: ["What", "How", "Where", "When"], explanation: "What … like?", ru: "Какая погода?", en: "What is the weather like?" },
    ],
  },
  {
    slug: "eng-ch3-around-town",
    g: "eng-a1-there-is-are",
    topic: "there is/are",
    seeds: [
      { q: "There ___ a bank near here.", ans: "is", options: ["is", "are", "be", "am"], explanation: "Singular → there is.", ru: "Здесь рядом есть банк.", en: "There is a bank near here." },
      { q: "There ___ three books on the table.", ans: "are", options: ["is", "are", "be", "am"], explanation: "Plural → there are.", ru: "На столе три книги.", en: "There are three books on the table." },
      { q: "There aren't ___ apples.", ans: "any", options: ["some", "any", "a", "the"], explanation: "Negative → any.", ru: "Яблок нет.", en: "There aren't any apples." },
      { q: "Is there ___ pharmacy here?", ans: "a", options: ["a", "an", "any", "some"], explanation: "Singular countable → a.", ru: "Здесь есть аптека?", en: "Is there a pharmacy here?" },
      { q: "There are ___ people in the park.", ans: "some", options: ["any", "some", "a", "an"], explanation: "Affirmative plural → some.", ru: "В парке есть люди.", en: "There are some people in the park." },
      { q: "___ there a café on this street?", ans: "Is", options: ["Is", "Are", "Do", "Does"], explanation: "Singular → Is there…?", ru: "На этой улице есть кафе?", en: "Is there a café on this street?" },
      { q: "There ___ no milk in the fridge.", ans: "is", options: ["is", "are", "be", "have"], explanation: "Uncountable → there is.", ru: "В холодильнике нет молока.", en: "There is no milk in the fridge." },
      { q: "Are there ___ chairs?", ans: "any", options: ["some", "any", "a", "the"], explanation: "Questions often use any.", ru: "Есть ли стулья?", en: "Are there any chairs?" },
      { q: "There ___ two windows in the room.", ans: "are", options: ["is", "are", "be", "am"], explanation: "Two → are.", ru: "В комнате два окна.", en: "There are two windows in the room." },
      { q: "There ___ a problem.", ans: "is", options: ["is", "are", "be", "am"], explanation: "A problem → is.", ru: "Есть проблема.", en: "There is a problem." },
      { q: "___ there any messages for me?", ans: "Are", options: ["Is", "Are", "Do", "Does"], explanation: "Plural → Are there…?", ru: "Есть для меня сообщения?", en: "Are there any messages for me?" },
      { q: "There isn't ___ sugar left.", ans: "any", options: ["some", "any", "a", "the"], explanation: "Negative → any.", ru: "Сахара не осталось.", en: "There isn't any sugar left." },
      { q: "There ___ many tourists in summer.", ans: "are", options: ["is", "are", "be", "was"], explanation: "Many + plural → are.", ru: "Летом много туристов.", en: "There are many tourists in summer." },
      { q: "Is there ___ university nearby?", ans: "a", options: ["a", "an", "any", "some"], explanation: "University starts with /j/ → a.", ru: "Рядом есть университет?", en: "Is there a university nearby?" },
      { q: "There ___ an old church in the centre.", ans: "is", options: ["is", "are", "be", "am"], explanation: "An + singular → is.", ru: "В центре есть старая церковь.", en: "There is an old church in the centre." },
      { q: "There aren't ___ buses after midnight.", ans: "any", options: ["some", "any", "a", "the"], explanation: "Negative plural → any.", ru: "После полуночи автобусов нет.", en: "There aren't any buses after midnight." },
      { q: "___ there a supermarket here?", ans: "Is", options: ["Is", "Are", "Do", "Does"], explanation: "Is there + singular.", ru: "Здесь есть супермаркет?", en: "Is there a supermarket here?" },
      { q: "There ___ five people in the queue.", ans: "are", options: ["is", "are", "be", "am"], explanation: "Five people → are.", ru: "В очереди пять человек.", en: "There are five people in the queue." },
      { q: "There is ___ orange on the plate.", ans: "an", options: ["a", "an", "any", "some"], explanation: "Orange → an.", ru: "На тарелке апельсин.", en: "There is an orange on the plate." },
      { q: "Are there ___ shops open now?", ans: "any", options: ["some", "any", "a", "the"], explanation: "Question → any.", ru: "Есть открытые магазины?", en: "Are there any shops open now?" },
    ],
  },
  {
    slug: "eng-ch18-can",
    g: "eng-a1-can",
    topic: "can/can't",
    seeds: [
      { q: "Can you ___ me?", ans: "help", options: ["help", "helps", "helping", "helped"], explanation: "can + base verb.", ru: "Можешь мне помочь?", en: "Can you help me?" },
      { q: "I ___ swim.", ans: "can", options: ["can", "cans", "can to", "am can"], explanation: "can never takes -s.", ru: "Я умею плавать.", en: "I can swim." },
      { q: "She ___ drive.", ans: "can't", options: ["can't", "doesn't can", "isn't can", "can nots"], explanation: "can't = cannot.", ru: "Она не умеет водить.", en: "She can't drive." },
      { q: "___ he speak French?", ans: "Can", options: ["Can", "Does", "Is", "Do"], explanation: "Can + subject…?", ru: "Он говорит по-французски?", en: "Can he speak French?" },
      { q: "They can ___ English.", ans: "speak", options: ["speak", "speaks", "speaking", "spoke"], explanation: "can + base.", ru: "Они умеют говорить по-английски.", en: "They can speak English." },
      { q: "You ___ go now.", ans: "can", options: ["can", "cans", "must to", "are can"], explanation: "permission: can.", ru: "Можешь идти.", en: "You can go now." },
      { q: "We ___ come tomorrow.", ans: "can't", options: ["can't", "doesn't can", "aren't can", "no can"], explanation: "can't = not able.", ru: "Мы не можем прийти завтра.", en: "We can't come tomorrow." },
      { q: "___ I open the window?", ans: "Can", options: ["Can", "Do", "Am", "Does"], explanation: "request: Can I…?", ru: "Можно открыть окно?", en: "Can I open the window?" },
      { q: "He can ___ the piano.", ans: "play", options: ["play", "plays", "playing", "played"], explanation: "can + base.", ru: "Он умеет играть на пианино.", en: "He can play the piano." },
      { q: "Birds ___ fly.", ans: "can", options: ["can", "cans", "are can", "do can"], explanation: "ability.", ru: "Птицы умеют летать.", en: "Birds can fly." },
      { q: "I ___ hear you.", ans: "can't", options: ["can't", "don't can", "am not can", "no"], explanation: "can't hear.", ru: "Я тебя не слышу.", en: "I can't hear you." },
      { q: "___ you cook?", ans: "Can", options: ["Can", "Do", "Are", "Does"], explanation: "Can you…?", ru: "Ты умеешь готовить?", en: "Can you cook?" },
      { q: "She can ___ very well.", ans: "sing", options: ["sing", "sings", "singing", "sang"], explanation: "can + base.", ru: "Она хорошо поёт.", en: "She can sing very well." },
      { q: "Children ___ swim here.", ans: "can", options: ["can", "cans", "must", "are"], explanation: "permission.", ru: "Дети могут здесь плавать.", en: "Children can swim here." },
      { q: "He ___ come today.", ans: "can't", options: ["can't", "doesn't can", "isn't", "no can"], explanation: "can't come.", ru: "Он не может прийти сегодня.", en: "He can't come today." },
      { q: "___ we help?", ans: "Can", options: ["Can", "Do", "Are", "Does"], explanation: "Can we…?", ru: "Мы можем помочь?", en: "Can we help?" },
      { q: "My dog can ___ a ball.", ans: "catch", options: ["catch", "catches", "catching", "caught"], explanation: "can + base.", ru: "Моя собака умеет ловить мяч.", en: "My dog can catch a ball." },
      { q: "You ___ park here.", ans: "can't", options: ["can't", "don't can", "no", "aren't"], explanation: "prohibition with can't.", ru: "Здесь нельзя парковаться.", en: "You can't park here." },
      { q: "I can ___ Spanish a little.", ans: "speak", options: ["speak", "speaks", "speaking", "spoke"], explanation: "can + base.", ru: "Я немного говорю по-испански.", en: "I can speak Spanish a little." },
      { q: "___ she ride a bike?", ans: "Can", options: ["Can", "Does", "Is", "Do"], explanation: "Can she…?", ru: "Она умеет ездить на велосипеде?", en: "Can she ride a bike?" },
    ],
  },
  {
    slug: "eng-ch19-prepositions",
    g: "eng-a1-prepositions",
    topic: "prepositions of place",
    seeds: [
      { q: "The book is ___ the table.", ans: "on", options: ["on", "in", "at", "under"], explanation: "on = surface.", ru: "Книга на столе.", en: "The book is on the table." },
      { q: "She is ___ home.", ans: "at", options: ["at", "in", "on", "to"], explanation: "at home.", ru: "Она дома.", en: "She is at home." },
      { q: "We live ___ London.", ans: "in", options: ["in", "on", "at", "to"], explanation: "in + city.", ru: "Мы живём в Лондоне.", en: "We live in London." },
      { q: "The cat is ___ the bed.", ans: "under", options: ["under", "on", "in", "at"], explanation: "under = below.", ru: "Кот под кроватью.", en: "The cat is under the bed." },
      { q: "The café is ___ to the bank.", ans: "next", options: ["next", "near", "beside", "close"], explanation: "next to.", ru: "Кафе рядом с банком.", en: "The café is next to the bank." },
      { q: "He works ___ the hospital.", ans: "at", options: ["at", "on", "to", "by"], explanation: "at + workplace.", ru: "Он работает в больнице.", en: "He works at the hospital." },
      { q: "There is a picture ___ the wall.", ans: "on", options: ["on", "in", "at", "under"], explanation: "on the wall.", ru: "На стене картина.", en: "There is a picture on the wall." },
      { q: "The keys are ___ my bag.", ans: "in", options: ["in", "on", "at", "under"], explanation: "in = inside.", ru: "Ключи в сумке.", en: "The keys are in my bag." },
      { q: "Meet me ___ the station.", ans: "at", options: ["at", "in", "on", "to"], explanation: "at the station.", ru: "Встретимся на станции.", en: "Meet me at the station." },
      { q: "The shop is ___ the cinema and the park.", ans: "between", options: ["between", "next", "under", "behind"], explanation: "between A and B.", ru: "Магазин между кино и парком.", en: "The shop is between the cinema and the park." },
      { q: "The car is ___ the house.", ans: "in front of", options: ["in front of", "on", "at", "under"], explanation: "in front of.", ru: "Машина перед домом.", en: "The car is in front of the house." },
      { q: "She stands ___ the door.", ans: "at", options: ["at", "on", "in", "to"], explanation: "at the door.", ru: "Она стоит у двери.", en: "She stands at the door." },
      { q: "They live ___ Oxford Street.", ans: "on", options: ["on", "in", "at", "to"], explanation: "on + street.", ru: "Они живут на Оксфорд-стрит.", en: "They live on Oxford Street." },
      { q: "The dog is ___ the sofa.", ans: "under", options: ["under", "at", "to", "between"], explanation: "under.", ru: "Собака под диваном.", en: "The dog is under the sofa." },
      { q: "Put the milk ___ the fridge.", ans: "in", options: ["in", "on", "at", "to"], explanation: "in the fridge.", ru: "Поставь молоко в холодильник.", en: "Put the milk in the fridge." },
      { q: "He is waiting ___ the bus stop.", ans: "at", options: ["at", "on", "in", "to"], explanation: "at the bus stop.", ru: "Он ждёт на остановке.", en: "He is waiting at the bus stop." },
      { q: "The garden is ___ the house.", ans: "behind", options: ["behind", "on", "at", "in"], explanation: "behind = at the back.", ru: "Сад за домом.", en: "The garden is behind the house." },
      { q: "My office is ___ the second floor.", ans: "on", options: ["on", "in", "at", "to"], explanation: "on the floor.", ru: "Мой офис на втором этаже.", en: "My office is on the second floor." },
      { q: "There is a park ___ the school.", ans: "next to", options: ["next to", "on", "at", "under"], explanation: "next to = beside.", ru: "Рядом со школой парк.", en: "There is a park next to the school." },
      { q: "She studies ___ the library.", ans: "at", options: ["at", "on", "to", "under"], explanation: "at the library.", ru: "Она учится в библиотеке.", en: "She studies at the library." },
    ],
  },
];

for (const ch of MORE) {
  EN[ch.slug] = chapterFromSeeds(ch.g, ch.topic, ch.seeds);
}

// Remaining chapters with compact but real seeds
const REST = [
  ["eng-ch4-past-stories", "eng-a2-past-simple", "past simple", [
    ["I ___ to London yesterday.", "went", ["go", "went", "gone", "goes"], "go → went.", "Я ездил в Лондон вчера.", "I went to London yesterday."],
    ["She didn't ___ TV.", "watch", ["watched", "watch", "watching", "watches"], "didn't + base verb.", "Она не смотрела телевизор.", "She didn't watch TV."],
    ["___ you see the film?", "Did", ["Do", "Did", "Does", "Was"], "Did + subject + base.", "Ты видел фильм?", "Did you see the film?"],
    ["He ___ a new car last week.", "bought", ["buy", "bought", "buyed", "buys"], "buy → bought.", "Он купил машину на прошлой неделе.", "He bought a new car last week."],
    ["We ___ happy to see you.", "were", ["was", "were", "are", "is"], "We → were.", "Мы были рады тебя видеть.", "We were happy to see you."],
  ]],
  ["eng-ch5-choices", "eng-a2-comparatives", "comparatives", [
    ["An elephant is ___ than a cat.", "bigger", ["big", "bigger", "biggest", "more big"], "big → bigger than.", "Слон больше кошки.", "An elephant is bigger than a cat."],
    ["She is the ___ student.", "best", ["good", "better", "best", "more good"], "good → the best.", "Она лучшая ученица.", "She is the best student."],
    ["This building is ___ than that one.", "taller", ["tall", "taller", "tallest", "more tall"], "tall → taller.", "Это здание выше того.", "This building is taller than that one."],
    ["This book is ___ interesting.", "more", ["more", "most", "much", "many"], "long adj → more.", "Эта книга интереснее.", "This book is more interesting."],
    ["I am older ___ my sister.", "than", ["then", "than", "that", "as"], "comparative + than.", "Я старше сестры.", "I am older than my sister."],
  ]],
  ["eng-ch20-going-to", "eng-a2-going-to", "going to", [
    ["I am going to ___ a book.", "read", ["read", "reading", "reads", "readed"], "going to + base.", "Я собираюсь читать книгу.", "I am going to read a book."],
    ["She ___ going to visit us.", "is", ["am", "is", "are", "be"], "She → is going to.", "Она собирается нас навестить.", "She is going to visit us."],
    ["___ you going to come?", "Are", ["Am", "Is", "Are", "Do"], "Are you going to…?", "Ты собираешься прийти?", "Are you going to come?"],
    ["They are going to ___ early.", "leave", ["leave", "leaves", "leaving", "left"], "going to + base.", "Они собираются уехать рано.", "They are going to leave early."],
    ["Look at the clouds — it is ___ to rain.", "going", ["go", "going", "gone", "goes"], "evidence → going to.", "Смотри на тучи — будет дождь.", "Look at the clouds — it is going to rain."],
  ]],
  ["eng-ch6-experiences", "eng-a2-present-perfect", "present perfect", [
    ["I ___ been to Paris.", "have", ["have", "has", "had", "am"], "I → have.", "Я был в Париже.", "I have been to Paris."],
    ["She ___ never eaten sushi.", "has", ["have", "has", "had", "is"], "She → has.", "Она никогда не ела суши.", "She has never eaten sushi."],
    ["Have you ___ this film?", "seen", ["see", "saw", "seen", "seeing"], "have + past participle.", "Ты смотрел этот фильм?", "Have you seen this film?"],
    ["They have ___ to Italy twice.", "been", ["been", "gone", "went", "go"], "been = visited and returned.", "Они были в Италии дважды.", "They have been to Italy twice."],
    ["He has already ___ home.", "gone", ["gone", "been", "went", "go"], "gone = left for a place.", "Он уже ушёл домой.", "He has already gone home."],
  ]],
  ["eng-ch21-quantifiers", "eng-a2-quantifiers", "quantifiers", [
    ["I don't have ___ milk.", "any", ["some", "any", "many", "much"], "negative → any.", "У меня нет молока.", "I don't have any milk."],
    ["How ___ books do you have?", "many", ["much", "many", "some", "any"], "countable → many.", "Сколько у тебя книг?", "How many books do you have?"],
    ["There isn't ___ sugar left.", "any", ["some", "any", "many", "a"], "negative → any.", "Сахара не осталось.", "There isn't any sugar left."],
    ["We have ___ time.", "some", ["some", "any", "many", "a"], "affirmative → some.", "У нас есть время.", "We have some time."],
    ["How ___ money do you need?", "much", ["much", "many", "some", "any"], "uncountable → much.", "Сколько тебе нужно денег?", "How much money do you need?"],
  ]],
  ["eng-ch7-future-plans", "eng-b1-future-conditional", "future & first conditional", [
    ["I ___ call you tomorrow.", "will", ["will", "would", "am", "do"], "will + base verb.", "Я позвоню тебе завтра.", "I will call you tomorrow."],
    ["If it rains, we ___ stay home.", "will", ["will", "would", "would have", "had"], "1st: If + present, will.", "Если будет дождь, мы останемся дома.", "If it rains, we will stay home."],
    ["He ___ come to the party.", "won't", ["won't", "will", "wouldn't", "don't"], "will not → won't.", "Он не придёт на вечеринку.", "He won't come to the party."],
    ["If you study, you ___ pass.", "will", ["will", "would", "are", "can"], "1st conditional.", "Если будешь учиться, сдашь.", "If you study, you will pass."],
    ["___ I open the window?", "Shall", ["Shall", "Will", "Do", "Am"], "Shall I…? offers.", "Мне открыть окно?", "Shall I open the window?"],
  ]],
  ["eng-ch22-modals", "eng-b1-modals", "modals", [
    ["You ___ rest.", "should", ["should", "must to", "can to", "are"], "should = advice.", "Тебе следует отдохнуть.", "You should rest."],
    ["You ___ wear a seatbelt.", "must", ["must", "should to", "can", "may to"], "must = obligation.", "Нужно пристегнуться.", "You must wear a seatbelt."],
    ["I ___ to work tomorrow.", "have", ["have", "must", "should", "can"], "have to.", "Мне надо работать завтра.", "I have to work tomorrow."],
    ["You ___ smoke here.", "mustn't", ["mustn't", "don't have to", "should", "can"], "mustn't = prohibition.", "Здесь нельзя курить.", "You mustn't smoke here."],
    ["You don't ___ to come.", "have", ["have", "must", "should", "can"], "don't have to = not necessary.", "Тебе не обязательно приходить.", "You don't have to come."],
  ]],
  ["eng-ch8-storytelling", "eng-b1-narrative", "narrative tenses", [
    ["I ___ reading when she called.", "was", ["was", "were", "am", "did"], "past continuous: was + -ing.", "Я читал, когда она позвонила.", "I was reading when she called."],
    ["They ___ watching TV at 8.", "were", ["was", "were", "are", "did"], "They → were + -ing.", "Они смотрели телевизор в 8.", "They were watching TV at 8."],
    ["He ___ finished before I arrived.", "had", ["had", "has", "have", "was"], "past perfect: had + V3.", "Он закончил до моего прихода.", "He had finished before I arrived."],
    ["___ I was cooking, the phone rang.", "While", ["While", "When", "During", "Then"], "While + past continuous.", "Пока я готовил, зазвонил телефон.", "While I was cooking, the phone rang."],
    ["She left ___ the film started.", "when", ["when", "while", "during", "as"], "when + past simple.", "Она ушла, когда фильм начался.", "She left when the film started."],
  ]],
  ["eng-ch9-real-world", "eng-b1-perfect-continuous", "perfect continuous", [
    ["I ___ been waiting for an hour.", "have", ["have", "has", "had", "am"], "I have been + -ing.", "Я жду уже час.", "I have been waiting for an hour."],
    ["She has ___ studying all day.", "been", ["been", "being", "be", "was"], "has been + -ing.", "Она учится весь день.", "She has been studying all day."],
    ["We have lived here ___ 2019.", "since", ["since", "for", "from", "during"], "since + point in time.", "Мы живём здесь с 2019.", "We have lived here since 2019."],
    ["They have been working ___ three hours.", "for", ["for", "since", "during", "from"], "for + period.", "Они работают уже три часа.", "They have been working for three hours."],
    ["He ___ been feeling tired lately.", "has", ["have", "has", "had", "is"], "He → has been.", "Он в последнее время устаёт.", "He has been feeling tired lately."],
  ]],
  ["eng-ch10-what-if", "eng-b2-conditionals", "conditionals", [
    ["If it rains, we ___ stay home.", "will", ["will", "would", "would have", "had"], "1st conditional: will.", "Если будет дождь, мы останемся дома.", "If it rains, we will stay home."],
    ["If I ___ rich, I would travel.", "were", ["was", "were", "am", "had"], "2nd: If I were…", "Если бы я был богат, я бы путешествовал.", "If I were rich, I would travel."],
    ["If she ___ studied, she would have passed.", "had", ["has", "had", "have", "would"], "3rd: If + had + V3.", "Если бы она училась, она бы сдала.", "If she had studied, she would have passed."],
    ["I ___ buy it if I had money.", "would", ["will", "would", "would have", "can"], "2nd: would + base.", "Я бы купил это, если бы были деньги.", "I would buy it if I had money."],
    ["___ you heat ice, it melts.", "If", ["If", "When", "Unless", "Although"], "0 conditional: If + present.", "Если нагреть лёд, он тает.", "If you heat ice, it melts."],
  ]],
  ["eng-ch11-passive", "eng-b2-passive", "passive", [
    ["English ___ spoken here.", "is", ["is", "are", "was", "be"], "is + V3.", "Здесь говорят по-английски.", "English is spoken here."],
    ["The letter ___ written yesterday.", "was", ["was", "were", "is", "been"], "past passive: was + V3.", "Письмо написали вчера.", "The letter was written yesterday."],
    ["These cars ___ made in Japan.", "are", ["is", "are", "was", "been"], "plural → are + V3.", "Эти машины сделаны в Японии.", "These cars are made in Japan."],
    ["The book has ___ translated.", "been", ["been", "being", "be", "was"], "present perfect passive.", "Книга переведена.", "The book has been translated."],
    ["The song was written ___ John.", "by", ["by", "from", "with", "of"], "agent: by.", "Песню написал Джон.", "The song was written by John."],
  ]],
  ["eng-ch12-beyond-borders", "eng-b2-reported-clauses", "reported speech", [
    ["She ___ she was tired.", "said", ["said", "told", "asked", "spoke"], "say + (that) clause.", "Она сказала, что устала.", "She said she was tired."],
    ["He ___ me to wait.", "told", ["said", "told", "asked", "spoke"], "tell + object + to.", "Он сказал мне подождать.", "He told me to wait."],
    ["They ___ if I was ready.", "asked", ["said", "told", "asked", "told to"], "ask + if.", "Они спросили, готов ли я.", "They asked if I was ready."],
    ["She said ___ she liked tea.", "that", ["that", "if", "what", "which"], "optional that.", "Она сказала, что любит чай.", "She said that she liked tea."],
    ["He asked ___ I could help.", "if", ["if", "that", "what", "which"], "ask if / whether.", "Он спросил, могу ли я помочь.", "He asked if I could help."],
  ]],
  ["eng-ch13-advanced-structures", "eng-c1-inversion", "inversion", [
    ["Never ___ I seen such beauty.", "have", ["have", "had", "did", "was"], "Never have I…", "Никогда я не видел такой красоты.", "Never have I seen such beauty."],
    ["Hardly ___ I arrived when it started raining.", "had", ["had", "have", "did", "was"], "Hardly had I…", "Едва я приехал, как начался дождь.", "Hardly had I arrived when it started raining."],
    ["Not only ___ she late, she also forgot her keys.", "was", ["was", "were", "did", "had"], "Not only was she…", "Она не только опоздала…", "Not only was she late, she also forgot her keys."],
    ["Only then ___ I understand.", "did", ["did", "do", "have", "had"], "Only then did I…", "Только тогда я понял.", "Only then did I understand."],
    ["Seldom ___ we meet.", "do", ["do", "does", "did", "have"], "Seldom do we…", "Мы редко встречаемся.", "Seldom do we meet."],
  ]],
  ["eng-ch14-art-language", "eng-c1-discourse", "discourse", [
    ["I'll have the red ___, please.", "one", ["one", "ones", "it", "them"], "one replaces a noun.", "Мне красный, пожалуйста.", "I'll have the red one, please."],
    ["I think ___.", "so", ["so", "it", "that", "yes"], "I think so.", "Я думаю, что да.", "I think so."],
    ["She was ___ exhausted.", "absolutely", ["absolutely", "very", "much", "too"], "intensifier.", "Она была совершенно измотана.", "She was absolutely exhausted."],
    ["Such ___ his anger that he left.", "was", ["was", "is", "were", "be"], "Such was…", "Таков был его гнев…", "Such was his anger that he left."],
    ["He was tired; ___, he continued.", "nevertheless", ["nevertheless", "therefore", "moreover", "furthermore"], "contrast connector.", "Он устал; тем не менее продолжил.", "He was tired; nevertheless, he continued."],
  ]],
  ["eng-ch15-mastery", "eng-c1-mixed-conditionals", "mixed conditionals", [
    ["If I had studied medicine, I ___ be a doctor now.", "would", ["would", "will", "would have", "had"], "past → present result.", "Если бы я учил медицину, я был бы врачом.", "If I had studied medicine, I would be a doctor now."],
    ["If I ___ taller, I would have joined the team.", "were", ["was", "were", "am", "had"], "present → past result.", "Если бы я был выше, я бы попал в команду.", "If I were taller, I would have joined the team."],
    ["If she ___ left earlier, she would be here.", "had", ["has", "had", "have", "would"], "If + had + V3.", "Если бы она вышла раньше…", "If she had left earlier, she would be here."],
    ["I would ___ called if I had known.", "have", ["have", "had", "be", "been"], "would have + V3.", "Я бы позвонил, если бы знал.", "I would have called if I had known."],
    ["If he were nicer, people would ___ him more.", "like", ["like", "liked", "likes", "liking"], "would + base.", "Если бы он был добрее…", "If he were nicer, people would like him more."],
  ]],
  ["eng-ch16-ielts", "eng-c1-review", "exam English", [
    ["Which connector shows contrast? ___", "nevertheless", ["furthermore", "nevertheless", "therefore", "moreover"], "nevertheless = contrast.", "Какой союз показывает контраст?", "nevertheless"],
    ["He ___ have left — his keys are still here.", "can't", ["must", "can't", "should", "might"], "can't have = impossible.", "Он не мог уйти — ключи здесь.", "He can't have left — his keys are still here."],
    ["___, this is important for the exam.", "Furthermore", ["Furthermore", "Nevertheless", "However", "Although"], "Furthermore adds a point.", "Более того, это важно для экзамена.", "Furthermore, this is important for the exam."],
    ["She should ___ studied harder for the test.", "have", ["have", "had", "be", "been"], "should have + V3.", "Ей следовало учиться усерднее.", "She should have studied harder for the test."],
    ["In academic writing, contractions are usually ___.", "avoided", ["encouraged", "avoided", "required", "preferred"], "formal register.", "В академическом письме сокращения обычно избегают.", "In academic writing, contractions are usually avoided."],
  ]],
];

for (const [slug, g, topic, rows] of REST) {
  const seeds = rows.map(([q, ans, options, explanation, ru, en]) => ({
    q,
    ans,
    options,
    explanation,
    ru,
    en,
    acc: [en.toLowerCase(), ans],
  }));
  EN[slug] = chapterFromSeeds(g, topic, seeds);
}

fs.writeFileSync(outPath, JSON.stringify(EN));
console.log("Wrote", outPath);
console.log("chapters", Object.keys(EN).length);
console.log("sample:", EN["eng-ch1-first-steps"].multiple_choice[1].question);
console.log("opts:", EN["eng-ch1-first-steps"].multiple_choice[1].options);
