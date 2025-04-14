import React, { useRef } from "react";
import Icon from "../../ui/icon/Icon";
import clsx from "clsx";
import { loadImgUrl } from "@/utils/functions";
import { motion } from "motion/react";
import { BannerProps } from "./types";

const Banner: React.FC<BannerProps> = ({ items, background }) => {
  const ref = useRef(null);
  return (
    <section
      className={clsx(
        "w-full flex justify-center py-24 text-white relative",
        "bg-surface-light",
        background &&
          "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-normal  after:z-10]"
      )}
    >
      {background && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-surface-dark bg-center bg-cover bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_BUCKET + background
            })`,
          }}
        />
      )}
      <div
        ref={ref}
        className="container w-full h-full flex items-strech justify-evenly gap-4 z-40 relative flex-wrap p-4"
      >
        {items?.map((item) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ amount: 0.75 }}
              className="flex items-start gap-4 bg-surface-dark p-4 rounded-lg max-w-sm border-gradient-main border-2"
            >
              {item.icon && (
                <Icon
                  name={item.icon ?? "CreditCard"}
                  className="h-32 w-32 text-secondary-light bg-secondary-light"
                />
              )}
              <Icon name={"Car"} color="#93c5fd" size="large" />

              <div className="flex flex-col justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-primary-main">
                  {item.title}
                </h3>
                <p className="text-md text-[#ccc]">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
