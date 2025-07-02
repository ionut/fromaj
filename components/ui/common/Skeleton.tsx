import React from "react";

const Skeleton = () => {
  return (
    <li className="border border-green/40 shadow-2xl rounded-xl grid grid-rows-subgrid row-span-3">
      <div className="animate-pulse space-y-2">
        <div className="rounded-xl bg-green/50 h-[425px] w-full opacity-50"></div>
        <div className="space-y-6 py-1">
          <div className="h-[24px] bg-green/50 rounded"></div>
          <div className="h-[56px] bg-green/50 rounded"></div>
        </div>
      </div>
    </li>
  );
};

export default Skeleton;
