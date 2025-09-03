import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Web de Apartamentos",
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
        <Navbar />
        <header className="bg-gray-100 p-4">
          <h1 className={montserrat.className}>Mi Web de Apartamentos</h1>
        </header>
        <Header />
        {/* Contenedor principal centrado */}
        <main className="flex-1 flex items-center justify-center p-4">
          {children}
        </main>

        <footer className="bg-gray-100 p-4 text-center">
          © 2025 Mi Web de Apartamentos
        </footer>
      </body>
    </html>
  );
}
