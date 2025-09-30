// app/layout.tsx
import { Navbar, Footer } from "@/components/layout";
import "../../app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apartamentos Mushus",
  description: "Reserva tu apartamento favorito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col text-textgray">
        {/* Navbar visible en todas las páginas normales */}
        <Navbar />

        <main className="flex-1 w-full">{children}</main>

        {/* Footer visible en todas las páginas normales */}
        <Footer />
      </body>
    </html>
  );
}
