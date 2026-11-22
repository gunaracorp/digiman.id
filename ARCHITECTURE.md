# DIGIMAN.ID — Architecture

This document describes the architecture of DIGIMAN.ID as decided in the genesis build (see `worklog.md`, Task 1). Items that are not implemented in v0.1.0 are explicitly marked **ROADMAP**.

---

## 1. Guiding Principle & Sandbox Constraint

The deployment sandbox exposes **only the `/` route** to users. The architecture therefore treats this as a design constraint, not a limitation of scope:

- The full information architecture is delivered as a **section-anchored one-page holding experience**.
- Every section is a **modular, self-contained component**, engineered so it can later be promoted to a dedicated route without redesign.

## 2. Business Architecture

DIGIMAN.ID is the digital front door of a **holding company**. The holding operates and builds across four business units, each with its own mandate and maturity stage:

| Unit | Stage | Role in the holding |
| --- | --- | --- |
| **DIGIMAN Digital** | Operating | Digital services & delivery arm |
| **DIGIMAN Intelligence** | Building | Research & capability building |
| **DIGIMAN Capital** | Operating | Investment & venture arm |
| **DIGIMAN Academy** | Genesis | Education & knowledge transfer |

**Design intent:** each unit is structured so it can mature into a separate entity over time — separate brand presence, own site/routes, own operations. The holding website is the umbrella narrative that holds the ecosystem together while the units are young.

## 3. Information Architecture

### One-page strategy (current)

The site is a single scroll with anchor-navigated sections:

| Anchor | Section |
| --- | --- |
| — | Hero |
| — | Marquee |
| `#tentang` | Manifesto (light "paper" interlude) |
| `#ekosistem` | Holding tree (ecosystem of units) |
| `#bisnis` | Business portfolio |
| `#ventura` | Venture activities |
| `#layanan` | Services |
| `#teknologi` | 7-layer interactive technology stack |
| `#tata-kelola` | Governance |
| `#insights` | Insights (DB-driven) |
| `#karier` | Careers |
| `#kontak` | Contact form → API |
| — | Footer (sticky bottom, `mt-auto`) |

### Migration path to multi-route (ROADMAP)

Because sections are modular components, the planned evolution is mechanical, not structural:

1. Promote each anchor section to a dedicated route (e.g. `/tentang`, `/bisnis`, `/insights`).
2. Keep the current anchors as canonical deep links (server-side redirects from `/#anchor` to the new routes) to preserve SEO equity.
3. Extract shared primitives (layout shell, motion primitives, section header) so page routes and the one-page composition share one codebase.

This is a **ROADMAP** item; v0.1.0 ships only `/`.

## 4. Technical Architecture

### Rendering: RSC-first

- The page is rendered as **React Server Components** by default.
- **Client components exist only where interactivity requires them** (e.g. the contact form, animated counters/reveals, the interactive technology stack). Everything static stays on the server.

### Data flow: reads vs. mutations

- **Reads** happen directly inside RSC via the Prisma client (`src/lib/db.ts`). No internal HTTP hop for reads.
- **Mutations** go through the only API route: `POST /api/contact`, which performs zod validation → in-memory rate limiting (5 requests/min/IP) → Prisma insert.
- On DB read failure, the page **falls back to the typed static content** in `src/content/holding.ts`, so the site never renders empty.

### Content pipeline

`src/content/holding.ts` is the **typed source of truth** for catalogue content (business units, insights). The seed script loads it into SQLite; the page prefers the DB and degrades gracefully to the static content.

### ASCII diagram

```text
                     +---------------------------------------------+
                     |                  Browser                    |
                     |        visitors / crawlers / previews       |
                     +----------------------+----------------------+
                                            | HTTPS
                     +----------------------v----------------------+
                     |            Next.js App Router (/)           |
                     |          RSC-first page rendering           |
                     |                                             |
                     |   Server sections          Client islands   |
                     |   hero, manifesto,         form, counters,  |
                     |   ecosystem, insights...   tech stack       |
                     +---------+-----------------------+----------+
                               |                       |
                direct reads   |                       |  POST /api/contact
                (Prisma RSC)   |                       |  (mutation endpoint)
                     +---------v---------+   +---------v----------+
                     | Prisma client     |   | zod validation     |
                     | src/lib/db.ts     |   | in-memory rate     |
                     +---------+---------+   | limit 5/min/IP     |
                               |             +---------+----------+
                     +---------v---------+             |
                     |     SQLite        |<--- writes -+
                     |   db/custom.db    |
                     +---------+---------+
                               |  on read error
                     +---------v---------------------------+
                     | Static content fallback             |
                     | src/content/holding.ts (typed)      |
                     +-------------------------------------+
```

## 5. Data Model

Three domain entities (details in [docs/DATA-MODEL.md](./docs/DATA-MODEL.md)):

| Entity | Purpose |
| --- | --- |
| `BusinessUnit` | Catalogue of holding units (identity, sector, stage, focus, metrics, display order) |
| `Insight` | Editorial content (slug, title, excerpt, category, read time, publish date, featured flag) |
| `ContactInquiry` | Inbound contact submissions (identity, topic, message, workflow status) |

Legacy scaffold models (`User`, `Post`) were removed by design decision (Task 1).

## 6. Design System

### Tokens — ink & gold

| Token | Value | Use |
| --- | --- | --- |
| Background (ink) | `#0A0908` | Dark warm base |
| Foreground | `#F2EFE9` | Text on ink |
| Accent (capital gold) | `#C9A45C` | Accent, highlights, interactive affordances |
| Paper | `#F1EEE7` | Light interlude background (Manifesto section) |

**Brand rule:** no indigo/blue in the palette. The theme is **dark-only by design** (documented decision); no light/dark toggle.

### Typography

- **Instrument Serif** — display typeface (via `next/font/google`)
- **Geist Sans** — body / UI
- **Geist Mono** — technical/numeric accents

### Motion hierarchy

- framer-motion with `MotionConfig reducedMotion="user"` at the root — user's OS-level reduced-motion preference is respected globally.
- `Reveal` and `Counter` primitives provide the standard entrance/number animation vocabulary.
- The marquee is pure CSS and has a reduced-motion off switch.
- Motion is layered: ambient (marquee) < entrance (Reveal) < interactive (Counter/stack), so reduced-motion users lose ornament, never information.

## 7. SEO Architecture

- **Full metadata** in the App Router: title, description, canonical URL, Open Graph and Twitter cards (`metadataBase` derived from `NEXT_PUBLIC_SITE_URL`).
- **JSON-LD structured data**: `Organization` + `WebSite`, server-rendered in the RSC tree.
- **Semantic HTML** throughout (landmarks, headings hierarchy) so the one-page structure is machine-readable as a coherent document.
- **`sitemap.ts` and `robots.ts`** route handlers generate `sitemap.xml` and `robots.txt`.
  - Operational note: the static scaffold `public/robots.txt` must be **deleted** to avoid conflicting with the generated route.

## 8. Security Posture

Summary — full detail in [SECURITY.md](./SECURITY.md):

- zod validation on the only mutation endpoint; in-memory rate limiting (5/min/IP).
- No secrets in source; configuration via `.env` (see `.env.example`).
- Safe headers set in `next.config.ts` (`X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-DNS-Prefetch-Control`). `X-Frame-Options` is **intentionally omitted** because the sandbox preview embeds the site via iframe.
- No authentication surface exists in v0.1.0; auth boundaries are **ROADMAP**.

## 9. Scalability & Evolution Path (ROADMAP)

The product is planned to evolve through four stages. Only stage 0 (Corporate Website) exists in v0.1.0:

| Stage | Vision | Notes |
| --- | --- | --- |
| 0. **Corporate Website** | Premium one-page holding experience | **Shipped (v0.1.0)** |
| 1. **Holding Intelligence Platform** | Structured data on units, ventures, metrics; insights as first-class content; multi-route IA | ROADMAP |
| 2. **Business Operating System** | Cross-unit workflows: portfolio tracking, governance rituals, reporting pipelines | ROADMAP |
| 3. **AI-Orchestrated Holding Platform** | Agentic orchestration across units — briefing generation, signal monitoring, decision support | ROADMAP |
| — | **`/command` center** | Future internal route for the holding's operations console; requires auth boundaries, RBAC and audit logging | ROADMAP |

The sandbox single-route constraint shapes stage 0 only; stages 1+ assume multi-route deployment (see §3).
