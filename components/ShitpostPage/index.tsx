"use client";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMedium } from "../../hooks/useMediaQuery";
import PostCard from "../../components/PostCard";
import { useSearchParams, notFound } from "next/navigation";
import Link from "next/link";

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
  const cat = searchParams.get("cat");

  const categories = new Map(
    posts.map((post) => [
      post.category.slug.current.toString(),
      post.category.title,
    ])
  );

  if (cat && !categories.has(cat)) {
    notFound();
  }

  useLayoutEffect(() => {
    setScrollRange(scrollRef.current!.scrollWidth);
  }, [scrollRef, cat, isMedium]);

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
      {cat && (
        <div
          className="z-10 flex md:fixed items-center md:justify-center px-8 pt-2 
          md:px-0 md:py-0 md:right-[60px] md:bottom-0 md:h-[10%]"
        >
          <p className="md:text-lg">
            Filter:{" "}
            <span
              className="rounded-sm border border-[#33272a] text-[#33272a] 
              bg-[#fffffe] p-1 hover:line-through"
            >
              <Link href="/shitpost" className="">
                #{categories.get(cat)}
              </Link>
            </span>
          </p>
        </div>
      )}
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
              (post.category.slug.current.toString() === cat || !cat) && (
                <PostCard key={post._id} post={post} />
              )
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
