import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Destinasi from './Destinasi';

const DestinasiSelengkapnya = () => {
  const [location, setLocation] = useState('Balikpapan Timur');
  const [budget, setBudget] = useState('');

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

  return (
    <div>
      <Navbar />
      <div className="mt-20 font-poppins">
      <div className="flex items-center justify-between bg-blue-50 p-8 rounded-3xl mx-72 mobile:w-4/5 mobile:mx-auto ">
        <div className="grid grid-cols-1 gap-4 items-center place-content-stretch mx-16 mobile:w-full mobile:mx-0 tablet:grid-cols-2 laptop:grid-cols-2">
        <div className="dropdown w-full">
          <label tabIndex={0} className="btn btn-ghost w-full justify-between bg-input rounded-3xl px-4 py-2 font-poppins" >
            <span>{location}</span>
            <svg className="text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.134 2 5 5.134 5 9c0 4.67 7 11 7 11s7-6.33 7-11c0-3.866-3.134-7-7-7zm0 4a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full font-poppins">
            <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Timur' } })}>Balikpapan Timur</a></li>
            <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Utara' } })}>Balikpapan Utara</a></li>
            <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Barat' } })}>Balikpapan Barat</a></li>
            <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Kota' } })}>Balikpapan Kota</a></li>
            <li><a onClick={() => handleLocationChange({ target: { value: 'Balikpapan Selata' } })}>Balikpapan Selatan</a></li>
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
              className="bg-teal-500 text-white rounded-2xl px-5 py-2 text-sm hover:bg-teal-600 transition-colors col-start-2 row-start-2 btn">
              Cari
            </button>
          </div>
      </div>
      
      
      
    </div>
        <Destinasi />
      </div>

      <Footer />
    </div>
  )
}

export default DestinasiSelengkapnya
