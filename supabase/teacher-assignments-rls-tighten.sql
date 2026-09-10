-- =====================================================================
-- Tighten student UPDATE on teacher_assignments
-- ---------------------------------------------------------------------
-- Completion goes through AssignmentService (service role). Broad student
-- UPDATE previously allowed changing any column on own rows.
-- Apply after teacher-assignments-migration.sql
-- =====================================================================

DROP POLICY IF EXISTS teacher_assignments_student_update ON public.teacher_assignments;

-- Students may only mark their own open assignment as completed.
CREATE POLICY teacher_assignments_student_update ON public.teacher_assignments
  FOR UPDATE
  USING (
    auth.uid() = student_id
    AND status = 'assigned'
    AND deleted_at IS NULL
  )
  WITH CHECK (
    auth.uid() = student_id
    AND status = 'completed'
    AND deleted_at IS NULL
  );
