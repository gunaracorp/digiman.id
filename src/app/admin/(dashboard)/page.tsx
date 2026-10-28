import { redirect } from "next/navigation";

/**
 * /admin → dashboard utama panel admin modern (/admin/beranda).
 * Satu pintu admin: login /admin/login → dashboard ber-sidebar (shell.tsx).
 */
export default function AdminRedirect() {
  redirect("/admin/beranda");
}
