import type { InterfaceLanguage } from "@/types";

/** Exact Russian exercise-bank instructions, with English, Spanish, and German for learners. */
export const RUSSIAN_INSTRUCTION_I18N: Record<
  string,
  Partial<Record<Exclude<InterfaceLanguage, "ru">, string>>
> = {
  "«В» + предложный падеж от «который»": {
    en: "«в» + предложный падеж (prepositional) from «который»",
    es: "«в» + предложный падеж (preposicional) de «который»",
    de: "«в» + предложный падеж (Präpositiv) von «который»",
  },
  "«Который» в среднем роде": {
    en: "«Который» in the neuter",
    es: "«Который» en neutro",
    de: "«Который» im Neutrum",
  },
  "10": {
    en: "The number 10",
    es: "El número 10",
    de: "Die Zahl 10",
  },
  "12 o'clock": {
    en: "12 o’clock",
    es: "Las 12 en punto",
    de: "Zwölf Uhr genau",
  },
  "8:30": {
    en: "Say the time: 8:30",
    es: "Las ocho y treinta (8:30)",
    de: "8:30 Uhr, genau so",
  },
  "9 o'clock": {
    en: "9 o’clock",
    es: "Las 9 en punto",
    de: "Neun Uhr genau",
  },
  "9:07 approx": {
    en: "About 9:07",
    es: "Aproximadamente las 9:07",
    de: "Ungefähr 9:07",
  },
  "Анна, дательный": {
    en: "«Анна»: дательный падеж (dative)",
    es: "«Анна»: дательный падеж (dativo)",
    de: "«Анна»: дательный падеж (Dativ)",
  },
  "Аптека, родительный": {
    en: "«Аптека»: родительный падеж (genitive)",
    es: "«Аптека»: родительный падеж (genitivo)",
    de: "«Аптека»: родительный падеж (Genitiv)",
  },
  "аудитории / аудитория": {
    en: "Choose: аудитории / аудитория",
    es: "Elige: аудитории / аудитория",
    de: "Wähle: аудитории / аудитория",
  },
  "Банк, родительный": {
    en: "«Банк»: родительный падеж (genitive)",
    es: "«Банк»: родительный падеж (genitivo)",
    de: "«Банк»: родительный падеж (Genitiv)",
  },
  "Банк, родительный мн. ч.": {
    en: "«Банк»: родительный падеж (genitive), plural",
    es: "«Банк»: родительный падеж (genitivo), plural",
    de: "«Банк»: родительный падеж (Genitiv), Plural",
  },
  "Безличная форма от «казаться»": {
    en: "Impersonal construction from «казаться»",
    es: "Forma impersonal de «казаться»",
    de: "Unpersönliche Form von «казаться»",
  },
  "Будущее глагола «быть»": {
    en: "Future tense of «быть»",
    es: "Futuro del verbo «быть»",
    de: "Futur des Verbs «быть»",
  },
  "Быть, вы": {
    en: "«быть», form for «вы»",
    es: "«быть», forma de вы",
    de: "«быть», Form für вы",
  },
  "Быть, женский род": {
    en: "«быть», feminine gender",
    es: "«быть», femenino",
    de: "«быть», Femininum",
  },
  "Быть, множественное число": {
    en: "«быть», plural",
    es: "«быть», plural",
    de: "«быть», Plural",
  },
  "Быть, мужской род": {
    en: "«быть», masculine gender",
    es: "«быть», masculino",
    de: "«быть», Maskulinum",
  },
  "Быть, мы": {
    en: "«быть», form for «мы»",
    es: "«быть», forma de мы",
    de: "«быть», Form für мы",
  },
  "Быть, прошедшее": {
    en: "«быть» in the past tense",
    es: "«быть» en pasado",
    de: "«быть» in der Vergangenheit",
  },
  "Быть, средний род": {
    en: "«быть», neuter gender",
    es: "«быть», neutro",
    de: "«быть», Neutrum",
  },
  "Быть, я + инфинитив": {
    en: "«быть»: «я» + infinitive",
    es: "«быть»: я + infinitivo",
    de: "«быть»: я + Infinitiv",
  },
  "вас / тебя": {
    en: "Choose: вас / тебя (formal «вы» / informal «ты»)",
    es: "Elige: вас / тебя (usted / tú)",
    de: "Wähle: вас / тебя (Sie / du)",
  },
  "ваша / ваш": {
    en: "Choose: ваша / ваш",
    es: "Elige: ваша / ваш",
    de: "Wähle: ваша / ваш",
  },
  "Вежливая просьба подсказать": {
    en: "Polite request using «подсказать» (to hint / point out)",
    es: "Petición cortés: «подсказать» (indicar)",
    de: "Höfliche Bitte: «подсказать» (hinweisen)",
  },
  "Вежливость": {
    en: "Politeness",
    es: "Actúa con cortesía educada",
    de: "Höflichkeit",
  },
  "Вежливый императив от «объяснить»": {
    en: "Polite imperative from «объяснить»",
    es: "Imperativo cortés de «объяснить»",
    de: "Höflicher Imperativ von «объяснить»",
  },
  "Вежливый ответ / please": {
    en: "Polite reply / “please”",
    es: "Respuesta cortés / por favor",
    de: "Höfliche Antwort / bitte",
  },
  "вечером / вечер": {
    en: "Choose: вечером / вечер",
    es: "Elige: вечером / вечер",
    de: "Wähle: вечером / вечер",
  },
  "Винительный падеж (кого? что?)": {
    en: "Винительный падеж (accusative): кого? что? (“whom? what?”)",
    es: "Винительный падеж (acusativo): ¿кого? ¿что?",
    de: "Винительный падеж (Akkusativ): кого? что?",
  },
  "Вода, родительный": {
    en: "«Вода»: родительный падеж (genitive)",
    es: "«Вода»: родительный падеж (genitivo)",
    de: "«Вода»: родительный падеж (Genitiv)",
  },
  "Вопрос о времени": {
    en: "Question about the time",
    es: "Pregunta sobre la hora",
    de: "Frage nach der Uhrzeit",
  },
  "Вопрос о предмете": {
    en: "Question about a thing",
    es: "Pregunta sobre una cosa",
    de: "Frage nach einem Gegenstand",
  },
  "Вопрос о человеке": {
    en: "Question about a person",
    es: "Pregunta sobre una persona",
    de: "Frage nach einer Person",
  },
  "Вопрос, родительный мн. ч.": {
    en: "«Вопрос»: родительный падеж (genitive), plural",
    es: "«Вопрос»: родительный падеж (genitivo), plural",
    de: "«Вопрос»: родительный падеж (Genitiv), Plural",
  },
  "Врач, творительный": {
    en: "«Врач»: творительный падеж (instrumental)",
    es: "«Врач»: творительный падеж (instrumental)",
    de: "«Врач»: творительный падеж (Instrumental)",
  },
  "Время суток": {
    en: "Time of day",
    es: "Momento del día",
    de: "Tageszeit",
  },
  "Вставьте глагол": {
    en: "Insert the verb",
    es: "Inserta el verbo",
    de: "Setze das Verb ein",
  },
  "Вставьте слово": {
    en: "Insert the word",
    es: "Inserta la palabra",
    de: "Setze das Wort ein",
  },
  "Вставьте: вопрос": {
    en: "Insert: вопрос",
    es: "Inserta: вопрос",
    de: "Setze ein: вопрос",
  },
  "Вставьте: доска": {
    en: "Insert: доска",
    es: "Inserta: доска",
    de: "Setze ein: доска",
  },
  "Вставьте: друг": {
    en: "Insert: друг",
    es: "Inserta: друг",
    de: "Setze ein: друг",
  },
  "Вставьте: задание": {
    en: "Insert: задание",
    es: "Inserta: задание",
    de: "Setze ein: задание",
  },
  "Вставьте: книга": {
    en: "Insert: книга",
    es: "Inserta: книга",
    de: "Setze ein: книга",
  },
  "Вставьте: комната": {
    en: "Insert: комната",
    es: "Inserta: комната",
    de: "Setze ein: комната",
  },
  "Вставьте: однокурсник": {
    en: "Insert: однокурсник",
    es: "Inserta: однокурсник",
    de: "Setze ein: однокурсник",
  },
  "Вставьте: ответ": {
    en: "Insert: ответ",
    es: "Inserta: ответ",
    de: "Setze ein: ответ",
  },
  "Вставьте: письмо": {
    en: "Insert: письмо",
    es: "Inserta: письмо",
    de: "Setze ein: письмо",
  },
  "Вставьте: преподаватель": {
    en: "Insert: преподаватель",
    es: "Inserta: преподаватель",
    de: "Setze ein: преподаватель",
  },
  "Вставьте: ручка": {
    en: "Insert: ручка",
    es: "Inserta: ручка",
    de: "Setze ein: ручка",
  },
  "Вставьте: слово": {
    en: "Insert: слово",
    es: "Inserta: слово",
    de: "Setze ein: слово",
  },
  "Вставьте: стол": {
    en: "Insert: стол",
    es: "Inserta: стол",
    de: "Setze ein: стол",
  },
  "Вставьте: страница": {
    en: "Insert: страница",
    es: "Inserta: страница",
    de: "Setze ein: страница",
  },
  "Вставьте: студент": {
    en: "Insert: студент",
    es: "Inserta: студент",
    de: "Setze ein: студент",
  },
  "Вставьте: текст": {
    en: "Insert: текст",
    es: "Inserta: текст",
    de: "Setze ein: текст",
  },
  "Вставьте: тетрадь": {
    en: "Insert: тетрадь",
    es: "Inserta: тетрадь",
    de: "Setze ein: тетрадь",
  },
  "Вставьте: упражнение": {
    en: "Insert: упражнение",
    es: "Inserta: упражнение",
    de: "Setze ein: упражнение",
  },
  "Вставьте: учебник": {
    en: "Insert: учебник",
    es: "Inserta: учебник",
    de: "Setze ein: учебник",
  },
  "Вставьте: фото": {
    en: "Insert: фото",
    es: "Inserta: фото",
    de: "Setze ein: фото",
  },
  "Вторая часть контраста": {
    en: "Second half of the contrast",
    es: "Segunda parte del contraste",
    de: "Zweiter Teil des Kontrasts",
  },
  "Выберите": {
    en: "Choose the right option",
    es: "Elige la forma correcta",
    de: "Wähle die passende Option",
  },
  "Выберите «достичь» для транспорта": {
    en: "Choose «достичь» for reaching a place by transport",
    es: "Elige «достичь» para el transporte",
    de: "Wähle «достичь» für den Transport",
  },
  "Выберите безличную форму мнения": {
    en: "Choose the impersonal frame for an opinion",
    es: "Elige la forma impersonal de una opinión",
    de: "Wähle die unpersönliche Form einer Meinung",
  },
  "Выберите будущее для повтора": {
    en: "Choose the future for a repeated/habitual action",
    es: "Elige el futuro de una acción repetida",
    de: "Wähle das Futur für eine Wiederholung",
  },
  "Выберите будущее для результата к сроку": {
    en: "Choose the future for a result by a deadline",
    es: "Elige el futuro de un resultado para una fecha",
    de: "Wähle das Futur für ein Ergebnis bis zu einem Termin",
  },
  "Выберите вежливое обращение к преподавателю": {
    en: "Choose polite address to the teacher",
    es: "Elige el tratamiento cortés hacia el profesor",
    de: "Wähle die höfliche Anrede an die Lehrperson",
  },
  "Выберите вежливую просьбу": {
    en: "Choose the polite request",
    es: "Elige la petición cortés",
    de: "Wähle die höfliche Bitte",
  },
  "Выберите верное": {
    en: "Choose the correct answer",
    es: "Elige lo correcto",
    de: "Wähle das Richtige",
  },
  "Выберите вид для «каждый вечер»": {
    en: "Choose the aspect for «каждый вечер» (every evening)",
    es: "Elige el aspecto para «каждый вечер» (todas las tardes)",
    de: "Wähle den Aspekt für «каждый вечер» (jeden Abend)",
  },
  "Выберите вид для одного события в цепи": {
    en: "Choose the aspect for a single event in the chain",
    es: "Elige el aspecto para un solo hecho en la cadena",
    de: "Wähle den Aspekt für ein einzelnes Ereignis in der Kette",
  },
  "Выберите вид для фона": {
    en: "Choose the background aspect",
    es: "Elige el aspecto de la acción de fondo",
    de: "Wähle den Aspekt der Hintergrundhandlung",
  },
  "Выберите вид при «долго»": {
    en: "Choose the aspect with «долго» (for a long time)",
    es: "Elige el aspecto con «долго» (durante mucho tiempo)",
    de: "Wähle den Aspekt bei «долго» (lange)",
  },
  "Выберите вид при «наконец»": {
    en: "Choose the aspect with «наконец» (finally)",
    es: "Elige el aspecto con «наконец» (por fin)",
    de: "Wähle den Aspekt bei «наконец» (endlich)",
  },
  "Выберите вторую часть контраста": {
    en: "Choose the second half of the contrast",
    es: "Elige la segunda parte del contraste",
    de: "Wähle den zweiten Teil des Kontrasts",
  },
  "Выберите движение внутрь": {
    en: "Choose inward motion",
    es: "Elige el movimiento hacia dentro",
    de: "Wähle die Bewegung nach innen",
  },
  "Выберите движение к ориентиру": {
    en: "Choose motion toward a reference point",
    es: "Elige el movimiento hacia un punto de referencia",
    de: "Wähle die Bewegung zu einem Orientierungspunkt",
  },
  "Выберите добавление второй проблемы": {
    en: "Choose adding a second problem",
    es: "Elige el añadido de un segundo problema",
    de: "Wähle die Ergänzung eines zweiten Problems",
  },
  "Выберите итог двух причин": {
    en: "Choose the outcome of two causes",
    es: "Elige el resultado de dos causas",
    de: "Wähle das Ergebnis zweier Ursachen",
  },
  "Выберите конец долгой попытки": {
    en: "Choose the end of a long attempt",
    es: "Elige el final de un intento largo",
    de: "Wähle das Ende eines langen Versuchs",
  },
  "Выберите короткое посещение": {
    en: "Choose a short visit",
    es: "Elige la visita breve",
    de: "Wähle den kurzen Besuch",
  },
  "Выберите краткую форму": {
    en: "Choose the short form",
    es: "Elige la forma corta",
    de: "Wähle die Kurzform",
  },
  "Выберите лучший вариант": {
    en: "Choose the best option",
    es: "Elige la mejor opción",
    de: "Wähle die beste Variante",
  },
  "Выберите маркер примера": {
    en: "Choose the example marker",
    es: "Elige el marcador de ejemplo",
    de: "Wähle den Beispielmarker",
  },
  "Выберите место": {
    en: "Choose the place",
    es: "Elige el lugar",
    de: "Wähle den Ort",
  },
  "Выберите начало однократного движения": {
    en: "Choose the start of a one-time movement",
    es: "Elige el inicio de un movimiento único",
    de: "Wähle den Beginn einer einmaligen Bewegung",
  },
  "Выберите начало последовательности": {
    en: "Choose the start of the sequence",
    es: "Elige el inicio de la secuencia",
    de: "Wähle den Anfang der Abfolge",
  },
  "Выберите падеж": {
    en: "Choose the case",
    es: "Elige el caso",
    de: "Wähle den Kasus",
  },
  "Выберите падеж «который»": {
    en: "Choose the case for «который»",
    es: "Elige el caso de «который»",
    de: "Wähle den Kasus von «который»",
  },
  "Выберите падеж после «бояться»": {
    en: "Choose the case after «бояться»",
    es: "Elige el caso después de «бояться»",
    de: "Wähle den Kasus nach «бояться»",
  },
  "Выберите падеж после «дождаться»": {
    en: "Choose the case after «дождаться»",
    es: "Elige el caso después de «дождаться»",
    de: "Wähle den Kasus nach «дождаться»",
  },
  "Выберите падеж после «интересоваться»": {
    en: "Choose the case after «интересоваться»",
    es: "Elige el caso después de «интересоваться»",
    de: "Wähle den Kasus nach «интересоваться»",
  },
  "Выберите падеж после «нет»": {
    en: "Choose the case after «нет»",
    es: "Elige el caso después de «нет»",
    de: "Wähle den Kasus nach «нет»",
  },
  "Выберите падеж после «помогать»": {
    en: "Choose the case after «помогать»",
    es: "Elige el caso después de «помогать»",
    de: "Wähle den Kasus nach «помогать»",
  },
  "Выберите падеж после «стать»": {
    en: "Choose the case after «стать»",
    es: "Elige el caso después de «стать»",
    de: "Wähle den Kasus nach «стать»",
  },
  "Выберите падеж: ждать + лицо": {
    en: "Choose the case: «ждать» + person",
    es: "Elige el caso: «ждать» + persona",
    de: "Wähle den Kasus: «ждать» + Person",
  },
  "Выберите переход пешком": {
    en: "Choose crossing on foot",
    es: "Elige el cruce a pie",
    de: "Wähle das Überqueren zu Fuß",
  },
  "Выберите правильную модель": {
    en: "Choose the correct pattern",
    es: "Elige el modelo correcto",
    de: "Wähle das richtige Modell",
  },
  "Выберите предложную группу": {
    en: "Choose the prepositional phrase",
    es: "Elige el grupo preposicional",
    de: "Wähle die Präpositionalgruppe",
  },
  "Выберите прибытие": {
    en: "Choose arrival",
    es: "Elige la llegada",
    de: "Wähle die Ankunft",
  },
  "Выберите рамку мнения": {
    en: "Choose the opinion frame",
    es: "Elige el marco de opinión",
    de: "Wähle den Meinungsrahmen",
  },
  "Выберите род «который»": {
    en: "Choose the gender of «который»",
    es: "Elige el género de «который»",
    de: "Wähle das Genus von «который»",
  },
  "Выберите следующий шаг, не итог": {
    en: "Choose the next step, not the conclusion",
    es: "Elige el paso siguiente, no la conclusión",
    de: "Wähle den nächsten Schritt, nicht das Fazit",
  },
  "Выберите союз причины": {
    en: "Choose the conjunction of cause",
    es: "Elige la conjunción de causa",
    de: "Wähle die Kausalkonjunktion",
  },
  "Выберите союз причины при несогласии": {
    en: "Choose the conjunction of cause (when disagreeing)",
    es: "Elige la conjunción de causa al no estar de acuerdo",
    de: "Wähle die Kausalkonjunktion bei Widerspruch",
  },
  "Выберите союз следствия": {
    en: "Choose the conjunction of result",
    es: "Elige la conjunción de consecuencia",
    de: "Wähle die Konjunktion der Folge",
  },
  "Выберите союз условия": {
    en: "Choose the conjunction of condition",
    es: "Elige la conjunción de condición",
    de: "Wähle die Konditionalkonjunktion",
  },
  "Выберите союз цели": {
    en: "Choose the conjunction of purpose",
    es: "Elige la conjunción de finalidad",
    de: "Wähle die Finalkonjunktion",
  },
  "Выберите средний шаг": {
    en: "Choose the middle step",
    es: "Elige el paso intermedio",
    de: "Wähle den mittleren Schritt",
  },
  "Выберите убытие": {
    en: "Choose departure",
    es: "Elige la partida",
    de: "Wähle das Verlassen",
  },
  "Выберите форму «который» с местом": {
    en: "Choose the form of «который» with the place",
    es: "Elige la forma de «который» con el lugar",
    de: "Wähle die Form von «который» mit dem Ort",
  },
  "Выберите форму настоящего времени": {
    en: "Choose the present-tense form",
    es: "Elige la forma del presente",
    de: "Wähle die Präsensform",
  },
  "Выберите форму после «можно»": {
    en: "Choose the form after «можно»",
    es: "Elige la forma después de «можно»",
    de: "Wähle die Form nach «можно»",
  },
  "Выберите форму после «не могли бы»": {
    en: "Choose the form after «не могли бы»",
    es: "Elige la forma después de «не могли бы»",
    de: "Wähle die Form nach «не могли бы»",
  },
  "Выберите фразу": {
    en: "Choose the phrase",
    es: "Elige la frase",
    de: "Wähle die Wendung",
  },
  "Глагол": {
    en: "The verb in Russian",
    es: "El verbo en ruso",
    de: "Das russische Verb",
  },
  "Глагол вставать": {
    en: "Verb «вставать»",
    es: "Verbo «вставать»",
    de: "Verb «вставать»",
  },
  "Глагол говорить": {
    en: "Verb «говорить»",
    es: "Verbo «говорить»",
    de: "Verb «говорить»",
  },
  "Глагол готовить": {
    en: "Verb «готовить»",
    es: "Verbo «готовить»",
    de: "Verb «готовить»",
  },
  "Глагол делать": {
    en: "Verb «делать»",
    es: "Verbo «делать»",
    de: "Verb «делать»",
  },
  "Глагол есть": {
    en: "Verb «есть»",
    es: "Verbo «есть»",
    de: "Verb «есть»",
  },
  "Глагол ждать": {
    en: "Verb «ждать»",
    es: "Verbo «ждать»",
    de: "Verb «ждать»",
  },
  "Глагол жить": {
    en: "Verb «жить»",
    es: "Verbo «жить»",
    de: "Verb «жить»",
  },
  "Глагол знать": {
    en: "Verb «знать»",
    es: "Verbo «знать»",
    de: "Verb «знать»",
  },
  "Глагол отдыхать": {
    en: "Verb «отдыхать»",
    es: "Verbo «отдыхать»",
    de: "Verb «отдыхать»",
  },
  "Глагол открывать": {
    en: "Verb «открывать»",
    es: "Verbo «открывать»",
    de: "Verb «открывать»",
  },
  "Глагол писать": {
    en: "Verb «писать»",
    es: "Verbo «писать»",
    de: "Verb «писать»",
  },
  "Глагол пить": {
    en: "Verb «пить»",
    es: "Verbo «пить»",
    de: "Verb «пить»",
  },
  "Глагол повторять": {
    en: "Verb «повторять»",
    es: "Verbo «повторять»",
    de: "Verb «повторять»",
  },
  "Глагол понимать": {
    en: "Verb «понимать»",
    es: "Verbo «понимать»",
    de: "Verb «понимать»",
  },
  "Глагол работать": {
    en: "Verb «работать»",
    es: "Verbo «работать»",
    de: "Verb «работать»",
  },
  "Глагол слушать": {
    en: "Verb «слушать»",
    es: "Verbo «слушать»",
    de: "Verb «слушать»",
  },
  "Глагол смотреть": {
    en: "Verb «смотреть»",
    es: "Verbo «смотреть»",
    de: "Verb «смотреть»",
  },
  "Глагол спать": {
    en: "Verb «спать»",
    es: "Verbo «спать»",
    de: "Verb «спать»",
  },
  "Глагол учить": {
    en: "Verb «учить»",
    es: "Verbo «учить»",
    de: "Verb «учить»",
  },
  "Глагол читать": {
    en: "Verb «читать»",
    es: "Verbo «читать»",
    de: "Verb «читать»",
  },
  "Дательный падеж": {
    en: "Дательный падеж (dative)",
    es: "Дательный падеж (dativo)",
    de: "Дательный падеж (Dativ)",
  },
  "Дательный падеж от «который»: отдать кому": {
    en: "Дательный падеж (dative) of «который»: who receives it? (“to whom” to give)",
    es: "Дательный падеж (dativo) de «который»: ¿a quién entregar?",
    de: "Дательный падеж (Dativ) von «который»: wem geben?",
  },
  "Дательный падеж от слова «аспирант»": {
    en: "Дательный падеж (dative) of the word «аспирант»",
    es: "Дательный падеж (dativo) de la palabra «аспирант»",
    de: "Дательный падеж (Dativ) des Wortes «аспирант»",
  },
  "Дать кому?": {
    en: "«дать»: кому? (dative—“to whom”)",
    es: "«дать»: ¿кому? (dativo)",
    de: "«дать»: кому? (Dativ)",
  },
  "Два часа": {
    en: "Two o’clock",
    es: "Son las dos en punto",
    de: "Zwei Uhr genau",
  },
  "Движение внутрь, совершенный вид от «войти»": {
    en: "Inward motion, perfective «войти»",
    es: "Movimiento hacia dentro, aspecto perfectivo de «войти»",
    de: "Bewegung nach innen, perfektiver Aspekt von «войти»",
  },
  "Движение наружу, совершенный вид от «выйти»": {
    en: "Outward motion, perfective «выйти»",
    es: "Movimiento hacia fuera, aspecto perfectivo de «выйти»",
    de: "Bewegung nach außen, perfektiver Aspekt von «выйти»",
  },
  "дела / дело": {
    en: "Choose: дела / дело",
    es: "Elige: дела / дело",
    de: "Wähle: дела / дело",
  },
  "Делать, привычка": {
    en: "«делать», habit / routine",
    es: "«делать»: hábito",
    de: "«делать»: Gewohnheit",
  },
  "Делать, прошедшее": {
    en: "«делать» in the past tense",
    es: "«делать» en pasado",
    de: "«делать» in der Vergangenheit",
  },
  "День, родительный мн. ч.": {
    en: "«День»: родительный падеж (genitive), plural",
    es: "«День»: родительный падеж (genitivo), plural",
    de: "«День»: родительный падеж (Genitiv), Plural",
  },
  "Деньги, родительный": {
    en: "«Деньги»: родительный падеж (genitive)",
    es: "«Деньги»: родительный падеж (genitivo)",
    de: "«Деньги»: родительный падеж (Genitiv)",
  },
  "Добавление отдельной проблемы": {
    en: "Add a separate problem",
    es: "Añadir un problema distinto",
    de: "Ein weiteres Problem hinzufügen",
  },
  "Доброе / Добрый": {
    en: "Choose: Доброе / Добрый",
    es: "Elige: Доброе / Добрый",
    de: "Wähle: Доброе / Добрый",
  },
  "Добрый / Доброе": {
    en: "Choose: Добрый / Доброе",
    es: "Elige: Добрый / Доброе",
    de: "Wähle: Добрый / Доброе",
  },
  "доска / доску (как в диалоге занятия)": {
    en: "Choose: доска / доску (as in the class dialogue)",
    es: "Elige: доска / доску (como en el diálogo de clase)",
    de: "Wähle: доска / доску (wie im Unterrichtsdialog)",
  },
  "Достичь транспортом, совершенный вид от «доехать»": {
    en: "Reach the place by transport, perfective «доехать»",
    es: "Llegar en transporte hasta el punto, aspecto perfectivo de «доехать»",
    de: "Mit einem Verkehrsmittel bis zum Ziel gelangen, perfektiver Aspekt von «доехать»",
  },
  "Друг, творительный": {
    en: "«Друг»: творительный падеж (instrumental)",
    es: "«Друг»: творительный падеж (instrumental)",
    de: "«Друг»: творительный падеж (Instrumental)",
  },
  "Ездить, регулярно": {
    en: "«ездить», regularly (by vehicle)",
    es: "«ездить»: con regularidad",
    de: "«ездить»: regelmäßig",
  },
  "Ехать, сейчас": {
    en: "«ехать», right now (by vehicle)",
    es: "«ехать»: ahora",
    de: "«ехать»: jetzt",
  },
  "Женская форма": {
    en: "Feminine form",
    es: "Forma femenina",
    de: "Weibliche Form",
  },
  "Журнал — неодушевлённое дополнение. Именительный и винительный совпадают.": {
    en: "Журнал is an inanimate object: именительный падеж (nominative) and винительный падеж (accusative) look the same here.",
    es: "Журнал es un complemento inanimado. Именительный падеж (nominativo) y винительный падеж (acusativo) coinciden.",
    de: "Журнал ist ein unbelebtes Objekt. Именительный падеж (Nominativ) und винительный падеж (Akkusativ) fallen zusammen.",
  },
  "Занятие, родительный": {
    en: "«Занятие»: родительный падеж (genitive)",
    es: "«Занятие»: родительный падеж (genitivo)",
    de: "«Занятие»: родительный падеж (Genitiv)",
  },
  "Звонить кому?": {
    en: "«звонить»: кому? (dative)",
    es: "«звонить»: ¿кому? (dativo)",
    de: "«звонить»: кому? (Dativ)",
  },
  "Звук / буква": {
    en: "Sound / letter",
    es: "Sonido / letra",
    de: "Laut / Buchstabe",
  },
  "Идти, сейчас": {
    en: "«идти», right now (on foot)",
    es: "«идти»: ahora",
    de: "«идти»: jetzt",
  },
  "из / в": {
    en: "Choose: из / в",
    es: "Elige: из / в",
    de: "Wähle: из / в",
  },
  "Имеем": {
    en: "имеем (“we have”)",
    es: "имеем (nosotros tenemos)",
    de: "имеем (wir haben)",
  },
  "Императив, совершенный вид от «отойти»": {
    en: "Imperative, perfective «отойти»",
    es: "Imperativo, aspecto perfectivo de «отойти»",
    de: "Imperativ, perfektiver Aspekt von «отойти»",
  },
  "Инженер, творительный": {
    en: "«Инженер»: творительный падеж (instrumental)",
    es: "«Инженер»: творительный падеж (instrumental)",
    de: "«Инженер»: творительный падеж (Instrumental)",
  },
  "Инфинитив после «можно»": {
    en: "Infinitive after «можно»",
    es: "Infinitivo después de «можно»",
    de: "Infinitiv nach «можно»",
  },
  "Инфинитив после «не могли бы»: «to name»": {
    en: "Infinitive after «не могли бы»: “to name”",
    es: "Infinitivo después de «не могли бы»: «nombrar»",
    de: "Infinitiv nach «не могли бы»: «nennen»",
  },
  "Исправьте вид для повтора": {
    en: "Fix the aspect: this is repetition",
    es: "Corrige el aspecto: es una repetición",
    de: "Korrigiere den Aspekt: es ist eine Wiederholung",
  },
  "Исправьте вид при «долго»": {
    en: "Fix the aspect with «долго»",
    es: "Corrige el aspecto con «долго»",
    de: "Korrigiere den Aspekt bei «долго»",
  },
  "Исправьте вид при «наконец»": {
    en: "Fix the aspect with «наконец»",
    es: "Corrige el aspecto con «наконец»",
    de: "Korrigiere den Aspekt bei «наконец»",
  },
  "Исправьте вид процесса без результата": {
    en: "Fix the aspect: process without a result",
    es: "Corrige el aspecto: proceso sin resultado",
    de: "Korrigiere den Aspekt: Prozess ohne Ergebnis",
  },
  "Исправьте вид фона": {
    en: "Fix the background aspect",
    es: "Corrige el aspecto de la acción de fondo",
    de: "Korrigiere den Aspekt der Hintergrundhandlung",
  },
  "Исправьте вид: каждый день — повтор": {
    en: "Fix the aspect: every day is repetition",
    es: "Corrige el aspecto: cada día es una repetición",
    de: "Korrigiere den Aspekt: jeden Tag eine Wiederholung",
  },
  "Исправьте вид: нужен результат к сроку": {
    en: "Fix the aspect: you need a result by a deadline",
    es: "Corrige el aspecto: hace falta un resultado para una fecha",
    de: "Korrigiere den Aspekt: ein Ergebnis bis zu einem Termin ist nötig",
  },
  "Исправьте вид: повтор, не один результат": {
    en: "Fix the aspect: repetition, not a single result",
    es: "Corrige el aspecto: repetición, no un solo resultado",
    de: "Korrigiere den Aspekt: Wiederholung, nicht ein einzelnes Ergebnis",
  },
  "Исправьте вид: привычка": {
    en: "Fix the aspect: habit",
    es: "Corrige el aspecto: hábito",
    de: "Korrigiere den Aspekt: Gewohnheit",
  },
  "Исправьте вид: процесс": {
    en: "Fix the aspect: process",
    es: "Corrige el aspecto: proceso",
    de: "Korrigiere den Aspekt: Prozess",
  },
  "Исправьте вид: процесс в будущем": {
    en: "Fix the aspect: process in the future",
    es: "Corrige el aspecto: proceso en el futuro",
    de: "Korrigiere den Aspekt: Prozess in der Zukunft",
  },
  "Исправьте вид: результат": {
    en: "Fix the aspect: result",
    es: "Corrige el aspecto: resultado",
    de: "Korrigiere den Aspekt: Ergebnis",
  },
  "Исправьте вид: результат есть": {
    en: "Fix the aspect: the result is already there",
    es: "Corrige el aspecto: el resultado ya está",
    de: "Korrigiere den Aspekt: das Ergebnis liegt vor",
  },
  "Исправьте вид: результат, м. р.": {
    en: "Fix the aspect: result, masculine",
    es: "Corrige el aspecto: resultado, masculino",
    de: "Korrigiere den Aspekt: Ergebnis, maskulin",
  },
  "Исправьте винительный падеж": {
    en: "Fix the винительный падеж (accusative)",
    es: "Corrige el винительный падеж (acusativo)",
    de: "Korrigiere den винительный падеж (Akkusativ)",
  },
  "Исправьте вопрос (о предмете)": {
    en: "Fix the question (about a thing)",
    es: "Corrige la pregunta (sobre una cosa)",
    de: "Korrigiere die Frage (nach einem Gegenstand)",
  },
  "Исправьте вопрос (о человеке)": {
    en: "Fix the question (about a person)",
    es: "Corrige la pregunta (sobre una persona)",
    de: "Korrigiere die Frage (nach einer Person)",
  },
  "Исправьте время": {
    en: "Fix the tense",
    es: "Corrige el tiempo verbal",
    de: "Korrigiere das Tempus",
  },
  "Исправьте время: вчера, процесс": {
    en: "Fix the tense: yesterday, ongoing process",
    es: "Corrige el tiempo verbal: ayer, proceso",
    de: "Korrigiere das Tempus: gestern, Prozess",
  },
  "Исправьте вторую часть контраста": {
    en: "Fix the second half of the contrast",
    es: "Corrige la segunda parte del contraste",
    de: "Korrigiere den zweiten Teil des Kontrasts",
  },
  "Исправьте глагол транспорта": {
    en: "Fix the verb of motion (by vehicle)",
    es: "Corrige el verbo de transporte",
    de: "Korrigiere das Verb der Fortbewegung mit Verkehrsmittel",
  },
  "Исправьте глагол: движение пешком": {
    en: "Fix the verb: movement on foot",
    es: "Corrige el verbo: movimiento a pie",
    de: "Korrigiere das Verb: Bewegung zu Fuß",
  },
  "Исправьте глагол: одно будущее движение": {
    en: "Fix the verb: a single future movement",
    es: "Corrige el verbo: un solo movimiento futuro",
    de: "Korrigiere das Verb: eine zukünftige Bewegung",
  },
  "Исправьте глагол: регулярно": {
    en: "Fix the verb: regularly",
    es: "Corrige el verbo: con regularidad",
    de: "Korrigiere das Verb: regelmäßig",
  },
  "Исправьте глагол: сейчас": {
    en: "Fix the verb: right now",
    es: "Corrige el verbo: ahora",
    de: "Korrigiere das Verb: jetzt",
  },
  "Исправьте глагол: транспорт": {
    en: "Fix the verb: by vehicle",
    es: "Corrige el verbo: transporte",
    de: "Korrigiere das Verb: Verkehrsmittel",
  },
  "Исправьте глагол: часто": {
    en: "Fix the verb: often",
    es: "Corrige el verbo: a menudo",
    de: "Korrigiere das Verb: oft",
  },
  "Исправьте лицо формы «казаться»": {
    en: "Fix the person on the «казаться» form",
    es: "Corrige la persona de la forma de «казаться»",
    de: "Korrigiere die Person der Form von «казаться»",
  },
  "Исправьте маркер конца долгой работы": {
    en: "Fix the marker for the end of long work",
    es: "Corrige el marcador del final de un trabajo largo",
    de: "Korrigiere den Marker für das Ende einer langen Arbeit",
  },
  "Исправьте маркер начала чтения": {
    en: "Fix the marker for the start of reading",
    es: "Corrige el marcador del inicio de la lectura",
    de: "Korrigiere den Marker für den Anfang des Lesens",
  },
  "Исправьте маркер следствия": {
    en: "Fix the marker of consequence",
    es: "Corrige el marcador de consecuencia",
    de: "Korrigiere den Marker der Folge",
  },
  "Исправьте маркер: это вторая проблема, не пример": {
    en: "Fix the marker: this is a second problem, not an example",
    es: "Corrige el marcador: es un segundo problema, no un ejemplo",
    de: "Korrigiere den Marker: das ist ein zweites Problem, kein Beispiel",
  },
  "Исправьте маркер: это начало, не итог": {
    en: "Fix the marker: this is the beginning, not the conclusion",
    es: "Corrige el marcador: es el inicio, no la conclusión",
    de: "Korrigiere den Marker: das ist der Anfang, nicht das Fazit",
  },
  "Исправьте маркер: это пример": {
    en: "Fix the marker: this is an example",
    es: "Corrige el marcador: es un ejemplo",
    de: "Korrigiere den Marker: das ist ein Beispiel",
  },
  "Исправьте маркер: это следующий шаг, не итог": {
    en: "Fix the marker: this is the next step, not the conclusion",
    es: "Corrige el marcador: es el paso siguiente, no la conclusión",
    de: "Korrigiere den Marker: das ist der nächste Schritt, nicht das Fazit",
  },
  "Исправьте местоимение": {
    en: "Fix the pronoun",
    es: "Corrige el pronombre",
    de: "Korrigiere das Pronomen",
  },
  "Исправьте на вежливый императив": {
    en: "Fix: use the polite imperative",
    es: "Corrige al imperativo cortés",
    de: "Korrigiere zum höflichen Imperativ",
  },
  "Исправьте на краткую форму": {
    en: "Fix: use the short form",
    es: "Corrige a la forma corta",
    de: "Korrigiere zur Kurzform",
  },
  "Исправьте написание": {
    en: "Fix the spelling",
    es: "Corrige la ortografía",
    de: "Korrigiere die Schreibung",
  },
  "Исправьте обращение: преподаватель, на вы": {
    en: "Fix address to the teacher: formal «вы»",
    es: "Corrige el tratamiento: profesor, de usted (вы)",
    de: "Korrigiere die Anrede: Lehrperson, Sie (вы)",
  },
  "Исправьте ошибку": {
    en: "Fix the mistake",
    es: "Corrige el error",
    de: "Korrigiere den Fehler",
  },
  "Исправьте падеж": {
    en: "Fix the case",
    es: "Corrige el caso",
    de: "Korrigiere den Kasus",
  },
  "Исправьте падеж «который»": {
    en: "Fix the case of «который»",
    es: "Corrige el caso de «который»",
    de: "Korrigiere den Kasus von «который»",
  },
  "Исправьте падеж «который»: отдать кому": {
    en: "Fix the case of «который»: who receives it (“to whom” to give)",
    es: "Corrige el caso de «который»: ¿a quién entregar?",
    de: "Korrigiere den Kasus von «который»: wem geben?",
  },
  "Исправьте падеж лица после «ждать»": {
    en: "Fix the person case after «ждать»",
    es: "Corrige el caso de la persona después de «ждать»",
    de: "Korrigiere den Kasus der Person nach «ждать»",
  },
  "Исправьте падеж направления": {
    en: "Fix the direction case",
    es: "Corrige el caso de dirección",
    de: "Korrigiere den Kasus der Richtung",
  },
  "Исправьте падеж после «бояться»": {
    en: "Fix the case after «бояться»",
    es: "Corrige el caso después de «бояться»",
    de: "Korrigiere den Kasus nach «бояться»",
  },
  "Исправьте падеж после «в»": {
    en: "Fix the case after «в»",
    es: "Corrige el caso después de «в»",
    de: "Korrigiere den Kasus nach «в»",
  },
  "Исправьте падеж после «не будет»": {
    en: "Fix the case after «не будет»",
    es: "Corrige el caso después de «не будет»",
    de: "Korrigiere den Kasus nach «не будет»",
  },
  "Исправьте падеж после «нет»": {
    en: "Fix the case after «нет»",
    es: "Corrige el caso después de «нет»",
    de: "Korrigiere den Kasus nach «нет»",
  },
  "Исправьте падеж после «о»": {
    en: "Fix the case after «о»",
    es: "Corrige el caso después de «о»",
    de: "Korrigiere den Kasus nach «о»",
  },
  "Исправьте падеж после «помогать»": {
    en: "Fix the case after «помогать»",
    es: "Corrige el caso después de «помогать»",
    de: "Korrigiere den Kasus nach «помогать»",
  },
  "Исправьте падеж после «стать»": {
    en: "Fix the case after «стать»",
    es: "Corrige el caso después de «стать»",
    de: "Korrigiere den Kasus nach «стать»",
  },
  "Исправьте падеж: дождаться + родительный": {
    en: "Fix the case: «дождаться» + родительный падеж (genitive)",
    es: "Corrige el caso: «дождаться» + родительный падеж (genitivo)",
    de: "Korrigiere den Kasus: «дождаться» + родительный падеж (Genitiv)",
  },
  "Исправьте пару": {
    en: "Fix the aspect pair",
    es: "Corrige la pareja aspectual",
    de: "Korrigiere das Aspektpaar",
  },
  "Исправьте предложный падеж": {
    en: "Fix the предложный падеж (prepositional)",
    es: "Corrige el предложный падеж (preposicional)",
    de: "Korrigiere den предложный падеж (Präpositiv)",
  },
  "Исправьте приставку короткого захода": {
    en: "Fix the prefix for a short visit",
    es: "Corrige el prefijo de la entrada breve",
    de: "Korrigiere das Präfix des kurzen Besuchs",
  },
  "Исправьте приставку при предлоге «от»": {
    en: "Fix the prefix with the preposition «от»",
    es: "Corrige el prefijo con la preposición «от»",
    de: "Korrigiere das Präfix bei der Präposition «от»",
  },
  "Исправьте приставку: они на месте": {
    en: "Fix the prefix: they are already there",
    es: "Corrige el prefijo: ya están en el lugar",
    de: "Korrigiere das Präfix: sie sind schon da",
  },
  "Исправьте приставку: человек ещё в пути": {
    en: "Fix the prefix: the person is still on the way",
    es: "Corrige el prefijo: la persona aún va de camino",
    de: "Korrigiere das Präfix: die Person ist noch unterwegs",
  },
  "Исправьте приставку: человек снаружи": {
    en: "Fix the prefix: the person is outside",
    es: "Corrige el prefijo: la persona está fuera",
    de: "Korrigiere das Präfix: die Person ist draußen",
  },
  "Исправьте прощание": {
    en: "Fix the farewell",
    es: "Corrige la despedida",
    de: "Korrigiere die Verabschiedung",
  },
  "Исправьте регистр общения с преподавателем": {
    en: "Fix register when speaking with the teacher",
    es: "Corrige el registro al hablar con el profesor",
    de: "Korrigiere das Register im Gespräch mit der Lehrperson",
  },
  "Исправьте род": {
    en: "Fix gender",
    es: "Corrige el género",
    de: "Korrigiere das Genus",
  },
  "Исправьте род «который»": {
    en: "Fix the gender of «который»",
    es: "Corrige el género de «который»",
    de: "Korrigiere das Genus von «который»",
  },
  "Исправьте слово": {
    en: "Fix the word",
    es: "Corrige la palabra",
    de: "Korrigiere das Wort",
  },
  "Исправьте согласование": {
    en: "Fix agreement",
    es: "Corrige la concordancia",
    de: "Korrigiere die Kongruenz",
  },
  "Исправьте союз перед инфинитивом": {
    en: "Fix the conjunction before the infinitive",
    es: "Corrige la conjunción delante del infinitivo",
    de: "Korrigiere die Konjunktion vor dem Infinitiv",
  },
  "Исправьте союз: это причина": {
    en: "Fix the conjunction: this expresses cause",
    es: "Corrige la conjunción: es una causa",
    de: "Korrigiere die Konjunktion: das ist eine Ursache",
  },
  "Исправьте союз: это причина, не цель": {
    en: "Fix the conjunction: cause, not purpose",
    es: "Corrige la conjunción: es una causa, no una finalidad",
    de: "Korrigiere die Konjunktion: das ist eine Ursache, kein Ziel",
  },
  "Исправьте типичную ошибку": {
    en: "Fix the typical mistake",
    es: "Corrige el error típico",
    de: "Korrigiere den typischen Fehler",
  },
  "Исправьте устойчивую фразу": {
    en: "Fix the set expression",
    es: "Corrige la expresión fija",
    de: "Korrigiere die feste Wendung",
  },
  "Исправьте форму «быть»": {
    en: "Fix the form of «быть»",
    es: "Corrige la forma de «быть»",
    de: "Korrigiere die Form von «быть»",
  },
  "Исправьте форму глагола": {
    en: "Fix the verb form",
    es: "Corrige la forma del verbo",
    de: "Korrigiere die Verbform",
  },
  "Исправьте форму после «можно»": {
    en: "Fix the form after «можно»",
    es: "Corrige la forma después de «можно»",
    de: "Korrigiere die Form nach «можно»",
  },
  "Исправьте форму после «не могли бы»": {
    en: "Fix the form after «не могли бы»",
    es: "Corrige la forma después de «не могли бы»",
    de: "Korrigiere die Form nach «не могли бы»",
  },
  "Исправьте форму приветствия": {
    en: "Fix the greeting form",
    es: "Corrige la forma del saludo",
    de: "Korrigiere die Begrüßungsform",
  },
  "Исправьте форму страны (частая модель)": {
    en: "Fix the country name (common pattern)",
    es: "Corrige la forma del país (modelo frecuente)",
    de: "Korrigiere die Form des Landes (häufiges Modell)",
  },
  "Исправьте формулу знакомства": {
    en: "Fix the introduction formula",
    es: "Corrige la fórmula de presentación",
    de: "Korrigiere die Vorstellungsformel",
  },
  "Исправьте фразу": {
    en: "Fix the phrase",
    es: "Corrige la frase",
    de: "Korrigiere die Wendung",
  },
  "Исправьте число": {
    en: "Fix grammatical number",
    es: "Corrige el número gramatical",
    de: "Korrigiere den Numerus",
  },
  "Исправьте число глагола": {
    en: "Fix verb number agreement",
    es: "Corrige el número del verbo",
    de: "Korrigiere den Numerus des Verbs",
  },
  "Карандаш, творительный": {
    en: "«Карандаш»: творительный падеж (instrumental)",
    es: "«Карандаш»: творительный падеж (instrumental)",
    de: "«Карандаш»: творительный падеж (Instrumental)",
  },
  "Кафе": {
    en: "кафе (café)",
    es: "кафе (cafetería)",
    de: "кафе (Café)",
  },
  "Кем?": {
    en: "Кем? (instrumental—“as who?”, including profession)",
    es: "¿Кем? (instrumental: ¿de qué profesión?)",
    de: "Кем? (Instrumental: als wer?)",
  },
  "Ключ, родительный": {
    en: "«Ключ»: родительный падеж (genitive)",
    es: "«Ключ»: родительный падеж (genitivo)",
    de: "«Ключ»: родительный падеж (Genitiv)",
  },
  "Ключ, родительный мн. ч.": {
    en: "«Ключ»: родительный падеж (genitive), plural",
    es: "«Ключ»: родительный падеж (genitivo), plural",
    de: "«Ключ»: родительный падеж (Genitiv), Plural",
  },
  "Комната, родительный": {
    en: "«Комната»: родительный падеж (genitive)",
    es: "«Комната»: родительный падеж (genitivo)",
    de: "«Комната»: родительный падеж (Genitiv)",
  },
  "Кому?": {
    en: "Кому? (dative—“to whom”)",
    es: "¿Кому? (dativo: ¿a quién?)",
    de: "Кому? (Dativ: wem?)",
  },
  "Контекст диалога": {
    en: "Dialogue context",
    es: "Contexto del diálogo",
    de: "Kontext des Dialogs",
  },
  "Короткий заход, совершенный вид от «зайти»": {
    en: "A short visit, perfective «зайти»",
    es: "Entrada breve, aspecto perfectivo de «зайти»",
    de: "Kurzer Besuch, perfektiver Aspekt von «зайти»",
  },
  "Короткий ответ": {
    en: "Short answer",
    es: "Respuesta breve",
    de: "Kurze Antwort",
  },
  "Краткая форма, мужской или женский род": {
    en: "Short form, masculine or feminine",
    es: "Forma corta, masculino o femenino",
    de: "Kurzform, maskulin oder feminin",
  },
  "кто / что": {
    en: "Choose: кто / что",
    es: "Elige: кто / что",
    de: "Wähle: кто / что",
  },
  "Купить, результат": {
    en: "«купить», completed result",
    es: "«купить»: resultado",
    de: "«купить»: Ergebnis",
  },
  "Магазин, родительный": {
    en: "«Магазин»: родительный падеж (genitive)",
    es: "«Магазин»: родительный падеж (genitivo)",
    de: "«Магазин»: родительный падеж (Genitiv)",
  },
  "Мало + родительный": {
    en: "«мало» + родительный падеж (genitive)",
    es: "«мало» + родительный падеж (genitivo)",
    de: "«мало» + родительный падеж (Genitiv)",
  },
  "Мама, дательный": {
    en: "«Мама»: дательный падеж (dative)",
    es: "«Мама»: дательный падеж (dativo)",
    de: "«Мама»: дательный падеж (Dativ)",
  },
  "Маркер конца нескольких попыток": {
    en: "Marker for the end of several attempts",
    es: "Marcador del final de varios intentos",
    de: "Marker für das Ende mehrerer Versuche",
  },
  "Маркер начала рассказа": {
    en: "Marker for the start of the story",
    es: "Marcador del inicio del relato",
    de: "Marker für den Anfang der Erzählung",
  },
  "Маркер примера перед списком": {
    en: "Example marker before a list",
    es: "Marcador de ejemplo antes de una lista",
    de: "Beispielmarker vor einer Aufzählung",
  },
  "Мера + родительный": {
    en: "Measure + родительный падеж (genitive)",
    es: "Medida + родительный падеж (genitivo)",
    de: "Maß + родительный падеж (Genitiv)",
  },
  "Место": {
    en: "Choose the place",
    es: "Elige el lugar correcto",
    de: "Wähle den richtigen Ort",
  },
  "Много + родительный": {
    en: "«много» + родительный падеж (genitive)",
    es: "«много» + родительный падеж (genitivo)",
    de: "«много» + родительный падеж (Genitiv)",
  },
  "Модель «это»": {
    en: "Pattern with «это»",
    es: "Modelo «это»",
    de: "Modell «это»",
  },
  "моё / моя": {
    en: "Choose: моё / моя",
    es: "Elige: моё / моя",
    de: "Wähle: моё / моя",
  },
  "мой / моя": {
    en: "Choose: мой / моя",
    es: "Elige: мой / моя",
    de: "Wähle: мой / моя",
  },
  "Мой / Моя": {
    en: "Choose: Мой / Моя",
    es: "Elige: Мой / Моя",
    de: "Wähle: Мой / Моя",
  },
  "мой / моя / моё": {
    en: "Choose: мой / моя / моё",
    es: "Elige: мой / моя / моё",
    de: "Wähle: мой / моя / моё",
  },
  "моя / мой": {
    en: "Choose: моя / мой",
    es: "Elige: моя / мой",
    de: "Wähle: моя / мой",
  },
  "Моя / Мой": {
    en: "Choose: Моя / Мой",
    es: "Elige: Моя / Мой",
    de: "Wähle: Моя / Мой",
  },
  "Мы, дательный": {
    en: "«Мы»: дательный падеж (dative)",
    es: "«Мы»: дательный падеж (dativo)",
    de: "«Мы»: дательный падеж (Dativ)",
  },
  "Написать, результат": {
    en: "«написать», completed result",
    es: "«написать»: resultado",
    de: "«написать»: Ergebnis",
  },
  "Написать, результата нет": {
    en: "«написать», no result yet",
    es: "«написать»: no hay resultado",
    de: "«написать»: kein Ergebnis",
  },
  "Настоящее время": {
    en: "Present tense",
    es: "Tiempo presente",
    de: "Präsenszeit / Gegenwart",
  },
  "Начало движения пешком, совершенный вид от «пойти»": {
    en: "Start of walking, perfective «пойти»",
    es: "Inicio del movimiento a pie, aspecto perfectivo de «пойти»",
    de: "Beginn der Bewegung zu Fuß, perfektiver Aspekt von «пойти»",
  },
  "Нет + родительный": {
    en: "«нет» + родительный падеж (genitive)",
    es: "«нет» + родительный падеж (genitivo)",
    de: "«нет» + родительный падеж (Genitiv)",
  },
  "Неформальное приветствие": {
    en: "Informal greeting",
    es: "Saludo informal",
    de: "Informelle Begrüßung",
  },
  "Обращение к незнакомому": {
    en: "Addressing a stranger",
    es: "Dirigirse a un desconocido",
    de: "Anrede an eine fremde Person",
  },
  "Один момент, не повтор": {
    en: "A single moment, not repetition",
    es: "Un solo momento, no una repetición",
    de: "Ein einzelner Moment, keine Wiederholung",
  },
  "Один час": {
    en: "One o’clock",
    es: "Es la una en punto",
    de: "Eins Uhr genau",
  },
  "Одно направление, пешком": {
    en: "One direction, on foot",
    es: "Una sola dirección, a pie",
    de: "Eine Richtung, zu Fuß",
  },
  "Одно событие в цепи, совершенный вид от «открыть»": {
    en: "One event in the chain, perfective «открыть»",
    es: "Un solo hecho en la cadena, aspecto perfectivo de «открыть»",
    de: "Ein einzelnes Ereignis in der Kette, perfektiver Aspekt von «открыть»",
  },
  "Одно событие, совершенный вид от «случиться»": {
    en: "One event, perfective «случиться»",
    es: "Un solo hecho, aspecto perfectivo de «случиться»",
    de: "Ein einzelnes Ereignis, perfektiver Aspekt von «случиться»",
  },
  "окно (слово)": {
    en: "The word «окно» (window)",
    es: "La palabra «окно» (ventana)",
    de: "Das Wort «окно» (Fenster)",
  },
  "Окно, родительный": {
    en: "«Окно»: родительный падеж (genitive)",
    es: "«Окно»: родительный падеж (genitivo)",
    de: "«Окно»: родительный падеж (Genitiv)",
  },
  "Он, дательный": {
    en: "«Он»: дательный падеж (dative)",
    es: "«Он»: дательный падеж (dativo)",
    de: "«Он»: дательный падеж (Dativ)",
  },
  "Опоздать, мужской род": {
    en: "«опоздать», masculine",
    es: "«опоздать», masculino",
    de: "«опоздать», Maskulinum",
  },
  "Определение": {
    en: "Definition",
    es: "Definición",
    de: "Definition",
  },
  "Определите род": {
    en: "Identify the gender",
    es: "Determina el género",
    de: "Bestimme das Genus",
  },
  "От + родительный": {
    en: "«от» + родительный падеж (genitive)",
    es: "«от» + родительный падеж (genitivo)",
    de: "«от» + родительный падеж (Genitiv)",
  },
  "Ответ на благодарность": {
    en: "Reply to thanks",
    es: "Respuesta a un agradecimiento",
    de: "Antwort auf einen Dank",
  },
  "Переведите": {
    en: "Translate",
    es: "Traduce al ruso",
    de: "Übersetze",
  },
  "Переведите (ж. р.)": {
    en: "Translate (feminine)",
    es: "Traduce (femenino)",
    de: "Übersetze (feminin)",
  },
  "Переведите (м. р.)": {
    en: "Translate (masculine)",
    es: "Traduce (masculino)",
    de: "Übersetze (maskulin)",
  },
  "Переведите (ср. р.)": {
    en: "Translate (neuter)",
    es: "Traduce (neutro)",
    de: "Übersetze (Neutrum)",
  },
  "Переведите на русский": {
    en: "Translate into Russian",
    es: "Traduce al ruso",
    de: "Übersetze ins Russische",
  },
  "Переведите на русский (м. р.)": {
    en: "Translate into Russian (masculine)",
    es: "Traduce al ruso (masculino)",
    de: "Übersetze ins Russische (maskulin)",
  },
  "Переведите на русский (один раз)": {
    en: "Translate into Russian (once)",
    es: "Traduce al ruso (una sola vez)",
    de: "Übersetze ins Russische (einmal)",
  },
  "Переведите на русский (одно слово)": {
    en: "Translate into Russian (one word)",
    es: "Traduce al ruso (una palabra)",
    de: "Übersetze ins Russische (ein Wort)",
  },
  "Переведите на русский (процесс)": {
    en: "Translate into Russian (ongoing process)",
    es: "Traduce al ruso (proceso)",
    de: "Übersetze ins Russische (Prozess)",
  },
  "Переведите на русский (результат)": {
    en: "Translate into Russian (completed result)",
    es: "Traduce al ruso (resultado)",
    de: "Übersetze ins Russische (Ergebnis)",
  },
  "Переведите на русский (читать)": {
    en: "Translate into Russian («читать»)",
    es: "Traduce al ruso («читать»)",
    de: "Übersetze ins Russische («читать»)",
  },
  "Переведите на русский, вежливо": {
    en: "Translate into Russian (polite)",
    es: "Traduce al ruso, con cortesía",
    de: "Übersetze höflich ins Russische",
  },
  "Перемена": {
    en: "перемена (break between classes)",
    es: "перемена (recreo entre clases)",
    de: "перемена (Pause)",
  },
  "Переход пешком, совершенный вид от «перейти»": {
    en: "Crossing on foot, perfective «перейти»",
    es: "Cruce a pie, aspecto perfectivo de «перейти»",
    de: "Überqueren zu Fuß, perfektiver Aspekt von «перейти»",
  },
  "Писать кому?": {
    en: "«писать»: кому? (dative)",
    es: "«писать»: ¿кому? (dativo)",
    de: "«писать»: кому? (Dativ)",
  },
  "Писать, процесс сейчас": {
    en: "«писать», process happening now",
    es: "«писать»: proceso ahora",
    de: "«писать»: Prozess jetzt",
  },
  "Писать, прошедшее": {
    en: "«писать» in the past tense",
    es: "«писать» en pasado",
    de: "«писать» in der Vergangenheit",
  },
  "Пишу": {
    en: "пишу (“I write”)",
    es: "пишу (yo escribo)",
    de: "пишу (ich schreibe)",
  },
  "Повтор в будущем, несовершенный вид от «сдавать»": {
    en: "Repetition in the future, imperfective «сдавать»",
    es: "Repetición en el futuro, aspecto imperfectivo de «сдавать»",
    de: "Wiederholung in der Zukunft, imperfektiver Aspekt von «сдавать»",
  },
  "Повтор в прошлом, несовершенный вид от «случаться»": {
    en: "Repetition in the past, imperfective «случаться»",
    es: "Repetición en el pasado, aspecto imperfectivo de «случаться»",
    de: "Wiederholung in der Vergangenheit, imperfektiver Aspekt von «случаться»",
  },
  "Подлежащее": {
    en: "Subject (grammatical)",
    es: "Sujeto gramatical",
    de: "Grammatisches Subjekt",
  },
  "подруга / друг": {
    en: "Choose: подруга / друг",
    es: "Elige: подруга / друг",
    de: "Wähle: подруга / друг",
  },
  "Подруга, дательный": {
    en: "«Подруга»: дательный падеж (dative)",
    es: "«Подруга»: дательный падеж (dativo)",
    de: "«Подруга»: дательный падеж (Dativ)",
  },
  "Пойти, один раз": {
    en: "«пойти», one-time action",
    es: "«пойти»: una sola vez",
    de: "«пойти»: einmal",
  },
  "полдевятого / девять": {
    en: "Choose: полдевятого / девять",
    es: "Elige: полдевятого / девять",
    de: "Wähle: полдевятого / девять",
  },
  "Помогать кому?": {
    en: "«помогать»: кому? (dative)",
    es: "«помогать»: ¿кому? (dativo)",
    de: "«помогать»: кому? (Dativ)",
  },
  "Понять, множественное число": {
    en: "«понять», plural",
    es: "«понять», plural",
    de: "«понять», Plural",
  },
  "Предлог «о» и предложный падеж от слова «порядок»": {
    en: "Preposition «о» and предложный падеж (prepositional) of «порядок»",
    es: "Preposición «о» y предложный падеж (preposicional) de la palabra «порядок»",
    de: "Präposition «о» und предложный падеж (Präpositiv) des Wortes «порядок»",
  },
  "Предлог в": {
    en: "Preposition «в»",
    es: "Preposición «в»",
    de: "Präposition «в»",
  },
  "Предлог на": {
    en: "Preposition «на»",
    es: "Preposición «на»",
    de: "Präposition «на»",
  },
  "Предлог о": {
    en: "Preposition «о»",
    es: "Preposición «о»",
    de: "Präposition «о»",
  },
  "Предлог об": {
    en: "Preposition «об»",
    es: "Preposición «об»",
    de: "Präposition «об»",
  },
  "Предлог совместности": {
    en: "Preposition of accompaniment (“together with”)",
    es: "Preposición de compañía",
    de: "Präposition der Begleitung",
  },
  "Предложный падеж (где?)": {
    en: "Предложный падеж (prepositional): где? (“where?”)",
    es: "Предложный падеж (preposicional): ¿где?",
    de: "Предложный падеж (Präpositiv): где?",
  },
  "Предложный падеж (о чём?)": {
    en: "Предложный падеж (prepositional): о чём? (“about what?”)",
    es: "Предложный падеж (preposicional): ¿о чём?",
    de: "Предложный падеж (Präpositiv): о чём?",
  },
  "Преподаватель, дательный": {
    en: "«Преподаватель»: дательный падеж (dative)",
    es: "«Преподаватель»: дательный падеж (dativo)",
    de: "«Преподаватель»: дательный падеж (Dativ)",
  },
  "Прибытие транспортом, совершенный вид от «приехать»": {
    en: "Arrival by transport, perfective «приехать»",
    es: "Llegada en transporte, aspecto perfectivo de «приехать»",
    de: "Ankunft mit einem Verkehrsmittel, perfektiver Aspekt von «приехать»",
  },
  "Привычка": {
    en: "Habit / routine",
    es: "Un hábito o rutina",
    de: "Gewohnheit",
  },
  "Приехать, один приезд": {
    en: "«приехать», one arrival",
    es: "«приехать»: una sola llegada",
    de: "«приехать»: eine Ankunft",
  },
  "приятно / привет": {
    en: "Choose: приятно / привет",
    es: "Elige: приятно / привет",
    de: "Wähle: приятно / привет",
  },
  "Процесс": {
    en: "Ongoing process",
    es: "Un proceso en curso",
    de: "Ein fortlaufender Prozess",
  },
  "Процесс без результата": {
    en: "Process without a result",
    es: "Proceso sin resultado",
    de: "Prozess ohne Ergebnis",
  },
  "Процесс без результата, несовершенный вид от «повторять»": {
    en: "Process without a result, imperfective «повторять»",
    es: "Proceso sin resultado, aspecto imperfectivo de «повторять»",
    de: "Prozess ohne Ergebnis, imperfektiver Aspekt von «повторять»",
  },
  "Прочитать, результат": {
    en: "«прочитать», completed result",
    es: "«прочитать»: resultado",
    de: "«прочитать»: Ergebnis",
  },
  "Прошедшее время": {
    en: "Past tense",
    es: "Tiempo pasado",
    de: "Vergangenheit",
  },
  "Прошедшее; род говорящего": {
    en: "Past tense; gender of the speaker",
    es: "Pasado; género de quien habla",
    de: "Vergangenheit; Genus der sprechenden Person",
  },
  "Прощание": {
    en: "A farewell expression",
    es: "Despedida",
    de: "Verabschiedung",
  },
  "Прощание (одно слово)": {
    en: "Farewell (one word)",
    es: "Despedida (una palabra)",
    de: "Verabschiedung (ein Wort)",
  },
  "Рамка мнения, не союз": {
    en: "Opinion frame, not a conjunction",
    es: "Marco de opinión, no una conjunción",
    de: "Meinungsrahmen, keine Konjunktion",
  },
  "Расписание": {
    en: "расписание (timetable)",
    es: "расписание (horario)",
    de: "расписание (Stundenplan)",
  },
  "Реакция при знакомстве": {
    en: "Reaction when meeting someone",
    es: "Reacción al presentarse",
    de: "Reaktion bei der Vorstellung",
  },
  "Регулярно, пешком": {
    en: "Regularly, on foot",
    es: "Con regularidad, a pie",
    de: "Regelmäßig, zu Fuß",
  },
  "Регулярно, транспорт": {
    en: "Regularly, by vehicle",
    es: "Con regularidad, en transporte",
    de: "Regelmäßig, mit einem Verkehrsmittel",
  },
  "Результат": {
    en: "Completed result",
    es: "Resultado",
    de: "Das fertige Ergebnis",
  },
  "Результат к сроку, совершенный вид от «написать»": {
    en: "Result by a deadline, perfective «написать»",
    es: "Resultado para una fecha, aspecto perfectivo de «написать»",
    de: "Ergebnis bis zu einem Termin, perfektiver Aspekt von «написать»",
  },
  "Результат, один раз": {
    en: "Result, one-time action",
    es: "Resultado, una sola vez",
    de: "Ergebnis, einmal",
  },
  "Результат, совершенный вид от «подготовиться»": {
    en: "Result, perfective «подготовиться»",
    es: "Resultado, aspecto perfectivo de «подготовиться»",
    de: "Ergebnis, perfektiver Aspekt von «подготовиться»",
  },
  "Результат: прибытие": {
    en: "Result: arrival",
    es: "Resultado: llegada",
    de: "Ergebnis: Ankunft",
  },
  "Родительный падеж": {
    en: "Родительный падеж (genitive)",
    es: "Родительный падеж (genitivo)",
    de: "Родительный падеж (Genitiv)",
  },
  "Родительный падеж от слова «лекарство»": {
    en: "Родительный падеж (genitive) of «лекарство»",
    es: "Родительный падеж (genitivo) de la palabra «лекарство»",
    de: "Родительный падеж (Genitiv) des Wortes «лекарство»",
  },
  "Родительный падеж от слова «ответ»": {
    en: "Родительный падеж (genitive) of «ответ»",
    es: "Родительный падеж (genitivo) de la palabra «ответ»",
    de: "Родительный падеж (Genitiv) des Wortes «ответ»",
  },
  "Родительный падеж от слова «ошибка»": {
    en: "Родительный падеж (genitive) of «ошибка»",
    es: "Родительный падеж (genitivo) de la palabra «ошибка»",
    de: "Родительный падеж (Genitiv) des Wortes «ошибка»",
  },
  "Родительный падеж от слова «список»": {
    en: "Родительный падеж (genitive) of «список»",
    es: "Родительный падеж (genitivo) de la palabra «список»",
    de: "Родительный падеж (Genitiv) des Wortes «список»",
  },
  "Ручка, родительный": {
    en: "«Ручка»: родительный падеж (genitive)",
    es: "«Ручка»: родительный падеж (genitivo)",
    de: "«Ручка»: родительный падеж (Genitiv)",
  },
  "Ручка, творительный": {
    en: "«Ручка»: творительный падеж (instrumental)",
    es: "«Ручка»: творительный падеж (instrumental)",
    de: "«Ручка»: творительный падеж (Instrumental)",
  },
  "С кем?": {
    en: "С кем? (“with whom?”)",
    es: "¿С кем? (¿con quién?)",
    de: "С кем? (mit wem?)",
  },
  "Сдать, прошедшее": {
    en: "«сдать» in the past tense",
    es: "«сдать» en pasado",
    de: "«сдать» in der Vergangenheit",
  },
  "Сделайте вопрос вежливым": {
    en: "Make the question polite",
    es: "Haz la pregunta cortés",
    de: "Formuliere die Frage höflich",
  },
  "Сделайте обращение вежливым": {
    en: "Make the address form polite",
    es: "Haz el tratamiento cortés",
    de: "Formuliere die Anrede höflich",
  },
  "Сделать, результат": {
    en: "«сделать», completed result",
    es: "«сделать»: resultado",
    de: "«сделать»: Ergebnis",
  },
  "Сделать, результат, ж. р.": {
    en: "«сделать», completed result, feminine",
    es: "«сделать»: resultado, femenino",
    de: "«сделать»: Ergebnis, feminin",
  },
  "Сейчас, пешком": {
    en: "Right now, on foot",
    es: "Ahora, a pie",
    de: "Jetzt, zu Fuß",
  },
  "Сейчас, транспорт": {
    en: "Right now, by vehicle",
    es: "Ahora, en transporte",
    de: "Jetzt, mit einem Verkehrsmittel",
  },
  "Сестра, дательный": {
    en: "«Сестра»: дательный падеж (dative)",
    es: "«Сестра»: дательный падеж (dativo)",
    de: "«Сестра»: дательный падеж (Dativ)",
  },
  "Ситуация": {
    en: "Situation",
    es: "Situación",
    de: "Situation",
  },
  "Сколько + родительный": {
    en: "«сколько» + родительный падеж (genitive)",
    es: "«сколько» + родительный падеж (genitivo)",
    de: "«сколько» + родительный падеж (Genitiv)",
  },
  "Следствие двух причин": {
    en: "Result of two causes",
    es: "Consecuencia de dos causas",
    de: "Folge aus zwei Ursachen",
  },
  "Слушает": {
    en: "слушает (“he/she listens”)",
    es: "слушает (él/ella escucha)",
    de: "слушает (er/sie hört zu)",
  },
  "Смотрите": {
    en: "смотрите (plural «you”: “look”)",
    es: "смотрите (вы: ustedes miran)",
    de: "смотрите (вы: Sie sehen)",
  },
  "Соберите вежливую фразу": {
    en: "Put the polite phrase in order",
    es: "Ordena la frase cortés",
    de: "Baue die höfliche Wendung",
  },
  "Соберите вежливый вопрос": {
    en: "Put the polite question in order",
    es: "Ordena la pregunta cortés",
    de: "Baue die höfliche Frage",
  },
  "Соберите вопрос": {
    en: "Put the question in order",
    es: "Ordena la pregunta",
    de: "Baue die Frage",
  },
  "Соберите короткий ответ": {
    en: "Put the short answer in order",
    es: "Ordena la respuesta breve",
    de: "Baue die kurze Antwort",
  },
  "Соберите ответ": {
    en: "Put the answer in order",
    es: "Ordena la respuesta",
    de: "Baue die Antwort",
  },
  "Соберите предложение": {
    en: "Put the sentence in order",
    es: "Ordena la oración",
    de: "Baue den Satz",
  },
  "Соберите приветствие": {
    en: "Put the greeting in order",
    es: "Ordena el saludo",
    de: "Baue die Begrüßung",
  },
  "Соберите просьбу": {
    en: "Put the request in order",
    es: "Ordena la petición",
    de: "Baue die Bitte",
  },
  "Соберите прощание": {
    en: "Put the farewell in order",
    es: "Ordena la despedida",
    de: "Baue die Verabschiedung",
  },
  "Соберите реакцию": {
    en: "Put the reaction in order",
    es: "Ordena la reacción",
    de: "Baue die Reaktion",
  },
  "Соберите фразу": {
    en: "Put the phrase in order",
    es: "Ordena la frase",
    de: "Baue die Wendung",
  },
  "Соберите фразу преподавателя": {
    en: "Put the teacher’s phrase in order",
    es: "Ordena la frase del profesor",
    de: "Baue die Wendung der Lehrperson",
  },
  "Совершенный вид": {
    en: "Perfective aspect",
    es: "Aspecto perfectivo",
    de: "Perfektiver Aspekt",
  },
  "Согласование": {
    en: "Agreement",
    es: "Concordancia",
    de: "Kongruenz",
  },
  "Сосед, творительный": {
    en: "«Сосед»: творительный падеж (instrumental)",
    es: "«Сосед»: творительный падеж (instrumental)",
    de: "«Сосед»: творительный падеж (Instrumental)",
  },
  "Составное будущее": {
    en: "Compound future tense",
    es: "Futuro compuesto",
    de: "Zusammengesetztes Futur",
  },
  "Сохраните совершенный вид, исправьте время": {
    en: "Keep perfective aspect; fix the tense",
    es: "Conserva el aspecto perfectivo y corrige el tiempo verbal",
    de: "Behalte den perfektiven Aspekt und korrigiere das Tempus",
  },
  "Союз причины": {
    en: "Conjunction of cause",
    es: "Conjunción de causa",
    de: "Kausalkonjunktion",
  },
  "Союз причины при несогласии": {
    en: "Conjunction of cause (when disagreeing)",
    es: "Conjunción de causa al no estar de acuerdo",
    de: "Kausalkonjunktion bei Widerspruch",
  },
  "Союз следствия": {
    en: "Conjunction of result",
    es: "Conjunción de consecuencia",
    de: "Konjunktion der Folge",
  },
  "Союз условия; в придаточном будущее": {
    en: "Condition conjunction; future in the subordinate clause",
    es: "Conjunción de condición; en la subordinada, futuro",
    de: "Konditionalkonjunktion; im Nebensatz Futur",
  },
  "Союз цели перед инфинитивом": {
    en: "Purpose conjunction before the infinitive",
    es: "Conjunción de finalidad delante del infinitivo",
    de: "Finalkonjunktion vor dem Infinitiv",
  },
  "Средний шаг последовательности": {
    en: "Middle step of the sequence",
    es: "Paso intermedio de la secuencia",
    de: "Mittlerer Schritt der Abfolge",
  },
  "Страна": {
    en: "A country’s name",
    es: "Nombre de un país",
    de: "Name eines Landes",
  },
  "студент (о мужчине)": {
    en: "«студент» (about a man)",
    es: "«студент» (referido a un hombre)",
    de: "«студент» (über einen Mann)",
  },
  "Студент, принадлежность": {
    en: "«студент», possession (“whose student”)",
    es: "«студент»: pertenencia",
    de: "«студент»: Zugehörigkeit",
  },
  "Студент, родительный мн. ч.": {
    en: "«Студент»: родительный падеж (genitive), plural",
    es: "«Студент»: родительный падеж (genitivo), plural",
    de: "«Студент»: родительный падеж (Genitiv), Plural",
  },
  "студентка": {
    en: "«студентка» (student, feminine)",
    es: "«студентка» (estudiante)",
    de: "«студентка» (Studentin)",
  },
  "Творительный падеж от слова «сохранность»": {
    en: "Творительный падеж (instrumental) of «сохранность»",
    es: "Творительный падеж (instrumental) de la palabra «сохранность»",
    de: "Творительный падеж (Instrumental) des Wortes «сохранность»",
  },
  "Творительный падеж: о ней, слово «вожатый»": {
    en: "Творительный падеж (instrumental): about her, word «вожатый»",
    es: "Творительный падеж (instrumental): sobre ella, palabra «вожатый»",
    de: "Творительный падеж (Instrumental): über sie, Wort «вожатый»",
  },
  "тебя / вас": {
    en: "Choose: тебя / вас (informal / formal «вы»)",
    es: "Elige: тебя / вас (tú / usted)",
    de: "Wähle: тебя / вас (du / Sie)",
  },
  "Тетрадь": {
    en: "тетрадь (notebook)",
    es: "тетрадь (cuaderno)",
    de: "тетрадь (Heft)",
  },
  "Три часа": {
    en: "Three o’clock",
    es: "Son las tres en punto",
    de: "Drei Uhr genau",
  },
  "ты / вы": {
    en: "Choose: ты / вы (informal / formal)",
    es: "Elige: ты / вы (tú / usted)",
    de: "Wähle: ты / вы (du / Sie)",
  },
  "Уберите лишнее": {
    en: "Remove what is extra",
    es: "Quita lo que sobra",
    de: "Streiche das Überflüssige",
  },
  "Уберите лишнее «что» при «по-моему»": {
    en: "Remove the extra «что» with «по-моему»",
    es: "Quita el «что» de más junto a «по-моему»",
    de: "Streiche das überflüssige «что» bei «по-моему»",
  },
  "Указание на человека": {
    en: "Referring to a person",
    es: "Referencia a una persona",
    de: "Bezug auf eine Person",
  },
  "Университетская лексика": {
    en: "University vocabulary",
    es: "Léxico universitario",
    de: "Universitätswortschatz",
  },
  "Уточняющий вопрос (уже знаем ответ-тип)": {
    en: "Clarifying question (we already know the answer type)",
    es: "Pregunta de aclaración (ya sabemos el tipo de respuesta)",
    de: "Präzisierungsfrage (den Antworttyp kennen wir schon)",
  },
  "Учатся": {
    en: "учатся (“they study”)",
    es: "учатся (ellos estudian)",
    de: "учатся (sie lernen)",
  },
  "Учёба": {
    en: "Studies (at university)",
    es: "Estudios universitarios",
    de: "Das Universitätsstudium",
  },
  "Учитель, творительный": {
    en: "«Учитель»: творительный падеж (instrumental)",
    es: "«Учитель»: творительный падеж (instrumental)",
    de: "«Учитель»: творительный падеж (Instrumental)",
  },
  "фамилия / имя": {
    en: "Choose: фамилия / имя (surname / given name)",
    es: "Elige: фамилия / имя (apellido / nombre)",
    de: "Wähle: фамилия / имя (Familienname / Vorname)",
  },
  "Фон, несовершенный вид от «искать»": {
    en: "Background action, imperfective «искать»",
    es: "Acción de fondo, aspecto imperfectivo de «искать»",
    de: "Hintergrundhandlung, imperfektiver Aspekt von «искать»",
  },
  "Фонетика": {
    en: "Phonetics",
    es: "Fonética del ruso",
    de: "Russische Phonetik",
  },
  "Формальное приветствие": {
    en: "Formal greeting",
    es: "Saludo formal",
    de: "Formelle Begrüßung",
  },
  "Формула": {
    en: "A set phrase pattern",
    es: "Una fórmula fija",
    de: "Eine feste Redewendung",
  },
  "Функция знака": {
    en: "Function of the sign",
    es: "Función del signo",
    de: "Funktion des Zeichens",
  },
  "Хлеб, родительный": {
    en: "«Хлеб»: родительный падеж (genitive)",
    es: "«Хлеб»: родительный падеж (genitivo)",
    de: "«Хлеб»: родительный падеж (Genitiv)",
  },
  "Ходить, регулярно": {
    en: "«ходить», regularly (on foot)",
    es: "«ходить»: con regularidad",
    de: "«ходить»: regelmäßig",
  },
  "хорошо / здравствуйте": {
    en: "Choose: хорошо / здравствуйте",
    es: "Elige: хорошо / здравствуйте",
    de: "Wähle: хорошо / здравствуйте",
  },
  "Чем?": {
    en: "Чем? (instrumental—“with what?” / “using what?”)",
    es: "¿Чем? (instrumental: ¿con qué?)",
    de: "Чем? (Instrumental: womit?)",
  },
  "Читает": {
    en: "читает (“he/she reads”)",
    es: "читает (él/ella lee)",
    de: "читает (er/sie liest)",
  },
  "Читать, множественное число": {
    en: "«читать», plural",
    es: "«читать», plural",
    de: "«читать», Plural",
  },
  "Читать, процесс": {
    en: "«читать», ongoing process",
    es: "«читать»: proceso",
    de: "«читать»: Prozess",
  },
  "Читать, прошедшее": {
    en: "«читать» in the past tense",
    es: "«читать» en pasado",
    de: "«читать» in der Vergangenheit",
  },
  "что / кто": {
    en: "Choose: что / кто",
    es: "Elige: что / кто",
    de: "Wähle: что / кто",
  },
  "Чья?": {
    en: "Чья? (“whose?”, feminine)",
    es: "¿Чья? (¿de quién?, femenino)",
    de: "Чья? (wessen?, feminin)",
  },
  "Чья? Принадлежность": {
    en: "Чья? Possession",
    es: "¿Чья? Pertenencia",
    de: "Чья? Zugehörigkeit",
  },
  "Шаг сразу после законченного действия": {
    en: "Step right after a completed action",
    es: "Paso justo después de una acción terminada",
    de: "Schritt direkt nach einer abgeschlossenen Handlung",
  },
  "ь / ъ / ы": {
    en: "Choose: ь / ъ / ы",
    es: "Elige: ь / ъ / ы",
    de: "Wähle: ь / ъ / ы",
  },
  "Это / Кто": {
    en: "Choose: Это / Кто",
    es: "Elige: Это / Кто",
    de: "Wähle: Это / Кто",
  },
  "date question": {
    en: "Question about the date",
    es: "Pregunta por la fecha",
    de: "Frage nach dem Datum",
  },
  "evening": {
    en: "In the evening",
    es: "Por la tarde",
    de: "Am Abend (Tageszeit)",
  },
  "from 3": {
    en: "From 3 o’clock",
    es: "Desde las 3",
    de: "Ab 3 Uhr (Startzeit)",
  },
  "half past": {
    en: "Half past",
    es: "Media hora después de la hora",
    de: "Halbe Stunde nach der vollen Stunde",
  },
  "half past three": {
    en: "Half past three",
    es: "Las tres y media",
    de: "Halb vier",
  },
  "lunch hour": {
    en: "Lunchtime",
    es: "Hora de comer",
    de: "Mittagsstunde",
  },
  "minutes": {
    en: "Minutes on the clock",
    es: "Minutos en el reloj",
    de: "Minuten auf der Uhr",
  },
  "morning": {
    en: "In the morning",
    es: "Por la mañana",
    de: "Am Morgen (Tageszeit)",
  },
  "quarter to 5": {
    en: "A quarter to five",
    es: "Menos cuarto de las 5",
    de: "Viertel vor fünf",
  },
  "today": {
    en: "Use the word \"today\"",
    es: "Usa la palabra «hoy»",
    de: "Benutze das Wort «heute»",
  },
  "tomorrow": {
    en: "Use the word \"tomorrow\"",
    es: "Usa la palabra «mañana»",
    de: "Benutze das Wort «morgen»",
  },
  "You're welcome": {
    en: "You’re welcome",
    es: "Respuesta cortés: de nada",
    de: "Gern geschehen",
  },
  "3-е лицо настоящего времени от «требовать»": {
    en: "3rd person present of «требовать»",
    es: "3.ª persona del presente de «требовать»",
    de: "3. Person Präsens von «требовать»",
  },
  "Безличная рамка академического мнения, 3-е лицо от «представляться»": {
    en: "Impersonal frame for an academic opinion, 3rd person of «представляться»",
    es: "Marco impersonal de una opinión académica, 3.ª persona de «представляться»",
    de: "Unpersönlicher Rahmen einer akademischen Meinung, 3. Person von «представляться»",
  },
  "Будущее совершенного вида от «сузить»: один результат к сроку": {
    en: "Perfective future of «сузить»: one result by a deadline",
    es: "Futuro perfectivo de «сузить»: un resultado para una fecha",
    de: "Perfektives Futur von «сузить»: ein Ergebnis bis zum Termin",
  },
  "Будущее совершенного вида после «пока не», от «сверить»": {
    en: "Perfective future after «пока не», from «сверить»",
    es: "Futuro perfectivo después de «пока не», de «сверить»",
    de: "Perfektives Futur nach «пока не», von «сверить»",
  },
  "Будущее страдательного залога: будет + краткое причастие от «принять», средний род": {
    en: "Future passive: будет + the short participle of «принять», neuter",
    es: "Futuro pasivo: будет + participio corto de «принять», neutro",
    de: "Futur Passiv: будет + kurzes Partizip von «принять», Neutrum",
  },
  "Винительный падеж темы в начале фразы": {
    en: "Accusative of the theme at the start of the sentence",
    es: "Acusativo del tema al principio de la frase",
    de: "Akkusativ des Themas am Satzanfang",
  },
  "Винительный падеж: оценочное слово, которого в заголовке быть не должно": {
    en: "Accusative: the evaluative word that should not be in the headline",
    es: "Acusativo: la palabra valorativa que no debe estar en el titular",
    de: "Akkusativ: das Wertwort, das nicht in die Überschrift gehört",
  },
  "Вторая часть оборота: свободно в своей среде": {
    en: "Second half of the idiom: at ease in one's element",
    es: "Segunda parte del giro: a gusto en su elemento",
    de: "Zweiter Teil der Wendung: in seinem Element",
  },
  "Вторая часть пары «не столько»": {
    en: "Second half of the pair «не столько»",
    es: "Segunda parte del par «не столько»",
    de: "Zweiter Teil des Paars «не столько»",
  },
  "Выберите безличную рамку академического мнения": {
    en: "Choose the impersonal frame for an academic opinion",
    es: "Elige el marco impersonal de una opinión académica",
    de: "Wähle den unpersönlichen Rahmen einer akademischen Meinung",
  },
  "Выберите будущее одного результата к сроку": {
    en: "Choose the future of one result by a deadline",
    es: "Elige el futuro de un solo resultado para una fecha",
    de: "Wähle das Futur eines Ergebnisses bis zum Termin",
  },
  "Выберите вежливое завершение": {
    en: "Choose the polite closing",
    es: "Elige el cierre cortés",
    de: "Wähle den höflichen Schluss",
  },
  "Выберите вид после «так и не»": {
    en: "Choose the aspect after «так и не»",
    es: "Elige el aspecto después de «так и не»",
    de: "Wähle den Aspekt nach «так и не»",
  },
  "Выберите вид процесса без результата": {
    en: "Choose the aspect of a process with no result",
    es: "Elige el aspecto de un proceso sin resultado",
    de: "Wähle den Aspekt eines Prozesses ohne Ergebnis",
  },
  "Выберите вид: результат уже отменён": {
    en: "Choose the aspect: the result has already been undone",
    es: "Elige el aspecto: el resultado ya se ha anulado",
    de: "Wähle den Aspekt: das Ergebnis ist schon aufgehoben",
  },
  "Выберите вторую часть пары «не столько»": {
    en: "Choose the second half of the pair «не столько»",
    es: "Elige la segunda parte del par «не столько»",
    de: "Wähle den zweiten Teil des Paars «не столько»",
  },
  "Выберите глагол академической формулы": {
    en: "Choose the verb of the academic formula",
    es: "Elige el verbo de la fórmula académica",
    de: "Wähle das Verb der akademischen Formel",
  },
  "Выберите глагол опровержения": {
    en: "Choose the verb of refutation",
    es: "Elige el verbo de la refutación",
    de: "Wähle das Verb der Widerlegung",
  },
  "Выберите глагол публичного заявления": {
    en: "Choose the verb of a public statement",
    es: "Elige el verbo de una declaración pública",
    de: "Wähle das Verb einer öffentlichen Erklärung",
  },
  "Выберите границу после «пока не»": {
    en: "Choose the boundary after «пока не»",
    es: "Elige el límite después de «пока не»",
    de: "Wähle die Grenze nach «пока не»",
  },
  "Выберите деепричастие одновременного действия": {
    en: "Choose the gerund of a simultaneous action",
    es: "Elige el gerundio de una acción simultánea",
    de: "Wähle das Adverbialpartizip einer gleichzeitigen Handlung",
  },
  "Выберите деепричастие предшествующего действия": {
    en: "Choose the gerund of a prior action",
    es: "Elige el gerundio de una acción anterior",
    de: "Wähle das Adverbialpartizip einer vorangehenden Handlung",
  },
  "Выберите деепричастие: действие уже закончилось": {
    en: "Choose the gerund: the action is already finished",
    es: "Elige el gerundio: la acción ya ha terminado",
    de: "Wähle das Adverbialpartizip: die Handlung ist schon zu Ende",
  },
  "Выберите действительное причастие настоящего времени": {
    en: "Choose the present active participle",
    es: "Elige el participio activo de presente",
    de: "Wähle das aktive Partizip Präsens",
  },
  "Выберите действительное причастие прошедшего времени": {
    en: "Choose the past active participle",
    es: "Elige el participio activo de pasado",
    de: "Wähle das aktive Partizip der Vergangenheit",
  },
  "Выберите добавочный довод, не следствие": {
    en: "Choose an additional argument, not a consequence",
    es: "Elige un argumento añadido, no una consecuencia",
    de: "Wähle ein zusätzliches Argument, keine Folge",
  },
  "Выберите заголовок списка документов": {
    en: "Choose the heading of the document list",
    es: "Elige el encabezado de la lista de documentos",
    de: "Wähle die Überschrift der Dokumentenliste",
  },
  "Выберите инфинитив вежливого несогласия": {
    en: "Choose the infinitive of polite disagreement",
    es: "Elige el infinitivo del desacuerdo cortés",
    de: "Wähle den Infinitiv des höflichen Widerspruchs",
  },
  "Выберите инфинитив результата, не процесса": {
    en: "Choose the infinitive of a result, not a process",
    es: "Elige el infinitivo del resultado, no del proceso",
    de: "Wähle den Infinitiv des Ergebnisses, nicht des Prozesses",
  },
  "Выберите книжное наречие времени": {
    en: "Choose the bookish adverb of time",
    es: "Elige el adverbio de tiempo culto",
    de: "Wähle das gehobene Zeitadverb",
  },
  "Выберите книжное наречие степени": {
    en: "Choose the bookish adverb of degree",
    es: "Elige el adverbio de grado culto",
    de: "Wähle das gehobene Gradadverb",
  },
  "Выберите книжный глагол зрения": {
    en: "Choose the bookish verb of seeing",
    es: "Elige el verbo de visión culto",
    de: "Wähle das gehobene Verb des Sehens",
  },
  "Выберите косвенную речь": {
    en: "Choose the reported speech",
    es: "Elige el estilo indirecto",
    de: "Wähle die indirekte Rede",
  },
  "Выберите косвенный вопрос": {
    en: "Choose the indirect question",
    es: "Elige la pregunta indirecta",
    de: "Wähle die indirekte Frage",
  },
  "Выберите косвенный вопрос с «ли»": {
    en: "Choose the indirect question with «ли»",
    es: "Elige la pregunta indirecta con «ли»",
    de: "Wähle die indirekte Frage mit «ли»",
  },
  "Выберите краткую форму, мужской род": {
    en: "Choose the short form, masculine",
    es: "Elige la forma corta, masculino",
    de: "Wähle die Kurzform, Maskulinum",
  },
  "Выберите маркер переформулировки": {
    en: "Choose the reformulation marker",
    es: "Elige el marcador de reformulación",
    de: "Wähle den Marker der Umformulierung",
  },
  "Выберите маркер следствия": {
    en: "Choose the consequence marker",
    es: "Elige el marcador de consecuencia",
    de: "Wähle den Folgemarker",
  },
  "Выберите маркер уступки, не пересказа": {
    en: "Choose the concession marker, not a retelling",
    es: "Elige el marcador de concesión, no de recuento",
    de: "Wähle den Einräumungsmarker, keine Nacherzählung",
  },
  "Выберите нейтральный глагол расхождения": {
    en: "Choose the neutral verb of divergence",
    es: "Elige el verbo neutro de divergencia",
    de: "Wähle das neutrale Verb der Abweichung",
  },
  "Выберите нейтральный союз причины": {
    en: "Choose the neutral conjunction of cause",
    es: "Elige la conjunción neutra de causa",
    de: "Wähle die neutrale Kausalkonjunktion",
  },
  "Выберите нереальное условие": {
    en: "Choose the counterfactual condition",
    es: "Elige la condición irreal",
    de: "Wähle die irreale Bedingung",
  },
  "Выберите нереальное условие, без второго «бы»": {
    en: "Choose the counterfactual condition, without a second «бы»",
    es: "Elige la condición irreal, sin un segundo «бы»",
    de: "Wähle die irreale Bedingung, ohne ein zweites «бы»",
  },
  "Выберите несостоявшееся однократное действие": {
    en: "Choose the single action that did not happen",
    es: "Elige la acción única que no llegó a ocurrir",
    de: "Wähle die einmalige Handlung, die nicht stattfand",
  },
  "Выберите оборот откровенности": {
    en: "Choose the idiom of frankness",
    es: "Elige el giro de franqueza",
    de: "Wähle die Wendung der Offenheit",
  },
  "Выберите оборот с одним подлежащим": {
    en: "Choose the construction with one subject",
    es: "Elige la construcción con un solo sujeto",
    de: "Wähle die Konstruktion mit einem Subjekt",
  },
  "Выберите оборот согласия": {
    en: "Choose the idiom of harmony",
    es: "Elige el giro de armonía",
    de: "Wähle die Wendung des Einvernehmens",
  },
  "Выберите оборот спешки": {
    en: "Choose the idiom of haste",
    es: "Elige el giro de prisa",
    de: "Wähle die Wendung der Eile",
  },
  "Выберите оборот тесноты": {
    en: "Choose the idiom of a packed space",
    es: "Elige el giro de estar apretados",
    de: "Wähle die Wendung der Enge",
  },
  "Выберите оборот: внезапно и не вовремя": {
    en: "Choose the idiom: sudden and untimely",
    es: "Elige el giro: de pronto y a destiempo",
    de: "Wähle die Wendung: plötzlich und zur Unzeit",
  },
  "Выберите оборот: обещать и не делать": {
    en: "Choose the idiom: to promise and not do",
    es: "Elige el giro: prometer y no hacer",
    de: "Wähle die Wendung: versprechen und nicht tun",
  },
  "Выберите оборот: свободно в новой среде": {
    en: "Choose the idiom: at ease in a new setting",
    es: "Elige el giro: a gusto en un entorno nuevo",
    de: "Wähle die Wendung: in einer neuen Umgebung in seinem Element",
  },
  "Выберите оборот: сознательно молчать": {
    en: "Choose the idiom: to stay silent on purpose",
    es: "Elige el giro: callar a propósito",
    de: "Wähle die Wendung: bewusst schweigen",
  },
  "Выберите обычный процесс": {
    en: "Choose an ordinary process",
    es: "Elige un proceso habitual",
    de: "Wähle einen gewöhnlichen Prozess",
  },
  "Выберите одно уже случившееся вынужденное действие": {
    en: "Choose one compelled action that has already happened",
    es: "Elige una acción forzada que ya ocurrió",
    de: "Wähle eine erzwungene Handlung, die schon geschehen ist",
  },
  "Выберите однократный успех": {
    en: "Choose a one-time success",
    es: "Elige un éxito único",
    de: "Wähle einen einmaligen Erfolg",
  },
  "Выберите отрицательную просьбу": {
    en: "Choose the negative request",
    es: "Elige la petición negativa",
    de: "Wähle die verneinte Bitte",
  },
  "Выберите официальное обращение к мужчине": {
    en: "Choose the official address to a man",
    es: "Elige el tratamiento oficial hacia un hombre",
    de: "Wähle die amtliche Anrede an einen Mann",
  },
  "Выберите официальную рамку времени": {
    en: "Choose the official time frame",
    es: "Elige el marco temporal oficial",
    de: "Wähle den amtlichen Zeitrahmen",
  },
  "Выберите официальную связку, после которой уже стоит «с»": {
    en: "Choose the official link after which «с» is already there",
    es: "Elige el nexo oficial tras el cual ya está «с»",
    de: "Wähle die amtliche Fügung, nach der «с» schon steht",
  },
  "Выберите официальную формулу сообщения": {
    en: "Choose the official formula for informing",
    es: "Elige la fórmula oficial de comunicación",
    de: "Wähle die amtliche Mitteilungsformel",
  },
  "Выберите повторяющийся процесс": {
    en: "Choose the repeated process",
    es: "Elige el proceso que se repite",
    de: "Wähle den wiederholten Prozess",
  },
  "Выберите порядок с темой «отзыв»": {
    en: "Choose the word order with «отзыв» as the theme",
    es: "Elige el orden con «отзыв» como tema",
    de: "Wähle die Wortstellung mit «отзыв» als Thema",
  },
  "Выберите предлог соответствия с дательным падежом": {
    en: "Choose the preposition of accordance with the dative",
    es: "Elige la preposición de conformidad con dativo",
    de: "Wähle die Präposition der Entsprechung mit Dativ",
  },
  "Выберите предлог уступки с дательным": {
    en: "Choose the preposition of concession with the dative",
    es: "Elige la preposición de concesión con dativo",
    de: "Wähle die Präposition der Einräumung mit Dativ",
  },
  "Выберите процесс в настоящем времени": {
    en: "Choose the process in the present",
    es: "Elige el proceso en presente",
    de: "Wähle den Prozess im Präsens",
  },
  "Выберите процесс проверки, не готовый итог": {
    en: "Choose the process of checking, not a finished result",
    es: "Elige el proceso de revisión, no el resultado ya listo",
    de: "Wähle den Prüfvorgang, nicht das fertige Ergebnis",
  },
  "Выберите работу с чужим сюжетом": {
    en: "Choose working with someone else's plot",
    es: "Elige el trabajo con una trama ajena",
    de: "Wähle die Arbeit mit einer fremden Handlung",
  },
  "Выберите разговорное слово о деньгах": {
    en: "Choose the colloquial word for money",
    es: "Elige la palabra coloquial para el dinero",
    de: "Wähle das umgangssprachliche Wort für Geld",
  },
  "Выберите разговорное согласие": {
    en: "Choose the colloquial agreement",
    es: "Elige el asentimiento coloquial",
    de: "Wähle die umgangssprachliche Zustimmung",
  },
  "Выберите разговорный зачин": {
    en: "Choose the colloquial opener",
    es: "Elige el arranque coloquial",
    de: "Wähle den umgangssprachlichen Einstieg",
  },
  "Выберите рамку «во время передачи»": {
    en: "Choose the frame «during the broadcast»",
    es: "Elige el marco «durante la emisión»",
    de: "Wähle den Rahmen «während der Sendung»",
  },
  "Выберите рамку анонимности": {
    en: "Choose the anonymity frame",
    es: "Elige el marco del anonimato",
    de: "Wähle den Rahmen der Anonymität",
  },
  "Выберите реальное условие": {
    en: "Choose the real condition",
    es: "Elige la condición real",
    de: "Wähle die reale Bedingung",
  },
  "Выберите реальное условие при императиве": {
    en: "Choose the real condition with an imperative",
    es: "Elige la condición real con imperativo",
    de: "Wähle die reale Bedingung beim Imperativ",
  },
  "Выберите результат": {
    en: "Choose the result",
    es: "Elige el resultado",
    de: "Wähle das Ergebnis",
  },
  "Выберите результат в прошлом": {
    en: "Choose the result in the past",
    es: "Elige el resultado en el pasado",
    de: "Wähle das Ergebnis in der Vergangenheit",
  },
  "Выберите результат с агентом в творительном": {
    en: "Choose the result with the agent in the instrumental",
    es: "Elige el resultado con el agente en instrumental",
    de: "Wähle das Ergebnis mit dem Agens im Instrumental",
  },
  "Выберите результат, средний род": {
    en: "Choose the result, neuter",
    es: "Elige el resultado, neutro",
    de: "Wähle das Ergebnis, Neutrum",
  },
  "Выберите союз цели при реальном действии": {
    en: "Choose the purpose conjunction with a real action",
    es: "Elige la conjunción de finalidad con una acción real",
    de: "Wähle die Zweckkonjunktion bei einer realen Handlung",
  },
  "Выберите статус гипотезы, которую не сняли": {
    en: "Choose the status of a hypothesis that has not been dropped",
    es: "Elige el estatus de una hipótesis que no se ha retirado",
    de: "Wähle den Status einer Hypothese, die nicht aufgegeben wurde",
  },
  "Выберите страдательное причастие настоящего времени": {
    en: "Choose the present passive participle",
    es: "Elige el participio pasivo de presente",
    de: "Wähle das passive Partizip Präsens",
  },
  "Выберите страдательное причастие прошедшего времени": {
    en: "Choose the past passive participle",
    es: "Elige el participio pasivo de pasado",
    de: "Wähle das passive Partizip der Vergangenheit",
  },
  "Выберите страдательное причастие: перевод уже закончен": {
    en: "Choose the passive participle: the translation is already finished",
    es: "Elige el participio pasivo: la traducción ya está terminada",
    de: "Wähle das passive Partizip: die Übersetzung ist schon fertig",
  },
  "Выберите творительный падеж оценки": {
    en: "Choose the instrumental of evaluation",
    es: "Elige el instrumental de la valoración",
    de: "Wähle den Instrumental der Wertung",
  },
  "Выберите термин высшей точки напряжения": {
    en: "Choose the term for the highest point of tension",
    es: "Elige el término del punto de mayor tensión",
    de: "Wähle den Terminus für den höchsten Spannungspunkt",
  },
  "Выберите термин голоса внутри фрагмента": {
    en: "Choose the term for the voice inside the fragment",
    es: "Elige el término de la voz dentro del fragmento",
    de: "Wähle den Terminus für die Stimme im Fragment",
  },
  "Выберите термин намёка, не чужой страницы": {
    en: "Choose the term for a hint, not someone else's page",
    es: "Elige el término de un guiño, no de una página ajena",
    de: "Wähle den Terminus für einen Hinweis, nicht für eine fremde Seite",
  },
  "Выберите термин несказанного смысла": {
    en: "Choose the term for unspoken meaning",
    es: "Elige el término del sentido no dicho",
    de: "Wähle den Terminus für den ungesagten Sinn",
  },
  "Выберите термин оценочного определения": {
    en: "Choose the term for an evaluative modifier",
    es: "Elige el término del modificador valorativo",
    de: "Wähle den Terminus für eine wertende Bestimmung",
  },
  "Выберите термин повторяемости опыта": {
    en: "Choose the term for reproducibility of an experiment",
    es: "Elige el término de la repetibilidad del experimento",
    de: "Wähle den Terminus für die Wiederholbarkeit des Versuchs",
  },
  "Выберите термин повторяющегося мотива": {
    en: "Choose the term for a recurring motif",
    es: "Elige el término del motivo que se repite",
    de: "Wähle den Terminus für ein wiederkehrendes Motiv",
  },
  "Выберите термин статистики": {
    en: "Choose the statistics term",
    es: "Elige el término de estadística",
    de: "Wähle den Statistikterminus",
  },
  "Выберите термин финала конфликта": {
    en: "Choose the term for the end of the conflict",
    es: "Elige el término del final del conflicto",
    de: "Wähle den Terminus für das Ende des Konflikts",
  },
  "Выберите то, чего в заголовке быть не должно": {
    en: "Choose what should not be in the headline",
    es: "Elige lo que no debe estar en el titular",
    de: "Wähle das, was nicht in die Überschrift gehört",
  },
  "Выберите верную интерпретацию сравнения": {
    en: "Choose the correct interpretation of the comparison",
    es: "Elige la interpretación correcta de la comparación",
    de: "Wähle die richtige Deutung des Vergleichs",
  },
  "Выберите троп скрытого уподобления": {
    en: "Choose the trope of a hidden likeness",
    es: "Elige el tropo de una semejanza oculta",
    de: "Wähle den Tropus einer verdeckten Ähnlichkeit",
  },
  "Выберите уступку: факт признан, вывод другой": {
    en: "Choose the concession: the fact is granted, the conclusion is different",
    es: "Elige la concesión: el hecho se admite, la conclusión es otra",
    de: "Wähle die Einräumung: der Fakt gilt, die Folgerung ist eine andere",
  },
  "Выберите форму после «попросил»": {
    en: "Choose the form after «попросил»",
    es: "Elige la forma después de «попросил»",
    de: "Wähle die Form nach «попросил»",
  },
  "Выберите форму после «прошу»": {
    en: "Choose the form after «прошу»",
    es: "Elige la forma después de «прошу»",
    de: "Wähle die Form nach «прошу»",
  },
  "Выберите формулу основания": {
    en: "Choose the formula of grounds",
    es: "Elige la fórmula del fundamento",
    de: "Wähle die Formel der Grundlage",
  },
  "Выберите формулу, которая грамматически открывает официальную просьбу": {
    en: "Choose the formula that grammatically opens an official request",
    es: "Elige la fórmula que abre gramaticalmente una petición oficial",
    de: "Wähle die Formel, die eine amtliche Bitte grammatisch eröffnet",
  },
  "Выберите частицу вопреки ожиданию; говорящая — Анна": {
    en: "Choose the particle contrary to expectation; the speaker is Anna",
    es: "Elige la partícula contra lo esperado; quien habla es Anna",
    de: "Wähle die Partikel wider Erwarten; die Sprecherin ist Anna",
  },
  "Выберите частицу выделения темы": {
    en: "Choose the particle that highlights the theme",
    es: "Elige la partícula que destaca el tema",
    de: "Wähle die Partikel der Themenhervorhebung",
  },
  "Выберите частицу известного собеседнику факта": {
    en: "Choose the particle for a fact the listener already knows",
    es: "Elige la partícula de un hecho que el interlocutor ya conoce",
    de: "Wähle die Partikel für einen dem Gesprächspartner bekannten Fakt",
  },
  "Выберите частицу косвенного вопроса": {
    en: "Choose the particle of the indirect question",
    es: "Elige la partícula de la pregunta indirecta",
    de: "Wähle die Partikel der indirekten Frage",
  },
  "Выберите частицу ненавязчивой просьбы": {
    en: "Choose the particle of a gentle request",
    es: "Elige la partícula de una petición suave",
    de: "Wähle die Partikel einer unaufdringlichen Bitte",
  },
  "Выберите частицу сильного удивления": {
    en: "Choose the particle of strong surprise",
    es: "Elige la partícula de fuerte sorpresa",
    de: "Wähle die Partikel starken Erstaunens",
  },
  "Выберите частицу сомнения": {
    en: "Choose the particle of doubt",
    es: "Elige la partícula de duda",
    de: "Wähle die Partikel des Zweifels",
  },
  "Выберите этикет переспроса": {
    en: "Choose the etiquette of asking for confirmation",
    es: "Elige la fórmula de pedir confirmación",
    de: "Wähle die Höflichkeit des Nachfragens",
  },
  "Деепричастие несовершенного вида от «заниматься»": {
    en: "Imperfective gerund of «заниматься»",
    es: "Gerundio imperfectivo de «заниматься»",
    de: "Imperfektives Adverbialpartizip von «заниматься»",
  },
  "Деепричастие несовершенного вида от «идти»": {
    en: "Imperfective gerund of «идти»",
    es: "Gerundio imperfectivo de «идти»",
    de: "Imperfektives Adverbialpartizip von «идти»",
  },
  "Деепричастие несовершенного вида от «слушать»: действие одновременно с «записывала»": {
    en: "Imperfective gerund of «слушать»: simultaneous with «записывала»",
    es: "Gerundio imperfectivo de «слушать»: simultáneo con «записывала»",
    de: "Imperfektives Adverbialpartizip von «слушать»: gleichzeitig mit «записывала»",
  },
  "Деепричастие совершенного вида от «заполнить»: действие до «отнёс»": {
    en: "Perfective gerund of «заполнить»: the action is before «отнёс»",
    es: "Gerundio perfectivo de «заполнить»: la acción es anterior a «отнёс»",
    de: "Perfektives Adverbialpartizip von «заполнить»: die Handlung liegt vor «отнёс»",
  },
  "Деепричастие совершенного вида от «исправить»": {
    en: "Perfective gerund of «исправить»",
    es: "Gerundio perfectivo de «исправить»",
    de: "Perfektives Adverbialpartizip von «исправить»",
  },
  "Деепричастие совершенного вида от «получить»": {
    en: "Perfective gerund of «получить»",
    es: "Gerundio perfectivo de «получить»",
    de: "Perfektives Adverbialpartizip von «получить»",
  },
  "Деепричастие совершенного вида от «проверить»": {
    en: "Perfective gerund of «проверить»",
    es: "Gerundio perfectivo de «проверить»",
    de: "Perfektives Adverbialpartizip von «проверить»",
  },
  "Деепричастие совершенного вида от «узнать» с отрицанием": {
    en: "Perfective gerund of «узнать» with negation",
    es: "Gerundio perfectivo de «узнать» con negación",
    de: "Perfektives Adverbialpartizip von «узнать» mit Verneinung",
  },
  "Действительное причастие прошедшего времени от «войти», мужской род": {
    en: "Past active participle of «войти», masculine",
    es: "Participio activo de pasado de «войти», masculino",
    de: "Aktives Partizip der Vergangenheit von «войти», Maskulinum",
  },
  "Действительное причастие прошедшего времени от «закончить», женский род": {
    en: "Past active participle of «закончить», feminine",
    es: "Participio activo de pasado de «закончить», femenino",
    de: "Aktives Partizip der Vergangenheit von «закончить», Femininum",
  },
  "Действительное причастие прошедшего времени от «приехать», множественное число": {
    en: "Past active participle of «приехать», plural",
    es: "Participio activo de pasado de «приехать», plural",
    de: "Aktives Partizip der Vergangenheit von «приехать», Plural",
  },
  "Действительное причастие прошедшего времени от «прочитать», женский род": {
    en: "Past active participle of «прочитать», feminine",
    es: "Participio activo de pasado de «прочитать», femenino",
    de: "Aktives Partizip der Vergangenheit von «прочитать», Femininum",
  },
  "Добавьте пропущенный предлог в формулу причины": {
    en: "Add the missing preposition in the cause formula",
    es: "Añade la preposición que falta en la fórmula de causa",
    de: "Füge die fehlende Präposition in die Ursachsformel ein",
  },
  "Добавьте частицу «бы» в нереальное следствие": {
    en: "Add the particle «бы» in the counterfactual result",
    es: "Añade la partícula «бы» en la consecuencia irreal",
    de: "Füge die Partikel «бы» in die irreale Folge ein",
  },
  "Заголовок списка документов в конце заявления": {
    en: "The heading of the document list at the end of the application",
    es: "El encabezado de la lista de documentos al final de la solicitud",
    de: "Die Überschrift der Dokumentenliste am Ende des Antrags",
  },
  "Замените бытовое обращение официальным": {
    en: "Replace the everyday address with an official one",
    es: "Sustituye el tratamiento cotidiano por uno oficial",
    de: "Ersetze die alltägliche Anrede durch eine amtliche",
  },
  "Замените гипотезу на цель реального действия": {
    en: "Replace the hypothesis with the purpose of a real action",
    es: "Sustituye la hipótesis por la finalidad de una acción real",
    de: "Ersetze die Hypothese durch den Zweck einer realen Handlung",
  },
  "Замените говорящего: будущее время": {
    en: "Change the speaker: future tense",
    es: "Cambia a quien habla: tiempo futuro",
    de: "Wechsle die sprechende Person: Futur",
  },
  "Замените говорящего: мужской род, прошедшее время совершенного вида": {
    en: "Change the speaker: masculine, perfective past",
    es: "Cambia a quien habla: masculino, pasado perfectivo",
    de: "Wechsle die sprechende Person: Maskulinum, perfektive Vergangenheit",
  },
  "Замените императив в отрицательной просьбе": {
    en: "Replace the imperative in the negative request",
    es: "Sustituye el imperativo en la petición negativa",
    de: "Ersetze den Imperativ in der verneinten Bitte",
  },
  "Замените императив после «попросил»": {
    en: "Replace the imperative after «попросил»",
    es: "Sustituye el imperativo después de «попросил»",
    de: "Ersetze den Imperativ nach «попросил»",
  },
  "Замените императив после «прошу»": {
    en: "Replace the imperative after «прошу»",
    es: "Sustituye el imperativo después de «прошу»",
    de: "Ersetze den Imperativ nach «прошу»",
  },
  "Замените разговорный глагол официальной формулой просьбы": {
    en: "Replace the colloquial verb with the official request formula",
    es: "Sustituye el verbo coloquial por la fórmula oficial de petición",
    de: "Ersetze das umgangssprachliche Verb durch die amtliche Bitteformel",
  },
  "Именительный падеж термина повторяемости опыта": {
    en: "Nominative of the term for reproducibility",
    es: "Nominativo del término de repetibilidad del experimento",
    de: "Nominativ des Terminus für die Wiederholbarkeit des Versuchs",
  },
  "Инфинитив вежливого завершения доклада": {
    en: "Infinitive of a polite close of a talk",
    es: "Infinitivo del cierre cortés de una ponencia",
    de: "Infinitiv eines höflichen Vortragsschlusses",
  },
  "Инфинитив вежливого несогласия после «позвольте»": {
    en: "Infinitive of polite disagreement after «позвольте»",
    es: "Infinitivo del desacuerdo cortés después de «позвольте»",
    de: "Infinitiv des höflichen Widerspruchs nach «позвольте»",
  },
  "Инфинитив оборота «очень тесно»": {
    en: "Infinitive of the “packed solid” idiom",
    es: "Infinitivo del giro de «estar muy apretados»",
    de: "Infinitiv der Wendung «sehr eng»",
  },
  "Инфинитив совершенного вида в устойчивом сочетании с «извинение»": {
    en: "Perfective infinitive in the set phrase with «извинение»",
    es: "Infinitivo perfectivo en la combinación fija con «извинение»",
    de: "Perfektiver Infinitiv in der festen Verbindung mit «извинение»",
  },
  "Инфинитив совершенного вида после «прошу»": {
    en: "Perfective infinitive after «прошу»",
    es: "Infinitivo perfectivo después de «прошу»",
    de: "Perfektiver Infinitiv nach «прошу»",
  },
  "Исправьте будущее страдательного залога": {
    en: "Correct the future passive",
    es: "Corrige el futuro pasivo",
    de: "Korrigiere das Futur Passiv",
  },
  "Исправьте вид инфинитива в обороте тесноты": {
    en: "Correct the aspect of the infinitive in the “packed” idiom",
    es: "Corrige el aspecto del infinitivo en el giro de estrechez",
    de: "Korrigiere den Aspekt des Infinitivs in der Enge-Wendung",
  },
  "Исправьте вид после «едва»": {
    en: "Correct the aspect after «едва»",
    es: "Corrige el aspecto después de «едва»",
    de: "Korrigiere den Aspekt nach «едва»",
  },
  "Исправьте вид после «пока не»": {
    en: "Correct the aspect after «пока не»",
    es: "Corrige el aspecto después de «пока не»",
    de: "Korrigiere den Aspekt nach «пока не»",
  },
  "Исправьте вид после «так и не»": {
    en: "Correct the aspect after «так и не»",
    es: "Corrige el aspecto después de «так и не»",
    de: "Korrigiere den Aspekt nach «так и не»",
  },
  "Исправьте вид: два часа без результата": {
    en: "Correct the aspect: two hours with no result",
    es: "Corrige el aspecto: dos horas sin resultado",
    de: "Korrigiere den Aspekt: zwei Stunden ohne Ergebnis",
  },
  "Исправьте вид: действие закончилось до сказуемого": {
    en: "Correct the aspect: the action finished before the main verb",
    es: "Corrige el aspecto: la acción terminó antes del predicado",
    de: "Korrigiere den Aspekt: die Handlung endete vor dem Prädikat",
  },
  "Исправьте вид: действия идут одновременно": {
    en: "Correct the aspect: the actions are simultaneous",
    es: "Corrige el aspecto: las acciones son simultáneas",
    de: "Korrigiere den Aspekt: die Handlungen laufen gleichzeitig",
  },
  "Исправьте вид: к сроку нужен один результат": {
    en: "Correct the aspect: one result is needed by the deadline",
    es: "Corrige el aspecto: para la fecha hace falta un resultado",
    de: "Korrigiere den Aspekt: bis zum Termin braucht man ein Ergebnis",
  },
  "Исправьте вид: одно упущенное действие": {
    en: "Correct the aspect: one missed action",
    es: "Corrige el aspecto: una acción que no se logró",
    de: "Korrigiere den Aspekt: eine verpasste Handlung",
  },
  "Исправьте вид: перевод закончился до отправки": {
    en: "Correct the aspect: the translation finished before sending",
    es: "Corrige el aspecto: la traducción terminó antes del envío",
    de: "Korrigiere den Aspekt: die Übersetzung endete vor dem Versand",
  },
  "Исправьте вид: пересказ повторяется в каждом абзаце": {
    en: "Correct the aspect: the retelling repeats in every paragraph",
    es: "Corrige el aspecto: el recuento se repite en cada párrafo",
    de: "Korrigiere den Aspekt: die Nacherzählung wiederholt sich in jedem Absatz",
  },
  "Исправьте вид: попытка закончилась неудачей до результата": {
    en: "Correct the aspect: the attempt failed before a result",
    es: "Corrige el aspecto: el intento fracasó antes del resultado",
    de: "Korrigiere den Aspekt: der Versuch scheiterte vor dem Ergebnis",
  },
  "Исправьте вид: проверка ещё не закончена": {
    en: "Correct the aspect: the check is not finished yet",
    es: "Corrige el aspecto: la revisión todavía no ha terminado",
    de: "Korrigiere den Aspekt: die Prüfung ist noch nicht zu Ende",
  },
  "Исправьте вид: разговор шёл во время возвращения": {
    en: "Correct the aspect: the talk went on during the return",
    es: "Corrige el aspecto: la conversación iba durante el regreso",
    de: "Korrigiere den Aspekt: das Gespräch lief während der Rückkehr",
  },
  "Исправьте вид: результат уже отменён": {
    en: "Correct the aspect: the result has already been undone",
    es: "Corrige el aspecto: el resultado ya se ha anulado",
    de: "Korrigiere den Aspekt: das Ergebnis ist schon aufgehoben",
  },
  "Исправьте вид: сверка шла во время перевода": {
    en: "Correct the aspect: the checking went on during the translation",
    es: "Corrige el aspecto: el cotejo iba durante la traducción",
    de: "Korrigiere den Aspekt: der Abgleich lief während der Übersetzung",
  },
  "Исправьте вид: это один успех, не повтор": {
    en: "Correct the aspect: this is one success, not a repetition",
    es: "Corrige el aspecto: es un solo éxito, no una repetición",
    de: "Korrigiere den Aspekt: das ist ein Erfolg, keine Wiederholung",
  },
  "Исправьте вторую часть пары «не столько»": {
    en: "Correct the second half of the pair «не столько»",
    es: "Corrige la segunda parte del par «не столько»",
    de: "Korrigiere den zweiten Teil des Paars «не столько»",
  },
  "Исправьте глагол академической формулы": {
    en: "Correct the verb of the academic formula",
    es: "Corrige el verbo de la fórmula académica",
    de: "Korrigiere das Verb der akademischen Formel",
  },
  "Исправьте глагол официальной формулы": {
    en: "Correct the verb of the official formula",
    es: "Corrige el verbo de la fórmula oficial",
    de: "Korrigiere das Verb der amtlichen Formel",
  },
  "Исправьте глагол: книжный регистр": {
    en: "Correct the verb: bookish register",
    es: "Corrige el verbo: registro culto",
    de: "Korrigiere das Verb: gehobenes Register",
  },
  "Исправьте глагол: нейтральное расхождение": {
    en: "Correct the verb: neutral divergence",
    es: "Corrige el verbo: divergencia neutra",
    de: "Korrigiere das Verb: neutrale Abweichung",
  },
  "Исправьте глагол: развязка закрывает конфликт": {
    en: "Correct the verb: the denouement closes the conflict",
    es: "Corrige el verbo: el desenlace cierra el conflicto",
    de: "Korrigiere das Verb: die Auflösung schließt den Konflikt",
  },
  "Исправьте глагол: слух в абзаце назван ложным": {
    en: "Correct the verb: the rumor in the paragraph is called false",
    es: "Corrige el verbo: el rumor del párrafo se da por falso",
    de: "Korrigiere das Verb: das Gerücht im Absatz gilt als falsch",
  },
  "Исправьте глагол и связку: слух в абзаце назван ложным": {
    en: "Correct the verb and the link: the rumor in the paragraph is called false",
    es: "Corrige el verbo y el enlace: el rumor del párrafo se da por falso",
    de: "Korrigiere Verb und Verknüpfung: das Gerücht im Absatz gilt als falsch",
  },
  "Исправьте залог и род причастия": {
    en: "Correct the voice and gender of the participle",
    es: "Corrige la voz y el género del participio",
    de: "Korrigiere Genus verbi und Genus des Partizips",
  },
  "Исправьте залог причастия": {
    en: "Correct the voice of the participle",
    es: "Corrige la voz del participio",
    de: "Korrigiere das Genus verbi des Partizips",
  },
  "Исправьте залог: агент стоит в творительном": {
    en: "Correct the voice: the agent is in the instrumental",
    es: "Corrige la voz: el agente está en instrumental",
    de: "Korrigiere das Genus verbi: der Agens steht im Instrumental",
  },
  "Исправьте зачин: нужен книжный регистр": {
    en: "Correct the opener: a bookish register is needed",
    es: "Corrige el arranque: hace falta un registro culto",
    de: "Korrigiere den Einstieg: ein gehobenes Register ist nötig",
  },
  "Исправьте зачин: разговорный регистр": {
    en: "Correct the opener: colloquial register",
    es: "Corrige el arranque: registro coloquial",
    de: "Korrigiere den Einstieg: umgangssprachliches Register",
  },
  "Исправьте инфинитив: вежливое несогласие": {
    en: "Correct the infinitive: polite disagreement",
    es: "Corrige el infinitivo: desacuerdo cortés",
    de: "Korrigiere den Infinitiv: höflicher Widerspruch",
  },
  "Исправьте лицо в косвенной речи": {
    en: "Correct the person in reported speech",
    es: "Corrige la persona en el estilo indirecto",
    de: "Korrigiere die Person in der indirekten Rede",
  },
  "Исправьте лицо в косвенной речи: Омар говорил о себе": {
    en: "Correct the person in reported speech: Omar was talking about himself",
    es: "Corrige la persona en el estilo indirecto: Omar hablaba de sí mismo",
    de: "Korrigiere die Person in der indirekten Rede: Omar sprach über sich",
  },
  "Исправьте лицо в косвенной речи: Анна говорила о себе": {
    en: "Correct the person in reported speech: Anna was talking about herself",
    es: "Corrige la persona en el estilo indirecto: Anna hablaba de sí misma",
    de: "Korrigiere die Person in der indirekten Rede: Anna sprach über sich",
  },
  "Исправьте лицо и род": {
    en: "Correct the person and gender",
    es: "Corrige la persona y el género",
    de: "Korrigiere Person und Genus",
  },
  "Исправьте маркер: вторая фраза поясняет первую": {
    en: "Correct the marker: the second sentence explains the first",
    es: "Corrige el marcador: la segunda frase aclara la primera",
    de: "Korrigiere den Marker: der zweite Satz erläutert den ersten",
  },
  "Исправьте маркер: факт признан, вывод другой": {
    en: "Correct the marker: the fact is granted, the conclusion differs",
    es: "Corrige el marcador: el hecho se admite, la conclusión es otra",
    de: "Korrigiere den Marker: der Fakt gilt, die Folgerung ist anders",
  },
  "Исправьте маркер: это второй довод, не следствие": {
    en: "Correct the marker: this is a second argument, not a consequence",
    es: "Corrige el marcador: es un segundo argumento, no una consecuencia",
    de: "Korrigiere den Marker: das ist ein zweites Argument, keine Folge",
  },
  "Исправьте маркер: это следствие, не пример": {
    en: "Correct the marker: this is a consequence, not an example",
    es: "Corrige el marcador: es una consecuencia, no un ejemplo",
    de: "Korrigiere den Marker: das ist eine Folge, kein Beispiel",
  },
  "Исправьте маркер: это уступка, не пересказ": {
    en: "Correct the marker: this is a concession, not a retelling",
    es: "Corrige el marcador: es una concesión, no un recuento",
    de: "Korrigiere den Marker: das ist eine Einräumung, keine Nacherzählung",
  },
  "Исправьте на процесс в страдательном залоге": {
    en: "Correct it to a process in the passive",
    es: "Corrígelo a un proceso en voz pasiva",
    de: "Korrigiere es zu einem Prozess im Passiv",
  },
  "Исправьте на страдательный залог: агент остаётся в творительном": {
    en: "Correct it to the passive: the agent stays in the instrumental",
    es: "Corrígelo a la voz pasiva: el agente sigue en instrumental",
    de: "Korrigiere es zum Passiv: der Agens bleibt im Instrumental",
  },
  "Исправьте наречие степени: книжный регистр": {
    en: "Correct the adverb of degree: bookish register",
    es: "Corrige el adverbio de grado: registro culto",
    de: "Korrigiere das Gradadverb: gehobenes Register",
  },
  "Исправьте оборот спешки": {
    en: "Correct the idiom of haste",
    es: "Corrige el giro de prisa",
    de: "Korrigiere die Wendung der Eile",
  },
  "Исправьте оборот: ей неловко, не свободно": {
    en: "Correct the idiom: she is ill at ease, not at ease",
    es: "Corrige el giro: ella está incómoda, no a gusto",
    de: "Korrigiere die Wendung: ihr ist unbehaglich, nicht wohl",
  },
  "Исправьте оборот: он молчит, а не бездельничает": {
    en: "Correct the idiom: he is silent, he is not idling",
    es: "Corrige el giro: él calla, no está de brazos cruzados",
    de: "Korrigiere die Wendung: er schweigt, er faulenzt nicht",
  },
  "Исправьте описание: лейтмотив возвращается": {
    en: "Correct the description: the leitmotif returns",
    es: "Corrige la descripción: el leitmotiv vuelve",
    de: "Korrigiere die Beschreibung: das Leitmotiv kehrt wieder",
  },
  "Исправьте ответ: официальный регистр защиты; говорящая — Анна": {
    en: "Correct the reply: official register of the defence; the speaker is Anna",
    es: "Corrige la respuesta: registro oficial de la defensa; quien habla es Anna",
    de: "Korrigiere die Antwort: amtliches Register der Verteidigung; die Sprecherin ist Anna",
  },
  "Исправьте падеж в обороте «водить за нос»": {
    en: "Correct the case in the idiom «водить за нос»",
    es: "Corrige el caso en el giro «водить за нос»",
    de: "Korrigiere den Kasus in der Wendung «водить за нос»",
  },
  "Исправьте падеж в обороте внезапности": {
    en: "Correct the case in the idiom of suddenness",
    es: "Corrige el caso en el giro de lo repentino",
    de: "Korrigiere den Kasus in der Wendung der Plötzlichkeit",
  },
  "Исправьте падеж первого слова оборота согласия": {
    en: "Correct the case of the first word in the harmony idiom",
    es: "Corrige el caso de la primera palabra del giro de armonía",
    de: "Korrigiere den Kasus des ersten Wortes der Einvernehmenswendung",
  },
  "Исправьте падеж после «на условиях»": {
    en: "Correct the case after «на условиях»",
    es: "Corrige el caso después de «на условиях»",
    de: "Korrigiere den Kasus nach «на условиях»",
  },
  "Исправьте падеж после «назван»": {
    en: "Correct the case after «назван»",
    es: "Corrige el caso después de «назван»",
    de: "Korrigiere den Kasus nach «назван»",
  },
  "Исправьте падеж после «остаётся»": {
    en: "Correct the case after «остаётся»",
    es: "Corrige el caso después de «остаётся»",
    de: "Korrigiere den Kasus nach «остаётся»",
  },
  "Исправьте падеж после предлога соответствия": {
    en: "Correct the case after the preposition of accordance",
    es: "Corrige el caso después de la preposición de conformidad",
    de: "Korrigiere den Kasus nach der Präposition der Entsprechung",
  },
  "Исправьте падеж после формулы основания": {
    en: "Correct the case after the formula of grounds",
    es: "Corrige el caso después de la fórmula del fundamento",
    de: "Korrigiere den Kasus nach der Formel der Grundlage",
  },
  "Исправьте падеж причастия": {
    en: "Correct the case of the participle",
    es: "Corrige el caso del participio",
    de: "Korrigiere den Kasus des Partizips",
  },
  "Исправьте порядок слов: тема — отзыв": {
    en: "Correct the word order: the theme is the review",
    es: "Corrige el orden de palabras: el tema es la reseña",
    de: "Korrigiere die Wortstellung: das Thema ist das Gutachten",
  },
  "Исправьте последнее слово оборота честности": {
    en: "Correct the last word of the honesty idiom",
    es: "Corrige la última palabra del giro de honestidad",
    de: "Korrigiere das letzte Wort der Aufrichtigkeitswendung",
  },
  "Исправьте предлог рамки передачи": {
    en: "Correct the preposition of the broadcast frame",
    es: "Corrige la preposición del marco de la emisión",
    de: "Korrigiere die Präposition des Senderahmens",
  },
  "Исправьте предлог: архив спорит с мнением": {
    en: "Correct the preposition: the archive disagrees with the opinion",
    es: "Corrige la preposición: el archivo contradice la opinión",
    de: "Korrigiere die Präposition: das Archiv widerspricht der Meinung",
  },
  "Исправьте пример: аллюзия — намёк без чужой страницы": {
    en: "Correct the example: an allusion is a hint without someone else's page",
    es: "Corrige el ejemplo: la alusión es un guiño sin la página ajena",
    de: "Korrigiere das Beispiel: eine Anspielung ist ein Hinweis ohne die fremde Seite",
  },
  "Исправьте противоречие: подтекст как раз не сказан вслух": {
    en: "Correct the contradiction: subtext is precisely what is not said aloud",
    es: "Corrige la contradicción: el subtexto es justo lo que no se dice en voz alta",
    de: "Korrigiere den Widerspruch: der Subtext ist gerade das, was nicht laut gesagt wird",
  },
  "Исправьте разговорное слово: нужна официальная рамка": {
    en: "Correct the colloquial word: an official frame is needed",
    es: "Corrige la palabra coloquial: hace falta un marco oficial",
    de: "Korrigiere das umgangssprachliche Wort: ein amtlicher Rahmen ist nötig",
  },
  "Исправьте рамку академического мнения": {
    en: "Correct the frame of the academic opinion",
    es: "Corrige el marco de la opinión académica",
    de: "Korrigiere den Rahmen der akademischen Meinung",
  },
  "Исправьте реальное условие": {
    en: "Correct the real condition",
    es: "Corrige la condición real",
    de: "Korrigiere die reale Bedingung",
  },
  "Исправьте реальное условие при императиве": {
    en: "Correct the real condition with an imperative",
    es: "Corrige la condición real con imperativo",
    de: "Korrigiere die reale Bedingung beim Imperativ",
  },
  "Исправьте реальное условие: уберите гипотезу": {
    en: "Correct the real condition: remove the hypothesis",
    es: "Corrige la condición real: quita la hipótesis",
    de: "Korrigiere die reale Bedingung: entferne die Hypothese",
  },
  "Исправьте регистр глагола речи в официальной заметке": {
    en: "Correct the register of the speech verb in the official note",
    es: "Corrige el registro del verbo de habla en la nota oficial",
    de: "Korrigiere das Register des Redeverbs in der amtlichen Notiz",
  },
  "Исправьте регистр: разговор на кухне": {
    en: "Correct the register: talk in the kitchen",
    es: "Corrige el registro: conversación en la cocina",
    de: "Korrigiere das Register: Gespräch in der Küche",
  },
  "Исправьте род краткой формы": {
    en: "Correct the gender of the short form",
    es: "Corrige el género de la forma corta",
    de: "Korrigiere das Genus der Kurzform",
  },
  "Исправьте род обращения": {
    en: "Correct the gender of the address",
    es: "Corrige el género del tratamiento",
    de: "Korrigiere das Genus der Anrede",
  },
  "Исправьте род причастия": {
    en: "Correct the gender of the participle",
    es: "Corrige el género del participio",
    de: "Korrigiere das Genus des Partizips",
  },
  "Исправьте род: говорящий — Омар": {
    en: "Correct the gender: the speaker is Omar",
    es: "Corrige el género: quien habla es Omar",
    de: "Korrigiere das Genus: der Sprecher ist Omar",
  },
  "Исправьте смешение автора статьи и голоса фрагмента": {
    en: "Correct the mix-up of the article's author and the voice of the fragment",
    es: "Corrige la confusión entre el autor del artículo y la voz del fragmento",
    de: "Korrigiere die Vermischung von Verfasser des Artikels und Stimme des Fragments",
  },
  "Исправьте союз: нейтральный регистр, не книжный": {
    en: "Correct the conjunction: neutral register, not bookish",
    es: "Corrige la conjunción: registro neutro, no culto",
    de: "Korrigiere die Konjunktion: neutrales Register, nicht gehoben",
  },
  "Исправьте суффикс деепричастия совершенного вида": {
    en: "Correct the suffix of the perfective gerund",
    es: "Corrige el sufijo del gerundio perfectivo",
    de: "Korrigiere das Suffix des perfektiven Adverbialpartizips",
  },
  "Исправьте существительное: в заголовке лишняя оценка, не фактура": {
    en: "Correct the noun: the headline has extra judgment, not facts",
    es: "Corrige el sustantivo: en el titular sobra la valoración, no el material factual",
    de: "Korrigiere das Substantiv: in der Überschrift steht ein Urteil zu viel, nicht der Faktenstoff",
  },
  "Исправьте термин высшей точки": {
    en: "Correct the term for the highest point",
    es: "Corrige el término del punto más alto",
    de: "Korrigiere den Terminus des höchsten Punkts",
  },
  "Исправьте термин: речь о повторяемости опыта": {
    en: "Correct the term: this is about reproducibility",
    es: "Corrige el término: se trata de la repetibilidad del experimento",
    de: "Korrigiere den Terminus: es geht um die Wiederholbarkeit des Versuchs",
  },
  "Исправьте интерпретацию сравнения": {
    en: "Correct the interpretation of the comparison",
    es: "Corrige la interpretación de la comparación",
    de: "Korrigiere die Deutung des Vergleichs",
  },
  "Исправьте термин: уподобление без «как»": {
    en: "Correct the term: a likeness without «как»",
    es: "Corrige el término: semejanza sin «как»",
    de: "Korrigiere den Terminus: Ähnlichkeit ohne «как»",
  },
  "Исправьте термин: это оценочное определение": {
    en: "Correct the term: this is an evaluative modifier",
    es: "Corrige el término: es un modificador valorativo",
    de: "Korrigiere den Terminus: das ist eine wertende Bestimmung",
  },
  "Исправьте термин: это статистика, не композиция сюжета": {
    en: "Correct the term: this is statistics, not plot composition",
    es: "Corrige el término: es estadística, no la composición de la trama",
    de: "Korrigiere den Terminus: das ist Statistik, nicht die Komposition der Handlung",
  },
  "Исправьте финал: регистр доклада": {
    en: "Correct the ending: the register of a talk",
    es: "Corrige el final: registro de una ponencia",
    de: "Korrigiere den Schluss: Register eines Vortrags",
  },
  "Исправьте форму деепричастия несовершенного вида": {
    en: "Correct the form of the imperfective gerund",
    es: "Corrige la forma del gerundio imperfectivo",
    de: "Korrigiere die Form des imperfektiven Adverbialpartizips",
  },
  "Исправьте частицу косвенного вопроса": {
    en: "Correct the particle of the indirect question",
    es: "Corrige la partícula de la pregunta indirecta",
    de: "Korrigiere die Partikel der indirekten Frage",
  },
  "Исправьте частицу: действие вопреки сомнению; говорящая — Анна": {
    en: "Correct the particle: the action is against doubt; the speaker is Anna",
    es: "Corrige la partícula: la acción va contra la duda; quien habla es Anna",
    de: "Korrigiere die Partikel: die Handlung geschieht trotz des Zweifels; die Sprecherin ist Anna",
  },
  "Исправьте частицу: просьба без давления": {
    en: "Correct the particle: a request without pressure",
    es: "Corrige la partícula: petición sin presión",
    de: "Korrigiere die Partikel: eine Bitte ohne Druck",
  },
  "Исправьте частицу: факт обоим уже известен": {
    en: "Correct the particle: the fact is already known to both",
    es: "Corrige la partícula: el hecho ya lo saben ambos",
    de: "Korrigiere die Partikel: der Fakt ist beiden schon bekannt",
  },
  "Исправьте частицу: это выделение темы, не просьба": {
    en: "Correct the particle: this highlights the theme, it is not a request",
    es: "Corrige la partícula: esto destaca el tema, no es una petición",
    de: "Korrigiere die Partikel: das hebt das Thema hervor, es ist keine Bitte",
  },
  "Исправьте частицу: это недоверие, не указание": {
    en: "Correct the particle: this is disbelief, not a direction",
    es: "Corrige la partícula: es incredulidad, no una indicación",
    de: "Korrigiere die Partikel: das ist Unglaube, keine Anweisung",
  },
  "Исправьте частицу: это сомнение, не общее знание": {
    en: "Correct the particle: this is doubt, not shared knowledge",
    es: "Corrige la partícula: es duda, no un saber compartido",
    de: "Korrigiere die Partikel: das ist Zweifel, kein gemeinsames Wissen",
  },
  "Исправьте число краткой формы": {
    en: "Correct the number of the short form",
    es: "Corrige el número de la forma corta",
    de: "Korrigiere den Numerus der Kurzform",
  },
  "Исправьте число причастия": {
    en: "Correct the number of the participle",
    es: "Corrige el número del participio",
    de: "Korrigiere den Numerus des Partizips",
  },
  "Исправьте: документ уже готов": {
    en: "Correct it: the document is already ready",
    es: "Corrígelo: el documento ya está listo",
    de: "Korrigiere es: das Dokument ist schon fertig",
  },
  "Исправьте: нужен процесс, а не готовый результат": {
    en: "Correct it: a process is needed, not a finished result",
    es: "Corrígelo: hace falta un proceso, no un resultado ya listo",
    de: "Korrigiere es: nötig ist ein Prozess, nicht ein fertiges Ergebnis",
  },
  "Канцелярское существительное во множественном числе": {
    en: "A bureaucratic noun in the plural",
    es: "Un sustantivo administrativo en plural",
    de: "Ein bürokratisches Substantiv im Plural",
  },
  "Книжное наречие степени": {
    en: "A bookish adverb of degree",
    es: "Un adverbio de grado culto",
    de: "Ein gehobenes Gradadverb",
  },
  "Косвенный вопрос со словом «где», без «ли»": {
    en: "An indirect question with «где», without «ли»",
    es: "Una pregunta indirecta con «где», sin «ли»",
    de: "Eine indirekte Frage mit «где», ohne «ли»",
  },
  "Косвенный вопрос со словом «когда», без «ли»": {
    en: "An indirect question with «когда», without «ли»",
    es: "Una pregunta indirecta con «когда», sin «ли»",
    de: "Eine indirekte Frage mit «когда», ohne «ли»",
  },
  "Краткое страдательное причастие от «допустить», женский род": {
    en: "Short passive participle of «допустить», feminine",
    es: "Participio pasivo corto de «допустить», femenino",
    de: "Kurzes passives Partizip von «допустить», Femininum",
  },
  "Краткое страдательное причастие от «допустить», мужской род": {
    en: "Short passive participle of «допустить», masculine",
    es: "Participio pasivo corto de «допустить», masculino",
    de: "Kurzes passives Partizip von «допустить», Maskulinum",
  },
  "Краткое страдательное причастие от «подписать», средний род": {
    en: "Short passive participle of «подписать», neuter",
    es: "Participio pasivo corto de «подписать», neutro",
    de: "Kurzes passives Partizip von «подписать», Neutrum",
  },
  "Краткое страдательное причастие от «проверить», множественное число": {
    en: "Short passive participle of «проверить», plural",
    es: "Participio pasivo corto de «проверить», plural",
    de: "Kurzes passives Partizip von «проверить», Plural",
  },
  "Маркер добавочного довода, не следствия": {
    en: "A marker of an additional argument, not of a consequence",
    es: "Un marcador de un argumento añadido, no de una consecuencia",
    de: "Ein Marker eines zusätzlichen Arguments, nicht einer Folge",
  },
  "Маркер переформулировки": {
    en: "A reformulation marker",
    es: "Un marcador de reformulación",
    de: "Ein Marker der Umformulierung",
  },
  "Маркер следствия": {
    en: "A consequence marker",
    es: "Un marcador de consecuencia",
    de: "Ein Folgemarker",
  },
  "Маркер уступки, не пересказ": {
    en: "A concession marker, not a retelling",
    es: "Un marcador de concesión, no un recuento",
    de: "Ein Einräumungsmarker, keine Nacherzählung",
  },
  "Настоящее время оборота «обманывать обещаниями»; Омар — мужской род": {
    en: "Present of the idiom «обманывать обещаниями»; Omar is masculine",
    es: "Presente del giro «обманывать обещаниями»; Omar es masculino",
    de: "Präsens der Wendung «обманывать обещаниями»; Omar ist maskulin",
  },
  "Настоящее время, множественное число от «расходиться»": {
    en: "Present plural of «расходиться»",
    es: "Presente plural de «расходиться»",
    de: "Präsens Plural von «расходиться»",
  },
  "Настоящее время, мужской род, книжный регистр": {
    en: "Present, masculine, bookish register",
    es: "Presente, masculino, registro culto",
    de: "Präsens, Maskulinum, gehobenes Register",
  },
  "Настоящее время, несовершенный вид, множественное число от «уточняться»": {
    en: "Present imperfective plural of «уточняться»",
    es: "Presente imperfectivo plural de «уточняться»",
    de: "Präsens imperfektiv Plural von «уточняться»",
  },
  "Настоящее время, несовершенный вид, от «пересказывать»": {
    en: "Present imperfective of «пересказывать»",
    es: "Presente imperfectivo de «пересказывать»",
    de: "Präsens imperfektiv von «пересказывать»",
  },
  "Настоящее время, несовершенный вид, страдательный залог от «переводить»": {
    en: "Present imperfective passive of «переводить»",
    es: "Presente imperfectivo pasivo de «переводить»",
    de: "Präsens imperfektiv Passiv von «переводить»",
  },
  "Настоящее время, несовершенный вид, страдательный залог от «читать»": {
    en: "Present imperfective passive of «читать»",
    es: "Presente imperfectivo pasivo de «читать»",
    de: "Präsens imperfektiv Passiv von «читать»",
  },
  "Нейтральный союз причины": {
    en: "A neutral conjunction of cause",
    es: "Una conjunción neutra de causa",
    de: "Eine neutrale Kausalkonjunktion",
  },
  "Нереальное следствие: прошедшее время от «выйти» и частица «бы»": {
    en: "Counterfactual result: past of «выйти» and the particle «бы»",
    es: "Consecuencia irreal: pasado de «выйти» y la partícula «бы»",
    de: "Irreale Folge: Vergangenheit von «выйти» und die Partikel «бы»",
  },
  "Нереальное следствие: прошедшее время от «получить» и частица «бы»": {
    en: "Counterfactual result: past of «получить» and the particle «бы»",
    es: "Consecuencia irreal: pasado de «получить» y la partícula «бы»",
    de: "Irreale Folge: Vergangenheit von «получить» und die Partikel «бы»",
  },
  "Нереальное условие: прошедшее время от «знать», без второго «бы»": {
    en: "Counterfactual condition: past of «знать», without a second «бы»",
    es: "Condición irreal: pasado de «знать», sin un segundo «бы»",
    de: "Irreale Bedingung: Vergangenheit von «знать», ohne ein zweites «бы»",
  },
  "Нереальное условие: прошедшее время от «увидеть», без второго «бы»": {
    en: "Counterfactual condition: past of «увидеть», without a second «бы»",
    es: "Condición irreal: pasado de «увидеть», sin un segundo «бы»",
    de: "Irreale Bedingung: Vergangenheit von «увидеть», ohne ein zweites «бы»",
  },
  "Несовершенный вид: результат уже отменён, от «открывать»": {
    en: "Imperfective: the result has already been undone, from «открывать»",
    es: "Imperfectivo: el resultado ya se ha anulado, de «открывать»",
    de: "Imperfektiv: das Ergebnis ist schon aufgehoben, von «открывать»",
  },
  "Общий вопрос: глагол, потом «ли»": {
    en: "A yes-no question: the verb, then «ли»",
    es: "Una pregunta total: el verbo y luego «ли»",
    de: "Eine Entscheidungsfrage: das Verb, dann «ли»",
  },
  "Одно слово высокого регистра": {
    en: "One word of high register",
    es: "Una palabra de registro alto",
    de: "Ein Wort hohen Registers",
  },
  "Однократный успех, прошедшее от «удаться»": {
    en: "A one-time success, past of «удаться»",
    es: "Un éxito único, pasado de «удаться»",
    de: "Ein einmaliger Erfolg, Vergangenheit von «удаться»",
  },
  "Отрицательная просьба: инфинитив несовершенного вида": {
    en: "A negative request: imperfective infinitive",
    es: "Una petición negativa: infinitivo imperfectivo",
    de: "Eine verneinte Bitte: imperfektiver Infinitiv",
  },
  "Официальная рамка времени из трёх слов": {
    en: "An official time frame of three words",
    es: "Un marco temporal oficial de tres palabras",
    de: "Ein amtlicher Zeitrahmen aus drei Wörtern",
  },
  "Официальная связка причины перед предлогом «с»": {
    en: "The official cause link before the preposition «с»",
    es: "El nexo oficial de causa antes de la preposición «с»",
    de: "Die amtliche Ursachsfugung vor der Präposition «с»",
  },
  "Официальная формула просьбы, 1-е лицо единственного числа": {
    en: "The official request formula, 1st person singular",
    es: "La fórmula oficial de petición, 1.ª persona del singular",
    de: "Die amtliche Bitteformel, 1. Person Singular",
  },
  "Официальная формула сообщения, 1-е лицо от «ставить»": {
    en: "The official informing formula, 1st person of «ставить»",
    es: "La fórmula oficial de comunicación, 1.ª persona de «ставить»",
    de: "Die amtliche Mitteilungsformel, 1. Person von «ставить»",
  },
  "Официальное обращение к женщине": {
    en: "Official address to a woman",
    es: "Tratamiento oficial hacia una mujer",
    de: "Amtliche Anrede an eine Frau",
  },
  "Переведите на русский в официальном регистре": {
    en: "Translate into Russian in an official register",
    es: "Traduce al ruso en un registro oficial",
    de: "Übersetze ins Russische in einem amtlichen Register",
  },
  "Последнее слово оборота «говорить честно»": {
    en: "The last word of the idiom «говорить честно»",
    es: "La última palabra del giro «говорить честно»",
    de: "Das letzte Wort der Wendung «говорить честно»",
  },
  "Последнее слово оборота «появиться внезапно»": {
    en: "The last word of the idiom «появиться внезапно»",
    es: "La última palabra del giro «появиться внезапно»",
    de: "Das letzte Wort der Wendung «появиться внезапно»",
  },
  "Последнее слово оборота «сделать наспех»": {
    en: "The last word of the idiom «сделать наспех»",
    es: "La última palabra del giro «сделать наспех»",
    de: "Das letzte Wort der Wendung «сделать наспех»",
  },
  "Последнее слово оборота «согласно, без ссор»": {
    en: "The last word of the idiom «согласно, без ссор»",
    es: "La última palabra del giro «согласно, без ссор»",
    de: "Das letzte Wort der Wendung «согласно, без ссор»",
  },
  "Предлог соответствия, не причины; дальше дательный падеж": {
    en: "The preposition of accordance, not of cause; the dative follows",
    es: "La preposición de conformidad, no de causa; sigue el dativo",
    de: "Die Präposition der Entsprechung, nicht der Ursache; danach steht der Dativ",
  },
  "Предлог уступки с дательным падежом": {
    en: "The preposition of concession with the dative",
    es: "La preposición de concesión con dativo",
    de: "Die Präposition der Einräumung mit Dativ",
  },
  "Предложный падеж после «на»: несказанный смысл": {
    en: "Prepositional case after «на»: unspoken meaning",
    es: "Preposicional después de «на»: sentido no dicho",
    de: "Präpositiv nach «на»: ungesagter Sinn",
  },
  "Просьба: инфинитив совершенного вида вместо императива": {
    en: "A request: perfective infinitive instead of the imperative",
    es: "Una petición: infinitivo perfectivo en lugar del imperativo",
    de: "Eine Bitte: perfektiver Infinitiv statt des Imperativs",
  },
  "Процесс без результата, несовершенный вид от «править»": {
    en: "A process with no result, imperfective of «править»",
    es: "Un proceso sin resultado, imperfectivo de «править»",
    de: "Ein Prozess ohne Ergebnis, Imperfektiv von «править»",
  },
  "Прошедшее время от «понять»; говорящий — Омар": {
    en: "Past of «понять»; the speaker is Omar",
    es: "Pasado de «понять»; quien habla es Omar",
    de: "Vergangenheit von «понять»; der Sprecher ist Omar",
  },
  "Прошедшее время, мужской род, глагол публичного заявления от «заявить»": {
    en: "Past, masculine, the public-statement verb from «заявить»",
    es: "Pasado, masculino, el verbo de declaración pública de «заявить»",
    de: "Vergangenheit, Maskulinum, das Verb der öffentlichen Erklärung von «заявить»",
  },
  "Прошедшее время, мужской род, от «опровергнуть»": {
    en: "Past, masculine, of «опровергнуть»",
    es: "Pasado, masculino, de «опровергнуть»",
    de: "Vergangenheit, Maskulinum, von «опровергнуть»",
  },
  "Прошедшее время, несовершенный вид, страдательный залог от «обсуждать», мужской род": {
    en: "Past imperfective passive of «обсуждать», masculine",
    es: "Pasado imperfectivo pasivo de «обсуждать», masculino",
    de: "Vergangenheit imperfektiv Passiv von «обсуждать», Maskulinum",
  },
  "Разговорное согласие, одно слово; говорящая — Анна": {
    en: "Colloquial agreement, one word; the speaker is Anna",
    es: "Asentimiento coloquial, una palabra; quien habla es Anna",
    de: "Umgangssprachliche Zustimmung, ein Wort; die Sprecherin ist Anna",
  },
  "Разговорный зачин, одно слово": {
    en: "A colloquial opener, one word",
    es: "Un arranque coloquial, una palabra",
    de: "Ein umgangssprachlicher Einstieg, ein Wort",
  },
  "Реальное условие при императиве": {
    en: "A real condition with an imperative",
    es: "Una condición real con imperativo",
    de: "Eine reale Bedingung beim Imperativ",
  },
  "Реальное условие: будущее совершенного вида от «прислать»": {
    en: "A real condition: perfective future of «прислать»",
    es: "Una condición real: futuro perfectivo de «прислать»",
    de: "Eine reale Bedingung: perfektives Futur von «прислать»",
  },
  "Реальное условие: будущее совершенного вида от «сдать»": {
    en: "A real condition: perfective future of «сдать»",
    es: "Una condición real: futuro perfectivo de «сдать»",
    de: "Eine reale Bedingung: perfektives Futur von «сдать»",
  },
  "Родительный падеж в рамке анонимного источника": {
    en: "Genitive in the frame of an anonymous source",
    es: "Genitivo en el marco de una fuente anónima",
    de: "Genitiv im Rahmen einer anonymen Quelle",
  },
  "Сделайте косвенный общий вопрос": {
    en: "Make an indirect yes-no question",
    es: "Haz una pregunta total indirecta",
    de: "Bilde eine indirekte Entscheidungsfrage",
  },
  "Совершенный вид после «едва», от «дописать»": {
    en: "Perfective after «едва», from «дописать»",
    es: "Perfectivo después de «едва», de «дописать»",
    de: "Perfektiv nach «едва», von «дописать»",
  },
  "Совершенный вид после «так и не», от «поймать»": {
    en: "Perfective after «так и не», from «поймать»",
    es: "Perfectivo después de «так и не», de «поймать»",
    de: "Perfektiv nach «так и не», von «поймать»",
  },
  "Сохраните настоящее время и женский род, замените «я»": {
    en: "Keep the present and the feminine, replace «я»",
    es: "Conserva el presente y el femenino, sustituye «я»",
    de: "Behalte Präsens und Femininum, ersetze «я»",
  },
  "Союз цели при реальном действии в прошлом": {
    en: "The purpose conjunction with a real action in the past",
    es: "La conjunción de finalidad con una acción real en el pasado",
    de: "Die Zweckkonjunktion bei einer realen Handlung in der Vergangenheit",
  },
  "Страдательное причастие настоящего времени от «читать», женский род": {
    en: "Present passive participle of «читать», feminine",
    es: "Participio pasivo de presente de «читать», femenino",
    de: "Passives Partizip Präsens von «читать», Femininum",
  },
  "Страдательное причастие прошедшего времени от «написать», женский род, полная форма": {
    en: "Past passive participle of «написать», feminine, full form",
    es: "Participio pasivo de pasado de «написать», femenino, forma larga",
    de: "Passives Partizip der Vergangenheit von «написать», Femininum, Langform",
  },
  "Страдательное причастие прошедшего времени от «разработать», предложный падеж, мужской род": {
    en: "Past passive participle of «разработать», prepositional, masculine",
    es: "Participio pasivo de pasado de «разработать», preposicional, masculino",
    de: "Passives Partizip der Vergangenheit von «разработать», Präpositiv, Maskulinum",
  },
  "Страдательное причастие прошедшего времени от «сдать», мужской род, полная форма": {
    en: "Past passive participle of «сдать», masculine, full form",
    es: "Participio pasivo de pasado de «сдать», masculino, forma larga",
    de: "Passives Partizip der Vergangenheit von «сдать», Maskulinum, Langform",
  },
  "Творительный падеж от прилагательного «неподтверждённый»": {
    en: "Instrumental of the adjective «неподтверждённый»",
    es: "Instrumental del adjetivo «неподтверждённый»",
    de: "Instrumental des Adjektivs «неподтверждённый»",
  },
  "Творительный падеж термина композиции после «называется»": {
    en: "Instrumental of the composition term after «называется»",
    es: "Instrumental del término de composición después de «называется»",
    de: "Instrumental des Kompositionsterminus nach «называется»",
  },
  "Впишите термин в форме «чем?»": {
    en: "Type the term in the «чем?» form",
    es: "Escribe el término en la forma «чем?»",
    de: "Schreibe den Terminus in der Form «чем?»",
  },
  "Впишите термин (кто? что?)": {
    en: "Type the term (who? what?)",
    es: "Escribe el término (quién? qué?)",
    de: "Schreibe den Terminus (wer? was?)",
  },
  "Впишите термин после «на»": {
    en: "Type the term after «на»",
    es: "Escribe el término después de «на»",
    de: "Schreibe den Terminus nach «на»",
  },
  "Выберите название приёма": {
    en: "Choose the name of the device",
    es: "Elige el nombre del recurso",
    de: "Wähle den Namen des Mittels",
  },
  "Выберите термин": {
    en: "Choose the term",
    es: "Elige el término",
    de: "Wähle den Terminus",
  },
  "Выберите верную интерпретацию": {
    en: "Choose the correct reading",
    es: "Elige la interpretación correcta",
    de: "Wähle die passende Deutung",
  },
  "Исправьте термин": {
    en: "Correct the term",
    es: "Corrige el término",
    de: "Korrigiere den Terminus",
  },
  "Исправьте: кто ведёт взгляд в тексте?": {
    en: "Fix it: who guides the gaze in the text?",
    es: "Corrige: ¿quién guía la mirada en el texto?",
    de: "Korrigiere: wer führt den Blick im Text?",
  },
  "Исправьте противоречие": {
    en: "Fix the contradiction",
    es: "Corrige la contradicción",
    de: "Korrigiere den Widerspruch",
  },
  "Исправьте пример: аллюзия — намёк": {
    en: "Fix the example: allusion is a hint",
    es: "Corrige el ejemplo: la alusión es un guiño",
    de: "Korrigiere das Beispiel: Anspielung ist ein Hinweis",
  },
  "Исправьте интерпретацию": {
    en: "Fix the interpretation",
    es: "Corrige la interpretación",
    de: "Korrigiere die Deutung",
  },
  "Творительный падеж: гипотезу ещё не сняли": {
    en: "Instrumental: the hypothesis has not been dropped yet",
    es: "Instrumental: la hipótesis todavía no se ha retirado",
    de: "Instrumental: die Hypothese ist noch nicht aufgegeben",
  },
  "Термин интертекста, именительный падеж": {
    en: "The intertext term, nominative",
    es: "El término del intertexto, nominativo",
    de: "Der Intertext-Terminus, Nominativ",
  },
  "Термин повествования, именительный падеж": {
    en: "The narration term, nominative",
    es: "El término de la narración, nominativo",
    de: "Der Erzählterminus, Nominativ",
  },
  "Термин повторяющегося мотива, именительный падеж": {
    en: "The term for a recurring motif, nominative",
    es: "El término del motivo que se repite, nominativo",
    de: "Der Terminus des wiederkehrenden Motivs, Nominativ",
  },
  "Термин статистики, именительный падеж": {
    en: "The statistics term, nominative",
    es: "El término de estadística, nominativo",
    de: "Der Statistikterminus, Nominativ",
  },
  "Термин финала сюжета, именительный падеж": {
    en: "The term for the end of the plot, nominative",
    es: "El término del final de la trama, nominativo",
    de: "Der Terminus des Handlungsendes, Nominativ",
  },
  "Уберите вторую частицу «бы» в условии": {
    en: "Remove the second particle «бы» in the condition",
    es: "Quita la segunda partícula «бы» en la condición",
    de: "Entferne die zweite Partikel «бы» in der Bedingung",
  },
  "Уберите лишнюю частицу": {
    en: "Remove the extra particle",
    es: "Quita la partícula de más",
    de: "Entferne die überzählige Partikel",
  },
  "Уберите лишнюю частицу при вопросительном слове": {
    en: "Remove the extra particle next to the question word",
    es: "Quita la partícula de más junto a la palabra interrogativa",
    de: "Entferne die überzählige Partikel beim Fragewort",
  },
  "Устойчивая рамка: во время передачи": {
    en: "A set frame: during the broadcast",
    es: "Un marco fijo: durante la emisión",
    de: "Ein fester Rahmen: während der Sendung",
  },
  "Уступка: факт признан, вывод другой": {
    en: "A concession: the fact is granted, the conclusion differs",
    es: "Una concesión: el hecho se admite, la conclusión es otra",
    de: "Eine Einräumung: der Fakt gilt, die Folgerung ist anders",
  },
  "Форма оборота «сознательно молчать»; Омар — мужской род": {
    en: "The form of the idiom «сознательно молчать»; Omar is masculine",
    es: "La forma del giro «сознательно молчать»; Omar es masculino",
    de: "Die Form der Wendung «сознательно молчать»; Omar ist maskulin",
  },
  "Формула основания перед родительным падежом": {
    en: "The formula of grounds before the genitive",
    es: "La fórmula del fundamento antes del genitivo",
    de: "Die Formel der Grundlage vor dem Genitiv",
  },
  "Частица вопреки ожиданию; говорящая — Анна": {
    en: "The particle contrary to expectation; the speaker is Anna",
    es: "La partícula contra lo esperado; quien habla es Anna",
    de: "Die Partikel wider Erwarten; die Sprecherin ist Anna",
  },
  "Частица выделения темы, после дефиса": {
    en: "The theme-highlighting particle, after a hyphen",
    es: "La partícula que destaca el tema, después de un guion",
    de: "Die Partikel der Themenhervorhebung, nach einem Bindestrich",
  },
  "Частица известного собеседнику факта": {
    en: "The particle for a fact the listener already knows",
    es: "La partícula de un hecho que el interlocutor ya conoce",
    de: "Die Partikel für einen dem Gesprächspartner bekannten Fakt",
  },
  "Частица косвенного вопроса": {
    en: "The particle of the indirect question",
    es: "La partícula de la pregunta indirecta",
    de: "Die Partikel der indirekten Frage",
  },
  "Частица ненавязчивой просьбы, пишется после дефиса": {
    en: "The particle of a gentle request, written after a hyphen",
    es: "La partícula de una petición suave, se escribe tras un guion",
    de: "Die Partikel einer unaufdringlichen Bitte, nach einem Bindestrich",
  },
  "Частица сильного удивления": {
    en: "The particle of strong surprise",
    es: "La partícula de fuerte sorpresa",
    de: "Die Partikel starken Erstaunens",
  },
  "Частица сомнения в вопросе": {
    en: "The particle of doubt in a question",
    es: "La partícula de duda en una pregunta",
    de: "Die Partikel des Zweifels in einer Frage",
  },
  "Выберите можно или нельзя": {
    en: "Choose можно or нельзя",
    es: "Elige можно o нельзя",
    de: "Wähle можно oder нельзя",
  },
  "Выберите слово разрешения": {
    en: "Choose the word for permission",
    es: "Elige la palabra de permiso",
    de: "Wähle das Wort für Erlaubnis",
  },
  "Выберите готовую фразу": {
    en: "Choose the ready-made phrase",
    es: "Elige la frase hecha",
    de: "Wähle die fertige Wendung",
  },
  "Запрет: нельзя": {
    en: "A ban: нельзя",
    es: "Prohibición: нельзя",
    de: "Verbot: нельзя",
  },
  "Вежливая просьба от «записать»": {
    en: "Polite request from «записать»",
    es: "Petición cortés de «записать»",
    de: "Höfliche Bitte von «записать»",
  },
  "Вежливая команда от «открыть»": {
    en: "Polite command from «открыть»",
    es: "Orden cortés de «открыть»",
    de: "Höfliche Aufforderung von «открыть»",
  },
  "Наречие: не быстро": {
    en: "Adverb: not fast",
    es: "Adverbio: no rápido",
    de: "Adverb: nicht schnell",
  },
  "Исправьте модальное слово": {
    en: "Fix the modal word",
    es: "Corrige la palabra modal",
    de: "Korrigiere das Modalwort",
  },
  "Исправьте обращение на вы": {
    en: "Fix the address: use вы",
    es: "Corrige el trato: usa вы",
    de: "Korrigiere die Anrede: вы",
  },
  "Исправьте язык вопроса о русском слове": {
    en: "Fix the language of the question about a Russian word",
    es: "Corrige el idioma de la pregunta sobre una palabra rusa",
    de: "Korrigiere die Sprache der Frage nach einem russischen Wort",
  },
  "Соберите команду на вы": {
    en: "Build a command in the вы form",
    es: "Forma una orden en вы",
    de: "Bilde eine Aufforderung in der вы-Form",
  },
  "Выберите вежливую форму, о мужчине": {
    en: "Choose the polite form, a man speaking",
    es: "Elige la forma cortés, habla un hombre",
    de: "Wähle die höfliche Form, ein Mann spricht",
  },
  "Выберите вежливый отказ": {
    en: "Choose the polite refusal",
    es: "Elige el rechazo cortés",
    de: "Wähle die höfliche Absage",
  },
  "Выберите вопрос": {
    en: "Choose the question",
    es: "Elige la pregunta",
    de: "Wähle die Frage",
  },
  "Выберите согласие": {
    en: "Choose the acceptance",
    es: "Elige la aceptación",
    de: "Wähle die Zusage",
  },
  "Инфинитив: записаться": {
    en: "Infinitive: записаться",
    es: "Infinitivo: записаться",
    de: "Infinitiv: записаться",
  },
  "Совершенный вид: перенести": {
    en: "Perfective: перенести",
    es: "Aspecto perfectivo: перенести",
    de: "Perfektiv: перенести",
  },
  "Краткое: неудобно": {
    en: "Short form: неудобно",
    es: "Forma breve: неудобно",
    de: "Kurzform: неудобно",
  },
  "Вежливая просьба от «перезвонить»": {
    en: "Polite request from «перезвонить»",
    es: "Petición cortés de «перезвонить»",
    de: "Höfliche Bitte von «перезвонить»",
  },
  "Исправьте местоимение в приглашении преподавателю": {
    en: "Fix the pronoun in the invitation to the lecturer",
    es: "Corrige el pronombre en la invitación al profesor",
    de: "Korrigiere das Pronomen in der Einladung an die Lehrperson",
  },
  "Исправьте отказ: нужна вежливая рамка": {
    en: "Fix the refusal: it needs a polite frame",
    es: "Corrige la negativa: hace falta un marco cortés",
    de: "Korrigiere die Absage: ein höflicher Rahmen fehlt",
  },
  "Исправьте форму на вы": {
    en: "Fix the form: use вы",
    es: "Corrige la forma: usa вы",
    de: "Korrigiere die Form: вы",
  },
  "Соберите фразу Омара": {
    en: "Build Omar's line",
    es: "Forma la frase de Omar",
    de: "Bilde Omars Satz",
  },
  "Соберите отказ": {
    en: "Build the refusal",
    es: "Forma la negativa",
    de: "Bilde die Absage",
  },
  "Выберите управление «зависеть»": {
    en: "Choose the government of «зависеть»",
    es: "Elige el régimen de «зависеть»",
    de: "Wähle die Rektion von «зависеть»",
  },
  "Выберите падеж после «гордиться»": {
    en: "Choose the case after «гордиться»",
    es: "Elige el caso tras «гордиться»",
    de: "Wähle den Kasus nach «гордиться»",
  },
  "Выберите управление «готовиться»": {
    en: "Choose the government of «готовиться»",
    es: "Elige el régimen de «готовиться»",
    de: "Wähle die Rektion von «готовиться»",
  },
  "Выберите управление «надеяться»": {
    en: "Choose the government of «надеяться»",
    es: "Elige el régimen de «надеяться»",
    de: "Wähle die Rektion von «надеяться»",
  },
  "Родительный от «успех»": {
    en: "Genitive of «успех»",
    es: "Genitivo de «успех»",
    de: "Genitiv von «успех»",
  },
  "Родительный множественного от «ошибка»": {
    en: "Genitive plural of «ошибка»",
    es: "Genitivo plural de «ошибка»",
    de: "Genitiv Plural von «ошибка»",
  },
  "Дательный от «сосед»": {
    en: "Dative of «сосед»",
    es: "Dativo de «сосед»",
    de: "Dativ von «сосед»",
  },
  "Предлог от и родительный от «тема»": {
    en: "Preposition от plus genitive of «тема»",
    es: "Preposición от y genitivo de «тема»",
    de: "Präposition от und Genitiv von «тема»",
  },
  "Исправьте падеж после «гордиться»": {
    en: "Fix the case after «гордиться»",
    es: "Corrige el caso tras «гордиться»",
    de: "Korrigiere den Kasus nach «гордиться»",
  },
  "Исправьте управление «надеяться»": {
    en: "Fix the government of «надеяться»",
    es: "Corrige el régimen de «надеяться»",
    de: "Korrigiere die Rektion von «надеяться»",
  },
  "Исправьте управление «готовиться»": {
    en: "Fix the government of «готовиться»",
    es: "Corrige el régimen de «готовиться»",
    de: "Korrigiere die Rektion von «готовиться»",
  },
  "Исправьте падеж после «пользоваться»": {
    en: "Fix the case after «пользоваться»",
    es: "Corrige el caso tras «пользоваться»",
    de: "Korrigiere den Kasus nach «пользоваться»",
  },
  "Выберите причастие": {
    en: "Choose the participle",
    es: "Elige el participio",
    de: "Wähle das Partizip",
  },
  "Выберите страдательное причастие": {
    en: "Choose the passive participle",
    es: "Elige el participio pasivo",
    de: "Wähle das Passivpartizip",
  },
  "Выберите средство": {
    en: "Choose the device",
    es: "Elige el recurso",
    de: "Wähle das Mittel",
  },
  "Винительный от «который», мужской род": {
    en: "Accusative of «который», masculine",
    es: "Acusativo de «который», masculino",
    de: "Akkusativ von «который», Maskulinum",
  },
  "Действительное причастие от «описывать», мужской род": {
    en: "Active participle of «описывать», masculine",
    es: "Participio activo de «описывать», masculino",
    de: "Aktivpartizip von «описывать», Maskulinum",
  },
  "Страдательное причастие от «описать»": {
    en: "Passive participle of «описать»",
    es: "Participio pasivo de «описать»",
    de: "Passivpartizip von «описать»",
  },
  "Винительный, женский род, от «который»": {
    en: "Accusative feminine of «который»",
    es: "Acusativo femenino de «который»",
    de: "Akkusativ Femininum von «который»",
  },
  "Переведите на русский с «который»": {
    en: "Translate into Russian with «который»",
    es: "Traduce al ruso con «который»",
    de: "Übersetze ins Russische mit «который»",
  },
  "Переведите коротким оборотом": {
    en: "Translate with a short participial phrase",
    es: "Traduce con un giro breve",
    de: "Übersetze mit einer kurzen Partizipialgruppe",
  },
  "Переведите со страдательным причастием": {
    en: "Translate with a passive participle",
    es: "Traduce con un participio pasivo",
    de: "Übersetze mit einem Passivpartizip",
  },
  "Переведите с «который»": {
    en: "Translate with «который»",
    es: "Traduce con «который»",
    de: "Übersetze mit «который»",
  },
  "Исправьте причастие: студент сам читает": {
    en: "Fix the participle: the student himself is reading",
    es: "Corrige el participio: el estudiante lee él mismo",
    de: "Korrigiere das Partizip: der Student liest selbst",
  },
  "Исправьте: оборот с зависимым словом после существительного": {
    en: "Fix it: the phrase with a dependent word goes after the noun",
    es: "Corrige: el giro con palabra dependiente va tras el sustantivo",
    de: "Korrigiere: die Gruppe mit abhängigem Wort steht nach dem Substantiv",
  },
  "Соберите определение": {
    en: "Build the modifier",
    es: "Forma el modificador",
    de: "Bilde die Bestimmung",
  },
  "Соберите короткий оборот": {
    en: "Build the short phrase",
    es: "Forma el giro breve",
    de: "Bilde die kurze Gruppe",
  },
  "Выберите рамку": {
    en: "Choose the frame",
    es: "Elige el marco",
    de: "Wähle den Rahmen",
  },
  "Выберите форму": {
    en: "Choose the form",
    es: "Elige la forma",
    de: "Wähle die Form",
  },
  "Выберите реплику": {
    en: "Choose the line",
    es: "Elige la réplica",
    de: "Wähle die Replik",
  },
  "Предлог рамки «на мой взгляд»": {
    en: "The preposition in the frame «на мой взгляд»",
    es: "La preposición del marco «на мой взгляд»",
    de: "Die Präposition im Rahmen «на мой взгляд»",
  },
  "Мужской род, согласие": {
    en: "Masculine, agreement",
    es: "Masculino, concordancia",
    de: "Maskulinum, Kongruenz",
  },
  "Женский род": {
    en: "Feminine",
    es: "Femenino",
    de: "Femininum",
  },
  "Предлог второй половины": {
    en: "The preposition of the second half",
    es: "La preposición de la segunda parte",
    de: "Die Präposition der zweiten Hälfte",
  },
  "Исправьте управление": {
    en: "Fix the government",
    es: "Corrige el régimen",
    de: "Korrigiere die Rektion",
  },
  "Исправьте рамку: после «мне кажется» нужно «что», если дальше придаточное": {
    en: "Fix the frame: after «мне кажется» use «что» if a clause follows",
    es: "Corrige el marco: tras «мне кажется» va «что» si sigue una subordinada",
    de: "Korrigiere den Rahmen: nach «мне кажется» steht «что», wenn ein Nebensatz folgt",
  },
  "Добавьте причину, реплика оборвана": {
    en: "Add the reason; the line is cut off",
    es: "Añade la causa; la réplica está cortada",
    de: "Ergänze den Grund; die Replik bricht ab",
  },
  "Соберите реплику": {
    en: "Build the line",
    es: "Forma la réplica",
    de: "Bilde die Replik",
  },
  "Соберите фразу Анны": {
    en: "Build Anna's line",
    es: "Forma la frase de Anna",
    de: "Bilde Annas Satz",
  },
  "Выберите знак": {
    en: "Choose the punctuation mark",
    es: "Elige el signo",
    de: "Wähle das Satzzeichen",
  },
  "Выберите цельную фразу": {
    en: "Choose the sentence that holds together",
    es: "Elige la frase cohesionada",
    de: "Wähle den zusammenhängenden Satz",
  },
  "Выберите тяжёлую фразу": {
    en: "Choose the overloaded sentence",
    es: "Elige la frase sobrecargada",
    de: "Wähle den überladenen Satz",
  },
  "Союз условия": {
    en: "The conjunction of condition",
    es: "La conjunción de condición",
    de: "Die Konjunktion der Bedingung",
  },
  "Союз цели из трёх слов": {
    en: "The purpose conjunction, three words",
    es: "La conjunción de finalidad, tres palabras",
    de: "Die Finalkonjunktion, drei Wörter",
  },
  "Начало союза «после того как»": {
    en: "The start of the conjunction «после того как»",
    es: "El inicio de la conjunción «после того как»",
    de: "Der Anfang der Konjunktion «после того как»",
  },
  "Следствие: так что": {
    en: "Result: так что",
    es: "Consecuencia: так что",
    de: "Folge: так что",
  },
  "Исправьте союзы причины и уступки": {
    en: "Fix the conjunctions of cause and concession",
    es: "Corrige las conjunciones de causa y concesión",
    de: "Korrigiere die Konjunktionen von Grund und Einräumung",
  },
  "Замените второе «что» на «который» нельзя без существительного; разведите смысл": {
    en: "Do not replace the second «что» with «который» without a noun; separate the meanings",
    es: "No sustituyas el segundo «что» por «который» sin sustantivo; separa los sentidos",
    de: "Ersetze das zweite «что» nicht durch «который» ohne Substantiv; trenne die Bedeutungen",
  },
  "Исправьте союз цели": {
    en: "Fix the purpose conjunction",
    es: "Corrige la conjunción de finalidad",
    de: "Korrigiere die Finalkonjunktion",
  },
  "Исправьте союз условия": {
    en: "Fix the condition conjunction",
    es: "Corrige la conjunción de condición",
    de: "Korrigiere die Konditionalkonjunktion",
  },
  "Соберите цель": {
    en: "Build the purpose clause",
    es: "Forma la finalidad",
    de: "Bilde den Finalsatz",
  },
  "Соберите условие": {
    en: "Build the condition",
    es: "Forma la condición",
    de: "Bilde die Bedingung",
  },
  "Соберите следствие": {
    en: "Build the result clause",
    es: "Forma la consecuencia",
    de: "Bilde die Folge",
  },
  "Выберите шаг": {
    en: "Choose the step",
    es: "Elige el paso",
    de: "Wähle den Schritt",
  },
  "Выберите связку": {
    en: "Choose the linker",
    es: "Elige el nexo",
    de: "Wähle die Verknüpfung",
  },
  "Выберите причину": {
    en: "Choose the reason",
    es: "Elige la causa",
    de: "Wähle den Grund",
  },
  "Одно слово: микротема": {
    en: "One word: the micro-topic",
    es: "Una palabra: el microtema",
    de: "Ein Wort: das Mikrothema",
  },
  "Местоимение вместо повтора «текст»": {
    en: "A pronoun instead of repeating «текст»",
    es: "Un pronombre en vez de repetir «текст»",
    de: "Ein Pronomen statt «текст» zu wiederholen",
  },
  "Связка противопоставления": {
    en: "The linker of contrast",
    es: "El nexo de contraste",
    de: "Die Verknüpfung des Gegensatzes",
  },
  "Связка примера": {
    en: "The linker of an example",
    es: "El nexo de ejemplo",
    de: "Die Verknüpfung eines Beispiels",
  },
  "Переведите тематическое предложение": {
    en: "Translate the topic sentence",
    es: "Traduce la oración temática",
    de: "Übersetze den Themasatz",
  },
  "Верните подлежащее": {
    en: "Put the subject back",
    es: "Devuelve el sujeto",
    de: "Setze das Subjekt wieder ein",
  },
  "Исправьте порядок: сначала материал, потом вывод": {
    en: "Fix the order: material first, then the conclusion",
    es: "Corrige el orden: primero el material, luego la conclusión",
    de: "Korrigiere die Reihenfolge: zuerst der Stoff, dann die Folgerung",
  },
  "Уберите избыточный повтор": {
    en: "Remove the redundant repetition",
    es: "Quita la repetición sobrante",
    de: "Streiche die überflüssige Wiederholung",
  },
  "Оставьте одну связку и содержание": {
    en: "Keep one linker and the content",
    es: "Deja un nexo y el contenido",
    de: "Lass eine Verknüpfung und den Inhalt",
  },
  "Соберите тематическое предложение": {
    en: "Build the topic sentence",
    es: "Forma la oración temática",
    de: "Bilde den Themasatz",
  },
  "Соберите добавление": {
    en: "Build the addition",
    es: "Forma el añadido",
    de: "Bilde die Ergänzung",
  },
  "Соберите закрытие": {
    en: "Build the closing",
    es: "Forma el cierre",
    de: "Bilde den Schluss",
  },
  "Выберите функцию": {
    en: "Choose the function",
    es: "Elige la función",
    de: "Wähle die Funktion",
  },
  "Выберите смысл": {
    en: "Choose the meaning",
    es: "Elige el sentido",
    de: "Wähle die Bedeutung",
  },
  "Выберите слабую фразу": {
    en: "Choose the weak sentence",
    es: "Elige la frase débil",
    de: "Wähle den schwachen Satz",
  },
  "Наречие оценки: убедительно": {
    en: "Evaluative adverb: убедительно",
    es: "Adverbio de valoración: убедительно",
    de: "Bewertungsadverb: убедительно",
  },
  "Наречие предела: недостаточно": {
    en: "Adverb of limit: недостаточно",
    es: "Adverbio de límite: недостаточно",
    de: "Adverb der Grenze: недостаточно",
  },
  "Безличная рамка из двух слов, первое «следует»": {
    en: "Impersonal frame of two words, the first is «следует»",
    es: "Marco impersonal de dos palabras, la primera es «следует»",
    de: "Unpersönlicher Rahmen aus zwei Wörtern, das erste ist «следует»",
  },
  "Родительный от «внимание»": {
    en: "Genitive of «внимание»",
    es: "Genitivo de «внимание»",
    de: "Genitiv von «внимание»",
  },
  "Разведите сильную сторону и предел": {
    en: "Separate the strength and the limit",
    es: "Separa el punto fuerte y el límite",
    de: "Trenne die Stärke und die Grenze",
  },
  "Уберите противоречивую уступку": {
    en: "Remove the contradictory concession",
    es: "Quita la concesión contradictoria",
    de: "Streiche die widersprüchliche Einräumung",
  },
  "Добавьте, что именно смотреть": {
    en: "Add what exactly to look at",
    es: "Añade qué hay que mirar exactamente",
    de: "Ergänze, worauf genau zu achten ist",
  },
  "Исправьте род: рецензент говорит о себе": {
    en: "Fix the gender: the reviewer is speaking about herself",
    es: "Corrige el género: la reseñista habla de sí misma",
    de: "Korrigiere das Genus: die Rezensentin spricht von sich",
  },
  "Соберите уступку": {
    en: "Build the concession",
    es: "Forma la concesión",
    de: "Bilde die Einräumung",
  },
  "Соберите оценку": {
    en: "Build the evaluation",
    es: "Forma la valoración",
    de: "Bilde die Bewertung",
  },
  "Соберите рамку": {
    en: "Build the frame",
    es: "Forma el marco",
    de: "Bilde den Rahmen",
  },
  "Выберите содержание рамки": {
    en: "Choose what the frame says",
    es: "Elige el contenido del marco",
    de: "Wähle den Inhalt des Rahmens",
  },
  "Выберите условие": {
    en: "Choose the condition",
    es: "Elige la condición",
    de: "Wähle die Bedingung",
  },
  "Именительный: цель": {
    en: "Nominative: цель",
    es: "Nominativo: цель",
    de: "Nominativ: цель",
  },
  "Рамка границы из двух слов, первое «в»": {
    en: "A two-word limit frame, the first word is «в»",
    es: "Marco de límite de dos palabras, la primera es «в»",
    de: "Rahmen der Grenze aus zwei Wörtern, das erste ist «в»",
  },
  "Рамка опоры: на основании": {
    en: "Support frame: на основании",
    es: "Marco de apoyo: на основании",
    de: "Stützrahmen: на основании",
  },
  "Безличное «следует»": {
    en: "Impersonal «следует»",
    es: "Forma impersonal: «следует»",
    de: "Unpersönliches «следует»",
  },
  "Замените пустые прилагательные действием": {
    en: "Replace empty adjectives with an action",
    es: "Sustituye adjetivos vacíos por una acción",
    de: "Ersetze leere Adjektive durch eine Handlung",
  },
  "Исправьте место связки: это не зачин": {
    en: "Fix where the linker sits: it is not the opening",
    es: "Corrige el lugar del nexo: no es el inicio",
    de: "Korrigiere die Stelle der Verknüpfung: sie ist kein Auftakt",
  },
  "Разведите два разных довода": {
    en: "Separate two different arguments",
    es: "Separa dos argumentos distintos",
    de: "Trenne zwei verschiedene Argumente",
  },
  "Либо назовите новизну, либо снимите шаг": {
    en: "Either name what is new, or drop that step",
    es: "O nombras la novedad, o quitas ese paso",
    de: "Nenne entweder das Neue oder streiche den Schritt",
  },
  "Соберите рамку цели": {
    en: "Build the purpose frame",
    es: "Forma el marco de la finalidad",
    de: "Bilde den Rahmen des Ziels",
  },
  "Соберите границу": {
    en: "Build the limit",
    es: "Forma el límite",
    de: "Bilde die Grenze",
  },
  "Соберите опору": {
    en: "Build the support",
    es: "Forma el apoyo",
    de: "Bilde die Stütze",
  },
  "Соберите вывод": {
    en: "Build the conclusion",
    es: "Forma la conclusión",
    de: "Bilde die Folgerung",
  },
};

export function lookupRussianInstruction(
  instruction: string,
  lang: Exclude<InterfaceLanguage, "ru">,
): string | null {
  const value = RUSSIAN_INSTRUCTION_I18N[instruction]?.[lang]?.trim();
  return value ? value : null;
}
