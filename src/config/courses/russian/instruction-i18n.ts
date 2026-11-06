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
};

export function lookupRussianInstruction(
  instruction: string,
  lang: Exclude<InterfaceLanguage, "ru">,
): string | null {
  const value = RUSSIAN_INSTRUCTION_I18N[instruction]?.[lang]?.trim();
  return value ? value : null;
}
