import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { DrawerProps } from "./types";
import { Icon } from "../icon";

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

  return (
    <div
      {...props}
      id="drawer-navigation"
      className={clsx(
        isOpen
          ? "min-w-full md:min-w-64 lg:min-w-72 p-4 h-auto visible overflow-y-auto transition-transform translate-x-0 bg-surface-main"
          : "hidden",
        className
      )}
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        {title}
      </h5>
      <button
        onClick={handleClose}
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <Icon name="X" />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Drawer;
