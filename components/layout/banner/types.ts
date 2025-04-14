import { ItemProps } from "@/types/types";

export type BannerProps = {
  items?: ItemProps[];
  size?: "small" | "medium" | "large";
  background?: string;
};
