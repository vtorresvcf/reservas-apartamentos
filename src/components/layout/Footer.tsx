"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full text-gray-700 py-8 px-6 border-t border-gray-300 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Logo y contacto */}
        <div className="flex flex-col md:flex-row justify-around items-center w-full">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-azulado hover:text-cyan-600 transition-colors"
            >
              Apartamentos Mushus
            </Link>
          </div>

          {/* Contacto */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:items-end items-center mt-4 md:mt-0 space-y-1"
          >
            <div className="flex items-center space-x-2 hover:text-azulado transition-colors cursor-pointer">
              <Phone size={20} />
              <span className="font-medium">+34 654 033 603</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-azulado transition-colors cursor-pointer">
              <Mail size={20} />
              <span className="font-medium">vtorresvcf@gmail.com</span>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="w-full border-t border-gray-300"></div>

        {/* Legal + Copyright */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Apartamentos Mushus. Todos los derechos
            reservados. Una experiencia para que te sientas en casa.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: "/terminos", label: "Términos y condiciones" },
              { href: "/politica-privacidad", label: "Política de privacidad" },
              { href: "/cookies", label: "Cookies" },
            ].map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2, scale: 1.02 }}
                className="transition-transform"
              >
                <Link
                  href={link.href}
                  className="font-bold underline hover:text-azulado transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
