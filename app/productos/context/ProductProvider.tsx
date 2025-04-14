import { getData } from "@/services/services";
import {
  CategoryData,
  CollectionData,
  ProductContextType,
  ProductData,
  ProductProviderProps,
  SubCategoryData,
} from "../types/types";
import { createContext, useEffect, useMemo, useState } from "react";

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductData[]>();
  const [categories, setCategories] = useState<CategoryData[]>();
  const [subcategories, setSubcategories] = useState<SubCategoryData[]>();
  const [collections, setCollections] = useState<CollectionData[]>();
  const [selectedCategories, setSelectedCategories] =
    useState<CategoryData[]>();
  const [selectedSubcategories, setSelectedSubcategories] =
    useState<SubCategoryData[]>();
  const [selectedCollections, setSelectedCollections] =
    useState<CollectionData[]>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories: CategoryData[] | undefined = await getData(
        "product-categories?populate[subcategories][populate]=*",
        "collection"
      );
      const fetchedProducts: ProductData[] |  undefined = await getData(
        "products?populate=*",
        "collection"
      );
      
      let subcats: SubCategoryData[] = [];
      let collects: CollectionData[] = [];
      if (fetchedCategories) {
        fetchedCategories.forEach((category) => {
          category.subcategories.forEach((subcategory) => {
            subcats.push(subcategory);
            subcategory.collections.forEach((collection) => {
              collects.push(collection);
            });
          });
        });
      }
      setCategories(fetchedCategories);
      setProducts(fetchedProducts);
      setSubcategories(subcats);
      setCollections(collects);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategories?.length === 0) {
      setSelectedSubcategories([]);
      setSelectedCollections([]);
      return;
    }
    if (!selectedSubcategories) {
      setSelectedCollections([]);
    }
  }, [selectedCategories, selectedSubcategories, selectedCollections]);

  const contextValue = useMemo(
    () => ({
      products,
      categories,
      subcategories,
      collections,
      selectedCategories,
      setSelectedCategories,
      selectedSubcategories,
      setSelectedSubcategories,
      selectedCollections,
      setSelectedCollections,
    }),
    [
      categories,
      products,
      subcategories,
      collections,
      selectedCategories,
      selectedSubcategories,
      selectedCollections,
    ]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
