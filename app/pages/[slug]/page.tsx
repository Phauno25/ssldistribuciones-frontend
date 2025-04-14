"use client";
import ComponentLoader from "@/components/ComponentLoader";
import { HeroContentAside } from "@/components/layout/hero";
import useFetch from "@/hooks/useFetch";
import { PageData, PageProps } from "@/types/types";
import React, { useEffect } from "react";

const Page = ({ params }: PageProps) => {
  const { data, loading } = useFetch<PageData>(
    `pages?filter[slug]=${params.slug}&&populate[hero][populate]=*&populate[body][populate]=*`,
    "collection"
  );
  useEffect(() => {}, [data]);

  if (loading) {
    return <p>loading...</p>;
  }

  return data ? (
    <div className="container p-10 my-0 mx-auto">
      {data[0].hero && (
        <HeroContentAside
          title={data[0].hero.title}
          description={data[0].hero.description}
          orientation="left"
          actionButtons={data[0].hero.actionButtons}
          image={data[0].hero.image}
        />
      )}
      <ComponentLoader data={data[0].body} />
    </div>
  ) : (
    <div>El slug es {params.slug} </div>
  );
};

export default Page;
