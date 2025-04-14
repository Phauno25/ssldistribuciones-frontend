import { HTMLMotionProps } from "motion/react";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "link" | "gradient";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  url?: string;
} & HTMLMotionProps<"button">;
