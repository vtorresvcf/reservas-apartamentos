// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">
      {/* Navbar */}

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative">
        {/* Imagen de error */}
        <div className="relative w-full max-w-lg h-64 sm:h-96 mb-8">
          <Image
            src="/not-found.png" // tu ilustración personalizada
            alt="Página no encontrada"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Mensaje creativo */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Ups… parece que este apartamento no existe. ¡Pero siempre hay otro
          esperando por ti!
        </p>

        {/* Botón volver al inicio */}
        <Link
          href="/"
          className="px-6 py-3 bg-azulado text-white rounded shadow hover:bg-blue-700 transition"
        >
          Volver al inicio
        </Link>
      </main>
    </div>
  );
}
