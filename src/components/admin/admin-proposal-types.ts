/**
 * Tipe bersama Proposal untuk Panel Admin (agen 6-e).
 * Field JSON-string (documentCodes/addons/items) dikirim apa adanya
 * (unknown) — parsing dilakukan di komponen via parseJsonLoose().
 */

export type Proposal = {
  id: string;
  code: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientWa: string;
  packageCode: string;
  documentCodes: unknown;
  addons: unknown;
  items: unknown;
  subtotal: number;
  discount: number;
  total: number;
  durationWeeks: string;
  notes: string;
  status: string;
  validUntil: string | null;
  createdAt: string;
};
