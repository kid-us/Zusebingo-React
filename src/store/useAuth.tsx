import create from "zustand";

interface AuthState {
  username: string | null;
  balance: string | number | null;
  isAuthenticated: boolean;
  login: (username: string, balance: number) => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: null,
  balance: null,

  login: (username, balance) =>
    set({
      username,
      balance,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      username: null,
      balance: null,
      isAuthenticated: false,
    }),
}));

export default useAuth;
