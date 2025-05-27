import { create } from "zustand";

const useSubscriptionsStore = create((set) => ({
  subscriptions: {},
  setSubscriptions: (newSub) => set({ subscriptions: newSub }),
}));

export default useSubscriptionsStore;
