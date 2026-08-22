/** English SB top-up — sentence_building only, to reach ~20 SB per chapter */

function sb(tokens, answer, instruction, explanation, acceptableAnswers = []) {
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: tokens,
    answer,
    instruction,
    explanation,
    ...(acceptableAnswers.length ? { acceptableAnswers } : {}),
  };
}

export const ENGLISH_SB_TOPUP = {
  "eng-ch4-past-stories": [
    sb(["I", "bought", "a", "new", "jacket", "last", "week"], "I bought a new jacket last week", "Past simple — buy", "buy → bought (irregular)."),
    sb(["Did", "they", "finish", "the", "project?"], "Did they finish the project?", "Past simple question", "Did + subject + base verb."),
    sb(["She", "sang", "at", "the", "concert", "on", "Saturday"], "She sang at the concert on Saturday", "Past simple — sing", "sing → sang (irregular)."),
    sb(["We", "didn't", "see", "him", "at", "the", "party"], "We didn't see him at the party", "Past simple negative", "didn't + base verb."),
    sb(["He", "drove", "to", "Manchester", "yesterday"], "He drove to Manchester yesterday", "Past simple — drive", "drive → drove (irregular)."),
    sb(["They", "found", "a", "nice", "café", "near", "the", "station"], "They found a nice café near the station", "Past simple — find", "find → found (irregular)."),
    sb(["I", "spoke", "to", "the", "manager", "this", "morning"], "I spoke to the manager this morning", "Past simple — speak", "speak → spoke (irregular)."),
    sb(["She", "left", "early", "because", "she", "felt", "tired"], "She left early because she felt tired", "Past simple — leave", "leave → left; feel → felt."),
  ],

  "eng-ch5-choices": [
    sb(["This", "hotel", "is", "the", "most", "comfortable", "in", "town"], "This hotel is the most comfortable in town", "Superlative — most", "the most comfortable — длинное прилагательное."),
    sb(["Your", "idea", "is", "as", "good", "as", "mine"], "Your idea is as good as mine", "As…as — равенство", "as good as mine — такой же хороший."),
    sb(["She", "runs", "more", "slowly", "than", "her", "sister"], "She runs more slowly than her sister", "Comparative adverb", "more slowly than — наречие сравнения."),
    sb(["It", "was", "the", "happiest", "day", "of", "my", "life"], "It was the happiest day of my life", "Superlative — -est", "happiest — happy → happiest."),
    sb(["My", "room", "is", "not", "as", "big", "as", "yours"], "My room is not as big as yours", "Negative as…as", "not as big as yours."),
  ],

  "eng-ch6-experiences": [
    sb(["She", "has", "gone", "to", "the", "shop"], "She has gone to the shop", "Present perfect — go", "has gone = ушла и ещё там."),
    sb(["We", "have", "known", "each", "other", "for", "years"], "We have known each other for years", "Present perfect + for", "have known… for years."),
    sb(["Has", "he", "ever", "eaten", "Indian", "food?"], "Has he ever eaten Indian food?", "Present perfect question", "Has he ever + V3?"),
    sb(["They", "have", "never", "visited", "Scotland"], "They have never visited Scotland", "Present perfect + never", "have never visited…"),
    sb(["I", "have", "just", "finished", "my", "coffee"], "I have just finished my coffee", "Present perfect + just", "have just finished…"),
    sb(["She", "hasn't", "called", "yet"], "She hasn't called yet", "Present perfect negative", "hasn't called yet."),
    sb(["We", "have", "done", "this", "before"], "We have done this before", "Present perfect — do", "do → done (V3)."),
    sb(["He", "has", "broken", "his", "phone"], "He has broken his phone", "Present perfect — break", "break → broken (V3)."),
  ],

  "eng-ch7-future-plans": [
    sb(["He", "will", "do", "his", "best"], "He will do his best", "Will — determination", "will do his best."),
    sb(["We", "will", "see", "each", "other", "soon"], "We will see each other soon", "Will — future meeting", "will see each other soon."),
    sb(["It", "will", "change", "everything"], "It will change everything", "Will — consequence", "will change everything."),
    sb(["Will", "she", "accept", "the", "offer?"], "Will she accept the offer?", "Will question", "Will she accept…?"),
    sb(["They", "will", "not", "be", "ready", "in", "time"], "They will not be ready in time", "Will negative", "will not be ready…"),
    sb(["I", "will", "send", "you", "the", "details"], "I will send you the details", "Will — promise", "will send you the details."),
    sb(["The", "weather", "will", "improve", "tomorrow"], "The weather will improve tomorrow", "Will — prediction", "will improve tomorrow."),
    sb(["We", "will", "meet", "at", "the", "station"], "We will meet at the station", "Will — arrangement", "will meet at the station."),
  ],

  "eng-ch8-storytelling": [
    sb(["I", "had", "never", "seen", "such", "a", "thing"], "I had never seen such a thing", "Past perfect — see", "see → seen (V3); had never seen."),
    sb(["He", "was", "working", "when", "I", "saw", "him"], "He was working when I saw him", "Past continuous", "was working when I saw him."),
    sb(["When", "I", "woke", "up", "it", "was", "raining"], "When I woke up it was raining", "Past continuous — background", "was raining — фоновое действие."),
    sb(["They", "were", "talking", "while", "I", "was", "cooking"], "They were talking while I was cooking", "While + past continuous", "While… were talking… was cooking."),
    sb(["She", "had", "already", "left", "when", "I", "called"], "She had already left when I called", "Past perfect", "had already left when I called."),
    sb(["We", "used", "to", "go", "fishing", "every", "summer"], "We used to go fishing every summer", "Used to — habit", "used to go fishing — привычка в прошлом."),
    sb(["By", "the", "time", "we", "arrived", "the", "show", "had", "started"], "By the time we arrived the show had started", "Past perfect + by the time", "had started — до нашего прихода."),
  ],

  "eng-ch9-real-world": [
    sb(["Have", "you", "been", "here", "long?"], "Have you been here long?", "PPC question", "Have you been here long?"),
    sb(["She", "has", "been", "on", "the", "phone", "all", "day"], "She has been on the phone all day", "PPC — state", "has been on the phone all day."),
    sb(["How", "long", "have", "you", "been", "waiting?"], "How long have you been waiting?", "PPC question", "How long have you been waiting?"),
    sb(["They", "have", "been", "arguing", "all", "morning"], "They have been arguing all morning", "PPC — duration", "have been arguing all morning."),
    sb(["I", "have", "been", "thinking", "about", "it", "lately"], "I have been thinking about it lately", "PPC — recent activity", "have been thinking about it lately."),
    sb(["He", "has", "been", "training", "for", "the", "marathon"], "He has been training for the marathon", "PPC + for", "has been training for the marathon."),
    sb(["We", "have", "been", "looking", "for", "a", "flat", "for", "months"], "We have been looking for a flat for months", "PPC + for", "have been looking… for months."),
    sb(["She", "has", "been", "feeling", "unwell", "recently"], "She has been feeling unwell recently", "PPC — state", "has been feeling unwell recently."),
  ],

  "eng-ch10-what-if": [
    sb(["If", "you", "mix", "red", "and", "blue", "you", "get", "purple"], "If you mix red and blue you get purple", "Zero conditional", "If + present, present — общая истина."),
    sb(["If", "I", "were", "taller", "I", "would", "reach", "the", "shelf"], "If I were taller I would reach the shelf", "Second conditional", "If I were taller… would reach."),
    sb(["If", "we", "leave", "now", "we", "will", "catch", "the", "train"], "If we leave now we will catch the train", "First conditional", "If + present, will + base."),
    sb(["If", "he", "had", "listened", "he", "would", "have", "understood"], "If he had listened he would have understood", "Third conditional", "If he had listened… would have understood."),
    sb(["Unless", "you", "hurry", "you", "will", "miss", "the", "bus"], "Unless you hurry you will miss the bus", "Unless — first conditional", "Unless = if not; will miss."),
    sb(["If", "I", "had", "known", "I", "wouldn't", "have", "come"], "If I had known I wouldn't have come", "Third conditional", "wouldn't have come — сожаление."),
    sb(["If", "she", "were", "here", "she", "would", "help", "us"], "If she were here she would help us", "Second conditional", "If she were here… would help."),
    sb(["If", "it", "snows", "the", "schools", "will", "close"], "If it snows the schools will close", "First conditional", "If it snows… will close."),
  ],

  "eng-ch11-passive": [
    sb(["The", "work", "will", "be", "finished", "tomorrow"], "The work will be finished tomorrow", "Future passive", "will be finished tomorrow."),
    sb(["Coffee", "is", "grown", "in", "Brazil"], "Coffee is grown in Brazil", "Present passive", "is grown in Brazil."),
    sb(["The", "email", "was", "sent", "this", "morning"], "The email was sent this morning", "Past passive", "was sent this morning."),
    sb(["English", "is", "taught", "in", "many", "schools"], "English is taught in many schools", "Present passive habit", "is taught in many schools."),
    sb(["The", "window", "was", "broken", "by", "the", "storm"], "The window was broken by the storm", "Past passive + agent", "was broken by the storm."),
    sb(["The", "cake", "was", "eaten", "by", "the", "children"], "The cake was eaten by the children", "Past passive + agent", "was eaten by the children."),
    sb(["The", "report", "has", "been", "published"], "The report has been published", "Present perfect passive", "has been published."),
    sb(["The", "road", "is", "being", "repaired"], "The road is being repaired", "Present continuous passive", "is being repaired."),
  ],

  "eng-ch12-beyond-borders": [
    sb(["He", "said", "that", "he", "had", "to", "go"], "He said that he had to go", "Reported speech — must", "must → had to."),
    sb(["She", "asked", "if", "I", "liked", "coffee"], "She asked if I liked coffee", "Reported yes/no question", "Do you like → if I liked."),
    sb(["He", "said", "that", "he", "had", "never", "been", "there"], "He said that he had never been there", "Reported perfect", "have never been → had never been."),
    sb(["She", "asked", "me", "where", "I", "lived"], "She asked me where I lived", "Reported wh-question", "Where do you live → where I lived."),
    sb(["They", "said", "that", "they", "would", "help"], "They said that they would help", "Reported speech — will", "will → would."),
    sb(["He", "told", "her", "to", "wait"], "He told her to wait", "Reported imperative", "told her to wait — приказ."),
    sb(["She", "asked", "why", "I", "was", "late"], "She asked why I was late", "Reported wh-question", "Why are you → why I was."),
    sb(["They", "explained", "that", "they", "were", "tired"], "They explained that they were tired", "Reported speech", "explained that they were tired."),
  ],

  "eng-ch20-going-to": [
    sb(["We", "aren't", "going", "to", "give", "up"], "We aren't going to give up", "Going to negative", "aren't going to give up."),
    sb(["Look", "the", "car", "is", "going", "to", "turn"], "Look the car is going to turn", "Going to — imminent", "is going to turn — вот-вот произойдёт."),
    sb(["I", "am", "going", "to", "visit", "my", "grandparents"], "I am going to visit my grandparents", "Going to — plan", "am going to visit my grandparents."),
    sb(["Are", "you", "going", "to", "watch", "the", "match?"], "Are you going to watch the match?", "Going to question", "Are you going to watch…?"),
    sb(["She", "is", "going", "to", "study", "medicine"], "She is going to study medicine", "Going to — intention", "is going to study medicine."),
    sb(["They", "are", "going", "to", "paint", "the", "kitchen"], "They are going to paint the kitchen", "Going to — plan", "going to paint the kitchen."),
    sb(["He", "isn't", "going", "to", "wait", "any", "longer"], "He isn't going to wait any longer", "Going to negative", "isn't going to wait any longer."),
    sb(["We're", "going", "to", "celebrate", "tonight"], "We're going to celebrate tonight", "Going to — plan", "going to celebrate tonight."),
  ],

  "eng-ch21-quantifiers": [
    sb(["We", "have", "enough", "space"], "We have enough space", "Enough — uncountable", "enough + uncountable noun."),
    sb(["A", "few", "students", "were", "late"], "A few students were late", "A few — countable", "a few students — исчисляемое."),
    sb(["There", "are", "several", "options"], "There are several options", "Several — countable", "several options — несколько."),
    sb(["I", "don't", "have", "any", "questions"], "I don't have any questions", "Any — negative", "any questions в отрицании."),
    sb(["She", "ate", "too", "much", "chocolate"], "She ate too much chocolate", "Too much — uncountable", "too much chocolate."),
    sb(["We", "need", "more", "time"], "We need more time", "More — uncountable", "more time — неисчисляемое."),
    sb(["There", "aren't", "many", "tickets", "left"], "There aren't many tickets left", "Many — countable", "aren't many tickets left."),
    sb(["He", "has", "plenty", "of", "experience"], "He has plenty of experience", "Plenty of", "plenty of experience."),
  ],

  "eng-ch22-modals": [
    sb(["You", "might", "be", "right"], "You might be right", "Might — possibility", "might be right — возможность."),
    sb(["You", "ought", "to", "apologize"], "You ought to apologize", "Ought to — advice", "ought to + base verb."),
    sb(["I", "could", "swim", "when", "I", "was", "five"], "I could swim when I was five", "Could — past ability", "could swim — умел в прошлом."),
    sb(["You", "needn't", "worry"], "You needn't worry", "Needn't — no necessity", "needn't worry — не обязательно."),
    sb(["She", "may", "leave", "early"], "She may leave early", "May — possibility", "may leave early — возможно."),
    sb(["We", "mustn't", "be", "late"], "We mustn't be late", "Mustn't — prohibition", "mustn't be late — запрет."),
    sb(["He", "might", "have", "forgotten"], "He might have forgotten", "Might have — past possibility", "might have + V3."),
    sb(["You", "shouldn't", "eat", "so", "fast"], "You shouldn't eat so fast", "Shouldn't — advice", "shouldn't eat so fast."),
  ],

  "eng-ch27-possessives": [
    sb(["Is", "this", "his", "pen?"], "Is this his pen?", "Притяжательные — his", "his + pen."),
    sb(["Our", "neighbours", "are", "very", "friendly"], "Our neighbours are very friendly", "Притяжательные — our", "our neighbours — наши соседи."),
    sb(["The", "dog", "wagged", "its", "tail"], "The dog wagged its tail", "Притяжательные — its", "its — для животных и вещей."),
    sb(["Whose", "turn", "is", "it?"], "Whose turn is it?", "Whose — чей?", "Whose turn is it? — чья очередь?"),
  ],

  "eng-ch32-relative-clauses": [
    sb(["The", "man", "whose", "car", "was", "stolen", "called", "the", "police"], "The man whose car was stolen called the police", "Relative — whose", "Whose car — чья машина."),
    sb(["I", "know", "someone", "who", "speaks", "Japanese"], "I know someone who speaks Japanese", "Relative — who", "Someone who speaks — определяющее."),
    sb(["The", "day", "when", "we", "met", "was", "sunny"], "The day when we met was sunny", "Relative — when", "The day when we met…"),
    sb(["That's", "the", "reason", "why", "I", "called"], "That's the reason why I called", "Relative — why", "The reason why I called."),
  ],

  "eng-ch35-ielts-informal": [
    sb(["I", "hope", "you're", "doing", "well"], "I hope you're doing well", "Неформальное начало", "I hope you're doing well — дружеское."),
    sb(["Write", "back", "soon"], "Write back soon", "Просьба ответить", "Write back soon — напиши скорее."),
    sb(["Thanks", "for", "your", "last", "letter"], "Thanks for your last letter", "Благодарность", "Thanks for your last letter."),
    sb(["Let", "me", "know", "what", "you", "think"], "Let me know what you think", "Просьба о мнении", "Let me know what you think."),
  ],

  "eng-ch37-cambridge-letter": [
    sb(["I", "am", "writing", "to", "apply", "for", "the", "position"], "I am writing to apply for the position", "Цель письма — заявка", "I am writing to apply for…"),
    sb(["I", "would", "like", "to", "request", "further", "details"], "I would like to request further details", "Вежливая просьба", "Would like to request…"),
    sb(["Please", "let", "me", "know", "at", "your", "earliest", "convenience"], "Please let me know at your earliest convenience", "Формальная просьба", "At your earliest convenience."),
    sb(["I", "remain", "at", "your", "disposal"], "I remain at your disposal", "Заключительная формула", "I remain at your disposal — в вашем распоряжении."),
  ],

  "eng-ch39-ielts-essay": [
    sb(["Another", "key", "factor", "is", "public", "health"], "Another key factor is public health", "Дополнительный аргумент", "Another key factor is…"),
    sb(["This", "raises", "important", "questions", "about", "fairness"], "This raises important questions about fairness", "Переход к проблеме", "This raises important questions…"),
    sb(["The", "evidence", "suggests", "a", "clear", "trend"], "The evidence suggests a clear trend", "Ссылка на данные", "The evidence suggests…"),
    sb(["A", "balanced", "approach", "is", "needed"], "A balanced approach is needed", "Рекомендация", "A balanced approach is needed."),
  ],

  "eng-ch40-ielts-cohesion": [
    sb(["In", "contrast", "urban", "areas", "grew", "faster"], "In contrast urban areas grew faster", "In contrast — противопоставление", "In contrast — формальный контраст."),
    sb(["As", "a", "consequence", "costs", "rose"], "As a consequence costs rose", "As a consequence — следствие", "As a consequence — результат."),
    sb(["To", "illustrate", "consider", "the", "case", "of", "Finland"], "To illustrate consider the case of Finland", "To illustrate — пример", "To illustrate — переход к примеру."),
    sb(["Despite", "this", "the", "policy", "continued"], "Despite this the policy continued", "Despite this — уступка", "Despite this — несмотря на вышесказанное."),
  ],
};
