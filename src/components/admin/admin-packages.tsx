"use client";

import { useState } from "react";
import {
  Clock,
  FileText,
  Highlighter,
  Loader2,
  Package as PackageIcon,
  Pencil,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { fmtRp } from "@/lib/digiman-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
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
  parseJsonArray,
  useAdminData,
} from "./admin-helpers";

type PackageRow = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  docCount: number;
  price: number;
  durationWeeks: string;
  features: unknown;
  documentCodes: unknown;
  highlight: boolean;
  active: boolean;
  order: number;
};

type PkgForm = {
  name: string;
  tagline: string;
  description: string;
  price: string;
  durationWeeks: string;
  features: string;
  highlight: boolean;
  active: boolean;
  order: string;
};

const toForm = (p: PackageRow): PkgForm => ({
  name: p.name,
  tagline: p.tagline,
  description: p.description,
  price: String(p.price),
  durationWeeks: p.durationWeeks,
  features: parseJsonArray(p.features).join("\n"),
  highlight: p.highlight,
  active: p.active,
  order: String(p.order ?? 0),
});

export default function AdminPackages({
  onUnauthorized,
}: {
  onUnauthorized: () => void;
}) {
  const { data: packages, loading, error, reload } = useAdminData<PackageRow[]>(
    "/api/admin/packages",
    onUnauthorized,
  );

  const [editTarget, setEditTarget] = useState<PackageRow | null>(null);
  const [docsTarget, setDocsTarget] = useState<PackageRow | null>(null);
  const [form, setForm] = useState<PkgForm | null>(null);
  const [saving, setSaving] = useState(false);

  const openEdit = (p: PackageRow) => {
    setEditTarget(p);
    setForm(toForm(p));
  };

  const set = (key: keyof PkgForm) => (value: string | boolean) =>
    setForm((f) => (f ? { ...f, [key]: value } : f));

  const save = async () => {
    if (!editTarget || !form || saving) return;
    setSaving(true);
    try {
      await adminJson(`/api/admin/packages?id=${editTarget.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          tagline: form.tagline.trim(),
          description: form.description.trim(),
          price: Math.max(0, Number(form.price) || 0),
          durationWeeks: form.durationWeeks.trim(),
          features: form.features
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean),
          highlight: form.highlight,
          active: form.active,
          order: Math.max(0, Number(form.order) || 0),
        }),
      });
      toast({
        title: "Paket diperbarui.",
        description: `${editTarget.code} — ${form.name.trim()}`,
      });
      setEditTarget(null);
      setForm(null);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal memperbarui paket.");
    } finally {
      setSaving(false);
    }
  };

  const docCodes = docsTarget ? parseJsonArray(docsTarget.documentCodes) : [];

  return (
    <div className="space-y-4">
      <p className="text-sm text-emerald-50/60">
        5 paket standar Gunara OS — harga & konten bisa disesuaikan; kode
        dokumen dikelola lewat seed.
      </p>

      {error && (
        <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl border-red-400/30 p-4">
          <p className="text-sm text-red-300">{error}</p>
          <Button
            size="sm"
            variant="outline"
            onClick={reload}
            className="border-emerald-400/30"
          >
            Coba Lagi
          </Button>
        </div>
      )}

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-2xl bg-emerald-400/5" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(packages ?? []).map((p) => (
            <article
              key={p.id}
              className={`glass card-glow flex flex-col rounded-2xl p-6 ${
                p.highlight ? "ring-1 ring-gold/40" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display rounded-lg border border-gold/40 bg-gold/10 px-2.5 py-1 text-xs font-bold text-gold">
                  {p.code}
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40">
                      <Highlighter className="h-3 w-3" aria-hidden="true" />
                      Unggulan
                    </span>
                  )}
                  {!p.active && (
                    <span className="rounded-full border border-red-400/30 bg-red-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300">
                      Nonaktif
                    </span>
                  )}
                </div>
              </div>

              <h3
                className={`font-display mt-4 text-lg font-bold ${
                  p.highlight ? "gradient-text-gold" : "text-white"
                }`}
              >
                {p.name}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-sm text-emerald-50/55">
                {p.tagline}
              </p>

              <p className="font-display mt-4 text-2xl font-bold text-white">
                {fmtRp(p.price)}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-emerald-50/50">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-emerald-bright" aria-hidden="true" />
                  {p.docCount} dokumen
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-bright" aria-hidden="true" />
                  {p.durationWeeks} minggu
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PackageIcon className="h-3.5 w-3.5 text-emerald-bright" aria-hidden="true" />
                  {parseJsonArray(p.features).length} fitur
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2 pt-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openEdit(p)}
                  className="flex-1 border-gold/40 bg-gold/5 text-gold hover:bg-gold/15 hover:text-gold"
                >
                  <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setDocsTarget(p)}
                  aria-label={`Lihat daftar ${p.docCount} dokumen paket ${p.code}`}
                  className="flex-1 border border-emerald-400/25 text-emerald-50/70 hover:bg-emerald-400/10 hover:text-white"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Dokumen
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* dialog edit paket */}
      <Dialog
        open={!!editTarget && !!form}
        onOpenChange={(o) => {
          if (!o) {
            setEditTarget(null);
            setForm(null);
          }
        }}
      >
        <DialogContent className="glass-strong max-h-[85vh] max-w-2xl overflow-y-auto border-emerald-400/25">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-white">
              Edit Paket{" "}
              <span className="text-gold">{editTarget?.code}</span>
            </DialogTitle>
            <DialogDescription className="text-emerald-50/55">
              Kode dokumen ({editTarget?.docCount} dokumen) tidak dapat diubah
              di sini — dikelola lewat seed Gunara OS.
            </DialogDescription>
          </DialogHeader>

          {form && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="pkg-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Nama Paket
                </Label>
                <Input id="pkg-name" value={form.name} onChange={(e) => set("name")(e.target.value)} className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div>
                <Label htmlFor="pkg-duration" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Durasi (minggu)
                </Label>
                <Input id="pkg-duration" value={form.durationWeeks} onChange={(e) => set("durationWeeks")(e.target.value)} placeholder="cth: 6–8" className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="pkg-tagline" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Tagline
                </Label>
                <Input id="pkg-tagline" value={form.tagline} onChange={(e) => set("tagline")(e.target.value)} className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="pkg-desc" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Deskripsi
                </Label>
                <Textarea id="pkg-desc" rows={3} value={form.description} onChange={(e) => set("description")(e.target.value)} className="rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div>
                <Label htmlFor="pkg-price" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Harga (Rp)
                </Label>
                <Input id="pkg-price" type="number" min={0} value={form.price} onChange={(e) => set("price")(e.target.value)} className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div>
                <Label htmlFor="pkg-order" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Urutan
                </Label>
                <Input id="pkg-order" type="number" min={0} value={form.order} onChange={(e) => set("order")(e.target.value)} className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="pkg-features" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60">
                  Fitur (satu per baris)
                </Label>
                <Textarea id="pkg-features" rows={5} value={form.features} onChange={(e) => set("features")(e.target.value)} className="rounded-xl border-emerald-400/20 bg-white/[0.03] text-white" />
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-emerald-400/15">
                <Label htmlFor="pkg-highlight" className="text-sm text-emerald-50/85">
                  Paket unggulan
                </Label>
                <Switch id="pkg-highlight" checked={form.highlight} onCheckedChange={(c) => set("highlight")(c)} />
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-emerald-400/15">
                <Label htmlFor="pkg-active" className="text-sm text-emerald-50/85">
                  Paket aktif
                </Label>
                <Switch id="pkg-active" checked={form.active} onCheckedChange={(c) => set("active")(c)} />
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setEditTarget(null);
                setForm(null);
              }}
              className="border-emerald-400/25 bg-transparent hover:bg-white/5"
            >
              Batal
            </Button>
            <Button
              onClick={save}
              disabled={saving}
              className="min-w-32 bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* dialog dokumen (read-only) */}
      <Dialog
        open={!!docsTarget}
        onOpenChange={(o) => !o && setDocsTarget(null)}
      >
        <DialogContent className="glass-strong max-h-[85vh] max-w-xl overflow-y-auto border-emerald-400/25">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-white">
              {docsTarget?.code} — {docsTarget?.name}
            </DialogTitle>
            <DialogDescription className="text-emerald-50/55">
              {docsTarget?.docCount} dokumen PGA terkurasi dalam paket ini.
            </DialogDescription>
          </DialogHeader>
          <div className="flex max-h-[50vh] flex-wrap gap-1.5 overflow-y-auto pr-1">
            {docCodes.map((c) => (
              <span
                key={c}
                className="rounded-md border border-emerald-400/25 bg-emerald-400/5 px-2 py-0.5 font-mono text-[11px] text-emerald-200/85"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-emerald-50/40">
            Daftar kode dokumen bersifat read-only — hanya diubah lewat seed
            Gunara OS.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
