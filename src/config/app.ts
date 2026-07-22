import type {
  ExerciseType,
  Goal,
  InterfaceLanguage,
  Level,
} from "@/types";

// ----- CEFR Levels ---------------------------------------------------

export const LEVELS: { value: Level; descriptionKey: string }[] = [
  { value: "A1", descriptionKey: "level.desc.A1" },
  { value: "A2", descriptionKey: "level.desc.A2" },
  { value: "B1", descriptionKey: "level.desc.B1" },
  { value: "B2", descriptionKey: "level.desc.B2" },
  { value: "C1", descriptionKey: "level.desc.C1" },
];

export const LEVEL_ORDER: Level[] = ["A1", "A2", "B1", "B2", "C1"];

// ----- Goals ---------------------------------------------------------

export const GOALS: { value: Goal; labelKey: string; emoji: string }[] = [
  { value: "TRAVEL", labelKey: "goal.TRAVEL", emoji: "✈️" },
  { value: "WORK", labelKey: "goal.WORK", emoji: "💼" },
  { value: "RELOCATION", labelKey: "goal.RELOCATION", emoji: "🏡" },
  { value: "UNIVERSITY", labelKey: "goal.UNIVERSITY", emoji: "🎓" },
  { value: "DELE", labelKey: "goal.DELE", emoji: "📜" },
  { value: "GENERAL", labelKey: "goal.GENERAL", emoji: "📚" },
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
  3: "streak.reward.3",
  7: "streak.reward.7",
  14: "streak.reward.14",
  30: "streak.reward.30",
  100: "streak.reward.100",
} as const;
