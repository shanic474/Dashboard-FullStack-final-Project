import { useModalStore } from "../../store/modal.store.jsx";
import { useSelectionsStore } from "../../store/selections.store.jsx";
import ModalContent from "./ModalContent.jsx";

const Modal = () => {
  const modalActive = useModalStore((s) => s.modalActive);
  const modalType = useModalStore((s) => s.modalType);
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalEditable = useModalStore((s) => s.isModalEditable);
  const setIsModalEditable = useModalStore((s) => s.setIsModalEditable);

  const selectedUser = useSelectionsStore((s) => s.selectedUser);
  const selectedProduct = useSelectionsStore((s) => s.selectedProduct);
  const clearSelectedUser = useSelectionsStore((s) => s.clearSelectedUser);
  const clearSelectedProduct = useSelectionsStore((s) => s.clearSelectedProduct);

  const modalData = modalType === "user" ? selectedUser : selectedProduct;
  if (!modalActive || !modalData) return null;

  const handleClose = () => {
    closeModal();
    setIsModalEditable(false);
    if (modalType === "user") clearSelectedUser();
    else clearSelectedProduct();
  };

  const modalDataId = modalData._id;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8">
        <div className="relative bg-gray-900 border border-amber-500/30 rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
          <div className="relative z-10 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <ModalContent
              data={modalData}
              type={modalType}
              modalDataId={modalDataId}
              isModalEditable={isModalEditable}
              setIsModalEditable={setIsModalEditable}
              onClose={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
