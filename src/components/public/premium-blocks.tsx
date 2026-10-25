import type { ReactNode } from "react";

/**
 * PREMIUM BLOCKS — komponen presentasi kelas Stripe/Linear untuk halaman
 * publik DIGIMAN.ID. Semuanya server component murni: nol JS klien,
 * nol framer-motion, deterministic (aman SSR, aman hydration).
 * Dipakai di seluruh halaman layanan (×165) & blog agar seluruh situs
 * naik kelas sekaligus dari satu tempat.
 */

/* ── SectionHead: label emas + judul + subopsi (ritme editorial premium) ── */
export function SectionHead({
  id,
  eyebrow,
  title,
  sub,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
        <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--gold)]/60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2.5 font-[family-name:var(--font-grotesk)] text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {sub ? <div className="mt-2.5 max-w-2xl text-sm leading-relaxed text-white/45">{sub}</div> : null}
    </div>
  );
}

/* ── TrustBand: pita statistik kepercayaan (angka faktual situs, bukan klaim) ── */
export function TrustBand({
  services,
  categories,
  pages,
}: {
  services: number;
  categories: number;
  pages: number;
}) {
  const stats = [
    { value: `${services}`, label: "Layanan & produk resmi", note: "satu atap, 20 industri" },
    { value: `${categories}`, label: "Kategori spesialisasi", note: "legalitas → digital → ESG" },
    { value: `${pages}+`, label: "Halaman panduan gratis", note: "bisa dipelajari tanpa beli" },
    { value: "<1×24", label: "Jam balasan konsultasi", note: "dijawab pakar, bukan bot" },
  ];
  return (
    <section aria-label="Angka kepercayaan DIGIMAN.ID" className="mt-14">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#07120d] px-5 py-6 sm:px-6">
            <p className="font-[family-name:var(--font-grotesk)] text-2xl font-bold tracking-tight text-[var(--gold)] sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1.5 text-xs font-semibold text-white/85">{s.label}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-white/40">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── GuaranteeCard: jaminan tiga lapis — penutup keraguan sebelum CTA ── */
export function GuaranteeCard() {
  const items = [
    {
      t: "Garansi di tangan",
      d: "Dokumen dan hasil kerja diserahkan utuh atas nama Anda — bukan atas nama perantara.",
    },
    {
      t: "Harga disepakati di awal",
      d: "Penawaran tertulis sebelum pengerjaan. Tidak ada biaya siluman di tengah jalan.",
    },
    {
      t: "Ditemani sampai selesai",
      d: "Satu penanggung jawab khusus mendampingi dari konsultasi pertama hingga dokumen terbit.",
    },
  ];
  return (
    <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
        Jaminan DIGIMAN.ID
      </p>
      <p className="mt-2.5 font-[family-name:var(--font-grotesk)] text-lg font-bold text-white">
        Risiko kami yang ditanggung, bukan Anda.
      </p>
      <ul className="mt-5 space-y-4">
        {items.map((it) => (
          <li key={it.t} className="flex items-start gap-3">
            <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-white/90">{it.t}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/45">{it.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── ComparisonTable: urusan sendiri vs dibantu DIGIMAN.ID — penutup keputusan ── */
export function ComparisonTable({ subject }: { subject: string }) {
  const rows = [
    ["Waktu yang dihabiskan", "Berminggu-minggu belajar regulasi & antre layanan", "Jam kerja pertama — tim yang sudah hafal jalannya"],
    ["Risiko salah langkah", "Revisi akta, KBLI kurang, izin tidak sinkron", "Pemetaan KBLI & perizinan benar sejak dokumen pertama"],
    ["Biaya tersembunyi", "Biaya per-KBLI, per-revisi, per-perjalanan muncul belakangan", "Penawaran tertulis lengkap sebelum pengerjaan"],
    ["Fokus Anda", "Terpecah antara operasional dan birokrasi", "Tetap 100% di bisnis — progres dilaporkan berkala"],
  ];
  return (
    <section aria-labelledby="compare-heading" className="mt-20">
      <SectionHead
        id="compare-heading"
        eyebrow="Perbandingan jujur"
        title="Urus sendiri vs ditemani DIGIMAN.ID"
        sub="Bukan berarti Anda tidak bisa — hanya saja waktunya mahal dan kesalahan tidak murah."
      />
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/8">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Perbandingan mengurus {subject} sendiri dibanding dibantu DIGIMAN.ID
          </caption>
          <thead>
            <tr className="bg-white/[0.04] text-xs uppercase tracking-wider">
              <th scope="col" className="px-5 py-4 font-semibold text-white/50">Aspek</th>
              <th scope="col" className="px-5 py-4 font-semibold text-white/50">Urus sendiri</th>
              <th scope="col" className="px-5 py-4 font-semibold text-[var(--gold)]">Dibantu DIGIMAN.ID</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([aspek, sendiri, kami]) => (
              <tr key={aspek} className="border-t border-white/5 align-top">
                <th scope="row" className="px-5 py-4 font-semibold text-white/85">{aspek}</th>
                <td className="px-5 py-4 leading-relaxed text-white/45">{sendiri}</td>
                <td className="bg-[var(--gold)]/[0.04] px-5 py-4 leading-relaxed text-white/80">{kami}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ── TestimonialSpot: satu suara klien nyata, dipilih deterministik per halaman ── */
export function TestimonialSpot({
  testimonials,
  seed,
}: {
  testimonials: { name: string; role: string; text: string }[];
  seed: string;
}) {
  if (testimonials.length === 0) return null;
  // Hash sederhana & stabil — halaman yang sama selalu menampilkan testimoni
  // yang sama (aman SSR, aman SEO, tidak ada random saat render).
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const pick = testimonials[h % testimonials.length];
  return (
    <section aria-label="Kata klien kami" className="mt-20">
      <figure className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-10">
        <span aria-hidden="true" className="pointer-events-none absolute -top-6 right-4 font-[family-name:var(--font-grotesk)] text-[7rem] leading-none text-[var(--gold)]/10 select-none">
          &rdquo;
        </span>
        <blockquote className="relative text-base leading-[1.9] text-white/80 sm:text-lg">
          &ldquo;{pick.text}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 font-[family-name:var(--font-grotesk)] text-sm font-bold text-[var(--gold)]">
            {pick.name.charAt(0).toUpperCase()}
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">{pick.name}</span>
            <span className="block text-xs text-white/45">{pick.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
