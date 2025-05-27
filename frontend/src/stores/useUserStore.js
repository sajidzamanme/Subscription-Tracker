import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    id: "",
    name: "",
    email: "",
  },
  setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;
