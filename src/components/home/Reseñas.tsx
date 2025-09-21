"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Review {
  name: string;
  stars: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sara GR",
    stars: 5,
    date: "Hace 2 semanas",
    text: "Ha sido una experiencia muy placentera en la suite 502. Las habitaciones son preciosas y está muy cuidada …",
  },
  {
    name: "Andrés de Pando Asensi",
    stars: 5,
    date: "Hace 1 mes",
    text: "Excelente Hotel familiar en primera línea de playa. El restaurante Mar tiene platos muy buenos especialmente …",
  },
  {
    name: "Margarita Polaina Mercadal",
    stars: 5,
    date: "Hace 1 mes",
    text: "Nos hemos casado en el hotel voramar, estamos súper felices porque todo salió a la perfección son súper …",
  },
  {
    name: "Carlos Méndez",
    stars: 5,
    date: "Hace 2 meses",
    text: "Estancia increíble, servicio excelente y la ubicación inmejorable. Sin duda repetiremos.",
  },
];

export default function InfiniteReviewsResponsive() {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Ancho relativo de cada card
  const cardWidth = `${100 / cardsToShow}%`;

  return (
    <section className="w-full bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-azulado">
          Opiniones de nuestros clientes
        </h2>
        <p className="text-gray-600 mt-2">
          4,4 <span className="text-gray-400">• 7.828 reviews</span>
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              style={{ flex: `0 0 ${cardWidth}` }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-lg text-center mb-1">
                {review.name}
              </h3>
              <p className="text-yellow-400 text-center mb-1">
                {"★".repeat(review.stars)}
              </p>
              <p className="text-gray-400 text-sm text-center mb-2">
                {review.date}
              </p>
              <p className="text-gray-700 text-center">{review.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
