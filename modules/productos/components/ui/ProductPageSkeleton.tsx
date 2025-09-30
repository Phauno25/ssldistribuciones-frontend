import React from "react";

const ProductPageSkeleton = () => {
  return (
    <div className="bg-surface-dark animate-pulse w-full h-screen overflow-hidden p-4">
      <div className="md:py-24 md:px-16 py-12 p-4 space-y-4">
        <div className="bg-surface-main h-16 w-1/3 py-4" />
        <div className=" md:w-1/2 bg-surface-main h-32 w-1/2" />
      </div>

      <div className="w-full flex flex-row flex-wrap gap-4 p-8">
        <div className="w-full flex px-6 gap-4">
          <div className="w-24 h-16 bg-surface-main" />
          <div className="w-96 h-16 bg-surface-main" />
        </div>
      </div>
      <div className="w-full h-2 bg-surface-main" />
    </div>
  );
};

export default ProductPageSkeleton;
