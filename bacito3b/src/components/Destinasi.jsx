import { useState } from 'react';
import destinations from '../data/destinasi';
import panah from '../assets/panah.png';
import lokasiIcon from '../assets/lokasi.png';
import hargaIcon from '../assets/price.png';
import PopUpDesitinasi from './PopUpDesitinasi';
import { Link } from 'react-router-dom';

const Destinasi = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="flex flex-col items-center p-6" id='destinasi'> 
      <div className="flex justify-between items-center w-full mb-6"> 
        {/* Kontainer untuk judul dan tombol */}
        <h1 className="font-poppins text-2xl font-bold text-font_gelap">Destinasi Terpopuler</h1>
        <div className="text-center"> {/* Mengatur tombol agar di kanan */}
          <Link to="/destinasi-pariwisata" className="font-poppins mt-8 px-6 py-2 text-sm md:text-base text-white bg-button rounded-2xl hover:bg-button transition duration-300 flex items-center">
            Selengkapnya 
            <img src={panah} alt="Arrow" className="ml-2 w-4 h-4" /> {/* Menambahkan ikon panah */}
          </Link>
        </div>
      </div>
      <div className="p-4 flex flex-wrap justify-center gap-4"> {/* Memusatkan kotak destinasi */}
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="border rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-gray-100 transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-delay= {`${destination.id * 100}`}
            onClick={() => handleDestinationClick(destination)}          
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <h2 className="font-sans text-lg font-bold text-font_gelap text-left">{destination.name}</h2> {/* Memusatkan judul */}
            <div className="font-sans flex items-center text-sm text-font_gelap text-left"> {/* Menambahkan ikon lokasi */}
              <img src={lokasiIcon} alt="Lokasi" className="mr-1 w-4 h-4" /> {/* Ikon lokasi */}
              <p>{destination.location}</p> {/* Memusatkan lokasi */}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-yellow-500 font-bold">⭐ {destination.rating}</span>
              <div className="flex items-center">
                <img src={hargaIcon} alt="Harga" className="font-sans mr-1 w-4 h-4" /> {/* Ikon harga */}
                <span className="font-bold font-sans">{destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PopUpDesitinasi 
        destination={selectedDestination} 
        onClose={closePopup} 
      />
    </div>
  );
}

export default Destinasi;