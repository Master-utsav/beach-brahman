import React, { createContext, useContext, useState, ReactNode } from 'react';
import { clerkUserDataRequiredProps } from "@/constants/content";

interface AuthContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  userLoginData: clerkUserDataRequiredProps | undefined;
  setUserLoginData: (userLoginData: clerkUserDataRequiredProps | undefined) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('(tabs)');
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userLoginData, setUserLoginData] = useState<clerkUserDataRequiredProps | undefined>();

  return (
    <AuthContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        authenticated,
        setAuthenticated,
        userLoginData,
        setUserLoginData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
