import type { MetadataRoute } from "next";

/**
 * Web App Manifest — required for iOS/Android “Add to Home Screen”
 * to open in standalone mode (no Safari chrome) with the brand icon.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Spanish with Pavel",
    short_name: "Spanish with Pavel",
    description:
      "Personal AI tutor for learning Spanish: grammar, vocabulary, exercises and progress.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#fffcfa",
    theme_color: "#e11d2e",
    lang: "es",
    categories: ["education", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
