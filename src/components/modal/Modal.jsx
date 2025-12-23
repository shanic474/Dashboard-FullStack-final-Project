import { useModalStore } from '../../store/modal.store.jsx';
import { useSelectionsStore } from '../../store/selections.store.jsx';
import ModalContent from './ModalContent.jsx';
import { useState } from 'react';

const Modal = () => {
  const { modalActive, closeModal } = useModalStore();
  const { selectedUser, clearSelectedUser } = useSelectionsStore();
  const [isModalEditable, setIsModalEditable]= useState(null);

  if (!modalActive || !selectedUser) return null;

  const handleClose = () => {
    closeModal();
    clearSelectedUser();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 max-h-[90vh]">
        {/* Modal Frame */}
        <div className="relative bg-gray-900 border border-amber-500/30 rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
          {/* Optional corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

          {/* Scrollable content */}
          <div className="relative z-10 p-6 overflow-y-auto h-full">
            <ModalContent user={selectedUser} onClose={handleClose} isModalEditable={isModalEditable} setIsModalEditable={setIsModalEditable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
