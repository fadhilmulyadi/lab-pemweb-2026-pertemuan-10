import "./globals.css";

export const metadata = {
  title: "Pertemuan 10",
  description: "Praktikum Next.js Route Handlers & Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
