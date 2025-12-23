import { create } from "zustand";


export const useModalStore = create((set) => ({
    modalActive: false,
   
    setModalState: () => set({ modalActive: true }),
    closeModal: () => set({ modalActive: false }),
  }));
  