import { Navbar, Footer } from "@/components/layout";
import "./globals.css";
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
      <body className="min-h-screen flex flex-col text-textgray ">
        <Navbar />

        {/* Contenedor principal centrado */}
        <main className="flex-1 w-full p-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
