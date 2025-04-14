import React from "react";
import { Button } from "../../ui/button";
import clsx from "clsx";
import Atropos from "atropos/react";
import "./hero.css";
import Icon from "@/components/ui/icon/Icon";
import { loadImgUrl } from "@/utils/functions";
import { motion } from "motion/react";
import { HeroContentAsideProps } from "./types";

const HeroContentAside: React.FC<HeroContentAsideProps> = ({
  title,
  image,
  description,
  actionButtons,
  orientation = "left",
}) => {
  return (
    <section className=" hero w-full h-[90vh] flex flex-row justify-center gap-6 overflow-hidden">
      <div
        className={clsx(
          "flex flex-row justify-between",
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
            <h1 className=" text-5xl text-center md:text-7xl md:text-left font-bold tracking-tighter text-primary-main">
              {title}
            </h1>
            <p className="pl-2 text-left max-w-[600px] text-xl md:text-xl text-neutral-50">
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
              className="w-3/4 mx-auto my-0 border-surface-dark border-2 rounded-xl relative"
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
                <Atropos shadow={false}>
                  <img
                    src={loadImgUrl(image.url)}
                    alt="Hero"
                    className="object-cover w-full h-full"
                  />
                </Atropos>
              </div>

              <div className="flex flex-col bg-surface-dark border-surface-dark border-2">
                <div className="flex justify-center flex-wrap">
                  <div className="w-1/2 py-1 px-2">
                    <p className="text-left text-sm text-secondary-extraLight">
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
                    <p className="text-left text-sm text-secondary-extraLight">
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
                    <p className="text-left text-sm text-secondary-extraLight">
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
