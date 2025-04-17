import React from "react";
import { TabItemProps } from "./types";

const TabItem: React.FC<TabItemProps> = ({ children, selected, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default TabItem;
