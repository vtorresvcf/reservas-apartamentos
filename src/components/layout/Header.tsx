"use client";

import Image from "next/image";
import { TextGenerateEffect, MotionAnchor } from "../ui";

export default function Header() {
  return (
    <header className="relative h-[60vh] flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/beach4.jpg"
          alt="Vista de una playa en Valencia al atardecer"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-full">
        <TextGenerateEffect
          text="Tu escapada junto al mar empieza aquí"
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
        />
        <p className="text-lg md:text-xl font-bold mb-6 drop-shadow-md mt-8">
          Apartamentos con encanto en la Costa de Valencia.
        </p>

        {/* CTA animado */}
        <MotionAnchor
          href="#apartamentos"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
          }}
          className="inline-block mt-4 px-8 py-4 bg-white text-azulado font-semibold rounded-lg shadow-lg border-2 border-azulado transition hover:bg-azulado hover:text-white hover:border-white"
        >
          Ver apartamentos
        </MotionAnchor>
      </div>
    </header>
  );
}
