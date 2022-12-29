import React from "react";
import Image from "next/image";
import Link from "next/link";
import post from "../schemas/post";
import { urlFor } from "../lib/sanity.client";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  console.log(posts);
  return (
    <div
      className="flex flex-col relative px-10 justify-evenly mx-auto items-center
    overflow-y-scroll md:overflow-y-hidden md:overflow-x-scroll pb-24"
    >
      <div
        className="flex flex-col md:flex-row items-center w-full relative space-y-10 
      space-x-0 md:space-y-0 md:space-x-[300px] px-10"
      >
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/post/${post.slug.current}`}
            className="flex flex-col group cursor-pointer w-full"
          >
            <div
              className="relative w-full h-80 drop-shadow-xl group-hover:scale-105
          transition-transform duration-200 ease-out"
            >
              <Image
                className="object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div
                className="absolute bottom-0 w-full bg-opacity-20 bg-black 
            backdrop-blur-lg text-white p-5 flex justify-between"
              >
                <div>
                  <p className="font-bold">{post.title}</p>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div
                  className="bg-red-400 flex items-center text-center text-black px-3 py-1 
              rounded-full text-sm font-semibold my-auto"
                >
                  <p>{post.category.title}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
