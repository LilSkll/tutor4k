# ADR-002: Почему нет `teacher_id` у ученика (и у AI-отчёта)

- **Status:** Accepted
- **Date:** 2026-08-01
- **Module:** Teacher Dashboard / AI Reports

## Context

Возникает соблазн:

1. Хранить «текущего преподавателя» как `profiles.teacher_id`.
2. Привязывать кэш AI-анализа к паре `(teacher_id, student_id)`.

Оба варианта делают отчёт и «владение» учеником зависимыми от конкретного педагога.

## Decision

### Ученик

У `profiles` **нет** `teacher_id`. Владение/доступ только через **`teacher_students`** (см. ADR-001).

### AI-отчёты

Таблица **`teacher_ai_reports`** без `teacher_id`:

```text
student_id
course_id
generated_at
summary
recommendations
weak_topics
next_steps
source_fingerprint   -- varchar(64), SHA-256 hex
deleted_at
```

Уникальность актуального отчёта: `(student_id, course_id)` где `deleted_at IS NULL`.

Анализ описывает **состояние ученика на курсе**, а не мнение конкретного преподавателя. При смене педагога отчёт остаётся валидным.

## Consequences

**Плюсы**

- Смена преподавателя не обнуляет кэш анализа.
- Один отчёт на ученика+курс → меньше токенов и дублей.
- Профиль ученика остаётся «студенческим» identity; педагогика — в enrollment.

**Минусы**

- Нельзя хранить персональные формулировки «под стиль учителя» в этом кэше (для этого позже — private notes / per-teacher overlays).
- Все учителя с active-доступом видят один и тот же отчёт (заметки — в `teacher_notes`, private).

## Notes

- `teacher_notes` остаются **private** на `teacher_id` — личное не смешиваем с каноническим AI-отчётом.
- Shared-notes — отдельное решение в будущем, не меняет эту ADR.
