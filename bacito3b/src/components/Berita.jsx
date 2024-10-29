import React from 'react'

const Berita = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Eksplorasi Keajaiban Alam di Hutan Mangrove Margomulyo</h1>
      <img
        src="src/assets/bekantan.png" // Update with the correct path for your image
        alt="Hutan Mangrove Margomulyo"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">
        Hutan Mangrove Margomulyo menjadi salah satu destinasi wisata yang cukup populer di Kota Balikpapan. 
        Wisata ini memiliki berbagai macam daya tarik, salah satunya adalah karena tempat ini merupakan kawasan 
        konservasi dan edukasi berkaitan dengan keanekaragaman flora dan fauna di Kalimantan.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Jembatan Panjang Mengelilingi Hutan Mangrove</h2>
      <p className="mb-4">
        Jembatan Ulin di Hutan Mangrove Margomulyo adalah salah satu daya tarik wisata ekowisata yang unik di Balikpapan. 
        Jembatan ini terbuat dari kayu ulin, salah satu kayu terkuat dan tahan lama di Indonesia, yang menjadikannya sangat cocok 
        di lingkungan hutan mangrove.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Fasilitas Baru yang Memikat</h2>
      <p>
        Pada tahun ini, pengelola wisata telah menambah fasilitas baru yang menjadikan semakin nyaman untuk menjelajahi hutan. 
        Salah satu fasilitas utama yang menarik adalah Jembatan Ulin, yang memungkinkan pengunjung berjalan di atas ekosistem 
        mangrove tanpa merusaknya.
      </p>
    </div>
  );
};

export default Berita
