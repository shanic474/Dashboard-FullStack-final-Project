import React from 'react';
import { useModalStore } from '../../store/modal.store';
import { useSelectionsStore } from '../../store/selections.store';

const UserModal = () => {
  const modalActive = useModalStore(state => state.modalActive);
  const closeModal = useModalStore(state => state.closeModal);
  const user = useSelectionsStore(state => state.selectedUser);

  // Only show modal if it's active and a user is selected
  if (!modalActive || !user) return null;

  const getStatusColor = (status) => 
    status === 'Active'
      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
      : 'bg-gray-700/50 text-gray-400 border border-gray-700';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden animate-slide-in flex flex-col my-auto">
        {/* Corner Borders */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

        <div className="relative z-10 flex flex-col h-full max-h-[85vh]">
          {/* Header Section - Fixed */}
          <div className="p-4 sm:p-5 border-b border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* User Avatar */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/40 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-2xl sm:text-3xl text-amber-400">
                    {user.user_name ? user.user_name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-wide uppercase mb-0.5 truncate">
                    {user.user_name || 'N/A'}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-light">User Profile</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 bg-gray-800/50 border border-gray-700 text-gray-400 rounded-sm hover:bg-gray-700/50 hover:text-white transition-all flex-shrink-0"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content Section - Scrollable */}
          <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 overflow-y-auto flex-1 min-h-0">
            {/* Name Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">Full Name</label>
                  <p className="text-base sm:text-lg font-light text-white truncate">{user.user_name || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">Email Address</label>
                  <p className="text-base sm:text-lg font-light text-amber-400 break-all">{user.user_email || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Total Orders */}
              <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">Total Orders</label>
                    <p className="text-xl sm:text-2xl font-light text-amber-400">{user.total_orders || 0}</p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">Status</label>
                    <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-light rounded-sm ${getStatusColor(user.user_status)}`}>
                      {user.user_status || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* User ID Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">User ID</label>
                  <p className="text-xs sm:text-sm font-light text-gray-300 font-mono break-all">{user._id || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Joined Date Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">Joined Date</label>
                  <p className="text-base sm:text-lg font-light text-gray-300">{user.joined_date || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions - Fixed */}
          <div className="p-4 sm:p-5 pt-3 sm:pt-4 border-t border-amber-500/20 flex justify-end space-x-2 sm:space-x-3 flex-shrink-0">
            <button
              onClick={closeModal}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-sm font-light text-xs sm:text-sm tracking-wide uppercase hover:bg-gray-700/50 hover:text-white transition-all"
            >
              Close
            </button>
            <button
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-xs sm:text-sm tracking-wide uppercase hover:bg-amber-500/20 hover:border-amber-500/50 transition-all flex items-center space-x-1 sm:space-x-2"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
