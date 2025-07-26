import React from 'react';
import Hero from './Hero';
import About from './About';

import Clients from './Clients';


const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />

      <Clients />

    </div>
  );
};

export default HomePage; 