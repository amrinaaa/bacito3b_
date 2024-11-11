import React from 'react';
import LogoBiru from '../assets/logobiru.png';

const Tentang = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="font-poppins text-xl md:text-2xl font-bold text-font_gelap">
          Tentang Kami
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto font-poppins">
        {/* Grid pertama untuk logo */}
        <div className="flex items-center p-4 justify-center bg-white">
          <img src={LogoBiru} alt="Logo" className="w-40 h-32 md:w-[322px] md:h-[248.21px] object-contain" />
        </div>

        {/* Grid kedua untuk teks */}
        <div className="flex items-center">
          <p className="font-sans text-justify text-base p-4 md:text-2xl text-gray-700">
            Balikpapan City Tour adalah sebuah platform berbasis web yang dirancang untuk membantu wisatawan menemukan destinasi wisata terbaik di Kota Balikpapan sesuai dengan anggaran mereka. Melalui layanan yang mudah diakses, website ini menyediakan rekomendasi wisata yang dipersonalisasi, mencakup beragam pilihan seperti pantai, taman alam, hingga pengalaman budaya yang kaya.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 p-10 md:p-12 max-w-6xl mx-auto font-poppins">
        {/* Grid pertama untuk Visi Kami */}
        <div className="bg-bluesoft p-4 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-lg md:text-xl font-poppins font-semibold mb-2">Visi Kami</h3>
          <p className="text-sm md:text-lg font-sans text-gray-700 text-justify">
            Menjadi platform terdepan dalam memberikan rekomendasi wisata yang sesuai anggaran, serta mendukung perkembangan pariwisata Kota Balikpapan sebagai destinasi unggulan bagi wisatawan domestik dan mancanegara.
          </p>
        </div>

        {/* Grid kedua untuk Misi Kami */}
        <div className="bg-bluesoft p-4 rounded-lg shadow-lg md:col-span-3 text-justify">
          <h3 className="text-lg md:text-xl font-poppins font-semibold mb-2">Misi Kami</h3>
          <ol className="text-sm md:text-lg font-sans text-gray-700 list-decimal list-inside space-y-1 md:space-y-2">
            <li className="flex">
              <span className="mr-2">1.</span>
              <span className="flex-1">Menyediakan informasi wisata terintegrasi yang lengkap, termasuk destinasi, transportasi, dan kuliner di Kota Balikpapan.</span>
            </li>
            <li className="flex">
              <span className="mr-2">2.</span>
              <span className="flex-1">Memberikan rekomendasi wisata yang sesuai dengan anggaran dan preferensi pengguna, untuk memudahkan perencanaan perjalanan.</span>
            </li>
            <li className="flex">
              <span className="mr-2">3.</span>
              <span className="flex-1">Mendukung promosi pariwisata Balikpapan melalui teknologi modern, dengan meningkatkan aksesibilitas informasi dan pengalaman wisata yang berkualitas.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
