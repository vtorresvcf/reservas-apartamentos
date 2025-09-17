"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const slides = [
  { src: "/playa-safor.jpg", alt: "Playa de la Safor" },
  { src: "/cocina.jpg", alt: "Cocina" },
  { src: "/balcones.jpg", alt: "Balcones" },
  { src: "/habitacion.jpg", alt: "Habitación" },
  { src: "/comedor.jpg", alt: "Comedor" },
];

export default function HeroCarousel() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full my-10 relative">
      {/* Lightbox overlay */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selected}
              alt="Imagen ampliada"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // ⬅️ autoplay cada 3s
        className="max-w-6xl mx-auto"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelected(slide.src)}
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
