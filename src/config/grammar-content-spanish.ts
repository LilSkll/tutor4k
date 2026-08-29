import type { InterfaceLanguage } from "@/types";

export const SPANISH_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "a1-articulos": {
    en: `> **Before this topic:** you already know **ser/estar** and the **present tense** (hablo, soy). **In this topic:** articles before nouns — **el, la, un, una** — and when to use each.

## What an article is

**Rule:** an article is the short word **before** a noun: known or some, one or many, masculine or feminine.

In dictionaries: **m.** = masculino = masculine, **f.** = femenino = feminine. Singular = one, plural = many.

## A specific, known thing

**Rule:** familiar / specific thing → **el / la / los / las**.

| | One | Many |
|---|---|---|
| masculine | **el** libro | **los** libros |
| feminine | **la** casa | **las** casas |

Examples: \`el sol\`, \`la casa de Ana\`, \`los libros en la mesa\`.

## An unknown or “some” thing

**Rule:** not named yet, any, or “one of” → **un / una / unos / unas**.

| | One | Many |
|---|---|---|
| masculine | **un** libro | **unos** libros |
| feminine | **una** casa | **unas** casas |

Examples: \`un libro interesante\`, \`una casa nueva\`.

## Exception: el agua — not la abuela

**Rule:** **el agua**, but **la abuela**. Stressed first **a** — not every word starting with a.

Use **el** (or **un**) before a **feminine** word only if **all** of these are true:

1. the word is feminine;
2. you mean **one** thing;
3. it starts with **a** or **ha**;
4. the stress falls on **that first a** (as in **Á-gua**). There may be no written accent — what matters is the sound.

Then: \`el agua\`, \`el águila\`, \`el hacha\`, \`el aula\`, \`el hambre\`.

The word **stays feminine**: \`el agua fría\` (not *frío*). In the plural the exception disappears — go by gender again: \`las aguas\`, \`las águilas\`, \`las aulas\`.

**Not this exception** (the first *a* is unstressed):

| Word | Where the stress is | How we say it |
|---|---|---|
| abuela | a-**BUE**-la | **la** abuela, **las** abuelas |
| amiga | a-**MI**-ga | **la** amiga |
| harina | ha-**RI**-na | **la** harina |
| habitación | on **-ció-** | **la** habitación |

> ⚠️ Common mistake: *el abuela*. Correct: **la abuela**.
> If another word stands between the article and the noun, use **la** again: \`la misma agua\`, \`la amplia aula\`.

## Other exceptions

### Profession after ser — no article

**Rule:** after *ser*, a job usually has **no** article. A specific person takes an article.

- \`Soy profesora.\` — I am a teacher (role).
- \`La profesora es Ana.\` — that teacher is Ana.

### Language: hablo español

**Rule:** “I speak a language” — no article. The language as a topic takes **el**.

- \`Hablo español.\`
- \`El español es fácil.\`

### Days: el lunes / los lunes

**Rule:** one day = **el lunes**. Habit = **los lunes** (on Mondays).

### a + el = al, de + el = del

**Rule:** **a + el → al**, **de + el → del**. No merge with **la**: *a la*, *de la*. Before agua: \`al agua\`, \`del agua\`.

### el problema, la mano

**Rule:** full gender is in “Gender and number”. Here only the article: \`el problema\`, \`el tema\`, but \`la mano\`, \`la foto\`.

## Four steps to choose

**Rule:** number → gender → known/some → only then the *el agua* check.

1. One thing or many?
2. Masculine or feminine? (gender does **not** change because of el agua)
3. A specific known thing (**el / la / los / las**) or “some / a” (**un / una / unos / unas**)?
4. If feminine + one + stressed **a / ha** at the start → **el** / **un**. In the plural always **las** / **unas**.`,
    es: `> **Antes de este tema:** ya conoces **ser/estar** y el **presente** (hablo, soy). **En este tema:** los artículos delante del sustantivo — **el, la, un, una** — y cuándo usar cada uno.

## Qué es un artículo

**Regla:** el artículo es la palabrita **delante** del sustantivo: conocido o alguno, uno o muchos, masculino o femenino.

En el diccionario: **m.** = masculino, **f.** = femenino. Singular = uno, plural = muchos.

## Algo concreto y conocido

**Regla:** cosa conocida / concreta → **el / la / los / las**.

| | Uno | Muchos |
|---|---|---|
| masculino | **el** libro | **los** libros |
| femenino | **la** casa | **las** casas |

Ejemplos: \`el sol\`, \`la casa de Ana\`, \`los libros en la mesa\`.

## Algo desconocido o «alguno»

**Regla:** aún no se ha nombrado, cualquiera o «uno de» → **un / una / unos / unas**.

| | Uno | Muchos |
|---|---|---|
| masculino | **un** libro | **unos** libros |
| femenino | **una** casa | **unas** casas |

Ejemplos: \`un libro interesante\`, \`una casa nueva\`.

## Excepción: el agua — no la abuela

**Regla:** **el agua**, pero **la abuela**. La primera **a** tónica — no cualquier palabra en a.

Se pone **el** (o **un**) delante de una palabra **femenina** solo si se cumplen **todas** las condiciones:

1. la palabra es femenina;
2. hablamos de **una** cosa;
3. empieza por **a** o **ha**;
4. el acento (la fuerza de la voz) cae en **esa primera a** (como **Á-gua**). Puede no haber tilde: importa el sonido, no la escritura.

Entonces: \`el agua\`, \`el águila\`, \`el hacha\`, \`el aula\`, \`el hambre\`.

La palabra **sigue siendo femenina**: \`el agua fría\` (no *frío*). En plural la excepción desaparece: \`las aguas\`, \`las águilas\`, \`las aulas\`.

**No entra aquí** (la primera a no es tónica):

| Palabra | Dónde cae la fuerza | Cómo se dice |
|---|---|---|
| abuela | a-**BUE**-la | **la** abuela, **las** abuelas |
| amiga | a-**MI**-ga | **la** amiga |
| harina | ha-**RI**-na | **la** harina |
| habitación | en **-ció-** | **la** habitación |

> ⚠️ Error frecuente: *el abuela*. Lo correcto es **la abuela**.
> Si hay otra palabra entre el artículo y el sustantivo, otra vez **la**: \`la misma agua\`, \`la amplia aula\`.

## Otras excepciones

### Profesión con ser — sin artículo

**Regla:** tras *ser* la profesión suele ir **sin** artículo. Una persona concreta lleva artículo.

- \`Soy profesora.\` — soy profesora (rol).
- \`La profesora es Ana.\` — esa profesora es Ana.

### Idioma: hablo español

**Regla:** «hablo un idioma» — sin artículo. El idioma como tema lleva **el**.

- \`Hablo español.\`
- \`El español es fácil.\`

### Días: el lunes / los lunes

**Regla:** un día = **el lunes**. Costumbre = **los lunes**.

### a + el = al, de + el = del

**Regla:** **a + el → al**, **de + el → del**. Con **la** no se junta: *a la*, *de la*. Delante de agua: \`al agua\`, \`del agua\`.

### el problema, la mano

**Regla:** el género entero está en «Género y número». Aquí solo el artículo: \`el problema\`, \`el tema\`, pero \`la mano\`, \`la foto\`.

## Cómo elegir en 4 pasos

**Regla:** número → género → conocido/alguno → solo entonces *el agua*.

1. ¿Uno o muchos?
2. ¿Masculino o femenino? (el género **no** cambia por el agua)
3. ¿Algo concreto y conocido (**el / la / los / las**) o «alguno» (**un / una / unos / unas**)?
4. Si es femenino + uno + empieza por **a / ha** tónica → **el** / **un**. En plural siempre **las** / **unas**.`,
  },

  "a1-ser-estar": {
    en: `> **Before this topic:** this is the **first** grammar topic in the course. **In this topic:** we start from zero — pronouns (yo, tú) and two verbs for “to be”: **ser** and **estar**.

## Greetings and introductions

Spanish questions use **two** marks: \`¿…?\`

| Spanish | English |
|---|---|
| **Hola** | Hello |
| **Buenos días** | Good morning |
| **Buenas tardes** | Good afternoon / evening |
| **Buenas noches** | Good night |
| **Adiós / Hasta luego** | Bye / See you later |
| **¿Cómo te llamas?** | What’s your name? |
| **Me llamo…** | My name is… |
| **Mucho gusto** | Nice to meet you |
| **¿Cómo estás?** | How are you? (right now) |
| **Bien, gracias** | Fine, thanks |

> 💡 After a greeting people often ask the name: \`Hola, ¿cómo te llamas?\`

## Who is speaking — I, you, he…

The verb **changes by person**. Keep this table — it is used in the whole course.

| English | Pronoun | When |
|---|---|---|
| I | **yo** | the speaker |
| you (informal, one) | **tú** | one person, “tú” |
| he / she / you (formal, one) | **él / ella / usted** | one verb form for all three |
| we | **nosotros / nosotras** | -as if all women |
| you (plural, Spain) | **vosotros / vosotras** | almost unused in Latin America |
| they / you (plural formal) | **ellos / ellas / ustedes** | in Latin America *ustedes* = “you” to several people |

## Two verbs for “to be”: ser and estar

English has one “am / is / are”. Spanish has **two**.

### SER — who / what someone **is**
Identity, job, origin, description, time, relationship:

- \`Yo **soy** profesor.\`
- \`Ella **es** de México.\`
- \`El cielo **es** azul.\` (in general)
- \`**Son** las tres.\` (clock time also uses ser)

| Who | SER |
|---|---|
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros | **somos** |
| vosotros | **sois** |
| ellos / ustedes | **son** |

### ESTAR — how / where **right now**
State, feelings, place:

- \`**Estoy** cansado.\`
- \`El libro **está** en la mesa.\`

| Who | ESTAR |
|---|---|
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ustedes | **están** |

## How to choose

1. **Who / what it is / where from / what time** → **ser**.
2. **Where / how someone feels / temporary** → **estar**.

Hint without memorising English acronyms:
- **ser**: description, job, character, time, origin, relationship;
- **estar**: posture, place, -ando/-iendo action, condition, emotion.

> ⚠️ Same adjective, two meanings: \`es aburrido\` (a boring person) vs \`está aburrido\` (bored now).
> \`estar frío\` is for a thing; “I’m cold” is *tener* (\`tengo frío\`).`,
    es: `> **Antes de este tema:** este es el **primer** tema de gramática del curso. **En este tema:** empezamos desde cero — pronombres (yo, tú) y dos verbos «ser / estar».

## Saludos y presentaciones

La pregunta se escribe con **dos** signos: \`¿…?\`

| Fórmula | Para qué |
|---|---|
| **Hola** | saludo informal |
| **Buenos días / Buenas tardes / Buenas noches** | saludo según la hora |
| **Adiós / Hasta luego** | despedida |
| **¿Cómo te llamas?** / **Me llamo…** | nombre |
| **Mucho gusto** | al presentarse |
| **¿Cómo estás?** | estado ahora (estar) |
| **Bien, gracias** | respuesta corta |

> 💡 Después del saludo: \`Hola, ¿cómo te llamas?\`

## Quién habla — yo, tú, él…

El verbo **cambia según la persona**. Esta tabla se usa en todo el curso.

| | Pronombre | Notas |
|---|---|---|
| yo | **yo** | quien habla |
| tú | **tú** | una persona de confianza |
| él / ella / usted | **él / ella / usted** | una sola forma de verbo |
| nosotros / nosotras | **nosotros / nosotras** | -as si son solo mujeres |
| vosotros / vosotras | **vosotros / vosotras** | España; en América, *ustedes* |
| ellos / ellas / ustedes | **ellos / ellas / ustedes** | en América *ustedes* = «vosotros» |

## Dos verbos: ser y estar

En ruso hay un «ser». En español hay **dos**.

### SER — quién / cómo **es**
Identidad, profesión, origen, descripción, hora, relación:

- \`Yo **soy** profesor.\`
- \`Ella **es** de México.\`
- \`El cielo **es** azul.\`
- \`**Son** las tres.\` (la hora también va con ser)

| Quién | SER |
|---|---|
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros | **somos** |
| vosotros | **sois** |
| ellos / ustedes | **son** |

### ESTAR — cómo / dónde **ahora**
Estado, sentimientos, lugar:

- \`**Estoy** cansado.\`
- \`El libro **está** en la mesa.\`

| Quién | ESTAR |
|---|---|
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ustedes | **están** |

## Cómo elegir

1. **Quién es / de dónde / qué hora** → **ser**.
2. **Dónde / cómo se siente / temporal** → **estar**.

- **ser**: descripción, profesión, carácter, tiempo, origen, relación;
- **estar**: postura, lugar, acción en -ando/-iendo, estado, emoción.

> ⚠️ \`es aburrido\` (persona aburrida) vs \`está aburrido\` (ahora se aburre).
> \`estar frío\` es de cosas; «tengo frío» es *tener*.`,
  },

  "a1-presente": {
    en: `> **Before this topic:** you already know **soy** and **estoy**. **In this topic:** how to build any action in the present tense — hablo, como, vivo.

## What Presente is

**Presente** = present. The dictionary form is the **infinitive** (not yet I/you): hablar, comer, vivir.

The infinitive ending shows the family:
- **-ar** — the largest (\`hablar\` — to speak);
- **-er** (\`comer\` — to eat);
- **-ir** (\`vivir\` — to live).

Drop -ar / -er / -ir and add an ending **by person**.

## Regular verbs

“Regular” = the table endings, the stem does not break.

| Who | -AR hablar | -ER comer | -IR vivir |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él / ella / usted | habl**a** | com**e** | viv**e** |
| nosotros | habl**amos** | com**emos** | viv**imos** |
| vosotros | habl**áis** | com**éis** | viv**ís** |
| ellos / ustedes | habl**an** | com**en** | viv**en** |

Say them whole: \`habláis\`, \`coméis\`, \`vivís\`.

> yo almost always ends in **-o**. In Latin America vosotros is replaced by ustedes (ellos form).

## When people use it

- Now / usually: \`Trabajo en Madrid.\`
- Facts: \`El agua hierve a 100°C.\`
- Near future: \`Mañana **voy** al cine.\` (ir is irregular)

## The irregulars you need first

**ser** and **estar** you already know.

| Verb | yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| **ser** | soy | eres | es | somos | sois | son |
| **estar** | estoy | estás | está | estamos | estáis | están |
| **ir** | voy | vas | va | vamos | vais | van |
| **tener** | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **hacer** | hago | haces | hace | hacemos | hacéis | hacen |

Some verbs change a vowel **only** in the stressed syllable (not nosotros / vosotros):
\`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`. Full list — Frequent verbs.`,
    es: `> **Antes de este tema:** ya conoces **soy** y **estoy**. **En este tema:** cómo construir cualquier acción en presente — hablo, como, vivo.

## Qué es el Presente

**Presente** = ahora / lo habitual. En el diccionario el verbo está en **infinitivo** (aún no yo/tú): hablar, comer, vivir.

La terminación dice la familia:
- **-ar** — la más grande (\`hablar\`);
- **-er** (\`comer\`);
- **-ir** (\`vivir\`).

Se quita -ar / -er / -ir y se pone la terminación **según quién habla**.

## Verbos regulares

«Regular» = las terminaciones de la tabla, la raíz no se rompe.

| Quién | -AR hablar | -ER comer | -IR vivir |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él / ella / usted | habl**a** | com**e** | viv**e** |
| nosotros | habl**amos** | com**emos** | viv**imos** |
| vosotros | habl**áis** | com**éis** | viv**ís** |
| ellos / ustedes | habl**an** | com**en** | viv**en** |

Enteros: \`habláis\`, \`coméis\`, \`vivís\`.

> yo casi siempre acaba en **-o**. En América vosotros se sustituye por ustedes.

## Cuándo se usa

- Ahora / normalmente: \`Trabajo en Madrid.\`
- Hechos: \`El agua hierve a 100°C.\`
- Futuro cercano: \`Mañana **voy** al cine.\`

## Irregulares que hacen falta ya

**ser** y **estar** ya salieron.

| Verbo | yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| **ser** | soy | eres | es | somos | sois | son |
| **estar** | estoy | estás | está | estamos | estáis | están |
| **ir** | voy | vas | va | vamos | vais | van |
| **tener** | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **hacer** | hago | haces | hace | hacemos | hacéis | hacen |

Algunos cambian la vocal **solo** en la sílaba tónica (no en nosotros / vosotros):
\`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`. Lista — Verbos frecuentes.`,
  },

  "a1-genero-numero": {
    en: `> **Before this topic:** you already know **el, la, un, una**. **In this topic:** noun gender and number — why la casa but el problema, and why not *el abuela*.

## Masculine and feminine

Every Spanish noun has a gender. It does **not** always match real-world sex and it is **not** always logical.

In dictionaries: **m.** = masculino = masculine, **f.** = femenino = feminine.

| Usually | Gender | Examples |
|---|---|---|
| ends in **-o** | masculine | el libro, el perro |
| ends in **-a** | feminine | la casa, la gata |
| **-ción / -sión** | feminine | la canción, la televisión |
| **-dad / -tad** | feminine | la ciudad, la libertad |
| ends in a consonant | check the dictionary | el lápiz / la pared |

**Ending exceptions:**
- ends in **-a** but masculine: \`el problema\`, \`el mapa\`, \`el día\`, \`el tema\`, \`el idioma\`;
- ends in **-o** but feminine: \`la mano\`, \`la foto\`, \`la radio\`, \`la moto\`.

The article **el** in \`el agua\` does **not** make the word masculine — see **Articles**. Say \`el agua fría\`; in the plural \`las aguas\`. Do not mix this up with \`**la** abuela\` (stress on **-bue-**, not the first *a*).

## One or many

- After a vowel add **-s**: \`libro → libros\`, \`mesa → mesas\`
- After a consonant add **-es**: \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c before -es)
- A written accent may disappear: \`el programa → los programas\`

> ⚠️ Article, adjective and noun must match in gender and number: \`la casa blanca\`, \`los coches rojos\`, \`el agua fría\`.`,
    es: `> **Antes de este tema:** ya conoces **el, la, un, una**. **En este tema:** género y número — por qué la casa, pero el problema, y por qué no *el abuela*.

## Masculino y femenino

Cada sustantivo en español tiene género. **No** siempre coincide con el sexo en la vida real y **no** siempre es lógico.

En el diccionario: **m.** = masculino, **f.** = femenino.

| Suele ser | Género | Ejemplos |
|---|---|---|
| termina en **-o** | masculino | el libro, el perro |
| termina en **-a** | femenino | la casa, la gata |
| **-ción / -sión** | femenino | la canción, la televisión |
| **-dad / -tad** | femenino | la ciudad, la libertad |
| termina en consonante | mira el diccionario | el lápiz / la pared |

**Excepciones por la terminación:**
- en **-a**, pero masculinos: \`el problema\`, \`el mapa\`, \`el día\`, \`el tema\`, \`el idioma\`;
- en **-o**, pero femeninos: \`la mano\`, \`la foto\`, \`la radio\`, \`la moto\`.

El artículo **el** de \`el agua\` **no** convierte la palabra en masculina — ver **Artículos**. Se dice \`el agua fría\`; en plural \`las aguas\`. No confundir con \`**la** abuela\` (el acento está en **-bue-**, no en la primera a).

## Uno o muchos

- Tras vocal se añade **-s**: \`libro → libros\`, \`mesa → mesas\`
- Tras consonante, **-es**: \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c antes de -es)
- A veces desaparece la tilde: \`el programa → los programas\`

> ⚠️ Artículo, adjetivo y sustantivo coinciden en género y número: \`la casa blanca\`, \`los coches rojos\`, \`el agua fría\`.`,
  },

  "a1-numeros-1-100": {
    en: `> **Before this topic:** you already know **el, la** and noun gender. **In this topic:** numbers, days of the week, and telling the time (**la una**, **las dos**).

## Numbers 1–100

| Range | Example |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| tens + units | treinta y uno, cuarenta y cinco |

**Special notes:**
- \`uno → un\` before a noun: \`un libro\` (not \`uno libro\`)
- \`veintiún\` before m.: \`veintiún años\`
- \`cien\` (100) vs \`ciento\` (before a number): \`ciento uno\`

> 💡 Age: \`Tengo veinte años.\` Prices: \`Cuesta cinco euros.\`

## Days of the week

| Spanish | English |
|---|---|
| **lunes** | Monday |
| **martes** | Tuesday |
| **miércoles** | Wednesday |
| **jueves** | Thursday |
| **viernes** | Friday |
| **sábado** | Saturday |
| **domingo** | Sunday |

**How to talk about days:**
- Days are usually **lowercase**: \`el lunes\`
- **el lunes** = on Monday (one time)
- **los lunes** = on Mondays (habit)
- \`Hoy es viernes.\` — Today is Friday.

> 💡 Not \`en lunes\` — use \`el lunes\` / \`los lunes\`.

## Months of the year

enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre

- **en enero** = in January
- Date: \`el 5 de mayo\` — May 5th
- Months are usually lowercase.

## Telling the time (la hora)

Question: **¿Qué hora es?**

### The article before the hour
| Time | Form |
|---|---|
| 1:00 | **Es la una** |
| 2:00–12:00 | **Son las dos** |

❌ Wrong: \`Es una\`, \`Son dos\`  
✅ Right: \`Es **la** una\`, \`Son **las** tres\`

### Minutes
| Phrase | Example | Meaning |
|---|---|---|
| y … | Son las tres **y diez** | 3:10 |
| y cuarto | Son las cuatro **y cuarto** | 4:15 |
| y media | Son las cinco **y media** | 5:30 |
| menos cuarto | Son las seis **menos cuarto** | 5:45 |

### At what time? → **a + la/las**
- \`a la una\` / \`a las tres\`
- \`La clase es **a las** nueve.\`

### Part of the day
- **de la mañana** / **de la tarde** / **de la noche**
- \`Son las ocho de la mañana.\`

> 💡 Remember: **Es la una** / **Son las…** — always use the article.`,
    es: `> **Antes de este tema:** ya conoces **el, la** y el género. **En este tema:** números, días de la semana y la hora (**la una**, **las dos**).

## Números 1–100

| Rango | Ejemplo |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| decenas + unidades | treinta y uno, cuarenta y cinco |

**Particularidades:**
- \`uno → un\` delante de sustantivo: \`un libro\`
- \`veintiún\` delante de m.: \`veintiún años\`
- \`cien\` (100) vs \`ciento\` (delante de número): \`ciento uno\`

> 💡 Edad: \`Tengo veinte años.\` Precios: \`Cuesta cinco euros.\`

## Días de la semana

lunes, martes, miércoles, jueves, viernes, sábado, domingo

- Normalmente **en minúscula**: \`el lunes\`
- **el lunes** = ese día concreto
- **los lunes** = todos los lunes (hábito)
- \`Hoy es viernes.\`

> 💡 No se dice \`en lunes\`, sino \`el lunes\` / \`los lunes\`.

## Meses del año

enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre

- **en enero**
- Fecha: \`el 5 de mayo\`
- Los meses suelen ir en minúscula.

## La hora

Pregunta: **¿Qué hora es?**

### El artículo delante de la hora
| Hora | Forma |
|---|---|
| 1:00 | **Es la una** |
| 2:00–12:00 | **Son las dos** |

❌ Incorrecto: \`Es una\`, \`Son dos\`  
✅ Correcto: \`Es **la** una\`, \`Son **las** tres\`

### Minutos
| Expresión | Ejemplo |
|---|---|
| y … | Son las tres **y diez** |
| y cuarto | Son las cuatro **y cuarto** |
| y media | Son las cinco **y media** |
| menos cuarto | Son las seis **menos cuarto** |

### ¿A qué hora? → **a + la/las**
- \`a la una\` / \`a las tres\`
- \`La clase es **a las** nueve.\`

### Parte del día
- **de la mañana** / **de la tarde** / **de la noche**

> 💡 Recuerda: **Es la una** / **Son las…** — siempre con artículo.`,
  },

  "a1-preposiciones-lugar": {
    en: `> **Before this topic:** you already know **numbers, days, and telling the time**. **In this topic:** prepositions of place — en, a, de, sobre, debajo — and **estar** for location.

## Main prepositions of place

| Preposition | Meaning | Example |
|---|---|---|
| **en** | in/on | El libro está **en** la mesa |
| **a** | to/in (movement) | Voy **a** Madrid |
| **de** | from/of | Soy **de** Rusia |
| **sobre** | on (on top of) | La lámpara está **sobre** la mesa |
| **debajo de** | under | El gato está **debajo de** la silla |
| **delante de** | in front of | El coche está **delante de** la casa |
| **detrás de** | behind | El jardín está **detrás de** la casa |
| **entre** | between | Entre tú y yo |
| **cerca de** | near | La tienda está **cerca de** aquí |
| **lejos de** | far from | Vive **lejos de** la ciudad |

### Important rule
**Estar + place** for location: \`Estoy en casa.\`
**Ir + a + place** for direction: \`Voy al cine.\` (\`a + el = al\`)

> ⚠️ \`a + el = al\`, \`de + el = del\` — mandatory contraction.`,
    es: `> **Antes de este tema:** ya conoces **números, días y la hora**. **En este tema:** preposiciones de lugar — en, a, de, sobre, debajo — y **estar** para «¿dónde?».

## Preposiciones de lugar principales

| Preposición | Significado | Ejemplo |
|---|---|---|
| **en** | en/sobre | El libro está **en** la mesa |
| **a** | a/hacia | Voy **a** Madrid |
| **de** | de/desde | Soy **de** Rusia |
| **sobre** | sobre/encima | La lámpara está **sobre** la mesa |
| **debajo de** | debajo | El gato está **debajo de** la silla |
| **delante de** | delante | El coche está **delante de** la casa |
| **detrás de** | detrás | El jardín está **detrás de** la casa |
| **entre** | entre | Entre tú y yo |
| **cerca de** | cerca | La tienda está **cerca de** aquí |
| **lejos de** | lejos | Vive **lejos de** la ciudad |

### Regla importante
**Estar + lugar** para ubicación: \`Estoy en casa.\`
**Ir + a + lugar** para dirección: \`Voy al cine.\` (\`a + el = al\`)

> ⚠️ \`a + el = al\`, \`de + el = del\` — contracción obligatoria.`,
  },

  "a1-gustar": {
    en: `> **Before this topic:** you already know **tener hambre / frío / sueño** and other **tener** expressions. **In this topic:** **gustar** — “I like” works differently from English.

## Mini: me / te / le clitics

With **gustar** you meet short “to whom” forms for the first time:

| To whom | Form | Example |
|---|---|---|
| to me | **me** | **Me** gusta el café |
| to you | **te** | **Te** gusta viajar |
| to him/her/you (usted) | **le** | **Le** gusta el flamenco |

This is not the full OD/OI system yet (lo veo, le doy) — that comes later. Here: **me/te/le** go **before** gusta/gustan and name who likes it.

## Gustar — "to like" (literally: "to be pleasing")

In Spanish, \`gustar\` works **the other way around**: the subject is what is liked, not the person who likes it.

### Conjugation

| I like… | Form |
|---|---|
| singular | **Me gusta** el café |
| plural | **Me gustan** los libros |

| Person | Singular | Plural |
|---|---|---|
| me | me gusta | me gustan |
| you (informal) | te gusta | te gustan |
| him/her | le gusta | le gustan |
| us | nos gusta | nos gustan |
| you (plural) | os gusta | os gustan |
| them | les gusta | les gustan |

### Emphasis
\`Me gusta** mucho** el café.\`
\`No me gusta **nada** el té.\`

### Clarification (a + name)
\`A **María** le gusta el flamenco.\`
\`A **mí** me gusta el café.\`

> 💡 Similar verbs: \`encantar\` (to love), \`interesar\` (to interest), \`doler\` (to hurt) — work the same way.`,
    es: `> **Antes de este tema:** ya conoces **tener hambre / frío / sueño** y otras expresiones con **tener**. **En este tema:** **gustar** — «me gusta el café», no «yo gusto el café».

## Mini: clíticos me / te / le

Con **gustar** aparecen por primera vez las formas cortas de «a quién»:

| A quién | Forma | Ejemplo |
|---|---|---|
| a mí | **me** | **Me** gusta el café |
| a ti | **te** | **Te** gusta viajar |
| a él/ella/usted | **le** | **Le** gusta el flamenco |

Aún no es el sistema completo de OD/OI (lo veo, le doy). Aquí: **me/te/le** van **antes** de gusta/gustan.

## Gustar — «gustar» (literalmente: «ser agradable»)

En español, \`gustar\` funciona **al revés**: el sujeto es lo que gusta, no la persona.

### Conjugación

| Me gusta… | Forma |
|---|---|
| singular | **Me gusta** el café |
| plural | **Me gustan** los libros |

| Persona | Singular | Plural |
|---|---|---|
| a mí | me gusta | me gustan |
| a ti | te gusta | te gustan |
| a él/ella | le gusta | le gustan |
| a nosotros | nos gusta | nos gustan |
| a vosotros | os gusta | os gustan |
| a ellos | les gusta | les gustan |

### Énfasis
\`Me gusta** mucho** el café.\`
\`No me gusta **nada** el té.\`

### Aclaración (a + nombre)
\`A **María** le gusta el flamenco.\`
\`A **mí** me gusta el café.\`

> 💡 Verbos similares: \`encantar\`, \`interesar\`, \`doler\` — funcionan igual.`,
  },

  "a1-tener-expressions": {
    en: `> **Before this topic:** you already know **prepositions of place** (en, a, de) and **ser / estar**. **In this topic:** states with **tener** — hambre, frío, sueño, razón.

## Expressions with TENER

In Spanish, many states are expressed with **tener + noun**, not with ser/estar.

| Spanish | Meaning | Do NOT say |
|---|---|---|
| tener **hambre** | to be hungry | ~~estar hambriento~~ |
| tener **sed** | to be thirsty | ~~estar sediento~~ |
| tener **frío** | to be cold (feel cold) | ~~estar frío~~ (means "to be cold" as temperature) |
| tener **calor** | to feel hot | ~~estar caliente~~ |
| tener **sueño** | to be sleepy | ~~estar soñoliento~~ |
| tener **miedo** | to be afraid | ~~estar miedoso~~ |
| tener **suerte** | to be lucky | — |
| tener **razón** | to be right | — |
| tener **prisa** | to be in a hurry | — |
| tener **ganas de** + inf | to feel like | — |
| tener **necesidad de** | to need | — |
| tener **X años** | to be X years old | — |

### Examples
\`Tengo hambre. Vamos a comer.\`
\`¿Tienes frío? — Sí, tengo mucho frío.\`
\`No tienes razón.\`
\`Tengo ganas de viajar.\`
\`Tengo veinte años.\`

> ⚠️ Agreement: \`Tiene**mos** hambre\`, \`Tiene**n** sueño\`.`,
    es: `> **Antes de este tema:** ya conoces **preposiciones de lugar** (en, a, de) y **ser / estar**. **En este tema:** estados con **tener** — hambre, frío, sueño, razón.

## Expresiones con TENER

En español, muchos estados se expresan con **tener + sustantivo**, no con ser/estar.

| Español | Significado | NO decir |
|---|---|---|
| tener **hambre** | tener hambre | ~~estar hambriento~~ |
| tener **sed** | tener sed | ~~estar sediento~~ |
| tener **frío** | tener frío | ~~estar frío~~ (significa «ser frío») |
| tener **calor** | tener calor | ~~estar caliente~~ |
| tener **sueño** | tener sueño | ~~estar soñoliento~~ |
| tener **miedo** | tener miedo | ~~estar miedoso~~ |
| tener **suerte** | tener suerte | — |
| tener **razón** | tener razón | — |
| tener **prisa** | tener prisa | — |
| tener **ganas de** + inf | tener ganas | — |
| tener **necesidad de** | necesitar | — |
| tener **X años** | tener X años | — |

### Ejemplos
\`Tengo hambre. Vamos a comer.\`
\`¿Tienes frío? — Sí, tengo mucho frío.\`
\`No tienes razón.\`
\`Tengo ganas de viajar.\`
\`Tengo veinte años.\`

> ⚠️ Concordancia: \`Tiene**mos** hambre\`, \`Tiene**n** sueño\`.`,
  },

  "a1-preguntas": {
    en: `> **Before this topic:** you already know **gustar** (me gusta…) and basic questions from ser/estar (¿Cómo estás?). **In this topic:** other question words and **¿?** in writing.

## Question words (Palabras interrogativas)

| Word | Meaning | Example |
|---|---|---|
| ¿**Qué**? | What? Which? | ¿Qué haces? ¿Qué es esto? |
| ¿**Cómo**? | How? | ¿Cómo estás? ¿Cómo te llamas? |
| ¿**Dónde**? | Where? | ¿Dónde vives? ¿Dónde vas? |
| ¿**Cuándo**? | When? | ¿Cuándo llegas? |
| ¿**Quién**? / ¿**Quiénes**? | Who? | ¿Quién es ella? ¿Quiénes son? |
| ¿**Cuál**? / ¿**Cuáles**? | Which? | ¿Cuál prefieres? |
| ¿**Por qué**? | Why? | ¿Por qué estudias español? |
| ¿**Para qué**? | What for? | ¿Para qué lo necesitas? |
| ¿**Cuánto**? / ¿**Cuántos**? | How much/many? | ¿Cuánto cuesta? ¿Cuántos años tienes? |
| ¿**Cuál es**? | What is (name/address)? | ¿Cuál es tu nombre? |

### Qué vs Cuál — common confusion
- **Qué** = "what is it" (definition): \`¿Qué es "mesa"?\`
- **Cuál** = "which one" (choice): \`¿Cuál prefieres, té o café?\`
- **Qué + noun**: \`¿Qué libro lees?\`
- **Cuál + ser**: \`¿Cuál es tu número?\`

### Question marks
Spanish uses **double** marks: \`¿…?\` opening + \`…?\` closing.
\`¿Cómo te llamas?\`

> 💡 In speech the opening \`¿\` is often omitted, but in writing it is required.`,
    es: `> **Antes de este tema:** ya conoces **gustar** (me gusta…) y preguntas básicas de ser/estar (¿Cómo estás?). **En este tema:** otras interrogativas y **¿?** en la escritura.

## Palabras interrogativas

| Palabra | Significado | Ejemplo |
|---|---|---|
| ¿**Qué**? | ¿Qué? ¿Cuál? | ¿Qué haces? ¿Qué es esto? |
| ¿**Cómo**? | ¿Cómo? | ¿Cómo estás? ¿Cómo te llamas? |
| ¿**Dónde**? | ¿Dónde? | ¿Dónde vives? ¿Dónde vas? |
| ¿**Cuándo**? | ¿Cuándo? | ¿Cuándo llegas? |
| ¿**Quién**? / ¿**Quiénes**? | ¿Quién? | ¿Quién es ella? ¿Quiénes son? |
| ¿**Cuál**? / ¿**Cuáles**? | ¿Cuál? | ¿Cuál prefieres? |
| ¿**Por qué**? | ¿Por qué? | ¿Por qué estudias español? |
| ¿**Para qué**? | ¿Para qué? | ¿Para qué lo necesitas? |
| ¿**Cuánto**? / ¿**Cuántos**? | ¿Cuánto? | ¿Cuánto cuesta? ¿Cuántos años tienes? |
| ¿**Cuál es**? | ¿Cuál es? | ¿Cuál es tu nombre? |

### Qué vs Cuál — confusión frecuente
- **Qué** = «qué es esto» (definición): \`¿Qué es "mesa"?\`
- **Cuál** = «cuál de» (elección): \`¿Cuál prefieres, té o café?\`
- **Qué + sustantivo**: \`¿Qué libro lees?\`
- **Cuál + ser**: \`¿Cuál es tu número?\`

### Signos de interrogación
En español hay **doble** signo: \`¿…?\` de apertura + \`…?\` de cierre.
\`¿Cómo te llamas?\`

> 💡 En el habla se omite a menudo el \`¿\` inicial, pero en la escritura es obligatorio.`,
  },

  "a1-verbos-frecuentes": {
    en: `> **Before this topic:** you have covered **questions** (qué, dónde, ¿…?). **In this topic:** frequent irregular verbs — ir, tener, hacer, poder, querer, decir.

## Most essential irregular verbs (presente)

### IR — to go
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| voy | vas | va | vamos | **vais** | van |

\`Ir a + infinitivo\` = near future: \`Voy a comer.\`
\`Ir a + place\` = direction: \`Voy al cine.\`

### TENER — to have
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| tengo | tienes | tiene | tenemos | **tenéis** | tienen |

### HACER — to do/make
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **hago** | haces | hace | hacemos | **hacéis** | hacen |

⚠️ Irregular yo-form: \`hago\`, not \`habo\`.

### PODER — can/to be able
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **puedo** | **puedes** | **puede** | podemos | **podéis** | **pueden** |

### QUERER — to want
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **quiero** | **quieres** | **quiere** | queremos | **queréis** | **quieren** |

### DECIR — to say/tell
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **digo** | **dices** | **dice** | decimos | **decís** | **dicen** |

### SABER — to know (facts)
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **sé** | sabes | sabe | sabemos | **sabéis** | saben |

> 💡 \`poder\` + infinitive = "can do": \`Puedo ayudarte.\`
> \`querer\` + infinitive = "want to do": \`Quiero aprender español.\``,
    es: `> **Antes de este tema:** ya viste las **preguntas** (qué, dónde, ¿…?). **En este tema:** verbos irregulares frecuentes — ir, tener, hacer, poder, querer, decir.

## Verbos irregulares más necesarios (presente)

### IR — ir
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| voy | vas | va | vamos | **vais** | van |

\`Ir a + infinitivo\` = futuro próximo: \`Voy a comer.\`
\`Ir a + lugar\` = dirección: \`Voy al cine.\`

### TENER — tener
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| tengo | tienes | tiene | tenemos | **tenéis** | tienen |

### HACER — hacer
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **hago** | haces | hace | hacemos | **hacéis** | hacen |

⚠️ Forma yo irregular: \`hago\`, no \`habo\`.

### PODER — poder
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **puedo** | **puedes** | **puede** | podemos | **podéis** | **pueden** |

### QUERER — querer
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **quiero** | **quieres** | **quiere** | queremos | **queréis** | **quieren** |

### DECIR — decir
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **digo** | **dices** | **dice** | decimos | **decís** | **dicen** |

### SABER — saber (hechos)
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **sé** | sabes | sabe | sabemos | **sabéis** | saben |

> 💡 \`poder\` + infinitivo = «poder hacer»: \`Puedo ayudarte.\`
> \`querer\` + infinitivo = «querer hacer»: \`Quiero aprender español.\``,
  },

  "a2-preterito-perfecto": {
    en: `> **Before this topic:** you have finished **A1** (including **frequent verbs**). **In this topic:** **Pretérito Perfecto** — past linked to now: he comido, has ido.

## Pretérito Perfecto (Spanish passé composé)

### Formula: **HABER** + **participio**

**haber**: he, has, ha, hemos, habéis, han

**Participio** of regular verbs:
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido, vivir → vivido

### Irregular participles
| Infinitive | Participle |
|---|---|
| hacer | **hecho** |
| ver | **visto** |
| poner | **puesto** |
| escribir | **escrito** |
| abrir | **abierto** |
| decir | **dicho** |
| volver | **vuelto** |

### When to use
- Time period not yet finished (today, this week, this year):
  \`Hoy he comido paella.\`
- Life experience: \`¿Has estado en España?\`
- Connection to present: \`He perdido las llaves\` (and still haven't found them).

### Time markers
hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.

> ⚠️ With **ayer, el año pasado, en 2020** use Pretérito Indefinido.`,
    es: `> **Antes de este tema:** ya terminaste **A1** (incluidos **verbos frecuentes**). **En este tema:** **Pretérito Perfecto** — pasado ligado al presente: he comido, has ido.

## Pretérito Perfecto

### Fórmula: **HABER** + **participio**

**haber**: he, has, ha, hemos, habéis, han

**Participio** de verbos regulares:
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido, vivir → vivido

### Participios irregulares
| Infinitivo | Participio |
|---|---|
| hacer | **hecho** |
| ver | **visto** |
| poner | **puesto** |
| escribir | **escrito** |
| abrir | **abierto** |
| decir | **dicho** |
| volver | **vuelto** |

### Cuándo usarlo
- Periodo no terminado (hoy, esta semana, este año):
  \`Hoy he comido paella.\`
- Experiencia de vida: \`¿Has estado en España?\`
- Conexión con el presente: \`He perdido las llaves\` (y aún no las he encontrado).

### Marcadores temporales
hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.

> ⚠️ Con **ayer, el año pasado, en 2020** se usa Pretérito Indefinido.`,
  },

  "a2-preterito-indefinido": {
    en: `> **Before this topic:** **Perfecto** (he comido) is when the time frame is still open. **In this topic:** **Indefinido** — a finished past fact: ayer fui, en 2018 viajé.

## Pretérito Indefinido (simple past)

### Regular verbs

| Person | -AR | -ER/-IR |
|---|---|---|
| yo | -é | -í |
| tú | -aste | -iste |
| él/ella | -ó | -ió |
| nosotros | -amos | -imos |
| vosotros | -asteis | -isteis |
| ellos | -aron | -ieron |

Example: \`hablar\` → hablé, hablaste, habló, hablamos, hablasteis, hablaron.

### Most common irregular verbs

| Infinitive | yo | tú | él/ella | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| ser / ir | fui | fuiste | fue | fuimos | **fuisteis** | fueron |
| tener | tuve | tuviste | tuvo | tuvimos | **tuvisteis** | tuvieron |
| estar | estuve | estuviste | estuvo | estuvimos | **estuvisteis** | estuvieron |
| hacer | hice | hiciste | hizo | hicimos | **hicisteis** | hicieron |
| venir | vine | viniste | vino | vinimos | **vinisteis** | vinieron |
| decir | dije | dijiste | dijo | dijimos | **dijisteis** | dijeron |
| ver | vi | viste | vio | vimos | **visteis** | vieron |

### Usage
Action **completed** at a specific moment in the past:
\`Ayer fui al cine.\`
\`En 2018 viví en Barcelona.\`

### Time markers
ayer, anteayer, el lunes pasado, hace dos años, en 1999.

> 💡 Indefinido = past facts; Imperfecto = background description. Compare:
> \`Ayer **llovió**\` (what happened) / \`**Llovía**\` (what the weather was like).`,
    es: `> **Antes de este tema:** el **Perfecto** (he comido) es cuando el periodo sigue abierto. **En este tema:** **Indefinido** — hecho cerrado del pasado: ayer fui, en 2018 viajé.

## Pretérito Indefinido

### Verbos regulares

| Persona | -AR | -ER/-IR |
|---|---|---|
| yo | -é | -í |
| tú | -aste | -iste |
| él/ella | -ó | -ió |
| nosotros | -amos | -imos |
| vosotros | -asteis | -isteis |
| ellos | -aron | -ieron |

Ejemplo: \`hablar\` → hablé, hablaste, habló, hablamos, hablasteis, hablaron.

### Irregulares más frecuentes

| Infinitivo | yo | tú | él/ella | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| ser / ir | fui | fuiste | fue | fuimos | **fuisteis** | fueron |
| tener | tuve | tuviste | tuvo | tuvimos | **tuvisteis** | tuvieron |
| estar | estuve | estuviste | estuvo | estuvimos | **estuvisteis** | estuvieron |
| hacer | hice | hiciste | hizo | hicimos | **hicisteis** | hicieron |
| venir | vine | viniste | vino | vinimos | **vinisteis** | vinieron |
| decir | dije | dijiste | dijo | dijimos | **dijisteis** | dijeron |
| ver | vi | viste | vio | vimos | **visteis** | vieron |

### Uso
Acción **terminada** en un momento concreto del pasado:
\`Ayer fui al cine.\`
\`En 2018 viví en Barcelona.\`

### Marcadores
ayer, anteayer, el lunes pasado, hace dos años, en 1999.

> 💡 Indefinido = hechos del pasado; Imperfecto = descripción de fondo. Compara:
> \`Ayer **llovió**\` (lo que ocurrió) / \`**Llovía**\` (cómo era el tiempo).`,
  },

  "a2-imperfecto": {
    en: `> **Before this topic:** **Indefinido** (ayer fui) is a single event. **In this topic:** **Imperfecto** — background in the past: habits, descriptions, “when I was a child”.

## Pretérito Imperfecto — background of the past

### Regular endings

| Person | -AR | -ER/-IR |
|---|---|---|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él/ella/usted | -aba | -ía |
| nosotros/as | -ábamos | -íamos |
| **vosotros/as** | **-abais** | **-íais** |
| ellos/ustedes | -aban | -ían |

Example: \`hablar\` → hablaba, hablabas, hablaba, hablábamos, **hablabais**, hablaban.

### Only 3 irregular verbs!
| Verb | Stem |
|---|---|
| **ser** | era, eras, era, éramos, **erais**, eran |
| **ir** | iba, ibas, iba, íbamos, **ibais**, iban |
| **ver** | veía, veías, veía, veíamos, **veíais**, veían |

### When to use
1. **Past habits:** \`Cuando era niño, jugaba al fútbol.\`
2. **Description:** \`Hacía sol y los pájaros cantaban.\`
3. **Ongoing action (background):** \`Yo leía cuando llamaste.\`
4. **Age/time:** \`Tenía 10 años.\`

### Comparison with Indefinido
\`**Estaba** en casa cuando **llegó** María.\`
(Imperfecto — what was happening / Indefinido — what happened).`,
    es: `> **Antes de este tema:** el **Indefinido** (ayer fui) es un suceso puntual. **En este tema:** **Imperfecto** — fondo del pasado: hábitos, descripciones, «cuando era niño».

## Pretérito Imperfecto — fondo del pasado

### Terminaciones regulares

| Persona | -AR | -ER/-IR |
|---|---|---|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él/ella/usted | -aba | -ía |
| nosotros/as | -ábamos | -íamos |
| **vosotros/as** | **-abais** | **-íais** |
| ellos/ustedes | -aban | -ían |

Ejemplo: \`hablar\` → hablaba, hablabas, hablaba, hablábamos, **hablabais**, hablaban.

### ¡Solo 3 irregulares!
| Verbo | Formas |
|---|---|
| **ser** | era, eras, era, éramos, **erais**, eran |
| **ir** | iba, ibas, iba, íbamos, **ibais**, iban |
| **ver** | veía, veías, veía, veíamos, **veíais**, veían |

### Cuándo usarlo
1. **Hábitos en el pasado:** \`Cuando era niño, jugaba al fútbol.\`
2. **Descripción:** \`Hacía sol y los pájaros cantaban.\`
3. **Acción en curso (fondo):** \`Yo leía cuando llamaste.\`
4. **Edad/tiempo:** \`Tenía 10 años.\`

### Comparación con Indefinido
\`**Estaba** en casa cuando **llegó** María.\`
(Imperfecto — lo que ocurría / Indefinido — lo que pasó).`,
  },

  "a2-por-para": {
    en: `> **Before this topic:** you already use **a, de, en**. **In this topic:** the two key prepositions **para** and **por** — purpose, reason, price, route.

## POR vs PARA — both translate differently

### PARA — purpose, destination, deadline
- **Purpose:** \`Estudio **para** aprender.\`
- **Recipient:** \`Es un regalo **para** ti.\`
- **Direction / destination:** \`El avión sale **para** Madrid.\` (heading for; “I go to the city” is usually \`Voy **a** Madrid\`)
- **Deadline:** \`Para mañana.\`

### POR — cause, route, exchange, duration
- **Cause:** \`**Por** el frío, no salí.\`
- **Route/place:** \`Paseo **por** el parque.\`
- **Exchange:** \`Lo compré **por** 10 euros.\`
- **Duration:** \`Estudié **durante** dos horas.\`
- **On behalf of:** \`Lo hago **por** ti.\`

### Mnemonic
**PARA** = purpose, forward direction
**POR** = cause, route, price

> ⚠️ Fixed expressions: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
    es: `> **Antes de este tema:** ya usas **a, de, en**. **En este tema:** **para** y **por** — finalidad, causa, precio, ruta.

## POR vs PARA — se traducen de formas distintas

### PARA — finalidad, destino, plazo
- **Finalidad:** \`Estudio **para** aprender.\`
- **Destinatario:** \`Es un regalo **para** ti.\`
- **Dirección / destino:** \`El avión sale **para** Madrid.\` (rumbo; «voy a la ciudad» suele ser \`Voy **a** Madrid\`)
- **Plazo:** \`Para mañana.\`

### POR — causa, camino, intercambio, duración
- **Causa:** \`**Por** el frío, no salí.\`
- **Camino/lugar:** \`Paseo **por** el parque.\`
- **Intercambio:** \`Lo compré **por** 10 euros.\`
- **Duración:** \`Estudié **durante** dos horas.\`
- **En lugar de:** \`Lo hago **por** ti.\`

### Mnemotecnia
**PARA** = finalidad, dirección hacia adelante
**POR** = causa, camino, precio

> ⚠️ Expresiones fijas: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
  },

  "a2-comparativos": {
    en: `> **Before this topic:** adjectives agree in gender (blanca, rojos). **In this topic:** comparisons — más… que, tan… como, el más…

## Comparatives (Comparativos)

### Regular adjectives
\`más + adjective + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

### Equality — tan / tanto
| Pattern | Use | Example |
|---|---|---|
| **tan + adjective + como** | same quality | Es **tan alta como** su hermana |
| **tanto/a(s) + noun + como** | same quantity | Tiene **tantos libros como** yo |
| **igual de + adjective + que** | also "as … as" | Es **igual de inteligente que** tú |

### Special forms (must memorize!)

| Meaning | Form |
|---|---|
| bigger/smaller | **mayor / menor** (age) or **más grande/más pequeño** (size) |
| better/worse | **mejor / peor** |
| more (quantity) | **más** |
| older/younger | **mayor / menor** |

\`Juan es **mejor** que yo.\`
\`Mi hermano es **mayor** que yo.\`

## Superlatives (Superlativos)

\`el/la/los/las + más/menos + adjective\`

- \`Es **el más alto** de la clase.\`
- \`Es **la menos cara**.\`

### Special: add -ísimo
\`bueno → buenísimo\`
\`grande → grandísimo\`
\`rápido → rapidísimo\`

> ⚠️ \`el mejor / la mejor\` (best), \`el peor / la peor\` (worst) — special superlative forms.`,
    es: `> **Antes de este tema:** los adjetivos concuerdan (blanca, rojos). **En este tema:** comparaciones — más… que, tan… como, el más…

## Comparativos

### Adjetivos regulares
\`más + adjetivo + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

### Igualdad — tan / tanto
| Estructura | Uso | Ejemplo |
|---|---|---|
| **tan + adjetivo + como** | misma cualidad | Es **tan alta como** su hermana |
| **tanto/a(s) + sustantivo + como** | misma cantidad | Tiene **tantos libros como** yo |
| **igual de + adjetivo + que** | también «igual de» | Es **igual de inteligente que** tú |

### Formas especiales (¡memorizar!)

| Significado | Forma |
|---|---|
| mayor/menor | **mayor / menor** (edad) o **más grande/más pequeño** (tamaño) |
| mejor/peor | **mejor / peor** |
| más (cantidad) | **más** |
| mayor/menor | **mayor / menor** |

\`Juan es **mejor** que yo.\`
\`Mi hermano es **mayor** que yo.\`

## Superlativos

\`el/la/los/las + más/menos + adjetivo\`

- \`Es **el más alto** de la clase.\`
- \`Es **la menos cara**.\`

### Especial: añadir -ísimo
\`bueno → buenísimo\`
\`grande → grandísimo\`
\`rápido → rapidísimo\`

> ⚠️ \`el mejor / la mejor\`, \`el peor / la peor\` — formas especiales de superlativo.`,
  },

  "a2-futuro-simple": {
    en: `> **Before this topic:** near future with **ir a + infinitive** (voy a comer). **In this topic:** **simple future** in one word — hablaré, tendré.

## Futuro Simple

### Formation: infinitive + ending

Add to the **infinitive** (without dropping -ar/-er/-ir):

| Person | Ending |
|---|---|
| yo | -é |
| tú | -ás |
| él/ella | -á |
| nosotros | -emos |
| vosotros | -éis |
| ellos | -án |

Examples:
- \`hablar\` → hablar**é**, hablar**ás**, hablar**á**…
- \`comer\` → comer**é**, comer**ás**…
- \`vivir\` → vivir**é**, vivir**ás**…

### Irregular stems (12 verbs)
| Infinitive | Future stem |
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

### Usage
1. **Prediction:** \`Mañana **lloverá**.\`
2. **Promise:** \`Te **llamaré** esta noche.\`
3. **Plans:** \`El año que viene **viajaré** a España.\`

> 💡 Also: “probably three o’clock” (\`Serán las tres\`) is **C2 conjecture**, not this future-as-plan.`,
    es: `> **Antes de este tema:** futuro próximo con **ir a + infinitivo** (voy a comer). **En este tema:** **futuro simple** en una palabra — hablaré, tendré.

## Futuro Simple

### Formación: infinitivo + terminación

Se añade al **infinitivo** (sin quitar -ar/-er/-ir):

| Persona | Terminación |
|---|---|
| yo | -é |
| tú | -ás |
| él/ella | -á |
| nosotros | -emos |
| vosotros | -éis |
| ellos | -án |

Ejemplos:
- \`hablar\` → hablar**é**, hablar**ás**, hablar**á**…
- \`comer\` → comer**é**, comer**ás**…
- \`vivir\` → vivir**é**, vivir**ás**…

### Raíces irregulares (12 verbos)
| Infinitivo | Raíz del futuro |
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

### Uso
1. **Predicción:** \`Mañana **lloverá**.\`
2. **Promesa:** \`Te **llamaré** esta noche.\`
3. **Planes:** \`El año que viene **viajaré** a España.\`

> 💡 También: «probablemente son las tres» (\`Serán las tres\`) es **conjetura C2**, no este futuro-plan.`,
  },

  "b1-subjuntivo": {
    en: `> **Before this topic:** main tenses describe **facts**. **In this topic:** **subjunctive** — for wishes, doubt, or emotion (quiero que vengas).

## Modo Subjuntivo — Presente

### Formation
Take the **yo** form of presente, change ending: -AR ↔ -ER/-IR.

| Person | -AR (hablar → hablo) | -ER (comer → como) |
|---|---|---|
| yo | hable | coma |
| tú | hables | comas |
| él/ella/usted | hable | coma |
| nosotros/as | hablemos | comamos |
| **vosotros/as** | **habléis** | **comáis** |
| ellos/ustedes | hablen | coman |

### Irregular stems
- tener → **tenga**, estar → **esté**, hacer → **haga**
- ser → **sea**, ir → **vaya**, saber → **sepa**
- Verbs with alternation: pensar → **piense**, pedir → **pida**

### When to use Subjuntivo
1. **Wish:** \`Quiero que **vengas**.\`
2. **Emotion:** \`Me alegra que **estés** aquí.\`
3. **Doubt:** \`Dudo que **sepa** la respuesta.\`
4. **Indefiniteness:** \`Busco a alguien que **hable** ruso.\`
5. **After certain conjunctions:** para que, antes de que, aunque (hypothetical).

### WEIRDO — mnemonic
**W**ish, **E**motion, **Impersonal expressions**, **R**ecommendation, **D**oubt, **O**jalá.

> ⚠️ \`Creo que...\` → Indicativo (certainty). \`No creo que...\` → Subjuntivo (doubt).`,
    es: `> **Antes de este tema:** los tiempos principales describen **hechos**. **En este tema:** **subjuntivo** — deseos, dudas o emociones (quiero que vengas).

## Modo Subjuntivo — Presente

### Formación
Se toma la forma **yo** del presente y se cambia la terminación: -AR ↔ -ER/-IR.

| Persona | -AR (hablar → hablo) | -ER (comer → como) |
|---|---|---|
| yo | hable | coma |
| tú | hables | comas |
| él/ella/usted | hable | coma |
| nosotros/as | hablemos | comamos |
| **vosotros/as** | **habléis** | **comáis** |
| ellos/ustedes | hablen | coman |

### Raíces irregulares
- tener → **tenga**, estar → **esté**, hacer → **haga**
- ser → **sea**, ir → **vaya**, saber → **sepa**
- Verbos con alternancia: pensar → **piense**, pedir → **pida**

### Cuándo usar Subjuntivo
1. **Deseo:** \`Quiero que **vengas**.\`
2. **Emoción:** \`Me alegra que **estés** aquí.\`
3. **Duda:** \`Dudo que **sepa** la respuesta.\`
4. **Indefinición:** \`Busco a alguien que **hable** ruso.\`
5. **Tras ciertas conjunciones:** para que, antes de que, aunque (hipotético).

### WEIRDO — mnemotecnia
**W**ish, **E**motion, **Impersonal expressions**, **R**ecommendation, **D**oubt, **O**jalá.

> ⚠️ \`Creo que...\` → Indicativo (certeza). \`No creo que...\` → Subjuntivo (duda).`,
  },

  "b1-imperativo": {
    en: `> **Before this topic:** you already know **subjunctive** forms (hable, comas). **In this topic:** **Imperativo** — commands and requests: habla, no hables.

## Imperativo

### Affirmative form (afirmativo)

Imperative for **tú / usted / nosotros / vosotros / ustedes** matches **present subjunctive** (except affirmative **tú** and **vosotros**).

| Person | -AR | -ER | -IR | Common irregulars |
|---|---|---|---|---|
| **tú** | habl**a** | com**e** | viv**e** | ten, pon, ven, sal, haz, di, sé, ve |
| **usted** | habl**e** | com**a** | viv**a** | sea, vaya, dé |
| **nosotros** | habl**emos** | com**amos** | viv**amos** | vamos, demos |
| **vosotros** | habl**ad** | com**ed** | viv**id** | — |
| **ustedes** | habl**en** | com**an** | viv**an** | sean, vayan |

Whole forms: \`hablad\`, \`comed\`, \`vivid\`. Negative vosotros: \`no habléis\`, \`no comáis\`, \`no viváis\`.

> ⚠️ **nosotros**: -AR → **-emos** (\`hablemos\`), -ER/-IR → **-amos** (\`comamos\`, \`vivamos\`). Not like present indicative (\`hablamos\` / \`comemos\`).

### Negative form (negativo) = Subjuntivo
Always subjunctive + \`no\` before the verb:
- \`No **hables**\`, \`No **comas**\`, \`No **vivas**\`
- \`No **hablemos**\`, \`No **comamos**\`
- Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`

### Special tú forms (affirmative only)
| Infinitive | tú |
|---|---|
| tener | ten |
| poner | pon |
| venir | ven |
| salir | sal |
| hacer | haz |
| decir | di |
| ser | sé |
| ir | ve |

> 💡 Negatives drop the short forms: \`ten\` → \`no **tengas**\`, \`ve\` → \`no **vayas**\`.

### With pronouns
In affirmative form, pronouns **attach** to the verb:
\`**Dímelo**\` (di + me + lo) = tell me it.

In negative — pronouns go **before**:
\`**No me lo digas**\`.

> 💡 Stress stays on the verb: dí-me-lo, có-me-lo.`,
    es: `> **Antes de este tema:** ya conoces el **subjuntivo** (hable, comas). **En este tema:** **Imperativo** — órdenes y peticiones: habla, no hables.

## Imperativo

### Forma afirmativa

El imperativo de **tú / usted / nosotros / vosotros / ustedes** coincide con el **presente de subjuntivo** (excepto **tú** y **vosotros** afirmativos).

| Persona | -AR | -ER | -IR | Irregulares frecuentes |
|---|---|---|---|---|
| **tú** | habl**a** | com**e** | viv**e** | ten, pon, ven, sal, haz, di, sé, ve |
| **usted** | habl**e** | com**a** | viv**a** | sea, vaya, dé |
| **nosotros** | habl**emos** | com**amos** | viv**amos** | vamos, demos |
| **vosotros** | habl**ad** | com**ed** | viv**id** | — |
| **ustedes** | habl**en** | com**an** | viv**an** | sean, vayan |

Enteros: \`hablad\`, \`comed\`, \`vivid\`. Negación vosotros: \`no habléis\`, \`no comáis\`, \`no viváis\`.

> ⚠️ **nosotros**: -AR → **-emos** (\`hablemos\`), -ER/-IR → **-amos** (\`comamos\`, \`vivamos\`). No es como el presente de indicativo (\`hablamos\` / \`comemos\`).

### Forma negativa = Subjuntivo
Siempre subjuntivo + \`no\` delante del verbo:
- \`No **hables**\`, \`No **comas**\`, \`No **vivas**\`
- \`No **hablemos**\`, \`No **comamos**\`
- Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`

### Formas especiales tú (solo afirmativo)
| Infinitivo | tú |
|---|---|
| tener | ten |
| poner | pon |
| venir | ven |
| salir | sal |
| hacer | haz |
| decir | di |
| ser | sé |
| ir | ve |

> 💡 En negativo no se usan: \`ten\` → \`no **tengas**\`, \`ve\` → \`no **vayas**\`.

### Con pronombres
En afirmativo, los pronombres **se unen** al verbo:
\`**Dímelo**\` (di + me + lo).

En negativo van **delante**:
\`**No me lo digas**\`.

> 💡 La tilde se mantiene en el verbo: dí-me-lo, có-me-lo.`,
  },

  "b1-condicional": {
    en: `> **Before this topic:** you already build **Futuro** (hablaré, tendré). **In this topic:** **Condicional** — “I would” and polite requests: hablaría, podría.

## Condicional Simple

### Formation: infinitive + ending

| Person | Ending |
|---|---|
| yo | -ía |
| tú | -ías |
| él/ella | -ía |
| nosotros | -íamos |
| vosotros | -íais |
| ellos | -ían |

Examples:
- \`hablar\` → hablar**ía**, hablar**ías**…
- \`comer\` → comer**ía**, comer**ías**…

### Irregular stems (same as future)
\`tener → tendría\`, \`poner → pondría\`, \`hacer → haría\`,
\`poder → podría\`, \`saber → sabría\`, \`querer → querría\`, \`decir → diría\`.

### Usage
1. **Politeness:** \`¿**Podría** ayudarme?\`
2. **Wish:** \`**Me gustaría** viajar.\`
3. **Hypothesis about past:** \`Dijo que **vendría**.\`
4. **Advice:** \`Yo que tú, **estudiaría** más.\`

### Si-constructions (unreal condition in present)
\`Si **tuviera** tiempo, **saldría** contigo.\`
- \`Si + Subjuntivo imperfecto + Condicional\`

> 💡 Condicional = future shifted into the imaginary/hypothetical.`,
    es: `> **Antes de este tema:** ya formas el **Futuro** (hablaré, tendré). **En este tema:** **Condicional** — «yo haría» y peticiones corteses: hablaría, podría.

## Condicional Simple

### Formación: infinitivo + terminación

| Persona | Terminación |
|---|---|
| yo | -ía |
| tú | -ías |
| él/ella | -ía |
| nosotros | -íamos |
| vosotros | -íais |
| ellos | -ían |

Ejemplos:
- \`hablar\` → hablar**ía**, hablar**ías**…
- \`comer\` → comer**ía**, comer**ías**…

### Raíces irregulares (las mismas que en futuro)
\`tener → tendría\`, \`poner → pondría\`, \`hacer → haría\`,
\`poder → podría\`, \`saber → sabría\`, \`querer → querría\`, \`decir → diría\`.

### Uso
1. **Cortesía:** \`¿**Podría** ayudarme?\`
2. **Deseo:** \`**Me gustaría** viajar.\`
3. **Hipótesis sobre el pasado:** \`Dijo que **vendría**.\`
4. **Consejo:** \`Yo que tú, **estudiaría** más.\`

### Construcciones con si (condición irreal en presente)
\`Si **tuviera** tiempo, **saldría** contigo.\`
- \`Si + Subjuntivo imperfecto + Condicional\`

> 💡 Condicional = futuro trasladado a lo imaginario/hipotético.`,
  },

  "b1-pronombre-se": {
    en: `> **Before this topic:** you know the **Condicional** (hablaría, podría). **In this topic:** the pronoun **se** — before the “Passive voice” chapter; por/para was covered in A2.

## The pronoun SE — most important functions

### 1. Reflexive (reflexivo)
\`levantarse\` → \`Me **levanto** a las 7.\`
\`lavarse\` → \`Se **lava** las manos.\`

### 2. Reciprocal (recíproco)
\`**Se** ven todos los días.\`
\`**Nos** abrazamos.\`

### 3. Passive (pasiva refleja) — no agent stated
\`**Se** habla español.\`
\`**Se** venden casas.\`
- Verb **agrees** with the noun: \`Se vende pan\` / \`Se venden libros\`.

### 4. Impersonal (impersonal)
\`**Se** vive bien aquí.\`
- Always 3rd person singular.

### 5. Accidental (accidental)
\`**Se** me rompió el vaso.\`
- Format: \`Se + [indirect pronoun] + verb + article + noun\`
\`**Se** le olvidó la contraseña.\`

> ⚠️ \`se\` is the most common pronoun in Spanish after \`que\`. Context determines the meaning.`,
    es: `> **Antes de este tema:** ya conoces el **Condicional** (hablaría, podría). **En este tema:** el pronombre **se** — antes del capítulo «Voz pasiva»; por/para ya viste en A2.

## El pronombre SE — funciones principales

### 1. Reflexivo
\`levantarse\` → \`Me **levanto** a las 7.\`
\`lavarse\` → \`Se **lava** las manos.\`

### 2. Recíproco
\`**Se** ven todos los días.\`
\`**Nos** abrazamos.\`

### 3. Pasiva refleja — sin agente
\`**Se** habla español.\`
\`**Se** venden casas.\`
- El verbo **concuerda** con el sustantivo: \`Se vende pan\` / \`Se venden libros\`.

### 4. Impersonal
\`**Se** vive bien aquí.\`
- Siempre 3.ª persona del singular.

### 5. Accidental
\`**Se** me rompió el vaso.\`
- Formato: \`Se + [pronombre indirecto] + verbo + artículo + sustantivo\`
\`**Se** le olvidó la contraseña.\`

> ⚠️ \`se\` es el pronombre más frecuente en español después de \`que\`. El contexto determina el significado.`,
  },

  "b1-relativos": {
    en: `> **Before this topic:** you already build complex sentences. **In this topic:** linking words **que, quien, donde, cuyo** to connect two clauses.

## Relative pronouns (Pronombres relativos)

### QUE — the most universal
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Used for people and things. After a preposition use **el/la que**, not bare *de que*:
\`el tema **del que** hablamos\`, \`la persona **de la que** hablo\`.

### QUIEN — only for people (after comma or preposition)
\`Mi hermano, **quien** vive en Madrid, es médico.\`
\`Es el profesor **con quien** hablé.\`

### EL QUE / LA QUE / LOS QUE / LAS QUE — specification
\`El **que** estudia, aprueba.\`
\`Las **que** vinieron.\`

### LO QUE — "what/that which" (abstract)
\`Esto es **lo que** quiero.\`
\`No entendí **lo que** dijiste.\`

### CUYO / CUYA / CUYOS / CUYAS — "whose"
\`El hombre **cuyo** coche es rojo.\`
- **Agrees** with what is owned (not the owner):
\`la mujer **cuyos** hijos…\`

### DONDE — "where" (place)
\`La ciudad **donde** vivo.\`

> 💡 \`que\` = general; \`quien\` = people only; \`donde\` = place only; \`cuyo\` = possession (whose).`,
    es: `> **Antes de este tema:** ya construyes oraciones complejas. **En este tema:** conectores **que, quien, donde, cuyo** para unir dos frases.

## Pronombres relativos

### QUE — el más universal
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Para personas y cosas. Tras preposición: **el/la que**, no *de que* suelto:
\`el tema **del que** hablamos\`, \`la persona **de la que** hablo\`.

### QUIEN — solo personas (tras coma o preposición)
\`Mi hermano, **quien** vive en Madrid, es médico.\`
\`Es el profesor **con quien** hablé.\`

### EL QUE / LA QUE / LOS QUE / LAS QUE — especificación
\`El **que** estudia, aprueba.\`
\`Las **que** vinieron.\`

### LO QUE — «lo que» (abstracto)
\`Esto es **lo que** quiero.\`
\`No entendí **lo que** dijiste.\`

### CUYO / CUYA / CUYOS / CUYAS — «cuyo»
\`El hombre **cuyo** coche es rojo.\`
- **Concuerda** con lo poseído (no con el poseedor):
\`la mujer **cuyos** hijos…\`

### DONDE — «donde» (lugar)
\`La ciudad **donde** vivo.\`

> 💡 \`que\` = general; \`quien\` = solo personas; \`donde\` = solo lugar; \`cuyo\` = posesión.`,
  },

  "b1-pluscuamperfecto": {
    en: `> **Before this topic:** you know **haber + participle** from Perfecto (he comido). **In this topic:** **Pluscuamperfecto** — haber in the imperfect: había comido.

## Pretérito Pluscuamperfecto — "past-before-past"

### Formula: HABER (in imperfecto) + participio

**haber** in imperfecto: había, habías, había, habíamos, habíais, habían

**Participio** (same as perfecto):
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido

Irregular: \`hecho, visto, puesto, escrito, abierto, dicho, vuelto\`.

### Examples
\`Cuando llegué, el tren ya **había salido**.\`
\`No tenía hambre porque ya **había comido**.\`

### Usage
Action that happened **before** another action in the past:

| Earlier (pluscuamperfecto) | Later (indefinido/imperfecto) |
|---|---|
| había terminado | cuando llegaste |

### Time markers
\`ya\`, \`nunca\`, \`todavía no\`.

> 💡 Used in reported speech: \`Dijo que **había** terminado.\``,
    es: `> **Antes de este tema:** ya conoces **haber + participio** del Perfecto (he comido). **En este tema:** **Pluscuamperfecto** — haber en imperfecto: había comido.

## Pretérito Pluscuamperfecto — «pasado del pasado»

### Fórmula: HABER (en imperfecto) + participio

**haber** en imperfecto: había, habías, había, habíamos, habíais, habían

**Participio** (como en perfecto):
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido

Irregulares: \`hecho, visto, puesto, escrito, abierto, dicho, vuelto\`.

### Ejemplos
\`Cuando llegué, el tren ya **había salido**.\`
\`No tenía hambre porque ya **había comido**.\`

### Uso
Acción que ocurrió **antes** que otra acción en el pasado:

| Antes (pluscuamperfecto) | Después (indefinido/imperfecto) |
|---|---|
| había terminado | cuando llegaste |

### Marcadores
\`ya\`, \`nunca\`, \`todavía no\`.

> 💡 Se usa en estilo indirecto: \`Dijo que **había** terminado.\``,
  },

  "b1-subjuntivo-imperfecto": {
    en: `> **Before this topic:** you already use present **subjunctive** (quiera que vengas). **In this topic:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.

## Subjuntivo Imperfecto

### Formation

Not from the infinitive and **not** like the future (\`tendré\`, \`haré\`, \`diré\`).

Take the **ellos** form of pretérito indefinido, drop **-ron**, add **-ra** (or **-se**):

| ellos indefinido | → imperfect subjunctive |
|---|---|
| habla**ron** | habla**ra**, habla**ras**… |
| tuvie**ron** | tuvie**ra**… |
| dije**ron** | dije**ra**… |

Regular: \`hablar → hablara\`, \`comer → comiera\`.
Irregulars share **indefinido** stems, not future stems: \`tener → tuviera\` (not *tendriera), \`decir → dijera\`, \`hacer → hiciera\`.

### When to use
1. **Si-construction (unreal condition):**
   \`Si **tuviera** dinero, viajaría.\`
2. **After «como si» (as if):**
   \`Me habla como si **fuera** tonto.\`
3. **After emotion/will in the past:**
   \`Quería que **vinieras**.\`
4. **Polite requests:**
   \`Quisiera un café.\`

### Double form (-ra / -se)
\`hablara = hablase\`. Not “obsolete”: **-se** is more common in writing.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = unreal condition. One of the most common B1-B2 constructions.`,
    es: `> **Antes de este tema:** ya usas el **subjuntivo** presente (quiera que vengas). **En este tema:** **Imperfecto de Subjuntivo** — si tuviera, quería que vinieras.

## Subjuntivo Imperfecto

### Formación

No sale del infinitivo ni del **futuro** (\`tendré\`, \`haré\`, \`diré\`).

Se toma la forma de **ellos** del pretérito indefinido, se quita **-ron** y se añade **-ra** (o **-se**):

| ellos indefinido | → imperfecto de subjuntivo |
|---|---|
| habla**ron** | habla**ra**, habla**ras**… |
| tuvie**ron** | tuvie**ra**… |
| dije**ron** | dije**ra**… |

Regulares: \`hablar → hablara\`, \`comer → comiera\`.
Irregulares = raíces del **indefinido**, no del futuro: \`tener → tuviera\` (no *tendriera), \`decir → dijera\`, \`hacer → hiciera\`.

### Cuándo usarlo
1. **Construcción con si (condición irreal):**
   \`Si **tuviera** dinero, viajaría.\`
2. **Tras «como si»:**
   \`Me habla como si **fuera** tonto.\`
3. **Tras emoción/voluntad en pasado:**
   \`Quería que **vinieras**.\`
4. **Peticiones corteses:**
   \`Quisiera un café.\`

### Doble forma (-ra / -se)
\`hablara = hablase\`. No es «anticuada»: **-se** es más frecuente en el registro escrito.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = condición irreal. Una de las construcciones más frecuentes de B1-B2.`,
  },

  "b1-pronombres-objetos": {
    en: `> **Before this topic:** you know **me / te / le** from gustar. **In this topic:** **lo, la, le** — direct and indirect objects: lo veo, le doy, se lo digo.

## Object pronouns (OD and OI)

### Direct object (Objeto Directo — what?)
Answers "what/whom?" (no preposition).

| Person | OD |
|---|---|
| me | me |
| te | te |
| lo / la | him/her (m./f.) |
| nos | us |
| os | you (pl.) |
| los / las | them |

Example: \`**Lo** veo.\` \`**La** leo.\`

### Indirect object (Objeto Indirecto — to whom?)
Answers "to whom?" (with preposition a).

| Person | OI |
|---|---|
| me | me |
| te | te |
| **le** | him/her |
| nos | us |
| os | you (pl.) |
| **les** | them |

Example: \`**Le** doy el libro.\`

### Double pronouns (OD + OI)
When both appear: \`me lo, te lo, se lo, nos lo\`.

⚠️ **le/les + lo/la/los/las → SE**
\`Le + lo = **se lo**\` (NOT ~~le lo~~).
\`**Se lo** di.\`

### Order of pronouns
1. **Before conjugated verb:** \`Te lo digo.\`
2. **After infinitive/gerund (attached):** \`Voy a de**círtelo**.\` \`Estoy di**ciéndotelo**.\`
3. **After affirmative imperative (attached):** \`¡**Dímelo**!\`

> 💡 Mnemonic: OI before OD — "Le lo" is impossible. Hence "Se lo".`,
    es: `> **Antes de este tema:** ya conoces **me / te / le** del gustar. **En este tema:** **lo, la, le** — complemento directo e indirecto: lo veo, le doy, se lo digo.

## Pronombres de objeto (OD y OI)

### Objeto directo (OD — ¿qué?)
Responde a «¿qué/quién?» (sin preposición).

| Persona | OD |
|---|---|
| me | me |
| te | te |
| lo / la | lo/la |
| nos | nos |
| os | os |
| los / las | los/las |

Ejemplo: \`**Lo** veo.\` \`**La** leo.\`

### Objeto indirecto (OI — ¿a quién?)
Responde a «¿a quién?» (con preposición a).

| Persona | OI |
|---|---|
| me | me |
| te | te |
| **le** | le |
| nos | nos |
| os | os |
| **les** | les |

Ejemplo: \`**Le** doy el libro.\`

### Pronombres dobles (OD + OI)
Cuando aparecen ambos: \`me lo, te lo, se lo, nos lo\`.

⚠️ **le/les + lo/la/los/las → SE**
\`Le + lo = **se lo**\` (NO ~~le lo~~).
\`**Se lo** di.\`

### Orden de los pronombres
1. **Antes del verbo conjugado:** \`Te lo digo.\`
2. **Tras infinitivo/gerundio (unidos):** \`Voy a de**círtelo**.\` \`Estoy di**ciéndotelo**.\`
3. **Tras imperativo afirmativo (unidos):** \`¡**Dímelo**!\`

> 💡 Mnemotecnia: OI antes que OD — «Le lo» es imposible. Por eso «Se lo».`,
  },

  "b1-adverbios": {
    en: `> **Before this topic:** you agree adjectives (rápida, fácil). **In this topic:** adverbs — “how?” — often **-mente**: rápidamente, fácilmente.

## Adverbs (Adverbios)

### Formation -mente (how? in what manner?)
**Adjective (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ If the adjective has only m. form: \`feliz → felizmente\`.

⚠️ The written accent **stays on the adjective**; -mente does not get one: \`fácil → fácilmente\`, \`difícil → difícilmente\`.

### Adverbs of time
\`hoy\`, \`ayer\`, \`mañana\`, \`ahora\`, \`tarde\`, \`temprano\`, \`pronto\`,
\`siempre\`, \`nunca\`, \`ya\`, \`todavía\`.

### Adverbs of place
\`aquí\`, \`allí\`, \`allá\`, \`cerca\`, \`lejos\`, \`delante\`, \`detrás\`,
\`arriba\`, \`abajo\`, \`adentro\`, \`afuera\`.

### Adverbs of doubt
\`quizás\`, \`tal vez\`, \`acaso\`, \`posiblemente\`, \`probablemente\`.
⚠️ These often **require subjuntivo**: \`Quizás **venga** mañana.\`.

### Adverbs of quantity
\`mucho\`, \`poco\`, \`muy\`, \`bastante\`, \`demasiado\`, \`tan\`, \`tanto\`.

### muy vs mucho
- **muy** + adjective/adverb: \`muy **bueno**\`, \`muy **rápido**\`
- **mucho** + noun/verb: \`mucho **trabajo**\`, \`trabajo **mucho**\``,
    es: `> **Antes de este tema:** ya concuerdas adjetivos (rápida, fácil). **En este tema:** adverbios — «¿cómo?» — a menudo **-mente**: rápidamente.

## Adverbios

### Formación -mente (¿cómo?)
**Adjetivo (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ Si el adjetivo solo tiene forma m.: \`feliz → felizmente\`.

⚠️ La tilde **se queda en el adjetivo**; -mente no lleva acento propio: \`fácil → fácilmente\`, \`difícil → difícilmente\`.

### Adverbios de tiempo
\`hoy\`, \`ayer\`, \`mañana\`, \`ahora\`, \`tarde\`, \`temprano\`, \`pronto\`,
\`siempre\`, \`nunca\`, \`ya\`, \`todavía\`.

### Adverbios de lugar
\`aquí\`, \`allí\`, \`allá\`, \`cerca\`, \`lejos\`, \`delante\`, \`detrás\`,
\`arriba\`, \`abajo\`, \`adentro\`, \`afuera\`.

### Adverbios de duda
\`quizás\`, \`tal vez\`, \`acaso\`, \`posiblemente\`, \`probablemente\`.
⚠️ A menudo **requieren subjuntivo**: \`Quizás **venga** mañana.\`.

### Adverbios de cantidad
\`mucho\`, \`poco\`, \`muy\`, \`bastante\`, \`demasiado\`, \`tan\`, \`tanto\`.

### muy vs mucho
- **muy** + adjetivo/adverbio: \`muy **bueno**\`, \`muy **rápido**\`
- **mucho** + sustantivo/verbo: \`mucho **trabajo**\`, \`trabajo **mucho**\``,
  },

  "b2-estilo-indirecto": {
    en: `> **Before this topic:** you have covered **DELE letter writing** (condicional, formal register). **In this topic:** **reported speech** — how to relay someone else’s words: dijo que vendría.

## Reported Speech (estilo indirecto)

### Direct → Indirect (same time frame)
> Direct: \`Ana dice: "Hoy **llego** tarde."\`
> Indirect: \`Ana dice que hoy **llega** tarde.\`

If the main verb is in **present** (dice) — tense does not change, only
persons and pronouns shift.

### Tense shift (main verb in past: dijo)
| Direct | Indirect |
|---|---|
| Presente | Pretérito Imperfecto |
| Pretérito Indefinido/Perfecto | Pluscuamperfecto |
| Futuro | Condicional |

Example:
> Direct: \`Juan dijo: "Vendré mañana."\`
> Indirect: \`Juan dijo que **vendría** al día siguiente.\`

### Changes of deictics
| Direct | Indirect |
|---|---|
| hoy | aquel día / ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |

### Indirect questions
\`Me pregunto **si** vendrá.\` / \`No sé **qué** hacer.\`
— no inversion and no question marks in indirect form.

> ⚠️ Imperative → Subjuntivo:
> \`Dijo: "Hazlo"\` → \`Dijo que **lo hiciera**.\``,
    es: `> **Antes de este tema:** ya viste la **carta DELE** (condicional, registro formal). **En este tema:** **estilo indirecto** — transmitir palabras ajenas: dijo que vendría.

## Estilo Indirecto

### Directo → Indirecto (simultaneidad)
> Directo: \`Ana dice: "Hoy **llego** tarde."\`
> Indirecto: \`Ana dice que hoy **llega** tarde.\`

Si el verbo principal está en **presente** (dice) — el tiempo no cambia, solo
cambian las personas y los pronombres.

### Cambio de tiempos (verbo principal en pasado: dijo)
| Directo | Indirecto |
|---|---|
| Presente | Pretérito Imperfecto |
| Pretérito Indefinido/Perfecto | Pluscuamperfecto |
| Futuro | Condicional |

Ejemplo:
> Directo: \`Juan dijo: "Vendré mañana."\`
> Indirecto: \`Juan dijo que **vendría** al día siguiente.\`

### Cambios deícticos
| Directo | Indirecto |
|---|---|
| hoy | aquel día / ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |

### Preguntas indirectas
\`Me pregunto **si** vendrá.\` / \`No sé **qué** hacer.\`
— sin inversión ni signos de interrogación en forma indirecta.

> ⚠️ Imperativo → Subjuntivo:
> \`Dijo: "Hazlo"\` → \`Dijo que **lo hiciera**.\``,
  },

  "b2-voz-pasiva": {
    en: `> **Before this topic:** you have covered **reported speech** and the **SE pronoun** chapter. **In this topic:** **passive voice** — ser + participle and **se** passive (se habla, se venden).

## Voz Pasiva

### 1. Voz pasiva con SER (classical)
**SER** + participio (+ **por** + agent)

\`El libro **fue escrito** por Cervantes.\`
\`La carta **es enviada** por la empresa.\`

Tenses change SER:
| Tense | Form |
|---|---|
| Presente | es escrito |
| Pret. indefinido | fue escrito |
| Pret. imperfecto | era escrito |
| Futuro | será escrito |

Used in **formal, written** register (news, science).

### 2. Pasiva refleja (natural and common)
**SE** + verb in 3rd person

\`**Se** habla español.\`
\`**Se** venden casas.\`

Agreement with subject:
\`Se **vende** pan\` (sg.) / \`Se **venden** libros\` (pl.).

### When to use which
- **SER pasiva**: emphasis on **process** or **agent** (por...).
- **Pasiva refleja**: emphasis on **action/result**, agent unimportant — the
  most common and natural form in speech.

> 💡 In Spanish pasiva refleja is much more natural than English passive.
> Don't translate literally: \`"The door is closed"\` → \`"La puerta está cerrada"\`
> (state) or \`"Se cierra la puerta"\` (action).`,
    es: `> **Antes de este tema:** ya viste **estilo indirecto** y el capítulo del **pronombre se**. **En este tema:** **voz pasiva** — ser + participio y **se** pasiva (se habla, se venden).

## Voz Pasiva

### 1. Voz pasiva con SER (clásica)
**SER** + participio (+ **por** + agente)

\`El libro **fue escrito** por Cervantes.\`
\`La carta **es enviada** por la empresa.\`

Los tiempos cambian SER:
| Tiempo | Forma |
|---|---|
| Presente | es escrito |
| Pret. indefinido | fue escrito |
| Pret. imperfecto | era escrito |
| Futuro | será escrito |

Se usa en registro **formal, escrito** (noticias, ciencia).

### 2. Pasiva refleja (natural y frecuente)
**SE** + verbo en 3.ª persona

\`**Se** habla español.\`
\`**Se** venden casas.\`

Concordancia con el sujeto:
\`Se **vende** pan\` (sg.) / \`Se **venden** libros\` (pl.).

### Cuándo usar cada una
- **SER pasiva**: énfasis en el **proceso** o el **agente** (por...).
- **Pasiva refleja**: énfasis en la **acción/resultado**, agente irrelevante — la
  forma más frecuente y natural en el habla.

> 💡 En español la pasiva refleja es mucho más natural que el pasivo inglés.
> No traduzcas literalmente: \`"The door is closed"\` → \`"La puerta está cerrada"\`
> (estado) o \`"Se cierra la puerta"\` (acción).`,
  },

  "b2-subjuntivo-compuestos": {
    en: `> **Before this topic:** you already know the **subjunctive** rule. **In this topic:** compound forms — **haya hablado**, **hubiera hablado**.

## Compound Subjuntivo forms

### Subjuntivo Perfecto (completed past)
Formula: **haya** + participio

\`haya, hayas, haya, hayamos, hayáis, hayan + hablado/comido/vivido\`

Usage:
1. **Emotion about something completed:**
   \`Me alegra que **hayas llegado**.\`
2. **Doubt about the past:**
   \`Dudo que **haya** terminado.\`
3. **After «cuando» (future completed):**
   \`Cuando **hayas** terminado, avísame.\`

### Subjuntivo Pluscuamperfecto (past-before-past)
Formula: **hubiera/hubiese** + participio

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubierais/hubieseis, hubieran + hablado\`

Usage:
1. **Si-construction (unreal condition in past):**
   \`Si **hubiera sabido**, habría ido.\`
2. **After «como si» (unreal comparison):**
   \`Habla como si **hubiera vivido** en España.\`
3. **In reported speech (after past):**
   \`Dudaba que **hubiera** terminado.\`

### Double form -ra / -se
\`hubiera hablado = hubiese hablado\` (equivalent, -se more literary).

> ⚠️ Universal rule: **Indicativo for facts, Subjuntivo for subjective**
> (emotion, doubt, wish, hypothesis). Perfect forms simply shift the same rule to the past.`,
    es: `> **Antes de este tema:** ya conoces la regla del **subjuntivo**. **En este tema:** formas compuestas — **haya hablado**, **hubiera hablado**.

## Formas compuestas del Subjuntivo

### Subjuntivo Perfecto (pasado completado)
Fórmula: **haya** + participio

\`haya, hayas, haya, hayamos, hayáis, hayan + hablado/comido/vivido\`

Uso:
1. **Emoción sobre algo completado:**
   \`Me alegra que **hayas llegado**.\`
2. **Duda sobre el pasado:**
   \`Dudo que **haya** terminado.\`
3. **Tras «cuando» (futuro completado):**
   \`Cuando **hayas** terminado, avísame.\`

### Subjuntivo Pluscuamperfecto (pasado anterior)
Fórmula: **hubiera/hubiese** + participio

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubierais/hubieseis, hubieran + hablado\`

Uso:
1. **Construcción con si (condición irreal en pasado):**
   \`Si **hubiera sabido**, habría ido.\`
2. **Tras «como si» (comparación irreal):**
   \`Habla como si **hubiera vivido** en España.\`
3. **En estilo indirecto (tras pasado):**
   \`Dudaba que **hubiera** terminado.\`

### Doble forma -ra / -se
\`hubiera hablado = hubiese hablado\` (equivalentes, -se más literario).

> ⚠️ Regla universal: **Indicativo para hechos, Subjuntivo para lo subjetivo**
> (emoción, duda, deseo, hipótesis). Las formas compuestas trasladan la misma regla al pasado.`,
  },

  "b2-condicionales-compuestos": {
    en: `> **Before this topic:** you know **si tuviera, saldría**. **In this topic:** past result — **habría** + participle — plus a summary of three **si** types.

## Condicional Compuesto

### Formula: **haber** (in condicional) + participio

\`habría, habrías, habría, habríamos, habríais, habrían + hablado/comido\`

Irregular participles: \`hecho, visto, dicho, puesto, escrito, abierto\`.

### When to use
1. **Unreal condition in past (with si + pluscuamperfecto):**
   \`Si **hubiera** tenido tiempo, **habría** ido.\`
2. **Polite regret:**
   \`**Habría** preferido otra cosa.\`
3. **Hypothesis about past:**
   \`¿Quién lo hizo? — **Habría** sido Juan.\`
4. **Reported speech (futuro → condicional compuesto):**
   \`Dijo que lo **habría terminado** para hoy.\`

### Three types of si-conditions

| Type | Conjunction | Verb after si | Main clause |
|---|---|---|---|
| Real | si | presente | futuro |
| Unreal (present) | si | imperfecto subj. | condicional simple |
| Unreal (past) | si | pluscuamperfecto subj. | condicional compuesto |

Examples:
- \`Si llueve, me quedo.\` (real)
- \`Si lloviera, me quedaría.\` (unreal now)
- \`Si hubiera llovido, me habría quedado.\` (unreal in past)`,
    es: `> **Antes de este tema:** ya conoces **si tuviera, saldría**. **En este tema:** resultado en pasado — **habría** + participio — y resumen de tres tipos de **si**.

## Condicional Compuesto

### Fórmula: **haber** (en condicional) + participio

\`habría, habrías, habría, habríamos, habríais, habrían + hablado/comido\`

Participios irregulares: \`hecho, visto, dicho, puesto, escrito, abierto\`.

### Cuándo usarlo
1. **Condición irreal en pasado (con si + pluscuamperfecto):**
   \`Si **hubiera** tenido tiempo, **habría** ido.\`
2. **Arrepentimiento cortés:**
   \`**Habría** preferido otra cosa.\`
3. **Hipótesis sobre el pasado:**
   \`¿Quién lo hizo? — **Habría** sido Juan.\`
4. **Estilo indirecto (futuro → condicional compuesto):**
   \`Dijo que lo **habría terminado** para hoy.\`

### Tres tipos de condiciones con si

| Tipo | Conjunción | Verbo tras si | Oración principal |
|---|---|---|---|
| Real | si | presente | futuro |
| Irreal (presente) | si | imperfecto subj. | condicional simple |
| Irreal (pasado) | si | pluscuamperfecto subj. | condicional compuesto |

Ejemplos:
- \`Si llueve, me quedo.\` (real)
- \`Si lloviera, me quedaría.\` (irreal ahora)
- \`Si hubiera llovido, me habría quedado.\` (irreal en pasado)`,
  },

  "b2-relativos-avanzado": {
    en: `> **Before this topic:** you use **que, quien, cuyo**. **In this topic:** more formal forms — **el cual, lo que, adonde**.

## Relative pronouns (Advanced)

### LO QUE — "what/that which" (abstract, neutral)
\`No entiendo **lo que** dices.\`
\`Esto es **lo que** quiero.\`

⚠️ \`lo que\` refers to an idea/fact, not a specific noun.

### EL CUAL / LA CUAL / LOS CUALES / LAS CUALES
Used in **formal** register, especially after prepositions.

\`Tengo un amigo, **con el cual** trabajo.\`
\`La casa, **en la cual** vivo, es antigua.\`

⚠️ In speech usually \`con el que / en el que\`; \`el cual\` is more formal.

### DONDE / ADONDE — place
- \`donde\` = "where": \`la ciudad **donde** vivo\`
- \`adonde\` = "where to": \`el lugar **adonde** voy\`
- \`en donde\` = "in which place": \`el café **en donde** nos vimos\`

### COMO / CUANDO / CUANTO (relative adverbs)
- \`**como**\` = "how/as": \`Hazlo **como** te dije.\`
- \`**cuando**\` = "when": \`Vendré **cuando** pueda.\`
- \`**cuanto**\` = "as much as": \`Toma **cuanto** quieras.\`

### CUYO — "whose" (possession)
Agrees with **what is owned**, not the owner:
\`el hombre **cuyo** coche\` (man whose car — m.)
\`la mujer **cuya** casa\` (woman whose house — f.)
\`los niños **cuyos** juguetes\` (children whose toys)

> 💡 Formal register: \`el coche **del cual**\` instead of \`el coche **cuyo**\`,
> but \`cuyo\` is more precise and shorter.`,
    es: `> **Antes de este tema:** ya usas **que, quien, cuyo**. **En este tema:** formas más formales — **el cual, lo que, adonde**.

## Pronombres relativos (nivel avanzado)

### LO QUE — «lo que» (abstracto, neutro)
\`No entiendo **lo que** dices.\`
\`Esto es **lo que** quiero.\`

⚠️ \`lo que\` se refiere a una idea/hecho, no a un sustantivo concreto.

### EL CUAL / LA CUAL / LOS CUALES / LAS CUALES
Se usa en registro **formal**, especialmente tras preposiciones.

\`Tengo un amigo, **con el cual** trabajo.\`
\`La casa, **en la cual** vivo, es antigua.\`

⚠️ En el habla suele usarse \`con el que / en el que\`; \`el cual\` es más formal.

### DONDE / ADONDE — lugar
- \`donde\` = «donde»: \`la ciudad **donde** vivo\`
- \`adonde\` = «adonde»: \`el lugar **adonde** voy\`
- \`en donde\` = «en el que»: \`el café **en donde** nos vimos\`

### COMO / CUANDO / CUANTO (adverbios relativos)
- \`**como**\` = «como»: \`Hazlo **como** te dije.\`
- \`**cuando**\` = «cuando»: \`Vendré **cuando** pueda.\`
- \`**cuanto**\` = «cuanto»: \`Toma **cuanto** quieras.\`

### CUYO — «cuyo» (posesión)
Concuerda con **lo poseído**, no con el poseedor:
\`el hombre **cuyo** coche\` (m.)
\`la mujer **cuya** casa\` (f.)
\`los niños **cuyos** juguetes\`

> 💡 Registro formal: \`el coche **del cual**\` en lugar de \`el coche **cuyo**\`,
> pero \`cuyo\` es más preciso y breve.`,
  },

  "b2-conectores": {
    en: `> **Before this topic:** porque and pero are enough until B1. **In this topic:** linkers for writing — sin embargo, por lo tanto, para que…

## Connectors (Conectores discursivos)

### Addition
- **además** — moreover, furthermore
- **también** — also
- **asimismo** — likewise (formal)
- **por otra parte** — on the other hand
- **incluso** — even

### Contrast
- **pero** — but
- **sin embargo** — however
- **no obstante** — nevertheless (formal)
- **aunque** — although
- **en cambio** — on the contrary
- **por el contrario** — on the contrary

### Cause
- **porque** — because
- **como** — since (at sentence start)
- **ya que** — since
- **debido a que** — due to the fact that
- **puesto que** — since (formal)

### Consequence
- **por lo tanto** — therefore
- **por eso** — that's why
- **así que** — so
- **por consiguiente** — consequently (formal)
- **entonces** — then, so

### Condition
- **si** — if
- **a menos que** — unless (⚠️ requires subjuntivo)
- **con tal de que** — provided that (⚠️ subjuntivo)
- **en caso de que** — in case (⚠️ subjuntivo)
- **aunque** — although (⚠️ subjuntivo if hypothetical)

### Purpose
- **para que** — so that (⚠️ subjuntivo)
- **a fin de que** — in order that (⚠️ subjuntivo)
- **con el objetivo de** + infinitivo — with the aim of

> 💡 B2/C1 level = ability to **vary** connectors, not repeat \`porque\` and \`pero\` constantly.`,
    es: `> **Antes de este tema:** hasta B1 bastan porque y pero. **En este tema:** conectores de escritura — sin embargo, por lo tanto, para que…

## Conectores discursivos

### Adición
- **además** — además
- **también** — también
- **asimismo** — asimismo (formal)
- **por otra parte** — por otra parte
- **incluso** — incluso

### Contraste
- **pero** — pero
- **sin embargo** — sin embargo
- **no obstante** — no obstante (formal)
- **aunque** — aunque
- **en cambio** — en cambio
- **por el contrario** — por el contrario

### Causa
- **porque** — porque
- **como** — como (al inicio de la frase)
- **ya que** — ya que
- **debido a que** — debido a que
- **puesto que** — puesto que (formal)

### Consecuencia
- **por lo tanto** — por lo tanto
- **por eso** — por eso
- **así que** — así que
- **por consiguiente** — por consiguiente (formal)
- **entonces** — entonces

### Condición
- **si** — si
- **a menos que** — a menos que (⚠️ requiere subjuntivo)
- **con tal de que** — con tal de que (⚠️ subjuntivo)
- **en caso de que** — en caso de que (⚠️ subjuntivo)
- **aunque** — aunque (⚠️ subjuntivo si es hipotético)

### Finalidad
- **para que** — para que (⚠️ subjuntivo)
- **a fin de que** — a fin de que (⚠️ subjuntivo)
- **con el objetivo de** + infinitivo — con el objetivo de

> 💡 Nivel B2/C1 = saber **variar** conectores, no repetir \`porque\` y \`pero\` constantemente.`,
  },

  "c1-perifrasis-verbales": {
    en: `> **Before this topic:** you know **ir a + inf** and **estar + -ando** from A1–A2. **In this topic:** a catalogue of periphrases — acabar de, llevar + gerundio, deber vs deber de.

## Perífrasis Verbales

Structure: **auxiliary verb + (link) + infinitive/gerundio/participio**.

### With Infinitivo
| Periphrasis | Meaning | Example |
|---|---|---|
| tener que + inf | obligation | Tengo que irme |
| hay que + inf | impersonal need | Hay que estudiar |
| ir a + inf | near future | Voy a comer |
| acabar de + inf | just finished | Acabo de llegar |
| volver a + inf | again | Volví a leerlo |
| deber + inf | should/ought | Debes descansar |
| poder + inf | can | Puedo ayudarte |
| soler + inf | usually | Suelo correr |

### With Gerundio
| Periphrasis | Meaning | Example |
|---|---|---|
| estar + ger | action in progress | Estoy comiendo |
| seguir/continuar + ger | continue | Sigue lloviendo |
| llevar + ger | duration | Llevo dos horas estudiando |
| ir + ger | gradual progress | Va mejorando |

### With Participio
| Periphrasis | Meaning | Example |
|---|---|---|
| llevar + part | accumulated result | Llevo escritas 10 páginas |
| dejar + part | leave in state | Lo dejé hecho |
| tener + part | completed action | Tengo terminado el informe |

> ⚠️ Watch the link: some require **de** (\`acabar de\`, \`deber de\`),
> others **a** (\`ir a\`), others none (\`poder\`, \`soler\`).
>
> \`Deber + inf\` = must (moral); \`deber de + inf\` = probably
> (\`Debe de ser tarde\` ≈ "It must be late").`,
    es: `> **Antes de este tema:** ya conoces **ir a + inf** y **estar + -ando** desde A1–A2. **En este tema:** catálogo de perífrasis — acabar de, llevar + gerundio, deber vs deber de.

## Perífrasis Verbales

Estructura: **verbo auxiliar + (enlace) + infinitivo/gerundio/participio**.

### Con Infinitivo
| Perífrasis | Significado | Ejemplo |
|---|---|---|
| tener que + inf | obligación | Tengo que irme |
| hay que + inf | necesidad impersonal | Hay que estudiar |
| ir a + inf | futuro próximo | Voy a comer |
| acabar de + inf | acabar de | Acabo de llegar |
| volver a + inf | volver a | Volví a leerlo |
| deber + inf | deber | Debes descansar |
| poder + inf | poder | Puedo ayudarte |
| soler + inf | soler | Suelo correr |

### Con Gerundio
| Perífrasis | Significado | Ejemplo |
|---|---|---|
| estar + ger | acción en curso | Estoy comiendo |
| seguir/continuar + ger | continuar | Sigue lloviendo |
| llevar + ger | duración | Llevo dos horas estudiando |
| ir + ger | progreso gradual | Va mejorando |

### Con Participio
| Perífrasis | Significado | Ejemplo |
|---|---|---|
| llevar + part | resultado acumulado | Llevo escritas 10 páginas |
| dejar + part | dejar en estado | Lo dejé hecho |
| tener + part | acción completada | Tengo terminado el informe |

> ⚠️ Atención al enlace: unas requieren **de** (\`acabar de\`, \`deber de\`),
> otras **a** (\`ir a\`), otras ninguna (\`poder\`, \`soler\`).
>
> \`Deber + inf\` = deber (moral); \`deber de + inf\` = probablemente
> (\`Debe de ser tarde\`).`,
  },

  "c1-matices-estilisticos": {
    en: `> **Before this topic:** all main forms are familiar. **In this topic:** **register and politeness** — when tú vs usted, how to soften a request.

## Matices Estilísticos (C1)

### 1. Conditionals and hypotheses
- **Real**: \`Si llueve, me quedo.\` (Indicativo + Futuro)
- **Irreal present**: \`Si tuviera tiempo, saldría.\` (Subj. imperfecto + Condicional)
- **Irreal past**: \`Si hubiera sabido, habría ido.\` (Subj. pluscuamp. + Cond. compuesto)

### 2. Subjuntivo in subtle shades
- \`Aunque **llueva**\` (even if — hypothetical) vs \`Aunque **llueve**\` (although — fact).
- \`Como **llegues** tarde...\` (threat/warning).
- \`Por mucho que **estudie**\` = no matter how much one studies.

### 3. Politeness and distance
- **Condicional de cortesía**: \`¿Podría...?\`, \`Quisiera...\`, \`Me gustaría...\`
- **Imperfecto** for softening: \`Quería pedirte un favor.\`
- **Subjuntivo** in requests: \`¿Puedes **abrir** la ventana?\` →
  \`¿Podrías **abrir**?\` → \`¿Te importaría **abrir**?\`

### 4. Register: formal vs informal
| Informal | Formal |
|---|---|
| tú | usted |
| ¿Qué tal? | ¿Cómo está usted? |
| Vale | De acuerdo / Correcto |
| ¡Hola! | Buenos días |

### 5. Lexical nuances
- **Soler** instead of "usually": \`Suelo levantarme temprano.\`
- **Llevar + gerundio** for duration: \`Llevo viviendo aquí 5 años.\`
- **Acabar por + inf** = eventually: \`Acabó por aceptar.\`
- **Venir a + inf** = approximately: \`Viene a costar 20 euros.\`

> 💡 At C1 level the key is not "correctness" but **appropriateness**: the same
> meaning can be expressed in dozens of ways, and the choice depends on context,
> region, and interlocutor.`,
    es: `> **Antes de este tema:** ya conoces las formas principales. **En este tema:** **registro y cortesía** — cuándo tú o usted, cómo suavizar una petición.

## Matices Estilísticos (C1)

### 1. Condicionales e hipótesis
- **Real**: \`Si llueve, me quedo.\` (Indicativo + Futuro)
- **Irreal presente**: \`Si tuviera tiempo, saldría.\` (Subj. imperfecto + Condicional)
- **Irreal pasado**: \`Si hubiera sabido, habría ido.\` (Subj. pluscuamp. + Cond. compuesto)

### 2. Subjuntivo en matices sutiles
- \`Aunque **llueva**\` (aunque — hipotético) vs \`Aunque **llueve**\` (aunque — hecho).
- \`Como **llegues** tarde...\` (amenaza/advertencia).
- \`Por mucho que **estudie**\` = por mucho que estudie.

### 3. Cortesía y distancia
- **Condicional de cortesía**: \`¿Podría...?\`, \`Quisiera...\`, \`Me gustaría...\`
- **Imperfecto** para suavizar: \`Quería pedirte un favor.\`
- **Subjuntivo** en peticiones: \`¿Puedes **abrir** la ventana?\` →
  \`¿Podrías **abrir**?\` → \`¿Te importaría **abrir**?\`

### 4. Registro: formal vs informal
| Informal | Formal |
|---|---|
| tú | usted |
| ¿Qué tal? | ¿Cómo está usted? |
| Vale | De acuerdo / Correcto |
| ¡Hola! | Buenos días |

### 5. Matices léxicos
- **Soler** en lugar de «normalmente»: \`Suelo levantarme temprano.\`
- **Llevar + gerundio** para duración: \`Llevo viviendo aquí 5 años.\`
- **Acabar por + inf** = acabar por: \`Acabó por aceptar.\`
- **Venir a + inf** = aproximadamente: \`Viene a costar 20 euros.\`

> 💡 En C1 lo importante no es la «corrección», sino la **adecuación**: el mismo
> significado puede expresarse de muchas formas, y la elección depende del contexto,
> la región y el interlocutor.`,
  },

  "c1-subjuntivo-avanzado": {
    en: `> **Before this topic:** you already use **subjunctive** in typical cases. **In this topic:** borderline cases — aunque, donde, como: indicative or subjunctive?

## Subjuntivo — Advanced uses (C1)

### Aunque (although) — indicativo vs subjuntivo
- **Indicativo** (known fact): \`**Aunque** llueve, salgo.\`
- **Subjuntivo** (hypothetical/unknown): \`**Aunque llueva**, saldré.\`

### Donde (where) — indicativo vs subjuntivo
- \`Vive **donde** todos viven.\` (where everyone lives — known place)
- \`Vivirá **donde pueda**.\` (wherever he can — hypothetical) ⚠️ subjuntivo

### Como (as/how) — indicativo vs subjuntivo
- \`Hazlo **como** te enseñé.\` (as I showed you — known way)
- \`Hazlo **como quieras**.\` (however you want — hypothetical) ⚠️ subjuntivo

### Relatives with indefinite antecedent
- \`Busco a alguien que **habla** ruso.\` (I know such a person exists) → indicativo
- \`Busco a alguien que **hable** ruso.\` (not sure if one exists) → **subjuntivo**

### Fixed expressions
- \`**Sea como sea**\` — be that as it may
- \`**Pase lo que pase**\` — whatever happens
- \`**Cueste lo que cueste**\` — at any cost
- \`**Digan lo que digan**\` — whatever they say

### After negative emotions/evaluations
\`No creo que **tenga** razón.\`
\`No es cierto que **haya** venido.\`

> ⚠️ Main C1 rule: **Subjuntivo = uncertainty / hypothesis / subjectivity**. If the fact is real and known — Indicativo.`,
    es: `> **Antes de este tema:** ya usas el **subjuntivo** en casos típicos. **En este tema:** casos dudosos — aunque, donde, como: ¿indicativo o subjuntivo?

## Subjuntivo — usos avanzados (C1)

### Aunque — indicativo vs subjuntivo
- **Indicativo** (hecho conocido): \`**Aunque** llueve, salgo.\`
- **Subjuntivo** (hipotético/desconocido): \`**Aunque llueva**, saldré.\`

### Donde — indicativo vs subjuntivo
- \`Vive **donde** todos viven.\` (lugar conocido)
- \`Vivirá **donde pueda**.\` (hipotético) ⚠️ subjuntivo

### Como — indicativo vs subjuntivo
- \`Hazlo **como** te enseñé.\` (modo conocido)
- \`Hazlo **como quieras**.\` (hipotético) ⚠️ subjuntivo

### Relativas con antecedente indefinido
- \`Busco a alguien que **habla** ruso.\` (sé que existe) → indicativo
- \`Busco a alguien que **hable** ruso.\` (no estoy seguro) → **subjuntivo**

### Expresiones fijas
- \`**Sea como sea**\`
- \`**Pase lo que pase**\`
- \`**Cueste lo que cueste**\`
- \`**Digan lo que digan**\`

### Tras emociones/valoraciones negativas
\`No creo que **tenga** razón.\`
\`No es cierto que **haya** venido.\`

> ⚠️ Regla principal de C1: **Subjuntivo = incertidumbre / hipótesis / subjetividad**. Si el hecho es real y conocido — Indicativo.`,
  },

  "c1-indirecto-avanzado": {
    en: `> **Before this topic:** you know the B2 **dijo que + shift** pattern. **In this topic:** the full grid — all tenses, subjunctive, time and place markers.

## Estilo Indirecto — complete system (C1)

### Tense translation (after main verb in past)

| Direct speech | → Indirect speech |
|---|---|
| presente | imperfecto |
| pret. perfecto | pluscuamperfecto |
| pret. indefinido | pluscuamperfecto |
| imperfecto | imperfecto (unchanged) |
| futuro simple | condicional simple |
| condicional | condicional (unchanged) |
| presente subj. | imperfecto subj. |
| perfecto subj. | pluscuamperfecto subj. |

### Deictic translation
| Direct | Indirect |
|---|---|
| hoy | aquel/ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |
| ahora | entonces |

### Indirect questions
\`¿Vendrás? → Me pregunta si **vendré**.\`
\`¿Dónde vives? → Me pregunta **dónde vivo**.\` (no inversion, no ¿?)

⚠️ In indirect questions there are **no** \`¿?\` marks and no subject-verb inversion.

### Indirect commands
\`¡Hazlo! → Me dice que **lo haga**.\`
\`¡No salgas! → Me dice que **no salga**.\`

### After main verb in present (dice)
Tenses **do not change**: \`Dice: "Vengo" → Dice que **viene**.\`
Only persons/pronouns shift.

### Complex cases (C1)
- \`Dijo: "Si supiera, iría" → Dijo que si **supiera**, **iría**.\`
- \`Pensaba: "¿Qué haré?" → Se preguntaba **qué haría**.\`

> 💡 Main C1 mistake — forgetting to change **time/place deictics**:
> \`ayer → el día anterior\`, \`aquí → allí\`.`,
    es: `> **Antes de este tema:** ya conoces **dijo que + cambio de tiempo** de B2. **En este tema:** tabla completa — todos los tiempos, subjuntivo, marcadores.

## Estilo Indirecto — sistema completo (C1)

### Traslación de tiempos (tras verbo principal en pasado)

| Discurso directo | → Discurso indirecto |
|---|---|
| presente | imperfecto |
| pret. perfecto | pluscuamperfecto |
| pret. indefinido | pluscuamperfecto |
| imperfecto | imperfecto (sin cambio) |
| futuro simple | condicional simple |
| condicional | condicional (sin cambio) |
| presente subj. | imperfecto subj. |
| perfecto subj. | pluscuamperfecto subj. |

### Traslación deíctica
| Directo | Indirecto |
|---|---|
| hoy | aquel/ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |
| ahora | entonces |

### Preguntas indirectas
\`¿Vendrás? → Me pregunta si **vendré**.\`
\`¿Dónde vives? → Me pregunta **dónde vivo**.\` (sin inversión, sin ¿?)

⚠️ En preguntas indirectas **no** hay signos \`¿?\` ni inversión del sujeto.

### Órdenes indirectas
\`¡Hazlo! → Me dice que **lo haga**.\`
\`¡No salgas! → Me dice que **no salga**.\`

### Tras verbo principal en presente (dice)
Los tiempos **no cambian**: \`Dice: "Vengo" → Dice que **viene**.\`
Solo cambian personas/pronombres.

### Casos complejos (C1)
- \`Dijo: "Si supiera, iría" → Dijo que si **supiera**, **iría**.\`
- \`Pensaba: "¿Qué haré?" → Se preguntaba **qué haría**.\`

> 💡 Error principal en C1 — olvidar cambiar los **deícticos de tiempo/lugar**:
> \`ayer → el día anterior\`, \`aquí → allí\`.`,
  },

  "c1-pronombres-avanzado": {
    en: `> **Before this topic:** **lo, le, se lo** are already in daily use. **In this topic:** abstract **lo**, obligatory **a + pronoun** doubling, leísmo / laísmo.

## Pronouns — Advanced cases (C1)

### Neutral LO (lo + adjective/adverb)
\`**Lo** bueno de España.\`
\`**Lo** importante es estudiar.\`
\`**Lo** más difícil.\`

Formula: \`lo + adjective (m.)\` = abstract noun.

### Object duplication (redundancia)
In Spanish duplication is **normal** and often **required**:

\`**A María la** veo.\`
\`**A Juan le** di el libro.\`

⚠️ \`a + name\` (personal a) + duplicate pronoun — this is **normal**, not an error.

### LEÍSMO / LAÍSMO / LOÍSMO
Regional deviations from the norm:
- **Leísmo** (common in Spain): \`le\` instead of \`lo\` for m. direct object.
  \`A Juan **le** veo\` (norm: \`lo veo\`) — acceptable for male persons.
- **Laísmo** (Madrid): \`la\` instead of \`le\` for indirect object.
  \`A María **la** di el libro\` (norm: \`le\`) — **considered an error**.
- **Loísmo** (rare): \`lo\` instead of \`le\` for indirect object — **error**.

### Pronouns with preposition
\`conmigo\`, \`contigo\`, \`consigo\`.
⚠️ Not ~~con mí~~ / ~~con ti~~.
\`para mí\`, \`para ti\` — regular, not *paramigo.

### Reduplication (emphasis)
\`**A él** lo vi ayer.\`
\`**A ella** le regalé flores.\`

> 💡 C1 = ability to **naturally** duplicate (sounds Spanish),
> not avoiding \`a + pronoun + OD/OI\`.`,
    es: `> **Antes de este tema:** **lo, le, se lo** ya están en el uso diario. **En este tema:** **lo** abstracto, duplicación **a + pronombre**, leísmo / laísmo.

## Pronombres — casos avanzados (C1)

### LO neutro (lo + adjetivo/adverbio)
\`**Lo** bueno de España.\`
\`**Lo** importante es estudiar.\`
\`**Lo** más difícil.\`

Fórmula: \`lo + adjetivo (m.)\` = sustantivo abstracto.

### Duplicación de complementos (redundancia)
En español la duplicación es **normal** y a menudo **obligatoria**:

\`**A María la** veo.\`
\`**A Juan le** di el libro.\`

⚠️ \`a + nombre\` (a personal) + pronombre duplicado — es **norma**, no error.

### LEÍSMO / LAÍSMO / LOÍSMO
Desviaciones regionales de la norma:
- **Leísmo** (frecuente en España): \`le\` en lugar de \`lo\` como OD masculino.
  \`A Juan **le** veo\` (norma: \`lo veo\`) — aceptable para personas masculinas.
- **Laísmo** (Madrid): \`la\` en lugar de \`le\` como OI.
  \`A María **la** di el libro\` (norma: \`le\`) — **considerado error**.
- **Loísmo** (raro): \`lo\` en lugar de \`le\` como OI — **error**.

### Pronombres con preposición
\`conmigo\`, \`contigo\`, \`consigo\`.
⚠️ No ~~con mí~~ / ~~con ti~~.
\`para mí\`, \`para ti\` — normales, no *paramigo.

### Reduplicación (énfasis)
\`**A él** lo vi ayer.\`
\`**A ella** le regalé flores.\`

> 💡 C1 = saber duplicar de forma **natural** (suena a español),
> sin evitar \`a + pronombre + OD/OI\`.`,
  },

  "c1-ser-estar-avanzado": {
    en: `> **Before this topic:** basic **ser / estar** from A1 is in place. **In this topic:** pairs where the verb choice **changes the meaning** — es listo vs está listo.

## Ser vs Estar — Subtle cases (C1)

### Adjectives that change meaning
| Adjective | SER (permanent) | ESTAR (state) |
|---|---|---|
| aburrido | boring (character) | bored |
| listo | clever | ready |
| rico | rich | tasty |
| verde | green (color) | unripe |
| bueno | good (person) | tasty/good (now) |
| malo | bad (character) | spoiled/sick |
| vivo | lively (energetic) | alive (not dead) |
| seguro | reliable | confident |
| callado | quiet (character) | silent (now) |
| despierto | alert | awake |

### ESTAR + gerundio vs presente
\`Estoy **comiendo**.\` — I am eating (right now, in progress).
\`**Como**.\` — I eat (generally, habitually).

⚠️ Not all verbs sound good in gerundio:
- ✅ \`estoy leyendo, está lloviendo\`
- ⚠️ ~~estoy sabiendo~~ (wrong — \`sé\`)
- ⚠️ ~~estoy siendo~~ (rare, formal)

### SER + profession vs ESTAR + de
\`Es **profesor**.\` — He is a teacher (profession).
\`Está **de** profesor.\` — He is working (temporarily) as a teacher.

### Made of vs state
\`El vaso **es** de cristal.\`
\`El vaso **está** lleno.\`
Freshness of food is usually **estar**: \`El pan **está** fresco.\`

### Passive
\`Don Quijote **fue** escrito por Cervantes.\` — past action (ser + participle).
\`El libro **está** escrito en español.\` — result / state.

> 💡 Universal C1 hint: **SER = identity**, **ESTAR = state/result**. When in doubt — ask "is this a definition or a current state?".`,
    es: `> **Antes de este tema:** el **ser / estar** básico de A1 ya lo tienes. **En este tema:** pares donde la elección **cambia el sentido** — es listo vs está listo.

## Ser vs Estar — matices avanzados (C1)

### Adjetivos que cambian de significado
| Adjetivo | SER (permanente) | ESTAR (estado) |
|---|---|---|
| aburrido | aburrido (carácter) | aburrido |
| listo | inteligente | listo |
| rico | rico | rico (sabor) |
| verde | verde (color) | verde (inmaduro) |
| bueno | bueno (persona) | bueno (ahora) |
| malo | malo (carácter) | malo (estropeado/enfermo) |
| vivo | vivo (enérgico) | vivo (no muerto) |
| seguro | seguro (fiable) | seguro (confiado) |
| callado | callado (carácter) | callado (ahora) |
| despierto | despierto (alerta) | despierto (no dormido) |

### ESTAR + gerundio vs presente
\`Estoy **comiendo**.\` — Estoy comiendo (ahora, en curso).
\`**Como**.\` — Como (en general, habitualmente).

⚠️ No todos los verbos suenan bien en gerundio:
- ✅ \`estoy leyendo, está lloviendo\`
- ⚠️ ~~estoy sabiendo~~ (incorrecto — \`sé\`)
- ⚠️ ~~estoy siendo~~ (raro, formal)

### SER + profesión vs ESTAR + de
\`Es **profesor**.\` — Es profesor (profesión).
\`Está **de** profesor.\` — Está trabajando (temporalmente) de profesor.

### De qué está hecho vs estado
\`El vaso **es** de cristal.\`
\`El vaso **está** lleno.\`
La frescura de la comida suele ir con **estar**: \`El pan **está** fresco.\`

### Pasiva
\`Don Quijote **fue** escrito por Cervantes.\` — acción en el pasado.
\`El libro **está** escrito en español.\` — resultado / estado.

> 💡 Pista universal de C1: **SER = identidad**, **ESTAR = estado/resultado**. Si dudas — pregúntate «¿es definición o estado actual?».`,
  },

  "c2-ironia-registry": {
    en: `> **Before this topic:** moods and register from C1. **In this topic:** **how a phrase sounds** — irony, distance, register shifts.

## Irony and Register (C1-C2)

### Ironic Subjuntivo
Used for **polite criticism** or irony:

- \`¡**Que** sea muy feliz!\` — "May you be very happy!" (ironic: good riddance)
- \`¡**Como** si no lo supiera!\` — As if I didn't know! (but I do)
- \`¡**Haberlo** dicho antes!\` — You should have said so earlier! (reproach)
- \`¡**Ojalá** no viniera!\` — "I wish he wouldn't come" (with hope/irony)

### Register: formal vs informal

| Situation | Informal | Formal |
|---|---|---|
| Address | tú | usted |
| Greeting | ¡Hola! / ¿Qué tal? | Buenos días |
| Farewell | ¡Adiós! / ¡Chao! | Hasta luego |
| Agreement | ¡Vale! / ¡Dale! | De acuerdo |
| Request | ¿Puedes…? | ¿Podría…? / Le ruego… |
| Refusal | No puedo | Me temo que no es posible |
| Thanks | ¡Gracias! | Le agradezco |

### Speech tactics (C1-C2)
- **Softening (atenuación):** \`Un poco\`, \`quizás\`, \`tal vez\`, \`en cierto modo\`.
  \`Está **un poco** cansado.\` (instead of \`muy\`)
- **Evasion:** \`Depende\`, \`No sabría decirte\`, \`Es relativo\`.
- **Polite disagreement:** \`No estoy seguro de que…\`, \`Permíteme discrepar\`.

### Fixed formulas
- \`A ver\` — let's see
- \`Vaya por delante que\` — I should say upfront that…
- \`Por decirlo así\` — so to speak
- \`En cierto modo\` — in a way
- \`No es que… sino que…\` — it's not that… but rather…

### Regionalisms (language variants)
- Spain: \`vosotros\`, \`coche\`, \`zumo\`, \`movil\`
- Latin America: \`ustedes\`, \`carro\`, \`jugo\`, \`celular\`
- Argentina: \`vos\` (instead of \`tú\`), \`che\`
- Mexico: \`mande\` (what?, polite request to repeat)

> 💡 C2 = ability to **switch register** instantly, understand irony and
> use sarcasm through grammar (especially subjuntivo).`,
    es: `> **Antes de este tema:** modos y registro desde C1. **En este tema:** **cómo suena** la frase — ironía, distancia, cambio de registro.

## Ironía y Registro (C1-C2)

### Subjuntivo irónico
Se usa para **crítica cortés** o ironía:

- \`¡**Que** sea muy feliz!\` — «¡Que sea muy feliz!» (irónico)
- \`¡**Como** si no lo supiera!\` — ¡Como si no lo supiera!
- \`¡**Haberlo** dicho antes!\` — ¡Haberlo dicho antes! (reproche)
- \`¡**Ojalá** no viniera!\` — «Ojalá no viniera» (con esperanza/ironía)

### Registro: formal vs informal

| Situación | Informal | Formal |
|---|---|---|
| Trato | tú | usted |
| Saludo | ¡Hola! / ¿Qué tal? | Buenos días |
| Despedida | ¡Adiós! / ¡Chao! | Hasta luego |
| Acuerdo | ¡Vale! / ¡Dale! | De acuerdo |
| Petición | ¿Puedes…? | ¿Podría…? / Le ruego… |
| Negativa | No puedo | Me temo que no es posible |
| Agradecimiento | ¡Gracias! | Le agradezco |

### Tácticas discursivas (C1-C2)
- **Atenuación:** \`Un poco\`, \`quizás\`, \`tal vez\`, \`en cierto modo\`.
  \`Está **un poco** cansado.\` (en lugar de \`muy\`)
- **Evasión:** \`Depende\`, \`No sabría decirte\`, \`Es relativo\`.
- **Desacuerdo cortés:** \`No estoy seguro de que…\`, \`Permíteme discrepar\`.

### Fórmulas fijas
- \`A ver\`
- \`Vaya por delante que\`
- \`Por decirlo así\`
- \`En cierto modo\`
- \`No es que… sino que…\`

### Regionalismos (variantes lingüísticas)
- España: \`vosotros\`, \`coche\`, \`zumo\`, \`movil\`
- Lat. América: \`ustedes\`, \`carro\`, \`jugo\`, \`celular\`
- Argentina: \`vos\` (en lugar de \`tú\`), \`che\`
- México: \`mande\` (¿cómo?, petición cortés de repetir)

> 💡 C2 = capacidad de **cambiar de registro** al instante, entender la ironía y
> usar el sarcasmo a través de la gramática (especialmente subjuntivo).`,
  },
  "c2-oraciones-hendidas": {
    en: `> **Before this topic:** you link clauses with **que / lo que** since B1. **In this topic:** **cleft sentences** — fue Juan quien…, lo que necesito es… — to highlight what matters.

## Cleft sentences (oraciones hendidas)

Native speakers "split" the sentence to **emphasize** a specific element.

### SER + QUE / QUIEN / DONDE / CUANDO

| Focus on | Structure | Example |
|---|---|---|
| Person | \`Fue X quien…\` | \`**Fue Juan quien** rompió el vaso.\` — It was Juan who broke the glass. |
| Place | \`Es en X donde…\` | \`**Es en Madrid donde** vive.\` — It's in Madrid that he lives. |
| Time | \`Fue X cuando…\` | \`**Fue ayer cuando** lo supe.\` — It was yesterday that I found out. |
| Reason | \`Es por X por lo que…\` | \`**Es por eso por lo que** me fui.\` — That's exactly why I left. |

> ⚠️ The preposition is **repeated**: \`Es **con** ella **con** quien quiero hablar.\` (not \`*Es con ella que…\` — a French calque, avoided in the educated norm)

### LO QUE — emphasizing an action/object
- \`**Lo que** necesito **es** dormir.\` — What I need is sleep.
- \`**Lo que** me molesta **es** el ruido.\` — What bothers me is the noise.

### Tense agreement of SER
\`**Fue** ayer **cuando**…\` / \`**Es** ahora **cuando**…\` — ser agrees with the time of the event.

### Colloquial emphasis
- \`¡Vaya coche que se ha comprado!\` — What a car he's bought!
- \`De tonto no tiene un pelo.\` — He's anything but a fool.
- Doubling: \`Saber, sé; pero no te lo diré.\` — Know it I do, but I won't tell you.

> 💡 On DELE C2, cleft structures are a marker of fluent writing and speech.`,
    es: `> **Antes de este tema:** ya enlazas con **que / lo que** desde B1. **En este tema:** **oraciones hendidas** — fue Juan quien…, lo que necesito es… — para destacar lo importante.

## Oraciones hendidas

Los nativos «parten» la frase para **destacar** el elemento que les interesa.

### SER + QUE / QUIEN / DONDE / CUANDO

| Se destaca | Estructura | Ejemplo |
|---|---|---|
| Persona | \`Fue X quien…\` | \`**Fue Juan quien** rompió el vaso.\` |
| Lugar | \`Es en X donde…\` | \`**Es en Madrid donde** vive.\` |
| Tiempo | \`Fue X cuando…\` | \`**Fue ayer cuando** lo supe.\` |
| Causa | \`Es por X por lo que…\` | \`**Es por eso por lo que** me fui.\` |

> ⚠️ La preposición **se repite**: \`Es **con** ella **con** quien quiero hablar.\` (no \`*Es con ella que…\` — calco del francés, evitado en la norma culta)

### LO QUE — destacar la acción o el objeto
- \`**Lo que** necesito **es** dormir.\`
- \`**Lo que** me molesta **es** el ruido.\`

### Concordancia temporal de SER
\`**Fue** ayer **cuando**…\` / \`**Es** ahora **cuando**…\` — ser concuerda con el tiempo del evento.

### Énfasis coloquial
- \`¡Vaya coche que se ha comprado!\`
- \`De tonto no tiene un pelo.\`
- Duplicación: \`Saber, sé; pero no te lo diré.\`

> 💡 En el DELE C2, las oraciones hendidas son un marcador de escritura y habla fluidas.`,
  },
  "c2-conjetura-rumor": {
    en: `> **Before this topic:** **Futuro** and **Condicional** as plan and “I would” are done. **In this topic:** the same forms for **guesses and hearsay** — Serán las diez, habría mil personas.

## Futuro de conjetura and condicional de rumor

In Spanish, the future and conditional express more than time — they encode **degree of certainty**.

### Futuro de conjetura — guessing about the present
| Fact | Guess |
|---|---|
| \`Son las diez.\` — It's ten. | \`**Serán** las diez.\` — It must be around ten. |
| \`Está en casa.\` | \`**Estará** en casa.\` — He's probably at home. |
| \`Tiene 40 años.\` | \`**Tendrá** unos 40 años.\` — He must be about 40. |

Futuro perfecto — guessing about the recent past:
- \`**Habrá salido** ya.\` — He's probably left already.

### Condicional de conjetura — guessing about the past
- \`**Serían** las dos cuando llegó.\` — It was probably around two when he arrived.
- \`**Tendría** veinte años entonces.\` — He must have been about twenty then.

### Condicional de rumor — the language of the press
Conveys **unconfirmed information** (journalistic style):
- \`El presidente **habría aceptado** el acuerdo.\` — The president has reportedly accepted the deal.
- \`**Habría** unas mil personas en la plaza.\` — There were reportedly about a thousand people in the square.

### Synonymous modal constructions
| Certainty | Structure | Example |
|---|---|---|
| ~90% | \`deber de + inf\` | \`**Debe de** estar en casa.\` |
| ~50% | \`poder + inf\` | \`**Puede** estar en casa.\` |
| conjecture | futuro/condicional | \`**Estará** en casa.\` |

> ⚠️ \`deber de + inf\` = probability; \`deber + inf\` = obligation: \`Debes estudiar\` — you must study.

> 💡 Hear a future tense where the present would be logical? It's not about the future — it means "probably".`,
    es: `> **Antes de este tema:** ya usas **Futuro** y **Condicional** como plan y «yo haría». **En este tema:** las mismas formas para **conjura y rumor** — Serán las diez, habría mil personas.

## Futuro de conjetura y condicional de rumor

El futuro y el condicional no solo expresan tiempo: codifican el **grado de certeza**.

### Futuro de conjetura — suposición sobre el presente
| Hecho | Suposición |
|---|---|
| \`Son las diez.\` | \`**Serán** las diez.\` — probablemente |
| \`Está en casa.\` | \`**Estará** en casa.\` |
| \`Tiene 40 años.\` | \`**Tendrá** unos 40 años.\` |

Futuro perfecto — suposición sobre el pasado reciente:
- \`**Habrá salido** ya.\`

### Condicional de conjetura — suposición sobre el pasado
- \`**Serían** las dos cuando llegó.\`
- \`**Tendría** veinte años entonces.\`

### Condicional de rumor — el lenguaje de la prensa
Transmite **información no confirmada** (estilo periodístico):
- \`El presidente **habría aceptado** el acuerdo.\`
- \`**Habría** unas mil personas en la plaza.\`

### Construcciones modales sinónimas
| Certeza | Estructura | Ejemplo |
|---|---|---|
| ~90% | \`deber de + inf\` | \`**Debe de** estar en casa.\` |
| ~50% | \`poder + inf\` | \`**Puede** estar en casa.\` |
| conjetura | futuro/condicional | \`**Estará** en casa.\` |

> ⚠️ \`deber de + inf\` = probabilidad; \`deber + inf\` = obligación: \`Debes estudiar\`.

> 💡 ¿Oyes un futuro donde lo lógico sería el presente? No habla del futuro: significa «probablemente».`,
  },
  "c2-estilo-culto": {
    en: `> **Before this topic:** **participle** and **gerund** from the tenses. **In this topic:** **written register** — absolute participle, compressing clauses.

## Formal style: absolute constructions and nominalization

Devices of **written / formal** Spanish: press, essays, DELE C2.

### Participio absoluto
A participle + noun replaces a whole subordinate clause:
- \`**Terminada la reunión**, todos se fueron.\` = Cuando terminó la reunión…
- \`**Dicho esto**, pasemos al siguiente punto.\` — That said, let's move to the next point.
- \`**Una vez firmado el contrato**, no hay vuelta atrás.\` — Once the contract is signed, there's no going back.

> ⚠️ The participle **agrees**: \`Terminad**a** la reunión\`, \`Firmad**os** los documentos\`.

### Gerundio absoluto
With its own subject:
- \`**Estando yo en Madrid**, ocurrió todo.\` — While I was in Madrid, it all happened.
- \`**Siendo esto así**, no hay más que hablar.\` — That being so, there's nothing more to say.

### Nominalization — noun instead of verb
| Colloquial | Formal |
|---|---|
| \`Cuando llegó el tren…\` | \`**A la llegada del** tren…\` |
| \`Antes de que salgamos…\` | \`**Antes de nuestra salida**…\` |
| \`Porque aumentaron los precios…\` | \`**Debido al aumento de** los precios…\` |

### Formal connectors
- \`No obstante\` — nevertheless (more formal than \`sin embargo\`)
- \`Asimismo\` — likewise
- \`Por consiguiente\` — consequently
- \`En aras de\` — for the sake of
- \`Si bien\` — although (formal \`aunque\`)
- \`Cabe señalar que…\` — it should be noted that…

### Passive and impersonal coloring
- \`Se procederá a la evaluación de…\` — an evaluation will be carried out…
- \`Queda prohibido fumar.\` — smoking is prohibited (queda + participio)
- \`Resulta imprescindible…\` — it proves essential…

> 💡 C2 means **switching registers**: saying the same thing in a bar and in a ministry.`,
    es: `> **Antes de este tema:** **participio** y **gerundio** de los tiempos verbales. **En este tema:** **registro escrito** — participio absoluto, compresión de oraciones.

## Estilo culto: construcciones absolutas y nominalización

Recursos del español **escrito / formal**: prensa, ensayos, DELE C2.

### Participio absoluto
Un participio + sustantivo sustituye a toda una subordinada:
- \`**Terminada la reunión**, todos se fueron.\` = Cuando terminó la reunión…
- \`**Dicho esto**, pasemos al siguiente punto.\`
- \`**Una vez firmado el contrato**, no hay vuelta atrás.\`

> ⚠️ El participio **concuerda**: \`Terminad**a** la reunión\`, \`Firmad**os** los documentos\`.

### Gerundio absoluto
Con sujeto propio:
- \`**Estando yo en Madrid**, ocurrió todo.\`
- \`**Siendo esto así**, no hay más que hablar.\`

### Nominalización — sustantivo en lugar de verbo
| Coloquial | Culto |
|---|---|
| \`Cuando llegó el tren…\` | \`**A la llegada del** tren…\` |
| \`Antes de que salgamos…\` | \`**Antes de nuestra salida**…\` |
| \`Porque aumentaron los precios…\` | \`**Debido al aumento de** los precios…\` |

### Conectores cultos
- \`No obstante\` — más formal que \`sin embargo\`
- \`Asimismo\` · \`Por consiguiente\` · \`En aras de\` · \`Si bien\`
- \`Cabe señalar que…\`

### Matiz pasivo e impersonal
- \`Se procederá a la evaluación de…\`
- \`Queda prohibido fumar.\` (queda + participio)
- \`Resulta imprescindible…\`

> 💡 C2 es saber **cambiar de registro**: decir lo mismo en un bar y en un ministerio.`,
  },
  "dele-contraste-pasados": {
    en: `> **Before this topic:** in **A2** and **B1** you covered all past tenses, including **Pluscuamperfecto**. **In this topic:** **DELE overview** — picking the right past tense.

## Contrasting past tenses — trap #1 on the DELE

DELE tasks (Comprensión de lectura, gap-fill) most often test the choice between the four past tenses.

### Decision cheat sheet

| Question about the action | Tense | Example |
|---|---|---|
| What happened? (event, plot driver) | **Indefinido** | \`Ayer **vi** a Marta.\` |
| What was the background? (habit, description) | **Imperfecto** | \`**Hacía** frío y **llovía**.\` |
| Linked to the present / period not closed | **Perfecto** | \`**He visto** a Marta esta mañana.\` |
| Earlier than another past event | **Pluscuamperfecto** | \`Cuando llegué, ya **se había ido**.\` |

### Marker words (learn by heart)
- **Indefinido:** \`ayer\`, \`anoche\`, \`el año pasado\`, \`en 2010\`, \`de repente\`, \`entonces\`
- **Imperfecto:** \`antes\`, \`siempre\`, \`cada día\`, \`de niño\`, \`mientras\`, \`todos los veranos\`
- **Perfecto:** \`hoy\`, \`esta semana\`, \`este año\`, \`ya\`, \`todavía no\`, \`alguna vez\`, \`nunca (en mi vida)\`
- **Pluscuamperfecto:** \`ya… cuando\`, \`antes de que\`, \`nunca hasta entonces\`

### The classic exam pair
\`**Estaba** duchándome **cuando** **sonó** el teléfono.\`
Background (imperfecto) + event (indefinido) — DELE asks about this pair almost every time.

### Meaning changes with the tense
| Imperfecto | Indefinido |
|---|---|
| \`**Conocía** a Juan.\` — knew him | \`**Conocí** a Juan.\` — met him |
| \`**Sabía** la verdad.\` — knew | \`**Supe** la verdad.\` — found out |
| \`**Quería** salir.\` — wanted | \`**Quise** salir.\` — tried |
| \`No **quería** ir.\` — didn't want | \`No **quiso** ir.\` — refused |

> 💡 Spain vs Latin America: in Spain \`esta mañana **he visto**\`, in most of the Americas \`esta mañana **vi**\`. DELE accepts both norms — just be consistent.`,
    es: `> **Antes de este tema:** en **A2** y **B1** ya viste todos los pasados, incluido **Pluscamperfecto**. **En este tema:** **resumen DELE** — elegir el pasado en el examen.

## Contraste de pasados — la trampa n.º 1 del DELE

Las tareas del DELE (Comprensión de lectura, huecos) evalúan sobre todo la elección entre los cuatro pasados.

### Chuleta de decisión

| Pregunta sobre la acción | Tiempo | Ejemplo |
|---|---|---|
| ¿Qué pasó? (evento, avance de la trama) | **Indefinido** | \`Ayer **vi** a Marta.\` |
| ¿Cómo era el fondo? (hábito, descripción) | **Imperfecto** | \`**Hacía** frío y **llovía**.\` |
| Conectado con el presente / periodo abierto | **Perfecto** | \`**He visto** a Marta esta mañana.\` |
| Anterior a otro pasado | **Pluscuamperfecto** | \`Cuando llegué, ya **se había ido**.\` |

### Marcadores (para memorizar)
- **Indefinido:** \`ayer\`, \`anoche\`, \`el año pasado\`, \`en 2010\`, \`de repente\`, \`entonces\`
- **Imperfecto:** \`antes\`, \`siempre\`, \`cada día\`, \`de niño\`, \`mientras\`, \`todos los veranos\`
- **Perfecto:** \`hoy\`, \`esta semana\`, \`este año\`, \`ya\`, \`todavía no\`, \`alguna vez\`, \`nunca (en mi vida)\`
- **Pluscuamperfecto:** \`ya… cuando\`, \`antes de que\`, \`nunca hasta entonces\`

### La combinación clásica del examen
\`**Estaba** duchándome **cuando** **sonó** el teléfono.\`
Fondo (imperfecto) + evento (indefinido): el DELE lo pregunta casi siempre.

### El tiempo cambia el significado
| Imperfecto | Indefinido |
|---|---|
| \`**Conocía** a Juan.\` — lo conocía de antes | \`**Conocí** a Juan.\` — lo conocí entonces |
| \`**Sabía** la verdad.\` — la sabía | \`**Supe** la verdad.\` — me enteré |
| \`**Quería** salir.\` — quería | \`**Quise** salir.\` — lo intenté |
| \`No **quería** ir.\` — no quería | \`No **quiso** ir.\` — se negó |

> 💡 España vs. América: en España \`esta mañana **he visto**\`; en gran parte de América \`esta mañana **vi**\`. El DELE acepta ambas normas: sé coherente.`,
  },
  "dele-carta-formal": {
    en: `> **Before this topic:** **condicional** (podría, quisiera) and formal **usted** are in place. **In this topic:** **DELE letter writing** — ready-made openings and polite requests.

## Writing letters on the DELE (Expresión e interacción escritas)

The writing paper almost always includes a letter/e-mail. What's graded is the **register** — formulas must match the addressee.

### Formal letter

| Block | Formulas |
|---|---|
| Greeting | \`Estimado señor / Estimada señora:\` · \`Muy señores míos:\` · \`A quien corresponda:\` |
| Reason for writing | \`Le escribo para + inf…\` · \`Me dirijo a usted con motivo de…\` · \`Me pongo en contacto con ustedes para…\` |
| Request | \`Le agradecería que + subjuntivo imperfecto\` (\`…que me **enviara** más información\`) · \`¿Podría + inf…?\` · \`Le ruego (que) + subj\` |
| Complaint | \`Me veo obligado/a a expresar mi malestar por…\` · \`Quisiera presentar una reclamación…\` |
| Closing line | \`A la espera de su respuesta, …\` · \`Sin otro particular, …\` · \`Le agradezco de antemano su atención.\` |
| Sign-off | \`Atentamente,\` · \`Un cordial saludo,\` · \`Reciba un cordial saludo,\` |

> ⚠️ The whole letter uses **usted/ustedes**. A single "tú" in a formal letter = losing points for adecuación.

### Informal letter

| Block | Formulas |
|---|---|
| Greeting | \`¡Hola, Ana!\` · \`Querido Pablo:\` |
| Opening | \`¿Qué tal estás? Espero que todo te vaya bien.\` · \`¡Cuánto tiempo sin saber de ti!\` |
| Body | \`Te escribo porque…\` · \`¿Sabes qué? Resulta que…\` · \`Por cierto, …\` |
| Closing | \`Bueno, te dejo, que…\` · \`Escríbeme pronto.\` · \`Dale recuerdos a tu familia.\` |
| Sign-off | \`Un abrazo,\` · \`Un beso,\` · \`Hasta pronto,\` |

### Grammar of politeness (raises your score)
- Conditional: \`**Querría** saber si…\` / \`**Me gustaría** + inf\`
- Imperfecto de cortesía: \`**Quería** pedirle un favor.\`
- \`Le agradecería que me **informara**…\` — conditional + imperfect subjunctive = top-level B2.

### How many words to write (by DELE level)

| Level | Task | Length |
|---|---|---|
| A2 | Personal letter / e-mail | **60–70 words** |
| B1 | Letter or e-mail (Tarea 1) | **100–120 words** |
| B2 | Formal letter (Tarea 1) | **150–180 words** |
| C1 | Letter / task-based text | **220–250 words** |

> ⚠️ Falling far short = not all task points covered. Going far over = more mistakes and padding. Stay within ±10% of the range.

### Formal letter skeleton (5 blocks)

1. **Saludo** — \`Estimado señor:\` (1 line)
2. **Motivo** — why you write: \`Me dirijo a usted con motivo de…\` (~20% of the text)
3. **Desarrollo** — the substance: facts, details, arguments (1–2 paragraphs, ~50%)
4. **Petición / propuesta** — what you request or propose: \`Le agradecería que…\` (~20%)
5. **Despedida** — \`A la espera de su respuesta, … Atentamente,\` + name (1–2 lines)

### What the examiners grade

| Criterion | What they check |
|---|---|
| **Adecuación** | **All task points** covered; register matches the addressee; letter format respected |
| **Coherencia** | Logical paragraphs, connectors, no repetition or jumps in thought |
| **Corrección** | Grammar: tenses, agreement, spelling, punctuation |
| **Alcance** | Variety of vocabulary and structures — don't repeat \`pedir\` five times |

> 💡 Before handing in: tick off every task point against your draft. A missed point is the most common way to lose marks, even with perfect grammar.

> 💡 Learn the letter skeleton by heart — in the exam you'll only need to fill in the content.`,
    es: `> **Antes de este tema:** ya dominas **condicional** (podría, quisiera) y **usted** formal. **En este tema:** **carta DELE** — fórmulas de saludo y peticiones corteses.

## La carta en el DELE (Expresión e interacción escritas)

En la parte escrita casi siempre hay una carta o e-mail. Se evalúa el **registro**: las fórmulas deben corresponder al destinatario.

### Carta formal

| Bloque | Fórmulas |
|---|---|
| Saludo | \`Estimado señor / Estimada señora:\` · \`Muy señores míos:\` · \`A quien corresponda:\` |
| Motivo | \`Le escribo para + inf…\` · \`Me dirijo a usted con motivo de…\` · \`Me pongo en contacto con ustedes para…\` |
| Petición | \`Le agradecería que + subjuntivo imperfecto\` (\`…que me **enviara** más información\`) · \`¿Podría + inf…?\` · \`Le ruego (que) + subj\` |
| Queja | \`Me veo obligado/a a expresar mi malestar por…\` · \`Quisiera presentar una reclamación…\` |
| Cierre | \`A la espera de su respuesta, …\` · \`Sin otro particular, …\` · \`Le agradezco de antemano su atención.\` |
| Despedida | \`Atentamente,\` · \`Un cordial saludo,\` · \`Reciba un cordial saludo,\` |

> ⚠️ Toda la carta va en **usted/ustedes**. Un solo «tú» en una carta formal = menos puntos de adecuación.

### Carta informal

| Bloque | Fórmulas |
|---|---|
| Saludo | \`¡Hola, Ana!\` · \`Querido Pablo:\` |
| Inicio | \`¿Qué tal estás? Espero que todo te vaya bien.\` · \`¡Cuánto tiempo sin saber de ti!\` |
| Cuerpo | \`Te escribo porque…\` · \`¿Sabes qué? Resulta que…\` · \`Por cierto, …\` |
| Cierre | \`Bueno, te dejo, que…\` · \`Escríbeme pronto.\` · \`Dale recuerdos a tu familia.\` |
| Despedida | \`Un abrazo,\` · \`Un beso,\` · \`Hasta pronto,\` |

### Gramática de la cortesía (sube nota)
- Condicional: \`**Querría** saber si…\` / \`**Me gustaría** + inf\`
- Imperfecto de cortesía: \`**Quería** pedirle un favor.\`
- \`Le agradecería que me **informara**…\` — condicional + subjuntivo imperfecto = nivel B2 alto.

### Cuántas palabras escribir (por nivel DELE)

| Nivel | Tarea | Extensión |
|---|---|---|
| A2 | Carta personal / e-mail | **60–70 palabras** |
| B1 | Carta o e-mail (Tarea 1) | **100–120 palabras** |
| B2 | Carta formal (Tarea 1) | **150–180 palabras** |
| C1 | Carta / texto según la tarea | **220–250 palabras** |

> ⚠️ Quedarse muy corto = no se cubren todos los puntos de la tarea. Pasarse mucho = más errores y relleno. Mantente dentro del ±10% del rango.

### Esqueleto de la carta formal (5 bloques)

1. **Saludo** — \`Estimado señor:\` (1 línea)
2. **Motivo** — por qué escribes: \`Me dirijo a usted con motivo de…\` (~20% del texto)
3. **Desarrollo** — lo esencial: hechos, detalles, argumentos (1–2 párrafos, ~50%)
4. **Petición / propuesta** — qué pides o propones: \`Le agradecería que…\` (~20%)
5. **Despedida** — \`A la espera de su respuesta, … Atentamente,\` + nombre (1–2 líneas)

### Qué evalúan los examinadores

| Criterio | Qué comprueban |
|---|---|
| **Adecuación** | Se cubren **todos los puntos** de la tarea; el registro corresponde al destinatario; se respeta el formato |
| **Coherencia** | Párrafos lógicos, conectores, sin repeticiones ni saltos de ideas |
| **Corrección** | Gramática: tiempos, concordancia, ortografía, puntuación |
| **Alcance** | Variedad de léxico y estructuras — no repitas \`pedir\` cinco veces |

> 💡 Antes de entregar: marca cada punto de la tarea en tu borrador. Un punto sin cubrir es la causa más frecuente de perder nota, incluso con gramática perfecta.

> 💡 Memoriza el esqueleto de la carta: en el examen solo tendrás que rellenar el contenido.`,
  },
  "dele-conectores-redaccion": {
    en: `> **Before this topic:** you have covered **passive voice** and the **Connectors** chapter. **In this topic:** **DELE essay** — text structure and linkers (en primer lugar, sin embargo…).

## Connectors for the redacción (Expresión escrita B2–C1)

Your **coherencia** score depends directly on linking devices. Here is a working essay skeleton.

### Text structure

| Function | Connectors |
|---|---|
| Opening | \`En primer lugar\` · \`Para empezar\` · \`Hoy en día\` · \`Es un hecho que…\` |
| Addition | \`Además\` · \`Asimismo\` · \`Cabe añadir que\` · \`No solo…, sino también…\` |
| Contrast | \`Sin embargo\` · \`No obstante\` · \`Ahora bien\` · \`Por el contrario\` · \`A pesar de que\` |
| Two sides | \`Por un lado…, por otro (lado)…\` · \`En cuanto a…\` · \`Respecto a…\` |
| Cause | \`Debido a\` · \`Puesto que\` · \`Dado que\` · \`Ya que\` |
| Consequence | \`Por lo tanto\` · \`Por consiguiente\` · \`De ahí que + subj\` · \`Así pues\` |
| Example | \`Por ejemplo\` · \`Como muestra\` · \`Un claro ejemplo de ello es…\` |
| Conclusion | \`En definitiva\` · \`En conclusión\` · \`Para concluir\` · \`En resumen\` |

### Expressing opinion: indicativo or subjuntivo?

| Structure | Mood | Example |
|---|---|---|
| \`Creo que / Pienso que\` | **indicativo** | \`Creo que **es** útil.\` |
| \`No creo que / Dudo que\` | **subjuntivo** | \`No creo que **sea** útil.\` |
| \`Es evidente / cierto que\` | **indicativo** | \`Es evidente que **funciona**.\` |
| \`Es importante / necesario que\` | **subjuntivo** | \`Es importante que se **regule**.\` |
| \`(No) me parece que\` | ind. / **subj.** | \`No me parece que **tenga** sentido.\` |

### Point-losing traps
- \`De ahí que\` — **always subjunctive**: \`De ahí que **sea** necesario actuar.\`
- \`A pesar de **que** + verbo\`, but \`a pesar de + inf/sust\`.
- Don't repeat \`pero\` — alternate \`sin embargo / no obstante / ahora bien\`.

### Essay length and timing

| Level | Length | Suggested timing (per text) |
|---|---|---|
| B1 | **130–150 words** | 5 min plan → 20 min writing → 5 min review |
| B2 | **150–180 words** | 5 min plan → 25 min writing → 5 min review |
| C1 | **220–250 words** | 10 min plan → 30 min writing → 5 min review |

### Four-paragraph essay skeleton (word budget for B2)

1. **Introducción** (~25–30 words) — present the topic: \`Hoy en día…\` + thesis.
2. **Argumento 1 / a favor** (~50–60 words) — \`En primer lugar…\` → thesis → argument → example.
3. **Argumento 2 / en contra** (~50–60 words) — \`Sin embargo…\` / \`Por otro lado…\` → counter-argument → example.
4. **Conclusión** (~25–30 words) — \`En definitiva…\` + your own position (\`Es fundamental que + subj…\`).

### What the examiners expect

| Criterion | What they look at |
|---|---|
| **Adecuación** | The text answers **all** the task questions; the genre is respected (essay ≠ letter) |
| **Coherencia** | Clear paragraphs, varied connectors, logical progression of ideas |
| **Corrección** | Subjunctive where needed; tense agreement; spelling with accent marks |
| **Alcance** | Rich topic vocabulary, complex structures (\`de ahí que\`, pasiva refleja) |

- Examiners recognise memorised "universal" paragraphs and **penalise** them — learn the skeleton, not a ready-made text.
- Count words at the end: 3–4 words per draft line × number of lines is a quick estimate.

> 💡 B2 paragraph formula: connector → thesis → argument → example. Four paragraphs and the structure is done.`,
    es: `> **Antes de este tema:** ya viste **voz pasiva** y el capítulo **Conectores**. **En este tema:** **redacción DELE** — estructura y conectores (en primer lugar, sin embargo…).

## Conectores para la redacción (Expresión escrita B2–C1)

La nota de **coherencia** depende directamente de los conectores. Aquí tienes un esqueleto de redacción.

### Estructura del texto

| Función | Conectores |
|---|---|
| Inicio | \`En primer lugar\` · \`Para empezar\` · \`Hoy en día\` · \`Es un hecho que…\` |
| Adición | \`Además\` · \`Asimismo\` · \`Cabe añadir que\` · \`No solo…, sino también…\` |
| Contraste | \`Sin embargo\` · \`No obstante\` · \`Ahora bien\` · \`Por el contrario\` · \`A pesar de que\` |
| Dos caras | \`Por un lado…, por otro (lado)…\` · \`En cuanto a…\` · \`Respecto a…\` |
| Causa | \`Debido a\` · \`Puesto que\` · \`Dado que\` · \`Ya que\` |
| Consecuencia | \`Por lo tanto\` · \`Por consiguiente\` · \`De ahí que + subj\` · \`Así pues\` |
| Ejemplo | \`Por ejemplo\` · \`Como muestra\` · \`Un claro ejemplo de ello es…\` |
| Conclusión | \`En definitiva\` · \`En conclusión\` · \`Para concluir\` · \`En resumen\` |

### Opinión: ¿indicativo o subjuntivo?

| Estructura | Modo | Ejemplo |
|---|---|---|
| \`Creo que / Pienso que\` | **indicativo** | \`Creo que **es** útil.\` |
| \`No creo que / Dudo que\` | **subjuntivo** | \`No creo que **sea** útil.\` |
| \`Es evidente / cierto que\` | **indicativo** | \`Es evidente que **funciona**.\` |
| \`Es importante / necesario que\` | **subjuntivo** | \`Es importante que se **regule**.\` |
| \`(No) me parece que\` | ind. / **subj.** | \`No me parece que **tenga** sentido.\` |

### Trampas que restan puntos
- \`De ahí que\` — **siempre subjuntivo**: \`De ahí que **sea** necesario actuar.\`
- \`A pesar de **que** + verbo\`, pero \`a pesar de + inf/sust\`.
- No repitas \`pero\`: alterna \`sin embargo / no obstante / ahora bien\`.

### Extensión de la redacción y tiempo

| Nivel | Extensión | Tiempo recomendado (por texto) |
|---|---|---|
| B1 | **130–150 palabras** | 5 min de plan → 20 min de texto → 5 min de revisión |
| B2 | **150–180 palabras** | 5 min de plan → 25 min de texto → 5 min de revisión |
| C1 | **220–250 palabras** | 10 min de plan → 30 min de texto → 5 min de revisión |

### Esqueleto de redacción en 4 párrafos (presupuesto de palabras para B2)

1. **Introducción** (~25–30 palabras) — presenta el tema: \`Hoy en día…\` + tesis.
2. **Argumento 1 / a favor** (~50–60 palabras) — \`En primer lugar…\` → tesis → argumento → ejemplo.
3. **Argumento 2 / en contra** (~50–60 palabras) — \`Sin embargo…\` / \`Por otro lado…\` → contraargumento → ejemplo.
4. **Conclusión** (~25–30 palabras) — \`En definitiva…\` + postura propia (\`Es fundamental que + subj…\`).

### Qué esperan los examinadores

| Criterio | En qué se fijan |
|---|---|
| **Adecuación** | El texto responde a **todas** las preguntas de la tarea; se respeta el género (redacción ≠ carta) |
| **Coherencia** | Párrafos claros, conectores variados, progresión lógica de ideas |
| **Corrección** | Subjuntivo donde toca; concordancia de tiempos; ortografía con tildes |
| **Alcance** | Léxico rico del tema, estructuras complejas (\`de ahí que\`, pasiva refleja) |

- Los examinadores reconocen los párrafos «universales» memorizados y los **penalizan**: aprende el esqueleto, no un texto hecho.
- Cuenta las palabras al final: 3–4 palabras por línea del borrador × número de líneas es una estimación rápida.

> 💡 Fórmula del párrafo B2: conector → tesis → argumento → ejemplo. Cuatro párrafos y la estructura está lista.`,
  },
  "dele-expresion-oral": {
    en: `> **Before this topic:** you have covered **DELE essay writing**. **In this topic:** **DELE speaking** — photos, opinions, agreeing; full conjecture theory (Serán las diez…) comes in C2 “Conjetura”.

## The DELE speaking paper (Expresión e interacción orales)

### Describing a photo (the classic task)
Locating things in the picture:
- \`En primer plano se ve…\` — in the foreground you can see…
- \`Al fondo hay…\` — in the background there is…
- \`A la derecha / izquierda aparece…\`

Hypotheses — the examiner expects the **futuro de conjetura**:
- \`**Será** su madre.\` — She must be his mother.
- \`**Tendrán** unos treinta años.\` — They must be about thirty.
- \`**Estarán** celebrando algo.\` — They're probably celebrating something.
- \`Parece que + indicativo\` / \`Puede que + **subjuntivo**\` (\`Puede que **sean** amigos.\`)

### Opinion and evaluation
- \`Desde mi punto de vista…\` · \`A mi modo de ver…\` · \`En mi opinión…\`
- \`Lo que más me llama la atención es…\` — what strikes me most is…
- \`Me da la impresión de que…\`

### Agreeing / disagreeing (interacción)
| Agreement | Disagreement |
|---|---|
| \`Estoy totalmente de acuerdo contigo.\` | \`No estoy del todo de acuerdo.\` |
| \`Tienes toda la razón.\` | \`Yo lo veo de otra manera.\` |
| \`Yo pienso lo mismo.\` | \`Entiendo tu postura, pero…\` |
| \`Sin duda.\` / \`Desde luego.\` | \`No creo que **sea** así.\` (+subj!) |

### Filler words (to buy time)
\`Bueno…\` · \`Pues…\` · \`A ver…\` · \`Es que…\` · \`O sea…\` · \`¿Cómo te diría?\` · \`En fin…\`

They sound natural and give you seconds to think — examiners score this as **fluidez**.

### Compensation strategies (if you forget a word)
- \`Es una cosa que sirve para…\` — it's a thing you use for…
- \`No recuerdo la palabra exacta, pero…\`
- \`Es algo parecido a…\` — it's something like…

> 💡 In your minute of prep, jot down 3 connectors + 2 hypotheses with the future tense — enough for a structured monologue.`,
    es: `> **Antes de este tema:** ya viste la **redacción DELE**. **En este tema:** **expresión oral DELE** — fotos, opinión, acuerdo; conjetura (Serán las diez…) en detalle en C2 «Conjetura».

## La parte oral del DELE (Expresión e interacción orales)

### Descripción de una foto (tarea clásica)
Situar elementos:
- \`En primer plano se ve…\`
- \`Al fondo hay…\`
- \`A la derecha / izquierda aparece…\`

Hipótesis — el examinador espera el **futuro de conjetura**:
- \`**Será** su madre.\`
- \`**Tendrán** unos treinta años.\`
- \`**Estarán** celebrando algo.\`
- \`Parece que + indicativo\` / \`Puede que + **subjuntivo**\` (\`Puede que **sean** amigos.\`)

### Opinión y valoración
- \`Desde mi punto de vista…\` · \`A mi modo de ver…\` · \`En mi opinión…\`
- \`Lo que más me llama la atención es…\`
- \`Me da la impresión de que…\`

### Acuerdo / desacuerdo (interacción)
| Acuerdo | Desacuerdo |
|---|---|
| \`Estoy totalmente de acuerdo contigo.\` | \`No estoy del todo de acuerdo.\` |
| \`Tienes toda la razón.\` | \`Yo lo veo de otra manera.\` |
| \`Yo pienso lo mismo.\` | \`Entiendo tu postura, pero…\` |
| \`Sin duda.\` / \`Desde luego.\` | \`No creo que **sea** así.\` (¡+subj!) |

### Muletillas (para ganar tiempo)
\`Bueno…\` · \`Pues…\` · \`A ver…\` · \`Es que…\` · \`O sea…\` · \`¿Cómo te diría?\` · \`En fin…\`

Suenan naturales y dan segundos para pensar: los examinadores lo valoran como **fluidez**.

### Estrategias de compensación (si olvidas una palabra)
- \`Es una cosa que sirve para…\`
- \`No recuerdo la palabra exacta, pero…\`
- \`Es algo parecido a…\`

> 💡 En el minuto de preparación apunta 3 conectores + 2 hipótesis con futuro: suficiente para un monólogo estructurado.`,
  },
};
