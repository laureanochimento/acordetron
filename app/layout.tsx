import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cancionero AR · Folklore & Rock Nacional",
  description: "Letra y acordes de guitarra de folklore y rock nacional argentino",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
