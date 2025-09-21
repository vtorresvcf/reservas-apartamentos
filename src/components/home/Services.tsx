"use client";

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

const MotionDiv = motion.create("div");

const serviceCategories = [
  {
    icon: <Car size={32} className="text-azulado" />,
    title: "Aparcamiento e instalaciones",
    description: "Plaza de aparcamiento, aparcamiento incluido",
  },
  {
    icon: <Users size={32} className="text-azulado" />,
    title: "Políticas",
    description: "Accesible las 24h, se permiten niños",
  },
  {
    icon: <MapPin size={32} className="text-azulado" />,
    title: "Ubicación",
    description: "Frente a la playa, vistas al mar",
  },
  {
    icon: <Thermometer size={32} className="text-azulado" />,
    title: "Confort",
    description: "Aire acondicionado, ventiladores de techo",
  },
  {
    icon: <Tv size={32} className="text-azulado" />,
    title: "Entretenimiento",
    description: "TV disponible",
  },
  {
    icon: <Wifi size={32} className="text-azulado" />,
    title: "Oficina con Internet",
    description: "Banda ancha inalámbrica",
  },
  {
    icon: <Coffee size={32} className="text-azulado" />,
    title: "Cocina y comedor",
    description: "Cafetera, lavavajillas, microondas y más",
  },
  {
    icon: <Shield size={32} className="text-azulado" />,
    title: "Seguridad",
    description: "Extintor, botiquín, detector de humo",
  },
];

export default function ServicesBanner() {
  return (
    <section className="w-full bg-gray-50 py-16 relative overflow-hidden cursor-default">
      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Servicios pensados para tu{" "}
        <span className="text-azulado underline decoration-azulado/50">
          comodidad
        </span>
      </motion.h2>

      {/* Grid de servicios */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
        {serviceCategories.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105"
          >
            {/* Icono animado */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            {/* Título */}
            <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 hover:text-azulado">
              {service.title}
            </h3>
            {/* Descripción */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
          </MotionDiv>
        ))}
      </div>

      {/* Decoraciones sutiles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>
    </section>
  );
}
