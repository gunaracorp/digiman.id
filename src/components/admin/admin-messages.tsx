"use client";

import { useMemo, useState } from "react";
import {
  Check,
  Eye,
  Inbox,
  Mail,
  MessageCircle,
  RotateCcw,
  Trash2,
} from "lucide-react";
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
  fmtDateTimeID,
  handleAdminError,
  useAdminData,
  waDigits,
} from "./admin-helpers";
import { ConfirmDeleteDialog, ErrorBar } from "./admin-ui";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string | null;
  message: string;
  handled: boolean;
  createdAt: string;
};

const FILTERS = [
  { value: "all", label: "Semua" },
  { value: "open", label: "Belum ditangani" },
  { value: "done", label: "Selesai" },
] as const;

export default function AdminMessages({
  onUnauthorized,
}: {
  onUnauthorized: () => void;
}) {
  const [filter, setFilter] = useState<
    (typeof FILTERS)[number]["value"] | "all"
  >("all");
  const url = useMemo(
    () =>
      filter === "all"
        ? "/api/admin/messages"
        : `/api/admin/messages?handled=${filter === "done"}`,
    [filter],
  );
  const { data: messages, loading, error, reload } = useAdminData<Message[]>(
    url,
    onUnauthorized,
  );

  const [busyId, setBusyId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Message | null>(null);
  const [toDelete, setToDelete] = useState<Message | null>(null);

  const toggleHandled = async (m: Message) => {
    setBusyId(m.id);
    try {
      await adminJson(`/api/admin/messages?id=${m.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ handled: !m.handled }),
      });
      toast({
        title: m.handled ? "Ditandai belum ditangani." : "Ditandai selesai.",
        description: `Pesan dari ${m.name}.`,
      });
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal memperbarui pesan.");
    } finally {
      setBusyId(null);
    }
  };

  const remove = async () => {
    if (!toDelete) return;
    setBusyId(toDelete.id);
    try {
      await adminJson(`/api/admin/messages?id=${toDelete.id}`, {
        method: "DELETE",
      });
      toast({
        title: "Pesan dihapus.",
        description: `Pesan dari ${toDelete.name} telah dihapus.`,
      });
      setToDelete(null);
      setDetail(null);
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal menghapus pesan.");
    } finally {
      setBusyId(null);
    }
  };

  const initials = (name: string) =>
    name
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .join("");

  return (
    <div className="space-y-4">
      {/* filter */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              filter === f.value
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-emerald-400/20 bg-white/[0.03] text-emerald-50/60 hover:border-gold/40 hover:text-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
        {messages && (
          <span className="ml-auto text-xs text-emerald-50/45">
            {messages.length} pesan
          </span>
        )}
      </div>

      {error && <ErrorBar error={error} onRetry={reload} />}

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-xl bg-emerald-400/5" />
          ))}
        </div>
      ) : !messages || messages.length === 0 ? (
        <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
          <Inbox className="h-8 w-8 text-emerald-50/30" aria-hidden="true" />
          <p className="text-sm text-emerald-50/55">
            Belum ada pesan pada filter ini.
          </p>
        </div>
      ) : (
        <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
          <ul className="space-y-3">
            {messages.map((m) => (
              <li key={m.id} className="glass card-glow rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-w-0 gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/25 to-gold/25 text-xs font-bold text-white ring-1 ring-emerald-400/30"
                    >
                      {initials(m.name)}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-white">{m.name}</p>
                        {!m.handled && (
                          <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40">
                            Baru
                          </span>
                        )}
                        {m.service && (
                          <span className="rounded-full border border-emerald-400/25 px-2 py-0.5 text-[10px] font-medium text-emerald-200/80">
                            {m.service}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                        <a
                          href={`mailto:${m.email}`}
                          className="inline-flex items-center gap-1.5 text-emerald-50/60 hover:text-gold"
                        >
                          <Mail className="h-3 w-3" aria-hidden="true" />
                          {m.email}
                        </a>
                        <a
                          href={`https://wa.me/${waDigits(m.phone)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-emerald-50/60 hover:text-gold"
                        >
                          <MessageCircle className="h-3 w-3" aria-hidden="true" />
                          {m.phone}
                        </a>
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-emerald-50/75">
                        {m.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <span className="mr-1 text-xs text-emerald-50/40">
                      {fmtDateTimeID(m.createdAt)}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={
                        m.handled
                          ? `Tandai belum ditangani — ${m.name}`
                          : `Tandai sudah ditangani — ${m.name}`
                      }
                      onClick={() => toggleHandled(m)}
                      disabled={busyId === m.id}
                      className={`h-9 w-9 ${
                        m.handled
                          ? "text-emerald-300 hover:bg-emerald-400/10"
                          : "text-emerald-50/55 hover:bg-gold/10 hover:text-gold"
                      }`}
                    >
                      {m.handled ? (
                        <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Check className="h-4 w-4" aria-hidden="true" />
                      )}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Baca pesan lengkap — ${m.name}`}
                      onClick={() => setDetail(m)}
                      className="h-9 w-9 text-emerald-50/55 hover:bg-emerald-400/10 hover:text-white"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Hapus pesan — ${m.name}`}
                      onClick={() => setToDelete(m)}
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

      {/* dialog baca lengkap */}
      <Dialog
        open={!!detail}
        onOpenChange={(open) => !open && setDetail(null)}
      >
        <DialogContent className="glass-strong max-h-[85vh] max-w-xl overflow-y-auto border-emerald-400/25">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-white">
              {detail?.name}
            </DialogTitle>
            <DialogDescription className="text-emerald-50/55">
              {detail?.service ? `${detail.service} · ` : ""}
              {detail ? fmtDateTimeID(detail.createdAt) : ""}
            </DialogDescription>
          </DialogHeader>
          {detail && (
            <>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`mailto:${detail.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-white/[0.03] px-3 py-1.5 text-xs text-emerald-50/75 hover:text-gold"
                >
                  <Mail className="h-3 w-3" aria-hidden="true" />
                  {detail.email}
                </a>
                <a
                  href={`https://wa.me/${waDigits(detail.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-white/[0.03] px-3 py-1.5 text-xs text-emerald-50/75 hover:text-gold"
                >
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  WhatsApp {detail.phone}
                </a>
              </div>
              <p className="whitespace-pre-wrap rounded-xl bg-white/[0.03] p-4 text-sm leading-relaxed text-emerald-50/85 ring-1 ring-emerald-400/15">
                {detail.message}
              </p>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => toggleHandled(detail)}
                  disabled={busyId === detail.id}
                  className="border-emerald-400/30"
                >
                  {detail.handled ? (
                    <>
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Tandai Belum
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Tandai Selesai
                    </>
                  )}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* konfirmasi hapus */}
      <ConfirmDeleteDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
        title="Hapus pesan ini?"
        description={
          <>
            Pesan dari{" "}
            <strong className="text-white">{toDelete?.name}</strong> akan
            dihapus permanen dan tidak bisa dikembalikan.
          </>
        }
        busy={busyId === toDelete?.id}
        onConfirm={remove}
      />
    </div>
  );
}
