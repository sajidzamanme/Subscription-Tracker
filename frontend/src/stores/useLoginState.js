import { create } from "zustand";

const useLoginState = create((set) => ({
  loggedIn: false,
  setLoggedIn: (newState) => set({ loggedIn: newState }),
}));

export default useLoginState;
