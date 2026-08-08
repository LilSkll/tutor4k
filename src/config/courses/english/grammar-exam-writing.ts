import type { GrammarTopic } from "@/types";

/**
 * IELTS / Cambridge writing & exam grammar track for the English course.
 * Mirrors the Spanish DELE writing block (carta, redacción, etc.).
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
      "General Training Task 1: дружеское письмо — тон, структура, типичные фразы.",
    content: `## IELTS General Training — Informal letter

Пишете **другу / родственнику**. Тон: тёплый, естественный, без канцелярита.

### Структура (примерно 150+ слов)
1. **Greeting** — \`Dear Alex,\` / \`Hi Sam,\`
2. **Opening** — реакция на новости / повод
3. **Body** — 2–3 коротких абзаца под bullet points задания
4. **Closing** — пожелание + \`Best wishes,\` / \`Love,\` + имя

### Тон: неформально
| Ок | Слишком формально |
|---|---|
| \`I'm really glad…\` | \`I am writing to inform you…\` |
| \`How about…?\` | \`I would be grateful if…\` |
| \`Can't wait to see you!\` | \`I look forward to hearing from you.\` |

### Полезные фразы
- \`Thanks so much for your email.\`
- \`Sorry I haven't written for ages.\`
- \`Guess what? / You'll never believe…\`
- \`Let me know what you think!\`

### Чего избегать
- Сухой канцелярит и \`Dear Sir or Madam\`
- Игнор одного из трёх bullet points задания
- Менее ~150 слов

> 💡 Минимальный объём для ДЗ: обычно **80–150 слов** на тренировке; в IELTS GT — около **150**.`,
  },
  {
    slug: "eng-ielts-letter-formal",
    title: "IELTS GT: формальное письмо",
    titleEs: "IELTS GT: Formal letter",
    level: "B1",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Жалоба, запрос, заявка: register, вежливые формулы, чёткая структура.",
    content: `## IELTS General Training — Formal letter

Пишете **незнакомому** человеку / в организацию.

### Структура
1. \`Dear Sir or Madam,\` / \`Dear Mr Smith,\`
2. **Purpose** в первом предложении
3. Детали / просьба / жалоба (по пунктам задания)
4. \`Yours faithfully,\` (если Sir/Madam) или \`Yours sincerely,\` (если имя) + полное имя

### Формулы
- \`I am writing to enquire about… / complain about… / apply for…\`
- \`I would be grateful if you could…\`
- \`I look forward to hearing from you.\`

### Контраст с informal
| Informal | Formal |
|---|---|
| \`Hi\` | \`Dear …\` |
| \`Can't\` | \`cannot\` / \`I'm unable to\` |
| \`Thanks!\` | \`Thank you for your assistance.\` |

### Tip
Каждый bullet задания = свой абзац. Не смешивайте жалобу и мелкий болтовню.

> 💡 Для классных ДЗ часто ставят **минимум 80–120 слов**; в экзамене целитесь в **150+**.`,
  },
  {
    slug: "eng-ielts-essay-structure",
    title: "IELTS Academic: структура эссе",
    titleEs: "IELTS Academic: Essay structure",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Task 2: introduction, 2 body paragraphs, conclusion; типы вопросов.",
    content: `## IELTS Academic Writing Task 2 — Essay

Около **250+ слов**. Чёткая позиция + поддержка аргументами.

### Базовая структура
1. **Introduction** — перефраз вопроса + thesis
2. **Body 1** — главный аргумент + пример
3. **Body 2** — второй аргумент / контраргумент + пример
4. **Conclusion** — краткий итог без новых идей

### Типы вопросов
- Opinion (\`To what extent do you agree?\`)
- Discussion (\`Discuss both views and give your opinion\`)
- Advantages / disadvantages
- Problem / solution
- Two-part question

### Introduction шаблон
\`It is often argued that… This essay agrees/disagrees that… because…\`

### Body шаблон
\`Firstly, … For example, … As a result, …\`

### Conclusion
\`In conclusion, … Therefore, …\`

> ⚠️ Не копируйте формулировку задания слово в слово — **перефразируйте**.`,
  },
  {
    slug: "eng-ielts-essay-cohesion",
    title: "IELTS: связность и cohesive devices",
    titleEs: "IELTS: Cohesion & cohesive devices",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Linkers, referencing, paragraph unity — как получить баллы за Coherence & Cohesion.",
    content: `## Coherence & Cohesion (IELTS Writing)

### Полезные связки (не злоупотребляйте)
| Функция | Примеры |
|---|---|
| Добавление | \`Furthermore\`, \`In addition\`, \`Moreover\` |
| Контраст | \`However\`, \`On the other hand\`, \`Whereas\` |
| Причина | \`Because\`, \`Since\`, \`Due to\` |
| Результат | \`Therefore\`, \`As a result\`, \`Consequently\` |
| Пример | \`For instance\`, \`Such as\` |
| Итог | \`Overall\`, \`In conclusion\` |

### Внутри абзаца
Одна идея → объяснение → пример. Не прыгайте к новой теме mid-paragraph.

### Referencing
- \`These measures…\` / \`This approach…\` / \`Such policies…\`
- Избегайте бесконечного повтора одного существительного.

### Антипаттерны
- \`Firstly… Secondly… Thirdly… Moreover… Furthermore…\` в каждом предложении
- Связка без логики: \`However\` после согласного утверждения

> 💡 Пара чётких линкеров лучше «гирлянды» из ten furthermore.`,
  },
  {
    slug: "eng-ielts-task1-report",
    title: "IELTS Academic Task 1: описание графика",
    titleEs: "IELTS Academic Task 1: Graph report",
    level: "B2",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Overview + key features для графиков, таблиц и процессов (~150 слов).",
    content: `## Academic Task 1 — Report

### Структура
1. **Paraphrase** задания (1 предложение)
2. **Overview** — главные тенденции (без мелких цифр)
3. **Details 1–2** — сравнения, пики, минимумы

### Язык изменений
- \`rose / increased / climbed\` · \`fell / declined / dropped\`
- \`remained stable\` · \`fluctuated\` · \`peaked at\` · \`reached a low of\`

### Сравнения
- \`X was significantly higher than Y\`
- \`while / whereas\` · \`compared with\`

### Overview — обязательно
Без overview оценка за Task Achievement падает. Сначала **общая картина**, потом цифры.

> 💡 Не интерпретируйте причины («because people got richer») — только то, что на графике.`,
  },
  {
    slug: "eng-cambridge-letter-email",
    title: "Cambridge: письмо и email (B2 First)",
    titleEs: "Cambridge: Letter & email (B2 First)",
    level: "B2",
    category: "Письмо / Cambridge",
    exam: "Cambridge",
    summary:
      "B2 First Writing: formal/informal letter & email — тон, layout, целевая аудитория.",
    content: `## Cambridge B2 First — Letter / Email

### Что оценивают
- Content (все пункты)
- Communicative Achievement (тон под читателя)
- Organisation
- Language

### Informal email
\`Hi + first name\` · сокращения ок · тёплый финал \`Love / Take care\`

### Formal letter
\`Dear Mr/Ms + surname\` · без сленга · \`Yours sincerely\`

### Tip для ДЗ
Преподаватель может задать роль: «напишите другу о…» или «напишите менеджеру жалобу» — тон решает оценку.

> 💡 Смотрите **кому** пишете раньше, чем **что** пишете.`,
  },
  {
    slug: "eng-cambridge-essay-article",
    title: "Cambridge: essay и article",
    titleEs: "Cambridge: Essay & article",
    level: "C1",
    category: "Письмо / Cambridge",
    exam: "Cambridge",
    summary:
      "B2/C1: opinion essay vs magazine article — стиль, заголовок, engagement.",
    content: `## Essay vs Article (Cambridge)

### Essay
- Формальный / нейтральный академический тон
- Чёткая позиция и логичные абзацы
- Без риторических вопросов «для блога»

### Article
- Заголовок может быть ярким
- Обращение к читателю, примеры из жизни
- Более живой стиль, но без сообщения в чате

### Общее
Планируйте 3–4 абзаца; держите словоуказатель задания (notes) закрытыми в тексте.

> 💡 Перед сдачей: проверьте, что **все notes / bullets** отражены.`,
  },
  {
    slug: "eng-ielts-opinion-language",
    title: "Язык мнения и аргументации",
    titleEs: "Opinion & argumentation language",
    level: "C1",
    category: "Письмо / IELTS",
    exam: "IELTS",
    summary:
      "Хеджирование, сильные/слабые утверждения, академические фразы для Task 2.",
    content: `## Opinion language for high-band essays

### Сильная позиция
- \`I firmly believe that…\`
- \`There is little doubt that…\`

### Осторожная позиция (хедж)
- \`It could be argued that…\`
- \`To some extent…\`
- \`This may not always be the case.\`

### Развитие аргумента
- \`This is largely because…\`
- \`A clear illustration of this is…\`
- \`Consequently, …\`

### Уступка + контратака
- \`While it is true that…, it does not follow that…\`
- \`Admittedly… Nevertheless…\`

> 💡 Band 7+ любит **точность**: меньше \`very good\`, больше \`beneficial / detrimental / limited\`.`,
  },
  {
    slug: "eng-cbe-register-shift",
    title: "Register: от чата до официального стиля",
    titleEs: "Register shifting",
    level: "B2",
    category: "Стиль / Exam",
    exam: "Cambridge",
    summary:
      "Как переключать register для письма: informal / neutral / formal — ключ к exam writing.",
    content: `## Register shifting (письмо)

### Три уровня
| | Informal | Neutral | Formal |
|---|---|---|---|
| Greeting | Hi Tom | Hello Tom | Dear Mr Brown |
| Request | Can you…? | Could you…? | I would appreciate it if… |
| Close | Cheers | Best regards | Yours sincerely |

### Быстрый тест
Если можно сказать это в WhatsApp как есть — для formal letter **перепишите**.

### Типичные ловушки
- Смешение \`Dear Sir\` и \`Love, Anna\`
- Сленг в жалобе в отель
- Канцелярит в письме другу

> 💡 Перед отправкой ДЗ спросите: *Who is reading this?* — тон следует из ответа.`,
  },
];
