import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/apiClient";
import useAuth from "../../store/useAuth";

interface ProtectedProps {
  children: React.ReactNode;
}

export interface UserProps {
  id: number;
  username: string;
  wallet: number;
  can_create_group_game: boolean;
  social_media_link: string;
  phone_number: string;
  referral_code: string;
}

const Protected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();

  const { login } = useAuth();

  useEffect(() => {
    axios
      .post<UserProps>(
        `${baseUrl}/auth/me`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        login(
          response.data.id,
          response.data.wallet,
          response.data.username,
          response.data.phone_number,
          response.data.referral_code,
          response.data.social_media_link,
          response.data.can_create_group_game
        );
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return children;
};

export default Protected;
