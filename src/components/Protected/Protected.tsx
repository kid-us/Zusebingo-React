import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/apiClient";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  //   const { login } = useAuthStore();

  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUrl}/auth/getUserInfo`, {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        })
        .then((response) => {
          //   login();
        })
        .catch(() => {
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, []);

  return children;
};

export default Protected;
