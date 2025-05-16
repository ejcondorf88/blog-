import React from "react";
import Footer from "../components/ui/footer";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes preguntas sobre M-Lifting o quieres saber cómo puede
              transformar tu experiencia en el gimnasio? ¡Estamos aquí para
              ayudarte!
            </p>
          </div>

          <div className="row flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 animate-fadeInLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Envíanos un mensaje
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db5d2c] focus:border-[#db5d2c] outline-none transition-colors"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#db5d2c] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ponte en contacto
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Estamos listos para responder tus dudas y ayudarte a
                    descubrir cómo M-Lifting puede llevar tu entrenamiento al
                    siguiente nivel.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-[#db5d2c] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="text-gray-700">info@m-lifting.com</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-[#db5d2c] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <p className="text-gray-700">+1 234 567 890</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Síguenos
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.476h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015.01 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.67.92.67 1.85v2.74c0 .26.18.58.69.48A9.96 9.96 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
