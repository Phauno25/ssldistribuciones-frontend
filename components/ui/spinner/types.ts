import { SVGAttributes } from "react";

export type SpinnerProps = {
  size: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  className?: string;
} & SVGAttributes<SVGElement>;
