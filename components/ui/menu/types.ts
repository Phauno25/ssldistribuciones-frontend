import { HtmlHTMLAttributes } from "react";

export type LinkProps = {
  id: string;
  url: string;
  name: string;
};

export type MenuItemProps = {
  id?: string;
  __component?: string;
  name?: string;
  url?: string;
  link?: LinkProps[];
};

export type MenuProps = {
  id: string;
  menuItem: MenuItemProps[];
  name: string;
} & HtmlHTMLAttributes<HTMLDivElement>;
