#!/usr/bin/env python3
"""
update-wa-number-db.py — Ganti nomor WA/telepon di database SQLite digiman.id.
1. Upsert SiteSetting (key/value): waNumber & waDisplay → nomor baru.
2. Sapu SEMUA tabel/kolom teks, ganti varian nomor lama → baru (FAQ, blog,
   layanan, chat log, dsb. bila memuat nomor lama).
Idempotent: aman dijalankan berulang.
"""
import sqlite3
import re
import sys

DB = "/home/z/my-project/db/custom.db"

OLD_NEW = [
    ("6281333397223", "6281316516524"),
    ("081333397223", "081316516524"),
    ("813-3339-7223", "813-1651-6524"),
    ("813 3339 7223", "813 1651 6524"),
]

def sub_all(text: str) -> str:
    for old, new in OLD_NEW:
        if old in text:
            text = text.replace(old, new)
    return text

def main() -> int:
    con = sqlite3.connect(DB)
    cur = con.cursor()

    # ── 1. Upsert SiteSetting ────────────────────────────────────────────
    # Pastikan tabel ada (schema bisa berbeda antar versi project)
    tables = {r[0] for r in cur.execute(
        "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    if "SiteSetting" in tables:
        cols = [r[1] for r in cur.execute("PRAGMA table_info(SiteSetting)").fetchall()]
        if cols == ["key", "value"]:
            for key, val in (("waNumber", "6281316516524"),
                             ("waDisplay", "+62 813-1651-6524")):
                cur.execute(
                    "INSERT INTO SiteSetting (key, value) VALUES (?, ?) "
                    "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
                    (key, val))
            print("SiteSetting: waNumber/waDisplay di-upsert ke nomor baru")
        else:
            print(f"SiteSetting kolom tak dikenal: {cols} — dilewati")
    else:
        print("SiteSetting tidak ada di DB — dilewati")

    # ── 2. Sapu semua tabel (filter di Python — robust utk schema apa pun) ─
    NEEDLES = tuple(o for o, _ in OLD_NEW)
    def row_has_old(vals):
        return any(isinstance(v, str) and any(n in v for n in NEEDLES) for v in vals)

    total_rows = 0
    for t in sorted(tables):
        if t.startswith("_") or t.startswith("sqlite_"):
            continue
        try:
            info = cur.execute(f'PRAGMA table_info("{t}")').fetchall()
            if not info:
                continue
            text_cols = [c[1] for c in info if (c[2] or "").upper() in
                         ("TEXT", "VARCHAR", "CLOB", "") or "CHAR" in (c[2] or "").upper()]
            if not text_cols:
                continue
            col_list = ", ".join(f'"{c}"' for c in text_cols)
            rows = cur.execute(
                f'SELECT rowid, {col_list} FROM "{t}"').fetchall()
            for row in rows:
                if not row_has_old(row[1:]):
                    continue
                rowid = row[0]
                new_vals = [
                    sub_all(v) if isinstance(v, str) else v for v in row[1:]
                ]
                sets = ", ".join(f'"{c}" = ?' for c in text_cols)
                cur.execute(f'UPDATE "{t}" SET {sets} WHERE rowid = ?',
                            (*new_vals, rowid))
                total_rows += 1
                print(f'  {t} rowid={rowid}: nomor lama diganti')
        except sqlite3.Error as e:
            print(f'  (lewati tabel {t}: {e})')

    con.commit()

    # ── 3. Verifikasi (sama seperti sapuan: baca semua baris, cek Python) ─
    leftover = 0
    for t in sorted(tables):
        if t.startswith("_") or t.startswith("sqlite_"):
            continue
        try:
            info = cur.execute(f'PRAGMA table_info("{t}")').fetchall()
            text_cols = [c[1] for c in info if (c[2] or "").upper() in
                         ("TEXT", "VARCHAR", "CLOB", "") or "CHAR" in (c[2] or "").upper()]
            if not text_cols:
                continue
            col_list = ", ".join(f'"{c}"' for c in text_cols)
            rows = cur.execute(
                f'SELECT {col_list} FROM "{t}"').fetchall()
            n = sum(1 for r in rows if row_has_old(r))
            if n:
                leftover += n
                print(f'  SISA {n} baris di {t}!')
        except sqlite3.Error:
            pass
    con.close()

    print(f"Baris diperbarui: {total_rows}")
    print(f"Sisa nomor lama di DB: {leftover}" + (" ✓ BERSIH" if leftover == 0 else " ✗"))
    return 0 if leftover == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
