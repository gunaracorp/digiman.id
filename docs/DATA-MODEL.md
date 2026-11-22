# DIGIMAN.ID — Data Model

ER-style reference for the Prisma data layer as of **v0.1.0 (genesis)**.

- **Source of decision:** Task 1 architecture in `worklog.md`. **Runtime source of truth:** `prisma/schema.prisma` — where this document and the schema ever diverge, the schema wins.
- **Stack:** Prisma 6, `prisma-client-js` generator, SQLite datasource via `DATABASE_URL` (see `.env.example`). Production path: PostgreSQL (**ROADMAP**).

---

## 1. Entity Overview

```text
+------------------------+        +------------------------+        +--------------------------+
|     BusinessUnit       |        |        Insight         |        |     ContactInquiry       |
|  (holding catalogue)   |        |   (editorial content)  |        |  (inbound contact form)  |
+------------------------+        +------------------------+        +--------------------------+
| id          PK (cuid)  |        | id          PK (cuid)  |        | id          PK (cuid)    |
| key          UQ        |        | slug         UQ        |        | name                     |
| name                   |        | title                  |        | email                    |
| tagline                |        | excerpt                |        | company?                 |
| sector                 |        | category               |        | topic                    |
| stage                  |        | readMinutes            |        | message                  |
| description            |        | publishedAt            |        | status                   |
| focus                  |        | featured               |        | createdAt                |
| metrics                |        +------------------------+        +--------------------------+
| order                  |
+------------------------+
         |                                   |                                 |
         v                                   v                                 v
  seeded from                      seeded from                       created by
  src/content/holding.ts           src/content/holding.ts            POST /api/contact
```

The three entities are **independent (no foreign keys)** in v0.1.0. Planned relations are listed in §4.

## 2. Entities

### 2.1 `BusinessUnit`

The catalogue of holding units rendered by `#ekosistem` / `#bisnis`. Seeded from the typed content catalogue (`src/content/holding.ts`).

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `String` | Primary key, `@default(cuid())` (implicit in the Task 1 field list) |
| `key` | `String` | Stable identifier (e.g. `digital`); **unique** |
| `name` | `String` | Display name |
| `tagline` | `String` | Short positioning line |
| `sector` | `String` | Sector classification |
| `stage` | `String` | Maturity stage per unit: `Operating` \| `Building` \| `Genesis` |
| `description` | `String` | Long-form description |
| `focus` | `String` | Focus areas summary |
| `metrics` | `String` | Unit metrics payload (JSON-encoded key/value pairs rendered as metric chips) |
| `order` | `Int` | Display order in the holding tree / portfolio |

**Indexes:** unique on `key`; secondary index on `order` recommended for sorted listing (**recommended** — verify against schema).

### 2.2 `Insight`

Editorial entries rendered by `#insights` (DB-driven section).

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `String` | Primary key, `@default(cuid())` (implicit in the Task 1 field list) |
| `slug` | `String` | URL-safe identifier; **unique** |
| `title` | `String` | Headline |
| `excerpt` | `String` | Summary/teaser |
| `category` | `String` | Editorial category |
| `readMinutes` | `Int` | Estimated reading time |
| `publishedAt` | `DateTime` | Publication date (drives ordering) |
| `featured` | `Boolean` | Featured flag for hero-level placement |

**Indexes:** unique on `slug`; secondary index on `publishedAt` recommended for chronological feeds (**recommended** — verify against schema).

### 2.3 `ContactInquiry`

Inbound submissions from the `#kontak` form via `POST /api/contact` (zod-validated, rate-limited). Never rendered on the public site.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `String` | Primary key, `@default(cuid())` (implicit in the Task 1 field list) |
| `name` | `String` | Submitter name |
| `email` | `String` | Reply-to address (format enforced by zod) |
| `company` | `String?` | Optional — submitter may not represent a company |
| `topic` | `String` | Inquiry topic (constrained by the contact form's topic set) |
| `message` | `String` | Inquiry body |
| `status` | `String` | Workflow state (genesis value: `new`; lifecycle values are an application-level convention) |
| `createdAt` | `DateTime` | `@default(now())` — creation timestamp |

**Indexes:** none required for genesis; secondary index on `createdAt`/`status` recommended for operations (**recommended**).

## 3. Nullability, Defaults & Conventions

- Field lists come from the Task 1 architecture decision. Where that list omits implementation details (primary keys, nullability, defaults), this document records the intended design and `prisma/schema.prisma` remains authoritative.
- Primary keys use `cuid()` per project convention.
- Value sets for `stage`, `category`, `topic` and `status` are application-level conventions validated by the seed content and zod schemas, not database enums (SQLite has no native enum support).

## 4. Relations

**v0.1.0:** none — entities are flat by design; the content pipeline (static catalogue → seed → DB) covers all composition needs.

**Planned (ROADMAP):**

- `Insight` → author (once an authenticated admin surface exists).
- `BusinessUnit` 1—N to unit-scoped content (services, ventures, openings) as units mature into separate entities.
- `ContactInquiry` → assignee + status-history records once the operations console (`/command`, **ROADMAP**) ships.

## 5. Audit Strategy

**Current (v0.1.0):**

- Minimal audit surface: `ContactInquiry.createdAt` provides an append-only record of submissions; there are no mutable admin flows, hence no audit log.
- No `updatedAt` / soft-delete columns on domain entities — content is re-seeded from the typed source of truth.

**Planned (ROADMAP):**

- Inquiry status history (append-only events per `ContactInquiry`).
- Audit log table for internal actions (`/command` center: who changed what, when) with immutability guarantees.
- PII retention policy and deletion workflow for inquiry data (see [SECURITY.md](../SECURITY.md)).

## 6. Data Lifecycle

```text
src/content/holding.ts (typed source of truth)
        |
        |  bun scripts/seed.ts
        v
   SQLite (db/custom.db)  <--- writes: POST /api/contact (ContactInquiry only)
        |
        |  RSC direct reads (Prisma)
        v
   page.tsx  ---on DB read error--->  static fallback (src/content/holding.ts)
```

- **Genesis:** catalogue content (`BusinessUnit`, `Insight`) flows one-way from code to DB via the seed script; re-seeding is the update mechanism.
- **Runtime writes:** only the contact API writes (`ContactInquiry`).
- **Resilience:** the page never depends on the DB being reachable — static fallback guarantees render.
