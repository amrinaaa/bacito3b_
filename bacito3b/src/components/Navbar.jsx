import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky bg-latar0 p-2 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
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
              isOpen ? 'top-12 opacity-100 visible' : 'top-0 opacity-0 invisible'
            } w-22 rounded-md shadow-lg`}
            style={{ transition: 'top 0.3s ease-in-out' }} // Efek transisi untuk menu
          >
            <li>
              <Link to="/" className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/destinasi" className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300">
                Destinasi
              </Link>
            </li>
            <li>
              <Link to="/berita" className="font-sans text-white text-sm md:text-xl p-4 hover:text-gray-300">
                Berita
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="font-sans block text-white text-sm md:text-xl p-4 hover:text-gray-300">
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu Navbar untuk tampilan desktop */}
        <div className="hidden md:flex space-x-4">
        <a href="/" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">Beranda</a>
          
          <a href="#destinasi" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">Destinasi</a>

          <a href="#berita" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
            Berita
          </a>
          <a href="#tentang" className="font-sans text-white text-sm md:text-xl hover:text-gray-300">
            Tentang
          </a>
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;