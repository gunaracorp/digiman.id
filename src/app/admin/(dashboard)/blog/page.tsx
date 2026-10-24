"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Loader2,
  Save,
  X,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  CalendarClock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { PageHeader, AdminCard, FieldLabel, inputCls, btnEmerald, EmptyState } from "@/components/admin/admin-ui";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string;
  readMinutes: number;
  author: string;
  published: boolean;
  date: string; // ISO
  state: "LIVE" | "SCHEDULED" | "DRAFT";
}

const emptyForm = {
  id: null as string | null,
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  tags: "",
  readMinutes: 6,
  author: "Dewan Pakar DIGIMAN.ID",
  published: true,
  date: "",
};

/** ISO → nilai untuk <input type="datetime-local"> (zona lokal peramban) */
function toLocalInput(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

const STATE_BADGE: Record<Post["state"], { label: string; cls: string }> = {
  LIVE: { label: "Tayang", cls: "border-emerald-400/40 text-emerald-300" },
  SCHEDULED: { label: "Terjadwal", cls: "border-gold/40 text-gold" },
  DRAFT: { label: "Draf", cls: "border-white/20 text-white/50" },
};

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/admin/posts", { cache: "no-store" });
      const data = await res.json();
      setPosts(data.posts ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const startEdit = (p: Post) => {
    setForm({
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      content: p.content,
      tags: p.tags,
      readMinutes: p.readMinutes,
      author: p.author,
      published: p.published,
      date: toLocalInput(p.date),
    });
    setMsg(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const save = async () => {
    if (!form.title.trim()) {
      setMsg({ ok: false, text: "Judul artikel wajib diisi." });
      return;
    }
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          // datetime-local (lokal) → ISO UTC; kosong → server pakai sekarang
          date: form.date ? new Date(form.date).toISOString() : undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg({ ok: false, text: data.error ?? "Gagal menyimpan." });
        return;
      }
      setMsg({
        ok: true,
        text: form.id
          ? "Artikel diperbarui."
          : "Artikel ditambahkan — bila tanggalnya di masa depan, artikel otomatis tayang saat tanggalnya tiba.",
      });
      setForm(emptyForm);
      await load();
    } catch {
      setMsg({ ok: false, text: "Terjadi kesalahan jaringan." });
    } finally {
      setSaving(false);
    }
  };

  const remove = async (p: Post) => {
    if (!window.confirm(`Hapus artikel “${p.title}”?`)) return;
    setRemovingId(p.id);
    try {
      await fetch(`/api/admin/posts/${p.id}`, { method: "DELETE" });
      if (form.id === p.id) setForm(emptyForm);
      await load();
    } finally {
      setRemovingId(null);
    }
  };

  const togglePublish = async (p: Post) => {
    await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        tags: p.tags,
        readMinutes: p.readMinutes,
        author: p.author,
        published: !p.published,
        date: p.date,
      }),
    });
    await load();
  };

  return (
    <div>
      <PageHeader
        icon={<Newspaper className="h-6 w-6 text-emerald-300" />}
        title="Blog"
        desc="Artikel edukatif untuk mesin pencari. Set tanggal masa depan untuk menerbitkan otomatis — mis. satu artikel baru setiap minggu."
      />

      {msg && (
        <div
          className={`mb-6 rounded-2xl border px-5 py-4 text-sm ${
            msg.ok ? "border-emerald-400/30 bg-emerald-950/40 text-emerald-200" : "border-red-400/25 bg-red-950/30 text-red-300"
          }`}
          role="status"
        >
          {msg.text}
        </div>
      )}

      {/* Form */}
      <AdminCard className="mb-8">
        <h2 className="font-display mb-5 flex items-center gap-2 text-lg font-bold text-white">
          {form.id ? <Pencil className="h-4.5 w-4.5 text-gold" /> : <Plus className="h-4.5 w-4.5 text-gold" />}
          {form.id ? "Edit Artikel" : "Tulis Artikel Baru"}
        </h2>

        <div className="space-y-4">
          <div>
            <FieldLabel>Judul</FieldLabel>
            <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="mis. Cara Mendirikan PT Secara Online" className={inputCls} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel>Slug (opsional — otomatis dari judul)</FieldLabel>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="cara-mendirikan-pt-online" className={inputCls} />
            </div>
            <div>
              <FieldLabel>Tanggal & jam terbit</FieldLabel>
              <Input
                type="datetime-local"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputCls}
              />
            </div>
          </div>
          <div>
            <FieldLabel>Kutipan (tampil di kartu blog & hasil pencarian)</FieldLabel>
            <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} placeholder="Ringkasan 1–2 kalimat yang memancing klik…" className={inputCls} />
          </div>
          <div>
            <FieldLabel>
              Isi artikel — teks polos (paragraf dipisah baris kosong) atau JSON sections{" "}
              <span className="text-emerald-50/40">[{`{ h2, blocks: [{type:"p"|"ul"|"table"|"h3", …}] }`}] seperti artikel bawaan</span>
            </FieldLabel>
            <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={10} placeholder="Tulis isi artikel di sini…" className={`${inputCls} font-mono text-xs`} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <FieldLabel>Tag SEO (dipisah koma)</FieldLabel>
              <Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="pendirian pt, legalitas usaha" className={inputCls} />
            </div>
            <div>
              <FieldLabel>Menit baca</FieldLabel>
              <Input type="number" min={1} max={60} value={form.readMinutes} onChange={(e) => setForm({ ...form, readMinutes: Number(e.target.value) || 6 })} className={inputCls} />
            </div>
            <div>
              <FieldLabel>Penulis</FieldLabel>
              <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className={inputCls} />
            </div>
          </div>
          <label className="flex cursor-pointer items-center gap-3">
            <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
            <span className="text-sm font-medium text-emerald-100/80">
              Lolos tayang (dipublikasikan sesuai tanggal terbit)
            </span>
          </label>
          <div className="flex items-center gap-3">
            <Button onClick={save} disabled={saving} className={btnEmerald}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {form.id ? "Simpan Perubahan" : "Tambah Artikel"}
            </Button>
            {form.id && (
              <Button variant="outline" onClick={() => setForm(emptyForm)} className="border-emerald-400/25 bg-transparent text-emerald-100/70 hover:text-white">
                <X className="h-4 w-4" /> Batal
              </Button>
            )}
          </div>
        </div>
      </AdminCard>

      {/* Daftar */}
      <AdminCard>
        <h2 className="font-display mb-5 text-lg font-bold text-white">
          Daftar Artikel <span className="text-sm font-medium text-emerald-50/45">({posts.length})</span>
        </h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
          </div>
        ) : posts.length === 0 ? (
          <EmptyState
            title="Belum ada artikel di database"
            desc="Artikel bawaan tetap tampil di website. Tulis artikel pertama dari formulir di atas — jadwalkan satu per minggu untuk ritme terbaik di mata Google."
          />
        ) : (
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {posts.map((p, i) => {
                const badge = STATE_BADGE[p.state] ?? STATE_BADGE.DRAFT;
                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-4 rounded-2xl border border-emerald-400/15 bg-[#0a1613]/70 px-4 py-4 ${
                      !p.published ? "opacity-55" : ""
                    }`}
                  >
                    <span className="font-display mt-0.5 shrink-0 text-sm text-emerald-400/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-white">
                        {p.title}
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${badge.cls}`}>
                          {badge.label}
                        </span>
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-50/40">
                        <CalendarClock className="h-3 w-3" />
                        {new Date(p.date).toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                        {p.state === "SCHEDULED" && " — tayang otomatis"}
                        {" · "}
                        /blog/{p.slug}
                      </p>
                      {p.excerpt && <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-emerald-50/45">{p.excerpt}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        onClick={() => togglePublish(p)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/20 text-emerald-100/70 transition-colors hover:border-emerald-300/50 hover:text-white"
                        aria-label={p.published ? "Jadikan draf" : "Loloskan tayang"}
                      >
                        {p.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => startEdit(p)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/20 text-emerald-100/70 transition-colors hover:border-gold/50 hover:text-gold"
                        aria-label="Edit artikel ini"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => remove(p)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-400/20 text-red-300/80 transition-colors hover:border-red-400/50 hover:text-red-300"
                        aria-label="Hapus artikel ini"
                      >
                        {removingId === p.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </AdminCard>
    </div>
  );
}
