// src/providers/AuthProvider.tsx
"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

interface AuthContextProps {
  user: string | null;
  login: (username: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be in AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (username: string) => {
    setLoading(true);
    // simulate network / call your API
    await new Promise((res) => setTimeout(res, 800));
    localStorage.setItem("user", username);
    setUser(username);
    setLoading(false);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
