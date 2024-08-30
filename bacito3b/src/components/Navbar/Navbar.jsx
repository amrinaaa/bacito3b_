import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div>
      <div className="container bg-gradient-to-r from-primary to secondary">
        <div className="flex justify-between py-[2px]">
          <p>20% off on next booking</p>
          <p>Mobile No. +91 123456789</p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
