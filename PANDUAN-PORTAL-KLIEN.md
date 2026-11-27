# PANDUAN PORTAL KLIEN — DIGIMAN.ID (Register & Login)

## Ringkasan perubahan

Portal Klien (`#/dashboard` atau `/dashboard`) **tidak lagi terbuka langsung saat diklik**.
Sekarang pengunjung harus **DAFTAR** atau **MASUK** dengan email + password terlebih dahulu.
Setelah sesi aktif, portal menampilkan dashboard lengkap (30 fitur premium) dan tombol
**Keluar** tersedia di bilah atas dashboard.

Yang ditambahkan/diubah:

| Bagian | File | Fungsi |
| --- | --- | --- |
| Model akun klien | `prisma/schema.prisma` (`ClientUser`) | email unik, hash password, nama, perusahaan, telepon |
| API daftar | `src/app/api/client-auth/register/route.ts` | validasi + buat akun + set cookie sesi |
| API masuk | `src/app/api/client-auth/login/route.ts` | verifikasi scrypt + rate limit 8x/5 menit |
| API keluar | `src/app/api/client-auth/logout/route.ts` | hapus cookie sesi |
| API cek sesi | `src/app/api/client-auth/me/route.ts` | dipakai gerbang portal saat halaman dibuka |
| Gerbang UI | `src/components/dashboard/client-portal-gate.tsx` | layar Masuk/Daftar sebelum portal terbuka |
| Tombol Keluar | `src/components/dashboard/client-dashboard.tsx` (Topbar) | keluar dari portal |
| Proteksi API data | `src/app/api/dashboard/route.ts` | 401 tanpa sesi; data hanya proyek atas email akun |
| Proteksi jalur | `src/middleware.ts` | `/dashboard` (path) tanpa sesi → dialihkan ke gerbang |
| Token sesi | `src/lib/auth-edge.ts` | JWT HS256 cookie `digiman_client` (httpOnly, 7 hari) |
| Seed akun | `scripts/seed-client-user.ts` (`bun run db:seed:client`) | daftarkan/mutakhirkan akun portal |

## Akun portal yang sudah didaftarkan

Akun portal **sudah terdaftar** di database (seed) dan proyek demo `PRJ-2026-001`
sudah diikat ke emailnya, sehingga setelah masuk portal langsung berisi data.

Kredensial **tidak ditulis di file ini** — disimpan di `.env` (diabaikan Git,
repo ini publik). Ubah `CLIENT_SEED_PASSWORD` di `.env` lalu jalankan ulang
`bun run db:seed:client` untuk mengganti password (upsert). Jangan pernah
menaruh password di file yang di-commit.

## Cara menjalankan

### Mode pengembangan

```bash
bun install          # sekali saja
bunx prisma db push  # sinkron schema (sudah dilakukan)
bun run db:seed              # konten situs (layanan, PGA, blog, dst.)
bun run db:seed:dashboard    # data demo proyek klien
bun run db:seed:client       # akun portal klien  ← WAJIB SETELAH seed dashboard
npm run dev          # http://localhost:3000
```

### Mode produksi (standalone)

```bash
npm run build
npm run start        # server.js di .next/standalone
```

Pastikan `.env` memuat `AUTH_SECRET` (string acak ≥ 32 karakter, contoh:
`openssl rand -hex 32`) dan `DATABASE_URL="file:<path absolut>/db/custom.db"`
— jalur absolut penting karena server produksi berjalan dari `.next/standalone/`.

## Cara kerja keamanan

1. **Password di-hash scrypt** (`salt:hash`, 64 byte) — tidak pernah disimpan polos.
2. **Sesi JWT HS256** pada cookie `digiman_client` (httpOnly, SameSite=Lax, 7 hari)
   — token tidak bisa dibaca/dipalsukan JavaScript pihak ketiga.
3. **Rate limit login**: maksimal 8 percobaan gagal per 5 menit per IP+email.
4. **Data terikat email**: `/api/dashboard` hanya mengembalikan `ClientProject`
   yang `email`-nya sama dengan akun yang masuk — klien lain tidak bisa melihat
   data proyek orang lain.
5. **Gerbang ganda**: hash-route `#/dashboard` dicek gerbang UI (client-side),
   jalur path `/dashboard` dicek middleware (server-side) — keduanya menampilkan
   layar Masuk/Daftar bila belum login.

## Menambah akun klien baru

**Opsi A — lewat situs:** klien buka `#/dashboard` → tab **Daftar** → isi nama,
email, password → akun langsung aktif.

**Opsi B — lewat admin:** tambahkan `ClientUser` baru di database (hash scrypt
format `salt:hash`), atau daftarkan via API:

```bash
curl -X POST http://localhost:3000/api/client-auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Nama Klien","email":"klien@perusahaan.id","password":"rahasia123","company":"PT Contoh"}'
```

Agar dashboard berisi data, admin perlu membuat `ClientProject` dengan **email yang
sama** dengan akun klien (dikelola dari Panel Admin `/admin`).

## Urutan seed yang benar (idempotent, aman diulang)

1. `db:seed` → konten situs
2. `db:seed:dashboard` → proyek demo (email default `andi@majubersama.id`)
3. `db:seed:client` → **mengikat ulang proyek demo ke email akun portal** —
   selalu jalankan ini paling akhir setelah `db:seed:dashboard`.
