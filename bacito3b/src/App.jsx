import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BeritaSelengkapnya from './components/BeritaSelengkapnya';
import DestinasiSelengkapnya from './components/DestinasiSelengkapnya';
import PopUpDestinasi from './components/PopUpDesitinasi';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route khusus untuk LandingPage */}
        <Route path="/" element={<LandingPage />} />
        {/* Route lainnya */}
        <Route path="berita-pariwisata" element={<BeritaSelengkapnya />} />
        <Route path="destinasi-pariwisata" element={<DestinasiSelengkapnya />} />
        <Route path="popup-pariwisata" element={<PopUpDestinasi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
