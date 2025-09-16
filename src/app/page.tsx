import React from 'react';
import Slider from './components/slider';
import Featured from './components/Featured';
import Offer from './components/offer';

const Home = () => {
  return (
    <div>
      <Slider/>
      <Featured/>
      <Offer/>
    </div>
   
  );
};

export default Home;