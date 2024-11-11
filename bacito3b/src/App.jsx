import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BeritaSelengkapnya from './components/BeritaSelengkapnya';
import DestinasiSelengkapnya from './components/DestinasiSelengkapnya';
import PopUpDestinasi from './components/PopUpDesitinasi';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import Destinasi from './components/Destinasi';
import Berita from './components/Berita';
import Tentang from './components/Tentang';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Main content with routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="berita-pariwisata" element={<BeritaSelengkapnya />} />
            <Route path="destinasi-pariwisata" element={<DestinasiSelengkapnya />} />
            <Route path="popup-pariwisata" element={<PopUpDestinasi />} />
            <Route path="beranda" element={<Beranda/>} />
            <Route path="destinasi" element={<Destinasi/>} />
            <Route path="berita" element={<Berita />} />
            <Route path="tentang" element={<Tentang />} />
          </Routes>
        </main>
        
        {/* Footer will be shown on all pages */}
      </div>
    </BrowserRouter>
  );
};

export default App;
