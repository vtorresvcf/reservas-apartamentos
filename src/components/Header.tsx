import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Header() {
  return (
    <header className="relative h-[50vh] flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/beach4.jpg"
          alt="Vista de una playa en Valencia al atardecer"
          fill
          priority
          className="object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-full">
        <TextGenerateEffect
          text="Tu escapada junto al mar empieza aquí"
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        />
        <p className="text-lg md:text-xl font-bold mb-6 drop-shadow-md mt-5">
          Apartamentos con encanto en la Costa de Valencia.
        </p>
        <button className="px-6 py-3 bg-white text-azulado font-semibold rounded-2xl shadow-lg hover:bg-blue-50 transition hover:scale-105 active:scale-95">
          Ver disponibilidad
        </button>
      </div>
    </header>
  );
}
