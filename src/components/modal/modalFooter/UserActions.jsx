const UserActions = ({ onClose, setIsModalEditable }) => {
  return (
    <div className="flex justify-end space-x-2">
      <button
        onClick={() => setIsModalEditable(true)}
        className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-amber-500/20 hover:text-white transition-all"
      >
        Edit
      </button>
      
      <button
        onClick={onClose}
        className="px-4 py-2 bg-gray-700 text-white rounded"
      >
        Close
      </button>
    </div>
  );
};

export default UserActions;
