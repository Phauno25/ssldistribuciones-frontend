"use client";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@/components/ui";
import SmallProductCard from "./ui/SmallProductCard";
import ProductPageSkeleton from "./ui/ProductPageSkeleton";
import ProductFilter from "./ui/ProductFilter";
import {
  ProductData,
  CategoryData,
  SubCategoryData,
  CollectionData,
} from "../types";
import { DrawerLayout } from "@/components/ui/drawer";

type ProductPageProps = {
  products?: ProductData[];
  categories?: CategoryData[];
};

const ProductPage = ({
  products,
  categories,
}: ProductPageProps): React.JSX.Element => {
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>(
    products || []
  );
  const [filterText, setFilterText] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<CategoryData[]>(
    []
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState<
    SubCategoryData[]
  >([]);
  const [selectedCollections, setSelectedCollections] = useState<
    CollectionData[]
  >([]);

  // Filter products based on text and selected filters
  useEffect(() => {
    if (!products) return;

    let filtered = products;

    if (filterText) {
      filtered = filtered.filter((product) => {
        const { name, category, subcategory, collection } = product;
        return (
          name.toLowerCase().includes(filterText.toLowerCase()) ||
          category.name.toLowerCase().includes(filterText.toLowerCase()) ||
          subcategory.name.toLowerCase().includes(filterText.toLowerCase()) ||
          collection.name.toLowerCase().includes(filterText.toLowerCase())
        );
      });
    }

    // Category filtering
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.some((cat) => cat.id === product.category.id)
      );
    }

    // Subcategory filtering
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedSubcategories.some((sub) => sub.id === product.subcategory.id)
      );
    }

    // Collection filtering
    if (selectedCollections.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCollections.some((col) => col.id === product.collection.id)
      );
    }

    setFilteredProducts(filtered);
  }, [
    products,
    categories,
    filterText,
    selectedCategories,
    selectedSubcategories,
    selectedCollections,
  ]);

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleCategoryChange = (categories: CategoryData[]) => {
    setSelectedCategories(categories);
    // Reset subcategories and collections when categories change
    if (categories.length === 0) {
      setSelectedSubcategories([]);
      setSelectedCollections([]);
    }
  };

  const handleSubcategoryChange = (subcategories: SubCategoryData[]) => {
    setSelectedSubcategories(subcategories);
    // Reset collections when subcategories change
    if (subcategories.length === 0) {
      setSelectedCollections([]);
    }
  };

  const handleCollectionChange = (collections: CollectionData[]) => {
    setSelectedCollections(collections);
  };

  return products ? (
    <DrawerLayout
      drawer={{
        open: drawerOpen,
        title: "Filtros",
        onClose: () => setDrawerOpen(false),
        className: "bg-surface-dark",
        children: (
          <>
            <ProductFilter
              categories={categories}
              selectedCategories={selectedCategories}
              selectedSubcategories={selectedSubcategories}
              selectedCollections={selectedCollections}
              onCategoryChange={handleCategoryChange}
              onSubcategoryChange={handleSubcategoryChange}
              onCollectionChange={handleCollectionChange}
            />
          </>
        ),
      }}
    >
      <div className="flex flex-col w-full">
        <div className="md:py-24 md:px-16 py-12 p-4 w-fit">
          <h1 className="text-primary-main text-5xl font-semibold py-4">
            Productos
          </h1>
          <p className=" md:w-1/2">
            Aquí podrás encontrar todos nuestros productos, filtrá por
            categorías, subcategorías y colecciones para encontrar lo que
            buscás.
          </p>
        </div>
        <div className="w-full flex flex-row items-stretch flex-wrap gap-4 p-8">
          <div className="w-full flex flex-col sm:flex-row  px-6 gap-4">
            <Button
              variant="filled"
              className="bg-secondary-dark text-white"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              {drawerOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
            </Button>
            <Input
              className=" sm:w-full md:w-80"
              name="filterName"
              iconName="Search"
              placeholder="Nombre, Modelo, Categoría..."
              value={filterText}
              onChange={handleFilterTextChange}
            />
          </div>

          <div className="bg-surface-light w-full h-[1px] mb-8" />

          {/* Drawer with Filters */}

          <div className="flex flex-wrap justify-center gap-8 ">
            {filteredProducts?.map((product) => {
              return <SmallProductCard key={product.name} product={product} />;
            })}
          </div>

          {/* Show message when no products found */}
          {filteredProducts.length === 0 && (
            <div className="w-full text-center py-8">
              <p className="text-gray-500">
                No se encontraron productos que coincidan con los filtros
                aplicados.
              </p>
            </div>
          )}
        </div>
      </div>
    </DrawerLayout>
  ) : (
    // Skeleton de la pagina
    <ProductPageSkeleton />
  );
};

export default ProductPage;
