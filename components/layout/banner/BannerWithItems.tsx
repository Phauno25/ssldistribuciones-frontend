import React from "react";
import { ItemProps } from "@/types/types";
import { CardIcon } from "@/components/ui";

export type BannerWithItemsProps = {
  items?: ItemProps[];
  title?: string;
  description?: string;
} & React.HTMLAttributes<HTMLElement>;

const BannerWithItems: React.FC<BannerWithItemsProps> = ({
  items,
  title,
  description,
  ...props
}) => {
  return (
    <section {...props} className="w-full py-24 lg:py-32">
      <div className="mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        )}
      </div>
      <div className="w-full flex items-strech justify-evenly gap-4 z-40 relative flex-wrap p-4">
        {items?.map((item) => {
          return (
            <CardIcon
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ amount: 0.75 }}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BannerWithItems;
