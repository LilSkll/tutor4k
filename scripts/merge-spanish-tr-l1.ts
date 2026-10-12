/**
 * Merge missing Spanish-course TR L1 prompts into exercise-translation-prompts.json
 * Run: npx tsx scripts/merge-spanish-tr-l1.ts
 */
import { readFileSync, writeFileSync } from "fs";
import path from "path";

/** For Spanish course, `es` is English (or a paraphrase ≠ answer) to avoid spoiling. */
const ADDITIONS: Record<
  string,
  { en: string; de: string; es: string }
> = {
  "Я из России.": {
    en: "I am from Russia.",
    de: "Ich komme aus Russland.",
    es: "I am from Russia.",
  },
  "Я студент.": {
    en: "I am a student.",
    de: "Ich bin Student.",
    es: "I am a student.",
  },
  "Сейчас я усталый.": {
    en: "I am tired right now.",
    de: "Ich bin gerade müde.",
    es: "I am tired right now.",
  },
  "Она студентка.": {
    en: "She is a student.",
    de: "Sie ist Studentin.",
    es: "She is a student.",
  },
  "Мы дома сейчас.": {
    en: "We are at home now.",
    de: "Wir sind jetzt zu Hause.",
    es: "We are at home now.",
  },
  "Я покупаю хлеб в булочной.": {
    en: "I buy bread at the bakery.",
    de: "Ich kaufe Brot in der Bäckerei.",
    es: "I buy bread at the bakery.",
  },
  "Мальчик играет.": {
    en: "The boy is playing.",
    de: "Der Junge spielt.",
    es: "The boy is playing.",
  },
  "Девочка читает.": {
    en: "The girl is reading.",
    de: "Das Mädchen liest.",
    es: "The girl is reading.",
  },
  "Красные яблоки вкусные.": {
    en: "The red apples are tasty.",
    de: "Die roten Äpfel sind lecker.",
    es: "The red apples are tasty.",
  },
  "Чёрные кошки спят.": {
    en: "The black cats are sleeping.",
    de: "Die schwarzen Katzen schlafen.",
    es: "The black cats are sleeping.",
  },
  "Новые студенты пришли.": {
    en: "The new students arrived.",
    de: "Die neuen Studenten sind angekommen.",
    es: "The new students arrived.",
  },
  "Зелёные листья падают.": {
    en: "The green leaves are falling.",
    de: "Die grünen Blätter fallen.",
    es: "The green leaves are falling.",
  },
  "Я живу между двумя парками.": {
    en: "I live between two parks.",
    de: "Ich wohne zwischen zwei Parks.",
    es: "I live between two parks.",
  },
  "Мы идём к реке.": {
    en: "We are going to the river.",
    de: "Wir gehen zum Fluss.",
    es: "We are going to the river.",
  },
  "Книга на столе.": {
    en: "The book is on the table.",
    de: "Das Buch ist auf dem Tisch.",
    es: "The book is on the table.",
  },
  "Откуда ты?": {
    en: "Where are you from?",
    de: "Woher kommst du?",
    es: "Where are you from?",
  },
  "Сколько это стоит?": {
    en: "How much does this cost?",
    de: "Wie viel kostet das?",
    es: "How much does this cost?",
  },
  "Я думаю, что да.": {
    en: "I think so.",
    de: "Ich denke schon.",
    es: "I think so.",
  },
  "Мы только что приехали.": {
    en: "We just arrived.",
    de: "Wir sind gerade angekommen.",
    es: "We just arrived.",
  },
  "Это подарок для тебя.": {
    en: "This is a gift for you.",
    de: "Das ist ein Geschenk für dich.",
    es: "This is a gift for you.",
  },
  "Она приедет в пятницу.": {
    en: "She will arrive on Friday.",
    de: "Sie kommt am Freitag an.",
    es: "She will arrive on Friday.",
  },
  "Это будет сложно.": {
    en: "This will be difficult.",
    de: "Das wird schwierig sein.",
    es: "This will be difficult.",
  },
  "Ты успеешь?": {
    en: "Will you make it on time?",
    de: "Schaffst du es rechtzeitig?",
    es: "Will you make it on time?",
  },
  "Я хочу, чтобы ты пришёл.": {
    en: "I want you to come.",
    de: "Ich will, dass du kommst.",
    es: "I want you to come.",
  },
  "Я хочу, чтобы ты говорил.": {
    en: "I want you to speak.",
    de: "Ich will, dass du sprichst.",
    es: "I want you to speak.",
  },
  "Скажи мне правду!": {
    en: "Tell me the truth!",
    de: "Sag mir die Wahrheit!",
    es: "Tell me the truth!",
  },
  "Открой окно, пожалуйста.": {
    en: "Open the window, please.",
    de: "Öffne bitte das Fenster.",
    es: "Open the window, please.",
  },
  "Ешь фрукты!": {
    en: "Eat the fruit!",
    de: "Iss das Obst!",
    es: "Eat the fruit!",
  },
  "Сделай домашнее задание!": {
    en: "Do your homework!",
    de: "Mach deine Hausaufgaben!",
    es: "Do your homework!",
  },
  "Садитесь, пожалуйста.": {
    en: "Please have a seat.",
    de: "Nehmen Sie bitte Platz.",
    es: "Please have a seat.",
  },
  "Я бы хотел путешествовать.": {
    en: "I would like to travel.",
    de: "Ich würde gerne reisen.",
    es: "I would like to travel.",
  },
  "Не могли бы вы мне помочь?": {
    en: "Could you help me?",
    de: "Könnten Sie mir helfen?",
    es: "Could you help me?",
  },
  "Мне забылось имя. / Я забыл имя (случайно).": {
    en: "I forgot the name (by accident).",
    de: "Mir ist der Name entfallen.",
    es: "I forgot the name (by accident).",
  },
  "Она моет руки.": {
    en: "She is washing her hands.",
    de: "Sie wäscht sich die Hände.",
    es: "She is washing her hands.",
  },
  "Как тебя зовут?": {
    en: "What is your name?",
    de: "Wie heißt du?",
    es: "What is your name?",
  },
  "Двери открываются в девять.": {
    en: "The doors open at nine.",
    de: "Die Türen öffnen um neun.",
    es: "The doors open at nine.",
  },
  "Они садятся за стол.": {
    en: "They sit down at the table.",
    de: "Sie setzen sich an den Tisch.",
    es: "They sit down at the table.",
  },
  "Продам свежий хлеб.": {
    en: "Fresh bread for sale.",
    de: "Frisches Brot zu verkaufen.",
    es: "Fresh bread for sale.",
  },
  "Я забыл имя.": {
    en: "I forgot the name.",
    de: "Ich habe den Namen vergessen.",
    es: "I forgot the name.",
  },
  "Это дом, где я вырос.": {
    en: "This is the house where I grew up.",
    de: "Das ist das Haus, in dem ich aufgewachsen bin.",
    es: "This is the house where I grew up.",
  },
  "То, что ты сказал, правда.": {
    en: "What you said is true.",
    de: "Was du gesagt hast, ist wahr.",
    es: "What you said is true.",
  },
  "Друг, которому я написал, не ответил.": {
    en: "The friend I wrote to did not reply.",
    de: "Der Freund, dem ich geschrieben habe, hat nicht geantwortet.",
    es: "The friend I wrote to did not reply.",
  },
  "Когда я пришёл, они уже ушли.": {
    en: "When I arrived, they had already left.",
    de: "Als ich ankam, waren sie schon weg.",
    es: "When I arrived, they had already left.",
  },
  "Она сказала, что уже видела этот фильм.": {
    en: "She said she had already seen that film.",
    de: "Sie sagte, sie habe diesen Film schon gesehen.",
    es: "She said she had already seen that film.",
  },
  "Мы закончили работу до того, как он позвонил.": {
    en: "We had finished the work before he called.",
    de: "Wir hatten die Arbeit beendet, bevor er anrief.",
    es: "We had finished the work before he called.",
  },
  "К тому времени поезд уже отправился.": {
    en: "By then the train had already left.",
    de: "Zu dem Zeitpunkt war der Zug schon abgefahren.",
    es: "By then the train had already left.",
  },
  "Я никогда раньше не ел такою еду.": {
    en: "I had never eaten that kind of food before.",
    de: "Ich hatte so etwas vorher noch nie gegessen.",
    es: "I had never eaten that kind of food before.",
  },
  "Они уже купили билеты, когда началась распродажа.": {
    en: "They had already bought the tickets when the sale started.",
    de: "Sie hatten die Tickets schon gekauft, als der Sale begann.",
    es: "They had already bought the tickets when the sale started.",
  },
  "Он не знал, что я уже позвонил.": {
    en: "He did not know that I had already called.",
    de: "Er wusste nicht, dass ich schon angerufen hatte.",
    es: "He did not know that I had already called.",
  },
  "Дождь уже прекратился, когда мы вышли.": {
    en: "The rain had already stopped when we went out.",
    de: "Der Regen hatte schon aufgehört, als wir hinausgingen.",
    es: "The rain had already stopped when we went out.",
  },
  "Если бы у меня было время, я бы пошел.": {
    en: "If I had time, I would go.",
    de: "Wenn ich Zeit hätte, würde ich gehen.",
    es: "If I had time, I would go.",
  },
  "Если бы у меня были деньги, я бы путешествовал.": {
    en: "If I had money, I would travel.",
    de: "Wenn ich Geld hätte, würde ich reisen.",
    es: "If I had money, I would travel.",
  },
  "Я надеюсь, что завтра будет дождь.": {
    en: "I hope it rains tomorrow.",
    de: "Ich hoffe, dass es morgen regnet.",
    es: "I hope it rains tomorrow.",
  },
  "Я хотел, чтобы ты пришел на вечеринку.": {
    en: "I wanted you to come to the party.",
    de: "Ich wollte, dass du zur Party kommst.",
    es: "I wanted you to come to the party.",
  },
  "Если бы я был моложе, я бы бегал больше.": {
    en: "If I were younger, I would run more.",
    de: "Wenn ich jünger wäre, würde ich mehr laufen.",
    es: "If I were younger, I would run more.",
  },
  "Если бы у меня были деньги, я бы путешествовал больше.": {
    en: "If I had money, I would travel more.",
    de: "Wenn ich Geld hätte, würde ich mehr reisen.",
    es: "If I had money, I would travel more.",
  },
  "Мне бы хотелось помочь тебе.": {
    en: "I wish I could help you.",
    de: "Ich wünschte, ich könnte dir helfen.",
    es: "I wish I could help you.",
  },
  "Я ей это уже сказал.": {
    en: "I already told her that.",
    de: "Ich habe es ihr schon gesagt.",
    es: "I already told her that.",
  },
  "Я говорю вам.": {
    en: "I am telling you (formal).",
    de: "Ich sage es Ihnen.",
    es: "I am telling you (formal).",
  },
  "Вы видите книгу? - Да, я вижу это.": {
    en: "Do you see the book? — Yes, I see it.",
    de: "Siehst du das Buch? — Ja, ich sehe es.",
    es: "Do you see the book? — Yes, I see it.",
  },
  "Я даю это тебе в подарок.": {
    en: "I am giving it to you as a gift.",
    de: "Ich schenke es dir.",
    es: "I am giving it to you as a gift.",
  },
  "Я дал это Марии вчера.": {
    en: "I gave it to María yesterday.",
    de: "Ich habe es María gestern gegeben.",
    es: "I gave it to María yesterday.",
  },
  "я не верю в это.": {
    en: "I do not believe it.",
    de: "Ich glaube das nicht.",
    es: "I do not believe it.",
  },
  "Они уже сказали вам.": {
    en: "Have they already told you?",
    de: "Haben sie es dir schon erzählt?",
    es: "Have they already told you?",
  },
  "Он говорит очень медленно.": {
    en: "He speaks very slowly.",
    de: "Er spricht sehr langsam.",
    es: "He speaks very slowly.",
  },
  "Пожалуйста, говори медленнее.": {
    en: "Please speak more slowly.",
    de: "Bitte sprich langsamer.",
    es: "Please speak more slowly.",
  },
  "Она отвечает быстро.": {
    en: "She answers quickly.",
    de: "Sie antwortet schnell.",
    es: "She answers quickly.",
  },
  "Она бежит слишком быстро.": {
    en: "She runs too fast.",
    de: "Sie läuft zu schnell.",
    es: "She runs too fast.",
  },
  "Он много работает.": {
    en: "He works a lot.",
    de: "Er arbeitet viel.",
    es: "He works a lot.",
  },
  "Она очень добрая.": {
    en: "She is very kind.",
    de: "Sie ist sehr nett.",
    es: "She is very kind.",
  },
  "Он ушёл слишком поздно.": {
    en: "He left too late.",
    de: "Er ist zu spät gegangen.",
    es: "He left too late.",
  },
  "Пока я готовил, она читала.": {
    en: "While I was cooking, she was reading.",
    de: "Während ich kochte, las sie.",
    es: "While I was cooking, she was reading.",
  },
  "Вчера вечером я плохо спал.": {
    en: "I slept badly last night.",
    de: "Gestern Nacht habe ich schlecht geschlafen.",
    es: "I slept badly last night.",
  },
  "Я хотел бы подать жалобу.": {
    en: "I would like to file a complaint.",
    de: "Ich möchte eine Beschwerde einreichen.",
    es: "I would like to file a complaint.",
  },
  "Уважаемый господин, пишу вам, чтобы запросить информацию.": {
    en: "Dear Sir, I am writing to request information.",
    de: "Sehr geehrter Herr, ich schreibe Ihnen, um Informationen anzufordern.",
    es: "Dear Sir, I am writing to request information.",
  },
  "Прилагаю копию договора.": {
    en: "I attach a copy of the contract.",
    de: "Anbei eine Kopie des Vertrags.",
    es: "I attach a copy of the contract.",
  },
  "С уважением, жду вашего ответа.": {
    en: "Yours sincerely, I look forward to your reply.",
    de: "Mit freundlichen Grüßen, ich freue mich auf Ihre Antwort.",
    es: "Yours sincerely, I look forward to your reply.",
  },
  "Он сказал, что придёт завтра.": {
    en: "He said he would come tomorrow.",
    de: "Er sagte, er komme morgen.",
    es: "He said he would come tomorrow.",
  },
  "Она спросила: «Ты придёшь?»": {
    en: "She asked: “Will you come?”",
    de: "Sie fragte: „Kommst du?“",
    es: "She asked: “Will you come?”",
  },
  "Они сказали, что уже закончили.": {
    en: "They said they had already finished.",
    de: "Sie sagten, sie seien schon fertig.",
    es: "They said they had already finished.",
  },
  "Он попросил меня помочь ему.": {
    en: "He asked me to help him.",
    de: "Er bat mich, ihm zu helfen.",
    es: "He asked me to help him.",
  },
  "Мария сказала, что завтра уезжает.": {
    en: "María said she was leaving the next day.",
    de: "María sagte, sie fahre am nächsten Tag weg.",
    es: "María said she was leaving the next day.",
  },
  "Он сказал, что он дома (сейчас / в тот момент).": {
    en: "He said he was at home (at that moment).",
    de: "Er sagte, er sei zu Hause (in dem Moment).",
    es: "He said he was at home (at that moment).",
  },
  "Решение принято правительством.": {
    en: "The decision was taken by the government.",
    de: "Die Entscheidung wurde von der Regierung getroffen.",
    es: "The decision was taken by the government.",
  },
  "Окна открыты.": {
    en: "The windows are open.",
    de: "Die Fenster sind offen.",
    es: "The windows are open.",
  },
  "Проблема решена.": {
    en: "The problem has been solved.",
    de: "Das Problem ist gelöst worden.",
    es: "The problem has been solved.",
  },
  "Закон принят в прошлом году.": {
    en: "The law was passed last year.",
    de: "Das Gesetz wurde letztes Jahr verabschiedet.",
    es: "The law was passed last year.",
  },
  "Сомневаюсь, что они уже приехали.": {
    en: "I doubt they have already arrived.",
    de: "Ich bezweifle, dass sie schon angekommen sind.",
    es: "I doubt they have already arrived.",
  },
  "Рад, что ты сдал экзамен.": {
    en: "I am glad you passed the exam.",
    de: "Ich freue mich, dass du die Prüfung bestanden hast.",
    es: "I am glad you passed the exam.",
  },
  "Не думаю, что это была ошибка.": {
    en: "I do not think it was a mistake.",
    de: "Ich glaube nicht, dass das ein Fehler war.",
    es: "I do not think it was a mistake.",
  },
  "Возможно, вчера шёл дождь.": {
    en: "It is possible that it rained yesterday.",
    de: "Es ist möglich, dass es gestern geregnet hat.",
    es: "It is possible that it rained yesterday.",
  },
  "Жаль, что ты не смог прийти.": {
    en: "I am sorry you could not come.",
    de: "Schade, dass du nicht kommen konntest.",
    es: "I am sorry you could not come.",
  },
  "Не думаю, что они уже уехали.": {
    en: "I do not think they have left already.",
    de: "Ich glaube nicht, dass sie schon weg sind.",
    es: "I do not think they have left already.",
  },
  "Если бы я ушел, нас бы здесь не было.": {
    en: "If I had left, we would not be here.",
    de: "Wenn ich gegangen wäre, wären wir nicht hier.",
    es: "If I had left, we would not be here.",
  },
  "Мы бы выиграли, если бы играли лучше.": {
    en: "We would have won if we had played better.",
    de: "Wir hätten gewonnen, wenn wir besser gespielt hätten.",
    es: "We would have won if we had played better.",
  },
  "Если бы я знал, я бы тебе сказал.": {
    en: "If I had known, I would have told you.",
    de: "Wenn ich es gewusst hätte, hätte ich es dir gesagt.",
    es: "If I had known, I would have told you.",
  },
  "Мы бы пришли раньше, если бы не опоздали на автобус.": {
    en: "We would have arrived earlier if we had not missed the bus.",
    de: "Wir wären früher angekommen, wenn wir den Bus nicht verpasst hätten.",
    es: "We would have arrived earlier if we had not missed the bus.",
  },
  "Если бы ты позвонил, я бы помог.": {
    en: "If you had called, I would have helped.",
    de: "Wenn du angerufen hättest, hätte ich geholfen.",
    es: "If you had called, I would have helped.",
  },
  "Она бы не уехала, если бы знала правду.": {
    en: "She would not have left if she had known the truth.",
    de: "Sie wäre nicht weggefahren, wenn sie die Wahrheit gewusst hätte.",
    es: "She would not have left if she had known the truth.",
  },
  "Если бы шла дождь, мы остались бы дома.": {
    en: "If it had rained, we would have stayed home.",
    de: "Wenn es geregnet hätte, wären wir zu Hause geblieben.",
    es: "If it had rained, we would have stayed home.",
  },
  "Документ, который подписал директор, ясен.": {
    en: "The document the director signed is clear.",
    de: "Das Dokument, das der Direktor unterschrieben hat, ist klar.",
    es: "The document the director signed is clear.",
  },
  "Город, куда я ездил, очень старый.": {
    en: "The city I traveled to is very old.",
    de: "Die Stadt, in die ich gereist bin, ist sehr alt.",
    es: "The city I traveled to is very old.",
  },
  "То, что меня беспокоит, — это срок.": {
    en: "What worries me is the deadline.",
    de: "Was mich beunruhigt, ist die Frist.",
    es: "What worries me is the deadline.",
  },
  "Встреча, на которой мы были, была полезной.": {
    en: "The meeting we attended was useful.",
    de: "Das Treffen, an dem wir teilnahmen, war nützlich.",
    es: "The meeting we attended was useful.",
  },
  "Человек, с которым я говорил, — инженер.": {
    en: "The person I spoke with is an engineer.",
    de: "Die Person, mit der ich gesprochen habe, ist Ingenieurin.",
    es: "The person I spoke with is an engineer.",
  },
  "Причина, по которой он ушёл, неизвестна.": {
    en: "The reason he left is unknown.",
    de: "Der Grund, warum er gegangen ist, ist unbekannt.",
    es: "The reason he left is unknown.",
  },
  "Дом, в котором мы жили, продали.": {
    en: "The house we lived in was sold.",
    de: "Das Haus, in dem wir wohnten, wurde verkauft.",
    es: "The house we lived in was sold.",
  },
  "Я хотел выйти; однако шёл дождь.": {
    en: "I wanted to go out; however, it was raining.",
    de: "Ich wollte ausgehen; es regnete jedoch.",
    es: "I wanted to go out; however, it was raining.",
  },
  "Объясняю тебе, чтобы ты понял.": {
    en: "I am explaining it so that you understand.",
    de: "Ich erkläre es dir, damit du es verstehst.",
    es: "I am explaining it so that you understand.",
  },
  "Кроме того, я повторил конспекты.": {
    en: "Besides, I reviewed my notes.",
    de: "Außerdem habe ich die Notizen wiederholt.",
    es: "Besides, I reviewed my notes.",
  },
  "Я уйду, если только не пойдёт дождь.": {
    en: "I will go out unless it rains.",
    de: "Ich gehe raus, es sei denn, es regnet.",
    es: "I will go out unless it rains.",
  },
  "Я много учусь; Поэтому я одобряю.": {
    en: "I study a lot; therefore I pass.",
    de: "Ich lerne viel; deshalb bestehe ich.",
    es: "I study a lot; therefore I pass.",
  },
  "Прежде всего, нам необходимо определить проблему.": {
    en: "First of all, we need to define the problem.",
    de: "Zuerst müssen wir das Problem definieren.",
    es: "First of all, we need to define the problem.",
  },
  "Поэтому я остаюсь дома.": {
    en: "Therefore I am staying home.",
    de: "Deshalb bleibe ich zu Hause.",
    es: "Therefore I am staying home.",
  },
  "Тем не менее план жизнеспособен.": {
    en: "Nevertheless the plan is viable.",
    de: "Dennoch ist der Plan machbar.",
    es: "Nevertheless the plan is viable.",
  },
  "Кроме того, нужно больше времени.": {
    en: "In addition, more time is needed.",
    de: "Außerdem braucht man mehr Zeit.",
    es: "In addition, more time is needed.",
  },
  "В итоге всё вышло хорошо.": {
    en: "In the end everything turned out well.",
    de: "Am Ende ist alles gut ausgegangen.",
    es: "In the end everything turned out well.",
  },
  "Отсюда следует, что это так.": {
    en: "It follows that this is so.",
    de: "Daraus folgt, dass es so ist.",
    es: "It follows that this is so.",
  },
  "С одной стороны, это дорого; Поэтому я на это не покупаюсь.": {
    en: "On the one hand it is expensive; therefore I am not buying it.",
    de: "Einerseits ist es teuer; deshalb kaufe ich es nicht.",
    es: "On the one hand it is expensive; therefore I am not buying it.",
  },
  "Я полностью с тобой согласен.": {
    en: "I completely agree with you.",
    de: "Ich stimme dir völlig zu.",
    es: "I completely agree with you.",
  },
  "С моей точки зрения, нужно больше практики.": {
    en: "From my point of view, more practice is needed.",
    de: "Meiner Meinung nach braucht man mehr Praxis.",
    es: "From my point of view, more practice is needed.",
  },
  "Им, наверное, лет тридцать.": {
    en: "They must be about thirty.",
    de: "Sie dürften etwa dreißig sein.",
    es: "They must be about thirty.",
  },
  "Как бы то ни было, я поеду.": {
    en: "Be that as it may, I will go.",
    de: "Wie dem auch sei, ich fahre.",
    es: "Be that as it may, I will go.",
  },
  "Он сказал, что уже поел.": {
    en: "He said he had already eaten.",
    de: "Er sagte, er habe schon gegessen.",
    es: "He said he had already eaten.",
  },
  "Именно здесь началась история.": {
    en: "It is here that the story began.",
    de: "Genau hier begann die Geschichte.",
    es: "It is here that the story began.",
  },
  "Именно из-за тебя мы опоздали.": {
    en: "It was because of you that we were late.",
    de: "Genau wegen dir sind wir zu spät gekommen.",
    es: "It was because of you that we were late.",
  },
  "Ему, наверное, лет сорок.": {
    en: "He must be about forty.",
    de: "Er dürfte etwa vierzig sein.",
    es: "He must be about forty.",
  },
  "Как ни странно, он отказался.": {
    en: "Strange as it may seem, he refused.",
    de: "So seltsam es auch scheint, er hat abgelehnt.",
    es: "Strange as it may seem, he refused.",
  },
  "Без комментариев.": {
    en: "No comment.",
    de: "Kein Kommentar.",
    es: "No comment.",
  },
};

const file = path.join(
  process.cwd(),
  "src/config/exercise-translation-prompts.json",
);
const map = JSON.parse(readFileSync(file, "utf8")) as Record<
  string,
  Record<string, string>
>;

let added = 0;
let updated = 0;
for (const [ru, langs] of Object.entries(ADDITIONS)) {
  const prev = map[ru];
  if (!prev) {
    map[ru] = { ...langs };
    added++;
  } else {
    map[ru] = {
      en: langs.en || prev.en,
      de: langs.de || prev.de,
      // Prefer non-spoiling English for Spanish-course ES UI
      es: langs.es || prev.es,
    };
    updated++;
  }
}

writeFileSync(file, `${JSON.stringify(map, null, 2)}\n`, "utf8");
console.log(`Merged: added=${added} updated=${updated} totalKeys=${Object.keys(map).length}`);
