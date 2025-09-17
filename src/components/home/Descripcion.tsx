"use client";

import { motion } from "motion/react";
import { HeroCarousel } from "../ui";

const MotionDiv = motion.create("div");

export default function Hero() {
  return (
    <section className=" items-center justify-center my-16  px-6 ">
      {/* Contenedor animado */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 items-center "
      >
        {/* Descripción más clara y legible */}
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl md:max-w-6xl mx-auto text-center">
          Tu escapada perfecta te espera en{" "}
          <span className="text-azulado font-semibold">
            Apartamentos Mushus
          </span>
          , a pocos pasos de la{" "}
          <span className="text-azulado font-semibold">playa de la Safor</span>.
          <br />
          Una ubicación exclusiva donde el mar, el buen clima y la tranquilidad
          se unen para ofrecerte una experiencia inolvidable.
          <br />
          Relájate en nuestros acogedores apartamentos y descubre todo lo que
          este rincón mediterráneo tiene preparado para ti.
        </p>
        <div className="w-full max-w-6xl mt-10">
          <HeroCarousel />
        </div>
      </MotionDiv>
    </section>
  );
}
