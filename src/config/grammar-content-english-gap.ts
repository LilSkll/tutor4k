import type { InterfaceLanguage } from "@/types";

/**
 * EN / ES / DE bodies for English extra + IELTS/Cambridge topics
 * that are missing from the core grammar-content maps.
 */
export const ENGLISH_GAP_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "eng-a1-articles-basics": {
    en: `> **Path:** A1. First decide **a / an / the / nothing** before a noun.

## Articles — the base

### a / an (one, not specific)
Look at the **sound**, not the letter.
- \`a\` before a consonant sound: \`a book\`, \`a university\` (/j/)
- \`an\` before a vowel sound: \`an apple\`, \`an hour\` (/aʊ/)

\`I need **a** pen.\` · \`She is **an** engineer.\`

### the (this known thing)
Speaker and listener know which one: \`the sun\`, \`the book on the table\`, \`the teacher\` (in this class).

### Zero article
- General: \`I like music.\` · \`Life is short.\`
- Institutions as activities: \`She goes to school.\` / \`He's in hospital.\` (BrE)

> 💡 \`an hour\` but \`a house\` — sound, not spelling.`,
    es: `> **Recorrido:** A1. Primero elige **a / an / the / nada** delante del nombre.

## Articles — la base

### a / an (uno, no específico)
Mira el **sonido**, no la letra.
- \`a\` ante sonido consonántico: \`a book\`, \`a university\` (/j/)
- \`an\` ante sonido vocálico: \`an apple\`, \`an hour\` (/aʊ/)

\`I need **a** pen.\` · \`She is **an** engineer.\`

### the (esa cosa conocida)
Hablante y oyente saben de cuál: \`the sun\`, \`the book on the table\`.

### Sin artículo
- General: \`I like music.\` · \`Life is short.\`
- Institución como actividad: \`She goes to school.\`

> 💡 \`an hour\` pero \`a house\` — el sonido, no la ortografía.`,
    de: `> **Weg:** A1. Zuerst **a / an / the / nichts** vor dem Nomen.

## Articles — die Basis

### a / an (eins, nicht bestimmt)
Auf den **Laut** achten, nicht auf den Buchstaben.
- \`a\` vor Konsonantenlaut: \`a book\`, \`a university\` (/j/)
- \`an\` vor Vokallaut: \`an apple\`, \`an hour\` (/aʊ/)

\`I need **a** pen.\` · \`She is **an** engineer.\`

### the (diese bekannte Sache)
Sprecher und Hörer wissen, welche: \`the sun\`, \`the book on the table\`.

### Nullartikel
- Allgemein: \`I like music.\` · \`Life is short.\`
- Institution als Tätigkeit: \`She goes to school.\`

> 💡 \`an hour\`, aber \`a house\` — Laut, nicht Schreibung.`,
  },

  "eng-a1-possessives": {
    en: `> **Path:** A1. Whose thing is it?

## Possessives

### Determiner + noun
\`my, your, his, her, its, our, their\` + noun: \`her phone\`, \`our class\`.

No article after them: not \`*the my book\`.

### 's (Saxon genitive)
- One owner: \`Tom's car\`
- Plural already ending in -s: \`my parents' house\` (only ')
- Time / places: \`a day's work\`, \`the city's centre\`

### Trap
\`its\` (of it) ≠ \`it's\` (= it is / it has).
\`The cat licked **its** paw.\` · \`**It's** raining.\``,
    es: `> **Recorrido:** A1. ¿De quién es?

## Possessives

### Determinante + nombre
\`my, your, his, her, its, our, their\` + nombre: \`her phone\`, \`our class\`.

Sin artículo detrás: no \`*the my book\`.

### 's
- Un dueño: \`Tom's car\`
- Plural en -s: \`my parents' house\` (solo ')
- Tiempo / lugar: \`a day's work\`

### Trampa
\`its\` (de ello) ≠ \`it's\` (= it is).`,
    de: `> **Weg:** A1. Wessen Sache?

## Possessives

### Determinierer + Nomen
\`my, your, his, her, its, our, their\` + Nomen: \`her phone\`.

Kein Artikel danach: nicht \`*the my book\`.

### 's
- Ein Besitzer: \`Tom's car\`
- Plural auf -s: \`my parents' house\` (nur ')
- Zeit / Ort: \`a day's work\`

### Falle
\`its\` (davon) ≠ \`it's\` (= it is).`,
  },

  "eng-a1-can-ability": {
    en: `> **Path:** A1. Same form \`can\` — three jobs: ability, permission, request.

## Can / can't

The form does **not** change: \`I can\`, \`she can\`, \`they can\`. After can — **bare infinitive**: \`can go\`, not \`*can to go\`.

| Use | Example |
|---|---|
| Ability | \`I can swim.\` · \`She can't drive.\` |
| Permission | \`Can I open the window?\` · \`You can't park here.\` |
| Request | \`Can you help me?\` |

Questions: \`Can you…?\` · Short answers: \`Yes, I can.\` / \`No, I can't.\`

> 💡 Politer later (B1): \`Could you…?\` Same idea, softer.`,
    es: `> **Recorrido:** A1. La misma forma \`can\` — tres usos: habilidad, permiso, petición.

## Can / can't

No cambia: \`I can\`, \`she can\`. Después — infinitivo **sin to**: \`can go\`.

| Uso | Ejemplo |
|---|---|
| Habilidad | \`I can swim.\` · \`She can't drive.\` |
| Permiso | \`Can I open the window?\` |
| Petición | \`Can you help me?\` |

> 💡 Más cortés luego: \`Could you…?\``,
    de: `> **Weg:** A1. Dieselbe Form \`can\` — drei Jobs: Können, Erlaubnis, Bitte.

## Can / can't

Unverändert: \`I can\`, \`she can\`. Danach **Infinitiv ohne to**: \`can go\`.

| Gebrauch | Beispiel |
|---|---|
| Fähigkeit | \`I can swim.\` · \`She can't drive.\` |
| Erlaubnis | \`Can I open the window?\` |
| Bitte | \`Can you help me?\` |

> 💡 Höflicher später: \`Could you…?\``,
  },

  "eng-a2-countable": {
    en: `> **Path:** A2. You already have a/an. Now: can you count it?

## Countable vs uncountable

| Countable | Uncountable |
|---|---|
| an apple / apples | water, rice, advice, information |
| many apples, a few ideas | much water, a little time |
| How many…? | How much…? |

\`some\` in + ; \`any\` more often in − / ?
\`There are **some** apples.\` · \`There isn't **any** milk.\`

Words usually **without -s**: \`information\`, \`advice\`, \`furniture\`, \`news\` (singular).
\`Can you give me **some advice**?\` not \`*advices\`.

> 💡 \`a lot of\` works with both: \`a lot of books\`, \`a lot of time\`.`,
    es: `> **Recorrido:** A2. Ya tienes a/an. Ahora: ¿se puede contar?

## Countable vs uncountable

| Contable | Incontable |
|---|---|
| an apple / apples | water, rice, advice |
| many / a few | much / a little |
| How many…? | How much…? |

\`some\` en + ; \`any\` en −/?  
\`information\`, \`advice\`, \`furniture\` — normalmente **sin** -s.

> 💡 \`a lot of\` vale para ambos.`,
    de: `> **Weg:** A2. a/an kennt ihr. Jetzt: kann man es zählen?

## Countable vs uncountable

| Zählbar | Unzählbar |
|---|---|
| an apple / apples | water, rice, advice |
| many / a few | much / a little |
| How many…? | How much…? |

\`some\` in + ; \`any\` oft in −/?  
\`information\`, \`advice\` — meist **ohne** -s.

> 💡 \`a lot of\` geht bei beiden.`,
  },

  "eng-a2-comparatives": {
    en: `> **Path:** A2. Compare two things, then the extreme.

## Comparatives / Superlatives

- Short: \`tall → taller → the tallest\` · \`She is taller **than** me.\`
- Long: \`interesting → more / the most interesting\`
- Irregular: \`good/better/best\`, \`bad/worse/worst\`, \`far/further/furthest\`

Equal: \`as tall as\` · \`This bag is **as** heavy **as** that one.\`

> 💡 Spelling: big → bigger; happy → happier.`,
    es: `> **Recorrido:** A2. Comparar dos cosas, luego el extremo.

## Comparatives / Superlatives

- Corto: \`tall → taller → the tallest\` · \`than\`
- Largo: \`more / the most interesting\`
- Irregular: \`good/better/best\`, \`bad/worse/worst\`

Igualdad: \`as tall as\`.`,
    de: `> **Weg:** A2. Zwei Dinge vergleichen, dann das Extrem.

## Comparatives / Superlatives

- Kurz: \`tall → taller → the tallest\` · \`than\`
- Lang: \`more / the most interesting\`
- Unregelmäßig: \`good/better/best\`

Gleichheit: \`as tall as\`.`,
  },

  "eng-a2-present-perfect-intro": {
    en: `> **Path:** A2. Past Simple = finished time (\`yesterday\`). Here: a past event **with a now**.

## Present Perfect (intro)

\`have/has + V3\`

- Experience: \`I have visited Madrid.\` · \`Have you ever…?\`
- \`just\` / \`already\` · \`yet\` in −/?
- \`ever\` / \`never\`

\`She has **just** arrived.\` · \`I haven't finished **yet**.\`

Do **not** mix with a finished time: \`I went yesterday\` (not \`*I have gone yesterday\`).

> 💡 If you name **when** (yesterday, in 2019) → Past Simple.`,
    es: `> **Recorrido:** A2. Past Simple = tiempo cerrado (\`yesterday\`). Aquí: pasado **con ahora**.

## Present Perfect (intro)

\`have/has + V3\`

- Experiencia: \`I have visited Madrid.\`
- \`just / already\` · \`yet\` en −/?
- \`ever / never\`

Si dices **cuándo** (yesterday) → Past Simple.`,
    de: `> **Weg:** A2. Past Simple = abgeschlossene Zeit. Hier: Vergangenheit **mit Jetzt**.

## Present Perfect (intro)

\`have/has + V3\`

- Erfahrung: \`I have visited Madrid.\`
- \`just / already\` · \`yet\` in −/?
- \`ever / never\`

Wenn **wann** steht (yesterday) → Past Simple.`,
  },

  "eng-b1-conditionals-review": {
    en: `> **Path:** B1. Zero and 1st are real. 2nd is imaginary **now**. 3rd (B2) is imaginary **past**.

## Conditionals 0–2

| Type | Form | Use | Example |
|---|---|---|---|
| Zero | If + Present, Present | laws, habits | \`If you heat ice, it melts.\` |
| 1st | If + Present, will | real future | \`If it rains, I will stay home.\` |
| 2nd | If + Past, would | unreal now | \`If I had time, I would travel.\` |

\`If I **were** you…\` is fixed (not \`*If I was you\` in careful English).

> 💡 **will** stays in the main clause, not after \`if\`: not \`*If it will rain\`.`,
    es: `> **Recorrido:** B1. 0 y 1.º son reales. 2.º es imaginario **ahora**. El 3.º (B2) es el pasado irreal.

## Conditionals 0–2

| Tipo | Forma | Uso |
|---|---|---|
| Zero | If + Present, Present | leyes, hábitos |
| 1st | If + Present, will | futuro real |
| 2nd | If + Past, would | hipótesis ahora |

\`If I **were** you…\` es fijo.

> 💡 **will** no va tras \`if\`.`,
    de: `> **Weg:** B1. 0 und 1. sind real. 2. ist irreal **jetzt**. 3. (B2) ist irreal **vergangen**.

## Conditionals 0–2

| Typ | Form | Gebrauch |
|---|---|---|
| Zero | If + Present, Present | Gesetze, Gewohnheiten |
| 1st | If + Present, will | reale Zukunft |
| 2nd | If + Past, would | irreal jetzt |

\`If I **were** you…\` ist fest.

> 💡 **will** nicht nach \`if\`.`,
  },

  "eng-b1-reported-speech": {
    en: `> **Path:** B1. Someone else's words. Backshift after a **past** reporting verb.

## Reported speech (base)

- \`She said (that) she **was** tired.\` (am → was)
- \`He told **me** to wait.\` (\`tell\` needs a person)
- Questions: \`She asked where I lived.\` (no do/does)

No backshift if it is still true: \`She said the Earth **is** round.\`

> 💡 \`say\` + (that). \`tell\` + person + (that) / infinitive.`,
    es: `> **Recorrido:** B1. Palabras de otro. Retroceso de tiempos tras verbo **pasado**.

## Reported speech (base)

- \`She said she **was** tired.\`
- \`He told me to wait.\`
- Preguntas: \`She asked where I lived.\`

Sin retroceso si sigue siendo verdad: \`the Earth **is** round\`.`,
    de: `> **Weg:** B1. Fremde Worte. Zeitverschiebung nach **past** reporting verb.

## Reported speech (base)

- \`She said she **was** tired.\`
- \`He told me to wait.\`
- Fragen: \`She asked where I lived.\`

Keine Verschiebung, wenn es noch gilt: \`the Earth **is** round\`.`,
  },

  "eng-b1-relative-clauses": {
    en: `> **Path:** B1. Stick two facts about the same thing. Defining clauses (no commas) are A2–B1; extra info with commas is B2.

## Relative clauses

- People: \`who / that\` — \`The teacher **who** helped me…\`
- Things: \`which / that\` — \`The book **that** I read…\`
- Possessive: \`whose\` — \`the girl **whose** brother…\`

You can drop the object pronoun: \`The film (that) I saw was great.\`

> 💡 No comma in defining clauses. With commas you cannot use \`that\`.`,
    es: `> **Recorrido:** B1. Unir dos hechos. Defining (sin comas) = B1; extra con comas = B2.

## Relative clauses

- Personas: \`who / that\`
- Cosas: \`which / that\`
- Posesión: \`whose\`

Se puede omitir el pronombre objeto: \`The film (that) I saw…\`

> 💡 Sin comas en defining. Con comas no se usa \`that\`.`,
    de: `> **Weg:** B1. Zwei Fakten verbinden. Defining (ohne Kommas) = B1; Extra mit Kommas = B2.

## Relative clauses

- Personen: \`who / that\`
- Dinge: \`which / that\`
- Besitz: \`whose\`

Objektpronomen kann weg: \`The film (that) I saw…\`

> 💡 Kein Komma in defining. Mit Kommas kein \`that\`.`,
  },

  "eng-b2-passive-advanced": {
    en: `> **Path:** B2. You know Present/Past passive. Here: more tenses + services you didn't do yourself.

## Passive (advanced)

Formula: **be + V3**

| Tense | Example |
|---|---|
| Present | \`English **is spoken** here.\` |
| Past | \`The report **was written** yesterday.\` |
| Perfect | \`A new law **has been passed**.\` |
| Continuous | \`The road **is being repaired**.\` |
| Modal | \`It **must be done** today.\` |

### have / get something done
\`I **had** my hair **cut**.\` — a service, not DIY.
\`She **got** the car **fixed**.\`

> 💡 Name the doer with \`by\` only if it matters: \`written **by** Orwell\`.`,
    es: `> **Recorrido:** B2. Ya está el pasivo simple. Aquí: más tiempos + servicios.

## Passive (advanced)

**be + V3**

\`The report **was written** yesterday.\`  
\`A new law **has been passed**.\`  
\`The road **is being repaired**.\`

### have something done
\`I **had** my hair **cut**.\` — un servicio, no lo hice yo.`,
    de: `> **Weg:** B2. Einfaches Passiv kennt ihr. Hier: mehr Zeiten + Dienstleistungen.

## Passive (advanced)

**be + V3**

\`The report **was written** yesterday.\`  
\`A new law **has been passed**.\`  
\`The road **is being repaired**.\`

### have something done
\`I **had** my hair **cut**.\` — Dienstleistung, nicht selbst.`,
  },

  "eng-b2-modals-deduction": {
    en: `> **Path:** B2. Not obligation (\`must\` = have to). Here: **how sure** you are.

## Modals of deduction

| Modal | Meaning | Now | Past |
|---|---|---|---|
| must | almost sure yes | \`He **must be** tired.\` | \`He **must have left**.\` |
| might / may / could | possible | \`She **might be** at home.\` | \`She **might have forgotten**.\` |
| can't | almost sure no | \`That **can't be** true.\` | \`He **can't have seen** us.\` |

> 💡 \`must\` here ≠ obligation. Obligation: \`You must wear a seatbelt.\` Deduction: \`The lights are on — she must be in.\``,
    es: `> **Recorrido:** B2. No es obligación. Aquí: **qué tan seguro** estás.

## Modals of deduction

| Modal | Significado | Ahora | Pasado |
|---|---|---|---|
| must | casi seguro que sí | \`He **must be** tired.\` | \`must have left\` |
| might / may / could | posible | \`might be at home\` | \`might have forgotten\` |
| can't | casi seguro que no | \`can't be true\` | \`can't have seen\` |

> 💡 Deducción ≠ obligación.`,
    de: `> **Weg:** B2. Nicht Pflicht. Hier: **wie sicher** bist du.

## Modals of deduction

| Modal | Bedeutung | Jetzt | Vergangenheit |
|---|---|---|---|
| must | fast sicher ja | \`He **must be** tired.\` | \`must have left\` |
| might / may / could | möglich | \`might be at home\` | \`might have forgotten\` |
| can't | fast sicher nein | \`can't be true\` | \`can't have seen\` |

> 💡 Deduktion ≠ Pflicht.`,
  },

  "eng-c1-inversion": {
    en: `> **Path:** C1. Same grammar as emphasis: negative adverbial → auxiliary before the subject.

## Inversion for emphasis

- \`Never **have I** seen such chaos.\`
- \`Not only **did she** win, but she also…\`
- \`Rarely **do we** get snow here.\`
- \`Hardly **had I** arrived when it started raining.\`

After a negative / restrictive phrase at the front: **aux + subject + verb**.

> 💡 In IELTS/Cambridge a little inversion raises range — not in every paragraph.`,
    es: `> **Recorrido:** C1. Adverbio negativo al frente → auxiliar antes del sujeto.

## Inversion

- \`Never **have I** seen such chaos.\`
- \`Not only **did she** win, but she also…\`
- \`Rarely **do we** get snow here.\`

> 💡 Una dosis en el examen sube el rango; no en cada párrafo.`,
    de: `> **Weg:** C1. Negatives Adverb vorn → Hilfsverb vor dem Subjekt.

## Inversion

- \`Never **have I** seen such chaos.\`
- \`Not only **did she** win, but she also…\`
- \`Rarely **do we** get snow here.\`

> 💡 Eine Dosis in der Prüfung hebt die Range — nicht in jedem Absatz.`,
  },

  "eng-ielts-letter-informal": {
    en: `> **Path:** B1 writing. Friend / relative. Three bullets must all be covered.

## IELTS GT — Informal letter (Task 1)

You write to a **friend / relative**. The prompt has a situation + **three bullet points**. Missing one bullet hits **Task Achievement**.

### Criteria
| Criterion | What they check |
|---|---|
| Task Achievement | All 3 bullets; purpose clear; ≈ **150 words** |
| Coherence | Logical paragraphs |
| Lexical | Conversational but precise; phrasal verbs OK |
| Grammar | Mixed tenses; contractions (**I'm**, **can't**) OK |

### Skeleton
1. Greeting — \`Hi Sam,\` / \`Dear Alex,\`
2. Opening — \`Thanks for your email — great to hear from you!\`
3. Body — **one block per bullet**
4. Close — \`Hope to see you soon!\` → \`Love,\` / \`Take care,\` + **first name only**

### Register
OK: \`Hi\`, contractions, \`Guess what?\`  
Too formal: \`Dear Sir or Madam\`, \`I am writing to inform you that…\`, \`Yours faithfully\`

> 💡 Tick the three bullets before you submit.`,
    es: `> **Recorrido:** B1 escritura. Amigo / familiar. Los tres bullets son obligatorios.

## IELTS GT — Informal letter (Task 1)

Escribes a un **amigo / pariente**. Tres bullet points: si falta uno, cae **Task Achievement**.

### Esqueleto
1. \`Hi Sam,\` / \`Dear Alex,\`
2. Apertura: \`Thanks for your email!\`
3. Cuerpo: **un bloque por bullet** (~150 palabras)
4. Cierre: \`Take care,\` / \`Love,\` + **solo el nombre**

### Registro
Bien: contractions, \`Guess what?\`  
Demasiado formal: \`Dear Sir or Madam\`, \`Yours faithfully\`

> 💡 Tres ticks antes de entregar.`,
    de: `> **Weg:** B1 Schreiben. Freund / Familie. Alle drei Bullets müssen drin sein.

## IELTS GT — Informal letter (Task 1)

An **Freund / Verwandte**. Drei Bullet Points — fehlt einer, leidet **Task Achievement**.

### Gerüst
1. \`Hi Sam,\` / \`Dear Alex,\`
2. Öffnung: \`Thanks for your email!\`
3. Body: **ein Block pro Bullet** (~150 Wörter)
4. Schluss: \`Take care,\` / \`Love,\` + **nur Vorname**

### Register
OK: Kontraktionen, \`Guess what?\`  
Zu formell: \`Dear Sir or Madam\`, \`Yours faithfully\`

> 💡 Drei Häkchen vor dem Abgeben.`,
  },

  "eng-ielts-letter-formal": {
    en: `> **Path:** B2 writing. Unknown person / organisation. Formal from greeting to sign-off.

## IELTS GT — Formal letter (Task 1)

You write to a **stranger** or an organisation: complaint, enquiry, application. Three bullets are required. ≈ **150 words**.

### Skeleton (5 blocks)
1. Salutation — \`Dear Mr Smith,\` **or** \`Dear Sir or Madam,\`
2. Purpose in the first lines
3. Details (bullets)
4. What you want them to do
5. Close + **full name**

### Sign-off rule
| Greeting | Close |
|---|---|
| \`Dear Sir or Madam,\` | **\`Yours faithfully,\`** |
| \`Dear Mr/Ms + surname,\` | **\`Yours sincerely,\`** |

### Phrases
- Enquiry: \`I am writing to enquire about…\`
- Complaint: \`I am writing to complain about…\` · \`I would like a full refund.\`
- Close: \`I look forward to hearing from you.\`

Forbidden: \`Hi\`, \`Love,\`, slang, \`!!!\`

> 💡 First decide: *Do I know their name?* — that fixes **both** greeting and sign-off.`,
    es: `> **Recorrido:** B2 escritura. Desconocido / organización. Formal de punta a punta.

## IELTS GT — Formal letter (Task 1)

Queja, consulta, solicitud. Tres bullets. ≈ **150 palabras**.

### Sign-off
| Saludo | Cierre |
|---|---|
| \`Dear Sir or Madam,\` | **\`Yours faithfully,\`** |
| \`Dear Mr/Ms + apellido,\` | **\`Yours sincerely,\`** |

Fórmulas: \`I am writing to enquire / complain / apply for…\`  
Cierre: \`I look forward to hearing from you.\`

Prohibido: \`Hi\`, \`Love,\`, slang.

> 💡 ¿Conozco el nombre? Eso decide saludo **y** despedida.`,
    de: `> **Weg:** B2 Schreiben. Unbekannt / Organisation. Durchgehend formell.

## IELTS GT — Formal letter (Task 1)

Beschwerde, Anfrage, Bewerbung. Drei Bullets. ≈ **150 Wörter**.

### Sign-off
| Anrede | Schluss |
|---|---|
| \`Dear Sir or Madam,\` | **\`Yours faithfully,\`** |
| \`Dear Mr/Ms + Name,\` | **\`Yours sincerely,\`** |

Formeln: \`I am writing to enquire / complain / apply for…\`

Verboten: \`Hi\`, \`Love,\`, Slang.

> 💡 Kenne ich den Namen? Das legt Anrede **und** Schluss fest.`,
  },

  "eng-ielts-essay-structure": {
    en: `> **Path:** B2. Task 2 is scored on **answering the exact question type**, not on pretty English alone.

## IELTS Academic Writing Task 2

Minimum **250 words**. About 40 minutes.

### Question types (different jobs)
| Type | You must |
|---|---|
| Opinion | Clear position in intro **and** conclusion |
| Discussion | Both views **and** your opinion |
| Advantages / disadvantages | Both sides; add a choice if asked |
| Problem / solution | Problems **and** solutions |
| Two-part | Answer **both** questions |

### Four paragraphs (~270 words)
1. Introduction — paraphrase + thesis
2. Body 1 — claim → explain → example
3. Body 2 — second claim / other side
4. Conclusion — restated position; **no new ideas**

> 💡 On the plan, label the type in one word: *opinion / both / A-D / P-S / 2Q*.`,
    es: `> **Recorrido:** B2. Task 2 se puntúa por **responder al tipo exacto**, no solo por el estilo.

## IELTS Academic Task 2

Mínimo **250 palabras**. ~40 min.

### Tipos
Opinion → posición clara. Discussion → ambas vistas **y** tu opinión. Problem/solution → los dos. Two-part → **ambas** preguntas.

### 4 párrafos
Intro (paráfrasis + tesis) → Body 1 → Body 2 → Conclusion **sin ideas nuevas**.

> 💡 Etiqueta el tipo en una palabra antes de escribir.`,
    de: `> **Weg:** B2. Task 2 bewertet die **genaue Fragetyp-Antwort**, nicht nur schönen Stil.

## IELTS Academic Task 2

Mindestens **250 Wörter**. ~40 Min.

### Typen
Opinion → klare Position. Discussion → beide Sichten **und** deine Meinung. Problem/solution → beides. Two-part → **beide** Fragen.

### 4 Absätze
Intro (Paraphrase + These) → Body 1 → Body 2 → Schluss **ohne neue Ideen**.

> 💡 Typ in einem Wort auf den Plan schreiben.`,
  },

  "eng-ielts-essay-cohesion": {
    en: `> **Path:** B2. Coherence is not how many times you write \`However\`.

## Coherence & Cohesion

| Band | Sign |
|---|---|
| 6 | Paragraphs exist; basic linkers; some jumps |
| 7 | Clear progress; linkers fit; referencing works |
| 8+ | Logic feels invisible: few stamps, strong meaning links |

### Linkers by job (rotate, don't stack)
Addition: \`Furthermore\`, \`In addition\`  
Contrast: \`However\`, \`Whereas\`  
Cause: \`Because\`, \`Since\`, \`Due to + noun\`  
Result: \`Therefore\`, \`As a result\`  
Example: \`For instance\`

### Paragraph formula
Topic sentence → reason → example → mini-result.

### Referencing
\`This approach…\` / \`These measures…\` instead of repeating \`people\` five times.

> 💡 Two precise linkers + strong topic sentences beat a Christmas tree of \`Moreover\`.`,
    es: `> **Recorrido:** B2. La cohesión no es cuántas veces escribes \`However\`.

## Coherence & Cohesion

Linkers por función (alternar, no apilar): \`Furthermore\`, \`However\`, \`Because\`, \`Therefore\`, \`For instance\`.

Párrafo: idea → razón → ejemplo → mini-resultado.

Referencing: \`This approach…\` en vez de repetir \`people\`.

> 💡 Dos linkers precisos ganan a una guirnalda de \`Moreover\`.`,
    de: `> **Weg:** B2. Kohäsion ist nicht, wie oft \`However\` steht.

## Coherence & Cohesion

Linker nach Funktion (rotieren, nicht stapeln): \`Furthermore\`, \`However\`, \`Because\`, \`Therefore\`, \`For instance\`.

Absatz: Idee → Grund → Beispiel → Mini-Folge.

Referencing: \`This approach…\` statt fünfmal \`people\`.

> 💡 Zwei präzise Linker schlagen eine Girlande aus \`Moreover\`.`,
  },

  "eng-ielts-task1-report": {
    en: `> **Path:** B2 Academic. Describe data. No opinion. No “why in real life”.

## IELTS Academic Task 1 — Report

≈ **150 words**, ~20 minutes. Line/bar/pie/table/map/process.

### Must-have skeleton
1. Paraphrase the task (1 sentence)
2. **Overview** — main trends / extremes, **no** tiny numbers
3. Details 1 — key figures + comparisons
4. Details 2 — the other group / contrast

No overview → typical Task Achievement ceiling below Band 7.

### Trend language
Rise: \`rose / increased / climbed\` · Fall: \`fell / declined\` · \`remained stable\` · \`peaked at\` · \`fluctuated\`

### Forbidden
Causes outside the chart · future guesses unless asked · listing every number · \`I think this is interesting\`

> 💡 Write the overview first; then pick only numbers that prove it.`,
    es: `> **Recorrido:** B2 Academic. Describir datos. Sin opinión.

## IELTS Academic Task 1

≈ **150 palabras**. Paráfrasis → **overview** (sin cifras chicas) → detalles con comparaciones.

Sin overview → techo típico bajo Band 7 en Task Achievement.

Lenguaje: \`rose / fell / remained stable / peaked at / fluctuated\`.

Prohibido: causas fuera del gráfico, opinión, listar todos los números.

> 💡 Primero el overview; luego solo las cifras que lo prueban.`,
    de: `> **Weg:** B2 Academic. Daten beschreiben. Keine Meinung.

## IELTS Academic Task 1

≈ **150 Wörter**. Paraphrase → **Overview** (ohne Mini-Zahlen) → Details mit Vergleichen.

Kein Overview → typische Decke unter Band 7 bei Task Achievement.

Sprache: \`rose / fell / remained stable / peaked at / fluctuated\`.

Verboten: Ursachen außerhalb der Grafik, Meinung, alle Zahlen auflisten.

> 💡 Zuerst Overview; dann nur Zahlen, die ihn belegen.`,
  },

  "eng-cambridge-letter-email": {
    en: `> **Path:** B2 First. Tone must match the reader — that is Communicative Achievement.

## Cambridge B2 First — Letter / Email

≈ **140–190 words**. First decide: friend → informal; organisation → formal; teacher → semi-formal.

### Informal
\`Hi + first name,\` · contractions OK · \`Take care,\` / \`Love,\` + first name  
Not: exam-essay \`Furthermore…\` to a friend.

### Formal
\`Dear Mr/Ms + surname,\` or \`Dear Sir or Madam,\`  
\`Yours sincerely,\` / \`Yours faithfully,\` + **full name**  
Purpose in sentence one.

### Semi-formal
\`Dear Mr Brown,\` · \`Best regards,\` + full name · no \`Love,\`

> 💡 Say aloud: *Who is reading this?* Friend-text vs manager-text.`,
    es: `> **Recorrido:** B2 First. El tono debe coincidir con el lector (Communicative Achievement).

## Cambridge B2 First — Letter / Email

≈ **140–190 palabras**. Primero: ¿amigo, organización o profesor?

Informal: \`Hi Anna,\` · contractions · \`Take care,\`  
Formal: \`Dear Sir or Madam,\` / \`Dear Mr Smith,\` · faithfully / sincerely + nombre completo  
Semi-formal: \`Dear Mr Brown,\` · \`Best regards,\`

> 💡 ¿Quién lee esto? El tono entero sigue de ahí.`,
    de: `> **Weg:** B2 First. Der Ton muss zum Leser passen (Communicative Achievement).

## Cambridge B2 First — Letter / Email

≈ **140–190 Wörter**. Zuerst: Freund, Organisation oder Lehrer?

Informell: \`Hi Anna,\` · Kontraktionen · \`Take care,\`  
Formell: \`Dear Sir or Madam,\` / \`Dear Mr Smith,\` · faithfully / sincerely + voller Name  
Semi-formell: \`Dear Mr Brown,\` · \`Best regards,\`

> 💡 Wer liest das? Der ganze Ton folgt daraus.`,
  },

  "eng-cambridge-essay-article": {
    en: `> **Path:** C1 (also used at B2 First). Essay ≠ article. Wrong genre hits Communicative Achievement.

## Essay vs Article

| | Essay | Article |
|---|---|---|
| Reader | teacher / examiner | magazine / school paper |
| Title | usually no | **yes** |
| Tone | neutral–formal | engaging |
| \`you\` | rare | often OK |
| Ending | position | tip / question / punch |

### Essay skeleton
Paraphrase + thesis → note 1 → note 2 (+ your idea if required) → conclusion, no new arguments.

### Article skeleton
Title → hook → 2–3 paragraphs on the notes → close with advice or a question.

Word counts: B2 First ≈ 140–190; C1 Advanced ≈ 220–260.

> 💡 Label the draft *ESSAY* or *ARTICLE* and check every sentence against it.`,
    es: `> **Recorrido:** C1 (también B2 First). Essay ≠ article. El género equivocado golpea Communicative Achievement.

## Essay vs Article

Essay: tono formal, tesis, sin título-eslogan.  
Article: **título**, gancho, \`Have you ever…?\`, cierre con consejo.

B2 ≈ 140–190 palabras; C1 ≈ 220–260.

> 💡 Etiqueta el borrador: *ESSAY* o *ARTICLE*.`,
    de: `> **Weg:** C1 (auch B2 First). Essay ≠ Article. Falsches Genre trifft Communicative Achievement.

## Essay vs Article

Essay: formal, These, meist kein Titel.  
Article: **Titel**, Hook, \`Have you ever…?\`, Schluss mit Tipp.

B2 ≈ 140–190 Wörter; C1 ≈ 220–260.

> 💡 Entwurf mit *ESSAY* oder *ARTICLE* beschriften.`,
  },

  "eng-ielts-opinion-language": {
    en: `> **Path:** C1. Band 7+ is control of **how strong** the claim is, plus a full argument chain.

## Opinion & argumentation

| Strength | Formula |
|---|---|
| Strong | \`I firmly believe that…\` · \`There is little doubt that…\` |
| Moderate | \`I would argue that…\` |
| Hedge | \`It could be argued that…\` · \`To some extent…\` |

Chain: **claim → explain → example → link back.**  
Without explain+example you stay around Band 6.

Concession + counter: \`While it is true that…, it does not follow that…\` · \`Admittedly… Nevertheless…\`

Swap: good → \`beneficial\`; bad → \`detrimental\`; a lot of people → \`a significant proportion of the public\`.

> 💡 One \`detrimental to…\` beats three \`very very bad\`.`,
    es: `> **Recorrido:** C1. Band 7+ = controlar **qué tan fuerte** es la afirmación + cadena completa.

## Opinion & argumentation

Fuerte: \`I firmly believe that…\`  
Moderada: \`I would argue that…\`  
Hedge: \`It could be argued that…\`

Cadena: tesis → explicación → ejemplo → vuelta al claim.  
Concesión: \`While it is true that…, it does not follow that…\`

> 💡 Un \`detrimental to…\` gana a tres \`very bad\`.`,
    de: `> **Weg:** C1. Band 7+ = die **Stärke** der Behauptung steuern + ganze Kette.

## Opinion & argumentation

Stark: \`I firmly believe that…\`  
Moderat: \`I would argue that…\`  
Hedge: \`It could be argued that…\`

Kette: Claim → Erklärung → Beispiel → Rückbindung.  
Konzession: \`While it is true that…, it does not follow that…\`

> 💡 Ein \`detrimental to…\` schlägt drei \`very bad\`.`,
  },

  "eng-cbe-register-shift": {
    en: `> **Path:** B2. Register is a rule, not taste. Wrong tone cuts Communicative Achievement / letter TA.

## Register shifting

| | Informal | Neutral | Formal |
|---|---|---|---|
| Who | friend | teacher / club | organisation |
| Greeting | \`Hi Tom,\` | \`Dear Mr Brown,\` | \`Dear Sir or Madam,\` |
| Request | \`Can you…?\` | \`Could you…?\` | \`I would appreciate it if you could…\` |
| Close | \`Love,\` / \`Take care,\` | \`Best regards,\` | \`Yours faithfully / sincerely,\` |
| Contractions | yes | some | better not |

Same idea: \`I want to know…\` → \`I would like to enquire about…\`

WhatsApp test: if it could go to a friend unchanged, rewrite for a formal letter.

> 💡 Read only the first and last lines. If they belong to different worlds, fix greeting or close.`,
    es: `> **Recorrido:** B2. El registro es una regla. El tono equivocado corta Communicative Achievement.

## Register

Informal: \`Hi Tom,\` · \`Can you…?\` · \`Take care,\`  
Neutral: \`Dear Mr Brown,\` · \`Could you…?\` · \`Best regards,\`  
Formal: \`Dear Sir or Madam,\` · \`I would appreciate it if…\` · \`Yours faithfully,\`

Test WhatsApp: si podría ir a un amigo tal cual, reescribe la carta formal.

> 💡 Lee solo la primera y la última línea. Si son mundos distintos, cámbialas.`,
    de: `> **Weg:** B2. Register ist eine Regel. Falscher Ton trifft Communicative Achievement.

## Register

Informell: \`Hi Tom,\` · \`Can you…?\` · \`Take care,\`  
Neutral: \`Dear Mr Brown,\` · \`Could you…?\` · \`Best regards,\`  
Formell: \`Dear Sir or Madam,\` · \`I would appreciate it if…\` · \`Yours faithfully,\`

WhatsApp-Test: könnte das so an einen Freund? Dann formellen Brief umschreiben.

> 💡 Nur erste und letzte Zeile lesen. Unterschiedliche Welten → Anrede oder Schluss ändern.`,
  },
};
