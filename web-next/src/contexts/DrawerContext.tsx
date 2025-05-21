// DrawerContext.tsx
"use client";

import type { ReactNode } from "react";
import React, { useState } from "react";
import { DrawerContext } from "../hooks/useDrawer";
// import { DrawerContext } from "../hooks/useDrawer";

export interface DrawerContextProps {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <DrawerContext.Provider
      value={{ open, openDrawer, closeDrawer, toggleDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
