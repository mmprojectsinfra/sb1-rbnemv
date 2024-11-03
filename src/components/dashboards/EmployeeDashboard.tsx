import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Briefcase,
} from 'lucide-react';
import TaskList from './TaskList';
import WorkProgressTracker from './WorkProgressTracker';

interface EmployeeDashboardProps {
  userId: string;
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ userId }) => {
  return (
    <div className="space-y-8">
      {/* Today's Tasks */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Today's Tasks</h2>
        <TaskList userId={userId} />
      </div>

      {/* Work Progress */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Work Progress</h2>
        <WorkProgressTracker userId={userId} />
      </div>

      {/* Team Communication */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Team Updates</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <Users className="h-6 w-6 text-gray-600" />
              <div>
                <h3 className="font-semibold">Team Meeting</h3>
                <p className="text-sm text-gray-600">Today at 2:00 PM</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeDashboard;
