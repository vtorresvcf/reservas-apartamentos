"use client";

import React from "react";
import CardContainer, { CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui";
import { Users } from "lucide-react";

const apartments = [
  {
    title: "Apartamento en la Playa de Oliva",
    view: "VISTA MAR",
    beds: "1 ó 2 Camas dobles",
    maxPersons: 4,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "Apartamento en la Playa de Miramar",
    view: "VISTA MAR",
    beds: "1 ó 2 Camas dobles",
    maxPersons: 3,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2560&auto=format&fit=crop",
  },
];

export default function BannerApartamentos() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-4xl font-semibold tracking-tight text-azulado text-center cursor-default"
        >
          Apartamentos
        </motion.h2>

        {/* Subtítulo animado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-2"
        >
          <TextGenerateEffect
            text="Donde cada día comienza con una sonrisa"
            className="text-lg md:text-2xl font-medium text-neutral-600 dark:text-neutral-300 drop-shadow-sm leading-snug cursor-default"
            duration={1.2}
          />
        </motion.div>
      </motion.div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-8">
        {apartments.map((apt, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] sm:h-[520px] rounded-2xl p-6 border shadow-lg overflow-hidden">
                {/* Vista */}
                <CardItem
                  translateZ="40"
                  className="text-xs text-azulado font-semibold mb-1 uppercase"
                >
                  {apt.view}
                </CardItem>

                {/* Título */}
                <CardItem
                  translateZ="50"
                  className="cursor-default text-xl sm:text-2xl font-semibold tracking-tight text-neutral-700 dark:text-white line-clamp-2 mb-2"
                >
                  {apt.title}
                </CardItem>

                {/* Camas y personas */}
                <CardItem
                  translateZ="60"
                  className="flex items-center text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-4"
                >
                  <span className="mr-2">{apt.beds}</span>
                  <Users className="w-4 h-4 mr-1 text-azulado" />
                  <span>{apt.maxPersons}</span>
                </CardItem>

                {/* Imagen */}
                <CardItem
                  translateZ="100"
                  className="w-full mt-2 h-[250px] sm:h-[300px] overflow-hidden rounded-xl"
                >
                  <img
                    src={apt.image}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl transition-shadow duration-300 group-hover/card:shadow-xl"
                    alt={apt.title}
                  />
                </CardItem>

                {/* Botones Ver más → y Reservar */}
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white bg-white/20 backdrop-blur-sm hover:bg-white/50 shadow-sm transition transform"
                  >
                    Ver más →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-azulado hover:bg-cyan-500 text-xs sm:text-sm font-bold text-white shadow-sm transition transform"
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
