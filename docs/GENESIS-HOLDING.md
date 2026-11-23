# GENESIS HOLDING LAYER — Dokumentasi (v2 — Pernikahan Dua Arsitektur)

> **v1:** merger aditif lapisan "Bisnis Real" (2026-10).
> **v2:** konsep utama pertama dipulihkan **setia** (palet ink + capital gold,
> tipografi Geist + Instrument Serif, jargon hero) dan dinikahkan dengan situs
> repo — keduanya hidup berdampingan dalam satu kode, tanpa saling menimpa.

---

## 1. Arsitektur pernikahan

| Lapisan | Rumah | Identitas |
|---|---|---|
| Situs repo (beranda, /layanan, /blog, /admin, Gunara OS, dll.) | `/` dan seluruh rute lama | Emerald + gold, Jakarta + Space Grotesk |
| **Konsep utama Genesis** (jargon, 5 unit bisnis, 16 jasa terharga, visi 2125, 46 dewan) | **`/genesis`** | **Ink + capital gold, Geist + Instrument Serif (asli, dipulihkan)** |

Kunci teknisnya: halaman `/genesis` membungkus seluruh konten dalam
`.genesis-theme` yang **mendeklarasikan ulang design token asli** — CSS
variable cascade membuat semua utility shadcn/Tailwind di dalam wrapper
otomatis memakai palet asli, sementara di luar wrapper situs repo tetap
utuh 100%.

## 2. Jargon (tidak boleh dilunakkan)

> **"Yang masuk ke kita bakal selamat, yang tidak masuk digital akan tertinggal."**

## 3. Struktur file Genesis

| File | Isi |
|---|---|
| `src/content/holding.ts` | Single source of truth konsep: ORG, HERO (jargon), 5 unit bisnis, `SERVICE_CATALOG` 16 jasa berharga, metode 5 langkah, visi 2125, 46 dewan, teknologi 7 lapis, tata kelola, karier, kontak, insights |
| `src/app/genesis/page.tsx` | Komposisi asli konsep + metadata + JSON-LD + font asli via next/font |
| `src/app/genesis.css` | Tema asli ter-scope di `.genesis-theme` (ink/gold/paper/ink tokens, shell, eyebrow, paper interlude, bg-grid, glow, grain, marquee 46s, drift, reduced-motion) |
| `src/components/genesis/hero.tsx` | Hero asli (framer-motion, staggered variants, Counter metrik) |
| `src/components/genesis/services.tsx` | Katalog 16 jasa berharga asli (Tabs per unit, harga + deliverables + durasi) |
| `src/components/genesis/contact.tsx` | Form kontak asli (react-hook-form + zod bersama) |
| `src/app/api/genesis-contact/route.ts` | Endpoint form Genesis → **disimpan ke tabel `ContactMessage` milik repo** → masuk kotak masuk panel admin (`/admin/pesan`) |
| `src/components/digiman/{manifesto,visi-2125,metode,dewan,ecosystem,business-portfolio,governance,technology,insights,careers,site-header,site-footer,trust-marquee,section-heading}.tsx` + `motion/*` | Section komponen konsep (shared oleh /genesis) |
| `src/lib/validation.ts` | Skema zod kontak bersama (kompatibel @hookform/resolvers v6 — tanpa `.default()`) |
| `src/lib/db.ts` + `scripts/db.ts` + `prisma.config.ts` | **Dual-mode adapter**: `POSTGRES_URL` → PrismaPg (Vercel, perilaku produksi tidak berubah); tanpa POSTGRES_URL → PrismaLibSql + `DATABASE_URL` file: (jalur SQLite resmi di .env.example) |
| `src/lib/rate-limit.ts` | Rate limiter 5/menit/IP untuk endpoint publik |
| `docs/DATA-MODEL.md` | Blueprint migrasi model Genesis (BusinessUnit, PricedService, Insight) ke Prisma |

## 4. Keputusan penting

1. **File repo lama tidak dilunakkan.** `page.tsx`, `hero.tsx`, `services.tsx`,
   `contact.tsx`, `globals.css`, `layout.tsx`, schema (postgresql), dsb.
   tetap milik repo; konsep Genesis hidup di namespace `genesis/` dan rute
   `/genesis`.
2. **Form Genesis menulis ke model repo** (`ContactMessage`) — satu kotak
   masuk admin untuk semua lead, dari mana pun formnya berasal.
3. **Dual-mode database** mengikuti dokumentasi `.env.example` repo sendiri:
   produksi tetap postgres, hosting file-based (cPanel/VPS) bisa sqlite tanpa
   mengubah kode.
4. **`@prisma/adapter-libsql` + `@libsql/client`** ditambahkan sebagai
   dependensi adapter SQLite (tidak dipakai saat POSTGRES_URL terpasang).

## 5. Kualitas & kejujuran data

- Harga pada `SERVICE_CATALOG` bersifat **INDIKATIF** — dinyatakan terbuka
  di UI; lingkup final ditetapkan dalam proposal tertulis.
- **BELUM TERVERIFIKASI:** email (`hello@digiman.id`, `careers@digiman.id`),
  tahun pendirian, dan daftar 46 disiplin perlu konfirmasi pemilik sebelum
  dipakai di materi hukum/promosi.
- Aksesibilitas: heading semantik + ARIA, `prefers-reduced-motion` dihormati
  (marquee & drift mati, MotionConfig `reducedMotion="user"`).

## 6. Langkah lanjutan

1. Tautkan `/genesis` dari navigasi/footer utama situs repo.
2. Migrasi `holding.ts` → Prisma (model `BusinessUnit`, `PricedService`,
   `Insight`) sesuai `docs/DATA-MODEL.md`, sambil mempertahankan fallback
   statis.
3. Finalisasi harga indikatif menjadi harga resmi manajemen.
4. Tambahkan `/genesis` ke sitemap.
