import React from 'react';
import { FiClock } from "react-icons/fi";

const PopUpDestinasi = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{destination.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-medium">⭐ {destination.rating}</span>
                <div className="flex items-center text-sm text-gray-600">
                  <p className="text-gray-600 text-sm mt-1">{destination.location}</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-gray-500 hover:text-gray-700 ml-4"
            >
              ×
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-6">
          <div className="col-span-2">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-[calc(50%-4px)] object-cover rounded-lg"
            />
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-[calc(50%-4px)] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="bg-gray-100 rounded-lg w-full h-full min-h-[300px]">
            <iframe
              src={destination.maps} 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-blue-100 rounded-lg w-full h-full min-h-[300px] p-4">
            <h3 className="font-bold mb-2 text-left pl-4">Description</h3>
            <p className="text-gray-600 text-justify px-4">{destination.description}</p>
          </div>

        </div>

        <div className="p-6 border-t">
          <div className="flex items-center gap-2">
            <FiClock className="w-5 h-5" />
            <span className="text-sm text-gray-600">07:30 - 18:00 WITA</span>
            <div className="flex items-center gap-12">
              <p className="text-gray-600">Starts From</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-600">Daily</p>
            <div className="flex items-center gap-12">
              <p className="text-lg font-bold">{destination.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpDestinasi;
