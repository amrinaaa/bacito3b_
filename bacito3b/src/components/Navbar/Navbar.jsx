import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div>
      <div className="bg-gradient-to-r from-primary to secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between py-[2px]">
          <p>20% off on next booking</p>
          <p>Mobile No. +91 123456789</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
      <div className= "flex justify-between items-center">
        {/*logo section*/}
        <div>
        <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        >
          <img src={Logo} alt="" className="h-16" />
</Link>


        </div>
        {/*Navlinks section */}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
