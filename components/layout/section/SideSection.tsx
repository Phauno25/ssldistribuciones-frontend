import React from "react";
import { motion } from "motion/react";
import { easeIn } from "motion";
import { TitleBlock } from "@/components/ui";

export type SideSectionProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: { id: number; title: string; description: string }[];
};

const SideSection: React.FC<SideSectionProps> = ({
  header,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
}) => {
  return (
    <section
      id="why-us"
      className="relative w-full py-12 md:py-24 lg:py-32 bg-none text-white bg-transparent content-visibility-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.75 }}
        transition={{ duration: 1, ease: easeIn }}
      >
        <TitleBlock header={header} title={title} description={description} />
      </motion.div>
      <div className="w-full px-4 md:px-6 pt-16">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full lg:w-1/2">
            {items && (
              <ul className="flex flex-col justify-between items-center px-8 gap-8">
                {items?.map((item) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0, y: -25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      key={item.id}
                      className="space-y-1 py-2 w-4/5"
                    >
                      <p className=" text-2xl font-bold text-primary-main">
                        {item.title}
                      </p>
                      <p className="text-[#ccc]">{item.description}</p>
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <div className="overflow-hidden mx-auto aspect-video rounded-xl">
              <motion.img
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 1 }}
                exit={{ opacity: 0, y: -25 }}
                src={imageSrc}
                alt={imageAlt}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full hover:scale-150 transition-transform duration-[5s] ease-in-out"
                width="550"
                height="310"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideSection;
