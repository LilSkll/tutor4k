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
| él/ella/usted | es |
| nosotros/as | somos |
| **vosotros/as** | **sois** |
| ellos/ustedes | son |

### ESTAR — временные состояния и местоположение
Используется для **состояния, чувств, местонахождения**:
- \`Estoy cansado.\` — Я устал.
- \`El libro está en la mesa.\` — Книга на столе.

| Лицо | ESTAR |
|---|---|
| yo | estoy |
| tú | estás |
| él/ella/usted | está |
| nosotros/as | estamos |
| **vosotros/as** | **estáis** |
| ellos/ustedes | están |

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
  {
    slug: "a1-tener-expressions",
    title: "Выражения с tener",
    titleEs: "Expresiones con Tener",
    level: "A1",
    category: "Глаголы",
    summary: "tener hambre/frío/sueño/razón — устойчивые выражения состояния.",
    content: `## Expresiones con TENER

В испанском многие состояния выражаются через **tener + существительное**,
а не через ser/estar (как можно было бы ожидать из русского).

| Испанский | Русский | НЕ говорить |
|---|---|---|
| tener **hambre** | быть голодным | ~~estar hambriento~~ |
| tener **sed** | хотеть пить | ~~estar sediento~~ |
| tener **frío** | мёрзнуть | ~~estar frío~~ (это «быть холодным») |
| tener **calor** | ему жарко | ~~estar caliente~~ |
| tener **sueño** | хотеть спать | ~~estar soñoliento~~ |
| tener **miedo** | бояться | ~~estar miedoso~~ |
| tener **suerte** | быть удачливым | — |
| tener **razón** | быть правым | — |
| tener **prisa** | спешить | — |
| tener **ganas de** + inf | хотеть | — |
| tener **necesidad de** | нуждаться | — |
| tener **X años** | быть возраста X | — |

### Примеры
\`Tengo hambre. Vamos a comer.\` — Я голоден. Пойдём поедим.
\`¿Tienes frío? — Sí, tengo mucho frío.\` — Тебе холодно?
\`No tienes razón.\` — Ты не прав.
\`Tengo ganas de viajar.\` — Мне хочется попутешествовать.
\`Tengo veinte años.\` — Мне 20 лет.

> ⚠️ Согласование: \`Tiene**mos** hambre\` (мы голодны), \`Tiene**n** sueño\` (они хотят спать).`,
  },
  {
    slug: "a1-preguntas",
    title: "Вопросительные предложения",
    titleEs: "Oraciones Interrogativas",
    level: "A1",
    category: "Синтаксис",
    summary: "¿Qué? ¿Cómo? ¿Dónde? — вопросительные слова и их использование.",
    content: `## Вопросительные слова (palabras interrogativas)

| Слово | Перевод | Пример |
|---|---|---|
| ¿**Qué**? | Что? Какой? | ¿Qué haces? ¿Qué es esto? |
| ¿**Cómo**? | Как? | ¿Cómo estás? ¿Cómo te llamas? |
| ¿**Dónde**? | Где? Куда? | ¿Dónde vives? ¿Dónde vas? |
| ¿**Cuándo**? | Когда? | ¿Cuándo llegas? |
| ¿**Quién**? / ¿**Quiénes**? | Кто? | ¿Quién es ella? ¿Quiénes son? |
| ¿**Cuál**? / ¿**Cuáles**? | Какой? Который? | ¿Cuál prefieres? |
| ¿**Por qué**? | Почему? | ¿Por qué estudias español? |
| ¿**Para qué**? | Зачем? | ¿Para qué lo necesitas? |
| ¿**Cuánto**? / ¿**Cuántos**? | Сколько? | ¿Cuánto cuesta? ¿Cuántos años tienes? |
| ¿**Cuál es**? | Какой (имя/адрес)? | ¿Cuál es tu nombre? |

### Qué vs Cuál — частая путаница
- **Qué** = «что это такое» (определение): \`¿Qué es "mesa"?\`
- **Cuál** = «который из» (выбор): \`¿Cuál prefieres, té o café?\`
- **Qué + существительное**: \`¿Qué libro lees?\` (какую книгу)
- **Cuál + ser**: \`¿Cuál es tu número?\` (каков твой номер)

### Знаки вопроса
В испанском **двойные** знаки: \`¿…?\` открывающий + \`…?\` закрывающий.
\`¿Cómo te llamas?\`

> 💡 В разговорной речи открывающий \`¿\` часто опускают, но в письменной обязателен.`,
  },
  {
    slug: "a1-verbos-frecuentes",
    title: "Частые глаголы",
    titleEs: "Verbos Frecuentes",
    level: "A1",
    category: "Глаголы",
    summary: "ir, tener, hacer, poder, querer, decir — самые нужные неправильные глаголы.",
    content: `## Самые нужные неправильные глаголы (presente)

### IR — идти
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| voy | vas | va | vamos | **vais** | van |

\`Ir a + infinitivo\` = ближайшее будущее: \`Voy a comer.\` (Я собираюсь есть).
\`Ir a + место\` = направление: \`Voy al cine.\`

### TENER — иметь
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| tengo | tienes | tiene | tenemos | **tenéis** | tienen |

### HACER — делать
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **hago** | haces | hace | hacemos | **hacéis** | hacen |

⚠️ yo-форма неправильная: \`hago\`, не \`habo\`.

### PODER — мочь
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **puedo** | **puedes** | **puede** | podemos | **podéis** | **pueden** |

### QUERER — хотеть
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **quiero** | **quieres** | **quiere** | queremos | **queréis** | **quieren** |

### DECIR — говорить/сказать
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **digo** | **dices** | **dice** | decimos | **decís** | **dicen** |

### SABER — знать (факты)
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **sé** | sabes | sabe | sabemos | **sabéis** | saben |

> 💡 Запомни: \`poder\` + infinitivo = «мочь сделать»: \`Puedo ayudarte.\`
> \`querer\` + infinitivo = «хотеть сделать»: \`Quiero aprender español.\``,
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
| él/ella/usted | -aba | -ía |
| nosotros/as | -ábamos | -íamos |
| **vosotros/as** | **-abais** | **-íais** |
| ellos/ustedes | -aban | -ían |

Пример: \`hablar\` → hablaba, hablabas, hablaba, hablábamos, **hablabais**, hablaban.

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
| él/ella/usted | hable | coma |
| nosotros/as | hablemos | comamos |
| **vosotros/as** | **habléis** | **comáis** |
| ellos/ustedes | hablen | coman |

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
  {
    slug: "b1-subjuntivo-imperfecto",
    title: "Subjuntivo Imperfecto",
    titleEs: "Subjuntivo Imperfecto",
    level: "B1",
    category: "Наклонения",
    summary: "Сослагательное в прошедшем/нереальном: гипотезы, нереальные условия.",
    content: `## Subjuntivo Imperfecto (сослагательное в прошедшем)

### Образование: инфинитив + окончания (с ударением)

Для -AR: -ara, -aras, -ara, -áramos, -arais, -aran
Для -ER/-IR: -iera, ieras, iera, -iéramos, -ierais, -ieran

Пример: \`hablar → hablara\`, \`comer → comiera\`, \`vivir → viviera\`.

⚠️ Те же неправильные, что и в futuro simple:
\`tener → tuviera\`, \`poner → pusiera\`, \`hacer → hiciera\`, \`saber → supiera\`,
\`venir → viniera\`, \`poder → pudiera\`, \`querer → quisiera\`, \`decir → dijera\`.

### Когда использовать
1. **Si-конструкция (нереальное условие):**
   \`Si **tuviera** dinero, viajaría.\` — Если бы у меня были деньги, я бы путешествовал.
2. **После «como si» (как если бы):**
   \`Me habla como si **fuera** tonto.\` — Он говорит со мной так, будто я глупый.
3. **После выражений эмоции/воли в прошедшем:**
   \`Quería que **vinieras**.\` — Я хотел, чтобы ты пришёл.
4. **Вежливые просьбы:**
   \`Quisiera un café.\` — Я бы хотел кофе.

### Двойная форма (-ra / -se)
Есть устаревшая форма на -se: \`hablase, comiese\`. Встречается в литературе.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = нереальное условие.
> Это одна из самых частых конструкций B1-B2.`,
  },
  {
    slug: "b1-pronombres-objetos",
    title: "Безударные местоимения",
    titleEs: "Pronombres de Objeto (OD/OI)",
    level: "B1",
    category: "Местоимения",
    summary: "Прямое и косвенное дополнение: me, te, lo, le, se — когда какое.",
    content: `## Местоимения-дополнения (OD и OI)

### Прямое дополнение (Objeto Directo — что?)
Отвечает на вопрос «что/кого?» (без предлога).

| Лицо | OD |
|---|---|
| me | меня |
| te | тебя |
| lo / la | его/её (м.р./ж.р.) |
| nos | нас |
| os | вас |
| los / las | их |

Пример: \`**Lo** veo.\` — Я его вижу. \`**La** leo.\` — Я её читаю (книгу ж.р.).

### Косвенное дополнение (Objeto Indirecto — кому?)
Отвечает на «кому/чему?» (с предлогом a).

| Лицо | OI |
|---|---|
| me | мне |
| te | тебе |
| **le** | ему/ей |
| nos | нам |
| os | вам |
| **les** | им |

Пример: \`**Le** doy el libro.\` — Я даю ему книгу.

### Двойные местоимения (OD + OI)
Когда в предложении оба: \`me lo, te lo, se lo, nos lo\`.

⚠️ **le/les + lo/la/los/las → SE**
\`Le + lo = **se lo**\` (НЕ ~~le lo~~).
\`**Se lo** di.\` — Я ему это дал.

### Порядок местоимений
1. **Перед спрягаемым глаголом:** \`Te lo digo.\`
2. **После инфинитива/герундия (слитно):** \`Voy a de**círtelo**.\` \`Estoy di**ciéndotelo**.\`
3. **После утвердительного повелительного (слитно):** \`¡**Dímelo**!\`

> 💡 Мнемоника OI перед OD: «Le lo» — невозможно. Поэтому «Se lo».`,
  },
  {
    slug: "b1-adverbios",
    title: "Наречия",
    titleEs: "Adverbios",
    level: "B1",
    category: "Наречия",
    summary: "mente-наречия, времени, места, образа действия, сомнения.",
    content: `## Наречия (adverbios)

### Образование -mente (как? каким образом?)
**Прилагательное (ж.р.) + mente:**
- \`rápida + mente = rápidamente\` (быстро)
- \`fácil + mente = fácilmente\` (легко)
- \`perfecta + mente = perfectamente\` (идеально)

⚠️ Если прилагательное имеет только форму м.р.: \`feliz → felizmente\`.

⚠️ Если исходное прилагательное имеет ударение, \`-mente\` тоже несёт ударение:
\`difícil**mente**\`.

### Наречия времени
\`hoy\` (сегодня), \`ayer\` (вчера), \`mañana\` (завтра), \`ahora\` (сейчас),
\`tarde\` (поздно), \`temprano\` (рано), \`pronto\` (скоро),
\`siempre\` (всегда), \`nunca\` (никогда), \`ya\` (уже), \`todavía\` (ещё).

### Наречия места
\`aquí\` (здесь), \`allí\` (там), \`allá\` (вон там), \`cerca\` (близко),
\`lejos\` (далеко), \`delante\` (впереди), \`detrás\` (позади),
\`arriba\` (наверху), \`abajo\` (внизу), \`adentro\` (внутри), \`afuera\` (снаружи).

### Наречия сомнения
\`quizás\`, \`tal vez\`, \`acaso\`, \`posiblemente\`, \`probablemente\`.
⚠️ Эти наречия часто **требуют subjuntivo**: \`Quizás **venga** mañana.\`.

### Наречия количества
\`mucho\` (много), \`poco\` (мало), \`muy\` (очень), \`bastante\` (достаточно),
\`demasiado\` (слишком), \`tan\` (так), \`tanto\` (столько).

### muy vs mucho
- **muy** + прилагательное/наречие: \`muy **bueno**\`, \`muy **rápido**\`
- **mucho** + существительное/глагол: \`mucho **trabajo**\`, \`trabajo **mucho**\``,
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
  {
    slug: "b2-subjuntivo-compuestos",
    title: "Subjuntivo Compuestos",
    titleEs: "Subjuntivo Perfecto y Pluscuamperfecto",
    level: "B2",
    category: "Наклонения",
    summary: "Сложные формы сослагательного: perfecto (habla hablado) и pluscuamperfecto.",
    content: `## Сложные формы Subjuntivo

### Subjuntivo Perfecto (прошедшее совершённое)
Формула: **haya** + participio

\`haya, hayas, haya, hayamos, hayan + hablado/comido/vivido\`

Использование:
1. **Эмоция о свершившемся:**
   \`Me alegra que **hayas llegado**.\` — Я рад, что ты пришёл.
2. **Сомнение о прошлом:**
   \`Dudo que **haya** terminado.\` — Сомневаюсь, что он закончил.
3. **После «cuando» (будущее завершённое):**
   \`Cuando **hayas** terminado, avísame.\` — Когда закончишь, скажи.

### Subjuntivo Pluscuamperfecto (предпрошедшее)
Формула: **hubiera/hubiese** + participio

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubieran + hablado\`

Использование:
1. **Si-конструкция (нереальное условие в прошлом):**
   \`Si **hubiera sabido**, habría ido.\` — Если бы я знал, я бы пошёл.
2. **После «como si» (нереальное сравнение):**
   \`Habla como si **hubiera vivido** en España.\`
3. **В косвенной речи (после прошедшего):**
   \`Dudaba que **hubiera** terminado.\` — Он сомневался, что я закончил.

### Двойная форма -ra / -se
\`hubiera hablado = hubiese hablado\` (равнозначны, -se более литературно).

> ⚠️ Универсальное правило: **Indicativo для фактов, Subjuntivo для
> субъективного** (эмоция, сомнение, желание, гипотеза). Перфектные
> формы — это просто перенос того же правила в прошлое.`,
  },
  {
    slug: "b2-condicionales-compuestos",
    title: "Condicional Compuesto",
    titleEs: "Condicional Compuesto",
    level: "B2",
    category: "Наклонения",
    summary: "Сложное условное: habría + participio (я бы сделал).",
    content: `## Condicional Compuesto

### Формула: **haber** (в condicional) + participio

\`habría, habrías, habría, habríamos, habríais, habrían + hablado/comido\`

Неправильный participio: \`hecho, visto, dicho, puesto, escrito, abierto\`.

### Когда использовать
1. **Нереальное условие в прошлом (с si + pluscuamperfecto):**
   \`Si **hubiera** tenido tiempo, **habría** ido.\`
   — Если бы у меня было время, я бы пошёл.
2. **Вежливое сожаление:**
   \`**Habría** preferido otra cosa.\` — Я бы предпочёл другое.
3. **Гипотеза о прошлом:**
   \`¿Quién lo hizo? — **Habría** sido Juan.\` — Наверное, это был Хуан.
4. **Косвенная речь (futuro → condicional compuesto):**
   \`Dijo que lo **habría terminado** para hoy.\`

### Три типа si-условий

| Тип | Союз | Глагол после si | Главное предложение |
|---|---|---|---|
| Реальное | si | presente | futuro |
| Нереальное (наст.) | si | imperfecto subj. | condicional simple |
| Нереальное (прош.) | si | pluscuamperfecto subj. | condicional compuesto |

Примеры:
- \`Si llueve, me quedo.\` (реально)
- \`Si lloviera, me quedaría.\` (нереально сейчас)
- \`Si hubiera llovido, me habría quedado.\` (нереально в прошлом)`,
  },
  {
    slug: "b2-relativos-avanzado",
    title: "Сложные относительные",
    titleEs: "Relativos Avanzados",
    level: "B2",
    category: "Синтаксис",
    summary: "lo que, el cual, donde, como, cuando — продвинутое связывание предложений.",
    content: `## Относительные местоимения (продвинутый уровень)

### LO QUE — «то, что» (абстрактное, нейтральное)
\`No entiendo **lo que** dices.\` — Не понимаю то, что ты говоришь.
\`Esto es **lo que** quiero.\` — Это то, что я хочу.

⚠️ \`lo que\` относится к идее/факту, не к конкретному существительному.

### EL CUAL / LA CUAL / LOS CUALES / LAS CUALES
Используется в **формальном** регистре, особенно после предлогов.

\`Tengo un amigo, **con el cual** trabajo.\` — У меня есть друг, с которым я работаю.
\`La casa, **en la cual** vivo, es antigua.\` — Дом, в котором я живу, старый.

⚠️ В разговорной речи обычно \`con el que / en el que\`, \`el cual\` — формальнее.

### DONDE / ADONDE — место
- \`donde\` = «где»: \`la ciudad **donde** vivo\`
- \`adonde\` = «куда»: \`el lugar **adonde** voy\`
- \`en donde\` = «в котором месте»: \`el café **en donde** nos vimos\`

### COMO / CUANDO / CUANTO (относительные наречия)
- \`**como**\` = «как»: \`Hazlo **como** te dije.\`
- \`**cuando**\` = «когда»: \`Vendré **cuando** pueda.\`
- \`**cuanto**\` = «сколько»: \`Toma **cuanto** quieras.\`

### CUYO — «чей» (владение)
Согласуется с **владением**, не с владельцем:
\`el hombre **cuyo** coche\` (человек, чья машина — м.р.)
\`la mujer **cuya** casa\` (женщина, чей дом — ж.р.)
\`los niños **cuyos** juguetes\` (дети, чьи игрушки)

> 💡 Формальный регистр: \`el coche **del cual**\` вместо \`el coche **cuyo**\`,
> но \`cuyo\` точнее и короче.`,
  },
  {
    slug: "b2-conectores",
    title: "Коннекторы и связки",
    titleEs: "Conectores Discursivos",
    level: "B2",
    category: "Синтаксис",
    summary: "además, sin embargo, por lo tanto — логические связки для связной речи.",
    content: `## Коннекторы (conectores discursivos)

### Addition (добавление)
- **además** — кроме того, более того
- **también** — также
- **asimismo** — равным образом (формально)
- **por otra parte** — с другой стороны
- **incluso** — даже

### Contrast (противопоставление)
- **pero** — но
- **sin embargo** — однако
- **no obstante** — тем не менее (формально)
- **aunque** — хотя
- **en cambio** — зато, напротив
- **por el contrario** — наоборот

### Cause (причина)
- **porque** — потому что
- **como** — так как (в начале предложения)
- **ya que** — поскольку
- **debido a que** — из-за того что
- **puesto que** — поскольку (формально)

### Consequence (следствие)
- **por lo tanto** — следовательно
- **por eso** — поэтому
- **así que** — так что
- **por consiguiente** — следовательно (формально)
- **entonces** — тогда, итак

### Condition (условие)
- **si** — если
- **a menos que** — если не (⚠️ требует subjuntivo)
- **con tal de que** — при условии что (⚠️ subjuntivo)
- **en caso de que** — в случае если (⚠️ subjuntivo)
- **aunque** — хотя (⚠️ subjuntivo если гипотетично)

### Purpose (цель)
- **para que** — чтобы (⚠️ subjuntivo)
- **a fin de que** — с тем чтобы (⚠️ subjuntivo)
- **con el objetivo de** + infinitivo — с целью

> 💡 Уровень B2/C1 = умение **варьировать** коннекторы, не повторять
> \`porque\` и \`pero\` постоянно.`,
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
  {
    slug: "c1-subjuntivo-avanzado",
    title: "Subjuntivo: тонкие случаи",
    titleEs: "Subjuntivo: Usos Avanzados",
    level: "C1",
    category: "Наклонения",
    summary: "Сомнительные и устойчивые случаи: aunque, donde, como, relativas.",
    content: `## Subjuntivo — продвинутые случаи (C1)

### Aunque (хотя) — indicativo vs subjuntivo
- **Indicativo** (факт известен): \`**Aunque** llueve, salgo.\` (Хотя идёт дождь — я знаю это.)
- **Subjuntivo** (гипотетично/неизвестно): \`**Aunque llueva**, saldré.\` (Даже если пойдёт дождь — не знаю, будет ли.)

### Donde (где) — indicativo vs subjuntivo
- \`Vive **donde** todos viven.\` (там, где все живут — известное место)
- \`Vivirá **donde pueda**.\` (там, где сможет — гипотетично) ⚠️ subjuntivo

### Como (как) — indicativo vs subjuntivo
- \`Hazlo **como** te enseñé.\` (как я показал — известный способ)
- \`Hazlo **como quieras**.\` (как хочешь — гипотетично) ⚠️ subjuntivo

### Относительные с неопределённым антецедентом
- \`Busco a alguien que **habla** ruso.\` (я знаю, что такой человек есть) → indicativo
- \`Busco a alguien que **hable** ruso.\` (не уверен, есть ли такой) → **subjuntivo**

### Устойчивые выражения
- \`**Sea como sea**\` — как бы то ни было
- \`**Pase lo que pase**\` — что бы ни случилось
- \`**Cueste lo que cueste**\` — любой ценой
- \`**Digan lo que digan**\` — что бы ни говорили

### После отрицательных эмоций/оценок
\`No creo que **tenga** razón.\` (не думаю, что он прав)
\`No es cierto que **haya** venido.\` (не верно, что он пришёл)

> ⚠️ Главное правило C1: **Subjuntivo = неизвестность / гипотетичность /
> субъективность**. Если факт реален и известен — Indicativo.`,
  },
  {
    slug: "c1-indirecto-avanzado",
    title: "Косвенная речь (продв.)",
    titleEs: "Estilo Indirecto Avanzado",
    level: "C1",
    category: "Синтаксис",
    summary: "Полная система трансляции времён в косвенной речи + вопросы и приказы.",
    content: `## Estilo Indirecto — полная система (C1)

### Трансляция времён (после главного глагола в прошедшем)

| Прямая речь | → Косвенная речь |
|---|---|
| presente | imperfecto |
| pret. perfecto | pluscuamperfecto |
| pret. indefinido | pluscuamperfecto |
| imperfecto | imperfecto (не меняется) |
| futuro simple | condicional simple |
| condicional | condicional (не меняется) |
| presente subj. | imperfecto subj. |
| perfecto subj. | pluscuamperfecto subj. |

### Трансляция указателей
| Прямая | Косвенная |
|---|---|
| hoy | aquel/ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |
| ahora | entonces |

### Косвенные вопросы
\`¿Vendrás? → Me pregunta si **vendré**.\`
\`¿Dónde vives? → Me pregunta **dónde vivo**.\` (нет инверсии, нет ¿?)

⚠️ В косвенном вопросе **нет** знаков \`¿?\` и нет инверсии подлежащего.

### Косвенные приказы
\`¡Hazlo! → Me dice que **lo haga**.\` (imperativo → subjuntivo)
\`¡No salgas! → Me dice que **no salga**.\`

### После главного глагола в presente (dice)
Времена **не меняются**: \`Dice: \"Vengo\" → Dice que **viene**.\`
Меняются только лица/местоимения.

### Сложные случаи (C1)
- \`Dijo: \"Si supiera, iría\" → Dijo que si **supiera**, **iría**.\`
  (Условные конструкции сохраняются)
- \`Pensaba: \"¿Qué haré?\" → Se preguntaba **qué haría**.\`
  (Внутренний монолог)

> 💡 Главная ошибка на C1 — забыть изменить **указатели времени/места**:
> \`ayer → el día anterior\`, \`aquí → allí\`.`,
  },
  {
    slug: "c1-pronombres-avanzado",
    title: "Местоимения (продв.)",
    titleEs: "Pronombres Avanzados",
    level: "C1",
    category: "Местоимения",
    summary: "lo + прилагательное, дублирование, leísmо, reduplicación — тонкости.",
    content: `## Местоимения — продвинутые случаи (C1)

### LO нейтральное (lo + прилагательное/наречие)
\`**Lo** bueno de España.\` — Хорошее (то хорошее) в Испании.
\`**Lo** importante es estudiar.\` — Важно то, что надо учиться.
\`**Lo** más difícil.\` — Самое сложное.

Формула: \`lo + прилагательное (м.р.)\` = абстрактное существительное.

### Дублирование дополнений (redundancia)
В испанском дублирование **нормально** и часто **обязательно**:

\`**A María la** veo.\` — Марию я её вижу. (повтор через \`a\`)
\`**A Juan le** di el libro.\` — Хуану я ему дал книгу.

⚠️ \`a + имя\` (личное \`a\`) + местоимение-дубликат — это **норма**, не ошибка.

### LEÍSMO / LAÍSMO / LOÍSMO
Региональные отклонения от нормы:
- **Leísmo** (часто в Испании): \`le\` вместо \`lo\` для мужского OD.
  \`A Juan **le** veo\` (норма: \`lo veo\`) — допустимо для лиц м.р.
- **Laísmo** (Мадрид): \`la\` вместо \`le\` для OI.
  \`A María **la** di el libro\` (норма: \`le\`) — **считается ошибкой**.
- **Loísmo** (редко): \`lo\` вместо \`le\` для OI — **ошибка**.

### Местоимения с предлогом
\`conmigo\` (со мной), \`contigo\` (с тобой), \`consigo\` (с собой).
⚠️ Не ~~con mí~~ / ~~con ti~~.
\`para mí\` (для меня), \`para ti\` — обычные, не \*paramigo.

### Reduplicación (подчёркивание)
\`**A él** lo vi ayer.\` — Именно его я видел вчера.
\`**A ella** le regalé flores.\` — Именно ей я подарил цветы.

> 💡 C1 = умение **естественно** дублировать (звучит по-испански),
> не избегая \`a + местоимение + OD/OI\`.`,
  },
  {
    slug: "c1-ser-estar-avanzado",
    title: "Ser/Estar: тонкости",
    titleEs: "Ser y Estar: Matices Avanzados",
    level: "C1",
    category: "Глаголы",
    summary: "Изменение смысла прилагательных, устойчивые конструкции, пограничные случаи.",
    content: `## Ser vs Estar — тонкие случаи (C1)

### Прилагательные, меняющие смысл
| Прилагательное | SER (постоянное) | ESTAR (состояние) |
|---|---|---|
| aburrido | скучный (характер) | ему скучно |
| listo | умный | готов |
| rico | богатый | вкусный |
| verde | зелёный (цвет) | незрелый |
| Bueno | добрый (человек) | вкусный/хороший (сейчас) |
| malo | плохой (характер) | испорченный/больной |
| vivo | живой (энергичный) | жив (не мёртв) |
| seguro | надёжный | уверенный |
| callado | молчаливый (характер) | молчит (сейчас) |
| despierto | бдительный | не спит |

### ESTAR + gerundio vs presente
\`Estoy **comiendo**.\` — Я ем (прямо сейчас, в процессе).
\`**Como**.\` — Я ем (вообще, обычно).

⚠️ Не все глаголы хорошо звучат в gerundio:
- ✅ \`estoy leyendo, está lloviendo\`
- ⚠️ ~~estoy sabiendo~~ (неправильно — \`sé\`)
- ⚠️ ~~estoy siendo~~ (редко, формально)

### SER + профессия vs ESTAR + de
\`Es **profesor**.\` — Он преподаватель (профессия).
\`Está **de** profesor.\` — Он работает (временно) преподавателем.

### Хлеб/еда
\`El pan **es** fresco.\` — Хлеб свежий (вообще/по природе).
\`El pan **está** fresco.\` — Хлеб свежий (сейчас, только что испечён).

### Пассив
\`**Es** escrito por Cervantes.\` — (действие, процесс —_ser pasiva_)
\`**Está** escrito.\` — (результат — _estar + participio_)

> 💡 Универсальная подсказка C1: **SER = идентичность**, **ESTAR = состояние/результат**. Если сомневаешься — спроси «это определение или текущее состояние?».`,
  },
  {
    slug: "c2-ironia-registry",
    title: "Ирония и регистр",
    titleEs: "Ironía y Registro (C2)",
    level: "C1",
    category: "Стилистика",
    summary: "Ироничное сослагательное, формальный/неформальный регистр, речевые тактики.",
    content: `## Ирония и регистр (C1-C2)

### Ироничное сослагательное (Subjuntivo irónico)
Используется для **вежливой критики** или иронии:

- \`¡**Que** sea muy feliz!\` — «Будь очень счастлив!» (иронично: ну и катайся)
- \`¡**Como** si no lo supiera!\` — Как будто я не знаю! (я-то знаю)
- \`¡**Haberlo** dicho antes!\` — Надо было сказать раньше! (упрёк)
- \`¡**Ojalá** no viniera!\` — «Лучше бы не приходил» (с надеждой/иронией)

### Регистр: формальный vs неформальный

| Ситуация | Неформальный | Формальный |
|---|---|---|
| Обращение | tú | usted |
| Приветствие | ¡Hola! / ¿Qué tal? | Buenos días |
| Прощание | ¡Adiós! / ¡Chao! | Hasta luego |
| Согласие | ¡Vale! / ¡Dale! | De acuerdo |
| Просьба | ¿Puedes…? | ¿Podría…? / Le ruego… |
| Отказ | No puedo | Me temo que no es posible |
| Благодарность | ¡Gracias! | Le agradezco |

### Речевые тактики (C1-C2)
- **Смягчение (atenuación):** \`Un poco\`, \`quizás\`, \`tal vez\`, \`en cierto modo\`.
  \`Está **un poco** cansado.\` (вместо \`muy\`)
- **Уклончивость:** \`Depende\`, \`No sabría decirte\`, \`Es relativo\`.
- **Вежливое несогласие:** \`No estoy seguro de que…\`, \`Permíteme discrepar\`.

### Устойчивые формулы
- \`A ver\` — ну-ка, дай посмотреть
- \`Vaya por delante que\` — хочу заранее сказать, что…
- \`Por decirlo así\` — так сказать
- \`En cierto modo\` — в какой-то степени
- \`No es que… sino que…\` — не то чтобы…, а скорее…

### Регионализмы (языковые варианты)
- Испания: \`vosotros\`, \`coche\`, \`zumo\`, \`movil\`
- Лат. Америка: \`ustedes\`, \`carro\`, \`jugo\`, \`celular\`
- Аргентина: \`vos\` (вместо \`tú\`), \`che\` (эй)
- Мексика: \`mande\` (что?, переспрос вежливо)

> 💡 C2 = способность **менять регистр** мгновенно, понимать иронию и
> использовать сарказм через грамматику (особенно subjuntivo).`,
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
