"use client";
import React from "react";
import { ItemStyles } from "./styles";
import clsx from "clsx";
import { motion } from "motion/react";
import { MenuItemProps } from "./types";
import { usePathname } from "next/navigation";

const MenuItem: React.FC<MenuItemProps> = ({ name, url }) => {
  const pathname = usePathname();
  const isActive = () => {
    if (url) {
      return pathname.includes(url) || pathname === url;
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
          active && "text-primary-dark"
        )}
      >
        {name}
      </a>
    </motion.li>
  );
};

export default MenuItem;
