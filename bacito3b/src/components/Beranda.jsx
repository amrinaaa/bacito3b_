import React from 'react';
import { Link } from 'react-router-dom';

const Beranda = () => {
  return (
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
              Jelajahi keindahan dan keunikan Kota Balikpapan bersama BACITO! Dari pantai yang memukau hingga warisan budaya yang kaya, Balikpapan siap menyambutmu dengan destinasi wisata spektakuler, pengalaman seru, dan keajaiban di setiap sudut!
            </p>
            <Link to="/selengkapnya">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 to-transparent"></div>
              <button className="font-poppins mt-8 px-6 py-2 text-sm md:text-base bg-button rounded-2xl hover:bg-button">
                Ayo Jelajah!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
