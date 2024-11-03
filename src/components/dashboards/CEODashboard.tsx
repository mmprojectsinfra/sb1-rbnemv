import React from 'react';
import { DollarSign, TrendingUp, Users, PieChart } from 'lucide-react';
import CompanyMetrics from './CompanyMetrics';
import DepartmentPerformance from './DepartmentPerformance';
import RevenueChart from './RevenueChart';

const CEODashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Revenue</h3>
            <DollarSign className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">₹2.4M</p>
          <p className="text-sm text-green-500 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12% from last month
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Projects</h3>
            <PieChart className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">156</p>
          <p className="text-sm text-blue-500 mt-2">42 in progress</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Employees</h3>
            <Users className="h-6 w-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold mt-2">89</p>
          <p className="text-sm text-purple-500 mt-2">+5 this quarter</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Customer Satisfaction</h3>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">94%</p>
          <p className="text-sm text-green-500 mt-2">+2% from last month</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Revenue Overview</h2>
        <RevenueChart />
      </div>

      {/* Company Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Company Metrics</h2>
        <CompanyMetrics />
      </div>

      {/* Department Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Department Performance</h2>
        <DepartmentPerformance />
      </div>
    </div>
  );
};

export default CEODashboard;