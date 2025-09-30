"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export type MenuItemProps = {
  id?: string;
  __component?: string;
  name?: string;
  url?: string;
  link?: { id: string; url: string; name: string }[];
  active?: boolean;
};

export const ItemStyles = {
  base: "rounded transition-color duration-300 ease-in-out",
  colors: "md:border-0 hover:text-neutral-900 hover:text-primary-main",
};

const MenuItem: React.FC<MenuItemProps> = ({ name, url }) => {
  const pathname = usePathname();
  const isActive = () => {
    if (url) {
      return pathname.toLowerCase().includes(url) || pathname === url;
    }
    return false;
  };
  const active = isActive();
  return (
    <motion.li
      initial={{ height: "0px" }}
      exit={{ height: "0px", opacity: 0 }}
      animate={{ height: "auto" }}
      className="list-none m-0"
    >
      <a
        id={name}
        href={url}
        className={clsx(
          "p-4 block h-full md:border-0",
          ItemStyles.base,
          ItemStyles.colors,
          active ? "text-primary-dark" : "text-white"
        )}
      >
        {name}
      </a>
    </motion.li>
  );
};

export default MenuItem;
