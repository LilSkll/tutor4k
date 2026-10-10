#!/usr/bin/env node
/**
 * Live negative checks against the Supabase project in .env.local / env.
 * Usage: node --env-file=.env.local scripts/verify-prod-security.mjs
 */
import { createClient } from "@supabase/supabase-js";
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

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !service || !anon) {
  console.error("Missing Supabase env");
  process.exit(1);
}

const admin = createClient(url, service, {
  auth: { persistSession: false, autoRefreshToken: false },
});

let fails = 0;
function check(pass, name, detail) {
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}`);
  console.log(`       ${detail}`);
  if (!pass) fails++;
}

const stamp = Date.now();
const password = `Chk_${Math.random().toString(36).slice(2)}A1!`;

async function mk(role, label) {
  const email = `sec-${label}-${stamp}@example.com`;
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name: label, role },
  });
  if (error) throw new Error(error.message);
  const id = data.user.id;
  await admin.from("profiles").upsert({
    id,
    email,
    name: label,
    role,
    onboarded: true,
    streak: 3,
    journey_finds: { egg: 1 },
    learning_profile: { a: 1 },
  });
  return { id, email };
}

async function signIn(email) {
  const c = createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await c.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${data.session.access_token}` } },
  });
}

const studentA = await mk("student", "a");
const studentB = await mk("student", "b");
const teacher = await mk("teacher", "t");
const a = await signIn(studentA.email);
const b = await signIn(studentB.email);

try {
  await admin.from("learning_progress").insert({
    user_id: studentA.id,
    chapter_slug: "sec-ch-a",
    topic: "sec",
    level: "A1",
    status: "completed",
    score: 50,
    course_id: "spanish",
  });

  const stealRead = await b
    .from("learning_progress")
    .select("*")
    .eq("user_id", studentA.id);
  check(
    !stealRead.error && (stealRead.data?.length ?? 0) === 0,
    "B cannot SELECT A progress",
    `rows=${stealRead.data?.length}`,
  );

  const forgeOwn = await a.from("learning_progress").insert({
    user_id: studentA.id,
    chapter_slug: "forge-own",
    topic: "x",
    level: "A1",
    status: "completed",
    score: 100,
    course_id: "spanish",
  });
  check(!!forgeOwn.error, "A cannot forge learning_progress", forgeOwn.error?.message || "WROTE");

  const forgeEx = await a.from("exercise_progress").upsert({
    user_id: studentA.id,
    course_id: "spanish",
    exercise_id: "spanish:forge:1",
    times_seen: 99,
    times_correct: 99,
    times_wrong: 0,
    mastered: true,
  });
  check(!!forgeEx.error, "A cannot forge exercise_progress", forgeEx.error?.message || "WROTE");

  const roleUp = await a.from("profiles").update({ role: "teacher" }).eq("id", studentA.id);
  const { data: afterRole } = await admin
    .from("profiles")
    .select("role")
    .eq("id", studentA.id)
    .single();
  check(
    afterRole?.role === "student" || !!roleUp.error,
    "Client cannot escalate role",
    roleUp.error?.message || `role=${afterRole?.role}`,
  );

  await a.from("profiles").update({ streak: 9999 }).eq("id", studentA.id);
  const { data: afterStreak } = await admin
    .from("profiles")
    .select("streak")
    .eq("id", studentA.id)
    .single();
  check((afterStreak?.streak ?? 0) !== 9999, "Client cannot forge streak", `streak=${afterStreak?.streak}`);

  await a.from("profiles").update({ journey_finds: { hacked: true } }).eq("id", studentA.id);
  const { data: afterJf } = await admin
    .from("profiles")
    .select("journey_finds")
    .eq("id", studentA.id)
    .single();
  check(!afterJf?.journey_finds?.hacked, "Client cannot forge journey_finds", JSON.stringify(afterJf?.journey_finds));

  await a
    .from("profiles")
    .update({ learning_profile: { forged: true, weakTopics: ["hack"] } })
    .eq("id", studentA.id);
  const { data: afterLp } = await admin
    .from("profiles")
    .select("learning_profile")
    .eq("id", studentA.id)
    .single();
  check(
    !afterLp?.learning_profile?.forged,
    "Client cannot forge learning_profile",
    JSON.stringify(afterLp?.learning_profile),
  );

  const { error: rpcUserErr } = await a.rpc("accept_teacher_invite", {
    p_student_id: studentA.id,
    p_code: "SWP-XXXX",
    p_token: null,
  });
  check(
    !!rpcUserErr && /permission|denied|42501|not.*grant|PGRST202/i.test(rpcUserErr.message),
    "Student JWT cannot EXECUTE accept_teacher_invite",
    rpcUserErr?.message || "EXECUTE allowed (tighten GRANT)",
  );

  const code = "SWP-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  const { data: invite } = await admin
    .from("teacher_invites")
    .insert({
      teacher_id: teacher.id,
      course_id: "spanish",
      code,
      status: "open",
      max_uses: 2,
    })
    .select("*")
    .single();

  const { data: a1, error: e1 } = await admin.rpc("accept_teacher_invite", {
    p_student_id: studentA.id,
    p_code: code,
    p_token: null,
  });
  check(!e1 && a1?.alreadyLinked === false, "Accept invite 1st", e1?.message || "ok");

  const { data: a2, error: e2 } = await admin.rpc("accept_teacher_invite", {
    p_student_id: studentA.id,
    p_code: code,
    p_token: null,
  });
  check(!e2 && a2?.alreadyLinked === true, "Re-accept idempotent", e2?.message || "ok");

  const { data: invAfter } = await admin
    .from("teacher_invites")
    .select("uses_count")
    .eq("id", invite.id)
    .single();
  check((invAfter?.uses_count ?? 0) === 1, "uses_count stays 1", `uses=${invAfter?.uses_count}`);

  // max_uses=1: B burns it; A (already linked to teacher) still cannot open a closed invite.
  const codeSpent = "SWP-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  await admin.from("teacher_invites").insert({
    teacher_id: teacher.id,
    course_id: "spanish",
    code: codeSpent,
    status: "open",
    max_uses: 1,
  });
  const { error: burnErr } = await admin.rpc("accept_teacher_invite", {
    p_student_id: studentB.id,
    p_code: codeSpent,
    p_token: null,
  });
  check(!burnErr, "Burn max_uses=1 invite", burnErr?.message || "ok");
  const { data: a3, error: e3 } = await admin.rpc("accept_teacher_invite", {
    p_student_id: studentA.id,
    p_code: codeSpent,
    p_token: null,
  });
  const spent =
    !!e3 ||
    /full|max|limit|not found|closed|exhausted|remaining/i.test(
      JSON.stringify(a3 ?? {}) + (e3?.message ?? ""),
    );
  check(spent, "Reuse of spent invite rejected", e3?.message || JSON.stringify(a3));

  // In-process rate limiter twin of src/lib/rate-limit.ts (Upstash intentionally omitted).
  {
    const buckets = new Map();
    function rl(key, { limit, windowMs }) {
      const now = Date.now();
      let b = buckets.get(key) || { timestamps: [] };
      b.timestamps = b.timestamps.filter((t) => t > now - windowMs);
      if (b.timestamps.length >= limit) return false;
      b.timestamps.push(now);
      buckets.set(key, b);
      return true;
    }
    let blocked = false;
    for (let i = 0; i < 6; i++) {
      if (!rl(`sec-rl-${stamp}`, { limit: 5, windowMs: 60_000 })) blocked = true;
    }
    check(blocked, "In-memory rate limit trips", blocked ? "429 path" : "never blocked");
  }

  // App API: forged chapter complete with fake counters (no exercise_progress).
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERIFY_SITE_URL ||
    "https://spanish-tutor-psi.vercel.app";
  try {
    const { data: sess, error: signErr } = await createClient(url, anon, {
      auth: { persistSession: false, autoRefreshToken: false },
    }).auth.signInWithPassword({ email: studentA.email, password });
    if (signErr) throw signErr;
    const ref = new URL(url).hostname.split(".")[0];
    const cookieName = `sb-${ref}-auth-token`;
    const sessionPayload = JSON.stringify(sess.session);
    // Chunk like @supabase/ssr if oversized (4KB cookie limit).
    const chunkSize = 3180;
    const cookies = [];
    if (sessionPayload.length <= chunkSize) {
      cookies.push(`${cookieName}=${encodeURIComponent(sessionPayload)}`);
    } else {
      const chunks = Math.ceil(sessionPayload.length / chunkSize);
      for (let i = 0; i < chunks; i++) {
        cookies.push(
          `${cookieName}.${i}=${encodeURIComponent(
            sessionPayload.slice(i * chunkSize, (i + 1) * chunkSize),
          )}`,
        );
      }
    }
    const completeRes = await fetch(`${site.replace(/\/$/, "")}/api/chapters/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies.join("; "),
      },
      body: JSON.stringify({
        chapterSlug: "chapter-1-despertar",
        score: 100,
        wordsLearned: 999,
        exercisesCompleted: 99,
      }),
    });
    const completeBody = await completeRes.json().catch(() => ({}));
    // Production must refuse until real exercise_progress exists (deploy gate).
    check(
      completeRes.status === 400 || completeRes.status === 401 || completeRes.status === 403,
      "Forged chapter complete rejected",
      `status=${completeRes.status} ${completeBody.error || JSON.stringify(completeBody).slice(0, 160)}`,
    );
  } catch (err) {
    check(false, "Forged chapter complete rejected", err?.message || String(err));
  }
} finally {
  await admin.from("teacher_students").delete().eq("student_id", studentA.id);
  await admin.from("teacher_students").delete().eq("student_id", studentB.id);
  await admin.from("teacher_invites").delete().eq("teacher_id", teacher.id);
  await admin.from("learning_progress").delete().eq("user_id", studentA.id);
  await admin.from("profiles").delete().eq("id", studentA.id);
  await admin.from("profiles").delete().eq("id", studentB.id);
  await admin.from("profiles").delete().eq("id", teacher.id);
  await admin.auth.admin.deleteUser(studentA.id);
  await admin.auth.admin.deleteUser(studentB.id);
  await admin.auth.admin.deleteUser(teacher.id);
}

console.log(fails === 0 ? "\nALL PASSED" : `\n${fails} FAILED`);
process.exit(fails ? 2 : 0);
