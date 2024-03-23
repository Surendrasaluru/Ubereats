import React from "react";

const Shimmer = () => {
  return (
    <div className="card  bg-slate-400  cursor-pointer rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
      <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default Shimmer;
