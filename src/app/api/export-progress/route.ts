import { NextRequest, NextResponse } from "next/server";
import type { Level } from "@/types";

/**
 * POST /api/export-progress
 * Body: { userName, level, streak, totalExercises, accuracy, byLevel }
 *
 * Returns a self-contained HTML document that the browser prints to PDF
 * via window.print(). We return it as an .html attachment downloaded by
 * the client, OR — to keep the "Export to PDF" UX — we generate a minimal
 * PDF directly using a hand-written PDF builder (no heavy dependencies,
 * Vercel-compatible).
 *
 * The PDF builder below writes a minimal valid PDF 1.4 with the user's
 * progress summary. This avoids bundling puppeteer/pdfkit on the server.
 */

interface LevelStat {
  name: string;
  total: number;
  correct: number;
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

  const pdfBytes = buildProgressPDF(body);
  return new NextResponse(new Uint8Array(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="progreso-espanol.pdf"`,
    },
  });
}

// =====================================================================
// Minimal hand-written PDF generator (Latin-1 text only).
// Produces a clean one-page progress report.
// =====================================================================

const escapePdf = (s: string) =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[^\x00-\xFF]/g, ""); // strip non-Latin-1 to be safe

function buildProgressPDF(data: {
  userName: string;
  level: Level | null;
  streak: number;
  totalExercises: number;
  accuracy: number;
  byLevel: LevelStat[];
}): Uint8Array {
  const lines: string[] = [];
  const today = new Date().toLocaleDateString("es-ES");

  lines.push("INFORME DE PROGRESO");
  lines.push("SpanishTutor - AI Spanish Learning");
  lines.push("");
  lines.push(`Alumno/a: ${data.userName || "(sin nombre)"}`);
  lines.push(`Nivel: ${data.level ?? "No definido"}`);
  lines.push(`Fecha: ${today}`);
  lines.push("");
  lines.push("--- RESUMEN ---");
  lines.push(`Ejercicios completados: ${data.totalExercises}`);
  lines.push(`Precision: ${data.accuracy}%`);
  lines.push(`Racha actual: ${data.streak} dias`);
  lines.push("");
  lines.push("--- POR NIVEL ---");
  for (const lvl of data.byLevel) {
    if (lvl.total === 0) continue;
    lines.push(
      `${lvl.name}: ${lvl.correct}/${lvl.total} aciertos (${lvl.total > 0 ? Math.round((lvl.correct / lvl.total) * 100) : 0}%)`,
    );
  }
  lines.push("");
  lines.push("Continua practicando para mejorar tu espanol!");
  lines.push("¡Sigue asi!");

  // Build the PDF content stream.
  let contentStream = "BT\n/F1 20 Tf\n72 760 Td\n24 TL\n";
  lines.forEach((line, i) => {
    if (i === 0) {
      contentStream += `(${escapePdf(line)}) Tj\n`;
    } else {
      // Bold title for section headers.
      if (line.startsWith("---") || line === "INFORME DE PROGRESO") {
        contentStream += `T*\n/F1 14 Tf\n(${escapePdf(line)}) Tj\n/F1 11 Tf\n`;
      } else {
        contentStream += `T*\n(${escapePdf(line)}) Tj\n`;
      }
    }
  });
  contentStream += "ET";

  // Compose objects.
  const objects: string[] = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push(
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
  );
  objects.push(
    `<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream`,
  );
  objects.push(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  );

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.forEach((off) => {
    pdf += `${off.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new TextEncoder().encode(pdf);
}
