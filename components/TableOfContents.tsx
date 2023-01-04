import React, { useState, useEffect } from "react";
import ContentTag from "./ContentTag";
import { slugify } from "../lib/slugify";

type Props = {
  headings: Heading[];
};

type Position = {
  title: string;
  position: number | null;
};

export const getChildrenText = (heading: Heading): string =>
  heading.children.map((node) => node.text).join("");

export default function TableOfContents({ headings }: Props) {
  /**
   * record heading positions
   */
  const contentTags: Position[] = [{ title: "Top", position: 0 }];

  /**
   * initializing contentTags
   */
  headings.map((heading) =>
    contentTags.push({
      title: slugify(heading.children[0].text),
      position: null,
    })
  );

  /**
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState<string>("null");

  /**
   * The MutationObserver watches for a few different
   * events, including page resizing when new elements might be
   * added to the page (potentially changing the location of our
   * anchor points)
   * it also listens to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    getAnchorPoints();
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById("root")!, {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Programmatically determine where to set AnchorPoints for our Content Page
   */
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - window.innerHeight / 2 + 100;

    for (const key of contentTags) {
      let section = document.getElementById(key.title);
      if (!section) continue;
      key.position = section.getBoundingClientRect()?.top + curScroll;
    }

    handleScroll();
  };

  /**
   * Determine which section the user is viewing, based on their scroll-depth
   * Locating the active section allows us to update our Table of Content to
   * show which item is currently active
   */
  const handleScroll = () => {
    const curPos: number = window.scrollY;
    let curSection: string = "Top";

    for (const section of contentTags) {
      if (section.position! > curPos) break;
      curSection = section.title;
    }

    if (curSection !== activeItem) {
      setActiveItem(curSection!);
    }
  };

  return (
    <div className="relative tracking-wide">
      <p className="text-xs opacity-60">Contents</p>
      <div className="pt-2">
        {headings.map((heading) => {
          const title: string = getChildrenText(heading);
          const active: boolean = slugify(title) === activeItem;
          return (
            <ContentTag key={heading._key} title={title} active={active} />
          );
        })}
      </div>
    </div>
  );
}
