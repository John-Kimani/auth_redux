import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import LogOut from '../../components/Auth/LogOut'

const HomePage = () => {
  return (
    <div className='home__page'>
      <Header />
      <Home />
      <LogOut />
    </div>
  )
}

export default HomePage