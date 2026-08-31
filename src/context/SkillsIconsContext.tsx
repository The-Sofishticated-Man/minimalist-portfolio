"use client";
import { createContext, ReactNode, useContext } from "react";

const SkillsIconsContext = createContext(false);

export function SkillsIconsProvider({ children }: { children: ReactNode }) {
  return (
    <SkillsIconsContext.Provider value={true}>
      {children}
    </SkillsIconsContext.Provider>
  );
}

export function useSkillsIcons() {
  return useContext(SkillsIconsContext);
}
