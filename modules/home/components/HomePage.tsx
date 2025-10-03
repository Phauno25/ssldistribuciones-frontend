"use client";
import * as SVGCromponent from "../../../public/WhatsApp.svg";
import React, { useState } from "react";
import { HomePageProps } from "@/types/types";
import ComponentLoader from "../../../components/ComponentLoader";
import { AnimatePresence, motion } from "motion/react";
import { HeroContentAside } from "@/components/layout";
import { ProductData } from "@/modules/productos/types";
import Image from "next/image";

const HomePage = ({
  data,
  products,
}: {
  data: HomePageProps;
  products: ProductData[];
}): React.JSX.Element => {
  const [wpHover, setWpHover] = useState(false);
  return (
    data && (
      <>
        <HeroContentAside
          title={data.hero.title}
          description={data.hero.description}
          orientation="left"
          actionButtons={data.hero.actionButtons}
          image={data.hero.image}
        />
        <ComponentLoader data={data.body} products={products} />
        <motion.button
          onHoverStart={() => setWpHover(true)}
          onHoverEnd={() => setWpHover(false)}
          animate={{ width: "auto" }}
          onClick={() =>
            window.open(
              `https://wa.me/5491123849505?text=${encodeURIComponent(
                "Hola! Quisiera recibir asesoramiento."
              )}`,
              "_blank"
            )
          }
          className="fixed z-50 bottom-4 right-4 flex flex-nowrap items-center text-nowrap justify-start font-semibold border-2 overflow-hidden border-primary-main hover:bg-primary-dark hover:text-default rounded-full p-2 min-w-16 gap-4"
        >
          <Image
            src={SVGCromponent}
            alt="Whatsapp Logo"
            width={24}
            height={24}
            className="w-16 h-16 p-2 object-cover"
          />
          <AnimatePresence>
            {wpHover && (
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "fit-content" }}
                exit={{ width: 0, transition: { ease: "easeIn" } }}
              >
                Chatea con nosotros
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </>
    )
  );
};

export default HomePage;
