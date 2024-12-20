import { useState } from "react";
import { FiClock } from "react-icons/fi";

const PopUpDestinasi = ({ destination, onClose }) => {
  if (!destination) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    const newIndex = (activeImageIndex + direction + destination.image.length) % destination.image.length;
    setActiveImageIndex(newIndex);
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
          {/* Main Image */}
          <div className="col-span-1 md:col-span-2 relative">
            <img
              src={destination.image[activeImageIndex]}
              alt={destination.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Navigation Buttons */}
            <button
              onClick={() => handleImageChange(-1)}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full opacity-70 hover:opacity-100"
            >
              ❮
            </button>
            <button
              onClick={() => handleImageChange(1)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full opacity-70 hover:opacity-100"
            >
              ❯
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex flex-col gap-4">
            {destination.image.slice(1, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={destination.name}
                className="w-full h-[calc(50%-4px)] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Responsive Grid Layout for Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div
            className="bg-white-100 rounded-lg w-full h-full min-h-[300px] p-4"
            style={{ boxShadow: "0 4px 6px 2px rgba(0.6, 0.6, 0.6, 0.6)" }}
          >
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
              <p className="text-gray-600 text-justify px-4">
                {destination.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpDestinasi;
