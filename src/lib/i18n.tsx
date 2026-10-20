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
  "footer.unduhKode": {
    id: "Unduh Kode Sumber (.zip)",
    en: "Download Source Code (.zip)",
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
