"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-screen h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/dog.jpg"
        alt="Página no encontrada"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido centrado encima */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">SORRY</h1>
        <p className="text-lg md:text-xl mb-8">
          Parece que este apartamento no existe… pero siempre hay otro
          esperándote 🏡
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
          >
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
