# GENESIS HOLDING LAYER — Dokumentasi Merger

> **Tanggal merger:** 2026-10 (lihat git log untuk timestamp resmi)
> **Prinsip merger:** ADDITIVE-ONLY. Tidak satu pun file lama diubah, ditimpa, atau dihapus.

---

## 1. Apa ini?

Lapisan **"Bisnis Real"** dari DIGIMAN.ID — hasil merger pekerjaan *Genesis Holding Platform* ke dalam situs resmi `digiman.id`, tanpa menghilangkan satu pun bagian yang sudah ada.

**Jargon perang perusahaan (tidak boleh dilunakkan):**

> **"Yang masuk ke kita bakal selamat, yang tidak masuk digital akan tertinggal."**

Lapisan ini menerjemahkan tiga prinsip inti:

| Prinsip | Wujudnya di kode |
|---|---|
| *Bisnis berarti ada bisnisnya* | `BUSINESS_UNITS` — lima unit bisnis nyata dengan mandat, sektor, dan tahap (Operating / Building / Genesis) |
| *Manajemen berarti ada sistemnya* | `TECHNOLOGY` (7-Layer Digital Architecture), `GOVERNANCE` (siklus entitas + pilar), `METODE` (Kaji → Rancang → Bangun → Kelola → Skala) |
| *Jasa diurus detail — ada berapa harganya* | `SERVICE_CATALOG` — 16 jasa terharga dalam 5 unit, keterangan deliverables + durasi + harga indikatif |

---

## 2. Cara melihat hasilnya

Buka route baru: **`/genesis`**

Route ini mengomposisi seluruh lapisan Genesis (hero + jargon, marquee, manifesto, ekosistem, portofolio bisnis, katalog jasa berharga, metode, 46 dewan pakar, 7-lapis teknologi, visi 2125, tata kelola, insights, karier, gerbang kontak). Halaman lama (`/`, `/layanan`, `/paket-harga`, `/kontak`, dst.) **tetap utuh** — section kontak di `/genesis` mengarahkan pengunjung ke rute resmi tersebut.

---

## 3. Daftar penambahan

### Data & logika
| File | Isi |
|---|---|
| `src/content/holding.ts` | Single source of truth: ORG, jargon, NAV, HERO, 5 unit bisnis, 16 jasa berharga, metode, visi 2125, 46 dewan, teknologi, tata kelola, karier, kontak, insights, footer |
| `src/lib/validation.ts` | Skema Zod kontak (dipakai form + API — satu sumber kebenaran) |
| `src/lib/rate-limit.ts` | Rate limiter sederhana untuk endpoint publik |

### Komponen (`src/components/digiman/`)
| File | Peran |
|---|---|
| `section-heading.tsx` | Heading section bersama (eyebrow mono + judul display) |
| `site-header.tsx` / `site-footer.tsx` | Navigasi & footer modul Genesis (anchor ke section Genesis) |
| `trust-marquee.tsx` | Marquee CSS murni, track ganda, hormat reduced-motion |
| `manifesto.tsx` | Interlude kertas terang — prinsip kerja |
| `ecosystem.tsx` / `business-portfolio.tsx` | Pohon holding + kartu detail unit bisnis |
| `genesis-services.tsx` | **Katalog jasa berharga** (baru, khusus merger) |
| `metode.tsx` / `dewan.tsx` / `technology.tsx` / `visi-2125.tsx` / `governance.tsx` / `insights.tsx` / `careers.tsx` | Section-section editorial |
| `motion/providers.tsx` / `motion/reveal.tsx` / `motion/counter.tsx` | Motion primitives (framer-motion + MotionConfig reducedMotion="user") |

### Route & gaya
| File | Isi |
|---|---|
| `src/app/genesis/page.tsx` | Komposisi halaman Genesis + metadata SEO |
| `src/app/genesis.css` | **Aditif saja**: `.shell`, `.eyebrow`, `.paper-section`, `.paper-muted`, `.bg-grid`, `.glow-gold`, `.grain`, `.marquee-mask`, `.animate-drift`, token `ink`/`paper`/`gold-strong` |

### Dokumen & aset
| File | Isi |
|---|---|
| `docs/DATA-MODEL.md` | Model data Genesis (blueprint integrasi Prisma berikutnya) |
| `public/digiman-mark.svg` | Mark logo versi vector |

---

## 4. Keputusan merger yang penting

1. **File bentrok → versi repo menang.** `page.tsx`, `hero.tsx`, `services.tsx`, `contact.tsx`, `globals.css`, `layout.tsx`, `package.json`, prisma schema, dsb. tidak disentuh sama sekali.
2. **Genesis mengadaptasi palet repo.** Komponen Genesis memakai token repo (`--gold`, `--font-display` Space Grotesk, kelas utilitas globals.css repo) sehingga menyatu dengan identitas emerald + gold yang sudah ada.
3. **Tidak ada dependensi baru.** Semua import (`framer-motion`, `lucide-react`, `zod`, dll.) sudah ada di `package.json` — `bun.lock` tidak berubah.
4. **Yang sengaja tidak digabung** (akan merusak build repo): `scripts/seed.ts` (butuh model Prisma `BusinessUnit` yang belum ada), `examples/websocket` (butuh `socket.io`), dan skrip infra sandbox. `DATA-MODEL.md` mendokumentasikan blueprint-nya.

---

## 5. Kualitas & kejujuran data (quality gates)

- **Harga pada `SERVICE_CATALOG` bersifat INDIKATIF** — sudah dinyatakan terbuka di UI (`SERVICES.note`) dan bukan harga final; lingkup final ditetapkan dalam proposal tertulis.
- **BELUM TERVERIFIKASI:** alamat email (`hello@digiman.id`, `careers@digiman.id`), tahun pendirian, dan daftar 46 disiplin dewan perlu dikonfirmasi pemilik sebelum diklaim resmi di materi hukum/promosi.
- Aksesibilitas: semua section memakai heading semantik + ARIA label; animasi hormat `prefers-reduced-motion`.

---

## 6. Langkah lanjutan yang disarankan

1. Tautkan `/genesis` dari navigasi/footer utama (butuh edit kecil `navbar.tsx`/`footer.tsx` — sengaja tidak dilakukan pada merger ini demi prinsip additive-only).
2. Integrasikan `holding.ts` ke Prisma (migrasi `BusinessUnit`, `PricedService`) mengikuti `docs/DATA-MODEL.md`.
3. Ganti harga indikatif dengan harga final yang disetujui manajemen.
4. Tambahkan `sitemap` entry untuk `/genesis`.
