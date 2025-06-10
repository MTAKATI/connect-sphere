import React from 'react';
import { Search, Users, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Tell Us What You Need',
      description: 'Share your service requirements through our intuitive form. Be as specific as possible for the best matches.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Get Matched with Experts',
      description: 'Our intelligent system connects you with pre-vetted professionals in your area who specialize in your needs.',
      color: 'teal'
    },
    {
      icon: CheckCircle,
      title: 'Connect & Succeed',
      description: 'Choose from qualified professionals, compare quotes, and get your project completed with confidence.',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How ConnectSphere Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting the right service provider has never been easier. 
            Follow these simple steps to connect with top professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              teal: 'bg-teal-100 text-teal-600',
              green: 'bg-green-100 text-green-600'
            };

            return (
              <div key={index} className="relative text-center group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-bold mb-6">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[step.color as keyof typeof colorClasses]} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to experience the ConnectSphere difference?</p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
            Start Your Service Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;