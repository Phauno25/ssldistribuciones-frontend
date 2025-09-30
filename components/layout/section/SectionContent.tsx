import { RichText } from "@/components/ui/rich-text/RichText";
import { ImageType } from "@/types/types";
import { loadImgUrl } from "@/utils/functions";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { motion } from "motion/react";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

export type SectionContentProps = {
  title?: string;
  content?: BlocksContent;
  badge?: string;
  image?: ImageType;
} & HTMLAttributes<HTMLElement>;

const SectionContent = ({
  title,
  content,
  badge,
  image,
  ...props
}: SectionContentProps) => {
  return (
    <section {...props}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start my-10">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.75 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">{title} </h2>
            {content && (
              <RichText
                paragraphClassName="text-lg text-muted-foreground"
                content={content}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.75 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            {image && (
              <Image
                src={loadImgUrl(image.url)}
                alt="Almacén SSL Distribuciones"
                className="rounded-2xl shadow-2xl"
              />
            )}
            <div className="absolute -bottom-6 -right-6 bg-primary text-secondary px-6 py-3 rounded-lg font-bold text-lg cyber-glow">
              {badge}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
