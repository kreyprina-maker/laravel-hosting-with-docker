/* English Grammar Hub: all lesson content and activities live in this file. */
"use strict";

const tenses = [
  {
    id: "present-simple", name: "Present Simple", group: "Present", icon: "☀️",
    explanation: "Use it for habits, routines, facts, and things that are usually true.",
    forms: ["Subject + base verb (add -s/-es for he, she, it)", "Subject + do/does not + base verb", "Do/Does + subject + base verb?"],
    signals: ["every day", "usually", "often", "always", "sometimes"],
    mistake: "Do not forget -s/-es with he, she, or it: She works (not She work).",
    examples: [
      ["I study English every day.", "ខ្ញុំរៀនភាសាអង់គ្លេសរាល់ថ្ងៃ។"],
      ["She walks to school.", "នាងដើរទៅសាលា។"],
      ["They do not eat meat.", "ពួកគេមិនញ៉ាំសាច់ទេ។"],
      ["Does he live here?", "តើគាត់រស់នៅទីនេះមែនទេ?"],
      ["The sun rises in the east.", "ព្រះអាទិត្យរះនៅទិសខាងកើត។"]
    ]
  },
  {
    id: "present-continuous", name: "Present Continuous", group: "Present", icon: "☀️",
    explanation: "Use it for an action happening now or around this time.",
    forms: ["Subject + am/is/are + verb-ing", "Subject + am/is/are not + verb-ing", "Am/Is/Are + subject + verb-ing?"],
    signals: ["now", "right now", "at the moment", "today", "Look!"],
    mistake: "Use a form of be before -ing: I am reading (not I reading).",
    examples: [
      ["I am learning English now.", "ខ្ញុំកំពុងរៀនភាសាអង់គ្លេសឥឡូវនេះ។"],
      ["She is cooking dinner.", "នាងកំពុងចម្អិនអាហារពេលល្ងាច។"],
      ["We are not watching TV.", "យើងមិនកំពុងមើលទូរទស្សន៍ទេ។"],
      ["Are they playing football?", "តើពួកគេកំពុងលេងបាល់ទាត់មែនទេ?"],
      ["It is raining at the moment.", "ឥឡូវនេះកំពុងភ្លៀង។"]
    ]
  },
  {
    id: "present-perfect", name: "Present Perfect", group: "Present", icon: "☀️",
    explanation: "Use it for a past action connected to now, or an experience with no exact past time.",
    forms: ["Subject + have/has + past participle", "Subject + have/has not + past participle", "Have/Has + subject + past participle?"],
    signals: ["already", "just", "yet", "ever", "never", "since", "for"],
    mistake: "Do not use a finished time like yesterday with this tense. Say I went yesterday.",
    examples: [
      ["I have finished my homework.", "ខ្ញុំបានធ្វើកិច្ចការផ្ទះរួចហើយ។"],
      ["She has lived here for two years.", "នាងបានរស់នៅទីនេះអស់រយៈពេលពីរឆ្នាំហើយ។"],
      ["We have not seen that movie.", "យើងមិនទាន់បានមើលភាពយន្តនោះទេ។"],
      ["Have you ever eaten sushi?", "តើអ្នកធ្លាប់ញ៉ាំស៊ូស៊ីទេ?"],
      ["He has just arrived.", "គាត់ទើបតែមកដល់។"]
    ]
  },
  {
    id: "present-perfect-continuous", name: "Present Perfect Continuous", group: "Present", icon: "☀️",
    explanation: "Use it for an action that started in the past and is still continuing, or has just stopped.",
    forms: ["Subject + have/has been + verb-ing", "Subject + have/has not been + verb-ing", "Have/Has + subject + been + verb-ing?"],
    signals: ["since", "for", "all day", "lately", "recently"],
    mistake: "Keep been in the formula: She has been working (not She has working).",
    examples: [
      ["I have been studying for an hour.", "ខ្ញុំបានរៀនអស់រយៈពេលមួយម៉ោងហើយ។"],
      ["She has been working since morning.", "នាងបានធ្វើការតាំងពីព្រឹកមក។"],
      ["They have not been sleeping well.", "ពួកគេគេងមិនសូវបានល្អទេ។"],
      ["Have you been waiting long?", "តើអ្នកបានរង់ចាំយូរហើយឬនៅ?"],
      ["It has been raining all day.", "ភ្លៀងតាំងពីព្រឹកមករហូត។"]
    ]
  },
  {
    id: "past-simple", name: "Past Simple", group: "Past", icon: "🌙",
    explanation: "Use it for an action that started and finished at a known time in the past.",
    forms: ["Subject + past verb", "Subject + did not + base verb", "Did + subject + base verb?"],
    signals: ["yesterday", "last week", "ago", "in 2020", "then"],
    mistake: "After did or did not, use the base verb: Did you go? (not Did you went?).",
    examples: [
      ["I visited my aunt yesterday.", "ខ្ញុំបានទៅលេងមីងរបស់ខ្ញុំម្សិលមិញ។"],
      ["He bought a new book.", "គាត់បានទិញសៀវភៅថ្មីមួយក្បាល។"],
      ["We did not watch the game.", "យើងមិនបានមើលការប្រកួតទេ។"],
      ["Did she call you last night?", "តើនាងបានទូរស័ព្ទមកអ្នកយប់មិញទេ?"],
      ["They went to the market two days ago.", "ពួកគេបានទៅផ្សារកាលពីពីរថ្ងៃមុន។"]
    ]
  },
  {
    id: "past-continuous", name: "Past Continuous", group: "Past", icon: "🌙",
    explanation: "Use it for an action that was in progress at a particular time in the past.",
    forms: ["Subject + was/were + verb-ing", "Subject + was/were not + verb-ing", "Was/Were + subject + verb-ing?"],
    signals: ["at 8 o'clock", "while", "when", "all evening"],
    mistake: "Use was with I/he/she/it and were with you/we/they.",
    examples: [
      ["I was reading at 8 o'clock.", "ខ្ញុំកំពុងអាននៅម៉ោងប្រាំបី។"],
      ["They were playing when it started to rain.", "ពួកគេកំពុងលេងនៅពេលវាចាប់ផ្តើមភ្លៀង។"],
      ["She was not sleeping.", "នាងមិនបានកំពុងគេងទេ។"],
      ["Were you studying last night?", "តើអ្នកកំពុងរៀនយប់មិញមែនទេ?"],
      ["We were eating while Dad was cooking.", "យើងកំពុងញ៉ាំបាយ ខណៈពេលប៉ាកំពុងចម្អិន។"]
    ]
  },
  {
    id: "past-perfect", name: "Past Perfect", group: "Past", icon: "🌙",
    explanation: "Use it for an action completed before another past action or time.",
    forms: ["Subject + had + past participle", "Subject + had not + past participle", "Had + subject + past participle?"],
    signals: ["before", "after", "by the time", "already"],
    mistake: "Use had for every subject, and use the past participle: had gone.",
    examples: [
      ["I had eaten before they arrived.", "ខ្ញុំបានញ៉ាំរួចមុនពេលពួកគេមកដល់។"],
      ["She had left by the time I called.", "នាងបានចេញទៅមុនពេលខ្ញុំទូរស័ព្ទ។"],
      ["We had not met him before.", "យើងមិនធ្លាប់បានជួបគាត់ពីមុនទេ។"],
      ["Had you finished the work before lunch?", "តើអ្នកបានបញ្ចប់ការងារមុនអាហារថ្ងៃត្រង់ទេ?"],
      ["The bus had already gone when we got there.", "ឡានក្រុងបានចេញទៅហើយ ពេលយើងទៅដល់។"]
    ]
  },
  {
    id: "past-perfect-continuous", name: "Past Perfect Continuous", group: "Past", icon: "🌙",
    explanation: "Use it to show how long an action continued before another past event.",
    forms: ["Subject + had been + verb-ing", "Subject + had not been + verb-ing", "Had + subject + been + verb-ing?"],
    signals: ["for", "since", "before", "until then"],
    mistake: "This tense needs had been and an -ing verb: had been waiting.",
    examples: [
      ["I had been waiting for an hour before the bus came.", "ខ្ញុំបានរង់ចាំមួយម៉ោងមុនឡានក្រុងមកដល់។"],
      ["She had been studying since morning.", "នាងបានរៀនតាំងពីព្រឹកមក។"],
      ["They had not been living there long.", "ពួកគេមិនបានរស់នៅទីនោះយូរទេ។"],
      ["Had he been working all day?", "តើគាត់បានធ្វើការពេញមួយថ្ងៃមែនទេ?"],
      ["It had been snowing before the sun came out.", "វាបានធ្លាក់ព្រិលមុនពេលព្រះអាទិត្យចេញមក។"]
    ]
  },
  {
    id: "future-simple", name: "Future Simple", group: "Future", icon: "✨",
    explanation: "Use it for a future decision, promise, offer, or prediction.",
    forms: ["Subject + will + base verb", "Subject + will not + base verb", "Will + subject + base verb?"],
    signals: ["tomorrow", "next week", "soon", "I think", "in the future"],
    mistake: "After will, use the base verb: will go (not will goes).",
    examples: [
      ["I will call you tomorrow.", "ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកនៅថ្ងៃស្អែក។"],
      ["She will help her brother.", "នាងនឹងជួយប្អូនប្រុសរបស់នាង។"],
      ["They will not be late.", "ពួកគេនឹងមិនយឺតទេ។"],
      ["Will you join us?", "តើអ្នកនឹងចូលរួមជាមួយយើងទេ?"],
      ["I think it will rain soon.", "ខ្ញុំគិតថាវានឹងភ្លៀងឆាប់ៗនេះ។"]
    ]
  },
  {
    id: "future-continuous", name: "Future Continuous", group: "Future", icon: "✨",
    explanation: "Use it for an action that will be in progress at a certain future time.",
    forms: ["Subject + will be + verb-ing", "Subject + will not be + verb-ing", "Will + subject + be + verb-ing?"],
    signals: ["this time tomorrow", "at 7 tonight", "next week"],
    mistake: "Remember be before the -ing verb: will be working.",
    examples: [
      ["I will be studying at 7 tonight.", "ខ្ញុំនឹងកំពុងរៀននៅម៉ោងប្រាំពីរយប់នេះ។"],
      ["She will be traveling this time tomorrow.", "នាងនឹងកំពុងធ្វើដំណើរនៅម៉ោងនេះថ្ងៃស្អែក។"],
      ["We will not be staying long.", "យើងនឹងមិនស្នាក់នៅយូរទេ។"],
      ["Will they be waiting for us?", "តើពួកគេនឹងកំពុងរង់ចាំយើងទេ?"],
      ["He will be working all afternoon.", "គាត់នឹងកំពុងធ្វើការពេញមួយរសៀល។"]
    ]
  },
  {
    id: "future-perfect", name: "Future Perfect", group: "Future", icon: "✨",
    explanation: "Use it for an action that will be complete before a future time.",
    forms: ["Subject + will have + past participle", "Subject + will not have + past participle", "Will + subject + have + past participle?"],
    signals: ["by tomorrow", "by then", "by next year", "before"],
    mistake: "Use have after will, then the past participle: will have finished.",
    examples: [
      ["I will have finished by 6 o'clock.", "ខ្ញុំនឹងបញ្ចប់រួចមុនម៉ោងប្រាំមួយ។"],
      ["She will have arrived by tomorrow.", "នាងនឹងមកដល់មុនថ្ងៃស្អែក។"],
      ["They will not have built the house by June.", "ពួកគេនឹងមិនទាន់សង់ផ្ទះរួចនៅខែមិថុនាទេ។"],
      ["Will you have read the book by Friday?", "តើអ្នកនឹងអានសៀវភៅចប់មុនថ្ងៃសុក្រទេ?"],
      ["By next year, we will have lived here for a decade.", "ដល់ឆ្នាំក្រោយ យើងនឹងរស់នៅទីនេះបានដប់ឆ្នាំ។"]
    ]
  },
  {
    id: "future-perfect-continuous", name: "Future Perfect Continuous", group: "Future", icon: "✨",
    explanation: "Use it to show how long an action will have continued up to a future time.",
    forms: ["Subject + will have been + verb-ing", "Subject + will not have been + verb-ing", "Will + subject + have been + verb-ing?"],
    signals: ["for", "by next month", "by the time", "by then"],
    mistake: "Use the full form will have been + verb-ing; it describes duration.",
    examples: [
      ["By noon, I will have been working for four hours.", "ដល់ថ្ងៃត្រង់ ខ្ញុំនឹងធ្វើការបានបួនម៉ោងហើយ។"],
      ["She will have been teaching here for five years by June.", "ដល់ខែមិថុនា នាងនឹងបានបង្រៀននៅទីនេះប្រាំឆ្នាំហើយ។"],
      ["They will not have been waiting long.", "ពួកគេនឹងមិនបានរង់ចាំយូរទេ។"],
      ["Will you have been studying for two hours by 8?", "ដល់ម៉ោងប្រាំបី តើអ្នកនឹងរៀនបានពីរម៉ោងហើយឬនៅ?"],
      ["By next month, he will have been living here for a year.", "ដល់ខែក្រោយ គាត់នឹងរស់នៅទីនេះបានមួយឆ្នាំហើយ។"]
    ]
  }
];

const passiveLessons = [
  {
    id: "present-simple-passive", name: "Present Simple Passive", signal: "every day · usually · often",
    explanation: "Use it when something happens regularly and you want to focus on the thing receiving the action.",
    forms: ["Object + am/is/are + past participle", "Object + am/is/are not + past participle", "Am/Is/Are + object + past participle?"],
    mistake: "Choose am/is/are to match the subject, and use a past participle: The rooms are cleaned.",
    examples: [
      ["Rice is grown in Cambodia.", "ស្រូវត្រូវបានដាំដុះនៅប្រទេសកម្ពុជា។"],
      ["The classroom is cleaned every day.", "ថ្នាក់រៀនត្រូវបានសម្អាតរាល់ថ្ងៃ។"],
      ["These books are not sold here.", "សៀវភៅទាំងនេះមិនត្រូវបានលក់នៅទីនេះទេ។"],
      ["Is English taught at this school?", "តើភាសាអង់គ្លេសត្រូវបានបង្រៀននៅសាលានេះទេ?"],
      ["Many languages are spoken in Cambodia.", "មានភាសាជាច្រើនត្រូវបាននិយាយនៅប្រទេសកម្ពុជា។"]
    ]
  },
  {
    id: "past-simple-passive", name: "Past Simple Passive", signal: "yesterday · last week · ago · in 2020",
    explanation: "Use it for an action that was completed in the past when the receiver of the action is important.",
    forms: ["Object + was/were + past participle", "Object + was/were not + past participle", "Was/Were + object + past participle?"],
    mistake: "Use was with a singular subject and were with a plural subject. Keep the past participle: was built (not was build).",
    examples: [
      ["The temple was built many years ago.", "ប្រាសាទនេះត្រូវបានសាងសង់ជាច្រើនឆ្នាំមុន។"],
      ["The letters were sent yesterday.", "សំបុត្រទាំងនោះត្រូវបានផ្ញើកាលពីម្សិលមិញ។"],
      ["The window was not broken by the children.", "បង្អួចមិនត្រូវបានក្មេងៗបំបែកទេ។"],
      ["Was this picture painted by your sister?", "តើរូបភាពនេះត្រូវបានគូរដោយបងស្រីរបស់អ្នកមែនទេ?"],
      ["The lost dog was found near the market.", "ឆ្កែដែលបាត់ត្រូវបានរកឃើញនៅជិតផ្សារ។"]
    ]
  },
  {
    id: "future-simple-passive", name: "Future Simple Passive", signal: "tomorrow · next week · soon",
    explanation: "Use it for something that will happen in the future when you want to focus on what receives the action.",
    forms: ["Object + will be + past participle", "Object + will not be + past participle", "Will + object + be + past participle?"],
    mistake: "Keep be after will: The food will be prepared (not will prepared).",
    examples: [
      ["The food will be prepared soon.", "អាហារនឹងត្រូវបានរៀបចំឆាប់ៗនេះ។"],
      ["The results will be announced tomorrow.", "លទ្ធផលនឹងត្រូវបានប្រកាសនៅថ្ងៃស្អែក។"],
      ["The road will not be closed next week.", "ផ្លូវនឹងមិនត្រូវបានបិទនៅសប្តាហ៍ក្រោយទេ។"],
      ["Will the package be delivered today?", "តើកញ្ចប់ឥវ៉ាន់នឹងត្រូវបានដឹកជញ្ជូនថ្ងៃនេះទេ?"],
      ["A new school will be built in our village.", "សាលាថ្មីមួយនឹងត្រូវបានសាងសង់ក្នុងភូមិរបស់យើង។"]
    ]
  },
  {
    id: "present-perfect-passive", name: "Present Perfect Passive", signal: "already · just · yet · recently",
    explanation: "Use it for an action completed at an unknown or unimportant time, with a connection to now.",
    forms: ["Object + have/has been + past participle", "Object + have/has not been + past participle", "Have/Has + object + been + past participle?"],
    mistake: "Use been before the past participle: has been finished (not has finished in the passive).",
    examples: [
      ["The homework has been finished.", "កិច្ចការផ្ទះត្រូវបានបញ្ចប់ហើយ។"],
      ["The rooms have been cleaned.", "បន្ទប់ទាំងនោះត្រូវបានសម្អាតរួចហើយ។"],
      ["The email has not been sent yet.", "អ៊ីមែលមិនទាន់ត្រូវបានផ្ញើនៅឡើយទេ។"],
      ["Have the tickets been booked?", "តើសំបុត្រត្រូវបានកក់ហើយឬនៅ?"],
      ["A new bridge has just been opened.", "ស្ពានថ្មីមួយទើបតែត្រូវបានបើក។"]
    ]
  }
];

const passivePracticeQuestions = [
  { lessonId: "present-simple-passive", tense: "Present Simple Passive", question: "Coffee ___ in many countries.", options: ["is grown", "was grow", "grows"], answer: 0, explain: "A regular fact uses am/is/are + past participle. Coffee is grown." },
  { lessonId: "past-simple-passive", tense: "Past Simple Passive", question: "The school ___ in 1990.", options: ["is built", "was built", "built"], answer: 1, explain: "In 1990 is a finished past time. Use was/were + past participle: was built." },
  { lessonId: "future-simple-passive", tense: "Future Simple Passive", question: "The new books ___ tomorrow.", options: ["will deliver", "will be delivered", "were delivered"], answer: 1, explain: "For future passive, use will be + past participle: will be delivered." },
  { lessonId: "present-perfect-passive", tense: "Present Perfect Passive", question: "The windows ___ already.", options: ["have been cleaned", "were clean", "has cleaned"], answer: 0, explain: "Already with present perfect passive uses have/has been + past participle." }
];

const practiceQuestions = [
  { tense: "Present Simple", question: "Mina ___ breakfast at 7 every day.", options: ["eat", "eats", "is eating"], answer: 1, explain: "Every day shows a routine. With Mina (she), add -s: eats." },
  { tense: "Present Continuous", question: "Look! The children ___ in the garden.", options: ["play", "played", "are playing"], answer: 2, explain: "Look! tells us the action is happening now: are + playing." },
  { tense: "Present Perfect", question: "I ___ my homework already.", options: ["have finished", "finished yesterday", "am finish"], answer: 0, explain: "Already connects a finished action to now. Use have + past participle." },
  { tense: "Present Perfect Continuous", question: "He ___ English for two hours.", options: ["studies", "has been studying", "studied"], answer: 1, explain: "For two hours describes an activity continuing over time: has been + -ing." },
  { tense: "Past Simple", question: "We ___ our grandmother last Sunday.", options: ["visit", "have visited", "visited"], answer: 2, explain: "Last Sunday is a finished past time, so use the past verb visited." },
  { tense: "Past Continuous", question: "At 9 last night, I ___ a book.", options: ["was reading", "read", "am reading"], answer: 0, explain: "An action in progress at a past time uses was/were + -ing." },
  { tense: "Past Perfect", question: "The train ___ before we arrived.", options: ["leaves", "had left", "has left"], answer: 1, explain: "The train left before another past event. Use had + past participle." },
  { tense: "Past Perfect Continuous", question: "She ___ for an hour before the doctor came.", options: ["had been waiting", "waits", "was waited"], answer: 0, explain: "This shows the duration before another past event: had been + -ing." },
  { tense: "Future Simple", question: "I think it ___ sunny tomorrow.", options: ["is", "will be", "was"], answer: 1, explain: "A prediction about tomorrow uses will + base verb." },
  { tense: "Future Continuous", question: "This time tomorrow, they ___ to Phnom Penh.", options: ["travel", "will be traveling", "traveled"], answer: 1, explain: "An action in progress at a future time uses will be + -ing." },
  { tense: "Future Perfect", question: "By Friday, he ___ the project.", options: ["will have completed", "completes", "has completing"], answer: 0, explain: "By Friday means complete before a future time: will have + past participle." },
  { tense: "Future Perfect Continuous", question: "By July, we ___ here for six months.", options: ["will have been living", "live", "will living"], answer: 0, explain: "This shows duration up to a future time: will have been + -ing." }
];

const listeningLines = [
  { speaker: "Dara", text: "Good morning, Lina. How are you today?" },
  { speaker: "Lina", text: "I am well, thank you. I am going to the library." },
  { speaker: "Dara", text: "What will you do there?" },
  { speaker: "Lina", text: "I will borrow a book and study English." }
];
const listeningQuiz = { question: "Where is Lina going?", options: ["To the market", "To the library", "To school"], answer: 1 };
const speakingSentences = [
  "I practice English a little every day.",
  "She is reading a book right now.",
  "We will visit our family tomorrow.",
  "They went to the park yesterday."
];

const gameQuestions = {
  quiz: [
    { q: "He ___ to school every morning.", options: ["go", "goes", "is go"], answer: 1 },
    { q: "We ___ dinner when you called.", options: ["were eating", "eat", "will eat"], answer: 0 },
    { q: "I ___ my keys yesterday.", options: ["lose", "have lost", "lost"], answer: 2 },
    { q: "By next week, she ___ the book.", options: ["will finish", "will have finished", "finishes"], answer: 1 },
    { q: "They ___ here since 2022.", options: ["live", "have lived", "lived"], answer: 1 }
  ],
  fill: [
    { before: "She", blank: "is cooking", after: "right now.", answer: "is cooking", hint: "Use present continuous for right now." },
    { before: "We", blank: "visited", after: "Angkor Wat last year.", answer: "visited", hint: "Use past simple with last year." },
    { before: "He", blank: "will call", after: "you tomorrow.", answer: "will call", hint: "Use will + base verb for tomorrow." },
    { before: "I", blank: "have lived", after: "here for five years.", answer: "have lived", hint: "For five years connects the past to now." },
    { before: "They", blank: "were playing", after: "at 4 o'clock.", answer: "were playing", hint: "Use past continuous for an action in progress at a past time." }
  ],
  builder: [
    { words: ["She", "reads", "every", "night", "a", "book"], order: ["She", "reads", "a", "book", "every", "night"] },
    { words: ["are", "We", "English", "learning", "now"], order: ["We", "are", "learning", "English", "now"] },
    { words: ["yesterday", "They", "the", "visited", "museum"], order: ["They", "visited", "the", "museum", "yesterday"] },
    { words: ["will", "I", "tomorrow", "you", "help"], order: ["I", "will", "help", "you", "tomorrow"] }
  ],
  memory: [
    ["go", "went"], ["eat", "ate"], ["see", "saw"],
    ["write", "wrote"], ["make", "made"], ["take", "took"]
  ]
};

const STORAGE_KEY = "englishGrammarHubProgress";
const defaultProgress = { score: 0, completedTenses: [], completedPassives: [], activities: 0, streak: 0, lastVisit: "", theme: "light" };
let progress = loadProgress();
let activeRate = 0.75;
let currentPracticeIndex = 0;
let practiceAnswers = [];
let currentGame = "quiz";
let gameSession = null;
let timerInterval = null;
let toastTimeout = null;
let speechRecognition = null;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...defaultProgress,
      ...saved,
      completedTenses: Array.isArray(saved.completedTenses) ? saved.completedTenses : [],
      completedPassives: Array.isArray(saved.completedPassives) ? saved.completedPassives : []
    };
  } catch (error) {
    console.warn("Saved learning progress could not be read.", error);
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function updateDailyStreak() {
  const today = new Date().toLocaleDateString("en-CA");
  if (progress.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
    progress.streak = progress.lastVisit === yesterday ? progress.streak + 1 : 1;
    progress.lastVisit = today;
    saveProgress();
  }
}

function updateDashboard() {
  document.getElementById("statTenses").textContent = `${progress.completedTenses.length} / 12`;
  document.getElementById("statScore").textContent = progress.score;
  document.getElementById("statStreak").textContent = progress.streak;
  document.getElementById("statDone").textContent = progress.activities;
  document.getElementById("heroStars").textContent = Math.floor(progress.score / 10);
  document.querySelectorAll(".tense-button").forEach((button) => {
    const done = progress.completedTenses.includes(button.dataset.tense);
    const mark = button.querySelector(".done-mark");
    if (mark) mark.textContent = done ? "✓" : "";
    button.setAttribute("aria-label", `${button.dataset.label}${done ? ", completed" : ""}`);
  });
}

function addPoints(points, activity = false) {
  progress.score += points;
  if (activity) progress.activities += 1;
  saveProgress();
  updateDashboard();
}

function markTenseComplete(id) {
  if (!progress.completedTenses.includes(id)) {
    progress.completedTenses.push(id);
    saveProgress();
    updateDashboard();
    showToast("Tense lesson completed — great work! 🌟");
  } else {
    showToast("This tense is already marked complete. Keep practicing! ✨");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderTenseGroups() {
  const host = document.getElementById("tenseGroups");
  const groups = [
    { name: "Present", className: "present", icon: "☀️" },
    { name: "Past", className: "past", icon: "🌙" },
    { name: "Future", className: "future", icon: "✨" }
  ];
  host.innerHTML = groups.map((group) => {
    const buttons = tenses.filter((tense) => tense.group === group.name).map((tense) =>
      `<button class="tense-button" type="button" data-tense="${tense.id}" data-label="${escapeHTML(tense.name)}" aria-label="${escapeHTML(tense.name)}">
        <span>${escapeHTML(tense.name)}</span><span class="done-mark" aria-hidden="true"></span>
      </button>`).join("");
    return `<article class="tense-group ${group.className}">
      <h3 class="group-title"><span class="group-icon" aria-hidden="true">${group.icon}</span>${group.name} tense</h3>
      <div class="tense-buttons">${buttons}</div>
    </article>`;
  }).join("");
  host.addEventListener("click", (event) => {
    const button = event.target.closest(".tense-button");
    if (button) renderLesson(button.dataset.tense);
  });
  updateDashboard();
}

function renderLesson(id) {
  const tense = tenses.find((item) => item.id === id);
  if (!tense) return;
  document.querySelectorAll(".tense-button").forEach((button) => button.classList.toggle("is-active", button.dataset.tense === id));
  const [positive, negative, question] = tense.forms;
  document.getElementById("lessonPanel").innerHTML = `
    <div class="lesson-header">
      <div><h3>${escapeHTML(tense.name)}</h3><p>${escapeHTML(tense.explanation)}</p></div>
      <span class="lesson-badge">${tense.group} tense</span>
    </div>
    <div class="lesson-grid">
      <div class="lesson-block"><h4>🧱 Sentence formula</h4>
        <div class="formula-list">
          <div class="formula-line"><b>+</b> ${escapeHTML(positive)}</div>
          <div class="formula-line"><b>−</b> ${escapeHTML(negative)}</div>
          <div class="formula-line"><b>?</b> ${escapeHTML(question)}</div>
        </div>
      </div>
      <div class="lesson-meta">
        <div class="lesson-block"><h4>⏰ Time signal words</h4><div class="tag-list">${tense.signals.map((word) => `<span class="tag">${escapeHTML(word)}</span>`).join("")}</div></div>
        <div class="lesson-block"><h4>💡 Common mistake</h4><p class="mistake-text">${escapeHTML(tense.mistake)}</p></div>
      </div>
    </div>
    <div class="examples-wrap">
      <div class="examples-heading"><h4>🌼 5 useful examples</h4><button type="button" class="text-button translation-toggle" aria-pressed="false">Show Khmer translations</button></div>
      <div class="example-list">${tense.examples.map(([english, khmer]) => `<div class="example-item"><span class="example-en">${escapeHTML(english)}</span><span class="example-km" hidden lang="km">${escapeHTML(khmer)}</span></div>`).join("")}</div>
    </div>
    <div class="complete-row"><button type="button" class="button button-primary complete-lesson" data-tense="${tense.id}">Mark lesson complete ✓</button></div>`;
  const panel = document.getElementById("lessonPanel");
  panel.querySelector(".translation-toggle").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const show = button.getAttribute("aria-pressed") !== "true";
    panel.querySelectorAll(".example-km").forEach((translation) => { translation.hidden = !show; });
    button.setAttribute("aria-pressed", String(show));
    button.textContent = show ? "Hide Khmer translations" : "Show Khmer translations";
  });
  panel.querySelector(".complete-lesson").addEventListener("click", () => markTenseComplete(id));
}

function markPassiveComplete(id) {
  if (!progress.completedPassives.includes(id)) {
    progress.completedPassives.push(id);
    saveProgress();
    renderPassiveChoices();
    renderPassiveLesson(id);
    showToast("Passive voice lesson completed — well done! 🌟");
  } else {
    showToast("This passive lesson is already complete. Keep practicing! ✨");
  }
}

function renderPassiveChoices() {
  const host = document.getElementById("passiveChoices");
  host.innerHTML = passiveLessons.map((lesson) => `
    <button class="passive-choice" type="button" data-passive="${lesson.id}" aria-pressed="false">
      <span>${escapeHTML(lesson.name)}</span><span class="done-mark" aria-hidden="true">${progress.completedPassives.includes(lesson.id) ? "✓" : "→"}</span>
    </button>`).join("");
}

function renderPassiveLesson(id) {
  const lesson = passiveLessons.find((item) => item.id === id);
  if (!lesson) return;
  document.querySelectorAll(".passive-choice").forEach((button) => {
    const selected = button.dataset.passive === id;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const [positive, negative, question] = lesson.forms;
  document.getElementById("passiveLessonPanel").innerHTML = `
    <div class="lesson-header">
      <div><h3>${escapeHTML(lesson.name)}</h3><p>${escapeHTML(lesson.explanation)}</p></div>
      <span class="lesson-badge">Passive voice</span>
    </div>
    <div class="passive-tip"><strong>Remember:</strong> The receiver of the action comes first. The doer can follow <em>by</em>, or be left out when it is not important.</div>
    <div class="lesson-grid">
      <div class="lesson-block"><h4>🧱 Sentence formula</h4>
        <div class="formula-list">
          <div class="formula-line"><b>+</b> ${escapeHTML(positive)}</div>
          <div class="formula-line"><b>−</b> ${escapeHTML(negative)}</div>
          <div class="formula-line"><b>?</b> ${escapeHTML(question)}</div>
        </div>
      </div>
      <div class="lesson-meta">
        <div class="lesson-block"><h4>⏰ Time signal words</h4><div class="tag-list">${lesson.signal.split(" · ").map((word) => `<span class="tag">${escapeHTML(word)}</span>`).join("")}</div></div>
        <div class="lesson-block"><h4>💡 Common mistake</h4><p class="mistake-text">${escapeHTML(lesson.mistake)}</p></div>
      </div>
    </div>
    <div class="examples-wrap">
      <div class="examples-heading"><h4>🌼 5 examples with Khmer translations</h4><button type="button" class="text-button translation-toggle" aria-pressed="false">Show Khmer translations</button></div>
      <div class="example-list">${lesson.examples.map(([english, khmer]) => `<div class="example-item"><span class="example-en">${escapeHTML(english)}</span><span class="example-km" hidden lang="km">${escapeHTML(khmer)}</span></div>`).join("")}</div>
    </div>
    <div class="complete-row"><button type="button" class="button button-primary complete-passive" data-passive="${lesson.id}">${progress.completedPassives.includes(lesson.id) ? "Lesson completed ✓" : "Mark lesson complete ✓"}</button></div>`;
  const panel = document.getElementById("passiveLessonPanel");
  panel.querySelector(".translation-toggle").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const show = button.getAttribute("aria-pressed") !== "true";
    panel.querySelectorAll(".example-km").forEach((translation) => { translation.hidden = !show; });
    button.setAttribute("aria-pressed", String(show));
    button.textContent = show ? "Hide Khmer translations" : "Show Khmer translations";
  });
  panel.querySelector(".complete-passive").addEventListener("click", () => markPassiveComplete(id));
}

function setupPassiveLessons() {
  const choices = document.getElementById("passiveChoices");
  choices.addEventListener("click", (event) => {
    const button = event.target.closest(".passive-choice");
    if (button) renderPassiveLesson(button.dataset.passive);
  });
  renderPassiveChoices();
  renderPassiveLesson(passiveLessons[0].id);
  renderPassivePractice();
}

let passivePracticeIndex = 0;
let passivePracticeAnswers = [];
let passivePracticeRecorded = false;

function renderPassivePractice() {
  passivePracticeIndex = 0;
  passivePracticeAnswers = [];
  passivePracticeRecorded = false;
  showPassivePracticeQuestion();
  const panel = document.getElementById("passivePracticePanel");
  panel.addEventListener("click", (event) => {
    const option = event.target.closest(".passive-practice-option");
    if (option) answerPassivePractice(Number(option.dataset.option));
    if (event.target.closest(".passive-practice-next")) {
      passivePracticeIndex += 1;
      showPassivePracticeQuestion();
    }
    if (event.target.closest(".passive-practice-restart")) {
      passivePracticeIndex = 0;
      passivePracticeAnswers = [];
      passivePracticeRecorded = false;
      showPassivePracticeQuestion();
    }
  });
}

function showPassivePracticeQuestion() {
  const panel = document.getElementById("passivePracticePanel");
  if (passivePracticeIndex >= passivePracticeQuestions.length) {
    showPassivePracticeResult();
    return;
  }
  const question = passivePracticeQuestions[passivePracticeIndex];
  const result = passivePracticeAnswers[passivePracticeIndex];
  panel.innerHTML = `
    <div class="practice-progress"><span>Question ${passivePracticeIndex + 1} of ${passivePracticeQuestions.length}</span><span>⭐ ${passivePracticeAnswers.filter((answer) => answer && answer.isCorrect).length} correct</span></div>
    <div class="progress-track" aria-label="Passive practice progress"><div class="progress-fill" style="width:${(passivePracticeIndex / passivePracticeQuestions.length) * 100}%"></div></div>
    <div class="practice-tense-label">${escapeHTML(question.tense)}</div>
    <p class="practice-question">${escapeHTML(question.question)}</p>
    <div class="practice-options">${question.options.map((option, index) => {
      const state = result && index === question.answer ? "is-correct" : result && index === result.selected && !result.isCorrect ? "is-wrong" : "";
      return `<button type="button" class="practice-option passive-practice-option ${state}" data-option="${index}" ${result ? "disabled" : ""}>${escapeHTML(option)}</button>`;
    }).join("")}</div>
    <div class="practice-feedback-slot" aria-live="polite">${result ? `<p class="practice-feedback ${result.isCorrect ? "" : "is-wrong"}">${result.isCorrect ? "That’s right! " : `The correct answer is “${escapeHTML(question.options[question.answer])}”. `}${escapeHTML(question.explain)}</p>` : ""}</div>
    <div class="practice-footer"><span>${result ? (result.isCorrect ? "🌟 Correct!" : "Keep learning — you can do it!") : "Choose one answer"}</span>${result ? '<button class="button button-primary passive-practice-next" type="button">Next question →</button>' : ""}</div>`;
}

function answerPassivePractice(selected) {
  if (passivePracticeAnswers[passivePracticeIndex]) return;
  const question = passivePracticeQuestions[passivePracticeIndex];
  const isCorrect = selected === question.answer;
  passivePracticeAnswers[passivePracticeIndex] = { isCorrect, selected };
  if (isCorrect) addPoints(5);
  else playTone(false);
  showPassivePracticeQuestion();
}

function showPassivePracticeResult() {
  const score = passivePracticeAnswers.filter((answer) => answer && answer.isCorrect).length;
  if (!passivePracticeRecorded) {
    passivePracticeAnswers.forEach((answer, index) => {
      if (answer && answer.isCorrect && !progress.completedPassives.includes(passivePracticeQuestions[index].lessonId)) {
        progress.completedPassives.push(passivePracticeQuestions[index].lessonId);
      }
    });
    progress.activities += 1;
    saveProgress();
    updateDashboard();
    renderPassiveChoices();
    passivePracticeRecorded = true;
  }
  document.getElementById("passivePracticePanel").innerHTML = `<div class="practice-result">
    <div class="result-emoji" aria-hidden="true">${score >= 3 ? "🎉" : "🌼"}</div>
    <p class="eyebrow">PASSIVE PRACTICE COMPLETE</p><h3>${score >= 3 ? "Wonderful progress!" : "You finished all four!"}</h3>
    <div class="result-score">${score} / ${passivePracticeQuestions.length}</div>
    <p>You answered ${score} correctly. Review a passive lesson and try again whenever you like.</p>
    <button class="button button-primary passive-practice-restart" type="button">Practice again ↻</button>
  </div>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Speech playback is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = activeRate;
  window.speechSynthesis.speak(utterance);
}

function setupListening() {
  const list = document.getElementById("dialogueList");
  list.innerHTML = listeningLines.map((line, index) => `
    <button class="dialogue-line" type="button" data-line="${index}" aria-label="Play ${escapeHTML(line.speaker)}: ${escapeHTML(line.text)}">
      <span class="play-icon" aria-hidden="true">▶</span><span class="dialogue-copy"><strong>${escapeHTML(line.speaker)}</strong><small>${escapeHTML(line.text)}</small></span>
    </button>`).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest(".dialogue-line");
    if (button) speak(listeningLines[Number(button.dataset.line)].text);
  });
  document.querySelectorAll(".speed-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeRate = Number(button.dataset.rate);
      document.querySelectorAll(".speed-button").forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
    });
  });
  document.getElementById("listeningQuestion").textContent = listeningQuiz.question;
  document.getElementById("listeningAnswers").innerHTML = listeningQuiz.options.map((answer, index) =>
    `<button class="answer-option" type="button" data-answer="${index}">${escapeHTML(answer)}</button>`).join("");
  document.getElementById("listeningAnswers").addEventListener("click", (event) => {
    const button = event.target.closest(".answer-option");
    if (!button || button.disabled) return;
    const correct = Number(button.dataset.answer) === listeningQuiz.answer;
    document.querySelectorAll("#listeningAnswers .answer-option").forEach((option) => {
      option.disabled = true;
      if (Number(option.dataset.answer) === listeningQuiz.answer) option.classList.add("correct-answer");
    });
    if (!correct) button.classList.add("wrong-answer");
    document.getElementById("listeningFeedback").textContent = correct ? "Correct! Lina is going to the library. 🌟" : "Not quite. Listen again: Lina is going to the library.";
    if (correct) addPoints(5, true);
    else progress.activities += 1, saveProgress(), updateDashboard();
  });
}

function setupSpeaking() {
  let sentenceIndex = 0;
  const target = document.getElementById("speakingTarget");
  const recordButton = document.getElementById("recordButton");
  const recognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
  target.textContent = speakingSentences[sentenceIndex];
  document.getElementById("speakTargetButton").addEventListener("click", () => speak(target.textContent));
  if (!recognitionConstructor) {
    document.getElementById("speechSupport").textContent = "Speech recognition is not available in this browser. You can still listen to the example and practice speaking aloud.";
    recordButton.disabled = true;
    recordButton.setAttribute("aria-label", "Speech recognition is not supported");
    return;
  }
  speechRecognition = new recognitionConstructor();
  speechRecognition.lang = "en-US";
  speechRecognition.interimResults = false;
  speechRecognition.maxAlternatives = 1;
  recordButton.addEventListener("click", () => {
    document.getElementById("speechSupport").textContent = "Listening… speak now.";
    recordButton.classList.add("is-recording");
    recordButton.disabled = true;
    speechRecognition.start();
  });
  speechRecognition.addEventListener("result", (event) => {
    const recognized = event.results[0][0].transcript.trim();
    const expectedWords = target.textContent.toLowerCase().match(/[a-z']+/g) || [];
    const saidWords = recognized.toLowerCase().match(/[a-z']+/g) || [];
    const matched = saidWords.filter((word) => expectedWords.includes(word)).length;
    const score = expectedWords.length ? Math.round((matched / expectedWords.length) * 100) : 0;
    document.getElementById("recognizedText").textContent = recognized;
    document.getElementById("speechScore").textContent = `${score}%`;
    document.getElementById("speechFeedback").textContent = score >= 80 ? "Great job — that was very close!" : score >= 50 ? "Good try! Listen once more and try again." : "Keep practicing. Speak slowly and clearly.";
    document.getElementById("speechResult").hidden = false;
    addPoints(Math.round(score / 10), true);
    sentenceIndex = (sentenceIndex + 1) % speakingSentences.length;
    target.textContent = speakingSentences[sentenceIndex];
  });
  speechRecognition.addEventListener("error", (event) => {
    const message = event.error === "not-allowed" ? "Microphone permission was denied. Allow microphone access to try again." : `Speech recognition error: ${event.error}. Please try again.`;
    document.getElementById("speechSupport").textContent = message;
  });
  speechRecognition.addEventListener("end", () => {
    recordButton.classList.remove("is-recording");
    recordButton.disabled = false;
    if (document.getElementById("speechSupport").textContent === "Listening… speak now.") document.getElementById("speechSupport").textContent = "Ready when you are.";
  });
}

function playTone(isCorrect) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = isCorrect ? 660 : 220;
  gain.gain.setValueAtTime(0.08, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.18);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.18);
  oscillator.addEventListener("ended", () => context.close());
}

function renderGameTabs() {
  document.querySelectorAll(".game-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".game-tab").forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      startGame(tab.dataset.game);
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;
      event.preventDefault();
      const tabs = [...document.querySelectorAll(".game-tab")];
      const next = (tabs.indexOf(tab) + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  });
  startGame("quiz");
}

function startGame(type) {
  clearInterval(timerInterval);
  currentGame = type;
  if (type === "quiz") gameSession = { index: 0, score: 0, lives: 3, time: 15 };
  if (type === "fill") gameSession = { index: 0, score: 0, lives: 3 };
  if (type === "builder") gameSession = { index: 0, score: 0, lives: 3, answer: [] };
  if (type === "memory") {
    const cards = gameQuestions.memory.flatMap(([base, past], pair) => [
      { word: base, pair }, { word: past, pair }
    ]).sort(() => Math.random() - 0.5);
    gameSession = { cards, first: null, lock: false, matched: 0, score: 0 };
  }
  renderGame();
}

function gameHeader(title) {
  const stats = currentGame === "memory"
    ? `⭐ ${gameSession.score} &nbsp; · &nbsp; ✓ ${gameSession.matched}/${gameQuestions.memory.length}`
    : `⭐ ${gameSession.score} &nbsp; · &nbsp; ❤️ ${"♥".repeat(gameSession.lives)}${"♡".repeat(3 - gameSession.lives)}${currentGame === "quiz" ? ` &nbsp; · &nbsp; ⏱ ${gameSession.time}s` : ""}`;
  return `<div class="game-topline"><h3>${title}</h3><div class="game-stats">${stats}</div></div>`;
}

function renderGame() {
  const panel = document.getElementById("gamePanel");
  if (currentGame === "quiz") renderQuiz(panel);
  if (currentGame === "fill") renderFill(panel);
  if (currentGame === "builder") renderBuilder(panel);
  if (currentGame === "memory") renderMemory(panel);
}

function renderQuiz(panel) {
  const session = gameSession;
  if (session.index >= gameQuestions.quiz.length || session.lives <= 0) {
    finishGame(panel, "Quick Quiz", session.score);
    return;
  }
  const item = gameQuestions.quiz[session.index];
  panel.innerHTML = `${gameHeader("⚡ Quick Quiz")}
    <div class="practice-progress"><span>Question ${session.index + 1} of ${gameQuestions.quiz.length}</span><span>Choose the best answer</span></div>
    <p class="game-question">${escapeHTML(item.q)}</p>
    <div class="game-options">${item.options.map((option, index) => `<button class="answer-option" type="button" data-answer="${index}">${escapeHTML(option)}</button>`).join("")}</div>
    <p class="game-feedback" aria-live="polite"></p>`;
  panel.querySelector(".game-options").addEventListener("click", (event) => {
    const button = event.target.closest(".answer-option");
    if (!button || button.disabled) return;
    answerQuiz(Number(button.dataset.answer), item.answer, panel);
  });
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    session.time -= 1;
    const timeLabel = panel.querySelector(".game-stats");
    if (timeLabel) timeLabel.innerHTML = `⭐ ${session.score} &nbsp; · &nbsp; ❤️ ${"♥".repeat(session.lives)}${"♡".repeat(3 - session.lives)} &nbsp; · &nbsp; ⏱ ${session.time}s`;
    if (session.time <= 0) answerQuiz(-1, item.answer, panel);
  }, 1000);
}

function answerQuiz(selected, correct, panel) {
  if (gameSession.locked) return;
  gameSession.locked = true;
  clearInterval(timerInterval);
  const isCorrect = selected === correct;
  const buttons = panel.querySelectorAll(".answer-option");
  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.answer) === correct) button.classList.add("correct-answer");
  });
  if (selected >= 0 && !isCorrect) buttons[selected].classList.add("wrong-answer");
  gameSession.locked = true;
  if (isCorrect) { gameSession.score += 10; playTone(true); }
  else { gameSession.lives -= 1; playTone(false); }
  const feedback = panel.querySelector(".game-feedback");
  feedback.textContent = isCorrect ? "Correct! Nice work. 🌟" : selected === -1 ? "Time is up!" : "Not quite. The correct answer is highlighted.";
  gameSession.index += 1;
  gameSession.time = 15;
  addPoints(isCorrect ? 10 : 0);
  setTimeout(() => { gameSession.locked = false; renderGame(); }, 750);
}

function renderFill(panel) {
  const session = gameSession;
  if (session.index >= gameQuestions.fill.length || session.lives <= 0) {
    finishGame(panel, "Fill in the Blank", session.score);
    return;
  }
  const item = gameQuestions.fill[session.index];
  panel.innerHTML = `${gameHeader("✍️ Fill in the Blank")}
    <div class="practice-progress"><span>Question ${session.index + 1} of ${gameQuestions.fill.length}</span><span>Type the missing words</span></div>
    <p class="game-question">${escapeHTML(item.before)} <span class="blank-word">_____</span> ${escapeHTML(item.after)}</p>
    <form class="game-input-row"><label class="sr-only" for="fillAnswer">Missing words</label><input class="game-input" id="fillAnswer" autocomplete="off" placeholder="Type your answer" required><button class="button button-primary" type="submit">Check answer</button></form>
    <p class="game-feedback" aria-live="polite"></p>`;
  panel.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = panel.querySelector("input");
    const answer = input.value.trim().toLowerCase().replace(/[.!?]$/, "");
    const correct = answer === item.answer.toLowerCase();
    input.disabled = true;
    panel.querySelector("button[type=submit]").disabled = true;
    panel.querySelector(".game-feedback").textContent = correct ? "Correct! " + item.hint + " 🌟" : `The answer is “${item.answer}”. ${item.hint}`;
    panel.querySelector(".game-feedback").style.color = correct ? "var(--green)" : "var(--muted)";
    if (correct) { session.score += 10; addPoints(10); }
    else session.lives -= 1;
    playTone(correct);
    setTimeout(() => { session.index += 1; renderGame(); }, 1100);
  });
}

function renderBuilder(panel) {
  const session = gameSession;
  if (session.index >= gameQuestions.builder.length || session.lives <= 0) {
    finishGame(panel, "Sentence Builder", session.score);
    return;
  }
  const item = gameQuestions.builder[session.index];
  session.answer = [];
  const bankWords = [...item.words].sort(() => Math.random() - 0.5);
  panel.innerHTML = `${gameHeader("🧩 Sentence Builder")}
    <div class="practice-progress"><span>Sentence ${session.index + 1} of ${gameQuestions.builder.length}</span><span>Drag or tap words to build</span></div>
    <div class="builder-bank" aria-label="Available words">${bankWords.map((word, index) => `<button class="word-chip" draggable="true" type="button" data-word="${escapeHTML(word)}" data-index="${index}" aria-label="Move word ${escapeHTML(word)}">${escapeHTML(word)}</button>`).join("")}</div>
    <div class="builder-answer" aria-label="Your sentence" aria-live="polite"></div>
    <div class="game-options"><button class="button button-primary check-sentence" type="button">Check sentence</button><button class="button button-quiet clear-sentence" type="button">Clear</button></div>
    <p class="game-feedback" aria-live="polite"></p>`;
  const bank = panel.querySelector(".builder-bank");
  const answerZone = panel.querySelector(".builder-answer");
  function moveChip(chip, toAnswer) {
    if (toAnswer && chip.parentElement === bank) {
      session.answer.push(chip.dataset.word);
      answerZone.appendChild(chip);
    } else if (!toAnswer && chip.parentElement === answerZone) {
      const index = session.answer.indexOf(chip.dataset.word);
      if (index >= 0) session.answer.splice(index, 1);
      bank.appendChild(chip);
    }
  }
  bank.addEventListener("click", (event) => {
    const chip = event.target.closest(".word-chip");
    if (chip) moveChip(chip, true);
  });
  answerZone.addEventListener("click", (event) => {
    const chip = event.target.closest(".word-chip");
    if (chip) moveChip(chip, false);
  });
  [bank, answerZone].forEach((zone) => {
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const word = event.dataTransfer.getData("text/plain");
      const chip = [...panel.querySelectorAll(".word-chip")].find((item) => item.dataset.word === word && item.parentElement !== zone);
      if (chip) moveChip(chip, zone === answerZone);
    });
  });
  panel.querySelectorAll(".word-chip").forEach((chip) => {
    chip.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", chip.dataset.word));
  });
  panel.querySelector(".check-sentence").addEventListener("click", () => {
    if (session.answer.length !== item.order.length) {
      panel.querySelector(".game-feedback").textContent = "Move all the words into your sentence first.";
      return;
    }
    const correct = session.answer.every((word, index) => word === item.order[index]);
    panel.querySelector(".game-feedback").textContent = correct ? "Perfect sentence! 🌟" : `Try again. The correct order is: ${item.order.join(" ")}`;
    if (correct) { session.score += 10; addPoints(10); }
    else session.lives -= 1;
    playTone(correct);
    setTimeout(() => { if (!correct && session.lives > 0) renderGame(); else { session.index += 1; renderGame(); } }, correct ? 850 : 1500);
  });
  panel.querySelector(".clear-sentence").addEventListener("click", () => {
    session.answer = [];
    [...answerZone.querySelectorAll(".word-chip")].forEach((chip) => bank.appendChild(chip));
  });
}

function renderMemory(panel) {
  const session = gameSession;
  if (session.matched === gameQuestions.memory.length) {
    finishGame(panel, "Verb Memory Match", session.score);
    return;
  }
  panel.innerHTML = `${gameHeader("🃏 Verb Memory Match")}
    <div class="practice-progress"><span>Match the base verb to its past form</span><span>Pairs found: ${session.matched}</span></div>
    <div class="memory-grid">${session.cards.map((card, index) => {
      const visible = card.revealed || card.matched;
      return `<button type="button" class="memory-card ${visible ? "" : "is-hidden"} ${card.matched ? "is-matched" : ""}" data-index="${index}" ${card.matched || session.lock ? "disabled" : ""} aria-label="${visible ? escapeHTML(card.word) : "Hidden verb card"}">${visible ? escapeHTML(card.word) : "?"}</button>`;
    }).join("")}</div>
    <p class="game-feedback" aria-live="polite">${session.lock ? "Finding a match…" : "Tap two cards to find a pair."}</p>`;
  panel.querySelector(".memory-grid").addEventListener("click", (event) => {
    const button = event.target.closest(".memory-card");
    if (!button || session.lock) return;
    const card = session.cards[Number(button.dataset.index)];
    if (card.revealed || card.matched) return;
    card.revealed = true;
    if (!session.first) {
      session.first = card;
      renderGame();
      return;
    }
    if (session.first.pair === card.pair && session.first !== card) {
      session.first.matched = true;
      card.matched = true;
      session.matched += 1;
      session.score += 10;
      session.first = null;
      playTone(true);
      addPoints(10);
      renderGame();
      return;
    }
    session.lock = true;
    playTone(false);
    renderGame();
    setTimeout(() => {
      session.cards.forEach((item) => { if (!item.matched) item.revealed = false; });
      session.first = null;
      session.lock = false;
      renderGame();
    }, 850);
  });
}

function finishGame(panel, title, score) {
  clearInterval(timerInterval);
  if (!gameSession.finished) {
    gameSession.finished = true;
    progress.activities += 1;
    if (score > 0) progress.score += Math.floor(score / 10);
    saveProgress();
    updateDashboard();
  }
  panel.innerHTML = `<div class="game-over"><div class="emoji" aria-hidden="true">${score >= 30 ? "🏆" : "🌱"}</div><h3>${title} complete!</h3><p>You earned <strong>${score} game points</strong>. ${score >= 30 ? "Amazing work!" : "Play again to improve your score!"}</p><button class="button button-primary play-again" type="button">Play again ↻</button></div>`;
  panel.querySelector(".play-again").addEventListener("click", () => startGame(currentGame));
}

function renderPractice() {
  const panel = document.getElementById("practicePanel");
  currentPracticeIndex = 0;
  practiceAnswers = [];
  showPracticeQuestion();
  panel.addEventListener("click", (event) => {
    const option = event.target.closest(".practice-option");
    if (option) answerPractice(Number(option.dataset.option));
    if (event.target.closest(".practice-next")) nextPracticeQuestion();
    if (event.target.closest(".practice-restart")) {
      currentPracticeIndex = 0;
      practiceAnswers = [];
      showPracticeQuestion();
    }
  });
}

function showPracticeQuestion() {
  const panel = document.getElementById("practicePanel");
  if (currentPracticeIndex >= practiceQuestions.length) {
    showPracticeResult();
    return;
  }
  const question = practiceQuestions[currentPracticeIndex];
  const answered = practiceAnswers[currentPracticeIndex];
  panel.innerHTML = `
    <div class="practice-progress"><span>Question ${currentPracticeIndex + 1} of ${practiceQuestions.length}</span><span>⭐ ${practiceAnswers.filter(Boolean).length} correct</span></div>
    <div class="progress-track" aria-label="Practice progress"><div class="progress-fill" style="width:${(currentPracticeIndex / practiceQuestions.length) * 100}%"></div></div>
    <div class="practice-tense-label">${escapeHTML(question.tense)}</div>
    <p class="practice-question">${escapeHTML(question.question)}</p>
    <div class="practice-options">${question.options.map((option, index) => `<button type="button" class="practice-option" data-option="${index}" ${answered ? "disabled" : ""}>${escapeHTML(option)}</button>`).join("")}</div>
    <div class="practice-feedback-slot" aria-live="polite"></div>
    <div class="practice-footer"><span>${answered ? "Answer checked" : "Choose one answer"}</span>${answered ? '<button class="button button-primary practice-next" type="button">Next question →</button>' : ""}</div>`;
  if (answered) showPracticeFeedback();
}

function answerPractice(index) {
  if (practiceAnswers[currentPracticeIndex]) return;
  const isCorrect = index === practiceQuestions[currentPracticeIndex].answer;
  practiceAnswers[currentPracticeIndex] = { isCorrect, selected: index };
  const question = practiceQuestions[currentPracticeIndex];
  document.querySelectorAll("#practicePanel .practice-option").forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.option) === question.answer) button.classList.add("is-correct");
    if (Number(button.dataset.option) === index && !isCorrect) button.classList.add("is-wrong");
  });
  if (isCorrect) addPoints(5);
  else playTone(false);
  showPracticeFeedback();
  const footer = document.querySelector("#practicePanel .practice-footer");
  footer.innerHTML = `<span>${isCorrect ? "🌟 Correct!" : "Keep learning — you can do it!"}</span><button class="button button-primary practice-next" type="button">Next question →</button>`;
}

function showPracticeFeedback() {
  const question = practiceQuestions[currentPracticeIndex];
  const result = practiceAnswers[currentPracticeIndex];
  const slot = document.querySelector("#practicePanel .practice-feedback-slot");
  if (!slot || !result) return;
  slot.innerHTML = `<p class="practice-feedback ${result.isCorrect ? "" : "is-wrong"}">${result.isCorrect ? "That’s right! " : `The correct answer is “${escapeHTML(question.options[question.answer])}”. `}${escapeHTML(question.explain)}</p>`;
}

function nextPracticeQuestion() {
  currentPracticeIndex += 1;
  if (currentPracticeIndex === practiceQuestions.length) {
    const correctIds = practiceQuestions.filter((question, index) => practiceAnswers[index] && practiceAnswers[index].isCorrect).map((question) => tenses.find((tense) => tense.name === question.tense).id);
    correctIds.forEach((id) => {
      if (!progress.completedTenses.includes(id)) progress.completedTenses.push(id);
    });
    progress.activities += 1;
    saveProgress();
    updateDashboard();
  }
  showPracticeQuestion();
}

function showPracticeResult() {
  const score = practiceAnswers.filter(Boolean).filter((answer) => answer.isCorrect).length;
  const percentage = Math.round((score / practiceQuestions.length) * 100);
  document.getElementById("practicePanel").innerHTML = `<div class="practice-result">
    <div class="result-emoji" aria-hidden="true">${percentage >= 75 ? "🎉" : "🌼"}</div>
    <p class="eyebrow">PRACTICE COMPLETE</p><h3>${percentage >= 75 ? "Wonderful progress!" : "You finished all 12!"}</h3>
    <div class="result-score">${score} / ${practiceQuestions.length}</div>
    <p>You answered ${score} correctly (${percentage}%). Review any tense and try again whenever you like.</p>
    <button class="button button-primary practice-restart" type="button">Practice again ↻</button>
  </div>`;
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    root.dataset.theme = theme;
    progress.theme = theme;
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    document.getElementById("themeIcon").textContent = theme === "dark" ? "☀" : "☾";
    document.getElementById("themeText").textContent = theme === "dark" ? "Light mode" : "Dark mode";
    saveProgress();
  }
  applyTheme(progress.theme);
  toggle.addEventListener("click", () => applyTheme(progress.theme === "dark" ? "light" : "dark"));
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    toggle.querySelector("span").textContent = open ? "×" : "☰";
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.querySelector("span").textContent = "☰";
    }
  });
}

updateDailyStreak();
setupTheme();
setupMobileMenu();
renderTenseGroups();
setupPassiveLessons();
setupListening();
setupSpeaking();
renderGameTabs();
renderPractice();
