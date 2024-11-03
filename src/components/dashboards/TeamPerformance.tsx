import React from 'react';
import { User, TrendingUp, TrendingDown } from 'lucide-react';

interface TeamPerformanceProps {
  departmentId: string;
}

const TeamPerformance: React.FC<TeamPerformanceProps> = ({ departmentId }) => {
  // Mock data - In production, fetch from API
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Senior Designer',
      performance: 95,
      trend: 'up',
      projectsCompleted: 12,
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Project Manager',
      performance: 88,
      trend: 'down',
      projectsCompleted: 8,
    },
  ];

  return (
    <div className="space-y-6">
      {teamMembers.map((member) => (
        <div key={member.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">{member.performance}%</span>
                {member.trend === 'up' ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {member.projectsCompleted} projects completed
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPerformance;