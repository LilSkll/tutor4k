import type {
  ExerciseType,
  Goal,
  InterfaceLanguage,
  Level,
} from "@/types";

// ----- CEFR Levels ---------------------------------------------------

export const LEVELS: { value: Level; label: string; description: string }[] = [
  { value: "A1", label: "A1", description: "Начальный" },
  { value: "A2", label: "A2", description: "Элементарный" },
  { value: "B1", label: "B1", description: "Средний" },
  { value: "B2", label: "B2", description: "Выше среднего" },
  { value: "C1", label: "C1", description: "Продвинутый" },
];

export const LEVEL_ORDER: Level[] = ["A1", "A2", "B1", "B2", "C1"];

// ----- Goals ---------------------------------------------------------

export const GOALS: { value: Goal; label: string; emoji: string }[] = [
  { value: "TRAVEL", label: "Для путешествий", emoji: "✈️" },
  { value: "WORK", label: "Для работы", emoji: "💼" },
  { value: "RELOCATION", label: "Для переезда", emoji: "🏡" },
  { value: "UNIVERSITY", label: "Для учёбы", emoji: "🎓" },
  { value: "DELE", label: "Подготовка к DELE", emoji: "📜" },
  { value: "GENERAL", label: "Общее изучение", emoji: "📚" },
];

// ----- Interface languages -------------------------------------------

export const INTERFACE_LANGUAGES: {
  value: InterfaceLanguage;
  label: string;
  flag: string;
}[] = [
  { value: "ru", label: "Русский", flag: "🇷🇺" },
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "de", label: "Deutsch", flag: "🇩🇪" },
];

// ----- Exercise types ------------------------------------------------

export const EXERCISE_TYPES: {
  value: ExerciseType;
  labelKey: string;
  descriptionKey: string;
  icon: string;
}[] = [
  {
    value: "multiple_choice",
    labelKey: "exercises.type.multiple_choice.label",
    descriptionKey: "exercises.type.multiple_choice.desc",
    icon: "☑️",
  },
  {
    value: "fill_blank",
    labelKey: "exercises.type.fill_blank.label",
    descriptionKey: "exercises.type.fill_blank.desc",
    icon: "✏️",
  },
  {
    value: "translation",
    labelKey: "exercises.type.translation.label",
    descriptionKey: "exercises.type.translation.desc",
    icon: "🔄",
  },
  {
    value: "error_correction",
    labelKey: "exercises.type.error_correction.label",
    descriptionKey: "exercises.type.error_correction.desc",
    icon: "🔍",
  },
  {
    value: "sentence_building",
    labelKey: "exercises.type.sentence_building.label",
    descriptionKey: "exercises.type.sentence_building.desc",
    icon: "🧩",
  },
];

// ----- App navigation ------------------------------------------------

export const NAV_ITEMS = [
  { href: "/dashboard", labelKey: "nav.dashboard", icon: "LayoutDashboard" },
  { href: "/tutor", labelKey: "nav.tutor", icon: "MessageSquare" },
  { href: "/grammar", labelKey: "nav.grammar", icon: "BookOpen" },
  { href: "/exercises", labelKey: "nav.exercises", icon: "Dumbbell" },
  { href: "/vocabulary", labelKey: "nav.vocabulary", icon: "Languages" },
  { href: "/progress", labelKey: "nav.progress", icon: "TrendingUp" },
] as const;

// ----- Daily goal presets --------------------------------------------

export const DAILY_GOAL_OPTIONS = [10, 15, 30, 45, 60];

// ----- Daily streak constants ----------------------------------------

export const STREAK_REWARDS = {
  3: "Хорошая работа!",
  7: "Целая неделя 🔥",
  14: "Две недели подряд 🌟",
  30: "Месяц постоянства! 🏆",
  100: "Сотня дней испанского 👑",
} as const;
