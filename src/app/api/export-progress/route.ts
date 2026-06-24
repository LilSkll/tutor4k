import { NextRequest, NextResponse } from "next/server";
import type { Level } from "@/types";

/**
 * POST /api/export-progress
 * Body: { userName, level, streak, totalExercises, accuracy, byLevel }
 *
 * Returns a self-contained, print-ready HTML document. The browser opens it,
 * auto-triggers window.print(), and the user picks "Save as PDF" — this
 * reliably renders Cyrillic (unlike a hand-written PDF builder which strips
 * non-Latin-1). No puppeteer or server-side rendering needed.
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

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    userName: string;
    level: Level | null;
    streak: number;
    totalExercises: number;
    accuracy: number;
    byLevel: LevelStat[];
  };

  const today = new Date().toLocaleDateString("ru-RU", {
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
<html lang="ru">
<head>
<meta charset="utf-8">
<title>Отчёт о прогрессе — SpanishTutor</title>
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
    <button class="print-btn" onclick="window.print()">Печать / Сохранить в PDF</button>
  </div>
  <div class="brand">
    <div class="logo">Ñ</div>
    <div class="brand-name">SpanishTutor</div>
  </div>
  <h1>Отчёт о прогрессе</h1>
  <p class="subtitle">Статистика изучения испанского языка · ${today}</p>

  <div class="meta">
    <div><strong>Ученик:</strong> ${esc(body.userName || "—")}</div>
    <div><strong>Уровень:</strong> ${esc(body.level ?? "Не определён")}</div>
    <div><strong>Дата:</strong> ${today}</div>
  </div>

  <div class="stats">
    <div class="stat"><div class="num">${body.totalExercises}</div><div class="lbl">Упражнений</div></div>
    <div class="stat"><div class="num">${body.accuracy}%</div><div class="lbl">Точность</div></div>
    <div class="stat"><div class="num">${body.streak}</div><div class="lbl">Дней подряд</div></div>
    <div class="stat"><div class="num">${totalCorrect}</div><div class="lbl">Верных ответов</div></div>
  </div>

  <h2>По уровням</h2>
  <table>
    <thead><tr><th>Уровень</th><th>Верно / Всего</th><th>Точность</th></tr></thead>
    <tbody>
      ${levelRows || '<tr><td colspan="3" style="text-align:center;color:#9ca3af;">Нет данных</td></tr>'}
    </tbody>
  </table>

  <div class="footer">
    SpanishTutor · ИИ-репетитор испанского языка · Создано с Next.js, Supabase и Groq
    <br>Разработчик — Драгунов Павел
  </div>

  <script>
    // Auto-trigger print dialog after the document loads.
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
