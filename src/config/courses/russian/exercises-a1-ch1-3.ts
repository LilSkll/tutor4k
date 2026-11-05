import type { StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

const g1 = "ru-a1-alphabet-phonetics";
const v1 = "ru-a1-greetings";
const g2 = "ru-a1-identity-eto";
const v2 = "ru-a1-personal-info";
const g3 = "ru-a1-noun-gender";
const v3 = "ru-a1-classroom";

/** Deep A1 practice for chapters 1–3 (phonetics → intro → gender). */
export const RUSSIAN_A1_CH1_3_EXERCISES: Record<string, Draft[]> = {
  "ru-ch1-alphabet-greetings": [
    // --- multiple_choice ---
    { type: "multiple_choice", question: "Как вежливо поздороваться с преподавателем утром?", instruction: "Выберите лучший вариант", options: ["Привет!", "Здравствуйте!", "Пока!", "Эй!"], answer: "Здравствуйте!", explanation: "С преподавателем — формальное «Здравствуйте».", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Однокурсник в общежитии. Что сказать?", instruction: "Неформальное приветствие", options: ["Здравствуйте!", "До свидания!", "Привет!", "Извините!"], answer: "Привет!", explanation: "С друзьями и однокурсниками — «Привет».", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "— Спасибо! — ___", instruction: "Ответ на благодарность", options: ["Привет", "Пожалуйста", "Извините", "Кто это"], answer: "Пожалуйста", explanation: "«Пожалуйста» = you're welcome.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Какая буква даёт звук, близкий к английскому ts?", instruction: "Звук / буква", options: ["Ш", "Ж", "Ц", "Щ"], answer: "Ц", explanation: "Ц ≈ ts (центр).", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Буква Ь — это…", instruction: "Выберите верное", options: ["гласный звук", "согласный звук", "не звук, знак мягкости", "ударение"], answer: "не звук, знак мягкости", explanation: "Ь не читается отдельным звуком.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Где уместно сказать «Пока!»?", instruction: "Ситуация", options: ["с деканом", "с новым преподавателем", "с другом", "на официальной встрече"], answer: "с другом", explanation: "«Пока» — неформальное прощание.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Нужно спросить дорогу у незнакомого человека. Начните так:", instruction: "Вежливость", options: ["Слушай!", "Эй!", "Извините…", "Давай!"], answer: "Извините…", explanation: "К незнакомым — «Извините».", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "В слове «мы» буква Ы…", instruction: "Фонетика", options: ["читается как английская i в machine", "особый русский звук", "не читается", "это мягкий знак"], answer: "особый русский звук", explanation: "Ы — отдельный звук, важный для иностранцев.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "«Добрый день!» обычно говорят…", instruction: "Время суток", options: ["только ночью", "днём", "только в SMS", "вместо «спасибо»"], answer: "днём", explanation: "Добрый день — дневное приветствие.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "— Как дела? — ___", instruction: "Короткий ответ", options: ["Здравствуйте", "Хорошо", "Кто это", "Мой учебник"], answer: "Хорошо", explanation: "Типичный ответ: хорошо / нормально.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "Буква Ъ нужна, чтобы…", instruction: "Функция знака", options: ["поставить ударение", "разделить согласную и е/ё/ю/я", "сделать звук длиннее", "заменить пробел"], answer: "разделить согласную и е/ё/ю/я", explanation: "Ъ — разделительный знак.", grammarTopic: g1, vocabTopic: v1 },
    { type: "multiple_choice", question: "В конце разговора с преподавателем лучше сказать:", instruction: "Прощание", options: ["Пока!", "До свидания!", "Привет!", "Нормально!"], answer: "До свидания!", explanation: "С преподавателем — «До свидания».", grammarTopic: g1, vocabTopic: v1 },

    // --- fill_blank ---
    { type: "fill_blank", question: "___! Меня зовут Анна.", instruction: "Неформальное приветствие", answer: "Привет", acceptableAnswers: ["привет"], explanation: "С друзьями — Привет.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "___, профессор!", instruction: "Формальное приветствие", answer: "Здравствуйте", acceptableAnswers: ["здравствуйте"], explanation: "Формально — Здравствуйте.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "— Где столовая? — ___, прямо.", instruction: "Вежливый ответ / please", answer: "Пожалуйста", acceptableAnswers: ["пожалуйста"], explanation: "Пожалуйста при указании дороги.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "___, где аудитория 5?", instruction: "Обращение к незнакомому", answer: "Извините", acceptableAnswers: ["извините", "Простите", "простите"], explanation: "Извините / Простите.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "— Спасибо! — ___.", instruction: "You're welcome", answer: "Пожалуйста", acceptableAnswers: ["пожалуйста"], explanation: "Ответ на спасибо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "Привет! Как ___?", instruction: "дела / дело", answer: "дела", acceptableAnswers: ["Дела"], explanation: "Как дела?", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "У меня всё ___.", instruction: "хорошо / здравствуйте", answer: "хорошо", acceptableAnswers: ["Хорошо", "нормально", "Нормально"], explanation: "Хорошо / нормально.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "С преподавателем говорим на «___».", instruction: "ты / вы", answer: "вы", acceptableAnswers: ["Вы"], explanation: "Вежливость — вы.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "Буква ___ показывает мягкость согласной (день).", instruction: "ь / ъ / ы", answer: "ь", acceptableAnswers: ["Ь", "мягкий знак"], explanation: "Ь — мягкий знак.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "___ утро!", instruction: "Доброе / Добрый", answer: "Доброе", acceptableAnswers: ["доброе"], explanation: "Доброе утро.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "___ день!", instruction: "Добрый / Доброе", answer: "Добрый", acceptableAnswers: ["добрый"], explanation: "Добрый день.", grammarTopic: g1, vocabTopic: v1 },
    { type: "fill_blank", question: "— До ___.", instruction: "Прощание (одно слово)", answer: "свидания", acceptableAnswers: ["Свидания"], explanation: "До свидания.", grammarTopic: g1, vocabTopic: v1 },

    // --- translation ---
    { type: "translation", question: "Thank you", instruction: "Переведите на русский", answer: "Спасибо", acceptableAnswers: ["спасибо", "Большое спасибо", "большое спасибо"], explanation: "Спасибо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Hello (formal)", instruction: "Переведите на русский", answer: "Здравствуйте", acceptableAnswers: ["здравствуйте"], explanation: "Здравствуйте.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Hi", instruction: "Переведите на русский", answer: "Привет", acceptableAnswers: ["привет"], explanation: "Привет.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Goodbye", instruction: "Переведите на русский", answer: "До свидания", acceptableAnswers: ["до свидания", "Пока", "пока"], explanation: "До свидания (или пока).", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Excuse me, where is the classroom?", instruction: "Переведите на русский", answer: "Извините, где аудитория?", acceptableAnswers: ["Извините где аудитория?", "Извините, где аудитория", "Простите, где аудитория?"], explanation: "Извините, где аудитория?", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Please", instruction: "Переведите на русский (одно слово)", answer: "Пожалуйста", acceptableAnswers: ["пожалуйста"], explanation: "Пожалуйста.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "How are you?", instruction: "Переведите на русский", answer: "Как дела?", acceptableAnswers: ["как дела?", "Как дела"], explanation: "Как дела?", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Yes", instruction: "Переведите на русский", answer: "Да", acceptableAnswers: ["да"], explanation: "Да.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "No", instruction: "Переведите на русский", answer: "Нет", acceptableAnswers: ["нет"], explanation: "Нет.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Good morning", instruction: "Переведите на русский", answer: "Доброе утро", acceptableAnswers: ["доброе утро", "Доброе утро!"], explanation: "Доброе утро.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Thank you very much", instruction: "Переведите на русский", answer: "Большое спасибо", acceptableAnswers: ["большое спасибо", "Спасибо большое", "спасибо большое"], explanation: "Большое спасибо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "translation", question: "Bye (to a friend)", instruction: "Переведите на русский", answer: "Пока", acceptableAnswers: ["пока", "Пока!"], explanation: "Пока.", grammarTopic: g1, vocabTopic: v1 },

    // --- error_correction ---
    { type: "error_correction", question: "Здраствуйте, профессор!", instruction: "Исправьте написание", answer: "Здравствуйте, профессор!", acceptableAnswers: ["Здравствуйте, профессор"], explanation: "В слове есть «в»: здраВствуйте.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Привет, Иван Петрович!", instruction: "Исправьте регистр общения с преподавателем", answer: "Здравствуйте, Иван Петрович!", acceptableAnswers: ["Здравствуйте, Иван Петрович"], explanation: "Преподавателю — Здравствуйте.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Спасиба за помощь!", instruction: "Исправьте слово", answer: "Спасибо за помощь!", acceptableAnswers: ["Спасибо за помощь"], explanation: "Спасибо (не «спасиба»).", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Досвидания!", instruction: "Исправьте написание", answer: "До свидания!", acceptableAnswers: ["До свидания"], explanation: "Пишется раздельно: до свидания.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Пожалста, где кафе?", instruction: "Исправьте слово", answer: "Пожалуйста, где кафе?", acceptableAnswers: ["Пожалуйста, где кафе"], explanation: "Пожалуйста.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Извини, где деканат? (к незнакомому)", instruction: "Сделайте обращение вежливым", answer: "Извините, где деканат?", acceptableAnswers: ["Извините, где деканат", "Простите, где деканат?"], explanation: "К незнакомым — извините.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Добрый утро!", instruction: "Исправьте согласование", answer: "Доброе утро!", acceptableAnswers: ["Доброе утро"], explanation: "Доброе утро (средний род).", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Доброе день!", instruction: "Исправьте согласование", answer: "Добрый день!", acceptableAnswers: ["Добрый день"], explanation: "Добрый день.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Как дело?", instruction: "Исправьте устойчивую фразу", answer: "Как дела?", acceptableAnswers: ["Как дела"], explanation: "Как дела? (мн. ч.).", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Пока, профессор!", instruction: "Исправьте прощание", answer: "До свидания, профессор!", acceptableAnswers: ["До свидания, профессор"], explanation: "С преподавателем — до свидания.", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Здраствуй, Мария! (однокурснице)", instruction: "Исправьте форму приветствия", answer: "Привет, Мария!", acceptableAnswers: ["Привет, Мария", "Здравствуй, Мария!"], explanation: "С однокурсницей обычно «Привет» (или «здравствуй»).", grammarTopic: g1, vocabTopic: v1 },
    { type: "error_correction", question: "Большой спасибо!", instruction: "Исправьте фразу", answer: "Большое спасибо!", acceptableAnswers: ["Большое спасибо"], explanation: "Большое спасибо.", grammarTopic: g1, vocabTopic: v1 },

    // --- sentence_building ---
    { type: "sentence_building", question: "вас / Как / зовут", instruction: "Соберите вежливый вопрос", options: ["Как", "вас", "зовут"], answer: "Как вас зовут", acceptableAnswers: ["Как вас зовут?"], explanation: "Как вас зовут?", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "аудитория / где / Извините", instruction: "Соберите просьбу", options: ["Извините", "где", "аудитория"], answer: "Извините где аудитория", acceptableAnswers: ["Извините, где аудитория", "Извините, где аудитория?"], explanation: "Извините, где аудитория?", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "дела / Как", instruction: "Соберите вопрос", options: ["Как", "дела"], answer: "Как дела", acceptableAnswers: ["Как дела?"], explanation: "Как дела?", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "свидания / До", instruction: "Соберите прощание", options: ["До", "свидания"], answer: "До свидания", acceptableAnswers: ["До свидания!"], explanation: "До свидания.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "утро / Доброе", instruction: "Соберите приветствие", options: ["Доброе", "утро"], answer: "Доброе утро", acceptableAnswers: ["Доброе утро!"], explanation: "Доброе утро.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "день / Добрый", instruction: "Соберите приветствие", options: ["Добрый", "день"], answer: "Добрый день", acceptableAnswers: ["Добрый день!"], explanation: "Добрый день.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "спасибо / Большое", instruction: "Соберите фразу", options: ["Большое", "спасибо"], answer: "Большое спасибо", acceptableAnswers: ["Большое спасибо!"], explanation: "Большое спасибо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "пожалуйста / Пройдите", instruction: "Соберите вежливую фразу", options: ["Пройдите", "пожалуйста"], answer: "Пройдите пожалуйста", acceptableAnswers: ["Пройдите, пожалуйста", "Пожалуйста, пройдите"], explanation: "Пройдите, пожалуйста.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "хорошо / всё / У / меня", instruction: "Соберите ответ", options: ["У", "меня", "всё", "хорошо"], answer: "У меня всё хорошо", acceptableAnswers: ["У меня все хорошо", "у меня все хорошо"], explanation: "У меня всё хорошо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "кафе / Где", instruction: "Соберите вопрос", options: ["Где", "кафе"], answer: "Где кафе", acceptableAnswers: ["Где кафе?"], explanation: "Где кафе?", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "нормально / Спасибо", instruction: "Соберите короткий ответ", options: ["Нормально", "спасибо"], answer: "Нормально спасибо", acceptableAnswers: ["Нормально, спасибо"], explanation: "Нормально, спасибо.", grammarTopic: g1, vocabTopic: v1 },
    { type: "sentence_building", question: "вечер / Добрый", instruction: "Соберите приветствие", options: ["Добрый", "вечер"], answer: "Добрый вечер", acceptableAnswers: ["Добрый вечер!"], explanation: "Добрый вечер.", grammarTopic: g1, vocabTopic: v1 },
  ],

  "ru-ch2-introduce-yourself": [
    // MC
    { type: "multiple_choice", question: "___ студент.", instruction: "Выберите правильную модель", options: ["Я есть", "Я", "Меня", "Мне"], answer: "Я", explanation: "Связка «есть» обычно не нужна: Я студент.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "___ это? — Это мой друг.", instruction: "Вопрос о человеке", options: ["Что", "Кто", "Где", "Как"], answer: "Кто", explanation: "Кто это? — о человеке.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "___ это? — Это учебник.", instruction: "Вопрос о предмете", options: ["Кто", "Что", "Чей", "Куда"], answer: "Что", explanation: "Что это? — о предмете.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Вопрос преподавателю об имени:", instruction: "Вежливость", options: ["Как тебя зовут?", "Как вас зовут?", "Кто ты?", "Что это?"], answer: "Как вас зовут?", explanation: "К преподавателю — вас.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "— Меня зовут Омар. — ___!", instruction: "Реакция при знакомстве", options: ["До свидания", "Очень приятно", "Мой учебник", "Добрый"], answer: "Очень приятно", explanation: "Очень приятно! = nice to meet you.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Я ___ Египта.", instruction: "Страна", options: ["в", "из", "на", "с"], answer: "из", explanation: "Я из + страна.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Она ___.", instruction: "Женская форма", options: ["студент", "студентка", "студенты", "студентом"], answer: "студентка", explanation: "Она — студентка.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Это ___ друг.", instruction: "Указание на человека", options: ["кто", "мой", "где", "как"], answer: "мой", explanation: "Это мой друг.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Мы в одной ___.", instruction: "Университетская лексика", options: ["группе", "группы", "группа", "группой"], answer: "группе", explanation: "В группе (уже знакомая модель «в + месте»).", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Как сказать: This is Anna.", instruction: "Модель «это»", options: ["Кто Анна", "Это Анна", "Анна есть", "Мне Анна"], answer: "Это Анна", explanation: "Это + имя.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "Новая студентка говорит о себе:", instruction: "Выберите фразу", options: ["Я есть новая", "Я новая студентка", "Меня новая студентка", "Мне студентка"], answer: "Я новая студентка", explanation: "Я + кто я.", grammarTopic: g2, vocabTopic: v2 },
    { type: "multiple_choice", question: "— Это преподаватель. — ___ это?", instruction: "Уточняющий вопрос (уже знаем ответ-тип)", options: ["Что", "Кто", "Где", "Сколько"], answer: "Кто", explanation: "О человеке снова «кто».", grammarTopic: g2, vocabTopic: v2 },

    // fill
    { type: "fill_blank", question: "Меня ___ Мария.", instruction: "Вставьте глагол", answer: "зовут", acceptableAnswers: ["Зовут"], explanation: "Меня зовут + имя.", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "___ это? — Это учебник.", instruction: "что / кто", answer: "Что", acceptableAnswers: ["что"], explanation: "Что это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "___ это? — Это мой друг.", instruction: "кто / что", answer: "Кто", acceptableAnswers: ["кто"], explanation: "Кто это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Я ___ Бразилии.", instruction: "из / в", answer: "из", acceptableAnswers: ["Из"], explanation: "Я из…", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Как ___ зовут? (к преподавателю)", instruction: "вас / тебя", answer: "вас", acceptableAnswers: ["Вас"], explanation: "Как вас зовут?", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Как ___ зовут? (к однокурснику)", instruction: "тебя / вас", answer: "тебя", acceptableAnswers: ["Тебя"], explanation: "Как тебя зовут?", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "___ Анна.", instruction: "Это / Кто", answer: "Это", acceptableAnswers: ["это"], explanation: "Это Анна.", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Я ___.", instruction: "студент (о мужчине)", answer: "студент", acceptableAnswers: ["Студент"], explanation: "Я студент.", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Она ___.", instruction: "студентка", answer: "студентка", acceptableAnswers: ["Студентка"], explanation: "Она студентка.", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Очень ___!", instruction: "приятно / привет", answer: "приятно", acceptableAnswers: ["Приятно"], explanation: "Очень приятно!", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Это моя ___.", instruction: "подруга / друг", answer: "подруга", acceptableAnswers: ["Подруга"], explanation: "Подруга — ж. р.", grammarTopic: g2, vocabTopic: v2 },
    { type: "fill_blank", question: "Моя ___ Ли.", instruction: "фамилия / имя", answer: "фамилия", acceptableAnswers: ["Фамилия"], explanation: "Моя фамилия…", grammarTopic: g2, vocabTopic: v2 },

    // translation
    { type: "translation", question: "My name is Anna.", instruction: "Переведите на русский", answer: "Меня зовут Анна", acceptableAnswers: ["меня зовут Анна", "Меня зовут Анна."], explanation: "Меня зовут…", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "I am a student.", instruction: "Переведите на русский (м. р.)", answer: "Я студент", acceptableAnswers: ["я студент"], explanation: "Я студент.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "I am from China.", instruction: "Переведите на русский", answer: "Я из Китая", acceptableAnswers: ["я из Китая"], explanation: "Я из Китая.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "Who is this?", instruction: "Переведите на русский", answer: "Кто это?", acceptableAnswers: ["Кто это", "кто это?"], explanation: "Кто это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "What is this?", instruction: "Переведите на русский", answer: "Что это?", acceptableAnswers: ["Что это", "что это?"], explanation: "Что это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "This is my friend.", instruction: "Переведите на русский", answer: "Это мой друг", acceptableAnswers: ["это мой друг", "Это мой друг."], explanation: "Это мой друг.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "Nice to meet you!", instruction: "Переведите на русский", answer: "Очень приятно!", acceptableAnswers: ["Очень приятно", "очень приятно!"], explanation: "Очень приятно!", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "What is your name? (formal)", instruction: "Переведите на русский", answer: "Как вас зовут?", acceptableAnswers: ["Как вас зовут", "как вас зовут?"], explanation: "Как вас зовут?", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "She is a student.", instruction: "Переведите на русский", answer: "Она студентка", acceptableAnswers: ["она студентка"], explanation: "Она студентка.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "This is the teacher.", instruction: "Переведите на русский", answer: "Это преподаватель", acceptableAnswers: ["это преподаватель", "Это преподаватель."], explanation: "Это преподаватель.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "I am from Turkey.", instruction: "Переведите на русский", answer: "Я из Турции", acceptableAnswers: ["я из Турции"], explanation: "Я из Турции.", grammarTopic: g2, vocabTopic: v2 },
    { type: "translation", question: "This is my friend (female).", instruction: "Переведите на русский", answer: "Это моя подруга", acceptableAnswers: ["это моя подруга"], explanation: "Это моя подруга.", grammarTopic: g2, vocabTopic: v2 },

    // error_correction
    { type: "error_correction", question: "Я есть студент.", instruction: "Исправьте типичную ошибку", answer: "Я студент.", acceptableAnswers: ["Я студент"], explanation: "Без «есть» в настоящем.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Что это? — Это мой друг Пётр.", instruction: "Исправьте вопрос (о человеке)", answer: "Кто это? — Это мой друг Пётр.", acceptableAnswers: ["Кто это? — Это мой друг Пётр", "Кто это? — Это мой друг Петр.", "кто это? — Это мой друг Петр."], explanation: "О человеке — кто.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Кто это? — Это ручка.", instruction: "Исправьте вопрос (о предмете)", answer: "Что это? — Это ручка.", acceptableAnswers: ["Что это? — Это ручка"], explanation: "О предмете — что.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Меня зовут есть Анна.", instruction: "Уберите лишнее", answer: "Меня зовут Анна.", acceptableAnswers: ["Меня зовут Анна"], explanation: "Меня зовут + имя.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Как тебя зовут? (к декану)", instruction: "Сделайте вопрос вежливым", answer: "Как вас зовут?", acceptableAnswers: ["Как вас зовут"], explanation: "К декану — вас.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Я из Китай.", instruction: "Исправьте форму страны (частая модель)", answer: "Я из Китая.", acceptableAnswers: ["Я из Китая"], explanation: "Я из Китая.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Она студент.", instruction: "Исправьте род", answer: "Она студентка.", acceptableAnswers: ["Она студентка"], explanation: "Она — студентка.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Это есть преподаватель.", instruction: "Исправьте фразу", answer: "Это преподаватель.", acceptableAnswers: ["Это преподаватель"], explanation: "Это + кто/что.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Мне зовут Карлос.", instruction: "Исправьте местоимение", answer: "Меня зовут Карлос.", acceptableAnswers: ["Меня зовут Карлос"], explanation: "Меня зовут…", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Очень приятный!", instruction: "Исправьте формулу знакомства", answer: "Очень приятно!", acceptableAnswers: ["Очень приятно"], explanation: "Очень приятно!", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Это мой подруга.", instruction: "Исправьте согласование", answer: "Это моя подруга.", acceptableAnswers: ["Это моя подруга"], explanation: "Подруга → моя.", grammarTopic: g2, vocabTopic: v2 },
    { type: "error_correction", question: "Я студентка. Я новый.", instruction: "Исправьте согласование", answer: "Я студентка. Я новая.", acceptableAnswers: ["Я студентка. Я новая"], explanation: "Студентка → новая.", grammarTopic: g2, vocabTopic: v2 },

    // sentence building
    { type: "sentence_building", question: "зовут / Меня / Анна", instruction: "Соберите фразу", options: ["Меня", "зовут", "Анна"], answer: "Меня зовут Анна", explanation: "Меня зовут Анна.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "студент / Я", instruction: "Соберите фразу", options: ["Я", "студент"], answer: "Я студент", explanation: "Я студент.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "Китая / из / Я", instruction: "Соберите фразу", options: ["Я", "из", "Китая"], answer: "Я из Китая", explanation: "Я из Китая.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "это / Кто", instruction: "Соберите вопрос", options: ["Кто", "это"], answer: "Кто это", acceptableAnswers: ["Кто это?"], explanation: "Кто это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "это / Что", instruction: "Соберите вопрос", options: ["Что", "это"], answer: "Что это", acceptableAnswers: ["Что это?"], explanation: "Что это?", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "друг / мой / Это", instruction: "Соберите фразу", options: ["Это", "мой", "друг"], answer: "Это мой друг", explanation: "Это мой друг.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "вас / зовут / Как", instruction: "Соберите вопрос", options: ["Как", "вас", "зовут"], answer: "Как вас зовут", acceptableAnswers: ["Как вас зовут?"], explanation: "Как вас зовут?", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "приятно / Очень", instruction: "Соберите реакцию", options: ["Очень", "приятно"], answer: "Очень приятно", acceptableAnswers: ["Очень приятно!"], explanation: "Очень приятно!", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "студентка / Она", instruction: "Соберите фразу", options: ["Она", "студентка"], answer: "Она студентка", explanation: "Она студентка.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "преподаватель / Это", instruction: "Соберите фразу", options: ["Это", "преподаватель"], answer: "Это преподаватель", explanation: "Это преподаватель.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "подруга / моя / Это", instruction: "Соберите фразу", options: ["Это", "моя", "подруга"], answer: "Это моя подруга", explanation: "Это моя подруга.", grammarTopic: g2, vocabTopic: v2 },
    { type: "sentence_building", question: "Турции / из / Я", instruction: "Соберите фразу", options: ["Я", "из", "Турции"], answer: "Я из Турции", explanation: "Я из Турции.", grammarTopic: g2, vocabTopic: v2 },
  ],

  "ru-ch3-noun-gender": [
    // MC
    { type: "multiple_choice", question: "___ книга.", instruction: "Согласование", options: ["Мой", "Моя", "Моё", "Мои"], answer: "Моя", explanation: "Книга — ж. р. → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "___ учебник.", instruction: "Согласование", options: ["Мой", "Моя", "Моё", "Мои"], answer: "Мой", explanation: "Учебник — м. р. → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "___ окно.", instruction: "Согласование", options: ["Мой", "Моя", "Моё", "Мои"], answer: "Моё", explanation: "Окно — ср. р. → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Слово «стол» — род?", instruction: "Определите род", options: ["женский", "мужской", "средний"], answer: "мужской", explanation: "Стол — мужской род.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Слово «тетрадь» — род?", instruction: "Определите род", options: ["мужской", "женский", "средний"], answer: "женский", explanation: "Тетрадь — женский род (запоминаем с «моя»).", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Слово «задание» — род?", instruction: "Определите род", options: ["мужской", "женский", "средний"], answer: "средний", explanation: "-е → часто средний род.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Где ___ ручка?", instruction: "ваша / ваш", options: ["ваш", "ваша", "ваше", "ваши"], answer: "ваша", explanation: "Ручка — ж. р. → ваша.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Это ___ словарь.", instruction: "мой / моя", options: ["мой", "моя", "моё", "мои"], answer: "мой", explanation: "Словарь — м. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Какое слово среднего рода?", instruction: "Выберите", options: ["ручка", "доска", "окно", "книга"], answer: "окно", explanation: "Окно — среднее.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "Какое слово женского рода?", instruction: "Выберите", options: ["стол", "стул", "аудитория", "учебник"], answer: "аудитория", explanation: "Аудитория — ж. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "— Это ваш учебник? — Нет. ___ учебник здесь.", instruction: "Контекст диалога", options: ["Моя", "Мой", "Моё", "Мои"], answer: "Мой", explanation: "Учебник → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "multiple_choice", question: "___ упражнение на странице 5.", instruction: "Согласование", options: ["Мой", "Моя", "Моё", "Мои"], answer: "Моё", explanation: "Упражнение — ср. р.", grammarTopic: g3, vocabTopic: v3 },

    // fill
    { type: "fill_blank", question: "___ окно открыто.", instruction: "мой / моя / моё", answer: "Моё", acceptableAnswers: ["моё", "Мое", "мое"], explanation: "Окно → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Где ___ тетрадь?", instruction: "моя / мой", answer: "моя", acceptableAnswers: ["Моя"], explanation: "Тетрадь → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Это ___ стол.", instruction: "мой / моя", answer: "мой", acceptableAnswers: ["Мой"], explanation: "Стол → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "___ ручка под учебником.", instruction: "Моя / Мой", answer: "Моя", acceptableAnswers: ["моя"], explanation: "Ручка → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Откройте ___, пожалуйста.", instruction: "окно (слово)", answer: "окно", acceptableAnswers: ["Окно"], explanation: "Окно.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Смотрите на ___.", instruction: "доска / доску (как в диалоге занятия)", answer: "доску", acceptableAnswers: ["доску", "Доску"], explanation: "Смотреть на доску — частая учебная фраза.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Где ___ задание?", instruction: "моё / моя", answer: "моё", acceptableAnswers: ["Моё", "мое", "Мое"], explanation: "Задание → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Это ___ стул.", instruction: "мой / моя", answer: "мой", acceptableAnswers: ["Мой"], explanation: "Стул → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Мы в ___ 12.", instruction: "аудитории / аудитория", answer: "аудитории", acceptableAnswers: ["Аудитории"], explanation: "В аудитории 12.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "___ словарь на столе.", instruction: "Мой / Моя", answer: "Мой", acceptableAnswers: ["мой"], explanation: "Словарь → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "Это ___ дверь?", instruction: "ваша / ваш", answer: "ваша", acceptableAnswers: ["Ваша"], explanation: "Дверь — ж. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "fill_blank", question: "___ книга здесь.", instruction: "Моя / Мой", answer: "Моя", acceptableAnswers: ["моя"], explanation: "Книга → моя.", grammarTopic: g3, vocabTopic: v3 },

    // translation
    { type: "translation", question: "my notebook", instruction: "Переведите (ж. р.)", answer: "моя тетрадь", acceptableAnswers: ["Моя тетрадь"], explanation: "Тетрадь — ж. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my textbook", instruction: "Переведите (м. р.)", answer: "мой учебник", acceptableAnswers: ["Мой учебник"], explanation: "Учебник — м. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my window", instruction: "Переведите (ср. р.)", answer: "моё окно", acceptableAnswers: ["мое окно", "Моё окно", "Мое окно"], explanation: "Окно — ср. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my pen", instruction: "Переведите", answer: "моя ручка", acceptableAnswers: ["Моя ручка"], explanation: "Ручка — ж. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "This is my desk.", instruction: "Переведите", answer: "Это мой стол", acceptableAnswers: ["это мой стол"], explanation: "Стол — м. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "Where is my notebook?", instruction: "Переведите", answer: "Где моя тетрадь?", acceptableAnswers: ["Где моя тетрадь", "где моя тетрадь?"], explanation: "Где моя тетрадь?", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "Open the window, please.", instruction: "Переведите", answer: "Откройте окно, пожалуйста", acceptableAnswers: ["Откройте окно пожалуйста", "откройте окно, пожалуйста"], explanation: "Учебная просьба.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my assignment", instruction: "Переведите (ср. р.)", answer: "моё задание", acceptableAnswers: ["мое задание", "Моё задание", "Мое задание"], explanation: "Задание — ср. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "Is this your textbook? (formal)", instruction: "Переведите", answer: "Это ваш учебник?", acceptableAnswers: ["Это ваш учебник", "это ваш учебник?"], explanation: "Ваш — к «вы».", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "Look at the board.", instruction: "Переведите", answer: "Смотрите на доску", acceptableAnswers: ["Смотрите на доску.", "смотрите на доску"], explanation: "Смотрите на доску.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my dictionary", instruction: "Переведите", answer: "мой словарь", acceptableAnswers: ["Мой словарь"], explanation: "Словарь — м. р.", grammarTopic: g3, vocabTopic: v3 },
    { type: "translation", question: "my chair", instruction: "Переведите", answer: "мой стул", acceptableAnswers: ["Мой стул"], explanation: "Стул — м. р.", grammarTopic: g3, vocabTopic: v3 },

    // error_correction
    { type: "error_correction", question: "Мой тетрадь на столе.", instruction: "Исправьте согласование", answer: "Моя тетрадь на столе.", acceptableAnswers: ["Моя тетрадь на столе"], explanation: "Тетрадь → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Моя учебник здесь.", instruction: "Исправьте согласование", answer: "Мой учебник здесь.", acceptableAnswers: ["Мой учебник здесь"], explanation: "Учебник → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Моя окно открыто.", instruction: "Исправьте согласование", answer: "Моё окно открыто.", acceptableAnswers: ["Мое окно открыто", "Моё окно открыто", "Мое окно открыто.", "мое окно открыто."], explanation: "Окно → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Где ваш ручка?", instruction: "Исправьте согласование", answer: "Где ваша ручка?", acceptableAnswers: ["Где ваша ручка"], explanation: "Ручка → ваша.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Это моя словарь.", instruction: "Исправьте согласование", answer: "Это мой словарь.", acceptableAnswers: ["Это мой словарь"], explanation: "Словарь → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Мой задание на странице 3.", instruction: "Исправьте согласование", answer: "Моё задание на странице 3.", acceptableAnswers: ["Мое задание на странице 3", "Моё задание на странице 3", "Мое задание на странице 3.", "мое задание на странице 3."], explanation: "Задание → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Мой книга интересная.", instruction: "Исправьте согласование", answer: "Моя книга интересная.", acceptableAnswers: ["Моя книга интересная"], explanation: "Книга → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Ваш аудитория большая.", instruction: "Исправьте согласование", answer: "Ваша аудитория большая.", acceptableAnswers: ["Ваша аудитория большая"], explanation: "Аудитория → ваша.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Моя стул у двери.", instruction: "Исправьте согласование", answer: "Мой стул у двери.", acceptableAnswers: ["Мой стул у двери"], explanation: "Стул → мой.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Мой дверь закрыта.", instruction: "Исправьте согласование", answer: "Моя дверь закрыта.", acceptableAnswers: ["Моя дверь закрыта"], explanation: "Дверь → моя.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Моя упражнение лёгкое.", instruction: "Исправьте согласование", answer: "Моё упражнение лёгкое.", acceptableAnswers: ["Мое упражнение легкое", "Моё упражнение легкое", "Мое упражнение лёгкое", "Мое упражнение легкое.", "мое упражнение легкое."], explanation: "Упражнение → моё.", grammarTopic: g3, vocabTopic: v3 },
    { type: "error_correction", question: "Это ваш тетрадь?", instruction: "Исправьте согласование", answer: "Это ваша тетрадь?", acceptableAnswers: ["Это ваша тетрадь"], explanation: "Тетрадь → ваша.", grammarTopic: g3, vocabTopic: v3 },

    // sentence building
    { type: "sentence_building", question: "учебник / мой / Это", instruction: "Соберите фразу", options: ["Это", "мой", "учебник"], answer: "Это мой учебник", explanation: "Это мой учебник.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "тетрадь / моя / Это", instruction: "Соберите фразу", options: ["Это", "моя", "тетрадь"], answer: "Это моя тетрадь", explanation: "Это моя тетрадь.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "окно / моё / Это", instruction: "Соберите фразу", options: ["Это", "моё", "окно"], answer: "Это моё окно", acceptableAnswers: ["Это мое окно", "это мое окно"], explanation: "Это моё окно.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "тетрадь / моя / Где", instruction: "Соберите вопрос", options: ["Где", "моя", "тетрадь"], answer: "Где моя тетрадь", acceptableAnswers: ["Где моя тетрадь?"], explanation: "Где моя тетрадь?", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "учебник / ваш / Это", instruction: "Соберите вопрос", options: ["Это", "ваш", "учебник"], answer: "Это ваш учебник", acceptableAnswers: ["Это ваш учебник?"], explanation: "Это ваш учебник?", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "ручка / моя / Это", instruction: "Соберите фразу", options: ["Это", "моя", "ручка"], answer: "Это моя ручка", explanation: "Это моя ручка.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "задание / моё / Это", instruction: "Соберите фразу", options: ["Это", "моё", "задание"], answer: "Это моё задание", acceptableAnswers: ["Это мое задание", "это мое задание"], explanation: "Это моё задание.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "стол / мой / Это", instruction: "Соберите фразу", options: ["Это", "мой", "стол"], answer: "Это мой стол", explanation: "Это мой стол.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "пожалуйста / окно / Откройте", instruction: "Соберите просьбу", options: ["Откройте", "окно", "пожалуйста"], answer: "Откройте окно пожалуйста", acceptableAnswers: ["Откройте окно, пожалуйста"], explanation: "Откройте окно, пожалуйста.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "доску / на / Смотрите", instruction: "Соберите фразу преподавателя", options: ["Смотрите", "на", "доску"], answer: "Смотрите на доску", explanation: "Смотрите на доску.", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "словарь / мой / Где", instruction: "Соберите вопрос", options: ["Где", "мой", "словарь"], answer: "Где мой словарь", acceptableAnswers: ["Где мой словарь?"], explanation: "Где мой словарь?", grammarTopic: g3, vocabTopic: v3 },
    { type: "sentence_building", question: "ручка / ваша / Где", instruction: "Соберите вопрос", options: ["Где", "ваша", "ручка"], answer: "Где ваша ручка", acceptableAnswers: ["Где ваша ручка?"], explanation: "Где ваша ручка?", grammarTopic: g3, vocabTopic: v3 },
  ],
};
