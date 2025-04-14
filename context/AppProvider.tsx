"use client";
import { MainAppContextType } from "@/types/types";
import React, { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<MainAppContextType | undefined>(
  undefined
);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerChildren, setDrawerChildren] = useState<ReactNode>(null);

  const contextData: MainAppContextType = React.useMemo(
    () => ({
      drawerOpen,
      setDrawerOpen,
      drawerChildren,
      setDrawerChildren,
    }),
    [drawerOpen, drawerChildren]
  );

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
