"use client";

import { useCallback } from "react";
import { FileSpreadsheet } from "lucide-react";
import { PageHeader } from "@/components/admin/admin-ui";
import AdminProposals from "@/components/admin/admin-proposals";

/** Halaman Penawaran — kelola proposal masuk dari Proposal Studio publik. */
export default function PenawaranPage() {
  const noop = useCallback(() => {}, []);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={<FileSpreadsheet className="h-5 w-5" />}
        title="Penawaran"
        desc="Semua penawaran yang dibuat lewat Proposal Studio — ubah status, tinjau rincian, atau unduh."
      />
      <AdminProposals onUnauthorized={noop} />
    </div>
  );
}
