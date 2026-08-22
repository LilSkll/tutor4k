import type { GrammarTopic } from "@/types";

// =====================================================================
// Grammar reference data
// ---------------------------------------------------------------------
// Curated STATIC topics grouped by CEFR level (A1 → C2).
// Pedagogy (visible as «Перед этой темой» in each article):
//   A1  — decode jargon, persons (я/ты), full exceptions.
//   A2  — assume Presente + el/la; teach past/future in full.
//   B1  — assume past tenses; teach mood (subjuntivo) in full, then shorter.
//   B2+ — short bridge + contrast/traps; no beginner padding.
// Articles in the Grammar UI are never AI-generated. "Ask tutor" uses the orchestrator.
// =====================================================================

export const GRAMMAR_TOPICS: GrammarTopic[] = [

  {
    slug: "a1-ser-estar",
    title: "Ser / Estar",
    titleEs: "Ser y Estar",
    level: "A1",
    category: "Глаголы",
    exam: "DELE",
    summary: "Первая тема: приветствия и два глагола «быть» — ser (кто ты) и estar (как ты сейчас).",
    content: `> **Перед этой темой:** это **первая** грамматическая тема курса. **В этой теме:** с нуля — местоимения (yo, tú) и два глагола «быть»: **ser** и **estar**.

## Приветствия и знакомство

В испанском вопрос пишут с **двумя** знаками: \`¿…?\`

| Español | Русский |
|---|---|
| **Hola** | Привет |
| **Buenos días** | Доброе утро |
| **Buenas tardes** | Добрый день / вечер |
| **Buenas noches** | Доброй ночи |
| **Adiós / Hasta luego** | Пока / До скорого |
| **¿Cómo te llamas?** | Как тебя зовут? |
| **Me llamo…** | Меня зовут… |
| **Mucho gusto** | Очень приятно |
| **¿Cómo estás?** | Как дела? (состояние сейчас) |
| **Bien, gracias** | Хорошо, спасибо |

> 💡 После приветствия часто спрашивают имя: \`Hola, ¿cómo te llamas?\`

## Кто говорит — я, ты, он…

Глагол **меняется по лицу**. Запомните эту таблицу — она нужна во всём курсе.

| По-русски | Местоимение | Когда |
|---|---|---|
| я | **yo** | говорящий |
| ты | **tú** | один человек, на «ты» |
| он / она / вы (вежливо, один) | **él / ella / usted** | одна форма глагола на троих |
| мы | **nosotros / nosotras** | -as, если все женщины |
| вы (мн., Испания) | **vosotros / vosotras** | в Лат. Америке почти не используют |
| они / вы (мн. вежливо) | **ellos / ellas / ustedes** | в Лат. Америке *ustedes* = «вы» многим |

## Два глагола «быть»: ser и estar

В русском одно «есть / являюсь». В испанском **два** разных глагола.

### SER — кто / какой **по сути**

**Правило:** кто ты, какой всегда, откуда, который час → **ser**.

- \`Yo **soy** profesor.\` — Я преподаватель.
- \`Ella **es** de México.\` — Она из Мексики.
- \`El cielo **es** azul.\` — Небо синее (вообще).
- \`**Son** las tres.\` — Три часа. (время — тоже ser)

| Кто | SER |
|---|---|
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros | **somos** |
| vosotros | **sois** |
| ellos / ustedes | **son** |

### ESTAR — как / где **сейчас**

**Правило:** где и как себя чувствуешь **сейчас** → **estar**.

- \`**Estoy** cansado.\` — Я устал (сейчас).
- \`El libro **está** en la mesa.\` — Книга на столе.

| Кто | ESTAR |
|---|---|
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ustedes | **están** |

## Как выбрать

1. Говорим **кто это / какой всегда / откуда / который час** → **ser**.
2. Говорим **где / как себя чувствует / временное** → **estar**.

Подсказка (не зубрить английские буквы):
- **ser**: описание, профессия, характер, время, происхождение, отношения;
- **estar**: поза, место, действие на -ando/-iendo, состояние, эмоция.

> ⚠️ Одно прилагательное — два смысла: \`es aburrido\` (скучный человек) vs \`está aburrido\` (ему сейчас скучно).
> \`estar frío\` про предмет («холодный»); про человека «мне холодно» — тема *tener* (\`tengo frío\`).`,
  },

  {
    slug: "a1-presente",
    title: "Presente",
    titleEs: "Presente de Indicativo",
    level: "A1",
    category: "Глаголы",
    summary: "Настоящее время: три группы глаголов (-ar / -er / -ir) и как меняется окончание.",
    content: `> **Перед этой темой:** вы уже знаете **soy** и **estoy**. **В этой теме:** как строить любое действие в настоящем времени — hablo, como, vivo.

## Что такое Presente

**Presente** = настоящее. Словарная форма глагола — **инфинитив** (ещё не «я/ты»): hablar, comer, vivir.

Окончание инфинитива говорит, к какой семье относится глагол:
- **-ar** — самая большая семья (\`hablar\` — говорить);
- **-er** (\`comer\` — есть);
- **-ir** (\`vivir\` — жить).

Отбрасываем -ar / -er / -ir и ставим окончание **по лицу** (я / ты / он…).

## Правильные глаголы

«Правильный» = окончания как в таблице, корень не ломается.

| Кто | -AR hablar | -ER comer | -IR vivir |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él / ella / usted | habl**a** | com**e** | viv**e** |
| nosotros | habl**amos** | com**emos** | viv**imos** |
| vosotros | habl**áis** | com**éis** | viv**ís** |
| ellos / ustedes | habl**an** | com**en** | viv**en** |

Целиком: \`habláis\`, \`coméis\`, \`vivís\`.

> yo почти всегда заканчивается на **-o**. vosotros в Лат. Америке заменяют на ustedes (форма как ellos).

## Когда так говорят

- Сейчас / обычно: \`Trabajo en Madrid.\`
- Факт: \`El agua hierve a 100°C.\`
- Близкое будущее: \`Mañana **voy** al cine.\` (идти — неправильный, см. ниже)

## Самые нужные неправильные

«Неправильный» = корень или окончание не как в таблице. Их учат списком; **ser** и **estar** вы уже знаете.

| Глагол | yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| **ser** быть (суть) | soy | eres | es | somos | sois | son |
| **estar** быть (сейчас) | estoy | estás | está | estamos | estáis | están |
| **ir** идти | voy | vas | va | vamos | vais | van |
| **tener** иметь | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **hacer** делать | hago | haces | hace | hacemos | hacéis | hacen |

Часть глаголов меняет гласную **только** в ударном слоге (не у nosotros / vosotros):
\`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`. Полный список — в теме «Частые глаголы».`,
  },

  {
    slug: "a1-articulos",
    title: "Артикли",
    titleEs: "Artículos",
    level: "A1",
    category: "Determinantes",
    summary: "Артикли el, la, un, una: конкретная вещь или «какая-то»; особый случай — el agua (не la abuela).",
    content: `> **Перед этой темой:** вы уже знаете **ser/estar** и **настоящее время** (hablo, soy). **В этой теме:** артикли перед существительным — **el, la, un, una** — и когда какой ставить.

## Что такое артикль

**Правило:** артикль — короткое слово **перед** предметом. Оно говорит: известное или какое-то, одно или много, мужской или женский род.

В словарях: **m.** = masculino = мужской, **f.** = femenino = женский. Singular = одна вещь, plural = много.

## Известная конкретная вещь

**Правило:** знакомая / конкретная вещь → **el / la / los / las**.

| | Одна вещь | Много вещей |
|---|---|---|
| мужской род | **el** libro | **los** libros |
| женский род | **la** casa | **las** casas |

Пример: \`el sol\`, \`la casa de Ana\`, \`los libros en la mesa\`.

## Неизвестная или «какая-то» вещь

**Правило:** ещё не названа, любая или «одна из» → **un / una / unos / unas**.

| | Одна вещь | Много вещей |
|---|---|---|
| мужской род | **un** libro | **unos** libros |
| женский род | **una** casa | **unas** casas |

Пример: \`un libro interesante\`, \`una casa nueva\`.

## Исключение: el agua — не la abuela

**Правило:** **el agua**, но **la abuela**. Нужна ударная первая **a**, не любая буква a.

Ставим **el** (или **un**) перед **женским** словом, только если **все** условия сразу:

1. слово женского рода;
2. говорим про **одну** вещь;
3. слово начинается на **a** или **ha**;
4. сила голоса падает на **эту первую a** (как **Á-gua**). Знака ´ может не быть — важен звук, не написание.

Тогда: \`el agua\`, \`el águila\`, \`el hacha\`, \`el aula\`, \`el hambre\`.

Слово **остаётся женским**: \`el agua fría\` (не *frío*). Во множественном исключение снимается — снова по роду: \`las aguas\`, \`las águilas\`, \`las aulas\`.

**Сюда не входит** (первая a безударная):

| Слово | Где сила голоса | Как говорят |
|---|---|---|
| abuela | a-**BUE**-la | **la** abuela, **las** abuelas |
| amiga | a-**MI**-ga | **la** amiga |
| harina | ha-**RI**-na | **la** harina |
| habitación | на **-ció-** | **la** habitación |

> ⚠️ Частая ошибка: *el abuela*. Правильно **la abuela**.
> Если между артиклем и словом стоит другое слово, снова **la**: \`la misma agua\`, \`la amplia aula\`.

## Другие исключения

### Профессия после ser — без артикля

**Правило:** после *ser* профессия обычно **без** артикля. Конкретный человек — **с** артиклем.

- \`Soy profesora.\` — я преподавательница (роль).
- \`La profesora es Ana.\` — эта преподавательница — Ана.

### Язык: hablo español

**Правило:** «говорю на языке» — без артикля. Язык как предмет разговора — с **el**.

- \`Hablo español.\`
- \`El español es fácil.\`

### Дни недели: el lunes / los lunes

**Правило:** день = **el lunes** (в этот понедельник). Привычка = **los lunes** (по понедельникам).

### a + el = al, de + el = del

**Правило:** **a + el → al**, **de + el → del**. С **la** не сливаются: *a la*, *de la*. Перед agua: \`al agua\`, \`del agua\`.

### el problema, la mano

**Правило:** род слова — тема «Род и число». Здесь только не путать с артиклем: \`el problema\`, \`el tema\`, но \`la mano\`, \`la foto\`.

## Как выбрать за 4 шага

**Правило:** число → род → известное/какое-то → только потом проверка *el agua*.

1. Одна вещь или много?
2. Мужской род или женский? (род слова **не** меняется из‑за el agua)
3. Конкретная известная вещь (**el / la / los / las**) или «какая-то» (**un / una / unos / unas**)?
4. Если женский + одна вещь + начало на ударное **a / ha** → **el** / **un**. Во множественном всегда **las** / **unas**.`,
  },

  {
    slug: "a1-genero-numero",
    title: "Род и число",
    titleEs: "Género y Número",
    level: "A1",
    category: "Существительные",
    summary: "Род и число существительных: мужской/женский, один/много; исключения problema, mano, agua.",
    content: `> **Перед этой темой:** вы уже знаете **el, la, un, una**. **В этой теме:** почему la casa, но el problema — и почему нельзя сказать *el abuela*.

## Мужской и женский род

У каждого существительного в испанском есть род. Он **не** всегда совпадает с полом в жизни и **не** всегда логичен.

В словарях: **m.** = masculino = мужской, **f.** = femenino = женский.

| Обычно так | Род | Примеры |
|---|---|---|
| слово на **-o** | мужской | el libro, el perro |
| слово на **-a** | женский | la casa, la gata |
| **-ción / -sión** | женский | la canción, la televisión |
| **-dad / -tad** | женский | la ciudad, la libertad |
| на согласную | смотри словарь | el lápiz / la pared |

**Исключения по окончанию:**
- на **-a**, но мужские: \`el problema\`, \`el mapa\`, \`el día\`, \`el tema\`, \`el idioma\`;
- на **-o**, но женские: \`la mano\`, \`la foto\`, \`la radio\`, \`la moto\`.

Артикль **el** перед \`el agua\` **не** делает слово мужским — см. тему «Артикли». Правильно \`el agua fría\`, во множественном \`las aguas\`. Не путать с \`**la** abuela\` (ударение на **-bue-**, не на первой a).

## Один или много

- После гласной добавляем **-s**: \`libro → libros\`, \`mesa → mesas\`
- После согласной — **-es**: \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c перед -es)
- Ударение в письме может исчезнуть: \`el programa → los programas\`

> ⚠️ Артикль, прилагательное и существительное совпадают по роду и количеству: \`la casa blanca\`, \`los coches rojos\`, \`el agua fría\`.`,
  },

  {
    slug: "a1-numeros-1-100",
    title: "Числа, дни и время",
    titleEs: "Números, días y la hora",
    level: "A1",
    category: "Лексика",
    summary: "Числа 1–100, дни недели, месяцы и как сказать время: es la una, son las dos.",
    content: `> **Перед этой темой:** вы уже знаете **el, la** и род существительных. **В этой теме:** числа, дни недели и как сказать время (**la una**, **las dos**).

## Числа 1–100

| Диапазон | Пример |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| десятки+единицы | treinta y uno, cuarenta y cinco |

**Особенности:**
- \`uno → un\` перед предметом: \`un libro\` (не \`uno libro\`)
- \`veintiún\` перед мужским родом: \`veintiún años\`
- \`cien\` (ровно 100) vs \`ciento\` (перед другим числом): \`ciento uno\`

> 💡 Возраст: \`Tengo veinte años.\` Цены: \`Cuesta cinco euros.\`

## Días de la semana

| Español | Русский |
|---|---|
| **lunes** | понедельник |
| **martes** | вторник |
| **miércoles** | среда |
| **jueves** | четверг |
| **viernes** | пятница |
| **sábado** | суббота |
| **domingo** | воскресенье |

**Как говорить о днях:**
- Дни недели обычно **с маленькой буквы**: \`el lunes\`
- **el lunes** = в понедельник (конкретно)
- **los lunes** = по понедельникам (регулярно)
- \`Hoy es viernes.\` — Сегодня пятница.
- \`Nos vemos el martes.\` — Увидимся во вторник.

> 💡 В испанском нет отдельного слова «на» для дней: не \`en lunes\`, а \`el lunes\` / \`los lunes\`.

## Meses del año

| Español | Русский |
|---|---|
| **enero** | январь |
| **febrero** | февраль |
| **marzo** | март |
| **abril** | апрель |
| **mayo** | май |
| **junio** | июнь |
| **julio** | июль |
| **agosto** | август |
| **septiembre** | сентябрь |
| **octubre** | октябрь |
| **noviembre** | ноябрь |
| **diciembre** | декабрь |

**Как говорить о месяцах:**
- Месяцы тоже обычно **с маленькой буквы**
- **en enero** = в январе
- Дата: \`el 5 de mayo\` — 5 мая
- \`Mi cumpleaños es en marzo.\` — Мой день рождения в марте.

## La hora — время на часах

Вопрос: **¿Qué hora es?** / **¿Tienes hora?**

### Главное правило — артикль перед часами
| Время | Форма | Почему |
|---|---|---|
| 1:00 | **Es la una** | одна вещь → **la** (как в артиклях) |
| 2:00–12:00 | **Son las dos** | много → **las** |

❌ Неправильно: \`Es una\`, \`Son dos\`  
✅ Правильно: \`Es **la** una\`, \`Son **las** tres\`

### Минуты
| Выражение | Пример | Значение |
|---|---|---|
| y … | Son las tres **y diez** | 3:10 |
| y cuarto | Son las cuatro **y cuarto** | 4:15 |
| y media | Son las cinco **y media** | 5:30 |
| menos cuarto | Son las seis **menos cuarto** | 5:45 |

### В какое время? → **a + la/las**
- \`a la una\` — в час
- \`a las tres\` — в три
- \`La clase es **a las** nueve.\` — Урок в девять.

### Часть суток
- **de la mañana** — утром (примерно до 12)
- **de la tarde** — днём/вечером (после полудня)
- **de la noche** — ночью
- \`Son las ocho de la mañana.\`

> 💡 Запомни пару: **Es la una** / **Son las…** и всегда ставь артикль \`la\` / \`las\`.`,
  },

  {
    slug: "a1-preposiciones-lugar",
    title: "Предлоги места",
    titleEs: "Preposiciones de Lugar",
    level: "A1",
    category: "Предлоги",
    summary: "Предлоги места: en, a, de, sobre, debajo, delante — где что находится.",
    content: `> **Перед этой темой:** вы уже знаете **числа, дни недели и время**. **В этой теме:** предлоги места — en, a, de, sobre, debajo — и **estar** для «где?».

## Основные предлоги места

| Предлог | Значение | Пример |
|---|---|---|
| **en** | в/на | El libro está **en** la mesa |
| **a** | к/в (движение) | Voy **a** Madrid |
| **de** | из/от | Soy **de** Rusia |
| **sobre** | на (сверху) | La lámpara está **sobre** la mesa |
| **debajo de** | под | El gato está **debajo de** la silla |
| **delante de** | перед | El coche está **delante de** la casa |
| **detrás de** | за | El jardín está **detrás de** la casa |
| **entre** | между | Entre tú y yo |
| **cerca de** | рядом | La tienda está **cerca de** aquí |
| **lejos de** | далеко | Vive **lejos de** la ciudad |

### Важное правило
**Estar + место** — где находится: \`Estoy en casa.\` (\`estar\`, не ser)
**Ir + a + место** — куда идёт: \`Voy al cine.\`

Слияние (как в артиклях): **a + el = al**, **de + el = del**. С **la** не сливаются: a la, de la.

> ⚠️ \`en\` = в / на (внутри или на поверхности, без движения). \`a\` = к / в при движении.
> \`Soy de Rusia\` (происхождение — ser + de), не *estoy de Rusia*.`,
  },

  {
    slug: "a1-tener-expressions",
    title: "Выражения с tener",
    titleEs: "Expresiones con Tener",
    level: "A1",
    category: "Глаголы",
    summary: "Выражения с tener: tener hambre, frío, sueño, razón — «у меня голод», не через estar.",
    content: `> **Перед этой темой:** вы уже знаете **предлоги места** (en, a, de) и **ser / estar**. **В этой теме:** состояния через **tener** — hambre, frío, sueño, razón.

## Выражения с tener

**Tener** = иметь. Формы настоящего: tengo, tienes, tiene, tenemos, tenéis, tienen.

Многие состояния по-русски — «я голодный / мне холодно». По-испански чаще **не estar**, а **tener**.

| Испанский | Русский | Не путать с |
|---|---|---|
| tener **hambre** | голоден | не *estoy hambriento* в быту |
| tener **sed** | хочется пить | |
| tener **frío** | мне холодно | \`estar frío\` = предмет холодный |
| tener **calor** | мне жарко | \`estar caliente\` про предмет |
| tener **sueño** | хочется спать | |
| tener **miedo** | боюсь | |
| tener **suerte** | повезло | |
| tener **razón** | прав | |
| tener **prisa** | спешу | |
| tener **ganas de** + инфинитив | хочется сделать | |
| tener **X años** | мне X лет | не *soy 20 años* |

### Примеры
\`Tengo hambre. Vamos a comer.\`
\`¿Tienes frío? — Sí, tengo mucho frío.\`
\`No tienes razón.\`
\`Tengo ganas de viajar.\`
\`Tengo veinte años.\`

> ⚠️ Меняется **tener**, не «голод»: \`Tenemos hambre\`, \`Tienen sueño\`.`,
  },

  {
    slug: "a1-gustar",
    title: "Глагол gustar",
    titleEs: "Verbo Gustar",
    level: "A1",
    category: "Глаголы",
    summary: "Глагол gustar: «мне нравится кофе» = me gusta el café, а не «я нравлюсь кофе».",
    content: `> **Перед этой темой:** вы уже знаете **tener hambre / frío / sueño** и другие выражения с **tener**. **В этой теме:** глагол **gustar** — «мне нравится» строится иначе, чем в русском.

## Gustar — «быть приятным»

В русском: *я люблю кофе* (я — подлежащее).
В испанском буквально: *кофе приятен мне*. Меняется **gusta / gustan** по тому, **что** нравится, а me / te / le — кому.

### Одна вещь или много

| Что нравится | Форма |
|---|---|
| одна вещь / инфинитив | **Me gusta** el café / **me gusta** viajar |
| много вещей | **Me gustan** los libros |

| Кому | Одна | Много |
|---|---|---|
| мне | me gusta | me gustan |
| тебе | te gusta | te gustan |
| ему / ей / вам (usted) | le gusta | le gustan |
| нам | nos gusta | nos gustan |
| вам (vosotros) | os gusta | os gustan |
| им / вам (ustedes) | les gusta | les gustan |

### Усиление
\`Me gusta **mucho** el café.\` — очень нравится.
\`No me gusta **nada** el té.\` — совсем не нравится.

### Кому именно (a + имя)
\`A **María** le gusta el flamenco.\`
\`A **mí** me gusta el café.\` — именно мне (ударение).

> 💡 Так же работают \`encantar\` (обожать), \`interesar\`, \`doler\` (болеть): \`Me duele la cabeza\` / \`Me duelen los pies\`.
> Частая ошибка: *yo gusto el café*. Правильно **me gusta el café**.`,
  },

  {
    slug: "a1-preguntas",
    title: "Вопросительные предложения",
    titleEs: "Oraciones Interrogativas",
    level: "A1",
    category: "Синтаксис",
    summary: "Вопросительные слова: qué, quién, dónde, cuándo, cómo, por qué и знаки ¿…?",
    content: `> **Перед этой темой:** вы уже знаете **gustar** (me gusta…) и базовые вопросы из темы ser/estar (¿Cómo estás?). **В этой теме:** остальные вопросительные слова и **¿?** в письме.

## Вопросительные слова

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
- **Qué** = «что это такое» (определение): \`¿Qué es esto?\`
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
    summary: "Частые неправильные глаголы: ir, tener, hacer, poder, querer, decir.",
    content: `> **Перед этой темой:** вы прошли **вопросы** (qué, dónde, ¿…?). **В этой теме:** частые неправильные глаголы — ir, tener, hacer, poder, querer, decir.

## Самые нужные неправильные (настоящее)

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

  // ----- A2 ---------------------------------------------------------,

  {
    slug: "a2-preterito-perfecto",
    title: "Pretérito Perfecto",
    titleEs: "Pretérito Perfecto Compuesto",
    level: "A2",
    category: "Прошедшие времена",
    summary: "Pretérito Perfecto — прошлое, связанное с «сейчас»: he comido, has ido.",
    content: `> **Перед этой темой:** вы завершили **A1** (включая **частые глаголы**). **В этой теме:** **Pretérito Perfecto** — прошлое, связанное с настоящим: he comido, has ido.

## Pretérito Perfecto — «уже сделал, и это про сейчас»

Русскому «я поел / я уже был в Испании» часто соответствует эта форма.

### Формула: **haber** + **participio**

**haber** (только как вспомогательный, не «иметь»): he, has, ha, hemos, habéis, han

**Participio** — форма «сделанный / съеденный»:
- -AR → **-ado**: hablar → hablado
- -ER / -IR → **-ido**: comer → comido, vivir → vivido

| Кто | Пример |
|---|---|
| yo | **he** comido |
| tú | **has** comido |
| él / ella / usted | **ha** comido |
| nosotros | **hemos** comido |
| vosotros | **habéis** comido |
| ellos / ustedes | **han** comido |

### Неправильные participios (список)

| Инфинитив | Participio |
|---|---|
| hacer | **hecho** |
| ver | **visto** |
| poner | **puesto** |
| escribir | **escrito** |
| abrir | **abierto** |
| decir | **dicho** |
| volver | **vuelto** |

### Когда так, а когда нет
- Период **ещё не закрыт** (сегодня, на этой неделе, в этом году): \`Hoy **he** comido paella.\`
- Опыт жизни: \`¿**Has** estado en España?\`
- Результат до сих пор важен: \`**He** perdido las llaves\` (и всё ещё нет ключей).

Маркеры: hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.

> ⚠️ **ayer, el año pasado, en 2020** — период закрыт → не Perfecto, а **Indefinido** (следующая тема): \`Ayer comí paella.\`
> В части Испании Perfecto любят сильнее; в Лат. Америке часто сразу Indefinido. Для экзамена учите оба.`,
  },

  {
    slug: "a2-preterito-indefinido",
    title: "Pretérito Indefinido",
    titleEs: "Pretérito Indefinido",
    level: "A2",
    category: "Прошедшие времена",
    exam: "DELE",
    summary: "Pretérito Indefinido — законченный факт в прошлом: ayer fui, en 2018 viajé.",
    content: `> **Перед этой темой:** **Perfecto** (he comido) — когда период ещё «открыт». **В этой теме:** **Indefinido** — законченный факт: ayer fui, en 2018 viajé.

## Pretérito Indefinido — факт в закрытом прошлом

### Правильные окончания

| Кто | -AR hablar | -ER / -IR comer, vivir |
|---|---|---|
| yo | habl**é** | com**í** |
| tú | habl**aste** | com**iste** |
| él / ella / usted | habl**ó** | com**ió** |
| nosotros | habl**amos** | com**imos** |
| vosotros | habl**asteis** | com**isteis** |
| ellos / ustedes | habl**aron** | com**ieron** |

Целиком: \`hablasteis\`, \`comisteis\`, \`vivisteis\`.

⚠️ У -AR формы yo / él с ударением: habl**é**, habl**ó** — иначе это настоящее (hablo, habla).
У -AR **hablamos** совпадает с настоящим — смотрите маркер (ayer vs ahora).

### Самые частые неправильные

| Инфинитив | yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| ser / ir | fui | fuiste | fue | fuimos | fuisteis | fueron |
| tener | tuve | tuviste | tuvo | tuvimos | tuvisteis | tuvieron |
| estar | estuve | estuviste | estuvo | estuvimos | estuvisteis | estuvieron |
| hacer | hice | hiciste | hizo | hicimos | hicisteis | hicieron |
| venir | vine | viniste | vino | vinimos | vinisteis | vinieron |
| decir | dije | dijiste | dijo | dijimos | dijisteis | dijeron |
| ver | vi | viste | vio | vimos | visteis | vieron |

**ser** и **ir** в прошлом **одинаковые**: \`fui\` = «я был» или «я пошёл» — по контексту.

### Когда
Действие **закончилось** в названный момент: \`Ayer fui al cine.\` \`En 2018 viví en Barcelona.\`

Маркеры: ayer, anteayer, el lunes pasado, hace dos años, en 1999.

> 💡 Indefinido = **что случилось** (толчок сюжета). Imperfecto (следующая тема) = **какой был фон**.
> \`Ayer **llovió**\` (свершилось) vs \`**Llovía**\` (стояла такая погода). Полный контраст — тема DELE «прошедшие».`,
  },

  {
    slug: "a2-imperfecto",
    title: "Pretérito Imperfecto",
    titleEs: "Pretérito Imperfecto",
    level: "A2",
    category: "Прошедшие времена",
    exam: "DELE",
    summary: "Pretérito Imperfecto — фон прошлого: привычки, описания, «когда я был ребёнком».",
    content: `> **Перед этой темой:** **Indefinido** (ayer fui) — отдельное событие. **В этой теме:** **Imperfecto** — фон прошлого: привычки, описания, «когда я был ребёнком».

## Pretérito Imperfecto — фон прошлого

Окончания спокойные: почти всегда **-aba** или **-ía**. Ударение на той же гласной во всех лицах кроме nosotros.

### Правильные окончания

| Кто | -AR | -ER / -IR |
|---|---|---|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él / ella / usted | -aba | -ía |
| nosotros | -ábamos | -íamos |
| vosotros | -abais | -íais |
| ellos / ustedes | -aban | -ían |

\`hablar\` → hablaba… **hablabais**… hablaban.

### Только 3 неправильных

| Глагол | Формы |
|---|---|
| **ser** | era, eras, era, éramos, erais, eran |
| **ir** | iba, ibas, iba, íbamos, ibais, iban |
| **ver** | veía, veías, veía, veíamos, veíais, veían |

### Когда
1. Привычка: \`Cuando era niño, **jugaba** al fútbol.\`
2. Описание: \`Hacía sol y los pájaros **cantaban**.\`
3. Фон + событие: \`Yo **leía** cuando **llamaste**.\` (читал — imperfecto, позвонил — indefinido)
4. Возраст / час в прошлом: \`**Tenía** 10 años.\` \`**Eran** las tres.\`

\`**Estaba** en casa cuando **llegó** María.\` — был дома (фон) / пришла (факт).`,
  },

  {
    slug: "a2-por-para",
    title: "Por vs Para",
    titleEs: "Por y Para",
    level: "A2",
    category: "Предлоги",
    exam: "DELE",
    summary: "Para — цель и «для кого»; por — причина, маршрут, цена, время суток.",
    content: `> **Перед этой темой:** вы уже используете **a, de, en**. **В этой теме:** два частых предлога **para** и **por** — цель, причина, цена, маршрут.

## POR vs PARA

### PARA — цель, назначение, направление
- **Цель:** \`Estudio **para** aprender.\` (чтобы научиться)
- **Получатель:** \`Es un regalo **para** ti.\` (для тебя)
- **Направление / пункт назначения:** \`El avión sale **para** Madrid.\` (куда следует; «иду в город» обычно \`Voy **a** Madrid\`)
- **Срок:** \`Para mañana.\` (к завтрашнему дню)

### POR — причина, путь, обмен, длительность
- **Причина:** \`**Por** el frío, no salí.\` (из-за холода)
- **Путь/место:** \`Paseo **por** el parque.\` (через/по)
- **Обмен:** \`Lo compré **por** 10 euros.\` (за 10 евро)
- **Длительность:** \`Estudié **durante** dos horas.\` (в течение; не калька *por dos horas*)
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
    summary: "Сравнения: más… que, menos… que, tan… como, el más…; mejor, peor, mayor.",
    content: `> **Перед этой темой:** прилагательные согласуются с родом (blanca, rojos). **В этой теме:** сравнения — más… que, tan… como, el más…

## Сравнение (comparativos)

### Обычные прилагательные
\`más + прилагательное + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\` — Мария выше Аны.
- \`Este coche es **menos caro que** el otro.\` — Этот авто дешевле.

### Равенство — tan / tanto
| Конструкция | Когда | Пример |
|---|---|---|
| **tan + прилагательное + como** | одинаковое качество | Es **tan alta como** su hermana |
| **tanto/a(s) + существительное + como** | одинаковое количество | Tiene **tantos libros como** yo |
| **igual de + прилагательное + que** | тоже «такой же» | Es **igual de inteligente que** tú |

- \`No es **tan** difícil **como** pensaba.\` — Не так сложно, как я думал.
- \`Hay **tanta** gente **como** ayer.\` — Столько же людей, сколько вчера.

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
    summary: "Futuro simple — будущее одним словом: hablaré, tendré (не только ir a + infinitivo).",
    content: `> **Перед этой темой:** «скоро сделаю» через **ir a + infinitivo** (voy a comer). **В этой теме:** **Futuro simple** одним словом — hablaré, tendré.

## Futuro Simple

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

> 💡 «Наверное, сейчас три» (\`Serán las tres\`) — это уже **C2 догадка**, не это будущее-план.`,
  },

  // ----- B1 ---------------------------------------------------------,

  {
    slug: "b1-subjuntivo",
    title: "Subjuntivo",
    titleEs: "Modo Subjuntivo (Presente)",
    level: "B1",
    category: "Наклонения",
    exam: "DELE",
    summary: "Presente de Subjuntivo — желание, сомнение, эмоция: quiero que vengas.",
    content: `> **Перед этой темой:** основные времена описывают **факты**. **В этой теме:** **subjuntivo** — когда говорим о желании, сомнении или эмоции (quiero que vengas).

## Subjuntivo — не другое время, а другой «режим»

**Indicativo** (hablo, fui, iré) = реальность.
**Subjuntivo** (hable, vaya) = отношение к тому, что для говорящего ещё не факт.

Почти всегда вторая часть с **que**: \`Quiero **que** vengas.\`
Нет другого лица / нет que → часто инфинитив: \`Quiero venir.\`

## Как образуется (настоящий subjuntivo)

Форма **yo** из Presente + смена гласной: -ar → **e**, -er/-ir → **a**.

| Кто | hablar (hablo) | comer (como) |
|---|---|---|
| yo | hable | coma |
| tú | hables | comas |
| él / ella / usted | hable | coma |
| nosotros | hablemos | comamos |
| vosotros | habléis | comáis |
| ellos / ustedes | hablen | coman |

Корень как в yo настоящего:
- tener → **tenga**, estar → **esté**, hacer → **haga**
- ser → **sea**, ir → **vaya**, saber → **sepa**
- pensar → **piense**, pedir → **pida**

## Когда ставить

1. Желание: \`Quiero que **vengas**.\`
2. Эмоция: \`Me alegra que **estés** aquí.\`
3. Сомнение: \`Dudo que **sepa** la respuesta.\`
4. Неизвестный человек/вещь: \`Busco a alguien que **hable** ruso.\`
5. Цель / «до»: para que, antes de que; aunque — если гипотеза.

> ⚠️ \`Creo que **viene**.\` — уверен → обычное настоящее.
> \`No creo que **venga**.\` — не верю → subjuntivo.
> Дальше те же кнопки в прошлом (imperfecto de subjuntivo) и в сложных формах (haya hablado).`,
  },

  {
    slug: "b1-imperativo",
    title: "Imperativo",
    titleEs: "Modo Imperativo",
    level: "B1",
    category: "Наклонения",
    exam: "DELE",
    summary: "Imperativo — приказы и просьбы: habla, no hables, venga.",
    content: `> **Перед этой темой:** вы уже знаете формы **subjuntivo** (hable, comas). **В этой теме:** **Imperativo** — приказы и просьбы: habla, no hables.

## Imperativo

### Утвердительная форма (afirmativo)

Повелительное для **tú / usted / nosotros / vosotros / ustedes** совпадает с **presente de subjuntivo** (кроме утвердительных **tú** и **vosotros**).

| Лицо | -AR | -ER | -IR | Частые особые |
|---|---|---|---|---|
| **tú** | habl**a** | com**e** | viv**e** | ten, pon, ven, sal, haz, di, sé, ve |
| **usted** | habl**e** | com**a** | viv**a** | sea, vaya, dé |
| **nosotros** | habl**emos** | com**amos** | viv**amos** | vamos, demos |
| **vosotros** | habl**ad** | com**ed** | viv**id** | — |
| **ustedes** | habl**en** | com**an** | viv**an** | sean, vayan |

Целиком: \`hablad\`, \`comed\`, \`vivid\`. Отрицание vosotros: \`no habléis\`, \`no comáis\`, \`no viváis\`.

> ⚠️ **nosotros**: у -AR → **-emos** (\`hablemos\`), у -ER/-IR → **-amos** (\`comamos\`, \`vivamos\`). Это **не** как в presente de indicativo (\`hablamos\` / \`comemos\`).

### Отрицательная форма (negativo) = Subjuntivo
Всегда формы subjuntivo + \`no\` перед глаголом:
- \`No **hables**\`, \`No **comas**\`, \`No **vivas**\`
- \`No **hablemos**\`, \`No **comamos**\`
- Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`

### Особые формы tú (только утвердительно)
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

> 💡 В отрицании особые формы не используются: \`ten\` → \`no **tengas**\`, \`ve\` → \`no **vayas**\`, \`sal\` → \`no **salgas**\`.

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
    summary: "Condicional — «я бы» и вежливые просьбы: hablaría, podría, me gustaría.",
    content: `> **Перед этой темой:** вы уже строите **Futuro** (hablaré, tendré). **В этой теме:** **Condicional** — «я бы» и вежливые просьбы: hablaría, podría.

## Condicional Simple («я бы / не могли бы вы»)

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
    slug: "b1-pronombre-se",
    title: "Местоимения SE",
    titleEs: "Pronombre SE",
    level: "B1",
    category: "Местоимения",
    summary: "Местоимение se — пять значений: возвратное, взаимное, безличное, пассивное, «случайно».",
    content: `> **Перед этой темой:** вы знаете **Condicional** (hablaría, podría). **В этой теме:** местоимение **se** — перед главой «Voz pasiva»; por/para уже были в A2.

## Местоимение SE — пять функций, один вид

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
    summary: "Относительные местоимения: que, quien, lo que, cuyo, donde — связка двух фраз.",
    content: `> **Перед этой темой:** вы уже строите сложные предложения. **В этой теме:** слова-связки **que, quien, donde, cuyo** — чтобы соединить две фразы.

## Относительные местоимения

### QUE — самый универсальный
\`El libro **que** leo.\` — Книга, которую я читаю.
\`La mujer **que** habla.\` — Женщина, которая говорит.
- Для людей и предметов. После предлога — **el/la que**, не голое *de que*:
\`el tema **del que** hablamos\`, \`la persona **de la que** hablo\`.

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
    summary: "Pluscuamperfecto — «уже было до того»: había comido, cuando llegaste.",
    content: `> **Перед этой темой:** вы знаете **haber + participio** из Perfecto (he comido). **В этой теме:** **Pluscuamperfecto** — haber в Imperfecto: había comido.

## Pluscuamperfecto — «уже случилось до того момента»

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
    summary: "Imperfecto de Subjuntivo — «если бы» и желания в прошлом: si tuviera, quería que vinieras.",
    content: `> **Перед этой темой:** вы уже используете **subjuntivo** настоящего (quiera que vengas). **В этой теме:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.

## Subjuntivo Imperfecto

### Как образуется

Не от инфинитива и **не** как futuro (\`tendré\`, \`haré\`, \`diré\`).

Берём форму **ellos** pretérito indefinido, отбрасываем **-ron**, добавляем **-ra** (или **-se**):

| ellos в indefinido | → imperfecto de subjuntivo |
|---|---|
| habla**ron** | habla**ra**, habla**ras**, habla**ra**… |
| comie**ron** | comie**ra**… |
| tuvie**ron** | tuvie**ra**… |
| dije**ron** | dije**ra**… |
| hicie**ron** | hicie**ra**… |

Правильные: \`hablar → hablara\`, \`comer → comiera\`, \`vivir → viviera\`.
Неправильные — **корни indefinido**, не основы будущего: \`tener → tuviera\` (не *tendriera), \`decir → dijera\` (не *direra), \`hacer → hiciera\`, \`poner → pusiera\`, \`saber → supiera\`.

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
\`hablara = hablase\`, \`comiera = comiese\`. Это не «устаревшее»: **-se** чаще в письменном регистре.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = нереальное условие.
> Это одна из самых частых конструкций B1-B2.`,
  },

  {
    slug: "b1-pronombres-objetos",
    title: "Безударные местоимения",
    titleEs: "Pronombres de Objeto (OD/OI)",
    level: "B1",
    category: "Местоимения",
    summary: "Прямое и косвенное дополнение: lo/la = «это», le = «ему/ей», se lo (не le lo).",
    content: `> **Перед этой темой:** вы знаете **me / te / le** из gustar. **В этой теме:** **lo, la, le** — прямое и косвенное дополнение: lo veo, le doy, se lo digo.

## Местоимения-дополнения: что? и кому?

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
    summary: "Наречия: rápidamente (-mente), muy vs mucho; quizás + subjuntivo.",
    content: `> **Перед этой темой:** вы согласовываете прилагательные (rápida, fácil). **В этой теме:** наречия — «как?» — часто **-mente**: rápidamente, fácilmente.

## Наречия

### Образование -mente (как? каким образом?)
**Прилагательное (ж.р.) + mente:**
- \`rápida + mente = rápidamente\` (быстро)
- \`fácil + mente = fácilmente\` (легко)
- \`perfecta + mente = perfectamente\` (идеально)

⚠️ Если прилагательное имеет только форму м.р.: \`feliz → felizmente\`.

Письменное ударение **остаётся у прилагательного**, -mente его не получает: \`fácil → fácilmente\`, \`difícil → difícilmente\`.

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

  // ----- B2 ---------------------------------------------------------,

  {
    slug: "dele-contraste-pasados",
    title: "DELE: контраст прошедших времён",
    titleEs: "DELE: Contraste de Pasados",
    level: "B1",
    category: "Подготовка к DELE",
    exam: "DELE",
    summary: "DELE: как выбрать Perfecto, Indefinido или Imperfecto; Pluscuamperfecto — в главе «Два слоя прошлого».",
    content: `> **Перед этой темой:** в **A2** и **B1** вы прошли все прошедшие, включая **Pluscuamperfecto**. **В этой теме:** **DELE-сводка** — как выбрать прошедшее на экзамене.

## Контраст прошедших — ловушка №1 на DELE

В заданиях DELE (Comprensión de lectura, tarea de huecos) чаще всего проверяют выбор между четырьмя прошедшими.

### Шпаргалка выбора

| Вопрос к действию | Время | Пример |
|---|---|---|
| Что произошло? (событие, толчок сюжета) | **Indefinido** | \`Ayer **vi** a Marta.\` |
| Что было вокруг? (фон, привычка, описание) | **Imperfecto** | \`**Hacía** frío y **llovía**.\` |
| Связано с настоящим / период не закрыт | **Perfecto** | \`**He visto** a Marta esta mañana.\` |
| Раньше другого прошлого | **Pluscuamperfecto** | \`Cuando llegué, ya **se había ido**.\` |

### Маркеры-подсказки (учить наизусть)
- **Indefinido:** \`ayer\`, \`anoche\`, \`el año pasado\`, \`en 2010\`, \`de repente\`, \`entonces\`
- **Imperfecto:** \`antes\`, \`siempre\`, \`cada día\`, \`de niño\`, \`mientras\`, \`todos los veranos\`
- **Perfecto:** \`hoy\`, \`esta semana\`, \`este año\`, \`ya\`, \`todavía no\`, \`alguna vez\`, \`nunca (en mi vida)\`
- **Pluscuamperfecto:** \`ya… cuando\`, \`antes de que\`, \`nunca hasta entonces\`

### Классическая экзаменационная связка
\`**Estaba** duchándome **cuando** **sonó** el teléfono.\`
Фон (imperfecto) + событие (indefinido) — эту пару DELE спрашивает почти всегда.

### Смена смысла от времени
| Imperfecto | Indefinido |
|---|---|
| \`**Conocía** a Juan.\` — был знаком | \`**Conocí** a Juan.\` — познакомился |
| \`**Sabía** la verdad.\` — знал | \`**Supe** la verdad.\` — узнал |
| \`**Quería** salir.\` — хотел | \`**Quise** salir.\` — попытался |
| \`No **quería** ir.\` — не хотел | \`No **quiso** ir.\` — отказался |

> 💡 Испания vs Лат. Америка: в Испании \`esta mañana **he visto**\`, в большинстве стран Америки — \`esta mañana **vi**\`. DELE принимает обе нормы, но будь последователен.`,
  },

  {
    slug: "dele-carta-formal",
    title: "DELE: формальное и неформальное письмо",
    titleEs: "DELE: Carta Formal e Informal",
    level: "B1",
    category: "Подготовка к DELE",
    exam: "DELE",
    summary: "DELE письмо: обращения, вежливые просьбы, прощания — готовые формулы.",
    content: `> **Перед этой темой:** **condicional** (podría, quisiera) и формальное **usted** вы знаете. **В этой теме:** **DELE письмо** — готовые формулы обращений и просьб.

## Письмо на DELE

В письменной части почти всегда есть письмо/e-mail. Оценивают **регистр** — формулы должны соответствовать адресату.

### Формальное письмо

| Блок | Формулы |
|---|---|
| Обращение | \`Estimado señor / Estimada señora:\` · \`Muy señores míos:\` · \`A quien corresponda:\` |
| Причина письма | \`Le escribo para + inf…\` · \`Me dirijo a usted con motivo de…\` · \`Me pongo en contacto con ustedes para…\` |
| Просьба | \`Le agradecería que + subjuntivo imperfecto\` (\`…que me **enviara** más información\`) · \`¿Podría + inf…?\` · \`Le ruego (que) + subj\` |
| Жалоба | \`Me veo obligado/a a expresar mi malestar por…\` · \`Quisiera presentar una reclamación…\` |
| Завершение | \`A la espera de su respuesta, …\` · \`Sin otro particular, …\` · \`Le agradezco de antemano su atención.\` |
| Прощание | \`Atentamente,\` · \`Un cordial saludo,\` · \`Reciba un cordial saludo,\` |

> ⚠️ Всё письмо — на **usted/ustedes**. Один «tú» в формальном письме = снижение балла за adecuación.

### Неформальное письмо

| Блок | Формулы |
|---|---|
| Обращение | \`¡Hola, Ana!\` · \`Querido Pablo:\` |
| Начало | \`¿Qué tal estás? Espero que todo te vaya bien.\` · \`¡Cuánto tiempo sin saber de ti!\` |
| Тело | \`Te escribo porque…\` · \`¿Sabes qué? Resulta que…\` · \`Por cierto, …\` |
| Завершение | \`Bueno, te dejo, que…\` · \`Escríbeme pronto.\` · \`Dale recuerdos a tu familia.\` |
| Прощание | \`Un abrazo,\` · \`Un beso,\` · \`Hasta pronto,\` |

### Грамматика вежливости (поднимает балл)
- Condicional: \`**Querría** saber si…\` / \`**Me gustaría** + inf\`
- Imperfecto de cortesía: \`**Quería** pedirle un favor.\`
- \`Le agradecería que me **informara**…\` — condicional + subjuntivo imperfecto = высший пилотаж B2.

### Сколько слов писать (по уровням DELE)

| Уровень | Задание | Объём |
|---|---|---|
| A2 | Личное письмо / e-mail | **60–70 слов** |
| B1 | Письмо или e-mail (Tarea 1) | **100–120 слов** |
| B2 | Формальное письмо (Tarea 1) | **150–180 слов** |
| C1 | Письмо / текст по заданию | **220–250 слов** |

> ⚠️ Сильный недобор слов = не раскрыты все пункты задания. Большой перебор = больше ошибок и риск «воды». Держись в диапазоне ±10%.

### Скелет формального письма (5 блоков)

1. **Saludo** — \`Estimado señor:\` (1 строка)
2. **Motivo** — зачем пишешь: \`Me dirijo a usted con motivo de…\` (~20% текста)
3. **Desarrollo** — суть: факты, детали, аргументы (1–2 абзаца, ~50%)
4. **Petición / propuesta** — что просишь или предлагаешь: \`Le agradecería que…\` (~20%)
5. **Despedida** — \`A la espera de su respuesta, … Atentamente,\` + имя (1–2 строки)

### Что оценивают экзаменаторы

| Критерий | Что проверяют |
|---|---|
| **Adecuación** | Раскрыты **все пункты** задания; регистр соответствует адресату; формат письма соблюдён |
| **Coherencia** | Логичные абзацы, коннекторы, нет повторов и скачков мысли |
| **Corrección** | Грамматика: времена, согласование, орфография, пунктуация |
| **Alcance** | Разнообразие лексики и конструкций — не повторяй \`pedir\` пять раз |

> 💡 Перед сдачей: отметь галочкой каждый пункт задания в черновике. Незакрытый пункт — самая частая причина потери баллов, даже при идеальной грамматике.

> 💡 Выучи скелет письма наизусть — на экзамене останется только вставить содержание.`,
  },

  {
    slug: "b2-estilo-indirecto",
    title: "Estilo Indirecto",
    titleEs: "Estilo Indirecto (Reported Speech)",
    level: "B2",
    category: "Синтаксис",
    exam: "DELE",
    summary: "Estilo indirecto — передача чужих слов: dijo que vendría; сдвиг времён после прошедшего.",
    content: `> **Перед этой темой:** вы прошли **DELE-письмо** (condicional, формальный регистр). **В этой теме:** **estilo indirecto** — как пересказать чужие слова: dijo que vendría.

## Косвенная речь

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
    summary: "Voz pasiva — fue escrito; pasiva refleja — se habla español; estado — está cerrada.",
    content: `> **Перед этой темой:** вы прошли **estilo indirecto** и главу **Местоимение se**. **В этой теме:** **voz pasiva** — ser + participio и **se** pasiva (se habla, se venden).

## Пассив и se

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
    summary: "Subjuntivo compuesto — haya hablado, hubiera hablado (то же правило, другое время).",
    content: `> **Перед этой темой:** правило **subjuntivo** вы уже знаете. **В этой теме:** составные формы — **haya hablado**, **hubiera hablado**.

## Сложные формы Subjuntivo

### Subjuntivo Perfecto (прошедшее совершённое)
Формула: **haya** + participio

\`haya, hayas, haya, hayamos, hayáis, hayan + hablado/comido/vivido\`

Использование:
1. **Эмоция о свершившемся:**
   \`Me alegra que **hayas llegado**.\` — Я рад, что ты пришёл.
2. **Сомнение о прошлом:**
   \`Dudo que **haya** terminado.\` — Сомневаюсь, что он закончил.
3. **После «cuando» (будущее завершённое):**
   \`Cuando **hayas** terminado, avísame.\` — Когда закончишь, скажи.

### Subjuntivo Pluscuamperfecto (предпрошедшее)
Формула: **hubiera/hubiese** + participio

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubierais/hubieseis, hubieran + hablado\`

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
    summary: "Condicional compuesto — habría ido; три типа si: real, irreal, irreal в прошлом.",
    content: `> **Перед этой темой:** вы знаете **si tuviera, saldría**. **В этой теме:** хвост в прошлом — **habría** + participio — и сводка трёх типов **si**.

## Condicional Compuesto

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
    summary: "Продвинутые относительные: el cual, lo que, adonde — для формального регистра.",
    content: `> **Перед этой темой:** вы используете **que, quien, cuyo**. **В этой теме:** более формальные формы — **el cual, lo que, adonde**.

## Относительные (уровень письма B2)

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
    exam: "DELE",
    summary: "Связки для текста B2+: sin embargo, por lo tanto; часть требует subjuntivo.",
    content: `> **Перед этой темой:** porque и pero хватает до B1. **В этой теме:** связки для письменной речи — sin embargo, por lo tanto, para que…

## Связки текста

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

  // ----- C1 ---------------------------------------------------------,

  {
    slug: "dele-conectores-redaccion",
    title: "DELE: коннекторы для эссе",
    titleEs: "DELE: Conectores para la Redacción",
    level: "B2",
    category: "Подготовка к DELE",
    exam: "DELE",
    summary: "DELE сочинение: скелет абзацев (en primer lugar…) + мнение с subjuntivo.",
    content: `> **Перед этой темой:** вы прошли **voz pasiva** и главу **Коннекторы**. **В этой теме:** **DELE-сочинение** — структура текста и связки (en primer lugar, sin embargo…).

## Связки для сочинения DELE

Оценка за **coherencia** напрямую зависит от связок. Вот рабочий скелет эссе.

### Структура текста

| Функция | Коннекторы |
|---|---|
| Начало | \`En primer lugar\` · \`Para empezar\` · \`Hoy en día\` · \`Es un hecho que…\` |
| Добавление | \`Además\` · \`Asimismo\` · \`Cabe añadir que\` · \`No solo…, sino también…\` |
| Противопоставление | \`Sin embargo\` · \`No obstante\` · \`Ahora bien\` · \`Por el contrario\` · \`A pesar de que\` |
| Две стороны | \`Por un lado…, por otro (lado)…\` · \`En cuanto a…\` · \`Respecto a…\` |
| Причина | \`Debido a\` · \`Puesto que\` · \`Dado que\` · \`Ya que\` |
| Следствие | \`Por lo tanto\` · \`Por consiguiente\` · \`De ahí que + subj\` · \`Así pues\` |
| Пример | \`Por ejemplo\` · \`Como muestra\` · \`Un claro ejemplo de ello es…\` |
| Вывод | \`En definitiva\` · \`En conclusión\` · \`Para concluir\` · \`En resumen\` |

### Выражение мнения: indicativo или subjuntivo?

| Конструкция | Наклонение | Пример |
|---|---|---|
| \`Creo que / Pienso que\` | **indicativo** | \`Creo que **es** útil.\` |
| \`No creo que / Dudo que\` | **subjuntivo** | \`No creo que **sea** útil.\` |
| \`Es evidente / cierto que\` | **indicativo** | \`Es evidente que **funciona**.\` |
| \`Es importante / necesario que\` | **subjuntivo** | \`Es importante que se **regule**.\` |
| \`(No) me parece que\` | ind. / **subj.** | \`No me parece que **tenga** sentido.\` |

### Ловушки, за которые снимают баллы
- \`De ahí que\` — **всегда subjuntivo**: \`De ahí que **sea** necesario actuar.\`
- \`A pesar de **que** + verbo\`, но \`a pesar de + inf/sust\`.
- Не повторяй \`pero\` — чередуй \`sin embargo / no obstante / ahora bien\`.

### Объём эссе и тайминг

| Уровень | Объём | Рекомендуемый тайминг (на текст) |
|---|---|---|
| B1 | **130–150 слов** | 5 мин план → 20 мин текст → 5 мин проверка |
| B2 | **150–180 слов** | 5 мин план → 25 мин текст → 5 мин проверка |
| C1 | **220–250 слов** | 10 мин план → 30 мин текст → 5 мин проверка |

### Скелет эссе на 4 абзаца (с бюджетом слов для B2)

1. **Introducción** (~25–30 слов) — представь тему: \`Hoy en día…\` + тезис.
2. **Argumento 1 / a favor** (~50–60 слов) — \`En primer lugar…\` → тезис → аргумент → пример.
3. **Argumento 2 / en contra** (~50–60 слов) — \`Sin embargo…\` / \`Por otro lado…\` → контраргумент → пример.
4. **Conclusión** (~25–30 слов) — \`En definitiva…\` + собственная позиция (\`Es fundamental que + subj…\`).

### Что ожидают экзаменаторы

| Критерий | На что смотрят |
|---|---|
| **Adecuación** | Текст отвечает на **все** вопросы задания, жанр соблюдён (эссе ≠ письмо) |
| **Coherencia** | Чёткие абзацы, разнообразные коннекторы, логичная прогрессия идей |
| **Corrección** | Subjuntivo там, где нужен; согласование времён; орфография с тильдами |
| **Alcance** | Богатая лексика по теме, сложные конструкции (\`de ahí que\`, passiva refleja) |

- Заученные наизусть «универсальные» абзацы экзаменаторы распознают и **штрафуют** — учи скелет, а не готовый текст.
- Посчитай слова в конце: 3–4 слова в строке черновика × число строк — быстрый способ оценки.

> 💡 Формула абзаца B2: коннектор → тезис → аргумент → пример. Четыре абзаца — и структура готова.`,
  },

  {
    slug: "dele-expresion-oral",
    title: "DELE: устная часть",
    titleEs: "DELE: Expresión Oral",
    level: "B2",
    category: "Подготовка к DELE",
    exam: "DELE",
    summary: "DELE устная часть: описание фото, гипотезы, мнение, согласие — живая речь.",
    content: `> **Перед этой темой:** вы прошли **DELE-сочинение**. **В этой теме:** **DELE устно** — фото, мнение, согласие; гипотезы (Serán las diez…) разберём подробнее в C2 «Conjetura».

## Устная часть DELE

### Описание фотографии (tarea clásica)
Локация на фото:
- \`En primer plano se ve…\` — на переднем плане видно…
- \`Al fondo hay…\` — на заднем плане…
- \`A la derecha / izquierda aparece…\`

Гипотезы — экзаменатор ждёт **futuro de conjetura**:
- \`**Será** su madre.\` — Наверное, это его мать.
- \`**Tendrán** unos treinta años.\` — Им лет тридцать.
- \`**Estarán** celebrando algo.\` — Похоже, они что-то празднуют.
- \`Parece que + indicativo\` / \`Puede que + **subjuntivo**\` (\`Puede que **sean** amigos.\`)

### Мнение и оценка
- \`Desde mi punto de vista…\` · \`A mi modo de ver…\` · \`En mi opinión…\`
- \`Lo que más me llama la atención es…\` — больше всего привлекает внимание…
- \`Me da la impresión de que…\`

### Согласие / несогласие (interacción)
| Согласие | Несогласие |
|---|---|
| \`Estoy totalmente de acuerdo contigo.\` | \`No estoy del todo de acuerdo.\` |
| \`Tienes toda la razón.\` | \`Yo lo veo de otra manera.\` |
| \`Yo pienso lo mismo.\` | \`Entiendo tu postura, pero…\` |
| \`Sin duda.\` / \`Desde luego.\` | \`No creo que **sea** así.\` (+subj!) |

### Слова-заполнители (ganar tiempo)
\`Bueno…\` · \`Pues…\` · \`A ver…\` · \`Es que…\` · \`O sea…\` · \`¿Cómo te diría?\` · \`En fin…\`

Звучат естественно и дают секунды на раздумье — экзаменаторы оценивают это как **fluidez**.

### Стратегии компенсации (если забыл слово)
- \`Es una cosa que sirve para…\` — это штука, которой…
- \`No recuerdo la palabra exacta, pero…\`
- \`Es algo parecido a…\` — это что-то вроде…

> 💡 За минуту подготовки набросай 3 коннектора + 2 гипотезы с futuro — этого хватит на структурный монолог.`,
  },

  {
    slug: "c1-perifrasis-verbales",
    title: "Perífrasis Verbales",
    titleEs: "Perífrasis Verbales",
    level: "C1",
    category: "Глаголы",
    summary: "Перифразы: acabar de, llevar + gerundio, deber de — готовые глагольные связки.",
    content: `> **Перед этой темой:** вы знаете **ir a + inf** и **estar + -ando** с A1–A2. **В этой теме:** каталог перифраз — acabar de, llevar + gerundio, deber vs deber de.

## Perífrasis — глагол + инфинитив / -ando / -ado

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
    title: "Matices Estilísticos",
    titleEs: "Matices Estilísticos y Registros",
    level: "C1",
    category: "Стилистика",
    summary: "Регистр и вежливость: tú / usted, формулы просьбы — не новая грамматика, а уместность.",
    content: `> **Перед этой темой:** все основные формы вам знакомы. **В этой теме:** **регистр и вежливость** — когда tú, когда usted, как смягчить просьбу.

## Оттенки и регистр

Формы времён и subjuntivo здесь **не повторяем**: три si — тема B2; aunque llueve / llueva — «Subjuntivo: тонкие случаи».

### Вежливость и дистанция
- **Condicional de cortesía**: \`¿Podría...?\`, \`Quisiera...\`, \`Me gustaría...\`
- **Imperfecto** для смягчения: \`Quería pedirte un favor.\`
- Просьба по дистанции: \`¿Puedes **abrir**?\` → \`¿Podrías **abrir**?\` → \`¿Te importaría **abrir**?\`

### Регистр: formal vs informal
| Informal | Formal |
|---|---|
| tú | usted |
| ¿Qué tal? | ¿Cómo está usted? |
| Vale | De acuerdo / Correcto |
| ¡Hola! | Buenos días |

### Лексические нюансы
- **Soler** вместо «обычно»: \`Suelo levantarme temprano.\`
- **Llevar + gerundio** для длительности: \`Llevo viviendo aquí 5 años.\` (подробнее — perífrasis)
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
    summary: "Спорные случаи subjuntivo: aunque, donde, como — факт или гипотеза.",
    content: `> **Перед этой темой:** вы уже ставите **subjuntivo** в типичных случаях. **В этой теме:** спорные точки — aunque, donde, como: indicativo или subjuntivo?

## Subjuntivo: тонкие случаи

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
    summary: "Полная сетка estilo indirecto: все сдвиги времён, subjuntivo, указатели hoy → aquel día.",
    content: `> **Перед этой темой:** вы знаете схему **dijo que + сдвиг** с B2. **В этой теме:** полная таблица — все времена, subjuntivo, указатели времени и места.

## Косвенная речь: полная сетка

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
    summary: "Продвинутые местоимения: lo bueno, a María la veo, leísmo / laísmo.",
    content: `> **Перед этой темой:** **lo, le, se lo** уже в повседневной речи. **В этой теме:** абстрактное **lo**, обязательное удвоение **a + местоимение**, leísmo / laísmo.

## Местоимения: тонкости

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
    summary: "Ser vs estar в сложных парах: es listo vs está listo — смысл меняется.",
    content: `> **Перед этой темой:** базовый **ser / estar** вы знаете с A1. **В этой теме:** пары, где выбор глагола **меняет смысл** — es listo vs está listo.

## Ser vs Estar — тонкие случаи

### Прилагательные, меняющие смысл
| Прилагательное | SER (постоянное) | ESTAR (состояние) |
|---|---|---|
| aburrido | скучный (характер) | ему скучно |
| listo | умный | готов |
| rico | богатый | вкусный |
| verde | зелёный (цвет) | незрелый |
| bueno | добрый (человек) | вкусный/хороший (сейчас) |
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

### Из чего сделан vs состояние
\`El vaso **es** de cristal.\` — стакан из стекла.
\`El vaso **está** lleno.\` — стакан полный (сейчас).
Про еду свежесть обычно **estar**: \`El pan **está** fresco.\`

### Пассив
\`Don Quijote **fue** escrito por Cervantes.\` — действие в прошлом (ser + participio).
\`El libro **está** escrito en español.\` — результат / состояние.

> 💡 Универсальная подсказка C1: **SER = идентичность**, **ESTAR = состояние/результат**. Если сомневаешься — спроси «это определение или текущее состояние?».`,
  },

  {
    slug: "c2-oraciones-hendidas",
    title: "Эмфаза: выделительные конструкции",
    titleEs: "Oraciones Hendidas y Énfasis",
    level: "C2",
    category: "Синтаксис",
    summary: "Oraciones hendidas — fue Juan quien…, lo que necesito es… — выделение важного.",
    content: `> **Перед этой темой:** **que / lo que** вы связываете с B1. **В этой теме:** **oraciones hendidas** — fue Juan quien…, lo que necesito es… — чтобы выделить главное.

## Выделительные конструкции

Носители «раскалывают» предложение, чтобы **выделить** нужный элемент.

### SER + QUE / QUIEN / DONDE / CUANDO

| Выделяем | Конструкция | Пример |
|---|---|---|
| Лицо | \`Fue X quien…\` | \`**Fue Juan quien** rompió el vaso.\` — Это Хуан разбил стакан. |
| Место | \`Es en X donde…\` | \`**Es en Madrid donde** vive.\` — Именно в Мадриде он живёт. |
| Время | \`Fue X cuando…\` | \`**Fue ayer cuando** lo supe.\` — Именно вчера я это узнал. |
| Причина | \`Es por X por lo que…\` | \`**Es por eso por lo que** me fui.\` — Именно поэтому я ушёл. |

> ⚠️ Предлог **повторяется**: \`Es **con** ella **con** quien quiero hablar.\` (не \`*Es con ella que…\` — калька с французского, в культурной норме избегается)

### LO QUE — выделение действия/объекта
- \`**Lo que** necesito **es** dormir.\` — Что мне нужно — так это выспаться.
- \`**Lo que** me molesta **es** el ruido.\` — Что меня раздражает — так это шум.

### Согласование времени SER
\`**Fue** ayer **cuando**…\` / \`**Es** ahora **cuando**…\` — ser согласуется со временем события.

### Разговорная эмфаза
- \`¡Vaya coche que se ha comprado!\` — Ну и машину он купил!
- \`De tonto no tiene un pelo.\` — Дураком его точно не назовёшь.
- Дублирование: \`Saber, sé; pero no te lo diré.\` — Знать-то знаю, но не скажу.

> 💡 На DELE C2 выделительные конструкции — маркер свободного письма и речи.`,
  },

  {
    slug: "c2-conjetura-rumor",
    title: "Догадка и слухи: futuro y condicional",
    titleEs: "Futuro de Conjetura y Condicional de Rumor",
    level: "C2",
    category: "Глаголы",
    summary: "Futuro de conjetura — Serán las diez (≈ наверное десять); condicional de rumor — habría mil.",
    content: `> **Перед этой темой:** **Futuro** и **Condicional** как план и «я бы» вы знаете. **В этой теме:** те же формы для **догадки и слухов** — Serán las diez, habría mil personas.

## Догадка и слух

Будущее и условное время в испанском выражают не только время — они кодируют **степень уверенности**.

### Futuro de conjetura — догадка о настоящем
| Факт | Догадка |
|---|---|
| \`Son las diez.\` — Сейчас десять. | \`**Serán** las diez.\` — Наверное, часов десять. |
| \`Está en casa.\` | \`**Estará** en casa.\` — Должно быть, он дома. |
| \`Tiene 40 años.\` | \`**Tendrá** unos 40 años.\` — Ему лет сорок. |

Futuro perfecto — догадка о недавнем прошлом:
- \`**Habrá salido** ya.\` — Наверное, он уже ушёл.

### Condicional de conjetura — догадка о прошлом
- \`**Serían** las dos cuando llegó.\` — Было, наверное, часа два, когда он пришёл.
- \`**Tendría** veinte años entonces.\` — Ему тогда было лет двадцать.

### Condicional de rumor — язык прессы
Передаёт **неподтверждённую информацию** (журналистский стиль):
- \`El presidente **habría aceptado** el acuerdo.\` — Президент, по сообщениям, принял соглашение.
- \`**Habría** unas mil personas en la plaza.\` — На площади было около тысячи человек (по оценкам).

### Синонимичные модальные конструкции
| Уверенность | Конструкция | Пример |
|---|---|---|
| ~90% | \`deber de + inf\` | \`**Debe de** estar en casa.\` |
| ~50% | \`poder + inf\` | \`**Puede** estar en casa.\` |
| догадка | futuro/condicional | \`**Estará** en casa.\` |

> ⚠️ \`deber de + inf\` = вероятность; \`deber + inf\` = долженствование: \`Debes estudiar\` — ты должен учиться.

> 💡 Услышал futuro там, где логично настоящее? Это не про будущее — это «наверное».`,
  },

  {
    slug: "c2-estilo-culto",
    title: "Книжный стиль: абсолютные конструкции",
    titleEs: "Estilo Culto: Construcciones Absolutas",
    level: "C2",
    category: "Стилистика",
    summary: "Книжный стиль: participio absoluto (Terminada la reunión…), номинализация.",
    content: `> **Перед этой темой:** **participio** и **gerundio** из времён. **В этой теме:** **письменный регистр** — participio absoluto, сжатие придаточных.

## Книжный стиль

Приёмы **письменного / формального** испанского: пресса, эссе, DELE C2.

### Participio absoluto
Причастие + существительное заменяют целое придаточное:
- \`**Terminada la reunión**, todos se fueron.\` = Cuando terminó la reunión…
- \`**Dicho esto**, pasemos al siguiente punto.\` — Сказав это, перейдём к следующему пункту.
- \`**Una vez firmado el contrato**, no hay vuelta atrás.\` — После подписания контракта пути назад нет.

> ⚠️ Причастие **согласуется**: \`Terminad**a** la reunión\`, \`Firmad**os** los documentos\`.

### Gerundio absoluto
Со своим собственным субъектом:
- \`**Estando yo en Madrid**, ocurrió todo.\` — Пока я был в Мадриде, всё и произошло.
- \`**Siendo esto así**, no hay más que hablar.\` — Раз так, говорить больше не о чем.

### Номинализация — сущность вместо глагола
| Разговорно | Книжно |
|---|---|
| \`Cuando llegó el tren…\` | \`**A la llegada del** tren…\` |
| \`Antes de que salgamos…\` | \`**Antes de nuestra salida**…\` |
| \`Porque aumentaron los precios…\` | \`**Debido al aumento de** los precios…\` |

### Культурные коннекторы
- \`No obstante\` — тем не менее (формальнее, чем \`sin embargo\`)
- \`Asimismo\` — равным образом
- \`Por consiguiente\` — следовательно
- \`En aras de\` — ради, во имя
- \`Si bien\` — хотя (книжное \`aunque\`)
- \`Cabe señalar que…\` — следует отметить, что…

### Пассивная и безличная окраска
- \`Se procederá a la evaluación de…\` — будет проведена оценка…
- \`Queda prohibido fumar.\` — курение запрещено (queda + participio)
- \`Resulta imprescindible…\` — представляется необходимым…

> 💡 C2 — это умение **переключать регистр**: одно и то же сказать в баре и в министерстве.`,
  },
  // ----- DELE — экзаменационные темы ---------------------------------,

  {
    slug: "c2-ironia-registry",
    title: "Ирония и регистр",
    titleEs: "Ironía y Registro",
    level: "C2",
    category: "Стилистика",
    summary: "Ирония, сарказм и смена регистра — формы известны, важна уместность.",
    content: `> **Перед этой темой:** наклонения и регистр с C1. **В этой теме:** **как звучит** фраза — ирония, дистанция, смена регистра.

## Ирония и регистр

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

/** Legacy slug → current grammar topic slug. */
const GRAMMAR_SLUG_ALIASES: Record<string, string> = {
  "b1-preposiciones-por-para-2": "b1-pronombre-se",
};

/** Find a single topic by slug (supports legacy aliases). */
export function getTopicBySlug(slug: string): GrammarTopic | undefined {
  const resolved = GRAMMAR_SLUG_ALIASES[slug] ?? slug;
  return GRAMMAR_TOPICS.find((t) => t.slug === resolved);
}
