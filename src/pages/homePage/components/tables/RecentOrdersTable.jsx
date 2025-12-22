import React from 'react';
import RecentOrdersRow from './RecentOrdersRow';

const RecentOrdersTable = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
      case 'Preparing':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'Pending':
        return 'bg-gray-700/50 text-gray-400 border border-gray-700';
      default:
        return 'bg-gray-700/50 text-gray-400 border border-gray-700';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-light text-white mb-6 pb-2 border-b border-amber-500/20 tracking-wide uppercase">Recent Orders</h2>
      <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
        <div className="overflow-x-auto relative z-10">
          <table className="min-w-full divide-y divide-amber-500/20">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Order ID</th>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">User</th>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Total</th>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Status</th>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Date</th>
                <th className="px-4 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-500/20">
              {data.map((order) => (
                <RecentOrdersRow key={order.id} order={order} getStatusColor={getStatusColor} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersTable;

