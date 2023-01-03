import React from "react";
import ContentTag from "./ContentTag";

type Props = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
  return (
    <div>
      {headings.map((heading) => (
        <ContentTag key={heading._key} heading={heading} />
      ))}
    </div>
  );
}
