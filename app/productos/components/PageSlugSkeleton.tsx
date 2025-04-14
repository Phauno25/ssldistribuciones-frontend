import React from "react";

const PageSkeleton = () => {
  return (
    <div className="bg-neutral-800 animate-pulse w-full h-screen overflow-hidden">
      <div className="bg-neutral-800 flex justify-center md:justify-between w-full flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="col-span-3 bg-surface-main rounded-md h-[33vh] md:h-96" />
            <div className="bg-surface-main rounded-md h-16 md:h-32 " />
            <div className="bg-surface-main rounded-md" />
            <div className="bg-surface-main rounded-md" />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-4 bg-surface-dark">
          <div className="w-1/3 h-12 bg-surface-main rounded-md" />
          <div className="w-full h-32 bg-surface-main rounded-md" />
          <div className="w-full flex flex-row gap-4  ">
            <div className="w-1/4 h-10 bg-surface-main rounded-md" />
            <div className="w-1/4 h-10 bg-surface-main rounded-md" />
          </div>
          <div className="w-full h-full bg-surface-main rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
