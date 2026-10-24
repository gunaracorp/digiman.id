import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin, canWrite, logActivity } from "@/lib/admin-guard";
import { PAGES } from "@/lib/pages";

/**
 * INDEXNOW — pemberitahuan pengindeksan instan (Bing, Yandex, Seznam, Naver,
 * Yes.com dan jaringan bersama). SUPERADMIN memicu ping setelah konten besar
 * diperbarui; mesin pencari mitra mengantre crawl URL dalam hitungan menit.
 *
 * Kepemilikan domain dibuktikan lewat file kunci statis:
 *   public/<key>.txt  →  https://digiman.id/<key>.txt
 * Endpoint kolektif api.indexnow.org meneruskan otomatis ke seluruh mesin mitra.
 */

const INDEXNOW_KEY = "dcf041395f6308fa6b8bd29e395d051c";
const KEY_LOCATION = `https://digiman.id/${INDEXNOW_KEY}.txt`;
const HOST = "digiman.id";
const BASE = `https://${HOST}`;

export async function POST(req: NextRequest) {
  const session = await requireAdmin(req);
  if (!session) return NextResponse.json({ error: "Tidak terautentikasi." }, { status: 401 });
  if (!canWrite(session, "seo")) {
    return NextResponse.json({ error: "Hanya SUPERADMIN yang dapat memicu IndexNow ping." }, { status: 403 });
  }

  // Susun daftar URL terbaru: statis + layanan + artikel live
  const urls: string[] = [`${BASE}/`, ...PAGES.map((p) => `${BASE}${p.path}`)];

  try {
    const services = await db.service.findMany({
      where: { visible: true, slug: { not: null } },
      select: { slug: true },
      orderBy: { order: "asc" },
    });
    for (const s of services) urls.push(`${BASE}/layanan/${s.slug}`);
  } catch {
    // DB gagal — kirim minimal halaman statis
  }

  try {
    const { getAllVisiblePosts } = await import("@/lib/blog-data");
    const posts = await getAllVisiblePosts();
    for (const p of posts) urls.push(`${BASE}/blog/${p.slug}`);
  } catch {
    // blog opsional untuk ping
  }

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList: urls }),
      // 200/202 = diterima; 400 kunci salah; 403 kunci tidak valid; 422 terlalu banyak URL
      signal: AbortSignal.timeout(15_000),
    });

    const ok = res.status === 200 || res.status === 202;
    await logActivity(
      session.username,
      "UPDATE",
      `IndexNow ping ${ok ? "berhasil" : "gagal"} (${res.status}) — ${urls.length} URL dikirim`
    );

    return NextResponse.json({
      ok,
      status: res.status,
      sent: urls.length,
      message: ok
        ? `Ping diterima (${res.status}). ${urls.length} URL masuk antrean indeks Bing & mitra.`
        : `IndexNow menolak dengan status ${res.status}. Periksa kunci/kuota lalu coba lagi.`,
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Gagal menghubungi IndexNow.", detail: String(e) },
      { status: 502 }
    );
  }
}
