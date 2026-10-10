#!/usr/bin/env node
/**
 * Apply supabase/APPLY-PROD-SECURITY.sql to the linked project.
 *
 * Preferred (Dashboard): paste APPLY-PROD-SECURITY.sql → Run.
 *
 * CLI options (pick one):
 *   SUPABASE_DB_URL=postgresql://... node scripts/apply-prod-security.mjs
 *   SUPABASE_ACCESS_TOKEN=sbp_... node scripts/apply-prod-security.mjs
 *
 * Project ref defaults from NEXT_PUBLIC_SUPABASE_URL.
 */
import { readFileSync } from "fs";
import { resolve } from "path";

function loadEnvFile() {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    /* rely on process.env */
  }
}

loadEnvFile();

const sqlPath = resolve(process.cwd(), "supabase/APPLY-PROD-SECURITY.sql");
const sql = readFileSync(sqlPath, "utf8");

function projectRef() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return process.env.SUPABASE_PROJECT_REF || null;
  try {
    return new URL(url).hostname.split(".")[0];
  } catch {
    return null;
  }
}

async function viaPg() {
  const dbUrl = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL;
  if (!dbUrl) return false;
  const { default: pg } = await import("pg").catch(() => ({ default: null }));
  if (!pg) {
    console.error("Install pg: npm i -D pg");
    process.exit(1);
  }
  const client = new pg.Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    await client.query(sql);
    console.log("Applied via SUPABASE_DB_URL / DATABASE_URL");
  } finally {
    await client.end();
  }
  return true;
}

async function viaManagementApi() {
  const token = process.env.SUPABASE_ACCESS_TOKEN;
  const ref = projectRef();
  if (!token || !ref) return false;

  const res = await fetch(
    `https://api.supabase.com/v1/projects/${ref}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    },
  );
  const text = await res.text();
  if (!res.ok) {
    console.error("Management API failed:", res.status, text.slice(0, 500));
    process.exit(1);
  }
  console.log("Applied via Supabase Management API");
  console.log(text.slice(0, 800));
  return true;
}

if (!(await viaPg()) && !(await viaManagementApi())) {
  console.error(`
Cannot reach Postgres from this environment.

Run in Supabase Dashboard → SQL Editor (project ${projectRef() || "?"}):
  paste supabase/APPLY-PROD-SECURITY.sql → Run

Or set SUPABASE_DB_URL / SUPABASE_ACCESS_TOKEN and re-run this script.
Then: node --env-file=.env.local scripts/verify-prod-security.mjs
`);
  process.exit(1);
}
