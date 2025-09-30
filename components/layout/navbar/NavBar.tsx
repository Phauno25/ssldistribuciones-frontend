"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { loadImgUrl } from "@/utils/functions";
import { LogoData } from "@/types/types";
import { Button, Icon, Menu, MenuProps } from "@/components/ui";
import Image from "next/image";

export type NavBarData = {
  id: string;
  title: string;
  logo: LogoData;
  menu: MenuProps;
  displayTitle?: boolean;
};

const NavBar: React.FC<NavBarData> = ({ logo, menu, title, displayTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDisplayMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-50 top-0 left-0 w-full overflow-visible transition-all duration-300 ease-in-out">
      <div className="w-full h-full relative flex flex-row flex-wrap justify-center items-center overflow-visible py-2">
        <div className="md:px-8 px-4 w-full flex items-center justify-between border-surface-main border-b-2 gap-32 sm:gap-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={loadImgUrl(logo.url)}
              alt="SSL Logo"
              width={75}
              height={50}
              className="h-8 w-10 md:h-10 md:w-12 lg:h-10 lg:w-16 object-cover"
            />
            {title && displayTitle && (
              <span className="self-center lg:text-2xl text-md md:text-lg font-semibold whitespace-nowrap text-white">
                {title}
              </span>
            )}
          </a>
          <div className="relative flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse md:hidden">
            <Button
              data-collapse-toggle="main menu"
              variant="outlined"
              type="button"
              aria-controls="main-menu"
              aria-expanded="false"
              onClick={handleDisplayMenu}
              className=" border-2"
            >
              <Icon name="Menu" />
            </Button>
          </div>

          <Menu {...menu} id="main menu" className={"hidden md:visible"} />
        </div>
        <div className="w-full md:hidden">
          <Menu
            {...menu}
            id="main-menu-mobile"
            className={clsx(menuOpen ? "" : "hidden")}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
