#!/usr/bin/env node
/**
 * Compress curated hippogriff city poses into chapter cover WebPs.
 *
 * Usage:
 *   CHAPTER_COVER_SRC="/path/to/Гиппогриф - фото " node scripts/build-chapter-covers.mjs
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC =
  process.env.CHAPTER_COVER_SRC ||
  path.join(os.homedir(), "Downloads", "Гиппогриф - фото ");
const OUT = path.join(ROOT, "public/chapter-covers");

const SOURCES = {
  bilbao: "spanish_pavel_pose_bilbao.png",
  bogota: "spanish_pavel_pose_bogota.png",
  buenosaires: "spanish_pavel_pose_buenosaires.png",
  cartagena: "spanish_pavel_pose_cartagena.png",
  cusco: "spanish_pavel_pose_cusco.png",
  granada: "spanish_pavel_pose_granada.png",
  havana: "spanish_pavel_pose_havana.png",
  lima: "spanish_pavel_pose_lima.png",
  madrid: "spanish_pavel_pose_madrid.png",
  mallorca: "spanish_pavel_pose_mallorca.png",
  mexico: "spanish_pavel_pose_mexico.png",
  montevideo: "spanish_pavel_pose_montevideo.png",
  quito: "spanish_pavel_pose_quito.png",
  salamanca: "spanish_pavel_pose_salamanca.png",
  sanjuan: "spanish_pavel_pose_sanjuan.png",
  seville: "spanish_pavel_pose_seville.png",
  "seville-garden": "spanish_pavel_seville.png",
  tenerife: "spanish_pavel_pose_tenerife.png",
  valencia: "spanish_pavel_pose_valencia.png",
  "valencia-port": "spanish_pavel_valencia.png",
};

async function build(id, file) {
  const input = path.join(SRC, file);
  if (!fs.existsSync(input)) throw new Error(`missing ${input}`);
  const base = sharp(input).rotate();
  await base
    .clone()
    .resize(112, 140, { fit: "cover", position: "attention" })
    .webp({ quality: 74, effort: 6 })
    .toFile(path.join(OUT, "thumbs", `${id}.webp`));
  await base
    .clone()
    .resize(720, 900, { fit: "cover", position: "attention" })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(OUT, "cards", `${id}.webp`));
  const t = fs.statSync(path.join(OUT, "thumbs", `${id}.webp`)).size;
  const c = fs.statSync(path.join(OUT, "cards", `${id}.webp`)).size;
  console.log(`${id}: thumb ${(t / 1024).toFixed(1)}KB  card ${(c / 1024).toFixed(1)}KB`);
}

fs.mkdirSync(path.join(OUT, "thumbs"), { recursive: true });
fs.mkdirSync(path.join(OUT, "cards"), { recursive: true });

for (const [id, file] of Object.entries(SOURCES)) {
  await build(id, file);
}
console.log(`done ${Object.keys(SOURCES).length} covers → ${OUT}`);
