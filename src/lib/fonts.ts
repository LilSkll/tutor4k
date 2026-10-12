import { Inter } from "next/font/google";

/**
 * App/teacher shells only — auth & marketing stay on the system stack
 * so login/signup do not download Inter woff2.
 */
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  // Only imported from (app)/(teacher) layouts — preload there, not on marketing.
  preload: true,
  adjustFontFallback: true,
});
