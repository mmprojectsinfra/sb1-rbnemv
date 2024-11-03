import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface WorkProgressTrackerProps {
  userId: string;
}

const WorkProgressTracker: React.FC<WorkProgressTrackerProps> = ({ userId }) => {
  // Mock data - In production, fetch from API
  const projects = [
    {
      id: 1,
      title: 'Living Room Renovation',
      client: 'John Smith',
      progress: 75,
      status: 'on-track',
      tasks: [
        { title: 'Wall Painting', status: 'completed' },
        { title: 'Flooring', status: 'in-progress' },
        { title: 'Furniture Installation', status: 'pending' },
      ],
    },
    {
      id: 2,
      title: 'Kitchen Remodeling',
      client: 'Sarah Johnson',
      progress: 30,
      status: 'delayed',
      tasks: [
        { title: 'Plumbing Work', status: 'completed' },
        { title: 'Cabinet Installation', status: 'in-progress' },
        { title: 'Countertop Installation', status: 'pending' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">Client: {project.client}</p>
            </div>
            <div className="flex items-center space-x-2">
              {project.status === 'on-track' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              <span className="text-sm font-medium capitalize">{project.status}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black rounded-full h-2 transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {project.tasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm">{task.title}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProgressTracker;