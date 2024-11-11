import React from 'react';
import Navbar from './Navbar';
import Beranda from './Beranda';
import Destinasi from './Destinasi';
import Berita from './Berita';
import Tentang from './Tentang' ;
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Beranda />
      <Destinasi />
      <Berita />
      <Tentang />
      <Footer/>
    </div>
  );
};

export default LandingPage;
