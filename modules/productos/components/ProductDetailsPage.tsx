"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import { ProductData } from "../types";
import ProductSpecificationsCard from "./ui/ProductSpecificationsCard";
import { Button, Icon, Tab, TabItem } from "@/components/ui";
import { ProductGallery } from "./ui/ProductGallery";

type ProductDetailsPageProps = {
  product: ProductData;
};

const ProductDetailsPage = ({
  product,
}: ProductDetailsPageProps): React.JSX.Element => {
  return (
    product && (
      <div className="w-full flex flex-col">
        {/* Volver */}
        <div className="w-full flex flex-row my-4">
          <a
            href="/productos"
            className="text-primary-main flex w-fit items-center gap-2 px-4 py-2 hover:underline"
          >
            <Icon name="ChevronLeft" /> Volver al catálogo
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between">
          {/* Galería */}
          <div className="w-full md:w-1/2 flex justify-center px-12 h-fit border-b md:border-b-0 pb-8 md:pb-0 border-gradient-main">
            <ProductGallery images={product.images} />
          </div>
          <div className="w-full md:w-1/2 p-6 gap-12 flex flex-col justify-start border-l-0 md:border-l md:border-gradient-main">
            {/* Bloque de titulos */}
            <div className="space-y-2 mt-8 md:mt-0">
              <span className="text-muted text-md">
                {product.category.name}
              </span>
              <h2 className="text-primary-main text-3xl font-bold">
                {product.name}
              </h2>
              <span className="text-white text-md">
                {product.subcategory.name} - {product.collection.name}
              </span>
            </div>

            <p>{product.resumen}</p>
            <div className="flex flex-col items-center gap-4 justify-center">
              <Button
                className="w-full shadow-md shadow-white/20"
                variant="gradient"
                onClick={() =>
                  window.open(
                    `https://wa.me/5491123849505?text=${encodeURIComponent(
                      `Hola! tengo una consulta sobre el producto ${product.name} y quisiera que se contacten conmigo.`
                    )}`,
                    "_blank"
                  )
                }
              >
                Consultar precio y disponibilidad
              </Button>
              <div className="flex justify-center items-center gap-8">
                <div className="flex w-fit items-center gap-4">
                  <Icon name="Shield" /> Garantia de compra
                </div>
                <div className="flex w-fit items-center gap-4">
                  <Icon name="Truck" /> Envío a todo el país
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between mt-8 p-2 md:p-6">
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <Tab>
              <TabItem value="ficha">Ficha Técnica</TabItem>
            </Tab>
            <div className=" p-0 md:p-4 flex flex-col w-full justify-start items-start text-left space-y-2 min-h-[50vh] md:min-h-[80vh]">
              <ProductSpecificationsCard {...product} />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <Tab>
              <TabItem value="ficha">Descripción</TabItem>
            </Tab>
            <div className="p-4 flex flex-col w-full justify-start items-start text-left space-y-2 min-h-[50vh] md:min-h-[80vh]">
              <BlocksRenderer content={product.descripcion ?? []} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetailsPage;
