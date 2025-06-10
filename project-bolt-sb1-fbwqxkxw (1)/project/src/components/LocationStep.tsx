import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationData {
  province: string;
  city: string;
  area: string;
}

interface LocationStepProps {
  data: LocationData;
  onUpdate: (location: LocationData) => void;
}

const LocationStep: React.FC<LocationStepProps> = ({ data, onUpdate }) => {
  const provinces = [
    'Western Cape',
    'Gauteng', 
    'KwaZulu-Natal',
    'Eastern Cape',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
    'Free State'
  ];

  const cities = {
    'Western Cape': ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Hermanus'],
    'Gauteng': ['Johannesburg', 'Pretoria', 'Sandton', 'Centurion', 'Randburg'],
    'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Newcastle', 'Richards Bay', 'Ladysmith'],
    'Eastern Cape': ['Port Elizabeth', 'East London', 'Grahamstown', 'King Williams Town'],
    'Limpopo': ['Polokwane', 'Tzaneen', 'Musina', 'Thohoyandou'],
    'Mpumalanga': ['Nelspruit', 'Witbank', 'Secunda', 'Middelburg'],
    'North West': ['Potchefstroom', 'Klerksdorp', 'Rustenburg', 'Mahikeng'],
    'Northern Cape': ['Kimberley', 'Upington', 'Springbok', 'De Aar'],
    'Free State': ['Bloemfontein', 'Welkom', 'Kroonstad', 'Bethlehem']
  };

  const updateField = (field: keyof LocationData, value: string) => {
    const newData = { ...data, [field]: value };
    if (field === 'province') {
      newData.city = '';
      newData.area = '';
    } else if (field === 'city') {
      newData.area = '';
    }
    onUpdate(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Where do you need the service?
        </h2>
        <p className="text-gray-600">
          Help us find professionals in your area. Your location information helps us match you with nearby service providers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Province */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Province *
          </label>
          <select
            value={data.province}
            onChange={(e) => updateField('province', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <select
            value={data.city}
            onChange={(e) => updateField('city', e.target.value)}
            disabled={!data.province}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Select City</option>
            {data.province && cities[data.province as keyof typeof cities]?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Specific Area */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specific Area/Suburb (Optional)
        </label>
        <input
          type="text"
          value={data.area}
          onChange={(e) => updateField('area', e.target.value)}
          placeholder="e.g., Gardens, Sandton City, Umhlanga"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-sm text-gray-500 mt-2">
          Providing a specific area helps us find the closest professionals to you.
        </p>
      </div>

      {/* Location confirmation */}
      {data.province && data.city && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <div>
              <p className="text-blue-900 font-medium">Service Location:</p>
              <p className="text-blue-800">
                {data.area && `${data.area}, `}{data.city}, {data.province}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationStep;