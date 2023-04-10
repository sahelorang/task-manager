import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext({
  user: "",
  userLogin: () => {},
  SignOut: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.currentUser;
    if (currentUser) setUser(currentUser);
  }, []);

  const SignOut = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const userLogin = (username) => {
    setUser(username);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        SignOut,
        userLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//

export { AuthContext, AuthProvider };
