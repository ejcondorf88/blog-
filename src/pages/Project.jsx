import React from "react";
import Footer from "../components/ui/footer";

const PortfolioPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Portfolio Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestra Innovación: M-Lifting
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre M-Lifting, nuestra solución revolucionaria que redefine
              la experiencia en el gimnasio con tecnología de vanguardia y
              personalización sin precedentes.
            </p>
          </div>

          <div className="row flex flex-col md:flex-row gap-12">
            {/* Product Showcase */}
            <div className="w-full md:w-1/2 animate-fadeInLeft">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/M-Lifting-app-screenshot.jpg"
                  className="w-full h-full object-cover"
                  alt="M-Lifting App"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                M-Lifting: Tu Compañero Fitness Definitivo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                M-Lifting es una aplicación móvil diseñada para resolver la
                falta de organización en las rutinas de gimnasio, ofreciendo una
                experiencia personalizada e interactiva. Con gestión inteligente
                de aforo, rutinas adaptadas y un chatbot impulsado por IA,
                M-Lifting transforma cómo los usuarios entrenan, optimizando
                cada sesión para maximizar resultados.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Innovaciones Clave
              </h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#db5d2c] mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-gray-700">
                    <strong>Personalización Avanzada:</strong> Crea y sigue
                    rutinas diarias adaptadas a tus objetivos, con pasos claros
                    y recomendaciones dinámicas.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#db5d2c] mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-gray-700">
                    <strong>Gestión Inteligente en Tiempo Real:</strong>{" "}
                    Visualiza la disponibilidad de equipos y recibe rutas de
                    entrenamiento optimizadas para evitar esperas.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#db5d2c] mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-gray-700">
                    <strong>Chatbot con IA:</strong> Interactúa con un asistente
                    virtual que te guía en ejercicios (por ejemplo, pasos para
                    un press banca) y te envía recordatorios.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#db5d2c] mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-gray-700">
                    <strong>Contenido Multimedia:</strong> Accede a videos
                    instructivos para realizar ejercicios con técnica perfecta.
                  </p>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Tecnologías de Punta
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-[#db5d2c] text-white px-4 py-2 rounded-full text-sm font-medium">
                  React Native
                </span>
                <span className="bg-[#db5d2c] text-white px-4 py-2 rounded-full text-sm font-medium">
                  FastAPI
                </span>
                <span className="bg-[#db5d2c] text-white px-4 py-2 rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="bg-[#db5d2c] text-white px-4 py-2 rounded-full text-sm font-medium">
                  AI Chatbot
                </span>
              </div>

              <a
                href="/download"
                className="inline-block bg-[#db5d2c] text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md"
              >
                Descarga M-Lifting Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
