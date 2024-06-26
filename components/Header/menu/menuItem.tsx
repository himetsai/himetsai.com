import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  path: string;
};

export default function MenuItem({ path }: Props) {
  const currpath = usePathname();
  const pathname = path === "home" ? "/" : `/${path}`;
  const searchParams = useSearchParams();
  return (
    <li>
      {currpath === pathname && !searchParams.toString() ? (
        <h4
          className="font-medium cursor-point transition ease-in-out duration-200 
            hover:bg-[#ff7777] hover:text-[#fffffe] border-[1.5px] border-[#33272a]
            border-opacity-0 hover:border-opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {path}
        </h4>
      ) : (
        <Link
          href={pathname}
          className="font-medium cursor-point transition ease-in-out duration-200 
            hover:bg-[#ff7777] hover:text-[#fffffe] border-[1.5px] border-[#33272a]
            border-opacity-0 hover:border-opacity-100"
        >
          {path}
        </Link>
      )}
    </li>
  );
}
