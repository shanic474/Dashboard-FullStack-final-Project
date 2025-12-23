import React from 'react';
import UsersRow from './UsersRow';

const UsersTable = ({ users, onViewUser }) => {
  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
      : 'bg-gray-700/50 text-gray-400 border border-gray-700';
  };

  return (
    <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
      
      <div className="overflow-x-auto relative z-10">
        <table className="min-w-full divide-y divide-amber-500/20">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Name</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">ID</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Email</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Total Orders</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Joined Date</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Status</th>
              <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-500/20">
            {users.map((user) => {
              return <UsersRow user={user} getStatusColor={getStatusColor} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;

