import updateDataInDB from "../hook/updateData.jsx";

const ModalActions = ({
  onClose,
  isModalEditable,
  setIsModalEditable,
  handleSubmit,
  modalDataId,
  type,
}) => {
  const handleSave = () => {
    console.log("Saving changes...");
    updateDataInDB(chosenId, updateData); // Call your DB update function
    setIsModalEditable(false);
    handleSubmit(modalDataId, type, updateData);
  };

  let chosenId = "3";
  let updateData = "aaaa";

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
            // onClick={updateDataInDB(chosenId,updateData)}
            type="button"
            onClick={handleSave}
            className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-amber-500/20 hover:text-white transition-all"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-amber-500/20 hover:text-white transition-all"
            onClick={(e) => {
              e.preventDefault(); // stop the form submission
              setIsModalEditable(true);
            }}
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
