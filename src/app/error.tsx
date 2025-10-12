"use client";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="relative w-screen h-screen">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/dog.jpg"
          alt="Error del servidor"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">UPS!</h1>
        <p className="text-lg md:text-xl mb-8">
          Ha ocurrido un error inesperado. Intenta de nuevo más tarde.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
          >
            Ir al inicio
          </Link>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
          >
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );
}
