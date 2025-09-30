import { ImageType } from "@/types/types";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Dispatch, HtmlHTMLAttributes, ReactNode, SetStateAction } from "react";

export type ProductData = {
  id: string;
  name: string;
  price: number;
  slug: string;
  resumen: string;
  descripcion: BlocksContent;
  cover: { id: string; url: string };
  images: ImageType[];
  category: CategoryData;
  subcategory: SubCategoryData;
  collection: CollectionData;
  details: {
    name: string;
    id: number;
    value: string;
  }[];
};

export type CategoryData = {
  id: string;
  name: string;
  slug: string;
  subcategories: SubCategoryData[];
};

export type SubCategoryData = {
  id: string;
  name: string;
  slug: string;
  category: CategoryData;
  collections: CollectionData[];
};

export type CollectionData = {
  id: string;
  name: string;
  slug: string;
  subcategories: SubCategoryData[];
};

// Components


export type ProductFilterProps = {
  selectedCategories?: CategoryData[];
  selectedSubcategories?: SubCategoryData[];
  selectedColection?: CollectionData[];
  onCategoryChange?: (e: any) => void;
  onSubcategoryChange?: (e: any) => void;
  onCollectionChange?: (e: any) => void;
} & HtmlHTMLAttributes<HTMLDivElement>;

// Provider

export type ProductContextType = {
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
};
export type ProductProviderProps = { children?: ReactNode };
