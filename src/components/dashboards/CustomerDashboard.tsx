import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import ProjectTracker from './ProjectTracker';
import ServiceHistory from './ServiceHistory';

interface CustomerDashboardProps {
  userId: string;
}

const CustomerDashboard: React.FC<CustomerDashboardProps> = ({ userId }) => {
  return (
    <div className="space-y-8">
      {/* Active Projects */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Active Projects</h2>
        <ProjectTracker userId={userId} />
      </div>

      {/* Service History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Service History</h2>
        <ServiceHistory userId={userId} />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
            Schedule Consultation
          </button>
          <button className="p-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
