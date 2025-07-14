import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import ContractVehicles from './ContractVehicles';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <Services />
      <Clients />
      <ContractVehicles />
    </div>
  );
};

export default HomePage; 