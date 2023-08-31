import React from "react";
import Hero from "./hero";
import About from "./about";
import Achievements from "./achievements";
import Contact from "./contact";
import Link from "next/link";

type Props = {
  pageTitle: string;
  pageDescription: string;
  name: string;
  description: string;
  image: Image;
  achievements: Block[];
  socials: Social[];
};

export default function HomePage({
  pageTitle,
  pageDescription,
  name,
  description,
  image,
  achievements,
  socials,
}: Props) {
  return (
    <div className="text-[#33272a] pb-[80px]">
      {/* Hero */}
      <section className="fixed w-full h-screen top-0 left-0 z-10">
        <Hero title={pageTitle} description={pageDescription} />
      </section>

      <div className="relative h-screen z-0" />

      {/* Content */}
      <div
        className="relative w-full items-center bg-[#faeee7] space-y-5 sm:space-y-10 
        px-5 sm:px-10 z-20"
      >
        {/* About */}
        <section id="#about">
          <About name={name} description={description} image={image} />
        </section>

        {/* Achievements */}
        <section id="#achievements">
          <Achievements achivements={achievements} />
        </section>

        {/* Contact */}
        <section id="#contact">
          <Contact socials={socials} />
        </section>

        {/* Link to Repo */}
        <section
          id="veiw-code"
          className="w-full flex items-center justify-center
          text-sm tracking-wider"
        >
          check out the code for this website{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/boogerman919/himetsai.com"
            className="underline decoration-[#ff7777] decoration-2 text-[#ff7777]
          font-normal tracking-wider hover:no-underline hover:blur-[1px] transition
          duration-200 pl-1"
          >
            here
          </a>
        </section>
      </div>
    </div>
  );
}
