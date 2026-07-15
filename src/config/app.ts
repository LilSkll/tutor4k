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
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    value: "multiple_choice",
    label: "Выбор ответа",
    description: "Выбери правильный вариант",
    icon: "☑️",
  },
  {
    value: "fill_blank",
    label: "Заполни пропуск",
    description: "Вставь недостающее слово",
    icon: "✏️",
  },
  {
    value: "translation",
    label: "Перевод",
    description: "Переведи с русского на испанский",
    icon: "🔄",
  },
  {
    value: "error_correction",
    label: "Исправь ошибку",
    description: "Найди и исправь ошибку",
    icon: "🔍",
  },
  {
    value: "sentence_building",
    label: "Составь предложение",
    description: "Собери предложение из слов",
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
