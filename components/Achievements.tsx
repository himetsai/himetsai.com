import React from "react";

type Props = {};

export default function Achievements({}: Props) {
  return (
    <div
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] relative items-center
      text-left justify-evenly mx-auto px-10 py-5"
    >
      <h4 className="font-semibold text-2xl text-center py-5">Achievements</h4>
      <ul className="ml-10 py-5 list-disc space-y-5 mb-5 text-[#594a4e]">
        <li>
          The High Distinction Award in the Lihu Elementary School hard pen
          calligraphy competition.
        </li>
        <li>Shook hands with the mayor of Taipei for being a model student.</li>
        <li>Akali mastery 7.</li>
        <li>
          Second place in the fall 2019 acgn-stock.com trading competition.
        </li>
        <li>Jump King.</li>
        <li>Touched a mosquito swatter with my ring finger.</li>
        <li>
          Best Smash Ultimate Byleth player in UCSD Tapesty building suite 1005.
        </li>
        <li>Confessed to a girl and got accepted after two weeks.</li>
        <li>
          Got a C in an introductory programming class using Java to show my
          preference in coding languages.
        </li>
      </ul>
    </div>
  );
}
