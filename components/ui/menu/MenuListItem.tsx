"use client";
import React, { useState } from "react";
import Icon from "../icon/Icon";
import MenuItem, { MenuItemProps } from "./MenuItem";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

export type MenuProps = {
  id: string;
  menuItem: MenuItemProps[];
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ItemStyles = {
  base: "rounded transition-color duration-300 ease-in-out",
  colors: "md:border-0 hover:text-neutral-900 hover:text-primary-main",
};

const MenuListItem: React.FC<MenuItemProps> = ({ link: links, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.li className="relative">
      <button
        id={name}
        onClick={() => setIsOpen(!isOpen)}
        data-dropdown-toggle="dropdownNavbar"
        className={clsx(
          "flex items-center justify-between w-full p-4",
          ItemStyles.base,
          ItemStyles.colors
        )}
      >
        {name}
        <Icon
          name="ChevronDown"
          className={clsx("transition-all", isOpen ? "rotate-180" : "")}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <div
            id="dropdownNavbar"
            className="block md:absolute md:right-[0%] md:top-[105%] z-10 font-normal rounded-lg shadow w-[95%] mx-auto md:mx-0 md:w-fit min-w-44 border bg-transparent md:border-surface-extralight md:bg-surface-dark md:divide-surface-light"
          >
            <motion.ul
              initial={{ height: "0px" }}
              animate={{ height: "auto" }}
              exit={{ height: "0px", opacity: 0 }}
              className="text-white divide-y divide-surface-light"
              aria-labelledby="dropdownLargeButton"
            >
              {links?.map((item) => (
                <MenuItem url={item.url} name={item.name} key={item.name} />
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default MenuListItem;
