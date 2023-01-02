import { GetStaticProps } from "next";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { fetchPosts } from "../../lib/fetchPosts";
import Link from "next/link";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMedium } from "../../lib/useMediaQuery";

React.useLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const ghostRef = useRef<null | HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);
  const isMedium: boolean = useIsMedium();

  useLayoutEffect(() => {
    setScrollRange(scrollRef.current!.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current!);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollRange - viewportW]
  );

  return (
    <>
      <div
        className="flex w-full bg-[#faeee7] pt-5
        md:fixed md:w-auto md:left-0 md:right-0 md:flex-row-reverse md:will-change-transform"
      >
        <motion.section
          ref={scrollRef}
          style={
            isMedium && scrollRange >= viewportW ? { x: transform } : { x: 0 }
          }
          className="relative flex flex-col w-full items-center py-[60px] gap-10
          md:h-[100vh] md:py-0 md:flex-row-reverse md:w-auto md:max-w-max md:justify-end md:px-[60px]"
        >
          {/* Posts */}
          {posts.map((post) => (
            <div key={post._id} className="group">
              <Link
                href={`/blog/post/${post.slug.current}`}
                className="relative flex flex-col cursor-pointer w-[90vw] md:w-auto md:h-[70vh] border
            border-[#33272a] rounded-md shrink-0 bg-[#fffffe] 
            group-hover:bg-[#ff7777] group-hover:scale-105 transition duration-200 ease-in-out"
              >
                <div className="h-full flex flex-col justify-between items-start px-2 py-4 md:vertical-title">
                  <p className="relative text-sm">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2
                    className="text-3xl font-bold text-start text-[#33272a]
                  group-hover:text-[#fffffe] px-4 py-9 mb-15"
                  >
                    {post.title}
                  </h2>
                  <p className="relative self-end text-sm">{`# ${post.category.title}`}</p>
                </div>
              </Link>
            </div>
          ))}
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={
          isMedium && scrollRange >= viewportW
            ? { height: scrollRange }
            : { height: 0 }
        }
        className="w-full"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: Post[] = await fetchPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};
