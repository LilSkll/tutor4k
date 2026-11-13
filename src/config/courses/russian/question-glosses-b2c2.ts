import type { InterfaceLanguage } from "@/types";

/**
 * Pedagogical question glosses for RKI C1–C2 (chapters 29–36).
 * Keys = exact authored question strings. en/es/de support must not reveal the answer.
 * B2 keys, if added alongside, belong in this same export and must not be overwritten.
 */
export const RUSSIAN_QUESTION_GLOSSES_B2C2: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  "Окно сейчас закрыто. Кто его ___ утром?": {
    "en": "The window is shut now. Who ___ it this morning? The result did not last. Choose the aspect for a cancelled result.",
    "es": "La ventana ya está cerrada. ¿Quién la ___ esta mañana? El resultado no duró. Elige el aspecto de un resultado anulado.",
    "de": "Das Fenster ist jetzt zu. Wer hat es heute Morgen ___? Das Ergebnis hielt nicht. Wähle den Aspekt für ein aufgehobenes Ergebnis."
  },
  "Омар час ___ формулу и так и не получил ответ.": {
    "en": "Omar ___ the formula for an hour and still got no answer. Duration without a result. Choose the aspect.",
    "es": "Omar ___ la fórmula una hora y no obtuvo respuesta. Duración sin resultado. Elige el aspecto.",
    "de": "Omar ___ eine Stunde an der Formel und bekam keine Antwort. Dauer ohne Ergebnis. Wähle den Aspekt."
  },
  "Анна так и не ___ источник, хотя список лежал на столе.": {
    "en": "Anna still did not ___ the source, though the list lay on the table. Так и не marks a result that failed. Anna is feminine. Choose the aspect.",
    "es": "Anna no ___ la fuente, aunque la lista estaba en la mesa. Так и не marca un resultado fallido. Anna es femenino. Elige el aspecto.",
    "de": "Anna hat die Quelle nicht ___, obwohl die Liste auf dem Tisch lag. Так и не markiert ein ausgebliebenes Ergebnis. Anna ist feminin. Wähle den Aspekt."
  },
  "Этот раздел стоит ___ целиком: без него отзыв не примут.": {
    "en": "This section is worth ___ in full, or the review will be rejected. A finished result is required, not an open process. Choose the infinitive aspect.",
    "es": "Conviene ___ el apartado entero, o no aceptarán la reseña. Hace falta un resultado, no un proceso abierto. Elige el aspecto del infinitivo.",
    "de": "Diesen Abschnitt sollte man ganz ___, sonst wird die Rezension abgelehnt. Ein Ergebnis ist nötig, kein offener Verlauf. Wähle den Aspekt des Infinitivs."
  },
  "На защите Омару ___ ответить на второй вопрос без паузы.": {
    "en": "At the defense Omar ___ answer the second question without a pause. One success that already happened, not a habit.",
    "es": "En la defensa Omar ___ responder la segunda pregunta sin pausa. Un éxito ya ocurrido, no un hábito.",
    "de": "Bei der Verteidigung ___ Omar die zweite Frage ohne Pause beantworten. Ein bereits eingetretener Erfolg, keine Gewohnheit."
  },
  "Вряд ли редакция ___ материал к утру: фактов мало.": {
    "en": "The newsroom is unlikely to ___ the piece by morning: too few facts. One result by a deadline. Choose the future aspect.",
    "es": "Es poco probable que la redacción ___ el material para la mañana: hay pocos hechos. Un resultado para una fecha. Elige el aspecto del futuro.",
    "de": "Die Redaktion wird das Material bis zum Morgen kaum ___: zu wenige Fakten. Ein Ergebnis zu einem Termin. Wähle den Aspekt der Zukunft."
  },
  "Пока мы не ___ выборку, о выводах говорить рано.": {
    "en": "Until we ___ the sample, it is too early to talk about conclusions. Пока не waits for a limit. Choose the future aspect.",
    "es": "Mientras no ___ la muestra, es pronto para hablar de conclusiones. Пока не espera un límite. Elige el aspecto del futuro.",
    "de": "Solange wir die Stichprobe nicht ___, ist es zu früh für Schlussfolgerungen. Пока не wartet auf eine Grenze. Wähle den Aspekt der Zukunft."
  },
  "Анне невольно ___ возразить, хотя она хотела промолчать.": {
    "en": "Anna could not help but ___ object, though she meant to stay silent. One past occasion, not a habit. The options are forms of a modal of necessity.",
    "es": "A Anna le ___ objetar sin querer, aunque pensaba callar. Un caso pasado, no una costumbre. Las opciones son formas de un modal de necesidad.",
    "de": "Anna ___ unwillkürlich widersprechen, obwohl sie schweigen wollte. Ein einzelner Fall in der Vergangenheit, keine Gewohnheit."
  },
  "Окно сейчас закрыто. Кто его ___?": {
    "en": "The window is shut now. Who ___ it? The result was later undone. Imperfective of the verb 'to open', not the form that leaves it open.",
    "es": "La ventana ya está cerrada. ¿Quién la ___? El resultado se anuló después. Imperfectivo del verbo de abrir.",
    "de": "Das Fenster ist jetzt zu. Wer hat es ___? Das Ergebnis wurde später aufgehoben. Imperfektiv des Verbs für öffnen."
  },
  "Омар два часа ___ вступление и так и не сдал файл.": {
    "en": "Omar ___ the introduction for two hours and never handed in the file. A process with no result. Imperfective of править.",
    "es": "Omar ___ la introducción dos horas y no entregó el archivo. Proceso sin resultado. Imperfectivo de править.",
    "de": "Omar hat zwei Stunden die Einleitung ___ und die Datei nicht abgegeben. Verlauf ohne Ergebnis. Imperfektiv von править."
  },
  "Анна так и не ___ тон абзаца, хотя перечитала его трижды.": {
    "en": "Anna still did not ___ the tone of the paragraph, though she reread it three times. After так и не use the perfective. Anna is feminine.",
    "es": "Anna no ___ el tono del párrafo, aunque lo releyó tres veces. Tras так и не, perfecto. Anna es femenino.",
    "de": "Anna hat den Ton des Absatzes nicht ___, obwohl sie ihn dreimal las. Nach так и не das Perfektiv. Anna ist feminin."
  },
  "Редактор к утру ___ тезис: он слишком широк для полосы.": {
    "en": "By morning the editor ___ the thesis: it is too broad for the page. One future result. Perfective future of сузить. The editor is masculine.",
    "es": "Para la mañana el editor ___ la tesis: es demasiado amplia para la página. Un resultado futuro. Futuro perfectivo de сузить. El editor es masculino.",
    "de": "Bis zum Morgen ___ der Redakteur die These: sie ist zu breit für die Seite. Ein künftiges Ergebnis. Perfektives Futur von сузить. Der Redakteur ist maskulin."
  },
  "С третьей попытки Омару ___ сформулировать тезис.": {
    "en": "On the third try Omar ___ formulate the thesis. One success, past of удаться.",
    "es": "Al tercer intento Omar ___ formular la tesis. Un éxito, pasado de удаться.",
    "de": "Beim dritten Versuch ___ es Omar, die These zu formulieren. Ein Erfolg, Vergangenheit von удаться."
  },
  "Ему следовало бы ___ извинение, а не оправдываться.": {
    "en": "He should have ___ an apology instead of making excuses. Perfective infinitive in the set phrase with извинение.",
    "es": "Debería haber ___ una disculpa en lugar de justificarse. Infinitivo perfectivo en la fórmula con извинение.",
    "de": "Er hätte eine Entschuldigung ___ sollen, statt sich zu rechtfertigen. Perfektiver Infinitiv in der Wendung mit извинение."
  },
  "Пока редакция не ___ цифры, материал в номер не пойдёт.": {
    "en": "Until the newsroom ___ the figures, the piece will not go into the issue. Perfective future after пока не, from сверить.",
    "es": "Mientras la redacción no ___ las cifras, el material no entra en el número. Futuro perfectivo tras пока не, de сверить.",
    "de": "Solange die Redaktion die Zahlen nicht ___, kommt der Beitrag nicht in die Ausgabe. Perfektives Futur nach пока не, von сверить."
  },
  "Едва Анна ___ первый абзац, как редактор попросил переписать тон.": {
    "en": "Anna had barely ___ the first paragraph when the editor asked to rewrite the tone. Perfective after едва. Anna is feminine.",
    "es": "Apenas Anna ___ el primer párrafo, el editor pidió reescribir el tono. Perfectivo tras едва. Anna es femenino.",
    "de": "Kaum hatte Anna den ersten Absatz ___, bat der Redakteur, den Ton umzuschreiben. Perfektiv nach едва. Anna ist feminin."
  },
  "Окно сейчас закрыто. Кто его открыл утром?": {
    "en": "The window is shut now, but the verb treats the morning opening as a result that still holds. Fix the aspect.",
    "es": "La ventana ya está cerrada, pero el verbo trata la apertura de la mañana como un resultado vigente. Corrige el aspecto.",
    "de": "Das Fenster ist jetzt zu, aber das Verb behandelt das morgendliche Öffnen als fortbestehendes Ergebnis. Korrigiere den Aspekt."
  },
  "Омар два часа поправил вступление и так и не сдал файл.": {
    "en": "Two hours and an unsubmitted file cannot sit with a completed edit. Fix the aspect of the long process.",
    "es": "Dos horas y un archivo no entregado no caben con una corrección ya terminada. Corrige el aspecto del proceso largo.",
    "de": "Zwei Stunden und eine nicht abgegebene Datei passen nicht zu einer abgeschlossenen Bearbeitung. Korrigiere den Aspekt des langen Verlaufs."
  },
  "Анна так и не ловила тон абзаца, хотя перечитала его трижды.": {
    "en": "Так и не needs the result that failed, not an open-ended attempt. Anna is feminine. Fix the aspect.",
    "es": "Так и не pide el resultado que no llegó, no un intento abierto. Anna es femenino. Corrige el aspecto.",
    "de": "Так и не verlangt das ausgebliebene Ergebnis, keinen offenen Versuch. Anna ist feminin. Korrigiere den Aspekt."
  },
  "Редактор к утру будет сужать тезис: номер уже сверстан.": {
    "en": "The issue is already made up, so one result is due by morning, not a long process. Fix the aspect.",
    "es": "El número ya está cerrado, así que para la mañana hace falta un resultado, no un proceso largo. Corrige el aspecto.",
    "de": "Die Ausgabe ist schon umbrochen, also ist bis zum Morgen ein Ergebnis fällig, kein langer Verlauf. Korrigiere den Aspekt."
  },
  "С третьей попытки Омару удавалось сформулировать тезис.": {
    "en": "The third try is one success, not a repeated background. Fix the aspect of the modal.",
    "es": "El tercer intento es un éxito, no un fondo repetido. Corrige el aspecto del modal.",
    "de": "Der dritte Versuch ist ein Erfolg, kein wiederholter Hintergrund. Korrigiere den Aspekt des Modals."
  },
  "Ему следовало бы приносить извинение, а не оправдываться после срыва.": {
    "en": "After the breakdown, one missed act of apology is at stake, not a repeated habit. Fix the infinitive aspect.",
    "es": "Tras el fallo, falta un acto de disculpa, no un hábito repetido. Corrige el aspecto del infinitivo.",
    "de": "Nach dem Aussetzer fehlt eine Entschuldigung, keine wiederholte Gewohnheit. Korrigiere den Aspekt des Infinitivs."
  },
  "Пока редакция не сверяет цифры, материал в номер не пойдёт.": {
    "en": "Пока не in the future needs a limit, and the piece is not in the issue yet. Fix the aspect.",
    "es": "Пока не en futuro necesita un límite, y el material aún no entra en el número. Corrige el aspecto.",
    "de": "Пока не in der Zukunft braucht eine Grenze, und der Beitrag ist noch nicht in der Ausgabe. Korrigiere den Aspekt."
  },
  "Едва Анна дописывала первый абзац, как редактор попросил переписать тон.": {
    "en": "Едва … как links a finished first step to the next one. The verb is still a process. Anna is feminine. Fix the aspect.",
    "es": "Едва … как une un primer paso terminado con el siguiente. El verbo sigue en proceso. Anna es femenino. Corrige el aspecto.",
    "de": "Едва … как verbindet einen abgeschlossenen ersten Schritt mit dem nächsten. Das Verb ist noch Verlauf. Anna ist feminin. Korrigiere den Aspekt."
  },
  "утром / открывал / его / Кто": {
    "en": "Put the words in order. Ask who opened the window this morning, knowing the result did not last.",
    "es": "Ordena las palabras. Pregunta quién abrió la ventana por la mañana, sabiendo que el resultado no duró.",
    "de": "Bringe die Wörter in Ordnung. Frage, wer morgens das Fenster öffnete, wobei das Ergebnis nicht anhielt."
  },
  "сдал / не / и / текст / правил / час / Омар": {
    "en": "Put the words in order. Omar worked on the text for an hour and did not hand it in.",
    "es": "Ordena las palabras. Omar trabajó el texto una hora y no lo entregó.",
    "de": "Bringe die Wörter in Ordnung. Omar hat eine Stunde am Text gearbeitet und ihn nicht abgegeben."
  },
  "тон / поймала / не / и / так / Анна": {
    "en": "Put the words in order. Anna never caught the tone. She is feminine.",
    "es": "Ordena las palabras. Anna no llegó a captar el tono. Es femenino.",
    "de": "Bringe die Wörter in Ordnung. Anna hat den Ton nie getroffen. Sie ist feminin."
  },
  "тезис / сузит / утру / к / Редактор": {
    "en": "Put the words in order. The editor will narrow the thesis by morning.",
    "es": "Ordena las palabras. El editor estrechará la tesis para la mañana.",
    "de": "Bringe die Wörter in Ordnung. Der Redakteur wird die These bis zum Morgen enger fassen."
  },
  "удалось / Омару / попытки / третьей / С": {
    "en": "Put the words in order. On the third try Omar succeeded.",
    "es": "Ordena las palabras. Al tercer intento Omar lo logró.",
    "de": "Bringe die Wörter in Ordnung. Beim dritten Versuch gelang es Omar."
  },
  "извинение / принести / бы / следовало / Ему": {
    "en": "Put the words in order. He ought to have offered an apology.",
    "es": "Ordena las palabras. Debería haber ofrecido una disculpa.",
    "de": "Bringe die Wörter in Ordnung. Er hätte eine Entschuldigung vorbringen sollen."
  },
  "цифры / сверит / не / редакция / Пока": {
    "en": "Put the words in order. Until the newsroom checks the figures.",
    "es": "Ordena las palabras. Hasta que la redacción compruebe las cifras.",
    "de": "Bringe die Wörter in Ordnung. Bis die Redaktion die Zahlen prüft."
  },
  "её / остановил / редактор / абзац / дописала / Анна / Едва": {
    "en": "Put the words in order. Anna had barely finished the paragraph when the editor stopped her.",
    "es": "Ordena las palabras. Apenas Anna terminó el párrafo, el editor la detuvo.",
    "de": "Bringe die Wörter in Ordnung. Kaum hatte Anna den Absatz beendet, hielt der Redakteur sie auf."
  },
  "Омар на семинаре молчит, хотя знает ответ. О нём говорят: он ___.": {
    "en": "Omar stays silent at the seminar even though he knows the answer. Choose the idiom for deliberate silence, not for idleness.",
    "es": "Omar calla en el seminario aunque sabe la respuesta. Elige el modismo de callar a propósito, no el de holgazanería.",
    "de": "Omar schweigt im Seminar, obwohl er die Antwort kennt. Wähle die Wendung für absichtliches Schweigen, nicht für Faulenzen."
  },
  "Анна в новой редакции уже свободно ведёт планёрку. Она там ___.": {
    "en": "In the new newsroom Anna already runs the meeting with ease. Choose the idiom for being at home in a new place.",
    "es": "En la nueva redacción Anna ya dirige la reunión con soltura. Elige el modismo de estar a gusto en un sitio nuevo.",
    "de": "In der neuen Redaktion leitet Anna die Besprechung schon sicher. Wähle die Wendung für jemanden, der sich am neuen Ort wie zu Hause fühlt."
  },
  "Гость приехал без звонка, и номер пришлось перестраивать. Он явился ___.": {
    "en": "The guest arrived with no call, and the show had to be rebuilt. Choose the idiom for a sudden, untimely arrival.",
    "es": "El invitado llegó sin avisar y hubo que rehacer el programa. Elige el modismo de una llegada repentina e inoportuna.",
    "de": "Der Gast kam ohne Anruf, und die Sendung musste umgebaut werden. Wähle die Wendung für ein plötzliches, ungelegenes Erscheinen."
  },
  "Редактор просит сказать честно, без оговорок: «Скажите ___.»": {
    "en": "The editor asks for an honest answer with no hedging. Choose the idiom of frankness.",
    "es": "El editor pide una respuesta honesta, sin rodeos. Elige el modismo de franqueza.",
    "de": "Der Redakteur bittet um eine ehrliche Antwort ohne Vorbehalt. Wähle die Wendung der Offenheit."
  },
  "На защите не было ни одного свободного места. Там было ___.": {
    "en": "At the defense there was not a single free seat. Choose the idiom for a packed room.",
    "es": "En la defensa no había ni un asiento libre. Elige el modismo de un lugar abarrotado.",
    "de": "Bei der Verteidigung war kein Platz frei. Wähle die Wendung für ein überfülltes Zimmer."
  },
  "Омар обещал данные вчера, а сегодня снова перенёс срок. Он ___.": {
    "en": "Omar promised the data yesterday and moved the deadline again today. Choose the idiom for stringing someone along.",
    "es": "Omar prometió los datos ayer y hoy volvió a mover el plazo. Elige el modismo de dar largas.",
    "de": "Omar versprach die Daten gestern und verschob die Frist heute wieder. Wähle die Wendung für Hinhalten."
  },
  "Черновик собрали за час до сдачи, без проверки. Его сделали ___.": {
    "en": "The draft was thrown together an hour before the deadline, unchecked. Choose the idiom for a rush job.",
    "es": "El borrador se armó una hora antes de la entrega, sin revisión. Elige el modismo de un trabajo a toda prisa.",
    "de": "Der Entwurf wurde eine Stunde vor Abgabe zusammengestellt, ungeprüft. Wähle die Wendung für eine Hastarbeit."
  },
  "После спора Анна и Омар снова работают без напряжения. Они ___.": {
    "en": "After the argument Anna and Omar are working easily again. Choose the idiom for harmony.",
    "es": "Tras la discusión Anna y Omar vuelven a trabajar sin tensión. Elige el modismo de armonía.",
    "de": "Nach dem Streit arbeiten Anna und Omar wieder ohne Spannung. Wähle die Wendung für Eintracht."
  },
  "На планёрке Омар знает ответ и всё-таки ___ язык за зубами.": {
    "en": "At the meeting Omar knows the answer and still ___ his tongue. The idiom means he keeps quiet on purpose. Omar is masculine.",
    "es": "En la reunión Omar sabe la respuesta y aun así ___ la lengua. El modismo es callar a propósito. Omar es masculino.",
    "de": "In der Besprechung kennt Omar die Antwort und ___ trotzdem die Zunge. Die Wendung heißt: absichtlich schweigen. Omar ist maskulin."
  },
  "В новой редакции Анна уже как рыба ___.": {
    "en": "In the new newsroom Anna is already like a fish ___. Finish the idiom for feeling at home.",
    "es": "En la nueva redacción Anna ya está como pez ___. Completa el modismo de sentirse en su elemento.",
    "de": "In der neuen Redaktion ist Anna schon wie ein Fisch ___. Vervollständige die Wendung für «in seinem Element»."
  },
  "Гость явился как снег на ___, и план эфира развалился.": {
    "en": "The guest arrived like snow on ___, and the broadcast plan fell apart. Last word of the idiom for a sudden appearance. Accusative.",
    "es": "El invitado llegó como nieve sobre ___, y el plan de la emisión se vino abajo. Última palabra del modismo de aparición repentina. Acusativo.",
    "de": "Der Gast kam wie Schnee auf ___, und der Sendeplan fiel auseinander. Letztes Wort der Wendung für plötzliches Erscheinen. Akkusativ."
  },
  "Скажите положа руку на ___: этот тезис правда держится?": {
    "en": "Say it with your hand on ___: does this thesis really hold? Last word of the idiom for speaking honestly.",
    "es": "Dilo con la mano en ___: ¿esta tesis de verdad se sostiene? Última palabra del modismo de franqueza.",
    "de": "Sag es mit der Hand aufs ___: hält diese These wirklich? Letztes Wort der Wendung für Ehrlichkeit."
  },
  "На защите было яблоку негде ___.": {
    "en": "At the defense there was nowhere for an apple to ___. Infinitive inside the idiom for a packed room. The set phrase uses the perfective.",
    "es": "En la defensa no había dónde ___ una manzana. Infinitivo del modismo de lugar abarrotado. La fórmula usa el perfectivo.",
    "de": "Bei der Verteidigung war kein Platz, damit ein Apfel ___. Infinitiv der Wendung für ein überfülltes Zimmer. Die Formel steht im Perfektiv."
  },
  "Омар снова ___ за нос: данных к сроку нет.": {
    "en": "Omar is ___ by the nose again: the data are not ready. Present tense of the idiom for false promises. Omar is masculine.",
    "es": "Omar otra vez ___ de la nariz: los datos no están a tiempo. Presente del modismo de promesas falsas. Omar es masculino.",
    "de": "Omar ___ wieder an der Nase herum: die Daten sind nicht fertig. Präsens der Wendung für leere Versprechen. Omar ist maskulin."
  },
  "Черновик собрали на скорую ___, и в таблице ошибка.": {
    "en": "The draft was thrown together at a quick ___, and the table has an error. Last word of the idiom for a rush job.",
    "es": "El borrador se armó a ___ ligera, y la tabla tiene un error. Última palabra del modismo de hacerlo a toda prisa.",
    "de": "Der Entwurf wurde auf die schnelle ___ zusammengestellt, und in der Tabelle ist ein Fehler. Letztes Wort der Wendung für Hast."
  },
  "После спора они снова работают душа в ___.": {
    "en": "After the argument they are working soul in ___ again. Last word of the idiom for harmony. The second noun is accusative.",
    "es": "Tras la discusión vuelven a trabajar alma en ___. Última palabra del modismo de armonía. El segundo nombre va en acusativo.",
    "de": "Nach dem Streit arbeiten sie wieder Seele in ___. Letztes Wort der Wendung für Eintracht. Das zweite Nomen steht im Akkusativ."
  },
  "Омар знает ответ, молчит и бьёт баклуши.": {
    "en": "Omar knows the answer and is silent, but the idiom here means loafing. Replace it with the idiom for deliberate silence.",
    "es": "Omar sabe la respuesta y calla, pero el modismo de la frase significa holgazanear. Cámbialo por el de callar a propósito.",
    "de": "Omar kennt die Antwort und schweigt, aber die Wendung bedeutet Faulenzen. Ersetze sie durch die Wendung für absichtliches Schweigen."
  },
  "В новой редакции Анне не по себе, она там как рыба в воде.": {
    "en": "Anna feels ill at ease, yet the idiom says she is in her element. Those clash. Fix the idiom so it matches discomfort.",
    "es": "Anna se siente incómoda, pero el modismo dice que está en su elemento. Chocan. Corrige el modismo para que cuadre con el malestar.",
    "de": "Anna ist unwohl, die Wendung sagt aber, sie sei in ihrem Element. Das widerspricht sich. Korrigiere die Wendung passend zum Unbehagen."
  },
  "Гость явился как снег на голове, и план эфира развалился.": {
    "en": "The sudden-arrival idiom is in the wrong case at the end. Fix the case, not the story.",
    "es": "El modismo de llegada repentina tiene mal el caso final. Corrige el caso, no la historia.",
    "de": "Die Wendung für plötzliches Erscheinen steht am Ende im falschen Kasus. Korrigiere den Kasus, nicht die Geschichte."
  },
  "Скажите положа руку на сердцевине: тезис держится?": {
    "en": "The frankness idiom ends on the wrong noun. Fix that one word.",
    "es": "El modismo de franqueza termina en el nombre equivocado. Corrige esa palabra.",
    "de": "Die Wendung der Offenheit endet auf dem falschen Nomen. Korrigiere dieses eine Wort."
  },
  "На защите было яблоку негде падать.": {
    "en": "The packed-room idiom uses the wrong infinitive aspect. Fix the infinitive inside the set phrase.",
    "es": "El modismo de lugar abarrotado usa mal el aspecto del infinitivo. Corrige el infinitivo de la fórmula.",
    "de": "Die Wendung für ein überfülltes Zimmer hat den falschen Infinitiv-Aspekt. Korrigiere den Infinitiv in der festen Formel."
  },
  "Омар снова водит за носом: данных к сроку нет.": {
    "en": "The idiom for stringing someone along has the wrong case after за. Fix the case.",
    "es": "El modismo de dar largas tiene mal el caso tras за. Corrige el caso.",
    "de": "Die Wendung für Hinhalten hat nach за den falschen Kasus. Korrigiere den Kasus."
  },
  "Черновик собрали на скорую ногу, и в таблице ошибка.": {
    "en": "The rush-job idiom uses the wrong body-part noun. Fix the set phrase.",
    "es": "El modismo de hacerlo a toda prisa usa la parte del cuerpo equivocada. Corrige la fórmula.",
    "de": "Die Hast-Wendung benutzt das falsche Körperteil. Korrigiere die feste Formel."
  },
  "После спора они снова работают душой в душу.": {
    "en": "The harmony idiom starts with the wrong case of the first noun. Fix the case.",
    "es": "El modismo de armonía empieza con mal caso del primer nombre. Corrige el caso.",
    "de": "Die Eintrachts-Wendung beginnt mit dem falschen Kasus des ersten Nomens. Korrigiere den Kasus."
  },
  "зубами / за / язык / держит / Омар": {
    "en": "Put the words in order. Omar is keeping quiet on purpose.",
    "es": "Ordena las palabras. Omar calla a propósito.",
    "de": "Bringe die Wörter in Ordnung. Omar schweigt absichtlich."
  },
  "воде / в / рыба / как / Анна": {
    "en": "Put the words in order. Anna is in her element.",
    "es": "Ordena las palabras. Anna está en su elemento.",
    "de": "Bringe die Wörter in Ordnung. Anna ist in ihrem Element."
  },
  "голову / на / снег / как / явился / Гость": {
    "en": "Put the words in order. The guest arrived out of the blue.",
    "es": "Ordena las palabras. El invitado llegó de improviso.",
    "de": "Bringe die Wörter in Ordnung. Der Gast kam aus heiterem Himmel."
  },
  "сердце / на / руку / положа / Скажите": {
    "en": "Put the words in order. Ask someone to speak quite honestly.",
    "es": "Ordena las palabras. Pide que hablen con toda franqueza.",
    "de": "Bringe die Wörter in Ordnung. Bitte darum, ganz ehrlich zu sprechen."
  },
  "упасть / негде / яблоку / защите / На": {
    "en": "Put the words in order. The defense was packed solid.",
    "es": "Ordena las palabras. La defensa estaba a reventar.",
    "de": "Bringe die Wörter in Ordnung. Die Verteidigung war zum Bersten voll."
  },
  "нос / за / водит / снова / Омар": {
    "en": "Put the words in order. Omar is stringing people along again.",
    "es": "Ordena las palabras. Omar vuelve a dar largas.",
    "de": "Bringe die Wörter in Ordnung. Omar hält die Leute wieder hin."
  },
  "руку / скорую / на / собрали / Черновик": {
    "en": "Put the words in order. The draft was done in a rush.",
    "es": "Ordena las palabras. El borrador se hizo a toda prisa.",
    "de": "Bringe die Wörter in Ordnung. Der Entwurf entstand in aller Eile."
  },
  "душу / в / душа / работают / Они": {
    "en": "Put the words in order. They are working in harmony.",
    "es": "Ordena las palabras. Trabajan en armonía.",
    "de": "Bringe die Wörter in Ordnung. Sie arbeiten einträchtig."
  },
  "Данные узкие. ___, вывод в докладе шире самой выборки.": {
    "en": "The data are narrow. ___, the conclusion in the paper is broader than the sample. Choose a concession marker, not a restatement.",
    "es": "Los datos son estrechos. ___, la conclusión del trabajo es más amplia que la muestra. Elige un marcador de concesión, no de reformulación.",
    "de": "Die Daten sind schmal. ___, die Schlussfolgerung im Vortrag ist breiter als die Stichprobe. Wähle einen Einräumungsmarker, keine Umformulierung."
  },
  "Тезис спорен. ___, цифры, на которые он опирается, сходятся.": {
    "en": "The thesis is debatable. ___, the figures it rests on add up. Choose an added point, not a consequence.",
    "es": "La tesis es discutible. ___, las cifras en que se apoya cuadran. Elige un argumento añadido, no una consecuencia.",
    "de": "Die These ist umstritten. ___, die Zahlen, auf denen sie ruht, gehen auf. Wähle einen zusätzlichen Punkt, keine Folge."
  },
  "Выборку не расширяли. ___, о репрезентативности говорить рано.": {
    "en": "The sample was not expanded. ___, it is too early to speak of representativeness. Choose a consequence marker.",
    "es": "No ampliaron la muestra. ___, es pronto para hablar de representatividad. Elige un marcador de consecuencia.",
    "de": "Die Stichprobe wurde nicht erweitert. ___, es ist zu früh, von Repräsentativität zu sprechen. Wähle einen Folgemarker."
  },
  "___, речь идёт не о сюжете, а о среде.": {
    "en": "___, this is not about the plot but about the setting. Choose a reformulation marker.",
    "es": "___, no se trata de la trama, sino del ambiente. Elige un marcador de reformulación.",
    "de": "___, es geht nicht um die Handlung, sondern um das Milieu. Wähle einen Umformulierungsmarker."
  },
  "___, что узкий тезис честнее широкого, если данные неполные.": {
    "en": "___, that a narrow thesis is more honest than a broad one when the data are incomplete. Choose the impersonal academic frame.",
    "es": "___, que una tesis estrecha es más honesta que una amplia si los datos están incompletos. Elige el marco académico impersonal.",
    "de": "___, dass eine enge These ehrlicher ist als eine weite, wenn die Daten unvollständig sind. Wähle den unpersönlichen akademischen Rahmen."
  },
  "Срок короткий. ___, отказываться от полевого этапа не стоит.": {
    "en": "The deadline is short. ___, dropping the fieldwork is not wise. The fact is granted, the conclusion goes the other way. Choose that concession.",
    "es": "El plazo es corto. ___, no conviene abandonar el trabajo de campo. El hecho se admite y la conclusión va por otro lado. Elige esa concesión.",
    "de": "Die Frist ist kurz. ___, die Feldphase sollte man nicht streichen. Die Tatsache gilt, der Schluss geht anders. Wähle diese Einräumung."
  },
  "Дело не столько в таблице, ___ в чтении источника.": {
    "en": "The issue is not so much the table ___ the reading of the source. Choose the second half of the pair не столько.",
    "es": "El asunto no está tanto en la tabla ___ en la lectura de la fuente. Elige la segunda parte del par не столько.",
    "de": "Es geht nicht so sehr um die Tabelle ___ um die Lektüre der Quelle. Wähle die zweite Hälfte des Paars не столько."
  },
  "___ распространённому мнению, архив не подтверждает эту дату.": {
    "en": "___ a widespread opinion, the archive does not confirm this date. Choose the preposition of concession with the dative.",
    "es": "___ una opinión extendida, el archivo no confirma esta fecha. Elige la preposición de concesión con dativo.",
    "de": "___ einer verbreiteten Meinung bestätigt das Archiv dieses Datum nicht. Wähle die Präposition der Einräumung mit Dativ."
  },
  "Данные узкие. ___, вывод шире выборки.": {
    "en": "The data are narrow. ___, the conclusion is broader than the sample. A concession marker, not a paraphrase.",
    "es": "Los datos son estrechos. ___, la conclusión es más amplia que la muestra. Marcador de concesión, no una paráfrasis.",
    "de": "Die Daten sind schmal. ___, die Schlussfolgerung ist breiter als die Stichprobe. Einräumungsmarker, keine Umschreibung."
  },
  "Тезис спорен. ___, цифры сходятся.": {
    "en": "The thesis is debatable. ___, the figures add up. An added argument, not a result of the first clause.",
    "es": "La tesis es discutible. ___, las cifras cuadran. Un argumento añadido, no un resultado de la primera frase.",
    "de": "Die These ist umstritten. ___, die Zahlen gehen auf. Ein zusätzliches Argument, keine Folge des ersten Satzes."
  },
  "Выборку в этом семестре не расширяли. ___, о репрезентативности говорить рано.": {
    "en": "The sample was not expanded this semester. ___, it is too early to speak of representativeness. A consequence marker.",
    "es": "Este semestre no ampliaron la muestra. ___, es pronto para hablar de representatividad. Marcador de consecuencia.",
    "de": "Die Stichprobe wurde in diesem Semester nicht erweitert. ___, es ist zu früh für Repräsentativität. Ein Folgemarker."
  },
  "Автор пишет о давлении города. ___, речь идёт не о сюжете, а о среде.": {
    "en": "The author writes about the pressure of the city. ___, this is not about the plot but about the setting. A reformulation marker.",
    "es": "El autor escribe sobre la presión de la ciudad. ___, no se trata de la trama, sino del ambiente. Marcador de reformulación.",
    "de": "Der Autor schreibt über den Druck der Stadt. ___, es geht nicht um die Handlung, sondern um das Milieu. Ein Umformulierungsmarker."
  },
  "___, что узкий тезис здесь честнее широкого.": {
    "en": "___, that a narrow thesis is more honest here than a broad one. Third person of представляться, the impersonal academic frame.",
    "es": "___, que una tesis estrecha es aquí más honesta que una amplia. Tercera persona de представляться, el marco académico impersonal.",
    "de": "___, dass eine enge These hier ehrlicher ist als eine weite. 3. Person von представляться, der unpersönliche akademische Rahmen."
  },
  "Срок короткий. ___, полевой этап стоит сохранить.": {
    "en": "The deadline is short. ___, the fieldwork should be kept. Concession: the fact stands, the conclusion does not follow it.",
    "es": "El plazo es corto. ___, conviene conservar el trabajo de campo. Concesión: el hecho se admite y la conclusión no lo sigue.",
    "de": "Die Frist ist kurz. ___, die Feldphase sollte bleiben. Einräumung: die Tatsache gilt, der Schluss folgt ihr nicht."
  },
  "Ошибка не столько в таблице, ___ в чтении источника.": {
    "en": "The mistake is not so much in the table ___ in the reading of the source. Second half of the pair не столько.",
    "es": "El error no está tanto en la tabla ___ en la lectura de la fuente. Segunda parte del par не столько.",
    "de": "Der Fehler liegt nicht so sehr in der Tabelle ___ in der Lektüre der Quelle. Zweite Hälfte des Paars не столько."
  },
  "___ распространённому мнению, архив этой даты не даёт.": {
    "en": "___ a widespread opinion, the archive does not give this date. A preposition of concession plus the dative.",
    "es": "___ una opinión extendida, el archivo no da esta fecha. Preposición de concesión con dativo.",
    "de": "___ einer verbreiteten Meinung gibt das Archiv dieses Datum nicht. Präposition der Einräumung mit Dativ."
  },
  "Данные узкие. Иными словами, вывод шире выборки.": {
    "en": "A broader conclusion does not restate narrow data. The marker treats it as a paraphrase. Fix the marker: this is a concession.",
    "es": "Una conclusión más amplia no reformula datos estrechos. El marcador la trata como paráfrasis. Corrígelo: es una concesión.",
    "de": "Eine breitere Schlussfolgerung formuliert schmale Daten nicht um. Der Marker behandelt sie als Umschreibung. Korrigiere: das ist eine Einräumung."
  },
  "Тезис спорен. Таким образом, цифры сходятся.": {
    "en": "Figures that add up are not a consequence of a debatable thesis. The marker says they are. Fix it: this is a second point.",
    "es": "Unas cifras que cuadran no son consecuencia de una tesis discutible. El marcador dice que sí. Corrígelo: es un segundo punto.",
    "de": "Stimmende Zahlen folgen nicht daraus, dass die These umstritten ist. Der Marker behauptet das. Korrigiere: das ist ein zweiter Punkt."
  },
  "Выборку не расширяли. Например, о репрезентативности говорить рано.": {
    "en": "Refusing representativeness follows from a small sample. The marker introduces an example instead. Fix the marker.",
    "es": "Negar la representatividad se sigue de una muestra pequeña. El marcador introduce un ejemplo. Corrige el marcador.",
    "de": "Die Absage an Repräsentativität folgt aus einer kleinen Stichprobe. Der Marker führt ein Beispiel ein. Korrigiere den Marker."
  },
  "Автор говорит о городе. Тем не менее, речь идёт не о сюжете, а о среде.": {
    "en": "The second sentence explains the first: not the plot, but the setting. The marker marks a concession. Fix it to a reformulation.",
    "es": "La segunda frase explica la primera: no la trama, sino el ambiente. El marcador marca concesión. Cámbialo por una reformulación.",
    "de": "Der zweite Satz erklärt den ersten: nicht die Handlung, sondern das Milieu. Der Marker markiert eine Einräumung. Ändere ihn in eine Umformulierung."
  },
  "По-моему что узкий тезис здесь честнее широкого.": {
    "en": "The opinion frame is ungrammatical. Replace it with the impersonal academic frame.",
    "es": "El marco de opinión está mal formado. Sustitúyelo por el marco académico impersonal.",
    "de": "Der Meinungsrahmen ist ungrammatisch. Ersetze ihn durch den unpersönlichen akademischen Rahmen."
  },
  "Срок короткий. Иными словами, полевой этап стоит сохранить.": {
    "en": "Keeping the fieldwork does not restate a short deadline. The marker says it does. Fix it to a concession.",
    "es": "Conservar el trabajo de campo no reformula un plazo corto. El marcador dice que sí. Cámbialo por una concesión.",
    "de": "Die Feldphase zu behalten formuliert eine kurze Frist nicht um. Der Marker tut so. Ändere ihn in eine Einräumung."
  },
  "Дело не столько в таблице, как в чтении источника.": {
    "en": "The pair не столько is closed with the wrong word. Fix the second half of the pair.",
    "es": "El par не столько se cierra con la palabra equivocada. Corrige la segunda parte.",
    "de": "Das Paar не столько wird mit dem falschen Wort geschlossen. Korrigiere die zweite Hälfte."
  },
  "Благодаря распространённому мнению, архив этой даты не даёт.": {
    "en": "The preposition thanks the opinion for a result the archive denies. Fix the preposition: this is concession, dative.",
    "es": "La preposición agradece a la opinión un resultado que el archivo niega. Corrígelo: es concesión, con dativo.",
    "de": "Die Präposition dankt der Meinung für ein Ergebnis, das das Archiv verneint. Korrigiere: das ist Einräumung, mit Dativ."
  },
  "выборки / шире / вывод / менее / не / Тем": {
    "en": "Put the words in order. A concession: the conclusion is broader than the sample.",
    "es": "Ordena las palabras. Una concesión: la conclusión es más amplia que la muestra.",
    "de": "Bringe die Wörter in Ordnung. Eine Einräumung: die Schlussfolgerung ist breiter als die Stichprobe."
  },
  "сходятся / цифры / тем / с / Вместе": {
    "en": "Put the words in order. An added point: the figures add up.",
    "es": "Ordena las palabras. Un punto añadido: las cifras cuadran.",
    "de": "Bringe die Wörter in Ordnung. Ein Zusatz: die Zahlen gehen auf."
  },
  "рано / говорить / выборке / о / образом / Таким": {
    "en": "Put the words in order. A consequence: it is too early to talk about the sample.",
    "es": "Ordena las palabras. Una consecuencia: es pronto para hablar de la muestra.",
    "de": "Bringe die Wörter in Ordnung. Eine Folge: es ist zu früh, über die Stichprobe zu sprechen."
  },
  "среде / о / идёт / речь / словами / Иными": {
    "en": "Put the words in order. A reformulation: the talk is about the setting.",
    "es": "Ordena las palabras. Una reformulación: se habla del ambiente.",
    "de": "Bringe die Wörter in Ordnung. Eine Umformulierung: es geht um das Milieu."
  },
  "честнее / тезис / узкий / что / Представляется": {
    "en": "Put the words in order. An academic hedge: a narrow thesis is more honest.",
    "es": "Ordena las palabras. Una reserva académica: una tesis estrecha es más honesta.",
    "de": "Bringe die Wörter in Ordnung. Eine akademische Vorsicht: eine enge These ist ehrlicher."
  },
  "сохранить / стоит / этап / том / всём / При": {
    "en": "Put the words in order. Concession: the stage should still be kept.",
    "es": "Ordena las palabras. Concesión: la etapa conviene conservarla.",
    "de": "Bringe die Wörter in Ordnung. Einräumung: die Phase sollte bleiben."
  },
  "источнике / в / сколько / таблице / в / столько / не / Дело": {
    "en": "Put the words in order. Not so much the table as the source.",
    "es": "Ordena las palabras. No tanto la tabla como la fuente.",
    "de": "Bringe die Wörter in Ordnung. Nicht so sehr die Tabelle als die Quelle."
  },
  "даты / даёт / не / архив / мнению / распространённому / Вопреки": {
    "en": "Put the words in order. Contrary to a widespread opinion, the archive does not give the date.",
    "es": "Ordena las palabras. Contra una opinión extendida, el archivo no da la fecha.",
    "de": "Bringe die Wörter in Ordnung. Entgegen einer verbreiteten Meinung gibt das Archiv das Datum nicht."
  },
  "Официальный представитель ___ слух и отказался от комментария.": {
    "en": "The official representative ___ the rumor and declined to comment. Choose the verb that withdraws a rumor, not one that confirms it.",
    "es": "El representante oficial ___ el rumor y no quiso comentar. Elige el verbo que retira un rumor, no el que lo confirma.",
    "de": "Der offizielle Vertreter ___ das Gerücht und lehnte einen Kommentar ab. Wähle das Verb, das ein Gerücht zurücknimmt, nicht eines, das es bestätigt."
  },
  "В сюжете факт назван ___: подтверждения нет.": {
    "en": "In the report the fact is called ___: there is no confirmation. Choose the instrumental of the adjective.",
    "es": "En la nota el hecho es llamado ___: no hay confirmación. Elige el instrumental del adjetivo.",
    "de": "Im Beitrag wird der Fakt ___ genannt: eine Bestätigung fehlt. Wähle den Instrumental des Adjektivs."
  },
  "Гость отказался отвечать прямо ___.": {
    "en": "The guest refused to answer right ___. Choose the set frame for being on air.",
    "es": "El invitado se negó a responder justo ___. Elige la fórmula fija de estar en antena.",
    "de": "Der Gast weigerte sich, direkt ___ zu antworten. Wähle die feste Formel für «auf Sendung»."
  },
  "Имя источника в тексте не называют. Корреспондент пишет: источник сообщил ___.": {
    "en": "The source is not named. The correspondent writes that the source spoke ___. Choose the anonymity frame.",
    "es": "No nombran a la fuente. El corresponsal escribe que la fuente habló ___. Elige la fórmula de anonimato.",
    "de": "Die Quelle wird nicht genannt. Der Korrespondent schreibt, die Quelle habe ___ gesprochen. Wähle die Anonymitätsformel."
  },
  "Редакция ещё не знает деталей и пишет: данные ___.": {
    "en": "The newsroom still does not know the details and writes: the data ___. Choose an unfinished check, not a completed result.",
    "es": "La redacción aún no conoce los detalles y escribe: los datos ___. Elige una comprobación sin terminar, no un resultado cerrado.",
    "de": "Die Redaktion kennt die Einzelheiten noch nicht und schreibt: die Angaben ___. Wähle eine unabgeschlossene Prüfung, kein fertiges Ergebnis."
  },
  "В официальной заметке представитель ___, что срок сдвинут.": {
    "en": "In an official note the representative ___, that the deadline had moved. Choose the neutral public speech verb, not a colloquial one.",
    "es": "En una nota oficial el representante ___, que el plazo se movió. Elige el verbo neutro de declaración pública, no uno coloquial.",
    "de": "In einer offiziellen Notiz ___ der Vertreter, die Frist sei verschoben. Wähle das neutrale Verb der öffentlichen Erklärung, kein umgangssprachliches."
  },
  "Заголовок обещает скандал, а в тексте только слух. Редактор просит убрать ___.": {
    "en": "The headline promises a scandal, but the text has only a rumor. The editor asks to remove ___. Choose what does not belong in that headline.",
    "es": "El titular promete un escándalo y el texto solo tiene un rumor. El editor pide quitar ___. Elige lo que no debe estar en ese titular.",
    "de": "Die Überschrift verspricht einen Skandal, der Text hat nur ein Gerücht. Der Redakteur bittet, ___ zu streichen. Wähle, was in diese Überschrift nicht gehört."
  },
  "Фраза «по сообщениям соседних изданий» значит, что автор ___.": {
    "en": "The phrase «по сообщениям соседних изданий» means the author ___. Choose what one does with someone else's story.",
    "es": "La frase «по сообщениям соседних изданий» significa que el autor ___. Elige lo que se hace con una historia ajena.",
    "de": "Die Wendung «по сообщениям соседних изданий» bedeutet, dass der Autor ___. Wähle, was man mit einer fremden Geschichte tut."
  },
  "Официальный представитель ___ слух о закрытии программы.": {
    "en": "The official representative ___ the rumor that the program would close. Past, masculine, of опровергнуть.",
    "es": "El representante oficial ___ el rumor del cierre del programa. Pasado, masculino, de опровергнуть.",
    "de": "Der offizielle Vertreter ___ das Gerücht über die Einstellung der Sendung. Vergangenheit, maskulin, von опровергнуть."
  },
  "Факт в сюжете назван ___: подтверждения нет.": {
    "en": "In the report the fact is called ___: there is no confirmation. Instrumental of неподтверждённый.",
    "es": "En la nota el hecho es llamado ___: no hay confirmación. Instrumental de неподтверждённый.",
    "de": "Im Beitrag wird der Fakt ___ genannt: eine Bestätigung fehlt. Instrumental von неподтверждённый."
  },
  "Гость отказался отвечать журналистам ___.": {
    "en": "The guest refused to answer the journalists ___. The set frame for being on air.",
    "es": "El invitado se negó a responder a los periodistas ___. La fórmula fija de estar en antena.",
    "de": "Der Gast weigerte sich, den Journalisten ___ zu antworten. Die feste Formel für «auf Sendung»."
  },
  "Источник сообщил на условиях ___.": {
    "en": "The source spoke on condition of ___. Genitive in the anonymity frame.",
    "es": "La fuente habló bajo condición de ___. Genitivo en la fórmula de anonimato.",
    "de": "Die Quelle sprach unter der Bedingung der ___. Genitiv in der Anonymitätsformel."
  },
  "Детали пока неизвестны: данные ___.": {
    "en": "The details are still unknown: the data ___. Present, imperfective, plural of уточняться.",
    "es": "Los detalles aún se desconocen: los datos ___. Presente, imperfectivo, plural de уточняться.",
    "de": "Die Einzelheiten sind noch unbekannt: die Angaben ___. Präsens, imperfektiv, Plural von уточняться."
  },
  "Представитель ___, что срок сдачи сдвинут на неделю.": {
    "en": "The representative ___, that the submission deadline had moved by a week. Past, masculine, of заявить.",
    "es": "El representante ___, que el plazo de entrega se corrió una semana. Pasado, masculino, de заявить.",
    "de": "Der Vertreter ___, die Abgabefrist sei um eine Woche verschoben. Vergangenheit, maskulin, von заявить."
  },
  "Заголовок обещает скандал без факта. Редактор просит убрать из него ___.": {
    "en": "The headline promises a scandal with no fact. The editor asks to remove the ___ from it. Accusative: the evaluative word that should not be there.",
    "es": "El titular promete un escándalo sin un hecho. El editor pide quitar de él ___. Acusativo: la palabra valorativa que sobra.",
    "de": "Die Überschrift verspricht einen Skandal ohne Fakt. Der Redakteur bittet, daraus ___ zu streichen. Akkusativ: das wertende Wort, das nicht hingehört."
  },
  "Автор не даёт своего комментария, а ___ чужой сюжет.": {
    "en": "The author does not give his own comment, but ___ someone else's story. Present imperfective of пересказывать.",
    "es": "El autor no da su propio comentario, sino que ___ una historia ajena. Presente imperfectivo de пересказывать.",
    "de": "Der Autor gibt keinen eigenen Kommentar, sondern ___ eine fremde Geschichte. Präsens Imperfektiv von пересказывать."
  },
  "Официальный представитель подтвердил слух о закрытии программы, хотя в том же абзаце слух назван ложным.": {
    "en": "The same paragraph calls the rumor false, but the verb treats it as confirmed. Fix the verb and the linker: after a denial, «хотя» no longer fits.",
    "es": "El mismo párrafo llama falso al rumor, pero el verbo lo da por confirmado. Corrige el verbo y el enlace: tras la desmentida, «хотя» ya no encaja.",
    "de": "Derselbe Absatz nennt das Gerücht falsch, das Verb behandelt es aber als bestätigt. Korrigiere Verb und Verknüpfung: nach dem Dementi passt «хотя» nicht mehr."
  },
  "Омар сказал: «Я уже сдал черновик». Пересказ: Омар сказал, что я уже сдал черновик.": {
    "en": "Omar’s own words are quoted, then retold with «я». Fix the person in the retelling: he was speaking about himself.",
    "es": "Se citan las palabras de Omar y luego el relato conserva «я». Corrige la persona del relato: hablaba de sí mismo.",
    "de": "Omars eigene Worte stehen im Zitat, die Wiedergabe behält «я». Korrigiere die Person in der Wiedergabe: er sprach über sich."
  },
  "Анна сообщила: «Завтра я приду на консультацию». Пересказ: Анна сообщила, что завтра я приду на консультацию.": {
    "en": "Anna’s own words are quoted, then retold with «я». Fix the person in the retelling: she was speaking about herself.",
    "es": "Se citan las palabras de Anna y luego el relato conserva «я». Corrige la persona del relato: hablaba de sí misma.",
    "de": "Annas eigene Worte stehen im Zitat, die Wiedergabe behält «я». Korrigiere die Person in der Wiedergabe: sie sprach über sich."
  },
  "В сюжете факт назван неподтверждённый: подтверждения нет.": {
    "en": "After назван the adjective is in the wrong case. Fix the case.",
    "es": "Tras назван el adjetivo está en el caso equivocado. Corrige el caso.",
    "de": "Nach назван steht das Adjektiv im falschen Kasus. Korrigiere den Kasus."
  },
  "Гость отказался отвечать на эфире.": {
    "en": "The on-air frame uses the wrong preposition. Fix the preposition.",
    "es": "La fórmula de estar en antena usa la preposición equivocada. Corrígelo.",
    "de": "Die Formel für «auf Sendung» hat die falsche Präposition. Korrigiere sie."
  },
  "Источник сообщил на условия анонимности.": {
    "en": "На условиях takes the prepositional plural, not the accusative. Fix the case.",
    "es": "На условиях pide el preposicional plural, no el acusativo. Corrige el caso.",
    "de": "На условиях verlangt den Präpositiv Plural, nicht den Akkusativ. Korrigiere den Kasus."
  },
  "Детали пока неизвестны: данные уточнили.": {
    "en": "The details are still unknown, so the check cannot already be finished. Fix the aspect.",
    "es": "Los detalles aún se desconocen, así que la comprobación no puede estar ya terminada. Corrige el aspecto.",
    "de": "Die Einzelheiten sind noch unbekannt, also kann die Prüfung nicht schon abgeschlossen sein. Korrigiere den Aspekt."
  },
  "Представитель ляпнул, что срок сдачи сдвинут на неделю.": {
    "en": "An official note cannot use a slang speech verb. Replace it with the neutral public verb.",
    "es": "Una nota oficial no puede usar un verbo de habla vulgar. Sustitúyelo por el verbo público neutro.",
    "de": "Eine offizielle Notiz darf kein saloppes Redeverb benutzen. Ersetze es durch das neutrale öffentliche Verb."
  },
  "Заголовок обещает скандал без факта. Редактор просит убрать из него фактуру.": {
    "en": "There is no fact, so the editor is not asking to remove factual texture. Fix the noun: what is extra is the judgment.",
    "es": "No hay un hecho, así que el editor no pide quitar la textura factual. Corrige el nombre: lo que sobra es la valoración.",
    "de": "Es gibt keinen Fakt, also bittet der Redakteur nicht, die Faktengrundlage zu streichen. Korrigiere das Nomen: überflüssig ist die Wertung."
  },
  "Автор не даёт своего комментария, а пересказал чужой сюжет в каждом абзаце.": {
    "en": "The retelling happens in every paragraph, so it is not a single completed act. Fix the aspect.",
    "es": "El recuento ocurre en cada párrafo, así que no es un acto único ya cerrado. Corrige el aspecto.",
    "de": "Die Nacherzählung steht in jedem Absatz, ist also kein einmaliger abgeschlossener Akt. Korrigiere den Aspekt."
  },
  "закрытии / о / слух / опроверг / представитель / Официальный": {
    "en": "Put the words in order. The official representative denied the rumor of a closure.",
    "es": "Ordena las palabras. El representante oficial desmintió el rumor de un cierre.",
    "de": "Bringe die Wörter in Ordnung. Der offizielle Vertreter wies das Gerücht einer Schließung zurück."
  },
  "неподтверждённым / назван / факт / сюжете / В": {
    "en": "Put the words in order. In the report the fact is called unconfirmed.",
    "es": "Ordena las palabras. En la nota el hecho figura como no confirmado.",
    "de": "Bringe die Wörter in Ordnung. Im Beitrag wird der Fakt als unbestätigt bezeichnet."
  },
  "эфире / в / отвечать / отказался / Гость": {
    "en": "Put the words in order. The guest refused to answer on air.",
    "es": "Ordena las palabras. El invitado se negó a responder en antena.",
    "de": "Bringe die Wörter in Ordnung. Der Gast weigerte sich, auf Sendung zu antworten."
  },
  "анонимности / условиях / на / сообщил / Источник": {
    "en": "Put the words in order. The source spoke on condition of anonymity.",
    "es": "Ordena las palabras. La fuente habló bajo condición de anonimato.",
    "de": "Bringe die Wörter in Ordnung. Die Quelle sprach unter der Bedingung der Anonymität."
  },
  "уточняются / данные / неизвестны / Детали": {
    "en": "Put the words in order. The details are unknown and the data are still being checked.",
    "es": "Ordena las palabras. Los detalles se desconocen y los datos aún se precisan.",
    "de": "Bringe die Wörter in Ordnung. Die Einzelheiten sind unbekannt und die Angaben werden noch geprüft."
  },
  "сдвинут / срок / что / заявил / Представитель": {
    "en": "Put the words in order. The representative stated that the deadline had moved.",
    "es": "Ordena las palabras. El representante declaró que el plazo se movió.",
    "de": "Bringe die Wörter in Ordnung. Der Vertreter erklärte, die Frist sei verschoben."
  },
  "оценку / убрать / просит / Редактор": {
    "en": "Put the words in order. The editor asks to remove the judgment.",
    "es": "Ordena las palabras. El editor pide quitar la valoración.",
    "de": "Bringe die Wörter in Ordnung. Der Redakteur bittet, die Wertung zu streichen."
  },
  "сюжет / чужой / пересказывает / Автор": {
    "en": "Put the words in order. The author retells someone else's story.",
    "es": "Ordena las palabras. El autor recuenta una historia ajena.",
    "de": "Bringe die Wörter in Ordnung. Der Autor erzählt eine fremde Geschichte nach."
  },
  "В кулуарах коллега говорит: «___, срок уже горит».": {
    "en": "In the corridor a colleague says: «___, the deadline is already on fire.» Choose the colloquial opener.",
    "es": "En el pasillo un colega dice: «___, el plazo ya aprieta.» Elige el arranque coloquial.",
    "de": "Auf dem Gang sagt ein Kollege: «___, die Frist brennt schon.» Wähle den umgangssprachlichen Anfang."
  },
  "В служебной записке та же мысль звучит иначе: «___ сроки представления отчёта истекают».": {
    "en": "In an official memo the same idea sounds different: «___ the deadlines for submitting the report are running out.» Choose the official time frame.",
    "es": "En una nota de servicio la misma idea suena distinto: «___ los plazos de entrega del informe se agotan.» Elige el marco temporal oficial.",
    "de": "In einem dienstlichen Vermerk klingt derselbe Gedanke anders: «___ die Fristen für den Bericht laufen ab.» Wähle den amtlichen Zeitrahmen."
  },
  "В рецензии на монографию уместно: «___ сроки представляются чрезмерно сжатыми».": {
    "en": "In a review of a monograph this fits: «___ the deadlines seem excessively tight.» Choose the bookish time adverb.",
    "es": "En una reseña de una monografía cabe: «___ los plazos parecen excesivamente apretados.» Elige el adverbio temporal culto.",
    "de": "In einer Rezension einer Monografie passt: «___ die Fristen erscheinen übermäßig knapp.» Wähle das gehobene Zeitadverb."
  },
  "На кухне общежития Омар говорит о гранте своим словом: «___ кончились».": {
    "en": "In the dorm kitchen Omar talks about the grant in his own words: «___ have run out.» Choose the colloquial word for money.",
    "es": "En la cocina de la residencia Omar habla de la beca a su modo: «___ se acabaron.» Elige la palabra coloquial para el dinero.",
    "de": "In der Wohnheimküche redet Omar über die Förderung mit seinem Wort: «___ sind alle.» Wähle das umgangssprachliche Wort für Geld."
  },
  "В комментарии к рассказу повествователь не «смотрит» на город, а ___.": {
    "en": "In a comment on a story the narrator does not «смотрит» at the city, he ___. Choose the bookish verb of looking.",
    "es": "En un comentario el narrador no «смотрит» la ciudad, sino que ___. Elige el verbo culto de mirar.",
    "de": "Im Kommentar zum Text «смотрит» der Erzähler die Stadt nicht an, er ___. Wähle das gehobene Verb des Blickens."
  },
  "В нейтральном докладе: «Мы опоздали, ___ поезд стоял».": {
    "en": "In a neutral talk: «We were late, ___ the train was standing.» Choose the neutral causal conjunction.",
    "es": "En una intervención neutra: «Llegamos tarde, ___ el tren estaba parado.» Elige la conjunción causal neutra.",
    "de": "Im neutralen Vortrag: «Wir kamen zu spät, ___ der Zug stand.» Wähle die neutrale Kausalkonjunktion."
  },
  "В отзыве рецензента книжное «очень»: замечание ___ существенно.": {
    "en": "In a reviewer's note, the bookish 'very': the remark is ___ significant. Choose the bookish degree adverb.",
    "es": "En la nota del revisor, el «muy» culto: la observación es ___ sustancial. Elige el adverbio de grado culto.",
    "de": "In der Anmerkung des Gutachters, das gehobene «sehr»: die Bemerkung ist ___ wesentlich. Wähle das gehobene Gradadverb."
  },
  "На «Ты понял методику?» в кулуарах отвечают не «безусловно», а «___.»": {
    "en": "To «Did you get the method?» in the corridor people do not answer «безусловно», they answer «___.» Choose the colloquial yes.",
    "es": "A «¿Entendiste el método?» en el pasillo no responden «безусловно», sino «___.» Elige el sí coloquial.",
    "de": "Auf «Hast du die Methode verstanden?» antwortet man auf dem Gang nicht «безусловно», sondern «___.» Wähle das umgangssprachliche Ja."
  },
  "Книжный эквивалент нейтрального «сейчас» в рецензии: ___.": {
    "en": "The bookish equivalent of neutral «сейчас» in a review: ___. One high-register word.",
    "es": "El equivalente culto del «сейчас» neutro en una reseña: ___. Una palabra de registro alto.",
    "de": "Das gehobene Gegenstück zum neutralen «сейчас» in einer Rezension: ___. Ein Wort hohen Registers."
  },
  "Разговорное «щас» в служебной записке заменяют на ___.": {
    "en": "Colloquial «щас» in an official memo is replaced by ___. An official time frame of three words.",
    "es": "El «щас» coloquial en una nota de servicio se sustituye por ___. Un marco temporal oficial de tres palabras.",
    "de": "Umgangssprachliches «щас» im dienstlichen Vermerk wird ersetzt durch ___. Ein amtlicher Zeitrahmen aus drei Wörtern."
  },
  "В кулуарах вместо книжного «итак» говорят ___.": {
    "en": "In the corridor, instead of bookish «итак», people say ___. A colloquial opener, one word.",
    "es": "En el pasillo, en vez del «итак» culto, dicen ___. Un arranque coloquial, una palabra.",
    "de": "Auf dem Gang sagt man statt gehobenem «итак» ___. Ein umgangssprachlicher Anfang, ein Wort."
  },
  "В разборе сцены книжный глагол вместо «смотреть»: повествователь ___ на город.": {
    "en": "In a scene analysis, the bookish verb instead of «смотреть»: the narrator ___ at the city. Present, masculine, bookish register.",
    "es": "En el análisis de una escena, el verbo culto en vez de «смотреть»: el narrador ___ la ciudad. Presente, masculino, registro culto.",
    "de": "In der Szenenanalyse das gehobene Verb statt «смотреть»: der Erzähler ___ auf die Stadt. Präsens, maskulin, gehobenes Register."
  },
  "В смете пишут не «бабки» и не «деньги», а денежные ___.": {
    "en": "In a budget they write neither the slang word nor «деньги», but monetary ___. The clerical plural noun.",
    "es": "En un presupuesto no escriben ni la palabra baja ni «деньги», sino __ monetarios. El nombre administrativo en plural.",
    "de": "Im Kostenplan steht weder das saloppe Wort noch «деньги», sondern geldliche ___. Das amtssprachliche Nomen im Plural."
  },
  "Книжное «ибо» в нейтральном докладе заменяют: мы опоздали, ___ поезд стоял.": {
    "en": "Bookish «ибо» in a neutral talk is replaced: we were late, ___ the train was standing. A neutral causal conjunction.",
    "es": "El «ибо» culto en una charla neutra se sustituye: llegamos tarde, ___ el tren estaba parado. Conjunción causal neutra.",
    "de": "Gehobenem «ибо» im neutralen Vortrag wird ersetzt: wir kamen zu spät, ___ der Zug stand. Neutrale Kausalkonjunktion."
  },
  "В рецензии вместо «жутко важно» пишут: замечание ___ существенно.": {
    "en": "In a review, instead of a slang 'awfully important', they write: the remark is ___ significant. A bookish degree adverb.",
    "es": "En una reseña, en vez de un «importantísimo» coloquial, escriben: la observación es ___ sustancial. Adverbio de grado culto.",
    "de": "In der Rezension steht statt eines saloppen «wahnsinnig wichtig»: die Anmerkung ist ___ wesentlich. Gehobenem Gradadverb."
  },
  "На «Ты успеешь?» Анна в кулуарах отвечает не «безусловно», а «___.»": {
    "en": "To «Will you make it?» Anna in the corridor does not say «безусловно», she says «___.» Colloquial agreement, one word. The speaker is Anna.",
    "es": "A «¿Llegas?» Anna en el pasillo no dice «безусловно», dice «___.» Acuerdo coloquial, una palabra. Habla Anna.",
    "de": "Auf «Schaffst du es?» sagt Anna auf dem Gang nicht «безусловно», sondern «___.» Umgangssprachliche Zustimmung, ein Wort. Anna spricht."
  },
  "В рецензии: «Короче, сроки представляются чрезмерно сжатыми».": {
    "en": "A review opens with a corridor word. Fix the opener: the register should be bookish.",
    "es": "Una reseña empieza con una palabra de pasillo. Corrige el arranque: el registro debe ser culto.",
    "de": "Eine Rezension beginnt mit einem Flurwort. Korrigiere den Anfang: das Register soll gehoben sein."
  },
  "В служебной записке: «Щас сроки представления отчёта истекают».": {
    "en": "An official memo uses a clipped colloquial 'now'. Fix it: an official time frame is required.",
    "es": "Una nota de servicio usa un «ahora» coloquial recortado. Corrígelo: hace falta el marco temporal oficial.",
    "de": "Ein dienstlicher Vermerk benutzt ein verkürztes umgangssprachliches «jetzt». Korrigiere: der amtliche Zeitrahmen ist nötig."
  },
  "На кухне Омар читает смету вслух: «Денежные средства кончились».": {
    "en": "Omar is reading the budget aloud in the kitchen, but the money word belongs in a formal estimate. Fix the register.",
    "es": "Omar lee el presupuesto en voz alta en la cocina, pero la palabra del dinero es de una estimación formal. Corrige el registro.",
    "de": "Omar liest den Kostenplan in der Küche laut, das Geldwort gehört aber in einen förmlichen Plan. Korrigiere das Register."
  },
  "В комментарии к рассказу: «Повествователь пялится на город».": {
    "en": "A literary comment uses a rude verb of staring. Fix the verb: bookish register.",
    "es": "Un comentario literario usa un verbo grosero de mirar fijamente. Corrige el verbo: registro culto.",
    "de": "Ein Literaturkommentar benutzt ein derbes Verb des Starrens. Korrigiere das Verb: gehobenes Register."
  },
  "В нейтральном докладе: «Мы опоздали, ибо поезд стоял».": {
    "en": "A neutral talk uses a bookish causal conjunction. Fix the conjunction: neutral register.",
    "es": "Una charla neutra usa una conjunción causal culta. Corrige la conjunción: registro neutro.",
    "de": "Ein neutraler Vortrag benutzt eine gehobene Kausalkonjunktion. Korrigiere die Konjunktion: neutrales Register."
  },
  "В рецензии: «Замечание жутко существенно».": {
    "en": "A review intensifies with a slang degree adverb. Fix the adverb: bookish register.",
    "es": "Una reseña intensifica con un adverbio de grado coloquial. Corrige el adverbio: registro culto.",
    "de": "Eine Rezension steigert mit einem saloppen Gradadverb. Korrigiere das Adverb: gehobenes Register."
  },
  "Анна на защите отвечает рецензенту: «Ага, поняла».": {
    "en": "Anna answers a reviewer at the defense with a corridor yes. Fix the reply: official register. Anna is feminine.",
    "es": "Anna responde al revisor en la defensa con un sí de pasillo. Corrige la respuesta: registro oficial. Anna es femenino.",
    "de": "Anna antwortet dem Gutachter bei der Verteidigung mit einem Flur-Ja. Korrigiere die Antwort: offizielles Register. Anna ist feminin."
  },
  "В кулуарах коллега начинает так: «В настоящее время срок уже горит».": {
    "en": "In the corridor a colleague opens with an official time frame, then says the deadline is on fire. Fix the opener: colloquial register.",
    "es": "En el pasillo un colega empieza con un marco temporal oficial y luego dice que el plazo aprieta. Corrige el arranque: registro coloquial.",
    "de": "Auf dem Gang beginnt ein Kollege mit einem amtlichen Zeitrahmen und sagt dann, die Frist brenne. Korrigiere den Anfang: umgangssprachlich."
  },
  "сжатыми / чрезмерно / представляются / сроки / Ныне": {
    "en": "Put the words in order. A bookish sentence: the deadlines now seem excessively tight.",
    "es": "Ordena las palabras. Frase culta: los plazos parecen ahora excesivamente apretados.",
    "de": "Bringe die Wörter in Ordnung. Gehoben: die Fristen erscheinen nun übermäßig knapp."
  },
  "горит / уже / срок / Короче": {
    "en": "Put the words in order. Colloquial: the deadline is already on fire.",
    "es": "Ordena las palabras. Coloquial: el plazo ya aprieta.",
    "de": "Bringe die Wörter in Ordnung. Umgangssprachlich: die Frist brennt schon."
  },
  "исчерпаны / гранта / средства / Денежные": {
    "en": "Put the words in order. Official: the grant funds are exhausted.",
    "es": "Ordena las palabras. Oficial: los fondos de la subvención están agotados.",
    "de": "Bringe die Wörter in Ordnung. Amtliche Sprache: die Fördermittel sind ausgeschöpft."
  },
  "город / на / взирает / повествователь / Книжный": {
    "en": "Put the words in order. A bookish narrator looks upon the city.",
    "es": "Ordena las palabras. Un narrador de registro culto contempla la ciudad.",
    "de": "Bringe die Wörter in Ordnung. Ein gehobener Erzähler blickt auf die Stadt."
  },
  "стоял / поезд / что / потому / опоздали / Мы": {
    "en": "Put the words in order. Neutral: we were late because the train was standing.",
    "es": "Ordena las palabras. Neutro: llegamos tarde porque el tren estaba parado.",
    "de": "Bringe die Wörter in Ordnung. Neutral: wir kamen zu spät, weil der Zug stand."
  },
  "существенно / весьма / Замечание": {
    "en": "Put the words in order. In a review: the remark is highly significant.",
    "es": "Ordena las palabras. En una reseña: la observación es muy sustancial.",
    "de": "Bringe die Wörter in Ordnung. In der Rezension: die Anmerkung ist höchst wesentlich."
  },
  "поняла / ага / сказала / Анна": {
    "en": "Put the words in order. Anna agrees colloquially that she got it. She is feminine.",
    "es": "Ordena las palabras. Anna asiente en tono coloquial: ya lo entendió. Es femenino.",
    "de": "Bringe die Wörter in Ordnung. Anna stimmt umgangssprachlich zu: sie hat es verstanden. Sie ist feminin."
  },
  "закрыт / вопрос / этот / Ныне": {
    "en": "Put the words in order. Bookish: this question is now closed.",
    "es": "Ordena las palabras. Culto: esta cuestión queda ahora cerrada.",
    "de": "Bringe die Wörter in Ordnung. Gehoben: diese Frage ist nun geschlossen."
  },
  "Во фрагменте: «У окна горела лампа. Город за стеклом лежал серым полотном. Конспект лежал открытый, словно кто-то только что вышел и ещё вернётся. Тихий, усталый коридор ждал шагов. Ночь. Пустая аудитория. Он закрыл окно и ничего не объяснил. Снова слышалась дорога домой — в шуме колёс, потом в пустом перроне, потом в шагах за дверью. На краю стола лежала чужая перчатка — будто герой уже ушёл в чужой рассказ. Потом зал опустел, и напряжение спало.» Город назван «серым полотном». Уподобление дано без «как». Это ___.": {
    "en": "Read the teaching fragment. The city is called a gray canvas with no «как». Choose the name of that hidden comparison. Do not reveal the answer.",
    "es": "Lee el fragmento de trabajo. La ciudad se llama un lienzo gris sin «как». Elige el nombre de esa comparación oculta. No reveles la respuesta.",
    "de": "Lies das Unterrichtsfragment. Die Stadt heißt eine graue Leinwand ohne «как». Wähle den Namen dieses verdeckten Vergleichs. Verrate die Antwort nicht."
  },
  "Во фрагменте: «Тихий, усталый коридор ждал шагов». Определение несёт оценку. В разборе его называют ___.": {
    "en": "In the fragment a quiet, tired corridor waits for steps. The modifiers judge the corridor. Choose the instrumental term for that evaluative device. Do not name the answer.",
    "es": "En el fragmento un pasillo quieto y cansado espera pasos. Los adjetivos valoran el pasillo. Elige el término en instrumental de ese recurso. No digas la respuesta.",
    "de": "Im Fragment wartet ein stiller, müder Flur auf Schritte. Die Beifügungen bewerten den Flur. Wähle den Instrumental-Terminus für dieses Mittel. Nenne die Antwort nicht."
  },
  "Во фрагменте человек в аудитории почти не виден: видна комната, лампа, коридор. Голос, который ведёт взгляд и не равен автору статьи, — это ___.": {
    "en": "In the fragment a person is barely seen; the room leads the eye. Choose the term for the voice inside the text, not the article’s author.",
    "es": "En el fragmento apenas se ve a una persona; manda la mirada de la sala. Elige el término de la voz del texto, no del autor del artículo.",
    "de": "Im Fragment ist kaum eine Person zu sehen; der Blick folgt dem Raum. Wähle den Terminus für die Stimme im Text, nicht für den Verfasser des Artikels."
  },
  "Во фрагменте: «Он закрыл окно и ничего не объяснил». Смысл не сказан прямо: это ___.": {
    "en": "He closed the window and explained nothing. Choose the term for meaning that is not said outright.",
    "es": "Cerró la ventana y no explicó nada. Elige el término del sentido que no se dice de frente.",
    "de": "Er schloss das Fenster und erklärte nichts. Wähle den Terminus für Sinn, der nicht ausgesprochen wird."
  },
  "Во фрагменте закрытие окна — самое напряжённое место, после которого ход уже другой. Это ___.": {
    "en": "Closing the window is the most tense place; after it the course changes. Choose the term for that peak.",
    "es": "Cerrar la ventana es el punto más tenso; después el curso cambia. Elige el término de esa cima.",
    "de": "Das Schließen des Fensters ist die angespannteste Stelle; danach ändert sich der Gang. Wähle den Terminus für diesen Gipfel."
  },
  "Во фрагменте дорога возвращается в шуме колёс, на перроне и в шагах за дверью. Такой повтор называют ___.": {
    "en": "The road returns in three places in the fragment. Choose the instrumental term for a returning motif.",
    "es": "El camino vuelve en tres lugares del fragmento. Elige el término en instrumental de un motivo que vuelve.",
    "de": "Der Weg kehrt an drei Stellen des Fragments wieder. Wähle den Instrumental-Terminus für ein wiederkehrendes Motiv."
  },
  "Во фрагменте: «чужая перчатка — будто герой уже ушёл в чужой рассказ». Намёк на чужой сюжет без дословной цитаты — это ___.": {
    "en": "A stranger’s glove hints at another story without a copied page. Choose the term for that hint.",
    "es": "Un guante ajeno alude a otro relato sin página copiada. Elige el término de ese guiño.",
    "de": "Ein fremder Handschuh deutet auf eine andere Erzählung ohne kopierte Seite. Wähle den Terminus für diesen Hinweis."
  },
  "Во фрагменте: «словно кто-то только что вышел и ещё вернётся». Что это делает в комментарии?": {
    "en": "The line with «словно» invites a reading. Choose what a commentary should treat it as. Do not quote the options.",
    "es": "La línea con «словно» pide una lectura. Elige cómo debe tratarla el comentario. No cites las opciones.",
    "de": "Die Zeile mit «словно» verlangt eine Deutung. Wähle, wie der Kommentar sie behandeln soll. Zitiere die Optionen nicht."
  },
  "Город назван «серым полотном». Слова «как» нет. Это ___.": {
    "en": "The city is called a gray canvas. There is no «как». Choose the device name.",
    "es": "La ciudad se llama un lienzo gris. No hay «как». Elige el nombre del recurso.",
    "de": "Die Stadt heißt eine graue Leinwand. Es gibt kein «как». Wähle den Namen des Mittels."
  },
  "«Тихий, усталый коридор» — определение с оценкой. Его называют ___.": {
    "en": "«Quiet, tired corridor» is a judgmental modifier. Choose what it is called.",
    "es": "«Pasillo quieto, cansado» es un modificador valorativo. Elige cómo se llama.",
    "de": "«Stiller, müder Flur» ist eine wertende Beifügung. Wähle, wie man sie nennt."
  },
  "В тексте почти не виден человек: видна комната, лампа, коридор. Голос, который ведёт взгляд и не равен автору статьи, — это ___.": {
    "en": "The person is barely seen; the room leads the gaze. Choose the voice that is not the article’s author.",
    "es": "Casi no se ve a la persona; la habitación guía la mirada. Elige la voz que no es el autor del artículo.",
    "de": "Die Person ist kaum zu sehen; der Raum führt den Blick. Wähle die Stimme, die nicht der Verfasser des Artikels ist."
  },
  "«Он закрыл окно и ничего не объяснил». Смысл не сказан прямо. Это ___.": {
    "en": "He closed the window and explained nothing. The meaning is not said outright. Choose the term.",
    "es": "Cerró la ventana y no explicó nada. El sentido no se dice en voz alta. Elige el término.",
    "de": "Er schloss das Fenster und erklärte nichts. Der Sinn ist nicht ausgesprochen. Wähle den Terminus."
  },
  "Закрытие окна — самое напряжённое место; дальше ход уже другой. Это ___.": {
    "en": "Closing the window is the peak of tension; after that the course changes. Choose the term.",
    "es": "Cerrar la ventana es el pico de tensión; después el curso cambia. Elige el término.",
    "de": "Das Schließen des Fensters ist der Spannungsgipfel; danach ändert sich der Lauf. Wähle den Terminus."
  },
  "Дорога возвращается в шуме колёс, на перроне и в шагах за дверью. Такой повтор называют ___.": {
    "en": "The road returns three times. Choose the term for that kind of repeat.",
    "es": "El camino vuelve tres veces. Elige el término de esa repetición.",
    "de": "Der Weg kehrt dreimal wieder. Wähle den Terminus für diese Wiederholung."
  },
  "«Чужая перчатка — будто герой уже ушёл в чужой рассказ». Намёк без дословной цитаты — это ___.": {
    "en": "A stranger’s glove hints at another story without a copied page. Choose the term.",
    "es": "Un guante ajeno alude a otro relato sin página copiada. Elige el término.",
    "de": "Ein fremder Handschuh deutet auf eine andere Erzählung ohne kopierte Seite. Wähle den Terminus."
  },
  "«Словно кто-то только что вышел и ещё вернётся». Как это читать в комментарии?": {
    "en": "The line with «словно» invites a reading. Choose what a commentary should treat it as.",
    "es": "La línea con «словно» pide una lectura. Elige cómo debe tratarla el comentario.",
    "de": "Die Zeile mit «словно» verlangt eine Deutung. Wähle, wie der Kommentar sie behandeln soll."
  },
  "«Город лежал серым полотном» — город сравнивают с тканью, но слова «как» нет. Этот приём называют ___.": {
    "en": "The city is likened to cloth, but there is no «как». Type the term in the «чем?» form.",
    "es": "La ciudad se compara con una tela, pero no hay «как». Escribe el término en la forma «чем?».",
    "de": "Die Stadt wird mit Stoff verglichen, aber ohne «как». Schreibe den Terminus in der Form «чем?»."
  },
  "«Тихий, усталый коридор» — определение с оценкой. В комментарии оно является ___.": {
    "en": "«Quiet, tired corridor» is a judgmental modifier. Type the term in the «чем?» form.",
    "es": "«Pasillo quieto, cansado» es un modificador valorativo. Escribe el término en la forma «чем?».",
    "de": "«Stiller, müder Flur» ist eine wertende Beifügung. Schreibe den Terminus in der Form «чем?»."
  },
  "Голос, который видит пустую аудиторию и не равен автору статьи, — это ___.": {
    "en": "The voice that sees the empty hall and is not the article’s author is ___.",
    "es": "La voz que ve el aula vacía y no es el autor del artículo es ___.",
    "de": "Die Stimme, die den leeren Saal sieht und nicht der Verfasser des Artikels ist, ist ___."
  },
  "Он закрыл окно и ничего не объяснил. Смысл держится на ___.": {
    "en": "He closed the window and explained nothing. The meaning rests on ___.",
    "es": "Cerró la ventana y no explicó nada. El sentido se sostiene en ___.",
    "de": "Er schloss das Fenster und erklärte nichts. Der Sinn ruht auf ___."
  },
  "Закрытие окна — точка высшего напряжения. Она называется ___.": {
    "en": "Closing the window is the peak of tension. It is called ___.",
    "es": "Cerrar la ventana es el pico de tensión. Se llama ___.",
    "de": "Das Schließen des Fensters ist der Spannungsgipfel. Es heißt ___."
  },
  "Мотив дороги возвращается в шуме колёс, на перроне и в шагах. Это ___.": {
    "en": "The road motif returns three times. That is ___.",
    "es": "El motivo del camino vuelve tres veces. Eso es ___.",
    "de": "Das Wegmotiv kehrt dreimal wieder. Das ist ___."
  },
  "«Чужая перчатка» намекает на чужой рассказ без дословной цитаты. Это ___.": {
    "en": "The stranger’s glove hints at another story without a verbatim quote. That is ___.",
    "es": "El guante ajeno alude a otro relato sin cita literal. Eso es ___.",
    "de": "Der fremde Handschuh deutet auf eine fremde Erzählung ohne wörtliches Zitat. Das ist ___."
  },
  "«Потом зал опустел, и напряжение спало» закрывает конфликт. Это ___.": {
    "en": "Then the hall emptied and the tension fell: that closes the conflict.",
    "es": "Luego el aula se vació y la tensión bajó: eso cierra el conflicto.",
    "de": "Dann leerte sich der Saal und die Spannung fiel: das schließt den Konflikt."
  },
  "метафора / это / полотном / серым / лежал / Город": {
    "en": "Put the words in order. Quote the fragment’s likeness and name the device.",
    "es": "Ordena las palabras. Cita el parecido del fragmento y nombra el recurso.",
    "de": "Bringe die Wörter in Ordnung. Zitiere das Gleichnis des Fragments und nenne das Mittel."
  },
  "эпитет / это / коридор / усталый / Тихий": {
    "en": "Put the words in order. The quiet tired corridor is an evaluative device.",
    "es": "Ordena las palabras. El pasillo quieto y cansado es un recurso valorativo.",
    "de": "Bringe die Wörter in Ordnung. Der stille müde Flur ist ein wertendes Mittel."
  },
  "кульминация / это / окна / Закрытие": {
    "en": "Put the words in order. Closing the window is the peak in the fragment.",
    "es": "Ordena las palabras. Cerrar la ventana es la cima del fragmento.",
    "de": "Bringe die Wörter in Ordnung. Das Schließen des Fensters ist der Gipfel im Fragment."
  },
  "аллюзия / это / перчатка / Чужая": {
    "en": "Put the words in order. The stranger’s glove is the hinting device.",
    "es": "Ordena las palabras. El guante ajeno es el recurso del guiño.",
    "de": "Bringe die Wörter in Ordnung. Der fremde Handschuh ist das andeutende Mittel."
  },
  "развязка / это / опустел / зал / Когда": {
    "en": "Put the words in order. When the hall emptied, the conflict closed.",
    "es": "Ordena las palabras. Cuando el aula se vació, el conflicto se cerró.",
    "de": "Bringe die Wörter in Ordnung. Als der Saal sich leerte, schloss sich der Konflikt."
  },
  "В фрагменте город назван «серым полотном». Уподобление дано без «как». Это ___.": {
    "en": "The city is called a gray canvas. The likeness has no «как». Choose the name of that hidden comparison.",
    "es": "La ciudad se llama un lienzo gris. El parecido no lleva «как». Elige el nombre de esa comparación oculta.",
    "de": "Die Stadt heißt eine graue Leinwand. Das Gleichnis hat kein «как». Wähle den Namen dieses verdeckten Vergleichs."
  },
  "«Тихий, усталый вокзал»: определение несёт оценку. В разборе его называют ___.": {
    "en": "«A quiet, tired station»: the modifier carries a judgment. In a commentary it is called ___. Choose the term for an evaluative epithet, in the instrumental.",
    "es": "«Una estación tranquila, cansada»: el adjetivo lleva una valoración. En el comentario lo llaman ___. Elige el término del epíteto valorativo, en instrumental.",
    "de": "«Ein stiller, müder Bahnhof»: die Beifügung trägt eine Wertung. Im Kommentar nennt man sie ___. Wähle den Terminus für ein wertendes Epitheton, im Instrumental."
  },
  "Голос, который ведёт фрагмент и не равен автору статьи, — это ___.": {
    "en": "The voice that leads the fragment and is not the author of the article is ___. Choose the term for that voice.",
    "es": "La voz que conduce el fragmento y no es el autor del artículo es ___. Elige el término de esa voz.",
    "de": "Die Stimme, die das Fragment führt und nicht der Verfasser des Artikels ist, ist ___. Wähle den Terminus für diese Stimme."
  },
  "Герой закрывает окно и ничего не объясняет. Смысл не сказан прямо: это ___.": {
    "en": "The hero closes the window and explains nothing. The meaning is not said outright: it is ___. Choose the term for unspoken meaning.",
    "es": "El héroe cierra la ventana y no explica nada. El sentido no se dice de frente: es ___. Elige el término del sentido no dicho.",
    "de": "Der Held schließt das Fenster und erklärt nichts. Der Sinn wird nicht ausgesprochen: es ist ___. Wähle den Terminus für ungesagten Sinn."
  },
  "Самое напряжённое место фрагмента, после которого ход уже другой, — это ___.": {
    "en": "The most tense place in the fragment, after which the movement changes, is ___. Choose the term for the highest point of tension.",
    "es": "El lugar más tenso del fragmento, tras el cual el curso cambia, es ___. Elige el término del punto más alto de tensión.",
    "de": "Die angespannteste Stelle des Fragments, nach der der Gang sich ändert, ist ___. Wähle den Terminus für den höchsten Spannungspunkt."
  },
  "Мотив дороги возвращается в каждом абзаце. Такой повтор называют ___.": {
    "en": "The road motif returns in every paragraph. That repetition is called ___. Choose the term, instrumental.",
    "es": "El motivo del camino vuelve en cada párrafo. A esa repetición la llaman ___. Elige el término, en instrumental.",
    "de": "Das Wegmotiv kehrt in jedem Absatz wieder. Diese Wiederholung nennt man ___. Wähle den Terminus, im Instrumental."
  },
  "Намёк на чужой сюжет без дословной цитаты — это ___.": {
    "en": "A hint at someone else's plot without a verbatim quotation is ___. Choose the term for a hint, not for a copied page.",
    "es": "Un guiño a una trama ajena sin cita literal es ___. Elige el término del guiño, no el de una página copiada.",
    "de": "Ein Hinweis auf eine fremde Handlung ohne wörtliches Zitat ist ___. Wähle den Terminus für einen Hinweis, nicht für eine kopierte Seite."
  },
  "Последний абзац снимает напряжение и закрывает историю. Это ___.": {
    "en": "The last paragraph releases the tension and closes the story. That is ___. Choose the term for the end of the conflict.",
    "es": "El último párrafo suelta la tensión y cierra la historia. Eso es ___. Elige el término del cierre del conflicto.",
    "de": "Der letzte Absatz löst die Spannung und schließt die Geschichte. Das ist ___. Wähle den Terminus für das Ende des Konflikts."
  },
  "«Серое полотно города» в разборе называют ___.": {
    "en": "In a commentary, «a gray canvas of a city» is called ___. Instrumental of the trope: a likeness with no «как».",
    "es": "En el comentario, «un lienzo gris de ciudad» se llama ___. Instrumental del tropo: un parecido sin «как».",
    "de": "Im Kommentar nennt man «eine graue Leinwand der Stadt» ___. Instrumental der Trope: ein Gleichnis ohne «как»."
  },
  "«Усталый вокзал» в комментарии является ___.": {
    "en": "In the commentary, «the tired station» is ___. Instrumental: an evaluative modifier.",
    "es": "En el comentario, «la estación cansada» es ___. Instrumental: un modificador valorativo.",
    "de": "Im Kommentar ist «der müde Bahnhof» ___. Instrumental: eine wertende Beifügung."
  },
  "Голос фрагмента, не равный автору статьи, — это ___.": {
    "en": "The voice of the fragment, not the same as the author of the article, is ___. Nominative of the narration term.",
    "es": "La voz del fragmento, distinta del autor del artículo, es ___. Nominativo del término de narración.",
    "de": "Die Stimme des Fragments, nicht gleich dem Verfasser des Artikels, ist ___. Nominativ des Erzählterminus."
  },
  "Герой закрывает окно и ничего не объясняет. Смысл держится на ___.": {
    "en": "The hero closes the window and explains nothing. The meaning rests on ___. Prepositional after на: unspoken meaning.",
    "es": "El héroe cierra la ventana y no explica nada. El sentido se sostiene en ___. Preposicional tras на: sentido no dicho.",
    "de": "Der Held schließt das Fenster und erklärt nichts. Der Sinn ruht auf ___. Präpositiv nach на: ungesagter Sinn."
  },
  "Точка высшего напряжения фрагмента называется ___.": {
    "en": "The highest point of tension in the fragment is called ___. Instrumental after называется.",
    "es": "El punto más alto de tensión del fragmento se llama ___. Instrumental tras называется.",
    "de": "Der höchste Spannungspunkt des Fragments heißt ___. Instrumental nach называется."
  },
  "Мотив дороги возвращается в каждом абзаце. Это ___.": {
    "en": "The road motif returns in every paragraph. That is ___. Nominative of the term for a returning motif.",
    "es": "El motivo del camino vuelve en cada párrafo. Eso es ___. Nominativo del término de un motivo que vuelve.",
    "de": "Das Wegmotiv kehrt in jedem Absatz wieder. Das ist ___. Nominativ des Terminus für ein wiederkehrendes Motiv."
  },
  "Короткий намёк на чужой сюжет без дословной цитаты — это ___.": {
    "en": "A short hint at someone else's plot without a verbatim quotation is ___. Nominative of the intertext term.",
    "es": "Un guiño breve a una trama ajena sin cita literal es ___. Nominativo del término de intertexto.",
    "de": "Ein kurzer Hinweis auf eine fremde Handlung ohne wörtliches Zitat ist ___. Nominativ des Intertext-Terminus."
  },
  "Абзац, который закрывает конфликт, — это ___.": {
    "en": "The paragraph that closes the conflict is ___. Nominative of the term for the end of the plot.",
    "es": "El párrafo que cierra el conflicto es ___. Nominativo del término del final de la trama.",
    "de": "Der Absatz, der den Konflikt schließt, ist ___. Nominativ des Terminus für das Ende der Handlung."
  },
  "«Серое полотно города» — это сравнение, потому что уподобление дано без «как».": {
    "en": "The sentence calls a likeness without «как» a comparison. That reason fits the other trope. Fix the term.",
    "es": "La frase llama comparación a un parecido sin «как». Esa razón corresponde al otro tropo. Corrige el término.",
    "de": "Der Satz nennt ein Gleichnis ohne «как» einen Vergleich. Der Grund passt zur anderen Trope. Korrigiere den Terminus."
  },
  "«Усталый вокзал» в комментарии назван кульминацией.": {
    "en": "«The tired station» is an evaluative modifier, but the sentence names the high point of the plot. Fix the term.",
    "es": "«La estación cansada» es un modificador valorativo, pero la frase nombra el punto alto de la trama. Corrige el término.",
    "de": "«Der müde Bahnhof» ist eine wertende Beifügung, der Satz nennt aber den Höhepunkt der Handlung. Korrigiere den Terminus."
  },
  "Голос фрагмента — это автор статьи, и его не отделяют от повествователя.": {
    "en": "The voice of the fragment is glued to the author of the article. Fix the mix-up: they are kept apart.",
    "es": "La voz del fragmento se pega al autor del artículo. Corrige la confusión: se mantienen separados.",
    "de": "Die Stimme des Fragments wird mit dem Verfasser des Artikels verklebt. Korrigiere die Verwechslung: sie werden getrennt."
  },
  "Герой всё объясняет вслух, поэтому смысл держится на подтексте.": {
    "en": "If the hero explains everything aloud, the meaning cannot rest on what is unspoken. Fix the contradiction.",
    "es": "Si el héroe lo explica todo en voz alta, el sentido no puede sostenerse en lo no dicho. Corrige la contradicción.",
    "de": "Wenn der Held alles laut erklärt, kann der Sinn nicht auf dem Ungesagten ruhen. Korrigiere den Widerspruch."
  },
  "Точка высшего напряжения фрагмента называется завязкой.": {
    "en": "The highest point of tension is given the name of the opening of the conflict. Fix the term.",
    "es": "Al punto más alto de tensión se le da el nombre de la apertura del conflicto. Corrige el término.",
    "de": "Der höchste Spannungspunkt erhält den Namen für den Beginn des Konflikts. Korrigiere den Terminus."
  },
  "Мотив дороги возникает один раз в конце. Это лейтмотив.": {
    "en": "A motif that appears once at the end is called a motif that returns. Fix the description so it matches the term.",
    "es": "Un motivo que aparece una vez al final se llama un motivo que vuelve. Corrige la descripción para que cuadre con el término.",
    "de": "Ein Motiv, das einmal am Ende erscheint, wird als wiederkehrendes Motiv bezeichnet. Korrigiere die Beschreibung passend zum Terminus."
  },
  "Дословная страница чужого романа без кавычек — это аллюзия.": {
    "en": "A verbatim page of someone else's novel without quotation marks is not a hint. Fix the example: a hint does not copy the page.",
    "es": "Una página literal de una novela ajena sin comillas no es un guiño. Corrige el ejemplo: un guiño no copia la página.",
    "de": "Eine wörtliche Seite eines fremden Romans ohne Anführungszeichen ist kein Hinweis. Korrigiere das Beispiel: ein Hinweis kopiert die Seite nicht."
  },
  "Абзац, который открывает конфликт, — развязка.": {
    "en": "The paragraph that opens the conflict is given the name of the ending. Fix the verb so it matches that ending.",
    "es": "Al párrafo que abre el conflicto se le da el nombre del final. Corrige el verbo para que cuadre con ese final.",
    "de": "Der Absatz, der den Konflikt öffnet, erhält den Namen des Endes. Korrigiere das Verb passend zu diesem Ende."
  },
  "метафора / это / города / полотно / Серое": {
    "en": "Put the words in order. A gray canvas of a city is a hidden comparison.",
    "es": "Ordena las palabras. Un lienzo gris de ciudad es una comparación oculta.",
    "de": "Bringe die Wörter in Ordnung. Eine graue Leinwand der Stadt ist ein verdeckter Vergleich."
  },
  "эпитет / это / вокзал / Усталый": {
    "en": "Put the words in order. The tired station is an evaluative modifier.",
    "es": "Ordena las palabras. La estación cansada es un modificador valorativo.",
    "de": "Bringe die Wörter in Ordnung. Der müde Bahnhof ist eine wertende Beifügung."
  },
  "повествователь / это / фрагмента / Голос": {
    "en": "Put the words in order. The voice of the fragment is the one who narrates it.",
    "es": "Ordena las palabras. La voz del fragmento es quien lo narra.",
    "de": "Bringe die Wörter in Ordnung. Die Stimme des Fragments ist die erzählende Instanz."
  },
  "подтексте / на / держится / Смысл": {
    "en": "Put the words in order. The meaning rests on what is not said.",
    "es": "Ordena las palabras. El sentido se sostiene en lo no dicho.",
    "de": "Bringe die Wörter in Ordnung. Der Sinn ruht auf dem Ungesagten."
  },
  "кульминация / это / напряжения / точка / Высшая": {
    "en": "Put the words in order. The highest point of tension is the peak of the fragment.",
    "es": "Ordena las palabras. El punto más alto de tensión es la cima del fragmento.",
    "de": "Bringe die Wörter in Ordnung. Der höchste Spannungspunkt ist der Gipfel des Fragments."
  },
  "лейтмотив / это / дороги / Мотив": {
    "en": "Put the words in order. The road motif is a motif that returns.",
    "es": "Ordena las palabras. El motivo del camino es un motivo que vuelve.",
    "de": "Bringe die Wörter in Ordnung. Das Wegmotiv ist ein wiederkehrendes Motiv."
  },
  "аллюзия / это / цитаты / без / Намёк": {
    "en": "Put the words in order. A hint without a quotation is an intertextual nod.",
    "es": "Ordena las palabras. Un guiño sin cita es un gesto intertextual.",
    "de": "Bringe die Wörter in Ordnung. Ein Hinweis ohne Zitat ist eine intertextuelle Anspielung."
  },
  "развязка / это / абзац / Финальный": {
    "en": "Put the words in order. The final paragraph is the closing of the conflict.",
    "es": "Ordena las palabras. El párrafo final es el cierre del conflicto.",
    "de": "Bringe die Wörter in Ordnung. Der letzte Absatz ist der Schluss des Konflikts."
  },
  "Оппонент сомневается в выборке. Омар отвечает: «___ замечание, выборка и правда узка».": {
    "en": "The opponent doubts the sample. Omar answers: «___ the remark, the sample really is narrow.» Choose the polite way to restate criticism. Omar is masculine.",
    "es": "El oponente duda de la muestra. Omar responde: «___ la observación, la muestra sí es estrecha.» Elige la forma cortés de reformular la crítica. Omar es masculino.",
    "de": "Der Opponent bezweifelt die Stichprobe. Omar antwortet: «___ die Anmerkung, die Stichprobe ist wirklich schmal.» Wähle die höfliche Art, Kritik nachzusprechen. Omar ist maskulin."
  },
  "В рамках исследования гипотеза пока ___.": {
    "en": "Within the study the hypothesis so far ___. Choose the status of a hypothesis that has not been withdrawn.",
    "es": "En el marco del estudio la hipótesis por ahora ___. Elige el estado de una hipótesis que no se ha retirado.",
    "de": "Im Rahmen der Untersuchung ___ die Hypothese vorerst. Wähle den Status einer Hypothese, die nicht zurückgezogen wurde."
  },
  "Рецензент пишет не «ты неправ», а «вывод ___ уточнения».": {
    "en": "A reviewer does not write «you are wrong», but «the conclusion ___ clarification.» Choose the verb of the academic formula.",
    "es": "Un revisor no escribe «te equivocas», sino «la conclusión ___ una precisión.» Elige el verbo de la fórmula académica.",
    "de": "Ein Gutachter schreibt nicht «du liegst falsch», sondern «die Schlussfolgerung ___ der Präzisierung.» Wähle das Verb der akademischen Formel."
  },
  "На защите не говорят «данные врут». Говорят: данные ___ с выводом.": {
    "en": "At a defense one does not say the data are lying. One says the data ___ the conclusion. Choose the neutral verb of divergence.",
    "es": "En una defensa no se dice que los datos mienten. Se dice que los datos ___ la conclusión. Elige el verbo neutro de divergencia.",
    "de": "Bei einer Verteidigung sagt man nicht, die Daten lögen. Man sagt, die Daten ___ von der Schlussfolgerung. Wähle das neutrale Verb der Abweichung."
  },
  "Метод описан так, чтобы опыт можно было повторить. В отзыве это называют ___.": {
    "en": "The method is described so the experiment can be repeated. In the review this is called ___. Choose the term, instrumental.",
    "es": "El método está descrito para que el experimento se pueda repetir. En la reseña lo llaman ___. Elige el término, en instrumental.",
    "de": "Die Methode ist so beschrieben, dass der Versuch wiederholt werden kann. Im Gutachten nennt man das ___. Wähle den Terminus, im Instrumental."
  },
  "«Позвольте ___: выборка не покрывает второй курс».": {
    "en": "«Allow me to ___: the sample does not cover the second year.» Choose the infinitive of a polite objection.",
    "es": "«Permítame ___: la muestra no cubre el segundo curso.» Elige el infinitivo de una objeción cortés.",
    "de": "«Gestatten Sie zu ___: die Stichprobe erfasst das zweite Studienjahr nicht.» Wähle den Infinitiv eines höflichen Einwands."
  },
  "Связь двух рядов цифр без претензии на причину называют ___.": {
    "en": "A link between two series of figures with no claim of cause is called ___. Choose the statistics term, instrumental.",
    "es": "Una relación entre dos series de cifras sin pretensión de causa se llama ___. Elige el término de estadística, en instrumental.",
    "de": "Einen Zusammenhang zweier Zahlenreihen ohne Kausalanspruch nennt man ___. Wähle den Statistikterminus, im Instrumental."
  },
  "В конце доклада автор не говорит «ну всё». Он говорит: «___».": {
    "en": "At the end of the paper the author does not say a corridor goodbye. He says: «___.» Choose the polite close.",
    "es": "Al final de la ponencia el autor no se despide como en el pasillo. Dice: «___.» Elige el cierre cortés.",
    "de": "Am Ende des Vortrags sagt der Autor keinen Flur-Abschied. Er sagt: «___.» Wähle den höflichen Schluss."
  },
  "Омар начинает ответ так: «Если я правильно ___, выборка не включает заочный курс».": {
    "en": "Omar begins: «If I ___ correctly, the sample does not include correspondence students.» Past of понять. The speaker is Omar.",
    "es": "Omar empieza: «Si ___ bien, la muestra no incluye el curso a distancia.» Pasado de понять. Habla Omar.",
    "de": "Omar beginnt: «Wenn ich richtig ___, umfasst die Stichprobe kein Fernstudium.» Vergangenheit von понять. Omar spricht."
  },
  "В рамках исследования гипотеза остаётся ___.": {
    "en": "Within the study the hypothesis remains ___. Instrumental: the hypothesis has not been withdrawn.",
    "es": "En el marco del estudio la hipótesis sigue ___. Instrumental: la hipótesis no se ha retirado.",
    "de": "Im Rahmen der Untersuchung bleibt die Hypothese ___. Instrumental: die Hypothese wurde nicht zurückgezogen."
  },
  "Вывод ___ уточнения: второй шаг не описан.": {
    "en": "The conclusion ___ clarification: the second step is not described. Third person of требовать.",
    "es": "La conclusión ___ una precisión: el segundo paso no está descrito. Tercera persona de требовать.",
    "de": "Die Schlussfolgerung ___ der Präzisierung: der zweite Schritt ist nicht beschrieben. 3. Person von требовать."
  },
  "Данные ___ с выводом, и это нужно сказать вежливо.": {
    "en": "The data ___ the conclusion, and this should be said politely. Present plural of расходиться.",
    "es": "Los datos ___ la conclusión, y conviene decirlo con cortesía. Presente plural de расходиться.",
    "de": "Die Daten ___ von der Schlussfolgerung, und das sollte man höflich sagen. Präsens Plural von расходиться."
  },
  "Метод можно повторить. В отзыве отмечена ___ метода.": {
    "en": "The method can be repeated. The review notes the ___ of the method. Nominative of the term for repeatability.",
    "es": "El método se puede repetir. La reseña señala la ___ del método. Nominativo del término de repetibilidad.",
    "de": "Die Methode lässt sich wiederholen. Das Gutachten vermerkt die ___ der Methode. Nominativ des Terminus der Wiederholbarkeit."
  },
  "Позвольте ___: выборка не покрывает второй курс.": {
    "en": "Allow me to ___: the sample does not cover the second year. Infinitive of a polite objection after позвольте.",
    "es": "Permítame ___: la muestra no cubre el segundo curso. Infinitivo de una objeción cortés tras позвольте.",
    "de": "Gestatten Sie zu ___: die Stichprobe erfasst das zweite Studienjahr nicht. Infinitiv eines höflichen Einwands nach позвольте."
  },
  "Связь двух рядов без претензии на причину — это ___.": {
    "en": "A link between two series with no claim of cause is ___. Nominative of the statistics term.",
    "es": "Una relación entre dos series sin pretensión de causa es ___. Nominativo del término de estadística.",
    "de": "Ein Zusammenhang zweier Reihen ohne Kausalanspruch ist ___. Nominativ des Statistikterminus."
  },
  "В конце доклада автор говорит: «Позвольте ___ на этом».": {
    "en": "At the end of the paper the author says: «Allow me to ___ here.» Infinitive of a polite close.",
    "es": "Al final de la ponencia el autor dice: «Permítame ___ aquí.» Infinitivo de un cierre cortés.",
    "de": "Am Ende des Vortrags sagt der Autor: «Gestatten Sie, hier zu ___.» Infinitiv eines höflichen Schlusses."
  },
  "Омар начинает так: «Если я правильно поняла замечание, выборка не включает заочный курс».": {
    "en": "Omar is speaking, but the past ending is feminine. Fix the gender.",
    "es": "Habla Omar, pero la terminación del pasado es femenina. Corrige el género.",
    "de": "Omar spricht, die Vergangenheitsendung ist aber feminin. Korrigiere das Genus."
  },
  "В рамках исследования гипотеза остаётся рабочая.": {
    "en": "After остаётся the predicate is in the wrong case. Fix the case.",
    "es": "Tras остаётся el predicado está en el caso equivocado. Corrige el caso.",
    "de": "Nach остаётся steht das Prädikat im falschen Kasus. Korrigiere den Kasus."
  },
  "Вывод просит уточнения: второй шаг не описан.": {
    "en": "The academic formula does not have the conclusion 'asking' for clarification. Fix the verb.",
    "es": "La fórmula académica no hace que la conclusión «pida» una precisión. Corrige el verbo.",
    "de": "Die akademische Formel lässt die Schlussfolgerung nicht um Präzisierung «bitten». Korrigiere das Verb."
  },
  "Данные ругаются с выводом, и это нужно сказать вежливо.": {
    "en": "The data are said to quarrel with the conclusion. That verb is the wrong register. Fix it to a neutral divergence.",
    "es": "Se dice que los datos riñen con la conclusión. Ese verbo no es el registro. Cámbialo por una divergencia neutra.",
    "de": "Die Daten sollen sich mit der Schlussfolgerung streiten. Das Verb hat das falsche Register. Ändere es in eine neutrale Abweichung."
  },
  "Метод можно повторить. В отзыве отмечена интрига метода.": {
    "en": "The method can be repeated, but the review names a plot device. Fix the term: this is about repeatability.",
    "es": "El método se puede repetir, pero la reseña nombra un recurso de trama. Corrige el término: se trata de repetibilidad.",
    "de": "Die Methode ist wiederholbar, das Gutachten nennt aber ein Handlungsmittel. Korrigiere den Terminus: es geht um Wiederholbarkeit."
  },
  "Позвольте наехать: выборка не покрывает второй курс.": {
    "en": "After позвольте the infinitive is a rude attack. Fix it to a polite objection.",
    "es": "Tras позвольте el infinitivo es un ataque grosero. Cámbialo por una objeción cortés.",
    "de": "Nach позвольте ist der Infinitiv ein derber Angriff. Ändere ihn in einen höflichen Einwand."
  },
  "Связь двух рядов без претензии на причину — это кульминация.": {
    "en": "A link with no claim of cause is given a plot term. Fix the term: this is statistics.",
    "es": "A una relación sin pretensión de causa se le da un término de trama. Corrige el término: esto es estadística.",
    "de": "Ein Zusammenhang ohne Kausalanspruch erhält einen Handlungsterminus. Korrigiere den Terminus: das ist Statistik."
  },
  "В конце доклада автор говорит: «Ну всё, хорош».": {
    "en": "The paper ends with a corridor phrase. Fix the close so it matches a formal talk.",
    "es": "La ponencia termina con una frase de pasillo. Corrige el cierre para que cuadre con una charla formal.",
    "de": "Der Vortrag endet mit einer Flurwendung. Korrigiere den Schluss passend zu einem förmlichen Vortrag."
  },
  "замечание / понял / правильно / Омар": {
    "en": "Put the words in order. Omar understood the remark correctly. He is masculine.",
    "es": "Ordena las palabras. Omar entendió bien la observación. Es masculino.",
    "de": "Bringe die Wörter in Ordnung. Omar hat die Anmerkung richtig verstanden. Er ist maskulin."
  },
  "рабочей / остаётся / исследования / Гипотеза": {
    "en": "Put the words in order. The study's hypothesis remains a working one.",
    "es": "Ordena las palabras. La hipótesis del estudio sigue siendo de trabajo.",
    "de": "Bringe die Wörter in Ordnung. Die Hypothese der Untersuchung bleibt eine Arbeitshypothese."
  },
  "уточнения / требует / Вывод": {
    "en": "Put the words in order. The conclusion needs clarification.",
    "es": "Ordena las palabras. La conclusión requiere una precisión.",
    "de": "Bringe die Wörter in Ordnung. Die Schlussfolgerung bedarf der Präzisierung."
  },
  "выводом / с / расходятся / Данные": {
    "en": "Put the words in order. The data diverge from the conclusion.",
    "es": "Ordena las palabras. Los datos divergen de la conclusión.",
    "de": "Bringe die Wörter in Ordnung. Die Daten weichen von der Schlussfolgerung ab."
  },
  "метода / воспроизводимость / отмечена / отзыве / В": {
    "en": "Put the words in order. The review notes that the method can be repeated.",
    "es": "Ordena las palabras. La reseña señala que el método se puede repetir.",
    "de": "Bringe die Wörter in Ordnung. Das Gutachten vermerkt, dass die Methode wiederholbar ist."
  },
  "выборке / по / возразить / Позвольте": {
    "en": "Put the words in order. A polite objection about the sample.",
    "es": "Ordena las palabras. Una objeción cortés sobre la muestra.",
    "de": "Bringe die Wörter in Ordnung. Ein höflicher Einwand zur Stichprobe."
  },
  "корреляцией / называется / связь / Эта": {
    "en": "Put the words in order. This link is called a statistical correlation.",
    "es": "Ordena las palabras. Esta relación se llama una correlación estadística.",
    "de": "Bringe die Wörter in Ordnung. Dieser Zusammenhang heißt statistische Korrelation."
  },
  "этом / на / закончить / Позвольте": {
    "en": "Put the words in order. A polite request to stop here.",
    "es": "Ordena las palabras. Una petición cortés de terminar aquí.",
    "de": "Bringe die Wörter in Ordnung. Eine höfliche Bitte, hier zu schließen."
  },
  "Омар не верит, что защиту перенесли: «___ перенесли?»": {
    "en": "Omar cannot believe the defense was postponed: «___ they postponed it?» Choose the particle of strong surprise.",
    "es": "Omar no puede creer que aplazaran la defensa: «¿___ la aplazaron?» Elige la partícula de sorpresa fuerte.",
    "de": "Omar kann nicht glauben, dass die Verteidigung verschoben wurde: «___ sie wurde verschoben?» Wähle die Partikel starken Erstaunens."
  },
  "Анна напоминает то, что оба уже знают: «Срок ___, завтра».": {
    "en": "Anna reminds him of what they both already know: «The deadline is ___, tomorrow.» Choose the particle of shared knowledge.",
    "es": "Anna le recuerda lo que ambos ya saben: «El plazo es ___, mañana.» Elige la partícula del saber compartido.",
    "de": "Anna erinnert an das, was beide schon wissen: «Die Frist ist ___, morgen.» Wähle die Partikel gemeinsamen Wissens."
  },
  "Редактору говорят мягко: «Посмотрите-___ этот абзац».": {
    "en": "They speak gently to the editor: «Look-___ at this paragraph.» Choose the particle of a soft request. It is written after a hyphen.",
    "es": "Le hablan con suavidad al editor: «Mire-___ este párrafo.» Elige la partícula de una petición suave. Se escribe tras un guion.",
    "de": "Man sagt dem Redakteur sanft: «Schauen Sie-___ diesen Absatz an.» Wähle die Partikel einer weichen Bitte. Sie steht nach einem Bindestrich."
  },
  "Омар сомневается в пересказе: «___ редактор это одобрил?»": {
    "en": "Omar doubts the retelling: «___ the editor approved this?» Choose the particle of doubt.",
    "es": "Omar duda del recuento: «¿___ lo aprobó el editor?» Elige la partícula de duda.",
    "de": "Omar bezweifelt die Nacherzählung: «___ hat der Redakteur das gebilligt?» Wähle die Partikel des Zweifels."
  },
  "Анна сомневалась и всё равно отправила файл: «Я ___ отправила».": {
    "en": "Anna hesitated and sent the file anyway: «I ___ sent it.» Choose the particle of 'against expectation'. Anna is feminine.",
    "es": "Anna dudó y envió el archivo de todos modos: «Yo ___ lo envié.» Elige la partícula de «contra lo esperado». Anna es femenino.",
    "de": "Anna zögerte und schickte die Datei trotzdem: «Ich habe sie ___ geschickt.» Wähle die Partikel «wider Erwarten». Anna ist feminin."
  },
  "Нужно подчеркнуть, что не читали именно отзыв. Какой порядок держит этот акцент?": {
    "en": "The point is that they did not read the review in particular. Which word order keeps that focus? Choose the order that makes the review the topic.",
    "es": "Hay que subrayar que no leyeron precisamente el dictamen. ¿Qué orden mantiene ese foco? Elige el orden que hace del dictamen el tema.",
    "de": "Betont werden soll, dass gerade das Gutachten nicht gelesen wurde. Welche Wortfolge hält diesen Fokus? Wähle die Folge, die das Gutachten zum Thema macht."
  },
  "Косвенный вопрос о сроке эфира: «Не знаю, успеем ___ к эфиру».": {
    "en": "An indirect question about the broadcast: «I don't know if we will be ___ on time.» Choose the particle of an indirect question.",
    "es": "Una pregunta indirecta sobre la emisión: «No sé si ___ llegaremos a tiempo.» Elige la partícula de la pregunta indirecta.",
    "de": "Eine indirekte Frage zur Sendung: «Ich weiß nicht, ob wir ___ rechtzeitig kommen.» Wähle die Partikel der indirekten Frage."
  },
  "Омар выделяет довод, который всем уже известен: «Довод-___ сильный».": {
    "en": "Omar singles out an argument everyone already knows: «That argument-___ is strong.» Choose the particle that picks out a known topic, after a hyphen.",
    "es": "Omar destaca un argumento que todos ya conocen: «El argumento-___ es fuerte.» Elige la partícula que señala un tema conocido, tras un guion.",
    "de": "Omar hebt ein Argument hervor, das alle schon kennen: «Das Argument-___ ist stark.» Wähle die Partikel, die ein bekanntes Thema herausgreift, nach einem Bindestrich."
  },
  "Омар не верит новости: «___ защиту перенесли?»": {
    "en": "Omar does not believe the news: «___ they postponed the defense?» The particle of strong surprise.",
    "es": "Omar no cree la noticia: «¿___ aplazaron la defensa?» La partícula de sorpresa fuerte.",
    "de": "Omar glaubt die Nachricht nicht: «___ sie haben die Verteidigung verschoben?» Die Partikel starken Erstaunens."
  },
  "Анна напоминает общее знание: «Срок ___, завтра».": {
    "en": "Anna reminds him of shared knowledge: «The deadline is ___, tomorrow.» The particle of a fact the listener already knows.",
    "es": "Anna recuerda un saber común: «El plazo es ___, mañana.» La partícula de un hecho que el oyente ya conoce.",
    "de": "Anna erinnert an gemeinsames Wissen: «Die Frist ist ___, morgen.» Die Partikel einer Tatsache, die der Hörer schon kennt."
  },
  "Мягко редактору: «Посмотрите-___ абзац».": {
    "en": "Gently to the editor: «Look-___ at the paragraph.» The particle of a soft request, written after a hyphen.",
    "es": "Con suavidad al editor: «Mire-___ el párrafo.» La partícula de una petición suave, tras un guion.",
    "de": "Sanft zum Redakteur: «Schauen Sie-___ den Absatz an.» Die Partikel einer weichen Bitte, nach einem Bindestrich."
  },
  "Омар сомневается: «___ редактор это одобрил?»": {
    "en": "Omar doubts it: «___ the editor approved this?» The particle of doubt in a question.",
    "es": "Omar lo duda: «¿___ lo aprobó el editor?» La partícula de duda en una pregunta.",
    "de": "Omar bezweifelt es: «___ hat der Redakteur das gebilligt?» Die Partikel des Zweifels in einer Frage."
  },
  "Анна долго сомневалась и всё равно отправила файл: «Я ___ отправила».": {
    "en": "Anna hesitated for a long time and sent the file anyway: «I ___ sent it.» The particle of acting against expectation. The speaker is Anna.",
    "es": "Anna dudó mucho y envió el archivo igual: «Yo ___ lo envié.» La partícula de actuar contra lo esperado. Habla Anna.",
    "de": "Anna zögerte lange und schickte die Datei trotzdem: «Ich habe sie ___ geschickt.» Die Partikel wider Erwarten. Anna spricht."
  },
  "Речь об отзыве рецензента. Акцент на нём, не на нас: «___ мы не читали».": {
    "en": "The talk is about the reviewer's review. The focus is on it, not on us: «___ we did not read.» Accusative of the topic, placed first.",
    "es": "Se habla del dictamen del revisor. El foco está en él, no en nosotros: «___ no lo leímos.» Acusativo del tema, al principio.",
    "de": "Es geht um das Gutachten des Gutachters. Der Fokus liegt darauf, nicht auf uns: «___ haben wir nicht gelesen.» Akkusativ des Themas, vorangestellt."
  },
  "«Не знаю, успеем ___ к эфиру».": {
    "en": "«I don't know if we will be ___ on time for the broadcast.» The particle of an indirect question.",
    "es": "«No sé si ___ llegaremos a tiempo a la emisión.» La partícula de la pregunta indirecta.",
    "de": "«Ich weiß nicht, ob wir ___ rechtzeitig zur Sendung kommen.» Die Partikel der indirekten Frage."
  },
  "Всем уже известный довод Омар выделяет так: «Довод-___ сильный».": {
    "en": "Omar picks out an argument everyone already knows: «The argument-___ is strong.» The topic particle, after a hyphen.",
    "es": "Omar destaca un argumento que todos conocen: «El argumento-___ es fuerte.» La partícula de tema, tras un guion.",
    "de": "Omar hebt ein allen bekanntes Argument hervor: «Das Argument-___ ist stark.» Die Themenpartikel, nach einem Bindestrich."
  },
  "Омар не верит новости: «Вот защиту перенесли?»": {
    "en": "Omar does not believe the news, but the particle only points at something. Fix the particle: this is disbelief.",
    "es": "Omar no cree la noticia, pero la partícula solo señala algo. Corrige la partícula: esto es incredulidad.",
    "de": "Omar glaubt die Nachricht nicht, die Partikel zeigt aber nur auf etwas. Korrigiere die Partikel: das ist Unglaube."
  },
  "Анна напоминает известное: «Срок неужели завтра».": {
    "en": "Anna is reminding him of a known fact, but the particle marks surprise at news. Fix the particle.",
    "es": "Anna le recuerda un hecho conocido, pero la partícula marca sorpresa ante una noticia. Corrige la partícula.",
    "de": "Anna erinnert an eine bekannte Tatsache, die Partikel markiert aber Erstaunen über eine Neuigkeit. Korrigiere die Partikel."
  },
  "Мягко редактору: «Посмотрите-же абзац».": {
    "en": "The request is meant to be gentle, but the particle presses. Fix the particle.",
    "es": "La petición quiere ser suave, pero la partícula aprieta. Corrige la partícula.",
    "de": "Die Bitte soll sanft sein, die Partikel drückt aber. Korrigiere die Partikel."
  },
  "Омар сомневается: «Ведь редактор это одобрил?»": {
    "en": "Omar is doubting, but the particle marks shared knowledge. Fix the particle.",
    "es": "Omar duda, pero la partícula marca un saber compartido. Corrige la partícula.",
    "de": "Omar zweifelt, die Partikel markiert aber gemeinsames Wissen. Korrigiere die Partikel."
  },
  "Анна сомневалась и всё равно отправила файл: «Я неужели отправила».": {
    "en": "Anna sent the file against her own doubt, but the particle marks surprise. Fix the particle. Anna is feminine.",
    "es": "Anna envió el archivo contra su propia duda, pero la partícula marca sorpresa. Corrige la partícula. Anna es femenino.",
    "de": "Anna schickte die Datei gegen den eigenen Zweifel, die Partikel markiert aber Erstaunen. Korrigiere die Partikel. Anna ist feminin."
  },
  "Акцент на отзыве, не на нас: «Мы не читали отзыв, а только слышали пересказ».": {
    "en": "The focus should be on the review, not on us, but the review sits late in the clause. Fix the word order.",
    "es": "El foco debe estar en el dictamen, no en nosotros, pero el dictamen queda tarde en la frase. Corrige el orden.",
    "de": "Der Fokus soll auf dem Gutachten liegen, nicht auf uns, das Gutachten steht aber spät im Satz. Korrigiere die Wortfolge."
  },
  "«Не знаю, успеем же к эфиру».": {
    "en": "The clause is an indirect question, but the particle is the wrong one. Fix the particle.",
    "es": "La oración es una pregunta indirecta, pero la partícula no es la adecuada. Corrígelo.",
    "de": "Der Satz ist eine indirekte Frage, die Partikel ist aber die falsche. Korrigiere sie."
  },
  "Всем известный довод Омар выделяет так: «Довод-ка сильный».": {
    "en": "Omar is picking out a known argument, but the particle is the one used in a soft request. Fix the particle.",
    "es": "Omar destaca un argumento conocido, pero la partícula es la de una petición suave. Corrige la partícula.",
    "de": "Omar hebt ein bekanntes Argument hervor, die Partikel ist aber die einer weichen Bitte. Korrigiere die Partikel."
  },
  "перенесли / защиту / Неужели": {
    "en": "Put the words in order. Strong surprise: they really postponed the defense.",
    "es": "Ordena las palabras. Sorpresa fuerte: de verdad aplazaron la defensa.",
    "de": "Bringe die Wörter in Ordnung. Starkes Erstaunen: sie haben die Verteidigung wirklich verschoben."
  },
  "завтра / уже / ведь / Срок": {
    "en": "Put the words in order. A reminder of a shared fact: the deadline is already tomorrow.",
    "es": "Ordena las palabras. Un recordatorio de un hecho compartido: el plazo ya es mañana.",
    "de": "Bringe die Wörter in Ordnung. Erinnerung an eine bekannte Tatsache: die Frist ist schon morgen."
  },
  "абзац / этот / Посмотрите-ка": {
    "en": "Put the words in order. A gentle request to look at this paragraph.",
    "es": "Ordena las palabras. Una petición suave de mirar este párrafo.",
    "de": "Bringe die Wörter in Ordnung. Eine sanfte Bitte, diesen Absatz anzusehen."
  },
  "одобрил / это / редактор / Разве": {
    "en": "Put the words in order. Doubt: did the editor really approve this?",
    "es": "Ordena las palabras. Duda: ¿de verdad lo aprobó el editor?",
    "de": "Bringe die Wörter in Ordnung. Zweifel: hat der Redakteur das wirklich gebilligt?"
  },
  "файл / отправила / всё-таки / Анна": {
    "en": "Put the words in order. Anna sent the file after all. She is feminine.",
    "es": "Ordena las palabras. Anna envió el archivo de todos modos. Es femenino.",
    "de": "Bringe die Wörter in Ordnung. Anna hat die Datei trotzdem geschickt. Sie ist feminin."
  },
  "пересказ / слышали / только / а / читали / не / мы / Отзыв": {
    "en": "Put the words in order. The focus is on the review: we did not read it, we only heard a retelling.",
    "es": "Ordena las palabras. El foco está en el dictamen: no lo leímos, solo oímos un recuento.",
    "de": "Bringe die Wörter in Ordnung. Der Fokus liegt auf dem Gutachten: wir haben es nicht gelesen, nur eine Nacherzählung gehört."
  },
  "эфиру / к / ли / успеем / знаю / Не": {
    "en": "Put the words in order. I do not know whether we will be on time for the broadcast.",
    "es": "Ordena las palabras. No sé si llegaremos a tiempo a la emisión.",
    "de": "Bringe die Wörter in Ordnung. Ich weiß nicht, ob wir rechtzeitig zur Sendung kommen."
  },
  "сильный / Довод-то / сказал / Омар": {
    "en": "Put the words in order. Omar picks out a known argument and calls it strong.",
    "es": "Ordena las palabras. Omar destaca un argumento conocido y lo llama fuerte.",
    "de": "Bringe die Wörter in Ordnung. Omar hebt ein bekanntes Argument hervor und nennt es stark."
  }
};
