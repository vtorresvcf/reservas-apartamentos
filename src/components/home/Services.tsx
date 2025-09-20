"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Users,
  MapPin,
  Thermometer,
  Tv,
  Wifi,
  Coffee,
  Shield,
} from "lucide-react";

const serviceCategories = [
  {
    category: "Aparcamiento e instalaciones",
    icon: Car,
    items: ["Plaza de aparcamiento", "Aparcamiento incluido"],
  },
  {
    category: "Políticas",
    icon: Users,
    items: ["Accesible las 24h", "Se permiten niños"],
  },
  {
    category: "Características de la ubicación",
    icon: MapPin,
    items: ["Frente a la playa", "Vistas al mar"],
  },

  {
    category: "Calefacción y aire acondicionado",
    icon: Thermometer,
    items: ["Aire acondicionado", "Ventiladores de techo"],
  },
  {
    category: "Entretenimiento",
    icon: Tv,
    items: ["TV (Antena)"],
  },
  {
    category: "Oficina con Internet",
    icon: Wifi,
    items: ["Banda ancha inalámbrica Internet"],
  },
  {
    category: "Cocina y comedor",
    icon: Coffee,
    items: [
      "Licuadora",
      "Silla alta para niños",
      "Máquina de café",
      "Utensilios de cocina",
      "Lavavajillas",
      "Fuego de cocina",
      "Microondas",
      "Nevera",
      "Especias",
      "Tostador",
      "Aspirador",
    ],
  },
  {
    category: "Seguridad en el hogar",
    icon: Shield,
    items: [
      "Extintor de incendios",
      "Botiquín de primeros auxilios",
      "Detector de humo",
    ],
  },
];

export default function ServicesSection() {
  return (
    <div
      className="w-full py-12"
      style={{ background: "linear-gradient(to bottom, #f3f4f6, #ffffff)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-center text-transparent bg-clip-text cursor-default mb-6"
          style={{
            backgroundImage: "linear-gradient(90deg, #489eb1, #96c2db)",
          }}
        >
          Servicios
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10"
        >
          Todo lo que necesitas para disfrutar de tu estancia
        </motion.p>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Icono, título y lista reaccionan juntos al hover */}
                <motion.div
                  className="flex items-center mb-3"
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-azulado/20 dark:bg-azulado/10 mr-3 transition-colors duration-300 group-hover:bg-azulado/30"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <IconComponent className="w-6 h-6 text-azulado dark:text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-lg font-semibold text-neutral-700 dark:text-white"
                    whileHover={{ color: "#489eb1" }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.category}
                  </motion.h3>
                </motion.div>

                <motion.ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-1 ml-1">
                  {category.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ scale: 1.02, color: "#489eb1" }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
