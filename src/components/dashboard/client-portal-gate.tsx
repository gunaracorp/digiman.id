"use client";

/**
 * DIGIMAN.ID — Gerbang Portal Klien (#/dashboard).
 *
 * Portal TIDAK terbuka langsung saat diklik: pengunjung wajib MASUK
 * (email + password) atau DAFTAR dulu. Sesi JWT httpOnly lewat
 * /api/client-auth/{register,login,logout,me}; data dashboard diikat
 * ke email akun (lihat /api/dashboard).
 */

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ClientDashboard from "@/components/dashboard/client-dashboard";

export interface PortalUser {
  email: string;
  name: string;
  company?: string | null;
}

type Mode = "login" | "register";
type Phase = "checking" | "anon" | "authed";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ClientPortalGate() {
  const [phase, setPhase] = useState<Phase>("checking");
  const [user, setUser] = useState<PortalUser | null>(null);

  const handleLogout = useCallback(async () => {
    try {
      await fetch("/api/client-auth/logout", { method: "POST" });
    } catch {
      // Abaikan — cookie tetap dibersihkan di sisi klien via state.
    }
    setUser(null);
    setPhase("anon");
  }, []);

  // Cek sesi saat gerbang dipasang — sesi valid → portal langsung tampil.
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/client-auth/me", { cache: "no-store" });
        if (!res.ok) throw new Error("unauthenticated");
        const json = (await res.json()) as { user?: PortalUser };
        if (!alive) return;
        if (json.user) {
          setUser(json.user);
          setPhase("authed");
        } else {
          setPhase("anon");
        }
      } catch {
        if (alive) setPhase("anon");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (phase === "authed" && user) {
    return <ClientDashboard userEmail={user.email} onLogout={handleLogout} />;
  }

  if (phase === "checking") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-night text-emerald-50/70">
        <Loader2 className="h-8 w-8 animate-spin text-gold" aria-hidden="true" />
        <p className="text-sm">Memeriksa sesi portal…</p>
      </div>
    );
  }

  return <AuthScreen onAuthed={(u) => { setUser(u); setPhase("authed"); }} />;
}

/* ════════════════════════ LAYAR MASUK / DAFTAR ════════════════════════ */

function AuthScreen({ onAuthed }: { onAuthed: (user: PortalUser) => void }) {
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const switchMode = (m: Mode) => {
    setMode(m);
    setError(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const mail = email.trim().toLowerCase();
    if (!EMAIL_RE.test(mail)) {
      setError("Format email tidak valid.");
      return;
    }
    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }
    if (mode === "register" && name.trim().length < 2) {
      setError("Nama wajib diisi (min. 2 karakter).");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch(`/api/client-auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "login"
            ? { email: mail, password }
            : { name: name.trim(), email: mail, password, company: company.trim(), phone: phone.trim() }
        ),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        user?: PortalUser;
      };
      if (!res.ok || !data.user) {
        setError(data.error ?? "Gagal memproses. Coba lagi.");
        return;
      }
      onAuthed(data.user);
    } catch {
      setError("Terjadi kesalahan jaringan. Periksa koneksi Anda.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night px-4 py-10 text-foreground">
      {/* Aura latar — selaras identitas landing (emerald + gold) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative w-full max-w-md rounded-[2rem] border-emerald-400/20 p-7 sm:p-9"
      >
        {/* Logo & heading */}
        <div className="mb-7 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-emblem.png"
            alt="Logo PT Digital Bisnis Manajemen"
            className="mx-auto mb-4 h-16 w-16 rounded-3xl object-contain shadow-[0_0_40px_rgba(242,193,78,0.3)] ring-1 ring-gold/45"
          />
          <h1 className="font-display text-2xl font-bold text-white">
            Portal Klien <span className="text-gold">DIGIMAN.ID</span>
          </h1>
          <p className="mt-2 text-sm text-emerald-50/55">
            {mode === "login"
              ? "Masuk untuk memantau progres, dokumen, invoice, dan jadwal proyek Anda."
              : "Daftar akun untuk membuka Portal Klien — pantau proyek Anda 24/7."}
          </p>
        </div>

        {/* Tab Masuk / Daftar */}
        <div className="mb-6 grid grid-cols-2 gap-1 rounded-full border border-emerald-400/20 bg-[#0a1613]/80 p-1">
          {(
            [
              { key: "login", label: "Masuk", icon: LogIn },
              { key: "register", label: "Daftar", icon: UserPlus },
            ] as const
          ).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => switchMode(key)}
              aria-pressed={mode === key}
              className={cn(
                "flex h-10 items-center justify-center gap-2 rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                mode === key
                  ? "bg-gold text-emerald-950 shadow-[0_2px_18px_rgba(242,193,78,0.35)]"
                  : "text-emerald-50/60 hover:text-gold"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label htmlFor="portal-name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/70">
                Nama Lengkap
              </label>
              <Input
                id="portal-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                autoComplete="name"
                className="h-12 border-emerald-400/20 bg-[#0a1613] text-emerald-50 placeholder:text-emerald-50/30"
              />
            </div>
          )}

          <div>
            <label htmlFor="portal-email" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/70">
              Email
            </label>
            <Input
              id="portal-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@perusahaan.id"
              autoComplete="email"
              autoFocus={mode === "login"}
              className="h-12 border-emerald-400/20 bg-[#0a1613] text-emerald-50 placeholder:text-emerald-50/30"
            />
          </div>

          {mode === "register" && (
            <>
              <div>
                <label htmlFor="portal-company" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/70">
                  Perusahaan <span className="font-normal normal-case tracking-normal text-emerald-50/40">(opsional)</span>
                </label>
                <Input
                  id="portal-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="PT …"
                  autoComplete="organization"
                  className="h-12 border-emerald-400/20 bg-[#0a1613] text-emerald-50 placeholder:text-emerald-50/30"
                />
              </div>
              <div>
                <label htmlFor="portal-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/70">
                  No. WhatsApp <span className="font-normal normal-case tracking-normal text-emerald-50/40">(opsional)</span>
                </label>
                <Input
                  id="portal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08…"
                  autoComplete="tel"
                  className="h-12 border-emerald-400/20 bg-[#0a1613] text-emerald-50 placeholder:text-emerald-50/30"
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="portal-password" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/70">
              Password
            </label>
            <div className="relative">
              <Input
                id="portal-password"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "register" ? "Minimal 8 karakter" : "Password Anda"}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                className="h-12 border-emerald-400/20 bg-[#0a1613] pr-12 text-emerald-50 placeholder:text-emerald-50/30"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Sembunyikan password" : "Tampilkan password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-emerald-50/50 transition-colors hover:text-gold"
              >
                {showPw ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={busy}
            className="shimmer-btn h-12 w-full rounded-xl bg-gold text-base font-bold text-emerald-950 hover:bg-gold/90 disabled:opacity-60"
          >
            {busy ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : mode === "login" ? (
              <LogIn className="h-5 w-5" aria-hidden="true" />
            ) : (
              <UserPlus className="h-5 w-5" aria-hidden="true" />
            )}
            {busy ? "Memproses…" : mode === "login" ? "Masuk ke Portal" : "Daftar & Buka Portal"}
          </Button>

          <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-emerald-50/40">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/70" aria-hidden="true" />
            Sesi terenkripsi (JWT httpOnly) — password disimpan ter-hash scrypt.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
