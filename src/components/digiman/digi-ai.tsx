"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";

type ChatMsg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Halo! 👋 Saya Digi AI, asisten DIGIMAN.ID. Tanya apa saja soal pendirian PT/CV, NIB & OSS, merek, sertifikasi halal, sampai website & AI. Bisa juga coba pertanyaan cepat di bawah!";

const FALLBACK_REPLY =
  "Maaf, koneksi bermasalah. Coba lagi atau chat WhatsApp kami di +62 813-3339-7223 ya!";

const QUICK_QUESTIONS = [
  "Berapa biaya pendirian PT?",
  "Apa itu 7 Lapis Langit?",
  "Bisa proses 100% online?",
];

function generateSessionId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `sess-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function DigiAi() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sessionIdRef = useRef<string | null>(null);
  const greetedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* Session dibuat sekali, saat panel pertama dibuka (aman dari hydration mismatch) */
  const ensureSession = (): string => {
    if (!sessionIdRef.current) sessionIdRef.current = generateSessionId();
    return sessionIdRef.current;
  };

  const handleOpen = () => {
    setOpen(true);
    ensureSession();
    if (!greetedRef.current) {
      greetedRef.current = true;
      setMessages([{ role: "assistant", content: GREETING }]);
    }
  };

  /* Selalu gulir ke bawah saat ada pesan / indikator mengetik baru */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const sendMessage = async (raw: string) => {
    const content = raw.trim();
    if (!content || loading) return;

    const sessionId = ensureSession();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: content }),
      });
      const data: { reply?: string } | null = await res
        .json()
        .catch(() => null);
      const reply = data?.reply?.trim();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply || FALLBACK_REPLY },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: FALLBACK_REPLY },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : handleOpen())}
        aria-label="Tanya Digi AI"
        aria-expanded={open}
        className="glass-strong fixed bottom-5 right-20 z-50 flex h-14 w-14 items-center justify-center rounded-full text-gold shadow-lg shadow-emerald-500/10 ring-1 ring-gold/40 transition hover:scale-105 hover:ring-gold/70 sm:right-24"
      >
        <Sparkles className="h-6 w-6" aria-hidden="true" />
        <span
          className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-[#04110c]"
          aria-hidden="true"
        />
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="digi-ai-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-label="Chat Digi AI — asisten legalitas DIGIMAN.ID"
            className="glass-strong fixed bottom-24 right-5 z-50 flex h-[560px] max-h-[70vh] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-emerald-400/15 bg-gradient-to-r from-emerald-500/25 via-emerald-400/10 to-transparent px-4 py-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 text-emerald-950 shadow-md shadow-gold/30">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-white">
                  Digi AI
                </p>
                <p className="truncate text-xs text-emerald-50/60">
                  Asisten legalitas DIGIMAN.ID
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup chat"
                className="rounded-lg p-2 text-emerald-50/60 transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto p-4"
            >
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <div
                    key={i}
                    className="ml-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-gradient-to-br from-yellow-300/90 to-amber-400/90 px-4 py-2.5 text-sm font-medium text-emerald-950"
                  >
                    {msg.content}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="max-w-[88%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5 text-sm text-emerald-50/90"
                  >
                    {msg.content}
                  </div>
                )
              )}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-emerald-400/20 bg-emerald-400/10 px-4 py-3.5 w-fit">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300"
                      style={{ animationDelay: `${i * 0.15}s` }}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="sr-only">Digi AI sedang mengetik…</span>
                </div>
              )}
            </div>

            {/* Quick chips */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 border-t border-emerald-400/10 px-3.5 py-3">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    disabled={loading}
                    onClick={() => void sendMessage(q)}
                    className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold transition hover:bg-gold/20 disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input row */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-emerald-400/15 bg-[#04110c]/60 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pertanyaan Anda..."
                aria-label="Pesan untuk Digi AI"
                className="h-10 min-w-0 flex-1 rounded-xl border border-emerald-400/20 bg-white/[0.04] px-3.5 text-sm text-white outline-none transition placeholder:text-emerald-50/35 focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Kirim pesan"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 text-emerald-950 shadow-md shadow-gold/30 transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-50"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
