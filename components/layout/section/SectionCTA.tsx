import React from "react";
import { useRouter } from "next/navigation";
import { Badge, Button } from "@/components/ui";

export type SectionCTAProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: {
    id: number;
    variant: "filled" | "outlined" | "link" | "gradient";
    text: string;
    url: string;
  }[];
};

const SectionCTA: React.FC<SectionCTAProps> = ({
  header,
  title,
  description,
  items,
}) => {
  const router = useRouter();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-center sm:items-start justify-evenly gap-6 px-10 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className=" space-y-4">
          {header && <Badge>{header}</Badge>}

          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
            {title}
          </h2>
          <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        {items && (
          <div className="flex flex-col gap-2 md:flex-row lg:justify-end">
            {items.map(({ id, text, url, ...item }) => {
              return (
                <Button
                  id={id.toString()}
                  key={text}
                  size="xl"
                  onClick={() => {
                    router.push(url);
                  }}
                  {...item}
                  variant="gradient"
                >
                  {text}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionCTA;
