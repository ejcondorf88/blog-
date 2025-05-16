import React from "react";
import Footer from "../components/ui/footer";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 animate-fadeInLeft">
              <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/fitness-team.jpg"
                  className="w-full h-full object-cover"
                  alt="M-Lifting Team"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left animate-fadeInRight">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Descubre M-Lifting
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos los innovadores detrás de la próxima generación de fitness
                digital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                En M-Lifting, combinamos pasión por el fitness con tecnología de
                punta. Nuestro equipo, compuesto por desarrolladores,
                entrenadores y entusiastas del bienestar, trabaja para
                revolucionar tu experiencia en el gimnasio. Creamos una app que
                personaliza tus entrenamientos, optimiza el uso del espacio en
                tiempo real y te conecta con una comunidad vibrante.
              </p>
              <h5 className="text-xl font-semibold text-gray-800 mb-3">
                ¿Por qué elegir M-Lifting?
              </h5>
              <p className="text-gray-700 leading-relaxed mb-8">
                Con algoritmos inteligentes, un diseño intuitivo y un enfoque en
                tus metas, M-Lifting te ofrece rutinas únicas, herramientas de
                motivación y una experiencia fluida, sin importar si eres
                principiante o experto.
              </p>
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
    </>
  );
};

export default About;
