# 🔐 Kebijakan Keamanan — DIGIMAN.ID

## Versi yang didukung

| Rute | Status |
|---|---|
| `main` (digiman.id produksi) | ✅ Didukung penuh |
| Branch lain | ⚠️ Best effort |

## Melaporkan kerentanan

Jangan buka issue publik untuk kerentanan.

1. Email: **halo@digiman.id** dengan subjek `[SECURITY] <ringkasan>`, atau
2. WhatsApp resmi yang tertera di [digiman.id](https://digiman.id) (untuk isu kritis).

Sertakan: langkah reproduksi, dampak yang diperkirakan, dan (bila ada) proof-of-concept.
Kami berupaya menanggapi dalam **3×24 jam kerja**.

## Ruang lingkup

- Aplikasi web `digiman.id` (seluruh rute & API di bawah domain).
- Integrasi resmi: WhatsApp deep-link, profil sosial di `brand.ts`.

Di luar lingkup: spam, social engineering, DoS volume, penyalahgunaan layanan pihak ketiga.

## Langkah keamanan yang sudah diterapkan

- Tanpa secret di source code — semua lewat environment variables (`.env` di-gitignore).
- Security headers: `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal.
- Panel admin: kredensial bukan hard-code (tersimpan di database, wajib diganti saat go-live).
- Validasi input formulir + honeypot anti-bot.
- Dependabot aktif untuk pemantauan dependensi.

## Ketentuan disclosure

Kami mengikuti *coordinated disclosure*: detail kerentanan dipublikasikan hanya
setelah perbaikan dirilis dan pengguna diberi waktu untuk memperbarui.
