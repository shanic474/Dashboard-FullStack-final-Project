import { create } from "zustand";


export const useSelectionsStore = create((set) => ({
    selectedUser: null,
   
    setSelectedUser: (selectedUser) => set({ selectedUser }),
    clearSelectedUser: () => set({ selectedUser: null }),
  }));
  