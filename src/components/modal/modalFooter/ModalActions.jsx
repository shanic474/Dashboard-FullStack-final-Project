const ModalActions = ({ onClose, isModalEditable, setIsModalEditable }) => {
  const handleSave = () => {
    // TODO: Implement your save logic here
    console.log('Saving changes...');
    setIsModalEditable(false);
  };

  return (
    <div className="flex justify-end space-x-2">
      {isModalEditable ? (
        <>
          <button
            onClick={() => setIsModalEditable(false)}
            className="px-6 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-gray-600/50 hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-amber-500/20 hover:text-white transition-all"
          >
            Save
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ModalActions;