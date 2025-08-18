import React from 'react';
import Hero from './Hero';
import About from './About';
import ServicesSection from './ServicesSection';
import Customers from './Clients';
import KPISection from './KPISection';


const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <ServicesSection />
      <Customers />
      <KPISection />
    </div>
  );
};

export default HomePage; 