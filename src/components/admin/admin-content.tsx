"use client";

/**
 * CRUD konten generik (agen 6-e): Layanan, Testimoni, FAQ.
 * Definisi resource & field ada di admin-content-parts.tsx.
 */

import { useState } from "react";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  adminJson,
  handleAdminError,
  useAdminData,
} from "./admin-helpers";
import { ConfirmDeleteDialog, ErrorBar } from "./admin-ui";
import {
  BADGE_TONE,
  CONFIGS,
  FieldInput,
  toLines,
  type Badge,
  type Config,
  type Row,
  type Summary,
} from "./admin-content-parts";

export function AdminContent({
  resource,
  onUnauthorized,
}: {
  resource: "services" | "testimonials" | "faqs";
  onUnauthorized: () => void;
}) {
  const cfg: Config = CONFIGS[resource];
  const { data: rows, loading, error, reload } = useAdminData<Row[]>(
    cfg.endpoint,
    onUnauthorized,
  );

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Row | null>(null);
  const [form, setForm] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<Row | null>(null);
  const [busyDelete, setBusyDelete] = useState(false);

  const openNew = () => {
    setEditing(null);
    setForm({ ...cfg.defaults });
    setOpen(true);
  };

  const openEdit = (row: Row) => {
    const f: Record<string, unknown> = {};
    for (const fd of cfg.fields) {
      const v = row[fd.key];
      if (fd.type === "lines") f[fd.key] = toLines(v);
      else if (fd.type === "switch") f[fd.key] = Boolean(v);
      else f[fd.key] = String(v ?? "");
    }
    setEditing(row);
    setForm(f);
    setOpen(true);
  };

  const save = async () => {
    if (saving) return;
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {};
      for (const fd of cfg.fields) {
        const v = form[fd.key];
        if (fd.type === "lines")
          payload[fd.key] = String(v ?? "")
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
        else if (fd.type === "switch") payload[fd.key] = Boolean(v);
        else if (fd.type === "number")
          payload[fd.key] = Math.max(0, Number(v) || 0);
        else if (fd.type === "rating")
          payload[fd.key] = Math.min(5, Math.max(1, Number(v) || 5));
        else payload[fd.key] = String(v ?? "").trim();
      }
      if (editing) {
        await adminJson(`${cfg.endpoint}?id=${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await adminJson(cfg.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      toast({
        title: editing ? `${cfg.noun} diperbarui.` : `${cfg.noun} ditambahkan.`,
        description: String(payload[cfg.fields[0].key] ?? ""),
      });
      setOpen(false);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, `Gagal menyimpan ${cfg.noun.toLowerCase()}.`);
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!deleting) return;
    setBusyDelete(true);
    try {
      await adminJson(`${cfg.endpoint}?id=${deleting.id}`, { method: "DELETE" });
      toast({ title: `${cfg.noun} dihapus.` });
      setDeleting(null);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, `Gagal menghapus ${cfg.noun.toLowerCase()}.`);
    } finally {
      setBusyDelete(false);
    }
  };

  const summaryOf = (row: Row): Summary => {
    const s = cfg.summarize(row);
    return { ...s, badges: (s.badges ?? []).filter((b: Badge) => b.label) };
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-emerald-50/60">
          {rows && rows.length > 0
            ? `${rows.length} ${cfg.noun.toLowerCase()}`
            : `Kelola ${cfg.noun.toLowerCase()} situs`}
        </p>
        <Button
          onClick={openNew}
          className="shimmer-btn bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          {cfg.addLabel}
        </Button>
      </div>

      {error && <ErrorBar error={error} onRetry={reload} />}

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl bg-emerald-400/5" />
          ))}
        </div>
      ) : !rows || rows.length === 0 ? (
        <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
          <p className="text-sm text-emerald-50/55">
            Belum ada data. Klik “{cfg.addLabel}” untuk menambah.
          </p>
        </div>
      ) : (
        <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
          <ul className="space-y-3">
            {rows.map((row) => {
              const s = summaryOf(row);
              return (
                <li key={row.id} className="glass card-glow rounded-xl p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-white">{s.title}</p>
                        {s.badges?.map((b, i) => (
                          <span
                            key={i}
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${BADGE_TONE[b.tone]}`}
                          >
                            {b.label}
                          </span>
                        ))}
                      </div>
                      {s.subtitle && (
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-emerald-50/45">
                          {s.subtitle}
                        </p>
                      )}
                      {s.body && (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-emerald-50/70">
                          {s.body}
                        </p>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {s.trailing && (
                        <span className="text-sm font-bold text-gold">
                          {s.trailing}
                        </span>
                      )}
                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label={`Edit ${cfg.noun.toLowerCase()} — ${s.title}`}
                        onClick={() => openEdit(row)}
                        className="h-9 w-9 text-emerald-200/80 hover:bg-emerald-400/10 hover:text-white"
                      >
                        <Pencil className="h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label={`Hapus ${cfg.noun.toLowerCase()} — ${s.title}`}
                        onClick={() => setDeleting(row)}
                        className="h-9 w-9 text-red-300/80 hover:bg-red-400/10 hover:text-red-200"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* dialog editor */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="glass-strong max-h-[85vh] max-w-2xl overflow-y-auto border-emerald-400/25">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-white">
              {editing ? `Edit ${cfg.noun}` : cfg.addLabel}
            </DialogTitle>
            <DialogDescription className="text-emerald-50/55">
              Perubahan langsung tampil di situs setelah disimpan.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 sm:grid-cols-2">
            {cfg.fields.map((fd) => (
              <FieldInput
                key={fd.key}
                field={fd}
                value={form[fd.key]}
                onChange={(v) => setForm((f) => ({ ...f, [fd.key]: v }))}
              />
            ))}
          </div>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-emerald-400/25 bg-transparent hover:bg-white/5"
            >
              Batal
            </Button>
            <Button
              onClick={save}
              disabled={saving}
              className="min-w-32 bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
            >
              {saving && (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              )}
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* konfirmasi hapus */}
      <ConfirmDeleteDialog
        open={!!deleting}
        onOpenChange={(o) => !o && setDeleting(null)}
        title={`Hapus ${cfg.noun.toLowerCase()} ini?`}
        description={
          <>
            “
            <strong className="text-white">
              {deleting ? cfg.summarize(deleting).title : ""}
            </strong>{" "}
            ” akan dihapus permanen dari situs.
          </>
        }
        busy={busyDelete}
        onConfirm={remove}
      />
    </div>
  );
}

export function AdminServices(props: { onUnauthorized: () => void }) {
  return <AdminContent {...props} resource="services" />;
}

export function AdminTestimonials(props: { onUnauthorized: () => void }) {
  return <AdminContent {...props} resource="testimonials" />;
}

export function AdminFaqs(props: { onUnauthorized: () => void }) {
  return <AdminContent {...props} resource="faqs" />;
}
