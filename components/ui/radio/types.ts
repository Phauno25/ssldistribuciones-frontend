import { InputHTMLAttributes } from "react";

export type RadioProps = {
  helperText?: string;
  label?: string;
  bordered?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
