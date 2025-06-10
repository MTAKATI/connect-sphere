import React from 'react';
import { Shield, Star, Users, Award, Quote } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'POPIA Compliant',
      description: 'Your data is protected according to South African privacy laws'
    },
    {
      icon: Star,
      title: 'Vetted Partners',
      description: 'All service providers undergo rigorous qualification checks'
    },
    {
      icon: Users,
      title: 'Community Verified',
      description: 'Real reviews from real customers guide your decisions'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We stand behind every connection with our satisfaction promise'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Cape Town',
      service: 'Solar Installation',
      rating: 5,
      text: 'ConnectSphere made finding a solar installer incredibly easy. Within hours, I had three qualified quotes from vetted professionals.'
    },
    {
      name: 'David Chen',
      location: 'Johannesburg',
      service: 'Private Tutoring',
      rating: 5,
      text: 'Found the perfect maths tutor for my daughter through ConnectSphere. The quality matching really works - first recommendation was perfect!'
    },
    {
      name: 'Priya Patel',
      location: 'Durban',
      service: 'Financial Planning',
      rating: 5,
      text: 'Professional, trustworthy financial advisors who understood my needs. ConnectSphere saved me weeks of research and uncertainty.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built on Trust & Quality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your confidence is our priority. Every aspect of ConnectSphere is designed 
            to ensure secure, reliable, and high-quality service connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-gray-600">
              Real experiences from people who found their perfect service providers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location} • {testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner logos placeholder */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8 text-sm uppercase tracking-wide font-medium">
            Trusted by Leading Service Providers
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {/* Placeholder partner logos */}
            <div className="h-12 w-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500 font-medium">Partner 1</span>
            </div>
            <div className="h-12 w-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500 font-medium">Partner 2</span>
            </div>
            <div className="h-12 w-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500 font-medium">Partner 3</span>
            </div>
            <div className="h-12 w-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500 font-medium">Partner 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;