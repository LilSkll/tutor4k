import type { StaticExercise } from "@/types";

type Draft = Omit<StaticExercise, "id"> & { id?: string };

const choose = "Выберите правильный вариант";
const fill = "Вставьте пропущенное слово";
const tr = "Переведите на немецкий";
const fix = "Исправьте ошибку — напишите предложение целиком";
const build = "Соберите предложение";

function mc(
  question: string,
  options: string[],
  answer: string,
  explanation: string,
): Draft {
  return { type: "multiple_choice", question, instruction: choose, options, answer, explanation };
}

function fb(
  question: string,
  answer: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "fill_blank",
    question,
    instruction: fill,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
  };
}

function tl(
  question: string,
  answer: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "translation",
    question,
    instruction: tr,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
  };
}

function ec(
  question: string,
  answer: string,
  explanation: string,
  acceptableAnswers?: string[],
): Draft {
  return {
    type: "error_correction",
    question,
    instruction: fix,
    answer,
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
    rewriteMode: "grammar_fix",
  };
}

function sb(words: string[], explanation: string, acceptableAnswers?: string[]): Draft {
  return {
    type: "sentence_building",
    question: [...words].reverse().join(" / "),
    instruction: build,
    options: words,
    answer: words.join(" "),
    ...(acceptableAnswers ? { acceptableAnswers } : {}),
    explanation,
  };
}

/** German B1 — chapters 19–26. */
export const GERMAN_B1_EXERCISES: Record<string, Draft[]> = {
  "de-ch19-case-system": [
    mc("Wegen ___ Regens bleiben wir zu Hause.", ["dem", "den", "des", "der"], "des", "wegen в письменной норме требует генитив: des Regens."),
    mc("Ich sehe ___ Lehrer im Flur.", ["der", "den", "dem", "des"], "den", "sehen + винительный: den Lehrer."),
    mc("Das ist das Büro ___ Chefs.", ["dem", "den", "des", "die"], "des", "Принадлежность: генитив des Chefs."),
    mc("Sie hilft ___ Kollegen.", ["den", "der", "dem", "des"], "dem", "helfen + дательный dem Kollegen."),
    fb("Die Tasche ___ Studentin ist rot.", "der", "Генитив женского рода: der Studentin."),
    fb("Trotz ___ Lärms arbeiten wir.", "des", "trotz + генитив: des Lärms."),
    fb("Kennst du ___ Mann dort?", "den", "kennen + винительный den."),
    fb("Wir danken ___ Eltern.", "den", "Дательный множественного числа: den Eltern."),
    tl("Это машина начальника.", "Das ist das Auto des Chefs", "Генитив мужского рода: des Chefs."),
    tl("Из-за дождя мы остаёмся дома.", "Wegen des Regens bleiben wir zu Hause", "wegen + генитив, существительное с -s.", ["Wegen des Regens bleiben wir zuhause"]),
    tl("Я вижу учителя.", "Ich sehe den Lehrer", "Винительный мужского рода: den Lehrer."),
    tl("Мы благодарим родителей.", "Wir danken den Eltern", "danken + дательный множественного числа."),
    ec("Wegen dem Regen bleiben wir zu Hause.", "Wegen des Regens bleiben wir zu Hause.", "Нормативный wegen требует генитив des Regens."),
    ec("Ich sehe der Lehrer.", "Ich sehe den Lehrer.", "sehen требует винительный den."),
    ec("Das Buch des Frau liegt hier.", "Das Buch der Frau liegt hier.", "Генитив женского рода: der Frau, без -s у существительного."),
    ec("Sie hilft den Kind.", "Sie hilft dem Kind.", "Единственное число среднего рода в дативе: dem Kind."),
    sb(["Wegen", "des", "Regens", "bleiben", "wir"], "Генитив после wegen; глагол на втором месте."),
    sb(["Das", "ist", "das", "Auto", "des", "Chefs"], "des Chefs."),
    sb(["Ich", "sehe", "den", "Lehrer"], "Винительный den."),
    sb(["Wir", "danken", "den", "Eltern"], "Дательный множественного числа."),
  ],

  "de-ch20-adj-endings": [
    mc("mit dem ___ Freund (neu)", ["neue", "neuer", "neuen", "neuem"], "neuen", "После dem слабое окончание -en."),
    mc("ein ___ Kind (klein)", ["kleiner", "kleine", "kleines", "kleinen"], "kleines", "ein + средний род: kleines."),
    mc("___ Kaffee schmeckt gut. (heiß, без артикля)", ["Heißer", "Heiße", "Heißes", "Heißen"], "Heißer", "Мужской род без артикля, именительный: -er."),
    mc("trotz des ___ Wetters (schlecht)", ["schlechte", "schlechter", "schlechtes", "schlechten"], "schlechten", "После des слабое -en: des schlechten Wetters."),
    fb("Ich sehe den ___ Film. (neu)", "neuen", "den + -en."),
    fb("Das ist eine ___ Idee. (gut)", "gute", "eine + женский род: -e."),
    fb("Wir trinken ___ Wasser. (kalt, без артикля)", "kaltes", "Средний род без артикля: -es."),
    fb("Die Meinung des ___ Kollegen ist wichtig. (nett)", "netten", "После des слабое окончание -en: des netten Kollegen."),
    tl("Новый фильм захватывающий.", "Der neue Film ist spannend", "der + слабое -e."),
    tl("Я вижу маленького ребёнка.", "Ich sehe ein kleines Kind", "Винительный среднего рода после ein: kleines."),
    tl("У нас хорошая идея.", "Wir haben eine gute Idee", "eine gute Idee."),
    tl("Несмотря на плохую погоду.", "Trotz des schlechten Wetters", "Генитив: des + прилагательное на -en + Wetters."),
    ec("Der neu Film ist spannend.", "Der neue Film ist spannend.", "После der прилагательному нужно -e."),
    ec("Ich sehe ein kleiner Kind.", "Ich sehe ein kleines Kind.", "Средний род: kleines, не kleiner."),
    ec("Wir haben eine guten Idee.", "Wir haben eine gute Idee.", "eine + именительный/винительный женского рода: gute."),
    ec("Trotz des schlecht Wetters.", "Trotz des schlechten Wetters.", "Между des и существительным стоит полная форма schlechten."),
    sb(["Der", "neue", "Film", "ist", "spannend"], "Слабое склонение после der."),
    sb(["Ich", "sehe", "ein", "kleines", "Kind"], "Смешанное склонение, средний род."),
    sb(["Wir", "haben", "eine", "gute", "Idee"], "eine gute Idee."),
    sb(["Trotz", "des", "schlechten", "Wetters"], "Генитив с прилагательным."),
  ],

  "de-ch21-relative": [
    mc("Der Mann, ___ hier wohnt, ist Arzt.", ["der", "den", "dem", "dessen"], "der", "Подлежащее придаточного — мужской род: der."),
    mc("Die Frau, ___ ich sehe, ist neu.", ["der", "die", "den", "deren"], "die", "Винительный женского рода совпадает с именительным: die."),
    mc("Das Kind, ___ ich helfe, lacht.", ["das", "dem", "den", "dessen"], "dem", "helfen требует дательный: dem."),
    mc("Der Film, ___ wir sehen, ist lang.", ["der", "den", "dem", "des"], "den", "sehen + винительный мужского рода: den."),
    fb("Die Stadt, in ___ ich wohne, ist klein.", "der", "die Stadt, место: in der."),
    fb("Der Kollege, mit ___ ich arbeite, ist nett.", "dem", "mit + дательный: mit dem."),
    fb("Das Buch, ___ auf dem Tisch liegt, gehört mir.", "das", "Подлежащее среднего рода: das."),
    fb("Der Mann, ___ Auto hier steht, ist Arzt.", "dessen", "Генитив мужского рода: dessen Auto."),
    tl("Мужчина, который здесь живёт, — врач.", "Der Mann, der hier wohnt, ist Arzt", "der — подлежащее, глагол придаточного в конце."),
    tl("Фильм, который мы смотрим, длинный.", "Der Film, den wir sehen, ist lang", "den — винительный мужского рода."),
    tl("Женщина, которой я помогаю, — учительница.", "Die Frau, der ich helfe, ist Lehrerin", "Женский род в дативе: der, не die."),
    tl("Книга, которая лежит на столе, моя.", "Das Buch, das auf dem Tisch liegt, gehört mir", "das — подлежащее, liegt в конце придаточного."),
    ec("Der Mann, den hier wohnt, ist Arzt.", "Der Mann, der hier wohnt, ist Arzt.", "Если «который» — подлежащее, нужен der, не den."),
    ec("Der Film, der wir sehen, ist lang.", "Der Film, den wir sehen, ist lang.", "wir — подлежащее, фильм — дополнение: den."),
    ec("Die Frau, die ich helfe, ist nett.", "Die Frau, der ich helfe, ist nett.", "helfen требует дательный der."),
    ec("Das Buch, das liegt auf dem Tisch, ist neu.", "Das Buch, das auf dem Tisch liegt, ist neu.", "В относительном придаточном глагол стоит в конце."),
    sb(["Der", "Mann", "der", "hier", "wohnt", "ist", "Arzt"], "Относительное der и глагол wohnt в конце придаточного."),
    sb(["Der", "Film", "den", "wir", "sehen", "ist", "lang"], "den wir sehen."),
    sb(["Die", "Frau", "der", "ich", "helfe", "ist", "Lehrerin"], "Дательное der."),
    sb(["Das", "Buch", "das", "auf", "dem", "Tisch", "liegt", "gehört", "mir"], "liegt замыкает придаточное."),
  ],

  "de-ch22-pluperfect-futur": [
    mc("Nachdem sie gegessen ___, ging sie.", ["hat", "hatte", "ist", "war"], "hatte", "Предшествование в прошлом: плюсквамперфект с hatte."),
    mc("Morgen ___ ich anrufen.", ["werde", "wird", "werden", "wurde"], "werde", "Футурум: ich werde + инфинитив. wurde сюда не входит."),
    mc("Er ___ schon gegangen, als ich kam.", ["hatte", "war", "ist", "hat"], "war", "gehen образует плюсквамперфект с war."),
    mc("Wir ___ das später machen.", ["werden", "wird", "werde", "wurden"], "werden", "wir werden + инфинитив."),
    fb("Ich ___ dich morgen besuchen.", "werde", "ich werde."),
    fb("Nachdem er angekommen ___, rief er an.", "war", "ankommen → war angekommen."),
    fb("Sie ___ die Prüfung bestehen.", "wird", "Прогноз: sie wird + инфинитив."),
    fb("Wir hatten schon ___, bevor du kamst.", "gegessen", "Плюсквамперфект: hatten + Partizip."),
    tl("Завтра я позвоню.", "Ich werde morgen anrufen", "werden + инфинитив в конце.", ["Morgen werde ich anrufen"]),
    tl("После того как она поела, она ушла.", "Nachdem sie gegessen hatte, ging sie", "Nachdem + плюсквамперфект, главное в претерите."),
    tl("Он уже ушёл, когда я пришёл.", "Er war schon gegangen, als ich kam", "Более раннее действие: war gegangen."),
    tl("Мы сделаем это позже.", "Wir werden das später machen", "Футурум: werden + инфинитив в конце."),
    ec("Ich werde morgen anrufen dich.", "Ich werde dich morgen anrufen.", "Инфинитив замыкает клаузу с werden."),
    ec("Nachdem sie gegessen hat, ging sie.", "Nachdem sie gegessen hatte, ging sie.", "Перед претеритом ging нужно плюсквамперфект hatte, не перфект hat."),
    ec("Er hatte schon gegangen.", "Er war schon gegangen.", "gehen — с sein: war gegangen."),
    ec("Wir werden das machen später.", "Wir werden das später machen.", "später стоит перед инфинитивом."),
    sb(["Ich", "werde", "dich", "morgen", "anrufen"], "Инфинитив в конце."),
    sb(["Nachdem", "sie", "gegessen", "hatte", "ging", "sie"], "hatte замыкает придаточное, ging открывает главное."),
    sb(["Er", "war", "schon", "gegangen"], "war gegangen."),
    sb(["Wir", "werden", "das", "später", "machen"], "später перед machen."),
  ],

  "de-ch23-passive": [
    mc("Das Haus ___ gerade gebaut.", ["wird", "wurde", "ist", "hat"], "wird", "Презенс пассива: wird + Partizip II."),
    mc("Der Brief ___ gestern geschrieben.", ["wird", "wurde", "worden", "war"], "wurde", "Претерит пассива: wurde + Partizip."),
    mc("Die Tür ist geöffnet ___.", ["worden", "geworden", "wird", "wurde"], "worden", "Перфект пассива заканчивается на worden, не geworden."),
    mc("Das Essen wird von der Köchin ___.", ["kocht", "gekocht", "kochen", "kochte"], "gekocht", "Пассив: werden + Partizip II."),
    fb("Hier ___ Deutsch gesprochen.", "wird", "Безличный презенс пассива: wird gesprochen."),
    fb("Die Rechnung wurde ___.", "bezahlt", "bezahlen → bezahlt."),
    fb("Das Fenster ist ___ worden.", "geöffnet", "Partizip II стоит перед worden."),
    fb("Der Text wird von den Studenten ___.", "gelesen", "lesen → gelesen."),
    tl("Дом сейчас строят.", "Das Haus wird gebaut", "Процесс в презенсе: wird + Partizip.", ["Das Haus wird gerade gebaut"]),
    tl("Письмо написали вчера.", "Der Brief wurde gestern geschrieben", "Претерит пассива."),
    tl("Здесь говорят по-немецки.", "Hier wird Deutsch gesprochen", "Безличный пассив."),
    tl("Окно уже открыли.", "Das Fenster ist geöffnet worden", "Перфект пассива: ist + Partizip + worden.", ["Das Fenster wurde geöffnet"]),
    ec("Das Haus wird bauen.", "Das Haus wird gebaut.", "Пассив требует Partizip II, не инфинитив."),
    ec("Der Brief wurde geschrieben gestern.", "Der Brief wurde gestern geschrieben.", "Partizip стоит в конце."),
    ec("Die Tür ist geöffnet geworden.", "Die Tür ist geöffnet worden.", "В перфекте пассива вспомогательный werden даёт worden."),
    ec("Hier wird Deutsch sprechen.", "Hier wird Deutsch gesprochen.", "Нужно причастие gesprochen."),
    sb(["Das", "Haus", "wird", "gebaut"], "wird gebaut."),
    sb(["Der", "Brief", "wurde", "gestern", "geschrieben"], "wurde … geschrieben."),
    sb(["Hier", "wird", "Deutsch", "gesprochen"], "Безличный пассив."),
    sb(["Die", "Tür", "ist", "geöffnet", "worden"], "ist … worden."),
  ],

  "de-ch24-konjunktiv-ii": [
    mc("Wenn ich Zeit ___, käme ich.", ["hätte", "hat", "habe", "bin"], "hätte", "Нереальное условие в настоящем: hätte. Форма hatte в этот список не входит."),
    mc("Ich ___ das nicht sagen.", ["würde", "wird", "werde", "wäre"], "würde", "würde + инфинитив. Претерит wurde здесь не вариант."),
    mc("___ Sie mir bitte helfen?", ["Können", "Könnten", "Kann", "Könnt"], "Könnten", "Вежливая просьба: Könnten Sie …?"),
    mc("Wenn ich du ___, würde ich warten.", ["wäre", "war", "bin", "ist"], "wäre", "Нереальное сравнение: wäre, не war."),
    fb("Ich ___ gern in Wien wohnen.", "würde", "Желание: würde + инфинитив."),
    fb("Wenn wir reich ___, reisten wir.", "wären", "wir wären."),
    fb("Ich ___ gern einen Tee.", "hätte", "Вежливое желание: Ich hätte gern."),
    fb("An deiner Stelle ___ ich absagen.", "würde", "würde ich + инфинитив."),
    tl("Если бы у меня было время, я бы пришёл.", "Wenn ich Zeit hätte, würde ich kommen", "hätte в придаточном, würde + инфинитив в главном.", ["Wenn ich Zeit hätte, käme ich"]),
    tl("Я бы хотел кофе.", "Ich hätte gern einen Kaffee", "Вежливое hätte gern.", ["Ich hätte gerne einen Kaffee"]),
    tl("Не могли бы вы мне помочь?", "Könnten Sie mir bitte helfen?", "Könnten Sie + инфинитив."),
    tl("На твоём месте я бы подождал.", "An deiner Stelle würde ich warten", "würde + инфинитив."),
    ec("Wenn ich Zeit habe, käme ich.", "Wenn ich Zeit hätte, käme ich.", "Нереальное условие требует hätte, не изъявительное habe."),
    ec("Ich würde gern zu reisen.", "Ich würde gern reisen.", "После würde нет zu."),
    ec("Können Sie mir bitte helfen?", "Könnten Sie mir bitte helfen?", "Для вежливой просьбы нужна форма Könnten."),
    ec("Wenn ich du bin, warte ich.", "Wenn ich du wäre, würde ich warten.", "Нереальное условие: wäre и würde.", ["Wenn ich du wäre, wartete ich."]),
    sb(["Wenn", "ich", "Zeit", "hätte", "käme", "ich"], "Глагол hätte замыкает wenn-придаточное."),
    sb(["Ich", "hätte", "gern", "einen", "Kaffee"], "hätte gern."),
    sb(["Könnten", "Sie", "mir", "bitte", "helfen"], "Вежливый Konjunktiv II."),
    sb(["An", "deiner", "Stelle", "würde", "ich", "warten"], "würde ich warten."),
  ],

  "de-ch25-connectors": [
    mc("Ich gehe spazieren, ___ es regnet.", ["obwohl", "damit", "bevor", "und"], "obwohl", "Уступка: obwohl, глагол в конце."),
    mc("Sie lernt viel, ___ sie die Prüfung besteht.", ["obwohl", "damit", "während", "denn"], "damit", "Цель при разных подлежащих: damit."),
    mc("___ ich koche, hört er Musik.", ["Obwohl", "Während", "Damit", "Bevor"], "Während", "Одновременность: während."),
    mc("Ruf mich an, ___ du kommst.", ["nachdem", "bevor", "obwohl", "damit"], "bevor", "bevor + глагол в конце."),
    fb("Er kommt nicht, ___ er Zeit hat.", "obwohl", "Вопреки ожиданию: obwohl."),
    fb("Ich schreibe es auf, ___ ich es nicht vergesse.", "damit", "Цель: damit + личная форма в конце."),
    fb("Wir warten, ___ der Film beginnt.", "bevor", "bevor der Film beginnt."),
    fb("___ sie arbeitet, schläft das Kind.", "Während", "während открывает придаточное."),
    tl("Я иду гулять, хотя идёт дождь.", "Ich gehe spazieren, obwohl es regnet", "obwohl + глагол в конце."),
    tl("Она много учится, чтобы сдать экзамен.", "Sie lernt viel, damit sie die Prüfung besteht", "Разные подлежащие: damit, не um … zu."),
    tl("Позвони мне, прежде чем придёшь.", "Ruf mich an, bevor du kommst", "bevor + личная форма в конце."),
    tl("Пока я готовлю, он слушает музыку.", "Während ich koche, hört er Musik", "После während-придаточного главное начинается с глагола."),
    ec("Ich gehe spazieren, obwohl regnet es.", "Ich gehe spazieren, obwohl es regnet.", "В obwohl-придаточном глагол последний."),
    ec("Sie lernt, damit sie besteht die Prüfung.", "Sie lernt, damit sie die Prüfung besteht.", "besteht замыкает придаточное."),
    ec("Ruf mich an, bevor du kommst an.", "Ruf mich an, bevor du kommst.", "Отделяемая приставка в придаточном не отделяется: kommst."),
    ec("Während ich koche, er hört Musik.", "Während ich koche, hört er Musik.", "Главное предложение соблюдает порядок V2: hört er."),
    sb(["Ich", "gehe", "spazieren", "obwohl", "es", "regnet"], "regnet в конце."),
    sb(["Sie", "lernt", "damit", "sie", "die", "Prüfung", "besteht"], "besteht в конце."),
    sb(["Ruf", "mich", "an", "bevor", "du", "kommst"], "В главном an отдельно, в придаточном kommst слитно."),
    sb(["Während", "ich", "koche", "hört", "er", "Musik"], "hört стоит сразу после запятой."),
  ],

  "de-ch26-verb-prep": [
    mc("Ich warte ___ den Bus.", ["auf", "für", "an", "über"], "auf", "warten auf + винительный."),
    mc("Denkst du ___ den Termin?", ["an", "auf", "über", "mit"], "an", "denken an + винительный."),
    mc("Ich weiß nicht, ___ er kommt.", ["ob", "dass", "weil", "denn"], "ob", "Косвенный общий вопрос: ob, глагол в конце."),
    mc("Das hängt ___ dem Wetter ab.", ["von", "auf", "an", "für"], "von", "abhängen von + дательный."),
    fb("Sie spricht ___ ihrem Chef.", "mit", "sprechen mit + дательный."),
    fb("Wir interessieren uns ___ Kunst.", "für", "sich interessieren für."),
    fb("Sag mir, ___ der Zug abfährt.", "wann", "Косвенный вопрос: wann + глагол в конце."),
    fb("Er fragt ___ dem Preis.", "nach", "fragen nach + дательный."),
    tl("Я жду автобус.", "Ich warte auf den Bus", "warten auf + винительный, не für."),
    tl("Я не знаю, придёт ли он.", "Ich weiß nicht, ob er kommt", "ob вместо ли, глагол в конце."),
    tl("Это зависит от погоды.", "Das hängt vom Wetter ab", "abhängen von; приставка ab в конце.", ["Das hängt von dem Wetter ab"]),
    tl("Она говорит с начальником.", "Sie spricht mit ihrem Chef", "sprechen mit + дательный."),
    ec("Ich warte für den Bus.", "Ich warte auf den Bus.", "Управление warten — auf, не für."),
    ec("Ich weiß nicht, ob kommt er.", "Ich weiß nicht, ob er kommt.", "В косвенном вопросе глагол стоит в конце."),
    ec("Das hängt von das Wetter ab.", "Das hängt von dem Wetter ab.", "von требует дательный dem.", ["Das hängt vom Wetter ab"]),
    ec("Denkst du über den Termin?", "Denkst du an den Termin?", "denken an, не über, когда речь о том, что у тебя на уме."),
    sb(["Ich", "warte", "auf", "den", "Bus"], "warten auf."),
    sb(["Ich", "weiß", "nicht", "ob", "er", "kommt"], "kommt в конце."),
    sb(["Das", "hängt", "vom", "Wetter", "ab"], "Приставка ab в конце."),
    sb(["Sie", "spricht", "mit", "ihrem", "Chef"], "sprechen mit."),
  ],
};
