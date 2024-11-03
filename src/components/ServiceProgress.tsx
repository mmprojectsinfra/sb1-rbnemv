import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';

interface Stage {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ServiceProgressProps {
  stages: Stage[];
}

const ServiceProgress: React.FC<ServiceProgressProps> = ({ stages }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-start mb-8 last:mb-0">
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stage.status === 'completed' ? 'bg-green-500' :
                stage.status === 'current' ? 'bg-blue-500' :
                'bg-gray-300'
              }`}>
                {stage.status === 'completed' ? (
                  <Check className="w-5 h-5 text-white" />
                ) : stage.status === 'current' ? (
                  <Clock className="w-5 h-5 text-white" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
            <div className="ml-4 flex-grow">
              <h4 className={`text-lg font-semibold ${
                stage.status === 'completed' ? 'text-green-500' :
                stage.status === 'current' ? 'text-blue-500' :
                'text-gray-400'
              }`}>
                {stage.title}
              </h4>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProgress;