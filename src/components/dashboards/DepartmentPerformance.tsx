import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const DepartmentPerformance = () => {
  const departments = [
    {
      name: 'Design',
      metrics: {
        efficiency: 92,
        projects: 45,
        satisfaction: 96,
      },
      trend: 'up',
      change: 8,
    },
    {
      name: 'Construction',
      metrics: {
        efficiency: 88,
        projects: 32,
        satisfaction: 90,
      },
      trend: 'up',
      change: 5,
    },
    {
      name: 'Project Management',
      metrics: {
        efficiency: 94,
        projects: 28,
        satisfaction: 92,
      },
      trend: 'up',
      change: 12,
    },
  ];

  return (
    <div className="space-y-6">
      {departments.map((dept, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-semibold">{dept.name}</h3>
            <div className={`flex items-center ${
              dept.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {dept.trend === 'up' ? (
                <TrendingUp className="h-5 w-5 mr-1" />
              ) : (
                <TrendingDown className="h-5 w-5 mr-1" />
              )}
              <span>{dept.change}%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Efficiency</p>
              <p className="text-xl font-semibold">{dept.metrics.efficiency}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Projects</p>
              <p className="text-xl font-semibold">{dept.metrics.projects}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Satisfaction</p>
              <p className="text-xl font-semibold">{dept.metrics.satisfaction}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentPerformance;