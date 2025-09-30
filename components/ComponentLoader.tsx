"use client";
import React from "react";
import { loadImgUrl } from "@/utils/functions";
import { ComponentLoaderProps } from "@/types/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ProductCarousel from "@/modules/productos/components/ui/ProductCarrousel";
import {
  BannerCTA,
  BannerWithItems,
  SectionContent,
  SideSection,
  TextBlockGrid,
} from "./layout";
import SectionCTA from "./layout/section/SectionCTA";

const ComponentLoader: React.FC<ComponentLoaderProps> = ({
  data,
  products,
}) => {
  return (
    data &&
    data.map((item) => {
      return itemLoader(item, products || []);
    })
  );
};

const itemLoader = (item: any, products: any[]): JSX.Element => {
  switch (item.__component) {
    case "layout.section":
      return (
        <SideSection
          key={item.id || Math.random()}
          header={item.titleBlock?.header}
          title={item.titleBlock?.title}
          description={item.titleBlock?.description}
          imageSrc={loadImgUrl(item.image.url)}
          items={item.items}
        />
      );

    case "layout.banner-with-items":
      return (
        <BannerWithItems
          key={item.id || Math.random()}
          items={item.items}
          title={item.title}
          description={item.description}
        />
      );

    case "layout.section-with-cta":
      return (
        <div key={item.id}>
          <SectionCTA
            header={item.titleBlock?.header}
            title={item.titleBlock?.title}
            description={item.titleBlock?.description}
            items={item.callToActions}
          />
          {products && <ProductCarousel products={products} />}
        </div>
      );
    case "layout.rich-body-text":
      return (
        <div key={item.id || Math.random()}>
          <BlocksRenderer content={item.text} />
        </div>
      );
    case "layout.rich-body-text":
      return (
        <div key={item.id || Math.random()}>
          <BlocksRenderer content={item.text} />
        </div>
      );
    case "layout.section-with-content":
      return (
        <SectionContent
          title={item.title}
          content={item.content}
          image={item.image}
        />
      );
    case "layout.text-grid":
      return (
        <>
          <TextBlockGrid
            leftBlock={item.leftBlock}
            rightBlock={item.rightBlock}
          />
        </>
      );
    case "layout.text-grid":
      return (
        <>
          <TextBlockGrid
            leftBlock={item.leftBlock}
            rightBlock={item.rightBlock}
          />
        </>
      );
    case "layout.banner-with-cta":
      return (
        <BannerCTA
          icon={item.icon}
          title={item.title}
          description={item.description}
          cta={item.cta}
        />
      );
    default:
      return <p key={item.id || Math.random()}>Cargando Productos</p>;
  }
};

export default ComponentLoader;
