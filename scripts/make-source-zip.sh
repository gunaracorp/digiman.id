#!/usr/bin/env bash
# =============================================================
# make-source-zip.sh — buat snapshot kode sumber siap-GitHub
# Output: public/download/digiman-id-source-lengkap.zip
# (dipakai tombol "Unduh Kode Sumber" di footer situs)
#
# Isi  : src, prisma, scripts, public (tanpa zip rekursif), docs,
#        semua config, README, worklog, .env.example, .gitignore
# Buang: node_modules, .next, .git, .env, *.db, log, folder sandbox
# Jalankan: bun run zip:source   (dari root proyek)
# =============================================================
set -euo pipefail
cd "$(dirname "$0")/.."

OUT="public/download/digiman-id-source-lengkap.zip"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
DEST="$STAGE/digiman.id"
mkdir -p "$DEST"

# Selalu segarkan backup database sebelum zip — snapshot dalam zip ikut termutakhir.
bun run db:backup >/dev/null 2>&1 || echo "⚠ db:backup gagal (dilewati)"

rsync -a \
  --exclude 'node_modules/' \
  --exclude '.next/' \
  --exclude '.git/' \
  --exclude '.env' \
  --exclude '*.db' \
  --exclude '*.db-journal' \
  --exclude '*.log' \
  --exclude 'public/download/' \
  --exclude 'download/' \
  --exclude 'upload/' \
  --exclude 'tool-results/' \
  --exclude '.zscripts/' \
  --exclude 'agent-ctx/' \
  --exclude '.initial_snapshot.json' \
  --exclude 'examples/' \
  --exclude 'tests/' \
  --exclude 'skills/' \
  --exclude '.claude/' \
  --exclude '.z-ai-config' \
  src prisma scripts public docs db/backup.json \
  package.json package-lock.json tsconfig.json next.config.ts \
  tailwind.config.ts postcss.config.mjs eslint.config.mjs \
  components.json bun.lock .gitignore README.md worklog.md \
  .env.example Caddyfile next-env.d.ts \
  "$DEST"/ 2>/dev/null || true

mkdir -p "$(dirname "$OUT")"
rm -f "$OUT"
(cd "$STAGE" && zip -qr9 "$OLDPWD/$OUT" digiman.id)

FILES=$(unzip -l "$OUT" | tail -1 | awk '{print $2}')
SIZE=$(du -h "$OUT" | cut -f1)
echo "✅ $OUT → $FILES file, $SIZE"
