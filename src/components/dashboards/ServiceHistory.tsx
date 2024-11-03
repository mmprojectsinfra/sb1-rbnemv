import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ServiceHistoryProps {
  userId: string;
}

const ServiceHistory: React.FC<ServiceHistoryProps> = ({ userId }) => {
  // Mock data - In production, fetch from API
  const services = [
    {
      id: 1,
      service: 'Bathroom Renovation',
      date: '2024-02-15',
      location: 'Mumbai',
      cost: '₹85,000',
      status: 'completed',
    },
    {
      id: 2,
      service: 'Painting Services',
      date: '2024-01-20',
      location: 'Mumbai',
      cost: '₹25,000',
      status: 'completed',
    },
  ];

  return (
    <div className="space-y-6">
      {services.map((service) => (
        <div key={service.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{service.service}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{service.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{service.location}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-semibold">{service.cost}</span>
              <div className="flex items-center space-x-2 mt-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Completed</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceHistory;