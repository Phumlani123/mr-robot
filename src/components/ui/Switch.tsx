import React from "react";

export const Switch = () => {
  return (
    <label
      htmlFor="toggle"
      className="inline-flex my-4 items-center space-x-4 cursor-pointer dark:text-[#555]"
    >
      <span className="text-sm text-[#555]">Show All</span>
      <span className="relative">
        <input id="toggle" type="checkbox" className="hidden peer" />
        <div className="w-8 h-4 rounded-full shadow-inner dark:bg-[#555] peer-checked:dark:bg-gray-800"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
      </span>
      <span className="text-sm text-[#555]">Hide All</span>
    </label>
  );
};
