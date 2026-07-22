import type { StaticExercise } from "@/types";
import { withExerciseIds } from "@/lib/exercise-bank";
import { expandEnglishChapterBank } from "@/config/exercise-banks/english-expand";
import { getEngChapter } from "./chapters";

// =====================================================================
// English Course — Permanent adaptive exercise bank (curated seed)
// Expanded to ~20/type via exercise-banks packs. Zero AI generation.
// =====================================================================

type Draft = Omit<StaticExercise, "id"> & { id?: string };

export const ENGLISH_EXERCISES: Record<string, Draft[]> = {
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
  "eng-ch17-questions": [
    { type: "multiple_choice", question: "___ is your name?", instruction: "Choose the question word", options: ["What", "Where", "When", "Why"], answer: "What", explanation: "What asks for a thing or information." },
    { type: "fill_blank", question: "___ do you live?", instruction: "Where / When / Who?", answer: "Where", acceptableAnswers: ["where"], explanation: "Where = place." },
    { type: "translation", question: "Сколько тебе лет?", instruction: "Translate to English", answer: "How old are you?", acceptableAnswers: ["how old are you"], explanation: "How old + be." },
    { type: "fill_blank", question: "___ are you late?", instruction: "Why / What / Who?", answer: "Why", acceptableAnswers: ["why"], explanation: "Why = reason." },
    { type: "multiple_choice", question: "___ is she?", instruction: "Ask about a person", options: ["Who", "What", "Where", "When"], answer: "Who", explanation: "Who asks about people." },
  ],
  "eng-ch3-around-town": [
    { type: "multiple_choice", question: "There ___ a bank near here.", instruction: "Choose singular/plural", options: ["is", "are", "be", "am"], answer: "is", explanation: "a bank (singular) → there is." },
    { type: "fill_blank", question: "There ___ three books on the table.", instruction: "Fill in there is/are", answer: "are", acceptableAnswers: ["Are"], explanation: "three books (plural) → there are." },
    { type: "multiple_choice", question: "There aren't ___ apples.", instruction: "some or any?", options: ["some", "any", "a", "the"], answer: "any", explanation: "Negative → any." },
    { type: "translation", question: "Есть ли здесь аптека?", instruction: "Use there is/are question", answer: "Is there a pharmacy here?", acceptableAnswers: ["Is there a pharmacy", "is there a pharmacy here"], explanation: "Is there + singular noun." },
    { type: "fill_blank", question: "There ___ some people in the park.", instruction: "is or are?", answer: "are", acceptableAnswers: ["Are"], explanation: "people (plural) → there are." },
  ],
  "eng-ch18-can": [
    { type: "multiple_choice", question: "Can you ___ me?", instruction: "Choose the verb after can", options: ["helps", "help", "helping", "helped"], answer: "help", explanation: "Can + base verb (no -s)." },
    { type: "fill_blank", question: "I ___ swim.", instruction: "can or can't (ability)", answer: "can", acceptableAnswers: ["Can"], explanation: "can = ability." },
    { type: "translation", question: "Она не умеет водить.", instruction: "Use can't", answer: "She can't drive", acceptableAnswers: ["She cannot drive", "she can't drive"], explanation: "can't + base verb." },
    { type: "fill_blank", question: "___ you speak English?", instruction: "Question with can", answer: "Can", acceptableAnswers: ["can"], explanation: "Can + subject + base verb?" },
    { type: "multiple_choice", question: "He ___ play the piano.", instruction: "Ability", options: ["can", "cans", "can to", "is can"], answer: "can", explanation: "can never takes -s." },
  ],
  "eng-ch19-prepositions": [
    { type: "multiple_choice", question: "The book is ___ the table.", instruction: "Preposition of place", options: ["on", "in", "at", "under"], answer: "on", explanation: "on = on a surface." },
    { type: "fill_blank", question: "She is ___ home.", instruction: "in / on / at?", answer: "at", acceptableAnswers: ["At"], explanation: "at home — fixed phrase." },
    { type: "translation", question: "Кот под кроватью.", instruction: "Use under", answer: "The cat is under the bed", acceptableAnswers: ["the cat is under the bed"], explanation: "under = below." },
    { type: "fill_blank", question: "We live ___ London.", instruction: "in / on / at?", answer: "in", acceptableAnswers: ["In"], explanation: "in + city." },
    { type: "sentence_building", question: "next / the / bank / to / is / café / The", instruction: "Build the sentence", options: ["The", "café", "is", "next", "to", "the", "bank"], answer: "The café is next to the bank", acceptableAnswers: ["The cafe is next to the bank"], explanation: "next to = beside." },
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
    { type: "multiple_choice", question: "I am older ___ my sister.", instruction: "Comparative link word", options: ["than", "then", "that", "as"], answer: "than", explanation: "comparative + than." },
    { type: "fill_blank", question: "This exercise is ___ (difficult) than the last one.", instruction: "Comparative, 2+ syllables", answer: "more difficult", acceptableAnswers: ["More difficult"], explanation: "difficult → more difficult." },
  ],
  "eng-ch20-going-to": [
    { type: "multiple_choice", question: "I am going to ___ a book.", instruction: "going to + verb", options: ["read", "reading", "reads", "readed"], answer: "read", explanation: "going to + base verb." },
    { type: "fill_blank", question: "She ___ going to visit us.", instruction: "am / is / are", answer: "is", acceptableAnswers: ["Is"], explanation: "She → is going to." },
    { type: "translation", question: "Мы собираемся путешествовать.", instruction: "Use going to", answer: "We are going to travel", acceptableAnswers: ["We're going to travel", "we are going to travel"], explanation: "are going to + base verb." },
    { type: "fill_blank", question: "___ you going to come?", instruction: "Question with going to", answer: "Are", acceptableAnswers: ["are"], explanation: "Are you going to…?" },
    { type: "multiple_choice", question: "Look at the clouds — it ___ rain.", instruction: "Prediction with going to", options: ["is going to", "will to", "going", "goes to"], answer: "is going to", explanation: "Evidence → be going to." },
  ],
  "eng-ch6-experiences": [
    { type: "fill_blank", question: "I have ___ (visit) Paris.", instruction: "Present perfect", answer: "visited", acceptableAnswers: ["Visited"], explanation: "have + visited (-ed)." },
    { type: "multiple_choice", question: "She has ___ her keys.", instruction: "Choose V3", options: ["loose", "lost", "losed", "losing"], answer: "lost", explanation: "lose → lost (V3)." },
    { type: "translation", question: "Я никогда не был в Лондоне.", instruction: "Present perfect with never", answer: "I have never been to London", acceptableAnswers: ["I've never been to London", "i have never been to london"], explanation: "have never + been + to." },
    { type: "fill_blank", question: "Have you ___ been to Japan?", instruction: "ever or never?", answer: "ever", acceptableAnswers: ["Ever"], explanation: "Questions use ever." },
    { type: "multiple_choice", question: "They ___ already finished.", instruction: "Choose correct form", options: ["have", "has", "had", "having"], answer: "have", explanation: "They → have + V3." },
  ],
  "eng-ch21-quantifiers": [
    { type: "multiple_choice", question: "I don't have ___ milk.", instruction: "some or any?", options: ["some", "any", "many", "much"], answer: "any", explanation: "Negative → any." },
    { type: "fill_blank", question: "How ___ books do you have?", instruction: "much or many?", answer: "many", acceptableAnswers: ["Many"], explanation: "books = countable → many." },
    { type: "translation", question: "У меня есть немного времени.", instruction: "Use some", answer: "I have some time", acceptableAnswers: ["I've got some time", "i have some time"], explanation: "some in affirmative." },
    { type: "fill_blank", question: "There isn't ___ sugar left.", instruction: "much / many / any", answer: "any", acceptableAnswers: ["much", "Any"], explanation: "Negative uncountable → any (or much)." },
    { type: "error_correction", question: "I have much friends.", instruction: "Fix the quantifier", answer: "I have many friends", acceptableAnswers: ["I have a lot of friends"], explanation: "friends = countable → many / a lot of." },
  ],
  "eng-ch7-future-plans": [
    { type: "fill_blank", question: "I ___ help you tomorrow.", instruction: "Future with will", answer: "will", acceptableAnswers: ["Will", "'ll"], explanation: "will + base verb for promises." },
    { type: "multiple_choice", question: "If it rains, I ___ stay home.", instruction: "First conditional", options: ["will", "would", "am", "going"], answer: "will", explanation: "If + present, will + base." },
    { type: "translation", question: "Я позвоню тебе завтра.", instruction: "Use will", answer: "I will call you tomorrow", acceptableAnswers: ["I'll call you tomorrow", "i will call you tomorrow"], explanation: "will + base verb." },
    { type: "fill_blank", question: "If you study, you ___ pass.", instruction: "First conditional", answer: "will", acceptableAnswers: ["Will"], explanation: "If + present, will + V." },
    { type: "multiple_choice", question: "He won't ___ to the party.", instruction: "won't + verb", options: ["come", "comes", "coming", "came"], answer: "come", explanation: "won't = will not + base verb." },
  ],
  "eng-ch22-modals": [
    { type: "translation", question: "Тебе следует отдохнуть.", instruction: "Use should", answer: "You should rest", acceptableAnswers: ["you should rest"], explanation: "should + base verb." },
    { type: "fill_blank", question: "You ___ wear a helmet. (обязательно)", instruction: "must or should?", answer: "must", acceptableAnswers: ["Must"], explanation: "must = strong obligation." },
    { type: "multiple_choice", question: "I ___ to work tomorrow.", instruction: "External obligation", options: ["have", "must", "should", "can"], answer: "have", explanation: "have to = external obligation." },
    { type: "fill_blank", question: "You ___ smoke here. (запрещено)", instruction: "mustn't", answer: "mustn't", acceptableAnswers: ["must not", "Mustn't"], explanation: "mustn't = prohibition." },
    { type: "multiple_choice", question: "You don't ___ to come if you're busy.", instruction: "No necessity", options: ["have", "must", "should", "can"], answer: "have", explanation: "don't have to = not necessary." },
  ],
  "eng-ch8-storytelling": [
    { type: "fill_blank", question: "I ___ (read) when she called.", instruction: "Past continuous", answer: "was reading", acceptableAnswers: ["Was reading"], explanation: "I → was + V-ing." },
    { type: "multiple_choice", question: "I used to ___ tennis every weekend.", instruction: "used to + verb", options: ["play", "played", "playing", "plays"], answer: "play", explanation: "used to + base verb." },
    { type: "fill_blank", question: "When I arrived, the train ___ (leave).", instruction: "Past perfect", answer: "had left", acceptableAnswers: ["Had left", "had left"], explanation: "had + left (before arrival)." },
    { type: "translation", question: "Я читал книгу, когда позвонил телефон.", instruction: "Past continuous interrupted", answer: "I was reading a book when the phone rang", acceptableAnswers: ["I was reading when the phone rang", "i was reading a book when the phone rang"], explanation: "was + V-ing + when + past simple." },
    { type: "multiple_choice", question: "They ___ TV when I entered.", instruction: "Past continuous (they)", options: ["were watching", "was watching", "watched", "watch"], answer: "were watching", explanation: "They → were + V-ing." },
  ],
  "eng-ch9-real-world": [
    { type: "fill_blank", question: "I have been studying ___ three hours.", instruction: "for or since?", answer: "for", acceptableAnswers: ["For"], explanation: "for + duration: for three hours." },
    { type: "multiple_choice", question: "She has been working here ___ 2020.", instruction: "for or since?", options: ["for", "since", "from", "during"], answer: "since", explanation: "since + point in time." },
    { type: "translation", question: "Я устал — я бегал.", instruction: "Present perfect continuous", answer: "I'm tired — I've been running", acceptableAnswers: ["I am tired — I have been running", "I'm tired - I've been running"], explanation: "have/has been + V-ing for recent activity with visible result." },
    { type: "fill_blank", question: "How long ___ you been waiting?", instruction: "Present perfect continuous question", answer: "have", acceptableAnswers: ["Have"], explanation: "How long have you been + V-ing?" },
    { type: "multiple_choice", question: "He ___ been living in Berlin for two years.", instruction: "Choose auxiliary", options: ["have", "has", "had", "is"], answer: "has", explanation: "He/She/It → has been + V-ing." },
  ],
  "eng-ch10-what-if": [
    { type: "fill_blank", question: "If I ___ (have) more money, I would travel.", instruction: "Second conditional", answer: "had", acceptableAnswers: ["Had"], explanation: "If + past simple → would + base verb." },
    { type: "multiple_choice", question: "If she had studied, she ___ (pass).", instruction: "Third conditional", options: ["would pass", "would have passed", "will pass", "passed"], answer: "would have passed", explanation: "If + past perfect → would have + V3." },
    { type: "translation", question: "Хотел бы я знать ответ.", instruction: "Use wish + past", answer: "I wish I knew the answer", acceptableAnswers: ["I wish I knew the answer."], explanation: "wish + past simple for present regret." },
    { type: "fill_blank", question: "I wish I ___ (not / eat) so much yesterday.", instruction: "wish + past perfect", answer: "hadn't eaten", acceptableAnswers: ["had not eaten", "Hadn't eaten"], explanation: "wish + past perfect for past regret." },
    { type: "multiple_choice", question: "If I were you, I ___ accept the offer.", instruction: "Second conditional", options: ["will", "would", "would have", "had"], answer: "would", explanation: "If I were you, I would..." },
  ],
  "eng-ch11-passive": [
    { type: "fill_blank", question: "The house ___ (build) in 1990.", instruction: "Past simple passive", answer: "was built", acceptableAnswers: ["Was built"], explanation: "was/were + V3 in past passive." },
    { type: "multiple_choice", question: "English ___ in many countries.", instruction: "Present simple passive", options: ["speaks", "is spoken", "spoken", "was spoken"], answer: "is spoken", explanation: "Present passive: is/are + V3." },
    { type: "translation", question: "Мона Лиза была написана Леонардо да Винчи.", instruction: "Passive voice", answer: "The Mona Lisa was painted by Leonardo da Vinci", acceptableAnswers: ["Mona Lisa was painted by Leonardo da Vinci"], explanation: "was + V3 + by + agent." },
    { type: "fill_blank", question: "I had my car ___ (repair) yesterday.", instruction: "have something done", answer: "repaired", acceptableAnswers: ["Repaired"], explanation: "have + object + V3." },
    { type: "multiple_choice", question: "The report has ___ finished.", instruction: "Present perfect passive", options: ["been", "being", "be", "was"], answer: "been", explanation: "has/have been + V3." },
  ],
  "eng-ch12-beyond-borders": [
    { type: "fill_blank", question: "She said she ___ (be) tired.", instruction: "Reported speech", answer: "was", acceptableAnswers: ["Was"], explanation: "Present → past in reported speech." },
    { type: "multiple_choice", question: "The man ___ lives next door is a doctor.", instruction: "Relative pronoun for people", options: ["who", "which", "whose", "where"], answer: "who", explanation: "who for people." },
    { type: "translation", question: "Он сказал, что придёт завтра.", instruction: "Reported speech", answer: "He said he would come tomorrow", acceptableAnswers: ["He said that he would come tomorrow"], explanation: "will → would in reported speech." },
    { type: "fill_blank", question: "This is the book ___ I told you about.", instruction: "Relative pronoun", answer: "that", acceptableAnswers: ["That", "which", "Which"], explanation: "that/which for things." },
    { type: "multiple_choice", question: "My brother, ___ is a lawyer, lives abroad.", instruction: "Non-defining relative clause", options: ["who", "that", "which", "what"], answer: "who", explanation: "Non-defining clauses use who (not that)." },
  ],
  "eng-ch13-advanced-structures": [
    { type: "fill_blank", question: "Never ___ I seen such beauty.", instruction: "Negative inversion", answer: "have", acceptableAnswers: ["Have"], explanation: "Never + auxiliary + subject + verb." },
    { type: "multiple_choice", question: "It was John ___ broke the window.", instruction: "Cleft sentence", options: ["who", "which", "what", "that only in defining"], answer: "who", explanation: "It was + focus + who/that..." },
    { type: "translation", question: "Я действительно верю тебе!", instruction: "Emphatic do", answer: "I do believe you!", acceptableAnswers: ["I do believe you"], explanation: "do/does/did for emphasis." },
    { type: "fill_blank", question: "Hardly ___ I arrived when it started raining.", instruction: "Inversion after Hardly", answer: "had", acceptableAnswers: ["Had"], explanation: "Hardly had + subject + past participle..." },
    { type: "multiple_choice", question: "What I need ___ a vacation.", instruction: "Cleft: What I need is...", options: ["is", "are", "was", "be"], answer: "is", explanation: "What I need is + noun." },
  ],
  "eng-ch14-art-language": [
    { type: "fill_blank", question: "I'll have the red ___, please.", instruction: "Substitution with one", answer: "one", acceptableAnswers: ["One"], explanation: "one replaces a countable noun." },
    { type: "multiple_choice", question: "A: Are you ready? B: ___", instruction: "Ellipsis in conversation", options: ["I am ready.", "Ready?", "Yes, I am", "No, I'm not ready yet"], answer: "Yes, I am", explanation: "Short answers with ellipsis are natural in conversation." },
    { type: "translation", question: "Я думаю, что да.", instruction: "Use 'so' for substitution", answer: "I think so", acceptableAnswers: ["I think so."], explanation: "I think so = I think that is true." },
    { type: "fill_blank", question: "She was ___ exhausted to continue.", instruction: "Intensifying adverb", answer: "absolutely", acceptableAnswers: ["Absolutely"], explanation: "absolutely + adjective for emphasis." },
    { type: "multiple_choice", question: "Such ___ his anger that he left.", instruction: "Fronting with Such", options: ["was", "is", "were", "be"], answer: "was", explanation: "Such was + noun phrase..." },
  ],
  "eng-ch15-mastery": [
    { type: "fill_blank", question: "If I had studied medicine, I ___ a doctor now.", instruction: "Mixed conditional", answer: "would be", acceptableAnswers: ["Would be"], explanation: "Past condition → present result." },
    { type: "multiple_choice", question: "It is said ___ he left the country.", instruction: "Advanced passive", options: ["that", "to", "for", "about"], answer: "that", explanation: "It is said that + clause." },
    { type: "translation", question: "Эта машина нуждается в мойке.", instruction: "Need + V-ing", answer: "This car needs cleaning", acceptableAnswers: ["The car needs cleaning"], explanation: "need + V-ing = need to be done." },
    { type: "fill_blank", question: "I wish you ___ stop doing that.", instruction: "wish + would", answer: "would", acceptableAnswers: ["Would"], explanation: "wish + would for annoyance about habits." },
    { type: "multiple_choice", question: "If I were taller, I ___ joined the basketball team.", instruction: "Mixed conditional", options: ["would", "would have", "will have", "had"], answer: "would have", explanation: "Present condition → past result." },
  ],
  "eng-ch16-ielts": [
    { type: "multiple_choice", question: "Which connector shows contrast?", instruction: "Discourse markers", options: ["furthermore", "nevertheless", "therefore", "moreover"], answer: "nevertheless", explanation: "nevertheless = however, shows contrast." },
    { type: "fill_blank", question: "He ___ have left — his keys are still here.", instruction: "Modal perfect deduction", answer: "can't", acceptableAnswers: ["Can't", "cannot"], explanation: "can't have + V3 = impossible past deduction." },
    { type: "translation", question: "Более того, это важно для экзамена.", instruction: "Formal connector", answer: "Furthermore, this is important for the exam", acceptableAnswers: ["Moreover, this is important for the exam"], explanation: "Furthermore/Moreover add information formally." },
    { type: "fill_blank", question: "She should ___ studied harder for the test.", instruction: "Modal perfect regret", answer: "have", acceptableAnswers: ["Have"], explanation: "should have + V3 = regret about past." },
    { type: "multiple_choice", question: "In academic writing, contractions are usually ___", instruction: "Register", options: ["encouraged", "avoided", "required", "preferred"], answer: "avoided", explanation: "Formal register avoids contractions." },
  ],
};

/** Chapter exercises with stable ids + expanded permanent bank packs. */
export function getEnglishExercises(chapterSlug: string): StaticExercise[] {
  const curated = ENGLISH_EXERCISES[chapterSlug] ?? [];
  const expanded = expandEnglishChapterBank(chapterSlug, curated);
  const chapter = getEngChapter(chapterSlug);
  const allowed = chapter?.exerciseTypes;
  const filtered =
    allowed && allowed.length > 0
      ? expanded.filter((ex) => allowed.includes(ex.type))
      : expanded;
  return withExerciseIds("english", chapterSlug, filtered);
}
