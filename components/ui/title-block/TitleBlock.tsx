import React from "react";
import { TitleBlockProps } from "@/types/types";

const TitleBlock: React.FC<TitleBlockProps> = ({
  header,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center gap-2">
      {header && (
        <div className="inline-block rounded-lg bg-surface-main px-3 py-1 text-sm">
          {header}
        </div>
      )}
      {title && (
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="max-w-[900px] text-[#ccc] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleBlock;
