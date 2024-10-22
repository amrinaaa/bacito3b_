import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-latar0 p-4 relative">
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
              <Link to="/beranda" className="block text-white text-sm md:text-xl p-4 hover:text-gray-300 font-poppins">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/destinasi" className="block text-white text-sm md:text-xl p-4 hover:text-gray-300 font-poppins">
                Destinasi
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="block text-white text-sm md:text-xl p-4 hover:text-gray-300 font-poppins">
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="block text-white text-sm md:text-xl p-4 hover:text-gray-300 font-poppins">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu Navbar untuk tampilan desktop */}
        <div className="hidden md:flex space-x-4 gap-10">
          <Link to="/beranda" className="text-white text-sm md:text-xl hover:text-gray-300 font-poppins">
            Beranda
          </Link>
          <Link to="/destinasi" className="text-white text-sm md:text-xl hover:text-gray-300 font-poppins">
            Destinasi
          </Link>
          <Link to="/tentang" className="text-white text-sm md:text-xl hover:text-gray-300 font-poppins">
            Tentang
          </Link>
          <Link to="/kontak" className="text-white text-sm md:text-xl hover:text-gray-300 font-poppins">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
