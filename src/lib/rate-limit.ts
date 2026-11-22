/**
 * Minimal in-memory fixed-window rate limiter (per process).
 * Sufficient for the genesis stage on a single instance.
 * ROADMAP: replace with a shared store (e.g. Redis/Upstash) when the
 * platform scales to multiple instances — see SECURITY.md.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const DEFAULT_LIMIT = 5;
const MAX_BUCKETS = 10_000;

export function rateLimit(
  key: string,
  limit: number = DEFAULT_LIMIT,
  windowMs: number = WINDOW_MS
): { ok: boolean; retryAfter?: number } {
  const now = Date.now();

  // Opportunistic cleanup to keep memory bounded.
  if (buckets.size > MAX_BUCKETS) {
    for (const [k, b] of buckets) {
      if (b.resetAt <= now) buckets.delete(k);
    }
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (bucket.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}
