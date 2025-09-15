"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TextGenerateEffect, TypewriterEffect, MotionAnchor } from "../ui";

export default function Header() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const subtitleWords = [
    { text: "Apartamentos" },
    { text: "con" },
    { text: "encanto" },
    { text: "en" },
    { text: "la" },
    { text: "Costa" },
    { text: "de" },
    { text: "Valencia.", className: "font-bold drop-shadow-md" },
  ];

  // Activar typewriter un poco antes de que termine el título
  useEffect(() => {
    const timeoutTypewriter = setTimeout(() => setShowTypewriter(true), 1000);
    return () => clearTimeout(timeoutTypewriter);
  }, []);

  // Mostrar CTA cuando termine el typewriter
  useEffect(() => {
    if (showTypewriter) {
      const totalChars = subtitleWords.reduce(
        (acc, word) => acc + word.text.length,
        0
      );
      const charDelay = 50; // ms por letra
      const timeoutCTA = setTimeout(
        () => setShowCTA(true),
        totalChars * charDelay
      );
      return () => clearTimeout(timeoutCTA);
    }
  }, [showTypewriter]);

  return (
    <header className="relative h-[60vh] flex flex-col items-center justify-center">
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
      <div className="relative z-10 text-center text-white px-4 max-w-full flex flex-col items-center">
        {/* Contenedor con altura reservada */}
        <div className="min-h-[5rem] md:min-h-[7rem]">
          <TextGenerateEffect
            text="Tu escapada junto al mar empieza aquí"
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
            duration={1.5}
          />
        </div>

        {/* Contenedor del typewriter con altura reservada */}
        <div className="min-h-[2.5rem] md:min-h-[3rem] mt-4">
          {showTypewriter && (
            <TypewriterEffect
              words={subtitleWords}
              className="text-sm md:text-base font-semibold text-white text-center"
              cursorClassName="bg-white"
            />
          )}
        </div>

        {/* Contenedor del CTA con espacio reservado */}
        <div className="min-h-[3.5rem] mt-6 flex justify-center">
          <MotionAnchor
            href="#apartamentos"
            initial={{ opacity: 0, y: 20 }}
            animate={showCTA ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            className="inline-block px-8 py-4 bg-white text-azulado font-semibold rounded-lg shadow-lg border-2 border-azulado transition hover:bg-azulado hover:text-white hover:border-white"
          >
            Ver apartamentos
          </MotionAnchor>
        </div>
      </div>
    </header>
  );
}
