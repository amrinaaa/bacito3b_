import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import destinations from '../data/destinasiSelengkapnya';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import PopUpDesitinasi from './PopUpDesitinasi';

const formatRupiah = (angka) => {
  const number_string = angka.replace(/[^,\d]/g, '').toString();
  const split = number_string.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  return `IDR ${rupiah}`;
};

const formatPrice = (price) => {
  if (price.toLowerCase().includes('gratis')) {
    return 'Gratis';
  }
  return formatRupiah(price.replace(/\D/g, ''));
};

const DestinasiSelengkapnya = () => {
  const [location, setLocation] = useState('Semua');
  const [budget, setBudget] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(destinations);
  }, []);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setBudget(formatRupiah(numericValue));
  };

  const handleSearch = () => {
    const filteredDestinations = destinations.filter(destination => {
      // Jika lokasi 'Semua', abaikan filter lokasi
      const locationMatch = location === 'Semua' || destination.location === location;
      
      // Cek apakah destinasi gratis
      const isDestinationFree = destination.price.toLowerCase().includes('gratis');
      
      // Jika budget kosong, hanya tampilkan yang gratis
      if (budget === '') {
        return locationMatch && isDestinationFree;
      }
      
      // Ubah harga destinasi dari string ke number
      const destinationPrice = isDestinationFree ? 0 : parseInt(destination.price.replace(/\D/g, ''));
      
      // Ubah budget dari string ke number
      const budgetNumber = parseInt(budget.replace(/\D/g, ''));
      
      // Cek apakah harga destinasi kurang dari atau sama dengan budget
      const budgetMatch = !isNaN(budgetNumber) && destinationPrice <= budgetNumber;
      
      return locationMatch && budgetMatch;
    });
    setSearchResults(filteredDestinations);
  };

  return (
    <div>
      <Navbar />

      
      <div className="mt-20 font-poppins">
        <h1 className='text-3xl font-bold text-font_gelap text-center mb-4'>Telusuri Destinasi Wisata Terbaik yang Tersebar di Kota Balikpapan </h1>
      <div className="flex items-center justify-between bg-blue-50 p-8 rounded-3xl mx-72 mobile:w-4/5 mobile:mx-auto ">
        <div className="grid grid-cols-1 gap-4 items-center place-content-stretch mx-16 mobile:w-full mobile:mx-0 tablet:grid-cols-2 laptop:grid-cols-2">
        <div className="flex flex-col w-full">
          <label htmlFor="location" className="mb-2 font-semibold text-gray-700">Pilih Lokasi</label>
          <div className="dropdown w-full">
            <label id="location" tabIndex={0} className="btn btn-ghost w-full justify-between bg-input rounded-3xl px-4 py-2 font-poppins">
              <span>{location}</span>
              <svg className="text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.134 2 5 5.134 5 9c0 4.67 7 11 7 11s7-6.33 7-11c0-3.866-3.134-7-7-7zm0 4a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full font-poppins">
              <li><a onClick={() => handleLocationChange({ target: { value: 'Semua' } })}>Semua</a></li>
              <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Timur' } })}>Balikpapan Timur</a></li>
              <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Utara' } })}>Balikpapan Utara</a></li>
              <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Barat' } })}>Balikpapan Barat</a></li>
              <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Kota' } })}>Balikpapan Kota</a></li>
            </ul>
          </div>
        </div>

          
          
        <div className="flex flex-col w-full">
            
          
          <label htmlFor="budget" className="mb-2 font-semibold text-gray-700">Budget Maksimal</label>
          <div className="btn flex items-center bg-input rounded-3xl px-4 py-2 font-poppins w-full">
            <input
              id="budget"
              type="text"
              placeholder="Masukkan Budget (kosongkan untuk gratis)"
              value={budget}
              onChange={handleBudgetChange}
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>
          </div>
          
          
          <div className="flex mt-5 ">
            <button 
              onClick={handleSearch} 
              className="bg-teal-500 text-white rounded-2xl px-5 py-2 text-sm hover:bg-teal-600 transition-colors col-start-3 row-start-3 btn">
              Cari
            </button>
          </div>
      

          </div>
          
      
      
      
      </div>
      <h1 className="text-2xl font-bold text-start text-font_gelap mt-4 ml-[215px] mobile:ml-5 tablet:ml-40">Destinasi</h1>
      <div className="p-4 flex flex-wrap justify-center gap-4"> {/* Memusatkan kotak destinasi */}

      {searchResults.map((destination) => (
          <div
            key={destination.id}
            className="border rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-gray-100 transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
            data-aos="fade-up"
            data-aos-delay= {`${destination.id * 150}`}
            onClick={() => handleDestinationClick(destination)}          
          >
            <img
              src={destination.image?.[0] }
              alt={destination.name}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <h2 className="font-sans text-lg font-bold text-font_gelap text-left">{destination.name}</h2> {/* Memusatkan judul */}
            <div className="font-sans flex items-center text-sm text-font_gelap text-left">
              {/* Ikon lokasi menggunakan React Icons */}
              <FaMapMarkerAlt className="mr-1 w-4 h-4 text-red-500" />
              <p>{destination.location}</p> {/* Memusatkan lokasi */}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-yellow-500 font-bold">⭐ {destination.rating}</span>
              <div className="flex items-center">
                {/* Ganti <img> dengan ikon React */}
                <FaTag className="mr-1 w-4 h-4 text-blue-500" /> {/* Ikon harga */}
                <span className="font-bold font-sans">{formatPrice(destination.price)}</span>
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

      

      <Footer />
      </div>
    

    
  )
}

export default DestinasiSelengkapnya

