import type { GrammarTopic } from "@/types";
import { ENGLISH_GRAMMAR_EXAM_WRITING } from "./grammar-exam-writing";
import { ENGLISH_GRAMMAR_EXTRA } from "./grammar-extra";

// =====================================================================
// English Course — Grammar Topics
// Original explanations in the style of Spanish with Pavel.
// Sequence based on the Life textbook methodology.
// Extra core topics + IELTS/Cambridge writing track appended below.
// =====================================================================

const ENGLISH_GRAMMAR_CORE: GrammarTopic[] = [
  // ===== A1 ==========================================================
  {
    slug: "eng-a1-be",
    title: "Глагол be (am/is/are)",
    titleEs: "Verbo be (am/is/are)",
    level: "A1",
    category: "Глаголы",
    summary: "Глагол «быть» в настоящем: am, is, are.",
    content: `## Глагол **be** — основа английского

В английском глагол «быть» имеет **три формы** в настоящем:

| Подлежащее | Форма | Пример |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Сокращения (contractions)
\`I am → I'm\`, \`He is → He's\`, \`They are → They're\`

### Отрицание
\`I'm not\`, \`He isn't / He's not\`, \`They aren't / They're not\`

### Вопросы
\`Am I...? Is he...? Are they...?\`

> 💡 Запомни: **I am, He/She/It is, You/We/They are** — это база всей английской грамматики.`,
  },
  {
    slug: "eng-a1-present-simple",
    title: "Present Simple",
    titleEs: "Presente Simple",
    level: "A1",
    category: "Времена",
    summary: "Настоящее простое: рутины, факты, регулярные действия.",
    content: `## Present Simple — рутины и факты

### Образование
- I/You/We/They + **глагол**: \`I work\`, \`They live\`
- He/She/It + **глагол + -s**: \`He works\`, \`She lives\`

### Окончание -s (для he/she/it)
| Окончание глагола | + | Пример |
|---|---|---|
| согласная | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| согласная + y | **-ies** | study → stud**ies** |

### Отрицание и вопрос — через **do/does**
- \`I don't work\`, \`He doesn't work\`
- \`Do you work?\`, \`Does he work?\`

### Маркеры времени
\`always\`, \`usually\`, \`often\`, \`sometimes\`, \`never\`, \`every day\`

> 💡 **He/she/it** — всегда с **-s** или **-es**. Это самое частое правило в английском.`,
  },
  {
    slug: "eng-a1-there-is-are",
    title: "There is / There are",
    titleEs: "There is / There are",
    level: "A1",
    category: "Конструкции",
    summary: "Конструкция «есть/находится»: there is (ед.ч.), there are (мн.ч.).",
    content: `## There is / There are — «там есть»

| Единственное | Множественное |
|---|---|
| **There is** a book | **There are** books |
| **There's** a table | — |

### Вопросы
\`Is there...?\` / \`Are there...?\`
\`Is there a bank near here?\`

### Отрицание
\`There isn't\` / \`There aren't\`

### С конструкцией some/any
- **Утверждение:** \`There are some books\`
- **Вопрос:** \`Are there any books?\`
- **Отрицание:** \`There aren't any books\`

> 💡 С неисчисляемыми (water, money, time): \`There is some water\``,
  },
  {
    slug: "eng-a1-can",
    title: "Can / Can't",
    titleEs: "Can / Can't",
    level: "A1",
    category: "Модальные",
    summary: "Модальный глагол can: способность, возможность.",
    content: `## Can / Can't — мочь, уметь

\`can\` не меняется по лицам: **I can, He can, They can**.

| Форма | Пример |
|---|---|
| + | I **can** swim |
| - | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Использование
1. **Способность:** \`I can speak English\`
2. **Просьба:** \`Can you help me?\`
3. **Разрешение:** \`You can go now\`

> 💡 После can — **всегда инфинитив без to**: \`can swim\` (не ~~can to swim~~).`,
  },
  {
    slug: "eng-a1-questions",
    title: "Вопросительные слова",
    titleEs: "Wh- Questions",
    level: "A1",
    category: "Синтаксис",
    summary: "What, who, where, when, why, how — вопросы на английском.",
    content: `## Wh- Questions — специальные вопросы

| Слово | Значение | Пример |
|---|---|---|
| **What** | что / какой | What is your name? |
| **Who** | кто | Who is she? |
| **Where** | где / куда | Where do you live? |
| **When** | когда | When is the class? |
| **Why** | почему | Why are you late? |
| **How** | как | How are you? |
| **How old** | сколько лет | How old are you? |
| **How many** | сколько (исчисл.) | How many books? |

### Порядок слов
\`Wh- + вспомогательный + подлежащее + глагол\`
- \`Where **do** you live?\`
- \`What **is** your job?\` (с be вспомогательный не нужен отдельно)

> 💡 В ответе на Why часто используют **because**.`,
  },
  {
    slug: "eng-a1-prepositions",
    title: "Предлоги места",
    titleEs: "Preposiciones de Lugar",
    level: "A1",
    category: "Предлоги",
    summary: "in, on, at, under, between, next to — где находится предмет.",
    content: `## Prepositions of Place

| Предлог | Использование | Пример |
|---|---|---|
| **in** | внутри | in the box, in London |
| **on** | на поверхности | on the table, on the wall |
| **at** | точная точка | at the door, at school |
| **under** | под | under the bed |
| **between** | между | between A and B |
| **next to** | рядом | next to the bank |
| **behind** | за | behind the house |
| **in front of** | перед | in front of the car |

### in / on / at с местами
- **at** home, at work, at the station
- **in** a city/country: in Spain
- **on** a street: on Oxford Street

> 💡 \`at\` часто для «в учреждении / на точке», \`in\` — «внутри пространства».`,
  },

  // ===== A2 ==========================================================
  {
    slug: "eng-a2-past-simple",
    title: "Past Simple",
    titleEs: "Pasado Simple",
    level: "A2",
    category: "Времена",
    summary: "Прошедшее простое: регулярные и неправильные глаголы.",
    content: `## Past Simple — завершённые действия в прошлом

### Правильные глаголы → +**-ed**
\`work → worked\`, \`play → played\`, \`study → studied\`

### Неправильные — нужно учить!
\`go → went\`, \`see → saw\`, \`have → had\`, \`do → did\`, \`make → made\`

### Отрицание и вопрос → через **did** (глагол возвращается в инфинитив!)
- \`I didn't work\` (НЕ ~~didn't worked~~)
- \`Did you go?\` (НЕ ~~Did you went?~~)

### Маркеры
\`yesterday\`, \`last week\`, \`two days ago\`, \`in 2020\`

### Глагол be в прошедшем
\`I/He/She/It **was**\`, \`You/We/They **were**\`

> 💡 **Главное правило:** с did — глагол без окончания. Did you **see**?`,
  },
  {
    slug: "eng-a2-comparatives",
    title: "Comparatives & Superlatives",
    titleEs: "Comparativos y Superlativos",
    level: "A2",
    category: "Прилагательные",
    summary: "Сравнительная и превосходная степень прилагательных.",
    content: `## Comparatives & Superlatives

### Правила
| Длина | Сравнительная | Превосходная |
|---|---|---|
| 1 слог | **-er** → bigger | **the -est** → the biggest |
| 2 слога (-y) | **-ier** → happier | **the -iest** → the happiest |
| 2+ слога | **more** → more beautiful | **the most** → the most beautiful |

### Неправильные
| Прилагательное | Сравнительная | Превосходная |
|---|---|---|
| good | **better** | **the best** |
| bad | **worse** | **the worst** |
| far | **further** | **the furthest** |

### Конструкция
- \`A is **bigger than** B\` — A больше B
- \`A is **the biggest**\` — A самый большой
- \`as ... as\` → \`as big as\` = такой же большой как

> 💡 \`good → better → the best\` — учить обязательно!`,
  },
  {
    slug: "eng-a2-present-perfect",
    title: "Present Perfect",
    titleEs: "Pretérito Perfecto",
    level: "A2",
    category: "Времена",
    summary: "Прошедшее с связью с настоящим: опыт, результаты.",
    content: `## Present Perfect — опыт и результат

### Формула: **have/has** + **V3** (past participle)

| Лицо | Вспомогательный | Пример |
|---|---|---|
| I/You/We/They | **have** | I have visited London |
| He/She/It | **has** | She has finished |

### Образование V3
- Правильные: +**-ed** → worked, played
- Неправильные: \`go → gone\`, \`see → seen\`, \`eat → eaten\`

### Использование
1. **Жизненный опыт:** \`I have been to Paris\`
2. **Свежий результат:** \`She has lost her keys\` (и до сих пор не нашла)
3. **Началось в прошлом, продолжается:** \`I have lived here for 5 years\`

### Маркеры
\`ever\`, \`never\`, \`already\`, \`yet\`, \`just\`, \`for\`, \`since\`

> ⚠️ С конкретным временем прошлого → Past Simple: \`I went yesterday\` (не ~~have gone yesterday~~).`,
  },
  {
    slug: "eng-a2-going-to",
    title: "Going to",
    titleEs: "Going to",
    level: "A2",
    category: "Времена",
    summary: "be going to — намерения и планы в ближайшем будущем.",
    content: `## be going to — планы и намерения

### Формула: **am/is/are + going to + V**

| Лицо | Пример |
|---|---|
| I | I **am going to** travel |
| He/She | She **is going to** study |
| We/They | They **are going to** leave |

### Использование
1. **Намерение:** \`I'm going to learn Spanish\`
2. **Предсказание по признакам:** \`Look at the clouds — it's going to rain\`

### Вопросы и отрицания
- \`Are you going to come?\`
- \`She isn't going to stay\`

> 💡 После going to — **базовая форма глагола** (не -ing и не -s).`,
  },
  {
    slug: "eng-a2-quantifiers",
    title: "Some / Any / Much / Many",
    titleEs: "Cuantificadores",
    level: "A2",
    category: "Определители",
    summary: "some, any, much, many, a lot of с исчисляемыми и неисчисляемыми.",
    content: `## Quantifiers — сколько?

| Слово | С чем | Пример |
|---|---|---|
| **some** | + / просьбы | some water, some apples |
| **any** | − / ? | any milk? / I don't have any |
| **many** | исчисляемые | many books |
| **much** | неисчисляемые | much time |
| **a lot of** | оба типа | a lot of friends / money |

### Исчисляемые vs неисчисляемые
- Countable: apple**s**, book**s** → many / a few
- Uncountable: water, rice, money → much / a little

> 💡 В утверждениях чаще \`a lot of\`, чем \`much\` в разговорной речи.`,
  },

  // ===== B1 ==========================================================
  {
    slug: "eng-b1-future-conditional",
    title: "Future & First Conditional",
    titleEs: "Futuro y Primer Condicional",
    level: "B1",
    category: "Времена / Условия",
    summary: "will/won't and the first conditional for real future situations.",
    content: `## Future (will) & First Conditional

### will / won't
\`I will help you\`, \`He won't come\`
Сокращения: \`I'll\`, \`won't\`

### First Conditional: **If + present, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

> 💡 First Conditional — **реальное условие**. Will ТОЛЬКО в главной части, не в if.`,
  },
  {
    slug: "eng-b1-modals",
    title: "Should / Must / Have to",
    titleEs: "Modales de Obligación",
    level: "B1",
    category: "Модальные",
    summary: "should, must, have to — совет, обязанность и запрет.",
    content: `## Modals — should / must / have to

| Модальный | Значение | Пример |
|---|---|---|
| **should** | совет | You should rest |
| **must** | сильная обязанность / вывод | You must wear a seatbelt |
| **have to** | внешняя обязанность | I have to work tomorrow |
| **mustn't** | запрет | You mustn't smoke here |
| **don't have to** | нет необходимости | You don't have to come |

### После модального
Всегда **базовая форма**: \`should go\`, \`must study\` (не ~~must to study~~).

> 💡 \`must\` чаще из правил/говорящего; \`have to\` — из обстоятельств.`,
  },
  {
    slug: "eng-b1-narrative",
    title: "Narrative Tenses",
    titleEs: "Tiempos Narrativos",
    level: "B1",
    category: "Времена",
    summary: "Past continuous, used to, past perfect — рассказы о прошлом.",
    content: `## Narrative Tenses — времена для рассказов

### Past Continuous: **was/were + V-ing**
\`I was reading when she called.\`
Длительное действие, прерванное другим.

### used to: **used to + V**
\`I used to play tennis.\` — Раньше играл (но больше не играю).
Только прошедшее время.

### Past Perfect: **had + V3**
\`When I arrived, the train had left.\`
Действие, которое произошло ДО другого действия в прошлом.

### Сравнение
| Время | Когда | Пример |
|---|---|---|
| Past Simple | Что произошло | I arrived |
| Past Continuous | Что происходило | I was walking |
| Past Perfect | Что уже произошло до | It had started |

> 💡 Past Perfect = «предпрошедшее». Сначала had + V3, потом Past Simple.`,
  },
  {
    slug: "eng-b1-perfect-continuous",
    title: "Present Perfect Continuous",
    titleEs: "Present Perfect Continuous",
    level: "B1",
    category: "Времена",
    summary: "have/has been + V-ing: длительность действия.",
    content: `## Present Perfect Continuous

### Формула: **have/has been** + **V-ing**

\`I have been studying for 3 hours.\`
\`She has been working since morning.\`

### for vs since
- **for** + период: \`for 2 hours, for 5 years\`
- **since** + точка: \`since 2020, since Monday\`

### Когда использовать
1. **Длительность:** \`How long have you been waiting?\`
2. **Недавнее действие с видимым результатом:** \`I'm tired — I've been running.\`

> 💡 Present Perfect Continuous подчёркивает **процесс и его длительность**.`,
  },

  // ===== B2 ==========================================================
  {
    slug: "eng-b2-conditionals",
    title: "Second & Third Conditionals",
    titleEs: "Segundo y Tercer Condicional",
    level: "B2",
    category: "Условия",
    summary: "Нереальные условия: настоящее (2nd) и прошлое (3rd).",
    content: `## Second & Third Conditionals

### 2nd Conditional: нереальное настоящее
**If + Past Simple, would + V**
\`If I had money, I would travel.\` (но денег нет)

### 3rd Conditional: нереальное прошлое
**If + Past Perfect, would have + V3**
\`If I had studied, I would have passed.\` (но не учился и не сдал)

### wish / if only
- \`I wish I **knew** the answer.\` (настоящее)
- \`I wish I **had** studied more.\` (прошлое)

> 💡 2nd = воображаемое **сейчас**, 3rd = сожаление о **прошлом**.`,
  },
  {
    slug: "eng-b2-passive",
    title: "Passive Voice",
    titleEs: "Voz Pasiva",
    level: "B2",
    category: "Залог",
    summary: "Пассивный залог во всех временах, have something done.",
    content: `## Passive Voice — пассивный залог

### Формула: **be + V3 (past participle)**

| Время | Active | Passive |
|---|---|---|
| Present Simple | They build houses | Houses **are built** |
| Past Simple | They built it | It **was built** |
| Present Perfect | They have done it | It **has been done** |
| Future | They will do it | It **will be done** |

### Использование
- Когда важен **результат**, а не исполнитель
- \`The Mona Lisa was painted in 1503.\` (исполнитель очевиден)

### have something done
\`I had my car repaired.\` (= мастер починил, а не я сам)

> 💡 С **by** можно указать исполнителя: \`It was written by Shakespeare\`.`,
  },
  {
    slug: "eng-b2-reported-clauses",
    title: "Reported Speech & Relative Clauses",
    titleEs: "Estilo Indirecto y Oraciones de Relativo",
    level: "B2",
    category: "Синтаксис",
    summary: "Косвенная речь и относительные местоимения.",
    content: `## Reported Speech & Relative Clauses

### Reported Speech — сдвиг времён
\`He said: "I am tired" → He said he **was** tired.\`
Present → Past, will → would, can → could.

### Relative Clauses
| Местоимение | Для чего | Пример |
|---|---|---|
| **who** | люди | The man **who** lives here |
| **which** | вещи | The book **which** I read |
| **that** | люди/вещи | The car **that** I bought |
| **whose** | принадлежность | The girl **whose** father is a doctor |

### Defining vs Non-defining
- **Defining** (без запятых): \`The man who called you is here\`
- **Non-defining** (с запятыми): \`My father, who is 60, works hard\`

> 💡 С запятыми **that** использовать нельзя: ~~My father, that...~~`,
  },

  // ===== C1 ==========================================================
  {
    slug: "eng-c1-inversion",
    title: "Inversion & Emphatic Structures",
    titleEs: "Inversión y Estructuras Énfáticas",
    level: "C1",
    category: "Синтаксис",
    summary: "Инверсия для усиления, cleft sentences, emphatic do/does.",
    content: `## Inversion & Emphatic Structures (C1)

### Negative Adverbial Inversion
**Never / Rarely / Hardly + auxiliary + subject + verb**
\`Never **have I seen** such beauty.\` (вместо: I have never seen)
\`Hardly **had I arrived** when it started raining.\`

### Cleft Sentences
\`It was **John** who broke the window.\` (акцент на John)
\`What I need is a vacation.\` (акцент на need)

### Emphatic do/does/did
\`I **do** believe you!\` (усиление)
\`She **does** work hard.\`

> 💡 Inversion = формальный, выразительный стиль. Используется в литературе и риторике.`,
  },
  {
    slug: "eng-c1-discourse",
    title: "Discourse: Substitution, Ellipsis, Fronting",
    titleEs: "Discurso: Sustitución, Elipsis, Fronting",
    level: "C1",
    category: "Дискурс",
    summary: "Продвинутые средства связности речи.",
    content: `## Discourse Devices (C1)

### Substitution
Замена повторов: \`one/ones\`, \`do/did\`, \`so\`
\`I'll have the red one.\`, \`I think so.\`

### Ellipsis
Пропуск понятных слов:
\`(Are you) Ready?\`, \`(I) Couldn't agree more.\`

### Fronting
Вынос элемента вперёд для акцента:
\`Such was his anger that...\` (вместо: His anger was such that...)

### Intensifying Adverbs
\`absolutely exhausted\`, \`utterly ridiculous\`, \`deeply concerned\`

> 💡 Эти приёмы делают речь **естественной и продвинутой** — отличают C1 от B2.`,
  },
  {
    slug: "eng-c1-mixed-conditionals",
    title: "Mixed Conditionals & Advanced Passives",
    titleEs: "Condicionales Mixtos y Pasivas Avanzadas",
    level: "C1",
    category: "Условия / Залог",
    summary: "Смешанные условные предложения и продвинутый пассив.",
    content: `## Mixed Conditionals & Advanced Passives (C1)

### Mixed Conditionals
Сочетание времён условия и результата:

| Тип | Структура | Пример |
|---|---|---|
| Past → Present | If + had V3, would + V | If I had studied medicine, I would be a doctor now |
| Present → Past | If + Past Simple, would have V3 | If I were taller, I would have joined basketball |

### Advanced Passives
- **It is said that...** → \`It is believed that he left the country\`
- **He is said to...** → \`He is said to be a genius\`
- **Need + V-ing** → \`This car needs cleaning\` (= needs to be cleaned)

### wish + would
\`I wish you wouldn't do that.\` (досада на привычку другого)

> 💡 Mixed conditionals соединяют **причину из прошлого** с **результатом в настоящем**.`,
  },
  {
    slug: "eng-c1-review",
    title: "Comprehensive Review + IELTS Skills",
    titleEs: "Repaso Integral + IELTS",
    level: "C1",
    category: "Подготовка к экзамену",
    summary: "Комплексное повторение всех тем + навыки IELTS.",
    content: `## Comprehensive Review & IELTS Preparation

### Ключевые темы для повторения:
1. **Все типы conditionals** (0, 1, 2, 3, mixed)
2. **Все пассивные конструкции**
3. **Modal verbs** (past: must have, should have, could have)
4. **Reported speech** (все сдвиги)
5. **Inversion и emphatic structures**

### IELTS Speaking Tips
- Используй **complex structures** (conditionals, passives, relative clauses)
- **Discourse markers**: however, nevertheless, on the other hand
- **Idiomatic language**: a piece of cake, over the moon, break the ice

### IELTS Writing Tips
- **Varied sentence structure** (не только Subject-Verb-Object)
- **Formal register** (avoid contractions in academic writing)
- **Cohesive devices**: furthermore, consequently, in contrast

> 🏆 Уровень C1 = не просто правильно, а **уместно и выразительно**.`,
  },
  // ===== C2 ==========================================================
  {
    slug: "eng-c2-cleft-emphasis",
    title: "Cleft sentences и эмфаза",
    titleEs: "Cleft Sentences & Emphasis",
    level: "C2",
    category: "Синтаксис",
    summary: "It was John who…, What I need is…, эмфатическое do — выделение и фокус.",
    content: `## Cleft sentences — «расколотые» предложения

Носители перестраивают фразу, чтобы **выделить** главное.

### It-cleft
| Нейтрально | С фокусом |
|---|---|
| \`John broke the vase.\` | \`**It was John who** broke the vase.\` — Это Джон разбил вазу. |
| \`I met her in Paris.\` | \`**It was in Paris that** I met her.\` — Именно в Париже я её встретил. |
| \`She called yesterday.\` | \`**It was yesterday that** she called.\` |

### Wh-cleft (pseudo-cleft)
- \`**What I need is** a holiday.\` — Что мне нужно — так это отпуск.
- \`**What annoys me is** his tone.\` — Что меня раздражает — так это его тон.
- \`**What she did was** (to) resign.\` — Она взяла и уволилась.
- \`**All I want is** peace and quiet.\` — Всё, чего я хочу, — тишина и покой.

### The thing / The reason / The place
- \`**The thing that** matters most **is** honesty.\`
- \`**The reason why** I left **was** the noise.\`

### Эмфатическое DO
- \`I **do** like your idea!\` — Мне правда нравится твоя идея!
- \`She **does** work hard.\` — Она действительно много работает.
- \`**Do** come in!\` — Ну заходи же!

### Fronting — вынос вперёд
- \`**This** I cannot accept.\` — Вот этого я принять не могу.
- \`**Strange as it may seem**, he refused.\` — Как ни странно, он отказался.

> 💡 На CPE/IELTS 8+ cleft-структуры — обязательный признак свободного письма.`,
  },
  {
    slug: "eng-c2-ellipsis-substitution",
    title: "Эллипсис и замещение",
    titleEs: "Ellipsis & Substitution",
    level: "C2",
    category: "Синтаксис",
    summary: "So do I, I hope so, if not — как носители не повторяют слова.",
    content: `## Ellipsis & substitution — экономия по-английски

Носители **не повторяют** сказанное — заменяют или опускают.

### SO / NOT вместо целого придаточного
- \`Is it going to rain? — I **hope not**.\` (= I hope it isn't going to rain)
- \`Will she come? — I **think so**.\` / \`I'm **afraid not**.\`
- \`If **so**, call me. If **not**, don't bother.\` — Если да… если нет…

### SO / NEITHER — «я тоже»
| Утверждение | Согласие |
|---|---|
| \`I love jazz.\` | \`**So do I.**\` — Я тоже. |
| \`She has been to Peru.\` | \`**So have I.**\` |
| \`I can't swim.\` | \`**Neither can I.** / **Me neither.**\` |

> ⚠️ Инверсия обязательна: \`So **do I**\`, не \`*So I do\` (это значит «и правда»).

### DO вместо глагольной группы
- \`He runs faster than I **do**.\` (= than I run)
- \`— Clean your room! — I already **have** (done).\`
- \`She might come, and if she **does**, tell her to wait.\`

### ONE / ONES вместо существительного
- \`Which cake? — The chocolate **one**.\`
- \`These shoes are worn out. I need new **ones**.\`

### Эллипсис после and / but / or
- \`She can sing and (she can) dance.\`
- \`He wanted to leave but (he) couldn't (leave).\`

### Разговорный эллипсис (начало фразы)
- \`(Have you) Seen my keys?\` — Ключи мои не видел?
- \`(It) Sounds good.\` / \`(I) Told you so.\`

> 💡 Понимание эллипсиса — ключ к аудированию на природной скорости.`,
  },
  {
    slug: "eng-c2-hedging-nuance",
    title: "Хеджирование и сдержанность",
    titleEs: "Hedging & Understatement",
    level: "C2",
    category: "Стилистика",
    summary: "It could be argued…, not entirely convinced, британский understatement и вежливая критика.",
    content: `## Hedging — искусство не говорить прямо

C2 — это умение **смягчать**, **дистанцироваться** и читать сдержанность между строк.

### Академическое хеджирование
| Прямо | Осторожно |
|---|---|
| \`This proves…\` | \`This **would seem to suggest**…\` |
| \`Everyone knows…\` | \`**It is widely believed that**…\` |
| \`I think…\` | \`**It could be argued that**…\` |
| \`The results show…\` | \`The results **appear to** show…\` |

Смягчители: \`arguably\`, \`to some extent\`, \`in a sense\`, \`more or less\`, \`broadly speaking\`.

### Британский understatement
| Сказано | Значение |
|---|---|
| \`Not bad.\` | Отлично! |
| \`I'm **not entirely** convinced.\` | Я совершенно не согласен. |
| \`It's **a bit** expensive.\` | Это безумно дорого. |
| \`**With respect**, …\` | Сейчас я вас разнесу. |
| \`**Interesting** idea…\` | Идея так себе. |

### Вежливая критика и несогласие
- \`I **see what you mean, but**…\` — Понимаю, но…
- \`**I'm not sure I'd** go that far.\` — Я бы так далеко не заходил.
- \`**You might want to** reconsider.\` — Стоит пересмотреть (= пересмотри).
- \`**Correct me if I'm wrong, but**…\`

### Дистанцирование через грамматику
- Past tense: \`I **was wondering** if you could help.\` — вежливее, чем \`I wonder\`.
- Continuous: \`I'**m hoping** you can join us.\`
- Passive: \`**It has been decided** that…\` — решение без ответственного.
- Modal past: \`That **would have been** unwise.\` — мягкий упрёк.

> 💡 Носитель C2 слышит разницу между \`It's not bad\` и \`It's not **bad**!\` — интонация меняет полюс оценки.`,
  },
];

export const ENGLISH_GRAMMAR: GrammarTopic[] = [
  ...ENGLISH_GRAMMAR_CORE,
  ...ENGLISH_GRAMMAR_EXTRA,
  ...ENGLISH_GRAMMAR_EXAM_WRITING,
];

export function getEngGrammarTopic(slug: string): GrammarTopic | undefined {
  return ENGLISH_GRAMMAR.find((t) => t.slug === slug);
}
