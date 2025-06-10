import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import IndustryShowcase from '../components/IndustryShowcase';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <IndustryShowcase />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default HomePage;