
import { TextBlock, TextBlockProps } from "@/components/ui";
import React from "react";

export type TextBlockGridProps = {
  leftBlock?: TextBlockProps;
  rightBlock?: TextBlockProps;
};

const TextBlockGrid = ({ leftBlock, rightBlock }: TextBlockGridProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 py-20">
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
