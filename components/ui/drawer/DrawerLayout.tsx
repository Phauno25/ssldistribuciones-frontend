"use client";
import React from "react";
import clsx from "clsx";
import Drawer, { DrawerProps } from "./Drawer";

export type DrawerLayoutProps = {
  children: React.ReactNode;
  drawer: Omit<DrawerProps, "variant">;
  className?: string;
};

const DrawerLayout: React.FC<DrawerLayoutProps> = ({
  children,
  drawer,
  className,
}) => {
  return (
    <div className={clsx("flex min-h-screen relative", className)}>
      {/* Overlay de fondo para móviles */}
      {drawer.open && (
        <div 
          className="sm:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={drawer.onClose}
        />
      )}
      
      <Drawer {...drawer} variant="push" />
      
      <div className={clsx("flex-1 transition-all duration-300 ease-in-out")}>
        {children}
      </div>
    </div>
  );
};

export default DrawerLayout;
