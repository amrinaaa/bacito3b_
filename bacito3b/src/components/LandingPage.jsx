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
        {/* Ganti teks MyWebsite dengan logo */}
        <img src="/src/assets/logo.png" alt="Logo" className="h-16 w-auto" />

        {/* Tombol Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰ {/* Icon hamburger */}
          </button>
        </div>

        {/* Menu Navbar */}
        <ul
          className={`md:flex md:space-x-4 absolute md:relative right-0 w-auto bg-secondary ${
            isOpen ? 'block' : 'hidden'
          }`}
          style={{ top: '100%' }} // Pastikan menu berada tepat di bawah navbar
        >
          <li>
            <Link to="/beranda" className="block text-white p-2 hover:text-gray-300">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/destinasi" className="block text-white p-2 hover:text-gray-300">
              Destinasi
            </Link>
          </li>
          <li>
            <Link to="/tentang" className="block text-white p-2 hover:text-gray-300">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/kontak" className="block text-white p-2 hover:text-gray-300">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
