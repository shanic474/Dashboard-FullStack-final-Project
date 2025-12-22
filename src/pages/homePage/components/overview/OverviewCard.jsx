import React from 'react';

const OverviewCard = ({ title, value, icon }) => {
  return (
    <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs text-gray-500 font-light uppercase tracking-wide">{title}</p>
          <p className={`text-2xl font-light mt-2 ${typeof value === 'string' && value.includes('$') ? 'text-amber-400' : 'text-white'}`}>
            {typeof value === 'number' && value > 1000 ? value.toLocaleString() : value}
          </p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-full p-3">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

