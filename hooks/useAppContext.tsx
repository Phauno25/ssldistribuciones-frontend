import { AppContext } from "@/context";
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
export const useAppContext = (): {
  drawerOpen: boolean | undefined;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  drawerChildren?: ReactNode | null;
  setDrawerChildren: Dispatch<SetStateAction<ReactNode | null>>;
} => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useProductContext debe ser usado dentro de ProductProvider"
    );
  }
  return context;
};
