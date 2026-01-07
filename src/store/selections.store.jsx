import { create } from "zustand";

export const useSelectionsStore = create((set) => ({
  selectedUser: null,
  selectedProduct: null,

  setSelectedUser: (user) => set({ selectedUser: user }),
  clearSelectedUser: () => set({ selectedUser: null }),

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));
