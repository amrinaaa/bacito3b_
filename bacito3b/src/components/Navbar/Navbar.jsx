import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div>
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between py-[2px]">
              <p>20% off on next booking</p>
              <p>Mobile No. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="Logo" className="h-16" />
              </Link>
            </div>
            {/* Desktop Navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                    Dasbor
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/kuliner" onClick={() => window.scrollTo(0, 0)}>
                    Kuliner
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/wisata" onClick={() => window.scrollTo(0, 0)}>
                    Wisata
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/penginapan" onClick={() => window.scrollTo(0, 0)}>
                    Penginapan
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/perjalanan" onClick={() => window.scrollTo(0, 0)}>
                    Perjalanan
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/tentangbalikpapan" onClick={() => window.scrollTo(0, 0)}>
                    Tentang Balikpapan
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
