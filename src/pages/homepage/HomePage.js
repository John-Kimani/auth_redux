import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Herosection from '../../components/Herosection/Herosection';
import Home from '../../components/Home/Home';

const HomePage = () => {
  return (
    <div className='home__page'>
      <Header />
      <Herosection />
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage