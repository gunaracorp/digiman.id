# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] — 2026-09-07

Genesis release: the initial premium digital holding website for DIGIMAN.ID, delivered as a section-anchored one-page experience (single `/` route per sandbox constraint).

### Added

- **Initial holding website** — one-page experience with anchored sections: hero, marquee, manifesto (`#tentang`), holding tree (`#ekosistem`), business portfolio (`#bisnis`), venture (`#ventura`), services (`#layanan`), 7-layer technology stack (`#teknologi`), governance (`#tata-kelola`), insights (`#insights`), careers (`#karier`), and contact (`#kontak`) with sticky footer.
- **Design system** — dark warm ink theme (`#0A0908` / `#F2EFE9`) with capital-gold accent (`#C9A45C`), light "paper" interlude for the manifesto, Instrument Serif + Geist typography, `Reveal`/`Counter` motion primitives, and reduced-motion support (`MotionConfig reducedMotion="user"`, CSS marquee off switch).
- **Data layer** — Prisma 6 + SQLite (`db/custom.db`) with `BusinessUnit`, `Insight` and `ContactInquiry` models; typed content source of truth (`src/content/holding.ts`) seeding the database; static content fallback on DB read failure.
- **Contact API** — `POST /api/contact` with zod validation, in-memory rate limiting (5 req/min/IP) and Prisma persistence.
- **SEO infrastructure** — full metadata with canonical URLs and Open Graph/Twitter cards, server-rendered JSON-LD (`Organization` + `WebSite`), semantic HTML, and generated `sitemap.xml` / `robots.txt` via `sitemap.ts` / `robots.ts`.
