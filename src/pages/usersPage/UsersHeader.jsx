import React from 'react';

const UsersHeader = () => {
  return (
    <div className="bg-linear-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a] border-b border-amber-500/20 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="pb-2 border-b border-amber-500/20">
          <h1 className="text-3xl font-light text-white tracking-wide uppercase">Users</h1>
          <p className="text-gray-400 mt-1 text-sm font-light">Manage customer accounts</p>
        </div>
        <button className="px-6 py-2.5 bg-amber-500/10 border border-amber-500/40 text-amber-300 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <span>Add User</span>
        </button>
      </div>
    </div>
  );
};

export default UsersHeader;





