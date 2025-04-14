import React from "react";

const FooterSkeleton = () => {
  return (
    <div className="w-full animate-pulse p-4 flex md:flex-row flex-col justify-between items-end border-t-2 border-surface-main gap-4">
      <div className="flex justify-start items-start flex-row w-full gap-4">
        <div className="h-8 w-8 rounded-md bg-neutral-700" />
        <div className="h-8 w-16 rounded-md bg-neutral-700" />
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-6">
          <div className="h-4 bg-neutral-700 w-32"></div>
          <div className="h-4 bg-neutral-700 w-32"></div>
          <div className="h-4 bg-neutral-700 w-32"></div>
        </div>
        <div className="h-4 bg-neutral-700 w-32"></div>
        <div className="h-4 bg-neutral-700 w-32"></div>
      </div>

      <span className="sr-only">Cargando Footer</span>
    </div>
  );
};

export default FooterSkeleton;
