import type { StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

const g9 = "ru-a2-past-tense";
const v9 = "ru-a2-yesterday";
const g10 = "ru-a2-future";
const v10 = "ru-a2-plans";
const g11 = "ru-a2-genitive";
const v11 = "ru-a2-quantity";
const g12 = "ru-a2-dative";
const v12 = "ru-a2-people";
const g13 = "ru-a2-instrumental";
const v13 = "ru-a2-professions";
const g14 = "ru-a2-aspect-intro";
const v14 = "ru-a2-aspect-pairs";
const g15 = "ru-a2-motion-basic";
const v15 = "ru-a2-transport";
const g16 = "ru-a2-genitive";
const v16 = "ru-a2-services";

/** A2 practice for chapters 9–16 (past tense → dorm and services). */
export const RUSSIAN_A2_EXERCISES: Record<string, Draft[]> = {
  "ru-ch9-past-tense": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Она ___ в библиотеке.", instruction: "Прошедшее время", options: ["был", "была", "было", "были"], answer: "была", explanation: "Она — женский род: была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Вчера вечером мы ___ в кафе.", instruction: "Прошедшее время", options: ["был", "была", "было", "были"], answer: "были", explanation: "Мы — множественное число: были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Утром окно ___ закрыто.", instruction: "Прошедшее время", options: ["был", "была", "было", "были"], answer: "было", explanation: "Окно — средний род: было.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Студент Павел вчера ___ новый текст.", instruction: "Читать, прошедшее", options: ["читал", "читала", "читали", "читаю"], answer: "читал", explanation: "Павел — мужской род: читал.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Сосед по комнате вчера ___ дома.", instruction: "Быть, прошедшее", options: ["был", "была", "было", "были"], answer: "был", explanation: "Сосед — мужской род: был.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Вчера студенты ___ тест.", instruction: "Сдать, прошедшее", options: ["сдал", "сдала", "сдали", "сдают"], answer: "сдали", explanation: "Студенты — множественное число: сдали.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Вчера они ___ упражнения в аудитории.", instruction: "Писать, прошедшее", options: ["писал", "писала", "писали", "пишут"], answer: "писали", explanation: "Они — множественное число: писали.", grammarTopic: g9, vocabTopic: v9 },
    { type: "multiple_choice", question: "Мария вчера ___ задание в комнате.", instruction: "Делать, прошедшее", options: ["делал", "делала", "делали", "делает"], answer: "делала", explanation: "Мария — женский род: делала.", grammarTopic: g9, vocabTopic: v9 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Вчера он ___ дома.", instruction: "Быть, мужской род", answer: "был", explanation: "Он → был.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Вчера Мария ___ в музее.", instruction: "Быть, женский род", answer: "была", explanation: "Мария → была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Мы ___ в кафе после занятия.", instruction: "Быть, множественное число", answer: "были", explanation: "Мы → были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Новое задание ___ на столе.", instruction: "Быть, средний род", answer: "было", explanation: "Задание → было.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Я ___ (читать) этот текст час.", instruction: "Прошедшее; род говорящего", answer: "читал", acceptableAnswers: ["читала"], explanation: "Я → читал или читала.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Они не ___ вопрос на лекции.", instruction: "Понять, множественное число", answer: "поняли", explanation: "Они → поняли.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Вчера студенты ___ текст.", instruction: "Читать, множественное число", answer: "читали", explanation: "Студенты читали текст.", grammarTopic: g9, vocabTopic: v9 },
    { type: "fill_blank", question: "Омар вчера ___ на лекцию.", instruction: "Опоздать, мужской род", answer: "опоздал", explanation: "Омар → опоздал.", grammarTopic: g9, vocabTopic: v9 },

    // --- translation ---
    { type: "translation", question: "We were at the café.", instruction: "Переведите на русский", answer: "Мы были в кафе", acceptableAnswers: ["В кафе мы были"], explanation: "Мы → были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "Yesterday she was at the university.", instruction: "Переведите на русский", answer: "Вчера она была в университете", acceptableAnswers: ["Она вчера была в университете"], explanation: "Она → была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "Yesterday he was reading a new text (process, not finished).", instruction: "Переведите на русский (читать)", answer: "Вчера он читал новый текст", acceptableAnswers: ["Он вчера читал новый текст"], explanation: "Процесс, не до конца: читал.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "In the evening I was at home. (female)", instruction: "Переведите на русский", answer: "Вечером я была дома", acceptableAnswers: ["Я вечером была дома", "Я была дома вечером"], explanation: "Женский род: была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "They did not understand the question.", instruction: "Переведите на русский", answer: "Они не поняли вопрос", explanation: "Они → поняли.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "Yesterday the students handed in the work.", instruction: "Переведите на русский", answer: "Вчера студенты сдали работу", acceptableAnswers: ["Студенты вчера сдали работу"], explanation: "Студенты → сдали.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "The window was in the room.", instruction: "Переведите на русский", answer: "Окно было в комнате", explanation: "Окно → было в комнате.", grammarTopic: g9, vocabTopic: v9 },
    { type: "translation", question: "Anna was late for the lecture yesterday.", instruction: "Переведите на русский", answer: "Вчера Анна опоздала на лекцию", acceptableAnswers: ["Анна вчера опоздала на лекцию"], explanation: "Анна → опоздала.", grammarTopic: g9, vocabTopic: v9 },

    // --- error_correction ---
    { type: "error_correction", question: "Она был в аудитории.", instruction: "Исправьте род", answer: "Она была в аудитории.", acceptableAnswers: ["Она была в аудитории"], explanation: "Она → была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Мы была в библиотеке вчера.", instruction: "Исправьте число", answer: "Мы были в библиотеке вчера.", acceptableAnswers: ["Мы были в библиотеке вчера"], explanation: "Мы → были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Павел вчера читала текст.", instruction: "Исправьте род", answer: "Павел вчера читал текст.", acceptableAnswers: ["Павел вчера читал текст"], explanation: "Павел → читал.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Они был дома вечером.", instruction: "Исправьте число", answer: "Они были дома вечером.", acceptableAnswers: ["Они были дома вечером"], explanation: "Они → были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Окно была закрыто.", instruction: "Исправьте род", answer: "Окно было закрыто.", acceptableAnswers: ["Окно было закрыто"], explanation: "Окно → было.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Мария не понял вопрос.", instruction: "Исправьте род", answer: "Мария не поняла вопрос.", acceptableAnswers: ["Мария не поняла вопрос"], explanation: "Мария → поняла.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Студенты сдала тест.", instruction: "Исправьте число", answer: "Студенты сдали тест.", acceptableAnswers: ["Студенты сдали тест"], explanation: "Студенты → сдали.", grammarTopic: g9, vocabTopic: v9 },
    { type: "error_correction", question: "Вчера он есть в аудитории.", instruction: "Исправьте время", answer: "Вчера он был в аудитории.", acceptableAnswers: ["Вчера он был в аудитории"], explanation: "Вчера → был, без «есть».", grammarTopic: g9, vocabTopic: v9 },

    // --- sentence_building ---
    { type: "sentence_building", question: "кафе / в / был / сосед / Вчера", instruction: "Соберите фразу", options: ["Вчера", "сосед", "был", "в", "кафе"], answer: "Вчера сосед был в кафе", acceptableAnswers: ["Сосед вчера был в кафе", "Сосед был в кафе вчера"], explanation: "Сосед → был.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "аудитории / в / была / Ирина", instruction: "Соберите фразу", options: ["Ирина", "была", "в", "аудитории"], answer: "Ирина была в аудитории", explanation: "Ирина → была.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "парке / в / были / они / Вчера", instruction: "Соберите фразу", options: ["Вчера", "они", "были", "в", "парке"], answer: "Вчера они были в парке", acceptableAnswers: ["Они вчера были в парке"], explanation: "Они → были.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "письмо / читала / вчера / Мария", instruction: "Соберите фразу", options: ["Мария", "вчера", "читала", "письмо"], answer: "Мария вчера читала письмо", acceptableAnswers: ["Вчера Мария читала письмо"], explanation: "Мария → читала.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "вопрос / не / поняли / Мы", instruction: "Соберите фразу", options: ["Мы", "не", "поняли", "вопрос"], answer: "Мы не поняли вопрос", explanation: "Мы → поняли.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "тест / сдали / вчера / Студенты", instruction: "Соберите фразу", options: ["Студенты", "вчера", "сдали", "тест"], answer: "Студенты вчера сдали тест", acceptableAnswers: ["Вчера студенты сдали тест"], explanation: "Студенты → сдали.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "открыто / было / Окно", instruction: "Соберите фразу", options: ["Окно", "было", "открыто"], answer: "Окно было открыто", explanation: "Окно → было.", grammarTopic: g9, vocabTopic: v9 },
    { type: "sentence_building", question: "лекцию / на / опоздала / Анна", instruction: "Соберите фразу", options: ["Анна", "опоздала", "на", "лекцию"], answer: "Анна опоздала на лекцию", explanation: "Анна → опоздала.", grammarTopic: g9, vocabTopic: v9 },
  ],

  "ru-ch10-future": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Я ___ читать вечером.", instruction: "Составное будущее", options: ["буду", "будешь", "будет", "будут"], answer: "буду", explanation: "Я буду + инфинитив.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "Завтра она ___ текст до конца.", instruction: "Результат, один раз", options: ["будет читать", "прочитает", "читала", "читает"], answer: "прочитает", explanation: "Результат завтра → прочитает.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "В следующем году мы ___ жить в общежитии.", instruction: "Составное будущее", options: ["буду", "будешь", "будем", "будут"], answer: "будем", explanation: "Мы → будем.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "Ты ___ читать этот текст вечером?", instruction: "Составное будущее", options: ["буду", "будешь", "будет", "будете"], answer: "будешь", explanation: "Ты → будешь.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "Они ___ работать завтра.", instruction: "Составное будущее", options: ["будет", "будем", "будете", "будут"], answer: "будут", explanation: "Они → будут.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "Завтра брат точно ___ из другого города.", instruction: "Результат: прибытие", options: ["будет ехать", "приедет", "ехал", "ездит"], answer: "приедет", explanation: "Завтра, одно прибытие: приедет. «Ездит» — привычка, «будет ехать» — процесс, «ехал» — прошлое.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "Завтра мы ___ упражнение до конца.", instruction: "Результат, один раз", options: ["будем делать", "сделаем", "делали", "делаем"], answer: "сделаем", explanation: "Результат → сделаем.", grammarTopic: g10, vocabTopic: v10 },
    { type: "multiple_choice", question: "По плану завтра я ___ в музее.", instruction: "Будущее глагола «быть»", options: ["буду", "будешь", "будет", "будут"], answer: "буду", explanation: "Я буду в музее.", grammarTopic: g10, vocabTopic: v10 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Мы ___ жить в общежитии.", instruction: "Быть, мы", answer: "будем", explanation: "Мы → будем.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Завтра он ___ к нам в город.", instruction: "Приехать, один приезд", answer: "приедет", explanation: "Завтра, один приезд: приедет.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Я ___ готовиться к тесту вечером.", instruction: "Быть, я + инфинитив", answer: "буду", explanation: "Я буду готовиться.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Завтра я ___ письмо.", instruction: "Написать, результат", answer: "напишу", explanation: "Результат → напишу.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Вы ___ писать тест завтра утром?", instruction: "Быть, вы", answer: "будете", explanation: "Вы → будете.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Скоро ___ каникулы.", instruction: "Быть, множественное число", answer: "будут", explanation: "Каникулы → будут.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "После пары я ___ в библиотеку.", instruction: "Пойти, один раз", answer: "пойду", acceptableAnswers: ["пойду"], explanation: "Один раз → пойду.", grammarTopic: g10, vocabTopic: v10 },
    { type: "fill_blank", question: "Они ___ билет завтра.", instruction: "Купить, результат", answer: "купят", explanation: "Они купят билет.", grammarTopic: g10, vocabTopic: v10 },

    // --- translation ---
    { type: "translation", question: "They will work tomorrow.", instruction: "Переведите на русский", answer: "Они будут работать завтра", acceptableAnswers: ["Завтра они будут работать"], explanation: "Они будут + инфинитив.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "I will be reading in the evening (process).", instruction: "Переведите на русский (процесс)", answer: "Я буду читать вечером", acceptableAnswers: ["Вечером я буду читать", "Я вечером буду читать"], explanation: "Процесс → буду читать.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "She will arrive on Monday.", instruction: "Переведите на русский", answer: "Она приедет в понедельник", acceptableAnswers: ["В понедельник она приедет"], explanation: "Приедет = результат.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "We will live in the dormitory.", instruction: "Переведите на русский", answer: "Мы будем жить в общежитии", explanation: "Мы будем + инфинитив.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "Tomorrow I will write the essay. (result)", instruction: "Переведите на русский", answer: "Завтра я напишу сочинение", acceptableAnswers: ["Я завтра напишу сочинение"], explanation: "Результат → напишу.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "Will you call later? (to a friend)", instruction: "Переведите на русский (результат)", answer: "Ты позвонишь потом?", acceptableAnswers: ["Ты позвонишь потом", "Ты позвонишь позже?", "Ты потом позвонишь?", "Позвонишь позже?"], explanation: "Потом или позже + позвонишь.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "There will be a test soon.", instruction: "Переведите на русский", answer: "Скоро будет тест", explanation: "Скоро будет.", grammarTopic: g10, vocabTopic: v10 },
    { type: "translation", question: "Then I will go to the library.", instruction: "Переведите на русский (один раз)", answer: "Потом я пойду в библиотеку", acceptableAnswers: ["Я потом пойду в библиотеку"], explanation: "Потом + пойду.", grammarTopic: g10, vocabTopic: v10 },

    // --- error_correction ---
    { type: "error_correction", question: "Я будет готовиться вечером.", instruction: "Исправьте форму «быть»", answer: "Я буду готовиться вечером.", acceptableAnswers: ["Я буду готовиться вечером"], explanation: "Я → буду.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Вы буду жить в общежитии.", instruction: "Исправьте форму «быть»", answer: "Вы будете жить в общежитии.", acceptableAnswers: ["Вы будете жить в общежитии"], explanation: "Вы → будете.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Завтра она буду в университете.", instruction: "Исправьте форму «быть»", answer: "Завтра она будет в университете.", acceptableAnswers: ["Завтра она будет в университете"], explanation: "Она → будет.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Друзья будет жить в общежитии.", instruction: "Исправьте форму «быть»", answer: "Друзья будут жить в общежитии.", acceptableAnswers: ["Друзья будут жить в общежитии"], explanation: "Друзья → будут.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Завтра я прочитал текст.", instruction: "Сохраните совершенный вид, исправьте время", answer: "Завтра я прочитаю текст.", acceptableAnswers: ["Завтра я прочитаю текст"], explanation: "Завтра + результат → прочитаю.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Ты буду звонить вечером?", instruction: "Исправьте форму «быть»", answer: "Ты будешь звонить вечером?", acceptableAnswers: ["Ты будешь звонить вечером"], explanation: "Ты → будешь.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Скоро будут экзамен.", instruction: "Исправьте число", answer: "Скоро будет экзамен.", acceptableAnswers: ["Скоро будет экзамен"], explanation: "Экзамен → будет.", grammarTopic: g10, vocabTopic: v10 },
    { type: "error_correction", question: "Он будут читать план.", instruction: "Исправьте форму «быть»", answer: "Он будет читать план.", acceptableAnswers: ["Он будет читать план"], explanation: "Он → будет.", grammarTopic: g10, vocabTopic: v10 },

    // --- sentence_building ---
    { type: "sentence_building", question: "план / читать / буду / Я", instruction: "Соберите фразу", options: ["Я", "буду", "читать", "план"], answer: "Я буду читать план", explanation: "Я буду + инфинитив.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "дома / будут / они / Завтра", instruction: "Соберите фразу", options: ["Завтра", "они", "будут", "дома"], answer: "Завтра они будут дома", acceptableAnswers: ["Они завтра будут дома"], explanation: "Они → будут.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "музее / в / будем / мы / Скоро", instruction: "Соберите фразу", options: ["Скоро", "мы", "будем", "в", "музее"], answer: "Скоро мы будем в музее", explanation: "Мы → будем.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "субботу / в / приедет / Брат", instruction: "Соберите фразу", options: ["Брат", "приедет", "в", "субботу"], answer: "Брат приедет в субботу", explanation: "Приедет = результат.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "письмо / напишу / Вечером / я", instruction: "Соберите фразу", options: ["Вечером", "я", "напишу", "письмо"], answer: "Вечером я напишу письмо", acceptableAnswers: ["Я вечером напишу письмо"], explanation: "Результат → напишу.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "консультация / будет / Скоро", instruction: "Соберите фразу", options: ["Скоро", "будет", "консультация"], answer: "Скоро будет консультация", explanation: "Скоро будет.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "общежитие / в / пойду / Потом / я", instruction: "Соберите фразу", options: ["Потом", "я", "пойду", "в", "общежитие"], answer: "Потом я пойду в общежитие", explanation: "Потом + пойду.", grammarTopic: g10, vocabTopic: v10 },
    { type: "sentence_building", question: "билеты / купим / мы / Завтра", instruction: "Соберите фразу", options: ["Завтра", "мы", "купим", "билеты"], answer: "Завтра мы купим билеты", acceptableAnswers: ["Мы завтра купим билеты"], explanation: "Результат → купим.", grammarTopic: g10, vocabTopic: v10 },
  ],

  "ru-ch11-genitive": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Перед тестом нет ___.", instruction: "Родительный падеж", options: ["время", "времени", "временем", "времена"], answer: "времени", explanation: "Нет + родительный: времени.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "В сумке много ___.", instruction: "Много + родительный", options: ["книг", "книги", "книгам", "книгами"], answer: "книг", explanation: "Много книг.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "Это сумка ___.", instruction: "Чья? Принадлежность", options: ["друг", "друга", "другу", "другом"], answer: "друга", explanation: "Сумка друга — родительный.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "У студента мало ___.", instruction: "Мало + родительный", options: ["деньги", "денег", "деньгам", "деньгами"], answer: "денег", explanation: "Мало денег.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "На столе нет ___.", instruction: "Нет + родительный", options: ["словаря", "словарь", "словарю", "словарём"], answer: "словаря", explanation: "Нет словаря.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "Это аудитория ___.", instruction: "Чья? Принадлежность", options: ["преподаватель", "преподавателя", "преподавателю", "преподавателем"], answer: "преподавателя", explanation: "Аудитория преподавателя.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "Сколько ___ в этом тексте?", instruction: "Сколько + родительный", options: ["слов", "слова", "словам", "словами"], answer: "слов", explanation: "Сколько слов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "multiple_choice", question: "Принесите, пожалуйста, стакан ___.", instruction: "Мера + родительный", options: ["воды", "вода", "воде", "водой"], answer: "воды", explanation: "Стакан воды.", grammarTopic: g11, vocabTopic: v11 },

    // --- fill_blank ---
    { type: "fill_blank", question: "На лекции много ___.", instruction: "Вопрос, родительный мн. ч.", answer: "вопросов", explanation: "Много вопросов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "У меня нет ___.", instruction: "Ручка, родительный", answer: "ручки", explanation: "Нет ручки.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "До экзамена мало ___.", instruction: "День, родительный мн. ч.", answer: "дней", explanation: "Мало дней.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "В комнате нет ___.", instruction: "Окно, родительный", answer: "окна", explanation: "Нет окна.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "Это тетрадь ___.", instruction: "Студент, принадлежность", answer: "студента", explanation: "Тетрадь студента.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "Завтра нет ___.", instruction: "Занятие, родительный", answer: "занятия", explanation: "Нет занятия.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "В группе много ___.", instruction: "Студент, родительный мн. ч.", answer: "студентов", explanation: "Много студентов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "fill_blank", question: "В стакане мало ___.", instruction: "Вода, родительный", answer: "воды", explanation: "Мало воды.", grammarTopic: g11, vocabTopic: v11 },

    // --- translation ---
    { type: "translation", question: "There is no ticket.", instruction: "Переведите на русский", answer: "Нет билета", explanation: "Нет + родительный: билета.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "I have no time today.", instruction: "Переведите на русский", answer: "Сегодня у меня нет времени", acceptableAnswers: ["У меня сегодня нет времени", "У меня нет времени сегодня"], explanation: "Нет времени.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "How many students are in the group?", instruction: "Переведите на русский", answer: "Сколько студентов в группе?", acceptableAnswers: ["Сколько студентов в группе", "Сколько в группе студентов?"], explanation: "Сколько студентов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "There is little time before the exam.", instruction: "Переведите на русский", answer: "До экзамена мало времени", acceptableAnswers: ["Мало времени до экзамена"], explanation: "Мало времени.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "This is Pavel's book.", instruction: "Переведите на русский", answer: "Это книга Павла", explanation: "Книга Павла — родительный.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "There is no book.", instruction: "Переведите на русский", answer: "Нет книги", explanation: "Нет книги.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "A glass of water.", instruction: "Переведите на русский", answer: "Стакан воды", explanation: "Стакан воды.", grammarTopic: g11, vocabTopic: v11 },
    { type: "translation", question: "I do not have a dictionary.", instruction: "Переведите на русский", answer: "У меня нет словаря", explanation: "Нет словаря.", grammarTopic: g11, vocabTopic: v11 },

    // --- error_correction ---
    { type: "error_correction", question: "На столе нет книга.", instruction: "Исправьте падеж", answer: "На столе нет книги.", acceptableAnswers: ["На столе нет книги"], explanation: "Нет книги.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "В аудитории много студенты.", instruction: "Исправьте падеж", answer: "В аудитории много студентов.", acceptableAnswers: ["В аудитории много студентов"], explanation: "Много студентов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "У меня нет время сегодня.", instruction: "Исправьте падеж", answer: "У меня нет времени сегодня.", acceptableAnswers: ["У меня нет времени сегодня"], explanation: "Нет времени.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "У нас мало деньги на билет.", instruction: "Исправьте падеж", answer: "У нас мало денег на билет.", acceptableAnswers: ["У нас мало денег на билет"], explanation: "Мало денег.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "Где сумка друг?", instruction: "Исправьте падеж", answer: "Где сумка друга?", acceptableAnswers: ["Где сумка друга"], explanation: "Сумка друга.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "В аудитории нет окно.", instruction: "Исправьте падеж", answer: "В аудитории нет окна.", acceptableAnswers: ["В аудитории нет окна"], explanation: "Нет окна.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "Дайте стакан вода.", instruction: "Исправьте падеж", answer: "Дайте стакан воды.", acceptableAnswers: ["Дайте стакан воды"], explanation: "Стакан воды.", grammarTopic: g11, vocabTopic: v11 },
    { type: "error_correction", question: "Сегодня нет аудитория.", instruction: "Исправьте падеж", answer: "Сегодня нет аудитории.", acceptableAnswers: ["Сегодня нет аудитории"], explanation: "Нет аудитории.", grammarTopic: g11, vocabTopic: v11 },

    // --- sentence_building ---
    { type: "sentence_building", question: "билета / нет / У / меня", instruction: "Соберите фразу", options: ["У", "меня", "нет", "билета"], answer: "У меня нет билета", explanation: "Нет билета.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "студентов / много / лекции / На", instruction: "Соберите фразу", options: ["На", "лекции", "много", "студентов"], answer: "На лекции много студентов", explanation: "Много студентов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "денег / мало / Анны / У", instruction: "Соберите фразу", options: ["У", "Анны", "мало", "денег"], answer: "У Анны мало денег", explanation: "Мало денег.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "чая / горячего / Стакан", instruction: "Соберите фразу", options: ["Стакан", "горячего", "чая"], answer: "Стакан горячего чая", acceptableAnswers: ["Стакан чая"], explanation: "Мера + родительный: стакан (горячего) чая.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "Нет / словаря / этого", instruction: "Соберите фразу", options: ["Нет", "этого", "словаря"], answer: "Нет этого словаря", acceptableAnswers: ["Нет словаря"], explanation: "Нет + родительный: нет (этого) словаря.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "книг / много / аудитории / В", instruction: "Соберите фразу", options: ["В", "аудитории", "много", "книг"], answer: "В аудитории много книг", explanation: "Много книг.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "аудитории / в / студентов / Сколько", instruction: "Соберите фразу", options: ["Сколько", "студентов", "в", "аудитории"], answer: "Сколько студентов в аудитории", explanation: "Сколько студентов.", grammarTopic: g11, vocabTopic: v11 },
    { type: "sentence_building", question: "чая / нет / кафе / В", instruction: "Соберите фразу", options: ["В", "кафе", "нет", "чая"], answer: "В кафе нет чая", explanation: "Нет чая.", grammarTopic: g11, vocabTopic: v11 },
  ],

  "ru-ch12-dative": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "___ нравится русский язык.", instruction: "Дательный падеж", options: ["Я", "Мне", "Меня", "Мной"], answer: "Мне", explanation: "Мне нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "Преподаватель объясняет правило ___.", instruction: "Кому?", options: ["студенты", "студентов", "студентам", "студентами"], answer: "студентам", explanation: "Объяснять кому? → студентам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "Вечером я звоню ___ из общежития.", instruction: "Звонить кому?", options: ["друг", "друга", "другу", "другом"], answer: "другу", explanation: "Звонить другу.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "___ нравятся новые курсы.", instruction: "Дательный падеж", options: ["Она", "Её", "Ей", "Ею"], answer: "Ей", explanation: "Ей нравятся курсы.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "Помогите ___, пожалуйста, с текстом.", instruction: "Помогать кому?", options: ["я", "меня", "мне", "мной"], answer: "мне", explanation: "Помогите мне.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "Анна пишет письмо ___.", instruction: "Писать кому?", options: ["сестра", "сестру", "сестре", "сестрой"], answer: "сестре", explanation: "Писать сестре.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "___ не нравится новое общежитие.", instruction: "Дательный падеж", options: ["Они", "Их", "Им", "Ими"], answer: "Им", explanation: "Им не нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "multiple_choice", question: "Дайте, пожалуйста, словарь ___.", instruction: "Дать кому?", options: ["студент", "студента", "студенту", "студентом"], answer: "студенту", explanation: "Дайте студенту.", grammarTopic: g12, vocabTopic: v12 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Мария звонит ___ каждый вечер.", instruction: "Мама, дательный", answer: "маме", explanation: "Звонить маме.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "___ нравится наша группа.", instruction: "Он, дательный", answer: "Ему", acceptableAnswers: ["ему"], explanation: "Ему нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "Преподаватель даёт ___ новое задание.", instruction: "Мы, дательный", answer: "нам", explanation: "Даёт нам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "Сегодня я пишу ___.", instruction: "Преподаватель, дательный", answer: "преподавателю", explanation: "Писать преподавателю.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "Я часто помогаю ___.", instruction: "Сестра, дательный", answer: "сестре", explanation: "Помогать сестре.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "Мы пишем ___ из общежития.", instruction: "Подруга, дательный", answer: "подруге", explanation: "Писать подруге.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "Объясните ___, пожалуйста, это слово.", instruction: "Мы, дательный", answer: "нам", explanation: "Объясните нам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "fill_blank", question: "___ нравится новая столовая.", instruction: "Анна, дательный", answer: "Анне", explanation: "Анне нравится.", grammarTopic: g12, vocabTopic: v12 },

    // --- translation ---
    { type: "translation", question: "Help me, please.", instruction: "Переведите на русский", answer: "Помогите мне, пожалуйста", acceptableAnswers: ["Помогите мне пожалуйста"], explanation: "Помогать мне.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "I am calling a friend.", instruction: "Переведите на русский", answer: "Я звоню другу", explanation: "Звонить другу.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "I like the Russian language.", instruction: "Переведите на русский", answer: "Мне нравится русский язык", explanation: "Мне нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "She likes these courses.", instruction: "Переведите на русский", answer: "Ей нравятся эти курсы", explanation: "Ей нравятся курсы.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "Give me the menu, please.", instruction: "Переведите на русский", answer: "Дайте мне меню, пожалуйста", acceptableAnswers: ["Дайте мне меню пожалуйста"], explanation: "Дайте мне.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "The teacher explains the rule to the students.", instruction: "Переведите на русский", answer: "Преподаватель объясняет правило студентам", acceptableAnswers: ["Преподаватель объясняет студентам правило"], explanation: "Объяснять студентам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "Anna is writing to her sister.", instruction: "Переведите на русский", answer: "Анна пишет сестре", acceptableAnswers: ["Анна пишет своей сестре"], explanation: "Писать сестре.", grammarTopic: g12, vocabTopic: v12 },
    { type: "translation", question: "They like the city.", instruction: "Переведите на русский", answer: "Им нравится город", explanation: "Им нравится.", grammarTopic: g12, vocabTopic: v12 },

    // --- error_correction ---
    { type: "error_correction", question: "Я нравится новая столовая.", instruction: "Исправьте падеж", answer: "Мне нравится новая столовая.", acceptableAnswers: ["Мне нравится новая столовая"], explanation: "Мне нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Я звоню друг.", instruction: "Исправьте падеж", answer: "Я звоню другу.", acceptableAnswers: ["Я звоню другу"], explanation: "Звонить другу.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Её нравится грамматика.", instruction: "Исправьте местоимение", answer: "Ей нравится грамматика.", acceptableAnswers: ["Ей нравится грамматика"], explanation: "Ей нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Помогите его, пожалуйста.", instruction: "Исправьте падеж", answer: "Помогите ему, пожалуйста.", acceptableAnswers: ["Помогите ему, пожалуйста"], explanation: "Помогать ему, не «его».", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Мы нравятся эти курсы.", instruction: "Исправьте падеж", answer: "Нам нравятся эти курсы.", acceptableAnswers: ["Нам нравятся эти курсы"], explanation: "Нам нравятся.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Преподаватель объясняет студенты.", instruction: "Исправьте падеж", answer: "Преподаватель объясняет студентам.", acceptableAnswers: ["Преподаватель объясняет студентам"], explanation: "Объяснять студентам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Мы пишем сестра.", instruction: "Исправьте падеж", answer: "Мы пишем сестре.", acceptableAnswers: ["Мы пишем сестре"], explanation: "Писать сестре.", grammarTopic: g12, vocabTopic: v12 },
    { type: "error_correction", question: "Ему нравятся этот текст.", instruction: "Исправьте число глагола", answer: "Ему нравится этот текст.", acceptableAnswers: ["Ему нравится этот текст"], explanation: "Текст — единственное число: нравится.", grammarTopic: g12, vocabTopic: v12 },

    // --- sentence_building ---
    { type: "sentence_building", question: "город / этот / нравится / Мне", instruction: "Соберите фразу", options: ["Мне", "нравится", "этот", "город"], answer: "Мне нравится этот город", explanation: "Мне нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "преподавателю / звонит / Мария", instruction: "Соберите фразу", options: ["Мария", "звонит", "преподавателю"], answer: "Мария звонит преподавателю", explanation: "Звонить преподавателю.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "пожалуйста / сестре / Помогите", instruction: "Соберите фразу", options: ["Помогите", "сестре", "пожалуйста"], answer: "Помогите сестре, пожалуйста", explanation: "Помогать сестре.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "музей / нравится / Ей", instruction: "Соберите фразу", options: ["Ей", "нравится", "музей"], answer: "Ей нравится музей", explanation: "Ей нравится.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "студентам / текст / объясняет / Преподаватель", instruction: "Соберите фразу", options: ["Преподаватель", "объясняет", "текст", "студентам"], answer: "Преподаватель объясняет текст студентам", acceptableAnswers: ["Преподаватель объясняет студентам текст"], explanation: "Объяснять студентам.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "брату / пишет / Омар", instruction: "Соберите фразу", options: ["Омар", "пишет", "брату"], answer: "Омар пишет брату", explanation: "Писать брату.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "словарь / студенту / Дайте", instruction: "Соберите фразу", options: ["Дайте", "студенту", "словарь"], answer: "Дайте студенту словарь", acceptableAnswers: ["Дайте словарь студенту"], explanation: "Дайте студенту.", grammarTopic: g12, vocabTopic: v12 },
    { type: "sentence_building", question: "город / нравится / Нам", instruction: "Соберите фразу", options: ["Нам", "нравится", "город"], answer: "Нам нравится город", explanation: "Нам нравится.", grammarTopic: g12, vocabTopic: v12 },
  ],

  "ru-ch13-instrumental": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "В городе он работает ___.", instruction: "Кем?", options: ["врач", "врача", "врачу", "врачом"], answer: "врачом", explanation: "Работать кем? → врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "Предлог «с» в значении «вместе» обычно требует падеж:", instruction: "Выберите падеж", options: ["родительный", "дательный", "творительный", "винительный"], answer: "творительный", explanation: "С кем? с чем? — творительный.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "Преподаватель пишет на доске ___.", instruction: "Чем?", options: ["ручка", "ручку", "ручке", "ручкой"], answer: "ручкой", explanation: "Писать чем? → ручкой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "Сестра хочет стать ___.", instruction: "Кем?", options: ["инженер", "инженера", "инженеру", "инженером"], answer: "инженером", explanation: "Стать кем? → инженером.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "Мы говорим ___ преподавателем.", instruction: "Предлог совместности", options: ["в", "на", "к", "с"], answer: "с", explanation: "Говорить с преподавателем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "В школе мой отец работает ___.", instruction: "Кем?", options: ["учитель", "учителя", "учителю", "учителем"], answer: "учителем", explanation: "Работать учителем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "Сосед пишет ___, не ручкой.", instruction: "Чем?", options: ["карандаш", "карандаша", "карандашу", "карандашом"], answer: "карандашом", explanation: "Писать карандашом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "multiple_choice", question: "В общежитии я живу ___.", instruction: "С кем?", options: ["с друг", "с друга", "с другу", "с другом"], answer: "с другом", explanation: "Жить с другом.", grammarTopic: g13, vocabTopic: v13 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Я пишу ___.", instruction: "Ручка, творительный", answer: "ручкой", explanation: "Писать ручкой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Брат работает ___.", instruction: "Инженер, творительный", answer: "инженером", explanation: "Работать инженером.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Вечером Анна говорит с ___.", instruction: "Сосед, творительный", answer: "соседом", explanation: "Говорить с соседом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Мария стала ___.", instruction: "Врач, творительный", answer: "врачом", explanation: "Стать врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Брат хочет работать ___ в школе.", instruction: "Учитель, творительный", answer: "учителем", explanation: "Работать учителем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "На контрольной я пишу ___.", instruction: "Карандаш, творительный", answer: "карандашом", explanation: "Писать карандашом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Я живу в комнате с ___.", instruction: "Друг, творительный", answer: "другом", explanation: "С другом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "fill_blank", question: "Мама давно работает ___.", instruction: "Врач, творительный", answer: "врачом", explanation: "Работать врачом.", grammarTopic: g13, vocabTopic: v13 },

    // --- translation ---
    { type: "translation", question: "I live with a friend.", instruction: "Переведите на русский", answer: "Я живу с другом", explanation: "С другом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "He works as a doctor.", instruction: "Переведите на русский", answer: "Он работает врачом", explanation: "Работать врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "I write with a pen.", instruction: "Переведите на русский", answer: "Я пишу ручкой", explanation: "Писать ручкой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "She became a doctor.", instruction: "Переведите на русский", answer: "Она стала врачом", explanation: "Стать врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "We are talking with the teacher.", instruction: "Переведите на русский", answer: "Мы говорим с преподавателем", explanation: "С преподавателем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "My father works as a teacher.", instruction: "Переведите на русский", answer: "Мой отец работает учителем", explanation: "Работать учителем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "She wants to become an engineer.", instruction: "Переведите на русский", answer: "Она хочет стать инженером", explanation: "Стать инженером.", grammarTopic: g13, vocabTopic: v13 },
    { type: "translation", question: "I am walking with my sister.", instruction: "Переведите на русский", answer: "Я гуляю с сестрой", acceptableAnswers: ["Я иду с сестрой"], explanation: "с + творительный: с сестрой.", grammarTopic: g13, vocabTopic: v13 },

    // --- error_correction ---
    { type: "error_correction", question: "Она стала врач.", instruction: "Исправьте падеж", answer: "Она стала врачом.", acceptableAnswers: ["Она стала врачом"], explanation: "Стать врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Анна пишет письмо ручка.", instruction: "Исправьте падеж", answer: "Анна пишет письмо ручкой.", acceptableAnswers: ["Анна пишет письмо ручкой"], explanation: "Писать ручкой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Он работает инженер.", instruction: "Исправьте падеж", answer: "Он работает инженером.", acceptableAnswers: ["Он работает инженером"], explanation: "Работать инженером.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Павел живёт с друг.", instruction: "Исправьте падеж", answer: "Павел живёт с другом.", acceptableAnswers: ["Павел живет с другом", "Павел живёт с другом"], explanation: "С другом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Студенты говорят с сосед.", instruction: "Исправьте падеж", answer: "Студенты говорят с соседом.", acceptableAnswers: ["Студенты говорят с соседом"], explanation: "С соседом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Анна стала учитель.", instruction: "Исправьте падеж", answer: "Анна стала учителем.", acceptableAnswers: ["Анна стала учителем", "Анна стала учительницей.", "Анна стала учительницей"], explanation: "Стать учителем или учительницей.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Она гуляет с сестра.", instruction: "Исправьте падеж", answer: "Она гуляет с сестрой.", acceptableAnswers: ["Она гуляет с сестрой"], explanation: "С сестрой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "error_correction", question: "Омар хочет стать студент.", instruction: "Исправьте падеж", answer: "Омар хочет стать студентом.", acceptableAnswers: ["Омар хочет стать студентом"], explanation: "Стать студентом.", grammarTopic: g13, vocabTopic: v13 },

    // --- sentence_building ---
    { type: "sentence_building", question: "сестрой / с / живёт / Мария", instruction: "Соберите фразу", options: ["Мария", "живёт", "с", "сестрой"], answer: "Мария живёт с сестрой", acceptableAnswers: ["Мария живет с сестрой"], explanation: "Жить с сестрой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "врачом / работает / Сестра", instruction: "Соберите фразу", options: ["Сестра", "работает", "врачом"], answer: "Сестра работает врачом", explanation: "Работать врачом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "ручкой / текст / пишет / Студент", instruction: "Соберите фразу", options: ["Студент", "пишет", "текст", "ручкой"], answer: "Студент пишет текст ручкой", explanation: "Писать ручкой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "учителем / стать / хочет / Брат", instruction: "Соберите фразу", options: ["Брат", "хочет", "стать", "учителем"], answer: "Брат хочет стать учителем", explanation: "Стать учителем.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "сестрой / с / говорю / Я", instruction: "Соберите фразу", options: ["Я", "говорю", "с", "сестрой"], answer: "Я говорю с сестрой", explanation: "Говорить с сестрой.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "инженером / работает / Омар", instruction: "Соберите фразу", options: ["Омар", "работает", "инженером"], answer: "Омар работает инженером", explanation: "Работать инженером.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "другом / с / гуляем / мы / Вечером", instruction: "Соберите фразу", options: ["Вечером", "мы", "гуляем", "с", "другом"], answer: "Вечером мы гуляем с другом", explanation: "Гулять с другом.", grammarTopic: g13, vocabTopic: v13 },
    { type: "sentence_building", question: "инженером / стала / Мария", instruction: "Соберите фразу", options: ["Мария", "стала", "инженером"], answer: "Мария стала инженером", explanation: "Стать инженером.", grammarTopic: g13, vocabTopic: v13 },
  ],

  "ru-ch14-aspect-intro": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Вчера я долго ___ книгу в библиотеке. (о себе, м.)", instruction: "Процесс", options: ["прочитал", "читал", "прочитаю", "читаю"], answer: "читал", explanation: "Долго, процесс → читал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Пара к глаголу «писать» — ?", instruction: "Совершенный вид", options: ["пишу", "написать", "писал", "письмо"], answer: "написать", explanation: "Писать — написать.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Упражнение уже готово. Я его ___. (м.)", instruction: "Результат", options: ["делал", "сделал", "делаю", "буду делать"], answer: "сделал", explanation: "Результат есть → сделал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Она два часа ___ сочинение и не закончила.", instruction: "Процесс без результата", options: ["написала", "писала", "напишет", "пишет"], answer: "писала", explanation: "Не закончила → писала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Пара к глаголу «делать» — ?", instruction: "Совершенный вид", options: ["делал", "сделать", "делаю", "дело"], answer: "сделать", explanation: "Делать — сделать.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Вчера вечером она ___ письмо до конца.", instruction: "Результат", options: ["писала", "написала", "пишет", "будет писать"], answer: "написала", explanation: "До конца → написала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Каждый день я ___ домашнее задание.", instruction: "Привычка", options: ["сделаю", "сделал", "делаю", "сделала"], answer: "делаю", explanation: "Каждый день → делаю.", grammarTopic: g14, vocabTopic: v14 },
    { type: "multiple_choice", question: "Пара к глаголу «читать» — ?", instruction: "Совершенный вид", options: ["читал", "прочитать", "читаю", "чтение"], answer: "прочитать", explanation: "Читать — прочитать.", grammarTopic: g14, vocabTopic: v14 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Анна уже ___ упражнение.", instruction: "Сделать, результат, ж. р.", answer: "сделала", explanation: "Уже, результат → сделала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Вчера он долго ___ книгу в библиотеке.", instruction: "Читать, процесс", answer: "читал", explanation: "Долго → читал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Мы уже ___ сочинение.", instruction: "Написать, результат", answer: "написали", explanation: "Уже → написали.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Каждый вечер Омар ___ упражнения.", instruction: "Делать, привычка", answer: "делает", explanation: "Каждый вечер → делает.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Мария ещё не ___ письмо.", instruction: "Написать, результата нет", answer: "написала", acceptableAnswers: ["написала"], explanation: "Ещё не написала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Вчера они ___ тест до конца.", instruction: "Сделать, результат", answer: "сделали", explanation: "До конца → сделали.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Павел уже ___ книгу.", instruction: "Прочитать, результат", answer: "прочитал", acceptableAnswers: ["прочёл", "прочел", "Прочёл", "Прочел"], explanation: "Уже → прочитал или прочёл.", grammarTopic: g14, vocabTopic: v14 },
    { type: "fill_blank", question: "Сейчас Лиза ___ письмо в комнате.", instruction: "Писать, процесс сейчас", answer: "пишет", explanation: "Сейчас, процесс → пишет.", grammarTopic: g14, vocabTopic: v14 },

    // --- translation ---
    { type: "translation", question: "She wrote the essay. (completed)", instruction: "Переведите на русский", answer: "Она написала сочинение", explanation: "Результат → написала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "Yesterday I read the book for two hours. (process, male)", instruction: "Переведите на русский", answer: "Вчера я читал книгу два часа", acceptableAnswers: ["Вчера я два часа читал книгу"], explanation: "Два часа, процесс → читал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "I have already done the exercise. (male)", instruction: "Переведите на русский", answer: "Я уже сделал упражнение", explanation: "Уже → сделал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "She was writing a letter and did not finish.", instruction: "Переведите на русский", answer: "Она писала письмо и не закончила", explanation: "Не закончила → писала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "We read the text to the end.", instruction: "Переведите на русский (результат)", answer: "Мы прочитали текст", acceptableAnswers: ["Мы прочитали текст до конца", "Мы прочли текст", "Мы прочли текст до конца", "Мы дочитали текст до конца"], explanation: "Результат → прочитали, прочли или дочитали.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "Every evening he writes exercises.", instruction: "Переведите на русский", answer: "Каждый вечер он пишет упражнения", acceptableAnswers: ["Он каждый вечер пишет упражнения"], explanation: "Привычка → пишет.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "I have not done the homework yet. (female)", instruction: "Переведите на русский", answer: "Я ещё не сделала домашнее задание", acceptableAnswers: ["Я еще не сделала домашнее задание", "Ещё не сделала домашнее задание", "Еще не сделала домашнее задание"], explanation: "Ещё не сделала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "translation", question: "She has already written the letter.", instruction: "Переведите на русский", answer: "Она уже написала письмо", explanation: "Уже → написала.", grammarTopic: g14, vocabTopic: v14 },

    // --- error_correction ---
    { type: "error_correction", question: "Вчера я два часа сделал домашнее задание, но не закончил.", instruction: "Исправьте вид: процесс", answer: "Вчера я два часа делал домашнее задание, но не закончил.", acceptableAnswers: ["Вчера я два часа делал домашнее задание, но не закончил", "Вчера я два часа делала домашнее задание, но не закончила.", "Вчера я два часа делала домашнее задание, но не закончила"], explanation: "Процесс без конца → делал или делала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Я уже делал упражнение, оно лежит готовое.", instruction: "Исправьте вид: результат, м. р.", answer: "Я уже сделал упражнение, оно лежит готовое.", acceptableAnswers: ["Я уже сделал упражнение, оно лежит готовое"], explanation: "Готово → сделал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Завтра весь вечер я прочитаю книгу.", instruction: "Исправьте вид: процесс в будущем", answer: "Завтра весь вечер я буду читать книгу.", acceptableAnswers: ["Завтра весь вечер я буду читать книгу"], explanation: "Весь вечер → буду читать.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Мы каждый день сделаем домашнее задание.", instruction: "Исправьте вид: привычка", answer: "Мы каждый день делаем домашнее задание.", acceptableAnswers: ["Мы каждый день делаем домашнее задание"], explanation: "Каждый день → делаем.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Я не писал сочинение, оно уже готово.", instruction: "Исправьте вид: результат есть", answer: "Я написал сочинение, оно уже готово.", acceptableAnswers: ["Я написал сочинение, оно уже готово", "Я написала сочинение, оно уже готово.", "Я написала сочинение, оно уже готово"], explanation: "Готово → написал или написала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Анна уже писала сочинение, оно готово.", instruction: "Исправьте вид: результат", answer: "Анна уже написала сочинение, оно готово.", acceptableAnswers: ["Анна уже написала сочинение, оно готово"], explanation: "Готово → написала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Совершенный вид к глаголу «писать» — писал.", instruction: "Исправьте пару", answer: "Совершенный вид к глаголу «писать» — написать.", acceptableAnswers: ["Совершенный вид к глаголу «писать» — написать"], explanation: "Писать — написать.", grammarTopic: g14, vocabTopic: v14 },
    { type: "error_correction", question: "Вчера я буду читать этот текст два часа.", instruction: "Исправьте время: вчера, процесс", answer: "Вчера я читал этот текст два часа.", acceptableAnswers: ["Вчера я читал этот текст два часа", "Вчера я читала этот текст два часа.", "Вчера я читала этот текст два часа"], explanation: "Вчера, два часа → читал или читала.", grammarTopic: g14, vocabTopic: v14 },

    // --- sentence_building ---
    { type: "sentence_building", question: "книгу / долго / читал / Вчера / я", instruction: "Соберите фразу", options: ["Вчера", "я", "долго", "читал", "книгу"], answer: "Вчера я долго читал книгу", acceptableAnswers: ["Я вчера долго читал книгу"], explanation: "Долго → читал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "письмо / написал / Омар", instruction: "Соберите фразу", options: ["Омар", "написал", "письмо"], answer: "Омар написал письмо", explanation: "Результат → написал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "задание / сделал / уже / Он", instruction: "Соберите фразу", options: ["Он", "уже", "сделал", "задание"], answer: "Он уже сделал задание", explanation: "Уже → сделал.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "письмо / писала / два / часа / Она", instruction: "Соберите фразу", options: ["Она", "писала", "письмо", "два", "часа"], answer: "Она два часа писала письмо", acceptableAnswers: ["Она писала письмо два часа"], explanation: "Два часа → писала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "текст / прочитали / Они", instruction: "Соберите фразу", options: ["Они", "прочитали", "текст"], answer: "Они прочитали текст", explanation: "Результат → прочитали.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "задание / сделала / не / ещё / Она", instruction: "Соберите фразу", options: ["Она", "ещё", "не", "сделала", "задание"], answer: "Она ещё не сделала задание", acceptableAnswers: ["Она еще не сделала задание"], explanation: "Ещё не сделала.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "каждый / день / пишет / Он", instruction: "Соберите фразу", options: ["Он", "каждый", "день", "пишет"], answer: "Он каждый день пишет", explanation: "Каждый день → пишет.", grammarTopic: g14, vocabTopic: v14 },
    { type: "sentence_building", question: "книгу / прочитала / уже / Анна", instruction: "Соберите фразу", options: ["Анна", "уже", "прочитала", "книгу"], answer: "Анна уже прочитала книгу", explanation: "Уже → прочитала.", grammarTopic: g14, vocabTopic: v14 },
  ],

  "ru-ch15-motion-basic": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Сейчас я ___ в университет пешком.", instruction: "Одно направление, пешком", options: ["иду", "хожу", "еду", "езжу"], answer: "иду", explanation: "Сейчас пешком → иду.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Они часто ___ в центр на метро.", instruction: "Регулярно, транспорт", options: ["едут", "ездят", "идут", "ходят"], answer: "ездят", explanation: "Часто на метро → ездят.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Каждый день Анна ___ пешком в библиотеку.", instruction: "Регулярно, пешком", options: ["идёт", "ходит", "едет", "ездит"], answer: "ходит", explanation: "Каждый день пешком → ходит.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Сейчас мы ___ на автобусе в центр.", instruction: "Сейчас, транспорт", options: ["едем", "ездим", "идём", "ходим"], answer: "едем", explanation: "Сейчас на автобусе → едем.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Куда ты ___ пешком прямо сейчас?", instruction: "Сейчас, пешком", options: ["идёшь", "ходишь", "едешь", "ездишь"], answer: "идёшь", explanation: "Сейчас пешком → идёшь.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Каждое утро брат ___ на работу на автобусе.", instruction: "Регулярно, транспорт", options: ["едет", "ездит", "идёт", "ходит"], answer: "ездит", explanation: "Каждое утро на автобусе → ездит.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "По выходным мы ___ в парк пешком.", instruction: "Регулярно, пешком", options: ["идём", "ходим", "едем", "ездим"], answer: "ходим", explanation: "По выходным пешком → ходим.", grammarTopic: g15, vocabTopic: v15 },
    { type: "multiple_choice", question: "Смотри: автобус сейчас ___ в университет.", instruction: "Сейчас, транспорт", options: ["едет", "ездит", "идёт", "ходит"], answer: "едет", explanation: "Сейчас → едет.", grammarTopic: g15, vocabTopic: v15 },

    // --- fill_blank ---
    { type: "fill_blank", question: "Я каждый день ___ в университет.", instruction: "Ходить, регулярно", answer: "хожу", explanation: "Каждый день → хожу.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Сейчас она ___ в магазин.", instruction: "Идти, сейчас", answer: "идёт", acceptableAnswers: ["идет"], explanation: "Сейчас → идёт.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Мы часто ___ на метро в центр.", instruction: "Ездить, регулярно", answer: "ездим", explanation: "Часто на метро → ездим.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Куда вы сейчас ___ на автобусе?", instruction: "Ехать, сейчас", answer: "едете", explanation: "Сейчас на автобусе → едете.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Я каждый день ___ на метро.", instruction: "Ездить, регулярно", answer: "езжу", explanation: "Каждый день на метро → езжу.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Сейчас студенты ___ пешком в аудиторию.", instruction: "Идти, сейчас", answer: "идут", explanation: "Сейчас пешком → идут.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Сосед каждый вечер ___ пешком домой.", instruction: "Ходить, регулярно", answer: "ходит", explanation: "Каждый вечер → ходит.", grammarTopic: g15, vocabTopic: v15 },
    { type: "fill_blank", question: "Сейчас я ___ на метро, не пешком.", instruction: "Ехать, сейчас", answer: "еду", explanation: "Сейчас на метро → еду.", grammarTopic: g15, vocabTopic: v15 },

    // --- translation ---
    { type: "translation", question: "We are going by bus. (now)", instruction: "Переведите на русский", answer: "Мы едем на автобусе", acceptableAnswers: ["Сейчас мы едем на автобусе"], explanation: "Сейчас на автобусе → едем.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "I walk to class every day.", instruction: "Переведите на русский", answer: "Я каждый день хожу на пары пешком", acceptableAnswers: ["Каждый день я хожу на пары пешком", "Я каждый день хожу на занятия пешком", "Я каждый день хожу пешком в университет", "Каждый день я хожу на пару пешком"], explanation: "Каждый день пешком → хожу.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "She is going to the dorm now.", instruction: "Переведите на русский", answer: "Сейчас она идёт в общежитие", acceptableAnswers: ["Сейчас она идет в общежитие", "Сейчас она едет в общежитие", "Она сейчас идёт в общежитие", "Она сейчас идет в общежитие", "Она сейчас едет в общежитие"], explanation: "Сейчас, направление: идёт или едет.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "They often go to the university by metro.", instruction: "Переведите на русский", answer: "Они часто ездят в университет на метро", acceptableAnswers: ["Они часто ездят на метро в университет"], explanation: "Часто на метро → ездят.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "Where are you going? (informal, on foot, now)", instruction: "Переведите на русский", answer: "Куда ты идёшь?", acceptableAnswers: ["Куда ты идешь?", "Куда идёшь?", "Куда идешь?"], explanation: "Сейчас пешком → идёшь.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "I am going to the center by bus. (now)", instruction: "Переведите на русский", answer: "Я еду в центр на автобусе", explanation: "Сейчас на автобусе → еду.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "Every evening she goes home by metro.", instruction: "Переведите на русский", answer: "Каждый вечер она ездит домой на метро", acceptableAnswers: ["Она каждый вечер ездит домой на метро"], explanation: "Каждый вечер на метро → ездит.", grammarTopic: g15, vocabTopic: v15 },
    { type: "translation", question: "Right now I am walking to the library.", instruction: "Переведите на русский", answer: "Сейчас я иду в библиотеку", acceptableAnswers: ["Я сейчас иду в библиотеку"], explanation: "Сейчас пешком → иду.", grammarTopic: g15, vocabTopic: v15 },

    // --- error_correction ---
    { type: "error_correction", question: "Сейчас я хожу в магазин.", instruction: "Исправьте глагол: сейчас", answer: "Сейчас я иду в магазин.", acceptableAnswers: ["Сейчас я иду в магазин"], explanation: "Сейчас → иду.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Каждый день я иду в университет.", instruction: "Исправьте глагол: регулярно", answer: "Каждый день я хожу в университет.", acceptableAnswers: ["Каждый день я хожу в университет"], explanation: "Каждый день → хожу.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Мы часто едем в центр.", instruction: "Исправьте глагол: часто", answer: "Мы часто ездим в центр.", acceptableAnswers: ["Мы часто ездим в центр"], explanation: "Часто → ездим.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Смотри, автобус ездит в университет.", instruction: "Исправьте глагол: сейчас", answer: "Смотри, автобус едет в университет.", acceptableAnswers: ["Смотри, автобус едет в университет"], explanation: "Смотри, сейчас → едет.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Я иду на автобусе в центр.", instruction: "Исправьте глагол: транспорт", answer: "Я еду на автобусе в центр.", acceptableAnswers: ["Я еду на автобусе в центр"], explanation: "На автобусе → еду.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Она каждый день идёт пешком на пары.", instruction: "Исправьте глагол: регулярно", answer: "Она каждый день ходит пешком на пары.", acceptableAnswers: ["Она каждый день ходит пешком на пары"], explanation: "Каждый день → ходит.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Куда ты ходишь сейчас?", instruction: "Исправьте глагол: сейчас", answer: "Куда ты идёшь сейчас?", acceptableAnswers: ["Куда ты идешь сейчас?", "Куда ты идёшь сейчас"], explanation: "Сейчас → идёшь.", grammarTopic: g15, vocabTopic: v15 },
    { type: "error_correction", question: "Сейчас я иду в университете.", instruction: "Исправьте падеж направления", answer: "Сейчас я иду в университет.", acceptableAnswers: ["Сейчас я иду в университет"], explanation: "Иду в университет, не «в университете».", grammarTopic: g15, vocabTopic: v15 },

    // --- sentence_building ---
    { type: "sentence_building", question: "парк / в / иду / я / Сейчас", instruction: "Соберите фразу", options: ["Сейчас", "я", "иду", "в", "парк"], answer: "Сейчас я иду в парк", explanation: "Сейчас → иду.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "день / каждый / хожу / Я / пешком", instruction: "Соберите фразу", options: ["Я", "каждый", "день", "хожу", "пешком"], answer: "Я каждый день хожу пешком", acceptableAnswers: ["Каждый день я хожу пешком"], explanation: "Каждый день → хожу.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "метро / на / едем / Мы", instruction: "Соберите фразу", options: ["Мы", "едем", "на", "метро"], answer: "Мы едем на метро", explanation: "На метро → едем.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "метро / на / ездят / часто / Они", instruction: "Соберите фразу", options: ["Они", "часто", "ездят", "на", "метро"], answer: "Они часто ездят на метро", explanation: "Часто → ездят.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "идёт / она / Куда", instruction: "Соберите вопрос", options: ["Куда", "она", "идёт"], answer: "Куда она идёт", acceptableAnswers: ["Куда она идет"], explanation: "Сейчас → идёт.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "общежитие / в / идёт / Она", instruction: "Соберите фразу", options: ["Она", "идёт", "в", "общежитие"], answer: "Она идёт в общежитие", acceptableAnswers: ["Она идет в общежитие"], explanation: "Направление: в общежитие.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "центр / в / еду / Я", instruction: "Соберите фразу", options: ["Я", "еду", "в", "центр"], answer: "Я еду в центр", explanation: "Еду в центр.", grammarTopic: g15, vocabTopic: v15 },
    { type: "sentence_building", question: "парк / в / ходим / Мы / часто", instruction: "Соберите фразу", options: ["Мы", "часто", "ходим", "в", "парк"], answer: "Мы часто ходим в парк", explanation: "Часто пешком → ходим.", grammarTopic: g15, vocabTopic: v15 },
  ],

  "ru-ch16-dorm-shops": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "У меня нет ___.", instruction: "Нет + родительный", options: ["ключ", "ключа", "ключу", "ключом"], answer: "ключа", explanation: "Нет ключа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "Около общежития нет ___.", instruction: "Нет + родительный", options: ["аптека", "аптеки", "аптеку", "аптекой"], answer: "аптеки", explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "Где ключ от ___?", instruction: "От + родительный", options: ["комната", "комнаты", "комнату", "комнатой"], answer: "комнаты", explanation: "Ключ от комнаты.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "В центре много ___.", instruction: "Много + родительный", options: ["магазины", "магазинов", "магазинам", "магазинами"], answer: "магазинов", explanation: "Много магазинов.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "У соседа нет ___.", instruction: "Нет + родительный", options: ["деньги", "денег", "деньгам", "деньгами"], answer: "денег", explanation: "Нет денег.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "Это комната ___.", instruction: "Чья?", options: ["сосед", "соседа", "соседу", "соседом"], answer: "соседа", explanation: "Комната соседа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "В магазине нет ___.", instruction: "Нет + родительный", options: ["хлеб", "хлеба", "хлебу", "хлебом"], answer: "хлеба", explanation: "Нет хлеба.", grammarTopic: g16, vocabTopic: v16 },
    { type: "multiple_choice", question: "Сколько ___ на столе?", instruction: "Ключ, родительный мн. ч.", options: ["ключи", "ключа", "ключей", "ключом"], answer: "ключей", explanation: "Сколько ключей.", grammarTopic: g16, vocabTopic: v16 },

    // --- fill_blank ---
    { type: "fill_blank", question: "У соседа нет ___ от комнаты.", instruction: "Ключ, родительный", answer: "ключа", explanation: "Нет ключа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "На этой улице нет ___.", instruction: "Аптека, родительный", answer: "аптеки", explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "Около метро нет ___.", instruction: "Банк, родительный", answer: "банка", explanation: "Нет банка.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "Вот ключ от ___ 12.", instruction: "Комната, родительный", answer: "комнаты", explanation: "Ключ от комнаты.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "В магазине мало ___.", instruction: "Хлеб, родительный", answer: "хлеба", explanation: "Мало хлеба.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "Около дома нет ___.", instruction: "Магазин, родительный", answer: "магазина", explanation: "Нет магазина.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "На нашей улице много ___.", instruction: "Банк, родительный мн. ч.", answer: "банков", explanation: "Много банков.", grammarTopic: g16, vocabTopic: v16 },
    { type: "fill_blank", question: "У нас мало ___ на билет.", instruction: "Деньги, родительный", answer: "денег", explanation: "Мало денег.", grammarTopic: g16, vocabTopic: v16 },

    // --- translation ---
    { type: "translation", question: "There is no pharmacy near the dorm.", instruction: "Переведите на русский", answer: "Около общежития нет аптеки", acceptableAnswers: ["Возле общежития нет аптеки", "Рядом с общежитием нет аптеки"], explanation: "Около + родительный: общежития. Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "She has no key to the room.", instruction: "Переведите на русский", answer: "У неё нет ключа от комнаты", acceptableAnswers: ["У нее нет ключа от комнаты", "Нет ключа от комнаты", "Нет у неё ключа от комнаты", "Нет у нее ключа от комнаты"], explanation: "Нет ключа от комнаты.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "There is no pharmacy nearby.", instruction: "Переведите на русский", answer: "Рядом нет аптеки", explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "We live in a dormitory.", instruction: "Переведите на русский", answer: "Мы живём в общежитии", acceptableAnswers: ["Мы живем в общежитии", "Живём в общежитии", "Живем в общежитии"], explanation: "В общежитии.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "Where is the nearest shop?", instruction: "Переведите на русский", answer: "Где ближайший магазин?", acceptableAnswers: ["Где ближайший магазин"], explanation: "Ближайший магазин.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "There is no bread at home.", instruction: "Переведите на русский", answer: "Дома нет хлеба", explanation: "Нет хлеба.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "This is Anna's room.", instruction: "Переведите на русский", answer: "Это комната Анны", explanation: "Комната Анны.", grammarTopic: g16, vocabTopic: v16 },
    { type: "translation", question: "There are few shops in the dorm.", instruction: "Переведите на русский", answer: "В общежитии мало магазинов", acceptableAnswers: ["Мало магазинов в общежитии"], explanation: "Мало магазинов.", grammarTopic: g16, vocabTopic: v16 },

    // --- error_correction ---
    { type: "error_correction", question: "У меня нет ключ от комнаты.", instruction: "Исправьте падеж", answer: "У меня нет ключа от комнаты.", acceptableAnswers: ["У меня нет ключа от комнаты"], explanation: "Нет ключа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "Рядом с домом нет аптека.", instruction: "Исправьте падеж", answer: "Рядом с домом нет аптеки.", acceptableAnswers: ["Рядом с домом нет аптеки"], explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "В кафе нет хлеб.", instruction: "Исправьте падеж", answer: "В кафе нет хлеба.", acceptableAnswers: ["В кафе нет хлеба"], explanation: "Нет хлеба.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "Где ключ сосед?", instruction: "Исправьте падеж", answer: "Где ключ соседа?", acceptableAnswers: ["Где ключ соседа"], explanation: "Ключ соседа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "Около университета много магазины.", instruction: "Исправьте падеж", answer: "Около университета много магазинов.", acceptableAnswers: ["Около университета много магазинов"], explanation: "Много магазинов.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "Ключ от комната 5 на столе.", instruction: "Исправьте падеж", answer: "Ключ от комнаты 5 на столе.", acceptableAnswers: ["Ключ от комнаты 5 на столе"], explanation: "От комнаты.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "У нас мало деньги на аптеку.", instruction: "Исправьте падеж", answer: "У нас мало денег на аптеку.", acceptableAnswers: ["У нас мало денег на аптеку"], explanation: "Мало денег.", grammarTopic: g16, vocabTopic: v16 },
    { type: "error_correction", question: "Около банка нет аптека.", instruction: "Исправьте падеж", answer: "Около банка нет аптеки.", acceptableAnswers: ["Около банка нет аптеки"], explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },

    // --- sentence_building ---
    { type: "sentence_building", question: "общежитии / в / живу / Я", instruction: "Соберите фразу", options: ["Я", "живу", "в", "общежитии"], answer: "Я живу в общежитии", explanation: "В общежитии.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "хлеба / нет / столовой / В", instruction: "Соберите фразу", options: ["В", "столовой", "нет", "хлеба"], answer: "В столовой нет хлеба", explanation: "Нет хлеба.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "аптеки / нет / Здесь", instruction: "Соберите фразу", options: ["Здесь", "нет", "аптеки"], answer: "Здесь нет аптеки", explanation: "Нет аптеки.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "магазинов / много / метро / Возле", instruction: "Соберите фразу", options: ["Возле", "метро", "много", "магазинов"], answer: "Возле метро много магазинов", explanation: "Много магазинов.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "соседа / ключ / Это", instruction: "Соберите фразу", options: ["Это", "ключ", "соседа"], answer: "Это ключ соседа", explanation: "Ключ соседа.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "банк / ближайший / Где", instruction: "Соберите вопрос", options: ["Где", "ближайший", "банк"], answer: "Где ближайший банк", explanation: "Ближайший банк.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "денег / мало / У / нас", instruction: "Соберите фразу", options: ["У", "нас", "мало", "денег"], answer: "У нас мало денег", explanation: "Мало денег.", grammarTopic: g16, vocabTopic: v16 },
    { type: "sentence_building", question: "магазина / нет / общежитии / В", instruction: "Соберите фразу", options: ["В", "общежитии", "нет", "магазина"], answer: "В общежитии нет магазина", explanation: "Нет магазина.", grammarTopic: g16, vocabTopic: v16 },
  ],
};
