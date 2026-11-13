import type { InterfaceLanguage } from "@/types";

/**
 * L1 prompts for German-course translation stems.
 * Keys are the exact Russian question strings.
 * `de` is a paraphrase (or a cue) so the German UI prompt is not the answer.
 */
export type GermanTrL1 = { en: string; es: string; de: string };

export const GERMAN_TR_L1: Record<string, GermanTrL1> = {
  // A1
  "Доброе утро.": {
    en: "Good morning.",
    es: "Buenos días.",
    de: "Ein höflicher Gruß am Morgen.",
  },
  "Добрый день.": {
    en: "Good day.",
    es: "Buen día.",
    de: "Ein höflicher Gruß am Tag.",
  },
  "До свидания.": {
    en: "Goodbye.",
    es: "Adiós.",
    de: "Ein formeller Abschied.",
  },
  "Большое спасибо.": {
    en: "Thank you very much.",
    es: "Muchas gracias.",
    de: "Ein herzlicher Dank.",
  },
  "Я студент.": {
    en: "I am a student.",
    es: "Soy estudiante.",
    de: "Ich studiere an der Hochschule.",
  },
  "У меня есть книга.": {
    en: "I have a book.",
    es: "Tengo un libro.",
    de: "Ich besitze ein Buch.",
  },
  "Она из Берлина.": {
    en: "She is from Berlin.",
    es: "Ella es de Berlín.",
    de: "Sie stammt aus Berlin.",
  },
  "Мы устали.": {
    en: "We are tired.",
    es: "Estamos cansados.",
    de: "Wir sind erschöpft.",
  },
  "Это стол.": {
    en: "This is a table.",
    es: "Esto es una mesa.",
    de: "Hier steht ein Tisch.",
  },
  "Книга новая.": {
    en: "The book is new.",
    es: "El libro es nuevo.",
    de: "Neu ist dieses Buch.",
  },
  "Это лампа.": {
    en: "This is a lamp.",
    es: "Esto es una lámpara.",
    de: "Eine Lampe steht hier.",
  },
  "Мужчина — врач.": {
    en: "The man is a doctor.",
    es: "El hombre es médico.",
    de: "Der Mann arbeitet als Arzt.",
  },
  "Я учу немецкий.": {
    en: "I am learning German.",
    es: "Aprendo alemán.",
    de: "Ich lerne die deutsche Sprache.",
  },
  "Он едет на работу.": {
    en: "He is going to work.",
    es: "Él va al trabajo.",
    de: "Er ist auf dem Weg zum Arbeitsplatz.",
  },
  "Мы едим пиццу.": {
    en: "We are eating pizza.",
    es: "Comemos pizza.",
    de: "Wir nehmen Pizza zu uns.",
  },
  "Ты говоришь по-немецки?": {
    en: "Do you speak German?",
    es: "¿Hablas alemán?",
    de: "Beherrschst du die deutsche Sprache?",
  },
  "Я покупаю яблоко.": {
    en: "I am buying an apple.",
    es: "Compro una manzana.",
    de: "Ich erwerbe einen Apfel.",
  },
  "Она видит фильм.": {
    en: "She sees a film.",
    es: "Ella ve una película.",
    de: "Sie schaut sich einen Film an.",
  },
  "У нас есть кошка.": {
    en: "We have a cat.",
    es: "Tenemos una gata.",
    de: "Eine Katze lebt bei uns.",
  },
  "Он покупает книгу.": {
    en: "He is buying a book.",
    es: "Él compra un libro.",
    de: "Er erwirbt ein Buch.",
  },
  "Где ты живёшь?": {
    en: "Where do you live?",
    es: "¿Dónde vives?",
    de: "Wo ist dein Wohnort?",
  },
  "Сегодня я учу немецкий.": {
    en: "Today I am learning German.",
    es: "Hoy aprendo alemán.",
    de: "Heute beschäftige ich mich mit der deutschen Sprache.",
  },
  "Как тебя зовут?": {
    en: "What is your name?",
    es: "¿Cómo te llamas?",
    de: "Wie ist dein Name?",
  },
  "Это мой брат.": {
    en: "This is my brother.",
    es: "Este es mi hermano.",
    de: "Vor dir steht mein Bruder.",
  },
  "Наша квартира маленькая.": {
    en: "Our apartment is small.",
    es: "Nuestro piso es pequeño.",
    de: "Unsere Wohnung ist nicht groß.",
  },
  "У неё две сестры.": {
    en: "She has two sisters.",
    es: "Ella tiene dos hermanas.",
    de: "Zwei Schwestern gehören zu ihrer Familie.",
  },
  "Его книга новая.": {
    en: "His book is new.",
    es: "Su libro es nuevo.",
    de: "Sein Buch ist nagelneu.",
  },
  "Я умею плавать.": {
    en: "I can swim.",
    es: "Sé nadar.",
    de: "Schwimmen gehört zu meinen Fähigkeiten.",
  },
  "Ты должен учиться.": {
    en: "You have to study.",
    es: "Tienes que estudiar.",
    de: "Lernen ist für dich Pflicht.",
  },
  "Мы хотим пить кофе.": {
    en: "We want to drink coffee.",
    es: "Queremos tomar café.",
    de: "Wir möchten Kaffee trinken.",
  },
  "Ему нельзя курить здесь.": {
    en: "He is not allowed to smoke here.",
    es: "No le está permitido fumar aquí.",
    de: "Rauchen ist ihm an diesem Ort verboten.",
  },
  "Я встаю в семь.": {
    en: "I get up at seven.",
    es: "Me levanto a las siete.",
    de: "Um sieben verlasse ich das Bett.",
  },
  "Поезд прибывает в девять.": {
    en: "The train arrives at nine.",
    es: "El tren llega a las nueve.",
    de: "Der Zug trifft um neun ein.",
  },
  "Мы ходим за покупками.": {
    en: "We go shopping.",
    es: "Vamos de compras.",
    de: "Wir erledigen die Einkäufe.",
  },
  "Она звонит маме.": {
    en: "She is calling her mother.",
    es: "Ella llama a su madre.",
    de: "Sie telefoniert mit ihrer Mutter.",
  },
  "У меня нет машины.": {
    en: "I don't have a car.",
    es: "No tengo coche.",
    de: "Ein Auto besitze ich nicht.",
  },
  "Сейчас три часа.": {
    en: "It is three o'clock.",
    es: "Son las tres.",
    de: "Die Uhr zeigt drei.",
  },
  "Я не работаю в воскресенье.": {
    en: "I don't work on Sunday.",
    es: "No trabajo el domingo.",
    de: "Sonntags habe ich frei.",
  },
  "Курс в понедельник.": {
    en: "The course is on Monday.",
    es: "El curso es el lunes.",
    de: "Der Kurs findet montags statt.",
  },

  // A2
  "Я помогаю другу.": {
    en: "I am helping a friend.",
    es: "Ayudo a un amigo.",
    de: "Ich unterstütze einen Freund.",
  },
  "Книга принадлежит мне.": {
    en: "The book belongs to me.",
    es: "El libro me pertenece.",
    de: "Das Buch ist mein Eigentum.",
  },
  "Мы благодарим учительницу.": {
    en: "We thank the teacher.",
    es: "Agradecemos a la profesora.",
    de: "Wir bedanken uns bei der Lehrerin.",
  },
  "Она даёт ребёнку яблоко.": {
    en: "She gives the child an apple.",
    es: "Ella le da una manzana a un niño.",
    de: "Sie überreicht dem Kind einen Apfel.",
  },
  "Я иду на кухню.": {
    en: "I am going to the kitchen.",
    es: "Voy a la cocina.",
    de: "Ich begebe mich in die Küche.",
  },
  "Книга лежит на столе.": {
    en: "The book is lying on the table.",
    es: "El libro está sobre la mesa.",
    de: "Das Buch befindet sich auf dem Tisch.",
  },
  "Картина висит на стене.": {
    en: "The picture is hanging on the wall.",
    es: "El cuadro cuelga en la pared.",
    de: "Das Gemälde ist an der Wand zu sehen.",
  },
  "Мы едем в парк.": {
    en: "We are going to the park.",
    es: "Vamos al parque.",
    de: "Wir sind auf dem Weg in den Park.",
  },
  "Я вчера ел пиццу.": {
    en: "I ate pizza yesterday.",
    es: "Ayer comí pizza.",
    de: "Gestern nahm ich Pizza zu mir.",
  },
  "Она поехала в Берлин.": {
    en: "She went to Berlin.",
    es: "Ella viajó a Berlín.",
    de: "Sie reiste nach Berlin.",
  },
  "Мы посмотрели фильм.": {
    en: "We watched a film.",
    es: "Vimos una película.",
    de: "Wir haben uns einen Film angeschaut.",
  },
  "Он пришёл в восемь.": {
    en: "He came at eight.",
    es: "Vino a las ocho.",
    de: "Er traf um acht ein.",
  },
  "Раньше я был студентом.": {
    en: "I used to be a student.",
    es: "Antes era estudiante.",
    de: "Früher habe ich studiert.",
  },
  "У неё не было времени.": {
    en: "She didn't have time.",
    es: "Ella no tenía tiempo.",
    de: "Zeit fehlte ihr.",
  },
  "Мы не могли прийти.": {
    en: "We couldn't come.",
    es: "No pudimos venir.",
    de: "Zu kommen war uns unmöglich.",
  },
  "Он хотел кофе.": {
    en: "He wanted a coffee.",
    es: "Él quería un café.",
    de: "Ein Kaffee war sein Wunsch.",
  },
  "Я радуюсь выходным.": {
    en: "I am looking forward to the weekend.",
    es: "Estoy deseando que llegue el fin de semana.",
    de: "Das Wochenende erwarte ich mit Freude.",
  },
  "Он моет руки.": {
    en: "He is washing his hands.",
    es: "Él se lava las manos.",
    de: "Er reinigt sich die Hände.",
  },
  "Мы садимся.": {
    en: "We are sitting down.",
    es: "Nos sentamos.",
    de: "Wir nehmen Platz.",
  },
  "Она интересуется музыкой.": {
    en: "She is interested in music.",
    es: "Ella se interesa por la música.",
    de: "Musik weckt ihr Interesse.",
  },
  "Открой окно!": {
    en: "Open the window!",
    es: "¡Abre la ventana!",
    de: "Du sollst das Fenster öffnen.",
  },
  "Берлин больше Бонна.": {
    en: "Berlin is bigger than Bonn.",
    es: "Berlín es más grande que Bonn.",
    de: "Berlin übertrifft Bonn an Größe.",
  },
  "Пожалуйста, подождите.": {
    en: "Please wait.",
    es: "Espere, por favor.",
    de: "Einen Moment Geduld, bitte.",
  },
  "Это самый красивый город.": {
    en: "This is the most beautiful city.",
    es: "Esta es la ciudad más bonita.",
    de: "Keine Stadt ist schöner als diese.",
  },
  "Это хороший день.": {
    en: "This is a good day.",
    es: "Es un buen día.",
    de: "Der Tag ist gelungen.",
  },
  "Я вижу маленький дом.": {
    en: "I see a small house.",
    es: "Veo una casa pequeña.",
    de: "Ich erblicke ein kleines Haus.",
  },
  "Холодная вода вкусная.": {
    en: "Cold water tastes good.",
    es: "El agua fría está rica.",
    de: "Kaltes Wasser schmeckt gut.",
  },
  "Новый фильм интересный.": {
    en: "The new film is interesting.",
    es: "La película nueva es interesante.",
    de: "Der neue Film fesselt.",
  },
  "Я остаюсь дома, потому что я устал.": {
    en: "I am staying home because I am tired.",
    es: "Me quedo en casa porque estoy cansado.",
    de: "Müdigkeit hält mich zu Hause.",
  },
  "Я знаю, что он придёт.": {
    en: "I know that he will come.",
    es: "Sé que vendrá.",
    de: "Mir ist bekannt, dass er kommt.",
  },
  "Если идёт дождь, я беру автобус.": {
    en: "If it rains, I take the bus.",
    es: "Si llueve, tomo el autobús.",
    de: "Bei Regen fahre ich mit dem Bus.",
  },
  "Я пытаюсь уснуть.": {
    en: "I am trying to fall asleep.",
    es: "Intento dormirme.",
    de: "Ich bemühe mich, einzuschlafen.",
  },

  // B1
  "Это машина начальника.": {
    en: "This is the boss's car.",
    es: "Este es el coche del jefe.",
    de: "Der Wagen gehört dem Chef.",
  },
  "Из-за дождя мы остаёмся дома.": {
    en: "Because of the rain, we are staying home.",
    es: "A causa de la lluvia nos quedamos en casa.",
    de: "Der Regen hält uns zu Hause.",
  },
  "Я вижу учителя.": {
    en: "I see the teacher.",
    es: "Veo al profesor.",
    de: "Der Lehrer ist in meinem Blickfeld.",
  },
  "Мы благодарим родителей.": {
    en: "We thank the parents.",
    es: "Agradecemos a los padres.",
    de: "Wir sagen den Eltern Dank.",
  },
  "Новый фильм захватывающий.": {
    en: "The new film is thrilling.",
    es: "La película nueva es emocionante.",
    de: "Der neue Film ist packend.",
  },
  "Я вижу маленького ребёнка.": {
    en: "I see a small child.",
    es: "Veo a un niño pequeño.",
    de: "Ein kleines Kind ist zu sehen.",
  },
  "У нас хорошая идея.": {
    en: "We have a good idea.",
    es: "Tenemos una buena idea.",
    de: "Eine gute Idee liegt bei uns vor.",
  },
  "Несмотря на плохую погоду.": {
    en: "Despite the bad weather.",
    es: "A pesar del mal tiempo.",
    de: "Ungeachtet des schlechten Wetters.",
  },
  "Мужчина, который здесь живёт, — врач.": {
    en: "The man who lives here is a doctor.",
    es: "El hombre que vive aquí es médico.",
    de: "Der hier wohnhafte Mann ist Arzt.",
  },
  "Фильм, который мы смотрим, длинный.": {
    en: "The film we are watching is long.",
    es: "La película que vemos es larga.",
    de: "Lang ist der Film, den wir uns anschauen.",
  },
  "Женщина, которой я помогаю, — учительница.": {
    en: "The woman I am helping is a teacher.",
    es: "La mujer a la que ayudo es profesora.",
    de: "Ich helfe einer Frau, und sie unterrichtet.",
  },
  "Книга, которая лежит на столе, моя.": {
    en: "The book lying on the table is mine.",
    es: "El libro que está sobre la mesa es mío.",
    de: "Das auf dem Tisch liegende Buch ist meins.",
  },
  "Завтра я позвоню.": {
    en: "I will call tomorrow.",
    es: "Mañana llamaré.",
    de: "Morgen melde ich mich telefonisch.",
  },
  "После того как она поела, она ушла.": {
    en: "After she had eaten, she left.",
    es: "Después de haber comido, se marchó.",
    de: "Nach dem Essen ging sie fort.",
  },
  "Он уже ушёл, когда я пришёл.": {
    en: "He had already left when I arrived.",
    es: "Él ya se había ido cuando llegué.",
    de: "Bei meiner Ankunft war er schon fort.",
  },
  "Мы сделаем это позже.": {
    en: "We will do it later.",
    es: "Lo haremos más tarde.",
    de: "Das erledigen wir später.",
  },
  "Дом сейчас строят.": {
    en: "The house is being built right now.",
    es: "La casa se está construyendo ahora.",
    de: "Am Haus wird gerade gearbeitet.",
  },
  "Письмо написали вчера.": {
    en: "The letter was written yesterday.",
    es: "La carta fue escrita ayer.",
    de: "Gestern entstand der Brief.",
  },
  "Здесь говорят по-немецки.": {
    en: "German is spoken here.",
    es: "Aquí se habla alemán.",
    de: "Man spricht hier Deutsch.",
  },
  "Окно уже открыли.": {
    en: "The window has already been opened.",
    es: "Ya han abierto la ventana.",
    de: "Das Fenster steht schon offen.",
  },
  "Если бы у меня было время, я бы пришёл.": {
    en: "If I had time, I would come.",
    es: "Si tuviera tiempo, vendría.",
    de: "Mit Zeit wäre ich da.",
  },
  "Я бы хотел кофе.": {
    en: "I would like a coffee.",
    es: "Me gustaría un café.",
    de: "Ein Kaffee wäre mir recht.",
  },
  "Не могли бы вы мне помочь?": {
    en: "Could you help me?",
    es: "¿Podría ayudarme?",
    de: "Ich bitte um Ihre Hilfe.",
  },
  "На твоём месте я бы подождал.": {
    en: "If I were you, I would wait.",
    es: "En tu lugar, yo esperaría.",
    de: "Abwarten wäre in deiner Lage richtig.",
  },
  "Я иду гулять, хотя идёт дождь.": {
    en: "I am going for a walk even though it is raining.",
    es: "Salgo a pasear aunque llueve.",
    de: "Trotz Regen gehe ich spazieren.",
  },
  "Она много учится, чтобы сдать экзамен.": {
    en: "She studies a lot in order to pass the exam.",
    es: "Estudia mucho para aprobar el examen.",
    de: "Sie büffelt viel, um die Prüfung zu schaffen.",
  },
  "Позвони мне, прежде чем придёшь.": {
    en: "Call me before you come.",
    es: "Llámame antes de que vengas.",
    de: "Melde dich, bevor du da bist.",
  },
  "Пока я готовлю, он слушает музыку.": {
    en: "While I cook, he listens to music.",
    es: "Mientras cocino, él escucha música.",
    de: "Solange ich am Herd stehe, hört er Musik.",
  },
  "Я жду автобус.": {
    en: "I am waiting for the bus.",
    es: "Espero el autobús.",
    de: "Ich erwarte den Bus.",
  },
  "Я не знаю, придёт ли он.": {
    en: "I don't know whether he will come.",
    es: "No sé si vendrá.",
    de: "Ob er kommt, ist mir unbekannt.",
  },
  "Это зависит от погоды.": {
    en: "It depends on the weather.",
    es: "Depende del tiempo.",
    de: "Die Wetterlage entscheidet darüber.",
  },
  "Она говорит с начальником.": {
    en: "She is talking with the boss.",
    es: "Ella habla con el jefe.",
    de: "Sie unterhält sich mit ihrem Vorgesetzten.",
  },

  // B2–C1
  "Формуляр нужно заполнить.": {
    en: "The form needs to be filled in.",
    es: "Hay que rellenar el formulario.",
    de: "Das Formular braucht noch Einträge.",
  },
  "Дверь закрыта.": {
    en: "The door is closed.",
    es: "La puerta está cerrada.",
    de: "Die Tür ist zu.",
  },
  "Здесь нельзя курить.": {
    en: "Smoking is not allowed here.",
    es: "Aquí está prohibido fumar.",
    de: "Rauchen ist hier untersagt.",
  },
  "Проблему можно быстро решить.": {
    en: "The problem can be solved quickly.",
    es: "El problema se puede resolver rápido.",
    de: "Das Problem lässt sich schnell klären.",
  },
  "Он говорит, что болен.": {
    en: "He says that he is ill.",
    es: "Dice que está enfermo.",
    de: "Er behauptet, krank zu sein.",
  },
  "Она считает, что у неё нет времени.": {
    en: "She thinks that she has no time.",
    es: "Ella cree que no tiene tiempo.",
    de: "Ihrer Meinung nach fehlt ihr die Zeit.",
  },
  "Говорят, что это дорого.": {
    en: "People say that it is expensive.",
    es: "Dicen que es caro.",
    de: "Es heißt, der Preis sei hoch.",
  },
  "Газета пишет, что он придёт.": {
    en: "The newspaper writes that he will come.",
    es: "El periódico escribe que vendrá.",
    de: "Die Presse meldet sein Kommen.",
  },
  "Письмо, пришедшее вчера, важное.": {
    en: "The letter that arrived yesterday is important.",
    es: "La carta que llegó ayer es importante.",
    de: "Das gestern eingetroffene Schreiben ist wichtig.",
  },
  "Фильм, отмеченный жюри, короткий.": {
    en: "The film awarded by the jury is short.",
    es: "La película premiada por el jurado es corta.",
    de: "Der Film mit dem Jurypreis ist kurz.",
  },
  "Это быстро растущая проблема.": {
    en: "This is a rapidly growing problem.",
    es: "Es un problema que crece deprisa.",
    de: "Das Problem nimmt schnell zu.",
  },
  "Книги, прочитанные студентами.": {
    en: "The books read by the students.",
    es: "Los libros leídos por los estudiantes.",
    de: "Bücher, die Studenten schon gelesen haben.",
  },
  "После проверки заявки.": {
    en: "After the review of the application.",
    es: "Tras la revisión de la solicitud.",
    de: "Nachdem der Antrag geprüft wurde.",
  },
  "Из-за изменения плана.": {
    en: "Because of the change to the plan.",
    es: "A causa del cambio del plan.",
    de: "Weil sich der Plan geändert hat.",
  },
  "Решение проблемы важно.": {
    en: "Solving the problem is important.",
    es: "La solución del problema es importante.",
    de: "Wichtig ist, das Problem zu lösen.",
  },
  "Проведение проекта занимает много времени.": {
    en: "Carrying out the project takes a long time.",
    es: "Llevar a cabo el proyecto lleva mucho tiempo.",
    de: "Das Projekt umzusetzen dauert lange.",
  },
  "Уважаемые дамы и господа.": {
    en: "Dear ladies and gentlemen.",
    es: "Estimadas señoras y señores.",
    de: "Formelle Anrede an das Publikum.",
  },
  "Я претендую на эту должность.": {
    en: "I am applying for this position.",
    es: "Solicito este puesto.",
    de: "Diese Stelle ist mein Bewerbungsziel.",
  },
  "Документы во вложении.": {
    en: "The documents are in the attachment.",
    es: "Los documentos van en el adjunto.",
    de: "Die Papiere finden Sie beigelegt.",
  },
  "С уважением.": {
    en: "Yours sincerely.",
    es: "Atentamente.",
    de: "Eine höfliche Grußformel am Briefende.",
  },
  "Мы получили ваше письмо.": {
    en: "We have received your letter.",
    es: "Hemos recibido su carta.",
    de: "Ihr Brief ist bei uns eingegangen.",
  },
  "Можешь скинуть ссылку?": {
    en: "Can you send me the link?",
    es: "¿Me puedes mandar el enlace?",
    de: "Kriege ich die Internetadresse von dir?",
  },
  "Просим обратную связь.": {
    en: "We request feedback.",
    es: "Rogamos una respuesta.",
    de: "Wir erbitten Ihre Stellungnahme.",
  },
  "Данным нужен дополнительный анализ.": {
    en: "The data need further analysis.",
    es: "Los datos necesitan un análisis adicional.",
    de: "Die Werte brauchen noch eine Auswertung.",
  },
  "Министр заявил, что ситуация серьёзная и что действовать будут быстро.": {
    en: "The minister stated that the situation is serious and that they will act quickly.",
    es: "El ministro declaró que la situación es grave y que actuarán con rapidez.",
    de: "Der Minister sprach von einer ernsten Lage und von schnellem Handeln.",
  },
  "Она спросила, пришёл ли он и почему никто ничего не сказал.": {
    en: "She asked whether he had come and why no one had said anything.",
    es: "Preguntó si había venido y por qué nadie había dicho nada.",
    de: "Sie wollte wissen, ob er da gewesen war und weshalb alle schwiegen.",
  },
  "Сообщили, что договор подписан.": {
    en: "It was reported that the contract has been signed.",
    es: "Informaron de que el contrato está firmado.",
    de: "Die Meldung: der Vertrag trägt eine Unterschrift.",
  },
  "Он добавил, что альтернативы нет.": {
    en: "He added that there is no alternative.",
    es: "Añadió que no hay alternativa.",
    de: "Er ergänzte, ein anderer Weg fehle.",
  },
  "Я держу за тебя кулаки.": {
    en: "I am keeping my fingers crossed for you.",
    es: "Cruzo los dedos por ti.",
    de: "Ich hoffe fest, dass es dir gelingt.",
  },
  "Это же ясно.": {
    en: "That's obvious.",
    es: "Eso es evidente.",
    de: "Das liegt auf der Hand.",
  },
  "Подойди-ка.": {
    en: "Come here a moment.",
    es: "Acércate un momento.",
    de: "Beweg dich kurz zu mir.",
  },
  "Так уж оно и есть.": {
    en: "That's just the way it is.",
    es: "Así son las cosas.",
    de: "Daran lässt sich nichts ändern.",
  },
  "С одной стороны, план дорогой, с другой — он экономит время.": {
    en: "On the one hand, the plan is expensive; on the other, it saves time.",
    es: "Por un lado, el plan es caro; por otro, ahorra tiempo.",
    de: "Der Plan kostet viel, spart aber Zeit.",
  },
  "По моему мнению, не хватает доказательства.": {
    en: "In my opinion, a piece of evidence is missing.",
    es: "En mi opinión, falta una prueba.",
    de: "Aus meiner Sicht fehlt der Nachweis.",
  },
  "Следовательно, вывод остаётся предварительным.": {
    en: "Therefore, the conclusion remains provisional.",
    es: "Por consiguiente, la conclusión sigue siendo provisional.",
    de: "Also ist das Ergebnis noch nicht endgültig.",
  },
  "Нельзя отрицать, что данные неполные.": {
    en: "It cannot be denied that the data are incomplete.",
    es: "No se puede negar que los datos están incompletos.",
    de: "Die Unvollständigkeit der Daten liegt auf der Hand.",
  },
  "Не цена проблема, а срок.": {
    en: "The problem is not the price, but the deadline.",
    es: "El problema no es el precio, sino el plazo.",
    de: "Schwierigkeiten macht die Frist, nicht das Geld.",
  },
  "Не могли бы вы закрыть окно?": {
    en: "Could you close the window?",
    es: "¿Podría cerrar la ventana?",
    de: "Würden Sie das Fenster zumachen?",
  },
  "Не Анна написала текст, а Бен.": {
    en: "It was not Anna who wrote the text, but Ben.",
    es: "No escribió el texto Anna, sino Ben.",
    de: "Der Text stammt von Ben, nicht von Anna.",
  },
  "Ладно, оставим это.": {
    en: "All right, let's drop it.",
    es: "Bueno, lo dejamos.",
    de: "Gut, das Thema ist zu.",
  },
};

type TrDraft = {
  type?: string;
  question?: string;
  answer?: string;
  acceptableAnswers?: string[];
  questionTranslations?: Partial<Record<InterfaceLanguage, string>>;
};

function normPrompt(s: string): string {
  return s
    .replace(/[¿?¡!.,;:'"«»„“”‘’`´…]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isGermanSpoiler(candidate: string, draft: TrDraft): boolean {
  const n = normPrompt(candidate);
  if (!n) return true;
  const answers = [draft.answer ?? "", ...(draft.acceptableAnswers ?? [])];
  return answers.some((a) => a.trim() && normPrompt(a) === n);
}

/**
 * Merge en/es/de prompts from GERMAN_TR_L1 onto translation drafts.
 * Existing questionTranslations win. de is dropped if it repeats a German answer.
 */
export function attachGermanTrL1<T extends TrDraft>(drafts: T[]): T[] {
  return drafts.map((draft) => {
    if (draft.type !== "translation") return draft;
    const key = draft.question?.trim() ?? "";
    const mapped = key ? GERMAN_TR_L1[key] : undefined;
    if (!mapped) return draft;
    const prev = draft.questionTranslations ?? {};
    const en = prev.en?.trim() || mapped.en;
    const es = prev.es?.trim() || mapped.es;
    const deCandidate = prev.de?.trim() || mapped.de;
    const de =
      deCandidate && !isGermanSpoiler(deCandidate, draft)
        ? deCandidate
        : undefined;
    return {
      ...draft,
      questionTranslations: {
        ...prev,
        ...(en ? { en } : {}),
        ...(es ? { es } : {}),
        ...(de ? { de } : {}),
      },
    };
  });
}
