import React from 'react';

const ModalFooter = ({ children }) => {
  return (
    <div className="p-4 sm:p-5 pt-3 sm:pt-4 border-t border-amber-500/20 flex justify-end space-x-2 sm:space-x-3 flex-shrink-0">
      {children}
    </div>
  );
};

export default ModalFooter;