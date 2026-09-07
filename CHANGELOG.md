# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] — 2026-09-07

"Bisnis Real" release: the holding is repositioned from an abstract architecture story into a real, service-driven business — exactly per founder direction: unit Kaji gerbang masuk, unit bisnis nyata, sistem manajemen, dan katalog jasa dengan harga terang.

### Changed

- **Five real business units** (replacing Digital/Intelligence/Capital/Academy): DIGIMAN Kaji (riset & intelijen, gerbang masuk), DIGIMAN Digital (teknologi & produk), DIGIMAN Bisnis (pengembangan bisnis & venture building), DIGIMAN Manajemen (SOP, dashboard/ERP, virtual C-level), DIGIMAN Akademi (talenta & literasi). Legacy `intelligence`/`capital`/`academy` rows are deactivated by the seed.
- **Layanan & Harga (`#layanan`) rebuilt as a priced catalog** — 16 services across 5 unit tabs; every service lists deliverables, duration, and indicative IDR pricing; "Paling Diminati" highlights; transparency note (final scope set after Kaji).
- **Hero rewritten around the company jargon**: "Masuk bersama kami, Anda selamat. Tidak berdigital, Anda tertinggal." Metrics updated (5 unit · 16 jasa · 46 dewan · 100 tahun).
- **Metode (`#metode`, new)** — 5-step working method: Kaji → Rancang → Bangun → Kelola → Skala (replaces the Ventures thesis section; `ventures.tsx` removed).
- **Visi 2125 (`#visi`, new)** — 100-year milestone timeline 2025 → 2125 with closing statement.
- **46 Dewan Pakar (`#dewan`, new)** — 46-discipline expert council chip map (hulu ke hilir).
- Manifesto, careers, contact, footer, nav, insights, marquee and JSON-LD copy rewritten for the real-business positioning; layout metadata retitled "Holding Digital Indonesia | Kaji Dulu, Baru Bangun".

### Added

- Contact form now captures **WhatsApp number** and **budget range** (optional, validated); `ContactInquiry` gains `phone` and `budget` columns (additive migration via `db push`).

## [0.1.0] — 2026-09-07

Genesis release: the initial premium digital holding website for DIGIMAN.ID, delivered as a section-anchored one-page experience (single `/` route per sandbox constraint).

### Added

- **Initial holding website** — one-page experience with anchored sections: hero, marquee, manifesto (`#tentang`), holding tree (`#ekosistem`), business portfolio (`#bisnis`), venture (`#ventura`), services (`#layanan`), 7-layer technology stack (`#teknologi`), governance (`#tata-kelola`), insights (`#insights`), careers (`#karier`), and contact (`#kontak`) with sticky footer.
- **Design system** — dark warm ink theme (`#0A0908` / `#F2EFE9`) with capital-gold accent (`#C9A45C`), light "paper" interlude for the manifesto, Instrument Serif + Geist typography, `Reveal`/`Counter` motion primitives, and reduced-motion support (`MotionConfig reducedMotion="user"`, CSS marquee off switch).
- **Data layer** — Prisma 6 + SQLite (`db/custom.db`) with `BusinessUnit`, `Insight` and `ContactInquiry` models; typed content source of truth (`src/content/holding.ts`) seeding the database; static content fallback on DB read failure.
- **Contact API** — `POST /api/contact` with zod validation, in-memory rate limiting (5 req/min/IP) and Prisma persistence.
- **SEO infrastructure** — full metadata with canonical URLs and Open Graph/Twitter cards, server-rendered JSON-LD (`Organization` + `WebSite`), semantic HTML, and generated `sitemap.xml` / `robots.txt` via `sitemap.ts` / `robots.ts`.
