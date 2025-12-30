import React from "react";

const ModalFooter = ({ children }) => {
  return (
    <div className="sticky bottom-0 bg-gray-900 p-4 sm:p-6 pt-3 sm:pt-4 border-t border-amber-500/20 flex justify-end space-x-2 sm:space-x-3">
      {children}
    </div>
  );
};

export default ModalFooter;
