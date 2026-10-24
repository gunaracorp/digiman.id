"use client";

/**
 * Shared UI kecil untuk Panel Admin (agen 6-e).
 * - ErrorBar    : panel error glass + tombol coba lagi.
 * - ConfirmDeleteDialog : AlertDialog konfirmasi hapus bergaya admin.
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

/** Panel error glass dengan tombol retry. */
export function ErrorBar({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-xl border-red-400/30 p-4">
      <p className="text-sm text-red-300">{error}</p>
      <Button
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

/** Dialog konfirmasi hapus (merah) — dipakai semua tab admin. */
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
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
            }}
            disabled={busy}
            className="bg-red-500/90 text-white hover:bg-red-500"
          >
            Ya, Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
