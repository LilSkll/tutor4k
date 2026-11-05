"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Level, VocabularyWord } from "@/types";

// =====================================================================
// Vocabulary server actions
// =====================================================================

export async function addVocabularyWord(input: {
  word: string;
  translation: string;
  example?: string;
  level: Level;
  courseId?: string;
  notes?: string;
  partOfSpeech?: string;
}): Promise<{ error: string | null; word: VocabularyWord | null }> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated", word: null };

  const { resolveCourseId } = await import("@/lib/course-id");
  const courseId = resolveCourseId(input.courseId);

  const row: Record<string, unknown> = {
    user_id: user.id,
    word: input.word.trim(),
    translation: input.translation.trim(),
    example: input.example?.trim() ?? "",
    level: input.level,
    course_id: courseId,
  };
  if (input.notes?.trim()) row.notes = input.notes.trim();
  if (input.partOfSpeech?.trim()) row.part_of_speech = input.partOfSpeech.trim();

  const { data, error } = await supabase
    .from("vocabulary")
    .insert(row)
    .select()
    .single();

  if (error) return { error: error.message, word: null };

  revalidatePath("/vocabulary");
  return { error: null, word: data as unknown as VocabularyWord };
}

export async function deleteVocabularyWord(id: string) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase
    .from("vocabulary")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/vocabulary");
  return { error: null };
}

export async function getVocabulary(
  courseId?: string | null,
): Promise<VocabularyWord[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { resolveCourseId } = await import("@/lib/course-id");
  const cid = resolveCourseId(courseId);

  let query = supabase
    .from("vocabulary")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (cid === "spanish") {
    query = query.or(`course_id.eq.spanish,course_id.is.null`);
  } else {
    query = query.eq("course_id", cid);
  }

  const { data } = await query;
  return (data ?? []) as unknown as VocabularyWord[];
}
