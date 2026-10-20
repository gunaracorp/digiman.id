"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2, Save, Settings2, ShieldCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { adminJson, handleAdminError, useAdminData } from "./admin-helpers";

type SettingRow = { key: string; value: string; masked?: boolean };

export default function AdminSettings({
  onUnauthorized,
}: {
  onUnauthorized: () => void;
}) {
  const { data: settings, loading, error, reload } = useAdminData<SettingRow[]>(
    "/api/admin/settings",
    onUnauthorized,
  );

  const [edits, setEdits] = useState<Record<string, string>>({});
  const [savingKey, setSavingKey] = useState<string | null>(null);

  // form ganti password
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pwError, setPwError] = useState<string | null>(null);
  const [savingPw, setSavingPw] = useState(false);

  const saveRow = async (row: SettingRow) => {
    const value = edits[row.key];
    if (value === undefined || value === row.value) return;
    setSavingKey(row.key);
    try {
      await adminJson("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: row.key, value }),
      });
      toast({ title: "Pengaturan tersimpan.", description: row.key });
      setEdits((e) => {
        const next = { ...e };
        delete next[row.key];
        return next;
      });
      reload();
    } catch (e) {
      handleAdminError(e, onUnauthorized, "Gagal menyimpan pengaturan.");
    } finally {
      setSavingKey(null);
    }
  };

  const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (savingPw) return;
    if (newPw.length < 6) {
      setPwError("Password baru minimal 6 karakter.");
      return;
    }
    if (newPw !== confirmPw) {
      setPwError("Konfirmasi password tidak sama.");
      return;
    }
    setPwError(null);
    setSavingPw(true);
    try {
      await adminJson("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "adminPassword", value: newPw }),
      });
      toast({
        title: "Password admin diperbarui.",
        description: "Gunakan password baru pada login berikutnya.",
      });
      setNewPw("");
      setConfirmPw("");
    } catch (e2) {
      handleAdminError(e2, onUnauthorized, "Gagal mengganti password.");
    } finally {
      setSavingPw(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ── daftar SiteSetting ── */}
      <section aria-label="Pengaturan situs" className="space-y-3">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-50/60">
          <Settings2 className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
          Pengaturan Situs
        </h2>

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
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-16 rounded-xl bg-emerald-400/5" />
            ))}
          </div>
        ) : (
          <ul className="space-y-3">
            {(settings ?? []).map((row) => (
              <li key={row.key} className="glass rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <code className="w-48 shrink-0 font-mono text-xs text-gold/90">
                    {row.key}
                  </code>
                  {row.masked ? (
                    <span className="flex-1 text-sm italic text-emerald-50/45">
                      Tersembunyi — gunakan form di bawah untuk mengganti.
                    </span>
                  ) : (
                    <>
                      <Input
                        aria-label={`Nilai pengaturan ${row.key}`}
                        value={edits[row.key] ?? row.value}
                        onChange={(e) =>
                          setEdits((ed) => ({ ...ed, [row.key]: e.target.value }))
                        }
                        className="h-10 min-w-40 flex-1 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white"
                      />
                      <Button
                        size="sm"
                        onClick={() => saveRow(row)}
                        disabled={
                          savingKey === row.key ||
                          edits[row.key] === undefined ||
                          edits[row.key] === row.value
                        }
                        className="border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
                        variant="outline"
                      >
                        {savingKey === row.key ? (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        ) : (
                          <Save className="h-4 w-4" aria-hidden="true" />
                        )}
                        Simpan
                      </Button>
                    </>
                  )}
                </div>
              </li>
            ))}
            {settings && settings.length === 0 && (
              <li className="glass rounded-xl p-6 text-center text-sm text-emerald-50/55">
                Belum ada pengaturan tersimpan.
              </li>
            )}
          </ul>
        )}
      </section>

      {/* ── ganti password admin ── */}
      <section aria-label="Ganti password admin" className="glass-strong rounded-2xl p-6">
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-50/60">
          <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          Ganti Password Admin
        </h2>
        <form onSubmit={changePassword} noValidate className="mt-4 max-w-md space-y-4">
          <div className="relative">
            <Label
              htmlFor="admin-newpw"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
            >
              Password Baru
            </Label>
            <Input
              id="admin-newpw"
              type={showPw ? "text" : "password"}
              value={newPw}
              onChange={(e) => {
                setNewPw(e.target.value);
                if (pwError) setPwError(null);
              }}
              placeholder="minimal 6 karakter"
              autoComplete="new-password"
              className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] pr-11 text-white placeholder:text-emerald-50/30"
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Sembunyikan password baru" : "Tampilkan password baru"}
              aria-pressed={showPw}
              className="absolute right-2 top-[34px] inline-flex h-8 w-8 items-center justify-center rounded-lg text-emerald-50/50 transition hover:bg-white/5 hover:text-gold"
            >
              {showPw ? (
                <EyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Eye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
          <div>
            <Label
              htmlFor="admin-confirmpw"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
            >
              Konfirmasi Password
            </Label>
            <Input
              id="admin-confirmpw"
              type={showPw ? "text" : "password"}
              value={confirmPw}
              onChange={(e) => {
                setConfirmPw(e.target.value);
                if (pwError) setPwError(null);
              }}
              placeholder="ulangi password baru"
              autoComplete="new-password"
              className="h-10 rounded-xl border-emerald-400/20 bg-white/[0.03] text-white placeholder:text-emerald-50/30"
            />
          </div>
          {pwError && (
            <p role="alert" className="text-sm text-red-400">
              {pwError}
            </p>
          )}
          <Button
            type="submit"
            disabled={savingPw || newPw.length === 0 || confirmPw.length === 0}
            className="bg-gradient-to-r from-gold-light via-gold to-amber-500 font-bold text-emerald-950 hover:brightness-110"
          >
            {savingPw && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            Perbarui Password
          </Button>
        </form>
      </section>
    </div>
  );
}
