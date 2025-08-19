"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Links dinámicos
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="relative px-4 py-4 flex items-center justify-between bg-white shadow">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold leading-none">
        <span className="text-blue-600">MiLogo</span>
      </Link>

      {/* Botón burger (mobile) */}
      <div className="lg:hidden">
        <button
          className="flex items-center text-blue-600 p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 
                111.414 1.414L11.414 10l4.293 4.293a1 1 0 
                01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 
                01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 
                010-1.414z"
              />
            ) : (
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 
              6h20v2H0v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Links centrados (desktop) + menú responsive */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white lg:bg-transparent lg:static lg:block`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-6 p-4 lg:p-0 text-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón login + selector de idioma */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Selector idioma */}
        <select className="border rounded px-2 py-1 text-sm">
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>

        {/* Login */}
        <Link
          href="/login"
          className="py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
