import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/fitness-hero-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#2C2C2C] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#2C2C2C] opacity-20 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center px-6 max-w-5xl z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-white">M-</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              LIFTING
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-3xl font-light mb-10 leading-relaxed"
        >
          Transformamos el{" "}
          <span className="font-semibold text-orange-400">fitness</span> con
          innovación tecnológica y
          <span className="font-semibold text-orange-400"> pasión</span> por el
          bienestar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href="#nosotros"
            className="relative group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-orange-500/50 inline-flex items-center gap-2"
          >
            <span>Conoce Más</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>

        {/* Misión, Visión y Objetivos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          {/* Misión */}
          <div className="bg-black/70 backdrop-blur-md border border-orange-500/20 p-6 rounded-xl hover:shadow-orange-500/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-[#FFFFFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#FFFFFF]">Misión</h2>
            <p className="text-[#FFFFFF]">
              Revolucionar la experiencia en gimnasios mediante soluciones
              tecnológicas que ofrecen entrenamientos adaptados, optimización en
              tiempo real y una comunidad conectada.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-black/70 backdrop-blur-md border border-orange-500/20 p-6 rounded-xl hover:shadow-orange-500/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-[#FFFFFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#FFFFFF]">Visión</h2>
            <p className="text-[#FFFFFF]">
              Liderar la transformación digital del fitness, convirtiendo cada
              gimnasio en un espacio de innovación, personalización y excelencia
              a través de tecnología de vanguardia.
            </p>
          </div>

          {/* Objetivos */}
          <div className="bg-black/70 backdrop-blur-md border border-orange-500/20 p-6 rounded-xl hover:shadow-orange-500/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-[#FFFFFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#FFFFFF]">
              Objetivos
            </h2>
            <ul className="space-y-2 text-[#FFFFFF]">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Liderazgo global en soluciones fitness</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Comunidad fitness inclusiva e inspiradora</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Innovación constante con tecnologías emergentes</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-gray-200">Descubre más</span>
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
