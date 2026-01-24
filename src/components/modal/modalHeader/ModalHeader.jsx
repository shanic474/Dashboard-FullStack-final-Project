const ModalHeader = ({ data, type, onClose, isCreateMode }) => {
  const getInitial = () => {
    if (isCreateMode) {
      return '+';
    }
    if (type === 'user') {
      return data.user_name ? data.user_name.charAt(0).toUpperCase() : 'U';
    } else {
      return data.product_name ? data.product_name.charAt(0).toUpperCase() : 'P';
    }
  };

  const getTitle = () => {
    if (isCreateMode) {
      return type === 'user' ? 'New User' : 'New Product';
    }
    if (type === 'user') {
      return data.user_name || 'N/A';
    } else {
      return data.product_name || 'N/A';
    }
  };

  const getSubtitle = () => {
    if (isCreateMode) {
      return type === 'user' ? 'Create User Profile' : 'Create Product';
    }
    return type === 'user' ? 'User Profile' : 'Product Details';
  };

  return (
    <div className="p-4 sm:p-5 border-b border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Avatar/Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/40 rounded-full flex items-center justify-center shadow-lg shrink-0">
            <span className="text-2xl sm:text-3xl text-amber-400">
              {getInitial()}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-wide uppercase mb-0.5 truncate">
              {getTitle()}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light">{getSubtitle()}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-gray-800/50 border border-gray-700 text-gray-400 rounded-sm hover:bg-gray-700/50 hover:text-white transition-all shrink-0"
          title="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;