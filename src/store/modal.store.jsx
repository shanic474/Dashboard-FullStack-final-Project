import { create } from 'zustand';

export const useModalStore = create((set) => ({
  modalActive: false,
  modalType: null, // 'user' or 'product'
  
  openModal: (type) => set({ modalActive: true, modalType: type }),
  closeModal: () => set({ modalActive: false, modalType: null }),
}));