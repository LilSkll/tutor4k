import type { InterfaceLanguage } from "@/types";

/** Pedagogical glosses for RKI A1 fill-blank, error correction, and sentence building. */
export const RUSSIAN_A1_REST_GLOSSES: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  // Ch. 1 — Alphabet and greetings
  "___! Меня зовут Анна.": {
    en: "___! My name is Anna.",
    es: "¡___! Me llamo Anna.",
    de: "___! Ich heiße Anna.",
  },
  "___, профессор!": {
    en: "___, professor!",
    es: "¡___, profesor!",
    de: "___, Professor!",
  },
  "— Где столовая? — ___, прямо.": {
    en: "— Where is the cafeteria? — ___, straight ahead.",
    es: "— ¿Dónde está el comedor? — ___, todo recto.",
    de: "— Wo ist die Mensa? — ___, geradeaus.",
  },
  "___, где аудитория 5?": {
    en: "___, where is room 5?",
    es: "___, ¿dónde está el aula 5?",
    de: "___, wo ist Hörsaal 5?",
  },
  "— Спасибо! — ___.": {
    en: "— Thank you! — ___.",
    es: "— ¡Gracias! — ___.",
    de: "— Danke! — ___.",
  },
  "Привет! Как ___?": {
    en: "Hi! How ___?",
    es: "¡Hola! ¿Cómo ___?",
    de: "Hallo! Wie ___?",
  },
  "У меня всё ___.": {
    en: "With me, everything is ___.",
    es: "A mí todo me va ___.",
    de: "Bei mir ist alles ___.",
  },
  "С преподавателем говорим на «___».": {
    en: "With a teacher, we address them as «___».",
    es: "Con el profesor hablamos de «___».",
    de: "Mit der Lehrkraft reden wir per «___».",
  },
  "Буква ___ показывает мягкость согласной (день).": {
    en: "Which letter marks softness of the consonant before it (as in день, “day”)? Choose the sign that has no sound of its own.",
    es: "¿Qué letra marca la blandura de la consonante anterior (como en день, «día»)? Elige el signo que no tiene sonido propio.",
    de: "Welcher Buchstabe markiert die Weichheit des Konsonanten davor (wie in день, „Tag“)? Wähle das Zeichen ohne eigenen Laut.",
  },
  "___ утро!": {
    en: "___ morning!",
    es: "¡___ mañana!",
    de: "___ Morgen!",
  },
  "___ день!": {
    en: "___ day!",
    es: "¡___ día!",
    de: "___ Tag!",
  },
  "— До ___.": {
    en: "— Until ___.",
    es: "— Hasta ___.",
    de: "— Bis ___.",
  },
  "Здраствуйте, профессор!": {
    en: "Spelling: the formal hello is missing a letter.",
    es: "Ortografía: al saludo de usted le falta una letra.",
    de: "Rechtschreibung: in der förmlichen Begrüßung fehlt ein Buchstabe.",
  },
  "Привет, Иван Петрович!": {
    en: "Register: this hello is too casual for someone you address by first name and patronymic.",
    es: "Tratamiento: este hola es demasiado de tú para alguien a quien llamas por nombre y patronímico.",
    de: "Anrede: dieses Hallo ist zu locker für jemanden, den du mit Vor- und Vatersnamen ansprichst.",
  },
  "Спасиба за помощь!": {
    en: "Spelling: the word for thanks is misspelled. The rest of the line can stay.",
    es: "Ortografía: la palabra de agradecimiento está mal escrita. El resto puede quedar.",
    de: "Rechtschreibung: das Wort für „danke“ ist falsch geschrieben. Der Rest kann bleiben.",
  },
  "Досвидания!": {
    en: "Set phrase: the goodbye is not written in the normal form of that fixed farewell.",
    es: "Fórmula fija: el adiós no está escrito como se escribe esa despedida.",
    de: "Feste Wendung: der Abschied steht nicht so da, wie man diese Formel schreibt.",
  },
  "Пожалста, где кафе?": {
    en: "Spelling: the word for “please” is misspelled.",
    es: "Ortografía: la palabra de «por favor» está mal escrita.",
    de: "Rechtschreibung: das Wort für „bitte“ ist falsch geschrieben.",
  },
  "Извини, где деканат? (к незнакомому)": {
    en: "Register: the apology is informal, and the note says this is said to a stranger.",
    es: "Tratamiento: la disculpa va de tú, y la nota dice que hablas con un desconocido.",
    de: "Anrede: die Entschuldigung steht im Du; die Notiz sagt, dass du eine fremde Person ansprichst.",
  },
  "Добрый утро!": {
    en: "Agreement: the first word does not match the gender of утро.",
    es: "Concordancia: la primera palabra no coincide con el género de утро.",
    de: "Kongruenz: das erste Wort passt nicht zum Genus von утро.",
  },
  "Доброе день!": {
    en: "Agreement: the first word does not match the gender of день.",
    es: "Concordancia: la primera palabra no coincide con el género de день.",
    de: "Kongruenz: das erste Wort passt nicht zum Genus von день.",
  },
  "Как дело?": {
    en: "Set phrase: the fixed question about how someone is uses the wrong form of the noun.",
    es: "Fórmula fija: la pregunta hecha de «¿qué tal?» lleva mal la forma del sustantivo.",
    de: "Feste Wendung: in der festen Frage nach dem Befinden steht das Nomen in der falschen Form.",
  },
  "Пока, профессор!": {
    en: "Register: this goodbye is too casual for a professor.",
    es: "Tratamiento: esta despedida es demasiado informal para un profesor.",
    de: "Anrede: dieser Abschied ist zu locker für einen Professor.",
  },
  "Здраствуй, Мария! (однокурснице)": {
    en: "Spelling and register: the greeting to a classmate is misspelled, and it is not the everyday hello you use with a fellow student.",
    es: "Ortografía y tratamiento: el saludo a una compañera está mal escrito y no es el hola de todos los días entre estudiantes.",
    de: "Rechtschreibung und Anrede: der Gruß an eine Kommilitonin ist falsch geschrieben und nicht das übliche Hallo unter Studierenden.",
  },
  "Большой спасибо!": {
    en: "Agreement: the word meaning “big” does not match спасибо.",
    es: "Concordancia: la palabra de «grande» no concuerda con спасибо.",
    de: "Kongruenz: das Wort für „groß“ passt nicht zu спасибо.",
  },
  "вас / Как / зовут": {
    en: "Ask someone’s name politely, using the formal you.",
    es: "Pregunta cómo se llama, de usted.",
    de: "Frag höflich nach dem Namen, mit Sie.",
  },
  "аудитория / где / Извините": {
    en: "Politely ask where the classroom is.",
    es: "Pregunta con educación dónde está el aula.",
    de: "Frag höflich, wo der Hörsaal ist.",
  },
  "дела / Как": {
    en: "Ask how someone is.",
    es: "Pregunta qué tal está.",
    de: "Frag, wie es jemandem geht.",
  },
  "свидания / До": {
    en: "Say a formal goodbye.",
    es: "Despídete en un registro de usted.",
    de: "Sag einen förmlichen Abschied.",
  },
  "утро / Доброе": {
    en: "Wish someone a good morning.",
    es: "Da los buenos días.",
    de: "Wünsch einen guten Morgen.",
  },
  "день / Добрый": {
    en: "Greet someone in the daytime (good day).",
    es: "Saluda de día, con un buenos días.",
    de: "Sag guten Tag.",
  },
  "спасибо / Большое": {
    en: "Say thank you very much.",
    es: "Da las gracias con énfasis.",
    de: "Sag vielen Dank.",
  },
  "пожалуйста / Пройдите": {
    en: "Politely ask someone to go on through.",
    es: "Pide con educación que la persona pase.",
    de: "Bitte jemanden höflich, durchzugehen.",
  },
  "хорошо / всё / У / меня": {
    en: "Say that you are fine.",
    es: "Di que te va bien.",
    de: "Sag, dass es dir gut geht.",
  },
  "кафе / Где": {
    en: "Ask where the café is.",
    es: "Pregunta dónde está el café.",
    de: "Frag, wo das Café ist.",
  },
  "нормально / Спасибо": {
    en: "Answer that you are all right, and thank the person.",
    es: "Responde que vas bien y da las gracias.",
    de: "Antworte, dass es ganz in Ordnung ist, und bedank dich.",
  },
  "вечер / Добрый": {
    en: "Greet someone in the evening.",
    es: "Saluda al anochecer.",
    de: "Sag guten Abend.",
  },

  // Ch. 2 — Introducing yourself
  "Меня ___ Мария.": {
    en: "People ___ me Maria.",
    es: "A mí me ___ María.",
    de: "Man ___ mich Maria.",
  },
  "___ это? — Это учебник.": {
    en: "___ is this? — This is a textbook.",
    es: "¿___ es esto? — Es un libro de texto.",
    de: "___ ist das? — Das ist ein Lehrbuch.",
  },
  "___ это? — Это мой друг.": {
    en: "___ is this? — This is my friend.",
    es: "¿___ es esto? — Es mi amigo.",
    de: "___ ist das? — Das ist mein Freund.",
  },
  "Я ___ Бразилии.": {
    en: "I ___ Brazil.",
    es: "Yo ___ Brasil.",
    de: "Ich ___ Brasilien.",
  },
  "Как ___ зовут? (к преподавателю)": {
    en: "How do people call ___? (speaking to a teacher)",
    es: "¿Cómo llaman a ___? (al profesor)",
    de: "Wie nennt man ___? (zur Lehrkraft)",
  },
  "Как ___ зовут? (к однокурснику)": {
    en: "How do people call ___? (speaking to a classmate)",
    es: "¿Cómo llaman a ___? (a un compañero de curso)",
    de: "Wie nennt man ___? (zu einem Kommilitonen)",
  },
  "___ Анна.": {
    en: "___ Anna.",
    es: "___ Anna.",
    de: "___ Anna.",
  },
  "Я ___.": {
    en: "I ___.",
    es: "Yo ___.",
    de: "Ich ___.",
  },
  "Она ___.": {
    en: "She ___.",
    es: "Ella ___.",
    de: "Sie ___.",
  },
  "Очень ___!": {
    en: "Very ___!",
    es: "¡Muy ___!",
    de: "Sehr ___!",
  },
  "Это моя ___.": {
    en: "This is my ___.",
    es: "Esta es mi ___.",
    de: "Das ist meine ___.",
  },
  "Моя ___ Ли.": {
    en: "My ___ is Li.",
    es: "Mi ___ es Li.",
    de: "Meine ___ ist Li.",
  },
  "Я есть студент.": {
    en: "Pattern: this copies an English “I am …” sentence. Fix the structure, not a spelling slip.",
    es: "Estructura: la frase calca un «yo soy…». Corrige cómo está armada, no una letra.",
    de: "Satzbau: der Satz kopiert ein englisches „ich bin …“. Korrigiere den Bau, nicht die Schreibung.",
  },
  "Что это? — Это мой друг Пётр.": {
    en: "Word choice: the question treats a person as a thing. Change the question word, and leave the name.",
    es: "Palabra: la pregunta trata a una persona como si fuera una cosa. Cambia el interrogativo y deja el nombre.",
    de: "Wortwahl: die Frage behandelt eine Person wie eine Sache. Ändere das Fragewort und lass den Namen stehen.",
  },
  "Кто это? — Это ручка.": {
    en: "Word choice: the question treats an object as a person. Change the question word.",
    es: "Palabra: la pregunta trata un objeto como si fuera una persona. Cambia el interrogativo.",
    de: "Wortwahl: die Frage behandelt einen Gegenstand wie eine Person. Ändere das Fragewort.",
  },
  "Меня зовут есть Анна.": {
    en: "Pattern: the name sentence follows a foreign model and contains a word Russian does not use here.",
    es: "Estructura: la frase del nombre sigue un modelo ajeno y lleva una palabra que aquí el ruso no usa.",
    de: "Satzbau: der Namensatz folgt einem fremden Muster und enthält ein Wort, das das Russische hier nicht setzt.",
  },
  "Как тебя зовут? (к декану)": {
    en: "Register: the “you” is informal, and the note says you are speaking to the dean.",
    es: "Tratamiento: el «tú» es de confianza, y la nota dice que hablas con el decano.",
    de: "Anrede: das „du“ ist vertraut; die Notiz sagt, dass du den Dekan ansprichst.",
  },
  "Я из Китай.": {
    en: "Case: the country after из is not in the form that preposition requires.",
    es: "Caso: el país después de из no está en la forma que pide esa preposición.",
    de: "Kasus: das Land nach из steht nicht in der Form, die diese Präposition verlangt.",
  },
  "Она студент.": {
    en: "Agreement: the noun for “student” does not match она.",
    es: "Concordancia: la palabra de «estudiante» no concuerda con она.",
    de: "Kongruenz: das Wort für „Student“ passt nicht zu она.",
  },
  "Это есть преподаватель.": {
    en: "Pattern: “this is a teacher” has been built with an extra verb copied from another language.",
    es: "Estructura: «este es el profesor» lleva un verbo de más, copiado de otra lengua.",
    de: "Satzbau: „das ist die Lehrkraft“ ist mit einem Verb zu viel gebildet, nach dem Muster einer anderen Sprache.",
  },
  "Мне зовут Карлос.": {
    en: "Case: the pronoun is not the form used when you say your name.",
    es: "Caso: el pronombre no está en la forma con la que se dice el nombre.",
    de: "Kasus: das Pronomen steht nicht in der Form, mit der man den eigenen Namen sagt.",
  },
  "Очень приятный!": {
    en: "Set phrase: “nice to meet you” is not this adjective. Put the fixed expression in its usual form.",
    es: "Fórmula fija: «mucho gusto» no es este adjetivo. Deja la expresión en su forma de siempre.",
    de: "Feste Wendung: „freut mich“ ist nicht dieses Adjektiv. Setze die Formel in ihre übliche Form.",
  },
  "Это мой подруга.": {
    en: "Agreement: мой does not match the gender of подруга.",
    es: "Concordancia: мой no coincide con el género de подруга.",
    de: "Kongruenz: мой passt nicht zum Genus von подруга.",
  },
  "Я студентка. Я новый.": {
    en: "Agreement: новый does not match a speaker who has just said студентка.",
    es: "Concordancia: новый no concuerda con quien acaba de decir студентка.",
    de: "Kongruenz: новый passt nicht zu einer Sprecherin, die gerade студентка gesagt hat.",
  },
  "зовут / Меня / Анна": {
    en: "Say that your name is Anna.",
    es: "Di que te llamas Anna.",
    de: "Sag, dass du Anna heißt.",
  },
  "студент / Я": {
    en: "Say that you are a student.",
    es: "Di que eres estudiante.",
    de: "Sag, dass du Student bist.",
  },
  "Китая / из / Я": {
    en: "Say that you are from China.",
    es: "Di que eres de China.",
    de: "Sag, dass du aus China kommst.",
  },
  "это / Кто": {
    en: "Ask who this is.",
    es: "Pregunta quién es.",
    de: "Frag, wer das ist.",
  },
  "это / Что": {
    en: "Ask what this is.",
    es: "Pregunta qué es esto.",
    de: "Frag, was das ist.",
  },
  "друг / мой / Это": {
    en: "Say that this is your friend.",
    es: "Di que este es tu amigo.",
    de: "Sag, dass das dein Freund ist.",
  },
  "вас / зовут / Как": {
    en: "Ask a person’s name with the formal you.",
    es: "Pregunta el nombre de usted.",
    de: "Frag mit Sie nach dem Namen.",
  },
  "приятно / Очень": {
    en: "Say that you are pleased to meet them.",
    es: "Di que te alegra conocer a la persona.",
    de: "Sag, dass du dich über die Bekanntschaft freust.",
  },
  "студентка / Она": {
    en: "Say that she is a student.",
    es: "Di que ella es estudiante.",
    de: "Sag, dass sie Studentin ist.",
  },
  "преподаватель / Это": {
    en: "Say that this person is a teacher.",
    es: "Di que esta persona es docente.",
    de: "Sag, dass das eine Lehrkraft ist.",
  },
  "подруга / моя / Это": {
    en: "Say that this is your friend.",
    es: "Di que esta es tu amiga.",
    de: "Sag, dass das deine Freundin ist.",
  },
  "Турции / из / Я": {
    en: "Say that you are from Turkey.",
    es: "Di que eres de Turquía.",
    de: "Sag, dass du aus der Türkei kommst.",
  },

  // Ch. 3 — Noun gender
  "___ окно открыто.": {
    en: "___ window is open.",
    es: "___ ventana está abierta.",
    de: "___ Fenster ist offen.",
  },
  "Где ___ тетрадь?": {
    en: "Where is ___ notebook?",
    es: "¿Dónde está ___ cuaderno?",
    de: "Wo ist ___ Heft?",
  },
  "Это ___ стол.": {
    en: "This is ___ table.",
    es: "Es ___ mesa.",
    de: "Das ist ___ Tisch.",
  },
  "___ ручка под учебником.": {
    en: "___ pen is under the textbook.",
    es: "___ bolígrafo está debajo del libro.",
    de: "___ Stift liegt unter dem Lehrbuch.",
  },
  "Откройте ___, пожалуйста.": {
    en: "Open ___, please.",
    es: "Abra ___, por favor.",
    de: "Öffnen Sie ___, bitte.",
  },
  "Смотрите на ___.": {
    en: "Look at ___.",
    es: "Mire ___.",
    de: "Schauen Sie auf ___.",
  },
  "Где ___ задание?": {
    en: "Where is ___ assignment?",
    es: "¿Dónde está ___ tarea?",
    de: "Wo ist ___ Aufgabe?",
  },
  "Это ___ стул.": {
    en: "This is ___ chair.",
    es: "Es ___ silla.",
    de: "Das ist ___ Stuhl.",
  },
  "Мы в ___ 12.": {
    en: "We are in ___ 12.",
    es: "Estamos en ___ 12.",
    de: "Wir sind in ___ 12.",
  },
  "___ словарь на столе.": {
    en: "___ dictionary is on the table.",
    es: "___ diccionario está en la mesa.",
    de: "___ Wörterbuch liegt auf dem Tisch.",
  },
  "Это ___ дверь?": {
    en: "Is this ___ door?",
    es: "¿Es ___ puerta?",
    de: "Ist das ___ Tür?",
  },
  "___ книга здесь.": {
    en: "___ book is here.",
    es: "___ libro está aquí.",
    de: "___ Buch ist hier.",
  },
  "Мой тетрадь на столе.": {
    en: "Agreement: мой does not match the gender of тетрадь.",
    es: "Concordancia: мой no coincide con el género de тетрадь.",
    de: "Kongruenz: мой passt nicht zum Genus von тетрадь.",
  },
  "Моя учебник здесь.": {
    en: "Agreement: моя does not match the gender of учебник.",
    es: "Concordancia: моя no coincide con el género de учебник.",
    de: "Kongruenz: моя passt nicht zum Genus von учебник.",
  },
  "Моя окно открыто.": {
    en: "Agreement: моя does not match the gender of окно.",
    es: "Concordancia: моя no coincide con el género de окно.",
    de: "Kongruenz: моя passt nicht zum Genus von окно.",
  },
  "Где ваш ручка?": {
    en: "Agreement: ваш does not match the gender of ручка.",
    es: "Concordancia: ваш no coincide con el género de ручка.",
    de: "Kongruenz: ваш passt nicht zum Genus von ручка.",
  },
  "Это моя словарь.": {
    en: "Agreement: моя does not match the gender of словарь.",
    es: "Concordancia: моя no coincide con el género de словарь.",
    de: "Kongruenz: моя passt nicht zum Genus von словарь.",
  },
  "Мой задание на странице 3.": {
    en: "Agreement: мой does not match the gender of задание.",
    es: "Concordancia: мой no coincide con el género de задание.",
    de: "Kongruenz: мой passt nicht zum Genus von задание.",
  },
  "Мой книга интересная.": {
    en: "Agreement: мой does not match the gender of книга.",
    es: "Concordancia: мой no coincide con el género de книга.",
    de: "Kongruenz: мой passt nicht zum Genus von книга.",
  },
  "Ваш аудитория большая.": {
    en: "Agreement: ваш does not match the gender of аудитория.",
    es: "Concordancia: ваш no coincide con el género de аудитория.",
    de: "Kongruenz: ваш passt nicht zum Genus von аудитория.",
  },
  "Моя стул у двери.": {
    en: "Agreement: моя does not match the gender of стул.",
    es: "Concordancia: моя no coincide con el género de стул.",
    de: "Kongruenz: моя passt nicht zum Genus von стул.",
  },
  "Мой дверь закрыта.": {
    en: "Agreement: мой does not match the gender of дверь.",
    es: "Concordancia: мой no coincide con el género de дверь.",
    de: "Kongruenz: мой passt nicht zum Genus von дверь.",
  },
  "Моя упражнение лёгкое.": {
    en: "Agreement: моя does not match the gender of упражнение.",
    es: "Concordancia: моя no coincide con el género de упражнение.",
    de: "Kongruenz: моя passt nicht zum Genus von упражнение.",
  },
  "Это ваш тетрадь?": {
    en: "Agreement: ваш does not match the gender of тетрадь.",
    es: "Concordancia: ваш no coincide con el género de тетрадь.",
    de: "Kongruenz: ваш passt nicht zum Genus von тетрадь.",
  },
  "учебник / мой / Это": {
    en: "Say that this is your textbook.",
    es: "Di que este es tu libro de texto.",
    de: "Sag, dass das dein Lehrbuch ist.",
  },
  "тетрадь / моя / Это": {
    en: "Say that this is your notebook.",
    es: "Di que este es tu cuaderno.",
    de: "Sag, dass das dein Heft ist.",
  },
  "окно / моё / Это": {
    en: "Say that this is your window.",
    es: "Di que esta es tu ventana.",
    de: "Sag, dass das dein Fenster ist.",
  },
  "тетрадь / моя / Где": {
    en: "Ask where your notebook is.",
    es: "Pregunta dónde está tu cuaderno.",
    de: "Frag, wo dein Heft ist.",
  },
  "учебник / ваш / Это": {
    en: "Say that this is your textbook, addressing the person formally.",
    es: "Di que este es su libro, de usted.",
    de: "Sag, dass das Ihr Lehrbuch ist.",
  },
  "ручка / моя / Это": {
    en: "Say that this is your pen.",
    es: "Di que este es tu bolígrafo.",
    de: "Sag, dass das dein Stift ist.",
  },
  "задание / моё / Это": {
    en: "Say that this is your assignment.",
    es: "Di que esta es tu tarea.",
    de: "Sag, dass das deine Aufgabe ist.",
  },
  "стол / мой / Это": {
    en: "Say that this is your desk.",
    es: "Di que esta es tu mesa.",
    de: "Sag, dass das dein Tisch ist.",
  },
  "пожалуйста / окно / Откройте": {
    en: "Politely ask someone to open the window.",
    es: "Pide con educación que abran la ventana.",
    de: "Bitte höflich darum, das Fenster zu öffnen.",
  },
  "доску / на / Смотрите": {
    en: "Tell the class to look at the board.",
    es: "Pide que miren la pizarra.",
    de: "Sag, dass sie auf die Tafel schauen sollen.",
  },
  "словарь / мой / Где": {
    en: "Ask where your dictionary is.",
    es: "Pregunta dónde está tu diccionario.",
    de: "Frag, wo dein Wörterbuch ist.",
  },
  "ручка / ваша / Где": {
    en: "Ask, formally, where the person’s pen is.",
    es: "Pregunta, de usted, dónde está el bolígrafo.",
    de: "Frag mit Sie, wo der Stift ist.",
  },

  // Ch. 4 — Present tense
  "Он ___ текст.": {
    en: "He ___ the text.",
    es: "Él ___ el texto.",
    de: "Er ___ den Text.",
  },
  "Она ___ упражнение.": {
    en: "She ___ the exercise.",
    es: "Ella ___ el ejercicio.",
    de: "Sie ___ die Übung.",
  },
  "Мы ___ по-русски.": {
    en: "We ___ in Russian.",
    es: "Nosotros ___ en ruso.",
    de: "Wir ___ auf Russisch.",
  },
  "Вы ___ вопрос.": {
    en: "You ___ the question.",
    es: "Usted ___ la pregunta.",
    de: "Sie ___ die Frage.",
  },
  "Они ___ слова.": {
    en: "They ___ the words.",
    es: "Ellos ___ las palabras.",
    de: "Sie ___ die Wörter.",
  },
  "Я ___ в библиотеке.": {
    en: "I ___ in the library.",
    es: "Yo ___ en la biblioteca.",
    de: "Ich ___ in der Bibliothek.",
  },
  "Ты ___ лекцию.": {
    en: "You ___ the lecture.",
    es: "Tú ___ la clase.",
    de: "Du ___ die Vorlesung.",
  },
  "Он ___ на доску.": {
    en: "He ___ at the board.",
    es: "Él ___ hacia la pizarra.",
    de: "Er ___ zur Tafel.",
  },
  "Она ___ домашнее задание.": {
    en: "She ___ the homework.",
    es: "Ella ___ los deberes.",
    de: "Sie ___ die Hausaufgabe.",
  },
  "Мы ___ правило.": {
    en: "We ___ the rule.",
    es: "Nosotros ___ la regla.",
    de: "Wir ___ die Regel.",
  },
  "Вы ___ кофе.": {
    en: "You ___ coffee.",
    es: "Usted ___ café.",
    de: "Sie ___ Kaffee.",
  },
  "Они ___ после пары.": {
    en: "They ___ after class.",
    es: "Ellos ___ después de la clase.",
    de: "Sie ___ nach dem Kurs.",
  },
  "Я ___ в семь.": {
    en: "I ___ at seven.",
    es: "Yo ___ a las siete.",
    de: "Ich ___ um sieben.",
  },
  "Ты ___ текст.": {
    en: "You ___ the text.",
    es: "Tú ___ el texto.",
    de: "Du ___ den Text.",
  },
  "Он ___ учебник.": {
    en: "He ___ the textbook.",
    es: "Él ___ el libro de texto.",
    de: "Er ___ das Lehrbuch.",
  },
  "Она ___ автобус.": {
    en: "She ___ the bus.",
    es: "Ella ___ el autobús.",
    de: "Sie ___ den Bus.",
  },
  "Мы ___ чай.": {
    en: "We ___ tea.",
    es: "Nosotros ___ té.",
    de: "Wir ___ Tee.",
  },
  "Вы ___ обед.": {
    en: "You ___ lunch.",
    es: "Usted ___ el almuerzo.",
    de: "Sie ___ das Mittagessen.",
  },
  "Они ___ мало.": {
    en: "They ___ little.",
    es: "Ellos ___ poco.",
    de: "Sie ___ wenig.",
  },
  "Я ___ в общежитии.": {
    en: "I ___ in the dorm.",
    es: "Yo ___ en la residencia.",
    de: "Ich ___ im Wohnheim.",
  },
  "Она читать текст.": {
    en: "Agreement: the verb is still an infinitive, so it does not match она.",
    es: "Concordancia: el verbo sigue en infinitivo y no concuerda con она.",
    de: "Kongruenz: das Verb steht noch im Infinitiv und passt nicht zu она.",
  },
  "Мы писать ответ.": {
    en: "Agreement: the verb is still an infinitive, so it does not match мы.",
    es: "Concordancia: el verbo sigue en infinitivo y no concuerda con мы.",
    de: "Kongruenz: das Verb steht noch im Infinitiv und passt nicht zu мы.",
  },
  "Ты говорит по-русски.": {
    en: "Agreement: the verb ending does not match ты.",
    es: "Concordancia: la terminación del verbo no concuerda con ты.",
    de: "Kongruenz: die Endung des Verbs passt nicht zu ты.",
  },
  "Я не понимаешь вопрос.": {
    en: "Agreement: the verb ending does not match я. The negation can stay.",
    es: "Concordancia: la terminación del verbo no concuerda con я. La negación puede quedar.",
    de: "Kongruenz: die Endung des Verbs passt nicht zu я. Die Verneinung kann bleiben.",
  },
  "Они учит слова.": {
    en: "Agreement: the verb does not match они.",
    es: "Concordancia: el verbo no concuerda con они.",
    de: "Kongruenz: das Verb passt nicht zu они.",
  },
  "Вы работает в кафе.": {
    en: "Agreement: the verb does not match вы.",
    es: "Concordancia: el verbo no concuerda con вы.",
    de: "Kongruenz: das Verb passt nicht zu вы.",
  },
  "Преподаватель слушаю лекцию.": {
    en: "Agreement: the verb ending matches “I,” not the teacher.",
    es: "Concordancia: la terminación es de «yo», no del profesor.",
    de: "Kongruenz: die Endung ist die von „ich“, nicht die der Lehrkraft.",
  },
  "Студенты смотрю на экран.": {
    en: "Agreement: the verb does not match the plural subject студенты.",
    es: "Concordancia: el verbo no concuerda con el sujeto en plural студенты.",
    de: "Kongruenz: das Verb passt nicht zum Plural студенты.",
  },
  "Я делаешь задание.": {
    en: "Agreement: the verb ending does not match я.",
    es: "Concordancia: la terminación del verbo no concuerda con я.",
    de: "Kongruenz: die Endung des Verbs passt nicht zu я.",
  },
  "Он знаю правило.": {
    en: "Agreement: the verb ending matches “I,” not он.",
    es: "Concordancia: la terminación es de «yo», no de он.",
    de: "Kongruenz: die Endung ist die von „ich“, nicht die von он.",
  },
  "Мы готовит обед.": {
    en: "Agreement: the verb does not match мы.",
    es: "Concordancia: el verbo no concuerda con мы.",
    de: "Kongruenz: das Verb passt nicht zu мы.",
  },
  "Ты отдыхает после пары.": {
    en: "Agreement: the verb does not match ты.",
    es: "Concordancia: el verbo no concuerda con ты.",
    de: "Kongruenz: das Verb passt nicht zu ты.",
  },
  "Она встаю рано.": {
    en: "Agreement: the verb does not match она.",
    es: "Concordancia: el verbo no concuerda con она.",
    de: "Kongruenz: das Verb passt nicht zu она.",
  },
  "Вы повторяю текст.": {
    en: "Agreement: the verb does not match вы.",
    es: "Concordancia: el verbo no concuerda con вы.",
    de: "Kongruenz: das Verb passt nicht zu вы.",
  },
  "Они открываю окно.": {
    en: "Agreement: the verb does not match они.",
    es: "Concordancia: el verbo no concuerda con они.",
    de: "Kongruenz: das Verb passt nicht zu они.",
  },
  "Я ждёшь друга.": {
    en: "Agreement: the verb does not match я.",
    es: "Concordancia: el verbo no concuerda con я.",
    de: "Kongruenz: das Verb passt nicht zu я.",
  },
  "Мы пьёт чай.": {
    en: "Agreement: the verb does not match мы.",
    es: "Concordancia: el verbo no concuerda con мы.",
    de: "Kongruenz: das Verb passt nicht zu мы.",
  },
  "Ты ем в столовой.": {
    en: "Agreement: the verb does not match ты.",
    es: "Concordancia: el verbo no concuerda con ты.",
    de: "Kongruenz: das Verb passt nicht zu ты.",
  },
  "Студент сплю мало.": {
    en: "Agreement: the verb ending matches “I,” not студент.",
    es: "Concordancia: la terminación es de «yo», no de студент.",
    de: "Kongruenz: die Endung ist die von „ich“, nicht die von студент.",
  },
  "Она закрывают дверь.": {
    en: "Agreement: the verb is plural and does not match она.",
    es: "Concordancia: el verbo va en plural y no concuerda con она.",
    de: "Kongruenz: das Verb steht im Plural und passt nicht zu она.",
  },
  "Я / читаю / текст": {
    en: "Say that you are reading the text.",
    es: "Di que lees el texto.",
    de: "Sag, dass du den Text liest.",
  },
  "Она / пишет / упражнение": {
    en: "Say that she is writing the exercise.",
    es: "Di que ella escribe el ejercicio.",
    de: "Sag, dass sie die Übung schreibt.",
  },
  "Мы / говорим / по-русски": {
    en: "Say that we speak Russian.",
    es: "Di que hablamos ruso.",
    de: "Sag, dass wir Russisch sprechen.",
  },
  "Вы / понимаете / вопрос": {
    en: "Say that you understand the question.",
    es: "Di que usted entiende la pregunta.",
    de: "Sag, dass Sie die Frage verstehen.",
  },
  "Он / учит / слова": {
    en: "Say that he is learning the words.",
    es: "Di que él estudia las palabras.",
    de: "Sag, dass er die Wörter lernt.",
  },
  "Они / работают / в / библиотеке": {
    en: "Say that they work in the library.",
    es: "Di que trabajan en la biblioteca.",
    de: "Sag, dass sie in der Bibliothek arbeiten.",
  },
  "Я / слушаю / лекцию": {
    en: "Say that you are listening to the lecture.",
    es: "Di que escuchas la clase.",
    de: "Sag, dass du der Vorlesung zuhörst.",
  },
  "Смотрите / на / доску": {
    en: "Tell people to look at the board.",
    es: "Pide que miren la pizarra.",
    de: "Sag, dass sie auf die Tafel schauen sollen.",
  },
  "Мы / делаем / домашнее / задание": {
    en: "Say that we are doing the homework.",
    es: "Di que hacemos los deberes.",
    de: "Sag, dass wir die Hausaufgabe machen.",
  },
  "Ты / знаешь / правило": {
    en: "Say that the other person knows the rule.",
    es: "Di que la otra persona sabe la regla.",
    de: "Sag, dass die andere Person die Regel kennt.",
  },
  "Она / готовит / кофе": {
    en: "Say that she is making coffee.",
    es: "Di que ella prepara café.",
    de: "Sag, dass sie Kaffee macht.",
  },
  "Я / отдыхаю / после / пары": {
    en: "Say that you rest after class.",
    es: "Di que descansas después de la clase.",
    de: "Sag, dass du nach dem Kurs Pause machst.",
  },
  "Он / встаёт / в / семь": {
    en: "Say that he gets up at seven.",
    es: "Di que él se levanta a las siete.",
    de: "Sag, dass er um sieben aufsteht.",
  },
  "Мы / повторяем / текст": {
    en: "Say that we are going over the text again.",
    es: "Di que repasamos el texto.",
    de: "Sag, dass wir den Text wiederholen.",
  },
  "Откройте / учебник / пожалуйста": {
    en: "Politely ask someone to open the textbook.",
    es: "Pide con educación que abran el libro.",
    de: "Bitte höflich darum, das Lehrbuch aufzuschlagen.",
  },
  "Они / ждут / автобус": {
    en: "Say that they are waiting for the bus.",
    es: "Di que esperan el autobús.",
    de: "Sag, dass sie auf den Bus warten.",
  },
  "Я / пью / чай": {
    en: "Say that you are drinking tea.",
    es: "Di que tomas té.",
    de: "Sag, dass du Tee trinkst.",
  },
  "Вы / едите / обед": {
    en: "Say that you are eating lunch.",
    es: "Di que ustedes almuerzan.",
    de: "Sag, dass Sie zu Mittag essen.",
  },
  "Студент / мало / спит": {
    en: "Say that the student sleeps little.",
    es: "Di que el estudiante duerme poco.",
    de: "Sag, dass der Student wenig schläft.",
  },
  "Я / живу / в / общежитии": {
    en: "Say that you live in the dorm.",
    es: "Di que vives en la residencia.",
    de: "Sag, dass du im Wohnheim wohnst.",
  },

  // Ch. 5 — Accusative
  "Я читаю ___.": {
    en: "I am reading ___.",
    es: "Leo ___.",
    de: "Ich lese ___.",
  },
  "Я открываю ___.": {
    en: "I open ___.",
    es: "Abro ___.",
    de: "Ich öffne ___.",
  },
  "Я ищу ___.": {
    en: "I am looking for ___.",
    es: "Busco ___.",
    de: "Ich suche ___.",
  },
  "Я покупаю ___.": {
    en: "I am buying ___.",
    es: "Compro ___.",
    de: "Ich kaufe ___.",
  },
  "Студент делает ___.": {
    en: "The student does ___.",
    es: "El estudiante hace ___.",
    de: "Der Student macht ___.",
  },
  "Я сдаю ___.": {
    en: "I hand in ___.",
    es: "Entrego ___.",
    de: "Ich gebe ___ ab.",
  },
  "Она пишет ___.": {
    en: "She writes ___.",
    es: "Ella escribe ___.",
    de: "Sie schreibt ___.",
  },
  "Я задаю ___.": {
    en: "I ask ___.",
    es: "Hago ___.",
    de: "Ich stelle ___.",
  },
  "Мы знаем ___.": {
    en: "We know ___.",
    es: "Sabemos ___.",
    de: "Wir wissen ___.",
  },
  "Он повторяет ___.": {
    en: "He repeats ___.",
    es: "Él repite ___.",
    de: "Er wiederholt ___.",
  },
  "Я перевожу ___.": {
    en: "I translate ___.",
    es: "Traduzco ___.",
    de: "Ich übersetze ___.",
  },
  "Я вижу ___.": {
    en: "I see ___.",
    es: "Veo ___.",
    de: "Ich sehe ___.",
  },
  "Преподаватель ждёт ___.": {
    en: "The teacher is waiting for ___.",
    es: "El profesor espera ___.",
    de: "Die Lehrkraft wartet auf ___.",
  },
  "Мы слушаем ___.": {
    en: "We listen to ___.",
    es: "Escuchamos ___.",
    de: "Wir hören ___ zu.",
  },
  "Я знаю ___.": {
    en: "I know ___.",
    es: "Conozco ___.",
    de: "Ich kenne ___.",
  },
  "Я вижу ___ у окна.": {
    en: "I see ___ by the window.",
    es: "Veo ___ junto a la ventana.",
    de: "Ich sehe ___ am Fenster.",
  },
  "Я убираю ___ в общежитии.": {
    en: "I tidy ___ in the dorm.",
    es: "Ordeno ___ en la residencia.",
    de: "Ich räume ___ im Wohnheim auf.",
  },
  "Откройте ___ 10.": {
    en: "Open ___ 10.",
    es: "Abran ___ 10.",
    de: "Öffnen Sie ___ 10.",
  },
  "Она смотрит ___.": {
    en: "She looks at ___.",
    es: "Ella mira ___.",
    de: "Sie betrachtet ___.",
  },
  "Я читаю книга.": {
    en: "Case: книга is not the accusative a direct object needs.",
    es: "Caso: книга no está en el acusativo que pide un objeto directo.",
    de: "Kasus: книга steht nicht im Akkusativ, den ein direktes Objekt braucht.",
  },
  "Она пишет письма.": {
    en: "Number: the object is plural. This line is about one letter, in the accusative.",
    es: "Número: el objeto va en plural. La frase habla de una sola carta, en acusativo.",
    de: "Zahl: das Objekt steht im Plural. Der Satz meint einen Brief, im Akkusativ.",
  },
  "Мы делаем упражнении.": {
    en: "Case: упражнении is not the accusative of a direct object.",
    es: "Caso: упражнении no es el acusativo de un objeto directo.",
    de: "Kasus: упражнении ist nicht der Akkusativ eines direkten Objekts.",
  },
  "Он задаёт вопросы?": {
    en: "Number: the object is plural. The line asks about one question.",
    es: "Número: el objeto va en plural. La frase pregunta por una sola pregunta.",
    de: "Zahl: das Objekt steht im Plural. Es geht um eine Frage.",
  },
  "Я знаю ответа.": {
    en: "Case: ответа is not the accusative of a direct object.",
    es: "Caso: ответа no está en el acusativo del objeto directo.",
    de: "Kasus: ответа steht nicht im Akkusativ des direkten Objekts.",
  },
  "Они видят друг.": {
    en: "Case: друг is not the accusative used for a person you see.",
    es: "Caso: друг no está en el acusativo de una persona a la que se ve.",
    de: "Kasus: друг steht nicht im Akkusativ einer Person, die man sieht.",
  },
  "Я жду преподаватель.": {
    en: "Case: преподаватель is not the accusative of the person you are waiting for.",
    es: "Caso: преподаватель no está en el acusativo de la persona a la que se espera.",
    de: "Kasus: преподаватель steht nicht im Akkusativ der Person, auf die man wartet.",
  },
  "Смотрите на доски.": {
    en: "Case: after на, when you look at something, доски is not the accusative.",
    es: "Caso: tras на, si miras hacia algo, доски no está en acusativo.",
    de: "Kasus: nach на, wenn man etwas ansieht, steht доски nicht im Akkusativ.",
  },
  "Откройте страницы 10.": {
    en: "Number and case: страницы is not one page in the accusative.",
    es: "Número y caso: страницы no es una sola página en acusativo.",
    de: "Zahl und Kasus: страницы ist nicht eine Seite im Akkusativ.",
  },
  "Студент сдаёт задания.": {
    en: "Number: the object is plural. He is handing in one piece of work, in the accusative.",
    es: "Número: el objeto va en plural. Entrega un solo trabajo, en acusativo.",
    de: "Zahl: das Objekt steht im Plural. Er gibt eine Aufgabe ab, im Akkusativ.",
  },
  "Она покупает учебника.": {
    en: "Case: учебника is not the accusative of the thing she buys.",
    es: "Caso: учебника no es el acusativo de lo que ella compra.",
    de: "Kasus: учебника ist nicht der Akkusativ dessen, was sie kauft.",
  },
  "Мы повторяем слова?": {
    en: "Number: the object is plural, and the line is a statement about one word, not a question.",
    es: "Número: el objeto va en plural, y la frase es una afirmación sobre una sola palabra, no una pregunta.",
    de: "Zahl: das Objekt steht im Plural, und der Satz ist eine Aussage über ein Wort, keine Frage.",
  },
  "Я перевожу текстa.": {
    en: "Spelling and case: the object ending uses a non-Russian letter and is not the accusative.",
    es: "Ortografía y caso: la terminación del objeto usa una letra que no es rusa y no es acusativo.",
    de: "Rechtschreibung und Kasus: die Endung des Objekts nutzt einen Buchstaben, der nicht russisch ist, und ist kein Akkusativ.",
  },
  "Ты видишь студент?": {
    en: "Case: студент is not the accusative of a person you see.",
    es: "Caso: студент no está en el acusativo de una persona a la que ves.",
    de: "Kasus: студент steht nicht im Akkusativ einer Person, die du siehst.",
  },
  "Я знаю однокурсник.": {
    en: "Case: однокурсник is not the accusative of a person you know.",
    es: "Caso: однокурсник no está en el acusativo de una persona a la que conoces.",
    de: "Kasus: однокурсник steht nicht im Akkusativ einer Person, die du kennst.",
  },
  "Он убирает комнаты.": {
    en: "Number: the object is plural. He is tidying one room, in the accusative.",
    es: "Número: el objeto va en plural. Ordena una sola habitación, en acusativo.",
    de: "Zahl: das Objekt steht im Plural. Er räumt ein Zimmer auf, im Akkusativ.",
  },
  "Я ищу ручка.": {
    en: "Case: ручка is not the accusative of the thing you are looking for.",
    es: "Caso: ручка no está en el acusativo de lo que buscas.",
    de: "Kasus: ручка steht nicht im Akkusativ dessen, wonach du suchst.",
  },
  "Она открывает тетради.": {
    en: "Number and case: тетради is not one notebook in the accusative.",
    es: "Número y caso: тетради no es un solo cuaderno en acusativo.",
    de: "Zahl und Kasus: тетради ist nicht ein Heft im Akkusativ.",
  },
  "Мы слушаем преподаватель.": {
    en: "Case: преподаватель is not the accusative of the person you listen to.",
    es: "Caso: преподаватель no está en el acusativo de la persona a la que escuchamos.",
    de: "Kasus: преподаватель steht nicht im Akkusativ der Person, der wir zuhören.",
  },
  "Я вижу столы у окна.": {
    en: "Number: the object is plural. You see one table by the window, in the accusative.",
    es: "Número: el objeto va en plural. Ves una sola mesa junto a la ventana, en acusativo.",
    de: "Zahl: das Objekt steht im Plural. Du siehst einen Tisch am Fenster, im Akkusativ.",
  },
  "Я / читаю / книгу": {
    en: "Say that you are reading a book.",
    es: "Di que lees un libro.",
    de: "Sag, dass du ein Buch liest.",
  },
  "Она / пишет / письмо": {
    en: "Say that she is writing a letter.",
    es: "Di que ella escribe una carta.",
    de: "Sag, dass sie einen Brief schreibt.",
  },
  "Мы / делаем / упражнение": {
    en: "Say that we are doing an exercise.",
    es: "Di que hacemos un ejercicio.",
    de: "Sag, dass wir eine Übung machen.",
  },
  "Он / задаёт / вопрос": {
    en: "Say that he asks a question.",
    es: "Di que él hace una pregunta.",
    de: "Sag, dass er eine Frage stellt.",
  },
  "Я / знаю / ответ": {
    en: "Say that you know the answer.",
    es: "Di que sabes la respuesta.",
    de: "Sag, dass du die Antwort weißt.",
  },
  "Они / видят / друга": {
    en: "Say that they see a friend.",
    es: "Di que ven a un amigo.",
    de: "Sag, dass sie einen Freund sehen.",
  },
  "Я / жду / преподавателя": {
    en: "Say that you are waiting for the teacher.",
    es: "Di que esperas al profesor.",
    de: "Sag, dass du auf die Lehrkraft wartest.",
  },
  "Откройте / страницу / 10": {
    en: "Ask someone to open page 10.",
    es: "Pide que abran la página 10.",
    de: "Bitte darum, Seite 10 aufzuschlagen.",
  },
  "Студент / сдаёт / задание": {
    en: "Say that the student hands in the assignment.",
    es: "Di que el estudiante entrega la tarea.",
    de: "Sag, dass der Student die Aufgabe abgibt.",
  },
  "Она / покупает / учебник": {
    en: "Say that she is buying a textbook.",
    es: "Di que ella compra un libro de texto.",
    de: "Sag, dass sie ein Lehrbuch kauft.",
  },
  "Мы / повторяем / слово": {
    en: "Say that we repeat a word.",
    es: "Di que repetimos una palabra.",
    de: "Sag, dass wir ein Wort wiederholen.",
  },
  "Я / перевожу / текст": {
    en: "Say that you are translating the text.",
    es: "Di que traduces el texto.",
    de: "Sag, dass du den Text übersetzt.",
  },
  "Ты / видишь / студента": {
    en: "Say that you see a student.",
    es: "Di que ves a un estudiante.",
    de: "Sag, dass du einen Studenten siehst.",
  },
  "Я / знаю / однокурсника": {
    en: "Say that you know a classmate.",
    es: "Di que conoces a un compañero de curso.",
    de: "Sag, dass du einen Kommilitonen kennst.",
  },
  "Он / убирает / комнату": {
    en: "Say that he tidies the room.",
    es: "Di que él ordena la habitación.",
    de: "Sag, dass er das Zimmer aufräumt.",
  },
  "Я / ищу / ручку": {
    en: "Say that you are looking for a pen.",
    es: "Di que buscas un bolígrafo.",
    de: "Sag, dass du einen Stift suchst.",
  },
  "Она / открывает / тетрадь": {
    en: "Say that she opens a notebook.",
    es: "Di que ella abre un cuaderno.",
    de: "Sag, dass sie ein Heft aufmacht.",
  },
  "Мы / слушаем / преподавателя": {
    en: "Say that we are listening to the teacher.",
    es: "Di que escuchamos al profesor.",
    de: "Sag, dass wir der Lehrkraft zuhören.",
  },
  "Я / вижу / стол / у / окна": {
    en: "Say that you see a table by the window.",
    es: "Di que ves una mesa junto a la ventana.",
    de: "Sag, dass du einen Tisch am Fenster siehst.",
  },

  // Ch. 6 — A day at university
  "___ начинается в девять.": {
    en: "___ starts at nine.",
    es: "___ empieza a las nueve.",
    de: "___ beginnt um neun.",
  },
  "Преподаватель ___ правило.": {
    en: "The teacher ___ the rule.",
    es: "El profesor ___ la regla.",
    de: "Die Lehrkraft ___ die Regel.",
  },
  "Мы ___ в университете.": {
    en: "We ___ at the university.",
    es: "Nosotros ___ en la universidad.",
    de: "Wir ___ an der Universität.",
  },
  "Сейчас ___.": {
    en: "Right now it is ___.",
    es: "Ahora es ___.",
    de: "Jetzt ist ___.",
  },
  "Студент ___ домашнее задание.": {
    en: "The student ___ the homework.",
    es: "El estudiante ___ los deberes.",
    de: "Der Student ___ die Hausaufgabe.",
  },
  "Я ___ ответ на доске.": {
    en: "I ___ the answer on the board.",
    es: "Yo ___ la respuesta en la pizarra.",
    de: "Ich ___ die Antwort an der Tafel.",
  },
  "Они ___ лекцию.": {
    en: "They ___ the lecture.",
    es: "Ellos ___ la clase.",
    de: "Sie ___ die Vorlesung.",
  },
  "Вы ___ расписание?": {
    en: "Do you ___ the timetable?",
    es: "¿Usted ___ el horario?",
    de: "Sie ___ den Stundenplan?",
  },
  "Где ___?": {
    en: "Where is ___?",
    es: "¿Dónde está ___?",
    de: "Wo ist ___?",
  },
  "Извините, можно ___?": {
    en: "Excuse me, may I have a ___?",
    es: "Disculpe, ¿se puede ___?",
    de: "Entschuldigung, geht ___?",
  },
  "Мы в ___ 305.": {
    en: "We are in ___ 305.",
    es: "Estamos en ___ 305.",
    de: "Wir sind in ___ 305.",
  },
  "Пара ___ в два.": {
    en: "The class ___ at two.",
    es: "La clase ___ a las dos.",
    de: "Der Kurs ___ um zwei.",
  },
  "Студенты ___ в библиотеке.": {
    en: "The students ___ in the library.",
    es: "Los estudiantes ___ en la biblioteca.",
    de: "Die Studierenden ___ in der Bibliothek.",
  },
  "Я ___ текст вслух.": {
    en: "I ___ the text aloud.",
    es: "Yo ___ el texto en voz alta.",
    de: "Ich ___ den Text laut.",
  },
  "Преподаватель ___ слова.": {
    en: "The teacher ___ the words.",
    es: "El profesor ___ las palabras.",
    de: "Die Lehrkraft ___ die Wörter.",
  },
  "Мы ___ группу после занятия.": {
    en: "We ___ the group after class.",
    es: "Nosotros ___ al grupo después de la clase.",
    de: "Wir ___ die Gruppe nach dem Unterricht.",
  },
  "Он ___ в деканат.": {
    en: "He ___ to the dean’s office.",
    es: "Él ___ al decanato.",
    de: "Er ___ ins Dekanat.",
  },
  "На семинаре мы ___ упражнение.": {
    en: "In the seminar we ___ an exercise.",
    es: "En el seminario nosotros ___ un ejercicio.",
    de: "Im Seminar ___ wir eine Übung.",
  },
  "___ , пожалуйста, ещё раз.": {
    en: "___, please, one more time.",
    es: "___, por favor, otra vez.",
    de: "___, bitte, noch einmal.",
  },
  "Сегодня у меня ___ по грамматике.": {
    en: "Today I have ___ in grammar.",
    es: "Hoy tengo ___ de gramática.",
    de: "Heute habe ich ___ in Grammatik.",
  },
  "Занятия начинается в девять.": {
    en: "Agreement: the subject and the verb do not match in number. The line is about one class.",
    es: "Concordancia: el sujeto y el verbo no coinciden en número. Se habla de una sola clase.",
    de: "Kongruenz: Subjekt und Verb passen in der Zahl nicht zusammen. Es geht um einen Kurs.",
  },
  "Преподаватель объяснять правило.": {
    en: "Agreement: the verb is an infinitive and does not match the teacher.",
    es: "Concordancia: el verbo está en infinitivo y no concuerda con el profesor.",
    de: "Kongruenz: das Verb steht im Infinitiv und passt nicht zur Lehrkraft.",
  },
  "Мы учится в университете.": {
    en: "Agreement: the verb ending does not match мы.",
    es: "Concordancia: la terminación del verbo no concuerda con мы.",
    de: "Kongruenz: die Endung des Verbs passt nicht zu мы.",
  },
  "Сейчас перемены.": {
    en: "Number: the noun is plural. The sentence means one break between classes.",
    es: "Número: el sustantivo va en plural. La frase habla de un solo recreo.",
    de: "Zahl: das Nomen steht im Plural. Gemeint ist eine Pause.",
  },
  "Студент делаю задание.": {
    en: "Agreement: the verb ending matches “I,” not студент.",
    es: "Concordancia: la terminación es de «yo», no de студент.",
    de: "Kongruenz: die Endung ist die von „ich“, nicht die von студент.",
  },
  "Я пишет ответ.": {
    en: "Agreement: the verb does not match я.",
    es: "Concordancia: el verbo no concuerda con я.",
    de: "Kongruenz: das Verb passt nicht zu я.",
  },
  "Они слушаю лекцию.": {
    en: "Agreement: the verb does not match они.",
    es: "Concordancia: el verbo no concuerda con они.",
    de: "Kongruenz: das Verb passt nicht zu они.",
  },
  "Вы смотрю расписание?": {
    en: "Agreement: the verb does not match вы.",
    es: "Concordancia: el verbo no concuerda con вы.",
    de: "Kongruenz: das Verb passt nicht zu вы.",
  },
  "Где расписания?": {
    en: "Number: the noun is not the one timetable this question is about.",
    es: "Número: el sustantivo no es el único horario del que trata la pregunta.",
    de: "Zahl: das Nomen ist nicht der eine Stundenplan, nach dem hier gefragt wird.",
  },
  "Извините, можно вопросы?": {
    en: "Number: the request names more than one. It is a request for a single question.",
    es: "Número: el ruego nombra más de una. Se pide una sola pregunta.",
    de: "Zahl: die Bitte nennt mehrere. Es geht um eine einzige Frage.",
  },
  "Мы в аудитория 305.": {
    en: "Case: after в, for where you are, аудитория is not in the prepositional.",
    es: "Caso: tras в, para decir dónde estamos, аудитория no va en preposicional.",
    de: "Kasus: nach в, für den Ort, an dem wir sind, steht аудитория nicht im Präpositiv.",
  },
  "Пара начинаются в два.": {
    en: "Agreement: the verb is plural and the subject пара is singular.",
    es: "Concordancia: el verbo va en plural y el sujeto пара es singular.",
    de: "Kongruenz: das Verb steht im Plural, das Subjekt пара ist Singular.",
  },
  "Студенты работаю в библиотеке.": {
    en: "Agreement: the verb does not match the plural студенты.",
    es: "Concordancia: el verbo no concuerda con el plural студенты.",
    de: "Kongruenz: das Verb passt nicht zum Plural студенты.",
  },
  "Я читает текст.": {
    en: "Agreement: the verb does not match я.",
    es: "Concordancia: el verbo no concuerda con я.",
    de: "Kongruenz: das Verb passt nicht zu я.",
  },
  "Преподаватель повторяю слова.": {
    en: "Agreement: the verb ending matches “I,” not the teacher.",
    es: "Concordancia: la terminación es de «yo», no del profesor.",
    de: "Kongruenz: die Endung ist die von „ich“, nicht die der Lehrkraft.",
  },
  "Он идут в деканат.": {
    en: "Agreement: the verb is plural and does not match он.",
    es: "Concordancia: el verbo va en plural y no concuerda con он.",
    de: "Kongruenz: das Verb steht im Plural und passt nicht zu он.",
  },
  "На семинаре мы делаем упражнения?": {
    en: "Number: the object is plural, and the line is a statement about one exercise, not a question.",
    es: "Número: el objeto va en plural, y la frase afirma un solo ejercicio; no es una pregunta.",
    de: "Zahl: das Objekt steht im Plural, und der Satz ist eine Aussage über eine Übung, keine Frage.",
  },
  "Объясните, пожалуйста, ещё.": {
    en: "Set phrase: ещё by itself is not the full fixed request for “one more time.”",
    es: "Fórmula fija: ещё solo no es el ruego completo de «una vez más».",
    de: "Feste Wendung: ещё allein ist nicht die volle Bitte um „noch einmal“.",
  },
  "Сегодня у меня пары по грамматике.": {
    en: "Number: the noun is plural. Today there is one grammar class.",
    es: "Número: el sustantivo va en plural. Hoy hay una sola clase de gramática.",
    de: "Zahl: das Nomen steht im Plural. Heute ist es ein Grammatikkurs.",
  },
  "Мы учимся на университете.": {
    en: "Case: the phrase “at the university” uses the wrong preposition and the wrong case.",
    es: "Caso: la frase de «en la universidad» lleva una preposición y un caso que no tocan.",
    de: "Kasus: die Angabe „an der Universität“ steht mit der falschen Präposition und im falschen Kasus.",
  },
  "Занятие / начинается / в / девять": {
    en: "Say that the class starts at nine.",
    es: "Di que la clase empieza a las nueve.",
    de: "Sag, dass der Unterricht um neun beginnt.",
  },
  "Преподаватель / объясняет / правило": {
    en: "Say that the teacher explains the rule.",
    es: "Di que el profesor explica la regla.",
    de: "Sag, dass die Lehrkraft die Regel erklärt.",
  },
  "Мы / учимся / в / университете": {
    en: "Say that we study at the university.",
    es: "Di que estudiamos en la universidad.",
    de: "Sag, dass wir an der Universität studieren.",
  },
  "Сейчас / перемена": {
    en: "Say that it is the break right now.",
    es: "Di que ahora es el recreo.",
    de: "Sag, dass jetzt Pause ist.",
  },
  "Студент / делает / домашнее / задание": {
    en: "Say that the student is doing the homework.",
    es: "Di que el estudiante hace los deberes.",
    de: "Sag, dass der Student die Hausaufgabe macht.",
  },
  "Я / пишу / ответ / на / доске": {
    en: "Say that you are writing the answer on the board.",
    es: "Di que escribes la respuesta en la pizarra.",
    de: "Sag, dass du die Antwort an die Tafel schreibst.",
  },
  "Они / слушают / лекцию": {
    en: "Say that they are listening to the lecture.",
    es: "Di que escuchan la clase.",
    de: "Sag, dass sie der Vorlesung zuhören.",
  },
  "Где / расписание": {
    en: "Ask where the timetable is.",
    es: "Pregunta dónde está el horario.",
    de: "Frag, wo der Stundenplan ist.",
  },
  "Извините / можно / вопрос": {
    en: "Politely ask whether you may ask a question.",
    es: "Pide permiso, con educación, para hacer una pregunta.",
    de: "Frag höflich, ob du eine Frage stellen darfst.",
  },
  "Мы / в / аудитории / 305": {
    en: "Say that we are in room 305.",
    es: "Di que estamos en el aula 305.",
    de: "Sag, dass wir in Hörsaal 305 sind.",
  },
  "Пара / начинается / в / два": {
    en: "Say that the class starts at two.",
    es: "Di que la clase empieza a las dos.",
    de: "Sag, dass der Kurs um zwei beginnt.",
  },
  "Студенты / работают / в / библиотеке": {
    en: "Say that the students are working in the library.",
    es: "Di que los estudiantes trabajan en la biblioteca.",
    de: "Sag, dass die Studierenden in der Bibliothek arbeiten.",
  },
  "Я / читаю / текст / вслух": {
    en: "Say that you read the text aloud.",
    es: "Di que lees el texto en voz alta.",
    de: "Sag, dass du den Text laut liest.",
  },
  "Преподаватель / повторяет / слова": {
    en: "Say that the teacher repeats the words.",
    es: "Di que el profesor repite las palabras.",
    de: "Sag, dass die Lehrkraft die Wörter wiederholt.",
  },
  "Объясните / пожалуйста / ещё / раз": {
    en: "Politely ask the teacher to explain once more.",
    es: "Pide al profesor, con educación, que lo explique otra vez.",
    de: "Bitte die Lehrkraft höflich, es noch einmal zu erklären.",
  },
  "Сегодня / у / меня / пара / по / грамматике": {
    en: "Say that today you have a grammar class.",
    es: "Di que hoy tienes clase de gramática.",
    de: "Sag, dass du heute Grammatik hast.",
  },
  "Он / идёт / в / деканат": {
    en: "Say that he is going to the dean’s office.",
    es: "Di que él va al decanato.",
    de: "Sag, dass er ins Dekanat geht.",
  },
  "На / семинаре / мы / делаем / упражнение": {
    en: "Say that in the seminar we do an exercise.",
    es: "Di que en el seminario hacemos un ejercicio.",
    de: "Sag, dass wir im Seminar eine Übung machen.",
  },
  "Вы / смотрите / расписание": {
    en: "Say that you are looking at the timetable.",
    es: "Di que usted mira el horario.",
    de: "Sag, dass Sie den Stundenplan ansehen.",
  },
  "Мы / встречаем / группу / после / занятия": {
    en: "Say that we meet the group after class.",
    es: "Di que recibimos al grupo después de la clase.",
    de: "Sag, dass wir die Gruppe nach dem Unterricht abholen.",
  },

  // Ch. 7 — Prepositional
  "Мы учимся в ___.": {
    en: "We study at ___.",
    es: "Estudiamos en ___.",
    de: "Wir studieren in ___.",
  },
  "Я живу в ___.": {
    en: "I live in ___.",
    es: "Vivo en ___.",
    de: "Ich wohne in ___.",
  },
  "Студенты в ___.": {
    en: "The students are in ___.",
    es: "Los estudiantes están en ___.",
    de: "Die Studierenden sind in ___.",
  },
  "Встретимся в ___.": {
    en: "Let’s meet at ___.",
    es: "Quedamos en ___.",
    de: "Treffen wir uns in ___.",
  },
  "Много парков в ___.": {
    en: "There are many parks in ___.",
    es: "Hay muchos parques en ___.",
    de: "Es gibt viele Parks in ___.",
  },
  "Университет в ___.": {
    en: "The university is in ___.",
    es: "La universidad está en ___.",
    de: "Die Universität ist in ___.",
  },
  "Учебник на ___.": {
    en: "The textbook is on ___.",
    es: "El libro está sobre ___.",
    de: "Das Lehrbuch liegt auf ___.",
  },
  "Текст на ___.": {
    en: "The text is on ___.",
    es: "El texto está en ___.",
    de: "Der Text steht auf ___.",
  },
  "Он на ___.": {
    en: "He is at ___.",
    es: "Él está en ___.",
    de: "Er ist in ___.",
  },
  "Мы говорим об ___.": {
    en: "We are talking about ___.",
    es: "Hablamos de ___.",
    de: "Wir sprechen über ___.",
  },
  "Расскажите об ___.": {
    en: "Tell us about ___.",
    es: "Cuéntenos sobre ___.",
    de: "Erzählen Sie von ___.",
  },
  "Лекция о ___.": {
    en: "The lecture is about ___.",
    es: "La clase trata de ___.",
    de: "Die Vorlesung handelt von ___.",
  },
  "Ключ в ___.": {
    en: "The key is in ___.",
    es: "La llave está en ___.",
    de: "Der Schlüssel ist in ___.",
  },
  "Обед в ___.": {
    en: "Lunch is in ___.",
    es: "El almuerzo es en ___.",
    de: "Das Mittagessen ist in ___.",
  },
  "Деканат на ___.": {
    en: "The dean’s office is at ___.",
    es: "El decanato está en ___.",
    de: "Das Dekanat ist an ___.",
  },
  "Мало студентов в ___.": {
    en: "There are few students in ___.",
    es: "Hay pocos estudiantes en ___.",
    de: "Es sind wenige Studierende in ___.",
  },
  "Гуляем в ___.": {
    en: "We walk in ___.",
    es: "Paseamos por ___.",
    de: "Wir gehen in ___ spazieren.",
  },
  "Расписание в ___.": {
    en: "The timetable is on ___.",
    es: "El horario está en ___.",
    de: "Der Stundenplan ist in ___.",
  },
  "Жду автобус на ___.": {
    en: "I wait for the bus at ___.",
    es: "Espero el autobús en ___.",
    de: "Ich warte an ___ auf den Bus.",
  },
  "Я живу в общежитие.": {
    en: "Case: after в, for where you live, общежитие is not in the prepositional.",
    es: "Caso: tras в, para el lugar donde vives, общежитие no va en preposicional.",
    de: "Kasus: nach в, für den Ort, an dem du wohnst, steht общежитие nicht im Präpositiv.",
  },
  "Мы в библиотека.": {
    en: "Case: after в, библиотека is not in the prepositional.",
    es: "Caso: tras в, библиотека no va en preposicional.",
    de: "Kasus: nach в steht библиотека nicht im Präpositiv.",
  },
  "Учебник на стол.": {
    en: "Case: after на, for where the book is, стол is not in the prepositional.",
    es: "Caso: tras на, para decir dónde está el libro, стол no va en preposicional.",
    de: "Kasus: nach на, für den Ort des Buchs, steht стол nicht im Präpositiv.",
  },
  "Текст на доску.": {
    en: "Case: after на, for where the text is, доску is not in the prepositional.",
    es: "Caso: tras на, para decir dónde está el texto, доску no va en preposicional.",
    de: "Kasus: nach на, für den Ort des Textes, steht доску nicht im Präpositiv.",
  },
  "Он на занятие.": {
    en: "Case: after на, for where he is, занятие is not in the prepositional.",
    es: "Caso: tras на, para decir dónde está él, занятие no va en preposicional.",
    de: "Kasus: nach на, für den Ort, an dem er ist, steht занятие nicht im Präpositiv.",
  },
  "Мы говорим о экзамен.": {
    en: "Case: the “about” phrase uses the wrong form of the preposition, and экзамен is not in the prepositional.",
    es: "Caso: la frase de «sobre» lleva mal la preposición, y экзамен no va en preposicional.",
    de: "Kasus: die Angabe „über“ hat die falsche Präpositionsform, und экзамен steht nicht im Präpositiv.",
  },
  "Университет в Москва.": {
    en: "Case: after в, Москва is not in the prepositional.",
    es: "Caso: tras в, Москва no va en preposicional.",
    de: "Kasus: nach в steht Москва nicht im Präpositiv.",
  },
  "Встретимся на кафе.": {
    en: "Preposition: на is the wrong choice for meeting at a café. кафе itself does not change.",
    es: "Preposición: на no es la que toca para quedar en un café. кафе no cambia de forma.",
    de: "Präposition: на passt nicht, wenn man sich in einem Café trifft. кафе selbst bleibt unverändert.",
  },
  "В город много парков.": {
    en: "Case: after в, город is not in the prepositional.",
    es: "Caso: tras в, город no va en preposicional.",
    de: "Kasus: nach в steht город nicht im Präpositiv.",
  },
  "Ключ в комната.": {
    en: "Case: after в, комната is not in the prepositional.",
    es: "Caso: tras в, комната no va en preposicional.",
    de: "Kasus: nach в steht комната nicht im Präpositiv.",
  },
  "Обед в столовая.": {
    en: "Case: after в, столовая is not in the prepositional.",
    es: "Caso: tras в, столовая no va en preposicional.",
    de: "Kasus: nach в steht столовая nicht im Präpositiv.",
  },
  "Деканат на факультет.": {
    en: "Case: after на, факультет is not in the prepositional.",
    es: "Caso: tras на, факультет no va en preposicional.",
    de: "Kasus: nach на steht факультет nicht im Präpositiv.",
  },
  "Мы учимся в университет.": {
    en: "Case: after в, университет is not in the prepositional.",
    es: "Caso: tras в, университет no va en preposicional.",
    de: "Kasus: nach в steht университет nicht im Präpositiv.",
  },
  "Студенты в аудитория 12.": {
    en: "Case: after в, аудитория is not in the prepositional.",
    es: "Caso: tras в, аудитория no va en preposicional.",
    de: "Kasus: nach в steht аудитория nicht im Präpositiv.",
  },
  "Лекция о русский язык.": {
    en: "Case: after о, the adjective and the noun are not in the prepositional.",
    es: "Caso: tras о, el adjetivo y el sustantivo no van en preposicional.",
    de: "Kasus: nach о stehen Adjektiv und Nomen nicht im Präpositiv.",
  },
  "Расскажите о университет.": {
    en: "Case: the “about” phrase uses the wrong form of the preposition, and университет is not in the prepositional.",
    es: "Caso: la frase de «sobre» lleva mal la preposición, y университет no va en preposicional.",
    de: "Kasus: die Angabe „über“ hat die falsche Präpositionsform, und университет steht nicht im Präpositiv.",
  },
  "Мало студентов в класс.": {
    en: "Case: after в, класс is not in the prepositional.",
    es: "Caso: tras в, класс no va en preposicional.",
    de: "Kasus: nach в steht класс nicht im Präpositiv.",
  },
  "Гуляем в парк.": {
    en: "Case: after в, for where you walk, парк is not in the prepositional.",
    es: "Caso: tras в, para el lugar del paseo, парк no va en preposicional.",
    de: "Kasus: nach в, für den Ort des Spaziergangs, steht парк nicht im Präpositiv.",
  },
  "Расписание в интернет.": {
    en: "Case: after в, интернет is not in the prepositional.",
    es: "Caso: tras в, интернет no va en preposicional.",
    de: "Kasus: nach в steht интернет nicht im Präpositiv.",
  },
  "Жду на остановка.": {
    en: "Case: after на, остановка is not in the prepositional.",
    es: "Caso: tras на, остановка no va en preposicional.",
    de: "Kasus: nach на steht остановка nicht im Präpositiv.",
  },
  "Студенты / в / библиотеке": {
    en: "Say that the students are in the library.",
    es: "Di que los estudiantes están en la biblioteca.",
    de: "Sag, dass die Studierenden in der Bibliothek sind.",
  },
  "Мы / в / аудитории / 12": {
    en: "Say that we are in room 12.",
    es: "Di que estamos en el aula 12.",
    de: "Sag, dass wir in Hörsaal 12 sind.",
  },
  "Встретимся / в / кафе": {
    en: "Suggest meeting at a café.",
    es: "Propón quedar en un café.",
    de: "Schlag vor, sich in einem Café zu treffen.",
  },
  "В / городе / много / парков": {
    en: "Say that there are many parks in the city.",
    es: "Di que en la ciudad hay muchos parques.",
    de: "Sag, dass es in der Stadt viele Parks gibt.",
  },
  "Университет / в / Москве": {
    en: "Say that the university is in Moscow.",
    es: "Di que la universidad está en Moscú.",
    de: "Sag, dass die Universität in Moskau ist.",
  },
  "Учебник / на / столе": {
    en: "Say that the textbook is on the table.",
    es: "Di que el libro está sobre la mesa.",
    de: "Sag, dass das Lehrbuch auf dem Tisch liegt.",
  },
  "Текст / на / доске": {
    en: "Say that the text is on the board.",
    es: "Di que el texto está en la pizarra.",
    de: "Sag, dass der Text an der Tafel steht.",
  },
  "Он / на / занятии": {
    en: "Say that he is in class.",
    es: "Di que él está en clase.",
    de: "Sag, dass er im Unterricht ist.",
  },
  "Мы / говорим / об / экзамене": {
    en: "Say that we are talking about the exam.",
    es: "Di que hablamos del examen.",
    de: "Sag, dass wir über die Prüfung sprechen.",
  },
  "Расскажите / об / университете": {
    en: "Ask someone to tell you about the university.",
    es: "Pide que te cuenten algo de la universidad.",
    de: "Bitte jemanden, von der Universität zu erzählen.",
  },
  "Лекция / о / русском / языке": {
    en: "Say that the lecture is about the Russian language.",
    es: "Di que la clase trata de la lengua rusa.",
    de: "Sag, dass die Vorlesung von der russischen Sprache handelt.",
  },
  "Ключ / в / комнате": {
    en: "Say that the key is in the room.",
    es: "Di que la llave está en la habitación.",
    de: "Sag, dass der Schlüssel im Zimmer ist.",
  },
  "Обед / в / столовой": {
    en: "Say that lunch is in the cafeteria.",
    es: "Di que el almuerzo es en el comedor.",
    de: "Sag, dass das Mittagessen in der Mensa ist.",
  },
  "Деканат / на / факультете": {
    en: "Say that the dean’s office is in the faculty.",
    es: "Di que el decanato está en la facultad.",
    de: "Sag, dass das Dekanat an der Fakultät ist.",
  },
  "Мало / студентов / в / классе": {
    en: "Say that there are few students in the classroom.",
    es: "Di que hay pocos estudiantes en el aula.",
    de: "Sag, dass wenige Studierende im Klassenzimmer sind.",
  },
  "Гуляем / в / парке": {
    en: "Say that we are walking in the park.",
    es: "Di que paseamos por el parque.",
    de: "Sag, dass wir im Park spazieren gehen.",
  },
  "Расписание / в / интернете": {
    en: "Say that the timetable is on the internet.",
    es: "Di que el horario está en internet.",
    de: "Sag, dass der Stundenplan im Internet steht.",
  },
  "Жду / на / остановке": {
    en: "Say that you are waiting at the stop.",
    es: "Di que esperas en la parada.",
    de: "Sag, dass du an der Haltestelle wartest.",
  },

  // Ch. 8 — Numbers and time
  "Сейчас ___ час.": {
    en: "It is now ___ hour.",
    es: "Ahora es ___ hora.",
    de: "Jetzt ist es ___ Stunde.",
  },
  "Сейчас ___ часа.": {
    en: "It is now ___ hours.",
    es: "Ahora son ___ horas.",
    de: "Jetzt sind es ___ Stunden.",
  },
  "Занятие в ___ часов.": {
    en: "Class is at ___ o’clock.",
    es: "La clase es a las ___.",
    de: "Der Unterricht ist um ___ Uhr.",
  },
  "___ у меня тест.": {
    en: "___ I have a test.",
    es: "___ tengo una prueba.",
    de: "___ habe ich einen Test.",
  },
  "___ будет лекция.": {
    en: "___ there will be a lecture.",
    es: "___ habrá una clase magistral.",
    de: "___ gibt es eine Vorlesung.",
  },
  "___ сколько начинается пара?": {
    en: "___ what time does the class start?",
    es: "¿___ a qué hora empieza la clase?",
    de: "___ um wie viel Uhr beginnt der Kurs?",
  },
  "Пара начинается ___ девять.": {
    en: "The class starts ___ nine.",
    es: "La clase empieza ___ las nueve.",
    de: "Der Kurs beginnt ___ neun.",
  },
  "Утром первая пара ___ восемь.": {
    en: "In the morning the first class is ___ eight.",
    es: "Por la mañana la primera clase es ___ las ocho.",
    de: "Morgens ist der erste Kurs ___ acht.",
  },
  "Сейчас ___ минут.": {
    en: "It is now ___ minutes.",
    es: "Ahora son ___ minutos.",
    de: "Jetzt sind es ___ Minuten.",
  },
  "Мы опаздываем на ___ минут.": {
    en: "We are ___ minutes late.",
    es: "Llegamos con ___ minutos de retraso.",
    de: "Wir haben ___ Minuten Verspätung.",
  },
  "___ у меня семинар.": {
    en: "___ I have a seminar.",
    es: "___ tengo seminario.",
    de: "___ habe ich Seminar.",
  },
  "С ___ до пяти консультация.": {
    en: "Office hours run from ___ to five.",
    es: "La consulta es desde ___ hasta las cinco.",
    de: "Die Sprechstunde geht von ___ bis fünf.",
  },
  "Сейчас ровно ___ .": {
    en: "It is now exactly ___.",
    es: "Ahora es exactamente ___.",
    de: "Jetzt ist es genau ___.",
  },
  "Первая пара в ___.": {
    en: "The first class is at ___.",
    es: "La primera clase es a ___.",
    de: "Der erste Kurs ist um ___.",
  },
  "___ часа дня — обед.": {
    en: "___ in the afternoon — lunch.",
    es: "___ de la tarde: el almuerzo.",
    de: "___ Uhr am Tag — das Mittagessen.",
  },
  "Который ___?": {
    en: "Which ___?",
    es: "¿Cuál ___?",
    de: "Der wievielte ___?",
  },
  "Сколько ___?": {
    en: "How much ___?",
    es: "¿Cuánto ___?",
    de: "Wie viel ___?",
  },
  "___ без четверти шесть.": {
    en: "___ quarter to six.",
    es: "___ menos cuarto, las seis.",
    de: "___ Viertel vor sechs.",
  },
  "В ___ я дома.": {
    en: "In the ___ I am at home.",
    es: "En ___ estoy en casa.",
    de: "In ___ bin ich zu Hause.",
  },
  "___ числа экзамен?": {
    en: "___ of the month is the exam?",
    es: "¿___ del mes es el examen?",
    de: "___ des Monats ist die Prüfung?",
  },
  "Сейчас две час.": {
    en: "Agreement: две does not match the gender of час, and час is not the form this numeral takes.",
    es: "Concordancia: две no coincide con el género de час, y час no está en la forma que pide este numeral.",
    de: "Kongruenz: две passt nicht zum Genus von час, und час steht nicht in der Form, die dieses Zahlwort verlangt.",
  },
  "Занятие в девяти часов.": {
    en: "Case: with в for a clock time, the numeral девяти is in the wrong case.",
    es: "Caso: con в para la hora, el numeral девяти no va en el caso que toca.",
    de: "Kasus: bei der Uhrzeit mit в steht die Zahl девяти im falschen Kasus.",
  },
  "Сегодня у меня тесты.": {
    en: "Number: the noun is plural. The sentence is about one test.",
    es: "Número: el sustantivo va en plural. Se habla de una sola prueba.",
    de: "Zahl: das Nomen steht im Plural. Es geht um einen Test.",
  },
  "Завтра будут лекция.": {
    en: "Agreement: the verb is plural and лекция is singular.",
    es: "Concordancia: el verbo va en plural y лекция es singular.",
    de: "Kongruenz: das Verb steht im Plural, und лекция ist Singular.",
  },
  "Во сколько начинается пары?": {
    en: "Number: the verb is singular and the subject is plural.",
    es: "Número: el verbo va en singular y el sujeto en plural.",
    de: "Zahl: das Verb steht im Singular, das Subjekt im Plural.",
  },
  "Сейчас один часа.": {
    en: "Agreement: after “one,” the word for “hour” is not in the form that numeral takes.",
    es: "Concordancia: después de «uno», la palabra de «hora» no está en la forma que pide ese numeral.",
    de: "Kongruenz: nach „eins“ steht das Wort für „Stunde“ nicht in der Form, die das Zahlwort verlangt.",
  },
  "Мы опаздываем на десяти минут.": {
    en: "Case: the numeral after на is in the wrong case. минут can stay.",
    es: "Caso: el numeral tras на no va en el caso que toca. минут puede quedar.",
    de: "Kasus: die Zahl nach на steht im falschen Kasus. минут kann bleiben.",
  },
  "В вечером семинар.": {
    en: "Set phrase: this time-of-day line is not built the way Russian says “in the evening.”",
    es: "Fórmula fija: esta indicación de la hora del día no está armada como el ruso dice «por la tarde».",
    de: "Feste Wendung: diese Tageszeit ist nicht so gebaut, wie man auf Russisch „am Abend“ sagt.",
  },
  "С три до пяти.": {
    en: "Case: the hour after с is not in the genitive. The end time can stay.",
    es: "Caso: la hora después de с no va en genitivo. La hora final puede quedar.",
    de: "Kasus: die Stunde nach с steht nicht im Genitiv. Die Endzeit kann bleiben.",
  },
  "Сейчас ровно двенадцати.": {
    en: "Case: after “exactly,” the hour is in the wrong case.",
    es: "Caso: tras «en punto», la hora no va en el caso que toca.",
    de: "Kasus: nach „genau“ steht die Stunde im falschen Kasus.",
  },
  "Первая пара в пол девятого.": {
    en: "Spelling: the half-hour time is written as two words.",
    es: "Ortografía: la hora y media está escrita en dos palabras.",
    de: "Rechtschreibung: die halbe Stunde steht als zwei Wörter.",
  },
  "Который время?": {
    en: "Set phrase: this way of asking the time uses the wrong noun.",
    es: "Fórmula fija: esta forma de preguntar la hora usa un sustantivo que no es el de la fórmula.",
    de: "Feste Wendung: so nach der Uhrzeit zu fragen nimmt das falsche Nomen.",
  },
  "Сколько час?": {
    en: "Set phrase: the other fixed question about the time uses the wrong noun.",
    es: "Fórmula fija: la otra pregunta hecha por la hora lleva un sustantivo que no toca.",
    de: "Feste Wendung: die andere feste Frage nach der Zeit nimmt das falsche Nomen.",
  },
  "Без четверти шесть часов.": {
    en: "Set phrase: this is not a normal fixed way to tell that time.",
    es: "Fórmula fija: así no se dice esa hora con una expresión hecha.",
    de: "Feste Wendung: so lautet diese Uhrzeit als feste Formel nicht.",
  },
  "Утро я в университете.": {
    en: "Form: утро is not the adverb that means “in the morning.”",
    es: "Forma: утро no es el adverbio de «por la mañana».",
    de: "Form: утро ist nicht das Adverb für „morgens“.",
  },
  "Какое числа экзамен?": {
    en: "Case: какое does not match числа in the question about the date.",
    es: "Caso: какое no concuerda con числа en la pregunta por la fecha.",
    de: "Kasus: какое passt nicht zu числа in der Datumsfrage.",
  },
  "Сейчас пол первого.": {
    en: "Spelling: the half-hour time is written as two words.",
    es: "Ortografía: la hora y media está escrita en dos palabras.",
    de: "Rechtschreibung: die halbe Stunde steht als zwei Wörter.",
  },
  "Сейчас три час.": {
    en: "Agreement: after три, час is not in the form the numeral requires.",
    es: "Concordancia: después de три, час no está en la forma que pide el numeral.",
    de: "Kongruenz: nach три steht час nicht in der Form, die das Zahlwort verlangt.",
  },
  "Занятия начинаются в восьми.": {
    en: "Case: the hour after в is in the wrong case for a clock time.",
    es: "Caso: la hora después de в no va en el caso de decir la hora.",
    de: "Kasus: die Stunde nach в steht nicht im Kasus der Uhrzeit.",
  },
  "Сейчас семь минут десятого часа.": {
    en: "Set phrase: the minutes-past formula is longer than the usual clock expression.",
    es: "Fórmula fija: la fórmula de los minutos es más larga que la expresión habitual.",
    de: "Feste Wendung: die Minutenangabe ist länger als die übliche Uhrzeit.",
  },
  "Который / час": {
    en: "Ask what time it is.",
    es: "Pregunta qué hora es.",
    de: "Frag, wie spät es ist.",
  },
  "Во / сколько / начинается / пара": {
    en: "Ask what time the class starts.",
    es: "Pregunta a qué hora empieza la clase.",
    de: "Frag, um wie viel Uhr der Kurs beginnt.",
  },
  "Занятие / в / девять / часов": {
    en: "Say that class is at nine.",
    es: "Di que la clase es a las nueve.",
    de: "Sag, dass der Unterricht um neun ist.",
  },
  "Сегодня / у / меня / тест": {
    en: "Say that you have a test today.",
    es: "Di que hoy tienes una prueba.",
    de: "Sag, dass du heute einen Test hast.",
  },
  "Завтра / будет / лекция": {
    en: "Say that there will be a lecture tomorrow.",
    es: "Di que mañana habrá una clase magistral.",
    de: "Sag, dass morgen eine Vorlesung ist.",
  },
  "Сейчас / два / часа": {
    en: "Say that it is two o’clock.",
    es: "Di que son las dos.",
    de: "Sag, dass es zwei Uhr ist.",
  },
  "Мы / опаздываем / на / десять / минут": {
    en: "Say that we are ten minutes late.",
    es: "Di que llegamos diez minutos tarde.",
    de: "Sag, dass wir zehn Minuten zu spät sind.",
  },
  "Вечером / у / меня / семинар": {
    en: "Say that you have a seminar in the evening.",
    es: "Di que por la tarde tienes seminario.",
    de: "Sag, dass du abends Seminar hast.",
  },
  "С / трёх / до / пяти / консультация": {
    en: "Say that office hours run from three to five.",
    es: "Di que la consulta es de tres a cinco.",
    de: "Sag, dass die Sprechstunde von drei bis fünf geht.",
  },
  "Сейчас / ровно / двенадцать": {
    en: "Say that it is exactly twelve.",
    es: "Di que son las doce en punto.",
    de: "Sag, dass es genau zwölf ist.",
  },
  "Первая / пара / в / полдевятого": {
    en: "Say that the first class is at half past eight.",
    es: "Di que la primera clase es a las ocho y media.",
    de: "Sag, dass der erste Kurs um halb neun ist.",
  },
  "Сейчас / без / пяти / шесть": {
    en: "Say that it is five minutes to six.",
    es: "Di que son las seis menos cinco.",
    de: "Sag, dass es fünf vor sechs ist.",
  },
  "Сколько / времени": {
    en: "Ask what time it is.",
    es: "Pregunta qué hora es.",
    de: "Frag, wie viel Uhr es ist.",
  },
  "Утром / я / в / университете": {
    en: "Say that in the morning you are at the university.",
    es: "Di que por la mañana estás en la universidad.",
    de: "Sag, dass du morgens an der Universität bist.",
  },
  "Какого / числа / экзамен": {
    en: "Ask on what date the exam is.",
    es: "Pregunta qué día del mes es el examen.",
    de: "Frag, an welchem Datum die Prüfung ist.",
  },
  "Сейчас / полвторого": {
    en: "Say that it is half past one.",
    es: "Di que es la una y media.",
    de: "Sag, dass es halb zwei ist.",
  },
  "Сейчас / четверть / пятого": {
    en: "Say that it is a quarter past four.",
    es: "Di que son las cuatro y cuarto.",
    de: "Sag, dass es Viertel nach vier ist.",
  },
  "Занятия / начинаются / в / восемь": {
    en: "Say that classes start at eight.",
    es: "Di que las clases empiezan a las ocho.",
    de: "Sag, dass der Unterricht um acht beginnt.",
  },
  "Сейчас / три / часа": {
    en: "Say that it is three o’clock.",
    es: "Di que son las tres.",
    de: "Sag, dass es drei Uhr ist.",
  },
  "Сейчас / один / час": {
    en: "Say that it is one o’clock.",
    es: "Di que es la una.",
    de: "Sag, dass es ein Uhr ist.",
  },
};
