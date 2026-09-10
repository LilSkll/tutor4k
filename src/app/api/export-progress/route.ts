import { NextRequest, NextResponse } from "next/server";
import type { InterfaceLanguage, Level } from "@/types";

/**
 * POST /api/export-progress
 * Body: { userName, level, streak, totalExercises, accuracy, byLevel, interfaceLanguage? }
 *
 * Returns a self-contained, print-ready HTML document. The browser opens it,
 * auto-triggers window.print(), and the user picks "Save as PDF".
 */

interface LevelStat {
  name: string;
  total: number;
  correct: number;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Copy = {
  langAttr: string;
  dateLocale: string;
  title: string;
  print: string;
  h1: string;
  subtitle: string;
  student: string;
  level: string;
  date: string;
  levelUnset: string;
  exercises: string;
  accuracy: string;
  streak: string;
  correct: string;
  byLevel: string;
  thLevel: string;
  thScore: string;
  thAcc: string;
  empty: string;
  footer: string;
};

const COPY: Record<InterfaceLanguage, Copy> = {
  ru: {
    langAttr: "ru",
    dateLocale: "ru-RU",
    title: "Отчёт о прогрессе — Spanish with Pavel",
    print: "Печать / Сохранить в PDF",
    h1: "Отчёт о прогрессе",
    subtitle: "Статистика изучения ·",
    student: "Ученик:",
    level: "Уровень:",
    date: "Дата:",
    levelUnset: "Не определён",
    exercises: "Упражнений",
    accuracy: "Точность",
    streak: "Дней подряд",
    correct: "Верных ответов",
    byLevel: "По уровням",
    thLevel: "Уровень",
    thScore: "Верно / Всего",
    thAcc: "Точность",
    empty: "Нет данных",
    footer:
      "Spanish with Pavel · ИИ-репетитор · Создано с Next.js, Supabase и Groq<br>Разработчик — Драгунов Павел",
  },
  en: {
    langAttr: "en",
    dateLocale: "en-GB",
    title: "Progress report — Spanish with Pavel",
    print: "Print / Save as PDF",
    h1: "Progress report",
    subtitle: "Learning statistics ·",
    student: "Student:",
    level: "Level:",
    date: "Date:",
    levelUnset: "Not set",
    exercises: "Exercises",
    accuracy: "Accuracy",
    streak: "Day streak",
    correct: "Correct answers",
    byLevel: "By level",
    thLevel: "Level",
    thScore: "Correct / Total",
    thAcc: "Accuracy",
    empty: "No data",
    footer:
      "Spanish with Pavel · AI language tutor · Built with Next.js, Supabase and Groq<br>Developer — Pavel Dragunov",
  },
  es: {
    langAttr: "es",
    dateLocale: "es-ES",
    title: "Informe de progreso — Spanish with Pavel",
    print: "Imprimir / Guardar como PDF",
    h1: "Informe de progreso",
    subtitle: "Estadísticas de aprendizaje ·",
    student: "Alumno:",
    level: "Nivel:",
    date: "Fecha:",
    levelUnset: "Sin definir",
    exercises: "Ejercicios",
    accuracy: "Precisión",
    streak: "Días seguidos",
    correct: "Respuestas correctas",
    byLevel: "Por nivel",
    thLevel: "Nivel",
    thScore: "Correctas / Total",
    thAcc: "Precisión",
    empty: "Sin datos",
    footer:
      "Spanish with Pavel · Tutor de IA · Hecho con Next.js, Supabase y Groq<br>Desarrollador — Pavel Dragunov",
  },
  de: {
    langAttr: "de",
    dateLocale: "de-DE",
    title: "Fortschrittsbericht — Spanish with Pavel",
    print: "Drucken / Als PDF speichern",
    h1: "Fortschrittsbericht",
    subtitle: "Lernstatistik ·",
    student: "Schüler:",
    level: "Niveau:",
    date: "Datum:",
    levelUnset: "Nicht festgelegt",
    exercises: "Übungen",
    accuracy: "Genauigkeit",
    streak: "Tage in Folge",
    correct: "Richtige Antworten",
    byLevel: "Nach Niveau",
    thLevel: "Niveau",
    thScore: "Richtig / Gesamt",
    thAcc: "Genauigkeit",
    empty: "Keine Daten",
    footer:
      "Spanish with Pavel · KI-Tutor · Mit Next.js, Supabase und Groq<br>Entwickler — Pavel Dragunov",
  },
};

function parseLang(raw: unknown): InterfaceLanguage {
  return raw === "en" || raw === "es" || raw === "de" || raw === "ru"
    ? raw
    : "ru";
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    userName: string;
    level: Level | null;
    streak: number;
    totalExercises: number;
    accuracy: number;
    byLevel: LevelStat[];
    interfaceLanguage?: string;
  };

  const t = COPY[parseLang(body.interfaceLanguage)];
  const today = new Date().toLocaleDateString(t.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const levelRows = body.byLevel
    .filter((l) => l.total > 0)
    .map(
      (l) =>
        `<tr><td class="lvl">${esc(l.name)}</td><td>${l.correct} / ${l.total}</td><td>${l.total > 0 ? Math.round((l.correct / l.total) * 100) : 0}%</td></tr>`,
    )
    .join("");

  const totalCorrect = body.byLevel.reduce((s, l) => s + l.correct, 0);

  const html = `<!DOCTYPE html>
<html lang="${t.langAttr}">
<head>
<meta charset="utf-8">
<title>${esc(t.title)}</title>
<style>
  @page { margin: 2cm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.5; max-width: 700px; margin: 0 auto; padding: 24px; }
  .brand { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
  .logo { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #ef4444, #f97316, #f43f5e); color: #fff; font-weight: 700; font-size: 22px; display: flex; align-items: center; justify-content: center; }
  .brand-name { font-size: 18px; font-weight: 700; background: linear-gradient(90deg, #ef4444, #f97316, #f43f5e); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  h1 { font-size: 24px; margin: 0 0 4px; }
  .subtitle { color: #6b7280; font-size: 13px; margin: 0 0 24px; }
  .meta { background: #f9fafb; border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 14px; }
  .meta div { margin: 4px 0; }
  .meta strong { display: inline-block; min-width: 90px; color: #6b7280; font-weight: 500; }
  h2 { font-size: 16px; border-bottom: 2px solid #ef4444; padding-bottom: 6px; margin: 24px 0 12px; }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
  .stat { background: #fef2f2; border-radius: 10px; padding: 14px; text-align: center; }
  .stat .num { font-size: 24px; font-weight: 700; color: #ef4444; }
  .stat .lbl { font-size: 11px; color: #6b7280; margin-top: 2px; }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
  th { background: #f9fafb; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; }
  td.lvl { font-weight: 700; color: #ef4444; }
  .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
  @media print { body { padding: 0; } .noprint { display: none; } }
  .print-btn { background: #ef4444; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-size: 14px; cursor: pointer; }
</style>
</head>
<body>
  <div class="noprint" style="text-align:right; margin-bottom:16px;">
    <button class="print-btn" onclick="window.print()">${esc(t.print)}</button>
  </div>
  <div class="brand">
    <div class="logo">Ñ</div>
    <div class="brand-name">Spanish with Pavel</div>
  </div>
  <h1>${esc(t.h1)}</h1>
  <p class="subtitle">${esc(t.subtitle)} ${today}</p>

  <div class="meta">
    <div><strong>${esc(t.student)}</strong> ${esc(body.userName || "—")}</div>
    <div><strong>${esc(t.level)}</strong> ${esc(body.level ?? t.levelUnset)}</div>
    <div><strong>${esc(t.date)}</strong> ${today}</div>
  </div>

  <div class="stats">
    <div class="stat"><div class="num">${body.totalExercises}</div><div class="lbl">${esc(t.exercises)}</div></div>
    <div class="stat"><div class="num">${body.accuracy}%</div><div class="lbl">${esc(t.accuracy)}</div></div>
    <div class="stat"><div class="num">${body.streak}</div><div class="lbl">${esc(t.streak)}</div></div>
    <div class="stat"><div class="num">${totalCorrect}</div><div class="lbl">${esc(t.correct)}</div></div>
  </div>

  <h2>${esc(t.byLevel)}</h2>
  <table>
    <thead><tr><th>${esc(t.thLevel)}</th><th>${esc(t.thScore)}</th><th>${esc(t.thAcc)}</th></tr></thead>
    <tbody>
      ${levelRows || `<tr><td colspan="3" style="text-align:center;color:#9ca3af;">${esc(t.empty)}</td></tr>`}
    </tbody>
  </table>

  <div class="footer">
    ${t.footer}
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() { try { window.print(); } catch (e) {} }, 400);
    });
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `inline; filename="progress.html"`,
    },
  });
}
