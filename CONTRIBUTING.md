# Contributing to DIGIMAN.ID

Thanks for contributing. This document defines how work is organized and what is expected from every change. The architectural ground truth is [ARCHITECTURE.md](./ARCHITECTURE.md) and the genesis `worklog.md`.

---

## 1. Branching Model

- **`main`** is the source of truth and should always be deployable.
- Work happens on **feature branches** cut from `main`:
  - `feat/<topic>` — new functionality
  - `fix/<topic>` — bug fixes
  - `docs/<topic>` — documentation
  - `chore/<topic>` — tooling, deps, config
- Rebase or merge `main` into your branch regularly; keep branches short-lived and single-purpose.

## 2. Conventional Commits

All commits follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
feat(insights): add category filter to insights section
fix(contact): validate email before persisting inquiry
docs(architecture): document data model audit strategy
chore(deps): bump prisma to 6.x
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

## 3. Workflow

Work follows a fixed pipeline:

```text
UNDERSTAND → DEFINE → ARCHITECT → IMPLEMENT → TEST → REVIEW → DEPLOY → OBSERVE
    ^                                                                  |
    +------------------------------------------------------------------+
                          (loop: IMPROVE feeds the next cycle)
```

| Stage | Expectation |
| --- | --- |
| **UNDERSTAND** | Read the worklog, ARCHITECTURE.md and the relevant code before proposing changes. |
| **DEFINE** | Frame the problem: user-visible outcome, constraints, non-goals. |
| **ARCHITECT** | Decide the approach (which layer, which components, data impact) and record non-obvious decisions in the worklog. |
| **IMPLEMENT** | Small, typed, modular changes consistent with the design system. |
| **TEST** | Lint (`bun run lint`), manual verification, and — for interactive pieces — browser-level checks. Automated test suites are **ROADMAP**. |
| **REVIEW** | Every change to `main` goes through a PR (see checklist below). |
| **DEPLOY** | Build must succeed (`bun run build`); the sandbox currently serves `/` only. |
| **OBSERVE** | Watch dev/server logs and user-facing behaviour; regressions become `fix/` branches. |
| **IMPROVE** | Feed observations back into the next UNDERSTAND cycle. |

## 4. Code Style

- **TypeScript strict mode is on** (`tsconfig.json`: `strict: true`). Write fully typed code — explicit parameter and return types at module boundaries; no silent `any` in application code.
- **No dead code** — no commented-out blocks, unused exports, or leftover scaffolds. Delete; git remembers.
- **Components are modular**: sections stay self-contained (see ARCHITECTURE.md §3) so they can be promoted to routes later.
- **RSC-first**: default to server components; add `"use client"` only when interactivity demands it.
- **Design system discipline**: use the ink/gold tokens and typography scale; never introduce indigo/blue; motion goes through the `Reveal`/`Counter` primitives and respects reduced motion.
- **Validation at the boundary**: any new input is validated with zod on the server, regardless of client-side checks.
- Formatting/linting: ESLint (`eslint-config-next`) is the baseline; do not weaken rules to make code pass.

## 5. Pull Request Checklist

Every PR answers these four questions:

- [ ] **What changed?** (files/components affected, in plain language)
- [ ] **Why?** (problem or decision it addresses; link to worklog/issue if applicable)
- [ ] **Testing?** (how it was verified: lint, manual flows, edge cases)
- [ ] **Risk?** (what could break; rollback plan if non-trivial)

Additionally:

- [ ] No secrets or `.env` values in the diff.
- [ ] Docs updated when architecture, data model, or security posture change.
- [ ] Conventional commit messages used.

## 6. CI & Automation

> **ROADMAP:** No CI workflows exist yet. Continuous integration (lint + build + dependency audit on every PR) is planned; until then, run `bun run lint` and `bun run build` locally before requesting review.

## 7. Reporting Issues

- Bugs and regressions: open an issue with reproduction steps and expected vs. actual behaviour.
- **Security vulnerabilities: never via public issues** — see [SECURITY.md](./SECURITY.md) (`security@digiman.id`).
