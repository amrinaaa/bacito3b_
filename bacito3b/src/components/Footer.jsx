import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Telegram from '../assets/Telegram2.png';
import Discord from '../assets/Discord2.png';
import Linkedin from '../assets/Linkedin2.png';

const Footer = () => {
  return (
    <div className="bg-birufoter p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-20">
        {/* Grid pertama untuk logo */}
        <div className="flex items-center justify-center col-span-1 md:col-span-2">
          <img src={Logo} alt="Logo" className="w-32 h-24 md:w-52 md:h-40 object-contain" />
        </div>

        {/* Grid kedua untuk teks */}
        <div className="flex items-center col-span-1 md:col-span-2">
          <p className="font-sans text-justify text-xs md:text-sm text-white">
            Selamat datang di website kami! Tujuan kami adalah untuk membantu Anda menemukan tempat wisata terbaik di Balikpapan yang sesuai dengan anggaran Anda. Apakah Anda mencari pantai yang tenang, taman alam, atau pengalaman budaya, kami memberikan rekomendasi yang dipersonalisasi berdasarkan preferensi pengeluaran Anda.
          </p>
        </div>

        {/* Grid ketiga untuk Akses Cepat */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-poppins text-white text-xl md:text-2xl font-semibold mb-2">Akses Cepat</h3>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <Link to="/beranda" className="hover:text-black text-white font-sans text-sm md:text-base">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="hover:text-black text-white font-sans text-sm md:text-base">
                Destinasi
              </Link>
            </li>
            <li>
              <Link to="/berita" className="hover:text-black text-white font-sans text-sm md:text-base">
                Berita
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="hover:text-black text-white font-sans text-sm md:text-base">
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        {/* Grid keempat untuk Kontak Kami */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-poppins text-white text-xl md:text-2xl font-semibold mb-2">Kontak Kami:</h3>
          <ul className="flex space-x-4">
            <li>
              <button>
                <img src={Telegram} alt="Telegram" className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </li>
            <li>
              <button>
                <img src={Discord} alt="Discord" className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </li>
            <li>
              <button>
                <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;