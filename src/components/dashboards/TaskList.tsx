import React from 'react';
import { Clock, CheckCircle, User } from 'lucide-react';

interface TaskListProps {
  userId: string;
}

const TaskList: React.FC<TaskListProps> = ({ userId }) => {
  // Mock data - In production, fetch from API
  const tasks = [
    {
      id: 1,
      title: 'Site Visit - Living Room Renovation',
      client: 'John Smith',
      time: '10:00 AM',
      location: 'Mumbai',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Material Procurement - Kitchen Project',
      client: 'Sarah Johnson',
      time: '2:00 PM',
      location: 'Mumbai',
      priority: 'medium',
    },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex-grow">
            <h3 className="font-semibold">{task.title}</h3>
            <div className="flex items-center space-x-4 mt-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">{task.client}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{task.time}</span>
              </div>
            </div>
          </div>
          <button className="ml-4 p-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
            <CheckCircle className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;