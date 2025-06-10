import React from 'react';
import { User, Mail, Phone, Shield, CheckCircle } from 'lucide-react';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface ContactStepProps {
  data: ContactData;
  onUpdate: (contact: ContactData) => void;
}

const ContactStep: React.FC<ContactStepProps> = ({ data, onUpdate }) => {
  const updateField = (field: keyof ContactData, value: string | boolean) => {
    onUpdate({ ...data, [field]: value });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^(\+27|0)[0-9]{9}$/.test(phone.replace(/\s/g, ''));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          How can professionals contact you?
        </h2>
        <p className="text-gray-600">
          We'll share your contact information only with qualified professionals who match your requirements.
        </p>
      </div>

      {/* Contact Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="your.email@example.com"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              data.email && !isValidEmail(data.email) 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {data.email && !isValidEmail(data.email) && (
            <p className="text-sm text-red-600 mt-1">Please enter a valid email address</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="+27 82 123 4567 or 082 123 4567"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              data.phone && !isValidPhone(data.phone) 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {data.phone && !isValidPhone(data.phone) && (
            <p className="text-sm text-red-600 mt-1">Please enter a valid South African phone number</p>
          )}
        </div>
      </div>

      {/* POPIA Consent */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-blue-900 mb-3">Privacy & Data Protection</h3>
            <p className="text-blue-800 text-sm mb-4 leading-relaxed">
              ConnectSphere is committed to protecting your privacy in accordance with the Protection of Personal Information Act (POPIA). 
              Your information will only be used to connect you with relevant service providers and improve our services.
            </p>
            
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => updateField('consent', e.target.checked)}
                className="mt-1 mr-3 flex-shrink-0"
              />
              <span className={`text-sm ${data.consent ? 'text-blue-900' : 'text-blue-700'}`}>
                <strong>I consent to ConnectSphere collecting and processing my personal information</strong> to:
                <ul className="mt-2 ml-4 list-disc space-y-1">
                  <li>Match me with suitable service providers</li>
                  <li>Share my contact details with qualified professionals</li>
                  <li>Send me relevant service updates and communications</li>
                </ul>
                <span className="block mt-2 text-xs">
                  You can withdraw this consent at any time by contacting us at privacy@connectsphere.co.za
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Validation Summary */}
      {data.name && data.email && data.phone && data.consent && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <div>
              <p className="text-green-900 font-medium">Ready to submit!</p>
              <p className="text-green-800 text-sm">
                We'll connect you with qualified professionals who will contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* What happens next */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">What happens after you submit:</h4>
        <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
          <li>We'll immediately match your request with qualified professionals</li>
          <li>Vetted service providers will contact you directly within 24 hours</li>
          <li>You'll receive multiple quotes to compare and choose from</li>
          <li>Select your preferred professional and get your service completed</li>
        </ol>
      </div>
    </div>
  );
};

export default ContactStep;