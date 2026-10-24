"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLogin({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });
      if (res.status === 401) {
        setError("Password salah — periksa kembali.");
        return;
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Gagal terhubung ke server.");
      }
      onSuccess();
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "Gagal terhubung ke server. Coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-5">
      {/* dekorasi latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] animate-aurora"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px] animate-aurora-rev"
      />
      <div aria-hidden="true" className="starfield pointer-events-none absolute inset-0 opacity-40" />

      <section className="glass-strong relative w-[min(92vw,440px)] rounded-3xl p-8 shadow-2xl shadow-emerald-950/50 sm:p-10">
        <header className="flex flex-col items-center text-center">
          <Image
            src="/logo-emblem.png"
            alt="Logo emblem DIGIMAN.ID"
            width={56}
            height={56}
            className="rounded-2xl"
            priority
          />
          <p className="font-display mt-4 text-sm font-bold tracking-[0.3em] text-white">
            DIGIMAN<span className="text-gold">.ID</span>
          </p>
          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.35em] text-gold/70">
            Gunara OS
          </p>
          <h1 className="font-display mt-5 text-2xl font-bold text-white">
            Panel Admin
          </h1>
          <p className="mt-1.5 text-sm text-emerald-50/55">
            Masuk untuk mengelola konten situs.
          </p>
        </header>

        <form onSubmit={submit} noValidate className="mt-8">
          <div>
            <Label
              htmlFor="admin-password"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-50/60"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="admin-password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="••••••••"
                autoComplete="current-password"
                autoFocus
                aria-invalid={!!error}
                aria-describedby={error ? "admin-password-error" : undefined}
                className="h-11 rounded-xl border-emerald-400/20 bg-white/[0.03] pr-11 text-white placeholder:text-emerald-50/30 focus-visible:border-gold/50 focus-visible:ring-gold/20"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Sembunyikan password" : "Tampilkan password"}
                aria-pressed={show}
                className="absolute right-1 top-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-emerald-50/50 transition hover:bg-white/5 hover:text-gold"
              >
                {show ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p
              id="admin-password-error"
              role="alert"
              className="mt-3 text-sm text-red-400"
            >
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || password.length === 0}
            className="shimmer-btn mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-gold-light via-gold to-amber-500 text-sm font-bold text-emerald-950 shadow-lg shadow-gold/25 hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Memeriksa…
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Masuk
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-emerald-50/40">
          Akses internal — hubungi admin untuk kredensial.
        </p>
      </section>
    </div>
  );
}
