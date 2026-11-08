# Pertemuan 10 — Next.js Route Handlers & Auth

Starter project praktikum **Bab 10: Route Handlers & Auth**. Kamu akan membuat API register dan login memakai Route Handler Next.js + PostgreSQL, lalu dashboard yang tampil berbeda untuk **3 role**: `admin`, `editor`, dan `user`.

Setup, koneksi database, dan contoh API sudah disiapkan. Bagian yang bertanda `// TODO` adalah tugasmu.

## Prasyarat

- **Node.js 20.9 atau lebih baru** (dibutuhkan Next.js 16). Cek dengan `node -v`.
- **PostgreSQL** + **pgAdmin**
- **Git**

## Setup setelah clone

1. Clone repo lalu masuk ke folder project:
   ```bash
   git clone <URL_REPO>
   cd pertemuan_10
   ```
2. Install dependency:
   ```bash
   npm install
   ```
3. Salin `.env.example` menjadi `.env.local`:
   ```bash
   # Windows CMD
   copy .env.example .env.local

   # Windows PowerShell
   Copy-Item .env.example .env.local

   # Mac / Linux
   cp .env.example .env.local
   ```
   Lalu buka `.env.local` dan ganti `PASSWORD_KAMU` dengan password PostgreSQL kamu.
4. Buka pgAdmin, buat database baru bernama `pertemuan_10`. Klik kanan database tersebut → **Query Tool**, lalu salin dan jalankan seluruh isi file `database.sql`. Hasil `SELECT` di akhir harus menampilkan 2 baris.
5. Jalankan server development:
   ```bash
   npm run dev
   ```
   Buka http://localhost:3000 dan http://localhost:3000/api/hello (harus tampil `{"pesan":"Halo dari API!"}`).

## Catatan rawan error

- Nama file harus persis **`.env.local`** (diawali titik, bukan `env.local` atau `.env.local.txt`).
- **Restart server** (`Ctrl + C` lalu `npm run dev` lagi) setiap kali mengubah `.env.local`.
- **Tidak boleh ada spasi** di sekitar `=`. Benar: `DATABASE_URL=postgresql://...`, salah: `DATABASE_URL = postgresql://...`.

## Daftar tugas praktikum

Kerjakan sesuai urutan berikut.

| Urutan | File | Tugas |
|---|---|---|
| 1 | `src/app/api/register/route.js` | API register (INSERT user baru, role dikunci `user`) |
| 2 | `src/app/register/page.jsx` | Form register |
| 3 | `src/app/api/login/route.js` | API login (cek email + password) |
| 4 | `src/app/login/page.jsx` | Form login + simpan user ke localStorage |
| 5 | `src/app/dashboard/page.jsx` | Dashboard berdasarkan role + logout |

## Akun uji

| Role | Email | Password |
|---|---|---|
| admin | admin@gmail.com | admin123 |
| editor | editor@gmail.com | editor123 |
| user | daftar sendiri lewat `/register` | bebas |

## Struktur folder

```
pertemuan_10/
├── database.sql            # script tabel users + data awal
├── .env.example            # contoh isi .env.local
├── jsconfig.json           # alias @/* → ./src/*
├── package.json
└── src/
    ├── lib/
    │   └── db.js           # koneksi PostgreSQL (pg Pool)
    └── app/
        ├── layout.js
        ├── globals.css
        ├── page.jsx        # halaman utama
        ├── register/
        │   └── page.jsx    # TODO
        ├── login/
        │   └── page.jsx    # TODO
        ├── dashboard/
        │   └── page.jsx    # TODO
        └── api/
            ├── hello/
            │   └── route.js    # contoh API (sudah jadi)
            ├── register/
            │   └── route.js    # TODO
            └── login/
                └── route.js    # TODO
```

## Troubleshooting

| Error / Gejala | Penyebab | Solusi |
|---|---|---|
| `ECONNREFUSED 127.0.0.1:5432` | PostgreSQL belum berjalan | Nyalakan service PostgreSQL (Windows: Services → postgresql), cek port 5432 |
| `password authentication failed for user "postgres"` | Password di `.env.local` salah | Perbaiki `PASSWORD_KAMU`, lalu restart server |
| `DATABASE_URL` undefined / koneksi ke user lain | File bukan `.env.local`, ada spasi di `=`, atau server belum direstart | Cek nama file & format, lalu restart `npm run dev` |
| `relation "users" does not exist` | `database.sql` belum dijalankan, atau dijalankan di database lain | Jalankan `database.sql` di database `pertemuan_10` |
| Error tentang hooks / `useState` di Server Component | Lupa `"use client"` | Tambahkan `"use client";` di baris pertama file page |
| `localStorage is not defined` | localStorage dibaca saat render (di server) | Pindahkan pembacaan localStorage ke dalam `useEffect` |
| `Module not found: Can't resolve '@/lib/db'` | Alias atau lokasi file salah | Pastikan file ada di `src/lib/db.js` dan `jsconfig.json` berisi `"@/*": ["./src/*"]` |
| 404 Not Found | Nama folder/file salah | File harus bernama `page.jsx` (halaman) atau `route.js` (API) di folder yang benar |
| Dashboard kosong setelah login | Penulisan role tidak persis | Role harus huruf kecil: `"admin"`, `"editor"`, `"user"` (di database dan di kode) |

## ⚠️ Peringatan

Project ini **hanya untuk belajar**. Password disimpan sebagai teks biasa (plaintext) dan data user/role disimpan di `localStorage` yang bisa diubah sendiri oleh pengguna lewat DevTools. Ini **bukan** sistem keamanan sungguhan. Aplikasi nyata harus memakai hashing password (misalnya bcrypt) dan sesi/token yang diverifikasi di server.
