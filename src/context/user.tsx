import React, { createContext, useState } from "react";
import { useEffect } from "react";

interface IUserContext {}

type UserContextProps = {
  children?: React.ReactNode;
};
type User = {
  imageProfileUrl: string;
  name: string;
};

const AuthContext = createContext({} as IUserContext);
export function AuthProvider({}: UserContextProps) {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {}
    </AuthContext.Provider>
  );
}

export default AuthContext;
