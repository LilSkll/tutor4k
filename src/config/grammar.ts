import type { GrammarTopic } from "@/types";

// =====================================================================
// Grammar reference data
// ---------------------------------------------------------------------
// Curated topics grouped by CEFR level (A1 → C1). Each topic includes a
// markdown reference that doubles as a teaching primer. Users can also ask
// the AI tutor to expand on any topic ("Explain with AI" button).
// =====================================================================

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ----- A1 ---------------------------------------------------------
  {
    slug: "a1-articulos",
    title: "Артикли",
    titleEs: "Artículos",
    level: "A1",
    category: "Determinantes",
    summary: "Определённый и неопределённый артикли; мужской и женский род.",
    content: `## Artículos definidos (определённые)

| Род / Число | Артикль | Пример |
|---|---|---|
| m. singular | **el** | el libro |
| f. singular | **la** | la casa |
| m./f. + a/ha | **el** | el agua |
| plural | **los / las** | los libros, las casas |

## Artículos indefinidos (неопределённые)

| Число | Мужской | Женский |
|---|---|---|
| Singular | **un** | **una** |
| Plural | **unos** | **unas** |

### Ключевые правила
- **El** используется для конкретного, известного предмета: \`el sol\`.
- **Un/una** — для неопределённого: \`un libro interesante\`.
- Перед существительными женского рода, начинающимися на **a-/ha-** ударное, ставится **el**: \`el agua\`, \`el águila\` (но во мн. ч.: \`las aguas\`).

> 💡 Запомни: род в испанском не всегда логичен — \`el problema\` (м.р.), \`la mano\` (ж.р.).`,
  },
  {
    slug: "a1-ser-estar",
    title: "Ser / Estar",
    titleEs: "Ser y Estar",
    level: "A1",
    category: "Глаголы",
    summary: "Два глагола «быть»: постоянные характеристики vs состояния.",
    content: `## Ser vs Estar — оба значат «быть»

### SER — постоянные характеристики
Используется для **идентичности, профессии, происхождения, описания**:
- \`Yo soy profesor.\` — Я преподаватель.
- \`Ella es de México.\` — Она из Мексики.
- \`El cielo es azul.\` — Небо синее.

| Лицо | SER |
|---|---|
| yo | soy |
| tú | eres |
| él/ella | es |
| nosotros | somos |
| ellos | son |

### ESTAR — временные состояния и местоположение
Используется для **состояния, чувств, местонахождения**:
- \`Estoy cansado.\` — Я устал.
- \`El libro está en la mesa.\` — Книга на столе.

| Лицо | ESTAR |
|---|---|
| yo | estoy |
| tú | estás |
| él/ella | está |
| nosotros | estamos |
| ellos | están |

### Мнемоника DOCTOR / PLACE
- **SER**: **D**escription, **O**ccupation, **C**haracteristic, **T**ime, **O**rigin, **R**elationship.
- **ESTAR**: **P**osition, **L**ocation, **A**ction (gerundio), **C**ondition, **E**motion.

> ⚠️ Прилагательные меняют смысл: \`es aburrido\` (скучный человек) vs \`está aburrido\` (ему скучно).`,
  },
  {
    slug: "a1-presente",
    title: "Presente",
    titleEs: "Presente de Indicativo",
    level: "A1",
    category: "Глаголы",
    summary: "Настоящее время: правильные и неправильные глаголы.",
    content: `## Presente de Indicativo

### Правильные глаголы (3 спряжения)

| Лицо | -AR (hablar) | -ER (comer) | -IR (vivir) |
|---|---|---|---|
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos | hablan | comen | viven |

### Неправильные глаголы (самые частые)
- **ser**: soy, eres, es, somos, sois, son
- **estar**: estoy, estás, está, estamos, estáis, están
- **ir**: voy, vas, va, vamos, vais, van
- **tener**: tengo, tienes, tiene, tenemos, tenéis, tienen
- **hacer**: hago, haces, hace, hacemos, hacéis, hacen

### Использование
- Действие в настоящем: \`Trabajo en Madrid.\`
- Общеизвестные факты: \`El agua hierve a 100°C.\`
- Ближайшее будущее: \`Mañana voy al cine.\`

> 💡 Глаголы с чередованием гласной: \`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`.`,
  },

  // ----- A2 ---------------------------------------------------------
  {
    slug: "a2-preterito-perfecto",
    title: "Pretérito Perfecto",
    titleEs: "Pretérito Perfecto Compuesto",
    level: "A2",
    category: "Прошедшие времена",
    summary: "Завершённое в настоящем: «что-то сделал(а)» с привязкой к сейчас.",
    content: `## Pretérito Perfecto (passé composé español)

### Формула: **HABER** + **participio**

**haber**: he, has, ha, hemos, habéis, han

**Participio** правильных глаголов:
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido, vivir → vivido

### Неправильные participios
| Инфинитив | Participio |
|---|---|
| hacer | **hecho** |
| ver | **visto** |
| poner | **puesto** |
| escribir | **escrito** |
| abrir | **abierto** |
| decir | **dicho** |
| volver | **vuelto** |

### Когда использовать
- Время не истекло (сегодня, на этой неделе, в этом году):
  \`Hoy he comido paella.\`
- Жизненный опыт: \`¿Has estado en España?\`
- Связь с настоящим: \`He perdido las llaves\` (и до сих пор не нашёл).

### Маркеры времени
hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.

> ⚠️ С маркерами **ayer, el año pasado, en 2020** используется Pretérito Indefinido.`,
  },
  {
    slug: "a2-preterito-indefinido",
    title: "Pretérito Indefinido",
    titleEs: "Pretérito Indefinido",
    level: "A2",
    category: "Прошедшие времена",
    summary: "Завершённое в прошлом: «сделал(а)» в конкретный момент.",
    content: `## Pretérito Indefinido (простое прошедшее)

### Правильные глаголы

| Лицо | -AR | -ER/-IR |
|---|---|---|
| yo | -é | -í |
| tú | -aste | -iste |
| él/ella | -ó | -ió |
| nosotros | -amos | -imos |
| vosotros | -asteis | -isteis |
| ellos | -aron | -ieron |

Пример: \`hablar\` → hablé, hablaste, habló, hablamos, hablasteis, hablaron.

### Самые частые неправильные

| Инфинитив | yo | él/ella | ellos |
|---|---|---|---|
| ser / ir | fui | fue | fueron |
| tener | tuve | tuvo | tuvieron |
| estar | estuve | estuvo | estuvieron |
| hacer | hice | hizo | hicieron |
| venir | vine | vino | vinieron |
| decir | dije | dijo | dijeron |
| ver | vi | vio | vieron |

### Использование
Действие **завершено** в конкретный момент прошлого:
\`Ayer fui al cine.\`
\`En 2018 viví en Barcelona.\`

### Маркеры
ayer, anteayer, el lunes pasado, hace dos años, en 1999.

> 💡 Indefinido = «факты прошлого»; Imperfecto = «описание фона». Сравни:
> \`Ayer **llovió**\` (что произошло) / \`**Llovía**\` (какая была погода).`,
  },

  // ----- B1 ---------------------------------------------------------
  {
    slug: "b1-subjuntivo",
    title: "Subjuntivo",
    titleEs: "Modo Subjuntivo (Presente)",
    level: "B1",
    category: "Наклонения",
    summary: "Сослагательное наклонение для желаний, сомнений, эмоций.",
    content: `## Modo Subjuntivo — Presente

### Образование
Берём форму **yo** presente, меняем окончание: -AR ↔ -ER/-IR.

| Лицо | -AR (hablar → hablo) | -ER (comer → como) |
|---|---|---|
| yo | hable | coma |
| tú | hables | comas |
| él/ella | hable | coma |
| nosotros | hablemos | comamos |
| ellos | hablen | coman |

### Неправильные корни
- tener → **tenga**, estar → **esté**, hacer → **haga**
- ser → **sea**, ir → **vaya**, saber → **sepa**
- Глаголы с чередованием: pensar → **piense**, pedir → **pida**

### Когда использовать Subjuntivo
1. **Желание**: \`Quiero que **vengas**.\`
2. **Эмоция**: \`Me alegra que **estés** aquí.\`
3. **Сомнение**: \`Dudo que **sepa** la respuesta.\`
4. **Неопределённость**: \`Busco a alguien que **hable** ruso.\`
5. **После определённых союзов**: para que, antes de que, aunque (гипотетично).

### WEIRDO — мнемоника
**W**ish, **E**motion, **Impersonal expressions**, **R**ecommendation, **D**oubt, **O**jalá.

> ⚠️ \`Creo que...\` → Indicativo (уверенность). \`No creo que...\` → Subjuntivo (сомнение).`,
  },
  {
    slug: "b1-imperativo",
    title: "Imperativo",
    titleEs: "Modo Imperativo",
    level: "B1",
    category: "Наклонения",
    summary: "Повелительное наклонение: приказы, просьбы, советы.",
    content: `## Imperativo

### Утвердительная форма (afirmativo)

| Лицо | -AR | -ER/-IR | Несколько частых |
|---|---|---|---|
| tú | -a (habla) | -e (come) | ten, pon, ven, sal, haz |
| usted | -e (hable) | -a (coma) | sea, vaya |
| nosotros | -emos | -amos | vamos, demos |
| vosotros | -ad (hablad) | -ed (comed) |  |
| ustedes | -en (hablen) | -an (coman) |  |

### Отрицательная форма (negativo) = Subjuntivo
\`No **hables**\`, \`No **comas**\`, \`No **vengas**\`.

### Особые формы tú (утвердительно)
| Инфинитив | tú |
|---|---|
| tener | ten |
| poner | pon |
| venir | ven |
| salir | sal |
| hacer | haz |
| decir | di |
| ser | sé |
| ir | ve |

### С местоимениями
В утвердительной форме местоимения **присоединяются** к глаголу:
\`**Dímelo**\` (di + me + lo) = скажи мне это.

В отрицательной — **стоят перед**:
\`**No me lo digas**\`.

> 💡 Ударение сохраняется на глаголе: dí-me-lo, có-me-lo.`,
  },

  // ----- B2 ---------------------------------------------------------
  {
    slug: "b2-estilo-indirecto",
    title: "Estilo Indirecto",
    titleEs: "Estilo Indirecto (Reported Speech)",
    level: "B2",
    category: "Синтаксис",
    summary: "Косвенная речь: передача чужих слов и мыслей.",
    content: `## Estilo Indirecto (косвенная речь)

### Прямая → Косвенная (одновременность)
> Directo: \`Ana dice: "Hoy **llego** tarde."\`
> Indirecto: \`Ana dice que hoy **llega** tarde.\`

Если главный глагол в **настоящем** (dice) — время не меняется, только
меняются лица и местоимения.

### Сдвиг времён (главный глагол в прошедшем: dijo)
| Directo | Indirecto |
|---|---|
| Presente | Pretérito Imperfecto |
| Pretérito Indefinido/Perfecto | Pluscuamperfecto |
| Futuro | Condicional |

Пример:
> Directo: \`Juan dijo: "Vendré mañana."\`
> Indirecto: \`Juan dijo que **vendría** al día siguiente.\`

### Изменения указателей
| Directo | Indirecto |
|---|---|
| hoy | aquel día / ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |

### Косвенные вопросы
\`Me pregunto **si** vendrá.\` / \`No sé **qué** hacer.\`
— без инверсии и без знаков вопроса в косвенной форме.

> ⚠️ Повелительное → Subjuntivo:
> \`Dijo: "Hazlo"\` → \`Dijo que **lo hiciera**.\``,
  },
  {
    slug: "b2-voz-pasiva",
    title: "Voz Pasiva",
    titleEs: "Voz Pasiva y Pasiva Refleja",
    level: "B2",
    category: "Синтаксис",
    summary: "Пассивный залог и его естественная альтернатива — pasiva refleja.",
    content: `## Voz Pasiva

### 1. Voz pasiva con SER (классическая)
**SER** + participio (+ **por** + агент)

\`El libro **fue escrito** por Cervantes.\`
\`La carta **es enviada** por la empresa.\`

Времена изменяют SER:
| Время | Форма |
|---|---|
| Presente | es escrito |
| Pret. indefinido | fue escrito |
| Pret. imperfecto | era escrito |
| Futuro | será escrito |

Используется в **формальном, письменном** регистре (новости, наука).

### 2. Pasiva refleja (естественная и частая)
**SE** + глагол в 3 лице

\`**Se** habla español.\` — Здесь говорят по-испански.
\`**Se** venden casas.\` — Продаются дома.

Согласование с подлежащим:
\`Se **vende** pan\` (ед.) / \`Se **venden** libros\` (мн.).

### Когда что использовать
- **SER pasiva**: акцент на **процессе** или **агенте** (por...).
- **Pasiva refleja**: акцент на **действии/результате**, агент неважен — это
  наиболее частая и естественная форма в разговорной речи.

> 💡 В испанском pasiva refleja намного естественнее, чем английский пассив.
> Не переводи буквально: \`"The door is closed"\` → \`"La puerta está cerrada"\`
> (состояние) или \`"Se cierra la puerta"\` (действие).`,
  },

  // ----- C1 ---------------------------------------------------------
  {
    slug: "c1-perifrasis-verbales",
    title: "Perífrasis Verbales",
    titleEs: "Perífrasis Verbales",
    level: "C1",
    category: "Глаголы",
    summary: "Сложные глагольные конструкции: необходимости, начала, конца.",
    content: `## Perífrasis Verbales

Конструкция: **вспомогательный глагол + (связка) + инфинитив/gerundio/participio**.

### С Infinitivo
| Перифраз | Значение | Пример |
|---|---|---|
| tener que + inf | долженствование | Tengo que irme |
| hay que + inf | нужно (безлично) | Hay que estudiar |
| ir a + inf | ближайшее будущее | Voy a comer |
| acabar de + inf | только что | Acabo de llegar |
| volver a + inf | снова | Volví a leerlo |
| deber + inf | должен/следует | Debes descansar |
| poder + inf | мочь | Puedo ayudarte |
| soler + inf | иметь обыкновение | Suelo correr |

### С Gerundio
| Перифраз | Значение | Пример |
|---|---|---|
| estar + ger | действие в процессе | Estoy comiendo |
| seguir/continuar + ger | продолжать | Sigue lloviendo |
| llevar + ger | длительность | Llevo dos horas estudiando |
| ir + ger | постепенность | Va mejorando |

### С Participio
| Перифраз | Значение | Пример |
|---|---|---|
| llevar + part | накопленный результат | Llevo escritas 10 páginas |
| dejar + part | оставлять в состоянии | Lo dejé hecho |
| tener + part | завершённое действие | Tengo terminado el informe |

> ⚠️ Внимание к связке: одни требуют **de** (\`acabar de\`, \`deber de\`),
> другие — **a** (\`ir a\`), третьи — без предлога (\`poder\`, \`soler\`).
>
> \`Deber + inf\` = должен (мораль); \`deber de + inf\` = вероятно
> (\`Debe de ser tarde\` ≈ «Наверное, поздно»).`,
  },
  {
    slug: "c1-matices-estilisticos",
    title: "Matrices Estilísticos",
    titleEs: "Matrices Estilísticos y Registers",
    level: "C1",
    category: "Стилистика",
    summary: "Тонкие смысловые оттенки: регистр, вежливость, модальность.",
    content: `## Matices Estilísticos (C1)

### 1. Condicionales и гипотезы
- **Real**: \`Si llueve, me quedo.\` (Indicativo + Futuro)
- **Irreal presente**: \`Si tuviera tiempo, saldría.\` (Subj. imperfecto + Condicional)
- **Irreal pasado**: \`Si hubiera sabido, habría ido.\` (Subj. pluscuamp. + Cond. compuesto)

### 2. Subjuntivo в тонких оттенках
- \`Aunque **llueva**\` (даже если — гипотетично) vs \`Aunque **llueve**\` (хотя — факт).
- \`Como **llegues** tarde...\` (угроза/предупреждение).
- \`Por mucho que **estudie**\` = как бы ни учился.

### 3. Вежливость и дистанция
- **Condicional de cortesía**: \`¿Podría...?\`, \`Quisiera...\`, \`Me gustaría...\`
- **Imperfecto** для смягчения: \`Quería pedirte un favor.\`
- **Subjuntivo** в просьбах: \`¿Puedes **abrir** la ventana?\` →
  \`¿Podrías **abrir**?\` → \`¿Te importaría **abrir**?\`

### 4. Регистр: formal vs informal
| Informal | Formal |
|---|---|
| tú | usted |
| ¿Qué tal? | ¿Cómo está usted? |
| Vale | De acuerdo / Correcto |
| ¡Hola! | Buenos días |

### 5. Лексические нюансы
- **Soler** вместо «обычно»: \`Suelo levantarme temprano.\`
- **Llevar + gerundio** для длительности: \`Llevo viviendo aquí 5 años.\`
- **Acabar por + inf** = в конце концов: \`Acabó por aceptar.\`
- **Venir a + inf** = примерно: \`Viene a costar 20 euros.\`

> 💡 На уровне C1 главное — не «правильность», а **уместность**: тот же
> смысл можно выразить десятком способов, и выбор зависит от контекста,
> региона и собеседника.`,
  },
];

/** Group topics by level for the grammar reference page. */
export function groupTopicsByLevel(): Record<string, GrammarTopic[]> {
  const grouped: Record<string, GrammarTopic[]> = {};
  for (const topic of GRAMMAR_TOPICS) {
    (grouped[topic.level] ||= []).push(topic);
  }
  return grouped;
}

/** Find a single topic by slug. */
export function getTopicBySlug(slug: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((t) => t.slug === slug);
}
