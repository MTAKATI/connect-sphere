import React from 'react';
import { CheckCircle, Clock, Users, Zap, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You! Your Request is Being Processed
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're matching you with the best professionals in your area. 
            You'll hear from them shortly!
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Happens Next
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. System Qualification</h3>
              <p className="text-gray-600 text-sm">
                Our intelligent system qualifies your request and matches you with the most suitable professionals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Professional Contact</h3>
              <p className="text-gray-600 text-sm">
                Top-rated, vetted partners in your area will contact you with quotes and availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Service Completion</h3>
              <p className="text-gray-600 text-sm">
                Choose your preferred professional and get your service completed with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Expectation */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="font-semibold text-blue-900">Expected Timeline</h3>
          </div>
          <p className="text-blue-800">
            You can expect to hear from qualified professionals within <strong>24 hours</strong>. 
            Most customers receive their first contact within 2-4 hours during business days.
          </p>
        </div>

        {/* Share Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-xl font-semibold mb-4">Love ConnectSphere?</h3>
          <p className="text-gray-300 mb-6">
            Help your friends and family discover the best service providers too.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Share ConnectSphere
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Additional Request */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Need another service?</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Make Another Request
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;