import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Beranda = () => {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["transparent", "#A6CFE0"]
  );
  const height = useTransform(scrollY, [0, 40], [120, 60]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigasi dengan animasi */}
      <motion.div
        id="navigation"
        style={{
          background,
          height,
        }}
        className="fixed w-full top-0 z-50 flex items-center px-8 bg-transparent"
      >
          <div className="container mx-auto flex justify-between items-center bg-transparent">
            {/* Logo */}
            <img src="/src/assets/logo.png" alt="Logo" className="h-12 w-auto" />

            {/* Tombol Hamburger */}
            <div className="md:hidden relative">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                ☰ {/* Icon hamburger */}
              </button>

              {/* Menu Navbar untuk tampilan mobile */}
              <ul
                className={`absolute right-0 bg-latar0 transition-all duration-300 ease-in-out z-50 ${
                  isOpen ? "top-12 opacity-100 visible" : "top-0 opacity-0 invisible"
                } w-22 rounded-md shadow-lg`}
              >
                <li>
                  <a href="/"
                    className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#destinasi"
                    className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300"
                  >
                    Destinasi
                  </a>
                </li>
                <li>
                  <a href="#berita"
                    className="font-sans text-white text-sm md:text-xl p-4 hover:text-gray-300"
                  >
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#tentang"
                    className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300"
                  >
                    Tentang
                  </a>
                </li>
              </ul>
            </div>

            {/* Menu Navbar untuk tampilan desktop */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
                Beranda
              </a>
              <a href="#destinasi" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
                Destinasi
              </a>
              <a href="#berita" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
                Berita
              </a>
              <a href="#tentang" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
                Tentang
              </a>
            </div>
          </div>

      </motion.div>

      {/* Konten utama */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/bg.png')" }}
      >
        {/* Overlay untuk memberikan efek gelap pada background */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-20">
          <div className="text-center text-white">
            <h1 className="text-8xl md:text-9xl font-bold font-kaisei">Bacito</h1>
            <div className="bg-white bg-opacity-60 rounded-3xl p-8 shadow-lg text-center max-w-5xl w-10/12 mx-auto mt-24">
              <p className="font-poppins text-sm md:text-base lg:text-lg text-center text-font_gelap">
                Jelajahi keindahan dan keunikan Kota Balikpapan bersama BACITO!
                Dari pantai yang memukau hingga warisan budaya yang kaya,
                Balikpapan siap menyambutmu dengan destinasi wisata spektakuler,
                pengalaman seru, dan keajaiban di setiap sudut!
              </p>
              <Link to="#destinasi">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 to-transparent"></div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    const destinasiSection = document.getElementById('destinasi');
                    if (destinasiSection) {
                      destinasiSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative font-poppins mt-8 px-6 py-2 text-sm md:text-base bg-button text-white rounded-2xl hover:bg-icon hover:text-white transition duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Ayo Jelajah!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;