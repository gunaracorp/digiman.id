# DIGIMAN.ID

**Premium digital holding website — a one-page holding experience.**

DIGIMAN.ID is the web presence of a digital holding company built as a real, service-driven business — research first ("kaji dulu"), then build the business, then install the management system. The site ships as a single, section-anchored one-page experience: the deployment sandbox exposes only the `/` route, so the complete information architecture is delivered as anchored sections on one page. Every section is a modular component that can be promoted to a dedicated route later (see [ARCHITECTURE.md](./ARCHITECTURE.md)).

## Business Units

| Unit | Focus | Stage |
| --- | --- | --- |
| DIGIMAN Kaji | Riset pasar, audit digital, studi kelayakan | Operating |
| DIGIMAN Digital | Website, aplikasi, AI & otomasi | Operating |
| DIGIMAN Bisnis | Legalitas, business plan, venture building | Building |
| DIGIMAN Manajemen | SOP, dashboard/ERP, virtual C-level | Building |
| DIGIMAN Akademi | Kelas eksekutif, in-house training, bootcamp | Genesis |

The catalog section (`#layanan`) exposes 16 priced services across these units with transparent, indicative IDR pricing — final scope is always confirmed through a Kaji session.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, standalone output) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| UI kit | shadcn/ui (Radix primitives) |
| Motion | framer-motion 12 (reduced-motion aware) |
| Validation | zod 4 |
| Data layer | Prisma 6 + SQLite (`db/custom.db`) |
| Runtime / package manager | Bun |

## Quick Start

```bash
bun install
cp .env.example .env      # DATABASE_URL + NEXT_PUBLIC_SITE_URL
bun run db:push           # sync Prisma schema to SQLite
bun scripts/seed.ts       # seed business-unit & insight content into the DB
bun run dev               # development server on http://localhost:3000
```

Environment variables are documented in [.env.example](./.env.example).

## Scripts

| Script | What it does |
| --- | --- |
| `bun run dev` | Start the development server on port 3000 (output tee'd to `dev.log`) |
| `bun run build` | Production build with standalone output; copies static assets into the standalone bundle |
| `bun run start` | Run the standalone production server via Bun (logs to `server.log`) |
| `bun run lint` | ESLint across the repository |
| `bun run db:push` | Push the Prisma schema to SQLite (`--accept-data-loss`) |
| `bun run db:generate` | Generate the Prisma client |
| `bun run db:migrate` | Create/apply development migrations |
| `bun run db:reset` | Reset the database |

## Folder Structure

```text
.
├── src/
│   ├── app/                  # App Router: layout, page, API routes, globals.css
│   ├── components/
│   │   ├── ui/               # shadcn/ui primitives
│   │   └── ...               # site sections & motion primitives
│   ├── content/
│   │   └── holding.ts        # typed content source of truth (seeds the DB)
│   ├── hooks/                # reusable React hooks
│   └── lib/
│       ├── db.ts             # Prisma client (singleton)
│       └── utils.ts          # shared utilities
├── prisma/
│   └── schema.prisma         # BusinessUnit, Insight, ContactInquiry
├── db/
│   └── custom.db             # SQLite database file
├── scripts/
│   └── seed.ts               # DB seeding script
├── docs/
│   └── DATA-MODEL.md         # ER-style data model documentation
├── public/                   # static assets
├── worklog.md                # genesis build log / architecture decisions
└── ...config files           # next.config.ts, tsconfig.json, eslint, etc.
```

## Documentation

| Document | Contents |
| --- | --- |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Business, information, technical, data, design, SEO and security architecture |
| [docs/DATA-MODEL.md](./docs/DATA-MODEL.md) | ER-style description of the Prisma data model |
| [SECURITY.md](./SECURITY.md) | Security posture and vulnerability disclosure policy |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Branching, commits, workflow and code style |
| [CHANGELOG.md](./CHANGELOG.md) | Release history (Keep a Changelog format) |
| [LICENSE](./LICENSE) | MIT license |

## Status

`v0.1.0` — genesis release (see [CHANGELOG.md](./CHANGELOG.md)). Items that do not exist yet are explicitly marked **ROADMAP** throughout the documentation; no CI workflows are configured at this stage.
