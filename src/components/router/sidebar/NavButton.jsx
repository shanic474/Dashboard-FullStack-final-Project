import React from 'react';

const NavButton = ({ id, label, icon, activeItem, onClick, animationDelay = '0s' }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`
          w-full flex items-center px-4 py-3 rounded-sm transition-all duration-300 ease-in-out
          transform hover:translate-x-2
          ${activeItem === id 
            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/20' 
            : 'text-gray-400 hover:bg-gray-800/50 hover:text-amber-400 hover:border hover:border-amber-500/20 border border-transparent'
          }
          animate-slide-in
        `}
        style={{ 
          animationDelay: animationDelay,
          animationFillMode: 'both'
        }}
      >
        <span className="text-xl mr-3 transform transition-transform duration-300 hover:scale-110">
          {icon}
        </span>
        <span className="font-light text-sm tracking-wide uppercase">{label}</span>
        {activeItem === id && (
          <span className="ml-auto">
            <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </button>
    </li>
  );
};

export default NavButton;

