import { create } from "zustand";


export const useSelectionsStore = create((set) => ({
    selectedUser: null,
   
    setSelectedUser: (selectedUser) => set({ selectedUser }),
    clearSelectedUser: () => set({ selectedUser: null }),
    setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
    clearSelectedProduct: () => set({ selectedProduct: null }),
  }));
  