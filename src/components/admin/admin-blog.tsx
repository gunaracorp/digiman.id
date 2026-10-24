"use client";

/**
 * Tab Blog Panel Admin (agen 6-e) — tabel artikel + editor Markdown.
 * Editor dialog ada di admin-blog-editor.tsx.
 */

import { useState } from "react";
import { Newspaper, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  adminJson,
  fmtDateID,
  handleAdminError,
  listOf,
  parseJsonArray,
  slugify,
  UnauthorizedError,
  useAdminData,
} from "./admin-helpers";
import { ConfirmDeleteDialog, ErrorBar } from "./admin-ui";
import AdminBlogEditor, {
  EMPTY_BLOG_FORM,
  type BlogForm,
  type BlogPost,
} from "./admin-blog-editor";

export default function AdminBlog({
  onUnauthorized,
}: {
  onUnauthorized: () => void;
}) {
  const {
    data: raw,
    loading,
    error,
    reload,
  } = useAdminData<unknown>("/api/admin/blog", onUnauthorized);
  const posts = listOf<BlogPost>(raw);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState<BlogForm>(EMPTY_BLOG_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [toDelete, setToDelete] = useState<BlogPost | null>(null);
  const [busyDelete, setBusyDelete] = useState(false);

  const onField = (key: keyof BlogForm, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const openNew = () => {
    setEditing(null);
    setForm(EMPTY_BLOG_FORM);
    setFormError(null);
    setOpen(true);
  };

  const openEdit = async (post: BlogPost) => {
    setEditing(post);
    setFormError(null);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content ?? "",
      category: post.category,
      tags: parseJsonArray(post.tags).join(", "),
      readMinutes: String(post.readMinutes ?? 5),
      published: Boolean(post.published),
    });
    setOpen(true);

    // List endpoint tidak menyertakan `content` (kontrak /api/admin/blog
    // milik agen 6-c) — ambil detail penuh via GET ?id= secara latar.
    if (typeof post.content !== "string") {
      try {
        const d = await adminJson<{ post: BlogPost }>(
          `/api/admin/blog?id=${post.id}`,
        );
        setForm((f) => ({ ...f, content: d.post.content ?? "" }));
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          onUnauthorized();
          return;
        }
        toast({
          title: "Gagal memuat konten lengkap.",
          description: "Editor tetap terbuka — coba muat ulang bila kosong.",
          variant: "destructive",
        });
      }
    }
  };

  const save = async () => {
    if (saving) return;
    if (form.title.trim().length < 3) {
      setFormError("Judul minimal 3 karakter.");
      return;
    }
    if (form.content.trim().length < 20) {
      setFormError("Konten artikel minimal 20 karakter.");
      return;
    }
    setSaving(true);
    setFormError(null);
    try {
      const payload = {
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        content: form.content,
        category: form.category.trim() || "Gunara OS",
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        readMinutes: Math.max(1, Number(form.readMinutes) || 5),
        published: form.published,
      };
      if (editing) {
        await adminJson(`/api/admin/blog?id=${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await adminJson("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, slug: slugify(form.title) }),
        });
      }
      toast({
        title: editing ? "Artikel diperbarui." : "Artikel dibuat.",
        description: payload.title,
      });
      setOpen(false);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal menyimpan artikel.");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!toDelete) return;
    setBusyDelete(true);
    try {
      await adminJson(`/api/admin/blog?id=${toDelete.id}`, { method: "DELETE" });
      toast({
        title: "Artikel dihapus.",
        description: toDelete.title,
      });
      setToDelete(null);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal menghapus artikel.");
    } finally {
      setBusyDelete(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-emerald-50/60">
          {posts.length > 0
            ? `${posts.length} artikel`
            : "Kelola artikel blog digiman.id"}
        </p>
        <Button
          onClick={openNew}
          className="shimmer-btn bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Artikel Baru
        </Button>
      </div>

      {error && <ErrorBar error={error} onRetry={reload} />}

      {loading ? (
        <Skeleton className="h-72 rounded-2xl bg-emerald-400/5" />
      ) : posts.length === 0 ? (
        <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
          <Newspaper className="h-8 w-8 text-emerald-50/30" aria-hidden="true" />
          <p className="text-sm text-emerald-50/55">
            Belum ada artikel. Klik “Artikel Baru” untuk mulai menulis.
          </p>
        </div>
      ) : (
        <div className="glass max-h-[70vh] overflow-y-auto rounded-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-emerald-400/15 hover:bg-transparent">
                <TableHead className="text-emerald-50/50">Judul</TableHead>
                <TableHead className="text-emerald-50/50">Kategori</TableHead>
                <TableHead className="text-emerald-50/50">Tag</TableHead>
                <TableHead className="text-emerald-50/50">Tayang</TableHead>
                <TableHead className="text-emerald-50/50">Dibuat</TableHead>
                <TableHead className="text-right text-emerald-50/50">
                  Aksi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow
                  key={post.id}
                  className="border-emerald-400/10 hover:bg-white/[0.02]"
                >
                  <TableCell className="max-w-[260px]">
                    <p className="truncate font-medium text-white">
                      {post.title}
                    </p>
                    <p className="truncate text-xs text-emerald-50/40">
                      /{post.slug} · {post.readMinutes} mnt
                    </p>
                  </TableCell>
                  <TableCell>
                    <span className="rounded-full border border-emerald-400/25 px-2 py-0.5 text-[11px] text-emerald-200/80">
                      {post.category}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-[160px]">
                    <p className="truncate text-xs text-emerald-50/50">
                      {parseJsonArray(post.tags).join(", ") || "—"}
                    </p>
                  </TableCell>
                  <TableCell>
                    {post.published ? (
                      <Badge className="border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/10">
                        Ya
                      </Badge>
                    ) : (
                      <Badge className="border-zinc-400/40 bg-zinc-400/10 text-zinc-300 hover:bg-zinc-400/10">
                        Draf
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-emerald-50/50">
                    {fmtDateID(post.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Edit artikel ${post.title}`}
                      onClick={() => openEdit(post)}
                      className="h-8 w-8 text-emerald-200/80 hover:bg-emerald-400/10 hover:text-white"
                    >
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Hapus artikel ${post.title}`}
                      onClick={() => setToDelete(post)}
                      className="h-8 w-8 text-red-300/80 hover:bg-red-400/10 hover:text-red-200"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* editor artikel */}
      <AdminBlogEditor
        open={open}
        onOpenChange={setOpen}
        editing={editing}
        form={form}
        onField={onField}
        saving={saving}
        formError={formError}
        onSave={save}
      />

      {/* konfirmasi hapus */}
      <ConfirmDeleteDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
        title="Hapus artikel ini?"
        description={
          <>
            “<strong className="text-white">{toDelete?.title}</strong>” akan
            dihapus permanen dari blog.
          </>
        }
        busy={busyDelete}
        onConfirm={remove}
      />
    </div>
  );
}
