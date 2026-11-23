#!/bin/bash
# Task 23 — E2E lengkap dalam satu sesi server
cd /home/z/my-project
export DATABASE_URL="file:/home/z/my-project/db/custom.db"
export AUTH_SECRET="digiman-admin-secret-2025-pt-digital-bisnis-manajemen"
setsid nohup bun run dev > dev.log 2>&1 < /dev/null &
for i in $(seq 1 30); do
  sleep 2
  CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ 2>/dev/null)
  [ "$CODE" = "200" ] && break
done
echo "server ready: $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/)"

# 1. Homepage: featured signature + angka 165
agent-browser open http://localhost:3000/ >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
echo "HOME: $(agent-browser eval "JSON.stringify({featuredSig: Array.from(document.querySelectorAll('a[href]')).filter(a=>/dna-bisnis-360|launchpad-30-hari/.test(a.href)).length, mentions165: document.body.innerText.includes('165'), title: document.title.slice(0,50)})" 2>/dev/null | grep -o '{.*}')"
agent-browser screenshot /tmp/task23-home.png 2>&1 | grep -o "saved.*"

# 2. Signature landing: struktur editorial
agent-browser open http://localhost:3000/layanan/dna-bisnis-360 >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
echo "DNA360: $(agent-browser eval "JSON.stringify({sections: document.querySelectorAll('main section').length, jsonld: document.querySelectorAll('script[type=\"application/ld+json\"]').length, wa: document.querySelectorAll('a[href*=\"wa.me\"],a[href*=\"api.whatsapp\"]').length, words: document.body.innerText.split(/\\s+/).length})" 2>/dev/null | grep -o '{.*}')"
agent-browser screenshot /tmp/task23-signature.png 2>&1 | grep -o "saved.*"

# 3. Agri landing
agent-browser open http://localhost:3000/layanan/ispo-rspo-sawit >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
echo "ISPO: $(agent-browser eval "JSON.stringify({h1: document.querySelector('h1')?.textContent?.slice(0,60), jsonld: document.querySelectorAll('script[type=\"application/ld+json\"]').length, wa: document.querySelectorAll('a[href*=\"wa.me\"],a[href*=\"api.whatsapp\"]').length})" 2>/dev/null | grep -o '{.*}')"
agent-browser screenshot /tmp/task23-agri.png 2>&1 | grep -o "saved.*"

# 4. Hub kategori filter
agent-browser open "http://localhost:3000/layanan?kategori=agri-maritim" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
echo "AGRI-HUB: $(agent-browser eval "JSON.stringify({links: Array.from(document.querySelectorAll('a[href]')).filter(a=>/ispo-rspo|izin-perikanan-sikpi|pvt-varietas|izin-peternakan|plasma-perkebunan|izin-air-tanah|riph-impor/.test(a.href)).map(a=>a.getAttribute('href')).filter((v,i,arr)=>arr.indexOf(v)===i).length})" 2>/dev/null | grep -o '{.*}')"

# 5. Mobile overflow check (DNA page)
agent-browser set viewport 390 844 >/dev/null 2>&1
agent-browser open http://localhost:3000/layanan/launchpad-30-hari >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
echo "MOBILE: $(agent-browser eval "JSON.stringify({overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth})" 2>/dev/null | grep -o '{.*}')"
agent-browser screenshot /tmp/task23-mobile-launchpad.png 2>&1 | grep -o "saved.*"

# 6. Error console
echo "PAGE-ERRORS: $(agent-browser errors 2>/dev/null | wc -l) baris"
agent-browser close >/dev/null 2>&1
echo "=== E2E SELESAI ==="
