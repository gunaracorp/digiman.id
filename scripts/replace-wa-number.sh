#!/bin/bash
# replace-wa-number.sh — Ganti seluruh nomor WA/telepon lama → baru (sumber kode).
# Lama: 6281333397223 (+62 813-3339-7223 / 0813-3339-7223)
# Baru: 6281316516524 (+62 813-1651-6524 / 0813-1651-6524)
set -euo pipefail

FILES=(
  "src/lib/site-data.ts"
  "src/lib/digiman-data.ts"
  "src/app/page.tsx"
  "src/app/layout.tsx"
  "src/app/not-found.tsx"
  "src/app/admin/(dashboard)/pengaturan/page.tsx"
  "src/app/api/admin/backup/route.ts"
  "src/components/digiman/digi-ai.tsx"
  "src/components/digiman/faq.tsx"
  "src/components/digiman/services.tsx"
  "src/components/proposal/proposal-ui.tsx"
  "src/components/proposal/client-step.tsx"
  "src/components/proposal/proposal-document.tsx"
  "src/components/proposal/proposal-preview.tsx"
  "src/components/gunara/os-explorer.tsx"
)

cd "$(dirname "$0")/.."

for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    sed -i \
      -e 's/6281333397223/6281316516524/g' \
      -e 's/813-3339-7223/813-1651-6524/g' \
      -e 's/081333397223/081316516524/g' \
      -e 's/813 3339 7223/813 1651 6524/g' \
      "$f"
    echo "OK  $f"
  else
    echo "SKIP (tidak ada): $f"
  fi
done

echo "--- Sisa kemunculan nomor lama di src/ (harus kosong) ---"
rg -n "6281333397223|813-3339-7223|081333397223|3339 7223" src/ || echo "BERSIH ✓"
