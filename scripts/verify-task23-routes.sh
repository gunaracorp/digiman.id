#!/bin/bash
# Task 23 — verifikasi 21 rute baru + permukaan turunan
SLUGS="dna-bisnis-360 launchpad-30-hari shield-kepatuhan-tahunan deal-room-negosiasi exit-ready-valuation tender-ready-program pendiri-pribadi-shield ispo-rspo-sawit izin-perikanan-sikpi pvt-varietas-tanaman izin-peternakan-nak plasma-perkebunan-kemitraan izin-air-tanah-sipa riph-impor-hortikultura kitap-pasangan-investor skb-relief-pajak-treaty keberatan-banding-pajak indikasi-geografis-sttig bujp-jasa-keamanan izin-limbah-b3 skttk-personel-konstruksi"
FAIL=0
for s in $SLUGS; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/layanan/$s")
  CARD=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/layanan/$s/card-image")
  if [ "$CODE" != "200" ] || [ "$CARD" != "200" ]; then
    echo "FAIL $s: page=$CODE card=$CARD"; FAIL=1
  fi
done
[ $FAIL -eq 0 ] && echo "21/21 rute baru + card-image: SEMUA 200"
echo "--- Sitemap ---"
curl -s http://localhost:3000/sitemap.xml | grep -o "<loc>" | wc -l
echo "--- CSV katalog WA (baris) ---"
curl -s http://localhost:3000/katalog-whatsapp/download | wc -l
echo "--- Kategori URL ---"
curl -s -o /dev/null -w "layanan?kategori=signature -> %{http_code}\n" "http://localhost:3000/layanan?kategori=signature"
curl -s -o /dev/null -w "layanan?kategori=agri-maritim -> %{http_code}\n" "http://localhost:3000/layanan?kategori=agri-maritim"
