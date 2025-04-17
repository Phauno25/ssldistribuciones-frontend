"use client";
import Tab from "@/components/ui/tabs/Tab";
import TabItem from "@/components/ui/tabs/TabItem";
import useFetch from "@/hooks/useFetch";
import { ProductData } from "../../types/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import ProductDetailCard from "../../components/product-detail/ProductDetailCard";
import ImgGallery from "@/components/ui/image-gallery/ImgGallery";
import PageSlugSkeleton from "../../components/PageSlugSkeleton";
import { PageProps } from "@/types/types";

const Page = ({ params }: PageProps) => {
  const { data, loading } = useFetch<ProductData[]>(
    `products?filter[slug]=${params.slug}&&populate=*`,
    "collection"
  );

  const [currentTab, setCurrentTab] = React.useState("descripcion");

  if (loading) {
    return <PageSlugSkeleton />;
  }

  return data ? (
    <div className="w-full flex flex-col md:flex-row md:justify-between bg-neutral-900">
      <div className="w-full md:w-1/2 flex justify-center p-12 ">
        <ImgGallery images={data[0].images} />
      </div>
      <div className="w-full md:w-2/5 bg-surface-dark space-y-6 p-4 flex flex-col justify-start border-l-2 border-surface-main">
        <h2 className="text-primary-main text-3xl font-bold">{data[0].name}</h2>
        <Tab
          onTabChange={(tab) => {
            setCurrentTab(tab.value);
          }}
        >
          <TabItem value="descripcion" selected={currentTab === "descripcion"}>
            Descripcion
          </TabItem>
          <TabItem value="ficha" selected={currentTab === "ficha"}>
            Ficha Técnica
          </TabItem>
        </Tab>

        <div className="p-4 flex flex-col w-full justify-start items-start text-left space-y-2 min-h-[50vh] md:min-h-[80vh]">
          {currentTab === "ficha" && <ProductDetailCard {...data[0]} />}
          {currentTab === "descripcion" && (
            <BlocksRenderer content={data[0].descripcion ?? []} />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>El slug es {params.slug} </div>
  );
};

export default Page;
