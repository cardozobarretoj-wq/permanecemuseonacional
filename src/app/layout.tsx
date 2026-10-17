import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Permanece — Archivo de lo retirado",
  description:
    "Archivo ciudadano de las piezas retiradas del Museo Nacional de Colombia en octubre de 2026. La memoria no pide permiso.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body>
        <div className="progreso" aria-hidden="true" />
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[var(--m)] py-5 text-[0.9375rem]">
          <Link href="/" className="display text-2xl">
            Permanece
          </Link>
          <nav className="flex items-center gap-6 md:gap-8" aria-label="Principal">
            <Link href="/#fuentes" className="enlace hidden sm:inline">
              Fuentes
            </Link>
            <Link href="#piezas" className="boton">
              Ver las piezas
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
