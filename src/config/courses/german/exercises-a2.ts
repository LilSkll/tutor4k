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

/** German A2 — chapters 11–18. */
export const GERMAN_A2_EXERCISES: Record<string, Draft[]> = {
  "de-ch11-dativ": [
    mc("Ich helfe ___ Mann.", ["den", "dem", "der", "des"], "dem", "helfen требует дательный: dem Mann."),
    mc("Das Buch gehört ___.", ["mich", "mir", "ich", "mein"], "mir", "gehören + дательный: mir."),
    mc("Wir danken ___ Lehrerin.", ["die", "der", "den", "eine"], "der", "die Lehrerin → дательный der Lehrerin."),
    mc("Er gibt ___ Kind einen Ball.", ["das", "den", "dem", "des"], "dem", "geben: кому — дательный dem Kind, что — винительный."),
    fb("Kannst du ___ helfen?", "mir", "Местоимение «мне» в дативе: mir."),
    fb("Die Tasche gehört ___ Frau.", "der", "die Frau → der Frau."),
    fb("Ich danke ___. (вам, вежливо)", "Ihnen", "Вежливое «вам» — Ihnen."),
    fb("Sie hilft ___ Freund. (её)", "ihrem", "Притяжательное в дативе мужского рода: ihrem Freund."),
    tl("Я помогаю другу.", "Ich helfe dem Freund", "helfen + дательный.", ["Ich helfe einem Freund", "Ich helfe meinem Freund"]),
    tl("Книга принадлежит мне.", "Das Buch gehört mir", "gehören + mir."),
    tl("Мы благодарим учительницу.", "Wir danken der Lehrerin", "danken + дательный der Lehrerin.", ["Wir danken unserer Lehrerin"]),
    tl("Она даёт ребёнку яблоко.", "Sie gibt dem Kind einen Apfel", "dem Kind — кому, einen Apfel — что.", ["Sie gibt einem Kind einen Apfel"]),
    ec("Ich helfe den Mann.", "Ich helfe dem Mann.", "После helfe нужен дательный dem, не винительный den."),
    ec("Das Buch gehört mich.", "Das Buch gehört mir.", "gehören управляет дативом mir, не mich."),
    ec("Wir danken die Lehrerin.", "Wir danken der Lehrerin.", "danken + der Lehrerin."),
    ec("Er gibt das Kind einen Ball.", "Er gibt dem Kind einen Ball.", "Адресат стоит в дативе: dem Kind."),
    sb(["Ich", "helfe", "dem", "Mann"], "helfen + dem."),
    sb(["Das", "Buch", "gehört", "mir"], "gehören + mir."),
    sb(["Wir", "danken", "der", "Lehrerin"], "danken + der."),
    sb(["Sie", "gibt", "dem", "Kind", "einen", "Apfel"], "Сначала дательный, потом винительный."),
  ],

  "de-ch12-wechsel": [
    mc("Ich gehe in ___ Küche. (куда)", ["der", "die", "dem", "den"], "die", "Направление внутрь: in + винительный, die Küche."),
    mc("Das Bild hängt an ___ Wand. (где)", ["die", "der", "das", "den"], "der", "Место без движения: an + дательный, der Wand."),
    mc("Wir fahren in ___ Park. (куда)", ["dem", "den", "der", "des"], "den", "in + винительный мужского рода: in den Park."),
    mc("Das Buch liegt auf ___ Tisch. (где)", ["den", "dem", "der", "das"], "dem", "liegen — место: auf + дательный dem Tisch."),
    fb("Sie stellt die Tasse auf ___ Tisch. (куда)", "den", "Куда ставят: auf + винительный den Tisch."),
    fb("Er wohnt in ___ Stadt.", "der", "wohnen — место: in der Stadt."),
    fb("Der Hund liegt unter ___ Bett.", "dem", "liegen — место: unter dem Bett."),
    fb("Die Lampe steht neben ___ Fenster. (где)", "dem", "neben + дательный, если предмет уже стоит: dem Fenster."),
    tl("Я иду на кухню.", "Ich gehe in die Küche", "Направление: in + винительный."),
    tl("Книга лежит на столе.", "Das Buch liegt auf dem Tisch", "Место: auf + дательный."),
    tl("Картина висит на стене.", "Das Bild hängt an der Wand", "hängen о положении: an + дательный."),
    tl("Мы едем в парк.", "Wir fahren in den Park", "Направление, der Park → in den Park."),
    ec("Ich gehe in der Küche.", "Ich gehe in die Küche.", "gehen показывает направление: винительный die, не дательный der."),
    ec("Das Buch liegt auf den Tisch.", "Das Buch liegt auf dem Tisch.", "liegen — где, не куда: дательный dem."),
    ec("Wir fahren in dem Park.", "Wir fahren in den Park.", "fahren сюда — направление: in den Park."),
    ec("Das Bild hängt an die Wand.", "Das Bild hängt an der Wand.", "Картина уже висит: дательный an der Wand."),
    sb(["Ich", "gehe", "in", "die", "Küche"], "Направление: in die Küche."),
    sb(["Das", "Buch", "liegt", "auf", "dem", "Tisch"], "Место: auf dem Tisch."),
    sb(["Wir", "fahren", "in", "den", "Park"], "Направление: in den Park."),
    sb(["Das", "Bild", "hängt", "an", "der", "Wand"], "Место: an der Wand."),
  ],

  "de-ch13-perfekt": [
    mc("Ich ___ gestern Pizza gegessen.", ["bin", "habe", "ist", "hat"], "habe", "essen образует перфект с haben."),
    mc("Sie ___ nach Berlin gefahren.", ["hat", "ist", "habe", "bin"], "ist", "fahren с перемещением: sein."),
    mc("Wir ___ einen Film gesehen.", ["sind", "haben", "ist", "seid"], "haben", "sehen → haben gesehen."),
    mc("Er ___ um acht gekommen.", ["hat", "ist", "habe", "war"], "ist", "kommen → sein gekommen."),
    fb("Hast du das Buch ___?", "gelesen", "lesen → gelesen."),
    fb("Ich bin spät ___.", "aufgestanden", "aufstehen → ist aufgestanden."),
    fb("Sie hat Deutsch ___.", "gelernt", "Слабый глагол: ge + основа + t."),
    fb("Wir sind zu Hause ___.", "geblieben", "bleiben → sein geblieben."),
    tl("Я вчера ел пиццу.", "Ich habe gestern Pizza gegessen", "haben + Partizip в конце.", ["Gestern habe ich Pizza gegessen"]),
    tl("Она поехала в Берлин.", "Sie ist nach Berlin gefahren", "Перемещение: sein + gefahren."),
    tl("Мы посмотрели фильм.", "Wir haben einen Film gesehen", "sehen → haben gesehen.", ["Wir haben den Film gesehen"]),
    tl("Он пришёл в восемь.", "Er ist um acht gekommen", "kommen → sein gekommen.", ["Er ist um 8 gekommen", "Er ist um acht Uhr gekommen"]),
    ec("Ich bin Pizza gegessen.", "Ich habe Pizza gegessen.", "essen — с haben, не с sein."),
    ec("Sie hat nach Hause gegangen.", "Sie ist nach Hause gegangen.", "gehen — с sein."),
    ec("Wir haben gesehen den Film.", "Wir haben den Film gesehen.", "Причастие стоит в конце."),
    ec("Er ist gekommen um acht.", "Er ist um acht gekommen.", "Обстоятельство стоит перед причастием."),
    sb(["Ich", "habe", "Pizza", "gegessen"], "haben + gegessen."),
    sb(["Sie", "ist", "nach", "Berlin", "gefahren"], "sein + gefahren."),
    sb(["Wir", "haben", "einen", "Film", "gesehen"], "Причастие в конце."),
    sb(["Er", "ist", "um", "acht", "gekommen"], "sein + gekommen."),
  ],

  "de-ch14-praeteritum": [
    mc("Ich ___ gestern müde.", ["war", "hatte", "bin", "wäre"], "war", "Прошедшее sein: ich war. wäre здесь не вариант претерита."),
    mc("Sie ___ keine Zeit.", ["war", "hatte", "ist", "hat"], "hatte", "Прошедшее haben: sie hatte."),
    mc("Wir ___ nicht kommen.", ["konnte", "konnten", "können", "kann"], "konnten", "Претерит können, wir: konnten."),
    mc("Er ___ früher Arzt.", ["war", "hatte", "ist", "wollte"], "war", "Кем он был: war."),
    fb("___ du schon in Wien?", "Warst", "du warst."),
    fb("Ich ___ als Kind viel lesen.", "wollte", "Претерит wollen: ich wollte + инфинитив."),
    fb("Sie ___ nicht allein bleiben.", "durfte", "Претерит dürfen: sie durfte."),
    fb("Wir ___ ein kleines Haus.", "hatten", "wir hatten."),
    tl("Раньше я был студентом.", "Früher war ich Student", "war в претерите; Früher занимает первое место.", ["Früher war ich ein Student"]),
    tl("У неё не было времени.", "Sie hatte keine Zeit", "hatte + keine Zeit."),
    tl("Мы не могли прийти.", "Wir konnten nicht kommen", "konnten + инфинитив, nicht перед инфинитивом."),
    tl("Он хотел кофе.", "Er wollte einen Kaffee", "Претерит wollen.", ["Er wollte Kaffee"]),
    ec("Ich war habe keine Zeit.", "Ich hatte keine Zeit.", "Прошедшее haben — hatte, без war."),
    ec("Sie hatte müde.", "Sie war müde.", "Состояние — war, не hatte."),
    ec("Wir konnte nicht kommen.", "Wir konnten nicht kommen.", "wir → konnten."),
    ec("Er war ein Buch.", "Er hatte ein Buch.", "Обладание в прошлом: hatte."),
    sb(["Früher", "war", "ich", "Student"], "V2: Früher war ich."),
    sb(["Sie", "hatte", "keine", "Zeit"], "hatte keine Zeit."),
    sb(["Wir", "konnten", "nicht", "kommen"], "Инфинитив в конце."),
    sb(["Er", "wollte", "einen", "Kaffee"], "wollte + винительный."),
  ],

  "de-ch15-reflexive": [
    mc("Ich freue ___ auf das Wochenende.", ["mich", "mir", "dich", "sich"], "mich", "ich freue mich."),
    mc("Er wäscht ___ die Hände.", ["ihn", "sich", "ihm", "mich"], "sich", "Части тела: дативное sich + винительный die Hände."),
    mc("Wir setzen ___.", ["uns", "euch", "sich", "mir"], "uns", "wir setzen uns."),
    mc("Freust du ___?", ["dich", "dir", "sich", "mich"], "dich", "du freust dich."),
    fb("Sie interessiert ___ für Musik.", "sich", "sich interessieren für."),
    fb("Ich kaufe ___ ein Buch.", "mir", "Покупка для себя: дативное mir."),
    fb("Erinnerst du ___ an den Film?", "dich", "sich erinnern an: du … dich."),
    fb("Die Kinder freuen ___.", "sich", "sie freuen sich."),
    tl("Я радуюсь выходным.", "Ich freue mich auf das Wochenende", "sich freuen auf + винительный."),
    tl("Он моет руки.", "Er wäscht sich die Hände", "Возвратное в дативе + часть тела в винительном."),
    tl("Мы садимся.", "Wir setzen uns", "sich setzen: wir setzen uns."),
    tl("Она интересуется музыкой.", "Sie interessiert sich für Musik", "sich interessieren für + винительный."),
    ec("Ich freue sich auf dich.", "Ich freue mich auf dich.", "С ich возвратное местоимение — mich."),
    ec("Er wäscht ihn die Hände.", "Er wäscht sich die Hände.", "Свои руки: sich, не ihn."),
    ec("Wir setzen euch.", "Wir setzen uns.", "wir → uns."),
    ec("Sie interessiert für Musik.", "Sie interessiert sich für Musik.", "Без sich глагол interessieren здесь неполный."),
    sb(["Ich", "freue", "mich", "auf", "morgen"], "mich + auf."),
    sb(["Er", "wäscht", "sich", "die", "Hände"], "sich die Hände."),
    sb(["Wir", "setzen", "uns"], "wir setzen uns."),
    sb(["Sie", "interessiert", "sich", "für", "Musik"], "sich für Musik."),
  ],

  "de-ch16-imperative-comp": [
    mc("___ bitte leise! (du, sein)", ["Bist", "Sei", "Sind", "Seid"], "Sei", "Императив sein для du: Sei."),
    mc("Berlin ist größer ___ Bonn.", ["als", "wie", "dass", "wann"], "als", "Сравнительная степень + als."),
    mc("___ Sie bitte mit! (вежливо)", ["Komm", "Kommt", "Kommen", "Kommst"], "Kommen", "Вежливый императив: инфинитив + Sie."),
    mc("Das ist die ___ Stadt. (schön)", ["schöne", "schönste", "schön", "schönen"], "schönste", "Превосходная степень с артиклем: die schönste."),
    fb("___ das Buch! (du, lesen)", "Lies", "lesen в императиве du: Lies."),
    fb("___ bitte hier! (ihr, warten)", "Wartet", "ihr: основа + t."),
    fb("Dieser Film ist ___ als der andere. (interessant)", "interessanter", "Двусложное прилагательное: основа + -er."),
    fb("Sie ist am ___. (schnell)", "schnellsten", "am + основа + -sten."),
    tl("Открой окно!", "Öffne das Fenster!", "Императив du от öffnen сохраняет -e.", ["Mach das Fenster auf", "Öffne bitte das Fenster"]),
    tl("Берлин больше Бонна.", "Berlin ist größer als Bonn", "Сравнительная степень + als."),
    tl("Пожалуйста, подождите.", "Warten Sie bitte", "Вежливая просьба: инфинитив + Sie.", ["Bitte warten Sie"]),
    tl("Это самый красивый город.", "Das ist die schönste Stadt", "die Stadt — женский род, die schönste."),
    ec("Du sei leise!", "Sei leise!", "В императиве du местоимение не ставится перед глаголом."),
    ec("Berlin ist mehr groß als Bonn.", "Berlin ist größer als Bonn.", "Односложное groß → größer, не mehr groß."),
    ec("Lernen bitte die Wörter! (форма Sie)", "Lernen Sie bitte die Wörter!", "Вежливый императив: инфинитив + Sie."),
    ec("Tom ist so groß als Paul.", "Tom ist so groß wie Paul.", "Равенство: so + прилагательное + wie."),
    sb(["Sei", "bitte", "leise"], "Императив du: Sei."),
    sb(["Berlin", "ist", "größer", "als", "Bonn"], "größer als."),
    sb(["Warten", "Sie", "bitte"], "Вежливый императив."),
    sb(["Das", "ist", "die", "schönste", "Stadt"], "Превосходная степень с die."),
  ],

  "de-ch17-adj-declension": [
    mc("der ___ Tag (schön)", ["schöne", "schöner", "schönes", "schönen"], "schöne", "После der в именительном — слабое окончание -e."),
    mc("ein ___ Mann (nett)", ["nette", "netter", "nettes", "netten"], "netter", "После ein, мужской род именительный: -er."),
    mc("Ich trinke ___ Wasser. (kalt, без артикля)", ["kalter", "kalte", "kaltes", "kalten"], "kaltes", "Средний род без артикля: -es."),
    mc("den ___ Film (neu)", ["neue", "neuer", "neues", "neuen"], "neuen", "После den — окончание -en."),
    fb("Das ist eine ___ Idee. (gut)", "gute", "eine + женский род: -e."),
    fb("Wir sehen einen ___ Hund. (klein)", "kleinen", "einen + мужской род: -en."),
    fb("___ Brot schmeckt gut. (frisch, без артикля)", "Frisches", "das Brot без артикля: -es."),
    fb("Die ___ Lampe ist neu. (alt)", "alte", "die + именительный: -e."),
    tl("Это хороший день.", "Das ist ein guter Tag", "ein + мужской род: guter."),
    tl("Я вижу маленький дом.", "Ich sehe ein kleines Haus", "ein + средний род в винительном: kleines.", ["Ich sehe das kleine Haus"]),
    tl("Холодная вода вкусная.", "Kaltes Wasser ist lecker", "Без артикля, средний род: kaltes Wasser.", ["Das kalte Wasser ist lecker"]),
    tl("Новый фильм интересный.", "Der neue Film ist interessant", "der + слабое -e."),
    ec("Der gut Tag beginnt.", "Der gute Tag beginnt.", "После der нужно окончание -e."),
    ec("Ein kleine Kind spielt.", "Ein kleines Kind spielt.", "Средний род после ein: kleines."),
    ec("Ich sehe einen klein Hund.", "Ich sehe einen kleinen Hund.", "После einen окончание -en."),
    ec("Das ist eine guter Idee.", "Das ist eine gute Idee.", "eine + женский род: gute, не guter."),
    sb(["Das", "ist", "ein", "guter", "Tag"], "Смешанное склонение: guter."),
    sb(["Ich", "sehe", "ein", "kleines", "Haus"], "kleines Haus."),
    sb(["Der", "neue", "Film", "ist", "interessant"], "der neue Film."),
    sb(["Wir", "trinken", "kaltes", "Wasser"], "Сильное окончание без артикля."),
  ],

  "de-ch18-subordinates": [
    mc("Ich bleibe hier, ___ ich müde bin.", ["weil", "dass", "ob", "und"], "weil", "Причина: weil, глагол в конце."),
    mc("Ich glaube, ___ das richtig ist.", ["weil", "dass", "denn", "oder"], "dass", "dass вводит содержание; глагол в конце."),
    mc("___ es regnet, nehme ich den Bus.", ["Dass", "Wenn", "Denn", "Und"], "Wenn", "Условие: wenn в начале, в главном глагол сразу после запятой."),
    mc("Ich lerne Deutsch, ___ in Berlin zu arbeiten.", ["um", "dass", "weil", "ohne"], "um", "Одна и та же подлежащая и цель: um … zu."),
    fb("Sie sagt, ___ sie keine Zeit hat.", "dass", "dass + глагол в конце."),
    fb("Wir lernen, ___ der Kurs nützlich ist.", "weil", "weil вводит причину."),
    fb("Ich hoffe, dich bald ___ sehen.", "zu", "zu стоит прямо перед инфинитивом."),
    fb("Wenn ich Zeit ___, komme ich.", "habe", "В придаточном с wenn глагол в конце: habe."),
    tl("Я остаюсь дома, потому что я устал.", "Ich bleibe zu Hause, weil ich müde bin", "weil отправляет глагол в конец.", ["Ich bleibe zuhause, weil ich müde bin"]),
    tl("Я знаю, что он придёт.", "Ich weiß, dass er kommt", "dass + личная форма в конце.", ["Ich weiß, dass er kommen wird"]),
    tl("Если идёт дождь, я беру автобус.", "Wenn es regnet, nehme ich den Bus", "После придаточного главное начинается с глагола.", ["Wenn es regnet, nehme ich einen Bus"]),
    tl("Я пытаюсь уснуть.", "Ich versuche zu schlafen", "zu + инфинитив после versuchen."),
    ec("Ich bleibe hier, weil ich bin müde.", "Ich bleibe hier, weil ich müde bin.", "После weil глагол стоит последним."),
    ec("Ich weiß, dass er kommt morgen.", "Ich weiß, dass er morgen kommt.", "Завтра не после глагола: глагол замыкает dass-придаточное."),
    ec("Wenn es regnet, ich nehme den Bus.", "Wenn es regnet, nehme ich den Bus.", "Главное предложение после wenn начинается с глагола."),
    ec("Ich versuche zu schlafen jetzt.", "Ich versuche jetzt zu schlafen.", "jetzt стоит перед zu + инфинитив."),
    sb(["Ich", "bleibe", "zu", "Hause", "weil", "ich", "müde", "bin"], "Глагол bin замыкает придаточное."),
    sb(["Ich", "weiß", "dass", "er", "morgen", "kommt"], "kommt в конце."),
    sb(["Wenn", "es", "regnet", "nehme", "ich", "den", "Bus"], "В главном nehme стоит сразу после запятой."),
    sb(["Ich", "versuche", "jetzt", "zu", "schlafen"], "zu перед инфинитивом."),
  ],
};
