"use client";

/**
 * Dialog detail penawaran (agen 6-e) — dipisah dari admin-proposals.tsx.
 * Read-only: klien, item, add-ons, dokumen, dan ringkasan harga.
 */

import { fmtRp } from "@/lib/digiman-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fmtDateID, parseJsonLoose, statusMeta, waDigits } from "./admin-helpers";
import type { Proposal } from "./admin-proposal-types";

type LineItem = { label?: string; title?: string; qty?: number; price?: number; amount?: number };
type Addon = { title?: string; name?: string; price?: number };

export default function AdminProposalDetail({
  detail,
  onOpenChange,
}: {
  detail: Proposal | null;
  onOpenChange: (open: boolean) => void;
}) {
  const items = detail ? (parseJsonLoose(detail.items) as LineItem[]) : [];
  const addons = detail ? (parseJsonLoose(detail.addons) as Addon[]) : [];
  const docs = detail ? parseJsonLoose(detail.documentCodes).map(String) : [];

  return (
    <Dialog open={!!detail} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong max-h-[85vh] max-w-2xl overflow-y-auto border-emerald-400/25">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-gold">
            {detail?.code}
          </DialogTitle>
          <DialogDescription className="text-emerald-50/55">
            {detail ? `Dibuat ${fmtDateID(detail.createdAt)}` : ""}
            {detail?.validUntil
              ? ` · berlaku s/d ${fmtDateID(detail.validUntil)}`
              : ""}
          </DialogDescription>
        </DialogHeader>

        {detail && (
          <div className="space-y-4">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl bg-white/[0.03] p-4 text-sm ring-1 ring-emerald-400/15">
              <dt className="text-emerald-50/45">Klien</dt>
              <dd className="text-white">{detail.clientName}</dd>
              <dt className="text-emerald-50/45">Perusahaan</dt>
              <dd className="text-white">{detail.clientCompany || "—"}</dd>
              <dt className="text-emerald-50/45">Email</dt>
              <dd className="truncate text-emerald-50/85">
                {detail.clientEmail || "—"}
              </dd>
              <dt className="text-emerald-50/45">WhatsApp</dt>
              <dd className="text-emerald-50/85">
                {detail.clientWa ? (
                  <a
                    href={`https://wa.me/${waDigits(detail.clientWa)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold"
                  >
                    {detail.clientWa}
                  </a>
                ) : (
                  "—"
                )}
              </dd>
              <dt className="text-emerald-50/45">Paket</dt>
              <dd className="text-white">
                {detail.packageCode}
                {detail.durationWeeks ? ` · ${detail.durationWeeks} minggu` : ""}
              </dd>
              <dt className="text-emerald-50/45">Status</dt>
              <dd>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusMeta(detail.status).chip}`}
                >
                  {statusMeta(detail.status).label}
                </span>
              </dd>
            </dl>

            {items.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-50/45">
                  Rincian Item
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {items.map((it, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-emerald-50/80">
                        {it.label ?? it.title ?? `Item ${i + 1}`}
                        {it.qty ? ` ×${it.qty}` : ""}
                      </span>
                      <span className="shrink-0 font-medium text-white">
                        {fmtRp(Number(it.price ?? it.amount ?? 0))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {addons.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-50/45">
                  Add-ons
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {addons.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-emerald-50/80">
                        {a.title ?? a.name ?? `Add-on ${i + 1}`}
                      </span>
                      <span className="shrink-0 font-medium text-white">
                        {fmtRp(Number(a.price ?? 0))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {docs.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-50/45">
                  Dokumen ({docs.length})
                </h4>
                <div className="mt-2 flex max-h-36 flex-wrap gap-1.5 overflow-y-auto pr-1">
                  {docs.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-emerald-400/25 bg-emerald-400/5 px-2 py-0.5 font-mono text-[11px] text-emerald-200/85"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {detail.notes && (
              <p className="whitespace-pre-wrap rounded-xl bg-white/[0.03] p-3 text-sm text-emerald-50/70 ring-1 ring-emerald-400/15">
                {detail.notes}
              </p>
            )}

            <div className="rounded-xl bg-white/[0.03] p-4 text-sm ring-1 ring-gold/25">
              <div className="flex justify-between text-emerald-50/70">
                <span>Subtotal</span>
                <span>{fmtRp(detail.subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between text-emerald-50/70">
                <span>Diskon</span>
                <span>-{fmtRp(detail.discount)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-gold/20 pt-2 font-display text-base font-bold">
                <span className="text-white">Total</span>
                <span className="gradient-text-gold">{fmtRp(detail.total)}</span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
