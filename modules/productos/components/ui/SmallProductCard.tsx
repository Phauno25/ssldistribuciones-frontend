import React, { HTMLAttributes } from "react";
import { loadImgUrl } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { Button, Icon } from "@/components/ui";
import { ProductData } from "../../types";
import clsx from "clsx";

type SmallProductCardProps = {
  product: ProductData;
} & HTMLAttributes<HTMLDivElement>;

const buildMeasures = (details: ProductData["details"]) => {
  if (!details) return "";
  const ancho = details?.find((d) => d.name === "Ancho (mm)")?.value;
  const alto = details?.find((d) => d.name === "Alto (mm)")?.value;
  if (!ancho || !alto) return "";
  return `${ancho}mm x ${alto}mm`;
};

const SmallProductCard: React.FC<SmallProductCardProps> = ({
  product,
  className,
  ...props
}) => {
  const router = useRouter();
  const {
    name,
    resumen,
    category,
    subcategory,
    cover,
    collection,
    details,
    slug,
  } = product;

  const handleClick = () => {
    if (!slug) return;
    router.push(`/productos/${slug}`);
  };
  const measures = buildMeasures(details);

  return (
    <div
      className={clsx(
        "p-4 min-w-80 rounded-md relative border-surface-main border-2",
        className
      )}
      {...props}
    >
      <div className="p-2 rounded-lg h-full flex flex-col justify-between">
        <div>
          <div className="relative w-full h-36 md:h-36 overflow-hidden rounded group">
            {cover?.url && (
              <img
                alt="Imagen del producto"
                src={loadImgUrl(cover.url)}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-0"
              />
            )}

            <p
              className="absolute inset-0 p-3 text-sm leading-snug
               overflow-hidden break-words whitespace-pre-wrap
               opacity-0 transition-opacity duration-200
               group-hover:opacity-100"
            >
              {resumen}
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-md text-muted">{category.name}</span>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              {name}
            </h3>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <span className="p-1 rounded text-sm bg-surface-main text-white w-fit">
                {subcategory.name}
              </span>
              <span className="p-1 rounded text-sm bg-surface-main text-white w-fit">
                {collection.name}
              </span>
            </div>
          </div>
          <div className="mt-8">
            {measures && (
              <div className="flex gap-2 items-center mt-2">
                <Icon
                  name="Ruler"
                  className="text-primary-main"
                  strokeWidth={"2px"}
                  size={20}
                />
                <span className="text-sm text-neutral-300">{measures}</span>
              </div>
            )}
            {details.find((d) => d.name === "Tensión nominal (V)") && (
              <div className="flex gap-2 items-center mt-2">
                <Icon
                  name="Zap"
                  className="text-primary-main"
                  strokeWidth={"2px"}
                  size={20}
                />

                <span className="text-sm text-neutral-300">
                  {details.find((d) => d.name === "Tensión nominal (V)")?.value}{" "}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-end mt-4">
          <Button variant="outlined" onClick={handleClick} size="md">
            Ver Más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
