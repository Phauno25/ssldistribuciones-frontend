import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";

const cx = (...cls: (string | false | undefined)[]) =>
  cls.filter(Boolean).join(" ");

type RichTextProps = {
  content: BlocksContent;
  paragraphClassName?: string;
  imageClassName?: string;
};

export function RichText({
  content,
  paragraphClassName,
  imageClassName,
}: RichTextProps) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className={paragraphClassName}>{children}</p>
        ),
        heading: ({ level, children }) => {
          const Tag = `h${level}` as keyof JSX.IntrinsicElements;
          const sizes: Record<number, string> = {
            1: "text-3xl md:text-4xl font-bold",
            2: "text-2xl md:text-3xl font-semibold",
            3: "text-xl md:text-2xl font-semibold",
            4: "text-lg md:text-xl font-semibold",
            5: "text-base md:text-lg font-semibold",
            6: "text-sm md:text-base font-semibold",
          };
          return (
            <Tag className={cx("mt-8 mb-3 tracking-tight", sizes[level])}>
              {children}
            </Tag>
          );
        },
        list: ({ format, children }) =>
          format === "ordered" ? (
            <ol className="my-4 ml-6 list-decimal space-y-1">{children}</ol>
          ) : (
            <ul className="my-4 ml-6 list-disc space-y-1">{children}</ul>
          ),
        quote: ({ children }) => (
          <blockquote className="my-6 border-l-4 border-primary-500/50 pl-4 italic text-gray-600 dark:text-gray-300">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-zinc-100">
            <code>{children}</code>
          </pre>
        ),
        image: ({ image }) => {
          const src = image.url.startsWith("http")
            ? image.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
          const alt = image.alternativeText || "";
          return (
            <div className="my-6">
              <Image
                width={600}
                height={800}
                src={src}
                alt={alt}
                className={imageClassName}
              />
              {alt && <p className="mt-2 text-sm text-gray-500">{alt}</p>}
            </div>
          );
        },
        link: ({ children, url }) => {
          const external = /^https?:\/\//i.test(url);
          return (
            <a
              href={url}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-primary-600 underline decoration-primary-300 hover:decoration-2 dark:text-primary-400"
            >
              {children}
            </a>
          );
        },
      }}
      modifiers={{
        bold: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => (
          <span className="underline underline-offset-2">{children}</span>
        ),
        code: ({ children }) => (
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-[0.92em] dark:bg-zinc-800">
            {children}
          </code>
        ),
      }}
    />
  );
}
