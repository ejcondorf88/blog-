import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/Project";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/portafolio" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#db5d2c]">
          M-LIFTING
        </Link>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-base">
          <li>
            <Link to="/" className="hover:text-[#db5d2c]">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-[#db5d2c]">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/portafolio" className="hover:text-[#db5d2c]">
              Portafolio
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-[#db5d2c]">
              Contáctanos
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#db5d2c]">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">M-LIFTING</h3>
            <p>Soluciones creativas para su empresa</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>info@sacde.com</p>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#db5d2c]">
                Facebook
              </a>
              <a href="#" className="hover:text-[#db5d2c]">
                Twitter
              </a>
              <a href="#" className="hover:text-[#db5d2c]">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>
            © {new Date().getFullYear()} M-LIFTING. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
