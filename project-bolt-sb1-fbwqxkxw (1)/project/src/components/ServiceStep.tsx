import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceStepProps {
  category: string;
  data: string;
  onUpdate: (service: string) => void;
}

const ServiceStep: React.FC<ServiceStepProps> = ({ category, data, onUpdate }) => {
  const serviceOptions = {
    'home-services': [
      'Solar Panel Installation',
      'Electrical Repairs & Installation',
      'Plumbing Services',
      'Home Construction',
      'Renovations & Remodeling',
      'HVAC Systems',
      'Roofing Services',
      'Painting & Decorating'
    ],
    'education': [
      'Private Tutoring',
      'Online Course Development',
      'Skills Training Programs',
      'Language Learning',
      'Test Preparation',
      'Professional Certification',
      'Academic Coaching',
      'Educational Consulting'
    ],
    'financial-services': [
      'Financial Planning',
      'Insurance Services',
      'Investment Advisory',
      'Banking Solutions',
      'Tax Preparation',
      'Retirement Planning',
      'Mortgage Services',
      'Business Finance'
    ],
    'default': [
      'Consultation Services',
      'General Support',
      'Custom Solutions',
      'Other Services'
    ]
  };

  const services = serviceOptions[category as keyof typeof serviceOptions] || serviceOptions.default;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What service do you need?
        </h2>
        <p className="text-gray-600">
          Select the service that best matches your requirements. This helps us connect you with the right professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => onUpdate(service)}
            className={`p-4 text-left border-2 rounded-lg transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 ${
              data === service 
                ? 'border-blue-500 bg-blue-50 text-blue-900' 
                : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{service}</span>
              {data === service && (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Custom option */}
      <div className="border-t pt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or describe your specific needs:
        </label>
        <textarea
          value={data.startsWith('Custom: ') ? data.replace('Custom: ', '') : ''}
          onChange={(e) => onUpdate(e.target.value ? `Custom: ${e.target.value}` : '')}
          placeholder="Describe what you're looking for in detail..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          rows={3}
        />
      </div>
    </div>
  );
};

export default ServiceStep;