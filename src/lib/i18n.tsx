"use client";

/**
 * DIGIMAN.ID — Sistem i18n ringan (ID/EN).
 *
 * - LocaleProvider: React context, default "id", SSR-safe (hydrate dari
 *   localStorage "digiman-locale" di dalam effect agar tidak hydration mismatch).
 * - useI18n(): { locale, setLocale, t, tArr }.
 * - t(key): string locale aktif → fallback Indonesia → fallback terakhir key itu sendiri.
 *   Mendukung interpolasi opsional: t("kunci", { nama: "PT" }) untuk placeholder {nama}.
 * - tArr(key): string[] untuk key bertipe daftar (fallback []).
 *
 * Catatan integrasi: bungkus konten page dengan <LocaleProvider> dan pasang
 * <LanguageToggle /> (src/components/digiman/language-toggle.tsx) di navbar.
 * Tanpa provider, useI18n() tetap aman — mengembalikan locale "id" (no-op setLocale).
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Locale = "id" | "en";

/** Entri dictionary bernilai teks tunggal. */
type StrEntry = { id: string; en: string };
/** Entri dictionary bernilai daftar (mis. daftar kata hero). */
type ArrEntry = { id: string[]; en: string[] };

export type DictEntry = StrEntry | ArrEntry;

export const LOCALE_STORAGE_KEY = "digiman-locale";

/**
 * Dictionary flat. Nilai ID HARUS identik dengan string yang sebelumnya
 * di-hardcode di komponen (fallback Indonesia sama persis).
 */
export const DICTIONARY: Record<string, DictEntry> = {
  // ── common ──
  "common.konsultasiGratis": {
    id: "Konsultasi Gratis",
    en: "Free Consultation",
  },
  "common.kirimViaWhatsapp": {
    id: "Kirim via WhatsApp",
    en: "Send via WhatsApp",
  },
  "common.selengkapnya": { id: "Selengkapnya", en: "Learn more" },
  "common.kembali": { id: "Kembali", en: "Back" },
  "common.muatLainnya": { id: "Muat lainnya", en: "Load more" },
  "common.bahasa": { id: "Bahasa", en: "Language" },

  // ── nav (dipakai navbar.tsx — file terkunci, disiapkan untuk integrator) ──
  "nav.beranda": { id: "Beranda", en: "Home" },
  "nav.tujuhLangit": { id: "7 Lapis Langit", en: "7 Layers of Heaven" },
  "nav.layanan": { id: "Layanan", en: "Services" },
  "nav.paket": { id: "Paket & Harga", en: "Packages & Pricing" },
  "nav.mengapaKami": { id: "Mengapa Kami", en: "Why Us" },
  "nav.proses": { id: "Proses Kerja", en: "How It Works" },
  "nav.testimoni": { id: "Testimoni", en: "Testimonials" },
  "nav.faq": { id: "FAQ", en: "FAQ" },
  "nav.kontak": { id: "Kontak", en: "Contact" },
  "nav.gunaraOs": { id: "Gunara OS", en: "Gunara OS" },
  "nav.blog": { id: "Blog", en: "Blog" },
  "nav.penawaran": { id: "Penawaran", en: "Proposals" },

  // ── hero ──
  "hero.ariaLabel": { id: "Pembuka — DIGIMAN.ID", en: "Intro — DIGIMAN.ID" },
  "hero.badgeSk": {
    id: "SK Kemenkumham",
    en: "Ministry of Law Decree",
  },
  "hero.badgeBerdiri": { id: "Berdiri", en: "Established" },
  "hero.titleEm": {
    id: "Naikkan Bisnis Anda ke",
    en: "Take Your Business to the",
  },
  "hero.title2": { id: "7 Lapis Langit", en: "7 Heavenly Layers of" },
  "hero.title1": { id: "Legalitas", en: "Legality" },
  "hero.prioritas": { id: "Layanan Prioritas:", en: "Featured services:" },
  "hero.words": {
    id: [
      "Pendirian PT",
      "Pendirian CV",
      "PT PMA",
      "NIB & OSS",
      "Pendaftaran Merek",
      "Sertifikasi Halal",
      "Digitalisasi Bisnis",
    ],
    en: [
      "PT Incorporation",
      "CV Establishment",
      "Foreign-Investment PT (PMA)",
      "NIB & OSS",
      "Trademark Registration",
      "Halal Certification",
      "Business Digitalization",
    ],
  },
  "hero.ctaUtama": { id: "Konsultasi Gratis", en: "Free Consultation" },
  "hero.ctaKedua": { id: "Jelajahi Layanan ↓", en: "Explore Services ↓" },
  "hero.trustAria": {
    id: "Jaminan layanan DIGIMAN.ID",
    en: "DIGIMAN.ID service guarantees",
  },
  "hero.trust1": { id: "Garansi Terbit", en: "Issuance Guarantee" },
  "hero.trust2": { id: "98,4% Tepat Waktu", en: "98.4% On Time" },
  "hero.trust3": { id: "2500+ Klien Puas", en: "2,500+ Happy Clients" },
  "hero.chip1": { id: "PT Resmi Berdiri ✓", en: "PT Officially Established ✓" },
  "hero.chip2": { id: "NIB Terbit via OSS ✓", en: "NIB Issued via OSS ✓" },
  "hero.artworkAlt": {
    id: "Ilustrasi tujuh platform kaca yang menanjak menuju langit ke-7 — perjalanan legalitas bisnis DIGIMAN.ID",
    en: "Illustration of seven ascending glass platforms reaching the 7th heaven — the business legality journey of DIGIMAN.ID",
  },
  "hero.scrollCueAria": {
    id: "Gulir ke bawah menuju bagian 7 Lapis Langit",
    en: "Scroll down to the 7 Layers of Heaven section",
  },
  "hero.scrollCue": {
    id: "Gulir ke bagian 7 Lapis Langit",
    en: "Scroll to the 7 Layers of Heaven section",
  },
  "hero.waPesan": {
    id: "Halo DIGIMAN.ID, saya ingin konsultasi gratis mengenai legalitas bisnis.",
    en: "Hello DIGIMAN.ID, I'd like a free consultation about business legality.",
  },

  // ── stats ──
  "stats.ariaLabel": {
    id: "Statistik pencapaian DIGIMAN.ID",
    en: "DIGIMAN.ID track record",
  },
  "stats.klien": { id: "Klien Dilayani", en: "Clients Served" },
  "stats.pakar": { id: "Dewan Pakar", en: "Expert Council" },
  "stats.tahun": { id: "Tahun Pengalaman", en: "Years of Experience" },
  "stats.lapis": { id: "Lapis Langit", en: "Heaven Layers" },
  "stats.sukses": { id: "Tingkat Sukses", en: "Success Rate" },

  // ── services ──
  "services.ariaLabel": {
    id: "Katalog layanan DIGIMAN.ID",
    en: "DIGIMAN.ID service catalog",
  },
  "services.kicker": { id: "Katalog Layanan", en: "Service Catalog" },
  "services.judulPre": { id: "Semua Kebutuhan", en: "Every" },
  "services.judulA": { id: "Legalitas", en: "Legal" },
  "services.judulB": { id: "& Digital", en: "& Digital" },
  "services.judulPost": { id: "Anda", en: "Need" },
  "services.sub": {
    id: "27+ layanan dalam satu pintu — dari akta pendirian sampai otomasi AI. Klik kategori untuk memfilter.",
    en: "27+ services under one roof — from incorporation deeds to AI automation. Click a category to filter.",
  },
  "services.filterAria": {
    id: "Filter layanan berdasarkan kategori",
    en: "Filter services by category",
  },
  "services.semuaKategori": { id: "Semua Layanan", en: "All Services" },
  "services.favorit": { id: "Favorit", en: "Featured" },
  "services.konsultasi": { id: "Konsultasi", en: "Consult" },
  "services.ctaAria": {
    id: "Konsultasi layanan {title} via WhatsApp",
    en: "Consult {title} via WhatsApp",
  },
  "services.waPesan": {
    id: "Halo DIGIMAN.ID, saya tertarik dengan layanan {title}. Mohon info proses & biayanya.",
    en: "Hello DIGIMAN.ID, I'm interested in your {title} service. Could you share the process and pricing?",
  },

  // ── paket ──
  "paket.ariaLabel": {
    id: "Paket harga dan kalkulator legalitas DIGIMAN.ID",
    en: "DIGIMAN.ID pricing packages and legality calculator",
  },
  "paket.kicker": { id: "Paket & Harga", en: "Packages & Pricing" },
  "paket.judulA": { id: "Investasi Transparan,", en: "Transparent Investment," },
  "paket.judulB": { id: "Garansi di Tangan", en: "Guarantee Included" },
  "paket.sub": {
    id: "Empat paket berjenjang mengikuti tahap bisnis Anda — harga jelas di depan, rincian per pos tertulis, dengan garansi terbit yang benar-benar dijalankan.",
    en: "Four tiered packages that follow your business stage — upfront pricing, itemized written breakdowns, and an issuance guarantee we truly honor.",
  },
  "paket.terpopuler": { id: "Terpopuler", en: "Most Popular" },
  "paket.pilih": { id: "Pilih Paket", en: "Choose Package" },
  "paket.ctaAria": {
    id: "{cta} — konsultasi via WhatsApp",
    en: "{cta} — consult via WhatsApp",
  },
  "paket.waPesan": {
    id: "Halo DIGIMAN.ID, saya tertarik dengan {name} ({entity}). Mohon info proses & jadwal konsultasi gratisnya.",
    en: "Hello DIGIMAN.ID, I'm interested in {name} ({entity}). Could you share the process and schedule a free consultation?",
  },

  // ── kalkulator ──
  "calc.kicker": { id: "Kalkulator Interaktif", en: "Interactive Calculator" },
  "calc.judulPre": { id: "Hitung Estimasi", en: "Estimate Your" },
  "calc.judul": { id: "Biaya & Waktu", en: "Costs & Timeline" },
  "calc.judulPost": { id: "Anda", en: "" },
  "calc.sub": {
    id: "Pilih bentuk badan usaha, tambahkan layanan opsional, dan lihat estimasi biaya + waktu terhitung langsung. Tanpa registrasi, tanpa spam — hasilnya langsung bisa dikirim ke tim kami.",
    en: "Pick a business entity, add optional services, and see the estimated costs + timeline calculated instantly. No sign-up, no spam — send the result straight to our team.",
  },
  "calc.pilihBadan": {
    id: "Pilih Bentuk Badan Usaha",
    en: "Choose a Business Entity",
  },
  "calc.pilihAddon": { id: "Tambahan (Opsional)", en: "Add-ons (Optional)" },
  "calc.pilihTimeline": { id: "Rencana Waktu", en: "Timeline" },
  "calc.timelineSegera": { id: "Segera", en: "ASAP" },
  "calc.timeline1_3": { id: "1–3 Bulan", en: "1–3 Months" },
  "calc.timelineRencana": { id: "Masih Rencana", en: "Still Planning" },
  "calc.estimasiAnda": { id: "Estimasi Anda", en: "Your Estimate" },
  "calc.hasilAria": {
    id: "Hasil estimasi biaya dan waktu",
    en: "Cost and time estimate result",
  },
  "calc.pilihDurasi": {
    id: "Pilih layanan untuk melihat durasi",
    en: "Select services to see the duration",
  },
  "calc.hariKerja": { id: "hari kerja", en: "working days" },
  "calc.belumAda": {
    id: "Belum ada layanan dipilih.",
    en: "No services selected yet.",
  },
  "calc.rincian": { id: "Rincian", en: "Breakdown" },
  "calc.disclaimer": {
    id: "Estimasi kasar — biaya final tergantung KBLI & kebutuhan spesifik. Konsultasi gratis 100%.",
    en: "Rough estimate — final costs depend on KBLI codes and specific needs. Consultation is 100% free.",
  },
  "calc.kirimWa": {
    id: "Kirim Estimasi via WhatsApp",
    en: "Send Estimate via WhatsApp",
  },
  "calc.pilihDulu": {
    id: "Pilih bentuk badan usaha dulu",
    en: "Pick a business entity first",
  },
  "calc.total": { id: "Total", en: "Total" },
  "calc.estimasiBiaya": { id: "Estimasi biaya", en: "Estimated cost" },
  "calc.estimasiWaktu": { id: "Estimasi waktu", en: "Estimated time" },
  "calc.waIntro": {
    id: "Halo DIGIMAN.ID! Saya sudah hitung estimasi di website:",
    en: "Hello DIGIMAN.ID! Here's my estimate from your website:",
  },
  "calc.waEntity": {
    id: "• Bentuk badan usaha: {entity}",
    en: "• Business entity: {entity}",
  },
  "calc.waAddons": { id: "• Tambahan: {addons}", en: "• Add-ons: {addons}" },
  "calc.waTimeline": {
    id: "• Rencana waktu: {timeline}",
    en: "• Timeline: {timeline}",
  },
  "calc.waBiaya": {
    id: "• Estimasi biaya: {cost}",
    en: "• Estimated cost: {cost}",
  },
  "calc.waWaktu": {
    id: "• Estimasi waktu: {duration}",
    en: "• Estimated time: {duration}",
  },
  "calc.waClosing": {
    id: "Mohon info langkah selanjutnya. Terima kasih!",
    en: "Please share the next steps. Thank you!",
  },

  // ── why us ──
  "whyus.ariaLabel": {
    id: "Mengapa memilih DIGIMAN.ID",
    en: "Why choose DIGIMAN.ID",
  },
  "whyus.kicker": { id: "Mengapa DIGIMAN.ID", en: "Why DIGIMAN.ID" },
  "whyus.judulA": { id: "Dipercaya", en: "Trusted by" },
  "whyus.judulB": { id: "2500+ Pemilik Bisnis", en: "2,500+ Business Owners" },
  "whyus.sub": {
    id: "Dari warung kopi sampai PT PMA — klien naik lapis karena proses yang transparan, tim pakar yang saling terhubung, dan garansi yang benar-benar dijalankan.",
    en: "From corner coffee shops to foreign-owned PTs — clients level up thanks to transparent processes, a connected team of experts, and guarantees we truly deliver.",
  },

  // ── process ──
  "process.ariaLabel": {
    id: "Proses kerja DIGIMAN.ID",
    en: "DIGIMAN.ID work process",
  },
  "process.kicker": { id: "Proses Kerja", en: "How It Works" },
  "process.judulA": { id: "4 Langkah Menuju", en: "4 Steps to" },
  "process.judulB": { id: "Langit Pertama", en: "Your First Heaven" },
  "process.sub": {
    id: "Dari chat pertama sampai dokumen di tangan — setiap langkah terukur, terpantau, dan dijamin garansi.",
    en: "From your first chat to documents in hand — every step is measured, monitored, and covered by our guarantee.",
  },

  // ── testimonials ──
  "testimonials.kicker": { id: "Testimoni", en: "Testimonials" },
  "testimonials.judulA": { id: "Cerita Sukses", en: "Success Stories from" },
  "testimonials.judulB": { id: "Klien Kami", en: "Our Clients" },
  "testimonials.sub": {
    id: "Ribuan pemilik bisnis telah menaikkan legalitas usahanya ke level berikutnya bersama DIGIMAN.ID — inilah kata mereka.",
    en: "Thousands of business owners have elevated their legal standing with DIGIMAN.ID — here's what they say.",
  },
  "testimonials.kosong": {
    id: "Testimoni klien akan segera hadir.",
    en: "Client testimonials are coming soon.",
  },
  "testimonials.ratingAria": {
    id: "Rating {rating} dari 5",
    en: "Rated {rating} out of 5",
  },

  // ── faq ──
  "faq.kicker": { id: "FAQ", en: "FAQ" },
  "faq.judulA": { id: "Pertanyaan yang", en: "Frequently" },
  "faq.judulB": { id: "Sering Ditanyakan", en: "Asked Questions" },
  "faq.sub": {
    id: "Semua yang perlu Anda tahu sebelum memulai — dijawab transparan langsung oleh tim pakar kami.",
    en: "Everything you need to know before getting started — answered transparently by our expert team.",
  },
  "faq.ctaJudul": {
    id: "Masih ada pertanyaan lain?",
    en: "Still have other questions?",
  },
  "faq.ctaSub": {
    id: "Tim pakar kami siap menjawab — gratis, tanpa komitmen.",
    en: "Our expert team is ready to answer — free, no commitment.",
  },
  "faq.ctaBtn": { id: "Tanya via WhatsApp", en: "Ask via WhatsApp" },
  "faq.waPesan": {
    id: "Halo DIGIMAN.ID, saya punya pertanyaan seputar legalitas bisnis",
    en: "Hello DIGIMAN.ID, I have a question about business legality",
  },

  // ── cta band ──
  "ctaband.judulA": {
    id: "Siap Naikkan Bisnis Anda ke",
    en: "Ready to Take Your Business to the",
  },
  "ctaband.judulB": { id: "7 Lapis Langit", en: "7 Layers of Heaven" },
  "ctaband.sub": {
    id: "Ribuan bisnis sudah berdiri kokoh bersama DIGIMAN.ID. Giliran Anda — mulai dari obrolan ringan, kami yang urus sisanya sampai selesai.",
    en: "Thousands of businesses stand strong with DIGIMAN.ID. Your turn — start with a casual chat and we'll handle the rest until it's done.",
  },
  "ctaband.btnWa": {
    id: "Konsultasi Gratis via WhatsApp",
    en: "Free Consultation via WhatsApp",
  },
  "ctaband.btnPaket": { id: "Lihat Paket Harga", en: "View Pricing" },
  "ctaband.trust1": {
    id: "Respons cepat jam kerja",
    en: "Fast response during business hours",
  },
  "ctaband.trust2": {
    id: "Konsultasi 100% gratis",
    en: "100% free consultation",
  },
  "ctaband.trust3": { id: "Tanpa komitmen", en: "No commitment" },
  "ctaband.waPesan": {
    id: "Halo DIGIMAN.ID! Saya ingin konsultasi gratis.",
    en: "Hello DIGIMAN.ID! I'd like a free consultation.",
  },

  // ── contact ──
  "contact.kicker": { id: "Kontak", en: "Contact" },
  "contact.judulA": { id: "Mulai Konsultasi", en: "Start Your Free" },
  "contact.judulB": { id: "Gratis", en: "Consultation" },
  "contact.judulPost": { id: "Sekarang", en: "Today" },
  "contact.sub": {
    id: "Isi formulir — balasan dijamin dalam 1×24 jam kerja.",
    en: "Fill in the form — guaranteed reply within 1×24 business hours.",
  },
  "contact.labelWa": { id: "WhatsApp", en: "WhatsApp" },
  "contact.labelEmail": { id: "Email", en: "Email" },
  "contact.labelJam": { id: "Jam Operasional", en: "Business Hours" },
  "contact.labelAlamat": { id: "Alamat", en: "Address" },
  "contact.online": { id: "Online sekarang", en: "Online now" },
  "contact.legalJudul": { id: "Legalitas Resmi", en: "Official Legality" },
  "contact.legalSk": { id: "SK Kemenkumham", en: "Ministry of Law Decree" },
  "contact.legalNib": { id: "NIB", en: "NIB (Business ID)" },
  "contact.legalNpwp": { id: "NPWP", en: "NPWP (Tax ID)" },
  "contact.berdiri": {
    id: "Berdiri {date} — {company}.",
    en: "Established {date} — {company}.",
  },
  "contact.kantor": { id: "Kantor Kami", en: "Our Offices" },
  "contact.cabang": { id: "Cabang", en: "Branch" },
  "contact.formAria": {
    id: "Formulir permintaan konsultasi",
    en: "Consultation request form",
  },
  "contact.formJudul": { id: "Formulir Konsultasi", en: "Consultation Form" },
  "contact.formSub": {
    id: "Isi data di bawah — tim kami membalas dalam 1×24 jam kerja.",
    en: "Fill in your details below — our team replies within 1×24 business hours.",
  },
  "contact.nama": { id: "Nama Lengkap", en: "Full Name" },
  "contact.email": { id: "Email", en: "Email" },
  "contact.wa": { id: "No. WhatsApp", en: "WhatsApp Number" },
  "contact.layanan": {
    id: "Layanan yang Diminati",
    en: "Service of Interest",
  },
  "contact.pesan": { id: "Pesan", en: "Message" },
  "contact.phNama": { id: "Nama Anda", en: "Your name" },
  "contact.phEmail": { id: "nama@bisnis.com", en: "name@business.com" },
  "contact.phWa": { id: "08xx xxxx xxxx", en: "08xx xxxx xxxx" },
  "contact.phLayanan": {
    id: "Pilih layanan (opsional)",
    en: "Choose a service (optional)",
  },
  "contact.phPesan": {
    id: "Ceritakan rencana bisnis Anda...",
    en: "Tell us about your business plan...",
  },
  "contact.layananUmum": {
    id: "Belum tahu / Konsultasi umum",
    en: "Not sure yet / General consultation",
  },
  "contact.layananAria": {
    id: "Layanan yang diminati",
    en: "Service of interest",
  },
  "contact.kirim": {
    id: "Kirim Permintaan Konsultasi",
    en: "Send Consultation Request",
  },
  "contact.mengirim": { id: "Mengirim...", en: "Sending..." },
  "contact.privasi": {
    id: "Data Anda aman & hanya digunakan untuk keperluan konsultasi.",
    en: "Your data is safe & only used for consultation purposes.",
  },
  "contact.suksesJudul": { id: "Permintaan terkirim!", en: "Request sent!" },
  "contact.suksesDesc": {
    id: "Tim kami akan menghubungi Anda dalam 1×24 jam kerja. Terima kasih!",
    en: "Our team will contact you within 1×24 business hours. Thank you!",
  },
  "contact.suksesDescBot": {
    id: "Tim kami akan menghubungi Anda dalam 1×24 jam.",
    en: "Our team will contact you within 1×24 hours.",
  },
  "contact.errJudul": { id: "Gagal mengirim.", en: "Failed to send." },
  "contact.errDesc": {
    id: "Coba lagi atau chat WhatsApp langsung.",
    en: "Try again or chat us directly on WhatsApp.",
  },
  "contact.errNama": {
    id: "Nama lengkap minimal 3 karakter.",
    en: "Full name must be at least 3 characters.",
  },
  "contact.errEmail": {
    id: "Format email tidak valid — cek kembali ya.",
    en: "Invalid email format — please double-check.",
  },
  "contact.errWa": {
    id: "Nomor WhatsApp tidak valid (9–15 digit).",
    en: "Invalid WhatsApp number (9–15 digits).",
  },
  "contact.errPesan": {
    id: "Ceritakan rencana Anda minimal 10 karakter.",
    en: "Please describe your plan in at least 10 characters.",
  },
  "contact.waPesan": {
    id: "Halo DIGIMAN.ID! Saya ingin konsultasi gratis.",
    en: "Hello DIGIMAN.ID! I'd like a free consultation.",
  },

  // ── footer ──
  "footer.tagline": {
    id: "Satu pintu dari akta pendirian sampai transformasi digital.",
    en: "One gateway from incorporation deeds to digital transformation.",
  },
  "footer.layananPopuler": { id: "Layanan Populer", en: "Popular Services" },
  "footer.perusahaan": { id: "Perusahaan", en: "Company" },
  "footer.kontak": { id: "Kontak", en: "Contact" },
  "footer.tentang": { id: "Tentang", en: "About" },
  "footer.prosesKerja": { id: "Proses Kerja", en: "How It Works" },
  "footer.paketHarga": { id: "Paket Harga", en: "Pricing" },
  "footer.faq": { id: "FAQ", en: "FAQ" },
  "footer.ekosistem": { id: "Ekosistem: TOP Konsultan ↗", en: "Ecosystem: TOP Konsultan ↗" },
  "footer.hakCipta": {
    id: "© {year} PT Digital Bisnis Manajemen (DIGIMAN.ID). Seluruh hak cipta.",
    en: "© {year} PT Digital Bisnis Manajemen (DIGIMAN.ID). All rights reserved.",
  },
  "footer.founder": {
    id: "Didirikan {date} oleh Gugun Gunara — Pendiri & Direktur Utama",
    en: "Founded {date} by Gugun Gunara — Founder & President Director",
  },
  "footer.brandJudul": { id: "Ekosistem & Brand", en: "Ecosystem & Brands" },
  "footer.dukunganSistem": {
    id: "Sistem ini didukung, dikurasi, dan distandarisasi oleh:",
    en: "This system is powered, curated, and standardized by:",
  },
  "footer.kreditBy": {
    id: "by Gugun Gunara · Muhammad Lutfi Azmi (prabudanling) · Santri Angon",
    en: "by Gugun Gunara · Muhammad Lutfi Azmi (prabudanling) · Santri Angon",
  },
  "footer.ikutiKami": { id: "Ikuti Kami", en: "Follow Us" },
  "footer.sosialAria": {
    id: "Profil media sosial resmi DIGIMAN.ID",
    en: "Official DIGIMAN.ID social media profiles",
  },
  "footer.github": {
    id: "Kode Sumber di GitHub",
    en: "Source Code on GitHub",
  },
  "seoHub.kicker": { id: "SEO God Mode", en: "SEO God Mode" },
  "seoHub.judul": {
    id: "Direktori Kata Kunci & Tagar",
    en: "Keyword & Hashtag Directory",
  },
  "seoHub.sub": {
    id: "Peta lengkap layanan DIGIMAN.ID — dari pendirian PT sampai Gunara OS — di 66 kota Indonesia. Halaman ini adalah indeks hidup yang dibaca mesin pencari.",
    en: "The complete map of DIGIMAN.ID services — from PT incorporation to Gunara OS — across 66 Indonesian cities. This page is a living index read by search engines.",
  },
  "seoHub.statAria": {
    id: "Statistik korpus SEO DIGIMAN.ID",
    en: "DIGIMAN.ID SEO corpus statistics",
  },
  "seoHub.statKw": { id: "Kata Kunci", en: "Keywords" },
  "seoHub.statTag": { id: "Tagar Sosial", en: "Hashtags" },
  "seoHub.statKota": { id: "Kota", en: "Cities" },
  "seoHub.statLayanan": { id: "Layanan", en: "Services" },
  "seoHub.dirJudul": {
    id: "Layanan × Kota — Direktori Lokal",
    en: "Services × Cities — Local Directory",
  },
  "seoHub.kwJudul": { id: "1.000 Kata Kunci Terpasang", en: "1,000 Installed Keywords" },
  "seoHub.tagJudul": { id: "1.000 Tagar Sosial", en: "1,000 Social Hashtags" },
  "seoHub.catatan": {
    id: "Korpus 1.000 kata kunci & 1.000 tagar tersusun deterministik dari 48 layanan, 66 kota, dan 89 long-tail intent — dirancang oleh Muhammad Lutfi Azmi (prabudanling) untuk DIGIMAN.ID.",
    en: "The 1,000-keyword & 1,000-hashtag corpus is deterministically composed from 48 services, 66 cities, and 89 long-tail intents — engineered by Muhammad Lutfi Azmi (prabudanling) for DIGIMAN.ID.",
  },

  // ─── TASK 15-B: Client Dashboard (#/dashboard) — 30 Fitur Premium ───
  "dash.title": { id: "Portal Klien", en: "Client Portal" },
  "dash.skip": { id: "Langsung ke konten", en: "Skip to content" },
  "dash.badge30": { id: "30 Fitur Premium", en: "30 Premium Features" },
  "dash.nav.portalKlien": { id: "Portal Klien", en: "Client Portal" },
  "dash.nav.ringkasan": { id: "Ringkasan", en: "Overview" },
  "dash.nav.progres": { id: "Progres", en: "Progress" },
  "dash.nav.keuangan": { id: "Keuangan", en: "Finance" },
  "dash.nav.kolaborasi": { id: "Kolaborasi", en: "Collaboration" },
  "dash.nav.kualitas": { id: "Kualitas", en: "Quality" },
  "dash.nav.alat": { id: "Alat", en: "Tools" },
  "dash.nav.backSite": { id: "Kembali ke Situs", en: "Back to Website" },
  "dash.sidebar.collapse": { id: "Ciutkan", en: "Collapse" },
  "dash.started": { id: "Mulai", en: "Started" },
  "dash.target": { id: "Target Selesai", en: "Target Done" },
  "dash.greeting.morning": { id: "Selamat pagi", en: "Good morning" },
  "dash.greeting.afternoon": { id: "Selamat siang", en: "Good afternoon" },
  "dash.greeting.evening": { id: "Selamat sore", en: "Good evening" },
  "dash.greeting.night": { id: "Selamat malam", en: "Good night" },
  "dash.status.ON_TRACK": { id: "Sesuai Jadwal", en: "On Track" },
  "dash.status.ATTENTION": { id: "Perlu Perhatian", en: "Needs Attention" },
  "dash.status.AT_RISK": { id: "Berisiko", en: "At Risk" },
  "dash.status.DONE": { id: "Selesai", en: "Completed" },
  "dash.legend.done": { id: "Selesai", en: "Done" },
  "dash.legend.review": { id: "Review", en: "Review" },
  "dash.legend.pending": { id: "Menunggu", en: "Pending" },
  "dash.legend.payment": { id: "dari nilai kontrak", en: "of contract value" },
  "dash.kpi.aria": { id: "Statistik utama proyek", en: "Key project statistics" },
  "dash.kpi.health": { id: "Health score", en: "Health score" },
  "dash.kpi.done": { id: "Dokumen Selesai", en: "Documents Done" },
  "dash.kpi.review": { id: "Sedang Review", en: "In Review" },
  "dash.kpi.pending": { id: "Menunggu Eksekusi", en: "Awaiting Execution" },
  "dash.kpi.payment": { id: "Pembayaran", en: "Payment" },
  "dash.ring.title": { id: "Progres 165 Dokumen", en: "165-Document Progress" },
  "dash.ring.docs": {
    id: "{done} dari {total} dokumen selesai",
    en: "{done} of {total} documents done",
  },
  "dash.health.title": { id: "Skor Kesehatan Proyek", en: "Project Health Score" },
  "dash.health.high": { id: "Sangat Sehat", en: "Excellent" },
  "dash.health.mid": { id: "Cukup Sehat", en: "Fair" },
  "dash.health.low": { id: "Butuh Intervensi", en: "Needs Intervention" },
  "dash.tier.title": { id: "Dokumen per Tier", en: "Documents per Tier" },
  "dash.donut.title": { id: "Komposisi Status Dokumen", en: "Document Status Mix" },
  "dash.domains.title": { id: "Top Domain Selesai", en: "Top Domains by Completion" },
  "dash.domains.desc": { id: "{n} domain teratas", en: "Top {n} domains" },
  "dash.timeline.title": { id: "Milestone Proyek", en: "Project Milestones" },
  "dash.milestone.ACTIVE": { id: "Sedang Berjalan", en: "Active" },
  "dash.overdue": { id: "Terlambat", en: "Overdue" },
  "dash.search.title": { id: "Pencari Dokumen", en: "Document Finder" },
  "dash.search.placeholder": {
    id: "Cari PGA-100 atau nama domain…",
    en: "Search PGA-100 or domain name…",
  },
  "dash.search.hint": {
    id: "Ketik kode dokumen (mis. 100) atau nama domain — status dihitung real-time.",
    en: "Type a document code (e.g. 100) or a domain name — status is computed in real-time.",
  },
  "dash.search.empty": { id: "Tidak ada hasil untuk", en: "No results for" },
  "dash.search.results": { id: "{n} hasil untuk", en: "{n} results for" },
  "dash.search.clear": { id: "Bersihkan pencarian", en: "Clear search" },
  "dash.invoices.title": { id: "Invoice & Termin", en: "Invoices & Terms" },
  "dash.invoices.no": { id: "No. Invoice", en: "Invoice No." },
  "dash.invoices.label": { id: "Keterangan", en: "Description" },
  "dash.invoices.due": { id: "Jatuh Tempo", en: "Due Date" },
  "dash.invoices.amount": { id: "Jumlah", en: "Amount" },
  "dash.invoices.status": { id: "Status", en: "Status" },
  "dash.invoiceStatus.PAID": { id: "Lunas", en: "Paid" },
  "dash.invoiceStatus.PENDING": { id: "Menunggu", en: "Pending" },
  "dash.invoiceStatus.SCHEDULED": { id: "Terjadwal", en: "Scheduled" },
  "dash.pay.title": { id: "Akumulasi Pembayaran", en: "Payment Accumulation" },
  "dash.pay.paid": { id: "dibayar", en: "paid" },
  "dash.pay.remaining": { id: "sisa", en: "remaining" },
  "dash.pay.accumulated": { id: "Akumulasi", en: "Accumulated" },
  "dash.notif.title": { id: "Notifikasi", en: "Notifications" },
  "dash.notif.markAll": { id: "Tandai dibaca", en: "Mark all read" },
  "dash.notif.empty": { id: "Tidak ada notifikasi.", en: "No notifications." },
  "dash.activity.title": { id: "Umpan Aktivitas", en: "Activity Feed" },
  "dash.chat.title": { id: "Pesan Tim", en: "Team Chat" },
  "dash.chat.placeholder": { id: "Tulis pesan untuk tim…", en: "Write a message to the team…" },
  "dash.chat.send": { id: "Kirim pesan", en: "Send message" },
  "dash.meetings.title": { id: "Agenda Meeting", en: "Meeting Agenda" },
  "dash.meetings.upcoming": { id: "Akan Datang", en: "Upcoming" },
  "dash.meetings.history": { id: "Riwayat", en: "History" },
  "dash.meetings.done": { id: "Selesai", en: "Done" },
  "dash.meetings.duration": { id: "{n} menit", en: "{n} min" },
  "dash.daysLeft": { id: "{days} hari lagi", en: "in {days} days" },
  "dash.today": { id: "Hari ini", en: "Today" },
  "dash.tomorrow": { id: "Besok", en: "Tomorrow" },
  "dash.legalitas.title": { id: "Legalitas Perusahaan", en: "Legal Compliance" },
  "dash.legalStatus.DONE": { id: "Terbit", en: "Issued" },
  "dash.legalStatus.IN_REVIEW": { id: "Ditinjau", en: "In Review" },
  "dash.legalStatus.PENDING": { id: "Menunggu", en: "Pending" },
  "dash.digital.title": { id: "Inisiatif Digitalisasi", en: "Digitalization Initiatives" },
  "dash.goals.title": { id: "Sasaran Proyek (OKR)", en: "Project Goals (OKR)" },
  "dash.ach.title": { id: "Pencapaian", en: "Achievements" },
  "dash.ach.locked": { id: "Terkunci", en: "Locked" },
  "dash.team.title": { id: "Tim & Stakeholder", en: "Team & Stakeholders" },
  "dash.actions.title": { id: "Aksi Cepat", en: "Quick Actions" },
  "dash.action.report": { id: "Unduh Laporan", en: "Download Report" },
  "dash.action.meeting": { id: "Jadwalkan Meeting", en: "Schedule Meeting" },
  "dash.action.message": { id: "Kirim Pesan", en: "Send Message" },
  "dash.action.os": { id: "Buka Gunara OS", en: "Open Gunara OS" },
  "dash.action.support": { id: "Hubungi Dukungan", en: "Contact Support" },
  "dash.action.print": { id: "Cetak", en: "Print" },
  "dash.files.title": { id: "File Center", en: "File Center" },
  "dash.files.download": { id: "Unduh {name}", en: "Download {name}" },
  "dash.time.now": { id: "baru saja", en: "just now" },
  "dash.time.minAgo": { id: "{n} mnt lalu", en: "{n} min ago" },
  "dash.time.hourAgo": { id: "{n} jam lalu", en: "{n} h ago" },
  "dash.time.dayAgo": { id: "{n} hari lalu", en: "{n} d ago" },
  "dash.theme.light": { id: "Buka mode terang", en: "Switch to light mode" },
  "dash.theme.dark": { id: "Buka mode gelap", en: "Switch to dark mode" },
  "dash.loading": { id: "Memuat dasbor proyek…", en: "Loading project dashboard…" },
  "dash.error.title": { id: "Gagal memuat data dasbor", en: "Failed to load dashboard data" },
  "dash.error.retry": { id: "Coba Lagi", en: "Retry" },
  "dash.report.meta": {
    id: "Laporan Progres Otomatis — {code}",
    en: "Automated Progress Report — {code}",
  },
  "dash.toast.print": { id: "Laporan siap dicetak", en: "Report ready to print" },
  "dash.toast.printDesc": {
    id: "Pilih \"Simpan sebagai PDF\" pada dialog cetak untuk mengunduh laporan.",
    en: "Choose \"Save as PDF\" in the print dialog to download the report.",
  },
  "dash.toast.meeting": { id: "Permintaan meeting terkirim", en: "Meeting request sent" },
  "dash.toast.meetingDesc": {
    id: "Tim akan mengonfirmasi jadwal dalam 1×24 jam kerja. (Demo)",
    en: "The team will confirm the schedule within 1×24 business hours. (Demo)",
  },
  "dash.toast.file": { id: "Unduhan demo", en: "Demo download" },
  "dash.toast.fileDesc": {
    id: "Berhasil! File {name} sedang disiapkan. (Demo)",
    en: "Done! File {name} is being prepared. (Demo)",
  },
  "dash.palette.aria": { id: "Buka command palette", en: "Open command palette" },
  "dash.palette.placeholder": {
    id: "Ketik perintah atau cari seksi…",
    en: "Type a command or search sections…",
  },
  "dash.palette.empty": { id: "Tidak ada perintah ditemukan.", en: "No commands found." },
  "dash.palette.sections": { id: "Navigasi Seksi", en: "Sections" },
  "dash.palette.actions": { id: "Aksi Cepat", en: "Quick Actions" },
  "dash.palette.links": { id: "Tautan", en: "Links" },
  "dash.palette.blog": { id: "Buka Blog", en: "Open Blog" },
  "dash.palette.theme": { id: "Ganti Tema Terang/Gelap", en: "Toggle Light/Dark Theme" },
  "dash.palette.language": { id: "Ganti Bahasa ID/EN", en: "Toggle Language ID/EN" },
  "dash.palette.hint": {
    id: "Ctrl+K untuk perintah lebih cepat",
    en: "Ctrl+K for faster commands",
  },

  // ─── TASK 17: Legacy — narasi pengalaman 17 tahun (hero + timeline) ───
  "hero.badgeSejak": { id: "Pengalaman sejak 2009", en: "Experience since 2009" },
  "legacy.ariaLabel": { id: "Perjalanan pengalaman perusahaan", en: "Company experience journey" },
  "legacy.kicker": { id: "Jejak Pengalaman", en: "Our Track Record" },
  "legacy.title1": { id: "Legalitas Kami Muda.", en: "Our Legal Entity Is Young." },
  "legacy.title2": { id: "Keahlian Kami 17 Tahun.", en: "Our Expertise Is 17 Years Deep." },
  "legacy.desc": {
    id: "Sebelum badan hukum ini berdiri, keahliannya sudah diuji lebih dari satu dekade — dari meja konsultansi global McKinsey & Company hingga praktik independen lintas industri. Legalitas adalah jangkar, bukan awal cerita kami.",
    en: "Long before this legal entity was formed, the expertise was already battle-tested for over a decade — from the global consulting table of McKinsey & Company to independent practice across industries. Legality is our anchor, not the start of our story.",
  },
  "legacy.badge": { id: "17+ Tahun Pengalaman", en: "17+ Years of Experience" },
  "legacy.m1Year": { id: "2009", en: "2009" },
  "legacy.m1Title": { id: "Fondasi Global — McKinsey & Company", en: "Global Foundation — McKinsey & Company" },
  "legacy.m1Desc": {
    id: "Karier pendiri dimulai di meja konsultansi global — standar analisis dan disiplin eksekusi McKinsey menjadi DNA setiap solusi yang kami serahkan.",
    en: "Our founder's career began at the global consulting table — McKinsey-grade analysis and execution discipline are the DNA of every solution we deliver.",
  },
  "legacy.m2Year": { id: "2013", en: "2013" },
  "legacy.m2Title": { id: "Praktik Independen", en: "Independent Practice" },
  "legacy.m2Desc": {
    id: "Menemani bisnis lintas industri bertumbuh selama 13 tahun — pengalaman lapangan panjang sebelum badan hukum ini berdiri.",
    en: "Guiding businesses across industries for 13 years — long field experience before this legal entity was ever formed.",
  },
  "legacy.m3Year": { id: "2022", en: "2022" },
  "legacy.m3Title": { id: "PT Digital Bisnis Manajemen", en: "PT Digital Bisnis Manajemen" },
  "legacy.m3Desc": {
    id: "Praktik diformalisasi berbadan hukum — SK AHU-059566.AH.01.30.Tahun 2022, NIB resmi. Legalitas menjadi jangkar pertumbuhan, bukan awal cerita.",
    en: "The practice was formalized as a legal entity — SK AHU-059566.AH.01.30.Tahun 2022, official NIB. Legality became the growth anchor, not the start of the story.",
  },
  "legacy.m4Year": { id: "2026", en: "2026" },
  "legacy.m4Title": { id: "Era digiman.id & Gunara OS", en: "The digiman.id & Gunara OS Era" },
  "legacy.m4Desc": {
    id: "165 dokumen arsitektur super organisasi, platform 7 lapis langit, dan portal klien futuristik — warisan 17 tahun keahlian yang terus bertumbuh.",
    en: "165 super-organization architecture documents, the 7-heavenly-layers platform, and a futuristic client portal — a living legacy of 17 years of expertise.",
  },
  "legacy.footer": {
    id: "Pengalaman sejak 2009 · Praktik mandiri sejak 2013 · Berbadan hukum 2022",
    en: "Experience since 2009 · Independent practice since 2013 · Legal entity since 2022",
  },

  /* ── Genesis Stage 1 — Arsitektur Holding (#holding) ── */
  "holding.ariaLabel": {
    id: "Arsitektur holding dan ekosistem grup",
    en: "Holding architecture and group ecosystem",
  },
  "holding.kicker": { id: "Arsitektur Holding", en: "Holding Architecture" },
  "holding.title1": { id: "Satu Ekosistem.", en: "One Ecosystem." },
  "holding.title2": { id: "Empat Pilar Kekuatan.", en: "Four Pillars of Strength." },
  "holding.desc": {
    id: "DIGIMAN.ID bukan sekadar jasa — ia adalah arsitektur holding yang menaungi badan hukum, modal intelektual, komunitas, dan platform teknologi dalam satu tata kelola.",
    en: "DIGIMAN.ID is more than a service — it is a holding architecture encompassing legal entities, intellectual capital, community, and technology platform under one governance.",
  },
  "holding.rootRole": { id: "Digital Holding", en: "Digital Holding" },
  "holding.rootDesc": {
    id: "Induk ekosistem yang mengorkestrasi bisnis, teknologi, layanan, dan modal intelektual — dengan tata kelola berbadan hukum yang terverifikasi.",
    en: "The ecosystem parent orchestrating businesses, technology, services, and intellectual capital — with verifiable legal governance.",
  },
  "holding.chipFounded": { id: "Berdiri {year}", en: "Established {year}" },
  "holding.chipHolding": { id: "Induk Ekosistem", en: "Ecosystem Parent" },
  "holding.p1Role": { id: "Badan Hukum Legal & Konsultan", en: "Legal & Consulting Entity" },
  "holding.p1Name": { id: "PT Top Konsultan Internasional", en: "PT Top Konsultan Internasional" },
  "holding.p1Desc": {
    id: "Lengan legalitas & kepatuhan bisnis — pendampingan PT, perizinan, merek, dan sertifikasi.",
    en: "The business legality & compliance arm — PT incorporation, licensing, trademarks, and certifications.",
  },
  "holding.p2Role": { id: "Modal Intelektual", en: "Intellectual Capital" },
  "holding.p2Name": { id: "Gunara OS", en: "Gunara OS" },
  "holding.p2Desc": {
    id: "Sistem operasi super organisasi — 165 dokumen arsitektur standar dalam 4 tingkat akses.",
    en: "The super-organization operating system — 165 standard architecture documents across 4 access tiers.",
  },
  "holding.p3Role": { id: "Komunitas", en: "Community" },
  "holding.p3Name": { id: "Santri Angon", en: "Santri Angon" },
  "holding.p3Desc": {
    id: "Komunitas pendukung yang menumbuhkan ekosistem, jaringan, dan distribusi nilai.",
    en: "The supporting community growing the ecosystem, network, and value distribution.",
  },
  "holding.p4Role": { id: "Teknologi & Platform", en: "Technology & Platform" },
  "holding.p4Name": { id: "Platform digiman.id", en: "digiman.id Platform" },
  "holding.p4Desc": {
    id: "Portal klien 30 fitur, Admin Command Center, dan asisten DigiAI — otak digital grup.",
    en: "30-feature client portal, Admin Command Center, and DigiAI assistant — the group's digital brain.",
  },
  "holding.kunjungi": { id: "Kunjungi situs", en: "Visit site" },
  "holding.jelajahi": { id: "Jelajahi", en: "Explore" },
  "holding.leaderRole": { id: "Pendiri & Direktur Utama", en: "Founder & President Director" },
  "holding.leaderBio": {
    id: "{years} tahun keahlian — McKinsey & Company (2009) · Praktik independen (2013)",
    en: "{years} years of expertise — McKinsey & Company (2009) · Independent practice (2013)",
  },
  "footer.holding": { id: "Arsitektur Holding", en: "Holding Architecture" },
};

/* ────────────────────────── util ────────────────────────── */

function isLocale(value: unknown): value is Locale {
  return value === "id" || value === "en";
}

/** Ganti placeholder {nama} pada string dictionary. */
function interpolate(
  template: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
  );
}

function makeT(locale: Locale) {
  return (key: string, vars?: Record<string, string | number>): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    const value = entry[locale] ?? entry.id;
    if (typeof value === "string") return interpolate(value, vars);
    if (Array.isArray(value)) return value.length > 0 ? value[0] : key;
    return key;
  };
}

function makeTArr(locale: Locale) {
  return (key: string): string[] => {
    const entry = DICTIONARY[key];
    if (!entry) return [];
    const value = entry[locale] ?? entry.id;
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return value.length > 0 ? [value] : [];
    return [];
  };
}

/* ────────────────────────── context ────────────────────────── */

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tArr: (key: string) => string[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

/** Nilai aman saat komponen dipakai di luar LocaleProvider (default ID). */
const FALLBACK_CONTEXT: I18nContextValue = {
  locale: "id",
  setLocale: () => undefined,
  t: makeT("id"),
  tArr: makeTArr("id"),
};

/* ── External store locale (pola useSyncExternalStore) ──
   State locale hidup di luar React sehingga hydrate dari localStorage
   tidak butuh setState di dalam effect (aman aturan react-hooks). */

let storeLocale: Locale = "id";
const localeListeners = new Set<() => void>();

function notifyLocale(next: Locale) {
  storeLocale = next;
  for (const listener of localeListeners) listener();
}

function subscribeLocale(listener: () => void) {
  localeListeners.add(listener);
  return () => {
    localeListeners.delete(listener);
  };
}

function getLocaleSnapshot(): Locale {
  return storeLocale;
}

function getServerLocaleSnapshot(): Locale {
  return "id";
}

function persistLocale(next: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {
    // persistensi best-effort (private mode dsb.).
  }
  document.documentElement.lang = next;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // SSR & render pertama selalu "id" — hindari hydration mismatch.
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  // Hydrate pilihan tersimpan setelah mount (tanpa setState — via external store).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) {
        document.documentElement.lang = stored;
        if (stored !== storeLocale) notifyLocale(stored);
      }
    } catch {
      // localStorage tidak tersedia — tetap "id".
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    persistLocale(next);
    if (next !== storeLocale) notifyLocale(next);
  }, []);

  const t = useMemo(() => makeT(locale), [locale]);
  const tArr = useMemo(() => makeTArr(locale), [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t, tArr }),
    [locale, setLocale, t, tArr],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext) ?? FALLBACK_CONTEXT;
}
