import { useState } from "react";

export default function ({ sidebar, setSidebar, selected, setSelected }) {
  const test = [
    {
      name: "All",
    },
    {
      name: "Songs",
    },
    {
      name: "Video Essays",
    },
    {
      name: "Random Clips",
    },
    {
      name: "uhh",
    },
    {
      name: "Cool Videos",
    },
  ];
  return (
    <div
      className={`border-y border-[#303030] text-white flex pl-6 bg-[#212121] h-14 items-center gap-3 w-[100%] text-sm min-w-max fixed top-[56px] ${
        sidebar ? "left-[240px]" : "left-[0px]"
      }`}
    >
      {test.map((x, idx) =>
        idx === selected ? (
          <div className="px-3 py-2 h-8 bg-white text-black flex items-center justify-center rounded-[32px]">
            {x.name}
          </div>
        ) : (
          <div
            onClick={() => setSelected(idx)}
            className="hover:bg-[#404040] border-[0.3px] border-[#AAAAAA] px-3 py-2 h-8 bg-[#303030] flex items-center justify-center rounded-[32px]"
          >
            {x.name}
          </div>
        )
      )}
    </div>
  );
}
{
  /* <div className="px-2 py-3 h-8 bg-white text-black flex items-center justify-center rounded-[32px]">All</div>
            <div className="border-[0.3px] border-[#AAAAAA] px-2 py-3 h-8 bg-[#303030] flex items-center justify-center rounded-[32px]">Item</div> */
}
