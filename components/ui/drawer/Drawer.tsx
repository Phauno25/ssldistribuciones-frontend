"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Icon from "../icon/Icon";

export type DrawerProps = {
  open: boolean;
  title: string;
  onClose?: () => void;
  variant?: "overlay" | "push"; // Nuevo prop para elegir el comportamiento
  width?: "sm" | "md" | "lg" | "xl"; // Prop para controlar el ancho
} & React.HTMLAttributes<HTMLDivElement>;

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  className,
  title,
  variant = "push",
  width = "md",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  // Configuraciones de ancho - En móvil siempre full width, en desktop según el prop
  const widthClasses = {
    sm: "w-full sm:w-64",
    md: "w-full sm:w-72",
    lg: "w-full sm:w-80",
    xl: "w-full sm:w-96",
  };

  // Para variant overlay (comportamiento original)
  if (variant === "overlay") {
    return (
      <div
        {...props}
        id="drawer-navigation"
        className={clsx(
          "sticky w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-transparent shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-4"
        >
          {title}
        </h5>
        <button
          onClick={handleClose}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon name="X" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">{children}</div>
      </div>
    );
  }

  // Para variant push (nuevo comportamiento)
  // En móviles (< sm) usamos overlay automáticamente para mejor UX
  const isMobileOverlay = variant === "push";

  if (isMobileOverlay) {
    return (
      <>
        {/* Versión móvil - overlay */}
        <div
          {...props}
          className={clsx(
            "sm:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full",
            className
          )}
        >
          {isOpen && (
            <div className="p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                  {title}
                </h5>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <Icon name="X" />
                  <span className="sr-only">Cerrar Menu</span>
                </button>
              </div>
              <div className="overflow-y-auto">{children}</div>
            </div>
          )}
        </div>

        {/* Versión desktop - push */}
        <div
          className={clsx(
            "hidden sm:block border-r border-gray-200 transition-all duration-300 ease-in-out overflow-y-auto",
            isOpen ? widthClasses[width].split(" ").slice(1).join(" ") : "w-0" // Quitar w-full, solo usar sm:w-X
          )}
        >
          {isOpen && (
            <div className="p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                  {title}
                </h5>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <Icon name="X" />
                  <span className="sr-only">Cerrar Menu</span>
                </button>
              </div>
              <div className="overflow-y-auto">{children}</div>
            </div>
          )}
        </div>
      </>
    );
  }

  // Fallback para otros casos
  return (
    <div
      {...props}
      className={clsx(
        "bg-surface-main border-r border-gray-200 transition-all duration-300 ease-in-out overflow-y-auto",
        isOpen ? widthClasses[width] : "w-0",
        className
      )}
    >
      {isOpen && (
        <div className="p-4 h-full">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
              {title}
            </h5>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Icon name="X" />
              <span className="sr-only">Cerrar Menu</span>
            </button>
          </div>
          <div className="overflow-y-auto">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
