import Head from "next/head";
import { GetStaticProps } from "next";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { fetchPosts } from "../../lib/fetchData/fetchPosts";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMedium } from "../../hooks/useMediaQuery";
import PostCard from "../../components/PostCard";

React.useLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Props = {
  posts: Post[];
};

export default function Shitpost({ posts }: Props) {
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
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>hime's shitposts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ray Tsai's shitposts" key="desc" />
        <meta property="og:site_name" content="himetsai" />
        <meta property="og:type" content="shitposts page" />
        <meta property="og:title" content="hime's shitpost" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content="hime's shitpost" />
        <meta name="twitter:description" content="Ray Tsai's shitposts" />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
              post.category.title != "工作" && (
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: Post[] = await fetchPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};
