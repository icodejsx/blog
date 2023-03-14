import React from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
const Trending = () => {
  return (
    <div className="container mx-auto flex   items-center gap-1 w-full">
      <div className="flex flex-row justify-between  w-full ">
        <div>
          <p className="font-bold text-xl text-red-600">TrendingNews</p>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <div className="flex flex-row gap-4 ">
            <p className="hover:bg-red-600 hover:text-white text-xs">All</p>
            <p className="hover:bg-red-600 hover:text-white text-xs">Food</p>
            <p className="hover:bg-red-600 hover:text-white text-xs">
              Life Style
            </p>
            <p className="hover:bg-red-600 hover:text-white text-xs">Racing</p>
            <p className="hover:bg-red-600 hover:text-white text-xs">Sport</p>
            <p className="hover:bg-red-600 hover:text-white text-xs">
              Swimming
            </p>
            <p className="hover:bg-red-600 hover:text-white text-xs">
              Technology
            </p>
            <p className="hover:bg-red-600 hover:text-white text-xs">Travel</p>
            <p className="hover:bg-red-600 hover:text-white text-xs">World</p>
          </div>
          <div className="flex gap-1">
            <ArrowLeft size={20} />
            <ArrowRight size={20} />
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
