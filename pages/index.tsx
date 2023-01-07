import React from "react";
import Hero from "../components/Hero";
import Head from "next/head";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="text-[#33272a] pb-[80px]">
      <Head>
        <title>himetsai</title>
      </Head>

      {/* Hero */}
      <section
        className="fixed -z-10 w-full h-screen
      top-0 left-0"
      >
        <Hero />
      </section>

      <div className="h-screen" />

      <div className="bg-[#faeee7] space-y-10 px-10">
        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Achievements */}
        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
