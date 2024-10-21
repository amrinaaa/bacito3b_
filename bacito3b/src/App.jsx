import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Berita from './components/Berita';
import Destinasi from './components/Destinasi';
import PopUpDestinasi from './components/PopUpDesitinasi';
import Tentang from './components/Tentang';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route khusus untuk LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route lainnya */}
        <Route path="tentang" element={<Tentang />} />
        <Route path="berita" element={<Berita />} />
        <Route path="destinasi" element={<Destinasi />} />
        <Route path="popup" element={<PopUpDestinasi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
