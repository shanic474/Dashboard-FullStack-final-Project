import React from 'react';

const SidebarFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-500/20">
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 bg-linear-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
          <span className="text-amber-400 text-xl">🍽️</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;

