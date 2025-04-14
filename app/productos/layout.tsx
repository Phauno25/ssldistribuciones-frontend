"use client";
import React, { useContext } from "react";
import ProductProvider from "./context/ProductProvider";
import { AppContext } from "@/context";
import { Drawer } from "@/components/ui/drawer";
import ProductFilter from "./components/ProductFilter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = useContext(AppContext);

  return (
    <ProductProvider>
      <div className="flex flex-row flex-start w-full h-full">
        <Drawer
          title={"Filtros"}
          open={context?.drawerOpen || false}
          onClose={() => {
            context?.setDrawerOpen(false);
          }}
        >
          <ProductFilter />
        </Drawer>

        {children}
      </div>
    </ProductProvider>
  );
}
