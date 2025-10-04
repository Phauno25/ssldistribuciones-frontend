import React from "react";
import clsx from "clsx";
import Atropos from "atropos/react";
import { loadImgUrl } from "@/utils/functions";
import { motion } from "motion/react";
import { ImageType } from "@/types/types";
import { Button, DynamicText, Icon } from "@/components/ui";
import Image from "next/image";

export type HeroContentAsideProps = {
  image: ImageType;
  title: string;
  description: string;
  orientation: "left" | "right";
  actionButtons: {
    id: number;
    variant: "filled" | "outlined" | "link" | "gradient";
    text: string;
    url: string;
  }[];
};

const HeroContentAside: React.FC<HeroContentAsideProps> = ({
  image,
  description,
  actionButtons,
  orientation = "left",
}) => {
  return (
    <section className="w-full h-[90vh] mt-12 flex flex-row justify-start items-start gap-6 overflow-hidden">
      <div
        className={clsx(
          "flex flex-row justify-between w-full",
          orientation === "right" ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div className="flex flex-col w-full justify-center py-4 px-12 md:py-8 md:px-24 md:w-1/2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl text-center md:text-6xl md:text-left font-bold !leading-tight text-white">
              Potenciando tu{" "}
              {
                <DynamicText
                  className="text-primary-main block w-full"
                  texts={["confiabilidad", "rendimiento", "seguridad"]}
                />
              }
              {"\n"} con cada viaje.
            </h1>
            <p className="pl-2 text-left max-w-[600px] md:text-lg text-neutral-50">
              {description}
            </p>
          </motion.div>
          <div className="flex flex-row justify-start pt-8">
            {actionButtons.map((buttonProps) => {
              return (
                <motion.div
                  key={buttonProps.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeIn" }}
                >
                  <Button
                    {...buttonProps}
                    id={buttonProps.id.toString()}
                    size="xl"
                    variant="gradient"
                    onClick={() => {
                      window.location.href = "/pages/quienes-somos";
                    }}
                  >
                    {buttonProps.text}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "w-1/2 md:flex justify-center items-center p-8 hidden"
          )}
        >
          <Atropos
            className="w-full h-full"
            shadow={false}
            highlight={true}
            rotateChildren={false}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
              viewport={{ amount: 0.25 }}
              className="w-3/4 mx-auto my-0 border-gradient-main border-2 relative"
            >
              <div className=" rounded-md p-1 w-fit h-fit absolute top-3 right-2">
                <Icon
                  name="Heart"
                  fill="currentColor"
                  size="sm"
                  className="text-surface-light"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-full h-3/4 overflow-hidden">
                <Atropos shadow={false} className="w-full h-full">
                  <Image
                    src={loadImgUrl(image.url)}
                    alt="Hero"
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "auto" }}
                    className="object-cover"
                  />
                </Atropos>
              </div>

              <div className="flex flex-col bg-transparent">
                <div className="flex justify-center flex-wrap">
                  <div className="w-1/2 py-1 px-2">
                    <p className="font-light text-left text-sm text-white">
                      Envios:
                    </p>
                  </div>
                  <div className="w-1/2 py-1 px-2">
                    <p className="text-right font-light text-sm">
                      Disponibles a todo el pais
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-surface-light" />
                </div>
                <div className="flex justify-center flex-wrap">
                  <div className="w-1/2 py-1 px-2">
                    <p className="font-light text-left text-sm text-white">
                      Disponibilidad de compra:
                    </p>
                  </div>
                  <div className="w-1/2 py-1 px-2">
                    <p className="text-right font-light text-sm">
                      Mayorista / Minorista
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-surface-light" />
                </div>
                <div className="flex justify-center flex-wrap">
                  <div className="w-1/2 py-1 px-2">
                    <p className="font-light text-left text-sm text-white">
                      Garantia
                    </p>
                  </div>
                  <div className="w-1/2 py-1 px-2">
                    <p className="text-right font-light text-sm">1 año</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Atropos>
        </div>
      </div>
    </section>
  );
};

export default HeroContentAside;
