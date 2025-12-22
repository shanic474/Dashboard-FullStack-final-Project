import React from 'react';

const QuickActionButton = ({ title, subtitle, icon }) => {
  return (
    <button className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 p-6 text-left group">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
      <div className="flex items-center relative z-10">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-3 mr-4">
          {icon}
        </div>
        <div>
          <p className="font-light text-white text-sm tracking-wide uppercase">{title}</p>
          <p className="text-xs text-gray-500 mt-1 font-light">{subtitle}</p>
        </div>
      </div>
    </button>
  );
};

export default QuickActionButton;



