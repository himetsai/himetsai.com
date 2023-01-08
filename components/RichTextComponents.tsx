import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import { slugify } from "../lib/slugify";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="font-normal text-[#594a4e] leading-7 tracking-wider mb-5">
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
        className="text-2xl leading-5 py-6 font-bold tracking-wider"
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
        <Link
          href={value.href}
          rel={rel}
          className="hover:underline decoration-[#ff7777] text-[#ff7777]
          font-normal tracking-wider"
        >
          {children}
        </Link>
      );
    },
  },
};
