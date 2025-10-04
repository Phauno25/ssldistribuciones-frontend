import { Icon, Button } from "@/components/ui";
import { IconName } from "@/types/types";
import React from "react";

export type BannerCTAProps = {
  icon?: IconName;
  title?: string;
  description?: string;
  cta?: {
    variant?: "filled" | "outlined" | "gradient";
    text: string;
    url: string;
  }[];
};

const BannerCTA = ({ icon, title, description, cta }: BannerCTAProps) => {
  return (
    <section className="w-full flex justify-center py-24 lg:py-32">
      <div className="w-3/4 p-4 flex flex-col items-center justify-center border rounded gap-8 border-surface-main">
        {icon && (
          <Icon
            name={icon}
            strokeWidth={1}
            size={64}
            className="animate-pulse text-primary-main"
          />
        )}
        <span className="text-white p-2 text-center font-semibold text-3xl">{title}</span>
        <p className="text-lg text-center text-neutral-200">{description}</p>
        <div className="flex flex-col md:flex-row gap-4">
          {cta &&
            cta.map((item) => (
              <Button
                key={item.text}
                variant={item.variant}
                onClick={() => window.open(item.url, "_blank")}
              >
                {item.text}
              </Button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
