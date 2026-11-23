import type { Metadata } from "next";
import Link from "next/link";
import { getSiteData } from "@/lib/site-data";
import { CATEGORY_LABEL } from "@/lib/pages";
import { getServiceContent } from "@/lib/services";
import { buildMetadata, JsonLd, breadcrumbLd, faqPageLd, waLink } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";
import CopyButton from "@/components/public/catalog-copy";
import { buildCatalogEntry, type WaCatalogEntry } from "@/lib/wa-catalog";

/**
 * KATALOG WHATSAPP BUSINESS — kit siap pakai untuk menghubungkan seluruh
 * layanan DIGIMAN.ID ke Katalog WhatsApp Business:
 *   - Nama, deskripsi, harga, link, dan gambar persegi 1024×1024 per layanan
 *   - Tombol salin per bidang (paste langsung ke WhatsApp Business App)
 *   - Unduh CSV untuk alat impor massal (Commerce Manager / spreadsheet)
 * Halaman ini juga permukaan SEO baru: seluruh entri katalog terekspose
 * sebagai konten terstruktur yang bisa diindeks.
 */

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  const n = data.services.filter((s) => s.slug).length;
  return buildMetadata({
    title: `Katalog WhatsApp Business — ${n} Layanan Siap Impor | DIGIMAN.ID`,
    description: `Kit katalog WhatsApp Business siap pakai: ${n} layanan lengkap dengan nama, deskripsi, harga, link landing page, dan gambar persegi 1024×1024. Salin per bidang atau unduh CSV untuk impor massal.`,
    path: "/katalog-whatsapp",
    keywords: [
      "katalog whatsapp business",
      "jasa whatsapp business api",
      "cara membuat katalog whatsapp",
      "katalog produk wa bisnis",
      "impor katalog whatsapp csv",
      "digiman.id",
    ],
  });
}

const HOW_TO = [
  {
    title: "Siapkan WA Business",
    desc: "Pastikan Anda memakai WhatsApp Business App (atau WhatsApp Business API bila sudah terhubung sistem). Nomor bisnis resmi = kredibilitas sejak chat pertama.",
  },
  {
    title: "Salin bidang katalog",
    desc: "Untuk tiap layanan di bawah, salin Nama, Harga, Deskripsi, dan Link — lalu tempel ke item katalog baru di WhatsApp Business App Anda.",
  },
  {
    title: "Pasang gambar persegi",
    desc: "Tiap layanan punya gambar katalog 1024×1024 siap pakai — salin link gambarnya (atau unduh) dan jadikan foto item katalog.",
  },
  {
    title: "Atau impor massal",
    desc: "Tidak mau satu-satu? Unduh CSV lengkap di bawah, buka di Excel/Sheets, dan pakai untuk impor massal via alat Commerce Manager atau integrasi API.",
  },
];

const FAQS = [
  {
    q: "Bagaimana cara memasukkan layanan ini ke Katalog WhatsApp Business?",
    a: "Buka WhatsApp Business App → Alat bisnis → Katalog → Tambah produk atau layanan. Isi nama, harga, deskripsi, dan tautan dengan menyalin bidang-bidang yang tersedia di halaman ini, lalu unggah gambar kartu 1024×1024 masing-masing layanan. Tiap item katalog terhubung ke landing page layanan yang lengkap dengan tombol konsultasi WhatsApp.",
  },
  {
    q: "Apakah bisa diimpor sekaligus tanpa menyalin satu per satu?",
    a: "Bisa. Unduh berkas CSV di halaman ini — berisi seluruh layanan dengan kolom name, description, price, link, image_link, dan category. Berkas tersebut bisa dipakai untuk alat impor massal katalog (mis. Facebook/Instagram Commerce Manager yang terhubung WhatsApp, atau integrasi WhatsApp Business API lewat penyedia resmi).",
  },
  {
    q: "Kenapa tiap layanan diarahkan ke landing page sendiri?",
    a: "Katalog WhatsApp hanya menampung cuplikan singkat. Landing page memuat detail lengkap: syarat, proses, rincian biaya, dasar hukum, dan FAQ — plus tombol chat yang pesannya sudah terisi otomatis. Ini membuat calon klien yang datang dari katalog langsung berada di halaman yang menjawab semua pertanyaannya, dan mesin pencari ikut mengindeks halaman tersebut.",
  },
  {
    q: "Apakah harga dan isi katalog bisa berubah?",
    a: "Ya. Harga tampil sebagai 'mulai dari' karena biaya final menyesuaikan kebutuhan tiap klien (tertulis di penawaran). Saat katalog layanan Anda bertambah atau harga berubah di panel admin DIGIMAN.ID, halaman dan berkas CSV ini diperbarui otomatis — tinggal salin ulang atau unduh ulang.",
  },
];

export default async function KatalogWhatsAppPage() {
  const data = await getSiteData();
  const waDisplay = data.settings.waDisplay;

  const entries: WaCatalogEntry[] = data.services
    .filter((s) => s.slug)
    .map((s) =>
      buildCatalogEntry({
        slug: s.slug as string,
        title: s.title,
        desc: s.desc,
        price: s.price,
        features: s.items,
        category: s.category,
        content: s.slug ? getServiceContent(s.slug) : undefined,
        waNumber: data.settings.waNumber,
      })
    );

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Katalog WhatsApp Business", path: "/katalog-whatsapp" },
  ];

  // Kelompokkan per kategori mengikuti urutan katalog
  const byCategory = new Map<string, WaCatalogEntry[]>();
  for (const e of entries) {
    const list = byCategory.get(e.category) ?? [];
    list.push(e);
    byCategory.set(e.category, list);
  }

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      {/* ── Struktur data: CollectionPage + ItemList + FAQPage + Breadcrumb ── */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Katalog WhatsApp Business DIGIMAN.ID",
          description: `Kit katalog WhatsApp Business: ${entries.length} layanan siap salin & impor`,
          url: `${"https://digiman.id"}/katalog-whatsapp`,
          isPartOf: { "@id": "https://digiman.id/#website" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Katalog Layanan WhatsApp Business DIGIMAN.ID",
          numberOfItems: entries.length,
          itemListElement: entries.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: e.name,
            url: e.link,
          })),
        }}
      />
      <JsonLd data={faqPageLd(FAQS)} />
      <JsonLd data={breadcrumbLd(crumbs)} />

      <PublicNav activePath="/katalog-whatsapp" />

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* ── HERO ── */}
        <section aria-labelledby="katalog-heading" className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            WhatsApp Business · Siap salin &amp; impor
          </p>
          <h1
            id="katalog-heading"
            className="mt-3 max-w-3xl font-[family-name:var(--font-grotesk)] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            Katalog WhatsApp Business —{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
              {entries.length} layanan
            </span>{" "}
            siap terhubung.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            Semua layanan DIGIMAN.ID telah disiapkan sebagai item katalog:
            nama, deskripsi, harga, link landing page, dan gambar persegi
            1024×1024 sesuai standar WhatsApp. Salin per bidang ke WhatsApp
            Business App Anda, atau unduh seluruhnya sebagai CSV untuk impor
            massal.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/katalog-whatsapp/download"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-bold text-[#201601] shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
              Unduh CSV ({entries.length} layanan)
            </a>
            <a
              href={waLink(data.settings.waNumber, "Halo DIGIMAN.ID, saya ingin bantuan menghubungkan katalog layanan ke WhatsApp Business saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
            >
              Butuh bantuan setup? Chat kami
            </a>
          </div>
          <p className="mt-3 text-xs text-white/40">
            CSV UTF-8 (aman Excel &amp; Google Sheets) · diperbarui otomatis dari panel admin · {waDisplay}
          </p>
        </section>

        {/* ── CARA PAKAI ── */}
        <section aria-labelledby="cara-heading" className="mt-16">
          <h2 id="cara-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Empat langkah ke katalog Anda
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_TO.map((h, i) => (
              <div key={h.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 font-[family-name:var(--font-grotesk)] text-sm font-bold text-[var(--gold)]">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-semibold text-white">{h.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ENTRI KATALOG PER KATEGORI ── */}
        <section aria-labelledby="entri-heading" className="mt-20">
          <h2 id="entri-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Entri katalog siap salin
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/40">
            Tiap kartu = satu item katalog WhatsApp. Bidang mengikuti batas
            karakter platform: nama ≤ 100, deskripsi ≤ 1.000 karakter.
          </p>

          <div className="mt-10 space-y-14">
            {[...byCategory.entries()].map(([cat, list]) => (
              <div key={cat}>
                <h3 className="font-[family-name:var(--font-grotesk)] text-lg font-bold text-[var(--gold)]">
                  {CATEGORY_LABEL[cat] ?? cat}
                  <span className="ml-2 text-xs font-medium text-white/30">{list.length} layanan</span>
                </h3>

                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  {list.map((e) => (
                    <article
                      key={e.slug}
                      className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6"
                    >
                      {/* Nama */}
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-bold text-white">{e.name}</p>
                          <CopyButton value={e.name} label="nama katalog" />
                        </div>
                      </div>

                      {/* Harga */}
                      <div className="flex items-center justify-between gap-3 border-y border-white/5 py-3">
                        <p className="text-sm font-semibold text-[var(--gold)]">{e.price}</p>
                        <CopyButton value={e.price} label="harga" />
                      </div>

                      {/* Deskripsi */}
                      <div>
                        <p className="line-clamp-4 text-xs leading-relaxed text-white/55">{e.description}</p>
                        <div className="mt-2">
                          <CopyButton value={e.description} label="deskripsi katalog" />
                        </div>
                      </div>

                      {/* Link + gambar */}
                      <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-3">
                        <Link
                          href={`/layanan/${e.slug}`}
                          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-emerald-500/15 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/25"
                        >
                          Buka landing page →
                        </Link>
                        <CopyButton value={e.link} label="link landing page" />
                        <CopyButton value={e.imageLink} label="link gambar 1024×1024" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-white/30">
                        Gambar katalog (1024×1024): <span className="break-all text-white/40">{e.imageLink}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mt-20">
          <h2 id="faq-heading" className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight sm:text-3xl">
            Pertanyaan seputar katalog WhatsApp
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] open:border-[var(--gold)]/30 open:bg-white/[0.05]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-[var(--gold)] transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-[1.8] text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <WaCta context="menghubungkan katalog layanan ke WhatsApp Business" />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
