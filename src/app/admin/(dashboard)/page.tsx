import { redirect } from "next/navigation";

/**
 * /admin → dialihkan ke panel admin hash-view (#route-admin) yang berfungsi penuh
 * (AdminApp pada landing router). Route admin legacy real-path dihapus karena
 * komponennya tidak konsisten dengan admin-ui ekspor saat ini.
 * Middleware proteksi tetap berlaku untuk /admin/* di middleware.ts —
 * namun karena redirect terjadi sebelum render, langsung ke tujuan akhir.
 */
export default function AdminRedirect() {
  redirect("/#route-admin");
}
