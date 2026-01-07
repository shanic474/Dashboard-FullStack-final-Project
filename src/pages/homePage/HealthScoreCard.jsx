import React from 'react';

const HealthScoreCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-xs font-light text-gray-500 uppercase tracking-wide">{title}</h3>
        {icon}
      </div>
      <p className={`text-3xl font-light relative z-10 ${typeof value === 'string' && value.includes('%') ? 'text-amber-400' : 'text-white'}`}>
        {value}
      </p>
      <p className="text-xs text-gray-500 mt-1 font-light relative z-10">{subtitle}</p>
    </div>
  );
};

export default HealthScoreCard;







