# ADR-004: Teacher Studio naming and route isolation

- **Status:** Accepted
- **Date:** 2026-08-01
- **Module:** Teacher Dashboard → **Teacher Studio**

## Context

Product surfaces need distinct brands:

- **Student Journey** — learning path (`(app)/`, `/dashboard`, chapters…).
- Instructor workspace — must feel like a professional tool, not an admin panel.

## Decision

- Product name in UI: **Teacher Studio**
- URL prefix: **`/teacher`** (e.g. `/teacher/dashboard`)
- Route group: `(teacher)/` with its own layout and `TeacherShell`
- Platform tagline pairing: *Spanish with Pavel — Student Journey / Teacher Studio*

Stage 2 delivers only empty Studio infrastructure (role gate + shell + stubs).

## Consequences

- Copy and i18n keys use `teacher.studioTitle`, not “Teacher Dashboard”.
- Students never see Studio chrome; teachers never see Student Journey shell.
