import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalActive: false,       // is modal open?
  modalType: null,          // 'user' or 'product'
  isModalEditable: false,   // editable mode

  // Open modal
  openModal: (type, editable = false) =>
    set({
      modalActive: true,
      modalType: type,
      isModalEditable: editable,
    }),

  // Close modal
  closeModal: () =>
    set({
      modalActive: false,
      modalType: null,
      isModalEditable: false,
    }),

  // Set editable flag
  setIsModalEditable: (value) => set({ isModalEditable: value }),
}));
