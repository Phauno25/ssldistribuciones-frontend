import { BlocksContent } from "@strapi/blocks-react-renderer";
import React from "react";
import { RichText } from "../rich-text/RichText";

export type TextBlockProps = {
  header?: string;
  title?: string;
  contentMain?: BlocksContent;
  contentSecondary?: BlocksContent;
};

const TextBlock = ({
  title,
  contentMain,
  contentSecondary,
}: TextBlockProps) => {
  return (
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
      {contentMain && (
        <RichText
          paragraphClassName="text-xl text-gray-300 mb-6"
          content={contentMain}
        />
      )}
      {contentSecondary && (
        <RichText
          paragraphClassName="text-lg text-gray-400"
          content={contentSecondary}
        />
      )}
    </div>
  );
};

export default TextBlock;
