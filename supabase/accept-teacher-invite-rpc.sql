-- =====================================================================
-- Atomic student join via teacher invite code / token
-- =====================================================================
-- Call from the Next.js server with service_role:
--   select public.accept_teacher_invite(student_id, code, token);
--
-- Guarantees:
-- - row lock on invite (no double-spend races)
-- - idempotent if already linked (does not burn another use)
-- - reactivate revoked link or insert once
-- - uses_count increments only for a new/reactivated link
-- =====================================================================

CREATE OR REPLACE FUNCTION public.accept_teacher_invite(
  p_student_id uuid,
  p_code text DEFAULT NULL,
  p_token uuid DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_invite public.teacher_invites%ROWTYPE;
  v_link public.teacher_students%ROWTYPE;
  v_teacher_name text;
  v_pick_id uuid;
  v_code text;
BEGIN
  IF p_student_id IS NULL THEN
    RAISE EXCEPTION 'student required';
  END IF;

  IF p_token IS NOT NULL THEN
    SELECT * INTO v_invite
    FROM public.teacher_invites
    WHERE token = p_token
      AND status = 'open'
      AND deleted_at IS NULL
    FOR UPDATE;
  ELSIF p_code IS NOT NULL AND length(trim(p_code)) > 0 THEN
    v_code := upper(regexp_replace(trim(p_code), '\s+', '', 'g'));
    SELECT * INTO v_invite
    FROM public.teacher_invites
    WHERE code = v_code
      AND status = 'open'
      AND deleted_at IS NULL
    FOR UPDATE;
  ELSE
    RAISE EXCEPTION 'code or token required';
  END IF;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invite not found';
  END IF;

  IF v_invite.expires_at IS NOT NULL AND v_invite.expires_at < now() THEN
    RAISE EXCEPTION 'Invite has expired';
  END IF;

  IF v_invite.teacher_id = p_student_id THEN
    RAISE EXCEPTION 'You cannot accept your own invite';
  END IF;

  -- Already actively linked → success without burning a use.
  SELECT * INTO v_link
  FROM public.teacher_students
  WHERE teacher_id = v_invite.teacher_id
    AND student_id = p_student_id
    AND course_id = v_invite.course_id
    AND status = 'active'
    AND deleted_at IS NULL
  LIMIT 1;

  IF FOUND THEN
    SELECT name INTO v_teacher_name
    FROM public.profiles
    WHERE id = v_invite.teacher_id;

    UPDATE public.profiles
    SET active_course_id = v_invite.course_id
    WHERE id = p_student_id
      AND coalesce(active_course_id, '') IS DISTINCT FROM v_invite.course_id;

    RETURN jsonb_build_object(
      'link', to_jsonb(v_link),
      'courseId', v_invite.course_id,
      'teacherName', coalesce(v_teacher_name, 'Teacher'),
      'alreadyLinked', true
    );
  END IF;

  IF v_invite.max_uses IS NOT NULL AND v_invite.uses_count >= v_invite.max_uses THEN
    RAISE EXCEPTION 'Invite has no remaining uses';
  END IF;

  -- Reactivate the newest soft-deleted / revoked row if any.
  SELECT id INTO v_pick_id
  FROM public.teacher_students
  WHERE teacher_id = v_invite.teacher_id
    AND student_id = p_student_id
    AND course_id = v_invite.course_id
    AND deleted_at IS NOT NULL
  ORDER BY created_at DESC
  LIMIT 1;

  IF v_pick_id IS NOT NULL THEN
    UPDATE public.teacher_students
    SET
      status = 'active',
      deleted_at = NULL,
      accepted_at = now(),
      group_id = v_invite.group_id,
      invited_at = v_invite.created_at,
      role = 'student'
    WHERE id = v_pick_id
    RETURNING * INTO v_link;
  ELSE
    INSERT INTO public.teacher_students (
      teacher_id,
      student_id,
      group_id,
      course_id,
      role,
      status,
      created_by,
      invited_at,
      accepted_at
    ) VALUES (
      v_invite.teacher_id,
      p_student_id,
      v_invite.group_id,
      v_invite.course_id,
      'student',
      'active',
      'teacher',
      v_invite.created_at,
      now()
    )
    RETURNING * INTO v_link;
  END IF;

  UPDATE public.teacher_invites
  SET
    uses_count = uses_count + 1,
    status = CASE
      WHEN max_uses IS NOT NULL AND uses_count + 1 >= max_uses
        THEN 'closed'::public.teacher_invite_status
      ELSE status
    END
  WHERE id = v_invite.id;

  SELECT name INTO v_teacher_name
  FROM public.profiles
  WHERE id = v_invite.teacher_id;

  UPDATE public.profiles
  SET active_course_id = v_invite.course_id
  WHERE id = p_student_id
    AND coalesce(active_course_id, '') IS DISTINCT FROM v_invite.course_id;

  RETURN jsonb_build_object(
    'link', to_jsonb(v_link),
    'courseId', v_invite.course_id,
    'teacherName', coalesce(v_teacher_name, 'Teacher'),
    'alreadyLinked', false
  );
END;
$$;

REVOKE ALL ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) TO service_role;

COMMENT ON FUNCTION public.accept_teacher_invite(uuid, text, uuid) IS
  'Atomic idempotent student join via invite code/token; service_role only.';
