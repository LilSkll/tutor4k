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
        question: "Откуда Том?",
        questionGloss: {
          en: "Where is Tom from?",
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
        question: "Когда Сэм рано заканчивает работу?",
        questionGloss: {
          en: "When does Sam finish work early?",
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
        question: "Где они жили?",
        questionGloss: {
          en: "Where did they stay?",
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
        question: "Что будет, если собеседование пройдёт хорошо?",
        questionGloss: {
          en: "What will happen if the interview goes well?",
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
        question: "Как продаются билеты?",
        questionGloss: {
          en: "How are tickets sold?",
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
        question: "Какую дополнительную просьбу высказал комитет?",
        questionGloss: {
          en: "What extra request did the committee make?",
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
    // A2–C2 omitted: frozen chapter banks expect exact sizes (40 / type mixes).
    // A1 keeps a small reading set; literary C2 already embeds fragments in-bank.
  },

  german: {
    "de-ch1-alphabet-greetings": readingItems({
      passage:
        "Guten Morgen! Ich heiße Lea. Ich bin neu in Berlin. Meine Lehrerin sagt: Guten Tag und willkommen. Am Abend sage ich: Auf Wiedersehen.",
      passageGloss: {
        ru: "Доброе утро! Меня зовут Леа. Я недавно в Берлине. Моя учительница говорит: добрый день и добро пожаловать. Вечером я говорю: до свидания.",
        en: "Good morning! My name is Lea. I am new in Berlin. My teacher says: good day and welcome. In the evening I say: goodbye.",
        es: "¡Buenos días! Me llamo Lea. Soy nueva en Berlín. Mi profesora dice: buen día y bienvenida. Por la tarde digo: adiós.",
      },
      grammarTopic: "de-a1-alphabet-pronunciation",
      vocabTopic: "de-a1-greetings",
      mc: {
        // A1 reading prompts in L1 — beginners cannot answer German meta-questions yet.
        question: "Что Леа говорит вечером?",
        questionGloss: {
          en: "What does Lea say in the evening?",
          es: "¿Qué dice Lea por la tarde?",
          de: "Was sagt Lea am Abend?",
        },
        options: ["Auf Wiedersehen", "Guten Morgen", "Willkommen", "Berlin"],
        answer: "Auf Wiedersehen",
        explanation: "В тексте: «Am Abend sage ich: Auf Wiedersehen.»",
      },
      blank: {
        question: "Ich ___ Lea.",
        questionGloss: {
          ru: "Меня зовут: Ich … Lea.",
          en: "My name is: Ich … Lea.",
          es: "Me llamo: Ich … Lea.",
          de: "Ich heiße Lea — welche Verbform?",
        },
        answer: "heiße",
        acceptableAnswers: ["Heiße"],
        explanation: "«Ich heiße Lea.»",
      },
    }),
    "de-ch3-articles-gender": readingItems({
      passage:
        "Der Tisch ist groß. Die Lampe ist klein. Das Buch ist neu. Ein Mann liest, und eine Frau schreibt.",
      passageGloss: {
        ru: "Стол большой. Лампа маленькая. Книга новая. Мужчина читает, а женщина пишет.",
        en: "The table is big. The lamp is small. The book is new. A man is reading, and a woman is writing.",
        es: "La mesa es grande. La lámpara es pequeña. El libro es nuevo. Un hombre lee y una mujer escribe.",
      },
      grammarTopic: "de-a1-articles-gender-nominative",
      vocabTopic: "de-a1-everyday-objects",
      mc: {
        question: "Что в тексте маленькое?",
        questionGloss: {
          en: "What is small in the text?",
          es: "¿Qué es pequeño en el texto?",
          de: "Was ist klein?",
        },
        options: ["Die Lampe", "Der Tisch", "Das Buch", "Ein Mann"],
        answer: "Die Lampe",
        explanation: "«Die Lampe ist klein.»",
      },
      blank: {
        question: "___ Tisch ist groß.",
        questionGloss: {
          ru: "Стол (муж. род): … Tisch ist groß.",
          en: "Table (masculine): … Tisch ist groß.",
          es: "Mesa (masculino): … Tisch ist groß.",
          de: "Welcher Artikel? … Tisch ist groß.",
        },
        answer: "Der",
        acceptableAnswers: ["der"],
        explanation: "der Tisch — мужской род.",
      },
    }),
    "de-ch5-akkusativ": readingItems({
      passage:
        "Heute kaufe ich einen Apfel und ein Brot. Am Abend sieht meine Freundin den Film. Wir haben eine Katze zu Hause.",
      passageGloss: {
        ru: "Сегодня я покупаю яблоко и хлеб. Вечером моя подруга смотрит фильм. У нас дома есть кошка.",
        en: "Today I am buying an apple and a loaf of bread. In the evening my friend watches the film. We have a cat at home.",
        es: "Hoy compro una manzana y un pan. Por la tarde mi amiga ve la película. Tenemos un gato en casa.",
      },
      grammarTopic: "de-a1-akkusativ",
      vocabTopic: "de-a1-food-shopping",
      mc: {
        question: "Что покупает человек в тексте?",
        questionGloss: {
          en: "What does the person buy?",
          es: "¿Qué compra la persona?",
          de: "Was kauft die Person?",
        },
        options: ["Einen Apfel und ein Brot", "Den Film", "Eine Katze", "Einen Tisch"],
        answer: "Einen Apfel und ein Brot",
        explanation: "«Heute kaufe ich einen Apfel und ein Brot.»",
      },
      blank: {
        question: "Wir haben ___ Katze.",
        questionGloss: {
          ru: "У нас есть … кошка (винительный).",
          en: "We have … cat (accusative).",
          es: "Tenemos … gata (acusativo).",
          de: "Welcher Artikel? Wir haben … Katze.",
        },
        answer: "eine",
        acceptableAnswers: ["Eine"],
        explanation: "die Katze → винительный eine.",
      },
    }),
    "de-ch7-possessives-plurals": readingItems({
      passage:
        "Das ist mein Bruder Paul. Seine Schwester heißt Nora. Unsere Eltern wohnen in Hamburg. Ihre Kinder haben zwei Fahrräder.",
      passageGloss: {
        ru: "Это мой брат Пауль. Его сестру зовут Нора. Наши родители живут в Гамбурге. У их детей два велосипеда.",
        en: "This is my brother Paul. His sister's name is Nora. Our parents live in Hamburg. Their children have two bicycles.",
        es: "Este es mi hermano Paul. Su hermana se llama Nora. Nuestros padres viven en Hamburgo. Sus hijos tienen dos bicicletas.",
      },
      grammarTopic: "de-a1-possessives-plurals",
      vocabTopic: "de-a1-family-home",
      mc: {
        question: "Где живут родители?",
        questionGloss: {
          en: "Where do the parents live?",
          es: "¿Dónde viven los padres?",
          de: "Wo wohnen die Eltern?",
        },
        options: ["In Hamburg", "Bei Nora", "In Berlin", "Bei Paul"],
        answer: "In Hamburg",
        explanation: "«Unsere Eltern wohnen in Hamburg.»",
      },
      blank: {
        question: "Das ist ___ Bruder Paul.",
        questionGloss: {
          ru: "Это … брат Пауль (мой).",
          en: "This is … brother Paul (my).",
          es: "Este es … hermano Paul (mi).",
          de: "Welches Possessiv? Das ist … Bruder Paul.",
        },
        answer: "mein",
        acceptableAnswers: ["Mein"],
        explanation: "«Das ist mein Bruder Paul.»",
      },
    }),
    "de-ch10-negation-time": readingItems({
      passage:
        "Es ist acht Uhr. Am Montag habe ich Deutschkurs. Am Sonntag arbeite ich nicht. Ich habe kein Auto, aber ich habe Zeit.",
      passageGloss: {
        ru: "Сейчас восемь часов. В понедельник у меня курс немецкого. В воскресенье я не работаю. У меня нет машины, но есть время.",
        en: "It is eight o'clock. On Monday I have a German class. On Sunday I do not work. I have no car, but I have time.",
        es: "Son las ocho. El lunes tengo clase de alemán. El domingo no trabajo. No tengo coche, pero tengo tiempo.",
      },
      grammarTopic: "de-a1-negation-time-numbers",
      vocabTopic: "de-a1-time-calendar",
      mc: {
        question: "Когда человек не работает?",
        questionGloss: {
          en: "When does the person not work?",
          es: "¿Cuándo no trabaja la persona?",
          de: "Wann arbeitet die Person nicht?",
        },
        options: ["Am Sonntag", "Am Montag", "Um acht Uhr", "Immer"],
        answer: "Am Sonntag",
        explanation: "«Am Sonntag arbeite ich nicht.»",
      },
      blank: {
        question: "Ich habe ___ Auto.",
        questionGloss: {
          ru: "У меня нет машины: Ich habe … Auto.",
          en: "I have no car: Ich habe … Auto.",
          es: "No tengo coche: Ich habe … Auto.",
          de: "Negation: Ich habe … Auto.",
        },
        answer: "kein",
        acceptableAnswers: ["Kein"],
        explanation: "«Ich habe kein Auto.»",
      },
    }),
    "de-ch11-dativ": readingItems({
      passage:
        "Ich helfe dem Nachbarn im Garten. Das Fahrrad gehört meiner Schwester. Wir danken der Lehrerin für das Buch. Sie gibt dem Kind einen Ball.",
      passageGloss: {
        ru: "Я помогаю соседу в саду. Велосипед принадлежит моей сестре. Мы благодарим учительницу за книгу. Она даёт ребёнку мяч.",
        en: "I help the neighbour in the garden. The bicycle belongs to my sister. We thank the teacher for the book. She gives the child a ball.",
        es: "Ayudo al vecino en el jardín. La bicicleta es de mi hermana. Agradecemos a la profesora el libro. Ella le da una pelota al niño.",
      },
      grammarTopic: "de-a2-dativ",
      vocabTopic: "de-a2-gifts-favors",
      mc: {
        question: "Кому принадлежит велосипед?",
        questionGloss: {
          en: "Who does the bicycle belong to?",
          es: "¿A quién pertenece la bicicleta?",
          de: "Wem gehört das Fahrrad?",
        },
        options: ["Meiner Schwester", "Dem Nachbarn", "Der Lehrerin", "Dem Kind"],
        answer: "Meiner Schwester",
        explanation: "«Das Fahrrad gehört meiner Schwester.»",
      },
      blank: {
        question: "Ich helfe ___ Nachbarn.",
        questionGloss: {
          ru: "Я помогаю ___ соседу.",
          en: "I help ___ neighbour.",
          es: "Ayudo ___ vecino.",
        },
        answer: "dem",
        acceptableAnswers: ["Dem"],
        explanation: "helfen + дательный: dem Nachbarn.",
      },
    }),
    "de-ch13-perfekt": readingItems({
      passage:
        "Am Samstag habe ich Freunde getroffen. Wir haben Pizza gegessen und einen Film gesehen. Danach ist Lea nach Hause gegangen. Ich bin lange geblieben.",
      passageGloss: {
        ru: "В субботу я встретился с друзьями. Мы съели пиццу и посмотрели фильм. Потом Леа пошла домой. Я оставался ещё долго.",
        en: "On Saturday I met friends. We ate pizza and watched a film. After that Lea went home. I stayed for a long time.",
        es: "El sábado quedé con amigos. Comimos pizza y vimos una película. Después Lea se fue a casa. Yo me quedé mucho tiempo.",
      },
      grammarTopic: "de-a2-perfekt",
      vocabTopic: "de-a2-weekend-events",
      mc: {
        question: "Что они ели?",
        questionGloss: {
          en: "What did they eat?",
          es: "¿Qué comieron?",
          de: "Was haben sie gegessen?",
        },
        options: ["Pizza", "Einen Film", "Freunde", "Zu Hause"],
        answer: "Pizza",
        explanation: "«Wir haben Pizza gegessen.»",
      },
      blank: {
        question: "Lea ist nach Hause ___.",
        questionGloss: {
          ru: "Леа ___ домой.",
          en: "Lea has ___ home.",
          es: "Lea se ___ a casa.",
        },
        answer: "gegangen",
        acceptableAnswers: ["Gegangen"],
        explanation: "gehen → ist gegangen.",
      },
    }),
    "de-ch15-reflexive": readingItems({
      passage:
        "Am Morgen wasche ich mich und frühstücke. Ich freue mich auf den Kurs. Meine Freundin interessiert sich für Musik. Abends setzen wir uns in die Küche.",
      passageGloss: {
        ru: "Утром я умываюсь и завтракаю. Я радуюсь занятию. Моя подруга интересуется музыкой. Вечером мы садимся на кухне.",
        en: "In the morning I wash and have breakfast. I am looking forward to the class. My friend is interested in music. In the evening we sit down in the kitchen.",
        es: "Por la mañana me lavo y desayuno. Me alegro por la clase. Mi amiga se interesa por la música. Por la tarde nos sentamos en la cocina.",
      },
      grammarTopic: "de-a2-reflexive",
      vocabTopic: "de-a2-feelings-body",
      mc: {
        question: "Чему человек радуется?",
        questionGloss: {
          en: "What is the person looking forward to?",
          es: "¿A qué se alegra la persona?",
          de: "Worauf freut sich die Person?",
        },
        options: ["Auf den Kurs", "Auf die Küche", "Auf das Frühstück", "Auf den Morgen"],
        answer: "Auf den Kurs",
        explanation: "«Ich freue mich auf den Kurs.»",
      },
      blank: {
        question: "Ich wasche ___.",
        questionGloss: {
          ru: "Я умываю ___.",
          en: "I wash ___.",
          es: "Me lavo ___.",
        },
        answer: "mich",
        acceptableAnswers: ["Mich"],
        explanation: "ich wasche mich.",
      },
    }),
    "de-ch18-subordinates": readingItems({
      passage:
        "Ich bleibe zu Hause, weil ich müde bin. Ich weiß, dass der Kurs morgen beginnt. Wenn es regnet, nehme ich den Bus. Ich versuche, früh zu schlafen.",
      passageGloss: {
        ru: "Я остаюсь дома, потому что устал. Я знаю, что занятие начнётся завтра. Если идёт дождь, я еду на автобусе. Я стараюсь рано лечь спать.",
        en: "I stay at home because I am tired. I know that the class starts tomorrow. If it rains, I take the bus. I try to sleep early.",
        es: "Me quedo en casa porque estoy cansado. Sé que la clase empieza mañana. Si llueve, tomo el autobús. Intento dormir temprano.",
      },
      grammarTopic: "de-a2-subordinates-zu",
      vocabTopic: "de-a2-reasons-plans",
      mc: {
        question: "Почему человек остаётся дома?",
        questionGloss: {
          en: "Why does the person stay at home?",
          es: "¿Por qué se queda la persona en casa?",
          de: "Warum bleibt die Person zu Hause?",
        },
        options: [
          "Weil sie müde ist",
          "Weil der Kurs beginnt",
          "Weil es regnet",
          "Weil der Bus fehlt",
        ],
        answer: "Weil sie müde ist",
        explanation: "«weil ich müde bin.»",
      },
      blank: {
        question: "Ich weiß, ___ der Kurs morgen beginnt.",
        questionGloss: {
          ru: "Я знаю, ___ занятие начнётся завтра.",
          en: "I know ___ the class starts tomorrow.",
          es: "Sé ___ la clase empieza mañana.",
        },
        answer: "dass",
        acceptableAnswers: ["Dass"],
        explanation: "«Ich weiß, dass der Kurs morgen beginnt.»",
      },
    }),
    "de-ch19-case-system": readingItems({
      passage:
        "Wegen des Regens bleibt der Kurs im Gebäude. Das ist das Büro des Chefs. Ich sehe den Lehrer im Flur und danke den Kollegen für die Hilfe.",
      passageGloss: {
        ru: "Из-за дождя занятие остаётся в здании. Это кабинет начальника. Я вижу учителя в коридоре и благодарю коллег за помощь.",
        en: "Because of the rain the class stays in the building. This is the boss's office. I see the teacher in the corridor and thank the colleagues for the help.",
        es: "Por la lluvia la clase se queda en el edificio. Este es el despacho del jefe. Veo al profesor en el pasillo y agradezco a los colegas la ayuda.",
      },
      grammarTopic: "de-b1-case-system",
      vocabTopic: "de-b1-education-work",
      mc: {
        question: "Почему занятие остаётся в здании?",
        questionGloss: {
          en: "Why does the class stay in the building?",
          es: "¿Por qué se queda la clase en el edificio?",
          de: "Warum bleibt der Kurs im Gebäude?",
        },
        options: [
          "Wegen des Regens",
          "Wegen des Chefs",
          "Wegen des Lehrers",
          "Wegen der Kollegen",
        ],
        answer: "Wegen des Regens",
        explanation: "«Wegen des Regens bleibt der Kurs im Gebäude.»",
      },
      blank: {
        question: "Das ist das Büro ___ Chefs.",
        questionGloss: {
          ru: "Это кабинет ___ начальника.",
          en: "This is the ___ boss's office.",
          es: "Este es el despacho ___ jefe.",
        },
        answer: "des",
        acceptableAnswers: ["Des"],
        explanation: "Генитив: das Büro des Chefs.",
      },
    }),
    "de-ch21-relative": readingItems({
      passage:
        "Der Mann, der nebenan wohnt, ist Arzt. Die Frau, der ich helfe, heißt Sara. Der Film, den wir sehen, ist lang. Das Buch, das auf dem Tisch liegt, gehört mir.",
      passageGloss: {
        ru: "Мужчина, который живёт рядом, — врач. Женщину, которой я помогаю, зовут Сара. Фильм, который мы смотрим, длинный. Книга, которая лежит на столе, моя.",
        en: "The man who lives next door is a doctor. The woman I am helping is called Sara. The film we are watching is long. The book that is on the table belongs to me.",
        es: "El hombre que vive al lado es médico. La mujer a la que ayudo se llama Sara. La película que vemos es larga. El libro que está sobre la mesa es mío.",
      },
      grammarTopic: "de-b1-relative-clauses",
      vocabTopic: "de-b1-people-profiles",
      mc: {
        question: "Кто врач?",
        questionGloss: {
          en: "Who is a doctor?",
          es: "¿Quién es médico?",
          de: "Wer ist Arzt?",
        },
        options: [
          "Der Mann, der nebenan wohnt",
          "Die Frau, der ich helfe",
          "Der Film",
          "Das Buch",
        ],
        answer: "Der Mann, der nebenan wohnt",
        explanation: "«Der Mann, der nebenan wohnt, ist Arzt.»",
      },
      blank: {
        question: "Der Film, ___ wir sehen, ist lang.",
        questionGloss: {
          ru: "Фильм, ___ мы смотрим, длинный.",
          en: "The film ___ we watch is long.",
          es: "La película ___ vemos es larga.",
        },
        answer: "den",
        acceptableAnswers: ["Den"],
        explanation: "sehen требует винительный den.",
      },
    }),
    "de-ch23-passive": readingItems({
      passage:
        "Das Haus wird gerade gebaut. Der Brief wurde gestern geschrieben. Hier wird Deutsch gesprochen. Die Tür ist schon geöffnet worden.",
      passageGloss: {
        ru: "Дом сейчас строят. Письмо написали вчера. Здесь говорят по-немецки. Дверь уже открыли.",
        en: "The house is being built. The letter was written yesterday. German is spoken here. The door has already been opened.",
        es: "La casa se está construyendo. La carta se escribió ayer. Aquí se habla alemán. La puerta ya ha sido abierta.",
      },
      grammarTopic: "de-b1-passive",
      vocabTopic: "de-b1-processes-news",
      mc: {
        question: "Что написали вчера?",
        questionGloss: {
          en: "What was written yesterday?",
          es: "¿Qué se escribió ayer?",
          de: "Was wurde gestern geschrieben?",
        },
        options: ["Der Brief", "Das Haus", "Die Tür", "Deutsch"],
        answer: "Der Brief",
        explanation: "«Der Brief wurde gestern geschrieben.»",
      },
      blank: {
        question: "Hier wird Deutsch ___.",
        questionGloss: {
          ru: "Здесь ___ по-немецки.",
          en: "German is ___ here.",
          es: "Aquí se ___ alemán.",
        },
        answer: "gesprochen",
        acceptableAnswers: ["Gesprochen"],
        explanation: "Пассив: wird gesprochen.",
      },
    }),
    "de-ch25-connectors": readingItems({
      passage:
        "Ich gehe spazieren, obwohl es regnet. Lea lernt viel, damit sie die Prüfung besteht. Während ich koche, hört Paul Musik. Ich rufe ihn an, bevor ich komme.",
      passageGloss: {
        ru: "Я иду гулять, хотя идёт дождь. Леа много учится, чтобы сдать экзамен. Пока я готовлю, Пауль слушает музыку. Я звоню ему, прежде чем прийти.",
        en: "I go for a walk even though it is raining. Lea studies a lot so that she passes the exam. While I cook, Paul listens to music. I call him before I come.",
        es: "Salgo a pasear aunque llueve. Lea estudia mucho para aprobar el examen. Mientras cocino, Paul escucha música. Lo llamo antes de llegar.",
      },
      grammarTopic: "de-b1-connectors-complex",
      vocabTopic: "de-b1-opinions-debate",
      mc: {
        question: "Зачем Леа много учится?",
        questionGloss: {
          en: "Why does Lea study a lot?",
          es: "¿Para qué estudia Lea mucho?",
          de: "Warum lernt Lea viel?",
        },
        options: [
          "Damit sie die Prüfung besteht",
          "Obwohl es regnet",
          "Weil Paul Musik hört",
          "Bevor ich koche",
        ],
        answer: "Damit sie die Prüfung besteht",
        explanation: "«damit sie die Prüfung besteht.»",
      },
      blank: {
        question: "Ich gehe spazieren, ___ es regnet.",
        questionGloss: {
          ru: "Я иду гулять, ___ идёт дождь.",
          en: "I go for a walk ___ it is raining.",
          es: "Salgo a pasear ___ llueve.",
        },
        answer: "obwohl",
        acceptableAnswers: ["Obwohl"],
        explanation: "Уступка: obwohl es regnet.",
      },
    }),
    "de-ch28-konjunktiv-reported": readingItems({
      passage:
        "Der Reporter sagt, der Minister sei im Ausland. Eine Sprecherin meint, sie habe keine neuen Zahlen. Die Zeitung schreibt, das Treffen werde morgen stattfinden. Man sagt, die Lage sei ruhig.",
      passageGloss: {
        ru: "Репортёр говорит, что министр за границей. Представительница считает, что новых цифр нет. Газета пишет, что встреча состоится завтра. Говорят, что ситуация спокойная.",
        en: "The reporter says the minister is abroad. A spokesperson thinks she has no new figures. The newspaper writes that the meeting will take place tomorrow. People say the situation is calm.",
        es: "El reportero dice que el ministro está en el extranjero. Una portavoz cree que no hay cifras nuevas. El periódico escribe que la reunión será mañana. Se dice que la situación está tranquila.",
      },
      grammarTopic: "de-b2-konjunktiv-i-ii",
      vocabTopic: "de-b2-media-claims",
      mc: {
        question: "Где, по словам репортёра, министр?",
        questionGloss: {
          en: "Where is the minister, according to the reporter?",
          es: "¿Dónde está el ministro según el reportero?",
          de: "Wo sei der Minister laut Reporter?",
        },
        options: ["Im Ausland", "In der Redaktion", "Beim Treffen", "Bei der Sprecherin"],
        answer: "Im Ausland",
        explanation: "«der Minister sei im Ausland.»",
      },
      blank: {
        question: "Man sagt, die Lage ___ ruhig.",
        questionGloss: {
          ru: "Говорят, ситуация ___ спокойная.",
          en: "People say the situation ___ calm.",
          es: "Se dice que la situación ___ tranquila.",
        },
        answer: "sei",
        acceptableAnswers: ["Sei"],
        explanation: "Konjunktiv I: die Lage sei ruhig.",
      },
    }),
    "de-ch30-nominalization": readingItems({
      passage:
        "Nach der Prüfung des Antrags folgt die Entscheidung. Wegen der Änderung des Plans beginnt die Durchführung später. Die Lösung des Problems steht im Bericht. Die Verbesserung der Daten braucht Zeit.",
      passageGloss: {
        ru: "После проверки заявки следует решение. Из-за изменения плана проведение начнётся позже. Решение проблемы указано в отчёте. Улучшение данных требует времени.",
        en: "After the review of the application comes the decision. Because of the change to the plan, implementation starts later. The solution to the problem is in the report. Improving the data takes time.",
        es: "Tras la revisión de la solicitud llega la decisión. Por el cambio del plan, la ejecución empieza más tarde. La solución del problema está en el informe. Mejorar los datos lleva tiempo.",
      },
      grammarTopic: "de-b2-nominalization",
      vocabTopic: "de-b2-formal-nouns",
      mc: {
        question: "Что следует за проверкой заявки?",
        questionGloss: {
          en: "What follows the review of the application?",
          es: "¿Qué sigue a la revisión de la solicitud?",
          de: "Was folgt auf die Prüfung des Antrags?",
        },
        options: [
          "Die Entscheidung",
          "Die Änderung des Plans",
          "Die Verbesserung der Daten",
          "Ein leerer Bericht",
        ],
        answer: "Die Entscheidung",
        explanation: "«Nach der Prüfung des Antrags folgt die Entscheidung.»",
      },
      blank: {
        question: "Wegen der ___ des Plans beginnt die Durchführung später.",
        questionGloss: {
          ru: "Из-за ___ плана проведение начнётся позже.",
          en: "Because of the ___ of the plan, implementation starts later.",
          es: "Por la ___ del plan, la ejecución empieza más tarde.",
        },
        answer: "Änderung",
        explanation: "«Wegen der Änderung des Plans.»",
      },
    }),
    "de-ch34-particles-idioms": readingItems({
      passage:
        "Komm mal her, das ist doch ganz einfach. Ich drücke dir die Daumen für die Prüfung. Das ist eben so, sagt mein Bruder. Und er hat den Nagel auf den Kopf getroffen.",
      passageGloss: {
        ru: "Подойди-ка, это же совсем просто. Я держу за тебя кулаки перед экзаменом. Так уж оно и есть, говорит мой брат. И он попал в самую точку.",
        en: "Come here a moment, this is obviously quite simple. I am keeping my fingers crossed for your exam. That is just how it is, my brother says. And he hit the nail on the head.",
        es: "Ven un momento, esto es realmente muy fácil. Te cruzo los dedos para el examen. Así son las cosas, dice mi hermano. Y dio en el clavo.",
      },
      grammarTopic: "de-c1-particles-idioms",
      vocabTopic: "de-c1-idioms-collocations",
      mc: {
        question: "Что человек «держит»?",
        questionGloss: {
          en: "What does the person press?",
          es: "¿Qué aprieta la persona?",
          de: "Was drückt die Person?",
        },
        options: ["Die Daumen", "Den Nagel", "Den Kopf", "Die Prüfung"],
        answer: "Die Daumen",
        explanation: "«Ich drücke dir die Daumen.»",
      },
      blank: {
        question: "Komm ___ her.",
        questionGloss: {
          ru: "Подойди ___ сюда.",
          en: "Come ___ here.",
          es: "Ven ___ aquí.",
        },
        answer: "mal",
        acceptableAnswers: ["Mal"],
        explanation: "mal смягчает императив: Komm mal her.",
      },
    }),
    "de-ch36-text-pragmatics": readingItems({
      passage:
        "Im Seminar sagt jemand: Es zieht. Niemand fragt nach dem Wetter; die Bitte ist klar. Nicht der Preis ist das Problem, sondern die Frist. Nach der Entschuldigung sagt die Leiterin nur: Schon gut.",
      passageGloss: {
        ru: "На семинаре кто-то говорит: дует. Никто не спрашивает о погоде; просьба ясна. Проблема не в цене, а в сроке. После извинения руководительница говорит только: ладно, хватит.",
        en: "In the seminar someone says: there is a draught. Nobody asks about the weather; the request is clear. The problem is not the price, but the deadline. After the apology the chair only says: all right, enough.",
        es: "En el seminario alguien dice: hay corriente. Nadie pregunta por el tiempo; la petición es clara. El problema no es el precio, sino el plazo. Tras la disculpa la directora solo dice: ya está bien.",
      },
      grammarTopic: "de-c1-text-pragmatics",
      vocabTopic: "de-c1-discourse-pragmatics",
      mc: {
        question: "В чём настоящая проблема?",
        questionGloss: {
          en: "What is the actual problem?",
          es: "¿Cuál es el problema real?",
          de: "Was ist das eigentliche Problem?",
        },
        options: ["Die Frist", "Der Preis", "Das Wetter", "Die Entschuldigung"],
        answer: "Die Frist",
        explanation: "«Nicht der Preis ist das Problem, sondern die Frist.»",
      },
      blank: {
        question: "Nicht der Preis ist das Problem, ___ die Frist.",
        questionGloss: {
          ru: "Не цена проблема, ___ срок.",
          en: "The price is not the problem, ___ the deadline.",
          es: "El precio no es el problema, ___ el plazo.",
        },
        answer: "sondern",
        acceptableAnswers: ["Sondern"],
        explanation: "Контраст: nicht …, sondern …",
      },
    }),
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
