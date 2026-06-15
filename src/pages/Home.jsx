import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesPreview from '../components/ServicesPreview';
import FeatureSection from '../components/FeatureSection';
import VerticalWork from '../components/HorizontalWork';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <FeatureSection />
      <ServicesPreview />
      <VerticalWork />
      <CTA />
    </div>
  );
};

export default Home;
