"use client";
import { createContext, useContext } from "react";
import { DrawerContextProps } from "../contexts/DrawerContext";

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export const useDrawer = (): DrawerContextProps => {
  const context = useContext(DrawerContext);

  if (!context)
    throw new Error("useDrawer must be used within a DrawerProvider");

  return context;
};
