# DIGIMAN.ID — Security

This document describes the security posture of DIGIMAN.ID as of **v0.1.0** (genesis release). Items that are not implemented are explicitly marked **ROADMAP**.

---

## 1. Scope & Threat Model

The genesis product is a **public, read-mostly marketing site** with exactly one mutation endpoint (`POST /api/contact`). There is:

- **No authentication surface** — no login, no admin UI, no session state.
- **No user-generated public content** — visitors can only submit a contact inquiry (stored, never rendered back to other visitors).
- **No third-party authentication, payments, or file uploads.**

The realistic attack surface is therefore: spam/abuse of the contact endpoint, injection via submitted fields, and information disclosure through misconfiguration.

## 2. Input Validation

- All contact submissions are validated with **zod** on the server (`POST /api/contact`).
- Validation covers field presence, types, lengths and email format. Invalid payloads are rejected before touching the database.
- Client-side feedback is cosmetic only; the server-side zod schema is the enforcement point.

## 3. Rate Limiting

- `POST /api/contact` is rate limited **in memory: 5 requests per minute per IP**.
- Known limitations (accepted for genesis):
  - The counter lives in process memory — it is **per server instance** and resets on restart. It does not protect a multi-instance deployment.
  - Distributed/multi-instance rate limiting (e.g. shared store or edge middleware) is **ROADMAP**.

## 4. Secrets & Configuration

- **No secrets are committed to source.** Runtime configuration is provided through environment variables (see [.env.example](./.env.example)):
  - `DATABASE_URL` — SQLite connection string in the sandbox; switch to PostgreSQL in production.
  - `NEXT_PUBLIC_SITE_URL` — public site URL; safe to expose (used for `metadataBase`/canonical URLs).
- Anything prefixed `NEXT_PUBLIC_` is embedded into client bundles — never put secrets under that prefix.
- `.env` files must never be committed; keep `.env.example` as the documented template.
- Secret management (vault, rotation policy) is **ROADMAP** — not applicable while no secrets exist.

## 5. HTTP Headers

Set in `next.config.ts` (genesis scope):

| Header | Purpose |
| --- | --- |
| `X-Content-Type-Options: nosniff` | Prevents MIME-type sniffing |
| `Referrer-Policy` | Controls how much referrer data leaks to third parties |
| `X-DNS-Prefetch-Control` | Controls browser DNS prefetching |

### Why `X-Frame-Options` is intentionally omitted

The sandbox preview environment embeds the site **via iframe**. Adding `X-Frame-Options: DENY` (or `SAMEORIGIN`) would break the preview. This is a deliberate, documented trade-off for the development sandbox.

**Production requirement (ROADMAP):** re-enable framing protection (`X-Frame-Options: DENY` or a CSP `frame-ancestors 'none'`) when deploying to production, unless clickjacking-safe embedding is a product requirement.

### Content-Security-Policy

A strict CSP (script/style allowlists, `frame-ancestors`, `object-src 'none'`) is **ROADMAP**.

## 6. Dependency Monitoring

Recommended practice for this repository:

- Enable an automated dependency-update tool (**Dependabot** or **Renovate**) to keep Next.js, Prisma, and Radix packages current.
- Run a dependency audit (`npm audit` / equivalent for your package manager) periodically and before each release.
- Pin the lockfile (`bun.lock`) in commits; review transitive changes in PRs.

CI-driven scanning is **ROADMAP** (no CI workflows exist yet — see CONTRIBUTING.md).

## 7. Data Handling

- `ContactInquiry` records store name, email, company, topic and message — the minimum needed to respond to an inquiry.
- Inquiries are never rendered on the public site.
- Retention policy and PII deletion workflow are **ROADMAP**.

## 8. Production Hardening Checklist (ROADMAP)

All items below are **planned, not implemented** in v0.1.0:

- [ ] **Auth boundaries** — authentication & RBAC before any internal route (e.g. the planned `/command` center) ships.
- [ ] **WAF / edge protection** — bot filtering, IP reputation, DDoS mitigation at the edge.
- [ ] **Distributed rate limiting** — shared store across instances.
- [ ] **Content-Security-Policy** + `X-Frame-Options` for production.
- [ ] **Audit logging** — immutable log of mutations and admin actions.
- [ ] **Structured error/exception monitoring** with alerting.
- [ ] **Database hardening** — migrate SQLite → PostgreSQL; backups; least-privilege DB credentials.
- [ ] **TLS everywhere**; HSTS; secure cookies (once sessions exist).
- [ ] **Dependency scanning in CI** (SAST + audit gates).
- [ ] **Penetration test** before public production launch.

## 9. Private Vulnerability Disclosure

**Please do not open public GitHub issues for security vulnerabilities.**

Report vulnerabilities privately to:

> **security@digiman.id**

Please include: a description of the issue, steps to reproduce (or PoC), affected URL(s)/component(s), and your assessment of impact.

Our commitment:

- We will acknowledge reports within **5 business days**.
- We will keep you informed of remediation progress.
- We credit reporters in release notes **only with your explicit permission**.
- Please give us a reasonable window to fix issues before public disclosure (coordinated disclosure).

## 10. Scope Exclusions

- Volumetric attacks (DDoS) against the sandbox preview.
- Missing security features explicitly documented as **ROADMAP** (e.g. CSP).
- Issues requiring a compromised environment or social engineering of the team.
