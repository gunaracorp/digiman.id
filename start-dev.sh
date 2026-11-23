#!/bin/bash
cd /home/z/my-project/digiman.id
export DATABASE_URL="file:/home/z/my-project/digiman.id/db/custom.db"
export AUTH_SECRET="digiman-admin-secret-2025-pt-digital-bisnis-manajemen"
bun run dev
