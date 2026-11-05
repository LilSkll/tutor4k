import type { InterfaceLanguage } from "@/types";

/**
 * EN / ES / DE pedagogical notes for Russian A1 grammar.
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
};
