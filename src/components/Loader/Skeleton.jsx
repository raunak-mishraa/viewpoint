import React from "react";

const Skeleton = () => {
  return (
    <div className="max-w-5xl space-y-4">
      <div className="flex p-4 border rounded-lg shadow-md bg-[#E9E9E9] animate-pulse cursor-pointer relative">
        <div className="w-1/3 h-60 bg-[#CCCCCC]"></div>

        <div className="w-2/3 pl-4">
          <div className="h-6 bg-[#CCCCCC] rounded w-3/4 mb-3"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 mb-2"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-3/4 mb-4"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 absolute bottom-6"></div>
        </div>
      </div>
      <div className="flex p-4 border rounded-lg shadow-md bg-[#E9E9E9] animate-pulse cursor-pointer relative">
        <div className="w-1/3 h-60 bg-[#CCCCCC]"></div>

        <div className="w-2/3 pl-4">
          <div className="h-6 bg-[#CCCCCC] rounded w-3/4 mb-3"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 mb-2"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-3/4 mb-4"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 absolute bottom-6"></div>
        </div>
      </div>
      <div className="flex p-4 border rounded-lg shadow-md bg-[#E9E9E9] animate-pulse cursor-pointer relative">
        <div className="w-1/3 h-60 bg-[#CCCCCC]"></div>

        <div className="w-2/3 pl-4">
          <div className="h-6 bg-[#CCCCCC] rounded w-3/4 mb-3"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 mb-2"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-full mb-1"></div>
          <div className="h-4 bg-[#CCCCCC] rounded w-3/4 mb-4"></div>

          <div className="h-4 bg-[#CCCCCC] rounded w-1/2 absolute bottom-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
