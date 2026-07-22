import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import PageShell from "@/components/PageShell";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "KSR — Bergabung Bersama Kami",
  description:
    "Unit Kegiatan Mahasiswa KSR — pelatihan tanggap darurat, kerja tim, dan pengabdian nyata bagi sesama.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
