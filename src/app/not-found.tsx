"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col  items-center justify-center px-6  bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl w-full p-8 md:p-12"
      >
        {/* Imagen con fondo transparente */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Image
            src="/foto_de_coco.png" // PNG transparente
            alt="Perro esperando"
            width={320}
            height={320}
            className="object-contain "
            priority
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-azulado">
            404
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Parece que esta página se ha ido de vacaciones 🏖️ <br />
            Pero no te preocupes,{" "}
            <span className="text-azulado font-semibold">
              ¡aquí siempre hay un sitio para ti!
            </span>
          </p>

          <Link
            href="/"
            className="inline-block bg-azulado text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-all shadow-md hover:shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
