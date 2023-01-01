import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import Link from "next/link";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);
  
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  return (
    <motion.section
      ref={scrollRef}
      className="flex flex-col md:flex-row-reverse w-full h-full items-center justify-start px-10 pt-10"
    >
      {posts.map((post) => (
        <div key={post._id} className="group">
          <Link
            href={`/blog/post/${post.slug.current}`}
            className="relative flex flex-col cursor-pointer mt-4 md:ml-5 md:mt-0 w-[90vw] p-5 md:w-28 md:p-10 md:h-[70vh] border
          border-zinc-900 rounded-md shrink-0 bg-zinc-100 group-hover:bg-[#ff7777]"
          >
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-start md:vertical-title">
                {post.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </motion.section>
  );
}
