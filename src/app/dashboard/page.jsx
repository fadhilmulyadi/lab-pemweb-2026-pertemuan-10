"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  if (!user) return <p className="mt-[20vh] text-center text-stone-600">Memuat...</p>;

  return (
    <main className="mx-auto mt-6 max-w-xl rounded-xl border border-stone-200 bg-white p-6 shadow-lg shadow-stone-900/5 sm:mt-[8vh] sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <span className="mt-1 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
            {user.role}
          </span>
        </div>
        <button
          className="cursor-pointer rounded-lg border border-stone-300 bg-white px-4 py-2 font-semibold text-teal-800 transition-colors hover:bg-teal-50"
        >
          Logout
        </button>
      </div>

      <section className="mb-4 rounded-xl border border-stone-200 p-5">
        <h2 className="mb-1 font-semibold">Selamat datang, Admin {user.nama}!</h2>
        <p className="mb-4 text-stone-600">Tombol Hapus terbuka. Kamu punya akses penuh.</p>
        <div className="flex flex-wrap gap-2">
          <button className="cursor-pointer rounded-lg bg-red-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-800">
            Hapus Data
          </button>
          <button className="cursor-pointer rounded-lg border border-stone-300 px-4 py-2 font-semibold text-teal-800 transition-colors hover:bg-teal-50">
            Edit Data
          </button>
          <button className="cursor-pointer rounded-lg border border-stone-300 px-4 py-2 font-semibold text-teal-800 transition-colors hover:bg-teal-50">
            Tambah Data
          </button>
        </div>
      </section>

      <section className="mb-4 rounded-xl border border-stone-200 p-5">
        <h2 className="mb-1 font-semibold">Halo, Editor {user.nama}!</h2>
        <p className="mb-4 text-stone-600">Kamu bisa menambah dan mengubah data.</p>
        <div className="flex flex-wrap gap-2">
          <button className="cursor-pointer rounded-lg border border-stone-300 px-4 py-2 font-semibold text-teal-800 transition-colors hover:bg-teal-50">
            Edit Data
          </button>
          <button className="cursor-pointer rounded-lg border border-stone-300 px-4 py-2 font-semibold text-teal-800 transition-colors hover:bg-teal-50">
            Tambah Data
          </button>
        </div>
      </section>

      <section className="rounded-xl border border-stone-200 p-5">
        <h2 className="mb-1 font-semibold">Halo, {user.nama}!</h2>
        <p className="text-stone-600">Kamu login sebagai user biasa. Hanya bisa melihat data.</p>
      </section>
    </main>
  );
}
