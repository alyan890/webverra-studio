import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesPreview from '../components/ServicesPreview';
import HorizontalWork from '../components/HorizontalWork';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <ServicesPreview />
      <HorizontalWork />
      <CTA />
    </div>
  );
};

export default Home;
