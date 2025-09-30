import React from "react";
import { ProductData } from "../../types";

const ProductSpecificationsCard: React.FC<ProductData> = ({ details }) => {
  return (
    <div className="w-full px-2">
      {details && details.length > 0 ? (
        details.map((detail) => {
          return (
            <div
              key={detail.name}
              className="flex justify-between items-center flex-wrap w-full border-b border-b-surface-light px-4"
            >
              <div className="py-2">
                <p className="text-left text-primary-main">{detail.name}</p>
              </div>
              <div className="py-2">
                <p className="text-right font-light">{detail.value}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>Este producto no posee ficha técnica por el momento</p>
      )}
    </div>
  );
};

export default ProductSpecificationsCard;
