"use client";

/**
 * Definisi resource + field input untuk CRUD konten (agen 6-e).
 * Dipisah dari admin-content.tsx agar tiap file tetap ringkas.
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SERVICE_CATEGORIES } from "@/lib/digiman-data";
import { parseJsonArray } from "./admin-helpers";

export type Row = Record<string, unknown> & { id: string };
export type FieldType =
  | "text"
  | "textarea"
  | "lines"
  | "number"
  | "switch"
  | "rating";
export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  hint?: string;
  wide?: boolean;
  options?: string[];
};
export type Badge = { label: string; tone: "gold" | "emerald" | "muted" | "red" };
export type Summary = {
  title: string;
  subtitle?: string;
  body?: string;
  trailing?: string;
  badges?: Badge[];
};

export type Config = {
  endpoint: string;
  noun: string;
  addLabel: string;
  fields: FieldDef[];
  defaults: Record<string, unknown>;
  summarize: (row: Row) => Summary;
};

const CATEGORY_LABELS = SERVICE_CATEGORIES.filter((c) => c.key !== "semua").map(
  (c) => c.label,
);

export const CONFIGS: Record<"services" | "testimonials" | "faqs", Config> = {
  services: {
    endpoint: "/api/admin/services",
    noun: "Layanan",
    addLabel: "Layanan Baru",
    defaults: {
      title: "",
      desc: "",
      price: "",
      icon: "Sparkles",
      category: "",
      features: "",
      featured: false,
      visible: true,
      order: 0,
    },
    fields: [
      { key: "title", label: "Judul Layanan", type: "text", wide: true, placeholder: "cth: Pendirian PT" },
      { key: "category", label: "Kategori", type: "text", options: CATEGORY_LABELS, placeholder: "cth: Pendirian Badan Usaha" },
      { key: "price", label: "Harga (teks)", type: "text", placeholder: "cth: Mulai Rp 2,5 jt" },
      { key: "icon", label: "Ikon (lucide)", type: "text", hint: "Nama ikon lucide-react, cth: Building2, Rocket" },
      { key: "desc", label: "Deskripsi", type: "textarea", wide: true, placeholder: "1–2 kalimat deskripsi layanan" },
      { key: "features", label: "Fitur (satu per baris)", type: "lines", wide: true, hint: "Setiap baris menjadi satu poin fitur" },
      { key: "featured", label: "Favorit (ditandai emas)", type: "switch" },
      { key: "visible", label: "Tampilkan di situs", type: "switch" },
      { key: "order", label: "Urutan", type: "number" },
    ],
    summarize: (r) => ({
      title: String(r.title ?? ""),
      subtitle: String(r.category ?? ""),
      body: String(r.desc ?? ""),
      trailing: String(r.price ?? ""),
      badges: [
        ...(r.featured ? [{ label: "Favorit", tone: "gold" as const }] : []),
        r.visible
          ? { label: "Tampil", tone: "emerald" as const }
          : { label: "Tersembunyi", tone: "red" as const },
      ],
    }),
  },
  testimonials: {
    endpoint: "/api/admin/testimonials",
    noun: "Testimoni",
    addLabel: "Testimoni Baru",
    defaults: { name: "", role: "", text: "", rating: 5, visible: true, order: 0 },
    fields: [
      { key: "name", label: "Nama Klien", type: "text", placeholder: "cth: Budi Santoso" },
      { key: "role", label: "Jabatan / Perusahaan", type: "text", placeholder: "cth: CEO, Kopi Nusantara" },
      { key: "text", label: "Isi Testimoni", type: "textarea", wide: true },
      { key: "rating", label: "Rating", type: "rating" },
      { key: "visible", label: "Tampilkan di situs", type: "switch" },
      { key: "order", label: "Urutan", type: "number" },
    ],
    summarize: (r) => ({
      title: String(r.name ?? ""),
      subtitle: String(r.role ?? ""),
      body: String(r.text ?? ""),
      trailing: "★".repeat(Math.min(5, Math.max(1, Number(r.rating) || 5))),
      badges: [
        r.visible
          ? { label: "Tampil", tone: "emerald" as const }
          : { label: "Tersembunyi", tone: "red" as const },
      ],
    }),
  },
  faqs: {
    endpoint: "/api/admin/faqs",
    noun: "FAQ",
    addLabel: "FAQ Baru",
    defaults: { question: "", answer: "", visible: true, order: 0 },
    fields: [
      { key: "question", label: "Pertanyaan", type: "text", wide: true, placeholder: "cth: Berapa lama proses pendirian PT?" },
      { key: "answer", label: "Jawaban", type: "textarea", wide: true },
      { key: "visible", label: "Tampilkan di situs", type: "switch" },
      { key: "order", label: "Urutan", type: "number" },
    ],
    summarize: (r) => ({
      title: String(r.question ?? ""),
      body: String(r.answer ?? ""),
      badges: [
        r.visible
          ? { label: "Tampil", tone: "emerald" as const }
          : { label: "Tersembunyi", tone: "red" as const },
      ],
    }),
  },
};

export const BADGE_TONE: Record<Badge["tone"], string> = {
  gold: "border-gold/40 bg-gold/10 text-gold",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  muted: "border-emerald-400/20 bg-white/[0.03] text-emerald-50/60",
  red: "border-red-400/30 bg-red-400/10 text-red-300",
};

/** Satu field editor generik — dipakai dialog AdminContent. */
export function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  const id = `adminf-${field.key}`;

  if (field.type === "switch") {
    return (
      <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-emerald-400/15">
        <Label htmlFor={id} className="text-sm text-emerald-50/85">
          {field.label}
        </Label>
        <Switch id={id} checked={Boolean(value)} onCheckedChange={onChange} />
      </div>
    );
  }

  if (field.type === "textarea" || field.type === "lines") {
    return (
      <div className={field.wide ? "sm:col-span-2" : undefined}>
        <Label
          htmlFor={id}
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          {field.label}
        </Label>
        <Textarea
          id={id}
          rows={field.type === "lines" ? 4 : 3}
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className="rounded-xl border-emerald-400/20 bg-white/[0.03] text-white placeholder:text-emerald-50/30"
        />
        {field.hint && (
          <p className="mt-1 text-xs text-emerald-50/40">{field.hint}</p>
        )}
      </div>
    );
  }

  if (field.type === "number" || field.type === "rating") {
    return (
      <div>
        <Label
          htmlFor={id}
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          {field.label}
        </Label>
        <Input
          id={id}
          type="number"
          min={field.type === "rating" ? 1 : 0}
          max={field.type === "rating" ? 5 : undefined}
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white"
        />
        {field.type === "rating" && (
          <p className="mt-1 text-sm text-gold" aria-hidden="true">
            {"★".repeat(Math.min(5, Math.max(1, Number(value) || 5)))}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={field.wide ? "sm:col-span-2" : undefined}>
      <Label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
      >
        {field.label}
      </Label>
      <Input
        id={id}
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        list={field.options ? `adminf-dl-${field.key}` : undefined}
        className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white placeholder:text-emerald-50/30"
      />
      {field.options && (
        <datalist id={`adminf-dl-${field.key}`}>
          {field.options.map((o) => (
            <option key={o} value={o} />
          ))}
        </datalist>
      )}
      {field.hint && (
        <p className="mt-1 text-xs text-emerald-50/40">{field.hint}</p>
      )}
    </div>
  );
}

/** Parse field JSON-string / array → array of string (untuk mode lines). */
export function toLines(v: unknown): string {
  if (Array.isArray(v)) return v.map(String).join("\n");
  return parseJsonArray(v).join("\n");
}
