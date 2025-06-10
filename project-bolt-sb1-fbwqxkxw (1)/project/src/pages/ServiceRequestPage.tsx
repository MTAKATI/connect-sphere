import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import ServiceStep from '../components/ServiceStep';
import LocationStep from '../components/LocationStep';
import DetailsStep from '../components/DetailsStep';
import ContactStep from '../components/ContactStep';

const ServiceRequestPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    location: { province: '', city: '', area: '' },
    details: {},
    contact: { name: '', email: '', phone: '', consent: false }
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      navigate('/thank-you');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (stepData: any) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.location.province !== '' && formData.location.city !== '';
      case 3:
        return Object.keys(formData.details).length > 0;
      case 4:
        return formData.contact.name !== '' && formData.contact.email !== '' && 
               formData.contact.phone !== '' && formData.contact.consent;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              {category?.replace('-', ' ')} Service Request
            </h1>
            <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span className={currentStep >= 1 ? 'text-blue-600' : ''}>Service</span>
            <span className={currentStep >= 2 ? 'text-blue-600' : ''}>Location</span>
            <span className={currentStep >= 3 ? 'text-blue-600' : ''}>Details</span>
            <span className={currentStep >= 4 ? 'text-blue-600' : ''}>Contact</span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-[400px]">
          {currentStep === 1 && (
            <ServiceStep 
              category={category || ''} 
              data={formData.service}
              onUpdate={(service) => updateFormData({ service })}
            />
          )}
          {currentStep === 2 && (
            <LocationStep 
              data={formData.location}
              onUpdate={(location) => updateFormData({ location })}
            />
          )}
          {currentStep === 3 && (
            <DetailsStep 
              category={category || ''}
              service={formData.service}
              data={formData.details}
              onUpdate={(details) => updateFormData({ details })}
            />
          )}
          {currentStep === 4 && (
            <ContactStep 
              data={formData.contact}
              onUpdate={(contact) => updateFormData({ contact })}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center px-6 py-3 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            {currentStep === totalSteps ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Request
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestPage;