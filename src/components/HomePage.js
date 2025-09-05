import React from 'react';
import Hero from './Hero';
import About from './About';
import ServicesSection from './ServicesSection';
import Customers from './Clients';


const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <ServicesSection />
      <Customers />
    </div>
  );
};

export default HomePage; 