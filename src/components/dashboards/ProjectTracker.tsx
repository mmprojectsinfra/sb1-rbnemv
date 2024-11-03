import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface ProjectTrackerProps {
  userId: string;
}

const ProjectTracker: React.FC<ProjectTrackerProps> = ({ userId }) => {
  // Mock data - In production, fetch from API
  const projects = [
    {
      id: 1,
      title: 'Living Room Renovation',
      progress: 75,
      status: 'in-progress',
      nextMilestone: 'Furniture Installation',
      dueDate: '2024-03-28',
    },
    {
      id: 2,
      title: 'Kitchen Remodeling',
      progress: 30,
      status: 'in-progress',
      nextMilestone: 'Cabinets Installation',
      dueDate: '2024-04-15',
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">Next: {project.nextMilestone}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">Due: {project.dueDate}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black rounded-full h-2 transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {project.status === 'in-progress' ? (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            <span className="text-sm font-medium capitalize">{project.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTracker;