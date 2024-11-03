import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import CustomerDashboard from '../components/dashboards/CustomerDashboard';
import EmployeeDashboard from '../components/dashboards/EmployeeDashboard';
import ManagerDashboard from '../components/dashboards/ManagerDashboard';
import CEODashboard from '../components/dashboards/CEODashboard';

const Dashboard = () => {
  const { user, userRole } = useAuth();

  if (!user) {
    return <div>Please log in to access your dashboard.</div>;
  }

  const renderDashboard = () => {
    switch (userRole) {
      case 'customer':
        return <CustomerDashboard userId={user.id} />;
      case 'employee':
        return <EmployeeDashboard userId={user.id} />;
      case 'manager':
        return <ManagerDashboard departmentId={user.department || ''} />;
      case 'ceo':
        return <CEODashboard />;
      default:
        return <div>Invalid user role</div>;
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="text-gray-300 mt-2">
            {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">{renderDashboard()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
