import React from "react";
import { ItemStyles } from "./styles";
import clsx from "clsx";
import { motion } from "motion/react";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({ name, url }) => {
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
          ItemStyles.colors
        )}
      >
        {name}
      </a>
    </motion.li>
  );
};

export default MenuItem;
