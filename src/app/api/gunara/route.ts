/**
 * GET /api/gunara — endpoint publik (tanpa auth) untuk Gunara OS Explorer.
 * Mengembalikan seluruh paket standar + 20 domain + 165 dokumen PGA.
 * Kolom JSON-string di DB (features, documentCodes, points) di-parse jadi array.
 */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type {
  GunaraApiResponse,
  GunaraPackageData,
  PgaDocData,
  PgaDomainData,
} from "@/lib/gunara";

export const dynamic = "force-dynamic";

/** Parse kolom JSON-string dari Prisma menjadi array string dengan aman. */
function parseJsonArray(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const [packages, domains, docs] = await Promise.all([
      db.gunaraPackage.findMany({ orderBy: { order: "asc" } }),
      db.pgaDomain.findMany({ orderBy: { number: "asc" } }),
      db.pgaDocument.findMany({
        orderBy: { number: "asc" },
        select: {
          code: true,
          number: true,
          title: true,
          tier: true,
          owner: true,
          domainNumber: true,
          points: true,
        },
      }),
    ]);

    // Hitung jumlah dokumen per domain untuk kartu domain.
    const docCountByDomain = new Map<number, number>();
    for (const doc of docs) {
      docCountByDomain.set(
        doc.domainNumber,
        (docCountByDomain.get(doc.domainNumber) ?? 0) + 1,
      );
    }

    const payload: GunaraApiResponse = {
      packages: packages.map<GunaraPackageData>((p) => ({
        code: p.code,
        name: p.name,
        tagline: p.tagline,
        description: p.description,
        docCount: p.docCount,
        price: p.price,
        durationWeeks: p.durationWeeks,
        features: parseJsonArray(p.features),
        documentCodes: parseJsonArray(p.documentCodes),
        highlight: p.highlight,
        order: p.order,
      })),
      domains: domains.map<PgaDomainData>((d) => ({
        number: d.number,
        name: d.name,
        tagline: d.tagline,
        description: d.description,
        docCount: docCountByDomain.get(d.number) ?? 0,
      })),
      docs: docs.map<PgaDocData>((doc) => ({
        code: doc.code,
        number: doc.number,
        title: doc.title,
        tier: doc.tier,
        owner: doc.owner,
        domainNumber: doc.domainNumber,
        points: parseJsonArray(doc.points),
      })),
    };

    return NextResponse.json(payload, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("[/api/gunara] Gagal memuat data:", error);
    // Keep the public SEO route renderable when the optional SQLite database is unavailable.
    // The explorer can show its structure and recover automatically once the database returns.
    return NextResponse.json<GunaraApiResponse>(
      { packages: [], domains: [], docs: [] },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }
}
