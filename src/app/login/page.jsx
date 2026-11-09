"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");

  return (
    <main className="mx-auto mt-6 max-w-md rounded-xl border border-stone-200 bg-white p-6 shadow-lg shadow-stone-900/5 sm:mt-[8vh] sm:p-8">
      <h1 className="text-2xl font-bold tracking-tight">Login</h1>
      <p className="mt-1 mb-6 text-stone-600">Masuk untuk membuka dashboard.</p>

      <form className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold">
          Email
          <input
            type="email"
            placeholder="nama@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border border-stone-300 px-3 py-2.5 text-base font-normal placeholder:text-stone-500 focus:border-teal-800 focus:ring-3 focus:ring-teal-100 focus:outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Password
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg border border-stone-300 px-3 py-2.5 text-base font-normal placeholder:text-stone-500 focus:border-teal-800 focus:ring-3 focus:ring-teal-100 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-teal-800 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
        >
          Login
        </button>
      </form>

      {pesan && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">{pesan}</p>}

      <p className="mt-6 text-sm text-stone-600">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold text-teal-800 underline underline-offset-3">
          Daftar
        </Link>
      </p>
    </main>
  );
}
