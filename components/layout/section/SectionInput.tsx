import { Badge, Button } from "@/components/ui";
import React from "react";

export type SectionInputProps = {
  header?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: { id: number; title: string; description: string }[];
};

const SectionInput: React.FC<SectionInputProps> = ({
  header,
  title,
  description,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#333] text-white border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          {header && <Badge>{header}</Badge>}
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {title}
          </h2>
          <p className="mx-auto max-w-[600px] text-[#ccc] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your vehicle make and model"
              className="max-w-lg flex-1 bg-[#444] text-white placeholder:text-[#ccc]"
            />
            <Button type="submit" className="bg-[#ffa500] text-[#333]">
              Get Quote
            </Button>
          </form>
          <p className="text-xs text-[#ccc]">
            We will never share your information. Read our
            <Button variant="link">Privacy Policy</Button>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionInput;
