import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Pertemuan 10</h1>
      <p><Link href="/register">Register</Link></p>
      <p><Link href="/login">Login</Link></p>
    </main>
  );
}
