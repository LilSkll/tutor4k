import type { InterfaceLanguage } from "@/types";

// =====================================================================
// Chapter mini-stories (gamification)
// ---------------------------------------------------------------------
// A short narrative hook shown on the chapter intro screen, localized
// to the interface language. Keyed by chapter slug; safe to omit — the
// intro simply skips the story block if no entry exists.
// =====================================================================

type StoryLocale = Record<InterfaceLanguage, string>;

const STORIES: Record<string, StoryLocale> = {
  // ------------------------------------------------------------------
  // Spanish course — the Hippogriff journey through Spain
  // ------------------------------------------------------------------
  "chapter-1-despertar": {
    ru: "Вы просыпаетесь на рассвете в старой Академии языков. У окна вас ждёт гиппогриф Альтаир — он понимает только испанский, и чтобы отправиться с ним в путь, вам нужно произнести первые слова.",
    en: "You wake at dawn in the old Academy of Languages. By the window waits Altair the hippogriff — he only understands Spanish, and to begin the journey you must speak your first words.",
    es: "Despiertas al amanecer en la vieja Academia de Lenguas. Junto a la ventana espera el hipogrifo Altair: solo entiende español, y para emprender el viaje debes pronunciar tus primeras palabras.",
    de: "Du erwachst im Morgengrauen in der alten Sprachakademie. Am Fenster wartet der Hippogreif Altair — er versteht nur Spanisch, und um die Reise zu beginnen, musst du deine ersten Worte sprechen.",
  },
  "chapter-2-primer-dialogo": {
    ru: "Альтаир приземляется на поляне в древнем лесу. Из-за деревьев выходят лесные духи — они хотят узнать, кто вы и что делаете каждый день. Пора вести первый настоящий разговор!",
    en: "Altair lands in a clearing of an ancient forest. Forest spirits step out from behind the trees — they want to know who you are and what you do every day. Time for your first real conversation!",
    es: "Altair aterriza en un claro de un bosque antiguo. Los espíritus del bosque salen de entre los árboles: quieren saber quién eres y qué haces cada día. ¡Es hora de tu primera conversación de verdad!",
    de: "Altair landet auf einer Lichtung eines uralten Waldes. Waldgeister treten hinter den Bäumen hervor — sie wollen wissen, wer du bist und was du jeden Tag tust. Zeit für dein erstes echtes Gespräch!",
  },
  "chapter-3-biblioteca": {
    ru: "В глубине леса скрыта древняя библиотека. Хранитель пропустит вас только если вы правильно назовёте каждый предмет — el или la, un или una. Одна ошибка, и полки перестраиваются заново.",
    en: "Deep in the forest hides an ancient library. The Keeper will let you pass only if you name every object correctly — el or la, un or una. One mistake, and the shelves rearrange themselves.",
    es: "En lo profundo del bosque se esconde una biblioteca antigua. El Guardián solo te dejará pasar si nombras cada objeto correctamente: el o la, un o una. Un error, y las estanterías se reordenan solas.",
    de: "Tief im Wald verbirgt sich eine uralte Bibliothek. Der Hüter lässt dich nur passieren, wenn du jeden Gegenstand richtig benennst — el oder la, un oder una. Ein Fehler, und die Regale ordnen sich neu.",
  },
  "chapter-18-genero-numero": {
    ru: "В зале рукописей библиотеки заклинания рассыпались на части: окончания слов перепутались. Восстановите род и число каждого слова, чтобы магические тексты снова обрели силу.",
    en: "In the library's manuscript hall the spells have fallen apart: word endings are all mixed up. Restore the gender and number of every word so the magic texts regain their power.",
    es: "En la sala de manuscritos de la biblioteca los hechizos se han desarmado: las terminaciones de las palabras están revueltas. Restaura el género y el número de cada palabra para que los textos mágicos recuperen su poder.",
    de: "Im Handschriftensaal der Bibliothek sind die Zaubersprüche zerfallen: Die Wortendungen sind durcheinandergeraten. Stelle Genus und Numerus jedes Wortes wieder her, damit die magischen Texte ihre Kraft zurückerlangen.",
  },
  "chapter-4-numeros-tiempo": {
    ru: "Городские часы остановились, и время в городе замерло. Часовщик говорит: механизм запустится, только если правильно называть числа и время по-испански. Каждый верный ответ — ещё один оборот стрелки.",
    en: "The town clock has stopped, and time in the city stands still. The clockmaker says the mechanism will start only if you say numbers and time correctly in Spanish. Every right answer turns the hands a little further.",
    es: "El reloj de la ciudad se ha detenido y el tiempo se ha congelado. El relojero dice que el mecanismo solo arrancará si dices los números y la hora correctamente en español. Cada respuesta correcta hace girar las agujas un poco más.",
    de: "Die Stadtuhr ist stehen geblieben, und die Zeit in der Stadt steht still. Der Uhrmacher sagt: Das Uhrwerk springt nur an, wenn du Zahlen und Uhrzeit korrekt auf Spanisch sagst. Jede richtige Antwort dreht die Zeiger ein Stück weiter.",
  },
  "chapter-19-preposiciones": {
    ru: "На площади Толедо вы получаете волшебную карту, но все указатели на ней пусты. Только правильные предлоги — a, en, de, con — вернут карте дороги, мосты и тайные переулки.",
    en: "On the square of Toledo you receive a magic map, but all its signposts are blank. Only the right prepositions — a, en, de, con — will bring back its roads, bridges and secret alleys.",
    es: "En la plaza de Toledo recibes un mapa mágico, pero todas sus señales están en blanco. Solo las preposiciones correctas —a, en, de, con— devolverán al mapa sus caminos, puentes y callejones secretos.",
    de: "Auf dem Platz von Toledo erhältst du eine magische Karte, doch alle Wegweiser darauf sind leer. Nur die richtigen Präpositionen — a, en, de, con — bringen Straßen, Brücken und geheime Gassen zurück.",
  },
  "chapter-5-mercado": {
    ru: "Рынок Толедо шумит сотней голосов. Альтаир проголодался, а у вас — лишь горсть монет. Торгуйтесь, спрашивайте цены и выбирайте продукты: без испанского здесь не продадут и апельсина.",
    en: "The market of Toledo hums with a hundred voices. Altair is hungry, and you have only a handful of coins. Haggle, ask prices and pick your food: without Spanish they won't sell you even an orange here.",
    es: "El mercado de Toledo bulle con cien voces. Altair tiene hambre y tú solo llevas un puñado de monedas. Regatea, pregunta precios y elige productos: sin español aquí no te venden ni una naranja.",
    de: "Der Markt von Toledo summt mit hundert Stimmen. Altair ist hungrig, und du hast nur eine Handvoll Münzen. Feilsche, frage nach Preisen und wähle Lebensmittel: Ohne Spanisch verkauft man dir hier nicht einmal eine Orange.",
  },
  "chapter-6-cuerpo": {
    ru: "Альтаир поранил крыло при посадке. В старой аптеке Толедо целитель готов помочь, но сначала нужно точно описать, что болит и как он себя чувствует. От ваших слов зависит его выздоровление.",
    en: "Altair hurt his wing while landing. In an old apothecary of Toledo a healer is ready to help, but first you must describe exactly what hurts and how he feels. His recovery depends on your words.",
    es: "Altair se lastimó el ala al aterrizar. En una vieja botica de Toledo un sanador está dispuesto a ayudar, pero primero debes describir con precisión qué le duele y cómo se siente. Su recuperación depende de tus palabras.",
    de: "Altair hat sich beim Landen den Flügel verletzt. In einer alten Apotheke von Toledo ist ein Heiler bereit zu helfen, doch zuerst musst du genau beschreiben, was wehtut und wie er sich fühlt. Seine Genesung hängt von deinen Worten ab.",
  },
  "chapter-20-preguntas": {
    ru: "Во дворе академии Альтаир вдруг заговорил загадками. Чтобы понять его, нужно научиться правильно спрашивать: ¿qué?, ¿quién?, ¿dónde?, ¿cuándo? Каждый верный вопрос открывает часть его тайны.",
    en: "In the academy courtyard Altair suddenly speaks in riddles. To understand him you must learn to ask properly: ¿qué?, ¿quién?, ¿dónde?, ¿cuándo? Every well-formed question reveals part of his secret.",
    es: "En el patio de la academia, Altair de pronto habla en acertijos. Para entenderlo debes aprender a preguntar bien: ¿qué?, ¿quién?, ¿dónde?, ¿cuándo? Cada pregunta bien hecha revela parte de su secreto.",
    de: "Im Hof der Akademie spricht Altair plötzlich in Rätseln. Um ihn zu verstehen, musst du richtig fragen lernen: ¿qué?, ¿quién?, ¿dónde?, ¿cuándo? Jede gut gestellte Frage enthüllt einen Teil seines Geheimnisses.",
  },
  "chapter-7-pasado-perfecto": {
    ru: "В древней библиотеке вы находите дневник прежнего всадника Альтаира. Чтобы прочитать выцветшие строки, нужно овладеть pretérito perfecto — временем того, что уже случилось, но всё ещё рядом.",
    en: "In the ancient library you find the diary of Altair's previous rider. To read the faded lines you must master the pretérito perfecto — the tense of things already done, yet still close.",
    es: "En la biblioteca antigua encuentras el diario del jinete anterior de Altair. Para leer las líneas desvaídas debes dominar el pretérito perfecto: el tiempo de lo ya hecho que sigue cerca.",
    de: "In der alten Bibliothek findest du das Tagebuch von Altairs früherem Reiter. Um die verblassten Zeilen zu lesen, musst du das Pretérito perfecto meistern — die Zeit des bereits Geschehenen, das noch nachwirkt.",
  },
  "chapter-8-pasado-indefinido": {
    ru: "Ворота замка Толедо открываются лишь тому, кто расскажет его историю. Стражи требуют точных фактов: что произошло, когда и чем закончилось. Pretérito indefinido — ваш ключ к воротам.",
    en: "The gates of Toledo castle open only for those who can tell its history. The guards demand precise facts: what happened, when, and how it ended. The pretérito indefinido is your key to the gates.",
    es: "Las puertas del castillo de Toledo solo se abren para quien sepa contar su historia. Los guardias exigen hechos precisos: qué pasó, cuándo y cómo terminó. El pretérito indefinido es tu llave.",
    de: "Die Tore der Burg von Toledo öffnen sich nur dem, der ihre Geschichte erzählen kann. Die Wachen verlangen genaue Fakten: was geschah, wann und wie es endete. Das Pretérito indefinido ist dein Schlüssel.",
  },
  "chapter-9-imperfecto": {
    ru: "Туманный лес хранит воспоминания всех, кто в нём заблудился. Голоса из тумана описывают прошлое: каким всё было, что происходило вокруг. Только imperfecto поможет вам найти дорогу сквозь дымку.",
    en: "The misty forest keeps the memories of everyone who ever got lost in it. Voices in the fog describe the past: how things used to be, what was happening all around. Only the imperfecto will guide you through the haze.",
    es: "El bosque de niebla guarda los recuerdos de todos los que se perdieron en él. Voces entre la bruma describen el pasado: cómo era todo, qué ocurría alrededor. Solo el imperfecto te guiará a través de la neblina.",
    de: "Der Nebelwald bewahrt die Erinnerungen aller, die sich je in ihm verirrt haben. Stimmen im Nebel beschreiben die Vergangenheit: wie alles war, was ringsum geschah. Nur das Imperfecto führt dich durch den Dunst.",
  },
  "chapter-10-por-para": {
    ru: "Мадрид встречает вас перекрёстком тысячи дорог. На указателях лишь два слова — por и para, и каждое ведёт в свою сторону. Выберете неверно — и окажетесь совсем не там, куда шли.",
    en: "Madrid greets you with a crossroads of a thousand ways. The signs bear only two words — por and para — and each leads a different way. Choose wrong, and you'll end up far from where you were headed.",
    es: "Madrid te recibe con un cruce de mil caminos. Las señales llevan solo dos palabras —por y para— y cada una conduce a un lugar distinto. Si eliges mal, acabarás lejos de donde ibas.",
    de: "Madrid empfängt dich mit einer Kreuzung aus tausend Wegen. Auf den Schildern stehen nur zwei Wörter — por und para — und jedes führt woandershin. Wählst du falsch, landest du weit weg von deinem Ziel.",
  },
  "chapter-21-comparativos": {
    ru: "На Пласа Майор гремит состязание рассказчиков. Побеждает тот, кто сравнивает ярче всех: быстрее ветра, выше башен, лучше всех в Мадриде. Покажите, что ваш испанский — el mejor.",
    en: "On the Plaza Mayor a storytellers' contest thunders. Victory goes to whoever compares most vividly: faster than the wind, taller than the towers, the best in all Madrid. Show that your Spanish is el mejor.",
    es: "En la Plaza Mayor retumba un concurso de narradores. Gana quien compara con más viveza: más rápido que el viento, más alto que las torres, el mejor de todo Madrid. Demuestra que tu español es el mejor.",
    de: "Auf der Plaza Mayor tobt ein Erzählerwettstreit. Es gewinnt, wer am lebendigsten vergleicht: schneller als der Wind, höher als die Türme, der Beste in ganz Madrid. Zeig, dass dein Spanisch el mejor ist.",
  },
  "chapter-22-futuro": {
    ru: "В старой обсерватории астроном показывает вам карту звёзд: на ней записано будущее вашего путешествия. Но прочитать пророчество можно лишь на языке будущего времени — futuro simple.",
    en: "In the old observatory an astronomer shows you a star chart: the future of your journey is written on it. But the prophecy can only be read in the language of the future tense — the futuro simple.",
    es: "En el viejo observatorio, un astrónomo te muestra una carta estelar: en ella está escrito el futuro de tu viaje. Pero la profecía solo puede leerse en la lengua del futuro: el futuro simple.",
    de: "Im alten Observatorium zeigt dir ein Astronom eine Sternkarte: Darauf steht die Zukunft deiner Reise geschrieben. Doch die Prophezeiung lässt sich nur in der Sprache der Zukunft lesen — dem Futuro simple.",
  },
  "chapter-11-subjuntivo": {
    ru: "На Пуэрта-дель-Соль вы находите сердце города — фонтан желаний. Он исполняет только те желания, что произнесены в subjuntivo: quiero que..., espero que... Неверное наклонение — и желание рассыпается.",
    en: "At the Puerta del Sol you find the heart of the city — a fountain of wishes. It grants only wishes spoken in the subjuntivo: quiero que..., espero que... Use the wrong mood, and the wish crumbles.",
    es: "En la Puerta del Sol encuentras el corazón de la ciudad: una fuente de deseos. Solo concede los deseos pronunciados en subjuntivo: quiero que..., espero que... Si te equivocas de modo, el deseo se desvanece.",
    de: "An der Puerta del Sol findest du das Herz der Stadt — einen Wunschbrunnen. Er erfüllt nur Wünsche, die im Subjuntivo gesprochen werden: quiero que..., espero que... Falscher Modus — und der Wunsch zerfällt.",
  },
  "chapter-12-imperativo": {
    ru: "В военной академии Мадрида идут учения грифоньей кавалерии. Командир охрип, и отдавать приказы строю придётся вам: ¡habla!, ¡no corras!, ¡venid! Строй подчиняется только точному императиву.",
    en: "At Madrid's military academy the griffin cavalry is on manoeuvres. The commander has lost his voice, so you must give the orders: ¡habla!, ¡no corras!, ¡venid! The ranks obey only a precise imperative.",
    es: "En la academia militar de Madrid la caballería de grifos está de maniobras. El comandante se ha quedado sin voz y te toca dar las órdenes: ¡habla!, ¡no corras!, ¡venid! La formación solo obedece un imperativo exacto.",
    de: "An Madrids Militärakademie übt die Greifenkavallerie. Der Kommandant hat seine Stimme verloren, also musst du die Befehle geben: ¡habla!, ¡no corras!, ¡venid! Die Truppe gehorcht nur einem präzisen Imperativ.",
  },
  "chapter-13-condicional": {
    ru: "В садах Севильи растёт дерево несбывшегося: на его листьях — жизни, которые могли бы случиться. Садовник спрашивает: «Что бы вы сделали, если бы...?» Отвечать можно только в condicional.",
    en: "In the gardens of Seville grows the tree of might-have-beens: its leaves hold lives that could have happened. The gardener asks: \"What would you do if...?\" You may answer only in the condicional.",
    es: "En los jardines de Sevilla crece el árbol de lo que pudo ser: en sus hojas viven las vidas que podrían haber ocurrido. El jardinero pregunta: «¿Qué harías si...?». Solo puedes responder en condicional.",
    de: "In den Gärten von Sevilla wächst der Baum des Ungeschehenen: Auf seinen Blättern stehen Leben, die hätten sein können. Der Gärtner fragt: „Was würdest du tun, wenn...?“ Antworten darfst du nur im Condicional.",
  },
  "chapter-23-cronicas": {
    ru: "В архиве Севильи найдена хроника странника, где все времена перемешались. Архивариус просит вас восстановить рассказ: где фон и описание (imperfecto), а где события и факты (indefinido).",
    en: "In the archive of Seville a wanderer's chronicle has been found — with all its tenses jumbled. The archivist asks you to restore the tale: where is background and description (imperfecto), and where are events and facts (indefinido).",
    es: "En el archivo de Sevilla ha aparecido la crónica de un caminante con todos los tiempos revueltos. El archivero te pide restaurar el relato: dónde va el fondo y la descripción (imperfecto) y dónde los hechos (indefinido).",
    de: "Im Archiv von Sevilla wurde die Chronik eines Wanderers gefunden — mit völlig durcheinandergeratenen Zeiten. Der Archivar bittet dich, die Erzählung wiederherzustellen: Wo ist Hintergrund und Beschreibung (Imperfecto), wo sind Ereignisse und Fakten (Indefinido)?",
  },
  "chapter-24-carta": {
    ru: "На почтовом дворе Севильи вам вручают перо и бумагу: Альтаиру нужно официальное разрешение на полёт над городом. Напишите письмо в мэрию по всем правилам — от Estimados señores до вежливого прощания.",
    en: "At the post house of Seville you are handed pen and paper: Altair needs official permission to fly over the city. Write a letter to the town hall by all the rules — from Estimados señores to a courteous closing.",
    es: "En la casa de postas de Sevilla te entregan pluma y papel: Altair necesita un permiso oficial para sobrevolar la ciudad. Escribe una carta al ayuntamiento con todas las reglas: de Estimados señores a una despedida cortés.",
    de: "Im Posthof von Sevilla erhältst du Feder und Papier: Altair braucht eine offizielle Erlaubnis, über die Stadt zu fliegen. Schreibe einen Brief ans Rathaus nach allen Regeln — von Estimados señores bis zum höflichen Gruß.",
  },
  "chapter-14-estilo-indirecto": {
    ru: "Барселона гудит от слухов о летающем звере над городом. Журналисты просят вас пересказать, что говорят очевидцы: «Он сказал, что видел... Она спросила, правда ли...» Всё — в estilo indirecto.",
    en: "Barcelona buzzes with rumours of a flying beast above the city. Journalists ask you to relay what the witnesses say: \"He said he had seen... She asked whether...\" All in estilo indirecto.",
    es: "Barcelona bulle de rumores sobre una bestia voladora sobre la ciudad. Los periodistas te piden transmitir lo que dicen los testigos: «Dijo que había visto... Preguntó si...». Todo en estilo indirecto.",
    de: "Barcelona brodelt vor Gerüchten über ein fliegendes Wesen über der Stadt. Journalisten bitten dich weiterzugeben, was die Zeugen sagen: „Er sagte, er habe gesehen... Sie fragte, ob...“ Alles im Estilo indirecto.",
  },
  "chapter-15-voz-pasiva": {
    ru: "В Готическом квартале ночью были похищены древние манускрипты. Детектив ведёт расследование, но в его отчётах важно не «кто», а «что было сделано»: la puerta fue abierta, se robaron los libros...",
    en: "In the Gothic Quarter ancient manuscripts were stolen in the night. A detective leads the investigation, but his reports care not about \"who\" but about \"what was done\": la puerta fue abierta, se robaron los libros...",
    es: "En el Barrio Gótico unos manuscritos antiguos fueron robados de noche. Un detective lleva la investigación, pero en sus informes no importa «quién», sino «qué fue hecho»: la puerta fue abierta, se robaron los libros...",
    de: "Im Gotischen Viertel wurden nachts alte Handschriften gestohlen. Ein Detektiv führt die Ermittlungen, doch in seinen Berichten zählt nicht „wer“, sondern „was getan wurde“: la puerta fue abierta, se robaron los libros...",
  },
  "chapter-25-conectores": {
    ru: "В университете Саламанки вас допускают к диспуту магистров. Но мост к их кафедре сложен из слов-связок: sin embargo, por lo tanto, además... Каждый верный коннектор — новая плита моста под ногами.",
    en: "At the University of Salamanca you are admitted to the masters' debate. But the bridge to their podium is built of linking words: sin embargo, por lo tanto, además... Every correct connector lays another slab under your feet.",
    es: "En la Universidad de Salamanca te admiten al debate de los maestros. Pero el puente hacia su tribuna está hecho de conectores: sin embargo, por lo tanto, además... Cada conector correcto coloca otra losa bajo tus pies.",
    de: "An der Universität Salamanca wirst du zur Debatte der Meister zugelassen. Doch die Brücke zu ihrem Podium besteht aus Verbindungswörtern: sin embargo, por lo tanto, además... Jeder richtige Konnektor legt eine weitere Platte unter deine Füße.",
  },
  "chapter-26-voz-plaza": {
    ru: "На Пласа-де-Эспанья собралась толпа: люди спорят, стоит ли пускать гиппогрифов в города. Вам дают слово. En mi opinión... Пора высказать и обосновать своё мнение перед всей площадью.",
    en: "A crowd has gathered on the Plaza de España: people argue whether hippogriffs should be allowed into cities. You are given the floor. En mi opinión... Time to state and defend your opinion before the whole square.",
    es: "En la Plaza de España se ha reunido una multitud: la gente discute si se debe dejar entrar a los hipogrifos en las ciudades. Te dan la palabra. En mi opinión... Es hora de expresar y defender tu opinión ante toda la plaza.",
    de: "Auf der Plaza de España hat sich eine Menge versammelt: Man streitet, ob Hippogreife in die Städte dürfen. Du bekommst das Wort. En mi opinión... Zeit, deine Meinung vor dem ganzen Platz zu vertreten.",
  },
  "chapter-16-perifrasis": {
    ru: "В литературном салоне Мадрида мастера слова говорят полутонами: acabo de llegar, sigo aprendiendo, vuelvo a intentar... Чтобы вас приняли в круг, придётся овладеть перифразами — музыкой глагола.",
    en: "In a literary salon of Madrid the masters of words speak in half-tones: acabo de llegar, sigo aprendiendo, vuelvo a intentar... To be accepted into the circle, you must master the periphrases — the music of the verb.",
    es: "En un salón literario de Madrid los maestros de la palabra hablan en matices: acabo de llegar, sigo aprendiendo, vuelvo a intentar... Para entrar en el círculo tendrás que dominar las perífrasis: la música del verbo.",
    de: "In einem Madrider Literatursalon sprechen die Wortmeister in Zwischentönen: acabo de llegar, sigo aprendiendo, vuelvo a intentar... Um in den Kreis aufgenommen zu werden, musst du die Verbalperiphrasen meistern — die Musik des Verbs.",
  },
  "chapter-17-dele": {
    ru: "Перед вами вырастает Замок DELE — последняя крепость на пути. Здесь проверяют всё: чтение, письмо, речь и слух. Пройдите испытания всех башен и докажите, что достойны диплома мастера.",
    en: "Before you rises the Castle of DELE — the last fortress on the road. Everything is tested here: reading, writing, speaking and listening. Pass the trials of every tower and prove you deserve the master's diploma.",
    es: "Ante ti se alza el Castillo DELE, la última fortaleza del camino. Aquí se pone a prueba todo: lectura, escritura, expresión oral y comprensión. Supera las pruebas de cada torre y demuestra que mereces el diploma de maestro.",
    de: "Vor dir erhebt sich die Burg DELE — die letzte Festung des Weges. Hier wird alles geprüft: Lesen, Schreiben, Sprechen und Hören. Bestehe die Prüfungen jedes Turms und beweise, dass du das Meisterdiplom verdienst.",
  },
  "chapter-27-hendidas": {
    ru: "В зеркальном лабиринте Альгамбры каждая фраза отражается с новым акцентом. Выход найдёт лишь тот, кто умеет выделять главное: fue aquí donde..., lo que importa es... Зеркала слушают внимательно.",
    en: "In the mirror labyrinth of the Alhambra every phrase reflects with a new emphasis. Only those who can highlight what matters will find the way out: fue aquí donde..., lo que importa es... The mirrors listen closely.",
    es: "En el laberinto de espejos de la Alhambra cada frase se refleja con un énfasis nuevo. Solo hallará la salida quien sepa destacar lo esencial: fue aquí donde..., lo que importa es... Los espejos escuchan con atención.",
    de: "Im Spiegellabyrinth der Alhambra spiegelt sich jeder Satz mit neuer Betonung. Nur wer das Wesentliche hervorheben kann, findet hinaus: fue aquí donde..., lo que importa es... Die Spiegel hören genau zu.",
  },
  "chapter-28-conjetura": {
    ru: "В редакции мадридской газеты — переполох: слухи о гиппогрифе множатся. Редактор требует заметку, где ничего не утверждается наверняка: serán las diez, habrá salido, quizá vuelva... Искусство догадки!",
    en: "The newsroom of a Madrid paper is in uproar: rumours about the hippogriff are multiplying. The editor demands an article where nothing is stated for certain: serán las diez, habrá salido, quizá vuelva... The art of conjecture!",
    es: "En la redacción de un periódico madrileño hay revuelo: los rumores sobre el hipogrifo se multiplican. El editor exige una nota donde nada se afirme con certeza: serán las diez, habrá salido, quizá vuelva... ¡El arte de la conjetura!",
    de: "In der Redaktion einer Madrider Zeitung herrscht Aufruhr: Die Gerüchte über den Hippogreif mehren sich. Der Redakteur verlangt einen Artikel, in dem nichts sicher behauptet wird: serán las diez, habrá salido, quizá vuelva... Die Kunst der Vermutung!",
  },
  "chapter-29-culto": {
    ru: "Королевская академия приглашает вас выступить с докладом о гиппогрифах. Здесь не прощают разговорной небрежности: нужен культизм, точность и изящный письменный слог. Перо академика ждёт.",
    en: "The Royal Academy invites you to deliver a lecture on hippogriffs. Colloquial sloppiness is not forgiven here: you need formal register, precision and an elegant written style. The academician's quill awaits.",
    es: "La Real Academia te invita a presentar una ponencia sobre los hipogrifos. Aquí no se perdona el descuido coloquial: hace falta registro culto, precisión y una prosa elegante. La pluma del académico te espera.",
    de: "Die Königliche Akademie lädt dich ein, einen Vortrag über Hippogreife zu halten. Umgangssprachliche Nachlässigkeit wird hier nicht verziehen: Gefragt sind gehobenes Register, Präzision und ein eleganter Schreibstil. Die Feder des Akademikers wartet.",
  },
  "chapter-30-ironia": {
    ru: "В театре Сервантеса — маскарад: актёры говорят одно, а имеют в виду другое. ¡Qué sorpresa! — и все смеются. Финальное испытание: научиться слышать иронию и свободно менять регистр речи.",
    en: "At the Cervantes Theatre there is a masquerade: the actors say one thing and mean another. ¡Qué sorpresa! — and everyone laughs. The final trial: learn to hear irony and switch registers with ease.",
    es: "En el Teatro Cervantes hay una mascarada: los actores dicen una cosa y quieren decir otra. ¡Qué sorpresa! — y todos ríen. La prueba final: aprender a percibir la ironía y cambiar de registro con soltura.",
    de: "Im Cervantes-Theater findet ein Maskenspiel statt: Die Schauspieler sagen das eine und meinen das andere. ¡Qué sorpresa! — und alle lachen. Die letzte Prüfung: Ironie heraushören und mühelos das Register wechseln.",
  },

  // ------------------------------------------------------------------
  // English course — journey through the English-speaking world
  // ------------------------------------------------------------------
  "eng-ch1-first-steps": {
    ru: "Туман над Темзой рассеивается, и Лондон открывает вам свои двери. Гиппогриф Альтаир опускается у Тауэрского моста: чтобы начать путешествие по англоязычному миру, представьтесь городу — I am...",
    en: "The fog over the Thames lifts, and London opens its doors to you. Altair the hippogriff lands by Tower Bridge: to begin your journey through the English-speaking world, introduce yourself to the city — I am...",
    es: "La niebla sobre el Támesis se disipa y Londres te abre sus puertas. El hipogrifo Altair aterriza junto al Tower Bridge: para empezar tu viaje por el mundo angloparlante, preséntate a la ciudad — I am...",
    de: "Der Nebel über der Themse lichtet sich, und London öffnet dir seine Türen. Der Hippogreif Altair landet an der Tower Bridge: Um deine Reise durch die englischsprachige Welt zu beginnen, stell dich der Stadt vor — I am...",
  },
  "eng-ch2-routines": {
    ru: "В Оксфорде каждый день расписан по минутам: лекции, чай в пять, вечерние прогулки. Профессор колледжа согласен стать вашим наставником, если вы расскажете о своём обычном дне — в Present Simple.",
    en: "In Oxford every day runs like clockwork: lectures, tea at five, evening walks. A college professor agrees to become your mentor if you describe your typical day — in the Present Simple.",
    es: "En Oxford cada día funciona como un reloj: clases, té a las cinco, paseos al atardecer. Un profesor del college acepta ser tu mentor si describes tu día habitual — en Present Simple.",
    de: "In Oxford läuft jeder Tag wie ein Uhrwerk: Vorlesungen, Tee um fünf, Abendspaziergänge. Ein College-Professor wird dein Mentor, wenn du deinen typischen Tag beschreibst — im Present Simple.",
  },
  "eng-ch17-questions": {
    ru: "Древние римские термы Бата хранят множество загадок, а смотритель отвечает только на правильно построенные вопросы: What? Where? When? Why? Спрашивайте — и город раскроет свои секреты.",
    en: "The ancient Roman baths of Bath hold many mysteries, and the keeper answers only well-formed questions: What? Where? When? Why? Ask away — and the city will reveal its secrets.",
    es: "Las antiguas termas romanas de Bath guardan muchos misterios, y el guardián solo responde a preguntas bien formuladas: What? Where? When? Why? Pregunta — y la ciudad revelará sus secretos.",
    de: "Die alten römischen Bäder von Bath bergen viele Rätsel, und der Wärter beantwortet nur korrekt gestellte Fragen: What? Where? When? Why? Frag nur — und die Stadt enthüllt ihre Geheimnisse.",
  },
  "eng-ch3-around-town": {
    ru: "Кембридж — город мостов, шпилей и велосипедов. Альтаиру нужно место для ночлега, а вам — умение описывать город: there is a bridge, there are gardens... Найдите дорогу и приют для крылатого друга.",
    en: "Cambridge is a city of bridges, spires and bicycles. Altair needs a place to sleep, and you need the skill of describing a town: there is a bridge, there are gardens... Find the way and a shelter for your winged friend.",
    es: "Cambridge es una ciudad de puentes, agujas y bicicletas. Altair necesita dónde dormir, y tú necesitas saber describir la ciudad: there is a bridge, there are gardens... Encuentra el camino y un refugio para tu amigo alado.",
    de: "Cambridge ist eine Stadt der Brücken, Türme und Fahrräder. Altair braucht einen Schlafplatz, und du brauchst die Kunst, eine Stadt zu beschreiben: there is a bridge, there are gardens... Finde den Weg und ein Obdach für deinen geflügelten Freund.",
  },
  "eng-ch18-can": {
    ru: "На пирсе Брайтона проходит ярмарка талантов. Фокусники, музыканты, акробаты — каждый показывает, что умеет. Ваша очередь: расскажите, что можете вы и Альтаир. I can fly! — кричит толпа в восторге.",
    en: "A talent fair is underway on Brighton pier. Magicians, musicians, acrobats — everyone shows what they can do. Your turn: tell them what you and Altair can do. I can fly! — the crowd roars with delight.",
    es: "En el muelle de Brighton hay una feria de talentos. Magos, músicos, acróbatas: cada uno muestra lo que sabe hacer. Tu turno: cuenta qué sabéis hacer tú y Altair. I can fly! — la multitud ruge encantada.",
    de: "Auf dem Pier von Brighton findet ein Talentejahrmarkt statt. Zauberer, Musiker, Akrobaten — jeder zeigt, was er kann. Du bist dran: Erzähl, was du und Altair könnt. I can fly! — die Menge jubelt begeistert.",
  },
  "eng-ch19-prepositions": {
    ru: "Узкие улочки Бристоля разрисованы стрелками уличных художников, но все они указывают в разные стороны. Только предлоги места и движения — in, on, under, through — выведут вас к пристани воздушных шаров.",
    en: "The narrow streets of Bristol are covered in street artists' arrows, but they all point different ways. Only prepositions of place and movement — in, on, under, through — will lead you to the balloon dock.",
    es: "Las callejuelas de Bristol están pintadas con flechas de artistas urbanos, pero todas apuntan a lugares distintos. Solo las preposiciones de lugar y movimiento —in, on, under, through— te llevarán al muelle de los globos.",
    de: "Die engen Gassen von Bristol sind mit Pfeilen von Straßenkünstlern bemalt, doch alle zeigen in verschiedene Richtungen. Nur die Präpositionen des Ortes und der Bewegung — in, on, under, through — führen dich zum Ballonhafen.",
  },
  "eng-ch4-past-stories": {
    ru: "За стенами Йорка бродят призраки викингов. Ночной сторож пустит вас в город, если вы расскажете, что делали вчера и где были на прошлой неделе. Прошлое здесь ценят — в Past Simple.",
    en: "Viking ghosts roam beyond the walls of York. The night watchman will let you into the city if you tell him what you did yesterday and where you were last week. The past is treasured here — in the Past Simple.",
    es: "Fantasmas vikingos deambulan tras las murallas de York. El sereno te dejará entrar en la ciudad si le cuentas qué hiciste ayer y dónde estuviste la semana pasada. Aquí el pasado se valora — en Past Simple.",
    de: "Hinter den Mauern von York wandeln Wikingergeister. Der Nachtwächter lässt dich in die Stadt, wenn du erzählst, was du gestern getan hast und wo du letzte Woche warst. Die Vergangenheit wird hier geschätzt — im Past Simple.",
  },
  "eng-ch5-choices": {
    ru: "На эдинбургском холме стоят двое ворот: одни выше, другие старше; одна дорога длиннее, другая опаснее. Дух замка предлагает выбор и требует обоснования: сравнивайте — better, worse, the best...",
    en: "On the hill of Edinburgh stand two gates: one taller, one older; one road longer, the other more dangerous. The castle spirit offers a choice and demands reasons: compare — better, worse, the best...",
    es: "En la colina de Edimburgo se alzan dos puertas: una más alta, otra más antigua; un camino más largo, el otro más peligroso. El espíritu del castillo ofrece una elección y exige razones: compara — better, worse, the best...",
    de: "Auf dem Hügel von Edinburgh stehen zwei Tore: eines höher, eines älter; ein Weg länger, der andere gefährlicher. Der Burggeist stellt dich vor die Wahl und verlangt Gründe: Vergleiche — better, worse, the best...",
  },
  "eng-ch20-going-to": {
    ru: "В доках Глазго готовят к отплытию воздушный корабль. Капитан набирает команду, но берёт только тех, у кого есть план: What are you going to do? Расскажите о своих намерениях — и добро пожаловать на борт.",
    en: "In the docks of Glasgow an airship is being readied for departure. The captain is picking a crew, but takes only those with a plan: What are you going to do? Share your intentions — and welcome aboard.",
    es: "En los muelles de Glasgow preparan un aeronave para zarpar. El capitán forma su tripulación, pero solo acepta a quienes tienen un plan: What are you going to do? Cuenta tus intenciones — y bienvenido a bordo.",
    de: "In den Docks von Glasgow wird ein Luftschiff zum Auslaufen vorbereitet. Der Kapitän stellt eine Crew zusammen, nimmt aber nur, wer einen Plan hat: What are you going to do? Nenne deine Absichten — und willkommen an Bord.",
  },
  "eng-ch6-experiences": {
    ru: "В Манчестере собрались путешественники со всего света. У камина клуба странников каждый делится пережитым: Have you ever...? Ваши истории — пропуск в клуб, если расскажете их в Present Perfect.",
    en: "Travellers from all over the world have gathered in Manchester. By the fireplace of the wanderers' club everyone shares what they have lived through: Have you ever...? Your stories are your membership pass — told in the Present Perfect.",
    es: "En Mánchester se han reunido viajeros de todo el mundo. Junto a la chimenea del club de caminantes, cada uno comparte lo vivido: Have you ever...? Tus historias son tu pase al club — contadas en Present Perfect.",
    de: "In Manchester haben sich Reisende aus aller Welt versammelt. Am Kamin des Wandererklubs teilt jeder seine Erlebnisse: Have you ever...? Deine Geschichten sind dein Eintritt — erzählt im Present Perfect.",
  },
  "eng-ch21-quantifiers": {
    ru: "На рынке Лидса переполох: весы сломались, и торговцы спорят о количествах. How much flour? How many apples? Наведите порядок с помощью some, any, much, many — и рынок снова заработает.",
    en: "Chaos at Leeds market: the scales are broken and the traders argue about quantities. How much flour? How many apples? Restore order with some, any, much, many — and the market will run again.",
    es: "Caos en el mercado de Leeds: las balanzas se han roto y los comerciantes discuten por las cantidades. How much flour? How many apples? Pon orden con some, any, much, many — y el mercado volverá a funcionar.",
    de: "Chaos auf dem Markt von Leeds: Die Waagen sind kaputt, und die Händler streiten über Mengen. How much flour? How many apples? Schaffe Ordnung mit some, any, much, many — und der Markt läuft wieder.",
  },
  "eng-ch7-future-plans": {
    ru: "В Дублине гадалка раскладывает карты: в них — ваше будущее путешествие. Одни события предрешены, другие зависят от ваших решений. Will you...? Говорите о будущем уверенно — и карты сложатся.",
    en: "In Dublin a fortune-teller lays out her cards: your future journey is in them. Some events are fated, others depend on your decisions. Will you...? Speak about the future with confidence — and the cards will align.",
    es: "En Dublín una adivina extiende sus cartas: en ellas está tu futuro viaje. Algunos sucesos están escritos, otros dependen de tus decisiones. Will you...? Habla del futuro con confianza — y las cartas se alinearán.",
    de: "In Dublin legt eine Wahrsagerin ihre Karten: Darin liegt deine künftige Reise. Manche Ereignisse sind vorbestimmt, andere hängen von deinen Entscheidungen ab. Will you...? Sprich selbstbewusst über die Zukunft — und die Karten fügen sich.",
  },
  "eng-ch22-modals": {
    ru: "На дорогах Белфаста свои законы: здесь что-то must, что-то should, а что-то строго mustn't. Дорожный смотритель вручает вам свод правил, но половина слов стёрлась. Восстановите правила — и путь открыт.",
    en: "The roads of Belfast have their own laws: some things you must, some you should, and some you strictly mustn't. The road warden hands you the rulebook, but half the words have faded. Restore the rules — and the way is open.",
    es: "Las carreteras de Belfast tienen sus propias leyes: algunas cosas se deben (must), otras se recomiendan (should) y otras están prohibidas (mustn't). El guardián del camino te entrega el reglamento, pero la mitad de las palabras se han borrado. Restaura las reglas — y el camino quedará abierto.",
    de: "Die Straßen von Belfast haben ihre eigenen Gesetze: Manches muss man (must), manches sollte man (should), und manches darf man strikt nicht (mustn't). Der Straßenwärter reicht dir das Regelbuch, doch die Hälfte der Wörter ist verblasst. Stelle die Regeln wieder her — und der Weg ist frei.",
  },
  "eng-ch8-storytelling": {
    ru: "В Кардиффе, у подножия замка, вечер бардов. Лучшие рассказчики Уэльса плетут истории: while the rain was falling, a stranger knocked... Сплетите и вы свой рассказ из Past Continuous и Past Simple.",
    en: "In Cardiff, at the foot of the castle, it is the evening of the bards. The best storytellers of Wales weave their tales: while the rain was falling, a stranger knocked... Weave your own from Past Continuous and Past Simple.",
    es: "En Cardiff, al pie del castillo, es la noche de los bardos. Los mejores narradores de Gales tejen sus historias: while the rain was falling, a stranger knocked... Teje la tuya con Past Continuous y Past Simple.",
    de: "In Cardiff, am Fuß der Burg, ist der Abend der Barden. Die besten Erzähler von Wales weben ihre Geschichten: while the rain was falling, a stranger knocked... Webe deine eigene aus Past Continuous und Past Simple.",
  },
  "eng-ch9-real-world": {
    ru: "Ливерпуль — город доков, музыки и настоящей жизни. Здесь говорят быстро и по делу: работа, новости, планы на вечер. Пришло время соединить всю грамматику в живую речь настоящего мира.",
    en: "Liverpool is a city of docks, music and real life. People here speak fast and to the point: work, news, plans for tonight. It is time to bring all your grammar together into the living speech of the real world.",
    es: "Liverpool es una ciudad de muelles, música y vida real. Aquí la gente habla rápido y al grano: trabajo, noticias, planes para la noche. Es hora de unir toda tu gramática en el habla viva del mundo real.",
    de: "Liverpool ist eine Stadt der Docks, der Musik und des echten Lebens. Hier spricht man schnell und auf den Punkt: Arbeit, Neuigkeiten, Pläne für den Abend. Zeit, deine ganze Grammatik in lebendige Alltagssprache zu verwandeln.",
  },
  "eng-ch10-what-if": {
    ru: "Нью-Йорк — город возможностей, и на вершине небоскрёба вам предлагают игру: «Что, если...?» If you had wings... If I were you... Каждое условие открывает новую дверь — выбирайте условные предложения точно.",
    en: "New York is the city of possibilities, and at the top of a skyscraper you are offered a game: \"What if...?\" If you had wings... If I were you... Every condition opens a new door — choose your conditionals precisely.",
    es: "Nueva York es la ciudad de las posibilidades, y en lo alto de un rascacielos te proponen un juego: «¿Y si...?» If you had wings... If I were you... Cada condición abre una puerta nueva — elige tus condicionales con precisión.",
    de: "New York ist die Stadt der Möglichkeiten, und auf der Spitze eines Wolkenkratzers bietet man dir ein Spiel an: „Was wäre, wenn...?“ If you had wings... If I were you... Jede Bedingung öffnet eine neue Tür — wähle deine Konditionalsätze genau.",
  },
  "eng-ch11-passive": {
    ru: "В Бостонском музее ночью была разбита витрина, и древний артефакт исчез. Детектив составляет протокол, где важны действия, а не имена: the window was broken, the artifact was stolen... Помогите вести дело.",
    en: "At the Boston museum a display case was smashed in the night, and an ancient artifact has vanished. The detective writes a report where actions matter more than names: the window was broken, the artifact was stolen... Help run the case.",
    es: "En el museo de Boston una vitrina fue rota de noche y un artefacto antiguo ha desaparecido. El detective redacta un informe donde importan las acciones, no los nombres: the window was broken, the artifact was stolen... Ayuda a llevar el caso.",
    de: "Im Bostoner Museum wurde nachts eine Vitrine eingeschlagen, und ein altes Artefakt ist verschwunden. Der Detektiv schreibt ein Protokoll, in dem Taten wichtiger sind als Namen: the window was broken, the artifact was stolen... Hilf bei dem Fall.",
  },
  "eng-ch12-beyond-borders": {
    ru: "Мост Золотые Ворота тонет в тумане, а Сан-Франциско гудит слухами о крылатом госте. Репортёры просят пересказать, что говорят очевидцы: He said that... She asked if... Косвенная речь — ваш инструмент.",
    en: "The Golden Gate Bridge drowns in fog, and San Francisco buzzes with rumours of a winged visitor. Reporters ask you to relay what the witnesses say: He said that... She asked if... Reported speech is your tool.",
    es: "El puente Golden Gate se hunde en la niebla y San Francisco bulle con rumores sobre un visitante alado. Los reporteros te piden transmitir lo que dicen los testigos: He said that... She asked if... El estilo indirecto es tu herramienta.",
    de: "Die Golden Gate Bridge versinkt im Nebel, und San Francisco brodelt vor Gerüchten über einen geflügelten Gast. Reporter bitten dich weiterzugeben, was die Zeugen sagen: He said that... She asked if... Die indirekte Rede ist dein Werkzeug.",
  },
  "eng-ch13-advanced-structures": {
    ru: "В библиотеке Чикагского университета хранится «Кодекс сложных структур». Открыть его сможет лишь тот, кто владеет инверсией, эмфазой и сложными временами. Страницы сами проверяют читателя.",
    en: "The library of the University of Chicago keeps the \"Codex of Advanced Structures\". Only those who command inversion, emphasis and complex tenses can open it. The pages themselves test the reader.",
    es: "La biblioteca de la Universidad de Chicago guarda el «Códice de las Estructuras Avanzadas». Solo puede abrirlo quien domine la inversión, el énfasis y los tiempos complejos. Las propias páginas ponen a prueba al lector.",
    de: "Die Bibliothek der Universität von Chicago bewahrt den „Kodex der fortgeschrittenen Strukturen“. Nur wer Inversion, Emphase und komplexe Zeiten beherrscht, kann ihn öffnen. Die Seiten selbst prüfen den Leser.",
  },
  "eng-ch14-art-language": {
    ru: "В художественной галерее Торонто картины оживают, когда о них говорят красиво. Идиомы, метафоры, тонкие обороты — ваша палитра. Опишите полотна так, чтобы залы наполнились светом.",
    en: "In a Toronto art gallery the paintings come alive when spoken about beautifully. Idioms, metaphors, subtle turns of phrase are your palette. Describe the canvases so the halls fill with light.",
    es: "En una galería de arte de Toronto los cuadros cobran vida cuando se habla de ellos con belleza. Los modismos, las metáforas y los giros sutiles son tu paleta. Describe los lienzos para que las salas se llenen de luz.",
    de: "In einer Kunstgalerie in Toronto erwachen die Gemälde zum Leben, wenn man schön über sie spricht. Idiome, Metaphern, feine Wendungen sind deine Palette. Beschreibe die Bilder so, dass sich die Säle mit Licht füllen.",
  },
  "eng-ch15-mastery": {
    ru: "Сидней встречает вас последним рассветом путешествия. У Оперного театра Альтаир расправляет крылья: впереди финальная проверка мастерства — всё, чему вы научились, в одном полёте.",
    en: "Sydney greets you with the last dawn of the journey. By the Opera House Altair spreads his wings: ahead lies the final test of mastery — everything you have learned, in a single flight.",
    es: "Sídney te recibe con el último amanecer del viaje. Junto a la Ópera, Altair despliega las alas: te espera la prueba final de maestría — todo lo aprendido, en un solo vuelo.",
    de: "Sydney empfängt dich mit der letzten Morgendämmerung der Reise. An der Oper breitet Altair die Flügel aus: Vor dir liegt die letzte Meisterprüfung — alles Gelernte in einem einzigen Flug.",
  },
  "eng-ch16-ielts": {
    ru: "Из океана поднимается Замок IELTS — последняя крепость англоязычного мира. Четыре башни: чтение, письмо, речь, аудирование. Пройдите их все и заберите диплом мастера английского.",
    en: "From the ocean rises the Castle of IELTS — the last fortress of the English-speaking world. Four towers: reading, writing, speaking, listening. Conquer them all and claim the master's diploma of English.",
    es: "Del océano emerge el Castillo IELTS, la última fortaleza del mundo angloparlante. Cuatro torres: lectura, escritura, expresión oral y comprensión auditiva. Conquístalas todas y reclama el diploma de maestro de inglés.",
    de: "Aus dem Ozean erhebt sich die Burg IELTS — die letzte Festung der englischsprachigen Welt. Vier Türme: Lesen, Schreiben, Sprechen, Hören. Erobere sie alle und hole dir das Meisterdiplom in Englisch.",
  },
  "eng-ch23-spotlight": {
    ru: "Бродвей зажигает огни, и режиссёр доверяет вам главный монолог. Но софиты слушаются только выделенных фраз: It was here that..., What matters is... Направьте луч света точно на главное слово.",
    en: "Broadway lights up, and the director trusts you with the main monologue. But the spotlights obey only emphasised phrases: It was here that..., What matters is... Aim the beam precisely at the key word.",
    es: "Broadway enciende sus luces y el director te confía el monólogo principal. Pero los focos solo obedecen a las frases enfatizadas: It was here that..., What matters is... Dirige el haz de luz justo a la palabra clave.",
    de: "Der Broadway erstrahlt, und der Regisseur vertraut dir den Hauptmonolog an. Doch die Scheinwerfer gehorchen nur hervorgehobenen Sätzen: It was here that..., What matters is... Richte den Lichtstrahl genau auf das Schlüsselwort.",
  },
  "eng-ch24-unspoken": {
    ru: "В дублинском пабе разговоры коротки: половина слов здесь не произносится, но все друг друга понимают. — Coming? — Hope so! Научитесь искусству недосказанного — эллипсису и заменам.",
    en: "In a Dublin pub the talk is short: half the words are never spoken, yet everyone understands each other. — Coming? — Hope so! Learn the art of the unspoken — ellipsis and substitution.",
    es: "En un pub de Dublín las charlas son breves: la mitad de las palabras nunca se pronuncian, pero todos se entienden. — Coming? — Hope so! Aprende el arte de lo no dicho: la elipsis y la sustitución.",
    de: "In einem Dubliner Pub sind die Gespräche kurz: Die Hälfte der Wörter wird nie ausgesprochen, doch alle verstehen einander. — Coming? — Hope so! Lerne die Kunst des Ungesagten — Ellipse und Ersetzung.",
  },
  "eng-ch25-between-lines": {
    ru: "В Вестминстере говорят вежливо даже о буре: it's a bit windy, isn't it? Финальное искусство английского — хеджирование и преуменьшение. Научитесь читать между строк — и мир дипломатии ваш.",
    en: "In Westminster even a storm is discussed politely: it's a bit windy, isn't it? The final art of English is hedging and understatement. Learn to read between the lines — and the world of diplomacy is yours.",
    es: "En Westminster hasta de una tormenta se habla con cortesía: it's a bit windy, isn't it? El arte final del inglés es la atenuación y el understatement. Aprende a leer entre líneas — y el mundo de la diplomacia será tuyo.",
    de: "In Westminster spricht man selbst über einen Sturm höflich: it's a bit windy, isn't it? Die letzte Kunst des Englischen ist das Abschwächen und Untertreiben. Lerne, zwischen den Zeilen zu lesen — und die Welt der Diplomatie gehört dir.",
  },
};

/** Story for the chapter intro screen, or null when not authored. */
export function getChapterStory(
  slug: string,
  language: InterfaceLanguage,
): string | null {
  const entry = STORIES[slug];
  if (!entry) return null;
  return entry[language] ?? entry.en ?? null;
}
