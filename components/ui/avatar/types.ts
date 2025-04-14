import { ImgHTMLAttributes } from "react";

export type AvatarProps = {
  variant?: "circled" | "squared";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
} & ImgHTMLAttributes<HTMLImageElement>;
