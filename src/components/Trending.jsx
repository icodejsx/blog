import React from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
const Trending = () => {
  return (
    <div className="container mx-auto flex   items-center gap-1 w-full">
      <div className="flex flex-row justify-between  w-full border-b-2 border-black pb-2 ">
        <div>
          <p className="font-bold text-xl text-red-500">TrendingNews</p>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <div className="flex flex-row gap-3 ">
            <p className="text-red-500 text-xs p-1 rounded-sm">All</p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Food
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Life Style
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Racing
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Sport
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Swimming
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Technology
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              Travel
            </p>
            <p className="hover:bg-red-500 hover:text-white text-xs p-1 rounded-sm">
              World
            </p>
          </div>
          <div className="flex gap-1">
            <ArrowLeft size={15} />
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Trending;
