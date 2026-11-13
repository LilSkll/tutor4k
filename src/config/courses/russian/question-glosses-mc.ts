import type { InterfaceLanguage } from "@/types";

/** Pedagogical question glosses for RKI A1 multiple-choice (UI language). */
export const RUSSIAN_A1_MC_GLOSSES: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  // Ch. 1 — Alphabet and greetings
  "Как вежливо поздороваться с преподавателем утром?": {
    en: "How do you greet a teacher politely in the morning? Options: «Привет!» hi (informal) / «Здравствуйте!» hello (formal) / «Пока!» bye (informal) / «Эй!» hey.",
    es: "¿Cómo se saluda por la mañana a un profesor, con educación? Opciones: «Привет!» hola (de tú) / «Здравствуйте!» hola (de usted) / «Пока!» adiós informal / «Эй!» ¡eh!",
    de: "Wie begrüßt man morgens eine Lehrkraft höflich? Zur Wahl: «Привет!» hallo (du) / «Здравствуйте!» guten Tag (Sie) / «Пока!» tschüss (locker) / «Эй!» he.",
  },
  "Однокурсник в общежитии. Что сказать?": {
    en: "You run into a classmate in the dorm. What do you say? Options: «Здравствуйте!» formal hello / «До свидания!» formal goodbye / «Привет!» hi / «Извините!» excuse me.",
    es: "Te cruzas con un compañero en la residencia. ¿Qué le dices? Opciones: «Здравствуйте!» hola formal / «До свидания!» adiós formal / «Привет!» hola / «Извините!» perdón, disculpe.",
    de: "Im Wohnheim triffst du einen Kommilitonen. Was sagst du? Optionen: «Здравствуйте!» formelles Hallo / «До свидания!» formeller Abschied / «Привет!» hi / «Извините!» entschuldigen Sie.",
  },
  "— Спасибо! — ___": {
    en: "Someone says “Thank you.” Choose your reply. Options: «Привет» hi / «Пожалуйста» please, or you’re welcome / «Извините» excuse me / «Кто это» who is that.",
    es: "Alguien dice «gracias». Elige la respuesta. Opciones: «Привет» hola / «Пожалуйста» por favor, o de nada / «Извините» disculpe / «Кто это» ¿quién es?",
    de: "Jemand sagt „Danke“. Wähle die Antwort. Optionen: «Привет» hallo / «Пожалуйста» bitte (auch als Reaktion auf Danke) / «Извините» entschuldigen Sie / «Кто это» wer ist das.",
  },
  "Какая буква даёт звук, близкий к английскому ts?": {
    en: "Which letter is pronounced close to the English consonant cluster ts? The choices are the letters Ш, Ж, Ц, and Щ.",
    es: "¿Qué letra suena parecido al grupo ts del inglés? Hay que elegir entre las letras Ш, Ж, Ц y Щ.",
    de: "Welcher Buchstabe klingt ungefähr wie das englische ts? Zur Wahl stehen die Buchstaben Ш, Ж, Ц und Щ.",
  },
  "Буква Ь — это…": {
    en: "What is the letter Ь (soft sign)? It has no sound of its own; it only softens the consonant before it (as in день). Options: «гласный звук» a vowel / «согласный звук» a consonant / «не звук, знак мягкости» not a sound, a softness mark / «ударение» stress.",
    es: "¿Qué es la letra Ь (signo blando)? No tiene sonido propio; solo ablanda la consonante anterior (como en день). Opciones: «гласный звук» una vocal / «согласный звук» una consonante / «не звук, знак мягкости» no es un sonido, sino la señal de suavidad / «ударение» el acento.",
    de: "Was ist der Buchstabe Ь (Weichheitszeichen)? Er hat keinen eigenen Laut; er macht nur den Konsonanten davor weich (wie in день). Optionen: «гласный звук» ein Vokal / «согласный звук» ein Konsonant / «не звук, знак мягкости» kein Laut, sondern das Weichheitszeichen / «ударение» die Betonung.",
  },
  "Где уместно сказать «Пока!»?": {
    en: "Where is it appropriate to say «Пока!» (informal goodbye / see you)? Options: with a teacher / with a new dorm neighbour / with a friend / at an exam.",
    es: "¿Dónde encaja decir «Пока!» (adiós informal, «hasta luego»)? Opciones: con un profesor / con un vecino nuevo de la residencia / con un amigo / en un examen.",
    de: "Wo passt «Пока!» (lockeres Tschüss / bis dann)? Optionen: bei einer Lehrkraft / bei einem neuen Wohnheim-Nachbarn / bei einem Freund / in einer Prüfung.",
  },
  "Нужно спросить дорогу у незнакомого человека. Начните так:": {
    en: "You need to ask a stranger for directions. How do you begin? Options: «Слушай!» listen (informal) / «Эй!» hey / «Извините…» excuse me… / «Давай!» come on, or let’s.",
    es: "Tienes que preguntar el camino a un desconocido. ¿Por dónde empiezas? Opciones: «Слушай!» oye (de tú) / «Эй!» ¡eh! / «Извините…» disculpe… / «Давай!» venga, o vamos.",
    de: "Du musst eine fremde Person nach dem Weg fragen. Womit fängst du an? Optionen: «Слушай!» hör mal (du) / «Эй!» he / «Извините…» entschuldigen Sie… / «Давай!» komm, oder los.",
  },
  "В слове «мы» буква Ы…": {
    en: "In the word «мы» (we), the letter Ы… Options: «читается как английская i в machine» sounds like the English i in “machine” / «особый русский звук» is a sound of its own in Russian / «не читается» is silent / «это мягкий знак» is the soft sign.",
    es: "En la palabra «мы» (nosotros), la letra Ы… Opciones: suena como la i inglesa de machine / es un sonido propio del ruso / no se pronuncia / es el signo blando.",
    de: "Im Wort «мы» (wir) ist der Buchstabe Ы… Optionen: wie das englische i in machine / ein eigener russischer Laut / stumm / das Weichheitszeichen.",
  },
  "«Добрый день!» обычно говорят…": {
    en: "People usually say «Добрый день!» (good day / good afternoon)… Options: «только ночью» only at night / «днём» in the daytime / «только в SMS» only in a text / «вместо «спасибо»» instead of “thank you”.",
    es: "«Добрый день!» (buenos días, o buenas tardes) se dice normalmente… Opciones: «только ночью» solo de noche / «днём» de día / «только в SMS» solo en un mensaje / «вместо «спасибо»» en lugar de «gracias».",
    de: "«Добрый день!» (guten Tag) sagt man gewöhnlich… Optionen: «только ночью» nur nachts / «днём» am Tag / «только в SMS» nur per SMS / «вместо «спасибо»» statt „danke“.",
  },
  "— Как дела? — ___": {
    en: "“How are you?” — ___. Options: «Здравствуйте» hello / «Хорошо» fine / «Кто это» who is that / «Мой учебник» my textbook.",
    es: "«¿Qué tal?» — ___. Opciones: «Здравствуйте» hola / «Хорошо» bien / «Кто это» ¿quién es? / «Мой учебник» mi libro de texto.",
    de: "„Wie geht’s?“ — ___. Optionen: «Здравствуйте» guten Tag / «Хорошо» gut / «Кто это» wer ist das / «Мой учебник» mein Lehrbuch.",
  },
  "Буква Ъ нужна, чтобы…": {
    en: "What is the letter Ъ (hard sign) for? It is rare at A1, has no sound of its own, and is not a vowel. Options: «поставить ударение» mark the stress / «разделить согласную и е/ё/ю/я» separate a consonant from е, ё, ю, or я / «сделать звук длиннее» make a sound longer / «заменить пробел» stand in for a space.",
    es: "¿Para qué sirve la letra Ъ (signo duro)? Es rara en A1, no tiene sonido propio y no es una vocal. Opciones: «поставить ударение» marcar el acento / «разделить согласную и е/ё/ю/я» separar una consonante de е, ё, ю o я / «сделать звук длиннее» alargar un sonido / «заменить пробел» sustituir un espacio.",
    de: "Wozu braucht man den Buchstaben Ъ (Härtezeichen)? Er ist auf A1 selten, hat keinen eigenen Laut und ist kein Vokal. Optionen: «поставить ударение» die Betonung markieren / «разделить согласную и е/ё/ю/я» einen Konsonanten von е, ё, ю oder я trennen / «сделать звук длиннее» einen Laut verlängern / «заменить пробел» ein Leerzeichen ersetzen.",
  },
  "В конце разговора с преподавателем лучше сказать:": {
    en: "At the end of a conversation with a teacher, the better line is: «Пока!» informal bye / «До свидания!» goodbye / «Привет!» hi / «Нормально!» fine, or OK.",
    es: "Al terminar una conversación con el profesor, conviene decir: «Пока!» adiós informal / «До свидания!» adiós / «Привет!» hola / «Нормально!» normal, o bien.",
    de: "Am Ende eines Gesprächs mit der Lehrkraft sagt man besser: «Пока!» lockeres Tschüss / «До свидания!» auf Wiedersehen / «Привет!» hallo / «Нормально!» ganz gut, oder okay.",
  },

  // Ch. 2 — Introducing yourself
  "___ студент.": {
    en: "___ a student. Options: «Я есть» word-for-word “I am” / «Я» I / «Меня» me / «Мне» to me.",
    es: "___ estudiante. Opciones: «Я есть» un «yo soy» calcado / «Я» yo / «Меня» me, a mí (complemento) / «Мне» a mí, para mí.",
    de: "___ Student. Optionen: «Я есть» wörtlich „ich bin“ / «Я» ich / «Меня» mich / «Мне» mir.",
  },
  "___ это? — Это мой друг.": {
    en: "___ is this? — This is my friend. Options: «Что» what / «Кто» who / «Где» where / «Как» how.",
    es: "¿___ es esto? — Es mi amigo. Opciones: «Что» qué / «Кто» quién / «Где» dónde / «Как» cómo.",
    de: "___ ist das? — Das ist mein Freund. Optionen: «Что» was / «Кто» wer / «Где» wo / «Как» wie.",
  },
  "___ это? — Это учебник.": {
    en: "___ is this? — This is a textbook. Options: «Кто» who / «Что» what / «Чей» whose / «Куда» where to.",
    es: "¿___ es esto? — Es un libro de texto. Opciones: «Кто» quién / «Что» qué / «Чей» de quién / «Куда» adónde.",
    de: "___ ist das? — Das ist ein Lehrbuch. Optionen: «Кто» wer / «Что» was / «Чей» wessen / «Куда» wohin.",
  },
  "Вопрос преподавателю об имени:": {
    en: "You ask a teacher their name. Options: «Как тебя зовут?» what’s your name (informal ты) / «Как вас зовут?» what’s your name (formal вы) / «Кто ты?» who are you (informal) / «Что это?» what is this.",
    es: "Le preguntas el nombre a un profesor. Opciones: «Как тебя зовут?» ¿cómo te llamas? (tú) / «Как вас зовут?» ¿cómo se llama? (usted) / «Кто ты?» ¿quién eres? (tú) / «Что это?» ¿qué es esto?",
    de: "Du fragst eine Lehrkraft nach dem Namen. Optionen: «Как тебя зовут?» wie heißt du? / «Как вас зовут?» wie heißen Sie? / «Кто ты?» wer bist du? / «Что это?» was ist das?",
  },
  "— Меня зовут Омар. — ___!": {
    en: "“My name is Omar.” Choose the reply. Options: «До свидания» goodbye / «Очень приятно» nice to meet you / «Мой учебник» my textbook / «Добрый» good (as in “good day”).",
    es: "«Me llamo Omar.» Elige la réplica. Opciones: «До свидания» adiós / «Очень приятно» mucho gusto / «Мой учебник» mi libro / «Добрый» bueno (como en «buen día»).",
    de: "„Ich heiße Omar.“ Wähle die Antwort. Optionen: «До свидания» auf Wiedersehen / «Очень приятно» freut mich / «Мой учебник» mein Lehrbuch / «Добрый» gut (wie in „guten Tag“).",
  },
  "Я ___ Египта.": {
    en: "I ___ Egypt. Options: «в» in / «из» from / «на» on / «с» with.",
    es: "Yo ___ Egipto. Opciones: «в» en / «из» de, desde / «на» en, sobre / «с» con.",
    de: "Ich ___ Ägypten. Optionen: «в» in / «из» aus / «на» auf / «с» mit.",
  },
  "Она ___.": {
    en: "She ___. Choose the form of «студент» (student) that fits «она» (she). The options are студент, студентка, студенты, and студентом.",
    es: "Ella ___. Elige la forma de «студент» (estudiante) que concuerda con «она» (ella). Las variantes son студент, студентка, студенты y студентом.",
    de: "Sie ___. Wähle die Form von «студент» (Student), die zu «она» (sie) passt. Zur Wahl: студент, студентка, студенты und студентом.",
  },
  "Это ___ друг.": {
    en: "This is ___ friend. Options: «кто» who / «мой» my / «где» where / «как» how.",
    es: "Este es ___ amigo. Opciones: «кто» quién / «мой» mi / «где» dónde / «как» cómo.",
    de: "Das ist ___ Freund. Optionen: «кто» wer / «мой» mein / «где» wo / «как» wie.",
  },
  "Мы в одной ___.": {
    en: "We are in the same ___. Learn «в группе» as a set phrase meaning “in the group” — after в Russian often changes the noun ending. You do not need the full case system yet. Options show different endings of «группа»: группе / группы / группа / группой.",
    es: "Estamos en el mismo ___. Aprende «в группе» como expresión hecha («en el grupo»): tras в el ruso suele cambiar la terminación. Aún no hace falta toda la teoría de casos. Las opciones son formas de «группа»: группе / группы / группа / группой.",
    de: "Wir sind in derselben ___. Lerne «в группе» als feste Wendung („in der Gruppe“) — nach в ändert Russisch oft die Endung. Das volle Kasussystem brauchst du hier noch nicht. Optionen sind Formen von «группа»: группе / группы / группа / группой.",
  },
  "Как сказать: This is Anna.": {
    en: "Which line means “This is Anna”? Choose the sentence people actually say in Russian, and judge each option as a whole line.",
    es: "¿Cuál de estas frases significa «Esta es Anna»? Elige la que se dice de verdad en ruso y valora cada opción como frase entera.",
    de: "Welcher Satz heißt „Das ist Anna“? Nimm die Formulierung, die auf Russisch wirklich vorkommt, und lies jede Zeile als Ganzes.",
  },
  "Новая студентка говорит о себе:": {
    en: "A new female student is talking about herself. Choose her sentence. In the options, «есть» is “am/is”, «меня» is “me”, and «мне» is “to me”.",
    es: "Una estudiante nueva habla de sí misma. Elige su frase. En las opciones, «есть» es «soy/es», «меня» es «me» y «мне» es «a mí».",
    de: "Eine neue Studentin spricht über sich. Wähle ihren Satz. In den Optionen heißt «есть» „bin/ist“, «меня» „mich“ und «мне» „mir“.",
  },
  "— Это преподаватель. — ___ это?": {
    en: "Someone says “This is the teacher.” Ask: ___ is this? Options: «Что» what / «Кто» who / «Где» where / «Сколько» how many.",
    es: "Alguien dice «Es el profesor». Pregunta: ¿___ es? Opciones: «Что» qué / «Кто» quién / «Где» dónde / «Сколько» cuánto.",
    de: "Jemand sagt „Das ist die Lehrkraft“. Frag: ___ ist das? Optionen: «Что» was / «Кто» wer / «Где» wo / «Сколько» wie viel.",
  },

  // Ch. 3 — Noun gender
  "___ книга.": {
    en: "___ book. Choose the form of «мой» (my) that agrees with «книга». The options are мой, моя, моё, and мои.",
    es: "___ libro. Elige la forma de «мой» (mi) que concuerda con «книга». Las variantes son мой, моя, моё y мои.",
    de: "___ Buch. Wähle die Form von «мой» (mein), die zu «книга» passt. Optionen: мой, моя, моё und мои.",
  },
  "___ учебник.": {
    en: "___ textbook. Choose the form of «мой» (my) that agrees with «учебник». The options are мой, моя, моё, and мои.",
    es: "___ libro de texto. Elige la forma de «мой» (mi) que concuerda con «учебник». Variantes: мой, моя, моё y мои.",
    de: "___ Lehrbuch. Welche Form von «мой» (mein) passt zu «учебник»? Optionen: мой, моя, моё, мои.",
  },
  "___ окно.": {
    en: "___ window. Choose the form of «мой» (my) that agrees with «окно». The options are мой, моя, моё, and мои.",
    es: "___ ventana. Elige la forma de «мой» (mi) que concuerda con «окно». Variantes: мой, моя, моё y мои.",
    de: "___ Fenster. Welche Form von «мой» (mein) passt zu «окно»? Optionen: мой, моя, моё, мои.",
  },
  "Слово «стол» — род?": {
    en: "What gender is the word «стол» (table)? Options: «женский» feminine / «мужской» masculine / «средний» neuter.",
    es: "¿De qué género es la palabra «стол» (mesa)? Opciones: «женский» femenino / «мужской» masculino / «средний» neutro.",
    de: "Welches Genus hat «стол» (Tisch)? Optionen: «женский» feminin / «мужской» maskulin / «средний» neutrum.",
  },
  "Слово «тетрадь» — род?": {
    en: "What gender is «тетрадь» (notebook)? Options: «мужской» masculine / «женский» feminine / «средний» neuter.",
    es: "¿De qué género es «тетрадь» (cuaderno)? Opciones: «мужской» masculino / «женский» femenino / «средний» neutro.",
    de: "Welches Genus hat «тетрадь» (Heft)? Optionen: «мужской» maskulin / «женский» feminin / «средний» neutrum.",
  },
  "Слово «задание» — род?": {
    en: "What gender is «задание» (assignment)? Options: «мужской» masculine / «женский» feminine / «средний» neuter.",
    es: "¿De qué género es «задание» (tarea)? Opciones: «мужской» masculino / «женский» femenino / «средний» neutro.",
    de: "Welches Genus hat «задание» (Aufgabe)? Optionen: «мужской» maskulin / «женский» feminin / «средний» neutrum.",
  },
  "Где ___ ручка?": {
    en: "Where is ___ pen? Choose the form of «ваш» (your, formal) that agrees with «ручка». Options: ваш, ваша, ваше, ваши.",
    es: "¿Dónde está ___ bolígrafo? Elige la forma de «ваш» (su, de usted) que concuerda con «ручка». Variantes: ваш, ваша, ваше, ваши.",
    de: "Wo ist ___ Stift? Wähle die Form von «ваш» (Ihr, Sie-Form), die zu «ручка» passt. Optionen: ваш, ваша, ваше, ваши.",
  },
  "Это ___ словарь.": {
    en: "This is ___ dictionary. Choose the form of «мой» (my) that agrees with «словарь». Options: мой, моя, моё, мои.",
    es: "Este es ___ diccionario. Elige la forma de «мой» (mi) que concuerda con «словарь». Variantes: мой, моя, моё, мои.",
    de: "Das ist ___ Wörterbuch. Welche Form von «мой» (mein) passt zu «словарь»? Optionen: мой, моя, моё, мои.",
  },
  "Какое слово среднего рода?": {
    en: "Which word is neuter? Options: «ручка» pen / «доска» board / «окно» window / «книга» book.",
    es: "¿Qué palabra es de género neutro? Opciones: «ручка» bolígrafo / «доска» pizarra / «окно» ventana / «книга» libro.",
    de: "Welches Wort ist ein Neutrum? Optionen: «ручка» Stift / «доска» Tafel / «окно» Fenster / «книга» Buch.",
  },
  "Какое слово женского рода?": {
    en: "Which word is feminine? Options: «стол» table / «стул» chair / «аудитория» lecture room / «учебник» textbook.",
    es: "¿Qué palabra es femenina? Opciones: «стол» mesa / «стул» silla / «аудитория» aula / «учебник» libro de texto.",
    de: "Welches Wort ist feminin? Optionen: «стол» Tisch / «стул» Stuhl / «аудитория» Hörsaal / «учебник» Lehrbuch.",
  },
  "— Это ваш учебник? — Нет. ___ учебник здесь.": {
    en: "“Is this your textbook?” — “No. ___ textbook is here.” Choose the form of «мой» (my) that agrees with «учебник». Options: моя, мой, моё, мои.",
    es: "«¿Es su libro?» — «No. ___ libro está aquí.» Elige la forma de «мой» (mi) que concuerda con «учебник». Variantes: моя, мой, моё, мои.",
    de: "„Ist das Ihr Lehrbuch?“ — „Nein. ___ Lehrbuch ist hier.“ Welche Form von «мой» (mein) passt zu «учебник»? Optionen: моя, мой, моё, мои.",
  },
  "___ упражнение на странице 5.": {
    en: "___ exercise is on page 5. Choose the form of «мой» (my) that agrees with «упражнение» (exercise). Options: мой, моя, моё, мои.",
    es: "___ ejercicio está en la página 5. Elige la forma de «мой» (mi) que concuerda con «упражнение» (ejercicio). Variantes: мой, моя, моё, мои.",
    de: "___ Übung steht auf Seite 5. Welche Form von «мой» (mein) passt zu «упражнение» (Übung)? Optionen: мой, моя, моё, мои.",
  },

  // Ch. 4 — Present tense
  "В аудитории. Я ___ текст.": {
    en: "In the lecture room, I ___ a text. Choose the present of «читать» (to read) that fits «я» (I).",
    es: "En el aula, yo ___ un texto. Pon «читать» (leer) en presente, en la forma que pide «я».",
    de: "Im Hörsaal ___ ich einen Text. Welche Präsensform von «читать» (lesen) passt zu «я»?",
  },
  "На паре. Ты ___ упражнение.": {
    en: "In class, you ___ an exercise. Choose the present of «писать» (to write) that fits «ты» (you, informal).",
    es: "En clase, tú ___ un ejercicio. El presente de «писать» (escribir) tiene que concordar con «ты» (tú).",
    de: "In der Stunde ___ du eine Übung. Setze «писать» (schreiben) ins Präsens, passend zu «ты» (du).",
  },
  "С однокурсниками. Он ___ по-русски.": {
    en: "With his classmates, he ___ Russian. Choose the present of «говорить» (to speak) that fits «он» (he). «по-русски» means “in Russian”.",
    es: "Con los compañeros, él ___ en ruso. Elige el presente de «говорить» (hablar) que va con «он» (él). «по-русски» significa «en ruso».",
    de: "Mit den Kommilitonen ___ er Russisch. Welche Präsensform von «говорить» (sprechen) passt zu «он» (er)? «по-русски» heißt „auf Russisch“.",
  },
  "На семинаре. Она ___ вопрос.": {
    en: "In the seminar, she ___ the question. Choose the present of «понимать» (to understand) that fits «она» (she).",
    es: "En el seminario, ella ___ la pregunta. El presente de «понимать» (entender) debe ir con «она» (ella).",
    de: "Im Seminar ___ sie die Frage. Welche Präsensform von «понимать» (verstehen) passt zu «она» (sie)?",
  },
  "Дома вечером. Мы ___ слова.": {
    en: "At home in the evening, we ___ words. Choose the present of «учить» (to learn, to memorize) that fits «мы» (we).",
    es: "En casa por la noche, nosotros ___ palabras. Elige el presente de «учить» (aprender, memorizar) para «мы».",
    de: "Abends zu Hause ___ wir Wörter. Setze «учить» (lernen, auswendig lernen) ins Präsens für «мы» (wir).",
  },
  "После занятий. Вы ___ в библиотеке.": {
    en: "After class, you ___ in the library. Choose the present of «работать» (to work) that fits «вы» (you, formal or plural).",
    es: "Después de clase, usted ___ en la biblioteca. El presente de «работать» (trabajar) tiene que ir con «вы» (usted o ustedes).",
    de: "Nach dem Unterricht ___ Sie in der Bibliothek. Welche Präsensform von «работать» (arbeiten) passt zu «вы» (Sie)?",
  },
  "В большой аудитории. Они ___ лекцию.": {
    en: "In a large lecture room, they ___ a lecture. Choose the present of «слушать» (to listen) that fits «они» (they).",
    es: "En un aula grande, ellos ___ una clase magistral. Elige el presente de «слушать» (escuchar) para «они» (ellos).",
    de: "In einem großen Hörsaal ___ sie eine Vorlesung. Welche Präsensform von «слушать» (zuhören) passt zu «они» (sie)?",
  },
  "Преподаватель объясняет. Я ___ на доску.": {
    en: "The teacher is explaining, and I ___ at the board («на доску»). Choose the present of «смотреть» (to look) that fits «я» (I).",
    es: "El profesor explica y yo ___ a la pizarra («на доску»). El presente de «смотреть» (mirar) debe concordar con «я».",
    de: "Die Lehrkraft erklärt, und ich ___ an die Tafel («на доску»). Welche Präsensform von «смотреть» (schauen) passt zu «я»?",
  },
  "В общежитии. Ты ___ домашнее задание.": {
    en: "In the dorm, you ___ the homework. Choose the present of «делать» (to do) that fits «ты» (you, informal). «домашнее задание» is homework.",
    es: "En la residencia, tú ___ los deberes. Elige el presente de «делать» (hacer) para «ты». «домашнее задание» son los deberes.",
    de: "Im Wohnheim ___ du die Hausaufgabe. Setze «делать» (machen) ins Präsens für «ты» (du). «домашнее задание» ist die Hausaufgabe.",
  },
  "На контрольной. Он ___ правило.": {
    en: "During a quiz, he ___ the rule. Choose the present of «знать» (to know) that fits «он» (he).",
    es: "En un control, él ___ la regla. El presente de «знать» (saber) tiene que ir con «он» (él).",
    de: "Im Test ___ er die Regel. Welche Präsensform von «знать» (wissen) passt zu «он» (er)?",
  },
  "На кухне общежития. Она ___ кофе.": {
    en: "In the dorm kitchen, she ___ coffee. Choose the present of «готовить» (to make, to prepare) that fits «она» (she).",
    es: "En la cocina de la residencia, ella ___ café. Elige el presente de «готовить» (preparar) para «она» (ella).",
    de: "In der Wohnheimküche ___ sie Kaffee. Welche Präsensform von «готовить» (zubereiten) passt zu «она» (sie)?",
  },
  "На перемене. Мы ___ после пары.": {
    en: "On the break, we ___ after class. Choose the present of «отдыхать» (to rest) that fits «мы» (we). «пара» here is a class period.",
    es: "En el descanso, nosotros ___ después de la clase. El presente de «отдыхать» (descansar) debe ir con «мы». «пара» aquí es una hora de clase.",
    de: "In der Pause ___ wir nach der Stunde. Setze «отдыхать» (sich ausruhen) ins Präsens für «мы». «пара» ist hier eine Unterrichtsstunde.",
  },
  "Утром. Вы ___ в семь.": {
    en: "In the morning, you ___ at seven. Choose the present of «вставать» (to get up) that fits «вы» (you, formal or plural).",
    es: "Por la mañana, usted ___ a las siete. Elige el presente de «вставать» (levantarse) para «вы» (usted o ustedes).",
    de: "Morgens ___ Sie um sieben. Welche Präsensform von «вставать» (aufstehen) passt zu «вы» (Sie)?",
  },
  "Перед экзаменом. Они ___ текст.": {
    en: "Before the exam, they ___ the text. Choose the present of «повторять» (to review, to go over) that fits «они» (they).",
    es: "Antes del examen, ellos ___ el texto. El presente de «повторять» (repasar) tiene que concordar con «они».",
    de: "Vor der Prüfung ___ sie den Text. Welche Präsensform von «повторять» (wiederholen) passt zu «они»?",
  },
  "На занятии. Я ___ учебник.": {
    en: "In class, I ___ the textbook. Choose the present of «открывать» (to open) that fits «я» (I).",
    es: "En clase, yo ___ el libro. Elige el presente de «открывать» (abrir) para «я».",
    de: "Im Unterricht ___ ich das Lehrbuch. Setze «открывать» (öffnen) ins Präsens für «я».",
  },
  "У остановки. Ты ___ автобус.": {
    en: "At the stop, you ___ the bus. Choose the present of «ждать» (to wait) that fits «ты» (you, informal).",
    es: "En la parada, tú ___ el autobús. El presente de «ждать» (esperar) debe ir con «ты» (tú).",
    de: "An der Haltestelle ___ du den Bus. Welche Präsensform von «ждать» (warten) passt zu «ты» (du)?",
  },
  "В столовой. Он ___ чай.": {
    en: "In the cafeteria, he ___ tea. Choose the present of «пить» (to drink) that fits «он» (he).",
    es: "En el comedor, él ___ té. Elige el presente de «пить» (beber) para «он» (él).",
    de: "In der Mensa ___ er Tee. Welche Präsensform von «пить» (trinken) passt zu «он» (er)?",
  },
  "В столовой. Она ___ обед.": {
    en: "In the cafeteria, she ___ lunch. Choose the present of «есть» (to eat) that fits «она» (she). «обед» is lunch.",
    es: "En el comedor, ella ___ el almuerzo. El presente de «есть» (comer) tiene que ir con «она». «обед» es el almuerzo.",
    de: "In der Mensa ___ sie zu Mittag. Setze «есть» (essen) ins Präsens für «она». «обед» ist das Mittagessen.",
  },
  "Перед сессией. Мы ___ мало.": {
    en: "Before the exam period, we ___ little. Choose the present of «спать» (to sleep) that fits «мы» (we). «сессия» is the university exam period.",
    es: "Antes de la época de exámenes, nosotros ___ poco. Elige el presente de «спать» (dormir) para «мы». «сессия» es el periodo de exámenes.",
    de: "Vor der Prüfungsphase ___ wir wenig. Welche Präsensform von «спать» (schlafen) passt zu «мы»? «сессия» ist die Prüfungszeit an der Uni.",
  },
  "Первый курс. Вы ___ в общежитии.": {
    en: "In the first year, you ___ in the dorm. Choose the present of «жить» (to live) that fits «вы» (you, formal or plural).",
    es: "En primero, usted ___ en la residencia. El presente de «жить» (vivir) debe concordar con «вы» (usted o ustedes).",
    de: "Im ersten Studienjahr ___ Sie im Wohnheim. Welche Präsensform von «жить» (wohnen) passt zu «вы» (Sie)?",
  },

  // Ch. 5 — Accusative
  "Я читаю ___.": {
    en: "I am reading a ___. Choose the accusative (object form) of «книга» (book).",
    es: "Estoy leyendo ___. Elige el acusativo, la forma de objeto, de «книга» (libro).",
    de: "Ich lese ___. Setze «книга» (Buch) in den Akkusativ, die Objektform.",
  },
  "Я открываю ___.": {
    en: "I am opening a notebook. Choose the accusative, the object form of that noun.",
    es: "Estoy abriendo un cuaderno. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich öffne ein Heft. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Я ищу ___.": {
    en: "I am looking for a ___. Choose the accusative of «ручка» (pen).",
    es: "Estoy buscando ___. Elige el acusativo de «ручка» (bolígrafo).",
    de: "Ich suche ___. Setze «ручка» (Stift) in den Akkusativ.",
  },
  "Я покупаю ___.": {
    en: "I am buying a textbook. Choose the accusative, the object form of that noun.",
    es: "Estoy comprando un libro de texto. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich kaufe ein Lehrbuch. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Студент делает ___.": {
    en: "The student is doing an exercise. Choose the accusative, the object form of that noun.",
    es: "El estudiante hace un ejercicio. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Der Student macht eine Übung. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Я сдаю ___.": {
    en: "I am handing in an assignment («сдаю» means “I hand in”). Choose the accusative, the object form of that noun.",
    es: "Entrego una tarea («сдаю» significa «entrego»). Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich gebe eine Aufgabe ab («сдаю» heißt „ich gebe ab“). Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Она пишет ___.": {
    en: "She is writing a letter. Choose the accusative, the object form of that noun.",
    es: "Ella escribe una carta. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Sie schreibt einen Brief. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Я задаю ___.": {
    en: "I am asking a question («задаю» here is “I ask”). Choose the accusative, the object form of that noun.",
    es: "Hago una pregunta («задаю» aquí es «planteo»). Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich stelle eine Frage («задаю» heißt hier „ich stelle“). Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Мы знаем ___.": {
    en: "We know the answer. Choose the accusative, the object form of that noun.",
    es: "Sabemos la respuesta. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Wir kennen die Antwort. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Он повторяет ___.": {
    en: "He is repeating a word. Choose the accusative, the object form of that noun.",
    es: "Él repite una palabra. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Er wiederholt ein Wort. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Я перевожу ___.": {
    en: "I am translating a text. Choose the accusative, the object form of that noun.",
    es: "Estoy traduciendo un texto. Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich übersetze einen Text. Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Я вижу ___.": {
    en: "I see a ___. Choose the accusative of «друг» (friend).",
    es: "Veo a ___. Elige el acusativo de «друг» (amigo).",
    de: "Ich sehe ___. Welche Akkusativform von «друг» (Freund) passt?",
  },
  "Преподаватель ждёт ___.": {
    en: "The teacher is waiting for a ___. Choose the accusative of «студент» (student). «ждёт» is “is waiting”.",
    es: "El profesor espera a ___. El acusativo es el de «студент» (estudiante). «ждёт» significa «espera».",
    de: "Die Lehrkraft wartet auf ___. Setze «студент» (Student) in den Akkusativ. «ждёт» heißt „wartet“.",
  },
  "Мы слушаем ___.": {
    en: "We are listening to the ___. Choose the accusative of «преподаватель» (teacher).",
    es: "Escuchamos a ___. Elige el acusativo de «преподаватель» (profesor).",
    de: "Wir hören ___ zu. Welche Akkusativform von «преподаватель» (Lehrkraft) passt?",
  },
  "Я знаю ___.": {
    en: "I know a ___. Choose the accusative of «однокурсник» (classmate).",
    es: "Conozco a ___. Hace falta el acusativo de «однокурсник» (compañero de curso).",
    de: "Ich kenne ___. Setze «однокурсник» (Kommilitone) in den Akkusativ.",
  },
  "Я вижу ___ у окна.": {
    en: "I see a table by the window («у окна»). Choose the accusative, the object form of that noun.",
    es: "Veo una mesa junto a la ventana («у окна»). Elige el acusativo, la forma de objeto de ese sustantivo.",
    de: "Ich sehe einen Tisch am Fenster («у окна»). Setze dieses Substantiv in den Akkusativ, die Objektform.",
  },
  "Смотрите на ___.": {
    en: "Look at the ___. «смотрите» is “look” to you (formal or plural). Choose the accusative of «доска» (board) after «на».",
    es: "Mire o miren ___. «смотрите» es la forma de usted o ustedes. Elige el acusativo de «доска» (pizarra) tras «на».",
    de: "Schauen Sie auf ___. «смотрите» ist die Sie-Form von „schauen“. Setze «доска» (Tafel) nach «на» in den Akkusativ.",
  },
  "Я убираю ___ в общежитии.": {
    en: "I am tidying the ___ in the dorm. Choose the accusative of «комната» (room). «убираю» is “I tidy / clean”.",
    es: "Ordeno ___ en la residencia. El acusativo es el de «комната» (habitación). «убираю» significa «ordeno, limpio».",
    de: "Ich räume ___ im Wohnheim auf. Welche Akkusativform von «комната» (Zimmer) passt? «убираю» heißt „ich räume auf“.",
  },
  "Откройте ___ 10.": {
    en: "Open ___ 10. «откройте» is “open” to you (formal or plural). Choose the accusative of «страница» (page).",
    es: "Abra o abran la ___ 10. «откройте» es el imperativo de usted o ustedes. Elige el acusativo de «страница» (página).",
    de: "Schlagen Sie ___ 10 auf. «откройте» ist „öffnen Sie“. Setze «страница» (Seite) in den Akkusativ.",
  },
  "Она смотрит ___.": {
    en: "She is looking at a photo. Choose the object form of that word after «смотрит» (is looking).",
    es: "Ella mira una foto. Elige la forma de objeto de esa palabra tras «смотрит» (mira).",
    de: "Sie schaut ein Foto an. Wähle die Objektform dieses Wortes nach «смотрит» (schaut).",
  },

  // Ch. 6 — A day at university
  "Где обычно проходит лекция?": {
    en: "Where does a lecture usually take place? Options: «в аптеке» at a pharmacy / «в аудитории» in a lecture room / «на кассе» at the checkout / «в банке» at a bank.",
    es: "¿Dónde se da normalmente una clase magistral? Opciones: «в аптеке» en la farmacia / «в аудитории» en el aula / «на кассе» en la caja / «в банке» en el banco.",
    de: "Wo findet eine Vorlesung gewöhnlich statt? Optionen: «в аптеке» in der Apotheke / «в аудитории» im Hörsaal / «на кассе» an der Kasse / «в банке» in der Bank.",
  },
  "Что студент смотрит перед парой?": {
    en: "What does a student look at before class? Choose the case form of «расписание» (timetable). Options: расписание, расписания, расписанию, расписанием.",
    es: "¿Qué mira un estudiante antes de la clase? Elige la forma de caso de «расписание» (horario). Variantes: расписание, расписания, расписанию, расписанием.",
    de: "Was schaut ein Student vor der Stunde an? Wähle die Kasusform von «расписание» (Stundenplan). Optionen: расписание, расписания, расписанию, расписанием.",
  },
  "Преподаватель ___ правило.": {
    en: "The teacher ___ the rule. Choose the present of «объяснять» (to explain) that fits «преподаватель» (the teacher). One option is the infinitive.",
    es: "El profesor ___ la regla. El presente de «объяснять» (explicar) tiene que ir con «преподаватель». Una opción es el infinitivo.",
    de: "Die Lehrkraft ___ die Regel. Welche Präsensform von «объяснять» (erklären) passt zu «преподаватель»? Eine Option ist der Infinitiv.",
  },
  "Мы ___ в университете.": {
    en: "We ___ at the university. Choose the present of «учиться» (to study, as a student) that fits «мы» (we).",
    es: "Nosotros ___ en la universidad. Elige el presente de «учиться» (estudiar, como alumno) para «мы».",
    de: "Wir ___ an der Universität. Setze «учиться» (studieren) ins Präsens für «мы» (wir).",
  },
  "Сейчас ___.": {
    en: "Right now it is ___. Options: «перемена» a break between classes / «лекция» a lecture / «экзамен» an exam / «деканат» the dean’s office.",
    es: "Ahora mismo hay ___. Opciones: «перемена» un descanso / «лекция» una clase magistral / «экзамен» un examen / «деканат» el decanato.",
    de: "Jetzt ist ___. Optionen: «перемена» eine Pause / «лекция» eine Vorlesung / «экзамен» eine Prüfung / «деканат» das Dekanat.",
  },
  "Как вежливо задать вопрос?": {
    en: "How do you ask a question politely? Options: «Эй!» hey / «Извините, можно вопрос?» excuse me, may I ask a question / «Давай!» come on / «Слушай!» listen (informal).",
    es: "¿Cómo se hace una pregunta con educación? Opciones: «Эй!» ¡eh! / «Извините, можно вопрос?» disculpe, ¿puedo hacer una pregunta? / «Давай!» venga / «Слушай!» oye (de tú).",
    de: "Wie stellt man höflich eine Frage? Optionen: «Эй!» he / «Извините, можно вопрос?» entschuldigen Sie, darf ich etwas fragen / «Давай!» komm / «Слушай!» hör mal (du).",
  },
  "Студент ___ домашнее задание.": {
    en: "The student ___ the homework. Choose the present of «делать» (to do) that fits «студент» (the student). One option is the infinitive.",
    es: "El estudiante ___ los deberes. El presente de «делать» (hacer) debe concordar con «студент». Una opción es el infinitivo.",
    de: "Der Student ___ die Hausaufgabe. Welche Präsensform von «делать» (machen) passt zu «студент»? Eine Option ist der Infinitiv.",
  },
  "___ начинается в девять.": {
    en: "___ starts at nine. Choose the form of «занятие» (class) that can be the subject of «начинается» (begins). Options: занятие, занятию, занятия, занятием.",
    es: "___ empieza a las nueve. Elige la forma de «занятие» (clase) que puede ser el sujeto de «начинается» (empieza). Variantes: занятие, занятию, занятия, занятием.",
    de: "___ beginnt um neun. Welche Form von «занятие» (Unterricht) kann Subjekt von «начинается» (beginnt) sein? Optionen: занятие, занятию, занятия, занятием.",
  },
  "Где висит ___?": {
    en: "Where is the ___ hanging? Choose the form of «расписание» (timetable) that fits the question. Options: расписание, расписания, расписанию, расписанием.",
    es: "¿Dónde está colgado ___? Elige la forma de «расписание» (horario) que encaja en la pregunta. Variantes: расписание, расписания, расписанию, расписанием.",
    de: "Wo hängt ___? Wähle die Form von «расписание» (Stundenplan), die in die Frage passt. Optionen: расписание, расписания, расписанию, расписанием.",
  },
  "Они ___ в группе 204.": {
    en: "They ___ in group 204. Choose the present of «учиться» (to study) that fits «они» (they).",
    es: "Ellos ___ en el grupo 204. El presente de «учиться» (estudiar) tiene que ir con «они».",
    de: "Sie ___ in Gruppe 204. Welche Präsensform von «учиться» (studieren) passt zu «они»?",
  },
  "Преподаватель ___ текст.": {
    en: "The teacher ___ a text. Choose the present of «читать» (to read) that fits «преподаватель». One option is the infinitive.",
    es: "El profesor ___ un texto. Elige el presente de «читать» (leer) para «преподаватель». Una opción es el infinitivo.",
    de: "Die Lehrkraft ___ einen Text. Setze «читать» (lesen) ins Präsens für «преподаватель». Eine Option ist der Infinitiv.",
  },
  "Я ___ ответ на доске.": {
    en: "I ___ the answer on the board. Choose the present of «писать» (to write) that fits «я» (I). «на доске» means “on the board”.",
    es: "Yo ___ la respuesta en la pizarra. El presente de «писать» (escribir) debe ir con «я». «на доске» es «en la pizarra».",
    de: "Ich ___ die Antwort an die Tafel. Welche Präsensform von «писать» (schreiben) passt zu «я»? «на доске» heißt „an der Tafel“.",
  },
  "Мы ___ семинар в четверг.": {
    en: "We ___ a seminar on Thursday. Choose the present of «иметь» (to have) that fits «мы» (we). «в четверг» is “on Thursday”.",
    es: "Nosotros ___ seminario el jueves. Elige el presente de «иметь» (tener) para «мы». «в четверг» es «el jueves».",
    de: "Wir ___ am Donnerstag ein Seminar. Setze «иметь» (haben) ins Präsens für «мы». «в четверг» heißt „am Donnerstag“.",
  },
  "Куда идут студенты на перемене?": {
    en: "Where do students go during the break? Options: «в кафе» to the café / «в библиотеку» to the library / «на кафе» on the café / «к кафе» toward the café.",
    es: "¿Adónde van los estudiantes en el descanso? Opciones: «в кафе» a la cafetería / «в библиотеку» a la biblioteca / «на кафе» sobre la cafetería / «к кафе» hacia la cafetería.",
    de: "Wohin gehen die Studenten in der Pause? Optionen: «в кафе» ins Café / «в библиотеку» in die Bibliothek / «на кафе» auf das Café / «к кафе» zum Café hin.",
  },
  "Что нужно принести на семинар?": {
    en: "What do you need to bring to the seminar? Choose the case form of «тетрадь» (notebook). Options: тетрадь, тетради, тетрадью, тетрадях.",
    es: "¿Qué hay que llevar al seminario? Elige la forma de caso de «тетрадь» (cuaderno). Variantes: тетрадь, тетради, тетрадью, тетрадях.",
    de: "Was muss man zum Seminar mitbringen? Wähle die Kasusform von «тетрадь» (Heft). Optionen: тетрадь, тетради, тетрадью, тетрадях.",
  },
  "Деканат — это…": {
    en: "A «деканат» is… Options: «комната для сна» a room for sleeping / «администрация факультета» the faculty administration / «столовая» the cafeteria / «спортзал» the gym.",
    es: "Un «деканат» es… Opciones: «комната для сна» un cuarto para dormir / «администрация факультета» la administración de la facultad / «столовая» el comedor / «спортзал» el gimnasio.",
    de: "Ein «деканат» ist… Optionen: «комната для сна» ein Zimmer zum Schlafen / «администрация факультета» die Fakultätsverwaltung / «столовая» die Mensa / «спортзал» die Sporthalle.",
  },
  "Студент ___ лекцию.": {
    en: "The student ___ a lecture. Choose the present of «слушать» (to listen) that fits «студент». One option is the infinitive.",
    es: "El estudiante ___ una clase magistral. El presente de «слушать» (escuchar) debe ir con «студент». Una opción es el infinitivo.",
    de: "Der Student ___ eine Vorlesung. Welche Präsensform von «слушать» (zuhören) passt zu «студент»? Eine Option ist der Infinitiv.",
  },
  "Вы ___ расписание?": {
    en: "Do you ___ the timetable? Choose the present of «смотреть» (to look) that fits «вы» (you, formal or plural). One option is the infinitive.",
    es: "¿Usted ___ el horario? Elige el presente de «смотреть» (mirar) para «вы». Una opción es el infinitivo.",
    de: "___ Sie den Stundenplan? Setze «смотреть» (schauen) ins Präsens für «вы» (Sie). Eine Option ist der Infinitiv.",
  },
  "Факультет — это…": {
    en: "A «факультет» is… Options: «часть университета» a part of the university / «один студент» one student / «перемена» a break / «ручка» a pen.",
    es: "«факультет» es… Opciones: «часть университета» una parte de la universidad / «один студент» un solo estudiante / «перемена» un descanso / «ручка» un bolígrafo.",
    de: "«факультет» ist… Optionen: «часть университета» ein Teil der Universität / «один студент» ein einzelner Student / «перемена» eine Pause / «ручка» ein Stift.",
  },
  "Где обычно висит расписание?": {
    en: "Where is the timetable usually posted? Options: «на стене у деканата» on the wall by the dean’s office / «в холодильнике» in the fridge / «под столом» under the table / «в рюкзаке» in a backpack.",
    es: "¿Dónde suele estar colgado el horario? Opciones: «на стене у деканата» en la pared junto al decanato / «в холодильнике» en la nevera / «под столом» debajo de la mesa / «в рюкзаке» en la mochila.",
    de: "Wo hängt der Stundenplan gewöhnlich? Optionen: «на стене у деканата» an der Wand beim Dekanat / «в холодильнике» im Kühlschrank / «под столом» unter dem Tisch / «в рюкзаке» im Rucksack.",
  },

  // Ch. 7 — Prepositional
  "Мы учимся в ___.": {
    en: "We study in a ___. Choose the prepositional form of «университет» (university) after «в» (in).",
    es: "Estudiamos en ___. Elige el caso preposicional de «университет» (universidad) tras «в» (en).",
    de: "Wir studieren in ___. Setze «университет» (Universität) nach «в» (in) in den Präpositiv.",
  },
  "Я живу в ___.": {
    en: "I live in a ___. Choose the prepositional form of «общежитие» (dorm) after «в».",
    es: "Vivo en ___. Hace falta el caso preposicional de «общежитие» (residencia) después de «в».",
    de: "Ich wohne in ___. Welche Präpositivform von «общежитие» (Wohnheim) steht nach «в»?",
  },
  "Студенты в ___.": {
    en: "The students are in the ___. Choose the prepositional form of «библиотека» (library) after «в».",
    es: "Los estudiantes están en ___. Elige el caso preposicional de «библиотека» (biblioteca) tras «в».",
    de: "Die Studenten sind in der ___. Setze «библиотека» (Bibliothek) nach «в» in den Präpositiv.",
  },
  "Мы в ___ 12.": {
    en: "We are in ___ 12. Choose the prepositional form of «аудитория» (lecture room) after «в».",
    es: "Estamos en ___ 12. El caso preposicional que toca es el de «аудитория» (aula) tras «в».",
    de: "Wir sind in ___ 12. Welche Präpositivform von «аудитория» (Hörsaal) passt nach «в»?",
  },
  "Встретимся в ___.": {
    en: "Let’s meet at a café. The options are different shapes of that word, including a casual diminutive for a little café; choose the one that fits after «в» (in).",
    es: "Quedamos en una cafetería. Las opciones son formas distintas de esa palabra, una de ellas un diminutivo coloquial; elige la que va tras «в» (en).",
    de: "Treffen wir uns in einem Café. Die Optionen sind verschiedene Formen dieses Wortes, eine davon eine lockere Verkleinerung; wähle die Form nach «в» (in).",
  },
  "Много парков в ___.": {
    en: "There are many parks in the ___. Choose the prepositional form of «город» (city) after «в».",
    es: "Hay muchos parques en ___. Elige el caso preposicional de «город» (ciudad) después de «в».",
    de: "Es gibt viele Parks in der ___. Setze «город» (Stadt) nach «в» in den Präpositiv.",
  },
  "Университет в ___.": {
    en: "The university is in ___. Choose the prepositional form of «Москва» (Moscow) after «в».",
    es: "La universidad está en ___. Hace falta el caso preposicional de «Москва» (Moscú) tras «в».",
    de: "Die Universität ist in ___. Welche Präpositivform von «Москва» (Moskau) steht nach «в»?",
  },
  "Учебник на ___.": {
    en: "The textbook is on the ___. Choose the prepositional form of «стол» (table) after «на» (on).",
    es: "El libro está sobre ___. Elige el caso preposicional de «стол» (mesa) tras «на» (en, sobre).",
    de: "Das Lehrbuch liegt auf dem ___. Setze «стол» (Tisch) nach «на» (auf) in den Präpositiv.",
  },
  "Текст на ___.": {
    en: "The text is on the ___. Choose the prepositional form of «доска» (board) after «на».",
    es: "El texto está en ___. El caso preposicional es el de «доска» (pizarra) después de «на».",
    de: "Der Text steht auf der ___. Welche Präpositivform von «доска» (Tafel) passt nach «на»?",
  },
  "Он на ___.": {
    en: "He is at ___. Choose the prepositional form of «занятие» (class) after «на».",
    es: "Él está en ___. Elige el caso preposicional de «занятие» (clase) tras «на».",
    de: "Er ist im ___. Setze «занятие» (Unterricht) nach «на» in den Präpositiv.",
  },
  "Мы говорим об ___.": {
    en: "We are talking about the ___. Choose the prepositional form of «экзамен» (exam) after «об» (about).",
    es: "Hablamos de ___. Hace falta el caso preposicional de «экзамен» (examen) tras «об» (de, sobre).",
    de: "Wir sprechen über ___. Welche Präpositivform von «экзамен» (Prüfung) steht nach «об» (über)?",
  },
  "Расскажите об ___.": {
    en: "Tell us about the ___. «расскажите» is “tell” to you (formal or plural). Choose the prepositional form of «университет» (university) after «об».",
    es: "Cuéntenos sobre ___. «расскажите» es «cuenten» (usted). Elige el caso preposicional de «университет» (universidad) tras «об».",
    de: "Erzählen Sie über ___. «расскажите» ist „erzählen Sie“. Setze «университет» (Universität) nach «об» in den Präpositiv.",
  },
  "Лекция о ___.": {
    en: "A lecture about ___. Choose the prepositional form of «русский язык» (the Russian language) after «о» (about).",
    es: "Una clase sobre ___. El caso preposicional que toca es el de «русский язык» (la lengua rusa) después de «о» (sobre).",
    de: "Eine Vorlesung über ___. Welche Präpositivform von «русский язык» (die russische Sprache) passt nach «о» (über)?",
  },
  "Ключ в ___.": {
    en: "The key is in the ___. Choose the prepositional form of «комната» (room) after «в».",
    es: "La llave está en ___. Elige el caso preposicional de «комната» (habitación) tras «в».",
    de: "Der Schlüssel ist im ___. Setze «комната» (Zimmer) nach «в» in den Präpositiv.",
  },
  "Обед в ___.": {
    en: "Lunch is in the ___. Choose the prepositional form of «столовая» (cafeteria) after «в». «обед» is lunch.",
    es: "El almuerzo es en ___. Hace falta el caso preposicional de «столовая» (comedor) tras «в». «обед» es el almuerzo.",
    de: "Das Mittagessen ist in der ___. Welche Präpositivform von «столовая» (Mensa) steht nach «в»? «обед» ist das Mittagessen.",
  },
  "Деканат на ___.": {
    en: "The dean’s office is at the ___. Choose the prepositional form of «факультет» (faculty, a division of the university) after «на».",
    es: "El decanato está en ___. Elige el caso preposicional de «факультет» (facultad) después de «на».",
    de: "Das Dekanat ist an der ___. Setze «факультет» (Fakultät) nach «на» in den Präpositiv.",
  },
  "Мало студентов в ___.": {
    en: "There are few students in the ___. Choose the prepositional form of «класс» (classroom) after «в».",
    es: "Hay pocos estudiantes en ___. El caso preposicional es el de «класс» (sala de clase) tras «в».",
    de: "Im ___ sind wenige Studenten. Welche Präpositivform von «класс» (Klassenzimmer) passt nach «в»?",
  },
  "Гуляем в ___.": {
    en: "We are walking in the ___. Choose the prepositional form of «парк» (park) after «в». «гуляем» is “we stroll”.",
    es: "Paseamos por ___. Elige el caso preposicional de «парк» (parque) tras «в». «гуляем» es «paseamos».",
    de: "Wir spazieren im ___. Setze «парк» (Park) nach «в» in den Präpositiv. «гуляем» heißt „wir gehen spazieren“.",
  },
  "Расписание в ___.": {
    en: "The timetable is on the ___. Choose the prepositional form of «интернет» (the internet) after «в».",
    es: "El horario está en ___. Hace falta el caso preposicional de «интернет» (internet) después de «в».",
    de: "Der Stundenplan ist im ___. Welche Präpositivform von «интернет» (Internet) steht nach «в»?",
  },
  "Жду автобус на ___.": {
    en: "I am waiting for the bus at the ___. Choose the prepositional form of «остановка» (stop) after «на».",
    es: "Espero el autobús en ___. Elige el caso preposicional de «остановка» (parada) tras «на».",
    de: "Ich warte an der ___ auf den Bus. Setze «остановка» (Haltestelle) nach «на» in den Präpositiv.",
  },

  // Ch. 8 — Numbers and time
  "Сейчас ___ часа. (2:00)": {
    en: "It’s 2:00: “___ часа”. Choose the form of “two” that tells this hour. Options: два, две, двум, двоих.",
    es: "Son las 2:00: «___ часа». Elige la forma de «dos» que se usa para esta hora. Variantes: два, две, двум, двоих.",
    de: "Es ist 2:00: „___ часа“. Welche Form von „zwei“ nennt diese Uhrzeit? Optionen: два, две, двум, двоих.",
  },
  "Сейчас ___ час. (1:00)": {
    en: "It’s 1:00. Choose the form of “one” that agrees with «час» (hour). Options: один, одна, одно, одни.",
    es: "Es la 1:00. Elige la forma de «uno» que concuerda con «час» (hora). Variantes: один, одна, одно, одни.",
    de: "Es ist 1:00. Welche Form von „eins“ passt zu «час» (Stunde)? Optionen: один, одна, одно, одни.",
  },
  "Сейчас ___ часа. (3:00)": {
    en: "It’s 3:00: “___ часа”. Choose the form of “three” used for this hour. Options: три, трех, трем, троих.",
    es: "Son las 3:00: «___ часа». Elige la forma de «tres» que vale para esta hora. Variantes: три, трех, трем, троих.",
    de: "Es ist 3:00: „___ часа“. Welche Form von „drei“ nennt diese Uhrzeit? Optionen: три, трех, трем, троих.",
  },
  "___ начинается пара?": {
    en: "___ does class start? Options: «Кто» who / «Во сколько» at what time / «Где» where / «Чей» whose. «пара» is a class period.",
    es: "¿___ empieza la clase? Opciones: «Кто» quién / «Во сколько» a qué hora / «Где» dónde / «Чей» de quién. «пара» es una hora de clase.",
    de: "___ beginnt die Stunde? Optionen: «Кто» wer / «Во сколько» um wie viel Uhr / «Где» wo / «Чей» wessen. «пара» ist eine Unterrichtsstunde.",
  },
  "Занятие в ___ часов.": {
    en: "The class is at ___ o’clock. Options: «девять» 9 / «девяти» a form of 9 / «девятерых» nine people / «девяносто» 90.",
    es: "La clase es a las ___ en punto. Opciones: «девять» 9 / «девяти» una forma de 9 / «девятерых» nueve personas / «девяносто» 90.",
    de: "Der Unterricht ist um ___ Uhr. Optionen: «девять» 9 / «девяти» eine Form von 9 / «девятерых» neun Personen / «девяносто» 90.",
  },
  "Сейчас пол___ .": {
    en: "Complete «Сейчас пол___». «пол» plus a special form of the coming hour means half an hour before that hour. The options are forms of «первый» (first) and «один» (one).",
    es: "Completa «Сейчас пол___». «пол» más una forma especial de la hora que llega significa media hora antes de esa hora. Las opciones son formas de «первый» (primero) y de «один» (uno).",
    de: "Ergänze «Сейчас пол___». «пол» plus eine besondere Form der kommenden Stunde bedeutet eine halbe Stunde davor. Die Optionen sind Formen von «первый» (der erste) und «один» (eins).",
  },
  "___ у меня тест.": {
    en: "___ I have a test. Options: «Сегодня» today / «Завтра» tomorrow / «Вчера» yesterday / «Утром» in the morning.",
    es: "___ tengo un test. Opciones: «Сегодня» hoy / «Завтра» mañana / «Вчера» ayer / «Утром» por la mañana.",
    de: "___ habe ich einen Test. Optionen: «Сегодня» heute / «Завтра» morgen / «Вчера» gestern / «Утром» morgens.",
  },
  "___ первое занятие.": {
    en: "___ is the first class. Choose the form of «утро» (morning) that says when. Options: утром, утро, утра, утру.",
    es: "___ es la primera clase. Elige la forma de «утро» (mañana) que indica cuándo. Variantes: утром, утро, утра, утру.",
    de: "___ ist der erste Unterricht. Welche Form von «утро» (Morgen) sagt, wann? Optionen: утром, утро, утра, утру.",
  },
  "Пара в ___ .": {
    en: "The class is at ___. Options: «полчетвёртого» 3:30, half past three / «три» three / «четверть» a quarter / «четыре» four.",
    es: "La clase es a las ___. Opciones: «полчетвёртого» las 3:30 / «три» tres / «четверть» un cuarto / «четыре» cuatro.",
    de: "Die Stunde ist um ___. Optionen: «полчетвёртого» 3:30, halb vier / «три» drei / «четверть» eine Viertelstunde / «четыре» vier.",
  },
  "Сколько ___?": {
    en: "How many ___? Choose the form of «минута» (minute) that follows «сколько» (how many). Options: минут, минута, минуты, минуту.",
    es: "¿Cuántos ___? Elige la forma de «минута» (minuto) que sigue a «сколько» (cuántos). Variantes: минут, минута, минуты, минуту.",
    de: "Wie viele ___? Welche Form von «минута» (Minute) folgt auf «сколько» (wie viele)? Optionen: минут, минута, минуты, минуту.",
  },
  "Сейчас ___ без четверти.": {
    en: "It’s a quarter to ___. «без четверти» means “quarter to” that hour. Options: «пять» 5 / «четыре» 4 / «шесть» 6 / «пятнадцать» 15.",
    es: "Es menos cuarto para las ___. «без четверти» significa «menos cuarto». Opciones: «пять» 5 / «четыре» 4 / «шесть» 6 / «пятнадцать» 15.",
    de: "Es Viertel vor ___. «без четверти» heißt „Viertel vor“ dieser Stunde. Optionen: «пять» 5 / «четыре» 4 / «шесть» 6 / «пятнадцать» 15.",
  },
  "___ час — большая перемена.": {
    en: "The ___ hour is the long break. Choose a word related to lunch that can describe «час» (hour). Options: «Обеденный» / «Обед» lunch / «Обеда» / «Обеду».",
    es: "La hora ___ es el descanso largo. Elige una palabra ligada al almuerzo que pueda ir con «час» (hora). Opciones: «Обеденный» / «Обед» almuerzo / «Обеда» / «Обеду».",
    de: "Die ___ Stunde ist die große Pause. Wähle ein Wort zum Mittagessen, das «час» (Stunde) näher bestimmen kann. Optionen: «Обеденный» / «Обед» Mittagessen / «Обеда» / «Обеду».",
  },
  "Мы опаздываем на ___ минут.": {
    en: "We are late by ___ minutes. Choose the form of 10. Options: «десять» 10 / «десяти» a form of 10 / «десятерых» ten people / «десяток» a set of ten.",
    es: "Llegamos con ___ minutos de retraso. Elige la forma de 10. Opciones: «десять» 10 / «десяти» una forma de 10 / «десятерых» diez personas / «десяток» una decena.",
    de: "Wir verspäten uns um ___ Minuten. Welche Form von 10 passt? Optionen: «десять» 10 / «десяти» eine Form von 10 / «десятерых» zehn Personen / «десяток» ein Zehner.",
  },
  "___ будет экзамен.": {
    en: "___ there will be an exam. Options: «Завтра» tomorrow / «Сегодня» today / «Утром» in the morning / «Сейчас» now.",
    es: "___ habrá examen. Opciones: «Завтра» mañana / «Сегодня» hoy / «Утром» por la mañana / «Сейчас» ahora.",
    de: "___ haben wir eine Prüfung. Optionen: «Завтра» morgen / «Сегодня» heute / «Утром» morgens / «Сейчас» jetzt.",
  },
  "В ___ я в библиотеке.": {
    en: "In the ___, I am in the library. Choose the form of «вечер» (evening) that says when. Options: вечером, вечер, вечера, вечеру.",
    es: "___ estoy en la biblioteca. Elige la forma de «вечер» (tarde o noche) que dice cuándo. Variantes: вечером, вечер, вечера, вечеру.",
    de: "___ bin ich in der Bibliothek. Welche Form von «вечер» (Abend) sagt, wann? Optionen: вечером, вечер, вечера, вечеру.",
  },
  "С ___ до пяти — консультация.": {
    en: "From ___ until five is the consultation hour. Choose the form of 3 after «с» (from). Options: трёх, три (3), трем, трое (three as a group).",
    es: "De ___ a cinco es la tutoría. Elige la forma de 3 tras «с» (desde). Variantes: трёх, три (3), трем, трое (tres como grupo).",
    de: "Von ___ bis fünf ist die Sprechstunde. Welche Form von 3 steht nach «с» (von)? Optionen: трёх, три (3), трем, трое (drei als Gruppe).",
  },
  "Сейчас ровно ___ .": {
    en: "It’s exactly ___. Options: «двенадцать» 12 / «двенадцати» a form of 12 / «двенадцатью» another form of 12 / «дюжина» a dozen.",
    es: "Ahora son las ___ en punto. Opciones: «двенадцать» 12 / «двенадцати» una forma de 12 / «двенадцатью» otra forma de 12 / «дюжина» una docena.",
    de: "Es ist genau ___. Optionen: «двенадцать» 12 / «двенадцати» eine Form von 12 / «двенадцатью» eine weitere Form von 12 / «дюжина» ein Dutzend.",
  },
  "Первая пара в ___ .": {
    en: "The first class is at ___. Options: «полдевятого» 8:30, half past eight / «восемь» eight / «девять» nine / «половина» a half.",
    es: "La primera clase es a las ___. Opciones: «полдевятого» las 8:30 / «восемь» ocho / «девять» nueve / «половина» una mitad.",
    de: "Die erste Stunde ist um ___. Optionen: «полдевятого» 8:30, halb neun / «восемь» acht / «девять» neun / «половина» eine Hälfte.",
  },
  "___ числа у нас каникулы?": {
    en: "On what date do our holidays («каникулы») start? Choose the form of «какой» (which) that fits «числа» (of the date): какого, какой, какая, какие.",
    es: "¿Qué día empiezan las vacaciones («каникулы»)? Elige la forma de «какой» (cuál) que encaja con «числа» (la fecha): какого, какой, какая, какие.",
    de: "Am wievielten beginnen die Ferien («каникулы»)? Welche Form von «какой» (welcher) passt zu «числа» (des Datums): какого, какой, какая, какие.",
  },
  "Сейчас ___ минут десятого.": {
    en: "It’s ___ minutes of the tenth hour: «минут десятого» is the “minutes past nine” pattern. Options: «семь» 7 / «семи» a form of 7 / «семеро» seven as a group / «семнадцать» 17.",
    es: "Son ___ minutos de la hora décima: «минут десятого» es el esquema de los minutos después de las nueve. Opciones: «семь» 7 / «семи» una forma de 7 / «семеро» siete como grupo / «семнадцать» 17.",
    de: "Es ist ___ Minuten der zehnten Stunde: «минут десятого» ist das Muster für Minuten nach neun. Optionen: «семь» 7 / «семи» eine Form von 7 / «семеро» sieben als Gruppe / «семнадцать» 17.",
  },

  // ru-ch37-classroom-survival
  "В аудитории во время объяснения ___ шуметь.": {
    en: "In the classroom, during the explanation, ___ make noise. Choose a modal before the infinitive: a ban, permission, a mild obligation, or a wish.",
    es: "En el aula, durante la explicación, ___ hacer ruido. Elige un modal ante el infinitivo: prohibición, permiso, una obligación suave o un deseo.",
    de: "Im Hörsaal, während der Erklärung, ___ Lärm machen. Wähle ein Modal vor dem Infinitiv: Verbot, Erlaubnis, eine milde Pflicht oder ein Wunsch.",
  },
  "Студент просит разрешение: «___ выйти на пять минут?»": {
    en: "A student asks permission: «___ step out for five minutes?» Choose the modal of permission, not a ban, a duty, or «it is time».",
    es: "Un estudiante pide permiso: «¿___ salir cinco minutos?» Elige el modal de permiso, no una prohibición, un deber ni «ya es hora».",
    de: "Ein Student bittet um Erlaubnis: «___ fünf Minuten hinausgehen?» Wähle das Modal der Erlaubnis, nicht Verbot, Pflicht oder «es ist Zeit».",
  },
  "Вы не расслышали правило. Что сказать преподавателю?": {
    en: "You did not catch the rule. What do you say to the teacher? Choose a polite request (formal вы and «please»), not a blunt command, a greeting, or a ban.",
    es: "No oíste la regla. ¿Qué le dices al profesor? Elige una petición cortés (вы formal y «por favor»), no una orden seca, un saludo ni una prohibición.",
    de: "Du hast die Regel nicht gehört. Was sagst du zur Lehrkraft? Wähle eine höfliche Bitte (Sie-Form und «bitte»), keinen knappen Befehl, keinen Gruß und kein Verbot.",
  },
  "Анна не поняла объяснение. Как она скажет о себе?": {
    en: "Anna did not understand the explanation. How does she say that about herself? She is speaking, and she is feminine. Match person and gender; do not mix «he» or «we» into her line.",
    es: "Anna no entendió la explicación. ¿Cómo lo dice de sí misma? Habla ella, y es femenino. Acuerda persona y género; no mezcles «él» ni «nosotros» en su frase.",
    de: "Anna hat die Erklärung nicht verstanden. Wie sagt sie das über sich? Sie spricht, und sie ist feminin. Person und Genus müssen passen; «er» oder «wir» gehört nicht in ihren Satz.",
  },
};
