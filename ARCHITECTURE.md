# 🏛 ARCHITECTURE — DIGIMAN.ID Digital Holding Platform

> Dokumen arsitektur induk (Genesis Doctrine). Diperbarui setiap keputusan berdampak besar.
> Status: **Genesis Stage 1 selesai** — roadmap Stage 2+ ada di §10.

---

## 1. Filosofi & Prinsip

DIGIMAN.ID dibangun sebagai **digital holding architecture** — bukan company profile biasa:

```text
HOLDING + TECHNOLOGY + CAPITAL + GOVERNANCE + INNOVATION + DIGITAL ECOSYSTEM
```

Prinsip yang mengikat semua keputusan:

| Prinsip | Makna praktis |
|---|---|
| **Luxury comes from restraint** | Motion halus, whitespace luas, tanpa noise visual |
| **Search-native since day one** | SEO & structured data bagian dari arsitektur, bukan tambalan |
| **Humanity principle** | Tidak ada dark pattern, tidak ada kredensial palsu, klaim selalu terverifikasi |
| **Simple now, structured today, scalable tomorrow** | SQLite hari ini, jalur PostgreSQL tersedia |
| **Single source of truth** | Identitas → `brand.ts`; konten → database; narasi tahun → `LEGACY` |
| **Portability** | `db/backup.json` ikut di-commit → rebuild path selalu ada |

---

## 2. Business & Brand Architecture

```text
PT DIGITAL BISNIS MANAJEMEN (digiman.id) — Digital Holding, SK AHU-059566.AH.01.30.Tahun 2022
│
├── ⚖️ Badan Hukum Legal & Konsultan → PT Top Konsultan Internasional (topkonsultan.web.id)
├── 📚 Intellectual Capital          → Gunara OS (20 domain × 165 dokumen × 4 tier)
├── 🤝 Komunitas                     → Santri Angon
└── 🧠 Teknologi & Platform          → digiman.id Platform (Portal Klien 30 fitur,
                                      Admin Command Center, DigiAI)
```

**Kepemimpinan**: Gugun Gunara — Pendiri & Direktur Utama (keahlian 17+ tahun:
McKinsey & Company 2009 → praktik independen 2013 → PT 2022).
**Arsitek digital**: Muhammad Lutfi Azmi (prabudanling).

Setiap pilar dirancang agar dapat berkembang menjadi entitas/produk mandiri
tanpa refactor — data identitas hidup di `src/lib/brand.ts`, konten di database.

---

## 3. Information Architecture (Sitemap)

### 3.1 Aktif (hash-router dalam satu `/` — constraint sandbox, siap diangkat ke rute nyata)

| Rute | Halaman | Isi |
|---|---|---|
| `#/` | Landing (19 seksi) | Hero, Marquee, Stats, 7 Lapis Langit, Layanan, Paket, Gunara OS teaser, Why Us, Legacy (perjalanan 2009→kini), **Holding (arsitektur grup)**, Proses, Testimoni, Blog teaser, FAQ, SEO Hub, CTA, Kontak |
| `#/os` | Gunara OS Explorer | 20 domain × 165 dokumen × 4 tier |
| `#/blog` · `#/blog/{slug}` | Insights | Indeks & pembaca artikel dwibahasa |
| `#/proposal` | Proposal Studio | Wizard penawaran + ekspor PDF |
| `#/dashboard` | Portal Klien | 30 fitur premium (F01–F30) |
| `#/admin` | Command Center | Panel admin + Analytics Mission Control |

### 3.2 Rencana pengangkatan ke App Router nyata (Stage 3)

```text
/                → landing (kini hash #/)
/about           → Profil holding + governance
/businesses      → Portfolio entitas & venture
/os              → Gunara OS (kini #/os)
/insights/[slug] → Blog (kini #/blog/[slug])
/careers         → Karier (baru)
/contact         → Kontak (kini anchor #kontak)
/app             → Portal klien ter-autentikasi
```

`parseHash()` (`src/components/digiman/app-router.tsx`) adalah **satu-satunya**
titik pemetaan rute — migrasi cukup mengubah pemetaan ini ke `app/` routes.

---

## 4. Design System (ringkasan)

Sumber kebenaran: `src/app/globals.css` (tokens + utilities) + `tailwind.config.ts`.

| Token | Nilai |
|---|---|
| Night (bg) | `#050d0a` |
| Emerald (primary) | `#34d399` (`--color-emerald-bright`) |
| Gold (accent) | `#f2c14e` (`--color-gold`) |
| Font body / display | Plus Jakarta Sans (`--font-jakarta`) / Space Grotesk (`--font-grotesk`) |
| Radius | `rounded-xl` (komponen), `rounded-2xl` (kartu/section) |
| Motion ease | `[0.22, 1, 0.36, 1]` — dipakai konsisten semua komponen |
| Marquee | 120s / 150s (premium tempo), `prefers-reduced-motion` dihormati |

Utilities tersedia: `.glass` `.glass-strong` `.card-glow` `.gradient-text-gold`
`.gradient-text-emerald` `.section-padding` `.starfield` `.grid-lines`
`.shimmer-btn` `.font-display` `.text-gold` `.text-emerald-bright` `.border-animated`
`.animate-*` (marquee, floaty, aurora, pulse-ring, spin-slow).

Hierarki komponen: `ui/` (shadcn) → `digiman|gunara|blog|proposal|admin|dashboard/` (fitur) → section → halaman.

---

## 5. Technical Architecture

```text
Next.js 16 (App Router, standalone output)  ·  TypeScript strict
Tailwind CSS 4  ·  shadcn/ui (New York)  ·  framer-motion  ·  recharts  ·  cmdk
Prisma ORM → SQLite (custom.db)  ·  Bun runtime  ·  Zustand-ready  ·  TanStack-ready

Presentation  → src/components/** (client, "use client")
Data access   → src/lib/digiman-data.ts (getSiteData: DB dulu, fallback konstanta)
Business API  → src/app/api/** (contact, chat, admin, dashboard)
Infrastructure→ Prisma + scripts/ (seed, backup, restore)
Config        → brand.ts (identitas), i18n.tsx (locale), seo-keywords.ts (korpus)
```

### Struktur repositori

```text
digiman.id/
├── .github/                  # CI, template PR & issue, dependabot
├── prisma/schema.prisma      # 16 model (SiteSetting, Service, …, Meeting)
├── db/backup.json            # Snapshot data ikut di-commit (rebuild path)
├── scripts/                  # seed 165 dok, seed dashboard, backup/restore, parser PGA
├── docs/                     # Banner + arsitektur master PGA-165
├── public/                   # Logo, artwork, robots.txt
└── src/
    ├── app/                  # layout (JSON-LD entity graph), page, sitemap, manifest, OG image, api/
    ├── components/           # digiman/ gunara/ blog/ proposal/ admin/ dashboard/ ui/
    └── lib/                  # brand, i18n, digiman-data, gunara, seo-keywords, db, blog-types
```

---

## 6. Data Architecture

16 model Prisma: `SiteSetting`, `Service`, `Testimonial`, `Faq`, `Office`,
`ContactMessage`, `ChatLog`, `BlogPost`, `PgaDomain`, `PgaDocument`,
`GunaraPackage`, `ClientProject`, `Invoice`, `ActivityEvent`, `Meeting`, (+ indeks unik slug).

- **Idempotent seed**: `bun run db:seed` (upsert by slug) — aman dijalankan berulang.
- **Backup/restore**: `bun run db:backup` → `db/backup.json` (di-commit);
  `bun run db:restore` memulihkan 100%.
- **Jalur skalabilitas**: SQLite → PostgreSQL hanya mengganti `provider` +
  `DATABASE_URL` (Prisma abstraksi penuh). Query tidak memakai SQL mentah.

---

## 7. SEO & AI-Search Architecture

- **Entity graph JSON-LD** (`layout.tsx` + `page.tsx`, digabung via `@id`):
  Organization, WebSite, ProfessionalService, Person (founder + architect,
  `alumniOf` McKinsey), FAQPage, Review/AggregateRating, ItemList katalog.
- **Korpus SEO**: 1.000 kata kunci + 1.000 tagar deterministik (`seo-keywords.ts`) → SEO Hub.
- `sitemap.ts` (freshness dari blog), `robots.txt`, `manifest.ts` (PWA),
  OG image dinamis 1200×630 (`opengraph-image.tsx`).
- Metadata dwibahasa via `useI18n` + `generateMetadata`.
- Prinsip §16–17: tidak menjanjikan ranking; entitas jelas, fakta kaya, konsisten.

---

## 8. Security Architecture

| Lapisan | Status |
|---|---|
| Secrets | `.env` di-gitignore, `.env.example` tersedia, tanpa secret di source ✅ |
| Security headers | `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (next.config.ts) ✅ |
| Input validation | Form kontak: validasi manual + honeypot; API chat/contact sanitasi ✅ |
| Admin auth | Password cookie `gunara_admin` (default dari DB, wajib diganti saat go-live) ✅ |
| Rate limiting | ⏳ Stage 3 (middleware) |
| CSP ketat + audit log | ⏳ Stage 4 |

**Pelaporan kerentanan**: lihat [SECURITY.md](./SECURITY.md).

---

## 9. Deployment Architecture

```text
GitHub (source of truth, CI: lint + typecheck + build)
   ↓
Vercel (recommended) atau VPS + standalone Node
   ↓
DATABASE_URL (SQLite file / Postgres) + env dari .env.example
```

- `output: "standalone"` → image deploy minimal.
- Build tanpa DB pun tetap aman: `getSiteData()` punya fallback konstanta penuh.
- Domain: `digiman.id` (+ `topkonsultan.web.id` sebagai entitas saudara).

---

## 10. Roadmap Genesis

| Stage | Isi | Status |
|---|---|---|
| **1** | Tata kelola repo (CI, PR/issue template, LICENSE, SECURITY/CONTRIBUTING/CHANGELOG/ARCHITECTURE), security headers, **section Arsitektur Holding** di landing | ✅ |
| **2** | Data model holding: `Business`/`Venture`/`Brand` entities + Admin CRUD + section Businesses dinamis | ⏳ |
| **3** | Angkat hash-router → App Router nyata (about/businesses/insights/careers), rate limiting | ⏳ |
| **4** | Autentikasi Portal Klien (NextAuth), CSP ketat, audit log | ⏳ |
| **5** | PostgreSQL + Supabase Storage, observability, i18n lanjutan | ⏳ |

---

## 11. Known Debts (jujur & terukur)

1. `typescript.ignoreBuildErrors: true` di next.config — teknis-debt warisan;
   CI menjalankan `tsc --noEmit` terpisah sebagai pagar mutu.
2. Hash-router = konsekuensi lingkungan pengembangan; Stage 3 mengangkatnya.
3. SQLite single-writer — memadai untuk traffic awal; Stage 5 migrasi Postgres.
