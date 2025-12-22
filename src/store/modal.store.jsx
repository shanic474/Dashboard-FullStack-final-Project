import { create } from "zustand";


export const useModalStore = create((set) => ({
    modalActive: null,
   
    setModalState: (modalState) => set({ modalActive: modalState }),
    closeModal: () => set({ modalActive: null }),
  }));
  