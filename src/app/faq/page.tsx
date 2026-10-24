import type { Metadata } from "next";
import { getSiteData } from "@/lib/site-data";
import { buildMetadata, JsonLd, breadcrumbLd, SITE, faqPageLd } from "@/lib/seo";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";
import Breadcrumbs from "@/components/public/breadcrumbs";
import WaCta from "@/components/public/wa-cta";

export const metadata: Metadata = buildMetadata({
  title: "Pertanyaan Umum (FAQ) — Legalitas Usaha | DIGIMAN.ID",
  description:
    "Jawaban atas pertanyaan paling sering diajukan: berapa biaya pendirian PT, berapa lama prosesnya, apakah bisa 100% online, apa itu garansi terbit, dan bagaimana memulai konsultasi gratis.",
  path: "/faq",
  keywords: ["faq pendirian pt", "biaya pendirian perusahaan", "legalitas usaha pertanyaan"],
});

export default async function FaqPage() {
  const data = await getSiteData();
  const s = data.settings;

  return (
    <div className="min-h-screen bg-[#050d0a] text-white">
      <JsonLd data={breadcrumbLd([{ name: "Beranda", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqPageLd(data.faqs)} />

      <PublicNav activePath="/faq" />

      <main className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <div className="pt-10">
          <Breadcrumbs items={[{ name: "Beranda", path: "/" }, { name: "FAQ", path: "/faq" }]} />
        </div>

        <h1 className="max-w-3xl font-[family-name:var(--font-grotesk)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Semua yang biasanya{" "}
          <span className="bg-gradient-to-r from-[var(--gold)] via-amber-300 to-[var(--gold)] bg-clip-text text-transparent">
            Anda tanyakan.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          Jawaban jujur dan spesifik dari pengalaman mendampingi{" "}
          {s.statClients.toLocaleString("id-ID")}+ bisnis. Tidak menemukan
          pertanyaan Anda? WhatsApp kami — dijawab manusia, bukan bot.
        </p>

        <div className="mt-12 space-y-3">
          {data.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] open:border-[var(--gold)]/30 open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-sm font-semibold text-white sm:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="shrink-0 text-[var(--gold)] transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-[1.85] text-white/60">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16">
          <WaCta context="pertanyaan yang belum terjawab di halaman ini" />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
