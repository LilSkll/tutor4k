import type { StaticExercise } from "@/types";

// =====================================================================
// English Course — Static Exercises (zero AI calls)
// =====================================================================

export const ENGLISH_EXERCISES: Record<string, StaticExercise[]> = {
  "eng-ch1-first-steps": [
    { type: "multiple_choice", question: "I ___ a teacher.", instruction: "Choose the correct form of be", options: ["am", "is", "are", "be"], answer: "am", explanation: "I → am. I am a teacher." },
    { type: "multiple_choice", question: "She ___ from London.", instruction: "Choose the correct form", options: ["am", "is", "are", "be"], answer: "is", explanation: "She (3rd person singular) → is." },
    { type: "fill_blank", question: "They ___ happy.", instruction: "Fill in the correct form of be", answer: "are", acceptableAnswers: ["Are"], explanation: "They (plural) → are." },
    { type: "translation", question: "Я студент.", instruction: "Translate to English", answer: "I am a student", acceptableAnswers: ["I'm a student", "i am a student"], explanation: "I am + a + noun." },
    { type: "multiple_choice", question: "___ you from Russia?", instruction: "Choose the question form", options: ["Am", "Is", "Are", "Be"], answer: "Are", explanation: "You → are. Question: Are you...?" },
  ],
  "eng-ch2-routines": [
    { type: "fill_blank", question: "He ___ (work) in a bank.", instruction: "Present simple, 3rd person", answer: "works", acceptableAnswers: ["Works"], explanation: "He → work + -s = works." },
    { type: "multiple_choice", question: "I ___ like coffee.", instruction: "Negative present simple", options: ["don't", "doesn't", "isn't", "not"], answer: "don't", explanation: "I → don't + verb." },
    { type: "translation", question: "Она работает каждый день.", instruction: "Translate to English", answer: "She works every day", acceptableAnswers: ["she works every day"], explanation: "She → works (-s), every day = marker." },
    { type: "fill_blank", question: "___ you play tennis?", instruction: "Question form in present simple", answer: "Do", acceptableAnswers: ["do"], explanation: "You → Do you...?" },
    { type: "multiple_choice", question: "She ___ to school by bus.", instruction: "Choose the verb form", options: ["go", "goes", "going", "gone"], answer: "goes", explanation: "She → go + -es (ends in -o)." },
  ],
  "eng-ch3-around-town": [
    { type: "multiple_choice", question: "There ___ a bank near here.", instruction: "Choose singular/plural", options: ["is", "are", "be", "am"], answer: "is", explanation: "a bank (singular) → there is." },
    { type: "fill_blank", question: "There ___ three books on the table.", instruction: "Fill in there is/are", answer: "are", acceptableAnswers: ["Are"], explanation: "three books (plural) → there are." },
    { type: "multiple_choice", question: "Can you ___ me?", instruction: "Choose the verb after can", options: ["helps", "help", "helping", "helped"], answer: "help", explanation: "Can + base verb (no -s)." },
    { type: "translation", question: "Есть ли здесь аптека?", instruction: "Use there is/are question", answer: "Is there a pharmacy here?", acceptableAnswers: ["Is there a pharmacy", "is there a pharmacy here"], explanation: "Is there + singular noun." },
    { type: "fill_blank", question: "There aren't ___ apples.", instruction: "some or any?", answer: "any", acceptableAnswers: ["Any"], explanation: "Negative → any." },
  ],
  "eng-ch4-past-stories": [
    { type: "fill_blank", question: "I ___ (go) to London yesterday.", instruction: "Past simple irregular", answer: "went", acceptableAnswers: ["Went"], explanation: "go → went (irregular)." },
    { type: "multiple_choice", question: "She didn't ___ TV.", instruction: "Negative past simple", options: ["watched", "watch", "watching", "watches"], answer: "watch", explanation: "didn't + base verb (no -ed)." },
    { type: "translation", question: "Мы поехали в аэропорт.", instruction: "Past simple", answer: "We went to the airport", acceptableAnswers: ["we went to the airport"], explanation: "go → went, plural = same form." },
    { type: "fill_blank", question: "___ you see the film?", instruction: "Question in past simple", answer: "Did", acceptableAnswers: ["did"], explanation: "Did + subject + base verb." },
    { type: "multiple_choice", question: "He ___ a new car last week.", instruction: "Choose past simple", options: ["buyed", "bought", "buy", "buys"], answer: "bought", explanation: "buy → bought (irregular)." },
  ],
  "eng-ch5-choices": [
    { type: "multiple_choice", question: "An elephant is ___ a cat.", instruction: "Comparative", options: ["bigger than", "bigger", "biggest", "more big"], answer: "bigger than", explanation: "big → bigger + than." },
    { type: "fill_blank", question: "She is the ___ (good) student.", instruction: "Superlative", answer: "best", acceptableAnswers: ["Best"], explanation: "good → the best (irregular)." },
    { type: "translation", question: "Это самое высокое здание.", instruction: "Superlative", answer: "This is the tallest building", acceptableAnswers: ["this is the tallest building", "It is the tallest building"], explanation: "tall → the tallest." },
    { type: "multiple_choice", question: "I am going to ___ a book.", instruction: "going to + verb", options: ["read", "reading", "reads", "readed"], answer: "read", explanation: "going to + base verb." },
    { type: "fill_blank", question: "This exercise is ___ (difficult) than the last one.", instruction: "Comparative, 2+ syllables", answer: "more difficult", acceptableAnswers: ["More difficult"], explanation: "difficult → more difficult." },
  ],
  "eng-ch6-experiences": [
    { type: "fill_blank", question: "I have ___ (visit) Paris.", instruction: "Present perfect", answer: "visited", acceptableAnswers: ["Visited"], explanation: "have + visited (-ed)." },
    { type: "multiple_choice", question: "She has ___ her keys.", instruction: "Choose V3", options: ["loose", "lost", "losed", "losing"], answer: "lost", explanation: "lose → lost (V3)." },
    { type: "translation", question: "Я никогда не был в Лондоне.", instruction: "Present perfect with never", answer: "I have never been to London", acceptableAnswers: ["I've never been to London", "i have never been to london"], explanation: "have never + been + to." },
    { type: "fill_blank", question: "Have you ___ been to Japan?", instruction: "ever or never?", answer: "ever", acceptableAnswers: ["Ever"], explanation: "Questions use ever." },
    { type: "multiple_choice", question: "They ___ already finished.", instruction: "Choose correct form", options: ["have", "has", "had", "having"], answer: "have", explanation: "They → have + V3." },
  ],
  "eng-ch7-future-plans": [
    { type: "fill_blank", question: "I ___ help you tomorrow.", instruction: "Future with will", answer: "will", acceptableAnswers: ["Will", "'ll"], explanation: "will + base verb for promises." },
    { type: "multiple_choice", question: "If it rains, I ___ stay home.", instruction: "First conditional", options: ["will", "would", "am", "going"], answer: "will", explanation: "If + present, will + base." },
    { type: "translation", question: "Тебе следует отдохнуть.", instruction: "Use should", answer: "You should rest", acceptableAnswers: ["you should rest"], explanation: "should + base verb." },
    { type: "fill_blank", question: "You ___ wear a helmet. (обязательно)", instruction: "must or should?", answer: "must", acceptableAnswers: ["Must"], explanation: "must = obligation." },
    { type: "multiple_choice", question: "He won't ___ to the party.", instruction: "won't + verb", options: ["come", "comes", "coming", "came"], answer: "come", explanation: "won't = will not + base verb." },
  ],
  "eng-ch8-storytelling": [
    { type: "fill_blank", question: "I ___ (read) when she called.", instruction: "Past continuous", answer: "was reading", acceptableAnswers: ["Was reading"], explanation: "I → was + V-ing." },
    { type: "multiple_choice", question: "I used to ___ tennis every weekend.", instruction: "used to + verb", options: ["play", "played", "playing", "plays"], answer: "play", explanation: "used to + base verb." },
    { type: "fill_blank", question: "When I arrived, the train ___ (leave).", instruction: "Past perfect", answer: "had left", acceptableAnswers: ["Had left", "had left"], explanation: "had + left (before arrival)." },
    { type: "translation", question: "Я читал книгу, когда позвонил телефон.", instruction: "Past continuous interrupted", answer: "I was reading a book when the phone rang", acceptableAnswers: ["I was reading when the phone rang", "i was reading a book when the phone rang"], explanation: "was + V-ing + when + past simple." },
    { type: "multiple_choice", question: "They ___ TV when I entered.", instruction: "Past continuous (they)", options: ["were watching", "was watching", "watched", "watch"], answer: "were watching", explanation: "They → were + V-ing." },
  ],
};
