import React from 'react';
import { Star, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

const LeadDashboard: React.FC = () => {
  // Mock lead data
  const mockLeads = [
    {
      id: 1,
      service: 'Solar Panel Installation',
      location: 'Cape Town, Gardens',
      customer: 'Nomusa Dlamini',
      email: 'nomusa.d@email.com',
      phone: '+27 82 123 4567',
      timestamp: '2 hours ago',
      priority: 'High',
      description: 'Looking for solar panel installation for a 3-bedroom house. Interested in 5kW system with battery backup.',
      urgency: 'Within 2 weeks'
    },
    {
      id: 2,
      service: 'Electrical Repairs',
      location: 'Johannesburg, Sandton',
      customer: 'Michael Johnson',
      email: 'mjohnson@email.com',
      phone: '+27 83 987 6543',
      timestamp: '4 hours ago',
      priority: 'Medium',
      description: 'Power outage in kitchen and guest bathroom. Need certified electrician for inspection and repair.',
      urgency: 'This week'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Dashboard</h1>
          <p className="text-gray-600">Manage your qualified leads from ConnectSphere</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Leads</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-teal-600">8</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Converted</p>
                <p className="text-2xl font-bold text-green-600">5</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-orange-600">62%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Lead Cards */}
        <div className="space-y-6">
          {mockLeads.map((lead) => (
            <div key={lead.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{lead.service}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {lead.priority} Priority
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {lead.location}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {lead.timestamp}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      High Confidence Match
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Customer Information</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <p className="font-medium">{lead.customer}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <p className="font-medium">{lead.email}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <p className="font-medium">{lead.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Project Details</h4>
                  <p className="text-gray-700 text-sm mb-2">{lead.description}</p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-600 mr-2">Timeline:</span>
                    <span className="font-medium text-orange-600">{lead.urgency}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Accept Lead
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Full Details
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Contact Customer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadDashboard;