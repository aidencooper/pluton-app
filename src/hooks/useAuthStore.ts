import { create } from "zustand";

type AuthStore = {
  loggedIn: boolean;
  token: string | null;

  actions: {
    setLoggedIn: (loggedIn: boolean) => void;
    setToken: (token: string | null) => void;
  };
};

export const useAuthStore = create<AuthStore>((set) => ({
  loggedIn: false,
  token: null,

  actions: {
    setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
    setToken: (token) => set(() => ({ token: token })),
  },
}));

export const useAuthToken = () => useAuthStore((state) => state.token);
export const useAuthActions = () => useAuthStore((state) => state.actions);
