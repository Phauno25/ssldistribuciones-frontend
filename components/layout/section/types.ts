export type SectionCTAProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: {
    id: number;
    variant: "filled" | "outlined" | "link" | "gradient";
    text: string;
    url: string;
  }[];
};
export type SectionInputProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: { id: number; title: string; description: string }[];
};

export type SideSectionProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: { id: number; title: string; description: string }[];
};
