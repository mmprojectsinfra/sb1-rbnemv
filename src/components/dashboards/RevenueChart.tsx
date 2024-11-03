import React from 'react';

const RevenueChart = () => {
  // In a real application, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation
  const monthlyRevenue = [
    { month: 'Jan', amount: 2500000 },
    { month: 'Feb', amount: 2800000 },
    { month: 'Mar', amount: 3200000 },
    { month: 'Apr', amount: 2900000 },
    { month: 'May', amount: 3500000 },
    { month: 'Jun', amount: 3800000 },
  ];

  const maxAmount = Math.max(...monthlyRevenue.map(item => item.amount));

  return (
    <div className="h-64">
      <div className="flex h-full items-end space-x-4">
        {monthlyRevenue.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-black rounded-t"
              style={{ 
                height: `${(item.amount / maxAmount) * 100}%`,
                transition: 'height 0.3s ease-in-out'
              }}
            />
            <div className="mt-2 text-sm text-gray-600">{item.month}</div>
            <div className="text-sm font-medium">₹{(item.amount / 100000).toFixed(1)}L</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;