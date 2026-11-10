import type { InterfaceLanguage, StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };
type GlossMap = Partial<Record<Exclude<InterfaceLanguage, "ru">, string>> & {
  ru?: string;
};

type ReadingSpec = {
  passage: string;
  passageGloss: GlossMap;
  grammarTopic: string;
  vocabTopic: string;
  mc: {
    question: string;
    questionGloss: GlossMap;
    options: string[];
    answer: string;
    explanation: string;
  };
  blank?: {
    question: string;
    questionGloss: GlossMap;
    answer: string;
    acceptableAnswers?: string[];
    explanation: string;
  };
};

function glossForUi(map: GlossMap): Partial<Record<InterfaceLanguage, string>> {
  const out: Partial<Record<InterfaceLanguage, string>> = {};
  if (map.ru) out.ru = map.ru;
  if (map.en) out.en = map.en;
  if (map.es) out.es = map.es;
  if (map.de) out.de = map.de;
  return out;
}

/** Build MC (+ optional fill_blank) sharing one target-language passage. */
function readingItems(spec: ReadingSpec): Draft[] {
  const passageTranslations = glossForUi(spec.passageGloss);
  const items: Draft[] = [
    {
      type: "multiple_choice",
      passage: spec.passage,
      passageTranslations,
      question: spec.mc.question,
      questionTranslations: glossForUi(spec.mc.questionGloss),
      instruction: "Прочитайте текст и выберите ответ",
      instructionKey: "reading_comprehension",
      options: spec.mc.options,
      answer: spec.mc.answer,
      explanation: spec.mc.explanation,
      grammarTopic: spec.grammarTopic,
      vocabTopic: spec.vocabTopic,
    },
  ];
  if (spec.blank) {
    items.push({
      type: "fill_blank",
      passage: spec.passage,
      passageTranslations,
      question: spec.blank.question,
      questionTranslations: glossForUi(spec.blank.questionGloss),
      instruction: "Заполните пропуск по тексту",
      instructionKey: "fill_blank",
      answer: spec.blank.answer,
      acceptableAnswers: spec.blank.acceptableAnswers,
      explanation: spec.blank.explanation,
      grammarTopic: spec.grammarTopic,
      vocabTopic: spec.vocabTopic,
    });
  }
  return items;
}

/**
 * Short reading / comprehension items per course.
 * Appended after existing banks so adaptive IDs stay stable.
 * Russian B2–C2 chapters are intentionally omitted (frozen 40-item banks).
 */
export const READING_PASSAGES_BY_COURSE: Record<
  string,
  Record<string, Draft[]>
> = {
  spanish: {
    "chapter-1-despertar": readingItems({
      passage:
        "Buenos días. Me llamo Ana. Soy estudiante. Hoy estoy en la academia. Mi amigo Pablo es de Madrid.",
      passageGloss: {
        ru: "Доброе утро. Меня зовут Ана. Я студентка. Сегодня я в академии. Мой друг Пабло из Мадрида.",
        en: "Good morning. My name is Ana. I am a student. Today I am at the academy. My friend Pablo is from Madrid.",
        de: "Guten Morgen. Ich heiße Ana. Ich bin Studentin. Heute bin ich in der Akademie. Mein Freund Pablo ist aus Madrid.",
      },
      grammarTopic: "a1-ser-estar",
      vocabTopic: "a1-familia",
      mc: {
        question: "¿De dónde es Pablo?",
        questionGloss: {
          ru: "Откуда Пабло?",
          en: "Where is Pablo from?",
          de: "Woher kommt Pablo?",
        },
        options: ["De Madrid", "De la academia", "De Ana", "De Pablo"],
        answer: "De Madrid",
        explanation: "В тексте: «Mi amigo Pablo es de Madrid.»",
      },
      blank: {
        question: "Hoy Ana ___ en la academia.",
        questionGloss: {
          ru: "Сегодня Ана ___ в академии.",
          en: "Today Ana ___ at the academy.",
          de: "Heute ___ Ana in der Akademie.",
        },
        answer: "está",
        acceptableAnswers: ["esta", "Está"],
        explanation: "Состояние «сейчас здесь» — estar: estoy / está.",
      },
    }),
    "chapter-2-primer-dialogo": readingItems({
      passage:
        "Cada mañana Leo estudia español. Trabaja en un café por la tarde y vive cerca de la plaza. Sus amigos hablan mucho después de clase.",
      passageGloss: {
        ru: "Каждое утро Лео учит испанский. Днём он работает в кафе и живёт рядом с площадью. Его друзья много говорят после занятий.",
        en: "Every morning Leo studies Spanish. He works in a café in the afternoon and lives near the square. His friends talk a lot after class.",
        de: "Jeden Morgen lernt Leo Spanisch. Nachmittags arbeitet er in einem Café und wohnt nahe dem Platz. Seine Freunde sprechen nach dem Unterricht viel.",
      },
      grammarTopic: "a1-presente",
      vocabTopic: "a1-verbos-basicos",
      mc: {
        question: "¿Dónde trabaja Leo?",
        questionGloss: {
          ru: "Где работает Лео?",
          en: "Where does Leo work?",
          de: "Wo arbeitet Leo?",
        },
        options: ["En un café", "En la plaza", "En clase", "En Madrid"],
        answer: "En un café",
        explanation: "«Trabaja en un café por la tarde.»",
      },
      blank: {
        question: "Cada mañana Leo ___ español.",
        questionGloss: {
          ru: "Каждое утро Лео ___ испанский.",
          en: "Every morning Leo ___ Spanish.",
          de: "Jeden Morgen ___ Leo Spanisch.",
        },
        answer: "estudia",
        acceptableAnswers: ["Estudia"],
        explanation: "Presente: él estudia.",
      },
    }),
    "chapter-6-cuerpo": readingItems({
      passage:
        "Me gusta el café por la mañana. No me gusta el té. Los sábados me gustan los paseos largos con amigos.",
      passageGloss: {
        ru: "Мне нравится кофе по утрам. Мне не нравится чай. По субботам мне нравятся долгие прогулки с друзьями.",
        en: "I like coffee in the morning. I don't like tea. On Saturdays I like long walks with friends.",
        de: "Ich mag morgens Kaffee. Ich mag keinen Tee. Samstags mag ich lange Spaziergänge mit Freunden.",
      },
      grammarTopic: "a1-gustar",
      vocabTopic: "a1-comida",
      mc: {
        question: "¿Qué no le gusta a la persona?",
        questionGloss: {
          ru: "Что человеку не нравится?",
          en: "What does the person not like?",
          de: "Was mag die Person nicht?",
        },
        options: ["El café", "El té", "Los paseos", "Los sábados"],
        answer: "El té",
        explanation: "«No me gusta el té.»",
      },
    }),
    "chapter-7-pasado-perfecto": readingItems({
      passage:
        "Esta semana he viajado a Valencia. He visto el mercado y he comido paella. Todavía no he visitado el puerto.",
      passageGloss: {
        ru: "На этой неделе я съездил(а) в Валенсию. Я видел(а) рынок и ел(а) паэлью. Порт я ещё не посещал(а).",
        en: "This week I have travelled to Valencia. I have seen the market and eaten paella. I still have not visited the port.",
        de: "Diese Woche bin ich nach Valencia gereist. Ich habe den Markt gesehen und Paella gegessen. Den Hafen habe ich noch nicht besucht.",
      },
      grammarTopic: "a2-preterito-perfecto",
      vocabTopic: "a2-viajes",
      mc: {
        question: "¿Qué no ha hecho todavía?",
        questionGloss: {
          ru: "Чего он/она ещё не сделал(а)?",
          en: "What has he/she not done yet?",
          de: "Was hat er/sie noch nicht getan?",
        },
        options: [
          "Visitar el puerto",
          "Viajar a Valencia",
          "Ver el mercado",
          "Comer paella",
        ],
        answer: "Visitar el puerto",
        explanation: "«Todavía no he visitado el puerto.»",
      },
      blank: {
        question: "Esta semana ___ viajado a Valencia.",
        questionGloss: {
          ru: "На этой неделе я ___ в Валенсию.",
          en: "This week I ___ travelled to Valencia.",
          de: "Diese Woche ___ ich nach Valencia gereist.",
        },
        answer: "he",
        acceptableAnswers: ["He"],
        explanation: "Pretérito perfecto: he + participio.",
      },
    }),
    "chapter-11-subjuntivo": readingItems({
      passage:
        "Quiero que vengas a la reunión. Es importante que hables con claridad. No creo que sea difícil si preparas dos ejemplos.",
      passageGloss: {
        ru: "Хочу, чтобы ты пришёл(а) на встречу. Важно, чтобы ты говорил(а) ясно. Не думаю, что это сложно, если подготовишь два примера.",
        en: "I want you to come to the meeting. It is important that you speak clearly. I don't think it is difficult if you prepare two examples.",
        de: "Ich möchte, dass du zum Treffen kommst. Es ist wichtig, dass du klar sprichst. Ich glaube nicht, dass es schwierig ist, wenn du zwei Beispiele vorbereitest.",
      },
      grammarTopic: "b1-subjuntivo",
      vocabTopic: "b1-emociones",
      mc: {
        question: "¿Qué quiere el hablante?",
        questionGloss: {
          ru: "Чего хочет говорящий?",
          en: "What does the speaker want?",
          de: "Was will der Sprecher?",
        },
        options: [
          "Que la otra persona venga",
          "Que la reunión sea difícil",
          "Que no haya ejemplos",
          "Que nadie hable",
        ],
        answer: "Que la otra persona venga",
        explanation: "«Quiero que vengas a la reunión.»",
      },
    }),
    "chapter-14-estilo-indirecto": readingItems({
      passage:
        "Ana dijo que llegaría a las seis. Pablo preguntó si había wifi en la sala. La coordinadora respondió que sí y que pediría más sillas.",
      passageGloss: {
        ru: "Ана сказала, что приедет в шесть. Пабло спросил, есть ли в зале wifi. Координатор ответила, что да, и что попросит ещё стульев.",
        en: "Ana said that she would arrive at six. Pablo asked if there was wifi in the room. The coordinator answered that yes and that she would ask for more chairs.",
        de: "Ana sagte, dass sie um sechs ankommen würde. Pablo fragte, ob es WLAN im Raum gebe. Die Koordinatorin antwortete ja und dass sie mehr Stühle verlangen würde.",
      },
      grammarTopic: "b2-estilo-indirecto",
      vocabTopic: "b2-argumentacion",
      mc: {
        question: "¿Qué preguntó Pablo?",
        questionGloss: {
          ru: "Что спросил Пабло?",
          en: "What did Pablo ask?",
          de: "Was fragte Pablo?",
        },
        options: [
          "Si había wifi",
          "Si Ana llegaría",
          "Si pediría sillas",
          "Si la sala era grande",
        ],
        answer: "Si había wifi",
        explanation: "«Pablo preguntó si había wifi en la sala.»",
      },
    }),
    "chapter-16-perifrasis": readingItems({
      passage:
        "El informe sigue creciendo. Debemos volver a revisar los datos antes de enviarlo. Acabamos de recibir una nota del revisor.",
      passageGloss: {
        ru: "Отчёт продолжает расти. Мы должны снова проверить данные перед отправкой. Мы только что получили заметку рецензента.",
        en: "The report keeps growing. We must review the data again before sending it. We have just received a note from the reviewer.",
        de: "Der Bericht wächst weiter. Wir müssen die Daten vor dem Senden erneut prüfen. Wir haben gerade eine Notiz vom Gutachter erhalten.",
      },
      grammarTopic: "c1-perifrasis-verbales",
      vocabTopic: "c1-expresiones-idiomaticas",
      mc: {
        question: "¿Qué acabamos de hacer?",
        questionGloss: {
          ru: "Что мы только что сделали?",
          en: "What have we just done?",
          de: "Was haben wir gerade getan?",
        },
        options: [
          "Recibir una nota del revisor",
          "Enviar el informe",
          "Borrar los datos",
          "Cerrar la revisión",
        ],
        answer: "Recibir una nota del revisor",
        explanation: "«Acabamos de recibir una nota del revisor.»",
      },
    }),
  },

  english: {
    "eng-ch1-first-steps": readingItems({
      passage:
        "Hello! My name is Maya. I am a new student. Today I am at the language school. My classmate Tom is from Canada.",
      passageGloss: {
        ru: "Привет! Меня зовут Майя. Я новая студентка. Сегодня я в языковой школе. Мой одногруппник Том из Канады.",
        es: "¡Hola! Me llamo Maya. Soy una estudiante nueva. Hoy estoy en la escuela de idiomas. Mi compañero Tom es de Canadá.",
        de: "Hallo! Ich heiße Maya. Ich bin eine neue Schülerin. Heute bin ich in der Sprachschule. Mein Klassenkamerad Tom kommt aus Kanada.",
      },
      grammarTopic: "eng-a1-be",
      vocabTopic: "eng-a1-personal-info",
      mc: {
        question: "Where is Tom from?",
        questionGloss: {
          ru: "Откуда Том?",
          es: "¿De dónde es Tom?",
          de: "Woher kommt Tom?",
        },
        options: ["Canada", "the language school", "Maya", "Hello"],
        answer: "Canada",
        explanation: "«My classmate Tom is from Canada.»",
      },
      blank: {
        question: "Today Maya ___ at the language school.",
        questionGloss: {
          ru: "Сегодня Майя ___ в языковой школе.",
          es: "Hoy Maya ___ en la escuela de idiomas.",
          de: "Heute ___ Maya in der Sprachschule.",
        },
        answer: "is",
        acceptableAnswers: ["Is"],
        explanation: "Present of be: I am / she is.",
      },
    }),
    "eng-ch2-routines": readingItems({
      passage:
        "Sam wakes up at seven. He drinks tea, checks his messages, and walks to the station. On Fridays he finishes work early.",
      passageGloss: {
        ru: "Сэм встаёт в семь. Он пьёт чай, проверяет сообщения и идёт на станцию. По пятницам он рано заканчивает работу.",
        es: "Sam se despierta a las siete. Bebe té, revisa sus mensajes y camina a la estación. Los viernes termina el trabajo temprano.",
        de: "Sam steht um sieben auf. Er trinkt Tee, prüft Nachrichten und geht zum Bahnhof. Freitags beendet er die Arbeit früh.",
      },
      grammarTopic: "eng-a1-present-simple",
      vocabTopic: "eng-a1-everyday-objects",
      mc: {
        question: "When does Sam finish work early?",
        questionGloss: {
          ru: "Когда Сэм рано заканчивает работу?",
          es: "¿Cuándo termina Sam el trabajo temprano?",
          de: "Wann beendet Sam die Arbeit früh?",
        },
        options: ["On Fridays", "At seven", "Every morning", "At the station"],
        answer: "On Fridays",
        explanation: "«On Fridays he finishes work early.»",
      },
      blank: {
        question: "Sam ___ up at seven.",
        questionGloss: {
          ru: "Сэм ___ в семь.",
          es: "Sam ___ a las siete.",
          de: "Sam ___ um sieben auf.",
        },
        answer: "wakes",
        acceptableAnswers: ["Wakes"],
        explanation: "Present simple, 3rd person: wakes.",
      },
    }),
    "eng-ch4-past-stories": readingItems({
      passage:
        "Last summer we visited Edinburgh. We stayed near the castle, tried local food, and took many photos. It rained once, but we still enjoyed the trip.",
      passageGloss: {
        ru: "Прошлым летом мы посетили Эдинбург. Мы жили рядом с замком, пробовали местную еду и много фотографировали. Один раз шёл дождь, но поездка всё равно понравилась.",
        es: "El verano pasado visitamos Edimburgo. Nos alojamos cerca del castillo, probamos comida local y tomamos muchas fotos. Llovió una vez, pero igual disfrutamos el viaje.",
        de: "Letzten Sommer besuchten wir Edinburgh. Wir wohnten nahe der Burg, probierten lokales Essen und machten viele Fotos. Einmal regnete es, aber die Reise hat uns trotzdem gefallen.",
      },
      grammarTopic: "eng-a2-past-simple",
      vocabTopic: "eng-a2-travel",
      mc: {
        question: "Where did they stay?",
        questionGloss: {
          ru: "Где они жили?",
          es: "¿Dónde se alojaron?",
          de: "Wo wohnten sie?",
        },
        options: [
          "Near the castle",
          "In London",
          "At the airport",
          "On a boat",
        ],
        answer: "Near the castle",
        explanation: "«We stayed near the castle.»",
      },
    }),
    "eng-ch7-future-plans": readingItems({
      passage:
        "Next month I will start an internship. I am going to prepare my CV this weekend. If the interview goes well, I will move to Manchester.",
      passageGloss: {
        ru: "В следующем месяце я начну стажировку. В эти выходные собираюсь подготовить резюме. Если собеседование пройдёт хорошо, я перееду в Манчестер.",
        es: "El mes que viene empezaré unas prácticas. Este fin de semana voy a preparar mi CV. Si la entrevista va bien, me mudaré a Manchester.",
        de: "Nächsten Monat beginne ich ein Praktikum. Dieses Wochenende werde ich meinen Lebenslauf vorbereiten. Wenn das Gespräch gut läuft, ziehe ich nach Manchester.",
      },
      grammarTopic: "eng-b1-future-conditional",
      vocabTopic: "eng-b1-personality",
      mc: {
        question: "What will happen if the interview goes well?",
        questionGloss: {
          ru: "Что будет, если собеседование пройдёт хорошо?",
          es: "¿Qué pasará si la entrevista va bien?",
          de: "Was passiert, wenn das Gespräch gut läuft?",
        },
        options: [
          "The speaker will move to Manchester",
          "The speaker will cancel the internship",
          "The speaker will stay home",
          "The speaker will delete the CV",
        ],
        answer: "The speaker will move to Manchester",
        explanation: "«If the interview goes well, I will move to Manchester.»",
      },
    }),
    "eng-ch11-passive": readingItems({
      passage:
        "The museum was renovated last year. Tickets are sold online, and audio guides are provided free of charge. The main hall is cleaned every morning.",
      passageGloss: {
        ru: "Музей отреставрировали в прошлом году. Билеты продаются онлайн, аудиогиды предоставляются бесплатно. Главный зал убирают каждое утро.",
        es: "El museo fue renovado el año pasado. Las entradas se venden en línea y las audioguías se ofrecen gratis. La sala principal se limpia cada mañana.",
        de: "Das Museum wurde letztes Jahr renoviert. Tickets werden online verkauft, Audioguides werden kostenlos bereitgestellt. Die Haupthalle wird jeden Morgen gereinigt.",
      },
      grammarTopic: "eng-b2-passive",
      vocabTopic: "eng-b2-education",
      mc: {
        question: "How are tickets sold?",
        questionGloss: {
          ru: "Как продаются билеты?",
          es: "¿Cómo se venden las entradas?",
          de: "Wie werden Tickets verkauft?",
        },
        options: ["Online", "Only at the door", "By phone only", "Never"],
        answer: "Online",
        explanation: "«Tickets are sold online.»",
      },
    }),
    "eng-ch13-advanced-structures": readingItems({
      passage:
        "Not only did the committee approve the proposal, but it also requested a clearer timeline. Had the draft been shorter, the discussion would have ended earlier.",
      passageGloss: {
        ru: "Комитет не только одобрил предложение, но и запросил более ясный график. Будь черновик короче, обсуждение закончилось бы раньше.",
        es: "El comité no solo aprobó la propuesta, sino que también pidió un calendario más claro. Si el borrador hubiera sido más corto, la discusión habría terminado antes.",
        de: "Das Komitee hat den Vorschlag nicht nur genehmigt, sondern auch einen klareren Zeitplan verlangt. Wäre der Entwurf kürzer gewesen, wäre die Diskussion früher zu Ende gewesen.",
      },
      grammarTopic: "eng-c1-inversion",
      vocabTopic: "eng-c1-idioms",
      mc: {
        question: "What extra request did the committee make?",
        questionGloss: {
          ru: "Какую дополнительную просьбу высказал комитет?",
          es: "¿Qué petición extra hizo el comité?",
          de: "Welche zusätzliche Bitte stellte das Komitee?",
        },
        options: [
          "A clearer timeline",
          "A longer draft",
          "A private meeting",
          "A cancelled vote",
        ],
        answer: "A clearer timeline",
        explanation: "«…requested a clearer timeline.»",
      },
    }),
  },

  russian: {
    "ru-ch1-alphabet-greetings": readingItems({
      passage:
        "Здравствуйте! Меня зовут Омар. Я студент. Сегодня я в университете. Мой друг Анна из Каира.",
      passageGloss: {
        en: "Hello! My name is Omar. I am a student. Today I am at the university. My friend Anna is from Cairo.",
        es: "¡Hola! Me llamo Omar. Soy estudiante. Hoy estoy en la universidad. Mi amiga Anna es de El Cairo.",
        de: "Guten Tag! Ich heiße Omar. Ich bin Student. Heute bin ich an der Universität. Meine Freundin Anna kommt aus Kairo.",
      },
      grammarTopic: "ru-a1-alphabet-phonetics",
      vocabTopic: "ru-a1-greetings",
      mc: {
        question: "Откуда Анна?",
        questionGloss: {
          en: "Where is Anna from?",
          es: "¿De dónde es Anna?",
          de: "Woher kommt Anna?",
        },
        options: ["Из Каира", "Из университета", "Из Москвы", "Из Омара"],
        answer: "Из Каира",
        explanation: "«Мой друг Анна из Каира.»",
      },
      blank: {
        question: "Меня зовут ___.",
        questionGloss: {
          en: "My name is ___.",
          es: "Me llamo ___.",
          de: "Ich heiße ___.",
        },
        answer: "Омар",
        acceptableAnswers: ["омар", "Omar"],
        explanation: "«Меня зовут Омар.»",
      },
    }),
    "ru-ch2-introduce-yourself": readingItems({
      passage:
        "Это Мария. Она из Испании. Она студентка, а её брат — инженер. Они живут в общежитии рядом с парком.",
      passageGloss: {
        en: "This is Maria. She is from Spain. She is a student, and her brother is an engineer. They live in a dormitory near the park.",
        es: "Esta es María. Es de España. Es estudiante y su hermano es ingeniero. Viven en una residencia cerca del parque.",
        de: "Das ist Maria. Sie kommt aus Spanien. Sie ist Studentin und ihr Bruder ist Ingenieur. Sie wohnen im Wohnheim neben dem Park.",
      },
      grammarTopic: "ru-a1-identity-eto",
      vocabTopic: "ru-a1-personal-info",
      mc: {
        question: "Кем работает брат Марии?",
        questionGloss: {
          en: "What does Maria's brother do?",
          es: "¿Qué hace el hermano de María?",
          de: "Was macht Marias Bruder?",
        },
        options: ["Инженер", "Студент", "Преподаватель", "Врач"],
        answer: "Инженер",
        explanation: "«её брат — инженер.»",
      },
      blank: {
        question: "Она из ___.",
        questionGloss: {
          en: "She is from ___.",
          es: "Ella es de ___.",
          de: "Sie kommt aus ___.",
        },
        answer: "Испании",
        acceptableAnswers: ["Испания", "испании"],
        explanation: "«Она из Испании.»",
      },
    }),
    "ru-ch4-present-tense": readingItems({
      passage:
        "По утрам я читаю новости, потом иду на пару. Друзья часто пишут в чат, а вечером мы смотрим фильм в общежитии.",
      passageGloss: {
        en: "In the mornings I read the news, then I go to class. Friends often write in the chat, and in the evening we watch a film in the dorm.",
        es: "Por la mañana leo las noticias y luego voy a clase. Los amigos escriben mucho en el chat y por la noche vemos una película en la residencia.",
        de: "Morgens lese ich Nachrichten, dann gehe ich zur Vorlesung. Freunde schreiben oft im Chat, und abends schauen wir im Wohnheim einen Film.",
      },
      grammarTopic: "ru-a1-present-tense",
      vocabTopic: "ru-a1-daily-verbs",
      mc: {
        question: "Что мы делаем вечером?",
        questionGloss: {
          en: "What do we do in the evening?",
          es: "¿Qué hacemos por la noche?",
          de: "Was machen wir abends?",
        },
        options: [
          "Смотрим фильм",
          "Идём на пару",
          "Читаем новости",
          "Пишем доклад",
        ],
        answer: "Смотрим фильм",
        explanation: "«вечером мы смотрим фильм в общежитии.»",
      },
    }),
    "ru-ch9-past-tense": readingItems({
      passage:
        "Вчера мы были в музее. Экскурсия длилась два часа. После этого Анна купила открытки, а я написал короткий отчёт.",
      passageGloss: {
        en: "Yesterday we were at the museum. The tour lasted two hours. After that Anna bought postcards, and I wrote a short report.",
        es: "Ayer estuvimos en el museo. La visita duró dos horas. Después Anna compró postales y yo escribí un informe corto.",
        de: "Gestern waren wir im Museum. Die Führung dauerte zwei Stunden. Danach kaufte Anna Postkarten, und ich schrieb einen kurzen Bericht.",
      },
      grammarTopic: "ru-a2-past-tense",
      vocabTopic: "ru-a2-yesterday",
      mc: {
        question: "Что купила Анна?",
        questionGloss: {
          en: "What did Anna buy?",
          es: "¿Qué compró Anna?",
          de: "Was kaufte Anna?",
        },
        options: ["Открытки", "Билеты", "Книги", "Отчёт"],
        answer: "Открытки",
        explanation: "«Анна купила открытки.»",
      },
      blank: {
        question: "Экскурсия длилась ___ часа.",
        questionGloss: {
          en: "The tour lasted ___ hours.",
          es: "La visita duró ___ horas.",
          de: "Die Führung dauerte ___ Stunden.",
        },
        answer: "два",
        acceptableAnswers: ["2", "Два"],
        explanation: "«Экскурсия длилась два часа.»",
      },
    }),
    "ru-ch15-motion-basic": readingItems({
      passage:
        "Утром я пошёл в деканат пешком. Потом мы поехали на автобусе к общежитию. Вечером гости пришли и стояли у табло.",
      passageGloss: {
        en: "In the morning I went to the dean's office on foot. Then we went by bus to the dorm. In the evening the guests arrived and stood by the board.",
        es: "Por la mañana fui andando al decanato. Luego fuimos en autobús a la residencia. Por la noche llegaron los invitados y estaban junto al panel.",
        de: "Morgens ging ich zu Fuß zum Dekanat. Dann fuhren wir mit dem Bus zum Wohnheim. Abends kamen Gäste und standen am Anzeigebrett.",
      },
      grammarTopic: "ru-a2-motion-basic",
      vocabTopic: "ru-a2-transport",
      mc: {
        question: "Как я добрался до деканата?",
        questionGloss: {
          en: "How did I get to the dean's office?",
          es: "¿Cómo llegué al decanato?",
          de: "Wie kam ich zum Dekanat?",
        },
        options: ["Пешком", "На автобусе", "На такси", "На метро"],
        answer: "Пешком",
        explanation: "«я пошёл в деканат пешком.»",
      },
    }),
    "ru-ch18-aspect-system": readingItems({
      passage:
        "Пока комиссия читала работы, Омар всё ещё правил черновик. Наконец он отправил файл и сразу почувствовал облегчение.",
      passageGloss: {
        en: "While the committee was reading the papers, Omar was still editing the draft. Finally he sent the file and immediately felt relief.",
        es: "Mientras la comisión leía los trabajos, Omar seguía corrigiendo el borrador. Por fin envió el archivo y de inmediato sintió alivio.",
        de: "Während die Kommission die Arbeiten las, korrigierte Omar noch den Entwurf. Endlich schickte er die Datei und fühlte sofort Erleichterung.",
      },
      grammarTopic: "ru-b1-aspect-tenses",
      vocabTopic: "ru-b1-narrative-verbs",
      mc: {
        question: "Что Омар сделал в конце?",
        questionGloss: {
          en: "What did Omar do at the end?",
          es: "¿Qué hizo Omar al final?",
          de: "Was machte Omar am Ende?",
        },
        options: [
          "Отправил файл",
          "Читал работы комиссии",
          "Отменил отчёт",
          "Закрыл деканат",
        ],
        answer: "Отправил файл",
        explanation: "«Наконец он отправил файл…»",
      },
    }),
    // B2–C2 omitted: chapter banks are frozen at exactly 40 items.
  },
};

export function getReadingPassagesForChapter(
  courseId: string,
  chapterSlug: string,
): Draft[] {
  return READING_PASSAGES_BY_COURSE[courseId]?.[chapterSlug] ?? [];
}

/** Chapters that currently ship reading items (for tests / diagnostics). */
export function listReadingPassageChapters(courseId: string): string[] {
  return Object.keys(READING_PASSAGES_BY_COURSE[courseId] ?? {});
}
