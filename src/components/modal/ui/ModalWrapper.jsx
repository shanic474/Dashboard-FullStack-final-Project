
const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden animate-slide-in flex flex-col my-auto">
        {/* Corner Borders */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

        <div className="relative z-10 flex flex-col h-full max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;