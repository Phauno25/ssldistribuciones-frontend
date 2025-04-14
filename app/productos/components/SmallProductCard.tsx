import React from "react";
import Atropos from "atropos/react";
import { loadImgUrl } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SmallProductCardProps } from "../types/types";

const SmallProductCard: React.FC<SmallProductCardProps> = ({
  name,
  resumen,
  img,
  slug,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!slug) return;
    router.push(`/productos/${slug}`);
  };

  return (
    <Atropos
      className="w-full lg:w-2/6 md:w-1/2 p-2 md:p-6 rounded-md shadow-slate-50 relative mb-8"
      rotateXInvert={true}
      rotateYInvert={true}
    >
      {/* Reemplazar x algo <Icon
        name="Heart"
        height={48}
        width={48}
        className="rounded-full text-primary-main hover:bg-surface-extralight absolute top-2 right-2 p-2 cursor-pointer"
      /> */}
      <div className="bg-surface-main p-4 md:p-6 rounded-lg">
        <div className="w-full h-36 md:h-52">
          {img && (
            <img
              alt="Imagen del producto"
              src={loadImgUrl(img)}
              className="object-cover w-full h-full"
              style={{
                viewTransitionName: /* `${loadImgUrl(img)}` */ "pablo",
              }}
            />
          )}
        </div>
        <h3 className="text-primary-main text-xl md:text-2xl font-semibold">
          {name}
        </h3>
        <p className="py-2 md:py-4 md:text-md">{resumen}</p>
        <div className="flex flex-row justify-center p-2">
          <Button variant="gradient" onClick={handleClick}>
            Ver Más
          </Button>
        </div>
      </div>
    </Atropos>
  );
};

export default SmallProductCard;
