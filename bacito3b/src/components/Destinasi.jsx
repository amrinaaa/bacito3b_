import { useState } from 'react';
import DestinasiSelengkapnyaData from '../data/destinasiSelengkapnya';
import { FaArrowRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import PopUpDesitinasi from './PopUpDestinasi';
import { Link } from 'react-router-dom';

const Destinasi = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [visibleDestinations, setVisibleDestinations] = useState(6);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(DestinasiSelengkapnyaData);

  // Helper function to format number with thousands separator
  const formatNumber = (value) => {
    // Remove non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    
    // Format with thousands separator
    return cleanValue ? cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';
  };

  // Helper function to remove formatting for calculations
  const parseFormattedNumber = (formattedValue) => {
    return parseInt(formattedValue.replace(/\./g, ''), 10) || 0;
  };

  const extractPrice = (priceString) => {
    const numericPrice = parseInt(priceString.replace('IDR', '').replace(/\s|\.|\,/g, '').trim(), 10);
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  const handleShowMoreDetails = () => {
    if (showMoreDetails) {
      setVisibleDestinations(6);
    } else {
      setVisibleDestinations(filteredDestinations.length); 
    }
    setShowMoreDetails(!showMoreDetails);
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const handleBudgetChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatNumber(inputValue);
    setBudget(formattedValue);
  };

  const handleSearch = () => {
    console.log('Lokasi:', location);
    console.log('Anggaran:', budget);

    const parsedBudget = parseFormattedNumber(budget);

    const newFilteredDestinations = DestinasiSelengkapnyaData.filter((destination) => {
      const locationMatch = !location || destination.location === location;
      
      const budgetMatch = !parsedBudget || 
        (parsedBudget === 0 && destination.price.includes('Gratis')) ||
        (parsedBudget > 0 && extractPrice(destination.price) <= parsedBudget);
      
      return locationMatch && budgetMatch;
    });

    setFilteredDestinations(newFilteredDestinations);

    setVisibleDestinations(newFilteredDestinations.length > 6 ? 6 : newFilteredDestinations.length);
  };

  return (
    <div className="flex flex-col items-center p-6" id='destinasi'> 
      {showMoreDetails && (
        <div className="mt-20 w-full font-poppins">
          <h2 className="text-center text-2xl font-bold text-font_gelap mb-6">
          Telusuri Destinasi Wisata Terbaik yang Tersebar di Kota Balikpapan
          </h2>
          <div className="flex items-center justify-between bg-blue-50 p-8 rounded-3xl mx-auto w-[90%] max-w-6xl mobile:w-4/5"> 
           <div className="grid grid-cols-1 gap-4 items-center place-content-stretch mx-16 mobile:w-full mobile:mx-0 tablet:grid-cols-2 laptop:grid-cols-2">
              <div className="dropdown w-full">
                <label tabIndex={0} className="btn btn-ghost w-full justify-between bg-input rounded-3xl px-4 py-2 font-poppins">
                  <span>{location || 'Pilih Lokasi'}</span>
                  <svg className="text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.134 2 5 5.134 5 9c0 4.67 7 11 7 11s7-6.33 7-11c0-3.866-3.134-7-7-7zm0 4a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full font-poppins">
                  <li><a onClick={() => handleLocationChange('')}>Semua Lokasi</a></li>
                  <li><a onClick={() => handleLocationChange('Balikpapan Timur')}>Balikpapan Timur</a></li>
                  <li><a onClick={() => handleLocationChange('Balikpapan Utara')}>Balikpapan Utara</a></li>
                  <li><a onClick={() => handleLocationChange('Balikpapan Barat')}>Balikpapan Barat</a></li>
                  <li><a onClick={() => handleLocationChange('Balikpapan Kota')}>Balikpapan Kota</a></li>
                  <li><a onClick={() => handleLocationChange('Balikpapan Selatan')}>Balikpapan Selatan</a></li>
                </ul>
              </div>
              <div className="flex items-center w-full">
                <div className="flex items-center bg-input rounded-3xl px-4 py-2 font-poppins w-full">
                  <input
                    type="text" 
                    placeholder="Masukkan Estimasi Anggaran Maks (IDR)"
                    value={budget}
                    onChange={handleBudgetChange}
                    className="bg-transparent outline-none text-gray-700 w-full 
                      [&::-webkit-inner-spin-button]:appearance-none 
                      [&::-webkit-outer-spin-button]:appearance-none 
                      appearance-none"
                  />
                </div>
                <div className="ml-4">
                  <button 
                    onClick={handleSearch} 
                    className="bg-teal-500 text-white rounded-2xl px-5 py-2 text-sm hover:bg-teal-600 transition-colors">
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center w-full mb-6"> 
        <h1 className="font-poppins text-2xl font-bold text-font_gelap">
          {showMoreDetails ? "Destinasi" : "Destinasi Terpopuler"}
        </h1>
        <button 
          onClick={handleShowMoreDetails}
          className="font-poppins mt-8 px-6 py-2 text-sm md:text-base text-white bg-button rounded-2xl hover:bg-icon hover:text-white transition duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
        >
          <span>{showMoreDetails ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}</span>
          <FaArrowRight className="group-hover:brightness-75 transition duration-300" />
        </button>
      </div>

      <div className="p-4 flex flex-wrap justify-center gap-4">
        {filteredDestinations.slice(0, visibleDestinations).map((destination) => (
          <div
            className={`border rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer ${
              filteredDestinations.length === 1 ? 'mx-auto' : 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
            }`}
            onClick={() => handleDestinationClick(destination)}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 rounded-lg object-cover mb-4"
            />
            <h2 className="font-sans text-lg font-bold text-font_gelap text-left">{destination.name}</h2>
            <div className="font-sans flex items-center text-sm text-font_gelap text-left">
              <FaMapMarkerAlt className="mr-1 w-4 h-4" />
              <p>{destination.location}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-yellow-500 font-bold">⭐ {destination.rating}</span>
              <div className="flex items-center">
                <FaTag className="font-sans mr-1 w-4 h-4" />
                <span className="font-bold font-sans">{destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Tidak ada destinasi yang sesuai dengan filter yang dipilih.
        </div>
      )}

      <PopUpDesitinasi 
        destination={selectedDestination} 
        onClose={closePopup} 
      />
    </div>
  );
}

export default Destinasi;