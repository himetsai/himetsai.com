import Image from "next/image";
import urlFor from "../lib/urlFor";
import { slugify } from "../lib/slugify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import "react";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="mt-4 mb-9">
          <div className="relative w-full aspect-[3/2] mx-auto">
            <Image
              className="object-cover object-center mx-auto 
            border-[1.5px] border-[#33272a] rounded-lg"
              src={urlFor(value).url()}
              alt="Blog Post Image"
              fill
            />
          </div>
          {value.caption && (
            <p className="px-2 mt-2 text-center text-sm text-[#594a4e]/75">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <SyntaxHighlighter
          useInlineStyles={true}
          language={value.language}
          style={monokaiSublime}
          wrapLongLines={true}
          customStyle={{
            borderRadius: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.82)",
            padding: "10px",
            borderWidth: "1.5px",
            borderColor: "#33272a",
            fontSize: "14px",
            lineHeight: "20px",
            marginBottom: "20px",
          }}
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
    latexblock: ({ value }: any) => {
      return (
        <div className="text-[#594a4e]">
          <BlockMath math={value.code.body} />
          {value.caption && (
            <p className="px-2 text-center text-sm text-[#594a4e]/75 mb-5">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 -mt-4 mb-5 sm:ml-10 py-5 text-[#594a4e] list-disc space-y-3 sm:space-y-5">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-5 -mt-4 mb-5 sm:ml-10 font-normal text-[#594a4e] space-y-3 sm:space-y-5 list-decimal">
        {children}
      </ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="font-normal text-[#594a4e] leading-8 tracking-wider mb-8">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1
        id={slugify(children)}
        className="text-5xl py-10 font-bold tracking-wider"
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        id={slugify(children)}
        className="text-4xl py-10 font-bold tracking-wider"
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        id={slugify(children)}
        className="text-3xl py-10 font-bold tracking-wider"
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4
        id={slugify(children)}
        className="text-2xl py-7 font-bold tracking-wider"
      >
        {children}
      </h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-red-400 border-l-4 pl-5 py-5 my-5 font-normal tracking-wider">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          target="_blank"
          href={value.href}
          rel={rel}
          className="underline decoration-[#ff7777] decoration-2 text-[#ff7777]
          tracking-wider hover:no-underline hover:blur-[1px] transition
          duration-200 ease-out"
        >
          {children}
        </a>
      );
    },
    code: ({ children }: any) => (
      <span className="bg-black/80 text-sm text-white rounded-md p-[3px]">
        {children}
      </span>
    ),
    underline: ({ children }: any) => (
      <span className="underline decoration-[#ff7777] decoration-2 font-normal tracking-wider">
        {children}
      </span>
    ),
    latex: ({ children }: any) => {
      return <InlineMath math={children[0]} />;
    },
  },
};
