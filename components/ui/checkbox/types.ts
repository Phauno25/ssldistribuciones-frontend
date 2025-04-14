import { InputHTMLAttributes } from "react";

export type CheckboxProps = {
  helperText?: string;
  label?: string;
  bordered?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
