import { HtmlHTMLAttributes } from "react";

export type DrawerProps = {
  open: boolean;
  title: string;
  onClose?: () => void;
} & HtmlHTMLAttributes<HTMLDivElement>;
