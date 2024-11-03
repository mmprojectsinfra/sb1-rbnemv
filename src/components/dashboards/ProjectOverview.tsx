import React from 'react';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface ProjectOverviewProps {
  departmentId: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ departmentId }) => {
  // Mock data - In production, fetch from API
  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Renovation',
      client: 'Robert Wilson',
      deadline: '2024-04-15',
      progress: 65,
      status: 'on-track',
      budget: {
        total: 2500000,
        spent: 1625000,
      },
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      client: 'Tech Solutions Ltd',
      deadline: '2024-05-01',
      progress: 40,
      status: 'delayed',
      budget: {
        total: 3500000,
        spent: 1400000,
      },
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
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

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium">Deadline</span>
              </div>
              <p className="text-gray-600">{project.deadline}</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium">Budget Utilization</span>
              </div>
              <p className="text-gray-600">
                ₹{(project.budget.spent / 100000).toFixed(1)}L / ₹{(project.budget.total / 100000).toFixed(1)}L
              </p>
            </div>
          </div>

          <div>
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
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;