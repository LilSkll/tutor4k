import type { InterfaceLanguage } from "@/types";

export const SPANISH_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "a1-articulos": {
    en: `## Definite articles (Artículos definidos)

| Gender / Number | Article | Example |
|---|---|---|
| m. singular | **el** | el libro |
| f. singular | **la** | la casa |
| m./f. + a/ha | **el** | el agua |
| plural | **los / las** | los libros, las casas |

## Indefinite articles (Artículos indefinidos)

| Number | Masculine | Feminine |
|---|---|---|
| Singular | **un** | **una** |
| Plural | **unos** | **unas** |

### Key rules
- **El** is used for a specific, known item: \`el sol\`.
- **Un/una** is used for something indefinite: \`un libro interesante\`.
- Before feminine nouns starting with stressed **a-/ha-**, use **el**: \`el agua\`, \`el águila\` (but in plural: \`las aguas\`).

> 💡 Remember: gender in Spanish is not always logical — \`el problema\` (m.), \`la mano\` (f.).`,
    es: `## Artículos definidos

| Género / Número | Artículo | Ejemplo |
|---|---|---|
| m. singular | **el** | el libro |
| f. singular | **la** | la casa |
| m./f. + a/ha | **el** | el agua |
| plural | **los / las** | los libros, las casas |

## Artículos indefinidos

| Número | Masculino | Femenino |
|---|---|---|
| Singular | **un** | **una** |
| Plural | **unos** | **unas** |

### Reglas clave
- **El** se usa para algo concreto y conocido: \`el sol\`.
- **Un/una** para algo indefinido: \`un libro interesante\`.
- Ante sustantivos femeninos que empiezan por **a-/ha-** tónica, se usa **el**: \`el agua\`, \`el águila\` (pero en plural: \`las aguas\`).

> 💡 Recuerda: el género en español no siempre es lógico — \`el problema\` (m.), \`la mano\` (f.).`,
  },

  "a1-ser-estar": {
    en: `## Ser vs Estar — both mean "to be"

### SER — permanent characteristics
Used for **identity, profession, origin, description**:
- \`Yo soy profesor.\`
- \`Ella es de México.\`
- \`El cielo es azul.\`

| Person | SER |
|---|---|
| yo | soy |
| tú | eres |
| él/ella/usted | es |
| nosotros/as | somos |
| **vosotros/as** | **sois** |
| ellos/ustedes | son |

### ESTAR — temporary states and location
Used for **state, feelings, location**:
- \`Estoy cansado.\`
- \`El libro está en la mesa.\`

| Person | ESTAR |
|---|---|
| yo | estoy |
| tú | estás |
| él/ella/usted | está |
| nosotros/as | estamos |
| **vosotros/as** | **estáis** |
| ellos/ustedes | están |

### Mnemonic DOCTOR / PLACE
- **SER**: **D**escription, **O**ccupation, **C**haracteristic, **T**ime, **O**rigin, **R**elationship.
- **ESTAR**: **P**osition, **L**ocation, **A**ction (gerundio), **C**ondition, **E**motion.

> ⚠️ Adjectives change meaning: \`es aburrido\` (a boring person) vs \`está aburrido\` (he/she is bored).`,
    es: `## Ser vs Estar — ambos significan «ser/estar»

### SER — características permanentes
Se usa para **identidad, profesión, origen, descripción**:
- \`Yo soy profesor.\`
- \`Ella es de México.\`
- \`El cielo es azul.\`

| Persona | SER |
|---|---|
| yo | soy |
| tú | eres |
| él/ella/usted | es |
| nosotros/as | somos |
| **vosotros/as** | **sois** |
| ellos/ustedes | son |

### ESTAR — estados temporales y ubicación
Se usa para **estado, sentimientos, lugar**:
- \`Estoy cansado.\`
- \`El libro está en la mesa.\`

| Persona | ESTAR |
|---|---|
| yo | estoy |
| tú | estás |
| él/ella/usted | está |
| nosotros/as | estamos |
| **vosotros/as** | **estáis** |
| ellos/ustedes | están |

### Mnemotecnia DOCTOR / PLACE
- **SER**: **D**escripción, **O**cupación, **C**aracterística, **T**iempo, **O**rigen, **R**elación.
- **ESTAR**: **P**osición, **L**ugar, **A**cción (gerundio), **C**ondición, **E**moción.

> ⚠️ Los adjetivos cambian de sentido: \`es aburrido\` (persona aburrida) vs \`está aburrido\` (está aburrido).`,
  },

  "a1-presente": {
    en: `## Presente de Indicativo

### Regular verbs (3 conjugations)

| Person | -AR (hablar) | -ER (comer) | -IR (vivir) |
|---|---|---|---|
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos | hablan | comen | viven |

### Irregular verbs (most common)
- **ser**: soy, eres, es, somos, sois, son
- **estar**: estoy, estás, está, estamos, estáis, están
- **ir**: voy, vas, va, vamos, vais, van
- **tener**: tengo, tienes, tiene, tenemos, tenéis, tienen
- **hacer**: hago, haces, hace, hacemos, hacéis, hacen

### Usage
- Action in the present: \`Trabajo en Madrid.\`
- General facts: \`El agua hierve a 100°C.\`
- Near future: \`Mañana voy al cine.\`

> 💡 Verbs with vowel alternation: \`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`.`,
    es: `## Presente de Indicativo

### Verbos regulares (3 conjugaciones)

| Persona | -AR (hablar) | -ER (comer) | -IR (vivir) |
|---|---|---|---|
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos | hablan | comen | viven |

### Verbos irregulares (más frecuentes)
- **ser**: soy, eres, es, somos, sois, son
- **estar**: estoy, estás, está, estamos, estáis, están
- **ir**: voy, vas, va, vamos, vais, van
- **tener**: tengo, tienes, tiene, tenemos, tenéis, tienen
- **hacer**: hago, haces, hace, hacemos, hacéis, hacen

### Uso
- Acción en el presente: \`Trabajo en Madrid.\`
- Hechos generales: \`El agua hierve a 100°C.\`
- Futuro próximo: \`Mañana voy al cine.\`

> 💡 Verbos con alternancia vocálica: \`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`.`,
  },

  "a1-genero-numero": {
    en: `## Género (Gender)

| Ending | Gender | Example |
|---|---|---|
| -o | m. | el libro, el perro |
| -a | f. | la casa, la gata |
| -ción/-sión | f. | la canción, la televisión |
| -dad/-tad | f. | la ciudad, la libertad |
| consonant | varies | el lápiz / la pared |

**Exceptions:** \`el problema\`, \`el mapa\`, \`el día\` (m. despite -a);
\`la mano\`, \`la foto\` (f. despite -o).

## Número (Number)

- Add **-s** (after vowel): \`libro → libros\`, \`mesa → mesas\`
- Add **-es** (after consonant): \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c before -es)
- \`el prógrama → los programas\` (without accent)

> ⚠️ Agreement: article + adjective + noun must match in gender and number: \`la casa blanca\`, \`los coches rojos\`.`,
    es: `## Género

| Terminación | Género | Ejemplo |
|---|---|---|
| -o | m. | el libro, el perro |
| -a | f. | la casa, la gata |
| -ción/-sión | f. | la canción, la televisión |
| -dad/-tad | f. | la ciudad, la libertad |
| consonante | variable | el lápiz / la pared |

**Excepciones:** \`el problema\`, \`el mapa\`, \`el día\` (m. a pesar de -a);
\`la mano\`, \`la foto\` (f. a pesar de -o).

## Número

- Se añade **-s** (tras vocal): \`libro → libros\`, \`mesa → mesas\`
- Se añade **-es** (tras consonante): \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c antes de -es)
- \`el prógrama → los programas\` (sin tilde)

> ⚠️ Concordancia: artículo + adjetivo + sustantivo deben coincidir en género y número: \`la casa blanca\`, \`los coches rojos\`.`,
  },

  "a1-numeros-1-100": {
    en: `## Cardinal numbers (Números cardinales)

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

> 💡 Age: \`Tengo veinte años.\` Prices: \`Cuesta cinco euros.\``,
    es: `## Números cardinales

| Rango | Ejemplo |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| decenas + unidades | treinta y uno, cuarenta y cinco |

**Particularidades:**
- \`uno → un\` delante de sustantivo: \`un libro\` (no \`uno libro\`)
- \`veintiún\` delante de m.: \`veintiún años\`
- \`cien\` (100) vs \`ciento\` (delante de número): \`ciento uno\`

> 💡 Edad: \`Tengo veinte años.\` Precios: \`Cuesta cinco euros.\``,
  },

  "a1-preposiciones-lugar": {
    en: `## Main prepositions of place

| Preposition | Meaning | Example |
|---|---|---|
| **en** | in/on | El libro está **en** la mesa |
| **a** | to/in (movement) | Voy **a** Madrid |
| **de** | from/of | Soy **de** Rusia |
| **sobre** | on/over | La lámpara está **sobre** la mesa |
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
    es: `## Preposiciones de lugar principales

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
    en: `## Gustar — "to like" (literally: "to be pleasing")

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
    es: `## Gustar — «gustar» (literalmente: «ser agradable»)

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
    en: `## Expressions with TENER

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
    es: `## Expresiones con TENER

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
    en: `## Question words (Palabras interrogativas)

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
    es: `## Palabras interrogativas

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
    en: `## Most essential irregular verbs (presente)

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
    es: `## Verbos irregulares más necesarios (presente)

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
    en: `## Pretérito Perfecto (Spanish passé composé)

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
    es: `## Pretérito Perfecto

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
    en: `## Pretérito Indefinido (simple past)

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
    es: `## Pretérito Indefinido

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
    en: `## Pretérito Imperfecto — background of the past

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
    es: `## Pretérito Imperfecto — fondo del pasado

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
    en: `## POR vs PARA — both translate differently

### PARA — purpose, destination, deadline
- **Purpose:** \`Estudio **para** aprender.\`
- **Recipient:** \`Es un regalo **para** ti.\`
- **Direction:** \`Voy **para** Madrid.\`
- **Deadline:** \`Para mañana.\`

### POR — cause, route, exchange, duration
- **Cause:** \`**Por** el frío, no salí.\`
- **Route/place:** \`Paseo **por** el parque.\`
- **Exchange:** \`Lo compré **por** 10 euros.\`
- **Duration:** \`Estudié **por** dos horas.\`
- **On behalf of:** \`Lo hago **por** ti.\`

### Mnemonic
**PARA** = purpose, forward direction
**POR** = cause, route, price

> ⚠️ Fixed expressions: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
    es: `## POR vs PARA — se traducen de formas distintas

### PARA — finalidad, destino, plazo
- **Finalidad:** \`Estudio **para** aprender.\`
- **Destinatario:** \`Es un regalo **para** ti.\`
- **Dirección:** \`Voy **para** Madrid.\`
- **Plazo:** \`Para mañana.\`

### POR — causa, camino, intercambio, duración
- **Causa:** \`**Por** el frío, no salí.\`
- **Camino/lugar:** \`Paseo **por** el parque.\`
- **Intercambio:** \`Lo compré **por** 10 euros.\`
- **Duración:** \`Estudié **por** dos horas.\`
- **En lugar de:** \`Lo hago **por** ti.\`

### Mnemotecnia
**PARA** = finalidad, dirección hacia adelante
**POR** = causa, camino, precio

> ⚠️ Expresiones fijas: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
  },

  "a2-comparativos": {
    en: `## Comparatives (Comparativos)

### Regular adjectives
\`más + adjective + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

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
    es: `## Comparativos

### Adjetivos regulares
\`más + adjetivo + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

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
    en: `## Futuro Simple

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

> 💡 Also: probability in the present: \`¿Qué hora es? — Serán las tres.\``,
    es: `## Futuro Simple

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

> 💡 También: probabilidad en el presente: \`¿Qué hora es? — Serán las tres.\``,
  },

  "b1-subjuntivo": {
    en: `## Modo Subjuntivo — Presente

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
    es: `## Modo Subjuntivo — Presente

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
    en: `## Imperativo

### Affirmative form (afirmativo)

| Person | -AR | -ER/-IR | Common irregulars |
|---|---|---|---|
| tú | -a (habla) | -e (come) | ten, pon, ven, sal, haz |
| usted | -e (hable) | -a (coma) | sea, vaya |
| nosotros | -emos | -amos | vamos, demos |
| vosotros | -ad (hablad) | -ed (comed) / **-id (vivid)** |  |
| ustedes | -en (hablen) | -an (coman) |  |

### Negative form (negativo) = Subjuntivo
\`No **hables**\`, \`No **comas**\`, \`No **vengas**\`.
Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`.

### Special tú forms (affirmative)
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

### With pronouns
In affirmative form, pronouns **attach** to the verb:
\`**Dímelo**\` (di + me + lo) = tell me it.

In negative — pronouns go **before**:
\`**No me lo digas**\`.

> 💡 Stress stays on the verb: dí-me-lo, có-me-lo.`,
    es: `## Imperativo

### Forma afirmativa

| Persona | -AR | -ER/-IR | Irregulares frecuentes |
|---|---|---|---|
| tú | -a (habla) | -e (come) | ten, pon, ven, sal, haz |
| usted | -e (hable) | -a (coma) | sea, vaya |
| nosotros | -emos | -amos | vamos, demos |
| vosotros | -ad (hablad) | -ed (comed) / **-id (vivid)** |  |
| ustedes | -en (hablen) | -an (coman) |  |

### Forma negativa = Subjuntivo
\`No **hables**\`, \`No **comas**\`, \`No **vengas**\`.
Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`.

### Formas especiales tú (afirmativo)
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

### Con pronombres
En afirmativo, los pronombres **se unen** al verbo:
\`**Dímelo**\` (di + me + lo).

En negativo van **delante**:
\`**No me lo digas**\`.

> 💡 La tilde se mantiene en el verbo: dí-me-lo, có-me-lo.`,
  },

  "b1-condicional": {
    en: `## Condicional Simple

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
    es: `## Condicional Simple

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

  "b1-preposiciones-por-para-2": {
    en: `## The pronoun SE — most important functions

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
    es: `## El pronombre SE — funciones principales

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
    en: `## Relative pronouns (Pronombres relativos)

### QUE — the most universal
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Used for people and things; after preposition with things:
\`el tema **de que** hablamos\` (but: \`la persona **de la que** hablo\`).

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
    es: `## Pronombres relativos

### QUE — el más universal
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Para personas y cosas; tras preposición con cosas:
\`el tema **de que** hablamos\` (pero: \`la persona **de la que** hablo\`).

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
    en: `## Pretérito Pluscuamperfecto — "past-before-past"

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
    es: `## Pretérito Pluscuamperfecto — «pasado del pasado»

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
    en: `## Subjuntivo Imperfecto

### Formation: infinitive + endings (with stress)

For -AR: -ara, -aras, -ara, -áramos, -arais, -aran
For -ER/-IR: -iera, -ieras, -iera, -iéramos, -ierais, -ieran

Example: \`hablar → hablara\`, \`comer → comiera\`, \`vivir → viviera\`.

⚠️ Same irregulars as futuro simple:
\`tener → tuviera\`, \`poner → pusiera\`, \`hacer → hiciera\`, \`saber → supiera\`,
\`venir → viniera\`, \`poder → pudiera\`, \`querer → quisiera\`, \`decir → dijera\`.

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
There is an older -se form: \`hablase, comiese\`. Found in literature.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = unreal condition. One of the most common B1-B2 constructions.`,
    es: `## Subjuntivo Imperfecto

### Formación: infinitivo + terminaciones (con tilde)

Para -AR: -ara, -aras, -ara, -áramos, -arais, -aran
Para -ER/-IR: -iera, -ieras, -iera, -iéramos, -ierais, -ieran

Ejemplo: \`hablar → hablara\`, \`comer → comiera\`, \`vivir → viviera\`.

⚠️ Los mismos irregulares que en futuro simple:
\`tener → tuviera\`, \`poner → pusiera\`, \`hacer → hiciera\`, \`saber → supiera\`,
\`venir → viniera\`, \`poder → pudiera\`, \`querer → quisiera\`, \`decir → dijera\`.

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
Existe la forma en -se: \`hablase, comiese\`. Aparece en la literatura.

> ⚠️ \`Si + imperfecto de subjuntivo + condicional\` = condición irreal. Una de las construcciones más frecuentes de B1-B2.`,
  },

  "b1-pronombres-objetos": {
    en: `## Object pronouns (OD and OI)

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
    es: `## Pronombres de objeto (OD y OI)

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
    en: `## Adverbs (Adverbios)

### Formation -mente (how? in what manner?)
**Adjective (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ If the adjective has only m. form: \`feliz → felizmente\`.

⚠️ If the source adjective has stress, \`-mente\` also carries stress:
\`difícil**mente**\`.

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
    es: `## Adverbios

### Formación -mente (¿cómo?)
**Adjetivo (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ Si el adjetivo solo tiene forma m.: \`feliz → felizmente\`.

⚠️ Si el adjetivo lleva tilde, \`-mente\` también la lleva:
\`difícil**mente**\`.

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
    en: `## Estilo Indirecto (Reported Speech)

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
    es: `## Estilo Indirecto

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
    en: `## Voz Pasiva

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
    es: `## Voz Pasiva

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
    en: `## Compound Subjuntivo forms

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
    es: `## Formas compuestas del Subjuntivo

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
    en: `## Condicional Compuesto

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
    es: `## Condicional Compuesto

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
    en: `## Relative pronouns (Advanced)

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
    es: `## Pronombres relativos (nivel avanzado)

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
    en: `## Connectors (Conectores discursivos)

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
    es: `## Conectores discursivos

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
    en: `## Perífrasis Verbales

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
    es: `## Perífrasis Verbales

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
    en: `## Matices Estilísticos (C1)

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
    es: `## Matices Estilísticos (C1)

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
    en: `## Subjuntivo — Advanced uses (C1)

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
    es: `## Subjuntivo — usos avanzados (C1)

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
    en: `## Estilo Indirecto — complete system (C1)

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
    es: `## Estilo Indirecto — sistema completo (C1)

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
    en: `## Pronouns — Advanced cases (C1)

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
    es: `## Pronombres — casos avanzados (C1)

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
    en: `## Ser vs Estar — Subtle cases (C1)

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

### Bread/food
\`El pan **es** fresco.\` — The bread is fresh (in general/by nature).
\`El pan **está** fresco.\` — The bread is fresh (now, just baked).

### Passive
\`**Es** escrito por Cervantes.\` — (action, process — ser pasiva)
\`**Está** escrito.\` — (result — estar + participio)

> 💡 Universal C1 hint: **SER = identity**, **ESTAR = state/result**. When in doubt — ask "is this a definition or a current state?".`,
    es: `## Ser vs Estar — matices avanzados (C1)

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

### Pan/comida
\`El pan **es** fresco.\` — El pan es fresco (en general/por naturaleza).
\`El pan **está** fresco.\` — El pan está fresco (ahora, recién hecho).

### Pasiva
\`**Es** escrito por Cervantes.\` — (acción, proceso — ser pasiva)
\`**Está** escrito.\` — (resultado — estar + participio)

> 💡 Pista universal de C1: **SER = identidad**, **ESTAR = estado/resultado**. Si dudas — pregúntate «¿es definición o estado actual?».`,
  },

  "c2-ironia-registry": {
    en: `## Irony and Register (C1-C2)

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
    es: `## Ironía y Registro (C1-C2)

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
};
