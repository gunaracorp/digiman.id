"use client";

/**
 * Shared UI untuk Panel Admin DIGIMAN.ID.
 * Menyediakan komponen dan style bersama untuk halaman admin.
 */

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

/** Header halaman admin. */
export function PageHeader({
  icon,
  title,
  desc,
  action,
}: {
  icon?: ReactNode;
  title: string;
  desc?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 items-start gap-4">
        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h1>
          {desc && (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-emerald-50/60">
              {desc}
            </p>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}

/** Kartu/container untuk konten halaman admin. */
export function AdminCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-emerald-400/15 bg-[#06150f]/70 p-5 shadow-lg shadow-black/10 sm:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

/** Label untuk kolom formulir dengan hint opsional. */
export function FieldLabel({
  children,
  hint,
}: {
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="mb-2 block text-sm font-medium text-emerald-50/85">
      {children}
      {hint && (
        <span className="mt-1 block text-xs font-normal leading-relaxed text-emerald-50/45">
          {hint}
        </span>
      )}
    </label>
  );
}

/** Tampilan ketika belum ada data. */
export function EmptyState({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-emerald-400/20 bg-emerald-950/20 px-6 py-12 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.07]">
        <span aria-hidden="true" className="text-xl text-emerald-300">
          ◇
        </span>
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-emerald-50/50">
        {desc}
      </p>
    </div>
  );
}

/** Style bersama untuk input; bisa digabung dengan className tambahan. */
export const inputCls =
  "w-full rounded-xl border border-emerald-400/20 bg-[#06150f]/70 px-3 py-2 text-emerald-50 placeholder:text-emerald-50/35 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/30";

/** Style tombol hijau emerald. */
export const btnEmerald =
  "border border-emerald-400/30 bg-emerald-500 font-semibold text-[#04110c] shadow-sm shadow-emerald-950/20 hover:bg-emerald-400";

/** Style tombol emas. */
export const btnGold =
  "border border-amber-200/30 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 font-semibold text-[#181006] shadow-sm shadow-amber-950/20 hover:from-amber-200 hover:via-yellow-200 hover:to-amber-300";

/** Panel error dengan tombol coba lagi. */
export function ErrorBar({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div
      role="alert"
      className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-400/30 p-4"
    >
      <p className="text-sm text-red-300">{error}</p>
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={onRetry}
        className="border-emerald-400/30"
      >
        Coba Lagi
      </Button>
    </div>
  );
}

/** Dialog konfirmasi penghapusan. */
export function ConfirmDeleteDialog({
  open,
  onOpenChange,
  title,
  description,
  busy,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: ReactNode;
  busy: boolean;
  onConfirm: () => void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="glass-strong border-red-400/25">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display text-white">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-emerald-50/60">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-emerald-400/25 bg-transparent text-emerald-50/80 hover:bg-white/5 hover:text-white">
            Batal
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(event) => {
              event.preventDefault();
              onConfirm();
            }}
            disabled={busy}
            className="bg-red-500/90 text-white hover:bg-red-500"
          >
            {busy ? "Memproses..." : "Ya, Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
