import type { InterfaceLanguage } from "@/types";

export const GERMAN_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "eng-a1-be": {
    de: `## Das Verb **be** — die Grundlage des Englischen

Im Englischen hat das Verb „to be" im Präsens **drei Formen**:

| Subjekt | Form | Beispiel |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Kontraktionen
\`I am → I'm\`, \`He is → He's\`, \`They are → They're\`

### Verneinung
\`I'm not\`, \`He isn't / He's not\`, \`They aren't / They're not\`

### Fragen
\`Am I...? Is he...? Are they...?\`

> 💡 Merke dir: **I am, He/She/It is, You/We/They are** — das ist die Grundlage der gesamten englischen Grammatik.`,
  },

  "eng-a1-present-simple": {
    de: `## Present Simple — Routinen und Fakten

### Bildung
- I/You/We/They + **Verb**: \`I work\`, \`They live\`
- He/She/It + **Verb + -s**: \`He works\`, \`She lives\`

### Die Endung -s (für he/she/it)
| Verbendung | + | Beispiel |
|---|---|---|
| Konsonant | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| Konsonant + y | **-ies** | study → stud**ies** |

### Verneinung und Fragen — mit **do/does**
- \`I don't work\`, \`He doesn't work\`
- \`Do you work?\`, \`Does he work?\`

### Zeitangaben
\`always\`, \`usually\`, \`often\`, \`sometimes\`, \`never\`, \`every day\`

> 💡 **He/she/it** — immer mit **-s** oder **-es**. Das ist die häufigste Regel im Englischen.`,
  },

  "eng-a1-there-is-are": {
    de: `## There is / There are — „es gibt / es ist"

| Singular | Plural |
|---|---|
| **There is** a book | **There are** books |
| **There's** a table | — |

### Fragen
\`Is there...?\` / \`Are there...?\`
\`Is there a bank near here?\`

### Verneinung
\`There isn't\` / \`There aren't\`

### Mit some/any
- **Bejahung:** \`There are some books\`
- **Frage:** \`Are there any books?\`
- **Verneinung:** \`There aren't any books\`

> 💡 Bei unzählbaren Substantiven (water, money, time): \`There is some water\``,
  },

  "eng-a1-can": {
    de: `## Can / Can't — Fähigkeit und Möglichkeit

\`can\` ändert sich nicht nach der Person: **I can, He can, They can**.

| Form | Beispiel |
|---|---|
| + | I **can** swim |
| - | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Verwendung
1. **Fähigkeit:** \`I can speak English\`
2. **Bitte:** \`Can you help me?\`
3. **Erlaubnis:** \`You can go now\`

> 💡 Nach can — **immer der Infinitiv ohne to**: \`can swim\` (nicht ~~can to swim~~).`,
  },

  "eng-a2-past-simple": {
    de: `## Past Simple — abgeschlossene Handlungen in der Vergangenheit

### Regelmäßige Verben → +**-ed**
\`work → worked\`, \`play → played\`, \`study → studied\`

### Unregelmäßige Verben — du musst sie lernen!
\`go → went\`, \`see → saw\`, \`have → had\`, \`do → did\`, \`make → made\`

### Verneinung und Fragen → mit **did** (das Verb kehrt zum Infinitiv zurück!)
- \`I didn't work\` (NICHT ~~didn't worked~~)
- \`Did you go?\` (NICHT ~~Did you went?~~)

### Zeitangaben
\`yesterday\`, \`last week\`, \`two days ago\`, \`in 2020\`

### Das Verb be in der Vergangenheit
\`I/He/She/It **was**\`, \`You/We/They **were**\`

> 💡 **Wichtige Regel:** mit did — das Verb hat keine Endung. Did you **see**?`,
  },

  "eng-a2-comparatives": {
    de: `## Komparativ und Superlativ

### Regeln
| Länge | Komparativ | Superlativ |
|---|---|---|
| 1 Silbe | **-er** → bigger | **the -est** → the biggest |
| 2 Silben (-y) | **-ier** → happier | **the -iest** → the happiest |
| 2+ Silben | **more** → more beautiful | **the most** → the most beautiful |

### Unregelmäßige Formen
| Adjektiv | Komparativ | Superlativ |
|---|---|---|
| good | **better** | **the best** |
| bad | **worse** | **the worst** |
| far | **further** | **the furthest** |

### Konstruktionen
- \`A is **bigger than** B\` — A ist größer als B
- \`A is **the biggest**\` — A ist der/die/das Größte
- \`as ... as\` → \`as big as\` = so groß wie

> 💡 \`good → better → the best\` — das musst du auswendig lernen!`,
  },

  "eng-a2-present-perfect": {
    de: `## Present Perfect — Erfahrung und Ergebnisse

### Formel: **have/has** + **V3** (Past Participle)

| Person | Hilfsverb | Beispiel |
|---|---|---|
| I/You/We/They | **have** | I have visited London |
| He/She/It | **has** | She has finished |

### Bildung von V3
- Regelmäßig: +**-ed** → worked, played
- Unregelmäßig: \`go → gone\`, \`see → seen\`, \`eat → eaten\`

### Verwendung
1. **Lebenserfahrung:** \`I have been to Paris\`
2. **Aktuelles Ergebnis:** \`She has lost her keys\` (und hat sie noch nicht gefunden)
3. **In der Vergangenheit begonnen, dauert an:** \`I have lived here for 5 years\`

### Zeitangaben
\`ever\`, \`never\`, \`already\`, \`yet\`, \`just\`, \`for\`, \`since\`

> ⚠️ Mit einem konkreten Zeitpunkt in der Vergangenheit → Past Simple: \`I went yesterday\` (nicht ~~have gone yesterday~~).`,
  },

  "eng-b1-future-conditional": {
    de: `## Futur (will) und First Conditional

### will / won't
\`I will help you\`, \`He won't come\`
Kontraktionen: \`I'll\`, \`won't\`

### First Conditional: **If + Präsens, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

### should / must
- **should** = Ratschlag: \`You should rest\`
- **must** = Pflicht (notwendig): \`You must wear a seatbelt\`
- **mustn't** = verboten: \`You mustn't smoke here\`

> 💡 First Conditional — **eine reale Bedingung**. Will NUR im Hauptsatz, nicht im if-Satz.`,
  },

  "eng-b1-narrative": {
    de: `## Narrative Tenses — Zeiten zum Erzählen

### Past Continuous: **was/were + V-ing**
\`I was reading when she called.\`
Eine längere Handlung, die von einer anderen unterbrochen wird.

### used to: **used to + V**
\`I used to play tennis.\` — Früher habe ich Tennis gespielt (aber jetzt nicht mehr).
Nur Vergangenheit.

### Past Perfect: **had + V3**
\`When I arrived, the train had left.\`
Eine Handlung, die VOR einer anderen Handlung in der Vergangenheit stattfand.

### Vergleich
| Zeitform | Wann | Beispiel |
|---|---|---|
| Past Simple | Was geschah | I arrived |
| Past Continuous | Was gerade geschah | I was walking |
| Past Perfect | Was schon vorher geschehen war | It had started |

> 💡 Past Perfect = „Vergangenheit vor der Vergangenheit". Zuerst had + V3, dann Past Simple.`,
  },

  "eng-b1-perfect-continuous": {
    de: `## Present Perfect Continuous

### Formel: **have/has been** + **V-ing**

\`I have been studying for 3 hours.\`
\`She has been working since morning.\`

### for vs since
- **for** + Zeitraum: \`for 2 hours, for 5 years\`
- **since** + Zeitpunkt: \`since 2020, since Monday\`

### Wann verwenden
1. **Dauer:** \`How long have you been waiting?\`
2. **Kürzliche Handlung mit sichtbarem Ergebnis:** \`I'm tired — I've been running.\`

> 💡 Present Perfect Continuous betont **den Prozess und seine Dauer**.`,
  },

  "eng-b2-conditionals": {
    de: `## Second & Third Conditional

### 2. Conditional: irreales Präsens
**If + Past Simple, would + V**
\`If I had money, I would travel.\` (aber ich habe kein Geld)

### 3. Conditional: irreale Vergangenheit
**If + Past Perfect, would have + V3**
\`If I had studied, I would have passed.\` (aber ich habe nicht gelernt und nicht bestanden)

### wish / if only
- \`I wish I **knew** the answer.\` (Präsens)
- \`I wish I **had** studied more.\` (Vergangenheit)

> 💡 2. = imaginär **jetzt**, 3. = Bedauern über die **Vergangenheit**.`,
  },

  "eng-b2-passive": {
    de: `## Passiv (Passive Voice)

### Formel: **be + V3 (Past Participle)**

| Zeitform | Aktiv | Passiv |
|---|---|---|
| Present Simple | They build houses | Houses **are built** |
| Past Simple | They built it | It **was built** |
| Present Perfect | They have done it | It **has been done** |
| Future | They will do it | It **will be done** |

### Verwendung
- Wenn das **Ergebnis** wichtig ist, nicht der Handelnde
- \`The Mona Lisa was painted in 1503.\` (der Künstler ist offensichtlich)

### have something done
\`I had my car repaired.\` (= ein Mechaniker hat es repariert, nicht ich)

> 💡 Mit **by** kannst du den Handelnden nennen: \`It was written by Shakespeare\`.`,
  },

  "eng-b2-reported-clauses": {
    de: `## Indirekte Rede und Relativsätze

### Indirekte Rede — Zeitenverschiebung
\`He said: "I am tired" → He said he **was** tired.\`
Present → Past, will → would, can → could.

### Relativsätze
| Pronomen | Für | Beispiel |
|---|---|---|
| **who** | Personen | The man **who** lives here |
| **which** | Dinge | The book **which** I read |
| **that** | Personen/Dinge | The car **that** I bought |
| **whose** | Besitz | The girl **whose** father is a doctor |

### Defining vs Non-defining
- **Defining** (ohne Kommas): \`The man who called you is here\`
- **Non-defining** (mit Kommas): \`My father, who is 60, works hard\`

> 💡 Mit Kommas kann man **that** nicht verwenden: ~~My father, that...~~`,
  },

  "eng-c1-inversion": {
    de: `## Inversion und emphatische Strukturen (C1)

### Inversion mit negativen Adverbien
**Never / Rarely / Hardly + Hilfsverb + Subjekt + Verb**
\`Never **have I seen** such beauty.\` (statt: I have never seen)
\`Hardly **had I arrived** when it started raining.\`

### Spaltungssätze (Cleft Sentences)
\`It was **John** who broke the window.\` (Betonung auf John)
\`What I need is a vacation.\` (Betonung auf need)

### Emphatisches do/does/did
\`I **do** believe you!\` (Betonung)
\`She **does** work hard.\`

> 💡 Inversion = formeller, ausdrucksstarker Stil. Wird in Literatur und Rhetorik verwendet.`,
  },

  "eng-c1-discourse": {
    de: `## Diskursmittel (C1)

### Substitution
Wiederholungen ersetzen: \`one/ones\`, \`do/did\`, \`so\`
\`I'll have the red one.\`, \`I think so.\`

### Ellipse
Weglassen von Wörtern, die verstanden werden:
\`(Are you) Ready?\`, \`(I) Couldn't agree more.\`

### Fronting
Ein Element nach vorne stellen zur Betonung:
\`Such was his anger that...\` (statt: His anger was such that...)

### Intensivierende Adverbien
\`absolutely exhausted\`, \`utterly ridiculous\`, \`deeply concerned\`

> 💡 Diese Mittel machen die Sprache **natürlich und fortgeschritten** — sie unterscheiden C1 von B2.`,
  },

  "eng-c1-mixed-conditionals": {
    de: `## Gemischte Conditionals und fortgeschrittenes Passiv (C1)

### Gemischte Conditionals
Kombination von Zeiten in Bedingung und Ergebnis:

| Typ | Struktur | Beispiel |
|---|---|---|
| Vergangenheit → Präsens | If + had V3, would + V | If I had studied medicine, I would be a doctor now |
| Präsens → Vergangenheit | If + Past Simple, would have V3 | If I were taller, I would have joined basketball |

### Fortgeschrittenes Passiv
- **It is said that...** → \`It is believed that he left the country\`
- **He is said to...** → \`He is said to be a genius\`
- **Need + V-ing** → \`This car needs cleaning\` (= needs to be cleaned)

### wish + would
\`I wish you wouldn't do that.\` (Ärger über eine Gewohnheit eines anderen)

> 💡 Gemischte Conditionals verbinden eine **Ursache aus der Vergangenheit** mit einem **Ergebnis in der Gegenwart**.`,
  },

  "eng-c1-review": {
    de: `## Umfassende Wiederholung und IELTS-Vorbereitung

### Wichtige Themen zur Wiederholung:
1. **Alle Arten von Conditionals** (0, 1, 2, 3, gemischt)
2. **Alle Passivkonstruktionen**
3. **Modalverben** (Vergangenheit: must have, should have, could have)
4. **Indirekte Rede** (alle Zeitenverschiebungen)
5. **Inversion und emphatische Strukturen**

### IELTS Speaking Tipps
- Verwende **komplexe Strukturen** (Conditionals, Passiv, Relativsätze)
- **Diskursmarker**: however, nevertheless, on the other hand
- **Idiomatische Sprache**: a piece of cake, over the moon, break the ice

### IELTS Writing Tipps
- **Abwechslungsreiche Satzstruktur** (nicht nur Subjekt-Verb-Objekt)
- **Formeller Register** (Kontraktionen in akademischen Texten vermeiden)
- **Kohäsionsmittel**: furthermore, consequently, in contrast

> 🏆 C1-Niveau = nicht nur korrekt, sondern **angemessen und ausdrucksstark**.`,
  },

  "a1-articulos": {
    de: `## Bestimmte Artikel (Artículos definidos)

| Genus / Zahl | Artikel | Beispiel |
|---|---|---|
| m. Singular | **el** | el libro |
| f. Singular | **la** | la casa |
| m./f. + a/ha | **el** | el agua |
| Plural | **los / las** | los libros, las casas |

## Unbestimmte Artikel (Artículos indefinidos)

| Zahl | Maskulin | Feminin |
|---|---|---|
| Singular | **un** | **una** |
| Plural | **unos** | **unas** |

### Wichtige Regeln
- **El** wird für etwas Bestimmtes und Bekanntes verwendet: \`el sol\`.
- **Un/una** für etwas Unbestimmtes: \`un libro interesante\`.
- Vor femininen Substantiven mit betontem **a-/ha-** am Anfang steht **el**: \`el agua\`, \`el águila\` (aber im Plural: \`las aguas\`).

> 💡 Merke: Das Genus im Spanischen ist nicht immer logisch — \`el problema\` (m.), \`la mano\` (f.).`,
  },

  "a1-ser-estar": {
    de: `## Ser vs Estar — beide bedeuten „sein"

### SER — dauerhafte Eigenschaften
Verwendet für **Identität, Beruf, Herkunft, Beschreibung**:
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

### ESTAR — vorübergehende Zustände und Ort
Verwendet für **Zustand, Gefühle, Ort**:
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

### Eselsbrücke DOCTOR / PLACE
- **SER**: **D**escription, **O**ccupation, **C**haracteristic, **T**ime, **O**rigin, **R**elationship.
- **ESTAR**: **P**osition, **L**ocation, **A**ction (Gerundio), **C**ondition, **E**motion.

> ⚠️ Adjektive ändern die Bedeutung: \`es aburrido\` (eine langweilige Person) vs \`está aburrido\` (er/sie ist gelangweilt).`,
  },

  "a1-presente": {
    de: `## Presente de Indicativo

### Regelmäßige Verben (3 Konjugationen)

| Person | -AR (hablar) | -ER (comer) | -IR (vivir) |
|---|---|---|---|
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos | hablan | comen | viven |

### Unregelmäßige Verben (am häufigsten)
- **ser**: soy, eres, es, somos, sois, son
- **estar**: estoy, estás, está, estamos, estáis, están
- **ir**: voy, vas, va, vamos, vais, van
- **tener**: tengo, tienes, tiene, tenemos, tenéis, tienen
- **hacer**: hago, haces, hace, hacemos, hacéis, hacen

### Verwendung
- Handlung in der Gegenwart: \`Trabajo en Madrid.\`
- Allgemeine Fakten: \`El agua hierve a 100°C.\`
- Nahe Zukunft: \`Mañana voy al cine.\`

> 💡 Verben mit Vokalwechsel: \`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`.`,
  },

  "a1-genero-numero": {
    de: `## Genus (Género)

| Endung | Genus | Beispiel |
|---|---|---|
| -o | m. | el libro, el perro |
| -a | f. | la casa, la gata |
| -ción/-sión | f. | la canción, la televisión |
| -dad/-tad | f. | la ciudad, la libertad |
| Konsonant | variiert | el lápiz / la pared |

**Ausnahmen:** \`el problema\`, \`el mapa\`, \`el día\` (m. trotz -a);
\`la mano\`, \`la foto\` (f. trotz -o).

## Zahl (Número)

- **-s** hinzufügen (nach Vokal): \`libro → libros\`, \`mesa → mesas\`
- **-es** hinzufügen (nach Konsonant): \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c vor -es)
- \`el prógrama → los programas\` (ohne Akzent)

> ⚠️ Kongruenz: Artikel + Adjektiv + Substantiv müssen in Genus und Zahl übereinstimmen: \`la casa blanca\`, \`los coches rojos\`.`,
  },

  "a1-numeros-1-100": {
    de: `## Kardinalzahlen (Números cardinales)

| Bereich | Beispiel |
|---|---|
| 1–10 | uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez |
| 11–15 | once, doce, trece, catorce, quince |
| 16–19 | dieciséis, diecisiete, dieciocho, diecinueve |
| 20–29 | veinte, veintiuno, veintidós, … veintinueve |
| 30,40,50… | treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa |
| Zehner + Einer | treinta y uno, cuarenta y cinco |

**Besonderheiten:**
- \`uno → un\` vor einem Substantiv: \`un libro\` (nicht \`uno libro\`)
- \`veintiún\` vor m.: \`veintiún años\`
- \`cien\` (100) vs \`ciento\` (vor einer Zahl): \`ciento uno\`

> 💡 Alter: \`Tengo veinte años.\` Preise: \`Cuesta cinco euros.\``,
  },

  "a1-preposiciones-lugar": {
    de: `## Wichtigste Ortspräpositionen

| Präposition | Bedeutung | Beispiel |
|---|---|---|
| **en** | in/auf | El libro está **en** la mesa |
| **a** | nach/zu (Bewegung) | Voy **a** Madrid |
| **de** | von/aus | Soy **de** Rusia |
| **sobre** | auf/über | La lámpara está **sobre** la mesa |
| **debajo de** | unter | El gato está **debajo de** la silla |
| **delante de** | vor | El coche está **delante de** la casa |
| **detrás de** | hinter | El jardín está **detrás de** la casa |
| **entre** | zwischen | Entre tú y yo |
| **cerca de** | nahe | La tienda está **cerca de** aquí |
| **lejos de** | weit von | Vive **lejos de** la ciudad |

### Wichtige Regel
**Estar + Ort** für die Position: \`Estoy en casa.\`
**Ir + a + Ort** für die Richtung: \`Voy al cine.\` (\`a + el = al\`)

> ⚠️ \`a + el = al\`, \`de + el = del\` — obligatorische Kontraktion.`,
  },

  "a1-gustar": {
    de: `## Gustar — „mögen" (wörtlich: „gefallen")

Im Spanischen funktioniert \`gustar\` **umgekehrt**: das Subjekt ist das, was gefällt, nicht die Person.

### Konjugation

| Mir gefällt… | Form |
|---|---|
| Singular | **Me gusta** el café |
| Plural | **Me gustan** los libros |

| Person | Singular | Plural |
|---|---|---|
| mir | me gusta | me gustan |
| dir | te gusta | te gustan |
| ihm/ihr | le gusta | le gustan |
| uns | nos gusta | nos gustan |
| euch | os gusta | os gustan |
| ihnen | les gusta | les gustan |

### Betonung
\`Me gusta** mucho** el café.\`
\`No me gusta **nada** el té.\`

### Klarstellung (a + Name)
\`A **María** le gusta el flamenco.\`
\`A **mí** me gusta el café.\`

> 💡 Ähnliche Verben: \`encantar\` (lieben), \`interesar\` (interessieren), \`doler\` (weh tun) — funktionieren gleich.`,
  },

  "a1-tener-expressions": {
    de: `## Wendungen mit TENER

Im Spanischen werden viele Zustände mit **tener + Substantiv** ausgedrückt, nicht mit ser/estar.

| Spanisch | Bedeutung | NICHT sagen |
|---|---|---|
| tener **hambre** | Hunger haben | ~~estar hambriento~~ |
| tener **sed** | Durst haben | ~~estar sediento~~ |
| tener **frío** | frieren | ~~estar frío~~ (bedeutet „kalt sein" als Temperatur) |
| tener **calor** | Hitze haben | ~~estar caliente~~ |
| tener **sueño** | müde sein | ~~estar soñoliento~~ |
| tener **miedo** | Angst haben | ~~estar miedoso~~ |
| tener **suerte** | Glück haben | — |
| tener **razón** | Recht haben | — |
| tener **prisa** | es eilig haben | — |
| tener **ganas de** + Inf | Lust haben auf | — |
| tener **necesidad de** | brauchen | — |
| tener **X años** | X Jahre alt sein | — |

### Beispiele
\`Tengo hambre. Vamos a comer.\`
\`¿Tienes frío? — Sí, tengo mucho frío.\`
\`No tienes razón.\`
\`Tengo ganas de viajar.\`
\`Tengo veinte años.\`

> ⚠️ Kongruenz: \`Tiene**mos** hambre\`, \`Tiene**n** sueño\`.`,
  },

  "a1-preguntas": {
    de: `## Fragewörter (Palabras interrogativas)

| Wort | Bedeutung | Beispiel |
|---|---|---|
| ¿**Qué**? | Was? Welches? | ¿Qué haces? ¿Qué es esto? |
| ¿**Cómo**? | Wie? | ¿Cómo estás? ¿Cómo te llamas? |
| ¿**Dónde**? | Wo? Wohin? | ¿Dónde vives? ¿Dónde vas? |
| ¿**Cuándo**? | Wann? | ¿Cuándo llegas? |
| ¿**Quién**? / ¿**Quiénes**? | Wer? | ¿Quién es ella? ¿Quiénes son? |
| ¿**Cuál**? / ¿**Cuáles**? | Welches? | ¿Cuál prefieres? |
| ¿**Por qué**? | Warum? | ¿Por qué estudias español? |
| ¿**Para qué**? | Wozu? | ¿Para qué lo necesitas? |
| ¿**Cuánto**? / ¿**Cuántos**? | Wie viel/viele? | ¿Cuánto cuesta? ¿Cuántos años tienes? |
| ¿**Cuál es**? | Wie heißt…? | ¿Cuál es tu nombre? |

### Qué vs Cuál — häufige Verwechslung
- **Qué** = „was ist das" (Definition): \`¿Qué es "mesa"?\`
- **Cuál** = „welches von" (Auswahl): \`¿Cuál prefieres, té o café?\`
- **Qué + Substantiv**: \`¿Qué libro lees?\`
- **Cuál + ser**: \`¿Cuál es tu número?\`

### Fragezeichen
Im Spanischen gibt es **doppelte** Zeichen: \`¿…?\` öffnend + \`…?\` schließend.
\`¿Cómo te llamas?\`

> 💡 In der gesprochenen Sprache wird das öffnende \`¿\` oft weggelassen, in der Schrift ist es aber Pflicht.`,
  },

  "a1-verbos-frecuentes": {
    de: `## Wichtigste unregelmäßige Verben (Presente)

### IR — gehen
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| voy | vas | va | vamos | **vais** | van |

\`Ir a + Infinitiv\` = nahe Zukunft: \`Voy a comer.\`
\`Ir a + Ort\` = Richtung: \`Voy al cine.\`

### TENER — haben
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| tengo | tienes | tiene | tenemos | **tenéis** | tienen |

### HACER — machen/tun
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **hago** | haces | hace | hacemos | **hacéis** | hacen |

⚠️ Unregelmäßige yo-Form: \`hago\`, nicht \`habo\`.

### PODER — können
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **puedo** | **puedes** | **puede** | podemos | **podéis** | **pueden** |

### QUERER — wollen
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **quiero** | **quieres** | **quiere** | queremos | **queréis** | **quieren** |

### DECIR — sagen
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **digo** | **dices** | **dice** | decimos | **decís** | **dicen** |

### SABER — wissen (Fakten)
| yo | tú | él/ella/usted | nosotros/as | **vosotros/as** | ellos/ustedes |
|---|---|---|---|---|---|
| **sé** | sabes | sabe | sabemos | **sabéis** | saben |

> 💡 \`poder\` + Infinitiv = „können": \`Puedo ayudarte.\`
> \`querer\` + Infinitiv = „wollen": \`Quiero aprender español.\``,
  },

  "a2-preterito-perfecto": {
    de: `## Pretérito Perfecto (spanisches Passé composé)

### Formel: **HABER** + **Partizip**

**haber**: he, has, ha, hemos, habéis, han

**Partizip** regelmäßiger Verben:
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido, vivir → vivido

### Unregelmäßige Partizipien
| Infinitiv | Partizip |
|---|---|
| hacer | **hecho** |
| ver | **visto** |
| poner | **puesto** |
| escribir | **escrito** |
| abrir | **abierto** |
| decir | **dicho** |
| volver | **vuelto** |

### Wann verwenden
- Zeitraum noch nicht abgeschlossen (heute, diese Woche, dieses Jahr):
  \`Hoy he comido paella.\`
- Lebenserfahrung: \`¿Has estado en España?\`
- Bezug zur Gegenwart: \`He perdido las llaves\` (und hat sie noch nicht gefunden).

### Zeitangaben
hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.

> ⚠️ Mit **ayer, el año pasado, en 2020** verwendet man Pretérito Indefinido.`,
  },

  "a2-preterito-indefinido": {
    de: `## Pretérito Indefinido (einfache Vergangenheit)

### Regelmäßige Verben

| Person | -AR | -ER/-IR |
|---|---|---|
| yo | -é | -í |
| tú | -aste | -iste |
| él/ella | -ó | -ió |
| nosotros | -amos | -imos |
| vosotros | -asteis | -isteis |
| ellos | -aron | -ieron |

Beispiel: \`hablar\` → hablé, hablaste, habló, hablamos, hablasteis, hablaron.

### Häufigste unregelmäßige Verben

| Infinitiv | yo | él/ella | ellos |
|---|---|---|---|
| ser / ir | fui | fue | fueron |
| tener | tuve | tuvo | tuvieron |
| estar | estuve | estuvo | estuvieron |
| hacer | hice | hizo | hicieron |
| venir | vine | vino | vinieron |
| decir | dije | dijo | dijeron |
| ver | vi | vio | vieron |

### Verwendung
Handlung **abgeschlossen** zu einem bestimmten Zeitpunkt in der Vergangenheit:
\`Ayer fui al cine.\`
\`En 2018 viví en Barcelona.\`

### Zeitangaben
ayer, anteayer, el lunes pasado, hace dos años, en 1999.

> 💡 Indefinido = Fakten der Vergangenheit; Imperfecto = Hintergrundbeschreibung. Vergleich:
> \`Ayer **llovió**\` (was geschah) / \`**Llovía**\` (wie das Wetter war).`,
  },

  "a2-imperfecto": {
    de: `## Pretérito Imperfecto — Hintergrund der Vergangenheit

### Regelmäßige Endungen

| Person | -AR | -ER/-IR |
|---|---|---|
| yo | -aba | -ía |
| tú | -abas | -ías |
| él/ella/usted | -aba | -ía |
| nosotros/as | -ábamos | -íamos |
| **vosotros/as** | **-abais** | **-íais** |
| ellos/ustedes | -aban | -ían |

Beispiel: \`hablar\` → hablaba, hablabas, hablaba, hablábamos, **hablabais**, hablaban.

### Nur 3 unregelmäßige Verben!
| Verb | Formen |
|---|---|
| **ser** | era, eras, era, éramos, eran |
| **ir** | iba, ibas, iba, íbamos, iban |
| **ver** | veía, veías, veía, veíamos, veían |

### Wann verwenden
1. **Gewohnheiten in der Vergangenheit:** \`Cuando era niño, jugaba al fútbol.\`
2. **Beschreibung:** \`Hacía sol y los pájaros cantaban.\`
3. **Laufende Handlung (Hintergrund):** \`Yo leía cuando llamaste.\`
4. **Alter/Zeit:** \`Tenía 10 años.\`

### Vergleich mit Indefinido
\`**Estaba** en casa cuando **llegó** María.\`
(Imperfecto — was gerade geschah / Indefinido — was passierte).`,
  },

  "a2-por-para": {
    de: `## POR vs PARA — beide übersetzen sich unterschiedlich

### PARA — Zweck, Ziel, Frist
- **Zweck:** \`Estudio **para** aprender.\`
- **Empfänger:** \`Es un regalo **para** ti.\`
- **Richtung:** \`Voy **para** Madrid.\`
- **Frist:** \`Para mañana.\`

### POR — Ursache, Weg, Tausch, Dauer
- **Ursache:** \`**Por** el frío, no salí.\`
- **Weg/Ort:** \`Paseo **por** el parque.\`
- **Tausch/Preis:** \`Lo compré **por** 10 euros.\`
- **Dauer:** \`Estudié **por** dos horas.\`
- **An Stelle von:** \`Lo hago **por** ti.\`

### Eselsbrücke
**PARA** = Zweck, Richtung nach vorne
**POR** = Ursache, Weg, Preis

> ⚠️ Feste Ausdrücke: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
  },

  "a2-comparativos": {
    de: `## Komparativ (Comparativos)

### Regelmäßige Adjektive
\`más + Adjektiv + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

### Besondere Formen (auswendig lernen!)

| Bedeutung | Form |
|---|---|
| größer/kleiner | **mayor / menor** (Alter) oder **más grande/más pequeño** (Größe) |
| besser/schlechter | **mejor / peor** |
| mehr (Menge) | **más** |
| älter/jünger | **mayor / menor** |

\`Juan es **mejor** que yo.\`
\`Mi hermano es **mayor** que yo.\`

## Superlativ (Superlativos)

\`el/la/los/las + más/menos + Adjektiv\`

- \`Es **el más alto** de la clase.\`
- \`Es **la menos cara**.\`

### Besonders: -ísimo hinzufügen
\`bueno → buenísimo\`
\`grande → grandísimo\`
\`rápido → rapidísimo\`

> ⚠️ \`el mejor / la mejor\` (beste), \`el peor / la peor\` (schlechteste) — besondere Superlativformen.`,
  },

  "a2-futuro-simple": {
    de: `## Futuro Simple

### Bildung: Infinitiv + Endung

An den **Infinitiv** anhängen (ohne -ar/-er/-ir zu entfernen):

| Person | Endung |
|---|---|
| yo | -é |
| tú | -ás |
| él/ella | -á |
| nosotros | -emos |
| vosotros | -éis |
| ellos | -án |

Beispiele:
- \`hablar\` → hablar**é**, hablar**ás**, hablar**á**…
- \`comer\` → comer**é**, comer**ás**…
- \`vivir\` → vivir**é**, vivir**ás**…

### Unregelmäßige Stämme (12 Verben)
| Infinitiv | Futur-Stamm |
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

### Verwendung
1. **Vorhersage:** \`Mañana **lloverá**.\`
2. **Versprechen:** \`Te **llamaré** esta noche.\`
3. **Pläne:** \`El año que viene **viajaré** a España.\`

> 💡 Auch: Wahrscheinlichkeit in der Gegenwart: \`¿Qué hora es? — Serán las tres.\``,
  },

  "b1-subjuntivo": {
    de: `## Modo Subjuntivo — Presente

### Bildung
Die **yo**-Form des Presente nehmen, Endung wechseln: -AR ↔ -ER/-IR.

| Person | -AR (hablar → hablo) | -ER (comer → como) |
|---|---|---|
| yo | hable | coma |
| tú | hables | comas |
| él/ella/usted | hable | coma |
| nosotros/as | hablemos | comamos |
| **vosotros/as** | **habléis** | **comáis** |
| ellos/ustedes | hablen | coman |

### Unregelmäßige Stämme
- tener → **tenga**, estar → **esté**, hacer → **haga**
- ser → **sea**, ir → **vaya**, saber → **sepa**
- Verben mit Vokalwechsel: pensar → **piense**, pedir → **pida**

### Wann Subjuntivo verwenden
1. **Wunsch:** \`Quiero que **vengas**.\`
2. **Emotion:** \`Me alegra que **estés** aquí.\`
3. **Zweifel:** \`Dudo que **sepa** la respuesta.\`
4. **Unbestimmtheit:** \`Busco a alguien que **hable** ruso.\`
5. **Nach bestimmten Konjunktionen:** para que, antes de que, aunque (hypothetisch).

### WEIRDO — Eselsbrücke
**W**ish, **E**motion, **Impersonal expressions**, **R**ecommendation, **D**oubt, **O**jalá.

> ⚠️ \`Creo que...\` → Indikativ (Gewissheit). \`No creo que...\` → Subjuntivo (Zweifel).`,
  },

  "b1-imperativo": {
    de: `## Imperativo

### Bejahungsform (afirmativo)

| Person | -AR | -ER/-IR | Häufige Unregelmäßige |
|---|---|---|---|
| tú | -a (habla) | -e (come) | ten, pon, ven, sal, haz |
| usted | -e (hable) | -a (coma) | sea, vaya |
| nosotros | -emos | -amos | vamos, demos |
| vosotros | -ad (hablad) | -ed (comed) |  |
| ustedes | -en (hablen) | -an (coman) |  |

### Verneinungsform (negativo) = Subjuntivo
\`No **hables**\`, \`No **comas**\`, \`No **vengas**\`.

### Besondere tú-Formen (bejahend)
| Infinitiv | tú |
|---|---|
| tener | ten |
| poner | pon |
| venir | ven |
| salir | sal |
| hacer | haz |
| decir | di |
| ser | sé |
| ir | ve |

### Mit Pronomen
In der bejahenden Form **hängen** Pronomen an das Verb:
\`**Dímelo**\` (di + me + lo) = sag es mir.

In der verneinenden Form stehen sie **davor**:
\`**No me lo digas**\`.

> 💡 Die Betonung bleibt auf dem Verb: dí-me-lo, có-me-lo.`,
  },

  "b1-condicional": {
    de: `## Condicional Simple

### Bildung: Infinitiv + Endung

| Person | Endung |
|---|---|
| yo | -ía |
| tú | -ías |
| él/ella | -ía |
| nosotros | -íamos |
| vosotros | -íais |
| ellos | -ían |

Beispiele:
- \`hablar\` → hablar**ía**, hablar**ías**…
- \`comer\` → comer**ía**, comer**ías**…

### Unregelmäßige Stämme (wie im Futuro)
\`tener → tendría\`, \`poner → pondría\`, \`hacer → haría\`,
\`poder → podría\`, \`saber → sabría\`, \`querer → querría\`, \`decir → diría\`.

### Verwendung
1. **Höflichkeit:** \`¿**Podría** ayudarme?\`
2. **Wunsch:** \`**Me gustaría** viajar.\`
3. **Hypothese über die Vergangenheit:** \`Dijo que **vendría**.\`
4. **Ratschlag:** \`Yo que tú, **estudiaría** más.\`

### Si-Konstruktionen (irreale Bedingung im Präsens)
\`Si **tuviera** tiempo, **saldría** contigo.\`
- \`Si + Subjuntivo Imperfecto + Condicional\`

> 💡 Condicional = Futur, der ins Imaginäre/Hypothetische verschoben wird.`,
  },

  "b1-preposiciones-por-para-2": {
    de: `## Das Pronomen SE — wichtigste Funktionen

### 1. Reflexiv (reflexivo)
\`levantarse\` → \`Me **levanto** a las 7.\`
\`lavarse\` → \`Se **lava** las manos.\`

### 2. Reziprok (recíproco)
\`**Se** ven todos los días.\`
\`**Nos** abrazamos.\`

### 3. Reflexives Passiv (pasiva refleja) — ohne genannten Handelnden
\`**Se** habla español.\`
\`**Se** venden casas.\`
- Das Verb **stimmt** mit dem Substantiv überein: \`Se vende pan\` / \`Se venden libros\`.

### 4. Unpersönlich (impersonal)
\`**Se** vive bien aquí.\`
- Immer 3. Person Singular.

### 5. Zufällig/accidental
\`**Se** me rompió el vaso.\`
- Format: \`Se + [indirektes Pronomen] + Verb + Artikel + Substantiv\`
\`**Se** le olvidó la contraseña.\`

> ⚠️ \`se\` ist das häufigste Pronomen im Spanischen nach \`que\`. Der Kontext bestimmt die Bedeutung.`,
  },

  "b1-relativos": {
    de: `## Relativpronomen (Pronombres relativos)

### QUE — das universellste
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Für Personen und Dinge; nach Präposition mit Dingen:
\`el tema **de que** hablamos\` (aber: \`la persona **de la que** hablo\`).

### QUIEN — nur für Personen (nach Komma oder Präposition)
\`Mi hermano, **quien** vive en Madrid, es médico.\`
\`Es el profesor **con quien** hablé.\`

### EL QUE / LA QUE / LOS QUE / LAS QUE — Spezifizierung
\`El **que** estudia, aprueba.\`
\`Las **que** vinieron.\`

### LO QUE — „was/das, was" (abstrakt)
\`Esto es **lo que** quiero.\`
\`No entendí **lo que** dijiste.\`

### CUYO / CUYA / CUYOS / CUYAS — „dessen/deren"
\`El hombre **cuyo** coche es rojo.\`
- **Stimmt** mit dem Besitz überein (nicht mit dem Besitzer):
\`la mujer **cuyos** hijos…\`

### DONDE — „wo" (Ort)
\`La ciudad **donde** vivo.\`

> 💡 \`que\` = allgemein; \`quien\` = nur Personen; \`donde\` = nur Ort; \`cuyo\` = Besitz.`,
  },

  "b1-pluscuamperfecto": {
    de: `## Pretérito Pluscuamperfecto — „Vergangenheit vor der Vergangenheit"

### Formel: HABER (im Imperfecto) + Partizip

**haber** im Imperfecto: había, habías, había, habíamos, habíais, habían

**Partizip** (wie im Perfecto):
- -AR → **-ado**: hablar → hablado
- -ER/-IR → **-ido**: comer → comido

Unregelmäßig: \`hecho, visto, puesto, escrito, abierto, dicho, vuelto\`.

### Beispiele
\`Cuando llegué, el tren ya **había salido**.\`
\`No tenía hambre porque ya **había comido**.\`

### Verwendung
Handlung, die **vor** einer anderen Handlung in der Vergangenheit stattfand:

| Früher (Plusquamperfekt) | Später (Indefinido/Imperfecto) |
|---|---|
| había terminado | cuando llegaste |

### Zeitangaben
\`ya\`, \`nunca\`, \`todavía no\`.

> 💡 Wird in der indirekten Rede verwendet: \`Dijo que **había** terminado.\``,
  },

  "b1-subjuntivo-imperfecto": {
    de: `## Subjuntivo Imperfecto

### Bildung: Infinitiv + Endungen (mit Betonung)

Für -AR: -ara, -aras, -ara, -áramos, -arais, -aran
Für -ER/-IR: -iera, -ieras, -iera, -iéramos, -ierais, -ieran

Beispiel: \`hablar → hablara\`, \`comer → comiera\`, \`vivir → viviera\`.

⚠️ Gleiche Unregelmäßige wie im Futuro Simple:
\`tener → tuviera\`, \`poner → pusiera\`, \`hacer → hiciera\`, \`saber → supiera\`,
\`venir → viniera\`, \`poder → pudiera\`, \`querer → quisiera\`, \`decir → dijera\`.

### Wann verwenden
1. **Si-Konstruktion (irreale Bedingung):**
   \`Si **tuviera** dinero, viajaría.\`
2. **Nach «como si» (als ob):**
   \`Me habla como si **fuera** tonto.\`
3. **Nach Emotion/Wille in der Vergangenheit:**
   \`Quería que **vinieras**.\`
4. **Höfliche Bitten:**
   \`Quisiera un café.\`

### Doppelte Form (-ra / -se)
Es gibt eine ältere -se-Form: \`hablase, comiese\`. In der Literatur zu finden.

> ⚠️ \`Si + Subjuntivo Imperfecto + Condicional\` = irreale Bedingung. Eine der häufigsten B1-B2-Konstruktionen.`,
  },

  "b1-pronombres-objetos": {
    de: `## Objektpronomen (OD und OI)

### Direktes Objekt (Objeto Directo — was?)
Antwortet auf „was/wen?" (ohne Präposition).

| Person | OD |
|---|---|
| mir | me |
| dir | te |
| ihn/sie (m./f.) | lo / la |
| uns | nos |
| euch | os |
| sie | los / las |

Beispiel: \`**Lo** veo.\` \`**La** leo.\`

### Indirektes Objekt (Objeto Indirecto — wem?)
Antwortet auf „wem?" (mit Präposition a).

| Person | OI |
|---|---|
| mir | me |
| dir | te |
| **ihm/ihr** | **le** |
| uns | nos |
| euch | os |
| **ihnen** | **les** |

Beispiel: \`**Le** doy el libro.\`

### Doppelpronomen (OD + OI)
Wenn beide erscheinen: \`me lo, te lo, se lo, nos lo\`.

⚠️ **le/les + lo/la/los/las → SE**
\`Le + lo = **se lo**\` (NICHT ~~le lo~~).
\`**Se lo** di.\`

### Reihenfolge der Pronomen
1. **Vor dem konjugierten Verb:** \`Te lo digo.\`
2. **Nach Infinitiv/Gerundium (angehängt):** \`Voy a de**círtelo**.\` \`Estoy di**ciéndotelo**.\`
3. **Nach bejahendem Imperativ (angehängt):** \`¡**Dímelo**!\`

> 💡 Eselsbrücke: OI vor OD — „Le lo" ist unmöglich. Daher „Se lo".`,
  },

  "b1-adverbios": {
    de: `## Adverbien (Adverbios)

### Bildung -mente (wie? auf welche Weise?)
**Adjektiv (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ Wenn das Adjektiv nur eine m.-Form hat: \`feliz → felizmente\`.

⚠️ Wenn das Adjektiv betont ist, trägt auch \`-mente\` die Betonung:
\`difícil**mente**\`.

### Zeitadverbien
\`hoy\`, \`ayer\`, \`mañana\`, \`ahora\`, \`tarde\`, \`temprano\`, \`pronto\`,
\`siempre\`, \`nunca\`, \`ya\`, \`todavía\`.

### Ortsadverbien
\`aquí\`, \`allí\`, \`allá\`, \`cerca\`, \`lejos\`, \`delante\`, \`detrás\`,
\`arriba\`, \`abajo\`, \`adentro\`, \`afuera\`.

### Zweifelsadverbien
\`quizás\`, \`tal vez\`, \`acaso\`, \`posiblemente\`, \`probablemente\`.
⚠️ Diese erfordern oft **Subjuntivo**: \`Quizás **venga** mañana.\`.

### Mengenadverbien
\`mucho\`, \`poco\`, \`muy\`, \`bastante\`, \`demasiado\`, \`tan\`, \`tanto\`.

### muy vs mucho
- **muy** + Adjektiv/Adverb: \`muy **bueno**\`, \`muy **rápido**\`
- **mucho** + Substantiv/Verb: \`mucho **trabajo**\`, \`trabajo **mucho**\``,
  },

  "b2-estilo-indirecto": {
    de: `## Indirekte Rede (Estilo Indirecto)

### Direkt → Indirekt (gleicher Zeitrahmen)
> Direkt: \`Ana dice: "Hoy **llego** tarde."\`
> Indirekt: \`Ana dice que hoy **llega** tarde.\`

Wenn das Hauptverb im **Präsens** steht (dice) — die Zeit ändert sich nicht, nur
Personen und Pronomen werden angepasst.

### Zeitenverschiebung (Hauptverb in der Vergangenheit: dijo)
| Direkt | Indirekt |
|---|---|
| Presente | Pretérito Imperfecto |
| Pretérito Indefinido/Perfecto | Pluscuamperfecto |
| Futuro | Condicional |

Beispiel:
> Direkt: \`Juan dijo: "Vendré mañana."\`
> Indirekt: \`Juan dijo que **vendría** al día siguiente.\`

### Deiktische Verschiebungen
| Direkt | Indirekt |
|---|---|
| hoy | aquel día / ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |

### Indirekte Fragen
\`Me pregunto **si** vendrá.\` / \`No sé **qué** hacer.\`
— keine Inversion und keine Fragezeichen in der indirekten Form.

> ⚠️ Imperativ → Subjuntivo:
> \`Dijo: "Hazlo"\` → \`Dijo que **lo hiciera**.\``,
  },

  "b2-voz-pasiva": {
    de: `## Passiv (Voz Pasiva)

### 1. Passiv mit SER (klassisch)
**SER** + Partizip (+ **por** + Handelnder)

\`El libro **fue escrito** por Cervantes.\`
\`La carta **es enviada** por la empresa.\`

Die Zeiten ändern SER:
| Zeitform | Form |
|---|---|
| Presente | es escrito |
| Pret. indefinido | fue escrito |
| Pret. imperfecto | era escrito |
| Futuro | será escrito |

Verwendet im **formellen, schriftlichen** Register (Nachrichten, Wissenschaft).

### 2. Reflexives Passiv (natürlich und häufig)
**SE** + Verb in 3. Person

\`**Se** habla español.\`
\`**Se** venden casas.\`

Kongruenz mit dem Subjekt:
\`Se **vende** pan\` (Sg.) / \`Se **venden** libros\` (Pl.).

### Wann welches verwenden
- **SER-Passiv**: Betonung auf **Prozess** oder **Handelndem** (por...).
- **Reflexives Passiv**: Betonung auf **Handlung/Ergebnis**, Handelnder unwichtig — die
  häufigste und natürlichste Form in der gesprochenen Sprache.

> 💡 Im Spanischen ist das reflexive Passiv viel natürlicher als das englische Passiv.
> Nicht wörtlich übersetzen: \`"The door is closed"\` → \`"La puerta está cerrada"\`
> (Zustand) oder \`"Se cierra la puerta"\` (Handlung).`,
  },

  "b2-subjuntivo-compuestos": {
    de: `## Zusammengesetzte Subjuntivo-Formen

### Subjuntivo Perfecto (abgeschlossene Vergangenheit)
Formel: **haya** + Partizip

\`haya, hayas, haya, hayamos, hayan + hablado/comido/vivido\`

Verwendung:
1. **Emotion über etwas Abgeschlossenes:**
   \`Me alegra que **hayas llegado**.\`
2. **Zweifel über die Vergangenheit:**
   \`Dudo que **haya** terminado.\`
3. **Nach «cuando» (zukünftig abgeschlossen):**
   \`Cuando **hayas** terminado, avísame.\`

### Subjuntivo Pluscuamperfecto (Vergangenheit vor Vergangenheit)
Formel: **hubiera/hubiese** + Partizip

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubieran + hablado\`

Verwendung:
1. **Si-Konstruktion (irreale Bedingung in der Vergangenheit):**
   \`Si **hubiera sabido**, habría ido.\`
2. **Nach «como si» (irrealer Vergleich):**
   \`Habla como si **hubiera vivido** en España.\`
3. **In der indirekten Rede (nach Vergangenheit):**
   \`Dudaba que **hubiera** terminado.\`

### Doppelte Form -ra / -se
\`hubiera hablado = hubiese hablado\` (gleichwertig, -se literarischer).

> ⚠️ Universelle Regel: **Indikativ für Fakten, Subjuntivo für Subjektives**
> (Emotion, Zweifel, Wunsch, Hypothese). Perfektformen verschieben dieselbe Regel in die Vergangenheit.`,
  },

  "b2-condicionales-compuestos": {
    de: `## Condicional Compuesto

### Formel: **haber** (im Condicional) + Partizip

\`habría, habrías, habría, habríamos, habríais, habrían + hablado/comido\`

Unregelmäßige Partizipien: \`hecho, visto, dicho, puesto, escrito, abierto\`.

### Wann verwenden
1. **Irreale Bedingung in der Vergangenheit (mit si + Plusquamperfekt):**
   \`Si **hubiera** tenido tiempo, **habría** ido.\`
2. **Höfliches Bedauern:**
   \`**Habría** preferido otra cosa.\`
3. **Hypothese über die Vergangenheit:**
   \`¿Quién lo hizo? — **Habría** sido Juan.\`
4. **Indirekte Rede (Futuro → Condicional Compuesto):**
   \`Dijo que lo **habría terminado** para hoy.\`

### Drei Arten von Si-Bedingungen

| Typ | Konjunktion | Verb nach si | Hauptsatz |
|---|---|---|---|
| Real | si | presente | futuro |
| Irreal (Präsens) | si | imperfecto subj. | condicional simple |
| Irreal (Vergangenheit) | si | pluscuamperfecto subj. | condicional compuesto |

Beispiele:
- \`Si llueve, me quedo.\` (real)
- \`Si lloviera, me quedaría.\` (irreal jetzt)
- \`Si hubiera llovido, me habría quedado.\` (irreal in der Vergangenheit)`,
  },

  "b2-relativos-avanzado": {
    de: `## Relativpronomen (Fortgeschritten)

### LO QUE — „was/das, was" (abstrakt, neutral)
\`No entiendo **lo que** dices.\`
\`Esto es **lo que** quiero.\`

⚠️ \`lo que\` bezieht sich auf eine Idee/Tatsache, nicht auf ein bestimmtes Substantiv.

### EL CUAL / LA CUAL / LOS CUALES / LAS CUALES
Verwendet im **formellen** Register, besonders nach Präpositionen.

\`Tengo un amigo, **con el cual** trabajo.\`
\`La casa, **en la cual** vivo, es antigua.\`

⚠️ In der gesprochenen Sprache meist \`con el que / en el que\`; \`el cual\` ist formeller.

### DONDE / ADONDE — Ort
- \`donde\` = „wo": \`la ciudad **donde** vivo\`
- \`adonde\` = „wohin": \`el lugar **adonde** voy\`
- \`en donde\` = „an welchem Ort": \`el café **en donde** nos vimos\`

### COMO / CUANDO / CUANTO (Relativadverbien)
- \`**como**\` = „wie/wie": \`Hazlo **como** te dije.\`
- \`**cuando**\` = „wann": \`Vendré **cuando** pueda.\`
- \`**cuanto**\` = „so viel wie": \`Toma **cuanto** quieras.\`

### CUYO — „dessen/deren" (Besitz)
Stimmt mit **dem Besitz** überein, nicht mit dem Besitzer:
\`el hombre **cuyo** coche\` (Mann, dessen Auto — m.)
\`la mujer **cuya** casa\` (Frau, deren Haus — f.)
\`los niños **cuyos** juguetes\` (Kinder, deren Spielzeug)

> 💡 Formelles Register: \`el coche **del cual**\` statt \`el coche **cuyo**\`,
> aber \`cuyo\` ist präziser und kürzer.`,
  },

  "b2-conectores": {
    de: `## Diskurskonnektoren (Conectores discursivos)

### Addition
- **además** — außerdem, des Weiteren
- **también** — auch
- **asimismo** — ebenso (formell)
- **por otra parte** — andererseits
- **incluso** — sogar

### Kontrast
- **pero** — aber
- **sin embargo** — jedoch
- **no obstante** — dennoch (formell)
- **aunque** — obwohl
- **en cambio** — hingegen
- **por el contrario** — im Gegenteil

### Ursache
- **porque** — weil
- **como** — da (am Satzanfang)
- **ya que** — da, weil
- **debido a que** — aufgrund dessen, dass
- **puesto que** — da (formell)

### Folge
- **por lo tanto** — deshalb
- **por eso** — deshalb
- **así que** — also
- **por consiguiente** — folglich (formell)
- **entonces** — dann, also

### Bedingung
- **si** — wenn
- **a menos que** — es sei denn (⚠️ erfordert Subjuntivo)
- **con tal de que** — vorausgesetzt, dass (⚠️ Subjuntivo)
- **en caso de que** — falls (⚠️ Subjuntivo)
- **aunque** — obwohl (⚠️ Subjuntivo bei Hypothese)

### Zweck
- **para que** — damit (⚠️ Subjuntivo)
- **a fin de que** — damit (⚠️ Subjuntivo)
- **con el objetivo de** + Infinitiv — mit dem Ziel

> 💡 B2/C1-Niveau = Fähigkeit, Konnektoren zu **variieren**, nicht ständig \`porque\` und \`pero\` zu wiederholen.`,
  },

  "c1-perifrasis-verbales": {
    de: `## Verbalperiphrasen (Perífrasis Verbales)

Struktur: **Hilfsverb + (Bindewort) + Infinitiv/Gerundium/Partizip**.

### Mit Infinitiv
| Periphrase | Bedeutung | Beispiel |
|---|---|---|
| tener que + Inf | Verpflichtung | Tengo que irme |
| hay que + Inf | unpersönliche Notwendigkeit | Hay que estudiar |
| ir a + Inf | nahe Zukunft | Voy a comer |
| acabar de + Inf | gerade fertig | Acabo de llegar |
| volver a + Inf | wieder | Volví a leerlo |
| deber + Inf | sollen | Debes descansar |
| poder + Inf | können | Puedo ayudarte |
| soler + Inf | gewöhnlich | Suelo correr |

### Mit Gerundium
| Periphrase | Bedeutung | Beispiel |
|---|---|---|
| estar + Ger | laufende Handlung | Estoy comiendo |
| seguir/continuar + Ger | fortsetzen | Sigue lloviendo |
| llevar + Ger | Dauer | Llevo dos horas estudiando |
| ir + Ger | allmählicher Fortschritt | Va mejorando |

### Mit Partizip
| Periphrase | Bedeutung | Beispiel |
|---|---|---|
| llevar + Part | angesammeltes Ergebnis | Llevo escritas 10 páginas |
| dejar + Part | in einem Zustand lassen | Lo dejé hecho |
| tener + Part | abgeschlossene Handlung | Tengo terminado el informe |

> ⚠️ Auf das Bindewort achten: manche erfordern **de** (\`acabar de\`, \`deber de\`),
> andere **a** (\`ir a\`), andere keins (\`poder\`, \`soler\`).
>
> \`Deber + Inf\` = müssen (moralisch); \`deber de + Inf\` = wahrscheinlich
> (\`Debe de ser tarde\` ≈ „Es muss spät sein").`,
  },

  "c1-matices-estilisticos": {
    de: `## Stilistische Nuancen (C1)

### 1. Konditionale und Hypothesen
- **Real**: \`Si llueve, me quedo.\` (Indikativ + Futuro)
- **Irreal Präsens**: \`Si tuviera tiempo, saldría.\` (Subj. Imperfecto + Condicional)
- **Irreal Vergangenheit**: \`Si hubiera sabido, habría ido.\` (Subj. Plusquamp. + Cond. Compuesto)

### 2. Subjuntivo in feinen Nuancen
- \`Aunque **llueva**\` (auch wenn — hypothetisch) vs \`Aunque **llueve**\` (obwohl — Fakt).
- \`Como **llegues** tarde...\` (Drohung/Warnung).
- \`Por mucho que **estudie**\` = egal wie viel man lernt.

### 3. Höflichkeit und Distanz
- **Condicional de cortesía**: \`¿Podría...?\`, \`Quisiera...\`, \`Me gustaría...\`
- **Imperfecto** zur Abschwächung: \`Quería pedirte un favor.\`
- **Subjuntivo** in Bitten: \`¿Puedes **abrir** la ventana?\` →
  \`¿Podrías **abrir**?\` → \`¿Te importaría **abrir**?\`

### 4. Register: formell vs informell
| Informell | Formell |
|---|---|
| tú | usted |
| ¿Qué tal? | ¿Cómo está usted? |
| Vale | De acuerdo / Correcto |
| ¡Hola! | Buenos días |

### 5. Lexikalische Nuancen
- **Soler** statt „gewöhnlich": \`Suelo levantarme temprano.\`
- **Llevar + Gerundium** für Dauer: \`Llevo viviendo aquí 5 años.\`
- **Acabar por + Inf** = schließlich: \`Acabó por aceptar.\`
- **Venir a + Inf** = ungefähr: \`Viene a costar 20 euros.\`

> 💡 Auf C1-Niveau geht es nicht um „Korrektheit", sondern um **Angemessenheit**: dieselbe
> Bedeutung kann auf Dutzende Arten ausgedrückt werden, und die Wahl hängt vom Kontext,
> der Region und dem Gesprächspartner ab.`,
  },

  "c1-subjuntivo-avanzado": {
    de: `## Subjuntivo — fortgeschrittene Verwendungen (C1)

### Aunque (obwohl) — Indikativ vs Subjuntivo
- **Indikativ** (bekannter Fakt): \`**Aunque** llueve, salgo.\`
- **Subjuntivo** (hypothetisch/unbekannt): \`**Aunque llueva**, saldré.\`

### Donde (wo) — Indikativ vs Subjuntivo
- \`Vive **donde** todos viven.\` (wo alle leben — bekannter Ort)
- \`Vivirá **donde pueda**.\` (wo er kann — hypothetisch) ⚠️ Subjuntivo

### Como (wie) — Indikativ vs Subjuntivo
- \`Hazlo **como** te enseñé.\` (wie ich es dir gezeigt habe — bekannter Weg)
- \`Hazlo **como quieras**.\` (wie du willst — hypothetisch) ⚠️ Subjuntivo

### Relativsätze mit unbestimmtem Bezugswort
- \`Busco a alguien que **habla** ruso.\` (ich weiß, dass es so jemanden gibt) → Indikativ
- \`Busco a alguien que **hable** ruso.\` (nicht sicher, ob es einen gibt) → **Subjuntivo**

### Feste Ausdrücke
- \`**Sea como sea**\` — wie dem auch sei
- \`**Pase lo que pase**\` — was auch immer passiert
- \`**Cueste lo que cueste**\` — um jeden Preis
- \`**Digan lo que digan**\` — was auch immer sie sagen

### Nach negativen Emotionen/Bewertungen
\`No creo que **tenga** razón.\`
\`No es cierto que **haya** venido.\`

> ⚠️ Hauptregel auf C1: **Subjuntivo = Unsicherheit / Hypothese / Subjektivität**. Wenn der Fakt real und bekannt ist — Indikativ.`,
  },

  "c1-indirecto-avanzado": {
    de: `## Indirekte Rede — vollständiges System (C1)

### Zeitübersetzung (nach Hauptverb in der Vergangenheit)

| Direkte Rede | → Indirekte Rede |
|---|---|
| presente | imperfecto |
| pret. perfecto | pluscuamperfecto |
| pret. indefinido | pluscuamperfecto |
| imperfecto | imperfecto (unverändert) |
| futuro simple | condicional simple |
| condicional | condicional (unverändert) |
| presente subj. | imperfecto subj. |
| perfecto subj. | pluscuamperfecto subj. |

### Deiktische Übersetzung
| Direkt | Indirekt |
|---|---|
| hoy | aquel/ese día |
| mañana | al día siguiente |
| ayer | el día anterior |
| este | aquel/ese |
| aquí | allí / ahí |
| ahora | entonces |

### Indirekte Fragen
\`¿Vendrás? → Me pregunta si **vendré**.\`
\`¿Dónde vives? → Me pregunta **dónde vivo**.\` (keine Inversion, keine ¿?)

⚠️ In indirekten Fragen gibt es **keine** \`¿?\`-Zeichen und keine Subjekt-Verb-Inversion.

### Indirekte Befehle
\`¡Hazlo! → Me dice que **lo haga**.\`
\`¡No salgas! → Me dice que **no salga**.\`

### Nach Hauptverb im Präsens (dice)
Zeiten **ändern sich nicht**: \`Dice: "Vengo" → Dice que **viene**.\`
Nur Personen/Pronomen werden angepasst.

### Komplexe Fälle (C1)
- \`Dijo: "Si supiera, iría" → Dijo que si **supiera**, **iría**.\`
- \`Pensaba: "¿Qué haré?" → Se preguntaba **qué haría**.\`

> 💡 Hauptfehler auf C1 — das Vergessen der **Zeit-/Ortsdeiktika** zu ändern:
> \`ayer → el día anterior\`, \`aquí → allí\`.`,
  },

  "c1-pronombres-avanzado": {
    de: `## Pronomen — fortgeschrittene Fälle (C1)

### Neutrales LO (lo + Adjektiv/Adverb)
\`**Lo** bueno de España.\`
\`**Lo** importante es estudiar.\`
\`**Lo** más difícil.\`

Formel: \`lo + Adjektiv (m.)\` = abstraktes Substantiv.

### Objektdopplung (Redundanz)
Im Spanischen ist Dopplung **normal** und oft **erforderlich**:

\`**A María la** veo.\`
\`**A Juan le** di el libro.\`

⚠️ \`a + Name\` (a personal) + doppeltes Pronomen — das ist **normale** Sprache, kein Fehler.

### LEÍSMO / LAÍSMO / LOÍSMO
Regionale Abweichungen von der Norm:
- **Leísmo** (häufig in Spanien): \`le\` statt \`lo\` als direktes Objekt m.
  \`A Juan **le** veo\` (Norm: \`lo veo\`) — akzeptabel für männliche Personen.
- **Laísmo** (Madrid): \`la\` statt \`le\` als indirektes Objekt.
  \`A María **la** di el libro\` (Norm: \`le\`) — **gilt als Fehler**.
- **Loísmo** (selten): \`lo\` statt \`le\` als indirektes Objekt — **Fehler**.

### Pronomen mit Präposition
\`conmigo\`, \`contigo\`, \`consigo\`.
⚠️ Nicht ~~con mí~~ / ~~con ti~~.
\`para mí\`, \`para ti\` — regulär, nicht *paramigo.

### Reduplikation (Betonung)
\`**A él** lo vi ayer.\`
\`**A ella** le regalé flores.\`

> 💡 C1 = Fähigkeit, **natürlich** zu duplizieren (klingt spanisch),
> nicht \`a + Pronomen + OD/OI\` zu vermeiden.`,
  },

  "c1-ser-estar-avanzado": {
    de: `## Ser vs Estar — feine Unterschiede (C1)

### Adjektive, die die Bedeutung ändern
| Adjektiv | SER (dauerhaft) | ESTAR (Zustand) |
|---|---|---|
| aburrido | langweilig (Charakter) | gelangweilt |
| listo | klug | bereit |
| rico | reich | lecker |
| verde | grün (Farbe) | unreif |
| bueno | gut (Person) | lecker/gut (jetzt) |
| malo | schlecht (Charakter) | verdorben/krank |
| vivo | lebhaft (energisch) | lebendig (nicht tot) |
| seguro | zuverlässig | selbstsicher |
| callado | ruhig (Charakter) | still (jetzt) |
| despierto | wachsam | wach (nicht schlafend) |

### ESTAR + Gerundium vs Presente
\`Estoy **comiendo**.\` — Ich esse gerade (jetzt, im Gange).
\`**Como**.\` — Ich esse (allgemein, gewohnheitsmäßig).

⚠️ Nicht alle Verben klingen gut im Gerundium:
- ✅ \`estoy leyendo, está lloviendo\`
- ⚠️ ~~estoy sabiendo~~ (falsch — \`sé\`)
- ⚠️ ~~estoy siendo~~ (selten, formell)

### SER + Beruf vs ESTAR + de
\`Es **profesor**.\` — Er ist Lehrer (Beruf).
\`Está **de** profesor.\` — Er arbeitet (vorübergehend) als Lehrer.

### Brot/Essen
\`El pan **es** fresco.\` — Das Brot ist frisch (im Allgemeinen/von Natur aus).
\`El pan **está** fresco.\` — Das Brot ist frisch (jetzt, gerade gebacken).

### Passiv
\`**Es** escrito por Cervantes.\` — (Handlung, Prozess — ser-Passiv)
\`**Está** escrito.\` — (Ergebnis — estar + Partizip)

> 💡 Universeller C1-Hinweis: **SER = Identität**, **ESTAR = Zustand/Ergebnis**. Im Zweifel — frage: „Ist das eine Definition oder ein aktueller Zustand?"`,
  },

  "c2-ironia-registry": {
    de: `## Ironie und Register (C1-C2)

### Ironischer Subjuntivo
Verwendet für **höfliche Kritik** oder Ironie:

- \`¡**Que** sea muy feliz!\` — „Möge er sehr glücklich sein!" (ironisch: gute Reise)
- \`¡**Como** si no lo supiera!\` — Als ob ich es nicht wüsste! (aber ich weiß es)
- \`¡**Haberlo** dicho antes!\` — Das hättest du früher sagen sollen! (Vorwurf)
- \`¡**Ojalá** no viniera!\` — „Ich wünschte, er würde nicht kommen" (mit Hoffnung/Ironie)

### Register: formell vs informell

| Situation | Informell | Formell |
|---|---|---|
| Anrede | tú | usted |
| Begrüßung | ¡Hola! / ¿Qué tal? | Buenos días |
| Verabschiedung | ¡Adiós! / ¡Chao! | Hasta luego |
| Zustimmung | ¡Vale! / ¡Dale! | De acuerdo |
| Bitte | ¿Puedes…? | ¿Podría…? / Le ruego… |
| Ablehnung | No puedo | Me temo que no es posible |
| Dank | ¡Gracias! | Le agradezco |

### Gesprächstaktiken (C1-C2)
- **Abschwächung (atenuación):** \`Un poco\`, \`quizás\`, \`tal vez\`, \`en cierto modo\`.
  \`Está **un poco** cansado.\` (statt \`muy\`)
- **Ausweichen:** \`Depende\`, \`No sabría decirte\`, \`Es relativo\`.
- **Höfliche Meinungsverschiedenheit:** \`No estoy seguro de que…\`, \`Permíteme discrepar\`.

### Feste Formeln
- \`A ver\` — mal sehen
- \`Vaya por delante que\` — ich möchte vorab sagen, dass…
- \`Por decirlo así\` — sozusagen
- \`En cierto modo\` — in gewisser Weise
- \`No es que… sino que…\` — es ist nicht so, dass… sondern dass…

### Regionalismen (Sprachvarianten)
- Spanien: \`vosotros\`, \`coche\`, \`zumo\`, \`movil\`
- Lateinamerika: \`ustedes\`, \`carro\`, \`jugo\`, \`celular\`
- Argentinien: \`vos\` (statt \`tú\`), \`che\`
- Mexiko: \`mande\` (wie bitte?, höfliche Bitte um Wiederholung)

> 💡 C2 = Fähigkeit, **sofort den Register zu wechseln**, Ironie zu verstehen und
> Sarkasmus durch Grammatik zu verwenden (besonders Subjuntivo).`,
  },
};
