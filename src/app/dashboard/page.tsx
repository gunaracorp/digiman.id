import type { Metadata } from "next";
import HomeShell from "@/components/digiman/home-shell";

export const metadata: Metadata = {
  title: "Portal Klien — Dashboard Monitoring DIGIMAN.ID",
  description:
    "Pantau progres dokumen, invoice, jadwal meeting, dan aktivitas proyek legalitas Anda secara real-time di Portal Klien DIGIMAN.ID.",
  robots: { index: false, follow: false },
};

/** Halaman /dashboard — AppRouter menampilkan ClientDashboard berdasarkan pathname. */
export default function DashboardPage() {
  return <HomeShell />;
}
