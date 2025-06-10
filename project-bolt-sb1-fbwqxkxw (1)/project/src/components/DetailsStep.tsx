import React from 'react';
import { Calendar, Clock, DollarSign, AlertCircle } from 'lucide-react';

interface DetailsStepProps {
  category: string;
  service: string;
  data: any;
  onUpdate: (details: any) => void;
}

const DetailsStep: React.FC<DetailsStepProps> = ({ category, service, data, onUpdate }) => {
  const updateField = (field: string, value: any) => {
    onUpdate({ ...data, [field]: value });
  };

  const renderServiceSpecificFields = () => {
    if (service.toLowerCase().includes('solar')) {
      return (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={data.propertyType || ''}
                onChange={(e) => updateField('propertyType', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Property Type</option>
                <option value="residential">Residential Home</option>
                <option value="commercial">Commercial Building</option>
                <option value="industrial">Industrial Facility</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Size (kW)
              </label>
              <select
                value={data.systemSize || ''}
                onChange={(e) => updateField('systemSize', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select System Size</option>
                <option value="1-3kw">1-3 kW (Small home)</option>
                <option value="4-6kw">4-6 kW (Medium home)</option>
                <option value="7-10kw">7-10 kW (Large home)</option>
                <option value="10kw+">10+ kW (Commercial)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={data.batteryBackup || false}
                onChange={(e) => updateField('batteryBackup', e.target.checked)}
                className="mr-2"
              />
              Include battery backup system
            </label>
          </div>
        </>
      );
    }

    if (service.toLowerCase().includes('tutoring') || service.toLowerCase().includes('education')) {
      return (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject/Area
              </label>
              <input
                type="text"
                value={data.subject || ''}
                onChange={(e) => updateField('subject', e.target.value)}
                placeholder="e.g., Mathematics, Physics, English"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Grade/Level
              </label>
              <select
                value={data.gradeLevel || ''}
                onChange={(e) => updateField('gradeLevel', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Level</option>
                <option value="primary">Primary School (Grade 1-7)</option>
                <option value="high-school">High School (Grade 8-12)</option>
                <option value="university">University/College</option>
                <option value="adult">Adult Learning</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Format
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Online', 'In-Person', 'Hybrid', 'Group Sessions'].map((format) => (
                <label key={format} className="flex items-center">
                  <input
                    type="radio"
                    name="format"
                    value={format.toLowerCase()}
                    checked={data.format === format.toLowerCase()}
                    onChange={(e) => updateField('format', e.target.value)}
                    className="mr-2"
                  />
                  {format}
                </label>
              ))}
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tell us more about your needs
        </h2>
        <p className="text-gray-600">
          The more details you provide, the better we can match you with the right professional for your {service.toLowerCase()}.
        </p>
      </div>

      {/* Service-specific fields */}
      {renderServiceSpecificFields()}

      {/* Common fields */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <AlertCircle className="w-4 h-4 inline mr-1" />
          Project Description *
        </label>
        <textarea
          value={data.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Please describe your project in detail, including any specific requirements, challenges, or preferences..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          rows={4}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            When do you need this completed?
          </label>
          <select
            value={data.timeline || ''}
            onChange={(e) => updateField('timeline', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="this-month">Within this month</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Budget Range (Optional)
          </label>
          <select
            value={data.budget || ''}
            onChange={(e) => updateField('budget', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Budget Range</option>
            <option value="under-1000">Under R1,000</option>
            <option value="1000-5000">R1,000 - R5,000</option>
            <option value="5000-15000">R5,000 - R15,000</option>
            <option value="15000-50000">R15,000 - R50,000</option>
            <option value="over-50000">Over R50,000</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="w-4 h-4 inline mr-1" />
          Preferred Contact Time
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['Morning (8AM-12PM)', 'Afternoon (12PM-5PM)', 'Evening (5PM-8PM)', 'Anytime'].map((time) => (
            <label key={time} className="flex items-center">
              <input
                type="radio"
                name="contactTime"
                value={time.toLowerCase()}
                checked={data.contactTime === time.toLowerCase()}
                onChange={(e) => updateField('contactTime', e.target.value)}
                className="mr-2"
              />
              <span className="text-sm">{time}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      {Object.keys(data).length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-green-600 mr-2" />
            <div>
              <p className="text-green-900 font-medium">Great! You're providing detailed information</p>
              <p className="text-green-800 text-sm">This helps us find the perfect match for your needs.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsStep;