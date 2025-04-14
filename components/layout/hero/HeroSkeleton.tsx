import React from "react";

const HeroSkeleton = () => {
  return (
    <div
      role="status"
      className="hero w-full h-[90vh] flex flex-row justify-center gap-6 overflow-hidden animate-pulse"
    >
      <div className="flex flex-row justify-between w-full h-full">
        <div className="flex flex-col w-full justify-center py-4 px-16  md:w-1/2 gap-8">
          <div className="space-y-4">
            <div className="rounded-md h-16 w-full bg-surface-light" />
            <div className="rounded-md h-16 w-1/2 bg-surface-light" />
          </div>
          <div className="space-y-2">
            <div className="rounded-md h-6 w-full bg-surface-light" />
            <div className="rounded-md h-6 w-3/4 bg-surface-light" />
            <div className="rounded-md h-6 w-full bg-surface-light" />
            <div className="rounded-md h-6 w-1/4 bg-surface-light" />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:flex justify-center items-center p-8 hidden">
          <div className="w-1/2 mx-auto  h-[300px] border-surface-light border-4 bg-surface-light rounded-sm relative">
            <div className=" rounded-md p-1 w-4 h-4 absolute bg-surface-dark top-3 right-2" />

            <div className="w-full h-3/4 overflow-hidden bg-surface-dark" />

            <div className="flex flex-col bg-surface-light border-surface-dark border-2"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default HeroSkeleton;
