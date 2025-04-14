import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export type TabProps = {
  children?: ReactNode;
  onTabChange?: (tab: { index: number; value: string }) => void;
} & HtmlHTMLAttributes<HTMLUListElement>;

export type TabItemProps = {
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
