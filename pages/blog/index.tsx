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
      <div className="fixed flex left-0 right-0 will-change-transform bg-zinc-50 md:flex-row-reverse">
        <motion.section
          ref={scrollRef}
          style={
            isMedium && scrollRange >= viewportW ? { x: transform } : { x: 0 }
          }
          className="relative flex flex-col md:flex-row-reverse max-w-max h-[100vh] items-center justify-end px-10 pt-5"
        >
          {posts.map((post) => (
            <div key={post._id} className="group mt-4 md:ml-10 md:mt-0">
              <Link
                href={`/blog/post/${post.slug.current}`}
                className="relative flex flex-col cursor-pointer w-[90vw] p-5 md:w-28 md:p-10 md:h-[70vh] border
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
