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
                      rows={5}
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
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/m-lifting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.476h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href="https://twitter.com/m-lifting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/m-lifting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#db5d2c] transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
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
