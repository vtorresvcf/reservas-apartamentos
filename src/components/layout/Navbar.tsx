"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Mail, X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="relative w-full shadow bg-white z-50 lg:py-4 xl:py-2">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-bold text-azulado mx-auto"
        >
          Apartamentos Mushus
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8">
          <Link
            href="/"
            className="font-semibold hover:text-azulado transition text-center"
          >
            Inicio
          </Link>

          {/* Dropdown Apartamentos */}
          <div className="relative text-center">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex flex-col items-center font-semibold hover:text-azulado transition"
            >
              Apartamentos
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-white border rounded shadow-lg overflow-hidden transition-all duration-300 ${
                isDropdownOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                href="/apartamento1"
                className="block px-4 py-2 hover:bg-gray-100 transition text-center"
              >
                Apartamento 1
              </Link>
              <Link
                href="/apartamento2"
                className="block px-4 py-2 hover:bg-gray-100 transition text-center"
              >
                Apartamento 2
              </Link>
            </div>
          </div>

          <Link
            href="/contacto"
            className="font-semibold hover:text-azulado transition text-center"
          >
            Contacto
          </Link>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex lg:flex-col lg:py-6 xl:flex-row xl:py-0 items-center ml-auto space-x-6 xl:space-x-6">
          <div className="flex items-center space-x-2 hover:text-azulado transition cursor-pointer">
            <Phone size={20} />
            <span className="font-medium">+34 654 033 603</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-azulado transition cursor-pointer">
            <Mail size={20} />
            <span className="font-medium">vtorresvcf@gmail.com</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-azulado"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 text-center ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 font-semibold hover:text-azulado transition"
            >
              Inicio
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-center items-center w-full py-2 px-4 font-semibold hover:text-azulado transition"
            >
              Apartamentos
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/apartamento1"
                className="block py-2 px-4 hover:bg-gray-100 rounded transition"
              >
                Apartamento 1
              </Link>
              <Link
                href="/apartamento2"
                className="block py-2 px-4 hover:bg-gray-100 rounded transition"
              >
                Apartamento 2
              </Link>
            </div>
          </li>

          <li>
            <Link
              href="/contacto"
              className="block py-2 px-4 font-semibold hover:text-azulado transition"
            >
              Contacto
            </Link>
          </li>

          {/* Contact info mobile */}
          <li className="pt-4 border-t">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center items-center space-x-2 ">
                <Phone size={20} />
                <span className="font-medium">+34 654 033 603</span>
              </div>
              <div className="flex justify-center items-center space-x-2 ">
                <Mail size={20} />
                <span className="font-medium ">vtorresvcf@gmail.com</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
