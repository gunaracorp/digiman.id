"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/digiman/section-heading";
import { Reveal } from "@/components/digiman/motion/reveal";
import { CONTACT } from "@/content/holding";
import { contactSchema, type ContactInput } from "@/lib/validation";

const EMPTY: ContactInput = {
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

/**
 * Contact section: form posts to /api/contact (mutation via API route).
 * Client validation mirrors the server schema (shared zod definition).
 */
export function Contact() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: EMPTY,
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (res.ok && json?.ok) {
        toast.success("Pesan terkirim.", {
          description: "Terima kasih — tim kami akan merespons dalam 1–2 hari kerja.",
        });
        reset();
      } else {
        toast.error(json?.error ?? "Gagal mengirim pesan. Coba lagi.");
      }
    } catch {
      toast.error("Koneksi bermasalah. Periksa jaringan Anda dan coba lagi.");
    }
  };

  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="py-24 sm:py-32"
    >
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            id="kontak-title"
            eyebrow={CONTACT.eyebrow}
            title={CONTACT.title}
            description={CONTACT.description}
          />
          <Reveal delay={0.15}>
            <dl className="mt-10">
              {CONTACT.info.map((info) => (
                <div
                  key={info.label}
                  className="flex items-baseline justify-between gap-6 border-t border-border py-4 last:border-b"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {info.label}
                  </dt>
                  <dd className="text-sm">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Data yang Anda kirim hanya digunakan untuk merespons pesan ini.
              Tidak ada langganan otomatis, tidak ada pembagian ke pihak
              ketiga.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            aria-label="Formulir kontak"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="contact-name">Nama</Label>
                <Input
                  id="contact-name"
                  className="mt-2 h-11"
                  placeholder="Nama lengkap"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                <FieldError message={errors.name?.message} />
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  className="mt-2 h-11"
                  placeholder="nama@perusahaan.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <Label htmlFor="contact-company">
                  Perusahaan <span className="text-muted-foreground">(opsional)</span>
                </Label>
                <Input
                  id="contact-company"
                  className="mt-2 h-11"
                  placeholder="Nama perusahaan"
                  autoComplete="organization"
                  aria-invalid={!!errors.company}
                  {...register("company")}
                />
                <FieldError message={errors.company?.message} />
              </div>

              <div>
                <Label htmlFor="contact-topic">Topik</Label>
                <Controller
                  control={control}
                  name="topic"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="contact-topic"
                        className="mt-2 h-11 w-full"
                        aria-invalid={!!errors.topic}
                      >
                        <SelectValue placeholder="Pilih topik" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT.topics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.topic?.message} />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="contact-message">Pesan</Label>
                <Textarea
                  id="contact-message"
                  className="mt-2 min-h-32"
                  placeholder="Ceritakan kebutuhan Anda — konteks, tujuan, dan linimasa."
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                <FieldError message={errors.message?.message} />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 h-12 w-full rounded-full text-[15px] font-medium"
            >
              {isSubmitting ? (
                "Mengirim…"
              ) : (
                <>
                  Kirim Pesan
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
