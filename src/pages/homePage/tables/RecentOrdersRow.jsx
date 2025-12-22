import React from 'react';

const RecentOrdersRow = ({ order, getStatusColor }) => {
  return (
    <tr className="hover:bg-[#1a1a1a]/50 transition-colors">
      <td className="px-4 py-3 whitespace-nowrap text-sm font-light text-white">{order.id}</td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{order.user}</td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-amber-400">${order.total.toFixed(2)}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs font-light rounded-sm ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-xs font-light text-red-400 bg-red-500/10 border border-red-500/30 rounded-sm hover:bg-red-500/20 transition-colors">
            Remove
          </button>
          <button className="px-3 py-1 text-xs font-light text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-sm hover:bg-blue-500/20 transition-colors">
            View
          </button>
          <button className="px-3 py-1 text-xs font-light text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-sm hover:bg-amber-500/20 transition-colors">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RecentOrdersRow;

