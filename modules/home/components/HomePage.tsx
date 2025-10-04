"use client";
import React from "react";
import { HomePageProps } from "@/types/types";
import ComponentLoader from "../../../components/ComponentLoader";
import { HeroContentAside } from "@/components/layout";
import { ProductData } from "@/modules/productos/types";
import FAB from "@/components/ui/fab/FAB";

const HomePage = ({
  data,
  products,
}: {
  data: HomePageProps;
  products: ProductData[];
}): React.JSX.Element => {
  return (
    data && (
      <>
        <HeroContentAside
          title={data.hero.title}
          description={data.hero.description}
          orientation="left"
          actionButtons={data.hero.actionButtons}
          image={data.hero.image}
        />
        <ComponentLoader data={data.body} products={products} />
        <FAB />
      </>
    )
  );
};

export default HomePage;
