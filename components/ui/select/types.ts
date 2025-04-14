import { SelectHTMLAttributes } from "react";

export type SelectProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">;
