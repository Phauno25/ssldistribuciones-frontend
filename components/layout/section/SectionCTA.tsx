import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SectionCTAProps } from "./types";

const MotionComponent = motion.create(Button);

const SectionCTA: React.FC<SectionCTAProps> = ({
  header,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
}) => {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100"
    >
      <div className="container flex flex-col md:flex-row md:items-center sm:items-start justify-evenly gap-6 px-10 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className=" space-y-4">
          {header && <Badge>{header}</Badge>}

          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#333]">
            {title}
          </h2>
          <p className="max-w-[600px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        {items && (
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            {items.map(({ id, text, url, variant, ...item }) => {
              return (
                <MotionComponent
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.5, rotate: 3 }}
                  id={id.toString()}
                  key={text}
                  size="xl"
                  onClick={() => {
                    router.push(url);
                  }}
                  variant={variant ?? "filled"}
                  {...item}
                >
                  {text}
                </MotionComponent>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default SectionCTA;
