import { ImageType } from "@/types/types";

export type HeroContentAsideProps = {
  image: ImageType;
  title: string;
  description: string;
  orientation: "left" | "right";
  actionButtons: {
    id: number;
    variant: "filled" | "outlined" | "link" | "gradient";
    text: string;
    url: string;
  }[];
};
