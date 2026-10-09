import type { Metadata, Viewport } from "next";
import "./globals.css";
import { VercelAnalytics } from "@/components/analytics/vercel-analytics";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://spanishwithpavel.com",
  ),
  title: "Spanish with Pavel — AI Spanish Learning Platform",
  description:
    "Personal AI tutor for learning Spanish: grammar, vocabulary, exercises, DELE prep and progress tracking.",
  authors: [{ name: "Драгунов Павел" }],
  keywords: [
    "Spanish",
    "learn Spanish",
    "AI tutor",
    "DELE",
    "grammar",
    "español",
  ],
  applicationName: "Spanish with Pavel",
  // iOS home-screen / standalone (still needed alongside the web manifest).
  appleWebApp: {
    capable: true,
    title: "Spanish with Pavel",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/apple-touch-icon.png"],
  },
  other: {
    // Helps older iOS builds treat the shortcut as an app, not a Safari bookmark.
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#121826" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
