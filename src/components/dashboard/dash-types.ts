/**
 * Client Dashboard — tipe payload GET /api/dashboard (Task 15-a)
 * + konstanta & helper data murni yang dipakai seluruh komponen dashboard.
 *
 * Semua data berasal dari fetch client-side → bebas hydration mismatch.
 */

export type ProjectStatus = "ON_TRACK" | "ATTENTION" | "AT_RISK" | "DONE";
export type MilestoneStatus = "DONE" | "ACTIVE" | "UPCOMING";
export type InvoiceStatus = "PAID" | "PENDING" | "SCHEDULED";
export type LegalStatus = "DONE" | "IN_REVIEW" | "PENDING";
export type ActivityType =
  | "DOC_APPROVED"
  | "DOC_REVIEW"
  | "PAYMENT"
  | "MEETING"
  | "MILESTONE"
  | "SYSTEM";

export type TierStat = {
  done: number;
  review: number;
  pending: number;
  total: number;
};

export type ProjectInfo = {
  id: string;
  code: string;
  clientName: string;
  company: string;
  email: string;
  phone: string;
  packageCode: string;
  packageName: string;
  price: number;
  status: ProjectStatus;
  healthScore: number;
  startedAt: string;
  targetDoneAt: string;
};

export type DomainStat = {
  number: number;
  name: string;
  done: number;
  review: number;
  pending: number;
  total: number;
};

export type ProgressInfo = {
  total: number;
  done: number;
  review: number;
  pending: number;
  percent: number;
  byTier: Record<string, TierStat>;
  byDomain: DomainStat[];
};

export type Milestone = {
  title: string;
  at: string;
  status: MilestoneStatus;
  isOverdue: boolean;
};

export type Invoice = {
  id: string;
  number: string;
  label: string;
  amount: number;
  dueDate: string;
  paidAt: string | null;
  status: InvoiceStatus;
  order: number;
};

export type PaymentInfo = {
  price: number;
  paid: number;
  remaining: number;
  percent: number;
  invoices: Invoice[];
};

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
};

export type Meeting = {
  id: string;
  title: string;
  agenda: string;
  host: string;
  scheduledAt: string;
  durationMin: number;
  status: "UPCOMING" | "DONE";
};

export type LegalItem = { name: string; status: LegalStatus; detail: string };
export type DigitalItem = { name: string; progress: number };
export type GoalItem = { title: string; current: number; target: number; unit: string };
export type TeamMember = { name: string; role: string; initials: string };
export type FileItem = { name: string; size: string; type: string; date: string };
export type Achievement = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
};
export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  level: "info" | "warning" | "success";
};
export type ChatMessage = {
  id: string;
  from: "team" | "me";
  sender: string;
  text: string;
  time: string;
};

export type DashboardData = {
  project: ProjectInfo;
  progress: ProgressInfo;
  milestones: Milestone[];
  payment: PaymentInfo;
  activities: Activity[];
  meetings: Meeting[];
  legalitas: LegalItem[];
  digitalisasi: DigitalItem[];
  goals: GoalItem[];
  team: TeamMember[];
  files: FileItem[];
  achievements: Achievement[];
  notifications: NotificationItem[];
  messages: ChatMessage[];
};

/** Urutan tier PGA resmi (fallback: urutan kunci lain dari API). */
export const TIER_ORDER = [
  "P0 Navigasi",
  "P1 Pertumbuhan",
  "P2 Perluasan",
  "P3 Warisan",
] as const;

/** Section anchor id — dipakai sidebar, bottom-nav, scrollspy & command palette. */
export const SECTION_IDS = [
  "dash-ringkasan",
  "dash-progres",
  "dash-keuangan",
  "dash-kolaborasi",
  "dash-kualitas",
  "dash-alat",
] as const;

export type TierRow = TierStat & { key: string };

/** byTier (object acak) → daftar terurut P0→P3. */
export function tierRows(byTier: Record<string, TierStat>): TierRow[] {
  const known = TIER_ORDER.filter((k) => byTier[k]);
  const extra = Object.keys(byTier).filter(
    (k) => !(TIER_ORDER as readonly string[]).includes(k),
  );
  return [...known, ...extra].map((k) => ({ key: k, ...byTier[k] }));
}

/** Status sebuah dokumen PGA berdasarkan nomor (deterministik dari API). */
export function docStatus(
  n: number,
  progress: Pick<ProgressInfo, "done" | "review">,
): "done" | "review" | "pending" {
  if (n <= progress.done) return "done";
  if (n <= progress.done + progress.review) return "review";
  return "pending";
}

/** Kode dokumen tampilan: PGA-001 … PGA-165. */
export function docCode(n: number): string {
  return `PGA-${String(n).padStart(3, "0")}`;
}

/** Tier pemilik sebuah nomor dokumen (kumulatif total per tier). */
export function tierForDoc(
  n: number,
  byTier: Record<string, TierStat>,
): string | null {
  let acc = 0;
  for (const row of tierRows(byTier)) {
    acc += row.total;
    if (n <= acc) return row.key;
  }
  return null;
}
