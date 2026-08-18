import type { GrammarTopic } from "@/types";

/** Additional core English grammar to narrow the gap with the Spanish bank. */
export const ENGLISH_GRAMMAR_EXTRA: GrammarTopic[] = [
  {
    slug: "eng-a1-articles-basics",
    title: "Артикли a/an/the (база)",
    titleEs: "Articles a/an/the",
    level: "A1",
    category: "Артикли",
    summary: "Когда ставить a/an, the и когда артикль не нужен.",
    content: `> **Путь:** A1. Сначала выбери **a / an / the / ничего** перед существительным.

## Articles — база

### a / an
- \`a\` перед согласным звуком: \`a book\`, \`a university\` (/j/)
- \`an\` перед гласным звуком: \`an apple\`, \`an hour\` (/aʊ/)

### the
Когда и слушатель знают, о чём речь: \`the sun\`, \`the book on the table\`.

### Zero article
\`I like music.\` · \`She goes to school.\` · \`Life is short.\`

> 💡 Смотрите на **звук**, не на букву: \`an hour\`, но \`a house\`.`,
  },
  {
    slug: "eng-a1-possessives",
    title: "Притяжательные my/your и 's",
    titleEs: "Possessives",
    level: "A1",
    category: "Местоимения",
    summary: "my/your/his… и Saxon genitive: Anna's bag.",
    content: `## Possessives

### Determiner
\`my, your, his, her, its, our, their\` + существительное: \`her phone\`

### 's
- \`Tom's car\` · \`my parents' house\` (мн.ч. на -s → только ')
- Вещи / время: \`a day's work\`, \`the city's centre\`

### Не путать
\`its\` (его/её *вещи*) ≠ \`it's\` (= it is)`,
  },
  {
    slug: "eng-a1-can-ability",
    title: "Can / can't — умение и разрешение",
    titleEs: "Can / can't",
    level: "A1",
    category: "Модальные",
    summary: "Умею / не умею, можно / нельзя: can, can't, Can I…?",
    content: `## Can

- Ability: \`I can swim.\` · \`She can't drive.\`
- Permission: \`Can I open the window?\`
- Request: \`Can you help me?\`

Форма без to: \`can go\`, не \`*can to go\`.`,
  },
  {
    slug: "eng-a2-countable",
    title: "Исчисляемые и неисчисляемые",
    titleEs: "Countable & uncountable",
    level: "A2",
    category: "Существительные",
    summary: "much/many, some/any, a few/a little с countables.",
    content: `## Countable vs uncountable

| Countable | Uncountable |
|---|---|
| apple / apples | water, rice, advice |
| many apples | much water |
| a few ideas | a little time |

\`some\` в + ; \`any\` чаще в −/?  
\`Information\`, \`advice\`, \`furniture\` — обычно **без** -s.`,
  },
  {
    slug: "eng-a2-present-perfect-intro",
    title: "Present Perfect: опыт (just/already/yet)",
    titleEs: "Present Perfect basics",
    level: "A2",
    category: "Времена",
    summary: "Have you ever…? just, already, yet — связь с настоящим.",
    content: `## Present Perfect (intro)

\`have/has + V3\`

- Experience: \`I have visited Madrid.\`
- \`just / already\` · \`yet\` в −/?
- \`ever / never\`

Не путать с Past Simple: \`I went yesterday\` (время указано) vs \`I have been there\` (опыт).`,
  },
  {
    slug: "eng-b1-conditionals-review",
    title: "Условные: zero / 1st / 2nd",
    titleEs: "Conditionals 0–2",
    level: "B1",
    category: "Условные",
    summary: "If + present; if + present → will; if + past → would.",
    content: `## Conditionals

| Type | Form | Use |
|---|---|---|
| Zero | If + Present, Present | законы, привычки |
| 1st | If + Present, will | реальные будущие |
| 2nd | If + Past, would | гипотеза сейчас |

\`If I **were** you…\` — устойчиво.`,
  },
  {
    slug: "eng-b1-reported-speech",
    title: "Косвенная речь (база)",
    titleEs: "Reported speech basics",
    level: "B1",
    category: "Речь",
    summary: "Say/tell + сдвиг времён; questions и requests.",
    content: `## Reported speech

- \`She said (that) she **was** tired.\` (Present → Past)
- \`He told me to wait.\`
- Questions: \`She asked where I lived.\`

Сдвиг не всегда нужен, если факт всё ещё истинен: \`She said the Earth **is** round.\``,
  },
  {
    slug: "eng-b1-relative-clauses",
    title: "Относительные местоимения who/which/that",
    titleEs: "Relative clauses",
    level: "B1",
    category: "Сложное предложение",
    summary: "Defining clauses: the man who…, the book which…",
    content: `## Relative clauses

- People: \`who / that\`
- Things: \`which / that\`
- Possessive: \`whose\`

Defining (без запятых): \`The teacher **who** helped me…\`  
Можно опустить object pronoun: \`The film (that) I saw…\``,
  },
  {
    slug: "eng-b2-passive-advanced",
    title: "Пассив: все времена и have something done",
    titleEs: "Passive voice advanced",
    level: "B2",
    category: "Залог",
    summary: "be + V3 во временах; каузатив have/get something done.",
    content: `## Passive

\`The report **was written** yesterday.\`  
\`A new law **has been passed**.\`  
\`The road **is being repaired**.\`

### have something done
\`I **had** my hair **cut**.\` — услуга, не сам сделал.`,
  },
  {
    slug: "eng-b2-modals-deduction",
    title: "Модальные для вывода: must/might/can't",
    titleEs: "Modals of deduction",
    level: "B2",
    category: "Модальные",
    summary: "Логические выводы о настоящем и прошлом.",
    content: `## Deduction

| Modal | Meaning |
|---|---|
| must | почти уверен(а), что да |
| might / may / could | возможно |
| can't | почти уверен(а), что нет |

Past: \`must have left\`, \`might have forgotten\`, \`can't have seen\`.`,
  },
];
