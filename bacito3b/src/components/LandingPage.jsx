import React from 'react';
import Navbar from './Navbar';
import Beranda from './Beranda';
import Destinasi from './Destinasi';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Beranda />
      <Destinasi />
    </div>
  );
};

export default LandingPage;
