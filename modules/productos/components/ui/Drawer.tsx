"use client";
import { Icon } from "@/components/ui";
import clsx from "clsx";
import React, { HTMLAttributes, useEffect, useState } from "react";

type DrawerProps = {
  open: boolean;
  title: string;
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  className,
  title,
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleBackdropClick}
      />
      
      {/* Drawer */}
      <div
        {...props}
        id="drawer-navigation"
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen w-full md:w-80 p-4 overflow-y-auto transition-transform bg-surface-main",
          "transform translate-x-0",
          className
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            {title}
          </h5>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Icon name="X" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        
        <div className="overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
