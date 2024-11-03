import React from 'react';
import { Calendar, Clock, MapPin, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const bookings = [
  {
    id: 1,
    service: 'Interior Design',
    date: '2024-03-25',
    time: '10:00 AM',
    location: 'Mumbai',
    status: 'confirmed',
    details: 'Complete home renovation project',
  },
  {
    id: 2,
    service: 'Carpentry',
    date: '2024-04-02',
    time: '02:00 PM',
    location: 'Pune',
    status: 'pending',
    details: 'Custom wardrobe installation',
  },
];

const UserDashboard = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bookings Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{booking.service}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Calendar className="h-5 w-5" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>{booking.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <FileText className="h-5 w-5" />
                        <span>{booking.details}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Confirmed Bookings</span>
                  </div>
                  <span className="font-semibold">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <span>Pending Bookings</span>
                  </div>
                  <span className="font-semibold">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;