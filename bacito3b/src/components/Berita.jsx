import React from 'react';
import beritaData from '../data/berita';

const Berita = () => {
  // We'll just use the first news item for this example
  const berita = beritaData[0];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Berita</h2>
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">{berita.title}</h3>
        <div className="flex flex-col lg:flex-row gap-4 ">
          <img
            src={berita.image}
            alt={berita.title}
            className="w-full lg:w-48 h-auto rounded-lg object-cover"
          />
          <div className="flex-1">
            <p className="text-gray-700 mb-4">{berita.content}</p>
            <div>
              {berita.details.map((detail, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mt-4">{detail.subtitle}</h4>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Selengkapnya
        </button>
      </div>
    </div>
  );
}

export default Berita;