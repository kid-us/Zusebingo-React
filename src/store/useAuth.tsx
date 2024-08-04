import create from "zustand";

interface AuthState {
  id: number | null;
  wallet: number | null;
  social_media_link: string | null;
  phone_number: string | null;
  referral_code: string | null;
  username: string | null;
  can_create_group_game: boolean;
  login: (
    id: number,
    wallet: number,
    username: string,
    phone_number: string,
    referral_code: string,
    social_media_link: string,
    can_create_group_game: boolean
  ) => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  id: null,
  wallet: null,
  username: null,
  phone_number: null,
  referral_code: null,
  social_media_link: null,
  can_create_group_game: false,

  login: (
    id,
    wallet,
    username,
    phone_number,
    referral_code,
    social_media_link,
    can_create_group_game
  ) =>
    set({
      id,
      wallet,
      username,
      phone_number,
      referral_code,
      social_media_link,
      can_create_group_game,
    }),

  logout: () =>
    set({
      id: null,
      wallet: null,
      username: null,
      phone_number: null,
      referral_code: null,
      social_media_link: null,
      can_create_group_game: false,
    }),
}));

export default useAuth;
