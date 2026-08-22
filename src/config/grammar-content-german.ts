import type { InterfaceLanguage } from "@/types";

export const GERMAN_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "eng-a1-be": {
    de: `## Das Verb **be** — die Grundlage des Englischen

### I am / he is / they are
**Regel:** I → **am**, he/she/it → **is**, you/we/they → **are**.

| Subjekt | Form | Beispiel |
|---|---|---|
| I | **am** | I **am** a student |
| He/She/It | **is** | She **is** from London |
| You/We/They | **are** | They **are** happy |

### Kontraktionen
**Regel:** \`I am → I'm\`, \`He is → He's\`, \`They are → They're\`.

### Verneinung
**Regel:** \`I'm not\`; \`isn't\` / \`aren't\` (oder \`he's not\` / \`they're not\`).

### Fragen
**Regel:** **be** steht vorn: \`Am I...?\` \`Is he...?\` \`Are they...?\`

> 💡 **I am, He/She/It is, You/We/They are** — Grundlage der englischen Grammatik.`,
  },

  "eng-a1-present-simple": {
    de: `## Present Simple — Routinen und Fakten

### I/you/we/they + Verb; he/she/it + -s
**Regel:** \`I work\` / \`They live\`. Bei he/she/it — **workS / liveS**.

### Die Endung -s (he/she/it)
**Regel:** Konsonant → **-s**; -o/-s/-sh/-ch/-x → **-es**; Konsonant + y → **-ies**.

| Verbendung | + | Beispiel |
|---|---|---|
| Konsonant | **-s** | work → work**s** |
| -o, -s, -sh, -ch, -x | **-es** | go → go**es**, watch → watch**es** |
| Konsonant + y | **-ies** | study → stud**ies** |

### Verneinung und Fragen — do / does
**Regel:** \`I don't work\`, \`He doesn't work\`. Frage: \`Do you...?\` / \`Does he...?\` — Verb ohne -s.

### Zeitangaben
**Regel:** oft mit \`always\`, \`usually\`, \`often\`, \`every day\`.

> 💡 **He/she/it** — immer **-s** oder **-es**.`,
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

### Eine Form für alle
**Regel:** \`can\` ändert sich **nicht**: I/he/they **can**.

| Form | Beispiel |
|---|---|
| + | I **can** swim |
| − | I **can't** (= cannot) swim |
| ? | **Can** you swim? |

### Nach can — Verb ohne to
**Regel:** \`can swim\`, nicht *can to swim*.

### Drei Bedeutungen
**Regel:** Können / Bitte / Erlaubnis — dieselbe Form \`can\`.

1. **Fähigkeit:** \`I can speak English\`
2. **Bitte:** \`Can you help me?\`
3. **Erlaubnis:** \`You can go now\`

> 💡 Höflicher später: \`Could you…?\``,
  },

  "eng-a1-questions": {
    de: `## Wh- Questions — W-Fragen

| Wort | Bedeutung | Beispiel |
|---|---|---|
| **What** | was / welcher | What is your name? |
| **Who** | wer | Who is she? |
| **Where** | wo / wohin | Where do you live? |
| **When** | wann | When is the class? |
| **Why** | warum | Why are you late? |
| **How** | wie | How are you? |
| **How old** | wie alt | How old are you? |
| **How many** | wie viele (zählbar) | How many books? |

### Wortstellung
\`W-Wort + Hilfsverb + Subjekt + Verb\`
- \`Where **do** you live?\`
- \`What **is** your job?\` (bei be kein extra do/does)

> 💡 Auf Why antwortet man oft mit **because**.`,
  },

  "eng-a1-prepositions": {
    de: `## Ortspräpositionen

| Präposition | Verwendung | Beispiel |
|---|---|---|
| **in** | innen | in the box, in London |
| **on** | auf einer Fläche | on the table, on the wall |
| **at** | genauer Punkt | at the door, at school |
| **under** | unter | under the bed |
| **between** | zwischen | between A and B |
| **next to** | neben | next to the bank |
| **behind** | hinter | behind the house |
| **in front of** | vor | in front of the car |

### in / on / at bei Orten
- **at** home, at work, at the station
- **in** Stadt/Land: in Spain
- **on** Straße: on Oxford Street

> 💡 \`at\` oft für Institution/Punkt, \`in\` für Raum/Innenraum.`,
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

  "eng-a2-going-to": {
    de: `## be going to — Pläne und Absichten

### Formel: **am/is/are + going to + V**

| Person | Beispiel |
|---|---|
| I | I **am going to** travel |
| He/She | She **is going to** study |
| We/They | They **are going to** leave |

### Verwendung
1. **Absicht:** \`I'm going to learn Spanish\`
2. **Vorhersage mit Anzeichen:** \`Look at the clouds — it's going to rain\`

### Fragen und Verneinungen
- \`Are you going to come?\`
- \`She isn't going to stay\`

> 💡 Nach going to — **Grundform des Verbs** (nicht -ing und nicht -s).`,
  },

  "eng-a2-quantifiers": {
    de: `## Quantifiers — how much / how many?

| Wort | Womit | Beispiel |
|---|---|---|
| **some** | + / Bitten | some water, some apples |
| **any** | − / ? | any milk? / I don't have any |
| **many** | zählbar | many books |
| **much** | unzählbar | much time |
| **a lot of** | beides | a lot of friends / money |

### Zählbar vs. unzählbar
- Countable: apple**s**, book**s** → many / a few
- Uncountable: water, rice, money → much / a little

> 💡 In positiven Sätzen ist \`a lot of\` im Alltag häufiger als \`much\`.`,
  },

  "eng-b1-future-conditional": {
    de: `## Futur (will) und First Conditional

### will / won't
\`I will help you\`, \`He won't come\`
Kontraktionen: \`I'll\`, \`won't\`

### First Conditional: **If + Präsens, will + V**
\`If it rains, I will stay home.\`
\`If you study, you will pass.\`

> 💡 First Conditional — **eine reale Bedingung**. Will NUR im Hauptsatz, nicht im if-Satz.`,
  },

  "eng-b1-modals": {
    de: `## Modalverben — should / must / have to

| Modal | Bedeutung | Beispiel |
|---|---|---|
| **should** | Ratschlag | You should rest |
| **must** | starke Pflicht | You must wear a seatbelt |
| **have to** | äußere Pflicht | I have to work tomorrow |
| **mustn't** | Verbot | You mustn't smoke here |
| **don't have to** | keine Notwendigkeit | You don't have to come |

### Nach dem Modal
Immer **Grundform**: \`should go\`, \`must study\` (nicht ~~must to study~~).

> 💡 \`must\` oft vom Sprecher/Regel; \`have to\` von Umständen.`,
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
    de: `> **Vor diesem Thema:** ser / estar und das Präsens (hablo, soy) kennt ihr schon. Hier — die kurzen Wörter **vor** dem Substantiv.

## Was ein Artikel ist

**Regel:** der Artikel ist das kurze Wort **vor** dem Substantiv: bekannt oder irgendein, eins oder viele, maskulin oder feminin.

Im Wörterbuch: **m.** = masculino = maskulin, **f.** = femenino = feminin. Singular = eine Sache, Plural = viele.

## Eine bekannte, konkrete Sache

**Regel:** vertraute / konkrete Sache → **el / la / los / las**.

| | Eine Sache | Viele Sachen |
|---|---|---|
| maskulin | **el** libro | **los** libros |
| feminin | **la** casa | **las** casas |

Beispiele: \`el sol\`, \`la casa de Ana\`, \`los libros en la mesa\`.

## Eine unbekannte oder „irgendeine“ Sache

**Regel:** noch nicht genannt, irgendeine oder „eine von“ → **un / una / unos / unas**.

| | Eine Sache | Viele Sachen |
|---|---|---|
| maskulin | **un** libro | **unos** libros |
| feminin | **una** casa | **unas** casas |

Beispiele: \`un libro interesante\`, \`una casa nueva\`.

## Ausnahme: el agua — nicht la abuela

**Regel:** **el agua**, aber **la abuela**. Betontes erstes **a** — nicht jedes Wort auf a.

**El** (oder **un**) steht vor einem **femininen** Wort nur, wenn **alle** Bedingungen gelten:

1. das Wort ist feminin;
2. wir sprechen von **einer** Sache;
3. es beginnt mit **a** oder **ha**;
4. die Betonung liegt auf **diesem ersten a** (wie **Á-gua**). Es muss kein ´ stehen — entscheidend ist der Klang.

Dann: \`el agua\`, \`el águila\`, \`el hacha\`, \`el aula\`, \`el hambre\`.

Das Wort bleibt **feminin**: \`el agua fría\` (nicht *frío*). Im Plural fällt die Ausnahme weg: \`las aguas\`, \`las águilas\`, \`las aulas\`.

**Gehört nicht dazu** (erstes a unbetont):

| Wort | Wo die Betonung liegt | Wie man sagt |
|---|---|---|
| abuela | a-**BUE**-la | **la** abuela, **las** abuelas |
| amiga | a-**MI**-ga | **la** amiga |
| harina | ha-**RI**-na | **la** harina |
| habitación | auf **-ció-** | **la** habitación |

> ⚠️ Häufiger Fehler: *el abuela*. Richtig: **la abuela**.
> Steht ein anderes Wort zwischen Artikel und Substantiv, wieder **la**: \`la misma agua\`, \`la amplia aula\`.

## Weitere Ausnahmen

### Beruf nach ser — ohne Artikel

**Regel:** nach *ser* steht der Beruf meist **ohne** Artikel. Eine konkrete Person braucht den Artikel.

- \`Soy profesora.\` — ich bin Lehrerin (Rolle).
- \`La profesora es Ana.\` — diese Lehrerin ist Ana.

### Sprache: hablo español

**Regel:** „ich spreche eine Sprache“ — ohne Artikel. Die Sprache als Thema mit **el**.

- \`Hablo español.\`
- \`El español es fácil.\`

### Wochentage: el lunes / los lunes

**Regel:** ein Tag = **el lunes**. Gewohnheit = **los lunes** (montags).

### a + el = al, de + el = del

**Regel:** **a + el → al**, **de + el → del**. Mit **la** keine Verschmelzung: *a la*, *de la*. Vor agua: \`al agua\`, \`del agua\`.

### el problema, la mano

**Regel:** das Genus steht in «Genus und Numerus». Hier nur der Artikel: \`el problema\`, \`el tema\`, aber \`la mano\`, \`la foto\`.

## In 4 Schritten wählen

**Regel:** Zahl → Genus → bekannt/irgendein → erst dann *el agua*.

1. Eine Sache oder viele?
2. Maskulin oder feminin? (das Genus ändert sich **nicht** durch el agua)
3. Bekannte konkrete Sache (**el / la / los / las**) oder „irgendeine“ (**un / una / unos / unas**)?
4. Feminin + eine Sache + betontes **a / ha** am Anfang → **el** / **un**. Im Plural immer **las** / **unas**.`,
  },

  "a1-ser-estar": {
    de: `> **Vor diesem Thema:** das ist das **erste** Grammatikthema. Von null: wer spricht (ich / du) und zwei Verben für „sein“.

## Begrüßungen und Vorstellungen

Fragen schreibt man mit **zwei** Zeichen: \`¿…?\`

| Spanisch | Deutsch |
|---|---|
| **Hola** | Hallo |
| **Buenos días** | Guten Morgen |
| **Buenas tardes** | Guten Tag / Abend |
| **Buenas noches** | Gute Nacht |
| **Adiós / Hasta luego** | Tschüss / Bis später |
| **¿Cómo te llamas?** | Wie heißt du? |
| **Me llamo…** | Ich heiße… |
| **Mucho gusto** | Freut mich |
| **¿Cómo estás?** | Wie geht’s? (jetzt) |
| **Bien, gracias** | Gut, danke |

> 💡 Nach der Begrüßung oft: \`Hola, ¿cómo te llamas?\`

## Wer spricht — ich, du, er…

Das Verb **ändert sich nach der Person**. Diese Tabelle braucht ihr den ganzen Kurs.

| Deutsch | Pronomen | Wann |
|---|---|---|
| ich | **yo** | Sprecher |
| du | **tú** | eine Person, per du |
| er / sie / Sie (eine Person) | **él / ella / usted** | eine Verbform für alle drei |
| wir | **nosotros / nosotras** | -as, wenn nur Frauen |
| ihr (Spanien) | **vosotros / vosotras** | in Lateinamerika fast unüblich |
| sie / Sie (mehrere) | **ellos / ellas / ustedes** | in Lateinamerika *ustedes* = „ihr“ |

## Zwei Verben für „sein“: ser und estar

Im Russischen ein „sein“. Im Spanischen **zwei**.

### SER — wer / was jemand **ist**
Identität, Beruf, Herkunft, Beschreibung, Uhrzeit, Beziehung:

- \`Yo **soy** profesor.\`
- \`Ella **es** de México.\`
- \`El cielo **es** azul.\` (überhaupt)
- \`**Son** las tres.\` (Uhrzeit auch mit ser)

| Wer | SER |
|---|---|
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros | **somos** |
| vosotros | **sois** |
| ellos / ustedes | **son** |

### ESTAR — wie / wo **jetzt**
Zustand, Gefühl, Ort:

- \`**Estoy** cansado.\`
- \`El libro **está** en la mesa.\`

| Wer | ESTAR |
|---|---|
| yo | **estoy** |
| tú | **estás** |
| él / ella / usted | **está** |
| nosotros | **estamos** |
| vosotros | **estáis** |
| ellos / ustedes | **están** |

## So wählt ihr

1. **Wer / was / woher / wie spät** → **ser**.
2. **Wo / wie fühlt man sich / vorübergehend** → **estar**.

Ohne englische Eselsbrücken:
- **ser**: Beschreibung, Beruf, Charakter, Zeit, Herkunft, Beziehung;
- **estar**: Haltung, Ort, -ando/-iendo, Zustand, Emotion.

> ⚠️ \`es aburrido\` (langweilige Person) vs \`está aburrido\` (gerade gelangweilt).
> \`estar frío\` gilt für Dinge; „mir ist kalt“ ist *tener* (\`tengo frío\`).`,
  },

  "a1-presente": {
    de: `> **Vor diesem Thema:** soy / estoy kennt ihr schon. Hier — jede Handlung in der Gegenwart: hablo, como, vivo.

## Was Presente ist

**Presente** = Gegenwart. Die Wörterbuchform ist der **Infinitiv** (noch nicht ich/du): hablar, comer, vivir.

Die Endung zeigt die Familie:
- **-ar** — die größte (\`hablar\` — sprechen);
- **-er** (\`comer\` — essen);
- **-ir** (\`vivir\` — leben).

-ar / -er / -ir ab und Endung **nach der Person**.

## Regelmäßige Verben

„Regelmäßig“ = Tabellenendungen, Stamm bleibt ganz.

| Wer | -AR hablar | -ER comer | -IR vivir |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él / ella / usted | habl**a** | com**e** | viv**e** |
| nosotros | habl**amos** | com**emos** | viv**imos** |
| vosotros | habl**áis** | com**éis** | viv**ís** |
| ellos / ustedes | habl**an** | com**en** | viv**en** |

Ganz: \`habláis\`, \`coméis\`, \`vivís\`.

> yo endet fast immer auf **-o**. In Lateinamerika ersetzt ustedes das vosotros.

## Wann so

- Jetzt / gewöhnlich: \`Trabajo en Madrid.\`
- Fakten: \`El agua hierve a 100°C.\`
- Nahe Zukunft: \`Mañana **voy** al cine.\`

## Die ersten unregelmäßigen

**ser** und **estar** kennt ihr.

| Verb | yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| **ser** | soy | eres | es | somos | sois | son |
| **estar** | estoy | estás | está | estamos | estáis | están |
| **ir** | voy | vas | va | vamos | vais | van |
| **tener** | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **hacer** | hago | haces | hace | hacemos | hacéis | hacen |

Manche wechseln den Vokal **nur** in der betonten Silbe (nicht nosotros / vosotros):
\`pensar → pienso\`, \`pedir → pido\`, \`dormir → duermo\`. Liste — Häufige Verben.`,
  },

  "a1-genero-numero": {
    de: `> **Vor diesem Thema:** el / la / un / una kennt ihr. Hier — **warum** la casa, aber el problema, und warum nicht *el abuela*.

## Maskulin und feminin

Jedes spanische Substantiv hat ein Genus. Es stimmt **nicht** immer mit dem natürlichen Geschlecht überein und ist **nicht** immer logisch.

Im Wörterbuch: **m.** = masculino = maskulin, **f.** = femenino = feminin.

| Meist so | Genus | Beispiele |
|---|---|---|
| endet auf **-o** | maskulin | el libro, el perro |
| endet auf **-a** | feminin | la casa, la gata |
| **-ción / -sión** | feminin | la canción, la televisión |
| **-dad / -tad** | feminin | la ciudad, la libertad |
| endet auf Konsonant | Wörterbuch prüfen | el lápiz / la pared |

**Ausnahmen bei der Endung:**
- auf **-a**, aber maskulin: \`el problema\`, \`el mapa\`, \`el día\`, \`el tema\`, \`el idioma\`;
- auf **-o**, aber feminin: \`la mano\`, \`la foto\`, \`la radio\`, \`la moto\`.

Der Artikel **el** bei \`el agua\` macht das Wort **nicht** maskulin — siehe **Artikel**. Richtig: \`el agua fría\`; im Plural \`las aguas\`. Nicht verwechseln mit \`**la** abuela\` (Betonung auf **-bue-**, nicht auf dem ersten a).

## Eine oder viele

- Nach Vokal **-s**: \`libro → libros\`, \`mesa → mesas\`
- Nach Konsonant **-es**: \`flor → flores\`, \`mes → meses\`
- \`el lápiz → los lápices\` (z → c vor -es)
- Der Schriftakzent kann entfallen: \`el programa → los programas\`

> ⚠️ Artikel, Adjektiv und Substantiv müssen in Genus und Zahl übereinstimmen: \`la casa blanca\`, \`los coches rojos\`, \`el agua fría\`.`,
  },

  "a1-numeros-1-100": {
    de: `> **Vor diesem Thema:** el / la und das Genus kennt ihr. Hier — Zahlen, Wochentag und **Uhrzeit** (la una / las dos).

## Zahlen 1–100

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

> 💡 Alter: \`Tengo veinte años.\` Preise: \`Cuesta cinco euros.\`

## Wochentage

lunes, martes, miércoles, jueves, viernes, sábado, domingo

- Meist **klein geschrieben**: \`el lunes\`
- **el lunes** = am Montag (einmal)
- **los lunes** = montags (Gewohnheit)
- Nicht \`en lunes\`, sondern \`el lunes\` / \`los lunes\`.

## Monate

enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre

- **en enero** = im Januar
- Datum: \`el 5 de mayo\`

## Uhrzeit (la hora)

Frage: **¿Qué hora es?**

### Artikel vor der Stunde
| Uhrzeit | Form |
|---|---|
| 1:00 | **Es la una** |
| 2:00–12:00 | **Son las dos** |

❌ Falsch: \`Es una\`, \`Son dos\`  
✅ Richtig: \`Es **la** una\`, \`Son **las** tres\`

### Minuten
| Ausdruck | Beispiel |
|---|---|
| y … | Son las tres **y diez** |
| y cuarto | Son las cuatro **y cuarto** |
| y media | Son las cinco **y media** |
| menos cuarto | Son las seis **menos cuarto** |

### Um wie viel Uhr? → **a + la/las**
- \`a la una\` / \`a las tres\`
- \`La clase es **a las** nueve.\`

### Tageszeit
- **de la mañana** / **de la tarde** / **de la noche**

> 💡 Merke: **Es la una** / **Son las…** — immer mit Artikel.`,
  },

  "a1-preposiciones-lugar": {
    de: `> **Vor diesem Thema:** estar für den Ort und a + el = al kennt ihr. Hier — die Präpositionskarte: in, auf, unter, zu.

## Wichtigste Ortspräpositionen

| Präposition | Bedeutung | Beispiel |
|---|---|---|
| **en** | in/auf | El libro está **en** la mesa |
| **a** | nach/zu (Bewegung) | Voy **a** Madrid |
| **de** | von/aus | Soy **de** Rusia |
| **sobre** | auf | La lámpara está **sobre** la mesa |
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
    de: `> **Vor diesem Thema:** Präsens (gusta / gustan) und el / los kennt ihr. Hier — **der Kaffee gefällt MIR**, nicht „ich gefalle dem Kaffee“.

## Gustar — „mögen" (wörtlich: „gefallen")

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
    de: `> **Vor diesem Thema:** ser / estar sind getrennt. Hier — ein drittes Muster: **tener + Nomen** (Hunger / Kälte / 20 Jahre).

## Wendungen mit TENER

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
    de: `> **Vor diesem Thema:** ¿Cómo estás? und ¿Cómo te llamas? kennt ihr. Hier — die übrigen Fragewörter und das **¿** in der Schrift.

## Fragewörter (Palabras interrogativas)

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
    de: `> **Vor diesem Thema:** die regelmäßigen Präsensendungen kennt ihr. Hier — eine **Liste** der wichtigsten unregelmäßigen Verben.

## Wichtigste unregelmäßige Verben (Presente)

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
    de: `> **Vor diesem Thema:** das Präsens (hablo) konjugiert ihr schon. Neu — **zusammengesetzte Vergangenheit**: haber + «gemachte» Form.

## Pretérito Perfecto (spanisches Passé composé)

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
    de: `> **Vor diesem Thema:** Perfecto (he comido), wenn der Zeitraum noch «jetzt» ist. Hier — **gestern / 2018**: eigene Endung, ohne haber.

## Pretérito Indefinido (einfache Vergangenheit)

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

| Infinitiv | yo | tú | él/ella | nosotros | vosotros | ellos |
|---|---|---|---|---|---|---|
| ser / ir | fui | fuiste | fue | fuimos | **fuisteis** | fueron |
| tener | tuve | tuviste | tuvo | tuvimos | **tuvisteis** | tuvieron |
| estar | estuve | estuviste | estuvo | estuvimos | **estuvisteis** | estuvieron |
| hacer | hice | hiciste | hizo | hicimos | **hicisteis** | hicieron |
| venir | vine | viniste | vino | vinimos | **vinisteis** | vinieron |
| decir | dije | dijiste | dijo | dijimos | **dijisteis** | dijeron |
| ver | vi | viste | vio | vimos | **visteis** | vieron |

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
    de: `> **Vor diesem Thema:** Indefinido (ayer fui) ist das Ereignis. Hier — die **Kulisse**: Gewohnheit / was um einen herum war.

## Pretérito Imperfecto — Hintergrund der Vergangenheit

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
| **ser** | era, eras, era, éramos, **erais**, eran |
| **ir** | iba, ibas, iba, íbamos, **ibais**, iban |
| **ver** | veía, veías, veía, veíamos, **veíais**, veían |

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
    de: `> **Vor diesem Thema:** a / de / en stehen. Hier — zwei Präpositionen, die beide in „für / durch / um“ rutschen.

## POR vs PARA — beide übersetzen sich unterschiedlich

### PARA — Zweck, Ziel, Frist
- **Zweck:** \`Estudio **para** aprender.\`
- **Empfänger:** \`Es un regalo **para** ti.\`
- **Richtung / Zielort:** \`El avión sale **para** Madrid.\` (wohin der Flug geht; in die Stadt sagt man meist \`Voy **a** Madrid\`)
- **Frist:** \`Para mañana.\`

### POR — Ursache, Weg, Tausch, Dauer
- **Ursache:** \`**Por** el frío, no salí.\`
- **Weg/Ort:** \`Paseo **por** el parque.\`
- **Tausch/Preis:** \`Lo compré **por** 10 euros.\`
- **Dauer:** \`Estudié **durante** dos horas.\`
- **An Stelle von:** \`Lo hago **por** ti.\`

### Eselsbrücke
**PARA** = Zweck, Richtung nach vorne
**POR** = Ursache, Weg, Preis

> ⚠️ Feste Ausdrücke: \`por favor\`, \`por qué\`, \`para siempre\`, \`por la mañana\`.`,
  },

  "a2-comparativos": {
    de: `> **Vor diesem Thema:** Adjektive kongruieren wie bei Genus (blanca / rojos). Hier — **Vergleiche**.

## Komparativ (Comparativos)

### Regelmäßige Adjektive
\`más + Adjektiv + (que)\` / \`menos + … + (que)\`

- \`María es **más alta que** Ana.\`
- \`Este coche es **menos caro que** el otro.\`

### Gleichheit — tan / tanto
| Muster | Verwendung | Beispiel |
|---|---|---|
| **tan + Adjektiv + como** | gleiche Eigenschaft | Es **tan alta como** su hermana |
| **tanto/a(s) + Nomen + como** | gleiche Menge | Tiene **tantos libros como** yo |
| **igual de + Adjektiv + que** | auch „genauso“ | Es **igual de inteligente que** tú |

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
    de: `> **Vor diesem Thema:** die nahe Zukunft kennt ihr: ir a + Infinitiv (\`voy a comer\`). Hier — **einfaches Futur** in einem Wort.

## Futuro Simple

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

> 💡 „Wahrscheinlich ist es drei“ (\`Serán las tres\`) ist **C2-Vermutung**, nicht dieses Zukunfts-Plan.`,
  },

  "b1-subjuntivo": {
    de: `> **Vor diesem Thema:** Zeiten benennen **Fakten**. Neu — **Modus**: „ich will / ich bezweifle / schön, dass“, nicht „so ist es“.

## Modo Subjuntivo — Presente

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
    de: `> **Vor diesem Thema:** Subjuntivo-Formen (hable, comas) kennt ihr. Der Imperativ **nimmt sie**; nur tú / vosotros bejaht sind extra.

## Imperativo

### Bejahungsform (afirmativo)

Der Imperativ für **tú / usted / nosotros / vosotros / ustedes** entspricht dem **Presente de Subjuntivo** (außer bejahendem **tú** und **vosotros**).

| Person | -AR | -ER | -IR | Häufige Unregelmäßige |
|---|---|---|---|---|
| **tú** | habl**a** | com**e** | viv**e** | ten, pon, ven, sal, haz, di, sé, ve |
| **usted** | habl**e** | com**a** | viv**a** | sea, vaya, dé |
| **nosotros** | habl**emos** | com**amos** | viv**amos** | vamos, demos |
| **vosotros** | habl**ad** | com**ed** | viv**id** | — |
| **ustedes** | habl**en** | com**an** | viv**an** | sean, vayan |

Ganz: \`hablad\`, \`comed\`, \`vivid\`. Verneinung vosotros: \`no habléis\`, \`no comáis\`, \`no viváis\`.

> ⚠️ **nosotros**: -AR → **-emos** (\`hablemos\`), -ER/-IR → **-amos** (\`comamos\`, \`vivamos\`). Nicht wie im Presente de Indicativo (\`hablamos\` / \`comemos\`).

### Verneinungsform (negativo) = Subjuntivo
Immer Subjuntivo + \`no\` vor dem Verb:
- \`No **hables**\`, \`No **comas**\`, \`No **vivas**\`
- \`No **hablemos**\`, \`No **comamos**\`
- Vosotros: \`No **habléis**\`, \`No **comáis**\`, \`No **viváis**\`

### Besondere tú-Formen (nur bejahend)
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

> 💡 In der Verneinung entfallen die Kurzformen: \`ten\` → \`no **tengas**\`, \`ve\` → \`no **vayas**\`.

### Mit Pronomen
In der bejahenden Form **hängen** Pronomen an das Verb:
\`**Dímelo**\` (di + me + lo) = sag es mir.

In der verneinenden Form stehen sie **davor**:
\`**No me lo digas**\`.

> 💡 Die Betonung bleibt auf dem Verb: dí-me-lo, có-me-lo.`,
  },

  "b1-condicional": {
    de: `> **Vor diesem Thema:** Futur (hablaré, tendré) kennt ihr. Condicional = **dieselben Stämme** + -ía: hablaría, tendría.

## Condicional Simple

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

  "b1-pronombre-se": {
    de: `> **Vor diesem Thema:** me / te von gustar kennt ihr. Hier — **se** als eigenes Werkzeug, nicht jedes Mal „sich“.

## Das Pronomen SE — wichtigste Funktionen

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
    de: `> **Vor diesem Thema:** komplexe Sätze ohne neue Zeitform. Brückenwörter: que, quien, donde.

## Relativpronomen (Pronombres relativos)

### QUE — das universellste
\`El libro **que** leo.\`
\`La mujer **que** habla.\`
- Für Personen und Dinge. Nach Präposition: **el/la que**, nicht nacktes *de que*:
\`el tema **del que** hablamos\`, \`la persona **de la que** hablo\`.

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
    de: `> **Vor diesem Thema:** haber + Partizip aus dem Perfecto (he comido). Hier steht haber im **Imperfekt**: había comido.

## Pretérito Pluscuamperfecto — „Vergangenheit vor der Vergangenheit"

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
    de: `> **Vor diesem Thema:** Präsens-Subjuntivo (quiera que vengas) kennt ihr. Hauptsatz in der Vergangenheit oder irreal → **hablara / tuviera**.

## Subjuntivo Imperfecto

### Bildung

Nicht vom Infinitiv und **nicht** wie das Futur (\`tendré\`, \`haré\`, \`diré\`).

Man nimmt **ellos** im pretérito indefinido, streicht **-ron**, hängt **-ra** (oder **-se**) an:

| ellos indefinido | → Imperfekt Subjuntivo |
|---|---|
| habla**ron** | habla**ra**, habla**ras**… |
| tuvie**ron** | tuvie**ra**… |
| dije**ron** | dije**ra**… |

Regelmäßig: \`hablar → hablara\`, \`comer → comiera\`.
Unregelmäßig = **Indefinido**-Stämme, nicht Futur: \`tener → tuviera\` (nicht *tendriera), \`decir → dijera\`, \`hacer → hiciera\`.

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
\`hablara = hablase\`. Nicht „veraltet“: **-se** ist im schriftlichen Register häufiger.

> ⚠️ \`Si + Subjuntivo Imperfecto + Condicional\` = irreale Bedingung. Eine der häufigsten B1-B2-Konstruktionen.`,
  },

  "b1-pronombres-objetos": {
    de: `> **Vor diesem Thema:** me / te / le von gustar. Dieselben Kurzformen, jetzt **statt** „das Buch / ihm“: lo veo, le doy.

## Objektpronomen (OD und OI)

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
    de: `> **Vor diesem Thema:** Adjektive (rápida, fácil) kongruieren. Adverb = „wie?“: oft **feminine Form + mente**.

## Adverbien (Adverbios)

### Bildung -mente (wie? auf welche Weise?)
**Adjektiv (f.) + mente:**
- \`rápida + mente = rápidamente\`
- \`fácil + mente = fácilmente\`
- \`perfecta + mente = perfectamente\`

⚠️ Wenn das Adjektiv nur eine m.-Form hat: \`feliz → felizmente\`.

⚠️ Die schriftliche Betonung **bleibt am Adjektiv**; -mente bekommt keinen Akzent: \`fácil → fácilmente\`, \`difícil → difícilmente\`.

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
    de: `> **Vor diesem Thema:** die Kernzeiten und der Subjuntivo sitzen. Hier — **wie sie verrutschen**, wenn ihr Rede wiedergebt.

## Indirekte Rede (Estilo Indirecto)

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
    de: `> **Vor diesem Thema:** se venden aus dem SE-Thema. Hier — wann noch **ser + Partizip**, und wann se natürlicher ist.

## Passiv (Voz Pasiva)

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
    de: `> **Vor diesem Thema:** die Subjuntivo-Regel ist nicht neu — nur die **Zeit**. Wunsch über die Vergangenheit: haya hablado; irreal: hubiera hablado.

## Zusammengesetzte Subjuntivo-Formen

### Subjuntivo Perfecto (abgeschlossene Vergangenheit)
Formel: **haya** + Partizip

\`haya, hayas, haya, hayamos, hayáis, hayan + hablado/comido/vivido\`

Verwendung:
1. **Emotion über etwas Abgeschlossenes:**
   \`Me alegra que **hayas llegado**.\`
2. **Zweifel über die Vergangenheit:**
   \`Dudo que **haya** terminado.\`
3. **Nach «cuando» (zukünftig abgeschlossen):**
   \`Cuando **hayas** terminado, avísame.\`

### Subjuntivo Pluscuamperfecto (Vergangenheit vor Vergangenheit)
Formel: **hubiera/hubiese** + Partizip

\`hubiera/hubiese, hubieras, hubiera, hubiéramos, hubierais/hubieseis, hubieran + hablado\`

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
    de: `> **Vor diesem Thema:** si tuviera, saldría kennt ihr. Hier der Vergangenheitsschwanz: **habría** + Partizip und die drei si-Typen.

## Condicional Compuesto

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
    de: `> **Vor diesem Thema:** que / quien / cuyo stehen. Hier — Register: el cual, lo que, adonde.

## Relativpronomen (Fortgeschritten)

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
    de: `> **Vor diesem Thema:** porque / pero reichen bis B1. Ab B2 **variiert** man Konnektoren; manche ziehen schon Subjuntivo.

## Diskurskonnektoren (Conectores discursivos)

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
    de: `> **Vor diesem Thema:** ir a + inf und estar + -ando seit A1–A2. Hier — ein **Katalog** dieser Klebeverben und deber / deber de.

## Verbalperiphrasen (Perífrasis Verbales)

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
    de: `> **Vor diesem Thema:** die Formen kennt ihr. C1 = **welcher Schalter**: Fakt / Hypothese / Höflichkeit.

## Stilistische Nuancen (C1)

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
    de: `> **Vor diesem Thema:** Subjuntivo setzt ihr. Hier nur **Grenzfälle**, ohne Formen-Tabellen.

## Subjuntivo — fortgeschrittene Verwendungen (C1)

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
    de: `> **Vor diesem Thema:** das B2-Schema «dijo que + Verschiebung». Unten — das volle Netz inkl. Subjuntivo und innerer Monolog.

## Indirekte Rede — vollständiges System (C1)

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
    de: `> **Vor diesem Thema:** lo / le / se lo gehören zum Alltag. Hier — abstraktes **lo**, Pflicht-Verdopplung a + Pronomen, leísmo / laísmo.

## Pronomen — fortgeschrittene Fälle (C1)

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
    de: `> **Vor diesem Thema:** ser / estar aus A1. Hier nur Paare, bei denen die **Bedeutung kippt**, wenn das falsche Verb steht.

## Ser vs Estar — feine Unterschiede (C1)

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

### Woraus vs Zustand
\`El vaso **es** de cristal.\`
\`El vaso **está** lleno.\`
Frische bei Essen meist **estar**: \`El pan **está** fresco.\`

### Passiv
\`Don Quijote **fue** escrito por Cervantes.\` — Handlung in der Vergangenheit.
\`El libro **está** escrito en español.\` — Ergebnis / Zustand.

> 💡 Universeller C1-Hinweis: **SER = Identität**, **ESTAR = Zustand/Ergebnis**. Im Zweifel — frage: „Ist das eine Definition oder ein aktueller Zustand?"`,
  },

  "c2-ironia-registry": {
    de: `> **Vor diesem Thema:** Modi und Register ab C1. Hier — **wie der Satz klingt** (Ironie, Distanz), nicht wie er konjugiert.

## Ironie und Register (C1-C2)

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
  "c2-oraciones-hendidas": {
    de: `> **Vor diesem Thema:** que / lo que verbindet ihr seit B1. Hier — **Informationsfokus**, keine neue Zeitgrammatik.

## Spaltsätze (oraciones hendidas)

Muttersprachler „spalten" den Satz, um ein Element **hervorzuheben**.

### SER + QUE / QUIEN / DONDE / CUANDO

| Fokus auf | Struktur | Beispiel |
|---|---|---|
| Person | \`Fue X quien…\` | \`**Fue Juan quien** rompió el vaso.\` — Es war Juan, der das Glas zerbrach. |
| Ort | \`Es en X donde…\` | \`**Es en Madrid donde** vive.\` — Gerade in Madrid wohnt er. |
| Zeit | \`Fue X cuando…\` | \`**Fue ayer cuando** lo supe.\` — Gerade gestern habe ich es erfahren. |
| Grund | \`Es por X por lo que…\` | \`**Es por eso por lo que** me fui.\` — Genau deshalb bin ich gegangen. |

> ⚠️ Die Präposition wird **wiederholt**: \`Es **con** ella **con** quien quiero hablar.\` (nicht \`*Es con ella que…\` — Gallizismus, in der Bildungssprache vermieden)

### LO QUE — Hervorhebung von Handlung/Objekt
- \`**Lo que** necesito **es** dormir.\` — Was ich brauche, ist Schlaf.
- \`**Lo que** me molesta **es** el ruido.\` — Was mich stört, ist der Lärm.

### Zeitkongruenz von SER
\`**Fue** ayer **cuando**…\` / \`**Es** ahora **cuando**…\` — ser richtet sich nach der Zeit des Ereignisses.

### Umgangssprachliche Emphase
- \`¡Vaya coche que se ha comprado!\` — Was für ein Auto er sich gekauft hat!
- \`De tonto no tiene un pelo.\` — Dumm ist er ganz sicher nicht.
- Verdopplung: \`Saber, sé; pero no te lo diré.\` — Wissen tue ich es, aber ich sage es dir nicht.

> 💡 Im DELE C2 sind Spaltsätze ein Marker für flüssiges Schreiben und Sprechen.`,
  },
  "c2-conjetura-rumor": {
    de: `> **Vor diesem Thema:** Futur und Condicional als Plan / «ich würde» kennt ihr. Hier dieselben Formen = **Vermutung und Gerücht**.

## Futuro de conjetura und condicional de rumor

Futur und Konditional drücken im Spanischen nicht nur Zeit aus — sie kodieren den **Grad der Gewissheit**.

### Futuro de conjetura — Vermutung über die Gegenwart
| Fakt | Vermutung |
|---|---|
| \`Son las diez.\` — Es ist zehn. | \`**Serán** las diez.\` — Es wird wohl gegen zehn sein. |
| \`Está en casa.\` | \`**Estará** en casa.\` — Er ist wahrscheinlich zu Hause. |
| \`Tiene 40 años.\` | \`**Tendrá** unos 40 años.\` — Er wird um die 40 sein. |

Futuro perfecto — Vermutung über die jüngste Vergangenheit:
- \`**Habrá salido** ya.\` — Er ist wohl schon gegangen.

### Condicional de conjetura — Vermutung über die Vergangenheit
- \`**Serían** las dos cuando llegó.\` — Es war wohl gegen zwei, als er kam.
- \`**Tendría** veinte años entonces.\` — Er war damals wohl um die zwanzig.

### Condicional de rumor — die Sprache der Presse
Vermittelt **unbestätigte Informationen** (journalistischer Stil):
- \`El presidente **habría aceptado** el acuerdo.\` — Der Präsident soll das Abkommen angenommen haben.
- \`**Habría** unas mil personas en la plaza.\` — Auf dem Platz sollen etwa tausend Menschen gewesen sein.

### Synonyme Modalkonstruktionen
| Gewissheit | Struktur | Beispiel |
|---|---|---|
| ~90% | \`deber de + inf\` | \`**Debe de** estar en casa.\` |
| ~50% | \`poder + inf\` | \`**Puede** estar en casa.\` |
| Vermutung | futuro/condicional | \`**Estará** en casa.\` |

> ⚠️ \`deber de + inf\` = Wahrscheinlichkeit; \`deber + inf\` = Pflicht: \`Debes estudiar\` — du musst lernen.

> 💡 Hörst du ein Futur, wo die Gegenwart logisch wäre? Es geht nicht um die Zukunft — es bedeutet „wahrscheinlich".`,
  },
  "c2-estilo-culto": {
    de: `> **Vor diesem Thema:** Partizip und Gerundium aus den Zeiten. Hier — **buchsprachliche** Syntax: Nebensätze stauchen.

## Gehobener Stil: absolute Konstruktionen und Nominalisierung

Mittel des **schriftlichen / formellen** Spanisch: Presse, Essays, DELE C2.

### Participio absoluto
Partizip + Substantiv ersetzen einen ganzen Nebensatz:
- \`**Terminada la reunión**, todos se fueron.\` = Cuando terminó la reunión…
- \`**Dicho esto**, pasemos al siguiente punto.\` — Nachdem dies gesagt ist, kommen wir zum nächsten Punkt.
- \`**Una vez firmado el contrato**, no hay vuelta atrás.\` — Sobald der Vertrag unterschrieben ist, gibt es kein Zurück.

> ⚠️ Das Partizip **kongruiert**: \`Terminad**a** la reunión\`, \`Firmad**os** los documentos\`.

### Gerundio absoluto
Mit eigenem Subjekt:
- \`**Estando yo en Madrid**, ocurrió todo.\` — Während ich in Madrid war, geschah alles.
- \`**Siendo esto así**, no hay más que hablar.\` — Wenn das so ist, gibt es nichts mehr zu sagen.

### Nominalisierung — Substantiv statt Verb
| Umgangssprachlich | Gehoben |
|---|---|
| \`Cuando llegó el tren…\` | \`**A la llegada del** tren…\` |
| \`Antes de que salgamos…\` | \`**Antes de nuestra salida**…\` |
| \`Porque aumentaron los precios…\` | \`**Debido al aumento de** los precios…\` |

### Gehobene Konnektoren
- \`No obstante\` — dennoch (formeller als \`sin embargo\`)
- \`Asimismo\` — ebenso
- \`Por consiguiente\` — folglich
- \`En aras de\` — um … willen
- \`Si bien\` — obgleich (gehobenes \`aunque\`)
- \`Cabe señalar que…\` — es ist anzumerken, dass…

### Passive und unpersönliche Färbung
- \`Se procederá a la evaluación de…\` — es wird eine Bewertung durchgeführt…
- \`Queda prohibido fumar.\` — Rauchen ist verboten (queda + participio)
- \`Resulta imprescindible…\` — es erweist sich als unerlässlich…

> 💡 C2 heißt, das **Register wechseln** zu können: dasselbe in der Bar und im Ministerium sagen.`,
  },
  "dele-contraste-pasados": {
    de: `> **Vor diesem Thema:** die vier Vergangenheiten kennt ihr einzeln. Hier — **wie DELE wählt**, ohne Konjugation.

## Kontrast der Vergangenheitszeiten — Falle Nr. 1 im DELE

DELE-Aufgaben (Comprensión de lectura, Lückentexte) prüfen am häufigsten die Wahl zwischen den vier Vergangenheitszeiten.

### Spickzettel zur Entscheidung

| Frage zur Handlung | Zeit | Beispiel |
|---|---|---|
| Was geschah? (Ereignis, Handlungsschritt) | **Indefinido** | \`Ayer **vi** a Marta.\` |
| Was war drumherum? (Hintergrund, Gewohnheit) | **Imperfecto** | \`**Hacía** frío y **llovía**.\` |
| Mit der Gegenwart verbunden / Zeitraum offen | **Perfecto** | \`**He visto** a Marta esta mañana.\` |
| Früher als ein anderes Vergangenes | **Pluscuamperfecto** | \`Cuando llegué, ya **se había ido**.\` |

### Signalwörter (auswendig lernen)
- **Indefinido:** \`ayer\`, \`anoche\`, \`el año pasado\`, \`en 2010\`, \`de repente\`, \`entonces\`
- **Imperfecto:** \`antes\`, \`siempre\`, \`cada día\`, \`de niño\`, \`mientras\`, \`todos los veranos\`
- **Perfecto:** \`hoy\`, \`esta semana\`, \`este año\`, \`ya\`, \`todavía no\`, \`alguna vez\`, \`nunca (en mi vida)\`
- **Pluscuamperfecto:** \`ya… cuando\`, \`antes de que\`, \`nunca hasta entonces\`

### Die klassische Prüfungskombination
\`**Estaba** duchándome **cuando** **sonó** el teléfono.\`
Hintergrund (imperfecto) + Ereignis (indefinido) — dieses Paar fragt der DELE fast immer ab.

### Die Zeit ändert die Bedeutung
| Imperfecto | Indefinido |
|---|---|
| \`**Conocía** a Juan.\` — kannte ihn | \`**Conocí** a Juan.\` — lernte ihn kennen |
| \`**Sabía** la verdad.\` — wusste | \`**Supe** la verdad.\` — erfuhr |
| \`**Quería** salir.\` — wollte | \`**Quise** salir.\` — versuchte |
| \`No **quería** ir.\` — wollte nicht | \`No **quiso** ir.\` — weigerte sich |

> 💡 Spanien vs. Lateinamerika: in Spanien \`esta mañana **he visto**\`, in den meisten Ländern Amerikas \`esta mañana **vi**\`. Der DELE akzeptiert beide Normen — bleib nur konsequent.`,
  },
  "dele-carta-formal": {
    de: `> **Vor diesem Thema:** Condicional (podría, quisiera) und usted kennt ihr. Hier — **fertige Formeln** für den Prüfungsbrief.

## Der Brief im DELE (Expresión e interacción escritas)

Im schriftlichen Teil gibt es fast immer einen Brief/eine E-Mail. Bewertet wird das **Register** — die Formeln müssen zum Adressaten passen.

### Formeller Brief

| Block | Formeln |
|---|---|
| Anrede | \`Estimado señor / Estimada señora:\` · \`Muy señores míos:\` · \`A quien corresponda:\` |
| Anlass | \`Le escribo para + inf…\` · \`Me dirijo a usted con motivo de…\` · \`Me pongo en contacto con ustedes para…\` |
| Bitte | \`Le agradecería que + subjuntivo imperfecto\` (\`…que me **enviara** más información\`) · \`¿Podría + inf…?\` · \`Le ruego (que) + subj\` |
| Beschwerde | \`Me veo obligado/a a expresar mi malestar por…\` · \`Quisiera presentar una reclamación…\` |
| Abschluss | \`A la espera de su respuesta, …\` · \`Sin otro particular, …\` · \`Le agradezco de antemano su atención.\` |
| Grußformel | \`Atentamente,\` · \`Un cordial saludo,\` · \`Reciba un cordial saludo,\` |

> ⚠️ Der ganze Brief steht in **usted/ustedes**. Ein einziges „tú" im formellen Brief = Punktabzug bei der adecuación.

### Informeller Brief

| Block | Formeln |
|---|---|
| Anrede | \`¡Hola, Ana!\` · \`Querido Pablo:\` |
| Einstieg | \`¿Qué tal estás? Espero que todo te vaya bien.\` · \`¡Cuánto tiempo sin saber de ti!\` |
| Hauptteil | \`Te escribo porque…\` · \`¿Sabes qué? Resulta que…\` · \`Por cierto, …\` |
| Abschluss | \`Bueno, te dejo, que…\` · \`Escríbeme pronto.\` · \`Dale recuerdos a tu familia.\` |
| Grußformel | \`Un abrazo,\` · \`Un beso,\` · \`Hasta pronto,\` |

### Grammatik der Höflichkeit (bringt Punkte)
- Konditional: \`**Querría** saber si…\` / \`**Me gustaría** + inf\`
- Imperfecto de cortesía: \`**Quería** pedirle un favor.\`
- \`Le agradecería que me **informara**…\` — Konditional + Subjuntivo Imperfecto = B2-Königsklasse.

### Wie viele Wörter schreiben (nach DELE-Niveau)

| Niveau | Aufgabe | Umfang |
|---|---|---|
| A2 | Persönlicher Brief / E-Mail | **60–70 Wörter** |
| B1 | Brief oder E-Mail (Tarea 1) | **100–120 Wörter** |
| B2 | Formeller Brief (Tarea 1) | **150–180 Wörter** |
| C1 | Brief / Text laut Aufgabe | **220–250 Wörter** |

> ⚠️ Deutlich zu kurz = nicht alle Aufgabenpunkte abgedeckt. Deutlich zu lang = mehr Fehler und Füllstoff. Bleib innerhalb von ±10 % des Rahmens.

### Gerüst des formellen Briefs (5 Blöcke)

1. **Saludo** — \`Estimado señor:\` (1 Zeile)
2. **Motivo** — warum du schreibst: \`Me dirijo a usted con motivo de…\` (~20 % des Textes)
3. **Desarrollo** — das Wesentliche: Fakten, Details, Argumente (1–2 Absätze, ~50 %)
4. **Petición / propuesta** — was du bittest oder vorschlägst: \`Le agradecería que…\` (~20 %)
5. **Despedida** — \`A la espera de su respuesta, … Atentamente,\` + Name (1–2 Zeilen)

### Was die Prüfer bewerten

| Kriterium | Was geprüft wird |
|---|---|
| **Adecuación** | **Alle Aufgabenpunkte** abgedeckt; Register passt zum Adressaten; Briefformat eingehalten |
| **Coherencia** | Logische Absätze, Konnektoren, keine Wiederholungen oder Gedankensprünge |
| **Corrección** | Grammatik: Zeiten, Kongruenz, Rechtschreibung, Zeichensetzung |
| **Alcance** | Vielfalt an Wortschatz und Strukturen — wiederhole \`pedir\` nicht fünfmal |

> 💡 Vor der Abgabe: Hake jeden Aufgabenpunkt in deinem Entwurf ab. Ein fehlender Punkt ist der häufigste Grund für Punktverlust — selbst bei perfekter Grammatik.

> 💡 Lerne das Briefgerüst auswendig — in der Prüfung musst du nur noch den Inhalt einsetzen.`,
  },
  "dele-conectores-redaccion": {
    de: `> **Vor diesem Thema:** B2-Konnektoren (sin embargo, por lo tanto). Hier — das **Aufsatzskelett** und wo Meinung Subjuntivo braucht.

## Konnektoren für die redacción (Expresión escrita B2–C1)

Die Note für **coherencia** hängt direkt von den Verknüpfungen ab. Hier ein funktionierendes Aufsatzgerüst.

### Textstruktur

| Funktion | Konnektoren |
|---|---|
| Einstieg | \`En primer lugar\` · \`Para empezar\` · \`Hoy en día\` · \`Es un hecho que…\` |
| Ergänzung | \`Además\` · \`Asimismo\` · \`Cabe añadir que\` · \`No solo…, sino también…\` |
| Gegensatz | \`Sin embargo\` · \`No obstante\` · \`Ahora bien\` · \`Por el contrario\` · \`A pesar de que\` |
| Zwei Seiten | \`Por un lado…, por otro (lado)…\` · \`En cuanto a…\` · \`Respecto a…\` |
| Grund | \`Debido a\` · \`Puesto que\` · \`Dado que\` · \`Ya que\` |
| Folge | \`Por lo tanto\` · \`Por consiguiente\` · \`De ahí que + subj\` · \`Así pues\` |
| Beispiel | \`Por ejemplo\` · \`Como muestra\` · \`Un claro ejemplo de ello es…\` |
| Fazit | \`En definitiva\` · \`En conclusión\` · \`Para concluir\` · \`En resumen\` |

### Meinung äußern: indicativo oder subjuntivo?

| Struktur | Modus | Beispiel |
|---|---|---|
| \`Creo que / Pienso que\` | **indicativo** | \`Creo que **es** útil.\` |
| \`No creo que / Dudo que\` | **subjuntivo** | \`No creo que **sea** útil.\` |
| \`Es evidente / cierto que\` | **indicativo** | \`Es evidente que **funciona**.\` |
| \`Es importante / necesario que\` | **subjuntivo** | \`Es importante que se **regule**.\` |
| \`(No) me parece que\` | ind. / **subj.** | \`No me parece que **tenga** sentido.\` |

### Fallen, die Punkte kosten
- \`De ahí que\` — **immer Subjuntivo**: \`De ahí que **sea** necesario actuar.\`
- \`A pesar de **que** + verbo\`, aber \`a pesar de + inf/sust\`.
- Wiederhole nicht \`pero\` — wechsle mit \`sin embargo / no obstante / ahora bien\`.

### Umfang der redacción und Zeitplan

| Niveau | Umfang | Empfohlener Zeitplan (pro Text) |
|---|---|---|
| B1 | **130–150 Wörter** | 5 Min. Plan → 20 Min. Text → 5 Min. Kontrolle |
| B2 | **150–180 Wörter** | 5 Min. Plan → 25 Min. Text → 5 Min. Kontrolle |
| C1 | **220–250 Wörter** | 10 Min. Plan → 30 Min. Text → 5 Min. Kontrolle |

### Aufsatzgerüst in 4 Absätzen (Wortbudget für B2)

1. **Introducción** (~25–30 Wörter) — Thema vorstellen: \`Hoy en día…\` + These.
2. **Argumento 1 / a favor** (~50–60 Wörter) — \`En primer lugar…\` → These → Argument → Beispiel.
3. **Argumento 2 / en contra** (~50–60 Wörter) — \`Sin embargo…\` / \`Por otro lado…\` → Gegenargument → Beispiel.
4. **Conclusión** (~25–30 Wörter) — \`En definitiva…\` + eigene Position (\`Es fundamental que + subj…\`).

### Was die Prüfer erwarten

| Kriterium | Worauf sie achten |
|---|---|
| **Adecuación** | Der Text beantwortet **alle** Fragen der Aufgabe; die Textsorte stimmt (Aufsatz ≠ Brief) |
| **Coherencia** | Klare Absätze, abwechslungsreiche Konnektoren, logischer Gedankengang |
| **Corrección** | Subjuntivo, wo nötig; Zeitenfolge; Rechtschreibung mit Akzenten |
| **Alcance** | Reicher Themenwortschatz, komplexe Strukturen (\`de ahí que\`, pasiva refleja) |

- Auswendig gelernte „Universal-Absätze" erkennen die Prüfer und **werten sie ab** — lerne das Gerüst, nicht den fertigen Text.
- Zähle am Ende die Wörter: 3–4 Wörter pro Entwurfszeile × Zeilenzahl ist eine schnelle Schätzung.

> 💡 B2-Absatzformel: Konnektor → These → Argument → Beispiel. Vier Absätze — und die Struktur steht.`,
  },
  "dele-expresion-oral": {
    de: `> **Vor diesem Thema:** Vermutungsfutur, Meinung mit Subjuntivo, Konnektoren. Hier — **wie das in der mündlichen Prüfung klingt**.

## Der mündliche Teil des DELE (Expresión e interacción orales)

### Fotobeschreibung (die klassische Aufgabe)
Verortung im Bild:
- \`En primer plano se ve…\` — im Vordergrund sieht man…
- \`Al fondo hay…\` — im Hintergrund gibt es…
- \`A la derecha / izquierda aparece…\`

Hypothesen — der Prüfer erwartet das **futuro de conjetura**:
- \`**Será** su madre.\` — Das ist wohl seine Mutter.
- \`**Tendrán** unos treinta años.\` — Sie sind wohl um die dreißig.
- \`**Estarán** celebrando algo.\` — Sie feiern anscheinend etwas.
- \`Parece que + indicativo\` / \`Puede que + **subjuntivo**\` (\`Puede que **sean** amigos.\`)

### Meinung und Bewertung
- \`Desde mi punto de vista…\` · \`A mi modo de ver…\` · \`En mi opinión…\`
- \`Lo que más me llama la atención es…\` — was mir am meisten auffällt, ist…
- \`Me da la impresión de que…\`

### Zustimmung / Widerspruch (interacción)
| Zustimmung | Widerspruch |
|---|---|
| \`Estoy totalmente de acuerdo contigo.\` | \`No estoy del todo de acuerdo.\` |
| \`Tienes toda la razón.\` | \`Yo lo veo de otra manera.\` |
| \`Yo pienso lo mismo.\` | \`Entiendo tu postura, pero…\` |
| \`Sin duda.\` / \`Desde luego.\` | \`No creo que **sea** así.\` (+subj!) |

### Füllwörter (Zeit gewinnen)
\`Bueno…\` · \`Pues…\` · \`A ver…\` · \`Es que…\` · \`O sea…\` · \`¿Cómo te diría?\` · \`En fin…\`

Sie klingen natürlich und verschaffen Sekunden zum Nachdenken — Prüfer werten das als **fluidez**.

### Kompensationsstrategien (wenn ein Wort fehlt)
- \`Es una cosa que sirve para…\` — das ist ein Ding, mit dem man…
- \`No recuerdo la palabra exacta, pero…\`
- \`Es algo parecido a…\` — es ist so etwas wie…

> 💡 Notiere in der Vorbereitungsminute 3 Konnektoren + 2 Hypothesen mit Futur — das reicht für einen strukturierten Monolog.`,
  },
  "eng-c2-cleft-emphasis": {
    de: `## Cleft sentences — „gespaltene" Sätze

Muttersprachler bauen den Satz um, um das Wichtige **hervorzuheben**.

### It-cleft
| Neutral | Mit Fokus |
|---|---|
| \`John broke the vase.\` | \`**It was John who** broke the vase.\` — Es war John, der die Vase zerbrach. |
| \`I met her in Paris.\` | \`**It was in Paris that** I met her.\` — Gerade in Paris traf ich sie. |
| \`She called yesterday.\` | \`**It was yesterday that** she called.\` |

### Wh-cleft (pseudo-cleft)
- \`**What I need is** a holiday.\` — Was ich brauche, ist Urlaub.
- \`**What annoys me is** his tone.\` — Was mich ärgert, ist sein Ton.
- \`**What she did was** (to) resign.\` — Was sie tat: Sie kündigte.
- \`**All I want is** peace and quiet.\` — Alles, was ich will, ist Ruhe.

### The thing / The reason / The place
- \`**The thing that** matters most **is** honesty.\`
- \`**The reason why** I left **was** the noise.\`

### Emphatisches DO
- \`I **do** like your idea!\` — Deine Idee gefällt mir wirklich!
- \`She **does** work hard.\` — Sie arbeitet tatsächlich hart.
- \`**Do** come in!\` — Komm doch rein!

### Fronting — Voranstellung
- \`**This** I cannot accept.\` — Das kann ich nicht akzeptieren.
- \`**Strange as it may seem**, he refused.\` — So seltsam es klingt: Er lehnte ab.

> 💡 Bei CPE / IELTS 8+ sind Cleft-Strukturen ein Pflichtmerkmal flüssigen Schreibens.`,
  },
  "eng-c2-ellipsis-substitution": {
    de: `## Ellipsis & substitution — englische Sprachökonomie

Muttersprachler **wiederholen nicht**, was gesagt wurde — sie ersetzen oder lassen weg.

### SO / NOT statt eines ganzen Nebensatzes
- \`Is it going to rain? — I **hope not**.\` (= I hope it isn't going to rain)
- \`Will she come? — I **think so**.\` / \`I'm **afraid not**.\`
- \`If **so**, call me. If **not**, don't bother.\` — Wenn ja… wenn nicht…

### SO / NEITHER — „ich auch"
| Aussage | Zustimmung |
|---|---|
| \`I love jazz.\` | \`**So do I.**\` — Ich auch. |
| \`She has been to Peru.\` | \`**So have I.**\` |
| \`I can't swim.\` | \`**Neither can I.** / **Me neither.**\` |

> ⚠️ Inversion ist Pflicht: \`So **do I**\`, nicht \`*So I do\` (das bedeutet „in der Tat").

### DO statt der Verbgruppe
- \`He runs faster than I **do**.\` (= than I run)
- \`— Clean your room! — I already **have** (done).\`
- \`She might come, and if she **does**, tell her to wait.\`

### ONE / ONES statt des Substantivs
- \`Which cake? — The chocolate **one**.\`
- \`These shoes are worn out. I need new **ones**.\`

### Ellipse nach and / but / or
- \`She can sing and (she can) dance.\`
- \`He wanted to leave but (he) couldn't (leave).\`

### Umgangssprachliche Ellipse (Satzanfang)
- \`(Have you) Seen my keys?\` — Meine Schlüssel gesehen?
- \`(It) Sounds good.\` / \`(I) Told you so.\`

> 💡 Ellipsen zu verstehen ist der Schlüssel zum Hörverstehen bei natürlichem Tempo.`,
  },
  "eng-c2-hedging-nuance": {
    de: `## Hedging — die Kunst, nicht direkt zu sprechen

C2 heißt: **abschwächen**, **sich distanzieren** und Zurückhaltung zwischen den Zeilen lesen können.

### Akademisches Hedging
| Direkt | Vorsichtig |
|---|---|
| \`This proves…\` | \`This **would seem to suggest**…\` |
| \`Everyone knows…\` | \`**It is widely believed that**…\` |
| \`I think…\` | \`**It could be argued that**…\` |
| \`The results show…\` | \`The results **appear to** show…\` |

Abschwächer: \`arguably\`, \`to some extent\`, \`in a sense\`, \`more or less\`, \`broadly speaking\`.

### Britisches Understatement
| Gesagt | Gemeint |
|---|---|
| \`Not bad.\` | Ausgezeichnet! |
| \`I'm **not entirely** convinced.\` | Ich bin völlig anderer Meinung. |
| \`It's **a bit** expensive.\` | Es ist wahnsinnig teuer. |
| \`**With respect**, …\` | Jetzt zerlege ich Ihr Argument. |
| \`**Interesting** idea…\` | Die Idee ist eher mäßig. |

### Höfliche Kritik und Widerspruch
- \`I **see what you mean, but**…\` — Ich verstehe, aber…
- \`**I'm not sure I'd** go that far.\` — So weit würde ich nicht gehen.
- \`**You might want to** reconsider.\` — Das solltest du überdenken.
- \`**Correct me if I'm wrong, but**…\`

### Distanzierung durch Grammatik
- Past tense: \`I **was wondering** if you could help.\` — höflicher als \`I wonder\`.
- Continuous: \`I'**m hoping** you can join us.\`
- Passiv: \`**It has been decided** that…\` — Entscheidung ohne Verantwortlichen.
- Modal past: \`That **would have been** unwise.\` — sanfter Vorwurf.

> 💡 Ein C2-Sprecher hört den Unterschied zwischen \`It's not bad\` und \`It's not **bad**!\` — die Intonation kippt die Bewertung.`,
  },
};
