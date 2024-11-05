import React from 'react';
import panah from '../assets/panah.png';

const Berita = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      {/* Flex container for title and button alignment */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-font_gelap text-left mx-0">Berita</h1>
        <button className="mt-8 px-6 py-2 text-sm md:text-base text-white bg-button rounded-2xl hover:bg-button transition duration-300 flex items-center font-poppins">
            Selengkapnya 
            <img src={panah} alt="Arrow" className="ml-2 w-4 h-4" /> {/* Menambahkan ikon panah */}
          </button>
        {/* <a 
          href="/selengkapnya" 
          className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-secondary transition duration-300"
        >
          Selengkapnya
        </a> */}
      </div>

      {/* Main Content Container */}
      <div className="bg-latar1 rounded-lg shadow-lg hover:shadow-4xl transition-shadow duration-300 p-5">
        <h2 className="text-3xl font-bold mb-8 text-font_gelap text-left mx-0">Eksplorasi Keajaiban Alam di Hutan Mangrove Margomulyo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column for Image and Introductory Text */}
          <div className="flex flex-col">
            <img
              src="src/assets/bekantan.png" // Update with the correct path for your image
              alt="Hutan Mangrove Margomulyo"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg text-font_gelap mb-4 text-justify">
              Hutan Mangrove Margomulyo menjadi salah satu destinasi wisata yang cukup populer di Kota Balikpapan. 
              Wisata ini memiliki berbagai macam daya tarik, salah satunya adalah karena tempat ini merupakan kawasan 
              konservasi dan edukasi berkaitan dengan keanekaragaman flora dan fauna di Kalimantan.
            </p>
          </div>

          {/* Right Column for Details */}
          <div className="bg-font_putih rounded-lg p-5 shadow-lg hover:shadow-4xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-font_gelap">Jembatan Panjang Mengelilingi Hutan Mangrove</h3>
            <p className="mb-4 text-font_gelap text-justify">
              Jembatan Ulin di Hutan Mangrove Margomulyo adalah salah satu daya tarik wisata ekowisata yang unik di Balikpapan. 
              Jembatan ini terbuat dari kayu ulin, salah satu kayu terkuat dan tahan lama di Indonesia, yang menjadikannya sangat cocok 
              di lingkungan hutan mangrove.
            </p>

            <h3 className="text-2xl font-semibold mb-2 text-font_gelap">Fasilitas Baru yang Memikat</h3>
            <p className="text-font_gelap text-justify">
              Pada tahun ini, pengelola wisata telah menambah fasilitas baru yang menjadikan semakin nyaman untuk menjelajahi hutan. 
              Salah satu fasilitas utama yang menarik adalah Jembatan Ulin, yang memungkinkan pengunjung berjalan di atas ekosistem 
              mangrove tanpa merusaknya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
