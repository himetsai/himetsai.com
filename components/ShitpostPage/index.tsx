"use client";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMedium } from "../../hooks/useMediaQuery";
import PostCard from "../../components/PostCard";
import { useSearchParams, notFound } from "next/navigation";

React.useLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Props = {
  posts: Post[];
};

export default function ShitpostPage({ posts }: Props) {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const ghostRef = useRef<null | HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);
  const isMedium: boolean = useIsMedium();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  if (category) {
    const categories = new Set(
      posts.map((post) => post.category.slug.current.toString())
    );

    if (!categories.has(category))
      notFound();
  }

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
        md:fixed md:w-auto md:right-0 md:flex-row-reverse md:will-change-transform"
      >
        <motion.section
          ref={scrollRef}
          style={
            isMedium && scrollRange >= viewportW ? { x: transform } : { x: 0 }
          }
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative flex flex-col w-full items-center pb-10 
          gap-5 md:gap-10 md:h-[100vh] md:pb-0 md:flex-row-reverse
          md:w-auto md:max-w-max md:justify-end md:px-[60px]"
        >
          {/* Posts */}
          {posts.map(
            (post) =>
              (post.category.slug.current.toString() === category ||
                !category) && <PostCard key={post._id} post={post} />
          )}
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={
          scrollRange >= viewportW
            ? { height: scrollRange }
            : { height: "100vh" }
        }
        className="w-full -z-20 fixed md:relative"
      />
    </>
  );
}
