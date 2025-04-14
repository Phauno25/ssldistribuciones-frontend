import { HTMLAttributes, ReactNode } from "react";

export type BadgeProps = {
  size?: "sm" | "md";
  variant?: "filled" | "outlined";
  rounded?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;
