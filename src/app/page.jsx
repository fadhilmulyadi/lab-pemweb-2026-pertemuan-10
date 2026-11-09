import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 max-w-md rounded-xl border border-stone-200 bg-white p-6 shadow-lg shadow-stone-900/5 sm:mt-[8vh] sm:p-8">
      <h1 className="text-2xl font-bold tracking-tight">Pertemuan 10</h1>
      <p className="mt-1 mb-6 text-stone-600">Praktikum Next.js Route Handlers &amp; Auth.</p>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/login"
          className="rounded-lg bg-teal-800 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 font-semibold text-teal-800 transition-colors hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
