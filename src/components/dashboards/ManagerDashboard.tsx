import React from 'react';
import { Users, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import TeamPerformance from './TeamPerformance';
import ProjectOverview from './ProjectOverview';
import ResourceAllocation from './ResourceAllocation';

interface ManagerDashboardProps {
  departmentId: string;
}

const ManagerDashboard: React.FC<ManagerDashboardProps> = ({
  departmentId,
}) => {
  return (
    <div className="space-y-8">
      {/* Department Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Active Projects</h3>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Team Members</h3>
            <Users className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Completion Rate</h3>
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">92%</p>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Team Performance</h2>
        <TeamPerformance departmentId={departmentId} />
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <ProjectOverview departmentId={departmentId} />
      </div>

      {/* Resource Allocation */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Resource Allocation</h2>
        <ResourceAllocation departmentId={departmentId} />
      </div>
    </div>
  );
};

export default ManagerDashboard;