import React from 'react';

import HeaderNav from '../../components/headerNav/HeaderNav';
import HomeList from './homeList/HomeList';
import Carousel from '../../components/carousel/Carousel';

function Home() {
  return (
    <div>
      <HeaderNav />
      <Carousel />
      <HomeList />
    
    </div>
  )
}

export default Home
