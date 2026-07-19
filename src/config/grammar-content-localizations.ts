import type { InterfaceLanguage } from "@/types";
import { SPANISH_GRAMMAR_CONTENT } from "@/config/grammar-content-spanish";
import { GERMAN_GRAMMAR_CONTENT } from "@/config/grammar-content-german";

export const GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "eng-a1-be": {
    en: `## The verb **be** — the foundation of English

In English, the verb "to be" has **three forms** in the present:

| Subject | Form | Example |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Contractions
\`I am → I'm\`, \`He is → He's\`, \`They are → They're\`

### Negative forms
\`I'm not\`, \`He isn't / He's not\`, \`They aren't / They're not\`

### Questions
\`Am I...? Is he...? Are they...?\`

> 💡 Remember: **I am, He/She/It is, You/We/They are** — this is the foundation of all English grammar.`,
    es: `## El verbo **be** — la base del inglés

En inglés, el verbo «ser/estar» tiene **tres formas** en presente:

| Sujeto | Forma | Ejemplo |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Contracciones (contractions)
\`I am → I'm\`, \`He is → He's\`, \`They are → They're\`

### Negación
\`I'm not\`, \`He isn't / He's not\`, \`They aren't / They're not\`

### Preguntas
\`Am I...? Is he...? Are they...?\`

> 💡 Recuerda: **I am, He/She/It is, You/We/They are** — es la base de toda la gramática inglesa.`,
  },

  "eng-a1-present-simple": {
    en: `## Present Simple — routines and facts

### Formation
- I/You/We/They + **verb**: \`I work\`, \`They live\`
- He/She/It + **verb + -s**: \`He works\`, \`She lives\`

### The -s ending (for he/she/it)
| Verb ending | + | Example |
|---|---|---|
| consonant | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| consonant + y | **-ies** | study → stud**ies** |

### Negative and questions — with **do/does**
- \`I don't work\`, \`He doesn't work\`
- \`Do you work?\`, \`Does he work?\`

### Time markers
\`always\`, \`usually\`, \`often\`, \`sometimes\`, \`never\`, \`every day\`

> 💡 **He/she/it** — always with **-s** or **-es**. This is the most common rule in English.`,
    es: `## Present Simple — rutinas y hechos

### Formación
- I/You/We/They + **verbo**: \`I work\`, \`They live\`
- He/She/It + **verbo + -s**: \`He works\`, \`She lives\`

### La terminación -s (para he/she/it)
| Terminación del verbo | + | Ejemplo |
|---|---|---|
| consonante | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| consonante + y | **-ies** | study → stud**ies** |

### Negación y preguntas — con **do/does**
- \`I don't work\`, \`He doesn't work\`
- \`Do you work?\`, \`Does he work?\`

### Marcadores temporales
\`always\`, \`usually\`, \`often\`, \`sometimes\`, \`never\`, \`every day\`

> 💡 **He/she/it** — siempre con **-s** o **-es**. Es la regla más frecuente en inglés.`,
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

\`can\` does not change by person: **I can, He can, They can**.

| Form | Example |
|---|---|
| + | I **can** swim |
| - | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Uses
1. **Ability:** \`I can speak English\`
2. **Request:** \`Can you help me?\`
3. **Permission:** \`You can go now\`

> 💡 After can — **always the infinitive without to**: \`can swim\` (not ~~can to swim~~).`,
    es: `## Can / Can't — poder, saber hacer

\`can\` no cambia según la persona: **I can, He can, They can**.

| Forma | Ejemplo |
|---|---|
| + | I **can** swim |
| - | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Usos
1. **Capacidad:** \`I can speak English\`
2. **Petición:** \`Can you help me?\`
3. **Permiso:** \`You can go now\`

> 💡 Después de can — **siempre infinitivo sin to**: \`can swim\` (no ~~can to swim~~).`,
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

  "eng-b1-future-conditional": {
    en: `## Future (will) & First Conditional

### will / won't
\`I will help you\`, \`He won't come\`
Contractions: \`I'll\`, \`won't\`

### First Conditional: **If + present, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

### should / must
- **should** = advice: \`You should rest\`
- **must** = obligation (necessary): \`You must wear a seatbelt\`
- **mustn't** = prohibited: \`You mustn't smoke here\`

> 💡 First Conditional — **a real condition**. Will ONLY in the main clause, not in if.`,
    es: `## Futuro (will) y Primer Condicional

### will / won't
\`I will help you\`, \`He won't come\`
Contracciones: \`I'll\`, \`won't\`

### Primer Condicional: **If + presente, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

### should / must
- **should** = consejo: \`You should rest\`
- **must** = obligación (necesario): \`You must wear a seatbelt\`
- **mustn't** = prohibido: \`You mustn't smoke here\`

> 💡 Primer Condicional — **condición real**. Will SOLO en la oración principal, no en if.`,
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
    SPANISH_GRAMMAR_CONTENT[slug],
    GERMAN_GRAMMAR_CONTENT[slug],
  ];
  for (const topic of sources) {
    const content = topic?.[interfaceLanguage];
    if (content && content.trim().length > 0) return content;
  }
  return null;
}
