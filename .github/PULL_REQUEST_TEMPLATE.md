<!-- Genesis workflow: UNDERSTAND → DEFINE → ARCHITECT → IMPLEMENT → TEST → REVIEW -->

## What changed?

<!-- Apa yang berubah? Sebutkan scope: UI / API / data / docs / config. -->

## Why?

<!-- Mengapa perubahan ini perlu? Tautkan issue atau konteks bisnis holding. -->

## Testing

<!-- Bukti verifikasi: -->

- [ ] `bun run lint` exit 0
- [ ] `bunx tsc --noEmit` 0 error pada `src/`
- [ ] Dicek manual di browser (desktop + mobile)
- [ ] Konsol browser bersih (tanpa error/hydration mismatch)
- [ ] i18n: semua string baru punya pasangan ID **dan** EN

## Risk

<!-- Apa risikonya? Seo SEO / perf / security / regresi? Bagaimana risiko dimitigasi? -->

## Checklist arsitektur

- [ ] Identitas dari `brand.ts` / konten dari database (tanpa hard-code baru)
- [ ] Mengikuti design system (`globals.css` tokens, EASE `[0.22,1,0.36,1]`)
- [ ] Tidak menurunkan aksesibilitas
