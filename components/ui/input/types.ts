import { IconName } from "@/types/types";
import { InputHTMLAttributes } from "react";

export type InputProps = {
  size?: "sm" | "md" | "lg";
  status?: "error" | "success";
  label?: string;
  helperText?: string;
  iconName?: IconName;
} & InputHTMLAttributes<HTMLInputElement>;
