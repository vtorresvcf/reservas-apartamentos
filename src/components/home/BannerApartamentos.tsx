"use client";

import React from "react";
import CardContainer, { CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

const apartments = [
  {
    title: "Apartamento en la Playa",
    description: "2 habitaciones · terraza · vistas al mar",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "Apartamento en el Centro",
    description: "1 habitación · cerca de todo · moderno",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2560&auto=format&fit=crop",
  },
];

export default function BannerApartamentos() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Título principal */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-neutral-700 dark:text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Apartamentos
      </motion.h2>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {apartments.map((apt, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] sm:h-[520px] rounded-2xl p-6 border shadow-lg">
                {/* Título */}
                <CardItem
                  translateZ="50"
                  className="text-2xl sm:text-3xl font-bold text-neutral-700 dark:text-white"
                >
                  {apt.title}
                </CardItem>

                {/* Descripción */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm sm:text-base max-w-sm mt-3 dark:text-neutral-300"
                >
                  {apt.description}
                </CardItem>

                {/* Imagen */}
                <CardItem
                  translateZ="100"
                  className="w-full mt-5 h-[300px] sm:h-[350px]"
                >
                  <img
                    src={apt.image}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={apt.title}
                  />
                </CardItem>

                {/* Botones */}
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                  >
                    Ver más →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-xs sm:text-sm font-bold text-white transition"
                  >
                    Reservar
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
