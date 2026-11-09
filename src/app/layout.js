import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Pertemuan 10",
  description: "Praktikum Next.js Route Handlers & Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={font.variable}>
      <body className="min-h-screen bg-stone-100 p-4 font-sans text-stone-900 antialiased selection:bg-teal-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
