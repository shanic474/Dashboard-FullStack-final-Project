const UserFields = ({ user, isModalEditable }) => {
  const getStatusColor = (status) =>
    status === "Active"
      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
      : "bg-gray-700/50 text-gray-400 border border-gray-700";

  const handleChange = (field, value) => {
    // TODO: Implement your update logic here
    console.log(`Updating ${field} to ${value}`);
  };

  return (
    <>
      {/* Name Section */}
      <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Full Name
            </label>
            {isModalEditable ? (
              <input
                type="text"
                value={user.user_name || ""}
                onChange={(e) => handleChange("user_name", e.target.value)}
                className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
              />
            ) : (
              <p className="text-base sm:text-lg font-light text-white truncate">
                {user.user_name || "N/A"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Email Address
            </label>
            {isModalEditable ? (
              <input
                type="email"
                value={user.user_email || ""}
                onChange={(e) => handleChange("user_email", e.target.value)}
                className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
              />
            ) : (
              <p className="text-base sm:text-lg font-light text-amber-400 break-all">
                {user.user_email || "N/A"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Total Orders */}
        <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                Total Orders
              </label>
              {isModalEditable ? (
                <input
                  type="number"
                  value={user.total_orders || 0}
                  onChange={(e) => handleChange("total_orders", e.target.value)}
                  className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
                />
              ) : (
                <p className="text-xl sm:text-2xl font-light text-amber-400">
                  {user.total_orders || 0}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                Status
              </label>
              {isModalEditable ? (
                <select
                  value={user.user_status || "Active"}
                  onChange={(e) => handleChange("user_status", e.target.value)}
                  className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              ) : (
                <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-light rounded-sm ${getStatusColor(user.user_status)}`}>
                  {user.user_status || "N/A"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User ID Section */}
      <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              User ID
            </label>
            <p className="text-xs sm:text-sm font-light text-gray-300 font-mono break-all">
              {user._id || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Joined Date Section */}
      <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Joined Date
            </label>
            <p className="text-base sm:text-lg font-light text-gray-300">
              {user.joined_date || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFields;