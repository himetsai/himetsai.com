import React from "react";
import Link from "next/link";
import Menu from "./menu";
import { usePathname } from "next/navigation";

type Props = {
  position: "fixed" | "relative";
};

export default function Header({ position }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`${position} w-full z-30 left-0`}>
      <header
        className="top-0 md:top-4 flex items-start justify-between max-w-7xl 2xl:max-w-[85%]
          mx-auto px-5 md:px-10 py-5"
      >
        <div
          className="btn flex flex-row items-center px-2 py-1 rounded-md
          text-[#ff7777] border-[1.5px] border-opacity-0 border-[#33272a]
          hover:bg-[#ff7777] hover:border-opacity-100 hover:text-[#fffffe]"
          onClick={() => {
            if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* scroll to top if page is home */}
          {isHome ? (
            <p className="font-bold text-2xl cursor-pointer">himetsai</p>
          ) : (
            <Link href="/" className="font-bold text-2xl cursor-pointer">
              himetsai
            </Link>
          )}
        </div>
        <Menu />
      </header>
    </div>
  );
}
