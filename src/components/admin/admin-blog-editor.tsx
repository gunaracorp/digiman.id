"use client";

/**
 * Dialog editor artikel blog (agen 6-e) — dipisah dari admin-blog.tsx
 * agar tiap file tetap ringkas. State form dimiliki parent.
 */

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { slugify } from "./admin-helpers";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: unknown;
  readMinutes: number;
  views: number;
  published: boolean;
  publishedAt?: string | null;
  /** Hanya ada pada GET ?id= (detail) — list tidak menyertakannya. */
  content?: string;
  createdAt: string;
};

export type BlogForm = {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  readMinutes: string;
  published: boolean;
};

export const EMPTY_BLOG_FORM: BlogForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  tags: "",
  readMinutes: "5",
  published: true,
};

const CATEGORIES = ["Gunara OS", "Legalitas", "Digital", "Studi Kasus", "Panduan"];

const LABEL_CLS =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60";
const INPUT_CLS =
  "h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white placeholder:text-emerald-50/30";

export default function AdminBlogEditor({
  open,
  onOpenChange,
  editing,
  form,
  onField,
  saving,
  formError,
  onSave,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editing: BlogPost | null;
  form: BlogForm;
  onField: (key: keyof BlogForm, value: string | boolean) => void;
  saving: boolean;
  formError: string | null;
  onSave: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong max-h-[85vh] max-w-3xl overflow-y-auto border-emerald-400/25">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-white">
            {editing ? "Edit Artikel" : "Artikel Baru"}
          </DialogTitle>
          <DialogDescription className="text-emerald-50/55">
            Konten ditulis dalam Markdown. Slug:{" "}
            <span className="font-mono text-gold/90">
              /{editing ? editing.slug : slugify(form.title) || "otomatis-dari-judul"}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div>
            <Label htmlFor="blog-title" className={LABEL_CLS}>
              Judul <span className="text-gold">*</span>
            </Label>
            <Input
              id="blog-title"
              value={form.title}
              onChange={(e) => onField("title", e.target.value)}
              placeholder="cth: Panduan Gunara OS untuk UMKM"
              className={INPUT_CLS}
            />
          </div>
          <div>
            <Label htmlFor="blog-excerpt" className={LABEL_CLS}>
              Ringkasan
            </Label>
            <Textarea
              id="blog-excerpt"
              rows={2}
              value={form.excerpt}
              onChange={(e) => onField("excerpt", e.target.value)}
              placeholder="1–2 kalimat yang tampil di daftar artikel"
              className="rounded-xl border-emerald-400/20 bg-white/[0.03] text-white placeholder:text-emerald-50/30"
            />
          </div>
          <div>
            <Label htmlFor="blog-content" className={LABEL_CLS}>
              Konten <span className="text-gold">*</span>
            </Label>
            <Textarea
              id="blog-content"
              rows={14}
              value={form.content}
              onChange={(e) => onField("content", e.target.value)}
              placeholder={"## Sub-judul\n\nTulis artikel di sini…"}
              className="rounded-xl border-emerald-400/20 bg-white/[0.03] font-mono text-xs leading-relaxed text-white placeholder:text-emerald-50/30"
            />
            <p className="mt-1 text-xs text-emerald-50/40">
              Markdown didukung: <code>## Judul</code>, <code>**tebal**</code>,{" "}
              <code>- daftar</code>, <code>&gt; kutipan</code>
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="blog-category" className={LABEL_CLS}>
                Kategori
              </Label>
              <Input
                id="blog-category"
                list="admin-blog-categories"
                value={form.category}
                onChange={(e) => onField("category", e.target.value)}
                placeholder="Pilih atau tulis sendiri"
                className={INPUT_CLS}
              />
              <datalist id="admin-blog-categories">
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <Label htmlFor="blog-tags" className={LABEL_CLS}>
                Tag (pisahkan koma)
              </Label>
              <Input
                id="blog-tags"
                value={form.tags}
                onChange={(e) => onField("tags", e.target.value)}
                placeholder="cth: pt, perizinan, umkm"
                className={INPUT_CLS}
              />
            </div>
            <div>
              <Label htmlFor="blog-read" className={LABEL_CLS}>
                Durasi Baca (menit)
              </Label>
              <Input
                id="blog-read"
                type="number"
                min={1}
                value={form.readMinutes}
                onChange={(e) => onField("readMinutes", e.target.value)}
                className={INPUT_CLS}
              />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-emerald-400/15">
              <Label htmlFor="blog-published" className="text-sm text-emerald-50/85">
                Tayangkan artikel
              </Label>
              <Switch
                id="blog-published"
                checked={form.published}
                onCheckedChange={(c) => onField("published", c)}
              />
            </div>
          </div>

          {formError && (
            <p role="alert" className="text-sm text-red-400">
              {formError}
            </p>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-emerald-400/25 bg-transparent hover:bg-white/5"
          >
            Batal
          </Button>
          <Button
            onClick={onSave}
            disabled={saving}
            className="min-w-36 bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
          >
            {saving && (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            )}
            Simpan Artikel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
