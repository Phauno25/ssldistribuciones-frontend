import React, { ButtonHTMLAttributes } from "react";

export type TabItemProps = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const TabItem: React.FC<TabItemProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default TabItem;
