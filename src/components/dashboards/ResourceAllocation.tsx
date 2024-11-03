import React from 'react';
import { Users, Clock, AlertCircle } from 'lucide-react';

interface ResourceAllocationProps {
  departmentId: string;
}

const ResourceAllocation: React.FC<ResourceAllocationProps> = ({ departmentId }) => {
  const resources = [
    {
      project: 'Luxury Villa Renovation',
      team: [
        { name: 'Alex Johnson', role: 'Lead Designer', hours: 40 },
        { name: 'Sarah Smith', role: 'Project Manager', hours: 35 },
        { name: 'Mike Chen', role: 'Interior Designer', hours: 30 },
      ],
      status: 'optimal',
      utilization: 85,
    },
    {
      project: 'Corporate Office Design',
      team: [
        { name: 'Emily Brown', role: 'Senior Designer', hours: 45 },
        { name: 'David Wilson', role: 'Project Manager', hours: 40 },
      ],
      status: 'overallocated',
      utilization: 95,
    },
  ];

  return (
    <div className="space-y-6">
      {resources.map((resource, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold">{resource.project}</h3>
              <div className="flex items-center mt-2">
                <Users className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-600">{resource.team.length} team members</span>
              </div>
            </div>
            <div className={`flex items-center ${
              resource.status === 'optimal' ? 'text-green-500' : 'text-yellow-500'
            }`}>
              {resource.status === 'optimal' ? (
                <span className="text-sm font-medium">Optimal Allocation</span>
              ) : (
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">Over-allocated</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {resource.team.map((member, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{member.hours}h/week</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Resource Utilization</span>
              <span className="text-sm font-medium">{resource.utilization}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`rounded-full h-2 transition-all ${
                  resource.utilization > 90 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${resource.utilization}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceAllocation;