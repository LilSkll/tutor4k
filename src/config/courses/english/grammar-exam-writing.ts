import type { GrammarTopic } from "@/types";

/**
 * IELTS / Cambridge writing track for the English course.
 * Structured like the Spanish DELE writing block: criteria, skeletons,
 * word counts, fixed formulas, traps — rules, not tips.
 */
export const ENGLISH_GRAMMAR_EXAM_WRITING: GrammarTopic[] = [
  {
    slug: "eng-ielts-letter-informal",
    title: "IELTS GT: неформальное письмо",
    titleEs: "IELTS GT: Informal letter",
    level: "B1",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "GT Writing Task 1: дружеское письмо — регистр, 4 блока, объём ~150 слов, все bullet points.",
    content: `## IELTS General Training — Informal letter (Task 1)

Пишете **другу / родственнику / знакомому**. На экзамене дают ситуацию + **три bullet points**. Каждый пункт должен быть раскрыт — иначе падает **Task Achievement**.

### Что оценивают

| Критерий | Что проверяют |
|---|---|
| **Task Achievement** | Все 3 bullets закрыты; цель письма ясна; объём ≈ **150 слов** |
| **Coherence & Cohesion** | Логичные абзацы; связки без «гирлянды» |
| **Lexical Resource** | Разговорная, но точная лексика; фразовые глаголы уместны |
| **Grammatical Range & Accuracy** | Разные времена; contractions (**I'm**, **can't**) — норма |

### Сколько слов и времени

| | Норма |
|---|---|
| Объём на экзамене | **не меньше ~150 слов** (недобор = риск за Task Achievement) |
| Тренировочное ДЗ | часто **80–120** слов — смотрите минимум преподавателя |
| Тайминг | ~20 мин на Task 1 (в паре с Task 2 на 40 мин) |

> ⚠️ Большой перебор редко наказывают напрямую, но даёт лишние ошибки. Цель — закрыть bullets чисто, без воды.

### Скелет письма (4 блока)

1. **Greeting** — \`Hi Sam,\` / \`Dear Alex,\` (имя без фамилии)
2. **Opening** (~1–2 предложения) — реакция на новость / повод: \`Thanks for your email — great to hear from you!\`
3. **Body** — **один абзац (или короткий блок) на каждый bullet** задания (~70% текста)
4. **Closing** — пожелание + подпись: \`Hope to see you soon!\` → \`Love,\` / \`Take care,\` / \`Best wishes,\` + **только имя**

### Регистр: что обязательно / запрещено

| Ок (informal) | Слишком formal (штраф за тон) |
|---|---|
| \`Hi\` / \`Dear + first name\` | \`Dear Sir or Madam\` |
| \`I'm\`, \`can't\`, \`won't\` | канцелярит без contractions |
| \`Thanks so much\` / \`Guess what?\` | \`I am writing to inform you that…\` |
| \`Love,\` / \`Take care,\` / \`Cheers,\` | \`Yours faithfully,\` |
| Вопросы другу: \`How about…?\` | \`I would be grateful if you could…\` |

### Готовые формулы по блокам

| Блок | Формулы |
|---|---|
| Opening | \`Thanks for your letter.\` · \`Sorry I haven't written for ages.\` · \`It was great to hear your news.\` |
| News / story | \`You'll never believe…\` · \`Guess what happened?\` · \`I've just…\` |
| Advice / invite | \`Why don't you…?\` · \`How about…?\` · \`You should definitely…\` |
| Ask back | \`What about you?\` · \`Let me know what you think.\` · \`Write back soon!\` |
| Close | \`Take care,\` · \`Lots of love,\` · \`Speak soon,\` |

### Ловушки, за которые снимают баллы
- Пропущен **один** из трёх bullets — самая частая ошибка.
- Formal greeting + informal body (или наоборот).
- Подпись полной фамилией / \`Yours sincerely\`.
- Один длинный абзац без структуры под bullets.

### Tip для ДЗ
Преподаватель может задать роль: «напишите другу о…». Сначала отметьте адресата — тон следует из него.

> 💡 Перед сдачей: три галочки напротив трёх bullets. Незакрытый пункт бьёт сильнее, чем пара ошибок в грамматике.`,
  },
  {
    slug: "eng-ielts-letter-formal",
    title: "IELTS GT: формальное письмо",
    titleEs: "IELTS GT: Formal letter",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "GT Task 1 formal (B2): жалоба, запрос, заявка — Yours faithfully/sincerely, 5 блоков.",
    content: `## IELTS General Training — Formal letter (Task 1)

Пишете **незнакомому** человеку или в организацию: жалоба, запрос информации, заявка, извинение от компании и т.п. Три bullet points обязательны.

### Что оценивают

| Критерий | Что проверяют |
|---|---|
| **Task Achievement** | Все bullets; ясна **цель** письма с первого абзаца; ~**150 слов** |
| **Coherence & Cohesion** | Один абзац ≈ один bullet; вежливые, но логичные переходы |
| **Lexical Resource** | Формальная лексика (\`enquire\`, \`appreciate\`, \`inconvenience\`) |
| **Grammatical Range & Accuracy** | Модальные вежливости (\`would\`, \`could\`); меньше contractions |

### Объём и тайминг

| | Норма |
|---|---|
| Экзамен | ≈ **150 слов** минимум |
| Классное ДЗ | часто **80–120** — по минимуму преподавателя |
| Тайминг | ~20 мин |

### Скелет формального письма (5 блоков)

1. **Salutation**
   - имя известно: \`Dear Mr Smith,\` / \`Dear Ms Patel,\`
   - имя **не** известно: \`Dear Sir or Madam,\`
2. **Purpose** (1–2 предложения) — зачем пишете **сразу**
3. **Details** — факты по bullets (1–2 абзаца)
4. **Request / action** — что вы хотите, чтобы сделали
5. **Closing line + sign-off + full name**

### Sign-off — жёсткое правило

| Обращение | Прощание |
|---|---|
| \`Dear Sir or Madam,\` | **\`Yours faithfully,\`** |
| \`Dear Mr/Ms + surname,\` | **\`Yours sincerely,\`** |

Подпись: **полное имя** (\`Anna Petrova\`), не только \`Anna\`.

> ⚠️ Пара \`Dear Sir or Madam\` + \`Yours sincerely\` — классическая ошибка регистра.

### Формулы по типу письма

| Тип | Opening / ключевые фразы |
|---|---|
| Enquiry | \`I am writing to enquire about…\` · \`I would be grateful if you could send…\` |
| Complaint | \`I am writing to complain about…\` · \`I was extremely disappointed when…\` · \`I would like a full refund / replacement.\` |
| Application | \`I am writing to apply for…\` · \`I believe I would be a suitable candidate because…\` |
| Apology (rare as student task) | \`Please accept my apologies for…\` · \`I regret any inconvenience caused.\` |
| Close | \`I look forward to hearing from you.\` · \`Thank you for your time.\` |

### Регистр: что нельзя

| Запрещено в formal | Замена |
|---|---|
| \`Hi\` / \`Hey\` | \`Dear …\` |
| \`can't\`, \`won't\` (лучше избегать) | \`cannot\`, \`will not\` / \`I am unable to\` |
| \`Thanks!\` / \`Cheers\` | \`Thank you for your assistance.\` |
| \`Love,\` / \`Take care,\` | \`Yours faithfully,\` / \`Yours sincerely,\` |
| сленг, эмодзи, \`!!!\` | нейтральный тон |

### Вежливая грамматика (поднимает балл)
- \`I would appreciate it if you **could**…\`
- \`I was wondering whether…\`
- \`Could you please…?\` (мягче, чем \`Can you…?\`)
- Passive для дистанции: \`I was informed that…\` / \`A mistake **was made**…\`

### Ловушки
- Смешение informal body + formal greeting.
- Нет явного **purpose** в первом абзаце.
- Агрессия в жалобе (\`This is ridiculous!\`) — снижают Communicative / Tone эквивалент.
- Не закрыт один bullet.

### Tip для ДЗ
Роль «напишите менеджеру жалобу» = formal от первой до последней строки. Тон решает Task Achievement не меньше фактов.

> 💡 Сначала решите: *Do I know their name?* — от этого зависят salutation **и** sign-off.`,
  },
  {
    slug: "eng-ielts-essay-structure",
    title: "IELTS Academic: структура эссе",
    titleEs: "IELTS Academic: Essay structure",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Task 2: 4 абзаца, типы вопросов, paraphrase + thesis, объём 250+, что снимает баллы за TA.",
    content: `## IELTS Academic Writing Task 2 — Essay

Второе задание академического / GT модуля. Оценка за Task Response зависит от **ответа на точный тип вопроса**, а не от «красивого текста вообще».

### Что оценивают

| Критерий | Что проверяют |
|---|---|
| **Task Response** | Прямой ответ на тип вопроса; позиция ясна; идеи развиты, не только перечислены |
| **Coherence & Cohesion** | 4 логичных абзаца; одна идея = один body |
| **Lexical Resource** | Парафраз темы; точные академические слова |
| **Grammatical Range & Accuracy** | Сложные предложения без обвала точности |

### Объём и тайминг

| | Норма |
|---|---|
| Минимум на экзамене | **250 слов** (недобор — штраф за Task Response) |
| Практичный диапазон | **260–290** (запас без воды) |
| Тайминг | ~40 мин: 5 план → 30 текст → 5 проверка |

### Типы вопросов (пишут **разную** структуру ответа)

| Тип | Что обязаны сделать |
|---|---|
| **Opinion** (\`To what extent do you agree?\`) | Чёткая позиция во вступлении и выводе |
| **Discussion** (\`Discuss both views and give your opinion\`) | Обе стороны + **своё** мнение |
| **Advantages / disadvantages** | Обе стороны; если просят opinion — добавить выбор |
| **Problem / solution** | Проблемы **и** решения (не только одно) |
| **Two-part** | Ответить на **оба** вопроса отдельными body |

> ⚠️ Discussion без своего мнения = недобор Task Response. Opinion essay, где «всё спорно и я не знаю» = тоже.

### Скелет на 4 абзаца (бюджет для ~270 слов)

1. **Introduction** (~40–50) — paraphrase вопроса + **thesis** (ваша линия)
2. **Body 1** (~80–90) — главный аргумент → объяснение → пример
3. **Body 2** (~80–90) — второй аргумент / другая сторона → объяснение → пример
4. **Conclusion** (~30–40) — итог позиции; **без новых идей**

### Шаблоны (скелет, не заученный абзац)

**Introduction**
\`It is often argued that… This essay [agrees / disagrees / argues that…] because…\`

**Body**
\`Firstly, … This is largely because… For example, … As a result, …\`

**Conclusion**
\`In conclusion, … Therefore, …\`

### Правила парафраза введения
- Не копируйте вопрос слово в слово.
- Сохраните смысл: смена \`important\` → \`significant\`, \`people\` → \`individuals / the public\` — ок; смена тезиса — нет.

### Ловушки
- Новые аргументы в conclusion.
- Один body на 150 слов и второй на 20.
- Примеры «из воздуха» без связи с тезисом абзаца.
- Ответ не на тот тип (opinion вместо both views).

> 💡 На черновике подпишите тип вопроса одним словом: *opinion / both / A-D / P-S / 2Q*. Структура следует из ярлыка.`,
  },
  {
    slug: "eng-ielts-essay-cohesion",
    title: "IELTS: связность и cohesive devices",
    titleEs: "IELTS: Cohesion & cohesive devices",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Coherence & Cohesion: линкеры по функции, referencing, единство абзаца, антипаттерны Band 5–6.",
    content: `## Coherence & Cohesion (IELTS Writing Task 1 & 2)

Этот критерий оценивает **не количество** слов \`However\`, а читаемость: абзацы, прогрессия идей, ссылки назад без повторов.

### Что именно хотят экзаменаторы

| Уровень ожидания | Признак |
|---|---|
| Band 6 | Есть абзацы; базовые линкеры; иногда скачки |
| Band 7 | Чёткая прогрессия; линкеры уместны; referencing работает |
| Band 8+ | Логика «невидима»: мало штампов, много смысловых связок |

### Линкеры по функции (чередуйте, не копируйте столбик)

| Функция | Примеры |
|---|---|
| Добавление | \`Furthermore\`, \`In addition\`, \`Moreover\`, \`What is more\` |
| Контраст | \`However\`, \`On the other hand\`, \`Whereas\`, \`While\` |
| Причина | \`Because\`, \`Since\`, \`As\`, \`Due to (+ noun)\` |
| Результат | \`Therefore\`, \`As a result\`, \`Consequently\`, \`Thus\` |
| Пример | \`For instance\`, \`For example\`, \`Such as\` |
| Уступка | \`Although\`, \`Even though\`, \`Admittedly\` |
| Итог | \`Overall\`, \`In conclusion\`, \`To sum up\` |

### Правило абзаца (Task 2)
**Одна центральная идея** → объяснение → пример / следствие. Новая идея = новый абзац.

Формула:
\`Topic sentence → reason → example → mini-result\`

### Referencing (поднимает Cohesion без новых линкеров)
- \`This approach…\` / \`These measures…\` / \`Such policies…\`
- \`the former / the latter\` (осторожно, только при двух ясных референтах)
- Избегайте пяти раз подряд \`people\` / \`the government\` — заменяйте смыслом.

### Запрещённые / слабые паттерны
- \`Firstly… Secondly… Thirdly… Moreover… Furthermore…\` в **каждом** предложении
- \`However\` после предложения, с которым вы **согласны**
- Линкер в начале каждого предложения body
- Одно предложение = целый абзац, или наоборот стена текста

### Task 1 vs Task 2
| | Task 1 (report) | Task 2 (essay) |
|---|---|---|
| Связки | сравнения, время (\`then\`, \`meanwhile\`) | аргументация, контраст, причина |
| Overview | обязателен как «логический якорь» | thesis во вступлении |

### Мини-проверка перед сдачей
1. Могу ли я подписать каждый абзац одной фразой-темой?
2. Есть ли 2–4 линкера, а не 12?
3. Есть ли местоимения/this-these вместо копипаста существительных?

> 💡 Пара точных линкеров + сильные topic sentences дают больше баллов, чем «ёлка» из \`Moreover\`.`,
  },
  {
    slug: "eng-ielts-task1-report",
    title: "IELTS Academic Task 1: описание графика",
    titleEs: "IELTS Academic Task 1: Graph report",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Academic Task 1: paraphrase, overview, key features; язык трендов; ~150 слов; без спекуляций.",
    content: `## IELTS Academic Writing Task 1 — Report

Описываете данные: линейный/столбчатый график, pie, table, map, process. **Не** пишете мнение и **не** объясняете «почему в жизни так вышло».

### Что оценивают

| Критерий | Что проверяют |
|---|---|
| **Task Achievement** | Есть **overview**; выделены ключевые черты; данные точны; ≈**150 слов** |
| **Coherence & Cohesion** | Логичный порядок (overview → детали); сравнения |
| **Lexical Resource** | Глаголы трендов, paraphrases осей, approximate language |
| **Grammatical Range & Accuracy** | Сравнения, пассив (process), сложные предложения |

### Объём и тайминг

| | Норма |
|---|---|
| Минимум | **150 слов** |
| Практично | **160–190** |
| Тайминг | ~20 мин |

### Обязательный скелет (4 шага)

1. **Paraphrase** задания (1 предложение) — не копировать prompt
2. **Overview** — 1–2 предложения: главные тенденции / крайности (**без** мелких цифр)
3. **Details 1** — группа ключевых данных + сравнения
4. **Details 2** — вторая группа / контраст

> ⚠️ Нет overview = типичный потолок ниже Band 7 за Task Achievement, даже при идеальной грамматике.

### Язык изменений (выучите парами)

| Рост | Падение | Стабильность / прочее |
|---|---|---|
| \`rose / increased / climbed / grew\` | \`fell / declined / dropped / decreased\` | \`remained stable / levelled off\` |
| \`a sharp / gradual / slight rise\` | \`a dramatic fall\` | \`fluctuated\` |
| \`peaked at\` | \`reached a low of\` | \`stood at\` |

**Степень:** \`sharply\`, \`steadily\`, \`slightly\`, \`significantly\`.

### Сравнения
- \`X was significantly higher than Y\`
- \`while / whereas\`
- \`compared with / compared to\`
- \`almost / roughly / approximately\` + цифра (если точное значение не критично)

### Process / map — отдельные правила
- Process: **passive** + последовательность (\`First… Then… Finally…\`)
- Map: локации (\`to the north of\`, \`was replaced by\`, \`was converted into\`)

### Запрещено
- Причины вне графика: \`because people became richer\`
- Прогноз будущего, если его нет на задании
- Перечисление **всех** чисел без отбора
- Личное мнение: \`I think this is interesting\`

### Ловушки
- Overview спрятан в конце и выглядит как вывод-мнение
- Повтор глагола \`increased\` десять раз
- Неверный год/процент — бьёт Task Achievement жёстче стиля

> 💡 Сначала напишите overview двумя предложениями на черновике — потом выбирайте только цифры, которые его подтверждают.`,
  },
  {
    slug: "eng-cambridge-letter-email",
    title: "Cambridge B2 First: письмо и email",
    titleEs: "Cambridge B2 First: Letter & email",
    level: "B2",
    category: "Письмо / Cambridge",
    exam: "Cambridge",
    summary:
      "B2 First Writing: formal/informal letter & email — тон, layout, целевая аудитория, критерии CA.",
    content: `## Cambridge B2 First — Letter / Email

В Writing Part 2 часто выбирают **letter** или **email**. Оценка идёт по четырём шкалам Cambridge; для письма критичен **Communicative Achievement** — тон должен совпасть с адресатом.

### Что оценивают

| Критерий | Что проверяют |
|---|---|
| **Content** | Закрыты **все** пункты/notes задания; достаточный объём |
| **Communicative Achievement** | Тон под читателя (друг ≠ менеджер); конвенции жанра |
| **Organisation** | Абзацы, логичный порядок, ясное начало/конец |
| **Language** | Диапазон и точность лексики и грамматики |

### Объём (B2 First)

| | Норма |
|---|---|
| Exam guide | около **140–190 слов** |
| Практично | целиться в **150–180** |
| Недобор | риск по Content (не раскрыты пункты) |

### Сначала решите регистр (обязательный шаг)

| Вопрос | Если да → |
|---|---|
| Это друг / родственник / близкий знакомый? | **Informal email / letter** |
| Это незнакомый взрослый / компания / редактор / менеджер? | **Formal letter** |
| Это учитель / коллега, тон вежливый, но не канцелярский? | **Semi-formal** (Dear Mr…, но чуть теплее) |

> 💡 Смотрите **кому** пишете раньше, чем **что** пишете. Ошибка тона на B2 First бьёт Communicative Achievement сильнее, чем пара лексических промахов.

---

### Informal email

**Аудитория:** друг, сестра, однокурсник.  
**Цель:** новости, совет, приглашение, ответ на письмо.

#### Layout

1. \`Hi + first name,\` / \`Dear + first name,\`
2. Opening — реакция / повод (\`Thanks for your email!\`)
3. Body — по пунктам задания (каждый пункт виден)
4. Friendly close — \`Write soon!\` / \`Hope to see you!\`
5. \`Love,\` / \`Take care,\` / \`Best wishes,\` + **имя**

#### Правила тона
- Сокращения **ок**: \`I'm\`, \`can't\`, \`don't\`
- Вопросы к читателю **ок**: \`What do you think?\`
- Сленг — умеренно; грубость / WhatsApp-сумбур — нет
- Эмодзи на экзамене **не** используйте

#### Формулы

| Блок | Примеры |
|---|---|
| Opening | \`It was great to hear from you.\` · \`Sorry I didn't reply earlier.\` |
| News | \`You'll never guess…\` · \`I've got some news.\` |
| Invite / ask | \`Why don't we…?\` · \`Are you free on…?\` · \`Let me know!\` |
| Close | \`Take care,\` · \`Love,\` · \`All the best,\` |

---

### Formal letter

**Аудитория:** незнакомый человек / организация.  
**Цель:** жалоба, запрос, заявка, письмо в газету и т.п.

#### Layout

1. \`Dear Mr/Ms + surname,\` **или** \`Dear Sir or Madam,\`
2. Purpose в первом предложении
3. Детали по notes (факты, без болтовни)
4. Вежливая просьба / ожидание ответа
5. \`Yours sincerely,\` (есть фамилия) / \`Yours faithfully,\` (Sir or Madam) + **полное имя**

#### Правила тона
- Без сленга и без \`Hi\`
- Минимум contractions (лучше полные формы)
- Вежливые модальные: \`I would be grateful if…\`
- Никакого \`Love,\` / \`Cheers\`

#### Формулы

| Блок | Примеры |
|---|---|
| Purpose | \`I am writing to complain about… / enquire about… / apply for…\` |
| Detail | \`On 12 May I …\` · \`Unfortunately, …\` |
| Request | \`I would be grateful if you could…\` · \`I would like you to…\` |
| Close line | \`I look forward to hearing from you.\` |

---

### Semi-formal (часто в email учителю / клубу)
- \`Dear Mr Brown,\` / \`Dear Ms Clark,\`
- Вежливо, но можно \`I'm\` осторожно
- Close: \`Best regards,\` / \`Kind regards,\` + полное имя
- Не \`Love,\` и не канцелярит уровня юридической претензии — держите середину

### Скелет на Content (обязателен для ДЗ и экзамена)

1. Подчеркните в задании **все notes / bullets**
2. Набросайте, **кому** пишете → выберите 1 регистр
3. Каждый note = минимум 1–2 предложения в тексте
4. Проверьте greeting + sign-off на совместимость

### Tip для ДЗ
Преподаватель может задать роль: «напишите другу о…» или «напишите менеджеру жалобу» — **тон решает оценку**. Одна и та же «история» в двух регистрах получает разные баллы за Communicative Achievement.

### Ловушки B2 First
- \`Dear Sir\` + \`Love, Anna\`
- Informal slang в жалобе отелю
- Formal essay-стиль в письме другу (\`Furthermore, it could be argued…\`)
- Пропущен один note из задания

> 💡 Перед отправкой спросите вслух: *Who is reading this?* Если ответ «друг» — текст должен звучать как другу; если «менеджер» — как менеджеру.`,
  },
  {
    slug: "eng-cambridge-essay-article",
    title: "Cambridge: essay и article",
    titleEs: "Cambridge: Essay & article",
    level: "C1",
    category: "Письмо / Cambridge",
    exam: "Cambridge",
    summary:
      "B2 First / C1 Advanced: различия essay vs article — тон, структура, notes, критерии Content и CA.",
    content: `## Cambridge Writing — Essay vs Article

В B2 First и C1 Advanced эссе и article — **разные жанры**. Перепутать тон = удар по Communicative Achievement, даже если идеи умные.

### Что оценивают (оба жанра)

| Критерий | Фокус |
|---|---|
| **Content** | Все пункты/notes закрыты; объём достаточный |
| **Communicative Achievement** | Жанр узнаваем: эссе ≠ колонка блога ≠ письмо |
| **Organisation** | Абзацы, связность, ясное вступление/конец |
| **Language** | Диапазон + точность под уровень (B2 / C1) |

### Объёмы (ориентиры)

| Экзамен | Жанр | Слова |
|---|---|---|
| B2 First | essay / article (Part 2) | ≈ **140–190** |
| C1 Advanced | essay (Part 1) | ≈ **220–260** |
| C1 Advanced | article и др. (Part 2) | ≈ **220–260** |

---

## Essay

**Читатель:** учитель / экзаменатор.  
**Цель:** обсудить вопрос, взвесить идеи, дать ясную позицию.

### Правила жанра
- Тон **нейтрально-формальный** / академический
- Без обращений \`you\` в стиле лайфстайл-блога
- Без риторических вопросов «для клика»
- Без заголовка-слогана (в отличие от article)
- Абзацы логичны: intro → arguments → conclusion

### Скелет essay (B2 / C1)

1. **Introduction** — перефраз темы + план/тезис
2. **Paragraph on note/idea 1** — тезис → довод → пример
3. **Paragraph on note/idea 2** (+ своё idea, если требуют)
4. **Conclusion** — итог позиции; без новых аргументов

### Формулы
- \`This essay will discuss…\` / \`It is widely believed that…\`
- \`One important argument is that…\`
- \`On the other hand…\`
- \`In conclusion, I would argue that…\`

### Content notes (особенно C1 Part 1)
Если даны два мнения + нужно добавить своё — **все три** должны появиться в тексте. Пропуск note = Content.

---

## Article

**Читатель:** журнала / сайта / школьной газеты.  
**Цель:** заинтересовать, проинформировать, вовлечь.

### Правила жанра
- **Заголовок** уместен и цепляет (без кликбейта-абсурда)
- Можно обращение к читателю: \`Have you ever…?\` / \`Most of us…\`
- Живой стиль, примеры из жизни
- Всё ещё **английский экзамена**, не чат: полные предложения, абзацы

### Скелет article

1. **Title**
2. **Opening hook** — вопрос / сцена / факт
3. **2–3 абзаца** по notes задания
4. **Ending** — вывод, совет или вопрос читателю

### Формулы
- \`Have you ever wondered…?\`
- \`The truth is that…\`
- \`A good example of this is…\`
- \`So next time you…, remember…\`

### Essay vs Article — быстрый контраст

| | Essay | Article |
|---|---|---|
| Заголовок | обычно нет | **да** |
| Тон | формальнее | живее, вовлекающий |
| \`you\` | редко | часто уместно |
| Цель | аргументировать | заинтересовать + раскрыть тему |
| Финал | вывод-позиция | совет / вопрос / эффектная точка |

### Ловушки
- Article без заголовка
- Essay с мемами и \`OMG\`
- Красивый стиль, но **незакрытые notes**
- Смешение: начало как article, конец как formal essay без перехода

### Tip для ДЗ
Преподаватель может сказать: «напишите эссе для класса» или «статью в школьный журнал». Жанр фиксирует тон **до** первой фразы.

> 💡 Перед написанием подпишите черновик одним словом: *ESSAY* или *ARTICLE* — и сверяйте каждую фразу с этой меткой.`,
  },
  {
    slug: "eng-ielts-opinion-language",
    title: "Язык мнения и аргументации",
    titleEs: "Opinion & argumentation language",
    level: "C1",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Task 2: сила утверждения, hedging, уступка+контратака, академические фразы; что отличает Band 7+.",
    content: `## Opinion & argumentation language (IELTS Task 2 / Academic essays)

Экзаменатор смотрит не только *что* вы думаете, но *насколько точно* вы это формулируете. Band 7+ = контроль силы утверждения + развитие довода.

### Что это даёт в критериях

| Критерий | Роль языка мнения |
|---|---|
| **Task Response** | Позиция ясная; идеи объяснены, не лозунгами |
| **Lexical Resource** | Точные глаголы/прилагательные вместо \`good/bad/very\` |
| **Grammatical Range** | Уступка, условие, причинно-следственные комплексы |

### Шкала силы утверждения (выбирайте сознательно)

| Сила | Формулы | Когда |
|---|---|---|
| Сильная | \`I firmly believe that…\` · \`There is little doubt that…\` · \`It is clear that…\` | Opinion essay, где позиция жёсткая |
| Умеренная | \`I would argue that…\` · \`It seems reasonable to suggest that…\` | Большинство академических эссе |
| Осторожная (hedge) | \`It could be argued that…\` · \`To some extent…\` · \`This may not always be the case.\` | Когда данные/опыт неоднозначны |

> ⚠️ Слабый hedge в opinion essay («maybe yes, maybe no») без финальной позиции = размытый Task Response.

### Развитие аргумента (обязательная цепочка)

1. **Claim** — \`One major reason is that…\`
2. **Explain** — \`This is largely because…\`
3. **Illustrate** — \`A clear illustration of this is…\`
4. **Link back** — \`Consequently, …\` / \`This suggests that…\`

Без шагов 2–3 получается список мнений — типичный потолок Band 6.

### Уступка + контратака (высокая оценка за сложность)

| Паттерн | Пример |
|---|---|
| While…, … | \`While it is true that cities are crowded, it does not follow that rural life is always better.\` |
| Admittedly… Nevertheless… | \`Admittedly, technology can distract students. Nevertheless, used well it improves access to materials.\` |
| Even if… | \`Even if costs rise initially, long-term savings are substantial.\` |

### Академические замены бытовой лексики

| Слабо | Сильнее |
|---|---|
| \`good\` | \`beneficial\`, \`effective\`, \`valuable\` |
| \`bad\` | \`detrimental\`, \`harmful\`, \`limited\` |
| \`a lot of people\` | \`a significant proportion of the public\` |
| \`get worse\` | \`deteriorate\`, \`worsen\` |
| \`important\` | \`crucial\`, \`decisive\`, \`significant\` |

### Фразы для введения чужой позиции (discussion essays)
- \`Some people claim that…\`
- \`Opponents of this view argue that…\`
- \`Proponents maintain that…\`
- Затем: \`However, this essay contends that…\`

### Ловушки
- \`I think\` × 8 без развития
- \`In my opinion\` в каждом абзаце
- Абсолюты без опоры: \`always\`, \`never\`, \`everyone\`
- Эмоциональный блог-тон: \`This is crazy / amazing\`

### Мини-чеклист перед сдачей
- Позиция видна во intro **и** conclusion?
- У каждого body есть explain + example?
- Есть хотя бы одна уступка или точный hedge (если уместно)?
- Заменены \`good/bad/very\`?

> 💡 Точность важнее «красивости»: одно \`detrimental to…\` лучше трёх \`very very bad\`.`,
  },
  {
    slug: "eng-cbe-register-shift",
    title: "Register: от чата до официального стиля",
    titleEs: "Register shifting",
    level: "B2",
    category: "Стиль / Exam",
    exam: "Cambridge",
    summary:
      "Три уровня регистра для exam writing: informal / neutral / formal — таблицы замен, тест WhatsApp, типичные штрафы.",
    content: `## Register shifting (письмо на IELTS / Cambridge / классные ДЗ)

**Register** — степень официальности. На письме это правило, не «вкус»: неверный регистр режет Communicative Achievement (Cambridge) и Task Achievement / тон (IELTS letters).

### Три рабочих уровня

| | Informal | Neutral / semi-formal | Formal |
|---|---|---|---|
| Кому | друг, семья | учитель, коллега, клуб | организация, незнакомый взрослый |
| Greeting | \`Hi Tom,\` | \`Hello Tom,\` / \`Dear Mr Brown,\` | \`Dear Mr Brown,\` / \`Dear Sir or Madam,\` |
| Request | \`Can you…?\` | \`Could you…?\` | \`I would appreciate it if you could…\` |
| Thanks | \`Thanks!\` | \`Thank you\` | \`Thank you for your assistance\` |
| Close | \`Love,\` / \`Take care,\` / \`Cheers,\` | \`Best regards,\` / \`Kind regards,\` | \`Yours sincerely,\` / \`Yours faithfully,\` |
| Contractions | да | умеренно | лучше нет |
| Phrasal verbs | часто ок | выборочно | чаще Latinate: \`tolerate\` ≠ \`put up with\` |

### Таблица замен (одно и то же содержание)

| Informal | Formal |
|---|---|
| \`I want to know…\` | \`I would like to enquire about…\` |
| \`I'm not happy about…\` | \`I am writing to express my dissatisfaction with…\` |
| \`Can you fix it?\` | \`I would be grateful if you could resolve this matter.\` |
| \`Tell me soon\` | \`I look forward to hearing from you at your earliest convenience.\` |
| \`Sorry about that\` | \`Please accept my apologies for…\` |
| \`a lot of problems\` | \`a number of issues\` / \`considerable difficulties\` |

### Быстрый тест (до отправки ДЗ)
1. Можно ли отправить этот текст **как есть в WhatsApp другу**?
2. Если да — для formal letter **перепишите**.
3. Если звучит как юридический акт — для письма другу **упростите**.

### Совместимость начала и конца (жёсткое правило)

| Начало | Допустимый конец |
|---|---|
| \`Hi Anna,\` | \`Love,\` / \`Take care,\` / \`Best wishes,\` |
| \`Dear Mr Smith,\` | \`Yours sincerely,\` / \`Kind regards,\` |
| \`Dear Sir or Madam,\` | \`Yours faithfully,\` |
| ❌ \`Dear Sir,\` | ❌ \`Love, Anna\` |
| ❌ \`Hi,\` | ❌ \`Yours faithfully,\` |

### Где регистр решает жанр
| Жанр | Ожидаемый регистр |
|---|---|
| IELTS GT informal letter | informal |
| IELTS GT formal letter | formal |
| Cambridge B2 informal email | informal |
| Cambridge formal letter | formal |
| Cambridge / IELTS essay | neutral–formal (не chat) |
| Magazine article | neutral–engaging (не канцелярит) |

### Типичные ловушки на экзамене
- Сленг в жалобе отелю
- Канцелярит в письме другу (\`I am writing to inform you that I miss you\`)
- Смешение уровней в одном тексте
- Formal letter с \`can't\` / \`gonna\` / \`kids\`

### Tip для ДЗ
Роль в задании («другу» / «менеджеру») **фиксирует регистр целиком**. Не «в среднем чуть официально» — выберите один столбец таблицы и держите его от greeting до sign-off.

> 💡 Перед сдачей прочитайте только первую и последнюю строки. Если они из разных миров — перепишите closing или greeting.`,
  },
];
