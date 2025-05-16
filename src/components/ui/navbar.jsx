import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#db5d2c]">M-LIFTING</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#inicio" className="hover:text-[#db5d2c]">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-[#db5d2c]">
              Servicios
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-[#db5d2c]">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#portafolio" className="hover:text-[#db5d2c]">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-[#db5d2c]">
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
