#!/bin/bash
# Verifikasi runtime Task 21 — 11 layanan baru
cd /home/z/my-project

# Kill existing dev server on port 3000
fuser -k 3000/tcp 2>/dev/null; sleep 1

setsid bun run dev > /tmp/dev21.log 2>&1 &
SERVER_PID=$!

# Wait for server ready (max 60s)
for i in $(seq 1 60); do
  if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null | grep -q "200\|307"; then
    echo "SERVER READY after ${i}s"
    break
  fi
  sleep 1
done

echo "=== 1. Cek 11 rute layanan baru (harus 200) ==="
for slug in izin-lingkungan pbg-slf sbu-konstruksi api-bea-cukai izin-distribusi kitas-investor smk3 bnsp lkpm higiene-sanitasi merek-internasional; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/layanan/$slug")
  echo "  /layanan/$slug -> $code"
done

echo "=== 2. Halaman inti ==="
for path in "/" "/layanan" "/katalog-whatsapp" "/sitemap.xml"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$path")
  echo "  $path -> $code"
done

echo "=== 3. Sitemap: hitung URL layanan ==="
curl -s http://localhost:3000/sitemap.xml | grep -o "<loc>" | wc -l | xargs echo "  total URL:"
curl -s http://localhost:3000/sitemap.xml | grep -c "layanan/izin-lingkungan\|layanan/pbg-slf\|layanan/sbu-konstruksi\|layanan/api-bea-cukai\|layanan/izin-distribusi\|layanan/kitas-investor\|layanan/smk3\|layanan/bnsp\|layanan/lkpm\|layanan/higiene-sanitasi\|layanan/merek-internasional" | xargs echo "  URL layanan baru di sitemap:"

echo "=== 4. Katalog WA CSV (harus 45 baris: header + 44) ==="
curl -s http://localhost:3000/katalog-whatsapp/download | wc -l | xargs echo "  baris CSV:"

echo "=== 5. Card image persegi layanan baru ==="
code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/layanan/smk3/card-image")
type=$(curl -s -o /dev/null -w "%{content_type}" "http://localhost:3000/layanan/smk3/card-image")
echo "  /layanan/smk3/card-image -> $code ($type)"

echo "=== 6. Konten editorial ter-render di halaman layanan baru ==="
curl -s http://localhost:3000/layanan/pbg-slf | grep -o "Gedung yang sah dibangun" | head -1 | xargs echo "  tagline pbg-slf:"
curl -s http://localhost:3000/layanan/lkpm | grep -o "Laporan kecil yang menyelamatkan" | head -1 | xargs echo "  tagline lkpm:"
curl -s http://localhost:3000/layanan/merek-internasional | grep -o "Protokol Madrid" | head -1 | xargs echo "  madrid:"

echo "=== 7. JSON-LD FAQPage di layanan baru ==="
curl -s http://localhost:3000/layanan/izin-lingkungan | grep -c "FAQPage" | xargs echo "  FAQPage schema:"

echo "=== SELESAI — kill server ==="
kill $SERVER_PID 2>/dev/null; fuser -k 3000/tcp 2>/dev/null
