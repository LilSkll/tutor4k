# Architecture Decision Records — Teacher Dashboard

Краткие записи решений по подсистеме Teacher Dashboard.
Формат: контекст → решение → последствия.
Статусы: `Accepted` | `Superseded` | `Deprecated`.

| ADR | Тема | Статус |
|-----|------|--------|
| [ADR-001](./ADR-001-teacher-students.md) | Отдельная таблица `teacher_students` | Accepted |
| [ADR-002](./ADR-002-no-teacher-id-on-student.md) | Нет `teacher_id` у ученика / у AI-отчёта | Accepted |
| [ADR-003](./ADR-003-ai-reports-cache.md) | Кэш `teacher_ai_reports` | Accepted |
| [ADR-004](./ADR-004-teacher-studio.md) | Название Teacher Studio и изоляция `/teacher` | Accepted |

Связанные инварианты (зафиксированы вместе с ADR, отдельные записи при необходимости):

- **Domain services:** Teacher UI → Teacher API → `ProgressService` / др.; Teacher не знает Student Dashboard.
- **Soft delete:** только `deleted_at` (`NULL` = живо); без колонки `is_deleted`.
- **`student_mistakes`:** `exercise_id` + опциональный `snapshot` jsonb; без колонок question/answer/feedback.
- **`teacher_assignments.source`:** `teacher` \| `ai`; AI-ДЗ только после подтверждения преподавателем.
- **`source_fingerprint`:** `varchar(64)` (hex SHA-256).
