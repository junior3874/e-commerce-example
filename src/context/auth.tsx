import React, { createContext, useState } from "react";

interface IAuthContext {}

type AuthContextProps = {
  children: React.ReactNode;
};  

const AuthContext = createContext({} as IAuthContext);
export function AuthProvider({ children }: AuthContextProps) {
  const [signed, setSigned] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        signed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
