import { Dispatch, SetStateAction, useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import {
  CategoryData,
  CollectionData,
  ProductData,
  SubCategoryData,
} from "../types/types";

export const useProductContext = (): {
  products: ProductData[] | undefined;
  categories: CategoryData[] | undefined;
  subcategories: SubCategoryData[] | undefined;
  collections: CollectionData[] | undefined;
  selectedCategories: CategoryData[] | undefined;
  setSelectedCategories: Dispatch<SetStateAction<CategoryData[] | undefined>>;
  selectedSubcategories: SubCategoryData[] | undefined;
  setSelectedSubcategories: Dispatch<
    SetStateAction<SubCategoryData[] | undefined>
  >;
  selectedCollections: CollectionData[] | undefined;
  setSelectedCollections: Dispatch<
    SetStateAction<CollectionData[] | undefined>
  >;
} => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext debe ser usado dentro de ProductProvider"
    );
  }
  return context;
};
