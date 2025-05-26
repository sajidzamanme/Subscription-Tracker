import { create } from "zustand";

const useSubscriptionsStore = create((set) => ({
  subscriptions: [],
  setSubscriptions: (newSub) => set((prev) => ({subscriptions: [...prev, newSub]})), // May need changes
}));

export default useSubscriptionsStore;