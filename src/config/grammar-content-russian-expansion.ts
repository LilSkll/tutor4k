import type { InterfaceLanguage } from "@/types";

/**
 * EN / ES / DE notes for the nine chapters added at the end of each CEFR band.
 * Cyrillic stays in the examples. Meta-language is the interface language.
 */
export const RUSSIAN_GRAMMAR_CONTENT_EXPANSION: Partial<
  Record<string, Partial<Record<InterfaceLanguage, string>>>
> = {
  "ru-a1-classroom-survival": {
    en: `## Classroom phrases

> **In this topic:** permission and bans with **можно / нельзя**, and polite requests to a lecturer.

### Why it matters
A class is not a chat with a friend. You ask to leave, you ask for a repeat, and you say that you did not understand. The lecturer is **вы**. **Привет** is too familiar here.

### The rule
**Можно** and **нельзя** take an infinitive. They do not conjugate.

| You need | You say |
|---|---|
| permission | **Можно выйти?** **Можно вопрос?** |
| a ban | **Нельзя шуметь.** |
| a repeat | **Повторите, пожалуйста.** |
| a slower pace | **Говорите медленнее, пожалуйста.** |
| a note | **Запишите, пожалуйста.** |

**Я не понял** is what a man says about himself. **Я не поняла** is what a woman says. Learn both as fixed phrases. This chapter does not drill the past tense. Ask for the Russian wording with **Как это по-русски?**

### If your language is English
English *may I* and *you must not* are two different verbs. Russian uses **можно** and **нельзя** plus the same infinitive: **можно выйти**, **нельзя шуметь**. *Please repeat* to a lecturer is the **вы** form **повторите**, not the **ты** form **повтори**.

> **Можно** asks or allows. **Нельзя** forbids. Add **пожалуйста** to a request.`,
    es: `## Frases de aula

> **En este tema:** permiso y prohibición con **можно / нельзя**, y peticiones corteses al profesor.

### Por qué importa
La clase no es un chat con un amigo. Pides salir, pides una repetición y dices que no has entendido. Al profesor se le trata de **вы**. **Привет** suena demasiado familiar.

### La regla
**Можно** y **нельзя** van con infinitivo. No se conjugan.

| Necesitas | Dices |
|---|---|
| permiso | **Можно выйти?** **Можно вопрос?** |
| prohibición | **Нельзя шуметь.** |
| repetición | **Повторите, пожалуйста.** |
| más despacio | **Говорите медленнее, пожалуйста.** |
| una nota | **Запишите, пожалуйста.** |

**Я не понял** lo dice un hombre de sí mismo. **Я не поняла** lo dice una mujer. Son dos frases hechas: este capítulo no practica el pasado. La pregunta por la forma rusa es **Как это по-русски?**

### Si tu lengua es el español
*¿Puedo?* y *no se puede* caben en **можно** y **нельзя** más infinitivo: **можно выйти**, **нельзя шуметь**. *Repita, por favor* al profesor es **повторите**, no **повтори**.

> **Можно** pide o permite. **Нельзя** prohíbe. La petición lleva **пожалуйста**.`,
    de: `## Sätze für den Hörsaal

> **In diesem Thema:** Erlaubnis und Verbot mit **можно / нельзя** und höfliche Bitten an die Lehrperson.

### Warum es zählt
Die Stunde ist kein Chat mit einem Freund. Sie bitten, kurz hinauszugehen, um eine Wiederholung und sagen, dass Sie etwas nicht verstanden haben. Die Lehrperson ist **вы**. **Привет** ist hier zu vertraut.

### Die Regel
**Можно** und **нельзя** stehen mit dem Infinitiv. Sie werden nicht konjugiert.

| Sie brauchen | Sie sagen |
|---|---|
| Erlaubnis | **Можно выйти?** **Можно вопрос?** |
| Verbot | **Нельзя шуметь.** |
| Wiederholung | **Повторите, пожалуйста.** |
| langsameres Tempo | **Говорите медленнее, пожалуйста.** |
| eine Notiz | **Запишите, пожалуйста.** |

**Я не понял** sagt ein Mann über sich. **Я не поняла** sagt eine Frau. Das sind zwei feste Sätze, keine Vergangenheitslektion. Nach der russischen Form fragen Sie mit **Как это по-русски?**

### Wenn Ihre Sprache Deutsch ist
*Darf ich* und *man darf nicht* sind im Russischen **можно** und **нельзя** plus Infinitiv: **можно выйти**, **нельзя шуметь**. *Bitte wiederholen Sie* an die Lehrperson ist **повторите**, nicht **повтори**.

> **Можно** bittet oder erlaubt. **Нельзя** verbietet. Eine Bitte bekommt **пожалуйста**.`,
  },
  "ru-a2-services-invitations": {
    en: `## Services and invitations

> **In this topic:** booking by phone, moving a meeting, and answering an invitation.

### Why it matters
A clinic, a dean's office, and a tutor expect a softer request than a bare order. **Хотел бы / хотела бы** plus an infinitive does that job. A refusal without **к сожалению** sounds abrupt.

### The rule
| Move | Phrase |
|---|---|
| book | **Я хотел бы записаться на приём.** / **Я хотела бы записаться на приём.** |
| ask about time | **Во сколько вам удобно?** |
| say a time does not work | **Мне неудобно утром.** |
| invite | **Приглашаю вас** на встречу. |
| suggest | **Давайте встретимся** в библиотеке. |
| accept | **С удовольствием приду.** |
| refuse | **К сожалению, не смогу.** |

**Записаться на** takes the accusative: на приём, на консультацию. **Перенести на** also takes the accusative: на пятницу. A man says **хотел бы**. A woman says **хотела бы**. To a lecturer the pronoun is **вас**, not **тебя**.

### If your language is English
*I would like to* is **хотел бы / хотела бы**, and the gender is in the past-tense form, not in a separate pronoun. *Unfortunately I can't* starts with **к сожалению**, then the reason.

> Ask **во сколько вам удобно?** Confirm with **подтвердите запись**. Call back with **перезвоните**.`,
    es: `## Servicios e invitaciones

> **En este tema:** pedir cita por teléfono, aplazar una reunión y responder a una invitación.

### Por qué importa
Una clínica, un decanato y un tutor esperan una petición más suave que una orden seca. **Хотел бы / хотела бы** más infinitivo cumple ese papel. Un rechazo sin **к сожалению** suena brusco.

### La regla
| Paso | Frase |
|---|---|
| cita | **Я хотел бы записаться на приём.** / **Я хотела бы записаться на приём.** |
| hora | **Во сколько вам удобно?** |
| hora imposible | **Мне неудобно утром.** |
| invitar | **Приглашаю вас** на встречу. |
| proponer | **Давайте встретимся** в библиотеке. |
| aceptar | **С удовольствием приду.** |
| rechazar | **К сожалению, не смогу.** |

**Записаться на** pide acusativo. **Перенести на** también. Un hombre dice **хотел бы**. Una mujer dice **хотела бы**. Al profesor: **вас**, no **тебя**.

### Si tu lengua es el español
*Quisiera* es **хотел бы / хотела бы**: el género va en la forma de pasado. *Lamentablemente no podré* empieza por **к сожалению**.

> Pregunte **во сколько вам удобно?** Confirme con **подтвердите запись**.`,
    de: `## Dienstleistungen und Einladungen

> **In diesem Thema:** einen Termin am Telefon, ein Treffen verschieben und auf eine Einladung antworten.

### Warum es zählt
Klinik, Dekanat und Tutor erwarten eine weichere Bitte als einen kurzen Befehl. **Хотел бы / хотела бы** plus Infinitiv leistet das. Eine Absage ohne **к сожалению** klingt schroff.

### Die Regel
| Schritt | Phrase |
|---|---|
| Termin | **Я хотел бы записаться на приём.** / **Я хотела бы записаться на приём.** |
| Uhrzeit | **Во сколько вам удобно?** |
| passt nicht | **Мне неудобно утром.** |
| einladen | **Приглашаю вас** на встречу. |
| vorschlagen | **Давайте встретимся** в библиотеке. |
| annehmen | **С удовольствием приду.** |
| absagen | **К сожалению, не смогу.** |

**Записаться на** steht mit dem Akkusativ. **Перенести на** ebenfalls. Ein Mann sagt **хотел бы**, eine Frau **хотела бы**. Zur Lehrperson: **вас**, nicht **тебя**.

### Wenn Ihre Sprache Deutsch ist
*Ich würde gern* ist **хотел бы / хотела бы**: das Genus steckt in der Vergangenheitsform. *Leider kann ich nicht* beginnt mit **к сожалению**.

> Fragen Sie **во сколько вам удобно?** Bestätigen Sie mit **подтвердите запись**.`,
  },
  "ru-b1-government-verbs": {
    en: `## Verb government

> **In this topic:** the case that belongs to the verb, learned with the verb, not guessed from English.

### Why it matters
**Надеяться** is not *hope about*. **Готовиться** is not *prepare on*. The preposition and the case are part of the verb.

### The rule
| Verb | Case | Example |
|---|---|---|
| **зависеть от** | genitive | зависит **от подготовки** |
| **добиться** | genitive | добилась **успеха** |
| **избегать** | genitive | избегает **ошибок** |
| **отказаться от** | genitive | отказались **от темы** |
| **готовиться к** | dative | готовится **к экзамену** |
| **радоваться** | dative | радуется **успеху** |
| **следовать** | dative | следуйте **совету** |
| **мешать** | dative | мешает **соседу** |
| **привыкнуть к** | dative | привык **к расписанию** |
| **благодарить за** | accusative | благодарю **за помощь** |
| **надеяться на** | accusative | надеется **на стипендию** |
| **гордиться** | instrumental | гордимся **результатом** |
| **пользоваться** | instrumental | пользуется **словарём** |
| **участвовать в** | prepositional | участвует **в семинаре** |
| **нуждаться в** | prepositional | нуждается **в практике** |

**Надеяться на** takes the accusative, not the prepositional: **на стипендию**, not **на стипендии**. **Готовиться к экзамену** is the ordinary phrase for exam preparation.

### If your language is English
English *depend on, be proud of, prepare for, hope for* hide the case. Learn the Russian verb with its question: **от чего? чем? к чему? на что?**

> One verb, one government. Do not swap **на** and **о** after **надеяться**.`,
    es: `## Régimen verbal

> **En este tema:** el caso que pertenece al verbo, aprendido con el verbo, no adivinado desde el español.

### Por qué importa
**Надеяться** no es *esperar de* ni *sobre*. **Готовиться** no es *prepararse en*. La preposición y el caso forman parte del verbo.

### La regla
| Verbo | Caso | Ejemplo |
|---|---|---|
| **зависеть от** | genitivo | зависит **от подготовки** |
| **добиться** | genitivo | добилась **успеха** |
| **избегать** | genitivo | избегает **ошибок** |
| **отказаться от** | genitivo | отказались **от темы** |
| **готовиться к** | dativo | готовится **к экзамену** |
| **следовать** | dativo | следуйте **совету** |
| **мешать** | dativo | мешает **соседу** |
| **надеяться на** | acusativo | надеется **на стипендию** |
| **гордиться** | instrumental | гордимся **результатом** |
| **пользоваться** | instrumental | пользуется **словарём** |
| **нуждаться в** | preposicional | нуждается **в практике** |

**Надеяться на** pide acusativo: **на стипендию**, no **на стипендии**.

### Si tu lengua es el español
*Depender de, estar orgulloso de, prepararse para, esperar* esconden el caso. Aprenda el verbo con su pregunta: **от чего? чем? к чему? на что?**

> Un verbo, un régimen. No cambie **на** por **о** tras **надеяться**.`,
    de: `## Rektion

> **In diesem Thema:** der Kasus, der zum Verb gehört, mit dem Verb gelernt und nicht aus dem Deutschen erraten.

### Warum es zählt
**Надеяться** ist nicht *hoffen über*. **Готовиться** ist nicht *sich vorbereiten auf* mit **на**. Präposition und Kasus gehören zum Verb.

### Die Regel
| Verb | Kasus | Beispiel |
|---|---|---|
| **зависеть от** | Genitiv | зависит **от подготовки** |
| **добиться** | Genitiv | добилась **успеха** |
| **избегать** | Genitiv | избегает **ошибок** |
| **отказаться от** | Genitiv | отказались **от темы** |
| **готовиться к** | Dativ | готовится **к экзамену** |
| **следовать** | Dativ | следуйте **совету** |
| **мешать** | Dativ | мешает **соседу** |
| **надеяться на** | Akkusativ | надеется **на стипендию** |
| **гордиться** | Instrumental | гордимся **результатом** |
| **пользоваться** | Instrumental | пользуется **словарём** |
| **нуждаться в** | Präpositiv | нуждается **в практике** |

**Надеяться на** steht mit dem Akkusativ: **на стипендию**, nicht **на стипендии**.

### Wenn Ihre Sprache Deutsch ist
*abhängen von, stolz sein auf, sich vorbereiten auf, hoffen auf* verdecken den Kasus. Lernen Sie das Verb mit der Frage: **от чего? чем? к чему? на что?**

> Ein Verb, eine Rektion. Tauschen Sie **на** und **о** nach **надеяться** nicht.`,
  },
  "ru-b1-participle-preview": {
    en: `## Который and a short participle

> **In this topic:** a B1 bridge. **Который** stays the safe choice. A short participle replaces only a simple relative.

### Why it matters
B2 will ask for full participial phrases. Here you only see when a short one is legal, and when you should keep **который**.

### The rule
**Который** agrees with the noun in gender and number. Its case comes from its job inside the clause.

- **Студент, который читает статью.** Subject, nominative.
- **Статья, которую мы прочитали.** Object, accusative.
- **Преподаватель, которому я отправил черновик.** Dative.

A comma stands before **который**.

If **который** is the subject of a present-tense verb, a present active participle can replace it: **студент, который читает** → **читающий студент**.

If **который** is the object of a completed action, a past passive participle can replace it: **статья, которую прочитали** → **прочитанная статья**.

Put the participle before the noun when nothing depends on it. Put the phrase after the noun when there are extra words: **студент, читающий статью в архиве**. Do not put a comma between the participle and its object.

If the relative clause is heavy, keep **который**.

### If your language is English
*The student who is reading* can become **читающий студент**. *The article that was read* can become **прочитанная статья**. English *who / whom* is the same choice as the case of **который**.

> **Который** is always safe. The participle at B1 is only a short substitute.`,
    es: `## Который y un participio corto

> **En este tema:** un puente de B1. **Который** sigue siendo la opción segura. El participio corto solo sustituye un relativo simple.

### Por qué importa
En B2 vendrán los participios largos. Aquí solo se ve cuándo un participio corto es lícito y cuándo conviene dejar **который**.

### La regla
**Который** concuerda en género y número. El caso depende de su papel dentro de la subordinada.

- **Студент, который читает статью.** Sujeto, nominativo.
- **Статья, которую мы прочитали.** Objeto, acusativo.
- **Преподаватель, которому я отправил черновик.** Dativo.

Hay coma ante **который**.

Si **который** es sujeto en presente, cabe un participio activo: **читающий студент**. Si es objeto de una acción acabada, cabe un participio pasivo: **прочитанная статья**.

El participio va delante del sustantivo si no tiene complementos, y detrás si los tiene: **студент, читающий статью в архиве**. No ponga una coma entre el participio y su objeto. Si la frase pesa, deje **который**.

### Si tu lengua es el español
*El estudiante que lee* puede ser **читающий студент**. *El artículo leído* puede ser **прочитанная статья**. El caso de **который** hace el trabajo de *que / quien / a quien*.

> **Который** siempre es seguro. El participio en B1 es solo un atajo corto.`,
    de: `## Который und ein kurzes Partizip

> **In diesem Thema:** eine B1-Brücke. **Который** bleibt die sichere Wahl. Ein kurzes Partizip ersetzt nur einen einfachen Relativsatz.

### Warum es zählt
In B2 kommen volle Partizipialwendungen. Hier sehen Sie nur, wann eine kurze Wendung erlaubt ist und wann **который** bleiben soll.

### Die Regel
**Который** stimmt in Genus und Numerus mit dem Bezugswort überein. Der Kasus kommt aus der Rolle im Nebensatz.

- **Студент, который читает статью.** Subjekt, Nominativ.
- **Статья, которую мы прочитали.** Objekt, Akkusativ.
- **Преподаватель, которому я отправил черновик.** Dativ.

Vor **который** steht ein Komma.

Ist **который** Subjekt im Präsens, kann ein aktives Partizip der Gegenwart stehen: **читающий студент**. Ist es Objekt einer abgeschlossenen Handlung, kann ein passives Partizip der Vergangenheit stehen: **прочитанная статья**.

Das Partizip steht vor dem Substantiv, wenn nichts von ihm abhängt, und danach, wenn Ergänzungen da sind: **студент, читающий статью в архиве**. Kein Komma zwischen Partizip und Objekt. Wird der Satz schwer, bleibt **который**.

### Wenn Ihre Sprache Deutsch ist
*Der lesende Student* liegt nahe an **читающий студент**. *Der gelesene Artikel* liegt nahe an **прочитанная статья**. Der Kasus von **который** entspricht *der / den / dem*.

> **Который** ist immer sicher. Das Partizip auf B1 ist nur ein kurzer Ersatz.`,
  },
  "ru-b1-opinion-structures": {
    en: `## Opinion, agreement, disagreement

> **In this topic:** a frame for a view, then agreement or a polite refusal with a reason.

### Why it matters
A seminar turn that is only **нет** stops the talk. The frame names the view. The reason keeps the disagreement.

### The rule
| Frame | What follows |
|---|---|
| **По-моему**, | a short judgment |
| **На мой взгляд**, | the same, a little more formal |
| **Мне кажется, что** | a cautious claim |
| **Я полагаю, что** | a firmer claim |

Agreement: **Я согласен / согласна с вами.** **Вы правы.** **В какой-то степени** это так. The form **согласен** is masculine. **Согласна** is feminine. The government is **с** plus instrumental: **с вами**, **с тезисом**, not a bare dative **вам**.

Disagreement keeps a reason: **Трудно согласиться с выводом, потому что примера нет.** **Я не согласен, потому что…** Two sides use **с одной стороны** … **с другой стороны**.

### If your language is English
*In my view* is **на мой взгляд**. *It seems to me that* needs **что** after **мне кажется**. *I agree with you* is not *I agree you*.

> A frame is not an argument. After the frame, give the claim and, if you refuse, the reason.`,
    es: `## Opinión, acuerdo y desacuerdo

> **En este tema:** un marco para la opinión, y después el acuerdo o un rechazo cortés con motivo.

### Por qué importa
Una réplica que solo dice **нет** corta el seminario. El marco nombra la postura. El motivo sostiene el desacuerdo.

### La regla
| Marco | Qué sigue |
|---|---|
| **По-моему**, | un juicio corto |
| **На мой взгляд**, | lo mismo, un poco más formal |
| **Мне кажется, что** | una tesis cauta |
| **Я полагаю, что** | una tesis más firme |

Acuerdo: **Я согласен / согласна с вами.** **Вы правы.** **В какой-то степени** это так. **Согласен** es masculino. **Согласна** es femenino. El régimen es **с** más instrumental, no un dativo pelado.

Desacuerdo con motivo: **Трудно согласиться с выводом, потому что примера нет.** Dos lados: **с одной стороны** … **с другой стороны**.

### Si tu lengua es el español
*A mi juicio* es **на мой взгляд**. *Me parece que* pide **что** tras **мне кажется**. *Estoy de acuerdo con usted* no es un dativo sin **с**.

> El marco no es el argumento. Después va la tesis y, si hay rechazo, el motivo.`,
    de: `## Meinung, Zustimmung, Widerspruch

> **In diesem Thema:** ein Rahmen für die Meinung, dann Zustimmung oder ein höflicher Widerspruch mit Grund.

### Warum es zählt
Eine Wortmeldung, die nur **нет** ist, bricht das Seminar ab. Der Rahmen nennt die Haltung. Der Grund trägt den Widerspruch.

### Die Regel
| Rahmen | Was folgt |
|---|---|
| **По-моему**, | ein kurzes Urteil |
| **На мой взгляд**, | dasselbe, etwas förmlicher |
| **Мне кажется, что** | eine vorsichtige These |
| **Я полагаю, что** | eine festere These |

Zustimmung: **Я согласен / согласна с вами.** **Вы правы.** **В какой-то степени** это так. **Согласен** ist maskulin, **согласна** feminin. Die Rektion ist **с** plus Instrumental, nicht ein bloßer Dativ **вам**.

Widerspruch mit Grund: **Трудно согласиться с выводом, потому что примера нет.** Zwei Seiten: **с одной стороны** … **с другой стороны**.

### Wenn Ihre Sprache Deutsch ist
*Meiner Ansicht nach* ist **на мой взгляд**. *Mir scheint, dass* braucht **что** nach **мне кажется**. *Ich stimme Ihnen zu* ist hier **согласен с вами**, nicht ohne **с**.

> Der Rahmen ist nicht das Argument. Danach kommen These und, beim Widerspruch, der Grund.`,
  },
  "ru-b2-syntax-complexity": {
    en: `## Several subordinate clauses

> **In this topic:** one main clause and two subordinates, each with its own conjunction and its own comma.

### Why it matters
A reason, a purpose, and a concession can sit in one sentence. They collapse if both clauses start with the same **что**.

### The rule
| Question | Conjunction |
|---|---|
| why? | **потому что**, **вследствие того что** |
| for what purpose? | **для того чтобы** |
| on what condition? | **если**, **при условии что** |
| in spite of what? | **несмотря на то что** |
| after what? | **после того как** |
| which? | **который** |

A comma stands before each of these. **Чтобы** in a purpose clause is one word. Do not write **для того что** when you mean purpose.

Weak: *Я сказал, что я знаю, что правило трудное.*
Better: *Я сказал, что правило, **которое** объясняли вчера, трудное, **потому что** в нём два падежа.*

The main clause may stand first, in the middle, or last. The conjunction, not the position, sets the meaning.

*Я перенёс консультацию, **потому что** болел, **несмотря на то что** черновик был готов.*

### If your language is English
English can stack *because* and *even though* with commas. Russian does the same, and it also wants a comma before **который**. Two *that* clauses in a row should be split into **что** plus **который** or **потому что**.

> One conjunction, one clause. Do not glue two **что** when a different link is clearer.`,
    es: `## Varias subordinadas

> **En este tema:** una principal y dos subordinadas, cada una con su conjunción y su coma.

### Por qué importa
Causa, fin y concesión pueden vivir en una frase. Se rompen si las dos empiezan por el mismo **что**.

### La regla
| Pregunta | Conjunción |
|---|---|
| ¿por qué? | **потому что**, **вследствие того что** |
| ¿para qué? | **для того чтобы** |
| ¿con qué condición? | **если**, **при условии что** |
| ¿a pesar de qué? | **несмотря на то что** |
| ¿después de qué? | **после того как** |
| ¿cuál? | **который** |

Hay coma ante cada una. **Чтобы** de finalidad se escribe junto. No use **для того что** si la idea es un fin.

Débil: *Я сказал, что я знаю, что правило трудное.*
Mejor: *Я сказал, что правило, **которое** объясняли вчера, трудное.*

La principal puede ir al principio, en medio o al final. El sentido lo da la conjunción.

### Si tu lengua es el español
*Porque* y *aunque* se apilan con coma, igual que aquí. Dos *que* seguidos conviene abrirlos en **что** más **который** o **потому что**.

> Una conjunción, una subordinada. No pegue dos **что** si otro nexo es más claro.`,
    de: `## Mehrere Nebensätze

> **In diesem Thema:** ein Hauptsatz und zwei Nebensätze, jeder mit eigener Konjunktion und eigenem Komma.

### Warum es zählt
Grund, Zweck und Einräumung können in einem Satz stehen. Sie kippen, wenn beide mit demselben **что** anfangen.

### Die Regel
| Frage | Konjunktion |
|---|---|
| warum? | **потому что**, **вследствие того что** |
| wozu? | **для того чтобы** |
| unter welcher Bedingung? | **если**, **при условии что** |
| trotz was? | **несмотря на то что** |
| nachdem? | **после того как** |
| welches? | **который** |

Vor jeder steht ein Komma. **Чтобы** in einem Finalsatz ist ein Wort. **Для того что** ist kein Zwecksatz.

Schwach: *Я сказал, что я знаю, что правило трудное.*
Besser: *Я сказал, что правило, **которое** объясняли вчера, трудное, **потому что** в нём два падежа.*

Der Hauptsatz darf vorn, in der Mitte oder hinten stehen. Die Konjunktion setzt die Bedeutung, nicht die Position.

### Wenn Ihre Sprache Deutsch ist
*Weil* und *obwohl* stehen auch mit Komma. Zwei *dass* hintereinander sollten Sie in **что** plus **который** oder **потому что** teilen.

> Eine Konjunktion, ein Nebensatz. Kleben Sie nicht zwei **что** aneinander, wenn ein anderer Anschluss klarer ist.`,
  },
  "ru-b2-written-discourse": {
    en: `## Paragraph and cohesion

> **In this topic:** one microtheme per paragraph, one linker at the join, and a pronoun instead of a third repetition.

### Why it matters
A long block with three topics is not one paragraph. A linker without a fact is not cohesion. A sentence that drops its subject after **однако** breaks the thought.

### The rule
1. The **thematic sentence** names the microtheme.
2. The next sentences give an example or a limit.
3. The close ends that microtheme. A new microtheme starts a new paragraph.

| Job | Linker |
|---|---|
| add | **кроме того** |
| contrast | **однако** |
| exemplify | **например** |
| close | **таким образом** |

Do not stack all four with no content. Say the fact once: **Кроме того, в таблице нет второго шага.**

If **текст** is already the subject, the next sentence can use **он**: *Текст длинный. Однако **он** не показывает метод.* Without **он**, the second sentence hangs.

Paragraph order follows the task. The paragraph that states the conclusion does not come before the paragraph that supplies the evidence.

### If your language is English
English topic sentences and *however / in addition / for example / thus* map onto this frame. Russian still wants the subject back after **однако** when the verb would otherwise have none.

> One paragraph, one microtheme. One linker, then a fact. Replace a third repetition with **этот**, **такой**, or **он** when the link is clear.`,
    es: `## Párrafo y cohesión

> **En este tema:** una microtema por párrafo, un nexo en la juntura y un pronombre en lugar de la tercera repetición.

### Por qué importa
Un bloque con tres temas no es un párrafo. Un nexo sin hecho no es cohesión. Una frase que pierde el sujeto tras **однако** rompe la idea.

### La regla
1. La **oración temática** nombra la microtema.
2. Lo que sigue da un ejemplo o un límite.
3. El cierre termina esa microtema. Una microtema nueva abre un párrafo nuevo.

| Tarea | Nexo |
|---|---|
| añadir | **кроме того** |
| contrastar | **однако** |
| ejemplificar | **например** |
| cerrar | **таким образом** |

No amontone los cuatro sin contenido. *Текст длинный. Однако **он** не показывает метод.* Sin **он**, la segunda frase queda colgada.

El orden sigue la tarea: primero el material, después la conclusión.

### Si tu lengua es el español
La oración temática y *sin embargo / además / por ejemplo / así* caben en este marco. Tras **однако** el ruso sigue pidiendo sujeto si el verbo se quedaría solo.

> Un párrafo, una microtema. Un nexo y luego un hecho.`,
    de: `## Absatz und Kohäsion

> **In diesem Thema:** ein Mikrothema pro Absatz, ein Verknüpfungswort an der Fuge und ein Pronomen statt der dritten Wiederholung.

### Warum es zählt
Ein Block mit drei Themen ist kein Absatz. Ein Verknüpfungswort ohne Fakt ist keine Kohäsion. Ein Satz, der nach **однако** das Subjekt verliert, reißt den Gedanken ab.

### Die Regel
1. Der **Themensatz** nennt das Mikrothema.
2. Danach kommen Beispiel oder Grenze.
3. Der Schluss beendet dieses Mikrothema. Ein neues Mikrothema beginnt einen neuen Absatz.

| Aufgabe | Verknüpfung |
|---|---|
| ergänzen | **кроме того** |
| entgegensetzen | **однако** |
| ein Beispiel geben | **например** |
| schließen | **таким образом** |

Nicht alle vier ohne Inhalt stapeln. *Текст длинный. Однако **он** не показывает метод.* Ohne **он** hängt der zweite Satz.

Die Absatzfolge folgt der Aufgabe: erst das Material, dann der Schluss.

### Wenn Ihre Sprache Deutsch ist
Themensatz und *jedoch / außerdem / zum Beispiel / somit* passen auf diesen Rahmen. Nach **однако** braucht das Russische das Subjekt zurück, wenn das Verb sonst keines hätte.

> Ein Absatz, ein Mikrothema. Ein Verknüpfungswort, dann ein Fakt.`,
  },
  "ru-c1-critique-review": {
    en: `## Review and concession

> **In this topic:** name a strength, mark a limit with a concession, and do not cancel the judgment you just made.

### Why it matters
A review that only retells the paper is not an evaluation. A concession that says the refuted claim is also true fights itself.

### The rule
1. Name the object: article, talk, method.
2. **Следует отметить** what is done convincingly: **Автор убедительно показывает связь.**
3. Set the limit with **хотя**, **несмотря на**, **вместе с тем**, or **тем не менее**.
4. Say the limit in words: the conclusion is **недостаточно обоснован**, the sample is narrow, a step is missing.
5. **Заслуживает внимания** is not a mark of “excellent”. After it, name what deserves the look.

*Автор убедительно показывает связь вопроса и вида. Вместе с тем вывод обо всех типах текста недостаточно обоснован.*

Do not write *вывод снят, хотя это правда*. If the claim is withdrawn, do not concede that it is proved. **Вместе с тем** and **тем не менее** are the border, not a second verdict with no link.

A first-person past form agrees with the reviewer: **отметил / отметила**. The impersonal frame **следует отметить** needs no gender.

### If your language is English
*Although* and *at the same time* are concessions, not erasers. *Deserves attention* still needs the criterion. Do not stack praise and blame in one clause with no border word.

> A concession limits the judgment. It does not delete the strength that came before it.`,
    es: `## Reseña y concesión

> **En este tema:** nombrar un punto fuerte, marcar un límite con una concesión y no borrar el juicio que acaba de hacer.

### Por qué importa
Una reseña que solo cuenta el artículo no evalúa. Una concesión que dice que la tesis ya refutada también es verdadera se pelea consigo misma.

### La regla
1. Nombre el objeto: artículo, exposición, método.
2. **Следует отметить** lo que está hecho de modo convincente: **Автор убедительно показывает связь.**
3. Ponga el límite con **хотя**, **несмотря на**, **вместе с тем** o **тем не менее**.
4. Diga el límite: el вывод está **недостаточно обоснован**, la muestra es estrecha, falta un paso.
5. **Заслуживает внимания** no es un «excelente». Después hay que decir qué mirar.

No escriba *вывод снят, хотя это правда*. Si la tesis cae, no conceda que está demostrada.

La forma de pasado en primera persona concuerda con quien reseña: **отметил / отметила**. **Следует отметить** no pide género.

### Si tu lengua es el español
*Aunque* y *al mismo tiempo* conceden, no borran. *Merece atención* sigue pidiendo el criterio.

> La concesión limita el juicio. No borra el punto fuerte anterior.`,
    de: `## Rezension und Einräumung

> **In diesem Thema:** eine Stärke nennen, eine Grenze mit einer Einräumung markieren und das Urteil nicht gleich wieder löschen.

### Warum es zählt
Eine Rezension, die den Text nur nacherzählt, bewertet nicht. Eine Einräumung, die eine bereits widerlegte These zugleich für bewiesen erklärt, streitet mit sich selbst.

### Die Regel
1. Nennen Sie den Gegenstand: Artikel, Vortrag, Methode.
2. **Следует отметить**, was überzeugend gelingt: **Автор убедительно показывает связь.**
3. Setzen Sie die Grenze mit **хотя**, **несмотря на**, **вместе с тем** oder **тем не менее**.
4. Sagen Sie die Grenze: der Schluss ist **недостаточно обоснован**, die Stichprobe ist eng, ein Schritt fehlt.
5. **Заслуживает внимания** ist kein „ausgezeichnet“. Danach muss stehen, worauf zu sehen ist.

Schreiben Sie nicht *вывод снят, хотя это правда*. Wenn die These fällt, räumen Sie nicht ein, sie sei bewiesen.

Die Vergangenheitsform in der ersten Person stimmt mit der rezensierenden Person: **отметил / отметила**. **Следует отметить** braucht kein Genus.

### Wenn Ihre Sprache Deutsch ist
*Obwohl* und *zugleich* räumen ein, sie löschen nicht. *Verdient Aufmerksamkeit* braucht weiter das Kriterium.

> Die Einräumung begrenzt das Urteil. Sie streicht die Stärke davor nicht.`,
  },
  "ru-c1-academic-writing": {
    en: `## Academic frames

> **In this topic:** the shelves of a short paper or talk. Each shelf has to carry a fact. An empty linker is not a step.

### Why it matters
**Актуальность**, **цель**, **методы**, and **таким образом** are frames. If the frame has only adjectives such as *new* and *important*, the step is empty.

### The rule
| Step | Frame | What goes inside |
|---|---|---|
| why the topic | **Актуальность связана с тем, что…** | a concrete gap |
| why the paper | **Цель исследования —** | a result verb: показать, описать, сопоставить |
| how | **Методы** | what was compared |
| the border | **В рамках исследования** | what is left out |
| the basis | **На основании данных** | which material |
| the close | **Таким образом** | only a claim already shown |

**Во-первых** and **во-вторых** number two different reasons, not two wordings of one reason. **Следует подчеркнуть** highlights something already important. It does not open a new topic from nothing.

**Научная новизна** is not the sentence *the work is new*. If there is no novelty, drop the step rather than fill it with an adjective.

*Цель исследования — показать, какой вопрос различает эти формы. В рамках исследования устный семинар не рассматривается. Таким образом, формулы «процесс или результат» недостаточно.*

### If your language is English
*The aim of this paper is to show* matches **цель — показать**. *Thus* matches **таким образом** only when the evidence is already on the page. Do not open with *thus* and then announce that you will begin.

> A frame without content is empty. **Цель** names an action. **Таким образом** closes only what you have already shown.`,
    es: `## Marcos académicos

> **En este tema:** las baldas de un trabajo o una exposición breve. Cada balda lleva un hecho. Un nexo vacío no es un paso.

### Por qué importa
**Актуальность**, **цель**, **методы** y **таким образом** son marcos. Si el marco solo tiene adjetivos como *nuevo* e *importante*, el paso está vacío.

### La regla
| Paso | Marco | Qué va dentro |
|---|---|---|
| por qué el tema | **Актуальность связана с тем, что…** | un hueco concreto |
| por qué el trabajo | **Цель исследования —** | un verbo de resultado: показать, описать, сопоставить |
| cómo | **Методы** | qué se comparó |
| el límite | **В рамках исследования** | qué queda fuera |
| la base | **На основании данных** | qué material |
| el cierre | **Таким образом** | solo una tesis ya mostrada |

**Во-первых** y **во-вторых** numeran dos motivos distintos, no dos formas de decir lo mismo. **Научная новизна** no es la frase *el trabajo es nuevo*. Si no hay novedad, quite el paso.

### Si tu lengua es el español
*El objetivo es mostrar* corresponde a **цель — показать**. *Así pues* corresponde a **таким образом** solo si la prueba ya está escrita. No abra con *así* para anunciar que va a empezar.

> Un marco sin contenido está vacío. **Цель** nombra una acción. **Таким образом** cierra solo lo ya mostrado.`,
    de: `## Akademische Rahmen

> **In diesem Thema:** die Fächer einer kurzen Arbeit oder eines Vortrags. Jedes Fach trägt einen Fakt. Eine leere Verknüpfung ist kein Schritt.

### Warum es zählt
**Актуальность**, **цель**, **методы** und **таким образом** sind Rahmen. Stehen darin nur Adjektive wie *neu* und *wichtig*, ist der Schritt leer.

### Die Regel
| Schritt | Rahmen | Was hinein gehört |
|---|---|---|
| warum das Thema | **Актуальность связана с тем, что…** | eine konkrete Lücke |
| warum die Arbeit | **Цель исследования —** | ein Ergebnisverb: показать, описать, сопоставить |
| wie | **Методы** | was verglichen wurde |
| die Grenze | **В рамках исследования** | was nicht dazugehört |
| die Grundlage | **На основании данных** | welches Material |
| der Schluss | **Таким образом** | nur eine schon gezeigte These |

**Во-первых** und **во-вторых** nummerieren zwei verschiedene Gründe, nicht zwei Formulierungen desselben Grundes. **Научная новизна** ist nicht der Satz *die Arbeit ist neu*. Fehlt die Neuheit, streichen Sie den Schritt.

### Wenn Ihre Sprache Deutsch ist
*Ziel der Arbeit ist es zu zeigen* entspricht **цель — показать**. *Somit* entspricht **таким образом** nur, wenn der Beleg schon dasteht. Eröffnen Sie nicht mit *somit*, um anzukündigen, dass Sie anfangen.

> Ein Rahmen ohne Inhalt ist leer. **Цель** nennt eine Handlung. **Таким образом** schließt nur, was schon gezeigt ist.`,
  },
};
