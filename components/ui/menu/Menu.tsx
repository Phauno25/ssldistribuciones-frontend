import React from "react";
import MenuListItem from "./MenuListItem";
import MenuItem from "./MenuItem";
import clsx from "clsx";
import { MenuProps } from "./types";

const Menu: React.FC<MenuProps> = ({ menuItem, className, ...props }) => {
  return (
    <div {...props} className={clsx("w-full md:block md:w-auto", className)}>
      <ul className="flex flex-col font-medium mt-4 gap-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
        {menuItem.map((item) => {
          if (item.__component === "ui.link-list") {
            return <MenuListItem key={item.id} {...item} />;
          } else {
            return <MenuItem key={item.id} {...item} />;
          }
        })}
      </ul>
    </div>
  );
};

export default Menu;
