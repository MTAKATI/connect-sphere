import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Star, Shield, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');

  const serviceCategories = [
    { value: 'home-services', label: 'Home Services & Renovation' },
    { value: 'education', label: 'Education & Learning' },
    { value: 'financial-services', label: 'Financial Products' },
    { value: 'health-wellness', label: 'Health & Wellness' },
    { value: 'business-services', label: 'Business Services' },
    { value: 'technology', label: 'Technology & IT' }
  ];

  const handleGetStarted = () => {
    if (selectedService) {
      navigate(`/request/${selectedService}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badges */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center text-blue-600 text-sm font-medium">
              <Shield className="w-4 h-4 mr-1" />
              POPIA Compliant
            </div>
            <div className="flex items-center text-teal-600 text-sm font-medium">
              <Star className="w-4 h-4 mr-1" />
              Vetted Partners
            </div>
            <div className="flex items-center text-orange-600 text-sm font-medium">
              <Zap className="w-4 h-4 mr-1" />
              Instant Matching
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ConnectSphere: Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Trusted Link </span>
            to Top Services. Instantly.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From home improvements to financial advice, find vetted professionals who fit your needs. 
            Experience the future of service discovery.
          </p>

          {/* Service selector */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700 font-medium">What service do you need?</span>
            </div>
            
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 text-lg mb-6"
            >
              <option value="">Select a service category...</option>
              {serviceCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <button
              onClick={handleGetStarted}
              disabled={!selectedService}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Trusted Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;