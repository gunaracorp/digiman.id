#!/usr/bin/env python3
"""Task 23 — update 8 locale JSONs: heading 144→165 + 2 kategori baru."""
import json, io

TRANSLATIONS = {
    "ar": {"heading": "165 خدمة", "signature": "خدمات جونارا المميزة", "agri": "الزراعة والثروة الحيوانية والبحرية"},
    "es": {"heading": "165 Servicios", "signature": "Servicios Exclusivos de Gunara", "agri": "Agroindustria, Ganadería y Marítimo"},
    "fr": {"heading": "165 Services", "signature": "Services Signature Gunara", "agri": "Agrobusiness, Élevage & Maritime"},
    "hi": {"heading": "165 सेवाएं", "signature": "गुनारा सिग्नेचर सेवाएं", "agri": "कृषि, पशुधन और समुद्री"},
    "ja": {"heading": "165のサービス", "signature": "Gunaraシグネチャーサービス", "agri": "アグリ・畜産・マリタイム"},
    "pt": {"heading": "165 Serviços", "signature": "Serviços Exclusivos Gunara", "agri": "Agronegócio, Pecuária & Marítimo"},
    "ru": {"heading": "165 услуг", "signature": "Фирменные услуги Gunara", "agri": "Агробизнес, животноводство и морская сфера"},
    "zh": {"heading": "165项服务", "signature": "Gunara 特色服务", "agri": "农业、畜牧与海事"},
}

BASE = "/home/z/my-project/src/lib/i18n/locales"
for lang, t in TRANSLATIONS.items():
    path = f"{BASE}/{lang}.json"
    with open(path, encoding="utf-8") as f:
        d = json.load(f)
    svc = d.get("services", {})
    old = svc.get("headingA", "")
    if "144" in old:
        svc["headingA"] = t["heading"]
    cats = svc.get("categories", {})
    cats["signature"] = t["signature"]
    cats["agri-maritim"] = t["agri"]
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"{lang}: headingA {old!r} -> {svc['headingA']!r}; categories += signature, agri-maritim")
print("SELESAI")
