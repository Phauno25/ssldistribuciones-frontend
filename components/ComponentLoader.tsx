import React from "react";
import SideSection from "./layout/section/SideSection";
import Banner from "./layout/banner/Banner";
import SectionCTA from "./layout/section/SectionCTA";
import { loadImgUrl } from "@/utils/functions";
import { ComponentLoaderProps } from "@/types/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ComponentLoader: React.FC<ComponentLoaderProps> = (props) => {
  return props.data.map((item) => {
    return itemLoader(item);
  });
};

export default ComponentLoader;

const itemLoader = (item: any): JSX.Element => {
  switch (item.__component) {
    case "layout.section":
      return (
        <SideSection
          header={item.titleBlock?.header}
          title={item.titleBlock?.title}
          description={item.titleBlock?.description}
          imageSrc={loadImgUrl(item.image.url)}
          items={item.items}
        />
      );

    case "layout.banner-with-items":
      return <Banner background={item.background.url} items={item.items} />;

    case "layout.section-with-cta":
      return (
        <SectionCTA
          header={item.titleBlock?.header}
          title={item.titleBlock?.title}
          description={item.titleBlock?.description}
          items={item.callToActions}
        />
      );
    case "layout.rich-body-text":
      return <BlocksRenderer content={item.text} />;
    default:
      return <p>Cargando Productos</p>;
  }
};
