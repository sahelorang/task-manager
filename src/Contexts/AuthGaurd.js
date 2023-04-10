import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthGaurd = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    const currentUser = localStorage.currentUser;
    if (!currentUser) return <Navigate to={"/LogIn"} />;
    if (currentUser) return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default AuthGaurd;
