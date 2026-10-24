# 🤝 Panduan Kontribusi — DIGIMAN.ID

Terima kasih berkontribusi pada arsitektur digital holding ini. Baca dulu
[ARCHITECTURE.md](./ARCHITECTURE.md) agar setiap perubahan selaras dengan doctrine.

## Alur kerja (Genesis §27)

```text
UNDERSTAND → DEFINE → ARCHITECT → IMPLEMENT → TEST → REVIEW → DEPLOY → OBSERVE → IMPROVE
```

1. **Pahami dulu** — baca ARCHITECTURE.md §2 (business), §4 (design system), §5 (teknis).
2. **Buka issue** sebelum perubahan besar — diskusikan pendekatan, jangan langsung PR.
3. **Branch** dari `main`: `feat/<scope>`, `fix/<scope>`, `docs/<scope>`.
4. **Implement** mengikuti aturan kode di bawah.
5. **Verifikasi** sebelum meminta review.

## Aturan kode

- TypeScript strict, tanpa `any` baru; semua komponen tiped.
- Bahasa Indonesia untuk copy/komentar (kode EN standar).
- Identitas brand HANYA dari `src/lib/brand.ts`; konten dari database via
  `digiman-data.ts`; angka narasi tahun dari `LEGACY` — jangan pernah hard-code.
- Semua string UI lewat `i18n.tsx` (ID + EN berpasangan).
- Gunakan utilitas desain yang ada (`.glass`, `.card-glow`, `.gradient-text-gold`,
  EASE `[0.22,1,0.36,1]`) — jangan menulis CSS acak per halaman.
- Animasi: `whileInView` + `viewport once`, hormati `prefers-reduced-motion`.
- Aksesibilitas tidak boleh dikorbankan: semantik HTML, ARIA seperlunya,
  target sentuh ≥44px.

## Quality gate sebelum PR

```bash
bun run lint          # exit 0
bunx tsc --noEmit     # 0 error pada src/
bun run dev           # cek manual: render, mobile & desktop, konsol bersih
```

## Commit message

Format imperatif + scope, contoh:

```text
feat(holding): tambah section arsitektur ekosistem
fix(i18n): perbaiki interpolasi tahun di kartu stats
docs(architecture): perbarui roadmap stage 3
```

## Pull Request

Gunakan template PR (What/Why/Testing/Risk). PR kecil & fokus > PR raksasa.
Satu PR = satu maksud.

## Lisensi

Dengan berkontribusi Anda menyetujui bahwa kontribusi dilisensikan di bawah
[LICENSE](./LICENSE) proyek (milik PT Digital Bisnis Manajemen).
