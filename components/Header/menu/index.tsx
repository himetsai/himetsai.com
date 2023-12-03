import React from "react";
import MenuItem from "./menuItem";

type Props = {};

export default function Menu({}: Props) {
  const paths = ["home", "shitpost", "CV", "oodball"];
  return (
    <div className="dropdown dropdown-hover dropdown-end group -mt-1">
      {/* Icon */}
      <label
        tabIndex={0}
        className="btn min-h-min h-10 px-2 py-[0.35rem] m-1 transition ease-in-out duration-200 
        bg-[#fffffe] border-[1.5px] border-[#33272a] rounded-md group-hover:bg-[#ff7777] 
        group-hover:text-[#fffffe]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>

      {/* Items */}
      <ul
        tabIndex={0}
        className="dropdown-content space-y-1 menu p-2 shadow bg-[#fffffe] border-[1.5px] 
        border-[#33272a] rounded-box w-52"
      >
        {/* putting a route checks to prevent page transition glitch */}
        {paths.map((path) => (
          <MenuItem key={path} path={path} />
        ))}
      </ul>
    </div>
  );
}
