import type { StaticExercise } from "@/types";
import { withExerciseIds } from "@/lib/exercise-bank";
import { getRuChapter } from "./chapters";
import { RUSSIAN_A1_CH1_3_EXERCISES } from "./exercises-a1-ch1-3";
import { RUSSIAN_A1_CH4_8_EXERCISES } from "./exercises-a1-ch4-8";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

/**
 * RKI exercise banks. A1 ch1–8 are deepened; ch9+ are seeds until their quality pass.
 */
export const RUSSIAN_EXERCISES: Record<string, Draft[]> = {
  ...RUSSIAN_A1_CH1_3_EXERCISES,
  ...RUSSIAN_A1_CH4_8_EXERCISES,
  "ru-ch9-past-tense": [
    { type: "fill_blank", question: "Вчера он ___ дома.", instruction: "был / была", answer: "был", acceptableAnswers: ["Был"], explanation: "Он → был." },
    { type: "multiple_choice", question: "Она ___ в библиотеке.", instruction: "Прошедшее время", options: ["был", "была", "было", "были"], answer: "была", explanation: "Она → была." },
    { type: "translation", question: "We were at the café.", instruction: "Переведите", answer: "Мы были в кафе", acceptableAnswers: ["мы были в кафе"], explanation: "Мы → были." },
    { type: "fill_blank", question: "Я ___ (читать) текст час.", instruction: "Прошедшее (род говорящего)", answer: "читал", acceptableAnswers: ["Читал", "читала", "Читала"], explanation: "Я → читал / читала (род говорящего)." },
    { type: "error_correction", question: "Она был в аудитории.", instruction: "Исправьте род", answer: "Она была в аудитории.", acceptableAnswers: ["Она была в аудитории"], explanation: "Она → была." },
  ],
  "ru-ch10-future": [
    { type: "multiple_choice", question: "Я ___ читать вечером.", instruction: "Составное будущее", options: ["буду", "будешь", "будет", "будут"], answer: "буду", explanation: "Я буду + инфинитив." },
    { type: "fill_blank", question: "Мы ___ жить в общежитии.", instruction: "буду / будем", answer: "будем", acceptableAnswers: ["Будем"], explanation: "Мы → будем." },
    { type: "translation", question: "They will work tomorrow.", instruction: "Переведите", answer: "Они будут работать завтра", acceptableAnswers: ["они будут работать завтра"], explanation: "Они будут + инфинитив." },
    { type: "multiple_choice", question: "Я ___ текст завтра. (результат)", instruction: "Совершенный вид", options: ["буду читать", "прочитаю", "читал", "читаю"], answer: "прочитаю", explanation: "Результат → часто СВ: прочитаю." },
    { type: "fill_blank", question: "Он ___ завтра.", instruction: "приедет / будет ехать (однократный результат)", answer: "приедет", acceptableAnswers: ["Приедет"], explanation: "Приедет = arrive (pf.)." },
  ],
  "ru-ch11-genitive": [
    { type: "multiple_choice", question: "Нет ___.", instruction: "Родительный падеж", options: ["время", "времени", "временем", "времена"], answer: "времени", explanation: "Нет + род. п.: времени." },
    { type: "fill_blank", question: "Много ___.", instruction: "студентов / студенты", answer: "студентов", acceptableAnswers: ["Студентов"], explanation: "Много + род. п. мн. ч." },
    { type: "translation", question: "There is no ticket.", instruction: "Переведите", answer: "Нет билета", acceptableAnswers: ["нет билета"], explanation: "Нет + род. п." },
    { type: "multiple_choice", question: "Сумка ___.", instruction: "Принадлежность", options: ["друг", "друга", "другу", "другом"], answer: "друга", explanation: "Сумка друга — род. п." },
    { type: "error_correction", question: "Нет книга.", instruction: "Исправьте падеж", answer: "Нет книги.", acceptableAnswers: ["Нет книги"], explanation: "Книга → книги после нет." },
  ],
  "ru-ch12-dative": [
    { type: "multiple_choice", question: "___ нравится русский язык.", instruction: "Дательный падеж", options: ["Я", "Мне", "Меня", "Мной"], answer: "Мне", explanation: "Мне нравится…" },
    { type: "fill_blank", question: "Я звоню ___.", instruction: "друг / другу", answer: "другу", acceptableAnswers: ["Другу"], explanation: "Звонить кому? → другу." },
    { type: "translation", question: "Help me, please.", instruction: "Переведите", answer: "Помогите мне, пожалуйста", acceptableAnswers: ["Помогите мне пожалуйста", "помогите мне, пожалуйста"], explanation: "Помогать + дат. п." },
    { type: "multiple_choice", question: "Преподаватель объясняет ___.", instruction: "Кому?", options: ["студенты", "студентов", "студентам", "студентами"], answer: "студентам", explanation: "Объяснять кому? → студентам." },
    { type: "fill_blank", question: "___ нравятся эти курсы.", instruction: "Ей / Её", answer: "Ей", acceptableAnswers: ["ей"], explanation: "Ей нравятся…" },
  ],
  "ru-ch13-instrumental": [
    { type: "multiple_choice", question: "Он работает ___.", instruction: "Творительный падеж", options: ["врач", "врача", "врачу", "врачом"], answer: "врачом", explanation: "Работать кем? → врачом." },
    { type: "fill_blank", question: "Я пишу ___.", instruction: "ручка / ручкой", answer: "ручкой", acceptableAnswers: ["Ручкой"], explanation: "Чем? → ручкой." },
    { type: "translation", question: "I live with a friend.", instruction: "Переведите", answer: "Я живу с другом", acceptableAnswers: ["я живу с другом"], explanation: "С + твор. п." },
    { type: "multiple_choice", question: "Предлог «с» обычно требует:", instruction: "Падеж", options: ["родительный", "дательный", "творительный", "винительный"], answer: "творительный", explanation: "С кем? с чем? — твор. п." },
    { type: "error_correction", question: "Она стала врач.", instruction: "Исправьте падеж", answer: "Она стала врачом.", acceptableAnswers: ["Она стала врачом"], explanation: "Стать кем? → врачом." },
  ],
  "ru-ch14-aspect-intro": [
    { type: "multiple_choice", question: "Вчера я долго ___ книгу. (процесс)", instruction: "Выберите вид", options: ["прочитал", "читал", "прочитаю", "читаю"], answer: "читал", explanation: "Процесс → несов. вид." },
    { type: "fill_blank", question: "Я уже ___ упражнение. (результат)", instruction: "сделал / делал", answer: "сделал", acceptableAnswers: ["Сделал"], explanation: "Результат → сов. вид." },
    { type: "translation", question: "She wrote the essay. (completed)", instruction: "Переведите (СВ)", answer: "Она написала сочинение", acceptableAnswers: ["она написала сочинение"], explanation: "Написать = СВ." },
    { type: "multiple_choice", question: "Пара: писать — ?", instruction: "Совершенный вид", options: ["пишу", "написать", "писал", "писание"], answer: "написать", explanation: "Писать (НСВ) — написать (СВ)." },
    { type: "error_correction", question: "Вчера я два часа сделал домашнее задание без перерыва, но не закончил.", instruction: "Логика вида (процесс)", answer: "Вчера я два часа делал домашнее задание без перерыва, но не закончил.", acceptableAnswers: ["Вчера я два часа делал домашнее задание без перерыва, но не закончил"], explanation: "Длительный процесс без результата → делал (НСВ)." },
  ],
  "ru-ch15-motion-basic": [
    { type: "multiple_choice", question: "Сейчас я ___ в университет пешком.", instruction: "Глагол движения", options: ["хожу", "иду", "езжу", "ездил"], answer: "иду", explanation: "Сейчас, одно направление пешком → иду." },
    { type: "fill_blank", question: "Я каждый день ___ в университет.", instruction: "хожу / иду", answer: "хожу", acceptableAnswers: ["Хожу"], explanation: "Регулярность → хожу." },
    { type: "translation", question: "We are going by bus.", instruction: "Переведите (сейчас)", answer: "Мы едем на автобусе", acceptableAnswers: ["мы едем на автобусе"], explanation: "Ехать — транспорт, сейчас." },
    { type: "multiple_choice", question: "Они часто ___ в центр на метро.", instruction: "Регулярность", options: ["едут", "ездят", "идут", "поехали"], answer: "ездят", explanation: "Регулярно на транспорте → ездят." },
    { type: "error_correction", question: "Сейчас я хожу в магазин.", instruction: "Исправьте глагол движения", answer: "Сейчас я иду в магазин.", acceptableAnswers: ["Сейчас я иду в магазин"], explanation: "Сейчас → иду." },
  ],
  "ru-ch16-dorm-shops": [
    { type: "multiple_choice", question: "У меня нет ___.", instruction: "Родительный", options: ["ключ", "ключа", "ключу", "ключом"], answer: "ключа", explanation: "Нет ключа." },
    { type: "fill_blank", question: "Где ближайший ___?", instruction: "магазин", answer: "магазин", acceptableAnswers: ["Магазин"], explanation: "Магазин = shop." },
    { type: "translation", question: "I need a pharmacy.", instruction: "Переведите", answer: "Мне нужна аптека", acceptableAnswers: ["мне нужна аптека", "Мне нужна аптека."], explanation: "Мне нужна + сущ." },
    { type: "sentence_building", question: "в / живу / Я / общежитии", instruction: "Соберите фразу", options: ["Я", "живу", "в", "общежитии"], answer: "Я живу в общежитии", acceptableAnswers: ["я живу в общежитии"], explanation: "В общежитии." },
    { type: "multiple_choice", question: "Я иду ___ банк.", instruction: "Предлог направления", options: ["на", "в", "с", "у"], answer: "в", explanation: "Идти в банк (направление)." },
  ],
  "ru-ch17-cases-review": [
    { type: "multiple_choice", question: "Я интересуюсь ___.", instruction: "Управление", options: ["история", "истории", "историей", "историю"], answer: "историей", explanation: "Интересоваться + твор. п." },
    { type: "fill_blank", question: "Помогите ___, пожалуйста.", instruction: "мне / меня", answer: "мне", acceptableAnswers: ["Мне"], explanation: "Помогать + дат. п." },
    { type: "translation", question: "There is no time.", instruction: "Переведите", answer: "Нет времени", acceptableAnswers: ["нет времени"], explanation: "Нет + род. п." },
    { type: "multiple_choice", question: "Мы говорим ___ проекте.", instruction: "о / об", options: ["о", "об", "про", "на"], answer: "о", explanation: "О проекте (согласная)." },
    { type: "error_correction", question: "Нет автобус.", instruction: "Исправьте падеж после «нет»", answer: "Нет автобуса.", acceptableAnswers: ["Нет автобуса", "нет автобуса."], explanation: "Нет + род. п.: автобуса." },
  ],
  "ru-ch18-aspect-system": [
    { type: "multiple_choice", question: "Он долго ___ к экзамену.", instruction: "Процесс", options: ["подготовился", "готовился", "подготовится", "готовится"], answer: "готовился", explanation: "Долго → НСВ." },
    { type: "fill_blank", question: "Он уже ___ к экзамену.", instruction: "Результат", answer: "подготовился", acceptableAnswers: ["Подготовился"], explanation: "Уже + результат → СВ." },
    { type: "translation", question: "I will prepare every day.", instruction: "НСВ будущее", answer: "Я буду готовиться каждый день", acceptableAnswers: ["я буду готовиться каждый день"], explanation: "Буду + НСВ." },
    { type: "multiple_choice", question: "В рассказе ключевое событие чаще:", instruction: "Вид", options: ["НСВ", "СВ", "только настоящее", "инфинитив"], answer: "СВ", explanation: "События сюжета часто СВ." },
    { type: "fill_blank", question: "Что ___ вчера?", instruction: "случилось / случалось", answer: "случилось", acceptableAnswers: ["Случилось"], explanation: "Однократное событие → СВ." },
  ],
  "ru-ch19-motion-prefixes": [
    { type: "multiple_choice", question: "Друг уже ___.", instruction: "Прибытие", options: ["уехал", "приехал", "ездил", "ходил"], answer: "приехал", explanation: "При- = прибытие." },
    { type: "fill_blank", question: "Я ___ в деканат после пары.", instruction: "пойду / хожу", answer: "пойду", acceptableAnswers: ["Пойду"], explanation: "По- = начало движения / решение идти." },
    { type: "translation", question: "She left early.", instruction: "Переведите (уйти)", answer: "Она ушла рано", acceptableAnswers: ["она ушла рано", "Она ушла раньше"], explanation: "У- = убытие." },
    { type: "multiple_choice", question: "___, пожалуйста! (войти в кабинет)", instruction: "Приставка входа", options: ["Уйдите", "Войдите", "Приезжайте", "Ходите"], answer: "Войдите", explanation: "Во- = движение внутрь; войдите." },
    { type: "error_correction", question: "Он уже уехал сюда из аэропорта час назад и сейчас здесь.", instruction: "Логика приставки", answer: "Он уже приехал сюда из аэропорта час назад и сейчас здесь.", acceptableAnswers: ["Он уже приехал сюда из аэропорта час назад и сейчас здесь"], explanation: "Прибытие сюда → приехал." },
  ],
  "ru-ch20-complex-sentences": [
    { type: "multiple_choice", question: "Я опоздал, ___ автобус не пришёл.", instruction: "Союз причины", options: ["чтобы", "потому что", "который", "если"], answer: "потому что", explanation: "Причина → потому что." },
    { type: "fill_blank", question: "Я приехал, ___ учиться.", instruction: "чтобы / потому что", answer: "чтобы", acceptableAnswers: ["Чтобы"], explanation: "Цель → чтобы." },
    { type: "translation", question: "If I have time, I will call.", instruction: "Переведите", answer: "Если будет время, я позвоню", acceptableAnswers: ["Если у меня будет время, я позвоню", "если будет время, я позвоню"], explanation: "Если + условие." },
    { type: "multiple_choice", question: "Это преподаватель, ___ ведёт грамматику.", instruction: "Местоимение", options: ["что", "который", "чтобы", "как"], answer: "который", explanation: "Который связывает определение." },
    { type: "sentence_building", question: "потому что / устал / много / Я / учился", instruction: "Соберите предложение", options: ["Я", "устал", "потому что", "много", "учился"], answer: "Я устал, потому что много учился", acceptableAnswers: ["Я устал потому что много учился"], explanation: "Причина с потому что." },
  ],
  "ru-ch21-narration-cohesion": [
    { type: "multiple_choice", question: "___ я прочитал текст, потом мы обсудили тему.", instruction: "Маркер порядка", options: ["Наконец", "Сначала", "В итоге", "Например"], answer: "Сначала", explanation: "Сначала = first." },
    { type: "fill_blank", question: "___, я понял правило.", instruction: "наконец / сначала", answer: "Наконец", acceptableAnswers: ["наконец"], explanation: "Наконец = finally." },
    { type: "translation", question: "As a result, the exam went well.", instruction: "Переведите", answer: "В итоге экзамен прошёл хорошо", acceptableAnswers: ["В итоге экзамен прошел хорошо", "в итоге экзамен прошёл хорошо", "в итоге экзамен прошел хорошо"], explanation: "В итоге…" },
    { type: "multiple_choice", question: "Какой порядок типичен для рассказа?", instruction: "Структура", options: ["итог → детали без связи", "сначала → затем → в итоге", "только вопросы", "только инфинитивы"], answer: "сначала → затем → в итоге", explanation: "Маркеры порядка связывают текст." },
    { type: "fill_blank", question: "Сначала кофе, ___ библиотека.", instruction: "потом / который", answer: "потом", acceptableAnswers: ["затем", "Потом", "Затем"], explanation: "Потом / затем." },
  ],
  "ru-ch22-academic-social": [
    { type: "multiple_choice", question: "___, это важная тема.", instruction: "Мнение", options: ["По-моему", "Потому что", "Который", "Войдите"], answer: "По-моему", explanation: "По-моему = in my opinion." },
    { type: "fill_blank", question: "Я ___ с вами.", instruction: "согласен / согласный", answer: "согласен", acceptableAnswers: ["согласна", "Согласен", "Согласна"], explanation: "Согласен / согласна." },
    { type: "translation", question: "Could you explain again, please?", instruction: "Переведите (вежливо)", answer: "Объясните, пожалуйста, ещё раз", acceptableAnswers: ["Объясните пожалуйста ещё раз", "Объясните ещё раз, пожалуйста", "Объясните, пожалуйста, еще раз", "объясните, пожалуйста, еще раз"], explanation: "Вежливая учебная просьба." },
    { type: "sentence_building", question: "пожалуйста / Подскажите / деканат / где", instruction: "Соберите просьбу", options: ["Подскажите", "пожалуйста", "где", "деканат"], answer: "Подскажите, пожалуйста, где деканат", acceptableAnswers: ["Подскажите пожалуйста где деканат", "Подскажите, пожалуйста, где деканат?"], explanation: "Запрос информации." },
    { type: "multiple_choice", question: "Можно ___ вопрос?", instruction: "Учебная формула", options: ["задать", "задал", "задаю", "заданный"], answer: "задать", explanation: "Можно задать вопрос?" },
  ],
};

export function getRussianExercises(chapterSlug: string): StaticExercise[] {
  const chapter = getRuChapter(chapterSlug);
  const drafts = RUSSIAN_EXERCISES[chapterSlug] ?? [];
  const filtered = chapter?.exerciseTypes?.length
    ? drafts.filter((d) => chapter.exerciseTypes.includes(d.type))
    : drafts;
  // Stamp chapter topics onto seeds that omit per-item tags (adaptive profile).
  const stamped = filtered.map((d) => ({
    ...d,
    grammarTopic: d.grammarTopic ?? chapter?.grammarTopic,
    vocabTopic: d.vocabTopic ?? chapter?.vocabTopic,
  }));
  return withExerciseIds("russian", chapterSlug, stamped);
}
