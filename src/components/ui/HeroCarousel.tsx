// components/HeroCarousel.tsx
"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { src: "/images/playa-safor.jpg", alt: "Playa de la Safor" },
  { src: "/images/apartamento-interior.jpg", alt: "Apartamento interior" },
  { src: "/images/terraza.jpg", alt: "Terraza/Balcón" },
  { src: "/images/alrededores.jpg", alt: "Alrededores" },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      #TODO PONER EL SWIPER
    </section>
  );
}
