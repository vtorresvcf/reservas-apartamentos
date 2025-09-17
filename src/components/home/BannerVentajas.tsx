"use client";
import { motion } from "motion/react";
import { Euro, Calendar, User, Headphones } from "lucide-react";
import { LampContainer } from "../ui/lamp";
const MotionDiv = motion.create("div");
const benefits = [
  {
    icon: <Euro size={32} className="text-azulado" />,
    title: "Mejor precio garantizado",
    description: "Reserva directamente y asegura el mejor precio disponible.",
  },
  {
    icon: <Calendar size={32} className="text-azulado" />,
    title: "Cancelación flexible",
    description: "Cambia o cancela tu reserva sin complicaciones.",
  },
  {
    icon: <User size={32} className="text-azulado" />,
    title: "Check-in personalizado",
    description: "Te damos la bienvenida de forma exclusiva y cómoda.",
  },
  {
    icon: <Headphones size={32} className="text-azulado" />,
    title: "Atención 24/7",
    description:
      "Siempre disponibles para ayudarte antes y durante tu estancia.",
  },
];
export default function BenefitsBanner() {
  return (
    <section className="w-full bg-gray-50 py-16 relative overflow-hidden">
      {/* Título principal */}{" "}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12 cursor-context-menu"
      >
        {" "}
        "Reserva directo y disfruta de{" "}
        <span className="text-azulado underline decoration-azulado/50">
          {" "}
          beneficios exclusivos"{" "}
        </span>{" "}
      </motion.h2>{" "}
      {/* Grid de beneficios */}{" "}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {" "}
        {benefits.map((benefit, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center gap-4 cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            {" "}
            {/* Icono con animación sutil al hover */}{" "}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                color: "#FFD700",
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {" "}
              {benefit.icon}{" "}
            </motion.div>{" "}
            {/* Título con efecto glow al hover */}{" "}
            <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 hover:text-azulado/80">
              {" "}
              {benefit.title}{" "}
            </h3>{" "}
            {/* Descripción */}{" "}
            <p className="text-gray-600 text-sm md:text-base">
              {" "}
              {benefit.description}{" "}
            </p>{" "}
          </MotionDiv>
        ))}{" "}
      </div>{" "}
      {/* Decoraciones parallax sutil */}{" "}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>{" "}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>{" "}
    </section>
  );
}
