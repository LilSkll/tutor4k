import type { InterfaceLanguage } from "@/types";
import { SPANISH_GRAMMAR_CONTENT } from "@/config/grammar-content-spanish";
import { GERMAN_GRAMMAR_CONTENT } from "@/config/grammar-content-german";
import { ENGLISH_GAP_GRAMMAR_CONTENT } from "@/config/grammar-content-english-gap";

export const GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "eng-a1-be": {
    en: `## The verb **be** — the foundation of English

### I am / he is / they are
**Rule:** I → **am**, he/she/it → **is**, you/we/they → **are**.

| Subject | Form | Example |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Contractions
**Rule:** \`I am → I'm\`, \`He is → He's\`, \`They are → They're\`.

### Negative forms
**Rule:** \`I'm not\`; \`isn't\` / \`aren't\` (or \`he's not\` / \`they're not\`).

### Questions
**Rule:** **be** comes first: \`Am I...?\` \`Is he...?\` \`Are they...?\`

> 💡 **I am, He/She/It is, You/We/They are** — the foundation of all English grammar.`,
    es: `## El verbo **be** — la base del inglés

### I am / he is / they are
**Regla:** I → **am**, he/she/it → **is**, you/we/they → **are**.

| Sujeto | Forma | Ejemplo |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Contracciones (contractions)
**Regla:** \`I am → I'm\`, \`He is → He's\`, \`They are → They're\`.

### Negación
**Regla:** \`I'm not\`; \`isn't\` / \`aren't\` (o \`he's not\` / \`they're not\`).

### Preguntas
**Regla:** **be** va primero: \`Am I...?\` \`Is he...?\` \`Are they...?\`

> 💡 **I am, He/She/It is, You/We/They are** — la base de toda la gramática inglesa.`,
  },

  "eng-a1-present-simple": {
    en: `## Present Simple — routines and facts

### I/you/we/they + verb; he/she/it + -s
**Rule:** \`I work\` / \`They live\`. For he/she/it — **workS / liveS**.

### The -s ending (he/she/it)
**Rule:** consonant → **-s**; -o/-s/-sh/-ch/-x → **-es**; consonant + y → **-ies**.

| Verb ending | + | Example |
|---|---|---|
| consonant | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| consonant + y | **-ies** | study → stud**ies** |

### Negative and questions — do / does
**Rule:** \`I don't work\`, \`He doesn't work\`. Question: \`Do you...?\` / \`Does he...?\` — verb without -s.

### Time markers
**Rule:** typically with \`always\`, \`usually\`, \`often\`, \`every day\`.

> 💡 **He/she/it** — always **-s** or **-es**. The most common English rule.`,
    es: `## Present Simple — rutinas y hechos

### I/you/we/they + verbo; he/she/it + -s
**Regla:** \`I work\` / \`They live\`. Con he/she/it — **workS / liveS**.

### La terminación -s (he/she/it)
**Regla:** consonante → **-s**; -o/-s/-sh/-ch/-x → **-es**; consonante + y → **-ies**.

| Terminación del verbo | + | Ejemplo |
|---|---|---|
| consonante | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| consonante + y | **-ies** | study → stud**ies** |

### Negación y preguntas — do / does
**Regla:** \`I don't work\`, \`He doesn't work\`. Pregunta: \`Do you...?\` / \`Does he...?\` — verbo sin -s.

### Marcadores temporales
**Regla:** suele ir con \`always\`, \`usually\`, \`often\`, \`every day\`.

> 💡 **He/she/it** — siempre **-s** o **-es**.`,
  },

  "eng-a1-there-is-are": {
    en: `## There is / There are — "there is/are"

| Singular | Plural |
|---|---|
| **There is** a book | **There are** books |
| **There's** a table | — |

### Questions
\`Is there...?\` / \`Are there...?\`
\`Is there a bank near here?\`

### Negative forms
\`There isn't\` / \`There aren't\`

### With some/any
- **Affirmative:** \`There are some books\`
- **Question:** \`Are there any books?\`
- **Negative:** \`There aren't any books\`

> 💡 With uncountable nouns (water, money, time): \`There is some water\``,
    es: `## There is / There are — «hay / existe»

| Singular | Plural |
|---|---|
| **There is** a book | **There are** books |
| **There's** a table | — |

### Preguntas
\`Is there...?\` / \`Are there...?\`
\`Is there a bank near here?\`

### Negación
\`There isn't\` / \`There aren't\`

### Con some/any
- **Afirmación:** \`There are some books\`
- **Pregunta:** \`Are there any books?\`
- **Negación:** \`There aren't any books\`

> 💡 Con sustantivos incontables (water, money, time): \`There is some water\``,
  },

  "eng-a1-can": {
    en: `## Can / Can't — ability and possibility

### One form for everyone
**Rule:** \`can\` does **not** change: I/he/they **can**.

| Form | Example |
|---|---|
| + | I **can** swim |
| − | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### After can — verb without to
**Rule:** \`can swim\`, not *can to swim*.

### Three meanings
**Rule:** ability / request / permission — the same form \`can\`.

1. **Ability:** \`I can speak English\`
2. **Request:** \`Can you help me?\`
3. **Permission:** \`You can go now\` / \`Can I open the window?\`

> 💡 Politer later: \`Could you…?\``,
    es: `## Can / Can't — poder, saber hacer

### Una forma para todos
**Regla:** \`can\` **no** cambia: I/he/they **can**.

| Forma | Ejemplo |
|---|---|
| + | I **can** swim |
| − | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Después de can — verbo sin to
**Regla:** \`can swim\`, no *can to swim*.

### Tres sentidos
**Regla:** habilidad / petición / permiso — la misma forma \`can\`.

1. **Habilidad:** \`I can speak English\`
2. **Petición:** \`Can you help me?\`
3. **Permiso:** \`You can go now\`

> 💡 Más cortés luego: \`Could you…?\``,
  },

  "eng-a1-questions": {
    en: `## Wh- Questions

| Word | Meaning | Example |
|---|---|---|
| **What** | what / which | What is your name? |
| **Who** | who | Who is she? |
| **Where** | where | Where do you live? |
| **When** | when | When is the class? |
| **Why** | why | Why are you late? |
| **How** | how | How are you? |

### Word order
\`Wh- + auxiliary + subject + verb\`
- \`Where **do** you live?\`
- \`What **is** your job?\`

> 💡 Answers to Why often use **because**.`,
    es: `## Preguntas Wh-

| Palabra | Significado | Ejemplo |
|---|---|---|
| **What** | qué / cuál | What is your name? |
| **Who** | quién | Who is she? |
| **Where** | dónde | Where do you live? |
| **When** | cuándo | When is the class? |
| **Why** | por qué | Why are you late? |
| **How** | cómo | How are you? |

### Orden
\`Wh- + auxiliar + sujeto + verbo\`

> 💡 Las respuestas a Why suelen usar **because**.`,
  },

  "eng-a1-prepositions": {
    en: `## Prepositions of Place

| Preposition | Use | Example |
|---|---|---|
| **in** | inside | in the box, in London |
| **on** | on a surface | on the table |
| **at** | exact point | at the door, at school |
| **under** | below | under the bed |
| **between** | between two | between A and B |
| **next to** | beside | next to the bank |

> 💡 \`at\` home / work; \`in\` a city; \`on\` a street.`,
    es: `## Preposiciones de lugar

| Preposición | Uso | Ejemplo |
|---|---|---|
| **in** | dentro | in the box, in London |
| **on** | sobre una superficie | on the table |
| **at** | punto exacto | at the door, at school |
| **under** | debajo | under the bed |
| **between** | entre dos | between A and B |
| **next to** | al lado | next to the bank |

> 💡 \`at\` home / work; \`in\` ciudad; \`on\` calle.`,
  },

  "eng-a2-past-simple": {
    en: `## Past Simple — completed actions in the past

### Regular verbs → +**-ed**
\`work → worked\`, \`play → played\`, \`study → studied\`

### Irregular verbs — you need to learn them!
\`go → went\`, \`see → saw\`, \`have → had\`, \`do → did\`, \`make → made\`

### Negative and questions → with **did** (the verb returns to the infinitive!)
- \`I didn't work\` (NOT ~~didn't worked~~)
- \`Did you go?\` (NOT ~~Did you went?~~)

### Time markers
\`yesterday\`, \`last week\`, \`two days ago\`, \`in 2020\`

### The verb be in the past
\`I/He/She/It **was**\`, \`You/We/They **were**\`

> 💡 **Key rule:** with did — the verb has no ending. Did you **see**?`,
    es: `## Past Simple — acciones completadas en el pasado

### Verbos regulares → +**-ed**
\`work → worked\`, \`play → played\`, \`study → studied\`

### Verbos irregulares — ¡hay que aprenderlos!
\`go → went\`, \`see → saw\`, \`have → had\`, \`do → did\`, \`make → made\`

### Negación y preguntas → con **did** (¡el verbo vuelve al infinitivo!)
- \`I didn't work\` (NO ~~didn't worked~~)
- \`Did you go?\` (NO ~~Did you went?~~)

### Marcadores temporales
\`yesterday\`, \`last week\`, \`two days ago\`, \`in 2020\`

### El verbo be en pasado
\`I/He/She/It **was**\`, \`You/We/They **were**\`

> 💡 **Regla clave:** con did — el verbo sin terminación. Did you **see**?`,
  },

  "eng-a2-comparatives": {
    en: `## Comparatives & Superlatives

### Rules
| Length | Comparative | Superlative |
|---|---|---|
| 1 syllable | **-er** → bigger | **the -est** → the biggest |
| 2 syllables (-y) | **-ier** → happier | **the -iest** → the happiest |
| 2+ syllables | **more** → more beautiful | **the most** → the most beautiful |

### Irregular forms
| Adjective | Comparative | Superlative |
|---|---|---|
| good | **better** | **the best** |
| bad | **worse** | **the worst** |
| far | **further** | **the furthest** |

### Constructions
- \`A is **bigger than** B\` — A is bigger than B
- \`A is **the biggest**\` — A is the biggest
- \`as ... as\` → \`as big as\` = as big as

> 💡 \`good → better → the best\` — you must learn this!`,
    es: `## Comparativos y Superlativos

### Reglas
| Longitud | Comparativo | Superlativo |
|---|---|---|
| 1 sílaba | **-er** → bigger | **the -est** → the biggest |
| 2 sílabas (-y) | **-ier** → happier | **the -iest** → the happiest |
| 2+ sílabas | **more** → more beautiful | **the most** → the most beautiful |

### Formas irregulares
| Adjetivo | Comparativo | Superlativo |
|---|---|---|
| good | **better** | **the best** |
| bad | **worse** | **the worst** |
| far | **further** | **the furthest** |

### Construcciones
- \`A is **bigger than** B\` — A es más grande que B
- \`A is **the biggest**\` — A es el más grande
- \`as ... as\` → \`as big as\` = tan grande como

> 💡 \`good → better → the best\` — ¡obligatorio aprenderlo!`,
  },

  "eng-a2-present-perfect": {
    en: `## Present Perfect — experience and results

### Formula: **have/has** + **V3** (past participle)

| Person | Auxiliary | Example |
|---|---|---|
| I/You/We/They | **have** | I have visited London |
| He/She/It | **has** | She has finished |

### Forming V3
- Regular: +**-ed** → worked, played
- Irregular: \`go → gone\`, \`see → seen\`, \`eat → eaten\`

### Uses
1. **Life experience:** \`I have been to Paris\`
2. **Recent result:** \`She has lost her keys\` (and still hasn't found them)
3. **Started in the past, continues:** \`I have lived here for 5 years\`

### Time markers
\`ever\`, \`never\`, \`already\`, \`yet\`, \`just\`, \`for\`, \`since\`

> ⚠️ With a specific past time → Past Simple: \`I went yesterday\` (not ~~have gone yesterday~~).`,
    es: `## Present Perfect — experiencia y resultados

### Fórmula: **have/has** + **V3** (participio pasado)

| Persona | Auxiliar | Ejemplo |
|---|---|---|
| I/You/We/They | **have** | I have visited London |
| He/She/It | **has** | She has finished |

### Formación del V3
- Regulares: +**-ed** → worked, played
- Irregulares: \`go → gone\`, \`see → seen\`, \`eat → eaten\`

### Usos
1. **Experiencia de vida:** \`I have been to Paris\`
2. **Resultado reciente:** \`She has lost her keys\` (y aún no las ha encontrado)
3. **Empezó en el pasado, continúa:** \`I have lived here for 5 years\`

### Marcadores temporales
\`ever\`, \`never\`, \`already\`, \`yet\`, \`just\`, \`for\`, \`since\`

> ⚠️ Con un momento concreto del pasado → Past Simple: \`I went yesterday\` (no ~~have gone yesterday~~).`,
  },

  "eng-a2-going-to": {
    en: `## be going to — plans and intentions

### Formula: **am/is/are + going to + V**

| Person | Example |
|---|---|
| I | I **am going to** travel |
| He/She | She **is going to** study |
| We/They | They **are going to** leave |

### Uses
1. **Intention:** \`I'm going to learn Spanish\`
2. **Evidence-based prediction:** \`Look at the clouds — it's going to rain\`

> 💡 After going to — **base verb** (not -ing / not -s).`,
    es: `## be going to — planes e intenciones

### Fórmula: **am/is/are + going to + V**

### Usos
1. **Intención:** \`I'm going to learn Spanish\`
2. **Predicción con evidencia:** \`It's going to rain\`

> 💡 Después de going to — **verbo base**.`,
  },

  "eng-a2-quantifiers": {
    en: `## Quantifiers — some / any / much / many

| Word | With | Example |
|---|---|---|
| **some** | + / offers | some water |
| **any** | − / ? | any milk? |
| **many** | countable | many books |
| **much** | uncountable | much time |
| **a lot of** | both | a lot of friends |

> 💡 In everyday speech, \`a lot of\` is more common than \`much\` in affirmative sentences.`,
    es: `## Cuantificadores — some / any / much / many

| Palabra | Con | Ejemplo |
|---|---|---|
| **some** | + / ofrecimientos | some water |
| **any** | − / ? | any milk? |
| **many** | contables | many books |
| **much** | incontables | much time |
| **a lot of** | ambos | a lot of friends |

> 💡 En el habla cotidiana, \`a lot of\` es más frecuente que \`much\` en afirmativas.`,
  },

  "eng-b1-future-conditional": {
    en: `## Future (will) & First Conditional

### will / won't
\`I will help you\`, \`He won't come\`
Contractions: \`I'll\`, \`won't\`

### First Conditional: **If + present, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

> 💡 First Conditional — **a real condition**. Will ONLY in the main clause, not in if.`,
    es: `## Futuro (will) y Primer Condicional

### will / won't
\`I will help you\`, \`He won't come\`
Contracciones: \`I'll\`, \`won't\`

### Primer Condicional: **If + presente, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

> 💡 Primer Condicional — **condición real**. Will SOLO en la oración principal, no en if.`,
  },

  "eng-b1-modals": {
    en: `## Modals — should / must / have to

| Modal | Meaning | Example |
|---|---|---|
| **should** | advice | You should rest |
| **must** | strong obligation | You must wear a seatbelt |
| **have to** | external obligation | I have to work tomorrow |
| **mustn't** | prohibition | You mustn't smoke here |
| **don't have to** | no necessity | You don't have to come |

> 💡 After a modal — **base verb**: \`should go\` (not ~~should to go~~).`,
    es: `## Modales — should / must / have to

| Modal | Significado | Ejemplo |
|---|---|---|
| **should** | consejo | You should rest |
| **must** | obligación fuerte | You must wear a seatbelt |
| **have to** | obligación externa | I have to work tomorrow |
| **mustn't** | prohibición | You mustn't smoke here |
| **don't have to** | no es necesario | You don't have to come |

> 💡 Después del modal — **verbo base**.`,
  },

  "eng-b1-narrative": {
    en: `## Narrative Tenses — tenses for storytelling

### Past Continuous: **was/were + V-ing**
\`I was reading when she called.\`
A long action interrupted by another.

### used to: **used to + V**
\`I used to play tennis.\` — I used to play (but I don't anymore).
Past only.

### Past Perfect: **had + V3**
\`When I arrived, the train had left.\`
An action that happened BEFORE another action in the past.

### Comparison
| Tense | When | Example |
|---|---|---|
| Past Simple | What happened | I arrived |
| Past Continuous | What was happening | I was walking |
| Past Perfect | What had already happened before | It had started |

> 💡 Past Perfect = "past before the past". First had + V3, then Past Simple.`,
    es: `## Tiempos Narrativos — tiempos para contar historias

### Past Continuous: **was/were + V-ing**
\`I was reading when she called.\`
Acción prolongada interrumpida por otra.

### used to: **used to + V**
\`I used to play tennis.\` — Antes jugaba (pero ya no).
Solo pasado.

### Past Perfect: **had + V3**
\`When I arrived, the train had left.\`
Acción que ocurrió ANTES de otra acción en el pasado.

### Comparación
| Tiempo | Cuándo | Ejemplo |
|---|---|---|
| Past Simple | Qué ocurrió | I arrived |
| Past Continuous | Qué estaba ocurriendo | I was walking |
| Past Perfect | Qué ya había ocurrido antes | It had started |

> 💡 Past Perfect = «pretérito anterior». Primero had + V3, luego Past Simple.`,
  },

  "eng-b1-perfect-continuous": {
    en: `## Present Perfect Continuous

### Formula: **have/has been** + **V-ing**

\`I have been studying for 3 hours.\`
\`She has been working since morning.\`

### for vs since
- **for** + period: \`for 2 hours, for 5 years\`
- **since** + point in time: \`since 2020, since Monday\`

### When to use
1. **Duration:** \`How long have you been waiting?\`
2. **Recent action with visible result:** \`I'm tired — I've been running.\`

> 💡 Present Perfect Continuous emphasises **the process and its duration**.`,
    es: `## Present Perfect Continuous

### Fórmula: **have/has been** + **V-ing**

\`I have been studying for 3 hours.\`
\`She has been working since morning.\`

### for vs since
- **for** + período: \`for 2 hours, for 5 years\`
- **since** + punto en el tiempo: \`since 2020, since Monday\`

### Cuándo usar
1. **Duración:** \`How long have you been waiting?\`
2. **Acción reciente con resultado visible:** \`I'm tired — I've been running.\`

> 💡 Present Perfect Continuous enfatiza **el proceso y su duración**.`,
  },

  "eng-b2-conditionals": {
    en: `## Second & Third Conditionals

### 2nd Conditional: unreal present
**If + Past Simple, would + V**
\`If I had money, I would travel.\` (but I don't have money)

### 3rd Conditional: unreal past
**If + Past Perfect, would have + V3**
\`If I had studied, I would have passed.\` (but I didn't study and didn't pass)

### wish / if only
- \`I wish I **knew** the answer.\` (present)
- \`I wish I **had** studied more.\` (past)

> 💡 2nd = imaginary **now**, 3rd = regret about the **past**.`,
    es: `## Segundo y Tercer Condicional

### 2.º Condicional: presente irreal
**If + Past Simple, would + V**
\`If I had money, I would travel.\` (pero no tengo dinero)

### 3.º Condicional: pasado irreal
**If + Past Perfect, would have + V3**
\`If I had studied, I would have passed.\` (pero no estudié y no aprobé)

### wish / if only
- \`I wish I **knew** the answer.\` (presente)
- \`I wish I **had** studied more.\` (pasado)

> 💡 2.º = imaginario **ahora**, 3.º = arrepentimiento del **pasado**.`,
  },

  "eng-b2-passive": {
    en: `## Passive Voice

### Formula: **be + V3 (past participle)**

| Tense | Active | Passive |
|---|---|---|
| Present Simple | They build houses | Houses **are built** |
| Past Simple | They built it | It **was built** |
| Present Perfect | They have done it | It **has been done** |
| Future | They will do it | It **will be done** |

### Uses
- When the **result** matters, not the doer
- \`The Mona Lisa was painted in 1503.\` (the artist is obvious)

### have something done
\`I had my car repaired.\` (= a mechanic repaired it, not me)

> 💡 With **by** you can name the doer: \`It was written by Shakespeare\`.`,
    es: `## Voz Pasiva

### Fórmula: **be + V3 (participio pasado)**

| Tiempo | Activa | Pasiva |
|---|---|---|
| Present Simple | They build houses | Houses **are built** |
| Past Simple | They built it | It **was built** |
| Present Perfect | They have done it | It **has been done** |
| Future | They will do it | It **will be done** |

### Usos
- Cuando importa el **resultado**, no el agente
- \`The Mona Lisa was painted in 1503.\` (el autor es obvio)

### have something done
\`I had my car repaired.\` (= un mecánico lo reparó, no yo)

> 💡 Con **by** puedes indicar el agente: \`It was written by Shakespeare\`.`,
  },

  "eng-b2-reported-clauses": {
    en: `## Reported Speech & Relative Clauses

### Reported Speech — tense backshift
\`He said: "I am tired" → He said he **was** tired.\`
Present → Past, will → would, can → could.

### Relative Clauses
| Pronoun | For | Example |
|---|---|---|
| **who** | people | The man **who** lives here |
| **which** | things | The book **which** I read |
| **that** | people/things | The car **that** I bought |
| **whose** | possession | The girl **whose** father is a doctor |

### Defining vs Non-defining
- **Defining** (no commas): \`The man who called you is here\`
- **Non-defining** (with commas): \`My father, who is 60, works hard\`

> 💡 With commas you cannot use **that**: ~~My father, that...~~`,
    es: `## Estilo Indirecto y Oraciones de Relativo

### Estilo indirecto — cambio de tiempos
\`He said: "I am tired" → He said he **was** tired.\`
Present → Past, will → would, can → could.

### Oraciones de relativo
| Pronombre | Para | Ejemplo |
|---|---|---|
| **who** | personas | The man **who** lives here |
| **which** | cosas | The book **which** I read |
| **that** | personas/cosas | The car **that** I bought |
| **whose** | posesión | The girl **whose** father is a doctor |

### Defining vs Non-defining
- **Defining** (sin comas): \`The man who called you is here\`
- **Non-defining** (con comas): \`My father, who is 60, works hard\`

> 💡 Con comas **no** se usa **that**: ~~My father, that...~~`,
  },

  "eng-c1-inversion": {
    en: `## Inversion & Emphatic Structures (C1)

### Negative Adverbial Inversion
**Never / Rarely / Hardly + auxiliary + subject + verb**
\`Never **have I seen** such beauty.\` (instead of: I have never seen)
\`Hardly **had I arrived** when it started raining.\`

### Cleft Sentences
\`It was **John** who broke the window.\` (emphasis on John)
\`What I need is a vacation.\` (emphasis on need)

### Emphatic do/does/did
\`I **do** believe you!\` (emphasis)
\`She **does** work hard.\`

> 💡 Inversion = formal, expressive style. Used in literature and rhetoric.`,
    es: `## Inversión y Estructuras Énfaticas (C1)

### Inversión con adverbios negativos
**Never / Rarely / Hardly + auxiliar + sujeto + verbo**
\`Never **have I seen** such beauty.\` (en lugar de: I have never seen)
\`Hardly **had I arrived** when it started raining.\`

### Oraciones hendidas (cleft sentences)
\`It was **John** who broke the window.\` (énfasis en John)
\`What I need is a vacation.\` (énfasis en need)

### do/does/did enfático
\`I **do** believe you!\` (énfasis)
\`She **does** work hard.\`

> 💡 Inversión = estilo formal y expresivo. Se usa en literatura y retórica.`,
  },

  "eng-c1-discourse": {
    en: `## Discourse Devices (C1)

### Substitution
Replacing repetition: \`one/ones\`, \`do/did\`, \`so\`
\`I'll have the red one.\`, \`I think so.\`

### Ellipsis
Omitting words that are understood:
\`(Are you) Ready?\`, \`(I) Couldn't agree more.\`

### Fronting
Moving an element forward for emphasis:
\`Such was his anger that...\` (instead of: His anger was such that...)

### Intensifying Adverbs
\`absolutely exhausted\`, \`utterly ridiculous\`, \`deeply concerned\`

> 💡 These devices make speech **natural and advanced** — they distinguish C1 from B2.`,
    es: `## Recursos del Discurso (C1)

### Sustitución
Reemplazar repeticiones: \`one/ones\`, \`do/did\`, \`so\`
\`I'll have the red one.\`, \`I think so.\`

### Elipsis
Omitir palabras entendidas:
\`(Are you) Ready?\`, \`(I) Couldn't agree more.\`

### Fronting
Adelantar un elemento para dar énfasis:
\`Such was his anger that...\` (en lugar de: His anger was such that...)

### Adverbios intensificadores
\`absolutely exhausted\`, \`utterly ridiculous\`, \`deeply concerned\`

> 💡 Estos recursos hacen el discurso **natural y avanzado** — distinguen C1 de B2.`,
  },

  "eng-c1-mixed-conditionals": {
    en: `## Mixed Conditionals & Advanced Passives (C1)

### Mixed Conditionals
Combining condition and result tenses:

| Type | Structure | Example |
|---|---|---|
| Past → Present | If + had V3, would + V | If I had studied medicine, I would be a doctor now |
| Present → Past | If + Past Simple, would have V3 | If I were taller, I would have joined basketball |

### Advanced Passives
- **It is said that...** → \`It is believed that he left the country\`
- **He is said to...** → \`He is said to be a genius\`
- **Need + V-ing** → \`This car needs cleaning\` (= needs to be cleaned)

### wish + would
\`I wish you wouldn't do that.\` (annoyance about someone else's habit)

> 💡 Mixed conditionals connect a **cause from the past** with a **result in the present**.`,
    es: `## Condicionales Mixtos y Pasivas Avanzadas (C1)

### Condicionales mixtos
Combinación de tiempos en condición y resultado:

| Tipo | Estructura | Ejemplo |
|---|---|---|
| Pasado → Presente | If + had V3, would + V | If I had studied medicine, I would be a doctor now |
| Presente → Pasado | If + Past Simple, would have V3 | If I were taller, I would have joined basketball |

### Pasivas avanzadas
- **It is said that...** → \`It is believed that he left the country\`
- **He is said to...** → \`He is said to be a genius\`
- **Need + V-ing** → \`This car needs cleaning\` (= needs to be cleaned)

### wish + would
\`I wish you wouldn't do that.\` (molestia por un hábito ajeno)

> 💡 Los condicionales mixtos unen una **causa del pasado** con un **resultado en el presente**.`,
  },

  "eng-c1-review": {
    en: `## Comprehensive Review & IELTS Preparation

### Key topics to review:
1. **All types of conditionals** (0, 1, 2, 3, mixed)
2. **All passive constructions**
3. **Modal verbs** (past: must have, should have, could have)
4. **Reported speech** (all backshifts)
5. **Inversion and emphatic structures**

### IELTS Speaking Tips
- Use **complex structures** (conditionals, passives, relative clauses)
- **Discourse markers**: however, nevertheless, on the other hand
- **Idiomatic language**: a piece of cake, over the moon, break the ice

### IELTS Writing Tips
- **Varied sentence structure** (not only Subject-Verb-Object)
- **Formal register** (avoid contractions in academic writing)
- **Cohesive devices**: furthermore, consequently, in contrast

> 🏆 C1 level = not just correct, but **appropriate and expressive**.`,
    es: `## Repaso Integral y Preparación IELTS

### Temas clave para repasar:
1. **Todos los tipos de condicionales** (0, 1, 2, 3, mixtos)
2. **Todas las construcciones pasivas**
3. **Verbos modales** (pasado: must have, should have, could have)
4. **Estilo indirecto** (todos los cambios de tiempo)
5. **Inversión y estructuras enfáticas**

### Consejos IELTS Speaking
- Usa **estructuras complejas** (condicionales, pasivas, oraciones de relativo)
- **Conectores del discurso**: however, nevertheless, on the other hand
- **Lenguaje idiomático**: a piece of cake, over the moon, break the ice

### Consejos IELTS Writing
- **Variedad de estructuras oracionales** (no solo Sujeto-Verbo-Objeto)
- **Registro formal** (evita contracciones en escritura académica)
- **Dispositivos de cohesión**: furthermore, consequently, in contrast

> 🏆 Nivel C1 = no solo correcto, sino **apropiado y expresivo**.`,
  },
  "eng-c2-cleft-emphasis": {
    en: `## Cleft sentences — "split" sentences

Native speakers restructure the sentence to **highlight** what matters.

### It-cleft
| Neutral | Focused |
|---|---|
| \`John broke the vase.\` | \`**It was John who** broke the vase.\` |
| \`I met her in Paris.\` | \`**It was in Paris that** I met her.\` |
| \`She called yesterday.\` | \`**It was yesterday that** she called.\` |

### Wh-cleft (pseudo-cleft)
- \`**What I need is** a holiday.\`
- \`**What annoys me is** his tone.\`
- \`**What she did was** (to) resign.\`
- \`**All I want is** peace and quiet.\`

### The thing / The reason / The place
- \`**The thing that** matters most **is** honesty.\`
- \`**The reason why** I left **was** the noise.\`

### Emphatic DO
- \`I **do** like your idea!\`
- \`She **does** work hard.\`
- \`**Do** come in!\`

### Fronting
- \`**This** I cannot accept.\`
- \`**Strange as it may seem**, he refused.\`

> 💡 On CPE / IELTS 8+, cleft structures are an essential marker of fluent writing.`,
    es: `## Cleft sentences — oraciones «hendidas»

Los nativos reestructuran la frase para **destacar** lo importante.

### It-cleft
| Neutro | Con foco |
|---|---|
| \`John broke the vase.\` | \`**It was John who** broke the vase.\` — Fue John quien rompió el jarrón. |
| \`I met her in Paris.\` | \`**It was in Paris that** I met her.\` — Fue en París donde la conocí. |
| \`She called yesterday.\` | \`**It was yesterday that** she called.\` |

### Wh-cleft (pseudo-cleft)
- \`**What I need is** a holiday.\` — Lo que necesito son vacaciones.
- \`**What annoys me is** his tone.\` — Lo que me molesta es su tono.
- \`**What she did was** (to) resign.\` — Lo que hizo fue dimitir.
- \`**All I want is** peace and quiet.\` — Todo lo que quiero es paz y tranquilidad.

### The thing / The reason / The place
- \`**The thing that** matters most **is** honesty.\`
- \`**The reason why** I left **was** the noise.\`

### DO enfático
- \`I **do** like your idea!\` — ¡De verdad me gusta tu idea!
- \`She **does** work hard.\` — Realmente trabaja mucho.
- \`**Do** come in!\` — ¡Pasa, por favor!

### Fronting — anteposición
- \`**This** I cannot accept.\` — Esto sí que no puedo aceptarlo.
- \`**Strange as it may seem**, he refused.\` — Por extraño que parezca, se negó.

> 💡 En CPE / IELTS 8+, las estructuras cleft son un marcador imprescindible de escritura fluida.`,
  },
  "eng-c2-ellipsis-substitution": {
    en: `## Ellipsis & substitution — English economy

Native speakers **don't repeat** what's been said — they substitute or omit it.

### SO / NOT instead of a whole clause
- \`Is it going to rain? — I **hope not**.\` (= I hope it isn't going to rain)
- \`Will she come? — I **think so**.\` / \`I'm **afraid not**.\`
- \`If **so**, call me. If **not**, don't bother.\`

### SO / NEITHER — "me too"
| Statement | Agreement |
|---|---|
| \`I love jazz.\` | \`**So do I.**\` |
| \`She has been to Peru.\` | \`**So have I.**\` |
| \`I can't swim.\` | \`**Neither can I.** / **Me neither.**\` |

> ⚠️ Inversion is required: \`So **do I**\`, not \`*So I do\` (that means "indeed I do").

### DO instead of a verb phrase
- \`He runs faster than I **do**.\` (= than I run)
- \`— Clean your room! — I already **have** (done).\`
- \`She might come, and if she **does**, tell her to wait.\`

### ONE / ONES instead of a noun
- \`Which cake? — The chocolate **one**.\`
- \`These shoes are worn out. I need new **ones**.\`

### Ellipsis after and / but / or
- \`She can sing and (she can) dance.\`
- \`He wanted to leave but (he) couldn't (leave).\`

### Conversational ellipsis (sentence openings)
- \`(Have you) Seen my keys?\`
- \`(It) Sounds good.\` / \`(I) Told you so.\`

> 💡 Understanding ellipsis is the key to listening at natural speed.`,
    es: `## Ellipsis & substitution — la economía del inglés

Los nativos **no repiten** lo dicho: lo sustituyen o lo omiten.

### SO / NOT en lugar de toda la subordinada
- \`Is it going to rain? — I **hope not**.\` (= espero que no)
- \`Will she come? — I **think so**.\` / \`I'm **afraid not**.\`
- \`If **so**, call me. If **not**, don't bother.\` — Si es así… si no…

### SO / NEITHER — «yo también»
| Afirmación | Acuerdo |
|---|---|
| \`I love jazz.\` | \`**So do I.**\` — Yo también. |
| \`She has been to Peru.\` | \`**So have I.**\` |
| \`I can't swim.\` | \`**Neither can I.** / **Me neither.**\` |

> ⚠️ La inversión es obligatoria: \`So **do I**\`, no \`*So I do\` (eso significa «y de verdad que sí»).

### DO en lugar del grupo verbal
- \`He runs faster than I **do**.\` (= than I run)
- \`— Clean your room! — I already **have** (done).\`
- \`She might come, and if she **does**, tell her to wait.\`

### ONE / ONES en lugar del sustantivo
- \`Which cake? — The chocolate **one**.\`
- \`These shoes are worn out. I need new **ones**.\`

### Elipsis tras and / but / or
- \`She can sing and (she can) dance.\`
- \`He wanted to leave but (he) couldn't (leave).\`

### Elipsis coloquial (inicio de frase)
- \`(Have you) Seen my keys?\` — ¿Has visto mis llaves?
- \`(It) Sounds good.\` / \`(I) Told you so.\`

> 💡 Entender la elipsis es la clave para comprender el inglés a velocidad natural.`,
  },
  "eng-c2-hedging-nuance": {
    en: `## Hedging — the art of not saying things directly

C2 means being able to **soften**, **distance yourself**, and read understatement between the lines.

### Academic hedging
| Direct | Cautious |
|---|---|
| \`This proves…\` | \`This **would seem to suggest**…\` |
| \`Everyone knows…\` | \`**It is widely believed that**…\` |
| \`I think…\` | \`**It could be argued that**…\` |
| \`The results show…\` | \`The results **appear to** show…\` |

Softeners: \`arguably\`, \`to some extent\`, \`in a sense\`, \`more or less\`, \`broadly speaking\`.

### British understatement
| What's said | What's meant |
|---|---|
| \`Not bad.\` | Excellent! |
| \`I'm **not entirely** convinced.\` | I completely disagree. |
| \`It's **a bit** expensive.\` | It's insanely expensive. |
| \`**With respect**, …\` | I'm about to tear your argument apart. |
| \`**Interesting** idea…\` | Not a great idea. |

### Polite criticism and disagreement
- \`I **see what you mean, but**…\`
- \`**I'm not sure I'd** go that far.\`
- \`**You might want to** reconsider.\` (= reconsider it)
- \`**Correct me if I'm wrong, but**…\`

### Distancing through grammar
- Past tense: \`I **was wondering** if you could help.\` — more polite than \`I wonder\`.
- Continuous: \`I'**m hoping** you can join us.\`
- Passive: \`**It has been decided** that…\` — a decision with no one responsible.
- Modal past: \`That **would have been** unwise.\` — a gentle reproach.

> 💡 A C2 speaker hears the difference between \`It's not bad\` and \`It's not **bad**!\` — intonation flips the meaning.`,
    es: `## Hedging — el arte de no hablar directamente

C2 significa saber **suavizar**, **distanciarse** y leer la contención entre líneas.

### Hedging académico
| Directo | Cauteloso |
|---|---|
| \`This proves…\` | \`This **would seem to suggest**…\` |
| \`Everyone knows…\` | \`**It is widely believed that**…\` |
| \`I think…\` | \`**It could be argued that**…\` |
| \`The results show…\` | \`The results **appear to** show…\` |

Suavizadores: \`arguably\`, \`to some extent\`, \`in a sense\`, \`more or less\`, \`broadly speaking\`.

### El understatement británico
| Lo que se dice | Lo que significa |
|---|---|
| \`Not bad.\` | ¡Excelente! |
| \`I'm **not entirely** convinced.\` | No estoy nada de acuerdo. |
| \`It's **a bit** expensive.\` | Es carísimo. |
| \`**With respect**, …\` | Ahora voy a desmontar tu argumento. |
| \`**Interesting** idea…\` | La idea no es muy buena. |

### Crítica y desacuerdo corteses
- \`I **see what you mean, but**…\` — Entiendo, pero…
- \`**I'm not sure I'd** go that far.\` — Yo no iría tan lejos.
- \`**You might want to** reconsider.\` — Deberías reconsiderarlo.
- \`**Correct me if I'm wrong, but**…\`

### Distanciamiento gramatical
- Past tense: \`I **was wondering** if you could help.\` — más cortés que \`I wonder\`.
- Continuous: \`I'**m hoping** you can join us.\`
- Pasiva: \`**It has been decided** that…\` — decisión sin responsable.
- Modal past: \`That **would have been** unwise.\` — reproche suave.

> 💡 Un hablante C2 oye la diferencia entre \`It's not bad\` y \`It's not **bad**!\` — la entonación invierte la valoración.`,
  },
};

export function getStaticGrammarContent(
  slug: string,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  // Prefer the map that actually has this interface language.
  // Important: SPANISH/EN maps often have en+es only; DE lives in
  // GERMAN_GRAMMAR_CONTENT — do not short-circuit on a map that lacks `de`.
  const sources = [
    GRAMMAR_CONTENT[slug],
    ENGLISH_GAP_GRAMMAR_CONTENT[slug],
    SPANISH_GRAMMAR_CONTENT[slug],
    GERMAN_GRAMMAR_CONTENT[slug],
  ];
  for (const topic of sources) {
    const content = topic?.[interfaceLanguage];
    if (content && content.trim().length > 0) return content;
  }
  return null;
}
