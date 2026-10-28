import type { Metadata } from "next";
import HomeShell from "@/components/digiman/home-shell";

export const metadata: Metadata = {
  title: "Proposal Studio — Generator Penawaran DIGIMAN.ID",
  description:
    "Rancang penawaran Gunara OS dalam 4 langkah: pilih paket dokumen, tambahkan add-on, dan dapatkan estimasi investasi profesional secara instan.",
  robots: { index: true, follow: true },
};

/** Halaman /proposal — AppRouter menampilkan ProposalStudio berdasarkan pathname. */
export default function ProposalPage() {
  return <HomeShell />;
}
