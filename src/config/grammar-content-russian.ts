import type { InterfaceLanguage } from "@/types";

/**
 * EN / ES / DE pedagogical notes for Russian A1–B1 grammar.
 * Cyrillic stays in the examples. Each interface language is a full
 * explanation, with a comparison to that language only.
 */
export const RUSSIAN_GRAMMAR_CONTENT: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "ru-a1-alphabet-phonetics": {
    en: `## Alphabet, sounds, and greetings

> **In this topic:** the 33 Cyrillic letters, hard and soft consonants, stress, and **ты / вы** greetings for university life.

### Why it matters
Russian is written in Cyrillic. A timetable, a name on a door, and a one-line message are unreadable until the letters are automatic. Several letters **look** like Latin letters and stand for a different sound. If you read **В** as B or **Н** as H, the word collapses.

Stress is usually not marked in ordinary text, but the stressed syllable is part of the word. The same spelling can be two words: **за́мок** (a castle or fortress) and **замо́к** (a lock). Greeting the wrong way is a social error on day one: **Привет** to a professor sounds too familiar.

### The rule

**Rule:** There are **33 letters**. A vowel letter does two jobs: it has its own sound, and it shows whether the consonant before it is **hard** or **soft**.

#### Letters that look like Latin letters
| Letter | Read it as | Do not read it as | Word |
|---|---|---|---|
| **А а** | a in *father* | a in *cat* | **да** |
| **В в** | v | B | **вы** |
| **Е е** | ye / e | — | **нет** |
| **К к** | k | — | **как** |
| **М м** | m | — | **мама** |
| **Н н** | n | H | **нет** |
| **О о** | o **when stressed** | always a full o | **он** |
| **Р р** | rolled r | P | **рука** |
| **С с** | s | C or k | **студент** |
| **Т т** | t | — | **тут** |
| **У у** | oo in *food* | Y | **утро** |
| **Х х** | kh, as in Scottish *loch* | ks | **хлеб** |

#### The other letters
| Letter | Sound cue | Word |
|---|---|---|
| **Б б** | b | **брат** |
| **Г г** | g in *go* | **город** |
| **Д д** | d | **дом** |
| **Ё ё** | yo, and this vowel is **always stressed** | **ёлка** |
| **Ж ж** | s in *measure*; always **hard** | **журнал** |
| **З з** | z | **завтра** |
| **И и** | ee | **или** |
| **Й й** | a short y, as in *boy* | **мой** |
| **Л л** | l | **лампа** |
| **П п** | p | **папа** |
| **Ф ф** | f | **фото** |
| **Ц ц** | ts; always **hard** | **центр** |
| **Ч ч** | ch; always **soft** | **час** |
| **Ш ш** | sh; always **hard** | **школа** |
| **Щ щ** | a longer, softer ш | **ещё** |
| **Ъ ъ** | no sound; a separator | **объект** |
| **Ы ы** | no English vowel: tongue back, lips **not** rounded | **мы**, **ты** |
| **Ь ь** | no sound; the consonant before it is soft | **день** |
| **Э э** | e in *met* | **это** |
| **Ю ю** | yu | **юг** |
| **Я я** | ya | **я** |

#### Hard and soft consonants
**Rule:** Many consonants come in a hard/soft pair. The **next vowel** tells you which one you heard.

| Signal | Vowels | Effect | Mini-pair |
|---|---|---|---|
| Hard | **а, о, у, э, ы** | the consonant stays hard | **ма** |
| Soft | **я, е, ё, ю, и** | the consonant is soft | **мя** |
| Soft sign | **ь** | softness, no vowel of its own | **день** |

At the **start** of a word, or after a vowel, **я / е / ё / ю** begin with a y-sound: **я** ≈ ya, **е** ≈ ye, **ё** ≈ yo, **ю** ≈ yu. **Это** starts with **э**, so there is no y.

**Rule:** **ж, ш, ц** are always hard. **ч, щ** are always soft. After **ж, ш, ч, щ, ц** spelling uses **и, а, у**, not **ы, я, ю**: **жить**, **час**, **чудо**. You still pronounce **ж/ш/ц** hard and **ч/щ** soft.

**Ъ** is rare at A1. It separates a prefix from **е / ё / ю / я**: **объект**, **съесть**. It is not a pause you invent in the middle of an ordinary word.

#### Stress and unstressed о
**Rule:** Stress may fall on any syllable. Textbooks sometimes mark it with an accent (**Москва́**). Street signs and messages do not.

Unstressed **о** is weaker and closer to **а**. **Москва́** is written with **о** and sounds close to «масква́». Write **о**. Do not “fix” the spelling to match the weak vowel.

In many books **ё** is printed as **е**. Learn the spoken word: **ещё**, **моё**, **чёрный**.

### How to use it
Read a new word aloud with the stress you heard in class. Do not spell it with English letter names. Choose the greeting from the **person**, not from the time of day. **Здравствуйте** works in the morning and in the evening.

| Situation | Form | Say this |
|---|---|---|
| Classmate, friend | **ты** | **Привет! Как дела?** |
| Professor, office, stranger | **вы** | **Здравствуйте!** |
| Leaving, neutral | — | **До свидания!** |
| Leaving, informal | — | **Пока!** |
| Thanks / please | — | **Спасибо.** / **Пожалуйста.** |

**Пожалуйста** is both “please” and the answer to **Спасибо** (“you’re welcome”).

A polite request starts with **Извините…** (“excuse me”). Then ask the question.

### Examples
- **Здравствуйте!** — Hello, polite.
- **Привет! Как дела? — Нормально.** — Hi! How are things? — Fine.
- **Извините, где аудитория?** — Excuse me, where is the classroom?
- **Спасибо. — Пожалуйста.** — Thank you. — You’re welcome.
- **До свидания!** — Goodbye.
- **мы** and **ми** are different words. **ты** and **ти** are not the same shape: the vowel of **ты** is **ы**.
- **Москва**, **он**, **дом** — write **о** even when an unstressed **о** sounds weak.

### Typical mistakes
- Reading shapes, not sounds: **НОС** is **нос** (nose), not “HOC”; **РОСТ** is **рост**, not “POCT”.
- Pronouncing **ы** as **и**. **Мы** is “we”; **ми** is not that word.
- Saying **Привет** or **Как тебя зовут?** to a lecturer. Use **Здравствуйте** and **вы**.
- Writing the reduced vowel: **Масква** instead of **Москва**.
- Ignoring **ь**: **день** without softness is a different pattern from **ден**.

### If your language is English
English has no letter for **ы**, and it does not write a hard/soft consonant contrast. “You” is one word; Russian splits it into **ты** (one person, close) and **вы** (one person, polite, or several people). English letter names will not help you pronounce Cyrillic. Treat **В Н Р С У Х** as new letters that only **look** familiar.

> 💡 Learn letters inside short living words (**да, нет, ты, мы, чай, школа**), then greet a classmate with **Привет** and a professor with **Здравствуйте**.

### Check yourself
1. What sounds are **В**, **Н**, **Р**, **С** in **ВНОС**? What English letters do the shapes suggest?
2. Which greeting fits a professor: **Привет** or **Здравствуйте**?
3. In **Москва**, which letter is written in the first syllable, and what happens to that vowel in speech?

**Answers:** 1) v-n-o-s. The shapes look like B, H, P, C. 2) **Здравствуйте**. 3) The letter is **о**; unstressed, it sounds closer to **а**. You still write **о**.`,

    es: `## Alfabeto, sonidos y saludos

> **En este tema:** las 33 letras cirílicas, consonantes duras y blandas, el acento tónico y los saludos con **ты / вы** en la universidad.

### Por qué importa
El ruso se escribe en cirílico. Sin esas letras no lees un horario, un nombre en la puerta ni un mensaje de una línea. Varias letras **se parecen** al latín y representan otro sonido. Si lees **В** como b o **Н** como h, la palabra se rompe.

El acento tónico casi nunca se marca en un texto normal, pero pertenece a la palabra. La misma grafía puede ser dos palabras: **за́мок** (castillo o fortaleza) y **замо́к** (cerradura). El saludo también se elige bien el primer día: **Привет** a un profesor suena demasiado familiar.

### La regla

**Regla:** El alfabeto tiene **33 letras**. Una vocal hace dos cosas: suena, y además indica si la consonante anterior es **dura** o **blanda**.

#### Letras que se parecen al latín
| Letra | Se lee | No se lee | Palabra |
|---|---|---|---|
| **А а** | a de *padre* | — | **да** |
| **В в** | v de *vida* | b | **вы** |
| **Е е** | ye / e | — | **нет** |
| **К к** | k | — | **как** |
| **М м** | m | — | **мама** |
| **Н н** | n de *no* | h | **нет** |
| **О о** | o **solo con acento** | siempre o plena | **он** |
| **Р р** | r vibrante, como *perro* | p | **рука** |
| **С с** | s | c de *casa* | **студент** |
| **Т т** | t | — | **тут** |
| **У у** | u de *tú* | y | **утро** |
| **Х х** | j de *jugo* | ks | **хлеб** |

#### El resto de las letras
| Letra | Pista | Palabra |
|---|---|---|
| **Б б** | b | **брат** |
| **Г г** | g de *gato* | **город** |
| **Д д** | d | **дом** |
| **Ё ё** | yo; esta vocal **siempre** lleva el acento | **ёлка** |
| **Ж ж** | como la j francesa de *journal*; siempre **dura** | **журнал** |
| **З з** | z sonora, como la s de *desde* | **завтра** |
| **И и** | i | **или** |
| **Й й** | y breve, como en *yo* al final de sílaba | **мой** |
| **Л л** | l | **лампа** |
| **П п** | p | **папа** |
| **Ф ф** | f | **фото** |
| **Ц ц** | ts; siempre **dura** | **центр** |
| **Ч ч** | ch; siempre **blanda** | **час** |
| **Ш ш** | sh; siempre **dura** | **школа** |
| **Щ щ** | más larga y más blanda que **ш** | **ещё** |
| **Ъ ъ** | no suena; separa | **объект** |
| **Ы ы** | no hay equivalente: lengua atrás, labios **sin** redondear | **мы**, **ты** |
| **Ь ь** | no suena; ablanda la consonante anterior | **день** |
| **Э э** | e abierta | **это** |
| **Ю ю** | yu | **юг** |
| **Я я** | ya | **я** |

#### Consonantes duras y blandas
**Regla:** Muchas consonantes forman pareja dura/blanda. La **vocal siguiente** te dice cuál oíste.

| Señal | Vocales | Efecto | Par mínimo |
|---|---|---|---|
| Dura | **а, о, у, э, ы** | la consonante queda dura | **ма** |
| Blanda | **я, е, ё, ю, и** | la consonante es blanda | **мя** |
| Signo blando | **ь** | blandura, sin vocal propia | **день** |

Al **inicio** de palabra, o después de vocal, **я / е / ё / ю** empiezan con sonido de y: **я** ≈ ya, **е** ≈ ye, **ё** ≈ yo, **ю** ≈ yu. **Это** empieza por **э**: no hay y.

**Regla:** **ж, ш, ц** son siempre duras. **ч, щ** son siempre blandas. Detrás de **ж, ш, ч, щ, ц** se escribe **и, а, у**, no **ы, я, ю**: **жить**, **час**, **чудо**. Aun así, **ж/ш/ц** se pronuncian duras y **ч/щ** blandas.

**Ъ** es poco frecuente en A1. Separa un prefijo de **е / ё / ю / я**: **объект**, **съесть**. No es una pausa que se inventa en medio de una palabra cualquiera.

#### Acento y о átona
**Regla:** El acento puede caer en cualquier sílaba. Los manuales a veces lo marcan (**Москва́**). Los letreros y los mensajes, no.

La **о** átona se debilita y se acerca a **а**. **Москва́** se escribe con **о** y suena cerca de «масква́». Se escribe **о**. No “corrijas” la ortografía para copiar la vocal débil.

En muchos libros **ё** se imprime como **е**. Aprende la palabra hablada: **ещё**, **моё**, **чёрный**.

### Cómo se usa
Lee cada palabra nueva en voz alta con el acento que oíste en clase. No uses los nombres de las letras españolas. El saludo depende de la **persona**, no de la hora. **Здравствуйте** vale por la mañana y por la noche.

| Situación | Forma | Di esto |
|---|---|---|
| Compañero, amigo | **ты** | **Привет! Как дела?** |
| Profesor, oficina, desconocido | **вы** | **Здравствуйте!** |
| Despedida neutra | — | **До свидания!** |
| Despedida informal | — | **Пока!** |
| Gracias / por favor | — | **Спасибо.** / **Пожалуйста.** |

**Пожалуйста** es “por favor” y también la respuesta a **Спасибо** (“de nada”).

Una petición cortés empieza por **Извините…** (“perdón / disculpe”). Después va la pregunta.

### Ejemplos
- **Здравствуйте!** — Hola, formal, a cualquier hora.
- **Привет! Как дела? — Нормально.** — ¡Hola! ¿Qué tal? — Bien.
- **Извините, где аудитория?** — Disculpe, ¿dónde está el aula?
- **Спасибо. — Пожалуйста.** — Gracias. — De nada.
- **До свидания!** — Adiós.
- **мы** y **ми** son distintas. La vocal de **ты** es **ы**, no **и**.
- **Москва**, **он**, **дом** — se escribe **о** aunque una **о** átona suene débil.

### Errores típicos
- Leer el dibujo, no el sonido: **НОС** es **нос** (nariz), no “hoc”; **РОСТ** es **рост**, no “poct”.
- Pronunciar **ы** como **и**. **Мы** significa “nosotros”.
- Decir **Привет** o **Как тебя зовут?** a un profesor. Con él: **Здравствуйте** y **вы**.
- Escribir la vocal reducida: **Масква** en lugar de **Москва**.
- Olvidar **ь**: **день** sin blandura no es la misma forma.

### Si tu lengua es el español
La **р** vibrante de *perro* te ayuda con **Р**: no la leas como p. La **j** de *jugo* se parece a **Х**, no a **Ж**. **Ж** no existe en español: no es la j ni la ll. **Ñ** no es **й**; **й** es una y breve, como en *rey*. El español mantiene las vocales estables; el ruso debilita la **о** átona. **Ы** no tiene equivalente: no redondees los labios como en la u francesa. Tu *tú* de confianza no autoriza **ты** con un profesor: ahí corresponde **вы**.

> 💡 Aprende las letras dentro de palabras cortas y reales (**да, нет, ты, мы, чай, школа**). Saluda a un compañero con **Привет** y a un profesor con **Здравствуйте**.

### Comprueba
1. ¿Qué sonidos son **В**, **Н**, **Р**, **С** en **ВНОС**? ¿A qué letras latinas se parecen?
2. ¿Qué saludo corresponde a un profesor: **Привет** o **Здравствуйте**?
3. En **Москва**, ¿qué letra se escribe en la primera sílaba y qué le pasa a esa vocal al hablar?

**Respuestas:** 1) v-n-o-s. Las formas recuerdan b, h, p, c. 2) **Здравствуйте**. 3) Se escribe **о**; sin acento se acerca a **а**. La ortografía sigue siendo **о**.`,

    de: `## Alphabet, Laute und Begrüßungen

> **In diesem Thema:** die 33 kyrillischen Buchstaben, harte und weiche Konsonanten, die Betonung und Begrüßungen mit **ты / вы** an der Universität.

### Warum das wichtig ist
Russisch wird kyrillisch geschrieben. Einen Stundenplan, einen Namen an der Tür oder eine kurze Nachricht lesen Sie erst, wenn die Buchstaben sitzen. Manche Buchstaben **sehen** lateinisch aus und stehen für einen anderen Laut. Wer **В** als B und **Н** als H liest, zerstört das Wort.

Die Betonung steht im normalen Text meist nicht da, gehört aber zum Wort. Dieselbe Schreibung kann zwei Wörter sein: **за́мок** (Burg, Festung) und **замо́к** (Schloss an der Tür). Auch der Gruß ist am ersten Tag eine Entscheidung: **Привет** zur Professorin klingt zu vertraut.

### Die Regel

**Regel:** Das Alphabet hat **33 Buchstaben**. Ein Vokalbuchstabe tut zwei Dinge: Er hat einen eigenen Laut, und er zeigt, ob der Konsonant davor **hart** oder **weich** ist.

#### Buchstaben, die lateinisch aussehen
| Buchstabe | So lesen | Nicht so lesen | Wort |
|---|---|---|---|
| **А а** | a in *Vater* | — | **да** |
| **В в** | w in *Wasser* | B, und nicht f | **вы** |
| **Е е** | je / e | — | **нет** |
| **К к** | k | — | **как** |
| **М м** | m | — | **мама** |
| **Н н** | n | H | **нет** |
| **О о** | o **nur betont** | immer ein volles o | **он** |
| **Р р** | gerolltes r | P | **рука** |
| **С с** | s in *Haus* | z oder k | **студент** |
| **Т т** | t | — | **тут** |
| **У у** | u | y oder ü | **утро** |
| **Х х** | Ach-Laut | ks | **хлеб** |

#### Die übrigen Buchstaben
| Buchstabe | Laut | Wort |
|---|---|---|
| **Б б** | b | **брат** |
| **Г г** | g in *gut* | **город** |
| **Д д** | d | **дом** |
| **Ё ё** | jo; dieser Vokal ist **immer betont** | **ёлка** |
| **Ж ж** | stimmhaftes sch, wie in *Journal*; immer **hart** | **журнал** |
| **З з** | s in *Sonne* (stimmhaft) | **завтра** |
| **И и** | i | **или** |
| **Й й** | kurzes j, wie in *Mai* | **мой** |
| **Л л** | l | **лампа** |
| **П п** | p | **папа** |
| **Ф ф** | f | **фото** |
| **Ц ц** | z in *Zeit*; immer **hart** | **центр** |
| **Ч ч** | tsch; immer **weich** | **час** |
| **Ш ш** | sch, dunkler und härter als deutsches sch; immer **hart** | **школа** |
| **Щ щ** | länger und weicher als **ш** | **ещё** |
| **Ъ ъ** | kein Laut; Trennzeichen | **объект** |
| **Ы ы** | kein ü: Zunge hinten, Lippen **nicht** gerundet | **мы**, **ты** |
| **Ь ь** | kein Laut; der Konsonant davor ist weich | **день** |
| **Э э** | offenes e | **это** |
| **Ю ю** | ju | **юг** |
| **Я я** | ja | **я** |

#### Harte und weiche Konsonanten
**Regel:** Viele Konsonanten bilden ein hartes und ein weiches Paar. Der **folgende Vokal** zeigt, welches Glied Sie hören.

| Signal | Vokale | Wirkung | Minimalpaar |
|---|---|---|---|
| Hart | **а, о, у, э, ы** | der Konsonant bleibt hart | **ма** |
| Weich | **я, е, ё, ю, и** | der Konsonant ist weich | **мя** |
| Weichheitszeichen | **ь** | Weichheit, kein eigener Vokal | **день** |

Am **Wortanfang** und nach einem Vokal beginnen **я / е / ё / ю** mit einem j-Laut: **я** ≈ ja, **е** ≈ je, **ё** ≈ jo, **ю** ≈ ju. **Это** beginnt mit **э**, also ohne j.

**Regel:** **ж, ш, ц** sind immer hart. **ч, щ** sind immer weich. Nach **ж, ш, ч, щ, ц** schreibt man **и, а, у**, nicht **ы, я, ю**: **жить**, **час**, **чудо**. Ausgesprochen bleiben **ж/ш/ц** hart und **ч/щ** weich.

**Ъ**, das Härtezeichen, ist auf A1 selten. Es trennt ein Präfix von **е / ё / ю / я**: **объект**, **съесть**. Es ist keine Pause, die man in ein gewöhnliches Wort einbaut.

#### Betonung und unbetontes о
**Regel:** Die Betonung kann auf jeder Silbe liegen. Lehrbücher markieren sie manchmal (**Москва́**). Schilder und Nachrichten tun das nicht.

Unbetontes **о** wird schwächer und nähert sich **а**. **Москва́** schreibt man mit **о**, es klingt aber nahe an «масква́». Geschrieben wird **о**. Passen Sie die Schreibung nicht an den schwachen Vokal an.

In vielen Texten steht **е** statt **ё**. Lernen Sie das gesprochene Wort: **ещё**, **моё**, **чёрный**.

### So verwendet man es
Lesen Sie ein neues Wort laut, mit der Betonung aus dem Unterricht. Die deutschen Buchstabennamen helfen nicht. Der Gruß richtet sich nach der **Person**, nicht nach der Uhrzeit. **Здравствуйте** gilt morgens und abends.

| Situation | Form | So sagen Sie |
|---|---|---|
| Kommilitone, Freund | **ты** | **Привет! Как дела?** |
| Lehrperson, Amt, Fremde | **вы** | **Здравствуйте!** |
| Abschied, neutral | — | **До свидания!** |
| Abschied, informell | — | **Пока!** |
| Danke / bitte | — | **Спасибо.** / **Пожалуйста.** |

**Пожалуйста** ist „bitte“ und zugleich die Antwort auf **Спасибо** („gern geschehen“).

Eine höfliche Bitte beginnt mit **Извините…** („entschuldigen Sie“). Danach kommt die Frage.

### Beispiele
- **Здравствуйте!** — Guten Tag, formell, zu jeder Tageszeit.
- **Привет! Как дела? — Нормально.** — Hallo! Wie geht’s? — Es geht.
- **Извините, где аудитория?** — Entschuldigen Sie, wo ist der Hörsaal?
- **Спасибо. — Пожалуйста.** — Danke. — Gern.
- **До свидания!** — Auf Wiedersehen.
- **мы** und **ми** sind verschiedene Wörter. Der Vokal in **ты** ist **ы**.
- **Москва**, **он**, **дом** — man schreibt **о**, auch wenn unbetontes **о** schwach klingt.

### Typische Fehler
- Die Form lesen statt des Lauts: **НОС** ist **нос** (Nase), nicht „HOC“; **РОСТ** ist **рост**, nicht „POCT“.
- **ы** wie **и** sprechen. **Мы** heißt „wir“.
- Zur Lehrperson **Привет** oder **Как тебя зовут?** sagen. Richtig: **Здравствуйте** und **вы**.
- Den reduzierten Vokal schreiben: **Масква** statt **Москва**.
- **ь** weglassen: **день** ohne Weichheit ist nicht dasselbe Muster.

### Wenn Ihre Sprache Deutsch ist
**В** entspricht dem W in *Wasser*, nicht dem B und nicht dem F in *Vater*. **Ф** ist das F. **Ц** ist das Z in *Zeit*, nicht das stimmhafte S. **Х** ist der Ach-Laut, nicht „ks“. Deutsches *sch* liegt nahe bei **ш**, das russische **ш** ist aber dunkler und immer hart. **Ы** ist kein **ü**: die Lippen bleiben ungerundet. Im Deutschen liegt die Betonung oft auf der ersten Silbe; im Russischen ist sie frei und steht meist nicht im Text. Das deutsche „Sie“ trifft **вы** gut; **du** trifft **ты** nur unter Gleichgestellten, nicht gegenüber der Lehrperson.

> 💡 Lernen Sie die Buchstaben in kurzen echten Wörtern (**да, нет, ты, мы, чай, школа**). Begrüßen Sie Kommilitonen mit **Привет** und Lehrpersonen mit **Здравствуйте**.

### Prüfen Sie sich
1. Welche Laute sind **В**, **Н**, **Р**, **С** in **ВНОС**? An welche lateinischen Buchstaben erinnern die Formen?
2. Welcher Gruß passt zur Professorin: **Привет** oder **Здравствуйте**?
3. Welcher Buchstabe steht in der ersten Silbe von **Москва**, und was passiert mit diesem Vokal in der Aussprache?

**Antworten:** 1) w-n-o-s. Die Formen erinnern an B, H, P, C. 2) **Здравствуйте**. 3) Geschrieben wird **о**; unbetont klingt es näher an **а**. Die Schreibung bleibt **о**.`,
  },

  "ru-a1-identity-eto": {
    en: `## Meeting people: это, кто, что

> **In this topic:** say your name, say what you are, say where you are from, and point to a person or a thing with **это**.

### Why it matters
The first real conversation at a preparatory faculty is a name, a country, and a role: student or professor. Russian builds these sentences **without** a present-tense verb “to be”. If you insert **есть**, you sound like you are translating “I am” word for word.

You also need two question words that English splits the same way: **кто** for a person, **что** for a thing. **Это** points at either.

### The rule

**Rule:** In the present, a classification or identity has **no** verb. The pattern is **Я + noun**.

| English shape | Russian shape | Example |
|---|---|---|
| I am a student | **Я** + noun | **Я студент.** |
| She is a student | **Она** + noun | **Она студентка.** |
| He is a professor | **Он** + noun | **Он преподаватель.** |
| This is Anna | **Это** + name or noun | **Это Анна.** |

There is no article. Do not add “a” or “the”.

**Rule:** Your name uses a fixed frame. The name itself stays in the dictionary form.

| To whom | Question | Answer |
|---|---|---|
| A professor, a stranger, several people | **Как вас зовут?** | **Меня зовут Амина.** |
| A classmate, after you are on **ты** | **Как тебя зовут?** | **Меня зовут Карлос.** |

**Меня зовут** literally means “they call me”. Memorize it as one piece. Do not rebuild it as “I am called” with **я**.

**Rule:** Origin is also a chunk at A1: **Я из** + the country form you learned with the phrase. Do not invent an ending.

| Phrase | Gloss |
|---|---|
| **Я из Китая.** | I am from China. |
| **Я из Турции.** | I am from Turkey. |
| **Я из Египта.** | I am from Egypt. |
| **Я из Бразилии.** | I am from Brazil. |
| **Я из Германии.** | I am from Germany. |

The question is **Откуда вы?** (polite) or **Откуда ты?**

**Rule:** **Это** does not change. It introduces a person or a thing. **Кто** asks about a person. **Что** asks about a thing.

| You see | You ask | You answer |
|---|---|---|
| a person | **Кто это?** | **Это мой друг.** / **Это преподаватель.** |
| a thing | **Что это?** | **Это учебник.** / **Это карта.** |

**Он** and **она** come **after** you know who it is, when you add a fact: **Это Анна. Она студентка.**

Profession nouns often show the person’s gender: **студент / студентка**. Some titles have one form at A1 (**преподаватель**). Match **студент / студентка** to the person, not to the word **я**.

### How to use it
Stack three short sentences. They are enough for an introduction.

1. **Меня зовут** + name.
2. **Я** + **студент** or **студентка**.
3. **Я из** + country.

Then point: **Это** + person. Add **Он / Она** + role.

Polite reaction when you are introduced: **Очень приятно!** (“Nice to meet you.”)

Yes/no questions use intonation, not an auxiliary: **Вы студент?** — **Да, я студент.** / **Нет, я студентка.**

### Examples
- **Здравствуйте! Меня зовут Мария. Я из Бразилии.**
- **Вы новая студентка? — Да.**
- **Привет! Меня зовут Ли. А тебя? — Меня зовут Омар.**
- **Я из Египта. Я студент.**
- **Кто это? — Это Анна. Она студентка.**
- **Что это? — Это учебник.**
- **Это ваш преподаватель, Иван Петрович. — Очень приятно!**

### Typical mistakes
- **Я есть студент.** The present identity sentence has no **есть**.
- **Я зовут Анна.** The frame is **Меня зовут Анна.**
- **Как тебя зовут?** to a professor. Use **Как вас зовут?**
- **Что это?** about a person, or **Кто это?** about a textbook.
- Adding *a/the*: there is nothing to put before **студент**.

### If your language is English
English needs **am / is / are** in “I am a student” and “This is Anna”. Russian drops that verb in the present. “They call me” is the name frame; do not look for “My name is”. **Who / what** map cleanly onto **кто / что**, but **this is** is one unchanging word, **это**, for people and things. Articles have no slot in these sentences.

> 💡 Memorize five frames and stop translating “am”: **Меня зовут…**, **Я студент / студентка**, **Я из…**, **Это…**, **Кто это? / Что это?**

### Check yourself
1. What is the Russian sentence for “I am a student” (a man speaking)?
2. A textbook is on the desk. Do you ask **Кто это?** or **Что это?**
3. A professor asks your name. Which question do you answer: **Как тебя зовут?** or **Как вас зовут?**

**Answers:** 1) **Я студент.** 2) **Что это?** 3) **Как вас зовут?**`,

    es: `## Presentaciones: это, кто, что

> **En este tema:** decir tu nombre, qué eres, de dónde eres, y señalar a una persona o a una cosa con **это**.

### Por qué importa
La primera conversación real en la facultad preparatoria es un nombre, un país y un papel: estudiante o profesor. El ruso construye estas frases **sin** verbo “ser” en presente. Si metes **есть**, se oye que estás traduciendo “soy” palabra por palabra.

También necesitas dos interrogativos: **кто** para una persona, **что** para una cosa. **Это** señala a las dos.

### La regla

**Regla:** En presente, una clasificación o una identidad **no lleva verbo**. El modelo es **Я + sustantivo**.

| Forma española | Forma rusa | Ejemplo |
|---|---|---|
| Soy estudiante | **Я** + sustantivo | **Я студент.** |
| Es estudiante (ella) | **Она** + sustantivo | **Она студентка.** |
| Es profesor | **Он** + sustantivo | **Он преподаватель.** |
| Esta es Anna | **Это** + nombre | **Это Анна.** |

No hay artículo. No pongas nada delante de **студент**.

**Regla:** El nombre va en un marco fijo. El nombre propio se queda en la forma de diccionario.

| A quién | Pregunta | Respuesta |
|---|---|---|
| Profesor, desconocido, varias personas | **Как вас зовут?** | **Меня зовут Амина.** |
| Compañero, ya en **ты** | **Как тебя зовут?** | **Меня зовут Карлос.** |

**Меня зовут** significa literalmente “me llaman”. Apréndelo como una pieza. No lo reconstruyas con **я** en el papel de sujeto.

**Regla:** El origen, en A1, también es una pieza: **Я из** + la forma del país que aprendiste con la frase. No inventes una terminación.

| Frase | Sentido |
|---|---|
| **Я из Китая.** | Soy de China. |
| **Я из Турции.** | Soy de Turquía. |
| **Я из Египта.** | Soy de Egipto. |
| **Я из Бразилии.** | Soy de Brasil. |
| **Я из Испании.** | Soy de España. |

La pregunta es **Откуда вы?** (cortés) u **Откуда ты?**

**Regla:** **Это** no cambia. Presenta a una persona o a una cosa. **Кто** pregunta por una persona. **Что** pregunta por una cosa.

| Ves | Preguntas | Respondes |
|---|---|---|
| una persona | **Кто это?** | **Это мой друг.** / **Это преподаватель.** |
| una cosa | **Что это?** | **Это учебник.** / **Это карта.** |

**Он** y **она** llegan **después**, cuando ya sabes quién es y añades un dato: **Это Анна. Она студентка.**

Muchos nombres de oficio muestran el género de la persona: **студент / студентка**. Algunos cargos tienen una sola forma en A1 (**преподаватель**). **Студент / студентка** concuerda con la persona, no con la palabra **я**.

### Cómo se usa
Bastan tres frases cortas para presentarte.

1. **Меня зовут** + nombre.
2. **Я** + **студент** o **студентка**.
3. **Я из** + país.

Luego señalas: **Это** + persona. Añades **Он / Она** + papel.

Reacción cortés al ser presentado: **Очень приятно!** (“Mucho gusto.”)

Las preguntas de sí/no van por entonación, sin auxiliar: **Вы студент?** — **Да, я студент.** / **Нет, я студентка.**

### Ejemplos
- **Здравствуйте! Меня зовут Мария. Я из Бразилии.**
- **Вы новая студентка? — Да.**
- **Привет! Меня зовут Ли. А тебя? — Меня зовут Омар.**
- **Я из Египта. Я студент.**
- **Кто это? — Это Анна. Она студентка.**
- **Что это? — Это учебник.**
- **Это ваш преподаватель, Иван Петрович. — Очень приятно!**

### Errores típicos
- **Я есть студент.** En presente esa frase de identidad no lleva **есть**.
- **Я зовут Анна.** El marco es **Меня зовут Анна.**
- **Как тебя зовут?** a un profesor. Corresponde **Как вас зовут?**
- **Что это?** ante una persona, o **Кто это?** ante un libro.
- Buscar un artículo delante de **студент**.

### Si tu lengua es el español
*Me llamo Ana* es reflexivo (*yo me llamo*). El ruso no usa **я** como sujeto de ese marco: **Меня зовут Анна.** *Soy estudiante* necesita **ser**; el ruso de presente lo omite: **Я студент / Я студентка.** *Esto es* y *este es* se reparten en español; para presentar, el ruso tiene una sola palabra invariable, **это**, tanto para personas como para cosas. El género aparece en el sustantivo (**студент / студентка**), no en **это**.

> 💡 Memoriza cinco marcos y deja de traducir “soy”: **Меня зовут…**, **Я студент / студентка**, **Я из…**, **Это…**, **Кто это? / Что это?**

### Comprueba
1. ¿Cómo dice un hombre “soy estudiante”?
2. Hay un libro sobre la mesa. ¿Preguntas **Кто это?** o **Что это?**
3. Un profesor pregunta tu nombre. ¿Respondes a **Как тебя зовут?** o a **Как вас зовут?**

**Respuestas:** 1) **Я студент.** 2) **Что это?** 3) **Как вас зовут?**`,

    de: `## Kennenlernen: это, кто, что

> **In diesem Thema:** den Namen sagen, sagen, wer Sie sind, sagen, woher Sie kommen, und mit **это** auf eine Person oder eine Sache zeigen.

### Warum das wichtig ist
Das erste echte Gespräch an der Vorbereitungsschule besteht aus Name, Land und Rolle: Studentin oder Lehrperson. Russisch baut diese Sätze **ohne** ein Verb „sein“ im Präsens. Wer **есть** einsetzt, übersetzt „ich bin“ Wort für Wort.

Dazu brauchen Sie zwei Fragewörter: **кто** für eine Person, **что** für eine Sache. **Это** zeigt auf beides.

### Die Regel

**Regel:** Im Präsens hat eine Einordnung **kein** Verb. Das Muster ist **Я + Substantiv**.

| Deutsche Form | Russische Form | Beispiel |
|---|---|---|
| Ich bin Student | **Я** + Substantiv | **Я студент.** |
| Sie ist Studentin | **Она** + Substantiv | **Она студентка.** |
| Er ist Dozent | **Он** + Substantiv | **Он преподаватель.** |
| Das ist Anna | **Это** + Name | **Это Анна.** |

Es gibt keinen Artikel. Vor **студент** steht nichts.

**Regel:** Der Name steht in einem festen Rahmen. Der Name selbst bleibt in der Wörterbuchform.

| An wen | Frage | Antwort |
|---|---|---|
| Lehrperson, Fremde, mehrere Leute | **Как вас зовут?** | **Меня зовут Амина.** |
| Kommilitone, schon beim **ты** | **Как тебя зовут?** | **Меня зовут Карлос.** |

**Меня зовут** heißt wörtlich „man nennt mich“. Lernen Sie es als ein Stück. Bauen Sie es nicht mit **я** als Subjekt neu.

**Regel:** Die Herkunft ist auf A1 ebenfalls ein festes Stück: **Я из** + die Landesform, die Sie mit dem Satz gelernt haben. Erfinden Sie keine Endung.

| Satz | Bedeutung |
|---|---|
| **Я из Китая.** | Ich komme aus China. |
| **Я из Турции.** | Ich komme aus der Türkei. |
| **Я из Египта.** | Ich komme aus Ägypten. |
| **Я из Бразилии.** | Ich komme aus Brasilien. |
| **Я из Германии.** | Ich komme aus Deutschland. |

Die Frage lautet **Откуда вы?** (höflich) oder **Откуда ты?**

**Regel:** **Это** verändert sich nicht. Es stellt eine Person oder eine Sache vor. **Кто** fragt nach einer Person. **Что** fragt nach einer Sache.

| Sie sehen | Sie fragen | Sie antworten |
|---|---|---|
| eine Person | **Кто это?** | **Это мой друг.** / **Это преподаватель.** |
| eine Sache | **Что это?** | **Это учебник.** / **Это карта.** |

**Он** und **она** kommen **danach**, wenn Sie wissen, wer das ist, und eine Angabe ergänzen: **Это Анна. Она студентка.**

Viele Berufsbezeichnungen zeigen das Genus der Person: **студент / студентка**. Manche Funktionen haben auf A1 nur eine Form (**преподаватель**). **Студент / студентка** richtet sich nach der Person, nicht nach dem Wort **я**.

### So verwendet man es
Drei kurze Sätze reichen für eine Vorstellung.

1. **Меня зовут** + Name.
2. **Я** + **студент** oder **студентка**.
3. **Я из** + Land.

Dann zeigen Sie: **Это** + Person. Danach **Он / Она** + Rolle.

Höfliche Reaktion bei einer Vorstellung: **Очень приятно!** („Freut mich.“)

Ja/Nein-Fragen laufen über die Melodie, ohne Hilfsverb: **Вы студент?** — **Да, я студент.** / **Нет, я студентка.**

### Beispiele
- **Здравствуйте! Меня зовут Мария. Я из Бразилии.**
- **Вы новая студентка? — Да.**
- **Привет! Меня зовут Ли. А тебя? — Меня зовут Омар.**
- **Я из Египта. Я студент.**
- **Кто это? — Это Анна. Она студентка.**
- **Что это? — Это учебник.**
- **Это ваш преподаватель, Иван Петрович. — Очень приятно!**

### Typische Fehler
- **Я есть студент.** Im Präsens steht in diesem Identitätssatz kein **есть**.
- **Я зовут Анна.** Der Rahmen ist **Меня зовут Анна.**
- **Как тебя зовут?** zur Lehrperson. Richtig ist **Как вас зовут?**
- **Что это?** bei einer Person, oder **Кто это?** bei einem Lehrbuch.
- Einen Artikel vor **студент** suchen.

### Wenn Ihre Sprache Deutsch ist
*Ich heiße Anna* und *Mein Name ist Anna* sind nicht das russische Muster. Russisch sagt **Меня зовут Анна.** *Ich bin Student* braucht **sein**; im russischen Präsens fällt das Verb weg: **Я студент.** *Das ist* entspricht dem unveränderlichen **это**, für Personen und für Sachen. **Кто** und **что** liegen nahe bei *wer* und *was*. Artikel haben in diesen Sätzen keinen Platz.

> 💡 Lernen Sie fünf Rahmen und übersetzen Sie „bin“ nicht mit: **Меня зовут…**, **Я студент / студентка**, **Я из…**, **Это…**, **Кто это? / Что это?**

### Prüfen Sie sich
1. Wie sagt ein Mann „Ich bin Student“?
2. Auf dem Tisch liegt ein Lehrbuch. Fragen Sie **Кто это?** oder **Что это?**
3. Eine Lehrperson fragt nach Ihrem Namen. Antworten Sie auf **Как тебя зовут?** oder auf **Как вас зовут?**

**Antworten:** 1) **Я студент.** 2) **Что это?** 3) **Как вас зовут?**`,
  },

  "ru-a1-noun-gender": {
    en: `## Noun gender in the classroom

> **In this topic:** masculine, feminine, and neuter, and the words **мой / моя / моё** that show gender in speech.

### Why it matters
Every Russian noun has a grammatical gender. It is not the “sex” of a table or a window. Gender decides the word you put in front of it. English speakers who say **мой** for every object are wrong half the time: **мой учебник** is right, **моя тетрадь** is right, and **мой тетрадь** is not a sentence you can use.

Later, adjective endings follow the same gender. If you learn the noun together with **мой / моя / моё** now, those endings have a place to land.

### The rule

**Rule:** Guess gender from the **ending in the dictionary form**, then check the words that do not follow the guess.

| Gender | Typical ending | Classroom nouns |
|---|---|---|
| Masculine | consonant, or **-й** | **стол**, **учебник**, **словарь**, **музей** |
| Feminine | **-а / -я**; also many in **-ь** | **книга**, **ручка**, **аудитория**, **тетрадь** |
| Neuter | **-о / -е** | **окно**, **задание**, **общежитие** |

**Rule:** **-ь** is **not** a gender. It can be masculine or feminine. Learn those nouns as a pair with **мой** or **моя**.

| Noun | Gender | Pair to memorize |
|---|---|---|
| **день** | masculine | **этот день** |
| **словарь** | masculine | **мой словарь** |
| **тетрадь** | feminine | **моя тетрадь** |
| **дверь** | feminine | **эта дверь** |

A few human nouns end in **-а / -я** and are **masculine**: **папа**, **дядя**. Say **мой папа**, not **моя папа**.

**Rule:** The possessive agrees with the **noun**, not with the speaker.

| | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| my | **мой** | **моя** | **моё** | **мои** |
| your (**ты**) | **твой** | **твоя** | **твоё** | **твои** |
| your (**вы**) | **ваш** | **ваша** | **ваше** | **ваши** |

- **мой учебник**, **мой стол**, **мой словарь**
- **моя тетрадь**, **моя ручка**, **моя книга**, **моя аудитория**
- **моё окно**, **моё задание**
- **мои книги**, **мои друзья**

**Это** from the previous topic does **not** agree. It means “this is / it is”: **Это книга.** The agreeing words are **этот / эта / это** (“this” + noun):

| Gender | “this” + noun | Example |
|---|---|---|
| Masculine | **этот** | **этот учебник** |
| Feminine | **эта** | **эта тетрадь** |
| Neuter | **это** | **это окно** |
| Plural | **эти** | **эти книги** |

So **Это книга** means “This is a book.” **Эта книга** means “this book”. Both are correct. They are different jobs.

### How to use it
When you learn a classroom noun, write it with **мой / моя / моё** in your notes. Ask for an object with the polite possessive: **Извините, это ваш учебник?** The answer keeps the gender: **Нет. Мой учебник здесь. А это моя тетрадь.**

Plural **мои / ваши** is for any gender once the noun is plural: **мои книги**, **мои словари**, **мои окна**.

Do not try to decline every adjective yet. At A1 the goal is to **hear and produce** the right possessive with the nouns you already use.

### Examples
- **Это мой учебник.** — This is my textbook.
- **Это моя тетрадь.** — This is my notebook.
- **Это моё окно.** — This is my window.
- **Где моя ручка?** — Where is my pen?
- **Извините, это ваш словарь?** — Excuse me, is this your dictionary?
- **Ваша ручка под учебником.** — Your pen is under the textbook.
- **Это папа. Мой папа дома.** — This is Dad. My dad is at home.
- **Это аудитория. Моя аудитория там.** — This is a classroom. My classroom is over there.

### Typical mistakes
- **Мой тетрадь**, **моя учебник**, **мой окно**. The possessive followed the English word “my”, not the noun.
- Treating every **-ь** noun as feminine. **Словарь** is masculine: **мой словарь**.
- Treating every **-а** noun as feminine. **Папа** is masculine: **мой папа**.
- Changing **это** when it means “this is”: **Эта это книга** is not the pattern. Say **Это книга** or **Эта книга**.
- Assuming a neuter noun is “no gender” and pairing it with **мой**. **Окно** takes **моё**.

### If your language is English
English almost never marks gender on objects. “My book” and “my window” use the same word. Russian chooses **моя книга** and **моё окно**. Natural sex still matters for people (**он / она**, **студент / студентка**), but a table is masculine only because the grammar says so. There is no article to carry the gender, so the possessive and, later, the adjective do that work.

> 💡 Learn pairs, not a label in the margin: **мой учебник**, **моя тетрадь**, **моё окно**.

### Check yourself
1. Choose **мой / моя / моё** for **тетрадь**, **окно**, and **словарь**.
2. Why is it **мой папа**, even though the noun ends in **-а**?
3. What is the difference between **Это книга** and **Эта книга**?

**Answers:** 1) **моя тетрадь**, **моё окно**, **мой словарь**. 2) **Папа** is a masculine noun for a person; **-а** is not only feminine. 3) **Это книга** = “This is a book.” **Эта книга** = “this book.”`,

    es: `## El género de los sustantivos en el aula

> **En este tema:** masculino, femenino y neutro, y las palabras **мой / моя / моё**, que muestran el género en la frase.

### Por qué importa
Cada sustantivo ruso tiene género gramatical. No es el “sexo” de una mesa o de una ventana. El género decide la palabra que va delante. Quien dice **мой** para todo acierta solo a medias: **мой учебник** está bien, **моя тетрадь** está bien, y **мой тетрадь** no se dice.

Más adelante las terminaciones del adjetivo siguen ese mismo género. Si ahora aprendes el sustantivo junto con **мой / моя / моё**, esas terminaciones tienen dónde apoyarse.

### La regla

**Regla:** Adivina el género por la **terminación de la forma de diccionario** y comprueba las palabras que no obedecen.

| Género | Terminación típica | Sustantivos del aula |
|---|---|---|
| Masculino | consonante, o **-й** | **стол**, **учебник**, **словарь**, **музей** |
| Femenino | **-а / -я**; también muchos en **-ь** | **книга**, **ручка**, **аудитория**, **тетрадь** |
| Neutro | **-о / -е** | **окно**, **задание**, **общежитие** |

**Regla:** **-ь** **no** es un género. Puede ser masculino o femenino. Aprende esos sustantivos en pareja con **мой** o **моя**.

| Sustantivo | Género | Pareja |
|---|---|---|
| **день** | masculino | **этот день** |
| **словарь** | masculino | **мой словарь** |
| **тетрадь** | femenino | **моя тетрадь** |
| **дверь** | femenino | **эта дверь** |

Algunos sustantivos de persona terminan en **-а / -я** y son **masculinos**: **папа**, **дядя**. Se dice **мой папа**, no **моя папа**.

**Regla:** El posesivo concuerda con el **sustantivo**, no con quien habla.

| | Masculino | Femenino | Neutro | Plural |
|---|---|---|---|---|
| mi | **мой** | **моя** | **моё** | **мои** |
| tu (**ты**) | **твой** | **твоя** | **твоё** | **твои** |
| su de usted (**вы**) | **ваш** | **ваша** | **ваше** | **ваши** |

- **мой учебник**, **мой стол**, **мой словарь**
- **моя тетрадь**, **моя ручка**, **моя книга**, **моя аудитория**
- **моё окно**, **моё задание**
- **мои книги**, **мои друзья**

**Это**, del tema anterior, **no** concuerda. Significa “esto es”: **Это книга.** Las formas que sí concuerdan son **этот / эта / это** (“este/esta” + sustantivo):

| Género | “este” + sustantivo | Ejemplo |
|---|---|---|
| Masculino | **этот** | **этот учебник** |
| Femenino | **эта** | **эта тетрадь** |
| Neutro | **это** | **это окно** |
| Plural | **эти** | **эти книги** |

**Это книга** significa “Esto es un libro”. **Эта книга** significa “este libro”. Las dos son correctas. Hacen trabajos distintos.

### Cómo se usa
Cuando apuntes un sustantivo del aula, escríbelo con **мой / моя / моё**. Para preguntar por un objeto, el posesivo cortés es **ваш**: **Извините, это ваш учебник?** La respuesta conserva el género: **Нет. Мой учебник здесь. А это моя тетрадь.**

El plural **мои / ваши** vale para cualquier género cuando el sustantivo ya está en plural: **мои книги**, **мои словари**, **мои окна**.

En A1 no hace falta declinar todos los adjetivos. El objetivo es **oír y producir** el posesivo correcto con los sustantivos que ya usas.

### Ejemplos
- **Это мой учебник.** — Este es mi libro de texto.
- **Это моя тетрадь.** — Este es mi cuaderno.
- **Это моё окно.** — Esta es mi ventana.
- **Где моя ручка?** — ¿Dónde está mi bolígrafo?
- **Извините, это ваш словарь?** — Disculpe, ¿es su diccionario?
- **Ваша ручка под учебником.** — Su bolígrafo está debajo del libro.
- **Это папа. Мой папа дома.** — Este es mi padre. Mi padre está en casa.
- **Это аудитория. Моя аудитория там.** — Esta es un aula. Mi aula está allí.

### Errores típicos
- **Мой тетрадь**, **моя учебник**, **мой окно**. El posesivo siguió a la palabra española “mi”, no al sustantivo.
- Creer que todo sustantivo en **-ь** es femenino. **Словарь** es masculino: **мой словарь**.
- Creer que todo sustantivo en **-а** es femenino. **Папа** es masculino: **мой папа**.
- Cambiar **это** cuando significa “esto es”: **Эта это книга** no es el modelo. Di **Это книга** o **Эта книга**.
- Tratar el neutro como “sin género” y poner **мой**. **Окно** pide **моё**.

### Si tu lengua es el español
El español tiene dos géneros; el ruso tiene tres. La trampa grande es la **-о**: en español *-o* suele ser masculino (*el libro*), en ruso **-о / -е** es **neutro** (**окно → моё окно**). La **-а** sí coincide a menudo con el femenino (**книга → моя книга**), pero **папа** y **дядя** son masculinos. El signo **-ь** no existe en español: **день** y **тетрадь** no se distinguen por la última letra, y hay que aprender el género con la palabra. *Este es un libro* (**Это книга**) no flexiona **это**; *este libro* sí flexiona (**эта книга**).

> 💡 Aprende parejas, no una etiqueta al margen: **мой учебник**, **моя тетрадь**, **моё окно**.

### Comprueba
1. Elige **мой / моя / моё** para **тетрадь**, **окно** y **словарь**.
2. ¿Por qué se dice **мой папа** si el sustantivo termina en **-а**?
3. ¿Qué diferencia hay entre **Это книга** y **Эта книга**?

**Respuestas:** 1) **моя тетрадь**, **моё окно**, **мой словарь**. 2) **Папа** es un sustantivo masculino de persona; **-а** no es solo femenina. 3) **Это книга** = “Esto es un libro.” **Эта книга** = “este libro.”`,

    de: `## Das Genus der Substantive im Unterricht

> **In diesem Thema:** Maskulinum, Femininum und Neutrum, und die Wörter **мой / моя / моё**, an denen man das Genus im Satz hört.

### Warum das wichtig ist
Jedes russische Substantiv hat ein grammatisches Genus. Das ist nicht das „Geschlecht“ eines Tisches oder eines Fensters. Das Genus entscheidet, welches Wort davor steht. Wer für jeden Gegenstand **мой** sagt, trifft es nur zur Hälfte: **мой учебник** stimmt, **моя тетрадь** stimmt, **мой тетрадь** sagt man nicht.

Später folgen die Adjektivendungen demselben Genus. Wer das Substantiv jetzt zusammen mit **мой / моя / моё** lernt, hat für diese Endungen schon einen Platz.

### Die Regel

**Regel:** Schätzen Sie das Genus an der **Endung der Wörterbuchform**, und prüfen Sie die Wörter, die der Schätzung nicht folgen.

| Genus | Typische Endung | Wörter aus dem Unterricht |
|---|---|---|
| Maskulinum | Konsonant oder **-й** | **стол**, **учебник**, **словарь**, **музей** |
| Femininum | **-а / -я**; auch viele auf **-ь** | **книга**, **ручка**, **аудитория**, **тетрадь** |
| Neutrum | **-о / -е** | **окно**, **задание**, **общежитие** |

**Regel:** **-ь** ist **kein** Genus. Es kann maskulin oder feminin sein. Lernen Sie diese Substantive als Paar mit **мой** oder **моя**.

| Substantiv | Genus | Paar |
|---|---|---|
| **день** | maskulin | **этот день** |
| **словарь** | maskulin | **мой словарь** |
| **тетрадь** | feminin | **моя тетрадь** |
| **дверь** | feminin | **эта дверь** |

Einige Personenbezeichnungen enden auf **-а / -я** und sind **maskulin**: **папа**, **дядя**. Man sagt **мой папа**, nicht **моя папа**.

**Regel:** Das Possessiv richtet sich nach dem **Substantiv**, nicht nach der Person, die spricht.

| | Maskulinum | Femininum | Neutrum | Plural |
|---|---|---|---|---|
| mein | **мой** | **моя** | **моё** | **мои** |
| dein (**ты**) | **твой** | **твоя** | **твоё** | **твои** |
| Ihr (**вы**) | **ваш** | **ваша** | **ваше** | **ваши** |

- **мой учебник**, **мой стол**, **мой словарь**
- **моя тетрадь**, **моя ручка**, **моя книга**, **моя аудитория**
- **моё окно**, **моё задание**
- **мои книги**, **мои друзья**

**Это** aus dem vorigen Thema richtet sich **nicht**. Es bedeutet „das ist“: **Это книга.** Die Formen, die sich richten, sind **этот / эта / это** („dieser“ + Substantiv):

| Genus | „dieser“ + Substantiv | Beispiel |
|---|---|---|
| Maskulinum | **этот** | **этот учебник** |
| Femininum | **эта** | **эта тетрадь** |
| Neutrum | **это** | **это окно** |
| Plural | **эти** | **эти книги** |

**Это книга** heißt „Das ist ein Buch.“ **Эта книга** heißt „dieses Buch“. Beides ist richtig. Es sind zwei verschiedene Aufgaben.

### So verwendet man es
Schreiben Sie ein neues Unterrichtswort mit **мой / моя / моё** in die Liste. Nach einem Gegenstand fragen Sie höflich mit **ваш**: **Извините, это ваш учебник?** Die Antwort behält das Genus: **Нет. Мой учебник здесь. А это моя тетрадь.**

Der Plural **мои / ваши** gilt für jedes Genus, sobald das Substantiv im Plural steht: **мои книги**, **мои словари**, **мои окна**.

Auf A1 beugen Sie noch nicht jedes Adjektiv durch. Das Ziel ist, das richtige Possessiv mit den Wörtern zu **hören und zu sagen**, die Sie schon benutzen.

### Beispiele
- **Это мой учебник.** — Das ist mein Lehrbuch.
- **Это моя тетрадь.** — Das ist mein Heft.
- **Это моё окно.** — Das ist mein Fenster.
- **Где моя ручка?** — Wo ist mein Stift?
- **Извините, это ваш словарь?** — Entschuldigen Sie, ist das Ihr Wörterbuch?
- **Ваша ручка под учебником.** — Ihr Stift liegt unter dem Lehrbuch.
- **Это папа. Мой папа дома.** — Das ist Vater. Mein Vater ist zu Hause.
- **Это аудитория. Моя аудитория там.** — Das ist ein Hörsaal. Mein Hörsaal ist dort.

### Typische Fehler
- **Мой тетрадь**, **моя учебник**, **мой окно**. Das Possessiv folgt dem deutschen „mein“, nicht dem Substantiv.
- Jedes Wort auf **-ь** für feminin halten. **Словарь** ist maskulin: **мой словарь**.
- Jedes Wort auf **-а** für feminin halten. **Папа** ist maskulin: **мой папа**.
- **это** verändern, wenn es „das ist“ heißt: **Эта это книга** ist nicht das Muster. Sagen Sie **Это книга** oder **Эта книга**.
- Das Neutrum für „kein Genus“ halten und **мой** setzen. **Окно** verlangt **моё**.

### Wenn Ihre Sprache Deutsch ist
Deutsch hat ebenfalls drei Genera, aber sie decken sich nicht mit den russischen. *Der Tisch* und **стол** sind beide maskulin; *das Buch* ist Neutrum, **книга** ist feminin; *die Tür* und **дверь** treffen sich, *das Fenster* und **окно** auch, *der Stift* (**ручка**, feminin) nicht. Übertragen Sie **der / die / das** nicht. Russisch hat keinen Artikel: Das Genus steckt in der Endung und im Possessiv **мой / моя / моё**. Die russische Endung **-о** ist neutrum, nicht maskulin. **-ь** sagt das Genus nicht: **словарь** maskulin, **тетрадь** feminin.

> 💡 Lernen Sie Paare, keine Randnotiz: **мой учебник**, **моя тетрадь**, **моё окно**.

### Prüfen Sie sich
1. Wählen Sie **мой / моя / моё** für **тетрадь**, **окно** und **словарь**.
2. Warum heißt es **мой папа**, obwohl das Wort auf **-а** endet?
3. Was ist der Unterschied zwischen **Это книга** und **Эта книга**?

**Antworten:** 1) **моя тетрадь**, **моё окно**, **мой словарь**. 2) **Папа** ist ein maskulines Personenwort; **-а** ist nicht nur feminin. 3) **Это книга** = „Das ist ein Buch.“ **Эта книга** = „dieses Buch.“`,
  },

  "ru-a1-present-tense": {
    en: `## The present tense

> **In this topic:** present endings of the two conjugations, frequent stem changes, **не**, and questions without an auxiliary.

### Why it matters
Almost every sentence about today uses a present ending: **я читаю**, **она говорит**, **мы живём**. Russian changes the verb for **every** person. There is no helping verb like *do* or *does*, and there is no *-s* that appears only in the third person.

The present you learn here belongs to **imperfective** verbs (**читать**, **говорить**). A perfective partner such as **прочитать** has **no present**. **Я прочитаю** is future. For “I am reading / I read” use **я читаю**.

### The rule

**Rule:** Russian present verbs follow one of two ending sets. You cannot always see which set from the infinitive alone, so learn **я / ты / он** with each new verb. These two models cover most A1 verbs.

**Conjugation I**, the **-е-** set. Model: **читать** (to read).

| Person | Ending | Form |
|---|---|---|
| **я** | **-ю / -у** | **читаю** |
| **ты** | **-ешь** | **читаешь** |
| **он / она / оно** | **-ет** | **читает** |
| **мы** | **-ем** | **читаем** |
| **вы** | **-ете** | **читаете** |
| **они** | **-ют / -ут** | **читают** |

**Conjugation II**, the **-и-** set. Model: **говорить** (to speak).

| Person | Ending | Form |
|---|---|---|
| **я** | **-ю / -у** | **говорю** |
| **ты** | **-ишь** | **говоришь** |
| **он / она / оно** | **-ит** | **говорит** |
| **мы** | **-им** | **говорим** |
| **вы** | **-ите** | **говорите** |
| **они** | **-ят / -ат** | **говорят** |

**Он**, **она**, and **оно** share one ending. Gender does not change the present. It will change the past, later.

**Rule:** The consonant before a I-conjugation ending can change. Learn the new stem; do not force the infinitive consonant back in.

| Infinitive | **я** | **ты** | **они** |
|---|---|---|---|
| **писать** (write) | **пишу** | **пишешь** | **пишут** |
| **жить** (live) | **живу** | **живёшь** | **живут** |
| **ждать** (wait) | **жду** | **ждёшь** | **ждут** |
| **пить** (drink) | **пью** | **пьёшь** | **пьют** |
| **работать** (work) | **работаю** | **работаешь** | **работают** |
| **смотреть** (watch; II) | **смотрю** | **смотришь** | **смотрят** |
| **учить** (learn / teach; II) | **учу** | **учишь** | **учат** |
| **есть** (eat) | **ем** | **ешь** | **едят** |
| **хотеть** (want) | **хочу** | **хочешь** | **хотят** |

**Работать** is regular once you know that **-овать** becomes **-ую** in the present: **работаю**. **Смотреть** and **учить** are conjugation II even though you might expect the other set. **Хотеть** is mixed: I-type in the singular (**хочешь**, **хочет**), II-type in the plural (**хотим**, **хотите**, **хотят**). Memorize it as a list.

**Rule:** **-ся / -сь** makes a reflexive verb. **Учить** means “to learn something” or “to teach”. **Учиться** means “to study, to be a student”.

| Person | **учиться** |
|---|---|
| **я** | **учусь** |
| **ты** | **учишься** |
| **он / она** | **учится** |
| **мы** | **учимся** |
| **вы** | **учитесь** |
| **они** | **учатся** |

After a vowel the particle is **-сь** (**учусь**, **учишься**). After a consonant it is **-ся** (**учится**, **учимся**).

**Rule:** **Не** stands immediately before the verb. Questions do not use an auxiliary. A yes/no question is the same order, with question intonation. A question word comes first.

- **Я не понимаю.**
- **Ты учишься здесь?**
- **Где ты живёшь?**
- **Что она читает?**

### How to use it
Speak about a real day with three persons first: **я**, **ты**, **он / она**. Add **мы / вы / они** when the group is clear.

Use the present for habits and for what is happening now. Russian does not split “I read” and “I am reading”.

- **Я читаю текст.**
- **Каждый день я учусь в библиотеке.**

Put **не** on the verb you are negating, not on the subject: **Она не знает слово.**

**Учить** takes the thing you learn: **Я учу слова.** **Учиться** takes the place or the subject of study: **Я учусь в университете.** **Я учусь русскому языку** comes later with another case. At A1, **Я учусь здесь** and **Я учу слова** are the pair to keep apart.

### Examples
- **Я читаю текст.** — I am reading a text.
- **Ты пишешь упражнение.** — You are writing an exercise.
- **Она говорит по-русски.** — She speaks Russian.
- **Мы живём в общежитии.** — We live in the dormitory.
- **Вы понимаете вопрос?** — Do you understand the question?
- **Они не знают это слово.** — They do not know this word.
- **Где ты учишься? — Я учусь в университете.**
- **Я не пью кофе.** — I do not drink coffee.
- **Он ждёт автобус.** — He is waiting for the bus.

### Typical mistakes
- Leaving the infinitive: **Она читать**. The form is **она читает**.
- Giving every subject the **я** ending: **Она читаю**.
- Putting **-ешь** on a II verb: **ты говоришь**, not **ты говорешь**.
- Inserting a helping verb, or changing the order into English *do*-questions.
- **Я учу в университете** for “I study at the university”. That sentence means you teach there. Say **Я учусь в университете.**
- Using **прочитаю** for a present action. That form is future.

### If your language is English
English marks only the third person (*works*) and uses *do/does* for questions and negatives. Russian marks all six persons and puts **не** before the verb: **Я не знаю** is “I don’t know”, with no extra verb. Intonation makes **Ты живёшь здесь?** a question. Word order can stay subject–verb. There is also no present form of **быть** in **Я студент**; do not drag *am/is/are* into verbal sentences either. One Russian present covers both simple and progressive meaning.

> 💡 Learn each new verb as a trio you can say today: **я читаю**, **ты читаешь**, **она читает**.

### Check yourself
1. Give the present for **она** + **читать**, **ты** + **говорить**, and **они** + **жить**.
2. Where does **не** go in “I do not understand”?
3. Which sentence means “I study at the university”: **Я учу в университете** or **Я учусь в университете**?

**Answers:** 1) **она читает**, **ты говоришь**, **они живут**. 2) Immediately before the verb: **Я не понимаю.** 3) **Я учусь в университете.**`,

    es: `## El presente

> **En este tema:** las terminaciones de presente de las dos conjugaciones, los cambios de raíz frecuentes, **не** y las preguntas sin auxiliar.

### Por qué importa
Casi toda frase sobre el día de hoy lleva una terminación de presente: **я читаю**, **она говорит**, **мы живём**. El ruso cambia el verbo en **cada** persona. No hay auxiliar del tipo *do*, y no hay una -s que aparezca solo en la tercera.

El presente de este tema es el de los verbos **imperfectivos** (**читать**, **говорить**). Un compañero perfectivo como **прочитать** **no tiene presente**. **Я прочитаю** es futuro. Para “leo / estoy leyendo” se usa **я читаю**.

### La regla

**Regla:** El presente ruso sigue uno de dos juegos de terminaciones. El infinitivo no siempre dice cuál. Aprende **я / ты / он** con cada verbo nuevo. Estos dos modelos cubren la mayoría de los verbos de A1.

**I conjugación**, juego en **-е-**. Modelo: **читать** (leer).

| Persona | Terminación | Forma |
|---|---|---|
| **я** | **-ю / -у** | **читаю** |
| **ты** | **-ешь** | **читаешь** |
| **он / она / оно** | **-ет** | **читает** |
| **мы** | **-ем** | **читаем** |
| **вы** | **-ете** | **читаете** |
| **они** | **-ют / -ут** | **читают** |

**II conjugación**, juego en **-и-**. Modelo: **говорить** (hablar).

| Persona | Terminación | Forma |
|---|---|---|
| **я** | **-ю / -у** | **говорю** |
| **ты** | **-ишь** | **говоришь** |
| **он / она / оно** | **-ит** | **говорит** |
| **мы** | **-им** | **говорим** |
| **вы** | **-ите** | **говорите** |
| **они** | **-ят / -ат** | **говорят** |

**Он**, **она** y **оно** comparten la terminación. El género no cambia el presente. Cambiará el pasado, más adelante.

**Regla:** La consonante anterior a una terminación de la I conjugación puede cambiar. Aprende la raíz nueva; no devuelvas a la fuerza la consonante del infinitivo.

| Infinitivo | **я** | **ты** | **они** |
|---|---|---|---|
| **писать** (escribir) | **пишу** | **пишешь** | **пишут** |
| **жить** (vivir) | **живу** | **живёшь** | **живут** |
| **ждать** (esperar) | **жду** | **ждёшь** | **ждут** |
| **пить** (beber) | **пью** | **пьёшь** | **пьют** |
| **работать** (trabajar) | **работаю** | **работаешь** | **работают** |
| **смотреть** (mirar; II) | **смотрю** | **смотришь** | **смотрят** |
| **учить** (aprender / enseñar; II) | **учу** | **учишь** | **учат** |
| **есть** (comer) | **ем** | **ешь** | **едят** |
| **хотеть** (querer) | **хочу** | **хочешь** | **хотят** |

**Работать** es regular cuando sabes que **-овать** pasa a **-ую** en presente: **работаю**. **Смотреть** y **учить** son de la II aunque la intuición diga otra cosa. **Хотеть** es mixto: tipo I en singular (**хочешь**, **хочет**) y tipo II en plural (**хотим**, **хотите**, **хотят**). Memorízalo como lista.

**Regla:** **-ся / -сь** forma un verbo reflexivo. **Учить** es “aprender algo” o “enseñar”. **Учиться** es “estudiar, ser estudiante”.

| Persona | **учиться** |
|---|---|
| **я** | **учусь** |
| **ты** | **учишься** |
| **он / она** | **учится** |
| **мы** | **учимся** |
| **вы** | **учитесь** |
| **они** | **учатся** |

Después de vocal, la partícula es **-сь** (**учусь**, **учишься**). Después de consonante, es **-ся** (**учится**, **учимся**).

**Regla:** **Не** va inmediatamente delante del verbo. Las preguntas no llevan auxiliar. Una pregunta de sí/no conserva el orden y cambia la entonación. El interrogativo va primero.

- **Я не понимаю.**
- **Ты учишься здесь?**
- **Где ты живёшь?**
- **Что она читает?**

### Cómo se usa
Habla primero de un día real con tres personas: **я**, **ты**, **он / она**. Añade **мы / вы / они** cuando el grupo esté claro.

El presente vale para el hábito y para lo que ocurre ahora. El ruso no separa “leo” de “estoy leyendo”.

- **Я читаю текст.**
- **Каждый день я учусь в библиотеке.**

**Не** va con el verbo que niegas, no con el sujeto: **Она не знает слово.**

**Учить** lleva la cosa que aprendes: **Я учу слова.** **Учиться** lleva el lugar: **Я учусь в университете.** **Я учусь русскому языку** llegará con otro caso. En A1 distingue **Я учусь здесь** de **Я учу слова**.

### Ejemplos
- **Я читаю текст.** — Leo un texto. / Estoy leyendo un texto.
- **Ты пишешь упражнение.** — Escribes un ejercicio.
- **Она говорит по-русски.** — Ella habla ruso.
- **Мы живём в общежитии.** — Vivimos en la residencia.
- **Вы понимаете вопрос?** — ¿Entienden la pregunta?
- **Они не знают это слово.** — No conocen esta palabra.
- **Где ты учишься? — Я учусь в университете.**
- **Я не пью кофе.** — No bebo café.
- **Он ждёт автобус.** — Espera el autobús.

### Errores típicos
- Dejar el infinitivo: **Она читать**. La forma es **она читает**.
- Poner a todo el mundo la terminación de **я**: **Она читаю**.
- Poner **-ешь** en un verbo de la II: **ты говоришь**, no **ты говорешь**.
- Inventar un auxiliar o copiar el orden de una pregunta inglesa.
- **Я учу в университете** para “estudio en la universidad”. Esa frase significa que enseñas allí. Di **Я учусь в университете.**
- Usar **прочитаю** para una acción presente. Esa forma es de futuro.

### Si tu lengua es el español
El español también conjuga todas las personas, así que el reflejo te ayuda. Las clases *-ar / -er / -ir* **no** predicen la conjugación rusa: **читать** se parece a un *-ar*, pero **смотреть** es de la II y **писать** cambia la raíz. No traslades la clase española. *Soy estudiante* usa *ser*; si hablas del presente con un sustantivo, el ruso omite el verbo (**Я студент**). Con un verbo de acción, el presente ruso sí aparece, y cubre tanto *leo* como *estoy leyendo*. La negación es una palabra separada, **не**, no un *no* pegado al ritmo del español delante de cualquier otro elemento: va **justo antes del verbo**.

> 💡 Aprende cada verbo nuevo como un trío que puedas decir hoy: **я читаю**, **ты читаешь**, **она читает**.

### Comprueba
1. Da el presente de **она** + **читать**, **ты** + **говорить** y **они** + **жить**.
2. ¿Dónde va **не** en “no entiendo”?
3. ¿Qué frase significa “estudio en la universidad”: **Я учу в университете** o **Я учусь в университете**?

**Respuestas:** 1) **она читает**, **ты говоришь**, **они живут**. 2) Justo delante del verbo: **Я не понимаю.** 3) **Я учусь в университете.**`,

    de: `## Das Präsens

> **In diesem Thema:** die Präsensendungen der zwei Konjugationen, häufige Stammwechsel, **не** und Fragen ohne Hilfsverb.

### Warum das wichtig ist
Fast jeder Satz über den heutigen Tag braucht eine Präsensendung: **я читаю**, **она говорит**, **мы живём**. Russisch verändert das Verb in **jeder** Person. Es gibt kein Hilfsverb wie *do*, und kein *-s*, das nur in der dritten Person erscheint.

Das Präsens hier gehört zu **imperfektiven** Verben (**читать**, **говорить**). Ein perfektiver Partner wie **прочитать** hat **kein Präsens**. **Я прочитаю** ist Zukunft. Für „ich lese / ich bin beim Lesen“ steht **я читаю**.

### Die Regel

**Regel:** Russische Verben im Präsens folgen einem von zwei Endungssätzen. Den Satz sehen Sie dem Infinitiv nicht immer an. Lernen Sie **я / ты / он** mit jedem neuen Verb. Diese zwei Muster tragen die meisten A1-Verben.

**I. Konjugation**, der **-е-** Satz. Muster: **читать** (lesen).

| Person | Endung | Form |
|---|---|---|
| **я** | **-ю / -у** | **читаю** |
| **ты** | **-ешь** | **читаешь** |
| **он / она / оно** | **-ет** | **читает** |
| **мы** | **-ем** | **читаем** |
| **вы** | **-ете** | **читаете** |
| **они** | **-ют / -ут** | **читают** |

**II. Konjugation**, der **-и-** Satz. Muster: **говорить** (sprechen).

| Person | Endung | Form |
|---|---|---|
| **я** | **-ю / -у** | **говорю** |
| **ты** | **-ишь** | **говоришь** |
| **он / она / оно** | **-ит** | **говорит** |
| **мы** | **-им** | **говорим** |
| **вы** | **-ите** | **говорите** |
| **они** | **-ят / -ат** | **говорят** |

**Он**, **она** und **оно** teilen sich eine Endung. Das Genus ändert das Präsens nicht. Es ändert später die Vergangenheit.

**Regel:** Der Konsonant vor einer Endung der I. Konjugation kann wechseln. Lernen Sie den neuen Stamm; zwingen Sie den Infinitivkonsonanten nicht zurück.

| Infinitiv | **я** | **ты** | **они** |
|---|---|---|---|
| **писать** (schreiben) | **пишу** | **пишешь** | **пишут** |
| **жить** (wohnen) | **живу** | **живёшь** | **живут** |
| **ждать** (warten) | **жду** | **ждёшь** | **ждут** |
| **пить** (trinken) | **пью** | **пьёшь** | **пьют** |
| **работать** (arbeiten) | **работаю** | **работаешь** | **работают** |
| **смотреть** (schauen; II) | **смотрю** | **смотришь** | **смотрят** |
| **учить** (lernen / lehren; II) | **учу** | **учишь** | **учат** |
| **есть** (essen) | **ем** | **ешь** | **едят** |
| **хотеть** (wollen) | **хочу** | **хочешь** | **хотят** |

**Работать** ist regelmäßig, sobald Sie wissen, dass **-овать** im Präsens zu **-ую** wird: **работаю**. **Смотреть** und **учить** gehören zur II. Konjugation, auch wenn das Gefühl anders liegt. **Хотеть** ist gemischt: im Singular Typ I (**хочешь**, **хочет**), im Plural Typ II (**хотим**, **хотите**, **хотят**). Lernen Sie es als Liste.

**Regel:** **-ся / -сь** bildet ein reflexives Verb. **Учить** heißt „etwas lernen“ oder „lehren“. **Учиться** heißt „studieren, Student sein“.

| Person | **учиться** |
|---|---|
| **я** | **учусь** |
| **ты** | **учишься** |
| **он / она** | **учится** |
| **мы** | **учимся** |
| **вы** | **учитесь** |
| **они** | **учатся** |

Nach einem Vokal steht **-сь** (**учусь**, **учишься**). Nach einem Konsonanten steht **-ся** (**учится**, **учимся**).

**Regel:** **Не** steht unmittelbar vor dem Verb. Fragen brauchen kein Hilfsverb. Eine Ja/Nein-Frage behält die Folge und hebt die Melodie. Das Fragewort steht vorn.

- **Я не понимаю.**
- **Ты учишься здесь?**
- **Где ты живёшь?**
- **Что она читает?**

### So verwendet man es
Sprechen Sie zuerst über einen echten Tag mit drei Personen: **я**, **ты**, **он / она**. **Мы / вы / они** kommen dazu, wenn die Gruppe klar ist.

Das Präsens gilt für Gewohnheiten und für das, was gerade geschieht. Russisch trennt „ich lese“ und „ich bin am Lesen“ nicht.

- **Я читаю текст.**
- **Каждый день я учусь в библиотеке.**

**Не** steht am verneinten Verb, nicht am Subjekt: **Она не знает слово.**

**Учить** nennt die Sache, die Sie lernen: **Я учу слова.** **Учиться** nennt den Ort: **Я учусь в университете.** **Я учусь русскому языку** kommt später mit einem anderen Kasus. Auf A1 halten Sie **Я учусь здесь** und **Я учу слова** auseinander.

### Beispiele
- **Я читаю текст.** — Ich lese einen Text.
- **Ты пишешь упражнение.** — Du schreibst eine Übung.
- **Она говорит по-русски.** — Sie spricht Russisch.
- **Мы живём в общежитии.** — Wir wohnen im Wohnheim.
- **Вы понимаете вопрос?** — Verstehen Sie die Frage?
- **Они не знают это слово.** — Sie kennen dieses Wort nicht.
- **Где ты учишься? — Я учусь в университете.**
- **Я не пью кофе.** — Ich trinke keinen Kaffee.
- **Он ждёт автобус.** — Er wartet auf den Bus.

### Typische Fehler
- Den Infinitiv stehen lassen: **Она читать**. Die Form ist **она читает**.
- Jeder Person die Endung von **я** geben: **Она читаю**.
- **-ешь** an ein Verb der II. Konjugation hängen: **ты говоришь**, nicht **ты говорешь**.
- Ein Hilfsverb einsetzen oder die deutsche Verbzweitstellung in die russische Frage zwingen.
- **Я учу в университете** für „ich studiere an der Universität“. Der Satz heißt, dass Sie dort unterrichten. Sagen Sie **Я учусь в университете.**
- **Прочитаю** für eine Handlung in der Gegenwart. Diese Form ist futurisch.

### Wenn Ihre Sprache Deutsch ist
Auch Deutsch beugt das Präsens: *ich lese, du liest, er liest*. Die Endungen sind andere. Das deutsche *-st* in *du liest* ist nicht das russische **ты**-Ende **-ешь** oder **-ишь**. *Wohnst du hier?* stellt das Verb nach vorn; Russisch lässt meist **Ты живёшь здесь?** stehen und fragt mit der Melodie, oder beginnt mit dem Fragewort: **Где ты живёшь?** *Ich bin Student* braucht *sein*; der russische Identitätssatz im Präsens nicht. In einem Satz mit Vollverb gibt es ein Präsens, und es deckt sowohl *ich lese* als auch *ich bin am Lesen* ab. Die Verneinung ist das eigene Wort **не** direkt vor dem Verb, nicht *nicht* an einer anderen Stelle im Satz.

> 💡 Lernen Sie jedes neue Verb als Dreiergruppe für heute: **я читаю**, **ты читаешь**, **она читает**.

### Prüfen Sie sich
1. Bilden Sie das Präsens von **она** + **читать**, **ты** + **говорить** und **они** + **жить**.
2. Wohin kommt **не** in „ich verstehe nicht“?
3. Welcher Satz heißt „ich studiere an der Universität“: **Я учу в университете** oder **Я учусь в университете**?

**Antworten:** 1) **она читает**, **ты говоришь**, **они живут**. 2) Unmittelbar vor dem Verb: **Я не понимаю.** 3) **Я учусь в университете.**`,
  },

  "ru-a1-accusative": {
    en: `## The accusative case

> **In this topic:** the direct object, the questions **кого?** and **что?**, and the singular endings, including animate and inanimate masculine nouns.

### Why it matters
**Я читаю книга** is understandable and still wrong. The thing you read, see, wait for, or know is in the **accusative**. English shows that job mainly on pronouns (*I / me*). Russian shows it on the **noun ending**.

The ending is not the same for every gender. Masculine nouns split into **animate** (people and animals) and **inanimate** (things). That split is the part English, Spanish, and German do not prepare you for in the same way.

### The rule

**Rule:** The accusative answers **кого?** (“whom?”) and **что?** (“what?”). **Кого** is for an animate object. **Что** is for an inanimate object. The direct object is the person or thing the verb acts on.

| Question | Use it for | Example |
|---|---|---|
| **Кого?** | a person or an animal | **Кого ты видишь? — Студента.** |
| **Что?** | a thing | **Что ты читаешь? — Книгу.** |

**Rule:** In the **singular**, choose the ending from gender, from the dictionary ending, and, for masculine nouns, from animacy.

| Noun type | Nominative | Accusative | What changes |
|---|---|---|---|
| Masculine inanimate | **стол**, **учебник**, **словарь** | **стол**, **учебник**, **словарь** | nothing |
| Masculine animate | **студент**, **друг**, **преподаватель** | **студента**, **друга**, **преподавателя** | **-а / -я** |
| Feminine **-а / -я** | **книга**, **неделя**, **мама**, **студентка** | **книгу**, **неделю**, **маму**, **студентку** | **-у / -ю** |
| Feminine **-ь** | **тетрадь**, **дверь** | **тетрадь**, **дверь** | nothing in the singular |
| Neuter | **окно**, **задание**, **правило** | **окно**, **задание**, **правило** | nothing |
| Masculine in **-а** | **папа** | **папу** | **-у**, like other **-а** nouns |

Read the masculine line twice. **Я вижу стол** (a table, inanimate, no change). **Я вижу студента** (a student, animate, ending **-а**). **Я вижу стола** is the typical overcorrection. **Я вижу студент** leaves off the ending the person needs.

Feminine **-а / -я** takes **-у / -ю** whether the noun is a thing or a person: **книгу** and **маму**. Animacy does **not** decide the feminine **-а** ending. It decides the masculine consonant ending.

Neuter nouns look the same in the nominative and the accusative. **Я вижу окно** is complete. **Окну** is another case.

**Rule:** In the **plural**, animacy applies to **all** genders, not only to masculine nouns.

| Plural | Nominative | Accusative |
|---|---|---|
| Inanimate | **столы**, **книги**, **окна** | **столы**, **книги**, **окна** (same as nominative) |
| Animate | **студенты**, **друзья**, **сестры** | **студентов**, **друзей**, **сестёр** (same as genitive) |

At A1, produce the singular confidently. Recognize the plural pattern when you see **Я вижу студентов**.

**Rule:** Personal pronouns have their own accusative forms. After a verb they are the direct object.

| Nominative | Accusative | Example |
|---|---|---|
| **я** | **меня** | **Ты видишь меня.** |
| **ты** | **тебя** | **Я вижу тебя.** |
| **он / оно** | **его** | **Я знаю его.** |
| **она** | **её** | **Я знаю её.** |
| **мы** | **нас** | **Она ждёт нас.** |
| **вы** | **вас** | **Он слышит вас.** |
| **они** | **их** | **Я вижу их.** |

**Его / её / их** are also possessives (“his / her / their”) and then do not change. As objects they answer **кого?**

A second A1 use, direction, uses the same accusative after **в** and **на** for “into / onto”: **Я иду в библиотеку**, **Я иду на лекцию**. Location (“in / on”) is the next case, the prepositional: **Я в библиотеке**. Do not put the direction ending on a place where you already are.

### How to use it
Ask **кого?** or **что?** after the verb, then put the noun in the accusative.

Verbs that take a direct object at A1 include **читать**, **писать**, **видеть**, **знать**, **ждать**, **слушать**, **смотреть**, **делать**, **понимать**, **учить**.

- **Я читаю книгу.** What? **книгу**.
- **Я жду друга.** Whom? **друга**.
- **Я учу слова.** **Слова** is inanimate plural, so it stays in the nominative plural form.
- **Мы видим преподавателя.** Whom? **преподавателя**.

Negation still puts **не** before the verb: **Я не читаю книгу.** The object can stay in the accusative at this level.

Names in **-а** follow the feminine ending: **Анна → Анну**, **Я знаю Анну.**

### Examples
- **Я читаю книгу.** — I am reading a book.
- **Студент пишет упражнение.** — The student is writing an exercise. Neuter, no change.
- **Я вижу стол.** — I see a table.
- **Я вижу студента.** — I see a student.
- **Она ждёт друга.** — She is waiting for a friend.
- **Я знаю Анну.** — I know Anna.
- **Ты знаешь преподавателя?** — Do you know the professor?
- **Мы учим слова.** — We are learning words.
- **Я иду в библиотеку.** — I am going to the library. Direction, not location.

### Typical mistakes
- **Я вижу студент.** A masculine person needs **-а**: **студента**.
- **Я вижу стола.** An inanimate masculine singular does **not** change.
- **Я читаю книга.** Feminine **-а** needs **-у**: **книгу**.
- **Я вижу окну.** Neuter does not take a new ending here. Say **окно**.
- Using **кого?** about a book, or **что?** about a friend.
- **Я иду в библиотеке** for “I am going to the library”. **В библиотеке** is where you are. Direction is **в библиотеку**.

### If your language is English
English nouns do not change: *I see the table* and *I see the student* use the same noun shape. Only pronouns change (*I/me, he/him, she/her, we/us, they/them*). Russian changes the noun, and it changes masculine **people** differently from masculine **things**. Map *whom* to **кого** and *what* to **что**, then apply the ending table. Do not add *a* or *the*.

> 💡 Two test sentences cover the masculine split: **Я вижу стол. Я вижу студента.**

### Check yourself
1. Choose the form: **Я вижу (студент / студента / студенту).**
2. Choose the form: **Я читаю (книга / книгу / книге).**
3. **Я вижу стол** or **Я вижу стола**? Which question fits a table, **кого?** or **что?**

**Answers:** 1) **Я вижу студента.** 2) **Я читаю книгу.** 3) **Я вижу стол.** The question is **что?**`,

    es: `## El caso acusativo

> **En este tema:** el objeto directo, las preguntas **кого?** y **что?**, y las terminaciones de singular, con el masculino animado y el inanimado.

### Por qué importa
**Я читаю книга** se entiende y aun así está mal. Lo que lees, ves, esperas o conoces va en **acusativo**. El español marca a veces ese papel con la preposición *a* (*veo a Juan*) y casi no cambia el sustantivo. El ruso lo marca en la **terminación**.

La terminación no es igual para todos los géneros. Los masculinos se parten en **animados** (personas y animales) e **inanimados** (cosas). Esa partición no funciona como la *a* personal del español.

### La regla

**Regla:** El acusativo responde a **кого?** (“¿a quién?”) y a **что?** (“¿qué?”). **Кого** es para un objeto animado. **Что** es para un objeto inanimado. El objeto directo es la persona o la cosa sobre la que actúa el verbo.

| Pregunta | Para qué | Ejemplo |
|---|---|---|
| **Кого?** | una persona o un animal | **Кого ты видишь? — Студента.** |
| **Что?** | una cosa | **Что ты читаешь? — Книгу.** |

**Regla:** En **singular**, la terminación depende del género, de la terminación del diccionario y, en los masculinos, de si el sustantivo es animado.

| Tipo | Nominativo | Acusativo | Qué cambia |
|---|---|---|---|
| Masculino inanimado | **стол**, **учебник**, **словарь** | **стол**, **учебник**, **словарь** | nada |
| Masculino animado | **студент**, **друг**, **преподаватель** | **студента**, **друга**, **преподавателя** | **-а / -я** |
| Femenino **-а / -я** | **книга**, **неделя**, **мама**, **студентка** | **книгу**, **неделю**, **маму**, **студентку** | **-у / -ю** |
| Femenino **-ь** | **тетрадь**, **дверь** | **тетрадь**, **дверь** | nada en singular |
| Neutro | **окно**, **задание**, **правило** | **окно**, **задание**, **правило** | nada |
| Masculino en **-а** | **папа** | **папу** | **-у**, como los otros en **-а** |

Lee dos veces la línea del masculino. **Я вижу стол** (mesa, inanimada, sin cambio). **Я вижу студента** (estudiante, animado, terminación **-а**). **Я вижу стола** es la hipercorrección típica. **Я вижу студент** se deja la terminación que la persona necesita.

El femenino en **-а / -я** toma **-у / -ю** tanto si es cosa como si es persona: **книгу** y **маму**. La animación **no** decide esa terminación. Decide la del masculino que termina en consonante.

El neutro coincide en nominativo y acusativo. **Я вижу окно** ya está completo. **Окну** es otro caso.

**Regla:** En **plural**, la animación vale para **todos** los géneros, no solo para el masculino.

| Plural | Nominativo | Acusativo |
|---|---|---|
| Inanimado | **столы**, **книги**, **окна** | **столы**, **книги**, **окна** (igual que el nominativo) |
| Animado | **студенты**, **друзья**, **сестры** | **студентов**, **друзей**, **сестёр** (igual que el genitivo) |

En A1 produce con seguridad el singular. Reconoce el plural cuando veas **Я вижу студентов**.

**Regla:** Los pronombres personales tienen acusativo propio. Detrás del verbo son el objeto directo.

| Nominativo | Acusativo | Ejemplo |
|---|---|---|
| **я** | **меня** | **Ты видишь меня.** |
| **ты** | **тебя** | **Я вижу тебя.** |
| **он / оно** | **его** | **Я знаю его.** |
| **она** | **её** | **Я знаю её.** |
| **мы** | **нас** | **Она ждёт нас.** |
| **вы** | **вас** | **Он слышит вас.** |
| **они** | **их** | **Я вижу их.** |

**Его / её / их** también son posesivos (“su”) y entonces no cambian. Como objetos responden a **кого?**

Un segundo uso de A1, la dirección, lleva el mismo acusativo tras **в** y **на** con el sentido de “a / hacia”: **Я иду в библиотеку**, **Я иду на лекцию**. El lugar donde ya estás es el caso siguiente, el preposicional: **Я в библиотеке**. No pongas la terminación de dirección en un sitio donde ya estás.

### Cómo se usa
Pregunta **кого?** o **что?** después del verbo y pon el sustantivo en acusativo.

Verbos que en A1 llevan objeto directo: **читать**, **писать**, **видеть**, **знать**, **ждать**, **слушать**, **смотреть**, **делать**, **понимать**, **учить**.

- **Я читаю книгу.** ¿Qué? **книгу**.
- **Я жду друга.** ¿A quién? **друга**.
- **Я учу слова.** **Слова** es plural inanimado: se queda en la forma de nominativo plural.
- **Мы видим преподавателя.** ¿A quién? **преподавателя**.

La negación sigue poniendo **не** delante del verbo: **Я не читаю книгу.** En este nivel el objeto puede quedarse en acusativo.

Los nombres en **-а** siguen la terminación femenina: **Анна → Анну**, **Я знаю Анну.**

### Ejemplos
- **Я читаю книгу.** — Leo un libro.
- **Студент пишет упражнение.** — El estudiante escribe un ejercicio. Neutro, sin cambio.
- **Я вижу стол.** — Veo una mesa.
- **Я вижу студента.** — Veo a un estudiante.
- **Она ждёт друга.** — Espera a un amigo.
- **Я знаю Анну.** — Conozco a Anna.
- **Ты знаешь преподавателя?** — ¿Conoces al profesor?
- **Мы учим слова.** — Aprendemos palabras.
- **Я иду в библиотеку.** — Voy a la biblioteca. Dirección, no ubicación.

### Errores típicos
- **Я вижу студент.** Una persona masculina necesita **-а**: **студента**.
- **Я вижу стола.** Un masculino inanimado singular **no** cambia.
- **Я читаю книга.** El femenino en **-а** necesita **-у**: **книгу**.
- **Я вижу окну.** El neutro no cambia aquí. Di **окно**.
- Usar **кого?** con un libro, o **что?** con un amigo.
- **Я иду в библиотеке** para “voy a la biblioteca”. **В библиотеке** es donde estás. La dirección es **в библиотеку**.

### Si tu lengua es el español
En español el sustantivo casi no cambia de forma: *veo el libro*, *veo al estudiante*. La *a* personal marca a menudo el objeto de persona, pero *estudiante* sigue igual. En ruso no hay esa preposición: cambia la terminación, y **solo el masculino singular** separa animado e inanimado. *Veo la mesa* es **Я вижу стол** (sin cambio). *Veo al estudiante* es **Я вижу студента** (con **-а**). El femenino **книга → книгу** no tiene equivalente en la forma española *libro/libros*. Los pronombres *me, te, lo, la* no se colocan delante del verbo: en ruso van detrás, **меня, тебя, его, её**.

> 💡 Dos frases de control cubren el corte del masculino: **Я вижу стол. Я вижу студента.**

### Comprueba
1. Elige la forma: **Я вижу (студент / студента / студенту).**
2. Elige la forma: **Я читаю (книга / книгу / книге).**
3. ¿**Я вижу стол** o **Я вижу стола**? ¿Qué pregunta corresponde a una mesa, **кого?** o **что?**

**Respuestas:** 1) **Я вижу студента.** 2) **Я читаю книгу.** 3) **Я вижу стол.** La pregunta es **что?**`,

    de: `## Der Akkusativ

> **In diesem Thema:** das direkte Objekt, die Fragen **кого?** und **что?**, und die Endungen im Singular, einschließlich belebter und unbelebter Maskulina.

### Warum das wichtig ist
**Я читаю книга** ist verständlich und trotzdem falsch. Wen oder was Sie lesen, sehen, erwarten oder kennen, steht im **Akkusativ**. Deutsch zeigt diesen Kasus oft am Artikel (*der Tisch → den Tisch*). Russisch hat keinen Artikel. Es zeigt den Kasus an der **Endung des Substantivs**, und bei Maskulina nicht immer.

Maskulina teilen sich in **belebt** (Personen und Tiere) und **unbelebt** (Sachen). Diese Teilung entspricht nicht der deutschen Regel „Maskulinum wird im Akkusativ verändert“.

### Die Regel

**Regel:** Der Akkusativ antwortet auf **кого?** („wen?“) und **что?** („was?“). **Кого** gilt für ein belebtes Objekt. **Что** gilt für ein unbelebtes Objekt. Das direkte Objekt ist die Person oder die Sache, auf die das Verb zielt.

| Frage | Wofür | Beispiel |
|---|---|---|
| **Кого?** | eine Person oder ein Tier | **Кого ты видишь? — Студента.** |
| **Что?** | eine Sache | **Что ты читаешь? — Книгу.** |

**Regel:** Im **Singular** hängt die Endung vom Genus ab, von der Wörterbuchendung und, bei Maskulina, von der Belebtheit.

| Typ | Nominativ | Akkusativ | Was sich ändert |
|---|---|---|---|
| Maskulinum, unbelebt | **стол**, **учебник**, **словарь** | **стол**, **учебник**, **словарь** | nichts |
| Maskulinum, belebt | **студент**, **друг**, **преподаватель** | **студента**, **друга**, **преподавателя** | **-а / -я** |
| Femininum auf **-а / -я** | **книга**, **неделя**, **мама**, **студентка** | **книгу**, **неделю**, **маму**, **студентку** | **-у / -ю** |
| Femininum auf **-ь** | **тетрадь**, **дверь** | **тетрадь**, **дверь** | nichts im Singular |
| Neutrum | **окно**, **задание**, **правило** | **окно**, **задание**, **правило** | nichts |
| Maskulinum auf **-а** | **папа** | **папу** | **-у**, wie andere Wörter auf **-а** |

Lesen Sie die Maskulinum-Zeile zweimal. **Я вижу стол** (Tisch, unbelebt, keine Änderung). **Я вижу студента** (Student, belebt, Endung **-а**). **Я вижу стола** ist die typische Überkorrektur. **Я вижу студент** lässt die Endung weg, die eine Person braucht.

Feminina auf **-а / -я** bekommen **-у / -ю**, ob Sache oder Person: **книгу** und **маму**. Die Belebtheit entscheidet diese Endung **nicht**. Sie entscheidet die Endung der Maskulina auf Konsonant.

Neutra sehen im Nominativ und im Akkusativ gleich aus. **Я вижу окно** ist fertig. **Окну** ist ein anderer Kasus.

**Regel:** Im **Plural** gilt die Belebtheit für **alle** Genera, nicht nur für Maskulina.

| Plural | Nominativ | Akkusativ |
|---|---|---|
| Unbelebt | **столы**, **книги**, **окна** | **столы**, **книги**, **окна** (wie der Nominativ) |
| Belebt | **студенты**, **друзья**, **сестры** | **студентов**, **друзей**, **сестёр** (wie der Genitiv) |

Auf A1 bilden Sie den Singular sicher. Erkennen Sie das Pluralmuster, wenn Sie **Я вижу студентов** lesen.

**Regel:** Personalpronomen haben eigene Akkusativformen. Nach dem Verb sind sie das direkte Objekt.

| Nominativ | Akkusativ | Beispiel |
|---|---|---|
| **я** | **меня** | **Ты видишь меня.** |
| **ты** | **тебя** | **Я вижу тебя.** |
| **он / оно** | **его** | **Я знаю его.** |
| **она** | **её** | **Я знаю её.** |
| **мы** | **нас** | **Она ждёт нас.** |
| **вы** | **вас** | **Он слышит вас.** |
| **они** | **их** | **Я вижу их.** |

**Его / её / их** sind auch Possessive („sein / ihr“) und bleiben dann unverändert. Als Objekte antworten sie auf **кого?**

Eine zweite A1-Funktion, die Richtung, nutzt denselben Akkusativ nach **в** und **на** für „in … hinein / auf … hinauf“: **Я иду в библиотеку**, **Я иду на лекцию**. Der Ort, an dem Sie schon sind, ist der nächste Kasus, der Präpositiv: **Я в библиотеке**. Setzen Sie die Richtungsendung nicht an einen Ort, an dem Sie bereits sind.

### So verwendet man es
Fragen Sie nach dem Verb **кого?** oder **что?** und setzen Sie das Substantiv in den Akkusativ.

Verben mit direktem Objekt auf A1 sind unter anderem **читать**, **писать**, **видеть**, **знать**, **ждать**, **слушать**, **смотреть**, **делать**, **понимать**, **учить**.

- **Я читаю книгу.** Was? **книгу**.
- **Я жду друга.** Wen? **друга**.
- **Я учу слова.** **Слова** ist ein unbelebter Plural und bleibt in der Nominativ-Plural-Form.
- **Мы видим преподавателя.** Wen? **преподавателя**.

Die Verneinung setzt **не** auch hier unmittelbar vor das Verb: **Я не читаю книгу.** Auf dieser Stufe kann das Objekt im Akkusativ bleiben.

Namen auf **-а** folgen der femininen Endung: **Анна → Анну**, **Я знаю Анну.**

### Beispiele
- **Я читаю книгу.** — Ich lese ein Buch.
- **Студент пишет упражнение.** — Der Student schreibt eine Übung. Neutrum, keine Änderung.
- **Я вижу стол.** — Ich sehe einen Tisch.
- **Я вижу студента.** — Ich sehe einen Studenten.
- **Она ждёт друга.** — Sie wartet auf einen Freund.
- **Я знаю Анну.** — Ich kenne Anna.
- **Ты знаешь преподавателя?** — Kennst du den Dozenten?
- **Мы учим слова.** — Wir lernen Wörter.
- **Я иду в библиотеку.** — Ich gehe in die Bibliothek. Richtung, nicht Ort.

### Typische Fehler
- **Я вижу студент.** Eine maskuline Person braucht **-а**: **студента**.
- **Я вижу стола.** Ein unbelebtes Maskulinum im Singular ändert sich **nicht**.
- **Я читаю книга.** Ein Femininum auf **-а** braucht **-у**: **книгу**.
- **Я вижу окну.** Das Neutrum bekommt hier keine neue Endung. Sagen Sie **окно**.
- **Кого?** bei einem Buch, oder **что?** bei einem Freund.
- **Я иду в библиотеке** für „ich gehe in die Bibliothek“. **В библиотеке** ist der Ort, an dem Sie sind. Die Richtung ist **в библиотеку**.

### Wenn Ihre Sprache Deutsch ist
Im Deutschen wechselt das Maskulinum den Artikel, belebt oder nicht: *den Tisch* und *den Studenten*. Im Russischen bleibt ein unbelebtes Maskulinum im Singular unverändert (**стол → стол**), ein belebtes bekommt **-а / -я** (**студент → студента**). Wer jede maskuline Sache verändert, überträgt den deutschen Akkusativ. Das Femininum verändert im Russischen oft das Substantiv selbst (**книга → книгу**), nicht einen Artikel. Das Neutrum bleibt, ähnlich wie *das Fenster* in beiden Kasus gleich aussieht, hier aber ohne Artikel. *Wen* ist **кого**, *was* ist **что**.

> 💡 Zwei Prüfsätze decken die maskuline Teilung ab: **Я вижу стол. Я вижу студента.**

### Prüfen Sie sich
1. Wählen Sie die Form: **Я вижу (студент / студента / студенту).**
2. Wählen Sie die Form: **Я читаю (книга / книгу / книге).**
3. **Я вижу стол** oder **Я вижу стола**? Welche Frage passt zu einem Tisch, **кого?** oder **что?**

**Antworten:** 1) **Я вижу студента.** 2) **Я читаю книгу.** 3) **Я вижу стол.** Die Frage ist **что?**`,
  },

  "ru-a1-prepositional": {
    en: `## The prepositional case

> **In this topic:** where something is, and what you are talking about: **в**, **на**, and **о** with the prepositional.

### Why it matters
**Книга на стол** names a table and still does not say where the book is. After **в** and **на**, a location takes the **prepositional** ending. The same two prepositions take the **accusative** when you are moving **to** a place. **Я в библиотеке** means you are there. **Я иду в библиотеку** means you are on the way.

You also need this case to say the topic of a conversation: **о семье**, **об экзамене**.

### The rule

**Rule:** The prepositional does not stand alone. It follows a preposition. At A1 the three prepositions are **в** (in), **на** (on / at), and **о / об / обо** (about).

| Question | Meaning | Pattern | Example |
|---|---|---|---|
| **Где?** | where | **в / на** + prepositional | **Книга на столе.** |
| **О ком?** | about whom | **о** + prepositional | **Мы говорим о друге.** |
| **О чём?** | about what | **о** + prepositional | **Мы говорим об экзамене.** |

**Rule:** Most nouns take **-е**.

| Nominative | Prepositional | Phrase |
|---|---|---|
| **стол** | **столе** | **на столе** |
| **книга** | **книге** | **в книге**, **о книге** |
| **окно** | **окне** | **на окне** |
| **Москва** | **Москве** | **в Москве** |
| **университет** | **университете** | **в университете** |
| **словарь** | **словаре** | **в словаре** |
| **музей** | **музее** | **в музее** |

**Rule:** Nouns in **-ия, -ие, -ий** take **-ии**, not **-ие**. Feminine nouns in **-ь** take **-и**.

| Nominative | Prepositional | Phrase |
|---|---|---|
| **аудитория** | **аудитории** | **в аудитории** |
| **Россия** | **России** | **в России** |
| **общежитие** | **общежитии** | **в общежитии** |
| **занятие** | **занятии** | **на занятии** |
| **тетрадь** | **тетради** | **в тетради** |

A small set of masculine place nouns uses a stressed **-у** instead of **-е**. Learn them as chunks, not as a pattern to apply everywhere: **в лесу** (in the forest), **на полу** (on the floor), **в аэропорту** (at the airport).

**Rule:** **В** and **на** are not a picture you can draw from English *in* and *on*. Some places are fixed. Learn the pair.

| **в** + prepositional | **на** + prepositional |
|---|---|
| **в университете** | **на занятии** |
| **в библиотеке** | **на уроке** |
| **в аудитории** | **на лекции** |
| **в общежитии** | **на факультете** |
| **в Москве**, **в России** | **на столе**, **на полке** |
| **в центре** | **на работе**, **на почте** |

Closed spaces, cities, and countries are often **в**. Surfaces are often **на**. Events and a few institutions are **на** even when English says *at* or *in*: **на занятии** is “in class”.

**Rule:** The preposition “about” has three shapes.

| Shape | When | Example |
|---|---|---|
| **о** | before a consonant | **о семье**, **о работе**, **о книге** |
| **об** | before a vowel | **об экзамене**, **об Анне**, **об этом** |
| **обо** | in a few fixed forms | **обо мне**, **обо всём** |

**Rule:** Third-person pronouns add **н** after a preposition.

| Pronoun | After **о** | Location example |
|---|---|---|
| **я** | **обо мне** | — |
| **ты** | **о тебе** | — |
| **он / оно** | **о нём** | **в нём** |
| **она** | **о ней** | **в ней** |
| **мы** | **о нас** | — |
| **вы** | **о вас** | — |
| **они** | **о них** | **в них** |

Compare with the accusative of direction:

| Meaning | Case | Example |
|---|---|---|
| where you are | prepositional | **Я живу в Москве.** |
| where you are going | accusative | **Я еду в Москву.** |
| where the book is | prepositional | **Книга на столе.** |
| where you put the book | accusative | **Я кладу книгу на стол.** |

### How to use it
Answer **Где?** with **в** or **на** plus the ending. Answer **О чём лекция?** with **о / об** plus the ending.

Keep a short list of places you actually visit and say them aloud as whole phrases: **в общежитии**, **в библиотеке**, **в аудитории**, **на занятии**. The ending is easier to remember inside the phrase than in a table by itself.

**Говорить о** + prepositional is the conversation frame: **Мы говорим о семье.** If the next word starts with a vowel, switch to **об**: **Мы говорим об экзамене.**

### Examples
- **Я живу в Москве.** — I live in Moscow.
- **Мы учимся в университете.** — We study at the university.
- **Книга на столе.** — The book is on the table.
- **Студенты в аудитории.** — The students are in the classroom.
- **Я живу в общежитии.** — I live in the dormitory.
- **На занятии мы читаем текст.** — In class we read a text.
- **Рассказ о семье.** — A story about the family.
- **Мы говорим об экзамене.** — We are talking about the exam.
- **Преподаватель говорит обо мне.** — The professor is talking about me.
- **Где ты? — Я в библиотеке.**

### Typical mistakes
- No ending: **на стол** when you mean the book is there. Location is **на столе**.
- The accusative feminine ending on a location: **в Москву** means “to Moscow”, not “in Moscow”. “In Moscow” is **в Москве**.
- **-е** on an **-ия** noun: **в Россие**. The form is **в России**.
- **О экзамене**. Before a vowel the preposition is **об**: **об экзамене**.
- **О ему** or **о нём** mixed up. After **о**, “about him” is **о нём**.
- Choosing **в** or **на** by translating *in/on* every time. **На занятии** and **в аудитории** are both “in”, in English, and they take different prepositions.

### If your language is English
English uses *in, on, at, about* and does not change the noun. Russian changes the ending, and *in class* is **на занятии**, not a word-for-word *in*. *About* is **о** before a consonant and **об** before a vowel. The same English preposition *in* covers both “located in” and “into”; Russian splits them into prepositional and accusative. Ask **где?** first. If nobody is moving, use the prepositional.

> 💡 Learn places as whole phrases: **в университете**, **на занятии**, **в общежитии**, **в России**.

### Check yourself
1. Where is the book: **на стол**, **на столе**, or **на стола**?
2. “In Russia”: **в Россие** or **в России**?
3. “About the exam”: **о экзамене** or **об экзамене**?

**Answers:** 1) **на столе**. 2) **в России**. 3) **об экзамене**, because **э** is a vowel.`,

    es: `## El caso preposicional

> **En este tema:** dónde está algo y de qué hablas: **в**, **на** y **о** con preposicional.

### Por qué importa
**Книга на стол** nombra una mesa y no dice dónde está el libro. Detrás de **в** y **на**, un lugar pide la terminación del **preposicional**. Esas mismas preposiciones piden **acusativo** cuando vas **hacia** un sitio. **Я в библиотеке** significa que estás allí. **Я иду в библиотеку** significa que vas de camino.

Este caso también dice el tema de una conversación: **о семье**, **об экзамене**.

### La regla

**Regla:** El preposicional no va solo. Sigue a una preposición. En A1 las tres son **в** (en, dentro), **на** (en, sobre, en un acto) y **о / об / обо** (de, sobre un tema).

| Pregunta | Sentido | Modelo | Ejemplo |
|---|---|---|---|
| **Где?** | dónde | **в / на** + preposicional | **Книга на столе.** |
| **О ком?** | de quién | **о** + preposicional | **Мы говорим о друге.** |
| **О чём?** | de qué | **о** + preposicional | **Мы говорим об экзамене.** |

**Regla:** La mayoría de los sustantivos toman **-е**.

| Nominativo | Preposicional | Frase |
|---|---|---|
| **стол** | **столе** | **на столе** |
| **книга** | **книге** | **в книге**, **о книге** |
| **окно** | **окне** | **на окне** |
| **Москва** | **Москве** | **в Москве** |
| **университет** | **университете** | **в университете** |
| **словарь** | **словаре** | **в словаре** |
| **музей** | **музее** | **в музее** |

**Regla:** Los sustantivos en **-ия, -ие, -ий** toman **-ии**, no **-ие**. Los femeninos en **-ь** toman **-и**.

| Nominativo | Preposicional | Frase |
|---|---|---|
| **аудитория** | **аудитории** | **в аудитории** |
| **Россия** | **России** | **в России** |
| **общежитие** | **общежитии** | **в общежитии** |
| **занятие** | **занятии** | **на занятии** |
| **тетрадь** | **тетради** | **в тетради** |

Un grupo pequeño de lugares masculinos usa **-у** tónica en lugar de **-е**. Apréndelos como piezas, no como modelo general: **в лесу** (en el bosque), **на полу** (en el suelo), **в аэропорту** (en el aeropuerto).

**Regla:** **В** y **на** no se dibujan desde el *en* español. Algunos lugares están fijados. Aprende la pareja.

| **в** + preposicional | **на** + preposicional |
|---|---|
| **в университете** | **на занятии** |
| **в библиотеке** | **на уроке** |
| **в аудитории** | **на лекции** |
| **в общежитии** | **на факультете** |
| **в Москве**, **в России** | **на столе**, **на полке** |
| **в центре** | **на работе**, **на почте** |

Los espacios cerrados, las ciudades y los países suelen ir con **в**. Las superficies suelen ir con **на**. Los actos y algunas instituciones van con **на** aunque en español digas “en”: **на занятии** es “en clase”.

**Regla:** La preposición de tema tiene tres formas.

| Forma | Cuándo | Ejemplo |
|---|---|---|
| **о** | ante consonante | **о семье**, **о работе**, **о книге** |
| **об** | ante vocal | **об экзамене**, **об Анне**, **об этом** |
| **обо** | en pocas formas fijas | **обо мне**, **обо всём** |

**Regla:** Los pronombres de tercera persona añaden **н** después de preposición.

| Pronombre | Tras **о** | Ejemplo de lugar |
|---|---|---|
| **я** | **обо мне** | — |
| **ты** | **о тебе** | — |
| **он / оно** | **о нём** | **в нём** |
| **она** | **о ней** | **в ней** |
| **мы** | **о нас** | — |
| **вы** | **о вас** | — |
| **они** | **о них** | **в них** |

Compara con el acusativo de dirección:

| Sentido | Caso | Ejemplo |
|---|---|---|
| dónde estás | preposicional | **Я живу в Москве.** |
| adónde vas | acusativo | **Я еду в Москву.** |
| dónde está el libro | preposicional | **Книга на столе.** |
| adónde pones el libro | acusativo | **Я кладу книгу на стол.** |

### Cómo se usa
Responde a **Где?** con **в** o **на** y la terminación. Responde a **О чём лекция?** con **о / об** y la terminación.

Haz una lista corta de los lugares que sí visitas y dílos en voz alta como frase entera: **в общежитии**, **в библиотеке**, **в аудитории**, **на занятии**. La terminación se recuerda mejor dentro de la frase que sola en una tabla.

**Говорить о** + preposicional es el marco de la conversación: **Мы говорим о семье.** Si la palabra siguiente empieza por vocal, pasa a **об**: **Мы говорим об экзамене.**

### Ejemplos
- **Я живу в Москве.** — Vivo en Moscú.
- **Мы учимся в университете.** — Estudiamos en la universidad.
- **Книга на столе.** — El libro está en la mesa.
- **Студенты в аудитории.** — Los estudiantes están en el aula.
- **Я живу в общежитии.** — Vivo en la residencia.
- **На занятии мы читаем текст.** — En clase leemos un texto.
- **Рассказ о семье.** — Un relato sobre la familia.
- **Мы говорим об экзамене.** — Hablamos del examen.
- **Преподаватель говорит обо мне.** — El profesor habla de mí.
- **Где ты? — Я в библиотеке.**

### Errores típicos
- Sin terminación: **на стол** cuando el libro ya está allí. El lugar es **на столе**.
- La terminación de acusativo femenino en un lugar: **в Москву** significa “a Moscú”, no “en Moscú”. “En Moscú” es **в Москве**.
- **-е** en un sustantivo en **-ия**: **в Россие**. La forma es **в России**.
- **О экзамене**. Ante vocal la preposición es **об**: **об экзамене**.
- Mezclar **о ему** y **о нём**. “De él” es **о нём**.
- Elegir **в** o **на** traduciendo siempre *en*. **На занятии** y **в аудитории** son los dos “en” en español y llevan preposiciones distintas.

### Si tu lengua es el español
La preposición *en* cubre casi todo: *en la mesa*, *en la universidad*, *en clase*. El ruso reparte ese *en* entre **на столе**, **в университете** y **на занятии**, y además cambia la terminación. *De / sobre* un tema es **о** ante consonante y **об** ante vocal: *del examen* es **об экзамене**. El español no tiene caso, así que la terminación es información nueva, no un artículo. *¿Dónde?* es **где?** y pide preposicional. *¿Adónde?* pide acusativo: **в Москву**, no **в Москве**.

> 💡 Aprende los lugares como frases enteras: **в университете**, **на занятии**, **в общежитии**, **в России**.

### Comprueba
1. ¿Dónde está el libro: **на стол**, **на столе** o **на стола**?
2. “En Rusia”: ¿**в Россие** o **в России**?
3. “Del examen”: ¿**о экзамене** u **об экзамене**?

**Respuestas:** 1) **на столе**. 2) **в России**. 3) **об экзамене**, porque **э** es vocal.`,

    de: `## Der Präpositiv

> **In diesem Thema:** wo etwas ist und worüber Sie sprechen: **в**, **на** und **о** mit dem Präpositiv.

### Warum das wichtig ist
**Книга на стол** nennt einen Tisch und sagt noch nicht, wo das Buch liegt. Nach **в** und **на** steht ein Ort im **Präpositiv**. Dieselben zwei Präpositionen verlangen den **Akkusativ**, wenn Sie sich **zu** einem Ort bewegen. **Я в библиотеке** heißt: Sie sind dort. **Я иду в библиотеку** heißt: Sie sind unterwegs dorthin.

Denselben Kasus brauchen Sie für das Thema eines Gesprächs: **о семье**, **об экзамене**.

### Die Regel

**Regel:** Der Präpositiv steht nicht allein. Er folgt einer Präposition. Auf A1 sind es **в** (in), **на** (auf / bei) und **о / об / обо** (über).

| Frage | Bedeutung | Muster | Beispiel |
|---|---|---|---|
| **Где?** | wo | **в / на** + Präpositiv | **Книга на столе.** |
| **О ком?** | über wen | **о** + Präpositiv | **Мы говорим о друге.** |
| **О чём?** | worüber | **о** + Präpositiv | **Мы говорим об экзамене.** |

**Regel:** Die meisten Substantive bekommen **-е**.

| Nominativ | Präpositiv | Wendung |
|---|---|---|
| **стол** | **столе** | **на столе** |
| **книга** | **книге** | **в книге**, **о книге** |
| **окно** | **окне** | **на окне** |
| **Москва** | **Москве** | **в Москве** |
| **университет** | **университете** | **в университете** |
| **словарь** | **словаре** | **в словаре** |
| **музей** | **музее** | **в музее** |

**Regel:** Substantive auf **-ия, -ие, -ий** bekommen **-ии**, nicht **-ие**. Feminina auf **-ь** bekommen **-и**.

| Nominativ | Präpositiv | Wendung |
|---|---|---|
| **аудитория** | **аудитории** | **в аудитории** |
| **Россия** | **России** | **в России** |
| **общежитие** | **общежитии** | **в общежитии** |
| **занятие** | **занятии** | **на занятии** |
| **тетрадь** | **тетради** | **в тетради** |

Eine kleine Gruppe maskuliner Ortswörter hat ein betontes **-у** statt **-е**. Lernen Sie sie als feste Stücke, nicht als Muster für alle Wörter: **в лесу** (im Wald), **на полу** (auf dem Fußboden), **в аэропорту** (am Flughafen).

**Regel:** **В** und **на** lassen sich nicht einfach aus *in* und *auf* zeichnen. Manche Orte liegen fest. Lernen Sie das Paar.

| **в** + Präpositiv | **на** + Präpositiv |
|---|---|
| **в университете** | **на занятии** |
| **в библиотеке** | **на уроке** |
| **в аудитории** | **на лекции** |
| **в общежитии** | **на факультете** |
| **в Москве**, **в России** | **на столе**, **на полке** |
| **в центре** | **на работе**, **на почте** |

Geschlossene Räume, Städte und Länder stehen oft mit **в**. Flächen stehen oft mit **на**. Veranstaltungen und einige Einrichtungen stehen mit **на**, auch wenn das Deutsche *in* oder *bei* sagt: **на занятии** ist „im Unterricht“.

**Regel:** Die Präposition „über“ hat drei Formen.

| Form | Wann | Beispiel |
|---|---|---|
| **о** | vor einem Konsonanten | **о семье**, **о работе**, **о книге** |
| **об** | vor einem Vokal | **об экзамене**, **об Анне**, **об этом** |
| **обо** | in wenigen festen Formen | **обо мне**, **обо всём** |

**Regel:** Pronomen der dritten Person bekommen nach einer Präposition ein **н**.

| Pronomen | Nach **о** | Ort, zum Vergleich |
|---|---|---|
| **я** | **обо мне** | — |
| **ты** | **о тебе** | — |
| **он / оно** | **о нём** | **в нём** |
| **она** | **о ней** | **в ней** |
| **мы** | **о нас** | — |
| **вы** | **о вас** | — |
| **они** | **о них** | **в них** |

Vergleichen Sie das mit dem Akkusativ der Richtung:

| Bedeutung | Kasus | Beispiel |
|---|---|---|
| wo Sie sind | Präpositiv | **Я живу в Москве.** |
| wohin Sie fahren | Akkusativ | **Я еду в Москву.** |
| wo das Buch liegt | Präpositiv | **Книга на столе.** |
| wohin Sie das Buch legen | Akkusativ | **Я кладу книгу на стол.** |

### So verwendet man es
Antworten Sie auf **Где?** mit **в** oder **на** plus Endung. Antworten Sie auf **О чём лекция?** mit **о / об** plus Endung.

Halten Sie eine kurze Liste der Orte, die Sie wirklich aufsuchen, und sprechen Sie sie als ganze Wendung: **в общежитии**, **в библиотеке**, **в аудитории**, **на занятии**. Die Endung bleibt in der Wendung besser hängen als allein in der Tabelle.

**Говорить о** + Präpositiv ist der Gesprächsrahmen: **Мы говорим о семье.** Beginnt das nächste Wort mit einem Vokal, wechseln Sie zu **об**: **Мы говорим об экзамене.**

### Beispiele
- **Я живу в Москве.** — Ich wohne in Moskau.
- **Мы учимся в университете.** — Wir studieren an der Universität.
- **Книга на столе.** — Das Buch liegt auf dem Tisch.
- **Студенты в аудитории.** — Die Studenten sind im Hörsaal.
- **Я живу в общежитии.** — Ich wohne im Wohnheim.
- **На занятии мы читаем текст.** — Im Unterricht lesen wir einen Text.
- **Рассказ о семье.** — Eine Erzählung über die Familie.
- **Мы говорим об экзамене.** — Wir sprechen über die Prüfung.
- **Преподаватель говорит обо мне.** — Der Dozent spricht über mich.
- **Где ты? — Я в библиотеке.**

### Typische Fehler
- Keine Endung: **на стол**, wenn das Buch schon dort liegt. Der Ort ist **на столе**.
- Die feminine Akkusativendung an einem Ort: **в Москву** heißt „nach Moskau“, nicht „in Moskau“. „In Moskau“ ist **в Москве**.
- **-е** an einem Wort auf **-ия**: **в Россие**. Die Form ist **в России**.
- **О экзамене**. Vor einem Vokal heißt die Präposition **об**: **об экзамене**.
- **О ему** und **о нём** vermischen. „Über ihn“ ist **о нём**.
- **В** oder **на** wählen, indem man jedes Mal *in/auf* übersetzt. **На занятии** und **в аудитории** sind im Deutschen beides „im …“, und sie haben verschiedene Präpositionen.

### Wenn Ihre Sprache Deutsch ist
*Wo?* mit *in* und *auf* steht im Deutschen im **Dativ**: *in der Universität, auf dem Tisch*. Der russische Präpositiv ist nicht dieser Dativ. Der russische Dativ antwortet auf **кому?** und kommt später. Ähnlich ist nur die Funktion „Ort ohne Bewegung“. Die Formen sind andere: kein Artikel, Endung am Substantiv, und bei **-ия / -ие** die Endung **-ии** (**в России**, **в общежитии**). *Wohin?* ist in beiden Sprachen ein anderer Kasus; im Russischen der Akkusativ (**в Москву**, **на стол**). *Über* vor einem Vokal wird zu **об**, nicht zu einer zweiten deutschen Präposition. Setzen Sie den Präpositiv nicht gleich mit dem Dativ, sonst bilden Sie später **кому?** mit den Ortsendungen.

> 💡 Lernen Sie Orte als ganze Wendungen: **в университете**, **на занятии**, **в общежитии**, **в России**.

### Prüfen Sie sich
1. Wo liegt das Buch: **на стол**, **на столе** oder **на стола**?
2. „In Russland“: **в Россие** oder **в России**?
3. „Über die Prüfung“: **о экзамене** oder **об экзамене**?

**Antworten:** 1) **на столе**. 2) **в России**. 3) **об экзамене**, weil **э** ein Vokal ist.`,
  },

  "ru-a1-numbers-time": {
    en: `## Numbers and time

> **In this topic:** the numbers you need for a head count and a timetable, the forms **один / одна / одно** and **два / две**, and **во сколько?**

### Why it matters
A class list and a schedule are full of numbers. Russian does not put the dictionary noun after every figure. **Два студента** and **пять студентов** use different forms of “student”. Clock time uses the same idea with the word **час**. If you only memorize “two, three, four” and then say **два студентов**, the phrase is wrong even though the digits are right.

### The rule

**Rule:** Learn the forms, then learn what they do to the noun.

| Figure | Form | Notes |
|---|---|---|
| 1 | **один / одна / одно** | agrees with the noun |
| 2 | **два / две** | **два** masculine and neuter, **две** feminine |
| 3 | **три** | no gender |
| 4 | **четыре** | no gender |
| 5 | **пять** | |
| 6 | **шесть** | |
| 7 | **семь** | |
| 8 | **восемь** | |
| 9 | **девять** | |
| 10 | **десять** | |
| 11 | **одиннадцать** | |
| 12 | **двенадцать** | |
| 13 | **тринадцать** | |
| 14 | **четырнадцать** | |
| 15 | **пятнадцать** | |
| 16 | **шестнадцать** | |
| 17 | **семнадцать** | |
| 18 | **восемнадцать** | |
| 19 | **девятнадцать** | |
| 20 | **двадцать** | |
| 30 | **тридцать** | |
| 40 | **сорок** | not **сорокь** and not a regular “four-ten” |
| 50 | **пятьдесят** | |
| 60 | **шестьдесят** | |
| 70 | **семьдесят** | |
| 80 | **восемьдесят** | |
| 90 | **девяносто** | |
| 100 | **сто** | |

**Один** agrees: **один студент**, **одна студентка**, **одно окно**, **один час**. **Два** is for masculine and neuter: **два студента**, **два окна**, **два часа**. **Две** is for feminine: **две студентки**, **две книги**, **две минуты**.

**Rule:** The **last word** of the number decides the noun. **11–14** are the exception: they do not follow the 1, 2, 3, or 4 inside them.

| The number | The noun | Examples |
|---|---|---|
| ends in **1**, but not **11** | nominative singular | **один студент**, **двадцать один студент** |
| ends in **2, 3, 4**, but not **12, 13, 14** | genitive singular | **два студента**, **три книги**, **четыре окна**, **двадцать два студента** |
| anything else, including **11–14** | genitive plural | **пять студентов**, **одиннадцать книг**, **двенадцать часов** |

Learn the noun **with** the number. You do not need the full genitive-plural system yet. You do need these ready shapes:

| Nominative singular | After 2–4 | After 5, 11–14 |
|---|---|---|
| **студент** | **студента** | **студентов** |
| **студентка** | **студентки** | **студенток** |
| **книга** | **книги** | **книг** |
| **окно** | **окна** | **окон** |
| **час** | **часа** | **часов** |

**Rule:** Asking and telling the time on the hour uses **час** and that same table.

| You want | You say |
|---|---|
| What time is it? | **Который час?** or **Сколько времени?** |
| 1:00 | **час** / **один час** |
| 2:00 | **два часа** |
| 3:00, 4:00 | **три часа**, **четыре часа** |
| 5:00–12:00, and most other hours | **пять часов**, **двенадцать часов** |
| At what time? | **Во сколько?** |
| at 1:00 | **в час** |
| at 2:00 | **в два часа** |
| at 5:00, at 10:00 | **в пять часов**, **в десять часов** |

**Во** сколько, not **в** сколько. The **о** appears before this consonant cluster. In **в десять** there is no extra vowel.

For a timetable, read hour and minutes as two numbers: **десять тридцать** (10:30), **девять пятнадцать** (9:15). That is the form you can produce safely.

You will also hear the half-hour counted toward the **next** hour. Recognize it; do not make it your first speaking pattern.

| You hear | It means |
|---|---|
| **половина второго** | 1:30 |
| **половина третьего** | 2:30 |
| **половина десятого** | 9:30 |

### How to use it
Count people with the gender you see. Two men: **два студента**. Two women: **две студентки**. Five people of a masculine noun: **пять студентов**.

Put a lesson on the clock with **в** + the hour form:

- **Занятие в девять часов.**
- **Во сколько начинается пара? — В десять.**
- **Сейчас три часа.**

**Пара** is a class period in a university timetable. **Начинается** is “begins”.

Use **десять тридцать** when the time is not a full hour. Use **три часа** when someone asks **Который час?** and it is three o’clock.

### Examples
- **В группе два студента и две студентки.** — In the group there are two male students and two female students.
- **На столе пять книг.** — There are five books on the table.
- **В аудитории одиннадцать студентов.** — There are eleven students in the room.
- **Сейчас три часа.** — It is three o’clock.
- **Занятие в девять часов.** — The class is at nine.
- **Во сколько начинается пара? — В десять.** — What time does the class start? — At ten.
- **Лекция в десять тридцать.** — The lecture is at 10:30.
- **Сейчас половина десятого.** — It is 9:30. Recognition.

### Typical mistakes
- **Два книг** or **два книги** for “two books”. Feminine “two” is **две книги**.
- **Пять книга** or **пять книги**. After 5 the ready form is **пять книг**.
- **Одиннадцать студента**. 11 takes the same noun form as 5: **одиннадцать студентов**.
- **Два студентки**. Feminine is **две студентки**.
- **В сколько** instead of **Во сколько**.
- **Сейчас три часов**. 3 takes **три часа**, not the form used from 5 upward.
- Reading **половина десятого** as 10:30. It is 9:30.

### If your language is English
English keeps the noun and adds *-s*: *two books, five books, eleven books*. Russian changes the **form** of the noun, and 11 does not behave like 1. *At three o’clock* is **в три часа**. *What time is it?* is **Который час?** or **Сколько времени?** *What time does it start?* is **Во сколько начинается…?** There is no word for “o’clock” beyond **час / часа / часов**.

> 💡 Say the number and the noun as one piece: **два часа**, **пять часов**, **две книги**, **пять книг**. For minutes, say the two numbers: **десять тридцать**.

### Check yourself
1. How do you say “two books” and “five books”?
2. It is 3:00. Which sentence is right: **Сейчас три часа** or **Сейчас три часов**?
3. The class is at 9. Fill in **Занятие ___** and the question **___ начинается пара?**

**Answers:** 1) **две книги**, **пять книг**. 2) **Сейчас три часа.** 3) **Занятие в девять часов.** **Во сколько начинается пара?**`,

    es: `## Los números y la hora

> **En este tema:** los números de una lista y de un horario, las formas **один / одна / одно** y **два / две**, y **во сколько?**

### Por qué importa
Una lista de clase y un horario están llenos de números. El ruso no pone el sustantivo del diccionario detrás de cada cifra. **Два студента** y **пять студентов** usan formas distintas de “estudiante”. La hora hace lo mismo con la palabra **час**. Si solo memorizas “dos, tres, cuatro” y dices **два студентов**, la frase está mal aunque el número sea el correcto.

### La regla

**Regla:** Aprende las formas y después lo que le hacen al sustantivo.

| Cifra | Forma | Notas |
|---|---|---|
| 1 | **один / одна / одно** | concuerda con el sustantivo |
| 2 | **два / две** | **два** masculino y neutro, **две** femenino |
| 3 | **три** | sin género |
| 4 | **четыре** | sin género |
| 5 | **пять** | |
| 6 | **шесть** | |
| 7 | **семь** | |
| 8 | **восемь** | |
| 9 | **девять** | |
| 10 | **десять** | |
| 11 | **одиннадцать** | |
| 12 | **двенадцать** | |
| 13 | **тринадцать** | |
| 14 | **четырнадцать** | |
| 15 | **пятнадцать** | |
| 16 | **шестнадцать** | |
| 17 | **семнадцать** | |
| 18 | **восемнадцать** | |
| 19 | **девятнадцать** | |
| 20 | **двадцать** | |
| 30 | **тридцать** | |
| 40 | **сорок** | no es un “cuatro-diez” regular |
| 50 | **пятьдесят** | |
| 60 | **шестьдесят** | |
| 70 | **семьдесят** | |
| 80 | **восемьдесят** | |
| 90 | **девяносто** | |
| 100 | **сто** | |

**Один** concuerda: **один студент**, **одна студентка**, **одно окно**, **один час**. **Два** es para masculino y neutro: **два студента**, **два окна**, **два часа**. **Две** es para femenino: **две студентки**, **две книги**, **две минуты**.

**Regla:** La **última palabra** del número decide el sustantivo. **11–14** son la excepción: no siguen el 1, el 2, el 3 ni el 4 que llevan dentro.

| El número | El sustantivo | Ejemplos |
|---|---|---|
| termina en **1**, pero no es **11** | nominativo singular | **один студент**, **двадцать один студент** |
| termina en **2, 3, 4**, pero no es **12, 13, 14** | genitivo singular | **два студента**, **три книги**, **четыре окна**, **двадцать два студента** |
| el resto, incluidos **11–14** | genitivo plural | **пять студентов**, **одиннадцать книг**, **двенадцать часов** |

Aprende el sustantivo **con** el número. Todavía no hace falta todo el sistema del genitivo plural. Sí hacen falta estas formas hechas:

| Nominativo singular | Tras 2–4 | Tras 5 y 11–14 |
|---|---|---|
| **студент** | **студента** | **студентов** |
| **студентка** | **студентки** | **студенток** |
| **книга** | **книги** | **книг** |
| **окно** | **окна** | **окон** |
| **час** | **часа** | **часов** |

**Regla:** Preguntar y decir la hora en punto usa **час** y esa misma tabla.

| Quieres | Dices |
|---|---|
| ¿Qué hora es? | **Который час?** o **Сколько времени?** |
| la 1:00 | **час** / **один час** |
| las 2:00 | **два часа** |
| las 3:00 y las 4:00 | **три часа**, **четыре часа** |
| de las 5:00 a las 12:00, y la mayoría de las otras horas | **пять часов**, **двенадцать часов** |
| ¿A qué hora? | **Во сколько?** |
| a la 1:00 | **в час** |
| a las 2:00 | **в два часа** |
| a las 5:00, a las 10:00 | **в пять часов**, **в десять часов** |

Se dice **Во** сколько, no **в** сколько. La **о** aparece ante ese grupo de consonantes. En **в десять** no hay vocal de más.

En un horario, lee hora y minutos como dos números: **десять тридцать** (10:30), **девять пятнадцать** (9:15). Es la forma que puedes producir con seguridad.

También oirás la media hacia la hora **siguiente**. Reconócela; no la conviertas en tu primer modelo para hablar.

| Oyes | Significa |
|---|---|
| **половина второго** | 1:30 |
| **половина третьего** | 2:30 |
| **половина десятого** | 9:30 |

### Cómo se usa
Cuenta a las personas con el género que ves. Dos hombres: **два студента**. Dos mujeres: **две студентки**. Cinco con un sustantivo masculino: **пять студентов**.

Coloca una clase en el reloj con **в** + la forma de la hora:

- **Занятие в девять часов.**
- **Во сколько начинается пара? — В десять.**
- **Сейчас три часа.**

**Пара** es un bloque de clase en el horario universitario. **Начинается** es “empieza”.

Usa **десять тридцать** cuando la hora no es en punto. Usa **три часа** cuando alguien pregunta **Который час?** y son las tres.

### Ejemplos
- **В группе два студента и две студентки.** — En el grupo hay dos estudiantes y dos estudiantes (ellas).
- **На столе пять книг.** — En la mesa hay cinco libros.
- **В аудитории одиннадцать студентов.** — En el aula hay once estudiantes.
- **Сейчас три часа.** — Son las tres.
- **Занятие в девять часов.** — La clase es a las nueve.
- **Во сколько начинается пара? — В десять.** — ¿A qué hora empieza la clase? — A las diez.
- **Лекция в десять тридцать.** — La clase magistral es a las 10:30.
- **Сейчас половина десятого.** — Son las 9:30. Solo para reconocer.

### Errores típicos
- **Два книг** o **два книги** para “dos libros”. El femenino de “dos” es **две книги**.
- **Пять книга** o **пять книги**. Después de 5 la forma hecha es **пять книг**.
- **Одиннадцать студента**. El 11 lleva la misma forma que el 5: **одиннадцать студентов**.
- **Два студентки**. El femenino es **две студентки**.
- **В сколько** en lugar de **Во сколько**.
- **Сейчас три часов**. El 3 lleva **три часа**, no la forma de 5 en adelante.
- Leer **половина десятого** como las 10:30. Son las 9:30.

### Si tu lengua es el español
*Son las tres* usa un verbo en plural y horas en femenino (*las*). El ruso usa **час**, que es masculino, y el número manda en la forma: **три часа**, **пять часов**. No hay artículo ni *son*. *A las nueve* es **в девять часов**. *¿A qué hora?* es **Во сколько?** *Uno* concuerda en español (*un libro, una mesa*); en ruso también, con tres formas: **один / одна / одно**. *Dos* no tiene género en español; en ruso sí: **два** y **две**. Por eso *dos libros* no se calcula desde *dos*: **книга** es femenino, así que **две книги**.

> 💡 Di el número y el sustantivo como una pieza: **два часа**, **пять часов**, **две книги**, **пять книг**. Para los minutos, di los dos números: **десять тридцать**.

### Comprueba
1. ¿Cómo se dice “dos libros” y “cinco libros”?
2. Son las 3:00. ¿Qué frase es correcta: **Сейчас три часа** o **Сейчас три часов**?
3. La clase es a las 9. Completa **Занятие ___** y la pregunta **___ начинается пара?**

**Respuestas:** 1) **две книги**, **пять книг**. 2) **Сейчас три часа.** 3) **Занятие в девять часов.** **Во сколько начинается пара?**`,

    de: `## Zahlen und Uhrzeit

> **In diesem Thema:** die Zahlen für eine Liste und einen Stundenplan, die Formen **один / одна / одно** und **два / две**, und **во сколько?**

### Warum das wichtig ist
Eine Teilnehmerliste und ein Stundenplan bestehen aus Zahlen. Russisch setzt nicht nach jeder Zahl die Wörterbuchform des Substantivs. **Два студента** und **пять студентов** verwenden verschiedene Formen von „Student“. Die Uhrzeit tut dasselbe mit dem Wort **час**. Wer nur „zwei, drei, vier“ auswendig lernt und dann **два студентов** sagt, hat die Ziffer richtig und die Wendung falsch.

### Die Regel

**Regel:** Lernen Sie die Formen, und danach, was sie mit dem Substantiv tun.

| Zahl | Form | Hinweis |
|---|---|---|
| 1 | **один / одна / одно** | richtet sich nach dem Substantiv |
| 2 | **два / две** | **два** maskulin und neutrum, **две** feminin |
| 3 | **три** | kein Genus |
| 4 | **четыре** | kein Genus |
| 5 | **пять** | |
| 6 | **шесть** | |
| 7 | **семь** | |
| 8 | **восемь** | |
| 9 | **девять** | |
| 10 | **десять** | |
| 11 | **одиннадцать** | |
| 12 | **двенадцать** | |
| 13 | **тринадцать** | |
| 14 | **четырнадцать** | |
| 15 | **пятнадцать** | |
| 16 | **шестнадцать** | |
| 17 | **семнадцать** | |
| 18 | **восемнадцать** | |
| 19 | **девятнадцать** | |
| 20 | **двадцать** | |
| 30 | **тридцать** | |
| 40 | **сорок** | nicht regelmäßig aus „vier“ und „zehn“ gebaut |
| 50 | **пятьдесят** | |
| 60 | **шестьдесят** | |
| 70 | **семьдесят** | |
| 80 | **восемьдесят** | |
| 90 | **девяносто** | |
| 100 | **сто** | |

**Один** richtet sich: **один студент**, **одна студентка**, **одно окно**, **один час**. **Два** gilt für Maskulinum und Neutrum: **два студента**, **два окна**, **два часа**. **Две** gilt für das Femininum: **две студентки**, **две книги**, **две минуты**.

**Regel:** Das **letzte Wort** der Zahl entscheidet über das Substantiv. **11–14** sind die Ausnahme: Sie folgen nicht der 1, 2, 3 oder 4 in ihrem Inneren.

| Die Zahl | Das Substantiv | Beispiele |
|---|---|---|
| endet auf **1**, aber nicht **11** | Nominativ Singular | **один студент**, **двадцать один студент** |
| endet auf **2, 3, 4**, aber nicht **12, 13, 14** | Genitiv Singular | **два студента**, **три книги**, **четыре окна**, **двадцать два студента** |
| alles andere, einschließlich **11–14** | Genitiv Plural | **пять студентов**, **одиннадцать книг**, **двенадцать часов** |

Lernen Sie das Substantiv **mit** der Zahl. Das ganze System des Genitiv Plural brauchen Sie noch nicht. Diese fertigen Formen brauchen Sie:

| Nominativ Singular | Nach 2–4 | Nach 5 und 11–14 |
|---|---|---|
| **студент** | **студента** | **студентов** |
| **студентка** | **студентки** | **студенток** |
| **книга** | **книги** | **книг** |
| **окно** | **окна** | **окон** |
| **час** | **часа** | **часов** |

**Regel:** Die volle Stunde fragen und sagen heißt **час** und dieselbe Tabelle.

| Sie wollen | Sie sagen |
|---|---|
| Wie spät ist es? | **Который час?** oder **Сколько времени?** |
| 1:00 | **час** / **один час** |
| 2:00 | **два часа** |
| 3:00, 4:00 | **три часа**, **четыре часа** |
| 5:00–12:00 und die meisten anderen Stunden | **пять часов**, **двенадцать часов** |
| Um wie viel Uhr? | **Во сколько?** |
| um 1:00 | **в час** |
| um 2:00 | **в два часа** |
| um 5:00, um 10:00 | **в пять часов**, **в десять часов** |

Es heißt **Во** сколько, nicht **в** сколько. Das **о** steht vor dieser Konsonantengruppe. In **в десять** kommt kein Extra-Vokal dazu.

Im Stundenplan lesen Sie Stunde und Minuten als zwei Zahlen: **десять тридцать** (10:30), **девять пятнадцать** (9:15). Das ist die Form, die Sie sicher bilden können.

Sie hören auch die halbe Stunde auf die **nächste** Stunde hin gezählt. Erkennen Sie sie; machen Sie sie nicht zu Ihrem ersten Sprechmuster.

| Sie hören | Es bedeutet |
|---|---|
| **половина второго** | 1:30 |
| **половина третьего** | 2:30 |
| **половина десятого** | 9:30 |

### So verwendet man es
Zählen Sie Personen mit dem Genus, das Sie sehen. Zwei Männer: **два студента**. Zwei Frauen: **две студентки**. Fünf bei einem maskulinen Substantiv: **пять студентов**.

Setzen Sie eine Lehrveranstaltung auf die Uhr mit **в** + der Stundenform:

- **Занятие в девять часов.**
- **Во сколько начинается пара? — В десять.**
- **Сейчас три часа.**

**Пара** ist ein Block im Universitätsstundenplan. **Начинается** heißt „beginnt“.

Sagen Sie **десять тридцать**, wenn die Zeit keine volle Stunde ist. Sagen Sie **три часа**, wenn jemand **Который час?** fragt und es drei Uhr ist.

### Beispiele
- **В группе два студента и две студентки.** — In der Gruppe sind zwei Studenten und zwei Studentinnen.
- **На столе пять книг.** — Auf dem Tisch liegen fünf Bücher.
- **В аудитории одиннадцать студентов.** — Im Hörsaal sind elf Studenten.
- **Сейчас три часа.** — Es ist drei Uhr.
- **Занятие в девять часов.** — Der Unterricht ist um neun.
- **Во сколько начинается пара? — В десять.** — Um wie viel Uhr beginnt die Stunde? — Um zehn.
- **Лекция в десять тридцать.** — Die Vorlesung ist um 10:30.
- **Сейчас половина десятого.** — Es ist 9:30. Nur zum Erkennen.

### Typische Fehler
- **Два книг** oder **два книги** für „zwei Bücher“. Feminin „zwei“ heißt **две книги**.
- **Пять книга** oder **пять книги**. Nach 5 ist die fertige Form **пять книг**.
- **Одиннадцать студента**. 11 nimmt dieselbe Substantivform wie 5: **одиннадцать студентов**.
- **Два студентки**. Feminin heißt es **две студентки**.
- **В сколько** statt **Во сколько**.
- **Сейчас три часов**. 3 verlangt **три часа**, nicht die Form ab 5.
- **Половина десятого** als 10:30 lesen. Es ist 9:30.

### Wenn Ihre Sprache Deutsch ist
*Es ist drei Uhr* lässt *Uhr* unverändert. Russisch beugt **час** mit der Zahl: **три часа**, **пять часов**. *Um drei* ist **в три часа**. *Wie spät ist es?* ist **Который час?** oder **Сколько времени?** *Um wie viel Uhr beginnt …?* ist **Во сколько начинается…?** *Zwei* hat im Deutschen kein Femininum; Russisch unterscheidet **два** und **две**. *Zwei Bücher* rechnen Sie also nicht von *zwei* allein: **книга** ist feminin, deshalb **две книги**. *Ein* richtet sich auch im Deutschen (*ein Student, eine Studentin*); Russisch hat dazu noch das Neutrum **одно**.

> 💡 Sagen Sie Zahl und Substantiv als ein Stück: **два часа**, **пять часов**, **две книги**, **пять книг**. Für Minuten sagen Sie die zwei Zahlen: **десять тридцать**.

### Prüfen Sie sich
1. Wie sagt man „zwei Bücher“ und „fünf Bücher“?
2. Es ist 3:00. Welcher Satz stimmt: **Сейчас три часа** oder **Сейчас три часов**?
3. Der Unterricht ist um 9. Ergänzen Sie **Занятие ___** und die Frage **___ начинается пара?**

**Antworten:** 1) **две книги**, **пять книг**. 2) **Сейчас три часа.** 3) **Занятие в девять часов.** **Во сколько начинается пара?**`,
  },

  "ru-a2-past-tense": {
    en: `## The past tense

> **In this topic:** **был / была / было / были**, the past in **-л**, and agreement by gender and number.

### Why it matters
A story about yesterday needs a past form in almost every sentence: where you were, what you read, what you did not understand. Russian does not build that past with a helping verb, and it does not use the present endings from A1. **Я читаю вчера** keeps today’s ending on yesterday’s sentence.

The past also ignores **я / ты / он** as persons. It looks at **gender** and **number**. A man says **я был**. A woman says **я была**. One professor, addressed politely, still takes the plural form: **вы были**.

### The rule

**Rule:** For a regular verb, drop **-ть** from the infinitive and add a past ending. The ending agrees with the subject’s gender and number. All persons inside one box share one form.

| Who the subject is | Ending | **быть** | **читать** | **понять** |
|---|---|---|---|---|
| Masculine singular: **я**, **ты**, **он** | **-л** | **был** | **читал** | **понял** |
| Feminine singular: **я**, **ты**, **она** | **-ла** | **была** | **читала** | **поняла** |
| Neuter singular: **оно** | **-ло** | **было** | **читало** | **поняло** |
| Plural, including polite **вы** | **-ли** | **были** | **читали** | **поняли** |

**Сдать** follows the same table: **сдал, сдала, сдало, сдали**.

**Вы** is always the plural line, even when you are speaking to one lecturer. **Где вы были?** **Вы поняли вопрос?** Informal **ты** uses the masculine or feminine line, matching the person you are talking to.

**Rule:** **Не** stands immediately before the past form. There is no extra word for “did”.

- **Я не был в библиотеке.**
- **Мы не поняли вопрос.**
- **Она не сдала тест.**

**Rule:** Some frequent verbs have no **-л** in the masculine singular, because the past stem ends in a consonant. The feminine, neuter, and plural keep **-л**.

| Infinitive | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| **идти** | **шёл** | **шла** | **шло** | **шли** |
| **мочь** | **мог** | **могла** | **могло** | **могли** |

**Шёл** is the past of **идти**. **Ходили** is the past of a different verb, **ходить**. The motion topic compares them. Here, produce **ходили** and recognize **шёл**.

**Rule:** **-ся / -сь** stays on the end. After a consonant, use **-ся**. After a vowel, use **-сь**.

| Subject | **учиться** |
|---|---|
| Masculine singular | **учился** |
| Feminine singular | **училась** |
| Neuter singular | **училось** |
| Plural | **учились** |

In speech, several feminine forms stress the ending: **была́**, **поняла́**, **сдала́**. The letters do not change.

A neuter subject takes **-ло**: **Занятие было в девять часов.** Impersonal weather does the same: **Вчера было холодно.**

### How to use it
Tell yesterday in short past sentences. Put **вчера** first or after the subject.

1. Where you were: **был / была** plus a place you already know (**в библиотеке**, **в музее**, **дома**).
2. What you did: a verb in **-л / -ла / -ли**.
3. What did not work: **не** plus the past.
4. A question to a classmate uses **ты** and gender. A question to a lecturer uses **вы** and **-ли**.

**Она сдала тест** means she passed the test. **Мы ходили в парк** means we went to the park.

### Examples
- **Вчера я был в библиотеке.** — Yesterday I (masculine) was in the library.
- **Вчера я была в музее.** — Yesterday I (feminine) was at the museum.
- **Где вы были?** — Where were you? Polite, or plural.
- **Она сдала тест.** — She passed the test.
- **Мы не поняли вопрос.** — We did not understand the question.
- **Они читали текст.** — They read the text.
- **Мы ходили в парк.** — We went to the park.
- **Я не мог понять вопрос.** — I (masculine) could not understand the question.
- **В университете она училась два года.** — She studied at the university for two years.
- **Вчера было холодно.** — It was cold yesterday.

### Typical mistakes
- **Она читал** or a woman saying **я был**. The feminine singular ending is **-ла**: **читала**, **была**.
- **Вы был** to a professor. Polite **вы** takes **были**, **читали**, **поняли**.
- **Они был**. Plural is **были**.
- **Я читаю вчера**. Yesterday takes the past ending, not **читаю**.
- **Я не понял** split as **я был не понял**. **Не** alone stands before the past form.
- Writing **шол** or **идл**. The masculine past of **идти** is **шёл**.
- **Училася**. After a vowel the particle is **-сь**: **училась**.

### If your language is English
English past barely changes for the subject: *walked* is the same for I, you, she, and they, and *was / were* only partly marks number. Russian past does the opposite. It marks gender and number, and it ignores the difference between *I*, *you*, and *he*. *I was* is **я был** or **я была**, according to the speaker. There is no *did*. Polite or plural *you* is **вы** plus the plural past, even for one person: **Где вы были?**

> 💡 Match the ending to the person in the story. A man: **я был**, **я читал**. A woman: **я была**, **я читала**. A group, or a professor: **были**, **читали**.

### Check yourself
1. The speaker is a woman. Complete **Вчера я ___ в музее.** How do you ask a professor **Где вы ___?**
2. Choose the form: **Они (читал / читала / читали) текст.**
3. What is the masculine past of **идти**, and the plural past of **ходить**?

**Answers:** 1) **была.** **Где вы были?** 2) **читали.** 3) **шёл**, **ходили.**`,

    es: `## El tiempo pasado

> **En este tema:** **был / была / было / были**, el pasado en **-л** y la concordancia de género y número.

### Por qué importa
Contar el día de ayer exige pasado en casi cada frase: dónde estuviste, qué leíste, qué no entendiste. El ruso no construye ese pasado con un auxiliar, y no reutiliza las terminaciones de presente del A1. **Я читаю вчера** deja la forma de hoy en una frase de ayer.

El pasado tampoco distingue la persona **я / ты / он**. Mira el **género** y el **número**. Un hombre dice **я был**. Una mujer dice **я была**. Un profesor, tratado de **вы**, lleva forma de plural: **вы были**.

### La regla

**Regla:** En un verbo regular se quita **-ть** del infinitivo y se añade la terminación de pasado. Esa terminación concuerda con el género y el número del sujeto. Dentro de cada casilla, todas las personas comparten una sola forma.

| Quién es el sujeto | Terminación | **быть** | **читать** | **понять** |
|---|---|---|---|---|
| Singular masculino: **я**, **ты**, **он** | **-л** | **был** | **читал** | **понял** |
| Singular femenino: **я**, **ты**, **она** | **-ла** | **была** | **читала** | **поняла** |
| Singular neutro: **оно** | **-ло** | **было** | **читало** | **поняло** |
| Plural, incluido el **вы** de cortesía | **-ли** | **были** | **читали** | **поняли** |

**Сдать** usa la misma tabla: **сдал, сдала, сдало, сдали**.

**Вы** va siempre en la fila del plural, aunque hables con un solo docente. **Где вы были?** **Вы поняли вопрос?** El **ты** informal usa la fila masculina o femenina, según la persona con la que hablas.

**Regla:** **Не** va inmediatamente delante de la forma de pasado. No hay una palabra aparte para “did” ni para el auxiliar *haber*.

- **Я не был в библиотеке.**
- **Мы не поняли вопрос.**
- **Она не сдала тест.**

**Regla:** Algunos verbos frecuentes no llevan **-л** en el masculino singular, porque el tema de pasado termina en consonante. El femenino, el neutro y el plural conservan la **-л**.

| Infinitivo | Masculino | Femenino | Neutro | Plural |
|---|---|---|---|---|
| **идти** | **шёл** | **шла** | **шло** | **шли** |
| **мочь** | **мог** | **могла** | **могло** | **могли** |

**Шёл** es el pasado de **идти**. **Ходили** es el pasado de otro verbo, **ходить**. El tema del movimiento los compara. Aquí hay que producir **ходили** y reconocer **шёл**.

**Regla:** **-ся / -сь** se queda al final. Detrás de consonante, **-ся**. Detrás de vocal, **-сь**.

| Sujeto | **учиться** |
|---|---|
| Singular masculino | **учился** |
| Singular femenino | **училась** |
| Singular neutro | **училось** |
| Plural | **учились** |

En el habla, varias formas femeninas llevan el acento en la terminación: **была́**, **поняла́**, **сдала́**. Las letras no cambian.

Un sujeto neutro lleva **-ло**: **Занятие было в девять часов.** El tiempo impersonal hace lo mismo: **Вчера было холодно.**

### Cómo se usa
Cuenta el ayer con frases cortas en pasado. **Вчера** puede ir al principio o detrás del sujeto.

1. Dónde estuviste: **был / была** y un lugar que ya conoces (**в библиотеке**, **в музее**, **дома**).
2. Qué hiciste: un verbo en **-л / -ла / -ли**.
3. Lo que no salió: **не** más el pasado.
4. La pregunta a un compañero usa **ты** y el género. La pregunta a un profesor usa **вы** y **-ли**.

**Она сдала тест** significa que aprobó el examen corto. **Мы ходили в парк** significa que fuimos al parque.

### Ejemplos
- **Вчера я был в библиотеке.** — Ayer estuve (hombre) en la biblioteca.
- **Вчера я была в музее.** — Ayer estuve (mujer) en el museo.
- **Где вы были?** — ¿Dónde estuvo usted? / ¿Dónde estuvieron?
- **Она сдала тест.** — Ella aprobó el test.
- **Мы не поняли вопрос.** — No entendimos la pregunta.
- **Они читали текст.** — Ellos leyeron el texto.
- **Мы ходили в парк.** — Fuimos al parque.
- **Я не мог понять вопрос.** — Yo (hombre) no pude entender la pregunta.
- **В университете она училась два года.** — Estudió en la universidad dos años.
- **Вчера было холодно.** — Ayer hizo frío.

### Errores típicos
- **Она читал**, o una mujer que dice **я был**. El singular femenino lleva **-ла**: **читала**, **была**.
- **Вы был** dirigido a un profesor. El **вы** de cortesía lleva **были**, **читали**, **поняли**.
- **Они был**. El plural es **были**.
- **Я читаю вчера**. Ayer pide la terminación de pasado, no **читаю**.
- Separar la negación en **я был не понял**. Basta **не** delante del pasado: **я не понял**.
- Escribir **шол** o **идл**. El pasado masculino de **идти** es **шёл**.
- **Училася**. Detrás de vocal la partícula es **-сь**: **училась**.

### Si tu lengua es el español
En español el pretérito cambia por persona: *estuve, estuviste, estuvo, estuvimos*. No cambia porque quien habla sea hombre o mujer. El ruso hace lo contrario: **был / была / было / были** marcan género y número, y **я**, **ты** y **он** comparten forma si el género coincide. No hay *haber* ni participio en esta construcción. *Usted estuvo* es singular en español; en ruso la cortesía es **вы** con pasado plural: **Где вы были?**, no **Вы был**. *Ustedes estuvieron* sí coincide con esa fila de plural.

> 💡 Elige la terminación según la persona de la historia. Hombre: **я был**, **я читал**. Mujer: **я была**, **я читала**. Un grupo, o un profesor: **были**, **читали**.

### Comprueba
1. Habla una mujer. Completa **Вчера я ___ в музее.** ¿Cómo preguntas a un profesor **Где вы ___?**
2. Elige la forma: **Они (читал / читала / читали) текст.**
3. ¿Cuál es el pasado masculino de **идти** y el pasado plural de **ходить**?

**Respuestas:** 1) **была.** **Где вы были?** 2) **читали.** 3) **шёл**, **ходили.**`,

    de: `## Die Vergangenheit

> **In diesem Thema:** **был / была / было / были**, die Vergangenheit auf **-л** und die Kongruenz nach Genus und Numerus.

### Warum das wichtig ist
Eine Erzählung über gestern braucht fast in jedem Satz eine Vergangenheitsform: wo Sie waren, was Sie gelesen haben, was Sie nicht verstanden haben. Russisch baut diese Vergangenheit nicht mit einem Hilfsverb, und es benutzt nicht die Präsensendungen aus A1. **Я читаю вчера** lässt die Form von heute in einem Satz über gestern stehen.

Die Vergangenheit unterscheidet auch nicht die Personen **я / ты / он**. Sie richtet sich nach **Genus** und **Numerus**. Ein Mann sagt **я был**. Eine Frau sagt **я была**. Eine Lehrperson, höflich mit **вы** angesprochen, steht im Plural: **вы были**.

### Die Regel

**Regel:** Bei einem regelmäßigen Verb fällt **-ть** vom Infinitiv ab, und eine Vergangenheitsendung kommt dazu. Die Endung richtet sich nach Genus und Numerus des Subjekts. In jedem Feld teilen sich alle Personen eine Form.

| Wer das Subjekt ist | Endung | **быть** | **читать** | **понять** |
|---|---|---|---|---|
| Maskulinum Singular: **я**, **ты**, **он** | **-л** | **был** | **читал** | **понял** |
| Femininum Singular: **я**, **ты**, **она** | **-ла** | **была** | **читала** | **поняла** |
| Neutrum Singular: **оно** | **-ло** | **было** | **читало** | **поняло** |
| Plural, einschließlich höflichem **вы** | **-ли** | **были** | **читали** | **поняли** |

**Сдать** folgt derselben Tabelle: **сдал, сдала, сдало, сдали**.

**Вы** steht immer in der Pluralzeile, auch wenn Sie mit genau einer Lehrperson sprechen. **Где вы были?** **Вы поняли вопрос?** Informelles **ты** benutzt die maskuline oder feminine Zeile, passend zur Person, mit der Sie sprechen.

**Regel:** **Не** steht unmittelbar vor der Vergangenheitsform. Es gibt kein zusätzliches Wort für „did“ und kein Hilfsverb wie *haben* oder *sein*.

- **Я не был в библиотеке.**
- **Мы не поняли вопрос.**
- **Она не сдала тест.**

**Regel:** Einige häufige Verben haben im maskulinen Singular kein **-л**, weil der Vergangenheitsstamm auf einen Konsonanten endet. Femininum, Neutrum und Plural behalten **-л**.

| Infinitiv | Maskulinum | Femininum | Neutrum | Plural |
|---|---|---|---|---|
| **идти** | **шёл** | **шла** | **шло** | **шли** |
| **мочь** | **мог** | **могла** | **могло** | **могли** |

**Шёл** ist die Vergangenheit von **идти**. **Ходили** ist die Vergangenheit eines anderen Verbs, **ходить**. Das Thema zu den Bewegungsverben vergleicht die beiden. Hier bilden Sie **ходили** und erkennen **шёл**.

**Regel:** **-ся / -сь** bleibt am Ende. Nach einem Konsonanten steht **-ся**. Nach einem Vokal steht **-сь**.

| Subjekt | **учиться** |
|---|---|
| Maskulinum Singular | **учился** |
| Femininum Singular | **училась** |
| Neutrum Singular | **училось** |
| Plural | **учились** |

In der gesprochenen Sprache tragen mehrere feminine Formen die Betonung auf der Endung: **была́**, **поняла́**, **сдала́**. Die Buchstaben bleiben gleich.

Ein neutrales Subjekt bekommt **-ло**: **Занятие было в девять часов.** Unpersönliches Wetter funktioniert genauso: **Вчера было холодно.**

### So verwendet man es
Erzählen Sie den gestrigen Tag in kurzen Sätzen in der Vergangenheit. **Вчера** steht am Anfang oder nach dem Subjekt.

1. Wo Sie waren: **был / была** plus ein Ort, den Sie schon kennen (**в библиотеке**, **в музее**, **дома**).
2. Was Sie getan haben: ein Verb auf **-л / -ла / -ли**.
3. Was nicht geklappt hat: **не** plus Vergangenheit.
4. Die Frage an eine Kommilitonin oder einen Kommilitonen benutzt **ты** und das Genus. Die Frage an eine Lehrperson benutzt **вы** und **-ли**.

**Она сдала тест** heißt, dass sie den Test bestanden hat. **Мы ходили в парк** heißt, dass wir in den Park gegangen sind.

### Beispiele
- **Вчера я был в библиотеке.** — Gestern war ich (maskulin) in der Bibliothek.
- **Вчера я была в музее.** — Gestern war ich (feminin) im Museum.
- **Где вы были?** — Wo waren Sie? / Wo wart ihr?
- **Она сдала тест.** — Sie hat den Test bestanden.
- **Мы не поняли вопрос.** — Wir haben die Frage nicht verstanden.
- **Они читали текст.** — Sie haben den Text gelesen.
- **Мы ходили в парк.** — Wir sind in den Park gegangen.
- **Я не мог понять вопрос.** — Ich (maskulin) konnte die Frage nicht verstehen.
- **В университете она училась два года.** — Sie hat zwei Jahre an der Universität studiert.
- **Вчера было холодно.** — Gestern war es kalt.

### Typische Fehler
- **Она читал**, oder eine Frau sagt **я был**. Der feminine Singular hat **-ла**: **читала**, **была**.
- **Вы был** gegenüber einer Lehrperson. Höfliches **вы** verlangt **были**, **читали**, **поняли**.
- **Они был**. Der Plural heißt **были**.
- **Я читаю вчера**. Gestern verlangt die Vergangenheitsendung, nicht **читаю**.
- Die Negation auseinanderziehen: **я был не понял**. **Не** steht allein vor der Vergangenheitsform: **я не понял**.
- **Шол** oder **идл** schreiben. Die maskuline Vergangenheit von **идти** ist **шёл**.
- **Училася**. Nach einem Vokal heißt die Partikel **-сь**: **училась**.

### Wenn Ihre Sprache Deutsch ist
Deutsch markiert in der Vergangenheit die Person: *ich war, du warst, er war, wir waren*, und im Perfekt kommt *haben* oder *sein* dazu. Das Genus der sprechenden Person ändert die Verbform nicht. Russisch macht es umgekehrt. **Был / была / было / были** markieren Genus und Numerus, und **я**, **ты** und **он** teilen sich eine Form, wenn das Genus gleich ist. Ein Hilfsverb gibt es nicht. *Sie waren* passt zur Pluralzeile: höfliches **вы** heißt **Вы были**, **Вы читали**, auch bei einer einzelnen Person. *Du warst* wird zu **ты был** oder **ты была**, je nach Genus.

> 💡 Wählen Sie die Endung nach der Person in der Geschichte. Ein Mann: **я был**, **я читал**. Eine Frau: **я была**, **я читала**. Eine Gruppe oder eine Lehrperson: **были**, **читали**.

### Prüfen Sie sich
1. Die Sprecherin ist eine Frau. Ergänzen Sie **Вчера я ___ в музее.** Wie fragen Sie eine Lehrperson: **Где вы ___?**
2. Wählen Sie die Form: **Они (читал / читала / читали) текст.**
3. Wie lautet die maskuline Vergangenheit von **идти** und die Pluralvergangenheit von **ходить**?

**Antworten:** 1) **была.** **Где вы были?** 2) **читали.** 3) **шёл**, **ходили.**`,
  },

  "ru-a2-future": {
    en: `## The future tense

> **In this topic:** **буду** plus an infinitive, and the one-word future of a result, including **прочитаю** and **приедет**.

### Why it matters
A plan for tomorrow has two different shapes in Russian, and English *will* hides the choice. **Я буду читать** is the activity: you will spend time reading. **Я прочитаю** is the result: you will get to the end of the text. The dormitory, the exam, and the Monday arrival all need one of these two patterns.

The past agreed with gender. The future does not. **Она будет** and **он будет** share one form. What changes is the person of **буду**, or the person ending on the one-word future.

### The rule

**Rule:** The compound future is the future of **быть** plus an imperfective infinitive. Only **буду** changes. The infinitive stays in the dictionary form. Use this pattern for a process, a plan, or a repeated future action.

| Person | Form of **быть** | Example |
|---|---|---|
| **я** | **буду** | **Я буду читать текст.** |
| **ты** | **будешь** | **Ты будешь жить в общежитии.** |
| **он / она / оно** | **будет** | **Завтра будет лекция.** |
| **мы** | **будем** | **Мы будем жить в общежитии.** |
| **вы** | **будете** | **Что вы будете делать потом?** |
| **они** | **будут** | **Скоро будут каникулы.** |

**Буду** by itself means “will be”: **Завтра я буду в библиотеке.** **Скоро будет экзамен.**

**Rule:** The one-word future uses the present endings you already know, on a perfective verb. Those forms do not mean “now”. They mean a future result. **Прочитать** takes the same endings as **читать**.

| Person | **прочитать** | **приехать** |
|---|---|---|
| **я** | **прочитаю** | **приеду** |
| **ты** | **прочитаешь** | **приедешь** |
| **он / она** | **прочитает** | **приедет** |
| **мы** | **прочитаем** | **приедем** |
| **вы** | **прочитаете** | **приедете** |
| **они** | **прочитают** | **приедут** |

**Написать** keeps the consonant change of **писать**: **напишу, напишешь, напишет, напишем, напишете, напишут**.

**Приедет** is a ready result form, “he will arrive”. The prefix system of motion verbs comes later. In this topic, learn the six forms as the future of this verb.

**Rule:** Keep the two patterns apart.

| You mean | Pattern | Example |
|---|---|---|
| The activity, the plan, “for two hours” | **буду** + infinitive | **Завтра я буду читать два часа.** |
| The result, “done” | one word | **Завтра я прочитаю текст.** |
| A habit from now on | **буду** + infinitive, or the present if it is already your routine | **Я буду заниматься каждый день.** |

**Я буду прочитать** mixes the two patterns. A perfective verb does not take **буду**.

A scheduled one-way trip is often the present of a motion verb: **Завтра я еду в Москву.** Recognize that sentence. For an ordinary activity in this topic, produce **буду** plus the infinitive, or the one-word result.

**Не** stands before **буду**, or before the one-word form.

- **Я не буду опаздывать.**
- **Сегодня я не прочитаю весь текст.**

Three tenses of one idea, side by side:

- **Она прочитала текст вчера.** Past result.
- **Она будет читать текст завтра.** Future activity.
- **Она прочитает текст завтра.** Future result.

### How to use it
Ask **Что ты будешь делать завтра?** and answer with **буду** plus a verb you know: **читать**, **писать**, **жить**, **заниматься**, **готовиться**.

Use **сначала** and **потом** to order the day: **Сначала лекция, потом я прочитаю текст.**

Use the one-word future when the sentence names a finished outcome: the text will be read, the person will arrive. **Он приедет в понедельник.**

**Скоро** fits both patterns: **Скоро я буду готовиться к экзамену.** **Скоро будет тест.**

### Examples
- **Я буду читать текст вечером.** — I will read the text this evening. The activity.
- **Мы будем жить в общежитии.** — We will live in the dormitory.
- **Завтра я буду в университете.** — I will be at the university tomorrow.
- **Я прочитаю текст завтра.** — I will finish the text tomorrow.
- **Он приедет в понедельник.** — He will arrive on Monday.
- **Я напишу письмо вечером.** — I will write the letter this evening.
- **Она не будет опаздывать.** — She will not be late.
- **Что вы будете делать потом?** — What will you do afterwards?
- **Сначала обед, потом я буду делать домашнее задание.** — First lunch, then I will do the homework.
- **Скоро будет экзамен.** — There will be an exam soon.

### Typical mistakes
- **Я буду прочитать текст.** A result is one word: **Я прочитаю текст.**
- **Мы буду жить.** **Мы** takes **будем**.
- A feminine ending on the future: **она будет читала**. Gender belongs to the past. The future is **будет читать** or **прочитает**.
- **Я написаю**. The **я** form of **написать** is **напишу**.
- **Каждый день я прочитаю текст** for a habit. A repeated plan is **Я буду читать** or present **Я читаю**.
- Leaving out the infinitive: **Я буду текст**. The compound future needs a verb: **Я буду читать текст**.

### If your language is English
*Will* and *be going to* both cover more than one Russian pattern. *I will be reading* and *I will spend two hours reading* are **буду читать**. *I will read it through* and *I will get it done* are **прочитаю**. The one-word future has no *will* in it. It only looks like a present because the endings are the present endings. **Я прочитаю** is not “I am reading”.

> 💡 If the sentence still works with “for two hours” or “every day”, use **буду** plus the infinitive. If the sentence means “done”, use the one-word form.

### Check yourself
1. Complete: **Мы ___ жить в общежитии.**
2. Which sentence is the result: **Я буду прочитать текст** or **Я прочитаю текст**?
3. She will not be late. Complete **Она не ___ опаздывать.**

**Answers:** 1) **будем.** 2) **Я прочитаю текст.** 3) **будет.**`,

    es: `## El futuro

> **En este tema:** **буду** más infinitivo, y el futuro en una sola palabra para el resultado, con **прочитаю** y **приедет**.

### Por qué importa
Un plan para mañana tiene dos formas distintas en ruso, y el futuro español las esconde en un solo tiempo. **Я буду читать** es la actividad: vas a pasar un rato leyendo. **Я прочитаю** es el resultado: el texto queda leído. La residencia, el examen y la llegada del lunes piden uno de esos dos modelos.

El pasado concordaba en género. El futuro no. **Она будет** y **он будет** comparten forma. Lo que cambia es la persona de **буду**, o la terminación de persona en el futuro de una sola palabra.

### La regla

**Regla:** El futuro compuesto es el futuro de **быть** más un infinitivo imperfectivo. Solo cambia **буду**. El infinitivo se queda en la forma del diccionario. Este modelo sirve para un proceso, un plan o una acción futura repetida.

| Persona | Forma de **быть** | Ejemplo |
|---|---|---|
| **я** | **буду** | **Я буду читать текст.** |
| **ты** | **будешь** | **Ты будешь жить в общежитии.** |
| **он / она / оно** | **будет** | **Завтра будет лекция.** |
| **мы** | **будем** | **Мы будем жить в общежитии.** |
| **вы** | **будете** | **Что вы будете делать потом?** |
| **они** | **будут** | **Скоро будут каникулы.** |

**Буду** solo significa “estaré / habrá”: **Завтра я буду в библиотеке.** **Скоро будет экзамен.**

**Regla:** El futuro de una sola palabra usa las terminaciones de presente que ya conoces, sobre un verbo perfectivo. Esas formas no significan “ahora”. Significan un resultado futuro. **Прочитать** lleva las mismas terminaciones que **читать**.

| Persona | **прочитать** | **приехать** |
|---|---|---|
| **я** | **прочитаю** | **приеду** |
| **ты** | **прочитаешь** | **приедешь** |
| **он / она** | **прочитает** | **приедет** |
| **мы** | **прочитаем** | **приедем** |
| **вы** | **прочитаете** | **приедете** |
| **они** | **прочитают** | **приедут** |

**Написать** conserva el cambio de consonante de **писать**: **напишу, напишешь, напишет, напишем, напишете, напишут**.

**Приедет** es una forma hecha de resultado: “llegará”. El sistema de prefijos de los verbos de movimiento viene después. En este tema, aprende las seis formas como el futuro de este verbo.

**Regla:** Los dos modelos no se mezclan.

| Quieres decir | Modelo | Ejemplo |
|---|---|---|
| La actividad, el plan, “durante dos horas” | **буду** + infinitivo | **Завтра я буду читать два часа.** |
| El resultado, “hecho” | una palabra | **Завтра я прочитаю текст.** |
| Un hábito de ahora en adelante | **буду** + infinitivo, o el presente si ya es tu rutina | **Я буду заниматься каждый день.** |

**Я буду прочитать** mezcla los dos modelos. Un verbo perfectivo no lleva **буду**.

Un viaje previsto en una sola dirección suele ir en presente de un verbo de movimiento: **Завтра я еду в Москву.** Reconócelo. Para una actividad normal de este tema, produce **буду** más infinitivo, o el resultado en una palabra.

**Не** va delante de **буду**, o delante de la forma de una palabra.

- **Я не буду опаздывать.**
- **Сегодня я не прочитаю весь текст.**

Tres tiempos de una misma idea, juntos:

- **Она прочитала текст вчера.** Resultado en pasado.
- **Она будет читать текст завтра.** Actividad en futuro.
- **Она прочитает текст завтра.** Resultado en futuro.

### Cómo se usa
Pregunta **Что ты будешь делать завтра?** y responde con **буду** más un verbo que ya tienes: **читать**, **писать**, **жить**, **заниматься**, **готовиться**.

Ordena el día con **сначала** y **потом**: **Сначала лекция, потом я прочитаю текст.**

Usa el futuro de una palabra cuando la frase nombra un resultado cerrado: el texto queda leído, la persona llega. **Он приедет в понедельник.**

**Скоро** cabe en los dos modelos: **Скоро я буду готовиться к экзамену.** **Скоро будет тест.**

### Ejemplos
- **Я буду читать текст вечером.** — Voy a leer el texto por la noche. La actividad.
- **Мы будем жить в общежитии.** — Viviremos en la residencia.
- **Завтра я буду в университете.** — Mañana estaré en la universidad.
- **Я прочитаю текст завтра.** — Mañana terminaré el texto.
- **Он приедет в понедельник.** — Él llega / llegará el lunes.
- **Я напишу письмо вечером.** — Por la noche escribiré la carta.
- **Она не будет опаздывать.** — Ella no va a llegar tarde.
- **Что вы будете делать потом?** — ¿Qué va a hacer usted después?
- **Сначала обед, потом я буду делать домашнее задание.** — Primero la comida, después haré los deberes.
- **Скоро будет экзамен.** — Pronto habrá un examen.

### Errores típicos
- **Я буду прочитать текст.** El resultado es una sola palabra: **Я прочитаю текст.**
- **Мы буду жить.** **Мы** lleva **будем**.
- Una terminación de femenino en el futuro: **она будет читала**. El género pertenece al pasado. El futuro es **будет читать** o **прочитает**.
- **Я написаю**. La forma de **я** de **написать** es **напишу**.
- **Каждый день я прочитаю текст** para un hábito. Un plan que se repite es **Я буду читать**, o el presente **Я читаю**.
- Dejar el infinitivo fuera: **Я буду текст**. El futuro compuesto necesita un verbo: **Я буду читать текст**.

### Si tu lengua es el español
*Ir a* + infinitivo se parece a **буду** + infinitivo: *voy a leer* ≈ **буду читать**. El futuro simple español (*leeré, viviré*) es una sola palabra para la actividad y para el resultado. El ruso los separa. *Leeré durante dos horas* corresponde a **буду читать**. *Leeré el texto entero* corresponde a **прочитаю**. No existe un doble futuro del tipo *voy a leeré*; **буду прочитать** es ese mismo error. *Llegará el lunes* se acerca a **приедет в понедельник**, un resultado, no un proceso.

> 💡 Si la frase sigue en pie con “durante dos horas” o “cada día”, usa **буду** más infinitivo. Si la frase significa “hecho”, usa la forma de una palabra.

### Comprueba
1. Completa: **Мы ___ жить в общежитии.**
2. ¿Cuál es el resultado: **Я буду прочитать текст** o **Я прочитаю текст**?
3. Ella no va a llegar tarde. Completa **Она не ___ опаздывать.**

**Respuestas:** 1) **будем.** 2) **Я прочитаю текст.** 3) **будет.**`,

    de: `## Das Futur

> **In diesem Thema:** **буду** plus Infinitiv, und das Futur in einem Wort für das Ergebnis, mit **прочитаю** und **приедет**.

### Warum das wichtig ist
Ein Plan für morgen hat im Russischen zwei verschiedene Formen, und deutsches *werden* deckt nur eine davon. **Я буду читать** ist die Tätigkeit: Sie werden eine Weile lesen. **Я прочитаю** ist das Ergebnis: der Text ist zu Ende gelesen. Wohnheim, Prüfung und die Ankunft am Montag brauchen eines von diesen beiden Mustern.

Die Vergangenheit richtete sich nach dem Genus. Das Futur tut das nicht. **Она будет** und **он будет** teilen sich eine Form. Was sich ändert, ist die Person von **буду** oder die Personalendung am Futur in einem Wort.

### Die Regel

**Regel:** Das zusammengesetzte Futur ist das Futur von **быть** plus ein imperfektiver Infinitiv. Nur **буду** verändert sich. Der Infinitiv bleibt in der Wörterbuchform. Dieses Muster gilt für einen Verlauf, einen Plan oder eine wiederholte zukünftige Handlung.

| Person | Form von **быть** | Beispiel |
|---|---|---|
| **я** | **буду** | **Я буду читать текст.** |
| **ты** | **будешь** | **Ты будешь жить в общежитии.** |
| **он / она / оно** | **будет** | **Завтра будет лекция.** |
| **мы** | **будем** | **Мы будем жить в общежитии.** |
| **вы** | **будете** | **Что вы будете делать потом?** |
| **они** | **будут** | **Скоро будут каникулы.** |

**Буду** allein heißt „werde sein / wird sein“: **Завтра я буду в библиотеке.** **Скоро будет экзамен.**

**Regel:** Das Futur in einem Wort benutzt die Präsensendungen, die Sie schon kennen, an einem perfektiven Verb. Diese Formen bedeuten nicht „jetzt“. Sie bedeuten ein zukünftiges Ergebnis. **Прочитать** nimmt dieselben Endungen wie **читать**.

| Person | **прочитать** | **приехать** |
|---|---|---|
| **я** | **прочитаю** | **приеду** |
| **ты** | **прочитаешь** | **приедешь** |
| **он / она** | **прочитает** | **приедет** |
| **мы** | **прочитаем** | **приедем** |
| **вы** | **прочитаете** | **приедете** |
| **они** | **прочитают** | **приедут** |

**Написать** behält den Konsonantenwechsel von **писать**: **напишу, напишешь, напишет, напишем, напишете, напишут**.

**Приедет** ist eine fertige Ergebnisform: „er wird ankommen“. Das Präfixsystem der Bewegungsverben kommt später. In diesem Thema lernen Sie die sechs Formen als das Futur dieses Verbs.

**Regel:** Die beiden Muster bleiben getrennt.

| Sie meinen | Muster | Beispiel |
|---|---|---|
| Die Tätigkeit, den Plan, „zwei Stunden lang“ | **буду** + Infinitiv | **Завтра я буду читать два часа.** |
| Das Ergebnis, „fertig“ | ein Wort | **Завтра я прочитаю текст.** |
| Eine Gewohnheit von jetzt an | **буду** + Infinitiv, oder das Präsens, wenn es schon Ihre Routine ist | **Я буду заниматься каждый день.** |

**Я буду прочитать** vermischt die beiden Muster. Ein perfektives Verb nimmt kein **буду**.

Eine geplante Fahrt in eine Richtung steht oft im Präsens eines Bewegungsverbs: **Завтра я еду в Москву.** Erkennen Sie diesen Satz. Für eine gewöhnliche Tätigkeit in diesem Thema bilden Sie **буду** plus Infinitiv oder das Ergebnis in einem Wort.

**Не** steht vor **буду** oder vor der Form in einem Wort.

- **Я не буду опаздывать.**
- **Сегодня я не прочитаю весь текст.**

Drei Tempora einer Idee nebeneinander:

- **Она прочитала текст вчера.** Ergebnis in der Vergangenheit.
- **Она будет читать текст завтра.** Tätigkeit in der Zukunft.
- **Она прочитает текст завтра.** Ergebnis in der Zukunft.

### So verwendet man es
Fragen Sie **Что ты будешь делать завтра?** und antworten Sie mit **буду** plus einem Verb, das Sie schon haben: **читать**, **писать**, **жить**, **заниматься**, **готовиться**.

Ordnen Sie den Tag mit **сначала** und **потом**: **Сначала лекция, потом я прочитаю текст.**

Benutzen Sie das Futur in einem Wort, wenn der Satz ein abgeschlossenes Ergebnis nennt: der Text ist gelesen, die Person kommt an. **Он приедет в понедельник.**

**Скоро** passt zu beiden Mustern: **Скоро я буду готовиться к экзамену.** **Скоро будет тест.**

### Beispiele
- **Я буду читать текст вечером.** — Ich werde den Text am Abend lesen. Die Tätigkeit.
- **Мы будем жить в общежитии.** — Wir werden im Wohnheim wohnen.
- **Завтра я буду в университете.** — Morgen werde ich an der Universität sein.
- **Я прочитаю текст завтра.** — Ich werde den Text morgen zu Ende lesen.
- **Он приедет в понедельник.** — Er kommt am Montag an.
- **Я напишу письмо вечером.** — Ich werde den Brief am Abend schreiben.
- **Она не будет опаздывать.** — Sie wird sich nicht verspäten.
- **Что вы будете делать потом?** — Was werden Sie danach tun?
- **Сначала обед, потом я буду делать домашнее задание.** — Zuerst das Mittagessen, danach mache ich die Hausaufgaben.
- **Скоро будет экзамен.** — Bald ist die Prüfung.

### Typische Fehler
- **Я буду прочитать текст.** Ein Ergebnis ist ein Wort: **Я прочитаю текст.**
- **Мы буду жить.** **Мы** verlangt **будем**.
- Eine feminine Endung am Futur: **она будет читала**. Das Genus gehört zur Vergangenheit. Das Futur heißt **будет читать** oder **прочитает**.
- **Я написаю**. Die **я**-Form von **написать** ist **напишу**.
- **Каждый день я прочитаю текст** für eine Gewohnheit. Ein wiederholter Plan heißt **Я буду читать** oder im Präsens **Я читаю**.
- Den Infinitiv weglassen: **Я буду текст**. Das zusammengesetzte Futur braucht ein Verb: **Я буду читать текст**.

### Wenn Ihre Sprache Deutsch ist
*Werden* + Infinitiv entspricht **буду** + Infinitiv: *ich werde lesen* ≈ **буду читать**. Deutsch benutzt *werden* für Tätigkeit und Ergebnis gleichermaßen. Russisch trennt sie. *Ich werde zwei Stunden lesen* ist **буду читать**. *Ich werde den Text zu Ende lesen* ist **прочитаю**. In der Form mit einem Wort steht kein *werden*. Sie sieht nur deshalb wie ein Präsens aus, weil die Endungen Präsensendungen sind. **Я прочитаю** heißt nicht „ich lese gerade“. **Буду прочитать** ist ein doppeltes Futur und keine russische Form.

> 💡 Wenn der Satz mit „zwei Stunden lang“ oder „jeden Tag“ noch stimmt, nehmen Sie **буду** plus Infinitiv. Wenn der Satz „fertig“ bedeutet, nehmen Sie die Form in einem Wort.

### Prüfen Sie sich
1. Ergänzen Sie: **Мы ___ жить в общежитии.**
2. Welcher Satz ist das Ergebnis: **Я буду прочитать текст** oder **Я прочитаю текст**?
3. Sie wird sich nicht verspäten. Ergänzen Sie **Она не ___ опаздывать.**

**Antworten:** 1) **будем.** 2) **Я прочитаю текст.** 3) **будет.**`,
  },

  "ru-a2-genitive": {
    en: `## The genitive case

> **In this topic:** **нет**, **не было**, **не будет**, quantity with **много / мало / сколько**, and possession: **сумка друга**, **у меня**.

### Why it matters
**У меня нет ключа**, **мало времени**, and **сумка друга** are ordinary sentences in a dormitory and in class. The noun is not in the dictionary form. **Нет книга** and **много студенты** use the right words and the wrong case, so the sentence is still wrong.

You already met some of these forms after numbers: **два студента**, **пять студентов**. That was the genitive. This topic names the case and adds absence, quantity, and “of / someone’s”.

### The rule

**Rule:** The genitive singular answers **кого?** for a person and **чего?** for a thing. Choose the ending from the dictionary form.

| Noun type | Nominative | Genitive singular | Ending |
|---|---|---|---|
| Masculine hard consonant | **студент**, **ключ** | **студента**, **ключа** | **-а** |
| Masculine soft, **-й**, **-ь** | **словарь**, **музей**, **преподаватель** | **словаря**, **музея**, **преподавателя** | **-я** |
| Feminine **-а** | **книга**, **студентка** | **книги**, **студентки** | **-ы / -и** |
| Feminine **-я**, including **-ия** | **неделя**, **лекция** | **недели**, **лекции** | **-и** |
| Feminine **-ь** | **тетрадь** | **тетради** | **-и** |
| Neuter **-о** | **окно** | **окна** | **-а** |
| Neuter **-е**, including **-ие** | **море**, **занятие** | **моря**, **занятия** | **-я** |
| Neuter **-мя** | **время**, **имя** | **времени**, **имени** | **-ени** |

After **к, г, х, ж, ч, ш, щ, ц**, write **-и**, not **-ы**: **книги**, **ручки**, **аудитории**. **Время** and **имя** do not follow the ordinary neuter line. Learn **нет времени** and **нет имени** as forms.

**День** loses the vowel in several forms: genitive singular **дня**.

**Rule:** The genitive plural is a working set at A2. Learn the forms with the words you use. Three patterns cover most of them.

| Pattern | Nominative singular | Genitive plural | Examples |
|---|---|---|---|
| Masculine hard stem, **-ов** | **студент**, **час**, **билет** | **студентов**, **часов**, **билетов** | **много студентов** |
| Soft stem, **-й**, **-ь**, **-ей** | **преподаватель**, **день**, **друг**, **тетрадь** | **преподавателей**, **дней**, **друзей**, **тетрадей** | **пять дней** |
| Feminine **-а** and neuter **-о**, often no ending | **книга**, **окно**, **студентка** | **книг**, **окон**, **студенток** | **мало книг** |

**Деньги** has no singular in ordinary speech. The genitive plural is **денег**: **мало денег**, **нет денег**. In **окон** and **студенток** a vowel appears in the ending’s slot; you write it. Do not rebuild **книг** as **книгов**.

The number rule from A1 is this case. **Два, три, четыре** take the genitive singular: **два студента**, **три книги**, **четыре окна**. **Пять** and above, and **11–14**, take the genitive plural: **пять студентов**, **одиннадцать книг**.

**Rule:** Absence takes the genitive. **Нет** is “there is no” in the present. **Не было** is the past. **Не будет** is the future. **У** plus a person in the genitive means “someone has”.

| Meaning | Pattern | Example |
|---|---|---|
| Someone has | **у** + genitive + **есть** + nominative | **У меня есть ключ.** |
| Someone does not have | **у** + genitive + **нет** + genitive | **У меня нет ключа.** |
| There is no | **нет** + genitive | **Нет времени.** |
| There was no | **не было** + genitive | **Вчера не было лекции.** |
| There will not be | **не будет** + genitive | **Завтра не будет занятия.** |

**Есть** points at a nominative: the thing exists, so it stays in the dictionary form when it is singular. **Нет** points at a genitive. **Не** before an ordinary verb is a different construction. **Я не читал книгу** keeps the accusative object you learned in A1. Do not put that object in the genitive at this level.

**Rule:** Quantity words take the genitive. A countable group is usually genitive plural. A mass or a span of time is usually genitive singular.

| Word | What follows | Example |
|---|---|---|
| **много** | genitive | **много студентов**, **много воды** |
| **мало** | genitive | **мало книг**, **мало времени** |
| **сколько** | genitive | **Сколько студентов?** **Сколько денег?** |
| **несколько** | genitive plural | **несколько билетов** |
| **стакан**, **чашка** | genitive singular | **стакан воды**, **чашка чая** |

**Rule:** One noun can define another. The owner or the whole stands in the genitive, after the thing.

- **сумка друга** — a friend’s bag
- **аудитория преподавателя** — the lecturer’s room
- **ключ Анны** — Anna’s key
- **У друга есть машина.** — A friend has a car.

**Чей это словарь?** **Это словарь студента.** **Чья это сумка?** **Это сумка Анны.**

Personal pronouns in the genitive, and the form after the preposition **у**:

| Nominative | Genitive | After **у** |
|---|---|---|
| **я** | **меня** | **у меня** |
| **ты** | **тебя** | **у тебя** |
| **он** | **его** | **у него** |
| **она** | **её** | **у неё** |
| **мы** | **нас** | **у нас** |
| **вы** | **вас** | **у вас** |
| **они** | **их** | **у них** |

**Его**, **её**, and **их** add **н** after a preposition. **У него**, **у неё**, **у них**. **У его** is not the phrase.

The masculine animate genitive singular looks like the accusative. The question and the construction tell them apart.

| Noun | Accusative, **кого? / что?** | Genitive, **кого? / чего?** |
|---|---|---|
| **стол** | **Я вижу стол.** | **Нет стола.** |
| **книга** | **Я вижу книгу.** | **Нет книги.** |
| **студент** | **Я вижу студента.** | **Нет студента.** |

### How to use it
Say what you have with **у меня есть** and the nominative. Say what is missing with **у меня нет** and the genitive. Then count or measure with **много**, **мало**, or **сколько**.

In a shop or a dormitory the same frame repeats: **У меня нет ключа.** **Мало денег.** **Нет билета.** **Стакан воды, пожалуйста.**

For a possession, name the thing first and the person second: **Это ключ Анны.** **Это аудитория преподавателя.**

### Examples
- **У меня есть ключ.** — I have a key.
- **У меня нет ключа.** — I do not have a key.
- **Нет времени.** — There is no time.
- **Мало денег.** — There is little money.
- **Много студентов.** — There are many students.
- **Сколько книг?** — How many books?
- **Вчера не было лекции.** — There was no lecture yesterday.
- **Завтра не будет занятия.** — There will be no class tomorrow.
- **Стакан воды и чашка чая.** — A glass of water and a cup of tea.
- **Это сумка друга.** — This is a friend’s bag.
- **У неё есть план.** — She has a plan.
- **В группе два студента и пять студенток.** — In the group there are two male students and five female students.

### Typical mistakes
- **Нет книга**, **нет время**, **нет ключ**. After **нет** the noun is genitive: **нет книги**, **нет времени**, **нет ключа**.
- **У меня есть ключа**. **Есть** takes the nominative: **есть ключ**.
- **У его** and **у её**. After **у**, the forms are **у него** and **у неё**.
- **Много студенты** and **мало время**. Quantity takes the genitive: **много студентов**, **мало времени**.
- **Пять книга**. From 5 upward the genitive plural is **пять книг**.
- **Два студентов**. **Два** takes the genitive singular: **два студента**.
- Treating every **не** as **нет**. **Я не читал книгу** is verb negation plus an accusative object.

### If your language is English
*I don’t have a key* is not a verb meaning “have” plus *not*. At this level it is **у меня нет ключа**: the person is genitive after **у**, and the missing thing is genitive too. *A glass of water* has no separate word for *of*: **стакан воды**. *Anna’s key* puts Anna first and uses an apostrophe. Russian puts Anna second, in the genitive: **ключ Анны**. *There is no time* changes the noun: **нет времени**, not the dictionary form **время**.

> 💡 **Есть** keeps the dictionary form. **Нет**, **не было**, **не будет**, **много**, **мало**, and **сколько** take the genitive.

### Check yourself
1. Complete: **У меня нет ___.** The dictionary form is **ключ**.
2. How do you say “many students” and “little time”?
3. Which phrase is correct: **У его есть книга** or **У него есть книга**?

**Answers:** 1) **ключа.** 2) **много студентов**, **мало времени.** 3) **У него есть книга.**`,

    es: `## El caso genitivo

> **En este tema:** **нет**, **не было**, **не будет**, la cantidad con **много / мало / сколько**, y la posesión: **сумка друга**, **у меня**.

### Por qué importa
**У меня нет ключа**, **мало времени** y **сумка друга** son frases normales en la residencia y en clase. El sustantivo no va en la forma del diccionario. **Нет книга** y **много студенты** tienen las palabras justas y el caso equivocado: la frase sigue mal.

Algunas de estas formas ya aparecieron detrás de los números: **два студента**, **пять студентов**. Eso era genitivo. Este tema le pone nombre al caso y añade la ausencia, la cantidad y la relación “de / de alguien”.

### La regla

**Regla:** El genitivo singular responde a **кого?** si es una persona y a **чего?** si es una cosa. La terminación sale de la forma del diccionario.

| Tipo de sustantivo | Nominativo | Genitivo singular | Terminación |
|---|---|---|---|
| Masculino en consonante dura | **студент**, **ключ** | **студента**, **ключа** | **-а** |
| Masculino blando, **-й**, **-ь** | **словарь**, **музей**, **преподаватель** | **словаря**, **музея**, **преподавателя** | **-я** |
| Femenino en **-а** | **книга**, **студентка** | **книги**, **студентки** | **-ы / -и** |
| Femenino en **-я**, incluido **-ия** | **неделя**, **лекция** | **недели**, **лекции** | **-и** |
| Femenino en **-ь** | **тетрадь** | **тетради** | **-и** |
| Neutro en **-о** | **окно** | **окна** | **-а** |
| Neutro en **-е**, incluido **-ие** | **море**, **занятие** | **моря**, **занятия** | **-я** |
| Neutro en **-мя** | **время**, **имя** | **времени**, **имени** | **-ени** |

Detrás de **к, г, х, ж, ч, ш, щ, ц** se escribe **-и**, no **-ы**: **книги**, **ручки**, **аудитории**. **Время** e **имя** no siguen la línea normal del neutro. Aprende **нет времени** y **нет имени** como formas hechas.

**День** pierde la vocal en varias formas: genitivo singular **дня**.

**Regla:** El genitivo plural, en A2, es una lista de trabajo. Aprende las formas con las palabras que usas. Tres modelos cubren la mayoría.

| Modelo | Nominativo singular | Genitivo plural | Ejemplos |
|---|---|---|---|
| Tema masculino duro, **-ов** | **студент**, **час**, **билет** | **студентов**, **часов**, **билетов** | **много студентов** |
| Tema blando, **-й**, **-ь**, **-ей** | **преподаватель**, **день**, **друг**, **тетрадь** | **преподавателей**, **дней**, **друзей**, **тетрадей** | **пять дней** |
| Femenino en **-а** y neutro en **-о**, a menudo sin terminación | **книга**, **окно**, **студентка** | **книг**, **окон**, **студенток** | **мало книг** |

**Деньги** no tiene singular en el habla normal. El genitivo plural es **денег**: **мало денег**, **нет денег**. En **окон** y **студенток** aparece una vocal; hay que escribirla. No reconstruyas **книг** como **книгов**.

La regla de los números del A1 es este caso. **Два, три, четыре** llevan genitivo singular: **два студента**, **три книги**, **четыре окна**. Desde **пять**, y también **11–14**, llevan genitivo plural: **пять студентов**, **одиннадцать книг**.

**Regla:** La ausencia va en genitivo. **Нет** es “no hay” en presente. **Не было** es el pasado. **Не будет** es el futuro. **У** más una persona en genitivo significa “alguien tiene”.

| Sentido | Modelo | Ejemplo |
|---|---|---|
| Alguien tiene | **у** + genitivo + **есть** + nominativo | **У меня есть ключ.** |
| Alguien no tiene | **у** + genitivo + **нет** + genitivo | **У меня нет ключа.** |
| No hay | **нет** + genitivo | **Нет времени.** |
| No hubo | **не было** + genitivo | **Вчера не было лекции.** |
| No habrá | **не будет** + genitivo | **Завтра не будет занятия.** |

**Есть** señala un nominativo: la cosa existe, y en singular se queda en la forma del diccionario. **Нет** señala un genitivo. **Не** delante de un verbo normal es otra construcción. **Я не читал книгу** conserva el objeto en acusativo que aprendiste en A1. En este nivel ese objeto no pasa al genitivo.

**Regla:** Las palabras de cantidad llevan genitivo. Un grupo contable suele ir en genitivo plural. Una masa o un tramo de tiempo suele ir en genitivo singular.

| Palabra | Qué sigue | Ejemplo |
|---|---|---|
| **много** | genitivo | **много студентов**, **много воды** |
| **мало** | genitivo | **мало книг**, **мало времени** |
| **сколько** | genitivo | **Сколько студентов?** **Сколько денег?** |
| **несколько** | genitivo plural | **несколько билетов** |
| **стакан**, **чашка** | genitivo singular | **стакан воды**, **чашка чая** |

**Regla:** Un sustantivo puede definir a otro. El poseedor, o el todo, va en genitivo detrás de la cosa.

- **сумка друга** — el bolso de un amigo
- **аудитория преподавателя** — el aula del profesor
- **ключ Анны** — la llave de Anna
- **У друга есть машина.** — Un amigo tiene coche.

**Чей это словарь?** **Это словарь студента.** **Чья это сумка?** **Это сумка Анны.**

Pronombres personales en genitivo, y la forma detrás de la preposición **у**:

| Nominativo | Genitivo | Detrás de **у** |
|---|---|---|
| **я** | **меня** | **у меня** |
| **ты** | **тебя** | **у тебя** |
| **он** | **его** | **у него** |
| **она** | **её** | **у неё** |
| **мы** | **нас** | **у нас** |
| **вы** | **вас** | **у вас** |
| **они** | **их** | **у них** |

**Его**, **её** e **их** añaden **н** detrás de preposición. **У него**, **у неё**, **у них**. **У его** no es la frase.

El genitivo singular de un masculino animado se parece al acusativo. Los separan la pregunta y la construcción.

| Sustantivo | Acusativo, **кого? / что?** | Genitivo, **кого? / чего?** |
|---|---|---|
| **стол** | **Я вижу стол.** | **Нет стола.** |
| **книга** | **Я вижу книгу.** | **Нет книги.** |
| **студент** | **Я вижу студента.** | **Нет студента.** |

### Cómo se usa
Di lo que tienes con **у меня есть** y nominativo. Di lo que falta con **у меня нет** y genitivo. Después cuenta o mide con **много**, **мало** o **сколько**.

En una tienda o en la residencia el marco se repite: **У меня нет ключа.** **Мало денег.** **Нет билета.** **Стакан воды, пожалуйста.**

Para una posesión, la cosa va primero y la persona después: **Это ключ Анны.** **Это аудитория преподавателя.**

### Ejemplos
- **У меня есть ключ.** — Tengo una llave.
- **У меня нет ключа.** — No tengo llave.
- **Нет времени.** — No hay tiempo.
- **Мало денег.** — Hay poco dinero.
- **Много студентов.** — Hay muchos estudiantes.
- **Сколько книг?** — ¿Cuántos libros?
- **Вчера не было лекции.** — Ayer no hubo clase magistral.
- **Завтра не будет занятия.** — Mañana no habrá clase.
- **Стакан воды и чашка чая.** — Un vaso de agua y una taza de té.
- **Это сумка друга.** — Este es el bolso de un amigo.
- **У неё есть план.** — Ella tiene un plan.
- **В группе два студента и пять студенток.** — En el grupo hay dos estudiantes y cinco estudiantes.

### Errores típicos
- **Нет книга**, **нет время**, **нет ключ**. Detrás de **нет** el sustantivo va en genitivo: **нет книги**, **нет времени**, **нет ключа**.
- **У меня есть ключа**. **Есть** lleva nominativo: **есть ключ**.
- **У его** y **у её**. Detrás de **у** las formas son **у него** y **у неё**.
- **Много студенты** y **мало время**. La cantidad lleva genitivo: **много студентов**, **мало времени**.
- **Пять книга**. Desde 5 el genitivo plural es **пять книг**.
- **Два студентов**. **Два** lleva genitivo singular: **два студента**.
- Tratar cada **не** como **нет**. **Я не читал книгу** es la negación del verbo más un objeto en acusativo.

### Si tu lengua es el español
*No tengo llave* no se calcula con un verbo *tener* más negación. En este nivel es **у меня нет ключа**: la persona va en genitivo detrás de **у**, y la cosa que falta también. *Un vaso de agua* no lleva la palabra *de*: **стакан воды**. *La llave de Anna* pone a Anna detrás, en genitivo: **ключ Анны**. *No hay tiempo* cambia el sustantivo: **нет времени**, no la forma de diccionario **время**. El *de* español de la posesión y de la cantidad cabe en la terminación, no en una preposición aparte.

> 💡 **Есть** conserva la forma del diccionario. **Нет**, **не было**, **не будет**, **много**, **мало** y **сколько** llevan genitivo.

### Comprueba
1. Completa: **У меня нет ___.** La forma de diccionario es **ключ**.
2. ¿Cómo se dice “muchos estudiantes” y “poco tiempo”?
3. ¿Qué frase es correcta: **У его есть книга** o **У него есть книга**?

**Respuestas:** 1) **ключа.** 2) **много студентов**, **мало времени.** 3) **У него есть книга.**`,

    de: `## Der Genitiv

> **In diesem Thema:** **нет**, **не было**, **не будет**, Menge mit **много / мало / сколько**, und Besitz: **сумка друга**, **у меня**.

### Warum das wichtig ist
**У меня нет ключа**, **мало времени** und **сумка друга** sind gewöhnliche Sätze im Wohnheim und im Unterricht. Das Substantiv steht nicht in der Wörterbuchform. **Нет книга** und **много студенты** haben die richtigen Wörter und den falschen Kasus. Der Satz bleibt falsch.

Einige dieser Formen sind Ihnen schon nach Zahlen begegnet: **два студента**, **пять студентов**. Das war der Genitiv. Dieses Thema gibt dem Kasus einen Namen und ergänzt Fehlen, Menge und „von / jemandes“.

### Die Regel

**Regel:** Der Genitiv Singular antwortet auf **кого?** bei einer Person und auf **чего?** bei einer Sache. Die Endung kommt von der Wörterbuchform.

| Substantivtyp | Nominativ | Genitiv Singular | Endung |
|---|---|---|---|
| Maskulinum auf harten Konsonanten | **студент**, **ключ** | **студента**, **ключа** | **-а** |
| Maskulinum weich, **-й**, **-ь** | **словарь**, **музей**, **преподаватель** | **словаря**, **музея**, **преподавателя** | **-я** |
| Femininum auf **-а** | **книга**, **студентка** | **книги**, **студентки** | **-ы / -и** |
| Femininum auf **-я**, einschließlich **-ия** | **неделя**, **лекция** | **недели**, **лекции** | **-и** |
| Femininum auf **-ь** | **тетрадь** | **тетради** | **-и** |
| Neutrum auf **-о** | **окно** | **окна** | **-а** |
| Neutrum auf **-е**, einschließlich **-ие** | **море**, **занятие** | **моря**, **занятия** | **-я** |
| Neutrum auf **-мя** | **время**, **имя** | **времени**, **имени** | **-ени** |

Nach **к, г, х, ж, ч, ш, щ, ц** schreibt man **-и**, nicht **-ы**: **книги**, **ручки**, **аудитории**. **Время** und **имя** folgen nicht der gewöhnlichen Neutrumzeile. Lernen Sie **нет времени** und **нет имени** als fertige Formen.

**День** verliert den Vokal in mehreren Formen: Genitiv Singular **дня**.

**Regel:** Der Genitiv Plural ist auf A2 ein Arbeitsvorrat. Lernen Sie die Formen mit den Wörtern, die Sie benutzen. Drei Muster decken das meiste ab.

| Muster | Nominativ Singular | Genitiv Plural | Beispiele |
|---|---|---|---|
| Harter maskuliner Stamm, **-ов** | **студент**, **час**, **билет** | **студентов**, **часов**, **билетов** | **много студентов** |
| Weicher Stamm, **-й**, **-ь**, **-ей** | **преподаватель**, **день**, **друг**, **тетрадь** | **преподавателей**, **дней**, **друзей**, **тетрадей** | **пять дней** |
| Femininum auf **-а** und Neutrum auf **-о**, oft ohne Endung | **книга**, **окно**, **студентка** | **книг**, **окон**, **студенток** | **мало книг** |

**Деньги** hat in der normalen Rede keinen Singular. Der Genitiv Plural heißt **денег**: **мало денег**, **нет денег**. In **окон** und **студенток** erscheint ein Vokal; man schreibt ihn. Bauen Sie **книг** nicht zu **книгов** um.

Die Zahlenregel aus A1 ist dieser Kasus. **Два, три, четыре** nehmen den Genitiv Singular: **два студента**, **три книги**, **четыре окна**. Ab **пять**, und auch **11–14**, steht der Genitiv Plural: **пять студентов**, **одиннадцать книг**.

**Regel:** Fehlen steht im Genitiv. **Нет** heißt „es gibt kein“ im Präsens. **Не было** ist die Vergangenheit. **Не будет** ist die Zukunft. **У** plus eine Person im Genitiv heißt „jemand hat“.

| Bedeutung | Muster | Beispiel |
|---|---|---|
| Jemand hat | **у** + Genitiv + **есть** + Nominativ | **У меня есть ключ.** |
| Jemand hat nicht | **у** + Genitiv + **нет** + Genitiv | **У меня нет ключа.** |
| Es gibt kein | **нет** + Genitiv | **Нет времени.** |
| Es gab kein | **не было** + Genitiv | **Вчера не было лекции.** |
| Es wird kein geben | **не будет** + Genitiv | **Завтра не будет занятия.** |

**Есть** zeigt auf einen Nominativ: die Sache existiert, und im Singular bleibt sie in der Wörterbuchform. **Нет** zeigt auf einen Genitiv. **Не** vor einem gewöhnlichen Verb ist eine andere Konstruktion. **Я не читал книгу** behält das Akkusativobjekt aus A1. Setzen Sie dieses Objekt auf dieser Stufe nicht in den Genitiv.

**Regel:** Mengenwörter regieren den Genitiv. Eine zählbare Gruppe steht meist im Genitiv Plural. Eine Masse oder eine Zeitspanne steht meist im Genitiv Singular.

| Wort | Was folgt | Beispiel |
|---|---|---|
| **много** | Genitiv | **много студентов**, **много воды** |
| **мало** | Genitiv | **мало книг**, **мало времени** |
| **сколько** | Genitiv | **Сколько студентов?** **Сколько денег?** |
| **несколько** | Genitiv Plural | **несколько билетов** |
| **стакан**, **чашка** | Genitiv Singular | **стакан воды**, **чашка чая** |

**Regel:** Ein Substantiv kann ein anderes bestimmen. Der Besitzer oder das Ganze steht im Genitiv, nach der Sache.

- **сумка друга** — die Tasche eines Freundes
- **аудитория преподавателя** — der Raum der Lehrperson
- **ключ Анны** — Annas Schlüssel
- **У друга есть машина.** — Ein Freund hat ein Auto.

**Чей это словарь?** **Это словарь студента.** **Чья это сумка?** **Это сумка Анны.**

Personalpronomen im Genitiv und die Form nach der Präposition **у**:

| Nominativ | Genitiv | Nach **у** |
|---|---|---|
| **я** | **меня** | **у меня** |
| **ты** | **тебя** | **у тебя** |
| **он** | **его** | **у него** |
| **она** | **её** | **у неё** |
| **мы** | **нас** | **у нас** |
| **вы** | **вас** | **у вас** |
| **они** | **их** | **у них** |

**Его**, **её** und **их** bekommen nach einer Präposition ein **н**. **У него**, **у неё**, **у них**. **У его** ist nicht die Wendung.

Der Genitiv Singular eines belebten Maskulinums sieht aus wie der Akkusativ. Frage und Konstruktion trennen sie.

| Substantiv | Akkusativ, **кого? / что?** | Genitiv, **кого? / чего?** |
|---|---|---|
| **стол** | **Я вижу стол.** | **Нет стола.** |
| **книга** | **Я вижу книгу.** | **Нет книги.** |
| **студент** | **Я вижу студента.** | **Нет студента.** |

### So verwendet man es
Sagen Sie, was Sie haben, mit **у меня есть** und dem Nominativ. Sagen Sie, was fehlt, mit **у меня нет** und dem Genitiv. Zählen oder messen Sie danach mit **много**, **мало** oder **сколько**.

Im Geschäft oder im Wohnheim wiederholt sich derselbe Rahmen: **У меня нет ключа.** **Мало денег.** **Нет билета.** **Стакан воды, пожалуйста.**

Bei einem Besitz steht die Sache zuerst und die Person danach: **Это ключ Анны.** **Это аудитория преподавателя.**

### Beispiele
- **У меня есть ключ.** — Ich habe einen Schlüssel.
- **У меня нет ключа.** — Ich habe keinen Schlüssel.
- **Нет времени.** — Es ist keine Zeit da.
- **Мало денег.** — Es ist wenig Geld da.
- **Много студентов.** — Es sind viele Studenten da.
- **Сколько книг?** — Wie viele Bücher?
- **Вчера не было лекции.** — Gestern gab es keine Vorlesung.
- **Завтра не будет занятия.** — Morgen findet die Lehrveranstaltung nicht statt.
- **Стакан воды и чашка чая.** — Ein Glas Wasser und eine Tasse Tee.
- **Это сумка друга.** — Das ist die Tasche eines Freundes.
- **У неё есть план.** — Sie hat einen Plan.
- **В группе два студента и пять студенток.** — In der Gruppe sind zwei Studenten und fünf Studentinnen.

### Typische Fehler
- **Нет книга**, **нет время**, **нет ключ**. Nach **нет** steht das Substantiv im Genitiv: **нет книги**, **нет времени**, **нет ключа**.
- **У меня есть ключа**. **Есть** regiert den Nominativ: **есть ключ**.
- **У его** und **у её**. Nach **у** heißen die Formen **у него** und **у неё**.
- **Много студенты** und **мало время**. Die Menge regiert den Genitiv: **много студентов**, **мало времени**.
- **Пять книга**. Ab 5 steht der Genitiv Plural: **пять книг**.
- **Два студентов**. **Два** regiert den Genitiv Singular: **два студента**.
- Jedes **не** wie **нет** behandeln. **Я не читал книгу** ist Verneinung des Verbs plus Akkusativobjekt.

### Wenn Ihre Sprache Deutsch ist
*Ich habe keinen Schlüssel* benutzt *kein* und den Akkusativ. Auf dieser Stufe heißt das auf Russisch **у меня нет ключа**: die Person steht nach **у** im Genitiv, und die fehlende Sache steht auch im Genitiv. Es gibt kein Wort *kein*. *Ein Glas Wasser* verändert *Wasser* im Deutschen oft nicht. Russisch muss die Endung setzen: **стакан воды**. *Annas Schlüssel* stellt Anna voran. Russisch stellt Anna nach, im Genitiv: **ключ Анны**. *Es gibt keine Zeit* verändert das Substantiv: **нет времени**, nicht die Wörterbuchform **время**.

> 💡 **Есть** behält die Wörterbuchform. **Нет**, **не было**, **не будет**, **много**, **мало** und **сколько** regieren den Genitiv.

### Prüfen Sie sich
1. Ergänzen Sie: **У меня нет ___.** Die Wörterbuchform ist **ключ**.
2. Wie sagt man „viele Studenten“ und „wenig Zeit“?
3. Welche Wendung stimmt: **У его есть книга** oder **У него есть книга**?

**Antworten:** 1) **ключа.** 2) **много студентов**, **мало времени.** 3) **У него есть книга.**`,
  },

  "ru-a2-dative": {
    en: `## The dative case

> **In this topic:** **кому? чему?**, the endings, **нравиться**, **нужен**, and **к** plus the dative.

### Why it matters
The person who receives a call, a menu, an explanation, or help is in the dative. **Я звоню друга** uses the accusative you already know, and with **звонить** that case is wrong. **Другу** is the form the verb needs.

“I like this course” is a second trap. Russian does not make **я** the subject of **нравиться**. The course is the subject. The person is dative, and often comes first: **Мне нравится этот курс.**

### The rule

**Rule:** The dative answers **кому?** for a person and **чему?** for a thing. Singular endings:

| Noun type | Nominative | Dative singular | Ending |
|---|---|---|---|
| Masculine or neuter, hard stem | **студент**, **врач**, **окно** | **студенту**, **врачу**, **окну** | **-у** |
| Masculine or neuter, soft stem | **словарь**, **преподаватель**, **море** | **словарю**, **преподавателю**, **морю** | **-ю** |
| Feminine **-а / -я** | **книга**, **сестра**, **неделя** | **книге**, **сестре**, **неделе** | **-е** |
| Feminine **-ия** | **аудитория**, **лекция**, **Мария** | **аудитории**, **лекции**, **Марии** | **-и** |
| Feminine **-ь** | **тетрадь** | **тетради** | **-и** |

**Книге** and **аудитории** look like the prepositional forms from A1. The question is different: **кому? чему?** here, **где? о ком?** there. Masculine nouns do not reuse the prepositional ending. Prepositional **студенте**, dative **студенту**.

The plural ending is **-ам / -ям**: **студентам**, **книгам**, **окнам**, **преподавателям**. **Друг** has the ready plural **друзьям**.

Personal pronouns:

| Nominative | Dative | After **к** |
|---|---|---|
| **я** | **мне** | **ко мне** |
| **ты** | **тебе** | **к тебе** |
| **он** | **ему** | **к нему** |
| **она** | **ей** | **к ней** |
| **мы** | **нам** | **к нам** |
| **вы** | **вам** | **к вам** |
| **они** | **им** | **к ним** |

**Ему**, **ей**, and **им** add **н** after a preposition: **к нему**, **к ней**, **к ним**. **Ко мне** inserts **о**, the same kind of extra vowel as in **во сколько**.

Compare one noun across the cases you know:

| Case | **студент** | **книга** |
|---|---|---|
| Accusative | **студента** | **книгу** |
| Genitive | **студента** | **книги** |
| Dative | **студенту** | **книге** |

**Rule:** These verbs take the person in the dative. The thing, if there is one, stays in the accusative.

| Verb | Frame | Example |
|---|---|---|
| **звонить** | **кому** | **Я звоню другу.** |
| **помогать** | **кому** | **Помогите мне, пожалуйста.** |
| **давать** | **кому** + **что** | **Дайте мне меню.** |
| **объяснять** | **кому** + **что** | **Преподаватель объясняет студентам правило.** |
| **писать** | **кому** | **Я пишу преподавателю.** |
| **отвечать** | **кому** | **Отвечайте преподавателю.** |

**Rule:** With **нравиться**, the person is dative and the thing liked is the nominative subject. The verb agrees with that thing.

| Subject | Present | Past |
|---|---|---|
| Masculine singular | **Мне нравится музей.** | **Мне нравился музей.** |
| Feminine singular | **Ей нравится грамматика.** | **Ей нравилась лекция.** |
| Neuter singular | **Нам нравится кафе.** | **Нам нравилось кафе.** |
| Plural | **Мне нравятся эти курсы.** | **Мне нравились эти курсы.** |

**Не** stands before the verb: **Им не нравится тест.**

**Rule:** **Нужен** agrees with the thing you need. The person is dative. Before an infinitive, the form is invariable **нужно**.

| What is needed | Form | Example |
|---|---|---|
| Masculine noun | **нужен** | **Мне нужен словарь.** |
| Feminine noun | **нужна** | **Мне нужна книга.** |
| Neuter noun | **нужно** | **Мне нужно время.** |
| Plural noun | **нужны** | **Мне нужны деньги.** |
| An action | **нужно** + infinitive | **Мне нужно позвонить другу.** |

**Rule:** **К** plus the dative is movement toward a person. **Я иду к другу.** **Подойдите к преподавателю.** **Завтра я иду к врачу.**

**Rule:** Age puts the person in the dative. The years follow the number rule you already know. The last digit decides: **год** after 1, except 11; **года** after 2, 3, or 4, except 12–14; **лет** for every other number.

- **Сколько вам лет?**
- **Мне двадцать лет.**
- **Ему двадцать один год.**
- **Ей двадцать два года.**

### How to use it
Start a sentence about liking or needing with the person: **мне**, **ей**, **студентам**. Then let the thing decide the verb or **нужен**.

When you call, help, or give, name the receiver in the dative before you worry about the object. **Я звоню другу.** **Дайте мне меню.** **Помогите мне.**

Use **к** when you are going to a person rather than into a building. **Я иду в университет** is a place. **Я иду к преподавателю** is a person.

### Examples
- **Я звоню другу.** — I am calling a friend.
- **Помогите мне, пожалуйста.** — Please help me.
- **Дайте мне меню.** — Please give me the menu.
- **Преподаватель объясняет студентам правило.** — The lecturer explains the rule to the students.
- **Мне нравится русский язык.** — I like Russian.
- **Мне нравятся эти курсы.** — I like these courses.
- **Ей не нравится тест.** — She does not like the test.
- **Мне нужна книга.** — I need a book.
- **Мне нужно позвонить преподавателю.** — I need to call the lecturer.
- **Я иду к врачу.** — I am going to the doctor.
- **Сколько вам лет? — Мне двадцать лет.** — How old are you? — I am twenty.

### Typical mistakes
- **Я нравится этот курс** or **Я нравлюсь русский язык**. The person is dative, the thing is the subject: **Мне нравится этот курс.**
- **Мне нравится эти курсы**. A plural subject takes **нравятся**.
- **Я звоню друга**. **Звонить** takes the dative: **другу**.
- **Дайте меня**. “To me” is **мне**. **Меня** is accusative or genitive.
- **К друга**. After **к** the dative is **к другу**.
- **Мне нужен книга**. **Книга** is feminine: **Мне нужна книга.**
- **К ему**. After **к** the pronoun is **к нему**.

### If your language is English
*I like Russian* makes *I* the subject. Russian makes the thing the subject: **Мне нравится русский язык**, close to “Russian is pleasing to me”. *Call a friend* and *help a friend* take a direct object in English. **Звонить** and **помогать** take the dative: **другу**, **мне**. *Give me the menu* does match the shape: **мне** is the receiver, **меню** is the thing. *I need a book* agrees with the book in Russian, not with *I*: **Мне нужна книга.**

> 💡 For “like” and “need”, say the person in the dative first. Then let the thing control the form: **нравится / нравятся**, **нужен / нужна / нужно / нужны**.

### Check yourself
1. Complete: **Мне ___ эти курсы.**
2. I am calling a friend. Complete **Я звоню ___.**
3. I need a book. Complete **Мне ___ книга.**

**Answers:** 1) **нравятся.** 2) **другу.** 3) **нужна.**`,

    es: `## El caso dativo

> **En este tema:** **кому? чему?**, las terminaciones, **нравиться**, **нужен** y **к** con dativo.

### Por qué importa
La persona que recibe una llamada, un menú, una explicación o ayuda va en dativo. **Я звоню друга** usa el acusativo que ya conoces, y con **звонить** ese caso no sirve. La forma que pide el verbo es **другу**.

“Me gusta este curso” tiene una segunda trampa, aunque el español aquí ayuda. El ruso no pone **я** como sujeto de **нравиться**. El curso es el sujeto. La persona va en dativo y a menudo al principio: **Мне нравится этот курс.**

### La regla

**Regla:** El dativo responde a **кому?** si es una persona y a **чему?** si es una cosa. Terminaciones de singular:

| Tipo de sustantivo | Nominativo | Dativo singular | Terminación |
|---|---|---|---|
| Masculino o neutro, tema duro | **студент**, **врач**, **окно** | **студенту**, **врачу**, **окну** | **-у** |
| Masculino o neutro, tema blando | **словарь**, **преподаватель**, **море** | **словарю**, **преподавателю**, **морю** | **-ю** |
| Femenino en **-а / -я** | **книга**, **сестра**, **неделя** | **книге**, **сестре**, **неделе** | **-е** |
| Femenino en **-ия** | **аудитория**, **лекция**, **Мария** | **аудитории**, **лекции**, **Марии** | **-и** |
| Femenino en **-ь** | **тетрадь** | **тетради** | **-и** |

**Книге** y **аудитории** se parecen al preposicional del A1. La pregunta es otra: aquí **кому? чему?**, allí **где? о ком?** Los masculinos no reutilizan la terminación del preposicional. Preposicional **студенте**, dativo **студенту**.

La terminación de plural es **-ам / -ям**: **студентам**, **книгам**, **окнам**, **преподавателям**. **Друг** tiene el plural hecho **друзьям**.

Pronombres personales:

| Nominativo | Dativo | Detrás de **к** |
|---|---|---|
| **я** | **мне** | **ко мне** |
| **ты** | **тебе** | **к тебе** |
| **он** | **ему** | **к нему** |
| **она** | **ей** | **к ней** |
| **мы** | **нам** | **к нам** |
| **вы** | **вам** | **к вам** |
| **они** | **им** | **к ним** |

**Ему**, **ей** e **им** añaden **н** detrás de preposición: **к нему**, **к ней**, **к ним**. **Ко мне** mete una **о**, la misma vocal de apoyo que en **во сколько**.

Un mismo sustantivo en los casos que ya tienes:

| Caso | **студент** | **книга** |
|---|---|---|
| Acusativo | **студента** | **книгу** |
| Genitivo | **студента** | **книги** |
| Dativo | **студенту** | **книге** |

**Regla:** Estos verbos llevan la persona en dativo. La cosa, si la hay, sigue en acusativo.

| Verbo | Esquema | Ejemplo |
|---|---|---|
| **звонить** | **кому** | **Я звоню другу.** |
| **помогать** | **кому** | **Помогите мне, пожалуйста.** |
| **давать** | **кому** + **что** | **Дайте мне меню.** |
| **объяснять** | **кому** + **что** | **Преподаватель объясняет студентам правило.** |
| **писать** | **кому** | **Я пишу преподавателю.** |
| **отвечать** | **кому** | **Отвечайте преподавателю.** |

**Regla:** Con **нравиться**, la persona va en dativo y lo que gusta es el sujeto en nominativo. El verbo concuerda con esa cosa.

| Sujeto | Presente | Pasado |
|---|---|---|
| Singular masculino | **Мне нравится музей.** | **Мне нравился музей.** |
| Singular femenino | **Ей нравится грамматика.** | **Ей нравилась лекция.** |
| Singular neutro | **Нам нравится кафе.** | **Нам нравилось кафе.** |
| Plural | **Мне нравятся эти курсы.** | **Мне нравились эти курсы.** |

**Не** va delante del verbo: **Им не нравится тест.**

**Regla:** **Нужен** concuerda con la cosa que hace falta. La persona va en dativo. Delante de un infinitivo, la forma fija es **нужно**.

| Qué hace falta | Forma | Ejemplo |
|---|---|---|
| Sustantivo masculino | **нужен** | **Мне нужен словарь.** |
| Sustantivo femenino | **нужна** | **Мне нужна книга.** |
| Sustantivo neutro | **нужно** | **Мне нужно время.** |
| Sustantivo plural | **нужны** | **Мне нужны деньги.** |
| Una acción | **нужно** + infinitivo | **Мне нужно позвонить другу.** |

**Regla:** **К** con dativo es el movimiento hacia una persona. **Я иду к другу.** **Подойдите к преподавателю.** **Завтра я иду к врачу.**

**Regla:** La edad pone a la persona en dativo. Los años siguen la regla de los números que ya conoces. Manda la última cifra: **год** detrás de 1, salvo 11; **года** detrás de 2, 3 o 4, salvo 12–14; **лет** en todos los demás números.

- **Сколько вам лет?**
- **Мне двадцать лет.**
- **Ему двадцать один год.**
- **Ей двадцать два года.**

### Cómo se usa
Empieza una frase de gusto o de necesidad por la persona: **мне**, **ей**, **студентам**. Después deja que la cosa decida el verbo o la forma de **нужен**.

Cuando llamas, ayudas o das, pon al destinatario en dativo antes de pensar en el objeto. **Я звоню другу.** **Дайте мне меню.** **Помогите мне.**

Usa **к** cuando vas hacia una persona, no hacia dentro de un edificio. **Я иду в университет** es un lugar. **Я иду к преподавателю** es una persona.

### Ejemplos
- **Я звоню другу.** — Llamo a un amigo.
- **Помогите мне, пожалуйста.** — Ayúdeme, por favor.
- **Дайте мне меню.** — Deme el menú, por favor.
- **Преподаватель объясняет студентам правило.** — El profesor explica la regla a los estudiantes.
- **Мне нравится русский язык.** — Me gusta el ruso.
- **Мне нравятся эти курсы.** — Me gustan estos cursos.
- **Ей не нравится тест.** — A ella no le gusta el test.
- **Мне нужна книга.** — Necesito un libro.
- **Мне нужно позвонить преподавателю.** — Tengo que llamar al profesor.
- **Я иду к врачу.** — Voy al médico.
- **Сколько вам лет? — Мне двадцать лет.** — ¿Cuántos años tiene? — Tengo veinte.

### Errores típicos
- **Я нравится этот курс** o **Я нравлюсь русский язык**. La persona va en dativo y la cosa es el sujeto: **Мне нравится этот курс.**
- **Мне нравится эти курсы**. Un sujeto plural lleva **нравятся**.
- **Я звоню друга**. **Звонить** lleva dativo: **другу**.
- **Дайте меня**. “A mí” es **мне**. **Меня** es acusativo o genitivo.
- **К друга**. Detrás de **к** el dativo es **к другу**.
- **Мне нужен книга**. **Книга** es femenino: **Мне нужна книга.**
- **К ему**. Detrás de **к** el pronombre es **к нему**.

### Si tu lengua es el español
*Me gusta el ruso* tiene la misma arquitectura que **Мне нравится русский язык**: la persona va delante, en un forma de objeto, y la cosa manda en el verbo. *Me gustan los cursos* es **Мне нравятся курсы**. Aquí el español es un buen mapa. *Llamar a un amigo* usa la preposición *a*; el ruso no añade *a*, cambia la terminación: **звоню другу**. *Dar el menú a alguien* sí se parece: **Дайте мне меню**, persona en dativo y cosa en acusativo. *Necesito un libro* concuerda en español con *yo*. En ruso concuerda con el libro: **Мне нужна книга.**

> 💡 Para “gustar” y “hacer falta”, di primero la persona en dativo. Después deja que la cosa mande en la forma: **нравится / нравятся**, **нужен / нужна / нужно / нужны**.

### Comprueba
1. Completa: **Мне ___ эти курсы.**
2. Llamo a un amigo. Completa **Я звоню ___.**
3. Necesito un libro. Completa **Мне ___ книга.**

**Respuestas:** 1) **нравятся.** 2) **другу.** 3) **нужна.**`,

    de: `## Der Dativ

> **In diesem Thema:** **кому? чему?**, die Endungen, **нравиться**, **нужен** und **к** mit dem Dativ.

### Warum das wichtig ist
Die Person, die einen Anruf, eine Speisekarte, eine Erklärung oder Hilfe empfängt, steht im Dativ. **Я звоню друга** benutzt den Akkusativ, den Sie schon kennen, und bei **звонить** ist dieser Kasus falsch. **Другу** ist die Form, die das Verb verlangt.

„Ich mag diesen Kurs“ ist die zweite Falle. Russisch macht **я** nicht zum Subjekt von **нравиться**. Der Kurs ist das Subjekt. Die Person steht im Dativ und oft am Anfang: **Мне нравится этот курс.**

### Die Regel

**Regel:** Der Dativ antwortet auf **кому?** bei einer Person und auf **чему?** bei einer Sache. Endungen im Singular:

| Substantivtyp | Nominativ | Dativ Singular | Endung |
|---|---|---|---|
| Maskulinum oder Neutrum, harter Stamm | **студент**, **врач**, **окно** | **студенту**, **врачу**, **окну** | **-у** |
| Maskulinum oder Neutrum, weicher Stamm | **словарь**, **преподаватель**, **море** | **словарю**, **преподавателю**, **морю** | **-ю** |
| Femininum auf **-а / -я** | **книга**, **сестра**, **неделя** | **книге**, **сестре**, **неделе** | **-е** |
| Femininum auf **-ия** | **аудитория**, **лекция**, **Мария** | **аудитории**, **лекции**, **Марии** | **-и** |
| Femininum auf **-ь** | **тетрадь** | **тетради** | **-и** |

**Книге** und **аудитории** sehen aus wie die Präpositivformen aus A1. Die Frage ist eine andere: hier **кому? чему?**, dort **где? о ком?** Maskulina übernehmen die Präpositivendung nicht. Präpositiv **студенте**, Dativ **студенту**.

Die Pluralendung ist **-ам / -ям**: **студентам**, **книгам**, **окнам**, **преподавателям**. **Друг** hat die fertige Pluralform **друзьям**.

Personalpronomen:

| Nominativ | Dativ | Nach **к** |
|---|---|---|
| **я** | **мне** | **ко мне** |
| **ты** | **тебе** | **к тебе** |
| **он** | **ему** | **к нему** |
| **она** | **ей** | **к ней** |
| **мы** | **нам** | **к нам** |
| **вы** | **вам** | **к вам** |
| **они** | **им** | **к ним** |

**Ему**, **ей** und **им** bekommen nach einer Präposition ein **н**: **к нему**, **к ней**, **к ним**. **Ко мне** schiebt ein **о** ein, denselben Stützvokal wie in **во сколько**.

Ein Substantiv in den Kasus, die Sie schon haben:

| Kasus | **студент** | **книга** |
|---|---|---|
| Akkusativ | **студента** | **книгу** |
| Genitiv | **студента** | **книги** |
| Dativ | **студенту** | **книге** |

**Regel:** Diese Verben setzen die Person in den Dativ. Die Sache, wenn es eine gibt, bleibt im Akkusativ.

| Verb | Rahmen | Beispiel |
|---|---|---|
| **звонить** | **кому** | **Я звоню другу.** |
| **помогать** | **кому** | **Помогите мне, пожалуйста.** |
| **давать** | **кому** + **что** | **Дайте мне меню.** |
| **объяснять** | **кому** + **что** | **Преподаватель объясняет студентам правило.** |
| **писать** | **кому** | **Я пишу преподавателю.** |
| **отвечать** | **кому** | **Отвечайте преподавателю.** |

**Regel:** Bei **нравиться** steht die Person im Dativ, und die Sache, die gefällt, ist das Subjekt im Nominativ. Das Verb richtet sich nach dieser Sache.

| Subjekt | Präsens | Vergangenheit |
|---|---|---|
| Maskulinum Singular | **Мне нравится музей.** | **Мне нравился музей.** |
| Femininum Singular | **Ей нравится грамматика.** | **Ей нравилась лекция.** |
| Neutrum Singular | **Нам нравится кафе.** | **Нам нравилось кафе.** |
| Plural | **Мне нравятся эти курсы.** | **Мне нравились эти курсы.** |

**Не** steht vor dem Verb: **Им не нравится тест.**

**Regel:** **Нужен** richtet sich nach der Sache, die man braucht. Die Person steht im Dativ. Vor einem Infinitiv bleibt die Form **нужно**.

| Was fehlt | Form | Beispiel |
|---|---|---|
| Maskulines Substantiv | **нужен** | **Мне нужен словарь.** |
| Feminines Substantiv | **нужна** | **Мне нужна книга.** |
| Neutrales Substantiv | **нужно** | **Мне нужно время.** |
| Substantiv im Plural | **нужны** | **Мне нужны деньги.** |
| Eine Handlung | **нужно** + Infinitiv | **Мне нужно позвонить другу.** |

**Regel:** **К** plus Dativ ist die Bewegung zu einer Person. **Я иду к другу.** **Подойдите к преподавателю.** **Завтра я иду к врачу.**

**Regel:** Das Alter setzt die Person in den Dativ. Die Jahre folgen der Zahlenregel, die Sie schon kennen. Die letzte Ziffer entscheidet: **год** nach 1, außer 11; **года** nach 2, 3 oder 4, außer 12–14; **лет** bei jeder anderen Zahl.

- **Сколько вам лет?**
- **Мне двадцать лет.**
- **Ему двадцать один год.**
- **Ей двадцать два года.**

### So verwendet man es
Beginnen Sie einen Satz über Gefallen oder Brauchen mit der Person: **мне**, **ей**, **студентам**. Danach entscheidet die Sache über das Verb oder über **нужен**.

Wenn Sie anrufen, helfen oder geben, nennen Sie den Empfänger im Dativ, bevor Sie über das Objekt nachdenken. **Я звоню другу.** **Дайте мне меню.** **Помогите мне.**

Benutzen Sie **к**, wenn Sie zu einer Person gehen und nicht in ein Gebäude. **Я иду в университет** ist ein Ort. **Я иду к преподавателю** ist eine Person.

### Beispiele
- **Я звоню другу.** — Ich rufe einen Freund an.
- **Помогите мне, пожалуйста.** — Helfen Sie mir bitte.
- **Дайте мне меню.** — Geben Sie mir bitte die Speisekarte.
- **Преподаватель объясняет студентам правило.** — Die Lehrperson erklärt den Studenten die Regel.
- **Мне нравится русский язык.** — Mir gefällt Russisch.
- **Мне нравятся эти курсы.** — Mir gefallen diese Kurse.
- **Ей не нравится тест.** — Ihr gefällt der Test nicht.
- **Мне нужна книга.** — Ich brauche ein Buch.
- **Мне нужно позвонить преподавателю.** — Ich muss die Lehrperson anrufen.
- **Я иду к врачу.** — Ich gehe zum Arzt.
- **Сколько вам лет? — Мне двадцать лет.** — Wie alt sind Sie? — Ich bin zwanzig.

### Typische Fehler
- **Я нравится этот курс** oder **Я нравлюсь русский язык**. Die Person steht im Dativ, die Sache ist das Subjekt: **Мне нравится этот курс.**
- **Мне нравится эти курсы**. Ein Subjekt im Plural verlangt **нравятся**.
- **Я звоню друга**. **Звонить** regiert den Dativ: **другу**.
- **Дайте меня**. „Mir“ heißt **мне**. **Меня** ist Akkusativ oder Genitiv.
- **К друга**. Nach **к** heißt der Dativ **к другу**.
- **Мне нужен книга**. **Книга** ist feminin: **Мне нужна книга.**
- **К ему**. Nach **к** heißt das Pronomen **к нему**.

### Wenn Ihre Sprache Deutsch ist
*Mir gefällt Russisch* und *Mir gefallen die Kurse* haben dieselbe Architektur wie **Мне нравится русский язык** und **Мне нравятся эти курсы**. Das ist der seltene Fall, in dem der deutsche Satzbau direkt hilft. *Ich rufe den Freund an* benutzt den Akkusativ. **Звонить** will den Dativ: **Я звоню другу.** *Ich gebe dem Freund die Speisekarte* passt wieder: **Дайте мне меню**, Empfänger im Dativ, Sache im Akkusativ. *Helfen Sie mir* ist auch im Deutschen Dativ, wie **Помогите мне**. *Ich brauche ein Buch* richtet sich im Deutschen nicht nach *Buch*. Russisch tut es: **Мне нужна книга.**

> 💡 Bei „gefallen“ und „brauchen“ nennen Sie zuerst die Person im Dativ. Danach bestimmt die Sache die Form: **нравится / нравятся**, **нужен / нужна / нужно / нужны**.

### Prüfen Sie sich
1. Ergänzen Sie: **Мне ___ эти курсы.**
2. Ich rufe einen Freund an. Ergänzen Sie **Я звоню ___.**
3. Ich brauche ein Buch. Ergänzen Sie **Мне ___ книга.**

**Antworten:** 1) **нравятся.** 2) **другу.** 3) **нужна.**`,
  },

  "ru-a2-instrumental": {
    en: `## The instrumental case

> **In this topic:** **кем? чем?**, professions with **работать** and **стать**, the tool without a preposition, and **с** plus the instrumental.

### Why it matters
**Он работает врачом**, **Я пишу ручкой**, and **Я живу с другом** put the noun in a case English does not mark on the noun. The profession is the point students miss. In the present, “he is a doctor” stays in the nominative: **Он — врач**. With **работать**, **стать**, and with **быть** in the past or the future, the same job takes the instrumental: **Он был врачом**, **Она будет инженером**.

The preposition **с** is only half of the story. “With a person” uses **с**. “With a pen”, meaning the tool in your hand, does not.

### The rule

**Rule:** The instrumental answers **кем?** for a person and **чем?** for a thing.

| Noun type | Nominative | Instrumental singular | Ending |
|---|---|---|---|
| Masculine or neuter, hard stem | **студент**, **инженер**, **окно**, **врач** | **студентом**, **инженером**, **окном**, **врачом** | **-ом** |
| Masculine or neuter, soft stem | **словарь**, **преподаватель**, **учитель**, **море** | **словарём**, **преподавателем**, **учителем**, **морем** | **-ем / -ём** |
| Feminine **-а** | **сестра**, **студентка**, **ручка**, **книга** | **сестрой**, **студенткой**, **ручкой**, **книгой** | **-ой** |
| Feminine **-я** | **неделя** | **неделей** | **-ей** |
| Feminine **-ь** | **дверь**, **тетрадь** | **дверью**, **тетрадью** | **-ью** |
| Masculine noun in **-а** | **папа** | **папой** | **-ой**, like **-а** nouns |

Learn **врачом** and **учителем** as whole forms. After **ж, ш, ч, щ, ц**, a stressed ending is often **-ом** (**врачо́м**), and an unstressed ending is often **-ем** (**учителем**).

The plural ending is **-ами / -ями**: **студентами**, **книгами**, **окнами**, **преподавателями**. The plural of **друг** in this case is **друзьями**: **с друзьями**.

Personal pronouns:

| Nominative | Instrumental | With **с** |
|---|---|---|
| **я** | **мной** | **со мной** |
| **ты** | **тобой** | **с тобой** |
| **он** | **им** | **с ним** |
| **она** | **ей** | **с ней** |
| **мы** | **нами** | **с нами** |
| **вы** | **вами** | **с вами** |
| **они** | **ими** | **с ними** |

**Со мной** inserts **о**. **Ним**, **ней**, and **ними** add **н** after a preposition. Two forms collide with the dative, so the sentence frame has to decide:

| Pronoun | Dative, **кому?** | Instrumental, **кем?** |
|---|---|---|
| **он** | **ему** | **им** |
| **она** | **ей** | **ей** |
| **они** | **им** | **ими** |

**Ей** can be “to her” or “by her / with her”. **Им** can be “to them” or “by him”. **С ней** and **с ним** show the preposition, so those phrases are clearly instrumental.

**Rule:** A job in the present is nominative. There is no **есть** in this sentence. **Работать**, **стать**, and **быть** in the past or the future take the instrumental.

| Situation | Case | Example |
|---|---|---|
| Present identity | nominative | **Он — врач.** **Мой отец — учитель.** **Я студент.** **Я студентка.** |
| **работать** | instrumental | **Он работает врачом.** **Она работает инженером.** |
| **стать**, **хотеть стать**, **хотеть быть** | instrumental | **Она хочет стать инженером.** **Я хочу быть врачом.** |
| **был / была / будет** | instrumental | **Я был студентом.** **Я была студенткой.** **Он будет инженером.** |

The past still agrees in gender: **был студентом**, **была студенткой**. The job ending is instrumental on top of that.

**Rule:** A tool or a means takes the instrumental alone, with no preposition.

- **Я пишу ручкой.**
- **Он рисует карандашом.**

**Rule:** **С** plus the instrumental means “together with”.

- **Я живу с другом.**
- **Мы говорим с преподавателем.**
- **Кофе с молоком.**
- **Иди со мной.**

Before a group of consonants **с** can become **со**: **со мной**, **со студентом**. Learn **со мной** as a fixed phrase. **С другом** does not need the extra vowel.

**С** plus the genitive is a different meaning, “from / off”: **с лекции** (from the lecture), **с работы** (from work). **С преподавателем** is “with the lecturer”. The case shows which **с** you are using.

One place phrase belongs here. **За** plus the instrumental is the position “at / behind”: **Я сижу за столом.** Movement into that place is accusative: **Сесть за стол.**

You already use **утром** and **вечером** as fixed time words. Leave them as adverbs. Do not rebuild them in this topic.

### How to use it
Say a present job in the nominative, with a dash if you want the textbook shape: **Она — инженер.** When the verb is **работает**, **стал**, **был**, or **будет**, switch the job to the instrumental before you say it aloud.

Keep two “with” sentences apart. A person beside you: **с** plus instrumental, **с другом**. A thing you use: the ending alone, **ручкой**.

### Examples
- **Он — врач.** — He is a doctor.
- **Мой отец — учитель.** — My father is a teacher.
- **Он работает врачом.** — He works as a doctor.
- **Она хочет стать инженером.** — She wants to become an engineer.
- **Я был студентом.** — I (masculine) was a student.
- **Я была студенткой.** — I (feminine) was a student.
- **Я пишу ручкой.** — I write with a pen.
- **Я живу с другом.** — I live with a friend.
- **Мы говорим с преподавателем.** — We are talking with the lecturer.
- **Кофе с молоком.** — Coffee with milk.
- **Иди со мной.** — Come with me.
- **Я сижу за столом.** — I am sitting at the table.

### Typical mistakes
- **Он работает врач** and **Она хочет стать инженер**. After these verbs the job is instrumental: **врачом**, **инженером**.
- **Я был врач**. The past of **быть** takes the instrumental: **Я был врачом**, **Я была студенткой**.
- **Он есть врач**. Present identity has no **есть**: **Он — врач.**
- **Я пишу с ручкой** for the tool. The pen is bare instrumental: **ручкой**. **С** would mean the pen is your companion.
- **С друга**. “With a friend” is **с другом**.
- **С мной**. The phrase is **со мной**.
- **С его**. “With him” is **с ним**.
- **С лекции** read as “with the lecture”. That **с** plus genitive means “from the lecture”.

### If your language is English
*He is a doctor* and *he was a doctor* use the same noun shape. Russian uses the nominative for the present, **Он — врач**, and the instrumental after the past and the future of **быть**: **Он был врачом**, **Он будет врачом**. *He works as a doctor* needs no word for *as*: **Он работает врачом**. *With a pen* has a preposition in English. The tool in Russian is an ending and no preposition: **ручкой**. *With a friend* does use a preposition: **с другом**. The English word *with* covers both, and Russian splits them.

> 💡 Present job: dictionary form. **Работать**, **стать**, **был**, **будет**: instrumental. A tool: ending, no **с**. A person beside you: **с** plus the ending.

### Check yourself
1. He works as a doctor. Complete **Он работает ___.**
2. I write with a pen. Complete **Я пишу ___.**
3. She was a student, and she is a student now. Give both sentences. The dictionary form is **студентка**.

**Answers:** 1) **врачом.** 2) **ручкой.** 3) **Она была студенткой.** **Она — студентка.**`,

    es: `## El caso instrumental

> **En este tema:** **кем? чем?**, la profesión con **работать** y **стать**, el instrumento sin preposición, y **с** con instrumental.

### Por qué importa
**Он работает врачом**, **Я пишу ручкой** y **Я живу с другом** ponen el sustantivo en un caso que el español no marca en la terminación. La profesión es el punto que más se escapa. En presente, “es médico” se queda en nominativo: **Он — врач**. Con **работать**, **стать** y con **быть** en pasado o en futuro, el mismo oficio pasa al instrumental: **Он был врачом**, **Она будет инженером**.

La preposición **с** es solo la mitad de la historia. “Con una persona” usa **с**. “Con un bolígrafo”, el instrumento en la mano, no lo usa.

### La regla

**Regla:** El instrumental responde a **кем?** si es una persona y a **чем?** si es una cosa.

| Tipo de sustantivo | Nominativo | Instrumental singular | Terminación |
|---|---|---|---|
| Masculino o neutro, tema duro | **студент**, **инженер**, **окно**, **врач** | **студентом**, **инженером**, **окном**, **врачом** | **-ом** |
| Masculino o neutro, tema blando | **словарь**, **преподаватель**, **учитель**, **море** | **словарём**, **преподавателем**, **учителем**, **морем** | **-ем / -ём** |
| Femenino en **-а** | **сестра**, **студентка**, **ручка**, **книга** | **сестрой**, **студенткой**, **ручкой**, **книгой** | **-ой** |
| Femenino en **-я** | **неделя** | **неделей** | **-ей** |
| Femenino en **-ь** | **дверь**, **тетрадь** | **дверью**, **тетрадью** | **-ью** |
| Masculino en **-а** | **папа** | **папой** | **-ой**, como los sustantivos en **-а** |

Aprende **врачом** y **учителем** como piezas enteras. Detrás de **ж, ш, ч, щ, ц**, una terminación tónica suele ser **-ом** (**врачо́м**), y una átona suele ser **-ем** (**учителем**).

La terminación de plural es **-ами / -ями**: **студентами**, **книгами**, **окнами**, **преподавателями**. El plural de **друг** en este caso es **друзьями**: **с друзьями**.

Pronombres personales:

| Nominativo | Instrumental | Con **с** |
|---|---|---|
| **я** | **мной** | **со мной** |
| **ты** | **тобой** | **с тобой** |
| **он** | **им** | **с ним** |
| **она** | **ей** | **с ней** |
| **мы** | **нами** | **с нами** |
| **вы** | **вами** | **с вами** |
| **они** | **ими** | **с ними** |

**Со мной** mete una **о**. **Ним**, **ней** y **ними** añaden **н** detrás de preposición. Dos formas chocan con el dativo, así que el marco de la frase tiene que decidir:

| Pronombre | Dativo, **кому?** | Instrumental, **кем?** |
|---|---|---|
| **он** | **ему** | **им** |
| **она** | **ей** | **ей** |
| **они** | **им** | **ими** |

**Ей** puede ser “a ella” o “con ella / por ella”. **Им** puede ser “a ellos” o “por él”. **С ней** y **с ним** llevan preposición, así que esas frases son claramente instrumentales.

**Regla:** Un oficio en presente va en nominativo. En esta frase no hay **есть**. **Работать**, **стать** y **быть** en pasado o en futuro llevan instrumental.

| Situación | Caso | Ejemplo |
|---|---|---|
| Identidad en presente | nominativo | **Он — врач.** **Мой отец — учитель.** **Я студент.** **Я студентка.** |
| **работать** | instrumental | **Он работает врачом.** **Она работает инженером.** |
| **стать**, **хотеть стать**, **хотеть быть** | instrumental | **Она хочет стать инженером.** **Я хочу быть врачом.** |
| **был / была / будет** | instrumental | **Я был студентом.** **Я была студенткой.** **Он будет инженером.** |

El pasado sigue concordando en género: **был студентом**, **была студенткой**. La terminación del oficio es instrumental además de eso.

**Regla:** Un instrumento o un medio va en instrumental solo, sin preposición.

- **Я пишу ручкой.**
- **Он рисует карандашом.**

**Regla:** **С** con instrumental significa “junto con”.

- **Я живу с другом.**
- **Мы говорим с преподавателем.**
- **Кофе с молоком.**
- **Иди со мной.**

Delante de un grupo de consonantes, **с** puede pasar a **со**: **со мной**, **со студентом**. Aprende **со мной** como frase hecha. **С другом** no necesita la vocal de más.

**С** con genitivo es otro sentido, “desde / de”: **с лекции** (de la clase), **с работы** (del trabajo). **С преподавателем** es “con el profesor”. El caso muestra qué **с** estás usando.

Una frase de lugar entra aquí. **За** con instrumental es la posición “a / detrás de”: **Я сижу за столом.** El movimiento hacia ese lugar es acusativo: **Сесть за стол.**

**Утром** y **вечером** ya funcionan como palabras de tiempo fijas. Déjalas como adverbios. No las reconstruyas en este tema.

### Cómo se usa
Di un oficio en presente en nominativo, con raya si quieres la forma del manual: **Она — инженер.** Cuando el verbo es **работает**, **стал**, **был** o **будет**, pasa el oficio al instrumental antes de decirlo.

Separa dos frases de “con”. Una persona a tu lado: **с** más instrumental, **с другом**. Una cosa que usas: solo la terminación, **ручкой**.

### Ejemplos
- **Он — врач.** — Él es médico.
- **Мой отец — учитель.** — Mi padre es profesor de escuela.
- **Он работает врачом.** — Trabaja de médico.
- **Она хочет стать инженером.** — Quiere ser ingeniera.
- **Я был студентом.** — Yo (hombre) fui estudiante.
- **Я была студенткой.** — Yo (mujer) fui estudiante.
- **Я пишу ручкой.** — Escribo con bolígrafo.
- **Я живу с другом.** — Vivo con un amigo.
- **Мы говорим с преподавателем.** — Hablamos con el profesor.
- **Кофе с молоком.** — Café con leche.
- **Иди со мной.** — Ven conmigo.
- **Я сижу за столом.** — Estoy sentado a la mesa.

### Errores típicos
- **Он работает врач** y **Она хочет стать инженер**. Detrás de estos verbos el oficio va en instrumental: **врачом**, **инженером**.
- **Я был врач**. El pasado de **быть** lleva instrumental: **Я был врачом**, **Я была студенткой**.
- **Он есть врач**. La identidad en presente no lleva **есть**: **Он — врач.**
- **Я пишу с ручкой** para el instrumento. El bolígrafo va en instrumental solo: **ручкой**. **С** lo convertiría en compañero.
- **С друга**. “Con un amigo” es **с другом**.
- **С мной**. La frase es **со мной**.
- **С его**. “Con él” es **с ним**.
- Leer **с лекции** como “con la clase”. Ese **с** con genitivo significa “de la clase, al salir”.

### Si tu lengua es el español
*Soy médico* y *es médico* usan el sustantivo sin preposición, como el presente ruso **Он — врач**. *Era médico*, *trabaja de médico* y *quiere ser ingeniero* llevan *de* o no cambian la palabra. El ruso pone terminación: **был врачом**, **работает врачом**, **стать инженером**. *Escribo con un bolígrafo* usa *con*. El instrumento ruso no lleva **с**: **пишу ручкой**. *Con un amigo* sí coincide con **с другом**. La palabra española *con* cubre las dos relaciones, y el ruso las separa.

> 💡 Oficio en presente: forma del diccionario. **Работать**, **стать**, **был**, **будет**: instrumental. Un instrumento: terminación, sin **с**. Una persona al lado: **с** más la terminación.

### Comprueba
1. Trabaja de médico. Completa **Он работает ___.**
2. Escribo con bolígrafo. Completa **Я пишу ___.**
3. Fue estudiante y ahora es estudiante. Da las dos frases. La forma de diccionario es **студентка**.

**Respuestas:** 1) **врачом.** 2) **ручкой.** 3) **Она была студенткой.** **Она — студентка.**`,

    de: `## Der Instrumental

> **In diesem Thema:** **кем? чем?**, der Beruf mit **работать** und **стать**, das Werkzeug ohne Präposition, und **с** mit dem Instrumental.

### Warum das wichtig ist
**Он работает врачом**, **Я пишу ручкой** und **Я живу с другом** setzen das Substantiv in einen Kasus, den das Deutsche am Substantiv nicht so markiert. Der Beruf ist die Stelle, die oft verloren geht. Im Präsens bleibt „er ist Arzt“ im Nominativ: **Он — врач**. Mit **работать**, **стать** und mit **быть** in der Vergangenheit oder Zukunft nimmt derselbe Beruf den Instrumental: **Он был врачом**, **Она будет инженером**.

Die Präposition **с** ist nur die halbe Geschichte. „Mit einer Person“ benutzt **с**. „Mit einem Stift“, das Werkzeug in der Hand, benutzt es nicht.

### Die Regel

**Regel:** Der Instrumental antwortet auf **кем?** bei einer Person und auf **чем?** bei einer Sache.

| Substantivtyp | Nominativ | Instrumental Singular | Endung |
|---|---|---|---|
| Maskulinum oder Neutrum, harter Stamm | **студент**, **инженер**, **окно**, **врач** | **студентом**, **инженером**, **окном**, **врачом** | **-ом** |
| Maskulinum oder Neutrum, weicher Stamm | **словарь**, **преподаватель**, **учитель**, **море** | **словарём**, **преподавателем**, **учителем**, **морем** | **-ем / -ём** |
| Femininum auf **-а** | **сестра**, **студентка**, **ручка**, **книга** | **сестрой**, **студенткой**, **ручкой**, **книгой** | **-ой** |
| Femininum auf **-я** | **неделя** | **неделей** | **-ей** |
| Femininum auf **-ь** | **дверь**, **тетрадь** | **дверью**, **тетрадью** | **-ью** |
| Maskulinum auf **-а** | **папа** | **папой** | **-ой**, wie die Substantive auf **-а** |

Lernen Sie **врачом** und **учителем** als ganze Formen. Nach **ж, ш, ч, щ, ц** ist eine betonte Endung oft **-ом** (**врачо́м**), eine unbetonte oft **-ем** (**учителем**).

Die Pluralendung ist **-ами / -ями**: **студентами**, **книгами**, **окнами**, **преподавателями**. Der Plural von **друг** heißt in diesem Kasus **друзьями**: **с друзьями**.

Personalpronomen:

| Nominativ | Instrumental | Mit **с** |
|---|---|---|
| **я** | **мной** | **со мной** |
| **ты** | **тобой** | **с тобой** |
| **он** | **им** | **с ним** |
| **она** | **ей** | **с ней** |
| **мы** | **нами** | **с нами** |
| **вы** | **вами** | **с вами** |
| **они** | **ими** | **с ними** |

**Со мной** schiebt ein **о** ein. **Ним**, **ней** und **ними** bekommen nach einer Präposition ein **н**. Zwei Formen stoßen mit dem Dativ zusammen. Der Satzrahmen muss entscheiden:

| Pronomen | Dativ, **кому?** | Instrumental, **кем?** |
|---|---|---|
| **он** | **ему** | **им** |
| **она** | **ей** | **ей** |
| **они** | **им** | **ими** |

**Ей** kann „ihr“ oder „mit ihr / durch sie“ sein. **Им** kann „ihnen“ oder „durch ihn“ sein. **С ней** und **с ним** zeigen die Präposition, deshalb sind diese Wendungen klar Instrumental.

**Regel:** Ein Beruf im Präsens steht im Nominativ. In diesem Satz steht kein **есть**. **Работать**, **стать** und **быть** in der Vergangenheit oder Zukunft regieren den Instrumental.

| Situation | Kasus | Beispiel |
|---|---|---|
| Identität im Präsens | Nominativ | **Он — врач.** **Мой отец — учитель.** **Я студент.** **Я студентка.** |
| **работать** | Instrumental | **Он работает врачом.** **Она работает инженером.** |
| **стать**, **хотеть стать**, **хотеть быть** | Instrumental | **Она хочет стать инженером.** **Я хочу быть врачом.** |
| **был / была / будет** | Instrumental | **Я был студентом.** **Я была студенткой.** **Он будет инженером.** |

Die Vergangenheit richtet sich weiter nach dem Genus: **был студентом**, **была студенткой**. Die Berufsform ist zusätzlich Instrumental.

**Regel:** Ein Werkzeug oder ein Mittel steht allein im Instrumental, ohne Präposition.

- **Я пишу ручкой.**
- **Он рисует карандашом.**

**Regel:** **С** plus Instrumental heißt „zusammen mit“.

- **Я живу с другом.**
- **Мы говорим с преподавателем.**
- **Кофе с молоком.**
- **Иди со мной.**

Vor einer Konsonantengruppe kann **с** zu **со** werden: **со мной**, **со студентом**. Lernen Sie **со мной** als feste Wendung. **С другом** braucht keinen zusätzlichen Vokal.

**С** plus Genitiv ist eine andere Bedeutung, „von / herab“: **с лекции** (von der Vorlesung), **с работы** (von der Arbeit). **С преподавателем** heißt „mit der Lehrperson“. Der Kasus zeigt, welches **с** Sie meinen.

Eine Ortswendung gehört hierher. **За** plus Instrumental ist die Lage „an / hinter“: **Я сижу за столом.** Die Bewegung an diesen Platz ist Akkusativ: **Сесть за стол.**

**Утром** und **вечером** benutzen Sie schon als feste Zeitwörter. Lassen Sie sie als Adverbien stehen. Bauen Sie sie in diesem Thema nicht neu.

### So verwendet man es
Sagen Sie einen Beruf im Präsens im Nominativ, mit Gedankenstrich, wenn Sie die Lehrbuchform wollen: **Она — инженер.** Wenn das Verb **работает**, **стал**, **был** oder **будет** ist, setzen Sie den Beruf in den Instrumental, bevor Sie ihn aussprechen.

Halten Sie zwei „mit“-Sätze auseinander. Eine Person neben Ihnen: **с** plus Instrumental, **с другом**. Eine Sache, die Sie benutzen: nur die Endung, **ручкой**.

### Beispiele
- **Он — врач.** — Er ist Arzt.
- **Мой отец — учитель.** — Mein Vater ist Lehrer.
- **Он работает врачом.** — Er arbeitet als Arzt.
- **Она хочет стать инженером.** — Sie möchte Ingenieurin werden.
- **Я был студентом.** — Ich (maskulin) war Student.
- **Я была студенткой.** — Ich (feminin) war Studentin.
- **Я пишу ручкой.** — Ich schreibe mit dem Stift.
- **Я живу с другом.** — Ich wohne mit einem Freund.
- **Мы говорим с преподавателем.** — Wir sprechen mit der Lehrperson.
- **Кофе с молоком.** — Kaffee mit Milch.
- **Иди со мной.** — Komm mit mir.
- **Я сижу за столом.** — Ich sitze am Tisch.

### Typische Fehler
- **Он работает врач** und **Она хочет стать инженер**. Nach diesen Verben steht der Beruf im Instrumental: **врачом**, **инженером**.
- **Я был врач**. Die Vergangenheit von **быть** regiert den Instrumental: **Я был врачом**, **Я была студенткой**.
- **Он есть врач**. Die Identität im Präsens hat kein **есть**: **Он — врач.**
- **Я пишу с ручкой** für das Werkzeug. Der Stift steht allein im Instrumental: **ручкой**. **С** würde ihn zum Begleiter machen.
- **С друга**. „Mit einem Freund“ heißt **с другом**.
- **С мной**. Die Wendung heißt **со мной**.
- **С его**. „Mit ihm“ heißt **с ним**.
- **С лекции** als „mit der Vorlesung“ lesen. Dieses **с** plus Genitiv heißt „von der Vorlesung weg“.

### Wenn Ihre Sprache Deutsch ist
*Er ist Arzt* steht im Nominativ, wie **Он — врач**. *Er war Arzt* bleibt im Deutschen ebenfalls Nominativ. Russisch wechselt: **Он был врачом**. *Er arbeitet als Arzt* benutzt *als*. Russisch braucht kein *als*: **Он работает врачом**. *Ich schreibe mit dem Stift* benutzt *mit*. Das russische Werkzeug hat kein *mit* und kein **с**: **ручкой**. *Mit einem Freund* passt zu **с** plus Instrumental: **с другом**. Deutsch *mit* regiert den Dativ. Russisches **с** in der Bedeutung „mit“ regiert den Instrumental.

> 💡 Beruf im Präsens: Wörterbuchform. **Работать**, **стать**, **был**, **будет**: Instrumental. Ein Werkzeug: Endung, kein **с**. Eine Person neben Ihnen: **с** plus Endung.

### Prüfen Sie sich
1. Er arbeitet als Arzt. Ergänzen Sie **Он работает ___.**
2. Ich schreibe mit dem Stift. Ergänzen Sie **Я пишу ___.**
3. Sie war Studentin, und sie ist jetzt Studentin. Geben Sie beide Sätze. Die Wörterbuchform ist **студентка**.

**Antworten:** 1) **врачом.** 2) **ручкой.** 3) **Она была студенткой.** **Она — студентка.**`,
  },

  "ru-a2-aspect-intro": {
    en: `## Verb aspect: an introduction

> **In this topic:** imperfective and perfective pairs, process against result, and how that choice sits inside the past and the future.

### Why it matters
**Читал** and **прочитал** are both past, and they are not the same sentence. **Буду читать** and **прочитаю** are both future, and the future topic already kept them apart. Aspect is the name of that choice. It is not a third tense. Russian does not split “I read” and “I am reading” into two present forms. The new choice is process or result, inside the past and inside the future.

Every Russian verb is imperfective or perfective. Many come in pairs. At A2 you learn the frequent pairs and choose from the meaning. You do not build a new partner by adding a prefix you have not learned.

### The rule

**Rule:** The imperfective, **несовершенный вид**, names a process, a stretch of time, a repetition, or a general fact. The perfective, **совершенный вид**, names a result or one completed act.

| Imperfective | Perfective | How the pair is built |
|---|---|---|
| **читать** | **прочитать** | prefix **про-** |
| **писать** | **написать** | prefix **на-** |
| **делать** | **сделать** | prefix **с-** |
| **говорить** | **сказать** | a different verb; memorize the pair |

The prefix is part of the pair, not a machine. **Про-**, **на-**, and **с-** do not each have one meaning you can apply to every verb. **Сказать** is the result partner of **говорить**. It is not **говорить** plus a prefix. **Поговорить** is a different verb, “to have a talk”, and it is not the pair you want for “said”.

**Rule:** Aspect and tense are two choices. The perfective has no present. A present-looking perfective form is future, which is why **я прочитаю** does not mean “I am reading”.

| Time | Imperfective | Perfective |
|---|---|---|
| Now, or a habit | **я читаю**, **я делаю**, **я пишу** | no present |
| Past process, duration, repetition | **я читал**, **я делал**, **я писал** | — |
| Past result | — | **я прочитал**, **я сделал**, **я написал** |
| Future process or plan | **я буду читать**, **я буду делать** | — |
| Future result | — | **я прочитаю**, **я сделаю**, **я напишу** |

The past still agrees in gender: **он прочитал**, **она прочитала**, **они прочитали**. Aspect does not replace that rule. The future still has no gender: **она прочитает**, **она будет читать**.

**Rule:** Ask what the sentence is about before you pick the verb.

| The sentence answers | Aspect | Example |
|---|---|---|
| **Как долго?** **Сколько времени?** | imperfective | **Вчера я читал книгу два часа.** |
| **Каждый день**, a habit | imperfective | **Я каждый день делаю домашнее задание.** |
| What was the outcome? Is it done? | perfective | **Вчера я прочитал книгу.** |
| One finished homework item | perfective | **Я сделал упражнение.** |

A habit does not take the perfective. **Каждый день я прочитал** is not the A2 sentence. Use **читаю** or **буду читать**.

**Буду** takes an imperfective infinitive only. **Я буду прочитать** and **Я буду сделать** are not future forms.

**Rule:** With **не**, the usual A2 contrast is this.

| Sentence | Usual meaning |
|---|---|
| **Я не читал этот текст.** | I did not read it. The activity did not take place. |
| **Я не прочитал этот текст.** | I did not finish it. The result is missing. |

Both sentences are grammatical. The aspect changes the story.

A short past can use both, in order. The imperfective is the background. The perfective is the event that gets completed.

- **Вчера я делал домашнее задание два часа и сделал все упражнения.**
- **Она писала сочинение весь вечер и написала его.**

### How to use it
When you tell yesterday, decide for each verb: time passing, or a result. **Два часа**, **весь вечер**, and **каждый день** point to the imperfective. A finished text, a finished exercise, or “and then it was done” points to the perfective.

Keep the three future sentences from the previous topic, and name them as aspect:

- **Завтра я буду читать текст.** Process.
- **Завтра я прочитаю текст.** Result.
- **Я читаю по-русски каждый день.** Habit, present imperfective.

**Напишу** keeps the consonant of **пишу**: **напишу**, not **написаю**. **Сделаю** is regular beside **делать**: **сделаю, сделаешь, сделает**.

### Examples
- **Вчера я читал книгу два часа.** — Yesterday I read the book for two hours. Process.
- **Вчера я прочитал книгу.** — Yesterday I finished the book.
- **Я каждый день делаю домашнее задание.** — I do the homework every day.
- **Вчера я сделал упражнение.** — Yesterday I did the exercise. It is finished.
- **Она писала сочинение весь вечер.** — She was writing the essay all evening.
- **Она написала сочинение.** — She wrote the essay. Result.
- **Что он сказал?** — What did he say?
- **Я не читал этот текст.** — I did not read this text.
- **Я не прочитал этот текст.** — I did not finish this text.
- **Завтра я буду писать тест.** — Tomorrow I will be writing the test.
- **Завтра я напишу сочинение.** — Tomorrow I will write the essay to the end.

### Typical mistakes
- Treating aspect as tense. **Прочитал** is past and perfective. **Прочитаю** is future and perfective. The present cell of a perfective verb is empty.
- **Каждый день я сделал упражнение** for a habit. A repeated action is imperfective: **каждый день я делаю**.
- **Я буду написать** and **Я буду прочитать**. **Буду** takes **писать** and **читать**.
- Using **прочитал** to answer “for two hours”. Duration is **читал**.
- Inventing a prefix. Learn **читать / прочитать** as a pair. Do not produce a new perfective from a verb you have only seen once.
- **Он сказал** replaced by a prefixed **говорить**. “He said” is **Он сказал.**
- Forgetting gender on the past: **она прочитал**. The feminine past is **прочитала**, **сделала**, **написала**, **сказала**.

### If your language is English
*I was reading for two hours* maps cleanly onto **читал**. *I read the book*, when you mean you finished it, maps onto **прочитал**. *I will be reading* is **буду читать**. *I will read it through* is **прочитаю**. English does not make this choice on every verb, and it has no empty present for a “result” verb. A perfective form never fills the present slot. *I didn’t read it* is usually **я не читал**. *I didn’t finish it* is **я не прочитал**.

> 💡 Ask **как долго?** If you can answer with a length of time or with “every day”, take the imperfective. If you can answer “it is done”, take the perfective.

### Check yourself
1. Yesterday I spent two hours on the book. Complete **Вчера я ___ книгу два часа.**
2. Yesterday I finished the book. Complete **Вчера я ___ книгу.**
3. Which sentence is the habit: **Я каждый день делаю домашнее задание** or **Я каждый день сделал домашнее задание**?

**Answers:** 1) **читал.** 2) **прочитал.** 3) **Я каждый день делаю домашнее задание.**`,

    es: `## El aspecto verbal: introducción

> **En este tema:** parejas de imperfectivo y perfectivo, proceso frente a resultado, y cómo esa elección se sitúa dentro del pasado y del futuro.

### Por qué importa
**Читал** y **прочитал** están los dos en pasado, y no son la misma frase. **Буду читать** y **прочитаю** son los dos futuro, y el tema del futuro ya los separó. El aspecto es el nombre de esa elección. No es un tercer tiempo. El ruso no separa *leo* y *estoy leyendo* en dos presentes. La elección nueva es proceso o resultado, dentro del pasado y dentro del futuro.

Cada verbo ruso es imperfectivo o perfectivo. Muchos van en pareja. En A2 se aprenden las parejas frecuentes y se elige por el sentido. No se fabrica una pareja nueva con un prefijo que no has aprendido.

### La regla

**Regla:** El imperfectivo, **несовершенный вид**, nombra un proceso, un tramo de tiempo, una repetición o un hecho general. El perfectivo, **совершенный вид**, nombra un resultado o un acto cerrado.

| Imperfectivo | Perfectivo | Cómo está hecha la pareja |
|---|---|---|
| **читать** | **прочитать** | prefijo **про-** |
| **писать** | **написать** | prefijo **на-** |
| **делать** | **сделать** | prefijo **с-** |
| **говорить** | **сказать** | otro verbo; la pareja se memoriza |

El prefijo es parte de la pareja, no una máquina. **Про-**, **на-** y **с-** no tienen cada uno un sentido que puedas aplicar a cualquier verbo. **Сказать** es la pareja de resultado de **говорить**. No es **говорить** más un prefijo. **Поговорить** es otro verbo, “charlar un rato”, y no es la pareja que quieres para “dijo”.

**Regla:** Aspecto y tiempo son dos elecciones. El perfectivo no tiene presente. Una forma perfectiva que parece presente es futuro, por eso **я прочитаю** no significa “estoy leyendo”.

| Tiempo | Imperfectivo | Perfectivo |
|---|---|---|
| Ahora, o un hábito | **я читаю**, **я делаю**, **я пишу** | no hay presente |
| Pasado de proceso, duración, repetición | **я читал**, **я делал**, **я писал** | — |
| Pasado de resultado | — | **я прочитал**, **я сделал**, **я написал** |
| Futuro de proceso o plan | **я буду читать**, **я буду делать** | — |
| Futuro de resultado | — | **я прочитаю**, **я сделаю**, **я напишу** |

El pasado sigue concordando en género: **он прочитал**, **она прочитала**, **они прочитали**. El aspecto no sustituye esa regla. El futuro sigue sin género: **она прочитает**, **она будет читать**.

**Regla:** Pregunta de qué va la frase antes de elegir el verbo.

| La frase responde a | Aspecto | Ejemplo |
|---|---|---|
| **Как долго?** **Сколько времени?** | imperfectivo | **Вчера я читал книгу два часа.** |
| **Каждый день**, un hábito | imperfectivo | **Я каждый день делаю домашнее задание.** |
| ¿Cuál fue el resultado? ¿Está hecho? | perfectivo | **Вчера я прочитал книгу.** |
| Un ejercicio ya cerrado | perfectivo | **Я сделал упражнение.** |

Un hábito no lleva perfectivo. **Каждый день я прочитал** no es la frase de A2. Usa **читаю** o **буду читать**.

**Буду** solo acepta un infinitivo imperfectivo. **Я буду прочитать** y **Я буду сделать** no son formas de futuro.

**Regla:** Con **не**, el contraste habitual de A2 es este.

| Frase | Sentido habitual |
|---|---|
| **Я не читал этот текст.** | No lo leí. La actividad no tuvo lugar. |
| **Я не прочитал этот текст.** | No lo terminé. Falta el resultado. |

Las dos frases son gramaticales. El aspecto cambia la historia.

Un pasado corto puede usar los dos, en orden. El imperfectivo es el fondo. El perfectivo es el hecho que se cierra.

- **Вчера я делал домашнее задание два часа и сделал все упражнения.**
- **Она писала сочинение весь вечер и написала его.**

### Cómo se usa
Cuando cuentas el ayer, decide en cada verbo: tiempo que pasa, o resultado. **Два часа**, **весь вечер** y **каждый день** señalan el imperfectivo. Un texto terminado, un ejercicio terminado o “y entonces quedó hecho” señalan el perfectivo.

Conserva las tres frases de futuro del tema anterior y nómbralas como aspecto:

- **Завтра я буду читать текст.** Proceso.
- **Завтра я прочитаю текст.** Resultado.
- **Я читаю по-русски каждый день.** Hábito, presente imperfectivo.

**Напишу** conserva la consonante de **пишу**: **напишу**, no **написаю**. **Сделаю** es regular al lado de **делать**: **сделаю, сделаешь, сделает**.

### Ejemplos
- **Вчера я читал книгу два часа.** — Ayer leí el libro durante dos horas. Proceso.
- **Вчера я прочитал книгу.** — Ayer terminé el libro.
- **Я каждый день делаю домашнее задание.** — Cada día hago los deberes.
- **Вчера я сделал упражнение.** — Ayer hice el ejercicio. Está terminado.
- **Она писала сочинение весь вечер.** — Estuvo escribiendo la redacción toda la noche.
- **Она написала сочинение.** — Escribió la redacción. Resultado.
- **Что он сказал?** — ¿Qué dijo?
- **Я не читал этот текст.** — No leí este texto.
- **Я не прочитал этот текст.** — No terminé este texto.
- **Завтра я буду писать тест.** — Mañana estaré haciendo el test.
- **Завтра я напишу сочинение.** — Mañana escribiré la redacción hasta el final.

### Errores típicos
- Tratar el aspecto como un tiempo. **Прочитал** es pasado y perfectivo. **Прочитаю** es futuro y perfectivo. La casilla de presente de un verbo perfectivo está vacía.
- **Каждый день я сделал упражнение** para un hábito. Una acción repetida es imperfectiva: **каждый день я делаю**.
- **Я буду написать** y **Я буду прочитать**. **Буду** lleva **писать** y **читать**.
- Usar **прочитал** para responder “durante dos horas”. La duración es **читал**.
- Inventar un prefijo. Aprende **читать / прочитать** como pareja. No produzcas un perfectivo nuevo a partir de un verbo que solo has visto una vez.
- Sustituir **Он сказал** por un **говорить** con prefijo. “Dijo” es **Он сказал.**
- Olvidar el género en el pasado: **она прочитал**. El pasado femenino es **прочитала**, **сделала**, **написала**, **сказала**.

### Si tu lengua es el español
El pretérito imperfecto (*leía, hacía*) se acerca al pasado imperfectivo: duración y hábito, **читал**, **делал**. El indefinido (*leyó, hizo*), cuando cuenta un hecho cerrado, se acerca al pasado perfectivo: **прочитал**, **сделал**. El paralelo se acaba ahí. El imperfecto español no tiene un presente ni un futuro propios; el imperfectivo ruso sí: **читаю**, **буду читать**. En español son terminaciones de un mismo verbo. En ruso son dos verbos. *Leía todos los días* encaja con **каждый день читал**. *Cada día lo terminé* no se traslada como **каждый день я прочитал**. Para el hábito, el imperfectivo.

> 💡 Pregunta **как долго?** Si puedes responder con una duración o con “cada día”, toma el imperfectivo. Si puedes responder “está hecho”, toma el perfectivo.

### Comprueba
1. Ayer estuve dos horas con el libro. Completa **Вчера я ___ книгу два часа.**
2. Ayer terminé el libro. Completa **Вчера я ___ книгу.**
3. ¿Cuál es el hábito: **Я каждый день делаю домашнее задание** o **Я каждый день сделал домашнее задание**?

**Respuestas:** 1) **читал.** 2) **прочитал.** 3) **Я каждый день делаю домашнее задание.**`,

    de: `## Der Verbalaspekt: Einführung

> **In diesem Thema:** imperfektive und perfektive Paare, Verlauf gegen Ergebnis, und wie diese Wahl in Vergangenheit und Futur sitzt.

### Warum das wichtig ist
**Читал** und **прочитал** sind beide Vergangenheit, und sie sind nicht derselbe Satz. **Буду читать** und **прочитаю** sind beide Futur, und das Futurthema hat sie schon auseinandergehalten. Der Aspekt ist der Name dieser Wahl. Er ist kein drittes Tempus. Russisch trennt „ich lese“ und „ich lese gerade“ nicht in zwei Präsensformen. Die neue Wahl heißt Verlauf oder Ergebnis, in der Vergangenheit und im Futur.

Jedes russische Verb ist imperfektiv oder perfektiv. Viele kommen als Paar. Auf A2 lernen Sie die häufigen Paare und wählen nach der Bedeutung. Sie bauen keinen neuen Partner mit einem Präfix, das Sie nicht gelernt haben.

### Die Regel

**Regel:** Der imperfektive Aspekt, **несовершенный вид**, nennt einen Verlauf, eine Zeitspanne, eine Wiederholung oder eine allgemeine Tatsache. Der perfektive Aspekt, **совершенный вид**, nennt ein Ergebnis oder eine abgeschlossene Handlung.

| Imperfektiv | Perfektiv | Wie das Paar gebaut ist |
|---|---|---|
| **читать** | **прочитать** | Präfix **про-** |
| **писать** | **написать** | Präfix **на-** |
| **делать** | **сделать** | Präfix **с-** |
| **говорить** | **сказать** | ein anderes Verb; das Paar auswendig lernen |

Das Präfix gehört zum Paar. Es ist keine Maschine. **Про-**, **на-** und **с-** haben nicht je eine Bedeutung, die Sie auf jedes Verb anwenden können. **Сказать** ist der Ergebnispartner von **говорить**. Es ist nicht **говорить** plus Präfix. **Поговорить** ist ein anderes Verb, „sich unterhalten“, und nicht das Paar für „sagte“.

**Regel:** Aspekt und Tempus sind zwei Entscheidungen. Das Perfektiv hat kein Präsens. Eine perfektive Form, die wie ein Präsens aussieht, ist Futur. Deshalb heißt **я прочитаю** nicht „ich lese gerade“.

| Zeit | Imperfektiv | Perfektiv |
|---|---|---|
| Jetzt, oder eine Gewohnheit | **я читаю**, **я делаю**, **я пишу** | kein Präsens |
| Vergangenheit: Verlauf, Dauer, Wiederholung | **я читал**, **я делал**, **я писал** | — |
| Vergangenheit: Ergebnis | — | **я прочитал**, **я сделал**, **я написал** |
| Futur: Verlauf oder Plan | **я буду читать**, **я буду делать** | — |
| Futur: Ergebnis | — | **я прочитаю**, **я сделаю**, **я напишу** |

Die Vergangenheit richtet sich weiter nach dem Genus: **он прочитал**, **она прочитала**, **они прочитали**. Der Aspekt ersetzt diese Regel nicht. Das Futur hat weiter kein Genus: **она прочитает**, **она будет читать**.

**Regel:** Fragen Sie, wovon der Satz handelt, bevor Sie das Verb wählen.

| Der Satz antwortet auf | Aspekt | Beispiel |
|---|---|---|
| **Как долго?** **Сколько времени?** | imperfektiv | **Вчера я читал книгу два часа.** |
| **Каждый день**, eine Gewohnheit | imperfektiv | **Я каждый день делаю домашнее задание.** |
| Was war das Ergebnis? Ist es fertig? | perfektiv | **Вчера я прочитал книгу.** |
| Eine abgeschlossene Übung | perfektiv | **Я сделал упражнение.** |

Eine Gewohnheit nimmt nicht das Perfektiv. **Каждый день я прочитал** ist nicht der A2-Satz. Nehmen Sie **читаю** oder **буду читать**.

**Буду** nimmt nur einen imperfektiven Infinitiv. **Я буду прочитать** und **Я буду сделать** sind keine Futurformen.

**Regel:** Mit **не** gilt auf A2 gewöhnlich dieser Kontrast.

| Satz | Gewöhnliche Bedeutung |
|---|---|
| **Я не читал этот текст.** | Ich habe ihn nicht gelesen. Die Tätigkeit hat nicht stattgefunden. |
| **Я не прочитал этот текст.** | Ich habe ihn nicht zu Ende gelesen. Das Ergebnis fehlt. |

Beide Sätze sind grammatisch. Der Aspekt verändert die Geschichte.

Eine kurze Vergangenheit kann beide Aspekte benutzen, der Reihe nach. Der imperfektive Aspekt ist der Hintergrund. Der perfektive ist das Ereignis, das abgeschlossen wird.

- **Вчера я делал домашнее задание два часа и сделал все упражнения.**
- **Она писала сочинение весь вечер и написала его.**

### So verwendet man es
Wenn Sie von gestern erzählen, entscheiden Sie bei jedem Verb: vergehende Zeit oder Ergebnis. **Два часа**, **весь вечер** und **каждый день** zeigen auf den imperfektiven Aspekt. Ein fertiger Text, eine fertige Übung oder „und dann war es getan“ zeigen auf den perfektiven.

Behalten Sie die drei Futursätze aus dem vorigen Thema und benennen Sie sie als Aspekt:

- **Завтра я буду читать текст.** Verlauf.
- **Завтра я прочитаю текст.** Ergebnis.
- **Я читаю по-русски каждый день.** Gewohnheit, imperfektives Präsens.

**Напишу** behält den Konsonanten von **пишу**: **напишу**, nicht **написаю**. **Сделаю** ist neben **делать** regelmäßig: **сделаю, сделаешь, сделает**.

### Beispiele
- **Вчера я читал книгу два часа.** — Gestern habe ich zwei Stunden in dem Buch gelesen. Verlauf.
- **Вчера я прочитал книгу.** — Gestern habe ich das Buch zu Ende gelesen.
- **Я каждый день делаю домашнее задание.** — Ich mache jeden Tag die Hausaufgaben.
- **Вчера я сделал упражнение.** — Gestern habe ich die Übung gemacht. Sie ist fertig.
- **Она писала сочинение весь вечер.** — Sie hat den ganzen Abend an dem Aufsatz geschrieben.
- **Она написала сочинение.** — Sie hat den Aufsatz geschrieben. Ergebnis.
- **Что он сказал?** — Was hat er gesagt?
- **Я не читал этот текст.** — Ich habe diesen Text nicht gelesen.
- **Я не прочитал этот текст.** — Ich habe diesen Text nicht zu Ende gelesen.
- **Завтра я буду писать тест.** — Morgen werde ich den Test schreiben. Verlauf.
- **Завтра я напишу сочинение.** — Morgen werde ich den Aufsatz zu Ende schreiben.

### Typische Fehler
- Den Aspekt wie ein Tempus behandeln. **Прочитал** ist Vergangenheit und perfektiv. **Прочитаю** ist Futur und perfektiv. Das Präsensfeld eines perfektiven Verbs ist leer.
- **Каждый день я сделал упражнение** für eine Gewohnheit. Eine wiederholte Handlung ist imperfektiv: **каждый день я делаю**.
- **Я буду написать** und **Я буду прочитать**. **Буду** nimmt **писать** und **читать**.
- **Прочитал** als Antwort auf „zwei Stunden lang“. Dauer heißt **читал**.
- Ein Präfix erfinden. Lernen Sie **читать / прочитать** als Paar. Bilden Sie kein neues Perfektiv aus einem Verb, das Sie nur einmal gesehen haben.
- **Он сказал** durch ein präfigiertes **говорить** ersetzen. „Er sagte“ heißt **Он сказал.**
- Das Genus in der Vergangenheit vergessen: **она прочитал**. Die feminine Vergangenheit heißt **прочитала**, **сделала**, **написала**, **сказала**.

### Wenn Ihre Sprache Deutsch ist
Perfekt und Präteritum sind Tempora, kein Aspekt. *Ich las* und *ich habe gelesen* können sowohl **читал** als auch **прочитал** übersetzen. Russisch stellt eine zweite Frage: Verlauf oder Ergebnis. Dauer und Wiederholung nehmen den imperfektiven Aspekt. Ein Ergebnis nimmt den perfektiven. *Werden* + Infinitiv deckt nur **буду** plus imperfektiven Infinitiv. *Ich habe es nicht gelesen* ist gewöhnlich **я не читал**. *Ich habe es nicht zu Ende gelesen* ist **я не прочитал**.

> 💡 Fragen Sie **как долго?** Wenn Sie mit einer Dauer oder mit „jeden Tag“ antworten können, nehmen Sie den imperfektiven Aspekt. Wenn Sie mit „fertig“ antworten können, nehmen Sie den perfektiven.

### Prüfen Sie sich
1. Gestern habe ich zwei Stunden an dem Buch gelesen. Ergänzen Sie **Вчера я ___ книгу два часа.**
2. Gestern habe ich das Buch zu Ende gelesen. Ergänzen Sie **Вчера я ___ книгу.**
3. Welcher Satz ist die Gewohnheit: **Я каждый день делаю домашнее задание** oder **Я каждый день сделал домашнее задание**?

**Antworten:** 1) **читал.** 2) **прочитал.** 3) **Я каждый день делаю домашнее задание.**`,
  },

  "ru-a2-motion-basic": {
    en: `## Basic verbs of motion

> **In this topic:** **идти / ходить** on foot, **ехать / ездить** by transport, and one direction against a habit or a round trip. No prefixes yet.

### Why it matters
English *go* covers four Russian verbs. **Иду** and **хожу** are both “go on foot”. **Еду** and **езжу** are both “go by transport”. The wrong member of the pair is still a real verb, so **Сейчас я хожу в магазин** looks possible and means the wrong thing. For “I am on my way now”, the verb is **иду** or **еду**.

This topic stays with the four unprefixed verbs. **Прийти**, **пойти**, **приехать**, and **уехать** add a prefix and a result. That system is the next motion topic. You already met **приедет** as a ready future form. Do not build new prefixed verbs from these four.

### The rule

**Rule:** Ask two questions, in this order.

1. On foot, or by bus, metro, or car?
2. One direction right now, or a habit, or a trip there and back?

| | On foot | By transport |
|---|---|---|
| One direction, including now | **идти** | **ехать** |
| Habit, or there and back | **ходить** | **ездить** |

**Rule:** All four presents are irregular. Learn the rows. **Идти** has **ё** in four forms. **Ехать** has **е**, not **ё**.

| Person | **идти** | **ходить** |
|---|---|---|
| **я** | **иду** | **хожу** |
| **ты** | **идёшь** | **ходишь** |
| **он / она** | **идёт** | **ходит** |
| **мы** | **идём** | **ходим** |
| **вы** | **идёте** | **ходите** |
| **они** | **идут** | **ходят** |

| Person | **ехать** | **ездить** |
|---|---|---|
| **я** | **еду** | **езжу** |
| **ты** | **едешь** | **ездишь** |
| **он / она** | **едет** | **ездит** |
| **мы** | **едем** | **ездим** |
| **вы** | **едете** | **ездите** |
| **они** | **едут** | **ездят** |

**Ходить** and **ездить** are conjugation II. The **я** and **они** forms change the consonant: **хожу / ходят**, **езжу / ездят**. There is no **ходю** and no **ездию**.

The present has no gender: **она идёт**, **он идёт**. The past uses the past endings you already know.

| Infinitive | Masculine | Feminine | Plural |
|---|---|---|---|
| **идти** | **шёл** | **шла** | **шли** |
| **ходить** | **ходил** | **ходила** | **ходили** |
| **ехать** | **ехал** | **ехала** | **ехали** |
| **ездить** | **ездил** | **ездила** | **ездили** |

**Rule:** The past of the “one direction” verb describes the path, while you were on the way. The past of the “habit / round trip” verb names the outing: you went and the trip is a completed there-and-back.

| Sentence | What it answers |
|---|---|
| **Я шёл в университет.** | I was walking there, one direction. |
| **Вчера я ходил в музей.** | I went to the museum. The outing happened. Masculine. |
| **Вчера я ходила в музей.** | The same outing, said by a woman. |
| **Мы ехали в центр.** | We were riding toward the center. |
| **Они часто ездили в центр.** | They often used to go to the center. |

**Rule:** The destination answers **куда?** and takes the accusative direction you already use with **в** and **на**. The place where you already are answers **где?** and stays prepositional. These motion verbs pair with **куда?**, not with **где?**.

| Question | Answer |
|---|---|
| **Куда ты идёшь?** | **В университет.** |
| **Где ты?** | **В университете.** |
| **Куда вы едете?** | **В центр.** |

Transport is **на** plus the prepositional: **на автобусе**, **на машине**. **Метро** does not change, so the verb does the work: **еду на метро**. On foot, add **пешком** to the walking verb, or use the walking verb alone.

| You mean | Form |
|---|---|
| Riding the bus | **Мы едем на автобусе.** |
| Walking to the bus, the bus is the destination | **Я иду на автобус.** |
| On foot | **Я иду пешком.** **Я хожу пешком.** |

A scheduled one-way trip uses the present of **идти** or **ехать**: **Завтра я иду в библиотеку.** A future habit uses **буду** plus **ходить** or **ездить**: **Летом я буду ходить в парк.** **Буду идти** is not the ordinary way to state a plan.

### How to use it
Picture the trip before you choose. If you are on the way now, or the sentence draws one arrow, use **иду** or **еду**. If the sentence says **каждый день**, **часто**, or “I went and came back”, use **хожу** or **езжу**, and in the past **ходил** or **ездил**.

Then choose the feet or the wheels. A bus, the metro, or a car forces **ехать / ездить**, even if you walk from the stop afterwards.

Ask a classmate **Куда ты идёшь?** Ask about a habit with the matching verb: **Ты ходишь пешком?** or **Ты ездишь на метро?**

### Examples
- **Сейчас я иду в университет.** — I am walking to the university now.
- **Я хожу в университет каждый день.** — I go to the university every day, on foot.
- **Я хожу в университет пешком.** — I walk to the university.
- **Мы едем в центр на автобусе.** — We are going to the center by bus.
- **Я еду на метро.** — I am going by metro.
- **Они часто ездят в центр.** — They often go to the center.
- **Вчера я ходил в музей.** — I (masculine) went to the museum.
- **Вчера я ходила в музей.** — I (feminine) went to the museum.
- **Я шёл в университет и слушал музыку.** — I was walking to the university and listening to music.
- **Завтра я иду в библиотеку.** — I am going to the library tomorrow. A scheduled one-way trip.
- **Куда вы едете? — В центр.** — Where are you going? — To the center.
- **Я не езжу в университет на машине.** — I do not go to the university by car.

### Typical mistakes
- **Сейчас я хожу в магазин** for “I am going to the shop now”. Now, one direction, on foot: **Сейчас я иду в магазин.**
- **Я иду в университет каждый день.** A habit on foot is **хожу**.
- **Я иду на автобусе** for a ride on the bus. The ride is **еду на автобусе**. **Иду на автобус** means you are walking to the bus.
- **Сейчас я езжу в центр** for “I am on the way”. On the way by transport is **еду**.
- **Ходю**, **ездию**, **едёшь**. The forms are **хожу**, **езжу**, **едешь**.
- **Шол** or **идл**. The masculine past of **идти** is **шёл**.
- **Я иду в университете**. **В университете** answers **где?** Direction is **в университет**.
- **Завтра я буду идти в библиотеку** as an ordinary plan. Say **Завтра я иду в библиотеку.**

### If your language is English
*Go* and *come* hide the two Russian questions. *Walk* against *ride* is the first split: **идти / ходить** against **ехать / ездить**. *I am going there now* against *I go there every day* is the second split, and English can keep *go* for both. Russian changes the verb: **сейчас иду**, **каждый день хожу**. *By bus* forces the transport pair even when part of the journey is on foot. *I am going by bus* is **я еду на автобусе**, not **я иду**.

> 💡 One arrow on the map, or “now”: **иду / еду**. Every day, or there and back: **хожу / езжу**. Feet, then wheels.

### Check yourself
1. I am walking to the university now. Complete **Сейчас я ___ в университет.**
2. I go to the university every day, on foot. Complete **Я ___ в университет каждый день.**
3. We are going to the center by bus. Complete **Мы ___ в центр на автобусе.**

**Answers:** 1) **иду.** 2) **хожу.** 3) **едем.**`,

    es: `## Verbos de movimiento: la base

> **En este tema:** **идти / ходить** a pie, **ехать / ездить** en transporte, y una dirección frente a un hábito o un viaje de ida y vuelta. Todavía sin prefijos.

### Por qué importa
*Ir* cubre cuatro verbos rusos. **Иду** y **хожу** son los dos “ir a pie”. **Еду** y **езжу** son los dos “ir en transporte”. El miembro equivocado de la pareja sigue siendo un verbo real, así que **Сейчас я хожу в магазин** parece posible y dice otra cosa. Para “ahora voy de camino”, el verbo es **иду** o **еду**.

Este tema se queda en los cuatro verbos sin prefijo. **Прийти**, **пойти**, **приехать** y **уехать** añaden un prefijo y un resultado. Ese sistema es el tema siguiente del movimiento. **Приедет** ya apareció como forma hecha de futuro. No fabriques verbos nuevos con prefijo a partir de estos cuatro.

### La regla

**Regla:** Haz dos preguntas, en este orden.

1. ¿A pie, o en autobús, metro o coche?
2. ¿Una dirección ahora mismo, o un hábito, o un viaje de ida y vuelta?

| | A pie | En transporte |
|---|---|---|
| Una dirección, también ahora | **идти** | **ехать** |
| Hábito, o ida y vuelta | **ходить** | **ездить** |

**Regla:** Los cuatro presentes son irregulares. Aprende las filas. **Идти** lleva **ё** en cuatro formas. **Ехать** lleva **е**, no **ё**.

| Persona | **идти** | **ходить** |
|---|---|---|
| **я** | **иду** | **хожу** |
| **ты** | **идёшь** | **ходишь** |
| **он / она** | **идёт** | **ходит** |
| **мы** | **идём** | **ходим** |
| **вы** | **идёте** | **ходите** |
| **они** | **идут** | **ходят** |

| Persona | **ехать** | **ездить** |
|---|---|---|
| **я** | **еду** | **езжу** |
| **ты** | **едешь** | **ездишь** |
| **он / она** | **едет** | **ездит** |
| **мы** | **едем** | **ездим** |
| **вы** | **едете** | **ездите** |
| **они** | **едут** | **ездят** |

**Ходить** y **ездить** son de la conjugación II. Las formas de **я** y de **они** cambian la consonante: **хожу / ходят**, **езжу / ездят**. No existen **ходю** ni **ездию**.

El presente no tiene género: **она идёт**, **он идёт**. El pasado usa las terminaciones de pasado que ya conoces.

| Infinitivo | Masculino | Femenino | Plural |
|---|---|---|---|
| **идти** | **шёл** | **шла** | **шли** |
| **ходить** | **ходил** | **ходила** | **ходили** |
| **ехать** | **ехал** | **ехала** | **ехали** |
| **ездить** | **ездил** | **ездила** | **ездили** |

**Regla:** El pasado del verbo de “una dirección” describe el camino, mientras ibas. El pasado del verbo de “hábito / ida y vuelta” nombra la salida: fuiste y el viaje es una ida y vuelta cerrada.

| Frase | A qué responde |
|---|---|
| **Я шёл в университет.** | Iba andando hacia allí, una dirección. |
| **Вчера я ходил в музей.** | Fui al museo. La salida ocurrió. Masculino. |
| **Вчера я ходила в музей.** | La misma salida, dicha por una mujer. |
| **Мы ехали в центр.** | Íbamos hacia el centro, en transporte. |
| **Они часто ездили в центр.** | Iban a menudo al centro. |

**Regla:** El destino responde a **куда?** y lleva el acusativo de dirección que ya usas con **в** y **на**. El lugar donde ya estás responde a **где?** y sigue en preposicional. Estos verbos de movimiento van con **куда?**, no con **где?**.

| Pregunta | Respuesta |
|---|---|
| **Куда ты идёшь?** | **В университет.** |
| **Где ты?** | **В университете.** |
| **Куда вы едете?** | **В центр.** |

El transporte es **на** más preposicional: **на автобусе**, **на машине**. **Метро** no cambia, así que el verbo hace el trabajo: **еду на метро**. A pie, añade **пешком** al verbo de caminar, o usa el verbo de caminar solo.

| Quieres decir | Forma |
|---|---|
| Ir en el autobús | **Мы едем на автобусе.** |
| Caminar hasta el autobús; el autobús es el destino | **Я иду на автобус.** |
| A pie | **Я иду пешком.** **Я хожу пешком.** |

Un viaje previsto en una sola dirección usa el presente de **идти** o de **ехать**: **Завтра я иду в библиотеку.** Un hábito futuro usa **буду** más **ходить** o **ездить**: **Летом я буду ходить в парк.** **Буду идти** no es la forma normal de enunciar un plan.

### Cómo se usa
Imagina el trayecto antes de elegir. Si vas de camino ahora, o la frase dibuja una sola flecha, usa **иду** o **еду**. Si la frase dice **каждый день**, **часто**, o “fui y volví”, usa **хожу** o **езжу**, y en pasado **ходил** o **ездил**.

Después elige los pies o las ruedas. Un autobús, el metro o un coche obligan a **ехать / ездить**, aunque luego camines desde la parada.

Pregunta a un compañero **Куда ты идёшь?** Pregunta por un hábito con el verbo que corresponde: **Ты ходишь пешком?** o **Ты ездишь на метро?**

### Ejemplos
- **Сейчас я иду в университет.** — Ahora voy andando a la universidad.
- **Я хожу в университет каждый день.** — Voy a la universidad cada día, a pie.
- **Я хожу в университет пешком.** — Voy andando a la universidad.
- **Мы едем в центр на автобусе.** — Vamos al centro en autobús.
- **Я еду на метро.** — Voy en metro.
- **Они часто ездят в центр.** — Van a menudo al centro.
- **Вчера я ходил в музей.** — Ayer fui (hombre) al museo.
- **Вчера я ходила в музей.** — Ayer fui (mujer) al museo.
- **Я шёл в университет и слушал музыку.** — Iba andando a la universidad y escuchaba música.
- **Завтра я иду в библиотеку.** — Mañana voy a la biblioteca. Un trayecto previsto en una dirección.
- **Куда вы едете? — В центр.** — ¿Adónde va usted? — Al centro.
- **Я не езжу в университет на машине.** — No voy a la universidad en coche.

### Errores típicos
- **Сейчас я хожу в магазин** para “ahora voy a la tienda”. Ahora, una dirección, a pie: **Сейчас я иду в магазин.**
- **Я иду в университет каждый день.** Un hábito a pie es **хожу**.
- **Я иду на автобусе** para un trayecto en autobús. El trayecto es **еду на автобусе**. **Иду на автобус** significa que caminas hasta el autobús.
- **Сейчас я езжу в центр** para “voy de camino”. De camino en transporte es **еду**.
- **Ходю**, **ездию**, **едёшь**. Las formas son **хожу**, **езжу**, **едешь**.
- **Шол** o **идл**. El pasado masculino de **идти** es **шёл**.
- **Я иду в университете**. **В университете** responde a **где?** La dirección es **в университет**.
- **Завтра я буду идти в библиотеку** como plan normal. Di **Завтра я иду в библиотеку.**

### Si tu lengua es el español
*Ir* y *venir* esconden las dos preguntas rusas. *Voy a la universidad ahora* puede ser **иду** o **еду**. *Voy cada día* es **хожу** o **езжу**. El español puede conservar *voy* en los dos casos. El ruso cambia de verbo. *En autobús* elige **ехать / ездить**, no **идти**. *A pie* es la pareja **идти / ходить**, o **пешком**. *Voy en autobús* es **еду на автобусе**, no **иду на автобусе**.

> 💡 Una flecha en el mapa, o “ahora”: **иду / еду**. Cada día, o ida y vuelta: **хожу / езжу**. Primero los pies, después las ruedas.

### Comprueba
1. Ahora voy andando a la universidad. Completa **Сейчас я ___ в университет.**
2. Voy a la universidad cada día, a pie. Completa **Я ___ в университет каждый день.**
3. Vamos al centro en autobús. Completa **Мы ___ в центр на автобусе.**

**Respuestas:** 1) **иду.** 2) **хожу.** 3) **едем.**`,

    de: `## Bewegungsverben: die Basis

> **In diesem Thema:** **идти / ходить** zu Fuß, **ехать / ездить** mit einem Verkehrsmittel, und eine Richtung gegen eine Gewohnheit oder einen Hin-und-zurück-Weg. Noch ohne Präfixe.

### Warum das wichtig ist
Deutsch *gehen* und *fahren* treffen die erste russische Frage. Die zweite trifft Deutsch nicht. **Иду** und **хожу** heißen beide „zu Fuß gehen“. **Еду** und **езжу** heißen beide „fahren“. Das falsche Verb des Paares ist immer noch ein echtes Verb. **Сейчас я хожу в магазин** sieht möglich aus und bedeutet etwas anderes. Für „ich bin jetzt unterwegs“ heißt das Verb **иду** oder **еду**.

Dieses Thema bleibt bei den vier Verben ohne Präfix. **Прийти**, **пойти**, **приехать** und **уехать** setzen ein Präfix und ein Ergebnis dazu. Dieses System ist das nächste Thema zu den Bewegungsverben. **Приедет** ist Ihnen schon als fertige Futurform begegnet. Bilden Sie aus diesen vier Verben keine neuen präfigierten Verben.

### Die Regel

**Regel:** Stellen Sie zwei Fragen, in dieser Reihenfolge.

1. Zu Fuß, oder mit Bus, Metro oder Auto?
2. Eine Richtung genau jetzt, oder eine Gewohnheit, oder ein Weg hin und zurück?

| | Zu Fuß | Mit einem Verkehrsmittel |
|---|---|---|
| Eine Richtung, auch jetzt | **идти** | **ехать** |
| Gewohnheit, oder hin und zurück | **ходить** | **ездить** |

**Regel:** Alle vier Präsensformen sind unregelmäßig. Lernen Sie die Zeilen. **Идти** hat in vier Formen **ё**. **Ехать** hat **е**, nicht **ё**.

| Person | **идти** | **ходить** |
|---|---|---|
| **я** | **иду** | **хожу** |
| **ты** | **идёшь** | **ходишь** |
| **он / она** | **идёт** | **ходит** |
| **мы** | **идём** | **ходим** |
| **вы** | **идёте** | **ходите** |
| **они** | **идут** | **ходят** |

| Person | **ехать** | **ездить** |
|---|---|---|
| **я** | **еду** | **езжу** |
| **ты** | **едешь** | **ездишь** |
| **он / она** | **едет** | **ездит** |
| **мы** | **едем** | **ездим** |
| **вы** | **едете** | **ездите** |
| **они** | **едут** | **ездят** |

**Ходить** und **ездить** gehören zur Konjugation II. Die Formen von **я** und **они** verändern den Konsonanten: **хожу / ходят**, **езжу / ездят**. Es gibt kein **ходю** und kein **ездию**.

Das Präsens hat kein Genus: **она идёт**, **он идёт**. Die Vergangenheit benutzt die Vergangenheitsendungen, die Sie schon kennen.

| Infinitiv | Maskulinum | Femininum | Plural |
|---|---|---|---|
| **идти** | **шёл** | **шла** | **шли** |
| **ходить** | **ходил** | **ходила** | **ходили** |
| **ехать** | **ехал** | **ехала** | **ехали** |
| **ездить** | **ездил** | **ездила** | **ездили** |

**Regel:** Die Vergangenheit des Verbs für „eine Richtung“ beschreibt den Weg, während man unterwegs war. Die Vergangenheit des Verbs für „Gewohnheit / hin und zurück“ benennt den Ausflug: Man ist hingegangen, und der Weg ist ein abgeschlossenes Hin und Zurück.

| Satz | Worauf er antwortet |
|---|---|
| **Я шёл в университет.** | Ich bin dorthin gegangen, eine Richtung. |
| **Вчера я ходил в музей.** | Ich war im Museum. Der Ausflug hat stattgefunden. Maskulin. |
| **Вчера я ходила в музей.** | Derselbe Ausflug, von einer Frau gesagt. |
| **Мы ехали в центр.** | Wir sind in Richtung Zentrum gefahren. |
| **Они часто ездили в центр.** | Sie sind oft ins Zentrum gefahren. |

**Regel:** Das Ziel antwortet auf **куда?** und nimmt den Richtungskasus, den Sie mit **в** und **на** schon benutzen, den Akkusativ. Der Ort, an dem Sie schon sind, antwortet auf **где?** und bleibt im Präpositiv. Diese Bewegungsverben gehören zu **куда?**, nicht zu **где?**.

| Frage | Antwort |
|---|---|
| **Куда ты идёшь?** | **В университет.** |
| **Где ты?** | **В университете.** |
| **Куда вы едете?** | **В центр.** |

Ein Verkehrsmittel steht mit **на** plus Präpositiv: **на автобусе**, **на машине**. **Метро** verändert sich nicht, also leistet das Verb die Arbeit: **еду на метро**. Zu Fuß setzen Sie **пешком** zum Gehverb, oder Sie benutzen das Gehverb allein.

| Sie meinen | Form |
|---|---|
| Mit dem Bus fahren | **Мы едем на автобусе.** |
| Zum Bus gehen; der Bus ist das Ziel | **Я иду на автобус.** |
| Zu Fuß | **Я иду пешком.** **Я хожу пешком.** |

Ein geplanter Weg in eine Richtung benutzt das Präsens von **идти** oder **ехать**: **Завтра я иду в библиотеку.** Eine zukünftige Gewohnheit benutzt **буду** plus **ходить** oder **ездить**: **Летом я буду ходить в парк.** **Буду идти** ist nicht die gewöhnliche Form für einen Plan.

### So verwendet man es
Stellen Sie sich den Weg vor, bevor Sie wählen. Wenn Sie jetzt unterwegs sind, oder der Satz einen einzigen Pfeil zeichnet, nehmen Sie **иду** oder **еду**. Wenn der Satz **каждый день**, **часто** sagt, oder „ich war dort und wieder zurück“, nehmen Sie **хожу** oder **езжу**, und in der Vergangenheit **ходил** oder **ездил**.

Danach wählen Sie Füße oder Räder. Bus, Metro oder Auto erzwingen **ехать / ездить**, auch wenn Sie danach von der Haltestelle zu Fuß weitergehen.

Fragen Sie eine Kommilitonin oder einen Kommilitonen **Куда ты идёшь?** Fragen Sie nach einer Gewohnheit mit dem passenden Verb: **Ты ходишь пешком?** oder **Ты ездишь на метро?**

### Beispiele
- **Сейчас я иду в университет.** — Ich gehe jetzt zur Universität.
- **Я хожу в университет каждый день.** — Ich gehe jeden Tag zur Universität, zu Fuß.
- **Я хожу в университет пешком.** — Ich gehe zu Fuß zur Universität.
- **Мы едем в центр на автобусе.** — Wir fahren mit dem Bus ins Zentrum.
- **Я еду на метро.** — Ich fahre mit der Metro.
- **Они часто ездят в центр.** — Sie fahren oft ins Zentrum.
- **Вчера я ходил в музей.** — Ich (maskulin) war gestern im Museum.
- **Вчера я ходила в музей.** — Ich (feminin) war gestern im Museum.
- **Я шёл в университет и слушал музыку.** — Ich ging zur Universität und hörte Musik.
- **Завтра я иду в библиотеку.** — Ich gehe morgen in die Bibliothek. Ein geplanter Weg in eine Richtung.
- **Куда вы едете? — В центр.** — Wohin fahren Sie? — Ins Zentrum.
- **Я не езжу в университет на машине.** — Ich fahre nicht mit dem Auto zur Universität.

### Typische Fehler
- **Сейчас я хожу в магазин** für „ich gehe jetzt in den Laden“. Jetzt, eine Richtung, zu Fuß: **Сейчас я иду в магазин.**
- **Я иду в университет каждый день.** Eine Gewohnheit zu Fuß heißt **хожу**.
- **Я иду на автобусе** für eine Fahrt mit dem Bus. Die Fahrt heißt **еду на автобусе**. **Иду на автобус** heißt, dass Sie zum Bus gehen.
- **Сейчас я езжу в центр** für „ich bin unterwegs“. Unterwegs mit einem Verkehrsmittel heißt **еду**.
- **Ходю**, **ездию**, **едёшь**. Die Formen heißen **хожу**, **езжу**, **едешь**.
- **Шол** oder **идл**. Die maskuline Vergangenheit von **идти** ist **шёл**.
- **Я иду в университете**. **В университете** antwortet auf **где?** Die Richtung heißt **в университет**.
- **Завтра я буду идти в библиотеку** als gewöhnlichen Plan. Sagen Sie **Завтра я иду в библиотеку.**

### Wenn Ihre Sprache Deutsch ist
*Gehen* und *fahren* treffen die erste Trennung gut: zu Fuß **идти / ходить**, mit einem Verkehrsmittel **ехать / ездить**. *Ich gehe jetzt* und *ich gehe jeden Tag* können im Deutschen beide *gehen* benutzen. Russisch muss das Verb wechseln: **сейчас иду**, **каждый день хожу**. Dasselbe gilt für *fahren*: **сейчас еду**, **каждый день езжу**. *Ich fahre mit dem Bus* ist **я еду на автобусе**, nicht **я иду на автобусе**.

> 💡 Ein Pfeil auf der Karte, oder „jetzt“: **иду / еду**. Jeden Tag, oder hin und zurück: **хожу / езжу**. Zuerst die Füße, dann die Räder.

### Prüfen Sie sich
1. Ich gehe jetzt zur Universität. Ergänzen Sie **Сейчас я ___ в университет.**
2. Ich gehe jeden Tag zu Fuß zur Universität. Ergänzen Sie **Я ___ в университет каждый день.**
3. Wir fahren mit dem Bus ins Zentrum. Ergänzen Sie **Мы ___ в центр на автобусе.**

**Antworten:** 1) **иду.** 2) **хожу.** 3) **едем.**`,
  },

  "ru-b1-cases-system": {
    en: `## The six-case system

> **In this topic:** the six cases as one system, endings for the noun types you already know, personal pronouns, and the case a verb or a preposition requires.

### Why it matters
Each case has already done one job on its own: the accusative as an object, the prepositional as a place, the genitive after **нет**, the dative for an addressee, the instrumental with a profession. In a real sentence they arrive together. **Преподаватель объяснил правило студентам в аудитории** is one line: a subject, an object, an addressee, and a place. The ending says which is which.

A verb or a preposition chooses the case. **Помогать** and **видеть** both deal with a person, and the forms differ: **помогаю студенту**, **вижу студента**. **О** and **по** can both be translated “about”, and they take different cases: **говорим о языке**, **экзамен по языку**. The dictionary form after a preposition turns the sentence into a word list.

### The rule

**Rule:** Russian has six cases. Ask the question, then take the ending from the noun type.

| Case | Questions | Main job |
|---|---|---|
| Nominative | **кто? что?** | subject; the dictionary form |
| Genitive | **кого? чего?** | **нет**, quantity, **у** + person, “of” |
| Dative | **кому? чему?** | addressee; the person with **нравиться** |
| Accusative | **кого? что?** | direct object; destination after **в / на** |
| Instrumental | **кем? чем?** | “with”, a profession, some verbs |
| Prepositional | **о ком? о чём? где?** | place after **в / на**; topic after **о** |

**Rule:** These singular endings cover hard-stem nouns. A masculine person copies the genitive in the accusative. A masculine thing copies the nominative.

| Case | **студент** | **ключ** | **книга** | **окно** |
|---|---|---|---|---|
| Nominative | **студент** | **ключ** | **книга** | **окно** |
| Genitive | **студента** | **ключа** | **книги** | **окна** |
| Dative | **студенту** | **ключу** | **книге** | **окну** |
| Accusative | **студента** | **ключ** | **книгу** | **окно** |
| Instrumental | **студентом** | **ключом** | **книгой** | **окном** |
| Prepositional | **о студенте** | **о ключе** | **о книге** | **об окне** |

**Rule:** A masculine noun in **-ь** still takes **-е** in the prepositional. Nouns in **-ия** and **-ие** take **-ии** there, in the same spelling as several other cases. The question and the preposition tell those spellings apart.

| Case | **словарь** | **аудитория** | **занятие** |
|---|---|---|---|
| Nominative | **словарь** | **аудитория** | **занятие** |
| Genitive | **словаря** | **аудитории** | **занятия** |
| Dative | **словарю** | **аудитории** | **занятию** |
| Accusative | **словарь** | **аудиторию** | **занятие** |
| Instrumental | **словарём** | **аудиторией** | **занятием** |
| Prepositional | **о словаре** | **в аудитории** | **о занятии** |

**Нет аудитории** is genitive, **к аудитории** is dative, **в аудитории** is prepositional. **В аудиторие** is not a form.

**Rule:** The plural uses the same questions. People take the genitive plural as the accusative plural. Things take the nominative plural as the accusative plural. The genitive plural is the form you already use after **пять**: **студентов**, **книг**, **окон**.

| Case | **студенты** | **книги** |
|---|---|---|
| Nominative | **студенты** | **книги** |
| Genitive | **студентов** | **книг** |
| Dative | **студентам** | **книгам** |
| Accusative | **студентов** | **книги** |
| Instrumental | **студентами** | **книгами** |
| Prepositional | **о студентах** | **о книгах** |

**Rule:** **В** and **на** take the accusative for a destination (**куда?**) and the prepositional for a place (**где?**).

| | Destination, **куда?** | Place, **где?** |
|---|---|---|
| **в** | **в библиотеку**, **в аудиторию** | **в библиотеке**, **в аудитории** |
| **на** | **на лекцию**, **на стол** | **на лекции**, **на столе** |

**Rule:** **О**, **об**, and **обо** mean “about” and take the prepositional.

| Form | Where | Example |
|---|---|---|
| **о** | before a consonant | **о курсе**, **о книге**, **о языке** |
| **об** | before a vowel | **об экзамене**, **об окне**, **об университете** |
| **обо** | before **мне** | **обо мне** |

**По** plus the dative is a course label. **О** plus the prepositional is the topic of a conversation. The adjective stands in the same case as the noun.

| Pattern | Case | Example |
|---|---|---|
| talking about | **о** + prepositional | **Мы говорим о русском языке.** |
| a course | **по** + dative | **Экзамен по русскому языку.** |
| studying the language | instrumental | **Я занимаюсь русским языком.** |

| Case | **язык** | **русский** |
|---|---|---|
| Prepositional | **о языке** | **о русском** |
| Dative | **по языку** | **по русскому** |
| Instrumental | **языком** | **русским** |

**Rule:** Learn the case with the verb or the preposition. An English preposition does not choose it.

| Pattern | Case | Example |
|---|---|---|
| **нет, у, для, без, после, от, из** | genitive | **У меня нет ключа.** **После лекции.** **Письмо от преподавателя.** |
| **помогать, звонить** | dative | **Помогите студенту.** **Я позвонил преподавателю.** |
| **нравиться** | dative person, nominative thing | **Мне нравится лекция.** **Мне нравятся лекции.** |
| **к**, **по** | dative | **Я готовлюсь к экзамену.** **Иду по улице.** |
| **читать, видеть, знать** | accusative | **Я читаю статью.** **Я вижу студента.** |
| **ждать** | **кого** for a person, **чего** for a result or a thing | **Жду преподавателя.** **Жду ответа.** |
| **бояться** | genitive | **Не бойтесь ошибок.** |
| **интересоваться, заниматься, пользоваться** | instrumental | **Я интересуюсь историей.** **Мы пользуемся словарём.** |
| **работать** as a profession | instrumental | **Она работает преподавателем.** |
| a tool | instrumental | **Пишу ручкой.** |
| **с** “together with” | instrumental | **Она ушла с другом.** |
| **с** “off an event” | genitive | **Она ушла с занятия.** |
| a vehicle | **на** + prepositional | **Еду на автобусе.** |
| **говорить о, думать о** | prepositional | **Мы говорим об экзамене.** |

**Нет статьи** is absence, so the noun is genitive. **Я не читал статью** is an ordinary verb with **не**. That object stays accusative.

The thing that pleases is the subject. The verb agrees with it, and the person is dative. **Мне нравится лекция.** **Мне нравятся лекции.**

**Rule:** Pronouns have their own table. After any preposition, **его / её / их** add **н**: **у неё**, **к нему**, **с ними**, **за него**, **про неё**. With no preposition the **н** is absent: **вижу его**, **вижу её**.

| | Genitive | Dative | Accusative | Instrumental | Prepositional |
|---|---|---|---|---|---|
| **я** | **меня** | **мне** | **меня** | **мной** | **обо мне** |
| **ты** | **тебя** | **тебе** | **тебя** | **тобой** | **о тебе** |
| **он** | **него** after a preposition; **его** alone | **ему** | **его** | **им**; **с ним** | **о нём** |
| **она** | **неё** after a preposition; **её** alone | **ей** | **её** | **ей**; **с ней** | **о ней** |
| **мы** | **нас** | **нам** | **нас** | **нами** | **о нас** |
| **вы** | **вас** | **вам** | **вас** | **вами** | **о вас** |
| **они** | **них** after a preposition; **их** alone | **им** | **их** | **ими**; **с ними** | **о них** |

**Им** is two forms. **Я им позвонил** means “I called them” (dative of **они**). **Он доволен им** means “He is pleased with him” (instrumental of **он**). “With him” after **с** is **с ним**.

### How to use it
Ask the question before you choose the column.

1. Who acts? Nominative.
2. Does this verb or preposition have a pattern in the table?
3. Is it a destination (**куда?**) or a place (**где?**)?
4. Copy the ending from a noun of the same type.

Name the cases in a full line: **Преподаватель** (nominative) **объяснил правило** (accusative) **студентам** (dative) **в аудитории** (prepositional).

Keep the two “history” sentences apart. **Мне нравится история.** **Я интересуюсь историей.**

### Examples
- **У студента нет словаря.** — The student has no dictionary.
- **Я позвонил преподавателю и спросил об экзамене.** — I called the lecturer and asked about the exam.
- **Мы ждём ответа.** — We are waiting for an answer.
- **Не бойтесь ошибок.** — Do not be afraid of mistakes.
- **Мне нравится этот курс, и я интересуюсь историей.** — I like this course, and I am interested in history.
- **Студенты идут в аудиторию. Сейчас они в аудитории.** — The students are going into the room. Now they are in the room.
- **Она ушла с занятия с другом.** — She left the class with a friend.
- **Мы говорим о русском языке. Экзамен по русскому языку в пятницу.** — We are talking about Russian. The Russian exam is on Friday.
- **Я занимаюсь русским языком в библиотеке.** — I study Russian in the library.
- **Письмо от неё на столе.** — The letter from her is on the table.

### Typical mistakes
- The dictionary form after a preposition: **в библиотека**, **с друг**. Use **в библиотеку** or **в библиотеке**, and **с другом**.
- **Помогаю студента**. **Помогать** takes the dative: **помогаю студенту**.
- **Интересуюсь историю**. The pattern is instrumental: **интересуюсь историей**.
- A place ending for a destination: **иду в аудитории**. The destination is **в аудиторию**.
- **О экзамене**. Before a vowel the form is **об экзамене**.
- **Я нравлюсь история**. The person is dative, and the thing is nominative: **Мне нравится история**.
- **Жду ответ** in the nominative. A result is genitive: **жду ответа**. A person is **кого**: **жду преподавателя**.
- **У её**. After a preposition the form is **у неё**.
- **Еду автобусом** as your working pattern for transport. Say **еду на автобусе**.

### If your language is English
English marks case on a few pronouns (*I/me*, *who/whom*) and leaves nouns alone. Russian puts the job on the ending, so **студенту** and **студента** are different pieces of information. *I help the student* and *I see the student* share one noun phrase in English. Russian splits them: **помогаю студенту**, **вижу студента**.

*In the library* is a place and *into the library* is a destination. Russian keeps the preposition **в** and changes the case: **в библиотеке**, **в библиотеку**. *About the language* and *an exam in the language* also split: **о русском языке**, **по русскому языку**. *I like history* and *I am interested in history* are two patterns: **Мне нравится история**, **Я интересуюсь историей**. Learn the case with the verb, then the ending.

> 💡 Take the case from the verb or the preposition, then read the ending off a noun of the same type. **Помогать студенту**, **интересоваться историей**, **нет ключа**, **об экзамене**. **В аудиторию** is a destination. **В аудитории** is a place.

### Check yourself
1. “I am helping the student” and “I see the student”. Which forms of **студент**?
2. Which sentence puts them inside the room: **Мы идём в аудиторию** or **Мы сидим в аудитории**?
3. How do you say “We are talking about Russian” and “the Russian exam”?

**Answers:** 1) **помогаю студенту**, **вижу студента**. 2) **Мы сидим в аудитории**. 3) **Мы говорим о русском языке.** **Экзамен по русскому языку.**`,

    es: `## El sistema de casos

> **En este tema:** los seis casos como sistema, las terminaciones de los tipos de sustantivo que ya conoces, los pronombres personales y el caso que exigen un verbo o una preposición.

### Por qué importa
Cada caso ya hizo un trabajo por separado: el acusativo como objeto, el preposicional como lugar, el genitivo tras **нет**, el dativo para el destinatario, el instrumental con una profesión. En una frase real llegan juntos. **Преподаватель объяснил правило студентам в аудитории** es una sola línea: sujeto, objeto, destinatario y lugar. La terminación dice cuál es cuál.

El verbo o la preposición elige el caso. **Помогать** y **видеть** se refieren a una persona, y las formas no coinciden: **помогаю студенту**, **вижу студента**. **О** y **по** pueden traducirse las dos por “sobre”, y piden casos distintos: **говорим о языке**, **экзамен по языку**. El sustantivo como en el diccionario, detrás de una preposición, convierte la frase en una lista.

### La regla

**Regla:** El ruso tiene seis casos. Pregunta el caso y después toma la terminación del tipo de sustantivo.

| Caso | Preguntas | Trabajo principal |
|---|---|---|
| Nominativo | **кто? что?** | sujeto; forma del diccionario |
| Genitivo | **кого? чего?** | **нет**, cantidad, **у** + persona, “de” |
| Dativo | **кому? чему?** | destinatario; la persona con **нравиться** |
| Acusativo | **кого? что?** | objeto directo; destino tras **в / на** |
| Instrumental | **кем? чем?** | “con”, una profesión, algunos verbos |
| Preposicional | **о ком? о чём? где?** | lugar tras **в / на**; tema tras **о** |

**Regla:** Estas terminaciones de singular cubren los sustantivos de tema duro. Un masculino de persona copia el genitivo en el acusativo. Un masculino de cosa copia el nominativo.

| Caso | **студент** | **ключ** | **книга** | **окно** |
|---|---|---|---|---|
| Nominativo | **студент** | **ключ** | **книга** | **окно** |
| Genitivo | **студента** | **ключа** | **книги** | **окна** |
| Dativo | **студенту** | **ключу** | **книге** | **окну** |
| Acusativo | **студента** | **ключ** | **книгу** | **окно** |
| Instrumental | **студентом** | **ключом** | **книгой** | **окном** |
| Preposicional | **о студенте** | **о ключе** | **о книге** | **об окне** |

**Regla:** Un masculino en **-ь** sigue llevando **-е** en el preposicional. Los sustantivos en **-ия** y **-ие** llevan ahí **-ии**, con la misma grafía que en otros casos. La pregunta y la preposición separan esas grafías.

| Caso | **словарь** | **аудитория** | **занятие** |
|---|---|---|---|
| Nominativo | **словарь** | **аудитория** | **занятие** |
| Genitivo | **словаря** | **аудитории** | **занятия** |
| Dativo | **словарю** | **аудитории** | **занятию** |
| Acusativo | **словарь** | **аудиторию** | **занятие** |
| Instrumental | **словарём** | **аудиторией** | **занятием** |
| Preposicional | **о словаре** | **в аудитории** | **о занятии** |

**Нет аудитории** es genitivo, **к аудитории** es dativo, **в аудитории** es preposicional. **В аудиторие** no es una forma.

**Regla:** El plural usa las mismas preguntas. Las personas llevan el genitivo plural como acusativo plural. Las cosas llevan el nominativo plural como acusativo plural. El genitivo plural es la forma que ya usas tras **пять**: **студентов**, **книг**, **окон**.

| Caso | **студенты** | **книги** |
|---|---|---|
| Nominativo | **студенты** | **книги** |
| Genitivo | **студентов** | **книг** |
| Dativo | **студентам** | **книгам** |
| Acusativo | **студентов** | **книги** |
| Instrumental | **студентами** | **книгами** |
| Preposicional | **о студентах** | **о книгах** |

**Regla:** **В** y **на** llevan acusativo para el destino (**куда?**) y preposicional para el lugar (**где?**).

| | Destino, **куда?** | Lugar, **где?** |
|---|---|---|
| **в** | **в библиотеку**, **в аудиторию** | **в библиотеке**, **в аудитории** |
| **на** | **на лекцию**, **на стол** | **на лекции**, **на столе** |

**Regla:** **О**, **об** y **обо** significan “sobre” y llevan preposicional.

| Forma | Dónde | Ejemplo |
|---|---|---|
| **о** | ante consonante | **о курсе**, **о книге**, **о языке** |
| **об** | ante vocal | **об экзамене**, **об окне**, **об университете** |
| **обо** | ante **мне** | **обо мне** |

**По** con dativo es la etiqueta de una asignatura. **О** con preposicional es el tema de una conversación. El adjetivo va en el mismo caso que el sustantivo.

| Modelo | Caso | Ejemplo |
|---|---|---|
| hablar de | **о** + preposicional | **Мы говорим о русском языке.** |
| una asignatura | **по** + dativo | **Экзамен по русскому языку.** |
| estudiar la lengua | instrumental | **Я занимаюсь русским языком.** |

| Caso | **язык** | **русский** |
|---|---|---|
| Preposicional | **о языке** | **о русском** |
| Dativo | **по языку** | **по русскому** |
| Instrumental | **языком** | **русским** |

**Regla:** Aprende el caso con el verbo o con la preposición. Una preposición del español no lo elige.

| Modelo | Caso | Ejemplo |
|---|---|---|
| **нет, у, для, без, после, от, из** | genitivo | **У меня нет ключа.** **После лекции.** **Письмо от преподавателя.** |
| **помогать, звонить** | dativo | **Помогите студенту.** **Я позвонил преподавателю.** |
| **нравиться** | persona en dativo, cosa en nominativo | **Мне нравится лекция.** **Мне нравятся лекции.** |
| **к**, **по** | dativo | **Я готовлюсь к экзамену.** **Иду по улице.** |
| **читать, видеть, знать** | acusativo | **Я читаю статью.** **Я вижу студента.** |
| **ждать** | **кого** para una persona, **чего** para un resultado o una cosa | **Жду преподавателя.** **Жду ответа.** |
| **бояться** | genitivo | **Не бойтесь ошибок.** |
| **интересоваться, заниматься, пользоваться** | instrumental | **Я интересуюсь историей.** **Мы пользуемся словарём.** |
| **работать** como profesión | instrumental | **Она работает преподавателем.** |
| un instrumento | instrumental | **Пишу ручкой.** |
| **с** “junto con” | instrumental | **Она ушла с другом.** |
| **с** “de un acto” | genitivo | **Она ушла с занятия.** |
| un vehículo | **на** + preposicional | **Еду на автобусе.** |
| **говорить о, думать о** | preposicional | **Мы говорим об экзамене.** |

**Нет статьи** es ausencia, así que el sustantivo va en genitivo. **Я не читал статью** es un verbo normal con **не**. Ese objeto sigue en acusativo.

Lo que gusta es el sujeto. El verbo concuerda con eso, y la persona va en dativo. **Мне нравится лекция.** **Мне нравятся лекции.**

**Regla:** Los pronombres tienen tabla propia. Tras cualquier preposición, **его / её / их** añaden **н**: **у неё**, **к нему**, **с ними**, **за него**, **про неё**. Sin preposición no hay **н**: **вижу его**, **вижу её**.

| | Genitivo | Dativo | Acusativo | Instrumental | Preposicional |
|---|---|---|---|---|---|
| **я** | **меня** | **мне** | **меня** | **мной** | **обо мне** |
| **ты** | **тебя** | **тебе** | **тебя** | **тобой** | **о тебе** |
| **он** | **него** tras preposición; **его** solo | **ему** | **его** | **им**; **с ним** | **о нём** |
| **она** | **неё** tras preposición; **её** solo | **ей** | **её** | **ей**; **с ней** | **о ней** |
| **мы** | **нас** | **нам** | **нас** | **нами** | **о нас** |
| **вы** | **вас** | **вам** | **вас** | **вами** | **о вас** |
| **они** | **них** tras preposición; **их** solo | **им** | **их** | **ими**; **с ними** | **о них** |

**Им** son dos formas. **Я им позвонил** significa “los llamé” (dativo de **они**). **Он доволен им** significa “está contento con él” (instrumental de **он**). “Con él” tras **с** es **с ним**.

### Cómo se usa
Pregunta el caso antes de elegir la columna.

1. ¿Quién actúa? Nominativo.
2. ¿Este verbo o esta preposición está en la tabla?
3. ¿Es un destino (**куда?**) o un lugar (**где?**)?
4. Copia la terminación de un sustantivo del mismo tipo.

Nombra los casos en una frase completa: **Преподаватель** (nominativo) **объяснил правило** (acusativo) **студентам** (dativo) **в аудитории** (preposicional).

Separa las dos frases de “historia”. **Мне нравится история.** **Я интересуюсь историей.**

### Ejemplos
- **У студента нет словаря.** — El estudiante no tiene diccionario.
- **Я позвонил преподавателю и спросил об экзамене.** — Llamé al profesor y pregunté por el examen.
- **Мы ждём ответа.** — Esperamos una respuesta.
- **Не бойтесь ошибок.** — No tengan miedo de los errores.
- **Мне нравится этот курс, и я интересуюсь историей.** — Me gusta este curso y me interesa la historia.
- **Студенты идут в аудиторию. Сейчас они в аудитории.** — Los estudiantes van al aula. Ahora están en el aula.
- **Она ушла с занятия с другом.** — Ella se fue de la clase con un amigo.
- **Мы говорим о русском языке. Экзамен по русскому языку в пятницу.** — Hablamos de la lengua rusa. El examen de ruso es el viernes.
- **Я занимаюсь русским языком в библиотеке.** — Estudio ruso en la biblioteca.
- **Письмо от неё на столе.** — La carta de ella está sobre la mesa.

### Errores típicos
- La forma del diccionario tras una preposición: **в библиотека**, **с друг**. Usa **в библиотеку** o **в библиотеке**, y **с другом**.
- **Помогаю студента**. **Помогать** pide dativo: **помогаю студенту**.
- **Интересуюсь историю**. El modelo es instrumental: **интересуюсь историей**.
- Terminación de lugar para un destino: **иду в аудитории**. El destino es **в аудиторию**.
- **О экзамене**. Ante vocal la forma es **об экзамене**.
- **Я нравлюсь история**. La persona va en dativo y la cosa en nominativo: **Мне нравится история**.
- **Жду ответ** en nominativo. Un resultado va en genitivo: **жду ответа**. Una persona es **кого**: **жду преподавателя**.
- **У её**. Tras preposición la forma es **у неё**.
- **Еду автобусом** como modelo de transporte. Di **еду на автобусе**.

### Si tu lengua es el español
El español no declina el sustantivo. El orden y las preposiciones hacen ese trabajo, y *a* personal marca un objeto de persona: *veo al estudiante*, *ayudo al estudiante*. En ruso esas dos frases no comparten caso. *Veo al estudiante* es **вижу студента** (acusativo). *Ayudo al estudiante* es **помогаю студенту** (dativo). La *a* española no predice la terminación.

*En la biblioteca* es lugar y *a la biblioteca* es destino. El ruso mantiene **в** y cambia el caso: **в библиотеке**, **в библиотеку**. *Hablamos de la lengua* y *examen de lengua* también se separan: **о русском языке**, **по русскому языку**. *Me gusta la historia* se parece a **Мне нравится история**: la cosa es el sujeto y la persona va en dativo. *Me interesa la historia* con **интересоваться** es otra construcción, con la persona en nominativo y la cosa en instrumental: **Я интересуюсь историей**. *No hay diccionario* se parece a **нет словаря**, con genitivo y sin verbo *haber*.

> 💡 Saca el caso del verbo o de la preposición y lee la terminación en un sustantivo del mismo tipo. **Помогать студенту**, **интересоваться историей**, **нет ключа**, **об экзамене**. **В аудиторию** es destino. **В аудитории** es lugar.

### Comprueba
1. “Ayudo al estudiante” y “veo al estudiante”. ¿Qué formas de **студент**?
2. ¿Qué frase los sitúa dentro del aula: **Мы идём в аудиторию** o **Мы сидим в аудитории**?
3. ¿Cómo se dice “hablamos de la lengua rusa” y “el examen de ruso”?

**Respuestas:** 1) **помогаю студенту**, **вижу студента**. 2) **Мы сидим в аудитории**. 3) **Мы говорим о русском языке.** **Экзамен по русскому языку.**`,

    de: `## Das Kassussystem

> **In diesem Thema:** die sechs Kasus als ein System, die Endungen der Substantivtypen, die Sie schon kennen, die Personalpronomen und der Kasus, den ein Verb oder eine Präposition verlangt.

### Warum das wichtig ist
Jeder Kasus hat bisher eine eigene Aufgabe gehabt: der Akkusativ als Objekt, der Präpositiv als Ort, der Genitiv nach **нет**, der Dativ für einen Adressaten, der Instrumental bei einem Beruf. In einem echten Satz kommen sie zusammen. **Преподаватель объяснил правило студентам в аудитории** ist eine Zeile: Subjekt, Objekt, Adressat und Ort. Die Endung sagt, welche Rolle welches Wort hat.

Das Verb oder die Präposition wählt den Kasus. **Помогать** und **видеть** betreffen beide eine Person, und die Formen gehen auseinander: **помогаю студенту**, **вижу студента**. **О** und **по** lassen sich beide mit „über“ übersetzen und verlangen verschiedene Kasus: **говорим о языке**, **экзамен по языку**. Die Wörterbuchform nach einer Präposition macht aus dem Satz eine Wortliste.

### Die Regel

**Regel:** Russisch hat sechs Kasus. Stellen Sie die Frage und nehmen Sie dann die Endung aus dem Substantivtyp.

| Kasus | Fragen | Hauptaufgabe |
|---|---|---|
| Nominativ | **кто? что?** | Subjekt; Wörterbuchform |
| Genitiv | **кого? чего?** | **нет**, Menge, **у** + Person, „von“ |
| Dativ | **кому? чему?** | Adressat; die Person bei **нравиться** |
| Akkusativ | **кого? что?** | direktes Objekt; Ziel nach **в / на** |
| Instrumental | **кем? чем?** | „mit“, ein Beruf, einige Verben |
| Präpositiv | **о ком? о чём? где?** | Ort nach **в / на**; Thema nach **о** |

**Regel:** Diese Singularendungen gelten für harten Stamm. Eine maskuline Person kopiert im Akkusativ den Genitiv. Ein maskulines Ding kopiert den Nominativ.

| Kasus | **студент** | **ключ** | **книга** | **окно** |
|---|---|---|---|---|
| Nominativ | **студент** | **ключ** | **книга** | **окно** |
| Genitiv | **студента** | **ключа** | **книги** | **окна** |
| Dativ | **студенту** | **ключу** | **книге** | **окну** |
| Akkusativ | **студента** | **ключ** | **книгу** | **окно** |
| Instrumental | **студентом** | **ключом** | **книгой** | **окном** |
| Präpositiv | **о студенте** | **о ключе** | **о книге** | **об окне** |

**Regel:** Ein Maskulinum auf **-ь** behält im Präpositiv **-е**. Substantive auf **-ия** und **-ие** haben dort **-ии**, in derselben Schreibung wie in mehreren anderen Kasus. Frage und Präposition trennen diese Schreibungen.

| Kasus | **словарь** | **аудитория** | **занятие** |
|---|---|---|---|
| Nominativ | **словарь** | **аудитория** | **занятие** |
| Genitiv | **словаря** | **аудитории** | **занятия** |
| Dativ | **словарю** | **аудитории** | **занятию** |
| Akkusativ | **словарь** | **аудиторию** | **занятие** |
| Instrumental | **словарём** | **аудиторией** | **занятием** |
| Präpositiv | **о словаре** | **в аудитории** | **о занятии** |

**Нет аудитории** ist Genitiv, **к аудитории** ist Dativ, **в аудитории** ist Präpositiv. **В аудиторие** ist keine Form.

**Regel:** Der Plural stellt dieselben Fragen. Personen nehmen den Genitiv Plural als Akkusativ Plural. Dinge nehmen den Nominativ Plural als Akkusativ Plural. Der Genitiv Plural ist die Form, die Sie schon nach **пять** verwenden: **студентов**, **книг**, **окон**.

| Kasus | **студенты** | **книги** |
|---|---|---|
| Nominativ | **студенты** | **книги** |
| Genitiv | **студентов** | **книг** |
| Dativ | **студентам** | **книгам** |
| Akkusativ | **студентов** | **книги** |
| Instrumental | **студентами** | **книгами** |
| Präpositiv | **о студентах** | **о книгах** |

**Regel:** **В** und **на** verlangen den Akkusativ für ein Ziel (**куда?**) und den Präpositiv für einen Ort (**где?**).

| | Ziel, **куда?** | Ort, **где?** |
|---|---|---|
| **в** | **в библиотеку**, **в аудиторию** | **в библиотеке**, **в аудитории** |
| **на** | **на лекцию**, **на стол** | **на лекции**, **на столе** |

**Regel:** **О**, **об** und **обо** bedeuten „über“ und verlangen den Präpositiv.

| Form | Wo | Beispiel |
|---|---|---|
| **о** | vor einem Konsonanten | **о курсе**, **о книге**, **о языке** |
| **об** | vor einem Vokal | **об экзамене**, **об окне**, **об университете** |
| **обо** | vor **мне** | **обо мне** |

**По** mit Dativ ist die Bezeichnung eines Fachs. **О** mit Präpositiv ist das Gesprächsthema. Das Adjektiv steht im selben Kasus wie das Substantiv.

| Muster | Kasus | Beispiel |
|---|---|---|
| sprechen über | **о** + Präpositiv | **Мы говорим о русском языке.** |
| ein Fach | **по** + Dativ | **Экзамен по русскому языку.** |
| die Sprache lernen | Instrumental | **Я занимаюсь русским языком.** |

| Kasus | **язык** | **русский** |
|---|---|---|
| Präpositiv | **о языке** | **о русском** |
| Dativ | **по языку** | **по русскому** |
| Instrumental | **языком** | **русским** |

**Regel:** Lernen Sie den Kasus zusammen mit dem Verb oder der Präposition. Eine deutsche Präposition wählt ihn nicht.

| Muster | Kasus | Beispiel |
|---|---|---|
| **нет, у, для, без, после, от, из** | Genitiv | **У меня нет ключа.** **После лекции.** **Письмо от преподавателя.** |
| **помогать, звонить** | Dativ | **Помогите студенту.** **Я позвонил преподавателю.** |
| **нравиться** | Person im Dativ, Sache im Nominativ | **Мне нравится лекция.** **Мне нравятся лекции.** |
| **к**, **по** | Dativ | **Я готовлюсь к экзамену.** **Иду по улице.** |
| **читать, видеть, знать** | Akkusativ | **Я читаю статью.** **Я вижу студента.** |
| **ждать** | **кого** für eine Person, **чего** für ein Ergebnis oder ein Ding | **Жду преподавателя.** **Жду ответа.** |
| **бояться** | Genitiv | **Не бойтесь ошибок.** |
| **интересоваться, заниматься, пользоваться** | Instrumental | **Я интересуюсь историей.** **Мы пользуемся словарём.** |
| **работать** als Beruf | Instrumental | **Она работает преподавателем.** |
| ein Werkzeug | Instrumental | **Пишу ручкой.** |
| **с** „zusammen mit“ | Instrumental | **Она ушла с другом.** |
| **с** „von einer Veranstaltung weg“ | Genitiv | **Она ушла с занятия.** |
| ein Fahrzeug | **на** + Präpositiv | **Еду на автобусе.** |
| **говорить о, думать о** | Präpositiv | **Мы говорим об экзамене.** |

**Нет статьи** ist Abwesenheit, also steht das Substantiv im Genitiv. **Я не читал статью** ist ein gewöhnliches Verb mit **не**. Dieses Objekt bleibt im Akkusativ.

Was gefällt, ist das Subjekt. Das Verb richtet sich danach, die Person steht im Dativ. **Мне нравится лекция.** **Мне нравятся лекции.**

**Regel:** Pronomen haben eine eigene Tabelle. Nach jeder Präposition bekommen **его / её / их** ein **н**: **у неё**, **к нему**, **с ними**, **за него**, **про неё**. Ohne Präposition fehlt das **н**: **вижу его**, **вижу её**.

| | Genitiv | Dativ | Akkusativ | Instrumental | Präpositiv |
|---|---|---|---|---|---|
| **я** | **меня** | **мне** | **меня** | **мной** | **обо мне** |
| **ты** | **тебя** | **тебе** | **тебя** | **тобой** | **о тебе** |
| **он** | **него** nach Präposition; **его** allein | **ему** | **его** | **им**; **с ним** | **о нём** |
| **она** | **неё** nach Präposition; **её** allein | **ей** | **её** | **ей**; **с ней** | **о ней** |
| **мы** | **нас** | **нам** | **нас** | **нами** | **о нас** |
| **вы** | **вас** | **вам** | **вас** | **вами** | **о вас** |
| **они** | **них** nach Präposition; **их** allein | **им** | **их** | **ими**; **с ними** | **о них** |

**Им** sind zwei Formen. **Я им позвонил** heißt „ich habe sie angerufen“ (Dativ von **они**). **Он доволен им** heißt „er ist mit ihm zufrieden“ (Instrumental von **он**). „Mit ihm“ nach **с** heißt **с ним**.

### So verwendet man es
Fragen Sie den Kasus ab, bevor Sie die Spalte wählen.

1. Wer handelt? Nominativ.
2. Steht dieses Verb oder diese Präposition in der Tabelle?
3. Ist es ein Ziel (**куда?**) oder ein Ort (**где?**)?
4. Übernehmen Sie die Endung von einem Substantiv desselben Typs.

Benennen Sie die Kasus in einem ganzen Satz: **Преподаватель** (Nominativ) **объяснил правило** (Akkusativ) **студентам** (Dativ) **в аудитории** (Präpositiv).

Halten Sie die zwei Sätze mit „Geschichte“ auseinander. **Мне нравится история.** **Я интересуюсь историей.**

### Beispiele
- **У студента нет словаря.** — Der Student hat kein Wörterbuch.
- **Я позвонил преподавателю и спросил об экзамене.** — Ich habe den Dozenten angerufen und nach der Prüfung gefragt.
- **Мы ждём ответа.** — Wir warten auf eine Antwort.
- **Не бойтесь ошибок.** — Haben Sie keine Angst vor Fehlern.
- **Мне нравится этот курс, и я интересуюсь историей.** — Dieser Kurs gefällt mir, und ich interessiere mich für Geschichte.
- **Студенты идут в аудиторию. Сейчас они в аудитории.** — Die Studenten gehen in den Hörsaal. Jetzt sind sie im Hörsaal.
- **Она ушла с занятия с другом.** — Sie hat die Stunde verlassen, zusammen mit einem Freund.
- **Мы говорим о русском языке. Экзамен по русскому языку в пятницу.** — Wir sprechen über die russische Sprache. Die Russischprüfung ist am Freitag.
- **Я занимаюсь русским языком в библиотеке.** — Ich lerne Russisch in der Bibliothek.
- **Письмо от неё на столе.** — Der Brief von ihr liegt auf dem Tisch.

### Typische Fehler
- Die Wörterbuchform nach einer Präposition: **в библиотека**, **с друг**. Es heißt **в библиотеку** oder **в библиотеке**, und **с другом**.
- **Помогаю студента**. **Помогать** verlangt den Dativ: **помогаю студенту**.
- **Интересуюсь историю**. Das Muster ist der Instrumental: **интересуюсь историей**.
- Eine Ortsendung für ein Ziel: **иду в аудитории**. Das Ziel heißt **в аудиторию**.
- **О экзамене**. Vor einem Vokal heißt es **об экзамене**.
- **Я нравлюсь история**. Die Person steht im Dativ, die Sache im Nominativ: **Мне нравится история**.
- **Жду ответ** im Nominativ. Ein Ergebnis steht im Genitiv: **жду ответа**. Eine Person ist **кого**: **жду преподавателя**.
- **У её**. Nach einer Präposition heißt es **у неё**.
- **Еду автобусом** als Transportmuster. Sagen Sie **еду на автобусе**.

### Wenn Ihre Sprache Deutsch ist
Deutsch hat vier Kasus, Russisch sechs. Nominativ, Akkusativ, Dativ und Genitiv sind als Aufgaben wiederzuerkennen, die Endungen und die Rektion nicht. *Ich helfe dem Studenten* trifft den russischen Dativ: **помогаю студенту**. *Ich sehe den Studenten* trifft den Akkusativ: **вижу студента**. Der Instrumental hat im Deutschen keinen eigenen Kasus. *Mit einem Freund* ist **с другом**. *Sie arbeitet als Dozentin* ist **работает преподавателем**, ohne Präposition. *Ich interessiere mich für Geschichte* benutzt *für* plus Akkusativ. **Интересоваться** verlangt den Instrumental ohne Präposition: **интересуюсь историей**.

Bei *in* entspricht der deutsche Dativ einem Ort und der Akkusativ einem Ziel. Russisch teilt genauso, aber der Ort steht im Präpositiv: **в библиотеке** ist Ort, **в библиотеку** ist Ziel. *Wir sprechen über die Prüfung* hat im Deutschen den Akkusativ nach *über*. Russisch hat hier den Präpositiv: **говорим об экзамене**. *Kein Wörterbuch* entspricht **нет словаря**, mit Genitiv. Ein verneintes gewöhnliches Verb behält das Objekt im Akkusativ: **Я не читал статью**.

> 💡 Nehmen Sie den Kasus vom Verb oder von der Präposition und lesen Sie die Endung an einem Substantiv desselben Typs ab. **Помогать студенту**, **интересоваться историей**, **нет ключа**, **об экзамене**. **В аудиторию** ist ein Ziel. **В аудитории** ist ein Ort.

### Prüfen Sie sich
1. „Ich helfe dem Studenten“ und „ich sehe den Studenten“. Welche Formen von **студент**?
2. Welcher Satz setzt sie in den Hörsaal: **Мы идём в аудиторию** oder **Мы сидим в аудитории**?
3. Wie sagt man „wir sprechen über Russisch“ und „die Russischprüfung“?

**Antworten:** 1) **помогаю студенту**, **вижу студента**. 2) **Мы сидим в аудитории**. 3) **Мы говорим о русском языке.** **Экзамен по русскому языку.**`,
  },

  "ru-b1-aspect-tenses": {
    en: `## Aspect and tense

> **In this topic:** imperfective and perfective across past, present, and future, including a story that needs both.

### Why it matters
Russian has three tenses and two aspects, and the perfective has no present. **Я прочитаю** looks like a present and means a future result. **Я буду прочитать** stacks two futures and is not a Russian form. **Он долго готовился** and **он подготовился** are both past, and they do not tell the same story: one was a process, the other reached a result.

Textbooks mark the imperfective **НСВ** and the perfective **СВ**. Learn each verb as a pair. The tense ending is the same machinery you already use. The new choice is which partner of the pair goes in that tense.

### The rule

**Rule:** Aspect is a choice about the shape of the action. Tense places that shape in time.

| You mean | Aspect | Typical signals | Example |
|---|---|---|---|
| process, duration | imperfective | **долго**, **два часа**, **пока** | **Она долго готовилась.** |
| habit, repetition | imperfective | **часто**, **каждый день**, **обычно** | **Каждый день она будет готовиться.** |
| background | imperfective | another event cuts across it | **Когда она читала, позвонил сосед.** |
| a result | perfective | **уже** as “done”, **наконец**, a deadline | **Она подготовилась.** **К пятнице она подготовится.** |
| one step in a chain | perfective | **потом**, **затем** | **Она закрыла книгу и рассказала план.** |
| the moment it becomes clear | perfective | — | **Она поняла правило.** |

**Rule:** Learn the pair as one unit. A prefix is a frequent way to build the perfective. Some pairs change the suffix.

| Imperfective | Perfective | Gloss |
|---|---|---|
| **читать** | **прочитать** | read |
| **писать** | **написать** | write |
| **делать** | **сделать** | do |
| **готовиться** | **подготовиться** | prepare |
| **рассказывать** | **рассказать** | tell |
| **понимать** | **понять** | understand |
| **случаться** | **случиться** | happen |

**Понять** does not follow **понимать** letter by letter. The future is **пойму, поймёшь, поймёт, поймём, поймёте, поймут**. The past is **понял, поняла, поняло, поняли**.

**Rule:** The present exists only in the imperfective. It uses the present endings you already know: **я готовлюсь**, **она читает**, **они рассказывают**. A perfective form with those endings is future. **Сейчас она готовится** means she is preparing now. **Она подготовится** means she will get ready, with a result.

**Rule:** The past of both aspects uses the past endings. They agree with gender and number, not with person. Polite **вы** takes the plural line, including when you speak to one lecturer.

| Subject | Imperfective | Perfective |
|---|---|---|
| Masculine singular | **готовился**, **читал** | **подготовился**, **прочитал** |
| Feminine singular | **готовилась**, **читала** | **подготовилась**, **прочитала** |
| Plural, including polite **вы** | **готовились**, **читали** | **подготовились**, **прочитали** |

**-Ся** follows a consonant and **-сь** follows a vowel: **подготовился**, **подготовилась**, **подготовлюсь**.

**Rule:** The imperfective future is **быть** in the future plus the imperfective infinitive. The perfective future is one word, with present endings and future meaning.

| | **быть** | Imperfective future | Perfective future |
|---|---|---|---|
| **я** | **буду** | **буду читать** | **прочитаю** |
| **ты** | **будешь** | **будешь читать** | **прочитаешь** |
| **он / она** | **будет** | **будет читать** | **прочитает** |
| **мы** | **будем** | **будем читать** | **прочитаем** |
| **вы** | **будете** | **будете читать** | **прочитаете** |
| **они** | **будут** | **будут читать** | **прочитают** |

**Буду подготовиться** and **буду прочитать** are not forms. A result in the future is the one-word perfective: **я подготовлюсь**, **я прочитаю**.

**Rule:** **Уже** does not choose the aspect. With the imperfective, the process is already under way. With the perfective, the result is already there.

- **Я уже читаю статью.** — I am already reading it.
- **Я уже прочитал статью.** — I have already finished it.

**Rule:** **Не** plus the imperfective says the activity did not take place. **Не** plus the perfective says the result was not reached.

- **Она не читала эту статью.** — She did not spend time reading it.
- **Она не прочитала статью.** — She did not finish it.

A general prohibition uses the imperfective imperative: **Не разговаривайте на лекции.** A warning about one unwanted result can use the perfective: **Не опоздайте на экзамен.**

**Rule:** A story alternates the two aspects. Background and process stay imperfective. The events that move the story are perfective.

**Вчера вечером Анна долго готовилась к семинару. Она читала текст и выписывала слова. Потом сосед позвонил и спросил, что случилось. Анна рассказала план и наконец подготовилась.**

**Готовилась**, **читала**, and **выписывала** are the process. **Позвонил**, **спросил**, **случилось**, **рассказала**, and **подготовилась** are the events and the result.

### How to use it
Ask two questions, in this order.

1. Process, habit, or background? Imperfective. Result, or one completed step? Perfective.
2. Past, present, or future? Then use the table. If the answer is present, the aspect has to be imperfective.

A man says **я читал** and **я прочитал**. A woman says **я читала** and **я прочитала**. A question to a lecturer uses **вы** and **-ли**: **Вы прочитали текст?**

For a deadline, use the perfective and **к** plus the dative: **К пятнице я подготовлюсь.** For a repeated plan, use **буду** plus the imperfective: **Каждый день я буду готовиться.**

### Examples
- **Он долго готовился к экзамену.** — He spent a long time preparing.
- **Он подготовился к экзамену.** — He finished preparing.
- **Сейчас она готовится.** — She is preparing now.
- **Каждый день я буду готовиться.** — I will prepare every day.
- **К пятнице я подготовлюсь.** — I will be ready by Friday.
- **Вчера я читал статью два часа.** — Yesterday I read the article for two hours.
- **Вчера я прочитал статью.** — Yesterday I finished the article.
- **Когда я читал, позвонил преподаватель.** — While I was reading, the lecturer called.
- **Я уже прочитал текст.** — I have already finished the text.
- **Что случилось?** — What happened?
- **Расскажите, что случилось.** — Tell us what happened.
- **Вы поняли правило?** — Did you understand the rule? Polite **вы**.

### Typical mistakes
- **Я буду прочитать** and **буду подготовиться**. **Буду** takes an imperfective infinitive. A result is **прочитаю** or **подготовлюсь**.
- Reading **я прочитаю** as “I am reading”. That form is future. The process now is **я читаю**.
- **Часто прочитал**, **долго прочитал**, **каждый день прочитаю**. Repetition and duration take the imperfective.
- **Она прочитал** or a woman saying **я подготовился**. The feminine past is **прочитала**, **подготовилась**.
- **Вы прочитал** to a lecturer. Polite **вы** takes **прочитали**, **подготовились**.
- One aspect for a whole story. Background wants the imperfective, and the steps of the plot want the perfective.
- **Поняю** as the future of **понять**. The form is **пойму**.

### If your language is English
English tenses do not line up one to one with Russian aspect. *I read the article yesterday* can be **я читал статью** (time spent on it) or **я прочитал статью** (finished it). *I was reading when he called* is a clear imperfective plus a perfective event: **Когда я читал, он позвонил**. *I have already read it* has no separate Russian tense. The past perfective plus **уже** does that job: **Я уже прочитал**.

*I will read* is ambiguous. *I will read for two hours every day* is **буду читать**. *I will finish the article by Friday* is **прочитаю**. *I understood the rule* as a moment of clarity is **я понял** or **я поняла**. *I understand it* as a present state is **я понимаю**. There is no helping *did*, and the past still agrees in gender and number.

> 💡 If “for two hours” or “every day” still fits, use the imperfective. If the sentence means “finished” or “by Friday”, use the perfective. **Буду** joins only an imperfective infinitive.

### Check yourself
1. “He spent a long time preparing” and “he finished preparing”. Which past forms?
2. Which future is a result: **Я буду подготовиться** or **Я подготовлюсь**?
3. In **Когда я читал статью, позвонил преподаватель**, which verb is the background?

**Answers:** 1) **Он долго готовился.** **Он подготовился.** 2) **Я подготовлюсь.** 3) **читал**.`,

    es: `## Aspecto y tiempos

> **En este tema:** imperfectivo y perfectivo en pasado, presente y futuro, incluido un relato que necesita los dos.

### Por qué importa
El ruso tiene tres tiempos y dos aspectos, y el perfectivo no tiene presente. **Я прочитаю** parece un presente y significa un resultado futuro. **Я буду прочитать** junta dos futuros y no es una forma rusa. **Он долго готовился** y **он подготовился** son los dos pasado, y no cuentan lo mismo: uno fue un proceso y el otro llegó a un resultado.

Los manuales marcan el imperfectivo como **НСВ** y el perfectivo como **СВ**. Aprende cada verbo como pareja. La terminación de tiempo es el mecanismo que ya usas. Lo nuevo es qué miembro de la pareja entra en ese tiempo.

### La regla

**Regla:** El aspecto elige la forma de la acción. El tiempo coloca esa forma en el calendario.

| Quieres decir | Aspecto | Señales típicas | Ejemplo |
|---|---|---|---|
| proceso, duración | imperfectivo | **долго**, **два часа**, **пока** | **Она долго готовилась.** |
| hábito, repetición | imperfectivo | **часто**, **каждый день**, **обычно** | **Каждый день она будет готовиться.** |
| fondo | imperfectivo | otro hecho lo corta | **Когда она читала, позвонил сосед.** |
| un resultado | perfectivo | **уже** como “ya está”, **наконец**, un plazo | **Она подготовилась.** **К пятнице она подготовится.** |
| un paso de una cadena | perfectivo | **потом**, **затем** | **Она закрыла книгу и рассказала план.** |
| el momento en que algo queda claro | perfectivo | — | **Она поняла правило.** |

**Regla:** Aprende la pareja como una unidad. Un prefijo es una vía frecuente para formar el perfectivo. Algunas parejas cambian el sufijo.

| Imperfectivo | Perfectivo | Sentido |
|---|---|---|
| **читать** | **прочитать** | leer |
| **писать** | **написать** | escribir |
| **делать** | **сделать** | hacer |
| **готовиться** | **подготовиться** | prepararse |
| **рассказывать** | **рассказать** | contar |
| **понимать** | **понять** | entender |
| **случаться** | **случиться** | ocurrir |

**Понять** no sigue a **понимать** letra por letra. El futuro es **пойму, поймёшь, поймёт, поймём, поймёте, поймут**. El pasado es **понял, поняла, поняло, поняли**.

**Regla:** El presente existe solo en imperfectivo. Usa las terminaciones de presente que ya conoces: **я готовлюсь**, **она читает**, **они рассказывают**. Una forma perfectiva con esas terminaciones es futuro. **Сейчас она готовится** significa que se está preparando ahora. **Она подготовится** significa que va a quedar preparada.

**Regla:** El pasado de los dos aspectos usa las terminaciones de pasado. Concuerdan en género y número, no en persona. El **вы** de cortesía lleva la línea de plural, también si hablas con un solo profesor.

| Sujeto | Imperfectivo | Perfectivo |
|---|---|---|
| Masculino singular | **готовился**, **читал** | **подготовился**, **прочитал** |
| Femenino singular | **готовилась**, **читала** | **подготовилась**, **прочитала** |
| Plural, incluido el **вы** de cortesía | **готовились**, **читали** | **подготовились**, **прочитали** |

**-Ся** va tras consonante y **-сь** tras vocal: **подготовился**, **подготовилась**, **подготовлюсь**.

**Regla:** El futuro imperfectivo es **быть** en futuro más el infinitivo imperfectivo. El futuro perfectivo es una sola palabra, con terminaciones de presente y sentido de futuro.

| | **быть** | Futuro imperfectivo | Futuro perfectivo |
|---|---|---|---|
| **я** | **буду** | **буду читать** | **прочитаю** |
| **ты** | **будешь** | **будешь читать** | **прочитаешь** |
| **он / она** | **будет** | **будет читать** | **прочитает** |
| **мы** | **будем** | **будем читать** | **прочитаем** |
| **вы** | **будете** | **будете читать** | **прочитаете** |
| **они** | **будут** | **будут читать** | **прочитают** |

**Буду подготовиться** y **буду прочитать** no son formas. Un resultado en el futuro es el perfectivo en una palabra: **я подготовлюсь**, **я прочитаю**.

**Regla:** **Уже** no elige el aspecto. Con imperfectivo, el proceso ya está en marcha. Con perfectivo, el resultado ya está.

- **Я уже читаю статью.** — Ya estoy leyendo el artículo.
- **Я уже прочитал статью.** — Ya terminé el artículo.

**Regla:** **Не** con imperfectivo dice que la actividad no tuvo lugar. **Не** con perfectivo dice que el resultado no se alcanzó.

- **Она не читала эту статью.** — No dedicó tiempo a leerla.
- **Она не прочитала статью.** — No la terminó.

Una prohibición general usa el imperativo imperfectivo: **Не разговаривайте на лекции.** Un aviso sobre un resultado concreto puede usar el perfectivo: **Не опоздайте на экзамен.**

**Regla:** Un relato alterna los dos aspectos. El fondo y el proceso quedan en imperfectivo. Los hechos que hacen avanzar la historia van en perfectivo.

**Вчера вечером Анна долго готовилась к семинару. Она читала текст и выписывала слова. Потом сосед позвонил и спросил, что случилось. Анна рассказала план и наконец подготовилась.**

**Готовилась**, **читала** y **выписывала** son el proceso. **Позвонил**, **спросил**, **случилось**, **рассказала** y **подготовилась** son los hechos y el resultado.

### Cómo se usa
Haz dos preguntas, en este orden.

1. ¿Proceso, hábito o fondo? Imperfectivo. ¿Resultado, o un paso cerrado? Perfectivo.
2. ¿Pasado, presente o futuro? Luego usa la tabla. Si la respuesta es presente, el aspecto tiene que ser imperfectivo.

Un hombre dice **я читал** y **я прочитал**. Una mujer dice **я читала** y **я прочитала**. Una pregunta a un profesor usa **вы** y **-ли**: **Вы прочитали текст?**

Para un plazo, usa el perfectivo y **к** con dativo: **К пятнице я подготовлюсь.** Para un plan que se repite, usa **буду** más el imperfectivo: **Каждый день я буду готовиться.**

### Ejemplos
- **Он долго готовился к экзамену.** — Él se preparó durante mucho tiempo.
- **Он подготовился к экзамену.** — Él terminó de prepararse.
- **Сейчас она готовится.** — Ella se está preparando ahora.
- **Каждый день я буду готовиться.** — Me prepararé cada día.
- **К пятнице я подготовлюсь.** — Para el viernes estaré preparado.
- **Вчера я читал статью два часа.** — Ayer leí el artículo durante dos horas.
- **Вчера я прочитал статью.** — Ayer terminé el artículo.
- **Когда я читал, позвонил преподаватель.** — Mientras leía, llamó el profesor.
- **Я уже прочитал текст.** — Ya terminé el texto.
- **Что случилось?** — ¿Qué pasó?
- **Расскажите, что случилось.** — Cuéntenos qué pasó.
- **Вы поняли правило?** — ¿Entendió la regla? **Вы** de cortesía.

### Errores típicos
- **Я буду прочитать** y **буду подготовиться**. **Буду** lleva un infinitivo imperfectivo. Un resultado es **прочитаю** o **подготовлюсь**.
- Leer **я прочитаю** como “estoy leyendo”. Esa forma es futuro. El proceso de ahora es **я читаю**.
- **Часто прочитал**, **долго прочитал**, **каждый день прочитаю**. La repetición y la duración piden imperfectivo.
- **Она прочитал**, o una mujer que dice **я подготовился**. El pasado femenino es **прочитала**, **подготовилась**.
- **Вы прочитал** a un profesor. El **вы** de cortesía lleva **прочитали**, **подготовились**.
- Un solo aspecto para todo el relato. El fondo quiere imperfectivo, y los pasos de la trama quieren perfectivo.
- **Поняю** como futuro de **понять**. La forma es **пойму**.

### Si tu lengua es el español
El imperfecto y el indefinido se parecen al aspecto, y no son lo mismo. *Leía* y *cada día leía* caen bien en imperfectivo: **читала**, **каждый день читала**. *Leyó el artículo* como hecho cerrado cae bien en perfectivo: **прочитала статью**. *Leyó durante dos horas* sigue siendo indefinido en español y en ruso es imperfectivo: **читала два часа**. La duración manda más que el nombre del tiempo español.

*Estaba leyendo cuando llamó* es fondo más hecho: **Когда она читала, он позвонил**. *Leeré* no dice si la lectura va a terminar. **Буду читать** es el proceso o el hábito. **Прочитаю** es el resultado. *Quiero que lo entiendas* no se resuelve aquí con aspecto; el aspecto elige proceso o resultado, no subjuntivo. *Ya lo he leído* se dice con pasado perfectivo y **уже**: **Я уже прочитал**.

> 💡 Si “durante dos horas” o “cada día” siguen encajando, usa el imperfectivo. Si la frase significa “terminado” o “para el viernes”, usa el perfectivo. **Буду** solo se une a un infinitivo imperfectivo.

### Comprueba
1. “Se preparó durante mucho tiempo” y “terminó de prepararse”. ¿Qué pasados?
2. ¿Qué futuro es un resultado: **Я буду подготовиться** o **Я подготовлюсь**?
3. En **Когда я читал статью, позвонил преподаватель**, ¿qué verbo es el fondo?

**Respuestas:** 1) **Он долго готовился.** **Он подготовился.** 2) **Я подготовлюсь.** 3) **читал**.`,

    de: `## Aspekt und Tempus

> **In diesem Thema:** Imperfektiv und Perfektiv in Vergangenheit, Gegenwart und Zukunft, einschließlich einer Erzählung, die beide braucht.

### Warum das wichtig ist
Russisch hat drei Tempora und zwei Aspekte, und das Perfektiv hat kein Präsens. **Я прочитаю** sieht aus wie ein Präsens und bedeutet ein zukünftiges Ergebnis. **Я буду прочитать** stapelt zwei Zukünfte und ist keine russische Form. **Он долго готовился** und **он подготовился** sind beide Vergangenheit und erzählen nicht dasselbe: eines war ein Prozess, das andere hat ein Ergebnis erreicht.

Lehrwerke markieren das Imperfektiv mit **НСВ** und das Perfektiv mit **СВ**. Lernen Sie jedes Verb als Paar. Die Tempusendung ist das Verfahren, das Sie schon benutzen. Neu ist, welcher Partner des Paars in dieses Tempus kommt.

### Die Regel

**Regel:** Der Aspekt wählt die Gestalt der Handlung. Das Tempus setzt diese Gestalt in die Zeit.

| Sie meinen | Aspekt | Typische Signale | Beispiel |
|---|---|---|---|
| Prozess, Dauer | imperfektiv | **долго**, **два часа**, **пока** | **Она долго готовилась.** |
| Gewohnheit, Wiederholung | imperfektiv | **часто**, **каждый день**, **обычно** | **Каждый день она будет готовиться.** |
| Hintergrund | imperfektiv | ein anderes Ereignis schneidet ihn | **Когда она читала, позвонил сосед.** |
| ein Ergebnis | perfektiv | **уже** als „fertig“, **наконец**, eine Frist | **Она подготовилась.** **К пятнице она подготовится.** |
| einen Schritt in einer Kette | perfektiv | **потом**, **затем** | **Она закрыла книгу и рассказала план.** |
| den Moment, in dem etwas klar wird | perfektiv | — | **Она поняла правило.** |

**Regel:** Lernen Sie das Paar als eine Einheit. Ein Präfix ist ein häufiger Weg zum Perfektiv. Manche Paare wechseln das Suffix.

| Imperfektiv | Perfektiv | Bedeutung |
|---|---|---|
| **читать** | **прочитать** | lesen |
| **писать** | **написать** | schreiben |
| **делать** | **сделать** | tun |
| **готовиться** | **подготовиться** | sich vorbereiten |
| **рассказывать** | **рассказать** | erzählen |
| **понимать** | **понять** | verstehen |
| **случаться** | **случиться** | geschehen |

**Понять** folgt **понимать** nicht Buchstabe für Buchstabe. Das Futur heißt **пойму, поймёшь, поймёт, поймём, поймёте, поймут**. Die Vergangenheit heißt **понял, поняла, поняло, поняли**.

**Regel:** Das Präsens gibt es nur im Imperfektiv. Es benutzt die Präsensendungen, die Sie schon kennen: **я готовлюсь**, **она читает**, **они рассказывают**. Eine perfektive Form mit diesen Endungen ist Futur. **Сейчас она готовится** heißt, dass sie sich jetzt vorbereitet. **Она подготовится** heißt, dass sie fertig vorbereitet sein wird.

**Regel:** Die Vergangenheit beider Aspekte benutzt die Vergangenheitsendungen. Sie richten sich nach Genus und Zahl, nicht nach der Person. Höfliches **вы** nimmt die Pluralzeile, auch wenn Sie einen einzelnen Dozenten anreden.

| Subjekt | Imperfektiv | Perfektiv |
|---|---|---|
| Maskulinum Singular | **готовился**, **читал** | **подготовился**, **прочитал** |
| Femininum Singular | **готовилась**, **читала** | **подготовилась**, **прочитала** |
| Plural, einschließlich höflichem **вы** | **готовились**, **читали** | **подготовились**, **прочитали** |

**-Ся** steht nach einem Konsonanten und **-сь** nach einem Vokal: **подготовился**, **подготовилась**, **подготовлюсь**.

**Regel:** Das imperfektive Futur ist **быть** im Futur plus der imperfektive Infinitiv. Das perfektive Futur ist ein Wort, mit Präsensendungen und futurischer Bedeutung.

| | **быть** | Imperfektives Futur | Perfektives Futur |
|---|---|---|---|
| **я** | **буду** | **буду читать** | **прочитаю** |
| **ты** | **будешь** | **будешь читать** | **прочитаешь** |
| **он / она** | **будет** | **будет читать** | **прочитает** |
| **мы** | **будем** | **будем читать** | **прочитаем** |
| **вы** | **будете** | **будете читать** | **прочитаете** |
| **они** | **будут** | **будут читать** | **прочитают** |

**Буду подготовиться** und **буду прочитать** sind keine Formen. Ein Ergebnis in der Zukunft ist das Perfektiv in einem Wort: **я подготовлюсь**, **я прочитаю**.

**Regel:** **Уже** wählt den Aspekt nicht. Mit dem Imperfektiv ist der Prozess schon im Gang. Mit dem Perfektiv ist das Ergebnis schon da.

- **Я уже читаю статью.** — Ich lese den Artikel schon.
- **Я уже прочитал статью.** — Ich habe den Artikel schon zu Ende gelesen.

**Regel:** **Не** plus Imperfektiv sagt, dass die Tätigkeit nicht stattgefunden hat. **Не** plus Perfektiv sagt, dass das Ergebnis nicht erreicht wurde.

- **Она не читала эту статью.** — Sie hat keine Zeit mit dem Lesen verbracht.
- **Она не прочитала статью.** — Sie hat sie nicht zu Ende gelesen.

Ein allgemeines Verbot benutzt den imperfektiven Imperativ: **Не разговаривайте на лекции.** Eine Warnung vor einem einzelnen unerwünschten Ergebnis kann das Perfektiv benutzen: **Не опоздайте на экзамен.**

**Regel:** Eine Erzählung wechselt die Aspekte. Hintergrund und Prozess bleiben imperfektiv. Die Ereignisse, die die Geschichte weiterführen, sind perfektiv.

**Вчера вечером Анна долго готовилась к семинару. Она читала текст и выписывала слова. Потом сосед позвонил и спросил, что случилось. Анна рассказала план и наконец подготовилась.**

**Готовилась**, **читала** und **выписывала** sind der Prozess. **Позвонил**, **спросил**, **случилось**, **рассказала** und **подготовилась** sind die Ereignisse und das Ergebnis.

### So verwendet man es
Stellen Sie zwei Fragen, in dieser Reihenfolge.

1. Prozess, Gewohnheit oder Hintergrund? Imperfektiv. Ergebnis oder ein abgeschlossener Schritt? Perfektiv.
2. Vergangenheit, Gegenwart oder Zukunft? Dann benutzen Sie die Tabelle. Wenn die Antwort Gegenwart ist, muss der Aspekt imperfektiv sein.

Ein Mann sagt **я читал** und **я прочитал**. Eine Frau sagt **я читала** und **я прочитала**. Eine Frage an einen Dozenten benutzt **вы** und **-ли**: **Вы прочитали текст?**

Für eine Frist benutzen Sie das Perfektiv und **к** plus Dativ: **К пятнице я подготовлюсь.** Für einen wiederholten Plan benutzen Sie **буду** plus Imperfektiv: **Каждый день я буду готовиться.**

### Beispiele
- **Он долго готовился к экзамену.** — Er hat sich lange vorbereitet.
- **Он подготовился к экзамену.** — Er ist mit der Vorbereitung fertig geworden.
- **Сейчас она готовится.** — Sie bereitet sich gerade vor.
- **Каждый день я буду готовиться.** — Ich werde mich jeden Tag vorbereiten.
- **К пятнице я подготовлюсь.** — Bis Freitag werde ich fertig vorbereitet sein.
- **Вчера я читал статью два часа.** — Gestern habe ich den Artikel zwei Stunden lang gelesen.
- **Вчера я прочитал статью.** — Gestern habe ich den Artikel zu Ende gelesen.
- **Когда я читал, позвонил преподаватель.** — Während ich las, rief der Dozent an.
- **Я уже прочитал текст.** — Ich habe den Text schon zu Ende gelesen.
- **Что случилось?** — Was ist passiert?
- **Расскажите, что случилось.** — Erzählen Sie, was passiert ist.
- **Вы поняли правило?** — Haben Sie die Regel verstanden? Höfliches **вы**.

### Typische Fehler
- **Я буду прочитать** und **буду подготовиться**. **Буду** nimmt einen imperfektiven Infinitiv. Ein Ergebnis heißt **прочитаю** oder **подготовлюсь**.
- **Я прочитаю** als „ich lese gerade“ lesen. Diese Form ist Futur. Der Prozess jetzt heißt **я читаю**.
- **Часто прочитал**, **долго прочитал**, **каждый день прочитаю**. Wiederholung und Dauer verlangen das Imperfektiv.
- **Она прочитал**, oder eine Frau sagt **я подготовился**. Die feminine Vergangenheit heißt **прочитала**, **подготовилась**.
- **Вы прочитал** zu einem Dozenten. Höfliches **вы** nimmt **прочитали**, **подготовились**.
- Ein Aspekt für die ganze Erzählung. Der Hintergrund will das Imperfektiv, die Schritte der Handlung wollen das Perfektiv.
- **Поняю** als Futur von **понять**. Die Form heißt **пойму**.

### Wenn Ihre Sprache Deutsch ist
Deutsch hat keinen Aspekt als Paar. Das Perfekt ist in der gesprochenen Sprache die normale Vergangenheit, nicht das russische Perfektiv. *Ich habe zwei Stunden gelesen* heißt **я читал два часа**. *Ich habe den Artikel zu Ende gelesen* heißt **я прочитал статью**. Die deutsche Form kann gleich aussehen. Der russische Aspekt wechselt.

*Ich werde lesen* sagt nicht, ob das Lesen abgeschlossen wird. **Буду читать** ist Prozess oder Gewohnheit. **Прочитаю** ist das Ergebnis. *Während ich las, rief er an* liegt nah an **Когда я читал, он позвонил**. *Ich habe es schon gelesen* braucht kein eigenes Tempus. Die perfektive Vergangenheit plus **уже** übernimmt das: **Я уже прочитал**. Ein deutsches Präfix wie *durchlesen* erinnert an ein Aspektpaar, bildet aber kein Verb ohne Präsens. **Прочитаю** ist Zukunft, nicht „ich lese gerade“.

> 💡 Wenn „zwei Stunden lang“ oder „jeden Tag“ noch passt, nehmen Sie das Imperfektiv. Wenn der Satz „fertig“ oder „bis Freitag“ bedeutet, nehmen Sie das Perfektiv. **Буду** verbindet sich nur mit einem imperfektiven Infinitiv.

### Prüfen Sie sich
1. „Er hat sich lange vorbereitet“ und „er ist mit der Vorbereitung fertig“. Welche Vergangenheitsformen?
2. Welches Futur ist ein Ergebnis: **Я буду подготовиться** oder **Я подготовлюсь**?
3. In **Когда я читал статью, позвонил преподаватель**, welches Verb ist der Hintergrund?

**Antworten:** 1) **Он долго готовился.** **Он подготовился.** 2) **Я подготовлюсь.** 3) **читал**.`,
  },

  "ru-b1-motion-prefixes": {
    en: `## Prefixed verbs of motion

> **In this topic:** **по-**, **при-**, **у-**, **в-**, **вы-**, and **пере-** on **идти / ехать**, plus the imperfective partner for a habit.

### Why it matters
**Иду в деканат** means you are already on the way, on foot. **Пойду в деканат** means you have decided to set off. **Приду в деканат** means the arrival is the result. **Прихожу в деканат** means you arrive there as a habit. English *go* covers all four. Russian splits them by the verb, and it still splits walking from transport: **прийти** is on foot, **приехать** is by bus, car, or train.

A prefix on **идти** or **ехать** makes a perfective verb. That verb has no present. **Приду** and **приеду** are future. The habit and the process use a second verb: **приходить**, **приезжать**.

### The rule

**Rule:** Keep the unprefixed pair in mind. One direction, including “right now”, uses **идти** and **ехать**. A habit or a round trip with no prefix uses **ходить** and **ездить**.

| | On foot | By transport |
|---|---|---|
| One direction, including now | **идти** | **ехать** |
| Habit, round trip | **ходить** | **ездить** |

**Rule:** The prefix adds a direction or a result. On **идти / ехать** it also makes the verb perfective. Other prefixes exist. This chapter produces these six.

| Prefix | Meaning | On foot, perfective | By transport, perfective | Imperfective partner |
|---|---|---|---|---|
| **по-** | set off | **пойти** | **поехать** | none for this meaning |
| **при-** | arrive | **прийти** | **приехать** | **приходить / приезжать** |
| **у-** | leave, be gone | **уйти** | **уехать** | **уходить / уезжать** |
| **в-** | into | **войти** | **въехать** | **входить / въезжать** |
| **вы-** | out of | **выйти** | **выехать** | **выходить / выезжать** |
| **пере-** | across | **перейти** | **переехать** | **переходить / переезжать** |

**Пойти** says that the trip starts. It does not say that you arrived. **Прийти** and **приехать** say that you arrived. **Уйти** means you left and are away. **Выйти** means you came out of a room or a building. **Она вышла из аудитории и ушла в библиотеку** uses both: first the exit, then the departure.

**Rule:** The perfective future uses the present endings and means future. The past agrees in gender and number. Polite **вы** takes the plural past. Write **ё** where the stress sits on it. **Вышел** has no **ё**: the stress is on **вы**.

| Verb | **я / вы** future | Past m / f / pl | Polite imperative |
|---|---|---|---|
| **пойти** | **пойду / пойдёте** | **пошёл / пошла / пошли** | **пойдите** |
| **прийти** | **приду / придёте** | **пришёл / пришла / пришли** | **придите** |
| **уйти** | **уйду / уйдёте** | **ушёл / ушла / ушли** | **уйдите** |
| **войти** | **войду / войдёте** | **вошёл / вошла / вошли** | **войдите** |
| **выйти** | **выйду / выйдете** | **вышел / вышла / вышли** | **выйдите** |
| **перейти** | **перейду / перейдёте** | **перешёл / перешла / перешли** | **перейдите** |

| Verb | **я / вы** future | Past m / f / pl | Polite imperative |
|---|---|---|---|
| **поехать** | **поеду / поедете** | **поехал / поехала / поехали** | **поезжайте** |
| **приехать** | **приеду / приедете** | **приехал / приехала / приехали** | **приезжайте** |
| **уехать** | **уеду / уедете** | **уехал / уехала / уехали** | **уезжайте** |
| **въехать** | **въеду / въедете** | **въехал / въехала / въехали** | **въезжайте** |
| **выехать** | **выеду / выедете** | **выехал / выехала / выехали** | **выезжайте** |
| **переехать** | **перееду / переедете** | **переехал / переехала / переехали** | **переезжайте** |

The imperative of the **ехать** compounds is **-езжай / -езжайте**: **поезжайте**, **приезжайте**, **выезжайте**. **Въехать** and **въезжать** keep **ъ**, because the prefix is a consonant and the stem begins with **е**. **Выехать** has no **ъ**: **вы-** already ends in a vowel. **Войти** inserts **о**: **войти**, **войду**, **вошёл**.

**Rule:** The imperfective partner has a real present. Use it for a habit and for a process. The partner of **приехать** is **приезжать**, not a form of **ездить**.

| Imperfective | Present to produce | Habit |
|---|---|---|
| **приходить** | **прихожу, приходит, приходят** | **Каждый день он приходит к восьми часам.** |
| **приезжать** | **приезжаю, приезжает, приезжают** | **Мы часто приезжаем на автобусе.** |
| **входить** | **вхожу, входит, входят** | **Студенты входят в аудиторию.** |
| **выходить** | **выхожу, выходит, выходят** | **Она выходит из аудитории в два.** |

**Прихожу** and **вхожу** have **ж**, not **д**. One arrival tomorrow stays perfective: **Завтра он придёт к восьми часам.**

**Rule:** Direction and exit choose the case.

| Idea | Pattern | Example |
|---|---|---|
| into | **в** + accusative | **войти в аудиторию** |
| onto | **на** + accusative | **выйти на улицу** |
| out of | **из** + genitive | **выйти из аудитории** |
| off an event | **с** + genitive | **уйти с занятия** |
| towards a person | **к** + dative | **пойти к преподавателю** |
| by vehicle | **на** + prepositional | **приехать на автобусе** |
| on foot | adverb | **прийти пешком** |

A city of arrival is **в** plus accusative: **приехать в Ярославль**. “From the city” is **из** plus genitive: **уехать из Ярославля**.

### How to use it
Pick three things, in this order.

1. Foot or transport? **идти**-family or **ехать**-family.
2. Start, arrival, departure, into, out, or across? Choose the prefix.
3. One completed trip, or a habit? Perfective for one trip. Imperfective partner for a habit.

If you are already walking, you do not need **по-**: **Сейчас я иду в университет.** If you decide to leave in a minute, you do: **Сейчас я пойду в деканат.** A fixed plan on a timetable can stay in the present: **Завтра я иду в библиотеку.** **Пойду** is one departure, not the everyday timetable.

### Examples
- **Я пойду в деканат после пары.** — I will set off for the dean’s office after class.
- **Я поеду в университет в восемь часов.** — I will set off for the university at eight.
- **Сейчас мы едем на автобусе.** — We are on the bus now.
- **Друг уже приехал.** — A friend has already arrived.
- **Анна пришла пешком.** — Anna arrived on foot.
- **Она ушла с занятия рано.** — She left class early.
- **Войдите, пожалуйста.** — Come in.
- **Студенты вышли из аудитории.** — The students came out of the room.
- **Мы перешли дорогу у общежития.** — We crossed the road by the dormitory.
- **Каждый день он приходит к восьми часам.** — He arrives by eight every day.
- **Завтра он придёт к восьми.** — Tomorrow he will arrive by eight.
- **Автобус въехал во двор.** — The bus drove into the yard.

### Typical mistakes
- **Я пришёл на автобусе.** Arrival by transport is **приехал**. **Прийти** is on foot.
- **Я пошёл** used as “I arrived”. **Пошёл** means you set off. Arrival is **пришёл** or **приехал**.
- **Я буду пойти** and **буду приехать**. These verbs are perfective. The future is **пойду**, **приеду**.
- **Войти в аудитории**. The destination is accusative: **войти в аудиторию**.
- **Выйти в аудитории** or **выйти аудиторию**. “Out of” is **из** plus genitive: **выйти из аудитории**.
- **Приездить** and **приезжу**. The imperfective partner is **приезжать**: **приезжаю**.
- **Въехать** written without **ъ**, or **выйти** written with **ъ**.
- **Выйдёте** with **ё**. The stress is on **вы**: **выйдете**, **вышел**.

### If your language is English
*Go*, *come*, and *leave* do not say whether the trip is on foot. After the prefix, Russian still does: **прийти** and **приехать** are different arrivals. *I’ll go to the dean’s office* as a decision is **пойду**. *I’m going there now*, already on the way, is **иду** or **еду**. *I arrive at eight every day* is **прихожу** or **приезжаю**. *I’ll arrive at eight tomorrow* is **приду** or **приеду**.

*Go in* and *go out* are particles in English. Russian packs them into **в-** and **вы-**. *Out of the room* still needs **из** plus the genitive: **выйти из аудитории**. There is no present tense of **прийти**. *He has arrived* is a past perfective, **он пришёл** or **он приехал**, not a present form.

> 💡 Three questions: foot or bus, which prefix, one trip or a habit. **Пойду** sets off. **Приду / приеду** arrives once. **Прихожу / приезжаю** arrives as a habit.

### Check yourself
1. A friend arrived by bus. Which verb: **пришёл** or **приехал**?
2. You decide to set off for the dean’s office. Complete **Я ___ в деканат.**
3. They came out of the classroom. Complete **Они вышли ___ аудитории.**

**Answers:** 1) **приехал**. 2) **пойду**. 3) **из**.`,

    es: `## Verbos de movimiento con prefijos

> **En este tema:** **по-**, **при-**, **у-**, **в-**, **вы-** y **пере-** con **идти / ехать**, y el compañero imperfectivo para el hábito.

### Por qué importa
**Иду в деканат** significa que ya vas de camino, a pie. **Пойду в деканат** significa que decides salir. **Приду в деканат** significa que la llegada es el resultado. **Прихожу в деканат** significa que llegas allí por costumbre. El español *ir* cubre las cuatro. El ruso las separa con el verbo, y sigue separando caminar y transporte: **прийти** es a pie, **приехать** es en autobús, coche o tren.

Un prefijo sobre **идти** o **ехать** forma un verbo perfectivo. Ese verbo no tiene presente. **Приду** y **приеду** son futuro. El hábito y el proceso usan un segundo verbo: **приходить**, **приезжать**.

### La regla

**Regla:** Ten presente la pareja sin prefijo. Una dirección, incluido “ahora”, usa **идти** y **ехать**. Un hábito o un trayecto de ida y vuelta sin prefijo usa **ходить** y **ездить**.

| | A pie | En transporte |
|---|---|---|
| Una dirección, incluido ahora | **идти** | **ехать** |
| Hábito, ida y vuelta | **ходить** | **ездить** |

**Regla:** El prefijo añade una dirección o un resultado. Sobre **идти / ехать** además hace el verbo perfectivo. Hay otros prefijos. En este capítulo se producen estos seis.

| Prefijo | Sentido | A pie, perfectivo | En transporte, perfectivo | Compañero imperfectivo |
|---|---|---|---|---|
| **по-** | ponerse en camino | **пойти** | **поехать** | ninguno con este sentido |
| **при-** | llegar | **прийти** | **приехать** | **приходить / приезжать** |
| **у-** | irse, estar fuera | **уйти** | **уехать** | **уходить / уезжать** |
| **в-** | hacia dentro | **войти** | **въехать** | **входить / въезжать** |
| **вы-** | hacia fuera | **выйти** | **выехать** | **выходить / выезжать** |
| **пере-** | a través | **перейти** | **переехать** | **переходить / переезжать** |

**Пойти** dice que el trayecto empieza. No dice que llegaste. **Прийти** y **приехать** dicen que llegaste. **Уйти** significa que te fuiste y ya no estás. **Выйти** significa que saliste de una sala o de un edificio. **Она вышла из аудитории и ушла в библиотеку** usa los dos: primero la salida, después la marcha.

**Regla:** El futuro perfectivo usa las terminaciones de presente y significa futuro. El pasado concuerda en género y número. El **вы** de cortesía lleva el pasado plural. Escribe **ё** donde cae el acento. **Вышел** no lleva **ё**: el acento está en **вы**.

| Verbo | Futuro **я / вы** | Pasado m / f / pl | Imperativo de cortesía |
|---|---|---|---|
| **пойти** | **пойду / пойдёте** | **пошёл / пошла / пошли** | **пойдите** |
| **прийти** | **приду / придёте** | **пришёл / пришла / пришли** | **придите** |
| **уйти** | **уйду / уйдёте** | **ушёл / ушла / ушли** | **уйдите** |
| **войти** | **войду / войдёте** | **вошёл / вошла / вошли** | **войдите** |
| **выйти** | **выйду / выйдете** | **вышел / вышла / вышли** | **выйдите** |
| **перейти** | **перейду / перейдёте** | **перешёл / перешла / перешли** | **перейдите** |

| Verbo | Futuro **я / вы** | Pasado m / f / pl | Imperativo de cortesía |
|---|---|---|---|
| **поехать** | **поеду / поедете** | **поехал / поехала / поехали** | **поезжайте** |
| **приехать** | **приеду / приедете** | **приехал / приехала / приехали** | **приезжайте** |
| **уехать** | **уеду / уедете** | **уехал / уехала / уехали** | **уезжайте** |
| **въехать** | **въеду / въедете** | **въехал / въехала / въехали** | **въезжайте** |
| **выехать** | **выеду / выедете** | **выехал / выехала / выехали** | **выезжайте** |
| **переехать** | **перееду / переедете** | **переехал / переехала / переехали** | **переезжайте** |

El imperativo de los compuestos de **ехать** es **-езжай / -езжайте**: **поезжайте**, **приезжайте**, **выезжайте**. **Въехать** y **въезжать** conservan **ъ**, porque el prefijo es una consonante y el tema empieza por **е**. **Выехать** no lleva **ъ**: **вы-** ya termina en vocal. **Войти** inserta **о**: **войти**, **войду**, **вошёл**.

**Regla:** El compañero imperfectivo tiene presente de verdad. Úsalo para un hábito y para un proceso. El compañero de **приехать** es **приезжать**, no una forma de **ездить**.

| Imperfectivo | Presente que hay que producir | Hábito |
|---|---|---|
| **приходить** | **прихожу, приходит, приходят** | **Каждый день он приходит к восьми часам.** |
| **приезжать** | **приезжаю, приезжает, приезжают** | **Мы часто приезжаем на автобусе.** |
| **входить** | **вхожу, входит, входят** | **Студенты входят в аудиторию.** |
| **выходить** | **выхожу, выходит, выходят** | **Она выходит из аудитории в два.** |

**Прихожу** y **вхожу** llevan **ж**, no **д**. Una llegada de mañana sigue en perfectivo: **Завтра он придёт к восьми часам.**

**Regla:** La dirección y la salida eligen el caso.

| Idea | Modelo | Ejemplo |
|---|---|---|
| hacia dentro | **в** + acusativo | **войти в аудиторию** |
| hacia una superficie | **на** + acusativo | **выйти на улицу** |
| desde dentro | **из** + genitivo | **выйти из аудитории** |
| de un acto | **с** + genitivo | **уйти с занятия** |
| hacia una persona | **к** + dativo | **пойти к преподавателю** |
| en un vehículo | **на** + preposicional | **приехать на автобусе** |
| a pie | adverbio | **прийти пешком** |

Una ciudad de llegada es **в** más acusativo: **приехать в Ярославль**. “Desde la ciudad” es **из** más genitivo: **уехать из Ярославля**.

### Cómo se usa
Elige tres cosas, en este orden.

1. ¿A pie o en transporte? Familia de **идти** o familia de **ехать**.
2. ¿Salida, llegada, marcha, entrada, salida de un espacio o cruce? Elige el prefijo.
3. ¿Un viaje cerrado, o un hábito? Perfectivo para un viaje. Compañero imperfectivo para un hábito.

Si ya vas caminando, no hace falta **по-**: **Сейчас я иду в университет.** Si decides salir dentro de un minuto, sí: **Сейчас я пойду в деканат.** Un plan fijo en el horario puede quedar en presente: **Завтра я иду в библиотеку.** **Пойду** es una salida concreta, no el horario de cada día.

### Ejemplos
- **Я пойду в деканат после пары.** — Iré al decanato después de la clase.
- **Я поеду в университет в восемь часов.** — Saldré para la universidad a las ocho.
- **Сейчас мы едем на автобусе.** — Ahora vamos en el autobús.
- **Друг уже приехал.** — Un amigo ya llegó.
- **Анна пришла пешком.** — Anna llegó a pie.
- **Она ушла с занятия рано.** — Ella se fue de la clase temprano.
- **Войдите, пожалуйста.** — Pasen.
- **Студенты вышли из аудитории.** — Los estudiantes salieron del aula.
- **Мы перешли дорогу у общежития.** — Cruzamos la calle junto a la residencia.
- **Каждый день он приходит к восьми часам.** — Cada día llega sobre las ocho.
- **Завтра он придёт к восьми.** — Mañana llegará sobre las ocho.
- **Автобус въехал во двор.** — El autobús entró en el patio.

### Errores típicos
- **Я пришёл на автобусе.** Llegar en transporte es **приехал**. **Прийти** es a pie.
- **Я пошёл** con el sentido de “llegué”. **Пошёл** significa que saliste. La llegada es **пришёл** o **приехал**.
- **Я буду пойти** y **буду приехать**. Esos verbos son perfectivos. El futuro es **пойду**, **приеду**.
- **Войти в аудитории**. El destino va en acusativo: **войти в аудиторию**.
- **Выйти в аудитории** o **выйти аудиторию**. “Desde dentro” es **из** más genitivo: **выйти из аудитории**.
- **Приездить** y **приезжу**. El compañero imperfectivo es **приезжать**: **приезжаю**.
- **Въехать** sin **ъ**, o **выйти** con **ъ**.
- **Выйдёте** con **ё**. El acento está en **вы**: **выйдете**, **вышел**.

### Si tu lengua es el español
*Ir*, *venir*, *llegar*, *salir* y *entrar* se parecen a estos prefijos, y no dicen si el camino es a pie. *Llegó* puede ser **пришёл** o **приехал**. Hay que elegir el tema. *Entrar en el aula* se parece a **войти в аудиторию**, con acusativo en ruso. *Salir del aula* se parece a **выйти из аудитории**. *Irse* se parece a **уйти**. *Voy a ir* no se traduce con **буду** más **пойти**. El futuro del perfectivo es una palabra: **пойду**.

*Llego cada día a las ocho* es presente de hábito y en ruso pide el imperfectivo: **прихожу**. *Llegaré mañana a las ocho* es una llegada cerrada: **приду**. *Cada día* con **приду** junta un hábito y un perfectivo de una sola vez.

> 💡 Tres preguntas: a pie o autobús, qué prefijo, un viaje o un hábito. **Пойду** se pone en camino. **Приду / приеду** llega una vez. **Прихожу / приезжаю** llega por costumbre.

### Comprueba
1. Un amigo llegó en autobús. ¿Qué verbo: **пришёл** o **приехал**?
2. Decides salir hacia el decanato. Completa **Я ___ в деканат.**
3. Salieron del aula. Completa **Они вышли ___ аудитории.**

**Respuestas:** 1) **приехал**. 2) **пойду**. 3) **из**.`,

    de: `## Präfigierte Bewegungsverben

> **In diesem Thema:** **по-**, **при-**, **у-**, **в-**, **вы-** und **пере-** an **идти / ехать**, dazu der imperfektive Partner für eine Gewohnheit.

### Warum das wichtig ist
**Иду в деканат** heißt, dass Sie schon unterwegs sind, zu Fuß. **Пойду в деканат** heißt, dass Sie sich entschließen loszugehen. **Приду в деканат** heißt, dass die Ankunft das Ergebnis ist. **Прихожу в деканат** heißt, dass Sie dort gewohnheitsmäßig ankommen. Deutsch *gehen* deckt nicht alle vier, und es sagt auch nicht immer das Fahrzeug. Russisch trennt das weiter: **прийти** ist zu Fuß, **приехать** ist mit Bus, Auto oder Zug.

Ein Präfix an **идти** oder **ехать** macht ein perfektives Verb. Dieses Verb hat kein Präsens. **Приду** und **приеду** sind Futur. Gewohnheit und Prozess benutzen ein zweites Verb: **приходить**, **приезжать**.

### Die Regel

**Regel:** Behalten Sie das Paar ohne Präfix. Eine Richtung, einschließlich „jetzt“, benutzt **идти** und **ехать**. Eine Gewohnheit oder ein Hin-und-her ohne Präfix benutzt **ходить** und **ездить**.

| | Zu Fuß | Mit einem Fahrzeug |
|---|---|---|
| Eine Richtung, einschließlich jetzt | **идти** | **ехать** |
| Gewohnheit, Hin und her | **ходить** | **ездить** |

**Regel:** Das Präfix fügt eine Richtung oder ein Ergebnis hinzu. An **идти / ехать** macht es das Verb außerdem perfektiv. Weitere Präfixe gibt es. In diesem Kapitel bilden Sie diese sechs.

| Präfix | Bedeutung | Zu Fuß, perfektiv | Mit Fahrzeug, perfektiv | Imperfektiver Partner |
|---|---|---|---|---|
| **по-** | losgehen, losfahren | **пойти** | **поехать** | keiner in dieser Bedeutung |
| **при-** | ankommen | **прийти** | **приехать** | **приходить / приезжать** |
| **у-** | weggehen, fort sein | **уйти** | **уехать** | **уходить / уезжать** |
| **в-** | hinein | **войти** | **въехать** | **входить / въезжать** |
| **вы-** | hinaus | **выйти** | **выехать** | **выходить / выезжать** |
| **пере-** | hinüber | **перейти** | **переехать** | **переходить / переезжать** |

**Пойти** sagt, dass der Weg beginnt. Es sagt nicht, dass Sie angekommen sind. **Прийти** und **приехать** sagen, dass Sie angekommen sind. **Уйти** heißt, dass Sie weggegangen und fort sind. **Выйти** heißt, dass Sie aus einem Raum oder einem Gebäude herausgekommen sind. **Она вышла из аудитории и ушла в библиотеку** benutzt beide: zuerst der Ausgang, dann das Weggehen.

**Regel:** Das perfektive Futur benutzt die Präsensendungen und bedeutet Zukunft. Die Vergangenheit richtet sich nach Genus und Zahl. Höfliches **вы** nimmt die Pluralvergangenheit. Schreiben Sie **ё**, wo die Betonung darauf liegt. **Вышел** hat kein **ё**: die Betonung liegt auf **вы**.

| Verb | Futur **я / вы** | Vergangenheit m / f / pl | Höflicher Imperativ |
|---|---|---|---|
| **пойти** | **пойду / пойдёте** | **пошёл / пошла / пошли** | **пойдите** |
| **прийти** | **приду / придёте** | **пришёл / пришла / пришли** | **придите** |
| **уйти** | **уйду / уйдёте** | **ушёл / ушла / ушли** | **уйдите** |
| **войти** | **войду / войдёте** | **вошёл / вошла / вошли** | **войдите** |
| **выйти** | **выйду / выйдете** | **вышел / вышла / вышли** | **выйдите** |
| **перейти** | **перейду / перейдёте** | **перешёл / перешла / перешли** | **перейдите** |

| Verb | Futur **я / вы** | Vergangenheit m / f / pl | Höflicher Imperativ |
|---|---|---|---|
| **поехать** | **поеду / поедете** | **поехал / поехала / поехали** | **поезжайте** |
| **приехать** | **приеду / приедете** | **приехал / приехала / приехали** | **приезжайте** |
| **уехать** | **уеду / уедете** | **уехал / уехала / уехали** | **уезжайте** |
| **въехать** | **въеду / въедете** | **въехал / въехала / въехали** | **въезжайте** |
| **выехать** | **выеду / выедете** | **выехал / выехала / выехали** | **выезжайте** |
| **переехать** | **перееду / переедете** | **переехал / переехала / переехали** | **переезжайте** |

Der Imperativ der **ехать**-Komposita heißt **-езжай / -езжайте**: **поезжайте**, **приезжайте**, **выезжайте**. **Въехать** und **въезжать** behalten **ъ**, weil das Präfix auf einen Konsonanten endet und der Stamm mit **е** beginnt. **Выехать** hat kein **ъ**: **вы-** endet schon auf einen Vokal. **Войти** schiebt **о** ein: **войти**, **войду**, **вошёл**.

**Regel:** Der imperfektive Partner hat ein echtes Präsens. Benutzen Sie ihn für eine Gewohnheit und für einen Prozess. Der Partner von **приехать** ist **приезжать**, keine Form von **ездить**.

| Imperfektiv | Präsens, das Sie bilden | Gewohnheit |
|---|---|---|
| **приходить** | **прихожу, приходит, приходят** | **Каждый день он приходит к восьми часам.** |
| **приезжать** | **приезжаю, приезжает, приезжают** | **Мы часто приезжаем на автобусе.** |
| **входить** | **вхожу, входит, входят** | **Студенты входят в аудиторию.** |
| **выходить** | **выхожу, выходит, выходят** | **Она выходит из аудитории в два.** |

**Прихожу** und **вхожу** haben **ж**, nicht **д**. Eine Ankunft morgen bleibt perfektiv: **Завтра он придёт к восьми часам.**

**Regel:** Richtung und Verlassen wählen den Kasus.

| Idee | Muster | Beispiel |
|---|---|---|
| hinein | **в** + Akkusativ | **войти в аудиторию** |
| auf eine Fläche | **на** + Akkusativ | **выйти на улицу** |
| aus etwas heraus | **из** + Genitiv | **выйти из аудитории** |
| von einer Veranstaltung weg | **с** + Genitiv | **уйти с занятия** |
| zu einer Person | **к** + Dativ | **пойти к преподавателю** |
| mit einem Fahrzeug | **на** + Präpositiv | **приехать на автобусе** |
| zu Fuß | Adverb | **прийти пешком** |

Eine Stadt als Ziel ist **в** plus Akkusativ: **приехать в Ярославль**. „Aus der Stadt“ ist **из** plus Genitiv: **уехать из Ярославля**.

### So verwendet man es
Wählen Sie drei Dinge, in dieser Reihenfolge.

1. Zu Fuß oder mit einem Fahrzeug? Familie von **идти** oder Familie von **ехать**.
2. Aufbruch, Ankunft, Weggang, hinein, hinaus oder hinüber? Wählen Sie das Präfix.
3. Eine abgeschlossene Fahrt oder eine Gewohnheit? Perfektiv für eine Fahrt. Imperfektiver Partner für eine Gewohnheit.

Wenn Sie schon gehen, brauchen Sie **по-** nicht: **Сейчас я иду в университет.** Wenn Sie sich entschließen, gleich loszugehen, brauchen Sie es: **Сейчас я пойду в деканат.** Ein fester Plan im Stundenplan kann im Präsens bleiben: **Завтра я иду в библиотеку.** **Пойду** ist ein einzelner Aufbruch, nicht der alltägliche Plan.

### Beispiele
- **Я пойду в деканат после пары.** — Ich gehe nach der Stunde zum Dekanat los.
- **Я поеду в университет в восемь часов.** — Ich fahre um acht zur Universität los.
- **Сейчас мы едем на автобусе.** — Wir fahren jetzt mit dem Bus.
- **Друг уже приехал.** — Ein Freund ist schon angekommen.
- **Анна пришла пешком.** — Anna ist zu Fuß angekommen.
- **Она ушла с занятия рано.** — Sie hat die Stunde früh verlassen.
- **Войдите, пожалуйста.** — Kommen Sie herein.
- **Студенты вышли из аудитории.** — Die Studenten sind aus dem Hörsaal gekommen.
- **Мы перешли дорогу у общежития.** — Wir sind am Wohnheim über die Straße gegangen.
- **Каждый день он приходит к восьми часам.** — Jeden Tag kommt er gegen acht an.
- **Завтра он придёт к восьми.** — Morgen kommt er gegen acht an.
- **Автобус въехал во двор.** — Der Bus ist in den Hof gefahren.

### Typische Fehler
- **Я пришёл на автобусе.** Ankunft mit einem Fahrzeug heißt **приехал**. **Прийти** ist zu Fuß.
- **Я пошёл** in der Bedeutung „ich bin angekommen“. **Пошёл** heißt, dass Sie losgegangen sind. Die Ankunft heißt **пришёл** oder **приехал**.
- **Я буду пойти** und **буду приехать**. Diese Verben sind perfektiv. Das Futur heißt **пойду**, **приеду**.
- **Войти в аудитории**. Das Ziel steht im Akkusativ: **войти в аудиторию**.
- **Выйти в аудитории** oder **выйти аудиторию**. „Heraus aus“ ist **из** plus Genitiv: **выйти из аудитории**.
- **Приездить** und **приезжу**. Der imperfektive Partner heißt **приезжать**: **приезжаю**.
- **Въехать** ohne **ъ**, oder **выйти** mit **ъ**.
- **Выйдёте** mit **ё**. Die Betonung liegt auf **вы**: **выйдете**, **вышел**.

### Wenn Ihre Sprache Deutsch ist
Deutsche Präfixe helfen beim Erkennen: *losgehen* liegt nah an **пойти**, *ankommen* an **прийти / приехать**, *weggehen* an **уйти**, *hineingehen* an **войти**, *hinausgehen* an **выйти**. *Ankommen* sagt nicht, ob der Weg zu Fuß war. Den Stamm wählen Sie zusätzlich. Ein deutsches Präfix macht außerdem kein Verb ohne Präsens. *Ich komme morgen an* kann im Deutschen Präsens sein. **Приду** ist Futur. *Ich komme jeden Tag um acht an* ist eine Gewohnheit und heißt **прихожу**, nicht **приду**.

*In den Hörsaal* mit Akkusativ entspricht **войти в аудиторию**. *Aus dem Hörsaal* entspricht **выйти из аудитории**. *Ich werde losgehen* wird nicht als **буду пойти** gebaut. Das perfektive Futur ist ein Wort: **пойду**.

> 💡 Drei Fragen: zu Fuß oder Bus, welches Präfix, eine Fahrt oder eine Gewohnheit. **Пойду** bricht auf. **Приду / приеду** kommt einmal an. **Прихожу / приезжаю** kommt gewohnheitsmäßig an.

### Prüfen Sie sich
1. Ein Freund ist mit dem Bus angekommen. Welches Verb: **пришёл** oder **приехал**?
2. Sie entschließen sich, zum Dekanat loszugehen. Ergänzen Sie **Я ___ в деканат.**
3. Sie sind aus dem Hörsaal gekommen. Ergänzen Sie **Они вышли ___ аудитории.**

**Antworten:** 1) **приехал**. 2) **пойду**. 3) **из**.`,
  },

  "ru-b1-complex-sentences": {
    en: `## Complex sentences

> **In this topic:** **потому что**, **поэтому**, **чтобы**, **если**, **что**, and **который**, including the comma and the form of the verb.

### Why it matters
A B1 answer is rarely one clause. **Я опоздал** states a fact. **Я опоздал, потому что автобус не пришёл** gives the reason. **Я приехал, чтобы учиться** gives the purpose. **Это статья, которую я прочитал** points back to a noun. Each connector has its own verb form and its own comma. **Чтобы вы объясните** uses a future where Russian requires the past form, and the sentence fails.

### The rule

**Rule:** Put a comma before **потому что**, **поэтому**, **чтобы**, **если**, **что**, **когда**, and **который** when they join clauses. If the dependent clause comes first, the comma stands after it.

| Connector | Job | Verb after it | Example |
|---|---|---|---|
| **потому что** | reason | ordinary tense | **Я опоздал, потому что автобус не пришёл.** |
| **поэтому** | result | ordinary tense | **Автобус не пришёл, поэтому я опоздал.** |
| **что** | a fact | ordinary tense | **Я знаю, что он уже приехал.** |
| **если** | a real condition | future for a future situation | **Если будет время, мы встретимся.** |
| **когда** | time | aspect and tense as in a story | **Когда я приехал, лекция уже началась.** |
| **чтобы** | purpose or a wish | infinitive, or the past form | **Я приехал, чтобы учиться.** |
| **который** | which person or thing | agrees with its own role | **Это преподаватель, который ведёт грамматику.** |

**Потому что** and **поэтому** are two directions of the same story. Use one of them. **Я опоздал, потому что поэтому автобус не пришёл** stacks both and does not work. After **потому что** the words stay in ordinary order: subject, then verb. **Поэтому** also keeps ordinary order.

**Rule:** **Чтобы** contains **бы**. Do not add a second **бы**.

| Subjects | Form after **чтобы** | Example |
|---|---|---|
| the same person | infinitive | **Анна приехала, чтобы учиться.** |
| a different person | past form, any real time | **Я хочу, чтобы вы объяснили правило.** |
| a process you want from someone else | imperfective past form | **Преподаватель просит, чтобы мы готовились каждый день.** |
| a result you want | perfective | **Чтобы сдать экзамен, нужно готовиться.** |

The past form after **чтобы** is not past time. **Я хочу, чтобы вы объяснили** is a wish about what should happen. **Объясните** and **объясню** do not stand after **чтобы**. A negative purpose with the same subject uses **чтобы не** plus the infinitive: **Чтобы не опоздать, я выйду раньше.**

**Что** reports a fact: **Я знаю, что он приехал.** **Чтобы** reports a purpose or a desired situation: **Я хочу, чтобы он приехал.** **Что** does not change its form. **Который** does.

**Rule:** A real condition about the future uses **если** plus the future in the condition, and the future in the result. A habit uses the present in both: **Если я не понимаю слово, я спрашиваю.** **Если бы** plus the past form, and **бы** in the main clause, is an unreal condition: **Если бы у меня было время, я бы пришёл.** A real plan does not take that **бы**.

**Rule:** **Который** agrees with the noun in gender and number. Its case comes from its own job in the relative clause, not from the case of the noun in the main clause. The preposition stays in front of **который**.

| | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | **который** | **которая** | **которое** | **которые** |
| Genitive | **которого** | **которой** | **которого** | **которых** |
| Dative | **которому** | **которой** | **которому** | **которым** |
| Accusative | **которого** for a person, **который** for a thing | **которую** | **которое** | **которых** for people, **которые** for things |
| Instrumental | **которым** | **которой** | **которым** | **которыми** |
| Prepositional | **о котором** | **о которой** | **о котором** | **о которых** |

For a feminine noun, genitive, dative, instrumental, and prepositional all look like **которой**. The preposition shows the case: **без которой**, **к которой**, **с которой**, **о которой**.

Place **который** immediately after the noun.

- **Это преподаватель, который ведёт грамматику.** — He is the subject of **ведёт**, so nominative, even if you say **с преподавателем, который ведёт грамматику**.
- **Это статья, которую Анна прочитала.** — Accusative, the object of **прочитала**.
- **Это студент, которому я позвонил.** — Dative, the person **позвонил** requires.
- **Это словарь, без которого трудно заниматься.** — Genitive after **без**.
- **Это аудитория, в которой мы пишем тест.** — Prepositional after **в**.

### How to use it
Decide what the second clause does, then take the connector and the verb form from the table.

1. A reason: **потому что** plus an ordinary clause.
2. A result: **поэтому** plus an ordinary clause. Do not keep **потому что** in the same sentence.
3. A purpose with the same subject: **чтобы** plus the infinitive. With another subject: **чтобы** plus the past form.
4. A fact after “I know” or “I think”: **что**.
5. A noun you need to describe: **который**, gender from the noun, case from the role inside the clause.

A future condition is **Если будет время, я позвоню.** The future stands in the **если** clause as well.

### Examples
- **Я опоздал, потому что автобус не пришёл.** — I was late because the bus did not come.
- **Автобус не пришёл, поэтому я опоздал.** — The bus did not come, so I was late.
- **Анна приехала, чтобы учиться.** — Anna came in order to study.
- **Я хочу, чтобы вы объяснили правило.** — I want you to explain the rule.
- **Чтобы сдать экзамен, нужно готовиться.** — In order to pass the exam, one needs to prepare.
- **Если будет время, мы встретимся.** — If there is time, we will meet.
- **Если я не понимаю слово, я спрашиваю.** — If I do not understand a word, I ask.
- **Я думаю, что экзамен будет в пятницу.** — I think the exam will be on Friday.
- **Я знаю, что он уже приехал.** — I know that he has already arrived.
- **Это курс, который мне помогает.** — This is a course that helps me.
- **Это статья, которую я прочитал.** — This is the article that I read.
- **Когда я приехал, лекция уже началась.** — When I arrived, the lecture had already started.

### Typical mistakes
- **Потому что** and **поэтому** in one sentence. Choose one direction.
- **Чтобы вы объясните** or **чтобы я буду**. After a different subject the form is past: **чтобы вы объяснили**.
- A second **бы**: **чтобы бы**. **Чтобы** already contains it.
- **Я хочу, чтобы объяснить** when you want someone else to explain. The same subject takes the infinitive: **Я хочу объяснить.** Another subject takes **чтобы вы объяснили**.
- **Статья, который**. Feminine nominative is **которая**. The object is **которую**.
- **Студент, который я позвонил**. **Позвонить** takes the dative: **студент, которому я позвонил**.
- Copying the main-clause case onto **который**: **с преподавателем, с которым ведёт** when he is the subject. The subject is **который**.
- The preposition after the pronoun: **которой в мы пишем**. The preposition comes first: **в которой мы пишем**.
- **Если есть время, я позвоню** for one future plan. A real future condition uses the future: **Если будет время, я позвоню.**
- No comma between the clauses.

### If your language is English
*Because* and *so* split the way **потому что** and **поэтому** split. Use one. English keeps ordinary order after *because*, and Russian does too. *I came to study* is **Я приехал, чтобы учиться** when the subject is the same. *I want you to explain* does not stay an infinitive. Russian changes the verb: **Я хочу, чтобы вы объяснили**.

*Who* and *which* do not decline. **Который** does, and a preposition has to stand in front of it: *the room in which we write* is **аудитория, в которой мы пишем**. *If I have time, I will call* uses the present in the *if* clause. Russian uses the future in both clauses: **Если будет время, я позвоню.** *That* in *I know that he arrived* is **что**, and it does not change for case.

> 💡 Same subject and a purpose: **чтобы** plus the infinitive. Another subject: **чтобы** plus the past form. **Который** takes its gender from the noun and its case from its own role. Put a comma before the connector.

### Check yourself
1. Anna came in order to study. Complete **Анна приехала, ___ учиться.**
2. “I want you to explain the rule.” Which verb form follows **чтобы**?
3. “The article that Anna read.” Complete **Это статья, ___ Анна прочитала.**

**Answers:** 1) **чтобы**. 2) **объяснили**. 3) **которую**.`,

    es: `## Oraciones complejas

> **En este tema:** **потому что**, **поэтому**, **чтобы**, **если**, **что** y **который**, con la coma y la forma del verbo.

### Por qué importa
Una respuesta de B1 casi nunca es una sola cláusula. **Я опоздал** enuncia un hecho. **Я опоздал, потому что автобус не пришёл** da la causa. **Я приехал, чтобы учиться** da la finalidad. **Это статья, которую я прочитал** vuelve sobre un sustantivo. Cada conector tiene su forma verbal y su coma. **Чтобы вы объясните** pone un futuro donde el ruso pide la forma de pasado, y la frase no vale.

### La regla

**Regla:** Pon coma antes de **потому что**, **поэтому**, **чтобы**, **если**, **что**, **когда** y **который** cuando unen cláusulas. Si la cláusula dependiente va primero, la coma queda detrás de ella.

| Conector | Trabajo | Verbo que sigue | Ejemplo |
|---|---|---|---|
| **потому что** | causa | tiempo normal | **Я опоздал, потому что автобус не пришёл.** |
| **поэтому** | consecuencia | tiempo normal | **Автобус не пришёл, поэтому я опоздал.** |
| **что** | un hecho | tiempo normal | **Я знаю, что он уже приехал.** |
| **если** | una condición real | futuro si la situación es futura | **Если будет время, мы встретимся.** |
| **когда** | tiempo | aspecto y tiempo como en un relato | **Когда я приехал, лекция уже началась.** |
| **чтобы** | finalidad o deseo | infinitivo, o la forma de pasado | **Я приехал, чтобы учиться.** |
| **который** | qué persona o qué cosa | concuerda con su propio papel | **Это преподаватель, который ведёт грамматику.** |

**Потому что** y **поэтому** son dos direcciones de la misma historia. Usa uno. **Я опоздал, потому что поэтому автобус не пришёл** junta los dos y no funciona. Tras **потому что** el orden sigue siendo el normal: sujeto y después verbo. **Поэтому** también mantiene el orden normal.

**Regla:** **Чтобы** ya contiene **бы**. No añadas otro **бы**.

| Sujetos | Forma tras **чтобы** | Ejemplo |
|---|---|---|
| la misma persona | infinitivo | **Анна приехала, чтобы учиться.** |
| otra persona | forma de pasado, en cualquier tiempo real | **Я хочу, чтобы вы объяснили правило.** |
| un proceso que pides a otro | pasado imperfectivo | **Преподаватель просит, чтобы мы готовились каждый день.** |
| un resultado que quieres | perfectivo | **Чтобы сдать экзамен, нужно готовиться.** |

La forma de pasado tras **чтобы** no es tiempo pasado. **Я хочу, чтобы вы объяснили** es un deseo sobre lo que tiene que pasar. **Объясните** y **объясню** no van tras **чтобы**. Una finalidad negativa con el mismo sujeto usa **чтобы не** más infinitivo: **Чтобы не опоздать, я выйду раньше.**

**Что** informa de un hecho: **Я знаю, что он приехал.** **Чтобы** informa de una finalidad o de una situación deseada: **Я хочу, чтобы он приехал.** **Что** no cambia de forma. **Который** sí.

**Regla:** Una condición real sobre el futuro usa **если** más futuro en la condición, y futuro en el resultado. Un hábito usa presente en las dos partes: **Если я не понимаю слово, я спрашиваю.** **Если бы** más la forma de pasado, y **бы** en la principal, es una condición irreal: **Если бы у меня было время, я бы пришёл.** Un plan real no lleva ese **бы**.

**Regla:** **Который** concuerda con el sustantivo en género y número. Su caso sale de su propio papel en la relativa, no del caso del sustantivo en la principal. La preposición se queda delante de **который**.

| | Masculino | Femenino | Neutro | Plural |
|---|---|---|---|---|
| Nominativo | **который** | **которая** | **которое** | **которые** |
| Genitivo | **которого** | **которой** | **которого** | **которых** |
| Dativo | **которому** | **которой** | **которому** | **которым** |
| Acusativo | **которого** si es persona, **который** si es cosa | **которую** | **которое** | **которых** si son personas, **которые** si son cosas |
| Instrumental | **которым** | **которой** | **которым** | **которыми** |
| Preposicional | **о котором** | **о которой** | **о котором** | **о которых** |

En un sustantivo femenino, genitivo, dativo, instrumental y preposicional se ven como **которой**. La preposición muestra el caso: **без которой**, **к которой**, **с которой**, **о которой**.

Coloca **который** justo después del sustantivo.

- **Это преподаватель, который ведёт грамматику.** — Él es el sujeto de **ведёт**, así que va en nominativo, también en **с преподавателем, который ведёт грамматику**.
- **Это статья, которую Анна прочитала.** — Acusativo, objeto de **прочитала**.
- **Это студент, которому я позвонил.** — Dativo, el caso que pide **позвонил**.
- **Это словарь, без которого трудно заниматься.** — Genitivo tras **без**.
- **Это аудитория, в которой мы пишем тест.** — Preposicional tras **в**.

### Cómo se usa
Decide qué hace la segunda cláusula y toma de la tabla el conector y la forma verbal.

1. Una causa: **потому что** más una cláusula normal.
2. Una consecuencia: **поэтому** más una cláusula normal. No dejes **потому что** en la misma frase.
3. Una finalidad con el mismo sujeto: **чтобы** más infinitivo. Con otro sujeto: **чтобы** más la forma de pasado.
4. Un hecho tras “sé” o “creo”: **что**.
5. Un sustantivo que hay que describir: **который**, género del sustantivo, caso del papel dentro de la cláusula.

Una condición de futuro es **Если будет время, я позвоню.** El futuro va también en la cláusula con **если**.

### Ejemplos
- **Я опоздал, потому что автобус не пришёл.** — Llegué tarde porque el autobús no vino.
- **Автобус не пришёл, поэтому я опоздал.** — El autobús no vino, por eso llegué tarde.
- **Анна приехала, чтобы учиться.** — Anna vino para estudiar.
- **Я хочу, чтобы вы объяснили правило.** — Quiero que ustedes expliquen la regla.
- **Чтобы сдать экзамен, нужно готовиться.** — Para aprobar el examen hay que prepararse.
- **Если будет время, мы встретимся.** — Si hay tiempo, nos veremos.
- **Если я не понимаю слово, я спрашиваю.** — Si no entiendo una palabra, pregunto.
- **Я думаю, что экзамен будет в пятницу.** — Creo que el examen será el viernes.
- **Я знаю, что он уже приехал.** — Sé que él ya llegó.
- **Это курс, который мне помогает.** — Este es un curso que me ayuda.
- **Это статья, которую я прочитал.** — Este es el artículo que leí.
- **Когда я приехал, лекция уже началась.** — Cuando llegué, la clase ya había empezado.

### Errores típicos
- **Потому что** y **поэтому** en la misma frase. Elige una dirección.
- **Чтобы вы объясните** o **чтобы я буду**. Con otro sujeto la forma es de pasado: **чтобы вы объяснили**.
- Un segundo **бы**: **чтобы бы**. **Чтобы** ya lo contiene.
- **Я хочу, чтобы объяснить** cuando quieres que explique otra persona. El mismo sujeto lleva infinitivo: **Я хочу объяснить.** Otro sujeto lleva **чтобы вы объяснили**.
- **Статья, который**. El nominativo femenino es **которая**. El objeto es **которую**.
- **Студент, который я позвонил**. **Позвонить** pide dativo: **студент, которому я позвонил**.
- Copiar el caso de la principal en **который**: **с преподавателем, с которым ведёт** cuando él es el sujeto. El sujeto es **который**.
- La preposición detrás del pronombre: **которой в мы пишем**. La preposición va delante: **в которой мы пишем**.
- **Если есть время, я позвоню** para un plan futuro concreto. Una condición real de futuro usa futuro: **Если будет время, я позвоню.**
- Sin coma entre las cláusulas.

### Si tu lengua es el español
*Porque* y *por eso* se reparten como **потому что** y **поэтому**. Usa uno. El orden tras *porque* ya es normal, y el ruso también lo deja normal. *Vine para estudiar* es **Я приехал, чтобы учиться** si el sujeto es el mismo. Cuando el sujeto cambia, el español usa *para que* más subjuntivo: *quiero que explique*. El ruso no pone subjuntivo. Pone **чтобы** más la forma de pasado: **Я хочу, чтобы вы объяснили**. Esa forma no significa pasado.

*Que* de *sé que llegó* es **что** y no se declina. *Que* de *el artículo que leí* es **который**, y sí se declina: **статья, которую я прочитал**. *Si tengo tiempo, llamaré* lleva presente en la condición. El ruso pone futuro en las dos partes: **Если будет время, я позвоню.** *El aula en la que escribimos* coloca la preposición delante, igual que el ruso: **аудитория, в которой мы пишем**.

> 💡 El mismo sujeto y una finalidad: **чтобы** más infinitivo. Otro sujeto: **чтобы** más la forma de pasado. **Который** toma el género del sustantivo y el caso de su propio papel. Pon coma antes del conector.

### Comprueba
1. Anna vino para estudiar. Completa **Анна приехала, ___ учиться.**
2. “Quiero que explique la regla.” ¿Qué forma va tras **чтобы**?
3. “El artículo que Anna leyó.” Completa **Это статья, ___ Анна прочитала.**

**Respuestas:** 1) **чтобы**. 2) **объяснили**. 3) **которую**.`,

    de: `## Komplexe Sätze

> **In diesem Thema:** **потому что**, **поэтому**, **чтобы**, **если**, **что** und **который**, einschließlich Komma und Verbform.

### Warum das wichtig ist
Eine B1-Antwort ist selten ein einziger Teilsatz. **Я опоздал** nennt eine Tatsache. **Я опоздал, потому что автобус не пришёл** gibt den Grund. **Я приехал, чтобы учиться** gibt den Zweck. **Это статья, которую я прочитал** greift ein Substantiv wieder auf. Jeder Konnektor hat seine Verbform und sein Komma. **Чтобы вы объясните** setzt ein Futur an die Stelle, an der Russisch die Vergangenheitsform verlangt, und der Satz trägt nicht.

### Die Regel

**Regel:** Setzen Sie ein Komma vor **потому что**, **поэтому**, **чтобы**, **если**, **что**, **когда** und **который**, wenn sie Teilsätze verbinden. Steht der abhängige Satz vorn, steht das Komma hinter ihm.

| Konnektor | Aufgabe | Verb danach | Beispiel |
|---|---|---|---|
| **потому что** | Grund | gewöhnliches Tempus | **Я опоздал, потому что автобус не пришёл.** |
| **поэтому** | Folge | gewöhnliches Tempus | **Автобус не пришёл, поэтому я опоздал.** |
| **что** | eine Tatsache | gewöhnliches Tempus | **Я знаю, что он уже приехал.** |
| **если** | eine reale Bedingung | Futur bei einer zukünftigen Lage | **Если будет время, мы встретимся.** |
| **когда** | Zeit | Aspekt und Tempus wie in einer Erzählung | **Когда я приехал, лекция уже началась.** |
| **чтобы** | Zweck oder Wunsch | Infinitiv oder Vergangenheitsform | **Я приехал, чтобы учиться.** |
| **который** | welche Person oder Sache | richtet sich nach der eigenen Rolle | **Это преподаватель, который ведёт грамматику.** |

**Потому что** und **поэтому** sind zwei Richtungen derselben Geschichte. Benutzen Sie eines. **Я опоздал, потому что поэтому автобус не пришёл** stapelt beide und funktioniert nicht. Nach **потому что** bleibt die gewöhnliche Folge: Subjekt, dann Verb. **Поэтому** behält die gewöhnliche Folge ebenfalls.

**Regel:** **Чтобы** enthält schon **бы**. Setzen Sie kein zweites **бы** dazu.

| Subjekte | Form nach **чтобы** | Beispiel |
|---|---|---|
| dieselbe Person | Infinitiv | **Анна приехала, чтобы учиться.** |
| eine andere Person | Vergangenheitsform, für jede reale Zeit | **Я хочу, чтобы вы объяснили правило.** |
| ein Prozess, den Sie von jemand anderem wollen | imperfektive Vergangenheitsform | **Преподаватель просит, чтобы мы готовились каждый день.** |
| ein Ergebnis, das Sie wollen | perfektiv | **Чтобы сдать экзамен, нужно готовиться.** |

Die Vergangenheitsform nach **чтобы** ist keine Vergangenheitszeit. **Я хочу, чтобы вы объяснили** ist ein Wunsch darüber, was geschehen soll. **Объясните** und **объясню** stehen nicht nach **чтобы**. Ein negativer Zweck mit demselben Subjekt benutzt **чтобы не** plus Infinitiv: **Чтобы не опоздать, я выйду раньше.**

**Что** meldet eine Tatsache: **Я знаю, что он приехал.** **Чтобы** meldet einen Zweck oder eine gewünschte Lage: **Я хочу, чтобы он приехал.** **Что** verändert seine Form nicht. **Который** tut es.

**Regel:** Eine reale Bedingung über die Zukunft benutzt **если** plus Futur in der Bedingung und Futur im Ergebnis. Eine Gewohnheit benutzt in beiden Teilen das Präsens: **Если я не понимаю слово, я спрашиваю.** **Если бы** plus Vergangenheitsform, und **бы** im Hauptsatz, ist eine irreale Bedingung: **Если бы у меня было время, я бы пришёл.** Ein realer Plan nimmt dieses **бы** nicht.

**Regel:** **Который** richtet sich in Genus und Zahl nach dem Substantiv. Seinen Kasus nimmt es aus der eigenen Aufgabe im Relativsatz, nicht aus dem Kasus des Substantivs im Hauptsatz. Die Präposition bleibt vor **который**.

| | Maskulinum | Femininum | Neutrum | Plural |
|---|---|---|---|---|
| Nominativ | **который** | **которая** | **которое** | **которые** |
| Genitiv | **которого** | **которой** | **которого** | **которых** |
| Dativ | **которому** | **которой** | **которому** | **которым** |
| Akkusativ | **которого** bei einer Person, **который** bei einem Ding | **которую** | **которое** | **которых** bei Personen, **которые** bei Dingen |
| Instrumental | **которым** | **которой** | **которым** | **которыми** |
| Präpositiv | **о котором** | **о которой** | **о котором** | **о которых** |

Bei einem femininen Substantiv sehen Genitiv, Dativ, Instrumental und Präpositiv alle aus wie **которой**. Die Präposition zeigt den Kasus: **без которой**, **к которой**, **с которой**, **о которой**.

Setzen Sie **который** unmittelbar hinter das Substantiv.

- **Это преподаватель, который ведёт грамматику.** — Er ist das Subjekt von **ведёт**, also Nominativ, auch in **с преподавателем, который ведёт грамматику**.
- **Это статья, которую Анна прочитала.** — Akkusativ, Objekt von **прочитала**.
- **Это студент, которому я позвонил.** — Dativ, der Kasus, den **позвонил** verlangt.
- **Это словарь, без которого трудно заниматься.** — Genitiv nach **без**.
- **Это аудитория, в которой мы пишем тест.** — Präpositiv nach **в**.

### So verwendet man es
Entscheiden Sie, was der zweite Teilsatz tut, und nehmen Sie Konnektor und Verbform aus der Tabelle.

1. Ein Grund: **потому что** plus ein gewöhnlicher Teilsatz.
2. Eine Folge: **поэтому** plus ein gewöhnlicher Teilsatz. Lassen Sie **потому что** nicht im selben Satz stehen.
3. Ein Zweck mit demselben Subjekt: **чтобы** plus Infinitiv. Mit einem anderen Subjekt: **чтобы** plus Vergangenheitsform.
4. Eine Tatsache nach „ich weiß“ oder „ich denke“: **что**.
5. Ein Substantiv, das Sie beschreiben: **который**, Genus vom Substantiv, Kasus von der Rolle im Teilsatz.

Eine Zukunftsbedingung heißt **Если будет время, я позвоню.** Das Futur steht auch im **если**-Satz.

### Beispiele
- **Я опоздал, потому что автобус не пришёл.** — Ich kam zu spät, weil der Bus nicht gekommen ist.
- **Автобус не пришёл, поэтому я опоздал.** — Der Bus ist nicht gekommen, deshalb kam ich zu spät.
- **Анна приехала, чтобы учиться.** — Anna ist gekommen, um zu studieren.
- **Я хочу, чтобы вы объяснили правило.** — Ich möchte, dass Sie die Regel erklären.
- **Чтобы сдать экзамен, нужно готовиться.** — Um die Prüfung zu bestehen, muss man sich vorbereiten.
- **Если будет время, мы встретимся.** — Wenn Zeit ist, treffen wir uns.
- **Если я не понимаю слово, я спрашиваю.** — Wenn ich ein Wort nicht verstehe, frage ich.
- **Я думаю, что экзамен будет в пятницу.** — Ich denke, dass die Prüfung am Freitag ist.
- **Я знаю, что он уже приехал.** — Ich weiß, dass er schon angekommen ist.
- **Это курс, который мне помогает.** — Das ist ein Kurs, der mir hilft.
- **Это статья, которую я прочитал.** — Das ist der Artikel, den ich gelesen habe.
- **Когда я приехал, лекция уже началась.** — Als ich ankam, hatte die Vorlesung schon begonnen.

### Typische Fehler
- **Потому что** und **поэтому** in einem Satz. Wählen Sie eine Richtung.
- **Чтобы вы объясните** oder **чтобы я буду**. Bei einem anderen Subjekt steht die Vergangenheitsform: **чтобы вы объяснили**.
- Ein zweites **бы**: **чтобы бы**. **Чтобы** enthält es schon.
- **Я хочу, чтобы объяснить**, wenn eine andere Person erklären soll. Dasselbe Subjekt nimmt den Infinitiv: **Я хочу объяснить.** Ein anderes Subjekt nimmt **чтобы вы объяснили**.
- **Статья, который**. Das feminine Nominativ heißt **которая**. Das Objekt heißt **которую**.
- **Студент, который я позвонил**. **Позвонить** verlangt den Dativ: **студент, которому я позвонил**.
- Den Kasus des Hauptsatzes auf **который** kopieren: **с преподавателем, с которым ведёт**, wenn er das Subjekt ist. Das Subjekt heißt **который**.
- Die Präposition hinter dem Pronomen: **которой в мы пишем**. Die Präposition steht vorn: **в которой мы пишем**.
- **Если есть время, я позвоню** für einen konkreten Zukunftsplan. Eine reale Zukunftsbedingung benutzt das Futur: **Если будет время, я позвоню.**
- Kein Komma zwischen den Teilsätzen.

### Wenn Ihre Sprache Deutsch ist
*Weil* schickt das finite Verb ans Ende: *weil der Bus nicht gekommen ist*. Nach **потому что** bleibt die gewöhnliche Folge: **потому что автобус не пришёл**. *Deshalb* entspricht **поэтому** und lässt im Deutschen das Verb an zweiter Stelle. Russisch braucht diese Zweitstellung nicht als eigene Regel: **поэтому я опоздал**. *Um zu studieren* bei demselben Subjekt entspricht **чтобы** plus Infinitiv. *Damit Sie erklären* bei einem anderen Subjekt entspricht **чтобы** plus der Form auf **-л**: **чтобы вы объяснили**. Das deutsche Verb steht dabei am Ende. Das russische nicht.

*Dass* schickt das Verb ebenfalls ans Ende. Nach **что** bleibt die gewöhnliche Folge: **что он уже приехал**. Das Relativpronomen *der, die, das* wird dekliniert, und diese Gewohnheit hilft bei **который**. Auch im Deutschen steht die Präposition vor dem Pronomen: *der Raum, in dem wir schreiben* entspricht **аудитория, в которой мы пишем**. *Wenn ich Zeit habe, rufe ich an* kann im Deutschen Präsens in der Bedingung benutzen. Russisch setzt für einen konkreten Zukunftsplan das Futur in beide Teile: **Если будет время, я позвоню.**

> 💡 Dasselbe Subjekt und ein Zweck: **чтобы** plus Infinitiv. Ein anderes Subjekt: **чтобы** plus Vergangenheitsform. **Который** nimmt das Genus vom Substantiv und den Kasus von der eigenen Rolle. Setzen Sie ein Komma vor den Konnektor.

### Prüfen Sie sich
1. Anna ist gekommen, um zu studieren. Ergänzen Sie **Анна приехала, ___ учиться.**
2. „Ich möchte, dass Sie die Regel erklären.“ Welche Verbform folgt auf **чтобы**?
3. „Der Artikel, den Anna gelesen hat.“ Ergänzen Sie **Это статья, ___ Анна прочитала.**

**Antworten:** 1) **чтобы**. 2) **объяснили**. 3) **которую**.`,
  },

  "ru-b1-text-cohesion": {
    en: `## Text cohesion

> **In this topic:** order, addition, contrast, and reference, so a story reads as one text rather than a list of sentences.

### Why it matters
**Я приехала. Я опоздала. Я вошла. Преподаватель объяснял.** Every sentence is grammatical, and the text still sounds like a list. B1 asks for a chain: where and when, what was going on, what happened, what the result was. The chain uses connectors, pronouns, and the aspect you already choose. A connector does not replace the aspect. **Сначала** can open a process or an event. The verb still has to match.

### The rule

**Rule:** Tell the order with a small set of markers. They open the sentence, and they do not take a comma after them.

| Marker | Job | Example |
|---|---|---|
| **сначала** | the first step | **Сначала она вошла в аудиторию.** |
| **потом** | the next step, neutral | **Потом сосед пришёл.** |
| **затем** | the next step, a little more formal | **Затем она открыла тетрадь.** |
| **после этого** | the next step, pointing back | **После этого она прочитала статью.** |
| **наконец** | the last step of a longer chain | **Наконец она повторила слова.** |
| **в итоге** | the result or the evaluation | **В итоге она подготовилась к семинару.** |

**Наконец** closes a chain of several steps. It is a poor label for the second of two sentences. **В итоге** is the result, not just “then”.

**Rule:** Addition, contrast, and an example take a comma after the marker when it opens the sentence. **Однако** between two clauses takes a comma before it.

| Marker | Job | Example |
|---|---|---|
| **например** | an example | **Например, в тексте было правило о падежах.** |
| **кроме того** | one more fact | **Кроме того, она выписала десять слов.** |
| **также** | also | **Также она выписала слова.** |
| **однако** | but, between clauses | **Она опоздала, однако поняла тему.** |
| **с одной стороны** | the first view | **С одной стороны, она потеряла начало пары.** |
| **с другой стороны** | the other view | **С другой стороны, она поняла правило.** |
| **всё-таки** | even so | **В итоге она всё-таки поняла начало лекции.** |

**С одной стороны** needs **с другой стороны** in the same text. One half leaves the contrast open.

**Rule:** **Также**, **так же**, and **такой же** are three different words.

| Form | Job | Example |
|---|---|---|
| **также** | also | **Также она выписала слова.** |
| **так же** | in the same way | **Она готовилась так же, как вчера.** |
| **такой же** | the same, and it agrees | **Нужен такой же конспект.** **Такая же статья.** **Такое же правило.** |

**Rule:** Once a person or a thing is named, point back instead of repeating the full noun. **Он / она / они** replace a person. **Этот / эта / это / эти** plus a noun point back to a thing or a stretch of time. **Там** and **тогда** point back to a place and a time. **Поэтому** ties a decision to the sentence before it.

**Rule:** Aspect is part of the cohesion. Background and a process stay imperfective. The events that move the story, and the result, are perfective.

A list:

**Анна приехала в университет. Анна опоздала. Анна вошла в аудиторию. Преподаватель объяснял тему.**

The same events as one text:

**Вчера Анна приехала в университет и сразу поняла, что опоздала. Сначала она вошла в аудиторию и села. Преподаватель уже объяснял тему. Затем она открыла тетрадь и записала примеры. В итоге она всё-таки поняла начало лекции.**

**Объяснял** is the background. **Приехала**, **поняла**, **опоздала**, **вошла**, **села**, **открыла**, **записала** are the events. **Она** replaces **Анна** after the first sentence.

A second paragraph can point back:

**Вчера в общежитии сначала не работал интернет. Анна долго искала сеть и писала соседу. Потом сосед пришёл и помог. После этого она открыла статью и прочитала её. Например, в тексте было правило о падежах. Кроме того, она выписала десять новых слов. Наконец она повторила их вслух. В итоге она подготовилась к семинару. Этот вечер был полезным. Поэтому такой же порядок подходит и перед следующим семинаром.**

**Этот вечер** points back to the whole story. **Такой же порядок** points back to the sequence. A man telling the same dormitory story says **искал, писал, открыл, прочитал, выписал, повторил, подготовился**. **Интернет не работал**, **сосед пришёл**, and **вечер был** do not change with the speaker.

### How to use it
Build a short story in four moves.

1. Where and when: **вчера**, **в общежитии**, **в университете**.
2. What was going on: imperfective.
3. What happened, in order: **сначала**, **потом** or **затем**, **после этого**, **наконец**, with perfective verbs.
4. The result: **в итоге**, and one sentence with **этот** or **поэтому**.

Use **например** when you add a detail from inside the event. Use **кроме того** when you add a new fact. Use **с одной стороны** only when the other side follows.

### Examples
- **Сначала она открыла тетрадь.** — First she opened the notebook.
- **Затем мы обсудили тему.** — Then we discussed the topic.
- **После этого я прочитал статью.** — After that I finished the article.
- **Наконец я понял правило.** — Finally I understood the rule.
- **В итоге экзамен прошёл хорошо.** — In the end the exam went well.
- **Например, в тексте было правило о падежах.** — For example, the text had a rule about cases.
- **Кроме того, не было интернета.** — Besides, there was no internet.
- **Она опоздала, однако поняла тему.** — She was late, but she understood the topic.
- **Также она выписала слова.** — She also wrote the words out.
- **Она готовилась так же, как вчера.** — She prepared in the same way as yesterday.
- **Этот вечер был полезным.** — This evening was useful.

### Typical mistakes
- A list of correct sentences with no connector.
- **Наконец** on the second of two steps. Keep it for the close of a longer chain, and use **потом** in the middle.
- **В итоге** as a synonym of **потом**. **В итоге** gives the result.
- **С одной стороны** with no **с другой стороны**.
- Every verb perfective, so the text has no background. Or every verb imperfective, so nothing happens.
- The full noun in every sentence after the person is already clear. Use **он** or **она**.
- **Также** written for “in the same way”. That is **так же**. **Такой же** agrees with a noun.
- A comma after **сначала** or **в итоге** in the ordinary pattern **Сначала она вошла.**

### If your language is English
*First, then, after that, finally, in the end, for example, in addition, on the one hand, on the other hand* map closely onto this set. *Finally* is **наконец**, the last step. *In the end* as a result is **в итоге**. English can hold a paragraph together with *and then* alone. At B1 the Russian chain has to be visible, and the verbs still split into background and event.

*Also* is **также**. *In the same way* is **так же**, two words. *The same notebook* is **такой же конспект**, and the adjective agrees. *This evening* pointing back to the story you just told is **этот вечер**.

> 💡 Four moves: where and when, imperfective background, perfective steps with **сначала → затем → наконец**, then **в итоге**. Point back with **он / она** and **этот**.

### Check yourself
1. Put these in story order: **в итоге**, **сначала**, **затем**.
2. Which marker gives the result rather than the next step: **потом** or **в итоге**?
3. “She also wrote the words out” and “in the same way as yesterday”. Which forms: **также** or **так же**?

**Answers:** 1) **сначала**, **затем**, **в итоге**. 2) **в итоге**. 3) **Также она выписала слова.** **Так же, как вчера.**`,

    es: `## Cohesión del texto

> **En este tema:** orden, adición, contraste y referencia, para que un relato se lea como un texto y no como una lista de frases.

### Por qué importa
**Я приехала. Я опоздала. Я вошла. Преподаватель объяснял.** Cada frase está bien formada, y el texto sigue sonando a lista. B1 pide una cadena: dónde y cuándo, qué estaba pasando, qué ocurrió, cuál fue el resultado. La cadena usa conectores, pronombres y el aspecto que ya eliges. Un conector no sustituye al aspecto. **Сначала** puede abrir un proceso o un hecho. El verbo tiene que corresponder.

### La regla

**Regla:** Cuenta el orden con un grupo pequeño de marcas. Abren la frase y no llevan coma detrás.

| Marca | Trabajo | Ejemplo |
|---|---|---|
| **сначала** | el primer paso | **Сначала она вошла в аудиторию.** |
| **потом** | el paso siguiente, neutro | **Потом сосед пришёл.** |
| **затем** | el paso siguiente, un poco más formal | **Затем она открыла тетрадь.** |
| **после этого** | el paso siguiente, señalando hacia atrás | **После этого она прочитала статью.** |
| **наконец** | el último paso de una cadena larga | **Наконец она повторила слова.** |
| **в итоге** | el resultado o la valoración | **В итоге она подготовилась к семинару.** |

**Наконец** cierra una cadena de varios pasos. Queda pobre como etiqueta de la segunda de dos frases. **В итоге** es el resultado, no un simple “luego”.

**Regla:** La adición, el contraste y el ejemplo llevan coma detrás de la marca cuando abre la frase. **Однако** entre dos cláusulas lleva coma delante.

| Marca | Trabajo | Ejemplo |
|---|---|---|
| **например** | un ejemplo | **Например, в тексте было правило о падежах.** |
| **кроме того** | un dato más | **Кроме того, она выписала десять слов.** |
| **также** | también | **Также она выписала слова.** |
| **однако** | pero, entre cláusulas | **Она опоздала, однако поняла тему.** |
| **с одной стороны** | la primera mirada | **С одной стороны, она потеряла начало пары.** |
| **с другой стороны** | la otra mirada | **С другой стороны, она поняла правило.** |
| **всё-таки** | aun así | **В итоге она всё-таки поняла начало лекции.** |

**С одной стороны** necesita **с другой стороны** en el mismo texto. Una sola mitad deja el contraste abierto.

**Regla:** **Также**, **так же** y **такой же** son tres palabras distintas.

| Forma | Trabajo | Ejemplo |
|---|---|---|
| **также** | también | **Также она выписала слова.** |
| **так же** | del mismo modo | **Она готовилась так же, как вчера.** |
| **такой же** | el mismo, y concuerda | **Нужен такой же конспект.** **Такая же статья.** **Такое же правило.** |

**Regla:** Cuando una persona o una cosa ya tiene nombre, señala hacia atrás en lugar de repetir el sustantivo entero. **Он / она / они** sustituyen a una persona. **Этот / эта / это / эти** más un sustantivo señalan una cosa o un tramo de tiempo. **Там** y **тогда** señalan un lugar y un tiempo. **Поэтому** ata una decisión a la frase anterior.

**Regla:** El aspecto forma parte de la cohesión. El fondo y el proceso quedan en imperfectivo. Los hechos que hacen avanzar el relato, y el resultado, van en perfectivo.

Una lista:

**Анна приехала в университет. Анна опоздала. Анна вошла в аудиторию. Преподаватель объяснял тему.**

Los mismos hechos como un texto:

**Вчера Анна приехала в университет и сразу поняла, что опоздала. Сначала она вошла в аудиторию и села. Преподаватель уже объяснял тему. Затем она открыла тетрадь и записала примеры. В итоге она всё-таки поняла начало лекции.**

**Объяснял** es el fondo. **Приехала**, **поняла**, **опоздала**, **вошла**, **села**, **открыла**, **записала** son los hechos. **Она** sustituye a **Анна** a partir de la primera frase.

Un segundo párrafo puede señalar hacia atrás:

**Вчера в общежитии сначала не работал интернет. Анна долго искала сеть и писала соседу. Потом сосед пришёл и помог. После этого она открыла статью и прочитала её. Например, в тексте было правило о падежах. Кроме того, она выписала десять новых слов. Наконец она повторила их вслух. В итоге она подготовилась к семинару. Этот вечер был полезным. Поэтому такой же порядок подходит и перед следующим семинаром.**

**Этот вечер** señala toda la historia. **Такой же порядок** señala la secuencia. Un hombre que cuenta la misma historia de la residencia dice **искал, писал, открыл, прочитал, выписал, повторил, подготовился**. **Интернет не работал**, **сосед пришёл** y **вечер был** no cambian con quien habla.

### Cómo se usa
Construye un relato corto en cuatro movimientos.

1. Dónde y cuándo: **вчера**, **в общежитии**, **в университете**.
2. Qué estaba pasando: imperfectivo.
3. Qué ocurrió, en orden: **сначала**, **потом** o **затем**, **после этого**, **наконец**, con verbos perfectivos.
4. El resultado: **в итоге**, y una frase con **этот** o **поэтому**.

Usa **например** cuando añades un detalle de dentro del hecho. Usa **кроме того** cuando añades un dato nuevo. Usa **с одной стороны** solo cuando sigue el otro lado.

### Ejemplos
- **Сначала она открыла тетрадь.** — Primero abrió el cuaderno.
- **Затем мы обсудили тему.** — Luego comentamos el tema.
- **После этого я прочитал статью.** — Después de eso terminé el artículo.
- **Наконец я понял правило.** — Por fin entendí la regla.
- **В итоге экзамен прошёл хорошо.** — Al final el examen salió bien.
- **Например, в тексте было правило о падежах.** — Por ejemplo, en el texto había una regla sobre los casos.
- **Кроме того, не было интернета.** — Además, no había internet.
- **Она опоздала, однако поняла тему.** — Llegó tarde, pero entendió el tema.
- **Также она выписала слова.** — También copió las palabras.
- **Она готовилась так же, как вчера.** — Se preparó del mismo modo que ayer.
- **Этот вечер был полезным.** — Esta tarde fue útil.

### Errores típicos
- Una lista de frases correctas sin conector.
- **Наконец** en el segundo de dos pasos. Guárdalo para cerrar una cadena más larga, y usa **потом** en el medio.
- **В итоге** como sinónimo de **потом**. **В итоге** da el resultado.
- **С одной стороны** sin **с другой стороны**.
- Todos los verbos en perfectivo, de modo que el texto no tiene fondo. O todos en imperfectivo, de modo que no ocurre nada.
- El sustantivo entero en cada frase cuando la persona ya está clara. Usa **он** u **она**.
- **Также** escrito para “del mismo modo”. Eso es **так же**. **Такой же** concuerda con un sustantivo.
- Una coma tras **сначала** o **в итоге** en el modelo normal **Сначала она вошла.**

### Si tu lengua es el español
*Primero, luego, después de eso, por fin, al final, por ejemplo, además, por un lado, por otro lado* se acercan a este grupo. *Por fin* es **наконец**, el último paso. *Al final* como resultado es **в итоге**. Un texto unido solo con *y entonces* queda tan flojo como una cadena de **и потом**. En B1 la cadena rusa tiene que verse, y los verbos siguen separados en fondo y hecho.

El imperfecto español ya te entrena para el fondo: *el profesor explicaba* se parece a **преподаватель объяснял**. El indefinido de un paso cerrado se parece al perfectivo: *abrió y apuntó* se parece a **открыла и записала**. *Leyó durante dos horas* sigue siendo la excepción que ya conoces: duración, imperfectivo. *También* es **также**. *Del mismo modo* es **так же**, en dos palabras. *El mismo cuaderno* es **такой же конспект**, con concordancia.

> 💡 Cuatro movimientos: dónde y cuándo, fondo imperfectivo, pasos perfectivos con **сначала → затем → наконец**, y después **в итоге**. Señala hacia atrás con **он / она** y **этот**.

### Comprueba
1. Ordena estas marcas como en un relato: **в итоге**, **сначала**, **затем**.
2. ¿Qué marca da el resultado y no el paso siguiente: **потом** o **в итоге**?
3. “También copió las palabras” y “del mismo modo que ayer”. ¿Qué formas: **также** o **так же**?

**Respuestas:** 1) **сначала**, **затем**, **в итоге**. 2) **в итоге**. 3) **Также она выписала слова.** **Так же, как вчера.**`,

    de: `## Textkohäsion

> **In diesem Thema:** Reihenfolge, Zusatz, Gegensatz und Rückverweis, damit eine Erzählung als ein Text lesbar ist und nicht als eine Liste von Sätzen.

### Warum das wichtig ist
**Я приехала. Я опоздала. Я вошла. Преподаватель объяснял.** Jeder Satz ist grammatisch, und der Text klingt trotzdem wie eine Liste. B1 verlangt eine Kette: wo und wann, was im Gang war, was geschah, was das Ergebnis war. Die Kette benutzt Konnektoren, Pronomen und den Aspekt, den Sie schon wählen. Ein Konnektor ersetzt den Aspekt nicht. **Сначала** kann einen Prozess oder ein Ereignis öffnen. Das Verb muss trotzdem passen.

### Die Regel

**Regel:** Erzählen Sie die Reihenfolge mit einer kleinen Gruppe von Markern. Sie eröffnen den Satz und nehmen kein Komma nach sich.

| Marker | Aufgabe | Beispiel |
|---|---|---|
| **сначала** | der erste Schritt | **Сначала она вошла в аудиторию.** |
| **потом** | der nächste Schritt, neutral | **Потом сосед пришёл.** |
| **затем** | der nächste Schritt, etwas förmlicher | **Затем она открыла тетрадь.** |
| **после этого** | der nächste Schritt, mit Rückverweis | **После этого она прочитала статью.** |
| **наконец** | der letzte Schritt einer längeren Kette | **Наконец она повторила слова.** |
| **в итоге** | das Ergebnis oder die Bewertung | **В итоге она подготовилась к семинару.** |

**Наконец** schließt eine Kette aus mehreren Schritten. Als Etikett für den zweiten von zwei Sätzen ist es schwach. **В итоге** ist das Ergebnis, nicht bloß „dann“.

**Regel:** Zusatz, Gegensatz und ein Beispiel nehmen ein Komma nach dem Marker, wenn er den Satz eröffnet. **Однако** zwischen zwei Teilsätzen nimmt ein Komma davor.

| Marker | Aufgabe | Beispiel |
|---|---|---|
| **например** | ein Beispiel | **Например, в тексте было правило о падежах.** |
| **кроме того** | eine weitere Tatsache | **Кроме того, она выписала десять слов.** |
| **также** | auch | **Также она выписала слова.** |
| **однако** | aber, zwischen Teilsätzen | **Она опоздала, однако поняла тему.** |
| **с одной стороны** | die erste Sicht | **С одной стороны, она потеряла начало пары.** |
| **с другой стороны** | die andere Sicht | **С другой стороны, она поняла правило.** |
| **всё-таки** | trotzdem | **В итоге она всё-таки поняла начало лекции.** |

**С одной стороны** braucht **с другой стороны** im selben Text. Eine Hälfte lässt den Gegensatz offen.

**Regel:** **Также**, **так же** und **такой же** sind drei verschiedene Wörter.

| Form | Aufgabe | Beispiel |
|---|---|---|
| **также** | auch | **Также она выписала слова.** |
| **так же** | auf dieselbe Weise | **Она готовилась так же, как вчера.** |
| **такой же** | derselbe, und es richtet sich | **Нужен такой же конспект.** **Такая же статья.** **Такое же правило.** |

**Regel:** Sobald eine Person oder eine Sache genannt ist, verweisen Sie zurück, statt das ganze Substantiv zu wiederholen. **Он / она / они** ersetzen eine Person. **Этот / эта / это / эти** plus Substantiv verweisen auf eine Sache oder eine Zeitspanne. **Там** und **тогда** verweisen auf einen Ort und eine Zeit. **Поэтому** bindet eine Entscheidung an den Satz davor.

**Regel:** Der Aspekt gehört zur Kohäsion. Hintergrund und Prozess bleiben imperfektiv. Die Ereignisse, die die Erzählung weiterführen, und das Ergebnis sind perfektiv.

Eine Liste:

**Анна приехала в университет. Анна опоздала. Анна вошла в аудиторию. Преподаватель объяснял тему.**

Dieselben Ereignisse als ein Text:

**Вчера Анна приехала в университет и сразу поняла, что опоздала. Сначала она вошла в аудиторию и села. Преподаватель уже объяснял тему. Затем она открыла тетрадь и записала примеры. В итоге она всё-таки поняла начало лекции.**

**Объяснял** ist der Hintergrund. **Приехала**, **поняла**, **опоздала**, **вошла**, **села**, **открыла**, **записала** sind die Ereignisse. **Она** ersetzt **Анна** nach dem ersten Satz.

Ein zweiter Absatz kann zurückverweisen:

**Вчера в общежитии сначала не работал интернет. Анна долго искала сеть и писала соседу. Потом сосед пришёл и помог. После этого она открыла статью и прочитала её. Например, в тексте было правило о падежах. Кроме того, она выписала десять новых слов. Наконец она повторила их вслух. В итоге она подготовилась к семинару. Этот вечер был полезным. Поэтому такой же порядок подходит и перед следующим семинаром.**

**Этот вечер** verweist auf die ganze Geschichte. **Такой же порядок** verweist auf die Abfolge. Ein Mann, der dieselbe Wohnheimgeschichte erzählt, sagt **искал, писал, открыл, прочитал, выписал, повторил, подготовился**. **Интернет не работал**, **сосед пришёл** und **вечер был** ändern sich nicht mit der sprechenden Person.

### So verwendet man es
Bauen Sie eine kurze Erzählung in vier Schritten.

1. Wo und wann: **вчера**, **в общежитии**, **в университете**.
2. Was im Gang war: imperfektiv.
3. Was geschah, der Reihe nach: **сначала**, **потом** oder **затем**, **после этого**, **наконец**, mit perfektiven Verben.
4. Das Ergebnis: **в итоге**, und ein Satz mit **этот** oder **поэтому**.

Benutzen Sie **например**, wenn Sie ein Detail aus dem Ereignis ergänzen. Benutzen Sie **кроме того**, wenn Sie eine neue Tatsache ergänzen. Benutzen Sie **с одной стороны** nur, wenn die andere Seite folgt.

### Beispiele
- **Сначала она открыла тетрадь.** — Zuerst hat sie das Heft aufgeschlagen.
- **Затем мы обсудили тему.** — Danach haben wir das Thema besprochen.
- **После этого я прочитал статью.** — Danach habe ich den Artikel zu Ende gelesen.
- **Наконец я понял правило.** — Schließlich habe ich die Regel verstanden.
- **В итоге экзамен прошёл хорошо.** — Am Ende ist die Prüfung gut verlaufen.
- **Например, в тексте было правило о падежах.** — Zum Beispiel stand im Text eine Regel über die Kasus.
- **Кроме того, не было интернета.** — Außerdem gab es kein Internet.
- **Она опоздала, однако поняла тему.** — Sie kam zu spät, hat das Thema aber verstanden.
- **Также она выписала слова.** — Sie hat die Wörter auch herausgeschrieben.
- **Она готовилась так же, как вчера.** — Sie hat sich genauso vorbereitet wie gestern.
- **Этот вечер был полезным.** — Dieser Abend war nützlich.

### Typische Fehler
- Eine Liste korrekter Sätze ohne Konnektor.
- **Наконец** beim zweiten von zwei Schritten. Heben Sie es für den Schluss einer längeren Kette auf, und benutzen Sie **потом** in der Mitte.
- **В итоге** als Synonym von **потом**. **В итоге** gibt das Ergebnis.
- **С одной стороны** ohne **с другой стороны**.
- Jedes Verb perfektiv, sodass der Text keinen Hintergrund hat. Oder jedes Verb imperfektiv, sodass nichts geschieht.
- Das volle Substantiv in jedem Satz, obwohl die Person schon klar ist. Benutzen Sie **он** oder **она**.
- **Также** für „auf dieselbe Weise“. Das heißt **так же**. **Такой же** richtet sich nach einem Substantiv.
- Ein Komma nach **сначала** oder **в итоге** im gewöhnlichen Muster **Сначала она вошла.**

### Wenn Ihre Sprache Deutsch ist
*Zuerst, dann, danach, schließlich, am Ende, zum Beispiel, außerdem, einerseits, andererseits* liegen nah an dieser Gruppe. *Schließlich* ist **наконец**, der letzte Schritt. *Am Ende* als Ergebnis ist **в итоге**. Nach *dann* stellt das Deutsche das Verb an die zweite Stelle: *Dann kam der Nachbar*. Russisch verlangt diese Stelle nicht als eigene Regel. **Потом сосед пришёл** ist ein gewöhnlicher Satz nach dem Marker.

Deutsch bindet den Text auch ohne Aspektpaar. Russisch braucht die Marker und zusätzlich den Wechsel von Hintergrund und Ereignis. *Auch* ist **также**. *Genauso* ist **так же**, in zwei Wörtern. *Dasselbe Heft* ist **такой же конспект**, mit Kongruenz. *Dieser Abend* als Rückverweis auf die erzählte Geschichte ist **этот вечер**.

> 💡 Vier Schritte: wo und wann, imperfektiver Hintergrund, perfektive Schritte mit **сначала → затем → наконец**, dann **в итоге**. Verweisen Sie mit **он / она** und **этот** zurück.

### Prüfen Sie sich
1. Bringen Sie diese Marker in Erzählreihenfolge: **в итоге**, **сначала**, **затем**.
2. Welcher Marker gibt das Ergebnis und nicht den nächsten Schritt: **потом** oder **в итоге**?
3. „Sie hat die Wörter auch herausgeschrieben“ und „genauso wie gestern“. Welche Formen: **также** oder **так же**?

**Antworten:** 1) **сначала**, **затем**, **в итоге**. 2) **в итоге**. 3) **Также она выписала слова.** **Так же, как вчера.**`,
  },

  "ru-b1-argumentation": {
    en: `## Argumentation and academic talk

> **In this topic:** a short opinion with a reason and an example, agreement and disagreement, and polite requests to a lecturer.

### Why it matters
**По-моему, это важно** is an opinion with no support. A B1 turn adds a reason and an example, then a conclusion. The same turn has to fit the room. A lecturer is **вы**: **Объясните, пожалуйста**, **Подскажите, пожалуйста**, **Я согласен с вами**. The speaker’s own gender still shows on **согласен / согласна** and on **понял / поняла**. Politeness does not turn those into a plural.

### The rule

**Rule:** Three opinion patterns take **что**. Three parenthetical patterns take a comma and no **что**.

| Pattern | **Что**? | Force | Example |
|---|---|---|---|
| **Я думаю, что…** | yes | neutral | **Я думаю, что короткий план полезнее.** |
| **Мне кажется, что…** | yes | softer | **Мне кажется, что это правило важно.** |
| **Я считаю, что…** | yes | firmer | **Я считаю, что так лучше.** |
| **По-моему, …** | no | direct | **По-моему, это важно.** |
| **На мой взгляд, …** | no | a little more formal | **На мой взгляд, это важно.** |
| **С моей точки зрения, …** | no | formal | **С моей точки зрения, это важно.** |

**По-моему, что это важно** stacks the two patterns. Use **По-моему, это важно** or **Я думаю, что это важно**.

**Rule:** Agreement and disagreement name the speaker’s gender. **С вами** is the polite address. **Я согласны** is not a polite form of “I agree”.

| Speaker | Agreement | Soft disagreement |
|---|---|---|
| A man | **Я согласен с вами.** | **Я так не думаю, потому что…** |
| A woman | **Я согласна с вами.** | **Я не совсем согласна, потому что…** |
| Either, same idea | **Я тоже так думаю.** | **С одной стороны, … С другой стороны, …** |

**Вы согласны?** asks whether the other person agrees. It is a question about **вы**, not a way for the speaker to say “I agree”.

**Rule:** A complete opinion has four steps.

| Step | Job | Pattern |
|---|---|---|
| 1 | position | **По-моему, …** or **Я считаю, что…** |
| 2 | reason | **потому что …** or **Во-первых, …** |
| 3 | example | **Например, …** |
| 4 | conclusion | **Поэтому я считаю, что…** |

**По-моему, лучше готовиться каждый день, чем одну ночь перед экзаменом. Во-первых, так материал не остаётся на последний вечер. Например, вчера я повторил только одну тему и понял её. Поэтому я считаю, что короткий план полезнее.**

A woman says **повторила** and **поняла**. The other clauses do not mark the speaker.

**Rule:** Requests to a lecturer use **вы**, **пожалуйста**, and a precise question. **Можно** plus an infinitive asks whether the action is acceptable. **Можно, я задам вопрос?** asks permission for your own next move, with a perfective future. **Можно я задать вопрос** mixes the two and is not the pattern.

| You need | Say |
|---|---|
| to open | **Можно задать вопрос?** |
| a repetition | **Я не понял это правило.** **Я не поняла это правило.** **Объясните, пожалуйста, ещё раз.** |
| information | **Подскажите, пожалуйста, где деканат?** **Подскажите, пожалуйста, когда консультация?** |
| a single sentence again | **Повторите, пожалуйста, последнее предложение.** |
| thanks | **Спасибо за объяснение.** |
| a written note | **Здравствуйте. Подскажите, пожалуйста, когда консультация. Спасибо.** |

In a message, **Вы** is often capitalized. In class the polite verb matters more than the capital: **объясните**, **подскажите**, **повторите**. **Объясни** is the **ты** form and does not belong in a question to a lecturer.

**Не понял / не поняла** is perfective: the result “it became clear” did not happen. **Не понимаю** is the state right now: **Я не понимаю это правило.** Both are usable. The past still agrees with the speaker, not with **вы**. **Я не поняли** is not the polite form.

**Вы не правы** is grammatical and sharp. In a seminar, open with the reason: **Я так не думаю, потому что примеры были другие.**

### How to use it
For an opinion, say the position in one clause, add **потому что** or **во-первых**, give **например** from your own week, and close with **поэтому**.

For a question in class, start with **Можно задать вопрос?** or go straight to **Подскажите, пожалуйста** plus the missing piece: where, when, or which case. If the rule did not land, say **Я не понял** or **Я не поняла**, then **Объясните, пожалуйста, ещё раз.**

A short exchange:

**— Можно задать вопрос?**

**— Да, конечно.**

**— Я не поняла это правило. Объясните, пожалуйста, ещё раз.**

A man says **Я не понял это правило** in the same place.

### Examples
- **По-моему, это важно.** — In my opinion, this is important.
- **Мне кажется, что этот пример яснее.** — It seems to me that this example is clearer.
- **Я думаю, что экзамен будет в пятницу.** — I think the exam will be on Friday.
- **Я согласна с вами.** — I agree with you. The speaker is a woman.
- **Я согласен с вами.** — I agree with you. The speaker is a man.
- **Я тоже так думаю.** — I think so too.
- **Я так не думаю, потому что примеры были другие.** — I do not think so, because the examples were different.
- **Можно задать вопрос?** — May I ask a question?
- **Подскажите, пожалуйста, где деканат?** — Could you tell me where the dean’s office is?
- **Объясните, пожалуйста, ещё раз.** — Please explain it once more.
- **Спасибо за объяснение.** — Thank you for the explanation.
- **Во-первых, так я не оставляю всё на последний вечер.** — First, that way I do not leave everything for the last evening.

### Typical mistakes
- **По-моему, что это важно.** Choose one pattern: **По-моему, это важно** or **Мне кажется, что это важно**.
- **Я согласен** from a woman, or **Я согласна** from a man. Match the speaker.
- **Я согласны** and **Я не поняли** as a polite “I”. Politeness sits in **вы**, **с вами**, and the plural imperative. The speaker’s own form stays singular.
- **Объясни**, **скажи**, or **ты не прав** to a lecturer. Use **объясните**, **подскажите**, and a reason.
- **Можно я задать вопрос.** Use **Можно задать вопрос?** or **Можно, я задам вопрос?**
- An opinion with no **потому что** and no **например**. The position needs a reason and one concrete case.
- **Вы не правы** as the first sentence to a lecturer. Start with **Я так не думаю, потому что…**

### If your language is English
*I think that* is **Я думаю, что**. *In my opinion* is **По-моему** or **На мой взгляд**, with a comma and without *that*. *I agree* has no gender in English. Russian marks the speaker: **согласен** or **согласна**. *Could you explain that again?* is softer than a bare imperative. The working classroom form is still the **вы** imperative plus **пожалуйста**: **Объясните, пожалуйста, ещё раз.** *Can I ask a question?* is **Можно задать вопрос?**

*I didn’t understand* needs the past and the speaker’s gender: **не понял** or **не поняла**. *I don’t understand* right now is **не понимаю**. A disagreement lands more easily with a reason, as with *I see, but…*: **Я так не думаю, потому что…**

> 💡 Position, reason, example, conclusion. **По-моему** has a comma and no **что**. To a lecturer: **вы**, **пожалуйста**, and **согласен / согласна** in your own gender.

### Check yourself
1. The speaker is a woman and she agrees with the lecturer. What does she say with **согласна**?
2. Give the clean version of “in my opinion this is important”, with **по-моему**.
3. Ask a lecturer to explain the rule once more.

**Answers:** 1) **Я согласна с вами.** 2) **По-моему, это важно.** 3) **Объясните, пожалуйста, ещё раз.**`,

    es: `## Argumentación y habla académica

> **En este tema:** una opinión breve con causa y ejemplo, el acuerdo y el desacuerdo, y las peticiones corteses a un profesor.

### Por qué importa
**По-моему, это важно** es una opinión sin apoyo. Un turno de B1 añade una causa y un ejemplo, y después una conclusión. El mismo turno tiene que caber en el aula. Un profesor es **вы**: **Объясните, пожалуйста**, **Подскажите, пожалуйста**, **Я согласен с вами**. El género de quien habla sigue viéndose en **согласен / согласна** y en **понял / поняла**. La cortesía no convierte esas formas en plural.

### La regla

**Regla:** Tres modelos de opinión llevan **что**. Tres modelos parentéticos llevan coma y no llevan **что**.

| Modelo | ¿**Что**? | Fuerza | Ejemplo |
|---|---|---|---|
| **Я думаю, что…** | sí | neutro | **Я думаю, что короткий план полезнее.** |
| **Мне кажется, что…** | sí | más suave | **Мне кажется, что это правило важно.** |
| **Я считаю, что…** | sí | más firme | **Я считаю, что так лучше.** |
| **По-моему, …** | no | directo | **По-моему, это важно.** |
| **На мой взгляд, …** | no | un poco más formal | **На мой взгляд, это важно.** |
| **С моей точки зрения, …** | no | formal | **С моей точки зрения, это важно.** |

**По-моему, что это важно** junta los dos modelos. Usa **По-моему, это важно** o **Я думаю, что это важно**.

**Regla:** El acuerdo y el desacuerdo nombran el género de quien habla. **С вами** es el trato de cortesía. **Я согласны** no es una forma cortés de “estoy de acuerdo”.

| Quien habla | Acuerdo | Desacuerdo suave |
|---|---|---|
| Un hombre | **Я согласен с вами.** | **Я так не думаю, потому что…** |
| Una mujer | **Я согласна с вами.** | **Я не совсем согласна, потому что…** |
| Cualquiera, la misma idea | **Я тоже так думаю.** | **С одной стороны, … С другой стороны, …** |

**Вы согласны?** pregunta si la otra persona está de acuerdo. Es una pregunta sobre **вы**, no una manera de decir “estoy de acuerdo”.

**Regla:** Una opinión completa tiene cuatro pasos.

| Paso | Trabajo | Modelo |
|---|---|---|
| 1 | postura | **По-моему, …** o **Я считаю, что…** |
| 2 | causa | **потому что …** o **Во-первых, …** |
| 3 | ejemplo | **Например, …** |
| 4 | conclusión | **Поэтому я считаю, что…** |

**По-моему, лучше готовиться каждый день, чем одну ночь перед экзаменом. Во-первых, так материал не остаётся на последний вечер. Например, вчера я повторил только одну тему и понял её. Поэтому я считаю, что короткий план полезнее.**

Una mujer dice **повторила** y **поняла**. Las otras cláusulas no marcan a quien habla.

**Regla:** Las peticiones a un profesor usan **вы**, **пожалуйста** y una pregunta precisa. **Можно** más infinitivo pregunta si la acción es aceptable. **Можно, я задам вопрос?** pide permiso para tu próximo movimiento, con futuro perfectivo. **Можно я задать вопрос** mezcla los dos y no es el modelo.

| Necesitas | Dices |
|---|---|
| abrir | **Можно задать вопрос?** |
| una repetición | **Я не понял это правило.** **Я не поняла это правило.** **Объясните, пожалуйста, ещё раз.** |
| información | **Подскажите, пожалуйста, где деканат?** **Подскажите, пожалуйста, когда консультация?** |
| una frase otra vez | **Повторите, пожалуйста, последнее предложение.** |
| gracias | **Спасибо за объяснение.** |
| una nota escrita | **Здравствуйте. Подскажите, пожалуйста, когда консультация. Спасибо.** |

En un mensaje, **Вы** suele ir en mayúscula. En clase pesa más el verbo de cortesía que la mayúscula: **объясните**, **подскажите**, **повторите**. **Объясни** es la forma de **ты** y no cabe en una pregunta a un profesor.

**Не понял / не поняла** es perfectivo: el resultado “quedó claro” no ocurrió. **Не понимаю** es el estado de ahora: **Я не понимаю это правило.** Las dos sirven. El pasado concuerda con quien habla, no con **вы**. **Я не поняли** no es la forma cortés.

**Вы не правы** es gramatical y cortante. En un seminario, abre con la causa: **Я так не думаю, потому что примеры были другие.**

### Cómo se usa
Para una opinión, di la postura en una cláusula, añade **потому что** o **во-первых**, da un **например** de tu propia semana y cierra con **поэтому**.

Para una pregunta en clase, empieza con **Можно задать вопрос?** o ve directo a **Подскажите, пожалуйста** más el dato que falta: dónde, cuándo o qué caso. Si la regla no quedó, di **Я не понял** o **Я не поняла**, y después **Объясните, пожалуйста, ещё раз.**

Un intercambio breve:

**— Можно задать вопрос?**

**— Да, конечно.**

**— Я не поняла это правило. Объясните, пожалуйста, ещё раз.**

Un hombre dice **Я не понял это правило** en el mismo sitio.

### Ejemplos
- **По-моему, это важно.** — En mi opinión, esto es importante.
- **Мне кажется, что этот пример яснее.** — Me parece que este ejemplo es más claro.
- **Я думаю, что экзамен будет в пятницу.** — Creo que el examen será el viernes.
- **Я согласна с вами.** — Estoy de acuerdo con usted. Habla una mujer.
- **Я согласен с вами.** — Estoy de acuerdo con usted. Habla un hombre.
- **Я тоже так думаю.** — Yo también lo creo.
- **Я так не думаю, потому что примеры были другие.** — Yo no lo creo, porque los ejemplos eran otros.
- **Можно задать вопрос?** — ¿Se puede hacer una pregunta?
- **Подскажите, пожалуйста, где деканат?** — ¿Me indica, por favor, dónde está el decanato?
- **Объясните, пожалуйста, ещё раз.** — Explique, por favor, otra vez.
- **Спасибо за объяснение.** — Gracias por la explicación.
- **Во-первых, так я не оставляю всё на последний вечер.** — En primer lugar, así no lo dejo todo para la última tarde.

### Errores típicos
- **По-моему, что это важно.** Elige un modelo: **По-моему, это важно** o **Мне кажется, что это важно**.
- **Я согласен** en boca de una mujer, o **Я согласна** en boca de un hombre. Tiene que coincidir quien habla.
- **Я согласны** y **Я не поняли** como un “yo” cortés. La cortesía está en **вы**, **с вами** y el imperativo plural. La forma de quien habla sigue en singular.
- **Объясни**, **скажи** o **ты не прав** a un profesor. Usa **объясните**, **подскажите** y una causa.
- **Можно я задать вопрос.** Usa **Можно задать вопрос?** o **Можно, я задам вопрос?**
- Una opinión sin **потому что** y sin **например**. La postura necesita una causa y un caso concreto.
- **Вы не правы** como primera frase a un profesor. Empieza con **Я так не думаю, потому что…**

### Si tu lengua es el español
*Creo que* es **Я думаю, что**. *Me parece que* es **Мне кажется, что**. *En mi opinión* es **По-моему**, con coma y sin *que*. *Estoy de acuerdo* no marca el género como el ruso. Hay que elegir **согласен** o **согласна**. *No estoy de acuerdo porque* es **Я так не думаю, потому что**.

*¿Puede explicar otra vez?* se parece al imperativo de **вы** con **пожалуйста**: **Объясните, пожалуйста, ещё раз.** El condicional *¿podría…?* es más almohadillado. En este nivel la almohadilla rusa es **пожалуйста** y **можно**, no un condicional. *¿Se puede hacer una pregunta?* es **Можно задать вопрос?** *No entendí* necesita pasado y género: **не понял** o **не поняла**. *No entiendo* ahora es **не понимаю**.

> 💡 Postura, causa, ejemplo, conclusión. **По-моему** lleva coma y no lleva **что**. Con un profesor: **вы**, **пожалуйста**, y **согласен / согласна** según quien habla.

### Comprueba
1. Habla una mujer y está de acuerdo con el profesor. ¿Qué dice con **согласна**?
2. Da la versión limpia de “en mi opinión esto es importante”, con **по-моему**.
3. Pide a un profesor que explique la regla otra vez.

**Respuestas:** 1) **Я согласна с вами.** 2) **По-моему, это важно.** 3) **Объясните, пожалуйста, ещё раз.**`,

    de: `## Argumentation und akademische Rede

> **In diesem Thema:** eine kurze Meinung mit Grund und Beispiel, Zustimmung und Widerspruch, und höfliche Bitten an einen Dozenten.

### Warum das wichtig ist
**По-моему, это важно** ist eine Meinung ohne Stütze. Ein B1-Beitrag fügt einen Grund und ein Beispiel hinzu, danach einen Schluss. Derselbe Beitrag muss in den Seminarraum passen. Ein Dozent ist **вы**: **Объясните, пожалуйста**, **Подскажите, пожалуйста**, **Я согласен с вами**. Das eigene Genus der sprechenden Person bleibt an **согласен / согласна** und an **понял / поняла** sichtbar. Höflichkeit macht daraus keinen Plural.

### Die Regel

**Regel:** Drei Meinungsmuster nehmen **что**. Drei parenthetische Muster nehmen ein Komma und kein **что**.

| Muster | **Что**? | Gewicht | Beispiel |
|---|---|---|---|
| **Я думаю, что…** | ja | neutral | **Я думаю, что короткий план полезнее.** |
| **Мне кажется, что…** | ja | weicher | **Мне кажется, что это правило важно.** |
| **Я считаю, что…** | ja | fester | **Я считаю, что так лучше.** |
| **По-моему, …** | nein | direkt | **По-моему, это важно.** |
| **На мой взгляд, …** | nein | etwas förmlicher | **На мой взгляд, это важно.** |
| **С моей точки зрения, …** | nein | förmlich | **С моей точки зрения, это важно.** |

**По-моему, что это важно** stapelt die zwei Muster. Benutzen Sie **По-моему, это важно** oder **Я думаю, что это важно**.

**Regel:** Zustimmung und Widerspruch nennen das Genus der sprechenden Person. **С вами** ist die höfliche Anrede. **Я согласны** ist keine höfliche Form von „ich stimme zu“.

| Wer spricht | Zustimmung | Weicher Widerspruch |
|---|---|---|
| Ein Mann | **Я согласен с вами.** | **Я так не думаю, потому что…** |
| Eine Frau | **Я согласна с вами.** | **Я не совсем согласна, потому что…** |
| Beide, dieselbe Idee | **Я тоже так думаю.** | **С одной стороны, … С другой стороны, …** |

**Вы согласны?** fragt, ob die andere Person zustimmt. Es ist eine Frage über **вы**, kein Weg für die sprechende Person, „ich stimme zu“ zu sagen.

**Regel:** Eine vollständige Meinung hat vier Schritte.

| Schritt | Aufgabe | Muster |
|---|---|---|
| 1 | Standpunkt | **По-моему, …** oder **Я считаю, что…** |
| 2 | Grund | **потому что …** oder **Во-первых, …** |
| 3 | Beispiel | **Например, …** |
| 4 | Schluss | **Поэтому я считаю, что…** |

**По-моему, лучше готовиться каждый день, чем одну ночь перед экзаменом. Во-первых, так материал не остаётся на последний вечер. Например, вчера я повторил только одну тему и понял её. Поэтому я считаю, что короткий план полезнее.**

Eine Frau sagt **повторила** und **поняла**. Die anderen Teilsätze markieren die sprechende Person nicht.

**Regel:** Bitten an einen Dozenten benutzen **вы**, **пожалуйста** und eine genaue Frage. **Можно** plus Infinitiv fragt, ob die Handlung annehmbar ist. **Можно, я задам вопрос?** bittet um Erlaubnis für den eigenen nächsten Schritt, mit perfektivem Futur. **Можно я задать вопрос** mischt die beiden Muster und ist keines.

| Sie brauchen | Sie sagen |
|---|---|
| einen Einstieg | **Можно задать вопрос?** |
| eine Wiederholung | **Я не понял это правило.** **Я не поняла это правило.** **Объясните, пожалуйста, ещё раз.** |
| eine Auskunft | **Подскажите, пожалуйста, где деканат?** **Подскажите, пожалуйста, когда консультация?** |
| einen Satz noch einmal | **Повторите, пожалуйста, последнее предложение.** |
| Dank | **Спасибо за объяснение.** |
| eine kurze Nachricht | **Здравствуйте. Подскажите, пожалуйста, когда консультация. Спасибо.** |

In einer Nachricht wird **Вы** oft großgeschrieben. Im Seminar wiegt das höfliche Verb mehr als der Großbuchstabe: **объясните**, **подскажите**, **повторите**. **Объясни** ist die **ты**-Form und gehört nicht in eine Frage an einen Dozenten.

**Не понял / не поняла** ist perfektiv: das Ergebnis „es ist klar geworden“ ist nicht eingetreten. **Не понимаю** ist der Zustand jetzt: **Я не понимаю это правило.** Beides ist brauchbar. Die Vergangenheit richtet sich nach der sprechenden Person, nicht nach **вы**. **Я не поняли** ist nicht die höfliche Form.

**Вы не правы** ist grammatisch und scharf. Im Seminar beginnen Sie mit dem Grund: **Я так не думаю, потому что примеры были другие.**

### So verwendet man es
Sagen Sie für eine Meinung den Standpunkt in einem Teilsatz, fügen Sie **потому что** oder **во-первых** hinzu, geben Sie ein **например** aus Ihrer eigenen Woche und schließen Sie mit **поэтому**.

Beginnen Sie eine Frage im Seminar mit **Можно задать вопрос?** oder gehen Sie direkt zu **Подскажите, пожалуйста** plus dem fehlenden Stück: wo, wann oder welcher Kasus. Wenn die Regel nicht angekommen ist, sagen Sie **Я не понял** oder **Я не поняла**, danach **Объясните, пожалуйста, ещё раз.**

Ein kurzer Wechsel:

**— Можно задать вопрос?**

**— Да, конечно.**

**— Я не поняла это правило. Объясните, пожалуйста, ещё раз.**

Ein Mann sagt an derselben Stelle **Я не понял это правило**.

### Beispiele
- **По-моему, это важно.** — Meiner Meinung nach ist das wichtig.
- **Мне кажется, что этот пример яснее.** — Mir scheint, dass dieses Beispiel klarer ist.
- **Я думаю, что экзамен будет в пятницу.** — Ich denke, dass die Prüfung am Freitag ist.
- **Я согласна с вами.** — Ich stimme Ihnen zu. Die sprechende Person ist eine Frau.
- **Я согласен с вами.** — Ich stimme Ihnen zu. Die sprechende Person ist ein Mann.
- **Я тоже так думаю.** — Das denke ich auch.
- **Я так не думаю, потому что примеры были другие.** — Das denke ich nicht, weil die Beispiele andere waren.
- **Можно задать вопрос?** — Darf ich eine Frage stellen?
- **Подскажите, пожалуйста, где деканат?** — Sagen Sie mir bitte, wo das Dekanat ist.
- **Объясните, пожалуйста, ещё раз.** — Erklären Sie es bitte noch einmal.
- **Спасибо за объяснение.** — Danke für die Erklärung.
- **Во-первых, так я не оставляю всё на последний вечер.** — Erstens lasse ich so nicht alles auf den letzten Abend liegen.

### Typische Fehler
- **По-моему, что это важно.** Wählen Sie ein Muster: **По-моему, это важно** oder **Мне кажется, что это важно**.
- **Я согласен** von einer Frau, oder **Я согласна** von einem Mann. Es muss zur sprechenden Person passen.
- **Я согласны** und **Я не поняли** als höfliches „ich“. Die Höflichkeit sitzt in **вы**, **с вами** und im Pluralimperativ. Die eigene Form bleibt im Singular.
- **Объясни**, **скажи** oder **ты не прав** zu einem Dozenten. Benutzen Sie **объясните**, **подскажите** und einen Grund.
- **Можно я задать вопрос.** Benutzen Sie **Можно задать вопрос?** oder **Можно, я задам вопрос?**
- Eine Meinung ohne **потому что** und ohne **например**. Der Standpunkt braucht einen Grund und einen konkreten Fall.
- **Вы не правы** als erster Satz an einen Dozenten. Beginnen Sie mit **Я так не думаю, потому что…**

### Wenn Ihre Sprache Deutsch ist
*Ich denke, dass* entspricht **Я думаю, что**, aber im Deutschen steht das Verb am Ende des *dass*-Satzes. Nach **что** bleibt die gewöhnliche Folge: **Я думаю, что экзамен будет в пятницу.** *Meiner Meinung nach* entspricht **По-моему** oder **На мой взгляд**, mit Komma und ohne *dass*. *Ich bin einverstanden* hat kein Genus. Russisch markiert die sprechende Person: **согласен** oder **согласна**. *Ich stimme Ihnen zu* liegt nah an **Я согласен с вами**: *Ihnen* ist der höfliche Dativ, **с вами** ist der Instrumental.

*Könnten Sie das noch einmal erklären?* ist eine Modalfrage. Die brauchbare Seminarform ist der höfliche Imperativ plus **пожалуйста**: **Объясните, пожалуйста, ещё раз.** *Darf ich eine Frage stellen?* entspricht **Можно задать вопрос?** *Ich habe es nicht verstanden* braucht die Vergangenheit und das Genus: **не понял** oder **не поняла**. *Ich verstehe es nicht* in diesem Moment ist **не понимаю**.

> 💡 Standpunkt, Grund, Beispiel, Schluss. **По-моему** hat ein Komma und kein **что**. Zu einem Dozenten: **вы**, **пожалуйста**, und **согласен / согласна** im eigenen Genus.

### Prüfen Sie sich
1. Die sprechende Person ist eine Frau und stimmt dem Dozenten zu. Was sagt sie mit **согласна**?
2. Geben Sie die saubere Fassung von „meiner Meinung nach ist das wichtig“, mit **по-моему**.
3. Bitten Sie einen Dozenten, die Regel noch einmal zu erklären.

**Antworten:** 1) **Я согласна с вами.** 2) **По-моему, это важно.** 3) **Объясните, пожалуйста, ещё раз.**`,
  },
};
