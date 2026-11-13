import type { GrammarTopic } from "@/types";
import { GERMAN_GRAMMAR_EXPAND_45 } from "./grammar-expand-45";

/**
 * German as a Foreign Language (DaF) — grammar reference A1–C2.
 * Explanations in Russian; examples in German.
 * Sequence follows German pedagogy: sounds → sein/haben → gender →
 * Präsens → Akkusativ → V2 → possessives → modals → separable verbs →
 * Dativ → Wechselpräpositionen → Perfekt (haben/sein) → Präteritum →
 * declension → verb-final clauses → cases → Konjunktiv → nominal style.
 */
const GERMAN_GRAMMAR_CORE: GrammarTopic[] = [
  // ===== A1 ==========================================================
  {
    slug: "de-a1-alphabet-pronunciation",
    title: "Алфавит и произношение",
    titleEs: "Alphabet and pronunciation",
    level: "A1",
    category: "Фонетика",
    summary:
      "Буквы, умлауты и ß, ключевые сочетания; приветствия и Sie/du.",
    content: `Первая тема курса: как **читать** немецкие буквы и как **поздороваться**.

## Особые буквы

К обычной латинице немецкие добавляют **ä, ö, ü** и **ß** (эсцет).

| Пишем | Читаем примерно | Пример |
|---|---|---|
| **ä** | открытое «э» | **Käse** |
| **ö** | округлённое «ё» | **schön** |
| **ü** | округлённое «ю» | **Tür** |
| **ß** | глухое «с» (как **ss**) | **Straße**, **groß** |
| **ei** | «ай» | **mein** |
| **ie** | долгое «и» | **sie**, **Liebe** |
| **eu / äu** | «ой» | **neu** |
| **sch** | «ш» | **Schule** |
| **sp- / st-** в начале слова | «шп» / «шт» | **Sport**, **Stadt** |
| **ch** после **i, e** | мягкое (как в *ich*) | **ich**, **mich** |
| **ch** после **a, o, u** | твёрдое (как в *Buch*) | **Buch**, **Bach** |

В словах ЗАГЛАВНЫМИ **ß** пишут как **SS**: **STRASSE**.

**Важно:** **ei** = «ай», **ie** = долгое «и». Их легко перепутать.

### Конец слова
Буквы **b, d, g** на конце звучат глухо: **Tag** ≈ «так», **Hund** ≈ «хунт». В других формах звук снова звонкий: **Tage**, **Hunde**.

### Ударение
Чаще всего ударный **первый слог**: **KOMmen**, **ARbeiten**.

## Приветствия: «ты» и «вы»

В немецком два обращения:

| Когда | Говорим | Примеры |
|---|---|---|
| друг, ровесник | **du** (ты) | **Hallo!** · **Tschüss!** |
| незнакомый, официально | **Sie** (вы) — **всегда с большой буквы** | **Guten Tag!** · **Auf Wiedersehen!** |

- Утро: **Guten Morgen!**
- Вечер: **Guten Abend!**
- Спасибо / пожалуйста: **Danke!** / **Bitte!**

**Wie heißt du?** — как тебя зовут?  
**Wie heißen Sie?** — как вас зовут?

> 💡 С **Sie** глагол такой же, как с «они»: **Sie heißen…**, **Sie sind…**`,
  },
  {
    slug: "de-a1-sein-haben-pronouns",
    title: "Sein, haben и местоимения",
    titleEs: "Sein, haben and pronouns",
    level: "A1",
    category: "Глаголы",
    summary:
      "Местоимения я/ты/он…; sein (быть) и haben (иметь) в настоящем.",
    content: `После алфавита учим два самых нужных глагола: **sein** (быть) и **haben** (иметь) — и слова **я / ты / он…**

## Кто говорит: местоимения

| По-русски | По-немецки | Пример |
|---|---|---|
| я | **ich** | **Ich** bin Anna. |
| ты | **du** | **Du** bist Student. |
| он | **er** | **Er** ist müde. |
| она | **sie** | **Sie** ist Lehrerin. |
| оно / это | **es** | **Es** ist ein Buch. |
| мы | **wir** | **Wir** sind aus Berlin. |
| вы (друзья, несколько человек) | **ihr** | **Ihr** seid müde. |
| они | **sie** | **Sie** sind Studenten. |
| вы (вежливо, к одному или многим) | **Sie** | **Sie** sind Herr Keller. |

### Три разных «sie / Sie»

1. **sie** + глагол в ед. ч. → **она**: **sie ist**  
2. **sie** + глагол во мн. ч. → **они**: **sie sind**  
3. **Sie** с **большой** буквы → вежливое **вы**: **Sie sind**

Число и вежливость смотрите по **глаголу** и по **заглавной букве**.

## sein — «быть / являться»

| Местоимение | Форма | Пример | Перевод |
|---|---|---|---|
| ich | **bin** | Ich **bin** Anna. | Я — Анна. |
| du | **bist** | Du **bist** Student. | Ты студент. |
| er / sie / es | **ist** | Er **ist** müde. | Он устал. |
| wir | **sind** | Wir **sind** aus Berlin. | Мы из Берлина. |
| ihr | **seid** | Ihr **seid** müde. | Вы устали. |
| sie / Sie | **sind** | Sie **sind** Lehrerin. | Они / Вы — учительница. |

Профессию обычно говорят **без артикля**: **Ich bin Ärztin.** **Er ist Deutscher.**

## haben — «иметь» (= «у меня есть»)

| ich | du | er / sie / es | wir | ihr | sie / Sie |
|---|---|---|---|---|---|
| **habe** | **hast** | **hat** | **haben** | **habt** | **haben** |

- **Ich habe Zeit.** — У меня есть время.  
- **Hast du einen Bruder?** — У тебя есть брат?  
- **Sie hat keine Geschwister.** — У неё нет братьев и сестёр. (слово **kein** «никакой» разберём позже)

### Вопрос и «не»
В вопросе глагол ставят **в начало**:  
**Bist du müde?** — Ты устал?  
**Hat er ein Auto?** — У него есть машина?

Отрицание со **sein / haben**:  
**Ich bin nicht müde.** — Я не устал.  
**Ich habe nicht viel Zeit.** — У меня мало времени.

> 💡 Формы **sein** и **haben** лучше выучить наизусть — они встречаются почти в каждом предложении и позже понадобятся для прошедшего времени.`,
  },
  {
    slug: "de-a1-articles-gender-nominative",
    title: "Род и артикли: номинатив",
    titleEs: "Gender and nominative articles",
    level: "A1",
    category: "Артикли",
    summary:
      "Род существительного; der/die/das и ein/eine в именительном падеже.",
    content: `У каждого немецкого существительного есть **род**. Его показывает **артикль** — маленькое слово перед существительным (**der / die / das**).

Пока работаем только с формой **подлежащего** (кто? что?): это и есть **номинатив** (именительный падеж).

## Три рода

| Род | «этот/эта/это» | «один/одна» | Пример |
|---|---|---|---|
| мужской | **der** | **ein** | **der** Tisch — стол |
| женский | **die** | **eine** | **die** Lampe — лампа |
| средний | **das** | **ein** | **das** Buch — книга |
| множественное | **die** | (нет *ein*; отрицание **keine**) | **die** Bücher — книги |

Род — свойство **слова**, не «логического» предмета.  
**Das Mädchen** (девочка) — средний род из‑за суффикса **-chen**.  
**Die Sonne** — женский род, **der Mond** — мужской.

### Полезные ориентиры (не 100%, но часто)
- окончания **-ung, -heit, -keit, -schaft, -ion** → чаще **die**  
- **-chen, -lein** → **das**  
- профессии на **-er** → **der** (**der Lehrer**), женщина часто на **-in** (**die Lehrerin**)  
- дни, месяцы, времена года → **der** (**der Montag**)

Новое слово учите **с артиклем**: не «Tisch», а «**der** Tisch».

## Зачем номинатив
Номинатив — форма для **кто делает** / **что это**.

- **Der Tisch ist neu.** — Стол новый.  
- **Das ist eine Lampe.** — Это лампа.  
- **Ein Buch liegt hier.** — Здесь лежит книга.

У **ein** нет отдельной формы «для многих». Несколько книг: **Bücher** или **keine Bücher**.

> 💡 У **ein** формы мужского и среднего совпадают (**ein Mann / ein Kind**). Чтобы узнать род, смотрите на **der / die / das**.`,
  },
  {
    slug: "de-a1-praesens",
    title: "Präsens: настоящее время",
    titleEs: "Present tense",
    level: "A1",
    category: "Глаголы",
    summary:
      "Спряжение слабых глаголов и глаголов с чередованием гласной.",
    content: `**Präsens** — настоящее время. Им говорят и «я делаю сейчас», и «обычно», и про ближайшие планы: **Morgen fahre ich nach München.**

## Обычный глагол (слабый)

Берём инфинитив (**wohnen**), убираем **-en**, получаем основу **wohn-**, добавляем окончания:

| Местоимение | Окончание | wohnen | machen |
|---|---|---|---|
| ich | **-e** | ich wohne | ich mache |
| du | **-st** | du wohnst | du machst |
| er / sie / es | **-t** | er wohnt | er macht |
| wir | **-en** | wir wohnen | wir machen |
| ihr | **-t** | ihr wohnt | ihr macht |
| sie / Sie | **-en** | sie wohnen | Sie wohnen |

Если основа на **-t / -d**, перед **-st / -t** вставляют **-e-**:  
**arbeiten → du arbeitest, er arbeitet.**

Если основа на **-s / -ß / -z**: **heißen → du heißt** (лишнее **s** не добавляют).

## Когда гласная меняется (сильные глаголы)

У части глаголов в формах **du** и **er/sie/es** меняется гласная. Остальные лица — как обычно.

| Инфинитив | du | er / sie / es | мы (без смены) |
|---|---|---|---|
| **fahren** | fährst | fährt | wir fahren |
| **schlafen** | schläfst | schläft | wir schlafen |
| **lesen** | liest | liest | wir lesen |
| **sehen** | siehst | sieht | wir sehen |
| **sprechen** | sprichst | spricht | wir sprechen |
| **essen** | isst | isst | wir essen |
| **nehmen** | nimmst | nimmt | wir nehmen |
| **geben** | gibst | gibt | wir geben |
| **helfen** | hilfst | hilft | wir helfen |

**gehen** и **kommen** гласную **не** меняют: **du gehst**, **du kommst**.

- **Was machst du?** — Что ты делаешь?  
- **Er isst ein Brot.** — Он ест хлеб.  
- **Wir gehen nach Hause.** — Мы идём домой.

> 💡 Запоминайте короткой тройкой: **essen — du isst — er isst**. У **wir / sie / Sie** форма как в словаре.`,
  },
  {
    slug: "de-a1-akkusativ",
    title: "Аккузатив: прямое дополнение",
    titleEs: "Accusative case",
    level: "A1",
    category: "Падежи",
    summary:
      "Винительный падеж: den/einen и вопрос wen oder was.",
    content: `**Akkusativ** (винительный падеж) — форма слова, на которое **направлено** действие: кого? что?

Вопросы: **wen?** (кого?) / **was?** (что?).

## Что меняется в артикле

**Меняется только мужской род.** Женский, средний и множественное выглядят как в номинативе.

| Род | Кто? что? (номинатив) | Кого? что? (аккузатив) |
|---|---|---|
| мужской | **der / ein** Mann | **den / einen** Mann |
| женский | **die / eine** Frau | **die / eine** Frau |
| средний | **das / ein** Kind | **das / ein** Kind |
| мн. число | **die** Kinder | **die** Kinder |

Примеры:
- **Ich sehe den Mann.** — Я вижу мужчину.  
- **Sie kauft einen Apfel.** — Она покупает яблоко.  
- **Wir haben eine Wohnung.** — У нас есть квартира.  
- **Er liest das Buch.** — Он читает книгу.

### Глаголы, после которых обычно нужен аккузатив
**haben, sehen, hören, kaufen, brauchen, essen, trinken, nehmen, suchen, finden, lieben, kennen.**

**kennen** = быть знакомым с чем‑то/кем‑то: **Ich kenne den Film.**  
**wissen** = знать факт: **Ich weiß das.**

### Местоимения «меня / тебя / его…»

| Кто (номинатив) | Кого (аккузатив) |
|---|---|
| ich → | **mich** |
| du → | **dich** |
| er → | **ihn** |
| sie (она) → | **sie** |
| es → | **es** |
| wir → | **uns** |
| ihr → | **euch** |
| sie / Sie → | **sie / Sie** |

**Ich sehe ihn.** — Я его вижу.  
**Siehst du mich?** — Ты меня видишь?

Подлежащее остаётся в номинативе:  
**Der Mann sieht den Hund.** — Кто видит? **der Mann**. Кого? **den Hund**.

> 💡 Правило‑якорь: был **der** → в дополнении почти всегда **den**. Ошибка **den Frau** значит, что род слова не учтён.`,
  },
  {
    slug: "de-a1-questions-v2",
    title: "Вопросы и порядок V2",
    titleEs: "Questions and verb-second order",
    level: "A1",
    category: "Синтаксис",
    summary:
      "Да/нет-вопросы, W-вопросы и глагол на втором месте в главном предложении.",
    content: `Главное правило немецкого порядка слов: в обычном предложении **спрягаемый глагол стоит на втором месте**. Это называют **V2** (verb second).

«Второе место» — не «второе слово», а **второй кусок** фразы.

## Утверждение: глагол второй

| 1-е место | Глагол | Дальше |
|---|---|---|
| **Ich** | **lerne** | heute Deutsch. |
| **Heute** | **lerne** | ich Deutsch. |
| **In Berlin** | **wohne** | ich. |

**In Berlin** — одна группа («в Берлине»), хотя слов два. После неё сразу глагол. Тогда **ich** уходит **за** глагол.

Неправильно: **Heute ich lerne…**  
Правильно: **Heute lerne ich…**

## Вопрос «да / нет»: глагол первый

- **Lernst du Deutsch?** — Ты учишь немецкий?  
- **Wohnt ihr in Hamburg?** — Вы живёте в Гамбурге?  
- **Ist das dein Buch?** — Это твоя книга?

Ответ: **Ja, …** / **Nein, …**

## Вопрос со словом (wo, was, wie…)

Схема: **вопросительное слово → глагол → кто**.

| Слово | Значение | Пример |
|---|---|---|
| **wer** | кто | **Wer** kommt? |
| **wen** | кого | **Wen** siehst du? |
| **was** | что | **Was** machst du? |
| **wo** | где (без движения) | **Wo** wohnst du? |
| **wohin** | куда | **Wohin** gehst du? |
| **woher** | откуда | **Woher** kommst du? |
| **wann** | когда | **Wann** beginnt der Kurs? |
| **wie** | как | **Wie** heißt du? |
| **warum** | почему | **Warum** lernst du Deutsch? |
| **wie viel** | сколько | **Wie viel** kostet das? |

**Wo** = где находится. **Wohin** = куда направляется.  
**Ich wohne in München** (где). **Ich gehe nach München** (куда).

> 💡 Коротко: в рассказе глагол **второй**, в да/нет‑вопросе — **первый**, в W‑вопросе — сразу после **wo / was / wie…**`,
  },
  {
    slug: "de-a1-possessives-plurals",
    title: "Притяжательные и множественное число",
    titleEs: "Possessives and plurals",
    level: "A1",
    category: "Имя",
    summary:
      "Mein/dein/sein и основные модели множественного числа.",
    content: `Учимся говорить **мой / твой / его** и называть вещи во **множественном числе**.

## Mein, dein, sein… — «чей?»

Основа зависит от **владельца**. Окончание — от **рода вещи** (как у **ein / eine**).

| Владелец | Основа | Пример |
|---|---|---|
| я | **mein** | **mein** Buch |
| ты | **dein** | **dein** Auto |
| он | **sein** | **sein** Bruder |
| она | **ihr** | **ihr** Bruder |
| оно | **sein** | **sein** Spielzeug |
| мы | **unser** | **unser** Haus |
| вы (друзья) | **euer** | **euer** Sohn |
| они | **ihr** | **ihr** Auto |
| вы (вежливо) | **Ihr** | **Ihr** Name |

В номинативе окончания как у **ein**:

| мужской | женский | средний | мн. число |
|---|---|---|---|
| **mein** Bruder | **meine** Schwester | **mein** Kind | **meine** Kinder |

В аккузативе у мужского рода: **meinen** — **Ich besuche meinen Bruder.**

### Не путайте три «ihr / Ihr»
- **ihr seid** — вы (друзья) есть…  
- **ihr Buch** — её или их книга  
- **Ihr Buch** — ваша книга (вежливо, с большой буквы)

У **euer** перед окончанием часто пропадает **-e-**: **euer Sohn**, но **eure Tochter**, **euren Sohn**.

## Множественное число

Единого правила нет — форму учат вместе со словом: **der Tisch — die Tische**.

| Как образуется | Пример |
|---|---|
| **-e** (иногда с умлаутом) | Tisch → **Tische**, Stuhl → **Stühle** |
| **-(e)n** | Frau → **Frauen**, Wohnung → **Wohnungen** |
| **-er** (часто с умлаутом) | Kind → **Kinder**, Buch → **Bücher** |
| без окончания (иногда умлаут) | Lehrer → **Lehrer**, Vater → **Väter** |
| **-s** | Auto → **Autos** |

Во множественном числе артикль всегда **die**.

> 💡 Смотрите на род **вещи**, не на пол владельца: «её брат» = **ihr Bruder**, «её сестра» = **ihre Schwester**.`,
  },
  {
    slug: "de-a1-modal-verbs",
    title: "Модальные глаголы",
    titleEs: "Modal verbs",
    level: "A1",
    category: "Глаголы",
    summary:
      "Können, müssen, wollen, dürfen, sollen, mögen: смысл и позиция инфинитива.",
    content: `Модальные глаголы добавляют смысл «могу / должен / хочу / можно».  
Спрягается **модальный** глагол (второе место), а смысловой глагол стоит в **инфинитиве в конце** — без **zu**.

## Значения

| Глагол | Значение | Пример |
|---|---|---|
| **können** | уметь, мочь | Ich **kann** schwimmen. |
| **müssen** | должен (иначе нельзя) | Ich **muss** lernen. |
| **wollen** | хотеть | Wir **wollen** bleiben. |
| **dürfen** | можно / разрешено | Du **darfst** hier parken. |
| **sollen** | должен, потому что так сказали | Du **sollst** die Ärztin anrufen. |
| **mögen** | нравиться | Ich **mag** Kaffee. |
| **möchten** | хотел бы (вежливо) | Ich **möchte** einen Tee. |

**müssen** ≠ **sollen**:  
**Ich muss gehen** — мне нужно.  
**Ich soll gehen** — меня просят / от меня ждут.

**nicht dürfen** = нельзя: **Du darfst hier nicht rauchen.**  
**nicht müssen** = не обязан: **Du musst nicht kommen.**

## Формы (запомните ich / du / er)

| Глагол | ich / er | du |
|---|---|---|
| können | **kann** | **kannst** |
| müssen | **muss** | **musst** |
| dürfen | **darf** | **darfst** |
| wollen | **will** | **willst** |
| sollen | **soll** | **sollst** |
| mögen | **mag** | **magst** |
| möchten | **möchte** | **möchtest** |

**wir / sie / Sie** = как в словаре (**können, müssen…**).  
**ihr**: **könnt, müsst, dürft, wollt, sollt, mögt, möchtet**.

## Порядок слов
- **Ich kann heute nicht kommen.**  
- **Kannst du mir helfen?**  
- **Was willst du essen?**

Нельзя: *kann zu kommen* — частицы **zu** здесь нет.

> 💡 Модальный глагол на втором месте, действие — в самом конце: **Ich muss früh aufstehen.**`,
  },
  {
    slug: "de-a1-separable-verbs",
    title: "Отделяемые приставки",
    titleEs: "Separable verbs",
    level: "A1",
    category: "Глаголы",
    summary:
      "Глаголы с отделяемой приставкой: приставка в конце главного предложения.",
    content: `Многие немецкие глаголы начинаются с приставки (**auf-, an-, ein-…**).  
В обычном предложении приставка **отрывается** и уходит **в конец**.

Частые глаголы: **aufstehen, ankommen, einkaufen, mitkommen, anfangen, anrufen, fernsehen**.

## Как это выглядит

| В словаре | В предложении |
|---|---|
| aufstehen | Ich **stehe** um sieben **auf**. — Я встаю в семь. |
| ankommen | Der Zug **kommt** um neun **an**. — Поезд прибывает в девять. |
| einkaufen | Wir **kaufen** am Samstag **ein**. — В субботу мы ходим за покупками. |
| mitkommen | **Kommst** du **mit**? — Ты идёшь с нами? |
| anrufen | Ich **rufe** dich später **an**. — Я тебе потом позвоню. |
| fernsehen | Er **sieht** abends **fern**. — Вечером он смотрит телевизор. |

Вопрос: **Stehst du früh auf?**  
С **wann**: **Wann stehst du auf?**

## С модальным глаголом приставка не отрывается

Спрягается модальный глагол, а весь глагол снова целый в конце:

- **Ich muss früh aufstehen.**  
- **Sie will mitkommen.**  
- **Darf ich dich anrufen?**

## Какие приставки НЕ отделяются
**be-, emp-, ent-, er-, ge-, miss-, ver-, zer-** всегда остаются с глаголом:  
**besuchen, verstehen, erzählen, bekommen**.

- **Ich besuche meine Eltern.** (не *suche … be*)  
- **Verstehst du das?**

На A1 глаголы вроде **umsteigen** / **übersetzen** лучше учить целиком:  
**umsteigen** отделяется (**ich steige um**), **übersetzen** «переводить» — нет.

> 💡 Нельзя говорить **Ich aufstehe**. Нужно: **Ich stehe auf.**`,
  },
  {
    slug: "de-a1-negation-time-numbers",
    title: "Отрицание, числа и время",
    titleEs: "Negation, numbers and time",
    level: "A1",
    category: "Коммуникация",
    summary:
      "Nicht и kein; числа, часы, даты и базовые предлоги времени.",
    content: `Учимся говорить «не», называть числа и время.

## kein или nicht — какое «не»?

**kein** = «никакой / нет …» перед существительным без **der/die/das** (или вместо **ein**). Меняется как **mein**.

| Когда | Пример |
|---|---|
| это не проблема | Das ist **kein** Problem. |
| нет брата | Ich habe **keinen** Bruder. |
| не покупаю молоко | Ich kaufe **keine** Milch. |
| нет детей | Wir haben **keine** Kinder. |

**nicht** = «не» для глагола, прилагательного, наречия или слова с **der/die/das** / имени.

- **Ich arbeite heute nicht.** — Сегодня я не работаю.  
- **Das ist nicht teuer.** — Это недорого.  
- **Ich sehe den Film nicht.** — Я не смотрю этот фильм.  
- **Nicht Anna, sondern Paul kommt.** — Приходит не Анна, а Пауль.

**nicht** стоит перед тем, что отрицаем, и перед «хвостом» (приставкой / инфинитивом):  
**Ich stehe morgen nicht auf.** · **Ich kann nicht kommen.**

## Числа
0 **null**, 1 **eins**, 2 **zwei**, 3 **drei**, 4 **vier**, 5 **fünf**, 6 **sechs**, 7 **sieben**, 8 **acht**, 9 **neun**, 10 **zehn**, 11 **elf**, 12 **zwölf**.  
16 **sechzehn**, 17 **siebzehn**.  
20 **zwanzig**, 30 **dreißig**, 40 **vierzig**…

Составные: **21 = einundzwanzig** — сначала единицы, потом **und**, потом десятки, **одним словом**.

Перед существительным «один» = **ein**: **ein Tisch** (не *eins Tisch*).

## Который час
- **Es ist drei Uhr.** — Три часа.  
- **Es ist Viertel nach drei.** — 3:15  
- **Es ist Viertel vor vier.** — 3:45  
- **Es ist halb vier.** — **3:30** (половина **следующего** часа!)

Официально: **Es ist drei Uhr zwanzig.**  
Спросить время: **Um wie viel Uhr?** — **Um acht Uhr.**

## Когда
| Говорим | Пример |
|---|---|
| **am** + день / часть дня | **am** Montag, **am** Morgen |
| **im** + месяц / сезон | **im** Mai, **im** Sommer |
| **um** + час | **um** 8 Uhr |
| **von … bis** | **von** Montag **bis** Freitag |

Дата: **am 3. Mai** / **am dritten Mai**.

> 💡 **halb vier** = 3:30, не 4:30. Немецкие «пол-» смотрят на **час впереди**.`,
  },

  // ===== A2 ==========================================================
  {
    slug: "de-a2-dativ",
    title: "Датив: косвенное дополнение",
    titleEs: "Dative case",
    level: "A2",
    category: "Падежи",
    summary:
      "Дательный падеж: артикли, местоимения, глаголы и предлоги с Dativ.",
    content: `> **Перед этой темой:** вы отличаете номинатив от **аккузатива**. **В этой теме:** **Dativ** — «кому?» (**wem?**).

## Артикли

| | номинатив | датив |
|---|---|---|
| м | der / ein | **dem / einem** |
| ж | die / eine | **der / einer** |
| ср | das / ein | **dem / einem** |
| мн | die | **den** + **-n** у существительного |

Множественное число: **den Kindern, den Freunden**. Если форма уже на **-n** или на **-s**, второе **-n** не добавляют: **den Frauen, den Autos**.

- **Ich helfe dem Mann.**
- **Das Buch gehört einer Studentin.**
- **Wir danken den Lehrern.**

## Глаголы с дательным
**helfen, danken, gehören, gefallen, schmecken, passen, gratulieren, antworten, zuhören**.

- **Die Jacke passt mir.**
- **Der Film gefällt ihr.** (ей нравится фильм — фильм подлежащее, **ihr** в дативе)
- **Wem gehört das Fahrrad?**

Два дополнения: лицо в дативе обычно **перед** вещью в аккузативе.
**Ich gebe meiner Schwester ein Buch.**
Если оба — местоимения, аккузатив короче и идёт первым: **Ich gebe es ihr.** Если местоимение только одно и это датив, оно перед существительным: **Ich gebe ihr das Buch.**

## Местоимения

| | датив |
|---|---|
| ich / du | **mir / dir** |
| er / sie / es | **ihm / ihr / ihm** |
| wir / ihr | **uns / euch** |
| sie / Sie | **ihnen / Ihnen** |

## Предлоги только с дательным
**aus, außer, bei, mit, nach, seit, von, zu** (и обычно **gegenüber**).

- **Ich fahre mit dem Bus.**
- **Sie kommt aus der Schweiz.**
- **Nach dem Unterricht gehe ich nach Hause.**
- **Das ist ein Geschenk von meinem Bruder.**

Стяжения: **zum** = zu dem, **zur** = zu der, **vom** = von dem, **beim** = bei dem.

> 💡 Вопрос к дативу — **wem?**, не **wen?**. **Wen hilfst du?** звучит как аккузатив; глагол **helfen** требует **Wem hilfst du?**`,
  },
  {
    slug: "de-a2-wechselpraepositionen",
    title: "Wechselpräpositionen",
    titleEs: "Two-way prepositions",
    level: "A2",
    category: "Предлоги",
    summary:
      "Предлоги двух падежей: Akkusativ на вопрос wohin, Dativ на вопрос wo.",
    content: `> **Перед этой темой:** вы знаете **датив** и предлоги, которые всегда с ним. **В этой теме:** девять предлогов, которые берут **то Akkusativ, то Dativ**.

## Список
**an, auf, hinter, in, neben, über, unter, vor, zwischen**.

| вопрос | падеж | смысл |
|---|---|---|
| **wohin?** | **Akkusativ** | движение к цели |
| **wo?** | **Dativ** | место, где уже находятся |

- **Ich gehe in die Stadt.** (куда? die Stadt — аккузатив)
- **Ich bin in der Stadt.** (где? der Stadt — датив женского)
- **Leg das Buch auf den Tisch.**
- **Das Buch liegt auf dem Tisch.**
- **Er stellt das Fahrrad hinter das Haus.**
- **Das Fahrrad steht hinter dem Haus.**

Глаголы движения к точке часто **stellen, legen, setzen, hängen** (что-то помещают). Глаголы положения — **stehen, liegen, sitzen, hängen** (что-то уже находится). **hängen** бывает и тем и другим: **Ich hänge das Bild an die Wand.** / **Das Bild hängt an der Wand.**

### Контраст in / auf
**in** — внутрь объёма: **in die Küche / in der Küche**.
**auf** — на поверхность или на открытое мероприятие: **auf den Tisch**, **auf die Party / auf der Party**.

### Стяжения, которые нужно узнавать
| | Akkusativ | Dativ |
|---|---|---|
| in + das | **ins** | — |
| in + dem | — | **im** |
| an + das | **ans** | — |
| an + dem | — | **am** |

**Ich gehe ins Kino.** **Wir sind im Kino.**

**nach** (всегда датив) — к странам без артикля и городам: **nach Berlin, nach Deutschland**. **in** — если у страны есть артикль: **in die Schweiz, in der Schweiz**.

> 💡 Один и тот же предлог не «значит падеж». Падеж выбирает **вопрос**: цель движения — аккузатив, статичное «где» — датив. **Ich gehe in der Stadt** описывает прогулку внутри города, а не путь «в город».`,
  },
  {
    slug: "de-a2-perfekt",
    title: "Perfekt: разговорное прошедшее",
    titleEs: "Present perfect",
    level: "A2",
    category: "Глаголы",
    summary:
      "Perfekt с haben или sein; причастия слабых, сильных и приставочных глаголов.",
    content: `> **Перед этой темой:** вы выбираете падеж у **Wechselpräpositionen**. **В этой теме:** **Perfekt** — основное прошедшее время в разговоре. Схема: **haben/sein** на месте V2 + **Partizip II** в конце.

## Вспомогательный глагол

**haben** — большинство глаголов, всё переходное (есть прямое дополнение).
**sein** — перемещение из точки в точку и смена состояния, плюс **sein, werden, bleiben**.

| sein | haben |
|---|---|
| gehen, kommen, fahren, fliegen, laufen | machen, lernen, kaufen, essen, trinken |
| aufstehen, einschlafen, aufwachen, sterben | arbeiten, sehen, hören |
| passieren, geschehen | |
| **sein, werden, bleiben** | |

Исключение, которое стоит запомнить сразу: если **fahren** переходный, вспомогательный — **haben**. **Ich bin nach Köln gefahren.** **Ich habe das Auto gefahren.**

- **Ich habe Deutsch gelernt.**
- **Gestern bin ich früh aufgestanden.**
- **Was hast du am Wochenende gemacht?**

## Partizip II

| тип | формула | пример |
|---|---|---|
| слабый | **ge-** + основа + **-t** | machen → **gemacht**, lernen → **gelernt** |
| слабый на -t/-d | **ge-** + основа + **-et** | arbeiten → **gearbeitet** |
| сильный | **ge-** + основа (часто с другой гласной) + **-en** | sehen → **gesehen**, gehen → **gegangen**, schreiben → **geschrieben**, nehmen → **genommen**, essen → **gegessen** |
| отделяемая приставка | приставка + **ge** + … | aufstehen → **aufgestanden**, einkaufen → **eingekauft**, anrufen → **angerufen** |
| неотделяемая приставка | **без ge-** | besuchen → **besucht**, verstehen → **verstanden**, erzählen → **erzählt** |
| **-ieren** | **без ge-**, всегда **-t** | studieren → **studiert**, telefonieren → **telefoniert** |

Вопрос: **Hast du ihn angerufen?** **Bist du schon angekommen?**

> 💡 Выбор **sein** — не «про движение вообще», а про смену места или состояния. **Ich habe getanzt** (haben), хотя это движение на месте. **Ich bin gelaufen** — если речь о перемещении. Сомневаетесь с бытовым глаголом без дополнения типа gehen/kommen — берите **sein**.`,
  },
  {
    slug: "de-a2-praeteritum",
    title: "Präteritum: war, hatte и модальные",
    titleEs: "Simple past of sein, haben and modals",
    level: "A2",
    category: "Глаголы",
    summary:
      "Простое прошедшее у sein, haben и модальных; чем оно отличается от Perfekt.",
    content: `> **Перед этой темой:** вы строите **Perfekt**. **В этой теме:** **Präteritum** тех глаголов, которые и в устной речи почти не ставят в Perfekt: **sein, haben** и модальные.

## Зачем два прошедших
В разговоре обычные глаголы — в **Perfekt** (**ich habe gemacht**).
**war, hatte, konnte, musste, wollte** звучат естественно и в разговоре. Остальной Präteritum (kam, ging, sagte) — язык рассказа и письма. На A2 достаточно первых двух групп.

## sein и haben

| | sein | haben |
|---|---|---|
| ich | **war** | **hatte** |
| du | **warst** | **hattest** |
| er/sie/es | **war** | **hatte** |
| wir | **waren** | **hatten** |
| ihr | **wart** | **hattet** |
| sie/Sie | **waren** | **hatten** |

- **Ich war gestern krank.**
- **Wir hatten keine Zeit.**
- **Es gab** keinen Kaffee. (**geben** в прошедшем рассказе часто **es gab**)

## Модальные в Präteritum
Умлаут **исчезает**: können → **konnte**, müssen → **musste**, dürfen → **durfte**, mögen → **mochte**.

| инфинитив | ich/er | wir/sie |
|---|---|---|
| können | **konnte** | **konnten** |
| müssen | **musste** | **mussten** |
| dürfen | **durfte** | **durften** |
| wollen | **wollte** | **wollten** |
| sollen | **sollte** | **sollten** |
| mögen | **mochte** | **mochten** |

**du**: konntest, musstest, durftest, wolltest, solltest, mochtest.
**ihr**: konntet, musstet, durftet, wolltet, solltet, mochtet.

Инфинитив по-прежнему в конце: **Ich konnte nicht kommen.** **Wir mussten früh aufstehen.**

Короткий рассказ о себе: **Als Kind war ich oft in Hamburg. Ich hatte einen Hund. Ich wollte Ärztin werden.**

> 💡 Не заменяйте разговорное **ich habe gesehen** на книжное **ich sah**, пока пишете бытовой текст. И наоборот: **ich bin gewesen** в живой речи слабее, чем **ich war**.`,
  },
  {
    slug: "de-a2-reflexive",
    title: "Возвратные глаголы",
    titleEs: "Reflexive verbs",
    level: "A2",
    category: "Глаголы",
    summary:
      "Sich: Akkusativ и Dativ возвратного местоимения, быт и чувства.",
    content: `> **Перед этой темой:** вы рассказываете о прошлом через **Perfekt** и **war/hatte**. **В этой теме:** глаголы с **sich** — умывание, чувства, интерес.

## Местоимение

| | Akkusativ | Dativ |
|---|---|---|
| ich | **mich** | **mir** |
| du | **dich** | **dir** |
| er/sie/es | **sich** | **sich** |
| wir | **uns** | **uns** |
| ihr | **euch** | **euch** |
| sie/Sie | **sich** | **sich** |

В главном предложении **sich** стоит сразу после спрягаемого глагола (или после подлежащего, если глагол первый): **Ich freue mich.** **Freust du dich?**

## Когда Akkusativ
Действие замыкается на подлежащем, отдельного дополнения нет.

- **Ich wasche mich.**
- **Wir setzen uns.**
- **Sie interessiert sich für Musik.**
- **Ich freue mich auf das Wochenende.** (**auf** + Akkusativ — ждать с радостью)
- **Ich freue mich über das Geschenk.** (**über** + Akkusativ — радость о факте)

## Когда Dativ
В аккузативе уже стоит **часть тела или вещь**, а возвратное местоимение — «себе».

- **Ich wasche mir die Hände.** (не *meine Hände* — часть тела обычно с артиклем)
- **Du sollst dir die Zähne putzen.**
- **Ich merke mir das Wort.**
- **Wir kaufen uns ein Eis.**

Сравните: **Ich ziehe mich an** (одеваюсь) и **Ich ziehe mir eine Jacke an** (надеваю на себя куртку).

В Perfekt возвратные глаголы чаще с **haben**: **Ich habe mich gefreut.** **Hast du dich gesetzt?** Местоимение остаётся рядом со спрягаемым глаголом, причастие в конце.

> 💡 **sich freuen auf** — ещё впереди, **sich freuen über** — уже случилось. Путаница этих двух предлогов меняет время события, хотя глагол один.`,
  },
  {
    slug: "de-a2-imperative-comparison",
    title: "Императив и степени сравнения",
    titleEs: "Imperative and comparison",
    level: "A2",
    category: "Синтаксис",
    summary:
      "Повелительное наклонение du/ihr/Sie и сравнительная степень прилагательных.",
    content: `> **Перед этой темой:** вы пользуетесь **sich**. **В этой теме:** как попросить или велеть и как сказать «больше / самый».

## Imperativ

| кому | как строится | пример |
|---|---|---|
| **du** | основа без **-st**; **-e** часто отпадает | **Komm!** **Mach das!** |
| **ihr** | как форма ihr | **Kommt!** **Macht das!** |
| **Sie** | инфинитив + **Sie** | **Kommen Sie!** **Machen Sie das!** |
| **wir** | инфинитив + **wir** («давай») | **Gehen wir!** |

Основа на **-t, -d, -ig** и сложный согласный конец сохраняет **-e**: **Arbeite!** **Öffne!** **Entschuldige!**

Глаголы с **e → i** в Präsens сохраняют чередование и **без -e**: **sprich, iss, lies, nimm, gib, sieh, hilf**. **essen → Iss!** не *Esse*.

Отделяемая приставка в конце: **Steh auf!** **Kommt mit!** **Stehen Sie bitte auf!**

Вежливее с **bitte**: **Setzen Sie sich bitte.** Отрицание: **Mach das nicht.** **Rauchen Sie hier nicht.**

## Сравнение

Сравнительная степень: **-er**. Превосходная предикативная: **am …-sten**.

| | сравнение | превосходная |
|---|---|---|
| klein | klein**er** | **am** klein**sten** |
| alt | **ä**lt**er** | **am ältesten** |
| groß | gr**ö**ß**er** | **am größten** |
| gut | **besser** | **am besten** |
| viel | **mehr** | **am meisten** |
| gern | **lieber** | **am liebsten** |
| hoch | **höher** | **am höchsten** |

Односложные с гласной **a, o, u** часто берут умлаут: **alt → älter**, **warm → wärmer**. Не все: **bunt → bunter**, **laut → lauter**. Сомневаетесь — проверьте словарь.

**als** — чем при сравнении двух: **Anna ist älter als Paul.**
**so … wie** — равенство: **so alt wie**.
Перед существительным сравнительная форма ещё и склоняется (это следующая тема): **ein kleineres Zimmer**.

Атрибутивная превосходная: **der höchste Turm**, **die beste Idee**.

> 💡 **Sie**-императив — это инфинитив, а не основа. **Kommen Sie**, не *Komm Sie*. Для **du** у **lesen / sprechen / nehmen** берите гласную из **er liest / spricht / nimmt**.`,
  },
  {
    slug: "de-a2-adjective-declension-intro",
    title: "Окончания прилагательных: первое знакомство",
    titleEs: "Adjective endings: first overview",
    level: "A2",
    category: "Прилагательные",
    summary:
      "Три модели: после der, после ein и без артикля. Номинатив и аккузатив.",
    content: `> **Перед этой темой:** вы образуете **сравнительную степень**. **В этой теме:** прилагательное **перед** существительным получает окончание. Полная таблица всех падежей будет на B1; сейчас — рабочая схема A2.

## Идея
Окончание прилагательного показывает род и падеж, **если артикль этого ещё не сделал**.

### После der / die / das — слабое окончание
Артикль уже всё сказал. Прилагательное почти всегда **-e** или **-en**.

| | номинатив | аккузатив |
|---|---|---|
| м | der gut**e** Wein | den gut**en** Wein |
| ж | die gut**e** Suppe | die gut**e** Suppe |
| ср | das gut**e** Brot | das gut**e** Brot |
| мн | die gut**en** Bücher | die gut**en** Bücher |

### После ein / mein / kein — смешанное
В номинативе и в среднем/женском аккузативе прилагательное берёт «сильный» сигнал. В мужском аккузативе сигнал уже на **einen** — прилагательное **-en**.

| | номинатив | аккузатив |
|---|---|---|
| м | ein gut**er** Wein | einen gut**en** Wein |
| ж | eine gut**e** Suppe | eine gut**e** Suppe |
| ср | ein gut**es** Brot | ein gut**es** Brot |
| мн (kein/mein) | keine gut**en** Bücher | keine gut**en** Bücher |

### Без артикля — сильное окончание
Прилагательное само играет роль артикля.

| | номинатив | аккузатив |
|---|---|---|
| м | gut**er** Wein | gut**en** Wein |
| ж | gut**e** Suppe | gut**e** Suppe |
| ср | gut**es** Brot | gut**es** Brot |
| мн | gut**e** Freunde | gut**e** Freunde |

Предикатив **без** окончания: **Der Wein ist gut.** Окончание появляется только в позиции перед существительным: **der gute Wein**.

> 💡 На A2 проверяйте две клетки чаще всего: **ein guter / eine gute / ein gutes** и мужской аккузатив **einen guten**. Форма **ein guten Mann** — типичная ошибка: в номинативе после **ein** нужно **-er**.`,
  },
  {
    slug: "de-a2-subordinates-zu",
    title: "Weil, dass, wenn и zu + инфинитив",
    titleEs: "Subordinate clauses and zu-infinitive",
    level: "A2",
    category: "Синтаксис",
    summary:
      "Придаточные с глаголом в конце; weil, dass, wenn; конструкции с zu.",
    content: `> **Перед этой темой:** вы ставите окончание прилагательного в простых фразах. **В этой теме:** придаточное отправляет спрягаемый глагол в **конец**. Рядом — инфинитив с **zu**.

## Глагол в конце
Союзы **weil, dass, wenn** (также **ob**, его подробнее на B1) начинают придаточное. Запятая обязательна. Спрягаемый глагол — **последний**.

- **Ich lerne Deutsch, weil ich in Berlin wohne.**
- **Ich weiß, dass er morgen kommt.**
- **Wenn ich Zeit habe, lese ich.**

Если придаточное стоит **первым**, оно занимает всё первое место главного предложения. Глагол главного сразу после запятой: **Wenn ich Zeit habe, lese ich.** Это всё ещё V2: придаточное = позиция 1.

**wenn** — и «если», и «когда» о повторяющемся: **Wenn es regnet, bleibe ich zu Hause.**
**weil** — причина. Не путайте с **denn**: **denn** не отправляет глагол в конец. **Ich bleibe, denn ich bin müde.** **Ich bleibe, weil ich müde bin.**

Отделяемая приставка в придаточном **возвращается** к глаголу: **…, weil ich früh aufstehe.**

## zu + инфинитив
После **versuchen, vorhaben, hoffen, vergessen, planen, anfangen, aufhören** и в ряде устойчивых оборотов:

- **Ich versuche, pünktlich zu sein.**
- **Er vergisst oft, anzurufen.**

У отделяемого глагола **zu** встаёт **между** приставкой и корнем: **aufzustehen, einzukaufen, mitzukommen**.

**um … zu** — цель: **Ich lerne Deutsch, um in Deutschland zu arbeiten.**
**ohne … zu** — «не сделав»: **Er geht, ohne sich zu verabschieden.**

Модальные глаголы **zu** не берут: **Ich kann bleiben.**

Подлежащее инфинитивного оборота — то же, что у главного глагола. Если подлежащие разные, нужен **dass**: **Ich hoffe, dass du kommst.** Не *Ich hoffe, du zu kommen*.

> 💡 Два порядка причинного союза: **denn** + обычный V2, **weil** + глагол в конце. В аккуратной письменной речи **weil** не оставляйте с порядком главного предложения.`,
  },

  // ===== B1 ==========================================================
  {
    slug: "de-b1-case-system",
    title: "Система четырёх падежей",
    titleEs: "The four-case system",
    level: "B1",
    category: "Падежи",
    summary:
      "Номинатив, аккузатив, датив и генитив: артикли, местоимения, n-склонение.",
    content: `> **Перед этой темой:** вы строите придаточное с глаголом в конце. **В этой теме:** все четыре падежа в одной таблице — включая **Genitiv**.

## Артикль

| | м | ж | ср | мн |
|---|---|---|---|---|
| N | der / ein | die / eine | das / ein | die / — |
| A | **den / einen** | die / eine | das / ein | die / — |
| D | **dem / einem** | **der / einer** | **dem / einem** | **den** + **-n** |
| G | **des / eines** + **-(e)s** | **der / einer** | **des / eines** + **-(e)s** | **der** |

Генитив мужского и среднего: **des Mannes, des Kindes, eines Lehrers**. Односложные часто **-es** (**des Buches**), многосложные чаще **-s** (**des Lehrers**).

Вопрос генитива — **wessen?** **Wessen Tasche ist das?** — **Annas** / **die Tasche des Lehrers**.

Имя в генитиве в разговоре часто заменяют на **von** + датив: **das Auto von meinem Bruder** = **das Auto meines Bruders**. В письменной речи генитив предпочтителен.

### Предлоги с генитивом
**wegen, während, trotz, (an)statt, innerhalb, außerhalb**.

- **wegen des Wetters**
- **während des Seminars**
- **trotz der Kälte**

В разговоре **wegen** часто с дательным (**wegen dem Wetter**). Для письма держите генитив.

## Местоимения: сводка

| N | A | D |
|---|---|---|
| ich | mich | mir |
| du | dich | dir |
| er | ihn | ihm |
| sie | sie | ihr |
| es | es | ihm |
| wir | uns | uns |
| ihr | euch | euch |
| sie | sie | ihnen |
| Sie | Sie | Ihnen |

Генитив личных местоимений редок; на B1 достаточно **wegen mir** в разговорной формуле и книжного **meinetwegen**.

## N-склонение
Несколько мужских одушевлённых получают **-(e)n** во всех падежах, кроме номинатива: **der Student, den Studenten, dem Studenten, des Studenten**. Так же **Herr, Name** (**den Herrn, des Namens**), **Junge, Kollege, Mensch, Nachbar**.

> 💡 Женский артикль **der** бывает и номинативом мужского, и дательным/генитивным женского. Падеж читается по **глаголу и предлогу**, не по одной форме: **der Frau** после **helfen** или **wegen** — не подлежащее.`,
  },
  {
    slug: "de-b1-adjective-endings",
    title: "Окончания прилагательных",
    titleEs: "Adjective endings",
    level: "B1",
    category: "Прилагательные",
    summary:
      "Слабое, смешанное и сильное склонение прилагательных во всех падежах.",
    content: `> **Перед этой темой:** четыре падежа артикля уже собраны в систему. **В этой теме:** те же падежи на **прилагательном** — три типа склонения.

Окончание есть только перед существительным. **Der Wein ist gut** — без окончания.

## Слабое (der, die, das, dieser, jeder, welcher, alle)

| | м | ж | ср | мн |
|---|---|---|---|---|
| N | -e | -e | -e | -en |
| A | -en | -e | -e | -en |
| D | -en | -en | -en | -en |
| G | -en | -en | -en | -en |

**der gute Wein, den guten Wein, dem guten Wein, des guten Weines**.
**dieser alte Tisch, alle guten Ideen, jede neue Frage**.

## Смешанное (ein, kein, mein и остальные притяжательные)

| | м | ж | ср | мн |
|---|---|---|---|---|
| N | **-er** | -e | **-es** | -en |
| A | -en | -e | **-es** | -en |
| D | -en | -en | -en | -en |
| G | -en | -en | -en | -en |

**ein guter Wein, einen guten Wein, einem guten Wein, eines guten Weines**.
**unsere kleine Wohnung, kein kaltes Wasser, meinen alten Freunden** (датив мн.).

## Сильное (нет артикля; также после etwas, wenig, viel в ед. числе — с оговорками)

| | м | ж | ср | мн |
|---|---|---|---|---|
| N | -er | -e | -es | -e |
| A | -en | -e | -es | -e |
| D | -em | -er | -em | -en |
| G | -en | -er | -en | -er |

**guter Wein, gute Milch, mit gutem Brot, trotz starken Regens**.
Множественное без артикля: **kleine Kinder, mit kleinen Kindern**.

После **viele, einige, mehrere, wenige** во множественном числе прилагательное обычно **-en**: **viele interessante Bücher**. После **manche, solche, alle** — тоже слабый тип.

Два прилагательных получают **одинаковое** окончание: **ein kalter, dunkler Winter**.

Сравнительная степень склоняется так же: **ein kleineres Zimmer, mit dem kleineren Zimmer**.

> 💡 Практическая проверка: посмотрите на артикль. Если у него уже есть «сильный» конец (**der, dem, den, das, die, ein-en**), прилагательное слабое (**-e/-en**). Голый **ein / mein** в номинативе мужского и среднего сигнала не несёт — его берёт прилагательное: **-er / -es**.`,
  },
  {
    slug: "de-b1-relative-clauses",
    title: "Относительные придаточные",
    titleEs: "Relative clauses",
    level: "B1",
    category: "Синтаксис",
    summary:
      "Der/die/das как относительное местоимение: падеж по роли в придаточном, глагол в конце.",
    content: `> **Перед этой темой:** окончания прилагательных закрывают падежную систему. **В этой теме:** придаточное, которое **определяет существительное**. Местоимение похоже на артикль, но падеж берёт из **своего** предложения.

## Формы

| | м | ж | ср | мн |
|---|---|---|---|---|
| N | **der** | **die** | **das** | **die** |
| A | **den** | **die** | **das** | **die** |
| D | **dem** | **der** | **dem** | **denen** |
| G | **dessen** | **deren** | **dessen** | **deren** |

Род и число — от существительного, к которому относится местоимение. Падеж — от роли **внутри** придаточного. Глагол в конце. Запятые с обеих сторон.

- **Der Mann, der dort steht, ist mein Nachbar.** (кто стоит? номинатив)
- **Der Film, den ich gesehen habe, war lang.** (что я видел? аккузатив)
- **Die Frau, der ich helfe, ist Ärztin.** (кому помогаю? датив; **helfen**)
- **Die Kinder, denen wir danken, singen.** (датив мн. — **denen**, не *den*)
- **Das Kind, dessen Vater Arzt ist, heißt Tim.** (чей отец)

### Предлог перед местоимением
Предлог диктует падеж: **der Kollege, mit dem ich arbeite**. **die Stadt, in der ich wohne**. **das Thema, über das wir sprechen**.

Место можно заменить на **wo**, если речь о городе или месте: **die Stadt, wo ich wohne**. Для людей **wo** не используют.

### was
После **alles, nichts, etwas, vieles** и превосходной степени местоимение часто **was**: **alles, was ich höre**; **das Beste, was du tun kannst**.

> 💡 Не копируйте падеж антецедента. В **der Film, den ich sehe** слово Film в главном — номинатив (**der**), а в придаточном — прямое дополнение (**den**). Две разные должности.`,
  },
  {
    slug: "de-b1-plusquamperfekt-futur",
    title: "Plusquamperfekt и Futur I",
    titleEs: "Pluperfect and future I",
    level: "B1",
    category: "Глаголы",
    summary:
      "Предпрошедшее для более раннего события и будущее с werden.",
    content: `> **Перед этой темой:** вы присоединяете **относительное** придаточное. **В этой теме:** как показать, что одно прошлое было **раньше** другого, и как назвать будущее через **werden**.

## Plusquamperfekt
Схема как у Perfekt, но вспомогательный глагол в **Präteritum**: **hatte** или **war** + Partizip II.

Выбор **hatte / war** — тот же, что **hat / ist** в Perfekt.

- **Ich hatte schon gegessen, als er kam.**
- **Nachdem sie angekommen war, rief sie uns an.**

**nachdem** + Plusquamperfekt в придаточном, в главном — Präteritum или Perfekt: более раннее действие там, где **nachdem**.

**bevor** наоборот ставит раннее действие в главное: **Bevor ich ging, hatte ich das Fenster geschlossen.** На B1 достаточно устойчивой пары **nachdem + Plusquamperfekt**.

В быту Plusquamperfekt не обязателен, если порядок и так ясен (**Zuerst …, dann …**). Он нужен, когда линия времени ветвится.

## Futur I
**werden** (спрягается, место V2) + инфинитив в конце.

| ich | du | er | wir | ihr | sie/Sie |
|---|---|---|---|---|---|
| werde | wirst | wird | werden | werdet | werden |

- **Ich werde dich morgen anrufen.**
- **Es wird regnen.**
- **Wirst du zu Hause sein?**

План на ближайшее время чаще выражают **Präsens** + обстоятельство: **Morgen fahre ich nach Wien.** Futur I добавляет прогноз, обещание или предположение: **Er wird schon zu Hause sein** (вероятно, он уже дома).

С модальным оттенком уверенности рядом стоят **wohl, wahrscheinlich, sicher**.

В придаточном **werden** уходит в конец, но **перед** инфинитивом или сливается в конец кластера: **…, weil ich dich anrufen werde.**

> 💡 **werden** в Futur I — это не пассив. Пассив: **wird gemacht** (wird + Partizip II). Будущее: **wird machen** (wird + инфинитив). Смотрите на форму второго глагола.`,
  },
  {
    slug: "de-b1-passive",
    title: "Пассив с werden",
    titleEs: "Passive with werden",
    level: "B1",
    category: "Глаголы",
    summary:
      "Vorgangspassiv: werden + Partizip II в настоящем и в Perfekt.",
    content: `> **Перед этой темой:** вы отличаете **werden** будущего времени от других схем. **В этой теме:** **пассив процесса** — действие важно, исполнитель нет.

## Схема
**werden** + **Partizip II**. Подлежащим становится бывшее прямое дополнение. Поэтому пассив строится в основном от **переходных** глаголов.

| время | пример |
|---|---|
| Präsens | Das Buch **wird gelesen**. |
| Präteritum | Das Buch **wurde gelesen**. |
| Perfekt | Das Buch **ist gelesen worden**. |
| Futur I | Das Buch **wird gelesen werden**. |

В Perfekt пассива причастие вспомогательного глагола — **worden**, не **geworden**. **geworden** — это Partizip II глагола «становиться»: **Er ist Arzt geworden.**

Исполнитель, если он нужен: **von** + датив. **Der Brief wird von der Sekretärin geschrieben.**
Средство и причина чаще **durch**: **Die Stadt wurde durch ein Erdbeben zerstört.**

### Зачем пассив, если есть man
**Man repariert die Straße** — живой разговор, деятель «люди вообще».
**Die Straße wird repariert** — нейтральное сообщение, вывеска, новость, инструкция. Оба варианта грамматически верны; пассив типичнее для письменного и официального тона.

Безличный пассив возможен и от некоторых непереходных: **Es wird hier getanzt.** Если другое слово занимает первое место, **es** исчезает: **Hier wird getanzt.**

Отрицание: **Das Fenster wird nicht geöffnet.**

> 💡 Три формы рядом: **wird geöffnet** (процесс, Präsens), **ist geöffnet worden** (процесс завершён), **ist geöffnet** (состояние: уже открыто). Последнюю — Zustandspassiv — подробно разбираем на B2; сейчас достаточно её узнавать.`,
  },
  {
    slug: "de-b1-konjunktiv-ii",
    title: "Konjunktiv II: вежливость и нереальное условие",
    titleEs: "Konjunktiv II: politeness and unreal conditions",
    level: "B1",
    category: "Наклонение",
    summary:
      "Würde, hätte, wäre и модальные в Konjunktiv II: просьбы, желания, wenn.",
    content: `> **Перед этой темой:** вы строите пассив с **werden**. **В этой теме:** **Konjunktiv II** — вежливая просьба, желание и условие «если бы».

## Рабочие формы
Универсальная замена: **würde** + инфинитив. Она всегда уместна на B1.

Отдельно заучите формы, которые живее, чем würde:

| | Konjunktiv II |
|---|---|
| sein | **wäre, wärst, wäre, wären, wärt, wären** |
| haben | **hätte, hättest, hätte, hätten, hättet, hätten** |
| können | **könnte** |
| müssen | **müsste** (долг в нереальном мире; мягкое «следовало бы») |
| dürfen | **dürfte** (вежливое разрешение; также «вероятно») |
| sollen | **sollte** (совет: тебе стоило бы) |

- **Ich hätte gern einen Kaffee.**
- **Könnten Sie das wiederholen?**
- **Würdest du mir helfen?**
- **Du solltest früher schlafen.**

**möchte** по происхождению тоже Konjunktiv II от mögen и уже знакомо как вежливое «хотел бы».

## Wenn-условие
Нереальное условие: оба глагола в Konjunktiv II, в придаточном глагол в конце.

- **Wenn ich Zeit hätte, würde ich kommen.**
- **Wenn ich in Berlin wäre, besuchte ich dich** / чаще **würde ich dich besuchen**.
- **Wenn wir das gewusst hätten, wären wir geblieben.** (прошлое: **hätte/wäre** + Partizip II)

**Wenn** можно опустить, тогда глагол придаточного встаёт на первое место: **Hätte ich Zeit, würde ich kommen.**

Желание без условия: **Ich wäre jetzt gern am Meer.** **Wenn ich nur mehr Zeit hätte!**

Вежливый совет не звучит как приказ: сравните **Mach das!** и **Du könntest das morgen machen.**

> 💡 На B1 не гонитесь за редкими формами вроде **käme, gäbe, wüsste**. **würde kommen / würde geben** понятно и правильно. Исключения, которые лучше знать готовыми: **wäre, hätte, könnte, müsste**.`,
  },
  {
    slug: "de-b1-connectors-complex",
    title: "Сложные союзы и связность",
    titleEs: "Complex connectors",
    level: "B1",
    category: "Синтаксис",
    summary:
      "Три типа связок: сочинительные, подчинительные и наречные с инверсией.",
    content: `> **Перед этой темой:** вы строите **wenn** с Konjunktiv II. **В этой теме:** как связать два сообщения. В немецком тип связки **меняет порядок слов**.

## Три группы

| тип | слова | порядок после связки |
|---|---|---|
| сочинительные (позиция 0) | **und, aber, oder, denn, sondern** | обычный: подлежащее + глагол |
| подчинительные | **weil, dass, wenn, ob, obwohl, damit, während, bevor, nachdem, als, seit, bis, falls, sobald** | глагол в **конце** |
| наречные (позиция 1) | **deshalb, trotzdem, dann, danach, jedoch, außerdem, sonst, darum** | глагол сразу, подлежащее за ним |

- **Ich bin müde, aber ich gehe mit.**
- **Ich bin müde, denn ich habe schlecht geschlafen.**
- **Ich gehe mit, obwohl ich müde bin.**
- **Ich bin müde, trotzdem gehe ich mit.**

**obwohl** + глагол в конце ≠ **trotzdem** + инверсия. Смысл близкий (уступка), синтаксис разный.

### Смысл новых союзов
| союз | смысл |
|---|---|
| **obwohl** | хотя |
| **damit** | чтобы (у подлежащих могут быть разные лица) |
| **um … zu** | чтобы, если подлежащее одно |
| **während** | в то время как; тогда как (контраст) |
| **bevor / nachdem** | прежде чем / после того как |
| **als** | когда — об **однократном** прошлом |
| **wenn** | если; когда — о повторяющемся или будущем |
| **falls** | если вдруг, на случай если |

- **Damals, als ich in Wien war, …** (один период в прошлом)
- **Immer wenn ich in Wien bin, …**
- **Ich schreibe es auf, damit du es nicht vergisst.**
- **Während er kochte, habe ich den Tisch gedeckt.**

**sondern** после отрицания, когда вторая часть заменяет первую: **Nicht Tee, sondern Kaffee.** **aber** — мягкое «но», без обязательной замены.

> 💡 Перед связкой назовите её тип. Наречие занимает первое место, поэтому **deshalb ich gehe** неверно — нужно **deshalb gehe ich**. Подчинительный союз гонит глагол в конец: **obwohl ich müde bin**, не *obwohl bin ich müde*. У **weil** и **obwohl** спрягаемый глагол — последнее слово клаузы.`,
  },
  {
    slug: "de-b1-verb-prep-indirect",
    title: "Управление глаголов и косвенный вопрос",
    titleEs: "Verb–preposition patterns and indirect questions",
    level: "B1",
    category: "Синтаксис",
    summary:
      "Глагол с фиксированным предлогом, da-/wo- и вопросы с ob в придаточном.",
    content: `> **Перед этой темой:** вы различаете три типа связок. **В этой теме:** предлог, который требует **глагол**, а не картина пространства, и вопрос, который стал частью фразы.

## Глагол + предлог
Предлог здесь не выбирается по «куда/где». Его запоминают вместе с глаголом. Падеж — тот, который у этого предлога свой.

| глагол | предлог | пример |
|---|---|---|
| warten | **auf** + A | Ich warte **auf den Bus**. |
| denken | **an** + A | Denkst du **an die Prüfung**? |
| sprechen | **mit** + D / **über** + A | Ich spreche **mit ihr über den Plan**. |
| sich freuen | **auf** + A / **über** + A | Wir freuen uns **auf** / **über** … |
| sich interessieren | **für** + A | Er interessiert sich **für Kunst**. |
| teilnehmen | **an** + D | Sie nimmt **an dem Kurs** teil. |
| bitten | **um** + A | Ich bitte dich **um Hilfe**. |
| helfen | **bei** + D | Hilfst du mir **bei den Hausaufgaben**? |
| träumen | **von** + D | Ich träume **von einer Reise**. |
| erzählen | **von** + D / **über** + A | Erzähl mir **davon**. |

Если дополнение — не человек, а целая мысль или вещь, уже названная, предлог срастается с **da(r)-**: **darauf, daran, darüber, damit, davon, dafür**.
**Ich warte darauf.** **Wir sprechen darüber.**
Перед гласной ставят **-r-**: **darauf**, не *daauf*.

Вопрос к такому дополнению: **wo(r)-** + предлог. **Worauf wartest du?** **Womit fährst du?**
К человеку **wo-** не используют: **Auf wen wartest du?** **Mit wem sprichst du?**

## Косвенный вопрос
Прямой вопрос вкладывается в фразу: появляется **ob** (если не было W-слова) или то же W-слово. Глагол уходит в конец. Вопросительного порядка больше нет.

- **Kommt er?** → **Ich weiß nicht, ob er kommt.**
- **Wo wohnt sie?** → **Weißt du, wo sie wohnt?**
- **Wann beginnt der Film?** → **Sag mir bitte, wann der Film beginnt.**

Запятая перед косвенным вопросом обязательна. Знак вопроса стоит только если **вся** фраза — вопрос: **Weißt du, ob er kommt?**

> 💡 **ob** не переводится как «если» условия. Условие — **wenn / falls**. **ob** — «ли» после «не знаю / спрашиваю / не уверен». **Ich frage mich, ob das stimmt.**`,
  },

  // ===== B2 ==========================================================
  {
    slug: "de-b2-advanced-passive",
    title: "Расширенный пассив",
    titleEs: "Extended passive",
    level: "B2",
    category: "Глаголы",
    summary:
      "Пассив с модальным глаголом, Zustandspassiv и безличный es wird.",
    content: `> **Перед этой темой:** вы строите Vorgangspassiv в Präsens и Perfekt. **В этой теме:** пассив с **модальным** глаголом, пассив **состояния** и безличная схема.

## Модальный + пассив
Модальный глагол спрягается, в конце связка **Partizip II + werden** (инфинитив).

- **Die Tür muss geschlossen werden.**
- **Das Formular kann online ausgefüllt werden.**
- **Die Regeln sollen beachtet werden.**

Прошедшее чаще через Präteritum модального, без тяжёлого перфекта: **Die Tür musste geschlossen werden.** **Der Fehler konnte gefunden werden.**

## Zustandspassiv и Vorgangspassiv

| | схема | вопрос | пример |
|---|---|---|---|
| процесс | **werden** + Partizip II | что происходит? | Die Tür **wird geschlossen**. |
| состояние | **sein** + Partizip II | каково сейчас? | Die Tür **ist geschlossen**. |

- **Der Laden wird um acht geöffnet.** — действие открывания.
- **Der Laden ist geöffnet.** — он открыт (состояние).
- **Die Rechnung ist schon bezahlt.** — оплачена и это результат.

Perfekt процесса по-прежнему **worden**: **Der Laden ist um acht geöffnet worden.** Не смешивайте с **ist geöffnet**.

## Безличный пассив
Когда деятель неважен и подлежащего-вещи нет: **Es wird sonntags nicht gearbeitet.** **Überall wurde getanzt.**
**es** только заполняет пустое первое место. **Sonntags wird nicht gearbeitet.**

## von или durch
**von** + датив — агент, обычно человек или учреждение: **von der Regierung beschlossen**.
**durch** + аккузатив — средство, посредник, причина: **durch einen Fehler zerstört**, **durch den Boten übermittelt**.

Рядом живёт каузатив **lassen** + инфинитив: **Ich lasse das Auto reparieren** (мне чинят / я отдаю в починку). Это не пассив, но в тексте часто его заменяет, когда инициатор важен.

> 💡 Увидели **sein** + Partizip II — спросите, это результат (**ist geschrieben** — написано) или Perfekt с **sein** у глагола движения (**ist gefahren**). Причастие переходного глагола с **sein** без **worden** почти всегда состояние.`,
  },
  {
    slug: "de-b2-konjunktiv-i-ii",
    title: "Konjunktiv I и замена на Konjunktiv II",
    titleEs: "Konjunktiv I and the Konjunktiv II substitute",
    level: "B2",
    category: "Наклонение",
    summary:
      "Косвенная речь: формы Konjunktiv I и переход на Konjunktiv II, если форма совпала с изъявительным.",
    content: `> **Перед этой темой:** Konjunktiv II у вас работает для вежливости и «если бы». **В этой теме:** **Konjunktiv I** — чужая речь в пересказе, прежде всего в письменном немецком.

## Зачем отдельное наклонение
Индикатив в пересказе звучит так, будто говорящий **сам** подтверждает факт. Konjunktiv I оставляет факт на совести источника: «он утверждает, что…».

**Er sagt, er ist krank** — ближе к «и это так / я просто передаю разговорно».
**Er sagt, er sei krank** — нейтральный пересказ, норма статьи и протокола.

## Формы Konjunktiv I (настоящее)
Основа инфинитива + **-e, -est, -e, -en, -et, -en**. У **sein** особый ряд.

| | sein | haben | werden | können |
|---|---|---|---|---|
| ich | sei | habe | werde | könne |
| du | seiest | habest | werdest | könnest |
| er/sie/es | **sei** | **habe** | **werde** | **könne** |
| wir | seien | haben | werden | können |
| ihr | seiet | habet | werdet | könnet |
| sie/Sie | **seien** | haben | werden | können |

Узнаваемые формы 3-го лица ед.: **er sei, er habe, er werde, er könne, er komme, er gehe**.

## Правило замены
Если форма Konjunktiv I **совпадает** с индикативом, берут Konjunktiv II.

- **er habe** ≠ **er hat** → оставляем **habe**.
- **sie haben** (они) = индикатив → **sie hätten**.
- **ich habe** = индикатив → в пересказе от первого лица **ich hätte**, если нужна маркировка.
- **du habest** формально отличимо, но в живом тексте чаще **du hättest**.

Прошедшее в чужой речи — Konjunktiv I от вспомогательного + Partizip II: **Er sagt, er sei gestern angekommen.** **Sie behauptet, sie habe das nicht gewusst.** Если вспомогательный совпал: **Sie sagen, sie hätten das nicht gewusst.**

Будущее источника: **er werde kommen**.

- **Die Zeitung schreibt, der Minister sei zurückgetreten.**
- **Zeugen geben an, sie hätten nichts gesehen.**

> 💡 В статье проверяйте третье лицо единственного числа: там Konjunktiv I почти всегда **виден** (**sei, habe, werde**). Как только подлежащее — **wir / sie** (они), ждите **wären, hätten, würden**, потому что «настоящий» Konjunktiv I слился с обычной формой.`,
  },
  {
    slug: "de-b2-participial-relative",
    title: "Причастные обороты",
    titleEs: "Participial and extended relative structures",
    level: "B2",
    category: "Синтаксис",
    summary:
      "Распространённое определение с Partizip I и II вместо придаточного.",
    content: `> **Перед этой темой:** вы пересказываете чужую речь через Konjunktiv. **В этой теме:** как немецкая канцелярия и пресса **сжимают** придаточное в группу перед существительным.

## Два причастия
**Partizip I** (инфинитив + **-d**) — активное, одновременное: **lesend** = который читает.
**Partizip II** — законченное или пассивное: **gelesen** = прочитанный.

Как определение они склоняются по обычным правилам прилагательного:

- **der lesende Student** — студент, который читает
- **das gelesene Buch** — прочитанная книга
- **die angekommene Gruppe** — прибывшая группа

## Распространённое определение
Всё, что в придаточном было бы до глагола, встаёт **между артиклем и причастием**.

| придаточное | причастный оборот |
|---|---|
| der Plan, den die Regierung vorgeschlagen hat | **der von der Regierung vorgeschlagene Plan** |
| die Gäste, die gestern angekommen sind | **die gestern angekommenen Gäste** |
| ein Student, der laut liest | **ein laut lesender Student** |

Порядок внутри группы: артикль → дополнения и обстоятельства → причастие с окончанием → существительное.
**die von uns seit Jahren gesuchte Lösung**.

Такой оборот читают **с конца налево**: сначала существительное, потом причастие, потом кто и когда. Иначе цепочка предлогов не собирается.

### Относительные, которые рядом
**welcher** вместо **der** — возможный, но редкий и канцелярский вариант. В обычном тексте предпочтителен **der/die/das**.
**was** после всего неопределённого вы уже видели на B1.
**worauf / womit / wofür** замыкают придаточное, если относительное местоимение сидит в управлении: **das Thema, worüber wir sprechen** = **das Thema, über das wir sprechen**.

Герундив **zu + Partizip I**: **das zu lösende Problem** — проблема, которую предстоит решить; **die zu beachtenden Regeln**.

> 💡 Если оборот не читается, разверните его обратно в **der/die/das**-придаточное. Смысл тот же. Причастие выбирают, когда нужно уплотнить письменный абзац, а не когда говорят за ужином.`,
  },
  {
    slug: "de-b2-nominalization",
    title: "Номинализация",
    titleEs: "Nominalization and nominal style",
    level: "B2",
    category: "Стиль",
    summary:
      "Глагол и придаточное, свёрнутые в существительное: номинальный стиль официального текста.",
    content: `> **Перед этой темой:** вы сжимаете придаточное в причастие. **В этой теме:** второй способ уплотнить текст — **существительное** вместо глагола.

## Как глагол становится существительным
Инфинитив с артиклем **das** (средний род, обычно без множественного): **das Lesen, das Schwimmen, das Rauchen**.
**Rauchen ist hier verboten.** = **Es ist verboten, hier zu rauchen.**

Суффиксы отглагольных существительных:

| суффикс | род | пример |
|---|---|---|
| **-ung** | die | entscheiden → **die Entscheidung** |
| **-tion / -sion** | die | informieren → **die Information** |
| нулевой / умлаут | der | abflug → **der Abflug**; vorstellen → **der Vorschlag** часто от другой основы |

Род такого существительного учат вместе со словом. **-ung** и **-tion** надёжно женские.

## Придаточное → группа существительного
Предлог забирает роль союза. Дополнение уходит в **генитив** или **von**.

| глагольный стиль | номинальный стиль |
|---|---|
| Nachdem er angekommen war, … | **Nach seiner Ankunft** … |
| Weil der Zug Verspätung hatte, … | **Wegen der Verspätung des Zuges** … |
| …, um die Qualität zu verbessern | **zur Verbesserung der Qualität** |
| Als sie den Vertrag prüften, … | **Bei der Prüfung des Vertrags** … |

Частые предлоги номинального стиля: **nach, bei, vor, während, wegen, trotz, zu / zur, durch, mit**.

Глагольный стиль легче для уха: больше личных глаголов, меньше цепочек генитива. Номинальный стиль — отчёты, новости, инструкции, наука. Хороший текст B2 умеет **оба** и не ставит три **-ung** подряд без нужды.

Обратное упражнение полезнее прямого: возьмите **nach der Ankunft** и разверните в **nachdem … angekommen war**. Так видно, какой союз и какое время спрятаны внутри.

> 💡 Номинальный стиль не «более правильный». Он более плотный и более официальный. В письме коллеге живой глагол часто уместнее, чем **die Durchführung der Besprechung**.`,
  },
  {
    slug: "de-b2-academic-professional",
    title: "Учебный и деловой немецкий",
    titleEs: "Academic and professional German",
    level: "B2",
    category: "Коммуникация",
    summary:
      "Письмо, резюме и короткая презентация: устойчивые обороты официальной коммуникации.",
    content: `> **Перед этой темой:** вы узнаёте номинальный стиль. **В этой теме:** где он обязателен — **письмо, Lebenslauf, короткое выступление**.

## Письмо
Тема в строке **Betreff**, коротко, без точки: **Bewerbung als Praktikantin**.

| | обращение | концовка |
|---|---|---|
| имя известно | **Sehr geehrte Frau Lehmann,** / **Sehr geehrter Herr Lehmann,** | **Mit freundlichen Grüßen** |
| имя неизвестно | **Sehr geehrte Damen und Herren,** | **Mit freundlichen Grüßen** |

После обращения — запятая и **строчная** буква в немецкой традиции, если следующее слово не существительное: **Sehr geehrte Frau Berg, ich bewerbe mich um …**

Полезные ходы, без канцелярита ради канцелярита:

- **Ich beziehe mich auf Ihre Anzeige vom 3. Mai.**
- **Anbei sende ich Ihnen meinen Lebenslauf.**
- **Könnten Sie mir mitteilen, ob …**
- **Für Ihre Antwort danke ich Ihnen im Voraus.**

Просьба в Konjunktiv II вежливее императива: **Könnten Sie** / **Würden Sie** / **Ich würde mich freuen, wenn Sie …**

## Lebenslauf
Сухой номинальный перечень, обычно без «я»: **2019–2023 Studium der Informatik, Universität Leipzig**. Даты слева, факт справа. Глаголы, если есть, часто в причастии или инфинитиве раздела: **Berufserfahrung, Praktika, Sprachkenntnisse**.
Оценки языка: **Grundkenntnisse / gute Kenntnisse / fließend / verhandlungssicher**.

## Короткое выступление
- Открытие: **Ich möchte heute über … sprechen.**
- План: **Zuerst …, dann …, abschließend …**
- Акцент: **Ich möchte darauf hinweisen, dass …**
- Пример: **Ein Beispiel dafür ist …**
- Закрытие: **Zusammenfassend lässt sich sagen, dass …**

Здесь уместны пассив и номинализации, которые вы только что разобрали: **Es werden drei Punkte dargestellt.** **Zur Übersicht eine Grafik.**

> 💡 Официальное письмо почти всегда на **Sie**, даже если вы знаете фамилию из подписи в чате. Переход на **du** в немецком рабочем контексте делают явно, его не угадывают по дружелюбному тону.`,
  },
  {
    slug: "de-b2-register-style",
    title: "Регистр и стиль",
    titleEs: "Register and style",
    level: "B2",
    category: "Стиль",
    summary:
      "Разговорный и письменный немецкий: du/Sie, выбор слова, порядок слов и частицы-предвестники.",
    content: `> **Перед этой темой:** вы пишете официальное письмо. **В этой теме:** как **тот же смысл** звучит в разговоре, в нейтральной речи и в тексте — и что из разговорного нельзя переносить в письмо.

## Обращение и лексика

| разговорно | нейтрально / письменно |
|---|---|
| **du**, эллипсис | **Sie**, полное предложение |
| **kriegen** | **bekommen** / **erhalten** |
| **was** вместо **das** в относительном | **das, was** / нормативное **das** |
| **raus, rein** | **heraus, herein** |
| стяжения **im, zum, ins** | в очень официальном тексте иногда **in dem** |

**kriegen** понятно всем и нормально среди друзей. В заявлении пишут **Ich habe eine Antwort erhalten**, не *gekriegt*.

## Порядок слов, который выдаёт устную речь
В аккуратном письме **weil / obwohl** держат глагол в конце.
В разговоре часто слышно **weil** с порядком главного предложения: **weil ich hab keine Zeit**. Это опознавательный знак устной речи, не образец для эссе.

Двойной Perfekt и лишние **tun** (**ich tu mal schauen**) — региональная разговорность. В нейтральном регистре их нет.

## Насколько прямо
Просьба по убыванию давления:

1. **Mach das Fenster zu.**
2. **Kannst du das Fenster zumachen?**
3. **Könntest du bitte das Fenster zumachen?**
4. **Würden Sie bitte das Fenster schließen?**
5. **Wäre es möglich, das Fenster zu schließen?**

Чем официальнее ситуация, тем дальше от императива и тем чаще Konjunktiv II и безличный оборот (**Es wäre gut, wenn …**).

Модальные частицы (**doch, mal, eben, halt**) делают фразу разговорной. Их разберём на C1; на B2 достаточно не вставлять **halt** и **mal** в заявление и не вычищать их из дружеского диалога.

> 💡 Регистр — это набор, а не одно слово. **Sie** рядом с **kriegen** и **weil + V2** всё равно звучит разговорно. **du** рядом с **hiermit übersende ich** звучит как пародия. Держите обращение, лексику и порядок слов в одной полосе.`,
  },

  // ===== C1 ==========================================================
  {
    slug: "de-c1-reported-speech",
    title: "Косвенная речь: сложные случаи",
    titleEs: "Advanced reported speech",
    level: "C1",
    category: "Наклонение",
    summary:
      "Многоступенчатый пересказ: времена, вопросы, побуждение и дистанция источника.",
    content: `> **Перед этой темой:** вы ставите Konjunktiv I и заменяете его на II, когда формы совпали. **В этой теме:** пересказ **длиннее одной клаузы** — вопросы, приказы, цепочка источников, прошлое и будущее чужой речи.

## Время почти не «сдвигается» по-английски
Немецкий Konjunktiv передаёт **время исходной реплики**, а не отсчитывает шаг назад от глагола речи.

| исходная реплика | пересказ |
|---|---|
| «Ich **bin** krank.» | Er sagt, er **sei** krank. |
| «Ich **war** krank.» / «Ich **bin** krank **gewesen**.» | Er sagt, er **sei** krank **gewesen**. |
| «Ich **komme** morgen.» | Er sagte, er **werde** am nächsten Tag kommen. |

**sagen** в Präsens или в Präteritum само по себе Konjunktiv не меняет: и **sagt**, и **sagte** могут вводить **sei**. Сдвиг наречий при этом есть: **heute → an jenem Tag**, **morgen → am folgenden Tag**, **hier → dort**, если точка зрения сместилась.

## Вопрос, приказ, отрицание
Косвенный вопрос внутри чужой речи: **ob / W-слово** + Konjunktiv, глагол в конце.

- **Sie fragte, ob er die Mail bekommen habe.**
- **Er wollte wissen, wann der Zug ankomme.**

Побуждение пересказывают через **sollen** или **mögen** в Konjunktiv: **Er sagt, sie solle warten.** **Die Direktion bittet, man möge die Tür schließen.**

Отрицание остаётся при том слове, которое отрицалось: **Er behauptet, er habe das nicht gesagt.**

## Несколько клауз и дистанция
Источник можно отодвинуть формулой, не только глаголом **sagen**:

- **Laut Polizei sei die Straße gesperrt.**
- **Nach Angaben der Firma habe es keinen Unfall gegeben.**
- **Dem Bericht zufolge seien die Verhandlungen gescheitert.**

Если форма на **seien** слишком совпадает с ожиданием читателя или подлежащее множественное, Konjunktiv II держит дистанцию: **Dem Bericht zufolge hätten die Verhandlungen keine Einigung gebracht.**

В одной цитате можно смешивать: узнаваемый Konjunktiv I в единственном числе и Konjunktiv II там, где формы слиплись. Не выравнивайте всё под **würde** — в газетном абзаце цепочка **würde** звучит разговорнее, чем **sei / habe**.

Чужая оценка внутри пересказа тоже в Konjunktiv: **Er meinte, das sei zwar teuer, aber es lohne sich.** (**zwar … aber** сохраняется).

> 💡 Сначала восстановите прямую реплику, потом выберите время Konjunktiv по **ней**, а не по глаголу «сказал». Большинство ошибок C1 — это английский backshift: прошедший пересказ настоящим фактом источника или наоборот.`,
  },
  {
    slug: "de-c1-particles-idioms",
    title: "Модальные частицы и идиомы",
    titleEs: "Modal particles and idioms",
    level: "C1",
    category: "Прагматика",
    summary:
      "Doch, ja, eben, halt, mal, denn, schon: оттенок фразы и устойчивые выражения.",
    content: `> **Перед этой темой:** вы держите дистанцию в косвенной речи. **В этой теме:** слова, которые почти не переводятся, но меняют **отношение** говорящего — и идиомы, без которых речь звучит учебником.

## Частицы
Частица стоит в середине фразы, безударна (если это не отдельное **doch!** в споре) и не меняет грамматическую схему.

| частица | оттенок | пример |
|---|---|---|
| **doch** | общее знание; упрёк «ты же знаешь»; мягкое побуждение | Das ist **doch** klar. Komm **doch** mit. |
| **ja** | «как мы оба знаем»; иногда удивление | Du bist **ja** schon da! |
| **denn** | интерес в вопросе, «ну и…» | Was machst du **denn** hier? |
| **mal** | смягчение, «разочек / на минуту» | Schau **mal**. Kannst du **mal** helfen? |
| **eben / halt** | смирение: так уж устроено; **halt** разговорнее | Das ist **eben** so. |
| **schon** | успокоение или уступка «уж / пожалуй» | Das wird **schon**. Das stimmt **schon**, aber … |
| **eigentlich** | «на самом деле», лёгкий вызов | Was willst du **eigentlich**? |
| **wohl** | догадка | Er ist **wohl** schon weg. |

**doch** в ответе на отрицательный вопрос подтверждает: **Kommst du nicht mit? — Doch!** (нет, как раз иду). Это не согласие с отрицанием.

Частицы складываются: **Komm doch mal her.** Убирать их из разбора «как пустые» нельзя: без **mal** просьба суше, без **denn** вопрос протокольнее.

В официальном письме и научной статье этих частиц почти нет. Их зона — диалог, колонка, устный доклад с живым адресом.

## Идиомы и коллокации
Смысл не собирается из частей. Учите целиком и с управлением.

| выражение | смысл |
|---|---|
| **Schwein haben** | неожиданно повезти |
| **die Daumen drücken** | держать кулаки |
| **um den heißen Brei herumreden** | ходить вокруг да около |
| **die Nase voll haben** | быть сытым по горло |
| **ins kalte Wasser springen** | броситься в дело без подготовки |
| **auf dem Laufenden bleiben** | быть в курсе |
| **den Nagel auf den Kopf treffen** | попасть в точку |
| **Tomaten auf den Augen haben** | не видеть очевидного |

Рядом обычные коллокации, которые не идиомы, но так же несвободны: **eine Entscheidung treffen** (не *machen*), **Kritik üben**, **Bescheid sagen**, **in Frage kommen**, **zur Verfügung stehen**.

> 💡 Частицу нельзя перевести одним словом и подставить в любое место. Спросите, какое **отношение** она добавляет: общее знание, смягчение, догадку или «ну и что дальше». Идиому проверяйте на управлении: **die Nase voll haben von** + Dativ.`,
  },
  {
    slug: "de-c1-argumentation-formal",
    title: "Аргументация и официальный стиль",
    titleEs: "Argumentation and administrative German",
    level: "C1",
    category: "Дискурс",
    summary:
      "Уступка, контраргумент и канцелярские формулы письменной аргументации.",
    content: `> **Перед этой темой:** вы слышите оттенок частиц. **В этой теме:** как выстроить **письменный** аргумент и как звучит административный абзац — без разговорных **halt** и **mal**.

## Ход аргумента
Короткий абзац C1 обычно делает четыре шага: тезис → опора → уступка → вывод.

| функция | средства |
|---|---|
| тезис | **Meines Erachtens …** **Es spricht einiges dafür, dass …** |
| опора | **Dafür spricht …** **Ein Beleg dafür ist …** **Gerade deshalb …** |
| уступка | **zwar …, aber …** **einerseits …, andererseits …** **freilich** **wohl, doch** (здесь **doch** союзного типа, ударный) |
| контраргумент | **Dem lässt sich entgegenhalten, dass …** **Man könnte einwenden, …** |
| вывод | **folglich** **infolgedessen** **unter dem Strich** **nichtsdestotrotz / dennoch** |

- **Zwar ist die Maßnahme teuer, doch sie spart langfristig Kosten.**
- **Einerseits fehlt Personal, andererseits steigen die Anforderungen.**
- **Die Kritik ist berechtigt. Dennoch bleibt der Vorschlag tragfähig.**

**trotzdem** в этом регистре часто заменяют на **dennoch / nichtsdestotrotz**: они не тащат за собой слишком разговорный тон. Порядок после них — наречный: **Dennoch bleibt der Vorschlag tragfähig.**

Осторожная модальность сильнее прямого «я считаю»: **Es lässt sich argumentieren, dass …** **Die Daten legen nahe, dass …** **nicht auszuschließen sein**. Это не слабость позиции, а способ оставить место возражению.

## Административный слой
Формулы, которые не заменяются бытовым синонимом без смены регистра:

| формула | роль |
|---|---|
| **hiermit** | настоящим (при совершении действия письмом) |
| **anbei / in der Anlage** | в приложении |
| **bezüglich** + G | относительно |
| **gemäß** + D | согласно |
| **vorbehaltlich** + G | при условии, с оговоркой |
| **hiermit teile ich Ihnen mit, dass …** | официальное сообщение |
| **gegen diesen Bescheid kann Widerspruch eingelegt werden** | формула обжалования |

Номинальный стиль здесь ожидаем: **unter Bezugnahme auf Ihr Schreiben vom …**, **nach Prüfung der Unterlagen**. Глагольную версию оставляют там, где нужна личная ответственность: **Ich prüfe die Unterlagen und melde mich bis Freitag.**

> 💡 Уступка сильнее, если она конкретна. **Zwar ist das teuer, aber es ist gut** почти пусто. **Zwar steigen die Kosten im ersten Jahr, doch ab dem zweiten Jahr sinken sie** уже аргумент. Сначала факт, потом связка.`,
  },
  {
    slug: "de-c1-text-pragmatics",
    title: "Прагматика текста",
    titleEs: "Text pragmatics and information structure",
    level: "C1",
    category: "Дискурс",
    summary:
      "Порядок составляющих, тема и рема, связность и то, что текст предполагает известным.",
    content: `> **Перед этой темой:** вы собираете письменный аргумент. **В этой теме:** почему автор поставил именно это слово **на первое место** и что фраза считает уже известным.

## Первое место выбирает тему
В главном предложении позиция до глагола (**Vorfeld**) — одно составляющее. Туда ставят то, **о чём** сейчас речь, или то, что цепляется к предыдущему предложению.

- **Ich mag Berlin nicht.** — тема «я», дальше оценка.
- **Berlin mag ich nicht.** — тема «Берлин»; ожидается сравнение с другими городами.
- **Gestern hat sie angerufen. Heute schreibt sie wieder.** — цепочка держится на времени.

Длинную новую информацию обычно не запихивают в Vorfeld целиком. Её оставляют ближе к концу (**рема**): **Im Ausschuss hat man einen überraschend teuren Kompromiss gefunden.**

Подлежащее не обязано быть темой. Пассив и **man** как раз убирают деятеля из центра: **Die Straße wird gesperrt** — тема «улица».

## Что считается известным
Определённый артикль и указательные **dieser / jener** отсылают к уже введенному. Неопределённый артикль вводит новое.

- **Eine Studie zeigt das.** Потом: **Die Studie beruht auf …** / **Diese Studie beruht auf …**
- **jener** дальше от последнего имени, чем **dieser**, и звучит письменнее.

**da(r)-** держит глагольное управление без повтора существительного: **Wir haben einen Plan. Wir rechnen damit.**
Частицы фокуса меняют, что именно утверждается: **Nur Anna hat angerufen** (остальные нет). **Sogar Anna hat angerufen** (не ожидали именно её). **Auch Anna** добавляет её к другим.

## Пресуппозиция
Часть содержания не утверждается, а **предполагается**. Её нельзя отменить простым отрицанием сказуемого.

- **Hör auf zu rauchen** предполагает, что человек курит.
- **Seit der Renovierung ist das Amt geschlossen** предполагает, что ремонт был.
- **Wieder** предполагает, что так уже было: **Sie hat wieder abgelehnt.**

В полемике спор часто идёт не о сказуемом, а о пресуппозиции. Ответ на скрытое допущение начинают с частицы возражения: **Es gab gar keine Renovierung.**

Ирония и сдержанность в газетном абзаце часто сидят в выборе слова, не в отдельной пометке: **angeblich**, **sogenannt**, **nicht gerade bescheiden**, **ein bemerkenswerter Zufall**. **angeblich** снимает с автора ответственность за чужое утверждение — в ту же сторону, что Konjunktiv I, только короче.

> 💡 Перед тем как менять порядок слов «для красоты», спросите, какое слово станет темой. **Berlin mag ich nicht** и **Ich mag Berlin nicht** истинны в одних и тех же фактах, но продолжение абзаца после них разное.`,
  },
];

export const GERMAN_GRAMMAR: GrammarTopic[] = [
  ...GERMAN_GRAMMAR_CORE,
  ...GERMAN_GRAMMAR_EXPAND_45,
];

export function getDeGrammarTopic(slug: string): GrammarTopic | undefined {
  return GERMAN_GRAMMAR.find((t) => t.slug === slug);
}
