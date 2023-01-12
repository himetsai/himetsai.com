import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsLarge } from "../lib/useMediaQuery";

type Props = {
  social: Social;
};

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
  root?: string;
};

export default function SocialButton({ social }: Props) {
  const isLarge = useIsLarge();
  const btn = useRef<HTMLDivElement | null>(null);

  const iconLoader = ({ src, width }: ImageLoaderProps): string =>
    `https://cdn.simpleicons.org/${src}/?w=${width}`;

  /**
   * check if button is a link.
   * if is link return link.
   * if not return a button that copies usename to clipboard.
   */
  return social.link ? (
    <Link
      href={social.url}
      className="flex flex-row min-w-fit items-center justify-center
            lg:justify-start p-2 lg:px-3 gap-2 rounded-lg border-[1.5px]
           border-[#33272a] group hover:bg-[#ff7777]
           hover:text-[#fffffe] transition ease-in-out duration-200"
    >
      <Image
        loader={iconLoader}
        height="24"
        width="24"
        src={social.slug.current}
        alt={social.title}
        className="brightness-0 group-hover:invert transition ease-in-out duration-200"
      />
      {isLarge && <h4 className="font-medium">{social.username}</h4>}
    </Link>
  ) : (
    <div ref={btn} className="tooltip" data-tip="copied!">
      <p
        className="flex flex-row min-w-fit items-center justify-center
            lg:justify-start p-2 lg:px-3 gap-2 rounded-lg border-[1.5px]
           border-[#33272a] group hover:bg-[#ff7777]
           hover:text-[#fffffe] transition ease-in-out duration-200"
        onClick={() => {
          navigator.clipboard.writeText(social.username);
          btn.current!.classList.add("tooltip-open");
          setTimeout(() => btn.current!.classList.remove("tooltip-open"), 500);
        }}
      >
        <Image
          loader={iconLoader}
          height="24"
          width="24"
          src={social.slug.current}
          alt={social.title}
          className="brightness-0 group-hover:invert transition ease-in-out duration-200"
        />
        {isLarge && <h4 className="font-medium">{social.username}</h4>}
      </p>
    </div>
  );
}
