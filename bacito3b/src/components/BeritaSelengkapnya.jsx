import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import berita from '../data/beritaSelengkapnya';
import Footer from './Footer';

const BeritaSelengkapnya = () => {
  // Menambahkan useEffect untuk scroll ke bagian atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []); // Kosongkan array dependencies untuk menjalankan hanya sekali setelah komponen pertama kali dimuat

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-12">
        {berita.map((beritabanyak) => (
          <motion.div
            key={beritabanyak.id}
            className="bg-latar1 rounded-lg shadow-lg hover:shadow-4xl transition-shadow duration-300 flex flex-wrap justify-center gap-4 p-12 max-w-6xl mx-auto mb-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-poppins font-bold mb-8 text-font_gelap text-left mx-0">
              {beritabanyak.judul}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column for Image and Introductory Text */}
              <div className="flex flex-col">
                <motion.img
                  src={beritabanyak.image}
                  alt={beritabanyak.judul}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <p className="text-lg font-sans text-font_gelap mb-4 text-justify">
                  {beritabanyak.berita}
                </p>
              </div>

              {/* Right Column for Details */}
              <div className="bg-font_putih rounded-lg p-5 shadow-lg hover:shadow-4xl transition-shadow duration-300">
                <h3 className="font-poppins text-2xl font-semibold mb-2 text-font_gelap">{beritabanyak.subjudul1}</h3>
                <p className="font-sans mb-4 text-font_gelap text-justify">
                  {beritabanyak.isisubjudul1}
                </p>

                <h3 className="font-poppins text-2xl font-semibold mb-2 text-font_gelap">{beritabanyak.subjudul2}</h3>
                <p className="font-sans text-font_gelap text-justify">
                  {beritabanyak.isisubjudul2}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default BeritaSelengkapnya;