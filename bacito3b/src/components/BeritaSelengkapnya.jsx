import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import berita from "../data/beritaSelengkapnya";
import Footer from "./Footer";

const BeritaSelengkapnya = () => {
  // Menambahkan useEffect untuk scroll ke bagian atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Inisialisasi AOS
    AOS.init({
      offset: 200, // Jarak trigger animasi dari viewport
      duration: 1000, // Durasi animasi
      easing: "ease-in-out",
      delay: 100,
    });
  }, []); // Kosongkan array dependencies untuk menjalankan hanya sekali setelah komponen pertama kali dimuat

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-12">
        {berita.map((beritabanyak) => (
          <div
            key={beritabanyak.id}
            className="bg-latar1 rounded-lg shadow-lg hover:shadow-4xl transition-shadow duration-300 flex flex-wrap justify-center gap-4 p-12 max-w-6xl mx-auto mb-8 mt-8"
            data-aos="zoom-in-up" // AOS fade-up untuk kontainer utama
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-poppins font-bold mb-8 text-font_gelap text-left mx-0">
              {beritabanyak.judul}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column for Image and Introductory Text */}
              <div className="flex flex-col">
                <div
                  className="flex flex-col"
                  data-aos="zoom-in-up" // AOS zoom-in untuk gambar
                  data-aos-duration="1000"
                >
                  <img
                    src={beritabanyak.image}
                    alt={beritabanyak.judul}
                    className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-lg font-sans text-font_gelap mb-4 text-justify">
                    {beritabanyak.berita}
                  </p>
                </div>
              </div>

              {/* Right Column for Details */}
              <div
                className="bg-font_putih rounded-lg p-5 shadow-lg hover:shadow-4xl transition-shadow duration-300"
                data-aos="zoom-in-up" // AOS fade-right untuk detail
                data-aos-duration="1000"
              >
                <h3 className="font-poppins text-2xl font-semibold mb-2 text-font_gelap">
                  {beritabanyak.subjudul1}
                </h3>
                <p className="font-sans mb-4 text-font_gelap text-justify">
                  {beritabanyak.isisubjudul1}
                </p>

                <h3 className="font-poppins text-2xl font-semibold mb-2 text-font_gelap">
                  {beritabanyak.subjudul2}
                </h3>
                <p className="font-sans text-font_gelap text-justify">
                  {beritabanyak.isisubjudul2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default BeritaSelengkapnya;