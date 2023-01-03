import React from "react";
import Link from "next/link";
import { slugify } from "./RichTextComponents";

type Props = {
  headings: Heading[];
};

const getChildrenText = (heading: Heading): string =>
  heading.children.map((node) => node.text).join("");

export default function TableOfContents({ headings }: Props) {
  return (
    <div>
      {headings.map((heading) => (
        <div key={heading._key}>
          <Link href={"#" + slugify(getChildrenText(heading))}>
            {getChildrenText(heading)}
          </Link>
        </div>
      ))}
    </div>
  );
}
