"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ClientFormErrors, ClientFormState } from "./types";

/* ────────────────────────────────────────────────────────────
   Langkah 1 — Data Klien (gaya form contact.tsx, validasi inline)
   ──────────────────────────────────────────────────────────── */

const errCls = (has: boolean) =>
  has
    ? "border-red-400/60 focus-visible:border-red-400 focus-visible:ring-red-400/20"
    : "border-emerald-400/20 focus-visible:border-gold/50 focus-visible:ring-gold/20";

export default function ClientStep({
  form,
  errors,
  onChange,
}: {
  form: ClientFormState;
  errors: ClientFormErrors;
  onChange: (key: keyof ClientFormState, value: string) => void;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Nama */}
      <div>
        <label
          htmlFor="prop-nama"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          Nama Lengkap <span className="text-gold">*</span>
        </label>
        <Input
          id="prop-nama"
          value={form.clientName}
          onChange={(e) => onChange("clientName", e.target.value)}
          placeholder="Nama pemilik klien"
          autoComplete="name"
          aria-invalid={!!errors.clientName}
          aria-describedby={errors.clientName ? "prop-nama-error" : undefined}
          className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.clientName)}`}
        />
        {errors.clientName && (
          <p id="prop-nama-error" className="mt-1.5 text-xs text-red-400">
            {errors.clientName}
          </p>
        )}
      </div>

      {/* Perusahaan */}
      <div>
        <label
          htmlFor="prop-perusahaan"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          Nama Perusahaan / Instansi
        </label>
        <Input
          id="prop-perusahaan"
          value={form.clientCompany}
          onChange={(e) => onChange("clientCompany", e.target.value)}
          placeholder="PT Contoh Sukses (opsional)"
          autoComplete="organization"
          className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(false)}`}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="prop-email"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          Email <span className="text-gold">*</span>
        </label>
        <Input
          id="prop-email"
          type="email"
          value={form.clientEmail}
          onChange={(e) => onChange("clientEmail", e.target.value)}
          placeholder="nama@perusahaan.com"
          autoComplete="email"
          aria-invalid={!!errors.clientEmail}
          aria-describedby={errors.clientEmail ? "prop-email-error" : undefined}
          className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.clientEmail)}`}
        />
        {errors.clientEmail && (
          <p id="prop-email-error" className="mt-1.5 text-xs text-red-400">
            {errors.clientEmail}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label
          htmlFor="prop-wa"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          No. WhatsApp <span className="text-gold">*</span>
        </label>
        <Input
          id="prop-wa"
          type="tel"
          inputMode="tel"
          value={form.clientWa}
          onChange={(e) => onChange("clientWa", e.target.value)}
          placeholder="628xxxxxxxxxx"
          autoComplete="tel"
          aria-invalid={!!errors.clientWa}
          aria-describedby={errors.clientWa ? "prop-wa-error" : "prop-wa-hint"}
          className={`h-11 rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(!!errors.clientWa)}`}
        />
        {errors.clientWa ? (
          <p id="prop-wa-error" className="mt-1.5 text-xs text-red-400">
            {errors.clientWa}
          </p>
        ) : (
          <p id="prop-wa-hint" className="mt-1.5 text-xs text-emerald-50/40">
            Gunakan awalan +62 / 62 / 08 — contoh: 6281333397223
          </p>
        )}
      </div>

      {/* Catatan */}
      <div className="md:col-span-2">
        <label
          htmlFor="prop-catatan"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
        >
          Catatan untuk Tim (opsional)
        </label>
        <Textarea
          id="prop-catatan"
          rows={4}
          value={form.notes}
          onChange={(e) => onChange("notes", e.target.value)}
          placeholder="Konteks bisnis, tenggat, atau kebutuhan khusus klien..."
          className={`min-h-[96px] rounded-xl bg-white/[0.03] text-white placeholder:text-emerald-50/30 ${errCls(false)}`}
        />
      </div>
    </div>
  );
}
