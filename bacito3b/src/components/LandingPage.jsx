import React from 'react';
import Navbar from './Navbar';
import Beranda from './Beranda';
import Destinasi from './Destinasi';
import Berita from './Berita'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Beranda />
      <Destinasi />
      <Berita />
    </div>
  );
};

export default LandingPage;
