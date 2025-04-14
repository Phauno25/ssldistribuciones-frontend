import React from "react";
import { ProductData } from "../../types/types";

const ProductDetailCard: React.FC<ProductData> = ({ details }) => {
  return (
    <div className="w-full px-2 md:px-8">
      {details && details.length > 0 ? (
        details.map((detail) => {
          return (
            <div
              key={detail.name}
              className="flex justify-between items-center flex-wrap w-full"
            >
              <div className="py-2">
                <p className="text-left text-primary-main">{detail.name}</p>
              </div>
              <div className="py-2">
                <p className="text-right font-light">{detail.value}</p>
              </div>
              <div className="w-full h-[1px] bg-surface-light" />
            </div>
          );
        })
      ) : (
        <p>Este producto no posee ficha técnica por el momento</p>
      )}
    </div>
  );
};

export default ProductDetailCard;
