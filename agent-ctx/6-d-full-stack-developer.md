# Task 6-d — Proposal Studio (work record)

Agent: full-stack-developer
Status: SELESAI — tsc 0 error (file milik sendiri), eslint bersih, tidak menjalankan dev server/build, tidak menyentuh file agen lain.

## Files created (6 — semuanya BARU, tidak ada file lain yang diubah)

1. `src/lib/proposal-calc.ts` — mesin hitung MURNI (tanpa React/server import).
2. `src/app/api/proposals/route.ts` — API publik POST create + GET ?code=.
3. `src/app/api/admin/proposals/route.ts` — API admin GET list/detail + PATCH status/notes + DELETE (guard requireAdmin dari `@/lib/admin-auth`, dipakai apa adanya — TIDAK ditimpa).
4. `src/components/proposal/proposal-ui.tsx` — Pill, Stepper 3 langkah, inputCls, waLinkFor, EASE, WA_NUMBER.
5. `src/components/proposal/proposal-studio.tsx` — wizard full-page (hash #/proposal), default export tanpa props.
6. `src/components/proposal/proposal-preview.tsx` — dokumen resmi + print CSS (.proposal-print).

**CATATAN PENTING UNTUK INTEGRATOR:** di folder `src/components/proposal/` juga ada 5 file BUKAN buatan saya yang muncul secara paralel/konkuren: `types.ts`, `client-step.tsx`, `package-step.tsx`, `review-step.tsx`, `proposal-document.tsx`. Kluster itu TIDAK diimpor oleh entry point mana pun (orphan), lolos tsc & eslint, dan mengimpor lib saya — jadi dibiarkan tanpa disentuh. Implementasi kanonik sesuai spesifikasi tugas 6-d adalah `proposal-studio.tsx` (default export, tanpa props) yang merender `proposal-preview.tsx` saat preview/print. Jika ingin membersihkan, 5 file orphan itu boleh dihapus oleh pemilik folder/orkestrator tanpa mempengaruhi implementasi saya.

## Kontrak API

### POST /api/proposals (publik)
- Body: `{clientName, clientCompany?, clientEmail, clientWa, packageCode, documentCodes?, addonIds?, notes?}`
  - clientName ≥3 char; clientEmail regex; clientWa digit 9–15; packageCode wajib (`PGA-39|45|72|120|165` atau `CUSTOM`; selain itu 400).
  - CUSTOM wajib punya ≥1 documentCodes yang valid (ada di PgaDocument; dinormalisasi uppercase+dedupe+regex `PGA-n`).
  - addonIds difilter ke daftar ADDONS; notes ≤2000.
- Response 201: `{ok:true, code:"PNW-YYYYMMDD-XXX", proposal:{...terparse}}` — proposal sudah mem-parse documentCodes/addons/items + validUntil/createdAt ISO. Status default "DRAFT", validUntil = now+30 hari, subtotal/discount/total dihitung server via calcProposal.
- Error: 400 (validasi), 500. GET `?code=PNW-…` → `{ok, proposal}` / 404 (untuk halaman share).

### /api/admin/proposals (semua butuh cookie `gunara_admin`; tanpa → 401)
- GET → `{proposals: ProposalData[]}` (createdAt desc); `?status=` filter enum (invalid → 400); `?id=` → `{proposal}` / 404.
- PATCH `?id=` body `{status ∈ DRAFT|SENT|NEGOTIATION|WON|LOST, notes?}` → `{ok, proposal}`.
- DELETE `?id=` → `{ok:true}`.
- Panel admin (agen 6-e): chip status tinggal pakai `STATUS_META[status].chipClass` dari proposal-calc.

## Kontrak lib proposal-calc (untuk agen lain)
- `calcProposal(input {packageCode, documentCodes, addonIds}, packages {code,name,docCount,price,durationWeeks}[], docs? {code,tier}[])` → `ProposalCalc {docCount, unitPrice, subtotal, discountPct, discount, addons, total, durationLabel, packageLabel, tierBreakdown}`.
- `buildLineItems(calc)` → line items `[{label, qty, amount}]` — dipakai API (menyimpan ke DB.items) DAN wizard (ringkasan) agar identik; diskon = item negatif berlabel "Diskon Standarisasi (X%)".
- `makeProposalCode()`, `validUntilFrom()`, `fmtRp`, `fmtJt`, `fmtDateID`, `parseProposal(row)`, `statusMeta(status)`, konstanta `ADDONS, DISCOUNT_PCT, UNIT_PRICE, VALIDITY_DAYS, PROPOSAL_STATUSES, STATUS_META`.

## Mekanisme preset sessionStorage (dua arah dengan Gunara OS Explorer 6-b)
- Explorer menulis: `gunara-preset` (string kode paket, via savePackagePreset) dan `gunara-docs` (JSON array kode dokumen, via addDocCode).
- Proposal Studio membaca keduanya saat mount (client effect, try/catch, SSR-safe): preset → mode "package" + packageCode; docs tanpa preset → mode "custom" + selectedDocs; keduanya ada → preset menang (docs tetap dimuat). SETELAH dibaca, KEDUA KEY DIHAPUS (removeItem) supaya tidak membawa state basi saat navigasi berikutnya.
- Konsekuensi: klik CTA paket saat studio SUDAH terbuka pada hash yang sama tidak memicu pre-select ulang (butuh remount oleh integrator) — saat ini CTA selalu dari halaman lain, jadi aman.

## Diskon & durasi custom (kontrak bisnis final)
- Diskon hanya paket standar, transparan: PGA-39 0%, PGA-45 0%, PGA-72 5%, PGA-120 8%, PGA-165 12% — label tetap "Diskon Standarisasi"; tampil sebagai chip kartu, baris ringkasan/dokumen, dan line item negatif.
- CUSTOM: harga = jumlah dokumen × Rp 1.000.000 TANPA diskon; durasi estimasi = `ceil(n/8)–ceil(n/6)` minggu (min=max → "1 minggu"; 0 dok → "—").
- Standar: durasi dari DB `durationWeeks` + " minggu"; harga pakai formula docCount × 1jt (= price DB).

## Integrasi (untuk pemilik page.tsx)
- Render `<ProposalStudio />` ketika hash `#/proposal` — tanpa props, fetch data sendiri (loading skeleton + error retry sendiri). CTA lain cukup mengarahkan ke `#/proposal` + helper sessionStorage dari `@/lib/gunara`.
- Halaman share (opsional, agen lain): GET `/api/proposals?code=…` sudah tersedia.

## Verifikasi
- `bunx tsc --noEmit` → 0 error pada 6 file saya (sisa error pre-existing di examples/, skills/, scripts/seed-gunara.ts — milik agen lain, diabaikan sesuai instruksi).
- `bunx eslint` pada 6 file → exit 0 tanpa temuan.
- Sanity check kalkulasi (script sementara, sudah dihapus): PGA-72 + 2 add-on → subtotal 72jt, diskon 5% = 3,6jt, total 73,9jt, tierBreakdown benar; CUSTOM 2 dok → 2jt tanpa diskon "1 minggu"; kode unik PNW-YYYYMMDD-XXX; parseProposal roundtrip OK; DB berisi 165 dokumen & tabel Proposal siap.
