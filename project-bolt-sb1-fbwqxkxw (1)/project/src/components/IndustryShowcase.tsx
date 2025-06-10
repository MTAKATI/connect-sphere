import React from 'react';
import { Link } from 'react-router-dom';
import { Home, GraduationCap, DollarSign, Wrench, BookOpen, TrendingUp } from 'lucide-react';

const IndustryShowcase: React.FC = () => {
  const industries = [
    {
      id: 'home-services',
      icon: Home,
      title: 'Home Services & Renovation',
      description: 'Plumbing, electrical, solar installation, construction, and home improvements from trusted professionals.',
      services: ['Solar Installation', 'Electrical Repairs', 'Plumbing', 'Home Construction', 'Renovations'],
      color: 'blue',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Learning',
      description: 'Private tutoring, online courses, skills training, and educational services tailored to your needs.',
      services: ['Private Tutoring', 'Online Courses', 'Skills Training', 'Language Learning', 'Test Prep'],
      color: 'teal',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'financial-services',
      icon: DollarSign,
      title: 'Financial Products',
      description: 'Financial planning, insurance, investment advice, and banking solutions from certified advisors.',
      services: ['Financial Planning', 'Insurance', 'Investment Advice', 'Banking Solutions', 'Tax Services'],
      color: 'orange',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-quality services across multiple industries. 
            ConnectSphere partners with the best to bring you excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const colors = colorClasses[industry.color as keyof typeof colorClasses];

            return (
              <div key={industry.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${colors.bg} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Services list */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.slice(0, 3).map((service, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                      {industry.services.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{industry.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/request/${industry.id}`}
                    className={`block w-full text-center ${colors.button} text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
                  >
                    Find {industry.title.split(' ')[0]} Services
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional industries preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Coming Soon</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Wrench, name: 'Auto Services', color: 'text-purple-600' },
              { icon: BookOpen, name: 'Legal Services', color: 'text-indigo-600' },
              { icon: TrendingUp, name: 'Marketing', color: 'text-pink-600' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <item.icon className={`w-5 h-5 ${item.color} mr-2`} />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;