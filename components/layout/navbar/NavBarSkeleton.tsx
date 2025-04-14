import React from "react";

const NavBarSkeleton = () => {
  return (
    <div
      className="w-full animate-pulse p-4 flex flex-row justify-between items-center border-b-2 border-surface-main"
    >
      <div className="h-8 w-16 rounded-md bg-neutral-700"></div>
      <div className="flex flex-row gap-8">
        <div className="h-4 bg-neutral-700 w-32"></div>
        <div className="h-4 bg-neutral-700 w-32"></div>
        <div className="h-4 bg-neutral-700 w-32"></div>
      </div>

      <span className="sr-only">Cargando Navbar</span>
    </div>
  );
};

export default NavBarSkeleton;
