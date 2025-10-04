import { TextBlock, TextBlockProps } from "@/components/ui";
import React from "react";

export type TextBlockGridProps = {
  leftBlock?: TextBlockProps;
  rightBlock?: TextBlockProps;
};

const TextBlockGrid = ({ leftBlock, rightBlock }: TextBlockGridProps) => {
  return (
    <div className=" w-full py-24 lg:py-32 grid lg:grid-cols-2 gap-36 md:gap-12">
      {leftBlock && (
        <TextBlock
          title={leftBlock.title}
          header={leftBlock.header}
          contentMain={leftBlock.contentMain}
          contentSecondary={leftBlock.contentSecondary}
        />
      )}
      {rightBlock && (
        <TextBlock
          title={rightBlock.title}
          header={rightBlock.header}
          contentMain={rightBlock.contentMain}
          contentSecondary={rightBlock.contentSecondary}
        />
      )}
    </div>
  );
};

export default TextBlockGrid;
