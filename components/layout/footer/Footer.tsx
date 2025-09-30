import React from "react";
import { IconName, LogoData } from "@/types/types";
import { MenuProps, Icon } from "@/components/ui";
import Image from "next/image";

export type FooterData = {
  id: string;
  title: string;
  logo: LogoData;
  menu: MenuProps;
  displayTitle?: boolean;
  mediaLinks?: { name: string; value: string }[];
};

const Footer: React.FC<FooterData> = ({ logo, title, menu, mediaLinks }) => {
  return (
    <footer className="border-t-2 border-surface-main">
      <div className=" px-12 lg:px-24 py-12 lg:py-16">
        <div className="md:flex md:justify-between items-end">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                className="h-8 me-3"
                src={`${process.env.NEXT_PUBLIC_BUCKET}${logo.url}`}
                alt="SSL Logo"
              />
              {title && (
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {title}
                </span>
              )}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
            {menu.menuItem.map((item) => {
              if (item.__component === "ui.link-list") {
                return (
                  <div key={item.name}>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                      {item.name}
                    </h2>
                    {item.link && item.link.length > 0 && (
                      <ul className="text-gray-400 font-medium flex flex-row flex-wrap md:block gap-4">
                        {item.link.map((link) => {
                          return (
                            <li className="mb-4" key={link.name}>
                              <a href={link.url} className="hover:underline">
                                {link.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              } else {
                return (
                  <h2
                    key={item.name}
                    className="mb-6 text-sm font-semibold uppercase text-white"
                  >
                    {item.name}
                  </h2>
                );
              }
            })}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 SSL Distribuciones |
            <a href="https://flowbite.com/" className="hover:underline">
              Av Estombra 123 - Sarandí - Avellaneda.
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 lg:pr-8">
            {mediaLinks?.map((item) => {
              return (
                <a
                  key={item.value}
                  href={item.value}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <Icon name={item.name as IconName} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
