/**
 * Lapisan data blog — menggabungkan artikel statis (blog-posts.ts) dengan
 * artikel dari Panel Admin (model Post) dan artikel terseed model BlogPost,
 * hanya yang sudah boleh tayang. Artikel DB bertanggal masa depan otomatis
 * muncul saat tanggalnya tiba.
 */
import { db } from "@/lib/db";
import { BLOG_POSTS, isPostLive, type BlogPost } from "./blog-posts";

/** Normalisasi konten post DB (JSON sections atau teks/markdown polos) → format BlogPost */
function normalizeContent(raw: string, title: string): BlogPost["sections"] {
  try {
    const parsed = JSON.parse(raw);
    const valid =
      Array.isArray(parsed) &&
      parsed.length > 0 &&
      parsed.every((s) => s && typeof s.h2 === "string" && Array.isArray(s.blocks));
    if (valid) return parsed as BlogPost["sections"];
  } catch {
    // bukan JSON → perlakukan sebagai teks/markdown polos
  }
  return markdownToSections(raw, title);
}

/**
 * Konversi markdown ringan → sections (h2/h3/p/ul).
 * Mendukung: `## Judul`, `### Subjudul`, paragraf, `- item` / `* item`,
 * dan blok `> kutipan` (dirender sebagai paragraf bergaya).
 */
function markdownToSections(raw: string, title: string): BlogPost["sections"] {
  const text = (raw ?? "").replace(/\r\n/g, "\n").trim();
  if (!text) {
    return [{ h2: "Isi Artikel", blocks: [{ type: "p", text: title }] }];
  }

  // Pecah per heading `## ` (atau `# ` untuk dokumen tanpa h2)
  const headingRe = /\n(?=#{1,3} )/;
  const chunks = text.split(headingRe).map((c) => c.trim()).filter(Boolean);
  const sections: BlogPost["sections"] = [];

  for (const chunk of chunks) {
    const lines = chunk.split("\n");
    let h2 = title;
    let rest = lines;
    const first = lines[0] ?? "";
    const headingMatch = first.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      h2 = headingMatch[2].trim() || title;
      rest = lines.slice(1);
    }

    const blocks: BlogPost["sections"][number]["blocks"] = [];
    let para: string[] = [];
    let list: string[] = [];

    const flushPara = () => {
      if (para.length > 0) {
        blocks.push({ type: "p", text: para.join(" ").trim() });
        para = [];
      }
    };
    const flushList = () => {
      if (list.length > 0) {
        blocks.push({ type: "ul", items: list });
        list = [];
      }
    };

    for (const line of rest) {
      const l = line.trim();
      if (!l) {
        flushPara();
        flushList();
        continue;
      }
      const h3 = l.match(/^###\s+(.*)$/);
      const li = l.match(/^[-*]\s+(.*)$/);
      if (h3) {
        flushPara();
        flushList();
        blocks.push({ type: "h3", text: h3[1].trim() });
      } else if (li) {
        flushPara();
        list.push(li[1].trim().replace(/^\*\*(.+):\*\*$/, "$1:"));
      } else if (l.startsWith(">")) {
        flushPara();
        flushList();
        blocks.push({ type: "p", text: l.replace(/^>\s?/, "").trim() });
      } else {
        flushList();
        // buang penekanan markdown **bold** agar teks bersih di renderer
        para.push(l.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1"));
      }
    }
    flushPara();
    flushList();

    if (blocks.length === 0) blocks.push({ type: "p", text: h2 });
    sections.push({ h2, blocks });
  }

  return sections.length > 0 ? sections : [{ h2: "Isi Artikel", blocks: [{ type: "p", text: title }] }];
}

/** Artikel dari model BlogPost (seed awal Gunara OS) yang boleh tayang. */
async function blogPostRows(now: Date): Promise<BlogPost[]> {
  const rows = await db.blogPost.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  return rows
    .filter((r) => !r.publishedAt || r.publishedAt <= now)
    .map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt,
      date: (r.publishedAt ?? r.createdAt).toISOString().slice(0, 10),
      author: "Dewan Pakar DIGIMAN.ID",
      readMinutes: r.readMinutes,
      keywords: (() => {
        try {
          const parsed = JSON.parse(r.tags);
          return Array.isArray(parsed) ? parsed.map((x) => String(x)) : [];
        } catch {
          return [];
        }
      })(),
      sections: normalizeContent(r.content || "", r.title),
    }));
}

/** Gabungan semua artikel yang boleh tayang (DB Post + DB BlogPost + statis), urut terbaru, tanpa duplikat slug. */
export async function getAllVisiblePosts(now: Date = new Date()): Promise<BlogPost[]> {
  const staticLive = BLOG_POSTS.filter((p) => isPostLive(p, now));

  let dbPosts: BlogPost[] = [];
  try {
    const rows = await db.post.findMany({
      where: { published: true, date: { lte: now } },
      orderBy: { date: "desc" },
    });
    dbPosts = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt,
      date: r.date.toISOString().slice(0, 10),
      author: r.author,
      readMinutes: r.readMinutes,
      keywords: r.tags
        ? r.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
      sections: normalizeContent(r.content || "", r.title),
    }));
  } catch {
    // DB tidak tersedia → blog statis tetap tayang penuh
  }

  let seededPosts: BlogPost[] = [];
  try {
    seededPosts = await blogPostRows(now);
  } catch {
    // model BlogPost tidak tersedia → lewati
  }

  const seen = new Set<string>();
  return [...dbPosts, ...seededPosts, ...staticLive].filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  }).sort((a, b) => b.date.localeCompare(a.date));
}

/** Satu artikel yang boleh tayang berdasarkan slug (cari di DB + statis). */
export async function getVisiblePost(slug: string, now: Date = new Date()): Promise<BlogPost | null> {
  const posts = await getAllVisiblePosts(now);
  return posts.find((p) => p.slug === slug) ?? null;
}
