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
  {
    slug: "a1-genero-numero",
    title: "Род и число",
    titleEs: "Género y Número",
    level: "A1",
    category: "Существительные",
    summary: "Мужской/женский род, единственное/множественное число существительных.",
    content: `## Género (род)

| Окончание | Род | Пример |
|---|---|---|
| -o | м.р. | el libro, el perro |
| -a | ж.р. | la casa, la gata |
| -ción/-sión | ж.р. | la canción, la televisión |
| -dad/-tad | ж.р. | la ciudad, la libertad |
| согласная | разное | el lápiz / la pared |

**Исключения:** \`el problema\`, \`el mapa\`, \`el día\` (м.р. несмотря на -a);
\`la mano\`, \`la foto\` (ж.р. несмотря на -o).

## Número (число)

- Добавляем **-s** (для гласной): \`libro → libros\`, \`mesa → mesas\`
- Добавляем **-es** (для согласной): \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c перед -es)
- \`el prógrama → los programas\` (без ударения)

> ⚠️ Согласование: артикль + прилагательное + существительное должны
> совпадать в роде и числе: \`la casa blanca\`, \`los coches rojos\`.`,
  },
  {
    slug: "a1-numeros-1-100",
    title: "Числа 1–100",
    titleEs: "Números 1–100",
    level: "A1",
    category: "Лексика",
    summary: "Количественные числительные для счёта, возраста, цен.",
    content: `## Números cardinales

| Диапазон | Пример |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| десятки+единицы | treinta y uno, cuarenta y cinco |

**Особенности:**
- \`uno → un\` перед существительным: \`un libro\` (не \`uno libro\`)
- \`veintiún\` перед м.р.: \`veintiún años\`
- \`cien\` (100) vs \`ciento\` (перед числом): \`ciento uno\`

> 💡 Возраст: \`Tengo veinte años.\` Цены: \`Cuesta cinco euros.\``,
  },
  {
    slug: "a1-preposiciones-lugar",
    title: "Предлоги места",
    titleEs: "Preposiciones de Lugar",
    level: "A1",
    category: "Предлоги",
    summary: "en, a, de, sobre, debajo, delante — где находится предмет.",
    content: `## Основные предлоги места

| Предлог | Значение | Пример |
|---|---|---|
| **en** | в/на | El libro está **en** la mesa |
| **a** | к/в (движение) | Voy **a** Madrid |
| **de** | из/от | Soy **de** Rusia |
| **sobre** | над/на | La lámpara está **sobre** la mesa |
| **debajo de** | под | El gato está **debajo de** la silla |
| **delante de** | перед | El coche está **delante de** la casa |
| **detrás de** | за | El jardín está **detrás de** la casa |
| **entre** | между | Entre tú y yo |
| **cerca de** | рядом | La tienda está **cerca de** aquí |
| **lejos de** | далеко | Vive **lejos de** la ciudad |

### Важное правило
**Estar + место** для местонахождения: \`Estoy en casa.\`
**Ir + a + место** для направления: \`Voy al cine.\` (\`a + el = al\`)

> ⚠️ \`a + el = al\`, \`de + el = del\` — обязательное слияние.`,
  },
  {
    slug: "a1-gustar",
    title: "Глагол gustar",
    titleEs: "Verbo Gustar",
    level: "A1",
    category: "Глаголы",
    summary: "Особый глагол «нравиться» — спрягается по предмету, не по субъекту.",
    content: `## Gustar — «нравиться» (буквально: «быть приятным»)

В испанском \`gustar\` работает **наоборот**: подлежащим является то,
что нравится, а не тот, кому нравится.

### Спряжение

| Мне нравится… | Форма |
|---|---|
| единственное | **Me gusta** el café |
| множественное | **Me gustan** los libros |

| Лицо | Единств. | Множ. |
|---|---|---|
| мне | me gusta | me gustan |
| тебе | te gusta | te gustan |
| ему/ей | le gusta | le gustan |
| нам | nos gusta | nos gustan |
| вам | os gusta | os gustan |
| им | les gusta | les gustan |

### Усиление
\`Me gusta** mucho** el café.\` — Мне очень нравится кофе.
\`No me gusta **nada** el té.\` — Мне совсем не нравится чай.

### Уточнение (a + имя)
\`A **María** le gusta el flamenco.\` — Марии нравится фламенко.
\`A **mí** me gusta el café.\` — Мне (именно мне) нравится кофе.

> 💡 Похожие глаголы: \`encantar\` (обожать), \`interesar\` (интересовать),
> \`doler\` (болеть) — работают так же.`,
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
  {
    slug: "a2-imperfecto",
    title: "Pretérito Imperfecto",
    titleEs: "Pretérito Imperfecto",
    level: "A2",
    category: "Прошедшие времена",
    summary: "Описание фона в прошлом: привычки, описания, длительные действия.",
    content: `## Pretérito Imperfecto — фон прошлого

### Правильные окончания

| Лицо | -AR | -ER/-IR |
|---|---|---|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él/ella | -aba | -ía |
| nosotros | -ábamos | -íamos |
| ellos | -aban | -ían |

Пример: \`hablar\` → hablaba, hablabas, hablaba, hablábamos, hablaban.

### Только 3 неправильных!
| Глагол | Основа |
|---|---|
| **ser** | era, eras, era, éramos, eran |
| **ir** | iba, ibas, iba, íbamos, iban |
| **ver** | veía, veías, veía, veíamos, veían |

### Когда использовать
1. **Привычки в прошлом:** \`Cuando era niño, jugaba al fútbol.\`
2. **Описание:** \`Hacía sol y los pájaros cantaban.\`
3. **Длительное действие (фон):** \`Yo leía cuando llamaste.\`
4. **Возраст/время:** \`Tenía 10 años.\`

### Сравнение с Indefinido
\`**Estaba** en casa cuando **llegó** María.\`
(Imperfecto — что делал / Indefinido — что произошло).`,
  },
  {
    slug: "a2-por-para",
    title: "Por vs Para",
    titleEs: "Por y Para",
    level: "A2",
    category: "Предлоги",
    summary: "Два предлога «за/для» — главная трудность испанского.",
    content: `## POR vs PARA — оба переводятся по-разному

### PARA — цель, назначение, направление
- **Цель:** \`Estudio **para** aprender.\` (чтобы научиться)
- **Получатель:** \`Es un regalo **para** ti.\` (для тебя)
- **Направление:** \`Voy **para** Madrid.\` (в сторону)
- **Срок:** \`Para mañana.\` (к завтрашнему дню)

### POR — причина, путь, обмен, длительность
- **Причина:** \`**Por** el frío, no salí.\` (из-за холода)
- **Путь/место:** \`Paseo **por** el parque.\` (через/по)
- **Обмен:** \`Lo compré **por** 10 euros.\` (за 10 евро)
- **Длительность:** \`Estudié **por** dos horas.\` (в течение)
- **Вместо:** \`Lo hago **por** ti.\` (за тебя/вместо тебя)

### Мнемоника
**PARA** = « PARA чего» (цель, направление вперёд)
**POR** = «по причине, по пути, по цене»

> ⚠️ Устойчивые: \`por favor\` (пожалуйста), \`por qué\` (почему),
> \`para siempre\` (навсегда), \`por la mañana\` (утром).`,
  },
  {
    slug: "a2-comparativos",
    title: "Сравнительная степень",
    titleEs: "Comparativos y Superlativos",
    level: "A2",
    category: "Прилагательные",
    summary: "Сравнение: больше/меньше/самый — сравнительная и превосходная степень.",
    content: `## Comparativos (сравнительная степень)

### Обычные прилагательные
\`más + прилагательное + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\` — Мария выше Аны.
- \`Este coche es **menos caro que** el otro.\` — Этот авто дешевле.

### Особые формы (нужно запомнить!)

| Значение | Форма |
|---|---|
| больше/меньше | **mayor / menor** (возраст) или **más grande/más pequeño** (размер) |
| лучше/хуже | **mejor / peor** |
| больше (количество) | **más** |
| старше/младше | **mayor / menor** |

\`Juan es **mejor** que yo.\` — Хуан лучше меня.
\`Mi hermano es **mayor** que yo.\` — Мой брат старше меня.

## Superlativos (превосходная степень)

\`el/la/los/las + más/menos + прилагательное\`

- \`Es **el más alto** de la clase.\` — Он самый высокий в классе.
- \`Es **la menos cara**.\` — Она наименее дорогая.

### Особые: добавляем -ísimo
\`bueno → buenísimo\` (очень хороший)
\`grande → grandísimo\`
\`rápido → rapidísimo\`

> ⚠️ \`el mejor / la mejor\` (лучший), \`el peor / la peor\` (худший) —
> особые формы превосходной.`,
  },
  {
    slug: "a2-futuro-simple",
    title: "Futuro Simple",
    titleEs: "Futuro Simple",
    level: "A2",
    category: "Будущее время",
    summary: "Простое будущее: планы, прогнозы, обещания.",
    content: `## Futuro Simple

### Образование: инфинитив + окончание

К **инфинитиву** добавляем (без отбрасывания -ar/-er/-ir):

| Лицо | Окончание |
|---|---|
| yo | -é |
| tú | -ás |
| él/ella | -á |
| nosotros | -emos |
| vosotros | -éis |
| ellos | -án |

Примеры:
- \`hablar\` → hablar**é**, hablar**ás**, hablar**á**…
- \`comer\` → comer**é**, comer**ás**…
- \`vivir\` → vivir**é**, vivir**ás**…

### Неправильные основы (12 глаголов)
| Инфинитив | Основа будущего |
|---|---|
| tener | tendr- |
| poner | pondr- |
| salir | saldr- |
| venir | vendr- |
| hacer | har- |
| poder | podr- |
| saber | sabr- |
| querer | querr- |
| decir | dir- |
| haber | habr- |

### Использование
1. **Прогноз:** \`Mañana **lloverá**.\`
2. **Обещание:** \`Te **llamaré** esta noche.\`
3. **Планы:** \`El año que viene **viajaré** a España.\`

> 💡 Также: вероятность в настоящем: \`¿Qué hora es? — Serán las tres.\`
> (Наверное, часа три).`,
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
  {
    slug: "b1-condicional",
    title: "Condicional Simple",
    titleEs: "Modo Condicional",
    level: "B1",
    category: "Наклонения",
    summary: "Условное наклонение: вежливые просьбы, гипотезы, пожелания.",
    content: `## Condicional Simple (условное наклонение)

### Образование: инфинитив + окончание

| Лицо | Окончание |
|---|---|
| yo | -ía |
| tú | -ías |
| él/ella | -ía |
| nosotros | -íamos |
| vosotros | -íais |
| ellos | -ían |

Примеры:
- \`hablar\` → hablar**ía**, hablar**ías**…
- \`comer\` → comer**ía**, comer**ías**…

### Неправильные основы (те же, что в будущем)
\`tener → tendría\`, \`poner → pondría\`, \`hacer → haría\`,
\`poder → podría\`, \`saber → sabría\`, \`querer → querría\`, \`decir → diría\`.

### Использование
1. **Вежливость:** \`¿**Podría** ayudarme?\` (Не могли бы вы помочь?)
2. **Пожелание:** \`**Me gustaría** viajar.\` (Я бы хотел попутешествовать.)
3. **Гипотеза в прошлом:** \`Dijo que **vendría**.\` (Он сказал, что придёт.)
4. **Совет:** \`Yo que tú, **estudiaría** más.\` (На твоём месте я бы…)

### Si-конструкции (нереальное условие в настоящем)
\`Si **tuviera** tiempo, **saldría** contigo.\`
(Если бы у меня было время, я бы пошёл с тобой.)
- \`Si + Subjuntivo imperfecto + Condicional\`

> 💡 Condicional = будущее, перенесённое в воображаемое/гипотетическое.`,
  },
  {
    slug: "b1-preposiciones-por-para-2",
    title: "Местоимения SE",
    titleEs: "Pronombre SE",
    level: "B1",
    category: "Местоимения",
    summary: "Безличное se, пассивное se, взаимное se — многофункциональный местоименный глагол.",
    content: `## Местоимение SE — самые важные функции

### 1. Возвратное (reflexivo)
\`levantarse\` → \`Me **levanto** a las 7.\` — Я встаю в 7.
\`lavarse\` → \`Se **lava** las manos.\` — Он моет руки.

### 2. Взаимное (recíproco)
\`**Se** ven todos los días.\` — Они видят друг друга каждый день.
\`**Nos** abrazamos.\` — Мы обнимаемся.

### 3. Пассивное (pasiva refleja) — без указания исполнителя
\`**Se** habla español.\` — Здесь говорят по-испански.
\`**Se** venden casas.\` — Продаются дома.
- Глагол **согласуется** с существительным: \`Se vende pan\` / \`Se venden libros\`.

### 4. Безличное (impersonal)
\`**Se** vive bien aquí.\` — Здесь хорошо живут.
- Всегда 3 лицо единственного числа.

### 5. Непреднамеренное (accidental)
\`**Se** me rompió el vaso.\` — У меня случайно разбился стакан.
- Формат: \`Se + [косв. местоимение] + глагол + артикль + существительное\`
\`**Se** le olvidó la contraseña.\` — Он забыл пароль.

> ⚠️ \`se\` — самое частое местоимение в испанском после \`que\`. Контекст
> определяет значение.`,
  },
  {
    slug: "b1-relativos",
    title: "Относительные местоимения",
    titleEs: "Pronombres Relativos",
    level: "B1",
    category: "Местоимения",
    summary: "que, quien, el que, cuyo, donde — связывающие слова в сложных предложениях.",
    content: `## Относительные местоимения (relativos)

### QUE — самый универсальный
\`El libro **que** leo.\` — Книга, которую я читаю.
\`La mujer **que** habla.\` — Женщина, которая говорит.
- Используется для людей и предметов, после предлога с предметами:
\`el tema **de que** hablamos\` (но: \`la persona **de la que** hablo\`).

### QUIEN — только для людей (после запятой или предлога)
\`Mi hermano, **quien** vive en Madrid, es médico.\`
\`Es el profesor **con quien** hablé.\`

### EL QUE / LA QUE / LOS QUE / LAS QUE — уточнение
\`El **que** estudia, aprueba.\` — Тот, кто учится, сдаёт.
\`Las **que** vinieron.\` — Те (женщины), что пришли.

### LO QUE — «то, что» (абстрактное)
\`Esto es **lo que** quiero.\` — Это то, что я хочу.
\`No entendí **lo que** dijiste.\`

### CUYO / CUYA / CUYOS / CUYAS — «чей»
\`El hombre **cuyo** coche es rojo.\` — Мужчина, чья машина красная.
- **Согласуется** с тем, чему принадлежит (не с владельцем):
\`la mujer **cuyos** hijos…\`

### DONDE — «где» (место)
\`La ciudad **donde** vivo.\` — Город, где я живу.

> 💡 \`que\` = общее; \`quien\` = только люди; \`donde\` = только место;
> \`cuyo\` = принадлежность (чей).`,
  },
  {
    slug: "b1-pluscuamperfecto",
    title: "Pretérito Pluscuamperfecto",
    titleEs: "Pretérito Pluscuamperfecto",
    level: "B1",
    category: "Прошедшие времена",
    summary: "Предпрошедшее: действие, случившееся до другого действия в прошлом.",
    content: `## Pretérito Pluscuamperfecto — «давно-прошедшее»

### Формула: HABER (в imperfecto) + participio

**haber** в imperfecto: había, habías, había, habíamos, habíais, habían

**Participio** (как в perfecto):
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido

Неправильные: \`hecho, visto, puesto, escrito, abierto, dicho, vuelto\`.

### Примеры
\`Cuando llegué, el tren ya **había salido**.\`
(Когда я приехал, поезд уже ушёл.)

\`No tenía hambre porque ya **había comido**.\`
(Я не был голоден, потому что уже поел.)

### Использование
Действие, которое произошло **раньше** другого действия в прошлом:

| Раньше (pluscuamperfecto) | Позже (indefinido/imperfecto) |
|---|---|
| había terminado | cuando llegaste |

### Маркеры
\`ya\` (уже), \`nunca\` (никогда), \`todavía no\` (ещё нет).

> 💡 Используется в косвенной речи: \`Dijo que **había** terminado.\`
> (Он сказал, что закончил — перфект → плюсквамперфект).`,
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
