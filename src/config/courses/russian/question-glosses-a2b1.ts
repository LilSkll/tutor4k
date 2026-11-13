import type { InterfaceLanguage } from "@/types";

/**
 * Pedagogical question glosses for RKI A2 (chapters 9–16), B1 (chapters 17–22),
 * and bridge chapters 38–41.
 * Keys = exact authored question strings. Support for en/es/de must not reveal the answer.
 * One stem, «У меня нет ___.», is shared by a fill-blank and a multiple-choice item.
 */
export const RUSSIAN_A2B1_QUESTION_GLOSSES: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  // Ch. 9 — Past tense
  "Она ___ в библиотеке.": {
    en: "She ___ in the library. Choose the past of быть (to be) that matches она (she). The options «был», «была», «было», and «были» differ only by gender and number.",
    es: "Ella ___ en la biblioteca. Elige el pasado de быть (ser o estar) que concuerde con она (ella). «был», «была», «было» y «были» solo se distinguen por el género y el número.",
    de: "Sie ___ in der Bibliothek. Wähle die Vergangenheit von быть (sein), die zu она (sie) passt. «был», «была», «было» und «были» unterscheiden sich nur nach Genus und Zahl.",
  },
  "Вчера вечером мы ___ в кафе.": {
    en: "Yesterday evening we ___ at the café. Past of быть (to be), matching мы (we). Options «был», «была», «было», «были» are the same verb in different genders and in the plural.",
    es: "Ayer por la noche nosotros ___ en el café. Pasado de быть (ser o estar), de acuerdo con мы (nosotros). «был», «была», «было» y «были» son el mismo verbo en distinto género o en plural.",
    de: "Gestern Abend ___ wir im Café. Vergangenheit von быть (sein), passend zu мы (wir). «был», «была», «было» und «были» sind dasselbe Verb in anderem Genus oder im Plural.",
  },
  "Утром окно ___ закрыто.": {
    en: "In the morning the window ___ closed. «окно» (window) is neuter; «закрыто» means closed. Choose the past of быть (to be) among «был», «была», «было», and «были».",
    es: "Por la mañana la ventana ___ cerrada. «окно» (ventana) es neutro; «закрыто» significa cerrada. Elige el pasado de быть (ser o estar) entre «был», «была», «было» y «были».",
    de: "Morgens ___ das Fenster geschlossen. «окно» (Fenster) ist Neutrum; «закрыто» heißt geschlossen. Wähle die Vergangenheit von быть (sein) aus «был», «была», «было» und «были».",
  },
  "Студент Павел вчера ___ новый текст.": {
    en: "Yesterday the student Pavel ___ a new text. Past of читать (to read), matching a masculine singular name. «читал», «читала», and «читали» are past forms; «читаю» is present, “I read”.",
    es: "Ayer el estudiante Pável ___ un texto nuevo. Pasado de читать (leer), en masculino singular. «читал», «читала» y «читали» son pasado; «читаю» es presente: yo leo.",
    de: "Gestern ___ der Student Pavel einen neuen Text. Vergangenheit von читать (lesen), maskulin Singular. «читал», «читала» und «читали» sind Vergangenheit; «читаю» ist Präsens: ich lese.",
  },
  "Сосед по комнате вчера ___ дома.": {
    en: "Yesterday the roommate ___ at home. «сосед по комнате» is one male roommate. Past of быть (to be): «был», «была», «было», «были» change with gender and number.",
    es: "Ayer el compañero de habitación ___ en casa. «сосед по комнате» es un compañero, masculino singular. Pasado de быть: «был», «была», «было», «были» cambian con el género y el número.",
    de: "Gestern ___ der Mitbewohner zu Hause. «сосед по комнате» ist ein Mitbewohner, maskulin Singular. Vergangenheit von быть: «был», «была», «было», «были» wechseln nach Genus und Zahl.",
  },
  "Вчера студенты ___ тест.": {
    en: "Yesterday the students ___ the test (handed it in). Past of сдать (to hand in), plural. «сдал», «сдала», and «сдали» are past; «сдают» is present, “they hand in”.",
    es: "Ayer los estudiantes ___ el examen (lo entregaron). Pasado de сдать (entregar), en plural. «сдал», «сдала» y «сдали» son pasado; «сдают» es presente: ellos entregan.",
    de: "Gestern ___ die Studierenden den Test ab. Vergangenheit von сдать (abgeben), Plural. «сдал», «сдала» und «сдали» sind Vergangenheit; «сдают» ist Präsens: sie geben ab.",
  },
  "Вчера они ___ упражнения в аудитории.": {
    en: "Yesterday they ___ the exercises in the classroom. Past of писать (to write), matching они (they). «писал», «писала», «писали» are past; «пишут» is present, “they write”.",
    es: "Ayer ellos ___ los ejercicios en el aula. Pasado de писать (escribir), con они (ellos). «писал», «писала» y «писали» son pasado; «пишут» es presente: ellos escriben.",
    de: "Gestern ___ sie die Übungen im Hörsaal. Vergangenheit von писать (schreiben), passend zu они (sie). «писал», «писала», «писали» sind Vergangenheit; «пишут» ist Präsens: sie schreiben.",
  },
  "Мария вчера ___ задание в комнате.": {
    en: "Yesterday Maria ___ the assignment in the room. Past of делать (to do), matching a feminine singular name. «делал», «делала», «делали» are past; «делает» is present, “does”.",
    es: "Ayer María ___ la tarea en la habitación. Pasado de делать (hacer), femenino singular. «делал», «делала» y «делали» son pasado; «делает» es presente: hace.",
    de: "Gestern ___ Maria die Aufgabe im Zimmer. Vergangenheit von делать (machen), feminin Singular. «делал», «делала», «делали» sind Vergangenheit; «делает» ist Präsens: macht.",
  },
  "Вчера он ___ дома.": {
    en: "Yesterday he ___ at home. Past of быть (to be), matching он (he).",
    es: "Ayer él ___ en casa. Pasado de быть (ser o estar), de acuerdo con он (él).",
    de: "Gestern ___ er zu Hause. Vergangenheit von быть (sein), passend zu он (er).",
  },
  "Вчера Мария ___ в музее.": {
    en: "Yesterday Maria ___ at the museum. Past of быть (to be), matching a feminine singular name.",
    es: "Ayer María ___ en el museo. Pasado de быть (ser o estar), en femenino singular.",
    de: "Gestern ___ Maria im Museum. Vergangenheit von быть (sein), feminin Singular.",
  },
  "Мы ___ в кафе после занятия.": {
    en: "We ___ at the café after class. «занятие» is a class. Past of быть (to be), plural.",
    es: "Nosotros ___ en el café después de la clase. «занятие» es una clase. Pasado de быть (ser o estar), en plural.",
    de: "Wir ___ nach dem Unterricht im Café. «занятие» ist eine Unterrichtsstunde. Vergangenheit von быть (sein), Plural.",
  },
  "Новое задание ___ на столе.": {
    en: "The new assignment ___ on the table. «задание» (assignment) is neuter. Past of быть (to be).",
    es: "La tarea nueva ___ sobre la mesa. «задание» (tarea) es neutro. Pasado de быть (ser o estar).",
    de: "Die neue Aufgabe ___ auf dem Tisch. «задание» (Aufgabe) ist Neutrum. Vergangenheit von быть (sein).",
  },
  "Я ___ (читать) этот текст час.": {
    en: "I ___ (читать, to read) this text for an hour. Past tense; the ending shows whether the speaker is male or female.",
    es: "Yo ___ (читать, leer) este texto durante una hora. Pasado; la terminación indica si habla un hombre o una mujer.",
    de: "Ich ___ (читать, lesen) diesen Text eine Stunde lang. Vergangenheit; die Endung zeigt, ob die sprechende Person männlich oder weiblich ist.",
  },
  "Они не ___ вопрос на лекции.": {
    en: "They did not ___ the question in the lecture. Past of понять (to understand), plural.",
    es: "Ellos no ___ la pregunta en la clase. Pasado de понять (entender), en plural.",
    de: "Sie ___ die Frage in der Vorlesung nicht. Vergangenheit von понять (verstehen), Plural.",
  },
  "Вчера студенты ___ текст.": {
    en: "Yesterday the students ___ the text. Past of читать (to read), plural.",
    es: "Ayer los estudiantes ___ el texto. Pasado de читать (leer), en plural.",
    de: "Gestern ___ die Studierenden den Text. Vergangenheit von читать (lesen), Plural.",
  },
  "Омар вчера ___ на лекцию.": {
    en: "Yesterday Omar ___ for the lecture. Past of опоздать (to be late), masculine singular.",
    es: "Ayer Omar ___ a la clase. Pasado de опоздать (llegar tarde), masculino singular.",
    de: "Gestern ___ Omar zur Vorlesung. Vergangenheit von опоздать (zu spät kommen), maskulin Singular.",
  },
  "Она был в аудитории.": {
    en: "Gender: the past of быть (to be) does not match она (she). The line is about being in the classroom.",
    es: "Género: el pasado de быть (ser o estar) no concuerda con она (ella). La frase habla de estar en el aula.",
    de: "Genus: die Vergangenheit von быть (sein) passt nicht zu она (sie). Der Satz handelt davon, im Hörsaal zu sein.",
  },
  "Мы была в библиотеке вчера.": {
    en: "Number: the past of быть (to be) does not match мы (we). Yesterday, at the library.",
    es: "Número: el pasado de быть (ser o estar) no concuerda con мы (nosotros). Ayer, en la biblioteca.",
    de: "Zahl: die Vergangenheit von быть (sein) passt nicht zu мы (wir). Gestern, in der Bibliothek.",
  },
  "Павел вчера читала текст.": {
    en: "Gender: the past of читать (to read) does not match Павел (a masculine name). Yesterday he had a text.",
    es: "Género: el pasado de читать (leer) no concuerda con Павел (nombre masculino). Ayer tenía un texto.",
    de: "Genus: die Vergangenheit von читать (lesen) passt nicht zu Павел (ein männlicher Name). Gestern ging es um einen Text.",
  },
  "Они был дома вечером.": {
    en: "Number: the past of быть (to be) does not match они (they). In the evening, at home.",
    es: "Número: el pasado de быть (ser o estar) no concuerda con они (ellos). Por la noche, en casa.",
    de: "Zahl: die Vergangenheit von быть (sein) passt nicht zu они (sie). Abends, zu Hause.",
  },
  "Окно была закрыто.": {
    en: "Gender: «окно» (window) is neuter, so this past of быть (to be) does not match. The window was closed.",
    es: "Género: «окно» (ventana) es neutro, así que este pasado de быть (ser o estar) no concuerda. La ventana estaba cerrada.",
    de: "Genus: «окно» (Fenster) ist Neutrum, deshalb passt diese Vergangenheit von быть (sein) nicht. Das Fenster war geschlossen.",
  },
  "Мария не понял вопрос.": {
    en: "Gender: the past of понять (to understand) does not match Мария. She did not understand the question.",
    es: "Género: el pasado de понять (entender) no concuerda con Мария. Ella no entendió la pregunta.",
    de: "Genus: die Vergangenheit von понять (verstehen) passt nicht zu Мария. Sie hat die Frage nicht verstanden.",
  },
  "Студенты сдала тест.": {
    en: "Number: the past of сдать (to hand in) does not match студенты (students, plural). They handed in a test.",
    es: "Número: el pasado de сдать (entregar) no concuerda con студенты (estudiantes, plural). Entregaron un examen.",
    de: "Zahl: die Vergangenheit von сдать (abgeben) passt nicht zu студенты (Studierende, Plural). Sie haben einen Test abgegeben.",
  },
  "Вчера он есть в аудитории.": {
    en: "Tense: вчера (yesterday) cannot stand with the present «есть» (is). He was in the classroom.",
    es: "Tiempo: вчера (ayer) no puede ir con el presente «есть» (es/está). Él estaba en el aula.",
    de: "Tempus: вчера (gestern) verträgt sich nicht mit dem Präsens «есть» (ist). Er war im Hörsaal.",
  },
  "кафе / в / был / сосед / Вчера": {
    en: "Say that yesterday the neighbour was at the café.",
    es: "Di que ayer el vecino estaba en el café.",
    de: "Sag, dass der Nachbar gestern im Café war.",
  },
  "аудитории / в / была / Ирина": {
    en: "Say that Irina was in the classroom.",
    es: "Di que Irina estaba en el aula.",
    de: "Sag, dass Irina im Hörsaal war.",
  },
  "парке / в / были / они / Вчера": {
    en: "Say that yesterday they were in the park.",
    es: "Di que ayer ellos estaban en el parque.",
    de: "Sag, dass sie gestern im Park waren.",
  },
  "письмо / читала / вчера / Мария": {
    en: "Say that yesterday Maria was reading a letter.",
    es: "Di que ayer María leía una carta.",
    de: "Sag, dass Maria gestern einen Brief gelesen hat.",
  },
  "вопрос / не / поняли / Мы": {
    en: "Say that we did not understand the question.",
    es: "Di que nosotros no entendimos la pregunta.",
    de: "Sag, dass wir die Frage nicht verstanden haben.",
  },
  "тест / сдали / вчера / Студенты": {
    en: "Say that the students handed in the test yesterday.",
    es: "Di que los estudiantes entregaron el examen ayer.",
    de: "Sag, dass die Studierenden gestern den Test abgegeben haben.",
  },
  "открыто / было / Окно": {
    en: "Say that the window was open.",
    es: "Di que la ventana estaba abierta.",
    de: "Sag, dass das Fenster offen war.",
  },
  "лекцию / на / опоздала / Анна": {
    en: "Say that Anna was late for the lecture.",
    es: "Di que Anna llegó tarde a la clase.",
    de: "Sag, dass Anna zu spät zur Vorlesung kam.",
  },

  // Ch. 10 — Future
  "Я ___ читать вечером.": {
    en: "I ___ read in the evening. Compound future: a form of быть (to be) plus the infinitive. «буду» I will / «будешь» you will (ты) / «будет» he or she will / «будут» they will.",
    es: "Yo ___ leer por la noche. Futuro compuesto: una forma de быть (ser o estar) más el infinitivo. «буду» yo / «будешь» tú / «будет» él o ella / «будут» ellos.",
    de: "Ich ___ abends lesen. Zusammengesetzte Zukunft: eine Form von быть (sein) plus Infinitiv. «буду» ich werde / «будешь» du wirst / «будет» er oder sie wird / «будут» sie werden.",
  },
  "Завтра она ___ текст до конца.": {
    en: "Tomorrow she ___ the text through to the end: one finished result. «будет читать» will be reading / «прочитает» will read it through / «читала» was reading / «читает» reads, is reading.",
    es: "Mañana ella ___ el texto hasta el final: un resultado cerrado. «будет читать» estará leyendo / «прочитает» lo leerá entero / «читала» leía / «читает» lee.",
    de: "Morgen ___ sie den Text bis zum Ende: ein abgeschlossenes Ergebnis. «будет читать» wird gerade lesen / «прочитает» wird ihn zu Ende lesen / «читала» las / «читает» liest.",
  },
  "В следующем году мы ___ жить в общежитии.": {
    en: "Next year we ___ live in the dorm. Compound future of быть. «буду» I will / «будешь» you will (ты) / «будем» we will / «будут» they will.",
    es: "El año que viene nosotros ___ vivir en la residencia. Futuro compuesto de быть. «буду» yo / «будешь» tú / «будем» nosotros / «будут» ellos.",
    de: "Nächstes Jahr ___ wir im Wohnheim wohnen. Zusammengesetzte Zukunft von быть. «буду» ich / «будешь» du / «будем» wir / «будут» sie.",
  },
  "Ты ___ читать этот текст вечером?": {
    en: "___ you (ты) read this text in the evening? Compound future. «буду» I will / «будешь» you will (ты) / «будет» he or she will / «будете» you will (вы).",
    es: "¿___ tú leer este texto por la noche? Futuro compuesto. «буду» yo / «будешь» tú / «будет» él o ella / «будете» vosotros o usted.",
    de: "___ du diesen Text abends lesen? Zusammengesetzte Zukunft. «буду» ich werde / «будешь» du wirst / «будет» er oder sie wird / «будете» ihr oder Sie werden.",
  },
  "Они ___ работать завтра.": {
    en: "They ___ work tomorrow. Compound future of быть. «будет» he or she will / «будем» we will / «будете» you will (вы) / «будут» they will.",
    es: "Ellos ___ trabajar mañana. Futuro compuesto de быть. «будет» él o ella / «будем» nosotros / «будете» vosotros o usted / «будут» ellos.",
    de: "Sie ___ morgen arbeiten. Zusammengesetzte Zukunft von быть. «будет» er oder sie wird / «будем» wir werden / «будете» ihr oder Sie werden / «будут» sie werden.",
  },
  "Завтра брат точно ___ из другого города.": {
    en: "Tomorrow (my) brother will definitely ___ from another city: one arrival. «будет ехать» will be on the way / «приедет» will arrive / «ехал» was traveling / «ездит» goes regularly.",
    es: "Mañana el hermano seguro ___ desde otra ciudad: una llegada. «будет ехать» estará de camino / «приедет» llegará / «ехал» iba / «ездит» va con frecuencia.",
    de: "Morgen ___ der Bruder bestimmt aus einer anderen Stadt: eine Ankunft. «будет ехать» wird unterwegs sein / «приедет» wird ankommen / «ехал» war unterwegs / «ездит» fährt regelmäßig.",
  },
  "Завтра мы ___ упражнение до конца.": {
    en: "Tomorrow we ___ the exercise through to the end. «будем делать» we will be doing it / «сделаем» we will finish it / «делали» we were doing it / «делаем» we do it.",
    es: "Mañana nosotros ___ el ejercicio hasta el final. «будем делать» lo estaremos haciendo / «сделаем» lo terminaremos / «делали» lo hacíamos / «делаем» lo hacemos.",
    de: "Morgen ___ wir die Übung bis zum Ende. «будем делать» wir werden sie gerade machen / «сделаем» wir werden sie fertig machen / «делали» wir haben sie gemacht / «делаем» wir machen sie.",
  },
  "По плану завтра я ___ в музее.": {
    en: "According to the plan, tomorrow I ___ at the museum. Future of быть (to be) alone, with no second verb. «буду» I will / «будешь» you will (ты) / «будет» he or she will / «будут» they will.",
    es: "Según el plan, mañana yo ___ en el museo. Futuro de быть (ser o estar) solo, sin otro verbo. «буду» yo / «будешь» tú / «будет» él o ella / «будут» ellos.",
    de: "Nach dem Plan ___ ich morgen im Museum. Zukunft von быть (sein) allein, ohne zweites Verb. «буду» ich werde / «будешь» du wirst / «будет» er oder sie wird / «будут» sie werden.",
  },
  "Мы ___ жить в общежитии.": {
    en: "We ___ live in the dorm. Future of быть (to be) that matches мы (we), plus the infinitive.",
    es: "Nosotros ___ vivir en la residencia. Futuro de быть (ser o estar) que concuerde con мы (nosotros), más el infinitivo.",
    de: "Wir ___ im Wohnheim wohnen. Zukunft von быть (sein), passend zu мы (wir), plus Infinitiv.",
  },
  "Завтра он ___ к нам в город.": {
    en: "Tomorrow he ___ to us in the city. One arrival: приехать (to arrive).",
    es: "Mañana él ___ a nuestra ciudad, donde estamos. Una llegada: приехать (llegar).",
    de: "Morgen ___ er zu uns in die Stadt. Eine Ankunft: приехать (ankommen).",
  },
  "Я ___ готовиться к тесту вечером.": {
    en: "In the evening I ___ prepare for the test. Future of быть (to be) matching я (I), plus the infinitive готовиться (to prepare).",
    es: "Por la noche yo ___ prepararme para el examen. Futuro de быть que concuerde con я (yo), más el infinitivo готовиться (prepararse).",
    de: "Abends ___ ich mich auf den Test vorbereiten. Zukunft von быть, passend zu я (ich), plus der Infinitiv готовиться (sich vorbereiten).",
  },
  "Завтра я ___ письмо.": {
    en: "Tomorrow I ___ a letter. A finished result of написать (to write to completion), matching я (I).",
    es: "Mañana yo ___ una carta. Un resultado cerrado de написать (escribir hasta el final), con я (yo).",
    de: "Morgen ___ ich einen Brief. Ein abgeschlossenes Ergebnis von написать (zu Ende schreiben), passend zu я (ich).",
  },
  "Вы ___ писать тест завтра утром?": {
    en: "___ you (вы) write the test tomorrow morning? Future of быть (to be) that matches вы, plus the infinitive.",
    es: "¿___ usted escribir el examen mañana por la mañana? Futuro de быть que concuerde con вы, más el infinitivo.",
    de: "___ Sie morgen früh den Test schreiben? Zukunft von быть, passend zu вы, plus Infinitiv.",
  },
  "Скоро ___ каникулы.": {
    en: "Soon ___ the holidays. «каникулы» (holidays) is plural. Future of быть (to be).",
    es: "Pronto ___ las vacaciones. «каникулы» (vacaciones) es plural. Futuro de быть (ser o estar).",
    de: "Bald ___ die Ferien. «каникулы» (Ferien) ist Plural. Zukunft von быть (sein).",
  },
  "После пары я ___ в библиотеку.": {
    en: "After class I ___ to the library. One departure on foot: пойти (to set off).",
    es: "Después de la clase yo ___ a la biblioteca. Una sola salida a pie: пойти (ponerse en camino).",
    de: "Nach der Stunde ___ ich in die Bibliothek. Ein einmaliges Aufbrechen zu Fuß: пойти (losgehen).",
  },
  "Они ___ билет завтра.": {
    en: "Tomorrow they ___ a ticket. A finished result of купить (to buy), plural.",
    es: "Mañana ellos ___ un billete. Un resultado cerrado de купить (comprar), en plural.",
    de: "Morgen ___ sie eine Fahrkarte. Ein abgeschlossenes Ergebnis von купить (kaufen), Plural.",
  },
  "Я будет готовиться вечером.": {
    en: "Person: this future of быть (to be) does not match я (I). In the evening, getting ready.",
    es: "Persona: este futuro de быть (ser o estar) no concuerda con я (yo). Por la noche, prepararse.",
    de: "Person: diese Zukunft von быть (sein) passt nicht zu я (ich). Abends, sich vorbereiten.",
  },
  "Вы буду жить в общежитии.": {
    en: "Person: this future of быть (to be) does not match вы (you). Living in the dorm.",
    es: "Persona: este futuro de быть no concuerda con вы (usted o vosotros). Vivir en la residencia.",
    de: "Person: diese Zukunft von быть passt nicht zu вы (Sie oder ihr). Im Wohnheim wohnen.",
  },
  "Завтра она буду в университете.": {
    en: "Person: this future of быть (to be) does not match она (she). Tomorrow, at the university.",
    es: "Persona: este futuro de быть no concuerda con она (ella). Mañana, en la universidad.",
    de: "Person: diese Zukunft von быть passt nicht zu она (sie). Morgen, an der Universität.",
  },
  "Друзья будет жить в общежитии.": {
    en: "Number: this future of быть (to be) does not match друзья (friends, plural). Living in the dorm.",
    es: "Número: este futuro de быть no concuerda con друзья (amigos, plural). Vivir en la residencia.",
    de: "Zahl: diese Zukunft von быть passt nicht zu друзья (Freunde, Plural). Im Wohnheim wohnen.",
  },
  "Завтра я прочитал текст.": {
    en: "Tense: завтра (tomorrow) cannot take a past form. Keep a completed reading, but the tense does not fit tomorrow.",
    es: "Tiempo: завтра (mañana) no admite una forma de pasado. La lectura sigue siendo un resultado, pero el tiempo no encaja con mañana.",
    de: "Tempus: завтра (morgen) verträgt keine Vergangenheitsform. Das Lesen bleibt ein abgeschlossenes Ergebnis, aber die Zeitform passt nicht zu morgen.",
  },
  "Ты буду звонить вечером?": {
    en: "Person: this future of быть (to be) does not match ты (you). Calling in the evening.",
    es: "Persona: este futuro de быть no concuerda con ты (tú). Llamar por la noche.",
    de: "Person: diese Zukunft von быть passt nicht zu ты (du). Abends anrufen.",
  },
  "Скоро будут экзамен.": {
    en: "Number: «экзамен» (exam) is singular, so this future of быть (to be) does not match. An exam is coming soon.",
    es: "Número: «экзамен» (examen) es singular, así que este futuro de быть no concuerda. Pronto hay un examen.",
    de: "Zahl: «экзамен» (Prüfung) ist Singular, deshalb passt diese Zukunft von быть nicht. Bald steht eine Prüfung an.",
  },
  "Он будут читать план.": {
    en: "Number: this future of быть (to be) does not match он (he). He will read the plan.",
    es: "Número: este futuro de быть no concuerda con он (él). Él leerá el plan.",
    de: "Zahl: diese Zukunft von быть passt nicht zu он (er). Er wird den Plan lesen.",
  },
  "план / читать / буду / Я": {
    en: "Say that I will be reading the plan.",
    es: "Di que yo voy a estar leyendo el plan.",
    de: "Sag, dass ich den Plan lesen werde.",
  },
  "дома / будут / они / Завтра": {
    en: "Say that tomorrow they will be at home.",
    es: "Di que mañana ellos estarán en casa.",
    de: "Sag, dass sie morgen zu Hause sein werden.",
  },
  "музее / в / будем / мы / Скоро": {
    en: "Say that soon we will be at the museum.",
    es: "Di que pronto nosotros estaremos en el museo.",
    de: "Sag, dass wir bald im Museum sein werden.",
  },
  "субботу / в / приедет / Брат": {
    en: "Say that (my) brother will arrive on Saturday.",
    es: "Di que el hermano llegará el sábado.",
    de: "Sag, dass der Bruder am Samstag ankommt.",
  },
  "письмо / напишу / Вечером / я": {
    en: "Say that in the evening I will write a letter, and finish it.",
    es: "Di que por la noche yo escribiré una carta, y la terminaré.",
    de: "Sag, dass ich abends einen Brief schreiben und fertig machen werde.",
  },
  "консультация / будет / Скоро": {
    en: "Say that there will be a consultation soon. «консультация» is a meeting with a teacher.",
    es: "Di que pronto habrá una consulta. «консультация» es una tutoría con el profesor.",
    de: "Sag, dass es bald eine Sprechstunde gibt. «консультация» ist ein Treffen mit der Lehrkraft.",
  },
  "общежитие / в / пойду / Потом / я": {
    en: "Say that afterwards I will set off for the dorm, on foot, one time.",
    es: "Di que después yo me pondré en camino a la residencia, a pie y una sola vez.",
    de: "Sag, dass ich danach einmal zu Fuß zum Wohnheim aufbreche.",
  },
  "билеты / купим / мы / Завтра": {
    en: "Say that tomorrow we will buy the tickets.",
    es: "Di que mañana nosotros compraremos los billetes.",
    de: "Sag, dass wir morgen die Fahrkarten kaufen werden.",
  },

  // Ch. 11 — Genitive
  "Перед тестом нет ___.": {
    en: "Before the test there is no ___. After нет the noun is genitive. The options are different forms of «время» (time): «время», «времени», «временем», «времена».",
    es: "Antes del examen no hay ___. Tras нет el sustantivo va en genitivo. Las opciones son formas distintas de «время» (tiempo): «время», «времени», «временем», «времена».",
    de: "Vor dem Test gibt es kein ___. Nach нет steht das Nomen im Genitiv. Die Optionen sind verschiedene Formen von «время» (Zeit): «время», «времени», «временем», «времена».",
  },
  "В сумке много ___.": {
    en: "In the bag there are many ___. After много the noun is genitive plural. Forms of «книга» (book): «книг», «книги», «книгам», «книгами».",
    es: "En el bolso hay muchos ___. Tras много el sustantivo va en genitivo plural. Formas de «книга» (libro): «книг», «книги», «книгам», «книгами».",
    de: "In der Tasche sind viele ___. Nach много steht das Nomen im Genitiv Plural. Formen von «книга» (Buch): «книг», «книги», «книгам», «книгами».",
  },
  "Это сумка ___.": {
    en: "This is the bag of ___. The owner stands in the genitive. Forms of «друг» (friend): «друг», «друга», «другу», «другом».",
    es: "Este es el bolso de ___. El poseedor va en genitivo. Formas de «друг» (amigo): «друг», «друга», «другу», «другом».",
    de: "Das ist die Tasche von ___. Der Besitzer steht im Genitiv. Formen von «друг» (Freund): «друг», «друга», «другу», «другом».",
  },
  "У студента мало ___.": {
    en: "The student has little ___. After мало the noun is genitive. Forms of «деньги» (money): «деньги», «денег», «деньгам», «деньгами».",
    es: "El estudiante tiene poco ___. Tras мало el sustantivo va en genitivo. Formas de «деньги» (dinero): «деньги», «денег», «деньгам», «деньгами».",
    de: "Der Student hat wenig ___. Nach мало steht das Nomen im Genitiv. Formen von «деньги» (Geld): «деньги», «денег», «деньгам», «деньгами».",
  },
  "На столе нет ___.": {
    en: "There is no ___ on the table. After нет the noun is genitive. Forms of «словарь» (dictionary): «словаря», «словарь», «словарю», «словарём».",
    es: "Sobre la mesa no hay ___. Tras нет el sustantivo va en genitivo. Formas de «словарь» (diccionario): «словаря», «словарь», «словарю», «словарём».",
    de: "Auf dem Tisch liegt kein ___. Nach нет steht das Nomen im Genitiv. Formen von «словарь» (Wörterbuch): «словаря», «словарь», «словарю», «словарём».",
  },
  "Это аудитория ___.": {
    en: "This is the classroom of ___. The owner is genitive. Forms of «преподаватель» (teacher): «преподаватель», «преподавателя», «преподавателю», «преподавателем».",
    es: "Esta es el aula de ___. El poseedor va en genitivo. Formas de «преподаватель» (profesor): «преподаватель», «преподавателя», «преподавателю», «преподавателем».",
    de: "Das ist der Hörsaal von ___. Der Besitzer steht im Genitiv. Formen von «преподаватель» (Lehrkraft): «преподаватель», «преподавателя», «преподавателю», «преподавателем».",
  },
  "Сколько ___ в этом тексте?": {
    en: "How many ___ are in this text? After сколько the noun is genitive plural. Forms of «слово» (word): «слов», «слова», «словам», «словами».",
    es: "¿Cuántas ___ hay en este texto? Tras сколько el sustantivo va en genitivo plural. Formas de «слово» (palabra): «слов», «слова», «словам», «словами».",
    de: "Wie viele ___ stehen in diesem Text? Nach сколько steht das Nomen im Genitiv Plural. Formen von «слово» (Wort): «слов», «слова», «словам», «словами».",
  },
  "Принесите, пожалуйста, стакан ___.": {
    en: "Please bring a glass of ___. After a measure word the noun is genitive. Forms of «вода» (water): «воды», «вода», «воде», «водой».",
    es: "Traiga, por favor, un vaso de ___. Tras una medida el sustantivo va en genitivo. Formas de «вода» (agua): «воды», «вода», «воде», «водой».",
    de: "Bringen Sie bitte ein Glas ___. Nach einer Maßangabe steht das Nomen im Genitiv. Formen von «вода» (Wasser): «воды», «вода», «воде», «водой».",
  },
  "На лекции много ___.": {
    en: "At the lecture there are many ___. After много, use «вопрос» (question) with the ending for a genitive plural.",
    es: "En la clase hay muchas ___. Tras много, «вопрос» (pregunta) lleva la terminación de genitivo plural.",
    de: "In der Vorlesung gibt es viele ___. Nach много steht «вопрос» (Frage) in der Endung des Genitivs Plural.",
  },
  "У меня нет ___.": {
    en: "I don’t have a ___. After нет the missing thing is genitive, so the ending changes. In the multiple-choice item the choices «ключ», «ключа», «ключу», and «ключом» are case forms of «ключ» (key); the fill-in uses the same pattern with another noun.",
    es: "No tengo ___. Tras нет lo que falta va en genitivo y cambia la terminación. En la opción múltiple, «ключ», «ключа», «ключу» y «ключом» son casos de «ключ» (llave); el hueco usa el mismo esquema con otro sustantivo.",
    de: "Ich habe kein ___. Nach нет steht das Fehlende im Genitiv, die Endung wechselt. In der Auswahl sind «ключ», «ключа», «ключу» und «ключом» Kasusformen von «ключ» (Schlüssel); die Lücke folgt demselben Muster mit einem anderen Nomen.",
  },
  "До экзамена мало ___.": {
    en: "There are few ___ until the exam. After мало, use «день» (day) in the genitive plural.",
    es: "Faltan pocos ___ para el examen. Tras мало, «день» (día) va en genitivo plural.",
    de: "Bis zur Prüfung sind es wenige ___. Nach мало steht «день» (Tag) im Genitiv Plural.",
  },
  "В комнате нет ___.": {
    en: "There is no ___ in the room. After нет, use «окно» (window) in the genitive.",
    es: "En la habitación no hay ___. Tras нет, «окно» (ventana) va en genitivo.",
    de: "Im Zimmer gibt es kein ___. Nach нет steht «окно» (Fenster) im Genitiv.",
  },
  "Это тетрадь ___.": {
    en: "This is the notebook of ___. The owner, «студент» (student), stands in the genitive.",
    es: "Este es el cuaderno de ___. El poseedor, «студент» (estudiante), va en genitivo.",
    de: "Das ist das Heft von ___. Der Besitzer, «студент» (Student), steht im Genitiv.",
  },
  "Завтра нет ___.": {
    en: "Tomorrow there is no ___. After нет, use «занятие» (class) in the genitive.",
    es: "Mañana no hay ___. Tras нет, «занятие» (clase) va en genitivo.",
    de: "Morgen gibt es kein ___. Nach нет steht «занятие» (Unterricht) im Genitiv.",
  },
  "В группе много ___.": {
    en: "There are many ___ in the group. After много, use «студент» (student) in the genitive plural.",
    es: "En el grupo hay muchos ___. Tras много, «студент» (estudiante) va en genitivo plural.",
    de: "In der Gruppe sind viele ___. Nach много steht «студент» (Student) im Genitiv Plural.",
  },
  "В стакане мало ___.": {
    en: "There is little ___ in the glass. After мало, use «вода» (water) in the genitive.",
    es: "En el vaso hay poca ___. Tras мало, «вода» (agua) va en genitivo.",
    de: "Im Glas ist wenig ___. Nach мало steht «вода» (Wasser) im Genitiv.",
  },
  "На столе нет книга.": {
    en: "Case: after нет, «книга» (book) is still in the dictionary form. There is no book on the table.",
    es: "Caso: tras нет, «книга» (libro) sigue en la forma de diccionario. No hay un libro sobre la mesa.",
    de: "Kasus: nach нет steht «книга» (Buch) noch in der Wörterbuchform. Auf dem Tisch liegt kein Buch.",
  },
  "В аудитории много студенты.": {
    en: "Case: after много, «студенты» (students) is not genitive plural. There are many students in the classroom.",
    es: "Caso: tras много, «студенты» (estudiantes) no está en genitivo plural. Hay muchos estudiantes en el aula.",
    de: "Kasus: nach много steht «студенты» (Studierende) nicht im Genitiv Plural. Im Hörsaal sind viele Studierende.",
  },
  "У меня нет время сегодня.": {
    en: "Case: after нет, «время» (time) has not changed its ending. I have no time today.",
    es: "Caso: tras нет, «время» (tiempo) no ha cambiado de terminación. Hoy no tengo tiempo.",
    de: "Kasus: nach нет hat «время» (Zeit) die Endung nicht geändert. Ich habe heute keine Zeit.",
  },
  "У нас мало деньги на билет.": {
    en: "Case: after мало, «деньги» (money) is not genitive. We have little money for a ticket.",
    es: "Caso: tras мало, «деньги» (dinero) no está en genitivo. Tenemos poco dinero para el billete.",
    de: "Kasus: nach мало steht «деньги» (Geld) nicht im Genitiv. Wir haben wenig Geld für die Fahrkarte.",
  },
  "Где сумка друг?": {
    en: "Case: the owner «друг» (friend) is not in the genitive. Where is the friend’s bag?",
    es: "Caso: el poseedor «друг» (amigo) no está en genitivo. ¿Dónde está el bolso del amigo?",
    de: "Kasus: der Besitzer «друг» (Freund) steht nicht im Genitiv. Wo ist die Tasche des Freundes?",
  },
  "В аудитории нет окно.": {
    en: "Case: after нет, «окно» (window) is unchanged. There is no window in the classroom.",
    es: "Caso: tras нет, «окно» (ventana) no cambia. En el aula no hay ventana.",
    de: "Kasus: nach нет bleibt «окно» (Fenster) unverändert. Im Hörsaal gibt es kein Fenster.",
  },
  "Дайте стакан вода.": {
    en: "Case: after the measure «стакан» (a glass), «вода» (water) is unchanged. Give me a glass of water.",
    es: "Caso: tras la medida «стакан» (un vaso), «вода» (agua) no cambia. Deme un vaso de agua.",
    de: "Kasus: nach der Maßangabe «стакан» (ein Glas) bleibt «вода» (Wasser) unverändert. Geben Sie mir ein Glas Wasser.",
  },
  "Сегодня нет аудитория.": {
    en: "Case: after нет, «аудитория» (classroom) is unchanged. There is no classroom today.",
    es: "Caso: tras нет, «аудитория» (aula) no cambia. Hoy no hay aula.",
    de: "Kasus: nach нет bleibt «аудитория» (Hörsaal) unverändert. Heute gibt es keinen Hörsaal.",
  },
  "билета / нет / У / меня": {
    en: "Say that I don’t have a ticket.",
    es: "Di que yo no tengo billete.",
    de: "Sag, dass ich keine Fahrkarte habe.",
  },
  "студентов / много / лекции / На": {
    en: "Say that there are many students at the lecture.",
    es: "Di que en la clase hay muchos estudiantes.",
    de: "Sag, dass in der Vorlesung viele Studierende sind.",
  },
  "денег / мало / Анны / У": {
    en: "Say that Anna has little money.",
    es: "Di que Anna tiene poco dinero.",
    de: "Sag, dass Anna wenig Geld hat.",
  },
  "чая / горячего / Стакан": {
    en: "Build a phrase with a measure and genitive (a glass of tea).",
    es: "Construye una frase con medida y genitivo (un vaso de té).",
    de: "Baue eine Phrase mit Maß und Genitiv (ein Glas Tee).",
  },
  "Нет / словаря / этого": {
    en: "Build a phrase: there is no (this) dictionary.",
    es: "Construye una frase: no hay (este) diccionario.",
    de: "Baue eine Phrase: es gibt (dieses) Wörterbuch nicht.",
  },
  "книг / много / аудитории / В": {
    en: "Say that there are many books in the classroom.",
    es: "Di que en el aula hay muchos libros.",
    de: "Sag, dass im Hörsaal viele Bücher sind.",
  },
  "аудитории / в / студентов / Сколько": {
    en: "Ask how many students are in the classroom.",
    es: "Pregunta cuántos estudiantes hay en el aula.",
    de: "Frag, wie viele Studierende im Hörsaal sind.",
  },
  "чая / нет / кафе / В": {
    en: "Say that there is no tea at the café.",
    es: "Di que en el café no hay té.",
    de: "Sag, dass es im Café keinen Tee gibt.",
  },

  // Ch. 12 — Dative
  "___ нравится русский язык.": {
    en: "The Russian language is pleasing to ___. With нравится the person is dative, not the subject. «Я» I / «Мне» to me / «Меня» me / «Мной» by me.",
    es: "El ruso le gusta a ___. Con нравится la persona va en dativo, no es el sujeto. «Я» yo / «Мне» a mí / «Меня» me / «Мной» por mí, conmigo.",
    de: "Die russische Sprache gefällt ___. Bei нравится steht die Person im Dativ, nicht als Subjekt. «Я» ich / «Мне» mir / «Меня» mich / «Мной» mit mir.",
  },
  "Преподаватель объясняет правило ___.": {
    en: "The teacher explains the rule to ___. The person who receives the explanation is dative. Forms of «студент» (student), plural: «студенты», «студентов», «студентам», «студентами».",
    es: "El profesor explica la regla a ___. Quien recibe la explicación va en dativo. Formas de «студент» (estudiante), en plural: «студенты», «студентов», «студентам», «студентами».",
    de: "Die Lehrkraft erklärt die Regel ___. Wer die Erklärung bekommt, steht im Dativ. Formen von «студент» (Student), Plural: «студенты», «студентов», «студентам», «студентами».",
  },
  "Вечером я звоню ___ из общежития.": {
    en: "In the evening I call ___ from the dorm. Звонить (to call) takes the dative. Forms of «друг» (friend): «друг», «друга», «другу», «другом».",
    es: "Por la noche llamo a ___ desde la residencia. Звонить (llamar) rige dativo. Formas de «друг» (amigo): «друг», «друга», «другу», «другом».",
    de: "Abends rufe ich ___ aus dem Wohnheim an. Звонить (anrufen) verlangt den Dativ. Formen von «друг» (Freund): «друг», «друга», «другу», «другом».",
  },
  "___ нравятся новые курсы.": {
    en: "The new courses are pleasing to ___. The courses are the subject; the person is dative. «Она» she / «Её» her / «Ей» to her / «Ею» by her.",
    es: "Los cursos nuevos le gustan a ___. Los cursos son el sujeto; la persona va en dativo. «Она» ella / «Её» la, su / «Ей» a ella / «Ею» por ella.",
    de: "Die neuen Kurse gefallen ___. Die Kurse sind das Subjekt; die Person steht im Dativ. «Она» sie / «Её» sie, ihre / «Ей» ihr / «Ею» mit ihr.",
  },
  "Помогите ___, пожалуйста, с текстом.": {
    en: "Please help ___ with the text. Помогать (to help) takes the dative. «я» I / «меня» me / «мне» to me / «мной» by me.",
    es: "Ayude, por favor, a ___ con el texto. Помогать (ayudar) rige dativo. «я» yo / «меня» me / «мне» a mí / «мной» por mí.",
    de: "Helfen Sie ___ bitte mit dem Text. Помогать (helfen) verlangt den Dativ. «я» ich / «меня» mich / «мне» mir / «мной» mit mir.",
  },
  "Анна пишет письмо ___.": {
    en: "Anna is writing a letter to ___. The addressee is dative. Forms of «сестра» (sister): «сестра», «сестру», «сестре», «сестрой».",
    es: "Anna le escribe una carta a ___. El destinatario va en dativo. Formas de «сестра» (hermana): «сестра», «сестру», «сестре», «сестрой».",
    de: "Anna schreibt ___ einen Brief. Die Adressatin steht im Dativ. Formen von «сестра» (Schwester): «сестра», «сестру», «сестре», «сестрой».",
  },
  "___ не нравится новое общежитие.": {
    en: "The new dorm is not pleasing to ___. The person is dative. «Они» they / «Их» them / «Им» to them / «Ими» by them.",
    es: "La residencia nueva no le gusta a ___. La persona va en dativo. «Они» ellos / «Их» los, su / «Им» a ellos / «Ими» por ellos.",
    de: "Das neue Wohnheim gefällt ___ nicht. Die Person steht im Dativ. «Они» sie / «Их» sie, ihre / «Им» ihnen / «Ими» mit ihnen.",
  },
  "Дайте, пожалуйста, словарь ___.": {
    en: "Please give the dictionary to ___. The recipient is dative. Forms of «студент» (student): «студент», «студента», «студенту», «студентом».",
    es: "Dé, por favor, el diccionario a ___. Quien lo recibe va en dativo. Formas de «студент» (estudiante): «студент», «студента», «студенту», «студентом».",
    de: "Geben Sie das Wörterbuch bitte ___. Der Empfänger steht im Dativ. Formen von «студент» (Student): «студент», «студента», «студенту», «студентом».",
  },
  "Мария звонит ___ каждый вечер.": {
    en: "Maria calls ___ every evening. Dative of «мама» (mom).",
    es: "María llama a ___ cada noche. Dativo de «мама» (mamá).",
    de: "Maria ruft ___ jeden Abend an. Dativ von «мама» (Mama).",
  },
  "___ нравится наша группа.": {
    en: "Our group is pleasing to ___. Dative of он (he).",
    es: "Nuestro grupo le gusta a ___. Dativo de он (él).",
    de: "Unsere Gruppe gefällt ___. Dativ von он (er).",
  },
  "Преподаватель даёт ___ новое задание.": {
    en: "The teacher gives ___ a new assignment. Dative of мы (we).",
    es: "El profesor da ___ una tarea nueva. Dativo de мы (nosotros).",
    de: "Die Lehrkraft gibt ___ eine neue Aufgabe. Dativ von мы (wir).",
  },
  "Сегодня я пишу ___.": {
    en: "Today I am writing to ___. Dative of «преподаватель» (teacher).",
    es: "Hoy le escribo a ___. Dativo de «преподаватель» (profesor).",
    de: "Heute schreibe ich ___. Dativ von «преподаватель» (Lehrkraft).",
  },
  "Я часто помогаю ___.": {
    en: "I often help ___. Dative of «сестра» (sister).",
    es: "Yo ayudo a menudo a ___. Dativo de «сестра» (hermana).",
    de: "Ich helfe ___ oft. Dativ von «сестра» (Schwester).",
  },
  "Мы пишем ___ из общежития.": {
    en: "We are writing to ___ from the dorm. Dative of «подруга» (a female friend).",
    es: "Nosotros le escribimos a ___ desde la residencia. Dativo de «подруга» (una amiga).",
    de: "Wir schreiben ___ aus dem Wohnheim. Dativ von «подруга» (Freundin).",
  },
  "Объясните ___, пожалуйста, это слово.": {
    en: "Please explain this word to ___. Dative of мы (we).",
    es: "Explique, por favor, esta palabra a ___. Dativo de мы (nosotros).",
    de: "Erklären Sie ___ bitte dieses Wort. Dativ von мы (wir).",
  },
  "___ нравится новая столовая.": {
    en: "The new cafeteria is pleasing to ___. Dative of the name Анна.",
    es: "El comedor nuevo le gusta a ___. Dativo del nombre Анна.",
    de: "Die neue Mensa gefällt ___. Dativ des Namens Анна.",
  },
  "Я нравится новая столовая.": {
    en: "Case: the person who finds the cafeteria pleasing is not in the dative. The new cafeteria is pleasing.",
    es: "Caso: la persona a quien le gusta el comedor no está en dativo. El comedor nuevo gusta.",
    de: "Kasus: die Person, der die Mensa gefällt, steht nicht im Dativ. Die neue Mensa gefällt.",
  },
  "Я звоню друг.": {
    en: "Case: the person you call, «друг» (friend), is not dative. I am calling a friend.",
    es: "Caso: la persona a la que llamas, «друг» (amigo), no está en dativo. Llamo a un amigo.",
    de: "Kasus: die Person, die du anrufst, «друг» (Freund), steht nicht im Dativ. Ich rufe einen Freund an.",
  },
  "Её нравится грамматика.": {
    en: "Pronoun: the person who finds grammar pleasing is in the wrong form of она (she). Grammar is pleasing.",
    es: "Pronombre: la persona a quien le gusta la gramática lleva una forma incorrecta de она (ella). La gramática gusta.",
    de: "Pronomen: die Person, der die Grammatik gefällt, steht in der falschen Form von она (sie). Die Grammatik gefällt.",
  },
  "Помогите его, пожалуйста.": {
    en: "Case: the person you help is not dative. Please help him. «его» is “him”, not “to him”.",
    es: "Caso: la persona a la que ayudas no está en dativo. Ayúdalo, por favor. «его» es «lo», no «a él».",
    de: "Kasus: die Person, der du hilfst, steht nicht im Dativ. Hilf ihm bitte. «его» heißt „ihn“, nicht „ihm“.",
  },
  "Мы нравятся эти курсы.": {
    en: "Case: the people who find these courses pleasing are not dative. We like these courses.",
    es: "Caso: las personas a quienes les gustan estos cursos no están en dativo. Nos gustan estos cursos.",
    de: "Kasus: die Leute, denen diese Kurse gefallen, stehen nicht im Dativ. Uns gefallen diese Kurse.",
  },
  "Преподаватель объясняет студенты.": {
    en: "Case: the people who receive the explanation, «студенты» (students), are not dative. The teacher is explaining.",
    es: "Caso: quienes reciben la explicación, «студенты» (estudiantes), no están en dativo. El profesor explica.",
    de: "Kasus: die Leute, die die Erklärung bekommen, «студенты» (Studierende), stehen nicht im Dativ. Die Lehrkraft erklärt.",
  },
  "Мы пишем сестра.": {
    en: "Case: the addressee «сестра» (sister) is not dative. We are writing to (our) sister.",
    es: "Caso: la destinataria «сестра» (hermana) no está en dativo. Le escribimos a la hermana.",
    de: "Kasus: die Adressatin «сестра» (Schwester) steht nicht im Dativ. Wir schreiben der Schwester.",
  },
  "Ему нравятся этот текст.": {
    en: "Number of the verb: «этот текст» (this text) is singular, so нравиться should not be plural. He likes this text.",
    es: "Número del verbo: «этот текст» (este texto) es singular, así que нравиться no debe ir en plural. A él le gusta este texto.",
    de: "Zahl des Verbs: «этот текст» (dieser Text) ist Singular, deshalb darf нравиться nicht im Plural stehen. Ihm gefällt dieser Text.",
  },
  "город / этот / нравится / Мне": {
    en: "Say that you like this city: the city is pleasing to you.",
    es: "Di que te gusta esta ciudad: la ciudad te resulta agradable.",
    de: "Sag, dass dir diese Stadt gefällt.",
  },
  "преподавателю / звонит / Мария": {
    en: "Say that Maria is calling the teacher.",
    es: "Di que María llama al profesor.",
    de: "Sag, dass Maria die Lehrkraft anruft.",
  },
  "пожалуйста / сестре / Помогите": {
    en: "Ask someone, politely, to help (your) sister.",
    es: "Pide, con educación, que ayuden a la hermana.",
    de: "Bitte höflich darum, der Schwester zu helfen.",
  },
  "музей / нравится / Ей": {
    en: "Say that she likes the museum.",
    es: "Di que a ella le gusta el museo.",
    de: "Sag, dass ihr das Museum gefällt.",
  },
  "студентам / текст / объясняет / Преподаватель": {
    en: "Say that the teacher explains the text to the students.",
    es: "Di que el profesor explica el texto a los estudiantes.",
    de: "Sag, dass die Lehrkraft den Studierenden den Text erklärt.",
  },
  "брату / пишет / Омар": {
    en: "Say that Omar is writing to (his) brother.",
    es: "Di que Omar le escribe al hermano.",
    de: "Sag, dass Omar dem Bruder schreibt.",
  },
  "словарь / студенту / Дайте": {
    en: "Ask someone to give the dictionary to the student.",
    es: "Pide que le den el diccionario al estudiante.",
    de: "Bitte darum, dem Studenten das Wörterbuch zu geben.",
  },
  "город / нравится / Нам": {
    en: "Say that we like the city.",
    es: "Di que a nosotros nos gusta la ciudad.",
    de: "Sag, dass uns die Stadt gefällt.",
  },

  // Ch. 13 — Instrumental
  "В городе он работает ___.": {
    en: "In the city he works as a ___. A profession after работать (to work) is instrumental. Forms of «врач» (doctor): «врач», «врача», «врачу», «врачом».",
    es: "En la ciudad trabaja de ___. El oficio tras работать (trabajar) va en instrumental. Formas de «врач» (médico): «врач», «врача», «врачу», «врачом».",
    de: "In der Stadt arbeitet er als ___. Ein Beruf nach работать (arbeiten) steht im Instrumental. Formen von «врач» (Arzt): «врач», «врача», «врачу», «врачом».",
  },
  "Предлог «с» в значении «вместе» обычно требует падеж:": {
    en: "Which case does the preposition «с» usually take when it means “together”? «родительный» genitive / «дательный» dative / «творительный» instrumental / «винительный» accusative.",
    es: "¿Qué caso suele pedir la preposición «с» cuando significa «junto con»? «родительный» genitivo / «дательный» dativo / «творительный» instrumental / «винительный» acusativo.",
    de: "Welchen Kasus verlangt die Präposition «с» gewöhnlich, wenn sie „zusammen“ bedeutet? «родительный» Genitiv / «дательный» Dativ / «творительный» Instrumental / «винительный» Akkusativ.",
  },
  "Преподаватель пишет на доске ___.": {
    en: "The teacher writes on the board with a ___. The thing you write with is instrumental. Forms of «ручка» (pen): «ручка», «ручку», «ручке», «ручкой».",
    es: "El profesor escribe en la pizarra con ___. El instrumento va en instrumental. Formas de «ручка» (bolígrafo): «ручка», «ручку», «ручке», «ручкой».",
    de: "Die Lehrkraft schreibt mit ___ an die Tafel. Das Schreibgerät steht im Instrumental. Formen von «ручка» (Stift): «ручка», «ручку», «ручке», «ручкой».",
  },
  "Сестра хочет стать ___.": {
    en: "(My) sister wants to become a ___. After стать (to become) the role is instrumental. Forms of «инженер» (engineer): «инженер», «инженера», «инженеру», «инженером».",
    es: "La hermana quiere ser ___. Tras стать (llegar a ser) el papel va en instrumental. Formas de «инженер» (ingeniero): «инженер», «инженера», «инженеру», «инженером».",
    de: "Die Schwester will ___ werden. Nach стать (werden) steht die Rolle im Instrumental. Formen von «инженер» (Ingenieur): «инженер», «инженера», «инженеру», «инженером».",
  },
  "Мы говорим ___ преподавателем.": {
    en: "We are talking ___ the teacher. The noun is already instrumental; only the preposition is missing. «в» in / «на» on / «к» toward / «с» with.",
    es: "Hablamos ___ el profesor. El sustantivo ya está en instrumental; falta la preposición. «в» en / «на» en, sobre / «к» hacia / «с» con.",
    de: "Wir sprechen ___ der Lehrkraft. Das Nomen steht schon im Instrumental; es fehlt die Präposition. «в» in / «на» auf / «к» zu / «с» mit.",
  },
  "В школе мой отец работает ___.": {
    en: "At school my father works as a ___. Profession, instrumental. Forms of «учитель» (teacher): «учитель», «учителя», «учителю», «учителем».",
    es: "En la escuela mi padre trabaja de ___. Oficio, instrumental. Formas de «учитель» (maestro): «учитель», «учителя», «учителю», «учителем».",
    de: "In der Schule arbeitet mein Vater als ___. Beruf, Instrumental. Formen von «учитель» (Lehrer): «учитель», «учителя», «учителю», «учителем».",
  },
  "Сосед пишет ___, не ручкой.": {
    en: "The neighbour writes with a ___, not with a pen. «ручкой» already means “with a pen”. Forms of «карандаш» (pencil): «карандаш», «карандаша», «карандашу», «карандашом».",
    es: "El vecino escribe con ___, no con bolígrafo. «ручкой» ya significa «con un bolígrafo». Formas de «карандаш» (lápiz): «карандаш», «карандаша», «карандашу», «карандашом».",
    de: "Der Nachbar schreibt mit ___, nicht mit dem Stift. «ручкой» heißt schon „mit dem Stift“. Formen von «карандаш» (Bleistift): «карандаш», «карандаша», «карандашу», «карандашом».",
  },
  "В общежитии я живу ___.": {
    en: "In the dorm I live ___. “Together with” is «с» plus instrumental. Every option already has «с» and a form of «друг» (friend): «с друг», «с друга», «с другу», «с другом».",
    es: "En la residencia vivo ___. «Junto con» es «с» más instrumental. Cada opción ya lleva «с» y una forma de «друг» (amigo): «с друг», «с друга», «с другу», «с другом».",
    de: "Im Wohnheim wohne ich ___. „Zusammen mit“ ist «с» plus Instrumental. Jede Option hat schon «с» und eine Form von «друг» (Freund): «с друг», «с друга», «с другу», «с другом».",
  },
  "Я пишу ___.": {
    en: "I write with a ___. Instrumental of «ручка» (pen).",
    es: "Escribo con ___. Instrumental de «ручка» (bolígrafo).",
    de: "Ich schreibe mit ___. Instrumental von «ручка» (Stift).",
  },
  "Брат работает ___.": {
    en: "(My) brother works as a ___. Instrumental of «инженер» (engineer).",
    es: "El hermano trabaja de ___. Instrumental de «инженер» (ingeniero).",
    de: "Der Bruder arbeitet als ___. Instrumental von «инженер» (Ingenieur).",
  },
  "Вечером Анна говорит с ___.": {
    en: "In the evening Anna talks with ___. After «с» (with), instrumental of «сосед» (neighbour).",
    es: "Por la noche Anna habla con ___. Tras «с» (con), instrumental de «сосед» (vecino).",
    de: "Abends spricht Anna mit ___. Nach «с» (mit) der Instrumental von «сосед» (Nachbar).",
  },
  "Мария стала ___.": {
    en: "Maria became a ___. After стать (to become), instrumental of «врач» (doctor).",
    es: "María se hizo ___. Tras стать (llegar a ser), instrumental de «врач» (médico).",
    de: "Maria wurde ___. Nach стать (werden) der Instrumental von «врач» (Ärztin).",
  },
  "Брат хочет работать ___ в школе.": {
    en: "(My) brother wants to work as a ___ at school. Instrumental of «учитель» (teacher).",
    es: "El hermano quiere trabajar de ___ en la escuela. Instrumental de «учитель» (maestro).",
    de: "Der Bruder will an der Schule als ___ arbeiten. Instrumental von «учитель» (Lehrer).",
  },
  "На контрольной я пишу ___.": {
    en: "In the class test I write with a ___. «контрольная» is a written test. Instrumental of «карандаш» (pencil).",
    es: "En el control escribo con ___. «контрольная» es una prueba escrita. Instrumental de «карандаш» (lápiz).",
    de: "In der Klassenarbeit schreibe ich mit ___. «контрольная» ist eine schriftliche Arbeit. Instrumental von «карандаш» (Bleistift).",
  },
  "Я живу в комнате с ___.": {
    en: "I live in a room with ___. After «с», instrumental of «друг» (friend).",
    es: "Vivo en una habitación con ___. Tras «с», instrumental de «друг» (amigo).",
    de: "Ich wohne in einem Zimmer mit ___. Nach «с» der Instrumental von «друг» (Freund).",
  },
  "Мама давно работает ___.": {
    en: "Mom has worked as a ___ for a long time. Instrumental of «врач» (doctor).",
    es: "Mamá lleva mucho tiempo trabajando de ___. Instrumental de «врач» (médico).",
    de: "Mama arbeitet schon lange als ___. Instrumental von «врач» (Ärztin).",
  },
  "Она стала врач.": {
    en: "Case: after стать (to become), «врач» (doctor) is not instrumental. She became a doctor.",
    es: "Caso: tras стать (llegar a ser), «врач» (médico) no está en instrumental. Se hizo médico.",
    de: "Kasus: nach стать (werden) steht «врач» (Arzt) nicht im Instrumental. Sie wurde Ärztin.",
  },
  "Анна пишет письмо ручка.": {
    en: "Case: the instrument «ручка» (pen) is not instrumental. Anna is writing a letter with a pen.",
    es: "Caso: el instrumento «ручка» (bolígrafo) no está en instrumental. Anna escribe una carta con un bolígrafo.",
    de: "Kasus: das Gerät «ручка» (Stift) steht nicht im Instrumental. Anna schreibt einen Brief mit einem Stift.",
  },
  "Он работает инженер.": {
    en: "Case: the profession «инженер» (engineer) is not instrumental. He works as an engineer.",
    es: "Caso: el oficio «инженер» (ingeniero) no está en instrumental. Trabaja de ingeniero.",
    de: "Kasus: der Beruf «инженер» (Ingenieur) steht nicht im Instrumental. Er arbeitet als Ingenieur.",
  },
  "Павел живёт с друг.": {
    en: "Case: after «с» (with), «друг» (friend) is not instrumental. Pavel lives with a friend.",
    es: "Caso: tras «с» (con), «друг» (amigo) no está en instrumental. Pável vive con un amigo.",
    de: "Kasus: nach «с» (mit) steht «друг» (Freund) nicht im Instrumental. Pavel wohnt mit einem Freund.",
  },
  "Студенты говорят с сосед.": {
    en: "Case: after «с» (with), «сосед» (neighbour) is not instrumental. The students are talking with a neighbour.",
    es: "Caso: tras «с» (con), «сосед» (vecino) no está en instrumental. Los estudiantes hablan con un vecino.",
    de: "Kasus: nach «с» (mit) steht «сосед» (Nachbar) nicht im Instrumental. Die Studierenden sprechen mit einem Nachbarn.",
  },
  "Анна стала учитель.": {
    en: "Case: after стать (to become), «учитель» (teacher) is not instrumental. Anna became a teacher. The error is the case, not a different job title.",
    es: "Caso: tras стать (llegar a ser), «учитель» (maestro) no está en instrumental. Anna se hizo maestra. El fallo es el caso, no otro nombre de oficio.",
    de: "Kasus: nach стать (werden) steht «учитель» (Lehrer) nicht im Instrumental. Anna wurde Lehrerin. Falsch ist der Kasus, nicht eine andere Berufsbezeichnung.",
  },
  "Она гуляет с сестра.": {
    en: "Case: after «с» (with), «сестра» (sister) is not instrumental. She is walking with her sister.",
    es: "Caso: tras «с» (con), «сестра» (hermana) no está en instrumental. Pasea con su hermana.",
    de: "Kasus: nach «с» (mit) steht «сестра» (Schwester) nicht im Instrumental. Sie geht mit ihrer Schwester spazieren.",
  },
  "Омар хочет стать студент.": {
    en: "Case: after стать (to become), «студент» (student) is not instrumental. Omar wants to become a student.",
    es: "Caso: tras стать (llegar a ser), «студент» (estudiante) no está en instrumental. Omar quiere hacerse estudiante.",
    de: "Kasus: nach стать (werden) steht «студент» (Student) nicht im Instrumental. Omar will Student werden.",
  },
  "сестрой / с / живёт / Мария": {
    en: "Say that Maria lives with her sister.",
    es: "Di que María vive con su hermana.",
    de: "Sag, dass Maria mit ihrer Schwester wohnt.",
  },
  "врачом / работает / Сестра": {
    en: "Say that (my) sister works as a doctor.",
    es: "Di que la hermana trabaja de médico.",
    de: "Sag, dass die Schwester als Ärztin arbeitet.",
  },
  "ручкой / текст / пишет / Студент": {
    en: "Say that the student writes the text with a pen.",
    es: "Di que el estudiante escribe el texto con un bolígrafo.",
    de: "Sag, dass der Student den Text mit einem Stift schreibt.",
  },
  "учителем / стать / хочет / Брат": {
    en: "Say that (my) brother wants to become a teacher.",
    es: "Di que el hermano quiere hacerse maestro.",
    de: "Sag, dass der Bruder Lehrer werden will.",
  },
  "сестрой / с / говорю / Я": {
    en: "Say that I am talking with my sister.",
    es: "Di que yo hablo con mi hermana.",
    de: "Sag, dass ich mit meiner Schwester spreche.",
  },
  "инженером / работает / Омар": {
    en: "Say that Omar works as an engineer.",
    es: "Di que Omar trabaja de ingeniero.",
    de: "Sag, dass Omar als Ingenieur arbeitet.",
  },
  "другом / с / гуляем / мы / Вечером": {
    en: "Say that in the evening we take a walk with a friend.",
    es: "Di que por la noche paseamos con un amigo.",
    de: "Sag, dass wir abends mit einem Freund spazieren gehen.",
  },
  "инженером / стала / Мария": {
    en: "Say that Maria became an engineer.",
    es: "Di que María se hizo ingeniera.",
    de: "Sag, dass Maria Ingenieurin wurde.",
  },

  // Ch. 14 — Aspect, first steps
  "Вчера я долго ___ книгу в библиотеке. (о себе, м.)": {
    en: "Yesterday I ___ a book in the library for a long time (about myself, masculine). «долго» (for a long time) points to a process. «прочитал» read it through / «читал» was reading / «прочитаю» I will read it through / «читаю» I am reading.",
    es: "Ayer yo ___ un libro en la biblioteca durante mucho tiempo (hablo de mí, masculino). «долго» (mucho tiempo) señala un proceso. «прочитал» lo leí entero / «читал» lo leía / «прочитаю» lo leeré entero / «читаю» lo estoy leyendo.",
    de: "Gestern habe ich lange ein Buch in der Bibliothek ___ (über mich, maskulin). «долго» (lange) zeigt einen Verlauf. «прочитал» habe es zu Ende gelesen / «читал» las / «прочитаю» werde es zu Ende lesen / «читаю» lese gerade.",
  },
  "Пара к глаголу «писать» — ?": {
    en: "What is the aspect partner of «писать» (to write, process)? «пишу» I write / «написать» to write to completion / «писал» was writing / «письмо» a letter, the noun.",
    es: "¿Cuál es la pareja de aspecto de «писать» (escribir, proceso)? «пишу» yo escribo / «написать» escribir hasta el final / «писал» escribía / «письмо» una carta, el sustantivo.",
    de: "Was ist der Aspektpartner von «писать» (schreiben, Verlauf)? «пишу» ich schreibe / «написать» zu Ende schreiben / «писал» schrieb / «письмо» ein Brief, das Nomen.",
  },
  "Упражнение уже готово. Я его ___. (м.)": {
    en: "The exercise is already finished. I ___ it (masculine). That is a result. «делал» was doing / «сделал» finished it / «делаю» I do / «буду делать» I will be doing.",
    es: "El ejercicio ya está listo. Yo lo ___ (masculino). Es un resultado. «делал» lo hacía / «сделал» lo terminé / «делаю» lo hago / «буду делать» lo estaré haciendo.",
    de: "Die Übung ist schon fertig. Ich habe sie ___ (maskulin). Das ist ein Ergebnis. «делал» habe sie gemacht / «сделал» habe sie fertig gemacht / «делаю» ich mache / «буду делать» ich werde sie machen.",
  },
  "Она два часа ___ сочинение и не закончила.": {
    en: "She ___ the essay for two hours and did not finish: a process with no result. «написала» wrote it (finished) / «писала» was writing / «напишет» will write it / «пишет» writes.",
    es: "Ella ___ la redacción dos horas y no la terminó: un proceso sin resultado. «написала» la escribió (acabada) / «писала» la escribía / «напишет» la escribirá / «пишет» la escribe.",
    de: "Sie ___ den Aufsatz zwei Stunden und wurde nicht fertig: ein Verlauf ohne Ergebnis. «написала» hat ihn fertig geschrieben / «писала» schrieb / «напишет» wird ihn schreiben / «пишет» schreibt.",
  },
  "Пара к глаголу «делать» — ?": {
    en: "What is the aspect partner of «делать» (to do, process)? «делал» was doing / «сделать» to finish doing / «делаю» I do / «дело» a matter, the noun.",
    es: "¿Cuál es la pareja de aspecto de «делать» (hacer, proceso)? «делал» lo hacía / «сделать» hacerlo hasta el final / «делаю» lo hago / «дело» un asunto, el sustantivo.",
    de: "Was ist der Aspektpartner von «делать» (machen, Verlauf)? «делал» machte / «сделать» zu Ende machen / «делаю» ich mache / «дело» eine Sache, das Nomen.",
  },
  "Вчера вечером она ___ письмо до конца.": {
    en: "Yesterday evening she ___ the letter through to the end: a result. «писала» was writing / «написала» wrote it to the end / «пишет» writes / «будет писать» will be writing.",
    es: "Ayer por la noche ella ___ la carta hasta el final: un resultado. «писала» la escribía / «написала» la terminó / «пишет» la escribe / «будет писать» la estará escribiendo.",
    de: "Gestern Abend ___ sie den Brief bis zum Ende: ein Ergebnis. «писала» schrieb / «написала» hat ihn zu Ende geschrieben / «пишет» schreibt / «будет писать» wird ihn schreiben.",
  },
  "Каждый день я ___ домашнее задание.": {
    en: "Every day I ___ the homework: a habit. «сделаю» I will do it once / «сделал» I did it (result) / «делаю» I do it regularly / «сделала» she did it.",
    es: "Cada día yo ___ los deberes: un hábito. «сделаю» lo haré una vez / «сделал» lo hice (resultado) / «делаю» lo hago con regularidad / «сделала» ella lo hizo.",
    de: "Jeden Tag ___ ich die Hausaufgabe: eine Gewohnheit. «сделаю» ich werde sie einmal machen / «сделал» ich habe sie fertig gemacht / «делаю» ich mache sie regelmäßig / «сделала» sie hat sie gemacht.",
  },
  "Пара к глаголу «читать» — ?": {
    en: "What is the aspect partner of «читать» (to read, process)? «читал» was reading / «прочитать» to read through / «читаю» I read / «чтение» reading, the noun.",
    es: "¿Cuál es la pareja de aspecto de «читать» (leer, proceso)? «читал» leía / «прочитать» leer hasta el final / «читаю» yo leo / «чтение» la lectura, el sustantivo.",
    de: "Was ist der Aspektpartner von «читать» (lesen, Verlauf)? «читал» las / «прочитать» zu Ende lesen / «читаю» ich lese / «чтение» das Lesen, das Nomen.",
  },
  "Анна уже ___ упражнение.": {
    en: "Anna has already ___ the exercise. A finished result of сделать (to complete), feminine singular.",
    es: "Anna ya ___ el ejercicio. Un resultado cerrado de сделать (completar), femenino singular.",
    de: "Anna hat die Übung schon ___. Ein abgeschlossenes Ergebnis von сделать (fertig machen), feminin Singular.",
  },
  "Вчера он долго ___ книгу в библиотеке.": {
    en: "Yesterday he ___ a book in the library for a long time. A process of читать (to read), masculine singular.",
    es: "Ayer él ___ un libro en la biblioteca durante mucho tiempo. Un proceso de читать (leer), masculino singular.",
    de: "Gestern ___ er lange ein Buch in der Bibliothek. Ein Verlauf von читать (lesen), maskulin Singular.",
  },
  "Мы уже ___ сочинение.": {
    en: "We have already ___ the essay. A finished result of написать (to write to completion), plural.",
    es: "Nosotros ya ___ la redacción. Un resultado cerrado de написать (escribir hasta el final), plural.",
    de: "Wir haben den Aufsatz schon ___. Ein abgeschlossenes Ergebnis von написать (zu Ende schreiben), Plural.",
  },
  "Каждый вечер Омар ___ упражнения.": {
    en: "Every evening Omar ___ exercises. A habit: present of делать (to do).",
    es: "Cada noche Omar ___ ejercicios. Un hábito: presente de делать (hacer).",
    de: "Jeden Abend ___ Omar Übungen. Eine Gewohnheit: Präsens von делать (machen).",
  },
  "Мария ещё не ___ письмо.": {
    en: "Maria has not ___ the letter yet. The result is still missing: perfective of написать (to write to completion), feminine.",
    es: "María todavía no ___ la carta. El resultado aún no existe: perfectivo de написать (escribir hasta el final), femenino.",
    de: "Maria hat den Brief noch nicht ___. Das Ergebnis fehlt noch: perfektiv von написать (zu Ende schreiben), feminin.",
  },
  "Вчера они ___ тест до конца.": {
    en: "Yesterday they ___ the test through to the end. A result of сделать (to complete), plural.",
    es: "Ayer ellos ___ el examen hasta el final. Un resultado de сделать (completar), plural.",
    de: "Gestern haben sie den Test bis zum Ende ___. Ein Ergebnis von сделать (fertig machen), Plural.",
  },
  "Павел уже ___ книгу.": {
    en: "Pavel has already ___ the book. A result of прочитать (to read through), masculine.",
    es: "Pável ya ___ el libro. Un resultado de прочитать (leer hasta el final), masculino.",
    de: "Pavel hat das Buch schon ___. Ein Ergebnis von прочитать (zu Ende lesen), maskulin.",
  },
  "Сейчас Лиза ___ письмо в комнате.": {
    en: "Right now Liza ___ a letter in the room. A present process of писать (to write).",
    es: "Ahora mismo Liza ___ una carta en la habitación. Un proceso en presente de писать (escribir).",
    de: "Gerade ___ Lisa einen Brief im Zimmer. Ein Verlauf im Präsens von писать (schreiben).",
  },
  "Вчера я два часа сделал домашнее задание, но не закончил.": {
    en: "Aspect: two hours, and he still did not finish, so this is a process, not one completed act. Yesterday’s homework.",
    es: "Aspecto: dos horas, y además no terminó, así que es un proceso, no un acto cerrado. Los deberes de ayer.",
    de: "Aspekt: zwei Stunden, und er wurde trotzdem nicht fertig — das ist ein Verlauf, keine einmalige abgeschlossene Handlung. Die Hausaufgabe von gestern.",
  },
  "Я уже делал упражнение, оно лежит готовое.": {
    en: "Aspect: the exercise is already finished and lying there, so a past process does not match a result. The speaker is masculine.",
    es: "Aspecto: el ejercicio ya está hecho y ahí está, así que un proceso en pasado no corresponde a un resultado. Quien habla es masculino.",
    de: "Aspekt: die Übung ist schon fertig und liegt da, deshalb passt ein Verlauf in der Vergangenheit nicht zu einem Ergebnis. Die sprechende Person ist maskulin.",
  },
  "Завтра весь вечер я прочитаю книгу.": {
    en: "Aspect: «весь вечер» (the whole evening) is a stretch of time, so one completed act does not fit. Tomorrow, a book.",
    es: "Aspecto: «весь вечер» (toda la tarde-noche) es un tramo de tiempo, así que un solo acto cerrado no encaja. Mañana, un libro.",
    de: "Aspekt: «весь вечер» (den ganzen Abend) ist eine Zeitspanne, deshalb passt eine einmalige abgeschlossene Handlung nicht. Morgen, ein Buch.",
  },
  "Мы каждый день сделаем домашнее задание.": {
    en: "Aspect: «каждый день» (every day) is a habit, not one future result. Homework.",
    es: "Aspecto: «каждый день» (cada día) es un hábito, no un resultado futuro único. Los deberes.",
    de: "Aspekt: «каждый день» (jeden Tag) ist eine Gewohnheit, kein einmaliges zukünftiges Ergebnis. Die Hausaufgabe.",
  },
  "Я не писал сочинение, оно уже готово.": {
    en: "Aspect: the essay is already finished, so denying a past process does not match a completed result.",
    es: "Aspecto: la redacción ya está lista, así que negar un proceso en pasado no corresponde a un resultado cerrado.",
    de: "Aspekt: der Aufsatz ist schon fertig, deshalb passt das Verneinen eines Verlaufs nicht zu einem abgeschlossenen Ergebnis.",
  },
  "Анна уже писала сочинение, оно готово.": {
    en: "Aspect: «уже» (already) and “it is ready” mark a result, not a process. Anna and the essay.",
    es: "Aspecto: «уже» (ya) y «está lista» marcan un resultado, no un proceso. Anna y la redacción.",
    de: "Aspekt: «уже» (schon) und „es ist fertig“ markieren ein Ergebnis, keinen Verlauf. Anna und der Aufsatz.",
  },
  "Совершенный вид к глаголу «писать» — писал.": {
    en: "Aspect pair: the perfective partner of «писать» is an infinitive, not the past process «писал».",
    es: "Pareja de aspecto: el compañero perfectivo de «писать» es un infinitivo, no el proceso en pasado «писал».",
    de: "Aspektpaar: der perfektive Partner von «писать» ist ein Infinitiv, nicht der Verlauf in der Vergangenheit «писал».",
  },
  "Вчера я буду читать этот текст два часа.": {
    en: "Tense: «вчера» (yesterday) cannot take a future. Two hours of reading is a past process.",
    es: "Tiempo: «вчера» (ayer) no admite un futuro. Dos horas de lectura son un proceso en pasado.",
    de: "Tempus: «вчера» (gestern) verträgt keine Zukunft. Zwei Stunden Lesen sind ein Verlauf in der Vergangenheit.",
  },
  "книгу / долго / читал / Вчера / я": {
    en: "Say that yesterday I was reading a book for a long time.",
    es: "Di que ayer yo leía un libro durante mucho tiempo.",
    de: "Sag, dass ich gestern lange ein Buch gelesen habe.",
  },
  "письмо / написал / Омар": {
    en: "Say that Omar wrote a letter and finished it.",
    es: "Di que Omar escribió una carta y la terminó.",
    de: "Sag, dass Omar einen Brief zu Ende geschrieben hat.",
  },
  "задание / сделал / уже / Он": {
    en: "Say that he has already done the assignment.",
    es: "Di que él ya hizo la tarea.",
    de: "Sag, dass er die Aufgabe schon gemacht hat.",
  },
  "письмо / писала / два / часа / Она": {
    en: "Say that she was writing a letter for two hours.",
    es: "Di que ella escribía una carta durante dos horas.",
    de: "Sag, dass sie zwei Stunden einen Brief geschrieben hat.",
  },
  "текст / прочитали / Они": {
    en: "Say that they read the text through.",
    es: "Di que ellos leyeron el texto entero.",
    de: "Sag, dass sie den Text zu Ende gelesen haben.",
  },
  "задание / сделала / не / ещё / Она": {
    en: "Say that she has not done the assignment yet.",
    es: "Di que ella todavía no hizo la tarea.",
    de: "Sag, dass sie die Aufgabe noch nicht gemacht hat.",
  },
  "каждый / день / пишет / Он": {
    en: "Say that he writes every day.",
    es: "Di que él escribe cada día.",
    de: "Sag, dass er jeden Tag schreibt.",
  },
  "книгу / прочитала / уже / Анна": {
    en: "Say that Anna has already read the book through.",
    es: "Di que Anna ya leyó el libro entero.",
    de: "Sag, dass Anna das Buch schon zu Ende gelesen hat.",
  },

  // Ch. 15 — Verbs of motion
  "Сейчас я ___ в университет пешком.": {
    en: "Right now I ___ to the university on foot, one direction. «иду» I go on foot now / «хожу» I go on foot regularly / «еду» I go by transport now / «езжу» I go by transport regularly.",
    es: "Ahora mismo yo ___ a la universidad a pie, en una sola dirección. «иду» voy a pie ahora / «хожу» voy a pie con frecuencia / «еду» voy en transporte ahora / «езжу» voy en transporte con frecuencia.",
    de: "Gerade ___ ich zu Fuß zur Universität, in eine Richtung. «иду» ich gehe jetzt zu Fuß / «хожу» ich gehe regelmäßig zu Fuß / «еду» ich fahre jetzt / «езжу» ich fahre regelmäßig.",
  },
  "Они часто ___ в центр на метро.": {
    en: "They often ___ to the centre by metro: a habit, by transport. «едут» they go by transport now / «ездят» they go by transport regularly / «идут» they go on foot now / «ходят» they go on foot regularly.",
    es: "Ellos a menudo ___ al centro en metro: un hábito, en transporte. «едут» van en transporte ahora / «ездят» van en transporte con frecuencia / «идут» van a pie ahora / «ходят» van a pie con frecuencia.",
    de: "Sie ___ oft mit der U-Bahn ins Zentrum: eine Gewohnheit, mit einem Fahrzeug. «едут» sie fahren jetzt / «ездят» sie fahren regelmäßig / «идут» sie gehen jetzt / «ходят» sie gehen regelmäßig.",
  },
  "Каждый день Анна ___ пешком в библиотеку.": {
    en: "Every day Anna ___ to the library on foot: a habit. «идёт» she goes on foot now / «ходит» she goes on foot regularly / «едет» she goes by transport now / «ездит» she goes by transport regularly.",
    es: "Cada día Anna ___ a pie a la biblioteca: un hábito. «идёт» va a pie ahora / «ходит» va a pie con frecuencia / «едет» va en transporte ahora / «ездит» va en transporte con frecuencia.",
    de: "Jeden Tag ___ Anna zu Fuß in die Bibliothek: eine Gewohnheit. «идёт» sie geht jetzt / «ходит» sie geht regelmäßig / «едет» sie fährt jetzt / «ездит» sie fährt regelmäßig.",
  },
  "Сейчас мы ___ на автобусе в центр.": {
    en: "Right now we ___ to the centre by bus. «едем» we go by transport now / «ездим» we go by transport regularly / «идём» we go on foot now / «ходим» we go on foot regularly.",
    es: "Ahora mismo nosotros ___ al centro en autobús. «едем» vamos en transporte ahora / «ездим» vamos en transporte con frecuencia / «идём» vamos a pie ahora / «ходим» vamos a pie con frecuencia.",
    de: "Gerade ___ wir mit dem Bus ins Zentrum. «едем» wir fahren jetzt / «ездим» wir fahren regelmäßig / «идём» wir gehen jetzt / «ходим» wir gehen regelmäßig.",
  },
  "Куда ты ___ пешком прямо сейчас?": {
    en: "Where ___ you (ты) on foot right now? «идёшь» you go on foot now / «ходишь» you go on foot regularly / «едешь» you go by transport now / «ездишь» you go by transport regularly.",
    es: "¿Adónde ___ tú a pie ahora mismo? «идёшь» vas a pie ahora / «ходишь» vas a pie con frecuencia / «едешь» vas en transporte ahora / «ездишь» vas en transporte con frecuencia.",
    de: "Wohin ___ du gerade zu Fuß? «идёшь» du gehst jetzt / «ходишь» du gehst regelmäßig / «едешь» du fährst jetzt / «ездишь» du fährst regelmäßig.",
  },
  "Каждое утро брат ___ на работу на автобусе.": {
    en: "Every morning (my) brother ___ to work by bus: a habit, by transport. «едет» he goes by transport now / «ездит» he goes by transport regularly / «идёт» he goes on foot now / «ходит» he goes on foot regularly.",
    es: "Cada mañana el hermano ___ al trabajo en autobús: un hábito, en transporte. «едет» va en transporte ahora / «ездит» va en transporte con frecuencia / «идёт» va a pie ahora / «ходит» va a pie con frecuencia.",
    de: "Jeden Morgen ___ der Bruder mit dem Bus zur Arbeit: eine Gewohnheit, mit einem Fahrzeug. «едет» er fährt jetzt / «ездит» er fährt regelmäßig / «идёт» er geht jetzt / «ходит» er geht regelmäßig.",
  },
  "По выходным мы ___ в парк пешком.": {
    en: "At weekends we ___ to the park on foot: a habit. «идём» we go on foot now / «ходим» we go on foot regularly / «едем» we go by transport now / «ездим» we go by transport regularly.",
    es: "Los fines de semana nosotros ___ al parque a pie: un hábito. «идём» vamos a pie ahora / «ходим» vamos a pie con frecuencia / «едем» vamos en transporte ahora / «ездим» vamos en transporte con frecuencia.",
    de: "Am Wochenende ___ wir zu Fuß in den Park: eine Gewohnheit. «идём» wir gehen jetzt / «ходим» wir gehen regelmäßig / «едем» wir fahren jetzt / «ездим» wir fahren regelmäßig.",
  },
  "Смотри: автобус сейчас ___ в университет.": {
    en: "Look: the bus ___ to the university right now. «едет» goes by transport now / «ездит» goes by transport regularly / «идёт» goes on foot now / «ходит» goes on foot regularly.",
    es: "Mira: el autobús ___ ahora mismo a la universidad. «едет» va en transporte ahora / «ездит» va en transporte con frecuencia / «идёт» va a pie ahora / «ходит» va a pie con frecuencia.",
    de: "Schau: der Bus ___ gerade zur Universität. «едет» fährt jetzt / «ездит» fährt regelmäßig / «идёт» geht jetzt / «ходит» geht regelmäßig.",
  },
  "Я каждый день ___ в университет.": {
    en: "I ___ to the university every day. A habit on foot: ходить, matching я (I).",
    es: "Yo ___ a la universidad cada día. Un hábito a pie: ходить, de acuerdo con я (yo).",
    de: "Ich ___ jeden Tag zur Universität. Eine Gewohnheit zu Fuß: ходить, passend zu я (ich).",
  },
  "Сейчас она ___ в магазин.": {
    en: "Right now she ___ to the shop. One direction, on foot, now: идти.",
    es: "Ahora mismo ella ___ a la tienda. Una dirección, a pie, ahora: идти.",
    de: "Gerade ___ sie in den Laden. Eine Richtung, zu Fuß, jetzt: идти.",
  },
  "Мы часто ___ на метро в центр.": {
    en: "We often ___ to the centre by metro. A habit by transport: ездить.",
    es: "Nosotros a menudo ___ al centro en metro. Un hábito en transporte: ездить.",
    de: "Wir ___ oft mit der U-Bahn ins Zentrum. Eine Gewohnheit mit einem Fahrzeug: ездить.",
  },
  "Куда вы сейчас ___ на автобусе?": {
    en: "Where ___ you (вы) by bus right now? One direction, by transport, now: ехать.",
    es: "¿Adónde ___ usted en autobús ahora mismo? Una dirección, en transporte, ahora: ехать.",
    de: "Wohin ___ Sie gerade mit dem Bus? Eine Richtung, mit einem Fahrzeug, jetzt: ехать.",
  },
  "Я каждый день ___ на метро.": {
    en: "I ___ by metro every day. A habit by transport: ездить, matching я.",
    es: "Yo ___ en metro cada día. Un hábito en transporte: ездить, con я.",
    de: "Ich ___ jeden Tag mit der U-Bahn. Eine Gewohnheit mit einem Fahrzeug: ездить, passend zu я.",
  },
  "Сейчас студенты ___ пешком в аудиторию.": {
    en: "Right now the students ___ to the classroom on foot. One direction, now, plural: идти.",
    es: "Ahora mismo los estudiantes ___ a pie al aula. Una dirección, ahora, plural: идти.",
    de: "Gerade ___ die Studierenden zu Fuß in den Hörsaal. Eine Richtung, jetzt, Plural: идти.",
  },
  "Сосед каждый вечер ___ пешком домой.": {
    en: "Every evening the neighbour ___ home on foot. A habit: ходить.",
    es: "Cada noche el vecino ___ a casa a pie. Un hábito: ходить.",
    de: "Jeden Abend ___ der Nachbar zu Fuß nach Hause. Eine Gewohnheit: ходить.",
  },
  "Сейчас я ___ на метро, не пешком.": {
    en: "Right now I ___ by metro, not on foot. One direction, by transport, now: ехать.",
    es: "Ahora mismo yo ___ en metro, no a pie. Una dirección, en transporte, ahora: ехать.",
    de: "Gerade ___ ich mit der U-Bahn, nicht zu Fuß. Eine Richtung, mit einem Fahrzeug, jetzt: ехать.",
  },
  "Сейчас я хожу в магазин.": {
    en: "Verb of motion: «сейчас» (right now) is one direction, not a habit. Going to the shop.",
    es: "Verbo de movimiento: «сейчас» (ahora mismo) es una sola dirección, no un hábito. Ir a la tienda.",
    de: "Bewegungsverb: «сейчас» (gerade) ist eine Richtung, keine Gewohnheit. In den Laden gehen.",
  },
  "Каждый день я иду в университет.": {
    en: "Verb of motion: «каждый день» (every day) is a habit, not one trip happening now. To the university.",
    es: "Verbo de movimiento: «каждый день» (cada día) es un hábito, no un trayecto que ocurre ahora. A la universidad.",
    de: "Bewegungsverb: «каждый день» (jeden Tag) ist eine Gewohnheit, nicht ein Weg, der gerade stattfindet. Zur Universität.",
  },
  "Мы часто едем в центр.": {
    en: "Verb of motion: «часто» (often) is repeated travel by transport, not one trip now. To the centre.",
    es: "Verbo de movimiento: «часто» (a menudo) es un viaje repetido en transporte, no un trayecto de ahora. Al centro.",
    de: "Bewegungsverb: «часто» (oft) ist wiederholtes Fahren, nicht eine Fahrt jetzt. Ins Zentrum.",
  },
  "Смотри, автобус ездит в университет.": {
    en: "Verb of motion: «смотри» (look) sets a scene happening now, not a habit. The bus is going to the university.",
    es: "Verbo de movimiento: «смотри» (mira) presenta una escena de ahora, no un hábito. El autobús va a la universidad.",
    de: "Bewegungsverb: «смотри» (schau) zeigt eine Szene von jetzt, keine Gewohnheit. Der Bus fährt zur Universität.",
  },
  "Я иду на автобусе в центр.": {
    en: "Means of motion: «на автобусе» (by bus) is transport, not going on foot. To the centre.",
    es: "Medio: «на автобусе» (en autobús) es transporte, no ir a pie. Al centro.",
    de: "Fortbewegungsart: «на автобусе» (mit dem Bus) ist ein Fahrzeug, nicht zu Fuß gehen. Ins Zentrum.",
  },
  "Она каждый день идёт пешком на пары.": {
    en: "Verb of motion: «каждый день» (every day) on foot is a habit, not one trip now. «пары» are classes.",
    es: "Verbo de movimiento: «каждый день» (cada día) a pie es un hábito, no un trayecto de ahora. «пары» son las clases.",
    de: "Bewegungsverb: «каждый день» (jeden Tag) zu Fuß ist eine Gewohnheit, nicht ein Weg jetzt. «пары» sind die Lehrveranstaltungen.",
  },
  "Куда ты ходишь сейчас?": {
    en: "Verb of motion: «сейчас» (right now) asks for one direction, not a habit. Where are you (ты) going?",
    es: "Verbo de movimiento: «сейчас» (ahora mismo) pide una sola dirección, no un hábito. ¿Adónde vas (ты)?",
    de: "Bewegungsverb: «сейчас» (gerade) fragt nach einer Richtung, nicht nach einer Gewohnheit. Wohin gehst du (ты)?",
  },
  "Сейчас я иду в университете.": {
    en: "Case of direction: this form after «в» answers “where?”, but the verb is motion toward a goal (“where to?”). Right now, on the way to the university.",
    es: "Caso de dirección: esta forma tras «в» responde a «¿dónde?», pero el verbo es un movimiento hacia una meta («¿adónde?»). Ahora, de camino a la universidad.",
    de: "Kasus der Richtung: diese Form nach «в» antwortet auf „wo?“, das Verb aber ist eine Bewegung zum Ziel („wohin?“). Gerade, auf dem Weg zur Universität.",
  },
  "парк / в / иду / я / Сейчас": {
    en: "Say that right now I am going to the park on foot.",
    es: "Di que ahora mismo yo voy al parque a pie.",
    de: "Sag, dass ich gerade zu Fuß in den Park gehe.",
  },
  "день / каждый / хожу / Я / пешком": {
    en: "Say that I walk on foot every day.",
    es: "Di que yo camino a pie cada día.",
    de: "Sag, dass ich jeden Tag zu Fuß gehe.",
  },
  "метро / на / едем / Мы": {
    en: "Say that we are going by metro right now.",
    es: "Di que nosotros vamos en metro ahora mismo.",
    de: "Sag, dass wir gerade mit der U-Bahn fahren.",
  },
  "метро / на / ездят / часто / Они": {
    en: "Say that they often go by metro.",
    es: "Di que ellos van a menudo en metro.",
    de: "Sag, dass sie oft mit der U-Bahn fahren.",
  },
  "идёт / она / Куда": {
    en: "Ask where she is going right now, on foot.",
    es: "Pregunta adónde va ella ahora mismo, a pie.",
    de: "Frag, wohin sie gerade zu Fuß geht.",
  },
  "общежитие / в / идёт / Она": {
    en: "Say that she is going to the dorm right now, on foot.",
    es: "Di que ella va ahora mismo a la residencia, a pie.",
    de: "Sag, dass sie gerade zu Fuß zum Wohnheim geht.",
  },
  "центр / в / еду / Я": {
    en: "Say that I am going to the centre by transport right now.",
    es: "Di que yo voy ahora mismo al centro en transporte.",
    de: "Sag, dass ich gerade ins Zentrum fahre.",
  },
  "парк / в / ходим / Мы / часто": {
    en: "Say that we often go to the park on foot.",
    es: "Di que nosotros vamos a menudo al parque a pie.",
    de: "Sag, dass wir oft zu Fuß in den Park gehen.",
  },

  // Ch. 16 — Dorm, shops, and services
  "Около общежития нет ___.": {
    en: "Near the dorm there is no ___. After нет the noun is genitive. Forms of «аптека» (pharmacy): «аптека», «аптеки», «аптеку», «аптекой».",
    es: "Cerca de la residencia no hay ___. Tras нет el sustantivo va en genitivo. Formas de «аптека» (farmacia): «аптека», «аптеки», «аптеку», «аптекой».",
    de: "Beim Wohnheim gibt es keine ___. Nach нет steht das Nomen im Genitiv. Formen von «аптека» (Apotheke): «аптека», «аптеки», «аптеку», «аптекой».",
  },
  "Где ключ от ___?": {
    en: "Where is the key to ___? After «от» (of, from) the noun is genitive. Forms of «комната» (room): «комната», «комнаты», «комнату», «комнатой».",
    es: "¿Dónde está la llave de ___? Tras «от» (de) el sustantivo va en genitivo. Formas de «комната» (habitación): «комната», «комнаты», «комнату», «комнатой».",
    de: "Wo ist der Schlüssel zu ___? Nach «от» (von) steht das Nomen im Genitiv. Formen von «комната» (Zimmer): «комната», «комнаты», «комнату», «комнатой».",
  },
  "В центре много ___.": {
    en: "In the centre there are many ___. After много the noun is genitive plural. Forms of «магазин» (shop): «магазины», «магазинов», «магазинам», «магазинами».",
    es: "En el centro hay muchos ___. Tras много el sustantivo va en genitivo plural. Formas de «магазин» (tienda): «магазины», «магазинов», «магазинам», «магазинами».",
    de: "Im Zentrum gibt es viele ___. Nach много steht das Nomen im Genitiv Plural. Formen von «магазин» (Geschäft): «магазины», «магазинов», «магазинам», «магазинами».",
  },
  "У соседа нет ___.": {
    en: "The neighbour doesn’t have ___. After нет the noun is genitive. Forms of «деньги» (money): «деньги», «денег», «деньгам», «деньгами».",
    es: "El vecino no tiene ___. Tras нет el sustantivo va en genitivo. Formas de «деньги» (dinero): «деньги», «денег», «деньгам», «деньгами».",
    de: "Der Nachbar hat kein ___. Nach нет steht das Nomen im Genitiv. Formen von «деньги» (Geld): «деньги», «денег», «деньгам», «деньгами».",
  },
  "Это комната ___.": {
    en: "This is the room of ___. The owner is genitive. Forms of «сосед» (neighbour): «сосед», «соседа», «соседу», «соседом».",
    es: "Esta es la habitación de ___. El poseedor va en genitivo. Formas de «сосед» (vecino): «сосед», «соседа», «соседу», «соседом».",
    de: "Das ist das Zimmer von ___. Der Besitzer steht im Genitiv. Formen von «сосед» (Nachbar): «сосед», «соседа», «соседу», «соседом».",
  },
  "В магазине нет ___.": {
    en: "In the shop there is no ___. After нет the noun is genitive. Forms of «хлеб» (bread): «хлеб», «хлеба», «хлебу», «хлебом».",
    es: "En la tienda no hay ___. Tras нет el sustantivo va en genitivo. Formas de «хлеб» (pan): «хлеб», «хлеба», «хлебу», «хлебом».",
    de: "Im Geschäft gibt es kein ___. Nach нет steht das Nomen im Genitiv. Formen von «хлеб» (Brot): «хлеб», «хлеба», «хлебу», «хлебом».",
  },
  "Сколько ___ на столе?": {
    en: "How many ___ are on the table? After сколько the noun is genitive plural. Forms of «ключ» (key): «ключи», «ключа», «ключей», «ключом».",
    es: "¿Cuántas ___ hay sobre la mesa? Tras сколько el sustantivo va en genitivo plural. Formas de «ключ» (llave): «ключи», «ключа», «ключей», «ключом».",
    de: "Wie viele ___ liegen auf dem Tisch? Nach сколько steht das Nomen im Genitiv Plural. Formen von «ключ» (Schlüssel): «ключи», «ключа», «ключей», «ключом».",
  },
  "У соседа нет ___ от комнаты.": {
    en: "The neighbour doesn’t have a ___ to the room. After нет, genitive of «ключ» (key).",
    es: "El vecino no tiene ___ de la habitación. Tras нет, genitivo de «ключ» (llave).",
    de: "Der Nachbar hat kein ___ zum Zimmer. Nach нет der Genitiv von «ключ» (Schlüssel).",
  },
  "На этой улице нет ___.": {
    en: "There is no ___ on this street. After нет, genitive of «аптека» (pharmacy).",
    es: "En esta calle no hay ___. Tras нет, genitivo de «аптека» (farmacia).",
    de: "In dieser Straße gibt es keine ___. Nach нет der Genitiv von «аптека» (Apotheke).",
  },
  "Около метро нет ___.": {
    en: "There is no ___ near the metro. After нет, genitive of «банк» (bank).",
    es: "Cerca del metro no hay ___. Tras нет, genitivo de «банк» (banco).",
    de: "Bei der U-Bahn gibt es keine ___. Nach нет der Genitiv von «банк» (Bank).",
  },
  "Вот ключ от ___ 12.": {
    en: "Here is the key to ___ 12. After «от», genitive of «комната» (room).",
    es: "Aquí está la llave de la ___ 12. Tras «от», genitivo de «комната» (habitación).",
    de: "Hier ist der Schlüssel zu ___ 12. Nach «от» der Genitiv von «комната» (Zimmer).",
  },
  "В магазине мало ___.": {
    en: "There is little ___ in the shop. After мало, genitive of «хлеб» (bread).",
    es: "En la tienda hay poco ___. Tras мало, genitivo de «хлеб» (pan).",
    de: "Im Geschäft gibt es wenig ___. Nach мало der Genitiv von «хлеб» (Brot).",
  },
  "Около дома нет ___.": {
    en: "There is no ___ near the building. After нет, genitive of «магазин» (shop).",
    es: "Cerca de la casa no hay ___. Tras нет, genitivo de «магазин» (tienda).",
    de: "Beim Haus gibt es kein ___. Nach нет der Genitiv von «магазин» (Geschäft).",
  },
  "На нашей улице много ___.": {
    en: "There are many ___ on our street. After много, genitive plural of «банк» (bank).",
    es: "En nuestra calle hay muchos ___. Tras много, genitivo plural de «банк» (banco).",
    de: "In unserer Straße gibt es viele ___. Nach много der Genitiv Plural von «банк» (Bank).",
  },
  "У нас мало ___ на билет.": {
    en: "We have little ___ for a ticket. After мало, genitive of «деньги» (money).",
    es: "Tenemos poco ___ para el billete. Tras мало, genitivo de «деньги» (dinero).",
    de: "Wir haben wenig ___ für die Fahrkarte. Nach мало der Genitiv von «деньги» (Geld).",
  },
  "У меня нет ключ от комнаты.": {
    en: "Case: after нет, «ключ» (key) is still in the dictionary form. I don’t have the key to the room.",
    es: "Caso: tras нет, «ключ» (llave) sigue en la forma de diccionario. No tengo la llave de la habitación.",
    de: "Kasus: nach нет steht «ключ» (Schlüssel) noch in der Wörterbuchform. Ich habe den Schlüssel zum Zimmer nicht.",
  },
  "Рядом с домом нет аптека.": {
    en: "Case: after нет, «аптека» (pharmacy) is unchanged. There is no pharmacy near the building.",
    es: "Caso: tras нет, «аптека» (farmacia) no cambia. No hay farmacia junto a la casa.",
    de: "Kasus: nach нет bleibt «аптека» (Apotheke) unverändert. Beim Haus gibt es keine Apotheke.",
  },
  "В кафе нет хлеб.": {
    en: "Case: after нет, «хлеб» (bread) is unchanged. There is no bread at the café.",
    es: "Caso: tras нет, «хлеб» (pan) no cambia. En el café no hay pan.",
    de: "Kasus: nach нет bleibt «хлеб» (Brot) unverändert. Im Café gibt es kein Brot.",
  },
  "Где ключ сосед?": {
    en: "Case: the owner «сосед» (neighbour) is not genitive. Where is the neighbour’s key?",
    es: "Caso: el poseedor «сосед» (vecino) no está en genitivo. ¿Dónde está la llave del vecino?",
    de: "Kasus: der Besitzer «сосед» (Nachbar) steht nicht im Genitiv. Wo ist der Schlüssel des Nachbarn?",
  },
  "Около университета много магазины.": {
    en: "Case: after много, «магазины» (shops) is not genitive plural. There are many shops near the university.",
    es: "Caso: tras много, «магазины» (tiendas) no está en genitivo plural. Hay muchas tiendas cerca de la universidad.",
    de: "Kasus: nach много steht «магазины» (Geschäfte) nicht im Genitiv Plural. Bei der Universität gibt es viele Geschäfte.",
  },
  "Ключ от комната 5 на столе.": {
    en: "Case: after «от», «комната» (room) is not genitive. The key to room 5 is on the table.",
    es: "Caso: tras «от», «комната» (habitación) no está en genitivo. La llave de la habitación 5 está sobre la mesa.",
    de: "Kasus: nach «от» steht «комната» (Zimmer) nicht im Genitiv. Der Schlüssel zu Zimmer 5 liegt auf dem Tisch.",
  },
  "У нас мало деньги на аптеку.": {
    en: "Case: after мало, «деньги» (money) is not genitive. We have little money for the pharmacy.",
    es: "Caso: tras мало, «деньги» (dinero) no está en genitivo. Tenemos poco dinero para la farmacia.",
    de: "Kasus: nach мало steht «деньги» (Geld) nicht im Genitiv. Wir haben wenig Geld für die Apotheke.",
  },
  "Около банка нет аптека.": {
    en: "Case: after нет, «аптека» (pharmacy) is unchanged. There is no pharmacy near the bank.",
    es: "Caso: tras нет, «аптека» (farmacia) no cambia. No hay farmacia cerca del banco.",
    de: "Kasus: nach нет bleibt «аптека» (Apotheke) unverändert. Bei der Bank gibt es keine Apotheke.",
  },
  "общежитии / в / живу / Я": {
    en: "Say that I live in the dorm.",
    es: "Di que yo vivo en la residencia.",
    de: "Sag, dass ich im Wohnheim wohne.",
  },
  "хлеба / нет / столовой / В": {
    en: "Say that there is no bread in the cafeteria.",
    es: "Di que en el comedor no hay pan.",
    de: "Sag, dass es in der Mensa kein Brot gibt.",
  },
  "аптеки / нет / Здесь": {
    en: "Say that there is no pharmacy here.",
    es: "Di que aquí no hay farmacia.",
    de: "Sag, dass es hier keine Apotheke gibt.",
  },
  "магазинов / много / метро / Возле": {
    en: "Say that there are many shops near the metro.",
    es: "Di que cerca del metro hay muchas tiendas.",
    de: "Sag, dass es bei der U-Bahn viele Geschäfte gibt.",
  },
  "соседа / ключ / Это": {
    en: "Say that this is the neighbour’s key.",
    es: "Di que esta es la llave del vecino.",
    de: "Sag, dass das der Schlüssel des Nachbarn ist.",
  },
  "банк / ближайший / Где": {
    en: "Ask where the nearest bank is.",
    es: "Pregunta dónde está el banco más cercano.",
    de: "Frag, wo die nächste Bank ist.",
  },
  "денег / мало / У / нас": {
    en: "Say that we have little money.",
    es: "Di que nosotros tenemos poco dinero.",
    de: "Sag, dass wir wenig Geld haben.",
  },
  "магазина / нет / общежитии / В": {
    en: "Say that there is no shop in the dorm.",
    es: "Di que en la residencia no hay tienda.",
    de: "Sag, dass es im Wohnheim kein Geschäft gibt.",
  },

  // Ch. 17 — Cases in real situations
  "На стажировке в музее она интересуется ___ реставрации, а не экскурсиями.": {
    en: "On her internship at the museum she is interested in the ___ of restoration, not in guided tours. Интересоваться (to be interested in) takes the instrumental. Forms of «техника» (technique): «техникой», «техника», «технику», «технике».",
    es: "En las prácticas del museo se interesa por la ___ de la restauración, no por las visitas. Интересоваться (interesarse) rige instrumental. Formas de «техника» (técnica): «техникой», «техника», «технику», «технике».",
    de: "Im Praktikum im Museum interessiert sie sich für die ___ der Restaurierung, nicht für Führungen. Интересоваться (sich interessieren) verlangt den Instrumental. Formen von «техника» (Technik): «техникой», «техника», «технику», «технике».",
  },
  "Мы не отправим текст, пока не дождёмся ___ комиссии.": {
    en: "We will not send the text until we get the commission’s ___. Дождаться (to wait until something arrives) takes the genitive. Forms of «решение» (decision): «решения», «решение», «решению», «решением».",
    es: "No enviaremos el texto hasta que llegue la ___ de la comisión. Дождаться (esperar hasta obtener) rige genitivo. Formas de «решение» (decisión): «решения», «решение», «решению», «решением».",
    de: "Wir schicken den Text nicht ab, bis die ___ der Kommission da ist. Дождаться (abwarten, bis etwas eintrifft) verlangt den Genitiv. Formen von «решение» (Entscheidung): «решения», «решение», «решению», «решением».",
  },
  "Перед защитой она боялась не комиссии, а ___ в расчётах.": {
    en: "Before the defence she was afraid not of the committee, but of a ___ in the calculations. Бояться (to be afraid of) takes the genitive. Forms of «ошибка» (mistake): «ошибки», «ошибку», «ошибке», «ошибкой».",
    es: "Antes de la defensa no temía a la comisión, sino a una ___ en los cálculos. Бояться (temer) rige genitivo. Formas de «ошибка» (error): «ошибки», «ошибку», «ошибке», «ошибкой».",
    de: "Vor der Verteidigung fürchtete sie nicht die Kommission, sondern einen ___ in den Rechnungen. Бояться (Angst haben vor) verlangt den Genitiv. Formen von «ошибка» (Fehler): «ошибки», «ошибку», «ошибке», «ошибкой».",
  },
  "Куратор помогает ___ заполнить анкету на стипендию.": {
    en: "The tutor helps ___ fill in the scholarship form. Помогать (to help) takes the dative. The options are case forms of «иностранные студенты» (international students): «иностранным студентам», «иностранных студентов», «иностранными студентами», «иностранные студенты».",
    es: "El tutor ayuda a ___ a rellenar la solicitud de beca. Помогать (ayudar) rige dativo. Las opciones son casos de «иностранные студенты» (estudiantes extranjeros): «иностранным студентам», «иностранных студентов», «иностранными студентами», «иностранные студенты».",
    de: "Der Betreuer hilft ___ , das Stipendienformular auszufüllen. Помогать (helfen) verlangt den Dativ. Die Optionen sind Kasusformen von «иностранные студенты» (ausländische Studierende): «иностранным студентам», «иностранных студентов», «иностранными студентами», «иностранные студенты».",
  },
  "В университетской поликлинике на этой неделе нет ___.": {
    en: "At the university clinic there is no ___ this week. After нет the noun is genitive. Forms of «терапевт» (GP, general doctor): «терапевта», «терапевт», «терапевту», «терапевтом».",
    es: "En la policlínica de la universidad esta semana no hay ___. Tras нет, genitivo. Formas de «терапевт» (médico de cabecera): «терапевта», «терапевт», «терапевту», «терапевтом».",
    de: "In der Uni-Poliklinik gibt es diese Woche keinen ___. Nach нет steht das Nomen im Genitiv. Formen von «терапевт» (Hausarzt): «терапевта», «терапевт», «терапевту», «терапевтом».",
  },
  "После практики в порту он хочет стать ___ в администрации.": {
    en: "After the placement at the port he wants to become a ___ in the administration. Стать (to become) takes the instrumental. Forms of «переводчик» (translator, interpreter): «переводчиком», «переводчик», «переводчика», «переводчику».",
    es: "Después de las prácticas en el puerto quiere hacerse ___ en la administración. Стать (llegar a ser) rige instrumental. Formas de «переводчик» (traductor, intérprete): «переводчиком», «переводчик», «переводчика», «переводчику».",
    de: "Nach dem Praktikum im Hafen will er ___ in der Verwaltung werden. Стать (werden) verlangt den Instrumental. Formen von «переводчик» (Übersetzer, Dolmetscher): «переводчиком», «переводчик», «переводчика», «переводчику».",
  },
  "На собрании жильцов спорили ___ кухни, а не о цене обеда.": {
    en: "At the residents’ meeting they argued ___ the kitchen, not about the price of lunch. «о» (about) takes the prepositional. The options are «о» plus a form of «ремонт» (repair): «о ремонте», «о ремонт», «о ремонту», «о ремонтом».",
    es: "En la reunión de vecinos discutían ___ la cocina, no del precio de la comida. «о» (de, sobre) rige preposicional. Las opciones son «о» más una forma de «ремонт» (reparación): «о ремонте», «о ремонт», «о ремонту», «о ремонтом».",
    de: "In der Bewohnerversammlung stritten sie ___ der Küche, nicht über den Preis des Mittagessens. «о» (über) verlangt den Präpositional. Die Optionen sind «о» plus eine Form von «ремонт» (Reparatur): «о ремонте», «о ремонт», «о ремонту», «о ремонтом».",
  },
  "У входа в архив я жду не справку, а ___ с пропуском.": {
    en: "At the archive entrance I am waiting not for a certificate, but for a ___ with a pass. Ждать a person takes that person’s accusative. Forms of «коллега» (colleague): «коллегу», «коллега», «коллеге», «коллегой». «справку» is a certificate.",
    es: "A la entrada del archivo no espero una constancia, sino a ___ con un pase. Ждать a una persona pide el acusativo de esa persona. Formas de «коллега» (colega): «коллегу», «коллега», «коллеге», «коллегой». «справку» es una constancia.",
    de: "Am Archiveingang warte ich nicht auf eine Bescheinigung, sondern auf ___ mit einem Ausweis. Ждать einer Person verlangt deren Akkusativ. Formen von «коллега» (Kollege): «коллегу», «коллега», «коллеге», «коллегой». «справку» ist eine Bescheinigung.",
  },
  "В архиве стажёр интересуется ___ документов, а не только их содержанием.": {
    en: "In the archive the intern is interested in the ___ of the documents, not only in their content. Instrumental of «сохранность» (preservation, keeping them safe).",
    es: "En el archivo el becario se interesa por la ___ de los documentos, no solo por su contenido. Instrumental de «сохранность» (conservación).",
    de: "Im Archiv interessiert sich der Praktikant für die ___ der Dokumente, nicht nur für ihren Inhalt. Instrumental von «сохранность» (Erhaltung).",
  },
  "В приёмной я жду ___ уже сорок минут.": {
    en: "In the waiting room I have been waiting for a ___ for forty minutes. Genitive of «ответ» (a reply); ждать an abstract noun often takes the genitive.",
    es: "En la recepción llevo cuarenta minutos esperando ___. Genitivo de «ответ» (una respuesta); ждать un nombre abstracto suele ir en genitivo.",
    de: "Im Vorzimmer warte ich schon vierzig Minuten auf ___. Genitiv von «ответ» (eine Antwort); ждать bei einem abstrakten Nomen steht oft im Genitiv.",
  },
  "Он не боится аудитории, он боится ___ в терминологии.": {
    en: "He is not afraid of the classroom; he is afraid of a ___ in the terminology. Genitive of «ошибка» (mistake). Бояться takes the genitive.",
    es: "No teme el aula; teme una ___ en la terminología. Genitivo de «ошибка» (error). Бояться rige genitivo.",
    de: "Er hat keine Angst vor dem Hörsaal; er hat Angst vor einem ___ in der Terminologie. Genitiv von «ошибка» (Fehler). Бояться verlangt den Genitiv.",
  },
  "Библиотекарь помогает ___ найти журнал за прошлый год.": {
    en: "The librarian helps a ___ find last year’s journal. Dative of «аспирант» (graduate student).",
    es: "El bibliotecario ayuda a un ___ a encontrar la revista del año pasado. Dativo de «аспирант» (doctorando).",
    de: "Der Bibliothekar hilft einem ___ , die Zeitschrift vom vorigen Jahr zu finden. Dativ von «аспирант» (Doktorand).",
  },
  "В медпункте нет ___ от давления.": {
    en: "At the first-aid post there is no ___ for blood pressure. «от давления» means “for blood pressure”. Genitive of «лекарство» (medicine).",
    es: "En el botiquín no hay ___ para la tensión. «от давления» significa «para la tensión». Genitivo de «лекарство» (medicamento).",
    de: "In der Sanitätsstelle gibt es kein ___ gegen den Blutdruck. «от давления» heißt „gegen den Blutdruck“. Genitiv von «лекарство» (Medikament).",
  },
  "Летом она работала ___ в языковом лагере.": {
    en: "In the summer she worked as a ___ at a language camp. Feminine instrumental of «вожатый» (camp leader).",
    es: "En verano trabajó de ___ en un campamento de idiomas. Instrumental femenino de «вожатый» (monitor de campamento).",
    de: "Im Sommer arbeitete sie als ___ in einem Sprachcamp. Feminin Instrumental von «вожатый» (Betreuer im Lager).",
  },
  "Куратор подробно рассказал ___ получения стипендии.": {
    en: "The tutor explained in detail ___ of receiving the scholarship. «о» (about) plus the prepositional of «порядок» (the procedure).",
    es: "El tutor explicó con detalle ___ de obtener la beca. «о» (sobre) más el preposicional de «порядок» (el procedimiento).",
    de: "Der Betreuer erklärte ausführlich ___ des Stipendiums. «о» (über) plus der Präpositional von «порядок» (das Verfahren).",
  },
  "У старосты нет ___ присутствующих на завтрашний семинар.": {
    en: "The group monitor doesn’t have the ___ of people coming to tomorrow’s seminar. Genitive of «список» (list).",
    es: "El delegado no tiene la ___ de quienes asistirán al seminario de mañana. Genitivo de «список» (lista).",
    de: "Der Gruppensprecher hat keine ___ der Leute, die morgen zum Seminar kommen. Genitiv von «список» (Liste).",
  },
  "На стажировке она интересуется техника реставрации.": {
    en: "Case: after интересоваться (to be interested in), «техника» (technique) is not instrumental. Her internship, restoration technique.",
    es: "Caso: tras интересоваться (interesarse), «техника» (técnica) no está en instrumental. Sus prácticas, la técnica de restauración.",
    de: "Kasus: nach интересоваться (sich interessieren) steht «техника» (Technik) nicht im Instrumental. Ihr Praktikum, Restaurierungstechnik.",
  },
  "Секретарь просил дождаться решение до вечера.": {
    en: "Case: дождаться (to wait until it arrives) needs the genitive, and «решение» (a decision) is not genitive here. The secretary asked them to wait until evening.",
    es: "Caso: дождаться (esperar hasta obtener) pide genitivo, y «решение» (una decisión) aquí no lo está. El secretario pidió esperar hasta la noche.",
    de: "Kasus: дождаться (abwarten, bis etwas eintrifft) verlangt den Genitiv, und «решение» (eine Entscheidung) steht hier nicht darin. Die Sekretärin bat, bis zum Abend zu warten.",
  },
  "Перед защитой он боится ошибку в таблице.": {
    en: "Case: after бояться (to be afraid of), the mistake is not genitive. Before the defence, a mistake in the table.",
    es: "Caso: tras бояться (temer), el error no está en genitivo. Antes de la defensa, un error en la tabla.",
    de: "Kasus: nach бояться (Angst haben vor) steht der Fehler nicht im Genitiv. Vor der Verteidigung, ein Fehler in der Tabelle.",
  },
  "Куратор помогает иностранные студенты с регистрацией.": {
    en: "Case: after помогать (to help), the international students are not dative. Help with registration.",
    es: "Caso: tras помогать (ayudar), los estudiantes extranjeros no están en dativo. Ayuda con el registro.",
    de: "Kasus: nach помогать (helfen) stehen die ausländischen Studierenden nicht im Dativ. Hilfe bei der Anmeldung.",
  },
  "В медпункте нет лекарство от температуры.": {
    en: "Case: after нет, «лекарство» (medicine) is not genitive. Medicine for a fever.",
    es: "Caso: tras нет, «лекарство» (medicamento) no está en genitivo. Un medicamento para la fiebre.",
    de: "Kasus: nach нет steht «лекарство» (Medikament) nicht im Genitiv. Ein Mittel gegen Fieber.",
  },
  "После курсов она стала переводчик в порту.": {
    en: "Case: after стать (to become), «переводчик» (interpreter) is not instrumental. After the course, at the port.",
    es: "Caso: tras стать (llegar a ser), «переводчик» (intérprete) no está en instrumental. Después del curso, en el puerto.",
    de: "Kasus: nach стать (werden) steht «переводчик» (Dolmetscherin) nicht im Instrumental. Nach dem Kurs, im Hafen.",
  },
  "Жильцы спорили о ремонт кухни до полуночи.": {
    en: "Case: after «о» (about), «ремонт» (repair) is not prepositional. The residents argued about the kitchen until midnight.",
    es: "Caso: tras «о» (sobre), «ремонт» (reparación) no está en preposicional. Los vecinos discutieron de la cocina hasta medianoche.",
    de: "Kasus: nach «о» (über) steht «ремонт» (Reparatur) nicht im Präpositional. Die Bewohner stritten bis Mitternacht über die Küche.",
  },
  "У входа я жду коллега, а не справку.": {
    en: "Case: ждать a person — «коллега» (colleague) is not in the accusative of a person. At the entrance, a colleague, not a certificate.",
    es: "Caso: ждать a una persona — «коллега» (colega) no está en el acusativo de persona. En la entrada, un colega, no una constancia.",
    de: "Kasus: ждать einer Person — «коллега» (Kollege) steht nicht im Akkusativ der Person. Am Eingang, ein Kollege, keine Bescheinigung.",
  },
  "реставрации / техникой / интересуюсь / Я": {
    en: "Say that I am interested in restoration technique.",
    es: "Di que me interesa la técnica de restauración.",
    de: "Sag, dass ich mich für Restaurierungstechnik interessiere.",
  },
  "комиссии / решения / ждём / Мы": {
    en: "Say that we are waiting for the commission’s decision.",
    es: "Di que esperamos la decisión de la comisión.",
    de: "Sag, dass wir auf die Entscheidung der Kommission warten.",
  },
  "расчётах / в / ошибок / бойтесь / Не": {
    en: "Tell someone not to be afraid of mistakes in the calculations.",
    es: "Di que no teman los errores en los cálculos.",
    de: "Sag, dass man keine Angst vor Fehlern in den Rechnungen haben soll.",
  },
  "студентам / иностранным / помогает / Куратор": {
    en: "Say that the tutor helps international students.",
    es: "Di que el tutor ayuda a los estudiantes extranjeros.",
    de: "Sag, dass der Betreuer ausländischen Studierenden hilft.",
  },
  "терапевта / нет / поликлинике / В": {
    en: "Say that there is no GP at the clinic.",
    es: "Di que en la policlínica no hay médico de cabecera.",
    de: "Sag, dass es in der Poliklinik keinen Hausarzt gibt.",
  },
  "переводчиком / стать / хочет / Он": {
    en: "Say that he wants to become an interpreter.",
    es: "Di que él quiere hacerse intérprete.",
    de: "Sag, dass er Dolmetscher werden will.",
  },
  "кухни / ремонте / о / спорили / Жильцы": {
    en: "Say that the residents argued about the kitchen repair.",
    es: "Di que los vecinos discutían de la reparación de la cocina.",
    de: "Sag, dass die Bewohner über die Reparatur der Küche stritten.",
  },
  "справку / не / а / коллегу / жду / Я": {
    en: "Say that I am waiting for a colleague, not for a certificate.",
    es: "Di que espero a un colega, no una constancia.",
    de: "Sag, dass ich auf einen Kollegen warte, nicht auf eine Bescheinigung.",
  },

  // Ch. 18 — Aspect across tenses
  "Пока комиссия читала работы, он всё ещё ___ черновик и не дошёл до конца.": {
    en: "While the committee was reading the papers, he was still ___ the draft and had not reached the end. A background process. «читал» was reading / «прочитал» read it through / «прочитает» will read it through / «читает» is reading.",
    es: "Mientras la comisión leía los trabajos, él todavía ___ el borrador y no llegó al final. Un proceso de fondo. «читал» leía / «прочитал» lo leyó entero / «прочитает» lo leerá entero / «читает» lo está leyendo.",
    de: "Während die Kommission die Arbeiten las, ___ er den Entwurf noch und kam nicht bis zum Ende. Ein Hintergrund-Verlauf. «читал» las / «прочитал» hat zu Ende gelesen / «прочитает» wird zu Ende lesen / «читает» liest gerade.",
  },
  "Когда все сели, преподаватель ___ дверь и начал зачёт.": {
    en: "When everyone had sat down, the teacher ___ the door and started the test. One event in a chain. «закрыл» closed it once / «закрывал» was closing it / «будет закрывать» will be closing it / «закрывает» closes it.",
    es: "Cuando todos se sentaron, el profesor ___ la puerta y empezó el examen. Un suceso en una cadena. «закрыл» la cerró una vez / «закрывал» la cerraba / «будет закрывать» la estará cerrando / «закрывает» la cierra.",
    de: "Als alle saßen, ___ die Lehrkraft die Tür und begann die Prüfung. Ein Ereignis in einer Kette. «закрыл» machte sie einmal zu / «закрывал» war dabei, sie zu schließen / «будет закрывать» wird sie schließen / «закрывает» schließt sie.",
  },
  "В следующем семестре я ___ к каждому семинару, а не в последнюю ночь.": {
    en: "Next semester I ___ for every seminar, not on the last night. A repeated future process. «буду готовиться» I will prepare regularly / «подготовлюсь» I will get ready once / «готовился» I was preparing / «подготовился» I got ready.",
    es: "El semestre que viene yo ___ para cada seminario, no la última noche. Un proceso futuro que se repite. «буду готовиться» me prepararé con regularidad / «подготовлюсь» me prepararé una vez / «готовился» me preparaba / «подготовился» me preparé.",
    de: "Nächstes Semester ___ ich mich auf jedes Seminar vor, nicht in der letzten Nacht. Ein wiederholter Verlauf in der Zukunft. «буду готовиться» ich werde mich regelmäßig vorbereiten / «подготовлюсь» ich werde einmal fertig sein / «готовился» ich bereitete mich vor / «подготовился» ich war fertig vorbereitet.",
  },
  "К пятнице она ___ к докладу и отправит файл куратору.": {
    en: "By Friday she ___ for the talk and will send the file to the tutor. A result reached by a deadline. «подготовится» she will be ready / «будет готовиться» she will be preparing / «готовилась» she was preparing / «готовится» she is preparing.",
    es: "Para el viernes ella ___ para la exposición y enviará el archivo al tutor. Un resultado para una fecha. «подготовится» estará lista / «будет готовиться» se estará preparando / «готовилась» se preparaba / «готовится» se está preparando.",
    de: "Bis Freitag ___ sie sich auf den Vortrag vor und schickt die Datei dem Betreuer. Ein Ergebnis bis zu einem Termin. «подготовится» sie wird fertig sein / «будет готовиться» sie wird sich vorbereiten / «готовилась» sie bereitete sich vor / «готовится» sie bereitet sich vor.",
  },
  "Что ___ в 10:15 на практике?": {
    en: "What ___ at 10:15 on the placement? One moment, not a habit. «случилось» happened once / «случалось» used to happen / «случится» will happen / «случается» happens.",
    es: "¿Qué ___ a las 10:15 en las prácticas? Un momento, no un hábito. «случилось» ocurrió una vez / «случалось» solía ocurrir / «случится» ocurrirá / «случается» ocurre.",
    de: "Was ___ um 10:15 im Praktikum? Ein Zeitpunkt, keine Gewohnheit. «случилось» geschah einmal / «случалось» geschah immer wieder / «случится» wird geschehen / «случается» geschieht.",
  },
  "Он долго ___ однокурсникам про практику и только потом перешёл к цифрам.": {
    en: "For a long time he ___ his classmates about the placement, and only then moved on to the figures. «долго» marks a process. «рассказывал» was telling / «рассказал» told it through / «расскажет» will tell / «рассказывает» tells.",
    es: "Durante mucho tiempo ___ a sus compañeros de las prácticas y solo después pasó a las cifras. «долго» marca un proceso. «рассказывал» contaba / «рассказал» lo contó entero / «расскажет» lo contará / «рассказывает» cuenta.",
    de: "Er ___ den Kommilitonen lange vom Praktikum und ging erst danach zu den Zahlen. «долго» markiert einen Verlauf. «рассказывал» erzählte / «рассказал» hat zu Ende erzählt / «расскажет» wird erzählen / «рассказывает» erzählt.",
  },
  "Когда сосед наконец ___ всю историю, мы поняли, куда делся ключ.": {
    en: "When the neighbour at last ___ the whole story, we understood where the key had gone. «наконец» marks a result. «рассказал» told it through / «рассказывал» was telling / «будет рассказывать» will be telling / «рассказывает» tells.",
    es: "Cuando el vecino por fin ___ toda la historia, entendimos adónde había ido la llave. «наконец» marca un resultado. «рассказал» la contó entera / «рассказывал» la contaba / «будет рассказывать» la estará contando / «рассказывает» la cuenta.",
    de: "Als der Nachbar endlich die ganze Geschichte ___, verstanden wir, wo der Schlüssel geblieben war. «наконец» markiert ein Ergebnis. «рассказал» hat zu Ende erzählt / «рассказывал» erzählte / «будет рассказывать» wird erzählen / «рассказывает» erzählt.",
  },
  "Каждый вечер перед сессией они ___ задачи, а в ночь перед экзаменом только повторили ошибки.": {
    en: "Every evening before the exam period they ___ problems, and on the night before the exam they only went over the mistakes. A repeated past process. «решали» were solving / «решили» solved them / «решат» will solve / «решают» solve.",
    es: "Cada noche antes de la sesión de exámenes ___ problemas, y la noche previa al examen solo repasaron los errores. Un proceso pasado que se repite. «решали» resolvían / «решили» los resolvieron / «решат» los resolverán / «решают» resuelven.",
    de: "Jeden Abend vor der Prüfungsphase ___ sie Aufgaben, und in der Nacht vor der Prüfung gingen sie nur die Fehler durch. Ein wiederholter Verlauf in der Vergangenheit. «решали» lösten / «решили» haben sie gelöst / «решат» werden lösen / «решают» lösen.",
  },
  "Пока мы ___ билеты, на табло появилась задержка.": {
    en: "While we ___ tickets, a delay appeared on the board. Background: imperfective of искать (to look for), plural.",
    es: "Mientras ___ billetes, en el panel apareció un retraso. Fondo: imperfectivo de искать (buscar), plural.",
    de: "Während wir ___ Fahrkarten, erschien auf der Anzeige eine Verspätung. Hintergrund: imperfektiv von искать (suchen), Plural.",
  },
  "Вдруг преподаватель ___ дверь, и все замолчали.": {
    en: "Suddenly the teacher ___ the door, and everyone fell silent. One event: perfective of открыть (to open).",
    es: "De pronto el profesor ___ la puerta, y todos callaron. Un suceso: perfectivo de открыть (abrir).",
    de: "Plötzlich ___ die Lehrkraft die Tür, und alle schwiegen. Ein Ereignis: perfektiv von открыть (öffnen).",
  },
  "Завтра к обеду я ___ конспект и сдам его старосте.": {
    en: "Tomorrow by lunch I ___ the notes and will hand them to the group monitor. A result by a deadline: perfective of написать (to write), matching я.",
    es: "Mañana para la comida yo ___ los apuntes y se los entregaré al delegado. Un resultado para una hora: perfectivo de написать (escribir), con я.",
    de: "Morgen bis zum Mittagessen ___ ich die Mitschrift und gebe sie dem Gruppensprecher. Ein Ergebnis bis zu einem Termin: perfektiv von написать (schreiben), passend zu я.",
  },
  "Со следующего месяца мы ___ отчёт каждую пятницу.": {
    en: "From next month we ___ a report every Friday. A repeated future: the imperfective partner of сдать (to hand in), with мы.",
    es: "Desde el mes que viene nosotros ___ un informe cada viernes. Un futuro que se repite: el compañero imperfectivo de сдать (entregar), con мы.",
    de: "Ab dem nächsten Monat ___ wir jeden Freitag einen Bericht. Eine wiederholte Zukunft: der imperfektive Partner von сдать (abgeben), passend zu мы.",
  },
  "Что ___ у кассы? Очередь не двигается.": {
    en: "What ___ at the checkout? The queue isn’t moving. One event: perfective of случиться (to happen).",
    es: "¿Qué ___ en la caja? La cola no avanza. Un suceso: perfectivo de случиться (ocurrir).",
    de: "Was ___ an der Kasse? Die Schlange bewegt sich nicht. Ein Ereignis: perfektiv von случиться (geschehen).",
  },
  "Она два часа ___ опыт в лаборатории и так и не получила результат.": {
    en: "She ___ the experiment in the lab for two hours and still got no result. A process: imperfective of повторять (to repeat).",
    es: "Ella ___ el experimento en el laboratorio durante dos horas y no obtuvo resultado. Un proceso: imperfectivo de повторять (repetir).",
    de: "Sie ___ den Versuch im Labor zwei Stunden und bekam trotzdem kein Ergebnis. Ein Verlauf: imperfektiv von повторять (wiederholen).",
  },
  "К вечеру он ___ к собеседованию и наконец успокоился.": {
    en: "By evening he ___ for the interview and finally calmed down. A result: perfective of подготовиться (to get ready), masculine.",
    es: "Para la noche él ___ para la entrevista y por fin se calmó. Un resultado: perfectivo de подготовиться (prepararse), masculino.",
    de: "Bis zum Abend ___ er sich auf das Gespräch vor und beruhigte sich endlich. Ein Ergebnis: perfektiv von подготовиться (sich vorbereiten), maskulin.",
  },
  "Прошлой зимой такое ___ каждую неделю: общежитие оставалось без горячей воды.": {
    en: "Last winter that ___ every week: the dorm was left without hot water. A repeated past: imperfective of случаться (to happen).",
    es: "El invierno pasado eso ___ cada semana: la residencia se quedaba sin agua caliente. Un pasado que se repite: imperfectivo de случаться (ocurrir).",
    de: "Letzten Winter ___ das jede Woche: das Wohnheim blieb ohne warmes Wasser. Eine wiederholte Vergangenheit: imperfektiv von случаться (geschehen).",
  },
  "Пока комиссия читала работы, он всё ещё прочитал черновик и не дошёл до конца.": {
    en: "Aspect of the background: «всё ещё» (still), during «пока» (while), is a process, not one completed reading. He had not reached the end of the draft.",
    es: "Aspecto del fondo: «всё ещё» (todavía), durante «пока» (mientras), es un proceso, no una lectura cerrada. No llegó al final del borrador.",
    de: "Aspekt des Hintergrunds: «всё ещё» (noch), während «пока» (während), ist ein Verlauf, kein abgeschlossenes Lesen. Er kam nicht bis zum Ende des Entwurfs.",
  },
  "К пятнице я буду готовиться к докладу и отправлю файл.": {
    en: "Aspect: «к пятнице» (by Friday) needs a result reached by the deadline, not a process that is still going on. Then the file is sent.",
    es: "Aspecto: «к пятнице» (para el viernes) pide un resultado alcanzado para esa fecha, no un proceso que sigue. Después se envía el archivo.",
    de: "Aspekt: «к пятнице» (bis Freitag) verlangt ein Ergebnis bis zu dem Termin, keinen Verlauf, der noch andauert. Danach wird die Datei geschickt.",
  },
  "Такое каждый день не случилось.": {
    en: "Aspect: «каждый день» (every day) is repetition, so one completed event does not fit. Something did not happen daily.",
    es: "Aspecto: «каждый день» (cada día) es repetición, así que un suceso cerrado no encaja. Algo no ocurría a diario.",
    de: "Aspekt: «каждый день» (jeden Tag) ist Wiederholung, deshalb passt ein einmaliges abgeschlossenes Ereignis nicht. Etwas geschah nicht täglich.",
  },
  "Он долго рассказал про практику, и мы устали слушать.": {
    en: "Aspect: «долго» (for a long time) marks a process, not one completed telling. We got tired of listening about the placement.",
    es: "Aspecto: «долго» (durante mucho tiempo) marca un proceso, no un relato cerrado. Nos cansamos de escuchar lo de las prácticas.",
    de: "Aspekt: «долго» (lange) markiert einen Verlauf, kein einmaliges zu Ende erzähltes Stück. Wir wurden müde, vom Praktikum zu hören.",
  },
  "Каждый вечер я подготовлюсь к семинару.": {
    en: "Aspect: «каждый вечер» (every evening) is a repeated process, not one completed act. Getting ready for the seminar.",
    es: "Aspecto: «каждый вечер» (cada noche) es un proceso que se repite, no un acto cerrado. Prepararse para el seminario.",
    de: "Aspekt: «каждый вечер» (jeden Abend) ist ein wiederholter Verlauf, keine einmalige abgeschlossene Handlung. Sich auf das Seminar vorbereiten.",
  },
  "Когда она наконец рассказывала всю историю, мы нашли ключ.": {
    en: "Aspect: «наконец» (at last) marks a completed result, not a telling that is still in progress. Then we found the key.",
    es: "Aspecto: «наконец» (por fin) marca un resultado cerrado, no un relato que sigue. Entonces encontramos la llave.",
    de: "Aspekt: «наконец» (endlich) markiert ein abgeschlossenes Ergebnis, kein Erzählen, das noch läuft. Dann fanden wir den Schlüssel.",
  },
  "Со следующего месяца мы сдадим отчёт каждую пятницу.": {
    en: "Aspect: «каждую пятницу» (every Friday) is repetition, not one future result. A report.",
    es: "Aspecto: «каждую пятницу» (cada viernes) es repetición, no un resultado futuro único. Un informe.",
    de: "Aspekt: «каждую пятницу» (jeden Freitag) ist Wiederholung, kein einmaliges zukünftiges Ergebnis. Ein Bericht.",
  },
  "Она два часа повторила опыт в лаборатории и так и не получила результат.": {
    en: "Aspect: two hours and still no result is a process, not a completed act. The experiment in the lab.",
    es: "Aspecto: dos horas y aun así ningún resultado es un proceso, no un acto cerrado. El experimento en el laboratorio.",
    de: "Aspekt: zwei Stunden und trotzdem kein Ergebnis ist ein Verlauf, keine abgeschlossene Handlung. Der Versuch im Labor.",
  },
  "записывал / я / объяснял / преподаватель / Пока": {
    en: "Say that while the teacher was explaining, I was taking notes.",
    es: "Di que, mientras el profesor explicaba, yo tomaba apuntes.",
    de: "Sag, dass ich mitschrieb, während die Lehrkraft erklärte.",
  },
  "случилось / что / рассказала / она / Наконец": {
    en: "Say that at last she told what had happened.",
    es: "Di que por fin ella contó lo que había pasado.",
    de: "Sag, dass sie endlich erzählte, was geschehen war.",
  },
  "вечер / каждый / готовиться / буду / Я": {
    en: "Say that I will prepare every evening.",
    es: "Di que yo me prepararé cada noche.",
    de: "Sag, dass ich mich jeden Abend vorbereiten werde.",
  },
  "докладу / к / подготовится / она / пятницы / До": {
    en: "Say that before Friday she will get ready for the talk.",
    es: "Di que antes del viernes ella se preparará para la exposición.",
    de: "Sag, dass sie sich vor Freitag auf den Vortrag vorbereiten wird.",
  },
  "случилось / не / особенного / ничего / Вчера": {
    en: "Say that yesterday nothing special happened.",
    es: "Di que ayer no pasó nada especial.",
    de: "Sag, dass gestern nichts Besonderes geschehen ist.",
  },
  "задачи / решали / часа / два / Они": {
    en: "Say that they were solving problems for two hours.",
    es: "Di que ellos resolvían problemas durante dos horas.",
    de: "Sag, dass sie zwei Stunden Aufgaben gelöst haben.",
  },
  "случилось / что / пожалуйста / Расскажите": {
    en: "Ask, politely, for someone to tell what happened.",
    es: "Pide, con educación, que cuenten qué pasó.",
    de: "Bitte höflich darum, zu erzählen, was geschehen ist.",
  },
  "неделю / каждую / случалось / это / зимой / Прошлой": {
    en: "Say that last winter this happened every week.",
    es: "Di que el invierno pasado esto ocurría cada semana.",
    de: "Sag, dass das letzten Winter jede Woche geschah.",
  },

  // Ch. 19 — Prefixed motion
  "После пары я ___ в деканат, а потом сразу на поезд.": {
    en: "After class I ___ to the dean’s office, then straight to the train. The start of one trip. «пойду» I will set off on foot / «хожу» I go regularly / «пришёл» I arrived / «ухожу» I am leaving.",
    es: "Después de la clase yo ___ al decanato y luego directo al tren. El inicio de un solo trayecto. «пойду» me pondré en camino a pie / «хожу» voy con frecuencia / «пришёл» llegué / «ухожу» me estoy yendo.",
    de: "Nach der Stunde ___ ich ins Dekanat und dann gleich zum Zug. Der Beginn eines einmaligen Wegs. «пойду» ich werde losgehen / «хожу» ich gehe regelmäßig / «пришёл» ich bin angekommen / «ухожу» ich gehe weg.",
  },
  "Гости уже ___ и стоят у табло.": {
    en: "The guests have already ___ and are standing by the departures board. They are here. «приехали» they arrived by transport / «уехали» they left / «ездили» they went and came back / «ходят» they go on foot regularly.",
    es: "Los invitados ya ___ y están junto al panel. Están aquí. «приехали» llegaron en transporte / «уехали» se fueron / «ездили» fueron y volvieron / «ходят» van a pie con frecuencia.",
    de: "Die Gäste sind schon ___ und stehen an der Anzeigetafel. Sie sind da. «приехали» sie sind mit einem Fahrzeug angekommen / «уехали» sie sind abgefahren / «ездили» sie sind hingefahren und zurück / «ходят» sie gehen regelmäßig.",
  },
  "Преподаватель ___ с консультации раньше, его ещё нет в ректорате.": {
    en: "The teacher ___ the consultation early; he is not at the rector’s office yet. He has left that place. «ушёл» he left / «пришёл» he arrived / «вошёл» he went in / «приехал» he arrived by transport.",
    es: "El profesor ___ de la tutoría antes de tiempo; todavía no está en el rectorado. Se fue de allí. «ушёл» se fue / «пришёл» llegó / «вошёл» entró / «приехал» llegó en transporte.",
    de: "Die Lehrkraft ___ früher von der Sprechstunde; sie ist noch nicht im Rektorat. Sie hat den Ort verlassen. «ушёл» ging weg / «пришёл» kam an / «вошёл» ging hinein / «приехал» kam mit einem Fahrzeug an.",
  },
  "Опоздавший стоит в коридоре. Преподаватель говорит: «___».": {
    en: "The late student is standing in the corridor. The teacher says: “___”. He is outside the room. «Войдите» come in / «Выйдите» go out / «Уйдите» go away / «Приезжайте» come, by transport.",
    es: "Quien llegó tarde está en el pasillo. El profesor dice: «___». Está fuera del aula. «Войдите» entre / «Выйдите» salga / «Уйдите» váyase / «Приезжайте» venga, en transporte.",
    de: "Wer zu spät kommt, steht auf dem Flur. Die Lehrkraft sagt: „___“. Er ist außerhalb des Raums. «Войдите» kommen Sie herein / «Выйдите» gehen Sie hinaus / «Уйдите» gehen Sie weg / «Приезжайте» kommen Sie (mit einem Fahrzeug).",
  },
  "На набережной мы пешком ___ мост и оказались у музея.": {
    en: "On the embankment we ___ the bridge on foot and came out by the museum. A crossing on foot. «перешли» we crossed on foot / «переехали» we crossed by vehicle / «вышли» we went out / «вошли» we went in.",
    es: "En el paseo ___ el puente a pie y quedamos junto al museo. Un cruce a pie. «перешли» cruzamos a pie / «переехали» cruzamos en vehículo / «вышли» salimos / «вошли» entramos.",
    de: "An der Uferstraße ___ wir die Brücke zu Fuß und standen am Museum. Ein Übergang zu Fuß. «перешли» wir gingen hinüber / «переехали» wir fuhren hinüber / «вышли» wir gingen hinaus / «вошли» wir gingen hinein.",
  },
  "Автобус не ___ до общежития: пришлось выйти у рынка.": {
    en: "The bus did not ___ as far as the dorm: we had to get off at the market. Reaching a point by vehicle. «доехал» got there by vehicle / «дошёл» got there on foot / «ушёл» left / «вошёл» went in.",
    es: "El autobús no ___ hasta la residencia: hubo que bajar en el mercado. Llegar a un punto en vehículo. «доехал» llegó en vehículo / «дошёл» llegó a pie / «ушёл» se fue / «вошёл» entró.",
    de: "Der Bus ___ nicht bis zum Wohnheim: wir mussten am Markt aussteigen. Ein Ziel mit einem Fahrzeug erreichen. «доехал» kam mit dem Fahrzeug an / «дошёл» kam zu Fuß an / «ушёл» ging weg / «вошёл» ging hinein.",
  },
  "По дороге с пары она на пять минут ___ в аптеку за пластырем.": {
    en: "On the way from class she ___ the pharmacy for five minutes, for a plaster. A short stop inside. «зашла» she dropped in / «вышла» she went out / «уехала» she left by transport / «перешла» she crossed.",
    es: "De camino desde la clase ___ cinco minutos en la farmacia a por una tirita. Una parada breve dentro. «зашла» entró un momento / «вышла» salió / «уехала» se fue en transporte / «перешла» cruzó.",
    de: "Auf dem Weg von der Stunde ___ sie für fünf Minuten in die Apotheke, wegen eines Pflasters. Ein kurzer Abstecher hinein. «зашла» sie ging kurz hinein / «вышла» sie ging hinaus / «уехала» sie fuhr weg / «перешла» sie ging hinüber.",
  },
  "___ к схеме пересадки: отсюда её не видно.": {
    en: "___ to the interchange map: you can’t see it from here. Movement toward a point. «Подойдите» step up to it / «Отойдите» step away / «Уйдите» go away / «Войдите» come in.",
    es: "___ al esquema del transbordo: desde aquí no se ve. Movimiento hacia un punto. «Подойдите» acérquese / «Отойдите» apártese / «Уйдите» váyase / «Войдите» entre.",
    de: "___ an den Umsteigeplan: von hier sieht man ihn nicht. Bewegung auf einen Punkt zu. «Подойдите» treten Sie heran / «Отойдите» treten Sie weg / «Уйдите» gehen Sie weg / «Войдите» kommen Sie herein.",
  },
  "Завтра в восемь я ___ на экскурсию пешком от корпуса.": {
    en: "Tomorrow at eight I ___ on the excursion on foot, from the building. The start of the trip: perfective of пойти (to set off).",
    es: "Mañana a las ocho yo ___ a la excursión a pie, desde el edificio. El inicio del trayecto: perfectivo de пойти (ponerse en camino).",
    de: "Morgen um acht ___ ich zu Fuß vom Gebäude aus auf die Exkursion. Der Beginn des Wegs: perfektiv von пойти (losgehen).",
  },
  "Декан уже ___ из Москвы ночным поездом.": {
    en: "The dean has already ___ from Moscow on the night train. Arrival by transport: perfective of приехать (to arrive).",
    es: "El decano ya ___ de Moscú en el tren nocturno. Llegada en transporte: perfectivo de приехать (llegar).",
    de: "Der Dekan ist schon mit dem Nachtzug aus Moskau ___. Ankunft mit einem Fahrzeug: perfektiv von приехать (ankommen).",
  },
  "Секретарь ___ из кабинета и попросила подождать в коридоре.": {
    en: "The secretary ___ of the office and asked us to wait in the corridor. Motion outward: perfective of выйти (to go out), feminine.",
    es: "La secretaria ___ del despacho y pidió esperar en el pasillo. Movimiento hacia fuera: perfectivo de выйти (salir), femenino.",
    de: "Die Sekretärin ___ aus dem Zimmer und bat, auf dem Flur zu warten. Bewegung nach draußen: perfektiv von выйти (hinausgehen), feminin.",
  },
  "Мы ___ в читальный зал без пропусков, и нас остановили.": {
    en: "We ___ the reading room without passes, and they stopped us. Motion inward: perfective of войти (to go in), plural.",
    es: "Nosotros ___ en la sala de lectura sin pases, y nos detuvieron. Movimiento hacia dentro: perfectivo de войти (entrar), plural.",
    de: "Wir ___ ohne Ausweise in den Lesesaal, und man hielt uns an. Bewegung hinein: perfektiv von войти (hineingehen), Plural.",
  },
  "Туристы ___ улицу в неположенном месте.": {
    en: "The tourists ___ the street where they shouldn’t. Crossing on foot: perfective of перейти (to cross).",
    es: "Los turistas ___ la calle por donde no se debe. Cruce a pie: perfectivo de перейти (cruzar).",
    de: "Die Touristen ___ die Straße an einer verbotenen Stelle. Übergang zu Fuß: perfektiv von перейти (hinübergehen).",
  },
  "Вчера маршрутка ___ только до кольца, дальше мы шли пешком.": {
    en: "Yesterday the minibus ___ only as far as the loop; after that we walked. Reaching a point by vehicle: perfective of доехать (to get as far as), feminine.",
    es: "Ayer el minibús ___ solo hasta la rotonda; después fuimos a pie. Llegar a un punto en vehículo: perfectivo de доехать (llegar hasta), femenino.",
    de: "Gestern ___ der Kleinbus nur bis zur Schleife; danach gingen wir zu Fuß. Ein Ziel mit dem Fahrzeug erreichen: perfektiv von доехать (bis irgendwo hinfahren), feminin.",
  },
  "Я ___ в деканат на пять минут и вернулся на пару.": {
    en: "I ___ the dean’s office for five minutes and went back to class. A short visit: perfective of зайти (to drop in), masculine.",
    es: "Yo ___ en el decanato cinco minutos y volví a clase. Una visita breve: perfectivo de зайти (entrar un momento), masculino.",
    de: "Ich ___ für fünf Minuten ins Dekanat und ging zurück in die Stunde. Ein kurzer Abstecher: perfektiv von зайти (kurz hineingehen), maskulin.",
  },
  "___ от края платформы: поезд подходит.": {
    en: "___ from the edge of the platform: the train is coming in. Imperative, вы-form, perfective of отойти (to step away).",
    es: "___ del borde del andén: llega el tren. Imperativo de вы, perfectivo de отойти (apartarse).",
    de: "___ vom Rand des Bahnsteigs: der Zug kommt. Imperativ der Sie-Form, perfektiv von отойти (wegtreten).",
  },
  "После обеда я хожу в деканат и сразу вернусь.": {
    en: "Verb: one future trip is not a present habit. After lunch, the dean’s office, then coming straight back.",
    es: "Verbo: un trayecto futuro único no es un hábito en presente. Después de comer, el decanato, y enseguida de vuelta.",
    de: "Verb: ein einmaliger Weg in der Zukunft ist keine Gewohnheit im Präsens. Nach dem Essen ins Dekanat und gleich zurück.",
  },
  "Гости уже уехали и стоят у табло.": {
    en: "Prefix: they are standing by the board, so they are here, not gone. The guests.",
    es: "Prefijo: están junto al panel, así que están aquí, no se han ido. Los invitados.",
    de: "Präfix: sie stehen an der Tafel, also sind sie da, nicht weg. Die Gäste.",
  },
  "Она пришла с консультации раньше, её ещё нет в ректорате.": {
    en: "Prefix: she is not at the rector’s office yet, so she has left the consultation; she has not arrived there.",
    es: "Prefijo: todavía no está en el rectorado, así que salió de la tutoría; no ha llegado allí.",
    de: "Präfix: sie ist noch nicht im Rektorat, also hat sie die Sprechstunde verlassen; dort ist sie nicht angekommen.",
  },
  "Опоздавший стоит в коридоре, а преподаватель говорит: «Выйдите».": {
    en: "Prefix: the late student is out in the corridor, so the teacher is not telling him to leave the room.",
    es: "Prefijo: quien llegó tarde está fuera, en el pasillo, así que el profesor no le pide que salga del aula.",
    de: "Präfix: wer zu spät kommt, steht draußen auf dem Flur, also schickt die Lehrkraft ihn nicht aus dem Raum.",
  },
  "Мы переехали мост пешком и вышли к музею.": {
    en: "Verb: «пешком» (on foot) is not a crossing by vehicle. Then we came out by the museum.",
    es: "Verbo: «пешком» (a pie) no es un cruce en vehículo. Después salimos junto al museo.",
    de: "Verb: «пешком» (zu Fuß) ist kein Überqueren mit einem Fahrzeug. Danach kamen wir am Museum heraus.",
  },
  "Такси дошло до общежития за двадцать минут.": {
    en: "Verb: a taxi reaches a place by vehicle, not on foot. Twenty minutes to the dorm.",
    es: "Verbo: un taxi llega a un sitio en vehículo, no a pie. Veinte minutos hasta la residencia.",
    de: "Verb: ein Taxi erreicht einen Ort mit dem Fahrzeug, nicht zu Fuß. Zwanzig Minuten bis zum Wohnheim.",
  },
  "По дороге я вышел в аптеку и купил бинт.": {
    en: "Prefix: a short stop at the pharmacy on the way is not “went out”. I bought a bandage.",
    es: "Prefijo: una parada breve en la farmacia, de camino, no es «salió». Compré una venda.",
    de: "Präfix: ein kurzer Stopp in der Apotheke unterwegs ist nicht „ging hinaus“. Ich kaufte eine Binde.",
  },
  "Подойдите от края платформы.": {
    en: "Prefix: «от» (away from) does not match a verb of coming closer. The edge of the platform.",
    es: "Prefijo: «от» (desde, lejos de) no combina con un verbo de acercarse. El borde del andén.",
    de: "Präfix: «от» (weg von) passt nicht zu einem Verb des Herantretens. Der Rand des Bahnsteigs.",
  },
  "деканат / в / пойду / я / пары / После": {
    en: "Say that after class I will set off for the dean’s office.",
    es: "Di que después de la clase yo iré al decanato.",
    de: "Sag, dass ich nach der Stunde ins Dekanat gehe.",
  },
  "табло / у / стоят / и / приехали / уже / Гости": {
    en: "Say that the guests have already arrived and are standing by the board.",
    es: "Di que los invitados ya llegaron y están junto al panel.",
    de: "Sag, dass die Gäste schon angekommen sind und an der Tafel stehen.",
  },
  "рано / консультации / с / ушла / Она": {
    en: "Say that she left the consultation early.",
    es: "Di que ella salió pronto de la tutoría.",
    de: "Sag, dass sie früh von der Sprechstunde wegging.",
  },
  "дверь / закройте / и / Войдите": {
    en: "Tell someone to come in and close the door.",
    es: "Di que entren y cierren la puerta.",
    de: "Sag, dass man hereinkommen und die Tür schließen soll.",
  },
  "пешком / мост / перешли / Мы": {
    en: "Say that we crossed the bridge on foot.",
    es: "Di que nosotros cruzamos el puente a pie.",
    de: "Sag, dass wir die Brücke zu Fuß überquert haben.",
  },
  "общежития / до / доехал / не / Автобус": {
    en: "Say that the bus did not reach the dorm.",
    es: "Di que el autobús no llegó hasta la residencia.",
    de: "Sag, dass der Bus nicht bis zum Wohnheim gefahren ist.",
  },
  "аптеку / в / зашла / она / дороге / По": {
    en: "Say that on the way she dropped into the pharmacy.",
    es: "Di que de camino ella entró un momento en la farmacia.",
    de: "Sag, dass sie unterwegs kurz in die Apotheke ging.",
  },
  "платформы / края / от / Отойдите": {
    en: "Tell someone to step back from the edge of the platform.",
    es: "Di que se aparten del borde del andén.",
    de: "Sag, dass man vom Rand des Bahnsteigs zurücktreten soll.",
  },

  // Ch. 20 — Complex sentences
  "Я остался в читальном зале, ___ в общежитии отключили свет.": {
    en: "I stayed in the reading room, ___ they turned the lights off in the dorm. A reason. «потому что» because / «чтобы» in order to / «который» which / «если» if.",
    es: "Me quedé en la sala de lectura, ___ en la residencia cortaron la luz. Una causa. «потому что» porque / «чтобы» para que / «который» que, el cual / «если» si.",
    de: "Ich blieb im Lesesaal, ___ im Wohnheim das Licht ausging. Ein Grund. «потому что» weil / «чтобы» damit / «который» der, welcher / «если» wenn.",
  },
  "Куратор повторил правило, ___ все успели записать пример.": {
    en: "The tutor repeated the rule ___ everyone had time to write down the example. A purpose. «чтобы» so that / «потому что» because / «который» which / «если» if.",
    es: "El tutor repitió la regla ___ todos alcanzaran a anotar el ejemplo. Una finalidad. «чтобы» para que / «потому что» porque / «который» que / «если» si.",
    de: "Der Betreuer wiederholte die Regel, ___ alle Zeit hatten, das Beispiel aufzuschreiben. Ein Zweck. «чтобы» damit / «потому что» weil / «который» der / «если» wenn.",
  },
  "Это архив, ___ хранят карты порта.": {
    en: "This is the archive ___ they keep the maps of the port. A place. «в котором» in which / «который» which / «которому» to which / «которым» with which.",
    es: "Este es el archivo ___ guardan los mapas del puerto. Un lugar. «в котором» en el cual / «который» que / «которому» al cual / «которым» con el cual.",
    de: "Das ist das Archiv, ___ man die Karten des Hafens aufbewahrt. Ein Ort. «в котором» in dem / «который» das / «которому» dem / «которым» mit dem.",
  },
  "___ будет билет, я поеду в Псков на выходные.": {
    en: "___ there is a ticket, I will go to Pskov for the weekend. A condition. «Если» if / «Чтобы» in order to / «Потому что» because / «Который» which.",
    es: "___ hay billete, iré a Pskov el fin de semana. Una condición. «Если» si / «Чтобы» para / «Потому что» porque / «Который» que.",
    de: "___ es eine Fahrkarte gibt, fahre ich am Wochenende nach Pskow. Eine Bedingung. «Если» wenn / «Чтобы» damit / «Потому что» weil / «Который» der.",
  },
  "В архиве не было мест, ___ мы работали в коридоре.": {
    en: "There were no seats in the archive, ___ we worked in the corridor. A consequence. «поэтому» so / «потому что» because / «чтобы» in order to / «который» which.",
    es: "En el archivo no había sitio, ___ trabajamos en el pasillo. Una consecuencia. «поэтому» por eso / «потому что» porque / «чтобы» para / «который» que.",
    de: "Im Archiv gab es keine Plätze, ___ wir auf dem Flur arbeiteten. Eine Folge. «поэтому» deshalb / «потому что» weil / «чтобы» damit / «который» der.",
  },
  "Студентка, ___ сдала черновик вчера, сегодня болеет.": {
    en: "The female student ___ handed in the draft yesterday is ill today. «который» must match студентка. «которая» which (feminine) / «который» which (masculine) / «которое» which (neuter) / «которым» with which.",
    es: "La estudiante ___ entregó el borrador ayer hoy está enferma. «который» tiene que concordar con студентка. «которая» que (femenino) / «который» que (masculino) / «которое» que (neutro) / «которым» con el cual.",
    de: "Die Studentin, ___ gestern den Entwurf abgegeben hat, ist heute krank. «который» muss zu студентка passen. «которая» die (feminin) / «который» der (maskulin) / «которое» das (neutrum) / «которым» mit dem.",
  },
  "Я позвоню вам, ___ появится место в группе.": {
    en: "I will call you ___ a place appears in the group. A condition. «если» if / «чтобы» in order to / «который» which / «поэтому» so.",
    es: "Les llamaré ___ aparezca un sitio en el grupo. Una condición. «если» si / «чтобы» para / «который» que / «поэтому» por eso.",
    de: "Ich rufe Sie an, ___ ein Platz in der Gruppe frei wird. Eine Bedingung. «если» wenn / «чтобы» damit / «который» der / «поэтому» deshalb.",
  },
  "Нам нужен преподаватель, ___ можно задать вопрос после пары.": {
    en: "We need a teacher ___ one can ask a question after class. The person you ask is dative. «которому» to whom / «который» who / «которого» whom / «которым» with whom.",
    es: "Necesitamos un profesor al ___ se le pueda hacer una pregunta después de clase. La persona a quien preguntas va en dativo. «которому» a quien / «который» que / «которого» a quien (complemento) / «которым» con quien.",
    de: "Wir brauchen eine Lehrkraft, ___ man nach der Stunde eine Frage stellen kann. Die Person, die man fragt, steht im Dativ. «которому» dem / «который» der / «которого» den / «которым» mit dem.",
  },
  "Мы опоздали на регистрацию, ___ касса открылась позже.": {
    en: "We were late for registration, ___ the ticket window opened later. The conjunction of reason.",
    es: "Llegamos tarde al registro, ___ la taquilla abrió más tarde. La conjunción de causa.",
    de: "Wir kamen zu spät zur Anmeldung, ___ der Schalter später öffnete. Die Konjunktion des Grundes.",
  },
  "Она приехала в Ярославль, ___ собирать материал для курсовой.": {
    en: "She came to Yaroslavl ___ collect material for her term paper. Purpose before an infinitive.",
    es: "Ella llegó a Yaroslavl ___ reunir material para el trabajo de curso. Finalidad delante de un infinitivo.",
    de: "Sie kam nach Jaroslawl, ___ Material für die Hausarbeit zu sammeln. Zweck vor einem Infinitiv.",
  },
  "Журнал, ___ ты взял вчера, нужно вернуть до пятницы.": {
    en: "The journal ___ you took yesterday has to be back by Friday. The relative pronoun agrees with «журнал» (journal): masculine, and the object is inanimate.",
    es: "La revista ___ tomaste ayer hay que devolverla antes del viernes. El relativo concuerda con «журнал» (revista): masculino, y el objeto es inanimado.",
    de: "Die Zeitschrift, ___ du gestern genommen hast, muss bis Freitag zurück. Das Relativpronomen richtet sich nach «журнал» (Zeitschrift): maskulin, und das Objekt ist unbelebt.",
  },
  "___ не будет дождя, экскурсия по крепости состоится.": {
    en: "___ there is no rain, the tour of the fortress will take place. The conjunction of condition; the если-clause uses the future.",
    es: "___ no llueve, la excursión por la fortaleza se hará. La conjunción de condición; la oración con если va en futuro.",
    de: "___ es keinen Regen gibt, findet die Führung durch die Festung statt. Die Konjunktion der Bedingung; der если-Satz steht im Futur.",
  },
  "Анкету вернули, ___ я переписываю её сегодня.": {
    en: "They returned the form, ___ I am rewriting it today. The conjunction of consequence.",
    es: "Devolvieron el formulario, ___ hoy lo vuelvo a escribir. La conjunción de consecuencia.",
    de: "Das Formular kam zurück, ___ ich es heute neu schreibe. Die Konjunktion der Folge.",
  },
  "Общежитие, ___ мы живём, стоит у парка.": {
    en: "The dorm ___ we live stands by the park. «в» plus the prepositional of «который».",
    es: "La residencia ___ vivimos está junto al parque. «в» más el preposicional de «который».",
    de: "Das Wohnheim, ___ wir wohnen, steht am Park. «в» plus der Präpositional von «который».",
  },
  "Вот правило, ___ мы вчера разобрали без примеров.": {
    en: "Here is the rule ___ we went through yesterday without examples. Neuter «который», because «правило» (rule) is neuter.",
    es: "Aquí está la regla ___ ayer vimos sin ejemplos. «который» en neutro, porque «правило» (regla) es neutro.",
    de: "Hier ist die Regel, ___ wir gestern ohne Beispiele durchgenommen haben. Neutrum von «который», weil «правило» (Regel) Neutrum ist.",
  },
  "Сосед, ___ я отдал конспект, уехал на практику.": {
    en: "The neighbour ___ I gave the notes has left for the placement. Dative of «который»: the person you give something to.",
    es: "El vecino ___ le di los apuntes se fue a las prácticas. Dativo de «который»: la persona a quien das algo.",
    de: "Der Nachbar, ___ ich die Mitschrift gegeben habe, ist zum Praktikum gefahren. Dativ von «который»: die Person, der man etwas gibt.",
  },
  "Я опоздал чтобы автобус стоял в пробке.": {
    en: "Conjunction: this is a reason — the bus was stuck in traffic — not a purpose. I was late.",
    es: "Conjunción: esto es una causa — el autobús estaba en un atasco —, no una finalidad. Llegué tarde.",
    de: "Konjunktion: das ist ein Grund — der Bus stand im Stau —, kein Zweck. Ich kam zu spät.",
  },
  "Она открыла словарь, потому что найти слово.": {
    en: "Conjunction: an infinitive of purpose (to find a word) is not a reason. She opened the dictionary.",
    es: "Conjunción: un infinitivo de finalidad (encontrar una palabra) no es una causa. Abrió el diccionario.",
    de: "Konjunktion: ein Infinitiv des Zwecks (ein Wort finden) ist kein Grund. Sie schlug das Wörterbuch auf.",
  },
  "Это журнал, которая нужен для доклада.": {
    en: "Gender: the relative pronoun is feminine, but «журнал» (journal) is masculine. It is needed for the talk.",
    es: "Género: el relativo está en femenino, pero «журнал» (revista) es masculino. Hace falta para la exposición.",
    de: "Genus: das Relativpronomen steht im Femininum, «журнал» (Zeitschrift) aber ist maskulin. Sie wird für den Vortrag gebraucht.",
  },
  "Правило, который мы учили вчера, снова попалось на зачёте.": {
    en: "Gender: «который» does not match «правило» (rule, neuter). It came up again on the test.",
    es: "Género: «который» no concuerda con «правило» (regla, neutro). Volvió a salir en el examen.",
    de: "Genus: «который» passt nicht zu «правило» (Regel, Neutrum). Sie kam in der Prüfung wieder vor.",
  },
  "Общежитие, в который мы живём, далеко от корпуса.": {
    en: "Case: «в» for “the dorm where we live” needs the prepositional, not this form. It is far from the building.",
    es: "Caso: «в» para «la residencia donde vivimos» pide preposicional, no esta forma. Está lejos del edificio.",
    de: "Kasus: «в» für „das Wohnheim, in dem wir wohnen“ braucht den Präpositional, nicht diese Form. Es ist weit vom Gebäude.",
  },
  "Сосед, которого я отдал ключ, ещё не вернулся.": {
    en: "Case: the person you give a key to needs the dative of «который», not the genitive or accusative. He has not come back.",
    es: "Caso: la persona a quien das una llave necesita el dativo de «который», no el genitivo ni el acusativo. Aún no ha vuelto.",
    de: "Kasus: die Person, der du einen Schlüssel gibst, braucht den Dativ von «который», nicht Genitiv oder Akkusativ. Er ist noch nicht zurück.",
  },
  "Экскурсия состоится, если не будет дождь.": {
    en: "Case: after «не будет» the noun is not genitive. The tour will take place if there is no rain.",
    es: "Caso: tras «не будет» el sustantivo no está en genitivo. La excursión se hará si no llueve.",
    de: "Kasus: nach «не будет» steht das Nomen nicht im Genitiv. Die Führung findet statt, wenn es keinen Regen gibt.",
  },
  "Нам нужен преподаватель, который можно задать вопрос.": {
    en: "Case: “a teacher one can ask” needs the dative of «который», not the subject form.",
    es: "Caso: «un profesor a quien se puede preguntar» necesita el dativo de «который», no la forma de sujeto.",
    de: "Kasus: „eine Lehrkraft, der man eine Frage stellen kann“ braucht den Dativ von «который», nicht die Subjektform.",
  },
  "пробке / в / стоял / автобус / что / потому / опоздал / Я": {
    en: "Say that I was late because the bus was stuck in traffic.",
    es: "Di que llegué tarde porque el autobús estaba en un atasco.",
    de: "Sag, dass ich zu spät kam, weil der Bus im Stau stand.",
  },
  "учиться / чтобы / Ярославль / в / приехала / Она": {
    en: "Say that she came to Yaroslavl in order to study.",
    es: "Di que ella llegó a Yaroslavl para estudiar.",
    de: "Sag, dass sie nach Jaroslawl kam, um zu studieren.",
  },
  "помогает / мне / который / курс / Это": {
    en: "Say that this is a course that helps you.",
    es: "Di que este es un curso que te ayuda.",
    de: "Sag, dass das ein Kurs ist, der dir hilft.",
  },
  "позвоню / я / время / будет / Если": {
    en: "Say that if there is time, you will call.",
    es: "Di que, si hay tiempo, llamarás.",
    de: "Sag, dass du anrufst, wenn Zeit ist.",
  },
  "ушли / мы / поэтому / шумно / Было": {
    en: "Say that it was noisy, so we left.",
    es: "Di que había ruido, así que nos fuimos.",
    de: "Sag, dass es laut war, deshalb gingen wir weg.",
  },
  "сложное / учили / мы / которое / Правило": {
    en: "Say that the rule we studied is difficult.",
    es: "Di que la regla que estudiamos es difícil.",
    de: "Sag, dass die Regel, die wir gelernt haben, schwierig ist.",
  },
  "новое / живём / мы / котором / в / Общежитие": {
    en: "Say that the dorm we live in is new.",
    es: "Di que la residencia en la que vivimos es nueva.",
    de: "Sag, dass das Wohnheim, in dem wir wohnen, neu ist.",
  },
  "уехал / ключ / отдал / я / которому / Сосед": {
    en: "Say that the neighbour you gave the key to has left.",
    es: "Di que el vecino a quien diste la llave se fue.",
    de: "Sag, dass der Nachbar, dem du den Schlüssel gegeben hast, weggefahren ist.",
  },

  // Ch. 21 — Holding a text together
  "___ я сверил даты в архиве и только потом пошёл в музей.": {
    en: "___ I checked the dates in the archive and only afterwards went to the museum. The start of a sequence. «Сначала» first / «В итоге» in the end / «Например» for example / «Кроме того» besides.",
    es: "___ cotejé las fechas en el archivo y solo después fui al museo. El comienzo de una secuencia. «Сначала» primero / «В итоге» al final / «Например» por ejemplo / «Кроме того» además.",
    de: "___ habe ich die Daten im Archiv geprüft und bin erst danach ins Museum gegangen. Der Anfang einer Folge. «Сначала» zuerst / «В итоге» am Ende / «Например» zum Beispiel / «Кроме того» außerdem.",
  },
  "Расписание сдвинули, и библиотека закрылась раньше. ___ я не сдал конспект в срок.": {
    en: "They shifted the timetable, and the library closed early. ___ I did not hand in the notes on time. The result of two causes. «В итоге» in the end / «Сначала» first / «Например» for example / «Кроме того» besides.",
    es: "Cambiaron el horario y la biblioteca cerró antes. ___ no entregué los apuntes a tiempo. El resultado de dos causas. «В итоге» al final / «Сначала» primero / «Например» por ejemplo / «Кроме того» además.",
    de: "Den Stundenplan hat man verschoben, und die Bibliothek machte früher zu. ___ habe ich die Mitschrift nicht rechtzeitig abgegeben. Das Ergebnis zweier Ursachen. «В итоге» am Ende / «Сначала» zuerst / «Например» zum Beispiel / «Кроме того» außerdem.",
  },
  "С одной стороны, конспект короткий, ___ без примеров он бесполезен.": {
    en: "On the one hand the notes are short, ___ without examples they are useless. The other half of a contrast. «с другой стороны» on the other hand / «например» for example / «сначала» first / «в итоге» in the end.",
    es: "Por un lado los apuntes son cortos, ___ sin ejemplos no sirven. La otra mitad de un contraste. «с другой стороны» por otro lado / «например» por ejemplo / «сначала» primero / «в итоге» al final.",
    de: "Einerseits ist die Mitschrift kurz, ___ ohne Beispiele ist sie nutzlos. Die andere Hälfte eines Gegensatzes. «с другой стороны» andererseits / «например» zum Beispiel / «сначала» zuerst / «в итоге» am Ende.",
  },
  "Нам нужны были источники, ___, карта порта и отчёт за 1910 год.": {
    en: "We needed sources, ___, a map of the port and a report from 1910. An example. «например» for example / «сначала» first / «в итоге» in the end / «наконец» at last.",
    es: "Necesitábamos fuentes, ___, un mapa del puerto y un informe de 1910. Un ejemplo. «например» por ejemplo / «сначала» primero / «в итоге» al final / «наконец» por fin.",
    de: "Wir brauchten Quellen, ___, eine Karte des Hafens und einen Bericht von 1910. Ein Beispiel. «например» zum Beispiel / «сначала» zuerst / «в итоге» am Ende / «наконец» endlich.",
  },
  "Я переписал введение три раза. ___ формулировка стала точнее.": {
    en: "I rewrote the introduction three times. ___ the wording became more precise. The end of a long attempt. «Наконец» at last / «Сначала» first / «Например» for example / «Кроме того» besides.",
    es: "Reescribí la introducción tres veces. ___ la formulación quedó más precisa. El final de un intento largo. «Наконец» por fin / «Сначала» primero / «Например» por ejemplo / «Кроме того» además.",
    de: "Ich habe die Einleitung dreimal umgeschrieben. ___ wurde die Formulierung genauer. Das Ende eines langen Versuchs. «Наконец» endlich / «Сначала» zuerst / «Например» zum Beispiel / «Кроме того» außerdem.",
  },
  "Сначала группа сдала проект, ___ куратор открыл обсуждение.": {
    en: "First the group handed in the project, ___ the tutor opened the discussion. The next step, not the final result. «затем» then / «в итоге» in the end / «например» for example / «наконец» at last.",
    es: "Primero el grupo entregó el proyecto, ___ el tutor abrió el debate. El paso siguiente, no el resultado final. «затем» luego / «в итоге» al final / «например» por ejemplo / «наконец» por fin.",
    de: "Zuerst gab die Gruppe das Projekt ab, ___ eröffnete der Betreuer die Besprechung. Der nächste Schritt, nicht das Endergebnis. «затем» dann / «в итоге» am Ende / «например» zum Beispiel / «наконец» endlich.",
  },
  "В отчёте ошибка в таблице. ___, нет абзаца с выводами.": {
    en: "In the report there is an error in the table. ___, there is no paragraph with conclusions. A second problem, added. «Кроме того» besides / «Например» for example / «Сначала» first / «В итоге» in the end.",
    es: "En el informe hay un error en la tabla. ___, falta el párrafo de conclusiones. Un segundo problema, añadido. «Кроме того» además / «Например» por ejemplo / «Сначала» primero / «В итоге» al final.",
    de: "Im Bericht ist ein Fehler in der Tabelle. ___, es fehlt der Absatz mit den Schlussfolgerungen. Ein zweites Problem, dazugenommen. «Кроме того» außerdem / «Например» zum Beispiel / «Сначала» zuerst / «В итоге» am Ende.",
  },
  "Мы собрали анкеты. ___ посчитали ответы и только потом написали вывод.": {
    en: "We collected the forms. ___ we counted the answers and only afterwards wrote the conclusion. A middle step. «После этого» after that / «Например» for example / «В итоге» in the end / «С одной стороны» on the one hand.",
    es: "Recogimos los formularios. ___ contamos las respuestas y solo después escribimos la conclusión. Un paso intermedio. «После этого» después de eso / «Например» por ejemplo / «В итоге» al final / «С одной стороны» por un lado.",
    de: "Wir haben die Fragebögen eingesammelt. ___ zählten wir die Antworten und schrieben erst danach die Schlussfolgerung. Ein mittlerer Schritt. «После этого» danach / «Например» zum Beispiel / «В итоге» am Ende / «С одной стороны» einerseits.",
  },
  "___ я проверил источники, затем написал черновик.": {
    en: "___ I checked the sources, then wrote a draft. The marker that opens a sequence.",
    es: "___ revisé las fuentes y luego escribí un borrador. El marcador que abre una secuencia.",
    de: "___ habe ich die Quellen geprüft, dann einen Entwurf geschrieben. Der Marker, der eine Folge öffnet.",
  },
  "Черновик вернули дважды. ___, в четверг я сдал его без замечаний.": {
    en: "The draft was sent back twice. ___, on Thursday I handed it in with no comments. The end of several attempts.",
    es: "Devolvieron el borrador dos veces. ___, el jueves lo entregué sin observaciones. El final de varios intentos.",
    de: "Der Entwurf kam zweimal zurück. ___, am Donnerstag gab ich ihn ohne Bemerkungen ab. Das Ende mehrerer Versuche.",
  },
  "Карта была неточной, и гид опоздал. ___ группу вернули в общежитие.": {
    en: "The map was inaccurate, and the guide was late. ___ they sent the group back to the dorm. The result of two causes.",
    es: "El mapa era impreciso y el guía llegó tarde. ___ devolvieron al grupo a la residencia. El resultado de dos causas.",
    de: "Die Karte war ungenau, und der Führer kam zu spät. ___ schickte man die Gruppe ins Wohnheim zurück. Das Ergebnis zweier Ursachen.",
  },
  "Возьмите документы, ___, паспорт и справку из общежития.": {
    en: "Take the documents, ___, a passport and a note from the dorm. The marker of an example before a list.",
    es: "Lleven los documentos, ___, el pasaporte y una constancia de la residencia. El marcador de un ejemplo antes de una lista.",
    de: "Nehmen Sie die Dokumente mit, ___, den Pass und eine Bescheinigung aus dem Wohnheim. Der Marker eines Beispiels vor einer Liste.",
  },
  "Семинар был долгим. ___, в аудитории не работал проектор.": {
    en: "The seminar was long. ___, the projector in the room did not work. Adding a separate problem.",
    es: "El seminario fue largo. ___, en el aula no funcionaba el proyector. Se añade un problema distinto.",
    de: "Das Seminar war lang. ___, im Hörsaal funktionierte der Projektor nicht. Ein weiteres, eigenes Problem.",
  },
  "С одной стороны, практика полезная, ___ она занимает все выходные.": {
    en: "On the one hand the placement is useful, ___ it takes the whole weekend. The second half of the contrast.",
    es: "Por un lado las prácticas son útiles, ___ ocupan todo el fin de semana. La segunda mitad del contraste.",
    de: "Einerseits ist das Praktikum nützlich, ___ es nimmt das ganze Wochenende ein. Die zweite Hälfte des Gegensatzes.",
  },
  "Сначала мы собрали анкеты, ___ сделали расчёт, и только в конце написали вывод.": {
    en: "First we collected the forms, ___ we did the calculation, and only at the end we wrote the conclusion. The middle step.",
    es: "Primero recogimos los formularios, ___ hicimos el cálculo y solo al final escribimos la conclusión. El paso de en medio.",
    de: "Zuerst sammelten wir die Fragebögen, ___ rechneten wir, und erst am Ende schrieben wir die Schlussfolgerung. Der mittlere Schritt.",
  },
  "Я закончил введение. ___ перешёл к методам.": {
    en: "I finished the introduction. ___ I moved on to the methods. The step right after a finished action.",
    es: "Terminé la introducción. ___ pasé a los métodos. El paso justo después de una acción acabada.",
    de: "Ich habe die Einleitung fertig. ___ bin ich zu den Methoden übergegangen. Der Schritt direkt nach einer abgeschlossenen Handlung.",
  },
  "В итоге я открыл каталог, потом нашёл карту и только затем сделал вывод.": {
    en: "Marker: this is the start of a sequence, not the final result. Opening the catalogue, then the map, and only afterwards a conclusion.",
    es: "Marcador: esto es el comienzo de una secuencia, no el resultado final. Abrir el catálogo, luego el mapa y solo después una conclusión.",
    de: "Marker: das ist der Anfang einer Folge, nicht das Endergebnis. Den Katalog öffnen, dann die Karte, und erst danach eine Schlussfolgerung.",
  },
  "Гид не приехал, музей закрыли. Сначала экскурсию отменили.": {
    en: "Marker of result: two causes, and then the tour was cancelled. The word that opens the line does not introduce a result.",
    es: "Marcador de resultado: dos causas, y después cancelaron la excursión. La palabra que abre la frase no introduce un resultado.",
    de: "Marker des Ergebnisses: zwei Ursachen, und dann wurde die Führung abgesagt. Das Wort am Anfang führt kein Ergebnis ein.",
  },
  "Нужны документы, в итоге паспорт и студенческий.": {
    en: "Marker: a passport and a student card are an example of the documents, not a result.",
    es: "Marcador: el pasaporte y el carné de estudiante son un ejemplo de los documentos, no un resultado.",
    de: "Marker: Pass und Studierendenausweis sind ein Beispiel für die Dokumente, kein Ergebnis.",
  },
  "В файле нет титульного листа. Например, нет и списка литературы.": {
    en: "Marker: a missing bibliography is a second problem, not an example of the missing title page.",
    es: "Marcador: que falte la bibliografía es un segundo problema, no un ejemplo de que falte la portada.",
    de: "Marker: ein fehlendes Literaturverzeichnis ist ein zweites Problem, kein Beispiel für das fehlende Titelblatt.",
  },
  "Я исправлял таблицу весь вечер. Сначала цифры сошлись.": {
    en: "Marker: the figures agreeing is the end of a long job, not its start. I worked on the table all evening.",
    es: "Marcador: que las cifras cuadren es el final de un trabajo largo, no su comienzo. Corregí la tabla toda la tarde.",
    de: "Marker: dass die Zahlen zusammenpassen, ist das Ende einer langen Arbeit, nicht ihr Anfang. Ich habe den Abend an der Tabelle gesessen.",
  },
  "С одной стороны, дорога долгая, например общежитие тёплое.": {
    en: "Contrast: a warm dorm is the other side, not an example. The road is long.",
    es: "Contraste: una residencia cálida es el otro lado, no un ejemplo. El camino es largo.",
    de: "Gegensatz: ein warmes Wohnheim ist die andere Seite, kein Beispiel. Der Weg ist lang.",
  },
  "Сначала мы сдали тест, в итоге преподаватель поздоровался.": {
    en: "Marker: the teacher greeting them is the next step, not a result of handing in the test. First we handed in the test.",
    es: "Marcador: que el profesor salude es el paso siguiente, no un resultado de entregar el examen. Primero entregamos el examen.",
    de: "Marker: dass die Lehrkraft grüßt, ist der nächste Schritt, kein Ergebnis der Testabgabe. Zuerst haben wir den Test abgegeben.",
  },
  "Кроме того я прочитал введение, потом методы и в конце выводы.": {
    en: "Marker: introduction, then methods, then conclusions is the start of reading, not an extra problem.",
    es: "Marcador: introducción, luego métodos y al final conclusiones es el comienzo de la lectura, no un problema añadido.",
    de: "Marker: Einleitung, dann Methoden, am Ende Schlussfolgerungen ist der Anfang des Lesens, kein zusätzliches Problem.",
  },
  "черновик / написал / затем / источники / проверил / я / Сначала": {
    en: "Say that first you checked the sources, then you wrote a draft.",
    es: "Di que primero revisaste las fuentes y luego escribiste un borrador.",
    de: "Sag, dass du zuerst die Quellen geprüft und dann einen Entwurf geschrieben hast.",
  },
  "сошлись / таблице / в / цифры / Наконец": {
    en: "Say that at last the figures in the table agreed.",
    es: "Di que por fin las cifras de la tabla cuadraron.",
    de: "Sag, dass die Zahlen in der Tabelle endlich zusammenpassten.",
  },
  "отменили / экскурсию / итоге / В": {
    en: "Say that in the end they cancelled the excursion.",
    es: "Di que al final cancelaron la excursión.",
    de: "Sag, dass man die Führung am Ende abgesagt hat.",
  },
  "паспорт / например / документы / Возьмите": {
    en: "Tell someone to take the documents, for example a passport.",
    es: "Di que lleven los documentos, por ejemplo el pasaporte.",
    de: "Sag, dass man die Dokumente mitnehmen soll, zum Beispiel den Pass.",
  },
  "времени / хватило / не / того / Кроме": {
    en: "Say that, besides, there was not enough time.",
    es: "Di que, además, no hubo tiempo suficiente.",
    de: "Sag, dass außerdem die Zeit nicht gereicht hat.",
  },
  "полезная / практика / стороны / одной / С": {
    en: "Say that, on the one hand, the placement is useful.",
    es: "Di que, por un lado, las prácticas son útiles.",
    de: "Sag, dass das Praktikum einerseits nützlich ist.",
  },
  "ответы / посчитали / мы / этого / После": {
    en: "Say that after that you counted the answers.",
    es: "Di que después de eso contasteis las respuestas.",
    de: "Sag, dass ihr danach die Antworten gezählt habt.",
  },
  "долгая / дорога / стороны / другой / С": {
    en: "Say that, on the other hand, the road is long.",
    es: "Di que, por otro lado, el camino es largo.",
    de: "Sag, dass der Weg andererseits lang ist.",
  },

  // Ch. 22 — Academic and social talk
  "___, срок курсовой лучше сдвинуть: половина группы на практике.": {
    en: "___, it is better to move the term-paper deadline: half the group is on placement. A frame for an opinion. «По-моему» in my opinion / «Потому что» because / «Войдите» come in / «Который» which.",
    es: "___, conviene mover el plazo del trabajo de curso: la mitad del grupo está en prácticas. Un marco de opinión. «По-моему» en mi opinión / «Потому что» porque / «Войдите» entre / «Который» que.",
    de: "___, den Abgabetermin der Hausarbeit sollte man verschieben: die Hälfte der Gruppe ist im Praktikum. Ein Rahmen für eine Meinung. «По-моему» meiner Meinung nach / «Потому что» weil / «Войдите» kommen Sie herein / «Который» der.",
  },
  "Омар ___ с замечанием, но пример в тексте всё-таки нужен.": {
    en: "Omar ___ with the comment, but an example in the text is still needed. Short form, masculine. «согласен» agrees (short) / «согласный» agreeing (long adjective) / «согласие» agreement (noun) / «согласным» instrumental of the long form.",
    es: "Omar ___ con la observación, pero el ejemplo en el texto sigue haciendo falta. Forma corta, masculino. «согласен» de acuerdo (corta) / «согласный» que está de acuerdo (adjetivo largo) / «согласие» el acuerdo (sustantivo) / «согласным» instrumental de la forma larga.",
    de: "Omar ist ___ mit der Anmerkung, aber ein Beispiel im Text braucht man trotzdem. Kurzform, maskulin. «согласен» einverstanden (kurz) / «согласный» einverstanden (langes Adjektiv) / «согласие» die Zustimmung (Nomen) / «согласным» Instrumental der Langform.",
  },
  "___, где принимают справки для общежития?": {
    en: "___, where do they accept the certificates for the dorm? A polite request. «Подскажите» please tell me (вы) / «Согласен» I agree / «По-моему» in my opinion / «Чтобы» in order to.",
    es: "___, ¿dónde aceptan las constancias para la residencia? Una petición cortés. «Подскажите» dígame (вы) / «Согласен» de acuerdo / «По-моему» en mi opinión / «Чтобы» para.",
    de: "___, wo nimmt man die Bescheinigungen fürs Wohnheim an? Eine höfliche Bitte. «Подскажите» sagen Sie mir bitte / «Согласен» einverstanden / «По-моему» meiner Meinung nach / «Чтобы» damit.",
  },
  "Я не понял этот шаг. ___, пожалуйста, его ещё раз, на примере.": {
    en: "I didn’t understand this step. ___, please, once more, with an example. Polite address to a teacher. «Объясните» explain (вы) / «Объяснил» he explained / «Объяснять» to explain (process) / «Объяснение» an explanation (noun).",
    es: "No entendí este paso. ___, por favor, una vez más, con un ejemplo. Trato cortés al profesor. «Объясните» explique (вы) / «Объяснил» explicó / «Объяснять» explicar (proceso) / «Объяснение» una explicación (sustantivo).",
    de: "Ich habe diesen Schritt nicht verstanden. ___, bitte, noch einmal, an einem Beispiel. Höfliche Anrede an die Lehrkraft. «Объясните» erklären Sie / «Объяснил» er erklärte / «Объяснять» erklären (Verlauf) / «Объяснение» eine Erklärung (Nomen).",
  },
  "Можно ___ вопрос по таблице, прежде чем вы продолжите?": {
    en: "May I ___ a question about the table before you go on? After можно, an infinitive. «задать» to ask (infinitive) / «задал» he asked / «задаю» I ask / «заданный» asked (participle).",
    es: "¿Se puede ___ una pregunta sobre la tabla antes de que continúe? Tras можно, un infinitivo. «задать» hacer (infinitivo) / «задал» hizo / «задаю» hago / «заданный» hecho (participio).",
    de: "Darf ich eine Frage zur Tabelle ___, bevor Sie weitermachen? Nach можно ein Infinitiv. «задать» stellen (Infinitiv) / «задал» stellte / «задаю» ich stelle / «заданный» gestellt (Partizip).",
  },
  "Мне ___, что вывод шире, чем сами данные.": {
    en: "It ___ to me that the conclusion is broader than the data themselves. An impersonal opinion. «кажется» it seems / «кажусь» I seem / «кажетесь» you seem / «казаться» to seem.",
    es: "Me ___ que la conclusión es más amplia que los propios datos. Una opinión impersonal. «кажется» parece / «кажусь» me parezco / «кажетесь» usted parece / «казаться» parecer.",
    de: "Mir ___, dass die Schlussfolgerung weiter geht als die Daten selbst. Eine unpersönliche Meinung. «кажется» es scheint / «кажусь» ich scheine / «кажетесь» Sie scheinen / «казаться» scheinen.",
  },
  "Я не согласен с оценкой, ___ в расчёте пропущен один шаг.": {
    en: "I don’t agree with the mark, ___ one step is missing in the calculation. A reason. «потому что» because / «чтобы» in order to / «который» which / «если» if.",
    es: "No estoy de acuerdo con la nota, ___ en el cálculo falta un paso. Una causa. «потому что» porque / «чтобы» para / «который» que / «если» si.",
    de: "Ich bin mit der Note nicht einverstanden, ___ in der Rechnung ein Schritt fehlt. Ein Grund. «потому что» weil / «чтобы» damit / «который» der / «если» wenn.",
  },
  "Вы не могли бы ___ источник этого абзаца?": {
    en: "Could you ___ the source of this paragraph? After «не могли бы», an infinitive. «указать» to point out / «укажите» point it out (imperative) / «указал» he pointed it out / «указанный» pointed out (participle).",
    es: "¿Podría ___ la fuente de este párrafo? Tras «не могли бы», un infinitivo. «указать» indicar / «укажите» indíquelo (imperativo) / «указал» indicó / «указанный» indicado (participio).",
    de: "Könnten Sie die Quelle dieses Absatzes ___? Nach «не могли бы» ein Infinitiv. «указать» angeben / «укажите» geben Sie an (Imperativ) / «указал» gab an / «указанный» angegeben (Partizip).",
  },
  "___, этот пример не доказывает тезис, а только иллюстрирует его.": {
    en: "___, this example does not prove the thesis; it only illustrates it. A frame for “in my opinion”, not a conjunction.",
    es: "___, este ejemplo no demuestra la tesis; solo la ilustra. Un marco de «en mi opinión», no una conjunción.",
    de: "___, dieses Beispiel beweist die These nicht; es veranschaulicht sie nur. Ein Rahmen für „meiner Meinung nach“, keine Konjunktion.",
  },
  "Я ___ с вами: срок действительно короткий.": {
    en: "I ___ with you: the deadline really is short. The short form of “agree”, matching the speaker.",
    es: "Yo ___ con usted: el plazo de verdad es corto. La forma corta de «estar de acuerdo», según quien habla.",
    de: "Ich bin ___ mit Ihnen: die Frist ist wirklich kurz. Die Kurzform von „einverstanden“, passend zur sprechenden Person.",
  },
  "___, пожалуйста, когда консультация у второго курса.": {
    en: "___, please, when the second-year consultation is. A polite request for information.",
    es: "___, por favor, cuándo es la tutoría de segundo. Una petición cortés de información.",
    de: "___, bitte, wann die Sprechstunde des zweiten Studienjahrs ist. Eine höfliche Bitte um Auskunft.",
  },
  "Шаг номер три непонятен. ___, пожалуйста, его ещё раз.": {
    en: "Step three is unclear. ___, please, once more. The polite вы-imperative of объяснить (to explain).",
    es: "El paso tres no se entiende. ___, por favor, una vez más. El imperativo cortés de вы de объяснить (explicar).",
    de: "Schritt drei ist unklar. ___, bitte, noch einmal. Der höfliche вы-Imperativ von объяснить (erklären).",
  },
  "Можно ___ вопрос не по лекции, а по заданию на пятницу?": {
    en: "May I ___ a question not about the lecture, but about Friday’s assignment? An infinitive after можно.",
    es: "¿Se puede ___ una pregunta no de la clase, sino de la tarea del viernes? Un infinitivo tras можно.",
    de: "Darf man eine Frage nicht zur Vorlesung, sondern zur Aufgabe für Freitag ___? Ein Infinitiv nach можно.",
  },
  "Мне ___, что в таблице перепутаны столбцы.": {
    en: "It ___ to me that the columns in the table are swapped. The impersonal form of казаться (to seem).",
    es: "Me ___ que en la tabla están cambiadas las columnas. La forma impersonal de казаться (parecer).",
    de: "Mir ___, dass in der Tabelle die Spalten vertauscht sind. Die unpersönliche Form von казаться (scheinen).",
  },
  "Я так не думаю, ___ выборка слишком маленькая.": {
    en: "I don’t think so, ___ the sample is too small. The conjunction of reason.",
    es: "Yo no lo creo, ___ la muestra es demasiado pequeña. La conjunción de causa.",
    de: "Das glaube ich nicht, ___ die Stichprobe zu klein ist. Die Konjunktion des Grundes.",
  },
  "Вы не могли бы ___ статью, на которую вы ссылаетесь?": {
    en: "Could you ___ the article you are referring to? After «не могли бы» comes an infinitive, the verb that means “to name”.",
    es: "¿Podría ___ el artículo al que se refiere? Tras «не могли бы» va un infinitivo, el verbo de «nombrar».",
    de: "Könnten Sie den Artikel ___, auf den Sie sich beziehen? Nach «не могли бы» steht ein Infinitiv, das Verb für „nennen“.",
  },
  "По-моему что срок лучше сдвинуть.": {
    en: "Form: «по-моему» (in my opinion) is not followed by «что». The deadline should be moved.",
    es: "Forma: «по-моему» (en mi opinión) no va seguido de «что». Conviene mover el plazo.",
    de: "Form: nach «по-моему» (meiner Meinung nach) steht kein «что». Den Termin sollte man verschieben.",
  },
  "Я согласный с замечанием рецензента.": {
    en: "Form: after я, “agree” should be the short form, not the long adjective. The reviewer’s comment.",
    es: "Forma: tras я, «estar de acuerdo» va en forma corta, no en el adjetivo largo. La observación del revisor.",
    de: "Form: nach я steht „einverstanden“ in der Kurzform, nicht als langes Adjektiv. Die Anmerkung des Gutachters.",
  },
  "Подскажи, пожалуйста, где принимают справки.": {
    en: "Register: this request is ты; a teacher or an office is addressed with вы. Where they accept certificates.",
    es: "Registro: esta petición va de tú; a un profesor o en una oficina se habla de usted. Dónde aceptan las constancias.",
    de: "Anrede: diese Bitte steht im Du; eine Lehrkraft oder eine Stelle spricht man mit Sie an. Wo man Bescheinigungen annimmt.",
  },
  "Объяснишь, пожалуйста, этот шаг ещё раз?": {
    en: "Form: a polite request to a teacher uses the вы-imperative, not a ты-question in the future. This step, once more.",
    es: "Forma: una petición cortés al profesor usa el imperativo de вы, no una pregunta de tú en futuro. Este paso, una vez más.",
    de: "Form: eine höfliche Bitte an die Lehrkraft nimmt den вы-Imperativ, keine Du-Frage im Futur. Dieser Schritt, noch einmal.",
  },
  "Можно задаю вопрос по таблице?": {
    en: "Form: можно is followed by the infinitive, not a present-tense form. A question about the table.",
    es: "Forma: можно va seguido del infinitivo, no de una forma de presente. Una pregunta sobre la tabla.",
    de: "Form: nach можно steht der Infinitiv, keine Präsensform. Eine Frage zur Tabelle.",
  },
  "Мне кажусь, что вывод слишком широкий.": {
    en: "Person: with мне, казаться (to seem) is impersonal; it should not take the “I” form. The conclusion is too broad.",
    es: "Persona: con мне, казаться (parecer) es impersonal; no debe ir en la forma de «yo». La conclusión es demasiado amplia.",
    de: "Person: mit мне ist казаться (scheinen) unpersönlich; es darf nicht in der Ich-Form stehen. Die Schlussfolgerung ist zu weit.",
  },
  "Я не согласен с оценкой, чтобы в расчёте пропущен шаг.": {
    en: "Conjunction: the clause gives a reason, not a purpose. A step is missing in the calculation.",
    es: "Conjunción: la oración da una causa, no una finalidad. En el cálculo falta un paso.",
    de: "Konjunktion: der Nebensatz gibt einen Grund, keinen Zweck. In der Rechnung fehlt ein Schritt.",
  },
  "Вы не могли бы указали источник?": {
    en: "Form: «не могли бы» is followed by the infinitive, not a past form. The source.",
    es: "Forma: «не могли бы» va seguido del infinitivo, no de una forma de pasado. La fuente.",
    de: "Form: nach «не могли бы» steht der Infinitiv, keine Vergangenheitsform. Die Quelle.",
  },
  "перенести / нужно / срок / По-моему": {
    en: "Say that, in your opinion, the deadline needs to be moved.",
    es: "Di que, en tu opinión, hay que mover el plazo.",
    de: "Sag, dass der Termin deiner Meinung nach verschoben werden muss.",
  },
  "вами / с / согласен / Омар": {
    en: "Say that Omar agrees with them.",
    es: "Di que Omar está de acuerdo con ellos.",
    de: "Sag, dass Omar mit ihnen einverstanden ist.",
  },
  "деканат / где / пожалуйста / Подскажите": {
    en: "Ask, politely, where the dean’s office is.",
    es: "Pregunta, con educación, dónde está el decanato.",
    de: "Frag höflich, wo das Dekanat ist.",
  },
  "раз / ещё / пожалуйста / Объясните": {
    en: "Ask, politely, for an explanation once more.",
    es: "Pide, con educación, que lo expliquen una vez más.",
    de: "Bitte höflich um eine Erklärung noch einmal.",
  },
  "таблице / по / вопрос / задать / Можно": {
    en: "Ask whether you may ask a question about the table.",
    es: "Pregunta si puedes hacer una pregunta sobre la tabla.",
    de: "Frag, ob du eine Frage zur Tabelle stellen darfst.",
  },
  "шире / вывод / что / кажется / Мне": {
    en: "Say that the conclusion seems broader to you.",
    es: "Di que la conclusión te parece más amplia.",
    de: "Sag, dass dir die Schlussfolgerung weiter vorkommt.",
  },
  "пропущен / шаг / что / потому / согласен / не / Омар": {
    en: "Say that Omar does not agree because a step is missing.",
    es: "Di que Omar no está de acuerdo porque falta un paso.",
    de: "Sag, dass Omar nicht einverstanden ist, weil ein Schritt fehlt.",
  },
  "источник / указать / бы / могли / не / Вы": {
    en: "Ask, politely, whether they could point out the source.",
    es: "Pregunta, con educación, si podrían indicar la fuente.",
    de: "Frag höflich, ob sie die Quelle angeben könnten.",
  },

  // ru-ch38-services-invitations
  "Омар звонит в поликлинику: «Я ___ записаться на приём.»": {
    en: "Omar calls the clinic: «I ___ make an appointment.» He is masculine. Choose the polite «would like» before the infinitive, not the feminine form and not a broken phrase.",
    es: "Omar llama a la clínica: «Yo ___ pedir cita.» Es masculino. Elige el «quisiera» cortés ante el infinitivo, no la forma femenina ni una frase rota.",
    de: "Omar ruft in der Poliklinik an: «Ich ___ einen Termin machen.» Er ist maskulin. Wähle das höfliche «möchte» vor dem Infinitiv, nicht die feminine Form und keine gebrochene Wendung.",
  },
  "Анна не может прийти. Что она пишет первой фразой?": {
    en: "Anna cannot come. What does she write as the first line? Choose a polite refusal. A bare «I won't come» is too sharp for a note to a tutor.",
    es: "Anna no puede ir. ¿Qué escribe como primera frase? Elige un rechazo cortés. Un «no voy, y ya» es demasiado seco para una nota al tutor.",
    de: "Anna kann nicht kommen. Was schreibt sie als ersten Satz? Wähle eine höfliche Absage. Ein nacktes «Ich komme nicht» ist für eine Nachricht an den Betreuer zu scharf.",
  },
  "Как спросить удобное время?": {
    en: "How do you ask what time is convenient? Choose a polite question to вы about the hour. Informal «you», a broken phrase, and a clock question with «unfortunately» do not ask for a convenient time.",
    es: "¿Cómo preguntas la hora que conviene? Elige una pregunta cortés de вы sobre la hora. El «tú», una frase rota y un «qué hora es» con «por desgracia» no piden una hora cómoda.",
    de: "Wie fragt man nach einer passenden Uhrzeit? Wähle eine höfliche Sie-Frage nach der Stunde. Du-Form, eine kaputte Wendung und «leider, wie spät ist es» fragen nicht nach einer günstigen Zeit.",
  },
  "Анна принимает приглашение. Что она отвечает?": {
    en: "Anna accepts the invitation. What does she answer? Choose agreement. A line that starts with «unfortunately» or «I will not be able» is a refusal, even if a glad word is stuck on.",
    es: "Anna acepta la invitación. ¿Qué responde? Elige un acuerdo. Una frase que empieza con «por desgracia» o «no podré» es un rechazo, aunque lleve una palabra de alegría.",
    de: "Anna nimmt die Einladung an. Was antwortet sie? Wähle eine Zusage. Ein Satz mit «leider» oder «ich kann nicht» ist eine Absage, auch wenn ein frohes Wort daran hängt.",
  },
  "Я хотела бы ___ на консультацию в четверг.": {
    en: "I would like to ___ for a consultation on Thursday. The speaker is feminine. The blank is the perfective infinitive «to book / to sign up», not a finite verb.",
    es: "Quisiera ___ a una consulta el jueves. Habla una mujer. El hueco es el infinitivo perfectivo de «apuntarse», no un verbo conjugado.",
    de: "Ich würde gern ___ zu einer Sprechstunde am Donnerstag. Die Sprecherin ist feminin. Die Lücke ist der perfektive Infinitiv «sich anmelden», kein finites Verb.",
  },
  "Давайте ___ встречу на пятницу: в четверг у меня практика.": {
    en: "Let's ___ the meeting to Friday: on Thursday I have a practical. One finished suggestion about a new time. Perfective future, 1st person plural, of the verb «to move to another time».",
    es: "___ la reunión al viernes: el jueves tengo práctica. Una propuesta cerrada de nueva fecha. Futuro perfectivo, 1.ª persona del plural, del verbo «aplazar».",
    de: "Lass uns das Treffen auf Freitag ___: donnerstags habe ich ein Praktikum. Ein abgeschlossener Vorschlag zur neuen Zeit. Perfektives Futur, 1. Person Plural, des Verbs «verschieben».",
  },
  "Утром мне ___: пара начинается в восемь.": {
    en: "In the morning it is ___ for me: class starts at eight. A short predicative meaning «not convenient», with мне (for me) and a time.",
    es: "Por la mañana me es ___: la clase empieza a las ocho. Un predicativo breve de «no me viene bien», con мне (a mí) y una hora.",
    de: "Morgens ist es mir ___: die Stunde beginnt um acht. Ein kurzes Prädikativ «unbequem», mit мне (mir) und einer Uhrzeit.",
  },
  "___, пожалуйста, после двух: сейчас я на паре.": {
    en: "___, please, after two: I am in class now. A polite request to вы: formal imperative of the verb «to call back».",
    es: "___, por favor, después de las dos: ahora estoy en clase. Petición cortés de вы: imperativo formal del verbo «volver a llamar».",
    de: "___, bitte, nach zwei: ich bin jetzt in der Stunde. Höfliche Bitte an вы: formeller Imperativ des Verbs «zurückrufen».",
  },

  // ru-ch39-government-verbs
  "Результат зависит ___ подготовки, а не от удачи.": {
    en: "The result depends ___ preparation, not on luck. Choose the preposition required by the verb «to depend». The options are four different prepositions.",
    es: "El resultado depende ___ la preparación, no de la suerte. Elige la preposición que rige el verbo «depender». Las opciones son cuatro preposiciones distintas.",
    de: "Das Ergebnis hängt ___ der Vorbereitung ab, nicht vom Glück. Wähle die Präposition, die das Verb «abhängen» verlangt. Die Optionen sind vier verschiedene Präpositionen.",
  },
  "Мы гордимся ___ группы на конференции.": {
    en: "We are proud of the group's ___ at the conference. After the verb «to be proud of», choose the instrumental case. The options are four cases of the same noun «result».",
    es: "Estamos orgullosos del ___ del grupo en el congreso. Tras el verbo «estar orgulloso», elige el instrumental. Las opciones son cuatro casos del mismo sustantivo «resultado».",
    de: "Wir sind stolz auf das ___ der Gruppe auf der Konferenz. Nach dem Verb «stolz sein» wähle den Instrumental. Die Optionen sind vier Kasus desselben Substantivs «Ergebnis».",
  },
  "Анна готовится ___ уже третью неделю.": {
    en: "Anna has been preparing ___ for a third week already. Choose the government of the verb «to prepare for»: the right preposition plus the case of «exam».",
    es: "Anna se prepara ___ ya desde hace tres semanas. Elige el régimen del verbo «prepararse para»: la preposición justa y el caso de «examen».",
    de: "Anna bereitet sich schon die dritte Woche ___ vor. Wähle die Rektion des Verbs «sich vorbereiten»: die passende Präposition und den Kasus von «Prüfung».",
  },
  "Омар надеется ___ в следующем семестре.": {
    en: "Omar hopes ___ next semester. Choose the government of the verb «to hope»: one preposition plus the case of «grant / stipend». The other options use the wrong preposition.",
    es: "Omar espera ___ el próximo semestre. Elige el régimen del verbo «esperar, confiar»: una preposición y el caso de «beca». Las otras opciones llevan otra preposición.",
    de: "Omar hofft ___ im nächsten Semester. Wähle die Rektion des Verbs «hoffen»: eine Präposition und der Kasus von «Stipendium». Die anderen Optionen haben die falsche Präposition.",
  },
  "Она добилась ___ только после второй попытки.": {
    en: "She achieved ___ only on the second try. Genitive singular of the noun «success», after the verb «to achieve / to attain».",
    es: "Ella logró ___ solo al segundo intento. Genitivo singular del sustantivo «éxito», tras el verbo «lograr».",
    de: "Sie erreichte ___ erst beim zweiten Versuch. Genitiv Singular des Substantivs «Erfolg», nach dem Verb «erreichen».",
  },
  "Он избегает ___ в таблице и поэтому проверяет дважды.": {
    en: "He avoids ___ in the table and therefore checks twice. Genitive plural of the noun «mistake», after the verb «to avoid».",
    es: "Evita ___ en la tabla y por eso revisa dos veces. Genitivo plural del sustantivo «error», tras el verbo «evitar».",
    de: "Er vermeidet ___ in der Tabelle und prüft deshalb zweimal. Genitiv Plural des Substantivs «Fehler», nach dem Verb «vermeiden».",
  },
  "Шум в коридоре мешает ___ читать.": {
    en: "Noise in the corridor keeps ___ from reading. Dative singular of the noun «neighbor» (one male neighbor), after the verb «to hinder someone».",
    es: "El ruido del pasillo impide ___ leer. Dativo singular del sustantivo «vecino» (un vecino), tras el verbo «estorbar a alguien».",
    de: "Lärm im Flur hindert ___ am Lesen. Dativ Singular des Substantivs «Nachbar» (ein Nachbar), nach dem Verb «jemanden stören».",
  },
  "Мы отказались ___ , потому что источников мало.": {
    en: "We refused ___ , because there are few sources. The verb «to refuse / to give up» needs its preposition plus the genitive of the noun «topic».",
    es: "Renunciamos ___ , porque hay pocas fuentes. El verbo «renunciar» pide su preposición y el genitivo del sustantivo «tema».",
    de: "Wir haben ___ abgelehnt, weil es wenige Quellen gibt. Das Verb «verzichten» braucht seine Präposition und den Genitiv des Substantivs «Thema».",
  },

  // ru-ch40-participle-preview
  "Короткая замена для «студент, который читает статью».": {
    en: "A short replacement for «a student who is reading an article». The relative clause has a present-tense verb, and the student is the subject. Choose a present active participle before the noun, not a passive and not an infinitive.",
    es: "Un reemplazo breve de «un estudiante que lee un artículo». El relativo está en presente y el estudiante es el sujeto. Elige un participio activo de presente ante el sustantivo, no uno pasivo ni un infinitivo.",
    de: "Ein kurzer Ersatz für «ein Student, der einen Artikel liest». Der Relativsatz steht im Präsens, und der Student ist das Subjekt. Wähle ein aktives Partizip Präsens vor dem Substantiv, kein passives und keinen Infinitiv.",
  },
  "Статья уже прочитана группой. Какое определение короче, чем «статья, которую прочитали»?": {
    en: "The article has already been read by the group. Which modifier is shorter than «the article that they read»? The action on the thing is finished. Choose a past passive participle, feminine, agreeing with «article».",
    es: "El artículo ya fue leído por el grupo. ¿Qué atributo es más breve que «el artículo que leyeron»? La acción sobre la cosa está terminada. Elige un participio pasivo de pasado, femenino, con «artículo».",
    de: "Der Artikel ist von der Gruppe schon gelesen. Welches Attribut ist kürzer als «der Artikel, den man gelesen hat»? Die Handlung am Gegenstand ist abgeschlossen. Wähle ein passives Partizip Präteritum, feminin, zu «Artikel».",
  },
  "Фраза длинная, в придаточном три дополнения. Что надёжнее на B1?": {
    en: "The sentence is long: the clause has three objects. What is safer at B1? A heavy participle phrase is risky here. Choose the relative word that keeps the clause, not a long participial phrase and not a gerund used as a modifier.",
    es: "La frase es larga: la subordinada tiene tres complementos. ¿Qué es más seguro en B1? Un participio largo es arriesgado. Elige el relativo que mantiene la subordinada, no un participio pesado ni un gerundio como atributo.",
    de: "Der Satz ist lang: der Nebensatz hat drei Objekte. Was ist auf B1 sicherer? Eine schwere Partizipgruppe ist riskant. Wähle das Relativwort, das den Nebensatz behält, keine lange Partizipgruppe und kein Adverbialpartizip als Attribut.",
  },
  "Это преподаватель, ___ я отправил черновик.": {
    en: "This is the lecturer ___ I sent the draft. «To send» asks «to whom?» Choose the dative of the relative pronoun. The options are four cases of the same word.",
    es: "Este es el profesor ___ le envié el borrador. «Enviar» pregunta «¿a quién?» Elige el dativo del relativo. Las opciones son cuatro casos de la misma palabra.",
    de: "Das ist der Dozent, ___ ich den Entwurf schickte. «Schicken» fragt «wem?» Wähle den Dativ des Relativpronomens. Die Optionen sind vier Kasus desselben Wortes.",
  },
  "Текст, ___ написали вчера, уже в папке.": {
    en: "The text ___ they wrote yesterday is already in the folder. The relative is the object of «wrote». The noun is masculine, so accusative looks like nominative. Do not switch to a feminine form.",
    es: "El texto ___ escribieron ayer ya está en la carpeta. El relativo es el objeto de «escribieron». El sustantivo es masculino, así que el acusativo coincide con el nominativo. No pases a una forma femenina.",
    de: "Der Text, ___ sie gestern schrieben, liegt schon in der Mappe. Das Relativ ist Objekt von «schrieben». Das Substantiv ist maskulin, der Akkusativ gleicht dem Nominativ. Keine feminine Form.",
  },
  "Метод, ___ процесс, назван в первом абзаце.": {
    en: "The method ___ the process is named in the first paragraph. The method itself describes the process. Present active participle of «to describe», masculine singular, agreeing with «method».",
    es: "El método ___ el proceso se nombra en el primer párrafo. El método mismo describe el proceso. Participio activo de presente de «describir», masculino singular, con «método».",
    de: "Die Methode, ___ den Prozess, wird im ersten Absatz genannt. Die Methode selbst beschreibt den Prozess. Aktives Partizip Präsens von «beschreiben», maskulin Singular, zu «Methode».",
  },
  "Случай, ___ в отчёте, больше не повторяли.": {
    en: "The case ___ in the report was not repeated again. Someone described the case. Past passive participle of «to describe», masculine singular.",
    es: "El caso ___ en el informe ya no se repitió. Alguien describió el caso. Participio pasivo de pasado de «describir», masculino singular.",
    de: "Den Fall, ___ im Bericht, hat man nicht wieder wiederholt. Jemand hat den Fall beschrieben. Passives Partizip Präteritum von «beschreiben», maskulin Singular.",
  },
  "Статья, ___ мы прочитали вчера, лежит на столе.": {
    en: "The article ___ we read yesterday is on the table. The relative is the object. The noun is feminine, so use the feminine accusative of the relative pronoun.",
    es: "El artículo ___ leímos ayer está en la mesa. El relativo es el objeto. El sustantivo es femenino: acusativo femenino del relativo.",
    de: "Der Artikel, ___ wir gestern lasen, liegt auf dem Tisch. Das Relativ ist das Objekt. Das Substantiv ist feminin: femininer Akkusativ des Relativpronomens.",
  },

  // ru-ch41-opinion-structures
  "Омар начинает реплику осторожно. Какая рамка с «что»?": {
    en: "Omar starts his remark carefully. Which frame takes «that»? One frame is followed by «that» plus a thesis. «In my opinion» takes a comma but does not pull «that» after it.",
    es: "Omar empieza con cuidado. ¿Qué marco lleva «que»? Un marco va seguido de «que» y una tesis. «En mi opinión» lleva coma, pero no arrastra «que».",
    de: "Omar beginnt vorsichtig. Welcher Rahmen nimmt «dass»? Ein Rahmen steht mit «dass» plus These. «Meiner Meinung nach» nimmt ein Komma, zieht aber kein «dass» nach sich.",
  },
  "Анна согласна с куратором. Как она скажет?": {
    en: "Anna agrees with the advisor. How does she say it? She is feminine. The verb of agreement takes the preposition «with» plus the instrumental, not a bare dative.",
    es: "Anna está de acuerdo con el tutor. ¿Cómo lo dice? Es femenino. El acuerdo pide la preposición «con» y el instrumental, no un dativo suelto.",
    de: "Anna ist mit dem Betreuer einverstanden. Wie sagt sie das? Sie ist feminin. Die Zustimmung braucht «mit» plus Instrumental, keinen bloßen Dativ.",
  },
  "Нужно несогласие с причиной. Что цельно?": {
    en: "You need a disagreement that includes a reason. Which line is complete? A bare «no» or «I disagree» stops too early. The full turn keeps the reason in the same remark.",
    es: "Hace falta un desacuerdo con su causa. ¿Qué frase está completa? Un «no» o un «no estoy de acuerdo» se corta pronto. La réplica entera deja la causa en la misma frase.",
    de: "Es braucht eine Ablehnung mit Grund. Welcher Satz ist vollständig? Ein bloßes «Nein» oder «ich bin nicht einverstanden» bricht zu früh ab. Die ganze Replik behält den Grund im selben Satz.",
  },
  "Омар признаёт часть довода и оставляет границу.": {
    en: "Omar accepts part of the argument and keeps a limit. Choose the frame of partial agreement. A total ban and an empty «no opinion» do not leave a boundary inside the point.",
    es: "Omar acepta parte del argumento y deja un límite. Elige el marco del acuerdo parcial. Una prohibición total y un «sin opinión» no dejan un límite dentro del punto.",
    de: "Omar gibt einen Teil des Arguments zu und lässt eine Grenze. Wähle den Rahmen der teilweisen Zustimmung. Ein totales Verbot und ein leeres «keine Meinung» lassen keine Grenze im Punkt.",
  },
  "___ мой взгляд, второй пример слабый.": {
    en: "___ my view, the second example is weak. The blank is the preposition that opens the set frame «in my view». Do not write the whole frame, only its first word.",
    es: "___ mi parecer, el segundo ejemplo es débil. El hueco es la preposición que abre el marco fijo «a mi parecer». No escribas el marco entero, solo su primera palabra.",
    de: "___ meiner Ansicht, das zweite Beispiel ist schwach. Die Lücke ist die Präposition, die den festen Rahmen «meiner Ansicht nach» öffnet. Nur das erste Wort, nicht den ganzen Rahmen.",
  },
  "Омар говорит: «Я ___ с этим тезисом.»": {
    en: "Omar says: «I ___ with this thesis.» He is masculine. Short-form agreement, masculine singular, before «with» plus the instrumental.",
    es: "Omar dice: «Yo ___ con esta tesis.» Es masculino. Forma breve de acuerdo, masculino singular, ante «con» y el instrumental.",
    de: "Omar sagt: «Ich bin ___ mit dieser These.» Er ist maskulin. Kurzform der Zustimmung, maskulin Singular, vor «mit» plus Instrumental.",
  },
  "Анна говорит: «Я совершенно не ___.»": {
    en: "Anna says: «I am absolutely not ___.» She is feminine. Short-form agreement, feminine singular. The negation is already in the sentence.",
    es: "Anna dice: «Yo no ___ en absoluto.» Es femenino. Forma breve de acuerdo, femenino singular. La negación ya está en la frase.",
    de: "Anna sagt: «Ich bin ganz und gar nicht ___.» Sie ist feminin. Kurzform der Zustimmung, feminin Singular. Die Verneinung steht schon im Satz.",
  },
  "С одной стороны, срок реальный, ___ другой стороны, источников мало.": {
    en: "On one hand the deadline is realistic, ___ the other hand there are few sources. The blank is the same preposition that opens the second half of this pair. One short word.",
    es: "Por un lado el plazo es realista, ___ otro lado hay pocas fuentes. El hueco es la misma preposición que abre la segunda mitad del par. Una palabra breve.",
    de: "Einerseits ist die Frist realistisch, ___ andererseits gibt es wenige Quellen. Die Lücke ist dieselbe Präposition, die die zweite Hälfte des Paars öffnet. Ein kurzes Wort.",
  },
};
