import {
  BannerCTAProps,
  BannerWithItemsProps,
  HeroContentAsideProps,
  SectionContentProps,
  SectionInputProps,
  SideSectionProps,
  TextBlockGridProps,
} from "@/components/layout";
import { SectionCTAProps } from "@/components/layout/section/SectionCTA";
import { ProductData } from "@/modules/productos/types";
import { icons } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type ComponentLoaderProps = {
  data?: BodyItems[];
  products?: ProductData[];
};

export type BodyItems = {
  __component: string;
} & (
  | BannerWithItemsProps
  | BannerCTAProps
  | TextBlockGridProps
  | SectionContentProps
  | SectionCTAProps
  | SectionInputProps
  | SideSectionProps
);

export type HomePageProps = {
  hero: HeroContentAsideProps;
  body: BodyItems[];
};

export type MainAppContextType = {
  drawerOpen: boolean | undefined;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  drawerChildren?: ReactNode | null;
  setDrawerChildren: Dispatch<SetStateAction<ReactNode | null>>;
};

export type PageProps = {
  params: { slug: string };
};
export type PageData = {
  name: string;
  slug: string;
  hero: HeroContentAsideProps;
  body: BodyItems[];
}[];

export type ItemProps = {
  image?: string;
  icon?: IconName;
} & TitleBlockProps;

export type TitleBlockProps = {
  header?: string;
  title?: string;
  description?: string;
};

export type IconName = keyof typeof icons;

export type ContentRelatedData = {
  __type: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};
export type StrapiApiResponse<T> = {
  data:
    | ({ id: string } & (T | ContentRelatedData[]))
    | ({ id: string } & (T | ContentRelatedData));
};

export type LogoData = {
  id: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  related: ContentRelatedData[];
};

export type FormPropTypes<T> = {
  onSubmit?: (e: T) => void;
};

export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};
export type ImageType = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl?: null;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

const COLOR_TYPES = [
  "primary-dark",
  "primary-main",
  "primary-light",
  "primary-extraLight",
  "secondary-dark",
  "secondary-main",
  "secondary-light",
  "secondary-extraLight",
  "success-dark",
  "success-main",
  "success-light",
  "success-extraLight",
  "info-dark",
  "info-main",
  "info-light",
  "info-extraLight",
  "warning-dark",
  "warning-main",
  "warning-light",
  "warning-extraLight",
  "error-dark",
  "error-main",
  "error-light",
  "error-extraLight",
] as const;

export type ColorTypes = (typeof COLOR_TYPES)[number];

export const COLOR_GROUP_TYPES = [
  "primary",
  "secondary",
  "complementary",
  "success",
  "info",
  "warning",
  "error",
] as const;
export type ColorGroupTypes = (typeof COLOR_GROUP_TYPES)[number];
