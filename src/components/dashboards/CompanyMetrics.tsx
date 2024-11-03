import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const CompanyMetrics = () => {
  const metrics = [
    {
      label: 'Customer Acquisition Cost',
      value: '₹12,500',
      change: -8,
      trend: 'down',
    },
    {
      label: 'Customer Lifetime Value',
      value: '₹85,000',
      change: 15,
      trend: 'up',
    },
    {
      label: 'Project Completion Rate',
      value: '94%',
      change: 5,
      trend: 'up',
    },
    {
      label: 'Employee Satisfaction',
      value: '87%',
      change: 3,
      trend: 'up',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">{metric.label}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{metric.value}</span>
            <div className={`flex items-center ${
              metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {metric.trend === 'up' ? (
                <TrendingUp className="h-5 w-5 mr-1" />
              ) : (
                <TrendingDown className="h-5 w-5 mr-1" />
              )}
              <span>{Math.abs(metric.change)}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyMetrics;