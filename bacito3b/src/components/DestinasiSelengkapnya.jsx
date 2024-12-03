import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import DestinasiSelengkapnyaData from '../data/destinasiSelengkapnya'; // Assuming this is the correct path for destinations
import PopUpDesitinasi from './PopUpDestinasi';

const DestinasiSelengkapnya = () => {
  const [location, setLocation] = useState('Balikpapan Timur');
  const [budget, setBudget] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null); // Added to manage selected destination

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSearch = () => {
    // Add search logic here
    console.log('Searching with:', { location, budget });
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20 font-poppins">
        <div className="flex items-center justify-between bg-blue-50 p-8 rounded-3xl mx-72 mobile:w-4/5 mobile:mx-auto">
          <div className="grid grid-cols-1 gap-4 items-center place-content-stretch mx-16 mobile:w-full mobile:mx-0 tablet:grid-cols-2 laptop:grid-cols-2">
            <div className="dropdown w-full">
              <label
                tabIndex={0}
                className="btn btn-ghost w-full justify-between bg-input rounded-3xl px-4 py-2 font-poppins"
              >
                <span>{location}</span>
                <svg
                  className="text-gray-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C8.134 2 5 5.134 5 9c0 4.67 7 11 7 11s7-6.33 7-11c0-3.866-3.134-7-7-7zm0 4a2 2 0 110 4 2 2 0 010-4z"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full font-poppins"
              >
                <li>
                  <a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Timur' } })}>
                    Balikpapan Timur
                  </a>
                </li>
                <li>
                  <a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Utara' } })}>
                    Balikpapan Utara
                  </a>
                </li>
                <li>
                  <a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Barat' } })}>
                    Balikpapan Barat
                  </a>
                </li>
                <li>
                  <a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Kota' } })}>
                    Balikpapan Kota
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn flex items-center bg-input rounded-3xl px-4 py-2 mr-40 font-poppins w-full">
              <input
                type="text"
                placeholder="Masukkan Estimasi Anggaran"
                value={budget}
                onChange={handleBudgetChange}
                className="bg-transparent outline-none text-gray-700 w-full"
              />
            </div>

            <div className="flex mt-5 ">
              <button
                onClick={handleSearch}
                className="bg-teal-500 text-white rounded-2xl px-5 py-2 text-sm hover:bg-teal-600 transition-colors col-start-2 row-start-2 btn"
              >
                Cari
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center p-6" id="destinasiSelengkapnya">
          <div className="flex justify-between items-center w-full mb-6">
            <h1 className="font-poppins text-2xl font-bold text-font_gelap">Destinasi Terpopuler</h1>
            <div className="text-center">
              <Link
                to="/destinasi-pariwisata"
                className="font-poppins mt-8 px-6 py-2 text-sm md:text-base text-white bg-button rounded-2xl hover:bg-icon hover:text-white transition duration-200 hover:scale-105 hover:shadow-lg flex items-center"
              >
                Selengkapnya
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-4 flex flex-wrap justify-center gap-4">
            {DestinasiSelengkapnyaData.map((destination) => (
              <div
                key={destination.id}
                className="border rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-gray-100 transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={`${destination.id * 100}`}
                onClick={() => handleDestinationClick(destination)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 rounded-lg object-cover mb-4"
                />
                <h2 className="font-sans text-lg font-bold text-font_gelap text-left">{destination.name}</h2>
                <div className="font-sans flex items-center text-sm text-font_gelap text-left">
                  <FaMapMarkerAlt className="mr-1 w-4 h-4 text-red-500" />
                  <p>{destination.location}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-yellow-500 font-bold">⭐ {destination.rating}</span>
                  <div className="flex items-center">
                    <FaTag className="mr-1 w-4 h-4 text-blue-500" />
                    <span className="font-bold font-sans">{destination.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <PopUpDesitinasi destination={selectedDestination} onClose={closePopup} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DestinasiSelengkapnya;