"use client";
import React, { useEffect, useState } from "react";
import SmallProductCard from "./components/SmallProductCard";
import { Button } from "@/components/ui/button";
import { useProductContext } from "./hooks/useProductContext";
import { Input } from "@/components/ui/input";
import PageSkeleton from "./components/PageSkeleton";
import { useAppContext } from "@/hooks";

const Page = () => {
  const {
    products,
    selectedCategories,
    selectedSubcategories,
    selectedCollections,
  } = useProductContext();
  const { drawerOpen, setDrawerOpen } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (products) {
      if (selectedCategories && selectedCategories.length > 0) {
        let updatedProducts = products;
        const selectedCategoryNames = new Set(
          selectedCategories.map((cat) => cat.name)
        );

        updatedProducts = updatedProducts.filter((product) => {
          const productCategoryName = product.category.name;
          return selectedCategoryNames.has(productCategoryName);
        });
        if (selectedSubcategories && selectedSubcategories?.length > 0) {
          const selectedSubcategoryNames = new Set(
            selectedSubcategories.map((subcat) => subcat.name)
          );
          updatedProducts = updatedProducts.filter((product) => {
            const productSubcategoryName = product.subcategory.name;
            return selectedSubcategoryNames.has(productSubcategoryName);
          });
          if (selectedCollections && selectedCollections.length > 0) {
            const selectedCollectionName = new Set(
              selectedCollections.map((collection) => collection.name)
            );
            updatedProducts = updatedProducts.filter((product) => {
              const productCollectionName = product.collection.name;
              return selectedCollectionName.has(productCollectionName);
            });
          }
        }

        setFilteredProducts(updatedProducts);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [
    selectedCategories,
    selectedSubcategories,
    selectedCollections,
    products,
  ]);

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterText = e.target.value;
    if (products) {
      const updatedProducts = products.filter((product) => {
        const { name, category, subcategory, collection } = product;
        return (
          name.toLowerCase().includes(filterText.toLowerCase()) ||
          category.name.toLowerCase().includes(filterText.toLowerCase()) ||
          subcategory.name.toLowerCase().includes(filterText.toLowerCase()) ||
          collection.name.toLowerCase().includes(filterText.toLowerCase())
        );
      });
      setFilteredProducts(updatedProducts);
    }
  };

  return products ? (
    <div className="flex flex-col w-full">
      <div className="md:py-24 md:px-16 py-12 p-4 w-fit">
        <h1 className="text-primary-main text-5xl font-semibold py-4">
          Productos
        </h1>
        <p className=" md:w-1/2">
          Aquí podrás encontrar todos nuestros productos, filtra por categorías,
          subcategorías y colecciones para encontrar lo que buscas.
        </p>
      </div>

      <div className="w-full flex flex-row items-stretch flex-wrap gap-4 p-8">
        <div className="w-full flex px-6 gap-4">
          <Button
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
            variant="filled"
            className="bg-secondary-dark text-white"
          >
            Filtros
          </Button>
          <Input
            name="filterName"
            iconName="Search"
            placeholder="Nombre, Modelo, Categoría..."
            onChange={handleFilterTextChange}
          />
        </div>

        <div className="bg-surface-light w-full h-[1px]" />

        <div className="flex flex-row items-stretch">
          {filteredProducts?.map((product) => {
            const { name, resumen, cover, slug } = product;
            return (
              <SmallProductCard
                key={name}
                name={name}
                img={cover.url}
                slug={slug}
                resumen={resumen}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    // Skeleton de la pagina
    <PageSkeleton />
  );
};

export default Page;
