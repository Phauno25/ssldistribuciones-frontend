import { ProductData } from "../../types";
import SmallProductCard from "./SmallProductCard";

const ProductCarousel: React.FC<{ products: ProductData[] }> = ({
  products,
}) => {
  if (!products?.length) return null;

  // Duplicamos una sola vez: A + A
  const loop = [...products, ...products];

  return (
    <div className="overflow-hidden ">
      <div className="marquee">
        <div className="marquee__track gap-8">
          {loop.map((product, i) => (
            <SmallProductCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .marquee {
            position: relative;
            width: 100%;
          }
          .marquee__track {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
            cursor: pointer;
          }
            .marquee:active .marquee__track {
                animation-play-state: paused;
            }
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); } 
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee__track { animation: none; transform: none; }
          }
        `,
        }}
      />
    </div>
  );
};

export default ProductCarousel;
