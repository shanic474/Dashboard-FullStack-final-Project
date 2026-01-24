import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalActive: false,       // is modal open?
  modalType: null,          // 'user' or 'product'
  isModalEditable: false,   // editable mode
  isCreateMode: false,      // create new item mode

  // Open modal
  openModal: (type, editable = false, createMode = false) =>
    set({
      modalActive: true,
      modalType: type,
      isModalEditable: editable,
      isCreateMode: createMode,
    }),

  // Close modal
  closeModal: () =>
    set({
      modalActive: false,
      modalType: null,
      isModalEditable: false,
      isCreateMode: false,
    }),

  // Set editable flag
  setIsModalEditable: (value) => set({ isModalEditable: value }),
}));
