# Changelog

Semua perubahan penting pada DIGIMAN.ID didokumentasikan di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id/1.1.0/);
versioning [Semantic Versioning](https://semver.org/lang/id/).

## [Unreleased]

### [0.19.0] — 2026: Pre-Launch Audit — Perbaikan Menyeluruh (Zero-Bug Pass)

Audit lengkap menjelang peluncuran: type-check, lint, build produksi,
pengujian runtime seluruh halaman & API, serta uji end-to-end panel admin.

### Fixed (kritis)

- **Dua sistem auth admin digabung jadi satu.** Panel admin lama
  (hash-view `#route-admin`, cookie `gunara_admin` + password tunggal
  di `SiteSetting`) bertabrakan dengan panel baru (JWT `digiman_admin`,
  tabel `AdminUser`, RBAC SUPERADMIN/EDITOR/VIEWER). Akibatnya endpoint
  yang dijaga guard lama selalu 401 setelah login baru. Seluruh route
  `/api/admin/*` kini memakai guard kanonik (`requireAdmin`/`requireWrite`
  + audit log). Route panel lama yang mati dihapus
  (`/api/admin/auth`, `/api/admin/blog`, komponen SPA lama).
- **Panel admin tunggal.** `/admin` kini langsung ke dashboard modern
  (`/admin/beranda`). Halaman baru **/admin/penawaran** mengelola proposal
  (sebelumnya hanya ada di panel lama). Nav sidebar + command palette
  diperbarui.
- **Schema drift Prisma.** Kode admin menulis `SiteSetting` flat
  (`id: 1`, kolom `heroHeadline`…) sementara schema/DB memakai key/value →
  route hero & backup pasti error saat runtime. Keduanya ditulis ulang ke
  format key/value (backup format v3, `adminPassword` tak bisa ditimpa
  lewat berkas restore).
- **404 artikel blog.** Teaser beranda & sitemap mendaftar artikel model
  `BlogPost`, sedangkan `/blog/[slug]` hanya mencari `Post`+statis →
  6 artikel terseed 404. `blog-data.ts` kini menggabungkan tiga sumber
  (statis + `Post` + `BlogPost`) dengan konversi markdown→sections,
  tanpa duplikat slug.
- **Halaman `/proposal` & `/dashboard` 404.** Link di halaman Gunara OS
  menuju `/proposal` tidak punya halaman sungguhan. Kini ada halaman
  nyata (server shell bersama `home-shell.tsx`), tautan hash dari
  view-route ikut dinavigasikan sebagai path, dan `/proposal` masuk
  registri PAGES (footer + sitemap).
- **Struktur Perusahaan tak pernah tampil.** Komponen `TeamStructure`
  tidak pernah dirender + bug shadowing variabel `m` (framer-motion)
  menimpa parameter `.map()` → crash saat dirender. Diperbaiki; section
  `team` & `offices` kini bagian landing.
- **Landing mengabaikan Panel Admin.** Landing memakai `DEFAULT_SETTINGS`
  statis & mengabaikan urutan/visibilitas section. `getSiteData` berbasis
  DB kini menjadi sumber tunggal; landing menghormati konfigurasi
  Tata Letak Section (19 section key yang sinkron di API + site-data +
  fallback router).
- **Kotak Masuk rusak.** UI menuntut `status`/`starred` + filter
  `all|new|starred|archived` + payload `{messages,counts}`; API/schema
  hanya punya `handled`. Schema `ContactMessage` ditambah kolom
  `status` (default NEW) & `starred`; GET mendukung kedua format
  (filter baru + `?handled=` legacy). Badge unread sidebar kini berfungsi.
- **`AUTH_SECRET` fallback hardcoded** (token admin bisa dipalsukan di
  produksi) → fail-closed: produksi tanpa `AUTH_SECRET` menolak login
  admin; `.env.example` diperbarui.
- **80 error TypeScript** (memblokir `tsc --noEmit`): duplikat key di
  `ICON_MAP` services.tsx, tipe `requireWrite` (null yang tak mungkin),
  `NextRequest` stats, kontrak `OfficeItem`, dan skrip dev. Kini **0
  error** (tsc + eslint).

### Fixed (lainnya)

- Pencarian `/api/blog` kini case-insensitive di semua provider DB.
- Seed `seed-gunara.ts` memakai path relatif (bukan path absolut mesin
  lama) sehingga jalan di Vercel/server mana pun.
- `next.config.ts`: tekanan keamanan dipertahankan; komentari rencana CSP.

### Migration note

- Setelah deploy, jalankan `bunx prisma db push` pada database produksi
  untuk menambah kolom `ContactMessage.status` & `ContactMessage.starred`,
  lalu set env `AUTH_SECRET` (≥32 karakter acak) di environment produksi.

### Stage Genesis 2 (direncanakan)

- Data model holding: entity `Business`/`Venture`/`Brand` + Admin CRUD
- Angkat hash-router → App Router nyata (about, businesses, insights, careers)

## [0.18.0] — 2026: Genesis Stage 1 — Holding Mode

### Added

- **Section "Arsitektur Holding"** (`#holding`) di landing: kartu induk
  PT Digital Bisnis Manajemen + 4 pilar ekosistem (PT Top Konsultan
  Internasional, Gunara OS, Santri Angon, Platform digiman.id) + strip
  tata kelola & kepemimpinan — dwibahasa ID/EN, tautan footer baru.
- Lapisan tata kelola repositori: `ARCHITECTURE.md` (master architecture,
  sitemap, design system, roadmap), `SECURITY.md`, `CONTRIBUTING.md`,
  `LICENSE` (proprietary), `CHANGELOG.md`.
- GitHub Actions CI (`lint` + `typecheck` + `build`), template Pull Request,
  template issue (bug/feature), Dependabot.
- Security headers pada seluruh rute via `next.config.ts`
  (nosniff, SAMEORIGIN, referrer-policy, permissions-policy).

## [0.17.0] — Legacy 17 Tahun

- Timeline pengalaman `#perjalanan`: McKinsey & Company 2009 → praktik
  independen 2013 → PT 2022 → era digiman.id & Gunara OS.
- Konstanta `LEGACY` di `brand.ts` sebagai sumber tunggal narasi tahun;
  badge hero, stat 17+ tahun, JSON-LD foundingDate + bio pendiri.
- DigiAI memahami pertanyaan sejarah perusahaan.

## [0.16.0] — Sistem Backup/Restore Database

- `db:backup` / `db:restore` (`scripts/`), snapshot `db/backup.json`
  ikut di-commit → pemulihan bencana anti-reset lingkungan.

## [0.15.0] — Dashboard Era

- **Portal Klien** `#/dashboard`: 30 fitur premium — command palette ⌘K,
  jam WIB live, progress ring 165 dokumen, health score, milestone timeline,
  invoice + grafik pembayaran (recharts), chat tim, achievements, OKR,
  print/PDF, dark/light, ID/EN.
- **Admin Analytics "Mission Control"**: KPI pendapatan, 3 grafik, feed aktivitas.
- Model baru: `ClientProject`, `Invoice`, `ActivityEvent`, `Meeting` + seed + API.

## [0.13.0 – 0.14.0] — Hygiene siap-GitHub

- Untrack `.env`/biner database, `.gitignore` diperkuat, `.env.example`,
  seed idempotent (`db:seed`), dokumen master PGA-165 → `docs/`.

## [0.9.0 – 0.12.0] — Premium Polish & SEO

- Fix hydration (zona waktu WIB) + PDF A4 sempurna (print CSS overhaul).
- Branding & entity SEO: JSON-LD graph 7 entitas, kredit footer, 6 profil
  sosial, sitemap, manifest, robots, OG image dinamis.
- Marquee tempo premium (120s/150s) + aksesibilitas `prefers-reduced-motion`.
- **SEO God Mode**: korpus 1.000 kata kunci + 1.000 tagar, SEO Hub, README mahakarya.

## [0.1.0 – 0.8.0] — Fondasi

- Next.js 16 + Prisma + seed; landing premium "7 Lapis Langit" dari database.
- i18n ID/EN + persistensi preferensi.
- **Gunara OS**: 20 domain × 165 dokumen × 4 tier + 5 paket PGA.
- Blog dinamis dwibahasa; Proposal Studio (wizard + kalkulator + PDF).
- Panel Admin penuh; DigiAI Assistant + integrasi WhatsApp.

[Unreleased]: https://github.com/prabudanling/digiman.id/compare/v0.18.0...HEAD
[0.18.0]: https://github.com/prabudanling/digiman.id/releases/tag/v0.18.0
