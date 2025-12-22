import React from 'react';

const LowStockAlerts = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-light text-white mb-6 pb-2 border-b border-amber-500/20 tracking-wide uppercase">Low-Stock Alerts</h2>
      <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 p-6">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
        {data.length > 0 ? (
          <div className="space-y-4 relative z-10">
            {data.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
                <div className="flex-1">
                  <p className="text-sm font-light text-white">{alert.name}</p>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Current: {alert.current} | Threshold: {alert.threshold}
                  </p>
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 text-xs font-light text-red-400 bg-red-500/20 border border-red-500/30 rounded-sm">
                    Low Stock
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center py-4 font-light relative z-10">No low-stock alerts</p>
        )}
      </div>
    </div>
  );
};

export default LowStockAlerts;

