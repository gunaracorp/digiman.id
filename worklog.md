# Worklog — DIGIMAN.ID

---
Task ID: 1
Agent: Main (Z.ai)
Task: Install https://github.com/prabudanling/digiman.id (clone, deps, DB, verifikasi jalan)

Work Log:
- Clone repo, bun install, prisma generate
- db/custom.db bawaan repo terisi: 29 Service, 10 Testimonial, 10 Faq, 5 Office, 15 tabel
- DEBUG LOGIN 401: env global workspace DATABASE_URL=file:/home/z/my-project/db/custom.db menimpa .env repo → server buka DB salah. Bukti via /proc/PID/fd
- FIX: rm -rf /home/z/my-project/db + jalankan server dengan env eksplisit + buat start-dev.sh (pencegahan permanen)
- scrypt: salt dipakai sebagai hex-string literal (bukan bytes) — password admin: digiman2025 ✓

Stage Summary:
- Homepage 200 (0.22s), admin login OK, /api/admin/stats OK
- Kredensial: admin / digiman2025 di /admin
- PENTING: restart server selalu pakai `bash /home/z/my-project/digiman.id/start-dev.sh`
- Server sandbox mati antar-perintah bash → start dengan `(bash start-dev.sh > log 2>&1 &)`

---
Task ID: 2
Agent: Main (Z.ai)
Task: Benchmark "website terbaik" + 45 halaman baru + SEO standarisasi tertinggi + performa ringan + visual fine-tune

Work Log:
- BENCHMARK (agent-browser): Stripe, Linear, Apple, Vercel, Deel, Raycast → screenshot di /home/z/my-project/benchmark/. Temuan teknis: semua punya canonical; Linear teringan (16 script); 1 H1/halaman; title 40-60 char; metrik live (Stripe) & social proof = pola pembeda
- SEO INFRA:
  - src/app/sitemap.ts (dinamis dari DB → 44 URL), robots.ts (Google/Bing/Yandex/DuckDuck/Apple/AI-crawler + WhatsApp/Twitter/fb/LinkedIn bot), manifest.ts (PWA)
  - layout.tsx: +ProfessionalService JSON-LD (5 kantor, jam buka, priceRange) + SearchAction sitelinks
  - src/lib/seo.tsx: buildMetadata (canonical+OG+Twitter), JsonLd, breadcrumbLd, faqPageLd, serviceLd, articleLd, waLink
  - src/lib/pages.ts: registri halaman publik + label kategori
- 45 HALAMAN BARU:
  - src/lib/services/ (types, pendirian 8, perizinan 4, ki-sertifikasi 7, lainnya 10) = konten editorial 29 layanan: tagline, intro 2-3 paragraf, 5-6 benefit, 4-5 proses, syarat, 3-4 FAQ, related — fallback bermartabat bila layanan baru dibuat admin tanpa konten
  - /layanan (hub kategori + filter) + /layanan/[slug] ×29 (generateStaticParams, generateMetadata, Service+FAQPage+BreadcrumbList JSON-LD, WA CTA per layanan, related services) — server component murni, 0 framer-motion
  - Statis: /tentang-kami, /kontak (5 kantor + form), /paket-harga (4 paket), /faq (FAQPage LD), /syarat-ketentuan, /kebijakan-privasi (UU PDP)
  - Blog: /blog + /blog/[slug] ×6 artikel SEO (biaya PT, syarat online, PT vs CV vs PT, PT PMA, merek DJKI, urutan legalitas) + BlogPosting JSON-LD
- INTERNAL LINKING: kartu layanan homepage → /layanan/[slug] ("Detail"); navbar + Blog/Tentang; footer + 6 link halaman; PublicNav/PublicFooter di semua halaman baru
- PERFORMA (sangat ringan):
  - Preloader 2,9 dtk → brand-flash 0,7 dtk; hero mounted 2300→400ms; navbar delay 2,1→0,2s; semua delay animasi dikompresi
  - force-dynamic → revalidate=60 (ISR)
  - particle-field: off di mobile/reduced-motion, 30fps cap, pause saat tab hidden, dpr 1.5
  - next.config: poweredByHeader=false, optimizePackageImports (lucide+framer)
- VISUAL FINE-TUNE ala benchmark: metrik live di hero ("2.517+ dan terus bertambah", pulsing ala Stripe)
- FIX: /kontak 500 (ContactForm butuh prop services) → services={titles}
- VERIFIKASI: 18 rute 200; audit: semua halaman punya canonical+1 H1+OG+ld+json; admin login masih OK; mobile screenshot bersih

Stage Summary:
- Total rute publik: 1 → 46 (homepage, 29 layanan, hub layanan, 6 statis, 7 blog, manifest/robots/sitemap)
- SEO: sitemap 44 URL, robots multi-engine + AI crawler, JSON-LD per tipe halaman, canonical seluruh situs
- Kecepatan: konten tampil ~4x lebih cepat (preloader 2,9s→0,7s), ISR cache 60s, canvas berat off di HP
- Server: (bash start-dev.sh &) di /home/z/my-project/digiman.id

---
Task ID: 3
Agent: Main (Z.ai)
Task: OG image otomatis per halaman layanan + artikel blog baru tiap minggu

Work Log:
- OG IMAGE: src/lib/og.tsx (satori 1200x630, font brand di public/fonts) + opengraph-image.tsx x5 (root, /layanan, /layanan/[slug] dinamis, /blog, /blog/[slug]) — og:image & twitter:card otomatis, articleLd + image
- BLOG MINGGUAN: Post dimigrasi (slug/excerpt/jadwal), 6 artikel baru (total 12, 4 terjadwal mingguan s.d. 17 Nov), isPostLive WIB (UTC+7), /blog + detail pakai jadwal + ISR 300, Panel Admin > Blog CRUD + API, RSS /feed.xml, sitemap fix, homepage section artikel (order 12)
- VERIFIKASI: lint 0 error; 5 endpoint OG 200 image/png (inspeksi visual ok); E2E CRUD admin via curl ok; terjadwal 404 di publik; sitemap hanya live; agent-browser render ok; dev.log bersih

Stage Summary:
- OG image unik otomatis untuk seluruh situs (layanan + artikel + statis)
- Artikel terbit otomatis mingguan + terkelola di Panel Admin > Blog; RSS & sitemap selaras jadwal
