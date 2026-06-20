import type {
  ExerciseType,
  Goal,
  InterfaceLanguage,
  Level,
} from "@/types";

// ----- CEFR Levels ---------------------------------------------------

export const LEVELS: { value: Level; label: string; description: string }[] = [
  { value: "A1", label: "A1", description: "Principiante — Начальный" },
  { value: "A2", label: "A2", description: "Básico — Элементарный" },
  { value: "B1", label: "B1", description: "Intermedio — Средний" },
  { value: "B2", label: "B2", description: "Avanzado — Высокий средний" },
  { value: "C1", label: "C1", description: "Superior — Продвинутый" },
];

export const LEVEL_ORDER: Level[] = ["A1", "A2", "B1", "B2", "C1"];

// ----- Goals ---------------------------------------------------------

export const GOALS: { value: Goal; label: string; emoji: string }[] = [
  { value: "TRAVEL", label: "Para viajes", emoji: "✈️" },
  { value: "WORK", label: "Para el trabajo", emoji: "💼" },
  { value: "RELOCATION", label: "Para mudanza", emoji: "🏡" },
  { value: "UNIVERSITY", label: "Para la universidad", emoji: "🎓" },
  { value: "DELE", label: "Preparación DELE", emoji: "📜" },
  { value: "GENERAL", label: "Estudio general", emoji: "📚" },
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
    label: "Multiple choice",
    description: "Выбор правильного ответа",
    icon: "☑️",
  },
  {
    value: "fill_blank",
    label: "Fill in the blank",
    description: "Заполни пропуск",
    icon: "✏️",
  },
  {
    value: "translation",
    label: "Translation",
    description: "Перевод с русского на испанский",
    icon: "🔄",
  },
  {
    value: "error_correction",
    label: "Error correction",
    description: "Найди и исправь ошибку",
    icon: "🔍",
  },
  {
    value: "sentence_building",
    label: "Sentence building",
    description: "Составь предложение",
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
  3: "¡Buen trabajo!",
  7: "Una semana completa 🔥",
  14: "Dos semanas seguidas 🌟",
  30: "¡Un mes de constancia! 🏆",
  100: "Centurión del español 👑",
} as const;
