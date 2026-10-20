"use client";

/**
 * Tab Penawaran Panel Admin (agen 6-e) — daftar proposal + ubah status.
 * Detail dialog ada di admin-proposal-detail.tsx.
 */

import { useState } from "react";
import { Eye, FileSpreadsheet, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { fmtRp } from "@/lib/digiman-data";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  adminJson,
  fmtDateID,
  handleAdminError,
  listOf,
  PROPOSAL_STATUSES,
  statusMeta,
  useAdminData,
} from "./admin-helpers";
import { ConfirmDeleteDialog, ErrorBar } from "./admin-ui";
import AdminProposalDetail from "./admin-proposal-detail";
import type { Proposal } from "./admin-proposal-types";

function StatusChip({ status }: { status: string }) {
  const meta = statusMeta(status);
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${meta.chip}`}
    >
      {meta.label}
    </span>
  );
}

export default function AdminProposals({
  onUnauthorized,
}: {
  onUnauthorized: () => void;
}) {
  const {
    data: raw,
    loading,
    error,
    reload,
  } = useAdminData<unknown>("/api/admin/proposals", onUnauthorized);
  const proposals = listOf<Proposal>(raw);

  const [busyId, setBusyId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Proposal | null>(null);
  const [toDelete, setToDelete] = useState<Proposal | null>(null);

  const changeStatus = async (p: Proposal, status: string) => {
    if (status === p.status) return;
    setBusyId(p.id);
    try {
      await adminJson(`/api/admin/proposals?id=${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      toast({
        title: "Status diperbarui.",
        description: `${p.code} → ${statusMeta(status).label}.`,
      });
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal mengubah status.");
    } finally {
      setBusyId(null);
    }
  };

  const remove = async () => {
    if (!toDelete) return;
    setBusyId(toDelete.id);
    try {
      await adminJson(`/api/admin/proposals?id=${toDelete.id}`, {
        method: "DELETE",
      });
      toast({
        title: "Penawaran dihapus.",
        description: `${toDelete.code} telah dihapus permanen.`,
      });
      setToDelete(null);
      setDetail(null);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal menghapus penawaran.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-emerald-50/60">
          {proposals.length > 0
            ? `${proposals.length} penawaran`
            : "Daftar penawaran klien"}
        </p>
      </div>

      {error && <ErrorBar error={error} onRetry={reload} />}

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl bg-emerald-400/5" />
          ))}
        </div>
      ) : proposals.length === 0 ? (
        <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
          <FileSpreadsheet className="h-8 w-8 text-emerald-50/30" aria-hidden="true" />
          <p className="text-sm text-emerald-50/55">
            Belum ada penawaran. Buat lewat Proposal Studio di situs.
          </p>
        </div>
      ) : (
        <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
          <ul className="space-y-3">
            {proposals.map((p) => (
              <li key={p.id} className="glass card-glow rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-bold text-gold">
                        {p.code}
                      </span>
                      <StatusChip status={p.status} />
                    </div>
                    <p className="mt-1 truncate font-semibold text-white">
                      {p.clientName}
                      {p.clientCompany ? (
                        <span className="font-normal text-emerald-50/50">
                          {" "}
                          — {p.clientCompany}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-50/50">
                      Paket {p.packageCode} · {fmtDateID(p.createdAt)}
                      {p.durationWeeks ? ` · ${p.durationWeeks}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-lg font-bold text-white">
                      {fmtRp(p.total)}
                    </span>
                    <Select
                      value={p.status}
                      onValueChange={(v) => changeStatus(p, v)}
                    >
                      <SelectTrigger
                        aria-label={`Ubah status penawaran ${p.code}`}
                        disabled={busyId === p.id}
                        className="h-8 w-[140px] rounded-lg border-emerald-400/25 bg-white/[0.03] text-xs text-white"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-strong border-emerald-400/25 text-emerald-50">
                        {PROPOSAL_STATUSES.map((st) => (
                          <SelectItem key={st} value={st}>
                            {statusMeta(st).label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Lihat detail ${p.code}`}
                      onClick={() => setDetail(p)}
                      className="h-9 w-9 text-emerald-50/55 hover:bg-emerald-400/10 hover:text-white"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Hapus penawaran ${p.code}`}
                      onClick={() => setToDelete(p)}
                      className="h-9 w-9 text-red-300/80 hover:bg-red-400/10 hover:text-red-200"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* dialog detail */}
      <AdminProposalDetail detail={detail} onOpenChange={(o) => !o && setDetail(null)} />

      {/* konfirmasi hapus */}
      <ConfirmDeleteDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
        title={`Hapus penawaran ${toDelete?.code ?? ""}?`}
        description={
          <>
            Penawaran untuk{" "}
            <strong className="text-white">{toDelete?.clientName}</strong> akan
            dihapus permanen.
          </>
        }
        busy={busyId === toDelete?.id}
        onConfirm={remove}
      />
    </div>
  );
}
