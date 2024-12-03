import React, {useState} from 'react';
import { FiClock } from "react-icons/fi";

const PopUpDestinasi = ({ destination, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!destination) return null;

  const images = [destination.image, ...destination.additionalImages];

  const showNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/3 max-h-[90vh] overflow-y-auto animate-popIn"
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

        {/* Responsive Grid Layout for Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(0)}
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            {destination.additionalImages?.map((img, index) => (
              <div key={index} className={`col-span-1 ${index === 0 ? "md:col-start-2 md:row-start-1" : "md:col-start-2 md:row-start-2"}`}>
                <img 
                  src={img}
                  alt={`Additional ${index}`}
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index + 1)}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-lg p-4 relative modal-zoom"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-[90vw] h-[60vh] max-w-[600px] max-h-[400px] aspect-square flex items-center justify-center">
                <img
                  src={selectedImage === 0 ? destination.image : destination.additionalImages[selectedImage - 1]}
                  alt={`Image ${selectedImage}`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
              <button
                onClick={showPrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-3 py-2"
              >
                ‹
              </button>
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-3 py-2"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Responsive Grid Layout for Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="bg-white-100 rounded-lg w-full h-full min-h-[300px] p-4" style={{ boxShadow: "0 4px 6px 2px rgba(0.6, 0.6, 0.6, 0.6)" }}>
            <iframe
              src={destination.maps} 
              width="100%"
              height="70%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="p-4 border-t mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span className="text-sm text-gray-600">07:30 - 18:00 WITA</span>
                </div>
                <p className="text-gray-600">Starts From</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-gray-600">Daily</p>
                </div>
                <p className="text-lg font-bold">{destination.price}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-left pl-4">Description</h3>
            <div className="bg-blue-100 rounded-lg w-full min-h-[300px] p-4">
              <p className="text-gray-600 text-justify px-4">{destination.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpDestinasi;
