import { z } from "zod";
import { CONTACT } from "@/content/holding";

/**
 * Shared contact-form schema — used by the client form (zodResolver)
 * and the API route (authoritative validation). Single source of truth.
 */
const TOPIC_VALUES = [...CONTACT.topics] as [string, ...string[]];
const BUDGET_VALUES = [...CONTACT.budgets] as string[];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(80, "Nama maksimal 80 karakter."),
  email: z.email("Format email tidak valid.").max(160, "Email terlalu panjang."),
  // Catatan kompatibilitas @hookform/resolvers v6 (repo): field tanpa
  // `.default()` agar input type == output type — resolver dan
  // useForm<ContactInput> cocok tanpa transformasi.
  company: z
    .string()
    .trim()
    .max(120, "Nama perusahaan terlalu panjang.")
    .optional(),
  phone: z
    .string()
    .trim()
    .max(32, "Nomor WhatsApp terlalu panjang.")
    .optional(),
  topic: z
    .string()
    .min(1, "Pilih topik.")
    .refine((v) => (TOPIC_VALUES as string[]).includes(v), "Topik tidak valid."),
  budget: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => v === "" || v === undefined || BUDGET_VALUES.includes(v),
      "Pilihan anggaran tidak valid."
    ),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal 10 karakter.")
    .max(1000, "Pesan maksimal 1000 karakter."),
});

export type ContactInput = z.infer<typeof contactSchema>;
