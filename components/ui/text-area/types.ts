import { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  status?: "error" | "success";
  label?: string;
  helperText?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
