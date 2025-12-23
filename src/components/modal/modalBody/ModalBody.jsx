const ModalBody = ({ children }) => {
  return (
    <div className="p-4 sm:p-5 space-y-3 sm:space-y-4 overflow-y-auto flex-1 min-h-0">
      {children}
    </div>
  );
};

export default ModalBody;